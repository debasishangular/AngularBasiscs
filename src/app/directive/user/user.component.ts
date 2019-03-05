import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { DirectionEnum } from '../directionenum';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users = [
    new User('Mahesh', 20),
    new User('Krishna', 22),
    new User('Narendra', 30)
  ];

  person = 'Sohan';
  dirEnum = DirectionEnum;
  myDir = DirectionEnum.North;
  ids = [1, 2, 3, 4];
  constructor() {}

  ngOnInit() {}

  getCSSClasses(flag: string) {
    let cssClasses;
    if (flag === 'nightMode') {
       cssClasses = {
         'one': true,
         'two': true
       };
    } else {
       cssClasses = {
         'two': true,
        'four': false
       };
    }
    return cssClasses;
  }

}
