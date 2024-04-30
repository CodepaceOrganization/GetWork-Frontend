export class TechnicalTestDetailEntity {
    constructor(id = '', description = '', difficulty = '', progress = '', status = '') {
        this.id = id;
        this.description = description;
        this.difficulty = difficulty;
        this.progress = progress;
        this.status = status;
    }
}
