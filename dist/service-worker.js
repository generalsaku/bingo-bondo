if(!self.define){let e,o={};const n=(n,i)=>(n=new URL(n+".js",i).href,o[n]||new Promise((o=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=o,document.head.appendChild(e)}else e=n,importScripts(n),o()})).then((()=>{let e=o[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(o[r])return;let t={};const c=e=>n(e,r),b={module:{uri:r},exports:t,require:c};o[r]=Promise.all(i.map((e=>b[e]||c(e)))).then((e=>(s(...e),t)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"bingo-bond"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/bingo-bondo/css/app.91d151a2.css",revision:null},{url:"/bingo-bondo/index.html",revision:"3bdab3b2e181143bc3d10f142a8e5cd9"},{url:"/bingo-bondo/js/app.3ff2be98.js",revision:null},{url:"/bingo-bondo/js/chunk-vendors.a9d32054.js",revision:null},{url:"/bingo-bondo/manifest.json",revision:"17bfec351cb151cc8bb7c912319b8518"},{url:"/bingo-bondo/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
