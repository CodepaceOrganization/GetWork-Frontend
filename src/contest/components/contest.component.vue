<script >
import {Course} from "@/contest/model/course.entity.js";

export default {
  name: "section-contest",

  props: {
    course: Course,
  }
}
</script>

<template>
  <div class="cards">
    <pv-card style="width: 25rem; overflow: hidden">
      <template #title><p>{{ course.title }}</p></template> 
      <template #content><p>{{ course.date }}</p></template>
      <img :alt="course.title" :src="course.image">
    </pv-card>
  </div>
</template>

<style scoped>

.cards {
  margin-top: 3rem;
  margin-left: 3rem;
  margin-bottom: 3rem;

}

</style>