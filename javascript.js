// ---------------------------------------------------------------------------------
// Configuration repository
// ---------------------------------------------------------------------------------

var version = {major: 1, minor: 2, revision: 35, date: new Date("Sep 29, 2005"), extensions: {}};

var config = {
	// Options that can be set in the options panel and/or cookies
	options: {
		chkRegExpSearch: false,
		chkCaseSensitiveSearch: false,
		chkAnimate: true,
		txtUserName: "YourName",
		chkSaveBackups: true,
		chkAutoSave: false,
		chkGenerateAnRssFeed: true,
		chkSaveEmptyTemplate: false,
		chkOpenInNewWindow: true,
		chkToggleLinks: false,
		chkHttpReadOnly: false,
		chkForceMinorUpdate: false,
		txtMainTab: "tabTimeline",
		txtMoreTab: "moreTabAll"
		},
	// List of notification functions to be called when certain tiddlers are changed or deleted
	notifyTiddlers: [
		{name: "StyleSheet", notify: refreshStyles},
		{name: null, notify: refreshMenu},
		{name: null, notify: refreshStory},
		{name: null, notify: refreshTabs},
		{name: "SiteTitle", notify: refreshTitle},
		{name: "SiteSubtitle", notify: refreshSubtitle},
		{name: "SideBarOptions", notify: refreshSidebar}
		],
	// Shadow tiddlers for emergencies
	shadowTiddlers: {
		SideBarOptions: "<<gradient vert #ffffff #cc9900>><<search>><<closeAll>><<permaview>><<saveChanges>><<slider chkSliderOptionsPanel OptionsPanel options 'Change TiddlyWiki advanced options'>>>>",
		OptionsPanel: "These InterfaceOptions for customising ProjectWiki are saved in your browser\n\nYour username for signing your edits. Write it as a WikiWord (eg JoeBloggs)\n\n<<option txtUserName>>\n<<option chkSaveBackups>> SaveBackups\n<<option chkAutoSave>> AutoSave\n<<option chkGenerateAnRssFeed>> GenerateAnRssFeed\n<<option chkRegExpSearch>> RegExpSearch\n<<option chkCaseSensitiveSearch>> CaseSensitiveSearch\n<<option chkAnimate>> EnableAnimations\n\nSee AdvancedOptions",
		AdvancedOptions: "<<option chkOpenInNewWindow>> OpenLinksInNewWindow\n<<option chkSaveEmptyTemplate>> SaveEmptyTemplate\n<<option chkToggleLinks>> Clicking on links to tiddlers that are already open causes them to close\n^^(override with Control or other modifier key)^^\n<<option chkHttpReadOnly>> HideEditingFeatures when viewed over HTTP\n<<option chkForceMinorUpdate>> Treat edits as MinorChanges by preserving date and time\n^^(override with Shift key when clicking 'done' or by pressing Ctrl-Shift-Enter^^",
		SideBarTabs: "<<tabs txtMainTab Timeline Timeline TabTimeline All 'All tiddlers' TabAll Tags 'All tags' TabTags More 'More lists' TabMore>>",
		TabTimeline: "<<timeline>>",
		TabAll: "<<list all>>",
		TabTags: "<<allTags>>",
		TabMore: "<<tabs txtMoreTab Missing 'Missing tiddlers' TabMoreMissing Orphans 'Orphaned tiddlers' TabMoreOrphans>>",
		TabMoreMissing: "<<list missing>>",
		TabMoreOrphans: "<<list orphans>>"
		},
	// Miscellaneous options
	numRssItems: 20, // Number of items in the RSS feed
	animFast: 0.12, // Speed for animations (lower == slower)
	animSlow: 0.01, // Speed for EasterEgg animations
	// Messages
	messages: {
		customConfigError: "Error in systemConfig tiddler '%1' - %0",
		savedSnapshotError: "It appears that this ProjectWiki has been incorrectly saved",
		subtitleUnknown: "(unknown)",
		undefinedTiddlerToolTip: "The tiddler '%0' doesn't yet exist",
		externalLinkTooltip: "External link to %0",
		noTags: "There are no tagged tiddlers",
		notFileUrlError: "You need to save this ProjectWiki to a file before you can save changes",
		cantSaveError: "It's not possible to save changes using this browser. Use FireFox if you can",
		invalidFileError: "The original file '%0' does not appear to be a valid TiddlyWiki",
		backupSaved: "Backup saved",
		backupFailed: "Failed to save backup file",
		rssSaved: "RSS feed saved",
		rssFailed: "Failed to save RSS feed file",
		emptySaved: "Empty template saved",
		emptyFailed: "Failed to save empty template file",
		mainSaved: "Main ProjectWiki file saved",
		mainFailed: "Failed to save main ProjectWiki file. Your changes have not been saved",
		macroError: "Error executing macro '%0'",
		overwriteWarning: "A tiddler named '%0' already exists. Choose OK to overwrite it",
		unsavedChangesWarning: "WARNING! There are unsaved changes in ProjectWiki\n\nChoose OK to save\nChoose CANCEL to discard",
		dates: {
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"],
			days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
			}
		},
	views: {
		wikified: {
			tag: {labelNoTags: "no tags", labelTags: "tags: ", tooltip: "Show tiddlers tagged with '%0'", openAllText: "Open all", openAllTooltip: "Open all of these tiddlers", popupNone: "No other tiddlers tagged with '%0'"},
			toolbarClose: {text: "close", tooltip: "Close this tiddler"},
			toolbarEdit: {text: "edit", tooltip: "Edit this tiddler"},
			toolbarPermalink: {text: "permalink", tooltip: "Permalink for this tiddler"},
			toolbarReferences: {text: "references", tooltip: "Show tiddlers that link to this one", popupNone: "No references"},
			defaultText: "The tiddler '%0' doesn't yet exist. Double-click to create it"
			},
		editor: {
			tagPrompt: "Type tags separated with spaces, [[use double square brackets]] if necessary, or add existing",
			tagChooser: {text: "tags", tooltip: "Choose existing tags to add to this tiddler", popupNone: "There are no tags defined", tagTooltip: "Add the tag '%0'"},
			toolbarDone: {text: "done", tooltip: "Save changes to this tiddler"},
			toolbarCancel: {text: "cancel", tooltip: "Undo changes to this tiddler"},
			toolbarDelete: {text: "delete", tooltip: "Delete this tiddler"},
			defaultText: "Type the text for '%0'"
			}
		},
	macros: { // Each has a 'handler' member that is inserted later
		today: {},
		version: {},
		search: {label: "search", prompt: "Search this ProjectWiki", sizeTextbox: 15, accessKey: "F", successMsg: "%0 tiddlers found matching %1", failureMsg: "No tiddlers found matching %0"},
		tiddler: {},
		tag: {},
		timeline: {dateFormat: "DD MMM YYYY"},
		allTags: {tooltip: "Show tiddlers tagged with '%0'", noTags: "There are no tagged tiddlers"},
		list: {
			all: {prompt: "All tiddlers in alphabetical order"},
			missing: {prompt: "Tiddlers that have links to them but are not defined"},
			orphans: {prompt: "Tiddlers that are not linked to from any other tiddlers"}
			},
		closeAll: {label: "close all", prompt: "Close all displayed tiddlers (except any that are being edited)"},
		permaview: {label: "permaview", prompt: "Link to an URL that retrieves all the currently displayed tiddlers"},
		saveChanges: {label: "save changes", prompt: "Save all tiddlers to create a new TiddlyWiki", accessKey: "S"},
		slider: {},
		option: {},
		newTiddler: {label: "new tiddler", prompt: "Create a new tiddler", title: "New Tiddler", accessKey: "N"},
		newJournal: {label: "new journal", prompt: "Create a new tiddler from the current date and time", accessKey: "J"},
		sparkline: {},
		tabs: {},
		gradient: {}
		},
	textPrimitives: {}
};

config.textPrimitives.upperLetter = "[A-Z\u00c0-\u00de\u0150\u0170]";
config.textPrimitives.lowerLetter = "[a-z\u00df-\u00ff_0-9\\-\u0151\u0171]";
config.textPrimitives.anyLetter = "[A-Za-z\u00c0-\u00de\u00df-\u00ff_0-9\\-\u0150\u0170\u0151\u0171]";
config.textPrimitives.anyDigit = "[0-9]";
config.textPrimitives.anyNumberChar = "[0-9\\.E]";
config.textPrimitives.urlPattern = "(?:http|https|mailto|ftp):[^\\s'\"]+(?:/|\\b)";
config.textPrimitives.unWikiLink = "~";
config.textPrimitives.wikiLink = "(?:" + config.textPrimitives.unWikiLink + "?)(?:" + config.textPrimitives.upperLetter + "+" +
											   config.textPrimitives.lowerLetter + "+" +
											   config.textPrimitives.upperLetter +
											   config.textPrimitives.anyLetter + "*)|(?:" +
											   config.textPrimitives.upperLetter + "{2,}" +
											   config.textPrimitives.lowerLetter + "+)";

// ---------------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------------

// TiddlyWiki storage
var store = new TiddlyWiki();

// Animation engine
var anim = new Animator();

var readOnly = false;

// Starting up
function main()
{
	browserTests();
	readOnly = (document.location.toString().substr(0,7) == "http://") ? config.options.chkHttpReadOnly : false;
	saveTest();
	loadOptionsCookie();
	for(var s=0; s<config.notifyTiddlers.length; s++)
		store.addNotification(config.notifyTiddlers[s].name,config.notifyTiddlers[s].notify);
	store.loadFromDiv("storeArea","store");
	loadSystemConfig();
	store.notifyAll();
	restart();
}

// Restarting
function restart()
{
	var start = store.getTiddlerText("DefaultTiddlers");
	if(window.location.hash)
		displayTiddlers(null,convertUTF8ToUnicode(decodeURI(window.location.hash.substr(1))),1,null,null);
	else if(start)
		displayTiddlers(null,start,1,null,null);
}

// Shame...
function browserTests()
{
	var a = navigator.userAgent.toLowerCase();
	config.browser = {
		isIE: a.indexOf("msie") != -1 && a.indexOf("opera") == -1
		};
}

function saveTest()
{
	var saveTest = document.getElementById("saveTest");
	if(saveTest.hasChildNodes())
		alert(config.messages.savedSnapshotError);
	saveTest.appendChild(document.createTextNode("savetest"));
}

function loadSystemConfig()
{
	var configTiddlers = store.getTaggedTiddlers("systemConfig");
	for(var t=0; t<configTiddlers.length; t++)
		{
		var ex = processConfig(configTiddlers[t].text);
		if(ex)
			displayMessage(config.messages.customConfigError.format([ex,configTiddlers[t].title]));
		}
}

// Merge a custom configuration over the top of the current configuration
// Returns a string error message or null if it went OK
function processConfig(customConfig)
{
	try
		{
		if(customConfig && customConfig != "")
			window.eval(customConfig);
		}
	catch(e)
		{
		return(e.toString());
		}
	return null;
}

// ---------------------------------------------------------------------------------
// Formatters
// ---------------------------------------------------------------------------------

config.formatterHelpers = {

	charFormatHelper: function(w)
	{
		var e = createTiddlyElement(w.output,this.element);
		w.subWikify(e,this.terminator);
	},
	
	inlineCssHelper:  function(w)
	{
		var styles = [];
		var lookahead = "(?:(" + config.textPrimitives.anyLetter + "+)\\(([^\\)\\|\\n]+)(?:\\):))|(?:(" + config.textPrimitives.anyLetter + "+):([^;\\|\\n]+);)";
		var lookaheadRegExp = new RegExp(lookahead,"mg");
		var hadStyle = false;
		do {
			lookaheadRegExp.lastIndex = w.nextMatch;
			var lookaheadMatch = lookaheadRegExp.exec(w.source);
			var gotMatch = lookaheadMatch && lookaheadMatch.index == w.nextMatch;
			if(gotMatch)
				{
				var s,v;
				hadStyle = true;
				if(lookaheadMatch[1])
					{
					s = lookaheadMatch[1].unDash();
					v = lookaheadMatch[2];
					}
				else
					{
					s = lookaheadMatch[3].unDash();
					v = lookaheadMatch[4];
					}
				switch(s)
					{
					case "bgcolor": s = "backgroundColor"; break;
					}
				styles.push({style: s, value: v});
				w.nextMatch = lookaheadMatch.index + lookaheadMatch[0].length;
				}
		} while(gotMatch);
		return styles;
	},

	monospacedByLineHelper: function(w)
	{
		var lookaheadRegExp = new RegExp(this.lookahead,"mg");
		lookaheadRegExp.lastIndex = w.matchStart;
		var lookaheadMatch = lookaheadRegExp.exec(w.source);
		if(lookaheadMatch && lookaheadMatch.index == w.matchStart)
			{
			var text = lookaheadMatch[1];
			if(config.browser.isIE)
				text = text.replace(/\n/g,"\r");
			var e = createTiddlyElement(w.output,"pre",null,null,text);
			w.nextMatch = lookaheadMatch.index + lookaheadMatch[0].length;
			}
	}

};

