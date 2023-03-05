export class politicalCategory {
    id?: string;

    name?: string;

    description?: string;

    parentPoliticalCategories?: string[];

    //Always +1 level to the highest heirarchy level accounted for within it's parentPoliticalCategories.
    heirarchyLevel?: number;
    
    constructor(id?: string, name?: string, description?: string, parentPoliticalCategories?: string[], heirarchyLevel?: number){
        this.id = id;
        this.name = name;
        this.description = description;
        this.parentPoliticalCategories = parentPoliticalCategories;
        this.heirarchyLevel = heirarchyLevel;
    }
}