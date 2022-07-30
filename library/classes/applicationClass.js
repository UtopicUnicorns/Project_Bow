class applicationConstruct {
   getGlobalCommands(msg) {
		let formMessage = [];
			if(msg.locale) formMessage.push(`with_localizations=${msg.locale}`);
				return exit.call('getGlobalApplicationCommands', {applicationId: appId, data: formMessage.join('&'), type: `application/json`});
	}
	
	createGlobalApp(msg) {
		let formMessage = {};
		if(msg.name) formMessage['name'] = msg.name;
		if(msg.nameLocale) formMessage['name_localizations'] = msg.nameLocale;
		if(msg.description) formMessage['description'] = msg.description;
		if(msg.descriptionLocale) formMessage['description_localizations'] = msg.descriptionLocale;
		if(msg.options) formMessage['options'] = msg.options;
		if(msg.defaultPermissions) formMessage['default_member_permissions'] = msg.defaultPermissions;
		if(msg.dmPermission) formMessage['dm_permission'] = msg.dmPermission;
		if(msg.type) formMessage['type'] = msg.type;
		return exit.call('createGlobalApplicationCommand', {applicationId: appId, data: JSON.stringify(formMessage), type: `application/json`});
	}
}

module.exports = applicationConstruct;
