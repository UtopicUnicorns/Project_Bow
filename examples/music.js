module.exports = {
  name: 'music',
    description: 'play music',
      async execute(data) {
        async function respond(words) {
          return message
            .interaction({ type: 4, content: `${words}`, flags: 64 }, data)
              .catch((err) => console.log(err));
        }
          async function voiceManipulator(info) {
            switch(info.action) {
              case 'actions':
                if (info.command === 'resume') voice.resume(info);
                  if (info.command === 'pause') voice.pause(info);
                    if (info.command === 'stop') voice.stop(info);
                      if (info.command === 'skip') voice.skip(info);
                        if (info.command === 'queue') voice.queue(info)
                          .then((q) => {
                            //message.send({content: 'queue', channel: '808352303102033942'});
                              console.log(q);
                          });
                            respond(`Music player action: **${info.command}**`);
                              break;
                case 'volume':
                  voice.volume(info);
                    respond(`Setting volume level to **${info.command}**`);
                break;
                  case 'play':
                    voice.play(info);
                      respond(`Trying to search and play **${info.command.query}**`);
                  break;
                    case 'connect':
                      voice.connect(info);
                        respond(`Trying to connect to <#${info.command}>`);
                    break;
                      case 'pitch':
                        voice.pitch(info);
                          respond(`Setting pitch to **${info.command}**!`);
                            break;
            }
          }
            const dataParse = data.data.options[0];
              let guildId = data.guild_id;
                switch (dataParse.name) {
                  case 'control':
                    if (dataParse.options[0].name === 'actions') {
                      let actionsName = dataParse.options[0].options[0].value;
                        voiceManipulator({
                          action: 'actions', 
                            command: actionsName, 
                              channel: data.channel_id, 
                                guild: data.guild_id,
                                  user: data.member
                        });
                    }
                    if (dataParse.options[0].name === 'volume') {
                      let volumeLevel = dataParse.options[0].options[0].value;
                        voiceManipulator({
                            action: 'volume', 
                              command: volumeLevel, 
                                channel: data.channel_id, 
                                  guild: data.guild_id,
                                    user: data.member
                          });
                    }
                    if (dataParse.options[0].name === 'pitch') {
                      let pitchName = dataParse.options[0].options[0].value;
                        voiceManipulator({
                          action: 'pitch', 
                            command: pitchName, 
                              channel: data.channel_id, 
                                guild: data.guild_id,
                                  user: data.member
                        });
                    }
                  break;
                    case 'connect':
                      let connectChannel = dataParse.options[0].value;
                        voiceManipulator({
                              action: 'connect', 
                                command: connectChannel, 
                                  channel: data.channel_id, 
                                    guild: data.guild_id,
                                      user: data.member
                            });
                    break;
                      case 'play':
                          let playName = dataParse.options[0].value;
                            voiceManipulator({
                                action: 'play', 
                                  command: { query: playName }, 
                                    channel: data.channel_id, 
                                      guild: data.guild_id,
                                        user: data.member
                              });
                      break;
                }
  },
};
