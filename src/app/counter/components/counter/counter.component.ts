import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `

    <h3>Counter:</h3>

    <p>{{ counter }}</p>
    <button (click)="increaseBy()">+1</button>
    <span>_</span>

    <button (click)="reset()">Reset</button>
    <span>_</span>

    <button (click)="decreaseBy()">-1</button>

  `,

})
export class CounterComponent {

  counter = 0;

  increaseBy() {
    this.counter += 1;
  }

  decreaseBy() {
    this.counter -= 1;
  }

  reset() {
    this.counter = 0;
  }
}
