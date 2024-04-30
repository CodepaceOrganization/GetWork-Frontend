import { TechnicalTestDetailEntity } from './technical-test-detail.entity';
export class TechnicalTest {
    constructor(id = '', title = '', description = '', image = '', technicalTestDetails = TechnicalTestDetailEntity) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.image = image;
        this.technicalTestDetails = new TechnicalTestDetailEntity();
    }
}