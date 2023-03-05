import { style } from '@angular/animations';
import { Input } from '@angular/core';
import { Component } from '@angular/core';


@Component({
  selector: 'term-instance-create',
  templateUrl: 'term-instance-create.html',
  styleUrls: ['term-instance-create.css']
})
export class TermInstanceCreateComponent {
  @Input()
  currentTermData = {};
  
  constructor() {
    
  }
}