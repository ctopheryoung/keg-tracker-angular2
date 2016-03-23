import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
  <div class="keg-form">
    <h3>Add Keg:</h3>
    <input placeholder="Name" class="col-sm-8" #newName>
    <input placeholder="Brand" class="col-sm-8" #newBrand>
    <input placeholder="Style" class="col-sm-8" #newStyle>
    <input placeholder="Price" class="col-sm-8" #newPrice>
    <input placeholder="ABV" class="col-sm-8" #newABV>
    <button (click)="addKeg(newName, newBrand, newStyle, newPrice, newABV)" class="btn btn-success add-button">Add</button>
  </div>
  `
})
export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<String[]>;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(newKegName: HTMLInputElement, newKegBrand: HTMLInputElement, newKegStyle: HTMLInputElement, newKegPrice: HTMLInputElement, newKegABV: HTMLInputElement){
    this.onSubmitNewKeg.emit([newKegName.value, newKegBrand.value, newKegStyle.value, newKegPrice.value, newKegABV.value]);
    newKegName.value = "";
    newKegBrand.value = "";
    newKegStyle.value = "";
    newKegPrice.value = "";
    newKegABV.value = "";
  }
  // addKeg(newKegName: HTMLInputElement, newKegBrand: HTMLInputElement, newKegStyle: HTMLInputElement, newKegPrice: HTMLInputElement, newKegABV: HTMLInputElement){
  //   this.onSubmitNewKeg.emit(newKegName.value);
  //   this.onSubmitNewKeg.emit(newKegBrand.value);
  //   this.onSubmitNewKeg.emit(newKegStyle.value);
  //   this.onSubmitNewKeg.emit(newKegPrice.value);
  //   this.onSubmitNewKeg.emit(newKegABV.value);
  //   newKegName.value = "";
  //   newKegBrand.value = "";
  //   newKegStyle.value = "";
  //   newKegPrice.value = "";
  //   newKegABV.value = "";
  // }
}
