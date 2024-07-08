import { Beverage } from "../Breverage/BeverageAbstract";

export abstract class CondimentDecorator extends Beverage {
  abstract getDescription(): string;
}
