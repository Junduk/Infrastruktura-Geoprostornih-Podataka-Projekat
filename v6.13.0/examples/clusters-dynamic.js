"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8087],{3292:function(e,t,r){var n=r(2739),o=r(1118),a=r(1376),i=r(4354),u=r(7975),c=r(720),s=r(7138),l=r(4598),f=r(9039),g=r(729),w=r(5783),m=r(8685),p=r(1998),y=r(5469),b=r(5265),h=r(5528),Z=r(1372),d=r(2010),v=r(6923),O=r(2810);function P(e){return function(e){if(Array.isArray(e))return j(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return j(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return j(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){k(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function k(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var C,E,M,A=Math.PI/2,I=new u.Z({color:"rgba(255, 153, 0, 0.4)"}),G=new c.Z({color:"rgba(204, 85, 0, 1)",width:1.5}),D=new u.Z({color:"rgba(255, 153, 102, 0.3)"}),z=new u.Z({color:"rgba(255, 165, 0, 0.7)"}),F=new u.Z({color:"#fff"}),T=new c.Z({color:"rgba(0, 0, 0, 0.6)",width:3}),U=new s.Z({radius:14,fill:z}),V=new s.Z({radius:20,fill:D}),B=new l.Z({src:"data/icons/emoticon-cool.svg"}),H=new l.Z({src:"data/icons/emoticon-cool-outline.svg"});function J(e){return new f.ZP({geometry:e.getGeometry(),image:e.get("LEISTUNG")>5?B:H})}function L(e,t){if(e===C&&t===E){var r=e.get("features"),o=e.getGeometry().getCoordinates();return function(e,t,r){var n,o=28*(2+e)/(2*Math.PI),a=2*Math.PI/e,i=[];o=Math.max(o,35)*r;for(var u=0;u<e;++u)n=A+u*a,i.push([t[0]+o*Math.cos(n),t[1]+o*Math.sin(n)]);return i}(r.length,e.getGeometry().getCoordinates(),t).reduce((function(e,t,a){var i=new y.Z(t),u=new b.Z([o,t]);return e.unshift(new f.ZP({geometry:u,stroke:G})),e.push(J(new n.Z(S(S({},r[a].getProperties()),{},{geometry:i})))),e}),[])}}function N(e){if(e===M){var t=e.get("features").map((function(e){return e.getGeometry().getCoordinates()}));return new f.ZP({geometry:new h.ZP([monotoneChainConvexHull(t)]),fill:I,stroke:G})}}var R=new w.Z({format:new o.Z,url:"data/geojson/photovoltaic.json"}),W=new m.Z({attributions:'Data: <a href="https://www.data.gv.at/auftritte/?organisation=stadt-wien">Stadt Wien</a>',distance:35,source:R}),$=new Z.Z({source:W,style:N}),_=new Z.Z({source:W,style:function(e){var t=e.get("features").length;return t>1?[new f.ZP({image:V}),new f.ZP({image:U,text:new g.Z({text:t.toString(),fill:F,stroke:T})})]:J(e.get("features")[0])}}),q=new Z.Z({source:W,style:L}),K=new d.Z({source:new p.Z({attributions:'Base map: <a target="_blank" href="https://basemap.at/">basemap.at</a>',url:"https://maps{1-4}.wien.gv.at/basemap/bmapgrau/normal/google3857/{z}/{y}/{x}.png"})}),Q=new a.Z({layers:[K,$,_,q],target:"map",view:new i.ZP({center:[0,0],zoom:2,maxZoom:19,extent:[].concat(P((0,O.mi)([16.1793,48.1124])),P((0,O.mi)([16.5559,48.313]))),showFullExtent:!0})});Q.on("pointermove",(function(e){_.getFeatures(e.pixel).then((function(e){e[0]!==M&&(M=e[0],$.setStyle(N),Q.getTargetElement().style.cursor=M&&M.get("features").length>1?"pointer":"")}))})),Q.on("click",(function(e){_.getFeatures(e.pixel).then((function(e){if(e.length>0){var t=e[0].get("features");if(t.length>1){var r=(0,v.lJ)();t.forEach((function(e){return(0,v.l7)(r,e.getGeometry().getExtent())}));var n=Q.getView(),o=Q.getView().getResolution();n.getZoom()===n.getMaxZoom()||(0,v.dz)(r)<o&&(0,v.dz)(r)<o?(C=e[0],E=o,q.setStyle(L)):n.fit(r,{duration:500,padding:[50,50,50,50]})}}}))}))}},function(e){var t=function(t){return e(e.s=t)};t(9877),t(3292)}]);
//# sourceMappingURL=clusters-dynamic.js.map