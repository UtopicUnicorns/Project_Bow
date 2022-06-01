class cacheConstruct {
	user(uId, client) {
		let user = client.client.users.find(({ id }) => id === uId);

		return user;
	}

	guild(gId, client) {
		let guild = client.client.guilds.find(({ id }) => id === gId);

		return guild;
	}
}

module.exports = cacheConstruct;
