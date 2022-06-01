class channelConstruct {
	invites(message) {
		return fly.send(JSON.stringify(constructedMessage), `/api/channels/${message.channel}/invites`, 'GET', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}

	invite(message) {
		return fly.send(JSON.stringify(constructedMessage), `/api/channels/${message.channel}/invites`, 'POST', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}

	permissions(message) {
		return fly.send(JSON.stringify(constructedMessage), `/api/channels/${message.channel}/messages`, 'POST', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}

	create(message) {
		return fly.send(JSON.stringify(constructedMessage), `/api/channels/${message.channel}/messages`, 'POST', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}

	delete(message) {
		return fly.send(JSON.stringify(constructedMessage), `/api/channels/${message.channel}`, 'DELETE', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}

	edit(message) {
		return fly.send(JSON.stringify(constructedMessage), `/api/channels/${message.channel}/permissions/${message.target_id}`, 'PUT', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });

		return fly.send(JSON.stringify(constructedMessage), `/api/channels/${message.channel}/permissions/${message.target_id}`, 'DELETE', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}

	modify(message) {
		let constructedMessage = {
			name: message.name,
			parent_id: message.parent_id,
			topic: message.topic,
			nsfw: message.nsfw,
			rate_limit_per_user: message.rate_limit_per_user,
			position: message.position,
		};

		if (!message.name) delete constructedMessage['name'];
		if (!message.parent_id) delete constructedMessage['parent_id'];
		if (!message.topic) delete constructedMessage['topic'];
		if (!message.nsfw) delete constructedMessage['nsfw'];
		if (!message.rate_limit_per_user) delete constructedMessage['rate_limit_per_user'];
		if (!message.position) delete constructedMessage['position'];

		return fly.send(JSON.stringify(constructedMessage), `/api/channels/${message.channel}`, 'PATCH', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}

	get(message) {
		return fly.send('', `/api/channels/${message}`, 'GET', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}

	messages(message) {
		let constructedMessage = {
			limit: message.limit,
			before: message.before,
			after: message.after,
			around: message.around,
		};

		if (!message.limit) delete constructedMessage['limit'];
		if (!message.before) delete constructedMessage['before'];
		if (!message.after) delete constructedMessage['after'];
		if (!message.around) delete constructedMessage['around'];

		return fly.send(JSON.stringify(constructedMessage), `/api/channels/${message.channel}/messages`, 'GET', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}

	message(message) {
		return fly.send('', `/api/channels/${message.channel}/messages/${message.id}`, 'GET', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}

	crosspost(message) {
		return fly.send(JSON.stringify(constructedMessage), `/api/channels/${message.channel}/messages/${message.id}/crosspost`, 'POST', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}
}

module.exports = channelConstruct;
