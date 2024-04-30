<script>
import SectionContest from './contest.component.vue';
export default {
  name: "contest-list",
  components: {SectionContest},
  props: {
    courses: Array
  }
}
</script>

<template>
  <div class="section-contest">
    <img class="imagen"
         src="https://github.com/CodepaceOrganization/GetWork-Frontend/assets/142842509/b4ce5e39-1ee8-4e16-8d93-c84248ca8cec"
         alt="contest">
    <p>GetWork Contest</p>
  </div>
  <div v-for="course in courses">
    <section-contest :course="course"></section-contest>
  </div>
</template>

<style scoped>
.imagen {
  margin-top: 2rem;
}

.section-contest {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #E4E4E4;
}

p {
  font-size: 2rem;
  font-weight: bold;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
</style>