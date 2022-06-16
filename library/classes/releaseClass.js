class relConstruct {
	rel() {
		fly.send('', `/repos/UtopicUnicorns/Project_Bow/releases`, 'GET', 'api.github.com', 443, { 'User-Agent': 'Mozilla/5.0', 'Content-Type': 'application/json' })
			.then((callBack) => {
				let releaseLocal = require('../REL.json').rel;
				
				let releaseInfo = {};
				if (callBack[0].tag_name == releaseLocal) {
					releaseInfo['discordLibraryName'] = 'Project Bow';
					releaseInfo['libraryVersion'] = releaseLocal;
					releaseInfo['Message'] = 'Your local version is up-to-date!';
					return console.log(releaseInfo);
				}
				
				if (callBack[0].tag_name <= releaseLocal) {
					releaseInfo['discordLibraryName'] = 'Project Bow';
					releaseInfo['libraryVersion'] = releaseLocal;
					releaseInfo['Message'] = 'Your local version is NEWER than the current release!';
					return console.log(releaseInfo);
				}
				
				releaseInfo['discordLibraryName'] = 'Project Bow';
				releaseInfo['Name'] = callBack[0].name;
				releaseInfo['Version'] = callBack[0].tag_name;
				releaseInfo['Date'] = {
					time: time.clock(callBack[0].published_at).eu,
					date: time.date(callBack[0].published_at).nice,
				};
				releaseInfo['Zip'] = callBack[0].zipball_url;
				releaseInfo['Tar'] = callBack[0].tarball_url;
				releaseInfo['Release'] = callBack[0].html_url;
				releaseInfo[''] = '';
				releaseInfo['localVersion'] = releaseLocal;
				releaseInfo['Message'] = 'Your local version is NOT up-to-date!';
				
				return console.log(releaseInfo);
			})
			.catch((err) => console.log(err));
	}
}

module.exports = relConstruct;
