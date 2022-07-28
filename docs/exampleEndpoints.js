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





	
