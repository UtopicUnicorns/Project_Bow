/*	auditEndpoint	*/
audit
	.log({
		guild: 'guildId',
			actionType: '',
				before: 'auditLogEntryId',
					limit: INTEGER,
	})
		.then((val) => console.log(val))
			.catch((err) => console.error(err));

/*	channelEndpoint	*/
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

channel.
	getChanInvites({
		channel: 'channelId',
		})
			.then((val) => console.log(val))
				.catch((err) => console.error(err));
				
channel.
	createChanInvite({
		channel: 'channelId',
			maxAge: INTEGER,
				maxUses: INTEGER,
					temp: BOOLEAN,
						unique: BOOLEAN,
			targetType: INTEGER,
				targetUserId: 'userId',
					targetAppId: 'applicationId',
		})
			.then((val) => console.log(val))
				.catch((err) => console.error(err));
				
channel.
	deleteChannelPerm({
		channel: 'channelId',
			user: 'userId',
		})
			.then((val) => console.log(val))
				.catch((err) => console.error(err));
				
channel.
	followNewsChannel({
		channel: 'channelId',
			followId: 'idOfChannelToFollow',
		})
			.then((val) => console.log(val))
				.catch((err) => console.error(err));
				
channel.
	triggerTyping({
		channel: 'channelId',
		})
			.then((val) => console.log(val))
				.catch((err) => console.error(err));

channel.
	getPinnedMessages({
		channel: 'channelId',
		})
			.then((val) => console.log(val))
				.catch((err) => console.error(err));

channel.
	pinMessage({
		channel: 'channelId',
			message: 'messageId',
		})
			.then((val) => console.log(val))
				.catch((err) => console.error(err));

channel.
	unpinMessage({
		channel: 'channelId',
			message: 'messageId',
		})
			.then((val) => console.log(val))
				.catch((err) => console.error(err));
				
channel.
	groupDmAddUser({
		channel: 'channelId',
			user: 'userId',
				nick: 'userNickname',
					access_token: 'tokenId',
		})
			.then((val) => console.log(val))
				.catch((err) => console.error(err));

channel.
	groupDmRemoveUser({
		channel: 'channelId',
			user: 'userId',
		})
			.then((val) => console.log(val))
				.catch((err) => console.error(err));

channel.
	createThreadAtMsg({
		channel: 'channelId',
			message: 'messageId',
				name: 'threadName',
					auto_archive_duration: INTEGER,
						rate_limit_per_user: INTEGER,
		})
			.then((val) => console.log(val))
				.catch((err) => console.error(err));

channel.
	createThread({
		channel: 'channelId',
			name: 'threadName',
				auto_archive_duration: INTEGER,
					rate_limit_per_user: INTEGER,
						type: INTEGER,
							invitable: BOOLEAN,
		})
			.then((val) => console.log(val))
				.catch((err) => console.error(err));
				
channel.
	createForumThread({
		channel: 'channelId',
			name: 'threadName',
				auto_archive_duration: INTEGER,
					rate_limit_per_user: INTEGER,
						message: messageObject,
		})
			.then((val) => console.log(val))
				.catch((err) => console.error(err));

channel.
	joinThread({
		channel: 'channelId',
		})
			.then((val) => console.log(val))
				.catch((err) => console.error(err));

channel.
	userJoinThread({
		channel: 'channelId',
		user: 'userId',
		})
			.then((val) => console.log(val))
				.catch((err) => console.error(err));
				
channel.
	leaveThread({
		channel: 'channelId',
		})
			.then((val) => console.log(val))
				.catch((err) => console.error(err));

channel.
	userLeaveThread({
		channel: 'channelId',
		user: 'userId',
		})
			.then((val) => console.log(val))
				.catch((err) => console.error(err));

channel.
	getThreadMember({
		channel: 'channelId',
		user: 'userId',
		})
			.then((val) => console.log(val))
				.catch((err) => console.error(err));

channel.
	listThreadMembers({
		channel: 'channelId',
		})
			.then((val) => console.log(val))
				.catch((err) => console.error(err));

channel.
	listPublicArchivedThreads({
		channel: 'channelId',
			before: ISO8601Timestamp,
				limit: INTEGER,
		})
			.then((val) => console.log(val))
				.catch((err) => console.error(err));

