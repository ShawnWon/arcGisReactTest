"use strict";(self.webpackChunkarcgisdemo=self.webpackChunkarcgisdemo||[]).push([[2846],{61156:function(n,t,e){e.d(t,{A:function(){return A},B:function(){return S},C:function(){return I},D:function(){return V},E:function(){return j},F:function(){return k},G:function(){return C},H:function(){return D},I:function(){return H},J:function(){return L},K:function(){return O},a:function(){return c},b:function(){return f},c:function(){return o},d:function(){return s},e:function(){return u},f:function(){return a},g:function(){return _},h:function(){return l},i:function(){return h},j:function(){return d},k:function(){return m},l:function(){return N},m:function(){return Z},n:function(){return y},o:function(){return g},p:function(){return M},q:function(){return z},r:function(){return G},s:function(){return x},t:function(){return p},u:function(){return w},v:function(){return E},w:function(){return v},x:function(){return P},y:function(){return R},z:function(){return b}});var r=e(99058),i=e(40237);function u(n){return r.G.extendedSpatialReferenceInfo(n)}function o(n,t,e){return r.G.clip(i.N,n,t,e)}function c(n,t,e){return r.G.cut(i.N,n,t,e)}function f(n,t,e){return r.G.contains(i.N,n,t,e)}function s(n,t,e){return r.G.crosses(i.N,n,t,e)}function a(n,t,e,u){return r.G.distance(i.N,n,t,e,u)}function l(n,t,e){return r.G.equals(i.N,n,t,e)}function h(n,t,e){return r.G.intersects(i.N,n,t,e)}function p(n,t,e){return r.G.touches(i.N,n,t,e)}function v(n,t,e){return r.G.within(i.N,n,t,e)}function d(n,t,e){return r.G.disjoint(i.N,n,t,e)}function g(n,t,e){return r.G.overlaps(i.N,n,t,e)}function G(n,t,e,u){return r.G.relate(i.N,n,t,e,u)}function m(n,t){return r.G.isSimple(i.N,n,t)}function x(n,t){return r.G.simplify(i.N,n,t)}function N(n,t){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.G.convexHull(i.N,n,t,e)}function Z(n,t,e){return r.G.difference(i.N,n,t,e)}function y(n,t,e){return r.G.symmetricDifference(i.N,n,t,e)}function M(n,t,e){return r.G.intersect(i.N,n,t,e)}function w(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return r.G.union(i.N,n,t,e)}function z(n,t,e,u,o,c,f){return r.G.offset(i.N,n,t,e,u,o,c,f)}function E(n,t,e,u){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];return r.G.buffer(i.N,n,t,e,u,o)}function P(n,t,e,u,o,c,f){return r.G.geodesicBuffer(i.N,n,t,e,u,o,c,f)}function R(n,t,e){var u=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return r.G.nearestCoordinate(i.N,n,t,e,u)}function b(n,t,e){return r.G.nearestVertex(i.N,n,t,e)}function A(n,t,e,u,o){return r.G.nearestVertices(i.N,n,t,e,u,o)}function S(n,t,e,i){if(null==t||null==i)throw new Error("Illegal Argument Exception");var u=r.G.rotate(t,e,i);return u.spatialReference=n,u}function I(n,t,e){if(null==t||null==e)throw new Error("Illegal Argument Exception");var i=r.G.flipHorizontal(t,e);return i.spatialReference=n,i}function V(n,t,e){if(null==t||null==e)throw new Error("Illegal Argument Exception");var i=r.G.flipVertical(t,e);return i.spatialReference=n,i}function j(n,t,e,u,o){return r.G.generalize(i.N,n,t,e,u,o)}function k(n,t,e,u){return r.G.densify(i.N,n,t,e,u)}function C(n,t,e,u){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return r.G.geodesicDensify(i.N,n,t,e,u,o)}function D(n,t,e){return r.G.planarArea(i.N,n,t,e)}function H(n,t,e){return r.G.planarLength(i.N,n,t,e)}function L(n,t,e,u){return r.G.geodesicArea(i.N,n,t,e,u)}function O(n,t,e,u){return r.G.geodesicLength(i.N,n,t,e,u)}var _=Object.freeze(Object.defineProperty({__proto__:null,extendedSpatialReferenceInfo:u,clip:o,cut:c,contains:f,crosses:s,distance:a,equals:l,intersects:h,touches:p,within:v,disjoint:d,overlaps:g,relate:G,isSimple:m,simplify:x,convexHull:N,difference:Z,symmetricDifference:y,intersect:M,union:w,offset:z,buffer:E,geodesicBuffer:P,nearestCoordinate:R,nearestVertex:b,nearestVertices:A,rotate:S,flipHorizontal:I,flipVertical:V,generalize:j,densify:k,geodesicDensify:C,planarArea:D,planarLength:H,geodesicArea:L,geodesicLength:O},Symbol.toStringTag,{value:"Module"}))},40237:function(n,t,e){e.d(t,{N:function(){return u}});var r=e(43144),i=e(15671),u={convertToGEGeometry:function(n,t){return null==t?null:n.convertJSONToGeometry(t)},exportPoint:function(n,t,e){var r=new o(n.getPointX(t),n.getPointY(t),e),i=n.hasZ(t),u=n.hasM(t);return i&&(r.z=n.getPointZ(t)),u&&(r.m=n.getPointM(t)),r},exportPolygon:function(n,t,e){return new c(n.exportPaths(t),e,n.hasZ(t),n.hasM(t))},exportPolyline:function(n,t,e){return new f(n.exportPaths(t),e,n.hasZ(t),n.hasM(t))},exportMultipoint:function(n,t,e){return new s(n.exportPoints(t),e,n.hasZ(t),n.hasM(t))},exportExtent:function(n,t,e){var r=n.hasZ(t),i=n.hasM(t),u=new a(n.getXMin(t),n.getYMin(t),n.getXMax(t),n.getYMax(t),e);if(r){var o=n.getZExtent(t);u.zmin=o.vmin,u.zmax=o.vmax}if(i){var c=n.getMExtent(t);u.mmin=c.vmin,u.mmax=c.vmax}return u}};var o=(0,r.Z)((function n(t,e,r){(0,i.Z)(this,n),this.x=t,this.y=e,this.spatialReference=r,this.z=void 0,this.m=void 0}));var c=(0,r.Z)((function n(t,e,r,u){(0,i.Z)(this,n),this.rings=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,r&&(this.hasZ=r),u&&(this.hasM=u)}));var f=(0,r.Z)((function n(t,e,r,u){(0,i.Z)(this,n),this.paths=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,r&&(this.hasZ=r),u&&(this.hasM=u)}));var s=(0,r.Z)((function n(t,e,r,u){(0,i.Z)(this,n),this.points=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,r&&(this.hasZ=r),u&&(this.hasM=u)}));var a=(0,r.Z)((function n(t,e,r,u,o){(0,i.Z)(this,n),this.xmin=t,this.ymin=e,this.xmax=r,this.ymax=u,this.spatialReference=o,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}))},92846:function(n,t,e){e.r(t),e.d(t,{executeGEOperation:function(){return u}});var r=e(93433),i=e(61156);function u(n){return i.g[n.operation].apply(void 0,(0,r.Z)(n.parameters))}}}]);
//# sourceMappingURL=2846.f3668dca.chunk.js.map