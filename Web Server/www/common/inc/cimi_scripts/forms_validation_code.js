	
	function IsBlank(strString) {
		for(var i =0; i < strString.length; i++) {
			var strChar = strString.charAt(i);
			if ((strChar !=' ') && (strChar != '\n') && (strChar != '\t')) return false;
		}
		return true;
	}


	function ElementIsRequired(strElementName) {
        //		var strUCaseName=strElementName.toUpperCase();
        //		if (strUCaseName.substr((strUCaseName.length-4),4)=="_NOT") {
        //			return false;
        //		}
        //		else {
		return true;
        //		}
	}


	function ValidateElement(varElement) {
		if ((varElement.value==null)||(varElement.value=="")||IsBlank(varElement.value)) {
			alert("Missing required info!");
			varElement.focus();
			return false;
		}
		else{
			var strElementName=varElement.name;
			strElementName=strElementName.toUpperCase();
			if (strElementName.search("RUNNINGLENGTH")>-1) {
				if (ValidateRunningLength(varElement.value)) {
					return true;
				}
				else {
					alert("Invalid Running Length format!\n(Use hh:mm:ss, e.g., 01:32:13)");
					varElement.focus();
					return false;
				}
			}
			return true;
		}
	}


	function ValidateForm(objForm) {
		for (a=0; a < objForm.length;a++) {
			if ((ElementIsRequired(objForm.elements[a].name))&&((objForm.elements[a].type=="text")||(objForm.elements[a].type=="textarea"))) {
				if (!ValidateElement(objForm.elements[a])) {
					return false;
				}
			}
		}

		return true;
	}
	

	function ValidatePhoneNumber(strPhoneText) {
		var strCleanedString=""; //has to be initialized or bad things happen
		var strCurrentChar;
		var a;


		for (a=0;a<strPhoneText.length;a++) {
			strCurrentChar=strPhoneText.substring(a,a+1);
			if (strCurrentChar.search("[0-9]")>-1) {
				strCleanedString=strCleanedString + strCurrentChar;
			}
		}


		if (strCleanedString.length<10) {
			return false;
		}
		else {
			return true;
		}
	}
	
	
	
	function ValidateHourMinuteSecondTime(strTime) {
		var strPattern = strTime;
		
		//hours 0-19
		var lngResult = strPattern.search("[0-1][0-9]:[0-5][0-9]:[0-5][0-9]");
		
		//hours 20-23
		if (lngResult==-1) {
			lngResult = strPattern.search("[2][0-3]:[0-5][0-9]:[0-5][0-9]");
		}
		
		if (lngResult==-1) {
			return false;
		}
		else {
			return true;
		}
	}
	
	function ValidateEmailAddress(email){

	  if (email.length<3) {
	    return false;
	  }
	  var result = false
	  var theStr = new String(email)
	  var index = theStr.indexOf("@");
	  if (index > 0)
	  {
	    var pindex = theStr.indexOf(".",index);
	    if ((pindex > index+1) && (theStr.length > pindex+1))
		result = true;
	  }
	  return result;
	}

	
	