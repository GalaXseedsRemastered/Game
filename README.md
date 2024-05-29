# GalaXseeds Remastered

[![Discord](https://img.shields.io/discord/1106807744545161248.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2)](https://discord.com/invite/pBhcuPcdWu)

Welcome to the repository for [GalaXseeds Remastered](https://galaxseedsremastered.com/)! 

# Setting up your Local Environment
You must do the following in order to get the server/game client working.  This is for Windows only.

1. Go to Start > Type "Notepad", right click Notepad and run as administrator.
2. File > Open
3. Go to C:\Windows\System32\drivers\etc
4. Change "Text Documents (*.txt)" at the bottom right to "All Files (*.*)"
5. Open "hosts"
6. Scroll to the bottom, paste the following at the bottom:
```
127.0.0.1 galaxseeds.thebigrip.com
127.0.0.1 www.galaxseeds.thebigrip.com
127.0.0.1 thebigrip.com
127.0.0.1 www.thebigrip.com
```
7. Save the file, close notepad.

# Game Server
SmartFoxServer doesn't require any installation.

1. Open the "Game Server" folder.
2. Double click "start.bat"

# Web Server
The web server is required in order to serve SWF files to the game client (Flash player or otherwise)

1. Open the "Web Server" folder.
2. Double click "UwAmp.exe".  If any prompts to allow access pop up, accept the prompts.
3. Click "Start"

# Game Client
1. Open the "Game Client" folder.
2. Run "FlashPlayer.exe"
3. Go to File > Open, paste the following, then click Open.
```
http://galaxseeds.thebigrip.com/Client.swf
```

Game client should open and connect to the server.  You should be able to log on to Achairius, walk around, and play one of the minigames.  Many things will fail to load as we're missing their assets.  While you can have two clients connected at the same time, multiplayer is not implemented.