config.formatters = [
{
	name: "table",
	match: "^\\|(?:[^\\n]*)\\|(?:[fhc]?)$",
	lookahead: "^\\|([^\\n]*)\\|([fhc]?)$",
	rowTerminator: "\\|(?:[fhc]?)$\\n?",
	cellPattern: "(?:\\|([^\\n\\|]*)\\|)|(\\|[fhc]?$\\n?)",
	cellTerminator: "(?:\\x20*)\\|",
	rowTypes: {"c": "caption", "h": "thead", "": "tbody", "f": "tfoot"},
	handler: function(w)
	{
		var table = createTiddlyElement(w.output,"table");
		w.nextMatch = w.matchStart;
		var lookaheadRegExp = new RegExp(this.lookahead,"mg");
		var currRowType = null, nextRowType;
		var rowContainer, rowElement;
		var prevColumns = [];
		var rowCount = 0;
		do {
			lookaheadRegExp.lastIndex = w.nextMatch;
			var lookaheadMatch = lookaheadRegExp.exec(w.source);
			var matched = lookaheadMatch && lookaheadMatch.index == w.nextMatch;
			if(matched)
				{
				nextRowType = lookaheadMatch[2];
				if(nextRowType != currRowType)
					rowContainer = createTiddlyElement(table,this.rowTypes[nextRowType]);
				currRowType = nextRowType;
				if(currRowType == "c")
					{
					if(rowCount == 0)
						rowContainer.setAttribute("align","top");
					else
						rowContainer.setAttribute("align","bottom");
					w.nextMatch = w.nextMatch + 1;
					w.subWikify(rowContainer,this.rowTerminator);
					}
				else
					{
					rowElement = createTiddlyElement(rowContainer,"tr");
					this.rowHandler(w,rowElement,prevColumns);
					}
				rowCount++;
				}
		} while(matched);
	},
	rowHandler: function(w,e,prevColumns)
	{
		var col = 0;
		var currColCount = 1;
		var cellRegExp = new RegExp(this.cellPattern,"mg");
		do {
			cellRegExp.lastIndex = w.nextMatch;
			var cellMatch = cellRegExp.exec(w.source);
			matched = cellMatch && cellMatch.index == w.nextMatch;
			if(matched)
				{
				if(cellMatch[1] == "~")
					{
					var last = prevColumns[col];
					if(last)
						{
						last.rowCount++;
						last.element.setAttribute("rowSpan",last.rowCount);
						last.element.setAttribute("rowspan",last.rowCount);
						last.element.valign = "center";
						}
					w.nextMatch = cellMatch.index + cellMatch[0].length-1;
					}
				else if(cellMatch[1] == ">")
					{
					currColCount++;
					w.nextMatch = cellMatch.index + cellMatch[0].length-1;
					}
				else if(cellMatch[2])
					{
					w.nextMatch = cellMatch.index + cellMatch[0].length;;
					break;
					}
				else
					{
					var spaceLeft = false, spaceRight = false;
					w.nextMatch++;
					var styles = config.formatterHelpers.inlineCssHelper(w);
					while(w.source.substr(w.nextMatch,1) == " ")
						{
						spaceLeft = true;
						w.nextMatch++;
						}
					var cell;
					if(w.source.substr(w.nextMatch,1) == "!")
						{
						cell = createTiddlyElement(e,"th");
						w.nextMatch++;
						}
					else
						cell = createTiddlyElement(e,"td");
					prevColumns[col] = {rowCount: 1, element: cell};
					lastColCount = 1;
					lastColElement = cell;
					if(currColCount > 1)
						{
						cell.setAttribute("colSpan",currColCount);
						cell.setAttribute("colspan",currColCount);
						currColCount = 1;
						}
					for(var t=0; t<styles.length; t++)
						cell.style[styles[t].style] = styles[t].value;
					w.subWikify(cell,this.cellTerminator);
					if(w.matchText.substr(w.matchText.length-2,1) == " ")
						spaceRight = true;
					if(spaceLeft && spaceRight)
						cell.align = "center";
					else if (spaceLeft)
						cell.align = "right";
					else if (spaceRight)
						cell.align = "left";
					w.nextMatch = w.nextMatch-1;
					}
				col++;
				}
		} while(matched);		
	}
},

{
	name: "rule",
	match: "^----$\\n?",
	handler: function(w)
	{
		createTiddlyElement(w.output,"hr");
	}
},

{
	name: "heading",
	match: "^!{1,5}",
	terminator: "\\n",
	handler: function(w)
	{
		var e = createTiddlyElement(w.output,"h" + w.matchLength);
		w.subWikify(e,this.terminator);
	}
},

{
	name: "monospacedByLine",
	match: "^\\{\\{\\{\\n",
	lookahead: "^\\{\\{\\{\\n((?:^[^\\n]*\\n)+?)(^\\}\\}\\}$\\n?)",
	handler: config.formatterHelpers.monospacedByLineHelper
},

{
	name: "monospacedByLineForPlugin",
	match: "^//\\{\\{\\{\\n",
	lookahead: "^//\\{\\{\\{\\n\\n*((?:^[^\\n]*\\n)+?)(\\n*^//\\}\\}\\}$\\n?)",
	handler: config.formatterHelpers.monospacedByLineHelper
},

{
	name: "wikifyCommentForPlugin", 
	match: "^/\\*\\*\\*\\n",
	terminator: "^\\*\\*\\*/\\n",
	handler: function(w)
	{
		w.subWikify(w.output,this.terminator);
	}
},

{
	name: "quoteByBlock",
	match: "^<<<\\n",
	terminator: "^<<<\\n",
	handler: function(w)
	{
		var e = createTiddlyElement(w.output,"blockquote");
		w.subWikify(e,this.terminator);
	}
},

{
	name: "quoteByLine",
	match: "^>+",
	terminator: "\\n",
	element: "blockquote",
	handler: function(w)
	{
		var lookaheadRegExp = new RegExp(this.match,"mg");
		var placeStack = [w.output];
		var currLevel = 0;
		var newLevel = w.matchLength;
		var t;
		do {
			if(newLevel > currLevel)
				{
				for(t=currLevel; t<newLevel; t++)
					placeStack.push(createTiddlyElement(placeStack[placeStack.length-1],this.element));
				}
			else if(newLevel < currLevel)
				{
				for(t=currLevel; t>newLevel; t--)
					placeStack.pop();
				}
			currLevel = newLevel;
			w.subWikify(placeStack[placeStack.length-1],this.terminator);
			createTiddlyElement(placeStack[placeStack.length-1],"br");
			lookaheadRegExp.lastIndex = w.nextMatch;
			var lookaheadMatch = lookaheadRegExp.exec(w.source);
			var matched = lookaheadMatch && lookaheadMatch.index == w.nextMatch;
			if(matched)
				{
				newLevel = lookaheadMatch[0].length;
				w.nextMatch += lookaheadMatch[0].length;
				}
		} while(matched);
	}
},

{
	name: "list",
	match: "^(?:(?:\\*+)|(?:#+))",
	lookahead: "^(?:(\\*+)|(#+))",
	terminator: "\\n",
	outerElement: "ul",
	itemElement: "li",
	handler: function(w)
	{
		var lookaheadRegExp = new RegExp(this.lookahead,"mg");
		w.nextMatch = w.matchStart;
		var placeStack = [w.output];
		var currType = null, newType;
		var currLevel = 0, newLevel;
		var t;
		do {
			lookaheadRegExp.lastIndex = w.nextMatch;
			var lookaheadMatch = lookaheadRegExp.exec(w.source);
			var matched = lookaheadMatch && lookaheadMatch.index == w.nextMatch;
			if(matched)
				{
				if(lookaheadMatch[1])
					newType = "ul";
				if(lookaheadMatch[2])
					newType = "ol";
				newLevel = lookaheadMatch[0].length;
				w.nextMatch += lookaheadMatch[0].length;
				if(newLevel > currLevel)
					{
					for(t=currLevel; t<newLevel; t++)
						placeStack.push(createTiddlyElement(placeStack[placeStack.length-1],newType));
					}
				else if(newLevel < currLevel)
					{
					for(t=currLevel; t>newLevel; t--)
						placeStack.pop();
					}
				else if(newLevel == currLevel && newType != currType)
					{
						placeStack.pop();
						placeStack.push(createTiddlyElement(placeStack[placeStack.length-1],newType));
					}
				currLevel = newLevel;
				currType = newType;
				var e = createTiddlyElement(placeStack[placeStack.length-1],"li");
				w.subWikify(e,this.terminator);
				}
		} while(matched);
	}
},

{
	name: "wikiLink",
	match: config.textPrimitives.wikiLink,
	badPrefix: config.textPrimitives.anyLetter,
	handler: function(w)
	{
		var preRegExp = new RegExp(config.textPrimitives.anyLetter,"mg");
		var preMatch = null;
		if(w.matchStart > 0)
			{
			preRegExp.lastIndex = w.matchStart-1;
			preMatch = preRegExp.exec(w.source);
			}
		if(preMatch && preMatch.index == w.matchStart-1)
			w.outputText(w.output,w.matchStart,w.nextMatch);
		else if(w.matchText.substr(0,1) == config.textPrimitives.unWikiLink)
			w.outputText(w.output,w.matchStart + 1,w.nextMatch);
		else
			{
			var link = createTiddlyLink(w.output,w.matchText,false);
			w.outputText(link,w.matchStart,w.nextMatch);
			}
	}
},

{
	name: "prettyLink",
	match: "\\[\\[",
	lookahead: "\\[\\[([^\\|\\]]*?)(?:(\\]\\])|(\\|(.*?)\\]\\]))",
	terminator: "\\|",
	handler: function(w)
	{
		var lookaheadRegExp = new RegExp(this.lookahead,"mg");
		lookaheadRegExp.lastIndex = w.matchStart;
		var lookaheadMatch = lookaheadRegExp.exec(w.source)
		if(lookaheadMatch && lookaheadMatch.index == w.matchStart && lookaheadMatch[2]) // Simple bracketted link
			{
			var link = createTiddlyLink(w.output,lookaheadMatch[1],false);
			w.outputText(link,w.nextMatch,w.nextMatch + lookaheadMatch[1].length);
			w.nextMatch += lookaheadMatch[1].length + 2;
			}
		else if(lookaheadMatch && lookaheadMatch.index == w.matchStart && lookaheadMatch[3]) // Pretty bracketted link
			{
			var e;
			if(store.tiddlerExists(lookaheadMatch[4]))
				e = createTiddlyLink(w.output,lookaheadMatch[4],false);
			else
				e = createExternalLink(w.output,lookaheadMatch[4]);
			w.outputText(e,w.nextMatch,w.nextMatch + lookaheadMatch[1].length);
			w.nextMatch = lookaheadMatch.index + lookaheadMatch[0].length;
			}
	}
},

{
	name: "urlLink",
	match: "(?:http|https|mailto|ftp):[^\\s'\"]+(?:/|\\b)",
	handler: function(w)
	{
		var e = createExternalLink(w.output,w.matchText);
		w.outputText(e,w.matchStart,w.nextMatch);
	}
},

{
	name: "image",
	match: "\\[(?:[<]{0,1})(?:[>]{0,1})[Ii][Mm][Gg]\\[",
	lookahead: "\\[([<]{0,1})([>]{0,1})[Ii][Mm][Gg]\\[(?:([^\\|]+)\\|)?([^\\[\\]\\|]+)\\](?:\\[([^\\]]*)\\]?)?\\]",
	handler: function(w)
	{
		var lookaheadRegExp = new RegExp(this.lookahead,"mg");
		lookaheadRegExp.lastIndex = w.matchStart;
		var lookaheadMatch = lookaheadRegExp.exec(w.source);
		if(lookaheadMatch && lookaheadMatch.index == w.matchStart) // Simple bracketted link
			{
			var e = w.output;
			if(lookaheadMatch[5])
				{
				if(store.tiddlerExists(lookaheadMatch[5]))
					e = createTiddlyLink(w.output,lookaheadMatch[5],false);
				else
					e = createExternalLink(w.output,lookaheadMatch[5]);
				}
			var img = createTiddlyElement(e,"img");
			if(lookaheadMatch[1])
				img.align = "left";
			else if(lookaheadMatch[2])
				img.align = "right";
			if(lookaheadMatch[3])
				img.title = lookaheadMatch[3];
			img.src = lookaheadMatch[4];
			w.nextMatch = lookaheadMatch.index + lookaheadMatch[0].length;
			}
	}
},

{
	name: "macro",
	match: "<<",
	lookahead: "<<([^>\\s]+)(?:\\s*)([^>]*)>>",
	handler: function(w)
	{
		var lookaheadRegExp = new RegExp(this.lookahead,"mg");
		lookaheadRegExp.lastIndex = w.matchStart;
		var lookaheadMatch = lookaheadRegExp.exec(w.source)
		if(lookaheadMatch && lookaheadMatch.index == w.matchStart && lookaheadMatch[1])
			{
			var params = lookaheadMatch[2].readMacroParams();			
			w.nextMatch = lookaheadMatch.index + lookaheadMatch[0].length;
			try
				{
				var macro = config.macros[lookaheadMatch[1]];
				if(macro && macro.handler)
					macro.handler(w.output,lookaheadMatch[1],params,w);
				else
					createTiddlyElement(w.output,"span",null,"errorNoSuchMacro","<<" + lookaheadMatch[1] + ">>");
				}
			catch(e)
				{
				displayMessage(config.messages.macroError.format([lookaheadMatch[1]]));
				displayMessage(e.toString());
				}
			}
	}
},

{
	name: "html",
	match: "<[Hh][Tt][Mm][Ll]>",
	lookahead: "<[Hh][Tt][Mm][Ll]>((?:.|\\n)*?)</[Hh][Tt][Mm][Ll]>",
	handler: function(w)
	{
		var lookaheadRegExp = new RegExp(this.lookahead,"mg");
		lookaheadRegExp.lastIndex = w.matchStart;
		var lookaheadMatch = lookaheadRegExp.exec(w.source)
		if(lookaheadMatch && lookaheadMatch.index == w.matchStart)
			{
			var e = createTiddlyElement(w.output,"span");
			e.innerHTML = lookaheadMatch[1];
			w.nextMatch = lookaheadMatch.index + lookaheadMatch[0].length;
			}
	}
},

{
	name: "boldByChar",
	match: "''",
	terminator: "''",
	element: "strong",
	handler: config.formatterHelpers.charFormatHelper
},

{
	name: "strikeByChar",
	match: "==",
	terminator: "==",
	element: "strike",
	handler: config.formatterHelpers.charFormatHelper
},

{
	name: "underlineByChar",
	match: "__",
	terminator: "__",
	element: "u",
	handler: config.formatterHelpers.charFormatHelper
},

{
	name: "italicByChar",
	match: "//",
	terminator: "//",
	element: "em",
	handler: config.formatterHelpers.charFormatHelper
},

{
	name: "subscriptByChar",
	match: "~~",
	terminator: "~~",
	element: "sub",
	handler: config.formatterHelpers.charFormatHelper
},

{
	name: "superscriptByChar",
	match: "\\^\\^",
	terminator: "\\^\\^",
	element: "sup",
	handler: config.formatterHelpers.charFormatHelper
},

{
	name: "monospacedByChar",
	match: "\\{\\{\\{",
	lookahead: "\\{\\{\\{((?:.|\\n)*?)\\}\\}\\}",
	handler: function(w)
	{
		var lookaheadRegExp = new RegExp(this.lookahead,"mg");
		lookaheadRegExp.lastIndex = w.matchStart;
		var lookaheadMatch = lookaheadRegExp.exec(w.source)
		if(lookaheadMatch && lookaheadMatch.index == w.matchStart)
			{
			var e = createTiddlyElement(w.output,"code",null,null,lookaheadMatch[1]);
			w.nextMatch = lookaheadMatch.index + lookaheadMatch[0].length;
			}
	}
},

{
	name: "styleByChar",
	match: "@@",
	terminator: "@@",
	lookahead: "(?:([^\\(@]+)\\(([^\\)]+)(?:\\):))|(?:([^:@]+):([^;]+);)",
	handler:  function(w)
	{
		var e = createTiddlyElement(w.output,"span",null,null,null);
		var styles = config.formatterHelpers.inlineCssHelper(w);
		if(styles.length == 0)
			e.className = "marked";
		else
			for(var t=0; t<styles.length; t++)
				e.style[styles[t].style] = styles[t].value;
		w.subWikify(e,this.terminator);
	}
},

{
	name: "lineBreak",
	match: "\\n",
	handler: function(w)
	{
		createTiddlyElement(w.output,"br");
	}
}
];

// ---------------------------------------------------------------------------------
// Wikifier
// ---------------------------------------------------------------------------------

function wikify(source,output,highlightText,highlightCaseSensitive)
{
	var w = new Wikifier(source,output,config.formatters,highlightText,highlightCaseSensitive);
}

function Wikifier(source,output,formatters,highlightText,highlightCaseSensitive)
{
	this.source = source;
	this.output = output;
	this.formatters = formatters;
	this.formatterRegExp = this.assembleFormatterMatches(formatters);
	this.nextMatch = 0;
	this.highlightText = highlightText;
	this.highlightCaseSensitive = highlightCaseSensitive;
	this.highlightRegExp = null;
	this.highlightMatch = null;
	if(highlightText)
		{
		this.highlightRegExp = new RegExp(highlightText,highlightCaseSensitive ? "mg" : "img");
		this.highlightMatch = this.highlightRegExp.exec(this.source);
		}
	if(source && source != "")
		this.subWikify(output,null);
	return this;
}

Wikifier.prototype.assembleFormatterMatches = function(formatters)
{
	var pattern = [];
	for(var n=0; n<formatters.length; n++)
		pattern.push("(" + formatters[n].match + ")");
	return new RegExp(pattern.join("|"),"mg");
}

Wikifier.prototype.subWikify = function(output,terminator)
{
	// Temporarily replace the output pointer
	var oldOutput = this.output;
	this.output = output;
	// Prepare the terminator RegExp
	var terminatorRegExp = terminator ? new RegExp("(" + terminator + ")","mg") : null;
	do {
		// Prepare the RegExp match positions
		this.formatterRegExp.lastIndex = this.nextMatch;
		if(terminatorRegExp)
			terminatorRegExp.lastIndex = this.nextMatch;
		// Get the first matches
		var formatterMatch = this.formatterRegExp.exec(this.source);
		var terminatorMatch = terminatorRegExp ? terminatorRegExp.exec(this.source) : null;
		// Check for a terminator match
		if(terminatorMatch && (!formatterMatch || terminatorMatch.index <= formatterMatch.index))
			{
			// Output any text before the match
			if(terminatorMatch.index > this.nextMatch)
				this.outputText(this.output,this.nextMatch,terminatorMatch.index);
			// Set the match parameters
			this.matchStart = terminatorMatch.index;
			this.matchLength = terminatorMatch[1].length;
			this.matchText = terminatorMatch[1];
			this.nextMatch = terminatorMatch.index + terminatorMatch[1].length;
			// Restore the output pointer and exit
			this.output = oldOutput;
			return;		
			}
		// Check for a formatter match
		else if(formatterMatch)
			{
			// Output any text before the match
			if(formatterMatch.index > this.nextMatch)
				this.outputText(this.output,this.nextMatch,formatterMatch.index);
			// Set the match parameters
			this.matchStart = formatterMatch.index;
			this.matchLength = formatterMatch[0].length;
			this.matchText = formatterMatch[0];
			this.nextMatch = this.formatterRegExp.lastIndex;
			// Figure out which formatter matched
			var matchingformatter = -1;
			for(var t=1; t<formatterMatch.length; t++)
				if(formatterMatch[t])
					matchingFormatter = t-1;
			// Call the formatter
			if(matchingFormatter != -1)
				this.formatters[matchingFormatter].handler(this);
			}
	} while(terminatorMatch || formatterMatch);
	// Output any text after the last match
	if(this.nextMatch < this.source.length)
		{
		this.outputText(this.output,this.nextMatch,this.source.length);
		this.nextMatch = this.source.length;
		}
	// Restore the output pointer
	this.output = oldOutput;
}

Wikifier.prototype.outputText = function(place,startPos,endPos)
{
	// Check for highlights
	while(this.highlightMatch && (this.highlightRegExp.lastIndex > startPos) && (this.highlightMatch.index < endPos) && (startPos < endPos))
		{
		// Deal with any plain text before the highlight
		if(this.highlightMatch.index > startPos)
			{
			createTiddlyText(place,this.source.substring(startPos,this.highlightMatch.index));
			startPos = this.highlightMatch.index;
			}
		// Deal with the highlight
		var highlightEnd = Math.min(this.highlightRegExp.lastIndex,endPos);
		var theHighlight = createTiddlyElement(place,"span",null,"highlight",this.source.substring(startPos,highlightEnd));
		startPos = highlightEnd;
		// Nudge along to the next highlight if we're done with this one
		if(startPos >= this.highlightRegExp.lastIndex)
			this.highlightMatch = this.highlightRegExp.exec(this.source);
		}
	// Do the unhighlighted text left over
	if(startPos < endPos)
		{
		createTiddlyText(place,this.source.substring(startPos,endPos));
		}
}

// ---------------------------------------------------------------------------------
// Macro definitions
// ---------------------------------------------------------------------------------

config.macros.today.handler = function(place)
{
	createTiddlyElement(place,"span",null,null,(new Date()).toLocaleString());
}

config.macros.version.handler = function(place)
{
	createTiddlyElement(place,"span",null,null,version.major + "." + version.minor + "." + version.revision);
}

config.macros.list.handler = function(place,macroName,params)
{
	var type = params[0] ? params[0] : "all";
	var theList = document.createElement("ul");
	place.appendChild(theList);
	if(this[type].prompt)
		createTiddlyElement(theList,"li",null,"listTitle",this[type].prompt);
	var results;
	if(this[type].handler)
		results = this[type].handler(params);
	for (t = 0; t < results.length; t++)
		{
		theListItem = document.createElement("li")
		theList.appendChild(theListItem);
		if(typeof results[t] == "string")
			createTiddlyLink(theListItem,results[t],true);
		else
			createTiddlyLink(theListItem,results[t].title,true);
		}
}

config.macros.list.all.handler = function(params)
{
	return store.reverseLookup("tags","excludeLists",false,"title");
}

config.macros.list.missing.handler = function(params)
{
	return store.getMissingLinks();
}

config.macros.list.orphans.handler = function(params)
{
	return store.getOrphans();
}

config.macros.allTags.handler = function(place,macroName,params)
{
	var tags = store.getTags();
	var theDateList = createTiddlyElement(place,"ul",null,null,null);
	if(tags.length == 0) {
		createTiddlyElement(theDateList,"li",null,"listTitle",this.noTags);
        }
	for (t=0; t<tags.length; t++)
		{
		var theListItem =createTiddlyElement(theDateList,"li",null,null,null);
		var theTag = createTiddlyButton(theListItem,tags[t][0] + " (" + tags[t][1] + ")",this.tooltip.format([tags[t][0]]),onClickTag);
		theTag.setAttribute("tag",tags[t][0]);
		}
}

config.macros.timeline.handler = function(place,macroName,params)
{
   var tiddlers = store.reverseLookup("tags","excludeLists",false,"modified");
   var lastDay = "";
   for (t=tiddlers.length-1; t>=0; t--) {
      var tiddler = tiddlers[t];
      var theDay = tiddler.modified.convertToYYYYMMDDHHMM().substr(0,8);
      if(theDay != lastDay) {
         var theDateList = document.createElement("ul");
         place.appendChild(theDateList);
         createTiddlyElement(theDateList,"li",null,"listTitle",tiddler.modified.formatString(this.dateFormat));
         lastDay = theDay;
      }
      var theDateListItem = createTiddlyElement(theDateList,"li",null,"listLink",null);
      theDateListItem.appendChild(createTiddlyLink(place,tiddler.title,true));
   }
}

config.macros.search.handler = function(place,macroName,params)
{
	var lastSearchText = "";
	var searchTimeout = null;
	var doSearch = function(txt)
		{
		closeAllTiddlers();
		var matches = store.search(txt.value,config.options.chkCaseSensitiveSearch,config.options.chkRegExpSearch,"title","excludeSearch");
		for(var t=matches.length-1; t>=0; t--)
			displayTiddler(null,matches[t].title,0,txt.value,config.options.chkCaseSensitiveSearch,false,false);
		var q = config.options.chkRegExpSearch ? "/" : "'";
		if(matches.length > 0)
			displayMessage(config.macros.search.successMsg.format([matches.length.toString(),q + txt.value + q]));
		else
			displayMessage(config.macros.search.failureMsg.format([q + txt.value + q]));
		lastSearchText = txt.value;
		};
	var clickHandler = function(e)
		{
		doSearch(this.nextSibling);
		return false;
		};
	var keyHandler = function(e)
		{
		if (!e) var e = window.event;
		switch(e.keyCode)
			{
			case 27:
				this.value = "";
				clearMessage();
				break;
			}
		if((this.value.length > 2) && (this.value != lastSearchText))
			{
			if(searchTimeout)
				clearTimeout(searchTimeout);
			var txt = this;
			searchTimeout = setTimeout(function() {doSearch(txt);},500);
			}
		};
	var focusHandler = function(e)
		{
		this.select();
		};
	var btn = createTiddlyButton(place,this.label,this.prompt,clickHandler);
	var txt = createTiddlyElement(place,"input",null,null,null);
	if(params[0])
		txt.value = params[0];
	txt.onkeyup = keyHandler;
	txt.onfocus = focusHandler;
	txt.setAttribute("size",this.sizeTextbox);
	txt.setAttribute("accessKey",this.accessKey);
	txt.setAttribute("autocomplete","off");
	if(navigator.userAgent.toLowerCase().indexOf("safari") == -1)
		txt.setAttribute("type","text");
	else
		{
		txt.setAttribute("type","search");
		txt.setAttribute("results","5");
		}
}

config.macros.tiddler.handler = function(place,macroName,params)
{
	var wrapper = createTiddlyElement(place,"span",null,params[1] ? params[1] : null,null);
	var text = store.getTiddlerText(params[0]);
	if(text)
		wikify(text,wrapper);
}

config.macros.tag.handler = function(place,macroName,params)
{
	createTagButton(place,params[0]);
}

config.macros.closeAll.handler = function(place)
{
	createTiddlyButton(place,this.label,this.prompt,function () {closeAllTiddlers(); return false;});
}

