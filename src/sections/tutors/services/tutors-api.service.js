import http from "../../../shared/services/http-common.js";

export class TutorsApiService {
    getTutors() {
        return http.get('/tutors');
    }
}