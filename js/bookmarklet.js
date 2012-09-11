(function(W, D){
	document.addEventListener('DOMContentLoaded', function(){
		chrome.tabs.getSelected(null,function(tab){
			document.body.innerHTML += '<iframe src="https://geekli.st/link/modal/?url='+escape(tab.url)+'&title='+escape(tab.title)+'" scrolling="no">Please Enable iFrames.</iframe>'
			try {
				document.getElementsByTagName('iframe')[0].addEventListener('load', function(){
					document.body.addEventListener("webkitTransitionEnd", function(){
						document.getElementsByTagName('iframe')[0].className += " loaded"
					}, false)
					document.getElementsByTagName('img')[0].style.display = "none"
					document.body.className += " loaded"
				})
			} catch(e){}
			document.getElementsByTagName('a')[0].addEventListener('click', function(){
				window.close()
			})
		})
	})
})(window, document)