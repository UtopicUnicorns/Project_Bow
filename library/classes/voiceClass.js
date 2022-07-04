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
      incomingMessage.client.socket.send(JSON.stringify(leaveNow));
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
      incomingMessage.client.socket.send(JSON.stringify(joinNow));
        mailMan.on('VOICE_STATE_UPDATE', async (incomingMessage) => {
          if (incomingMessage.user_id !== botId) return; 
            if (incomingMessage.channel_id == null) return;
              this.voiceChannelData[incomingMessage.guild_id] = {};
                this.voiceChannelData[incomingMessage.guild_id]['guildId'] = incomingMessage.guild_id;
                  this.voiceChannelData[incomingMessage.guild_id]['serverId'] = incomingMessage.guild_id;
                    this.voiceChannelData[incomingMessage.guild_id]['channelId'] = incomingMessage.channel_id;
                      this.voiceChannelData[incomingMessage.guild_id]['sessionId'] = incomingMessage.session_id;
                        this.voiceChannelData[incomingMessage.guild_id]['userId'] = incomingMessage.user_id;    
                          mailMan.on('VOICE_SERVER_UPDATE', async (incomingMessage) => {
                            this.voiceChannelData[incomingMessage.guild_id]['token'] = incomingMessage.token;
                              this.voiceChannelData[incomingMessage.guild_id]['endpoint'] = incomingMessage.endpoint;
                                this.voiceChannelData[incomingMessage.guild_id]['volume'] = 0.9;    
                                  this.infoPromise.resolve();
                          });
        });
  }
  
  async vol(volume, guildId) {
    this.voiceChannelData[guildId]['volume'] = volume;
      mailMan.emit('volChange');
  }
  
  async play(song, guildId) {
    await this.infoPromise;
      let checkStream = defer();
        let audioStream;
          let ffmpegAudio = new codecMaker.FFmpeg({ args: ["-analyzeduration", "0", "-loglevel", "0", "-f", "s16le", "-ar", "48000", "-ac", "2"] });
            let streamVolume = new codecMaker.VolumeTransformer({ type: 's16le', volume: this.voiceChannelData[guildId]['volume'] });
              let encodeStream = new codecMaker.opus.Encoder({ rate: 48000, channels: 2, frameSize: 960 });
                if (song.toLowerCase().startsWith('http')) {
                  audioStream = ytdl(`${song}`)
                    .once('error', (e) => checkStream.reject(e))
                      .once('progress', () => checkStream.resolve())
                        .pipe(ffmpegAudio) //toPCM
                          .pipe(streamVolume) //volChange
                            .pipe(encodeStream); //encodeOpus
                } else {
                  audioStream = fs.createReadStream(`./deleteLater/${song}.mp3`)
                    .pipe(ffmpegAudio)
                      .pipe(streamVolume)
                        .pipe(encodeStream);
                          checkStream.resolve();
                } 
                  await checkStream;
                    let packets = [];
                      audioStream.on("data", function (d) { return packets.push(d); });
                        const netWorking = new music.Networking(this.voiceChannelData[guildId]);
                          if (netWorking.state.code !== music.NetworkingStatusCode.Ready) await new Promise(r => netWorking.once(music.NetworkingStatusCode.Ready, r));
                            const opusPackets = packets;
                              let next = Date.now();
                                let preparedPacket;
                                  let audioLevelGet = this.voiceChannelData[guildId]['volume'];
                                    mailMan.on('volChange', async() => audioLevelGet = this.voiceChannelData[guildId]['volume'] );
                                      function audioCycleStep() {
                                        next += 20;
                                          if (preparedPacket) netWorking.sendEncryptedPacket(preparedPacket);
                                            const packet = opusPackets.shift();
                                              opusPackets.push(packet);
                                                preparedPacket = netWorking.encryptAudioPacket(packet);
                                                  setTimeout(audioCycleStep, next - Date.now());	
                                      }
   setImmediate(audioCycleStep);
  }
}

module.exports = voiceConstruct;
