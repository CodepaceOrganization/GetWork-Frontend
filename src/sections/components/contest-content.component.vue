<script>

import Cours1Content from "@/sections/components/courses/cours1-content.vue";
import Cours2Content from "@/sections/components/courses/cours2-content.vue";
import Cours3Content from "@/sections/components/courses/cours3-content.vue";
import Cours4Content from "@/sections/components/courses/cours4-content.vue";
import RankingContent from "@/sections/components/ranking/ranking-content.component.vue";

export default {
  name: "contest",
  components: {RankingContent, Cours4Content, Cours3Content, Cours2Content, Cours1Content},
  title: "Contest"
}
</script>

<template>
  <div class="parent-container">
    <div class="FondContainer">
      <img alt="user header" class="imageContainer" src="https://github.com/CodepaceOrganization/GetWork-Frontend/assets/142842509/b4ce5e39-1ee8-4e16-8d93-c84248ca8cec" />

      <p class="getworkContainer">
        GetWork Contest
      </p>
    </div>
    <div class="courses-container left-auto">
      <cours1-content></cours1-content>
      <cours2-content></cours2-content>
      <cours3-content></cours3-content>
      <cours4-content></cours4-content>
    </div>
    <div class="ranking-container">
      <ranking-content></ranking-content>
    </div>
  </div>


</template>


<style>
.parent-container {
  display: flex;
  flex-direction: column;
}
.courses-container {
  flex: 1; /* Esto hace que ocupe todo el espacio disponible */
}
.FondContainer {
  position: relative;
  width: 100%; /* Ancho del contenedor igual al ancho de la página web */
  height: 250px; /* Altura del contenedor */
  background-color: #E4E4E4;
  top: 0;
  left: 0;
  z-index: 999;
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

</style>

