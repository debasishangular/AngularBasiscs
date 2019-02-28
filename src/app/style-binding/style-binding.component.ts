import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.scss']
})
export class StyleBindingComponent implements OnInit {
  result = 50;
  colorFlag = false;
  constructor() {}

  ngOnInit() {}

  isRed(num) {
    if (num > 10) {
      return true;
    } else {
      return false;
    }
  }

  allRequiredStyles(styleSet) {
    let myStyles;
    if (styleSet === 'one') {
      myStyles = {
        'color': this.colorFlag ? 'black' : 'red'
      };
    } else if (styleSet === 'two') {
      myStyles = {
        'color': !this.colorFlag ? 'black' : 'yellow'
      };
    } else {
      myStyles = {
        'background-color': this.colorFlag ? 'cyan' : 'grey'
      };
    }
    return myStyles;
  }
}
