<script>


export default {
  name: "cours1-content",
}
</script>
<template>

  <div class="FondContainer">
    <p class="getworkContainer">
      GetWork Contest
    </p>
  </div>
  <img alt="user header" class="imageContainer" src="https://github.com/CodepaceOrganization/GetWork-Frontend/assets/142842509/b4ce5e39-1ee8-4e16-8d93-c84248ca8cec" />

  <pv-card style="width: 50rem; overflow: hidden" class="pv-card-container" >
    <template #header class="card-image">
      <img alt="user header" src="https://github.com/CodepaceOrganization/GetWork-Frontend/assets/142842509/37dbe0d4-c7d1-4608-bf35-f9f6eebc568f" />
    </template>

    <template #title class="pv-cardText">
      Weekly Contest 392
    </template>

    <template #subtitle class="pv-cardSubtitle">
      Apr 6 2024 8:30 pm
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