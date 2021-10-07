'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "e4c5dc42169806fc58fb3a878f159972",
".git/config": "7ec99e9defffd4d86068f64a141e03a4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "684d99fcf097c6c2420b8ab3e127de3c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c45e4b6658d024592e3a92898237e252",
".git/logs/refs/heads/main": "1aad6a33737b372f5f86068d439f2319",
".git/logs/refs/remotes/origin/main": "fad734dd38b9d674cff693f30f9ab5b9",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/13/c8a7db15d9e6f9c541d4f3c3ac8cecc16dc092": "97d1051fcb711f7efaaa534c50f6dcfe",
".git/objects/1d/754dca01294633ae7369662a05b333ca1fb6e8": "389485375755e5d7f1c0ffae50184fef",
".git/objects/31/bf8ffde748b6e9cfda32fc759d4e694f624ed8": "e92ac4e913b551d0fddc3532bb2903d9",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3e/ed87a12108cb9a413ece84ad0032c659bef0f1": "9e0152db1a40c7f7e124167c15d426ae",
".git/objects/40/8650bea75ce0e83a7113fb18b046b16f6b3512": "eafd3fa22a1595439e3dd54da8cf7980",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/54/0720c99263105bd9163838bcd312a122de4073": "dbe779052200a5b5b2c170dc1ddfb44a",
".git/objects/68/2dee90c02741348cd18dc4ed35b7a53c834394": "103b4ce291e032ba0a1a06cc781a7c5a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/97/14a5daa986628831a84fcfacc88143e210ef1b": "a666863b9b97ab595eb2876065a11ca0",
".git/objects/99/2aedc884e070fad6632643606f85e03d373bcc": "3c4c88d326271b1a59de20f35170b9b6",
".git/objects/9d/997706454401db2c4739350fb6bed94d0564b9": "41a3c66675df6b238e1b8f1197c7fd2b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/ea6bb6ecab48a67dca6111d7d101d6d279e561": "15b958b62e243240547175b63ede3e4b",
".git/objects/a8/2b14e1228010da8d3c240907d226f6293b9e75": "872136e8dc211ac56580eef24f8ca2eb",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/45517c2670079b27fb13373e7351c9644271b1": "bea39985fb3525b478466ed971bfd0d3",
".git/objects/af/4b3cb34ab5c69b44a01b9bac0e320dc90f96fd": "fe549f1ccef3a1ed715e51f443d15c6a",
".git/objects/b2/6ede23c7fc81814e6c1c8231200a9dbfa2971a": "00d2a354bb83174a87abd5a54f662426",
".git/objects/b3/01cd728bbb05966b18c332638ad71b787d47d5": "1364950b8b547d864a261bc76c117b49",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c5/6d8af631b20ae398e64d2362cea546a36f2f77": "d5d4951ee03341decfccc9ddd93b252b",
".git/objects/ca/088527368385c79ca7663a01a900b2dc042a8f": "0e347d1199cc11c46a989085a7889af7",
".git/objects/cc/afd60960811ba0d4b420f4c96466a82178fd59": "5071ed557c5daa80cf018e7e7dc0fcb2",
".git/objects/d2/8c9340001a635aa15f01eba88d39e31a02c152": "99ca7b681b1da3df64e36478d27aba46",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/91839cd552b24122d866a5b561ac70b15695da": "f860e7781491ffe5c01195c32215c762",
".git/objects/dc/07eb39f6612e20e43e98e0ff8e0bbbc38e7bdd": "2b4d64a26ce6ee92b0cccfeaa89a5e37",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/ebb7b8ddbb9437894acfd03af2a85254cddf75": "2e6d6780af017dda22cd2231e6f18580",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/fe682495d41d2873cacfd3f068402c3243de55": "c9935b9f647e933a5fff0783cf19db6d",
".git/objects/ec/32aa0a3c14a31c5e82e331eaadb3aabb1702ca": "b16ea2f5978579cdde4b3047aaad048e",
".git/objects/ec/5861445a1931c63e17dd56dfb19624af057087": "b32b162920d6ba008511876405eeb991",
".git/objects/ee/ae3123700ee2286b9871958949f8b2427b20d4": "d5ff6c20bb4b35dee4a119738ed63290",
".git/objects/f1/5317289f1b6172dd1bcc80782f27d3a5758e85": "4a7ba1ffb576ce5a36f00547694526fc",
".git/objects/fe/7bd4568e9d519d2d994561f12b295b2b96eb21": "05906e7efefe4ac500eefc168a23362f",
".git/objects/ff/cf8cdd9f22a632a9dfe12fefc6cd551f58e848": "1e25d288048f2328579bd787c589cbc3",
".git/refs/heads/main": "26d233fec513ce87387e3b9cc857f542",
".git/refs/remotes/origin/main": "26d233fec513ce87387e3b9cc857f542",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "70b74c32d85c34bb25ef9c88ee731de6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "f4a59a417eaad1ff19f7f9a9344961f0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b28b3e2005be1445a070304657346dbc",
"/": "b28b3e2005be1445a070304657346dbc",
"main.dart.js": "ce3eb919d15d527081ac833b733d9f06",
"manifest.json": "78ce41d500ccf52390a513584c90ebf0",
"README.md": "b639f0d98f4e4d76d395ec99f935f8cc",
"version.json": "e31b94fd0a2ee76be4373d654d860266"
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
