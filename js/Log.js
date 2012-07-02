
/**
 * handler for grouping all custom in-app events into one funtion
 */
var Log = {	
  LEVEL_DEBUG: 	100,
  LEVEL_INFO: 	 90,
  LEVEL_NORMAL:  50, 
  LEVEL_ERROR: 	 20,
  LEVEL_OFF: 	  0,

  level: 20
};


/**
  * outputs a message
  * LogLevel = DEBUG++
  */
Log.d = function(label,msg){
    
    if(Log.level >= Log.LEVEL_DEBUG){
    	console.debug("[DEBUG] "+ label +": ", msg);
    }
}

/**
  * outputs a message
  * LogLevel = INFO++
  */
Log.i = function(label,msg){
    
    if(Log.level >= Log.LEVEL_INFO){
    	console.info("[INFO] "+ label +": ", msg);
    }
}

/**
  * outputs a message
  * LogLevel = NORMAL++
  */
Log.l = function(label,msg){
    
    if(Log.level >= Log.LEVEL_NORMAL){
    	console.log("[LOG] "+ label +": ", msg);
    }
}

/**
  * outputs a message
  * LogLevel = ERROR++
  */
Log.e = function(label,msg){
    
    if(Log.level >= Log.LEVEL_ERROR){
    	console.error("[ERROR] "+ label +": ", msg);
    }
}

/**
 * changes the log level
 */
Log.setLevel = function(level){
	Log.level = level;
}
