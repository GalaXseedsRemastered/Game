<?php

switch(intval($_GET["TID"]))
{
	case 1:
		$tut_text = "Hello, and welcome to GalaXseeds!  This is your very own Pod, your home away from home! Feel free to look around.\nClick these exit arrows and special rings to explore your world!  If you need help at any time, click the Help button.";
	break;
	case 2:
		$tut_text = "What a good idea!  By adding Gear to your Pod, you can make it look exactly how you want it.  You won't be able to dress up your Pod without Gear!  Check your map for the nearest Gear Shop, or trade for Gear with other Seedizens.";
	break;
	case 3:
		$tut_text = "You've discovered your garden! \nEvery Seedizen has one.  It's where you can plant Seeds and grow some amazing new Plants! Your Plants might even drop Seeds that you can sell later.  Be sure to visit other Pods to see which Plants other people are growing.";
	break;
	case 4:
		$tut_text = "You can plant Seeds in these empty pits!  If you don't have any Seeds, check your map for the nearest Garden Shop, or trade for some with other Seedizens. While you're at the Garden Shop, keep your eyes peeled for Gizmos that can change your Plants in many interesting ways!";
	break;
	case 5:
		$tut_text = "This is the big wide world!  There's so much to do in GalaXseeds, I can't even begin to tell you!  Why don't you start by exploring?  You can always use the Help button if you get stuck.";
	break;
	case 6:
		$tut_text = "You've discovered a shop!  There are many different places to buy and sell items in GalaXseeds.  Your money is called Botanickels.  You'll need some Botanickels before you can buy anything.  If you're broke, you can earn money playing the gardening games that you'll find on your home planet.";
	break;
	case 7:
		$tut_text = "This is your Seedizens List!  It shows everyone in this area, along with your friends and the people you're ignoring.  From this list, you can trade and whisper with other people, take a peek what they're carrying, make some friends, or ignore some pests!  You can do all of this by clicking on a player's character, but the Seedizens List makes it easier.";
	break;
	case 8:
		$tut_text = "This is the inventory screen, where you keep track of all your stuff!  If you have any Get-Ups, you can wear and remove them by clicking on them.  Click on the item tabs to see different types of items.  If you earn enough Experience Points (XP) by gardening and completing missions, you can improve your character by pressing the Level Up! button. More experienced gardeners can carry more items and visit more places than new players.";
	break;
	case 9:
		$tut_text = "Congratulations on planting a Seed!  Your new Plant can't take care of itself, so you'll have to watch over it and help it thrive.  Try using Gizmos on your Plant to change its appearance and the way it grows.  You can also press the Care button to play Tuber Shooter to increase your Plant's health.  The healthier your Plant is, the faster it will grow.  
If you manage to grow your Plant to maturity, you'll earn Experience Points (XP) which help you to become a better gardener!";
	break;
	case 10:
		$tut_text = "This is a map of all the interesting places on this planet.  Point at the different pictures on the map to read about those locations.  If you want to travel to other planets or other sections of the map, step into a Teleplanter.  If you have enough Botanickels, you'll be whisked away to another place in no time!  You can earn Botanickels by playing the gardening games that you find on the map.";
	break;
	default:
		$tut_text = "?";
	break;
}
?>
Success=true&Result=<?php echo $tut_text; ?>~-1