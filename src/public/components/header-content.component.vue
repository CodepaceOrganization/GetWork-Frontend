<script>
import { useRouter } from 'vue-router';
export default{
  name: "header-content",
  data() {
    return {
      drawer: false,
      items: [
        {label: 'Home', to: '/Home'},
        {label: 'Contest', to: '/Contest'},
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
  <pv-toolbar style="background-color: #BD3F57;" fixed>
    <template #start>
      <pv-avatar image="https://github.com/CodepaceOrganization/Informes/assets/142842509/851f5611-99a5-4c48-af26-87346213f56e" style="width: 62px; height: 32px" />
      <h3 style="color: #FFFFFF;">penerico</h3>

      <div class="flex-column">
        <router-link v-for="item in items" :key="item.label" v-slot="{ navigate, href}" :to="item.to" custom>
          <pv-button :href="href" class="p-button-text text-white" @click="navigate">
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
}

.toolbar h2 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
}
</style>