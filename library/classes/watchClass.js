class watchConstruct {
  constructor() {
    this.eyes = {};
  }
  
  me(info) {
    this.eyes[info.name] = {
      name: info.name,
      file: info.file,
    };
  }
  
	done(info) {
    console.log(info);
  //  for (const path in require.cache) if (path.endsWith('.js'))  delete require.cache[path];
	}
}

module.exports = watchConstruct;
