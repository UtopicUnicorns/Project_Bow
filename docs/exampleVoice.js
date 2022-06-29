/*	Highly experimental voice support.	*/

let player = new voice();
		player.join({ guildId: 'guildId', channelId: 'channelId' }, incomingMessage);
		player.play('aBallad','guildId');
		
let secondPlayer = new voice();
		secondPlayer.join({ guildId: 'guildId', channelId: 'channelId' }, incomingMessage);
		secondPlayer.play('aSong','guildId');
