import axios from "axios";

const http = axios.create({
    baseURL: 'https://my-json-server.typicode.com/Jemisas/APIS_AppWeb/tutors',
});

export class TutorsApiService {
    getTutors() {
        return http.get();
    }
}