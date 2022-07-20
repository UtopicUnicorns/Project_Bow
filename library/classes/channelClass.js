class channelConstruct {
	readyMessageUpload(upload, message) {
		let uploads = [];
			let fields = {};	
				if(upload.attachments) {
					for (let i of upload.attachments) {
						let ext = path.extname(i.file.toLowerCase());
						let mime_type = mime.type(ext);
						let attachmentConstruct = {
							id: uploads.length,
							description: i.description,
							filename: i.filename,
						};
						fields[`files[${uploads.length}]`] = {
							name: i.filename,
							type: mime_type,
							data: fs.readFileSync(i.file),
						};
						uploads.push(attachmentConstruct);
					}
				}
					fields['payload_json'] = JSON.stringify(message);
						const boundary = fd.generateBoundary();
		const header = { 'Content-Type': `multipart/form-data; boundary=${boundary}` };
			const contentType = `multipart/form-data; boundary=${boundary}`;
				const body = fd(fields, boundary);
					let fetcher = [];
						for (let i of body) { fetcher.push(Buffer.from(i)); }
		let newBuffer = Buffer.concat(fetcher);
			return [newBuffer, contentType];
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

	chanGet(msg) {
		return exit.call('getChannel', {channelId: msg.channel ,data: '', type: `application/json`});
	}
	
	chanEdit(msg) {
		let formMessage = {};
			if(msg.name) formMessage['name'] = msg.name;
				if(msg.type) formMessage['type'] = msg.type;
					if(msg.position) formMessage['position'] = msg.position;
						if(msg.topic) formMessage['topic'] = msg.topic;
		if(msg.nsfw) formMessage['nsfw'] = msg.nsfw;
			if(msg.rate_limit_per_user) formMessage['rate_limit_per_user'] = msg.rate_limit_per_user;
				if(msg.permission_overwrites) formMessage['permission_overwrites'] = this.readyPermissions(msg.permission_overwrites);
					if(msg.parent_id) formMessage['parent_id'] = msg.parent_id;
						if(msg.default_auto_archive_duration) formMessage['default_auto_archive_duration'] = msg.default_auto_archive_duration;
		return exit.call('modifyChannel', {channelId: msg.channel ,data: JSON.stringify(formMessage), type: `application/json`});
	}
	
	voiceChanEdit(msg) {
		let formMessage = {};
			if(msg.name) formMessage['name'] = msg.name;
				if(msg.position) formMessage['position'] = msg.position;
					if(msg.nsfw) formMessage['nsfw'] = msg.nsfw;
						if(msg.bitrate) formMessage['bitrate'] = msg.bitrate;
		if(msg.user_limit) formMessage['user_limit'] = msg.user_limit;
			if(msg.permission_overwrites) formMessage['permission_overwrites'] = msg.permission_overwrites;
				if(msg.parent_id) formMessage['parent_id'] = msg.parent_id;
					if(msg.rtc_region) formMessage['rtc_region'] = msg.rtc_region;
						if(msg.video_quality_mode) formMessage['video_quality_mode'] = msg.video_quality_mode;
		return exit.call('modifyChannel', {channelId: msg.channel ,data: JSON.stringify(formMessage), type: `application/json`});
	}
	
	groupDMEdit(msg) {
		let formMessage = {};
			if(msg.name) formMessage['name'] = msg.name;
				if(msg.icon) formMessage['icon'] = msg.icon;
					return exit.call('modifyChannel', {channelId: msg.channel ,data: JSON.stringify(formMessage), type: `application/json`});
	}
	
	threadEdit(msg) {
		let formMessage = {};
			if(msg.name) formMessage['name'] = msg.name;
				if(msg.archived) formMessage['archived'] = msg.archived;
					if(msg.auto_archive_duration) formMessage['auto_archive_duration'] = msg.auto_archive_duration;
						if(msg.locked) formMessage['locked'] = msg.locked;
							if(msg.invitable) formMessage['invitable'] = msg.invitable;
			if(msg.rate_limit_per_user) formMessage['rate_limit_per_user'] = msg.rate_limit_per_user;
				if(msg.flags) formMessage['flags'] = msg.flags;
					return exit.call('modifyChannel', {channelId: msg.channel ,data: JSON.stringify(formMessage), type: `application/json`});
	}
	
	chanDelete(msg) {
		return exit.call('deleteCloseChannel', {channelId: msg.channel ,data: '', type: `application/json`});
	}
	
	chanGetMessages(msg) {
		let formMessage = {};
			if(msg.around) formMessage['around'] = msg.around;
				if(msg.before) formMessage['before'] = msg.before;
					if(msg.after) formMessage['after'] = msg.after;
						if(msg.limit) formMessage['limit'] = msg.limit;
							return exit.call('getChannelMessages', {channelId: msg.channel ,data: JSON.stringify(formMessage), type: `application/json`});
	}
	
	chanGetMessage(msg) {
		return exit.call('getChannelMessage', {channelId: msg.channel, messageId: msg.message ,data: '', type: `application/json`});
	}
	
	msgSend(msg) {
		if (!msg) return 'No message object, please correct your mistake.';
			let formMessage = {};
				if (msg.content) formMessage['content'] = msg.content;
					if (msg.components) formMessage['components'] = [msg.components];
						if (msg.embeds) formMessage['embeds'] = [msg.embeds];
		if (msg.tts) formMessage['tts'] = msg.tts;
			if (msg.reference) formMessage['message_reference'] = msg.reference;
				if (msg.sticker) formMessage['sticker_ids'] = msg.sticker;
					let uploadData = this.readyMessageUpload(msg, formMessage);
						return exit.call('createMessage', {channelId: msg.channel ,data: uploadData[0], type: `multipart/form-data; boundary=${uploadData[1]}`});
	}
	
	crossPostMsg(msg) {
		return exit.call('crosspostMessage', {channelId: msg.channel, messageId: msg.message ,data: '', type: `application/json`});
	}
	
	createReaction(msg) {
		return exit.call('createReaction', {channelId: msg.channel, messageId: msg.message, emoji: encodeURIComponent(msg.emoji), data: '', type: `application/json`});
	}

	deleteSelfReaction(msg) {
		return exit.call('deleteOwnReaction', {channelId: msg.channel, messageId: msg.message, emoji: encodeURIComponent(msg.emoji), data: '', type: `application/json`});
	}
	
	deleteReaction(msg) {
		return exit.call('deleteUserReaction', {channelId: msg.channel, messageId: msg.message, emoji: encodeURIComponent(msg.emoji), userId: msg.user ,data: '', type: `application/json`});
	}

	getReactions(msg) {
		let formMessage = {};
			if(msg.after) formMessage['after'] = msg.after;
				if(msg.limit) formMessage['limit'] = msg.limit;
					return exit.call('getReactions', {channelId: msg.channel, messageId: msg.message, emoji: encodeURIComponent(msg.emoji), data: JSON.stringify(formMessage), type: `application/json`});
	}
	
	deleteAllReactions(msg) {
		return exit.call('deleteAllReactions', {channelId: msg.channel, messageId: msg.message, data: '', type: `application/json`});
	}
	
	deleteAllReactionsEmoji(msg) {
		return exit.call('deleteAllReactionsforEmoji', {channelId: msg.channel, messageId: msg.message, emoji: encodeURIComponent(msg.emoji), data: '', type: `application/json`});
	}

	msgEdit(msg) {
		if (!msg) return 'No message object, please correct your mistake.';
			let formMessage = {};
				if (msg.content) formMessage['content'] = msg.content;
					if (msg.components) formMessage['components'] = [msg.components];
						if (msg.embeds) formMessage['embeds'] = [msg.embeds];
		let uploadData = this.readyMessageUpload(msg, formMessage);
			return exit.call('editMessage', {channelId: msg.channel, messageId: msg.id ,data: uploadData[0], type: `multipart/form-data; boundary=${uploadData[1]}`});
	}
	
	msgDelete(msg) {
		return exit.call('deleteMessage', {channelId: msg.channel, messageId: msg.message, data: '', type: `application/json`});
	}
	
	msgBulkDelete(msg) {
		if (!msg) return 'No ID array, please correct your mistake.';
			let formMessage = {};
				if(msg.messages) formMessage['messages'] = msg.messages;
					return exit.call('bulkDeleteMessages', {channelId: msg.channel, data: JSON.stringify(formMessage), type: `application/json`});
	}
	
	channelPermOverwrite(msg) {
			let formMessage = {};
				if(msg.permission_overwrites) {
					let waitFor = this.readyPermissions(msg.permission_overwrites);
						if(waitFor[0].allow) formMessage['allow'] = waitFor[0].allow;
							if(waitFor[0].deny) formMessage['deny'] = waitFor[0].deny;
								if(waitFor[0].type)formMessage['type'] = waitFor[0].type;
				}
					return exit.call('editChannelPermissions', {channelId: msg.channel, overwriteId: msg.target, data: JSON.stringify(formMessage), type: `application/json`});
	}
}

module.exports = channelConstruct;
