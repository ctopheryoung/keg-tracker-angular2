import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
  <div class="mmmBeer">
    <h3><span class="beerName">{{ keg.name }}</span>  <a (click)="pourBeer()" class="btn btn-lg btn-warning serve-button">Serve Pint</a></h3>
    <p class="brand">{{ keg.brand }}</p>
    <p class="deets">Style: {{ keg.style }}, ABV: {{ keg.abv }}%, Pints Remaining: {{ keg.remainingPints }}</p>
    <p class="price"> \${{ keg.price }}</p>
  </div>
  `
})
export class KegComponent {
  public keg: Keg;
  pourBeer(): void {
    this.keg.remainingPints --;
    if(this.keg.remainingPints <= 10){
      this.keg.low = true;
    }
  }
}
