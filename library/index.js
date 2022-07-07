exports.lib = async function (config) {
	https = await require('https');
		fs = await require('fs');
			ws = await require('./webSocket');
				fd = await require('./formData');
					path = await require('path');
						os = await require('os');

	configData = await require(config);
		token = await configData.botToken;
			appId = await configData.appId;
				intent = await configData.intent;
					botId = await configData.botId;
						botCaching = await configData.caching;

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
	
	cacheConstruct = await require('./classes/cacheClass');
		cache = new cacheConstruct();
	
	watchConstruct = await require('./classes/watchClass');
		watch = new watchConstruct();
	
	linkLava = await require('./linkLava');
		voiceConstruct = await require('./classes/voiceClass');
			voice = new voiceConstruct();
				lamp = new linkLava.Node({
					password: 'youshallnotpass',
						userID: '654361253413781537',
							host: 'localhost:2333',
								send(guildID, packet) {
									return heart.getSocket().send(JSON.stringify(packet));
								},
				});
					lamp.on('error', (e) => {/**/});
					voiceStatePass = function(pass) {  
						if (pass.t === 'VOICE_STATE_UPDATE') lamp.voiceStateUpdate(pass.d);
							if (pass.t === 'VOICE_SERVER_UPDATE') lamp.voiceServerUpdate(pass.d);
					};
						mailMan.on('voiceStateUpdateSend', voiceStatePass);
							mailMan.on('voiceServerUpdateSend', voiceStatePass);
};

