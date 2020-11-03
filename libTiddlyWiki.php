<?php

/**
* TiddlyWiki file class
*
* This class is used to manage TiddlyWiki files
*
* @version 0.0.1
* @author Jon Bardin <diclophis@gmail.com>
*/

class TiddlyWiki {
    /**
    * Cache object Id.
    *
    * @var string cacheObjectId
    * @access private
    */
    var $cacheObjectId;

    /**
    * Cache object timeout.
    *
    * @var integer [$timeout] timeout
    * @access private
    */
    var $timeout;

    /**
    * Cache file path root
    *
    * @var string cacheObjectBasePath
    */
    var $cacheObjectBasePath = '/var/www/html/wikis';

    var $new = FALSE;

    /**
    * Constructor
    *
    * Sets cache object path
    *
    * @param string cacheObjectId
    * @param integer timeout
    * @return boolean
    * @access public
    */
    function TiddlyWiki ($cacheObjectId, $timeout = 0, $objectDir = NULL)
    {
       if (strlen($objectDir)) {
          if (!is_dir($this->cacheObjectBasePath.'/'.$objectDir)) {
             mkdir($this->cacheObjectBasePath.'/'.$objectDir);
             $this->new = TRUE;
          }
       }

       $this->cacheObjectId = $this->cacheObjectBasePath.'/'.$objectDir.'/'.($cacheObjectId);
       $this->timeout = $timeout;
    }

    /**
    * Write cache object.
    *
    * Writes a cache object with passed contents
    *
    * @param string contents
    * @return boolean
    * @access private
    */
    function writeCacheObject ($contents)
    {
       $fp = fopen ($this->cacheObjectId, 'w');
       if ($fp != FALSE) {
           if (fputs ($fp, $contents)) {
               fclose($fp);
               $return = TRUE;
           } else {
               $return = FALSE;
           }
       } else {
           $return = FALSE;
       }

       return $return;
    }

    /**
    * Updates cache object.
    *
    * Updates a cache object with passed contents
    *
    * @param string contents
    * @return string contents
    * @access public
    */
    function updateCacheObject ($contents)
    {
       $return = FALSE;
       if ($this->cacheObjectExists()) {
          if (!$this->cacheObjectLocked()) {
             //if object exists lock it
             if ($this->lockCacheObject()) {
                if ($this->writeCacheObject($contents)) {
                   if ($this->unlockCacheObject()) {
                      $return = TRUE;
                   }
                }
             }
             $return = $contents;
          } else {
             $return = $this->loadLockedObject();
          }
       } else {
          $return = $this->writeCacheObject($contents);
       }

       return $return;
    }

    /**
    * Load cache object.
    *
    * Loads cache object and returns its contents
    *
    * @return string contents
    * @access public
    */
    function loadCacheObject ()
    {
       if (!$this->cacheObjectLocked()) {
          $return = $this->cacheObjectContents($this->cacheObjectId);
       } else {
          $return = $this->loadLockedObject();
       }

       return $return;
    }

    /**
    * Delete cache object.
    *
    * Deletes a cache object
    *
    * @return boolean
    * @access private
    */
    function deleteCacheObject ()
    {
       if (!$this->cacheObjectLocked() && is_file($this->cacheObjectId)) {
          if (unlink($this->cacheObjectId)) {
             $return = TRUE;
          } else {
             $return = FALSE;
          }
       } else {
          $return = TRUE;
       }

       return $return;
    }

    /**
    * Lock cache object.
    *
    * Locks a cache object for updating
    *
    * @return boolean
    * @access private
    */
    function lockCacheObject ()
    {
       return copy($this->cacheObjectId, $this->cacheObjectId.'.lock');
    }

    /**
    * Unlock cache object.
    *
    * Unlocks a cache object for updating
    *
    * @return boolean
    * @access private
    */
    function unlockCacheObject ()
    {
       return unlink($this->cacheObjectId.'.lock');
    }

    /**
    * Check cache object.
    *
    * Checks to see if the cache object exists or not
    *
    * @return boolean
    * @access private
    */
    function cacheObjectExists ()
    {
       return is_file($this->cacheObjectId);
    }

    /**
    * Determines if cache object is locked.
    *
    * Checks to see if the cache object is locked or not
    *
    * @return boolean
    * @access private
    */
    function cacheObjectLocked ()
    {
       return is_file($this->cacheObjectId.'.lock');
    }

    /**
    * Cached object has timed out.
    *
    * Checks to see if the cache object has expired or not
    *
    * @return boolean
    * @access public
    */
    function cacheObjectTimedOut ()
    {
       if ($this->cacheObjectExists()) {
          if (time() - filemtime($this->cacheObjectId) > $this->timeout) {
             $return = TRUE;
          } else {
             $return = FALSE;
          }
       } else {
          $return = TRUE;
       }

       return $return;
    }

    /**
    * Load locked cache object.
    *
    * Loads a locked cache object and returns its contents
    *
    * @return string
    * @access public
    */
    function loadLockedObject()
    {
        return $this->cacheObjectContents($this->cacheObjectId.'.lock');
    }

    /**
    * Cache object contents.
    *
    * Loads a file and returns its contents
    *
    * @param string filename
    * @return string
    * @access private
    */
    function cacheObjectContents ($filename)
    {
        $fd = fopen ($filename, "r");
        if ($fd != FALSE) {
           $contents = fread ($fd, filesize ($filename));
           fclose ($fd);
           $return = $contents;
        } else {
           $return = FALSE;
        }

        return $return;
    }
}

?>
