// src/subsystem/DvdPlayer.ts
export class DvdPlayer {
  on(): void {
    console.log("DVD Player is on");
  }

  off(): void {
    console.log("DVD Player is off");
  }

  play(movie: string): void {
    console.log(`DVD Player playing ${movie}`);
  }

  stop(): void {
    console.log("DVD Player stopped");
  }

  eject(): void {
    console.log("DVD Player eject");
  }
}
