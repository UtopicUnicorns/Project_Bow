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
    this.player = {};
      this.pReady = {};
        this.playerDeploy = {};
    mailMan.on('playerEvent', (event) => { 
			if (event.type === 'TrackStartEvent') mailMan.emit('playerPlay', this.playerDeploy[event.guildId].playing);
        if (event.type === 'TrackEndEvent') {
          if(!this.playerDeploy[event.guildId]) return;
            this.playerDeploy[event.guildId].playing = null;
              if(this.playerDeploy[event.guildId].songs.length === 0) {
                this.player[event.guildId].stop();
                  delete this.playerDeploy[event.guildId];
              } else {
                let songNow = this.playerDeploy[event.guild].songs.shift();
                    this.playerDeploy[event.guild].playing = songNow;
                      this.player[event.guild].play(songNow.song);
              }
        }/*{
          if(!this.playerDeploy[event.guildId]) return;
            if (!this.player[event.guildId]) return;
              console.log(this.playerDeploy[event.guild]);
              this.playerDeploy[event.guild].playing = null;
                if(this.playerDeploy[event.guildId].songs.length === 0 && this.playerDeploy[info.guild].playing === null) {
                  this.player[event.guildId].destroy();
                    delete this.playerDeploy[event.guildId];
                      return delete this.player[event.guildId];
                } else {
                  let songNow = this.playerDeploy[event.guild].songs.shift();
                    this.playerDeploy[event.guild].playing = songNow;
                      this.player[event.guild].play(songNow.song);
                }
        };*/
		});
  }
  
  async queue(info) {
    if (!this.player[info.guild]) return 'make a connection first';
      return this.playerDeploy[info.guild];
  }
  
  async play(info) {
    if (!this.player[info.guild]) return 'make a connection first';
      const player = lamp.players.get(info.guild);
        await this.pReady[info.guild].promise;
          const res = await lamp.load(`ytsearch:${info.command.query}`);
            if(!await res.tracks[0]) return;
              this.playerDeploy[info.guild].songs.push({ song: res.tracks[0], requested: info.user.user });
                if(this.playerDeploy[info.guild].songs.length === 1 && this.playerDeploy[info.guild].playing === null) {
                  let songNow = this.playerDeploy[info.guild].songs.shift();
                    this.playerDeploy[info.guild].playing = songNow;
                      await this.player[info.guild].play(songNow.song);
                }
  }
  
  async volume(info) {
    if (!this.player[info.guild]) return 'make a connection first';
      if (info.command >= 100) info.command = 100;
        if (info.command <= 1) info.command = 5;
          let volumeParse = parseFloat(info.command / 100).toFixed(1);
            await this.player[info.guild].setFilters({volume: volumeParse});
  }
  
  async pitch(info) {
    if (!this.player[info.guild]) return 'make a connection first';
      if(info.command === 'off') await this.player[info.guild].setFilters({timescale: {pitch: 1.0}});
        if(info.command === 'up') await this.player[info.guild].setFilters({timescale: {pitch: 2.0}});
          if(info.command === 'down') await this.player[info.guild].setFilters({timescale: {pitch: 0.5}});
  }
  
  skip(info) {
    if (!this.player[info.guild]) return 'make a connection first';
      this.player[info.guild].seek(this.playerDeploy[info.guild].playing.song.info.length);
  }
  
  stop(info) {
    if (!this.player[info.guild]) return 'make a connection first';
         this.player[info.guild].stop();
           this.player[info.guild].leave();
             this.player[info.guild].destroy();
               delete this.playerDeploy[info.guild];
                delete this.player[info.guild];
  }
  
  async pause(info) {
    if (!this.player[info.guild]) return 'make a connection first';
        await this.player[info.guild].pause();
  }
  
  async resume(info) {
    if (!this.player[info.guild]) return 'make a connection first';
        await this.player[info.guild].pause(false);
  }
  
  async destroy(info) {
    if (!this.player[info.guild]) return 'make a connection first';
        await this.player[info.guild].destroy();
          delete this.player[info.guild];
  }
  
  async connect(info) {   
    if (!this.player[info.guild]) this.player[info.guild] = lamp.players.get(info.guild);
      if(!this.playerDeploy[info.guild]) this.playerDeploy[info.guild] = { songs: [], state: null, playing: null , settings: { vol: 50, pitch: 'off' }, channel: info.command };
        this.pReady[info.guild] = {status: 'waiting', promise: defer()};
          await this.player[info.guild].join(info.command);
            this.player[info.guild].once('playerUpdate', (d) => this.pReady[info.guild].promise.resolve());
    }
}

module.exports = voiceConstruct;
