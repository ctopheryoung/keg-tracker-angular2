import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
    <div class="keg-form col-sm-8">
      <h3>Add Keg:</h3>
      <input placeholder="Beer Name" type="text" class="form-control" #newName>
      <input placeholder="Brand" type="text" class="form-control" #newBrand>
      <input placeholder="Style" type="text" class="form-control" #newStyle>
      <input placeholder="Price" type="number" type="text" class="form-control" #newPrice>
      <input placeholder="ABV" type="number" type="text" class="form-control" #newABV>
      <select class="form-control" #newSize>
        <option type="number" value="124">Full Size Keg (1/2 barrel, 124 pints)</option>
        <option type="number" value="66">Pony Keg (50 liter, 66 pints)</option>
        <option type="number" value="12">Baby Keg (12 pints)</option>
      </select>
      <button (click)="addKeg(newName, newBrand, newStyle, newPrice, newABV, newSize)" class="btn btn-success add-button">Add Keg</button>
    </div>
  `
})
export class NewKegComponent {
  public onSubmitNewKeg;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(newKegName: HTMLInputElement, newKegBrand: HTMLInputElement, newKegStyle: HTMLInputElement, newKegPrice: HTMLInputElement, newKegABV: HTMLInputElement, newKegSize: HTMLInputElement){
    this.onSubmitNewKeg.emit([newKegName.value, newKegBrand.value, newKegStyle.value, newKegPrice.value, newKegABV.value, newKegSize.value]);
    newKegName.value = "";
    newKegBrand.value = "";
    newKegStyle.value = "";
    newKegPrice.value = "";
    newKegABV.value = "";
  }
}
