import { ConcreteObserver } from "./observer/ConcreteObserver";
import { ConcreteSubject } from "./subject/ConcreteSubject";
import { Subject } from "./subject/subjectInterface";

const weatherStation = new ConcreteSubject();
const Observer1 = new ConcreteObserver(weatherStation);

weatherStation.setMeasurements(80, 65, 30.4);
weatherStation.setMeasurements(82, 70, 29.2);
weatherStation.setMeasurements(78, 90, 29.2);
