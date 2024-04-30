<script>
import technicalTestDetailCardComponent from "@/technical-test/components/technical-test-detail-card.component.vue";
import {TechnicalTest} from "@/technical-test/model/technical-test.entity.js";
import {TechnicalTestDetailEntity} from "@/technical-test/model/technical-test-detail.entity.js";
import {TechnicalTestApiService} from "@/technical-test/services/technical-test-api.service.js";
import technicalTestCardComponent from "@/technical-test/components/technical-test-card.component.vue";

export default {
    name: "technical-test-detail-list",
    components: {technicalTestCardComponent, technicalTestDetailCardComponent},
    data() {
        return {
            title: "details",
            technicalTestDetail: [],
            technicalTestsStudies: [],
            technicalTestsService: null,
        }
    },
    created() {
        this.technicalTestsService = new TechnicalTestApiService();

        this.technicalTestsService.getTechnicalTestDetail(3)
            .then(response => {
                this.technicalTestDetail = response.data;
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
                v-for="technicalTestDetail in technicalTestDetail"
                :key="technicalTestDetail.id"
                :technicalTest="technicalTestDetail"
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
