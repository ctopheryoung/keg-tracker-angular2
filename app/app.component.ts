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
      [kegList]="kegs"
      (onKegSelect)="kegWasSelected($event)">
    </keg-list>
  </div>
  `
})

export class AppComponent {
  public kegs: Keg[];
  constructor(){
    this.kegs = [
      new Keg("Black Butte Porter", "Deschutes Brewery", "Porter", 5, 5.2, 0),
      new Keg("La Follie", "New Belgium", "Sour Brown Ale", 7, 7.0, 1)
    ]
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log('parent', clickedKeg)
  }
}