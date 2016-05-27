var DTM_pageurl = window.location.pathname;
DTM_pageurl = DTM_pageurl.toLowerCase();
var DTM_pageURLs = DTM_pageurl.split("pages/");
var DTM_Sections = DTM_pageURLs[0].split("/");
var DTM_channel = "";
var DTM_subSection2 = "";
var DTM_subSection3 = "";
if(DTM_Sections.length > 2)
{
	DTM_channel = DTM_Sections[1];
	DTM_subSection2 = DTM_Sections[2];
	if(DTM_Sections.length > 3)
	{
		var DTM_subSection3 = DTM_Sections[3];
		
		for (i = 4; i < DTM_Sections.length-1; i++) {				
			DTM_subSection3 = DTM_subSection3 + " " + DTM_Sections[i];				
		}
	}
} else {
	DTM_channel = "Home Page";
}

var digitalData = {
	page : {
		'pageName': document.title, 
		'channel': DTM_channel,
		'subSection2': DTM_subSection2,
		'subSection3': DTM_subSection3
	}
};



if(DTM_pageurl == "/search/" || DTM_pageurl == "/search/pages/index.aspx")
{
	var DTM_searchq = window.location.href;
	DTM_searchq = DTM_searchq.toLowerCase();
	var DTM_search_keyword = DTM_searchq.split("q=");
	if(DTM_search_keyword.length > 1)
	{
		DTM_search_keyword = DTM_search_keyword[1];	
		DTM_search_keyword = DTM_search_keyword.replace(/%20/gi, " ");
		digitalData = {
		search : {
			'internalSearchKeywords': DTM_search_keyword
			}
		};
	}
}
