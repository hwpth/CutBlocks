// background page

var urls2block = [
    "*://ads.adfox.ru/*",
    "*://counter.yadro.ru/*",
    "*://static.criteo.net/*",
    "*://abc.rareru.ru/*",
    "*://ad.mail.ru/*",
    "*://st.top100.ru/*",
    "*://platform.twitter.com/*",
    "*://ajax.googleapis.com/*",
    "*://adservice.google.com/*",
    "*://adservice.google.ru/*",
    "*://*.aliexpress.com/*",
    "*://api.filepicker.io/*",
    "*://*.districtm.ca/*",
    "*://*.districtm.io/*",
    "*://*.cloudfront.net/*",
    "*://*.visualwebsiteoptimizer.com/*",
    "*://*.wp.com/*",
    "*://fonts.gstatic.com/*",
    "*://*.fbsbx.com/*",
    "*://*.gravatar.com/*",
    "*://*.heatmap.it/*",
    "*://*.getsitecontrol.com/*",
    "*://*.cackle.me/*",
    "*://*.webvideomarketing.com/*",
    "*://*.relap.io/*",
    "*://*.marketgid.com/*",
    "*://*.mirs.com/*",
    "*://*.lentainform.com/*",
    "*://*.redtram.com/*",
    "*://*.smi2.ru/*",
    "*://*.smi2.net/*",
    "*://*.news-rating.ru/*",
    "*://*.caltat.com/*",
    "*://*.sendpulse.com/*",
    "*://*.cdnstats.ru/*",
    "*://*.24smi.net/*",
    "*://*.digitaltarget.ru/*",
    "*://*.uptolike.com/*",
    // "*://*./*",
    // "*://*./*",
    // "*://*./*",
    // "*://*./*",
    // "*://*./*",
    // "*://*./*",
    "*://*.doubleclick.net/*"
];

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return {cancel: true}; },
    { urls: urls2block},
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
