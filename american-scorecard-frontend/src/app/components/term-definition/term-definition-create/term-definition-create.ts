import { style } from '@angular/animations';
import { Input } from '@angular/core';
import { Component } from '@angular/core';


@Component({
  selector: 'term-definition-create',
  templateUrl: 'term-definition-create.html',
  styleUrls: ['term-definition-create.css']
})
export class TermDefinitionDisplayComponent {
  @Input()
  currentTermData = {};
  
  constructor() {
    
  }
}