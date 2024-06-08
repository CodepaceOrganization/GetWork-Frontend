import axios from "axios";

const http = axios.create({
    baseURL: 'https://my-json-server.typicode.com/CodepaceOrganization/Datos-getwork-',
});

export class CoursesApiService{
    getAllCourses() {
        return http.get('/courses');
    }

    getCourse(id) {
        return http.get(`/courses/${id}`);
    }
    
    getRanking(){
        return http.get('/ranking');
    }
}