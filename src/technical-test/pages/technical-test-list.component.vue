<script>
import { TechnicalTestApiService } from "@/technical-test/services/technical-test-api.service.js";
import technicalTestCardComponent from "@/technical-test/components/technical-test-card.component.vue";

export default {
    name: "technical-test-list.component",
    components: {technicalTestCardComponent },
    data() {
        return {
            title: "30 Days of Vue",
            technicalTests: [],
            technicalTestsStudies: [],
            technicalTestsService: null,
            technicalTestsStudiesService: null,
        }
    },
    created() {
        this.technicalTestsService = new TechnicalTestApiService();
        this.technicalTestsStudiesService = new TechnicalTestApiService();

        this.technicalTestsService.getAll30DaysOf()
            .then(response => {
                this.technicalTests = response.data;
            })
            .catch(e => {
                console.log(e);
            });
        this.technicalTestsStudiesService.getAllStudyPlan()
            .then(response => {
                this.technicalTestsStudies = response.data;
            })
            .catch(e => {
                console.log(e);
            });
    }
}
</script>

<template>
    <div class="container-technical-test">
            <div class="container-technical-test-list">
                <h2 class="title">30 days of</h2>
                <div class="card-container">
                    <router-link
                            v-for="technicalTest in technicalTests"
                            :key="technicalTest.id"
                            :to="'/details-' + technicalTest.id">
                        <technical-test-card-component class="technical-test-card" :technicalTest="technicalTest"></technical-test-card-component>
                    </router-link>
                </div>
            </div>
            <div class="container-technical-test-list">
                <h2 class="title">Study Plan</h2>
                <div class="card-container">
                  <technical-test-card-component class="technical-test-card"
                                                 v-for="technicalTest in technicalTestsStudies"
                                                 :key="technicalTest.id"
                                                 :technicalTest="technicalTest"
                  ></technical-test-card-component>
                </div>
            </div>
    </div>
    <div class = "calendar-container">
        <pv-calendar v-model="date" inline showWeek />
    </div>
</template>

<style scoped>
.container-technical-test-list {
    margin-bottom: 20px;
    margin-left: 40px;
}
.title{
    font-size: 30px;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 20px;
}
.card-container {
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between; /* Distribuye las tarjetas uniformemente en el contenedor */
}

.technical-test-card {
    width: calc(33.33% - 10px); /* Establece un ancho fijo para que ocupe un tercio del contenedor */
    margin-bottom: 30px;
}
.calendar-container {
    position: absolute;
    top: 40%;
    right: 0;
    width: 20%; /* Ajusta el ancho según sea necesario */
}
</style>
