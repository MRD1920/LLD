export class Light {
  private location: string;

  constructor(location: string) {
    this.location = location;
  }

  on(): void {
    console.log(`Turning ${this.location} light on`);
  }

  off(): void {
    console.log(`Turniing ${this.location} light off`);
  }
}