config.macros.permaview.handler = function(place)
{
	createTiddlyButton(place,this.label,this.prompt,function () {onClickPermaView(); return false;});
}

config.macros.saveChanges.handler = function(place)
{
	if(!readOnly)
		createTiddlyButton(place,this.label,this.prompt,function () {saveChanges(); return false;},null,null,this.accessKey);
}

config.macros.slider.onClickSlider = function(e)
{
	if (!e) var e = window.event;
	var n = this.nextSibling;
	var cookie = n.getAttribute("cookie");
	var isOpen = n.style.display != "none";
	if(config.options.chkAnimate)
		anim.startAnimating(new Slider(n,!isOpen,e.shiftKey || e.altKey,"none"));
	else
		n.style.display = isOpen ? "none" : "block";
	config.options[cookie] = !isOpen;
	saveOptionCookie(cookie);
	return false;
}

config.macros.slider.handler = function(place,macroName,params)
{
	var cookie = params[0] ? params[0] : "";
	var text = store.getTiddlerText(params[1]);
	var btn = createTiddlyButton(place,params[2],params[3],this.onClickSlider);
	var panel = createTiddlyElement(place,"div",null,"sliderPanel",null);
	panel.setAttribute("cookie",cookie);
	panel.style.display = config.options[cookie] ? "block" : "none";
	if(text)
		wikify(text,panel);
}

config.macros.option.onChangeOption = function(e)
{
	var opt = this.getAttribute("option");
	var elementType,valueField;
	if(opt)
		{
		switch(opt.substr(0,3))
			{
			case "txt":
				elementType = "input";
				valueField = "value";
				break;
			case "chk":
				elementType = "input";
				valueField = "checked";
				break;
			}
		config.options[opt] = this[valueField];
		saveOptionCookie(opt);
		var nodes = document.getElementsByTagName(elementType);
		for(var t=0; t<nodes.length; t++)
			{
			var optNode = nodes[t].getAttribute("option");
			if(opt == optNode)
				nodes[t][valueField] = this[valueField];
			}
		}
	return(true);
}

config.macros.option.handler = function(place,macroName,params)
{
	var opt = params[0];
	if(config.options[opt] == undefined)
		return;
	var c;
	switch(opt.substr(0,3))
		{
		case "txt":
			c = document.createElement("input");
			c.onkeyup = this.onChangeOption;
			c.setAttribute("option",opt);
			c.size = 15;
			place.appendChild(c);
			c.value = config.options[opt];
			break;
		case "chk":
			c = document.createElement("input");
			c.setAttribute("type","checkbox");
			c.onclick = this.onChangeOption;
			c.setAttribute("option",opt);
			place.appendChild(c);
			c.checked = config.options[opt];
			break;
		}
}

config.macros.newTiddler.onClick = function()
{
	displayTiddler(null,config.macros.newTiddler.title,2,null,null,false,false);
	var e = document.getElementById("editorTitle" + config.macros.newTiddler.title);
	e.focus();
	e.select();
	return false;
}

config.macros.newTiddler.handler = function(place)
{
	if(!readOnly)
		createTiddlyButton(place,this.label,this.prompt,this.onClick,null,null,this.accessKey);
}

config.macros.newJournal.handler = function(place,macroName,params)
{
	if(!readOnly)
		{
		var now = new Date();
		var title = now.formatString(params[0].trim());
		var createJournal = function() {
			displayTiddler(null,title,2,null,null,false,false);
			var tagsBox = document.getElementById("editorTags" + title);
			if(tagsBox && params[1])
				tagsBox.value += " " + String.encodeTiddlyLink(params[1]);
			return false;
			};
		createTiddlyButton(place,this.label,this.prompt,createJournal,null,null,this.accessKey);
		}
}

config.macros.sparkline.handler = function(place,macroName,params)
{
	var data = [];
	var min = 0;
	var max = 0;
	for(var t=0; t<params.length; t++)
		{
		var v = parseInt(params[t]);
		if(v < min)
			min = v;
		if(v > max)
			max = v;
		data.push(v);
		}
	if(data.length < 1)
		return;
	var box = createTiddlyElement(place,"span",null,"sparkline",String.fromCharCode(160));
	box.title = data.join(",");
	var w = box.offsetWidth;
	var h = box.offsetHeight;
	box.style.paddingRight = (data.length * 2 - w) + "px";
	box.style.position = "relative";
	for(var d=0; d<data.length; d++)
		{
		var tick = document.createElement("img");
		tick.border = 0;
		tick.className = "sparktick";
		tick.style.position = "absolute";
		tick.src = "data:image/gif,GIF89a%01%00%01%00%91%FF%00%FF%FF%FF%00%00%00%C0%C0%C0%00%00%00!%F9%04%01%00%00%02%00%2C%00%00%00%00%01%00%01%00%40%02%02T%01%00%3B";
		tick.style.left = d*2 + "px";
		tick.style.width = "2px";
		var v = Math.floor(((data[d] - min)/(max-min)) * h);
		tick.style.top = (h-v) + "px";
		tick.style.height = v + "px";
		box.appendChild(tick);
		}
}

config.macros.tabs.handler = function(place,macroName,params)
{
	var cookie = params[0];
	var numTabs = (params.length-1)/3;
	var wrapper = createTiddlyElement(place,"div",null,cookie,null);
	var tabset = createTiddlyElement(wrapper,"div",null,"tabset",null);
	tabset.setAttribute("cookie",cookie);
	var validTab = false;
	for(var t=0; t<numTabs; t++)
		{
		var label = params[t*3+1];
		var prompt = params[t*3+2];
		var content = params[t*3+3];
		var tab = createTiddlyButton(tabset,label,prompt,this.onClickTab,"tab tabUnselected");
		tab.setAttribute("tab",label);
		tab.setAttribute("content",content);
		tab.title = prompt;
		if(config.options[cookie] == label)
			validTab = true;
		}
	if(!validTab)
		config.options[cookie] = params[1];
	this.switchTab(tabset,config.options[cookie]);
}

config.macros.tabs.onClickTab = function(e)
{
	config.macros.tabs.switchTab(this.parentNode,this.getAttribute("tab"));
	return false;
}

config.macros.tabs.switchTab = function(tabset,tab)
{
	var cookie = tabset.getAttribute("cookie");
	var theTab = null
	var nodes = tabset.childNodes;
	for(var t=0; t<nodes.length; t++)
		if(nodes[t].getAttribute && nodes[t].getAttribute("tab") == tab)
			{
			theTab = nodes[t];
			theTab.className = "tab tabSelected";
			}
		else
			nodes[t].className = "tab tabUnselected"
	if(theTab)
		{
		if(tabset.nextSibling && tabset.nextSibling.className == "tabContents")
			tabset.parentNode.removeChild(tabset.nextSibling);
		var tabContent = createTiddlyElement(null,"div",null,"tabContents",null);
		tabset.parentNode.insertBefore(tabContent,tabset.nextSibling);
		wikify(store.getTiddlerText(theTab.getAttribute("content")),tabContent);
		if(cookie)
			{
			config.options[cookie] = tab;
			saveOptionCookie(cookie);
			}
		}
}

// <<gradient [[tiddler name]] vert|horiz rgb rgb rgb rgb... >>
config.macros.gradient.handler = function(place,macroName,params,wikifier)
{
	var terminator = ">>";
	var panel = createTiddlyElement(place,"div",null,"gradient",null);
	panel.style.position = "relative";
	panel.style.overflow = "hidden";
	var styles = config.formatterHelpers.inlineCssHelper(wikifier);
	var t;
	for(t=0; t<styles.length; t++)
		panel.style[styles[t].style] = styles[t].value;
	var colours = [];
	for(t=1; t<params.length; t++)
		{
		var c = new RGB(params[t]);
		if(c)
			colours.push(c);
		}
	drawGradient(panel,params[0] != "vert",colours);
	wikifier.subWikify(panel,terminator);
	if(document.all)
		{
		panel.style.height = "100%";
		panel.style.width = "100%";
		}
}

//JBARDIN
config.macros.tagCloud = {noTags: "No tag cloud created because there are no tags."};

config.macros.tagCloud.handler = function(place,macroName,params) {
   var tagCloudWrapper = createTiddlyElement(place,"div",null,"tagCloud",null);

   var tags = store.getTags();
   var tagsNoParams = new Array();
   for (t=0; t<tags.length; t++) {
      var keepTag = true;
      for (p=0;p<params.length; p++) if (tags[t][0] == params[p]) tags[t][0] = "";
      // if (keepTag) tagsNoParams.push(tags[t][0]);
   }
   //tags = tagsNoParams;

   if(tags.length == 0) 
      createTiddlyElement(tagCloudWrapper,"span",null,null,this.noTags);
   //Findout the maximum number of tags
   var mostTags = 0;
   for (t=0; t<tags.length; t++) {
      if (tags[t][1] > mostTags) mostTags = tags[t][1];
   }
   //divide the mostTags into 4 segments for the 4 different tagCloud sizes
   var tagSegment = mostTags / 4;

   for (t=0; t<tags.length; t++) {
      var tagCloudElement = createTiddlyElement(tagCloudWrapper,"span",null,null,null);
      tagCloudWrapper.appendChild(document.createTextNode(" "));
      var theTag = createTiddlyButton(tagCloudElement,tags[t][0],this.tooltip + tags[t][0],onClickTag,"tagCloudtag tagCloud" + (Math.round(tags[t][1]/tagSegment)+1));
      theTag.setAttribute("tag",tags[t][0]);
   }
};

//setStylesheet(".tagCloud li{height: 1.8em; float:left; margin: 3px; list-style: none;}.tagCloud1{font-size: 1.2em;}.tagCloud2{font-size: 1.4em;}.tagCloud3{font-size: 1.6em;}.tagCloud4{font-size: 1.8em;}.tagCloud5{font-size: 1.8em;font-weight: bold;}.clearer{clear:left;}#mainMenu .tagCloud{ font-size: .5em; margin: 0; padding: 0; font-weight: bold; } #mainMenu .tagCloudtag:hover{ text-decoration: underline; }","tagCloudsStyles");

// //''Name:'' Reminder plugin
// //''Version:'' 2.2 (Sept 9, 2005)
// //''Author:'' JeremySheeley
// //''Contact:'' pop1280 [at] excite [dot] com

// //''Installation'' 
// //1.  Create a new tiddler in your tiddlywiki titled
// //    ReminderPlugin and give it the {{{systemConfig}}} 
// //    tag.  The tag is important because it tells TW 
// //    that this is executable code.
// //2.  Double click this tiddler, and copy all the 
// //    text from the tiddler's body.
// //3.  Paste the text into the body of the new tiddler 
// //    in your TW.
// //4.  Save and reload your TW.
// //5.  You can copy some examples into your TW as well.  // //    See [[Simple Examples]], [[Holidays]], [[showReminders]] and [[Personal Reminders]]

// //''Syntax:'' 
// // There are three macros defined here
// //* reminder - see [[ReminderSyntax]]
// //* showReminders - see [[showRemindersSyntax]]
// //* displayTiddlersWithReminders - see [[showRemindersSyntax]]

// //''Description:'' 
// // This plugin provides macros for tagging a date with 
// // a reminder.  Use the {{{reminder}}} macro to do 
// // this.  The {{{showReminders}}} and 
// // {{{displayTiddlersWithReminder}}} macros 
// // automatically search through all available tiddlers 
// // looking for upcoming reminders.

// //''Todo:''
// //* Provide a user interface to creating a reminder.
// //* 

// //''Configuration:''
// //Modify this section to change the defaults for 
// //leadtime and display strings

config.macros.reminders = {};
config.macros["reminder"] = {};
config.macros["showReminders"] = {};
config.macros["displayTiddlersWithReminders"] = {};

config.macros.reminders["defaultLeadTime"] = [0,6000];
config.macros.reminders["defaultReminderMessage"] = "DIFF: TITLE on DATE ANNIVERSARY";
config.macros.reminders["defaultShowReminderMessage"] = "DIFF: TITLE on DATE ANNIVERSARY -- TIDDLER";
config.macros.reminders["defaultAnniversaryMessage"] = "(DIFF)";
config.macros.reminders["untitledReminder"] = "Untitled Reminder";
config.macros.reminders["noReminderFound"] = "Couldn't find a match for TITLE in the next LEADTIMEUPPER days."
config.macros.reminders["todayString"] = "Today";
config.macros.reminders["tomorrowString"] = "Tomorrow";
config.macros.reminders["ndaysString"] = "DIFF days";

// // Code section.  You should not need to edit anything // // below this.  Make sure to edit this tiddler and copy 
// // the code from the text box, to make sure that 
// // tiddler rendering doesn't interfere with the copy 
// // and paste.
config.macros.showReminders.handler = function(place,macroName,params)
{
   var now = new Date().getMidnight();
   var paramHash = {};
   var type = "";
   var num = 0;
   var leadtime = [0,14];
   var paramHash = getParamsForReminder(params);
   var bProvidedDate = (paramHash["year"] != null) 
      || (paramHash["month"] != null) 
      || (paramHash["day"] != null) 
      || (paramHash["dayofweek"] != null)
   if (paramHash["leadtime"] != null)
   {
      leadtime = paramHash["leadtime"];
      if (bProvidedDate)
         //If they've entered a day, we need to make 
         //sure to find it.  We'll reset the 
         //leadtime a few lines down.
         paramHash["leadtime"] = [-10000, 10000]
   }
   var matchedDate = now;
   if (bProvidedDate)
   {
      matchedDate = findDateForReminder(paramHash);        
   }

   var arr = findTiddlersWithReminders(matchedDate, leadtime, paramHash["tag"], paramHash["limit"]);
   var elem = createTiddlyElement(place,"span",null,null, null);
   var mess = "";
   for (j = 0; j < arr.length; j++)
   {
      if (paramHash["format"] != null)
         arr[j]["params"]["format"] = paramHash["format"];
      else
         arr[j]["params"]["format"] = config.macros.reminders["defaultShowReminderMessage"];
      mess += getReminderMessageForDisplay(arr[j]["diff"], arr[j]["params"], arr[j]["matchedDate"], arr[j]["tiddler"]);
      mess += "\n";
   }
   wikify(mess, elem, null, null);
}


config.macros.displayTiddlersWithReminders.handler = function(place,macroName,params)
{
   var now = new Date().getMidnight();
   var paramHash = {};
   var type = "";
   var num = 0;
   var leadtime = [0,14];
   var paramHash = getParamsForReminder(params);
   var bProvidedDate = (paramHash["year"] != null) 
         || (paramHash["month"] != null) 
         || (paramHash["day"] != null) 
         || (paramHash["dayofweek"] != null)
   if (paramHash["leadtime"] != null)
   {
      leadtime = paramHash["leadtime"];
      if (bProvidedDate)
         //If they've entered a day, we need to make 
         //sure to find it.  We'll reset the leadtime 
         //a few lines down.
         paramHash["leadtime"] = [-10000,10000];
   }
   var matchedDate = now;
   if (bProvidedDate)
   {
      matchedDate = findDateForReminder(paramHash);        
   }
   var arr = findTiddlersWithReminders(matchedDate, leadtime, paramHash["tag"], paramHash["limit"]);
   for (j = 0; j < arr.length; j++)
   {
      displayTiddler(null, arr[j]["tiddler"], 0, null, false, false, false)
   }
}

config.macros.reminder.handler = function(place,macroName,params)
{
   var dateHash = getParamsForReminder(params);
   if (dateHash["hidden"] != null)
      return;
   var matchedDate = findDateForReminder(dateHash);
   var leadTime = dateHash["leadtime"];
   if (leadTime == null)
   leadTime = config.macros.reminders["defaultLeadTime"]; 

   if (matchedDate != null)
   {
      var diff = matchedDate.getDifferenceInDays(new Date())
      var elem = createTiddlyElement(place,"span",null,null, null);
      var mess = getReminderMessageForDisplay(diff, dateHash, matchedDate);
      wikify(mess, elem, null, null);
   }
   else
      createTiddlyElement(place,"span",null,null, config.macros.reminders["noReminderFound"].replace("TITLE", dateHash["title"]).replace("LEADTIMEUPPER", leadTime[1]).replace("LEADTIMELOWER", leadTime[0]) );
}

hasTag = function(tiddlerTags, tagFilters)
{
  var bHasTag = false;
  var bNegative = false;
  for (var t3 = 0; t3 < tagFilters.length; t3++)
  {
      if (tagFilters[t3].length > 1 && tagFilters[t3].charAt(0) == '!')
          bHasTag = true;
      for(var t2=0; t2<tiddlerTags.length; t2++)
      {
           if (tagFilters[t3].length > 1 && tagFilters[t3].charAt(0) == '!')
           {
              if (tiddlerTags[t2] == tagFilters[t3].substring(1))
              {
                  bHasTag = false;
                  return false;
              }
              else
                  bHasTag = true;
          }
          else if (tiddlerTags[t2] == tagFilters[t3])
          {
              bHasTag = true;
              return true;
          }
        }
    }
    return bHasTag;
}

//This function searches all tiddlers for the reminder  //macro.  It is intended that other plugins (like //calendar) will use this function to query for 
//upcoming reminders.
//The arguments to this function filter out reminders //based on when they will fire.
//ARGUMENTS:
//baseDate is the date that is used as "now".  
//leadtime is a two element int array, with leadtime[0] 
//         as the lower bound and leadtime[1] as the
//         upper bound.  A reasonable default is [0,14]
//tags is a space-separated list of tags to use to filter 
//         tiddlers.  If a tag name begins with an !, then 
//         only tiddlers which do not have that tag will 
//         be considered.  For example "examples holidays"  
//         will search for reminders in any tiddlers that  
//         are tagged with examples or holidays and 
//         "!examples !holidays" will search for reminders 
//         in any tiddlers that are not tagged with 
//         examples or holidays.  Pass in null to search 
//         all tiddlers.
//limit.  If limit is null, individual reminders can 
//        override the leadtime specified earlier.  
//        Pass in 1 in order to override that behavior.

findTiddlersWithReminders = function(baseDate, leadtime, tags, limit)
{
   var matches = store.search("reminder",false,false,"title","excludeSearch");
   var macroPattern = "<<([^>\\s]+)(?:\\s*)([^>]*)>>";
   var macroRegExp = new RegExp(macroPattern,"mg");
   var arr = [];
   var tagsArray = null;
   if (tags != null)
      tagsArray = tags.split(" ");
   for(var t=matches.length-1; t>=0; t--)
   {
      if (tagsArray != null)
      {
         //If they specified tags to filter on, and this tiddler doesn't 
	 //match, skip it entirely.
         if ( ! hasTag(matches[t].tags, tagsArray))
            continue;
      }

      var targetText = matches[t].text;
      do {
         // Get the next formatting match
         var formatMatch = macroRegExp.exec(targetText);
         var matchPos = formatMatch ? formatMatch.index : targetText.length;
         var level;
         var theBlockquote;
         if(formatMatch && formatMatch[1] != null && formatMatch[1].toLowerCase() == "reminder")
         {
            //Find the matching date.
            var params = formatMatch[2].readMacroParams();
            var dateHash = getParamsForReminder(params);

            if (limit != null || dateHash["leadtime"] == null)
               dateHash["leadtime"] = leadtime;

            var matchedDate = findDateForReminder(dateHash, baseDate);
            if (matchedDate != null)
            {
               var hash = {};
               hash["diff"] = matchedDate.getDifferenceInDays(baseDate);
               hash["matchedDate"] = matchedDate;
               hash["params"] = dateHash;
               hash["tiddler"] = matches[t].title;
               hash["tags"] = matches[t].tags;
               arr.pushUnique(hash);
            }
         }
      }while(formatMatch);
   }
   if(arr.length > 1)  //Sort the array by number of days remaining.
      arr.sort(function (a,b) {if(a["diff"] == b["diff"]) return(0); else return (a["diff"] < b["diff"]) ? -1 : +1; });
   return arr;
}

