<script>
import { TechnicalTest } from "@/sections/technical-test/model/technical-test.entity.js";

export default {
    name: 'technical-test',
    props: {
        technicalTest: TechnicalTest,
    }
}
</script>

<template>
    <pv-card class="custom-card" style="width: 25rem; height: 10rem; overflow: hidden">
        <template #content>
            <div class="card-content">
                <div class="image-container">
                    <img :alt="technicalTest.title" :src="technicalTest.image" class="card-image" />
                </div>
                <div class="card-details">
                    <h2 class="card-title">{{technicalTest.title}}</h2>
                    <p class="card-subtitle">{{technicalTest.description}}</p>
                </div>
            </div>
        </template>
    </pv-card>
</template>

<style scoped>
.custom-card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius: 10px;
    display: flex;
    align-items: center;
    transition: transform 0.3s;
}

.custom-card .card-content {
    display: flex;
    align-items: center;
}

.custom-card .image-container {
    width: 100px;
    height: 100px;
    overflow: hidden;
    margin-right: 20px;
}

.custom-card .card-image {
    width: 100%;
    height: 100%;
    object-fit: Scale-down;
}

.custom-card .card-details {
    flex: 1;
}

.custom-card .card-title {
    font-size: 1.5rem;
    margin-bottom: 5px;
}

.custom-card .card-subtitle {
    color: #666;
    font-size: 1rem;
    margin-bottom: 10px;
}
.custom-card:hover {
    box-shadow: 0 8px 8px 0 rgba(0,0,0,0.2);
    transform: scale(1.05);
    transition: transform 0.3s;
}
</style>
