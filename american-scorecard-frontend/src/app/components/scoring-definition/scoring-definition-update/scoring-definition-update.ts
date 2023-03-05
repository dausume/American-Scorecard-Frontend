import { style } from '@angular/animations';
import { Input } from '@angular/core';
import { Component } from '@angular/core';


@Component({
  selector: 'scoring-definition-update',
  templateUrl: 'scoring-definition-update.html',
  styleUrls: ['scoring-definition-update.css']
})
export class ScoringDefinitionUpdateComponent {
  @Input()
  currentTermData = {};
  
  constructor() {
    
  }
}