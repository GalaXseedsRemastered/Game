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
	
	// no requests to handle here...
}


/*
* This method handles internal events
* Internal events are dispactched by the Zone or Room where the extension is attached to
* 
* the (evt) object
*/
function handleInternalEvent(evt)
{	
	if (evt.name == "loginRequest")
	{
		// This will hold an error message
		var error = ""
				
		var nick = evt["nick"]
		var pass = evt["pass"]
		var chan = evt["chan"]

		var obj = _server.loginUser(nick, pass, chan)
		
		if (obj.success == false)
			error = obj.error
	
		// Send response to client
		var response = new Object()
		
		if (error == "")
		{
			response.Command = "LoginGranted"
			response.name = nick
		}
		else
		{
			response.Command = "LoginDenied"
			response.err = error		}
		
		/*
		* NOTE:
		* usually the 4th parameter of the sendResponse is a list of users object that will
		* receive this message.
		* 
		* Only when handling a login request you can pass a channel instead of a list of Users
		*/
		trace("Send: " + response.Command)
		_server.sendResponse(response, -1, null, chan)

	}
}


