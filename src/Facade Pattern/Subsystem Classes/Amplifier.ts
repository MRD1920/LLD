export class Amplifier {
  on(): void {
    console.log(`Amplifier is on`);
  }

  off(): void {
    console.log(`Amplifier is off`);
  }

  setDvd(dvd: string): void {
    console.log(`Amplifier setting DVD to ${dvd}`);
  }

  setSurroundSound(): void {
    console.log(`Amplifier is set to Surround Sound`);
  }

  setVolume(volume: number): void {
    console.log(`Amplifier setting volume to ${volume}`);
  }
}
