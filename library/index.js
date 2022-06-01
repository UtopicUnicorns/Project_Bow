exports.lib = async function (config) {
	im = await require('./callModule');
	await im.summonModules(config);
};

