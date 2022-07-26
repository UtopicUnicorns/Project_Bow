emoji
	.list({
		guild: 'guildId',
	});				

emoji
	.get({
		guild: 'guildId',
			emoji: 'emojiId',
	});				

emoji
	.create({
		guild: 'guildId',
			name: 'emojiName',
				image: 'filename.ext',
					roles: [], //array of role ID's that can use emoji
	});				

emoji
	.edit({
		guild: 'guildId',
			emoji: 'emojiId',
				name: 'emojiName', 
					roles: [], //array of role ID's that can use emoji
	});
		
emoji
	.delete({
		guild: 'guildId',
			emoji: 'emojiId',
	});		
			
