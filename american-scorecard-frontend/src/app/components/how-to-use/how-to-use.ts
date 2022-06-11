import { Component } from '@angular/core';

@Component({
  selector: 'how-to-use',
  templateUrl: 'how-to-use.html',
  styleUrls: ['./how-to-use.css']
})
export class HowToUseComponent {

  constructor() {

  }

  ngOnInit()
  {
    console.log("In home ngOnInit");
  }

}
