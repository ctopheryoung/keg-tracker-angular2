import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { NewKegComponent } from './new-keg.component';
import {KegLevelPipe} from './keg-level.pipe';

@Component({
  selector: 'keg-list',
  pipes: [KegLevelPipe],
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  directives: [KegComponent, NewKegComponent],
  template: `
  <br><h4>Filter:</h4>
  <select class="form-control" (change)="onChange($event.target.value)">
    <option value="all" selected="selected">All Kegs</option>
    <option value="low">Kegs Nearing Completion</option>
    <option value="notLow">Kegs Not Nearing Completion</option>
  </select>
  <keg-display *ngFor="#currentKeg of kegList | low:filterLow"
  [keg]="currentKeg">
  </keg-display>
  <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
  `
})
export class KegListComponent {
  public filterLow: string;
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  createKeg(userInput): void {
    this.kegList.push(
      new Keg(userInput[0], userInput[1], userInput[2], userInput[3], userInput[4], userInput[5], this.kegList.length)
    )
  }
  onChange(filterOption) {
    this.filterLow = filterOption;
  }
}
