import http from "@/shared/services/http-common.js";
export class TechnicalTaskApiService {
    assignUserToTechnicalTask(technicalTestId, userId) {
        return http.put(`/technical-tasks/${technicalTestId}/assign/${userId}`);
    }
    getTechnicalTestDetail(id, userId) {
        return http.get(`technical-tasks/details-${id}/user/${userId}`);
    }
    getTechnicalTestDetailById(technicalTaskId) {
        return http.get(`/technical-tasks/${technicalTaskId}`);
    }

    updateProgress(technicalTaskId,userId,detail) {
        const body = {
            progress: detail
        };
        return http.put(`/technical-tasks/${technicalTaskId}/update/${userId}`, body);
    }
}