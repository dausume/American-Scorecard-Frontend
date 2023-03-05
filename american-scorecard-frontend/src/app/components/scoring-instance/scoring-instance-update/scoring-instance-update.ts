import { style } from '@angular/animations';
import { Input } from '@angular/core';
import { Component } from '@angular/core';


@Component({
  selector: 'scoring-instance-update',
  templateUrl: 'scoring-instance-update.html',
  styleUrls: ['scoring-instance-update.css']
})
export class ScoringInstanceUpdateComponent {
  @Input()
  currentTermData = {};
  
  constructor() {
    
  }
}