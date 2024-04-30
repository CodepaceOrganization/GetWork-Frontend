<script >
export default {
  name:'profile-management',
  data(){
    return{
      firstName:'Maria',
      lastName:'Sanchez',
      dni:'91242121',
      phoneNumber:982215977

    }
  },
  computed: {
    getFullName() {
      return this.firstName + ' ' + this.lastName;
    },
    getDni() {
      return this.dni;
    },
    getPhoneNumber(){
      return this.phoneNumber;
    }
  }
}
</script>

<template>
  <div class="bg-gray-400 p-8 flex flex-column lg:flex-row justify-content-evenly ">
    <div>
      <img src="../.././assets/images/profile.png" alt="profile" class="w-30rem  "/>
    </div>
    <div class="text-4xl flex flex-column flex-wrap justify-content-center align-content-center">
      <h2> Nombre:  {{this.getFullName }}</h2>
      <h2> Dni:  {{this.getDni}}</h2>
      <h2> Telefono: {{this.getPhoneNumber}}</h2>
    </div>
  </div>
  <div class="mt-6 mx-6 flex flex-column my-5">
    <h1 > Tutorías reservadas:</h1>
    <pv-card class="p-7 shadow-5 mt-6">
      <template #title>

      </template>
      <template #content>
        <div class="text-center">
          <h1> No tienes reservas</h1>
        </div>
      </template>
    </pv-card>
  </div>
</template>

<style scoped>

</style>