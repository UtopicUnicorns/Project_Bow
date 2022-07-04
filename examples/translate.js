module.exports = {
  name: 'translate',
    description: 'translate message',
      async execute(data) {
        return message
          .interaction({ type: 4, content: 'translate', flags: 64 }, data)
            .catch((err) => console.log(err));
  },
};
