/*  Get all global commands for your applicationId.  
    if locale is set to true, will emit all localisations.  */
application
  .getGlobalCommands({ locale: BOOLEAN });

/*  create a new global command.  */
application
  .createGlobalApp({  name: 'applicationName',
                      nameLocale: '?dict',
                      description: 'applicationDescription',
                      descriptionLocale: '?dict',
                      options: applicationBuild,
                      defaultPermissions: defaultPermissionsChoices,
                      dmPermission: BOOLEAN,
                      type: typeSelect  });
  
/*  Additional info  */
/*	Example slash application with commands and sub commands.
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
let applicationBuild = new appBuild()
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
                          .build();

let defaultPermissionsChoices = [];

let typeSelect = [];
