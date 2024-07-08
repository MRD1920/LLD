import { LightOffCommand } from "./Command/LightOffCommand";
import { LightOnCommand } from "./Command/LightOnCommand";
import { RemoteControl } from "./Invoker/RemoteControl";
import { Light } from "./Receiver/Light";

const remoteControl: RemoteControl = new RemoteControl();

const newLight: Light = new Light("Drawing Room");
const newLight2: Light = new Light("Bed Room");

const drawingRoomLightOnCommand = new LightOnCommand(newLight);
const drawingRoomLightOffCommand = new LightOffCommand(newLight);

const bedRoomLightOnCommand = new LightOnCommand(newLight2);
const bedRoomLightOffCommand = new LightOffCommand(newLight2);

remoteControl.setCommand(0, drawingRoomLightOnCommand, drawingRoomLightOffCommand);
remoteControl.setCommand(1, bedRoomLightOnCommand, bedRoomLightOffCommand);

remoteControl.pushOnButton(0);
remoteControl.pushOnButton(1);
remoteControl.pushOffButton(1);
remoteControl.pushOffButton(0);
