<script>
import SectionContest from './contest.component.vue';
import {CoursesApiService} from "@/sections/contest/services/courses-api.service.js";
import ContestRankin from "@/sections/contest/components/contest-ranking.component.vue";

export default {
  name: "contest-list",
  components: {ContestRankin, SectionContest},
  data() {
    return {
      title: "contest",
      courses: [],
      coursesService: null,
      rankings: [],
      rankinService: null,
    }
  },
  created() {
    this.coursesService = new CoursesApiService();
    this.coursesService.getAllCourses()
        .then(response => {
          this.courses = response.data;
        })
        .catch(e => {
          console.log(e);
        });

    this.rankinService = new CoursesApiService();
    this.rankinService.getRanking()
        .then(response => {
          this.rankings = response.data;
        })
        .catch(e => {
          console.log(e);
        });
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
  <div class="coursesContent">
    <div class="coursesContainer">
      <section-contest v-for="course in courses" :key="course.id" :course="course"></section-contest>
    </div>
    <div class="rankinsContainer">
      <h1 class="title">
        Global Ranking
      </h1>
      <contest-rankin v-for="ranking in rankings" :key="ranking.id" :ranking="ranking"></contest-rankin>
    </div>
  </div>
</template>

<style scoped>

.coursesContent {
  display: flex; /* Hace que los elementos hijos se alineen en una fila */
}

.coursesContainer,
.rankinsContainer {
  flex: 1; /* Hace que los contenedores se expandan para llenar el espacio disponible */
  margin-right: 50px; /* Espacio entre los contenedores */
}


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

.title {
  margin-top: 1.5rem;
  margin-left: 10rem;
}
</style>