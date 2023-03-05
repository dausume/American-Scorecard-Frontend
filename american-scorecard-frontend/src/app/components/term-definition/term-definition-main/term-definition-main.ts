import { style } from '@angular/animations';
import { Input } from '@angular/core';
import { Component } from '@angular/core';


@Component({
  selector: 'term-definition-main',
  templateUrl: 'term-definition-main.html',
  styleUrls: ['term-definition-main.css']
})
export class TermDefinitionMainComponent {
  @Input()
  currentTermData = {};
  
  constructor() {
    
  }
}