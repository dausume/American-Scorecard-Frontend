import { style } from '@angular/animations';
import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'modifier-buttons',
  templateUrl: 'modifier-buttons.html',
  styleUrls: ['modifier-buttons.css']
})
export class modifierButtonsComponent {
  router: Router

  @Input()
  className : string = "";

  //A simple set of buttons floating in the top-right corner of certain pages that correspond with specific objects.
  //Contains the Create, Edit, and Delete Buttons.  Which are enabled or disabled individually depending on which page
  //this component is being used on.
  constructor(router:Router) {
    this.router = router;
  }
}