import { style } from '@angular/animations';
import { Input } from '@angular/core';
import { Component } from '@angular/core';


@Component({
  selector: 'term-definition-display',
  templateUrl: 'term-definition-display.html',
  styleUrls: ['term-definition-display.css']
})
export class TermDefinitionDisplayComponent {
  @Input()
  currentTermData = {};
  
  constructor() {
    
  }
}