//This function takes the reminder macro parameters and
//generates the string that is used for display.
//This function is not intended to be called by 
//other plugins.
getReminderMessageForDisplay = function(diff, params, matchedDate, tiddlerTitle)
{
   var anniversaryString = "";
   var reminderTitle = params["title"];
   if (reminderTitle == null)
      reminderTitle = config.macros.reminders["untitledReminder"];
   if (params["firstyear"] != null)
      anniversaryString = config.macros.reminders["defaultAnniversaryMessage"].replace("DIFF", (matchedDate.getFullYear() - params["firstyear"]));
   var mess = "";
   if (diff == 0)
      diffString = config.macros.reminders["todayString"];
   else if (diff == 1)
      diffString = config.macros.reminders["tomorrowString"];
   else
      diffString = config.macros.reminders["ndaysString"].replace("DIFF", diff);
   var format = config.macros.reminders["defaultReminderMessage"];
   if (params["format"] != null)
      format = params["format"];
   mess = format;
//HACK!  -- Avoid replacing DD in TIDDLER with the date
   mess = mess.replace("TIDDLER", "TIDELER");
   mess = matchedDate.formatStringDateOnly(mess);
   mess = mess.replace("TIDELER", "TIDDLER");
   if (tiddlerTitle != null)
      mess = mess.replace("TIDDLER", "[[" + tiddlerTitle + "]]");
   
   mess = mess.replace("DIFF", diffString).replace("TITLE", reminderTitle).replace("DATE", matchedDate.formatString("DDD MMM DD, YYYY")).replace("ANNIVERSARY", anniversaryString);
   return mess;
}

// Parse out the macro parameters into a hashtable.  This
// handles the arguments for reminder, showReminders and 
// displayTiddlersWithReminders.
getParamsForReminder = function(params)
{
   var dateHash = {};
   var type = "";
   var num = 0;
   var title = "";
   for(var t=0; t<params.length; t++)
   {
      split = params[t].split(":");
      type = split[0].toLowerCase();
      var value = split[1];
      for (i=2; i < split.length; i++)
         value += ":" + split[i];
      if (type == "nolinks" || type == "limit" || type == "hidden")
         num = 1;
      else if (type == "leadtime")
      {
         leads = value.split("...");
         if (leads.length == 1)
         {
            leads[1]= leads[0];
            leads[0] = 0;
         }
         leads[0] = parseInt(leads[0]);
         leads[1] = parseInt(leads[1]);
         num = leads;
      }
      else if (type != "title" && type != "tag" && type != "format")
         num = parseInt(value);
      else
      {
         title = value;
         while (title.substr(0,1) == '"' && title.substr(title.length - 1,1) != '"')
            title += " " + params[++t];
         //Trim off the leading and trailing quotes
         if (title.substr(0,1) == "\"" && title.substr(title.length - 1,1)== "\"")
            title = title.substr(1, title.length - 2);
         num = title;
      }
      dateHash[type] = num;
   }
   //date is synonymous with day
   if (dateHash["day"] == null)
      dateHash["day"] = dateHash["date"];
   return dateHash;
}

//This function finds the date specified in the reminder 
//parameters.  It will return null if no match can be
//found.  This function is not intended to be used by
//other plugins.
findDateForReminder = function( dateHash, baseDate)
{
   if (baseDate == null)
     baseDate = new Date().getMidnight();
   var leadTime = dateHash["leadtime"];
   var bOffsetSpecified = dateHash["offsetyear"] != null 
   || dateHash["offsetmonth"] != null
   || dateHash["offsetday"] != null
   || dateHash["offsetdayofweek"] != null
   || dateHash["recurdays"] != null;
   
   if (leadTime == null)
    leadTime = config.macros.reminders["defaultLeadTime"]; 
   var matchedDate = baseDate.findMatch(dateHash, bOffsetSpecified ? [0, 6000] : leadTime);
   if (matchedDate != null)
   {
      var newMatchedDate = matchedDate;
      if (dateHash["recurdays"] != null)
      {
         while (newMatchedDate.getTime() < baseDate.getTime())
         {
            newMatchedDate = newMatchedDate.addDays(dateHash["recurdays"]);
         }
      }
      else if (dateHash["offsetyear"] != null 
         || dateHash["offsetmonth"] != null
         || dateHash["offsetday"] != null
         || dateHash["offsetdayofweek"] != null)
      {
         dateHash["year"] = dateHash["offsetyear"];
         dateHash["month"] = dateHash["offsetmonth"];
         dateHash["day"] = dateHash["offsetday"];
         dateHash["dayofweek"] = dateHash["offsetdayofweek"];
         newMatchedDate = matchedDate.findMatch(dateHash, leadTime);
         //The offset couldn't be matched.  return null.
         if (newMatchedDate == null)
            return null;
      }
      var diff2 = newMatchedDate.getDifferenceInDays(baseDate);
      if (diff2 <= leadTime[1] && diff2 >= leadTime[0])
         return newMatchedDate;
   }
   return null;
}

//This does much the same job as findDateForReminder, but
//this one doesn't deal with offsets or recurring 
//reminders.
Date.prototype.findMatch = function(dateHash, leadTime)
{
   var bSpecifiedYear =     (dateHash["year"] != null);
   var bSpecifiedMonth =     (dateHash["month"] != null);
   var bSpecifiedDay =     (dateHash["day"] != null);
   var bSpecifiedDayOfWeek =     (dateHash["dayofweek"] != null);
   if (bSpecifiedYear && bSpecifiedMonth && bSpecifiedDay)
      return Date.convertFromYYYYMMDDHHMM("" + dateHash["year"] + String.zeroPad(dateHash["month"],2) + String.zeroPad(dateHash["day"],2) + "0000");
   var bMatchedYear = !bSpecifiedYear;
   var bMatchedMonth = !bSpecifiedMonth;
   var bMatchedDay = !bSpecifiedDay;
   var bMatchedDayOfWeek = !bSpecifiedDayOfWeek;
   var searchInterval = 1;
   if (bSpecifiedDayOfWeek && dateHash["dayofweek"] < 0)
   {
      dateHash["dayofweek"] = dateHash["dayofweek"] * -1;
      searchInterval = -1;
   }
   if (bSpecifiedDay && bSpecifiedMonth && !bSpecifiedYear && !bSpecifiedDayOfWeek)
   {

      //Shortcut -- First try this year.  If it's too small, try next year.
      var tmpMidnight = this.getMidnight();
      var tmpLeadTime = this.addDays(leadTime[0]).getMidnight();
      var tmpDate = Date.convertFromYYYYMMDDHHMM("" + this.getFullYear() + String.zeroPad(dateHash["month"],2) + String.zeroPad(dateHash["day"],2) + "0000");
      if (tmpDate.getTime() < tmpLeadTime.getTime())
         tmpDate = Date.convertFromYYYYMMDDHHMM("" + (this.getFullYear() + 1) + String.zeroPad(dateHash["month"],2) + String.zeroPad(dateHash["day"],2) + "0000");
      var diff2 = tmpDate.getDifferenceInDays(tmpMidnight);

      if (diff2 <= leadTime[1] && diff2 >= leadTime[0])
         return tmpDate;
      else
         return null;
   }

   for (i = 0; i <= leadTime[1]; i+=searchInterval)
   {
      var newDate = this.addDays(i);
      if (bSpecifiedYear)
         bMatchedYear = ((dateHash["year"] - 1900) == newDate.getYear());
      if (bSpecifiedMonth)
         bMatchedMonth = ((dateHash["month"] - 1)  == newDate.getMonth() );
      if (bSpecifiedDay)
         bMatchedDay = (dateHash["day"] == newDate.getDate());
      if (bSpecifiedDayOfWeek)
         bMatchedDayOfWeek = (dateHash["dayofweek"] == newDate.getDay());

      if (bMatchedYear && bMatchedMonth && bMatchedDay && bMatchedDayOfWeek)
         return newDate;
   }
//Only search backwards if we're not just trying to match the dayofweek
if (leadTime[0] < 0 && (bSpecifiedYear || bSpecifiedMonth || bSpecifiedDay))
   for (i = 0; i >= leadTime[0]; i+=(searchInterval * -1))
   {
      var newDate = this.addDays(i);
      if (bSpecifiedYear)
         bMatchedYear = ((dateHash["year"] - 1900) == newDate.getYear());
      if (bSpecifiedMonth)
         bMatchedMonth = ((dateHash["month"] - 1)  == newDate.getMonth() );
      if (bSpecifiedDay)
         bMatchedDay = (dateHash["day"] == newDate.getDate());
      if (bSpecifiedDayOfWeek)
         bMatchedDayOfWeek = (dateHash["dayofweek"] == newDate.getDay());

      if (bMatchedYear && bMatchedMonth && bMatchedDay && bMatchedDayOfWeek)
         return newDate;
   }
}

//Return a new date, with the time set to midnight (0000)
Date.prototype.getMidnight = function()
{
   return Date.convertFromYYYYMMDDHHMM("" + this.getFullYear() + String.zeroPad(this.getMonth()+1,2) + String.zeroPad(this.getDate(),2) + "0000");
}
// Add the specified number of days to a date.
Date.prototype.addDays = function(numberOfDays)
{
   return(new Date(this.getTime() + (86400000 * numberOfDays)));
}
//Return the number of days between two dates.
Date.prototype.getDifferenceInDays = function(otherDate)
{
   return Math.floor((this.getMidnight().getTime() - otherDate.getMidnight().getTime()) / 86400000);
   
}

// Substitute date components into a string
Date.prototype.formatStringDateOnly = function(template)
{
	template = template.replace("YYYY",this.getFullYear());
	template = template.replace("YY",String.zeroPad(this.getFullYear()-2000,2));
	template = template.replace("MMM",config.messages.dates.months[this.getMonth()]);
	template = template.replace("0MM",String.zeroPad(this.getMonth()+1,2));
	template = template.replace("MM",this.getMonth()+1);
	template = template.replace("DDD",config.messages.dates.days[this.getDay()]);
	template = template.replace("0DD",String.zeroPad(this.getDate(),2));
	template = template.replace("DD",this.getDate());
	return template;
}


config.macros.calendar = {};

config.macros.calendar.monthnames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
config.macros.calendar.daynames = ["M", "T", "W", "T", "F", "S", "S"];

config.macros.calendar.weekendbg = "#c0c0c0";
config.macros.calendar.monthbg = "#e0e0e0";
config.macros.calendar.holidaybg = "#ffc0c0";

// //''Code section:''
// (you should not need to alter anything below here)//

config.macros.calendar.tiddlerformat = "0DD/0MM/YYYY";  // This used to be changeable - for now, it isn't// <<smiley :-(>> 

version.extensions.calendar = { major: 0, minor: 2, revision: 0, date: new Date(2005, 07, 21)};
config.macros.calendar.monthdays = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

config.macros.calendar.holidays = [ "01/01", "25/12", "03/01/2005", "02/05/2005", "30/05/2005", "29/08/2005" ];

function calendarIsHoliday(date)
{
 var longHoliday = date.formatString("0DD/0MM/YYYY");
 var shortHoliday = date.formatString("0DD/0MM");

 for(var i = 0; i < config.macros.calendar.holidays.length; i++) {
 if(config.macros.calendar.holidays[i] == longHoliday || config.macros.calendar.holidays[i] == shortHoliday) {
 return true;
 }
 }
 return false;
}

config.macros.calendar.handler = function(place,macroName,params)
{
 var calendar = createTiddlyElement(place, "table", null, "calendar", null);

 if(params[0] == "thismonth") {
 var today = new Date();
 createCalendarOneMonth(calendar, today.getYear()+1900, today.getMonth());
 } else {
 var year;
 if(params[0]) {
 year = params[0];
 } else {
 year = (new Date()).getYear() + 1900;
 }

 if(params[1]) {
 var month = params[1] -1;
 createCalendarOneMonth(calendar, year, month);
 } else {
 createCalendarYear(calendar, year);
 }
 }
}

function createCalendarOneMonth(calendar, year, mon)
{
 var row = createTiddlyElement(calendar, "tr", null, null, null);
 createCalendarMonthHeader(row, config.macros.calendar.monthnames[mon] + " " + year, true);
 row = createTiddlyElement(calendar, "tr", null, null, null);
 createCalendarDayHeader(row, 1);
 createCalendarDayRowsSingle(calendar, year, mon);
}


function createCalendarMonth(calendar, year, mon)
{
 var row = createTiddlyElement(calendar, "tr", null, null, null);
 createCalendarMonthHeader(row, config.macros.calendar.monthnames[mon] + " " + year, false);
 row = createTiddlyElement(calendar, "tr", null, null, null);
 createCalendarDayHeader(row, 1);
 createCalendarDayRowsSingle(calendar, year, mon);
}

function createCalendarYear(calendar, year)
{
 var row;

 row = createTiddlyElement(calendar, "tr", null, null, null);
 var yearHeader = createTiddlyElement(row, "td", null, "calendarYear", year);
 yearHeader.align = "center";
 yearHeader.setAttribute("colSpan", 21);

 createCalendarMonthRow(calendar, year, 0);
 createCalendarMonthRow(calendar, year, 3);
 createCalendarMonthRow(calendar, year, 6);
 createCalendarMonthRow(calendar, year, 9);
}

function createCalendarMonthRow(cal, year, mon)
{
 var row = createTiddlyElement(cal, "tr", null, null, null);
 createCalendarMonthHeader(row, config.macros.calendar.monthnames[mon]);
 createCalendarMonthHeader(row, config.macros.calendar.monthnames[mon+1]);
 createCalendarMonthHeader(row, config.macros.calendar.monthnames[mon+2]);
 row = createTiddlyElement(cal, "tr", null, null, null);
 createCalendarDayHeader(row, 3);
 createCalendarDayRows(cal, year, mon);
}

function createCalendarMonthHeader(row, name, nav)
{
  var month;
  if(nav) {
    var back = createTiddlyElement(row, "td", null, null, null);
    createTiddlyButton(back, "<", "Back", onClickCalendarBack)
    back.align = "center";
    back.style.background = config.macros.calendar.monthbg; 
    month = createTiddlyElement(row, "td", null, "calendarMonthname", name)
    month.setAttribute("colSpan", 5);
    var fwd = createTiddlyElement(row, "td", null, null, null);
    createTiddlyButton(fwd, ">", "Fwd", onClickCalendarFwd)
    fwd.align = "center";
    fwd.style.background = config.macros.calendar.monthbg; 
  } else {
    month = createTiddlyElement(row, "td", null, "calendarMonthname", name)
    month.setAttribute("colSpan", 7);
  }
  month.align = "center";
  month.style.background = config.macros.calendar.monthbg;
}

function onClickCalendarBack(e)
{

}

function onClickCalendarFwd(e)
{

}

function createCalendarDayHeader(row, num)
{
 var cell;
 for(var i = 0; i < num; i++) {
 for(var j = 0; j < 7; j++) {
 cell = createTiddlyElement(row, "td", null, null, config.macros.calendar.daynames[j]);
 if(j > 4) cell.style.background = config.macros.calendar.weekendbg;
 }
 }
}

function createCalendarDays(row, col, first, max, year, mon)
{
  var i;
  for(i = 0; i < col; i++) {
    createTiddlyElement(row, "td", null, null, null);
  }
  var day = first;
  for(i = col; i < 7; i++) {
    var daycell = createTiddlyElement(row, "td", null, null, null);
    if(i > 4) daycell.style.background = config.macros.calendar.weekendbg;
    if(day > 0 && day <= max) {
      var celldate = new Date(year, mon, day);
      var title = celldate.formatString(config.macros.calendar.tiddlerformat);
      if(calendarIsHoliday(celldate)) {
        daycell.style.background = config.macros.calendar.holidaybg;
      }
      if(window.findTiddlersWithReminders == null) {
        var link = createTiddlyLink(daycell, title, false);
        link.appendChild(document.createTextNode(day));
      } else {
        var button = createTiddlyButton(daycell, day, title, onClickCalendarDate);
      }
    }
    day++;
  }
}

// //We've clicked on a day in a calendar - create a suitable pop-up of options.
// //The pop-up should contain:
// // * a link to create a new entry for that date
// // * a link to create a new reminder for that date
// // * an <hr>
// // * the list of reminders for that date
function onClickCalendarDate(e)
{
//JBARDIN
  var button = this;
  var date = button.getAttribute("title");
  var dat = new Date(date.substr(6,4), date.substr(3,2)-1, date.substr(0, 2));

  date = dat.formatString(config.macros.calendar.tiddlerformat);
  var popup = createTiddlerPopup(this);
  popup.className = "newReminderPopup";
  popup.appendChild(document.createTextNode(date));
  var newReminder = function() {
    var t = store.tiddlers[date];
    displayTiddler(null, date, 2, null, null, false, false);
    if(t) {
      document.getElementById("editorBody" + date).value += "\n<<reminder day:" + dat.getDate() +
                                                   " month:" + (dat.getMonth()+1) +
                                                  " year:" + (dat.getYear()+1900) + " title: >>";
    } else {
      document.getElementById("editorBody" + date).value = "<<reminder day:" + dat.getDate() +
                                                           " month:" + (dat.getMonth()+1) +
                                                           " year:" + (dat.getYear()+1900) + " title: >>";
    }
  };
  var link = createTiddlyButton(popup, "New reminder", null, newReminder, "newReminderButton"); 
  popup.appendChild(document.createElement("hr"));

  var t = findTiddlersWithReminders(dat, 0, null, null);
  for(var i = 0; i < t.length; i++) {
    link = createTiddlyLink(popup, t[i].tiddler, false);
    link.appendChild(document.createTextNode(t[i].tiddler));
  }

}

function calendarMaxDays(year, mon)
{
 var max = config.macros.calendar.monthdays[mon];
 if(mon == 1 && (year % 4) == 0 && ((year % 100) != 0 || (year % 400) == 0)) {
 max++;
 }
 return max;
}

function createCalendarDayRows(cal, year, mon)
{
 var row = createTiddlyElement(cal, "tr", null, null, null);

 var first1 = (new Date(year, mon, 1)).getDay() -1;
 if(first1 < 0) first1 = 6;
 var day1 = -first1 + 1;
 var first2 = (new Date(year, mon+1, 1)).getDay() -1;
 if(first2 < 0) first2 = 6;
 var day2 = -first2 + 1;
 var first3 = (new Date(year, mon+2, 1)).getDay() -1;
 if(first3 < 0) first3 = 6;
 var day3 = -first3 + 1;

 var max1 = calendarMaxDays(year, mon);
 var max2 = calendarMaxDays(year, mon+1);
 var max3 = calendarMaxDays(year, mon+2);

 while(day1 <= max1 || day2 <= max2 || day3 <= max3) {
 row = createTiddlyElement(cal, "tr", null, null, null);
 createCalendarDays(row, 0, day1, max1, year, mon); day1 += 7;
 createCalendarDays(row, 0, day2, max2, year, mon+1); day2 += 7;
 createCalendarDays(row, 0, day3, max3, year, mon+2); day3 += 7;
 }
}

function createCalendarDayRowsSingle(cal, year, mon)
{
 var row = createTiddlyElement(cal, "tr", null, null, null);

 var first1 = (new Date(year, mon, 1)).getDay() -1;
 if(first1 < 0) first1 = 6;
 var day1 = -first1 + 1;
 var max1 = calendarMaxDays(year, mon);

 while(day1 <= max1) {
 row = createTiddlyElement(cal, "tr", null, null, null);
 createCalendarDays(row, 0, day1, max1, year, mon); day1 += 7;
 }
}

