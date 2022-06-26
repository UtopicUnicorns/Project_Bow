/*	App Types:
			CHAT_INPUT	1	Slash commands; a text-based command that shows up when a user types /
			USER	2	A UI-based command that shows up when you right click or tap on a user
			MESSAGE	3	A UI-based command that shows up when you right click or tap on a message
			
		Command Types:
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
			
		Application creation flows:
			command
			||
			||===> subcommand
			||
			||===> subcommand

			command
			||
			||===> subcommand-group
					||
					||===> subcommand
			||
			||===> subcommand
			
			command
			||
			||===> subcommand-group
					||
					||===> subcommand
			||
			||===> subcommand-group
					||
					||===> subcommand			*/
			
/*	Example slash application.
		appGuild() should be empty, ommited or a string using the guildId of choice.
		appName() is a string and should be unique to your bot and lowercase.
		appDescription() is a string.
		appType() is an integer: 1 for slash, 2 for right click user or 3 for rightclicking a message.
		.appCreate; is how you finish your application creation.	*/
new app()
	.appGuild("guildId")
	.appName("appname")
	.appDescription("appDescription")
	.appType(1)
	.appCreate;

/*	Example slash application with commands and sub commands.
		appGuild, appName, appDescription, appType and .appCreate; have been explained in the previous example.
		commandName() is an unique lowercase string:
			Each time this function is called, the library expects it to be a new command entry.
			Please refer to the examples for clarification.
		commandDescription() is a string.
		commandType() is an integer:
			If commandType is 1 then you can only use subCommands afterwards within the same space.
			If commandType is 2 then you have to use first subCommands with subCommandType 1 and then deepCommands.	
		subCommandName() is an unique lowercase string
		subCommandDescription() is a string
		subCommandType() is an integer:
			if commandType is 2, then subCommandType needs to be 1 for deepCommands.
			If commandType is 1, then subCommandType can be any of the options with exception of 1 and 2.
		subCommandRequired() is a boolean.
		subCommandChoices() is a dual value and can only be used if commandType is 1:
			('name', 'value') within the same choice set the names needs to be unique.
		deepCommandName() is an unique lowercase string:
			deepCommands can only be used if commandType is 2 AND subCommandType is 1
		deepCommandDescription() is a string.
		deepCommandType() is an integer and can be any of the options with the exception of type 1 and 2.
		deepCommandRequired() is a boolean.
		deepCommandChoices() is a dual value:
			('name', 'value') within the same choice set the names needs to be unique.	*/
new app()
	.appGuild("guildId")
	.appName("appname")
	.appDescription("appDescription")
	.appType(1)
		.commandName("commandname")
		.commandDescription("commandDescription")
		.commandType(2)
			.subCommandName('subcommandname')
			.subCommandDescription('subCommandDescription')
			.subCommandType(1)
				.deepCommandName('deepCommandname')
				.deepCommandDescription('deepCommandDescription')
				.deepCommandType(3)
				.deepCommandRequired(true)
				.deepCommandChoices('name', 'value')
				.deepCommandChoices('name', 'value')
				.deepCommandChoices('name', 'value')
		.commandName("commandname2")
		.commandDescription("commandDescription2")
		.commandType(1)
			.subCommandName('subcommandname2')
			.subCommandDescription('subCommandDescription2')
			.subCommandType(3)
			.subCommandChoices('name', 'value')
			.subCommandChoices('name', 'value')
			.subCommandChoices('name', 'value')
	.appCreate;

/*	The following example is a type 2 command. 
		This means that when you rightclick a user this shows up.
		appName() is an unique lowercase string.	*/
new app()
			.appName("command")
			.appType(2)
			.appCreate;

/*	This final example is a type 3 command.
		This means that when you rightclick a message this shows up.
		appName() is an unique lowercase string.	*/
new app()
			.appName("translate")
			.appType(3)
			.appCreate;

