import { style } from '@angular/animations';
import { Input } from '@angular/core';
import { Component } from '@angular/core';


@Component({
  selector: 'frame-of-reference-main',
  templateUrl: 'frame-of-reference-main.html',
  styleUrls: ['frame-of-reference-main.css']
})
export class FrameOfReferenceMainComponent {
  @Input()
  currentCategoryData = {};
  
  constructor() {
    
  }
}