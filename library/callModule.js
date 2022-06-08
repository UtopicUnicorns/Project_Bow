exports.summonModules = async function (config) {
	https = await require('https');
	fs = await require('fs');
	ws = await require('./webSocket');
	fd = await require('./formData');
	path = await require('path');
	os = await require('os');

	configData = await require(config);
	token = await configData.botToken;
	appId = configData.appId;
	intent = configData.intent;

	httpsConstruct = await require('./classes/httpsClass');
	fly = new httpsConstruct();

	messageConstruct = await require('./classes/messageClass');
	message = new messageConstruct();
	channelConstruct = await require('./classes/channelClass');
	channel = new channelConstruct();
	app = await require('./classes/appClass');
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

	postMan = await require('events');
	class Emitter extends postMan {}
	mailMan = new Emitter();

	heartConstruct = await require('./classes/heartClass');
	heart = new heartConstruct();
	heart.run(this);
	
	voice = await require('./classes/voiceClass');
};