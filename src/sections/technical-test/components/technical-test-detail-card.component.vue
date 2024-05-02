<script>
import {TechnicalTestDetail} from "@/sections/technical-test/model/technical-test-detail.entity.js";

export default {
  name: "technical-test-detail.component",
  props: {
    technicalTestDetail: TechnicalTestDetail,
    index: Number
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
  <pv-card class="custom-card" style="overflow: hidden">
    <template #content>
      <div class="container">
        <div class="column">
          <div class="left-container">
            <p>{{index}}. {{ technicalTestDetail.description }}</p>
          </div>
          <div v-if="technicalTestDetail.progress === 'Earrings'" class="right-container">
            <p :class="technicalTestDetail.difficulty.toLowerCase()">{{ technicalTestDetail.difficulty }}</p>
          </div>
          <div v-else-if="technicalTestDetail.progress === 'InProgress'" class="right-container">
            <p :class="getStatusColor(technicalTestDetail.status)">{{ technicalTestDetail.status }}/100</p>
          </div>
          <div v-else-if="technicalTestDetail.progress === 'Done'" class="right-container">
            <p class="status-green">{{ technicalTestDetail.progress }}</p>
          </div>
        </div>
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
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.column {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
}

.left-container {
  flex: 0.75;
}
.left-container p{
  margin: 10px;
  line-height: 1.5;
}
.right-container {
  flex: 0.25;
  display: flex;
  justify-content: center;
  align-items: center;
}

.custom-card {
  width: 100%;
  height: auto;
  min-height: 50px;
  border-radius: 10px;
}
</style>