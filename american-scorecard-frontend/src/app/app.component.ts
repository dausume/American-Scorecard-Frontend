import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  router: Router
  sideNavOpened = false;
  title = 'american-scorecard-frontend';
  currentComponentTitle = "Home";

  constructor(router: Router)
  {
    this.router = router
  }

  toggleSideNav() {
    console.log("before toggled sidenav - app component: ", this.sideNavOpened)
    if(this.sideNavOpened)
    {
      this.sideNavOpened = false
    }
    else{
      this.sideNavOpened = true
    }
    console.log("after toggled sidenav - app component: ", this.sideNavOpened)
  }

}
