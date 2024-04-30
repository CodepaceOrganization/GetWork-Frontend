<script>
import {TechnicalTestDetail} from "@/technical-test/model/technical-test-detail.entity.js";

export default {
    name: "technical-test-detail.component",
    props: {
        technicalTestDetail: TechnicalTestDetail
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
                <p>{{ technicalTestDetail.description }}</p>
            </div>
            <div v-if="technicalTestDetail.progress === 'Earrings'" class="right-container">
                <p :class="technicalTestDetail.difficulty.toLowerCase()">{{ technicalTestDetail.difficulty }}</p>
            </div>
            <div v-else-if="technicalTestDetail.progress === 'InProgress'" class="right-container">
                <p :class="getStatusColor(technicalTestDetail.status)">{{ technicalTestDetail.status }}/100</p>
            </div>
            <div v-else-if="technicalTestDetail.progress === 'Done'" class="right-container">
                <p class = "status-green" >{{ technicalTestDetail.progress }}</p>
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