class threadConstruct {
	join(channel) {
		return fly.send('', `/api/channels/${channel}/thread-members/@me`, 'PUT', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}

	addMember(user, channel) {
		return fly.send('', `/api/channels/${channel}/thread-members/${user}`, 'PUT', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}

	leave(channel) {
		return fly.send('', `/api/channels/${channel}/thread-members/@me`, 'DELETE', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}

	removeMember(user, channel) {
		return fly.send('', `/api/channels/${channel}/thread-members/${user}`, 'DELETE', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}

	getMember(user, channel) {
		return fly.send('', `/api/channels/${channel}/thread-members/${user}`, 'GET', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}

	memberList(channel) {
		return fly.send('', `/api/channels/${channel}/thread-members`, 'GET', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}

	publicArchive(channel) {
		return fly.send('', `/api/channels/${channel}/threads/archived/public`, 'GET', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}

	privateArchive(channel) {
		return fly.send('', `/api/channels/${channel}/threads/archived/private`, 'GET', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}

	joinedPrivateArchive(channel) {
		return fly.send('', `/api/channels/${channel}/users/@me/threads/archived/private`, 'GET', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}
}

module.exports = threadConstruct;
