import { style } from '@angular/animations';
import { Input } from '@angular/core';
import { Component } from '@angular/core';


@Component({
  selector: 'term-definition-update',
  templateUrl: 'term-definition-update.html',
  styleUrls: ['term-definition-update.css']
})
export class TermDefinitionUpdateComponent {
  @Input()
  currentTermData = {};
  
  constructor() {
    
  }
}