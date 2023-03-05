import { style } from '@angular/animations';
import { Input } from '@angular/core';
import { Component } from '@angular/core';


@Component({
  selector: 'term-instance-read',
  templateUrl: 'term-instance-read.html',
  styleUrls: ['term-instance-read.css']
})
export class TermInstanceReadComponent {
  @Input()
  currentTermData = {};
  
  constructor() {
    
  }
}