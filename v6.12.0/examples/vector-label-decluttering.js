"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2341],{71014:function(e,t,n){var r=n(91118),o=n(41376),s=n(41372),a=n(95783),w=n(54354),i=n(69039),l=n(40729),c=n(77975),f=n(720),u=n(12810),Z=new o.Z({target:"map",view:new w.ZP({center:(0,u.mi)([-100,38.5]),zoom:4})}),p=new i.ZP({text:new l.Z({font:"12px Calibri,sans-serif",overflow:!0,fill:new c.Z({color:"#000"}),stroke:new f.Z({color:"#fff",width:3})})}),d=[new i.ZP({fill:new c.Z({color:"rgba(255, 255, 255, 0.6)"}),stroke:new f.Z({color:"#319FD3",width:1})}),p],h=new s.Z({background:"white",source:new a.Z({url:"https://openlayers.org/data/vector/us-states.json",format:new r.Z}),style:function(e){var t=e.get("name").split(" ").join("\n");return p.getText().setText(t),d},declutter:!0});Z.addLayer(h)}},function(e){var t=function(t){return e(e.s=t)};t(9877),t(71014)}]);
//# sourceMappingURL=vector-label-decluttering.js.map