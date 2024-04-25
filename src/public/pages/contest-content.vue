<script>
export default {
  name: "contest",
  title: "Contest"
}
</script>

<template>

  <div class="ImageContainer">
    <img alt="user header" src="https://github.com/CodepaceOrganization/GetWork-Frontend/assets/142842509/b4ce5e39-1ee8-4e16-8d93-c84248ca8cec" />
    <p class="getworkContainer">
      GetWork Contest
    </p>
  </div>


  <pv-card style="width: 25rem; overflow: hidden" >
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
.ImageContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #E4E4E4;
}

.getworkContainer {
  position: absolute;
  bottom: 10px; /* Coloca el texto en la parte inferior del contenedor de la imagen */
  left: 50%; /* Centra el texto horizontalmente */
  transform: translateX(-50%); /* Ajusta la posición horizontal para centrar el texto */
  font-size: 16px;
  color: #FFF; /* Cambia el color del texto */
  background-color: rgba(0, 0, 0, 0.5); /* Añade un fondo semi-transparente al texto */
  padding: 5px 10px; /* Añade un poco de espacio interno alrededor del texto */
  border-radius: 5px; /* Redondea las esquinas del contenedor de texto */
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

