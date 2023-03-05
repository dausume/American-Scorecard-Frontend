export class scoringInstance {
    id?: string;

    primePoliticalCategory?: string;
    politicalCategories?: string[];

    primeProfessionCategory?: string;
    professionCategories?: string[];

    primeReferenceFrame?: string;
    referenceFrames?: string[];

    
    
    constructor(id?: string){
        this.id = id;
        
    }
}