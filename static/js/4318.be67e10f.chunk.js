"use strict";(self.webpackChunkarcgisdemo=self.webpackChunkarcgisdemo||[]).push([[4318],{48035:function(i,t,e){e.d(t,{b:function(){return v},j:function(){return y}});var s=e(74165),n=e(15861),h=e(65905),r=e(93169),x=null,a=null;function y(){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)((0,s.Z)().mark((function i(){return(0,s.Z)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(x||(x=u()),x));case 1:case"end":return i.stop()}}),i)})))).apply(this,arguments)}function u(){return o.apply(this,arguments)}function o(){return o=(0,n.Z)((0,s.Z)().mark((function i(){var t;return(0,s.Z)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!(0,r.Z)("esri-csp-restrictions")){i.next=6;break}return i.next=3,e.e(5948).then(e.bind(e,5948)).then((function(i){return i.l}));case 3:i.t0=i.sent,i.next=9;break;case 6:return i.next=8,e.e(7069).then(e.bind(e,97069)).then((function(i){return i.l}));case 8:i.t0=i.sent;case 9:return t=i.t0,i.next=12,t.load({locateFile:function(i){return(0,h.V)("esri/core/libs/libtess/".concat(i))}});case 12:a=i.sent;case 13:case"end":return i.stop()}}),i)}))),o.apply(this,arguments)}function v(i,t){var e=Math.max(i.length,128e3);return a.triangulate(i,t,e)}},60652:function(i,t,e){e.d(t,{E:function(){return r},V:function(){return s}});var s,n=e(15671),h=e(43144),r=function(){function i(t,e){(0,n.Z)(this,i),this.x=t,this.y=e}return(0,h.Z)(i,[{key:"clone",value:function(){return new i(this.x,this.y)}},{key:"equals",value:function(i,t){return i===this.x&&t===this.y}},{key:"isEqual",value:function(i){return i.x===this.x&&i.y===this.y}},{key:"setCoords",value:function(i,t){this.x=i,this.y=t}},{key:"normalize",value:function(){var i=this.x,t=this.y,e=Math.sqrt(i*i+t*t);this.x/=e,this.y/=e}},{key:"rightPerpendicular",value:function(){var i=this.x;this.x=this.y,this.y=-i}},{key:"move",value:function(i,t){this.x+=i,this.y+=t}},{key:"assign",value:function(i){this.x=i.x,this.y=i.y}},{key:"assignAdd",value:function(i,t){this.x=i.x+t.x,this.y=i.y+t.y}},{key:"assignSub",value:function(i,t){this.x=i.x-t.x,this.y=i.y-t.y}},{key:"rotate",value:function(i,t){var e=this.x,s=this.y;this.x=e*i-s*t,this.y=e*t+s*i}},{key:"scale",value:function(i){this.x*=i,this.y*=i}},{key:"length",value:function(){var i=this.x,t=this.y;return Math.sqrt(i*i+t*t)}}],[{key:"distance",value:function(i,t){var e=t.x-i.x,s=t.y-i.y;return Math.sqrt(e*e+s*s)}},{key:"add",value:function(t,e){return new i(t.x+e.x,t.y+e.y)}},{key:"sub",value:function(t,e){return new i(t.x-e.x,t.y-e.y)}}]),i}();!function(i){i[i.Unknown=0]="Unknown",i[i.Point=1]="Point",i[i.LineString=2]="LineString",i[i.Polygon=3]="Polygon"}(s||(s={}))},91623:function(i,t,e){e.d(t,{I:function(){return o},b:function(){return u}});var s,n,h=e(43144),r=e(15671),x=e(94109),a=e(60652),y=e(13200),l=(0,h.Z)((function i(t,e,s){(0,r.Z)(this,i),this.ratio=t,this.x=e,this.y=s})),u=function(){function i(t,e,s){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:8,h=arguments.length>4&&void 0!==arguments[4]?arguments[4]:8;(0,r.Z)(this,i),this.lines=[],this.starts=[],this.validateTessellation=!0,this.pixelRatio=n,this.pixelMargin=h,this.tileSize=x.I_*n,this.dz=t,this.yPos=e,this.xPos=s}return(0,h.Z)(i,[{key:"setPixelMargin",value:function(i){i!==this.pixelMargin&&(this.pixelMargin=i,this.setExtent(this._extent))}},{key:"setExtent",value:function(i){this._extent=i,this.finalRatio=this.tileSize/i*(1<<this.dz);var t=this.pixelRatio*this.pixelMargin;t/=this.finalRatio;var e=i>>this.dz;t>e&&(t=e),this.margin=t,this.xmin=e*this.xPos-t,this.ymin=e*this.yPos-t,this.xmax=this.xmin+e+2*t,this.ymax=this.ymin+e+2*t}},{key:"reset",value:function(i){this.type=i,this.lines=[],this.starts=[],this.line=null,this.start=0}},{key:"moveTo",value:function(i,t){this._pushLine(),this._prevIsIn=this._isIn(i,t),this._moveTo(i,t,this._prevIsIn),this._prevPt=new a.E(i,t),this._firstPt=new a.E(i,t),this._dist=0}},{key:"lineTo",value:function(i,t){var e,s,n,h,r,x,y,u,o=this._isIn(i,t),v=new a.E(i,t),f=a.E.distance(this._prevPt,v);if(o)this._prevIsIn?this._lineTo(i,t,!0):(e=this._prevPt,s=v,n=this._intersect(s,e),this.start=this._dist+f*(1-this._r),this._lineTo(n.x,n.y,!0),this._lineTo(s.x,s.y,!0));else if(this._prevIsIn)s=this._prevPt,e=v,n=this._intersect(s,e),this._lineTo(n.x,n.y,!0),this._lineTo(e.x,e.y,!1);else{var c=this._prevPt,m=v;if(c.x<=this.xmin&&m.x<=this.xmin||c.x>=this.xmax&&m.x>=this.xmax||c.y<=this.ymin&&m.y<=this.ymin||c.y>=this.ymax&&m.y>=this.ymax)this._lineTo(m.x,m.y,!1);else{var d=[];if((c.x<this.xmin&&m.x>this.xmin||c.x>this.xmin&&m.x<this.xmin)&&(h=(this.xmin-c.x)/(m.x-c.x),(u=c.y+h*(m.y-c.y))<=this.ymin?x=!1:u>=this.ymax?x=!0:d.push(new l(h,this.xmin,u))),(c.x<this.xmax&&m.x>this.xmax||c.x>this.xmax&&m.x<this.xmax)&&(h=(this.xmax-c.x)/(m.x-c.x),(u=c.y+h*(m.y-c.y))<=this.ymin?x=!1:u>=this.ymax?x=!0:d.push(new l(h,this.xmax,u))),(c.y<this.ymin&&m.y>this.ymin||c.y>this.ymin&&m.y<this.ymin)&&(h=(this.ymin-c.y)/(m.y-c.y),(y=c.x+h*(m.x-c.x))<=this.xmin?r=!1:y>=this.xmax?r=!0:d.push(new l(h,y,this.ymin))),(c.y<this.ymax&&m.y>this.ymax||c.y>this.ymax&&m.y<this.ymax)&&(h=(this.ymax-c.y)/(m.y-c.y),(y=c.x+h*(m.x-c.x))<=this.xmin?r=!1:y>=this.xmax?r=!0:d.push(new l(h,y,this.ymax))),0===d.length)r?x?this._lineTo(this.xmax,this.ymax,!0):this._lineTo(this.xmax,this.ymin,!0):x?this._lineTo(this.xmin,this.ymax,!0):this._lineTo(this.xmin,this.ymin,!0);else if(d.length>1&&d[0].ratio>d[1].ratio)this.start=this._dist+f*d[1].ratio,this._lineTo(d[1].x,d[1].y,!0),this._lineTo(d[0].x,d[0].y,!0);else{this.start=this._dist+f*d[0].ratio;for(var p=0;p<d.length;p++)this._lineTo(d[p].x,d[p].y,!0)}this._lineTo(m.x,m.y,!1)}}this._dist+=f,this._prevIsIn=o,this._prevPt=v}},{key:"close",value:function(){if(this.line.length>2){var i=this._firstPt,t=this._prevPt;i.x===t.x&&i.y===t.y||this.lineTo(i.x,i.y);for(var e=this.line,s=e.length;s>=4&&(e[0].x===e[1].x&&e[0].x===e[s-2].x||e[0].y===e[1].y&&e[0].y===e[s-2].y);)e.pop(),e[0].x=e[s-2].x,e[0].y=e[s-2].y,--s}}},{key:"result",value:function(){var i=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this._pushLine(),0===this.lines.length?null:(this.type===a.V.Polygon&&i&&v.simplify(this.tileSize,this.margin*this.finalRatio,this.lines),this.lines)}},{key:"resultWithStarts",value:function(){if(this.type!==a.V.LineString)throw new Error("Only valid for lines");this._pushLine();var i=this.lines,t=i.length;if(0===t)return null;for(var e=[],s=0;s<t;s++)e.push({line:i[s],start:this.starts[s]||0});return e}},{key:"_isIn",value:function(i,t){return i>=this.xmin&&i<=this.xmax&&t>=this.ymin&&t<=this.ymax}},{key:"_intersect",value:function(i,t){var e,s,n;if(t.x>=this.xmin&&t.x<=this.xmax)n=((s=t.y<=this.ymin?this.ymin:this.ymax)-i.y)/(t.y-i.y),e=i.x+n*(t.x-i.x);else if(t.y>=this.ymin&&t.y<=this.ymax)n=((e=t.x<=this.xmin?this.xmin:this.xmax)-i.x)/(t.x-i.x),s=i.y+n*(t.y-i.y);else{s=t.y<=this.ymin?this.ymin:this.ymax;var h=((e=t.x<=this.xmin?this.xmin:this.xmax)-i.x)/(t.x-i.x),r=(s-i.y)/(t.y-i.y);h<r?(n=h,s=i.y+h*(t.y-i.y)):(n=r,e=i.x+r*(t.x-i.x))}return this._r=n,new a.E(e,s)}},{key:"_pushLine",value:function(){this.line&&(this.type===a.V.Point?this.line.length>0&&(this.lines.push(this.line),this.starts.push(this.start)):this.type===a.V.LineString?this.line.length>1&&(this.lines.push(this.line),this.starts.push(this.start)):this.type===a.V.Polygon&&this.line.length>3&&(this.lines.push(this.line),this.starts.push(this.start))),this.line=[],this.start=0}},{key:"_moveTo",value:function(i,t,e){this.type!==a.V.Polygon?e&&(i=Math.round((i-(this.xmin+this.margin))*this.finalRatio),t=Math.round((t-(this.ymin+this.margin))*this.finalRatio),this.line.push(new a.E(i,t))):(e||(i<this.xmin&&(i=this.xmin),i>this.xmax&&(i=this.xmax),t<this.ymin&&(t=this.ymin),t>this.ymax&&(t=this.ymax)),i=Math.round((i-(this.xmin+this.margin))*this.finalRatio),t=Math.round((t-(this.ymin+this.margin))*this.finalRatio),this.line.push(new a.E(i,t)),this._is_h=!1,this._is_v=!1)}},{key:"_lineTo",value:function(i,t,e){var s,n;if(this.type!==a.V.Polygon)if(e){if(i=Math.round((i-(this.xmin+this.margin))*this.finalRatio),t=Math.round((t-(this.ymin+this.margin))*this.finalRatio),this.line.length>0&&(s=this.line[this.line.length-1]).equals(i,t))return;this.line.push(new a.E(i,t))}else this.line&&this.line.length>0&&this._pushLine();else if(e||(i<this.xmin&&(i=this.xmin),i>this.xmax&&(i=this.xmax),t<this.ymin&&(t=this.ymin),t>this.ymax&&(t=this.ymax)),i=Math.round((i-(this.xmin+this.margin))*this.finalRatio),t=Math.round((t-(this.ymin+this.margin))*this.finalRatio),this.line&&this.line.length>0){var h=(s=this.line[this.line.length-1]).x===i,r=s.y===t;if(h&&r)return;this._is_h&&h||this._is_v&&r?(s.x=i,s.y=t,(n=this.line[this.line.length-2]).x===i&&n.y===t?(this.line.pop(),this.line.length<=1?(this._is_h=!1,this._is_v=!1):(n=this.line[this.line.length-2],this._is_h=n.x===i,this._is_v=n.y===t)):(this._is_h=n.x===i,this._is_v=n.y===t)):(this.line.push(new a.E(i,t)),this._is_h=h,this._is_v=r)}else this.line.push(new a.E(i,t))}}]),i}(),o=function(){function i(){(0,r.Z)(this,i)}return(0,h.Z)(i,[{key:"setExtent",value:function(i){this._ratio=4096===i?1:4096/i}},{key:"validateTessellation",get:function(){return this._ratio<1}},{key:"reset",value:function(i){this.lines=[],this.line=null}},{key:"moveTo",value:function(i,t){this.line&&this.lines.push(this.line),this.line=[];var e=this._ratio;this.line.push(new a.E(i*e,t*e))}},{key:"lineTo",value:function(i,t){var e=this._ratio;this.line.push(new a.E(i*e,t*e))}},{key:"close",value:function(){var i=this.line;i&&!i[0].isEqual(i[i.length-1])&&i.push(i[0])}},{key:"result",value:function(){return this.line&&this.lines.push(this.line),0===this.lines.length?null:this.lines}}]),i}();(n=s||(s={}))[n.sideLeft=0]="sideLeft",n[n.sideRight=1]="sideRight",n[n.sideTop=2]="sideTop",n[n.sideBottom=3]="sideBottom";var v=function(){function i(){(0,r.Z)(this,i)}return(0,h.Z)(i,null,[{key:"simplify",value:function(t,e,n){if(n){for(var h=-e,r=t+e,x=-e,a=t+e,y=[],l=[],u=n.length,o=0;o<u;++o){var v=n[o];if(v&&!(v.length<2))for(var f=void 0,c=v[0],m=v.length,d=1;d<m;++d)f=v[d],c.x===f.x&&(c.x<=h&&(c.y>f.y?(y.push(o),y.push(d),y.push(s.sideLeft),y.push(-1)):(l.push(o),l.push(d),l.push(s.sideLeft),l.push(-1))),c.x>=r&&(c.y<f.y?(y.push(o),y.push(d),y.push(s.sideRight),y.push(-1)):(l.push(o),l.push(d),l.push(s.sideRight),l.push(-1)))),c.y===f.y&&(c.y<=x&&(c.x<f.x?(y.push(o),y.push(d),y.push(s.sideTop),y.push(-1)):(l.push(o),l.push(d),l.push(s.sideTop),l.push(-1))),c.y>=a&&(c.x>f.x?(y.push(o),y.push(d),y.push(s.sideBottom),y.push(-1)):(l.push(o),l.push(d),l.push(s.sideBottom),l.push(-1)))),c=f}if(0!==y.length&&0!==l.length){i.fillParent(n,l,y),i.fillParent(n,y,l);var p=[];i.calcDeltas(p,l,y),i.calcDeltas(p,y,l),i.addDeltas(p,n)}}}},{key:"fillParent",value:function(i,t,e){for(var n=e.length,h=t.length,r=0;r<h;r+=4){for(var x=t[r],a=t[r+1],l=t[r+2],u=i[x][a-1],o=i[x][a],v=8092,f=-1,c=0;c<n;c+=4)if(e[c+2]===l){var m=e[c],d=e[c+1],p=i[m][d-1],g=i[m][d];switch(l){case s.sideLeft:case s.sideRight:if((0,y.vX)(u.y,p.y,g.y)&&(0,y.vX)(o.y,p.y,g.y)){var _=Math.abs(g.y-p.y);_<v&&(v=_,f=c)}break;case s.sideTop:case s.sideBottom:if((0,y.vX)(u.x,p.x,g.x)&&(0,y.vX)(o.x,p.x,g.x)){var w=Math.abs(g.x-p.x);w<v&&(v=w,f=c)}}}t[r+3]=f}}},{key:"calcDeltas",value:function(t,e,s){for(var n=e.length,h=0;h<n;h+=4){var r=i.calcDelta(h,e,s,[]);t.push(e[h]),t.push(e[h+1]),t.push(e[h+2]),t.push(r)}}},{key:"calcDelta",value:function(t,e,s,n){var h=e[t+3];if(-1===h)return 0;var r=n.length;return r>1&&n[r-2]===h?0:(n.push(h),i.calcDelta(h,s,e,n)+1)}},{key:"addDeltas",value:function(i,t){for(var e=i.length,n=0,h=0;h<e;h+=4){var r=i[h+3];r>n&&(n=r)}for(var x=0;x<e;x+=4){var a=t[i[x]],y=i[x+1],l=n-i[x+3];switch(i[x+2]){case s.sideLeft:a[y-1].x-=l,a[y].x-=l,1===y&&(a[a.length-1].x-=l),y===a.length-1&&(a[0].x-=l);break;case s.sideRight:a[y-1].x+=l,a[y].x+=l,1===y&&(a[a.length-1].x+=l),y===a.length-1&&(a[0].x+=l);break;case s.sideTop:a[y-1].y-=l,a[y].y-=l,1===y&&(a[a.length-1].y-=l),y===a.length-1&&(a[0].y-=l);break;case s.sideBottom:a[y-1].y+=l,a[y].y+=l,1===y&&(a[a.length-1].y+=l),y===a.length-1&&(a[0].y+=l)}}}}]),i}()},82010:function(i,t,e){e.d(t,{z:function(){return c}});var s=e(15671),n=e(43144),h=e(48202),r=e(94109);function x(i,t){return i.x===t.x&&i.y===t.y}function a(i,t){return i.x=t.y,i.y=-t.x,i}function y(i,t){return i.x=-t.y,i.y=t.x,i}function l(i,t){return i.x=t.x,i.y=t.y,i}function u(i,t){return i.x=-t.x,i.y=-t.y,i}function o(i){return Math.sqrt(i.x*i.x+i.y*i.y)}function v(i,t){return i.x*t.x+i.y*t.y}function f(i,t,e,s){return i.x=t.x*e+t.y*s,i.y=t.x*s-t.y*e,i}var c=function(){function i(t,e,n){(0,s.Z)(this,i),this.writeVertex=t,this.writeTriangle=e,this.canUseThinTessellation=n,this.prevNormal={x:void 0,y:void 0},this.nextNormal={x:void 0,y:void 0},this.textureNormalLeft={x:0,y:1},this.textureNormalRight={x:0,y:-1},this.textureNormal={x:void 0,y:void 0},this.joinNormal={x:void 0,y:void 0},this.inner={x:void 0,y:void 0},this.outer={x:void 0,y:void 0},this.roundStart={x:void 0,y:void 0},this.roundEnd={x:void 0,y:void 0},this.startBreak={x:void 0,y:void 0},this.endBreak={x:void 0,y:void 0},this.innerPrev={x:void 0,y:void 0},this.innerNext={x:void 0,y:void 0},this.bevelStart={x:void 0,y:void 0},this.bevelEnd={x:void 0,y:void 0},this.bevelMiddle={x:void 0,y:void 0}}return(0,n.Z)(i,[{key:"tessellate",value:function(i,t){(function(i){if(i){var t=i.length;if(!(t<=1)){for(var e=0,s=1;s<t;s++)x(i[s],i[e])||++e===s||(i[e]=i[s]);i.length=e+1}}})(i),this.canUseThinTessellation&&t.halfWidth<r.tQ&&!t.offset?this._tessellateThin(i,t):this._tessellate(i,t)}},{key:"_tessellateThin",value:function(i,t){if(!(i.length<2))for(var e=t.wrapDistance||65535,s=t.initialDistance||0,n=!1,h=i[0].x,r=i[0].y,x=i.length,a=1;a<x;++a){n&&(n=!1,s=0);var y=i[a].x,l=i[a].y,u=y-h,o=l-r,v=Math.sqrt(u*u+o*o);if(u/=v,o/=v,s+v>e){n=!0;var f=(e-s)/v;v=e-s,y=(1-f)*h+f*y,l=(1-f)*r+f*l,--a}var c=this.writeVertex(h,r,0,0,u,o,o,-u,0,-1,s),m=this.writeVertex(h,r,0,0,u,o,-o,u,0,1,s);s+=v;var d=this.writeVertex(y,l,0,0,u,o,o,-u,0,-1,s),p=this.writeVertex(y,l,0,0,u,o,-o,u,0,1,s);this.writeTriangle(c,m,d),this.writeTriangle(m,d,p),h=y,r=l}}},{key:"_tessellate",value:function(i,t){var e=i[0],s=i[i.length-1],n=x(e,s),r=n?3:2;if(!(i.length<r)){var c,m,d,p,g=t.pixelCoordRatio,_=null!=t.capType?t.capType:h.RL.BUTT,w=null!=t.joinType?t.joinType:h.AH.MITER,k=null!=t.miterLimit?Math.min(t.miterLimit,4):2,T=null!=t.roundLimit?Math.min(t.roundLimit,1.05):1.05,R=null!=t.halfWidth?t.halfWidth:2,E=!!t.textured,b=null,V=null,L=this.prevNormal,M=this.nextNormal,P=-1,N=-1,I=this.joinNormal,Z=this.textureNormalLeft,B=this.textureNormalRight,D=this.textureNormal,A=-1,S=-1,U=t.wrapDistance||65535,H=t.initialDistance||0,q=this.writeVertex,z=this.writeTriangle,O=function(i,t,e,s,n,h){var r=q(c,m,d,p,e,s,i,t,n,h,H);return A>=0&&S>=0&&r>=0&&z(A,S,r),A=S,S=r,r};n&&(b=i[i.length-2],M.x=s.x-b.x,M.y=s.y-b.y,N=o(M),M.x/=N,M.y/=N);for(var X,j,C=!1,W=0;W<i.length;++W){if(C&&(C=!1,H=0),b&&(L.x=-M.x,L.y=-M.y,H+(P=N)>U&&(C=!0)),C){var Q=(U-H)/P;P=U-H,b={x:(1-Q)*b.x+Q*i[W].x,y:(1-Q)*b.y+Q*i[W].y},--W}else b=i[W];c=b.x,m=b.y;var F=W<=0&&!C,G=W===i.length-1;if(F||(H+=P),(V=G?n?i[1]:null:i[W+1])?(M.x=V.x-c,M.y=V.y-m,N=o(M),M.x/=N,M.y/=N):(M.x=void 0,M.y=void 0),!n){if(F){y(I,M),d=I.x,p=I.y,_===h.RL.SQUARE&&(O(-M.y-M.x,M.x-M.y,M.x,M.y,0,-1),O(M.y-M.x,-M.x-M.y,M.x,M.y,0,1)),_===h.RL.ROUND&&(O(-M.y-M.x,M.x-M.y,M.x,M.y,-1,-1),O(M.y-M.x,-M.x-M.y,M.x,M.y,-1,1)),_!==h.RL.ROUND&&_!==h.RL.BUTT||(O(-M.y,M.x,M.x,M.y,0,-1),O(M.y,-M.x,M.x,M.y,0,1));continue}if(G){a(I,L),d=I.x,p=I.y,_!==h.RL.ROUND&&_!==h.RL.BUTT||(O(L.y,-L.x,-L.x,-L.y,0,-1),O(-L.y,L.x,-L.x,-L.y,0,1)),_===h.RL.SQUARE&&(O(L.y-L.x,-L.x-L.y,-L.x,-L.y,0,-1),O(-L.y-L.x,L.x-L.y,-L.x,-L.y,0,1)),_===h.RL.ROUND&&(O(L.y-L.x,-L.x-L.y,-L.x,-L.y,1,-1),O(-L.y-L.x,L.x-L.y,-L.x,-L.y,1,1));continue}}var J=void 0,K=void 0,Y=(j=M,-((X=L).x*j.y-X.y*j.x));if(Math.abs(Y)<.01)v(L,M)>0?(I.x=L.x,I.y=L.y,Y=1,J=Number.MAX_VALUE,K=!0):(y(I,M),Y=1,J=1,K=!1);else{I.x=(L.x+M.x)/Y,I.y=(L.y+M.y)/Y;var $=((J=o(I))-1)*R*g;K=J>4||$>P&&$>N}d=I.x,p=I.y;var ii=w;switch(w){case h.AH.BEVEL:J<1.05&&(ii=h.AH.MITER);break;case h.AH.ROUND:J<T&&(ii=h.AH.MITER);break;case h.AH.MITER:J>k&&(ii=h.AH.BEVEL)}switch(ii){case h.AH.MITER:if(O(I.x,I.y,-L.x,-L.y,0,-1),O(-I.x,-I.y,-L.x,-L.y,0,1),G)break;if(E){var ti=C?0:H;A=this.writeVertex(c,m,d,p,M.x,M.y,I.x,I.y,0,-1,ti),S=this.writeVertex(c,m,d,p,M.x,M.y,-I.x,-I.y,0,1,ti)}break;case h.AH.BEVEL:var ei=Y<0,si=void 0,ni=void 0,hi=void 0,ri=void 0;if(ei){var xi=A;A=S,S=xi,si=Z,ni=B}else si=B,ni=Z;if(K)hi=ei?y(this.innerPrev,L):a(this.innerPrev,L),ri=ei?a(this.innerNext,M):y(this.innerNext,M);else{var ai=ei?u(this.inner,I):l(this.inner,I);hi=ai,ri=ai}var yi=ei?a(this.bevelStart,L):y(this.bevelStart,L);O(hi.x,hi.y,-L.x,-L.y,si.x,si.y);var li=O(yi.x,yi.y,-L.x,-L.y,ni.x,ni.y);if(G)break;var ui=ei?y(this.bevelEnd,M):a(this.bevelEnd,M);if(K){var oi=this.writeVertex(c,m,d,p,-L.x,-L.y,0,0,0,0,H);A=this.writeVertex(c,m,d,p,M.x,M.y,ri.x,ri.y,si.x,si.y,H),S=this.writeVertex(c,m,d,p,M.x,M.y,ui.x,ui.y,ni.x,ni.y,H),this.writeTriangle(li,oi,S)}else{if(E){var vi=this.bevelMiddle;vi.x=(yi.x+ui.x)/2,vi.y=(yi.y+ui.y)/2,f(D,vi,-L.x,-L.y),O(vi.x,vi.y,-L.x,-L.y,D.x,D.y),f(D,vi,M.x,M.y),A=this.writeVertex(c,m,d,p,M.x,M.y,vi.x,vi.y,D.x,D.y,H),S=this.writeVertex(c,m,d,p,M.x,M.y,ri.x,ri.y,si.x,si.y,H)}else{var fi=A;A=S,S=fi}O(ui.x,ui.y,M.x,M.y,ni.x,ni.y)}if(ei){var ci=A;A=S,S=ci}break;case h.AH.ROUND:var mi=Y<0,di=void 0,pi=void 0;if(mi){var gi=A;A=S,S=gi,di=Z,pi=B}else di=B,pi=Z;var _i=mi?u(this.inner,I):l(this.inner,I),wi=void 0,ki=void 0;K?(wi=mi?y(this.innerPrev,L):a(this.innerPrev,L),ki=mi?a(this.innerNext,M):y(this.innerNext,M)):(wi=_i,ki=_i);var Ti=mi?a(this.roundStart,L):y(this.roundStart,L),Ri=mi?y(this.roundEnd,M):a(this.roundEnd,M),Ei=O(wi.x,wi.y,-L.x,-L.y,di.x,di.y),bi=O(Ti.x,Ti.y,-L.x,-L.y,pi.x,pi.y);if(G)break;var Vi=this.writeVertex(c,m,d,p,-L.x,-L.y,0,0,0,0,H);K||this.writeTriangle(A,S,Vi);var Li=u(this.outer,_i),Mi=this.writeVertex(c,m,d,p,M.x,M.y,Ri.x,Ri.y,pi.x,pi.y,H),Pi=void 0,Ni=void 0,Ii=J>2;if(Ii){var Zi=void 0;J!==Number.MAX_VALUE?(Li.x/=J,Li.y/=J,Zi=(J*((Zi=v(L,Li))*Zi-1)+1)/Zi):Zi=-1,(Pi=mi?a(this.startBreak,L):y(this.startBreak,L)).x+=L.x*Zi,Pi.y+=L.y*Zi,(Ni=mi?y(this.endBreak,M):a(this.endBreak,M)).x+=M.x*Zi,Ni.y+=M.y*Zi}f(D,Li,-L.x,-L.y);var Bi=this.writeVertex(c,m,d,p,-L.x,-L.y,Li.x,Li.y,D.x,D.y,H);f(D,Li,M.x,M.y);var Di=E?this.writeVertex(c,m,d,p,M.x,M.y,Li.x,Li.y,D.x,D.y,H):Bi,Ai=Vi,Si=E?this.writeVertex(c,m,d,p,M.x,M.y,0,0,0,0,H):Vi,Ui=-1,Hi=-1;if(Ii&&(f(D,Pi,-L.x,-L.y),Ui=this.writeVertex(c,m,d,p,-L.x,-L.y,Pi.x,Pi.y,D.x,D.y,H),f(D,Ni,M.x,M.y),Hi=this.writeVertex(c,m,d,p,M.x,M.y,Ni.x,Ni.y,D.x,D.y,H)),E?Ii?(this.writeTriangle(Ai,bi,Ui),this.writeTriangle(Ai,Ui,Bi),this.writeTriangle(Si,Di,Hi),this.writeTriangle(Si,Hi,Mi)):(this.writeTriangle(Ai,bi,Bi),this.writeTriangle(Si,Di,Mi)):Ii?(this.writeTriangle(Vi,bi,Ui),this.writeTriangle(Vi,Ui,Hi),this.writeTriangle(Vi,Hi,Mi)):(this.writeTriangle(Vi,bi,Bi),this.writeTriangle(Vi,Di,Mi)),K?(A=this.writeVertex(c,m,d,p,M.x,M.y,ki.x,ki.y,di.x,di.y,H),S=Mi):(A=E?this.writeVertex(c,m,d,p,M.x,M.y,ki.x,ki.y,di.x,di.y,H):Ei,this.writeTriangle(A,Si,Mi),S=Mi),mi){var qi=A;A=S,S=qi}}}}}}]),i}()}}]);
//# sourceMappingURL=4318.be67e10f.chunk.js.map