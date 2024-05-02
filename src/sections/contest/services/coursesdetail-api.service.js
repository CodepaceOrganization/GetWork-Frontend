import axios from "axios";

const http = axios.create({
    baseURL: 'https://my-json-server.typicode.com/EliasYP/Datos-Getwork',
});

export class CoursesDetailApiService{
    getCoursesDetail() {
        return http.get('/detail-course');
    }
}

