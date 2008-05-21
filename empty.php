<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8" >
<title><?=$wiki?></title>
<link rel="alternate" type="application/rss+xml" title="RSS" href="<?=$rssUrl?>"/>
<script type="text/javascript" src="prototype.js"></script>
<script type="text/javascript" src="javascript.js"></script>
<style type="text/css">
@import '<?=$stylesheet?>';
</style>
<noscript>
<style type="text/css">
@import 'noscript.css';
<style>
</noscript>
</head>
<body onload="main();" onunload="if(checkUnsavedChanges) checkUnsavedChanges();">
   <div id="copyright">Copyright 2005 CIS Datasystems</div>
   <noscript>
      <div id="javascriptWarning">This page requires JavaScript to function properly</div>
   </noscript>
   <div id="saveTest"></div>
   <div id="contentWrapper">
      <div id="header">
         <div id="titleLine">
            <span id="siteTitle"></span>
            <span id="siteSubtitle"></span>
         </div>
      </div>
      <div id="sidebar">
         <div id="sidebarOptions"></div>
         <div id="sidebarTabs"></div>
      </div>
      <div id="mainMenu"></div>
      <div id="displayArea">
      <div id="messageArea"></div>
      <div id="tiddlerDisplay"></div>
      </div>
   </div>
<div id="storeArea">
<div tiddler="DefaultTiddlers" modified="200510031529" modifier="JonBardin" tags="systemTiddlers"></div>
<div tiddler="MainMenu" modified="200509272228" modifier="JonBardin" tags="systemTiddlers">&lt;&lt;calendar thismonth&gt;&gt;
MainMenu
UpcomingEvents
&lt;&lt;newTiddler&gt;&gt;</div>
<div tiddler="UpcomingEvents" modified="" modifier="" tags="">&lt;&lt;showReminders leadtime:30 format:&quot;|DIFF|TIDDLER|&quot; &gt;&gt;</div>
<div tiddler="SiteSubtitle" modified="200507121318" modifier="JonBardin" tags="systemTiddlers">Short Project Description</div>
<div tiddler="SiteTitle" modified="200509212109" modifier="JonBardin" tags="systemTiddlers"><?=$wiki?></div>
<div tiddler="SiteUrl" modified="200507121318" modifier="" tags="systemTiddlers"><?=$phpUrl?></div>
</div>
</body>
</html>
