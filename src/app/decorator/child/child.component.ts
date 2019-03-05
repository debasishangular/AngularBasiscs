import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Student} from '../student.model';

@Component({
  selector: 'app-child-one',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildOneComponent implements OnInit {

  @Input() ctMsg: string;

  @Input('ctArray') myctArray: Array<string>;

  @Input('studentAddMsg') addMsg: string;

  @Output('addStudentEvent') addStdEvent = new EventEmitter<Student>();

  @Output() sendMsgEvent = new EventEmitter<string>();

student = new Student();
childTitle = '---Child One---';
message = 'Send Message';
msg: string;
  constructor() { }

  ngOnInit() {
  }




addStudent() {
this.addStdEvent.emit(this.student);
        }
sendMsg() {
this.sendMsgEvent.emit(this.msg);
        }

}


