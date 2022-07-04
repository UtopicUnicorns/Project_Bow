/*  The interactions are very simular to the message creations,
      but instead of sending a new message the interaction *replies* to an action.
    There are several types of callbacks:
      PONG	1	ACK a Ping
      CHANNEL_MESSAGE_WITH_SOURCE	4	respond to an interaction with a message
      DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE	5	ACK an interaction and edit a response later, the user sees a loading state
      DEFERRED_UPDATE_MESSAGE*	6	for components, ACK an interaction and edit the original message later; the user does not see a loading state
      UPDATE_MESSAGE*	7	for components, edit the message the component was attached to
      APPLICATION_COMMAND_AUTOCOMPLETE_RESULT	8	respond to an autocomplete interaction with suggested choices
      MODAL**	9	respond to an interaction with a popup modal
    In these docs we only use type 4 and 6, which will most likely be the most commonly used ones.
    Type 4 works for any interaction, but the silent type 6 cannot be used for slash command replies.
    Additionally type 6 does not need any other JSON entries other than type and flags.
    Flags work the same way as with message creation.
    The following interaction example displays the ability to use components, embeds and attachments(uploads)  */
message
  .interaction({
    type: 4, 
      content: 'Message Content',
        attachments: [],
          embeds: [], 
            components: [], 
              flags: 64 
	}, incomingMessage)
    .then((response) => console.log(response))
      .catch((error) => console.log(error));

/*  The below example shows off the simplicity of the type 6 interaction.
    Nothing is displayed to the user while the client does receive everything needed.  */
message
  .interaction({
    type: 6, 
      flags: 64 
	}, incomingMessage)
    .then((response) => console.log(response))
      .catch((error) => console.log(error));

