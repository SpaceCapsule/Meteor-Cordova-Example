#Meteor and Cordova example
This is a simple test for using Meteor with Cordova / Phonegap

The cordova.js device specific files are put in the `public` folder and loaded using the `lazyLoad` package

*Install it from [https://github.com/raix/Meteor-LazyLoad](https://github.com/raix/Meteor-LazyLoad) and [https://atmosphere.meteor.com/package/LazyLoad](https://atmosphere.meteor.com/package/LazyLoad)*

The Meteor `Cordova` package contains a simple api that is safe to use with/without a device - eg. if Meteor is run through a browser.

Added `appCache` all of this installs at first run and works offline - so no overheat for lazyloading.

The example is running on [cordova.meteor.com](http://cordova.meteor.com/)

Try to create your own cordova app for android or ios - just change the "content" (remoteUrl) = 'http://cordova.meteor.com/?platform=android-2.8.1' or 'http://cordova.meteor.com/?platform=ios-2.8.1'

Yes, it vibrates at every `deviceready` event - this is triggered reactivly in a `Deps.autorun` eg.:

```js
  Deps.autorun(function() {
    if (Cordova.isReady()) {
        Cordova.vibrate(1000);
    }
  });
```

