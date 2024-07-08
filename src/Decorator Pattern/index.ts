import { Espresso } from "./Breverage/BaseBrevarages/Espresso";
import { Beverage } from "./Breverage/BeverageAbstract";
import { Mocha } from "./Decorators/ConcreteDecorators/Mocha";
import { Whip } from "./Decorators/ConcreteDecorators/Whip";

let beverage: Beverage = new Espresso();
console.log(`${beverage.getDescription()} $${beverage.cost()}`);

beverage = new Mocha(beverage);
console.log(`${beverage.getDescription()} $${beverage.cost()}`);

beverage = new Whip(beverage);
console.log(`${beverage.getDescription()} $${beverage.cost()}`);

beverage = new Whip(beverage);
console.log(`${beverage.getDescription()} $${beverage.cost()}`);
