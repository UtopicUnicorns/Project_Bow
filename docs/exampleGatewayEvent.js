/*
  The below examples show the event handler receiving different gateway events.
  The events are automatically shot out by the library, but do not require the handler to catch them.
  Basically this means that you could only have the READY event and nothing else without issue.
  The below examples show the current possibilities of gateway events, 
    Discord can add more when they want, and remove the ones they want.
  The event handler will automatically adjust to additions and deletions in events, 
    which will only have to be reflected in the gateway event names.
  All events are able to be fetched just a single time by using mailMan.once
*/
mailMan.on('INTERACTION_CREATE', async (incomingMessage) => console.log(incomingMessage));

mailMan.on('GUILD_CREATE', async (incomingMessage) => console.log(incomingMessage));
mailMan.on('GUILD_UPDATE', async (incomingMessage) => console.log(incomingMessage));
mailMan.on('GUILD_DELETE', async (incomingMessage) => console.log(incomingMessage));
mailMan.on('GUILD_ROLE_CREATE', async (incomingMessage) => console.log(incomingMessage));
mailMan.on('GUILD_ROLE_UPDATE', async (incomingMessage) => console.log(incomingMessage));
mailMan.on('GUILD_ROLE_DELETE', async (incomingMessage) => console.log(incomingMessage));
mailMan.on('GUILD_MEMBER_ADD', async (incomingMessage) => console.log(incomingMessage));
mailMan.on('GUILD_MEMBER_UPDATE', async (incomingMessage) => console.log(incomingMessage));
mailMan.on('GUILD_MEMBER_REMOVE', async (incomingMessage) => console.log(incomingMessage));
mailMan.on('GUILD_MEMBERS_CHUNK', async (incomingMessage) => console.log(incomingMessage));
mailMan.on('GUILD_BAN_ADD', async (incomingMessage) => console.log(incomingMessage));
mailMan.on('GUILD_BAN_REMOVE', async (incomingMessage) => console.log(incomingMessage));
mailMan.on('GUILD_EMOJIS_UPDATE', async (incomingMessage) => console.log(incomingMessage));
mailMan.on('GUILD_STICKERS_UPDATE', async (incomingMessage) => console.log(incomingMessage));
mailMan.on('GUILD_INTEGRATIONS_UPDATE', async (incomingMessage) => console.log(incomingMessage));

mailMan.on('INTEGRATION_CREATE', async (incomingMessage) => console.log(incomingMessage));
mailMan.on('INTEGRATION_UPDATE', async (incomingMessage) => console.log(incomingMessage));
mailMan.on('INTEGRATION_DELETE', async (incomingMessage) => console.log(incomingMessage));

mailMan.on('INVITE_CREATE', async (incomingMessage) => console.log(incomingMessage));
mailMan.on('INVITE_DELETE', async (incomingMessage) => console.log(incomingMessage));

mailMan.on('CHANNEL_CREATE', async (incomingMessage) => console.log(incomingMessage));
mailMan.on('CHANNEL_UPDATE', async (incomingMessage) => console.log(incomingMessage));
mailMan.on('CHANNEL_DELETE', async (incomingMessage) => console.log(incomingMessage));
mailMan.on('CHANNEL_PINS_UPDATE', async (incomingMessage) => console.log(incomingMessage));

mailMan.on('GUILD_SCHEDULED_EVENT_CREATE', async (incomingMessage) => console.log(incomingMessage));
mailMan.on('GUILD_SCHEDULED_EVENT_UPDATE', async (incomingMessage) => console.log(incomingMessage));
mailMan.on('GUILD_SCHEDULED_EVENT_DELETE', async (incomingMessage) => console.log(incomingMessage));
mailMan.on('GUILD_SCHEDULED_EVENT_USER_ADD', async (incomingMessage) => console.log(incomingMessage));
mailMan.on('GUILD_SCHEDULED_EVENT_USER_REMOVE', async (incomingMessage) => console.log(incomingMessage));

mailMan.on('MESSAGE_CREATE', async (incomingMessage) => console.log(incomingMessage));
mailMan.on('MESSAGE_UPDATE', async (incomingMessage) => console.log(incomingMessage));
mailMan.on('MESSAGE_DELETE', async (incomingMessage) => console.log(incomingMessage));
mailMan.on('MESSAGE_DELETE_BULK', async (incomingMessage) => console.log(incomingMessage));
mailMan.on('MESSAGE_REACTION_ADD', async (incomingMessage) => console.log(incomingMessage));
mailMan.on('MESSAGE_REACTION_REMOVE', async (incomingMessage) => console.log(incomingMessage));
mailMan.on('MESSAGE_REACTION_REMOVE_ALL', async (incomingMessage) => console.log(incomingMessage));
mailMan.on('MESSAGE_REACTION_REMOVE_EMOJI', async (incomingMessage) => console.log(incomingMessage));

mailMan.on('THREAD_CREATE', async (incomingMessage) => console.log(incomingMessage));
mailMan.on('THREAD_UPDATE', async (incomingMessage) => console.log(incomingMessage));
mailMan.on('THREAD_DELETE', async (incomingMessage) => console.log(incomingMessage));
mailMan.on('THREAD_MEMBER_UPDATE', async (incomingMessage) => console.log(incomingMessage));
mailMan.on('THREAD_MEMBERS_UPDATE', async (incomingMessage) => console.log(incomingMessage));
mailMan.on('THREAD_LIST_SYNC', async (incomingMessage) => console.log(incomingMessage));

mailMan.on('STAGE_INSTANCE_CREATE', async (incomingMessage) => console.log(incomingMessage));
mailMan.on('STAGE_INSTANCE_UPDATE', async (incomingMessage) => console.log(incomingMessage));
mailMan.on('STAGE_INSTANCE_DELETE', async (incomingMessage) => console.log(incomingMessage));

mailMan.on('READY', async (incomingMessage) => console.log(incomingMessage));
mailMan.on('RESUMED', async (incomingMessage) => console.log(incomingMessage));
mailMan.on('WEBHOOKS_UPDATE', async (incomingMessage) => console.log(incomingMessage));
mailMan.on('PRESENCE_UPDATE', async (incomingMessage) => console.log(incomingMessage));
mailMan.on('VOICE_STATE_UPDATE', async (incomingMessage) => console.log(incomingMessage));
mailMan.on('USER_UPDATE', async (incomingMessage) => console.log(incomingMessage));
mailMan.on('TYPING_START', async (incomingMessage) => console.log(incomingMessage));
