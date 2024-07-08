import cluster from "cluster";
import os from "os";

export class Singleton {
  public static instance: Singleton;

  private constructor() {
    //Private constructor doesn't allow external instantiation.
  }

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  public someBusinessLogic(): void {
    console.log("Executing business logic");
  }
}

const obj1: Singleton = Singleton.getInstance();
const obj2: Singleton = Singleton.getInstance();

console.log(obj1 === obj2);

const totalCPUs = os.cpus().length;
console.log(`Total CPUs: ${totalCPUs}`);
