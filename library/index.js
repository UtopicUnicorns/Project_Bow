exports.lib = async function (config) {
	https = await require('https');
		fs = await require('fs');
			ws = await require('./webSocket');
				fd = await require('./classes/formData');
					path = await require('path');
	os = await require('os');
		configData = await require(config);
			token = await configData.botToken;
				appId = await configData.appId;
					intent = await configData.intent;
	lavaLinkHost = await configData.lavaLinkHost;
		lavaLinkPwd = await configData.lavaLinkPwd;
	botId = await configData.botId;
		botCaching = await configData.caching;
			camelCase = function (str) { return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase()); }
				errorConstruct = await require('./classes/errorClass');
					newError = new errorConstruct();	
	buildConstruct = await require('./classes/buildClass.js');
		httpsConstruct = buildConstruct.httpsConstruct;
			app = buildConstruct.appConstruct;
				embed = buildConstruct.embedConstruct;
					component = buildConstruct.componentConstruct;
		botConstruct = buildConstruct.botConstruct;
			timeConstruct = buildConstruct.timeConstruct;
				mimeConstruct = buildConstruct.mimeConstruct;
					relConstruct = buildConstruct.relConstruct;
						fly = new httpsConstruct();
		bot = new botConstruct();	
			time = new timeConstruct();	
				mime = new mimeConstruct();
					rel = new relConstruct();
						rel.rel();
						
	endPointConstruct = await require('./classes/endPointClass');
	auditConstruct = await require('./classes/auditClass');
	channelConstruct = await require('./classes/channelClass');
	emojiConstruct = await require('./classes/emojiClass');
	
	exit = new endPointConstruct();
	audit = new auditConstruct();
	channel = new channelConstruct();
	emoji = new emojiConstruct();

	postMan = await require('events');
		class Emitter extends postMan {}
			mailMan = new Emitter();

	heartConstruct = await require('./classes/heartClass');
		heart = new heartConstruct();
			heart.run(this);
	
	cacheConstruct = await require('./classes/cacheClass');
		cache = new cacheConstruct();
	
	const { spawn } = require('node:child_process');
		const lavaSpawn = await spawn('java', ['-jar', './library/lavaLink/Lavalink.jar', '--help']);
			lavaSpawn.stderr.on('data', (data) => { console.error(data.toString()); });
				lavaSpawn.on('exit', (code) => { console.log(`Child exited with code ${code}`); });
					linkLava = await require('./lavaLink');
						voiceConstruct = await require('./classes/voiceClass');
							voice = new voiceConstruct();
								lamp = new linkLava.Node({
									password: lavaLinkPwd,
										userID: botId,
											host: lavaLinkHost,
												send(guildID, packet) { return heart.getSocket().send(JSON.stringify(packet)); },
								}).on('error', (e) => {/**/});
	voiceStatePass = function(pass) {  
		if (pass.t === 'VOICE_STATE_UPDATE') lamp.voiceStateUpdate(pass.d);
			if (pass.t === 'VOICE_SERVER_UPDATE') lamp.voiceServerUpdate(pass.d);
	};
		lamp.on('event', (event) => mailMan.emit('playerEvent', event));
			mailMan.on('voiceStateUpdateSend', voiceStatePass);
				mailMan.on('voiceServerUpdateSend', voiceStatePass);
};

