import { style } from '@angular/animations';
import { Input } from '@angular/core';
import { Component } from '@angular/core';


@Component({
  selector: 'political-category-main',
  templateUrl: 'political-category-main.html',
  styleUrls: ['political-category-main.css']
})
export class PoliticalCategoryMainComponent {
  @Input()
  currentCategoryData = {};
  
  constructor() {
    
  }
}