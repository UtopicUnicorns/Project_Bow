class voiceConstruct {
  constructor() {
    this.voiceChannelData = {};
    this.resolve;
    this.reject;
    function defer() {
      var res, rej;
    
      var promise = new Promise((resolve, reject) => {
        res = resolve;
        rej = reject;
      });
    
      promise.resolve = res;
      promise.reject = rej;
    
      return promise;
    }
    this.infoPromise = defer();
  }
  
  async join(joinInfo, incomingMessage) {
    //await this.infoPromise2;
    const joinNow = { op: 4, 
				d: { 
					guild_id: joinInfo.guildId, 
					channel_id: joinInfo.channelId, 
					self_mute: false, 
					self_deaf: false 
				}
			};
		
		incomingMessage.socket.send(JSON.stringify(joinNow));
		
		mailMan.on('VOICE_STATE_UPDATE', async (incomingMessage) => {
      this.voiceChannelData[incomingMessage.message.d.guild_id] = {};
      this.voiceChannelData[incomingMessage.message.d.guild_id]['guildId'] = incomingMessage.message.d.guild_id;
      this.voiceChannelData[incomingMessage.message.d.guild_id]['serverId'] = incomingMessage.message.d.guild_id;
      this.voiceChannelData[incomingMessage.message.d.guild_id]['channelId'] = incomingMessage.message.d.channel_id;
      this.voiceChannelData[incomingMessage.message.d.guild_id]['sessionId'] = incomingMessage.message.d.session_id;
      this.voiceChannelData[incomingMessage.message.d.guild_id]['userId'] = incomingMessage.message.d.user_id;
      
      mailMan.on('VOICE_SERVER_UPDATE', async (incomingMessage) => {
        this.voiceChannelData[incomingMessage.message.d.guild_id]['token'] = incomingMessage.message.d.token;
        this.voiceChannelData[incomingMessage.message.d.guild_id]['endpoint'] = incomingMessage.message.d.endpoint;

        this.infoPromise.resolve();
      });
    });
  }
  
  async play(song, guildId) {
    await this.infoPromise;

    const audioStream = fs.createReadStream(`./deleteLater/${song}.mp3`)
      .pipe(new codecMaker.FFmpeg({ args: ["-analyzeduration", "0", "-loglevel", "0", "-f", "s16le", "-ar", "48000", "-ac", "2"] }))
      .pipe(new codecMaker.opus.Encoder({ rate: 48000, channels: 2, frameSize: 960 }));
            
    const opusPacketsPromise = new Promise(function (resolve) {
      let packets = [];
      audioStream.on("data", function (d) { return packets.push(d); });
      audioStream.on("end", function () { return resolve(packets); });
    });
    
    const netWorking = new music.Networking(this.voiceChannelData[guildId]);
			if (netWorking.state.code !== music.NetworkingStatusCode.Ready) {
				await new Promise(r => netWorking.once(music.NetworkingStatusCode.Ready, r));
			}

			const opusPackets = await opusPacketsPromise;
			
			let next = Date.now();
			let preparedPacket;
			
			function audioCycleStep() {
					next += 20;
					if (preparedPacket)
							netWorking.sendEncryptedPacket(preparedPacket);
					const packet = opusPackets.shift();
					opusPackets.push(packet);
					preparedPacket = netWorking.encryptAudioPacket(packet);
					setTimeout(audioCycleStep, next - Date.now());
			}
			setImmediate(audioCycleStep);
  }
}

module.exports = voiceConstruct;
