"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8944],{7844:function(e,t,n){var r=n(1376),a=n(2314),o=n(2010),s=n(5673),p=n(4354),i=n(5830),u=n(1769),h=n(2810),c=new a.Z({code:"EPSG:21781",extent:[485869.5728,76443.1884,837076.5648,299941.7864],units:"m"});(0,h.Sx)(c),(0,h.zY)("EPSG:4326",c,(function(e){return[l(e[1],e[0]),f(e[1],e[0])]}),(function(e){return[d(e[0],e[1]),v(e[0],e[1])]}));var w=[42e4,3e4,9e5,35e4],m=[new o.Z({extent:w,source:new s.Z({url:"https://wms.geo.admin.ch/",crossOrigin:"anonymous",attributions:'© <a href="https://shop.swisstopo.admin.ch/en/products/maps/national/lk1000"target="_blank">Pixelmap 1:1000000 / geo.admin.ch</a>',params:{LAYERS:"ch.swisstopo.pixelkarte-farbe-pk1000.noscale",FORMAT:"image/jpeg"},serverType:"mapserver"})}),new o.Z({extent:w,source:new s.Z({url:"https://wms.geo.admin.ch/",crossOrigin:"anonymous",attributions:'© <a href="https://www.hydrodaten.admin.ch/en/notes-on-the-flood-alert-maps.html"target="_blank">Flood Alert / geo.admin.ch</a>',params:{LAYERS:"ch.bafu.hydroweb-warnkarte_national"},serverType:"mapserver"})})];new r.Z({controls:(0,i.ce)().extend([new u.Z({units:"metric"})]),layers:m,target:"map",view:new p.ZP({projection:c,center:(0,h.vs)([8.23,46.86],"EPSG:4326","EPSG:21781"),extent:w,zoom:2})});function l(e,t){e=g(e),t=g(t);var n=((e=M(e))-169028.66)/1e4,r=((t=M(t))-26782.5)/1e4;return 600072.37+211455.93*r-10938.51*r*n-.36*r*Math.pow(n,2)-44.54*Math.pow(r,3)}function f(e,t){e=g(e),t=g(t);var n=((e=M(e))-169028.66)/1e4,r=((t=M(t))-26782.5)/1e4;return 200147.07+308807.95*n+3745.25*Math.pow(r,2)+76.63*Math.pow(n,2)-194.56*Math.pow(r,2)*n+119.79*Math.pow(n,3)}function v(e,t){var n=(e-6e5)/1e6,r=(t-2e5)/1e6,a=16.9023892+3.238272*r-.270978*Math.pow(n,2)-.002528*Math.pow(r,2)-.0447*Math.pow(n,2)*r-.014*Math.pow(r,3);return a=100*a/36}function d(e,t){var n=(e-6e5)/1e6,r=(t-2e5)/1e6,a=2.6779094+4.728982*n+.791484*n*r+.1306*n*Math.pow(r,2)-.0436*Math.pow(n,3);return a=100*a/36}function g(e){var t=parseInt(e,10),n=parseInt(60*(e-t),10);return t+n/100+60*(60*(e-t)-n)/1e4}function M(e){var t=parseInt(e,10),n=parseInt(100*(e-t),10),r=100*(100*(e-t)-n),a=String(e).split(".");return 2==a.length&&2==a[1].length&&(n=Number(a[1]),r=0),r+60*n+3600*t}}},function(e){var t=function(t){return e(e.s=t)};t(9877),t(7844)}]);
//# sourceMappingURL=wms-custom-proj.js.map