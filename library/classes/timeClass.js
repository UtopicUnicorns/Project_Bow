class timeConstruct {
	hms(seconds) {
		const returnCount = [3600, 60]
			.reduceRight(
				(p, b) => r => [Math.floor(r / b)].concat(p(r % b)),
				r => [r]
			)(seconds)
			.map(a => a.toString().padStart(2, '0'))
			.join(':').split('.')[0].split(':');
			
		if (returnCount[2].length === 1) returnCount[2] = `0${returnCount[2]}`;
		
		return {
			hour: returnCount[0],
			minute: returnCount[1],
			second: returnCount[2],
		}
	}

	discord(timeInfo) {
		let time = ~~(Date.now() / 1000);
		if (timeInfo) time = ~~(Date.now(timeInfo) / 1000);

		return {
			shortDate: `<t:${time}:d>`,
			longDate: `<t:${time}:D>`,
			shortTime: `<t:${time}:t>`,
			longTime: `<t:${time}:T>`,
			longDateShortTime: `<t:${time}:f>`,
			completeDateShortTime: `<t:${time}:F>`,
			relativeTime: `<t:${time}:R>`,
		};
	}

	date(date) {
		const dName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		const mName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		let d = new Date();
		if (date) d = new Date(date);
		const dayNum = d.getDay();
		const day = d.getDate();
		let postfix = '';

		switch (day) {
			case 1 || 21 || 31:
				postfix = 'st';
				break;

			case 2 || 22:
				postfix = 'nd';
				break;

			case 3 || 23:
				postfix = 'rd';
				break;

			default:
				postfix = 'th';
				break;
		}

		var month = d.getMonth();
		var year = d.getFullYear();

		return {
			nice: `${dName[dayNum]} ${day}${postfix} ${mName[month]} ${year}`,
			iso: `${year}/${month + 1}/${day}`,
			eur: `${day}/${month + 1}/${year}`,
			us: `${month + 1}/${day}/${year}`,
			ugly: `${new Date(date).toString() || new Date().toString()}`,
		};
	}

	clock(time) {
		let dTime = new Date();
		if (time) dTime = new Date(time);
		const eu = dTime.toLocaleString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
		const us = dTime.toLocaleString([], { hour: 'numeric', minute: 'numeric', second: '2-digit', hour12: true });

		return {
			eu: eu,
			us: us,
		};
	}

	stamp(stampNow) {
		if (stampNow) return ~~(Date.now(stampNow) / 1000);
		return ~~(Date.now() / 1000);
	}
}

module.exports = timeConstruct;
