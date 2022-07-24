"use strict";(self.webpackChunkarcgisdemo=self.webpackChunkarcgisdemo||[]).push([[3139,3388],{32698:function(e,r,t){t.d(r,{Y:function(){return i},h:function(){return u}});var n=t(35995),a=t(70032);function u(e){return{origin:"portal-item",url:(0,n.mN)(e.itemUrl),portal:e.portal||a.Z.getDefault(),portalItem:e,readResourcePaths:[]}}function i(e){return{origin:"portal-item",messages:[],writtenProperties:[],url:e.itemUrl?(0,n.mN)(e.itemUrl):null,portal:e.portal||a.Z.getDefault(),portalItem:e}}},33388:function(e,r,t){t.r(r),t.d(r,{getFirstLayerOrTableId:function(){return g},getNumLayersAndTables:function(){return Z},load:function(){return p},preprocessFSItemData:function(){return w}});var n=t(74165),a=t(15861),u=t(10064),i=t(19610),o=t(70032),c=t(32698),s=t(21371),l=t(41226);function p(e,r){return f.apply(this,arguments)}function f(){return(f=(0,a.Z)((0,n.Z)().mark((function e(r,t){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a=r.instance.portalItem)||!a.id){e.next=6;break}return e.next=4,a.load(t);case 4:return y(r),e.abrupt("return",d(r,t));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){var r=e.instance.portalItem;if(!e.supportedTypes.includes(r.type))throw new u.Z("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:r.type,expectedType:e.supportedTypes.join(", ")})}function d(e,r){return v.apply(this,arguments)}function v(){return v=(0,a.Z)((0,n.Z)().mark((function e(r,t){var a,u,i,o,l,p;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=r.instance,u=a.portalItem,i=u.url,o=u.title,l=(0,c.h)(u),"group"!==a.type){e.next=3;break}return e.abrupt("return",(a.read({title:o},l),m(a,r)));case 3:return i&&a.read({url:i},l),e.next=6,I(r,t);case 6:return p=e.sent,e.abrupt("return",(p&&a.read(p,l),a.resourceReferences={portalItem:u,paths:l.readResourcePaths},a.read({title:o},l),(0,s.y)(a,l)));case 8:case"end":return e.stop()}}),e)}))),v.apply(this,arguments)}function m(e,r){var t,o,c=e.portalItem.type;switch(c){case"Feature Service":case"Feature Collection":t=i.T.FeatureLayer;break;case"Stream Service":t=i.T.StreamLayer;break;case"Scene Service":t=i.T.SceneLayer;break;default:throw new u.Z("portal:unsupported-item-type-as-group","The item type '".concat(c,"' is not supported as a 'IGroupLayer'"))}return t().then((function(e){return o=e,I(r)})).then(function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if("Feature Service"!==c){r.next=7;break}return r.next=3,w(t,e.portalItem.url);case 3:t=r.sent,r.t0=b(e,o,t),r.next=8;break;case 7:r.t0=Z(t)>0?b(e,o,t):h(e,o);case 8:return r.abrupt("return",r.t0);case 9:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())}function h(e,r){return e.portalItem.url?(0,l.b)(e.portalItem.url).then((function(t){var n,a;function u(e){return{id:e.id,name:e.name}}t&&b(e,r,{layers:null===(n=t.layers)||void 0===n?void 0:n.map(u),tables:null===(a=t.tables)||void 0===a?void 0:a.map(u)})})):Promise.resolve()}function b(e,r,t){var n=t.layers||[],a=t.tables||[];"Feature Collection"===e.portalItem.type&&(n.forEach((function(e){var r;"Table"===(null===e||void 0===e||null===(r=e.layerDefinition)||void 0===r?void 0:r.type)&&a.push(e)})),n=n.filter((function(e){var r;return"Table"!==(null===e||void 0===e||null===(r=e.layerDefinition)||void 0===r?void 0:r.type)}))),n.reverse().forEach((function(n){var a=L(e,r,t,n);e.add(a)})),a.reverse().forEach((function(n){var a=L(e,r,t,n);e.tables.add(a)}))}function L(e,r,t,n){var a=new r({portalItem:e.portalItem.clone(),layerId:n.id,sublayerTitleMode:"service-name"});if("Feature Collection"===e.portalItem.type){var u={origin:"portal-item",portal:e.portalItem.portal||o.Z.getDefault()};a.read(n,u);var i=t.showLegend;null!=i&&a.read({showLegend:i},u)}return a}function I(e,r){if(!1===e.supportsData)return Promise.resolve(void 0);var t=e.instance;return t.portalItem.fetchData("json",r).catch((function(){return null})).then(function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var a,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!k(t)){e.next=3;break}return u=!0,e.abrupt("return",(r&&Z(r)>0&&(null==t.layerId&&(t.layerId=g(r)),(a=S(r,t.layerId))&&(1===Z(r)&&(u=!1),null!=r.showLegend&&(a.showLegend=r.showLegend))),u&&"service-name"!==t.sublayerTitleMode&&(t.sublayerTitleMode="item-title-and-service-name"),a));case 3:return e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}())}function w(e,r){return x.apply(this,arguments)}function x(){return(x=(0,a.Z)((0,n.Z)().mark((function e(r,t){var a,u,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=(null===(a=r)||void 0===a?void 0:a.layers)&&null!=(null===(u=r)||void 0===u?void 0:u.tables)){e.next=5;break}return e.next=3,(0,l.b)(t);case 3:i=e.sent,(r=r||{}).layers=r.layers||(null===i||void 0===i?void 0:i.layers),r.tables=r.tables||(null===i||void 0===i?void 0:i.tables);case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){var r=e.layers;if(r&&r.length)return r[0].id;var t=e.tables;return t&&t.length?t[0].id:null}function S(e,r){var t=e.layers;if(t)for(var n=0;n<t.length;n++)if(t[n].id===r)return t[n];var a=e.tables;if(a)for(var u=0;u<a.length;u++)if(a[u].id===r)return a[u];return null}function Z(e){var r,t,n,a;return(null!==(r=null===e||void 0===e||null===(t=e.layers)||void 0===t?void 0:t.length)&&void 0!==r?r:0)+(null!==(n=null===e||void 0===e||null===(a=e.tables)||void 0===a?void 0:a.length)&&void 0!==n?n:0)}function k(e){return"stream"!==e.type&&"layerId"in e}},73117:function(e,r,t){t.d(r,{$o:function(){return d},Kz:function(){return m},_$:function(){return f},ck:function(){return y},qj:function(){return p}});var n=t(37762),a=t(74165),u=t(15861),i=t(52587),o=t(78952),c=t(81753);function s(e){return l.apply(this,arguments)}function l(){return l=(0,u.Z)((0,a.Z)().mark((function e(r){var t,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=r.spatialReference).isWGS84){e.next=3;break}return e.abrupt("return",r.clone());case 3:if(!t.isWebMercator){e.next=5;break}return e.abrupt("return",(0,c.Sx)(r));case 5:return n=o.Z.WGS84,e.next=8,(0,i.iQ)(t,n);case 8:return e.abrupt("return",(0,i.iV)(r,n));case 9:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function p(e,r){if(!f(e,r)){var t=e.typeKeywords;t?t.push(r):e.typeKeywords=[r]}}function f(e,r){var t;return!(null===(t=e.typeKeywords)||void 0===t||!t.includes(r))}function y(e,r){var t=e.typeKeywords;if(t){var n=t.indexOf(r);n>-1&&t.splice(n,1)}}function d(e){return v.apply(this,arguments)}function v(){return(v=(0,u.Z)((0,a.Z)().mark((function e(r){var t,u,i,o,c;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=r.clone().normalize()).length>1){i=(0,n.Z)(t);try{for(i.s();!(o=i.n()).done;)c=o.value,u?c.width>u.width&&(u=c):u=c}catch(a){i.e(a)}finally{i.f()}}else u=t[0];return e.abrupt("return",s(u));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var m={DEVELOPER_BASEMAP:"DeveloperBasemap",JSAPI:"ArcGIS API for JavaScript",METADATA:"Metadata",MULTI_LAYER:"Multilayer",SINGLE_LAYER:"Singlelayer",TABLE:"Table"}},43139:function(e,r,t){t.r(r),t.d(r,{fromItem:function(){return f},selectLayerClassPath:function(){return y}});var n=t(74165),a=t(15861),u=t(1413),i=t(10064),o=t(19610),c=t(98995),s=t(33388),l=t(73117),p=t(41226);function f(e){return!e.portalItem||e.portalItem instanceof c.default||(e=(0,u.Z)((0,u.Z)({},e),{},{portalItem:new c.default(e.portalItem)})),function(e){return e.load().then(y).then(d)}(e.portalItem).then((function(r){var t=(0,u.Z)({portalItem:e.portalItem},r.properties);return new(0,r.constructor)(t)}))}function y(e){switch(e.type){case"Map Service":return function(e){return(0,p.b)(e.url).then((function(e){return e.tileInfo}))}(e).then((function(e){return e?{className:"TileLayer"}:{className:"MapImageLayer"}}));case"Feature Service":return function(e){return h(e).then((function(e){if("object"==typeof e){var r={};return null!=e.id&&(r.layerId=e.id),{className:"FeatureLayer",properties:r}}return{className:"GroupLayer"}}))}(e);case"Feature Collection":return function(e){return v.apply(this,arguments)}(e);case"Scene Service":return function(e){return h(e).then((function(r){if("object"==typeof r){var t,n={};if(null!=r.id?(n.layerId=r.id,t="".concat(e.url,"/layers/").concat(r.id)):t=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0)for(var a={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"},u=0,i=Object.keys(a);u<i.length;u++){var o=i[u];if(e.typeKeywords.includes(o))return{className:a[o]}}return(0,p.b)(t).then((function(e){var r="SceneLayer",t={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return e&&e.layerType&&t[e.layerType]&&(r=t[e.layerType]),{className:r,properties:n}}))}return!1===r?(0,p.b)(e.url).then((function(e){return"Voxel"===(null===e||void 0===e?void 0:e.layerType)?{className:"VoxelLayer"}:{className:"GroupLayer"}})):{className:"GroupLayer"}}))}(e);case"Image Service":return function(e){return m.apply(this,arguments)}(e);case"Stream Service":case"Feed":return{className:"StreamLayer"};case"Vector Tile Service":return{className:"VectorTileLayer"};case"KML":return{className:"KMLLayer"};case"WFS":return{className:"WFSLayer"};case"WMTS":return{className:"WMTSLayer"};case"WMS":return{className:"WMSLayer"};default:return Promise.reject(new i.Z("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type}))}}function d(e){return(0,o.T[e.className])().then((function(r){return{constructor:r,properties:e.properties}}))}function v(){return(v=(0,a.Z)((0,n.Z)().mark((function e(r){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.load();case 2:if(!(0,l._$)(r,"Map Notes")){e.next=4;break}return e.abrupt("return",{className:"MapNotesLayer"});case 4:if(!(0,l._$)(r,"Route Layer")){e.next=6;break}return e.abrupt("return",{className:"RouteLayer"});case 6:return e.next=8,r.fetchData();case 8:return t=e.sent,e.abrupt("return",1===(0,s.getNumLayersAndTables)(t)?{className:"FeatureLayer"}:{className:"GroupLayer"});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return(m=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a,u,i,o,c,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.load();case 2:if(o=null!==(t=null===(a=r.typeKeywords)||void 0===a?void 0:a.map((function(e){return e.toLowerCase()})))&&void 0!==t?t:[],!o.includes("elevation 3d layer")){e.next=5;break}return e.abrupt("return",{className:"ElevationLayer"});case 5:if(!o.includes("tiled imagery")){e.next=7;break}return e.abrupt("return",{className:"ImageryTileLayer"});case 7:return e.next=9,r.fetchData();case 9:if(e.t1=u=e.sent,e.t0=null===e.t1,e.t0){e.next=13;break}e.t0=void 0===u;case 13:if(!e.t0){e.next=17;break}e.t2=void 0,e.next=18;break;case 17:e.t2=u.layerType;case 18:if("ArcGISTiledImageServiceLayer"!==(c=e.t2)){e.next=21;break}return e.abrupt("return",{className:"ImageryTileLayer"});case 21:if("ArcGISImageServiceLayer"!==c){e.next=23;break}return e.abrupt("return",{className:"ImageryLayer"});case 23:return e.next=25,(0,p.b)(r.url);case 25:if(e.t4=i=e.sent.cacheType,e.t3=null===e.t4,e.t3){e.next=29;break}e.t3=void 0===i;case 29:if(!e.t3){e.next=33;break}e.t5=void 0,e.next=34;break;case 33:e.t5=i.toLowerCase();case 34:return s=e.t5,e.abrupt("return","map"===s?{className:"ImageryTileLayer"}:{className:"ImageryLayer"});case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return!e.url||e.url.match(/\/\d+$/)?Promise.resolve({}):e.load().then((function(){return e.fetchData()})).then(function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if("Feature Service"!==e.type){r.next=6;break}return r.t0=b,r.next=4,(0,s.preprocessFSItemData)(t,e.url);case 4:return r.t1=t=r.sent,r.abrupt("return",(0,r.t0)(r.t1));case 6:return r.abrupt("return",(0,s.getNumLayersAndTables)(t)>0?b(t):(0,p.b)(e.url).then(b));case 7:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())}function b(e){return 1===(0,s.getNumLayersAndTables)(e)&&{id:(0,s.getFirstLayerOrTableId)(e)}}},41226:function(e,r,t){t.d(r,{b:function(){return i}});var n=t(74165),a=t(15861),u=t(76200);function i(e){return o.apply(this,arguments)}function o(){return o=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.default)(r,{responseType:"json",query:{f:"json"}});case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)}))),o.apply(this,arguments)}}}]);
//# sourceMappingURL=3139.373310e9.chunk.js.map