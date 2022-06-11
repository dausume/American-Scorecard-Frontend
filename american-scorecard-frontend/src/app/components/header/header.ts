import { style } from '@angular/animations';
import { Input } from '@angular/core';
import { Component } from '@angular/core';


@Component({
  selector: 'header',
  templateUrl: 'header.html',
  styleUrls: ['header.css']
})
export class HeaderComponent {  

  currentComponentTitle = "Current Component Title Placeholder"

  constructor() {
    
  }
}