import { Light } from "../../Command Pattern/Receiver/Light";
import { Amplifier } from "../Subsystem Classes/Amplifier";
import { DvdPlayer } from "../Subsystem Classes/DvdPlayer";
import { Projector } from "../Subsystem Classes/Projector";
import { TheaterLights } from "../Subsystem Classes/TheaterLights";

export class HomeTheaterFacade {
  private amp!: Amplifier;
  private dvd!: DvdPlayer;
  private projector!: Projector;
  private lights!: TheaterLights;

  constructor(amp: Amplifier, dvd: DvdPlayer, projector: Projector, lights: TheaterLights) {
    this.amp = amp;
    this.dvd = dvd;
    this.projector = projector;
    this.lights = lights;
  }

  watchMovie(movie: string): void {
    console.log("Get ready to watch a movie...");
    this.lights.dim(10);
    this.projector.on();
    this.projector.wideScreenMode();
    this.amp.on();
    this.amp.setDvd(movie);
    this.amp.setSurroundSound();
    this.amp.setVolume(5);
    this.dvd.on();
    this.dvd.play(movie);
  }
  endMovie(): void {
    console.log(`Shutting movie theater down...`);
    this.lights.on();
    this.projector.off();
    this.amp.off();
    this.dvd.stop();
    this.dvd.eject();
    this.dvd.off();
  }
}
