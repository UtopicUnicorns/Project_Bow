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
				if(msg.permission_overwrites) formMessage['permission_overwrites'] = msg.permission_overwrites;
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
				if(msg.icon) formMessage['icon'] = msg.icon; //Base64 encoded
					return exit.call('modifyChannel', {channelId: msg.channel ,data: JSON.stringify(formMessage), type: `application/json`});
	}
	
	threadEdit(msg) {
		let formMessage = {};
			return exit.call('modifyChannel', {channelId: msg.channel ,data: JSON.stringify(formMessage), type: `application/json`});
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

	msgEdit(msg) {
		if (!msg) return 'No message object, please correct your mistake.';
			let formMessage = {};
				if (msg.content) formMessage['content'] = msg.content;
					if (msg.components) formMessage['components'] = [msg.components];
						if (msg.embeds) formMessage['embeds'] = [msg.embeds];
		let uploadData = this.readyMessageUpload(msg, formMessage);
			return exit.call('editMessage', {channelId: msg.channel, messageId: msg.id ,data: uploadData[0], type: `multipart/form-data; boundary=${uploadData[1]}`});
	}
}

module.exports = channelConstruct;
