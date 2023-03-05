import { style } from '@angular/animations';
import { Input } from '@angular/core';
import { Component } from '@angular/core';


@Component({
  selector: 'scoring-instance-create',
  templateUrl: 'scoring-instance-create.html',
  styleUrls: ['scoring-instance-create.css']
})
export class ScoringInstanceCreateComponent {
  @Input()
  currentTermData = {};
  
  constructor() {
    
  }
}