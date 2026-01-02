'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"AndroidIcon.png": "1bdb947b90a333101390ef0f40896062",
"flutter_bootstrap.js": "6911e4c54200bd690de191e8b8006176",
"version.json": "792bbf5955a0e75ea1190eb80023b799",
"splash/img/light-background.png": "62a55a8af739fa259578ac29570c8a36",
"index.html": "0df7349baec155c4583e52dc48009912",
"/": "0df7349baec155c4583e52dc48009912",
"main.dart.js": "002b50ed8f91025a6180ceb499bab20f",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "dffbd6d09b4a7c810f01d819d3f4552a",
"social_share.jpg": "d5a3013994415a2cf5fea70104abb6fe",
"icons/Icon-192.png": "0862bacd77bd609605158f2780669790",
"icons/Icon-maskable-192.png": "0862bacd77bd609605158f2780669790",
"icons/app_launcher_icon.png": "1bdb947b90a333101390ef0f40896062",
"icons/Icon-maskable-512.png": "6306c8b9de073df1e27f40bf3f63b52e",
"icons/Icon-512.png": "6306c8b9de073df1e27f40bf3f63b52e",
"manifest.json": "659eb884f438aa4839fa59914a0d5d82",
"assets/AssetManifest.json": "210de9d0b41b378226927093b2585b90",
"assets/NOTICES": "9fbde7b63df3eaf3e3ea58a1b15beadd",
"assets/FontManifest.json": "cc5029d347a1dfcf239bd3655cc99ee2",
"assets/AssetManifest.bin.json": "9ad9d5163ac1c27c369b4629bcbb9ee0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0e58078b7dccd28f3d427062ba555942",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "1d3264a72b0c14ad17f7928bcc620286",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d4b76708f9684f8780eb79fff57a162d",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "dec95959ffd7e862e1dd60b4a44ff063",
"assets/fonts/MaterialIcons-Regular.otf": "d72becebe148c9105a6e29cc96ef3505",
"assets/assets/audios/ringYellow.mp3": "c8b29711fbda9b81d208fde31d8e1626",
"assets/assets/audios/magicFinish.mp3": "a99081fb1fb2a2e93c74c0d30e120b6f",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/audios/bell.mp3": "01a94562605f9fe39b68c866728ee6a5",
"assets/assets/jsons/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/background4.png": "e4cd70414c707dbf0229f0e4e63b532b",
"assets/assets/images/specialistIcon.svg": "4f92ddb919d577122245116cb5c4def5",
"assets/assets/images/laurel_left.svg": "b1eb5bbd2555b8e9cd902252beaf5a36",
"assets/assets/images/background5.png": "e59e6f84436fb26c60a629c97de87827",
"assets/assets/images/man_image.svg": "c6f2c7437e21081762ddc13200bb8a50",
"assets/assets/images/background2.png": "5ef12bea81218efcb9bbf19c949dc67f",
"assets/assets/images/background3.png": "5a7416664256b20dda1ed4c2be19cee7",
"assets/assets/images/background1.png": "0d879aa3cf13f2ed0cb063cba371e948",
"assets/assets/images/ar_icon.svg": "c5af55470d7b02a36f3a0428b01bfe80",
"assets/assets/images/background0.png": "952498b5b629ee9bbdbebc1eef931432",
"assets/assets/images/mac_cards_image.svg": "5b6ea3d4f98274334a4fbc701d58ba22",
"assets/assets/images/title_ru.svg": "5980ab679059646c3f986cb2725e54c3",
"assets/assets/images/adaptive_foreground_icon.png": "1bdb947b90a333101390ef0f40896062",
"assets/assets/images/colored_frame.png": "993c1554aa7add9076bf6aedea428494",
"assets/assets/images/star_image_shadow.png": "35d0fbf8e30ec869e0e74f531f83de93",
"assets/assets/images/assistantAvatar@2x.png": "c29a10c255d088c04895276d231f1e89",
"assets/assets/images/star_image.svg": "b1b36c0abdb98085d0a31ed09555b15b",
"assets/assets/images/app_launcher_icon.png": "1bdb947b90a333101390ef0f40896062",
"assets/assets/images/background.jpg": "e702d61ce6f65ba6ff7bcb0845c4abc9",
"assets/assets/images/yin_yang.svg": "4d733712e8408ab652eb1bff773aada4",
"assets/assets/images/title_en.svg": "8e0d99437f7906de1276784af3a216f8",
"assets/assets/images/splash.jpg": "6311ac0ca7d49c1cd9e50fd8c80f87bb",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/social_share.jpg": "d5a3013994415a2cf5fea70104abb6fe",
"assets/assets/images/whoman_image.svg": "7a855ce07dabd9461ea5210d08c6ffb1",
"assets/assets/images/google.svg": "edd0e34f60d7ca4a2f4ece79cff21ae3",
"assets/assets/images/texturedBackground.jpg": "03cd8a7db1e77642a37aa4edf8e734e9",
"assets/assets/images/dailyCardDF.jpg": "65999cab7e9afd124109f2d143980e50",
"assets/assets/images/metacardsDF.png": "c850def1e3e24f27707e8382d8c17687",
"assets/assets/images/metacardsDF.jpg": "df82e595ee7a5db001b2e2cceee0f919",
"assets/assets/images/flower.svg": "84096ed3e0cc0605cb4b3bd0214d34f6",
"assets/assets/images/star.png": "6a105c9b39f9e1283f2fdc670aec705b",
"assets/assets/images/noteIconSlash.svg": "2d888e27efa49b400bf675ea94e6342a",
"assets/assets/images/laurel_right.svg": "cc0265a23a19ade0a20e93592892fbb0",
"assets/assets/images/butterflyFilled.svg": "4006bb14ba1a62010f661d9ad9888d39",
"assets/assets/images/noteIcon.svg": "fcfff670a4876374192eea589068dd4c",
"assets/assets/images/error_image.jpg": "2ea101c59d77d6ff6f38b145c61516db",
"assets/assets/arcore/mac_df1_targets.imgdb": "92c4f4a11ac86b7392790640d8beb097",
"assets/assets/arcore/shaman_night_targets.imgdb": "2074383f51fee3f6040433a695502812",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/Roboto-Medium.ttf": "68ea4734cf86bd544650aee05137d7bb",
"assets/assets/fonts/star.ttf": "baf1b7ee44aba30efcec5397e6130528",
"assets/assets/fonts/Montserrat-Medium.ttf": "b3ba703c591edd4aad57f8f4561a287b",
"assets/assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/fonts/cards.ttf": "47f303c08734548b45e7029465734f06",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/Montserrat-Regular.ttf": "3fe868a1a9930b59d94d2c1d79461e3c",
"assets/assets/environment_values/environment.json": "ad14dbd643d1c1da85f743374f4f09be",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
