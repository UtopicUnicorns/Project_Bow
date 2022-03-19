class message_construct {
	send(message) {
		if (!message) return 'No message object, please correct your mistake.';

		let constructed_message = {};
		let message_images_details = [];
		const fields = {};

		if (message.content) constructed_message['content'] = message.content;
		if (message.components) constructed_message['components'] = [message.components];
		if (message.embeds) constructed_message['embeds'] = [message.embeds];
		if (message.tts) constructed_message['tts'] = message.tts;
		if (message.reference) constructed_message['message_reference'] = message.reference;
		if (message.sticker) constructed_message['sticker_ids'] = message.sticker;
		if (message.flags) constructed_message['flags'] = message.flags;
		if (message.attachments) {
			for (let i of message.attachments) {
				let ext = path.extname(i.file.toLowerCase());
				let mime_type = mime.type(ext);

				let attachment_construct = {
					id: message_images_details.length,
					description: i.description,
					filename: i.filename,
				};

				fields[`files[${message_images_details.length}]`] = {
					name: i.file,
					type: mime_type,
					data: fs.readFileSync(i.file),
				};

				message_images_details.push(attachment_construct);
			}

			constructed_message['attachments'] = message_images_details;
		}

		fields['payload_json'] = JSON.stringify(constructed_message);

		const boundary = fd.generateBoundary();
		const header = { 'Content-Type': `multipart/form-data; boundary=${boundary}` };
		const body = fd(fields, boundary);
		let fetcher = [];

		for (let i of body) {
			fetcher.push(Buffer.from(i));
		}

		let newBuffer = Buffer.concat(fetcher);

		return fly.send(newBuffer, `/api/channels/${message.channel}/messages`, 'POST', 'discord.com', 443, { 'Content-Type': `multipart/form-data; boundary=${boundary}`, Authorization: `Bot ${token}`, });
	}

	edit(message) {
		let constructed_message = {
			content: message.content,
			components: [message.components],
			embeds: [message.embeds],
			tts: message.tts,
			message_reference: message.reference,
			sticker_ids: message.sticker,
			files: message.files,
			flags: message.flags,
			attachments: message.attachments,
			payload_json: message.payload,
			allowed_mentions: {
				parse: [],
			},
		};

		if (!message.embeds) delete constructed_message['embeds'];
		if (!message.components) delete constructed_message['components'];
		if (!message.content) delete constructed_message['content'];
		if (!message.tts) delete constructed_message['tts'];
		if (!message.reference) delete constructed_message['message_reference'];
		if (!message.flags) delete constructed_message['flags'];
		if (!message.sticker) delete constructed_message['sticker_ids'];
		if (!message.files) delete constructed_message['files'];
		if (!message.attachments) delete constructed_message['attachments'];
		if (!message.payload) delete constructed_message['payload_json'];

		return fly.send(JSON.stringify(constructed_message), `/api/channels/${message.channel}/messages/${message.id}`, 'PATCH', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}

	react(message) {
		return fly.send(JSON.stringify(constructed_message), `/api/channels/${message.channel}/messages/${message.id}/reactions/${message.emoji}/@me`, 'PUT', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}

	react_delete_self(message) {
		return fly.send(JSON.stringify(constructed_message), `/api/channels/${message.channel}/messages/${message.id}/reactions/${message.emoji}/@me`, 'DELETE', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}

	react_delete(message) {
		return fly.send(JSON.stringify(constructed_message), `/api/channels/${message.channel}/messages/${message.id}/reactions/${message.emoji}/${message.user}`, 'DELETE', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}

	react_delete_all(message) {
		return fly.send(JSON.stringify(constructed_message), `/api/channels/${message.channel}/messages/${message.id}/reactions`, 'DELETE', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}

	react_delete_emoji(message) {
		return fly.send(JSON.stringify(constructed_message), `/api/channels/${message.channel}/messages/${message.id}/reactions/${message.emoji}`, 'DELETE', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}

	reactions(message) {
		return fly.send(JSON.stringify(constructed_message), `/api/channels/${message.channel}/messages/${message.id}/reactions/${message.emoji}`, 'GET', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}

	delete(message) {
		let constructed_message = {
			channel: message.channel,
			id: message.id,
			reason: message.reason,
		};

		if (!message.reason) delete constructed_message['reason'];
		if (!message.channel) delete constructed_message['channel'];
		if (!message.id) delete constructed_message['id'];

		return fly.send(JSON.stringify(constructed_message), `/api/channels/${message.channel}/messages/${message.id}`, 'DELETE', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}

	bulk_delete(message) {
		let constructed_message = {
			messages: message.array,
		};

		return fly.send(JSON.stringify(constructed_message), `/api/channels/${message.channel}/messages/bulk-delete`, 'POST', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}

	interaction(reply, message) {
		let constructed_message = {
			type: reply.type,
			data: {
				content: reply.content,
				components: [reply.components],
				embeds: [reply.embeds],
				tts: reply.tts,
				message_reference: reply.reference,
				sticker_ids: reply.sticker,
				files: reply.files,
				flags: reply.flags,
				attachments: reply.attachments,
				payload_json: reply.payload,
				allowed_mentions: {
					parse: [],
				},
			},
		};

		if (!reply.embeds) delete constructed_message.data['embeds'];
		if (!reply.components) delete constructed_message.data['components'];
		if (!reply.content) delete constructed_message.data['content'];
		if (!reply.tts) delete constructed_message.data['tts'];
		if (!reply.reference) delete constructed_message.data['message_reference'];
		if (!reply.flags) delete constructed_message.data['flags'];
		if (!reply.sticker) delete constructed_message.data['sticker_ids'];
		if (!reply.files) delete constructed_message.data['files'];
		if (!reply.attachments) delete constructed_message.data['attachments'];
		if (!reply.payload) delete constructed_message.data['payload_json'];
		if (!reply.type) delete constructed_message['type'];

		console.log(constructed_message);

		return fly.send(JSON.stringify(constructed_message), `/api/interactions/${message.message.d.id}/${message.message.d.token}/callback`, 'POST', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}
}

module.exports = message_construct;
