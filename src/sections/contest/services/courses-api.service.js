import axios from "axios";

const http = axios.create({
    baseURL: 'http://localhost:5030/api/v1',
});

export class CoursesApiService{
    getAllCourses() {
        return http.get('/contest');
    }

    getCourse(id) {
        return http.get(`/contest/${id}`);
    }

    getRanking(){
        return http.get('https://my-json-server.typicode.com/CodepaceOrganization/Datos-getwork-/ranking');
    }
}