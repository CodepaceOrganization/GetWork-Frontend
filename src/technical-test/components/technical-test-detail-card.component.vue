<script>
import {TechnicalTest} from "@/technical-test/model/technical-test.entity.js";

export default {
    name: "technical-test-detail.component",
    props: {
        technicalTest: TechnicalTest,
    },
    methods: {
        getStatusColor(status) {
            if (status >= 70) {
                return 'status-green';
            } else if (status >= 35) {
                return 'status-orange';
            } else {
                return 'status-red';
            }
        }
    }
}
</script>

<template>
    <pv-card class="custom-card" style="width: 25rem; height: 10rem; overflow: hidden">
        <template #content>
            <div class="left-container">
                <p>{{ technicalTest.technicalTestDetails.description }}</p>
            </div>
            <div v-if="technicalTest.technicalTestDetails.progress === 'Earrings'" class="right-container">
                <p :class="technicalTest.technicalTestDetails.difficulty.toLowerCase()">{{ technicalTest.technicalTestDetails.difficulty }}</p>
            </div>
            <div v-else-if="technicalTest.technicalTestDetails.progress === 'InProgress'" class="right-container">
                <p :class="getStatusColor(technicalTest.technicalTestDetails.status)">{{ technicalTest.technicalTestDetails.status }}/100</p>
            </div>
            <div v-else-if="technicalTest.technicalTestDetails.progress === 'Done'" class="right-container">
                <p class = "status-green" >{{ technicalTest.technicalTestDetails.progress }}</p>
            </div>
        </template>
    </pv-card>
</template>

<style scoped>
  .easy {
      color: green;
  }
  .medium {
      color: orange;
  }
  .hard {
      color: red;
  }
  .status-green {
      color: green;
  }
  .status-orange {
      color: orange;
  }
  .status-red {
      color: red;
  }
</style>