import EventEmitter from "node:events";

export interface SocketConfig {
  ip: string;
  port: number;
}

export class VoiceUDPSocket extends EventEmitter {
  public constructor(remote: SocketConfig);
  public ping: number;
  public readonly remote: SocketConfig;
  public send(buffer: Buffer): void;
  public destroy(): void;
  private performIPDiscovery(ssrc: number): Promise<SocketConfig>;
}
