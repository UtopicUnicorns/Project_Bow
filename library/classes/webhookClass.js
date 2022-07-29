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
}

module.exports = webhookConstruct;
