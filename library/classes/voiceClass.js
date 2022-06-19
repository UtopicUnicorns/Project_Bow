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
    
class voiceConstruct {
  constructor() {
    this.voiceChannelData = {};
    this.resolve;
    this.reject;
    
    this.infoPromise = defer();
  }
  
  async leave(guild, incomingMessage) {
    const leaveNow = { 
      op: 4, 
			d: { 
				guild_id: guild, 
				channel_id: null, 
				self_mute: false, 
				self_deaf: false 
			}
		};
		
		incomingMessage.socket.send(JSON.stringify(leaveNow));
		delete this.voiceChannelData[guild];
  }
  
  async info(guildId) {
    if (!guildId) return this.voiceChannelData;
    if (this.voiceChannelData[guildId]) return this.voiceChannelData[guildId];
    if (!this.voiceChannelData[guildId]) return false;
  }
  
  async join(joinInfo, incomingMessage) {
    const joinNow = { 
      op: 4, 
			d: { 
				guild_id: joinInfo.guildId, 
				channel_id: joinInfo.channelId, 
				self_mute: false, 
				self_deaf: false 
			}
		};
		
		incomingMessage.socket.send(JSON.stringify(joinNow));

		mailMan.on('VOICE_STATE_UPDATE', async (incomingMessage) => {
      if (incomingMessage.message.d.user_id !== botId) return; 
      if (incomingMessage.message.d.channel_id == null) return;
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
  
  async vol(volume, guildId) {
    
  }
  
      /*pause() {
        this.paused = true;
        this.setSpeaking(0);
        if(this.current) {
            if(!this.current.pausedTimestamp) {
                this.current.pausedTimestamp = Date.now();
            }
            if(this.current.timeout) {
                clearTimeout(this.current.timeout);
                this.current.timeout = null;
            }
        }
    }*/
  
  async play(song, guildId) {
    await this.infoPromise;
    let checkStream = defer();
    let audioStream;
    let ffmpegAudio = new codecMaker.FFmpeg({ args: ["-analyzeduration", "0", "-loglevel", "0", "-f", "s16le", "-ar", "48000", "-ac", "2"] });
    if (song.toLowerCase().startsWith('http')) {
      audioStream = ytdl(`${song}`)
        .once('error', (e) => checkStream.reject(e))
        .once('progress', () =>{
          checkStream.resolve();
        })
        .pipe(ffmpegAudio)
        .pipe(new codecMaker.opus.Encoder({ rate: 48000, channels: 2, frameSize: 960 }));
    } else {
      audioStream = fs.createReadStream(`./deleteLater/${song}.mp3`)
        .pipe(new codecMaker.FFmpeg({ args: ["-analyzeduration", "0", "-loglevel", "0", "-f", "s16le", "-ar", "48000", "-ac", "2"] }))
        .pipe(new codecMaker.opus.Encoder({ rate: 48000, channels: 2, frameSize: 960 }));
      checkStream.resolve();
    }
      
    await checkStream;

    let packets = [];
    audioStream.on("data", function (d) { return packets.push(d); });
    audioStream.on("end", function () {  });

    const netWorking = new music.Networking(this.voiceChannelData[guildId]);
			if (netWorking.state.code !== music.NetworkingStatusCode.Ready) {
				await new Promise(r => netWorking.once(music.NetworkingStatusCode.Ready, r));
			}

			const opusPackets = packets;
			
			let next = Date.now();
			let preparedPacket;
			
			function audioCycleStep() {
					next += 20;
					if (preparedPacket)
							netWorking.sendEncryptedPacket(preparedPacket);
					const packet = opusPackets.shift();
					opusPackets.push(packet);
					console.log(ffmpegAudio);
					preparedPacket = netWorking.encryptAudioPacket(packet);
					setTimeout(audioCycleStep, next - Date.now());
			}
			setImmediate(audioCycleStep);
  }
}

module.exports = voiceConstruct;
