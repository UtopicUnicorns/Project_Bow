class endPointConstruct {
	constructor() {
		this.endPoints = {
			createInteractionResponse: (info) => this.awaitError({ endpoint: { url: `/interactions/${info.interactionId}/${info.interactionToken}/callback`, method: 'POST', type: info.type }, data: info.data }),
				getOriginalInteractionResponse: (info) => this.awaitError({ endpoint: { url: `/webhooks/${info.applicationId}/${info.interactionToken}/messages/@original`, method: 'GET', type: info.type }, data: info.data }),
					editOriginalInteractionResponse: (info) => this.awaitError({ endpoint: { url: `/webhooks/${info.applicationId}/${info.interactionToken}/messages/@original`, method: 'PATCH', type: info.type }, data: info.data }),
						deleteOriginalInteractionResponse: (info) => this.awaitError({ endpoint: { url: `/webhooks/${info.applicationId}/${info.interactionToken}/messages/@original`, method: 'DELETE', type: info.type }, data: info.data }),
							createFollowupMessage: (info) => this.awaitError({ endpoint: { url: `/webhooks/${info.applicationId}/${info.interactionToken}`, method: 'POST', type: info.type }, data: info.data }),
			getFollowupMessage: (info) => this.awaitError({ endpoint: { url: `/webhooks/${info.applicationId}/${info.interactionToken}/messages/${info.messageId}`, method: 'GET', type: info.type }, data: info.data }),
				editFollowupMessage: (info) => this.awaitError({ endpoint: { url: `/webhooks/${info.applicationId}/${info.interactionToken}/messages/${info.messageId}`, method: 'PATCH', type: info.type }, data: info.data }),
					deleteFollowupMessage: (info) => this.awaitError({ endpoint: { url: `/webhooks/${info.applicationId}/${info.interactionToken}/messages/${info.messageId}`, method: 'DELETE', type: info.type }, data: info.data }),
						getGlobalApplicationCommands: (info) => this.awaitError({ endpoint: { url: `/applications/${info.applicationId}/commands`, method: 'GET', type: info.type }, data: info.data }),
							createGlobalApplicationCommand: (info) => this.awaitError({ endpoint: { url: `/applications/${info.applicationId}/commands`, method: 'POST', type: info.type }, data: info.data }),
			getGlobalApplicationCommand: (info) => this.awaitError({ endpoint: { url: `/applications/${info.applicationId}/commands/${info.commandId}`, method: 'GET', type: info.type }, data: info.data }),
				editGlobalApplicationCommand: (info) => this.awaitError({ endpoint: { url: `/applications/${info.applicationId}/commands/${info.commandId}`, method: 'PATCH', type: info.type }, data: info.data }),
					deleteGlobalApplicationCommand: (info) => this.awaitError({ endpoint: { url: `/applications/${info.applicationId}/commands/${info.commandId}`, method: 'DELETE', type: info.type }, data: info.data }),
						bulkOverwriteGlobalApplicationCommands: (info) => this.awaitError({ endpoint: { url: `/applications/${info.applicationId}/commands`, method: 'PUT', type: info.type }, data: info.data }),
							getGuildApplicationCommands: (info) => this.awaitError({ endpoint: { url: `/applications/${info.applicationId}/guilds/${info.guildId}/commands`, method: 'GET', type: info.type }, data: info.data }),
			createGuildApplicationCommand: (info) => this.awaitError({ endpoint: { url: `/applications/${info.applicationId}/guilds/${info.guildId}/commands`, method: 'POST', type: info.type }, data: info.data }),
				getGuildApplicationCommand: (info) => this.awaitError({ endpoint: { url: `/applications/${info.applicationId}/guilds/${info.guildId}/commands/${info.commandId}`, method: 'GET', type: info.type }, data: info.data }),
					editGuildApplicationCommand: (info) => this.awaitError({ endpoint: { url: `/applications/${info.applicationId}/guilds/${info.guildId}/commands/${info.commandId}`, method: 'PATCH', type: info.type }, data: info.data }),
						deleteGuildApplicationCommand: (info) => this.awaitError({ endpoint: { url: `/applications/${info.applicationId}/guilds/${info.guildId}/commands/${info.commandId}`, method: 'DELETE', type: info.type }, data: info.data }),
							bulkOverwriteGuildApplicationCommands: (info) => this.awaitError({ endpoint: { url: `/applications/${info.applicationId}/guilds/${info.guildId}/commands`, method: 'PUT', type: info.type }, data: info.data }),
			getGuildApplicationCommandPermissions: (info) => this.awaitError({ endpoint: { url: `/applications/${info.applicationId}/guilds/${info.guildId}/commands/permissions`, method: 'GET', type: info.type }, data: info.data }),
				getApplicationCommandPermissions: (info) => this.awaitError({ endpoint: { url: `/applications/${info.applicationId}/guilds/${info.guildId}/commands/${info.commandId}/permissions`, method: 'GET', type: info.type }, data: info.data }),
					editApplicationCommandPermissions: (info) => this.awaitError({ endpoint: { url: `/applications/${info.applicationId}/guilds/${info.guildId}/commands/${info.commandId}/permissions`, method: 'PUT', type: info.type }, data: info.data }),
						batchEditApplicationCommandPermissions: (info) => this.awaitError({ endpoint: { url: `/applications/${info.applicationId}/guilds/${info.guildId}/commands/permissions`, method: 'PUT', type: info.type }, data: info.data }), //DEPRECATED
							getGuildAuditLog: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/audit-logs`, method: 'GET', type: info.type }, data: info.data }),
			listAutoModerationRulesforGuild: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/auto-moderation/rules`, method: 'GET', type: info.type }, data: info.data }),
				getAutoModerationRule: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/auto-moderation/rules/${info.autoModerationRuleId}`, method: 'GET', type: info.type }, data: info.data }),
					createAutoModerationRule: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/auto-moderation/rules`, method: 'POST', type: info.type }, data: info.data }),
						modifyAutoModerationRule: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/auto-moderation/rules/${info.autoModerationRuleId}`, method: 'PATCH', type: info.type }, data: info.data }),
							deleteAutoModerationRule: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/auto-moderation/rules/${info.autoModerationRuleId}`, method: 'DELETE', type: info.type }, data: info.data }),
			getChannel: (info) => this.awaitError({ endpoint: { url: `/channels/${info.channelId}`, method: 'GET', type: info.type }, data: info.data }),
				modifyChannel: (info) => this.awaitError({ endpoint: { url: `/channels/${info.channelId}`, method: 'PATCH', type: info.type }, data: info.data }),
					deleteCloseChannel: (info) => this.awaitError({ endpoint: { url: `/channels/${info.channelId}`, method: 'DELETE', type: info.type }, data: info.data }),
						getChannelMessages: (info) => this.awaitError({ endpoint: { url: `/channels/${info.channelId}/messages`, method: 'GET', type: info.type }, data: info.data }),
							getChannelMessage: (info) => this.awaitError({ endpoint: { url: `/channels/${info.channelId}/messages/${info.messageId}`, method: 'GET', type: info.type }, data: info.data }),
			createMessage: (info) => this.awaitError({ endpoint: { url: `/channels/${info.channelId}/messages`, method: 'POST', type: info.type }, data: info.data }),
				crosspostMessage: (info) => this.awaitError({ endpoint: { url: `/channels/${info.channelId}/messages/${info.messageId}/crosspost`, method: 'POST', type: info.type }, data: info.data }),
					createReaction: (info) => this.awaitError({ endpoint: { url: `/channels/${info.channelId}/messages/${info.messageId}/reactions/${info.emoji}/@me`, method: 'PUT', type: info.type }, data: info.data }),
						deleteOwnReaction: (info) => this.awaitError({ endpoint: { url: `/channels/${info.channelId}/messages/${info.messageId}/reactions/${info.emoji}/@me`, method: 'DELETE', type: info.type }, data: info.data }),
							deleteUserReaction: (info) => this.awaitError({ endpoint: { url: `/channels/${info.channelId}/messages/${info.messageId}/reactions/${info.emoji}/${info.userId}`, method: 'DELETE', type: info.type }, data: info.data }),
			getReactions: (info) => this.awaitError({ endpoint: { url: `/channels/${info.channelId}/messages/${info.messageId}/reactions/${info.emoji}`, method: 'GET', type: info.type }, data: info.data }),
				deleteAllReactions: (info) => this.awaitError({ endpoint: { url: `/channels/${info.channelId}/messages/${info.messageId}/reactions`, method: 'DELETE', type: info.type }, data: info.data }),
					deleteAllReactionsforEmoji: (info) => this.awaitError({ endpoint: { url: `/channels/${info.channelId}/messages/${info.messageId}/reactions/${info.emoji}`, method: 'DELETE', type: info.type }, data: info.data }),
						editMessage: (info) => this.awaitError({ endpoint: { url: `/channels/${info.channelId}/messages/${info.messageId}`, method: 'PATCH', type: info.type }, data: info.data }),
							deleteMessage: (info) => this.awaitError({ endpoint: { url: `/channels/${info.channelId}/messages/${info.messageId}`, method: 'DELETE', type: info.type }, data: info.data }),
			bulkDeleteMessages: (info) => this.awaitError({ endpoint: { url: `/channels/${info.channelId}/messages/bulk-delete`, method: 'POST', type: info.type }, data: info.data }),
				editChannelPermissions: (info) => this.awaitError({ endpoint: { url: `/channels/${info.channelId}/permissions/${info.overwriteId}`, method: 'PUT', type: info.type }, data: info.data }),
					getChannelInvites: (info) => this.awaitError({ endpoint: { url: `/channels/${info.channelId}/invites`, method: 'GET', type: info.type }, data: info.data }),
						createChannelInvite: (info) => this.awaitError({ endpoint: { url: `/channels/${info.channelId}/invites`, method: 'POST', type: info.type }, data: info.data }),
							deleteChannelPermission: (info) => this.awaitError({ endpoint: { url: `/channels/${info.channelId}/permissions/${info.overwriteId}`, method: 'DELETE', type: info.type }, data: info.data }),
			followNewsChannel: (info) => this.awaitError({ endpoint: { url: `/channels/${info.channelId}/followers`, method: 'POST', type: info.type }, data: info.data }),
				triggerTypingIndicator: (info) => this.awaitError({ endpoint: { url: `/channels/${info.channelId}/typing`, method: 'POST', type: info.type }, data: info.data }),
					getPinnedMessages: (info) => this.awaitError({ endpoint: { url: `/channels/${info.channelId}/pins`, method: 'GET', type: info.type }, data: info.data }),
						pinMessage: (info) => this.awaitError({ endpoint: { url: `/channels/${info.channelId}/pins/${info.messageId}`, method: 'PUT', type: info.type }, data: info.data }),
							unpinMessage: (info) => this.awaitError({ endpoint: { url: `/channels/${info.channelId}/pins/${info.messageId}`, method: 'DELETE', type: info.type }, data: info.data }),
			groupDMAddRecipient: (info) => this.awaitError({ endpoint: { url: `/channels/${info.channelId}/recipients/${info.userId}`, method: 'PUT', type: info.type }, data: info.data }),
				groupDMRemoveRecipient: (info) => this.awaitError({ endpoint: { url: `/channels/${info.channelId}/recipients/${info.userId}`, method: 'DELETE', type: info.type }, data: info.data }),
					startThreadfromMessage: (info) => this.awaitError({ endpoint: { url: `/channels/${info.channelId}/messages/${info.messageId}/threads`, method: 'POST', type: info.type }, data: info.data }),
						startThreadwithoutMessage: (info) => this.awaitError({ endpoint: { url: `/channels/${info.channelId}/threads`, method: 'POST', type: info.type }, data: info.data }),
							startThreadinForumChannel: (info) => this.awaitError({ endpoint: { url: `/channels/${info.channelId}/threads`, method: 'POST', type: info.type }, data: info.data }),
			joinThread: (info) => this.awaitError({ endpoint: { url: `/channels/${info.channelId}/thread-members/@me`, method: 'PUT', type: info.type }, data: info.data }),
				addThreadMember: (info) => this.awaitError({ endpoint: { url: `/channels/${info.channelId}/thread-members/${info.userId}`, method: 'PUT', type: info.type }, data: info.data }),
					leaveThread: (info) => this.awaitError({ endpoint: { url: `/channels/${info.channelId}/thread-members/@me`, method: 'DELETE', type: info.type }, data: info.data }),
						removeThreadMember: (info) => this.awaitError({ endpoint: { url: `/channels/${info.channelId}/thread-members/${info.userId}`, method: 'DELETE', type: info.type }, data: info.data }),
							getThreadMember: (info) => this.awaitError({ endpoint: { url: `/channels/${info.channelId}/thread-members/${info.userId}`, method: 'GET', type: info.type }, data: info.data }),
			listThreadMembers: (info) => this.awaitError({ endpoint: { url: `/channels/${info.channelId}/thread-members`, method: 'GET', type: info.type }, data: info.data }),
				listPublicArchivedThreads: (info) => this.awaitError({ endpoint: { url: `/channels/${info.channelId}/threads/archived/public`, method: 'GET', type: info.type }, data: info.data }),
					listPrivateArchivedThreads: (info) => this.awaitError({ endpoint: { url: `/channels/${info.channelId}/threads/archived/private`, method: 'GET', type: info.type }, data: info.data }),
						listJoinedPrivateArchivedThreads: (info) => this.awaitError({ endpoint: { url: `/channels/${info.channelId}/users/@me/threads/archived/private`, method: 'GET', type: info.type }, data: info.data }),
							listGuildEmojis: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/emojis`, method: 'GET', type: info.type }, data: info.data }),
			getGuildEmoji: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/emojis/${info.emojiId}`, method: 'GET', type: info.type }, data: info.data }),
				createGuildEmoji: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/emojis`, method: 'POST', type: info.type }, data: info.data }),
					modifyGuildEmoji: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/emojis/${info.emojiId}`, method: 'PATCH', type: info.type }, data: info.data }),
						deleteGuildEmoji: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/emojis/${info.emojiId}`, method: 'DELETE', type: info.type }, data: info.data }),
							createGuild: (info) => this.awaitError({ endpoint: { url: `/guilds`, method: 'POST', type: info.type }, data: info.data }),
			getGuild: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}`, method: 'GET', type: info.type }, data: info.data }),
				getGuildPreview: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/preview`, method: 'GET', type: info.type }, data: info.data }),
					modifyGuild: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}`, method: 'PATCH', type: info.type }, data: info.data }),
						deleteGuild: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}`, method: 'DELETE', type: info.type }, data: info.data }),
							getGuildChannels: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/channels`, method: 'GET', type: info.type }, data: info.data }),
			createGuildChannel: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/channels`, method: 'POST', type: info.type }, data: info.data }),
				modifyGuildChannelPositions: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/channels`, method: 'PATCH', type: info.type }, data: info.data }),
					listActiveGuildThreads: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/threads/active`, method: 'GET', type: info.type }, data: info.data }),
						getGuildMember: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/members/${info.userId}`, method: 'GET', type: info.type }, data: info.data }),
							listGuildMembers: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/members`, method: 'GET', type: info.type }, data: info.data }),
			searchGuildMembers: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/members/search`, method: 'GET', type: info.type }, data: info.data }),
				addGuildMember: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/members/${info.userId}`, method: 'PUT', type: info.type }, data: info.data }),
					modifyGuildMember: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/members/${info.userId}`, method: 'PATCH', type: info.type }, data: info.data }),
						modifyCurrentMember: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/members/@me`, method: 'PATCH', type: info.type }, data: info.data }),
							modifyCurrentUserNick: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/members/@me/nick`, method: 'PATCH', type: info.type }, data: info.data }), //DEPRECATED
			addGuildMemberRole: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/members/${info.userId}/roles/${info.roleId}`, method: 'PUT', type: info.type }, data: info.data }),
				removeGuildMemberRole: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/members/${info.userId}/roles/${info.roleId}`, method: 'DELETE', type: info.type }, data: info.data }),
					removeGuildMember: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/members/${info.userId}`, method: 'DELETE', type: info.type }, data: info.data }),
						getGuildBans: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/bans`, method: 'GET', type: info.type }, data: info.data }),
							getGuildBan: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/bans/${info.userId}`, method: 'GET', type: info.type }, data: info.data }),
			createGuildBan: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/bans/${info.userId}`, method: 'PUT', type: info.type }, data: info.data }),
				removeGuildBan: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/bans/${info.userId}`, method: 'DELETE', type: info.type }, data: info.data }),
					getGuildRoles: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/roles`, method: 'GET', type: info.type }, data: info.data }),
						createGuildRole: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/roles`, method: 'POST', type: info.type }, data: info.data }),
							modifyGuildRolePositions: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/roles`, method: 'PATCH', type: info.type }, data: info.data }),
			modifyGuildRole: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/roles/${info.roleId}`, method: 'PATCH', type: info.type }, data: info.data }),
				modifyGuildMFALevel: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/mfa`, method: 'POST', type: info.type }, data: info.data }),
					deleteGuildRole: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/roles/${info.roleId}`, method: 'DELETE', type: info.type }, data: info.data }),
						getGuildPruneCount: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/prune`, method: 'GET', type: info.type }, data: info.data }),
							beginGuildPrune: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/prune`, method: 'POST', type: info.type }, data: info.data }),
			getGuildVoiceRegions: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/regions`, method: 'GET', type: info.type }, data: info.data }),
				getGuildInvites: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/invites`, method: 'GET', type: info.type }, data: info.data }),
					getGuildIntegrations: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/integrations`, method: 'GET', type: info.type }, data: info.data }),
						deleteGuildIntegration: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/integrations/{integration.id}`, method: 'DELETE', type: info.type }, data: info.data }),
							getGuildWidgetSettings: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/widget`, method: 'GET', type: info.type }, data: info.data }),
			modifyGuildWidget: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/widget`, method: 'PATCH', type: info.type }, data: info.data }),
				getGuildWidget: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/widget.json`, method: 'GET', type: info.type }, data: info.data }),
					getGuildVanityURL: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/vanity-url`, method: 'GET', type: info.type }, data: info.data }),
						getGuildWidgetImage: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/widget.png`, method: 'GET', type: info.type }, data: info.data }),
							getGuildWelcomeScreen: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/welcome-screen`, method: 'GET', type: info.type }, data: info.data }),
			modifyGuildWelcomeScreen: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/welcome-screen`, method: 'PATCH', type: info.type }, data: info.data }),
				modifyCurrentUserVoiceState: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/voice-states/@me`, method: 'PATCH', type: info.type }, data: info.data }),
					modifyUserVoiceState: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/voice-states/${info.userId}`, method: 'PATCH', type: info.type }, data: info.data }),
						listScheduledEventsforGuild: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/scheduled-events`, method: 'GET', type: info.type }, data: info.data }),
							createGuildScheduledEvent: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/scheduled-events`, method: 'POST', type: info.type }, data: info.data }),
			getGuildScheduledEvent: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/scheduled-events/${info.guildScheduledEventId}`, method: 'GET', type: info.type }, data: info.data }),
				modifyGuildScheduledEvent: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/scheduled-events/${info.guildScheduledEventId}`, method: 'PATCH', type: info.type }, data: info.data }),
					deleteGuildScheduledEvent: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/scheduled-events/${info.guildScheduledEventId}`, method: 'DELETE', type: info.type }, data: info.data }),
						getGuildScheduledEventUsers: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/scheduled-events/${info.guildScheduledEventId}/users`, method: 'GET', type: info.type }, data: info.data }),
							getGuildTemplate: (info) => this.awaitError({ endpoint: { url: `/guilds/templates/${info.templateCode}`, method: 'GET', type: info.type }, data: info.data }),
			createGuildfromGuildTemplate: (info) => this.awaitError({ endpoint: { url: `/guilds/templates/${info.templateCode}`, method: 'POST', type: info.type }, data: info.data }),
				getGuildTemplates: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/templates`, method: 'GET', type: info.type }, data: info.data }),
					createGuildTemplate: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/templates`, method: 'POST', type: info.type }, data: info.data }),
						syncGuildTemplate: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/templates/${info.templateCode}`, method: 'PUT', type: info.type }, data: info.data }),
							modifyGuildTemplate: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/templates/${info.templateCode}`, method: 'PATCH', type: info.type }, data: info.data }),
			deleteGuildTemplate: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/templates/${info.templateCode}`, method: 'DELETE', type: info.type }, data: info.data }),
				getInvite: (info) => this.awaitError({ endpoint: { url: `/invites/${info.inviteCode}`, method: 'GET', type: info.type }, data: info.data }),
					deleteInvite: (info) => this.awaitError({ endpoint: { url: `/invites/${info.inviteCode}`, method: 'DELETE', type: info.type }, data: info.data }),
						createStageInstance: (info) => this.awaitError({ endpoint: { url: `/stage-instances`, method: 'POST', type: info.type }, data: info.data }),
							getStageInstance: (info) => this.awaitError({ endpoint: { url: `/stage-instances/${info.channelId}`, method: 'GET', type: info.type }, data: info.data }),
			modifyStageInstance: (info) => this.awaitError({ endpoint: { url: `/stage-instances/${info.channelId}`, method: 'PATCH', type: info.type }, data: info.data }),
				deleteStageInstance: (info) => this.awaitError({ endpoint: { url: `/stage-instances/${info.channelId}`, method: 'DELETE', type: info.type }, data: info.data }),
					getSticker: (info) => this.awaitError({ endpoint: { url: `/stickers/${info.stickerId}`, method: 'GET', type: info.type }, data: info.data }),
						listNitroStickerPacks: (info) => this.awaitError({ endpoint: { url: `/sticker-packs`, method: 'GET', type: info.type }, data: info.data }),
							listGuildStickers: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/stickers`, method: 'GET', type: info.type }, data: info.data }),
			getGuildSticker: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/stickers/${info.stickerId}`, method: 'GET', type: info.type }, data: info.data }),
				createGuildSticker: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/stickers`, method: 'POST', type: info.type }, data: info.data }),
					modifyGuildSticker: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/stickers/${info.stickerId}`, method: 'PATCH', type: info.type }, data: info.data }),
						deleteGuildSticker: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/stickers/${info.stickerId}`, method: 'DELETE', type: info.type }, data: info.data }),
							getCurrentUser: (info) => this.awaitError({ endpoint: { url: `/users/@me`, method: 'GET', type: info.type }, data: info.data }),
			getUser: (info) => this.awaitError({ endpoint: { url: `/users/${info.userId}`, method: 'GET', type: info.type }, data: info.data }),
				modifyCurrentUser: (info) => this.awaitError({ endpoint: { url: `/users/@me`, method: 'PATCH', type: info.type }, data: info.data }),
					getCurrentUserGuilds: (info) => this.awaitError({ endpoint: { url: `/users/@me/guilds`, method: 'GET', type: info.type }, data: info.data }),
						getCurrentUserGuildMember: (info) => this.awaitError({ endpoint: { url: `/users/@me/guilds/${info.guildId}/member`, method: 'GET', type: info.type }, data: info.data }),
							leaveGuild: (info) => this.awaitError({ endpoint: { url: `/users/@me/guilds/${info.guildId}`, method: 'DELETE', type: info.type }, data: info.data }),
			createDM: (info) => this.awaitError({ endpoint: { url: `/users/@me/channels`, method: 'POST', type: info.type }, data: info.data }),
				createGroupDM: (info) => this.awaitError({ endpoint: { url: `/users/@me/channels`, method: 'POST', type: info.type }, data: info.data }),
					getUserConnection: (info) => this.awaitError({ endpoint: { url: `/users/@me/connections`, method: 'GET', type: info.type }, data: info.data }),
						listVoiceRegions: (info) => this.awaitError({ endpoint: { url: `/voice/regions`, method: 'GET', type: info.type }, data: info.data }),
							createWebhook: (info) => this.awaitError({ endpoint: { url: `/channels/${info.channelId}/webhooks`, method: 'POST', type: info.type }, data: info.data }),
			getChannelWebhooks: (info) => this.awaitError({ endpoint: { url: `/channels/${info.channelId}/webhooks`, method: 'GET', type: info.type }, data: info.data }),
				getGuildWebhooks: (info) => this.awaitError({ endpoint: { url: `/guilds/${info.guildId}/webhooks`, method: 'GET', type: info.type }, data: info.data }),
					getWebhook: (info) => this.awaitError({ endpoint: { url: `/webhooks/${info.webhookId}`, method: 'GET', type: info.type }, data: info.data }),
						getWebhookwithToken: (info) => this.awaitError({ endpoint: { url: `/webhooks/${info.webhookId}/${info.webhookToken}`, method: 'GET', type: info.type }, data: info.data }),
							modifyWebhook: (info) => this.awaitError({ endpoint: { url: `/webhooks/${info.webhookId}`, method: 'PATCH', type: info.type }, data: info.data }),
			modifyWebhookwithToken: (info) => this.awaitError({ endpoint: { url: `/webhooks/${info.webhookId}/${info.webhookToken}`, method: 'PATCH', type: info.type }, data: info.data }),
				deleteWebhook: (info) => this.awaitError({ endpoint: { url: `/webhooks/${info.webhookId}`, method: 'DELETE', type: info.type }, data: info.data }),
					deleteWebhookwithToken: (info) => this.awaitError({ endpoint: { url: `/webhooks/${info.webhookId}/${info.webhookToken}`, method: 'DELETE', type: info.type }, data: info.data }),
						executeWebhook: (info) => this.awaitError({ endpoint: { url: `/webhooks/${info.webhookId}/${info.webhookToken}`, method: 'POST', type: info.type }, data: info.data }),
							executeSlackCompatibleWebhook: (info) => this.awaitError({ endpoint: { url: `/webhooks/${info.webhookId}/${info.webhookToken}/slack`, method: 'POST', type: info.type }, data: info.data }),
			executeGitHubCompatibleWebhook: (info) => this.awaitError({ endpoint: { url: `/webhooks/${info.webhookId}/${info.webhookToken}/github`, method: 'POST', type: info.type }, data: info.data }),
				getWebhookMessage: (info) => this.awaitError({ endpoint: { url: `/webhooks/${info.webhookId}/${info.webhookToken}/messages/${info.messageId}`, method: 'GET', type: info.type }, data: info.data }),
					editWebhookMessage: (info) => this.awaitError({ endpoint: { url: `/webhooks/${info.webhookId}/${info.webhookToken}/messages/${info.messageId}`, method: 'PATCH', type: info.type }, data: info.data }),
						deleteWebhookMessage: (info) => this.awaitError({ endpoint: { url: `/webhooks/${info.webhookId}/${info.webhookToken}/messages/${info.messageId}`, method: 'DELETE', type: info.type }, data: info.data }),
		};
			//Object.keys(this.endPoints).forEach(function(k){ console.log(k); });
	}
		async awaitError(info) { try { return fly.send(info.data, `/api/v10/${info.endpoint.url}`, info.endpoint.method, 'discord.com', 443, { 'Content-Type': info.endpoint.type, Authorization: `Bot ${token}` }); } catch (error) { throw new Error(error); } }
			async call(endName, data) { try { return this.endPoints[endName](data); } catch (error) { throw newError.error(error); } }
}
module.exports = endPointConstruct;
