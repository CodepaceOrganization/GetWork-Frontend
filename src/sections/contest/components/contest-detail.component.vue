<script>
import {CourseDetail} from "@/sections/contest/model/coursedetail.entity.js";

export default {
  name: "contest-detail",
  props: {
    courseDetail: CourseDetail,
  }
}
</script>
  
<template>
  <div class="container-contest-detail">
    <div class="container-contest-detail-about">
      <h2 class="about-course">ABOUT THE COURSE</h2>
      <br>
      <p class="about">{{courseDetail.description}}</p>
    </div>

    <h2 class="title-goals" >GOALS</h2>
    <pv-card class="goals-card" style="overflow: hidden">
      <template #content>
        <div class="container">
          <div class="column">
            <div class="goals-container">
              <p class="goal-card">{{ courseDetail.goal1 }}</p>
              <p class="goal-card">{{ courseDetail.goal2 }}</p>
              <p class="goal-card">{{ courseDetail.goal3 }}</p>
              <p class="goal-card">{{ courseDetail.goal4 }}</p>
              <p class="goal-card">{{ courseDetail.goal5 }}</p>
              <p class="goal-card">{{ courseDetail.goal6 }}</p>
            </div>
          </div>
        </div>
      </template>
    </pv-card>
    
    <pv-card class="introduction-card" style="width: 30rem; height: 11rem; overflow: hidden">
      <template #content>
        <div class="card-content">
          <div class="image-container">
            <img :alt="courseDetail.title" :src="courseDetail.image" class="card-image" />
          </div>
          <div class="card-details1">
            <p class="card-subtitle">{{courseDetail.introduction}}</p>
          </div>
        </div>
      </template>
    </pv-card>
    
    <pv-card class="development-card" style="width: 30rem; height: 11rem; overflow: hidden">
      <template #content>
        <div class="card-content">
          <div class="image-container">
            <img :alt="courseDetail.title" :src="courseDetail.image2" class="card-image" />
          </div>
          <div class="card-details2">
            <p class="card-subtitle">{{courseDetail.development}}</p>
          </div>
        </div>
      </template>
    </pv-card>
    
    <pv-card class="test-card" style="width: 30rem; height: 11rem; overflow: hidden">
      <template #content>
        <div class="card-content">
          <div class="image-container">
            <img :alt="courseDetail.title" :src="courseDetail.image3" class="card-image" />
          </div>
          <div class="card-details3">
            <p class="card-subtitle">{{courseDetail.test}}</p>
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

.about {
  font-size: 160%;
  margin-right: 40%;
  font-weight: bold;
  text-align: justify;
}

.about-course {
  color: #1A1A1A;
}

.container-contest-detail-about {
  margin: 2%;
}

.title-goals {
  font-size: 33px;
  text-align: center;
  margin: 2% 15%;
}

.card-details1, .card-details2, .card-details3 {
  text-align: justify;
  margin: 0 10%;
}

.goals-card {
  box-shadow: 5px 5px 5px 5px rgba(0,0,0,0.2);
  border-radius: 10px;
  display: flex;
  align-items: center;
  width: 80%;
  margin: 2% auto;
  background-color: #BD3F57;
  padding: 10px;
}

.introduction-card, .development-card, .test-card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: 10px;
  display: flex;
  align-items: center;
  transition: transform 0.3s;
  font-size: 15px;
  font-weight: bold;
  width: 80%;
  margin: 2% auto;
}

.image-container {
  width: 100%;
  height: 100%;
  margin: 0;
  object-fit: scale-down;
}

/* Media Queries */
@media (min-width: 768px) {
  .title-goals {
    margin-left: 78%;
    margin-top: -24%;
  }

  .goals-card {
    width: 30%;
    height: 50%;
    margin-left: 65%;
  }

  .introduction-card {
    margin-left: 4%;
    margin-bottom: 4%;
  }

  .development-card {
    margin-bottom: 4rem;
    margin-left: 37%;
    margin-top: -13%;
  }

  .test-card {
    margin-left: 70%;
    margin-top: -12.5%;
  }

  .card-details1 {
    margin-left: 36%;
    margin-right: 10%;
    margin-top: -20%;
  }

  .card-details2 {
    margin-left: 38%;
    margin-right: 7%;
    margin-top: -25%;
  }

  .card-details3 {
    margin-left: 30%;
    margin-right: 5%;
    margin-top: -21%;
  }
}

@media (max-width: 767px) {
  .about {
    font-size: 150%;
  }

  .title-goals {
    font-size: 28px;
  }

  .card-details1, .card-details2, .card-details3 {
    margin: 0 5%;
  }
}

</style>