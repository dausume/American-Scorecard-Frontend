import { ValidObjects } from './validObjects';
import { dataTableColumn } from './dataTableColumn';

export class dataTableConfiguration {
    id?: string;
    tableName?: string;
    objectsUsed? : string[];
    filters?: string[];
    columns?: dataTableColumn[];

    constructor(id: string, tableName:string, objectsUsed: string[], filters: string[], columns: dataTableColumn[]){
        this.id = id;
        this.tableName = tableName;
        this.objectsUsed = objectsUsed;
        this.filters = filters;
        this.columns = columns;
    }

    validateObjectsUsed(objectsUsed: string[])
    {
        for(let someObjName in objectsUsed)
        {
            //Detect if the name is invalid
            if(!ValidObjects.isValidObjectName(someObjName))
            {
                let ErrorMessage = "invalid class name passed into data table configuration : " + someObjName;
                throw Error(ErrorMessage);
            }
        }
    }
}