/*	Get information about the channel you specify.	*/
channel
	.chanGet({	channel: 'channelId'	});

/*	name is the channel name and may be between 1 and 100 characters.
		position is the left hand listing position.
		nsfw is to select if the channel is safe for work or not.
		topic is the channel topic and may be between 0 and 1024 characters.
		rate_limit_per_user is the length between messages send in seconds may be between 0 and 21600.
		permission_overwrites refer to permissionObject for more info.
		type is 0 for text channel or 5 for news channel.
		parent_id is to select which category this channel falls under, you use the category ID.
		default_auto_archive_duration is the standard archive time for new threads within the channel 
			may be 60, 1440, 4320 or 10080.	*/
channel
	.chanEdit({ channel: 'channelId',
							name: 'channelName',
							type: INTEGER,
							position: INTEGER,
							topic: 'Channel Topic Text',
							nsfw: BOOLEAN,
							rate_limit_per_user: INTEGER,
							permission_overwrites: permissionObject,
							parent_id: 'categoryId',
							default_auto_archive_duration: INTEGER });

/*	name is the channel name and may be between 1 and 100 characters.
		position is the left hand listing position.
		nsfw is to select if the channel is safe for work or not.
		bitrate is the quality of the audio ranges from 8000 up to 384000.
		user_limit is the max amount of users that may be in a channel ranges from 1 to 99.
		permission_overwrites refer to permissionObject for more info.
		parent_id is to select which category this channel falls under, you use the category ID.
		video_quality_mode is 0 for automatic and 1 for highest quality.	*/
channel
	.voiceChanEdit({	channel: 'channelId',
										name: 'channelName',
										position: INTEGER,
										nsfw: BOOLEAN,
										bitrate: INTEGER,
										user_limit: INTEGER,
										permission_overwrites: permissionObject,
										parent_id: 'categoryId',
										video_quality_mode: INTEGER	});

/*	name is the channel name and may be between 1 and 100 characters.
		icon is just an image, you can write down the path to your icon.	*/
channel
	.groupDMEdit({	channel: 'channelId',
									name: 'channelName',
									icon: 'fileName.ext'	});			

/*	name is the channel name and may be between 1 and 100 characters.
		archived is a boolean that tells us if the thread is archived or not.
		auto_archive_duration means when the thread will auto archive, options are 60, 1440, 4320 and 10080.
		rate_limit_per_user is the length between messages send in seconds may be between 0 and 21600.
		permission_overwrites refer to permissionObject for more info.
		invitable is a boolean that decides if users can be invited or not to the thread.
		flags can only be used on a forum thread channel, this basically allows you to pin the thread. (1 << 1 = 2)	*/
channel
	.threadEdit({ channel: 'channelId',
								name: 'threadName',
								archived: BOOLEAN,
								auto_archive_duration: INTEGER,
								locked: BOOLEAN,
								invitable: BOOLEAN,
								rate_limit_per_user: INTEGER,
								flags: 2 });			

/*	Delete a channel using the channel ID.	*/
channel
	.chanDelete({	channel: 'channelId'	});			

/*	All entries but channel can be ommited.
		around means specified message limit around the messageId.
		before means specified message limit before the messageId.
		after means specified message limit after the messageId.
		limit is a number between 1 and 100.	*/
channel
	.chanGetMessages({	channel: 'channelId',
											around: 'messageId',
											before: 'messageId',
											after: 'messageId',
											limit: INTEGER	});			

/*	Get the message object by messageId.	*/
channel
	.chanGetMessage({ channel: 'channelId',
										message: 'messageId'	});			

/*	Either one or more, but not zero of the following entries need to be specified: content, embeds, attachments.
		content is a string which may be up to 2000 characters.
		tts if true means it's text to speech.
		reference needs both a messageId and guildId.
		sticker is an array of stickerId's.
		components refer to componentObject and componentObject2.
		embeds refer to embedObject.
		attachments refer to attachmentObject.
		*/
channel
	.msgSend({	content: 'Message Content',
							channel: 'channelId',
							components: componentObject,
							embeds: embedObject,
							tts: BOOLEAN,
							reference: {message_id: 'messageId', guild_id: 'guildId'},
							sticker: ['stickerId'],
							attachments: attachmentObject	});			