//setStylesheet("#mainMenu table, th, tr, td {font-size:10pt;}", "calendarStyles");

/*
if (config.options.chkSinglePageMode==undefined) config.options.chkSinglePageMode=false;
config.shadowTiddlers.AdvancedOptions += "\n<<option chkSinglePageMode>> Display one tiddler at a time";

window.coreDisplayTiddler=window.displayTiddler;
window.displayTiddler = function(src,title,state,highlightText,highlightCaseSensitive,animate,slowly)
{
 if (config.options.chkSinglePageMode) closeAllTiddlers();
 coreDisplayTiddler(src,title,state,highlightText,highlightCaseSensitive,animate,slowly);
}
*/

// ---------------------------------------------------------------------------------
// Tiddler() object
// ---------------------------------------------------------------------------------

function Tiddler()
{
	this.title = null;
	this.text = null;
	this.modifier = null;
	this.modified = new Date();
	this.links = [];
	this.tags = [];
	return this;
}

// Load a tiddler from an HTML DIV
Tiddler.prototype.loadFromDiv = function(divRef,title)
{
	var text = Tiddler.unescapeLineBreaks(divRef.firstChild ? divRef.firstChild.nodeValue : "");
	var modifier = divRef.getAttribute("modifier");
	var modified = Date.convertFromYYYYMMDDHHMM(divRef.getAttribute("modified"));
	var tags = divRef.getAttribute("tags");
	this.set(title,text,modifier,modified,tags);
	return this;
}

// Format the text for storage in an HTML DIV
Tiddler.prototype.saveToDiv = function()
{
	return '<div tiddler="' + this.title + '" modified="' +
							this.modified.convertToYYYYMMDDHHMM() + '" modifier="' + this.modifier +
							'" tags="' + this.getTags() + '">' +
							this.escapeLineBreaks().htmlEncode() + '</div>';
}

// Format the text for storage in an RSS item
Tiddler.prototype.saveToRss = function(url)
{
//JBARDIN
	var s = [];
	s.push("<item>");
	s.push("<title>" + this.title.htmlEncode() + "</title>");
	s.push("<description>" + this.text.replace(regexpNewLine,"<br />").htmlEncode() + "</description>");
	for(var t=0; t<this.tags.length; t++)
		s.push("<category>" + this.tags[t] + "</category>");
	s.push("<link>" + url + "#" + encodeURIComponent(String.encodeTiddlyLink(this.title)) + "</link>");
	s.push("<pubDate>" + this.modified.toGMTString() + "</pubDate>");
	s.push("</item>");
	return(s.join("\n"));
}

// Change the text and other attributes of a tiddler
Tiddler.prototype.set = function(title,text,modifier,modified,tags)
{
	if(title != undefined)
		this.title = title;
	if(text != undefined)
		this.text = text;
	if(modifier != undefined)
		this.modifier = modifier;
	if(modified != undefined)
		this.modified = modified;
	if(tags != undefined)
		this.tags = (typeof tags == "string") ? tags.readBracketedList() : tags;
	else
		this.tags = [];
	this.changed();
	return this;
}

// Get the tags for a tiddler as a string (space delimited, using [[brackets]] for tags containing spaces)
Tiddler.prototype.getTags = function()
{
   if(this.tags) {
      var results = [];

      for(var t=0; t<this.tags.length; t++) {
         results.push(String.encodeTiddlyLink(this.tags[t]));
      }
      return results.join(" ");
   } else {
      return "";
   }
}

var regexpBackSlashEn = new RegExp("\\\\n","mg");
var regexpBackSlash = new RegExp("\\\\","mg");
var regexpBackSlashEss = new RegExp("\\\\s","mg");
var regexpNewLine = new RegExp("\n","mg");
var regexpCarriageReturn = new RegExp("\r","mg");

// Static method to Convert "\n" to newlines, "\s" to "\"
Tiddler.unescapeLineBreaks = function(text)
{
	if(text && text != "")
		return text.replace(regexpBackSlashEn,"\n").replace(regexpBackSlashEss,"\\").replace(regexpCarriageReturn,"");
	else
		return "";
}

// Convert newlines to "\n", "\" to "\s"
Tiddler.prototype.escapeLineBreaks = function()
{
	return this.text.replace(regexpBackSlash,"\\s").replace(regexpNewLine,"\\n").replace(regexpCarriageReturn,"");
}

// Updates the secondary information (like links[] array) after a change to a tiddler
Tiddler.prototype.changed = function()
{
	this.links = [];
	var nextPos = 0;
	var theLink;
	var aliasedPrettyLink = "\\[\\[([^\\[\\]\\|]+)\\|([^\\[\\]\\|]+)\\]\\]";
	var prettyLink = "\\[\\[([^\\]]+)\\]\\]";
	var wikiNameRegExp = new RegExp("(" + config.textPrimitives.wikiLink + ")|(?:" + aliasedPrettyLink + ")|(?:" + prettyLink + ")","mg");
	do {
		var formatMatch = wikiNameRegExp.exec(this.text);
		if(formatMatch)
			{
			if(formatMatch[1] && formatMatch[1].substr(0,1) != config.textPrimitives.unWikiLink && formatMatch[1] != this.title)
				this.links.pushUnique(formatMatch[1]);
			else if(formatMatch[2] && store.tiddlerExists(formatMatch[3]))
				this.links.pushUnique(formatMatch[3]);
			else if(formatMatch[4] && formatMatch[4] != this.title)
				this.links.pushUnique(formatMatch[4]);
			}
	} while(formatMatch);
	return;
}

Tiddler.prototype.getSubtitle = function()
{
	var theModifier = this.modifier;
	if(!theModifier)
		theModifier = config.messages.subtitleUnknown;
	var theModified = this.modified;
	if(theModified)
		theModified = theModified.toLocaleString();
	else
		theModified = config.messages.subtitleUnknown;
	return(theModifier + ", " + theModified);
}

// ---------------------------------------------------------------------------------
// TiddlyWiki() object contains Tiddler()s
// ---------------------------------------------------------------------------------

function TiddlyWiki()
{
	this.tiddlers = {}; // Hashmap by name of tiddlers
	this.namedNotifications = []; // Array of {name:,notify:} of notification functions
	this.dirty = false;
}

// Set the dirty flag
TiddlyWiki.prototype.setDirty = function(dirty)
{
	this.dirty = dirty;
}

// Invoke the notification handlers for a particular tiddler
TiddlyWiki.prototype.notify = function(title,doBlanket)
{
	for(var t=0; t<this.namedNotifications.length; t++)
		{
		var n = this.namedNotifications[t];
		if((n.name == null && doBlanket) || n.name == title)
			n.notify(title);
		}
}

// Invoke the notification handlers for all tiddlers
TiddlyWiki.prototype.notifyAll = function()
{
	for(var t=0; t<this.namedNotifications.length; t++)
		{
		var n = this.namedNotifications[t];
		n.notify(n.name);
		}
}

// Add a notification handler to a tiddler
TiddlyWiki.prototype.addNotification = function(title,fn)
{	for (var i=0; i<this.namedNotifications.length; i++)		if((this.namedNotifications[i].name == title) && (this.namedNotifications[i].notify == fn))			return this;	this.namedNotifications.push({name: title, notify: fn});	return this;
}

// Clear a TiddlyWiki so that it contains no tiddlers
TiddlyWiki.prototype.clear = function(src)
{
	this.tiddlers = {};
	this.dirty = false;
}

TiddlyWiki.prototype.removeTiddler = function(title)
{
	var tiddler = this.tiddlers[title];
	if(tiddler)
		{
		delete this.tiddlers[title];
		this.notify(title,true);
		this.dirty = true;
		}
}

TiddlyWiki.prototype.tiddlerExists = function(title)
{
	var t = this.tiddlers[title];
	var s = config.shadowTiddlers[title];
	return (t != undefined && t instanceof Tiddler) || (s != undefined && s instanceof String);
}

TiddlyWiki.prototype.getTiddlerText = function(title,defaultText)
{
	if(!title)
		return(defaultText);
	var tiddler = this.tiddlers[title];
	if(tiddler)
		return tiddler.text;
	else if(config.shadowTiddlers[title])
		return config.shadowTiddlers[title];
	else if(defaultText)
		return defaultText;
	else
		return null;
}

TiddlyWiki.prototype.getRecursiveTiddlerText = function(title,defaultText,depth)
{
	var bracketRegExp = new RegExp("(?:\\[\\[([^\\]]+)\\]\\])","mg");
	var text = this.getTiddlerText(title,defaultText);
	if(text == null)
		return "";
	var textOut = [];
	var lastPos = 0;
	do {
		var match = bracketRegExp.exec(text);
		if(match)
			{
			textOut.push(text.substr(lastPos,match.index-lastPos));
			if(match[1])
				{
				if(depth <= 0)
					textOut.push(match[1]);
				else
					textOut.push(this.getRecursiveTiddlerText(match[1],match[1],depth-1));
				}
			lastPos = match.index + match[0].length;
			}
		else
			textOut.push(text.substr(lastPos));
	} while(match);
	return(textOut.join(""));
}

TiddlyWiki.prototype.saveTiddler = function(title,newTitle,newBody,modifier,modified,tags)
{
	var tiddler = this.tiddlers[title];
	if(tiddler)
		delete this.tiddlers[title];
	else
		tiddler = new Tiddler();
	tiddler.set(newTitle,newBody,modifier,modified,tags);
	this.tiddlers[newTitle] = tiddler;
	if(title != newTitle)
		this.notify(title,true);
	this.notify(newTitle,true);
	this.dirty = true;
	return tiddler;
}

TiddlyWiki.prototype.createTiddler = function(title)
{
	tiddler = this.tiddlers[title];
	if(!tiddler)
		{
		tiddler = new Tiddler();
		this.tiddlers[title] = tiddler;
		this.dirty = true;
		}
	return tiddler;
}

// Load contents of a tiddlywiki from an HTML DIV
TiddlyWiki.prototype.loadFromDiv = function(srcID,idPrefix)
{
	if(document.normalize)
		document.normalize();
	var lenPrefix = idPrefix.length;
	var store = document.getElementById(srcID).childNodes;
	for(var t = 0; t < store.length; t++)
		{
		var e = store[t];
		var title = null;
		if(e.getAttribute)
			title = e.getAttribute("tiddler");
		if(!title && e.id && e.id.substr(0,lenPrefix) == idPrefix)
			title = e.id.substr(lenPrefix);
		if(title && title != "")
			{
			var tiddler = this.createTiddler(title);
			tiddler.loadFromDiv(e,title);
			}
		}
	this.dirty = false;
}

// Return an array of tiddlers matching a search string
TiddlyWiki.prototype.search = function(searchText,caseSensitive,useRegExp,sortField,excludeTag)
{
	if (!useRegExp)
		searchText = searchText.escapeRegExp();
	var regExp = new RegExp(searchText,caseSensitive ? "m" : "im");
	var candidates = this.reverseLookup("tags",excludeTag,false);
	var results = [];
	for(var t=0; t<candidates.length; t++)
		{
		if(regExp.test(candidates[t].title) || regExp.test(candidates[t].text))
			results.push(candidates[t]);
		}
	if(!sortField)
		sortField = "title";
	results.sort(function (a,b) {if(a[sortField] == b[sortField]) return(0); else return (a[sortField] < b[sortField]) ? -1 : +1; });
	return results;
}

// Return an array of all the tags in use. Each member of the array is another array where [0] is the name of the tag and [1] is the number of occurances
TiddlyWiki.prototype.getTags = function()
{
   var results = [];
   for(var t in this.tiddlers) {
      var tiddler = this.tiddlers[t];
//JBARDIN
      if (tiddler.tags) {
      for(g=0; g<tiddler.tags.length; g++) {
         var tag = tiddler.tags[g];
         var f = false;
         for(var c=0; c<results.length; c++) {
            if(results[c][0] == tag) {
               f = true;
               results[c][1]++;
            }
         }

         if(!f) {
            results.push([tag,1]);
         }
      }
      }
   }

   results.sort(function (a,b) {if(a[0] == b[0]) return(0); else return (a[0] < b[0]) ? -1 : +1; });
   return results;
}

// Return an array of the tiddlers that are tagged with a given tag
TiddlyWiki.prototype.getTaggedTiddlers = function(tag,sortField)
{
	return this.reverseLookup("tags",tag,true,sortField);
}

// Return an array of the tiddlers that link to a given tiddler
TiddlyWiki.prototype.getReferringTiddlers = function(title,unusedParameter,sortField)
{
	return this.reverseLookup("links",title,true,sortField);
}

// Return an array of the tiddlers that do or do not have a specified entry in the specified storage array (ie, "links" or "tags")
// lookupMatch == true to match tiddlers, false to exclude tiddlers
TiddlyWiki.prototype.reverseLookup = function(lookupField,lookupValue,lookupMatch,sortField)
{
   var results = [];
   for(var t in this.tiddlers) {
      var tiddler = this.tiddlers[t];
      if (tiddler[lookupField]) {
         var f = !lookupMatch;
         for(var lookup=0; lookup<tiddler[lookupField].length; lookup++) {
            if(tiddler[lookupField][lookup] == lookupValue) {
               f = lookupMatch;
            }
         }

         if (f) {
            results.push(tiddler);
         }
      }
   }

   if(!sortField) {
      sortField = "title";
   }
   
   results.sort(function (a,b) {if(a[sortField] == b[sortField]) return(0); else return (a[sortField] < b[sortField]) ? -1 : +1; });
   return results;
}

// Return the tiddlers as a sorted array
TiddlyWiki.prototype.getTiddlers = function(field)
{
	var results = [];
	for(var t in this.tiddlers) {
           if (t != "extend") {
		results.push(this.tiddlers[t]);
           }
        }
	if(field)
		results.sort(function (a,b) {if(a[field] == b[field]) return(0); else return (a[field] < b[field]) ? -1 : +1; });
	return results;
}

// Return array of names of tiddlers that are referred to but not defined
TiddlyWiki.prototype.getMissingLinks = function(sortField)
{
   //JBARDIN
   var results = [];
   for(var t in this.tiddlers) {
      var tiddler = this.tiddlers[t];
      if (tiddler.links) {
         for(var n=0; n<tiddler.links.length;n++) {
            var link = tiddler.links[n];
            if(this.tiddlers[link] == null)
               results.pushUnique(link);
         }
      }
   }

   results.sort();
   return results;
}

// Return an array of names of tiddlers that are defined but not referred to
TiddlyWiki.prototype.getOrphans = function()
{
   //JBARDIN
   var results = [];
   for(var t in this.tiddlers) {
      if (t != "extend") {
         if(this.getReferringTiddlers(t).length == 0)
            results.push(t);
      }
   }
  
   results.sort();
   return results;
}

// ---------------------------------------------------------------------------------
// Tiddler functions
// ---------------------------------------------------------------------------------

// Display several tiddlers from a list of space separated titles
function displayTiddlers(src,titles,state,highlightText,highlightCaseSensitive,animate,slowly)
{
	var tiddlerNames = titles.readBracketedList();
	for(var t = tiddlerNames.length-1;t>=0;t--)
		displayTiddler(src,tiddlerNames[t],state,highlightText,highlightCaseSensitive,animate,slowly);
}

// Display a tiddler with animation and scrolling, as though a link to it has been clicked on
//	src = source element object (eg link) for animation effects and positioning
//	title = title of tiddler to display
//	state = 0 is default or current state, 1 is read only and 2 is edittable
//	highlightText = text to highlight in the displayed tiddler
//	highlightCaseSensitive = flag for whether the highlight text is case sensitive
function displayTiddler(src,title,state,highlightText,highlightCaseSensitive,animate,slowly)
{
	var place = document.getElementById("tiddlerDisplay");
	var after = findContainingTiddler(src); // Which tiddler this one will be positioned after
	var before;
	if(after == null)
		before = place.firstChild;
	else if(after.nextSibling)
		before = after.nextSibling;
	else
		before = null;
	var theTiddler = createTiddler(place,before,title,state,highlightText,highlightCaseSensitive);
	if(src)
		{
		if(config.options.chkAnimate && (animate == undefined || animate == true))
			anim.startAnimating(new Zoomer(title,src,theTiddler,slowly),new Scroller(theTiddler,slowly));
		else
			window.scrollTo(0,ensureVisible(theTiddler));
		}
}

// Create a tiddler if it doesn't exist (with no fancy animating)
//	place = parent element
//	before = node before which to create/move the tiddler
//	title = title of tiddler to display
//	state = 0 is default or current state, 1 is read only and 2 is edittable
//	highlightText = text to highlight in the displayed tiddler
//	highlightCaseSensitive = flag for whether the highlight text is case sensitive
function createTiddler(place,before,title,state,highlightText,highlightCaseSensitive)
{
	var theTiddler = createTiddlerSkeleton(place,before,title);
	createTiddlerTitle(title,highlightText,highlightCaseSensitive);
	var theViewer = document.getElementById("viewer" + title);
	var theEditor = document.getElementById("editorWrapper" + title);
	switch(state)
		{
		case 0:
			if(!theViewer && !theEditor)
				{
				createTiddlerToolbar(title,false);
				createTiddlerViewer(title,highlightText,highlightCaseSensitive);
				createTiddlerFooter(title,false);
				}
			break;
		case 1: // Viewer
			if(theViewer)
				theViewer.parentNode.removeChild(theViewer);
			if(theEditor)
				theEditor.parentNode.removeChild(theEditor);
			createTiddlerToolbar(title,false);
			createTiddlerViewer(title,highlightText,highlightCaseSensitive);
			createTiddlerFooter(title,false);
			break;
		case 2: // Editor
			if(!theEditor)
				{
				if(theViewer)
					theViewer.parentNode.removeChild(theViewer);
				createTiddlerToolbar(title,true);
				createTiddlerEditor(title);
				createTiddlerFooter(title,true);
				}
			break;
		}
	return(theTiddler);
}

function refreshTiddler(title)
{
	var theViewer = document.getElementById("viewer" + title);
	if(theViewer)
		{
		theViewer.parentNode.removeChild(theViewer);
		createTiddlerViewer(title,null,null);
		}
}

function createTiddlerSkeleton(place,before,title)
{
	var theTiddler = document.getElementById("tiddler" + title);
	if(!theTiddler)
		{
		theTiddler = createTiddlyElement(null,"div","tiddler" + title,"tiddler",null);
		theTiddler.onmouseover = onMouseOverTiddler;
		theTiddler.onmouseout = onMouseOutTiddler;
		theTiddler.ondblclick = onDblClickTiddler;
		var theInnerTiddler = createTiddlyElement(theTiddler,"div",null,"unselectedTiddler",null);
		var theToolbar = createTiddlyElement(theInnerTiddler,"div","toolbar" + title,"toolbar", null);
		var theTitle = createTiddlyElement(theInnerTiddler,"div","title" + title,"title",null);
		var theBody = createTiddlyElement(theInnerTiddler,"div","body" + title,"body",null);
		var theFooter = createTiddlyElement(theInnerTiddler,"div","footer" + title,"footer",null);
		place.insertBefore(theTiddler,before);
		}
	return(theTiddler);
}

function createTiddlerTitle(title,highlightText,highlightCaseSensitive)
{
	var theTitle = document.getElementById("title" + title);
	if(theTitle)
		{
		removeChildren(theTitle);
		createTiddlyText(theTitle,title);
		if(store.tiddlerExists(title))
			theTitle.title = store.tiddlers[title].getSubtitle();
		}
}

