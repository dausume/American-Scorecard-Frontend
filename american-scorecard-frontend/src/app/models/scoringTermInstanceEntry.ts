export class scoringTermInstanceEntry {
    id?: string;

    scoringInstanceId?: string;

    termInstanceId?: string;

    normalizedTermValue?: number;

    termWeight?: number;
    
    constructor(id?: string, scoringInstanceId?: string, termInstanceId?: string, normalizedTermValue?: number, termWeight?: number){
        this.id = id;
        this.scoringInstanceId = scoringInstanceId;
        this.termInstanceId = termInstanceId;
        this.normalizedTermValue = normalizedTermValue;
        this.termWeight = termWeight;
    }
}