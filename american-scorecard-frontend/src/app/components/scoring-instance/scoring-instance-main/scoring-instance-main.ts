import { style } from '@angular/animations';
import { Input } from '@angular/core';
import { Component } from '@angular/core';


@Component({
  selector: 'scoring-instance-main',
  templateUrl: 'scoring-instance-main.html',
  styleUrls: ['scoring-instance-main.css']
})
export class ScoringInstanceMainComponent {
  @Input()
  currentTermData = {};
  
  constructor() {
    
  }
}