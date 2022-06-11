import { style } from '@angular/animations';
import { Input } from '@angular/core';
import { Component } from '@angular/core';


@Component({
  selector: 'political-category-display',
  templateUrl: 'political-category-display.html',
  styleUrls: ['political-category-display.css']
})
export class PoliticalCategoryDisplayComponent {
  @Input()
  currentCategoryData = {};
  
  constructor() {
    
  }
}