<script>
import FooterContent from "/src/public/components/footer-content.component.vue"
import HeaderContent from "@/public/components/header-content.component.vue";
import {CoursesApiService} from "@/sections/contest/services/courses-api.service.js";
import ContestList from "@/sections/contest/components/contest-list.component.vue";
import {Course} from "@/sections/contest/model/course.entity.js";
import ProfileManagement from "@/sections/profile-management/components/profile-management.component.vue";


export default{
name: 'Main',
components: {ProfileManagement, HeaderContent, FooterContent, ContestList},
  data() {
    return {
      //sidebarVisible: false,
      courses: [],
      errors: [],
      courseApi: new CoursesApiService()
    }
  },
  
  methods: {
    // Build article list from response data
    buildCourseListFromResponseData(courses) {
      return courses.map(course =>
          new Course(course.title, course.date, course.url));
    },
  }
}
</script>

<template>
  <header-content></header-content>
  <router-view></router-view>
  <footer-content></footer-content>
</template>

<style scoped>
  
</style>