channel
	.crossPostMsg({ channel: 'channelId',
									message: 'messageId' });			

/*	emoji is monkas:629319635950370829 OR unicode emoji	*/
channel
	.createReaction({ channel: 'channelId',
										message: 'messageId',
										emoji: 'emoji' });			
										
/*	emoji is monkas:629319635950370829 OR unicode emoji	*/
channel
	.deleteSelfReaction({ channel: 'channelId',
												message: 'messageId',
												emoji: 'emoji' });			

/*	emoji is monkas:629319635950370829 OR unicode emoji	*/
channel
	.deleteReaction({ channel: 'channelId',
										message: 'messageId',
										emoji: 'emoji', 
										user: 'userId' });			

/*	emoji is monkas:629319635950370829 OR unicode emoji	*/
channel
	.getReactions({ channel: 'channelId',
									message: 'messageId',
									emoji: 'emoji', 
									limit: INTEGER });			

channel
	.deleteAllReactions({ channel: 'channelId',
												message: 'messageId' });			

/*	emoji is monkas:629319635950370829 OR unicode emoji	*/
channel
	.deleteAllReactionsEmoji({	channel: 'channelId',
															message: 'messageId',
															emoji: 'emoji'	});			

channel
	.msgEdit({	content: 'Message Content',
							id: 'messageId',
							channel: 'channelId',
							components: componentObject,
							embeds: embedObject,
							attachments: attachments	});			

channel
	.msgDelete({	channel: 'channelId',
								message: 'messageId'	});			

/*	messages expects an array of message ID's	*/
channel
	.msgBulkDelete({	channel: 'channelId',
										messages: []	});			

/*	type expects either 0 for role or 1 for member	*/
channel.
	channelPermOverwrite({	channel: 'channelId',
													target: 'userId or roleId',
													permission_overwrites: permissionObject,
													type: INTEGER	});				

channel.
	getChanInvites({	channel: 'channelId'	});				

channel.
	createChanInvite({	channel: 'channelId',
											maxAge: INTEGER,
											maxUses: INTEGER,
											temp: BOOLEAN,
											unique: BOOLEAN,
											targetType: INTEGER,
											targetUserId: 'userId',
											targetAppId: 'applicationId'	});				

channel.
	deleteChannelPerm({ channel: 'channelId',
											user: 'userId' });				

channel.
	followNewsChannel({ channel: 'channelId',
											followId: 'idOfChannelToFollow' });				

channel.
	triggerTyping({	channel: 'channelId'	});				

channel.
	getPinnedMessages({	channel: 'channelId'	});				

channel.
	pinMessage({	channel: 'channelId',
								message: 'messageId'	});				

channel.
	unpinMessage({	channel: 'channelId',
									message: 'messageId'	});				

channel.
	groupDmAddUser({	channel: 'channelId',
										user: 'userId',
										nick: 'userNickname',
										access_token: 'tokenId'	});				

channel.
	groupDmRemoveUser({ channel: 'channelId',
											user: 'userId' });		

channel.
	createThreadAtMsg({ channel: 'channelId',
											message: 'messageId',
											name: 'threadName',
											auto_archive_duration: INTEGER,
											rate_limit_per_user: INTEGER });				

channel.
	createThread({	channel: 'channelId',
									name: 'threadName',
									auto_archive_duration: INTEGER,
									rate_limit_per_user: INTEGER,
									type: INTEGER,
									invitable: BOOLEAN	});				

channel.
	createForumThread({ channel: 'channelId',
											name: 'threadName',
											auto_archive_duration: INTEGER,
											rate_limit_per_user: INTEGER,
											message: messageObject });				

channel.
	joinThread({	channel: 'channelId'	});				

channel.
	userJoinThread({	channel: 'channelId',
										user: 'userId'	});				

channel.
	leaveThread({	channel: 'channelId'	});				

channel.
	userLeaveThread({ channel: 'channelId',
										user: 'userId' });				

channel.
	getThreadMember({ channel: 'channelId',
										user: 'userId' });				

