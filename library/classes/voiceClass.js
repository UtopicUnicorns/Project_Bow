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
  } // https://github.com/lavalibs/lavalink.js
  
  async play(info) {
    if (!this.player[info.guild]) return console.log('make a connection first');
    const player = lamp.players.get(info.guild);
    await this.pReady[info.guild].promise;
      const res = await lamp.load(`ytsearch:${info.q}`);
        await player.play(res.tracks[0]);
  }
  
  async stop(info) {
    if (!this.player[info.guild]) return console.log('make a connection first');
      const player = lamp.players.get(info.guild);
        await player.stop();
  }
  
  async destroy(info) {
    if (!this.player[info.guild]) return console.log('make a connection first');
      const player = lamp.players.get(info.guild);
        await player.destroy();
          delete this.player[info.guild];
  }
  
  async connect(info) {    
    if (!this.player[info.guild]) this.player[info.guild] = lamp.players.get(info.guild);
      this.pReady[info.guild] = {status: 'waiting', promise: defer()};
        await this.player[info.guild].join(info.id);
          this.player[info.guild].once('playerUpdate', (d) => this.pReady[info.guild].promise.resolve());
    }

}

module.exports = voiceConstruct;
