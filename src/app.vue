<script>
import FooterContent from "/src/public/components/footer-content.component.vue"
import HeaderContent from "@/public/components/header-content.component.vue";
import SimulacrumComponent from "@/sections/components/simulacrum.component.vue";
import Simulacrum from "@/sections/components/simulacrum.component.vue";
import SectionSimulacrum from "@/sections/components/simulacrum.component.vue";

export default{
name: 'Main',
components: {SectionSimulacrum, Simulacrum, HeaderContent, FooterContent, SimulacrumComponent},
}
</script>

<template>
  <header-content></header-content>
 <footer-content></footer-content>
</template>

<style scoped>
</style>
