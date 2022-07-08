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
  }
  
  async play(info) {
    if (!this.player[info.guild]) return console.log('make a connection first');
      const player = lamp.players.get(info.guild);
        await this.pReady[info.guild].promise;
          const res = await lamp.load(`ytsearch:${info.command.query}`);
            await this.player[info.guild].play(res.tracks[0]);
  }
  
  async volume(info) {
    if (!this.player[info.guild]) return console.log('make a connection first');
      if (info.command >= 100) info.command = 100;
        if (info.command <= 1) info.command = 5;
          let volumeParse = parseFloat(info.command / 100).toFixed(1);
            await this.player[info.guild].setFilters({volume: volumeParse});
  }
  
  async pitch(info) {
    if (!this.player[info.guild]) return console.log('make a connection first');
      if(info.command === 'off') await this.player[info.guild].setFilters({timescale: {pitch: 1.0}});
        if(info.command === 'up') await this.player[info.guild].setFilters({timescale: {pitch: 2.0}});
          if(info.command === 'down') await this.player[info.guild].setFilters({timescale: {pitch: 0.5}});
  }
  
  async stop(info) {
    if (!this.player[info.guild]) return console.log('make a connection first');
        await this.player[info.guild].stop();
  }
  
  async pause(info) {
    if (!this.player[info.guild]) return console.log('make a connection first');
        await this.player[info.guild].pause();
  }
  
  async resume(info) {
    if (!this.player[info.guild]) return console.log('make a connection first');
        await this.player[info.guild].pause(false);
  }
  
  async destroy(info) {
    if (!this.player[info.guild]) return console.log('make a connection first');
        await this.player[info.guild].destroy();
          delete this.player[info.guild];
  }
  
  async connect(info) {   
    if (!this.player[info.guild]) this.player[info.guild] = lamp.players.get(info.guild);
      this.pReady[info.guild] = {status: 'waiting', promise: defer()};
        await this.player[info.guild].join(info.command);
          this.player[info.guild].once('playerUpdate', (d) => this.pReady[info.guild].promise.resolve());
    }

}

module.exports = voiceConstruct;
