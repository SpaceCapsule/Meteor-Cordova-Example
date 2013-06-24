if (Meteor.isClient) {
  LazyLoad.addFile('/cordova-2.8.1/android.js', 'android-2.8.1');
  LazyLoad.addFile('/cordova-2.8.1/ios.js', 'ios-2.8.1');


  Deps.autorun(function() {
    if (Cordova.isReady()) {
        Cordova.vibrate(1000);
    }

  });

  Template.hello.greeting = function () {
    if (Cordova.isReady())
      return "Cordova is now ready";
    else
      return "No Cordova ready";
  };

  Template.hello.events({
    'click .testAlert' : function () {
      Cordova.alert('Cordova is now ready', function() {
        console.log('Back from alert');
      }, 'Test', 'Okay');
    },
    'click .testConfirm' : function () {
      Cordova.confirm('Test', function(i) {
        console.log('Got confirmed: ' + i);
      }, 'Prompt', ['A', 'B', 'C']);
    },
    'click .testPrompt' : function () {
      Cordova.prompt('Test', function(i) {
        console.log('Prompt got ' + i);
      }, 'Prompt', ['Ok','Nope','Maybe'], 'Text');
    }    ,
    'click .testBeep' : function () {
      Cordova.beep(1);
    }
  });

  Meteor.startup(function () {
    // Check the querystring for platform eg. android or ios
    LazyLoad.require(LazyLoad.queryString['platform'], function() {
      console.log('Loaded files for ' + LazyLoad.queryString['platform'] + ' platform');
    });
  });


}

if (Meteor.isServer) {

  Meteor.startup(function () {
    // code to run on server at startup
  });
}
