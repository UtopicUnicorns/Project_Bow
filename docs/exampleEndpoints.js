channel types:
	guildText = 0
	dm = 1
	guildVoice = 2
	groupDM = 3
	guildCategory = 4
	guildNews = 5
	guildNewsThread = 10
	guildPublicThread = 11
	guildPrivateThread = 12
	guildStageVoice = 13
	guildDirectory = 14
	guildForum = 15
	
video quality modes:
	auto = 0
	full = 1

channel flags:
	pinned = 1 << 1
	
message types:
	default = 0
	recipientAdd = 1
	recipientRemove = 2
	call = 3
	channelNameChange = 4
	channelIconChange = 5
	channelPinnedMessage = 6
	userJoin = 7
	guildBoost = 8
	guildBoostTier1 = 9
	guildBoostTier2 = 10
	guildBoostTier3 = 11
	channelFollowAdd = 12
	guildDiscoveryDisqualified = 14
	guildDiscoveryRequalified = 15
	guildDiscoveryGracePeriodInitialWarning = 16
	guildDiscoveryGracePeriodFinalWarning = 17
	threadCreated = 18
	reply = 19
	chatInputCommand = 20
	threadStarterMessage = 21
	guildInviteReminder = 22
	contextMenuCommand = 23
	autoModerationAction = 24
	
message activity types:
	join = 1
	spectate = 2
	listen = 3
	joinRequest = 5
	
message flags:
crossPosted = 1 << 0
isCrospost = 1 << 1
suppressEmbeds = 1 << 2
sourceMessageDeleted = 1 << 3
urgent = 1 << 4
hasThread = 1 << 5
ephemeral = 1 << 6
loading = 1 << 7
failedToMentionSomeRolesInThread = 1 << 8

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
	.threadEdit({channel: 'channelId'})
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
	
