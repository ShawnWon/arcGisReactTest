"use strict";(self.webpackChunkarcgisdemo=self.webpackChunkarcgisdemo||[]).push([[767],{13491:function(t,n,e){e.d(n,{Q:function(){return f}});var i=e(60136),a=e(54062),r=e(37762),h=e(15671),o=e(43144),s=e(63780),l=e(92026),u=e(27546),c=e(36231),f=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,e=arguments.length>1?arguments[1]:void 0;(0,h.Z)(this,t),this.compareMinX=x,this.compareMinY=p,this._toBBox=function(t){return t},this._maxEntries=Math.max(4,n||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),e&&("function"==typeof e?this._toBBox=e:this._initFormat(e)),this.clear()}return(0,o.Z)(t,[{key:"destroy",value:function(){this.clear(),k.prune(),Z.prune(),w.prune(),b.prune()}},{key:"all",value:function(t){this._all(this.data,t)}},{key:"search",value:function(t,n){var e=this.data,i=this._toBBox;if(Y(t,e))for(k.clear();e;){for(var a=0,r=e.children.length;a<r;a++){var h=e.children[a],o=e.leaf?i(h):h;Y(t,o)&&(e.leaf?n(h):X(t,o)?this._all(h,n):k.push(h))}e=k.pop()}}},{key:"collides",value:function(t){var n=this.data,e=this._toBBox;if(!Y(t,n))return!1;for(k.clear();n;){for(var i=0,a=n.children.length;i<a;i++){var r=n.children[i],h=n.leaf?e(r):r;if(Y(t,h)){if(n.leaf||X(t,h))return!0;k.push(r)}}n=k.pop()}return!1}},{key:"load",value:function(t){if(!t.length)return this;if(t.length<this._minEntries){for(var n=0,e=t.length;n<e;n++)this.insert(t[n]);return this}var i=this._build(t.slice(0,t.length),0,t.length-1,0);if(this.data.children.length)if(this.data.height===i.height)this._splitRoot(this.data,i);else{if(this.data.height<i.height){var a=this.data;this.data=i,i=a}this._insert(i,this.data.height-i.height-1,!0)}else this.data=i;return this}},{key:"insert",value:function(t){return t&&this._insert(t,this.data.height-1),this}},{key:"clear",value:function(){return this.data=new S([]),this}},{key:"remove",value:function(t){if(!t)return this;var n,e=this.data,i=null,a=0,r=!1,h=this._toBBox(t);for(w.clear(),b.clear();e||w.length>0;){var o;if(e||(e=(0,l.j0)(w.pop()),i=w.data[w.length-1],a=null!==(o=b.pop())&&void 0!==o?o:0,r=!0),e.leaf&&-1!==(n=(0,s.cq)(e.children,t,e.children.length,e.indexHint)))return e.children.splice(n,1),w.push(e),this._condense(w),this;r||e.leaf||!X(e,h)?i?(a++,e=i.children[a],r=!1):e=null:(w.push(e),b.push(a),a=0,i=e,e=e.children[0])}return this}},{key:"toJSON",value:function(){return this.data}},{key:"fromJSON",value:function(t){return this.data=t,this}},{key:"_all",value:function(t,n){var e=t;for(Z.clear();e;){var i;if(!0===e.leaf){var a,h=(0,r.Z)(e.children);try{for(h.s();!(a=h.n()).done;){n(a.value)}}catch(o){h.e(o)}finally{h.f()}}else Z.pushArray(e.children);e=null!==(i=Z.pop())&&void 0!==i?i:null}}},{key:"_build",value:function(t,n,e,i){var a=e-n+1,r=this._maxEntries;if(a<=r){var h=new S(t.slice(n,e+1));return m(h,this._toBBox),h}i||(i=Math.ceil(Math.log(a)/Math.log(r)),r=Math.ceil(a/Math.pow(r,i-1)));var o=new I([]);o.height=i;var s=Math.ceil(a/r),l=s*Math.ceil(Math.sqrt(r));B(t,n,e,l,this.compareMinX);for(var u=n;u<=e;u+=l){var c=Math.min(u+l-1,e);B(t,u,c,s,this.compareMinY);for(var f=u;f<=c;f+=s){var d=Math.min(f+s-1,c);o.children.push(this._build(t,f,d,i-1))}}return m(o,this._toBBox),o}},{key:"_chooseSubtree",value:function(t,n,e,i){for(;i.push(n),!0!==n.leaf&&i.length-1!==e;){for(var a=void 0,r=1/0,h=1/0,o=0,s=n.children.length;o<s;o++){var l=n.children[o],u=_(l),c=M(t,l)-u;c<h?(h=c,r=u<r?u:r,a=l):c===h&&u<r&&(r=u,a=l)}n=a||n.children[0]}return n}},{key:"_insert",value:function(t,n,e){var i=this._toBBox,a=e?t:i(t);w.clear();var r=this._chooseSubtree(a,this.data,n,w);for(r.children.push(t),v(r,a);n>=0&&w.data[n].children.length>this._maxEntries;)this._split(w,n),n--;this._adjustParentBBoxes(a,w,n)}},{key:"_split",value:function(t,n){var e=t.data[n],i=e.children.length,a=this._minEntries;this._chooseSplitAxis(e,a,i);var r=this._chooseSplitIndex(e,a,i);if(r){var h=e.children.splice(r,e.children.length-r),o=e.leaf?new S(h):new I(h);o.height=e.height,m(e,this._toBBox),m(o,this._toBBox),n?t.data[n-1].children.push(o):this._splitRoot(e,o)}else console.log("  Error: assertion failed at PooledRBush._split: no valid split index")}},{key:"_splitRoot",value:function(t,n){this.data=new I([t,n]),this.data.height=t.height+1,m(this.data,this._toBBox)}},{key:"_chooseSplitIndex",value:function(t,n,e){var i,a,r;i=a=1/0;for(var h=n;h<=e-n;h++){var o=d(t,0,h,this._toBBox),s=d(t,h,e,this._toBBox),l=y(o,s),u=_(o)+_(s);l<i?(i=l,r=h,a=u<a?u:a):l===i&&u<a&&(a=u,r=h)}return r}},{key:"_chooseSplitAxis",value:function(t,n,e){var i=t.leaf?this.compareMinX:x,a=t.leaf?this.compareMinY:p;this._allDistMargin(t,n,e,i)<this._allDistMargin(t,n,e,a)&&t.children.sort(i)}},{key:"_allDistMargin",value:function(t,n,e,i){t.children.sort(i);for(var a=this._toBBox,r=d(t,0,n,a),h=d(t,e-n,e,a),o=g(r)+g(h),s=n;s<e-n;s++){var l=t.children[s];v(r,t.leaf?a(l):l),o+=g(r)}for(var u=e-n-1;u>=n;u--){var c=t.children[u];v(h,t.leaf?a(c):c),o+=g(h)}return o}},{key:"_adjustParentBBoxes",value:function(t,n,e){for(var i=e;i>=0;i--)v(n.data[i],t)}},{key:"_condense",value:function(t){for(var n=t.length-1;n>=0;n--){var e=t.data[n];if(0===e.children.length)if(n>0){var i=t.data[n-1],a=i.children;a.splice((0,s.cq)(a,e,a.length,i.indexHint),1)}else this.clear();else m(e,this._toBBox)}}},{key:"_initFormat",value:function(t){var n=["return a"," - b",";"];this.compareMinX=new Function("a","b",n.join(t[0])),this.compareMinY=new Function("a","b",n.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}]),t}();function m(t,n){d(t,0,t.children.length,n,t)}function d(t,n,e,i,a){a||(a=new S([])),a.minX=1/0,a.minY=1/0,a.maxX=-1/0,a.maxY=-1/0;for(var r,h=n;h<e;h++)r=t.children[h],v(a,t.leaf?i(r):r);return a}function v(t,n){t.minX=Math.min(t.minX,n.minX),t.minY=Math.min(t.minY,n.minY),t.maxX=Math.max(t.maxX,n.maxX),t.maxY=Math.max(t.maxY,n.maxY)}function x(t,n){return t.minX-n.minX}function p(t,n){return t.minY-n.minY}function _(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function g(t){return t.maxX-t.minX+(t.maxY-t.minY)}function M(t,n){return(Math.max(n.maxX,t.maxX)-Math.min(n.minX,t.minX))*(Math.max(n.maxY,t.maxY)-Math.min(n.minY,t.minY))}function y(t,n){var e=Math.max(t.minX,n.minX),i=Math.max(t.minY,n.minY),a=Math.min(t.maxX,n.maxX),r=Math.min(t.maxY,n.maxY);return Math.max(0,a-e)*Math.max(0,r-i)}function X(t,n){return t.minX<=n.minX&&t.minY<=n.minY&&n.maxX<=t.maxX&&n.maxY<=t.maxY}function Y(t,n){return n.minX<=t.maxX&&n.minY<=t.maxY&&n.maxX>=t.minX&&n.maxY>=t.minY}function B(t,n,e,i,a){for(var r=[n,e];r.length;){var h=(0,l.j0)(r.pop()),o=(0,l.j0)(r.pop());if(!(h-o<=i)){var s=o+Math.ceil((h-o)/i/2)*i;(0,c.q)(t,s,o,h,a),r.push(o,s,s,h)}}}var k=new u.Z,Z=new u.Z,w=new u.Z,b=new u.Z({deallocator:void 0}),A=function(t){(0,i.Z)(e,t);var n=(0,a.Z)(e);function e(){var t;return(0,h.Z)(this,e),(t=n.apply(this,arguments)).height=1,t.indexHint=new s.SO,t}return(0,o.Z)(e)}((0,o.Z)((function t(){(0,h.Z)(this,t),this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}))),S=function(t){(0,i.Z)(e,t);var n=(0,a.Z)(e);function e(t){var i;return(0,h.Z)(this,e),(i=n.call(this)).children=t,i.leaf=!0,i}return(0,o.Z)(e)}(A),I=function(t){(0,i.Z)(e,t);var n=(0,a.Z)(e);function e(t){var i;return(0,h.Z)(this,e),(i=n.call(this)).children=t,i.leaf=!1,i}return(0,o.Z)(e)}(A)},30767:function(t,n,e){e.r(n),e.d(n,{default:function(){return f}});var i=e(37762),a=e(74165),r=e(15861),h=e(15671),o=e(43144),s=e(93169),l=e(92026),u=e(13491),c=e(57898),f=function(){function t(){(0,h.Z)(this,t)}return(0,o.Z)(t,[{key:"createIndex",value:function(){var t=(0,r.Z)((0,a.Z)().mark((function t(n,e){var i,r,h;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=new Array,n.vertexAttributes&&n.vertexAttributes.position){t.next=3;break}return t.abrupt("return",new u.Q);case 3:if(r=this._createMeshData(n),!(0,l.pC)(e)){t.next=10;break}return t.next=7,e.invoke("createIndexThread",r,{transferList:i});case 7:t.t0=t.sent,t.next=11;break;case 10:t.t0=this.createIndexThread(r).result;case 11:return h=t.t0,t.abrupt("return",this._createPooledRBush().fromJSON(h));case 13:case"end":return t.stop()}}),t,this)})));return function(n,e){return t.apply(this,arguments)}}()},{key:"createIndexThread",value:function(t){var n=new Float64Array(t.position),e=this._createPooledRBush();return t.components?this._createIndexComponentsThread(e,n,t.components.map((function(t){return new Uint32Array(t)}))):this._createIndexAllThread(e,n)}},{key:"_createIndexAllThread",value:function(t,n){for(var e=new Array(n.length/9),i=0,a=0;a<n.length;a+=9)e[i++]=m(n,a+0,a+3,a+6);return t.load(e),{result:t.toJSON()}}},{key:"_createIndexComponentsThread",value:function(t,n,e){var a,r=0,h=(0,i.Z)(e);try{for(h.s();!(a=h.n()).done;){r+=a.value.length/3}}catch(d){h.e(d)}finally{h.f()}var o,s=new Array(r),l=0,u=(0,i.Z)(e);try{for(u.s();!(o=u.n()).done;)for(var c=o.value,f=0;f<c.length;f+=3)s[l++]=m(n,3*c[f+0],3*c[f+1],3*c[f+2])}catch(d){u.e(d)}finally{u.f()}return t.load(s),{result:t.toJSON()}}},{key:"_createMeshData",value:function(t){var n=(t.transform?(0,c.I5)({position:t.vertexAttributes.position,normal:null,tangent:null},t.transform,t.spatialReference).position:t.vertexAttributes.position).buffer;return!t.components||t.components.some((function(t){return!t.faces}))?{position:n}:{position:n,components:t.components.map((function(t){return t.faces}))}}},{key:"_createPooledRBush",value:function(){return new u.Q(9,(0,s.Z)("esri-csp-restrictions")?function(t){return t}:[".minX",".minY",".maxX",".maxY"])}}]),t}();function m(t,n,e,i){return{minX:Math.min(t[n+0],t[e+0],t[i+0]),maxX:Math.max(t[n+0],t[e+0],t[i+0]),minY:Math.min(t[n+1],t[e+1],t[i+1]),maxY:Math.max(t[n+1],t[e+1],t[i+1]),p0:[t[n+0],t[n+1],t[n+2]],p1:[t[e+0],t[e+1],t[e+2]],p2:[t[i+0],t[i+1],t[i+2]]}}}}]);
//# sourceMappingURL=767.e9ef0905.chunk.js.map