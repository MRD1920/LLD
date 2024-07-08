import { Beverage } from "../BeverageAbstract";

export class Espresso extends Beverage {
  constructor() {
    super();
    this.descripton = "Espresso";
  }
  cost(): number {
    return 1.99;
  }
}
