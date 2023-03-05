import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: 'home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {

  //The Home page of the application, meant to give a basic understanding of current critical events through the lens
  //of Metrics utilization and Competitive-Scoring, so as to encourage user engagement and show off the positive utility
  //aspects of the platform.
  constructor() {

  }

  ngOnInit()
  {
    console.log("In home ngOnInit");
  }

}
