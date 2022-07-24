/*! For license information please see 3721.5c6fd765.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkarcgisdemo=self.webpackChunkarcgisdemo||[]).push([[3721],{53721:function(t,e,i){i.r(e),i.d(e,{CalciteNotice:function(){return K},defineCustomElement:function(){return J}});var n,a=i(74165),o=i(15861),r=i(15671),c=i(43144),s=i(97326),l=i(60136),m=i(54062),u=i(51554);!function(t){t.green="checkCircle",t.yellow="exclamationMarkTriangle",t.red="exclamationMarkTriangle",t.blue="lightbulb"}(n||(n={}));var f=i(93433);function d(t){return t.getRootNode()}function h(t){return t.host||null}function p(t,e){return function t(i){return i?i.closest(e)||t(h(d(i))):null}(t)}var g=":not([slot])";function b(t,e,i){e&&!Array.isArray(e)&&"string"!==typeof e&&(i=e,e=null);var n=e?Array.isArray(e)?e.map((function(t){return'[slot="'.concat(t,'"]')})).join(","):'[slot="'.concat(e,'"]'):g;return(null===i||void 0===i?void 0:i.all)?function(t,e,i){var n=e===g?v(t,g):Array.from(t.querySelectorAll(e));n=i&&!1===i.direct?n:n.filter((function(e){return e.parentElement===t})),n=(null===i||void 0===i?void 0:i.matches)?n.filter((function(t){return null===t||void 0===t?void 0:t.matches(i.matches)})):n;var a=null===i||void 0===i?void 0:i.selector;return a?n.map((function(t){return Array.from(t.querySelectorAll(a))})).reduce((function(t,e){return[].concat((0,f.Z)(t),(0,f.Z)(e))}),[]).filter((function(t){return!!t})):n}(t,n,i):function(t,e,i){var n=e===g?v(t,g)[0]||null:t.querySelector(e);n=i&&!1===i.direct||(null===n||void 0===n?void 0:n.parentElement)===t?n:null,n=(null===i||void 0===i?void 0:i.matches)?(null===n||void 0===n?void 0:n.matches(i.matches))?n:null:n;var a=null===i||void 0===i?void 0:i.selector;return a?null===n||void 0===n?void 0:n.querySelector(a):n}(t,n,i)}function v(t,e){return t?Array.from(t.children||[]).filter((function(t){return null===t||void 0===t?void 0:t.matches(e)})):[]}function w(t,e,i){return"string"===typeof e&&""!==e?e:""===e?t[i]:void 0}var k=i(29439),y=i(37762);function x(t,e,i){var n=function(t){return"intersection"===t?window.IntersectionObserver:"mutation"===t?window.MutationObserver:window.ResizeObserver}(t);return u.Z5.isBrowser?new n(e,i):void 0}var D,Z=new Set,z={childList:!0};function _(t){t.forEach((function(t){var e=t.target;(0,u.xE)(e)}))}var C=i(4942),A="flip-rtl",E={},I={},q={s:16,m:24,l:32};function O(t){return N.apply(this,arguments)}function N(){return(N=(0,o.Z)((0,a.Z)().mark((function t(e){var i,n,o,r,c,s,l,m;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=e.icon,n=e.scale,o=q[n],r=R(i),c="F"===r.charAt(r.length-1),s=c?r.substring(0,r.length-1):r,l="".concat(s).concat(o).concat(c?"F":""),!E[l]){t.next=8;break}return t.abrupt("return",E[l]);case 8:return I[l]||(I[l]=fetch((0,u.K3)("./assets/icon/".concat(l,".json"))).then((function(t){return t.json()})).catch((function(){return console.error('"'.concat(l,'" is not a valid calcite-ui-icon name')),""}))),t.next=11,I[l];case 11:return m=t.sent,E[l]=m,t.abrupt("return",m);case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function R(t){var e=!isNaN(Number(t.charAt(0))),i=t.split("-");return 1===i.length?e?"i".concat(t):t:i.map((function(t,i){return 0===i?e?"i".concat(t.toUpperCase()):t:t.charAt(0).toUpperCase()+t.slice(1)})).join("")}var S=(0,u.GH)(function(t){(0,l.Z)(i,t);var e=(0,m.Z)(i);function i(){var t;return(0,r.Z)(this,i),(t=e.call(this)).__registerHost(),t.__attachShadow(),t.icon=null,t.flipRtl=!1,t.scale="m",t.visible=!1,t}return(0,c.Z)(i,[{key:"connectedCallback",value:function(){var t=this;this.waitUntilVisible((function(){t.visible=!0,t.loadIconPathData()}))}},{key:"disconnectedCallback",value:function(){var t;null===(t=this.intersectionObserver)||void 0===t||t.disconnect(),this.intersectionObserver=null}},{key:"componentWillLoad",value:function(){var t=(0,o.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.loadIconPathData();case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t,e,i=this.el,n=this.flipRtl,a=this.pathData,o=this.scale,r=this.textLabel,c=function(t){var e=p(t,"[".concat("dir","]"));return e?e.getAttribute("dir"):"ltr"}(i),s=q[o],l=!!r,m=[].concat(a||"");return(0,u.h)(u.AA,{"aria-hidden":(e=!l,(!!e).toString()),"aria-label":l?r:null,role:l?"img":null},(0,u.h)("svg",{class:(t={},(0,C.Z)(t,A,"rtl"===c&&n),(0,C.Z)(t,"svg",!0),t),fill:"currentColor",height:"100%",viewBox:"0 0 ".concat(s," ").concat(s),width:"100%",xmlns:"http://www.w3.org/2000/svg"},m.map((function(t){return"string"===typeof t?(0,u.h)("path",{d:t}):(0,u.h)("path",{d:t.d,opacity:"opacity"in t?t.opacity:1})}))))}},{key:"loadIconPathData",value:function(){var t=(0,o.Z)((0,a.Z)().mark((function t(){var e,i,n;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.icon,i=this.scale,n=this.visible,u.Z5.isBrowser&&e&&n){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,O({icon:e,scale:i});case 5:this.pathData=t.sent;case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"waitUntilVisible",value:function(t){var e=this;this.intersectionObserver=x("intersection",(function(i){i.forEach((function(i){i.isIntersecting&&(e.intersectionObserver.disconnect(),e.intersectionObserver=null,t())}))}),{rootMargin:"50px"}),this.intersectionObserver?this.intersectionObserver.observe(this.el):t()}},{key:"el",get:function(){return this}}],[{key:"assetsDirs",get:function(){return["assets"]}},{key:"watchers",get:function(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}},{key:"style",get:function(){return"@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:-ms-inline-flexbox;display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){height:1rem;width:1rem;min-width:1rem;min-height:1rem}:host([scale=m]){height:1.5rem;width:1.5rem;min-width:1.5rem;min-height:1.5rem}:host([scale=l]){height:2rem;width:2rem;min-width:2rem;min-height:2rem}.flip-rtl{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.svg{display:block}"}}]),i}(u.mv),[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]}]);function B(){if("undefined"!==typeof customElements){["calcite-icon"].forEach((function(t){if("calcite-icon"===t)customElements.get(t)||customElements.define(t,S)}))}}B();var M="Close",F="title",L="message",P="link",j="actions-end",H="actions-end",U="notice-close",G="container",T="notice-content",V="notice-icon",W=(0,u.GH)(function(t){(0,l.Z)(i,t);var e=(0,m.Z)(i);function i(){var t;return(0,r.Z)(this,i),(t=e.call(this)).__registerHost(),t.__attachShadow(),t.calciteNoticeClose=(0,u.yM)((0,s.Z)(t),"calciteNoticeClose",7),t.calciteNoticeOpen=(0,u.yM)((0,s.Z)(t),"calciteNoticeOpen",7),t.active=!1,t.color="blue",t.dismissible=!1,t.intlClose=M,t.scale="m",t.width="auto",t.close=function(){t.active=!1,t.calciteNoticeClose.emit()},t}return(0,c.Z)(i,[{key:"updateRequestedIcon",value:function(){this.requestedIcon=w(n,this.icon,this.color)}},{key:"connectedCallback",value:function(){var t;t=this,D||(D=x("mutation",_)),D.observe(t.el,z)}},{key:"disconnectedCallback",value:function(){!function(t){Z.delete(t.el),_(D.takeRecords()),D.disconnect();var e,i=(0,y.Z)(Z.entries());try{for(i.s();!(e=i.n()).done;){var n=(0,k.Z)(e.value,1)[0];D.observe(n,z)}}catch(a){i.e(a)}finally{i.f()}}(this)}},{key:"componentWillLoad",value:function(){this.requestedIcon=w(n,this.icon,this.color)}},{key:"render",value:function(){var t=this,e=this.el,i=(0,u.h)("button",{"aria-label":this.intlClose,class:U,onClick:this.close,ref:function(e){return t.closeButton=e}},(0,u.h)("calcite-icon",{icon:"x",scale:"l"===this.scale?"m":"s"})),n=b(e,j);return(0,u.h)("div",{class:G},this.requestedIcon?(0,u.h)("div",{class:V},(0,u.h)("calcite-icon",{icon:this.requestedIcon,scale:"l"===this.scale?"m":"s"})):null,(0,u.h)("div",{class:T},(0,u.h)("slot",{name:F}),(0,u.h)("slot",{name:L}),(0,u.h)("slot",{name:P})),n?(0,u.h)("div",{class:H},(0,u.h)("slot",{name:j})):null,this.dismissible?i:null)}},{key:"setFocus",value:function(){var t=(0,o.Z)((0,a.Z)().mark((function t(){var e;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.el.querySelector("calcite-link"),this.closeButton||e){t.next=3;break}return t.abrupt("return");case 3:e?e.setFocus():this.closeButton&&this.closeButton.focus();case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"el",get:function(){return this}}],[{key:"watchers",get:function(){return{icon:["updateRequestedIcon"],color:["updateRequestedIcon"]}}},{key:"style",get:function(){return"@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([scale=s]){--calcite-notice-spacing-token-small:0.5rem;--calcite-notice-spacing-token-large:0.75rem}:host([scale=s]) .container slot[name=title]::slotted(*),:host([scale=s]) .container *::slotted([slot=title]){margin-top:0.125rem;margin-bottom:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=s]) .container slot[name=message]::slotted(*),:host([scale=s]) .container *::slotted([slot=message]){margin-top:0.125rem;margin-bottom:0.125rem;font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) ::slotted(calcite-link){margin-top:0.125rem;margin-bottom:0.125rem;font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) .notice-close{padding:0.5rem}:host([scale=m]){--calcite-notice-spacing-token-small:0.75rem;--calcite-notice-spacing-token-large:1rem}:host([scale=m]) .container slot[name=title]::slotted(*),:host([scale=m]) .container *::slotted([slot=title]){margin-top:0.125rem;margin-bottom:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=m]) .container slot[name=message]::slotted(*),:host([scale=m]) .container *::slotted([slot=message]){margin-top:0.125rem;margin-bottom:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) ::slotted(calcite-link){margin-top:0.125rem;margin-bottom:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=l]){--calcite-notice-spacing-token-small:1rem;--calcite-notice-spacing-token-large:1.25rem}:host([scale=l]) .container slot[name=title]::slotted(*),:host([scale=l]) .container *::slotted([slot=title]){margin-top:0.125rem;margin-bottom:0.125rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host([scale=l]) .container slot[name=message]::slotted(*),:host([scale=l]) .container *::slotted([slot=message]){margin-top:0.125rem;margin-bottom:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) ::slotted(calcite-link){margin-top:0.125rem;margin-bottom:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([width=auto]){--calcite-notice-width:auto}:host([width=half]){--calcite-notice-width:50%}:host([width=full]){--calcite-notice-width:100%}:host{margin-left:auto;margin-right:auto;display:none;max-width:100%;-ms-flex-align:center;align-items:center;width:var(--calcite-notice-width)}.container{pointer-events:none;margin-top:0px;margin-bottom:0px;-webkit-box-sizing:border-box;box-sizing:border-box;display:none;width:100%;background-color:var(--calcite-ui-foreground-1);opacity:0;max-height:0;text-align:start;-webkit-transition:var(--calcite-animation-timing);transition:var(--calcite-animation-timing);-webkit-border-start:0px solid;border-inline-start:0px solid;-webkit-box-shadow:0 0 0 0 transparent;box-shadow:0 0 0 0 transparent}.notice-close{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.notice-close:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host{display:-ms-flexbox;display:flex}:host([active]) .container{pointer-events:auto;display:-ms-flexbox;display:flex;max-height:100%;-ms-flex-align:center;align-items:center;border-width:2px;opacity:1;--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);-webkit-box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.container slot[name=title]::slotted(*),.container *::slotted([slot=title]){margin:0px;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}.container slot[name=message]::slotted(*),.container *::slotted([slot=message]){margin:0px;display:inline;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2);-webkit-margin-end:var(--calcite-notice-spacing-token-small);margin-inline-end:var(--calcite-notice-spacing-token-small)}.notice-content{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:var(--calcite-animation-timing);transition-duration:var(--calcite-animation-timing);-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;display:-ms-flexbox;display:flex;min-width:0px;-ms-flex-direction:column;flex-direction:column;overflow-wrap:break-word;-ms-flex:1 1 0px;flex:1 1 0;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:0 var(--calcite-notice-spacing-token-small)}.notice-content:first-of-type:not(:only-child){-webkit-padding-start:var(--calcite-notice-spacing-token-large);padding-inline-start:var(--calcite-notice-spacing-token-large)}.notice-content:only-of-type{padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large)}.notice-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:var(--calcite-animation-timing);transition-duration:var(--calcite-animation-timing);-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto}.notice-close{display:-ms-flexbox;display:flex;cursor:pointer;-ms-flex-align:center;align-items:center;-ms-flex-item-align:stretch;align-self:stretch;border-style:none;background-color:transparent;color:var(--calcite-ui-text-3);outline:2px solid transparent;outline-offset:2px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:var(--calcite-animation-timing);transition-duration:var(--calcite-animation-timing);-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-appearance:none}.notice-close:hover,.notice-close:focus{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.notice-close:active{background-color:var(--calcite-ui-foreground-3)}.actions-end{display:-ms-flexbox;display:flex;-ms-flex-item-align:stretch;align-self:stretch}:host([color=blue]) .container{border-color:var(--calcite-ui-brand)}:host([color=blue]) .container .notice-icon{color:var(--calcite-ui-brand)}:host([color=red]) .container{border-color:var(--calcite-ui-danger)}:host([color=red]) .container .notice-icon{color:var(--calcite-ui-danger)}:host([color=yellow]) .container{border-color:var(--calcite-ui-warning)}:host([color=yellow]) .container .notice-icon{color:var(--calcite-ui-warning)}:host([color=green]) .container{border-color:var(--calcite-ui-success)}:host([color=green]) .container .notice-icon{color:var(--calcite-ui-success)}"}}]),i}(u.mv),[1,"calcite-notice",{active:[1540],color:[513],dismissible:[516],icon:[520],intlClose:[1,"intl-close"],scale:[513],width:[513],setFocus:[64]}]);function X(){if("undefined"!==typeof customElements){["calcite-notice","calcite-icon"].forEach((function(t){switch(t){case"calcite-notice":customElements.get(t)||customElements.define(t,W);break;case"calcite-icon":customElements.get(t)||B()}}))}}X();var K=W,J=X}}]);
//# sourceMappingURL=3721.5c6fd765.chunk.js.map