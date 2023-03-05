import { style } from '@angular/animations';
import { Input } from '@angular/core';
import { Component } from '@angular/core';


@Component({
  selector: 'term-definition-read',
  templateUrl: 'term-definition-read.html',
  styleUrls: ['term-definition-read.css']
})
export class TermDefinitionReadComponent {
  @Input()
  currentTermData = {};
  
  constructor() {
    
  }
}