channel.
	listPrivateArchivedThreads({
		channel: 'channelId',
			before: ISO8601Timestamp,
				limit: INTEGER,
		})
			.then((val) => console.log(val))
				.catch((err) => console.error(err));

channel.
	listJoinedPrivateArchivedThreads({
		channel: 'channelId',
			before: ISO8601Timestamp,
				limit: INTEGER,
		})
			.then((val) => console.log(val))
				.catch((err) => console.error(err));

/* emojiEndpoint */
emoji
	.list({
		guild: 'guildId',
	})
		.then((val) => console.log(val))
				.catch((err) => console.error(err));

emoji
	.get({
		guild: 'guildId',
			emoji: 'emojiId',
	})
		.then((val) => console.log(val))
				.catch((err) => console.error(err));

emoji
	.create({
		guild: 'guildId',
			name: 'emojiName',
				image: 'filename.ext',
					roles: [], //array of role ID's that can use emoji
	})
		.then((val) => console.log(val))
				.catch((err) => console.error(err));

emoji
	.edit({
		guild: 'guildId',
			emoji: 'emojiId',
				name: 'emojiName', 
					roles: [], //array of role ID's that can use emoji
	})
		.then((val) => console.log(val))
				.catch((err) => console.error(err));

emoji
	.delete({
		guild: 'guildId',
			emoji: 'emojiId',
	})
		.then((val) => console.log(val))
				.catch((err) => console.error(err));

/* guildEndpoint */
guild
	.create({
		name: 'guildName',
			icon: 'fileName.ext',
				verificationLevel: verificationLevelChoice,
					defaultMessageNotifications: defaultMessageNotificationsOption,
						explicitContentFilter: explicitContentFilterChoice,
		roles: [], //array of roles
			channels: [], //array of channels
	})
		.then((val) => console.log(val))
				.catch((err) => console.error(err));

guild
	.get({
		guild: 'guildId',
			count: BOOLEAN,
	})
		.then((val) => console.log(val))
				.catch((err) => console.error(err));

guild
	.preview({
		guild: 'guildId',
	})
		.then((val) => console.log(val))
				.catch((err) => console.error(err));

guild
	.edit({
		guild: 'guildId',
			name: 'guildName',
				verificationLevel: verificationLevelChoice,
					defaultMessageNotifications: defaultMessageNotificationsOption,
						explicitContentFilter: explicitContentFilterChoice,
		afkChannelId: 'channelId',
			afkTimeout: INTEGER,
				icon: 'fileName.ext',
					ownerId: 'newOwnerId',
						splash: 'fileName.ext',
		discoverySplash: 'fileName.ext',
			banner: 'fileName.ext',
				systemChannelId: 'channelId',
					systemChannelFlags: systemChannelFlagsArray,
						rulesChannelId: 'channelId',
		publicUpdatesChannelId: 'channelId',
			preferredLocale: 'localeString',
				features: featuresArray,
					description: 'guildDescription',
						premiumProgressBar: BOOLEAN,
	})
		.then((val) => console.log(val))
				.catch((err) => console.error(err));

guild
	.delete({
		guild: 'guildId',
	})
		.then((val) => console.log(val))
				.catch((err) => console.error(err));

guild
	.getChannels({
		guild: 'guildId',
	})
		.then((val) => console.log(val))
				.catch((err) => console.error(err));
				
guild
	.createChannel({
		guild: 'guildId',
			name: 'channelName',
				type: channelTypes,
					topic: 'topicDescription',
						bitrate: INTEGER,
		userLimit: INTEGER,
			rateLimitPerUser: INTEGER,
				position: INTEGER,
					permissionOverwrite: permHere,
						parentId: 'parentCategoryId',
		nsfw: BOOLEAN,
			rtcRegion: 'rtcRegion',
				videoQualityMode: videoQualityMode,
					defaultAutoArchiveDuration: INTEGER, 
	})
		.then((val) => console.log(val))
				.catch((err) => console.error(err));

