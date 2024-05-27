


// leaving Galaxseeds.com alert box
	function linkOutside(strURL) {
		//if (confirm('You are now leaving the Galaxseeds website!\n\nTo return simply close the new window.')) {
		var statsTag = _hbRedirect("","Redirect","","&c4=" + strURL);
		winSite = window.open(strURL, "pop_up_ad");
		var winMsg = window.open("/common/ads/message/leavingYTV.asp?" +strURL, "Leaving_YTV", "noresize,scrollbars=no,width=350,height=432,status=no");
		//}
	}


// random homepage images
	function promotable() {
		var length = 5;
		var rand = Math.round(Math.random() * (length-1) + 1);	
		document.write(
		"<a href='#' onClick=playNow('http://galaxseeds.thebigrip.com');><img src='/common/img/frontPromotable"+
		rand+
		".jpg' width='364' height='279' /></a>"
		);
	}

// playNow() function moved to Global nav common/inc/globalnav.asp to control when the game is offline/online


