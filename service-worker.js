if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let o=Promise.resolve();return n[e]||(o=new Promise((async o=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=o}else importScripts(e),o()}))),o.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},o=(o,n)=>{Promise.all(o.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(o)};self.define=(o,f,r)=>{n[o]||(n[o]=Promise.resolve().then((()=>{let n={};const c={uri:location.origin+o.slice(1)};return Promise.all(f.map((o=>{switch(o){case"exports":return n;case"module":return c;default:return e(o)}}))).then((e=>{const o=r(...e);return n.default||(n.default=o),n}))})))}}define("./service-worker.js",["./workbox-cf684d81"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app/noflo-114.png",revision:"72daaf6d8f469f19a0bbd0f0441dd829"},{url:"app/noflo-120.png",revision:"e56479fa509067126e4d5fc8924b3048"},{url:"app/noflo-128.png",revision:"578faeeeffe33117b02277fab72206bc"},{url:"app/noflo-144.png",revision:"b4147da19c9a7840c88208b79c7a0d83"},{url:"app/noflo-152.png",revision:"24f0473ecd4252e6a640ba6579fd4c32"},{url:"app/noflo-16.png",revision:"df74ce149a960df96de91c25e85609a2"},{url:"app/noflo-170.png",revision:"46a28ed918dfd632a1bd71617f132dd4"},{url:"app/noflo-192.png",revision:"f65c96a002a775b33f8d0d99f5208236"},{url:"app/noflo-200.png",revision:"cdd4774962d2d9b38d07bbc46c9b9830"},{url:"app/noflo-250.png",revision:"c2c1404f5afd40cbcdfe27f15c2fb7fb"},{url:"app/noflo-36.png",revision:"b9e61fc7e76c22633951120653c3cee3"},{url:"app/noflo-48.png",revision:"02a0e669fd40ba355c31c8864e124f32"},{url:"app/noflo-57.png",revision:"7e365352591a9489ea84d250bfd3f661"},{url:"app/noflo-60.png",revision:"42b5029dbbb8b6a40cc88923943e9820"},{url:"app/noflo-64.png",revision:"1529bf287e90ead5b5297316983a9640"},{url:"app/noflo-72.png",revision:"93250194bf499dc5b3069c647535cdc2"},{url:"app/noflo-78.png",revision:"06ada020d7f64dd4d00f327f5f202bbb"},{url:"app/noflo-96.png",revision:"7b5b6023ac5366c2c171cb40354f6676"},{url:"app/noflo-logo-74.png",revision:"64a98cdb26dfeefe7c321bd648f106d4"},{url:"app/noflo-logo.png",revision:"7e4dfd72976bded6d7df1abefc578a33"},{url:"app/noflo.ico",revision:"e9dccec5ad3a2285acd55ffec1765053"},{url:"backend.03fb3a4869832adafbd4.min.js",revision:null},{url:"fonts/SourceCodePro-Bold.otf.woff",revision:"e1722ab939095aabbcce7c1b66d4ce14"},{url:"fonts/SourceCodePro-Regular.otf.woff",revision:"f3c3efdf2b14659828fc74d9312fa164"},{url:"fonts/fontawesome-webfont.eot",revision:"674f50d287a8c48dc19ba404d20fe713"},{url:"fonts/fontawesome-webfont.svg",revision:"912ec66d7572ff821749319396470bde"},{url:"fonts/fontawesome-webfont.ttf",revision:"b06871f281fee6b241d60582ae9369b9"},{url:"fonts/fontawesome-webfont.woff",revision:"fee66e712a8a08eef5805a46892932ad"},{url:"icon_144x144.350e33a64ceda78fdb53a69c34cbc500.png",revision:"350e33a64ceda78fdb53a69c34cbc500"},{url:"icon_192x192.3b27c3498c7d63b717548d0e034770d7.png",revision:"3b27c3498c7d63b717548d0e034770d7"},{url:"icon_36x36.3e890d4be8fbfb26bbf2b88e9ff7f750.png",revision:"3e890d4be8fbfb26bbf2b88e9ff7f750"},{url:"icon_48x48.9424bf8d8f136f9b1f7b2436fe4e6c06.png",revision:"9424bf8d8f136f9b1f7b2436fe4e6c06"},{url:"icon_72x72.9b1c9410efca6c213ca4ffbb0ea13559.png",revision:"9b1c9410efca6c213ca4ffbb0ea13559"},{url:"icon_96x96.cd2c371363abcb421ba857181a154ea3.png",revision:"cd2c371363abcb421ba857181a154ea3"},{url:"index.html",revision:"809e5fdac8e676d4cea8722ca23db9a1"},{url:"manifest.8f91e596ece5f5b0a879fc2d65613b5f.json",revision:"8f91e596ece5f5b0a879fc2d65613b5f"},{url:"runtime.a4738e760275c4f5c259.min.js",revision:null},{url:"ui.b4e5e6d953737422cdee.min.js",revision:null},{url:"vendor/klayjs-noflo/klay-noflo.js",revision:"ca708b8c33ca4e56d994541906d6c1a5"},{url:"vendor/klayjs/klay.js",revision:"030368b717e5405a09f30c66d09cf526"},{url:"vendor/webcomponentsjs/webcomponents-bundle.js",revision:"939ef49522c9d6762c23f0a3fb10e87b"},{url:"vendor/webcomponentsjs/webcomponents-loader.js",revision:"e044a63e034bf10304dad73138b8c74b"},{url:"vendors~backend.cb8abef4c37479927b3c.min.js",revision:null},{url:"vendors~backend~ui.78a0487489f24d0b9d2e.min.js",revision:null},{url:"vendors~ui.38b9bca2056b8a21ce0a.min.js",revision:null}],{})}));
//# sourceMappingURL=service-worker.js.map
