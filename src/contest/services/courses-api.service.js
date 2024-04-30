import axios from "axios";

const http = axios.create({
    baseURL: 'https://my-json-server.typicode.com/CodepaceOrganization/Datos-getwork-',
});

export class CoursesApiService {
    getSources() {
        return http.get(`courses`);
    }

    /*getArticlesForSource(sourceId) {
        return http.get(`top-headlines?sources=${sourceId}&apiKey=${this.apiKey}`);
    }*/
    
}