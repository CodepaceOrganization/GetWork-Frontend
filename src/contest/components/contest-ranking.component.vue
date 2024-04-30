<script>

import {Ranking} from "@/contest/model/ranking.entity.js";
export default {
  name: "contest-rankin",
  // Define los props esperados por el componente
  props: {
    ranking: Ranking,
  }
}
</script>

<template>
  <pv-card class="custom-card" style="width: 25rem; height: 7rem; overflow: hidden">
    <template #content>
      <div class="card-content">
        <div class="idContainer">
          {{ ranking.id }}
        </div>
        <div class="image-container">
          <img :alt="ranking.title" :src="ranking.image" class="card-image" />
        </div>
        <div class="nameContainer">
          {{ ranking.name }}
          <p>ranting: {{ ranking.rating }} </p>
        </div>

      </div>
    </template>
  </pv-card>
</template>

<style scoped>

.custom-card {
  display: flex;
  align-items: center;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  border-radius: 10px;
  padding: 10px;
  margin-top: 1.5rem;
  margin-left: 8.5rem;
}

.card-content {
  display: flex;
  align-items: center;
  width: 100%;
}

.idContainer {
  font-size: 20px;
  color: black;
  font-weight: bold;
  margin-right: 10px;
}

.image-container {
  width: 50px;
  height: 50px;
  margin-right: 10px;
  overflow: hidden;
  border-radius: 50%;
}

.card-image {
  width: 100%;
  height: auto;
}

.nameContainer {
  font-size: 16px;
  color: black;
  margin-right: 10px;
}


</style>