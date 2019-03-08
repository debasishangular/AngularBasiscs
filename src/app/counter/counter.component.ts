import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <button (click)="increment()">+</button>
    {{counterValue}}
    <button (click)="decrement()">-</button>
  `
})
export class CounterComponent  {

  @Input()
  counterValue = 0;

  increment() {
    this.counterValue++;
  }

  decrement() {
    this.counterValue--;
  }
}
