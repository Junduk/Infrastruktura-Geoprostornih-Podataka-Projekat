"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8487],{35336:function(e,t,i){var r=i(15492),o=i(22954),n=i(60310),a=i(95284),s=i(90776),l=i(17985);function f(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return c(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}var p="version1",g="version2",m="version3",y={};y[p]={level0:{supports:[],formats:[],qualities:["native"]},level1:{supports:["regionByPx","sizeByW","sizeByH","sizeByPct"],formats:["jpg"],qualities:["native"]},level2:{supports:["regionByPx","regionByPct","sizeByW","sizeByH","sizeByPct","sizeByConfinedWh","sizeByWh"],formats:["jpg","png"],qualities:["native","color","grey","bitonal"]}},y[g]={level0:{supports:[],formats:["jpg"],qualities:["default"]},level1:{supports:["regionByPx","sizeByW","sizeByH","sizeByPct"],formats:["jpg"],qualities:["default"]},level2:{supports:["regionByPx","regionByPct","sizeByW","sizeByH","sizeByPct","sizeByConfinedWh","sizeByDistortedWh","sizeByWh"],formats:["jpg","png"],qualities:["default","bitonal"]}},y[m]={level0:{supports:[],formats:["jpg"],qualities:["default"]},level1:{supports:["regionByPx","regionSquare","sizeByW","sizeByH","sizeByWh"],formats:["jpg"],qualities:["default"]},level2:{supports:["regionByPx","regionSquare","regionByPct","sizeByW","sizeByH","sizeByPct","sizeByConfinedWh","sizeByWh"],formats:["jpg","png"],qualities:["default"]}},y.none={none:{supports:[],formats:[],qualities:[]}};var h=/^https?:\/\/library\.stanford\.edu\/iiif\/image-api\/(?:1\.1\/)?compliance\.html#level[0-2]$/,v=/^https?:\/\/iiif\.io\/api\/image\/2\/level[0-2](?:\.json)?$/,d=/(^https?:\/\/iiif\.io\/api\/image\/3\/level[0-2](?:\.json)?$)|(^level[0-2]$)/;var I={};I[p]=function(e){var t=e.getComplianceLevelSupportedFeatures();return void 0===t&&(t=y[p].level0),{url:void 0===e.imageInfo["@id"]?void 0:e.imageInfo["@id"].replace(/\/?(?:info\.json)?$/g,""),supports:t.supports,formats:[].concat(u(t.formats),[void 0===e.imageInfo.formats?[]:e.imageInfo.formats]),qualities:[].concat(u(t.qualities),[void 0===e.imageInfo.qualities?[]:e.imageInfo.qualities]),resolutions:e.imageInfo.scale_factors,tileSize:void 0!==e.imageInfo.tile_width?void 0!==e.imageInfo.tile_height?[e.imageInfo.tile_width,e.imageInfo.tile_height]:[e.imageInfo.tile_width,e.imageInfo.tile_width]:null!=e.imageInfo.tile_height?[e.imageInfo.tile_height,e.imageInfo.tile_height]:void 0}},I[g]=function(e){var t=e.getComplianceLevelSupportedFeatures(),i=Array.isArray(e.imageInfo.profile)&&e.imageInfo.profile.length>1,r=i&&e.imageInfo.profile[1].supports?e.imageInfo.profile[1].supports:[],o=i&&e.imageInfo.profile[1].formats?e.imageInfo.profile[1].formats:[],n=i&&e.imageInfo.profile[1].qualities?e.imageInfo.profile[1].qualities:[];return{url:e.imageInfo["@id"].replace(/\/?(?:info\.json)?$/g,""),sizes:void 0===e.imageInfo.sizes?void 0:e.imageInfo.sizes.map((function(e){return[e.width,e.height]})),tileSize:void 0===e.imageInfo.tiles?void 0:[e.imageInfo.tiles.map((function(e){return e.width}))[0],e.imageInfo.tiles.map((function(e){return void 0===e.height?e.width:e.height}))[0]],resolutions:void 0===e.imageInfo.tiles?void 0:e.imageInfo.tiles.map((function(e){return e.scaleFactors}))[0],supports:[].concat(u(t.supports),u(r)),formats:[].concat(u(t.formats),u(o)),qualities:[].concat(u(t.qualities),u(n))}},I[m]=function(e){var t=e.getComplianceLevelSupportedFeatures(),i=void 0===e.imageInfo.extraFormats?t.formats:[].concat(u(t.formats),u(e.imageInfo.extraFormats)),r=void 0!==e.imageInfo.preferredFormats&&Array.isArray(e.imageInfo.preferredFormats)&&e.imageInfo.preferredFormats.length>0?e.imageInfo.preferredFormats.filter((function(e){return(0,l.q9)(["jpg","png","gif"],e)})).reduce((function(e,t){return void 0===e&&(0,l.q9)(i,t)?t:e}),void 0):void 0;return{url:e.imageInfo.id,sizes:void 0===e.imageInfo.sizes?void 0:e.imageInfo.sizes.map((function(e){return[e.width,e.height]})),tileSize:void 0===e.imageInfo.tiles?void 0:[e.imageInfo.tiles.map((function(e){return e.width}))[0],e.imageInfo.tiles.map((function(e){return e.height}))[0]],resolutions:void 0===e.imageInfo.tiles?void 0:e.imageInfo.tiles.map((function(e){return e.scaleFactors}))[0],supports:void 0===e.imageInfo.extraFeatures?t.supports:[].concat(u(t.supports),u(e.imageInfo.extraFeatures)),formats:i,qualities:void 0===e.imageInfo.extraQualities?t.qualities:[].concat(u(t.qualities),u(e.imageInfo.extraQualities)),preferredFormat:r}};var b=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.setImageInfo(t)}var t,i,r;return t=e,(i=[{key:"setImageInfo",value:function(e){this.imageInfo="string"==typeof e?JSON.parse(e):e}},{key:"getImageApiVersion",value:function(){if(void 0!==this.imageInfo){var e=this.imageInfo["@context"]||"ol-no-context";"string"==typeof e&&(e=[e]);for(var t=0;t<e.length;t++)switch(e[t]){case"http://library.stanford.edu/iiif/image-api/1.1/context.json":case"http://iiif.io/api/image/1/context.json":return p;case"http://iiif.io/api/image/2/context.json":return g;case"http://iiif.io/api/image/3/context.json":return m;case"ol-no-context":if(this.getComplianceLevelEntryFromProfile(p)&&this.imageInfo.identifier)return p}(0,s.h)(!1,61)}}},{key:"getComplianceLevelEntryFromProfile",value:function(e){if(void 0!==this.imageInfo&&void 0!==this.imageInfo.profile)switch(void 0===e&&(e=this.getImageApiVersion()),e){case p:if(h.test(this.imageInfo.profile))return this.imageInfo.profile;break;case m:if(d.test(this.imageInfo.profile))return this.imageInfo.profile;break;case g:if("string"==typeof this.imageInfo.profile&&v.test(this.imageInfo.profile))return this.imageInfo.profile;if(Array.isArray(this.imageInfo.profile)&&this.imageInfo.profile.length>0&&"string"==typeof this.imageInfo.profile[0]&&v.test(this.imageInfo.profile[0]))return this.imageInfo.profile[0]}}},{key:"getComplianceLevelFromProfile",value:function(e){var t=this.getComplianceLevelEntryFromProfile(e);if(void 0!==t){var i=t.match(/level[0-2](?:\.json)?$/g);return Array.isArray(i)?i[0].replace(".json",""):void 0}}},{key:"getComplianceLevelSupportedFeatures",value:function(){if(void 0!==this.imageInfo){var e=this.getImageApiVersion(),t=this.getComplianceLevelFromProfile(e);return void 0===t?y.none.none:y[e][t]}}},{key:"getTileSourceOptions",value:function(e){var t=e||{},i=this.getImageApiVersion();if(void 0!==i){var r=void 0===i?void 0:I[i](this);if(void 0!==r)return{url:r.url,version:i,size:[this.imageInfo.width,this.imageInfo.height],sizes:r.sizes,format:void 0!==t.format&&(0,l.q9)(r.formats,t.format)?t.format:void 0!==r.preferredFormat?r.preferredFormat:"jpg",supports:r.supports,quality:t.quality&&(0,l.q9)(r.qualities,t.quality)?t.quality:(0,l.q9)(r.qualities,"native")?"native":"default",resolutions:Array.isArray(r.resolutions)?r.resolutions.sort((function(e,t){return t-e})):void 0,tileSize:r.tileSize}}}}])&&f(t.prototype,i),r&&f(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),z=i(86923),B=i(7877);function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e){return function(e){if(Array.isArray(e))return w(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return w(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return w(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function x(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,r=C(e);if(t){var o=C(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return A(this,i)}}function A(e,t){if(t&&("object"===q(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e){return e.toLocaleString("en",{maximumFractionDigits:10})}var F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(u,e);var t,i,o,f=S(u);function u(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u);var i=e||{},o=void 0===i.imageSmoothing||i.imageSmoothing;void 0!==i.interpolate&&(o=i.interpolate);var c=i.url||"";c+=c.lastIndexOf("/")===c.length-1||""===c?"":"/";var y=i.version||g,h=i.sizes||[],v=i.size;(0,s.h)(null!=v&&Array.isArray(v)&&2==v.length&&!isNaN(v[0])&&v[0]>0&&!isNaN(v[1])&&v[1]>0,60);var d,I,b,q=v[0],w=v[1],x=i.tileSize,P=i.tilePixelRatio||1,S=i.format||"jpg",A=i.quality||(i.version==p?"native":"default"),C=i.resolutions||[],F=i.supports||[],M=i.extent||[0,-w,q,0],W=null!=h&&Array.isArray(h)&&h.length>0,E=void 0!==x&&("number"==typeof x&&Number.isInteger(x)&&x>0||Array.isArray(x)&&x.length>0),_=null!=F&&Array.isArray(F)&&((0,l.q9)(F,"regionByPx")||(0,l.q9)(F,"regionByPct"))&&((0,l.q9)(F,"sizeByWh")||(0,l.q9)(F,"sizeByH")||(0,l.q9)(F,"sizeByW")||(0,l.q9)(F,"sizeByPct"));if(C.sort((function(e,t){return t-e})),E||_)if(null!=x&&("number"==typeof x&&Number.isInteger(x)&&x>0?(d=x,I=x):Array.isArray(x)&&x.length>0&&((1==x.length||null==x[1]&&Number.isInteger(x[0]))&&(d=x[0],I=x[0]),2==x.length&&(Number.isInteger(x[0])&&Number.isInteger(x[1])?(d=x[0],I=x[1]):null==x[0]&&Number.isInteger(x[1])&&(d=x[1],I=x[1])))),void 0!==d&&void 0!==I||(d=a.S,I=a.S),0==C.length)for(var L=b=Math.max(Math.ceil(Math.log(q/d)/Math.LN2),Math.ceil(Math.log(w/I)/Math.LN2));L>=0;L--)C.push(Math.pow(2,L));else{var k=Math.max.apply(Math,j(C));b=Math.round(Math.log(k)/Math.LN2)}else if(d=q,I=w,C=[],W){h.sort((function(e,t){return e[0]-t[0]})),b=-1;for(var N=[],T=0;T<h.length;T++){var R=q/h[T][0];C.length>0&&C[C.length-1]==R?N.push(T):(C.push(R),b++)}if(N.length>0)for(var $=0;$<N.length;$++)h.splice(N[$]-$,1)}else C.push(1),h.push([q,w]),b=0;var H=new r.Z({tileSize:[d,I],extent:M,origin:(0,z.rL)(M),resolutions:C}),D=n.z.bind(null,(0,B.Pq)(x||256).map((function(e){return e*P})));return(t=f.call(this,{attributions:i.attributions,attributionsCollapsible:i.attributionsCollapsible,cacheSize:i.cacheSize,crossOrigin:i.crossOrigin,interpolate:o,projection:i.projection,reprojectionErrorThreshold:i.reprojectionErrorThreshold,state:i.state,tileClass:D,tileGrid:H,tilePixelRatio:i.tilePixelRatio,tileUrlFunction:function(e,t,i){var r,o,n=e[0];if(!(n>b)){var a=e[1],s=e[2],f=C[n];if(!(void 0===a||void 0===s||void 0===f||a<0||Math.ceil(q/f/d)<=a||s<0||Math.ceil(w/f/I)<=s)){if(_||E){var u=a*d*f,p=s*I*f,g=d*f,v=I*f,z=d,B=I;if(u+g>q&&(g=q-u),p+v>w&&(v=w-p),u+d*f>q&&(z=Math.floor((q-u+f-1)/f)),p+I*f>w&&(B=Math.floor((w-p+f-1)/f)),0==u&&g==q&&0==p&&v==w)r="full";else if(!_||(0,l.q9)(F,"regionByPx"))r=u+","+p+","+g+","+v;else if((0,l.q9)(F,"regionByPct")){r="pct:"+O(u/q*100)+","+O(p/w*100)+","+O(g/q*100)+","+O(v/w*100)}y!=m||_&&!(0,l.q9)(F,"sizeByWh")?!_||(0,l.q9)(F,"sizeByW")?o=z+",":(0,l.q9)(F,"sizeByH")?o=","+B:(0,l.q9)(F,"sizeByWh")?o=z+","+B:(0,l.q9)(F,"sizeByPct")&&(o="pct:"+O(100/f)):o=z+","+B}else if(r="full",W){var j=h[n][0],x=h[n][1];o=y==m?j==q&&x==w?"max":j+","+x:j==q?"full":j+","}else o=y==m?"max":"full";return c+r+"/"+o+"/0/"+A+"."+S}}},transition:i.transition})).zDirection=i.zDirection,t}return t=u,i&&x(t.prototype,i),o&&x(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}(o.Z),M=i(41376),W=i(42010),E=i(54354),_=new W.Z,L=new M.Z({layers:[_],target:"map"}),k=document.getElementById("iiif-notification"),N=document.getElementById("imageInfoUrl");function T(e){fetch(e).then((function(e){e.json().then((function(e){var t=new b(e).getTileSourceOptions();if(void 0!==t&&void 0!==t.version){t.zDirection=-1;var i=new F(t);_.setSource(i),L.setView(new E.ZP({resolutions:i.getTileGrid().getResolutions(),extent:i.getTileGrid().getExtent(),constrainOnlyCenter:!0})),L.getView().fit(i.getTileGrid().getExtent()),k.textContent=""}else k.textContent="Data seems to be no valid IIIF image information."})).catch((function(e){k.textContent="Could not read image info json. "+e}))})).catch((function(){k.textContent="Could not read data from URL."}))}document.getElementById("display").addEventListener("click",(function(){T(N.value)})),T(N.value)}},function(e){var t=function(t){return e(e.s=t)};t(9877),t(35336)}]);
//# sourceMappingURL=iiif.js.map