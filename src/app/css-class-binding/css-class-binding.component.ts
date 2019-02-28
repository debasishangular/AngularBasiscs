import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css-class-binding',
  templateUrl: './css-class-binding.component.html',
  styleUrls: ['./css-class-binding.component.scss']
})
export class CssClassBindingComponent implements OnInit {


  isReq = true;
isOptional(data) {
if (data === 'yes') {
return true;
} else {
 return false;
}
}
  constructor() { }

  ngOnInit() {
  }

}
