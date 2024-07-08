import { Subject } from "../subject/subjectInterface";
import { Observer } from "./ObserverInteface";

export class ConcreteObserver implements Observer {
  private temperature!: number;
  private humidity!: number;
  private pressure!: number;
  private subject: Subject;

  constructor(subject: Subject) {
    this.subject = subject;
    this.subject.registerObserver(this);
  }

  update(temperate: number, humidity: number, pressure: number): void {
    this.temperature = temperate;
    this.humidity = humidity;
    this.pressure = pressure;
    this.display();
  }

  display(): void {
    console.log(`Current conditions: ${this.temperature}F degrees, ${this.humidity}% humidity, and ${this.pressure} pressure`);
  }
}