// Create a tiddler toolbar according to whether it's an editor or not
function createTiddlerToolbar(title,isEditor)
{
	var theToolbar = document.getElementById("toolbar" + title);
	var lingo = config.views;
	if(theToolbar)
		{
		removeChildren(theToolbar);
		insertSpacer(theToolbar);
		if(isEditor)
			{
			// Editor toolbar
			lingo = lingo.editor;
			createTiddlyButton(theToolbar,lingo.toolbarDone.text,lingo.toolbarDone.tooltip,onClickToolbarSave);
			insertSpacer(theToolbar);
			createTiddlyButton(theToolbar,lingo.toolbarCancel.text,lingo.toolbarCancel.tooltip,onClickToolbarUndo);
			insertSpacer(theToolbar);
			createTiddlyButton(theToolbar,lingo.toolbarDelete.text,lingo.toolbarDelete.tooltip,onClickToolbarDelete);
			}
		else
			{
			// Viewer toolbar
			lingo = lingo.wikified;
			createTiddlyButton(theToolbar,lingo.toolbarClose.text,lingo.toolbarClose.tooltip,onClickToolbarClose);
			insertSpacer(theToolbar);
			if(!readOnly)
				{
				createTiddlyButton(theToolbar,lingo.toolbarEdit.text,lingo.toolbarEdit.tooltip,onClickToolbarEdit);
				insertSpacer(theToolbar);
				}
			createTiddlyButton(theToolbar,lingo.toolbarPermalink.text,lingo.toolbarPermalink.tooltip,onClickToolbarPermaLink);
			insertSpacer(theToolbar);
			createTiddlyButton(theToolbar,lingo.toolbarReferences.text,lingo.toolbarReferences.tooltip,onClickToolbarReferences);
			}
		insertSpacer(theToolbar);
		}
}

function createTiddlerPopup(srcElement)
{
	var popup = document.getElementById("popup");
	if(popup && popup.nextSibling == srcElement)
		{
		hideTiddlerPopup();
		return null;
		}
	if(popup)
		popup.parentNode.removeChild(popup);
	popup = createTiddlyElement(null,"div","popup",null,null);
	var leftPx = srcElement.offsetLeft;
	var topPx = srcElement.offsetTop;
	var heightPx = srcElement.offsetHeight;
	if (leftPx <= 1 && srcElement.parentNode.offsetLeft > 0)
		leftPx = srcElement.parentNode.offsetLeft;
	if (topPx <= 1 && srcElement.parentNode.offsetTop > 0)
		topPx = srcElement.parentNode.offsetTop;
	if (heightPx <= 1 && srcElement.parentNode.offsetHeight > 0)
		heightPx = srcElement.parentNode.offsetHeight;
	//popup.style.left = leftPx + "px";
	//popup.style.top = topPx + heightPx + "px";
	popup.style.display = "block";
	//popup.style.left = 0 + "px";
	//popup.style.top = 0 + "px";
	srcElement.onmouseout = onMouseOutTiddlerPopup;
	srcElement.appendChild(popup);
	return popup;
}

function scrollToTiddlerPopup(popup,slowly)
{
	if(config.options.chkAnimate)
		anim.startAnimating(new Scroller(popup,slowly));
	else
		window.scrollTo(0,ensureVisible(popup));
}

function onMouseOutTiddlerPopup(e)
{
	if (!e) var e = window.event;
	var related = (e.relatedTarget) ? e.relatedTarget : e.toElement;
	try
		{
		while (related != this && related && related.nodeName && related.nodeName.toLowerCase() != "body")
			related = related.parentNode;
		}
	catch(e)
		{
		related = null;
		}
	if(related != this)
		{
		this.onmouseout = null;
		hideTiddlerPopup();
		}
	e.cancelBubble = true;
	if (e.stopPropagation) e.stopPropagation();
	return(false);
}

function hideTiddlerPopup()
{
	var popup = document.getElementById("popup");
	if(popup)
		popup.parentNode.removeChild(popup);
}

// Create the body section of a read-only tiddler
function createTiddlerViewer(title,highlightText,highlightCaseSensitive)
{
	var theBody = document.getElementById("body" + title);
	if(theBody)
		{
		var tiddlerText = store.getTiddlerText(title);
		var theViewer = createTiddlyElement(theBody,"div","viewer" + title,"viewer",null);
		if(store.tiddlerExists(title))
			theViewer.setAttribute("tags",tiddler.tags.join(" "));
		if(!tiddlerText)
			{
			tiddlerText = config.views.wikified.defaultText.format([title]);
			theViewer.style.fontStyle = "italic";
			}
		wikify(tiddlerText,theViewer,highlightText,highlightCaseSensitive);
		theViewer.style.overflow = "visible";
		theViewer.style.height = "auto";
		}
}

// Create the footer section of a tiddler
function createTiddlerFooter(title,isEditor)
{
	var theFooter = document.getElementById("footer" + title);
	var tiddler = store.tiddlers[title];
	if(theFooter && tiddler instanceof Tiddler)
		{
		removeChildren(theFooter);
		insertSpacer(theFooter);
		if(isEditor)
			{
			}
		else
			{
			var lingo = config.views.wikified.tag;
			var prompt = tiddler.tags.length == 0 ? lingo.labelNoTags : lingo.labelTags;
			var theTags = createTiddlyElement(theFooter,"div",null,null,prompt);
			for(var t=0; t<tiddler.tags.length; t++)
				{
				var theTag = createTagButton(theTags,tiddler.tags[t],tiddler.title);
				createTiddlyText(theTags," ");
				}
			}
		}
}

// Create a button for a tag with a popup listing all the tiddlers that it tags
function createTagButton(place,tag,excludeTiddler)
{
	var theTag = createTiddlyButton(place,tag,config.views.wikified.tag.tooltip.format([tag]),onClickTag);
	theTag.setAttribute("tag",tag);
	if(excludeTiddler)
		theTag.setAttribute("tiddler",excludeTiddler);
	return(theTag);
}

// Create the body section of an edittable tiddler
function createTiddlerEditor(title)
{
	var theBody = document.getElementById("body" + title);
	if(theBody)
		{
		var tiddlerText = store.getTiddlerText(title);
		var tiddlerExists = (tiddlerText != null);
		if(!tiddlerExists)
			tiddlerText = config.views.editor.defaultText.format([title]);
		var theEditor = createTiddlyElement(theBody,"div","editorWrapper" + title,"editor",null);
		theEditor.onkeypress = onEditKey;
		var theTitleBox = createTiddlyElement(theEditor,"input","editorTitle" + title,null,null);
		theTitleBox.setAttribute("type","text");
		theTitleBox.value = title;
		theTitleBox.setAttribute("size","40");
		theTitleBox.setAttribute("autocomplete","off");
		var theBodyBox = createTiddlyElement(theEditor,"textarea","editorBody" + title,null,null);
		theBodyBox.value = tiddlerText;
		var rows = 10;
		var lines = tiddlerText.match(regexpNewLine);
		if(lines != null && lines.length > rows)
			rows = lines.length + 5;
		theBodyBox.setAttribute("rows",rows);
		var theTagsBox = createTiddlyElement(theEditor,"input","editorTags" + title,null,null);
		theTagsBox.setAttribute("type","text");
		var tiddler = store.tiddlers[title];
		theTagsBox.value = tiddler instanceof Tiddler ? tiddler.getTags() : "";
		theTagsBox.setAttribute("size","40");
		theTagsBox.setAttribute("autocomplete","off");
		var tagPrompt = createTiddlyElement(theEditor,"div",null,"editorFooter",config.views.editor.tagPrompt);
		insertSpacer(tagPrompt);
		var lingo = config.views.editor.tagChooser;
		var addTag = createTiddlyButton(tagPrompt,lingo.text,lingo.tooltip,onClickAddTag);
		addTag.setAttribute("tiddler",title);
		theBodyBox.focus();
		}
}

function saveTiddler(title,minorUpdate)
{
	var titleBox = document.getElementById("editorTitle" + title);
	var newTitle = titleBox.value;
	if(store.tiddlerExists(newTitle))
		{
		if(newTitle != title && !confirm(config.messages.overwriteWarning.format([newTitle.toString()])))
			{
			titleBox.focus();
			titleBox.select();
			return;
			}
		}
	var body = document.getElementById("editorBody" + title);
	var newBody = body.value;
	newBody = newBody.replace(/\r/mg,"");
	var newTags = document.getElementById("editorTags" + title).value;
	blurTiddler(title);
	if(config.options.chkForceMinorUpdate)
		minorUpdate = !minorUpdate;
	var newDate = new Date();
	store.saveTiddler(title,newTitle,newBody,config.options.txtUserName,minorUpdate ? undefined : new Date(),newTags);
	displayTiddler(null,newTitle,1,null,null,null,false,false);
	// Close the old tiddler if this is a rename
	if(title != newTitle)
		{
		var oldTiddler = document.getElementById("tiddler" + title);
		var newTiddler = document.getElementById("tiddler" + newTitle);
		oldTiddler.parentNode.replaceChild(newTiddler,oldTiddler);
		}
	if(config.options.chkAutoSave)
		saveChanges();
}

function selectTiddler(title)
{
	var e = document.getElementById("tiddler" + title);
	if(e != null)
		e.firstChild.className = "selectedTiddler";
}

function deselectTiddler(title)
{
	var e = document.getElementById("tiddler" + title);
	if(e != null)
		e.firstChild.className = "unselectedTiddler";
}

function blurTiddler(title)
{
	var body = document.getElementById("editorBody" + title);
	if(body)
		{
		body.focus();
		body.blur();
		}
}

function deleteTiddler(title)
{
	closeTiddler(title,false);
	store.removeTiddler(title);
	// Autosave
	if(config.options.chkAutoSave)
		saveChanges();
}

function closeTiddler(title,slowly)
{
	var tiddler = document.getElementById("tiddler" + title);
	if(tiddler != null)
		{
		scrubIds(tiddler);
		if(config.options.chkAnimate)
			anim.startAnimating(new Slider(tiddler,false,slowly,"all"));
		else
			tiddler.parentNode.removeChild(tiddler);
		}
}

function scrubIds(e)
{
	if(e.id)
		e.id = null;
	var children = e.childNodes;
	for(var t=0; t<children.length; t++)
		{
		var c = children[t];
		if(c.id)
			c.id = null;
		}
}

function closeAllTiddlers()
{
	clearMessage();
	var place = document.getElementById("tiddlerDisplay");
	var tiddler = place.firstChild;
	var nextTiddler;
	while(tiddler)
		{
		nextTiddler = tiddler.nextSibling;
		if(tiddler.id)
			if(tiddler.id.substr(0,7) == "tiddler")
				{
				var title = tiddler.id.substr(7);
				if(!document.getElementById("editorWrapper" + title))
					place.removeChild(tiddler);
				}
		tiddler = nextTiddler;
		}
}

// ---------------------------------------------------------------------------------
// Message area
// ---------------------------------------------------------------------------------

function displayMessage(text,linkText)
{
	var msgArea = document.getElementById("messageArea");
	var msg;
	if(linkText)
		{
		msg = createTiddlyElement(msgArea,"div",null,null,null);
		var link = createTiddlyElement(msg,"a",null,null,text);
		link.href = linkText;
		link.target = "_blank";
		}
	else
		msg = createTiddlyElement(msgArea,"div",null,null,text);
	msgArea.style.display = "block";
}

function clearMessage()
{
	var msgArea = document.getElementById("messageArea");
	removeChildren(msgArea);
	msgArea.style.display = "none";
}

// ---------------------------------------------------------------------------------
// Menu and sidebar functions
// ---------------------------------------------------------------------------------

function refreshStory(hint)
{
	var hits = hint ? store.getReferringTiddlers(hint) : null;
	var displayNodes = document.getElementById("tiddlerDisplay").childNodes;
	for(var t=0;t<displayNodes.length;t++)
		{
		var theId = displayNodes[t].id;
		if(theId && theId.substr(0,7) == "tiddler")
			{
			var title = theId.substr(7);
			if(hint)
				{
				var f = false;
				for(var h=0; h<hits.length; h++)
					if(hits[h].title == title)
						f = true
				if(f)
					refreshTiddler(title);
				}
			else
				refreshTiddler(title);
			}
		}
}

function refreshTabs(hint)
{
	refreshSpecialItem("sidebarTabs","SideBarTabs","SideBarTabs");
}

function refreshMenu(hint)
{
	refreshSpecialItem("mainMenu","MainMenu","MainMenu");
}

function refreshTitle(title)
{
	refreshSpecialItem("siteTitle",title,"SiteTitle");
	refreshPageTitle();
}

function refreshSubtitle(title)
{
	refreshSpecialItem("siteSubtitle",title,"SiteSubtitle");
	refreshPageTitle();
}

function refreshPageTitle()
{
	document.title = getElementText("siteTitle") + " - " + getElementText("siteSubtitle");
}

function refreshSidebar(title)
{
	refreshSpecialItem("sidebarOptions",title,"SideBarOptions");
}

function refreshSpecialItem(elementID,title,defaultText)
{
	var place = document.getElementById(elementID);
	removeChildren(place);
	wikify(store.getTiddlerText(title,defaultText),place,null,null);
}

function refreshStyles(title)
{
	setStylesheet(title == null ? "" : store.getRecursiveTiddlerText(title,"",10));
}

// ---------------------------------------------------------------------------------
// Options cookie stuff
// ---------------------------------------------------------------------------------

function loadOptionsCookie()
{
	var cookies = document.cookie.split(";");
	for(var c=0; c<cookies.length; c++)
		{
		var p = cookies[c].indexOf("=");
		if(p != -1)
			{
			var name = cookies[c].substr(0,p).trim();
			var value = cookies[c].substr(p+1).trim();
			switch(name.substr(0,3))
				{
				case "txt":
					config.options[name] = unescape(value);
					break;
				case "chk":
					config.options[name] = value == "true";
					break;
				}
			}
		}
}

function saveOptionCookie(name)
{
	var c = name + "=";
	switch(name.substr(0,3))
		{
		case "txt":
			c += escape(config.options[name].toString());
			break;
		case "chk":
			c += config.options[name] ? "true" : "false";
			break;
		}
	c += "; expires=Fri, 1 Jan 2038 12:00:00 UTC; path=/";
	document.cookie = c;
}

// ---------------------------------------------------------------------------------
// Saving
// ---------------------------------------------------------------------------------

var saveUsingSafari = false;
var startSaveArea = '<div id="' + 'storeArea">'; // Split up into two so that indexOf() of this source doesn't find it
var endSaveArea = '</d' + 'iv>';

// Check if there any unsaved changes before exitting
function checkUnsavedChanges()
{
	if(store.dirty)
		{
		if(confirm(config.messages.unsavedChangesWarning))
			saveChanges();
		}
}

// Save this tiddlywiki with the pending changes
function saveChanges()
{
	clearMessage();
	// Get the URL of the document
	var originalPath = document.location.toString();
	// Check we were loaded from a file URL
        //JBARDIN
	//if(originalPath.substr(0,5) != "file:")
	//	{
	//	alert(config.messages.notFileUrlError);
	//	displayTiddler(null,"SaveChanges",0,null,null,false,false);
	//	return;
	//	}
	// Remove any location part of the URL
	var hashPos = originalPath.indexOf("#");
	if(hashPos != -1)
		originalPath = originalPath.substr(0,hashPos);

	// Convert to a native file format assuming
	// "file:///x:/path/path/path..." - pc local file --> "x:\path\path\path..."
	// "file://///server/share/path/path/path..." - FireFox pc network file --> "\\server\share\path\path\path..."
	// "file:///path/path/path..." - mac/unix local file --> "/path/path/path..."
	// "file://server/share/path/path/path..." - pc network file --> "\\server\share\path\path\path..."
	var localPath;
        localPath = originalPath;
    
        /*
	if(originalPath.charAt(9) == ":") // pc local file
		localPath = unescape(originalPath.substr(8)).replace(new RegExp("/","g"),"\\");
	else if(originalPath.indexOf("http://///") == 0) // FireFox pc network file
		localPath = "\\\\" + unescape(originalPath.substr(10)).replace(new RegExp("/","g"),"\\");
	else if(originalPath.indexOf("http:///") == 0) // mac/unix local file
		localPath = unescape(originalPath.substr(7));
	else if(originalPath.indexOf("http:/") == 0) // mac/unix local file
		localPath = unescape(originalPath.substr(5));
	else // pc network file
		localPath = "\\\\" + unescape(originalPath.substr(7)).replace(new RegExp("/","g"),"\\");
	*/
        // Load the original file
	var original = loadFile(localPath);
	if(original == null)
		{
		alert(config.messages.cantSaveError);
		displayTiddler(null,"SaveChanges",0,null,null,false,false);
		return;
		}
	// Locate the storeArea div's
	var posOpeningDiv = original.indexOf(startSaveArea);
	var posClosingDiv = original.lastIndexOf(endSaveArea);
	if((posOpeningDiv == -1) || (posClosingDiv == -1))
		{
		alert(config.messages.invalidFileError.format([localPath]));
		return;
		}
	// Save the backup
	if(config.options.chkSaveBackups)
		{
		var backupPath = localPath + "&file=backup-" + (new Date()).convertToYYYYMMDDHHMMSSMMM() + ".html";
                //.substr(0,localPath.lastIndexOf(".")) + "." + (new Date()).convertToYYYYMMDDHHMMSSMMM() + ".html";
		var backup = saveFile(backupPath,original);
		if(backup)
			displayMessage(config.messages.backupSaved,"file://" + backupPath);
		else
			alert(config.messages.backupFailed);
		}
	// Save Rss
	if(config.options.chkGenerateAnRssFeed)
		{
		var rssPath = localPath + "&file=rss.xml";
                //.substr(0,localPath.lastIndexOf(".")) + ".xml";
		var rssSave = saveFile(rssPath,convertUnicodeToUTF8(generateRss()));
		if(rssSave)
			displayMessage(config.messages.rssSaved,"file://" + rssPath);
		else
			alert(config.messages.rssFailed);
		}
	// Save empty template
	if(config.options.chkSaveEmptyTemplate)
		{
		var emptyPath,p;
		//if((p = localPath.lastIndexOf("/")) != -1)
		//	emptyPath = localPath.substr(0,p) + "/empty.html";
		//else if((p = localPath.lastIndexOf("\\")) != -1)
		//	emptyPath = localPath.substr(0,p) + "\\empty.html";
		//else
			emptyPath = localPath + "&file=empty.html";
		var empty = original.substr(0,posOpeningDiv + startSaveArea.length) + convertUnicodeToUTF8(generateEmpty()) + original.substr(posClosingDiv);
		var emptySave = saveFile(emptyPath,empty);
		if(emptySave)
			displayMessage(config.messages.emptySaved,"file://" + emptyPath);
		else
			alert(config.messages.emptyFailed);
		}
	// Save new file
	var revised = original.substr(0,posOpeningDiv + startSaveArea.length) + 
				convertUnicodeToUTF8(allTiddlersAsHtml()) + "\n\t\t" +
				original.substr(posClosingDiv);
	var newSiteTitle = convertUnicodeToUTF8((getElementText("siteTitle") + " - " + getElementText("siteSubtitle")).htmlEncode());
	revised = revised.replace(new RegExp("<title>[^<]*</title>", "im"),"<title>"+ newSiteTitle +"</title>");
        var savePath = localPath + "&file=index.html";
	var save = saveFile(savePath,revised);
	if(save)
		{
		displayMessage(config.messages.mainSaved,"file://" + localPath);
		store.setDirty(false);
		}
	else
		alert(config.messages.mainFailed);
}

