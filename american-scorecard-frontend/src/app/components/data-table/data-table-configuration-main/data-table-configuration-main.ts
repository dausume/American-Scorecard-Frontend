import { Component } from '@angular/core';

@Component({
  selector: 'data-table-configuration-main',
  templateUrl: 'data-table-configuration-main.html',
  styleUrls: ['./data-table-configuration-main.css']
})
export class DataTableConfigurationMainComponent {

  //The main component for viewing the various configured methods of data table configurations.
  constructor() {

  }

  ngOnInit()
  {
    console.log("In home ngOnInit");
  }

}
