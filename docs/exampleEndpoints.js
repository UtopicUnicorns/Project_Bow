channel
	.chanGet({channel: 'channelId'})
		.then((val) => console.log(val))
			.catch((err) => console.error(err));
			
channel
	.chanEdit({
		channel: 'channelId',
			name: 'channelName',
				type: INTEGER,
					position: INTEGER,
						topic: 'Channel Topic Text',
		nsfw: BOOLEAN,
			rate_limit_per_user: INTEGER,
				permission_overwrites: permissionObject,
					parent_id: 'categoryId',
						default_auto_archive_duration: INTEGER,
	})
		.then((val) => console.log(val))
			.catch((err) => console.error(err));
			
channel
	.voiceChanEdit({
		channel: 'channelId',
			name: 'channelName',
				position: INTEGER,
					nsfw: BOOLEAN,
						bitrate: INTEGER,
		user_limit: INTEGER,
			permission_overwrites: permissionObject,
				parent_id: 'categoryId',
					rtc_region: 'RegionName',
						video_quality_mode: INTEGER,
	})
		.then((val) => console.log(val))
			.catch((err) => console.error(err));

channel
	.groupDMEdit({
		channel: 'channelId',
			name: 'channelName',
				icon: Base64ImageObject,
	})
		.then((val) => console.log(val))
			.catch((err) => console.error(err));
			
channel
	.threadEdit({
		channel: 'channelId',
			name: 'threadName',
				archived: BOOLEAN,
					auto_archive_duration: INTEGER,
						locked: BOOLEAN,
		invitable: BOOLEAN,
			rate_limit_per_user: INTEGER,
				flags: INTEGER,
		})
		.then((val) => console.log(val))
			.catch((err) => console.error(err));

channel
	.chanDelete({
		channel: 'channelId',
	})
		.then((val) => console.log(val))
			.catch((err) => console.error(err));

channel
	.chanGetMessages({
		channel: 'channelId',
			around: 'messageId',
				before: 'messageId',
					after: 'messageId',
						limit: INTEGER,
	})
		.then((val) => console.log(val))
			.catch((err) => console.error(err));

channel
	.chanGetMessage({
		channel: 'channelId',
			message: 'messageId',
	})
		.then((val) => console.log(val))
			.catch((err) => console.error(err));

channel
	.msgSend({
		content: 'Message Content',
			channel: 'channelId',
				components: componentObject,
					embeds: embedObject,
						tts: true,
			reference: {message_id: 'messageId', guild_id: 'guildId'},
				sticker: ['stickerId'],
					attachments: attachmentObject,
	})
		.then((val) => console.log(val))
			.catch((err) => console.error(err));
			
channel
	.crossPostMsg({
		channel: 'channelId',
			message: 'messageId',
	})
		.then((val) => console.log(val))
			.catch((err) => console.error(err));

channel
	.createReaction({
		channel: 'channelId',
			message: 'messageId',
				emoji: 'emoji', //E.G: monkas:629319635950370829 OR unicode emoji
	})
		.then((val) => console.log(val))
			.catch((err) => console.error(err));

channel
	.deleteSelfReaction({
		channel: 'channelId',
			message: 'messageId',
				emoji: 'emoji', //E.G: monkas:629319635950370829 OR unicode emoji
	})
		.then((val) => console.log(val))
			.catch((err) => console.error(err));

channel
	.deleteReaction({
		channel: 'channelId',
			message: 'messageId',
				emoji: 'emoji', //E.G: monkas:629319635950370829 OR unicode emoji
					userL 'userId',
	})
		.then((val) => console.log(val))
			.catch((err) => console.error(err));

channel
	.getReactions({
		channel: 'channelId',
			message: 'messageId',
				emoji: 'emoji', //E.G: monkas:629319635950370829 OR unicode emoji
					after: 'userId',
						limit: INTEGER,
	})
		.then((val) => console.log(val))
			.catch((err) => console.error(err));
			
channel
	.deleteAllReactions({
		channel: 'channelId',
			message: 'messageId',
	})
		.then((val) => console.log(val))
			.catch((err) => console.error(err));

channel
	.deleteAllReactionsEmoji({
		channel: 'channelId',
			message: 'messageId',
				emoji: 'emoji', //E.G: monkas:629319635950370829 OR unicode emoji
	})
		.then((val) => console.log(val))
			.catch((err) => console.error(err));
			
channel
	.msgEdit({
		content: 'Message Content',
			id: 'messageId',
				channel: 'channelId',
					components: componentObject,
						embeds: embedObject,
							attachments: attachments,
	})
		.then((val) => console.log(val))
			.catch((err) => console.error(err));

channel
	.msgDelete({
		channel: 'channelId',
			message: 'messageId',
	})
		.then((val) => console.log(val))
			.catch((err) => console.error(err));

channel
	.msgBulkDelete({
		channel: 'channelId',
			messages: [], //Message ID's in array
	})
		.then((val) => console.log(val))
			.catch((err) => console.error(err));

channel.
	channelPermOverwrite({
		channel: 'channelId',
			target: 'userId or roleId',
				permission_overwrites: permissionObject,
					type: INTEGER, //0 for role, 1 for member
		})
			.then((val) => console.log(val))
				.catch((err) => console.error(err));
			
