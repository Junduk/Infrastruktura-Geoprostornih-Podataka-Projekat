"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[685],{13058:function(e,n,t){var r,o=t(91118),a=t(41376),c=t(41372),i=t(95783),u=t(54354),l=t(69039),s=t(77975),g=t(720),f=new l.ZP({fill:new s.Z({color:"#eeeeee"})}),w=new c.Z({background:"#1a2b39",source:new i.Z({url:"https://openlayers.org/data/vector/ecoregions.json",format:new o.Z}),style:function(e){var n=e.get("COLOR")||"#eeeeee";return f.getFill().setColor(n),f}}),v=new a.Z({layers:[w],target:"map",view:new u.ZP({center:[0,0],zoom:1})}),Z=new c.Z({source:new i.Z,map:v,style:new l.ZP({stroke:new g.Z({color:"rgba(255, 255, 255, 0.7)",width:2})})}),p=function(e){var n=v.forEachFeatureAtPixel(e,(function(e){return e})),t=document.getElementById("info");t.innerHTML=n&&n.get("ECO_NAME")||"&nbsp;",n!==r&&(r&&Z.getSource().removeFeature(r),n&&Z.getSource().addFeature(n),r=n)};v.on("pointermove",(function(e){if(!e.dragging){var n=v.getEventPixel(e.originalEvent);p(n)}})),v.on("click",(function(e){p(e.pixel)}))}},function(e){var n=function(n){return e(e.s=n)};n(9877),n(13058)}]);
//# sourceMappingURL=vector-layer.js.map