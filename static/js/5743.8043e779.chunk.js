"use strict";(self.webpackChunkarcgisdemo=self.webpackChunkarcgisdemo||[]).push([[5743],{95743:function(e,n,t){t.r(n),t.d(n,{registerFunctions:function(){return b}});var r=t(74165),a=t(15861),s=t(47238),u=t(44715),i=t(28113),c=t(73954),o=t(32238),l=t(84178);function f(e){return e instanceof o.Z}function p(e,n,t,p){return p(e,n,function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,a,p){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(p.length<2)){e.next=2;break}throw new Error("Missing Parameters");case 2:if(null!==(p=(0,u.H)(p))[0]||null!==p[1]){e.next=4;break}return e.abrupt("return",!1);case 4:if(!(0,u.y)(p[0])){e.next=10;break}if(!(p[1]instanceof o.Z)){e.next=7;break}return e.abrupt("return",new i.Z({parentfeatureset:p[0],relation:t,relationGeom:p[1]}));case 7:if(null!==p[1]){e.next=9;break}return e.abrupt("return",new c.Z({parentfeatureset:p[0]}));case 9:case 27:throw new Error("Spatial Relation cannot accept this parameter type");case 10:if(!f(p[0])){e.next=28;break}if(!f(p[1])){e.next=23;break}e.t0=t,e.next="esriSpatialRelEnvelopeIntersects"===e.t0?15:"esriSpatialRelIntersects"===e.t0?16:"esriSpatialRelContains"===e.t0?17:"esriSpatialRelOverlaps"===e.t0?18:"esriSpatialRelWithin"===e.t0?19:"esriSpatialRelTouches"===e.t0?20:"esriSpatialRelCrosses"===e.t0?21:22;break;case 15:return e.abrupt("return",(0,l.kK)((0,s.SV)(p[0]),(0,s.SV)(p[1])));case 16:return e.abrupt("return",(0,l.kK)(p[0],p[1]));case 17:return e.abrupt("return",(0,l.r3)(p[0],p[1]));case 18:return e.abrupt("return",(0,l.Nm)(p[0],p[1]));case 19:return e.abrupt("return",(0,l.uh)(p[0],p[1]));case 20:return e.abrupt("return",(0,l.W4)(p[0],p[1]));case 21:return e.abrupt("return",(0,l.jU)(p[0],p[1]));case 22:throw new Error("Unrecognised Relationship");case 23:if(!(0,u.y)(p[1])){e.next=25;break}return e.abrupt("return",new i.Z({parentfeatureset:p[1],relation:t,relationGeom:p[0]}));case 25:if(null!==p[1]){e.next=27;break}return e.abrupt("return",!1);case 28:if(null===p[0]){e.next=30;break}throw new Error("Spatial Relation cannot accept this parameter type");case 30:return e.abrupt("return",(0,u.y)(p[1])?new c.Z({parentfeatureset:p[1]}):!(p[1]instanceof o.Z||null===p[1])&&void 0);case 31:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}())}function b(e){"async"===e.mode&&(e.functions.intersects=function(n,t){return p(n,t,"esriSpatialRelIntersects",e.standardFunctionAsync)},e.functions.envelopeintersects=function(n,t){return p(n,t,"esriSpatialRelEnvelopeIntersects",e.standardFunctionAsync)},e.signatures.push({name:"envelopeintersects",min:"2",max:"2"}),e.functions.contains=function(n,t){return p(n,t,"esriSpatialRelContains",e.standardFunctionAsync)},e.functions.overlaps=function(n,t){return p(n,t,"esriSpatialRelOverlaps",e.standardFunctionAsync)},e.functions.within=function(n,t){return p(n,t,"esriSpatialRelWithin",e.standardFunctionAsync)},e.functions.touches=function(n,t){return p(n,t,"esriSpatialRelTouches",e.standardFunctionAsync)},e.functions.crosses=function(n,t){return p(n,t,"esriSpatialRelCrosses",e.standardFunctionAsync)},e.functions.relate=function(n,t){return e.standardFunctionAsync(n,t,(function(e,n,t){if(t=(0,u.H)(t),(0,u.p)(t,3,3),f(t[0])&&f(t[1]))return(0,l.LV)(t[0],t[1],(0,u.h)(t[2]));if(t[0]instanceof o.Z&&null===t[1])return!1;if(t[1]instanceof o.Z&&null===t[0])return!1;if((0,u.y)(t[0])&&null===t[1])return new c.Z({parentfeatureset:t[0]});if((0,u.y)(t[1])&&null===t[0])return new c.Z({parentfeatureset:t[1]});if((0,u.y)(t[0])&&t[1]instanceof o.Z)return t[0].relate(t[1],(0,u.h)(t[2]));if((0,u.y)(t[1])&&t[0]instanceof o.Z)return t[1].relate(t[0],(0,u.h)(t[2]));if(null===t[0]&&null===t[1])return!1;throw new Error("Illegal Argument")}))})}}}]);
//# sourceMappingURL=5743.8043e779.chunk.js.map