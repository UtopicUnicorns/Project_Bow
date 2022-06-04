/*
  Example app creation
  .commandType() is an integer:
		CHAT_INPUT	1	Slash commands; a text-based command that shows up when a user types /
		USER	2	A UI-based command that shows up when you right click or tap on a user
		MESSAGE	3	A UI-based command that shows up when you right click or tap on a message
	.commandTarget() is either empty or ommited, or a guildID as a string.
	.commandName() requires lowercase.
*/
new app()
			.commandTarget("660988248788697100")
			.commandName("command")
			.commandDescription("Description of example Command")
			.commandType(1)
			.create;
			
/*
	The following example is to create a command for rick clicking on a user.
	The type therefor is also 2
*/
new app()
			.commandName("command")
			.commandType(2)
			.create;

/*
	This final example is a type 3 command.
	This means that when you rightclick a message this shows up.
*/
new app()
			.commandName("translate")
			.commandType(3)
			.create;

