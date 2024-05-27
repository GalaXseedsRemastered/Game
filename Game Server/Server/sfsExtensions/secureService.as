/*
* SmartFoxServer PRO
* Secure Login Example
* v 1.0.0
* 
* (c) 2005 gotoAndPlay()
*
*
* Extensions Overview:
* -----------------------------------------------------------------
* Every extension must implement four basic methods:
* 
* init(), destroy(), handleRequest(), handleInternalEvent()
* 
* init()			It's the initialization point of the extension
* 				This method is invoked by the server on the extension as soon as it is loaded
* 				You can put here all your initialization code.
* 
* destroy()			This method is called by the server when the extension is going to be destroyed
* 				You should always put in this method the necessary code to release the resources
* 				you were using like setInterval(s), database connections etc...
* 
* handleRequest()		This method receives the client requests
* 
* handleInternalEvent()		Handles internal server events. Events are:
* 
* 				userJoin	when a user joins the room / zone
* 				userExit	when a user exits a room
* 				userLost	when a user disconnects
* 				newRoom		a new room was created in the zone
* 				roomLost	a room was destroyed in the zone
* 				loginRequest	a custom login request arrived	
*  
*/


var userList 

/* 
* Initializion point:
* 
* this function is called as soon as the extension
* is loaded in the server.
* 
* You can add here all the initialization code
* 
*/
function init()
{
	// Simple list of users
	// The key is the username, the value is the password
	userList = new Object()

	userList["tom"] 	= "tom"
	userList["jerry"] 	= "jerry"
	userList["smart"] 	= "fox"
	var zone = _server.getCurrentZone()
	zone.setPubMsgInternalEvent(true)
}



/*
* This method is called by the server when an extension
* is being removed / destroyed.
* 
* Always make sure to release resources like setInterval(s)
* open files etc in this method.
* 
* In this case we delete the reference to the databaseManager
*/
function destroy()
{
	trace("Bye bye!")
}



/*
* 
* Handle Client Requests
* 
* cmd 		= a string with the client command to execute 
* params 	= list of parameters expected from the client
* user 		= the User object representing the sender
* fromRoom 	= the id of the room where the request was generated
* 
*/
function handleRequest(cmd, params, user, fromRoom)
{
	trace("CMD:" + cmd)
	trace("User:" + user.name)
	params.length
	trace("Params:" + params.join(':'))
	trace("Fromroom:" + fromRoom)
	var response
	var id = params[0]

	if (cmd == 0) // CreateRoom
	{
		//response = [0, 1, id, "0"]
		//_server.sendResponse(response, 1, null, [user], "str")
		//response = [0, 1, id, "0~0~0"]
		/*
		RoomInfo.isGame = true;
         RoomInfo.uCount = false;
         RoomInfo.maxU = RoomInfo.maxUser;
         RoomInfo.maxS = 0;
		*/
		var roomObj = {}
		roomObj.name = params[0]
		roomObj.maxU = params[1]
		roomObj.isGame = params[2]
		roomObj.uCount = params[3]
		roomObj.maxS = params[4]
		
		var theRoom = _server.createRoom(roomObj, user, true, true)
		
		if (theRoom != null)
		{
			trace("Room Created Successfully")
			trace("Join: " + theRoom.getId())
			trace("getRoomsConnected: " + user.getRoomsConnected()[0])
			trace("getRoomsConnected2: " + user.getRoomsConnected()[1])
			_server.joinRoom(user, user.getRoomsConnected()[1], true, theRoom.getId(), false)
		}
		else
			trace("OUCH! Room was not created!!!")


	}
	else if (params[1] == 2) // OnClanData
	{
		response = [103, 1, id, "1~1~1~Capsule/Capsule.swf~101"]
	}
	else if (params[1] == 3) // OnMyAvatarData
	{
		response = [103, 1, id, "20~0,0,0~16~0,0,0~1~0,0,0~1~0,0,0~7~0,0,0'*'-1~0,0,0~-1~0,0,0~-1~0,0,0~-1~0,0,0'*'1"]
	}
	else if (params[1] == 4) // OnLockData
	{
		response = [103, 1, id, "1~1~1~1~1~1~1~1~1~1"]
	}
	else if (params[1] == 6) // OnCapsuleData
	{
		response = [103, 1, id, "1~1~1~1~1~1~1~1"]
	}
	else
	{
		response = [103, 1, id, "1~1~1~1~1~1~1~1~1~1"]
	}
	
	//_server.sendResponse(response, 1, null, [user], "str")
}


/*
* This method handles internal events
* Internal events are dispactched by the Zone or Room where the extension is attached to
* 
* the (evt) object
*/
function handleInternalEvent(evt)
{	
	trace("EVENT: " + evt.name)
	evtName = evt.name
	if (evtName == "pubMsg")
	{
		sourceRoom = evt.room		// the room object
		senderUser = evt.user		// the sender user
		message = evt.msg			// the public message
		trace("MSG:" + "@~MG_147945~1")
		_server.dispatchPublicMessage("@~MG_147945~1", sourceRoom, senderUser)	
	}
	if (evt.name == "newRoom")
	{
		var newRoom = evt.room
		var rId = newRoom.getId()
		response = [rId, "1~1~1~1"]
		_server.sendResponse(response, 1, null, [evt.user], "str")
	}
}


