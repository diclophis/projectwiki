<?php

/* JonBardin */

header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
header("Expires: Mon, 26 Jul 1997 05:00:00 GMT"); // Date in the past

$wiki_path_info = $_SERVER['REQUEST_URI'];
$wiki = basename(str_replace("wikis", "", $wiki_path_info));
$wiki = str_replace("..", "", $wiki);
if (isset($_REQUEST['wiki'])) {
  die(header('Location: /'.$_REQUEST['wiki']));
}

$stylesheet = (isset($_REQUEST['stylesheet']) ? $_REQUEST['stylesheet'] : 'style.css');
$projectWikiUrl = 'http://projectwiki.risingcode.com/';
$rssUrl = $projectWikiUrl.'wikis/'.$wiki.'/rss.xml';

if (strlen($wiki)) {
   if (is_dir('wikis/'.$wiki)) {
      echo (file_get_contents('wikis/'.$wiki.'/index.html'));
   } else {
      include('empty.php');
   }
} else {
   echo '<html><head><title>ProjectWiki Index</title></head>';
   echo '<body>';
   echo '<div><form action="'.$projectWikiUrl.'" method=GET><input type="text" name="wiki" value="NewWiki"/>';
   echo '<input type="submit" value="Create"/>';
   echo '</div>';
   echo '<h1>Active ProjectWikis</h1>';
   $d = dir("wikis");
   while (false !== ($entry = $d->read())) {
      if ($entry != '.' && $entry != '..') {
         echo '<a href="'.$entry.'">'.$entry.'</a><br/>';
         if (is_file('wikis/'.$entry.'/rss.xml')) {
            echo '<div class="projectwiki">';
            $p = xml_parser_create();
            xml_parse_into_struct($p, file_get_contents('wikis/'.$entry.'/rss.xml'), $vals, $index);
            xml_parser_free($p);
            echo '<p class="projectwikidesc">'.$projectWikiDesc = ($vals[$index['DESCRIPTION'][0]]['value']).'</p>';
            echo '<p>Last Updated Tiddler ';
            echo '<a href="'.($projectWikiLink = $entry.($vals[$index['LINK'][0]]['value'])).'">';
            echo $latestTiddlerTitle = ($vals[$index['TITLE'][1]]['value']);
            echo '</a></p>';
            echo '</div>';
         }
      }
   }
   $d->close();
}

?>
