import { Component, EventEmitter } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
  <div class="container">
    <h1>Tap Room</h1>
    <keg-list
      [kegList]="kegs">
    </keg-list>
  </div>
  `
})

export class AppComponent {
  public kegs: Keg[];
  constructor(){
    this.kegs = [
      new Keg("Black Butte Porter", "Deschutes Brewery", "Porter", 5, 5.2, 124, 0),
      new Keg("La Follie", "New Belgium", "Sour Brown Ale", 7, 7.0, 37, 1),
      new Keg("Sierra Nevada Pale", "Sierra Nevada", "Pale Ale", 4, 5.6, 55, 2),
      new Keg("Old Rasputin", "North Coast Brewing Co.", "Russian Imperial", 6, 9, 12, 3),
    ]
  }
}
