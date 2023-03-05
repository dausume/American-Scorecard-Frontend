import { style } from '@angular/animations';
import { Input } from '@angular/core';
import { Component } from '@angular/core';


@Component({
  selector: 'profession-category-read',
  templateUrl: 'profession-category-read.html',
  styleUrls: ['profession-category-read.css']
})
export class ProfessionCategoryReadComponent {
  @Input()
  currentCategoryData = {};
  
  constructor() {
    
  }
}