guild
	.editChanPosition({
		guild: 'guildId',
			id: 'channelId',
				position: INTEGER,
					lockPermissions: BOOLEAN,
						parentId: 'parentCategoryId',
	})
		.then((val) => console.log(val))
				.catch((err) => console.error(err));

guild
	.activeThreads({
		guild: 'guildId',
	})
		.then((val) => console.log(val))
				.catch((err) => console.error(err));

guild
	.getMember({
		guild: 'guildId',
			member: 'userId',
	})
		.then((val) => console.log(val))
				.catch((err) => console.error(err));

guild
	.listMembers({
		guild: 'guildId',
			limit: INTEGER,
				after: 'userId',
	})
		.then((val) => console.log(val))
				.catch((err) => console.error(err));

guild
	.searchMembers({
		guild: 'guildId',
			limit: INTEGER,
				query: 'stringToMatchUsernameOrNick',
	})
		.then((val) => console.log(val))
				.catch((err) => console.error(err));

guild
	.addMember({
		guild: 'guildId',
			user: 'userId',
				accessToken: 'accessToken',
					nick: 'nickName',
						roles: [], //array of role ID's'
		mute: BOOLEAN,
			deaf: BOOLEAN,
	})
		.then((val) => console.log(val))
				.catch((err) => console.error(err));

guild
	.editMember({
		guild: 'guildId',
			user: 'userId',
				channel: 'channelId',
					nick: 'nickName',
						roles: [], //array of role ID's'
		mute: BOOLEAN,
			deaf: BOOLEAN,
				timeOut: 'ISO8601timeStamp',
	})
		.then((val) => console.log(val))
				.catch((err) => console.error(err));

guild
	.editMe({
		guild: 'guildId',
			nick: 'nickName',
	})
		.then((val) => console.log(val))
				.catch((err) => console.error(err));

guild
	.addMemberRole({
		guild: 'guildId',
			user: 'userId',
				role: 'roleId',
	})
		.then((val) => console.log(val))
				.catch((err) => console.error(err));

guild
	.removeMemberRole({
		guild: 'guildId',
			user: 'userId',
				role: 'roleId',
	})
		.then((val) => console.log(val))
				.catch((err) => console.error(err));

guild
	.removeMember({
		guild: 'guildId',
			user: 'userId',
	})
		.then((val) => console.log(val))
				.catch((err) => console.error(err));

guild
	.getBans({
		guild: 'guildId',
			limit: INTEGER,
				before: 'userId',
					after: 'userId',
	})
		.then((val) => console.log(val))
				.catch((err) => console.error(err));

guild
	.getBan({
		guild: 'guildId',
			user: 'userId',
	})
		.then((val) => console.log(val))
				.catch((err) => console.error(err));

guild
	.ban({
		guild: 'guildId',
			user: 'userId',
				reason: 'reasonToBan',
					deleteMessages: INTEGER,
	})
		.then((val) => console.log(val))
				.catch((err) => console.error(err));

guild
	.unBan({
		guild: 'guildId',
			user: 'userId',
	})
		.then((val) => console.log(val))
				.catch((err) => console.error(err));

guild
	.getRoles({
		guild: 'guildId',
	})
		.then((val) => console.log(val))
				.catch((err) => console.error(err));

guild
	.createRole({
		guild: 'guildId',
			name: 'roleName',
				permissions: rolePermissionArray,
					color: INTEGER, //rgb color
						hoist: BOOLEAN,
		icon: 'fileName.ext',
			unicodeEmoji: 'unicodeEmoji',
				mentionable: BOOLEAN,
	})
		.then((val) => console.log(val))
				.catch((err) => console.error(err));

guild
	.rolePosition({
		guild: 'guildId',
			role: 'roleId',
				position: INTEGER,
	})
		.then((val) => console.log(val))
				.catch((err) => console.error(err));

guild
	.editRole({
		guild: 'guildId',
			role: 'roleId',
				name: 'roleName',
					permissions: rolePermissionArray,
						color: INTEGER, //rgb color
		hoist: BOOLEAN,
			icon: 'fileName.ext',
				unicodeEmoji: 'unicodeEmoji',
					mentionable: BOOLEAN,
	})
		.then((val) => console.log(val))
				.catch((err) => console.error(err));

