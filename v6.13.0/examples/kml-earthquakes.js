"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3124],{3226:function(e,t,n){var r=n(7103),o=n(1376),a=n(4703),i=n(5783),l=n(4354),u=n(9039),c=n(7138),s=n(7975),w=n(720),f=n(1372),g=n(2010),p={},m=new f.Z({source:new i.Z({url:"data/kml/2012_Earthquakes_Mag5.kml",format:new r.ZP({extractStyles:!1})}),style:function(e){var t=e.get("name"),n=5+20*(parseFloat(t.substr(2))-5),r=p[n];return r||(r=new u.ZP({image:new c.Z({radius:n,fill:new s.Z({color:"rgba(255, 153, 0, 0.4)"}),stroke:new w.Z({color:"rgba(255, 204, 0, 0.2)",width:1})})}),p[n]=r),r}}),Z=new g.Z({source:new a.Z({layer:"toner"})}),h=new o.Z({layers:[Z,m],target:"map",view:new l.ZP({center:[0,0],zoom:2})}),k=$("#info");k.tooltip({animation:!1,trigger:"manual"});var v=function(e){k.css({left:e[0]+"px",top:e[1]-15+"px"});var t=h.forEachFeatureAtPixel(e,(function(e){return e}));t?k.attr("data-original-title",t.get("name")).tooltip("show"):k.tooltip("hide")};h.on("pointermove",(function(e){e.dragging?k.tooltip("hide"):v(h.getEventPixel(e.originalEvent))})),h.on("click",(function(e){v(e.pixel)}))}},function(e){var t=function(t){return e(e.s=t)};t(9877),t(3226)}]);
//# sourceMappingURL=kml-earthquakes.js.map