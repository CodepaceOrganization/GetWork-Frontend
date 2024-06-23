<script >
export default {
  name: "section-contest",
  props: {
    course: Object,
  }
}
</script>

<template>
  <pv-card class="custom-card" style="width: 35rem; height: 13rem; overflow: hidden">
    <template #content>

      <div class="card-content">
        <div class="image-container">
          <img :alt="course.title" :src="course.urlImage" class="card-image" />
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
  border-width: 10rem;
  margin-top: 3rem;
  margin-left: 2rem;
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

/* Estilos para pantallas pequeñas (menos de 600px) */
@media (max-width: 600px) {
  .custom-card {
    width: 10%;
    margin-left: 0;
    margin-right: 0;
  }

  .card-content {
    flex-direction: column;
    align-items: flex-start;
  }

  .card-image {
    width: 70%; /* Ajusta este valor según tus necesidades */
    height: auto;
  }

  .card-title {
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }
}

/* Estilos para pantallas medianas (entre 600px y 1200px) */
@media (min-width: 600px) and (max-width: 1200px) {
  .custom-card {
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
  }

  .card-content {
    flex-direction: row;
    align-items: center;
  }

  .card-title {
    margin-bottom: 0.5rem;
  }
}
</style>