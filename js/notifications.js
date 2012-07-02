(function (W, D) {
    var icon = "http://a0.twimg.com/profile_images/1994940957/gklst_final_green_raw_face_grey.png",
    notifications = [],
    timeout       = 2000,
    key_cards     = "number_of_cards",
    key_contribs  = "number_of_contributions",
    key_creds     = "number_of_creds",
    key_highfives = "number_of_highfives",
    key_links     = "number_of_links",
    key_pings     = "number_of_pings",
    key_relinks   = "number_of_relinks_received",
    $;

  function createNotification (image, header, content){
    return webkitNotifications.createNotification(
              image,  // icon url - can be relative
              header,  // notification title
              content // notification body text
            );
  }

  function showNotification(header, content){

    notification = createNotification(icon, header, content);
    notification.show()
    notifications.push(notification);

  }

  function hideOldestNotification(){
    notification = notifications.reverse().pop();
    notification.cancel();
    notifications.reverse();
  }


  function buildContent(text){

    $("<p>").html(text).insertAfter(
      "<script>window.setTimeout(function(){ window.close() },"+timeout+");</script>"    
    )
  }

  function updateInfo(){
    //TODO move to options
    username = "stefanhoth";
    url = "http://geekli.st/users/"+username+".json";

    $.getJSON(url, handleData);
  }

  function handleData(data){

    Log.d("data",data);

    if( typeof data == "undefined" || typeof data.stats == "undefined"){
      Log.e("handleData","No data received");
      return;
    }

    Log.d("^5s",data.stats[key_highfives]);
    Log.d("Creds",data.stats[key_creds]);
    Log.d("Pings",data.stats[key_pings]);
    Log.d("Relinks",data.stats[key_relinks]);
  }

  function main (jQuery) {
    $ = jQuery

    updateInfo();
  }

  main(jQuery)

})(window, document)
