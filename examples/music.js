module.exports = {
  name: 'music',
    description: 'play music',
      async execute(data) {
        const dataParse = data.data.options[0];
          switch(dataParse.name) {
            case 'connect':
              await voice.connect({ id: dataParse.options[0].value, guild: data.guild_id });
                break;
              case 'play':
                //dataParse.options[0].value PLATFORM
                voice.play({q: dataParse.options[1].value, guild: data.guild_id});
                  break;
                case 'volume':
                  //
                    break;
                  case 'pause':
                    //
                      break;
                    case 'resume':
                      //
                        break;
                      case 'stop':
                        //
                          break;
          }
            return message
              .interaction({ type: 4, content: 'music', flags: 64 }, data)
                .catch((err) => console.log(err));
  },
};
