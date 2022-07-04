/*	Make your bot join a thread.
    channel is a string.	*/
thread
	.join(channel);

/*	Add a guild member to a thread.
    both user and channel are strings.	*/
thread
	.addMember(user, channel);

/*	Make your bot leave the specified thread.
    Channel is  a string.	*/
thread
	.leave(channel);

/*	Remove a guild member from specified thread.
    Both user and channel are strings.	*/
thread
	.removeMember(user, channel);

/*	Get guild member from thread.
    Both user and channel are strings.
    Will return a member object.	*/
thread
	.getMember(user, channel)
	.then((val) => console.log(val));

/*	Get member list which are present in the specified thread.
    Channel is a string.
    Will return an array of member objects.	*/
thread
	.memberList(channel)
		.then((val) => console.log(val));
	
/*	Get public archive.	*/
thread
	.publicArchive(channel)
		.then((val) => console.log(val));
	
/*	Get private archive.	*/
thread
	.privateArchive(channel)
		.then((val) => console.log(val));
	
/*	Get joined private archives	*/
thread
	.joinedPrivateArchive(channel)
		.then((val) => console.log(val));

/*	Get a list of all active threads in specified guild.	*/
thread
	.allThreads(guildId)
		.then((val) => console.log(val));
