import { Component } from '@angular/core';

@Component({
  selector: 'data-table-configuration-update',
  templateUrl: 'data-table-configuration-update.html',
  styleUrls: ['./data-table-configuration-update.css']
})
export class DataTableConfigurationUpdateComponent {

  sample_data_config = {
    "id":1,
    //A list of object names used in 
    "objects-used":[],
    //Search criteria to be applied in narrowing down 
    "filters":[],
    "columns":[
      {
        "id":1,
        "table-config-id":1,
        "column-name":"test-1",
        "is-by-reference":false,
        "column-reference-chain":null,
        "object-name":"term-definition",
        "variable":"name",
        "variable-type":"string"
      },
      {
        "id":2,
        "table-config-id":1,
        "column-name":"test-2",
        "is-by-reference":true,
        //Since this is the last and only link in the chain, it is the actual value being returned.
        //However, this can be chained as many times as logically desired.  Some sort of limits should likely be put in
        //place though due to processing limits being a real thing that must be analyzed.
        "column-reference-chain":{
          "object-name":"term-definition",
          "variable":"top-category",
          //Indirect references must actually be defined as custom apis, not as actual variables, the object instance or list
          //of instances are passed to the api and recieve indexed responses to link the custom outputs to the table value.
          "variable-type":"api",
          "is-by-reference":false,
          "column-reference-chain":null   
        },
        "object-name":"term-instance",
        "variable":"self-definition",
        "variable-type":"reference"
      },
    ]
  }

  //A component used for updating/modifying a single configuration object for a data-table.
  constructor() {

  }

  ngOnInit()
  {
    
  }

}
