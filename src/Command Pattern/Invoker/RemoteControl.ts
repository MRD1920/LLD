import { Command } from "../Command/CommandInterface";
import { Stack } from "js-sdsl";

export class RemoteControl {
  private onCommands: Command[];
  private offCommands: Command[];
  private commandHistory: Stack<Command>;

  constructor() {
    this.onCommands = [];
    this.offCommands = [];
    this.commandHistory = new Stack<Command>();
  }

  setCommand(slot: number, onCommand: Command, offCommand: Command): void {
    if (slot < 0) {
      console.log("Invalid slot number. Please enter a valid slot number !!");
      return;
    }

    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  pushOnButton(slot: number): void {
    this.onCommands[slot].execute();
    this.commandHistory.push(this.onCommands[slot]);
  }

  pushOffButton(slot: number): void {
    this.offCommands[slot].execute();
  }

  undo(): void {
    const top: Command | undefined = this.commandHistory.top();
    this.commandHistory.pop();
    top?.undo();
  }
}
