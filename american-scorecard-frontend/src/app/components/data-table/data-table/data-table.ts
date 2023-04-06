import { Component, Input } from '@angular/core';
import { dataTableColumn } from 'src/app/models/dataTableColumn';
import { dataTableConfiguration } from 'src/app/models/dataTableConfiguration';

@Component({
  selector: 'data-table',
  templateUrl: 'data-table.html',
  styleUrls: ['./data-table.css']
})
export class DataTableComponent {
  
  columns: dataTableColumn[] = [];
  columnHeaders: string[] = [];
  columnTypeMap = new Map<string, string|undefined>();

  //Inputs for Data Table
  @Input()
  tableName: string | undefined;
  @Input() tableConfig: dataTableConfiguration | undefined;
  @Input() instanceList: any[] = [];

  constructor() {

  }

  ngOnInit()
  {
    //After confirming appropriate input values were recieved on the component from it's parent component,
    //call the service to retrieve the data.  In current sample version we will just directly set the sample data value.
    if (this.tableConfig === undefined) {
      // Define a default configuration if none is provided
      this.tableConfig = new dataTableConfiguration(
        1, "Sample Table : Table Configurations", [], [], [
          new dataTableColumn(
            "id", "id",  "dataTableConfiguration",  "int", 1, 1
          ),
          new dataTableColumn(
            "tableName", "tableName", "string", "dataTableConfiguration", 2, 1,   
          ),
          new dataTableColumn(
            "objectsUsed","objectsUsed","array", "dataTableConfiguration", 3, 1,  
          ),
          new dataTableColumn(
            "filters", "filters", "array", "dataTableConfiguration",  4, 1
          ),
          new dataTableColumn(
            "columns", "columns", "array", "dataTableConfiguration",  4, 1
          )
        ]
      );
      this.instanceList.push(this.tableConfig);
    }
    this.tableName = this.tableConfig.tableName;
    console.log("table config: ", this.tableConfig);
    console.log("finished onInit");
    this.setColumnHeaders();
  }

  setColumnHeaders()
  {
    this.columnHeaders = [];
    this.tableConfig?.columns?.forEach((column:dataTableColumn)=>{
      this.columnHeaders.push(column.columnName);
      this.columnTypeMap.set(column.columnName, column.variableType);
    });
  }

}
