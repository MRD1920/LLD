//This is the client side code.

import { FlyWithWings } from "./Behaviours/FlyWithWings";
import { FlyWithoutWings } from "./Behaviours/FlyWithoutWings";
import { Quack } from "./Behaviours/Quack";
import { Duck } from "./Ducks/Duck";
import { MallarDuck } from "./Ducks/MallarDuck";

(function main() {
  const mallarDuck: Duck = new MallarDuck(new FlyWithoutWings(), new Quack());
  mallarDuck.display();
  mallarDuck.performFly();
  mallarDuck.performQuack();

  mallarDuck.setFlyBehavior(new FlyWithWings());
  mallarDuck.performFly();
})();
