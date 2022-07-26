channel
	.chanGet({
		channel: 'channelId'
	});
			
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
	});
				
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
	});
		
channel
	.groupDMEdit({
		channel: 'channelId',
			name: 'channelName',
				icon: Base64ImageObject,
	});			
			
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
	});			

channel
	.chanDelete({
		channel: 'channelId',
	});			

channel
	.chanGetMessages({
		channel: 'channelId',
			around: 'messageId',
				before: 'messageId',
					after: 'messageId',
						limit: INTEGER,
	});			

channel
	.chanGetMessage({
		channel: 'channelId',
			message: 'messageId',
	});			

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
	});			
			
channel
	.crossPostMsg({
		channel: 'channelId',
			message: 'messageId',
	});			

channel
	.createReaction({
		channel: 'channelId',
			message: 'messageId',
				emoji: 'emoji', //E.G: monkas:629319635950370829 OR unicode emoji
	});			

channel
	.deleteSelfReaction({
		channel: 'channelId',
			message: 'messageId',
				emoji: 'emoji', //E.G: monkas:629319635950370829 OR unicode emoji
	});			

channel
	.deleteReaction({
		channel: 'channelId',
			message: 'messageId',
				emoji: 'emoji', //E.G: monkas:629319635950370829 OR unicode emoji
					user: 'userId',
	});			

channel
	.getReactions({
		channel: 'channelId',
			message: 'messageId',
				emoji: 'emoji', //E.G: monkas:629319635950370829 OR unicode emoji
					after: 'userId',
						limit: INTEGER,
	});			
			
channel
	.deleteAllReactions({
		channel: 'channelId',
			message: 'messageId',
	});			

channel
	.deleteAllReactionsEmoji({
		channel: 'channelId',
			message: 'messageId',
				emoji: 'emoji', //E.G: monkas:629319635950370829 OR unicode emoji
	});			
			
channel
	.msgEdit({
		content: 'Message Content',
			id: 'messageId',
				channel: 'channelId',
					components: componentObject,
						embeds: embedObject,
							attachments: attachments,
	});			

channel
	.msgDelete({
		channel: 'channelId',
			message: 'messageId',
	});			

channel
	.msgBulkDelete({
		channel: 'channelId',
			messages: [], //Message ID's in array
	});			

channel.
	channelPermOverwrite({
		channel: 'channelId',
			target: 'userId or roleId',
				permission_overwrites: permissionObject,
					type: INTEGER, //0 for role, 1 for member
		});				

channel.
	getChanInvites({
		channel: 'channelId',
	});				
				
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
	});				
				
channel.
	deleteChannelPerm({
		channel: 'channelId',
			user: 'userId',
	});				
				
channel.
	followNewsChannel({
		channel: 'channelId',
			followId: 'idOfChannelToFollow',
	});				
				
channel.
	triggerTyping({
		channel: 'channelId',
	});				

channel.
	getPinnedMessages({
		channel: 'channelId',
	});				

channel.
	pinMessage({
		channel: 'channelId',
			message: 'messageId',
	});				

channel.
	unpinMessage({
		channel: 'channelId',
			message: 'messageId',
	});				
				
channel.
	groupDmAddUser({
		channel: 'channelId',
			user: 'userId',
				nick: 'userNickname',
					access_token: 'tokenId',
	});				

channel.
	groupDmRemoveUser({
		channel: 'channelId',
			user: 'userId',
	});				

channel.
	createThreadAtMsg({
		channel: 'channelId',
			message: 'messageId',
				name: 'threadName',
					auto_archive_duration: INTEGER,
						rate_limit_per_user: INTEGER,
	});				

channel.
	createThread({
		channel: 'channelId',
			name: 'threadName',
				auto_archive_duration: INTEGER,
					rate_limit_per_user: INTEGER,
						type: INTEGER,
							invitable: BOOLEAN,
	});				
				
channel.
	createForumThread({
		channel: 'channelId',
			name: 'threadName',
				auto_archive_duration: INTEGER,
					rate_limit_per_user: INTEGER,
						message: messageObject,
	});				

channel.
	joinThread({
		channel: 'channelId',
	});				

channel.
	userJoinThread({
		channel: 'channelId',
		user: 'userId',
	});				
				
channel.
	leaveThread({
		channel: 'channelId',
	});				

channel.
	userLeaveThread({
		channel: 'channelId',
		user: 'userId',
	});				

channel.
	getThreadMember({
		channel: 'channelId',
		user: 'userId',
	});				

channel.
	listThreadMembers({
		channel: 'channelId',
	});				

channel.
	listPublicArchivedThreads({
		channel: 'channelId',
			before: ISO8601Timestamp,
				limit: INTEGER,
	});				

channel.
	listPrivateArchivedThreads({
		channel: 'channelId',
			before: ISO8601Timestamp,
				limit: INTEGER,
	});			

channel.
	listJoinedPrivateArchivedThreads({
		channel: 'channelId',
			before: ISO8601Timestamp,
				limit: INTEGER,
	});		
				
