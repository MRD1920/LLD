import { FlyBehaviour } from "./FlyBehaviour";

export class FlyWithWings implements FlyBehaviour {
  fly(): void {
    console.log("I can fly with wings");
  }
}
