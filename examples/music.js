module.exports = {
  name: 'music',
    description: 'play music',
      async execute(data) {
      /*  voice
            .play('https://www.youtube.com/watch?v=dQw4w9WgXcQ', data.guild_id)
              .catch((e) => console.log(e));  */
            
      return message
        .interaction({ type: 4, content: 'music', flags: 64 }, data)
          .catch((err) => console.log(err));
  },
};
