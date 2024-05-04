<script >

export default {
  name:'plans'
}
</script>

<template>
  <div class="bg-gray-500 p-8 h-56rem ">
    <h1 class="text-center my-4"> Accessible planes for students </h1>
    <div class="flex flex-row flex-wrap justify-content-center align-content-center gap-3 mx-8">
      <pv-card class=" card w-19rem p-2  px-5 text-white border-round-xl  ">
        <template #title>
          <p class="text-md mt-3"> NORMAL </p>
          <div class="flex gap-2">
            <p> FREE </p>
            <p class="text-sm mt-2"> /month </p>
          </div>
          <hr/>
        </template>

        <template #content>
          <div class="flex gap-2">
            <p class="m-0 mt-4 text-sm">
              Limited access to frequently asked questions in select interviews
            </p>
          </div>
          <div class="flex gap-2">
            <p class="m-0 mt-4 text-sm">
              Basic coding exercises
            </p>
          </div>
          <div class="flex gap-2">
            <p class="m-0 mt-4 text-sm">
            Introductory tutorials on common interview topics
            </p>
          </div>
          <div class="flex justify-content-center align-content-center mt-3">
            <pv-button class="px-6 p-2 border-round-xl border-transparent bg-pink-300 text-white shadow-5 font-bold"> Start </pv-button>
          </div>
        </template>
      </pv-card>

      <pv-card class=" card w-19rem p-2  px-5 text-white border-round-xl  ">
        <template #title>
          <p class="text-md mt-3"> STUDENT </p>
          <div class="flex gap-2">
            <p> S/35.00 </p>
            <p class="text-sm mt-2"> /month </p>
          </div>
          <hr/>
        </template>

        <template #content>
          <div class="flex gap-2">
            <p class="m-0 mt-4 text-sm">
            Full access to frequently asked interview questions
            </p>
          </div>
          <div class="flex gap-2">
            <p class="m-0 mt-4 text-sm">
              Unlimited Practice Coding Exercises
            </p>
          </div>
          <div class="flex gap-2">
            <p class="m-0 mt-4 text-sm">
              Mock live interviews with experts
            </p>
          </div>
          <div class="flex gap-2">
            <a href="../../../.." class="text-white"> <p class="m-0 mt-2 text-sm text-white "> See more </p></a>
          </div>
          <div class="flex justify-content-center align-content-center mt-3">
            <pv-button class="px-6 p-2 border-round-xl border-transparent bg-pink-300 text-white shadow-5 font-bold"> Start </pv-button>
          </div>
        </template>
      </pv-card>

      <pv-card class=" card w-19rem p-2  px-5 text-white border-round-xl  ">
        <template #title>
          <p class="text-md mt-3"> DEVELOPER </p>
          <div class="flex gap-2">
            <p> S/69.90 </p>
            <p class="text-sm mt-2"> /month </p>
          </div>
          <hr/>
        </template>

        <template #content>
          <div class="flex gap-2">
            <p class="m-0 mt-4 text-sm">
             Full access to all frequently asked interview questions
            </p>
          </div>
          <div class="flex gap-2">
            <p class="m-0 mt-4 text-sm">
            Advanced Practical Coding Exercises
            </p>
          </div>
          <div class="flex gap-2">
            <a href="../../../.." class="text-white"> <p class="m-0 mt-2 text-sm text-white "> See more </p></a>
          </div>
          <div class="flex justify-content-center align-content-center mt-3">
            <pv-button class="px-6 p-2 border-round-xl border-transparent bg-pink-300 text-white shadow-5 font-bold"> Start </pv-button>
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
