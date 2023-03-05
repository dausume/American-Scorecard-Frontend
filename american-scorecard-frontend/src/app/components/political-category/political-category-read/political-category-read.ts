import { style } from '@angular/animations';
import { Input } from '@angular/core';
import { Component } from '@angular/core';


@Component({
  selector: 'political-category-read',
  templateUrl: 'political-category-read.html',
  styleUrls: ['political-category-read.css']
})
export class PoliticalCategoryReadComponent {
  @Input()
  currentCategoryData = {};
  
  constructor() {
    
  }
}