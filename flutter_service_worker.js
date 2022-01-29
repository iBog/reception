'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "69bd98c379804930e69c1f92a22d354d",
"favicon.ico": "ca6614b60d75e4c6f403a9dbd6db960f",
"index.html": "2f7f29884f1a50872bbdfa57c0012b6e",
"/": "2f7f29884f1a50872bbdfa57c0012b6e",
"auth.html": "a8f2fb912857e5abd7c9c6d452a9a902",
"main.dart.js": "2b68a04b7c054d3636067d8ec6d74e6c",
"favicon.png": "a6da41555a89d0c124ceb253cee5e239",
"icons/Icon-192.png": "823ce666f3b566e09f22e18e604d8e8c",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "effd52c9fac25e86930f953038d1d788",
"manifest.json": "5caaef917546522bc03194ed31e3427f",
"assets/AssetManifest.json": "30773f43a2fce8b20c44e958d86019f9",
"assets/NOTICES": "c0a4c7d249c333a39275de9aa7446fe0",
"assets/FontManifest.json": "03f6e2bebc0f5535cb141a784ac7faf1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/reception_icon_round.png": "ae9385dc3ccf76d51ec24d581a7aa30e",
"assets/assets/images/team.png": "aeb1d16a187af51282a8db30bfd082e2",
"assets/assets/images/flutter_logo.png": "478970b138ad955405d4efda115125bf",
"assets/assets/images/client_man.png": "9aaa421038546265695422b310a49dc2",
"assets/assets/images/group_logo.png": "eddd03e8b94fcc2d07bc664c3be1c4fd",
"assets/assets/images/employee_man.png": "02adadc76a0d1dd205c35cfcc789bd0f",
"assets/assets/images/apple_logo.png": "a0c594e061f2b474a9b17127efd4684b",
"assets/assets/images/client_woman.png": "8baa66a321c2c857351dae5860149bf5",
"assets/assets/images/noavatar.jpeg": "dafa89e00dd823c8c695794d2a136798",
"assets/assets/images/reception_icon_bg.png": "9f9681de7bd49ac59a59cba9d6b755ce",
"assets/assets/images/reception_icon.png": "4291ac3442fd45bea456cabd18c20bd2",
"assets/assets/images/operator.png": "0cf74041384b0e62002a75c462683a87",
"assets/assets/images/avatar.png": "495a24f5d2a94fa0b962525025c9554b",
"assets/assets/images/man.png": "0c6ceb11a06bb8b05f9db4d1a79b5d6b",
"assets/assets/images/employee_woman.png": "709bbbd50302d9e84c7db9f432ac51a8",
"assets/assets/images/facebook.svg": "2eaf462e60d870b43be14b9ab8841668",
"assets/assets/images/google.svg": "f49d6d67045cb954f3959a791c03e264",
"assets/assets/images/google_logo.png": "ec6b2d354ba48ee450f9991f7b986df0",
"assets/assets/images/qr_icon.png": "0356365856920d11bfea08aa71ab68dd",
"assets/assets/images/google.png": "aeba501ebf7ebba8a96ad0afb94a5b67",
"assets/assets/images/facebook.jpg": "e78b8801fec15b36530841424b13057d",
"assets/assets/images/manager_man.png": "48af4e42d557197fe6315111a436cbad",
"assets/assets/images/apple.svg": "94cc7096696b6d8c476e8e394f358ac9",
"assets/assets/images/reception_icon_transp.png": "49757161347b995c70ca2fb575cc41d3",
"assets/assets/images/client.png": "458b60bbfa24111b1541b742e489a85c",
"assets/assets/fonts/Roboto-Medium.ttf": "fe13e4170719c2fc586501e777bde143",
"assets/assets/fonts/Roboto-Light.ttf": "7b5fb88f12bec8143f00e21bc3222124",
"assets/assets/fonts/Roboto-Regular.ttf": "ac3f799d5bbaf5196fab15ab8de8431c",
"assets/assets/fonts/OpenSans-Light.ttf": "9ff12f694e5951a6f51a9d63b05062e7",
"assets/assets/fonts/OpenSans-ExtraBold.ttf": "49f89e34d03233b1f27788f75df7a40a",
"assets/assets/fonts/OpenSans-Bold.ttf": "f5331cb6372b6c0d8baf2dd7e200498c",
"assets/assets/fonts/OpenSans-Regular.ttf": "d7d5d4588a9f50c99264bc12e4892a7c",
"assets/assets/fonts/Roboto-Bold.ttf": "d329cc8b34667f114a95422aaad1b063",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
