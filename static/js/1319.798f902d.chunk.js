"use strict";(self.webpackChunkarcgisdemo=self.webpackChunkarcgisdemo||[]).push([[1319],{96669:function(e,t,r){function n(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function i(e,t){return"number"==typeof e?e:e&&e.stops&&e.stops.length?function(e){for(var t=0,r=0,n=0;n<e.length;n++){var i=e[n].size;"number"==typeof i&&(t+=i,r++)}return t/r}(e.stops):t}function a(e,t){if(!t)return e;var r=t.filter((function(e){return"size"===e.type})).map((function(t){var r=t.maxSize,n=t.minSize;return(i(r,e)+i(n,e))/2})),n=0,a=r.length;if(0===a)return e;for(var u=0;u<a;u++)n+=r[u];var s=Math.floor(n/a);return Math.max(s,e)}function u(e){var t=e&&e.renderer,r="touch"===(e&&e.event&&e.event.pointerType)?9:6;if(!t)return r;var i="visualVariables"in t?a(r,t.visualVariables):r;if("simple"===t.type)return n(i,t.symbol);if("unique-value"===t.type){var u=i;return t.uniqueValueInfos.forEach((function(e){u=n(u,e.symbol)})),u}if("class-breaks"===t.type){var s=i;return t.classBreakInfos.forEach((function(e){s=n(s,e.symbol)})),s}return"dot-density"===t.type||t.type,i}r.d(t,{k:function(){return u}})},4321:function(e,t,r){r.d(t,{Y:function(){return c}});var n=r(15671),i=r(43144),a=r(60136),u=r(54062),s=r(27366),l=(r(32718),r(25243),r(63780),r(93169),r(75366),r(69912)),o=r(9849),c=function(e){var t=function(e){(0,a.Z)(r,e);var t=(0,u.Z)(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,i.Z)(r,[{key:"attach",value:function(){this.view.timeline.record("".concat(this.layer.title," (BitmapTileLayer) Attach")),this._bitmapView=new o.s(this._tileInfoView),this.container.addChild(this._bitmapView)}},{key:"detach",value:function(){var e;this.container.removeChild(this._bitmapView),null===(e=this._bitmapView)||void 0===e||e.removeAllChildren()}}]),r}(e);return t=(0,s._)([(0,l.j)("esri.views.2d.layers.BitmapTileLayerView2D")],t)}},71319:function(e,t,r){r.r(t),r.d(t,{default:function(){return z}});var n=r(1413),i=r(29439),a=r(74165),u=r(15861),s=r(15671),l=r(43144),o=r(11752),c=r(61120),h=r(60136),f=r(54062),p=r(27366),v=r(32718),y=r(66978),d=r(94172),m=r(49861),w=(r(63780),r(93169),r(25243),r(69912)),g=r(92975),_=r(4321),Z=r(95986),b=r(34622),k=r(37995),x=r(73828),I=r(32344),V=r(85269),T=r(67581),C=r(13107),q=r(93433),S=r(10064),R=r(92026),F=r(96669),M=r(45008),Q=[0,0],L=function(e){(0,h.Z)(r,e);var t=(0,f.Z)(r);function r(){var e;return(0,s.Z)(this,r),(e=t.apply(this,arguments))._tileStrategy=null,e._fetchQueue=null,e.layer=null,e}return(0,l.Z)(r,[{key:"resampling",get:function(){return!("resampling"in this.layer)||!1!==this.layer.resampling}},{key:"update",value:function(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume()}},{key:"attach",value:function(){var e=this,t="tileServers"in this.layer?this.layer.tileServers:null;this._tileInfoView=new k.Z(this.layer.tileInfo,this.layer.fullExtent),this._fetchQueue=new I.Z({tileInfoView:this._tileInfoView,concurrency:t&&10*t.length||10,process:function(t,r){return e.fetchTile(t,r)}}),this._tileStrategy=new V.Z({cachePolicy:"keep",resampling:this.resampling,acquireTile:function(t){return e.acquireTile(t)},releaseTile:function(t){return e.releaseTile(t)},tileInfoView:this._tileInfoView}),this.requestUpdate(),this.handles.add((0,d.YP)((function(){return e.resampling}),(function(){e.doRefresh()}))),(0,o.Z)((0,c.Z)(r.prototype),"attach",this).call(this)}},{key:"detach",value:function(){(0,o.Z)((0,c.Z)(r.prototype),"detach",this).call(this),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}},{key:"moveStart",value:function(){this.requestUpdate()}},{key:"viewChange",value:function(){this.requestUpdate()}},{key:"moveEnd",value:function(){this.requestUpdate()}},{key:"supportsSpatialReference",value:function(e){var t;return(0,g.fS)(null===(t=this.layer.tileInfo)||void 0===t?void 0:t.spatialReference,e)}},{key:"createFetchPopupFeaturesQueryGeometry",value:function(e,t){return(0,M.K)(e,t,this.view)}},{key:"doRefresh",value:function(){var e=(0,u.Z)((0,a.Z)().mark((function e(){var t=this;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((function(e){return t._enqueueTileFetch(e)})));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"isUpdating",value:function(){var e,t;return null!==(e=null===(t=this._fetchQueue)||void 0===t?void 0:t.updating)&&void 0!==e&&e}},{key:"acquireTile",value:function(e){var t,r,n,a=this._bitmapView.createTile(e),u=a.bitmap;return t=this._tileInfoView.getTileCoords(Q,a.key),r=(0,i.Z)(t,2),u.x=r[0],u.y=r[1],u.resolution=this._tileInfoView.getTileResolution(a.key),n=(0,i.Z)(this._tileInfoView.tileInfo.size,2),u.width=n[0],u.height=n[1],this._enqueueTileFetch(a),this._bitmapView.addChild(a),this.requestUpdate(),a}},{key:"releaseTile",value:function(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(function(){return e.destroy()})),this.requestUpdate()}},{key:"fetchTile",value:function(){var e=(0,u.Z)((0,a.Z)().mark((function e(t){var r,i,u,s,l,o,c,h,f,p,v=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=v.length>1&&void 0!==v[1]?v[1]:{},i="tilemapCache"in this.layer?this.layer.tilemapCache:null,u=r.signal,s=r.resamplingLevel,l=void 0===s?0:s,i){e.next=22;break}return e.prev=3,e.next=6,this._fetchImage(t,u);case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),(0,y.D_)(e.t0)||this.resampling){e.next=13;break}return e.abrupt("return",(0,b.V)(this._tileInfoView.tileInfo.size));case 13:if(!(l<3)){e.next=21;break}if(!(o=this._tileInfoView.getTileParentId(t.id))){e.next=21;break}return c=new x.Z(o),e.next=19,this.fetchTile(c,(0,n.Z)((0,n.Z)({},r),{},{resamplingLevel:l+1}));case 19:return h=e.sent,e.abrupt("return",(0,b.i)(this._tileInfoView,h,c,t));case 21:throw e.t0;case 22:return f=new x.Z(0,0,0,0),e.prev=23,e.next=26,i.fetchAvailabilityUpsample(t.level,t.row,t.col,f,{signal:u});case 26:if(f.level===t.level||this.resampling){e.next=28;break}return e.abrupt("return",(0,b.V)(this._tileInfoView.tileInfo.size));case 28:return e.next=30,this._fetchImage(f,u);case 30:p=e.sent,e.next=40;break;case 33:if(e.prev=33,e.t1=e.catch(23),!(0,y.D_)(e.t1)){e.next=37;break}throw e.t1;case 37:return e.next=39,this._fetchImage(t,u);case 39:p=e.sent;case 40:return e.abrupt("return",this.resampling?(0,b.i)(this._tileInfoView,p,f,t):p);case 41:case"end":return e.stop()}}),e,this,[[3,9],[23,33]])})));return function(t){return e.apply(this,arguments)}}()},{key:"_enqueueTileFetch",value:function(){var e=(0,u.Z)((0,a.Z)().mark((function e(t){var r,n=this;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._fetchQueue.has(t.key.id)){e.next=12;break}return e.prev=1,e.next=4,this._fetchQueue.push(t.key);case 4:r=e.sent,t.bitmap.source=r,t.bitmap.width=this._tileInfoView.tileInfo.size[0],t.bitmap.height=this._tileInfoView.tileInfo.size[1],t.once("attach",(function(){return n.requestUpdate()})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),(0,y.D_)(e.t0)||v.Z.getLogger(this.declaredClass).error(e.t0);case 11:this.requestUpdate();case 12:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"_fetchImage",value:function(){var e=(0,u.Z)((0,a.Z)().mark((function e(t,r){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.layer.fetchTile(t.level,t.row,t.col,{signal:r}));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()}]),r}(function(e){var t=function(e){(0,h.Z)(r,e);var t=(0,f.Z)(r);function r(){return(0,s.Z)(this,r),t.apply(this,arguments)}return(0,l.Z)(r,[{key:"fetchPopupFeatures",value:function(){var e=(0,u.Z)((0,a.Z)().mark((function e(t,r){var n,i,s,l=this;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.layer,t){e.next=3;break}throw new S.Z("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:n});case 3:if("tile"===n.type){e.next=5;break}throw new S.Z("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:n.type});case 5:return i=this.get("view.scale"),s=n.allSublayers.toArray().filter((function(e){var t=0===e.minScale||i<=e.minScale,r=0===e.maxScale||i>=e.maxScale;return e.popupTemplate&&e.popupEnabled&&e.visible&&t&&r})),e.abrupt("return",(0,y.as)(s.map(function(){var e=(0,u.Z)((0,a.Z)().mark((function e(n){var i,u,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.createQuery(),u=(0,R.pC)(r)?r.event:null,s=(0,F.k)({renderer:n.renderer,event:u}),i.geometry=l.createFetchPopupFeaturesQueryGeometry(t,s),e.next=4,n.popupTemplate.getRequiredFields();case 4:return i.outFields=e.sent,e.next=7,n.queryFeatures(i);case 7:return e.abrupt("return",e.sent.features);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())).then((function(e){var t;return(t=[]).concat.apply(t,(0,q.Z)(e.map((function(e){return e.value})).filter(Boolean)))})));case 7:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()}]),r}(e);return(0,p._)([(0,m.Cb)()],t.prototype,"layer",void 0),t=(0,p._)([(0,w.j)("esri.layers.mixins.TileLayerView")],t)}((0,C.Z)((0,_.Y)((0,Z.y)(T.Z)))));(0,p._)([(0,m.Cb)()],L.prototype,"_fetchQueue",void 0),(0,p._)([(0,m.Cb)()],L.prototype,"resampling",null);var z=L=(0,p._)([(0,w.j)("esri.views.2d.layers.TileLayerView2D")],L)},34622:function(e,t,r){r.d(t,{V:function(){return a},i:function(){return i}});var n=r(29439);function i(e,t,r,n){if(r.level===n.level)return t;var i=e.tileInfo.size,u=e.getTileResolution(r.level),s=e.getTileResolution(n.level),l=e.getLODInfoAt(n.level),o=l.getXForColumn(n.col),c=l.getYForRow(n.row),h=(l=e.getLODInfoAt(r.level)).getXForColumn(r.col),f=l.getYForRow(r.row),p=function(e){return e instanceof HTMLImageElement?e.naturalWidth:e.width}(t)/i[0],v=function(e){return e instanceof HTMLImageElement?e.naturalHeight:e.height}(t)/i[1],y=Math.round(p*((o-h)/u)),d=Math.round(v*(-(c-f)/u)),m=Math.round(p*i[0]*(s/u)),w=Math.round(v*i[1]*(s/u)),g=a(i);return g.getContext("2d").drawImage(t,y,d,m,w,0,0,i[0],i[1]),g}function a(e){var t,r=document.createElement("canvas");return t=(0,n.Z)(e,2),r.width=t[0],r.height=t[1],r}},13107:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(15671),i=r(43144),a=r(60136),u=r(54062),s=r(27366),l=r(32718),o=r(66978),c=r(94172),h=r(49861),f=(r(63780),r(93169),r(25243),r(69912)),p=function(e){var t=function(e){(0,a.Z)(r,e);var t=(0,u.Z)(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,i.Z)(r,[{key:"initialize",value:function(){var e=this;this.handles.add((0,c.on)((function(){return e.layer}),"refresh",(function(t){e.doRefresh(t.dataChanged).catch((function(t){(0,o.D_)(t)||l.Z.getLogger(e.declaredClass).error(t)}))})),"RefreshableLayerView")}}]),r}(e);return(0,s._)([(0,h.Cb)()],t.prototype,"layer",void 0),t=(0,s._)([(0,f.j)("esri.layers.mixins.RefreshableLayerView")],t)}},45008:function(e,t,r){r.d(t,{K:function(){return u}});r(59486);var n=r(92026),i=r(68860),a=r(53866);function u(e,t,r){var u,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new a.Z;if("2d"===r.type)u=t*r.resolution;else if("3d"===r.type){var l=r.overlayPixelSizeInMapUnits(e),o=r.basemapSpatialReference;u=(0,n.pC)(o)&&!o.equals(r.spatialReference)?(0,i.c9)(o)/(0,i.c9)(r.spatialReference):t*l}var c=e.x-u,h=e.y-u,f=e.x+u,p=e.y+u,v=r.spatialReference;return s.xmin=Math.min(c,f),s.ymin=Math.min(h,p),s.xmax=Math.max(c,f),s.ymax=Math.max(h,p),s.spatialReference=v,s}new a.Z}}]);
//# sourceMappingURL=1319.798f902d.chunk.js.map