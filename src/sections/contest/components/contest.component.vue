<script >
import {Course} from "@/sections/contest/model/course.entity.js";

export default {
  name: "section-contest",

  // Define los props esperados por el componente
  props: {
    course: Course,
  }
}
</script>

<template>
  <pv-card class="custom-card" style="width: 35rem; height: 13rem; overflow: hidden">
    <template #content>

      <div class="card-content">
        <div class="image-container">
          <img :alt="course.title" :src="course.image" class="card-image" />
        </div>
        <div class="card-details">
          <h2 class="card-title">{{course.title}}</h2>
          <p>{{ course.date }}</p>
        </div>
      </div>
    </template>
  </pv-card>
</template>


<style scoped>
.custom-card {
  margin-top: 3rem;
  margin-left: 16rem;
  margin-bottom: 3rem;
}

.card-content {
  display: flex;
  align-items: center;
}

.image-container {
  margin-right: 1rem; /* Espacio entre la imagen y los detalles */
}

.card-details {
  flex-grow: 1; /* Permitir que los detalles ocupen el espacio restante */
}

.card-title {
  margin-bottom: 0.5rem; /* Espacio entre el título y la fecha */
}
</style>