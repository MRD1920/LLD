import { PizzaStore } from "./Pizza Factory/AbstractPizzaStore";
import { NYPizzaStore } from "./Pizza Factory/ConcretePizzaStore";

const nyStore: PizzaStore = new NYPizzaStore();

let pizza = nyStore.OrderPizza("cheese");
console.log(`Ethan ordered a ${pizza.name}\n`);

pizza = nyStore.OrderPizza("pepperoni");
console.log(`Joel ordered a ${pizza.name}\n `);
