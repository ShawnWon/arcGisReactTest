"use strict";(self.webpackChunkarcgisdemo=self.webpackChunkarcgisdemo||[]).push([[5021],{25021:function(e,r,t){t.r(r),t.d(r,{getGeometryServiceURL:function(){return N},projectGeometry:function(){return j}});var n=t(74165),o=t(15861),i=t(42265),a=t(10064),s=t(70032),u=t(1413),c=t(76200),f=t(25243),l=t(77981),p=t(23084);function m(e,r,t){var n=(0,l.q9)(r);return e.map((function(e){var r=n.fromJSON(e);return r.spatialReference=t,r}))}var h=t(15671),g=t(43144),v=t(60136),d=t(54062),y=t(27366),w=t(46784),S=t(49861),Z=(t(63780),t(93169),t(69912)),k=function(e){(0,v.Z)(t,e);var r=(0,d.Z)(t);function t(e){var n;return(0,h.Z)(this,t),(n=r.call(this,e)).geometries=null,n.outSpatialReference=null,n.transformation=null,n.transformForward=null,n}return(0,g.Z)(t,[{key:"toJSON",value:function(){var e=this.geometries.map((function(e){return e.toJSON()})),r=this.geometries[0],t={};return t.outSR=this.outSpatialReference.wkid||JSON.stringify(this.outSpatialReference.toJSON()),t.inSR=r.spatialReference.wkid||JSON.stringify(r.spatialReference.toJSON()),t.geometries=JSON.stringify({geometryType:(0,l.Ji)(r),geometries:e}),this.transformation&&(t.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),null!=this.transformForward&&(t.transformForward=this.transformForward),t}}]),t}(w.wq);(0,y._)([(0,S.Cb)()],k.prototype,"geometries",void 0),(0,y._)([(0,S.Cb)({json:{read:{source:"outSR"}}})],k.prototype,"outSpatialReference",void 0),(0,y._)([(0,S.Cb)()],k.prototype,"transformation",void 0),(0,y._)([(0,S.Cb)()],k.prototype,"transformForward",void 0);var b=k=(0,y._)([(0,Z.j)("esri.rest.support.ProjectParameters")],k),R=(0,f.se)(b);function J(e,r,t){return x.apply(this,arguments)}function x(){return x=(0,o.Z)((0,n.Z)().mark((function e(r,t,o){var i,a,s,f,h;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=R(t),i=(0,p.en)(r),a=(0,u.Z)((0,u.Z)({},i.query),{},{f:"json"},t.toJSON()),s=t.outSpatialReference,f=(0,l.Ji)(t.geometries[0]),h=(0,p.lA)(a,o),e.abrupt("return",(0,c.default)(i.path+"/project",h).then((function(e){return m(e.data.geometries,f,s)})));case 3:case"end":return e.stop()}}),e)}))),x.apply(this,arguments)}function N(){return O.apply(this,arguments)}function O(){return O=(0,o.Z)((0,n.Z)().mark((function e(){var r,t,o,u,c,f,l=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=l.length>0&&void 0!==l[0]?l[0]:null,u=l.length>1?l[1]:void 0,!i.Z.geometryServiceUrl){e.next=4;break}return e.abrupt("return",i.Z.geometryServiceUrl);case 4:if(o){e.next=6;break}throw new a.Z("internal:geometry-service-url-not-configured");case 6:return c="portal"in o?o.portal||s.Z.getDefault():o,e.next=9,c.load({signal:u});case 9:if(f=null===(r=c.helperServices)||void 0===r||null===(t=r.geometry)||void 0===t?void 0:t.url){e.next=12;break}throw new a.Z("internal:geometry-service-url-not-configured");case 12:return e.abrupt("return",f);case 13:case"end":return e.stop()}}),e)}))),O.apply(this,arguments)}function j(e,r){return C.apply(this,arguments)}function C(){return C=(0,o.Z)((0,n.Z)().mark((function e(r,t){var o,i,s,u,c,f=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=f.length>2&&void 0!==f[2]?f[2]:null,i=f.length>3?f[3]:void 0,e.next=4,N(o,i);case 4:return s=e.sent,(u=new b).geometries=[r],u.outSpatialReference=t,e.next=9,J(s,u,{signal:i});case 9:if(!(c=e.sent)||!Array.isArray(c)||1!==c.length){e.next=12;break}return e.abrupt("return",c[0]);case 12:throw new a.Z("internal:geometry-service-projection-failed");case 13:case"end":return e.stop()}}),e)}))),C.apply(this,arguments)}}}]);
//# sourceMappingURL=5021.0420c8aa.chunk.js.map