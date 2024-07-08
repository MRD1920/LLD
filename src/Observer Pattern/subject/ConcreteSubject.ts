import { Observer } from "../observer/ObserverInteface";
import { Subject } from "./subjectInterface";

export class ConcreteSubject implements Subject {
  private observers: Observer[] = [];
  private temperature!: number;
  private pressure!: number;
  private humidity!: number;

  registerObserver(o: Observer): void {
    this.observers.push(o);
  }

  removeObserver(o: Observer): void {
    const index = this.observers.indexOf(o);
    if (index != -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.temperature, this.humidity, this.pressure);
    }
  }

  setMeasurements(temperature: number, pressure: number, humidity: number): void {
    this.temperature = temperature;
    this.pressure = pressure;
    this.humidity = humidity;
    this.notifyObservers();
  }
}
