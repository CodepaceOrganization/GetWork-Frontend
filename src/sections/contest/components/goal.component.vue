<script>
import {Goal} from "@/sections/contest/model/goal.entity.js";

export default {
  name: "goal.component",
  props: {
    goal: Goal
  }
}
</script>

<template>

  <div class="container-goal">
    
    <h2 class="title-goals" >GOALS</h2>
    <pv-card class="goals-card" style="overflow: hidden">
      <template #content>
        <div class="container">
          <div class="column">
            <div class="goals-container">
              <p class="goal-card">{{ goal.value }}</p>
            </div>
          </div>
        </div>
      </template>
    </pv-card>
    
  </div>
  
</template>

<style scoped>

.goal-card {
  background-color: #ffffff;
  padding: 14px;
  word-wrap: break-word;
  border-radius: 4px;
  margin-top: 2%;
  margin-bottom: 2.5%;
  color: #6C6363;
  text-align: justify;
  font-weight: bold;
}

.title-goals {
  font-size: 33px;
  text-align: center;
  margin: 2% 15%;
}

.goals-card {
  box-shadow: 5px 5px 5px 5px rgba(0,0,0,0.2);
  border-radius: 10px;
  display: flex;
  align-items: center;
  width: 60%;
  margin: 2% auto;
  background-color: #BD3F57;
  padding: 10px;
}

.container-goal {
  display: flex;
  flex-direction: column;
  align-items: center;
}


</style>