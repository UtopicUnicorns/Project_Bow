class heartConstruct {
	constructor() {
		this.puppet;

		this.client_struct = {
			client: null,
			beat_interval: 5000,
			beating_heart: null,
			seq_num: null,
			ses_num: null,
		};
		
		let intents_num = 0;

		if (intent.GUILDS) intents_num = intents_num + (1 << 0);
		if (intent.GUILD_MEMBERS) intents_num = intents_num + (1 << 1); 
		if (intent.GUILD_BANS) intents_num = intents_num + (1 << 2);
		if (intent.GUILD_EMOJIS_AND_STICKERS) intents_num = intents_num + (1 << 3); 
		if (intent.GUILD_INTEGRATIONS) intents_num = intents_num + (1 << 4);
		if (intent.GUILD_WEBHOOKS) intents_num = intents_num + (1 << 5);
		if (intent.GUILD_INVITES) intents_num = intents_num + (1 << 6);
		if (intent.GUILD_VOICE_STATES) intents_num = intents_num + (1 << 7);
		if (intent.GUILD_PRESENCES) intents_num = intents_num + (1 << 8);
		if (intent.GUILD_MESSAGES) intents_num = intents_num + (1 << 9);
		if (intent.GUILD_MESSAGE_REACTIONS) intents_num = intents_num + (1 << 10); 
		if (intent.GUILD_MESSAGE_TYPING) intents_num = intents_num + (1 << 11);
		if (intent.DIRECT_MESSAGES) intents_num = intents_num +  (1 << 12);
		if (intent.DIRECT_MESSAGE_REACTIONS) intents_num = intents_num + (1 << 13);
		if (intent.DIRECT_MESSAGE_TYPING) intents_num = intents_num + (1 << 14);
		if (intent.MESSAGE_CONTENT) intents_num = intents_num + (1 << 15);
		if (intent.GUILD_SCHEDULED_EVENTS) intents_num = intents_num + (1 << 16); 
		
		this.identify_info = {
			op: 2,
			d: {
				token: token,
				intents: intents_num,
				properties: {
					$os: process.platform,
					$browser: 'DJBSF',
					$device: 'DJBSF',
				},
			},
		};

		this.guilds = {};
		this.users = {};

		mailMan.on('socket_beat', async () => {
			this.client_struct.beating_heart++;
			this.puppet.send(JSON.stringify({ op: 1, d: this.client_struct.seq_num }));
		});

		mailMan.on('socket_ready', async (info) => {
			this.client_struct.ses_num = info.d.session_id;
			this.client_struct.client = info.d;
			mailMan.emit('socket_pulse', true);
		});

		mailMan.on('socket_message', async (message) => {
			this.client_struct.seq_num = message.s;
			mailMan.emit(message.t, { message: message, client: this.client_struct, socket: this.puppet });
		});

		mailMan.on('socket_10', async (info) => {
			if (this.client_struct.ses_num && this.client_struct.seq_num) {
				this.client_resume = {
					op: 6,
					d: {
						token: token,
						session_id: this.client_struct.ses_num,
						seq: this.client_struct.seq_num,
					},
				};

				this.puppet.send(JSON.stringify(this.client_resume));
			} else {
				mailMan.emit('socket_identify');
				mailMan.emit('socket_interval', info.heartbeat_interval);
			}
		});

		mailMan.on('socket_resume', async (info) => mailMan.emit('socket_pulse', true));
		mailMan.on('socket_interval', async (info) => (this.client_struct.beat_interval = info));
		mailMan.on('socket_close', async (code) => this.restart());
		mailMan.on('socket_pulse', async (order) => this.pulse(order));
		mailMan.on('socket_identify', async () => this.puppet.send(JSON.stringify(this.identify_info)));
		mailMan.on('socket_ping', async () => this.puppet.send(JSON.stringify({ op: 1 })));
		mailMan.on('socket_error', async (error) => console.log(error));
		mailMan.on('socket_gmu', async (member) => this.users[member.user.id] = member);
		mailMan.on('socket_gc', async (guild) => this.guilds[guild.id] = guild);
	}

	guild(id) {
		if (!id) return "Guild needs to have an ID or ALL tag.";
		if (id.toLowerCase() == "all") return this.guilds;
		if (this.guilds[id]) return this.guilds[id];
		
		return 'Something has gone wrong with getting guild information, did you provide a proper ID, or is the guild not cached/linked to the bot?';
	}

	user(id) {
		if (!id) return "User needs to have an ID or ALL tag.";
		if (id.toLowerCase() == "all") return this.users;
		if (this.users[id]) return this.users[id];
		
		return 'Something has gone wrong with getting user information, did you provide a proper ID, or is the user not cached/linked to the bot?';
	}

	run() {
		this.puppet = new ws.WebSocket('wss://gateway.discord.gg/?v=10&encoding=json');
		this.socket();

		return this;
	}

	restart() {
		this.puppet = '';
		setTimeout(() => this.run(), 5000);

		return this;
	}

	pulse(order) {
		if (order) {
			this.beat = setInterval(function () {
				mailMan.emit('socket_beat');
			}, this.client_struct.beat_interval);
		} else clearInterval(this.beat);

		return this;
	}

	socket() {
		this.puppet.on('message', async function incoming(message) {
			try {
				const msg = JSON.parse(message);

				if (msg.op == 10 && msg.d) mailMan.emit('socket_10', msg.d);
				if (msg.op == 1) mailMan.emit('socket_ping');
				if (msg.t == 'GUILD_CREATE') mailMan.emit('socket_gc', msg.d);
				if (msg.t == 'GUILD_MEMBER_UPDATE') mailMan.emit('socket_gmu', msg.d);
				if (msg.t == 'READY') mailMan.emit('socket_ready', msg);
				if (msg.t == 'RESUMED') mailMan.emit('socket_resume', msg);

				mailMan.emit('socket_message', msg);
			} catch (err) {
				mailMan.emit('socket_error', error);
			}
		});

		this.puppet.on('error', (error) => mailMan.emit('socket_error', error));
		this.puppet.on('close', (code) => {
			mailMan.emit('socket_close', code);
			mailMan.emit('socket_pulse', false);
		});

		return this;
	}
}

module.exports = heartConstruct;
