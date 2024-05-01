<script>
import { TutorsApiService } from "@/sections/tutors/services/tutors-api.service.js";

export default {
  data() {
    return {
      cards: []
    };
  },
  mounted() { 
    this.fetchCards();
  },
  methods: {
    fetchCards() {
      const apiService = new TutorsApiService();
      apiService.getTutors()
          .then(response => {
            console.log("Datos de la API:", response.data); // Depurar datos de la API
            // Filtrar elementos duplicados por id
            const uniqueTutors = response.data.filter((tutor, index, self) =>
                index === self.findIndex(t => t.id === tutor.id)
            );

            console.log("Tutores únicos:", uniqueTutors); // Depurar tutores únicos

            // Mapear los tutores únicos a la lista de cards
            this.cards = uniqueTutors.map(tutor => ({
              id: tutor.id,
              name: tutor.name,
              description: tutor.description,
              image: tutor.image,
              times: tutor.times
            }));
          })
          .catch(error => {
            console.error(error);
          });
    },

  }
};
</script>

<template>
  <div class="cards-container">
    <div v-for="card in cards" :key="card.id" class="card-item">
      <pv-card class="pv-card">
        <template #header>
          <img :src="card.image" :alt="card.name" class="image" />
        </template>
        <template #title>
          <div class="name">
          {{ card.name }}
          </div>
        </template>
        <template #content>
          <div class="description">{{ card.description }}</div>
          <div class="times-container">
            <label for="time">Selecciona un horario:</label>
            <select id="time" v-model="selectedTime" @change="reserveTime(card.id)">
              <option v-for="time in card.times" :key="time">{{ time }}</option>
            </select>
          </div>
        </template>
        <template #footer>
          <div class="button-container">
            <pv-button label="Reservar" class="btn_reservar"/>
          </div>
        </template>
      </pv-card>
    </div>
  </div>
</template>

<style scoped>
.cards-container {
  display: flex;
  flex-direction: column; /* Cambiamos la dirección a columna para que las tarjetas se muestren una debajo de la otra */
  align-items: center; /* Alineamos las tarjetas al centro horizontalmente */
}

.card-item {
  width: 90%; /* Establecemos el ancho al 100% para que las tarjetas ocupen todo el ancho disponible */
  margin-bottom: 1.5rem;
  margin-top: 3.5rem;

}

.pv-card {
  border-radius: 18px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  background-color: #f9f9f9;
}

.image {
  width: 20%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.name{
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.description {
  margin-bottom: 1rem;
}

.times-container {
  margin-bottom: 1rem;
}

.times-container label {
  margin-right: 0.5rem;
}

.times-container select {
  padding: 0.5rem;
  border-radius: 5px;
}

.btn_reservar {
  background-color: #BD3F57;
  color: white;
  padding: 0.5rem 1.6rem;
  border-radius: 14px;
}
</style>