function generateRss()
{
	var s = [];
	var d = new Date();
	var u = store.getTiddlerText("SiteUrl",null);
	// Assemble the header
	s.push("<" + "?xml version=\"1.0\"?" + ">");
	s.push("<rss version=\"2.0\">");
	s.push("<channel>");
	s.push("<title>" + store.getTiddlerText("SiteTitle","").htmlEncode() + "</title>");
	if(u)
		s.push("<link>" + u.htmlEncode() + "</link>");
	s.push("<description>" + store.getTiddlerText("SiteSubtitle","").htmlEncode() + "</description>");
	s.push("<language>en-us</language>");
	s.push("<copyright>Copyright " + d.getFullYear() + " " + config.options.txtUserName.htmlEncode() + "</copyright>");
	s.push("<pubDate>" + d.toGMTString() + "</pubDate>");
	s.push("<lastBuildDate>" + d.toGMTString() + "</lastBuildDate>");
	s.push("<docs>http://blogs.law.harvard.edu/tech/rss</docs>");
	s.push("<generator>TiddlyWiki " + version.major + "." + version.minor + "." + version.revision + "</generator>");
	// The body
	var tiddlers = store.getTiddlers("modified");
	var n = config.numRssItems > tiddlers.length ? 0 : tiddlers.length-config.numRssItems;
	for (var t=tiddlers.length-1; t>=n; t--) {
//JBARDIN alert(tiddlers[t].saveToRss(u));
		s.push(tiddlers[t].saveToRss(u));
        }
	// And footer
	s.push("</channel>");
	s.push("</rss>");
	// Save it all
	return s.join("\n");
}

function generateEmpty()
{
	var systemTiddlers = store.getTaggedTiddlers("systemTiddlers");
	var savedTiddlers = [];
	for(var s=0;s<systemTiddlers.length;s++)
		savedTiddlers.push(systemTiddlers[s].saveToDiv());
	return savedTiddlers.join("\n");
}

function allTiddlersAsHtml()
{
	var savedTiddlers = [];
	var tiddlers = store.getTiddlers("title");
	for (var t = 0; t < tiddlers.length; t++)
		savedTiddlers.push(tiddlers[t].saveToDiv());
	return savedTiddlers.join("\n");
}

// UTF-8 encoding rules:
// 0x0000 - 0x007F:	0xxxxxxx
// 0x0080 - 0x07FF:	110xxxxx 10xxxxxx
// 0x0800 - 0xFFFF:	1110xxxx 10xxxxxx 10xxxxxx

function convertUTF8ToUnicode(u)
{
	var s = "";
	var t = 0;
	var b1, b2, b3;
	while(t < u.length)
		{
		b1 = u.charCodeAt(t++);
		if(b1 < 0x80)
			s += String.fromCharCode(b1);
		else if(b1 < 0xE0)
			{
			b2 = u.charCodeAt(t++);
			s += String.fromCharCode(((b1 & 0x1F) << 6) | (b2 & 0x3F));
			}
		else
			{
			b2 = u.charCodeAt(t++);
			b3 = u.charCodeAt(t++);
			s += String.fromCharCode(((b1 & 0xF) << 12) | ((b2 & 0x3F) << 6) | (b3 & 0x3F));
			}
	}
	return(s);
}

function convertUnicodeToUTF8(s)
{
	//if(saveUsingSafari)
	//	return s;
	//else if(window.Components)
	//	return mozConvertUnicodeToUTF8(s);
	//else
		return manualConvertUnicodeToUTF8(s);
}

function manualConvertUnicodeToUTF8(s)
{
	var re = /[^\u0000-\u007F]/g ;
	return s.replace(re, function($0) {return("&#" + $0.charCodeAt(0).toString() + ";");})
}

function mozConvertUnicodeToUTF8(s)
{
	netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
	var converter = Components.classes["@mozilla.org/intl/scriptableunicodeconverter"].createInstance(Components.interfaces.nsIScriptableUnicodeConverter);
	converter.charset = "UTF-8";
	var u = converter.ConvertFromUnicode(s);
	var fin = converter.Finish();
	if(fin.length > 0)
		return u + fin;
	else
		return u;
}

function saveFile(fileUrl, content)
{
   var r = null;
   var req = new Ajax.Request("ajax.php",
      {asynchronous: false, parameters: 'state=save&fileUrl='+escape(fileUrl)+'&content='+escape(content)}
   );

   if (req.responseIsSuccess()) {
      //alert(req.transport.responseText);
      if (req.transport.responseText == "1") {
         r = true;
      } else {
         alert(req.transport.responseText);
      }
   }
   return(r);
}

function loadFile(fileUrl)
{
   var r = null;

   var req = new Ajax.Request("ajax.php", 
      {asynchronous: false, parameters: "state=load&fileUrl="+escape(fileUrl)}
   );

   if (req.responseIsSuccess()) {
      r = req.transport.responseText;
   }

//JBARDIN
/*
	if(saveUsingSafari)
		r = safariLoadFile(fileUrl);
	if((r == null) || (r == false))
		r = mozillaLoadFile(fileUrl);
	if((r == null) || (r == false))
		r = ieLoadFile(fileUrl);
	if((r == null) || (r == false))
		r = operaLoadFile(fileUrl);
*/
	return(r);
}

// Returns null if it can't do it, false if there's an error, true if it saved OK
function ieSaveFile(filePath, content)
{
	try
		{
		var fso = new ActiveXObject("Scripting.FileSystemObject");
		}
	catch(e)
		{
		//alert("Exception while attempting to save\n\n" + e.toString());
		return(null);
		}
	var file = fso.OpenTextFile(filePath,2,-1,0);
	file.Write(content);
	file.Close();
	return(true);
}

// Returns null if it can't do it, false if there's an error, or a string of the content if successful
function ieLoadFile(filePath)
{
	try
		{
		var fso = new ActiveXObject("Scripting.FileSystemObject");
		var file = fso.OpenTextFile(filePath,1);
		var content = file.ReadAll();
		file.Close();
		}
	catch(e)
		{
		//alert("Exception while attempting to load\n\n" + e.toString());
		return(null);
		}
	return(content);
}

// Returns null if it can't do it, false if there's an error, true if it saved OK
function mozillaSaveFile(filePath, content)
{
	if(window.Components)
		try
			{
			netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
			var file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);
			file.initWithPath(filePath);
			if (!file.exists())
				file.create(0, 0664);
			var out = Components.classes["@mozilla.org/network/file-output-stream;1"].createInstance(Components.interfaces.nsIFileOutputStream);
			out.init(file, 0x20 | 0x02, 00004,null);
			out.write(content, content.length);
			out.flush();
			out.close();
			return(true);
			}
		catch(e)
			{
			//alert("Exception while attempting to save\n\n" + e);
			return(false);
			}
	return(null);
}

// Returns null if it can't do it, false if there's an error, or a string of the content if successful
function mozillaLoadFile(filePath)
{
	if(window.Components)
		try
			{
			netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
			var file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);
			file.initWithPath(filePath);
			if (!file.exists())
				return(null);
			var inputStream = Components.classes["@mozilla.org/network/file-input-stream;1"].createInstance(Components.interfaces.nsIFileInputStream);
			inputStream.init(file, 0x01, 00004, null);
			var sInputStream = Components.classes["@mozilla.org/scriptableinputstream;1"].createInstance(Components.interfaces.nsIScriptableInputStream);
			sInputStream.init(inputStream);
			return(sInputStream.read(sInputStream.available()));
			}
		catch(e)
			{
			//alert("Exception while attempting to load\n\n" + e);
			return(false);
			}
	return(null);
}

function operaSaveFile(filePath, content)
{
	try
		{
		var s = new java.io.PrintStream(new java.io.FileOutputStream(filePath));
		s.print(content);
		s.close();
		}
	catch(e)
		{
		if(opera)
			opera.postError(e);
		return null;
		}
	return true;
}

function operaLoadFile(filePath)
{
	var content = [];
	try
		{
		var r = new java.io.BufferedReader(new java.io.FileReader(filePath));
		var line;
		while ((line = r.readLine()) != null)
			content.push(line);
		r.close();
		}
	catch(e)
		{
		if(opera)
			opera.postError(e);
		return null;
		}
	return content.join("\n");
}

function safariFilenameToUrl(filename) {
	return ("file://" + filename);
}

function safariLoadFile(url)
{
	url = safariFilenameToUrl(url);
	var plugin = document.embeds["tiddlyWikiSafariSaver"];
	return plugin.readURL(url);
}

function safariSaveFile(url,content)
{
	url = safariFilenameToUrl(url);
	var plugin = document.embeds["tiddlyWikiSafariSaver"];
	return plugin.writeStringToURL(content,url);
}

// Lifted from http://developer.apple.com/internet/webcontent/detectplugins.html
function detectPlugin()
{
	var daPlugins = detectPlugin.arguments;
	var pluginFound = false;
	if (navigator.plugins && navigator.plugins.length > 0)
		{
		var pluginsArrayLength = navigator.plugins.length;
		for (pluginsArrayCounter=0; pluginsArrayCounter < pluginsArrayLength; pluginsArrayCounter++ )
			{
			var numFound = 0;
			for(namesCounter=0; namesCounter < daPlugins.length; namesCounter++)
				{
				if( (navigator.plugins[pluginsArrayCounter].name.indexOf(daPlugins[namesCounter]) >= 0) || 
						(navigator.plugins[pluginsArrayCounter].description.indexOf(daPlugins[namesCounter]) >= 0) )
					numFound++;
				}
			if(numFound == daPlugins.length)
				{
				pluginFound = true;
				break;
				}
			}
	}
	return pluginFound;
}

// ---------------------------------------------------------------------------------
// Event handlers
// ---------------------------------------------------------------------------------

function onEditKey(e)
{
	if (!e) var e = window.event;
	clearMessage();
	var consume = false;
	switch(e.keyCode)
		{
		case 13: // Ctrl-Enter
		case 10: // Ctrl-Enter on IE PC
		case 77: // Ctrl-Enter is "M" on some platforms
			if(e.ctrlKey && this.id && this.id.substr(0,13) == "editorWrapper")
				{
				blurTiddler(this.id.substr(13));
				saveTiddler(this.id.substr(13),e.shiftKey);
				consume = true;
				}
			break;
		case 27: // Escape
			if(this.id && this.id.substr(0,13) == "editorWrapper")
				{
				blurTiddler(this.id.substr(13));
				displayTiddler(null,this.id.substr(13),1,null,null,false,false);
				consume = true;
				}
			break;
		}
	e.cancelBubble = consume;
	if(consume)
		if (e.stopPropagation) e.stopPropagation();
	return(!consume);

}

// Event handler for clicking on a tiddly link
function onClickTiddlerLink(e)
{
	if (!e) var e = window.event;
	var theTarget = resolveTarget(e);
	var theLink = theTarget;
	var title = null;
	do {
		title = theLink.getAttribute("tiddlyLink");
		theLink = theLink.parentNode;
	} while(title == null && theLink != null);
	if(title)
		{
		var toggling = e.metaKey || e.ctrlKey;
		if(config.options.chkToggleLinks)
			toggling = !toggling;
		var opening;
		if(toggling && document.getElementById("tiddler" + title))
			closeTiddler(title,e.shiftKey || e.altKey);
		else
			displayTiddler(theTarget,title,0,null,null,true,e.shiftKey || e.altKey);
		}
	clearMessage();
	e.cancelBubble = true;
	if (e.stopPropagation) e.stopPropagation();
	return(false);
}

// Event handler for mouse over a tiddler
function onMouseOverTiddler(e)
{
	var tiddler;
	if(this.id.substr(0,7) == "tiddler")
		tiddler = this.id.substr(7);
	if(tiddler)
		selectTiddler(tiddler);
}

// Event handler for mouse out of a tiddler
function onMouseOutTiddler(e)
{
	var tiddler;
	if(this.id.substr(0,7) == "tiddler")
		tiddler = this.id.substr(7);
	if(tiddler)
		deselectTiddler(tiddler);
}

// Event handler for double click on a tiddler
function onDblClickTiddler(e)
{
	if (!e) var e = window.event;
	var theTarget = resolveTarget(e);
	if(!readOnly && theTarget && theTarget.nodeName.toLowerCase() != "input" && theTarget.nodeName.toLowerCase() != "textarea")
		{
		clearMessage();
		if(document.selection && document.selection.empty)
			document.selection.empty();
		var tiddler;
		if(this.id.substr(0,7) == "tiddler")
			tiddler = this.id.substr(7);
		if(tiddler)
			displayTiddler(null,tiddler,2,null,null,false,false);
		return true;
		}
	else
		return false;
}

// Event handler for clicking on toolbar close
function onClickToolbarClose(e)
{
	if (!e) var e = window.event;
	clearMessage();
	if(this.parentNode.id)
		closeTiddler(this.parentNode.id.substr(7),e.shiftKey || e.altKey);
	e.cancelBubble = true;
	if (e.stopPropagation) e.stopPropagation();
	return(false);
}

// Event handler for clicking on toolbar permalink
function onClickToolbarPermaLink(e)
{
	if(this.parentNode.id)
		{
		var title = this.parentNode.id.substr(7);
		var t = encodeURIComponent(String.encodeTiddlyLink(title));
		if(window.location.hash != t)
			window.location.hash = t;
		}
	return false;
}

// Event handler for clicking on toolbar close
function onClickToolbarDelete(e)
{
	clearMessage();
	if(this.parentNode.id)
		deleteTiddler(this.parentNode.id.substr(7));
	return false;
}

// Event handler for clicking on the toolbar references button
function onClickToolbarReferences(e)
{
	if (!e) var e = window.event;
	var theTarget = resolveTarget(e);
	var popup = createTiddlerPopup(this);
	if(popup && this.parentNode.id)
		{
		var title = this.parentNode.id.substr(7);
		var references = store.getReferringTiddlers(title);
		var c = false;
		for(var r=0; r<references.length; r++)
			if(references[r].title != title)
				{
				createTiddlyLink(popup,references[r].title,true);
				c = true;
				}
		if(!c)
			popup.appendChild(document.createTextNode(config.views.wikified.toolbarReferences.popupNone));
		}
	scrollToTiddlerPopup(popup,false);
	e.cancelBubble = true;
	if (e.stopPropagation) e.stopPropagation();
	return(false);
}

// Event handler for clicking on a tiddler tag
function onClickTag(e)
{
	if (!e) var e = window.event;
	var theTarget = resolveTarget(e);
	var popup = createTiddlerPopup(this);
	var tag = this.getAttribute("tag");
	var title = this.getAttribute("tiddler");
	if(popup && tag)
		{
		var tagged = store.getTaggedTiddlers(tag);
		var c = false;
		for(var r=0;r<tagged.length;r++)
			if(tagged[r].title != title)
				{
				createTiddlyLink(popup,tagged[r].title,true);
				c = true;
				}
		var lingo = config.views.wikified.tag;
		if(c)
			{
			popup.insertBefore(document.createElement("hr"),popup.firstChild);
			var openAll = createTiddlyButton(null,lingo.openAllText.format([tag]),lingo.openAllTooltip,onClickTagOpenAll);
			openAll.setAttribute("tag",tag);
			popup.insertBefore(openAll,popup.firstChild);
			}
		else
			popup.appendChild(document.createTextNode(lingo.popupNone.format([tag])));
		}
	scrollToTiddlerPopup(popup,false);
	e.cancelBubble = true;
	if (e.stopPropagation) e.stopPropagation();
	return(false);
}

// Event handler for 'open all' on a tiddler popup
function onClickTagOpenAll(e)
{
	if (!e) var e = window.event;
	var tag = this.getAttribute("tag");
	var tagged = store.getTaggedTiddlers(tag);
	for(var t=tagged.length-1; t>=0; t--)
		displayTiddler(this,tagged[t].title,0,null,null,false,e.shiftKey || e.altKey);
	e.cancelBubble = true;
	if (e.stopPropagation) e.stopPropagation();
	return(false);
}

// Event handler for clicking on the 'add tag' button
function onClickAddTag(e)
{
	if (!e) var e = window.event;
	var theTarget = resolveTarget(e);
	var popup = createTiddlerPopup(this);
	var tiddler = this.getAttribute("tiddler");
	var tags = store.getTags();
	var lingo = config.views.editor.tagChooser;
	if(tags.length == 0)
		createTiddlyElement(popup,"div",null,null,lingo.popupNone);
	for (t=0; t<tags.length; t++)
		{
		var theTag = createTiddlyButton(popup,tags[t][0],lingo.tagTooltip.format([tags[t][0]]),onClickAddTagPopup);
		theTag.setAttribute("tag",tags[t][0]);
		theTag.setAttribute("tiddler",tiddler);
		}
	scrollToTiddlerPopup(popup,false);
	e.cancelBubble = true;
	if (e.stopPropagation) e.stopPropagation();
	return(false);
}

// Event handler for clicking on a tag in the 'add tag' popup
function onClickAddTagPopup(e)
{
	if (!e) var e = window.event;
	var theTarget = resolveTarget(e);
	var tiddler = this.getAttribute("tiddler");
	var tag = this.getAttribute("tag");
	var tagsBox = document.getElementById("editorTags" + tiddler);
	if(tagsBox)
		tagsBox.value += " " + String.encodeTiddlyLink(tag);
	e.cancelBubble = true;
	if (e.stopPropagation) e.stopPropagation();
	return(false);
}

// Event handler for clicking on toolbar close
function onClickToolbarEdit(e)
{
	clearMessage();
	if(this.parentNode.id)
		displayTiddler(null,this.parentNode.id.substr(7),2,null,null,false,false);
	return false;
}

// Event handler for clicking on toolbar save
function onClickToolbarSave(e)
{
	if (!e) var e = window.event;
	if(this.parentNode.id)
		saveTiddler(this.parentNode.id.substr(7),e.shiftKey);
	return false;
}

// Event handler for clicking on toolbar save
function onClickToolbarUndo(e)
{
	if(this.parentNode.id)
		displayTiddler(null,this.parentNode.id.substr(7),1,null,null,false,false);
	return false;
}

// Eek... it's bad that this is done via a function rather than a normal, copy-able href
function onClickPermaView()
{
	var tiddlerDisplay = document.getElementById("tiddlerDisplay");
	var links = [];
	for(var t=0;t<tiddlerDisplay.childNodes.length;t++)
		{
		var tiddlerName = tiddlerDisplay.childNodes[t].id.substr(7);
		links.push(String.encodeTiddlyLink(tiddlerName));
		}
	window.location.hash = encodeURIComponent(links.join(" "));
	return false;
}

// ---------------------------------------------------------------------------------
// Animation engine
// ---------------------------------------------------------------------------------

function Animator()
{
	this.running = 0; // Incremented at start of each animation, decremented afterwards. If zero, the interval timer is disabled
	this.timerID; // ID of the timer used for animating
	this.animations = []; // List of animations in progress
	return this;
}

// Start animation engine
Animator.prototype.startAnimating = function() // Variable number of arguments
{
	for(var t=0; t<arguments.length; t++)
		this.animations.push(arguments[t]);
	if(this.running == 0)
		{
		var me = this;
		this.timerID = window.setInterval(function() {me.doAnimate(me);},25);
		}
	this.running += arguments.length;
}

// Perform an animation engine tick, calling each of the known animation modules
Animator.prototype.doAnimate = function(me)
{
	var a = 0;
	while(a<me.animations.length)
		{
		var animation = me.animations[a];
		animation.progress += animation.step;
		if(animation.progress < 0 || animation.progress > 1)
			{
			animation.stop();
			me.animations.splice(a,1);
			if(--me.running == 0)
				window.clearInterval(me.timerID);
			}
		else
			{
			animation.tick();
			a++;
			}
		}
}

// Map a 0..1 value to 0..1, but slow down at the start and end
Animator.slowInSlowOut = function(progress)
{
	return(1-((Math.cos(progress * Math.PI)+1)/2));
}

// ---------------------------------------------------------------------------------
// Zoomer animation
// ---------------------------------------------------------------------------------

