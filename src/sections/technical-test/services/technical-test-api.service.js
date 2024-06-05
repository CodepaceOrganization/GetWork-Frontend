import http from "../../../shared/services/http-common.js";

export class TechnicalTestApiService {
    getAll30DaysOf() {
        return http.get('/technical-tests-30-days-of');
    }
    getAllStudyPlan() {
        return http.get('/technical-tests-study-plan');
    }
    getTechnicalTestDetail(id) {
        return http.get(`/details-${id}`);

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
    getTechnicalTestDetailById(technicalTestId, technicalTaskId) {
        return http.get(`/details-${technicalTestId}/${technicalTaskId}`);
    }
    updateProgress(technicalTestId, detail) {
        return http.put(`/details-${technicalTestId}/${detail.id}`, detail);
    }
    delete(id) {
        return http.delete(`/technical-tests/${id}`);
    }

    findByTitle(title) {
        return http.get(`/technical-tests?title=${title}`);
    }
}