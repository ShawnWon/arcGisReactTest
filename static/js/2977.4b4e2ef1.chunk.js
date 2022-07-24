"use strict";(self.webpackChunkarcgisdemo=self.webpackChunkarcgisdemo||[]).push([[2977],{42977:function(e,r,t){t.r(r),t.d(r,{default:function(){return I}});var a=t(1413),n=t(15671),i=t(43144),o=t(60136),l=t(54062),s=t(27366),u=t(76200),c=t(10064),p=t(41691),d=t(92026),y=t(97642),v=t(66978),f=t(35995),h=t(49861),_=(t(63780),t(93169),t(89125)),g=t(38511),m=t(69912),b=t(31201),S=t(78952),k=t(30651),C=t(27961),w=t(17775),T=t(6741),Z=t(11936),O=t(6693),R=t(46671),W=t(6061),U=t(29598),j=t(71684),L=t(56811),M=t(18870),N=t(25899),P=t(45948),A=t(77990),B=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"],D=function(e){(0,o.Z)(t,e);var r=(0,l.Z)(t);function t(){var e;(0,n.Z)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=r.call.apply(r,[this].concat(i))).listMode="show",e.isReference=null,e.operationalLayerType="ArcGISTiledMapServiceLayer",e.resampling=!0,e.sourceJSON=null,e.spatialReference=null,e.path=null,e.sublayers=null,e.type="tile",e.url=null,e}return(0,i.Z)(t,[{key:"normalizeCtorArgs",value:function(e,r){return"string"==typeof e?(0,a.Z)({url:e},r):e}},{key:"load",value:function(e){var r=this,t=(0,d.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(v.r9).then((function(){return r._fetchService(t)}))),Promise.resolve(this)}},{key:"attributionDataUrl",get:function(){var e,r=null===(e=this.parsedUrl)||void 0===e?void 0:e.path.toLowerCase();return r&&this._getDefaultAttribution(this._getMapName(r))}},{key:"readSpatialReference",value:function(e,r){return(e=e||r.tileInfo&&r.tileInfo.spatialReference)&&S.Z.fromJSON(e)}},{key:"writeSublayers",value:function(e,r,t,n){if(this.loaded&&e){var i=e.slice().reverse().flatten((function(e){var r=e.sublayers;return r&&r.toArray().reverse()})).toArray(),o=[],l=(0,a.Z)({writeSublayerStructure:!1},n);i.forEach((function(e){var r=e.write({},l);o.push(r)})),o.some((function(e){return Object.keys(e).length>1}))&&(r.layers=o)}}},{key:"tileServers",get:function(){return this._getDefaultTileServers(this.parsedUrl.path)}},{key:"castTileServers",value:function(e){return Array.isArray(e)?e.map((function(e){return(0,f.mN)(e).path})):null}},{key:"fetchTile",value:function(e,r,t){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=n.signal,o=this.getTileUrl(e,r,t),l={responseType:"image",signal:i,query:(0,a.Z)({},this.refreshParameters)};return(0,u.default)(o,l).then((function(e){return e.data}))}},{key:"getTileUrl",value:function(e,r,t){var n=!this.tilemapCache&&this.supportsBlankTile,i=(0,f.B7)((0,a.Z)((0,a.Z)((0,a.Z)({},this.parsedUrl.query),{},{blankTile:!n&&null},this.customParameters),{},{token:this.apiKey})),o=this.tileServers;return"".concat(o&&o.length?o[r%o.length]:this.parsedUrl.path,"/tile/").concat(e,"/").concat(r,"/").concat(t).concat(i?"?"+i:"")}},{key:"_fetchService",value:function(e){var r=this;return new Promise((function(t,n){if(r.sourceJSON){if(null!=r.sourceJSON.bandCount&&null!=r.sourceJSON.pixelSizeX)throw new c.Z("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");t({data:r.sourceJSON})}else{if(!r.parsedUrl)throw new c.Z("tile-layer:undefined-url","layer's url is not defined");var i=(0,N.Qc)(r.parsedUrl.path);if((0,d.pC)(i)&&"ImageServer"===i.serverType)throw new c.Z("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");(0,u.default)(r.parsedUrl.path,{query:(0,a.Z)((0,a.Z)((0,a.Z)({f:"json"},r.parsedUrl.query),r.customParameters),{},{token:r.apiKey}),responseType:"json",signal:e}).then(t,n)}})).then((function(t){if(t.ssl&&(r.url=r.url.replace(/^http:/i,"https:")),r.sourceJSON=t.data,r.read(t.data,{origin:"service",url:r.parsedUrl}),10.1===r.version&&!(0,N.M8)(r.url))return r._fetchServerVersion(r.url,e).then((function(e){r.read({currentVersion:e})})).catch((function(){}))}))}},{key:"_fetchServerVersion",value:function(e,r){if(!(0,N.B5)(e))return Promise.reject();var t=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return(0,u.default)(t,{query:(0,a.Z)((0,a.Z)({f:"json"},this.customParameters),{},{token:this.apiKey}),responseType:"json",signal:r}).then((function(e){if(e.data&&e.data.currentVersion)return e.data.currentVersion;throw new c.Z("tile-layer:version-not-available")}))}},{key:"_getMapName",value:function(e){var r=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return r&&r[2]}},{key:"_getDefaultAttribution",value:function(e){if(e){var r;e=e.toLowerCase();for(var t=0,a=B.length;t<a;t++)if((r=B[t]).toLowerCase().includes(e))return(0,f.hF)("//static.arcgis.com/attribution/"+r)}}},{key:"_getDefaultTileServers",value:function(e){var r=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),t=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return r||t?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]}},{key:"hasOverriddenFetchTile",get:function(){return!this.fetchTile.__isDefault__}}]),t}((0,O.h)((0,M.x)((0,L.M)((0,W.q)((0,U.I)((0,w.Z)((0,T.O)((0,Z.Y)((0,y.R)((0,p.p)((0,j.Q)((0,C.V)((0,R.N)(k.Z))))))))))))));(0,s._)([(0,h.Cb)({readOnly:!0})],D.prototype,"attributionDataUrl",null),(0,s._)([(0,h.Cb)({type:["show","hide","hide-children"]})],D.prototype,"listMode",void 0),(0,s._)([(0,h.Cb)({json:{read:!0,write:!0}})],D.prototype,"blendMode",void 0),(0,s._)([(0,h.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],D.prototype,"isReference",void 0),(0,s._)([(0,h.Cb)({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],D.prototype,"operationalLayerType",void 0),(0,s._)([(0,h.Cb)({type:Boolean})],D.prototype,"resampling",void 0),(0,s._)([(0,h.Cb)()],D.prototype,"sourceJSON",void 0),(0,s._)([(0,h.Cb)({type:S.Z})],D.prototype,"spatialReference",void 0),(0,s._)([(0,g.r)("spatialReference",["spatialReference","tileInfo"])],D.prototype,"readSpatialReference",null),(0,s._)([(0,h.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],D.prototype,"path",void 0),(0,s._)([(0,h.Cb)({readOnly:!0})],D.prototype,"sublayers",void 0),(0,s._)([(0,b.c)("sublayers",{layers:{type:[A.Z]}})],D.prototype,"writeSublayers",null),(0,s._)([(0,h.Cb)({json:{read:!1,write:!1}})],D.prototype,"popupEnabled",void 0),(0,s._)([(0,h.Cb)()],D.prototype,"tileServers",null),(0,s._)([(0,_.p)("tileServers")],D.prototype,"castTileServers",null),(0,s._)([(0,h.Cb)({readOnly:!0,json:{read:!1}})],D.prototype,"type",void 0),(0,s._)([(0,h.Cb)(P.HQ)],D.prototype,"url",void 0),(D=(0,s._)([(0,m.j)("esri.layers.TileLayer")],D)).prototype.fetchTile.__isDefault__=!0;var I=D}}]);
//# sourceMappingURL=2977.4b4e2ef1.chunk.js.map