channel.
	listThreadMembers({	channel: 'channelId'	});				

channel.
	listPublicArchivedThreads({ channel: 'channelId',
															before: ISO8601Timestamp,
															limit: INTEGER });				

channel.
	listPrivateArchivedThreads({	channel: 'channelId',
																before: ISO8601Timestamp,
																limit: INTEGER	});			

channel.
	listJoinedPrivateArchivedThreads({	channel: 'channelId',
																			before: ISO8601Timestamp,
																			limit: INTEGER	});		

/*	Additional information	*/

/*	The object itself is an array, in the array you place json structures.
		the ID entry is either a roleId or userId, then the type must correspond 0 for role and 1 for member.
		the allow and deny entries both are arrays, within them you put the permissions you want to allow or deny.	
		refer to permissionArray for permission allow/deny possibilities.	*/
let permissionObject = [
												{ id: 'roleId',
													type: 0,
													allow: [],
													deny: [] },
												{ id: 'userId',
													type: 1,
													allow: [],
													deny: [] }
											 ];

let permissionArray = [ 'createInstantInvite', 'kickMembers', 'banMembers', 'administrator', 'manageChannels', 
												'manageGuild', 'addReactions', 'viewAuditLog', 'prioritySpeaker', 'stream', 'viewChannel', 
												'sendMessages', 'sendTtsMessages', 'manageMessages', 'embedLinks', 'attachFiles', 'readMessageHistory', 
												'mentionEveryone', 'useExternalEmojis', 'viewGuildInsights', 'connect', 'speak', 'muteMembers', 
												'deafenMembers', 'moveMembers', 'useVad', 'changeNickname', 'manageNicknames', 'manageRoles', 
												'manageWebhooks', 'manageEmojisAndStickers', 'useApplicationCommands', 'requestToSpeak', 
												'manageEvents', 'manageThreads', 'createPublicThreads', 'createPrivateThreads', 'useExternalStickers', 
												'sendMessagesInThreads', 'useEmbeddedActivities', 'moderateMembers' ];

/*	the attachment object is an array and in the array each entry is a JSON structure.
		file is the file you want to send, make sure to specify the path properly, accepts full as wel as partial paths.
		description is somewhat like an alt for images.
		filename is what Discord will display as its filename, use the same extention as your file though.	
		using something like attachment://filename in an embed image/icon field will display the uploaded image.	*/
let attachmentObject = [
												{	file: 'fileName.ext',
													description: 'first attachment',
													filename: 'fileName.ext'	},
												{	file: 'fileName.ext',
													description: 'second attachment',
													filename: 'fileName.ext'	}
											 ];

/*	!!!!!!!!! https://discord.com/developers/docs/interactions/message-components#component-object-component-types !!!!!!!	*/
let componentObject = new component()
													.menu({ custom_id: 'UniqueID', 
																	place_holder: 'Unique', 
																	min_val: 1, 
																	max_val: 3 })
													.entry({	label: 'Unique Label', 
																		value: 'UniqueVAL', 
																		description: 'Unique Description', 
																		default: true, 
																		emoji: { id: "EmojiID" } })
													.entry({	label: 'Unique Label', 
																		value: 'UniqueVAL', 
																		description: 'Unique Description', 
																		default: false })
													.entry({	label: 'Unique Label', 
																		value: 'UniqueVAL', 
																		description: 'Unique Description', 
																		default: false })
													.output;

let componentObject2 = new component()
														.button({ label: 'Unique Label', 
																			custom_id: 'UniqueID', 
																			style: 1, 
																			disabled: true })
														.button({ label: 'Unique Label', 
																			custom_id: 'UniqueID', 
																			style: 2 })
														.button({ label: 'Unique Label', 
																			custom_id: 'UniqueID', 
																			style: 3 })
														.button({ label: 'Unique Label', 
																			custom_id: 'UniqueID', 
																			style: 4, 
																			emoji: { id: 'EmojiID' } })
														.button({ label: 'Unique Label', 
																			style: 5, 
																			url: 'https://artemis.rest' })
														.output;

let embedObject = new embed()
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