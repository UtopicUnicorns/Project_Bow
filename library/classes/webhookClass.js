class webhookConstruct {
	processAvatar(image) {
		let ext = path.extname(image.toLowerCase());
			let mime_type = mime.type(ext);
				let imageObject = fs.readFileSync(image, {encoding: 'base64'});
					let sendObject = `data:${mime_type};base64,${imageObject}`;
		return sendObject;
	}
	
	create(msg) {
		let formMessage = {};
			if(msg.name) formMessage['name'] = msg.name;
				if(msg.avatar) formMessage['avatar'] = this.processAvatar(msg.avatar);
					return exit.call('createWebhook', {channelId: msg.channel, data: JSON.stringify(formMessage), type: `application/json`});
	}
	
	getChannelHooks(msg) {
		return exit.call('getChannelWebhooks', {channelId: msg.channel, data: '', type: `application/json`});
	}
	
	getGuildHooks(msg) {
		return exit.call('getGuildWebhooks', {guildId: msg.guild, data: '', type: `application/json`});
	}
	
	getHook(msg) {
		return exit.call('getWebhook', {webhookId: msg.webhook, data: '', type: `application/json`});
	}
	
	getHookWithToken(msg) {
		return exit.call('getWebhookwithToken', {webhookId: msg.webhook, webhookToken: msg.token, data: '', type: `application/json`});
	}
	
	editHook(msg) {
		let formMessage = {};
			if(msg.name) formMessage['name'] = msg.name;
				if(msg.avatar) formMessage['avatar'] = this.processAvatar(msg.avatar);
					if(msg.channel) formMessage['channel_id'] = msg.channel;
						return exit.call('modifyWebhook', {webhookId: msg.webhook, data: JSON.stringify(formMessage), type: `application/json`});
	}
	
	editHookWithToken(msg) {
		let formMessage = {};
			if(msg.name) formMessage['name'] = msg.name;
				if(msg.avatar) formMessage['avatar'] = this.processAvatar(msg.avatar);
					if(msg.channel) formMessage['channel_id'] = msg.channel;
						return exit.call('modifyWebhookwithToken', {webhookId: msg.webhook, webhookToken: msg.token, data: JSON.stringify(formMessage), type: `application/json`});
	}
	
	deleteHook(msg) {
		return exit.call('deleteWebhook', {webhookId: msg.webhook, data: '', type: `application/json`});
	}
	
	deleteHookWithToken(msg) {
		return exit.call('deleteWebhookwithToken', {webhookId: msg.webhook, webhookToken: msg.token, data: '', type: `application/json`});
	}
	
	/*	https://discord.com/developers/docs/resources/webhook#execute-webhook	*/
}

module.exports = webhookConstruct;
