// src/subsystem/TheaterLights.ts
export class TheaterLights {
  dim(level: number): void {
    console.log(`Theater lights dimming to ${level}%`);
  }

  on(): void {
    console.log("Theater lights are on");
  }
}
