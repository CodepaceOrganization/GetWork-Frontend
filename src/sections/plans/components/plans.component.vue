<script >

export default {
  name:'plans'
}
</script>

<template>
  <div class="bg-gray-500 p-8 h-screen">
    <h1 class="text-center my-4"> {{ $t('plans.title') }} </h1>
    <div class="flex flex-row flex-wrap justify-content-center align-content-center gap-3 mx-8">
      <pv-card class=" card w-19rem p-2  px-5 text-white border-round-xl  ">
        <template #title>
          <p class="text-md mt-3"> {{ $t('plans.normal.title') }} </p>
          <div class="flex gap-2">
            <p> {{ $t('plans.normal.price') }} </p>
            <p class="text-sm mt-2"> {{ $t('plans.normal.price_period') }} </p>
          </div>
          <hr/>
        </template>

        <template #content>
          <div class="flex gap-2">
            <p class="m-0 mt-4 text-sm">
              {{ $t('plans.normal.benefits.limited_access') }}
            </p>
          </div>
          <div class="flex gap-2">
            <p class="m-0 mt-4 text-sm">
              {{ $t('plans.normal.benefits.basic_exercises') }}
            </p>
          </div>
          <div class="flex gap-2">
            <p class="m-0 mt-4 text-sm">
            {{ $t('plans.normal.benefits.intro_tutorials') }}
            </p>
          </div>
          <div class="flex justify-content-center align-content-center mt-3">
            <pv-button class="px-6 p-2 border-round-xl border-transparent bg-pink-300 text-white shadow-5 font-bold"> {{ $t('plans.normal.button') }} </pv-button>
          </div>
        </template>
      </pv-card>

      <pv-card class=" card w-19rem p-2  px-5 text-white border-round-xl  ">
        <template #title>
          <p class="text-md mt-3"> {{ $t('plans.student.title') }} </p>
          <div class="flex gap-2">
            <p> {{ $t('plans.student.price') }} </p>
            <p class="text-sm mt-2"> {{ $t('plans.student.price_period') }} </p>
          </div>
          <hr/>
        </template>

        <template #content>
          <div class="flex gap-2">
            <p class="m-0 mt-4 text-sm">
            {{ $t('plans.student.benefits.full_access') }}
            </p>
          </div>
          <div class="flex gap-2">
            <p class="m-0 mt-4 text-sm">
              {{ $t('plans.student.benefits.unlimited_exercises') }}
            </p>
          </div>
          <div class="flex gap-2">
            <p class="m-0 mt-4 text-sm">
              {{ $t('plans.student.benefits.mock_interviews') }}
            </p>
          </div>
          <div class="flex gap-2">
            <a href="../../../.." class="text-white"> <p class="m-0 mt-2 text-sm text-white "> See more </p></a>
          </div>
          <div class="flex justify-content-center align-content-center mt-3">
            <pv-button class="px-6 p-2 border-round-xl border-transparent bg-pink-300 text-white shadow-5 font-bold"> {{ $t('plans.student.button') }} </pv-button>
          </div>
        </template>
      </pv-card>

      <pv-card class=" card w-19rem p-2  px-5 text-white border-round-xl  ">
        <template #title>
          <p class="text-md mt-3"> {{ $t('plans.developer.title') }} </p>
          <div class="flex gap-2">
            <p> {{ $t('plans.developer.price') }} </p>
            <p class="text-sm mt-2"> {{ $t('plans.developer.price_period') }} </p>
          </div>
          <hr/>
        </template>

        <template #content>
          <div class="flex gap-2">
            <p class="m-0 mt-4 text-sm">
             {{ $t('plans.developer.benefits.full_access') }}
            </p>
          </div>
          <div class="flex gap-2">
            <p class="m-0 mt-4 text-sm">
            {{ $t('plans.developer.benefits.advanced_exercises') }}
            </p>
          </div>
          <div class="flex gap-2">
            <a href="../../../.." class="text-white"> <p class="m-0 mt-2 text-sm text-white "> See more </p></a>
          </div>
          <div class="flex justify-content-center align-content-center mt-3">
            <pv-button class="px-6 p-2 border-round-xl border-transparent bg-pink-300 text-white shadow-5 font-bold"> {{ $t('plans.developer.button') }} </pv-button>
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

.bg-gray-500 {
  height: 100vh;
}
  
</style>
