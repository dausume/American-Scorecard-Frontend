import { style } from '@angular/animations';
import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'header',
  templateUrl: 'header.html',
  styleUrls: ['header.css']
})
export class HeaderComponent {
  router: Router
  @Input()
  sideNavOpened = false;
  title = 'american-scorecard-frontend';
  @Input()
  currentComponentTitle = "Home"

  //Acts as a means to assess your current login status, as well as displays the title of the page you are currently on.
  constructor(router:Router) {
    this.router = router;
  }

  toggleSideNav() {
    if(this.sideNavOpened)
    {
      this.sideNavOpened = false
    }
    else{
      this.sideNavOpened = true
    }
  }
}