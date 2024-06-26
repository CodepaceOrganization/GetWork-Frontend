<script>
import technicalTestDetailCardComponent from "@/sections/technical-test/components/technical-task-card.component.vue";
import {TechnicalTaskApiService} from "@/sections/technical-test/services/technical-task-api.service.js";
import {useAuthenticationStore} from "@/sections/iam/services/authentication.store.js";

export default {
  name: "technical-test-detail-list",
  components: {technicalTestDetailCardComponent},
  props: ['id'],
  data() {
    return {
      title: "details",
      technicalTestDetails: [],
      technicalTestsDetailsService: null,
      authenticationStore: useAuthenticationStore()
    }
  },
  async created() {
      this.technicalTestsDetailsService = new TechnicalTaskApiService();
      await this.assignUserToTask(this.authenticationStore.currentUserId);
      this.technicalTestsDetailsService.getTechnicalTestDetail(this.id, this.authenticationStore.userId)
          .then(response => {
              this.technicalTestDetails = response.data;
          })
          .catch(e => {
              console.log(e);
          });
  },
  methods: {
        async assignUserToTask(userId) {
            try {
                await this.technicalTestsDetailsService.assignUserToTechnicalTask(this.id, userId);
            } catch (error) {
                console.error(error);
            }
        },
      async updateProgress(progress, technicalTestDetailId) {
          try {
              const updateResponse = await this.technicalTestsDetailsService.updateProgress(technicalTestDetailId, this.authenticationStore.currentUserId, progress);
              console.log(updateResponse.data);
              const technicalTestDetail = this.technicalTestDetails.find(detail => detail.id === technicalTestDetailId);
              if (technicalTestDetail) {
                  technicalTestDetail.progress = progress;
              }
          } catch (error) {
              console.error(error);
          }
      }
    },
    computed: {
    earrings() {
      return this.technicalTestDetails.filter(detail => detail.progress === "Earrings");
    },
    inProgress() {
      return this.technicalTestDetails.filter(detail => detail.progress === "InProgress");
    },
    done() {
      return this.technicalTestDetails.filter(detail => detail.progress === "Done");
    }
  }
};
</script>

<template>
  <div>
    <div class="container">
      <div class="column">
        <h2 class="title">Earrings</h2>
        <div class="earrings-container">
          <div class="column-subtitles">
            <div class="left-container">
              <h2>Main Task</h2>
            </div>
            <div class="right-container">
              <h2>Difficulty</h2>
            </div>
          </div>
          <technical-test-detail-card-component
              class="technical-test-card"
              v-for="(technicalTestDetail, index) in earrings"
              :key="technicalTestDetail.id"
              :technicalTestDetail="technicalTestDetail"
              :index="index + 1"
              @update-progress="updateProgress"
          ></technical-test-detail-card-component>
        </div>
      </div>
      <div class="column">
        <h2 class="title">In Progress</h2>
        <div class="inProgress-container">
          <div class="column-subtitles">
            <div class="left-container">
              <h2>Main Task</h2>
            </div>
            <div class="right-container">
              <h2>Status</h2>
            </div>
          </div>
          <technical-test-detail-card-component
              class="technical-test-card"
              v-for="(technicalTestDetail, index) in inProgress"
              :key="technicalTestDetail.id"
              :technicalTestDetail="technicalTestDetail"
              :index="index + 1"
              @update-progress="updateProgress"
          ></technical-test-detail-card-component>
        </div>
      </div>
      <div class="column">
        <h2 class="title">Done</h2>
        <div class="done-container">
          <div class="column-subtitles">
            <div class="left-container">
              <h2>Main Task</h2>
            </div>
            <div class="right-container">
              <h2>Status</h2>
            </div>
          </div>
          <technical-test-detail-card-component
              class="technical-test-card"
              v-for="(technicalTestDetail, index) in done"
              :key="technicalTestDetail.id"
              :technicalTestDetail="technicalTestDetail"
              :index="index + 1"
              @update-progress="updateProgress"
          ></technical-test-detail-card-component>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Asap:ital,wght@0,100..900;1,100..900&display=swap');
.container {
  display: flex;
  justify-content: center;
  width: 80%;
  margin: 20px auto;
}

.column {
  margin-top: 20px;
  flex: 1;
  padding: 0 10px;
}
.column h2 {
  font-family: Sans-linear-bold, sans-serif;
  text-align: center;
  margin-bottom: 10px;
}
.column .title{
  font-family: 'Asap', serif;
  color: rgba(26, 26, 26, 0.749);
  font-size: 32px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px;
}
.earrings-container,
.inProgress-container,
.done-container {
  background-color: #BD3F57;
  border-radius: 30px;
  padding: 10px;
  margin-bottom: 20px;
}

.column-subtitles {
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
}

.column-subtitles h2{
  color: #ffffff;
}
.left-container {
  flex: 0.75;
}

.right-container {
  flex: 0.25;
  display: flex;
  justify-content: center;
  align-items: center;
}
.technical-test-card{
  margin-bottom: 15px;
}
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
  .column {
    width: 100%;
  }
}
</style>
