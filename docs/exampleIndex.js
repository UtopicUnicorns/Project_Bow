/*  The config has to be a readable and parsable JSON.
    do note that the path needs to start in the library directory.
    The await import is needed to ensure the complete library is loaded before you tinker with it.
    
    Paths may be full paths, but not shortened like `~/path/to/dir/`
    Full paths always follow like `/path/to/dir/`
    Partial paths always start with a . which indicates the current directory.
    Current directory ./
    Previous directory ../  */
const projectBow = await import('./library/index.js');
  await projectBow.lib('./configs.json');

/*  This is where all your code goes.
    You generally want to fetch the events here.
    The fetcher is called mailMan.
    The name *client* can be renamed whatever you want, this variable holds the message, client and socket.
    Message is the raw responses you get from the DISCORD API.
    Client is this session, you can receive all information from it, including members, guilds etc if you want.
    Socket is just the web socket and allows for direct interaction with it.
    The event names ALWAYS are the same as the ones you would normally receive within the raw DISCORD API events  */
mailMan.on('messageCreate', async (client) => {
	/*  client.message
      client.client
      client.socket
      Each of these is a readable JSON.  */
});

mailMan.on('interactionCreate', async (client) => {
	/*  Example interaction handle.
      I am refering to the interaction doc/example for more info.  */
	message
		.interaction({ type: 6, flags: 64 }, client)
      .catch((err) => console.log(err));
});
