<script>

import Cours1Content from "@/public/pages/Contest/courses/cours1-content.vue";
import Cours2Content from "@/public/pages/Contest/courses/cours2-content.vue";
import Cours3Content from "@/public/pages/Contest/courses/cours3-content.vue";
import Cours4Content from "@/public/pages/Contest/courses/cours4-content.vue";

export default {
  name: "contest",
  components: {Cours4Content, Cours3Content, Cours2Content, Cours1Content},
  title: "Contest"
}
</script>

<template>
  <cours1-content></cours1-content>
  <cours2-content></cours2-content>
  <cours3-content></cours3-content>
  <cours4-content></cours4-content>
</template>




