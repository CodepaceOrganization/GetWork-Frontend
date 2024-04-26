<script>


export default {
  name: "cours3-content",
}
</script>
<template>


  <pv-card style="width: 50rem; overflow: hidden" class="pv-card-container" >
    <template #header class="card-image">
      <img alt="user header" src="https://github.com/CodepaceOrganization/GetWork-Frontend/assets/142842509/37dbe0d4-c7d1-4608-bf35-f9f6eebc568f" />
    </template>

    <template #title class="pv-cardText">
      Weekly Contest 390
    </template>

    <template #subtitle class="pv-cardSubtitle">
      Apr 4 2024 8:30 pm
    </template>

    <template #content>

    </template>
  </pv-card>
</template>

<style>

.FondContainer {
  position: relative;
  width: 100%; /* Ancho del contenedor igual al ancho de la página web */
  height: 250px; /* Altura del contenedor */
  background-color: #E4E4E4;
}


.imageContainer {
  position: absolute;
  top: 9%;
  left: 44.5%;
  width: 200px; /* Tamaño absoluto en píxeles */
  height: 200px; /* Tamaño absoluto en píxeles */
  object-fit: cover;
}


.getworkContainer {
  position: absolute;
  top: 84%; /* Centra verticalmente el texto */
  left: 50%; /* Centra el texto horizontalmente */
  transform: translate(-50%, -50%); /* Ajusta la posición horizontal y vertical para centrar el texto */
  font-size: 25px; /* Tamaño de fuente de 25px */
  color: #000; /* Cambia el color del texto a negro */
  font-weight: bold; /* Pone el texto en negrita */
  font-family: 'Mono Linear Extra Bold', monospace; /* Establece la fuente */
  background-color: rgba(0, 0, 0, 0); /* Fondo semi-transparente */
  padding: 5px 10px; /* Añade un poco de espacio interno alrededor del texto */
  border-radius: 5px; /* Redondea las esquinas del contenedor de texto */
}


.pv-card-container {
  display: flex;
  align-items: center;
  margin-top:2%;
}

.card-image {
  flex: 0 0 auto;
  margin-right: 10px;
}

.pv-cardText {
  margin-left: auto; /* Alinea el texto a la derecha */
}

.pv-cardSubtitle {
  margin-left: auto; /* Alinea el texto a la derecha */
}
</style>
<script setup lang="ts">
</script>