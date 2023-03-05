export class referenceFrame {
    id?: string;

    name?: string;

    description?: string;

    parentReferenceFrames?: string[];
    
    constructor(id?: string, name?: string, parentReferenceFrames?: string[]){
        this.id = id;
        this.name = name;
        this.parentReferenceFrames = parentReferenceFrames;
    }
}