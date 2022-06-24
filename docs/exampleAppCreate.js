/*
  Example app creation
  .appType() is an integer:
		CHAT_INPUT	1	Slash commands; a text-based command that shows up when a user types /
		USER	2	A UI-based command that shows up when you right click or tap on a user
		MESSAGE	3	A UI-based command that shows up when you right click or tap on a message
	.appGuild() is a guildID as a string.
	.appName() requires lowercase.
		SUB_COMMAND	1	
		SUB_COMMAND_GROUP	2	
		STRING	3	
		INTEGER	4	Any integer between -2^53 and 2^53
		BOOLEAN	5	
		USER	6	
		CHANNEL	7	Includes all channel types + categories
		ROLE	8	
		MENTIONABLE	9	Includes users and roles
		NUMBER	10	Any double between -2^53 and 2^53
		ATTACHMENT	11	attachment object
*/
new app()
			.appGuild("660988248788697100")
			.appName("command")
			.appDescription("Description of example Command")
			.appType(1)
			.appCreate;

/*Each time you use .commandName() the library will assume you are creating a new sub command.*/
new app()
			.appGuild("660988248788697100")
			.appName("command")
			.appDescription("Description of example Command")
			.appType(1)
			.appCreate;
			
/*
	The following example is to create a command for rick clicking on a user.
	The type therefor is also 2
*/
new app()
			.appName("command")
			.appType(2)
			.appCreate;

/*
	This final example is a type 3 command.
	This means that when you rightclick a message this shows up.
*/
new app()
			.appName("translate")
			.appType(3)
			.appCreate;

