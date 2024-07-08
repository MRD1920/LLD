import { Light } from "../Receiver/Light";
import { Command } from "./CommandInterface";

export class LightOffCommand implements Command {
  private light: Light;
  constructor(light: Light) {
    this.light = light;
  }
  execute(): void {
    this.light.off();
  }
  undo(): void {
    throw new Error("Method not implemented.");
  }
}
