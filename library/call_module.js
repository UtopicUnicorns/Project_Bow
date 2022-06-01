exports.summon_modules = async function (config) {
	https = await require('https');
	fs = await require('fs');
	ws = await require('./web_socket');
	fd = await require('./form_data');
	path = await require('path');
	os = await require('os');

	configuration_data = await require(config);
	token = await configuration_data.bot_token;
	application_id = configuration_data.application_id;
	intent = configuration_data.intent;

	httpsConstruct = await require('./classes/httpsClass');
	fly = new httpsConstruct();

	messageConstruct = await require('./classes/messageClass');
	message = new messageConstruct();
	channelConstruct = await require('./classes/channelClass');
	channel = new channelConstruct();
	appConstruct = await require('./classes/appClass');
	app = new appConstruct();
	embed = await require('./classes/embedClass');
	component = await require('./classes/componentClass');
	threadConstruct = await require('./classes/threadClass.js');
	thread = new threadConstruct();

	botConstruct = await require('./classes/botClass');
	bot = new botConstruct();
	cacheConstruct = await require('./classes/cacheClass');
	cache = new cacheConstruct();
	timeConstruct = await require('./classes/timeClass');
	time = new timeConstruct();
	mimeConstruct = await require('./classes/mimeClass');
	mime = new mimeConstruct();

	relConstruct = await require('./classes/releaseClass');
	rel = new relConstruct();
	rel.rel();

	post_man = await require('events');
	class Emitter extends post_man {}
	mailMan = new Emitter();

	heartConstruct = await require('./classes/heartClass');
	heart = new heartConstruct();
	heart.run(this);
};
