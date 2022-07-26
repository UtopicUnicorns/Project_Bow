guild
	.create({
		name: 'guildName',
			icon: 'fileName.ext',
				verificationLevel: verificationLevelChoice,
					defaultMessageNotifications: defaultMessageNotificationsOption,
						explicitContentFilter: explicitContentFilterChoice,
		roles: [], //array of roles
			channels: [], //array of channels
	});				

guild
	.get({
		guild: 'guildId',
			count: BOOLEAN,
	});				

guild
	.preview({
		guild: 'guildId',
	});				

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
	});				

guild
	.delete({
		guild: 'guildId',
	});				

guild
	.getChannels({
		guild: 'guildId',
	});				
				
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
	});				

guild
	.editChanPosition({
		guild: 'guildId',
			id: 'channelId',
				position: INTEGER,
					lockPermissions: BOOLEAN,
						parentId: 'parentCategoryId',
	});				

guild
	.activeThreads({
		guild: 'guildId',
	});				

guild
	.getMember({
		guild: 'guildId',
			member: 'userId',
	});				

guild
	.listMembers({
		guild: 'guildId',
			limit: INTEGER,
				after: 'userId',
	});				

guild
	.searchMembers({
		guild: 'guildId',
			limit: INTEGER,
				query: 'stringToMatchUsernameOrNick',
	});				

guild
	.addMember({
		guild: 'guildId',
			user: 'userId',
				accessToken: 'accessToken',
					nick: 'nickName',
						roles: [], //array of role ID's'
		mute: BOOLEAN,
			deaf: BOOLEAN,
	});				

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
	});				

guild
	.editMe({
		guild: 'guildId',
			nick: 'nickName',
	});				

guild
	.addMemberRole({
		guild: 'guildId',
			user: 'userId',
				role: 'roleId',
	});				

guild
	.removeMemberRole({
		guild: 'guildId',
			user: 'userId',
				role: 'roleId',
	});				

guild
	.removeMember({
		guild: 'guildId',
			user: 'userId',
	});				

guild
	.getBans({
		guild: 'guildId',
			limit: INTEGER,
				before: 'userId',
					after: 'userId',
	});				

guild
	.getBan({
		guild: 'guildId',
			user: 'userId',
	});				

guild
	.ban({
		guild: 'guildId',
			user: 'userId',
				reason: 'reasonToBan',
					deleteMessages: INTEGER,
	});				

guild
	.unBan({
		guild: 'guildId',
			user: 'userId',
	});				

guild
	.getRoles({
		guild: 'guildId',
	});				

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
	});				

guild
	.rolePosition({
		guild: 'guildId',
			role: 'roleId',
				position: INTEGER,
	});				

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
	});				

guild
	.mfaLevel({
		guild: 'guildId',
			level: INTEGER, //0 off, 1 on
	});				

guild
	.deleteRole({
		guild: 'guildId',
			role: 'roleId',
	});				

guild
	.getPruneCount({
		guild: 'guildId',
			days: INTEGER,
				includeRoles: 'commaSeperatedRoleIDs',
	});				

guild
	.beginPrune({
		guild: 'guildId',
			computePruneCount: BOOLEAN,
				days: INTEGER,
					includeRoles: [], //Array of role ID's'
						reason: 'reasonToPrune',
	});				
				
guild
	.getVoiceRegions({
		guild: 'guildId',
	});				

guild
	.getInvites({
		guild: 'guildId',
	});				

guild
	.getIntegrations({
		guild: 'guildId',
	});				

guild
	.deleteIntegration({
		guild: 'guildId',
			integration: 'integrationId',
	});				

guild
	.getWidgetSettings({
		guild: 'guildId',
	});				

guild
	.editWidget({
		guild: 'guildId',
			enabled: BOOLEAN,
				channel: 'channelId',
	});				

guild
	.getWidget({
		guild: 'guildId',
	});				

guild
	.getVanityUrl({
		guild: 'guildId',
	});				

guild
	.getWidgetImage({
		guild: 'guildId',
			style: 'widgetImageStyleOption',
	});				

guild
	.getWelcomeScreen({
		guild: 'guildId',
	});				

guild
	.editWelcomeScreen({
		guild: 'guildId',
			enabled: BOOLEAN,
				welcomeChannels: welcomeChannelsArray,
					description: 'serverDescription',
	});				

guild
	.editVoiceState({
		guild: 'guildId',
			channel: 'channelId',
				suppress: BOOLEAN,
					requestToSpeakTimestamp: 'ISO8601timestamp',
	});				

guild
	.editUserVoiceState({
		guild: 'guildId',
			user: 'userId',
				channel: 'channelId',
					suppress: BOOLEAN,
	});				

