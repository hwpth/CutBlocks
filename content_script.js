// content page

/*
var clickedElement;

document.addEventListener("mousedown", function(event){
  clickedElement = event.target;
}, true);

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        clickedElement.remove();
    }
);

var MOUSE_VISITED_CLASSNAME = 'crx_mouse_over';
var prevDOM = null;

document.addEventListener('mouseover', function (e) {
  var srcElement = e.srcElement;
    if (prevDOM != null) {
      prevDOM.classList.remove(MOUSE_VISITED_CLASSNAME);
    }
    srcElement.classList.add(MOUSE_VISITED_CLASSNAME);
    prevDOM = srcElement;
}, false);
*/