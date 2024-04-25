<script>
import { useRouter } from 'vue-router';
import HeaderContentComponent from "@/public/components/header-content.component.vue";
import HeaderContent from "@/public/components/header-content.component.vue";

export default {
  name: "app",
  components: {HeaderContent, HeaderContentComponent},
  title: "Getwork-Frontend",
}
</script>

<template>
  <header-content></header-content>
  <pv-toast></pv-toast>
  <router-view></router-view>
</template>


