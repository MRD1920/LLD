import { FlyBehaviour } from "../Behaviours/FlyBehaviour";
import { FlyWithWings } from "../Behaviours/FlyWithWings";
import { Quack } from "../Behaviours/Quack";
import { QuackBehaviour } from "../Behaviours/QuackBehaviour";
import { Duck } from "./Duck";

//This is a concrete implementation for a duck
export class MallarDuck extends Duck {
  constructor(fb: FlyBehaviour, qb: QuackBehaviour) {
    super(fb, qb);
  }
  display(): void {
    console.log("I am Mallar Duck");
  }
}
