import axios from "axios";

const http = axios.create({
    baseURL: 'http://localhost:5030/api/v1',
});

export class CoursesDetailApiService{
    getCoursesDetail() {
        return http.get('/detail');
    }
}

