/*	Message sending will follow basic JSON rules.
		Embeds, Attachments and Components are explained later in this file.
		Flags are bit integers, you can omit them if needed:
			CROSSPOSTED	1 << 0	this message has been published to subscribed channels (via Channel Following)
			IS_CROSSPOST	1 << 1	this message originated from a message in another channel (via Channel Following)
			SUPPRESS_EMBEDS	1 << 2	do not include any embeds when serializing this message
			SOURCE_MESSAGE_DELETED	1 << 3	the source message for this crosspost has been deleted (via Channel Following)
			URGENT	1 << 4	this message came from the urgent message system
			HAS_THREAD	1 << 5	this message has an associated thread, with the same id as the message
			EPHEMERAL	1 << 6	this message is only visible to the user who invoked the Interaction
			LOADING	1 << 7	this message is an Interaction Response and the bot is "thinking"
			FAILED_TO_MENTION_SOME_ROLES_IN_THREAD	1 << 8	this message failed to mention some roles and add their members to the thread
		TTS entry is a boolean, either true or false.
		guild_id is just the guild ID you send the message too, handy for referencing.
		message_reference wants a message ID from a previous message, this will *reply* to said message.
		Channel is the channel ID you send the message to.	*/
message
	.send({
		content: 'Message Content',
		channel: 'Channel ID',
		components: [],
		embeds: [],
		tts: true,
		message_reference: 'ReferenceID',
		sticker_ids: sticker,
		flags: 64,
		attachments: [],
		guild: "Guild ID",
	})
	.then((val) => console.log(val))
	.catch((err) => console.error(err));

/*	Attachments can be build in the message JSON itself, but calling it later is easier.
		The file entry wants you to point to the file you want to send, this may be a full path.
		The description entry is an *alt* for images, when hovering over the image it will desplay this text.
		The filename entry does not have to be the same as the file entry, the extention should be.
		Files will automatically upload when you specify them.
		The attachments entry itself is an array, within the array you can loop JSON entries as seen below.	*/
attachments = [{
		file: 'cat.gif',
		description: 'Picture of an animated cat',
		filename: 'cat.gif',
	},
	{
		file: 'pic.png',
		description: 'Not a di*k pic',
		filename: 'pic.png',
}];

/*	Components are called in a chain
		The .output indicates the final chain and returns the full component.
		You can delay the .output chain to loop component chains if needed.
		
		Buttons and menu entries can hold a single emoji.
		Buttons have 5 styles, style 5 is always meant for an URL and needs to have its custom ID ommited.
		The initial menu chain has a built in option to set the maximum and minimum amount of options you can select.
		Do note that if you are over the native limit of menu/button entries that the message send will not happen.
		The default option in .menu().entry() gives you the option to have an entry displayed as default,
		if ommited it will default to the .menu() placeholder 
		The buttons have an unique option where you can set the disabled boolean, this disables users from clicking the button.	*/
new component()
	.menu({ custom_id: 'UniqueID', place_holder: 'Unique', min_val: 1, max_val: 3 })
	.entry({ label: 'Unique Label', value: 'UniqueVAL', description: 'Unique Description', default: true, emoji: { id: "EmojiID" } })
	.entry({ label: 'Unique Label', value: 'UniqueVAL', description: 'Unique Description', default: false })
	.entry({ label: 'Unique Label', value: 'UniqueVAL', description: 'Unique Description', default: false })
	.output;

new component()
	.button({ label: 'Unique Label', custom_id: 'UniqueID', style: 1, disabled: true })
	.button({ label: 'Unique Label', custom_id: 'UniqueID', style: 2 })
	.button({ label: 'Unique Label', custom_id: 'UniqueID', style: 3 })
	.button({ label: 'Unique Label', custom_id: 'UniqueID', style: 4, emoji: { id: 'EmojiID' } })
	.button({ label: 'Unique Label', style: 5, url: 'https://artemis.rest' })
	.output;
					
/*	Embeds do not follow the JSON rule.
		.field() has 3 parts; Title, Content and Inline
		Title and Content are strings, inline is a boolean and should be either true or ommited.
		.description() is a string so is .title(), .url(), .thumbnail(), .image() and .timestamp().
		Any image and icon entry can either be a complete URL to an image or an attachment from file upload:
			attachment://cat.gif
			attachment://pic.png
		Website entries are clickable strings and should have a full URL.
		The .color() entry wants a HEX color code WITHOUT #	*/
new embed()
	.field('Field Title', 'Field Content', true)
	.description('Description')
	.color('FF0000')
	.title('Title')
	.url('Website Entry')
	.author('Name Entry', 'Icon Entry', 'Website Entry')
	.thumbnail('Image Entry')
	.image('Image Entry')
	.footer('Footer Content', 'Icon Entry')
	.timestamp();
	
