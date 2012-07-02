(function (W, D) {
    var longDelay = 750
      , shortDelay = 500
      , frame = 'gklst-frame'
      , loading = 'gklst-loading'
      , style = 'gklst-style'
      , host = 'http://geekli.st/'
      , relink = W.context && W.context.link ? context.link.slug : false
      , $

  function createFrame () {
  
    chrome.tabs.getSelected(null,function(tab) {
      //console.log(tab);

      var query = 'url='+escape(tab.url)
        , img = $('img')[0]
      if (img && img.src) {
        query += '&img='+escape(img.src)
      }
      if (relink) {
        query += '&relink='+relink
      }
      query += '&title='+escape(tab.title)
      $('#'+frame).append(
          $("<iframe/>")
            .css("display","none")
            .attr("src",host+"link/modal/?"+query)
            .html("Please Enable iFrames.")
            .load(function(){
              var F = jQuery('#'+frame);
              F.find('.'+loading).hide();
              F.animate({height:525}, shortDelay,function(){F.find('iframe').fadeIn()})
            })
          );
    });

    
  }

  function destroyFrame () {
    window.close()
  }

  function main (jQuery) {
    $ = jQuery

    $(document).ready(function(){ 
      createFrame(); 
      $('#'+frame+' .close').click(destroyFrame)
    });

  }

  main(jQuery)

})(window, document)
