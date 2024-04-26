<script>


export default {
  name: "cours1-content",
}
</script>
<template>


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