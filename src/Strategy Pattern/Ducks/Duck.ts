import { FlyBehaviour } from "../Behaviours/FlyBehaviour";
import { QuackBehaviour } from "../Behaviours/QuackBehaviour";

export abstract class Duck {
  flyBehavior: FlyBehaviour;
  quackBehavior: QuackBehaviour;

  constructor(flyBehavior: FlyBehaviour, quackBehavior: QuackBehaviour) {
    this.flyBehavior = flyBehavior;
    this.quackBehavior = quackBehavior;
  }
  performFly(): void {
    this.flyBehavior.fly();
  }

  performQuack(): void {
    this.quackBehavior.quack();
  }

  setFlyBehavior(flyBehavior: FlyBehaviour): void {
    this.flyBehavior = flyBehavior;
  }

  setQuackBehavior(quackBehavior: QuackBehaviour): void {
    this.quackBehavior = quackBehavior;
  }

  swim(): void {
    console.log("All ducks can swim");
  }

  abstract display(): void;
}
