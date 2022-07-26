guildEvent
	.listEvents({
		guild: 'guildId',
			count: BOOLEAN,
	});				

guildEvent
	.createEvent({
		guild: 'guildId',
			channel: 'channelId',
				entityMetadata: { location: 'locationString' },
					name: 'eventName',
						privacyLevel: privacyLevelOption,
		startTime: 'ISO8601timestamp',
			endTime: 'ISO8601timestamp',
				description: 'eventDescription',
					entityType: entityTypeOption,
						image: 'fileName.ext',
	});				

guildEvent
	.getEvent({
		guild: 'guildId',
			event: 'eventId',
				count: BOOLEAN,
	});				

guildEvent
	.editEvent({
		guild: 'guildId',
			event: 'eventId',
				channel: 'channelId',
					entityMetadata: { location: 'locationString' },
						name: 'eventName',
		privacyLevel: privacyLevelOption,
			startTime: 'ISO8601timestamp',
				endTime: 'ISO8601timestamp',
					description: 'eventDescription',
						entityType: entityTypeOption,
		image: 'fileName.ext',
			status: statusOption,
	});				

guildEvent
	.deleteEvent({
		guild: 'guildId',
			event: 'eventId',
	});				

guildEvent
	.getEventUsers({
		guild: 'guildId',
			event: 'eventId',
				limit: INTEGER,
					withMember: BOOLEAN,
						before: 'userId',
		after: 'userId',
	});	
				
