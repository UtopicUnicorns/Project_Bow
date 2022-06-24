class appConstruct {
	constructor() {
		this.target = 'commands';
		this.command = [];
		this.subCommand = [];
		this.data = {
			default_member_permissions: 0,
			options: []
		};
	}
	
	get appCreate() {
		if(this.command[0]) {
			if(this.subCommand[0]) this.command[0]['options'].push(this.subCommand[0]);
			this.data['options'].push(this.command[0]);
		}
		const util = require('util')
		return console.log(util.inspect(this.data, false, null, true /* enable colors */)); //console.log(this.data);
		//return fly.send(JSON.stringify(this.data), `/api/applications/${appId}/${this.target}`, 'POST', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}
	
	appGuild(string) {
		if(!string) return this;
		this.target = `guilds/${string}/commands`;
		return this;
	}
	
	appName(string) {
		if(!string) return this;
		this.data['name'] = string;
		return this;
	}
	
	appDescription(string) {
		if(!string) return this;
		this.data['description'] = string;
		return this;
	}
	
	appType(integer) {
		if(!integer) return this;
		this.data['type'] = integer;
		return this;
	}
	
	commandName(string) {
		if(!string) return this;
		if (this.command[0]) {
			this.data['options'].push(this.command[0]);
			this.command.length = 0;
		}
		let newCommand = {name: string};
		if(!this.command[0]) this.command.push(newCommand);
		return this;
	}
	
	commandDescription(string) {
		if(!string) return this;
		if(!this.command[0]) return this;
		this.command[0]['description'] = string;
		return this;
	}
	
	commandType(integer) {
		if(!this.command[0]) return this;
		if(!integer) return this;
		this.command[0]['type'] = integer;
		return this;
	}
	
	commandRequired(boolean) {
		if(!this.command[0]) return this;
		if(!boolean) this.command[0]['required'] = false;
		if(boolean) this.command[0]['required'] = true;
		return this;
	}
	
	commandChoices(name, value) {
		if(!this.command[0]) return this;
		if(!name) return this;
		if(!value) return this;
		if(this.command[0]['options']) return this;
		if(!this.command[0]['choices']) this.command[0]['choices'] = [];
		this.command[0]['choices'].push({name: name, value: value});
		return this;
	}
	
	subCommandName(string) {
		if(!string) return this;
		if(!this.command[0]) return this;
		if(this.command[0]['choices']) return this;
		this.command[0]['options'] = [];
		if (this.subCommand[0]) {
			this.command[0]['options'].push(this.subCommand[0]);
			this.subCommand.length = 0;
		}
		let newCommand = {name: string};
		if(!this.subCommand[0]) this.subCommand.push(newCommand);
		return this;
	}
	
	subCommandDescription(string) {
		if(!string) return this;
		if(!this.command[0]) return this;
		if(this.command[0]['choices']) return this;
		this.subCommand[0]['description'] = string;
		return this;
	}
	
	subCommandType(integer) {
		if(!this.command[0]) return this;
		if(!integer) return this;
		if(this.command[0]['choices']) return this;
		this.subCommand[0]['type'] = integer;
		return this;
	}
	
	subCommandRequired(boolean) {
		if(!this.command[0]) return this;
		if(this.command[0]['choices']) return this;
		if(!boolean) this.subCommand[0]['required'] = false;
		if(boolean) this.subCommand[0]['required'] = true;
		return this;
	}
	
	subCommandChoices(name, value) {
		if(!this.command[0]) return this;
		if(!name) return this;
		if(!value) return this;
		if(this.command[0]['choices']) return this;
		if(this.subCommand[0]['options']) return this;
		if(!this.subCommand[0]['choices']) this.subCommand[0]['choices'] = [];
		this.subCommand[0]['choices'].push({name: name, value: value});
		return this;
	}
	
	appDelete(message) {
		if (message && message.guild) return fly.send('', `/api/applications/${appId}/guilds/${message.guild}/commands/${message.command}`, 'DELETE', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });

		return fly.send('', `/api/applications/${appId}/commands/${message.command}`, 'DELETE', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}
	
	appView(message) {
		if (message && message.guild && message.command) return fly.send('', `/api/applications/${appId}/guilds/${message.guild}/commands/${message.command}`, 'GET', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });

		if (message && message.guild) return fly.send('', `/api/applications/${appId}/guilds/${message.guild}/commands`, 'GET', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });

		if (message && message.command) return fly.send('', `/api/applications/${appId}/commands/${message.command}`, 'GET', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });

		return fly.send('', `/api/applications/${appId}/commands`, 'GET', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}
}

module.exports = appConstruct;
