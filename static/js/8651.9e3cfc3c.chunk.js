"use strict";(self.webpackChunkarcgisdemo=self.webpackChunkarcgisdemo||[]).push([[8651],{41978:function(e,t,n){n.d(t,{AM:function(){return m}});var i=n(93433),r=n(15671),a=n(43144),s=n(60136),o=n(54062),u=n(27366),l=n(85015),c=n(93169),h=n(84652),f=n(32718),v=n(49861),d=(n(25243),n(69912)),y=n(85411),p=n(32551),g=-1,m=function(e){(0,s.Z)(n,e);var t=(0,o.Z)(n);function n(e){var i;return(0,r.Z)(this,n),(i=t.call(this,e))._from=null,i._to=null,i._final=null,i._current=[],i._time=0,i.duration=(0,c.Z)("mapview-transitions-duration"),i.effects=[],i}return(0,a.Z)(n,[{key:"effect",set:function(e){if(this._get("effect")!==(e=e||"")){this._set("effect",e);try{this._transitionTo(_(e))}catch(t){this._transitionTo([]),f.Z.getLogger(this.declaredClass).warn("Invalid Effect",{effect:e,error:t})}}}},{key:"hasEffects",get:function(){return this.transitioning||!!this.effects.length}},{key:"scale",set:function(e){this._updateForScale(e)}},{key:"transitioning",get:function(){return null!==this._to}},{key:"canTransitionTo",value:function(e){try{return this.scale>0&&S(this._current,_(e),this.scale)}catch(t){return!1}}},{key:"transitionStep",value:function(e,t){this._applyTimeTransition(e),this._updateForScale(t)}},{key:"end",value:function(){this._applyTimeTransition(this.duration)}},{key:"_transitionTo",value:function(e){this.scale>0&&S(this._current,e,this.scale)?(this._final=e,this._to=(0,h.d9)(e),function(e,t,n){for(var r,a,s=e.length>t.length?e:t,o=e.length>t.length?t:e,u=o[o.length-1],l=null!==(r=null===u||void 0===u?void 0:u.scale)&&void 0!==r?r:n,c=null!==(a=null===u||void 0===u?void 0:u.effects)&&void 0!==a?a:[],h=o.length;h<s.length;h++)o.push({scale:l,effects:(0,i.Z)(c)});for(var f=0;f<s.length;f++)o[f].scale=o[f].scale===g?n:o[f].scale,s[f].scale=s[f].scale===g?n:s[f].scale,(0,p.uF)(o[f].effects,s[f].effects)}(this._current,this._to,this.scale),this._from=(0,h.d9)(this._current),this._time=0):(this._from=this._to=this._final=null,this._current=e),this._set("effects",this._current[0]?(0,h.d9)(this._current[0].effects):[])}},{key:"_applyTimeTransition",value:function(e){if(this._to&&this._from&&this._current&&this._final){this._time+=e;for(var t=Math.min(1,this._time/this.duration),n=0;n<this._current.length;n++){var i=this._current[n],r=this._from[n],a=this._to[n];i.scale=Z(r.scale,a.scale,t);for(var s=0;s<i.effects.length;s++){var o=i.effects[s],u=r.effects[s],l=a.effects[s];o.interpolate(u,l,t)}}1===t&&(this._current=this._final,this._set("effects",this._current[0]?(0,h.d9)(this._current[0].effects):[]),this._from=this._to=this._final=null)}}},{key:"_updateForScale",value:function(e){if(this._set("scale",e),0!==this._current.length){var t,n,i=this._current,r=this._current.length-1,a=1;if(1===i.length||e>=i[0].scale)n=t=i[0].effects;else if(e<=i[r].scale)n=t=i[r].effects;else for(var s=0;s<r;s++){var o=i[s],u=i[s+1];if(o.scale>=e&&u.scale<=e){a=(e-o.scale)/(u.scale-o.scale),t=o.effects,n=u.effects;break}}for(var l=0;l<this.effects.length;l++)this.effects[l].interpolate(t[l],n[l],a)}}}]),n}(l.Z);function _(e){var t=(0,y.Q)(e)||[];return function(e){var t=e[0];return!!t&&"type"in t}(t)?[{scale:g,effects:t}]:t}function S(e,t,n){var i,r,a,s;return null===(i=e[0])||void 0===i||!i.effects||null===(r=t[0])||void 0===r||!r.effects||!(((null===(a=e[0])||void 0===a?void 0:a.scale)===g||(null===(s=t[0])||void 0===s?void 0:s.scale)===g)&&(e.length>1||t.length>1)&&n<=0)&&(0,p.AS)(e[0].effects,t[0].effects)}function Z(e,t,n){return e+(t-e)*n}(0,u._)([(0,v.Cb)()],m.prototype,"_to",void 0),(0,u._)([(0,v.Cb)()],m.prototype,"duration",void 0),(0,u._)([(0,v.Cb)({value:""})],m.prototype,"effect",null),(0,u._)([(0,v.Cb)({readOnly:!0})],m.prototype,"effects",void 0),(0,u._)([(0,v.Cb)({readOnly:!0})],m.prototype,"hasEffects",null),(0,u._)([(0,v.Cb)({value:0})],m.prototype,"scale",null),(0,u._)([(0,v.Cb)({readOnly:!0})],m.prototype,"transitioning",null),m=(0,u._)([(0,d.j)("esri.layers.effects.EffectView")],m)},33624:function(e,t,n){n.d(t,{W:function(){return v}});var i=n(1413),r=n(37762),a=n(15671),s=n(43144),o=n(11752),u=n(61120),l=n(60136),c=n(54062),h=n(23588),f=n(41978),v=function(e){(0,l.Z)(n,e);var t=(0,c.Z)(n);function n(){var e;return(0,a.Z)(this,n),(e=t.apply(this,arguments))._childrenSet=new Set,e._needsSort=!1,e.children=[],e._effectView=null,e}return(0,s.Z)(n,[{key:"blendMode",get:function(){return this._blendMode},set:function(e){this._blendMode=e,this.requestRender()}},{key:"clips",get:function(){return this._clips},set:function(e){this._clips=e,this.children.forEach((function(t){return t.clips=e}))}},{key:"computedEffects",get:function(){var e,t;return null!==(e=null===(t=this._effectView)||void 0===t?void 0:t.effects)&&void 0!==e?e:null}},{key:"effect",get:function(){var e,t;return null!==(e=null===(t=this._effectView)||void 0===t?void 0:t.effect)&&void 0!==e?e:""},set:function(e){(this._effectView||e)&&(this._effectView||(this._effectView=new f.AM),this._effectView.effect=e,this.requestRender())}},{key:"updateTransitionProperties",value:function(e,t){(0,o.Z)((0,u.Z)(n.prototype),"updateTransitionProperties",this).call(this,e,t),this._effectView&&(this._effectView.transitionStep(e,t),this._effectView.transitioning&&this.requestRender())}},{key:"doRender",value:function(e){var t=this.createRenderParams(e);this.renderChildren(t)}},{key:"addChild",value:function(e){return this.addChildAt(e,this.children.length)}},{key:"addChildAt",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.children.length;if(!e)return e;if(this.contains(e))return e;this._needsSort=!0;var n=e.parent;return n&&n!==this&&n.removeChild(e),t>=this.children.length?this.children.push(e):this.children.splice(t,0,e),this._childrenSet.add(e),e.parent=this,e.stage=this.stage,this!==this.stage&&(e.clips=this.clips),this.requestRender(),e}},{key:"contains",value:function(e){return this._childrenSet.has(e)}},{key:"removeAllChildren",value:function(){this._childrenSet.clear(),this._needsSort=!0;var e,t=(0,r.Z)(this.children);try{for(t.s();!(e=t.n()).done;){var n=e.value;this!==this.stage&&(n.clips=null),n.stage=null,n.parent=null}}catch(i){t.e(i)}finally{t.f()}this.children.length=0}},{key:"removeChild",value:function(e){return this.contains(e)?this.removeChildAt(this.children.indexOf(e)):e}},{key:"removeChildAt",value:function(e){if(e<0||e>=this.children.length)return null;this._needsSort=!0;var t=this.children.splice(e,1)[0];return this._childrenSet.delete(t),this!==this.stage&&(t.clips=null),t.stage=null,t.parent=null,t}},{key:"sortChildren",value:function(e){this._needsSort&&(this.children.sort(e),this._needsSort=!1)}},{key:"_createTransforms",value:function(){return{dvs:(0,h.c)()}}},{key:"onAttach",value:function(){(0,o.Z)((0,u.Z)(n.prototype),"onAttach",this).call(this);var e,t=this.stage,i=(0,r.Z)(this.children);try{for(i.s();!(e=i.n()).done;){e.value.stage=t}}catch(a){i.e(a)}finally{i.f()}}},{key:"onDetach",value:function(){(0,o.Z)((0,u.Z)(n.prototype),"onDetach",this).call(this);var e,t=(0,r.Z)(this.children);try{for(t.s();!(e=t.n()).done;){e.value.stage=null}}catch(i){t.e(i)}finally{t.f()}}},{key:"renderChildren",value:function(e){var t,n=(0,r.Z)(this.children);try{for(n.s();!(t=n.n()).done;){t.value.beforeRender(e)}}catch(u){n.e(u)}finally{n.f()}var i,a=(0,r.Z)(this.children);try{for(a.s();!(i=a.n()).done;){i.value.processRender(e)}}catch(u){a.e(u)}finally{a.f()}var s,o=(0,r.Z)(this.children);try{for(o.s();!(s=o.n()).done;){s.value.afterRender(e)}}catch(u){o.e(u)}finally{o.f()}}},{key:"createRenderParams",value:function(e){return(0,i.Z)((0,i.Z)({},e),{},{blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:e.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition})}}]),n}(n(87422).s)},87422:function(e,t,n){n.d(t,{s:function(){return f}});var i=n(15671),r=n(43144),a=n(60136),s=n(54062),o=n(91505),u=n(93169),l=n(92026),c=n(66978),h=1/(0,u.Z)("mapview-transitions-duration"),f=function(e){(0,a.Z)(n,e);var t=(0,s.Z)(n);function n(){var e;return(0,i.Z)(this,n),(e=t.apply(this,arguments))._fadeOutResolver=null,e._fadeInResolver=null,e._clips=null,e.computedVisible=!0,e.computedOpacity=1,e.fadeTransitionEnabled=!1,e.inFadeTransition=!1,e._isReady=!1,e._opacity=1,e._stage=null,e._visible=!0,e}return(0,r.Z)(n,[{key:"clips",get:function(){return this._clips},set:function(e){this._clips=e,this.requestRender()}},{key:"isReady",get:function(){return this._isReady}},{key:"opacity",get:function(){return this._opacity},set:function(e){this._opacity!==e&&(this._opacity=Math.min(1,Math.max(e,0)),this.requestRender())}},{key:"stage",get:function(){return this._stage},set:function(e){if(this._stage!==e){var t=this._stage;this._stage=e,e?this._stage.untrashDisplayObject(this)||(this.onAttach(),this.emit("attach")):t.trashDisplayObject(this)}}},{key:"transforms",get:function(){return this._getTransforms()}},{key:"_getTransforms",value:function(){return(0,l.Wi)(this._transforms)&&(this._transforms=this._createTransforms()),this._transforms}},{key:"visible",get:function(){return this._visible},set:function(e){this._visible!==e&&(this._visible=e,this.requestRender())}},{key:"fadeIn",value:function(){return this._fadeInResolver||(this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.computedOpacity=0,this.fadeTransitionEnabled=!0,this._fadeInResolver=(0,c.hh)(),this.requestRender()),this._fadeInResolver.promise}},{key:"fadeOut",value:function(){return this._fadeOutResolver||(this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this.fadeTransitionEnabled=!0,this._fadeOutResolver=(0,c.hh)(),this.requestRender()),this._fadeOutResolver.promise}},{key:"beforeRender",value:function(e){this.updateTransitionProperties(e.deltaTime,e.state.scale)}},{key:"afterRender",value:function(e){this._fadeInResolver&&this.computedOpacity===this.opacity?(this._fadeInResolver(),this._fadeInResolver=null):this._fadeOutResolver&&0===this.computedOpacity&&(this._fadeOutResolver(),this._fadeOutResolver=null)}},{key:"remove",value:function(){var e;null===(e=this.parent)||void 0===e||e.removeChild(this)}},{key:"setTransform",value:function(e){}},{key:"processRender",value:function(e){this.stage&&this.computedVisible&&this.doRender(e)}},{key:"requestRender",value:function(){this.stage&&this.stage.requestRender()}},{key:"processDetach",value:function(){this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.onDetach(),this.emit("detach")}},{key:"updateTransitionProperties",value:function(e,t){if(this.fadeTransitionEnabled){var n=this._fadeOutResolver||!this.visible?0:this.opacity,i=this.computedOpacity;if(i===n)this.computedVisible=this.visible;else{var r=e*h;this.computedOpacity=i>n?Math.max(n,i-r):Math.min(n,i+r),this.computedVisible=this.computedOpacity>0;var a=n===this.computedOpacity;this.inFadeTransition=!a,a||this.requestRender()}}else this.computedOpacity=this.opacity,this.computedVisible=this.visible}},{key:"onAttach",value:function(){}},{key:"onDetach",value:function(){}},{key:"doRender",value:function(e){}},{key:"ready",value:function(){this._isReady||(this._isReady=!0,this.emit("isReady"),this.requestRender())}}]),n}(o.Z)},38999:function(e,t,n){var i,r;function a(e){switch(e){case"left":return i.Left;case"right":return i.Right;case"center":return i.Center}}function s(e){switch(e){case"top":return r.Top;case"middle":return r.Center;case"baseline":return r.Baseline;case"bottom":return r.Bottom}}function o(e){switch(e){case"above-left":case"esriServerPointLabelPlacementAboveLeft":return[i.Right,r.Bottom];case"above-center":case"above-along":case"esriServerPointLabelPlacementAboveCenter":case"esriServerLinePlacementAboveAlong":return[i.Center,r.Bottom];case"above-right":case"esriServerPointLabelPlacementAboveRight":return[i.Left,r.Bottom];case"center-left":case"esriServerPointLabelPlacementCenterLeft":return[i.Right,r.Center];case"center-center":case"center-along":case"esriServerPointLabelPlacementCenterCenter":case"esriServerLinePlacementCenterAlong":case"always-horizontal":case"esriServerPolygonPlacementAlwaysHorizontal":return[i.Center,r.Center];case"center-right":case"esriServerPointLabelPlacementCenterRight":return[i.Left,r.Center];case"below-left":case"esriServerPointLabelPlacementBelowLeft":return[i.Right,r.Top];case"below-center":case"below-along":case"esriServerPointLabelPlacementBelowCenter":case"esriServerLinePlacementBelowAlong":return[i.Center,r.Top];case"below-right":case"esriServerPointLabelPlacementBelowRight":return[i.Left,r.Top];default:return console.debug("Found invalid placement type ".concat(e)),[i.Center,r.Center]}}function u(e){switch(e){case i.Right:return-1;case i.Center:return 0;case i.Left:return 1;default:return console.debug("Found invalid horizontal alignment ".concat(e)),0}}function l(e){switch(e){case r.Top:return 1;case r.Center:return 0;case r.Bottom:case r.Baseline:return-1;default:return console.debug("Found invalid vertical alignment ".concat(e)),0}}function c(e){switch(e){case"left":return i.Left;case"right":return i.Right;case"center":return i.Center}}function h(e){switch(e){case"above-along":case"below-along":case"center-along":case"esriServerLinePlacementAboveAlong":case"esriServerLinePlacementBelowAlong":case"esriServerLinePlacementCenterAlong":return!0;default:return!1}}n.d(t,{Hd:function(){return c},M7:function(){return i},NS:function(){return h},TR:function(){return r},b7:function(){return s},g:function(){return u},kH:function(){return a},qv:function(){return o},tf:function(){return l}}),function(e){e[e.Left=-1]="Left",e[e.Center=0]="Center",e[e.Right=1]="Right"}(i||(i={})),function(e){e[e.Top=1]="Top",e[e.Center=0]="Center",e[e.Bottom=-1]="Bottom",e[e.Baseline=2]="Baseline"}(r||(r={}))},54815:function(e,t,n){n.d(t,{CA:function(){return g},Gq:function(){return O},Xp:function(){return p},a:function(){return L},dk:function(){return V},hF:function(){return _},jj:function(){return m},jy:function(){return y},m2:function(){return S},mE:function(){return R},qr:function(){return E}});var i=n(11752),r=n(61120),a=n(60136),s=n(54062),o=n(15671),u=n(43144),l=n(4942),c=n(1413),h=n(10064),f=n(38999),v=n(80613);var d=Object.keys(v.mD).filter((function(e){return"number"==typeof v.mD[e]})).reduce((function(e,t){return(0,c.Z)((0,c.Z)({},e),{},(0,l.Z)({},t,v.mD[t]))}),{});function y(e){return e===v.mD.OUTLINE_FILL||e===v.mD.OUTLINE_FILL_SIMPLE}function p(e){return function(e){return e===v.mD.SIMPLE||e===v.mD.OUTLINE_FILL_SIMPLE}(e.symbologyType)}function g(e){return y(e.symbologyType)}function m(e,t){switch(e){case v.LW.FILL:return V.from(t);case v.LW.LINE:return L.from(t);case v.LW.MARKER:return R.from(t);case v.LW.TEXT:return E.from(t);case v.LW.LABEL:return O.from(t);default:throw new Error("Unable to createMaterialKey for unknown geometryType ".concat(e))}}function _(e){switch(S.load(e).geometryType){case v.LW.MARKER:return new R(e);case v.LW.FILL:return new V(e);case v.LW.LINE:return new L(e);case v.LW.TEXT:return new E(e);case v.LW.LABEL:return new O(e)}}var S=function(){function e(t){(0,o.Z)(this,e),this._data=0,this._data=t}return(0,u.Z)(e,[{key:"data",get:function(){return this._data},set:function(e){this._data=e}},{key:"geometryType",get:function(){return this.bits(8,11)},set:function(e){this.setBits(e,8,11)}},{key:"mapAligned",get:function(){return!!this.bit(20)},set:function(e){this.setBit(20,e)}},{key:"sdf",get:function(){return!!this.bit(11)},set:function(e){this.setBit(11,e)}},{key:"pattern",get:function(){return!!this.bit(12)},set:function(e){this.setBit(12,e)}},{key:"textureBinding",get:function(){return this.bits(0,8)},set:function(e){this.setBits(e,0,8)}},{key:"symbologyType",get:function(){return this.bits(21,26)},set:function(e){this.setBits(e,21,26)}},{key:"geometryTypeString",get:function(){switch(this.geometryType){case v.LW.FILL:return"fill";case v.LW.MARKER:return"marker";case v.LW.LINE:return"line";case v.LW.TEXT:return"text";case v.LW.LABEL:return"label";default:throw new h.Z("Unable to handle unknown geometryType: ".concat(this.geometryType))}}},{key:"setBit",value:function(e,t){var n=1<<e;t?this._data|=n:this._data&=~n}},{key:"bit",value:function(e){return(this._data&1<<e)>>e}},{key:"setBits",value:function(e,t,n){for(var i=t,r=0;i<n;i++,r++)this.setBit(i,0!=(e&1<<r))}},{key:"bits",value:function(e,t){for(var n=0,i=e,r=0;i<t;i++,r++)n|=this.bit(i)<<r;return n}},{key:"hasVV",value:function(){return!1}},{key:"setVV",value:function(e,t){}},{key:"getVariation",value:function(){return{mapAligned:this.mapAligned,pattern:this.pattern,sdf:this.sdf,symbologyType:{value:v.mD[this.symbologyType],options:d,namespace:"SYMBOLOGY_TYPE"}}}},{key:"getVariationHash",value:function(){return this._data&~(7&this.textureBinding)}}],[{key:"load",value:function(e){var t=this.shared;return t.data=e,t}}]),e}();S.shared=new S(0);var Z=function(e){return function(e){(0,a.Z)(n,e);var t=(0,s.Z)(n);function n(){return(0,o.Z)(this,n),t.apply(this,arguments)}return(0,u.Z)(n,[{key:"vvSizeMinMaxValue",get:function(){return 0!==this.bit(16)},set:function(e){this.setBit(16,e)}},{key:"vvSizeScaleStops",get:function(){return 0!==this.bit(17)},set:function(e){this.setBit(17,e)}},{key:"vvSizeFieldStops",get:function(){return 0!==this.bit(18)},set:function(e){this.setBit(18,e)}},{key:"vvSizeUnitValue",get:function(){return 0!==this.bit(19)},set:function(e){this.setBit(19,e)}},{key:"hasVV",value:function(){return(0,i.Z)((0,r.Z)(n.prototype),"hasVV",this).call(this)||this.vvSizeMinMaxValue||this.vvSizeScaleStops||this.vvSizeFieldStops||this.vvSizeUnitValue}},{key:"setVV",value:function(e,t){(0,i.Z)((0,r.Z)(n.prototype),"setVV",this).call(this,e,t);var a=function(e,t,n){var i=v.X.SIZE_FIELD_STOPS|v.X.SIZE_MINMAX_VALUE|v.X.SIZE_SCALE_STOPS|v.X.SIZE_UNIT_VALUE,r=(t&(v.mf.FIELD_TARGETS_OUTLINE|v.mf.MINMAX_TARGETS_OUTLINE|v.mf.SCALE_TARGETS_OUTLINE|v.mf.UNIT_TARGETS_OUTLINE))>>>4;return e===v.LW.LINE&&n.isOutline||e===v.LW.FILL&&y(n.symbologyType)?i&r:i&~r}(this.geometryType,e,t)&e;this.vvSizeMinMaxValue=!!(a&v.X.SIZE_MINMAX_VALUE),this.vvSizeFieldStops=!!(a&v.X.SIZE_FIELD_STOPS),this.vvSizeUnitValue=!!(a&v.X.SIZE_UNIT_VALUE),this.vvSizeScaleStops=!!(a&v.X.SIZE_SCALE_STOPS)}}]),n}(e)},b=function(e){return function(e){(0,a.Z)(n,e);var t=(0,s.Z)(n);function n(){return(0,o.Z)(this,n),t.apply(this,arguments)}return(0,u.Z)(n,[{key:"vvRotation",get:function(){return 0!==this.bit(15)},set:function(e){this.setBit(15,e)}},{key:"hasVV",value:function(){return(0,i.Z)((0,r.Z)(n.prototype),"hasVV",this).call(this)||this.vvRotation}},{key:"setVV",value:function(e,t){(0,i.Z)((0,r.Z)(n.prototype),"setVV",this).call(this,e,t),this.vvRotation=!t.isOutline&&!!(e&v.X.ROTATION)}}]),n}(e)},k=function(e){return function(e){(0,a.Z)(n,e);var t=(0,s.Z)(n);function n(){return(0,o.Z)(this,n),t.apply(this,arguments)}return(0,u.Z)(n,[{key:"vvColor",get:function(){return 0!==this.bit(13)},set:function(e){this.setBit(13,e)}},{key:"hasVV",value:function(){return(0,i.Z)((0,r.Z)(n.prototype),"hasVV",this).call(this)||this.vvColor}},{key:"setVV",value:function(e,t){(0,i.Z)((0,r.Z)(n.prototype),"setVV",this).call(this,e,t),this.vvColor=!t.isOutline&&!!(e&v.X.COLOR)}}]),n}(e)},T=function(e){return function(e){(0,a.Z)(n,e);var t=(0,s.Z)(n);function n(){return(0,o.Z)(this,n),t.apply(this,arguments)}return(0,u.Z)(n,[{key:"vvOpacity",get:function(){return 0!==this.bit(14)},set:function(e){this.setBit(14,e)}},{key:"hasVV",value:function(){return(0,i.Z)((0,r.Z)(n.prototype),"hasVV",this).call(this)||this.vvOpacity}},{key:"setVV",value:function(e,t){(0,i.Z)((0,r.Z)(n.prototype),"setVV",this).call(this,e,t),this.vvOpacity=!t.isOutline&&!!(e&v.X.OPACITY)}}]),n}(e)},V=function(e){(0,a.Z)(n,e);var t=(0,s.Z)(n);function n(){return(0,o.Z)(this,n),t.apply(this,arguments)}return(0,u.Z)(n,[{key:"getVariation",value:function(){return(0,c.Z)((0,c.Z)({},(0,i.Z)((0,r.Z)(n.prototype),"getVariation",this).call(this)),{},{vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue})}}],[{key:"load",value:function(e){var t=this.shared;return t.data=e,t}},{key:"from",value:function(e){var t=e.symbologyType,n=e.vvFlags,i=this.load(0);return i.geometryType=v.LW.FILL,i.symbologyType=t,t!==v.mD.DOT_DENSITY&&i.setVV(n,e),i.data}}]),n}(k(T(Z(S))));V.shared=new V(0);var R=function(e){(0,a.Z)(n,e);var t=(0,s.Z)(n);function n(){return(0,o.Z)(this,n),t.apply(this,arguments)}return(0,u.Z)(n,[{key:"getVariation",value:function(){return(0,c.Z)((0,c.Z)({},(0,i.Z)((0,r.Z)(n.prototype),"getVariation",this).call(this)),{},{vvColor:this.vvColor,vvRotation:this.vvRotation,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue})}}],[{key:"load",value:function(e){var t=this.shared;return t.data=e,t}},{key:"from",value:function(e){var t=e.symbologyType,n=e.vvFlags,i=this.load(0);return i.geometryType=v.LW.MARKER,i.symbologyType=t,t!==v.mD.HEATMAP&&i.setVV(n,e),i.data}}]),n}(k(T(b(Z(S)))));R.shared=new R(0);var L=function(e){(0,a.Z)(n,e);var t=(0,s.Z)(n);function n(){return(0,o.Z)(this,n),t.apply(this,arguments)}return(0,u.Z)(n,[{key:"getVariation",value:function(){return(0,c.Z)((0,c.Z)({},(0,i.Z)((0,r.Z)(n.prototype),"getVariation",this).call(this)),{},{vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue})}}],[{key:"load",value:function(e){var t=this.shared;return t.data=e,t}},{key:"from",value:function(e){var t=this.load(0);return t.geometryType=v.LW.LINE,t.symbologyType=e.symbologyType,t.setVV(e.vvFlags,e),t.data}}]),n}(k(T(Z(S))));L.shared=new L(0);var E=function(e){(0,a.Z)(n,e);var t=(0,s.Z)(n);function n(){return(0,o.Z)(this,n),t.apply(this,arguments)}return(0,u.Z)(n,[{key:"getVariation",value:function(){return(0,c.Z)((0,c.Z)({},(0,i.Z)((0,r.Z)(n.prototype),"getVariation",this).call(this)),{},{vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvRotation:this.vvRotation,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue})}}],[{key:"load",value:function(e){var t=this.shared;return t.data=e,t}},{key:"from",value:function(e){var t=this.load(0);return t.geometryType=v.LW.TEXT,t.symbologyType=e.symbologyType,t.setVV(e.vvFlags,e),t.data}}]),n}(k(T(b(Z(S)))));E.shared=new E(0);var O=function(e){(0,a.Z)(n,e);var t=(0,s.Z)(n);function n(){return(0,o.Z)(this,n),t.apply(this,arguments)}return(0,u.Z)(n,[{key:"getVariation",value:function(){return(0,c.Z)((0,c.Z)({},(0,i.Z)((0,r.Z)(n.prototype),"getVariation",this).call(this)),{},{vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue})}}],[{key:"load",value:function(e){var t=this.shared;return t.data=e,t}},{key:"from",value:function(e){var t=this.load(0);return t.geometryType=v.LW.LABEL,t.symbologyType=e.symbologyType,t.setVV(e.vvFlags,e),t.mapAligned=(0,f.NS)(e.placement),t.data}}]),n}(Z(S));O.shared=new O(0)},10435:function(e,t,n){n.d(t,{v:function(){return s}});var i=n(15671),r=n(43144),a=n(92026),s=function(){function e(){(0,i.Z)(this,e)}return(0,r.Z)(e,null,[{key:"getStorageSpec",value:function(e){return null}},{key:"createOrUpdateRendererSchema",value:function(e,t){return(0,a.pC)(e)&&"default"===e.type?e:{type:"default"}}},{key:"getVariation",value:function(e){return{}}},{key:"getVariationHash",value:function(e){return 0}}]),e}();s.type="default",s.programSpec=null},8848:function(e,t,n){n.d(t,{t4:function(){return Z},a1:function(){return k},EJ:function(){return b}});var i=n(10064),r=n(80613),a=n(54815),s=n(10435),o=n(15671),u=n(43144),l=n(60136),c=n(54062),h=n(92026),f=n(65800),v=n(94109),d=n(8548),y=function(e){(0,l.Z)(n,e);var t=(0,c.Z)(n);function n(){return(0,o.Z)(this,n),t.apply(this,arguments)}return(0,u.Z)(n,null,[{key:"getStorageSpec",value:function(e){var t=e.attributes;return{visualVariables:!1,attributes:null!==t&&void 0!==t?t:null}}},{key:"_createRendererSchema",value:function(){return{type:"dot-density",colors:new Float32Array(32),dotValue:-1,dotSize:-1,dotScale:-1,dotBlending:!1,backgroundColor:new Float32Array(4),activeDots:new Float32Array(8),seed:-1}}},{key:"createOrUpdateRendererSchema",value:function(e,t){var n=t.attributes,i=t.dotValue,r=t.referenceScale,a=t.dotSize,s=t.dotBlendingEnabled,o=t.seed,u=t.backgroundColor,l=(0,h.pC)(e)&&"dot-density"===e.type?e:this._createRendererSchema();l.dotValue=i,l.dotSize=a,l.dotScale=r,l.dotBlending=s,l.seed=o;for(var c=l.colors,d=l.activeDots,y=l.backgroundColor,p=0;p<v.$0;p++){var g=p>=n.length?null:n[p].color;(0,f.Vs)(c,g,4*p)}for(var m=0;m<8;m++)d[m]=m<t.attributes.length?1:0;return(0,f.Vs)(y,u),l}},{key:"getVariation",value:function(e){return{ddDotBlending:e.dotBlending}}},{key:"getVariationHash",value:function(e){return e.dotBlending?1:0}}]),n}(s.v);y.type="dot-density",y.programSpec={shader:"materials/fill",vertexLayout:{geometry:[{location:0,name:"a_pos",count:2,type:d.g.SHORT},{location:1,name:"a_id",count:3,type:d.g.UNSIGNED_BYTE},{location:2,name:"a_bitset",count:1,type:d.g.UNSIGNED_BYTE},{location:3,name:"a_inverseArea",count:1,type:d.g.FLOAT}]}};var p=n(17842),g=n(27811),m=function(e){(0,l.Z)(n,e);var t=(0,c.Z)(n);function n(){return(0,o.Z)(this,n),t.apply(this,arguments)}return(0,u.Z)(n,null,[{key:"getStorageSpec",value:function(e){var t=e.field,n=e.valueExpression;return{visualVariables:!1,attributes:t||n?[{field:t,valueExpression:n}]:null}}},{key:"_createRendererSchema",value:function(){return{type:"heatmap",radius:-1,referenceScale:-1,isFieldActive:0,minDensity:-1,densityRange:-1,kernel:null,gradient:null,gradientHash:"invalid"}}},{key:"createOrUpdateRendererSchema",value:function(e,t){var n,i=t.radius,r=t.minDensity,a=t.maxDensity,s=t.referenceScale,o=t.field,u=t.valueExpression,l=t.colorStops,c=a-r,f=o||u?1:0,v=l.map((function(e){var t=e.color,n=e.ratio;return"".concat(n,":").concat(t.toString())})).join(),d=!0;return(0,h.pC)(e)&&"heatmap"===e.type?(n=e,d=v!==e.gradientHash):n=this._createRendererSchema(),n.radius=(0,p.F2)(i),n.minDensity=r,n.densityRange=c,n.referenceScale=s,n.isFieldActive=f,d&&(n.gradient=(0,g.uI)(l),n.gradientHash=v),n}}]),n}(s.v);m.type="heatmap",m.programSpec={shader:"materials/icon/heatmapAccumulate",vertexLayout:{geometry:[{location:0,name:"a_pos",count:2,type:d.g.SHORT},{location:1,name:"a_vertexOffset",count:2,type:d.g.SHORT},{location:4,name:"a_id",count:4,type:d.g.UNSIGNED_BYTE}]}};var _=n(51995),S=function(e){(0,l.Z)(n,e);var t=(0,c.Z)(n);function n(){return(0,o.Z)(this,n),t.apply(this,arguments)}return(0,u.Z)(n,null,[{key:"getStorageSpec",value:function(e){var t=e.attributes;return{visualVariables:!0,attributes:null!==t&&void 0!==t?t:null}}},{key:"_createRendererSchema",value:function(){return{type:"pie-chart",colors:new Float32Array(4*v.eV),defaultColor:new Float32Array(4),othersColor:new Float32Array(4),outlineColor:new Float32Array(4),holePercentage:0,sectorThreshold:0,outlineWidth:1,numberOfFields:10}}},{key:"createOrUpdateRendererSchema",value:function(e,t){for(var n=t.attributes,i=t.defaultColor,r=t.holePercentage,a=t.othersCategory,s=t.outline,o=(0,h.pC)(e)&&"pie-chart"===e.type?e:this._createRendererSchema(),u=0;u<v.eV;u++){var l=u>=n.length?new _.Z([0,0,0,0]):n[u].color;(0,f.Vs)(o.colors,l,4*u)}return(0,f.Vs)(o.defaultColor,i),(0,f.Vs)(o.othersColor,null===a||void 0===a?void 0:a.color),(0,f.Vs)(o.outlineColor,null===s||void 0===s?void 0:s.color),o.outlineWidth=(0,p.F2)((null===s||void 0===s?void 0:s.width)||0),o.holePercentage=r,o.sectorThreshold=(null===a||void 0===a?void 0:a.threshold)||0,o.numberOfFields=n.length,o}},{key:"getVariation",value:function(e){return{numberOfFields:e.numberOfFields}}},{key:"getVariationHash",value:function(e){return e.numberOfFields}}]),n}(s.v);function Z(e,t){if(e.type!==t)throw new i.Z("material-view-model:unexpected-renderer-schema",'expected to find renderer schema of type "'.concat(t,'" but found type "').concat(e.type,'"'))}function b(e){switch(e.type){case"dot-density":return y;case"heatmap":return m;case"pie-chart":return S;default:return s.v}}function k(e){var t=a.m2.load(e),n=t.geometryType,i=t.symbologyType;switch(n){case r.LW.FILL:if(i===r.mD.DOT_DENSITY)return y;break;case r.LW.MARKER:switch(i){case r.mD.HEATMAP:return m;case r.mD.PIE_CHART:return S}}return s.v}S.type="pie-chart",S.programSpec={shader:"materials/pie",vertexLayout:{geometry:[{location:0,name:"a_pos",count:2,type:d.g.SHORT},{location:1,name:"a_vertexOffset",count:2,type:d.g.SHORT},{location:2,name:"a_texCoords",count:2,type:d.g.UNSIGNED_SHORT},{location:3,name:"a_bitSetAndDistRatio",count:2,type:d.g.UNSIGNED_SHORT},{location:4,name:"a_id",count:4,type:d.g.UNSIGNED_BYTE},{location:5,name:"a_color",count:4,type:d.g.UNSIGNED_BYTE,normalized:!0},{location:6,name:"a_outlineColor",count:4,type:d.g.UNSIGNED_BYTE,normalized:!0},{location:7,name:"a_sizeAndOutlineWidth",count:4,type:d.g.UNSIGNED_BYTE},{location:8,name:"a_zoomRange",count:2,type:d.g.UNSIGNED_SHORT}]},hittestAttributes:["a_vertexOffset","a_texCoords"]}}}]);
//# sourceMappingURL=8651.9e3cfc3c.chunk.js.map