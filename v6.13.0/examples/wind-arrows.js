"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2207],{6606:function(e,t,n){var a=n(2739),r=n(1376),o=n(9847),i=n(5469),s=n(2010),w=n(1372),c=n(5783),u=n(4354),h=n(9072),l=n(720),p=n(7975),d=n(9039),f=n(2810),Z=new h.Z({points:2,radius:5,stroke:new l.Z({width:2,color:"black"}),rotateWithView:!0}),g=new h.Z({points:3,radius:5,fill:new p.Z({color:"black"}),rotateWithView:!0}),k=[new d.ZP({image:Z}),new d.ZP({image:g})],m=new c.Z({attributions:'Weather data by <a href="https://openweathermap.org/current">OpenWeather</a>'}),b=new r.Z({layers:[new s.Z({source:new o.Z}),new w.Z({source:m,style:function(e){var t=e.get("wind"),n=(t.deg-180)*Math.PI/180,a=t.speed/10;return Z.setScale([1,a]),Z.setRotation(n),g.setDisplacement([0,g.getRadius()/2+Z.getRadius()*a]),g.setRotation(n),k}})],target:"map",view:new u.ZP({center:[0,0],zoom:2})});fetch("data/openweather/weather.json").then((function(e){return e.json()})).then((function(e){var t=[];e.list.forEach((function(e){var n=new a.Z(new i.Z((0,f.mi)([e.coord.lon,e.coord.lat])));n.setProperties(e),t.push(n)})),m.addFeatures(t),b.getView().fit(m.getExtent())}))}},function(e){var t=function(t){return e(e.s=t)};t(9877),t(6606)}]);
//# sourceMappingURL=wind-arrows.js.map