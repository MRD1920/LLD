import { Pizza } from "../Pizza Types/AbstractPizza";
import { CheezePizza } from "../Pizza Types/CheesePizza";
import { PepperoniPizza } from "../Pizza Types/PepporiniPizza";
import { PizzaStore } from "./AbstractPizzaStore";

export class NYPizzaStore extends PizzaStore {
  protected createPizza(type: string): Pizza {
    if (type === "cheese") {
      return new CheezePizza();
    } else if (type === "pepperoni") {
      return new PepperoniPizza();
    } else {
      throw new Error("Unknow pizza type");
    }
  }
}
