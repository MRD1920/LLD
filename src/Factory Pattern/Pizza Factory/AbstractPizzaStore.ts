import { Pizza } from "../Pizza Types/AbstractPizza";

export abstract class PizzaStore {
  OrderPizza(type: string) {
    const pizza = this.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }
  protected abstract createPizza(type: string): Pizza;
}
