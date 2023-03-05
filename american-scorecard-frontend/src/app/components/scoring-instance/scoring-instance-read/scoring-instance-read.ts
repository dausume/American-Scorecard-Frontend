import { style } from '@angular/animations';
import { Input } from '@angular/core';
import { Component } from '@angular/core';


@Component({
  selector: 'scoring-instance-read',
  templateUrl: 'scoring-instance-read.html',
  styleUrls: ['scoring-instance-read.css']
})
export class ScoringInstanceReadComponent {
  @Input()
  currentTermData = {};
  
  constructor() {
    
  }
}