guild
	.mfaLevel({
		guild: 'guildId',
			level: INTEGER, //0 off, 1 on
	})
		.then((val) => console.log(val))
				.catch((err) => console.error(err));

guild
	.deleteRole({
		guild: 'guildId',
			role: 'roleId',
	})
		.then((val) => console.log(val))
				.catch((err) => console.error(err));
					
/*	CHEATSHEET	*/
defaultMessageNotificationsOption = {
	allMessages: 0,
	onlyMentions: 1,
};

verificationLevelChoice = {
	none: 0,
	low: 1,
	mid: 2,
	high: 3,
	veryHigh: 4,
};

explicitContentFilterChoice = {
	off: 0,
	onForNoRoles: 1,
	onForAllMembers: 2,
};

systemChannelFlagsArray = ['suppressJoinNotifications', 'suppressPremiumSubscribers', 
														'suppressGuildReminderNotifications', 'suppressJoinNotificationReplies'];

featuresArray = ['animatedBanner', 'animatedIcon', 'autoModeration', 'banner', 'community', 'discoverable', 
									'featurable', 'inviteSplash', 'memberVerificationGateEnabled', 'monetizationEnabled', 
									'moreStickers', 'news', 'partnered', 'previewEnabled', 'privateThreads', 'roleIcons', 
									'ticketedEventsEnabled', 'vanityUrl', 'verified', 'vipRegions', 'welcomeScreenEnabled'];

rolePermissionArray = ['createInstantInvite', 'kickMembers', 'banMembers', 'administrator', 'manageChannels', 
											'manageGuild', 'addReactions', 'viewAuditLog', 'prioritySpeaker', 'stream', 'viewChannel', 
											'sendMessages', 'sendTtsMessages', 'manageMessages', 'embedLinks', 'attachFiles', 'readMessageHistory', 
											'mentionEveryone', 'useExternalEmojis', 'viewGuildInsights', 'connect', 'speak', 'muteMembers', 
											'deafenMembers', 'moveMembers', 'useVad', 'changeNickname', 'manageNicknames', 'manageRoles', 
											'manageWebhooks', 'manageEmojisAndStickers', 'useApplicationCommands', 'requestToSpeak', 
											'manageEvents', 'manageThreads', 'createPublicThreads', 'createPrivateThreads', 'useExternalStickers', 
											'sendMessagesInThreads', 'useEmbeddedActivities', 'moderateMembers']

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

auditActionTypes = {
	guildUpdate: 1,
	channelCreate: 10,
	channelUpdate: 11,
	channelDelete: 12,
	channelOverwriteCreate: 13,
	channelOverwriteUpdate: 14,
	channelOverwriteDelete: 15,
	memberKick: 20,
	memberPrune: 21,
	memberBanAdd: 22,
	memberBanRemove: 23,
	memberUpdate: 24,
	memberRoleUpdate: 25,
	memberMove: 26,
	memberDisconnect: 27,
	botAdd: 28,
	roleCreate: 30,
	roleUpdate: 31,
	roleDelete: 32,
	inviteCreate: 40,
	inviteUpdate: 41,
	inviteDelete: 42,
	webhookCreate: 50,
	webhookUpdate: 51,
	webhookDelete: 52,
	emojiCreate: 60,
	emojiUpdate: 61,
	emojiDelete: 62,
	messageDelete: 72,
	messageBulkDelete: 73,
	messagePin: 74,
	messageUnpin: 75,
	integrationCreate: 80,
	integrationUpdate: 81,
	integrationDelete: 82,
	stageInstanceCreate: 83,
	stageInstanceUpdate: 84,
	stageInstanceDelete: 85,
	stickerCreate: 90,
	stickerUpdate: 91,
	stickerDelete: 92,
	guildScheduledEventCreate: 100,
	guildScheduledEventUpdate: 101,
	guildScheduledEventDelete: 102,
	threadCreate: 110,
	threadUpdate: 111,
	threadDelete: 112,
	applicationCommandPermissionUpdate: 121,
	autoModerationRuleCreate: 140,
	autoModerationRuleUpdate: 141,
	autoModerationRuleDelete: 142,
	autoModerationBlockMessage: 143,
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
	
