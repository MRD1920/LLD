import { HomeTheaterFacade } from "./Facade Class/HomeTheatherFacade";
import { Amplifier } from "./Subsystem Classes/Amplifier";
import { DvdPlayer } from "./Subsystem Classes/DvdPlayer";
import { Projector } from "./Subsystem Classes/Projector";
import { TheaterLights } from "./Subsystem Classes/TheaterLights";

const amp = new Amplifier();
const dvd = new DvdPlayer();
const projector = new Projector();
const lights = new TheaterLights();

const homeTheater = new HomeTheaterFacade(amp, dvd, projector, lights);
homeTheater.watchMovie("Inception");
homeTheater.endMovie();
