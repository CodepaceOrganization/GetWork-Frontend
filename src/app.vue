<script>
import FooterContent from "/src/public/components/footer-content.component.vue"
import HeaderContent from "@/public/components/header-content.component.vue";
import {CoursesApiService} from "@/sections/contest/services/courses-api.service.js";
import ContestList from "@/sections/contest/components/contest-list.component.vue";
import {Course} from "@/sections/contest/model/course.entity.js";


export default{
name: 'Main',
components: {HeaderContent, FooterContent, ContestList},
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
    
    // Fetch articles for selected Source
    /*etArticlesForSource(sourceId) {
      this.newsApi.getArticlesForSource(sourceId)
          .then(response => {
            let articles = response.data.articles;
            this.articles = this.buildArticleListFromResponseData(articles);
            console.log(response.data.articles);
          })
          .catch(e => {
            this.errors.push(e);
          });
    },*/
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
