class botConstruct {
	presence(info, client) {
		this.input = {
			since: info.start,
			activities: [
				{
					name: info.name,
					type: info.type,
				},
			],
			status: info.status,
			afk: false,
		};

		this.presenceUpdate = {
			op: 3,
			d: this.input,
		};

		client.socket.send(JSON.stringify(this.presenceUpdate));
	}
}

module.exports = botConstruct;
