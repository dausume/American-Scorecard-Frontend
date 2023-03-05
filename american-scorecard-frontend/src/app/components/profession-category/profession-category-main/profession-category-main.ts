import { style } from '@angular/animations';
import { Input } from '@angular/core';
import { Component } from '@angular/core';


@Component({
  selector: 'profession-category-main',
  templateUrl: 'profession-category-main.html',
  styleUrls: ['profession-category-main.css']
})
export class ProfessionCategoryMainComponent {
  @Input()
  currentCategoryData = {};
  
  constructor() {
    
  }
}