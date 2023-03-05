export class dataTableColumn {
    id?: string
    //Id linking this column to a specific table configuration
    tableConfigId?:string
    //The displayed name for the column, customizable and distinct from the actual variable name.
    columnName?:string
    //The following two are used when the column specifically accesses values using references and chained references.
    isByReference?:boolean
    columnReferenceChain?:dataTableColumn
    //The actual object name, variable, and type to be displayed.
    objectName?:string
    variableName?:string
    variableType?:string
    
    constructor(id?: string, tableConfigId?:string, columnName?:string, isByReference?:boolean, columnReferenceChain?:dataTableColumn, objectName?:string, variableName?:string, variableType?:string){
        this.id = id;
        this.tableConfigId = tableConfigId;
        this.columnName = columnName;
        this.isByReference = isByReference;
        this.columnReferenceChain = columnReferenceChain;
        this.objectName = objectName;
        this.variableName = variableName;
        this.variableType = variableType;
    }
}