import http from "../../../shared/services/http-common.js";

export class TechnicalTestApiService {
    getAll30DaysOf() {
        console.log("as")
        return http.get('/technical-test/test-type/technical-tests-30-days-of');
    }
    getAllStudyPlan() {
        return http.get('/technical-test/test-type/technical-tests-study-plan');
    }
    getById(id) {
        return http.get(`/technical-tests/${id}`);
    }

    create(tutorialResource) {
        return http.post('/technical-tests', tutorialResource);
    }

    update(id, tutorialResource) {
        return http.put(`/technical-tests/${id}`, tutorialResource);
    }
    delete(id) {
        return http.delete(`/technical-tests/${id}`);
    }

    findByTitle(title) {
        return http.get(`/technical-tests?title=${title}`);
    }
}