/*   
  The config has to be a readable and parsable JSON.
  do note that the path needs to start in the library directory.
  The require is needed to ensure the complete library is loaded before you tinker with it.
  
  Paths may be full paths, but not shortened like `~/path/to/dir/`
  Full paths always follow like `/path/to/dir/`
  Partial paths always start with a . which indicates the current directory.
  Current directory ./
  Previous directory ../
*/
require('./library/index').lib('./configs.json').then(() => {
  /*
    This is where all your code goes.
    You generally want to fetch the events here.
    The fetcher is called mail_man.
    The name *client* can be renamed whatever you want, this variable holds the message, client and socket.
    Message is the raw responses you get from the DISCORD API.
    Client is this session, you can receive all information from it, including members, guilds etc if you want.
    Socket is just the web socket and allows for direct interaction with it.
    
    The event names ALWAYS are the same as the ones you would normally receive within the raw DISCORD API events
  */
  
  mail_man.on('MESSAGE_CREATE', async (client) => {
    /*
      client.message
      client.client
      client.socket
      
      Each of these is a readable JSON.
    */
  });
  
  mail_man.on('INTERACTION_CREATE', async (client) => {
    /*
      Example interaction handle.
      I am refering to the interaction doc/example for more info.
    */
    message
      .interaction({ type: 6, flags: 64 }, client)
      .catch((err) => console.log(err));
	});
});
