import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChildOneComponent } from 'src/app/decorator/child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  parentTitle = 'Parent Component';

  // Property for child component one
  cityMsg = 'Indian City Names';
  cityArray = ['Varanasi', 'Delhi', 'Mumbai'];
  stdAddMsg = 'Add Student';

  // Property used in parent
  stdFullName = '';
  sum = '';
  msg = '';

  @ViewChild(ChildOneComponent) private childComponent: ChildOneComponent;
  @ViewChild('name') private elName: ElementRef;
  @ViewChild('message') private elMessage: ElementRef;

  constructor() {}

  ngOnInit() {}

  saveData(std) {
    this.stdFullName = std.fname + ' ' + std.lname;
  }

  printMsg(msg) {
    this.msg = msg;
  }

  addStudent() {
    this.childComponent.addStudent();
   this.elName.nativeElement.style.backgroundColor = 'cyan';
  }
  sendMsg() {
    this.childComponent.sendMsg();
    this.elMessage.nativeElement.style.backgroundColor = 'red';
  }
}
