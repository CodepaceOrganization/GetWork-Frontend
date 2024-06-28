<script >
import {useAuthenticationStore} from "@/sections/iam/services/authentication.store.js";

export default {
  name:'profile-management',
  data(){
    return{
        authenticationStore: useAuthenticationStore(),
        firstName: '',
        id:''
    }
  },
  computed: {
      currentUsername() {
          return this.authenticationStore.currentUsername;
      },
      currentUserId(){
          return this.authenticationStore.userId;
      }
  }
}
</script>

<template>
  <div class="bg-gray-400 p-8 flex flex-column lg:flex-row justify-content-evenly ">
    <div>
      <img src="../../../assets/images/profile.png" alt="profile" class="w-30rem  "/>
    </div>
    <div class="text-4xl flex flex-column flex-wrap justify-content-center align-content-center">
        <h2>UserId:  {{this.currentUserId }}</h2>
      <h2>Username: {{this.currentUsername }}</h2>
    </div>
  </div>
<div class="mt-6 mx-6 flex flex-column my-5">
  <pv-card class="p-7 shadow-5 mt-6">
    <template #title>
    </template>
    <template #content>
      <div class="text-center">
        <h1></h1>
      </div>
      </template>
    </pv-card>
  </div>
</template>

<style scoped>

</style>
