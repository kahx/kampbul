cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-promise-polyfill.Promise",
    "file": "plugins/cordova-promise-polyfill/www/Promise.js",
    "pluginId": "cordova-promise-polyfill",
    "runs": true
  },
  {
    "id": "cordova-promise-polyfill.promise.min",
    "file": "plugins/cordova-promise-polyfill/www/promise.min.js",
    "pluginId": "cordova-promise-polyfill"
  },
  {
    "id": "cordova-plugin-admob-free.AdMob",
    "file": "plugins/cordova-plugin-admob-free/www/admob.js",
    "pluginId": "cordova-plugin-admob-free",
    "clobbers": [
      "admob",
      "AdMob",
      "plugins.AdMob"
    ]
  },
  {
    "id": "cordova-plugin-dialogs.notification",
    "file": "plugins/cordova-plugin-dialogs/www/notification.js",
    "pluginId": "cordova-plugin-dialogs",
    "merges": [
      "navigator.notification"
    ]
  },
  {
    "id": "cordova-plugin-dialogs.notification_android",
    "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
    "pluginId": "cordova-plugin-dialogs",
    "merges": [
      "navigator.notification"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-admob-sdk": "0.18.0",
  "cordova-promise-polyfill": "0.0.2",
  "cordova-plugin-admob-free": "0.18.0",
  "cordova-plugin-dialogs": "2.0.1",
  "cordova-plugin-splashscreen": "5.0.2",
  "cordova-plugin-whitelist": "1.3.3"
};
// BOTTOM OF METADATA
});