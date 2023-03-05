import { style } from '@angular/animations';
import { Input } from '@angular/core';
import { Component } from '@angular/core';


@Component({
  selector: 'scoring-definition-main',
  templateUrl: 'scoring-definition-main.html',
  styleUrls: ['scoring-definition-main.css']
})
export class ScoringDefinitionMainComponent {
  @Input()
  currentTermData = {};
  
  constructor() {
    
  }
}