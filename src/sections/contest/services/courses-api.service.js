import http from "../../../shared/services/http-common.js";

export class CoursesApiService{
    getAllCourses() {
        return http.get('/weekly-contest');
    }

    getCourse(id) {
        return http.get(`/weekly-contest/${id}`);
    }

    getRanking(){
        return http.get('https://my-json-server.typicode.com/CodepaceOrganization/Datos-getwork-/ranking');
    }
}