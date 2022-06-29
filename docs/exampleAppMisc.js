/*  g  */
new app().view({guild: "guildId"})
  	.then((val) => console.log(val))
		.catch((e) => console.log(e));
		
new app().appView({guild: "guildId"})
		.then((val) => console.log(val))
		.catch((e) => console.log(e));
		
new app().appDelete({guild: "guildId", command: "commandId"})
		.then((val) => console.log(val))
		.catch((e) => console.log(e));
