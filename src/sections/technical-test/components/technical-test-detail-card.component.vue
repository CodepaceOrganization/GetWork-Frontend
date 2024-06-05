<script>
import {TechnicalTestDetail} from "@/sections/technical-test/model/technical-test-detail.entity.js";
import {TechnicalTestApiService} from "@/sections/technical-test/services/technical-test-api.service.js";

export default {
    name: "technical-test-detail.component",
    props: {
        technicalTestId: Number,
        technicalTestDetail: TechnicalTestDetail,
        technicalTestsDetailsService: null,
        index: Number
    },
    data() {
        return {
            technicalTestId: 0,
            technicalTestsDetailsService: null,
        }
    },
    created() {
        this.technicalTestId = this.$route.params.id;
        this.technicalTestsDetailsService = new TechnicalTestApiService();
        console.log(this.technicalTestId);
    },
    methods: {
        getStatusColor(status) {
          if (status >= 70) {
            return 'status-green';
          } else if (status >= 35) {
            return 'status-orange';
          } else {
            return 'status-red';
          }
        },
        async updateProgress(progress) {
            const apiService = new TechnicalTestApiService();
            try {
                const response = await apiService.getTechnicalTestDetailById(this.technicalTestId,this.technicalTestDetail.id);
                const detail = response.data;
                detail.progress = progress;
                const updateResponse = await apiService.updateProgress(this.technicalTestId, detail);
                console.log(updateResponse.data);
                this.technicalTestDetail.progress = progress;
            } catch (error) {
                console.error(error);
            }
        }

  }
}
</script>

<template>
  <pv-card class="custom-card" style="overflow: hidden">
    <template #content>
      <div class="container">
        <div class="column">
          <div class="left-container">
            <button v-if="technicalTestDetail.progress === 'InProgress'" @click="updateProgress('Earrings')"><i class="pi pi-chevron-left"></i></button>
            <button v-else-if="technicalTestDetail.progress === 'Done'" @click="updateProgress('InProgress')"><i class="pi pi-chevron-left"></i></button>
            <p>{{index}}. {{ technicalTestDetail.description }}</p>
          </div>
          <div v-if="technicalTestDetail.progress === 'Earrings'" class="right-container">
            <p :class="technicalTestDetail.difficulty.toLowerCase()">{{ technicalTestDetail.difficulty }}</p>
            <button @click="updateProgress('InProgress')"><i class="pi pi-chevron-right"></i></button>
          </div>
          <div v-else-if="technicalTestDetail.progress === 'InProgress'" class="right-container">
            <p :class="getStatusColor(technicalTestDetail.status)">{{ technicalTestDetail.status }}/100</p>
            <button @click="updateProgress('Done')"><i class="pi pi-chevron-right"></i></button>
          </div>
          <div v-else-if="technicalTestDetail.progress === 'Done'" class="right-container">
            <p class="status-green">{{ technicalTestDetail.progress }}</p>
          </div>
        </div>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>
.easy {
  color: green;
}
.medium {
  color: orange;
}
.hard {
  color: red;
}
.status-green {
  color: green;
}
.status-orange {
  color: orange;
}
.status-red {
  color: red;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.column {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
}

.left-container {
  flex: 0.75;
  display: flex;
  flex-direction: row; /* Cambia la dirección a fila */
  align-items: center; /* Centra los elementos a lo largo del eje transversal */
  justify-content: space-between; /* Añade espacio entre los elementos */
}
.left-container p {
  margin: 10px;
  line-height: 1.5;
}
.right-container {
  flex: 0.25;
  display: flex;
  justify-content: center;
  align-items: center;
}

.custom-card {
  width: 100%;
  height: auto;
  min-height: 50px;
  border-radius: 10px;
}
button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
}
.pi-chevron-left, .pi-chevron-right {
  /* Agrega aquí el estilo que desees para los iconos */
  color: #000000; /* Cambia el color del icono */
  font-size: 20px; /* Cambia el tamaño del icono */
  margin: 0 10px; /* Agrega margen alrededor del icono */
}

</style>