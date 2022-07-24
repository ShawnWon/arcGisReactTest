"use strict";(self.webpackChunkarcgisdemo=self.webpackChunkarcgisdemo||[]).push([[7658],{77658:function(e,t,r){r.r(t),r.d(t,{FeatureServiceSnappingSourceWorker:function(){return ue},default:function(){return oe}});var n=r(74165),i=r(1413),s=r(15861),a=r(15671),u=r(43144),o=r(60136),l=r(54062),c=r(27366),h=r(91505),f=r(100),d=r(92026),p=r(66978),v=r(94172),y=r(49861),g=r(63780),_=(r(93169),r(25243),r(69912)),C=r(61826),m=r(78952),F=r(97114),E=r(14e3),k=r(22824),T=r(43957),b=r(21149),Z=r(29439),S=r(37762),w=r(85015),I=function(e){(0,o.Z)(r,e);var t=(0,l.Z)(r);function r(){var e;return(0,a.Z)(this,r),(e=t.apply(this,arguments)).updating=!1,e.pending=[],e}return(0,u.Z)(r,[{key:"push",value:function(e,t){this.pending.push({promise:e,callback:t}),1===this.pending.length&&this._process()}},{key:"_process",value:function(){var e=this;if(this.pending.length){this.updating=!0;var t=this.pending[0];t.promise.then((function(e){return t.callback(e)})).catch((function(){})).then((function(){e.pending.shift(),e._process()}))}else this.updating=!1}}]),r}(w.Z);(0,c._)([(0,y.Cb)()],I.prototype,"updating",void 0),I=(0,c._)([(0,_.j)("esri.core.AsyncSequence")],I);var x,O=r(41691),A=r(42537),R=r(32718),H=r(53866),P=r(65156),D=r(83406),N=r(25899),U=r(70436),M=r(5192),z=r(14921),j=function(){function e(t,r){(0,a.Z)(this,e),this.data=t,this.resolution=r,this.state={type:x.CREATED},this.alive=!0}return(0,u.Z)(e,[{key:"process",value:function(e){switch(this.state.type){case x.CREATED:return this.state=this._gotoFetchCount(this.state,e),this.state.task.promise.then(e.resume,e.resume);case x.FETCH_COUNT:break;case x.FETCHED_COUNT:return this.state=this._gotoFetchFeatures(this.state,e),this.state.task.promise.then(e.resume,e.resume);case x.FETCH_FEATURES:break;case x.FETCHED_FEATURES:this.state=this._goToDone(this.state,e);case x.DONE:}return null}},{key:"debugInfo",get:function(){return{data:this.data,featureCount:this.featureCount,state:this.stateToString}}},{key:"featureCount",get:function(){switch(this.state.type){case x.CREATED:case x.FETCH_COUNT:return 0;case x.FETCHED_COUNT:return this.state.featureCount;case x.FETCH_FEATURES:return this.state.previous.featureCount;case x.FETCHED_FEATURES:return this.state.features.length;case x.DONE:return this.state.previous.features.length}}},{key:"stateToString",get:function(){switch(this.state.type){case x.CREATED:return"created";case x.FETCH_COUNT:return"fetch-count";case x.FETCHED_COUNT:return"fetched-count";case x.FETCH_FEATURES:return"fetch-features";case x.FETCHED_FEATURES:return"fetched-features";case x.DONE:return"done"}}},{key:"_gotoFetchCount",value:function(e,t){var r=this;return{type:x.FETCH_COUNT,previous:e,task:(0,p.vr)(function(){var e=(0,s.Z)((0,n.Z)().mark((function e(i){var s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,z.mt)(t.fetchCount(r,i));case 2:s=e.sent,r.state.type===x.FETCH_COUNT&&(r.state=r._gotoFetchedCount(r.state,s.ok?s.value:1/0));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}},{key:"_gotoFetchedCount",value:function(e,t){return{type:x.FETCHED_COUNT,featureCount:t,previous:e}}},{key:"_gotoFetchFeatures",value:function(e,t){var r=this;return{type:x.FETCH_FEATURES,previous:e,task:(0,p.vr)(function(){var i=(0,s.Z)((0,n.Z)().mark((function i(s){var a;return(0,n.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,z.mt)(t.fetchFeatures(r,e.featureCount,s));case 2:a=n.sent,r.state.type===x.FETCH_FEATURES&&(r.state=r._gotoFetchedFeatures(r.state,a.ok?a.value:[]));case 4:case"end":return n.stop()}}),i)})));return function(e){return i.apply(this,arguments)}}())}}},{key:"_gotoFetchedFeatures",value:function(e,t){return{type:x.FETCHED_FEATURES,previous:e,features:t}}},{key:"_goToDone",value:function(e,t){return t.finish(this,e.features),{type:x.DONE,previous:e}}},{key:"reset",value:function(){var e=this.state;switch(this.state={type:x.CREATED},e.type){case x.CREATED:case x.FETCHED_COUNT:case x.FETCHED_FEATURES:case x.DONE:break;case x.FETCH_COUNT:case x.FETCH_FEATURES:e.task.abort()}}},{key:"intersects",value:function(e){return!(!(0,d.Wi)(e)&&this.data.extent)||((0,P.oJ)(e,B),(0,P.kK)(this.data.extent,B))}}]),e}();!function(e){e[e.CREATED=0]="CREATED",e[e.FETCH_COUNT=1]="FETCH_COUNT",e[e.FETCHED_COUNT=2]="FETCHED_COUNT",e[e.FETCH_FEATURES=3]="FETCH_FEATURES",e[e.FETCHED_FEATURES=4]="FETCHED_FEATURES",e[e.DONE=5]="DONE"}(x||(x={}));var B=(0,P.Ue)(),q=R.Z.getLogger("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher"),W=function(e){(0,o.Z)(r,e);var t=(0,l.Z)(r);function r(e){var n;return(0,a.Z)(this,r),(n=t.call(this,e)).tilesOfInterest=[],n.availability=0,n.pendingTiles=new Map,n.pendingEdits=new I,n.pendingEditsAbortController=new AbortController,n}return(0,u.Z)(r,[{key:"minimumVerticesPerFeature",get:function(){var e;switch(null===(e=this.store)||void 0===e?void 0:e.featureStore.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":return 1;case"esriGeometryPolygon":return 4;case"esriGeometryPolyline":return 2}}},{key:"filter",set:function(e){var t=this._get("filter"),r=this._filterProperties(e);JSON.stringify(t)!==JSON.stringify(r)&&this._set("filter",r)}},{key:"customParameters",set:function(e){var t=this._get("customParameters");JSON.stringify(t)!==JSON.stringify(e)&&this._set("customParameters",e)}},{key:"configuration",get:function(){return{filter:this.filter,customParameters:this.customParameters,tileInfo:this.tileInfo,tileSize:this.tileSize}}},{key:"tileInfo",set:function(e){var t=this._get("tileInfo");t!==e&&((0,d.pC)(e)&&(0,d.pC)(t)&&JSON.stringify(e)===JSON.stringify(t)||(this._set("tileInfo",e),this.store.tileInfo=e))}},{key:"tileSize",set:function(e){this._get("tileSize")!==e&&this._set("tileSize",e)}},{key:"updating",get:function(){return this.updatingHandles.updating||this.pendingEdits.updating}},{key:"initialize",value:function(){var e=this;this._initializeFetchExtent(),this.updatingHandles.add((function(){return e.configuration}),(function(){return e.refresh()})),this.updatingHandles.add((function(){return e.tilesOfInterest}),(function(t,r){(0,g.fS)(t,r,(function(e,t){return e.id===t.id}))||e._process()}),v.Z_)}},{key:"destroy",value:function(){var e=this;this.pendingTiles.forEach((function(t){return e._deletePendingTile(t)})),this.pendingTiles.clear(),this.store.destroy(),this.tilesOfInterest.length=0,this.pendingEditsAbortController.abort(),this.pendingEditsAbortController=null}},{key:"refresh",value:function(){var e=this;this.store.refresh(),this.pendingTiles.forEach((function(t){return e._deletePendingTile(t)})),this._process()}},{key:"applyEdits",value:function(e){var t=this;this.pendingEdits.push(e,function(){var e=(0,s.Z)((0,n.Z)().mark((function e(r){var s,a,u,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==r.addedFeatures.length||0!==r.updatedFeatures.length||0!==r.deletedFeatures.length){e.next=2;break}return e.abrupt("return");case 2:s=(0,S.Z)(t.pendingTiles);try{for(s.s();!(a=s.n()).done;)u=(0,Z.Z)(a.value,2),u[1].reset()}catch(n){s.e(n)}finally{s.f()}return o=(0,i.Z)((0,i.Z)({},r),{},{deletedFeatures:r.deletedFeatures.map((function(e){var r=e.objectId,n=e.globalId;return r&&-1!==r?r:t._lookupObjectIdByGlobalId(n)}))}),e.next=7,t.updatingHandles.addPromise(t.store.processEdits(o,(function(e,r){return t._queryFeaturesById(e,r)}),t.pendingEditsAbortController.signal));case 7:t._processPendingTiles();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},{key:"_initializeFetchExtent",value:function(){var e=this;if(this.capabilities.query.supportsExtent&&(0,N.M8)(this.url)){var t=(0,p.vr)(function(){var t=(0,s.Z)((0,n.Z)().mark((function t(r){var i,s;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,M.executeQueryForExtent)(e.url,new b.Z({where:"1=1",outSpatialReference:e.spatialReference,cacheHint:!!e.capabilities.query.supportsCacheHint||void 0}),{query:e.configuration.customParameters,signal:r});case 3:s=t.sent,e.store.extent=H.Z.fromJSON(null===(i=s.data)||void 0===i?void 0:i.extent),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),(0,p.r9)(t.t0),q.warn("Failed to fetch data extent",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}());this.updatingHandles.addPromise(t.promise.then((function(){return e._process()}))),this.handles.add((0,A.kB)((function(){return t.abort()})))}}},{key:"debugInfo",get:function(){return{numberOfFeatures:this.store.featureStore.numFeatures,tilesOfInterest:this.tilesOfInterest,pendingTiles:Array.from(this.pendingTiles.values()).map((function(e){return e.debugInfo})),storedTiles:this.store.debugInfo}}},{key:"_process",value:function(){this._markTilesNotAlive(),this._createPendingTiles(),this._deletePendingTiles(),this._processPendingTiles()}},{key:"_markTilesNotAlive",value:function(){var e,t=(0,S.Z)(this.pendingTiles);try{for(t.s();!(e=t.n()).done;){(0,Z.Z)(e.value,2)[1].alive=!1}}catch(r){t.e(r)}finally{t.f()}}},{key:"_createPendingTiles",value:function(){var e=this._collectMissingTilesInfo();if(this._setAvailability((0,d.Wi)(e)?1:e.coveredArea/e.fullArea),!(0,d.Wi)(e)){var t,r=(0,S.Z)(e.missingTiles);try{for(r.s();!(t=r.n()).done;){var n=t.value,i=n.data,s=n.resolution,a=this.pendingTiles.get(i.id);a?(a.resolution=s,a.alive=!0):this._createPendingTile(i,s)}}catch(u){r.e(u)}finally{r.f()}}}},{key:"_collectMissingTilesInfo",value:function(){for(var e=this,t=null,r=this.tilesOfInterest.length-1;r>=0;r--){var n=this.tilesOfInterest[r],i=this.store.process(n,(function(t,r){return e._verifyTileComplexity(t,r)}));(0,d.Wi)(t)?t=i:t.prepend(i)}return t}},{key:"_deletePendingTiles",value:function(){var e,t=(0,S.Z)(this.pendingTiles);try{for(t.s();!(e=t.n()).done;){var r=(0,Z.Z)(e.value,2)[1];r.alive||this._deletePendingTile(r)}}catch(n){t.e(n)}finally{t.f()}}},{key:"_processPendingTiles",value:function(){var e=this,t={fetchCount:function(t,r){return e._fetchCount(t,r)},fetchFeatures:function(t,r,n){return e._fetchFeatures(t,r,n)},finish:function(t,r){return e._finishPendingTile(t,r)},resume:function(){return e._processPendingTiles()}};if(this._ensureFetchAllCounts(t)){var r,n=(0,S.Z)(this.pendingTiles);try{for(n.s();!(r=n.n()).done;){var i=(0,Z.Z)(r.value,2)[1];this._verifyTileComplexity(this.store.getFeatureCount(i.data),i.resolution)&&this.updatingHandles.addPromise(i.process(t))}}catch(s){n.e(s)}finally{n.f()}}}},{key:"_verifyTileComplexity",value:function(e,t){return this._verifyVertexComplexity(e)&&this._verifyFeatureDensity(e,t)}},{key:"_verifyVertexComplexity",value:function(e){return e*this.minimumVerticesPerFeature<V}},{key:"_verifyFeatureDensity",value:function(e,t){if((0,d.Wi)(this.tileInfo))return!1;var r=this.tileSize*t;return e*(Q/(r*r))<G}},{key:"_ensureFetchAllCounts",value:function(e){var t,r=!0,n=(0,S.Z)(this.pendingTiles);try{for(n.s();!(t=n.n()).done;){var i=(0,Z.Z)(t.value,2)[1];i.state.type<x.FETCHED_COUNT&&this.updatingHandles.addPromise(i.process(e)),i.state.type<=x.FETCH_COUNT&&(r=!1)}}catch(s){n.e(s)}finally{n.f()}return r}},{key:"_finishPendingTile",value:function(e,t){this.store.add(e.data,t),this._deletePendingTile(e),this._updateAvailability()}},{key:"_updateAvailability",value:function(){var e=this._collectMissingTilesInfo();this._setAvailability((0,d.Wi)(e)?1:e.coveredArea/e.fullArea)}},{key:"_setAvailability",value:function(e){this._set("availability",e)}},{key:"_createPendingTile",value:function(e,t){var r=new j(e,t);return this.pendingTiles.set(e.id,r),r}},{key:"_deletePendingTile",value:function(e){e.reset(),this.pendingTiles.delete(e.data.id)}},{key:"_fetchCount",value:function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t,r){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.store.fetchCount(t.data,this.url,this._createCountQuery(t),{query:this.customParameters,timeout:L,signal:r}));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_fetchFeatures",value:function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t,r,i){var s,a,u,o,l,c,h,f,p;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=0,u=0,o=r;case 1:return l=this._createFeaturesQuery(t),c=this._setPagingParameters(l,a,o),e.next=5,this._queryFeatures(l,i);case 5:if(h=e.sent,f=h.features,p=h.exceededTransferLimit,c&&(a+=(0,d.Wg)(l.num)),u+=f.length,s=s?s.concat(f):f,o=r-u,c&&p&&!(o<=0)){e.next=10;break}return e.abrupt("return",s);case 10:e.next=1;break;case 12:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"_filterProperties",value:function(e){return(0,d.Wi)(e)?{where:"1=1",gdbVersion:void 0,timeExtent:void 0}:{where:e.where||"1=1",timeExtent:e.timeExtent,gdbVersion:e.gdbVersion}}},{key:"_lookupObjectIdByGlobalId",value:function(e){var t=this.globalIdField,r=this.objectIdField;if((0,d.Wi)(t))throw new Error("Expected globalIdField to be defined");var n=null;if(this.store.featureStore.forEach((function(i){var s;e===i.attributes[t]&&(n=null!==(s=i.objectId)&&void 0!==s?s:i.attributes[r])})),(0,d.Wi)(n))throw new Error("Expected to find a feature with globalId ".concat(e));return n}},{key:"_queryFeaturesById",value:function(e,t){var r=this._createFeaturesQuery(null);return r.objectIds=e,this._queryFeatures(r,t)}},{key:"_queryFeatures",value:function(e,t){return this.capabilities.query.supportsFormatPBF?this._queryFeaturesPBF(e,t):this._queryFeaturesJSON(e,t)}},{key:"_queryFeaturesPBF",value:function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t,r){var i,s,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=this.sourceSpatialReference,e.next=3,(0,M.executeQueryPBF)(this.url,t,new U.J({sourceSpatialReference:i}),{query:this.configuration.customParameters,timeout:L,signal:r});case 3:return s=e.sent,a=s.data,e.abrupt("return",(0,D.lM)(a));case 6:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_queryFeaturesJSON",value:function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t,r){var i,s,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=this.sourceSpatialReference,e.next=3,(0,M.executeQuery)(this.url,t,i,{query:this.configuration.customParameters,timeout:L,signal:r});case 3:return s=e.sent,a=s.data,e.abrupt("return",(0,D.h_)(a,this.objectIdField));case 6:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_createCountQuery",value:function(e){var t=this._createBaseQuery(e);return this.capabilities.query.supportsCacheHint&&(t.cacheHint=!0),t}},{key:"_createFeaturesQuery",value:function(e){var t=this._createBaseQuery(e);return t.outFields=this.globalIdField?[this.globalIdField,this.objectIdField]:[this.objectIdField],t.returnGeometry=!0,(0,d.pC)(e)&&(this.capabilities.query.supportsResultType?t.resultType="tile":this.capabilities.query.supportsCacheHint&&(t.cacheHint=!0)),t}},{key:"_createBaseQuery",value:function(e){var t=new b.Z({returnZ:!1,returnM:!1,geometry:(0,d.pC)(this.tileInfo)&&(0,d.pC)(e)?(0,P.HH)(e.data.extent,this.tileInfo.spatialReference):void 0}),r=this.configuration.filter;return(0,d.pC)(r)&&(t.where=r.where,t.gdbVersion=r.gdbVersion,t.timeExtent=r.timeExtent),t.outSpatialReference=this.spatialReference,t}},{key:"_setPagingParameters",value:function(e,t,r){if(!this.capabilities.query.supportsPagination)return!1;var n=this.capabilities.query,i=n.supportsMaxRecordCountFactor,s=n.supportsCacheHint,a=n.tileMaxRecordCount,u=n.maxRecordCount,o=n.supportsResultType,l=i?b.Z.MAX_MAX_RECORD_COUNT_FACTOR:1,c=l*((o||s)&&a?a:u||J);return e.start=t,i?(e.maxRecordCountFactor=Math.min(l,Math.ceil(r/c)),e.num=Math.min(r,e.maxRecordCountFactor*c)):e.num=Math.min(r,c),!0}}]),r}(O.r);(0,c._)([(0,y.Cb)({constructOnly:!0})],W.prototype,"url",void 0),(0,c._)([(0,y.Cb)({constructOnly:!0})],W.prototype,"objectIdField",void 0),(0,c._)([(0,y.Cb)({constructOnly:!0})],W.prototype,"globalIdField",void 0),(0,c._)([(0,y.Cb)({constructOnly:!0})],W.prototype,"capabilities",void 0),(0,c._)([(0,y.Cb)({constructOnly:!0})],W.prototype,"sourceSpatialReference",void 0),(0,c._)([(0,y.Cb)({constructOnly:!0})],W.prototype,"spatialReference",void 0),(0,c._)([(0,y.Cb)({constructOnly:!0})],W.prototype,"store",void 0),(0,c._)([(0,y.Cb)({readOnly:!0})],W.prototype,"minimumVerticesPerFeature",null),(0,c._)([(0,y.Cb)()],W.prototype,"filter",null),(0,c._)([(0,y.Cb)()],W.prototype,"customParameters",null),(0,c._)([(0,y.Cb)({readOnly:!0})],W.prototype,"configuration",null),(0,c._)([(0,y.Cb)()],W.prototype,"tileInfo",null),(0,c._)([(0,y.Cb)()],W.prototype,"tileSize",null),(0,c._)([(0,y.Cb)()],W.prototype,"tilesOfInterest",void 0),(0,c._)([(0,y.Cb)({readOnly:!0})],W.prototype,"updating",null),(0,c._)([(0,y.Cb)({readOnly:!0})],W.prototype,"availability",void 0),W=(0,c._)([(0,_.j)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher")],W);var J=2e3,L=6e5,V=1e6,Q=25,G=1,Y=r(59896),K=r(66020),X=function(e){function t(){(0,a.Z)(this,t),this._store=new Map,this._byteSize=0}return(0,u.Z)(t,[{key:"set",value:function(e,t){this.delete(e),this._store.set(e,t),this._byteSize+=t.byteSize}},{key:"delete",value:function(e){var t=this._store.get(e);return!!this._store.delete(e)&&(this._byteSize-=t.byteSize,!0)}},{key:"get",value:function(e){return this._used(e),this._store.get(e)}},{key:"has",value:function(e){return this._used(e),this._store.has(e)}},{key:"clear",value:function(){this._store.clear()}},{key:"applyByteSizeLimit",value:function(e,t){var r,n=(0,S.Z)(this._store);try{for(n.s();!(r=n.n()).done;){var i=(0,Z.Z)(r.value,2),s=i[0],a=i[1];if(this._byteSize<=e)break;this.delete(s),t(a)}}catch(u){n.e(u)}finally{n.f()}}},{key:"values",value:function(){return this._store.values()}},{key:e,value:function(){return this._store[Symbol.iterator]()}},{key:"_used",value:function(e){var t=this._store.get(e);t&&(this._store.delete(e),this._store.set(e,t))}}]),t}(Symbol.iterator),$=function(e){(0,o.Z)(r,e);var t=(0,l.Z)(r);function r(e){var n;return(0,a.Z)(this,r),(n=t.call(this,e)).tileInfo=null,n.extent=null,n.maximumByteSize=10*Y.Y8.MEGABYTES,n.tileBounds=new K.H,n.tiles=new X,n.refCounts=new Map,n.tileFeatureCounts=new Map,n.tmpBoundingRect=(0,P.Ue)(),n}return(0,u.Z)(r,[{key:"add",value:function(e,t){var r,n=this,i=[],s=(0,S.Z)(t);try{for(s.s();!(r=s.n()).done;){var a=r.value;this._referenceFeature(a.objectId)===ee.ADDED&&i.push(a)}}catch(u){s.e(u)}finally{s.f()}this._addTileStorage(e,new Set(t.map((function(e){return e.objectId}))),function(e){return e.reduce((function(e,t){return e+function(e){return 32+function(e){if((0,d.Wi)(e))return 0;var t=(0,Y.do)(e.lengths,4);return 32+(0,Y.do)(e.coords,8)+t}(e.geometry)+(0,Y.f2)(e.attributes)}(t)}),0)}(t)),this.featureStore.addMany(i),this.tiles.applyByteSizeLimit(this.maximumByteSize,(function(e){return n._removeTileStorage(e)}))}},{key:"destroy",value:function(){this.clear(),this.tileFeatureCounts.clear()}},{key:"clear",value:function(){this.featureStore.clear(),this.tileBounds.clear(),this.tiles.clear(),this.refCounts.clear()}},{key:"refresh",value:function(){this.clear(),this.tileFeatureCounts.clear()}},{key:"processEdits",value:function(e,t,r){return this._processEditsDelete(e.deletedFeatures.concat(e.updatedFeatures)),this._processEditsRefetch(e.addedFeatures.concat(e.updatedFeatures),t,r)}},{key:"_addTileStorage",value:function(e,t,r){this.tiles.set(e.id,new re(e,t,r)),this.tileBounds.set(e.id,e.extent),this.tileFeatureCounts.set(e.id,t.size)}},{key:"_remove",value:function(e){var t=e.id,r=this.tiles.get(t);r&&this._removeTileStorage(r)}},{key:"_removeTileStorage",value:function(e){var t,r=[],n=(0,S.Z)(e.objectIds);try{for(n.s();!(t=n.n()).done;){var i=t.value;this._unreferenceFeature(i)===ee.REMOVED&&r.push(i)}}catch(a){n.e(a)}finally{n.f()}this.featureStore.removeManyById(r);var s=e.data.id;this.tiles.delete(s),this.tileBounds.delete(s)}},{key:"_processEditsDelete",value:function(e){this.featureStore.removeManyById(e);var t,r=(0,S.Z)(this.tiles);try{for(r.s();!(t=r.n()).done;){var n,i=(0,Z.Z)(t.value,2)[1],s=(0,S.Z)(e);try{for(s.s();!(n=s.n()).done;){var a=n.value;i.objectIds.delete(a)}}catch(c){s.e(c)}finally{s.f()}this.tileFeatureCounts.set(i.data.id,i.objectIds.size)}}catch(c){r.e(c)}finally{r.f()}var u,o=(0,S.Z)(e);try{for(o.s();!(u=o.n()).done;){var l=u.value;this.refCounts.delete(l)}}catch(c){o.e(c)}finally{o.f()}}},{key:"_processEditsRefetch",value:function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t,r,i){var s,a,u,o,l,c,h,f=this;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(t,i);case 2:s=e.sent.features,a=this.featureStore,u=a.hasZ,o=a.hasM,l=(0,S.Z)(s);try{for(h=function(){var e=c.value,t=(0,D.$)(f.tmpBoundingRect,e.geometry,u,o);(0,d.Wi)(t)||f.tileBounds.forEachInBounds(t,(function(t){var r=f.tiles.get(t);f.featureStore.add(e),r.objectIds.has(e.objectId)||(r.objectIds.add(e.objectId),f._referenceFeature(e.objectId),f.tileFeatureCounts.set(r.data.id,r.objectIds.size))}))},l.s();!(c=l.n()).done;)h()}catch(n){l.e(n)}finally{l.f()}case 8:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"process",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return!0};if((0,d.Wi)(this.tileInfo)||!e.extent||(0,d.pC)(this.extent)&&!(0,P.kK)((0,P.oJ)(this.extent,this.tmpBoundingRect),e.extent))return new ie(e);if(this.tiles.has(e.id))return new ie(e);var r=this._createTileTree(e,this.tileInfo);return this._simplify(r,t,null,0,1),this._collectMissingTiles(e,r,this.tileInfo)}},{key:"debugInfo",get:function(){var e=this;return Array.from(this.tiles.values()).map((function(t){var r=t.data;return{data:r,featureCount:e.tileFeatureCounts.get(r.id)||0}}))}},{key:"getFeatureCount",value:function(e){var t;return null!==(t=this.tileFeatureCounts.get(e.id))&&void 0!==t?t:0}},{key:"fetchCount",value:function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t,r,i,s){var a,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==(a=this.tileFeatureCounts.get(t.id))){e.next=3;break}return e.abrupt("return",a);case 3:return e.next=5,(0,M.executeQueryForCount)(r,i,s);case 5:return u=e.sent,e.abrupt("return",(this.tileFeatureCounts.set(t.id,u.data.count),u.data.count));case 7:case"end":return e.stop()}}),e,this)})));return function(t,r,n,i){return e.apply(this,arguments)}}()},{key:"_createTileTree",value:function(e,t){var r=this,n=new ne(e.level,e.row,e.col);return t.updateTileInfo(n,k.Z.ExtrapolateOptions.POWER_OF_TWO),this.tileBounds.forEachInBounds(e.extent,(function(i){var s=r.tiles.get(i).data;r._tilesAreRelated(e,s)&&r._populateChildren(n,s,t,r.tileFeatureCounts.get(s.id)||0)})),n}},{key:"_tilesAreRelated",value:function(e,t){if(!e||!t)return!1;if(e.level===t.level)return e.row===t.row&&e.col===t.col;var r=e.level<t.level,n=r?e:t,i=r?t:e,s=1<<i.level-n.level;return Math.floor(i.row/s)===n.row&&Math.floor(i.col/s)===n.col}},{key:"_populateChildren",value:function(e,t,r,n){var i=t.level-e.level-1;if(i<0)e.isLeaf=!0;else{var s=t.row>>i,a=t.col>>i,u=e.row<<1,o=a-(e.col<<1)+(s-u<<1),l=e.children[o];if((0,d.pC)(l))this._populateChildren(l,t,r,n);else{var c=new ne(e.level+1,s,a);r.updateTileInfo(c,k.Z.ExtrapolateOptions.POWER_OF_TWO),e.children[o]=c,this._populateChildren(c,t,r,n)}}}},{key:"_simplify",value:function(e,t,r,n,i){var s=i*i;if(e.isLeaf)return t(this.getFeatureCount(e),i)?0:(this._remove(e),(0,d.pC)(r)&&(r.children[n]=null),s);for(var a=i/2,u=a*a,o=0,l=0;l<e.children.length;l++){var c=e.children[l];o+=(0,d.pC)(c)?this._simplify(c,t,e,l,a):u}return 0===o?this._mergeChildren(e):1-o/s<ae&&(this._purge(e),(0,d.pC)(r)&&(r.children[n]=null),o=s),o}},{key:"_mergeChildren",value:function(e){var t=this,r=new Set,n=0;this._forEachLeaf(e,(function(e){var i=t.tiles.get(e.id);if(i){n+=i.byteSize;var s,a=(0,S.Z)(i.objectIds);try{for(a.s();!(s=a.n()).done;){var u=s.value;r.has(u)||(r.add(u),t._referenceFeature(u))}}catch(o){a.e(o)}finally{a.f()}t._remove(e)}})),this._addTileStorage(e,r,n),e.isLeaf=!0,e.children[0]=e.children[1]=e.children[2]=e.children[3]=null,this.tileFeatureCounts.set(e.id,r.size)}},{key:"_forEachLeaf",value:function(e,t){var r,n=(0,S.Z)(e.children);try{for(n.s();!(r=n.n()).done;){var i=r.value;(0,d.Wi)(i)||(i.isLeaf?t(i):this._forEachLeaf(i,t))}}catch(s){n.e(s)}finally{n.f()}}},{key:"_purge",value:function(e){if(!(0,d.Wi)(e))if(e.isLeaf)this._remove(e);else for(var t=0;t<e.children.length;t++){var r=e.children[t];this._purge(r),e.children[t]=null}}},{key:"_collectMissingTiles",value:function(e,t,r){var n=new se(r,e,this.extent);return this._collectMissingTilesRecurse(t,n,1),n.info}},{key:"_collectMissingTilesRecurse",value:function(e,t,r){if(!e.isLeaf)if(e.hasChildren)for(var n=r/2,i=0;i<e.children.length;i++){var s=e.children[i];(0,d.Wi)(s)?t.addMissing(e.level+1,(e.row<<1)+((2&i)>>1),(e.col<<1)+(1&i),n):this._collectMissingTilesRecurse(s,t,n)}else t.addMissing(e.level,e.row,e.col,r)}},{key:"_referenceFeature",value:function(e){var t=(this.refCounts.get(e)||0)+1;return this.refCounts.set(e,t),1===t?ee.ADDED:ee.UNCHANGED}},{key:"_unreferenceFeature",value:function(e){var t=(this.refCounts.get(e)||0)-1;return 0===t?(this.refCounts.delete(e),ee.REMOVED):(t>0&&this.refCounts.set(e,t),ee.UNCHANGED)}},{key:"test",get:function(){var e=this;return{tiles:Array.from(this.tiles.values()).map((function(e){return"".concat(e.data.id,":[").concat(Array.from(e.objectIds),"]")})),featureReferences:Array.from(this.refCounts.keys()).map((function(t){return"".concat(t,":").concat(e.refCounts.get(t))}))}}}]),r}(w.Z);(0,c._)([(0,y.Cb)({constructOnly:!0})],$.prototype,"featureStore",void 0),(0,c._)([(0,y.Cb)()],$.prototype,"tileInfo",void 0),(0,c._)([(0,y.Cb)()],$.prototype,"extent",void 0),(0,c._)([(0,y.Cb)()],$.prototype,"maximumByteSize",void 0),$=(0,c._)([(0,_.j)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTileStore")],$);var ee,te,re=(0,u.Z)((function e(t,r,n){(0,a.Z)(this,e),this.data=t,this.objectIds=r,this.byteSize=n})),ne=function(){function e(t,r,n){(0,a.Z)(this,e),this.level=t,this.row=r,this.col=n,this.isLeaf=!1,this.extent=null,this.children=[null,null,null,null]}return(0,u.Z)(e,[{key:"hasChildren",get:function(){return!this.isLeaf&&((0,d.pC)(this.children[0])||(0,d.pC)(this.children[1])||(0,d.pC)(this.children[2])||(0,d.pC)(this.children[3]))}}]),e}(),ie=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];(0,a.Z)(this,e),this.missingTiles=r,this.fullArea=0,this.coveredArea=0,this.fullArea=(0,P.SO)(t.extent),this.coveredArea=this.fullArea}return(0,u.Z)(e,[{key:"prepend",value:function(e){this.missingTiles=e.missingTiles.concat(this.missingTiles),this.coveredArea+=e.coveredArea,this.fullArea+=e.fullArea}}]),e}(),se=function(){function e(t,r,n){(0,a.Z)(this,e),this.tileInfo=t,this.extent=null,this.info=new ie(r),(0,d.pC)(n)&&(this.extent=(0,P.oJ)(n))}return(0,u.Z)(e,[{key:"addMissing",value:function(e,t,r,n){var i={id:null,level:e,row:t,col:r};this.tileInfo.updateTileInfo(i,k.Z.ExtrapolateOptions.POWER_OF_TWO),(0,d.Wi)(i.extent)||(0,d.pC)(this.extent)&&!(0,P.kK)(this.extent,i.extent)||(this.info.missingTiles.push({data:i,resolution:n}),this.info.coveredArea-=(0,P.SO)(i.extent))}}]),e}(),ae=.18751;(te=ee||(ee={}))[te.ADDED=0]="ADDED",te[te.REMOVED=1]="REMOVED",te[te.UNCHANGED=2]="UNCHANGED";var ue=function(e){(0,o.Z)(r,e);var t=(0,l.Z)(r);function r(){var e;return(0,a.Z)(this,r),(e=t.apply(this,arguments)).isInitializing=!0,e.whenSetup=(0,p.dD)(),e.handles=new f.Z,e.updatingHandles=new C.t,e.pendingApplyEdits=new Map,e}return(0,u.Z)(r,[{key:"updating",get:function(){return this.featureFetcher.updating||this.isInitializing||this.updatingHandles.updating}},{key:"destroy",value:function(){this.featureFetcher.destroy(),this.queryEngine.destroy(),this.featureStore.clear(),this.handles.destroy()}},{key:"setup",value:function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t){var r,s,a,u,o,l=this;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.serviceInfo,s=r.geometryType,a=r.objectIdField,u=r.timeInfo,o=r.fields,e.abrupt("return",(this.featureStore=new F.Z((0,i.Z)((0,i.Z)({},t.serviceInfo),{},{hasZ:!1,hasM:!1})),this.queryEngine=new E.q({spatialReference:t.spatialReference,featureStore:this.featureStore,geometryType:s,fields:o,hasZ:!1,hasM:!1,objectIdField:a,timeInfo:u?T.Z.fromJSON(u):null}),this.featureFetcher=new W({store:new $({featureStore:this.featureStore}),url:t.serviceInfo.url,objectIdField:t.serviceInfo.objectIdField,globalIdField:t.serviceInfo.globalIdField,capabilities:t.serviceInfo.capabilities,spatialReference:m.Z.fromJSON(t.spatialReference),sourceSpatialReference:m.Z.fromJSON(t.serviceInfo.spatialReference)}),this.handles.add([(0,v.YP)((function(){return l.featureFetcher.availability}),(function(e){return l.emit("notify-availability",{availability:e})}),v.Z_),(0,v.YP)((function(){return l.updating}),(function(){return l._notifyUpdating()}))]),this.whenSetup.resolve(),this.isInitializing=!1,this.configure(t.configuration)));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"configure",value:function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.updatingHandles.addPromise(this.whenSetup.promise);case 2:return this._updateFeatureFetcherConfiguration(t),e.abrupt("return",{result:{}});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"fetchCandidates",value:function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t,r){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.whenSetup.promise;case 2:return(0,p.k_)(r),e.next=5,this.queryEngine.executeQueryForSnapping({point:t.point,distance:t.distance,types:t.types,query:(0,d.pC)(t.filter)?t.filter:{where:"1=1"}},(0,d.pC)(r)?r.signal:null);case 5:return e.t0=e.sent,e.abrupt("return",{result:e.t0});case 7:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"updateTiles",value:function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t,r){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.updatingHandles.addPromise(this.whenSetup.promise);case 2:return(0,p.k_)(r),this.featureFetcher.tileSize=t.tileSize,this.featureFetcher.tilesOfInterest=t.tiles,this.featureFetcher.tileInfo=(0,d.pC)(t.tileInfo)?k.Z.fromJSON(t.tileInfo):null,e.abrupt("return",{result:{}});case 7:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"refresh",value:function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t,r){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.updatingHandles.addPromise(this.whenSetup.promise);case 2:return(0,p.k_)(r),this.featureFetcher.refresh(),e.abrupt("return",{result:{}});case 5:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"whenNotUpdating",value:function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t,r){var i=this;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.updatingHandles.addPromise(this.whenSetup.promise);case 2:return(0,p.k_)(r),e.next=5,(0,v.N1)((function(){return!i.updating}),r);case 5:return(0,p.k_)(r),e.abrupt("return",{result:{}});case 7:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"getDebugInfo",value:function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t,r){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",((0,p.k_)(r),{result:this.featureFetcher.debugInfo}));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"beginApplyEdits",value:function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t,r){var i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.updatingHandles.addPromise(this.whenSetup.promise),(0,p.k_)(r),i=(0,p.dD)(),e.abrupt("return",(this.pendingApplyEdits.set(t.id,i),this.featureFetcher.applyEdits(i.promise),this.updatingHandles.addPromise(i.promise),{result:{}}));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"endApplyEdits",value:function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t,r){var i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=this.pendingApplyEdits.get(t.id),e.abrupt("return",(i&&i.resolve(t.edits),(0,p.k_)(r),{result:{}}));case 2:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_updateFeatureFetcherConfiguration",value:function(e){this.featureFetcher.filter=(0,d.pC)(e.filter)?b.Z.fromJSON(e.filter):null,this.featureFetcher.customParameters=e.customParameters}},{key:"_notifyUpdating",value:function(){this.emit("notify-updating",{updating:this.updating})}}]),r}(h.Z.EventedAccessor);function oe(){return new ue}(0,c._)([(0,y.Cb)({readOnly:!0})],ue.prototype,"updating",null),(0,c._)([(0,y.Cb)()],ue.prototype,"isInitializing",void 0),ue=(0,c._)([(0,_.j)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorker")],ue)}}]);
//# sourceMappingURL=7658.c5990d6d.chunk.js.map