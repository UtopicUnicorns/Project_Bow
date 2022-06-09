class voiceConstruct {
  constructor() {
    this.voidShouting;
    this.avoidShouting;
    this.voidWhispering;
    this.avoidWhispering;
    this.doneShouting;
    
    this.beatPing = { op: 3, d: Math.floor(Math.random() * Math.pow(10, 20)) };
    
    mailMan.on('voiceMessage', async (info) => {
      console.log(this.avoidShouting);
    });
    mailMan.on('voiceBeat', async () => {
      this.voidShouting.send(JSON.stringify(this.beatPing));
    });
    mailMan.on('voiceData', async (data) => {
      this.voidShouting.send(data);
    });
    
    mailMan.on('voiceMessage4', async (info) => {
      this.doneShouting = info;
      
      let establishConnection = {
        op: 5,
        d: {
          speaking: 5,
          delay: 0,
          ssrc: 1
        }
      };
      
      this.voidShouting.send(JSON.stringify(establishConnection));
      const pcmSource = await fs.readFileSync('output.pcm');
      
      let samplingRate = 48000;
      let frameDuration = 20;
      let channels = 2;
      // Optimize encoding for audio. Available applications are VOIP, AUDIO, and RESTRICTED_LOWDELAY
      let encoder = new OpusScript(samplingRate, channels, OpusScript.Application.AUDIO);
      
      let frameSize = samplingRate * frameDuration / 1000;
      
      console.log(pcmSource.byteLength);
    
      let encodedPacket = encoder.encode(pcmSource, frameSize);
      
      //let decodedPacket = encoder.decode(encodedPacket);

      //// Delete the encoder when finished with it (Emscripten does not automatically call C++ object destructors)
      //encoder.delete();
      mailMan.emit('voiceData', encodedPacket);

    });
    
    mailMan.on('voiceMessage2', async (info) => {
      this.avoidWhispering = info;
      
      let finalVoice = {
          op: 1,
          d: {
              protocol: "udp",
              data: {
                  address: info.ip,
                  port: info.port,
                  mode: "xsalsa20_poly1305_lite"
              }
          }
      };
      
      this.voidShouting.send(JSON.stringify(finalVoice));
    });
    
    mailMan.on('voiceMessage8', async (info) => {
      let op8 = {
        op: 0,
        d: {
          server_id: this.avoidShouting.guild_id,
          user_id: "654361253413781537",
          session_id: this.voidWhispering.session_id,
          token: this.avoidShouting.token
        }
      };

      this.voidShouting.send(JSON.stringify(op8));
      
      setInterval(function () {
        mailMan.emit('voiceBeat');
			}, info);
    });
  }
  
  shout(voiceInfo, voiceClient) {
    this.voidShouting = new ws.WebSocket(`wss://${voiceInfo.endpoint}?v=4`);
    this.avoidShouting = voiceInfo;
    this.voidWhispering = voiceClient;
    this.silence();
    
    return this;
  }
  
  silence() {
    this.voidShouting.on('message', async function incoming(message) {
			const incMsg = JSON.parse(message);
			mailMan.emit('raw', incMsg);
      console.log(incMsg);
      if (incMsg.op == 4) mailMan.emit('voiceMessage4', incMsg.d);
      if (incMsg.op == 2) mailMan.emit('voiceMessage2', incMsg.d);
			if (incMsg.op == 8) mailMan.emit('voiceMessage8', incMsg.d.heartbeat_interval);
		});
		
    return this;
  }
}

module.exports = voiceConstruct;
