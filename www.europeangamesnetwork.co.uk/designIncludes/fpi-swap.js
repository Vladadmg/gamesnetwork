// In this section we set up the content to be placed dynamically on the page.
// Customize movie tags and alternate html content below.

if (!useRedirect) {    // if dynamic embedding is turned on
  if(hasRightVersion) {  // if we've detected an acceptable version
  
  	// using the flash satay method - seems to create a wierd textbox like thing on some browsers
    // var oeTags = '<object type="application/x-shockwave-flash" data="c.swf?path=branding9.swf" width="505" height="150">'
    // + '<param name="movie" value="c.swf?path=branding9.swf" />'
    // + '</object>';
	
	// using the regular method
	var oeTags ='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="455" height="250" id="branding8" align="">'
 	+'<param name="movie" value="images/homepageMovie.swf" />'
 	+'<param name="quality" value="high" />'
 	+'<param name="bgcolor" value="#FFFFFF" />'
 	+'<embed src="images/homepageMovie.swf" quality="high" bgcolor="#FFFFFF"  width="455" height="250" name="branding9" align="" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed>'
	+'</object>';

    document.write(oeTags);   // embed the flash movie
  } else {  // flash is too old or we can't detect the plugin
    // NOTE: height, width are required!
    var alternateContent = '<img src="images/homepageAnim.jpg" alt="Businessmen shaking hands in front of a window" width="455" height="250"  />';

    document.write(alternateContent);  // insert non-flash content
  }
}