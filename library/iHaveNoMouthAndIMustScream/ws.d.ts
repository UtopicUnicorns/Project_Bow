import EventEmitter from "node:events";

export class VoiceWebSocket extends EventEmitter {
  public constructor(address: string);
  public ping: number;
  public sendPacket(packet: unknown): void;
  public destroy(): void;
}
