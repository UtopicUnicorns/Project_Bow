class voiceConstruct {
  constructor() {
    this.voidShouting;
    this.avoidShouting;
    this.voidWhispering;
    this.avoidWhispering;
    
    this.beatPing = { op: 3, d: Math.floor(Math.random() * Math.pow(10, 20)) };
    
    mailMan.on('voiceMessage', async (info) => {
      console.log(this.avoidShouting);
    });
    mailMan.on('voiceBeat', async () => {
      this.voidShouting.send(JSON.stringify(this.beatPing));
      console.log(this.avoidWhispering);
    });
    
    mailMan.on('voiceMessage2', async (info) => this.avoidWhispering = info);
    
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
      
      if (incMsg.op == 2) mailMan.emit('voiceMessage2', incMsg.d);
			if (incMsg.op == 8) mailMan.emit('voiceMessage8', incMsg.d.heartbeat_interval);
		});
		
    return this;
  }
}

module.exports = voiceConstruct;
