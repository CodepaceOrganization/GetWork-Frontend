<script>
import {useAuthenticationStore} from "../services/authentication.store.js";
import {useRouter} from "vue-router";


export default {
  name: "authentication-section",
  data() {
    return {
      router: useRouter(),
      authenticationStore: useAuthenticationStore()
    };
  },
  computed: {
    isSignedIn() {
      return this.authenticationStore.isSignedIn;
    },
    currentUsername() {
      return this.authenticationStore.currentUsername;
    },
  },
  methods: {
    onSignIn() {
      this.router.push({name: 'sign-in'});
    },
    onSignUp() {
      this.router.push({name: 'sign-up'});
    },
    onSignOut() {
      this.authenticationStore.signOut(this.router);
    }
  }
}
</script>

<template>
  <div>
    <div v-if="isSignedIn">
      <span class="p-button"> Welcome, {{ currentUsername }}</span>
      <pv-button @click="onSignOut">Sign Out</pv-button>
    </div>
    <div v-else>
        <router-link to="/sign-in" @click="onSignIn">Sign In</router-link>
        <router-link to="/sign-up" @click="onSignUp">Sign Up</router-link>
    </div>
  </div>
</template>

<style scoped>

</style>