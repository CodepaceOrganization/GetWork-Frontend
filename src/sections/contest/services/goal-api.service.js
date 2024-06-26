import axios from "axios";

const http = axios.create({
    baseURL: 'http://localhost:5030/api/v1',
});

export class GoalApiService{
    getGoal() {
        return http.get('/goal');
    }
}

