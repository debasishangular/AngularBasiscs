import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {



  isValid = true;
   msg1 = 'Hello World';
   msg2 = '';
   msg3 = '';

setMsg(data: string) {
    this.msg1 = data;
}

changeText(mytext: string) {
    this.msg3 = mytext;
        }

  constructor() { }

  ngOnInit() {
  }

}
