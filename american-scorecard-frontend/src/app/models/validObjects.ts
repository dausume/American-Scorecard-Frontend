//A Utility interface for tracking valid object names to ensure entered configuration values are coherent.
export class ValidObjects {
    public static allObjects : string[] = [
        "dataTableColumn",
        "dataTableConfiguration",
        "politicalCategory",
        "professionCategory",
        "referenceFrame",
        "scoringDefinition",
        "scoringInstance",
        "scoringTermDefinitionEntry",
        "scoringTermInstanceEntry",
        "termDefinition",
        "termInstance"
    ]

    public static isValidObjectName(name:string){
        if(name in this.allObjects)
        {
            return true;
        }
        else{
            return false;
        }
    }
}