function requiredExperience() {
  return function (target: any, propertyKey: string, descriptor: any) {
    // the original method
    const originalMethod = descriptor.value;

    // overwrite the method
    descriptor.value = function (...args: any[]) {
      // if check passes...
      if (this.experience > this.experienceThreshold) {
        // use original method
        originalMethod.apply(this, args);
      } else {
        // otherwise do something else
        console.log(`${this.name} doesn't have enough experience to evolve into ${this.evolution}. 🚫`);
      }
    };

    return descriptor;
  };
}

class Pokemon {
  constructor(private name: string, private experience: number, private evolution: string, private experienceThreshold: number) {}

  @requiredExperience()
  evolve() {
    console.log(`${this.name} evolved to ${this.evolution}. ✨`);
  }
}

const pikachu = new Pokemon("Pikachu", 80, "Raichu", 120);

// "Pikachu doesn't have enough experience to
// evolve into Raichu." 🚫
pikachu.evolve();
