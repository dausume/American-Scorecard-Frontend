import { style } from '@angular/animations';
import { Input } from '@angular/core';
import { Component } from '@angular/core';


@Component({
  selector: 'term-instance-main',
  templateUrl: 'term-instance-main.html',
  styleUrls: ['term-instance-main.css']
})
export class TermInstanceMainComponent {
  @Input()
  currentTermData = {};
  
  constructor() {
    
  }
}