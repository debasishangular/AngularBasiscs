import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.scss']
})
export class TwowaybindingComponent implements OnInit {

  data = 'TestValue';

  secondData = 'TestValue2';

  thirdData = 'Testvalue3';

  constructor() { }

  ngOnInit() {
  }

}
