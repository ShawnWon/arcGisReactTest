"use strict";(self.webpackChunkarcgisdemo=self.webpackChunkarcgisdemo||[]).push([[8023],{28023:function(e,r,t){t.r(r),t.d(r,{execute:function(){return c}});var a,n=t(74165),s=t(1413),u=t(15861),i=t(10064),o=t(92026);function c(e,r){var t=r.responseType;t?"array-buffer"!==t&&"blob"!==t&&"json"!==t&&"native"!==t&&"native-request-init"!==t&&"text"!==t&&(t="text"):t="json",r.responseType=t;var c=(0,o.Wg)(r.signal);return delete r.signal,globalThis.invokeStaticMessage("request",{url:e,options:r},{signal:c}).then(function(){var o=(0,u.Z)((0,n.Z)().mark((function u(o){var b,l,p,f,k,x,d;return(0,n.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!o.data){n.next=22;break}if(!(o.data instanceof ArrayBuffer)){n.next=16;break}if("json"!==t&&"text"!==t&&"blob"!==t||(b=new Blob([o.data]),"json"!==t&&"text"!==t||(a||(a=new FileReaderSync),f=a.readAsText(b),"json"!==t))){n.next=14;break}n.prev=3,l=JSON.parse(f||null),n.next=11;break;case 7:throw n.prev=7,n.t0=n.catch(3),x=(0,s.Z)((0,s.Z)({},n.t0),{},{url:e,requestOptions:r}),new i.Z("request:server",n.t0.message,x);case 11:if(!l.error){n.next=14;break}throw d=(0,s.Z)((0,s.Z)({},l.error),{},{url:e,requestOptions:r}),new i.Z("request:server",l.error.message,d);case 14:n.next=22;break;case 16:if(n.t1="native"===t,!n.t1){n.next=22;break}return o.data.signal=c,n.next=21,fetch(o.data.url,o.data);case 21:p=n.sent;case 22:n.t2=t,n.next="blob"===n.t2?25:"json"===n.t2?27:"native"===n.t2?29:"text"===n.t2?31:33;break;case 25:return k=b,n.abrupt("break",34);case 27:return k=l,n.abrupt("break",34);case 29:return k=p,n.abrupt("break",34);case 31:return k=f,n.abrupt("break",34);case 33:k=o.data;case 34:return n.abrupt("return",{data:k,requestOptions:r,ssl:o.ssl,url:e});case 35:case"end":return n.stop()}}),u,null,[[3,7]])})));return function(e){return o.apply(this,arguments)}}())}}}]);
//# sourceMappingURL=8023.e66d050f.chunk.js.map