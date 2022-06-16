const projectBow = await import('./library/index.js');
await projectBow.lib('./configs.json');

function log(incomingMessage) {
	console.log(time.clock().eu, time.date().nice, incomingMessage.message.t)
}

mailMan.on('INTERACTION_CREATE', async (incomingMessage) => log(incomingMessage));

mailMan.on('GUILD_CREATE', async (incomingMessage) => log(incomingMessage));
mailMan.on('GUILD_UPDATE', async (incomingMessage) => log(incomingMessage));
mailMan.on('GUILD_DELETE', async (incomingMessage) => log(incomingMessage));
mailMan.on('GUILD_ROLE_CREATE', async (incomingMessage) => log(incomingMessage));
mailMan.on('GUILD_ROLE_UPDATE', async (incomingMessage) => log(incomingMessage));
mailMan.on('GUILD_ROLE_DELETE', async (incomingMessage) => log(incomingMessage));
mailMan.on('GUILD_MEMBER_ADD', async (incomingMessage) => log(incomingMessage));
mailMan.on('GUILD_MEMBER_UPDATE', async (incomingMessage) => log(incomingMessage));
mailMan.on('GUILD_MEMBER_REMOVE', async (incomingMessage) => log(incomingMessage));
mailMan.on('GUILD_MEMBERS_CHUNK', async (incomingMessage) => log(incomingMessage));
mailMan.on('GUILD_BAN_ADD', async (incomingMessage) => log(incomingMessage));
mailMan.on('GUILD_BAN_REMOVE', async (incomingMessage) => log(incomingMessage));
mailMan.on('GUILD_EMOJIS_UPDATE', async (incomingMessage) => log(incomingMessage));
mailMan.on('GUILD_STICKERS_UPDATE', async (incomingMessage) => log(incomingMessage));
mailMan.on('GUILD_INTEGRATIONS_UPDATE', async (incomingMessage) => log(incomingMessage));

mailMan.on('INTEGRATION_CREATE', async (incomingMessage) => log(incomingMessage));
mailMan.on('INTEGRATION_UPDATE', async (incomingMessage) => log(incomingMessage));
mailMan.on('INTEGRATION_DELETE', async (incomingMessage) => log(incomingMessage));

mailMan.on('INVITE_CREATE', async (incomingMessage) => log(incomingMessage));
mailMan.on('INVITE_DELETE', async (incomingMessage) => log(incomingMessage));

mailMan.on('CHANNEL_CREATE', async (incomingMessage) => log(incomingMessage));
mailMan.on('CHANNEL_UPDATE', async (incomingMessage) => log(incomingMessage));
mailMan.on('CHANNEL_DELETE', async (incomingMessage) => log(incomingMessage));
mailMan.on('CHANNEL_PINS_UPDATE', async (incomingMessage) => log(incomingMessage));

mailMan.on('GUILD_SCHEDULED_EVENT_CREATE', async (incomingMessage) => log(incomingMessage));
mailMan.on('GUILD_SCHEDULED_EVENT_UPDATE', async (incomingMessage) => log(incomingMessage));
mailMan.on('GUILD_SCHEDULED_EVENT_DELETE', async (incomingMessage) => log(incomingMessage));
mailMan.on('GUILD_SCHEDULED_EVENT_USER_ADD', async (incomingMessage) => log(incomingMessage));
mailMan.on('GUILD_SCHEDULED_EVENT_USER_REMOVE', async (incomingMessage) => log(incomingMessage));

mailMan.on('MESSAGE_CREATE', async (incomingMessage) => log(incomingMessage));
mailMan.on('MESSAGE_UPDATE', async (incomingMessage) => log(incomingMessage));
mailMan.on('MESSAGE_DELETE', async (incomingMessage) => log(incomingMessage));
mailMan.on('MESSAGE_DELETE_BULK', async (incomingMessage) => log(incomingMessage));
mailMan.on('MESSAGE_REACTION_ADD', async (incomingMessage) => log(incomingMessage));
mailMan.on('MESSAGE_REACTION_REMOVE', async (incomingMessage) => log(incomingMessage));
mailMan.on('MESSAGE_REACTION_REMOVE_ALL', async (incomingMessage) => log(incomingMessage));
mailMan.on('MESSAGE_REACTION_REMOVE_EMOJI', async (incomingMessage) => log(incomingMessage));

mailMan.on('THREAD_CREATE', async (incomingMessage) => log(incomingMessage));
mailMan.on('THREAD_UPDATE', async (incomingMessage) => log(incomingMessage));
mailMan.on('THREAD_DELETE', async (incomingMessage) => log(incomingMessage));
mailMan.on('THREAD_MEMBER_UPDATE', async (incomingMessage) => log(incomingMessage));
mailMan.on('THREAD_MEMBERS_UPDATE', async (incomingMessage) => log(incomingMessage));
mailMan.on('THREAD_LIST_SYNC', async (incomingMessage) => log(incomingMessage));

mailMan.on('STAGE_INSTANCE_CREATE', async (incomingMessage) => log(incomingMessage));
mailMan.on('STAGE_INSTANCE_UPDATE', async (incomingMessage) => log(incomingMessage));
mailMan.on('STAGE_INSTANCE_DELETE', async (incomingMessage) => log(incomingMessage));

mailMan.on('READY', async (incomingMessage) => log(incomingMessage));
mailMan.on('RESUMED', async (incomingMessage) => log(incomingMessage));
mailMan.on('WEBHOOKS_UPDATE', async (incomingMessage) => log(incomingMessage));
mailMan.on('PRESENCE_UPDATE', async (incomingMessage) => log(incomingMessage));
mailMan.on('VOICE_STATE_UPDATE', async (incomingMessage) => log(incomingMessage));
mailMan.on('USER_UPDATE', async (incomingMessage) => log(incomingMessage));
mailMan.on('TYPING_START', async (incomingMessage) => log(incomingMessage));
