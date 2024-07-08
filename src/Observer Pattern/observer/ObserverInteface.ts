export interface Observer {
  update(temperate: number, humidity: number, pressure: number): void;
}
