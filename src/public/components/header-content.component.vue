<template>
  <div>
    <pv-toolbar class="toolbar" fixed>
      <template #start>
        <button @click="toggleDrawer" class="menu-button">
          ☰
        </button>
        <pv-avatar image="https://github.com/CodepaceOrganization/Informes/assets/142842509/851f5611-99a5-4c48-af26-87346213f56e" style="width: 100px; height: 40px"/>
        <div class="flex-row">
          <router-link v-for="(item, index) in items" :key="item.label" v-slot="{ navigate, href }" :to="item.to" custom>
            <pv-button :href="href" class="p-button-text" :class="item.class" :style="{ fontSize: isDrawerOpen ? '16px' : '' }" @click="navigate">
              {{ $t(item.label) }}
            </pv-button>
          </router-link>
        </div>
      </template>
      <template #end>
        <div class="flex-row">
          <router-link v-for="(item, index) in itemsRight" :key="item.label" v-slot="{ navigate, href }" :to="item.to" custom>
            <pv-button :href="href" class="p-button-text" :class="item.class" :style="{ fontSize: isDrawerOpen ? '16px' : '' }" @click="navigate">
              {{ $t(item.label) }}
            </pv-button>
          </router-link>
          <language-switcher></language-switcher>
        </div>
      </template>
    </pv-toolbar>

    <div class="drawer" :class="{ open: drawer}">
      <router-link v-for="(item, index) in items" :key="item.label" :to="item.to" @click="toggleDrawer">
        <pv-button class="p-button-text" :class="item.class" :style="{ marginBottom: isDrawerOpen ? '1rem' : '' }">
          {{ $t(item.label) }}
        </pv-button>
      </router-link>
      <router-link v-for="(item, index) in itemsRight" :key="item.label" :to="item.to" @click="toggleDrawer">
        <pv-button class="p-button-text" :class="item.class" :style="{ marginBottom: isDrawerOpen ? '1rem' : '' }">
          {{ $t(item.label) }}
        </pv-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import LanguageSwitcher from "@/public/components/language-switcher.component.vue";

export default {
  name: "header-content",
  components: {LanguageSwitcher},
  data() {
    return {
      drawer: false,
      isDrawerOpen: false, // Agregamos una variable para rastrear si el drawer está abierto o cerrado
      items: [
        { label: 'navbar.technical-tests', to: '/technical-tests', class: 'item-1' },
        { label: 'navbar.contest', to: '/Contest-list', class: 'item-2' },
        { label: 'navbar.simulacrum', to: '/Simulacrum', class: 'item-3' },
        { label: 'navbar.tutors', to: '/Tutors', class: 'item-4' },
      ],
      itemsRight: [
        { label: 'navbar.users', to: '/User', class: 'item-5' },
        { label: 'Premium', to: '/Premium', class: 'item-6' },
      ]
    }
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
      this.isDrawerOpen = !this.isDrawerOpen; 
    },
    navigateTo(route) {
      const router = useRouter();
      router.push(route);
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.right-items {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
}

.toolbar {
  background-color: #BD3F57;
  color: white;
  padding: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu-button {
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  display: none; /* Ocultar el botón de menú por defecto */
}

.menu-button:hover {
  transform: scale(1.2); /* Cambiamos el tamaño del botón al pasar el mouse */
}

.flex-row {
  display: flex;
}

.flex-row .p-button-text {
  margin-right: 5rem;
  color: white;
}

.drawer {
  position: fixed;
  top: 0;
  left: 0;
  width: 40%;
  height: 40%;
  margin-top: 4rem;
  background-color: rgba(189, 63, 87, 0.49);
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Alinea los elementos al inicio */
  justify-content: center;
  z-index: 300;
  transition: transform 0.3s ease-in-out; /* Agregamos una transición al abrir y cerrar el drawer */
  transform: translateX(-100%);
}

.drawer.open {
  transform: translateX(0);
}

.p-button-text {
  color: white !important;
}

.drawer pv-button {
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .menu-button {
    display: block; /* Mostrar el botón de menú en pantallas pequeñas */
  }

  .flex-row {
    display: none; /* Ocultar los elementos de la barra de herramientas en pantallas pequeñas */
  }

  .drawer {
    display: flex; /* Mostrar el menú desplegable en pantallas pequeñas */
  }

  /* Estilos específicos para el menú hamburguesa */
  .p-button-text {
    font-size: 24px;
  }
}
</style>
