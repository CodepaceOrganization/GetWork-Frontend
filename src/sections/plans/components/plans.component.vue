<script >

export default {
  name:'plans'
}
</script>

<template>
  <div class="bg-gray-500 p-8 h-56rem ">
    <h1 class="text-center my-4"> Planes accesibles para estudiantes </h1>
    <div class="flex flex-row flex-wrap justify-content-center align-content-center gap-3 mx-8">
      <pv-card class=" card w-19rem p-2  px-5 text-white border-round-xl  ">
        <template #title>
          <p class="text-md mt-3"> NORMAL </p>
          <div class="flex gap-2">
            <p> FREE </p>
            <p class="text-sm mt-2"> /mes </p>
          </div>
          <hr/>
        </template>

        <template #content>
          <div class="flex gap-2">
            <p class="m-0 mt-4 text-sm">
              Acceso limitado a preguntas frecuentes en entrevistas seleccionadas
            </p>
          </div>
          <div class="flex gap-2">
            <p class="m-0 mt-4 text-sm">
              Ejercicios de codificación basicos
            </p>
          </div>
          <div class="flex gap-2">
            <p class="m-0 mt-4 text-sm">
              Tutoriales introductorios sobre temas comunes en entrevistas
            </p>
          </div>
          <div class="flex justify-content-center align-content-center mt-3">
            <pv-button class="px-6 p-2 border-round-xl border-transparent bg-pink-300 text-white shadow-5 font-bold"> Comenzar </pv-button>
          </div>
        </template>
      </pv-card>

      <pv-card class=" card w-19rem p-2  px-5 text-white border-round-xl  ">
        <template #title>
          <p class="text-md mt-3"> ESTUDIANTE </p>
          <div class="flex gap-2">
            <p> S/35.00 </p>
            <p class="text-sm mt-2"> /mes </p>
          </div>
          <hr/>
        </template>

        <template #content>
          <div class="flex gap-2">
            <p class="m-0 mt-4 text-sm">
              Acceso completo a preguntes frecuentes de entrevistas
            </p>
          </div>
          <div class="flex gap-2">
            <p class="m-0 mt-4 text-sm">
              Ejercicios de codificación práctica ilimitado
            </p>
          </div>
          <div class="flex gap-2">
            <p class="m-0 mt-4 text-sm">
              Simulacro de entrevistas en vivo con expertos
            </p>
          </div>
          <div class="flex gap-2">
            <a href="../../../.." class="text-white"> <p class="m-0 mt-2 text-sm text-white "> Ver mas </p></a>
          </div>
          <div class="flex justify-content-center align-content-center mt-3">
            <pv-button class="px-6 p-2 border-round-xl border-transparent bg-pink-300 text-white shadow-5 font-bold"> Comenzar </pv-button>
          </div>
        </template>
      </pv-card>

      <pv-card class=" card w-19rem p-2  px-5 text-white border-round-xl  ">
        <template #title>
          <p class="text-md mt-3"> DESARROLLADOR </p>
          <div class="flex gap-2">
            <p> S/69.90 </p>
            <p class="text-sm mt-2"> /mes </p>
          </div>
          <hr/>
        </template>

        <template #content>
          <div class="flex gap-2">
            <p class="m-0 mt-4 text-sm">
              Acceso completo a todas las preguntas frecuentes de entrevistas
            </p>
          </div>
          <div class="flex gap-2">
            <p class="m-0 mt-4 text-sm">
              Ejercicios de codificación práctica avanzada
            </p>
          </div>
          <div class="flex gap-2">
            <a href="../../../.." class="text-white"> <p class="m-0 mt-2 text-sm text-white "> Ver mas </p></a>
          </div>
          <div class="flex justify-content-center align-content-center mt-3">
            <pv-button class="px-6 p-2 border-round-xl border-transparent bg-pink-300 text-white shadow-5 font-bold"> Comenzar </pv-button>
          </div>
        </template>
      </pv-card>
    </div>
  </div>
</template>

<style scoped>
.card{
  background-color: #BD3F57;
}
</style>