export class scoringTermDefinitionEntry {
    id?: string;

    scoringDefinitionId?: string;

    termDefinitionId?: string;

    termWeight?: number;
    
    constructor(id?: string, scoringDefinitionId?: string, termDefinitionId?: string, termWeight?: number){
        this.id = id;
        this.scoringDefinitionId = scoringDefinitionId;
        this.termDefinitionId = termDefinitionId;
        this.termWeight = termWeight;
    }
}