/*	CHEATSHEET	*/
channelUserPermissionFlags = {
	createInstantInvite: 1 << 0,
	kickMembers: 1 << 1,
	banMembers: 1 << 2,
	administrator: 1 << 3,
	manageChannels: 1 << 4,
	manageGuild: 1 << 5,
	addReactions: 1 << 6,
	viewAuditLog: 1 << 7,
	prioritySpeaker: 1 << 8,
	stream: 1 << 9,
	viewChannel: 1 << 10,
	sendMessages: 1 << 11,
	sendTtsMessages: 1 << 12,
	manageMessages: 1 << 13,
	embedLinks: 1 << 14,
	attachFiles: 1 << 15,
	readMessageHistory: 1 << 16,
	mentionEveryone: 1 << 17,
	useExternalEmojis: 1 << 18,
	viewGuildInsights: 1 << 19,
	connect: 1 << 20,
	speak: 1 << 21,
	muteMembers: 1 << 22,
	deafenMembers: 1 << 23,
	moveMembers: 1 << 24,
	useVad: 1 << 25,
	changeNickname: 1 << 26,
	manageNicknames: 1 << 27,
	manageRoles: 1 << 28,
	manageWebhooks: 1 << 29,
	manageEmojisAndStickers: 1 << 30,
	useApplicationCommands: 1 << 31,
	requestToSpeak: 1 << 32,
	manageEvents: 1 << 33,
	manageThreads: 1 << 34,
	createPublicThreads: 1 << 35,
	createPrivateThreads: 1 << 36,
	useExternalStickers: 1 << 37,
	sendMessagesInThreads: 1 << 38,
	useEmbeddedActivities: 1 << 39,
	moderateMembers: 1 << 40
};

channelTypes = {
	guildText: 0,
	dm: 1,
	guildVoice: 2,
	groupDM: 3,
	guildCategory: 4,
	guildNews: 5,
	guildNewsThread: 10,
	guildPublicThread: 11,
	guildPrivateThread: 12,
	guildStageVoice: 13,
	guildDirectory: 14,
	guildForum: 15
};
	
videoQualityModes = {
	auto: 0,
	full: 1
};

channelFlags = {
	pinned: 1 << 1,
};
	
messageTypes = {
	default: 0,
	recipientAdd: 1,
	recipientRemove: 2,
	call: 3,
	channelNameChange: 4,
	channelIconChange: 5,
	channelPinnedMessage: 6,
	userJoin: 7,
	guildBoost: 8,
	guildBoostTier1: 9,
	guildBoostTier2: 10,
	guildBoostTier3: 11,
	channelFollowAdd: 12,
	guildDiscoveryDisqualified: 14,
	guildDiscoveryRequalified: 15,
	guildDiscoveryGracePeriodInitialWarning: 16,
	guildDiscoveryGracePeriodFinalWarning: 17,
	threadCreated: 18,
	reply: 19,
	chatInputCommand: 20,
	threadStarterMessage: 21,
	guildInviteReminder: 22,
	contextMenuCommand: 23,
	autoModerationAction: 24,
};
	
messageActivityTypes = {	
	join: 1,
	spectate: 2,
	listen: 3,
	joinRequest: 5,
};
	
messageFlags = {
	crossPosted: 1 << 0,
	isCrospost: 1 << 1,
	suppressEmbeds: 1 << 2,
	sourceMessageDeleted: 1 << 3,
	urgent: 1 << 4,
	hasThread: 1 << 5,
	ephemeral: 1 << 6,
	loading: 1 << 7,
	failedToMentionSomeRolesInThread: 1 << 8,
};


permHere = [{
		id: 'roleId',
		type: 0, //0 = role, 1 = member
		allow: [],
		deny: [],
	},
	{
		id: 'memberId',
		type: 0, //0 = role, 1 = member
		allow: [],
		deny: [],
	}];

attachments = [{
		file: 'cat.gif',
			description: 'Picture of an animated cat',
				filename: 'cat.gif',
	},
	{
		file: 'pic.png',
			description: 'Not a di*k pic',
				filename: 'pic.png',
}];

new component()
	.menu({ custom_id: 'UniqueID', place_holder: 'Unique', min_val: 1, max_val: 3 })
		.entry({ label: 'Unique Label', value: 'UniqueVAL', description: 'Unique Description', default: true, emoji: { id: "EmojiID" } })
			.entry({ label: 'Unique Label', value: 'UniqueVAL', description: 'Unique Description', default: false })
				.entry({ label: 'Unique Label', value: 'UniqueVAL', description: 'Unique Description', default: false })
	.output;

new component()
	.button({ label: 'Unique Label', custom_id: 'UniqueID', style: 1, disabled: true })
		.button({ label: 'Unique Label', custom_id: 'UniqueID', style: 2 })
			.button({ label: 'Unique Label', custom_id: 'UniqueID', style: 3 })
				.button({ label: 'Unique Label', custom_id: 'UniqueID', style: 4, emoji: { id: 'EmojiID' } })
					.button({ label: 'Unique Label', style: 5, url: 'https://artemis.rest' })
	.output;
					
new embed()
	.field('Field Title', 'Field Content', true)
		.description('Description')
			.color('FF0000')
				.title('Title')
					.url('Website Entry')
	.author('Name Entry', 'Icon Entry', 'Website Entry')
		.thumbnail('Image Entry')
			.image('Image Entry')
				.footer('Footer Content', 'Icon Entry')
					.timestamp()
	.output;
	
