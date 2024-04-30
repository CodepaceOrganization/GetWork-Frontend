import http from "../../shared/services/http-common.js";

export class CoursesApiService{
    getAllCourses() {
        return http.get('/courses');
    }
    getRanking(){
        return http.get('/ranking');
    }
}