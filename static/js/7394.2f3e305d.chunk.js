"use strict";(self.webpackChunkarcgisdemo=self.webpackChunkarcgisdemo||[]).push([[7394],{47428:function(e,t,r){r.d(t,{$:function(){return j}});var a,n=r(29439),o=r(37762),i=r(15671),s=r(43144),l=r(63780),c=(r(93169),r(92026)),u=r(37825),f=r(49800),h=r(8548),g=["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uint","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"],m=!1,d={exports:{}};void 0!==(a=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"])&&(d.exports=a);var _,p=d.exports,v={exports:{}};_=v,function(e){var t=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"];void 0!==t&&(_.exports=t)}();var x=v.exports,y={exports:{}};!function(e){!function(t){var r=["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT"];void 0!==r&&(e.exports=r)}()}(y);var T=y.exports,S=999,M=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function U(){var e,t,r,a=0,n=0,o=S,i=[],s=[],l=1,c=0,u=0,f=!1,h=!1,g="";return function(e){return s=[],null!==e?d(e.replace?e.replace(/\r\n/g,"\n"):e):(i.length&&m(i.join("")),o=10,m("(eof)"),s)};function m(e){e.length&&s.push({type:M[o],data:e,position:u,line:l,column:c})}function d(t){var i;for(a=0,r=(g+=t).length;e=g[a],a<r;){switch(i=a,o){case 0:a=U();break;case 1:case 2:a=y();break;case 3:a=w();break;case 4:a=E();break;case 11:a=k();break;case 5:a=P();break;case 9999:a=C();break;case 9:a=v();break;case S:a=_()}i!==a&&("\n"===g[i]?(c=0,++l):++c)}return n+=a,g=g.slice(a),s}function _(){return i=i.length?[]:i,"/"===t&&"*"===e?(u=n+a-1,o=0,t=e,a+1):"/"===t&&"/"===e?(u=n+a-1,o=1,t=e,a+1):"#"===e?(o=2,u=n+a,a):/\s/.test(e)?(o=9,u=n+a,a):(f=/\d/.test(e),h=/[^\w_]/.test(e),u=n+a,o=f?4:h?3:9999,a)}function v(){return/[^\s]/g.test(e)?(m(i.join("")),o=S,a):(i.push(e),t=e,a+1)}function y(){return"\r"!==e&&"\n"!==e||"\\"===t?(i.push(e),t=e,a+1):(m(i.join("")),o=S,a)}function U(){return"/"===e&&"*"===t?(i.push(e),m(i.join("")),o=S,a+1):(i.push(e),t=e,a+1)}function w(){if("."===t&&/\d/.test(e))return o=5,a;if("/"===t&&"*"===e)return o=0,a;if("/"===t&&"/"===e)return o=1,a;if("."===e&&i.length){for(;D(i););return o=5,a}if(";"===e||")"===e||"("===e){if(i.length)for(;D(i););return m(e),o=S,a+1}var r=2===i.length&&"="!==e;if(/[\w_\d\s]/.test(e)||r){for(;D(i););return o=S,a}return i.push(e),t=e,a+1}function D(e){for(var t,r,a=0;;){if(t=x.indexOf(e.slice(0,e.length+a).join("")),r=x[t],-1===t){if(a--+e.length>0)continue;r=e.slice(0,1).join("")}return m(r),u+=r.length,(i=i.slice(r.length)).length}}function k(){return/[^a-fA-F0-9]/.test(e)?(m(i.join("")),o=S,a):(i.push(e),t=e,a+1)}function E(){return"."===e||/[eE]/.test(e)?(i.push(e),o=5,t=e,a+1):"x"===e&&1===i.length&&"0"===i[0]?(o=11,i.push(e),t=e,a+1):/[^\d]/.test(e)?(m(i.join("")),o=S,a):(i.push(e),t=e,a+1)}function P(){return"f"===e&&(i.push(e),t=e,a+=1),/[eE]/.test(e)||"-"===e&&/[eE]/.test(t)?(i.push(e),t=e,a+1):/[^\d]/.test(e)?(m(i.join("")),o=S,a):(i.push(e),t=e,a+1)}function C(){if(/[^\d\w_]/.test(e)){var r=i.join("");return o=p.indexOf(r)>-1?8:T.indexOf(r)>-1?7:6,m(i.join("")),o=S,a}return i.push(e),t=e,a+1}}function w(e){return function(e){var t=U(),r=[];return(r=r.concat(t(e))).concat(t(null))}(e)}var D=["GL_OES_standard_derivatives","GL_EXT_frag_depth","GL_EXT_draw_buffers","GL_EXT_shader_texture_lod"];function k(e,t){for(var r=t-1;r>=0;r--){var a=e[r];if("whitespace"!==a.type&&"block-comment"!==a.type){if("keyword"!==a.type)break;if("attribute"===a.data||"in"===a.data)return!0}}return!1}function E(e,t,r,a){a=a||r;var n,i=(0,o.Z)(e);try{for(i.s();!(n=i.n()).done;){var s=n.value;if("ident"===s.type&&s.data===r)return a in t?t[a]++:t[a]=0,E(e,t,a+"_"+t[a],a)}}catch(l){i.e(l)}finally{i.f()}return r}function P(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"afterVersion";function a(e,t){for(var r=t;r<e.length;r++){var a=e[r];if("operator"===a.type&&";"===a.data)return r}return null}function n(e){for(var t=-1,n=0,o=-1,i=0;i<e.length;i++){var s=e[i];if("preprocessor"===s.type&&(s.data.match(/\#(if|ifdef|ifndef)\s+.+/)?++n:s.data.match(/\#endif\s*.*/)&&--n),"afterVersion"!==r&&"afterPrecision"!==r||"preprocessor"===s.type&&/^#version/.test(s.data)&&(o=Math.max(o,i)),"afterPrecision"===r&&"keyword"===s.type&&"precision"===s.data){var l=a(e,i);if(null===l)throw new Error("precision statement not followed by any semicolons!");o=Math.max(o,l)}t<o&&0===n&&(t=i)}return t+1}var i={data:"\n",type:"whitespace"},s=function(t){return t<e.length&&/[^\r\n]$/.test(e[t].data)},l=n(e);s(l-1)&&e.splice(l++,0,i);var c,u=(0,o.Z)(t);try{for(u.s();!(c=u.n()).done;){var f=c.value;e.splice(l++,0,f)}}catch(h){u.e(h)}finally{u.f()}s(l-1)&&s(l)&&e.splice(l,0,i)}function C(e,t,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"lowp";P(e,[{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:a},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"ident",data:t},{type:"operator",data:";"}],"afterPrecision")}function L(e,t,r,a){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"lowp";P(e,[{type:"keyword",data:"layout"},{type:"operator",data:"("},{type:"keyword",data:"location"},{type:"whitespace",data:" "},{type:"operator",data:"="},{type:"whitespace",data:" "},{type:"integer",data:a.toString()},{type:"operator",data:")"},{type:"whitespace",data:" "},{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:n},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"ident",data:t},{type:"operator",data:";"}],"afterPrecision")}function b(e,t){for(var r,a,n=-1,o=t;o<e.length;o++){var i=e[o];if("operator"===i.type&&("["===i.data&&(r=o),"]"===i.data)){a=o;break}"integer"===i.type&&(n=parseInt(i.data,10))}return r&&a&&e.splice(r,a-r+1),n}function A(e,t){var r=function(e){return m?F.get(e):null}(e);if((0,c.pC)(r))return r;var a=w(e);if("300 es"===function(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"100",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"300 es",n=/^\s*\#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/,i=(0,o.Z)(e);try{for(i.s();!(t=i.n()).done;){var s=t.value;if("preprocessor"===s.type){var l=n.exec(s.data);if(l){var c=l[1].replace(/\s\s+/g," ");if(c===a)return c;if(c===r)return s.data="#version "+a,r;throw new Error("unknown glsl version: "+c)}}}}catch(u){i.e(u)}finally{i.f()}return e.splice(0,0,{type:"preprocessor",data:"#version "+a},{type:"whitespace",data:"\n"}),null}(a,"100","300 es"))return e;for(var n=null,i=null,s={},l={},u=0;u<a.length;++u){var f=a[u];switch(f.type){case"keyword":t===h.Ho.VERTEX_SHADER&&"attribute"===f.data?f.data="in":"varying"===f.data&&(f.data=t===h.Ho.VERTEX_SHADER?"out":"in");break;case"builtin":if(/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(f.data.trim())&&(f.data=f.data.replace(/(2D|Cube|EXT)/g,"")),t===h.Ho.FRAGMENT_SHADER&&"gl_FragColor"===f.data&&(n||C(a,n=E(a,s,"fragColor"),"vec4"),f.data=n),t===h.Ho.FRAGMENT_SHADER&&"gl_FragData"===f.data){var d=b(a,u+1),_=E(a,s,"fragData");L(a,_,"vec4",d,"mediump"),f.data=_}else t===h.Ho.FRAGMENT_SHADER&&"gl_FragDepthEXT"===f.data&&(i||(i=E(a,s,"gl_FragDepth")),f.data=i);break;case"ident":if(g.includes(f.data)){if(t===h.Ho.VERTEX_SHADER&&k(a,u))throw new Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es");f.data in l||(l[f.data]=E(a,s,f.data)),f.data=l[f.data]}}}for(var p=a.length-1;p>=0;--p){var v=a[p];if("preprocessor"===v.type){var x=v.data.match(/\#extension\s+(.*)\:/);if(x&&x[1]&&D.includes(x[1].trim())){var y=a[p+1];a.splice(p,y&&"whitespace"===y.type?2:1)}var T=v.data.match(/\#ifdef\s+(.*)/);T&&T[1]&&D.includes(T[1].trim())&&(v.data="#if 1");var S=v.data.match(/\#ifndef\s+(.*)/);S&&S[1]&&D.includes(S[1].trim())&&(v.data="#if 0")}}return function(e,t){return m&&F.set(e,t),t}(e,function(e){return e.map((function(e){return"eof"!==e.type?e.data:""})).join("")}(a))}var F=new Map;var j=function(){function e(t,r,a,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:new Map;(0,i.Z)(this,e),this._context=t,this._locations=n,this._uniformBlockBindings=o,this._refCount=1,this._compiled=!1,this._nameToUniformLocation={},this._nameToUniform1={},this._nameToUniform1v=new Map,this._nameToUniform2=new Map,this._nameToUniform3=new Map,this._nameToUniform4=new Map,this._nameToUniformMatrix3=new Map,this._nameToUniformMatrix4=new Map,t||console.error("RenderingContext isn't initialized!"),0===r.length&&console.error("Shaders source should not be empty!"),this._context.type===f.zO.WEBGL2&&(r=A(r,h.Ho.VERTEX_SHADER),a=A(a,h.Ho.FRAGMENT_SHADER)),this._vShader=R(this._context,h.Ho.VERTEX_SHADER,r),this._fShader=R(this._context,h.Ho.FRAGMENT_SHADER,a),this._vShader&&this._fShader||console.error("Error loading shaders!"),this._context.instanceCounter.increment(h._g.Shader,this),(0,u.CG)()&&(this.vertexShader=r,this.fragmentShader=a)}return(0,s.Z)(e,[{key:"glName",get:function(){if((0,c.pC)(this._glName))return this._glName;if((0,c.Wi)(this._vShader))return null;var e=this._context.gl,t=e.createProgram();if(e.attachShader(t,this._vShader),e.attachShader(t,this._fShader),this._locations.forEach((function(r,a){return e.bindAttribLocation(t,r,a)})),e.linkProgram(t),(0,u.CG)()&&!e.getProgramParameter(t,e.LINK_STATUS)&&console.error("Could not link shader\nvalidated: ".concat(e.getProgramParameter(t,e.VALIDATE_STATUS),", gl error ").concat(e.getError(),", vertex: ").concat(e.getShaderParameter(this._vShader,e.COMPILE_STATUS),", fragment: ").concat(e.getShaderParameter(this._fShader,e.COMPILE_STATUS),", info log: ").concat(e.getProgramInfoLog(t),", vertex source: ").concat(this.vertexShader,", fragment source: ").concat(this.fragmentShader)),this._context.type===f.zO.WEBGL2){var r,a=e,i=(0,o.Z)(this._uniformBlockBindings);try{for(i.s();!(r=i.n()).done;){var s=(0,n.Z)(r.value,2),l=s[0],g=s[1],m=a.getUniformBlockIndex(t,l);m<4294967295&&a.uniformBlockBinding(t,m,g)}}catch(d){i.e(d)}finally{i.f()}}return this._glName=t,this._context.instanceCounter.increment(h._g.Program,this),t}},{key:"hasGLName",get:function(){return(0,c.pC)(this._glName)}},{key:"isCompiled",get:function(){if(this._compiled)return!0;var e=this._context.gl.getExtension("KHR_parallel_shader_compile");return null==e?(this._compiled=!0,!0):(this._compiled=!!this._context.gl.getProgramParameter(this.glName,e.COMPLETION_STATUS_KHR),this._compiled)}},{key:"dispose",value:function(){if(!(--this._refCount>0)){var e=this._context.gl;this._vShader&&(e.deleteShader(this._vShader),this._vShader=null,this._context.instanceCounter.decrement(h._g.Shader,this)),this._fShader&&(e.deleteShader(this._fShader),this._fShader=null),this._glName&&(e.deleteProgram(this._glName),this._glName=null,this._context.instanceCounter.decrement(h._g.Program,this))}}},{key:"ref",value:function(){++this._refCount}},{key:"_getUniformLocation",value:function(e){return void 0===this._nameToUniformLocation[e]&&(++B.numUniforms,this._nameToUniformLocation[e]=this._context.gl.getUniformLocation(this.glName,e)),this._nameToUniformLocation[e]}},{key:"hasUniform",value:function(e){return null!==this._getUniformLocation(e)}},{key:"setUniform1i",value:function(e,t){var r=this._nameToUniform1[e];void 0!==r&&t===r||(this._context.gl.uniform1i(this._getUniformLocation(e),t),this._nameToUniform1[e]=t)}},{key:"setUniform1iv",value:function(e,t){H(this._nameToUniform1v,e,t)&&this._context.gl.uniform1iv(this._getUniformLocation(e),t)}},{key:"setUniform2iv",value:function(e,t){H(this._nameToUniform2,e,t)&&this._context.gl.uniform2iv(this._getUniformLocation(e),t)}},{key:"setUniform3iv",value:function(e,t){H(this._nameToUniform3,e,t)&&this._context.gl.uniform3iv(this._getUniformLocation(e),t)}},{key:"setUniform4iv",value:function(e,t){H(this._nameToUniform4,e,t)&&this._context.gl.uniform4iv(this._getUniformLocation(e),t)}},{key:"setUniform1f",value:function(e,t){var r=this._nameToUniform1[e];void 0!==r&&t===r||(this._context.gl.uniform1f(this._getUniformLocation(e),t),this._nameToUniform1[e]=t)}},{key:"setUniform1fv",value:function(e,t){H(this._nameToUniform1v,e,t)&&this._context.gl.uniform1fv(this._getUniformLocation(e),t)}},{key:"setUniform2f",value:function(e,t,r){var a=this._nameToUniform2.get(e);void 0===a?(this._context.gl.uniform2f(this._getUniformLocation(e),t,r),this._nameToUniform2.set(e,[t,r])):t===a[0]&&r===a[1]||(this._context.gl.uniform2f(this._getUniformLocation(e),t,r),a[0]=t,a[1]=r)}},{key:"setUniform2fv",value:function(e,t){H(this._nameToUniform2,e,t)&&this._context.gl.uniform2fv(this._getUniformLocation(e),t)}},{key:"setUniform3f",value:function(e,t,r,a){var n=this._nameToUniform3.get(e);void 0===n?(this._context.gl.uniform3f(this._getUniformLocation(e),t,r,a),this._nameToUniform3[e]=[t,r,a]):t===n[0]&&r===n[1]&&a===n[2]||(this._context.gl.uniform3f(this._getUniformLocation(e),t,r,a),n[0]=t,n[1]=r,n[2]=a)}},{key:"setUniform3fv",value:function(e,t){H(this._nameToUniform3,e,t)&&this._context.gl.uniform3fv(this._getUniformLocation(e),t)}},{key:"setUniform4f",value:function(e,t,r,a,n){var o=this._nameToUniform4.get(e);void 0===o?(this._context.gl.uniform4f(this._getUniformLocation(e),t,r,a,n),this._nameToUniform4.set(e,[t,r,a,n])):void 0!==o&&t===o[0]&&r===o[1]&&a===o[2]&&n===o[3]||(this._context.gl.uniform4f(this._getUniformLocation(e),t,r,a,n),o[0]=t,o[1]=r,o[2]=a,o[3]=n)}},{key:"setUniform4fv",value:function(e,t){H(this._nameToUniform4,e,t)&&this._context.gl.uniform4fv(this._getUniformLocation(e),t)}},{key:"setUniformMatrix3fv",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];H(this._nameToUniformMatrix3,e,t)&&this._context.gl.uniformMatrix3fv(this._getUniformLocation(e),r,t)}},{key:"setUniformMatrix4fv",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];H(this._nameToUniformMatrix4,e,t)&&this._context.gl.uniformMatrix4fv(this._getUniformLocation(e),r,t)}},{key:"stop",value:function(){}}]),e}();function R(e,t,r){var a=e.gl,n=a.createShader(t);return a.shaderSource(n,r),a.compileShader(n),(0,u.CG)()&&!a.getShaderParameter(n,a.COMPILE_STATUS)&&(console.error("Compile error in ".concat(t===h.Ho.VERTEX_SHADER?"vertex":"fragment"," shader")),console.error(a.getShaderInfoLog(n)),console.error(function(e){var t=2;return e.replace(/\n/g,(function(){return"\n"+function(e){return e>=1e3?e.toString():("  "+e).slice(-3)}(t++)+":"}))}(r))),B.enabled&&(B.compiledLOC+=r.match(/\n/g).length+1),n}function H(e,t,r){var a=e.get(t);return a?(0,l.Vx)(a,r):(e.set(t,Array.from(r)),!0)}var B={compiledLOC:0,numUniforms:0,enabled:!1}},96721:function(e,t,r){r.d(t,{H:function(){return n}});var a=r(47428);function n(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return new a.$(e,r+t.shaders.vertexShader,r+t.shaders.fragmentShader,t.attributes)}},56648:function(e,t,r){r.d(t,{B:function(){return o}});var a=r(15671),n=r(43144),o=function(){function e(t){(0,a.Z)(this,e),this.readFile=t}return(0,n.Z)(e,[{key:"resolveIncludes",value:function(e){return this._resolve(e)}},{key:"_resolve",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Map;if(r.has(e))return r.get(e);var a=this._read(e);if(!a)throw new Error("cannot find shader file ".concat(e));for(var n=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm,o=n.exec(a),i=[];null!=o;)i.push({path:o[1],start:o.index,length:o[0].length}),o=n.exec(a);var s=0,l="";return i.forEach((function(e){l+=a.slice(s,e.start),l+=r.has(e.path)?"":t._resolve(e.path,r),s=e.start+e.length})),l+=a.slice(s),r.set(e,l),l}},{key:"_read",value:function(e){return this.readFile(e)}}]),e}()}}]);
//# sourceMappingURL=7394.2f3e305d.chunk.js.map