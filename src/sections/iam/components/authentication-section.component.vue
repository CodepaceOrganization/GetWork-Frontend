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
      <span class="welcome-message"> Welcome, {{ currentUsername }}</span>
      <pv-button class="sign-out-button" @click="onSignOut">Sign Out</pv-button>
    </div>
    <div v-else>
      <router-link class="sign-button" to="/sign-in" @click="onSignIn">Sign In</router-link>
      <router-link class="sign-button" to="/sign-up" @click="onSignUp">Sign Up</router-link>
    </div>
  </div>
</template>

<style scoped>
.welcome-message {
  color: white; /* White */
  font-size: 16px;
  font-weight: bold;
  margin-right: 20px;
  position: relative;
  top: -8px;  /* Move up */
}

.sign-out-button {
  background-color: transparent; /* Transparent background */
  color: white; /* White text */
  border: none;
  text-align: center; /* Center align */
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  font-weight: bold;
  margin-right: 30px;
  cursor: pointer;
}

.sign-button {
  background-color: transparent; /* Transparent background */
  color: white; /* White text */
  border: none;
  text-align: center; /* Center align */
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  font-weight: bold;
  margin-right: 30px;
  cursor: pointer;
  margin-top: 10px;
}
</style>