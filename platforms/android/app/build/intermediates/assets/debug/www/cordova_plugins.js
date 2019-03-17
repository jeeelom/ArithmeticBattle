cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "kr.co.joycorp.cordova.exitapp.exitApp",
    "file": "plugins/kr.co.joycorp.cordova.exitapp/www/ExitApp.js",
    "pluginId": "kr.co.joycorp.cordova.exitapp",
    "merges": [
      "navigator.app"
    ]
  },
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
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
    "id": "cordova-plugin-inappbrowser.inappbrowser",
    "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
    "pluginId": "cordova-plugin-inappbrowser",
    "clobbers": [
      "cordova.InAppBrowser.open",
      "window.open"
    ]
  },
  {
    "id": "cordova-plugin-httpd.CorHttpd",
    "file": "plugins/cordova-plugin-httpd/www/CorHttpd.js",
    "pluginId": "cordova-plugin-httpd",
    "clobbers": [
      "cordova.plugins.CorHttpd"
    ]
  },
  {
    "id": "cordova-plugin-bluetooth-serial.bluetoothSerial",
    "file": "plugins/cordova-plugin-bluetooth-serial/www/bluetoothSerial.js",
    "pluginId": "cordova-plugin-bluetooth-serial",
    "clobbers": [
      "window.bluetoothSerial"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "kr.co.joycorp.cordova.exitapp": "1.0.2",
  "cordova-plugin-device": "2.0.2",
  "cordova-plugin-splashscreen": "5.0.2",
  "cordova-plugin-dialogs": "2.0.1",
  "cordova-plugin-inappbrowser": "3.0.0",
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-httpd": "0.9.3",
  "cordova-plugin-bluetooth-serial": "0.4.7"
};
// BOTTOM OF METADATA
});