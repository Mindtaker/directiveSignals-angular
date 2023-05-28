import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
})
export class CounterPageComponent {
  public counter = signal(10);
  public squareCounter = computed(() => this.counter() * this.counter());

  increaseBy(amount: number) {
    this.counter.update((current) => current + amount);
  }
}
