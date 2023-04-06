export class dataTableColumn {
    id?: number
    //Id linking this column to a specific table configuration
    tableConfigId?:number
    //The displayed name for the column, customizable and distinct from the actual variable name.
    columnName:string
    //The actual object name, variable, and type to be displayed.
    objectName:string
    variableName:string
    variableType:string
    
    constructor(columnName:string, variableName:string, variableType:string, objectName:string, id?: number, tableConfigId?:number){
        this.id = id;
        this.tableConfigId = tableConfigId;
        this.columnName = columnName;
        this.objectName = objectName;
        this.variableName = variableName;
        this.variableType = variableType;
    }
}