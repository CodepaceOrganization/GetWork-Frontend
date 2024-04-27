<script>
import FooterContent from "/src/public/components/footer-content.component.vue"
import HeaderContent from "@/public/components/header-content.component.vue";


export default{
name: 'Main',
components: {HeaderContent, FooterContent},
}
</script>

<template>
  <header-content></header-content>
  <router-view></router-view>
  <footer-content></footer-content>
</template>

<style scoped>
  
</style>
