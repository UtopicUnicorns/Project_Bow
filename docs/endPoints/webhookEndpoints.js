/*  Creates a new webhook.
    make sure to provide a proper full or partial path to the avatar image.  */
webhook
  .create({ name: 'webhookName',
            avatar: 'fileName.ext' });

/*  Get specified channels existing webhooks. */
webhook
  .getChannelHooks({  channel: 'channelId'  });
  
/*  Get specified guild existing webhooks. */
webhook
  .getGuildHooks({  guild: 'guildId'  });

/*  Get specified webhook. */
webhook
  .getHook({  webhook: 'webhookId'  });

/*  Get specified webhook with id and token. */
webhook
  .getHookWithToken({ webhook: 'webhookId',
                      token: 'webhookToken' });

/*  Edit an existing webhook.
    channel just refers to a new channel if you want to move the hook.
    make sure to have a proper full or partial path for the avatar image.  */
webhook
  .editHook({ name: 'webhookName',
              avatar: 'fileName.ext',
              channel: 'newChannelId',
              webhook: 'webhookId' });

/*  Edit an existing webhook.... but with a token..
    make sure to have a proper full or partial path for the avatar image.  */
webhook
  .editHookWithToken({  name: 'webhookName',
                        avatar: 'fileName.ext',
                        token: 'webhookToken',
                        webhook: 'webhookId' });

/*  Delete a webhook by id.  */
webhook
  .deleteHook({  webhook: 'webhookId'  });

/*  Delete a webhook by id and token.  */
webhook
  .deleteHookWithToken({  webhook: 'webhookId',
                          token: 'webhookToken'  });
