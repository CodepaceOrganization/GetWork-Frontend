<script>
import SectionContest from './contest.component.vue';
import {CoursesApiService} from "@/sections/contest/services/courses-api.service.js";
import SectionContestDetail from './contest-detail.component.vue';
import {CoursesDetailApiService} from "@/sections/contest/services/coursesdetail-api.service.js";
import ContestDetail from "@/sections/contest/components/contest-detail.component.vue";
import {GoalApiService} from "../services/goal-api.service.js";
import GoalComponent from "@/sections/contest/components/goal.component.vue"; 


export default {
  name: "contest-detail-list.component",
  components: {ContestDetail, SectionContest, SectionContestDetail, GoalComponent},
  props: ['id'],
  data() {
    return {
      title: "contest",
      courses: [],
      coursesService: null,
      coursesDetail: [],
      coursesDetailService: null,
      goals: [],
      goalsService: null
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
    
    this.coursesDetailService = new CoursesDetailApiService();
    this.coursesDetailService.getCoursesDetail()
        .then(response => {
          this.coursesDetail = response.data;
        })
        .catch(e => {
          console.log(e);
        });

    this.goalsService = new GoalApiService();
    this.goalsService.getGoal()
        .then(response => {
          this.goals = response.data;
        })
        .catch(e => {
          console.log(e);
        });
  },
  computed: {
    filteredCourses() {
      return this.courses.filter(course => course.id === Number(this.id));
    },
    
    filteredCoursesDetail() {
      return this.coursesDetail.filter(courseDetail => courseDetail.id === Number(this.id));
    },
    filteredGoals() {
      return this.goals.filter(goal => goal.id === Number(this.id));
    }
  },
  
}
</script>

<template>
  
  <div class="coursesContent">
    <div class="coursesContainer">
      <section-contest v-for="course in filteredCourses" :course="course" :key="course.id"></section-contest>
    </div>
  </div>

  <div class="goalsContent">
    <div class="goalsContainer">
      <goal-component v-for="goal in filteredGoals" :goal="goal" :key="goal.id"></goal-component>
    </div>
  </div>
  
  <div class="coursesDetailContent">
    <div class="coursesDetailContainer">
      <contest-detail v-for="courseDetail in filteredCoursesDetail" :courseDetail="courseDetail" :key="courseDetail.id"></contest-detail>
    </div>
  </div>
  
</template>

<style scoped>

.coursesContent {
  display: flex; /* Hace que los elementos hijos se alineen en una fila */
}

p {
  font-size: 2rem;
  font-weight: bold;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

/* Estilos para pantallas pequeñas (menos de 600px) */
@media (max-width: 600px) {
  .coursesContent,
  .coursesDetailContent {
    flex-direction: column;
  }

  .coursesContainer,
  .coursesDetailContainer {
    width: 100%;
    margin-right: 0;
  }
}

/* Estilos para pantallas medianas (entre 600px y 1200px) */
@media (min-width: 600px) and (max-width: 1200px) {
  .coursesContent,
  .coursesDetailContent {
    flex-direction: row;
  }

  .coursesContainer,
  .coursesDetailContainer {
    width: 80%;
    margin-right: 10%;
  }
}


</style>