/*global digitalData,measure*/
var digitalData = digitalData || {};
var measure = measure || function () {};

/**
 * Default measure process function to override
 * @method _process
 * @private
 * @param data {object} Object with data to measure
 * @param data.contact {String}
 * @param data.error {String}
 * @param data.fileNAme {String}
 * @param data.username {String}
 */
measure._process = function (data) {
  switch (data.event) {
  case "pageview":
    if (data.error) {
      //_paq.push(["setCustomDimension", 3, data.server]);
      //_paq.push(["setDocumentTitle",  data.error + "/URL = " +  encodeURIComponent(document.location.pathname + document.location.search) + "/From = " + encodeURIComponent(document.referrer)]);
    }
    //_paq.push(["trackPageView"]);
    break;
  case "leadFormSent":
    //_paq.push(["trackEvent", "Lead Form", "submit", null, null, {dimension2: data.contact}]);
    break;
  case "loginFormSent":
    //_paq.push(["trackEvent", "Login Form", "submit", null, null, {dimension1: data.username}]);
    break;
  case "fileDownload":
    //_paq.push(["trackEvent", "File Download", "click", data.fileName]);
  break;
  }
};

// Piwik Configuration
/*
var _paq = _paq || [];
_paq.push(["setTrackerUrl", "//104.155.112.68/analytics/piwik.php"]);
_paq.push(["setSiteId", 2]);
_paq.push(["setCookieDomain", ".demogram.local"]);
_paq.push(["setDomains", [".demogram.cz", ".demogram.local"]]);
_paq.push(["removeDownloadExtensions", ["pdf", "doc", "docx", "xls", "xlsx"]]);
_paq.push(["enableLinkTracking"]);
(function() {
  var d = document,
    g = d.createElement("script"),
    s = d.getElementsByTagName("script")[0];

  g.type="text/javascript";
  g.async=true;
  g.defer=true;
  g.src="/js/piwik.js";
  s.parentNode.insertBefore(g, s);
})();
*/
