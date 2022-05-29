class thread_construct {
	join(channel) {
    return fly.send('', `/api/channels/${channel}/thread-members/@me`, 'PUT', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}

	add_member(user, channel) {
		return fly.send('', `/api/channels/${channel}/thread-members/${user}`, 'PUT', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}
	
	leave(channel) {
		return fly.send('', `/api/channels/${channel}/thread-members/@me`, 'DELETE', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}
	
	remove_member(user, channel) {
		return fly.send('', `/api/channels/${channel}/thread-members/${user}`, 'DELETE', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}
	
	get_member(user, channel) {
		return fly.send('', `/api/channels/${channel}/thread-members/${user}`, 'GET', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}
	
	member_list(channel) {
		return fly.send('', `/api/channels/${channel}/thread-members`, 'GET', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}
}

module.exports = thread_construct;