function Zoomer(text,startElement,targetElement,slowly)
{
	this.element = document.createElement("div");
	this.element.appendChild(document.createTextNode(text));
	this.element.className = "zoomer";
	document.body.appendChild(this.element);
	this.startElement = startElement;
	this.startLeft = findPosX(this.startElement);
	this.startTop = findPosY(this.startElement);
	this.startWidth = this.startElement.offsetWidth;
	this.startHeight = this.startElement.offsetHeight;
	this.targetElement = targetElement;
	this.targetLeft = findPosX(this.targetElement);
	this.targetTop = findPosY(this.targetElement);
	this.targetWidth = this.targetElement.offsetWidth;
	this.targetHeight = this.targetElement.offsetHeight;
	this.progress = 0;
	this.step = slowly ? config.animSlow : config.animFast;
	//this.targetElement.style.opacity = 0;
	return this;
}

Zoomer.prototype.stop = function()
{
	this.element.parentNode.removeChild(this.element);
	//this.targetElement.style.opacity = 1;
}

Zoomer.prototype.tick = function()
{
	var f = Animator.slowInSlowOut(this.progress);
	this.element.style.left = this.startLeft + (this.targetLeft-this.startLeft) * f + "px";
	this.element.style.top = this.startTop + (this.targetTop-this.startTop) * f + "px";
	this.element.style.width = this.startWidth + (this.targetWidth-this.startWidth) * f + "px";
	this.element.style.height = this.startHeight + (this.targetHeight-this.startHeight) * f + "px";
	this.element.style.display = "block";
	//this.targetElement.style.opacity = this.progress;
	//this.targetElement.style.filter = "alpha(opacity:" + this.progress * 100 + ")";
}

// ---------------------------------------------------------------------------------
// Scroller animation
// ---------------------------------------------------------------------------------

function Scroller(targetElement,slowly)
{
	this.targetElement = targetElement;
	this.startScroll = findScrollY();
	this.targetScroll = ensureVisible(targetElement);
	this.progress = 0;
	this.step = slowly ? config.animSlow : config.animFast;
	return this;
}

Scroller.prototype.stop = function()
{
	window.scrollTo(0,this.targetScroll);
}

Scroller.prototype.tick = function()
{
	var f = Animator.slowInSlowOut(this.progress);
	window.scrollTo(0,this.startScroll + (this.targetScroll-this.startScroll) * f);
}

// ---------------------------------------------------------------------------------
// Slider animation
// ---------------------------------------------------------------------------------

// deleteMode - "none", "all" [delete target element and it's children], [only] "children" [but not the target element]
function Slider(element,opening,slowly,deleteMode)
{
	this.element = element;
	element.style.display = "block";
	this.deleteMode = deleteMode;
	this.element.style.height = "auto";
	this.realHeight = element.offsetHeight;
	this.opening = opening;
	this.step = slowly ? config.animSlow : config.animFast;
	if(opening)
		{
		this.progress = 0;
		element.style.height = "0px";
		element.style.display = "block";
		}
	else
		{
		this.progress = 1;
		this.step = -this.step;
		}
	element.style.overflow = "hidden";
	return this;
}

Slider.prototype.stop = function()
{
	if(this.opening)
		this.element.style.height = "auto";
	else
		{
		switch(this.deleteMode)
			{
			case "none":
				this.element.style.display = "none";
				break;
			case "all":
				this.element.parentNode.removeChild(this.element);
				break;
			case "children":
				removeChildren(this.element);
				break;
			}
		}
}

Slider.prototype.tick = function()
{
	var f = Animator.slowInSlowOut(this.progress);
	var h = this.realHeight * f;
	this.element.style.height = h + "px";
	this.element.style.opacity = f;
}

// ---------------------------------------------------------------------------------
// Augmented methods for the JavaScript Number(), Array() and String() objects
// ---------------------------------------------------------------------------------

// Clamp a number to a range
Number.prototype.clamp = function(min,max)
{
	c = this;
	if(c < min)
		c = min;
	if(c > max)
		c = max;
	return c;
}

// Find an entry in an array. Returns the array index or null
Array.prototype.find = function(item)
{
	for(var t=0; t<this.length; t++)
		if(this[t] == item)
			return t;
	return null;
}

// Find an entry in an array by the value of one of it's members. Returns the array index or null
Array.prototype.findByMember = function(member,value)
{
	for(var t=0; t<this.length; t++)
		if(this[t][member] == value)
			return t;
	return null;
}

// Get an item in an array by the value of a particular member of the item. Returns the item or null
Array.prototype.get = function(member,value)
{
	for(t=0; t<this.length; t++)
		if(this[t][members] == value)
			return this[t];
	return null;
}

// Push a new value into an array only if it is not already present in the array. If the optional unique parameter is false, it reverts to a normal push
Array.prototype.pushUnique = function(item,unique)
{
	if(unique != undefined && unique == false)
		this.push(item);
	else
		{
		if(this.find(item) == null)
			this.push(item);
		}
}

// Get characters from the right end of a string
String.prototype.right = function(n)
{
	if(n < this.length)
		return this.slice(this.length-n);
	else
		return this;
}

// Trim whitespace from both ends of a string
String.prototype.trim = function()
{
	var regexpTrim = new RegExp("^\\s*(.*?)\\s*$","mg");
	return(this.replace(regexpTrim,"$1"));
}

// Convert a string from a CSS style property name to a JavaScript style name ("background-color" -> "backgroundColor")
String.prototype.unDash = function()
{
	var s = this.split("-");
	if(s.length > 1)
		for(var t=1; t<s.length; t++)
			s[t] = s[t].substr(0,1).toUpperCase() + s[t].substr(1);
	return s.join("");
}

// Substitute substrings from an array into a format string that includes '%1'-type specifiers
String.prototype.format = function(substrings)
{
	var subRegExp = new RegExp("(?:%(\\d+))","mg");
	var currPos = 0;
	var r = [];
	do {
		var match = subRegExp.exec(this);
		if(match && match[1])
			{
			if(match.index > currPos)
				r.push(this.substring(currPos,match.index));
			r.push(substrings[parseInt(match[1])]);
			currPos = subRegExp.lastIndex;
			}
	} while(match);
	if(currPos < this.length)
		r.push(this.substring(currPos,this.length));
	return r.join("");
}

// Escape any special RegExp characters with that character preceded by a backslash
String.prototype.escapeRegExp = function()
{
	return(this.replace(new RegExp("[\\\\\\^\\$\\*\\+\\?\\(\\)\\=\\!\\|\\,\\{\\}\\[\\]\\.]","g"),"\\$&"));
}

// Convert & to "&amp;", < to "&lt;", > to "&gt;" and " to "&quot;"
String.prototype.htmlEncode = function()
{
	var regexpAmp = new RegExp("&","mg");
	var regexpLessThan = new RegExp("<","mg");
	var regexpGreaterThan = new RegExp(">","mg");
	var regexpQuote = new RegExp("\"","mg");
	return(this.replace(regexpAmp,"&amp;").replace(regexpLessThan,"&lt;").replace(regexpGreaterThan,"&gt;").replace(regexpQuote,"&quot;"));
}

// Process a string list of macro parameters into an array. Parameters can be quoted with "", '', [[]] or left unquoted (and therefore space-separated)
String.prototype.readMacroParams = function()
{
	var regexpMacroParam = new RegExp("(?:\\s*)(?:(?:\"([^\"]*)\")|(?:'([^']*)')|(?:\\[\\[([^\\]]*)\\]\\])|([^\"'\\s]\\S*))","mg");
	var params = [];
	do {
		var match = regexpMacroParam.exec(this);
		if(match)
			{
			if(match[1]) // Double quoted
				params.push(match[1]);
			else if(match[2]) // Single quoted
				params.push(match[2]);
			else if(match[3]) // Double-square-bracket quoted
				params.push(match[3]);
			else if(match[4]) // Unquoted
				params.push(match[4]);
			}
	} while(match);
	return params;
}

// Process a string list of tiddler names into an array. Tiddler names that have spaces in them must be [[bracketed]]
String.prototype.readBracketedList = function(unique)
{
	var bracketedPattern = "\\[\\[([^\\]]+)\\]\\]";
	var unbracketedPattern = "[^\\s$]+";
	var pattern = "(?:" + bracketedPattern + ")|(" + unbracketedPattern + ")";
	var re = new RegExp(pattern,"mg");
	var tiddlerNames = [];
	do {
		var match = re.exec(this);
		if(match)
			{
			if(match[1]) // Bracketed
				tiddlerNames.pushUnique(match[1],unique);
			else if(match[2]) // Unbracketed
				tiddlerNames.pushUnique(match[2],unique);
			}
	} while(match);
	return(tiddlerNames);
}

// Static method to bracket a string with double square brackets if it contains a space
String.encodeTiddlyLink = function(title)
{
	if(title.indexOf(" ") == -1)
		return(title);
	else
		return("[[" + title + "]]");
}

// Static method to left-pad a string with 0s to a certain width
String.zeroPad = function(n,d)
{
	var s = n.toString();
	if(s.length < d)
		s = "000000000000000000000000000".substr(0,d-s.length) + s;
	return(s);
}

// ---------------------------------------------------------------------------------
// RGB colour object
// ---------------------------------------------------------------------------------

// Construct an RGB colour object from a '#rrggbb' or 'rgb(n,n,n)' string or from separate r,g,b values
function RGB(r,g,b)
{
	this.r = 0;
	this.g = 0;
	this.b = 0;
	if(typeof r == "string")
		{
		if(r.substr(0,1) == "#")
			{
			this.r = parseInt(r.substr(1,2),16)/255;
			this.g = parseInt(r.substr(3,2),16)/255;
			this.b = parseInt(r.substr(5,2),16)/255;
			}
		else
			{
			var rgbPattern = /rgb\s*\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)/ ;
			var c = r.match(rgbPattern);
			if (c)
				{
				this.r = parseInt(c[1],10)/255;
				this.g = parseInt(c[2],10)/255;
				this.b = parseInt(c[3],10)/255;
				}
			}
		}
	else
		{
		this.r = r;
		this.g = g;
		this.b = b;
		}
	return this;
}

// Mixes this colour with another in a specified proportion
// c = other colour to mix
// f = 0..1 where 0 is this colour and 1 is the new colour
// Returns an RGB object
RGB.prototype.mix = function(c,f)
{
	return new RGB(this.r + (c.r-this.r) * f,this.g + (c.g-this.g) * f,this.b + (c.b-this.b) * f);
}

// Return an rgb colour as a #rrggbb format hex string
RGB.prototype.toString = function()
{
	var r = this.r.clamp(0,1);
	var g = this.g.clamp(0,1);
	var b = this.b.clamp(0,1);
	return("#" + ("0" + Math.floor(r * 255).toString(16)).right(2) +
				 ("0" + Math.floor(g * 255).toString(16)).right(2) +
				 ("0" + Math.floor(b * 255).toString(16)).right(2));
}

// ---------------------------------------------------------------------------------
// Augmented methods for the JavaScript Date() object
// ---------------------------------------------------------------------------------

// Substitute date components into a string
Date.prototype.formatString = function(template)
{
	template = template.replace(/YYYY/g,this.getFullYear());
	template = template.replace(/YY/g,String.zeroPad(this.getFullYear()-2000,2));
	template = template.replace(/MMM/g,config.messages.dates.months[this.getMonth()]);
	template = template.replace(/0MM/g,String.zeroPad(this.getMonth()+1,2));
	template = template.replace(/MM/g,this.getMonth()+1);
	template = template.replace(/DDD/g,config.messages.dates.days[this.getDay()]);
	template = template.replace(/0DD/g,String.zeroPad(this.getDate(),2));
	template = template.replace(/DD/g,this.getDate());
	template = template.replace(/hh/g,this.getHours());
	template = template.replace(/mm/g,this.getMinutes());
	template = template.replace(/ss/g,this.getSeconds());
	return template;
}

// Convert a date to UTC YYYYMMDDHHMM string format
Date.prototype.convertToYYYYMMDDHHMM = function()
{
	return(String.zeroPad(this.getFullYear(),4) + String.zeroPad(this.getMonth()+1,2) + String.zeroPad(this.getDate(),2) + String.zeroPad(this.getHours(),2) + String.zeroPad(this.getMinutes(),2));
}

// Convert a date to UTC YYYYMMDD.HHMMSSMMM string format
Date.prototype.convertToYYYYMMDDHHMMSSMMM = function()
{
	return(String.zeroPad(this.getFullYear(),4) + String.zeroPad(this.getMonth()+1,2) + String.zeroPad(this.getDate(),2) + "." + String.zeroPad(this.getHours(),2) + String.zeroPad(this.getMinutes(),2) + String.zeroPad(this.getSeconds(),2) + String.zeroPad(this.getMilliseconds(),4));
}

// Static method to create a date from a UTC YYYYMMDDHHMM format string
Date.convertFromYYYYMMDDHHMM = function(d)
{
	var theDate = new Date(parseInt(d.substr(0,4),10),
							parseInt(d.substr(4,2),10)-1,
							parseInt(d.substr(6,2),10),
							parseInt(d.substr(8,2),10),
							parseInt(d.substr(10,2),10),0,0);
	return(theDate);
}

// ---------------------------------------------------------------------------------
// DOM utilities - many derived from www.quirksmode.org 
// ---------------------------------------------------------------------------------

function drawGradient(place,horiz,colours)
{
	for(var t=0; t<= 100; t+=2)
		{
		var bar = document.createElement("div");
		place.appendChild(bar);
		bar.style.position = "absolute";
		bar.style.left = horiz ? t + "%" : 0;
		bar.style.top = horiz ? 0 : t + "%";
		bar.style.width = horiz ? (101-t) + "%" : "100%";
		bar.style.height = horiz ? "100%" : (101-t) + "%";
		bar.style.zIndex = -1;
		var f = t/100;
		var p = f*(colours.length-1);
		bar.style.backgroundColor = colours[Math.floor(p)].mix(colours[Math.ceil(p)],p-Math.floor(p)).toString();
		}
}

function createTiddlyText(theParent,theText)
{
	return theParent.appendChild(document.createTextNode(theText));
}

function createTiddlyElement(theParent,theElement,theID,theClass,theText)
{
	var e = document.createElement(theElement);
	if(theClass != null)
		e.className = theClass;
	if(theID != null)
		e.setAttribute("id",theID);
	if(theText != null)
		e.appendChild(document.createTextNode(theText));
	if(theParent != null)
		theParent.appendChild(e);
	return(e);
}

function createTiddlyButton(theParent,theText,theTooltip,theAction,theClass,theId,theAccessKey)
{
	var theButton = document.createElement("a");
	theButton.className = "button";
	if(theAction)
		{
		theButton.onclick = theAction;
		theButton.setAttribute("href","#");
		}
	theButton.setAttribute("title",theTooltip);
	if(theText)
		theButton.appendChild(document.createTextNode(theText));
	if(theClass)
		theButton.className = theClass;
	if(theId)
		theButton.id = theId;
	if(theParent)
		theParent.appendChild(theButton);
	if(theAccessKey)
		theButton.setAttribute("accessKey",theAccessKey);
	return(theButton);
}

function createTiddlyLink(place,title,includeText)
{
	var text = includeText ? title : null;
	var subTitle, theClass;
	if(store.tiddlerExists(title))
		{
		subTitle = store.tiddlers[title].getSubtitle();
		theClass = "tiddlyLinkExisting tiddlyLink";
		}
	else
		{
		subTitle = config.messages.undefinedTiddlerToolTip.format([title]);
		theClass = "tiddlyLinkNonExisting tiddlyLink";
		}
	var btn = createTiddlyButton(place,text,subTitle,onClickTiddlerLink,theClass);
	btn.setAttribute("tiddlyLink",title);
	return(btn);
}

function createExternalLink(place,url)
{
	var theLink = document.createElement("a");
	theLink.className = "externalLink";
	theLink.href = url;
	theLink.title = config.messages.externalLinkTooltip.format([url]);
	if(config.options.chkOpenInNewWindow)
		theLink.target = "_blank";
	place.appendChild(theLink);
	return(theLink);
}

// Cross-browser event handler attachment
function addEvent(element,type,fn)
{
	if (element.addEventListener)
		{
		element.addEventListener(type,fn,false);
		return true;
		}
	else if (element.attachEvent)
		{
		var r = element.attachEvent("on" + type,fn);
		return r;
		}
	else
		return false;
}

// Cross-browser event handler removal
function removeEvent(element,type,fn)
{
	if (element.removeEventListener)
		{
		element.removeEventListener(type,fn,false);
		return true;
		}
	else if (element.detachEvent)
		{
		var r = element.detachEvent("on" + type,fn);
		return r;
		}
	else
		return false;
}

// Find the tiddler instance (if any) containing a specified element
function findContainingTiddler(e)
{
	if(e == null)
		return(null);
	do {
		if(e != document)
			{
			if(e.id)
				if(e.id.substr(0,7) == "tiddler")
					return(e);
			}
		e = e.parentNode;
	} while(e != document);
	return(null);
}

// Resolve the target object of an event
function resolveTarget(e)
{
	var obj;
	if (e.target)
		obj = e.target;
	else if (e.srcElement)
		obj = e.srcElement;
	if (obj.nodeType == 3) // defeat Safari bug
		obj = obj.parentNode;
	return(obj);
}

// Return the content of an element as plain text with no formatting
function getElementText(elementID)
{
	var e = document.getElementById(elementID);
	var text = "";
	if(e.innerText)
		text = e.innerText;
	else if(e.textContent)
		text = e.textContent;
	return text;
}

// Get the scroll position for window.scrollTo necessary to scroll a given element into view
function ensureVisible(e)
{
	var posTop = findPosY(e);
	var posBot = posTop + e.offsetHeight;
	var winTop = findScrollY();
	var winHeight = findWindowHeight();
	var winBot = winTop + winHeight;
	if(posTop < winTop)
		return(posTop);
	else if(posBot > winBot)
		{
		if(e.offsetHeight < winHeight)
			return(posTop - (winHeight - e.offsetHeight));
		else
			return(posTop);
		}
	else
		return(winTop);
}

// Get the current height of the display window
function findWindowHeight()
{
	return(window.innerHeight ? window.innerHeight : document.body.clientHeight);
}

// Get the current vertical page scroll position
function findScrollY()
{
	return(window.scrollY ? window.scrollY : document.body.scrollTop);
}

function findPosX(obj)
{
	var curleft = 0;
	while (obj.offsetParent)
		{
		curleft += obj.offsetLeft;
		obj = obj.offsetParent;
		}
	return curleft;
}

function findPosY(obj)
{
	var curtop = 0;
	while (obj.offsetParent)
		{
		curtop += obj.offsetTop;
		obj = obj.offsetParent;
		}
	return curtop;
}

// Create a non-breaking space
function insertSpacer(place)
{
	var e = document.createTextNode(String.fromCharCode(160));
	if(place)
		place.appendChild(e);
	return e;
}

// Remove all children of a node
function removeChildren(e)
{
	while(e.hasChildNodes())
		e.removeChild(e.firstChild);
}

// Add a stylesheet, replacing any previous custom stylesheet
function setStylesheet(s,id)
{
	if(!id)
		id = "customStyleSheet";
	var n = document.getElementById(id);
	if(document.createStyleSheet) // Test for IE's non-standard createStyleSheet method
		{
		if(n)
			n.parentNode.removeChild(n);
		// This failed without the &nbsp;
		document.body.insertAdjacentHTML("beforeEnd","&nbsp;<style id='" + id + "'>" + s + "</style>");
		}
	else
		{
		if(n)
			n.replaceChild(document.createTextNode(s),n.firstChild);
		else
			{
			var n = document.createElement("style");
			n.type = "text/css";
			n.id = id;
			n.appendChild(document.createTextNode(s));
			document.getElementsByTagName("head")[0].appendChild(n);
			}
		}
}

// ---------------------------------------------------------------------------------
// End of scripts
// ---------------------------------------------------------------------------------
