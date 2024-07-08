import { FlyBehaviour } from "./FlyBehaviour";

export class FlyWithoutWings implements FlyBehaviour {
  fly(): void {
    console.log("I can't fly");
  }
}
