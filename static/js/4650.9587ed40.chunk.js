"use strict";(self.webpackChunkarcgisdemo=self.webpackChunkarcgisdemo||[]).push([[4650],{94650:function(e,r,t){t.r(r),t.d(r,{fetchFeatureService:function(){return k},fromUrl:function(){return y}});var n=t(74165),a=t(1413),u=t(15861),s=t(76200),l=t(10064),o=t(92026),i=t(35995),c=t(25899),p=t(19610);function y(e){return d.apply(this,arguments)}function d(){return(d=(0,u.Z)((0,n.Z)().mark((function e(r){var u,s,l,o,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=null===(u=r.properties)||void 0===u?void 0:u.customParameters,e.next=3,b(r.url,s);case 3:if(l=e.sent,o=(0,a.Z)((0,a.Z)({},r.properties),{},{url:r.url}),l.sublayerIds){e.next=7;break}return e.abrupt("return",(null!=l.layerOrTableId&&(o.layerId=l.layerOrTableId,o.sourceJSON=l.sourceJSON),new l.Constructor(o)));case 7:return e.next=10,t.e(5069).then(t.bind(t,65069));case 10:return e.t0=e.sent.default,e.t1={title:l.parsedUrl.title},i=new e.t0(e.t1),e.abrupt("return",(v(i,l,o),i));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e,r){return e?e.find((function(e){return e.id===r})):null}function v(e,r,t){function n(e,n){var u=(0,a.Z)((0,a.Z)({},t),{},{layerId:e,sublayerTitleMode:"service-name"});return(0,o.pC)(n)&&(u.sourceJSON=n),new r.Constructor(u)}r.sublayerIds.forEach((function(t){var a=n(t,f(r.sublayerInfos,t));e.add(a)})),r.tableIds.forEach((function(t){var a=n(t,f(r.tableInfos,t));e.tables.add(a)}))}function b(e,r){return h.apply(this,arguments)}function h(){return h=(0,u.Z)((0,n.Z)().mark((function e(r,t){var a,u,s,i,p,y,d,f,v,b,h,I,S;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=(0,c.Qc)(r),e.t0=(0,o.Wi)(a),!e.t0){e.next=6;break}return e.next=5,m(r,t);case 5:a=e.sent;case 6:if(!(0,o.Wi)(a)){e.next=8;break}throw new l.Z("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:r});case 8:s=(u=a).serverType,i=u.sublayer,y={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"},e.t1=s,e.next="MapServer"===e.t1?13:"ImageServer"===e.t1?15:"SceneServer"===e.t1?17:19;break;case 13:return p=null!=i?"FeatureLayer":T(r,t).then((function(e){return e?"TileLayer":"MapImageLayer"})),e.abrupt("break",20);case 15:return p=C(r,{customParameters:t}).then((function(e){var r=e.tileInfo&&e.tileInfo.format;return e.tileInfo?"LERC"!==(null===r||void 0===r?void 0:r.toUpperCase())||e.cacheType&&"elevation"!==e.cacheType.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer"})),e.abrupt("break",20);case 17:return p=C(a.url.path,{customParameters:t}).then((function(e){if(e){if("Voxel"===(null===e||void 0===e?void 0:e.layerType))return"VoxelLayer";if(null!==e&&void 0!==e&&e.layers&&Array.isArray(e.layers)&&e.layers.length>0){var r,t={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"},n=null===(r=e.layers[0])||void 0===r?void 0:r.layerType;if(null!=t[n])return t[n]}}return"SceneLayer"})),e.abrupt("break",20);case 19:p=y[s];case 20:return d={FeatureLayer:!0,SceneLayer:!0},v={parsedUrl:a,Constructor:null,layerOrTableId:(f="FeatureServer"===s)?i:null,sublayerIds:null,tableIds:null},e.next=25,p;case 25:if(b=e.sent,!d[b]||null!=i){e.next=32;break}return e.next=29,x(r,s,t);case 29:S=e.sent,f&&(v.sublayerInfos=S.layerInfos,v.tableInfos=S.tableInfos),1!==S.layerIds.length+S.tableIds.length?(v.sublayerIds=S.layerIds,v.tableIds=S.tableIds):f&&(v.layerOrTableId=null!==(h=S.layerIds[0])&&void 0!==h?h:S.tableIds[0],v.sourceJSON=null!==(I=S.layerInfos[0])&&void 0!==I?I:S.tableInfos[0]);case 32:return e.next=34,L(b);case 34:return v.Constructor=e.sent,e.abrupt("return",v);case 36:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}function m(e,r){return I.apply(this,arguments)}function I(){return I=(0,u.Z)((0,n.Z)().mark((function e(r,t){var a,u,s,l,p,y;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(r,{customParameters:t});case 2:if(u=e.sent,s=null,l=null,"Feature Layer"===(p=u.type)||"Table"===p?(s="FeatureServer",l=u.id):"indexedVector"===p?s="VectorTileServer":u.hasOwnProperty("mapName")?s="MapServer":u.hasOwnProperty("bandCount")&&u.hasOwnProperty("pixelSizeX")?s="ImageServer":u.hasOwnProperty("maxRecordCount")&&u.hasOwnProperty("allowGeometryUpdates")?s="FeatureServer":u.hasOwnProperty("streamUrls")?s="StreamServer":S(u)?(s="SceneServer",l=u.id):u.hasOwnProperty("layers")&&S(null===(a=u.layers)||void 0===a?void 0:a[0])&&(s="SceneServer"),s){e.next=7;break}return e.abrupt("return",null);case 7:return y=null!=l?(0,c.DR)(r):null,e.abrupt("return",{title:(0,o.pC)(y)&&u.name||(0,i.vt)(r),serverType:s,sublayer:l,url:{path:(0,o.pC)(y)?y.serviceUrl:(0,i.mN)(r).path}});case 9:case"end":return e.stop()}}),e)}))),I.apply(this,arguments)}function S(e){return(null===e||void 0===e?void 0:e.hasOwnProperty("store"))&&e.hasOwnProperty("id")&&"number"==typeof e.id}function x(e,r,t){return w.apply(this,arguments)}function w(){return(w=(0,u.Z)((0,n.Z)().mark((function e(r,t,a){var u,s,l,o,i,c,p;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=!1,"FeatureServer"!==t){e.next=8;break}return e.next=4,k(r,{customParameters:a});case 4:i=e.sent,o=!!i.layersJSON,l=i.layersJSON||i.serviceJSON,e.next=11;break;case 8:return e.next=10,C(r,{customParameters:a});case 10:l=e.sent;case 11:return c=null===(u=l)||void 0===u?void 0:u.layers,p=null===(s=l)||void 0===s?void 0:s.tables,e.abrupt("return",{layerIds:(null===c||void 0===c?void 0:c.map((function(e){return e.id})).reverse())||[],tableIds:(null===p||void 0===p?void 0:p.map((function(e){return e.id})).reverse())||[],layerInfos:o?c:[],tableInfos:o?p:[]});case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e){return!e.type||"Feature Layer"===e.type}function k(e,r){return O.apply(this,arguments)}function O(){return(O=(0,u.Z)((0,n.Z)().mark((function e(r,t){var a,u,s,l,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(r,t);case 2:if((s=(s=e.sent)||{}).layers=(null===(a=s.layers)||void 0===a?void 0:a.filter(Z))||[],l={serviceJSON:s},!(s.currentVersion<10.5)){e.next=7;break}return e.abrupt("return",l);case 7:return e.next=9,C(r+"/layers",t);case 9:return o=e.sent,e.abrupt("return",(l.layersJSON={layers:(null===o||void 0===o||null===(u=o.layers)||void 0===u?void 0:u.filter(Z))||[],tables:(null===o||void 0===o?void 0:o.tables)||[]},l));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e){return P.apply(this,arguments)}function P(){return(P=(0,u.Z)((0,n.Z)().mark((function e(r){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,p.T[r])());case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e,r){return g.apply(this,arguments)}function g(){return(g=(0,u.Z)((0,n.Z)().mark((function e(r,t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(r,{customParameters:t});case 2:return e.abrupt("return",e.sent.tileInfo);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e,r){return F.apply(this,arguments)}function F(){return(F=(0,u.Z)((0,n.Z)().mark((function e(r,t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.default)(r,{responseType:"json",query:(0,a.Z)((0,a.Z)({f:"json"},null===t||void 0===t?void 0:t.customParameters),{},{token:null===t||void 0===t?void 0:t.apiKey})});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=4650.9587ed40.chunk.js.map