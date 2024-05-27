//////////////////////////////////////////////////////////
/// Class:   The Big Rip
/// Version: 0.2 
/// Contact: Dan Vogler
//////////////////////////////////////////////////////////
if(Ad == "undefined") var Ad = new Object();

var adPlacement = 0;

function Ad(channel, category, site, zone) {
    var axel = Math.random() + ""; var ord = axel * 1000000000000000000;
    this.attributes = new Array(); 
    if (channel) this.setAttribute('channel',  channel);
    if (category)this.setAttribute('category', category);
    if (site)    this.setAttribute('site',     site);
    if (zone)    this.setAttribute('zone',     zone);
    this.setAttribute('ord', ord);
}
Ad.prototype = {
  setAttribute: function(name, value){
    this.attributes[name] = value;
  },
  getAttribute: function(name){
    return this.attributes[name];
  },
  write: function(size, tiles, direction){
  adPlacement = adPlacement + 1;
    var tile=0;
    var str_tiles = "tile=" + tile;
    if (tiles) {
        if (direction) {
			str_tiles = "tn="+tiles+";to="+direction+";tbw=0;tp=1;tsw=0x0";
		}
        else {
			str_tiles = "tn="+tiles+";to=h;tbw=0;tp=1;tsw=0x0";
		}
    }
    else
    	{
    		str_tiles = "tn="+tiles+";to=h;tbw=0;tp=1;tsw=0x0";
    	}
    
    document.write('<SCR'+'IPT LANGUAGE="JavaScript1.1" SRC="http://127.0.0.1/adj/' + this.getAttribute("site") + '.site112.tmus/' + this.getAttribute("zone") + ';comp=' + adid + ';genre=' + this.getAttribute("category") + ';page=' + window.location.pathname+ ';' + str_tiles + ';sz=' + size + ';key-values;tile=' + adPlacement + ';ord=' + this.getAttribute("ord") + '?"><\/SCRIPT>');
    if ((!document.images && navigator.userAgent.indexOf("Mozilla/2.") >= 0)  || navigator.userAgent.indexOf("WebTV")>= 0) {
        document.write('<A HREF="http://127.0.0.1/jump/' + this.getAttribute("site") + '.site112.tmus/' + this.getAttribute("zone") + ';comp=' + adid + ';genre=' + this.getAttribute("category") + ';tile=' + tile + ';sz=' + size + ';key-values;tile=' + adPlacement + ';ord=' + this.getAttribute("ord") + '?" TARGET="_blank">');
        document.write('<IMG SRC="http://127.0.0.1/ad/' + this.getAttribute("site") + '.site112.tmus/' + this.getAttribute("zone") + ';comp=' + adid + ';genre=' + this.getAttribute("category") + ';tile='+tile+';sz=' + size + ';key-values;tile=' + adPlacement + ';ord=' + this.getAttribute("ord") + '?" BORDER="0" ALT=""></A>');
    }
  }
}

function dart_hide_overlay()
{
	//fix for bionicles
}

// DEFINE SITE VARIABLES HERE
var ADS_CHANNEL_NAME  = "tv";
var ADS_CATEGORY_NAME = "kids";
var ADS_SITE_NAME     = "thebigrip";
var HOMEPAGE_PATH     = "/index.asp" || "/";
var HOMEPAGE_ZONE     = "homepage";
var DEFAULT_ZONE      = "ros";

var path_mapping = new Array();
path_mapping["news"]   		= "news";
path_mapping["help"]       	= "help";
path_mapping["membership"]  = "membership";
path_mapping["parents"]     = "parents";
path_mapping["about"]       = "about";
path_mapping["darttest"]    = "darttest";

//////////////////////////////////////////////////////////
/// DO NOT EDIT BELOW HERE
//////////////////////////////////////////////////////////
var adid = "";
var zone_name = DEFAULT_ZONE;
if(document.location.hostname != "undefined"  && document.location.hostname != "") //&& document.location.hostname != "localhost"
{
    if (document.location.pathname.toLowerCase() == "/" || document.location.pathname.toLowerCase() == HOMEPAGE_PATH) zone_name = HOMEPAGE_ZONE;
    else {zone_name = document.location.pathname.toLowerCase().substring(1,document.location.pathname.indexOf('/',2));}
}
if (path_mapping[zone_name]) {
    zone_name = path_mapping[zone_name];
}

//Create Ad Object
var ads = new Ad(ADS_CHANNEL_NAME, ADS_CATEGORY_NAME, ADS_SITE_NAME, zone_name);