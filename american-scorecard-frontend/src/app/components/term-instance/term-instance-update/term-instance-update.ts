import { style } from '@angular/animations';
import { Input } from '@angular/core';
import { Component } from '@angular/core';


@Component({
  selector: 'term-instance-update',
  templateUrl: 'term-instance-update.html',
  styleUrls: ['term-instance-update.css']
})
export class TermInstanceUpdateComponent {
  @Input()
  currentTermData = {};
  
  constructor() {
    
  }
}