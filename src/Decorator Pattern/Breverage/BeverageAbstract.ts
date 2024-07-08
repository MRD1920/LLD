export abstract class Beverage {
  protected descripton: string = "Unknown Breverage";

  getDescription(): string {
    return this.descripton;
  }

  abstract cost(): number;
}
