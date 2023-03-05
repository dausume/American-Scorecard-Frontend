import { style } from '@angular/animations';
import { Input } from '@angular/core';
import { Component } from '@angular/core';


@Component({
  selector: 'scoring-definition-create',
  templateUrl: 'scoring-definition-create.html',
  styleUrls: ['scoring-definition-create.css']
})
export class ScoringDefinitionCreateComponent {
  @Input()
  currentTermData = {};
  
  constructor() {
    
  }
}