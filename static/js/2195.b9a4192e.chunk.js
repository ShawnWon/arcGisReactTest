"use strict";(self.webpackChunkarcgisdemo=self.webpackChunkarcgisdemo||[]).push([[2195],{95986:function(e,t,i){i.d(t,{y:function(){return N}});var n,r=i(15671),s=i(43144),o=i(11752),a=i(61120),l=i(60136),u=i(54062),p=i(27366),d=i(40281),c=i(60354),y=i(10064),h=i(94172),v=i(49861),f=(i(63780),i(93169),i(25243),i(69912)),g=i(33624),b=i(46784),w=(i(32718),i(75366),function(e){(0,l.Z)(i,e);var t=(0,u.Z)(i);function i(){return(0,r.Z)(this,i),t.apply(this,arguments)}return(0,s.Z)(i)}(b.wq)),_=w=(0,p._)([(0,f.j)("esri.views.layers.support.ClipArea")],w),C=n=function(e){(0,l.Z)(i,e);var t=(0,u.Z)(i);function i(){var e;return(0,r.Z)(this,i),(e=t.apply(this,arguments)).type="rect",e.left=null,e.right=null,e.top=null,e.bottom=null,e}return(0,s.Z)(i,[{key:"clone",value:function(){return new n({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}},{key:"version",get:function(){return(this._get("version")||0)+1}}]),i}(_);(0,p._)([(0,v.Cb)({type:[Number,String],json:{write:!0}})],C.prototype,"left",void 0),(0,p._)([(0,v.Cb)({type:[Number,String],json:{write:!0}})],C.prototype,"right",void 0),(0,p._)([(0,v.Cb)({type:[Number,String],json:{write:!0}})],C.prototype,"top",void 0),(0,p._)([(0,v.Cb)({type:[Number,String],json:{write:!0}})],C.prototype,"bottom",void 0),(0,p._)([(0,v.Cb)({readOnly:!0})],C.prototype,"version",null);var Z,k=C=n=(0,p._)([(0,f.j)("esri.views.layers.support.ClipRect")],C),m=(i(59486),i(32238)),R=i(77981),S=i(53866),q=i(80885),O={base:m.Z,key:"type",typeMap:{extent:S.Z,polygon:q.Z}},P=Z=function(e){(0,l.Z)(i,e);var t=(0,u.Z)(i);function i(){var e;return(0,r.Z)(this,i),(e=t.apply(this,arguments)).type="geometry",e.geometry=null,e}return(0,s.Z)(i,[{key:"version",get:function(){return(this._get("version")||0)+1}},{key:"clone",value:function(){return new Z({geometry:this.geometry.clone()})}}]),i}(_);(0,p._)([(0,v.Cb)({types:O,json:{read:R.im,write:!0}})],P.prototype,"geometry",void 0),(0,p._)([(0,v.Cb)({readOnly:!0})],P.prototype,"version",null);var j=P=Z=(0,p._)([(0,f.j)("esri.views.layers.support.Geometry")],P),A=function(e){(0,l.Z)(i,e);var t=(0,u.Z)(i);function i(){var e;return(0,r.Z)(this,i),(e=t.apply(this,arguments)).type="path",e.path=[],e}return(0,s.Z)(i,[{key:"version",get:function(){return(this._get("version")||0)+1}}]),i}(_);(0,p._)([(0,v.Cb)({type:[[[Number]]],json:{write:!0}})],A.prototype,"path",void 0),(0,p._)([(0,v.Cb)({readOnly:!0})],A.prototype,"version",null);var I=A=(0,p._)([(0,f.j)("esri.views.layers.support.Path")],A),U=d.Z.ofType({key:"type",base:_,typeMap:{rect:k,path:I,geometry:j}}),N=function(e){var t=function(e){(0,l.Z)(i,e);var t=(0,u.Z)(i);function i(){var e;return(0,r.Z)(this,i),(e=t.apply(this,arguments)).attached=!1,e.clips=new U,e.lastUpdateId=-1,e.moving=!1,e.updateRequested=!1,e}return(0,s.Z)(i,[{key:"initialize",value:function(){var e,t,i,n,r=this,s=null===(e=null===(t=this.view)||void 0===t?void 0:t.spatialReferenceLocked)||void 0===e||e;(null===(i=this.view)||void 0===i?void 0:i.spatialReference)&&s&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new y.Z("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new g.W),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([(0,h.YP)((function(){return r.suspended}),(function(e){r.container&&(r.container.visible=!e),r.view&&!e&&r.updateRequested&&r.view.requestUpdate()}),h.tX),(0,h.YP)((function(){var e,t;return null!==(e=null===(t=r.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1}),(function(e){r.container&&(r.container.opacity=e)}),h.tX),(0,h.YP)((function(){return r.layer&&"blendMode"in r.layer?r.layer.blendMode:"normal"}),(function(e){r.container&&(r.container.blendMode=e)}),h.tX),(0,h.YP)((function(){return r.layer&&"effect"in r.layer?r.layer.effect:null}),(function(e){r.container&&(r.container.effect=e)}),h.tX),(0,h.on)((function(){return r.clips}),"change",(function(){r.container&&(r.container.clips=r.clips)}))]),null!==(n=this.view)&&void 0!==n&&n.whenLayerView?this.view.whenLayerView(this.layer).then((function(e){e===r&&r.processAttach()}),(function(){})):this.when().then((function(){r.processAttach()}),(function(){})))}},{key:"destroy",value:function(){this.processDetach(),this.updateRequested=!1}},{key:"spatialReferenceSupported",get:function(){var e,t=null===(e=this.view)||void 0===e?void 0:e.spatialReference;return null==t||this.supportsSpatialReference(t)}},{key:"updating",get:function(){var e;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(null===(e=this.updatingHandles)||void 0===e||!e.updating))}},{key:"visibleAtCurrentScale",get:function(){return this.isVisibleAtScale(this.view.scale)}},{key:"processAttach",value:function(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}},{key:"processDetach",value:function(){this.attached&&(this.attached=!1,this.detach(),this.updateRequested=!1)}},{key:"isVisibleAtScale",value:function(e){var t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!t)return!0;var i=t.minScale,n=t.maxScale;return(0===i||e<=i)&&(0===n||e>=n)}},{key:"requestUpdate",value:function(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}},{key:"processUpdate",value:function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}},{key:"hitTest",value:function(e,t){return Promise.resolve(null)}},{key:"supportsSpatialReference",value:function(e){return!0}},{key:"canResume",value:function(){return!!this.spatialReferenceSupported&&!!(0,o.Z)((0,a.Z)(i.prototype),"canResume",this).call(this)&&this.visibleAtCurrentScale}},{key:"getSuspendInfo",value:function(){var e=(0,o.Z)((0,a.Z)(i.prototype),"getSuspendInfo",this).call(this),t=!this.spatialReferenceSupported,n=this.visibleAtCurrentScale;return t&&(e.spatialReferenceNotSupported=t),n&&(e.outsideScaleRange=n),e}}]),i}(e);return(0,p._)([(0,v.Cb)()],t.prototype,"attached",void 0),(0,p._)([(0,v.Cb)({type:U,set:function(e){var t=(0,c.Z)(e,this._get("clips"),U);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,p._)([(0,v.Cb)()],t.prototype,"container",void 0),(0,p._)([(0,v.Cb)()],t.prototype,"moving",void 0),(0,p._)([(0,v.Cb)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),(0,p._)([(0,v.Cb)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,p._)([(0,v.Cb)()],t.prototype,"updateRequested",void 0),(0,p._)([(0,v.Cb)()],t.prototype,"updating",null),(0,p._)([(0,v.Cb)()],t.prototype,"view",void 0),(0,p._)([(0,v.Cb)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",null),t=(0,p._)([(0,f.j)("esri.views.2d.layers.LayerView2D")],t)}},67581:function(e,t,i){i.d(t,{Z:function(){return b}});var n=i(15671),r=i(43144),s=i(60136),o=i(54062),a=i(27366),l=i(85015),u=i(91505),p=i(41691),d=i(79056),c=i(32718),y=i(92026),h=i(67426),v=i(49861),f=(i(63780),i(93169),i(25243),i(69912)),g=function(e){(0,s.Z)(i,e);var t=(0,o.Z)(i);function i(e){var r;return(0,n.Z)(this,i),(r=t.call(this,e)).layer=null,r.parent=null,r}return(0,r.Z)(i,[{key:"initialize",value:function(){var e=this;this.when().catch((function(t){if("layerview:create-error"!==t.name){var i=e.layer&&e.layer.id||"no id",n=e.layer&&e.layer.title||"no title";c.Z.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '".concat(n,"', id: '").concat(i,"')"),t)}}))}},{key:"fullOpacity",get:function(){return(0,y.Pt)(this.get("layer.opacity"),1)*(0,y.Pt)(this.get("parent.fullOpacity"),1)}},{key:"suspended",get:function(){return!this.canResume()}},{key:"suspendInfo",get:function(){return this.getSuspendInfo()}},{key:"legendEnabled",get:function(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}},{key:"updating",get:function(){var e;return!((null===(e=this.updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}},{key:"updatingProgress",get:function(){return this.updating?0:1}},{key:"visible",get:function(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}},{key:"canResume",value:function(){var e,t,i;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(i=this.view)||void 0===i?void 0:i.ready)||!1}},{key:"getSuspendInfo",value:function(){var e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}},{key:"isUpdating",value:function(){return!1}}]),i}((0,p.p)((0,d.IG)((0,h.v)(u.Z.EventedMixin(l.Z)))));(0,a._)([(0,v.Cb)()],g.prototype,"fullOpacity",null),(0,a._)([(0,v.Cb)()],g.prototype,"layer",void 0),(0,a._)([(0,v.Cb)()],g.prototype,"parent",void 0),(0,a._)([(0,v.Cb)({readOnly:!0})],g.prototype,"suspended",null),(0,a._)([(0,v.Cb)({readOnly:!0})],g.prototype,"suspendInfo",null),(0,a._)([(0,v.Cb)({readOnly:!0})],g.prototype,"legendEnabled",null),(0,a._)([(0,v.Cb)({type:Boolean,readOnly:!0})],g.prototype,"updating",null),(0,a._)([(0,v.Cb)({readOnly:!0})],g.prototype,"updatingProgress",null),(0,a._)([(0,v.Cb)()],g.prototype,"visible",null),(0,a._)([(0,v.Cb)()],g.prototype,"view",void 0);var b=g=(0,a._)([(0,f.j)("esri.views.layers.LayerView")],g)}}]);
//# sourceMappingURL=2195.b9a4192e.chunk.js.map