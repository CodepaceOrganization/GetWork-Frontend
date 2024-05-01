<script>
import {TechnicalTestApiService} from "@/technical-test/services/technical-test-api.service.js";
import technicalTestDetailCardComponent from "@/technical-test/components/technical-test-detail-card.component.vue";

export default {
    name: "technical-test-detail-list",
    components: {technicalTestDetailCardComponent},
    data() {
        return {
            title: "details",
            technicalTestDetails: [],
            technicalTestsDetailsService: null,
        }
    },
    created() {
        this.technicalTestsDetailsService = new TechnicalTestApiService();

        this.technicalTestsDetailsService.getTechnicalTestDetail()
            .then(response => {
                this.technicalTestDetails = response.data;
            })
            .catch(e => {
                console.log(e);
            });
    }
};
</script>

<template>
    <div>
        <div class="earrings-container">
            <technical-test-detail-card-component
                class="technical-test-card"
                v-for="technicalTestDetail in technicalTestDetails"
                :key="technicalTestDetail.id"
                :technicalTestDetail="technicalTestDetail"
            ></technical-test-detail-card-component>
        </div>
        <div class="inProgress-container">
        </div>
        <div class="done-container">
        </div>
    </div>
</template>

<style scoped>
/* Estilos aquí */
</style>
