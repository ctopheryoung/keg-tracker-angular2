export class Keg {
  public low: boolean = false;
  constructor(public name: string, public brand: string, public style: string, public price: number, public abv: number, public remainingPints: number, public id: number) {
  }
}
