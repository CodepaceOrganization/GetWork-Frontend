<script>

import {useRouter} from 'vue-router';

export default {
  name: "header-content",
  data() {
    return {
      drawer: false,
      items: [
        {label: 'Problems', to: '/Problems', class: 'item-1'},
        {label: 'Contest', to: '/Contest', class: 'item-2'},
        {label: 'Simulacrum', to: '/Simulacrum', class: 'item-3'},
        {label: 'Tutors', to: '/Tutors', class: 'item-4'},
        {label: 'User', to: '/User', class: 'item-5'},
        {label: 'Premium', to: '/Premium', class: 'item-6'},
      ]
    }
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    navigateTo(route) {
      const router = useRouter();
      router.push(route);
    }
  }
}
</script>

<template>
  <pv-toolbar class="toolbar" fixed>
    <template #start>
      <pv-avatar
          image="https://github.com/CodepaceOrganization/Informes/assets/142842509/851f5611-99a5-4c48-af26-87346213f56e"
          style="width: 62px; height: 32px"/>

      <div class="flex-column">
        <router-link v-for="item in items" :key="item.label" v-slot="{ navigate, href}" :to="item.to" custom>
          <pv-button :href="href" class="p-button-text text-white" :class="item.class" @click="navigate">
            {{ item.label }}
          </pv-button>
        </router-link>
      </div>
    </template>
  </pv-toolbar>
</template>

<style scoped>

.toolbar {
  background-color: #BD3F57;
  color: white;
  padding: 1rem;
  margin-top: -1rem;
  margin-right: -1rem;
  margin-left: -1rem;
}
.item-1{
  margin-right: 3rem;
  margin-left: 2rem;
}

.item-2{
  margin-right: 3rem;
}

.item-3{
  margin-right: 3rem;
}

.item-4{
  margin-right: 3rem;
}

.item-5{
  margin-left: 55rem;
}

.item-6{
  margin-left: 10rem;
  color: #BD3F57 !important;
  background-color: #ffffff;
}

</style>