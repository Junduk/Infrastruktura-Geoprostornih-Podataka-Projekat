"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9869],{96223:function(e,n,t){var o,i,r,a,s,c=t(61038),l=t(41376),d=t(70492),u=t(54354),f=t(69039),w=t(77975),g=t(720),m=t(77138),Z=t(85528),p=t(5265),v=t(79847),h=t(95783),k=t(42010),y=t(41372),P=t(51318),b=t(5403),C=new k.Z({source:new v.Z}),L=new h.Z,M=new y.Z({source:L,style:new f.ZP({fill:new w.Z({color:"rgba(255, 255, 255, 0.2)"}),stroke:new g.Z({color:"#ffcc33",width:2}),image:new m.Z({radius:7,fill:new w.Z({color:"#ffcc33"})})})}),E=new l.Z({layers:[C,M],target:"map",view:new u.ZP({center:[-11e6,46e5],zoom:15})});E.on("pointermove",(function(e){if(!e.dragging){var n="Click to start drawing";if(o){var t=o.getGeometry();t instanceof Z.ZP?n="Click to continue drawing the polygon":t instanceof p.Z&&(n="Click to continue drawing the line")}i.innerHTML=n,r.setPosition(e.coordinate),i.classList.remove("hidden")}})),E.getViewport().addEventListener("mouseout",(function(){i.classList.add("hidden")}));var N,I=document.getElementById("type");function O(){var e,n="area"==I.value?"Polygon":"LineString";N=new c.ZP({source:L,type:n,style:new f.ZP({fill:new w.Z({color:"rgba(255, 255, 255, 0.2)"}),stroke:new g.Z({color:"rgba(0, 0, 0, 0.5)",lineDash:[10,10],width:2}),image:new m.Z({radius:5,stroke:new g.Z({color:"rgba(0, 0, 0, 0.7)"}),fill:new w.Z({color:"rgba(255, 255, 255, 0.2)"})})})}),E.addInteraction(N),B(),function(){i&&i.parentNode.removeChild(i);(i=document.createElement("div")).className="ol-tooltip hidden",r=new d.Z({element:i,offset:[15,0],positioning:"center-left"}),E.addOverlay(r)}(),N.on("drawstart",(function(n){o=n.feature;var t=n.coordinate;e=o.getGeometry().on("change",(function(e){var n,o,i,r,c,l=e.target;l instanceof Z.ZP?(r=l,n=(c=(0,P.bg)(r))>1e4?Math.round(c/1e6*100)/100+" km<sup>2</sup>":Math.round(100*c)/100+" m<sup>2</sup>",t=l.getInteriorPoint().getCoordinates()):l instanceof p.Z&&(o=l,n=(i=(0,P.xA)(o))>100?Math.round(i/1e3*100)/100+" km":Math.round(100*i)/100+" m",t=l.getLastCoordinate()),a.innerHTML=n,s.setPosition(t)}))})),N.on("drawend",(function(){a.className="ol-tooltip ol-tooltip-static",s.setOffset([0,-7]),o=null,a=null,B(),(0,b.B)(e)}))}function B(){a&&a.parentNode.removeChild(a),(a=document.createElement("div")).className="ol-tooltip ol-tooltip-measure",s=new d.Z({element:a,offset:[0,-15],positioning:"bottom-center",stopEvent:!1,insertFirst:!1}),E.addOverlay(s)}I.onchange=function(){E.removeInteraction(N),O()},O()}},function(e){var n=function(n){return e(e.s=n)};n(9877),n(96223)}]);
//# sourceMappingURL=measure.js.map