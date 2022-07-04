class appConstruct {
	constructor() {
		this.target = 'commands';
			this.command = [];
				this.data = {
					default_member_permissions: 0,
						options: []
				};
	}
	
	get appCreate() {
		if(this.command[0]) this.data['options'].push(this.command[0]);
			this.command.length = 0;
				return fly.send(JSON.stringify(this.data), `/api/applications/${appId}/${this.target}`, 'POST', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
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
				if(!this.command[0]) this.command.push({name: string});
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
					if(this.command[0]['options'] && this.command[0]['options'][0]) this.command[0]['options'].push({name: string});
						if(!this.command[0]['options']) this.command[0]['options'] = [{name: string}];
							return this;
	}
	
	subCommandDescription(string) {
		if(!string) return this;
			if(!this.command[0]) return this;
				if(this.command[0]['choices']) return this;
					if(this.command[0]['options'] && this.command[0]['options'][0]) this.command[0]['options'][this.command[0]['options'].length-1]['description'] = string;
						return this;
	}
	
	subCommandType(integer) {
		if(!integer) return this;
			if(!this.command[0]) return this;
				if(this.command[0]['choices']) return this;
					if(this.command[0]['options'] && this.command[0]['options'][0]) this.command[0]['options'][this.command[0]['options'].length-1]['type'] = integer;
						return this;
	}
	
	subCommandRequired(boolean) {
		if(!this.command[0]) return this;
			if(this.command[0]['choices']) return this;
				if(this.command[0]['options'] && this.command[0]['options'][0]) this.command[0]['options'][this.command[0]['options'].length-1]['required'] = boolean;
					return this;
	}
	
	subCommandChoices(name, value) {
		if(!name) return this;
			if(!value) return this;
				if(!this.command[0]) return this;
					if(this.command[0]['choices']) return this;
						if(this.command[0]['options'][this.command[0]['options'].length-1]['options']) return this;
							if(this.command[0]['options'][this.command[0]['options'].length-1]['choices']) this.command[0]['options'][this.command[0]['options'].length-1]['choices'].push({name: name, value: value});
								if(!this.command[0]['options'][this.command[0]['options'].length-1]['choices']) this.command[0]['options'][this.command[0]['options'].length-1]['choices'] = [{name: name, value: value}];
									return this;
	}
	
	deepCommandName(string) {
		if(!string) return this;
			if(!this.command[0]) return this;
				if(this.command[0]['choices']) return this;
					if(this.command[0]['options'][this.command[0]['options'].length-1]['choices']) return this;
						if(this.command[0]['options'][this.command[0]['options'].length-1]['options']) this.command[0]['options'][this.command[0]['options'].length-1]['options'].push({name: string});
							if(!this.command[0]['options'][this.command[0]['options'].length-1]['options']) this.command[0]['options'][this.command[0]['options'].length-1]['options'] = [{name: string}];
								return this;
	}
	
	deepCommandDescription(string) {
		if(!string) return this;
			if(!this.command[0]) return this;
				if(this.command[0]['choices']) return this;
					if(this.command[0]['options'][this.command[0]['options'].length-1]['choices']) return this;
						this.command[0]['options'][this.command[0]['options'].length-1]['options'][this.command[0]['options'][this.command[0]['options'].length-1]['options'].length-1]['description'] = string;
							return this;
	}
	
	deepCommandType(integer) {
		if(!integer) return this;
			if(!this.command[0]) return this;
				if(this.command[0]['choices']) return this;
					if(this.command[0]['options'][this.command[0]['options'].length-1]['choices']) return this;
						this.command[0]['options'][this.command[0]['options'].length-1]['options'][this.command[0]['options'][this.command[0]['options'].length-1]['options'].length-1]['type'] = integer;
							return this;
	}
	
	deepCommandRequired(boolean) {
		if(!this.command[0]) return this;
			if(this.command[0]['choices']) return this;
				if(this.command[0]['options'][this.command[0]['options'].length-1]['choices']) return this;
					this.command[0]['options'][this.command[0]['options'].length-1]['options'][this.command[0]['options'][this.command[0]['options'].length-1]['options'].length-1]['required'] = boolean;
						return this;
	}
	
	deepCommandChoices(name, value) {
		if(!name) return this;
			if(!value) return this;
				if(!this.command[0]) return this;
					if(this.command[0]['choices']) return this;
						if(this.command[0]['options'][this.command[0]['options'].length-1]['choices']) return this;
							if(this.command[0]['options'][this.command[0]['options'].length-1]['options'][this.command[0]['options'][this.command[0]['options'].length-1]['options'].length-1]['choices']) this.command[0]['options'][this.command[0]['options'].length-1]['options'][this.command[0]['options'][this.command[0]['options'].length-1]['options'].length-1]['choices'].push({name: name, value: value});
								if(!this.command[0]['options'][this.command[0]['options'].length-1]['options'][this.command[0]['options'][this.command[0]['options'].length-1]['options'].length-1]['choices']) this.command[0]['options'][this.command[0]['options'].length-1]['options'][this.command[0]['options'][this.command[0]['options'].length-1]['options'].length-1]['choices'] = [{name: name, value: value}];
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
