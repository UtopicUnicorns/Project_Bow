class guildConstruct {
	processGuildImage(image) {
		let ext = path.extname(image.toLowerCase());
			let mime_type = mime.type(ext);
				let imageObject = fs.readFileSync(image, {encoding: 'base64'});
					let sendObject = `data:${mime_type};base64,${imageObject}`;
		return sendObject;
	}
	
	processFeatures(array) {
		let sendObject = [];
			let featuresObject = {
				animatedBanner: 'ANIMATED_BANNER',
					animatedIcon: 'ANIMATED_ICON',
						autoModeration: 'AUTO_MODERATION',
							banner: 'BANNER',
								community: 'COMMUNITY',
				discoverable: 'DISCOVERABLE',
					featurable: 'FEATURABLE',
						inviteSplash: 'INVITE_SPLASH',
							memberVerificationGateEnabled: 'MEMBER_VERIFICATION_GATE_ENABLED',
								monetizationEnabled: 'MONETIZATION_ENABLED',
				moreStickers: 'MORE_STICKERS',
					news: 'NEWS',
						partnered: 'PARTNERED',
							previewEnabled: 'PREVIEW_ENABLED',
								privateThreads: 'PRIVATE_THREADS',
				roleIcons: 'ROLE_ICONS',
					ticketedEventsEnabled: 'TICKETED_EVENTS_ENABLED',
						vanityUrl: 'VANITY_URL',
							verified: 'VERIFIED',
								vipRegions: 'VIP_REGIONS',
				welcomeScreenEnabled: 'WELCOME_SCREEN_ENABLED',
			};
				for (let i of array) { sendObject.push(featuresObject[i]); }
					return sendObject;
	}
	
	processSysFlags(flags) {
		let sysFlags = {
			suppressJoinNotifications: 1 << 0,
				suppressPremiumSubscribers: 1 << 1,
					suppressGuildReminderNotifications: 1 << 2,
						suppressJoinNotificationReplies: 1 << 3,
		}
			newFlags = 0;
				for (let i of flags) {
					newFlags += sysFlags[i];
				}
					return newFlags;
	}
	
	processExplicit(option) {
		let explicitContentFilterChoice = {
			off: 0,
				onForNoRoles: 1,
					onForAllMembers: 2,
		};
			return explicitContentFilterChoice[option];
	}
	
	processVerification(option) {
		let verificationLevelChoice = {
			none: 0,
				low: 1,
					mid: 2,
						high: 3,
							veryHigh: 4,
		};
			return verificationLevelChoice[option];
	}
	
	processNotifLevel(option) {
		let defaultMessageNotificationsOption = {
			allMessages: 0,
				onlyMentions: 1,
		};
			return defaultMessageNotificationsOption[option];
	}
	
	readyPermissions(perms) {
		const permissionField = {
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
			moderateMembers: 1 << 40,
		}
						
			for (let a of perms) {
				let denyNum = 0;
				let allowNum = 0;
				if(a.allow) {
					for (let b of a.allow) {
						if(permissionField[b]) allowNum += permissionField[b];
					}
				}
				if(a.deny) {
					for (let b of a.deny) {
						if(permissionField[b]) denyNum += permissionField[b];
					}
				}			
				a.allow = allowNum;
				a.deny = denyNum;
			}
			
			return perms;
	}
	
	getChanType(type) {
		let channelTypes = {
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
			return channelTypes[type];
	}
	
	getVideoMode(mode) {
		let videoQualityModes = {
			auto: 0,
				full: 1
		};
			return videoQualityModes[mode];
	}


	create(msg) {
		let formMessage = {};
			if(msg.name) formMessage['name'] = msg.name;
				if(msg.icon) formMessage['icon'] = this.processGuildImage(msg.icon);
					if(msg.verificationLevel) formMessage['verification_level'] = this.processVerification(msg.verificationLevel);
						if(msg.defaultMessageNotifications) formMessage['default_message_notifications'] = this.processNotifLevel(msg.defaultMessageNotifications);
		if(msg.explicitContentFilter) formMessage['explicit_content_filter'] = this.processExplicit(msg.explicitContentFilter);
			if(msg.roles) formMessage['roles'] = msg.roles;
				if(msg.channels) formMessage['channels'] = msg.channels;
					return exit.call('createGuild', {data: JSON.stringify(formMessage), type: `application/json`});
	}
	
	get(msg) {
		let formMessage = 'with_counts=false';
			if(msg.count) formMessage = 'with_counts=true';
				return exit.call('getGuild', {guildId: msg.guild, data: formMessage, type: `application/json`});
	}
	
	preview(msg) {
		return exit.call('getGuildPreview', {guildId: msg.guild, data: '', type: `application/json`});
	}
	
	edit(msg) {
		let formMessage = {};
			if(msg.name) formMessage['name'] = msg.name;
				if(msg.verificationLevel) formMessage['verification_level'] = this.processVerification(msg.verificationLevel);
					if(msg.defaultMessageNotifications) formMessage['default_message_notifications'] = this.processNotifLevel(msg.defaultMessageNotifications);
						if(msg.explicitContentFilter) formMessage['explicit_content_filter'] = this.processExplicit(msg.explicitContentFilter);
		if(msg.afkChannelId) formMessage['afk_channel_id'] = msg.afkChannelId;
			if(msg.afkTimeout) formMessage['afk_timeout'] = msg.afkTimeout;
				if(msg.icon) formMessage['icon'] = this.processGuildImage(msg.icon);
					if(msg.ownerId) formMessage['owner_id'] = msg.ownerId;
						if(msg.splash) formMessage['splash'] = this.processGuildImage(msg.splash);
		if(msg.discoverySplash) formMessage['discovery_splash'] = this.processGuildImage(msg.discoverySplash);
			if(msg.banner) formMessage['banner'] = this.processGuildImage(msg.banner);
				if(msg.systemChannelId) formMessage['system_channel_id'] = msg.systemChannelId;
					if(msg.systemChannelFlags) formMessage['system_channel_flags'] = this.processSysFlags(msg.systemChannelFlags);
						if(msg.rulesChannelId) formMessage['rules_channel_id'] = msg.rulesChannelId;
		if(msg.publicUpdatesChannelId) formMessage['public_updates_channel_id'] = msg.publicUpdatesChannelId;
			if(msg.preferredLocale) formMessage['preferred_locale'] = msg.preferredLocale;
				if(msg.features) formMessage['features'] = this.processFeatures(msg.features);
					if(msg.description) formMessage['description'] = msg.description;
						if(msg.premiumProgressBar) formMessage['premium_progress_bar_enabled'] = msg.premiumProgressBar;
		return exit.call('modifyGuild', {guildId: msg.guild, data: JSON.stringify(formMessage), type: `application/json`});
	}
	
	delete(msg) {
		return exit.call('deleteGuild', {guildId: msg.guild, data: '', type: `application/json`});
	}
	
	getChannels(msg) {
		return exit.call('getGuildChannels', {guildId: msg.guild, data: '', type: `application/json`});
	}
	
	createChannel(msg) {
		let formMessage = {};
			if(msg.name) formMessage['name'] = msg.name;
				if(msg.type) formMessage['type'] = this.getChanType(msg.type);
					if(msg.topic) formMessage['topic'] = msg.topic;
						if(msg.bitrate) formMessage['bitrate'] = msg.bitrate;
							if(msg.userLimit) formMessage['user_limit'] = msg.userLimit;
			if(msg.rateLimitPerUser) formMessage['rate_limit_per_user'] = msg.rateLimitPerUser;
				if(msg.position) formMessage['position'] = msg.position;
					if(msg.permissionOverwrite) formMessage['permission_overwrites'] = this.readyPermissions(msg.permission_overwrites);
						if(msg.parentId) formMessage['parent_id'] = msg.parentId;
							if(msg.nsfw) formMessage['nsfw'] = msg.nsfw;
			if(msg.rtcRegion) formMessage['rtc_region'] = msg.rtcRegion;
				if(msg.videoQualityMode) formMessage['video_quality_mode'] = this.getVideoMode(msg.videoQualityMode);
					if(msg.defaultAutoArchiveDuration) formMessage['default_auto_archive_duration'] = msg.defaultAutoArchiveDuration;
						return exit.call('createGuildChannel', {guildId: msg.guild, data: JSON.stringify(formMessage), type: `application/json`});
	}
	
	editChanPosition(msg) {
		let formMessage = {};
			if(msg.id) formMessage['id'] = msg.id;
				if(msg.position) formMessage['position'] = msg.position;
					if(msg.lockPermissions) formMessage['lock_permissions'] = msg.lockPermissions;
						if(msg.parentId) formMessage['parent_id'] = msg.parentId;
							return exit.call('modifyGuildChannelPositions', {guildId: msg.guild, data: JSON.stringify(formMessage), type: `application/json`});
	}
	
	activeThreads(msg) {
		return exit.call('listActiveGuildThreads', {guildId: msg.guild, data: '', type: `application/json`});
	}
	
	getMember(msg) {
		return exit.call('getGuildMember', {guildId: msg.guild, userId: msg.user, data: '', type: `application/json`});
	}
	
	listMembers(msg) {
		let formMessage = [];
			if(msg.after) formMessage.push(`before=${msg.after}`);
				if(msg.limit) formMessage.push(`limit=${msg.limit}`);
					return exit.call('listGuildMembers', {guildId: msg.guild, data: formMessage.join('&'), type: `application/json`});
	}
	
	searchMembers(msg) {
		let formMessage = [];
			if(msg.query) formMessage.push(`before=${msg.query}`);
				if(msg.limit) formMessage.push(`limit=${msg.limit}`);
					return exit.call('searchGuildMembers', {guildId: msg.guild, data: formMessage.join('&'), type: `application/json`});
	}
}

module.exports = guildConstruct;
