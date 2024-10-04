

function boot() {
  var settings = {
    platform: "web-mobile",
    groupList: [
      "default"
    ],
    collisionMatrix: [
      [
        true
      ]
    ],
    hasResourcesBundle: false,
    hasStartSceneBundle: false,
    remoteBundles: [],
    subpackages: [],
    launchScene: "db://assets/rank.fire",
    orientation: "",
    debug: true,
    jsList: []
  };
  var onProgress = null;

  var RESOURCES = cc.AssetManager.BuiltinBundleName.RESOURCES;
  var INTERNAL = cc.AssetManager.BuiltinBundleName.INTERNAL;
  var MAIN = cc.AssetManager.BuiltinBundleName.MAIN;
  function setLoadingDisplay() {
    // Loading splash scene
    var splash = document.getElementById('splash');
    var progressBar = splash.querySelector('.progress-bar span');
    onProgress = function (finish, total) {
      var percent = 100 * finish / total;
      if (progressBar) {
        progressBar.style.width = percent.toFixed(2) + '%';
      }
    };
    splash.style.display = 'block';
    progressBar.style.width = '0%';

    cc.director.once(cc.Director.EVENT_AFTER_SCENE_LAUNCH, function () {
      splash.style.display = 'none';
    });
  }

  var onStart = function () {

    cc.view.enableRetina(true);
    cc.view.resizeWithBrowserSize(true);

    if (cc.sys.isBrowser) {
      setLoadingDisplay();
    }

    if (cc.sys.isMobile) {
      if (settings.orientation === 'landscape') {
        cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE);
      }
      else if (settings.orientation === 'portrait') {
        cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);
      }
      cc.view.enableAutoFullScreen([
        cc.sys.BROWSER_TYPE_BAIDU,
        cc.sys.BROWSER_TYPE_BAIDU_APP,
        cc.sys.BROWSER_TYPE_WECHAT,
        cc.sys.BROWSER_TYPE_MOBILE_QQ,
        cc.sys.BROWSER_TYPE_MIUI,
        cc.sys.BROWSER_TYPE_HUAWEI,
        cc.sys.BROWSER_TYPE_UC,
      ].indexOf(cc.sys.browserType) < 0);
    }



    var launchScene = settings.launchScene;
    var bundle = cc.assetManager.bundles.find(function (b) {
      return b.getSceneInfo(launchScene);
    });

    bundle.loadScene(launchScene, null, onProgress,
      function (err, scene) {
        if (!err) {
          cc.director.runSceneImmediate(scene);
          if (cc.sys.isBrowser) {
            // show canvas
            var canvas = document.getElementById('GameCanvas');
            canvas.style.visibility = '';
            var div = document.getElementById('GameDiv');
            if (div) {
              div.style.backgroundImage = '';
            }
            console.log('Success to load scene: ' + launchScene);
          }
        }
      }
    );

  };

  var option = {
    id: 'GameCanvas',
    debugMode: settings.debug ? cc.debug.DebugMode.INFO : cc.debug.DebugMode.ERROR,
    showFPS: settings.debug,
    frameRate: 60,
    groupList: settings.groupList,
    collisionMatrix: settings.collisionMatrix,
  };

  cc.assetManager.init({
    bundleVers: settings.bundleVers,
    remoteBundles: settings.remoteBundles,
    server: settings.server
  });

  var bundleRoot = [INTERNAL];
  settings.hasResourcesBundle && bundleRoot.push(RESOURCES);

  var count = 0;
  function cb(err) {
    if (err) return console.error(err.message, err.stack);
    count++;
    if (count === bundleRoot.length + 1) {
      cc.assetManager.loadBundle(MAIN, function (err) {
        if (!err) cc.game.run(option, onStart);
      });
    }
  }

  cc.assetManager.loadScript(settings.jsList.map(function (x) { return 'src/' + x; }), cb);

  for (var i = 0; i < bundleRoot.length; i++) {
    cc.assetManager.loadBundle(bundleRoot[i], cb);
  }
};