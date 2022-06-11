import { VoiceWebSocket } from "./ws";
import { VoiceUDPSocket } from "./udp";
import EventEmitter from "node:events";

export enum NetworkingStatusCode {
  OpeningWs = "OPENING_WS",
  Identifying = "IDENTIFYING",
  UdpHandshaking = "UDP_HANDSHAKING",
  SelectingProtocol = "SELECTING_PROTOCOL",
  Ready = "READY",
  Resuming = "RESUMING",
  Closed = "CLOSED"
}

export enum VoiceOpcode {
  Identify = 0,
  SelectProtocol = 1,
  Ready = 2,
  Heartbeat = 3,
  SessionDescription = 4,
  Speaking = 5,
  HeartbeatAck = 6,
  Resume = 7,
  Hello = 8,
  Resumed = 9,
  ClientConnect = 12,
  ClientDisconnect = 13,
  Codec = 14
}

export interface ConnectionOptions {
  serverId: string;
  userId: string;
  sessionId: string;
  token: string;
  endpoint: string;
}

export interface ConnectionData {
  ssrc: number;
  encryptionMode: string;
  secretKey: Uint8Array;
  sequence: number;
  timestamp: number;
  nonce: number;
  nonceBuffer: Buffer;
  speaking: boolean;
}

export interface NetworkingOpeningWsState {
  code: NetworkingStatusCode.OpeningWs;
  ws: VoiceWebSocket;
}

export interface NetworkingIdentifyingState {
  code: NetworkingStatusCode.Identifying;
  ws: VoiceWebSocket;
}

export interface NetworkingUdpHandshakingState {
  code: NetworkingStatusCode.UdpHandshaking;
  ws: VoiceWebSocket;
  udp: VoiceUDPSocket;
  connectionData: Pick<ConnectionData, "ssrc">;
}

export interface NetworkingSelectingProtocolState {
  code: NetworkingStatusCode.SelectingProtocol;
  ws: VoiceWebSocket;
  udp: VoiceUDPSocket;
  connectionData: Pick<ConnectionData, "ssrc">;
}

export interface NetworkingReadyState {
  code: NetworkingStatusCode.Ready;
  ws: VoiceWebSocket;
  udp: VoiceUDPSocket;
  connectionData: ConnectionData;
}

export interface NetworkingResumingState {
  code: NetworkingStatusCode.Resuming;
  ws: VoiceWebSocket;
  udp: VoiceUDPSocket;
  connectionData: ConnectionData;
}

export interface NetworkingClosedState {
  code: NetworkingStatusCode.Closed;
}

export type NetworkingState =
  | NetworkingOpeningWsState
  | NetworkingIdentifyingState
  | NetworkingUdpHandshakingState
  | NetworkingSelectingProtocolState
  | NetworkingReadyState
  | NetworkingResumingState
  | NetworkingClosedState;

export class Networking extends EventEmitter {
  public constructor(options: ConnectionOptions);
  public readonly connectionOptions: ConnectionOptions;
  public get state(): NetworkingState;
  public destroy(): void;
  public encryptAudioPacket(opusPacket: Buffer): Buffer | undefined;
  public sendEncryptedPacket(buffer: Buffer): boolean;
  public setSpeaking(speaking: boolean): void;
  public decryptAudioPacket(buffer: Buffer): Buffer | undefined;
}
