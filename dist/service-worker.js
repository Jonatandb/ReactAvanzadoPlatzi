/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  const singleRequire = name => {
    if (name !== 'require') {
      name = name + '.js';
    }
    let promise = Promise.resolve();
    if (!registry[name]) {
      
        promise = new Promise(async resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = name;
            document.head.appendChild(script);
            script.onload = resolve;
          } else {
            importScripts(name);
            resolve();
          }
        });
      
    }
    return promise.then(() => {
      if (!registry[name]) {
        throw new Error(`Module ${name} didn’t register its module`);
      }
      return registry[name];
    });
  };

  const require = (names, resolve) => {
    Promise.all(names.map(singleRequire))
      .then(modules => resolve(modules.length === 1 ? modules[0] : modules));
  };
  
  const registry = {
    require: Promise.resolve(require)
  };

  self.define = (moduleName, depsNames, factory) => {
    if (registry[moduleName]) {
      // Module is already loading or loaded.
      return;
    }
    registry[moduleName] = Promise.resolve().then(() => {
      let exports = {};
      const module = {
        uri: location.origin + moduleName.slice(1)
      };
      return Promise.all(
        depsNames.map(depName => {
          switch(depName) {
            case "exports":
              return exports;
            case "module":
              return module;
            default:
              return singleRequire(depName);
          }
        })
      ).then(deps => {
        const facValue = factory(...deps);
        if(!exports.default) {
          exports.default = facValue;
        }
        return exports;
      });
    });
  };
}
define("./service-worker.js",['./workbox-99319794'], function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/nhQhGp
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute([{
    "url": "/0.app.bundle.js",
    "revision": "8cdc5b5e13e0831b51bbbf751fd51fb5"
  }, {
    "url": "/1.app.bundle.js",
    "revision": "4db92daa12c5569ccb1d8ae6434c3fd3"
  }, {
    "url": "/2.app.bundle.js",
    "revision": "69bff7be3e6d31d24874a6c765be6c10"
  }, {
    "url": "/3.app.bundle.js",
    "revision": "7843cb187b71ca95922c86b846f9a7b3"
  }, {
    "url": "/4.app.bundle.js",
    "revision": "d04e8df90dbe7e33578d9f5f1fc25a81"
  }, {
    "url": "/5.app.bundle.js",
    "revision": "ae3b2d1df3183e34337329710ba36858"
  }, {
    "url": "/6.app.bundle.js",
    "revision": "e26b6b8812d429efe375c111394d8624"
  }, {
    "url": "/7.app.bundle.js",
    "revision": "510a48e1371d1de9f87ac205cb09994e"
  }, {
    "url": "/8.app.bundle.js",
    "revision": "67deb64c8319b41cbc18644ca8e97e00"
  }, {
    "url": "/icon_1024x1024.e894c09cc6c8ebc3ac84b85faa08ef33.png",
    "revision": "e894c09cc6c8ebc3ac84b85faa08ef33"
  }, {
    "url": "/icon_120x120.bb6fa30c6f844e7505a3b9cb720af637.png",
    "revision": "bb6fa30c6f844e7505a3b9cb720af637"
  }, {
    "url": "/icon_128x128.5f7569ccfa568f93b4696a2e70dc3ee3.png",
    "revision": "5f7569ccfa568f93b4696a2e70dc3ee3"
  }, {
    "url": "/icon_152x152.f953b47c26f0fd3d63fd0325a11d36ee.png",
    "revision": "f953b47c26f0fd3d63fd0325a11d36ee"
  }, {
    "url": "/icon_167x167.5e600ef83d98b748f072fecaf3f95868.png",
    "revision": "5e600ef83d98b748f072fecaf3f95868"
  }, {
    "url": "/icon_180x180.2b3a9713c3b23aab6c9dc80812a60eb3.png",
    "revision": "2b3a9713c3b23aab6c9dc80812a60eb3"
  }, {
    "url": "/icon_192x192.188babdb508e00ce25d3c2ddec773440.png",
    "revision": "188babdb508e00ce25d3c2ddec773440"
  }, {
    "url": "/icon_256x256.5bb829d03d7616cc95e1e181e805ea4c.png",
    "revision": "5bb829d03d7616cc95e1e181e805ea4c"
  }, {
    "url": "/icon_384x384.afaf1d2e6e1de383d4ce6cc0c78cee2d.png",
    "revision": "afaf1d2e6e1de383d4ce6cc0c78cee2d"
  }, {
    "url": "/icon_512x512.675ab8bdcc565cdd64cc85d9efd2eeaa.png",
    "revision": "675ab8bdcc565cdd64cc85d9efd2eeaa"
  }, {
    "url": "/icon_96x96.867ef09d4fb6abd502858c6e05e11df8.png",
    "revision": "867ef09d4fb6abd502858c6e05e11df8"
  }, {
    "url": "/index.html",
    "revision": "3e54b97c08f117dc874870da25694865"
  }, {
    "url": "/manifest.88c9b402ca44e6d9d38abd277daeeb5d.json",
    "revision": "88c9b402ca44e6d9d38abd277daeeb5d"
  }], {});
  workbox.registerRoute(/https:\/\/(res.cloudinary.com|images.unsplash.com)/, new workbox.CacheFirst({
    "cacheName": "images",
    plugins: []
  }), 'GET');
  workbox.registerRoute(/https:\/\/petgram-jdb-api-cwlgmb0ki.vercel.app/, new workbox.NetworkFirst({
    "cacheName": "api",
    plugins: []
  }), 'GET');

});
//# sourceMappingURL=service-worker.js.map
