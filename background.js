// background page

var urls2block = [
    "*://*.adfox.ru/*",
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
    "*://*.betweendigital.com/*",
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
    "*://*.scorecardresearch.com/*",
    "*://*.webim.ru/*",
    "*://*.1dmp.io/*",
    "*://*.facebook.net/*",
    "*://*.hhcdn.ru/*",
    "*://*.statad.ru/*",
    "*://*.createjs.com/*",
    "*://*.gfycat.com/*",
    "*://*.embed.ly/*",
    "*://*.nr-data.net/*",
    "*://*.sitelabweb.com/*",
    "*://*.perimeterx.net/*",
    "*://*.fastly.net/*",
    "*://*.rcrsv.io/*",
    "*://*.rutarget.ru/*",
    "*://*.nanosemantics.ru/*",
    "*://*.stripe.com/*",
    "*://*.gravatar.com/*",
    "*://*.optimizely.com/*",
    "*://*.doubleclick.net/*",
    "*://code.jquery.com/*",
    "*://*.gismeteo.ru/*",
    "*://*.googlesyndication.com/*",
    "*://*.teads.tv/*",
    "*://*.rnet.plus/*",
    "*://*.plista.com/*",
    "*://*.newrelic.com/*",
    "*://*.adriver.ru/*",
    "*://*.directadvert.ru/*",
    "*://*.promotools.cc/*",
    "*://*.shopnetic.com/*",
    "*://*.moevideo.biz/*",
    "*://*.pixfuture.com/*",
    "*://*.tns-counter.ru/*",
    "*://*.jsdelivr.net/*",
    "*://*.yieldbird.com/*",
    "*://*.clickiocdn.com/*",
    "*://*.greeentea.ru/*",
    "*://*.aidata.io/*",
    "*://*.rtb.beeline.ru/*",
    "*://ads.adfox.ru/*",
    "*://*.s-onetag.com/*",
    "*://an.yandex.ru/*",
    "*://*.googleadservices.com/*",
    "*://*.fbsbx.com/*",
    "*://*.wi-fi.ru/*",
    "*://adclick.g.doubleclick.net/*",
    "*://ads.adfox.ru/*",
    // "*://*./*",
    // "*://*./*",
    // "*://*./*",
    // "*://*./*",
    // "*://*./*",
    // "*://fonts.gstatic.com/*",
    // "*://*.yandex.net/*",
    // "*://an.yandex.ru/*",
    // "*://mc.yandex.ru/*",
    // "*://*.amazonaws.com/*", need 4 upwork
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
