export abstract class Pizza {
  name!: string;

  constructor(name: string) {
    this.name = name;
  }

  //   prepare(): void {
  //     console.log(`Preparing ${this.name} Pizza`);
  //   }
  //   bake(): void {
  //     console.log(`Baking ${this.name} Pizza`);
  //   }
  //   cut(): void {
  //     console.log(`Cutting ${this.name} Pizza`);
  //   }
  //   box(): void {
  //     console.log(`Boxing ${this.name} Pizza`);
  //   }

  abstract prepare(): void;
  abstract bake(): void;
  abstract cut(): void;
  abstract box(): void;
}
