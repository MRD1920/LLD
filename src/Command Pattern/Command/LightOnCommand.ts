import { Light } from "../Receiver/Light";
import { Command } from "./CommandInterface";

export class LightOnCommand implements Command {
  private light: Light;
  constructor(light: Light) {
    this.light = light;
  }
  execute(): void {
    this.light.on();
  }
  undo(): void {
    this.light.off();
  }
}
