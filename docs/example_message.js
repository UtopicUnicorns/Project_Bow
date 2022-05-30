/*
  Message sending will follow basic JSON rules.
  Attachments also follow basic JSON rules, but need to be placed in an array.
*/
message
	.send({
		content: message,
		channel: channel_id,
		components: [components],
		embeds: [embeds],
		tts: boolean,
		message_reference: reference_id,
		sticker_ids: sticker,
		flags: flags,
		attachments: attachments,
		guild: guild_id,
	})
	.then((val) => console.log(val))
	.catch((err) => console.error(err));

attachments = [{
		file: 'cat.gif',
		description: 'Oatly Kitty',
		filename: 'cat.gif',
	},
	{
		file: 'pic.png',
		description: 'Linux Mint logo',
		filename: 'pic.png',
}];
