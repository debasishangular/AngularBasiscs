import {
  Component,
  OnInit,
  AfterContentInit,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss']
})
export class FriendComponent implements AfterContentInit {
  @ContentChild('name') nameRef: ElementRef;

  get friendName(): String {
    return this.nameRef.nativeElement.innerHTML;
  }
  ngAfterContentInit() {
    console.log(this.friendName);
  }
}
