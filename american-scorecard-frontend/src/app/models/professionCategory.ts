export class professionCategory {
    id?: string;

    name?: string;

    description?: string;

    parentProfessionCategories?: string[];
    
    constructor(id?: string, name?: string, parentProfessionCategories?: string[]){
        this.id = id;
        this.name = name;
        this.parentProfessionCategories = parentProfessionCategories;
    }
}