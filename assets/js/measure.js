/*global digitalData,YT*/
var digitalData = digitalData || {};
digitalData._log = digitalData._log || [];

var debug = function () {
  if (! window.console || ! console.log) {
    return;
  }
  return Function.prototype.bind.call(console.log, console);
} ();
/**
 * Update the Instance Variable with the new functionality
 * @param measure {function} The original function with page data
 * @param measure.q {Array}
 */
var measure = (function (measure) {
  /**
   * New function to operate the gathered data
   * @method measureInterface
   * @param data {object} Object with data to measure
   */
  var measureInterface = function (data) {
    var digitalDataSnapshot;
    if (typeof data.event !== "undefined") {
      measureInterface._fired = true;
      digitalData = measureInterface._deepMerge(digitalData, data);
      digitalDataSnapshot = JSON.parse(JSON.stringify(digitalData));
      delete digitalDataSnapshot._log;
      debug("Event captured. Available data:");
      debug(JSON.stringify(digitalDataSnapshot, null, 4));
      debug("---------------------------------------------");
      data._timestamp = new Date().getTime();
      digitalData._log.push(data);
      measureInterface._process(data);
    } else {
      throw "Missing Event ID";
    }
  };

  /**
   * Fired flag to fallback to the automatic URL-based measurement
   * @private
   */
  measureInterface._fired = false;

  /**
   * Function to merge objects recursively
   * @param target
   * @param src
   * @returns {boolean|*|Boolean|Array|{}}
   * @private
   */
  measureInterface._deepMerge = function (target, src) {
    var isArray = Array.isArray(src);
    var dst = isArray && src || {};

    if (!isArray) {
      if (target && typeof target === "object") {
        Object.keys(target).forEach(function (key) {
          dst[key] = target[key];
        })
      }
      Object.keys(src).forEach(function (key) {
        if (typeof src[key] !== "object" || !src[key]) {
          dst[key] = src[key];
        }
        else {
          if (!target[key]) {
            dst[key] = src[key];
          } else {
            dst[key] = measureInterface._deepMerge(target[key], src[key]);
          }
        }
      });
    }

    return dst;
  };

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
  measureInterface._process = function (data) {
    switch (data.event) {
    case "pageview":
      // do nothing
      break;
    case "leadFormSent":
    case "loginFormSent":
    case "contactFormSent":
    case "fileDownload":
      // do nothing
      break;
    }
  };
  return measureInterface;
}(measure));
