import { style } from '@angular/animations';
import { Input } from '@angular/core';
import { Component } from '@angular/core';


@Component({
  selector: 'scoring-definition-read',
  templateUrl: 'scoring-definition-read.html',
  styleUrls: ['scoring-definition-read.css']
})
export class ScoringDefinitionReadComponent {
  @Input()
  currentTermData = {};
  
  constructor() {
    
  }
}