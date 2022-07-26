guildTemplate
	.getTemplate({
		template: 'templadeCode',
	});				

guildTemplate
	.guildFromTemplate({
		template: 'templadeCode',
			name: 'guildName',
				icon: 'fileName.ext',
	});				

guildTemplate
	.getGuildTemplates({
		guild: 'guildId',
	});				

guildTemplate
	.createTemplate({
		guild: 'guildId',
			name: 'templateName',
				description: 'templateDescription',
	});				

guildTemplate
	.syncTemplate({
		guild: 'guildId',
			template: 'templateCode',
	});				

guildTemplate
	.editTemplate({
		guild: 'guildId',
			template: 'templateCode',
				name: 'templateName',
					description: 'templateDescription',
	});				

guildTemplate
	.deleteTemplate({
		guild: 'guildId',
			template: 'templateCode',
	});		

