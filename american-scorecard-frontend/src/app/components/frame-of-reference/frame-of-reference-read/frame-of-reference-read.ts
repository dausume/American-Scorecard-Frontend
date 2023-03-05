import { style } from '@angular/animations';
import { Input } from '@angular/core';
import { Component } from '@angular/core';


@Component({
  selector: 'frame-of-reference-read',
  templateUrl: 'frame-of-reference-read.html',
  styleUrls: ['frame-of-reference-read.css']
})
export class FrameOfReferenceReadComponent {
  @Input()
  currentCategoryData = {};
  
  constructor() {
    
  }
}