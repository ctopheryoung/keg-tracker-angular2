import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
  <div class="mmmBeer">
    <h3>{{ keg.name }}</h3>
    <p class="brand">{{ keg.brand }}</p>
    <p class="deets">Style: {{ keg.style }}, ABV: {{ keg.abv }}%, Pints Remaining: {{ keg.remainingPints }}</p>
    <p class="price"> \${{ keg.price }} </p>
  </div>
  `
})
export class KegComponent {
  public keg: Keg;
}
