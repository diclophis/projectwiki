<?php

/* JonBardin */

require('libTiddlyWiki.php');
header('Content-type: text/xml');
$fileUrl = trim(str_replace("http://localhost:8080/", "wiki=", $_REQUEST['fileUrl']));
$wikiInfo = array();
parse_str($fileUrl, $wikiInfo);
$content = (isset($_REQUEST['content']) ? trim($_REQUEST['content']) : NULL);
$file = (isset($wikiInfo['file']) ? $wikiInfo['file'] : 'index.html');
$dir = (isset($wikiInfo['wiki']) ? ($wikiInfo['wiki']) : NULL);
$file = str_replace("..", "", $file);
$dir = str_replace("..", "", $dir);
$cache = new TiddlyWiki($file, 0, $dir);
switch (trim($_REQUEST['state'])) {
   case 'save':
      if ($cache->updateCacheObject(stripslashes($content))) {
         echo '1';
      } else {
         echo 'An Error Has Occured';
      }
   break;
   case 'load':
      if ($cache->new) {
         echo file_get_contents('blank.html');
      } else {
         echo $cache->loadCacheObject();
      }
   break;
}

?>
