// background page

// on/off

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return {cancel: true}; },
    // { urls: ["*://*.*/"] },
    { urls: ["*://ads.adfox.ru/*",
             //"*://s.ytimg.com/*",
             "*://stats.g.doubleclick.net/*",
             "*://securepubads.g.doubleclick.net/*",
             "*://counter.yadro.ru/*",
             "*://static.criteo.net/*",
             "*://yastatic.net/*",
             "*://abc.rareru.ru/*",
             "*://ad.mail.ru/*",
             "*://st.top100.ru/*",
             "*://platform.twitter.com/*",
             "*://ajax.googleapis.com/*",
             "*://adservice.google.com/*",
             "*://adservice.google.ru/*"
            ]
    },
    ["blocking"]
);

/*
var parent = chrome.contextMenus.create({
  "title": "Remove Element",
  "id": "0",
  "contexts": ["all"]
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  chrome.tabs.sendMessage(tab.id, {});
})
*/

/*
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        console.log(details.requestBody);
    },
    {urls: ["<all_urls>"]},
    ['requestBody']
);

*/
