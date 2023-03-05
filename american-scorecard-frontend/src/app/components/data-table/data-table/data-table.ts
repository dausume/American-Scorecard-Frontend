import { Component, Input } from '@angular/core';
import { dataTableColumn } from 'src/app/models/dataTableColumn';
import { dataTableConfiguration } from 'src/app/models/dataTableConfiguration';

@Component({
  selector: 'data-table',
  templateUrl: 'data-table.html',
  styleUrls: ['./data-table.css']
})
export class DataTableComponent {
  @Input()
  tableName = "Sample Class"

  columns : dataTableColumn[] | undefined = [];

  headerToVarMap = new Map<string  | undefined, string>();

  columnHeaders : string[] = [];

  sample_columns : dataTableColumn[] = [
    new dataTableColumn("1","1","Column 1", false, undefined, "dataTableConfiguration", "tableName","string")
  ]

  sample_config : dataTableConfiguration[] = [
    new dataTableConfiguration("1","Sample Table",["dataTableConfiguration"],[],this.sample_columns)
  ];

  @Input()
  tableConfig : dataTableConfiguration = this.sample_config[0];

  instanceList  : any[] = [];

  constructor() {

  }

  ngOnInit()
  {
    //After confirming appropriate input values were recieved on the component from it's parent component,
    //call the service to retrieve the data.  In current sample version we will just directly set the sample data value.
    this.instanceList = this.sample_config;
    console.log("table config: ", this.tableConfig);
    console.log("sample config: ", this.sample_config);
    this.tableConfig = this.sample_config[0];
    console.log("finished onInit");
    this.columns = this.tableConfig.columns;
    this.setColumnHeaders();
  }

  setColumnHeaders()
  {
    this.columnHeaders = []
    this.headerToVarMap.clear();
    let someColumn : any;
    this.columns?.forEach((someColumn:dataTableColumn)=>{
      if(someColumn.columnName != undefined)
      {
        this.columnHeaders.push(someColumn.columnName);
        //Create map so that pipe can derive variable name in for loop from label name.
        this.headerToVarMap.set(someColumn.variableName,someColumn.columnName);
      }
      console.log(someColumn);
      console.log("iterating someColumn");
    });
    console.log("column headers set: ", this.columnHeaders)
  }

}
