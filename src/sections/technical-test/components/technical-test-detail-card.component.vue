<script>
import {TechnicalTestDetail} from "@/sections/technical-test/model/technical-test-detail.entity.js";

export default {
  name: "technical-test-detail.component",
  props: {
    technicalTestDetail: TechnicalTestDetail,
    index: Number
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
            <p>{{index}}. {{ technicalTestDetail.description }}</p>
          </div>
          <div v-if="technicalTestDetail.progress === 'Earrings'" class="right-container">
            <p :class="technicalTestDetail.difficulty.toLowerCase()">{{ technicalTestDetail.difficulty }}</p>
          </div>
          <div v-else-if="technicalTestDetail.progress === 'InProgress'" class="right-container">
            <p :class="getStatusColor(technicalTestDetail.status)">{{ technicalTestDetail.status }}/100</p>
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
  align-items: center; /* Centra verticalmente */
}

.column {
  display: flex;
  flex-direction: row; /* Asegura que los elementos estén en fila */
  justify-content: center; /* Centra horizontalmente los elementos en la fila */
  align-items: center; /* Centra verticalmente los elementos en la fila */
  flex: 1; /* Hace que la columna ocupe todo el espacio disponible */
}

.left-container {
  flex: 0.75; /* Cambia este valor para ajustar el tamaño del contenedor izquierdo */
}
.left-container p{
  margin: 10px;
  line-height: 1.5;
}
.right-container {
  flex: 0.25; /* Cambia este valor para ajustar el tamaño del contenedor derecho */
  display: flex;
  justify-content: center; /* Centra horizontalmente el contenido del right-container */
  align-items: center; /* Centra verticalmente el contenido del right-container */
}

.custom-card {
  width: 100%;
  height: auto; /* Cambia esto según sea necesario */
  min-height: 50px; /* Ajusta la altura mínima según sea necesario */
  border-radius: 10px;
}
</style>