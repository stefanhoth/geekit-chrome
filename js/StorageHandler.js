
//needs Log for well, logging.
if(typeof Log == "undefined"){
  throw "Log is not defined. Please load Log.js before loading this file."
}


function StorageHandler(){
}

/*
saves a json encoded object to the local storage
*/
StorageHandler.saveData = function(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
   if (e == QUOTA_EXCEEDED_ERR) {
     Log.e("StorageHandler saveData", "Insufficient Storage Space, clearing storage and trying again!");
     var localVersion = StorageHandler.loadMD5("appversion");
     Euro2012App.clearStorage();
     StorageHandler.saveMD5("appversion", localVersion);
     StorageHandler.saveData(key, data);
    }
  }
 
}

/*
loads a md5 hash from the local storage
*/
StorageHandler.loadMD5 = function(key) {
  var data = localStorage.getItem(key);
  return data;
}


/*
loads a json encoded object from the local storage
*/
StorageHandler.loadData = function(key) {
  var data = localStorage.getItem(key);
  if (data != undefined){
    return JSON.parse(data);
  }
  return data;
}


/*
deletes an entry from the local storage
*/
StorageHandler.deleteData = function(key){
  localStorage.removeItem(key);
}

StorageHandler.getOptions = function(){
  var options =  StorageHandler.loadData("options");
  if (!options){
    Log.e("StorageHandler.getOptions", "No options available!");
  }

  return options;
}

StorageHandler.saveOptions = function(options){
 StorageHandler.saveData("options", options);
}

StorageHandler.changeOption = function(optionkey, optionvalue){
  var options =  StorageHandler.loadData("options");  
  if (!options){    
    options = new Object();   
  }
 
  options[optionkey] = optionvalue;  
  StorageHandler.saveData("options", options);
}

StorageHandler.hasOptions = function(create){
   var options =  StorageHandler.loadData("options");
   if (!options){
    if (!create){
      return false;
    }else{
       options = new Object();       
       StorageHandler.saveData("options", options);
       return true;
    }
    
   }

   return true;
}

StorageHandler.hasOption = function(key){
   var options =  StorageHandler.getOptions();
   if (!options){
    Log.e("StorageHandler.hasOption", "No options available!");
   }
  
   if (!options || !options[key]){
    return false;
   } 

   return true;
}

StorageHandler.checkForMissingOptions = function(){  
  //check for notifications
  if (!StorageHandler.hasOptions(true) || !StorageHandler.hasOption("showNotifications")){     
    StorageHandler.changeOption("showNotifications", true);
  }
 
}

StorageHandler.getBooleanOption = function(key){
  var options =  StorageHandler.loadData("options");
  if (!options){
    Log.e("StorageHandler.getBooleanOption", "No options available");
    return undefined;
  }

  var option = options[key];
  if (option == undefined){
    Log.e("StorageHandler.getBooleanOption", "Option: "+key+" not available!");
    return false;
  }  

  return option;
}
