import { Pizza } from "./AbstractPizza";

export class PepperoniPizza extends Pizza {
  constructor() {
    super("Pepperoni Pizza");
  }
  prepare(): void {
    console.log(`Preparing ${this.name} Pizza`);
  }
  bake(): void {
    console.log(`Baking ${this.name} Pizza`);
  }
  cut(): void {
    console.log(`Cutting ${this.name} Pizza`);
  }
  box(): void {
    console.log(`Boxing ${this.name} Pizza`);
  }
}
