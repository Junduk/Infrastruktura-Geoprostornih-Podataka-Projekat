"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4160],{42793:function(e,n,t){var r=t(61038),a=t(41376),o=t(75469),c=t(54354),w=t(69039),i=t(720),s=t(24598),u=t(79847),Z=t(95783),f=t(42010),h=t(41372),g=t(12810),p=new f.Z({source:new u.Z}),l=new Z.Z,m=new h.Z({source:l,style:function(e){var n=e.getGeometry(),t=[new w.ZP({stroke:new i.Z({color:"#ffcc33",width:2})})];return n.forEachSegment((function(e,n){var r=n[0]-e[0],a=n[1]-e[1],c=Math.atan2(a,r);t.push(new w.ZP({geometry:new o.Z(n),image:new s.Z({src:"data/arrow.png",anchor:[.75,.5],rotateWithView:!0,rotation:-c})}))})),t}}),k=(0,g.U2)("EPSG:3857").getExtent().slice();k[0]+=k[0],k[2]+=k[2],new a.Z({layers:[p,m],target:"map",view:new c.ZP({center:[-11e6,46e5],zoom:4,extent:k})}).addInteraction(new r.ZP({source:l,type:"LineString"}))}},function(e){var n=function(n){return e(e.s=n)};n(9877),n(42793)}]);
//# sourceMappingURL=line-arrows.js.map