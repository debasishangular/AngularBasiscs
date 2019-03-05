import { Component, OnInit } from '@angular/core';
import { CityComponent } from './city/city.component';
import {FriendComponent} from './friend/friend.component'

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrls: ['./content-child.component.scss']
})
export class ContentChildComponent implements OnInit {

  homeTown = true;
  bestFriend = true;
  constructor() { }

  ngOnInit() {
  }

  onChangeCity() {
    this.homeTown = (this.homeTown === true) ? false : true;
 }


onChangeFriend() {
   this.bestFriend = (this.bestFriend === true) ? false : true;
}
}
