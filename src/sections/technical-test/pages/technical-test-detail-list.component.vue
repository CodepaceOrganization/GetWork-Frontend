<script>
import technicalTestDetailCardComponent from "@/sections/technical-test/components/technical-test-detail-card.component.vue";
import {TechnicalTestApiService} from "@/sections/technical-test/services/technical-test-api.service.js";

export default {
  name: "technical-test-detail-list",
  components: {technicalTestDetailCardComponent},
  props: ['id'],
  data() {
    return {
      title: "details",
      technicalTestDetails: [],
      technicalTestsDetailsService: null,
    }
  },
  created() {
    this.technicalTestsDetailsService = new TechnicalTestApiService();

    this.technicalTestsDetailsService.getTechnicalTestDetail(this.id)
        .then(response => {
          this.technicalTestDetails = response.data;
        })
        .catch(e => {
          console.log(e);
        });
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
</style>
