<script>
import SectionContest from './contest.component.vue';
import {CoursesApiService} from "@/sections/contest/services/courses-api.service.js";
import SectionContestDetail from './contest-detail.component.vue';
import {CoursesDetailApiService} from "@/sections/contest/services/coursesdetail-api.service.js";
import ContestDetail from "@/sections/contest/components/contest-detail.component.vue";

export default {
  name: "contest-detail-list.component",
  components: {ContestDetail, SectionContest, SectionContestDetail},
  props: ['id'],
  data() {
    return {
      title: "contest",
      courses: [],
      coursesService: null,
      coursesDetail: [],
      coursesDetailService: null,
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
  },
  computed: {
    filteredCourses() {
      return this.courses.filter(course => course.id === Number(this.id));
    },
    
    filteredCoursesDetail() {
      return this.coursesDetail.filter(courseDetail => courseDetail.id === Number(this.id));
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


</style>