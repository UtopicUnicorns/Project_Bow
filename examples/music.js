module.exports = {
  name: 'music',
  description: 'play music',
  async execute(data) {
    console.log(data);
    return this;
  },
};
