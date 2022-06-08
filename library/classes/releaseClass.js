class relConstruct {
	rel() {
		const options = {
			hostname: 'api.github.com',
			port: 443,
			path: '/repos/UtopicUnicorns/Project_Bow/releases',
			method: 'GET',
			headers: { 'User-Agent': 'Mozilla/5.0', 'Content-Type': 'application/json' },
		};

		let collect = [];

		const req = https.request(options, (res) => {
			res.on('data', async (data) => {
				collect.push(data);
			});

			res.on('end', async (data) => {
				try {
					collect = JSON.parse(collect);

					const release_file = await require('../REL');
					if (release_file.rel !== collect[0].name) {
						let rel_num = collect[0].name.replace("V", "");
						let cur_num = release_file.rel.replace("V", "");
						
						if (rel_num < cur_num) console.log(`You are using a higher version of the library than the latest release!\n\nLatest Release:\nDate: ${collect[0].created_at}\nVersion: ${collect[0].name}\nDownload: ${collect[0].tarball_url}\n\nYOU ARE USING VERSION: ${release_file.rel}`);
						if (rel_num > cur_num) console.log(`NEW VERSION AVAILABLE!\n\nDate: ${collect[0].created_at}\nVersion: ${collect[0].name}\nDownload: ${collect[0].tarball_url}\n\nYOU ARE USING VERSION: ${release_file.rel}`);
					} else {
						console.log(`Your Project Bow library is up to date @ ${release_file.rel}`);
					}
				} catch (err) {
				const release_file = await require('../REL');
					console.log(`Your Project Bow library is @ ${release_file.rel}\n`, 'Unable to retrieve update data.');
				}
			});
		});

		req.on('error', (err) => console.log(err));

		req.end();

		return 'Why are you trying to read me?';
	}
}

module.exports = relConstruct;