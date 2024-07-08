import { Pizza } from "./AbstractPizza";

export class CheezePizza extends Pizza {
  constructor() {
    super("Cheeze Pizza");
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
