(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=n(l);fetch(l.href,u)}})();function Qw(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Qu={exports:{}},hs={},Yu={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vp;function Yw(){if(Vp)return ee;Vp=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),v=Symbol.iterator;function S(I){return I===null||typeof I!="object"?null:(I=v&&I[v]||I["@@iterator"],typeof I=="function"?I:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,x={};function $(I,P,Z){this.props=I,this.context=P,this.refs=x,this.updater=Z||R}$.prototype.isReactComponent={},$.prototype.setState=function(I,P){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,P,"setState")},$.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function Ce(){}Ce.prototype=$.prototype;function ye(I,P,Z){this.props=I,this.context=P,this.refs=x,this.updater=Z||R}var De=ye.prototype=new Ce;De.constructor=ye,M(De,$.prototype),De.isPureReactComponent=!0;var V=Array.isArray,X=Object.prototype.hasOwnProperty,J={current:null},Te={key:!0,ref:!0,__self:!0,__source:!0};function ze(I,P,Z){var re,le={},ae=null,me=null;if(P!=null)for(re in P.ref!==void 0&&(me=P.ref),P.key!==void 0&&(ae=""+P.key),P)X.call(P,re)&&!Te.hasOwnProperty(re)&&(le[re]=P[re]);var de=arguments.length-2;if(de===1)le.children=Z;else if(1<de){for(var Se=Array(de),yt=0;yt<de;yt++)Se[yt]=arguments[yt+2];le.children=Se}if(I&&I.defaultProps)for(re in de=I.defaultProps,de)le[re]===void 0&&(le[re]=de[re]);return{$$typeof:r,type:I,key:ae,ref:me,props:le,_owner:J.current}}function nt(I,P){return{$$typeof:r,type:I.type,key:P,ref:I.ref,props:I.props,_owner:I._owner}}function _t(I){return typeof I=="object"&&I!==null&&I.$$typeof===r}function sr(I){var P={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Z){return P[Z]})}var Kt=/\/+/g;function vt(I,P){return typeof I=="object"&&I!==null&&I.key!=null?sr(""+I.key):P.toString(36)}function Lt(I,P,Z,re,le){var ae=typeof I;(ae==="undefined"||ae==="boolean")&&(I=null);var me=!1;if(I===null)me=!0;else switch(ae){case"string":case"number":me=!0;break;case"object":switch(I.$$typeof){case r:case e:me=!0}}if(me)return me=I,le=le(me),I=re===""?"."+vt(me,0):re,V(le)?(Z="",I!=null&&(Z=I.replace(Kt,"$&/")+"/"),Lt(le,P,Z,"",function(yt){return yt})):le!=null&&(_t(le)&&(le=nt(le,Z+(!le.key||me&&me.key===le.key?"":(""+le.key).replace(Kt,"$&/")+"/")+I)),P.push(le)),1;if(me=0,re=re===""?".":re+":",V(I))for(var de=0;de<I.length;de++){ae=I[de];var Se=re+vt(ae,de);me+=Lt(ae,P,Z,Se,le)}else if(Se=S(I),typeof Se=="function")for(I=Se.call(I),de=0;!(ae=I.next()).done;)ae=ae.value,Se=re+vt(ae,de++),me+=Lt(ae,P,Z,Se,le);else if(ae==="object")throw P=String(I),Error("Objects are not valid as a React child (found: "+(P==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":P)+"). If you meant to render a collection of children, use an array instead.");return me}function Qt(I,P,Z){if(I==null)return I;var re=[],le=0;return Lt(I,re,"","",function(ae){return P.call(Z,ae,le++)}),re}function lt(I){if(I._status===-1){var P=I._result;P=P(),P.then(function(Z){(I._status===0||I._status===-1)&&(I._status=1,I._result=Z)},function(Z){(I._status===0||I._status===-1)&&(I._status=2,I._result=Z)}),I._status===-1&&(I._status=0,I._result=P)}if(I._status===1)return I._result.default;throw I._result}var Ne={current:null},b={transition:null},q={ReactCurrentDispatcher:Ne,ReactCurrentBatchConfig:b,ReactCurrentOwner:J};function z(){throw Error("act(...) is not supported in production builds of React.")}return ee.Children={map:Qt,forEach:function(I,P,Z){Qt(I,function(){P.apply(this,arguments)},Z)},count:function(I){var P=0;return Qt(I,function(){P++}),P},toArray:function(I){return Qt(I,function(P){return P})||[]},only:function(I){if(!_t(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},ee.Component=$,ee.Fragment=n,ee.Profiler=l,ee.PureComponent=ye,ee.StrictMode=s,ee.Suspense=p,ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,ee.act=z,ee.cloneElement=function(I,P,Z){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var re=M({},I.props),le=I.key,ae=I.ref,me=I._owner;if(P!=null){if(P.ref!==void 0&&(ae=P.ref,me=J.current),P.key!==void 0&&(le=""+P.key),I.type&&I.type.defaultProps)var de=I.type.defaultProps;for(Se in P)X.call(P,Se)&&!Te.hasOwnProperty(Se)&&(re[Se]=P[Se]===void 0&&de!==void 0?de[Se]:P[Se])}var Se=arguments.length-2;if(Se===1)re.children=Z;else if(1<Se){de=Array(Se);for(var yt=0;yt<Se;yt++)de[yt]=arguments[yt+2];re.children=de}return{$$typeof:r,type:I.type,key:le,ref:ae,props:re,_owner:me}},ee.createContext=function(I){return I={$$typeof:d,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:u,_context:I},I.Consumer=I},ee.createElement=ze,ee.createFactory=function(I){var P=ze.bind(null,I);return P.type=I,P},ee.createRef=function(){return{current:null}},ee.forwardRef=function(I){return{$$typeof:f,render:I}},ee.isValidElement=_t,ee.lazy=function(I){return{$$typeof:w,_payload:{_status:-1,_result:I},_init:lt}},ee.memo=function(I,P){return{$$typeof:g,type:I,compare:P===void 0?null:P}},ee.startTransition=function(I){var P=b.transition;b.transition={};try{I()}finally{b.transition=P}},ee.unstable_act=z,ee.useCallback=function(I,P){return Ne.current.useCallback(I,P)},ee.useContext=function(I){return Ne.current.useContext(I)},ee.useDebugValue=function(){},ee.useDeferredValue=function(I){return Ne.current.useDeferredValue(I)},ee.useEffect=function(I,P){return Ne.current.useEffect(I,P)},ee.useId=function(){return Ne.current.useId()},ee.useImperativeHandle=function(I,P,Z){return Ne.current.useImperativeHandle(I,P,Z)},ee.useInsertionEffect=function(I,P){return Ne.current.useInsertionEffect(I,P)},ee.useLayoutEffect=function(I,P){return Ne.current.useLayoutEffect(I,P)},ee.useMemo=function(I,P){return Ne.current.useMemo(I,P)},ee.useReducer=function(I,P,Z){return Ne.current.useReducer(I,P,Z)},ee.useRef=function(I){return Ne.current.useRef(I)},ee.useState=function(I){return Ne.current.useState(I)},ee.useSyncExternalStore=function(I,P,Z){return Ne.current.useSyncExternalStore(I,P,Z)},ee.useTransition=function(){return Ne.current.useTransition()},ee.version="18.3.1",ee}var $p;function Gc(){return $p||($p=1,Yu.exports=Yw()),Yu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hp;function Xw(){if(Hp)return hs;Hp=1;var r=Gc(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(f,p,g){var w,v={},S=null,R=null;g!==void 0&&(S=""+g),p.key!==void 0&&(S=""+p.key),p.ref!==void 0&&(R=p.ref);for(w in p)s.call(p,w)&&!u.hasOwnProperty(w)&&(v[w]=p[w]);if(f&&f.defaultProps)for(w in p=f.defaultProps,p)v[w]===void 0&&(v[w]=p[w]);return{$$typeof:e,type:f,key:S,ref:R,props:v,_owner:l.current}}return hs.Fragment=n,hs.jsx=d,hs.jsxs=d,hs}var Gp;function Jw(){return Gp||(Gp=1,Qu.exports=Xw()),Qu.exports}var ie=Jw(),Ae=Gc(),tl={},Xu={exports:{}},ft={},Ju={exports:{}},Zu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp;function Zw(){return qp||(qp=1,function(r){function e(b,q){var z=b.length;b.push(q);e:for(;0<z;){var I=z-1>>>1,P=b[I];if(0<l(P,q))b[I]=q,b[z]=P,z=I;else break e}}function n(b){return b.length===0?null:b[0]}function s(b){if(b.length===0)return null;var q=b[0],z=b.pop();if(z!==q){b[0]=z;e:for(var I=0,P=b.length,Z=P>>>1;I<Z;){var re=2*(I+1)-1,le=b[re],ae=re+1,me=b[ae];if(0>l(le,z))ae<P&&0>l(me,le)?(b[I]=me,b[ae]=z,I=ae):(b[I]=le,b[re]=z,I=re);else if(ae<P&&0>l(me,z))b[I]=me,b[ae]=z,I=ae;else break e}}return q}function l(b,q){var z=b.sortIndex-q.sortIndex;return z!==0?z:b.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var d=Date,f=d.now();r.unstable_now=function(){return d.now()-f}}var p=[],g=[],w=1,v=null,S=3,R=!1,M=!1,x=!1,$=typeof setTimeout=="function"?setTimeout:null,Ce=typeof clearTimeout=="function"?clearTimeout:null,ye=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function De(b){for(var q=n(g);q!==null;){if(q.callback===null)s(g);else if(q.startTime<=b)s(g),q.sortIndex=q.expirationTime,e(p,q);else break;q=n(g)}}function V(b){if(x=!1,De(b),!M)if(n(p)!==null)M=!0,lt(X);else{var q=n(g);q!==null&&Ne(V,q.startTime-b)}}function X(b,q){M=!1,x&&(x=!1,Ce(ze),ze=-1),R=!0;var z=S;try{for(De(q),v=n(p);v!==null&&(!(v.expirationTime>q)||b&&!sr());){var I=v.callback;if(typeof I=="function"){v.callback=null,S=v.priorityLevel;var P=I(v.expirationTime<=q);q=r.unstable_now(),typeof P=="function"?v.callback=P:v===n(p)&&s(p),De(q)}else s(p);v=n(p)}if(v!==null)var Z=!0;else{var re=n(g);re!==null&&Ne(V,re.startTime-q),Z=!1}return Z}finally{v=null,S=z,R=!1}}var J=!1,Te=null,ze=-1,nt=5,_t=-1;function sr(){return!(r.unstable_now()-_t<nt)}function Kt(){if(Te!==null){var b=r.unstable_now();_t=b;var q=!0;try{q=Te(!0,b)}finally{q?vt():(J=!1,Te=null)}}else J=!1}var vt;if(typeof ye=="function")vt=function(){ye(Kt)};else if(typeof MessageChannel<"u"){var Lt=new MessageChannel,Qt=Lt.port2;Lt.port1.onmessage=Kt,vt=function(){Qt.postMessage(null)}}else vt=function(){$(Kt,0)};function lt(b){Te=b,J||(J=!0,vt())}function Ne(b,q){ze=$(function(){b(r.unstable_now())},q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(b){b.callback=null},r.unstable_continueExecution=function(){M||R||(M=!0,lt(X))},r.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):nt=0<b?Math.floor(1e3/b):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_getFirstCallbackNode=function(){return n(p)},r.unstable_next=function(b){switch(S){case 1:case 2:case 3:var q=3;break;default:q=S}var z=S;S=q;try{return b()}finally{S=z}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(b,q){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var z=S;S=b;try{return q()}finally{S=z}},r.unstable_scheduleCallback=function(b,q,z){var I=r.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?I+z:I):z=I,b){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=z+P,b={id:w++,callback:q,priorityLevel:b,startTime:z,expirationTime:P,sortIndex:-1},z>I?(b.sortIndex=z,e(g,b),n(p)===null&&b===n(g)&&(x?(Ce(ze),ze=-1):x=!0,Ne(V,z-I))):(b.sortIndex=P,e(p,b),M||R||(M=!0,lt(X))),b},r.unstable_shouldYield=sr,r.unstable_wrapCallback=function(b){var q=S;return function(){var z=S;S=q;try{return b.apply(this,arguments)}finally{S=z}}}}(Zu)),Zu}var Kp;function e0(){return Kp||(Kp=1,Ju.exports=Zw()),Ju.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp;function t0(){if(Qp)return ft;Qp=1;var r=Gc(),e=e0();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function u(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(l[t]=i,t=0;t<i.length;t++)s.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},v={};function S(t){return p.call(v,t)?!0:p.call(w,t)?!1:g.test(t)?v[t]=!0:(w[t]=!0,!1)}function R(t,i,o,a){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return a?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function M(t,i,o,a){if(i===null||typeof i>"u"||R(t,i,o,a))return!0;if(a)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function x(t,i,o,a,c,h,m){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=a,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=m}var $={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$[t]=new x(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];$[i]=new x(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){$[t]=new x(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$[t]=new x(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$[t]=new x(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){$[t]=new x(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){$[t]=new x(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){$[t]=new x(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){$[t]=new x(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ce=/[\-:]([a-z])/g;function ye(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(Ce,ye);$[i]=new x(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(Ce,ye);$[i]=new x(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(Ce,ye);$[i]=new x(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){$[t]=new x(t,1,!1,t.toLowerCase(),null,!1,!1)}),$.xlinkHref=new x("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){$[t]=new x(t,1,!1,t.toLowerCase(),null,!0,!0)});function De(t,i,o,a){var c=$.hasOwnProperty(i)?$[i]:null;(c!==null?c.type!==0:a||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,o,c,a)&&(o=null),a||c===null?S(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):c.mustUseProperty?t[c.propertyName]=o===null?c.type===3?!1:"":o:(i=c.attributeName,a=c.attributeNamespace,o===null?t.removeAttribute(i):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,a?t.setAttributeNS(a,i,o):t.setAttribute(i,o))))}var V=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,X=Symbol.for("react.element"),J=Symbol.for("react.portal"),Te=Symbol.for("react.fragment"),ze=Symbol.for("react.strict_mode"),nt=Symbol.for("react.profiler"),_t=Symbol.for("react.provider"),sr=Symbol.for("react.context"),Kt=Symbol.for("react.forward_ref"),vt=Symbol.for("react.suspense"),Lt=Symbol.for("react.suspense_list"),Qt=Symbol.for("react.memo"),lt=Symbol.for("react.lazy"),Ne=Symbol.for("react.offscreen"),b=Symbol.iterator;function q(t){return t===null||typeof t!="object"?null:(t=b&&t[b]||t["@@iterator"],typeof t=="function"?t:null)}var z=Object.assign,I;function P(t){if(I===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+t}var Z=!1;function re(t,i){if(!t||Z)return"";Z=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(k){var a=k}Reflect.construct(t,[],i)}else{try{i.call()}catch(k){a=k}t.call(i.prototype)}else{try{throw Error()}catch(k){a=k}t()}}catch(k){if(k&&a&&typeof k.stack=="string"){for(var c=k.stack.split(`
`),h=a.stack.split(`
`),m=c.length-1,_=h.length-1;1<=m&&0<=_&&c[m]!==h[_];)_--;for(;1<=m&&0<=_;m--,_--)if(c[m]!==h[_]){if(m!==1||_!==1)do if(m--,_--,0>_||c[m]!==h[_]){var y=`
`+c[m].replace(" at new "," at ");return t.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",t.displayName)),y}while(1<=m&&0<=_);break}}}finally{Z=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?P(t):""}function le(t){switch(t.tag){case 5:return P(t.type);case 16:return P("Lazy");case 13:return P("Suspense");case 19:return P("SuspenseList");case 0:case 2:case 15:return t=re(t.type,!1),t;case 11:return t=re(t.type.render,!1),t;case 1:return t=re(t.type,!0),t;default:return""}}function ae(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Te:return"Fragment";case J:return"Portal";case nt:return"Profiler";case ze:return"StrictMode";case vt:return"Suspense";case Lt:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case sr:return(t.displayName||"Context")+".Consumer";case _t:return(t._context.displayName||"Context")+".Provider";case Kt:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Qt:return i=t.displayName||null,i!==null?i:ae(t.type)||"Memo";case lt:i=t._payload,t=t._init;try{return ae(t(i))}catch{}}return null}function me(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ae(i);case 8:return i===ze?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function de(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Se(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function yt(t){var i=Se(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),a=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(m){a=""+m,h.call(this,m)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(m){a=""+m},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function $s(t){t._valueTracker||(t._valueTracker=yt(t))}function Kd(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),a="";return t&&(a=Se(t)?t.checked?"true":"false":t.value),t=a,t!==o?(i.setValue(t),!0):!1}function Hs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function na(t,i){var o=i.checked;return z({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function Qd(t,i){var o=i.defaultValue==null?"":i.defaultValue,a=i.checked!=null?i.checked:i.defaultChecked;o=de(i.value!=null?i.value:o),t._wrapperState={initialChecked:a,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Yd(t,i){i=i.checked,i!=null&&De(t,"checked",i,!1)}function ra(t,i){Yd(t,i);var o=de(i.value),a=i.type;if(o!=null)a==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(a==="submit"||a==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?ia(t,i.type,o):i.hasOwnProperty("defaultValue")&&ia(t,i.type,de(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Xd(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var a=i.type;if(!(a!=="submit"&&a!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function ia(t,i,o){(i!=="number"||Hs(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Ri=Array.isArray;function Lr(t,i,o,a){if(t=t.options,i){i={};for(var c=0;c<o.length;c++)i["$"+o[c]]=!0;for(o=0;o<t.length;o++)c=i.hasOwnProperty("$"+t[o].value),t[o].selected!==c&&(t[o].selected=c),c&&a&&(t[o].defaultSelected=!0)}else{for(o=""+de(o),i=null,c=0;c<t.length;c++){if(t[c].value===o){t[c].selected=!0,a&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function sa(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return z({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Jd(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(Ri(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:de(o)}}function Zd(t,i){var o=de(i.value),a=de(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),a!=null&&(t.defaultValue=""+a)}function eh(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function th(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function oa(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?th(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Gs,nh=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,a,c){MSApp.execUnsafeLocalFunction(function(){return t(i,o,a,c)})}:t}(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Gs=Gs||document.createElement("div"),Gs.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Gs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Ni(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Pi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Zv=["Webkit","ms","Moz","O"];Object.keys(Pi).forEach(function(t){Zv.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Pi[i]=Pi[t]})});function rh(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Pi.hasOwnProperty(t)&&Pi[t]?(""+i).trim():i+"px"}function ih(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var a=o.indexOf("--")===0,c=rh(o,i[o],a);o==="float"&&(o="cssFloat"),a?t.setProperty(o,c):t[o]=c}}var ey=z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function la(t,i){if(i){if(ey[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function aa(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ua=null;function ca(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var da=null,Mr=null,br=null;function sh(t){if(t=Xi(t)){if(typeof da!="function")throw Error(n(280));var i=t.stateNode;i&&(i=go(i),da(t.stateNode,t.type,i))}}function oh(t){Mr?br?br.push(t):br=[t]:Mr=t}function lh(){if(Mr){var t=Mr,i=br;if(br=Mr=null,sh(t),i)for(t=0;t<i.length;t++)sh(i[t])}}function ah(t,i){return t(i)}function uh(){}var ha=!1;function ch(t,i,o){if(ha)return t(i,o);ha=!0;try{return ah(t,i,o)}finally{ha=!1,(Mr!==null||br!==null)&&(uh(),lh())}}function Ai(t,i){var o=t.stateNode;if(o===null)return null;var a=go(o);if(a===null)return null;o=a[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var fa=!1;if(f)try{var Oi={};Object.defineProperty(Oi,"passive",{get:function(){fa=!0}}),window.addEventListener("test",Oi,Oi),window.removeEventListener("test",Oi,Oi)}catch{fa=!1}function ty(t,i,o,a,c,h,m,_,y){var k=Array.prototype.slice.call(arguments,3);try{i.apply(o,k)}catch(A){this.onError(A)}}var xi=!1,qs=null,Ks=!1,pa=null,ny={onError:function(t){xi=!0,qs=t}};function ry(t,i,o,a,c,h,m,_,y){xi=!1,qs=null,ty.apply(ny,arguments)}function iy(t,i,o,a,c,h,m,_,y){if(ry.apply(this,arguments),xi){if(xi){var k=qs;xi=!1,qs=null}else throw Error(n(198));Ks||(Ks=!0,pa=k)}}function or(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,i.flags&4098&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function dh(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function hh(t){if(or(t)!==t)throw Error(n(188))}function sy(t){var i=t.alternate;if(!i){if(i=or(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,a=i;;){var c=o.return;if(c===null)break;var h=c.alternate;if(h===null){if(a=c.return,a!==null){o=a;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===o)return hh(c),t;if(h===a)return hh(c),i;h=h.sibling}throw Error(n(188))}if(o.return!==a.return)o=c,a=h;else{for(var m=!1,_=c.child;_;){if(_===o){m=!0,o=c,a=h;break}if(_===a){m=!0,a=c,o=h;break}_=_.sibling}if(!m){for(_=h.child;_;){if(_===o){m=!0,o=h,a=c;break}if(_===a){m=!0,a=h,o=c;break}_=_.sibling}if(!m)throw Error(n(189))}}if(o.alternate!==a)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function fh(t){return t=sy(t),t!==null?ph(t):null}function ph(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=ph(t);if(i!==null)return i;t=t.sibling}return null}var mh=e.unstable_scheduleCallback,gh=e.unstable_cancelCallback,oy=e.unstable_shouldYield,ly=e.unstable_requestPaint,Le=e.unstable_now,ay=e.unstable_getCurrentPriorityLevel,ma=e.unstable_ImmediatePriority,_h=e.unstable_UserBlockingPriority,Qs=e.unstable_NormalPriority,uy=e.unstable_LowPriority,vh=e.unstable_IdlePriority,Ys=null,Yt=null;function cy(t){if(Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(Ys,t,void 0,(t.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:fy,dy=Math.log,hy=Math.LN2;function fy(t){return t>>>=0,t===0?32:31-(dy(t)/hy|0)|0}var Xs=64,Js=4194304;function Di(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Zs(t,i){var o=t.pendingLanes;if(o===0)return 0;var a=0,c=t.suspendedLanes,h=t.pingedLanes,m=o&268435455;if(m!==0){var _=m&~c;_!==0?a=Di(_):(h&=m,h!==0&&(a=Di(h)))}else m=o&~c,m!==0?a=Di(m):h!==0&&(a=Di(h));if(a===0)return 0;if(i!==0&&i!==a&&!(i&c)&&(c=a&-a,h=i&-i,c>=h||c===16&&(h&4194240)!==0))return i;if(a&4&&(a|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=a;0<i;)o=31-Mt(i),c=1<<o,a|=t[o],i&=~c;return a}function py(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function my(t,i){for(var o=t.suspendedLanes,a=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var m=31-Mt(h),_=1<<m,y=c[m];y===-1?(!(_&o)||_&a)&&(c[m]=py(_,i)):y<=i&&(t.expiredLanes|=_),h&=~_}}function ga(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function yh(){var t=Xs;return Xs<<=1,!(Xs&4194240)&&(Xs=64),t}function _a(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Li(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Mt(i),t[i]=o}function gy(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var a=t.eventTimes;for(t=t.expirationTimes;0<o;){var c=31-Mt(o),h=1<<c;i[c]=0,a[c]=-1,t[c]=-1,o&=~h}}function va(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var a=31-Mt(o),c=1<<a;c&i|t[a]&i&&(t[a]|=i),o&=~c}}var he=0;function wh(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Eh,ya,Sh,Ih,Ch,wa=!1,eo=[],kn=null,Rn=null,Nn=null,Mi=new Map,bi=new Map,Pn=[],_y="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Th(t,i){switch(t){case"focusin":case"focusout":kn=null;break;case"dragenter":case"dragleave":Rn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":Mi.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":bi.delete(i.pointerId)}}function Fi(t,i,o,a,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:a,nativeEvent:h,targetContainers:[c]},i!==null&&(i=Xi(i),i!==null&&ya(i)),t):(t.eventSystemFlags|=a,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function vy(t,i,o,a,c){switch(i){case"focusin":return kn=Fi(kn,t,i,o,a,c),!0;case"dragenter":return Rn=Fi(Rn,t,i,o,a,c),!0;case"mouseover":return Nn=Fi(Nn,t,i,o,a,c),!0;case"pointerover":var h=c.pointerId;return Mi.set(h,Fi(Mi.get(h)||null,t,i,o,a,c)),!0;case"gotpointercapture":return h=c.pointerId,bi.set(h,Fi(bi.get(h)||null,t,i,o,a,c)),!0}return!1}function kh(t){var i=lr(t.target);if(i!==null){var o=or(i);if(o!==null){if(i=o.tag,i===13){if(i=dh(o),i!==null){t.blockedOn=i,Ch(t.priority,function(){Sh(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function to(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Sa(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var a=new o.constructor(o.type,o);ua=a,o.target.dispatchEvent(a),ua=null}else return i=Xi(o),i!==null&&ya(i),t.blockedOn=o,!1;i.shift()}return!0}function Rh(t,i,o){to(t)&&o.delete(i)}function yy(){wa=!1,kn!==null&&to(kn)&&(kn=null),Rn!==null&&to(Rn)&&(Rn=null),Nn!==null&&to(Nn)&&(Nn=null),Mi.forEach(Rh),bi.forEach(Rh)}function Ui(t,i){t.blockedOn===i&&(t.blockedOn=null,wa||(wa=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,yy)))}function zi(t){function i(c){return Ui(c,t)}if(0<eo.length){Ui(eo[0],t);for(var o=1;o<eo.length;o++){var a=eo[o];a.blockedOn===t&&(a.blockedOn=null)}}for(kn!==null&&Ui(kn,t),Rn!==null&&Ui(Rn,t),Nn!==null&&Ui(Nn,t),Mi.forEach(i),bi.forEach(i),o=0;o<Pn.length;o++)a=Pn[o],a.blockedOn===t&&(a.blockedOn=null);for(;0<Pn.length&&(o=Pn[0],o.blockedOn===null);)kh(o),o.blockedOn===null&&Pn.shift()}var Fr=V.ReactCurrentBatchConfig,no=!0;function wy(t,i,o,a){var c=he,h=Fr.transition;Fr.transition=null;try{he=1,Ea(t,i,o,a)}finally{he=c,Fr.transition=h}}function Ey(t,i,o,a){var c=he,h=Fr.transition;Fr.transition=null;try{he=4,Ea(t,i,o,a)}finally{he=c,Fr.transition=h}}function Ea(t,i,o,a){if(no){var c=Sa(t,i,o,a);if(c===null)za(t,i,a,ro,o),Th(t,a);else if(vy(c,t,i,o,a))a.stopPropagation();else if(Th(t,a),i&4&&-1<_y.indexOf(t)){for(;c!==null;){var h=Xi(c);if(h!==null&&Eh(h),h=Sa(t,i,o,a),h===null&&za(t,i,a,ro,o),h===c)break;c=h}c!==null&&a.stopPropagation()}else za(t,i,a,null,o)}}var ro=null;function Sa(t,i,o,a){if(ro=null,t=ca(a),t=lr(t),t!==null)if(i=or(t),i===null)t=null;else if(o=i.tag,o===13){if(t=dh(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return ro=t,null}function Nh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ay()){case ma:return 1;case _h:return 4;case Qs:case uy:return 16;case vh:return 536870912;default:return 16}default:return 16}}var An=null,Ia=null,io=null;function Ph(){if(io)return io;var t,i=Ia,o=i.length,a,c="value"in An?An.value:An.textContent,h=c.length;for(t=0;t<o&&i[t]===c[t];t++);var m=o-t;for(a=1;a<=m&&i[o-a]===c[h-a];a++);return io=c.slice(t,1<a?1-a:void 0)}function so(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function oo(){return!0}function Ah(){return!1}function wt(t){function i(o,a,c,h,m){this._reactName=o,this._targetInst=c,this.type=a,this.nativeEvent=h,this.target=m,this.currentTarget=null;for(var _ in t)t.hasOwnProperty(_)&&(o=t[_],this[_]=o?o(h):h[_]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?oo:Ah,this.isPropagationStopped=Ah,this}return z(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=oo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=oo)},persist:function(){},isPersistent:oo}),i}var Ur={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ca=wt(Ur),ji=z({},Ur,{view:0,detail:0}),Sy=wt(ji),Ta,ka,Wi,lo=z({},ji,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Na,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Wi&&(Wi&&t.type==="mousemove"?(Ta=t.screenX-Wi.screenX,ka=t.screenY-Wi.screenY):ka=Ta=0,Wi=t),Ta)},movementY:function(t){return"movementY"in t?t.movementY:ka}}),Oh=wt(lo),Iy=z({},lo,{dataTransfer:0}),Cy=wt(Iy),Ty=z({},ji,{relatedTarget:0}),Ra=wt(Ty),ky=z({},Ur,{animationName:0,elapsedTime:0,pseudoElement:0}),Ry=wt(ky),Ny=z({},Ur,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Py=wt(Ny),Ay=z({},Ur,{data:0}),xh=wt(Ay),Oy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ly(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Dy[t])?!!i[t]:!1}function Na(){return Ly}var My=z({},ji,{key:function(t){if(t.key){var i=Oy[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=so(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?xy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Na,charCode:function(t){return t.type==="keypress"?so(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?so(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),by=wt(My),Fy=z({},lo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dh=wt(Fy),Uy=z({},ji,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Na}),zy=wt(Uy),jy=z({},Ur,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wy=wt(jy),By=z({},lo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Vy=wt(By),$y=[9,13,27,32],Pa=f&&"CompositionEvent"in window,Bi=null;f&&"documentMode"in document&&(Bi=document.documentMode);var Hy=f&&"TextEvent"in window&&!Bi,Lh=f&&(!Pa||Bi&&8<Bi&&11>=Bi),Mh=" ",bh=!1;function Fh(t,i){switch(t){case"keyup":return $y.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var zr=!1;function Gy(t,i){switch(t){case"compositionend":return Uh(i);case"keypress":return i.which!==32?null:(bh=!0,Mh);case"textInput":return t=i.data,t===Mh&&bh?null:t;default:return null}}function qy(t,i){if(zr)return t==="compositionend"||!Pa&&Fh(t,i)?(t=Ph(),io=Ia=An=null,zr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Lh&&i.locale!=="ko"?null:i.data;default:return null}}var Ky={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zh(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Ky[t.type]:i==="textarea"}function jh(t,i,o,a){oh(a),i=fo(i,"onChange"),0<i.length&&(o=new Ca("onChange","change",null,o,a),t.push({event:o,listeners:i}))}var Vi=null,$i=null;function Qy(t){sf(t,0)}function ao(t){var i=$r(t);if(Kd(i))return t}function Yy(t,i){if(t==="change")return i}var Wh=!1;if(f){var Aa;if(f){var Oa="oninput"in document;if(!Oa){var Bh=document.createElement("div");Bh.setAttribute("oninput","return;"),Oa=typeof Bh.oninput=="function"}Aa=Oa}else Aa=!1;Wh=Aa&&(!document.documentMode||9<document.documentMode)}function Vh(){Vi&&(Vi.detachEvent("onpropertychange",$h),$i=Vi=null)}function $h(t){if(t.propertyName==="value"&&ao($i)){var i=[];jh(i,$i,t,ca(t)),ch(Qy,i)}}function Xy(t,i,o){t==="focusin"?(Vh(),Vi=i,$i=o,Vi.attachEvent("onpropertychange",$h)):t==="focusout"&&Vh()}function Jy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ao($i)}function Zy(t,i){if(t==="click")return ao(i)}function ew(t,i){if(t==="input"||t==="change")return ao(i)}function tw(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var bt=typeof Object.is=="function"?Object.is:tw;function Hi(t,i){if(bt(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),a=Object.keys(i);if(o.length!==a.length)return!1;for(a=0;a<o.length;a++){var c=o[a];if(!p.call(i,c)||!bt(t[c],i[c]))return!1}return!0}function Hh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Gh(t,i){var o=Hh(t);t=0;for(var a;o;){if(o.nodeType===3){if(a=t+o.textContent.length,t<=i&&a>=i)return{node:o,offset:i-t};t=a}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Hh(o)}}function qh(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?qh(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Kh(){for(var t=window,i=Hs();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=Hs(t.document)}return i}function xa(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function nw(t){var i=Kh(),o=t.focusedElem,a=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&qh(o.ownerDocument.documentElement,o)){if(a!==null&&xa(o)){if(i=a.start,t=a.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=o.textContent.length,h=Math.min(a.start,c);a=a.end===void 0?h:Math.min(a.end,c),!t.extend&&h>a&&(c=a,a=h,h=c),c=Gh(o,h);var m=Gh(o,a);c&&m&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==m.node||t.focusOffset!==m.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),h>a?(t.addRange(i),t.extend(m.node,m.offset)):(i.setEnd(m.node,m.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var rw=f&&"documentMode"in document&&11>=document.documentMode,jr=null,Da=null,Gi=null,La=!1;function Qh(t,i,o){var a=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;La||jr==null||jr!==Hs(a)||(a=jr,"selectionStart"in a&&xa(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Gi&&Hi(Gi,a)||(Gi=a,a=fo(Da,"onSelect"),0<a.length&&(i=new Ca("onSelect","select",null,i,o),t.push({event:i,listeners:a}),i.target=jr)))}function uo(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var Wr={animationend:uo("Animation","AnimationEnd"),animationiteration:uo("Animation","AnimationIteration"),animationstart:uo("Animation","AnimationStart"),transitionend:uo("Transition","TransitionEnd")},Ma={},Yh={};f&&(Yh=document.createElement("div").style,"AnimationEvent"in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),"TransitionEvent"in window||delete Wr.transitionend.transition);function co(t){if(Ma[t])return Ma[t];if(!Wr[t])return t;var i=Wr[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Yh)return Ma[t]=i[o];return t}var Xh=co("animationend"),Jh=co("animationiteration"),Zh=co("animationstart"),ef=co("transitionend"),tf=new Map,nf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function On(t,i){tf.set(t,i),u(i,[t])}for(var ba=0;ba<nf.length;ba++){var Fa=nf[ba],iw=Fa.toLowerCase(),sw=Fa[0].toUpperCase()+Fa.slice(1);On(iw,"on"+sw)}On(Xh,"onAnimationEnd"),On(Jh,"onAnimationIteration"),On(Zh,"onAnimationStart"),On("dblclick","onDoubleClick"),On("focusin","onFocus"),On("focusout","onBlur"),On(ef,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ow=new Set("cancel close invalid load scroll toggle".split(" ").concat(qi));function rf(t,i,o){var a=t.type||"unknown-event";t.currentTarget=o,iy(a,i,void 0,t),t.currentTarget=null}function sf(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var a=t[o],c=a.event;a=a.listeners;e:{var h=void 0;if(i)for(var m=a.length-1;0<=m;m--){var _=a[m],y=_.instance,k=_.currentTarget;if(_=_.listener,y!==h&&c.isPropagationStopped())break e;rf(c,_,k),h=y}else for(m=0;m<a.length;m++){if(_=a[m],y=_.instance,k=_.currentTarget,_=_.listener,y!==h&&c.isPropagationStopped())break e;rf(c,_,k),h=y}}}if(Ks)throw t=pa,Ks=!1,pa=null,t}function we(t,i){var o=i[Ha];o===void 0&&(o=i[Ha]=new Set);var a=t+"__bubble";o.has(a)||(of(i,t,2,!1),o.add(a))}function Ua(t,i,o){var a=0;i&&(a|=4),of(o,t,a,i)}var ho="_reactListening"+Math.random().toString(36).slice(2);function Ki(t){if(!t[ho]){t[ho]=!0,s.forEach(function(o){o!=="selectionchange"&&(ow.has(o)||Ua(o,!1,t),Ua(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ho]||(i[ho]=!0,Ua("selectionchange",!1,i))}}function of(t,i,o,a){switch(Nh(i)){case 1:var c=wy;break;case 4:c=Ey;break;default:c=Ea}o=c.bind(null,i,o,t),c=void 0,!fa||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),a?c!==void 0?t.addEventListener(i,o,{capture:!0,passive:c}):t.addEventListener(i,o,!0):c!==void 0?t.addEventListener(i,o,{passive:c}):t.addEventListener(i,o,!1)}function za(t,i,o,a,c){var h=a;if(!(i&1)&&!(i&2)&&a!==null)e:for(;;){if(a===null)return;var m=a.tag;if(m===3||m===4){var _=a.stateNode.containerInfo;if(_===c||_.nodeType===8&&_.parentNode===c)break;if(m===4)for(m=a.return;m!==null;){var y=m.tag;if((y===3||y===4)&&(y=m.stateNode.containerInfo,y===c||y.nodeType===8&&y.parentNode===c))return;m=m.return}for(;_!==null;){if(m=lr(_),m===null)return;if(y=m.tag,y===5||y===6){a=h=m;continue e}_=_.parentNode}}a=a.return}ch(function(){var k=h,A=ca(o),O=[];e:{var N=tf.get(t);if(N!==void 0){var F=Ca,j=t;switch(t){case"keypress":if(so(o)===0)break e;case"keydown":case"keyup":F=by;break;case"focusin":j="focus",F=Ra;break;case"focusout":j="blur",F=Ra;break;case"beforeblur":case"afterblur":F=Ra;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=Oh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=Cy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=zy;break;case Xh:case Jh:case Zh:F=Ry;break;case ef:F=Wy;break;case"scroll":F=Sy;break;case"wheel":F=Vy;break;case"copy":case"cut":case"paste":F=Py;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=Dh}var W=(i&4)!==0,Me=!W&&t==="scroll",C=W?N!==null?N+"Capture":null:N;W=[];for(var E=k,T;E!==null;){T=E;var D=T.stateNode;if(T.tag===5&&D!==null&&(T=D,C!==null&&(D=Ai(E,C),D!=null&&W.push(Qi(E,D,T)))),Me)break;E=E.return}0<W.length&&(N=new F(N,j,null,o,A),O.push({event:N,listeners:W}))}}if(!(i&7)){e:{if(N=t==="mouseover"||t==="pointerover",F=t==="mouseout"||t==="pointerout",N&&o!==ua&&(j=o.relatedTarget||o.fromElement)&&(lr(j)||j[ln]))break e;if((F||N)&&(N=A.window===A?A:(N=A.ownerDocument)?N.defaultView||N.parentWindow:window,F?(j=o.relatedTarget||o.toElement,F=k,j=j?lr(j):null,j!==null&&(Me=or(j),j!==Me||j.tag!==5&&j.tag!==6)&&(j=null)):(F=null,j=k),F!==j)){if(W=Oh,D="onMouseLeave",C="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(W=Dh,D="onPointerLeave",C="onPointerEnter",E="pointer"),Me=F==null?N:$r(F),T=j==null?N:$r(j),N=new W(D,E+"leave",F,o,A),N.target=Me,N.relatedTarget=T,D=null,lr(A)===k&&(W=new W(C,E+"enter",j,o,A),W.target=T,W.relatedTarget=Me,D=W),Me=D,F&&j)t:{for(W=F,C=j,E=0,T=W;T;T=Br(T))E++;for(T=0,D=C;D;D=Br(D))T++;for(;0<E-T;)W=Br(W),E--;for(;0<T-E;)C=Br(C),T--;for(;E--;){if(W===C||C!==null&&W===C.alternate)break t;W=Br(W),C=Br(C)}W=null}else W=null;F!==null&&lf(O,N,F,W,!1),j!==null&&Me!==null&&lf(O,Me,j,W,!0)}}e:{if(N=k?$r(k):window,F=N.nodeName&&N.nodeName.toLowerCase(),F==="select"||F==="input"&&N.type==="file")var B=Yy;else if(zh(N))if(Wh)B=ew;else{B=Jy;var H=Xy}else(F=N.nodeName)&&F.toLowerCase()==="input"&&(N.type==="checkbox"||N.type==="radio")&&(B=Zy);if(B&&(B=B(t,k))){jh(O,B,o,A);break e}H&&H(t,N,k),t==="focusout"&&(H=N._wrapperState)&&H.controlled&&N.type==="number"&&ia(N,"number",N.value)}switch(H=k?$r(k):window,t){case"focusin":(zh(H)||H.contentEditable==="true")&&(jr=H,Da=k,Gi=null);break;case"focusout":Gi=Da=jr=null;break;case"mousedown":La=!0;break;case"contextmenu":case"mouseup":case"dragend":La=!1,Qh(O,o,A);break;case"selectionchange":if(rw)break;case"keydown":case"keyup":Qh(O,o,A)}var G;if(Pa)e:{switch(t){case"compositionstart":var Q="onCompositionStart";break e;case"compositionend":Q="onCompositionEnd";break e;case"compositionupdate":Q="onCompositionUpdate";break e}Q=void 0}else zr?Fh(t,o)&&(Q="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(Q="onCompositionStart");Q&&(Lh&&o.locale!=="ko"&&(zr||Q!=="onCompositionStart"?Q==="onCompositionEnd"&&zr&&(G=Ph()):(An=A,Ia="value"in An?An.value:An.textContent,zr=!0)),H=fo(k,Q),0<H.length&&(Q=new xh(Q,t,null,o,A),O.push({event:Q,listeners:H}),G?Q.data=G:(G=Uh(o),G!==null&&(Q.data=G)))),(G=Hy?Gy(t,o):qy(t,o))&&(k=fo(k,"onBeforeInput"),0<k.length&&(A=new xh("onBeforeInput","beforeinput",null,o,A),O.push({event:A,listeners:k}),A.data=G))}sf(O,i)})}function Qi(t,i,o){return{instance:t,listener:i,currentTarget:o}}function fo(t,i){for(var o=i+"Capture",a=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=Ai(t,o),h!=null&&a.unshift(Qi(t,h,c)),h=Ai(t,i),h!=null&&a.push(Qi(t,h,c))),t=t.return}return a}function Br(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function lf(t,i,o,a,c){for(var h=i._reactName,m=[];o!==null&&o!==a;){var _=o,y=_.alternate,k=_.stateNode;if(y!==null&&y===a)break;_.tag===5&&k!==null&&(_=k,c?(y=Ai(o,h),y!=null&&m.unshift(Qi(o,y,_))):c||(y=Ai(o,h),y!=null&&m.push(Qi(o,y,_)))),o=o.return}m.length!==0&&t.push({event:i,listeners:m})}var lw=/\r\n?/g,aw=/\u0000|\uFFFD/g;function af(t){return(typeof t=="string"?t:""+t).replace(lw,`
`).replace(aw,"")}function po(t,i,o){if(i=af(i),af(t)!==i&&o)throw Error(n(425))}function mo(){}var ja=null,Wa=null;function Ba(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Va=typeof setTimeout=="function"?setTimeout:void 0,uw=typeof clearTimeout=="function"?clearTimeout:void 0,uf=typeof Promise=="function"?Promise:void 0,cw=typeof queueMicrotask=="function"?queueMicrotask:typeof uf<"u"?function(t){return uf.resolve(null).then(t).catch(dw)}:Va;function dw(t){setTimeout(function(){throw t})}function $a(t,i){var o=i,a=0;do{var c=o.nextSibling;if(t.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(a===0){t.removeChild(c),zi(i);return}a--}else o!=="$"&&o!=="$?"&&o!=="$!"||a++;o=c}while(o);zi(i)}function xn(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function cf(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var Vr=Math.random().toString(36).slice(2),Xt="__reactFiber$"+Vr,Yi="__reactProps$"+Vr,ln="__reactContainer$"+Vr,Ha="__reactEvents$"+Vr,hw="__reactListeners$"+Vr,fw="__reactHandles$"+Vr;function lr(t){var i=t[Xt];if(i)return i;for(var o=t.parentNode;o;){if(i=o[ln]||o[Xt]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=cf(t);t!==null;){if(o=t[Xt])return o;t=cf(t)}return i}t=o,o=t.parentNode}return null}function Xi(t){return t=t[Xt]||t[ln],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function $r(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function go(t){return t[Yi]||null}var Ga=[],Hr=-1;function Dn(t){return{current:t}}function Ee(t){0>Hr||(t.current=Ga[Hr],Ga[Hr]=null,Hr--)}function ge(t,i){Hr++,Ga[Hr]=t.current,t.current=i}var Ln={},Je=Dn(Ln),at=Dn(!1),ar=Ln;function Gr(t,i){var o=t.type.contextTypes;if(!o)return Ln;var a=t.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===i)return a.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in o)c[h]=i[h];return a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function ut(t){return t=t.childContextTypes,t!=null}function _o(){Ee(at),Ee(Je)}function df(t,i,o){if(Je.current!==Ln)throw Error(n(168));ge(Je,i),ge(at,o)}function hf(t,i,o){var a=t.stateNode;if(i=i.childContextTypes,typeof a.getChildContext!="function")return o;a=a.getChildContext();for(var c in a)if(!(c in i))throw Error(n(108,me(t)||"Unknown",c));return z({},o,a)}function vo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ln,ar=Je.current,ge(Je,t),ge(at,at.current),!0}function ff(t,i,o){var a=t.stateNode;if(!a)throw Error(n(169));o?(t=hf(t,i,ar),a.__reactInternalMemoizedMergedChildContext=t,Ee(at),Ee(Je),ge(Je,t)):Ee(at),ge(at,o)}var an=null,yo=!1,qa=!1;function pf(t){an===null?an=[t]:an.push(t)}function pw(t){yo=!0,pf(t)}function Mn(){if(!qa&&an!==null){qa=!0;var t=0,i=he;try{var o=an;for(he=1;t<o.length;t++){var a=o[t];do a=a(!0);while(a!==null)}an=null,yo=!1}catch(c){throw an!==null&&(an=an.slice(t+1)),mh(ma,Mn),c}finally{he=i,qa=!1}}return null}var qr=[],Kr=0,wo=null,Eo=0,kt=[],Rt=0,ur=null,un=1,cn="";function cr(t,i){qr[Kr++]=Eo,qr[Kr++]=wo,wo=t,Eo=i}function mf(t,i,o){kt[Rt++]=un,kt[Rt++]=cn,kt[Rt++]=ur,ur=t;var a=un;t=cn;var c=32-Mt(a)-1;a&=~(1<<c),o+=1;var h=32-Mt(i)+c;if(30<h){var m=c-c%5;h=(a&(1<<m)-1).toString(32),a>>=m,c-=m,un=1<<32-Mt(i)+c|o<<c|a,cn=h+t}else un=1<<h|o<<c|a,cn=t}function Ka(t){t.return!==null&&(cr(t,1),mf(t,1,0))}function Qa(t){for(;t===wo;)wo=qr[--Kr],qr[Kr]=null,Eo=qr[--Kr],qr[Kr]=null;for(;t===ur;)ur=kt[--Rt],kt[Rt]=null,cn=kt[--Rt],kt[Rt]=null,un=kt[--Rt],kt[Rt]=null}var Et=null,St=null,Ie=!1,Ft=null;function gf(t,i){var o=Ot(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function _f(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Et=t,St=xn(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Et=t,St=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=ur!==null?{id:un,overflow:cn}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Ot(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Et=t,St=null,!0):!1;default:return!1}}function Ya(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Xa(t){if(Ie){var i=St;if(i){var o=i;if(!_f(t,i)){if(Ya(t))throw Error(n(418));i=xn(o.nextSibling);var a=Et;i&&_f(t,i)?gf(a,o):(t.flags=t.flags&-4097|2,Ie=!1,Et=t)}}else{if(Ya(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ie=!1,Et=t}}}function vf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Et=t}function So(t){if(t!==Et)return!1;if(!Ie)return vf(t),Ie=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Ba(t.type,t.memoizedProps)),i&&(i=St)){if(Ya(t))throw yf(),Error(n(418));for(;i;)gf(t,i),i=xn(i.nextSibling)}if(vf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){St=xn(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}St=null}}else St=Et?xn(t.stateNode.nextSibling):null;return!0}function yf(){for(var t=St;t;)t=xn(t.nextSibling)}function Qr(){St=Et=null,Ie=!1}function Ja(t){Ft===null?Ft=[t]:Ft.push(t)}var mw=V.ReactCurrentBatchConfig;function Ji(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var a=o.stateNode}if(!a)throw Error(n(147,t));var c=a,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(m){var _=c.refs;m===null?delete _[h]:_[h]=m},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Io(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function wf(t){var i=t._init;return i(t._payload)}function Ef(t){function i(C,E){if(t){var T=C.deletions;T===null?(C.deletions=[E],C.flags|=16):T.push(E)}}function o(C,E){if(!t)return null;for(;E!==null;)i(C,E),E=E.sibling;return null}function a(C,E){for(C=new Map;E!==null;)E.key!==null?C.set(E.key,E):C.set(E.index,E),E=E.sibling;return C}function c(C,E){return C=Vn(C,E),C.index=0,C.sibling=null,C}function h(C,E,T){return C.index=T,t?(T=C.alternate,T!==null?(T=T.index,T<E?(C.flags|=2,E):T):(C.flags|=2,E)):(C.flags|=1048576,E)}function m(C){return t&&C.alternate===null&&(C.flags|=2),C}function _(C,E,T,D){return E===null||E.tag!==6?(E=Vu(T,C.mode,D),E.return=C,E):(E=c(E,T),E.return=C,E)}function y(C,E,T,D){var B=T.type;return B===Te?A(C,E,T.props.children,D,T.key):E!==null&&(E.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===lt&&wf(B)===E.type)?(D=c(E,T.props),D.ref=Ji(C,E,T),D.return=C,D):(D=qo(T.type,T.key,T.props,null,C.mode,D),D.ref=Ji(C,E,T),D.return=C,D)}function k(C,E,T,D){return E===null||E.tag!==4||E.stateNode.containerInfo!==T.containerInfo||E.stateNode.implementation!==T.implementation?(E=$u(T,C.mode,D),E.return=C,E):(E=c(E,T.children||[]),E.return=C,E)}function A(C,E,T,D,B){return E===null||E.tag!==7?(E=vr(T,C.mode,D,B),E.return=C,E):(E=c(E,T),E.return=C,E)}function O(C,E,T){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Vu(""+E,C.mode,T),E.return=C,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case X:return T=qo(E.type,E.key,E.props,null,C.mode,T),T.ref=Ji(C,null,E),T.return=C,T;case J:return E=$u(E,C.mode,T),E.return=C,E;case lt:var D=E._init;return O(C,D(E._payload),T)}if(Ri(E)||q(E))return E=vr(E,C.mode,T,null),E.return=C,E;Io(C,E)}return null}function N(C,E,T,D){var B=E!==null?E.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return B!==null?null:_(C,E,""+T,D);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case X:return T.key===B?y(C,E,T,D):null;case J:return T.key===B?k(C,E,T,D):null;case lt:return B=T._init,N(C,E,B(T._payload),D)}if(Ri(T)||q(T))return B!==null?null:A(C,E,T,D,null);Io(C,T)}return null}function F(C,E,T,D,B){if(typeof D=="string"&&D!==""||typeof D=="number")return C=C.get(T)||null,_(E,C,""+D,B);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case X:return C=C.get(D.key===null?T:D.key)||null,y(E,C,D,B);case J:return C=C.get(D.key===null?T:D.key)||null,k(E,C,D,B);case lt:var H=D._init;return F(C,E,T,H(D._payload),B)}if(Ri(D)||q(D))return C=C.get(T)||null,A(E,C,D,B,null);Io(E,D)}return null}function j(C,E,T,D){for(var B=null,H=null,G=E,Q=E=0,Be=null;G!==null&&Q<T.length;Q++){G.index>Q?(Be=G,G=null):Be=G.sibling;var ue=N(C,G,T[Q],D);if(ue===null){G===null&&(G=Be);break}t&&G&&ue.alternate===null&&i(C,G),E=h(ue,E,Q),H===null?B=ue:H.sibling=ue,H=ue,G=Be}if(Q===T.length)return o(C,G),Ie&&cr(C,Q),B;if(G===null){for(;Q<T.length;Q++)G=O(C,T[Q],D),G!==null&&(E=h(G,E,Q),H===null?B=G:H.sibling=G,H=G);return Ie&&cr(C,Q),B}for(G=a(C,G);Q<T.length;Q++)Be=F(G,C,Q,T[Q],D),Be!==null&&(t&&Be.alternate!==null&&G.delete(Be.key===null?Q:Be.key),E=h(Be,E,Q),H===null?B=Be:H.sibling=Be,H=Be);return t&&G.forEach(function($n){return i(C,$n)}),Ie&&cr(C,Q),B}function W(C,E,T,D){var B=q(T);if(typeof B!="function")throw Error(n(150));if(T=B.call(T),T==null)throw Error(n(151));for(var H=B=null,G=E,Q=E=0,Be=null,ue=T.next();G!==null&&!ue.done;Q++,ue=T.next()){G.index>Q?(Be=G,G=null):Be=G.sibling;var $n=N(C,G,ue.value,D);if($n===null){G===null&&(G=Be);break}t&&G&&$n.alternate===null&&i(C,G),E=h($n,E,Q),H===null?B=$n:H.sibling=$n,H=$n,G=Be}if(ue.done)return o(C,G),Ie&&cr(C,Q),B;if(G===null){for(;!ue.done;Q++,ue=T.next())ue=O(C,ue.value,D),ue!==null&&(E=h(ue,E,Q),H===null?B=ue:H.sibling=ue,H=ue);return Ie&&cr(C,Q),B}for(G=a(C,G);!ue.done;Q++,ue=T.next())ue=F(G,C,Q,ue.value,D),ue!==null&&(t&&ue.alternate!==null&&G.delete(ue.key===null?Q:ue.key),E=h(ue,E,Q),H===null?B=ue:H.sibling=ue,H=ue);return t&&G.forEach(function(Kw){return i(C,Kw)}),Ie&&cr(C,Q),B}function Me(C,E,T,D){if(typeof T=="object"&&T!==null&&T.type===Te&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case X:e:{for(var B=T.key,H=E;H!==null;){if(H.key===B){if(B=T.type,B===Te){if(H.tag===7){o(C,H.sibling),E=c(H,T.props.children),E.return=C,C=E;break e}}else if(H.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===lt&&wf(B)===H.type){o(C,H.sibling),E=c(H,T.props),E.ref=Ji(C,H,T),E.return=C,C=E;break e}o(C,H);break}else i(C,H);H=H.sibling}T.type===Te?(E=vr(T.props.children,C.mode,D,T.key),E.return=C,C=E):(D=qo(T.type,T.key,T.props,null,C.mode,D),D.ref=Ji(C,E,T),D.return=C,C=D)}return m(C);case J:e:{for(H=T.key;E!==null;){if(E.key===H)if(E.tag===4&&E.stateNode.containerInfo===T.containerInfo&&E.stateNode.implementation===T.implementation){o(C,E.sibling),E=c(E,T.children||[]),E.return=C,C=E;break e}else{o(C,E);break}else i(C,E);E=E.sibling}E=$u(T,C.mode,D),E.return=C,C=E}return m(C);case lt:return H=T._init,Me(C,E,H(T._payload),D)}if(Ri(T))return j(C,E,T,D);if(q(T))return W(C,E,T,D);Io(C,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,E!==null&&E.tag===6?(o(C,E.sibling),E=c(E,T),E.return=C,C=E):(o(C,E),E=Vu(T,C.mode,D),E.return=C,C=E),m(C)):o(C,E)}return Me}var Yr=Ef(!0),Sf=Ef(!1),Co=Dn(null),To=null,Xr=null,Za=null;function eu(){Za=Xr=To=null}function tu(t){var i=Co.current;Ee(Co),t._currentValue=i}function nu(t,i,o){for(;t!==null;){var a=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,a!==null&&(a.childLanes|=i)):a!==null&&(a.childLanes&i)!==i&&(a.childLanes|=i),t===o)break;t=t.return}}function Jr(t,i){To=t,Za=Xr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&i&&(ct=!0),t.firstContext=null)}function Nt(t){var i=t._currentValue;if(Za!==t)if(t={context:t,memoizedValue:i,next:null},Xr===null){if(To===null)throw Error(n(308));Xr=t,To.dependencies={lanes:0,firstContext:t}}else Xr=Xr.next=t;return i}var dr=null;function ru(t){dr===null?dr=[t]:dr.push(t)}function If(t,i,o,a){var c=i.interleaved;return c===null?(o.next=o,ru(i)):(o.next=c.next,c.next=o),i.interleaved=o,dn(t,a)}function dn(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var bn=!1;function iu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hn(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Fn(t,i,o){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,oe&2){var c=a.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),a.pending=i,dn(t,o)}return c=a.interleaved,c===null?(i.next=i,ru(a)):(i.next=c.next,c.next=i),a.interleaved=i,dn(t,o)}function ko(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var a=i.lanes;a&=t.pendingLanes,o|=a,i.lanes=o,va(t,o)}}function Tf(t,i){var o=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,o===a)){var c=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var m={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?c=h=m:h=h.next=m,o=o.next}while(o!==null);h===null?c=h=i:h=h.next=i}else c=h=i;o={baseState:a.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:a.shared,effects:a.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Ro(t,i,o,a){var c=t.updateQueue;bn=!1;var h=c.firstBaseUpdate,m=c.lastBaseUpdate,_=c.shared.pending;if(_!==null){c.shared.pending=null;var y=_,k=y.next;y.next=null,m===null?h=k:m.next=k,m=y;var A=t.alternate;A!==null&&(A=A.updateQueue,_=A.lastBaseUpdate,_!==m&&(_===null?A.firstBaseUpdate=k:_.next=k,A.lastBaseUpdate=y))}if(h!==null){var O=c.baseState;m=0,A=k=y=null,_=h;do{var N=_.lane,F=_.eventTime;if((a&N)===N){A!==null&&(A=A.next={eventTime:F,lane:0,tag:_.tag,payload:_.payload,callback:_.callback,next:null});e:{var j=t,W=_;switch(N=i,F=o,W.tag){case 1:if(j=W.payload,typeof j=="function"){O=j.call(F,O,N);break e}O=j;break e;case 3:j.flags=j.flags&-65537|128;case 0:if(j=W.payload,N=typeof j=="function"?j.call(F,O,N):j,N==null)break e;O=z({},O,N);break e;case 2:bn=!0}}_.callback!==null&&_.lane!==0&&(t.flags|=64,N=c.effects,N===null?c.effects=[_]:N.push(_))}else F={eventTime:F,lane:N,tag:_.tag,payload:_.payload,callback:_.callback,next:null},A===null?(k=A=F,y=O):A=A.next=F,m|=N;if(_=_.next,_===null){if(_=c.shared.pending,_===null)break;N=_,_=N.next,N.next=null,c.lastBaseUpdate=N,c.shared.pending=null}}while(!0);if(A===null&&(y=O),c.baseState=y,c.firstBaseUpdate=k,c.lastBaseUpdate=A,i=c.shared.interleaved,i!==null){c=i;do m|=c.lane,c=c.next;while(c!==i)}else h===null&&(c.shared.lanes=0);pr|=m,t.lanes=m,t.memoizedState=O}}function kf(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var a=t[i],c=a.callback;if(c!==null){if(a.callback=null,a=o,typeof c!="function")throw Error(n(191,c));c.call(a)}}}var Zi={},Jt=Dn(Zi),es=Dn(Zi),ts=Dn(Zi);function hr(t){if(t===Zi)throw Error(n(174));return t}function su(t,i){switch(ge(ts,i),ge(es,t),ge(Jt,Zi),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:oa(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=oa(i,t)}Ee(Jt),ge(Jt,i)}function Zr(){Ee(Jt),Ee(es),Ee(ts)}function Rf(t){hr(ts.current);var i=hr(Jt.current),o=oa(i,t.type);i!==o&&(ge(es,t),ge(Jt,o))}function ou(t){es.current===t&&(Ee(Jt),Ee(es))}var ke=Dn(0);function No(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var lu=[];function au(){for(var t=0;t<lu.length;t++)lu[t]._workInProgressVersionPrimary=null;lu.length=0}var Po=V.ReactCurrentDispatcher,uu=V.ReactCurrentBatchConfig,fr=0,Re=null,Fe=null,je=null,Ao=!1,ns=!1,rs=0,gw=0;function Ze(){throw Error(n(321))}function cu(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!bt(t[o],i[o]))return!1;return!0}function du(t,i,o,a,c,h){if(fr=h,Re=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Po.current=t===null||t.memoizedState===null?ww:Ew,t=o(a,c),ns){h=0;do{if(ns=!1,rs=0,25<=h)throw Error(n(301));h+=1,je=Fe=null,i.updateQueue=null,Po.current=Sw,t=o(a,c)}while(ns)}if(Po.current=Do,i=Fe!==null&&Fe.next!==null,fr=0,je=Fe=Re=null,Ao=!1,i)throw Error(n(300));return t}function hu(){var t=rs!==0;return rs=0,t}function Zt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?Re.memoizedState=je=t:je=je.next=t,je}function Pt(){if(Fe===null){var t=Re.alternate;t=t!==null?t.memoizedState:null}else t=Fe.next;var i=je===null?Re.memoizedState:je.next;if(i!==null)je=i,Fe=t;else{if(t===null)throw Error(n(310));Fe=t,t={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},je===null?Re.memoizedState=je=t:je=je.next=t}return je}function is(t,i){return typeof i=="function"?i(t):i}function fu(t){var i=Pt(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=Fe,c=a.baseQueue,h=o.pending;if(h!==null){if(c!==null){var m=c.next;c.next=h.next,h.next=m}a.baseQueue=c=h,o.pending=null}if(c!==null){h=c.next,a=a.baseState;var _=m=null,y=null,k=h;do{var A=k.lane;if((fr&A)===A)y!==null&&(y=y.next={lane:0,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),a=k.hasEagerState?k.eagerState:t(a,k.action);else{var O={lane:A,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null};y===null?(_=y=O,m=a):y=y.next=O,Re.lanes|=A,pr|=A}k=k.next}while(k!==null&&k!==h);y===null?m=a:y.next=_,bt(a,i.memoizedState)||(ct=!0),i.memoizedState=a,i.baseState=m,i.baseQueue=y,o.lastRenderedState=a}if(t=o.interleaved,t!==null){c=t;do h=c.lane,Re.lanes|=h,pr|=h,c=c.next;while(c!==t)}else c===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function pu(t){var i=Pt(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=o.dispatch,c=o.pending,h=i.memoizedState;if(c!==null){o.pending=null;var m=c=c.next;do h=t(h,m.action),m=m.next;while(m!==c);bt(h,i.memoizedState)||(ct=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,a]}function Nf(){}function Pf(t,i){var o=Re,a=Pt(),c=i(),h=!bt(a.memoizedState,c);if(h&&(a.memoizedState=c,ct=!0),a=a.queue,mu(xf.bind(null,o,a,t),[t]),a.getSnapshot!==i||h||je!==null&&je.memoizedState.tag&1){if(o.flags|=2048,ss(9,Of.bind(null,o,a,c,i),void 0,null),We===null)throw Error(n(349));fr&30||Af(o,i,c)}return c}function Af(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Re.updateQueue,i===null?(i={lastEffect:null,stores:null},Re.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Of(t,i,o,a){i.value=o,i.getSnapshot=a,Df(i)&&Lf(t)}function xf(t,i,o){return o(function(){Df(i)&&Lf(t)})}function Df(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!bt(t,o)}catch{return!0}}function Lf(t){var i=dn(t,1);i!==null&&Wt(i,t,1,-1)}function Mf(t){var i=Zt();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:t},i.queue=t,t=t.dispatch=yw.bind(null,Re,t),[i.memoizedState,t]}function ss(t,i,o,a){return t={tag:t,create:i,destroy:o,deps:a,next:null},i=Re.updateQueue,i===null?(i={lastEffect:null,stores:null},Re.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(a=o.next,o.next=t,t.next=a,i.lastEffect=t)),t}function bf(){return Pt().memoizedState}function Oo(t,i,o,a){var c=Zt();Re.flags|=t,c.memoizedState=ss(1|i,o,void 0,a===void 0?null:a)}function xo(t,i,o,a){var c=Pt();a=a===void 0?null:a;var h=void 0;if(Fe!==null){var m=Fe.memoizedState;if(h=m.destroy,a!==null&&cu(a,m.deps)){c.memoizedState=ss(i,o,h,a);return}}Re.flags|=t,c.memoizedState=ss(1|i,o,h,a)}function Ff(t,i){return Oo(8390656,8,t,i)}function mu(t,i){return xo(2048,8,t,i)}function Uf(t,i){return xo(4,2,t,i)}function zf(t,i){return xo(4,4,t,i)}function jf(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Wf(t,i,o){return o=o!=null?o.concat([t]):null,xo(4,4,jf.bind(null,i,t),o)}function gu(){}function Bf(t,i){var o=Pt();i=i===void 0?null:i;var a=o.memoizedState;return a!==null&&i!==null&&cu(i,a[1])?a[0]:(o.memoizedState=[t,i],t)}function Vf(t,i){var o=Pt();i=i===void 0?null:i;var a=o.memoizedState;return a!==null&&i!==null&&cu(i,a[1])?a[0]:(t=t(),o.memoizedState=[t,i],t)}function $f(t,i,o){return fr&21?(bt(o,i)||(o=yh(),Re.lanes|=o,pr|=o,t.baseState=!0),i):(t.baseState&&(t.baseState=!1,ct=!0),t.memoizedState=o)}function _w(t,i){var o=he;he=o!==0&&4>o?o:4,t(!0);var a=uu.transition;uu.transition={};try{t(!1),i()}finally{he=o,uu.transition=a}}function Hf(){return Pt().memoizedState}function vw(t,i,o){var a=Wn(t);if(o={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null},Gf(t))qf(i,o);else if(o=If(t,i,o,a),o!==null){var c=it();Wt(o,t,a,c),Kf(o,i,a)}}function yw(t,i,o){var a=Wn(t),c={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null};if(Gf(t))qf(i,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var m=i.lastRenderedState,_=h(m,o);if(c.hasEagerState=!0,c.eagerState=_,bt(_,m)){var y=i.interleaved;y===null?(c.next=c,ru(i)):(c.next=y.next,y.next=c),i.interleaved=c;return}}catch{}finally{}o=If(t,i,c,a),o!==null&&(c=it(),Wt(o,t,a,c),Kf(o,i,a))}}function Gf(t){var i=t.alternate;return t===Re||i!==null&&i===Re}function qf(t,i){ns=Ao=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function Kf(t,i,o){if(o&4194240){var a=i.lanes;a&=t.pendingLanes,o|=a,i.lanes=o,va(t,o)}}var Do={readContext:Nt,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useInsertionEffect:Ze,useLayoutEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useMutableSource:Ze,useSyncExternalStore:Ze,useId:Ze,unstable_isNewReconciler:!1},ww={readContext:Nt,useCallback:function(t,i){return Zt().memoizedState=[t,i===void 0?null:i],t},useContext:Nt,useEffect:Ff,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Oo(4194308,4,jf.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Oo(4194308,4,t,i)},useInsertionEffect:function(t,i){return Oo(4,2,t,i)},useMemo:function(t,i){var o=Zt();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var a=Zt();return i=o!==void 0?o(i):i,a.memoizedState=a.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},a.queue=t,t=t.dispatch=vw.bind(null,Re,t),[a.memoizedState,t]},useRef:function(t){var i=Zt();return t={current:t},i.memoizedState=t},useState:Mf,useDebugValue:gu,useDeferredValue:function(t){return Zt().memoizedState=t},useTransition:function(){var t=Mf(!1),i=t[0];return t=_w.bind(null,t[1]),Zt().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var a=Re,c=Zt();if(Ie){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),We===null)throw Error(n(349));fr&30||Af(a,i,o)}c.memoizedState=o;var h={value:o,getSnapshot:i};return c.queue=h,Ff(xf.bind(null,a,h,t),[t]),a.flags|=2048,ss(9,Of.bind(null,a,h,o,i),void 0,null),o},useId:function(){var t=Zt(),i=We.identifierPrefix;if(Ie){var o=cn,a=un;o=(a&~(1<<32-Mt(a)-1)).toString(32)+o,i=":"+i+"R"+o,o=rs++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=gw++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},Ew={readContext:Nt,useCallback:Bf,useContext:Nt,useEffect:mu,useImperativeHandle:Wf,useInsertionEffect:Uf,useLayoutEffect:zf,useMemo:Vf,useReducer:fu,useRef:bf,useState:function(){return fu(is)},useDebugValue:gu,useDeferredValue:function(t){var i=Pt();return $f(i,Fe.memoizedState,t)},useTransition:function(){var t=fu(is)[0],i=Pt().memoizedState;return[t,i]},useMutableSource:Nf,useSyncExternalStore:Pf,useId:Hf,unstable_isNewReconciler:!1},Sw={readContext:Nt,useCallback:Bf,useContext:Nt,useEffect:mu,useImperativeHandle:Wf,useInsertionEffect:Uf,useLayoutEffect:zf,useMemo:Vf,useReducer:pu,useRef:bf,useState:function(){return pu(is)},useDebugValue:gu,useDeferredValue:function(t){var i=Pt();return Fe===null?i.memoizedState=t:$f(i,Fe.memoizedState,t)},useTransition:function(){var t=pu(is)[0],i=Pt().memoizedState;return[t,i]},useMutableSource:Nf,useSyncExternalStore:Pf,useId:Hf,unstable_isNewReconciler:!1};function Ut(t,i){if(t&&t.defaultProps){i=z({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function _u(t,i,o,a){i=t.memoizedState,o=o(a,i),o=o==null?i:z({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Lo={isMounted:function(t){return(t=t._reactInternals)?or(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var a=it(),c=Wn(t),h=hn(a,c);h.payload=i,o!=null&&(h.callback=o),i=Fn(t,h,c),i!==null&&(Wt(i,t,c,a),ko(i,t,c))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var a=it(),c=Wn(t),h=hn(a,c);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=Fn(t,h,c),i!==null&&(Wt(i,t,c,a),ko(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=it(),a=Wn(t),c=hn(o,a);c.tag=2,i!=null&&(c.callback=i),i=Fn(t,c,a),i!==null&&(Wt(i,t,a,o),ko(i,t,a))}};function Qf(t,i,o,a,c,h,m){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,h,m):i.prototype&&i.prototype.isPureReactComponent?!Hi(o,a)||!Hi(c,h):!0}function Yf(t,i,o){var a=!1,c=Ln,h=i.contextType;return typeof h=="object"&&h!==null?h=Nt(h):(c=ut(i)?ar:Je.current,a=i.contextTypes,h=(a=a!=null)?Gr(t,c):Ln),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Lo,t.stateNode=i,i._reactInternals=t,a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),i}function Xf(t,i,o,a){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,a),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,a),i.state!==t&&Lo.enqueueReplaceState(i,i.state,null)}function vu(t,i,o,a){var c=t.stateNode;c.props=o,c.state=t.memoizedState,c.refs={},iu(t);var h=i.contextType;typeof h=="object"&&h!==null?c.context=Nt(h):(h=ut(i)?ar:Je.current,c.context=Gr(t,h)),c.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(_u(t,i,h,o),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&Lo.enqueueReplaceState(c,c.state,null),Ro(t,o,c,a),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function ei(t,i){try{var o="",a=i;do o+=le(a),a=a.return;while(a);var c=o}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:c,digest:null}}function yu(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function wu(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var Iw=typeof WeakMap=="function"?WeakMap:Map;function Jf(t,i,o){o=hn(-1,o),o.tag=3,o.payload={element:null};var a=i.value;return o.callback=function(){Wo||(Wo=!0,Mu=a),wu(t,i)},o}function Zf(t,i,o){o=hn(-1,o),o.tag=3;var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var c=i.value;o.payload=function(){return a(c)},o.callback=function(){wu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){wu(t,i),typeof a!="function"&&(zn===null?zn=new Set([this]):zn.add(this));var m=i.stack;this.componentDidCatch(i.value,{componentStack:m!==null?m:""})}),o}function ep(t,i,o){var a=t.pingCache;if(a===null){a=t.pingCache=new Iw;var c=new Set;a.set(i,c)}else c=a.get(i),c===void 0&&(c=new Set,a.set(i,c));c.has(o)||(c.add(o),t=Fw.bind(null,t,i,o),i.then(t,t))}function tp(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function np(t,i,o,a,c){return t.mode&1?(t.flags|=65536,t.lanes=c,t):(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=hn(-1,1),i.tag=2,Fn(o,i,1))),o.lanes|=1),t)}var Cw=V.ReactCurrentOwner,ct=!1;function rt(t,i,o,a){i.child=t===null?Sf(i,null,o,a):Yr(i,t.child,o,a)}function rp(t,i,o,a,c){o=o.render;var h=i.ref;return Jr(i,c),a=du(t,i,o,a,h,c),o=hu(),t!==null&&!ct?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,fn(t,i,c)):(Ie&&o&&Ka(i),i.flags|=1,rt(t,i,a,c),i.child)}function ip(t,i,o,a,c){if(t===null){var h=o.type;return typeof h=="function"&&!Bu(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,sp(t,i,h,a,c)):(t=qo(o.type,null,a,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,!(t.lanes&c)){var m=h.memoizedProps;if(o=o.compare,o=o!==null?o:Hi,o(m,a)&&t.ref===i.ref)return fn(t,i,c)}return i.flags|=1,t=Vn(h,a),t.ref=i.ref,t.return=i,i.child=t}function sp(t,i,o,a,c){if(t!==null){var h=t.memoizedProps;if(Hi(h,a)&&t.ref===i.ref)if(ct=!1,i.pendingProps=a=h,(t.lanes&c)!==0)t.flags&131072&&(ct=!0);else return i.lanes=t.lanes,fn(t,i,c)}return Eu(t,i,o,a,c)}function op(t,i,o){var a=i.pendingProps,c=a.children,h=t!==null?t.memoizedState:null;if(a.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(ni,It),It|=o;else{if(!(o&1073741824))return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,ge(ni,It),It|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=h!==null?h.baseLanes:o,ge(ni,It),It|=a}else h!==null?(a=h.baseLanes|o,i.memoizedState=null):a=o,ge(ni,It),It|=a;return rt(t,i,c,o),i.child}function lp(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Eu(t,i,o,a,c){var h=ut(o)?ar:Je.current;return h=Gr(i,h),Jr(i,c),o=du(t,i,o,a,h,c),a=hu(),t!==null&&!ct?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,fn(t,i,c)):(Ie&&a&&Ka(i),i.flags|=1,rt(t,i,o,c),i.child)}function ap(t,i,o,a,c){if(ut(o)){var h=!0;vo(i)}else h=!1;if(Jr(i,c),i.stateNode===null)bo(t,i),Yf(i,o,a),vu(i,o,a,c),a=!0;else if(t===null){var m=i.stateNode,_=i.memoizedProps;m.props=_;var y=m.context,k=o.contextType;typeof k=="object"&&k!==null?k=Nt(k):(k=ut(o)?ar:Je.current,k=Gr(i,k));var A=o.getDerivedStateFromProps,O=typeof A=="function"||typeof m.getSnapshotBeforeUpdate=="function";O||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(_!==a||y!==k)&&Xf(i,m,a,k),bn=!1;var N=i.memoizedState;m.state=N,Ro(i,a,m,c),y=i.memoizedState,_!==a||N!==y||at.current||bn?(typeof A=="function"&&(_u(i,o,A,a),y=i.memoizedState),(_=bn||Qf(i,o,_,a,N,y,k))?(O||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=a,i.memoizedState=y),m.props=a,m.state=y,m.context=k,a=_):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),a=!1)}else{m=i.stateNode,Cf(t,i),_=i.memoizedProps,k=i.type===i.elementType?_:Ut(i.type,_),m.props=k,O=i.pendingProps,N=m.context,y=o.contextType,typeof y=="object"&&y!==null?y=Nt(y):(y=ut(o)?ar:Je.current,y=Gr(i,y));var F=o.getDerivedStateFromProps;(A=typeof F=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(_!==O||N!==y)&&Xf(i,m,a,y),bn=!1,N=i.memoizedState,m.state=N,Ro(i,a,m,c);var j=i.memoizedState;_!==O||N!==j||at.current||bn?(typeof F=="function"&&(_u(i,o,F,a),j=i.memoizedState),(k=bn||Qf(i,o,k,a,N,j,y)||!1)?(A||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(a,j,y),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(a,j,y)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||_===t.memoizedProps&&N===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&N===t.memoizedState||(i.flags|=1024),i.memoizedProps=a,i.memoizedState=j),m.props=a,m.state=j,m.context=y,a=k):(typeof m.componentDidUpdate!="function"||_===t.memoizedProps&&N===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&N===t.memoizedState||(i.flags|=1024),a=!1)}return Su(t,i,o,a,h,c)}function Su(t,i,o,a,c,h){lp(t,i);var m=(i.flags&128)!==0;if(!a&&!m)return c&&ff(i,o,!1),fn(t,i,h);a=i.stateNode,Cw.current=i;var _=m&&typeof o.getDerivedStateFromError!="function"?null:a.render();return i.flags|=1,t!==null&&m?(i.child=Yr(i,t.child,null,h),i.child=Yr(i,null,_,h)):rt(t,i,_,h),i.memoizedState=a.state,c&&ff(i,o,!0),i.child}function up(t){var i=t.stateNode;i.pendingContext?df(t,i.pendingContext,i.pendingContext!==i.context):i.context&&df(t,i.context,!1),su(t,i.containerInfo)}function cp(t,i,o,a,c){return Qr(),Ja(c),i.flags|=256,rt(t,i,o,a),i.child}var Iu={dehydrated:null,treeContext:null,retryLane:0};function Cu(t){return{baseLanes:t,cachePool:null,transitions:null}}function dp(t,i,o){var a=i.pendingProps,c=ke.current,h=!1,m=(i.flags&128)!==0,_;if((_=m)||(_=t!==null&&t.memoizedState===null?!1:(c&2)!==0),_?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),ge(ke,c&1),t===null)return Xa(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(i.mode&1?t.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(m=a.children,t=a.fallback,h?(a=i.mode,h=i.child,m={mode:"hidden",children:m},!(a&1)&&h!==null?(h.childLanes=0,h.pendingProps=m):h=Ko(m,a,0,null),t=vr(t,a,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Cu(o),i.memoizedState=Iu,t):Tu(i,m));if(c=t.memoizedState,c!==null&&(_=c.dehydrated,_!==null))return Tw(t,i,m,a,_,c,o);if(h){h=a.fallback,m=i.mode,c=t.child,_=c.sibling;var y={mode:"hidden",children:a.children};return!(m&1)&&i.child!==c?(a=i.child,a.childLanes=0,a.pendingProps=y,i.deletions=null):(a=Vn(c,y),a.subtreeFlags=c.subtreeFlags&14680064),_!==null?h=Vn(_,h):(h=vr(h,m,o,null),h.flags|=2),h.return=i,a.return=i,a.sibling=h,i.child=a,a=h,h=i.child,m=t.child.memoizedState,m=m===null?Cu(o):{baseLanes:m.baseLanes|o,cachePool:null,transitions:m.transitions},h.memoizedState=m,h.childLanes=t.childLanes&~o,i.memoizedState=Iu,a}return h=t.child,t=h.sibling,a=Vn(h,{mode:"visible",children:a.children}),!(i.mode&1)&&(a.lanes=o),a.return=i,a.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=a,i.memoizedState=null,a}function Tu(t,i){return i=Ko({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Mo(t,i,o,a){return a!==null&&Ja(a),Yr(i,t.child,null,o),t=Tu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Tw(t,i,o,a,c,h,m){if(o)return i.flags&256?(i.flags&=-257,a=yu(Error(n(422))),Mo(t,i,m,a)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=a.fallback,c=i.mode,a=Ko({mode:"visible",children:a.children},c,0,null),h=vr(h,c,m,null),h.flags|=2,a.return=i,h.return=i,a.sibling=h,i.child=a,i.mode&1&&Yr(i,t.child,null,m),i.child.memoizedState=Cu(m),i.memoizedState=Iu,h);if(!(i.mode&1))return Mo(t,i,m,null);if(c.data==="$!"){if(a=c.nextSibling&&c.nextSibling.dataset,a)var _=a.dgst;return a=_,h=Error(n(419)),a=yu(h,a,void 0),Mo(t,i,m,a)}if(_=(m&t.childLanes)!==0,ct||_){if(a=We,a!==null){switch(m&-m){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=c&(a.suspendedLanes|m)?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,dn(t,c),Wt(a,t,c,-1))}return Wu(),a=yu(Error(n(421))),Mo(t,i,m,a)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=Uw.bind(null,t),c._reactRetry=i,null):(t=h.treeContext,St=xn(c.nextSibling),Et=i,Ie=!0,Ft=null,t!==null&&(kt[Rt++]=un,kt[Rt++]=cn,kt[Rt++]=ur,un=t.id,cn=t.overflow,ur=i),i=Tu(i,a.children),i.flags|=4096,i)}function hp(t,i,o){t.lanes|=i;var a=t.alternate;a!==null&&(a.lanes|=i),nu(t.return,i,o)}function ku(t,i,o,a,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:a,tail:o,tailMode:c}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=a,h.tail=o,h.tailMode=c)}function fp(t,i,o){var a=i.pendingProps,c=a.revealOrder,h=a.tail;if(rt(t,i,a.children,o),a=ke.current,a&2)a=a&1|2,i.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&hp(t,o,i);else if(t.tag===19)hp(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}if(ge(ke,a),!(i.mode&1))i.memoizedState=null;else switch(c){case"forwards":for(o=i.child,c=null;o!==null;)t=o.alternate,t!==null&&No(t)===null&&(c=o),o=o.sibling;o=c,o===null?(c=i.child,i.child=null):(c=o.sibling,o.sibling=null),ku(i,!1,c,o,h);break;case"backwards":for(o=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&No(t)===null){i.child=c;break}t=c.sibling,c.sibling=o,o=c,c=t}ku(i,!0,o,null,h);break;case"together":ku(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function bo(t,i){!(i.mode&1)&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function fn(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),pr|=i.lanes,!(o&i.childLanes))return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=Vn(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=Vn(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function kw(t,i,o){switch(i.tag){case 3:up(i),Qr();break;case 5:Rf(i);break;case 1:ut(i.type)&&vo(i);break;case 4:su(i,i.stateNode.containerInfo);break;case 10:var a=i.type._context,c=i.memoizedProps.value;ge(Co,a._currentValue),a._currentValue=c;break;case 13:if(a=i.memoizedState,a!==null)return a.dehydrated!==null?(ge(ke,ke.current&1),i.flags|=128,null):o&i.child.childLanes?dp(t,i,o):(ge(ke,ke.current&1),t=fn(t,i,o),t!==null?t.sibling:null);ge(ke,ke.current&1);break;case 19:if(a=(o&i.childLanes)!==0,t.flags&128){if(a)return fp(t,i,o);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),ge(ke,ke.current),a)break;return null;case 22:case 23:return i.lanes=0,op(t,i,o)}return fn(t,i,o)}var pp,Ru,mp,gp;pp=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Ru=function(){},mp=function(t,i,o,a){var c=t.memoizedProps;if(c!==a){t=i.stateNode,hr(Jt.current);var h=null;switch(o){case"input":c=na(t,c),a=na(t,a),h=[];break;case"select":c=z({},c,{value:void 0}),a=z({},a,{value:void 0}),h=[];break;case"textarea":c=sa(t,c),a=sa(t,a),h=[];break;default:typeof c.onClick!="function"&&typeof a.onClick=="function"&&(t.onclick=mo)}la(o,a);var m;o=null;for(k in c)if(!a.hasOwnProperty(k)&&c.hasOwnProperty(k)&&c[k]!=null)if(k==="style"){var _=c[k];for(m in _)_.hasOwnProperty(m)&&(o||(o={}),o[m]="")}else k!=="dangerouslySetInnerHTML"&&k!=="children"&&k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&k!=="autoFocus"&&(l.hasOwnProperty(k)?h||(h=[]):(h=h||[]).push(k,null));for(k in a){var y=a[k];if(_=c!=null?c[k]:void 0,a.hasOwnProperty(k)&&y!==_&&(y!=null||_!=null))if(k==="style")if(_){for(m in _)!_.hasOwnProperty(m)||y&&y.hasOwnProperty(m)||(o||(o={}),o[m]="");for(m in y)y.hasOwnProperty(m)&&_[m]!==y[m]&&(o||(o={}),o[m]=y[m])}else o||(h||(h=[]),h.push(k,o)),o=y;else k==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,_=_?_.__html:void 0,y!=null&&_!==y&&(h=h||[]).push(k,y)):k==="children"?typeof y!="string"&&typeof y!="number"||(h=h||[]).push(k,""+y):k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&(l.hasOwnProperty(k)?(y!=null&&k==="onScroll"&&we("scroll",t),h||_===y||(h=[])):(h=h||[]).push(k,y))}o&&(h=h||[]).push("style",o);var k=h;(i.updateQueue=k)&&(i.flags|=4)}},gp=function(t,i,o,a){o!==a&&(i.flags|=4)};function os(t,i){if(!Ie)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function et(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,a=0;if(i)for(var c=t.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags&14680064,a|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags,a|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=a,t.childLanes=o,i}function Rw(t,i,o){var a=i.pendingProps;switch(Qa(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(i),null;case 1:return ut(i.type)&&_o(),et(i),null;case 3:return a=i.stateNode,Zr(),Ee(at),Ee(Je),au(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(So(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,Ft!==null&&(Uu(Ft),Ft=null))),Ru(t,i),et(i),null;case 5:ou(i);var c=hr(ts.current);if(o=i.type,t!==null&&i.stateNode!=null)mp(t,i,o,a,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!a){if(i.stateNode===null)throw Error(n(166));return et(i),null}if(t=hr(Jt.current),So(i)){a=i.stateNode,o=i.type;var h=i.memoizedProps;switch(a[Xt]=i,a[Yi]=h,t=(i.mode&1)!==0,o){case"dialog":we("cancel",a),we("close",a);break;case"iframe":case"object":case"embed":we("load",a);break;case"video":case"audio":for(c=0;c<qi.length;c++)we(qi[c],a);break;case"source":we("error",a);break;case"img":case"image":case"link":we("error",a),we("load",a);break;case"details":we("toggle",a);break;case"input":Qd(a,h),we("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!h.multiple},we("invalid",a);break;case"textarea":Jd(a,h),we("invalid",a)}la(o,h),c=null;for(var m in h)if(h.hasOwnProperty(m)){var _=h[m];m==="children"?typeof _=="string"?a.textContent!==_&&(h.suppressHydrationWarning!==!0&&po(a.textContent,_,t),c=["children",_]):typeof _=="number"&&a.textContent!==""+_&&(h.suppressHydrationWarning!==!0&&po(a.textContent,_,t),c=["children",""+_]):l.hasOwnProperty(m)&&_!=null&&m==="onScroll"&&we("scroll",a)}switch(o){case"input":$s(a),Xd(a,h,!0);break;case"textarea":$s(a),eh(a);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(a.onclick=mo)}a=c,i.updateQueue=a,a!==null&&(i.flags|=4)}else{m=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=th(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=m.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof a.is=="string"?t=m.createElement(o,{is:a.is}):(t=m.createElement(o),o==="select"&&(m=t,a.multiple?m.multiple=!0:a.size&&(m.size=a.size))):t=m.createElementNS(t,o),t[Xt]=i,t[Yi]=a,pp(t,i,!1,!1),i.stateNode=t;e:{switch(m=aa(o,a),o){case"dialog":we("cancel",t),we("close",t),c=a;break;case"iframe":case"object":case"embed":we("load",t),c=a;break;case"video":case"audio":for(c=0;c<qi.length;c++)we(qi[c],t);c=a;break;case"source":we("error",t),c=a;break;case"img":case"image":case"link":we("error",t),we("load",t),c=a;break;case"details":we("toggle",t),c=a;break;case"input":Qd(t,a),c=na(t,a),we("invalid",t);break;case"option":c=a;break;case"select":t._wrapperState={wasMultiple:!!a.multiple},c=z({},a,{value:void 0}),we("invalid",t);break;case"textarea":Jd(t,a),c=sa(t,a),we("invalid",t);break;default:c=a}la(o,c),_=c;for(h in _)if(_.hasOwnProperty(h)){var y=_[h];h==="style"?ih(t,y):h==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,y!=null&&nh(t,y)):h==="children"?typeof y=="string"?(o!=="textarea"||y!=="")&&Ni(t,y):typeof y=="number"&&Ni(t,""+y):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(l.hasOwnProperty(h)?y!=null&&h==="onScroll"&&we("scroll",t):y!=null&&De(t,h,y,m))}switch(o){case"input":$s(t),Xd(t,a,!1);break;case"textarea":$s(t),eh(t);break;case"option":a.value!=null&&t.setAttribute("value",""+de(a.value));break;case"select":t.multiple=!!a.multiple,h=a.value,h!=null?Lr(t,!!a.multiple,h,!1):a.defaultValue!=null&&Lr(t,!!a.multiple,a.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=mo)}switch(o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return et(i),null;case 6:if(t&&i.stateNode!=null)gp(t,i,t.memoizedProps,a);else{if(typeof a!="string"&&i.stateNode===null)throw Error(n(166));if(o=hr(ts.current),hr(Jt.current),So(i)){if(a=i.stateNode,o=i.memoizedProps,a[Xt]=i,(h=a.nodeValue!==o)&&(t=Et,t!==null))switch(t.tag){case 3:po(a.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&po(a.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else a=(o.nodeType===9?o:o.ownerDocument).createTextNode(a),a[Xt]=i,i.stateNode=a}return et(i),null;case 13:if(Ee(ke),a=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ie&&St!==null&&i.mode&1&&!(i.flags&128))yf(),Qr(),i.flags|=98560,h=!1;else if(h=So(i),a!==null&&a.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[Xt]=i}else Qr(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;et(i),h=!1}else Ft!==null&&(Uu(Ft),Ft=null),h=!0;if(!h)return i.flags&65536?i:null}return i.flags&128?(i.lanes=o,i):(a=a!==null,a!==(t!==null&&t.memoizedState!==null)&&a&&(i.child.flags|=8192,i.mode&1&&(t===null||ke.current&1?Ue===0&&(Ue=3):Wu())),i.updateQueue!==null&&(i.flags|=4),et(i),null);case 4:return Zr(),Ru(t,i),t===null&&Ki(i.stateNode.containerInfo),et(i),null;case 10:return tu(i.type._context),et(i),null;case 17:return ut(i.type)&&_o(),et(i),null;case 19:if(Ee(ke),h=i.memoizedState,h===null)return et(i),null;if(a=(i.flags&128)!==0,m=h.rendering,m===null)if(a)os(h,!1);else{if(Ue!==0||t!==null&&t.flags&128)for(t=i.child;t!==null;){if(m=No(t),m!==null){for(i.flags|=128,os(h,!1),a=m.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),i.subtreeFlags=0,a=o,o=i.child;o!==null;)h=o,t=a,h.flags&=14680066,m=h.alternate,m===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=m.childLanes,h.lanes=m.lanes,h.child=m.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=m.memoizedProps,h.memoizedState=m.memoizedState,h.updateQueue=m.updateQueue,h.type=m.type,t=m.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return ge(ke,ke.current&1|2),i.child}t=t.sibling}h.tail!==null&&Le()>ri&&(i.flags|=128,a=!0,os(h,!1),i.lanes=4194304)}else{if(!a)if(t=No(m),t!==null){if(i.flags|=128,a=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),os(h,!0),h.tail===null&&h.tailMode==="hidden"&&!m.alternate&&!Ie)return et(i),null}else 2*Le()-h.renderingStartTime>ri&&o!==1073741824&&(i.flags|=128,a=!0,os(h,!1),i.lanes=4194304);h.isBackwards?(m.sibling=i.child,i.child=m):(o=h.last,o!==null?o.sibling=m:i.child=m,h.last=m)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Le(),i.sibling=null,o=ke.current,ge(ke,a?o&1|2:o&1),i):(et(i),null);case 22:case 23:return ju(),a=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==a&&(i.flags|=8192),a&&i.mode&1?It&1073741824&&(et(i),i.subtreeFlags&6&&(i.flags|=8192)):et(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function Nw(t,i){switch(Qa(i),i.tag){case 1:return ut(i.type)&&_o(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Zr(),Ee(at),Ee(Je),au(),t=i.flags,t&65536&&!(t&128)?(i.flags=t&-65537|128,i):null;case 5:return ou(i),null;case 13:if(Ee(ke),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Qr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ee(ke),null;case 4:return Zr(),null;case 10:return tu(i.type._context),null;case 22:case 23:return ju(),null;case 24:return null;default:return null}}var Fo=!1,tt=!1,Pw=typeof WeakSet=="function"?WeakSet:Set,U=null;function ti(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(a){Pe(t,i,a)}else o.current=null}function Nu(t,i,o){try{o()}catch(a){Pe(t,i,a)}}var _p=!1;function Aw(t,i){if(ja=no,t=Kh(),xa(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var a=o.getSelection&&o.getSelection();if(a&&a.rangeCount!==0){o=a.anchorNode;var c=a.anchorOffset,h=a.focusNode;a=a.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var m=0,_=-1,y=-1,k=0,A=0,O=t,N=null;t:for(;;){for(var F;O!==o||c!==0&&O.nodeType!==3||(_=m+c),O!==h||a!==0&&O.nodeType!==3||(y=m+a),O.nodeType===3&&(m+=O.nodeValue.length),(F=O.firstChild)!==null;)N=O,O=F;for(;;){if(O===t)break t;if(N===o&&++k===c&&(_=m),N===h&&++A===a&&(y=m),(F=O.nextSibling)!==null)break;O=N,N=O.parentNode}O=F}o=_===-1||y===-1?null:{start:_,end:y}}else o=null}o=o||{start:0,end:0}}else o=null;for(Wa={focusedElem:t,selectionRange:o},no=!1,U=i;U!==null;)if(i=U,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,U=t;else for(;U!==null;){i=U;try{var j=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(j!==null){var W=j.memoizedProps,Me=j.memoizedState,C=i.stateNode,E=C.getSnapshotBeforeUpdate(i.elementType===i.type?W:Ut(i.type,W),Me);C.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var T=i.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(D){Pe(i,i.return,D)}if(t=i.sibling,t!==null){t.return=i.return,U=t;break}U=i.return}return j=_p,_p=!1,j}function ls(t,i,o){var a=i.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var c=a=a.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&Nu(i,o,h)}c=c.next}while(c!==a)}}function Uo(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var a=o.create;o.destroy=a()}o=o.next}while(o!==i)}}function Pu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function vp(t){var i=t.alternate;i!==null&&(t.alternate=null,vp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Xt],delete i[Yi],delete i[Ha],delete i[hw],delete i[fw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function yp(t){return t.tag===5||t.tag===3||t.tag===4}function wp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||yp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Au(t,i,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=mo));else if(a!==4&&(t=t.child,t!==null))for(Au(t,i,o),t=t.sibling;t!==null;)Au(t,i,o),t=t.sibling}function Ou(t,i,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(a!==4&&(t=t.child,t!==null))for(Ou(t,i,o),t=t.sibling;t!==null;)Ou(t,i,o),t=t.sibling}var Ke=null,zt=!1;function Un(t,i,o){for(o=o.child;o!==null;)Ep(t,i,o),o=o.sibling}function Ep(t,i,o){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(Ys,o)}catch{}switch(o.tag){case 5:tt||ti(o,i);case 6:var a=Ke,c=zt;Ke=null,Un(t,i,o),Ke=a,zt=c,Ke!==null&&(zt?(t=Ke,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):Ke.removeChild(o.stateNode));break;case 18:Ke!==null&&(zt?(t=Ke,o=o.stateNode,t.nodeType===8?$a(t.parentNode,o):t.nodeType===1&&$a(t,o),zi(t)):$a(Ke,o.stateNode));break;case 4:a=Ke,c=zt,Ke=o.stateNode.containerInfo,zt=!0,Un(t,i,o),Ke=a,zt=c;break;case 0:case 11:case 14:case 15:if(!tt&&(a=o.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){c=a=a.next;do{var h=c,m=h.destroy;h=h.tag,m!==void 0&&(h&2||h&4)&&Nu(o,i,m),c=c.next}while(c!==a)}Un(t,i,o);break;case 1:if(!tt&&(ti(o,i),a=o.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=o.memoizedProps,a.state=o.memoizedState,a.componentWillUnmount()}catch(_){Pe(o,i,_)}Un(t,i,o);break;case 21:Un(t,i,o);break;case 22:o.mode&1?(tt=(a=tt)||o.memoizedState!==null,Un(t,i,o),tt=a):Un(t,i,o);break;default:Un(t,i,o)}}function Sp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new Pw),i.forEach(function(a){var c=zw.bind(null,t,a);o.has(a)||(o.add(a),a.then(c,c))})}}function jt(t,i){var o=i.deletions;if(o!==null)for(var a=0;a<o.length;a++){var c=o[a];try{var h=t,m=i,_=m;e:for(;_!==null;){switch(_.tag){case 5:Ke=_.stateNode,zt=!1;break e;case 3:Ke=_.stateNode.containerInfo,zt=!0;break e;case 4:Ke=_.stateNode.containerInfo,zt=!0;break e}_=_.return}if(Ke===null)throw Error(n(160));Ep(h,m,c),Ke=null,zt=!1;var y=c.alternate;y!==null&&(y.return=null),c.return=null}catch(k){Pe(c,i,k)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Ip(i,t),i=i.sibling}function Ip(t,i){var o=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(jt(i,t),en(t),a&4){try{ls(3,t,t.return),Uo(3,t)}catch(W){Pe(t,t.return,W)}try{ls(5,t,t.return)}catch(W){Pe(t,t.return,W)}}break;case 1:jt(i,t),en(t),a&512&&o!==null&&ti(o,o.return);break;case 5:if(jt(i,t),en(t),a&512&&o!==null&&ti(o,o.return),t.flags&32){var c=t.stateNode;try{Ni(c,"")}catch(W){Pe(t,t.return,W)}}if(a&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,m=o!==null?o.memoizedProps:h,_=t.type,y=t.updateQueue;if(t.updateQueue=null,y!==null)try{_==="input"&&h.type==="radio"&&h.name!=null&&Yd(c,h),aa(_,m);var k=aa(_,h);for(m=0;m<y.length;m+=2){var A=y[m],O=y[m+1];A==="style"?ih(c,O):A==="dangerouslySetInnerHTML"?nh(c,O):A==="children"?Ni(c,O):De(c,A,O,k)}switch(_){case"input":ra(c,h);break;case"textarea":Zd(c,h);break;case"select":var N=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var F=h.value;F!=null?Lr(c,!!h.multiple,F,!1):N!==!!h.multiple&&(h.defaultValue!=null?Lr(c,!!h.multiple,h.defaultValue,!0):Lr(c,!!h.multiple,h.multiple?[]:"",!1))}c[Yi]=h}catch(W){Pe(t,t.return,W)}}break;case 6:if(jt(i,t),en(t),a&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(W){Pe(t,t.return,W)}}break;case 3:if(jt(i,t),en(t),a&4&&o!==null&&o.memoizedState.isDehydrated)try{zi(i.containerInfo)}catch(W){Pe(t,t.return,W)}break;case 4:jt(i,t),en(t);break;case 13:jt(i,t),en(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(Lu=Le())),a&4&&Sp(t);break;case 22:if(A=o!==null&&o.memoizedState!==null,t.mode&1?(tt=(k=tt)||A,jt(i,t),tt=k):jt(i,t),en(t),a&8192){if(k=t.memoizedState!==null,(t.stateNode.isHidden=k)&&!A&&t.mode&1)for(U=t,A=t.child;A!==null;){for(O=U=A;U!==null;){switch(N=U,F=N.child,N.tag){case 0:case 11:case 14:case 15:ls(4,N,N.return);break;case 1:ti(N,N.return);var j=N.stateNode;if(typeof j.componentWillUnmount=="function"){a=N,o=N.return;try{i=a,j.props=i.memoizedProps,j.state=i.memoizedState,j.componentWillUnmount()}catch(W){Pe(a,o,W)}}break;case 5:ti(N,N.return);break;case 22:if(N.memoizedState!==null){kp(O);continue}}F!==null?(F.return=N,U=F):kp(O)}A=A.sibling}e:for(A=null,O=t;;){if(O.tag===5){if(A===null){A=O;try{c=O.stateNode,k?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(_=O.stateNode,y=O.memoizedProps.style,m=y!=null&&y.hasOwnProperty("display")?y.display:null,_.style.display=rh("display",m))}catch(W){Pe(t,t.return,W)}}}else if(O.tag===6){if(A===null)try{O.stateNode.nodeValue=k?"":O.memoizedProps}catch(W){Pe(t,t.return,W)}}else if((O.tag!==22&&O.tag!==23||O.memoizedState===null||O===t)&&O.child!==null){O.child.return=O,O=O.child;continue}if(O===t)break e;for(;O.sibling===null;){if(O.return===null||O.return===t)break e;A===O&&(A=null),O=O.return}A===O&&(A=null),O.sibling.return=O.return,O=O.sibling}}break;case 19:jt(i,t),en(t),a&4&&Sp(t);break;case 21:break;default:jt(i,t),en(t)}}function en(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(yp(o)){var a=o;break e}o=o.return}throw Error(n(160))}switch(a.tag){case 5:var c=a.stateNode;a.flags&32&&(Ni(c,""),a.flags&=-33);var h=wp(t);Ou(t,h,c);break;case 3:case 4:var m=a.stateNode.containerInfo,_=wp(t);Au(t,_,m);break;default:throw Error(n(161))}}catch(y){Pe(t,t.return,y)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Ow(t,i,o){U=t,Cp(t)}function Cp(t,i,o){for(var a=(t.mode&1)!==0;U!==null;){var c=U,h=c.child;if(c.tag===22&&a){var m=c.memoizedState!==null||Fo;if(!m){var _=c.alternate,y=_!==null&&_.memoizedState!==null||tt;_=Fo;var k=tt;if(Fo=m,(tt=y)&&!k)for(U=c;U!==null;)m=U,y=m.child,m.tag===22&&m.memoizedState!==null?Rp(c):y!==null?(y.return=m,U=y):Rp(c);for(;h!==null;)U=h,Cp(h),h=h.sibling;U=c,Fo=_,tt=k}Tp(t)}else c.subtreeFlags&8772&&h!==null?(h.return=c,U=h):Tp(t)}}function Tp(t){for(;U!==null;){var i=U;if(i.flags&8772){var o=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:tt||Uo(5,i);break;case 1:var a=i.stateNode;if(i.flags&4&&!tt)if(o===null)a.componentDidMount();else{var c=i.elementType===i.type?o.memoizedProps:Ut(i.type,o.memoizedProps);a.componentDidUpdate(c,o.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&kf(i,h,a);break;case 3:var m=i.updateQueue;if(m!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}kf(i,m,o)}break;case 5:var _=i.stateNode;if(o===null&&i.flags&4){o=_;var y=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":y.autoFocus&&o.focus();break;case"img":y.src&&(o.src=y.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var k=i.alternate;if(k!==null){var A=k.memoizedState;if(A!==null){var O=A.dehydrated;O!==null&&zi(O)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}tt||i.flags&512&&Pu(i)}catch(N){Pe(i,i.return,N)}}if(i===t){U=null;break}if(o=i.sibling,o!==null){o.return=i.return,U=o;break}U=i.return}}function kp(t){for(;U!==null;){var i=U;if(i===t){U=null;break}var o=i.sibling;if(o!==null){o.return=i.return,U=o;break}U=i.return}}function Rp(t){for(;U!==null;){var i=U;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Uo(4,i)}catch(y){Pe(i,o,y)}break;case 1:var a=i.stateNode;if(typeof a.componentDidMount=="function"){var c=i.return;try{a.componentDidMount()}catch(y){Pe(i,c,y)}}var h=i.return;try{Pu(i)}catch(y){Pe(i,h,y)}break;case 5:var m=i.return;try{Pu(i)}catch(y){Pe(i,m,y)}}}catch(y){Pe(i,i.return,y)}if(i===t){U=null;break}var _=i.sibling;if(_!==null){_.return=i.return,U=_;break}U=i.return}}var xw=Math.ceil,zo=V.ReactCurrentDispatcher,xu=V.ReactCurrentOwner,At=V.ReactCurrentBatchConfig,oe=0,We=null,be=null,Qe=0,It=0,ni=Dn(0),Ue=0,as=null,pr=0,jo=0,Du=0,us=null,dt=null,Lu=0,ri=1/0,pn=null,Wo=!1,Mu=null,zn=null,Bo=!1,jn=null,Vo=0,cs=0,bu=null,$o=-1,Ho=0;function it(){return oe&6?Le():$o!==-1?$o:$o=Le()}function Wn(t){return t.mode&1?oe&2&&Qe!==0?Qe&-Qe:mw.transition!==null?(Ho===0&&(Ho=yh()),Ho):(t=he,t!==0||(t=window.event,t=t===void 0?16:Nh(t.type)),t):1}function Wt(t,i,o,a){if(50<cs)throw cs=0,bu=null,Error(n(185));Li(t,o,a),(!(oe&2)||t!==We)&&(t===We&&(!(oe&2)&&(jo|=o),Ue===4&&Bn(t,Qe)),ht(t,a),o===1&&oe===0&&!(i.mode&1)&&(ri=Le()+500,yo&&Mn()))}function ht(t,i){var o=t.callbackNode;my(t,i);var a=Zs(t,t===We?Qe:0);if(a===0)o!==null&&gh(o),t.callbackNode=null,t.callbackPriority=0;else if(i=a&-a,t.callbackPriority!==i){if(o!=null&&gh(o),i===1)t.tag===0?pw(Pp.bind(null,t)):pf(Pp.bind(null,t)),cw(function(){!(oe&6)&&Mn()}),o=null;else{switch(wh(a)){case 1:o=ma;break;case 4:o=_h;break;case 16:o=Qs;break;case 536870912:o=vh;break;default:o=Qs}o=Fp(o,Np.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function Np(t,i){if($o=-1,Ho=0,oe&6)throw Error(n(327));var o=t.callbackNode;if(ii()&&t.callbackNode!==o)return null;var a=Zs(t,t===We?Qe:0);if(a===0)return null;if(a&30||a&t.expiredLanes||i)i=Go(t,a);else{i=a;var c=oe;oe|=2;var h=Op();(We!==t||Qe!==i)&&(pn=null,ri=Le()+500,gr(t,i));do try{Mw();break}catch(_){Ap(t,_)}while(!0);eu(),zo.current=h,oe=c,be!==null?i=0:(We=null,Qe=0,i=Ue)}if(i!==0){if(i===2&&(c=ga(t),c!==0&&(a=c,i=Fu(t,c))),i===1)throw o=as,gr(t,0),Bn(t,a),ht(t,Le()),o;if(i===6)Bn(t,a);else{if(c=t.current.alternate,!(a&30)&&!Dw(c)&&(i=Go(t,a),i===2&&(h=ga(t),h!==0&&(a=h,i=Fu(t,h))),i===1))throw o=as,gr(t,0),Bn(t,a),ht(t,Le()),o;switch(t.finishedWork=c,t.finishedLanes=a,i){case 0:case 1:throw Error(n(345));case 2:_r(t,dt,pn);break;case 3:if(Bn(t,a),(a&130023424)===a&&(i=Lu+500-Le(),10<i)){if(Zs(t,0)!==0)break;if(c=t.suspendedLanes,(c&a)!==a){it(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=Va(_r.bind(null,t,dt,pn),i);break}_r(t,dt,pn);break;case 4:if(Bn(t,a),(a&4194240)===a)break;for(i=t.eventTimes,c=-1;0<a;){var m=31-Mt(a);h=1<<m,m=i[m],m>c&&(c=m),a&=~h}if(a=c,a=Le()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*xw(a/1960))-a,10<a){t.timeoutHandle=Va(_r.bind(null,t,dt,pn),a);break}_r(t,dt,pn);break;case 5:_r(t,dt,pn);break;default:throw Error(n(329))}}}return ht(t,Le()),t.callbackNode===o?Np.bind(null,t):null}function Fu(t,i){var o=us;return t.current.memoizedState.isDehydrated&&(gr(t,i).flags|=256),t=Go(t,i),t!==2&&(i=dt,dt=o,i!==null&&Uu(i)),t}function Uu(t){dt===null?dt=t:dt.push.apply(dt,t)}function Dw(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var a=0;a<o.length;a++){var c=o[a],h=c.getSnapshot;c=c.value;try{if(!bt(h(),c))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Bn(t,i){for(i&=~Du,i&=~jo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-Mt(i),a=1<<o;t[o]=-1,i&=~a}}function Pp(t){if(oe&6)throw Error(n(327));ii();var i=Zs(t,0);if(!(i&1))return ht(t,Le()),null;var o=Go(t,i);if(t.tag!==0&&o===2){var a=ga(t);a!==0&&(i=a,o=Fu(t,a))}if(o===1)throw o=as,gr(t,0),Bn(t,i),ht(t,Le()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,_r(t,dt,pn),ht(t,Le()),null}function zu(t,i){var o=oe;oe|=1;try{return t(i)}finally{oe=o,oe===0&&(ri=Le()+500,yo&&Mn())}}function mr(t){jn!==null&&jn.tag===0&&!(oe&6)&&ii();var i=oe;oe|=1;var o=At.transition,a=he;try{if(At.transition=null,he=1,t)return t()}finally{he=a,At.transition=o,oe=i,!(oe&6)&&Mn()}}function ju(){It=ni.current,Ee(ni)}function gr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,uw(o)),be!==null)for(o=be.return;o!==null;){var a=o;switch(Qa(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&_o();break;case 3:Zr(),Ee(at),Ee(Je),au();break;case 5:ou(a);break;case 4:Zr();break;case 13:Ee(ke);break;case 19:Ee(ke);break;case 10:tu(a.type._context);break;case 22:case 23:ju()}o=o.return}if(We=t,be=t=Vn(t.current,null),Qe=It=i,Ue=0,as=null,Du=jo=pr=0,dt=us=null,dr!==null){for(i=0;i<dr.length;i++)if(o=dr[i],a=o.interleaved,a!==null){o.interleaved=null;var c=a.next,h=o.pending;if(h!==null){var m=h.next;h.next=c,a.next=m}o.pending=a}dr=null}return t}function Ap(t,i){do{var o=be;try{if(eu(),Po.current=Do,Ao){for(var a=Re.memoizedState;a!==null;){var c=a.queue;c!==null&&(c.pending=null),a=a.next}Ao=!1}if(fr=0,je=Fe=Re=null,ns=!1,rs=0,xu.current=null,o===null||o.return===null){Ue=1,as=i,be=null;break}e:{var h=t,m=o.return,_=o,y=i;if(i=Qe,_.flags|=32768,y!==null&&typeof y=="object"&&typeof y.then=="function"){var k=y,A=_,O=A.tag;if(!(A.mode&1)&&(O===0||O===11||O===15)){var N=A.alternate;N?(A.updateQueue=N.updateQueue,A.memoizedState=N.memoizedState,A.lanes=N.lanes):(A.updateQueue=null,A.memoizedState=null)}var F=tp(m);if(F!==null){F.flags&=-257,np(F,m,_,h,i),F.mode&1&&ep(h,k,i),i=F,y=k;var j=i.updateQueue;if(j===null){var W=new Set;W.add(y),i.updateQueue=W}else j.add(y);break e}else{if(!(i&1)){ep(h,k,i),Wu();break e}y=Error(n(426))}}else if(Ie&&_.mode&1){var Me=tp(m);if(Me!==null){!(Me.flags&65536)&&(Me.flags|=256),np(Me,m,_,h,i),Ja(ei(y,_));break e}}h=y=ei(y,_),Ue!==4&&(Ue=2),us===null?us=[h]:us.push(h),h=m;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var C=Jf(h,y,i);Tf(h,C);break e;case 1:_=y;var E=h.type,T=h.stateNode;if(!(h.flags&128)&&(typeof E.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(zn===null||!zn.has(T)))){h.flags|=65536,i&=-i,h.lanes|=i;var D=Zf(h,_,i);Tf(h,D);break e}}h=h.return}while(h!==null)}Dp(o)}catch(B){i=B,be===o&&o!==null&&(be=o=o.return);continue}break}while(!0)}function Op(){var t=zo.current;return zo.current=Do,t===null?Do:t}function Wu(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),We===null||!(pr&268435455)&&!(jo&268435455)||Bn(We,Qe)}function Go(t,i){var o=oe;oe|=2;var a=Op();(We!==t||Qe!==i)&&(pn=null,gr(t,i));do try{Lw();break}catch(c){Ap(t,c)}while(!0);if(eu(),oe=o,zo.current=a,be!==null)throw Error(n(261));return We=null,Qe=0,Ue}function Lw(){for(;be!==null;)xp(be)}function Mw(){for(;be!==null&&!oy();)xp(be)}function xp(t){var i=bp(t.alternate,t,It);t.memoizedProps=t.pendingProps,i===null?Dp(t):be=i,xu.current=null}function Dp(t){var i=t;do{var o=i.alternate;if(t=i.return,i.flags&32768){if(o=Nw(o,i),o!==null){o.flags&=32767,be=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ue=6,be=null;return}}else if(o=Rw(o,i,It),o!==null){be=o;return}if(i=i.sibling,i!==null){be=i;return}be=i=t}while(i!==null);Ue===0&&(Ue=5)}function _r(t,i,o){var a=he,c=At.transition;try{At.transition=null,he=1,bw(t,i,o,a)}finally{At.transition=c,he=a}return null}function bw(t,i,o,a){do ii();while(jn!==null);if(oe&6)throw Error(n(327));o=t.finishedWork;var c=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(gy(t,h),t===We&&(be=We=null,Qe=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||Bo||(Bo=!0,Fp(Qs,function(){return ii(),null})),h=(o.flags&15990)!==0,o.subtreeFlags&15990||h){h=At.transition,At.transition=null;var m=he;he=1;var _=oe;oe|=4,xu.current=null,Aw(t,o),Ip(o,t),nw(Wa),no=!!ja,Wa=ja=null,t.current=o,Ow(o),ly(),oe=_,he=m,At.transition=h}else t.current=o;if(Bo&&(Bo=!1,jn=t,Vo=c),h=t.pendingLanes,h===0&&(zn=null),cy(o.stateNode),ht(t,Le()),i!==null)for(a=t.onRecoverableError,o=0;o<i.length;o++)c=i[o],a(c.value,{componentStack:c.stack,digest:c.digest});if(Wo)throw Wo=!1,t=Mu,Mu=null,t;return Vo&1&&t.tag!==0&&ii(),h=t.pendingLanes,h&1?t===bu?cs++:(cs=0,bu=t):cs=0,Mn(),null}function ii(){if(jn!==null){var t=wh(Vo),i=At.transition,o=he;try{if(At.transition=null,he=16>t?16:t,jn===null)var a=!1;else{if(t=jn,jn=null,Vo=0,oe&6)throw Error(n(331));var c=oe;for(oe|=4,U=t.current;U!==null;){var h=U,m=h.child;if(U.flags&16){var _=h.deletions;if(_!==null){for(var y=0;y<_.length;y++){var k=_[y];for(U=k;U!==null;){var A=U;switch(A.tag){case 0:case 11:case 15:ls(8,A,h)}var O=A.child;if(O!==null)O.return=A,U=O;else for(;U!==null;){A=U;var N=A.sibling,F=A.return;if(vp(A),A===k){U=null;break}if(N!==null){N.return=F,U=N;break}U=F}}}var j=h.alternate;if(j!==null){var W=j.child;if(W!==null){j.child=null;do{var Me=W.sibling;W.sibling=null,W=Me}while(W!==null)}}U=h}}if(h.subtreeFlags&2064&&m!==null)m.return=h,U=m;else e:for(;U!==null;){if(h=U,h.flags&2048)switch(h.tag){case 0:case 11:case 15:ls(9,h,h.return)}var C=h.sibling;if(C!==null){C.return=h.return,U=C;break e}U=h.return}}var E=t.current;for(U=E;U!==null;){m=U;var T=m.child;if(m.subtreeFlags&2064&&T!==null)T.return=m,U=T;else e:for(m=E;U!==null;){if(_=U,_.flags&2048)try{switch(_.tag){case 0:case 11:case 15:Uo(9,_)}}catch(B){Pe(_,_.return,B)}if(_===m){U=null;break e}var D=_.sibling;if(D!==null){D.return=_.return,U=D;break e}U=_.return}}if(oe=c,Mn(),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(Ys,t)}catch{}a=!0}return a}finally{he=o,At.transition=i}}return!1}function Lp(t,i,o){i=ei(o,i),i=Jf(t,i,1),t=Fn(t,i,1),i=it(),t!==null&&(Li(t,1,i),ht(t,i))}function Pe(t,i,o){if(t.tag===3)Lp(t,t,o);else for(;i!==null;){if(i.tag===3){Lp(i,t,o);break}else if(i.tag===1){var a=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(zn===null||!zn.has(a))){t=ei(o,t),t=Zf(i,t,1),i=Fn(i,t,1),t=it(),i!==null&&(Li(i,1,t),ht(i,t));break}}i=i.return}}function Fw(t,i,o){var a=t.pingCache;a!==null&&a.delete(i),i=it(),t.pingedLanes|=t.suspendedLanes&o,We===t&&(Qe&o)===o&&(Ue===4||Ue===3&&(Qe&130023424)===Qe&&500>Le()-Lu?gr(t,0):Du|=o),ht(t,i)}function Mp(t,i){i===0&&(t.mode&1?(i=Js,Js<<=1,!(Js&130023424)&&(Js=4194304)):i=1);var o=it();t=dn(t,i),t!==null&&(Li(t,i,o),ht(t,o))}function Uw(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Mp(t,o)}function zw(t,i){var o=0;switch(t.tag){case 13:var a=t.stateNode,c=t.memoizedState;c!==null&&(o=c.retryLane);break;case 19:a=t.stateNode;break;default:throw Error(n(314))}a!==null&&a.delete(i),Mp(t,o)}var bp;bp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||at.current)ct=!0;else{if(!(t.lanes&o)&&!(i.flags&128))return ct=!1,kw(t,i,o);ct=!!(t.flags&131072)}else ct=!1,Ie&&i.flags&1048576&&mf(i,Eo,i.index);switch(i.lanes=0,i.tag){case 2:var a=i.type;bo(t,i),t=i.pendingProps;var c=Gr(i,Je.current);Jr(i,o),c=du(null,i,a,t,c,o);var h=hu();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,ut(a)?(h=!0,vo(i)):h=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,iu(i),c.updater=Lo,i.stateNode=c,c._reactInternals=i,vu(i,a,t,o),i=Su(null,i,a,!0,h,o)):(i.tag=0,Ie&&h&&Ka(i),rt(null,i,c,o),i=i.child),i;case 16:a=i.elementType;e:{switch(bo(t,i),t=i.pendingProps,c=a._init,a=c(a._payload),i.type=a,c=i.tag=Ww(a),t=Ut(a,t),c){case 0:i=Eu(null,i,a,t,o);break e;case 1:i=ap(null,i,a,t,o);break e;case 11:i=rp(null,i,a,t,o);break e;case 14:i=ip(null,i,a,Ut(a.type,t),o);break e}throw Error(n(306,a,""))}return i;case 0:return a=i.type,c=i.pendingProps,c=i.elementType===a?c:Ut(a,c),Eu(t,i,a,c,o);case 1:return a=i.type,c=i.pendingProps,c=i.elementType===a?c:Ut(a,c),ap(t,i,a,c,o);case 3:e:{if(up(i),t===null)throw Error(n(387));a=i.pendingProps,h=i.memoizedState,c=h.element,Cf(t,i),Ro(i,a,null,o);var m=i.memoizedState;if(a=m.element,h.isDehydrated)if(h={element:a,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){c=ei(Error(n(423)),i),i=cp(t,i,a,o,c);break e}else if(a!==c){c=ei(Error(n(424)),i),i=cp(t,i,a,o,c);break e}else for(St=xn(i.stateNode.containerInfo.firstChild),Et=i,Ie=!0,Ft=null,o=Sf(i,null,a,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Qr(),a===c){i=fn(t,i,o);break e}rt(t,i,a,o)}i=i.child}return i;case 5:return Rf(i),t===null&&Xa(i),a=i.type,c=i.pendingProps,h=t!==null?t.memoizedProps:null,m=c.children,Ba(a,c)?m=null:h!==null&&Ba(a,h)&&(i.flags|=32),lp(t,i),rt(t,i,m,o),i.child;case 6:return t===null&&Xa(i),null;case 13:return dp(t,i,o);case 4:return su(i,i.stateNode.containerInfo),a=i.pendingProps,t===null?i.child=Yr(i,null,a,o):rt(t,i,a,o),i.child;case 11:return a=i.type,c=i.pendingProps,c=i.elementType===a?c:Ut(a,c),rp(t,i,a,c,o);case 7:return rt(t,i,i.pendingProps,o),i.child;case 8:return rt(t,i,i.pendingProps.children,o),i.child;case 12:return rt(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(a=i.type._context,c=i.pendingProps,h=i.memoizedProps,m=c.value,ge(Co,a._currentValue),a._currentValue=m,h!==null)if(bt(h.value,m)){if(h.children===c.children&&!at.current){i=fn(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var _=h.dependencies;if(_!==null){m=h.child;for(var y=_.firstContext;y!==null;){if(y.context===a){if(h.tag===1){y=hn(-1,o&-o),y.tag=2;var k=h.updateQueue;if(k!==null){k=k.shared;var A=k.pending;A===null?y.next=y:(y.next=A.next,A.next=y),k.pending=y}}h.lanes|=o,y=h.alternate,y!==null&&(y.lanes|=o),nu(h.return,o,i),_.lanes|=o;break}y=y.next}}else if(h.tag===10)m=h.type===i.type?null:h.child;else if(h.tag===18){if(m=h.return,m===null)throw Error(n(341));m.lanes|=o,_=m.alternate,_!==null&&(_.lanes|=o),nu(m,o,i),m=h.sibling}else m=h.child;if(m!==null)m.return=h;else for(m=h;m!==null;){if(m===i){m=null;break}if(h=m.sibling,h!==null){h.return=m.return,m=h;break}m=m.return}h=m}rt(t,i,c.children,o),i=i.child}return i;case 9:return c=i.type,a=i.pendingProps.children,Jr(i,o),c=Nt(c),a=a(c),i.flags|=1,rt(t,i,a,o),i.child;case 14:return a=i.type,c=Ut(a,i.pendingProps),c=Ut(a.type,c),ip(t,i,a,c,o);case 15:return sp(t,i,i.type,i.pendingProps,o);case 17:return a=i.type,c=i.pendingProps,c=i.elementType===a?c:Ut(a,c),bo(t,i),i.tag=1,ut(a)?(t=!0,vo(i)):t=!1,Jr(i,o),Yf(i,a,c),vu(i,a,c,o),Su(null,i,a,!0,t,o);case 19:return fp(t,i,o);case 22:return op(t,i,o)}throw Error(n(156,i.tag))};function Fp(t,i){return mh(t,i)}function jw(t,i,o,a){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(t,i,o,a){return new jw(t,i,o,a)}function Bu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ww(t){if(typeof t=="function")return Bu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Kt)return 11;if(t===Qt)return 14}return 2}function Vn(t,i){var o=t.alternate;return o===null?(o=Ot(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function qo(t,i,o,a,c,h){var m=2;if(a=t,typeof t=="function")Bu(t)&&(m=1);else if(typeof t=="string")m=5;else e:switch(t){case Te:return vr(o.children,c,h,i);case ze:m=8,c|=8;break;case nt:return t=Ot(12,o,i,c|2),t.elementType=nt,t.lanes=h,t;case vt:return t=Ot(13,o,i,c),t.elementType=vt,t.lanes=h,t;case Lt:return t=Ot(19,o,i,c),t.elementType=Lt,t.lanes=h,t;case Ne:return Ko(o,c,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _t:m=10;break e;case sr:m=9;break e;case Kt:m=11;break e;case Qt:m=14;break e;case lt:m=16,a=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Ot(m,o,i,c),i.elementType=t,i.type=a,i.lanes=h,i}function vr(t,i,o,a){return t=Ot(7,t,a,i),t.lanes=o,t}function Ko(t,i,o,a){return t=Ot(22,t,a,i),t.elementType=Ne,t.lanes=o,t.stateNode={isHidden:!1},t}function Vu(t,i,o){return t=Ot(6,t,null,i),t.lanes=o,t}function $u(t,i,o){return i=Ot(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Bw(t,i,o,a,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_a(0),this.expirationTimes=_a(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_a(0),this.identifierPrefix=a,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function Hu(t,i,o,a,c,h,m,_,y){return t=new Bw(t,i,o,_,y),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Ot(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:a,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},iu(h),t}function Vw(t,i,o){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:J,key:a==null?null:""+a,children:t,containerInfo:i,implementation:o}}function Up(t){if(!t)return Ln;t=t._reactInternals;e:{if(or(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(ut(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(ut(o))return hf(t,o,i)}return i}function zp(t,i,o,a,c,h,m,_,y){return t=Hu(o,a,!0,t,c,h,m,_,y),t.context=Up(null),o=t.current,a=it(),c=Wn(o),h=hn(a,c),h.callback=i??null,Fn(o,h,c),t.current.lanes=c,Li(t,c,a),ht(t,a),t}function Qo(t,i,o,a){var c=i.current,h=it(),m=Wn(c);return o=Up(o),i.context===null?i.context=o:i.pendingContext=o,i=hn(h,m),i.payload={element:t},a=a===void 0?null:a,a!==null&&(i.callback=a),t=Fn(c,i,m),t!==null&&(Wt(t,c,m,h),ko(t,c,m)),m}function Yo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function jp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function Gu(t,i){jp(t,i),(t=t.alternate)&&jp(t,i)}function $w(){return null}var Wp=typeof reportError=="function"?reportError:function(t){console.error(t)};function qu(t){this._internalRoot=t}Xo.prototype.render=qu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Qo(t,i,null,null)},Xo.prototype.unmount=qu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;mr(function(){Qo(null,t,null,null)}),i[ln]=null}};function Xo(t){this._internalRoot=t}Xo.prototype.unstable_scheduleHydration=function(t){if(t){var i=Ih();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Pn.length&&i!==0&&i<Pn[o].priority;o++);Pn.splice(o,0,t),o===0&&kh(t)}};function Ku(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Jo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Bp(){}function Hw(t,i,o,a,c){if(c){if(typeof a=="function"){var h=a;a=function(){var k=Yo(m);h.call(k)}}var m=zp(i,a,t,0,null,!1,!1,"",Bp);return t._reactRootContainer=m,t[ln]=m.current,Ki(t.nodeType===8?t.parentNode:t),mr(),m}for(;c=t.lastChild;)t.removeChild(c);if(typeof a=="function"){var _=a;a=function(){var k=Yo(y);_.call(k)}}var y=Hu(t,0,!1,null,null,!1,!1,"",Bp);return t._reactRootContainer=y,t[ln]=y.current,Ki(t.nodeType===8?t.parentNode:t),mr(function(){Qo(i,y,o,a)}),y}function Zo(t,i,o,a,c){var h=o._reactRootContainer;if(h){var m=h;if(typeof c=="function"){var _=c;c=function(){var y=Yo(m);_.call(y)}}Qo(i,m,t,c)}else m=Hw(o,i,t,c,a);return Yo(m)}Eh=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Di(i.pendingLanes);o!==0&&(va(i,o|1),ht(i,Le()),!(oe&6)&&(ri=Le()+500,Mn()))}break;case 13:mr(function(){var a=dn(t,1);if(a!==null){var c=it();Wt(a,t,1,c)}}),Gu(t,1)}},ya=function(t){if(t.tag===13){var i=dn(t,134217728);if(i!==null){var o=it();Wt(i,t,134217728,o)}Gu(t,134217728)}},Sh=function(t){if(t.tag===13){var i=Wn(t),o=dn(t,i);if(o!==null){var a=it();Wt(o,t,i,a)}Gu(t,i)}},Ih=function(){return he},Ch=function(t,i){var o=he;try{return he=t,i()}finally{he=o}},da=function(t,i,o){switch(i){case"input":if(ra(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var a=o[i];if(a!==t&&a.form===t.form){var c=go(a);if(!c)throw Error(n(90));Kd(a),ra(a,c)}}}break;case"textarea":Zd(t,o);break;case"select":i=o.value,i!=null&&Lr(t,!!o.multiple,i,!1)}},ah=zu,uh=mr;var Gw={usingClientEntryPoint:!1,Events:[Xi,$r,go,oh,lh,zu]},ds={findFiberByHostInstance:lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qw={bundleType:ds.bundleType,version:ds.version,rendererPackageName:ds.rendererPackageName,rendererConfig:ds.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:V.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=fh(t),t===null?null:t.stateNode},findFiberByHostInstance:ds.findFiberByHostInstance||$w,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var el=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!el.isDisabled&&el.supportsFiber)try{Ys=el.inject(qw),Yt=el}catch{}}return ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gw,ft.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ku(i))throw Error(n(200));return Vw(t,i,null,o)},ft.createRoot=function(t,i){if(!Ku(t))throw Error(n(299));var o=!1,a="",c=Wp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(a=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=Hu(t,1,!1,null,null,o,!1,a,c),t[ln]=i.current,Ki(t.nodeType===8?t.parentNode:t),new qu(i)},ft.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=fh(i),t=t===null?null:t.stateNode,t},ft.flushSync=function(t){return mr(t)},ft.hydrate=function(t,i,o){if(!Jo(i))throw Error(n(200));return Zo(null,t,i,!0,o)},ft.hydrateRoot=function(t,i,o){if(!Ku(t))throw Error(n(405));var a=o!=null&&o.hydratedSources||null,c=!1,h="",m=Wp;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(m=o.onRecoverableError)),i=zp(i,null,t,1,o??null,c,!1,h,m),t[ln]=i.current,Ki(t),a)for(t=0;t<a.length;t++)o=a[t],c=o._getVersion,c=c(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,c]:i.mutableSourceEagerHydrationData.push(o,c);return new Xo(i)},ft.render=function(t,i,o){if(!Jo(i))throw Error(n(200));return Zo(null,t,i,!1,o)},ft.unmountComponentAtNode=function(t){if(!Jo(t))throw Error(n(40));return t._reactRootContainer?(mr(function(){Zo(null,null,t,!1,function(){t._reactRootContainer=null,t[ln]=null})}),!0):!1},ft.unstable_batchedUpdates=zu,ft.unstable_renderSubtreeIntoContainer=function(t,i,o,a){if(!Jo(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Zo(t,i,o,!1,a)},ft.version="18.3.1-next-f1338f8080-20240426",ft}var Yp;function n0(){if(Yp)return Xu.exports;Yp=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Xu.exports=t0(),Xu.exports}var Xp;function r0(){if(Xp)return tl;Xp=1;var r=n0();return tl.createRoot=r.createRoot,tl.hydrateRoot=r.hydrateRoot,tl}var i0=r0();const He={GRASS:"grass",WATER:"water",ROCK:"rock",EMPTY:"empty",FOOD:"food",NULL:"null",GAME:"game"},s0={[He.GRASS]:.4,[He.WATER]:.2,[He.EMPTY]:.1,[He.ROCK]:.15,[He.FOOD]:.15},wg=["moveU","moveR","moveD","moveL","dragon"],o0="_tile_6nc47_1",l0="_grass_6nc47_14",a0="_water_6nc47_22",u0="_rock_6nc47_29",c0="_empty_6nc47_36",d0="_food_6nc47_43",h0="_game_6nc47_50",Jp={tile:o0,grass:l0,water:a0,rock:u0,empty:c0,food:d0,game:h0};var ec={exports:{}},tc,Zp;function f0(){if(Zp)return tc;Zp=1;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return tc=r,tc}var nc,em;function p0(){if(em)return nc;em=1;var r=f0();function e(){}function n(){}return n.resetWarningCache=e,nc=function(){function s(d,f,p,g,w,v){if(v!==r){var S=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw S.name="Invariant Violation",S}}s.isRequired=s;function l(){return s}var u={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:l,element:s,elementType:s,instanceOf:l,node:s,objectOf:l,oneOf:l,oneOfType:l,shape:l,exact:l,checkPropTypes:n,resetWarningCache:e};return u.PropTypes=u,u},nc}var tm;function m0(){return tm||(tm=1,ec.exports=p0()()),ec.exports}var g0=m0();const Vt=Qw(g0);function qc(r){const{isActive:e=!1,type:n="empty"}=r,s={[He.GRASS]:"☘️",[He.WATER]:"",[He.ROCK]:"⛰️",[He.EMPTY]:"",[He.FOOD]:"🍎",[He.GAME]:"🌳"};return ie.jsx("div",{className:`${Jp.tile} ${Jp[n]}`,children:s[n]})}qc.propTypes={isActive:Vt.bool,type:Vt.string};const _0="_board_xv3fs_1",v0="_row_xv3fs_8",y0="_mycharacter_xv3fs_13",w0="_char_xv3fs_21",E0="_name_xv3fs_28",S0="_moveD_xv3fs_35",I0="_moveU_xv3fs_38",C0="_moveR_xv3fs_41",T0="_moveL_xv3fs_44",k0="_dragon_xv3fs_47",R0="_walkLeft_xv3fs_50",N0="_walkRight_xv3fs_53",mn={board:_0,row:v0,mycharacter:y0,char:w0,name:E0,moveD:S0,moveU:I0,moveR:C0,moveL:T0,dragon:k0,walkLeft:R0,walkRight:N0},P0=(r,e)=>{const n=r*e,s={};for(const[f,p]of Object.entries(s0))s[f]=Math.floor(p*n);let l=[];for(const[f,p]of Object.entries(s))l=l.concat(Array(p).fill(f));for(;l.length<n;)l.push(He.EMPTY);for(let f=l.length-1;f>0;f--){const p=Math.floor(Math.random()*(f+1));[l[f],l[p]]=[l[p],l[f]]}const u=[];let d=0;for(let f=0;f<r;f++){const p=[];for(let g=0;g<e;g++)p.push({isActive:!1,type:l[d++]});u.push(p)}return u};var nm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L=function(r,e){if(!r)throw wi(e)},wi=function(r){return new Error("Firebase Database ("+Eg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+r)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):(l&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},A0=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const l=r[n++];if(l<128)e[s++]=String.fromCharCode(l);else if(l>191&&l<224){const u=r[n++];e[s++]=String.fromCharCode((l&31)<<6|u&63)}else if(l>239&&l<365){const u=r[n++],d=r[n++],f=r[n++],p=((l&7)<<18|(u&63)<<12|(d&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const u=r[n++],d=r[n++];e[s++]=String.fromCharCode((l&15)<<12|(u&63)<<6|d&63)}}return e.join("")},Kc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<r.length;l+=3){const u=r[l],d=l+1<r.length,f=d?r[l+1]:0,p=l+2<r.length,g=p?r[l+2]:0,w=u>>2,v=(u&3)<<4|f>>4;let S=(f&15)<<2|g>>6,R=g&63;p||(R=64,d||(S=64)),s.push(n[w],n[v],n[S],n[R])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Sg(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):A0(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<r.length;){const u=n[r.charAt(l++)],f=l<r.length?n[r.charAt(l)]:0;++l;const g=l<r.length?n[r.charAt(l)]:64;++l;const v=l<r.length?n[r.charAt(l)]:64;if(++l,u==null||f==null||g==null||v==null)throw new O0;const S=u<<2|f>>4;if(s.push(S),g!==64){const R=f<<4&240|g>>2;if(s.push(R),v!==64){const M=g<<6&192|v;s.push(M)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class O0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ig=function(r){const e=Sg(r);return Kc.encodeByteArray(e,!0)},cl=function(r){return Ig(r).replace(/\./g,"")},dl=function(r){try{return Kc.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x0(r){return Cg(void 0,r)}function Cg(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!D0(n)||(r[n]=Cg(r[n],e[n]));return r}function D0(r){return r!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0=()=>L0().__FIREBASE_DEFAULTS__,b0=()=>{if(typeof process>"u"||typeof nm>"u")return;const r=nm.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},F0=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&dl(r[1]);return e&&JSON.parse(e)},Qc=()=>{try{return M0()||b0()||F0()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Tg=r=>{var e,n;return(n=(e=Qc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[r]},U0=r=>{const e=Tg(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},kg=()=>{var r;return(r=Qc())===null||r===void 0?void 0:r.config},Rg=r=>{var e;return(e=Qc())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z0(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",l=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},r);return[cl(JSON.stringify(n)),cl(JSON.stringify(d)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ot())}function j0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ng(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Pg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function W0(){const r=ot();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Ag(){return Eg.NODE_ADMIN===!0}function Og(){try{return typeof indexedDB=="object"}catch{return!1}}function xg(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},l.onupgradeneeded=()=>{n=!1},l.onerror=()=>{var u;e(((u=l.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){e(n)}})}function B0(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V0="FirebaseError";class sn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=V0,Object.setPrototypeOf(this,sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ar.prototype.create)}}class Ar{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},l=`${this.service}/${e}`,u=this.errors[e],d=u?$0(u,s):"Error",f=`${this.serviceName}: ${d} (${l}).`;return new sn(l,f,s)}}function $0(r,e){return r.replace(H0,(n,s)=>{const l=e[s];return l!=null?String(l):`<${s}?>`})}const H0=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(r){return JSON.parse(r)}function qe(r){return JSON.stringify(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg=function(r){let e={},n={},s={},l="";try{const u=r.split(".");e=ks(dl(u[0])||""),n=ks(dl(u[1])||""),l=u[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:l}},G0=function(r){const e=Dg(r),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},q0=function(r){const e=Dg(r).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function pi(r,e){if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}function wc(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function hl(r,e,n){const s={};for(const l in r)Object.prototype.hasOwnProperty.call(r,l)&&(s[l]=e.call(n,r[l],l,r));return s}function Rs(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const l of n){if(!s.includes(l))return!1;const u=r[l],d=e[l];if(rm(u)&&rm(d)){if(!Rs(u,d))return!1}else if(u!==d)return!1}for(const l of s)if(!n.includes(l))return!1;return!0}function rm(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(r){const e=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(l=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(l))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let v=0;v<16;v++)s[v]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let v=0;v<16;v++)s[v]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let v=16;v<80;v++){const S=s[v-3]^s[v-8]^s[v-14]^s[v-16];s[v]=(S<<1|S>>>31)&4294967295}let l=this.chain_[0],u=this.chain_[1],d=this.chain_[2],f=this.chain_[3],p=this.chain_[4],g,w;for(let v=0;v<80;v++){v<40?v<20?(g=f^u&(d^f),w=1518500249):(g=u^d^f,w=1859775393):v<60?(g=u&d|f&(u|d),w=2400959708):(g=u^d^f,w=3395469782);const S=(l<<5|l>>>27)+g+p+w+s[v]&4294967295;p=f,f=d,d=(u<<30|u>>>2)&4294967295,u=l,l=S}this.chain_[0]=this.chain_[0]+l&4294967295,this.chain_[1]=this.chain_[1]+u&4294967295,this.chain_[2]=this.chain_[2]+d&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let l=0;const u=this.buf_;let d=this.inbuf_;for(;l<n;){if(d===0)for(;l<=s;)this.compress_(e,l),l+=this.blockSize;if(typeof e=="string"){for(;l<n;)if(u[d]=e.charCodeAt(l),++d,++l,d===this.blockSize){this.compress_(u),d=0;break}}else for(;l<n;)if(u[d]=e[l],++d,++l,d===this.blockSize){this.compress_(u),d=0;break}}this.inbuf_=d,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let l=this.blockSize-1;l>=56;l--)this.buf_[l]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let l=0;l<5;l++)for(let u=24;u>=0;u-=8)e[s]=this.chain_[l]>>u&255,++s;return e}}function Q0(r,e){const n=new Y0(r,e);return n.subscribe.bind(n)}class Y0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let l;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");X0(e,["next","error","complete"])?l=e:l={next:e,error:n,complete:s},l.next===void 0&&(l.next=rc),l.error===void 0&&(l.error=rc),l.complete===void 0&&(l.complete=rc);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function X0(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function rc(){}function Ll(r,e){return`${r} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J0=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);if(l>=55296&&l<=56319){const u=l-55296;s++,L(s<r.length,"Surrogate pair missing trail surrogate.");const d=r.charCodeAt(s)-56320;l=65536+(u<<10)+d}l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):l<65536?(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},Ml=function(r){let e=0;for(let n=0;n<r.length;n++){const s=r.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0=1e3,eE=2,tE=4*60*60*1e3,nE=.5;function im(r,e=Z0,n=eE){const s=e*Math.pow(n,r),l=Math.round(nE*s*(Math.random()-.5)*2);return Math.min(tE,s+l)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(r){return r&&r._delegate?r._delegate:r}class Gt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new bs;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:n});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),l=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(l)return null;throw u}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sE(e))try{this.getOrInitializeService({instanceIdentifier:yr})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:l});s.resolve(u)}catch{}}}}clearInstance(e=yr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yr){return this.instances.has(e)}getOptions(e=yr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,d]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(u);s===f&&d.resolve(l)}return l}onInit(e,n){var s;const l=this.normalizeInstanceIdentifier(n),u=(s=this.onInitCallbacks.get(l))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(l,u);const d=this.instances.get(l);return d&&e(d,l),()=>{u.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const l of s)try{l(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:iE(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=yr){return this.component?this.component.multipleInstances?e:yr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function iE(r){return r===yr?void 0:r}function sE(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new rE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(fe||(fe={}));const lE={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},aE=fe.INFO,uE={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},cE=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),l=uE[e];if(l)console[l](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bl{constructor(e){this.name=e,this._logLevel=aE,this._logHandler=cE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const dE=(r,e)=>e.some(n=>r instanceof n);let sm,om;function hE(){return sm||(sm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fE(){return om||(om=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lg=new WeakMap,Ec=new WeakMap,Mg=new WeakMap,ic=new WeakMap,Xc=new WeakMap;function pE(r){const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("success",u),r.removeEventListener("error",d)},u=()=>{n(Xn(r.result)),l()},d=()=>{s(r.error),l()};r.addEventListener("success",u),r.addEventListener("error",d)});return e.then(n=>{n instanceof IDBCursor&&Lg.set(n,r)}).catch(()=>{}),Xc.set(e,r),e}function mE(r){if(Ec.has(r))return;const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",d),r.removeEventListener("abort",d)},u=()=>{n(),l()},d=()=>{s(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",u),r.addEventListener("error",d),r.addEventListener("abort",d)});Ec.set(r,e)}let Sc={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return Ec.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Mg.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xn(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function gE(r){Sc=r(Sc)}function _E(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(sc(this),e,...n);return Mg.set(s,e.sort?e.sort():[e]),Xn(s)}:fE().includes(r)?function(...e){return r.apply(sc(this),e),Xn(Lg.get(this))}:function(...e){return Xn(r.apply(sc(this),e))}}function vE(r){return typeof r=="function"?_E(r):(r instanceof IDBTransaction&&mE(r),dE(r,hE())?new Proxy(r,Sc):r)}function Xn(r){if(r instanceof IDBRequest)return pE(r);if(ic.has(r))return ic.get(r);const e=vE(r);return e!==r&&(ic.set(r,e),Xc.set(e,r)),e}const sc=r=>Xc.get(r);function bg(r,e,{blocked:n,upgrade:s,blocking:l,terminated:u}={}){const d=indexedDB.open(r,e),f=Xn(d);return s&&d.addEventListener("upgradeneeded",p=>{s(Xn(d.result),p.oldVersion,p.newVersion,Xn(d.transaction),p)}),n&&d.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),f.then(p=>{u&&p.addEventListener("close",()=>u()),l&&p.addEventListener("versionchange",g=>l(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const yE=["get","getKey","getAll","getAllKeys","count"],wE=["put","add","delete","clear"],oc=new Map;function lm(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(oc.get(e))return oc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,l=wE.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(l||yE.includes(n)))return;const u=async function(d,...f){const p=this.transaction(d,l?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(f.shift())),(await Promise.all([g[n](...f),l&&p.done]))[0]};return oc.set(e,u),u}gE(r=>({...r,get:(e,n,s)=>lm(e,n)||r.get(e,n,s),has:(e,n)=>!!lm(e,n)||r.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(SE(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function SE(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ic="@firebase/app",am="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn=new bl("@firebase/app"),IE="@firebase/app-compat",CE="@firebase/analytics-compat",TE="@firebase/analytics",kE="@firebase/app-check-compat",RE="@firebase/app-check",NE="@firebase/auth",PE="@firebase/auth-compat",AE="@firebase/database",OE="@firebase/data-connect",xE="@firebase/database-compat",DE="@firebase/functions",LE="@firebase/functions-compat",ME="@firebase/installations",bE="@firebase/installations-compat",FE="@firebase/messaging",UE="@firebase/messaging-compat",zE="@firebase/performance",jE="@firebase/performance-compat",WE="@firebase/remote-config",BE="@firebase/remote-config-compat",VE="@firebase/storage",$E="@firebase/storage-compat",HE="@firebase/firestore",GE="@firebase/vertexai",qE="@firebase/firestore-compat",KE="firebase",QE="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc="[DEFAULT]",YE={[Ic]:"fire-core",[IE]:"fire-core-compat",[TE]:"fire-analytics",[CE]:"fire-analytics-compat",[RE]:"fire-app-check",[kE]:"fire-app-check-compat",[NE]:"fire-auth",[PE]:"fire-auth-compat",[AE]:"fire-rtdb",[OE]:"fire-data-connect",[xE]:"fire-rtdb-compat",[DE]:"fire-fn",[LE]:"fire-fn-compat",[ME]:"fire-iid",[bE]:"fire-iid-compat",[FE]:"fire-fcm",[UE]:"fire-fcm-compat",[zE]:"fire-perf",[jE]:"fire-perf-compat",[WE]:"fire-rc",[BE]:"fire-rc-compat",[VE]:"fire-gcs",[$E]:"fire-gcs-compat",[HE]:"fire-fst",[qE]:"fire-fst-compat",[GE]:"fire-vertex","fire-js":"fire-js",[KE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl=new Map,XE=new Map,Tc=new Map;function um(r,e){try{r.container.addComponent(e)}catch(n){Sn.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function rn(r){const e=r.name;if(Tc.has(e))return Sn.debug(`There were multiple attempts to register component ${e}.`),!1;Tc.set(e,r);for(const n of fl.values())um(n,r);for(const n of XE.values())um(n,r);return!0}function Or(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function gn(r){return r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Jn=new Ar("app","Firebase",JE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Gt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si=QE;function Fg(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Cc,automaticDataCollectionEnabled:!1},e),l=s.name;if(typeof l!="string"||!l)throw Jn.create("bad-app-name",{appName:String(l)});if(n||(n=kg()),!n)throw Jn.create("no-options");const u=fl.get(l);if(u){if(Rs(n,u.options)&&Rs(s,u.config))return u;throw Jn.create("duplicate-app",{appName:l})}const d=new oE(l);for(const p of Tc.values())d.addComponent(p);const f=new ZE(n,s,d);return fl.set(l,f),f}function Jc(r=Cc){const e=fl.get(r);if(!e&&r===Cc&&kg())return Fg();if(!e)throw Jn.create("no-app",{appName:r});return e}function Dt(r,e,n){var s;let l=(s=YE[r])!==null&&s!==void 0?s:r;n&&(l+=`-${n}`);const u=l.match(/\s|\//),d=e.match(/\s|\//);if(u||d){const f=[`Unable to register library "${l}" with version "${e}":`];u&&f.push(`library name "${l}" contains illegal characters (whitespace or "/")`),u&&d&&f.push("and"),d&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Sn.warn(f.join(" "));return}rn(new Gt(`${l}-version`,()=>({library:l,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS="firebase-heartbeat-database",tS=1,Ns="firebase-heartbeat-store";let lc=null;function Ug(){return lc||(lc=bg(eS,tS,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Ns)}catch(n){console.warn(n)}}}}).catch(r=>{throw Jn.create("idb-open",{originalErrorMessage:r.message})})),lc}async function nS(r){try{const n=(await Ug()).transaction(Ns),s=await n.objectStore(Ns).get(zg(r));return await n.done,s}catch(e){if(e instanceof sn)Sn.warn(e.message);else{const n=Jn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Sn.warn(n.message)}}}async function cm(r,e){try{const s=(await Ug()).transaction(Ns,"readwrite");await s.objectStore(Ns).put(e,zg(r)),await s.done}catch(n){if(n instanceof sn)Sn.warn(n.message);else{const s=Jn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Sn.warn(s.message)}}}function zg(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS=1024,iS=30*24*60*60*1e3;class sS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new lS(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=dm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(d=>d.date===u)?void 0:(this._heartbeatsCache.heartbeats.push({date:u,agent:l}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(d=>{const f=new Date(d.date).valueOf();return Date.now()-f<=iS}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Sn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=dm(),{heartbeatsToSend:s,unsentEntries:l}=oS(this._heartbeatsCache.heartbeats),u=cl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return Sn.warn(n),""}}}function dm(){return new Date().toISOString().substring(0,10)}function oS(r,e=rS){const n=[];let s=r.slice();for(const l of r){const u=n.find(d=>d.agent===l.agent);if(u){if(u.dates.push(l.date),hm(n)>e){u.dates.pop();break}}else if(n.push({agent:l.agent,dates:[l.date]}),hm(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class lS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Og()?xg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await nS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return cm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return cm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...e.heartbeats]})}else return}}function hm(r){return cl(JSON.stringify({version:2,heartbeats:r})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aS(r){rn(new Gt("platform-logger",e=>new EE(e),"PRIVATE")),rn(new Gt("heartbeat",e=>new sS(e),"PRIVATE")),Dt(Ic,am,r),Dt(Ic,am,"esm2017"),Dt("fire-js","")}aS("");var fm={};const pm="@firebase/database",mm="1.0.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jg="";function uS(r){jg=r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),qe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ks(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return on(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg=function(r){try{if(typeof window<"u"&&typeof window[r]<"u"){const e=window[r];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new cS(e)}}catch{}return new dS},Er=Wg("localStorage"),hS=Wg("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai=new bl("@firebase/database"),fS=function(){let r=1;return function(){return r++}}(),Bg=function(r){const e=J0(r),n=new K0;n.update(e);const s=n.digest();return Kc.encodeByteArray(s)},Fs=function(...r){let e="";for(let n=0;n<r.length;n++){const s=r[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Fs.apply(null,s):typeof s=="object"?e+=qe(s):e+=s,e+=" "}return e};let ys=null,gm=!0;const pS=function(r,e){L(!e,"Can't turn on custom loggers persistently."),ai.logLevel=fe.VERBOSE,ys=ai.log.bind(ai)},Ye=function(...r){if(gm===!0&&(gm=!1,ys===null&&hS.get("logging_enabled")===!0&&pS()),ys){const e=Fs.apply(null,r);ys(e)}},Us=function(r){return function(...e){Ye(r,...e)}},kc=function(...r){const e="FIREBASE INTERNAL ERROR: "+Fs(...r);ai.error(e)},In=function(...r){const e=`FIREBASE FATAL ERROR: ${Fs(...r)}`;throw ai.error(e),new Error(e)},st=function(...r){const e="FIREBASE WARNING: "+Fs(...r);ai.warn(e)},mS=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&st("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Zc=function(r){return typeof r=="number"&&(r!==r||r===Number.POSITIVE_INFINITY||r===Number.NEGATIVE_INFINITY)},gS=function(r){if(document.readyState==="complete")r();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,r())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},mi="[MIN_NAME]",Ir="[MAX_NAME]",xr=function(r,e){if(r===e)return 0;if(r===mi||e===Ir)return-1;if(e===mi||r===Ir)return 1;{const n=_m(r),s=_m(e);return n!==null?s!==null?n-s===0?r.length-e.length:n-s:-1:s!==null?1:r<e?-1:1}},_S=function(r,e){return r===e?0:r<e?-1:1},fs=function(r,e){if(e&&r in e)return e[r];throw new Error("Missing required key ("+r+") in object: "+qe(e))},ed=function(r){if(typeof r!="object"||r===null)return qe(r);const e=[];for(const s in r)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=qe(e[s]),n+=":",n+=ed(r[e[s]]);return n+="}",n},Vg=function(r,e){const n=r.length;if(n<=e)return[r];const s=[];for(let l=0;l<n;l+=e)l+e>n?s.push(r.substring(l,n)):s.push(r.substring(l,l+e));return s};function Xe(r,e){for(const n in r)r.hasOwnProperty(n)&&e(n,r[n])}const $g=function(r){L(!Zc(r),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let l,u,d,f,p;r===0?(u=0,d=0,l=1/r===-1/0?1:0):(l=r<0,r=Math.abs(r),r>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(r)/Math.LN2),s),u=f+s,d=Math.round(r*Math.pow(2,n-f)-Math.pow(2,n))):(u=0,d=Math.round(r/Math.pow(2,1-s-n))));const g=[];for(p=n;p;p-=1)g.push(d%2?1:0),d=Math.floor(d/2);for(p=e;p;p-=1)g.push(u%2?1:0),u=Math.floor(u/2);g.push(l?1:0),g.reverse();const w=g.join("");let v="";for(p=0;p<64;p+=8){let S=parseInt(w.substr(p,8),2).toString(16);S.length===1&&(S="0"+S),v=v+S}return v.toLowerCase()},vS=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},yS=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function wS(r,e){let n="Unknown Error";r==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":r==="permission_denied"?n="Client doesn't have permission to access the desired data.":r==="unavailable"&&(n="The service is unavailable");const s=new Error(r+" at "+e._path.toString()+": "+n);return s.code=r.toUpperCase(),s}const ES=new RegExp("^-?(0*)\\d{1,10}$"),SS=-2147483648,IS=2147483647,_m=function(r){if(ES.test(r)){const e=Number(r);if(e>=SS&&e<=IS)return e}return null},Ii=function(r){try{r()}catch(e){setTimeout(()=>{const n=e.stack||"";throw st("Exception was thrown by user callback.",n),e},Math.floor(0))}},CS=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ws=function(r,e){const n=setTimeout(r,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){st(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(l=>this.auth_=l)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ye("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',st(e)}}class sl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}sl.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td="5",Hg="v",Gg="s",qg="r",Kg="f",Qg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Yg="ls",Xg="p",Rc="ac",Jg="websocket",Zg="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e,n,s,l,u=!1,d="",f=!1,p=!1){this.secure=n,this.namespace=s,this.webSocketOnly=l,this.nodeAdmin=u,this.persistenceKey=d,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=p,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Er.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Er.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function RS(r){return r.host!==r.internalHost||r.isCustomHost()||r.includeNamespaceInQueryParams}function t_(r,e,n){L(typeof e=="string","typeof type must == string"),L(typeof n=="object","typeof params must == object");let s;if(e===Jg)s=(r.secure?"wss://":"ws://")+r.internalHost+"/.ws?";else if(e===Zg)s=(r.secure?"https://":"http://")+r.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);RS(r)&&(n.ns=r.namespace);const l=[];return Xe(n,(u,d)=>{l.push(u+"="+d)}),s+l.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(){this.counters_={}}incrementCounter(e,n=1){on(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return x0(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac={},uc={};function nd(r){const e=r.toString();return ac[e]||(ac[e]=new NS),ac[e]}function PS(r,e){const n=r.toString();return uc[n]||(uc[n]=e()),uc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let l=0;l<s.length;++l)s[l]&&Ii(()=>{this.onMessage_(s[l])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm="start",OS="close",xS="pLPCommand",DS="pRTLPCB",n_="id",r_="pw",i_="ser",LS="cb",MS="seg",bS="ts",FS="d",US="dframe",s_=1870,o_=30,zS=s_-o_,jS=25e3,WS=3e4;class oi{constructor(e,n,s,l,u,d,f){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.transportSessionId=d,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Us(e),this.stats_=nd(n),this.urlFn=p=>(this.appCheckToken&&(p[Rc]=this.appCheckToken),t_(n,Zg,p))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new AS(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(WS)),gS(()=>{if(this.isClosed_)return;this.scriptTagHolder=new rd((...u)=>{const[d,f,p,g,w]=u;if(this.incrementIncomingBytes_(u),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,d===vm)this.id=f,this.password=p;else if(d===OS)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+d)},(...u)=>{const[d,f]=u;this.incrementIncomingBytes_(u),this.myPacketOrderer.handleResponse(d,f)},()=>{this.onClosed_()},this.urlFn);const s={};s[vm]="t",s[i_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[LS]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Hg]=td,this.transportSessionId&&(s[Gg]=this.transportSessionId),this.lastSessionId&&(s[Yg]=this.lastSessionId),this.applicationId&&(s[Xg]=this.applicationId),this.appCheckToken&&(s[Rc]=this.appCheckToken),typeof location<"u"&&location.hostname&&Qg.test(location.hostname)&&(s[qg]=Kg);const l=this.urlFn(s);this.log_("Connecting via long-poll to "+l),this.scriptTagHolder.addTag(l,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){oi.forceAllow_=!0}static forceDisallow(){oi.forceDisallow_=!0}static isAvailable(){return oi.forceAllow_?!0:!oi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!vS()&&!yS()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=qe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Ig(n),l=Vg(s,zS);for(let u=0;u<l.length;u++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,l.length,l[u]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[US]="t",s[n_]=e,s[r_]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=qe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class rd{constructor(e,n,s,l){this.onDisconnect=s,this.urlFn=l,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=fS(),window[xS+this.uniqueCallbackIdentifier]=e,window[DS+this.uniqueCallbackIdentifier]=n,this.myIFrame=rd.createIFrame_();let u="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(u='<script>document.domain="'+document.domain+'";<\/script>');const d="<html><body>"+u+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(d),this.myIFrame.doc.close()}catch(f){Ye("frame writing exception"),f.stack&&Ye(f.stack),Ye(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ye("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[n_]=this.myID,e[r_]=this.myPW,e[i_]=this.currentSerial;let n=this.urlFn(e),s="",l=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+o_+s.length<=s_;){const d=this.pendingSegs.shift();s=s+"&"+MS+l+"="+d.seg+"&"+bS+l+"="+d.ts+"&"+FS+l+"="+d.d,l++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},l=setTimeout(s,Math.floor(jS)),u=()=>{clearTimeout(l),s()};this.addTag(e,u)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const l=s.readyState;(!l||l==="loaded"||l==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ye("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS=16384,VS=45e3;let pl=null;typeof MozWebSocket<"u"?pl=MozWebSocket:typeof WebSocket<"u"&&(pl=WebSocket);class Bt{constructor(e,n,s,l,u,d,f){this.connId=e,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Us(this.connId),this.stats_=nd(n),this.connURL=Bt.connectionURL_(n,d,f,l,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,l,u){const d={};return d[Hg]=td,typeof location<"u"&&location.hostname&&Qg.test(location.hostname)&&(d[qg]=Kg),n&&(d[Gg]=n),s&&(d[Yg]=s),l&&(d[Rc]=l),u&&(d[Xg]=u),t_(e,Jg,d)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Er.set("previous_websocket_failure",!0);try{let s;Ag(),this.mySock=new pl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_()}}start(){}static forceDisallow(){Bt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&pl!==null&&!Bt.forceDisallow_}static previouslyFailed(){return Er.isInMemoryStorage||Er.get("previous_websocket_failure")===!0}markConnectionHealthy(){Er.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ks(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(L(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=qe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Vg(n,BS);s.length>1&&this.sendString_(String(s.length));for(let l=0;l<s.length;l++)this.sendString_(s[l])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(VS))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Bt.responsesRequiredToBeHealthy=2;Bt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{static get ALL_TRANSPORTS(){return[oi,Bt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Bt&&Bt.isAvailable();let s=n&&!Bt.previouslyFailed();if(e.webSocketOnly&&(n||st("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Bt];else{const l=this.transports_=[];for(const u of Ps.ALL_TRANSPORTS)u&&u.isAvailable()&&l.push(u);Ps.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ps.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S=6e4,HS=5e3,GS=10*1024,qS=100*1024,cc="t",ym="d",KS="s",wm="r",QS="e",Em="o",Sm="a",Im="n",Cm="p",YS="h";class XS{constructor(e,n,s,l,u,d,f,p,g,w){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=l,this.authToken_=u,this.onMessage_=d,this.onReady_=f,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=w,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Us("c:"+this.id+":"),this.transportManager_=new Ps(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const l=e.healthyTimeout||0;l>0&&(this.healthyTimeout_=ws(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>qS?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>GS?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(l)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(cc in e){const n=e[cc];n===Sm?this.upgradeIfSecondaryHealthy_():n===wm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Em&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=fs("t",e),s=fs("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Cm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Sm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Im,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=fs("t",e),s=fs("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=fs(cc,e);if(ym in e){const s=e[ym];if(n===YS){const l=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(l.h=this.repoInfo_.host),this.onHandshake_(l)}else if(n===Im){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let l=0;l<this.pendingDataMessages.length;++l)this.onDataMessage_(this.pendingDataMessages[l]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===KS?this.onConnectionShutdown_(s):n===wm?this.onReset_(s):n===QS?kc("Server Error: "+s):n===Em?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):kc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,l=e.h;this.sessionId=e.s,this.repoInfo_.host=l,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),td!==s&&st("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),ws(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor($S))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ws(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(HS))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Cm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Er.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{put(e,n,s,l){}merge(e,n,s,l){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e){this.allowedEvents_=e,this.listeners_={},L(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let l=0;l<s.length;l++)s[l].callback.apply(s[l].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const l=this.getInitialEvent(e);l&&n.apply(s,l)}off(e,n,s){this.validateEventType_(e);const l=this.listeners_[e]||[];for(let u=0;u<l.length;u++)if(l[u].callback===n&&(!s||s===l[u].context)){l.splice(u,1);return}}validateEventType_(e){L(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml extends a_{static getInstance(){return new ml}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Yc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return L(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm=32,km=768;class pe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let l=0;l<this.pieces_.length;l++)this.pieces_[l].length>0&&(this.pieces_[s]=this.pieces_[l],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ce(){return new pe("")}function te(r){return r.pieceNum_>=r.pieces_.length?null:r.pieces_[r.pieceNum_]}function tr(r){return r.pieces_.length-r.pieceNum_}function ve(r){let e=r.pieceNum_;return e<r.pieces_.length&&e++,new pe(r.pieces_,e)}function id(r){return r.pieceNum_<r.pieces_.length?r.pieces_[r.pieces_.length-1]:null}function JS(r){let e="";for(let n=r.pieceNum_;n<r.pieces_.length;n++)r.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(r.pieces_[n])));return e||"/"}function As(r,e=0){return r.pieces_.slice(r.pieceNum_+e)}function u_(r){if(r.pieceNum_>=r.pieces_.length)return null;const e=[];for(let n=r.pieceNum_;n<r.pieces_.length-1;n++)e.push(r.pieces_[n]);return new pe(e,0)}function Oe(r,e){const n=[];for(let s=r.pieceNum_;s<r.pieces_.length;s++)n.push(r.pieces_[s]);if(e instanceof pe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let l=0;l<s.length;l++)s[l].length>0&&n.push(s[l])}return new pe(n,0)}function se(r){return r.pieceNum_>=r.pieces_.length}function pt(r,e){const n=te(r),s=te(e);if(n===null)return e;if(n===s)return pt(ve(r),ve(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+r+")")}function ZS(r,e){const n=As(r,0),s=As(e,0);for(let l=0;l<n.length&&l<s.length;l++){const u=xr(n[l],s[l]);if(u!==0)return u}return n.length===s.length?0:n.length<s.length?-1:1}function sd(r,e){if(tr(r)!==tr(e))return!1;for(let n=r.pieceNum_,s=e.pieceNum_;n<=r.pieces_.length;n++,s++)if(r.pieces_[n]!==e.pieces_[s])return!1;return!0}function xt(r,e){let n=r.pieceNum_,s=e.pieceNum_;if(tr(r)>tr(e))return!1;for(;n<r.pieces_.length;){if(r.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class eI{constructor(e,n){this.errorPrefix_=n,this.parts_=As(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ml(this.parts_[s]);c_(this)}}function tI(r,e){r.parts_.length>0&&(r.byteLength_+=1),r.parts_.push(e),r.byteLength_+=Ml(e),c_(r)}function nI(r){const e=r.parts_.pop();r.byteLength_-=Ml(e),r.parts_.length>0&&(r.byteLength_-=1)}function c_(r){if(r.byteLength_>km)throw new Error(r.errorPrefix_+"has a key path longer than "+km+" bytes ("+r.byteLength_+").");if(r.parts_.length>Tm)throw new Error(r.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Tm+") or object contains a cycle "+wr(r))}function wr(r){return r.parts_.length===0?"":"in property '"+r.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od extends a_{static getInstance(){return new od}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return L(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps=1e3,rI=60*5*1e3,Rm=30*1e3,iI=1.3,sI=3e4,oI="server_kill",Nm=3;class En extends l_{constructor(e,n,s,l,u,d,f,p){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=l,this.onServerInfoUpdate_=u,this.authTokenProvider_=d,this.appCheckTokenProvider_=f,this.authOverride_=p,this.id=En.nextPersistentConnectionId_++,this.log_=Us("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ps,this.maxReconnectDelay_=rI,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p&&!Ag())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");od.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ml.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const l=++this.requestNumber_,u={r:l,a:e,b:n};this.log_(qe(u)),L(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(u),s&&(this.requestCBHash_[l]=s)}get(e){this.initConnection_();const n=new bs,l={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:d=>{const f=d.d;d.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(l),this.outstandingGetCount_++;const u=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(u),n.promise}listen(e,n,s,l){this.initConnection_();const u=e._queryIdentifier,d=e._path.toString();this.log_("Listen called for "+d+" "+u),this.listens.has(d)||this.listens.set(d,new Map),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),L(!this.listens.get(d).has(u),"listen() called twice for same path/queryId.");const f={onComplete:l,hashFn:n,query:e,tag:s};this.listens.get(d).set(u,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),l=n._queryIdentifier;this.log_("Listen on "+s+" for "+l);const u={p:s},d="q";e.tag&&(u.q=n._queryObject,u.t=e.tag),u.h=e.hashFn(),this.sendRequest(d,u,f=>{const p=f.d,g=f.s;En.warnOnListenWarnings_(p,n),(this.listens.get(s)&&this.listens.get(s).get(l))===e&&(this.log_("listen response",f),g!=="ok"&&this.removeListen_(s,l),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&on(e,"w")){const s=pi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const l='".indexOn": "'+n._queryParams.getIndex().toString()+'"',u=n._path.toString();st(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${l} at ${u} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||q0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Rm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=G0(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,l=>{const u=l.s,d=l.d||"error";this.authToken_===e&&(u==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(u,d))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),l=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+l),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,l)&&this.connected_&&this.sendUnlisten_(s,l,e._queryObject,n)}sendUnlisten_(e,n,s,l){this.log_("Unlisten on "+e+" for "+n);const u={p:e},d="n";l&&(u.q=s,u.t=l),this.sendRequest(d,u)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,l){const u={p:n,d:s};this.log_("onDisconnect "+e,u),this.sendRequest(e,u,d=>{l&&setTimeout(()=>{l(d.s,d.d)},Math.floor(0))})}put(e,n,s,l){this.putInternal("p",e,n,s,l)}merge(e,n,s,l){this.putInternal("m",e,n,s,l)}putInternal(e,n,s,l,u){this.initConnection_();const d={p:n,d:s};u!==void 0&&(d.h=u),this.outstandingPuts_.push({action:e,request:d,onComplete:l}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,l=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,u=>{this.log_(n+" response",u),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),l&&l(u.s,u.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const u=s.d;this.log_("reportStats","Error sending stats: "+u)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+qe(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):kc("Unrecognized action received from server: "+qe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){L(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ps,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ps,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>sI&&(this.reconnectDelay_=ps),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*iI)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),l=this.id+":"+En.nextConnectionId_++,u=this.lastSessionId;let d=!1,f=null;const p=function(){f?f.close():(d=!0,s())},g=function(v){L(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(v)};this.realtime_={close:p,sendRequest:g};const w=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[v,S]=await Promise.all([this.authTokenProvider_.getToken(w),this.appCheckTokenProvider_.getToken(w)]);d?Ye("getToken() completed but was canceled"):(Ye("getToken() completed. Creating connection."),this.authToken_=v&&v.accessToken,this.appCheckToken_=S&&S.token,f=new XS(l,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,R=>{st(R+" ("+this.repoInfo_.toString()+")"),this.interrupt(oI)},u))}catch(v){this.log_("Failed to get token: "+v),d||(this.repoInfo_.nodeAdmin&&st(v),p())}}}interrupt(e){Ye("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ye("Resuming connection for reason: "+e),delete this.interruptReasons_[e],wc(this.interruptReasons_)&&(this.reconnectDelay_=ps,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(u=>ed(u)).join("$"):s="default";const l=this.removeListen_(e,s);l&&l.onComplete&&l.onComplete("permission_denied")}removeListen_(e,n){const s=new pe(e).toString();let l;if(this.listens.has(s)){const u=this.listens.get(s);l=u.get(n),u.delete(n),u.size===0&&this.listens.delete(s)}else l=void 0;return l}onAuthRevoked_(e,n){Ye("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Nm&&(this.reconnectDelay_=Rm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ye("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Nm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+jg.replace(/\./g,"-")]=1,Yc()?e["framework.cordova"]=1:Pg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ml.getInstance().currentlyOnline();return wc(this.interruptReasons_)&&e}}En.nextPersistentConnectionId_=0;En.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ne(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ne(mi,e),l=new ne(mi,n);return this.compare(s,l)!==0}minPost(){return ne.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nl;class d_ extends Fl{static get __EMPTY_NODE(){return nl}static set __EMPTY_NODE(e){nl=e}compare(e,n){return xr(e.name,n.name)}isDefinedOn(e){throw wi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ne.MIN}maxPost(){return new ne(Ir,nl)}makePost(e,n){return L(typeof e=="string","KeyIndex indexValue must always be a string."),new ne(e,nl)}toString(){return".key"}}const ui=new d_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,n,s,l,u=null){this.isReverse_=l,this.resultGenerator_=u,this.nodeStack_=[];let d=1;for(;!e.isEmpty();)if(e=e,d=n?s(e.key,n):1,l&&(d*=-1),d<0)this.isReverse_?e=e.left:e=e.right;else if(d===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class $e{constructor(e,n,s,l,u){this.key=e,this.value=n,this.color=s??$e.RED,this.left=l??mt.EMPTY_NODE,this.right=u??mt.EMPTY_NODE}copy(e,n,s,l,u){return new $e(e??this.key,n??this.value,s??this.color,l??this.left,u??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let l=this;const u=s(e,l.key);return u<0?l=l.copy(null,null,null,l.left.insert(e,n,s),null):u===0?l=l.copy(null,n,null,null,null):l=l.copy(null,null,null,null,l.right.insert(e,n,s)),l.fixUp_()}removeMin_(){if(this.left.isEmpty())return mt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,l;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return mt.EMPTY_NODE;l=s.right.min_(),s=s.copy(l.key,l.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}$e.RED=!0;$e.BLACK=!1;class lI{copy(e,n,s,l,u){return this}insert(e,n,s){return new $e(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class mt{constructor(e,n=mt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new mt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,$e.BLACK,null,null))}remove(e){return new mt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,$e.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,l=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return l?l.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(l=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new rl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new rl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new rl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new rl(this.root_,null,this.comparator_,!0,e)}}mt.EMPTY_NODE=new lI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aI(r,e){return xr(r.name,e.name)}function ld(r,e){return xr(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nc;function uI(r){Nc=r}const h_=function(r){return typeof r=="number"?"number:"+$g(r):"string:"+r},f_=function(r){if(r.isLeafNode()){const e=r.val();L(typeof e=="string"||typeof e=="number"||typeof e=="object"&&on(e,".sv"),"Priority must be a string or number.")}else L(r===Nc||r.isEmpty(),"priority of unexpected type.");L(r===Nc||r.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pm;class Ve{static set __childrenNodeConstructor(e){Pm=e}static get __childrenNodeConstructor(){return Pm}constructor(e,n=Ve.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,L(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),f_(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ve(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ve.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return se(e)?this:te(e)===".priority"?this.priorityNode_:Ve.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ve.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=te(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(L(s!==".priority"||tr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ve.__childrenNodeConstructor.EMPTY_NODE.updateChild(ve(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+h_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=$g(this.value_):e+=this.value_,this.lazyHash_=Bg(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ve.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ve.__childrenNodeConstructor?-1:(L(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,l=Ve.VALUE_TYPE_ORDER.indexOf(n),u=Ve.VALUE_TYPE_ORDER.indexOf(s);return L(l>=0,"Unknown leaf type: "+n),L(u>=0,"Unknown leaf type: "+s),l===u?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:u-l}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ve.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let p_,m_;function cI(r){p_=r}function dI(r){m_=r}class hI extends Fl{compare(e,n){const s=e.node.getPriority(),l=n.node.getPriority(),u=s.compareTo(l);return u===0?xr(e.name,n.name):u}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ne.MIN}maxPost(){return new ne(Ir,new Ve("[PRIORITY-POST]",m_))}makePost(e,n){const s=p_(e);return new ne(n,new Ve("[PRIORITY-POST]",s))}toString(){return".priority"}}const xe=new hI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI=Math.log(2);class pI{constructor(e){const n=u=>parseInt(Math.log(u)/fI,10),s=u=>parseInt(Array(u+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const l=s(this.count);this.bits_=e+1&l}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const gl=function(r,e,n,s){r.sort(e);const l=function(p,g){const w=g-p;let v,S;if(w===0)return null;if(w===1)return v=r[p],S=n?n(v):v,new $e(S,v.node,$e.BLACK,null,null);{const R=parseInt(w/2,10)+p,M=l(p,R),x=l(R+1,g);return v=r[R],S=n?n(v):v,new $e(S,v.node,$e.BLACK,M,x)}},u=function(p){let g=null,w=null,v=r.length;const S=function(M,x){const $=v-M,Ce=v;v-=M;const ye=l($+1,Ce),De=r[$],V=n?n(De):De;R(new $e(V,De.node,x,null,ye))},R=function(M){g?(g.left=M,g=M):(w=M,g=M)};for(let M=0;M<p.count;++M){const x=p.nextBitIsOne(),$=Math.pow(2,p.count-(M+1));x?S($,$e.BLACK):(S($,$e.BLACK),S($,$e.RED))}return w},d=new pI(r.length),f=u(d);return new mt(s||e,f)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dc;const si={};class _n{static get Default(){return L(si&&xe,"ChildrenNode.ts has not been loaded"),dc=dc||new _n({".priority":si},{".priority":xe}),dc}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=pi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof mt?n:null}hasIndex(e){return on(this.indexSet_,e.toString())}addIndex(e,n){L(e!==ui,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let l=!1;const u=n.getIterator(ne.Wrap);let d=u.getNext();for(;d;)l=l||e.isDefinedOn(d.node),s.push(d),d=u.getNext();let f;l?f=gl(s,e.getCompare()):f=si;const p=e.toString(),g=Object.assign({},this.indexSet_);g[p]=e;const w=Object.assign({},this.indexes_);return w[p]=f,new _n(w,g)}addToIndexes(e,n){const s=hl(this.indexes_,(l,u)=>{const d=pi(this.indexSet_,u);if(L(d,"Missing index implementation for "+u),l===si)if(d.isDefinedOn(e.node)){const f=[],p=n.getIterator(ne.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&f.push(g),g=p.getNext();return f.push(e),gl(f,d.getCompare())}else return si;else{const f=n.get(e.name);let p=l;return f&&(p=p.remove(new ne(e.name,f))),p.insert(e,e.node)}});return new _n(s,this.indexSet_)}removeFromIndexes(e,n){const s=hl(this.indexes_,l=>{if(l===si)return l;{const u=n.get(e.name);return u?l.remove(new ne(e.name,u)):l}});return new _n(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ms;class K{static get EMPTY_NODE(){return ms||(ms=new K(new mt(ld),null,_n.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&f_(this.priorityNode_),this.children_.isEmpty()&&L(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ms}updatePriority(e){return this.children_.isEmpty()?this:new K(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ms:n}}getChild(e){const n=te(e);return n===null?this:this.getImmediateChild(n).getChild(ve(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(L(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ne(e,n);let l,u;n.isEmpty()?(l=this.children_.remove(e),u=this.indexMap_.removeFromIndexes(s,this.children_)):(l=this.children_.insert(e,n),u=this.indexMap_.addToIndexes(s,this.children_));const d=l.isEmpty()?ms:this.priorityNode_;return new K(l,d,u)}}updateChild(e,n){const s=te(e);if(s===null)return n;{L(te(e)!==".priority"||tr(e)===1,".priority must be the last token in a path");const l=this.getImmediateChild(s).updateChild(ve(e),n);return this.updateImmediateChild(s,l)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,l=0,u=!0;if(this.forEachChild(xe,(d,f)=>{n[d]=f.val(e),s++,u&&K.INTEGER_REGEXP_.test(d)?l=Math.max(l,Number(d)):u=!1}),!e&&u&&l<2*s){const d=[];for(const f in n)d[f]=n[f];return d}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+h_(this.getPriority().val())+":"),this.forEachChild(xe,(n,s)=>{const l=s.hash();l!==""&&(e+=":"+n+":"+l)}),this.lazyHash_=e===""?"":Bg(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const l=this.resolveIndex_(s);if(l){const u=l.getPredecessorKey(new ne(e,n));return u?u.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ne(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ne(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(l=>n(l.name,l.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,l=>l);{const l=this.children_.getIteratorFrom(e.name,ne.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)<0;)l.getNext(),u=l.peek();return l}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,l=>l);{const l=this.children_.getReverseIteratorFrom(e.name,ne.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)>0;)l.getNext(),u=l.peek();return l}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===zs?-1:0}withIndex(e){if(e===ui||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new K(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ui||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(xe),l=n.getIterator(xe);let u=s.getNext(),d=l.getNext();for(;u&&d;){if(u.name!==d.name||!u.node.equals(d.node))return!1;u=s.getNext(),d=l.getNext()}return u===null&&d===null}else return!1;else return!1}}resolveIndex_(e){return e===ui?null:this.indexMap_.get(e.toString())}}K.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class mI extends K{constructor(){super(new mt(ld),K.EMPTY_NODE,_n.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return K.EMPTY_NODE}isEmpty(){return!1}}const zs=new mI;Object.defineProperties(ne,{MIN:{value:new ne(mi,K.EMPTY_NODE)},MAX:{value:new ne(Ir,zs)}});d_.__EMPTY_NODE=K.EMPTY_NODE;Ve.__childrenNodeConstructor=K;uI(zs);dI(zs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI=!0;function Ge(r,e=null){if(r===null)return K.EMPTY_NODE;if(typeof r=="object"&&".priority"in r&&(e=r[".priority"]),L(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof r=="object"&&".value"in r&&r[".value"]!==null&&(r=r[".value"]),typeof r!="object"||".sv"in r){const n=r;return new Ve(n,Ge(e))}if(!(r instanceof Array)&&gI){const n=[];let s=!1;if(Xe(r,(d,f)=>{if(d.substring(0,1)!=="."){const p=Ge(f);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),n.push(new ne(d,p)))}}),n.length===0)return K.EMPTY_NODE;const u=gl(n,aI,d=>d.name,ld);if(s){const d=gl(n,xe.getCompare());return new K(u,Ge(e),new _n({".priority":d},{".priority":xe}))}else return new K(u,Ge(e),_n.Default)}else{let n=K.EMPTY_NODE;return Xe(r,(s,l)=>{if(on(r,s)&&s.substring(0,1)!=="."){const u=Ge(l);(u.isLeafNode()||!u.isEmpty())&&(n=n.updateImmediateChild(s,u))}}),n.updatePriority(Ge(e))}}cI(Ge);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I extends Fl{constructor(e){super(),this.indexPath_=e,L(!se(e)&&te(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),l=this.extractChild(n.node),u=s.compareTo(l);return u===0?xr(e.name,n.name):u}makePost(e,n){const s=Ge(e),l=K.EMPTY_NODE.updateChild(this.indexPath_,s);return new ne(n,l)}maxPost(){const e=K.EMPTY_NODE.updateChild(this.indexPath_,zs);return new ne(Ir,e)}toString(){return As(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI extends Fl{compare(e,n){const s=e.node.compareTo(n.node);return s===0?xr(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ne.MIN}maxPost(){return ne.MAX}makePost(e,n){const s=Ge(e);return new ne(n,s)}toString(){return".value"}}const yI=new vI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g_(r){return{type:"value",snapshotNode:r}}function gi(r,e){return{type:"child_added",snapshotNode:e,childName:r}}function Os(r,e){return{type:"child_removed",snapshotNode:e,childName:r}}function xs(r,e,n){return{type:"child_changed",snapshotNode:e,childName:r,oldSnap:n}}function wI(r,e){return{type:"child_moved",snapshotNode:e,childName:r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e){this.index_=e}updateChild(e,n,s,l,u,d){L(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(n);return f.getChild(l).equals(s.getChild(l))&&f.isEmpty()===s.isEmpty()||(d!=null&&(s.isEmpty()?e.hasChild(n)?d.trackChildChange(Os(n,f)):L(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?d.trackChildChange(gi(n,s)):d.trackChildChange(xs(n,s,f))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(xe,(l,u)=>{n.hasChild(l)||s.trackChildChange(Os(l,u))}),n.isLeafNode()||n.forEachChild(xe,(l,u)=>{if(e.hasChild(l)){const d=e.getImmediateChild(l);d.equals(u)||s.trackChildChange(xs(l,u,d))}else s.trackChildChange(gi(l,u))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?K.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e){this.indexedFilter_=new ad(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ds.getStartPost_(e),this.endPost_=Ds.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,l,u,d){return this.matches(new ne(n,s))||(s=K.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,l,u,d)}updateFullNode(e,n,s){n.isLeafNode()&&(n=K.EMPTY_NODE);let l=n.withIndex(this.index_);l=l.updatePriority(K.EMPTY_NODE);const u=this;return n.forEachChild(xe,(d,f)=>{u.matches(new ne(d,f))||(l=l.updateImmediateChild(d,K.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Ds(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,l,u,d){return this.rangedFilter_.matches(new ne(n,s))||(s=K.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,l,u,d):this.fullLimitUpdateChild_(e,n,s,u,d)}updateFullNode(e,n,s){let l;if(n.isLeafNode()||n.isEmpty())l=K.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){l=K.EMPTY_NODE.withIndex(this.index_);let u;this.reverse_?u=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):u=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let d=0;for(;u.hasNext()&&d<this.limit_;){const f=u.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))l=l.updateImmediateChild(f.name,f.node),d++;else break;else continue}}else{l=n.withIndex(this.index_),l=l.updatePriority(K.EMPTY_NODE);let u;this.reverse_?u=l.getReverseIterator(this.index_):u=l.getIterator(this.index_);let d=0;for(;u.hasNext();){const f=u.getNext();d<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?d++:l=l.updateImmediateChild(f.name,K.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,l,u){let d;if(this.reverse_){const v=this.index_.getCompare();d=(S,R)=>v(R,S)}else d=this.index_.getCompare();const f=e;L(f.numChildren()===this.limit_,"");const p=new ne(n,s),g=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),w=this.rangedFilter_.matches(p);if(f.hasChild(n)){const v=f.getImmediateChild(n);let S=l.getChildAfterChild(this.index_,g,this.reverse_);for(;S!=null&&(S.name===n||f.hasChild(S.name));)S=l.getChildAfterChild(this.index_,S,this.reverse_);const R=S==null?1:d(S,p);if(w&&!s.isEmpty()&&R>=0)return u!=null&&u.trackChildChange(xs(n,s,v)),f.updateImmediateChild(n,s);{u!=null&&u.trackChildChange(Os(n,v));const x=f.updateImmediateChild(n,K.EMPTY_NODE);return S!=null&&this.rangedFilter_.matches(S)?(u!=null&&u.trackChildChange(gi(S.name,S.node)),x.updateImmediateChild(S.name,S.node)):x}}else return s.isEmpty()?e:w&&d(g,p)>=0?(u!=null&&(u.trackChildChange(Os(g.name,g.node)),u.trackChildChange(gi(n,s))),f.updateImmediateChild(n,s).updateImmediateChild(g.name,K.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=xe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return L(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return L(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:mi}hasEnd(){return this.endSet_}getIndexEndValue(){return L(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return L(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ir}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return L(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===xe}copy(){const e=new ud;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function SI(r){return r.loadsAllData()?new ad(r.getIndex()):r.hasLimit()?new EI(r):new Ds(r)}function Am(r){const e={};if(r.isDefault())return e;let n;if(r.index_===xe?n="$priority":r.index_===yI?n="$value":r.index_===ui?n="$key":(L(r.index_ instanceof _I,"Unrecognized index type!"),n=r.index_.toString()),e.orderBy=qe(n),r.startSet_){const s=r.startAfterSet_?"startAfter":"startAt";e[s]=qe(r.indexStartValue_),r.startNameSet_&&(e[s]+=","+qe(r.indexStartName_))}if(r.endSet_){const s=r.endBeforeSet_?"endBefore":"endAt";e[s]=qe(r.indexEndValue_),r.endNameSet_&&(e[s]+=","+qe(r.indexEndName_))}return r.limitSet_&&(r.isViewFromLeft()?e.limitToFirst=r.limit_:e.limitToLast=r.limit_),e}function Om(r){const e={};if(r.startSet_&&(e.sp=r.indexStartValue_,r.startNameSet_&&(e.sn=r.indexStartName_),e.sin=!r.startAfterSet_),r.endSet_&&(e.ep=r.indexEndValue_,r.endNameSet_&&(e.en=r.indexEndName_),e.ein=!r.endBeforeSet_),r.limitSet_){e.l=r.limit_;let n=r.viewFrom_;n===""&&(r.isViewFromLeft()?n="l":n="r"),e.vf=n}return r.index_!==xe&&(e.i=r.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l extends l_{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(L(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,l){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=l,this.log_=Us("p:rest:"),this.listens_={}}listen(e,n,s,l){const u=e._path.toString();this.log_("Listen called for "+u+" "+e._queryIdentifier);const d=_l.getListenId_(e,s),f={};this.listens_[d]=f;const p=Am(e._queryParams);this.restRequest_(u+".json",p,(g,w)=>{let v=w;if(g===404&&(v=null,g=null),g===null&&this.onDataUpdate_(u,v,!1,s),pi(this.listens_,d)===f){let S;g?g===401?S="permission_denied":S="rest_error:"+g:S="ok",l(S,null)}})}unlisten(e,n){const s=_l.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Am(e._queryParams),s=e._path.toString(),l=new bs;return this.restRequest_(s+".json",n,(u,d)=>{let f=d;u===404&&(f=null,u=null),u===null?(this.onDataUpdate_(s,f,!1,null),l.resolve(f)):l.reject(new Error(f))}),l.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([l,u])=>{l&&l.accessToken&&(n.auth=l.accessToken),u&&u.token&&(n.ac=u.token);const d=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ei(n);this.log_("Sending REST request for "+d);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(s&&f.readyState===4){this.log_("REST Response for "+d+" received. status:",f.status,"response:",f.responseText);let p=null;if(f.status>=200&&f.status<300){try{p=ks(f.responseText)}catch{st("Failed to parse JSON response for "+d+": "+f.responseText)}s(null,p)}else f.status!==401&&f.status!==404&&st("Got unsuccessful REST response for "+d+" Status: "+f.status),s(f.status);s=null}},f.open("GET",d,!0),f.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(){this.rootNode_=K.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(){return{value:null,children:new Map}}function __(r,e,n){if(se(e))r.value=n,r.children.clear();else if(r.value!==null)r.value=r.value.updateChild(e,n);else{const s=te(e);r.children.has(s)||r.children.set(s,vl());const l=r.children.get(s);e=ve(e),__(l,e,n)}}function Pc(r,e,n){r.value!==null?n(e,r.value):CI(r,(s,l)=>{const u=new pe(e.toString()+"/"+s);Pc(l,u,n)})}function CI(r,e){r.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Xe(this.last_,(s,l)=>{n[s]=n[s]-l}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm=10*1e3,kI=30*1e3,RI=5*60*1e3;class NI{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new TI(e);const s=xm+(kI-xm)*Math.random();ws(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Xe(e,(l,u)=>{u>0&&on(this.statsToReport_,l)&&(n[l]=u,s=!0)}),s&&this.server_.reportStats(n),ws(this.reportStats_.bind(this),Math.floor(Math.random()*2*RI))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $t;(function(r){r[r.OVERWRITE=0]="OVERWRITE",r[r.MERGE=1]="MERGE",r[r.ACK_USER_WRITE=2]="ACK_USER_WRITE",r[r.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})($t||($t={}));function cd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function dd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function hd(r){return{fromUser:!1,fromServer:!0,queryId:r,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=$t.ACK_USER_WRITE,this.source=cd()}operationForChild(e){if(se(this.path)){if(this.affectedTree.value!=null)return L(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new pe(e));return new yl(ce(),n,this.revert)}}else return L(te(this.path)===e,"operationForChild called for unrelated child."),new yl(ve(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,n){this.source=e,this.path=n,this.type=$t.LISTEN_COMPLETE}operationForChild(e){return se(this.path)?new Ls(this.source,ce()):new Ls(this.source,ve(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=$t.OVERWRITE}operationForChild(e){return se(this.path)?new Cr(this.source,ce(),this.snap.getImmediateChild(e)):new Cr(this.source,ve(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=$t.MERGE}operationForChild(e){if(se(this.path)){const n=this.children.subtree(new pe(e));return n.isEmpty()?null:n.value?new Cr(this.source,ce(),n.value):new _i(this.source,ce(),n)}else return L(te(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new _i(this.source,ve(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(se(e))return this.isFullyInitialized()&&!this.filtered_;const n=te(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function AI(r,e,n,s){const l=[],u=[];return e.forEach(d=>{d.type==="child_changed"&&r.index_.indexedValueChanged(d.oldSnap,d.snapshotNode)&&u.push(wI(d.childName,d.snapshotNode))}),gs(r,l,"child_removed",e,s,n),gs(r,l,"child_added",e,s,n),gs(r,l,"child_moved",u,s,n),gs(r,l,"child_changed",e,s,n),gs(r,l,"value",e,s,n),l}function gs(r,e,n,s,l,u){const d=s.filter(f=>f.type===n);d.sort((f,p)=>xI(r,f,p)),d.forEach(f=>{const p=OI(r,f,u);l.forEach(g=>{g.respondsTo(f.type)&&e.push(g.createEvent(p,r.query_))})})}function OI(r,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,r.index_)),e}function xI(r,e,n){if(e.childName==null||n.childName==null)throw wi("Should only compare child_ events.");const s=new ne(e.childName,e.snapshotNode),l=new ne(n.childName,n.snapshotNode);return r.index_.compare(s,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(r,e){return{eventCache:r,serverCache:e}}function Es(r,e,n,s){return Ul(new Tr(e,n,s),r.serverCache)}function v_(r,e,n,s){return Ul(r.eventCache,new Tr(e,n,s))}function Ac(r){return r.eventCache.isFullyInitialized()?r.eventCache.getNode():null}function kr(r){return r.serverCache.isFullyInitialized()?r.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hc;const DI=()=>(hc||(hc=new mt(_S)),hc);class _e{static fromObject(e){let n=new _e(null);return Xe(e,(s,l)=>{n=n.set(new pe(s),l)}),n}constructor(e,n=DI()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ce(),value:this.value};if(se(e))return null;{const s=te(e),l=this.children.get(s);if(l!==null){const u=l.findRootMostMatchingPathAndValue(ve(e),n);return u!=null?{path:Oe(new pe(s),u.path),value:u.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(se(e))return this;{const n=te(e),s=this.children.get(n);return s!==null?s.subtree(ve(e)):new _e(null)}}set(e,n){if(se(e))return new _e(n,this.children);{const s=te(e),u=(this.children.get(s)||new _e(null)).set(ve(e),n),d=this.children.insert(s,u);return new _e(this.value,d)}}remove(e){if(se(e))return this.children.isEmpty()?new _e(null):new _e(null,this.children);{const n=te(e),s=this.children.get(n);if(s){const l=s.remove(ve(e));let u;return l.isEmpty()?u=this.children.remove(n):u=this.children.insert(n,l),this.value===null&&u.isEmpty()?new _e(null):new _e(this.value,u)}else return this}}get(e){if(se(e))return this.value;{const n=te(e),s=this.children.get(n);return s?s.get(ve(e)):null}}setTree(e,n){if(se(e))return n;{const s=te(e),u=(this.children.get(s)||new _e(null)).setTree(ve(e),n);let d;return u.isEmpty()?d=this.children.remove(s):d=this.children.insert(s,u),new _e(this.value,d)}}fold(e){return this.fold_(ce(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((l,u)=>{s[l]=u.fold_(Oe(e,l),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ce(),n)}findOnPath_(e,n,s){const l=this.value?s(n,this.value):!1;if(l)return l;if(se(e))return null;{const u=te(e),d=this.children.get(u);return d?d.findOnPath_(ve(e),Oe(n,u),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ce(),n)}foreachOnPath_(e,n,s){if(se(e))return this;{this.value&&s(n,this.value);const l=te(e),u=this.children.get(l);return u?u.foreachOnPath_(ve(e),Oe(n,l),s):new _e(null)}}foreach(e){this.foreach_(ce(),e)}foreach_(e,n){this.children.inorderTraversal((s,l)=>{l.foreach_(Oe(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.writeTree_=e}static empty(){return new Ht(new _e(null))}}function Ss(r,e,n){if(se(e))return new Ht(new _e(n));{const s=r.writeTree_.findRootMostValueAndPath(e);if(s!=null){const l=s.path;let u=s.value;const d=pt(l,e);return u=u.updateChild(d,n),new Ht(r.writeTree_.set(l,u))}else{const l=new _e(n),u=r.writeTree_.setTree(e,l);return new Ht(u)}}}function Oc(r,e,n){let s=r;return Xe(n,(l,u)=>{s=Ss(s,Oe(e,l),u)}),s}function Dm(r,e){if(se(e))return Ht.empty();{const n=r.writeTree_.setTree(e,new _e(null));return new Ht(n)}}function xc(r,e){return Dr(r,e)!=null}function Dr(r,e){const n=r.writeTree_.findRootMostValueAndPath(e);return n!=null?r.writeTree_.get(n.path).getChild(pt(n.path,e)):null}function Lm(r){const e=[],n=r.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(xe,(s,l)=>{e.push(new ne(s,l))}):r.writeTree_.children.inorderTraversal((s,l)=>{l.value!=null&&e.push(new ne(s,l.value))}),e}function Zn(r,e){if(se(e))return r;{const n=Dr(r,e);return n!=null?new Ht(new _e(n)):new Ht(r.writeTree_.subtree(e))}}function Dc(r){return r.writeTree_.isEmpty()}function vi(r,e){return y_(ce(),r.writeTree_,e)}function y_(r,e,n){if(e.value!=null)return n.updateChild(r,e.value);{let s=null;return e.children.inorderTraversal((l,u)=>{l===".priority"?(L(u.value!==null,"Priority writes must always be leaf nodes"),s=u.value):n=y_(Oe(r,l),u,n)}),!n.getChild(r).isEmpty()&&s!==null&&(n=n.updateChild(Oe(r,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(r,e){return I_(e,r)}function LI(r,e,n,s,l){L(s>r.lastWriteId,"Stacking an older write on top of newer ones"),l===void 0&&(l=!0),r.allWrites.push({path:e,snap:n,writeId:s,visible:l}),l&&(r.visibleWrites=Ss(r.visibleWrites,e,n)),r.lastWriteId=s}function MI(r,e,n,s){L(s>r.lastWriteId,"Stacking an older merge on top of newer ones"),r.allWrites.push({path:e,children:n,writeId:s,visible:!0}),r.visibleWrites=Oc(r.visibleWrites,e,n),r.lastWriteId=s}function bI(r,e){for(let n=0;n<r.allWrites.length;n++){const s=r.allWrites[n];if(s.writeId===e)return s}return null}function FI(r,e){const n=r.allWrites.findIndex(f=>f.writeId===e);L(n>=0,"removeWrite called with nonexistent writeId.");const s=r.allWrites[n];r.allWrites.splice(n,1);let l=s.visible,u=!1,d=r.allWrites.length-1;for(;l&&d>=0;){const f=r.allWrites[d];f.visible&&(d>=n&&UI(f,s.path)?l=!1:xt(s.path,f.path)&&(u=!0)),d--}if(l){if(u)return zI(r),!0;if(s.snap)r.visibleWrites=Dm(r.visibleWrites,s.path);else{const f=s.children;Xe(f,p=>{r.visibleWrites=Dm(r.visibleWrites,Oe(s.path,p))})}return!0}else return!1}function UI(r,e){if(r.snap)return xt(r.path,e);for(const n in r.children)if(r.children.hasOwnProperty(n)&&xt(Oe(r.path,n),e))return!0;return!1}function zI(r){r.visibleWrites=w_(r.allWrites,jI,ce()),r.allWrites.length>0?r.lastWriteId=r.allWrites[r.allWrites.length-1].writeId:r.lastWriteId=-1}function jI(r){return r.visible}function w_(r,e,n){let s=Ht.empty();for(let l=0;l<r.length;++l){const u=r[l];if(e(u)){const d=u.path;let f;if(u.snap)xt(n,d)?(f=pt(n,d),s=Ss(s,f,u.snap)):xt(d,n)&&(f=pt(d,n),s=Ss(s,ce(),u.snap.getChild(f)));else if(u.children){if(xt(n,d))f=pt(n,d),s=Oc(s,f,u.children);else if(xt(d,n))if(f=pt(d,n),se(f))s=Oc(s,ce(),u.children);else{const p=pi(u.children,te(f));if(p){const g=p.getChild(ve(f));s=Ss(s,ce(),g)}}}else throw wi("WriteRecord should have .snap or .children")}}return s}function E_(r,e,n,s,l){if(!s&&!l){const u=Dr(r.visibleWrites,e);if(u!=null)return u;{const d=Zn(r.visibleWrites,e);if(Dc(d))return n;if(n==null&&!xc(d,ce()))return null;{const f=n||K.EMPTY_NODE;return vi(d,f)}}}else{const u=Zn(r.visibleWrites,e);if(!l&&Dc(u))return n;if(!l&&n==null&&!xc(u,ce()))return null;{const d=function(g){return(g.visible||l)&&(!s||!~s.indexOf(g.writeId))&&(xt(g.path,e)||xt(e,g.path))},f=w_(r.allWrites,d,e),p=n||K.EMPTY_NODE;return vi(f,p)}}}function WI(r,e,n){let s=K.EMPTY_NODE;const l=Dr(r.visibleWrites,e);if(l)return l.isLeafNode()||l.forEachChild(xe,(u,d)=>{s=s.updateImmediateChild(u,d)}),s;if(n){const u=Zn(r.visibleWrites,e);return n.forEachChild(xe,(d,f)=>{const p=vi(Zn(u,new pe(d)),f);s=s.updateImmediateChild(d,p)}),Lm(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}else{const u=Zn(r.visibleWrites,e);return Lm(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}}function BI(r,e,n,s,l){L(s||l,"Either existingEventSnap or existingServerSnap must exist");const u=Oe(e,n);if(xc(r.visibleWrites,u))return null;{const d=Zn(r.visibleWrites,u);return Dc(d)?l.getChild(n):vi(d,l.getChild(n))}}function VI(r,e,n,s){const l=Oe(e,n),u=Dr(r.visibleWrites,l);if(u!=null)return u;if(s.isCompleteForChild(n)){const d=Zn(r.visibleWrites,l);return vi(d,s.getNode().getImmediateChild(n))}else return null}function $I(r,e){return Dr(r.visibleWrites,e)}function HI(r,e,n,s,l,u,d){let f;const p=Zn(r.visibleWrites,e),g=Dr(p,ce());if(g!=null)f=g;else if(n!=null)f=vi(p,n);else return[];if(f=f.withIndex(d),!f.isEmpty()&&!f.isLeafNode()){const w=[],v=d.getCompare(),S=u?f.getReverseIteratorFrom(s,d):f.getIteratorFrom(s,d);let R=S.getNext();for(;R&&w.length<l;)v(R,s)!==0&&w.push(R),R=S.getNext();return w}else return[]}function GI(){return{visibleWrites:Ht.empty(),allWrites:[],lastWriteId:-1}}function wl(r,e,n,s){return E_(r.writeTree,r.treePath,e,n,s)}function pd(r,e){return WI(r.writeTree,r.treePath,e)}function Mm(r,e,n,s){return BI(r.writeTree,r.treePath,e,n,s)}function El(r,e){return $I(r.writeTree,Oe(r.treePath,e))}function qI(r,e,n,s,l,u){return HI(r.writeTree,r.treePath,e,n,s,l,u)}function md(r,e,n){return VI(r.writeTree,r.treePath,e,n)}function S_(r,e){return I_(Oe(r.treePath,e),r.writeTree)}function I_(r,e){return{treePath:r,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;L(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),L(s!==".priority","Only non-priority child changes can be tracked.");const l=this.changeMap.get(s);if(l){const u=l.type;if(n==="child_added"&&u==="child_removed")this.changeMap.set(s,xs(s,e.snapshotNode,l.snapshotNode));else if(n==="child_removed"&&u==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&u==="child_changed")this.changeMap.set(s,Os(s,l.oldSnap));else if(n==="child_changed"&&u==="child_added")this.changeMap.set(s,gi(s,e.snapshotNode));else if(n==="child_changed"&&u==="child_changed")this.changeMap.set(s,xs(s,e.snapshotNode,l.oldSnap));else throw wi("Illegal combination of changes: "+e+" occurred after "+l)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const C_=new QI;class gd{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Tr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return md(this.writes_,e,s)}}getChildAfterChild(e,n,s){const l=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:kr(this.viewCache_),u=qI(this.writes_,l,n,1,s,e);return u.length===0?null:u[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YI(r){return{filter:r}}function XI(r,e){L(e.eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),L(e.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed")}function JI(r,e,n,s,l){const u=new KI;let d,f;if(n.type===$t.OVERWRITE){const g=n;g.source.fromUser?d=Lc(r,e,g.path,g.snap,s,l,u):(L(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered()&&!se(g.path),d=Sl(r,e,g.path,g.snap,s,l,f,u))}else if(n.type===$t.MERGE){const g=n;g.source.fromUser?d=eC(r,e,g.path,g.children,s,l,u):(L(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered(),d=Mc(r,e,g.path,g.children,s,l,f,u))}else if(n.type===$t.ACK_USER_WRITE){const g=n;g.revert?d=rC(r,e,g.path,s,l,u):d=tC(r,e,g.path,g.affectedTree,s,l,u)}else if(n.type===$t.LISTEN_COMPLETE)d=nC(r,e,n.path,s,u);else throw wi("Unknown operation type: "+n.type);const p=u.getChanges();return ZI(e,d,p),{viewCache:d,changes:p}}function ZI(r,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const l=s.getNode().isLeafNode()||s.getNode().isEmpty(),u=Ac(r);(n.length>0||!r.eventCache.isFullyInitialized()||l&&!s.getNode().equals(u)||!s.getNode().getPriority().equals(u.getPriority()))&&n.push(g_(Ac(e)))}}function T_(r,e,n,s,l,u){const d=e.eventCache;if(El(s,n)!=null)return e;{let f,p;if(se(n))if(L(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=kr(e),w=g instanceof K?g:K.EMPTY_NODE,v=pd(s,w);f=r.filter.updateFullNode(e.eventCache.getNode(),v,u)}else{const g=wl(s,kr(e));f=r.filter.updateFullNode(e.eventCache.getNode(),g,u)}else{const g=te(n);if(g===".priority"){L(tr(n)===1,"Can't have a priority with additional path components");const w=d.getNode();p=e.serverCache.getNode();const v=Mm(s,n,w,p);v!=null?f=r.filter.updatePriority(w,v):f=d.getNode()}else{const w=ve(n);let v;if(d.isCompleteForChild(g)){p=e.serverCache.getNode();const S=Mm(s,n,d.getNode(),p);S!=null?v=d.getNode().getImmediateChild(g).updateChild(w,S):v=d.getNode().getImmediateChild(g)}else v=md(s,g,e.serverCache);v!=null?f=r.filter.updateChild(d.getNode(),g,v,w,l,u):f=d.getNode()}}return Es(e,f,d.isFullyInitialized()||se(n),r.filter.filtersNodes())}}function Sl(r,e,n,s,l,u,d,f){const p=e.serverCache;let g;const w=d?r.filter:r.filter.getIndexedFilter();if(se(n))g=w.updateFullNode(p.getNode(),s,null);else if(w.filtersNodes()&&!p.isFiltered()){const R=p.getNode().updateChild(n,s);g=w.updateFullNode(p.getNode(),R,null)}else{const R=te(n);if(!p.isCompleteForPath(n)&&tr(n)>1)return e;const M=ve(n),$=p.getNode().getImmediateChild(R).updateChild(M,s);R===".priority"?g=w.updatePriority(p.getNode(),$):g=w.updateChild(p.getNode(),R,$,M,C_,null)}const v=v_(e,g,p.isFullyInitialized()||se(n),w.filtersNodes()),S=new gd(l,v,u);return T_(r,v,n,l,S,f)}function Lc(r,e,n,s,l,u,d){const f=e.eventCache;let p,g;const w=new gd(l,e,u);if(se(n))g=r.filter.updateFullNode(e.eventCache.getNode(),s,d),p=Es(e,g,!0,r.filter.filtersNodes());else{const v=te(n);if(v===".priority")g=r.filter.updatePriority(e.eventCache.getNode(),s),p=Es(e,g,f.isFullyInitialized(),f.isFiltered());else{const S=ve(n),R=f.getNode().getImmediateChild(v);let M;if(se(S))M=s;else{const x=w.getCompleteChild(v);x!=null?id(S)===".priority"&&x.getChild(u_(S)).isEmpty()?M=x:M=x.updateChild(S,s):M=K.EMPTY_NODE}if(R.equals(M))p=e;else{const x=r.filter.updateChild(f.getNode(),v,M,S,w,d);p=Es(e,x,f.isFullyInitialized(),r.filter.filtersNodes())}}}return p}function bm(r,e){return r.eventCache.isCompleteForChild(e)}function eC(r,e,n,s,l,u,d){let f=e;return s.foreach((p,g)=>{const w=Oe(n,p);bm(e,te(w))&&(f=Lc(r,f,w,g,l,u,d))}),s.foreach((p,g)=>{const w=Oe(n,p);bm(e,te(w))||(f=Lc(r,f,w,g,l,u,d))}),f}function Fm(r,e,n){return n.foreach((s,l)=>{e=e.updateChild(s,l)}),e}function Mc(r,e,n,s,l,u,d,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;se(n)?g=s:g=new _e(null).setTree(n,s);const w=e.serverCache.getNode();return g.children.inorderTraversal((v,S)=>{if(w.hasChild(v)){const R=e.serverCache.getNode().getImmediateChild(v),M=Fm(r,R,S);p=Sl(r,p,new pe(v),M,l,u,d,f)}}),g.children.inorderTraversal((v,S)=>{const R=!e.serverCache.isCompleteForChild(v)&&S.value===null;if(!w.hasChild(v)&&!R){const M=e.serverCache.getNode().getImmediateChild(v),x=Fm(r,M,S);p=Sl(r,p,new pe(v),x,l,u,d,f)}}),p}function tC(r,e,n,s,l,u,d){if(El(l,n)!=null)return e;const f=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(se(n)&&p.isFullyInitialized()||p.isCompleteForPath(n))return Sl(r,e,n,p.getNode().getChild(n),l,u,f,d);if(se(n)){let g=new _e(null);return p.getNode().forEachChild(ui,(w,v)=>{g=g.set(new pe(w),v)}),Mc(r,e,n,g,l,u,f,d)}else return e}else{let g=new _e(null);return s.foreach((w,v)=>{const S=Oe(n,w);p.isCompleteForPath(S)&&(g=g.set(w,p.getNode().getChild(S)))}),Mc(r,e,n,g,l,u,f,d)}}function nC(r,e,n,s,l){const u=e.serverCache,d=v_(e,u.getNode(),u.isFullyInitialized()||se(n),u.isFiltered());return T_(r,d,n,s,C_,l)}function rC(r,e,n,s,l,u){let d;if(El(s,n)!=null)return e;{const f=new gd(s,e,l),p=e.eventCache.getNode();let g;if(se(n)||te(n)===".priority"){let w;if(e.serverCache.isFullyInitialized())w=wl(s,kr(e));else{const v=e.serverCache.getNode();L(v instanceof K,"serverChildren would be complete if leaf node"),w=pd(s,v)}w=w,g=r.filter.updateFullNode(p,w,u)}else{const w=te(n);let v=md(s,w,e.serverCache);v==null&&e.serverCache.isCompleteForChild(w)&&(v=p.getImmediateChild(w)),v!=null?g=r.filter.updateChild(p,w,v,ve(n),f,u):e.eventCache.getNode().hasChild(w)?g=r.filter.updateChild(p,w,K.EMPTY_NODE,ve(n),f,u):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(d=wl(s,kr(e)),d.isLeafNode()&&(g=r.filter.updateFullNode(g,d,u)))}return d=e.serverCache.isFullyInitialized()||El(s,ce())!=null,Es(e,g,d,r.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,l=new ad(s.getIndex()),u=SI(s);this.processor_=YI(u);const d=n.serverCache,f=n.eventCache,p=l.updateFullNode(K.EMPTY_NODE,d.getNode(),null),g=u.updateFullNode(K.EMPTY_NODE,f.getNode(),null),w=new Tr(p,d.isFullyInitialized(),l.filtersNodes()),v=new Tr(g,f.isFullyInitialized(),u.filtersNodes());this.viewCache_=Ul(v,w),this.eventGenerator_=new PI(this.query_)}get query(){return this.query_}}function sC(r){return r.viewCache_.serverCache.getNode()}function oC(r,e){const n=kr(r.viewCache_);return n&&(r.query._queryParams.loadsAllData()||!se(e)&&!n.getImmediateChild(te(e)).isEmpty())?n.getChild(e):null}function Um(r){return r.eventRegistrations_.length===0}function lC(r,e){r.eventRegistrations_.push(e)}function zm(r,e,n){const s=[];if(n){L(e==null,"A cancel should cancel all event registrations.");const l=r.query._path;r.eventRegistrations_.forEach(u=>{const d=u.createCancelEvent(n,l);d&&s.push(d)})}if(e){let l=[];for(let u=0;u<r.eventRegistrations_.length;++u){const d=r.eventRegistrations_[u];if(!d.matches(e))l.push(d);else if(e.hasAnyCallback()){l=l.concat(r.eventRegistrations_.slice(u+1));break}}r.eventRegistrations_=l}else r.eventRegistrations_=[];return s}function jm(r,e,n,s){e.type===$t.MERGE&&e.source.queryId!==null&&(L(kr(r.viewCache_),"We should always have a full cache before handling merges"),L(Ac(r.viewCache_),"Missing event cache, even though we have a server cache"));const l=r.viewCache_,u=JI(r.processor_,l,e,n,s);return XI(r.processor_,u.viewCache),L(u.viewCache.serverCache.isFullyInitialized()||!l.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),r.viewCache_=u.viewCache,k_(r,u.changes,u.viewCache.eventCache.getNode(),null)}function aC(r,e){const n=r.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(xe,(u,d)=>{s.push(gi(u,d))}),n.isFullyInitialized()&&s.push(g_(n.getNode())),k_(r,s,n.getNode(),e)}function k_(r,e,n,s){const l=s?[s]:r.eventRegistrations_;return AI(r.eventGenerator_,e,n,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Il;class uC{constructor(){this.views=new Map}}function cC(r){L(!Il,"__referenceConstructor has already been defined"),Il=r}function dC(){return L(Il,"Reference.ts has not been loaded"),Il}function hC(r){return r.views.size===0}function _d(r,e,n,s){const l=e.source.queryId;if(l!==null){const u=r.views.get(l);return L(u!=null,"SyncTree gave us an op for an invalid query."),jm(u,e,n,s)}else{let u=[];for(const d of r.views.values())u=u.concat(jm(d,e,n,s));return u}}function fC(r,e,n,s,l){const u=e._queryIdentifier,d=r.views.get(u);if(!d){let f=wl(n,l?s:null),p=!1;f?p=!0:s instanceof K?(f=pd(n,s),p=!1):(f=K.EMPTY_NODE,p=!1);const g=Ul(new Tr(f,p,!1),new Tr(s,l,!1));return new iC(e,g)}return d}function pC(r,e,n,s,l,u){const d=fC(r,e,s,l,u);return r.views.has(e._queryIdentifier)||r.views.set(e._queryIdentifier,d),lC(d,n),aC(d,n)}function mC(r,e,n,s){const l=e._queryIdentifier,u=[];let d=[];const f=nr(r);if(l==="default")for(const[p,g]of r.views.entries())d=d.concat(zm(g,n,s)),Um(g)&&(r.views.delete(p),g.query._queryParams.loadsAllData()||u.push(g.query));else{const p=r.views.get(l);p&&(d=d.concat(zm(p,n,s)),Um(p)&&(r.views.delete(l),p.query._queryParams.loadsAllData()||u.push(p.query)))}return f&&!nr(r)&&u.push(new(dC())(e._repo,e._path)),{removed:u,events:d}}function R_(r){const e=[];for(const n of r.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function ci(r,e){let n=null;for(const s of r.views.values())n=n||oC(s,e);return n}function N_(r,e){if(e._queryParams.loadsAllData())return zl(r);{const s=e._queryIdentifier;return r.views.get(s)}}function P_(r,e){return N_(r,e)!=null}function nr(r){return zl(r)!=null}function zl(r){for(const e of r.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cl;function gC(r){L(!Cl,"__referenceConstructor has already been defined"),Cl=r}function _C(){return L(Cl,"Reference.ts has not been loaded"),Cl}let vC=1;class Wm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new _e(null),this.pendingWriteTree_=GI(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function A_(r,e,n,s,l){return LI(r.pendingWriteTree_,e,n,s,l),l?Ci(r,new Cr(cd(),e,n)):[]}function yC(r,e,n,s){MI(r.pendingWriteTree_,e,n,s);const l=_e.fromObject(n);return Ci(r,new _i(cd(),e,l))}function Yn(r,e,n=!1){const s=bI(r.pendingWriteTree_,e);if(FI(r.pendingWriteTree_,e)){let u=new _e(null);return s.snap!=null?u=u.set(ce(),!0):Xe(s.children,d=>{u=u.set(new pe(d),!0)}),Ci(r,new yl(s.path,u,n))}else return[]}function jl(r,e,n){return Ci(r,new Cr(dd(),e,n))}function wC(r,e,n){const s=_e.fromObject(n);return Ci(r,new _i(dd(),e,s))}function EC(r,e){return Ci(r,new Ls(dd(),e))}function SC(r,e,n){const s=yd(r,n);if(s){const l=wd(s),u=l.path,d=l.queryId,f=pt(u,e),p=new Ls(hd(d),f);return Ed(r,u,p)}else return[]}function bc(r,e,n,s,l=!1){const u=e._path,d=r.syncPointTree_.get(u);let f=[];if(d&&(e._queryIdentifier==="default"||P_(d,e))){const p=mC(d,e,n,s);hC(d)&&(r.syncPointTree_=r.syncPointTree_.remove(u));const g=p.removed;if(f=p.events,!l){const w=g.findIndex(S=>S._queryParams.loadsAllData())!==-1,v=r.syncPointTree_.findOnPath(u,(S,R)=>nr(R));if(w&&!v){const S=r.syncPointTree_.subtree(u);if(!S.isEmpty()){const R=TC(S);for(let M=0;M<R.length;++M){const x=R[M],$=x.query,Ce=D_(r,x);r.listenProvider_.startListening(Is($),Tl(r,$),Ce.hashFn,Ce.onComplete)}}}!v&&g.length>0&&!s&&(w?r.listenProvider_.stopListening(Is(e),null):g.forEach(S=>{const R=r.queryToTagMap.get(Wl(S));r.listenProvider_.stopListening(Is(S),R)}))}kC(r,g)}return f}function IC(r,e,n,s){const l=yd(r,s);if(l!=null){const u=wd(l),d=u.path,f=u.queryId,p=pt(d,e),g=new Cr(hd(f),p,n);return Ed(r,d,g)}else return[]}function CC(r,e,n,s){const l=yd(r,s);if(l){const u=wd(l),d=u.path,f=u.queryId,p=pt(d,e),g=_e.fromObject(n),w=new _i(hd(f),p,g);return Ed(r,d,w)}else return[]}function Bm(r,e,n,s=!1){const l=e._path;let u=null,d=!1;r.syncPointTree_.foreachOnPath(l,(S,R)=>{const M=pt(S,l);u=u||ci(R,M),d=d||nr(R)});let f=r.syncPointTree_.get(l);f?(d=d||nr(f),u=u||ci(f,ce())):(f=new uC,r.syncPointTree_=r.syncPointTree_.set(l,f));let p;u!=null?p=!0:(p=!1,u=K.EMPTY_NODE,r.syncPointTree_.subtree(l).foreachChild((R,M)=>{const x=ci(M,ce());x&&(u=u.updateImmediateChild(R,x))}));const g=P_(f,e);if(!g&&!e._queryParams.loadsAllData()){const S=Wl(e);L(!r.queryToTagMap.has(S),"View does not exist, but we have a tag");const R=RC();r.queryToTagMap.set(S,R),r.tagToQueryMap.set(R,S)}const w=fd(r.pendingWriteTree_,l);let v=pC(f,e,n,w,u,p);if(!g&&!d&&!s){const S=N_(f,e);v=v.concat(NC(r,e,S))}return v}function vd(r,e,n){const l=r.pendingWriteTree_,u=r.syncPointTree_.findOnPath(e,(d,f)=>{const p=pt(d,e),g=ci(f,p);if(g)return g});return E_(l,e,u,n,!0)}function Ci(r,e){return O_(e,r.syncPointTree_,null,fd(r.pendingWriteTree_,ce()))}function O_(r,e,n,s){if(se(r.path))return x_(r,e,n,s);{const l=e.get(ce());n==null&&l!=null&&(n=ci(l,ce()));let u=[];const d=te(r.path),f=r.operationForChild(d),p=e.children.get(d);if(p&&f){const g=n?n.getImmediateChild(d):null,w=S_(s,d);u=u.concat(O_(f,p,g,w))}return l&&(u=u.concat(_d(l,r,s,n))),u}}function x_(r,e,n,s){const l=e.get(ce());n==null&&l!=null&&(n=ci(l,ce()));let u=[];return e.children.inorderTraversal((d,f)=>{const p=n?n.getImmediateChild(d):null,g=S_(s,d),w=r.operationForChild(d);w&&(u=u.concat(x_(w,f,p,g)))}),l&&(u=u.concat(_d(l,r,s,n))),u}function D_(r,e){const n=e.query,s=Tl(r,n);return{hashFn:()=>(sC(e)||K.EMPTY_NODE).hash(),onComplete:l=>{if(l==="ok")return s?SC(r,n._path,s):EC(r,n._path);{const u=wS(l,n);return bc(r,n,null,u)}}}}function Tl(r,e){const n=Wl(e);return r.queryToTagMap.get(n)}function Wl(r){return r._path.toString()+"$"+r._queryIdentifier}function yd(r,e){return r.tagToQueryMap.get(e)}function wd(r){const e=r.indexOf("$");return L(e!==-1&&e<r.length-1,"Bad queryKey."),{queryId:r.substr(e+1),path:new pe(r.substr(0,e))}}function Ed(r,e,n){const s=r.syncPointTree_.get(e);L(s,"Missing sync point for query tag that we're tracking");const l=fd(r.pendingWriteTree_,e);return _d(s,n,l,null)}function TC(r){return r.fold((e,n,s)=>{if(n&&nr(n))return[zl(n)];{let l=[];return n&&(l=R_(n)),Xe(s,(u,d)=>{l=l.concat(d)}),l}})}function Is(r){return r._queryParams.loadsAllData()&&!r._queryParams.isDefault()?new(_C())(r._repo,r._path):r}function kC(r,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const l=Wl(s),u=r.queryToTagMap.get(l);r.queryToTagMap.delete(l),r.tagToQueryMap.delete(u)}}}function RC(){return vC++}function NC(r,e,n){const s=e._path,l=Tl(r,e),u=D_(r,n),d=r.listenProvider_.startListening(Is(e),l,u.hashFn,u.onComplete),f=r.syncPointTree_.subtree(s);if(l)L(!nr(f.value),"If we're adding a query, it shouldn't be shadowed");else{const p=f.fold((g,w,v)=>{if(!se(g)&&w&&nr(w))return[zl(w).query];{let S=[];return w&&(S=S.concat(R_(w).map(R=>R.query))),Xe(v,(R,M)=>{S=S.concat(M)}),S}});for(let g=0;g<p.length;++g){const w=p[g];r.listenProvider_.stopListening(Is(w),Tl(r,w))}}return d}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Sd(n)}node(){return this.node_}}class Id{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Oe(this.path_,e);return new Id(this.syncTree_,n)}node(){return vd(this.syncTree_,this.path_)}}const PC=function(r){return r=r||{},r.timestamp=r.timestamp||new Date().getTime(),r},Vm=function(r,e,n){if(!r||typeof r!="object")return r;if(L(".sv"in r,"Unexpected leaf node or priority contents"),typeof r[".sv"]=="string")return AC(r[".sv"],e,n);if(typeof r[".sv"]=="object")return OC(r[".sv"],e);L(!1,"Unexpected server value: "+JSON.stringify(r,null,2))},AC=function(r,e,n){switch(r){case"timestamp":return n.timestamp;default:L(!1,"Unexpected server value: "+r)}},OC=function(r,e,n){r.hasOwnProperty("increment")||L(!1,"Unexpected server value: "+JSON.stringify(r,null,2));const s=r.increment;typeof s!="number"&&L(!1,"Unexpected increment value: "+s);const l=e.node();if(L(l!==null&&typeof l<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!l.isLeafNode())return s;const d=l.getValue();return typeof d!="number"?s:d+s},L_=function(r,e,n,s){return Cd(e,new Id(n,r),s)},M_=function(r,e,n){return Cd(r,new Sd(e),n)};function Cd(r,e,n){const s=r.getPriority().val(),l=Vm(s,e.getImmediateChild(".priority"),n);let u;if(r.isLeafNode()){const d=r,f=Vm(d.getValue(),e,n);return f!==d.getValue()||l!==d.getPriority().val()?new Ve(f,Ge(l)):r}else{const d=r;return u=d,l!==d.getPriority().val()&&(u=u.updatePriority(new Ve(l))),d.forEachChild(xe,(f,p)=>{const g=Cd(p,e.getImmediateChild(f),n);g!==p&&(u=u.updateImmediateChild(f,g))}),u}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function kd(r,e){let n=e instanceof pe?e:new pe(e),s=r,l=te(n);for(;l!==null;){const u=pi(s.node.children,l)||{children:{},childCount:0};s=new Td(l,s,u),n=ve(n),l=te(n)}return s}function Ti(r){return r.node.value}function b_(r,e){r.node.value=e,Fc(r)}function F_(r){return r.node.childCount>0}function xC(r){return Ti(r)===void 0&&!F_(r)}function Bl(r,e){Xe(r.node.children,(n,s)=>{e(new Td(n,r,s))})}function U_(r,e,n,s){n&&!s&&e(r),Bl(r,l=>{U_(l,e,!0,s)}),n&&s&&e(r)}function DC(r,e,n){let s=r.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function js(r){return new pe(r.parent===null?r.name:js(r.parent)+"/"+r.name)}function Fc(r){r.parent!==null&&LC(r.parent,r.name,r)}function LC(r,e,n){const s=xC(n),l=on(r.node.children,e);s&&l?(delete r.node.children[e],r.node.childCount--,Fc(r)):!s&&!l&&(r.node.children[e]=n.node,r.node.childCount++,Fc(r))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MC=/[\[\].#$\/\u0000-\u001F\u007F]/,bC=/[\[\].#$\u0000-\u001F\u007F]/,fc=10*1024*1024,Rd=function(r){return typeof r=="string"&&r.length!==0&&!MC.test(r)},z_=function(r){return typeof r=="string"&&r.length!==0&&!bC.test(r)},FC=function(r){return r&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),z_(r)},UC=function(r){return r===null||typeof r=="string"||typeof r=="number"&&!Zc(r)||r&&typeof r=="object"&&on(r,".sv")},zC=function(r,e,n,s){Vl(Ll(r,"value"),e,n)},Vl=function(r,e,n){const s=n instanceof pe?new eI(n,r):n;if(e===void 0)throw new Error(r+"contains undefined "+wr(s));if(typeof e=="function")throw new Error(r+"contains a function "+wr(s)+" with contents = "+e.toString());if(Zc(e))throw new Error(r+"contains "+e.toString()+" "+wr(s));if(typeof e=="string"&&e.length>fc/3&&Ml(e)>fc)throw new Error(r+"contains a string greater than "+fc+" utf8 bytes "+wr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let l=!1,u=!1;if(Xe(e,(d,f)=>{if(d===".value")l=!0;else if(d!==".priority"&&d!==".sv"&&(u=!0,!Rd(d)))throw new Error(r+" contains an invalid key ("+d+") "+wr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);tI(s,d),Vl(r,f,s),nI(s)}),l&&u)throw new Error(r+' contains ".value" child '+wr(s)+" in addition to actual children.")}},jC=function(r,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const u=As(s);for(let d=0;d<u.length;d++)if(!(u[d]===".priority"&&d===u.length-1)){if(!Rd(u[d]))throw new Error(r+"contains an invalid key ("+u[d]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(ZS);let l=null;for(n=0;n<e.length;n++){if(s=e[n],l!==null&&xt(l,s))throw new Error(r+"contains a path "+l.toString()+" that is ancestor of another path "+s.toString());l=s}},WC=function(r,e,n,s){const l=Ll(r,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(l+" must be an object containing the children to replace.");const u=[];Xe(e,(d,f)=>{const p=new pe(d);if(Vl(l,f,Oe(n,p)),id(p)===".priority"&&!UC(f))throw new Error(l+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");u.push(p)}),jC(l,u)},j_=function(r,e,n,s){if(!z_(n))throw new Error(Ll(r,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},BC=function(r,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),j_(r,e,n)},W_=function(r,e){if(te(e)===".info")throw new Error(r+" failed = Can't modify data under /.info/")},VC=function(r,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Rd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!FC(n))throw new Error(Ll(r,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function $l(r,e){let n=null;for(let s=0;s<e.length;s++){const l=e[s],u=l.getPath();n!==null&&!sd(u,n.path)&&(r.eventLists_.push(n),n=null),n===null&&(n={events:[],path:u}),n.events.push(l)}n&&r.eventLists_.push(n)}function B_(r,e,n){$l(r,n),V_(r,s=>sd(s,e))}function qt(r,e,n){$l(r,n),V_(r,s=>xt(s,e)||xt(e,s))}function V_(r,e){r.recursionDepth_++;let n=!0;for(let s=0;s<r.eventLists_.length;s++){const l=r.eventLists_[s];if(l){const u=l.path;e(u)?(HC(r.eventLists_[s]),r.eventLists_[s]=null):n=!1}}n&&(r.eventLists_=[]),r.recursionDepth_--}function HC(r){for(let e=0;e<r.events.length;e++){const n=r.events[e];if(n!==null){r.events[e]=null;const s=n.getEventRunner();ys&&Ye("event: "+n.toString()),Ii(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GC="repo_interrupt",qC=25;class KC{constructor(e,n,s,l){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=l,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new $C,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=vl(),this.transactionQueueTree_=new Td,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function QC(r,e,n){if(r.stats_=nd(r.repoInfo_),r.forceRestClient_||CS())r.server_=new _l(r.repoInfo_,(s,l,u,d)=>{$m(r,s,l,u,d)},r.authTokenProvider_,r.appCheckProvider_),setTimeout(()=>Hm(r,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{qe(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}r.persistentConnection_=new En(r.repoInfo_,e,(s,l,u,d)=>{$m(r,s,l,u,d)},s=>{Hm(r,s)},s=>{XC(r,s)},r.authTokenProvider_,r.appCheckProvider_,n),r.server_=r.persistentConnection_}r.authTokenProvider_.addTokenChangeListener(s=>{r.server_.refreshAuthToken(s)}),r.appCheckProvider_.addTokenChangeListener(s=>{r.server_.refreshAppCheckToken(s.token)}),r.statsReporter_=PS(r.repoInfo_,()=>new NI(r.stats_,r.server_)),r.infoData_=new II,r.infoSyncTree_=new Wm({startListening:(s,l,u,d)=>{let f=[];const p=r.infoData_.getNode(s._path);return p.isEmpty()||(f=jl(r.infoSyncTree_,s._path,p),setTimeout(()=>{d("ok")},0)),f},stopListening:()=>{}}),Nd(r,"connected",!1),r.serverSyncTree_=new Wm({startListening:(s,l,u,d)=>(r.server_.listen(s,u,l,(f,p)=>{const g=d(f,p);qt(r.eventQueue_,s._path,g)}),[]),stopListening:(s,l)=>{r.server_.unlisten(s,l)}})}function YC(r){const n=r.infoData_.getNode(new pe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Hl(r){return PC({timestamp:YC(r)})}function $m(r,e,n,s,l){r.dataUpdateCount++;const u=new pe(e);n=r.interceptServerDataCallback_?r.interceptServerDataCallback_(e,n):n;let d=[];if(l)if(s){const p=hl(n,g=>Ge(g));d=CC(r.serverSyncTree_,u,p,l)}else{const p=Ge(n);d=IC(r.serverSyncTree_,u,p,l)}else if(s){const p=hl(n,g=>Ge(g));d=wC(r.serverSyncTree_,u,p)}else{const p=Ge(n);d=jl(r.serverSyncTree_,u,p)}let f=u;d.length>0&&(f=yi(r,u)),qt(r.eventQueue_,f,d)}function Hm(r,e){Nd(r,"connected",e),e===!1&&eT(r)}function XC(r,e){Xe(e,(n,s)=>{Nd(r,n,s)})}function Nd(r,e,n){const s=new pe("/.info/"+e),l=Ge(n);r.infoData_.updateSnapshot(s,l);const u=jl(r.infoSyncTree_,s,l);qt(r.eventQueue_,s,u)}function Pd(r){return r.nextWriteId_++}function JC(r,e,n,s,l){Gl(r,"set",{path:e.toString(),value:n,priority:s});const u=Hl(r),d=Ge(n,s),f=vd(r.serverSyncTree_,e),p=M_(d,f,u),g=Pd(r),w=A_(r.serverSyncTree_,e,p,g,!0);$l(r.eventQueue_,w),r.server_.put(e.toString(),d.val(!0),(S,R)=>{const M=S==="ok";M||st("set at "+e+" failed: "+S);const x=Yn(r.serverSyncTree_,g,!M);qt(r.eventQueue_,e,x),Uc(r,l,S,R)});const v=Od(r,e);yi(r,v),qt(r.eventQueue_,v,[])}function ZC(r,e,n,s){Gl(r,"update",{path:e.toString(),value:n});let l=!0;const u=Hl(r),d={};if(Xe(n,(f,p)=>{l=!1,d[f]=L_(Oe(e,f),Ge(p),r.serverSyncTree_,u)}),l)Ye("update() called with empty data.  Don't do anything."),Uc(r,s,"ok",void 0);else{const f=Pd(r),p=yC(r.serverSyncTree_,e,d,f);$l(r.eventQueue_,p),r.server_.merge(e.toString(),n,(g,w)=>{const v=g==="ok";v||st("update at "+e+" failed: "+g);const S=Yn(r.serverSyncTree_,f,!v),R=S.length>0?yi(r,e):e;qt(r.eventQueue_,R,S),Uc(r,s,g,w)}),Xe(n,g=>{const w=Od(r,Oe(e,g));yi(r,w)}),qt(r.eventQueue_,e,[])}}function eT(r){Gl(r,"onDisconnectEvents");const e=Hl(r),n=vl();Pc(r.onDisconnect_,ce(),(l,u)=>{const d=L_(l,u,r.serverSyncTree_,e);__(n,l,d)});let s=[];Pc(n,ce(),(l,u)=>{s=s.concat(jl(r.serverSyncTree_,l,u));const d=Od(r,l);yi(r,d)}),r.onDisconnect_=vl(),qt(r.eventQueue_,ce(),s)}function tT(r,e,n){let s;te(e._path)===".info"?s=Bm(r.infoSyncTree_,e,n):s=Bm(r.serverSyncTree_,e,n),B_(r.eventQueue_,e._path,s)}function nT(r,e,n){let s;te(e._path)===".info"?s=bc(r.infoSyncTree_,e,n):s=bc(r.serverSyncTree_,e,n),B_(r.eventQueue_,e._path,s)}function rT(r){r.persistentConnection_&&r.persistentConnection_.interrupt(GC)}function Gl(r,...e){let n="";r.persistentConnection_&&(n=r.persistentConnection_.id+":"),Ye(n,...e)}function Uc(r,e,n,s){e&&Ii(()=>{if(n==="ok")e(null);else{const l=(n||"error").toUpperCase();let u=l;s&&(u+=": "+s);const d=new Error(u);d.code=l,e(d)}})}function $_(r,e,n){return vd(r.serverSyncTree_,e,n)||K.EMPTY_NODE}function Ad(r,e=r.transactionQueueTree_){if(e||ql(r,e),Ti(e)){const n=G_(r,e);L(n.length>0,"Sending zero length transaction queue"),n.every(l=>l.status===0)&&iT(r,js(e),n)}else F_(e)&&Bl(e,n=>{Ad(r,n)})}function iT(r,e,n){const s=n.map(g=>g.currentWriteId),l=$_(r,e,s);let u=l;const d=l.hash();for(let g=0;g<n.length;g++){const w=n[g];L(w.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),w.status=1,w.retryCount++;const v=pt(e,w.path);u=u.updateChild(v,w.currentOutputSnapshotRaw)}const f=u.val(!0),p=e;r.server_.put(p.toString(),f,g=>{Gl(r,"transaction put response",{path:p.toString(),status:g});let w=[];if(g==="ok"){const v=[];for(let S=0;S<n.length;S++)n[S].status=2,w=w.concat(Yn(r.serverSyncTree_,n[S].currentWriteId)),n[S].onComplete&&v.push(()=>n[S].onComplete(null,!0,n[S].currentOutputSnapshotResolved)),n[S].unwatcher();ql(r,kd(r.transactionQueueTree_,e)),Ad(r,r.transactionQueueTree_),qt(r.eventQueue_,e,w);for(let S=0;S<v.length;S++)Ii(v[S])}else{if(g==="datastale")for(let v=0;v<n.length;v++)n[v].status===3?n[v].status=4:n[v].status=0;else{st("transaction at "+p.toString()+" failed: "+g);for(let v=0;v<n.length;v++)n[v].status=4,n[v].abortReason=g}yi(r,e)}},d)}function yi(r,e){const n=H_(r,e),s=js(n),l=G_(r,n);return sT(r,l,s),s}function sT(r,e,n){if(e.length===0)return;const s=[];let l=[];const d=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const p=e[f],g=pt(n,p.path);let w=!1,v;if(L(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)w=!0,v=p.abortReason,l=l.concat(Yn(r.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=qC)w=!0,v="maxretry",l=l.concat(Yn(r.serverSyncTree_,p.currentWriteId,!0));else{const S=$_(r,p.path,d);p.currentInputSnapshot=S;const R=e[f].update(S.val());if(R!==void 0){Vl("transaction failed: Data returned ",R,p.path);let M=Ge(R);typeof R=="object"&&R!=null&&on(R,".priority")||(M=M.updatePriority(S.getPriority()));const $=p.currentWriteId,Ce=Hl(r),ye=M_(M,S,Ce);p.currentOutputSnapshotRaw=M,p.currentOutputSnapshotResolved=ye,p.currentWriteId=Pd(r),d.splice(d.indexOf($),1),l=l.concat(A_(r.serverSyncTree_,p.path,ye,p.currentWriteId,p.applyLocally)),l=l.concat(Yn(r.serverSyncTree_,$,!0))}else w=!0,v="nodata",l=l.concat(Yn(r.serverSyncTree_,p.currentWriteId,!0))}qt(r.eventQueue_,n,l),l=[],w&&(e[f].status=2,function(S){setTimeout(S,Math.floor(0))}(e[f].unwatcher),e[f].onComplete&&(v==="nodata"?s.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):s.push(()=>e[f].onComplete(new Error(v),!1,null))))}ql(r,r.transactionQueueTree_);for(let f=0;f<s.length;f++)Ii(s[f]);Ad(r,r.transactionQueueTree_)}function H_(r,e){let n,s=r.transactionQueueTree_;for(n=te(e);n!==null&&Ti(s)===void 0;)s=kd(s,n),e=ve(e),n=te(e);return s}function G_(r,e){const n=[];return q_(r,e,n),n.sort((s,l)=>s.order-l.order),n}function q_(r,e,n){const s=Ti(e);if(s)for(let l=0;l<s.length;l++)n.push(s[l]);Bl(e,l=>{q_(r,l,n)})}function ql(r,e){const n=Ti(e);if(n){let s=0;for(let l=0;l<n.length;l++)n[l].status!==2&&(n[s]=n[l],s++);n.length=s,b_(e,n.length>0?n:void 0)}Bl(e,s=>{ql(r,s)})}function Od(r,e){const n=js(H_(r,e)),s=kd(r.transactionQueueTree_,e);return DC(s,l=>{pc(r,l)}),pc(r,s),U_(s,l=>{pc(r,l)}),n}function pc(r,e){const n=Ti(e);if(n){const s=[];let l=[],u=-1;for(let d=0;d<n.length;d++)n[d].status===3||(n[d].status===1?(L(u===d-1,"All SENT items should be at beginning of queue."),u=d,n[d].status=3,n[d].abortReason="set"):(L(n[d].status===0,"Unexpected transaction status in abort"),n[d].unwatcher(),l=l.concat(Yn(r.serverSyncTree_,n[d].currentWriteId,!0)),n[d].onComplete&&s.push(n[d].onComplete.bind(null,new Error("set"),!1,null))));u===-1?b_(e,void 0):n.length=u+1,qt(r.eventQueue_,js(e),l);for(let d=0;d<s.length;d++)Ii(s[d])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oT(r){let e="";const n=r.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let l=n[s];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch{}e+="/"+l}return e}function lT(r){const e={};r.charAt(0)==="?"&&(r=r.substring(1));for(const n of r.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):st(`Invalid query segment '${n}' in query '${r}'`)}return e}const Gm=function(r,e){const n=aT(r),s=n.namespace;n.domain==="firebase.com"&&In(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&In("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||mS();const l=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new e_(n.host,n.secure,s,l,e,"",s!==n.subdomain),path:new pe(n.pathString)}},aT=function(r){let e="",n="",s="",l="",u="",d=!0,f="https",p=443;if(typeof r=="string"){let g=r.indexOf("//");g>=0&&(f=r.substring(0,g-1),r=r.substring(g+2));let w=r.indexOf("/");w===-1&&(w=r.length);let v=r.indexOf("?");v===-1&&(v=r.length),e=r.substring(0,Math.min(w,v)),w<v&&(l=oT(r.substring(w,v)));const S=lT(r.substring(Math.min(r.length,v)));g=e.indexOf(":"),g>=0?(d=f==="https"||f==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const R=e.slice(0,g);if(R.toLowerCase()==="localhost")n="localhost";else if(R.split(".").length<=2)n=R;else{const M=e.indexOf(".");s=e.substring(0,M).toLowerCase(),n=e.substring(M+1),u=s}"ns"in S&&(u=S.ns)}return{host:e,port:p,domain:n,subdomain:s,secure:d,scheme:f,pathString:l,namespace:u}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e,n,s,l){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=l}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+qe(this.snapshot.exportVal())}}class cT{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return L(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e,n,s,l){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=l}get key(){return se(this._path)?null:id(this._path)}get ref(){return new ir(this._repo,this._path)}get _queryIdentifier(){const e=Om(this._queryParams),n=ed(e);return n==="{}"?"default":n}get _queryObject(){return Om(this._queryParams)}isEqual(e){if(e=Tt(e),!(e instanceof xd))return!1;const n=this._repo===e._repo,s=sd(this._path,e._path),l=this._queryIdentifier===e._queryIdentifier;return n&&s&&l}toJSON(){return this.toString()}toString(){return this._repo.toString()+JS(this._path)}}class ir extends xd{constructor(e,n){super(e,n,new ud,!1)}get parent(){const e=u_(this._path);return e===null?null:new ir(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class kl{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new pe(e),s=zc(this.ref,e);return new kl(this._node.getChild(n),s,xe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,l)=>e(new kl(l,zc(this.ref,s),xe)))}hasChild(e){const n=new pe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Kl(r,e){return r=Tt(r),r._checkNotDeleted("ref"),e!==void 0?zc(r._root,e):r._root}function zc(r,e){return r=Tt(r),te(r._path)===null?BC("child","path",e):j_("child","path",e),new ir(r._repo,Oe(r._path,e))}function hT(r){return W_("remove",r._path),K_(r,null)}function K_(r,e){r=Tt(r),W_("set",r._path),zC("set",e,r._path);const n=new bs;return JC(r._repo,r._path,e,null,n.wrapCallback(()=>{})),n.promise}function fT(r,e){WC("update",e,r._path);const n=new bs;return ZC(r._repo,r._path,e,n.wrapCallback(()=>{})),n.promise}class Dd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new uT("value",this,new kl(e.snapshotNode,new ir(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new cT(this,e,n):null}matches(e){return e instanceof Dd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function pT(r,e,n,s,l){const u=new dT(n,void 0),d=new Dd(u);return tT(r._repo,r,d),()=>nT(r._repo,r,d)}function mT(r,e,n,s){return pT(r,"value",e)}cC(ir);gC(ir);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT="FIREBASE_DATABASE_EMULATOR_HOST",jc={};let _T=!1;function vT(r,e,n,s){r.repoInfo_=new e_(`${e}:${n}`,!1,r.repoInfo_.namespace,r.repoInfo_.webSocketOnly,r.repoInfo_.nodeAdmin,r.repoInfo_.persistenceKey,r.repoInfo_.includeNamespaceInQueryParams,!0),s&&(r.authTokenProvider_=s)}function yT(r,e,n,s,l){let u=s||r.options.databaseURL;u===void 0&&(r.options.projectId||In("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ye("Using default host for project ",r.options.projectId),u=`${r.options.projectId}-default-rtdb.firebaseio.com`);let d=Gm(u,l),f=d.repoInfo,p;typeof process<"u"&&fm&&(p=fm[gT]),p?(u=`http://${p}?ns=${f.namespace}`,d=Gm(u,l),f=d.repoInfo):d.repoInfo.secure;const g=new kS(r.name,r.options,e);VC("Invalid Firebase Database URL",d),se(d.path)||In("Database URL must point to the root of a Firebase Database (not including a child path).");const w=ET(f,r,g,new TS(r.name,n));return new ST(w,r)}function wT(r,e){const n=jc[e];(!n||n[r.key]!==r)&&In(`Database ${e}(${r.repoInfo_}) has already been deleted.`),rT(r),delete n[r.key]}function ET(r,e,n,s){let l=jc[e.name];l||(l={},jc[e.name]=l);let u=l[r.toURLString()];return u&&In("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),u=new KC(r,_T,n,s),l[r.toURLString()]=u,u}class ST{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(QC(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ir(this._repo,ce())),this._rootInternal}_delete(){return this._rootInternal!==null&&(wT(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&In("Cannot call "+e+" on a deleted database.")}}function IT(r=Jc(),e){const n=Or(r,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=U0("database");s&&CT(n,...s)}return n}function CT(r,e,n,s={}){r=Tt(r),r._checkNotDeleted("useEmulator"),r._instanceStarted&&In("Cannot call useEmulator() after instance has already been initialized.");const l=r._repoInternal;let u;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&In('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new sl(sl.OWNER);else if(s.mockUserToken){const d=typeof s.mockUserToken=="string"?s.mockUserToken:z0(s.mockUserToken,r.app.options.projectId);u=new sl(d)}vT(l,e,n,u)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TT(r){uS(Si),rn(new Gt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("auth-internal"),u=e.getProvider("app-check-internal");return yT(s,l,u,n)},"PUBLIC").setMultipleInstances(!0)),Dt(pm,mm,r),Dt(pm,mm,"esm2017")}En.prototype.simpleListen=function(r,e){this.sendRequest("q",{p:r},e)};En.prototype.echo=function(r,e){this.sendRequest("echo",{d:r},e)};TT();var kT="firebase",RT="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dt(kT,RT,"app");const Q_="@firebase/installations",Ld="0.6.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_=1e4,X_=`w:${Ld}`,J_="FIS_v2",NT="https://firebaseinstallations.googleapis.com/v1",PT=60*60*1e3,AT="installations",OT="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Rr=new Ar(AT,OT,xT);function Z_(r){return r instanceof sn&&r.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ev({projectId:r}){return`${NT}/projects/${r}/installations`}function tv(r){return{token:r.token,requestStatus:2,expiresIn:LT(r.expiresIn),creationTime:Date.now()}}async function nv(r,e){const s=(await e.json()).error;return Rr.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function rv({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function DT(r,{refreshToken:e}){const n=rv(r);return n.append("Authorization",MT(e)),n}async function iv(r){const e=await r();return e.status>=500&&e.status<600?r():e}function LT(r){return Number(r.replace("s","000"))}function MT(r){return`${J_} ${r}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bT({appConfig:r,heartbeatServiceProvider:e},{fid:n}){const s=ev(r),l=rv(r),u=e.getImmediate({optional:!0});if(u){const g=await u.getHeartbeatsHeader();g&&l.append("x-firebase-client",g)}const d={fid:n,authVersion:J_,appId:r.appId,sdkVersion:X_},f={method:"POST",headers:l,body:JSON.stringify(d)},p=await iv(()=>fetch(s,f));if(p.ok){const g=await p.json();return{fid:g.fid||n,registrationStatus:2,refreshToken:g.refreshToken,authToken:tv(g.authToken)}}else throw await nv("Create Installation",p)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sv(r){return new Promise(e=>{setTimeout(e,r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FT(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT=/^[cdef][\w-]{21}$/,Wc="";function zT(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=jT(r);return UT.test(n)?n:Wc}catch{return Wc}}function jT(r){return FT(r).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(r){return`${r.appName}!${r.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov=new Map;function lv(r,e){const n=Ql(r);av(n,e),WT(n,e)}function av(r,e){const n=ov.get(r);if(n)for(const s of n)s(e)}function WT(r,e){const n=BT();n&&n.postMessage({key:r,fid:e}),VT()}let Sr=null;function BT(){return!Sr&&"BroadcastChannel"in self&&(Sr=new BroadcastChannel("[Firebase] FID Change"),Sr.onmessage=r=>{av(r.data.key,r.data.fid)}),Sr}function VT(){ov.size===0&&Sr&&(Sr.close(),Sr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $T="firebase-installations-database",HT=1,Nr="firebase-installations-store";let mc=null;function Md(){return mc||(mc=bg($T,HT,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(Nr)}}})),mc}async function Rl(r,e){const n=Ql(r),l=(await Md()).transaction(Nr,"readwrite"),u=l.objectStore(Nr),d=await u.get(n);return await u.put(e,n),await l.done,(!d||d.fid!==e.fid)&&lv(r,e.fid),e}async function uv(r){const e=Ql(r),s=(await Md()).transaction(Nr,"readwrite");await s.objectStore(Nr).delete(e),await s.done}async function Yl(r,e){const n=Ql(r),l=(await Md()).transaction(Nr,"readwrite"),u=l.objectStore(Nr),d=await u.get(n),f=e(d);return f===void 0?await u.delete(n):await u.put(f,n),await l.done,f&&(!d||d.fid!==f.fid)&&lv(r,f.fid),f}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bd(r){let e;const n=await Yl(r.appConfig,s=>{const l=GT(s),u=qT(r,l);return e=u.registrationPromise,u.installationEntry});return n.fid===Wc?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function GT(r){const e=r||{fid:zT(),registrationStatus:0};return cv(e)}function qT(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const l=Promise.reject(Rr.create("app-offline"));return{installationEntry:e,registrationPromise:l}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=KT(r,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:QT(r)}:{installationEntry:e}}async function KT(r,e){try{const n=await bT(r,e);return Rl(r.appConfig,n)}catch(n){throw Z_(n)&&n.customData.serverCode===409?await uv(r.appConfig):await Rl(r.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function QT(r){let e=await qm(r.appConfig);for(;e.registrationStatus===1;)await sv(100),e=await qm(r.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await bd(r);return s||n}return e}function qm(r){return Yl(r,e=>{if(!e)throw Rr.create("installation-not-found");return cv(e)})}function cv(r){return YT(r)?{fid:r.fid,registrationStatus:0}:r}function YT(r){return r.registrationStatus===1&&r.registrationTime+Y_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XT({appConfig:r,heartbeatServiceProvider:e},n){const s=JT(r,n),l=DT(r,n),u=e.getImmediate({optional:!0});if(u){const g=await u.getHeartbeatsHeader();g&&l.append("x-firebase-client",g)}const d={installation:{sdkVersion:X_,appId:r.appId}},f={method:"POST",headers:l,body:JSON.stringify(d)},p=await iv(()=>fetch(s,f));if(p.ok){const g=await p.json();return tv(g)}else throw await nv("Generate Auth Token",p)}function JT(r,{fid:e}){return`${ev(r)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fd(r,e=!1){let n;const s=await Yl(r.appConfig,u=>{if(!dv(u))throw Rr.create("not-registered");const d=u.authToken;if(!e&&tk(d))return u;if(d.requestStatus===1)return n=ZT(r,e),u;{if(!navigator.onLine)throw Rr.create("app-offline");const f=rk(u);return n=ek(r,f),f}});return n?await n:s.authToken}async function ZT(r,e){let n=await Km(r.appConfig);for(;n.authToken.requestStatus===1;)await sv(100),n=await Km(r.appConfig);const s=n.authToken;return s.requestStatus===0?Fd(r,e):s}function Km(r){return Yl(r,e=>{if(!dv(e))throw Rr.create("not-registered");const n=e.authToken;return ik(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function ek(r,e){try{const n=await XT(r,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Rl(r.appConfig,s),n}catch(n){if(Z_(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await uv(r.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Rl(r.appConfig,s)}throw n}}function dv(r){return r!==void 0&&r.registrationStatus===2}function tk(r){return r.requestStatus===2&&!nk(r)}function nk(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+PT}function rk(r){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:e})}function ik(r){return r.requestStatus===1&&r.requestTime+Y_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sk(r){const e=r,{installationEntry:n,registrationPromise:s}=await bd(e);return s?s.catch(console.error):Fd(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ok(r,e=!1){const n=r;return await lk(n),(await Fd(n,e)).token}async function lk(r){const{registrationPromise:e}=await bd(r);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ak(r){if(!r||!r.options)throw gc("App Configuration");if(!r.name)throw gc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!r.options[n])throw gc(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function gc(r){return Rr.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv="installations",uk="installations-internal",ck=r=>{const e=r.getProvider("app").getImmediate(),n=ak(e),s=Or(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},dk=r=>{const e=r.getProvider("app").getImmediate(),n=Or(e,hv).getImmediate();return{getId:()=>sk(n),getToken:l=>ok(n,l)}};function hk(){rn(new Gt(hv,ck,"PUBLIC")),rn(new Gt(uk,dk,"PRIVATE"))}hk();Dt(Q_,Ld);Dt(Q_,Ld,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl="analytics",fk="firebase_id",pk="origin",mk=60*1e3,gk="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ud="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt=new bl("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _k={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ct=new Ar("analytics","Analytics",_k);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vk(r){if(!r.startsWith(Ud)){const e=Ct.create("invalid-gtag-resource",{gtagURL:r});return gt.warn(e.message),""}return r}function fv(r){return Promise.all(r.map(e=>e.catch(n=>n)))}function yk(r,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,e)),n}function wk(r,e){const n=yk("firebase-js-sdk-policy",{createScriptURL:vk}),s=document.createElement("script"),l=`${Ud}?l=${r}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(l):l,s.async=!0,document.head.appendChild(s)}function Ek(r){let e=[];return Array.isArray(window[r])?e=window[r]:window[r]=e,e}async function Sk(r,e,n,s,l,u){const d=s[l];try{if(d)await e[d];else{const p=(await fv(n)).find(g=>g.measurementId===l);p&&await e[p.appId]}}catch(f){gt.error(f)}r("config",l,u)}async function Ik(r,e,n,s,l){try{let u=[];if(l&&l.send_to){let d=l.send_to;Array.isArray(d)||(d=[d]);const f=await fv(n);for(const p of d){const g=f.find(v=>v.measurementId===p),w=g&&e[g.appId];if(w)u.push(w);else{u=[];break}}}u.length===0&&(u=Object.values(e)),await Promise.all(u),r("event",s,l||{})}catch(u){gt.error(u)}}function Ck(r,e,n,s){async function l(u,...d){try{if(u==="event"){const[f,p]=d;await Ik(r,e,n,f,p)}else if(u==="config"){const[f,p]=d;await Sk(r,e,n,s,f,p)}else if(u==="consent"){const[f,p]=d;r("consent",f,p)}else if(u==="get"){const[f,p,g]=d;r("get",f,p,g)}else if(u==="set"){const[f]=d;r("set",f)}else r(u,...d)}catch(f){gt.error(f)}}return l}function Tk(r,e,n,s,l){let u=function(...d){window[s].push(arguments)};return window[l]&&typeof window[l]=="function"&&(u=window[l]),window[l]=Ck(u,r,e,n),{gtagCore:u,wrappedGtag:window[l]}}function kk(r){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Ud)&&n.src.includes(r))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk=30,Nk=1e3;class Pk{constructor(e={},n=Nk){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const pv=new Pk;function Ak(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function Ok(r){var e;const{appId:n,apiKey:s}=r,l={method:"GET",headers:Ak(s)},u=gk.replace("{app-id}",n),d=await fetch(u,l);if(d.status!==200&&d.status!==304){let f="";try{const p=await d.json();!((e=p.error)===null||e===void 0)&&e.message&&(f=p.error.message)}catch{}throw Ct.create("config-fetch-failed",{httpStatus:d.status,responseMessage:f})}return d.json()}async function xk(r,e=pv,n){const{appId:s,apiKey:l,measurementId:u}=r.options;if(!s)throw Ct.create("no-app-id");if(!l){if(u)return{measurementId:u,appId:s};throw Ct.create("no-api-key")}const d=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},f=new Mk;return setTimeout(async()=>{f.abort()},mk),mv({appId:s,apiKey:l,measurementId:u},d,f,e)}async function mv(r,{throttleEndTimeMillis:e,backoffCount:n},s,l=pv){var u;const{appId:d,measurementId:f}=r;try{await Dk(s,e)}catch(p){if(f)return gt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:d,measurementId:f};throw p}try{const p=await Ok(r);return l.deleteThrottleMetadata(d),p}catch(p){const g=p;if(!Lk(g)){if(l.deleteThrottleMetadata(d),f)return gt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:d,measurementId:f};throw p}const w=Number((u=g==null?void 0:g.customData)===null||u===void 0?void 0:u.httpStatus)===503?im(n,l.intervalMillis,Rk):im(n,l.intervalMillis),v={throttleEndTimeMillis:Date.now()+w,backoffCount:n+1};return l.setThrottleMetadata(d,v),gt.debug(`Calling attemptFetch again in ${w} millis`),mv(r,v,s,l)}}function Dk(r,e){return new Promise((n,s)=>{const l=Math.max(e-Date.now(),0),u=setTimeout(n,l);r.addEventListener(()=>{clearTimeout(u),s(Ct.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Lk(r){if(!(r instanceof sn)||!r.customData)return!1;const e=Number(r.customData.httpStatus);return e===429||e===500||e===503||e===504}class Mk{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function bk(r,e,n,s,l){if(l&&l.global){r("event",n,s);return}else{const u=await e,d=Object.assign(Object.assign({},s),{send_to:u});r("event",n,d)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fk(){if(Og())try{await xg()}catch(r){return gt.warn(Ct.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return gt.warn(Ct.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Uk(r,e,n,s,l,u,d){var f;const p=xk(r);p.then(R=>{n[R.measurementId]=R.appId,r.options.measurementId&&R.measurementId!==r.options.measurementId&&gt.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${R.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(R=>gt.error(R)),e.push(p);const g=Fk().then(R=>{if(R)return s.getId()}),[w,v]=await Promise.all([p,g]);kk(u)||wk(u,w.measurementId),l("js",new Date);const S=(f=d==null?void 0:d.config)!==null&&f!==void 0?f:{};return S[pk]="firebase",S.update=!0,v!=null&&(S[fk]=v),l("config",w.measurementId,S),w.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(e){this.app=e}_delete(){return delete Cs[this.app.options.appId],Promise.resolve()}}let Cs={},Qm=[];const Ym={};let _c="dataLayer",jk="gtag",Xm,gv,Jm=!1;function Wk(){const r=[];if(Ng()&&r.push("This is a browser extension environment."),B0()||r.push("Cookies are not available."),r.length>0){const e=r.map((s,l)=>`(${l+1}) ${s}`).join(" "),n=Ct.create("invalid-analytics-context",{errorInfo:e});gt.warn(n.message)}}function Bk(r,e,n){Wk();const s=r.options.appId;if(!s)throw Ct.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)gt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ct.create("no-api-key");if(Cs[s]!=null)throw Ct.create("already-exists",{id:s});if(!Jm){Ek(_c);const{wrappedGtag:u,gtagCore:d}=Tk(Cs,Qm,Ym,_c,jk);gv=u,Xm=d,Jm=!0}return Cs[s]=Uk(r,Qm,Ym,e,Xm,_c,n),new zk(r)}function Vk(r=Jc()){r=Tt(r);const e=Or(r,Nl);return e.isInitialized()?e.getImmediate():$k(r)}function $k(r,e={}){const n=Or(r,Nl);if(n.isInitialized()){const l=n.getImmediate();if(Rs(e,n.getOptions()))return l;throw Ct.create("already-initialized")}return n.initialize({options:e})}function Hk(r,e,n,s){r=Tt(r),bk(gv,Cs[r.app.options.appId],e,n,s).catch(l=>gt.error(l))}const Zm="@firebase/analytics",eg="0.10.10";function Gk(){rn(new Gt(Nl,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("installations-internal").getImmediate();return Bk(s,l,n)},"PUBLIC")),rn(new Gt("analytics-internal",r,"PRIVATE")),Dt(Zm,eg),Dt(Zm,eg,"esm2017");function r(e){try{const n=e.getProvider(Nl).getImmediate();return{logEvent:(s,l,u)=>Hk(n,s,l,u)}}catch(n){throw Ct.create("interop-component-reg-failed",{reason:n})}}}Gk();function zd(r,e){var n={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(n[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(r);l<s.length;l++)e.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(r,s[l])&&(n[s[l]]=r[s[l]]);return n}function _v(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qk=_v,vv=new Ar("auth","Firebase",_v());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl=new bl("@firebase/auth");function Kk(r,...e){Pl.logLevel<=fe.WARN&&Pl.warn(`Auth (${Si}): ${r}`,...e)}function ol(r,...e){Pl.logLevel<=fe.ERROR&&Pl.error(`Auth (${Si}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(r,...e){throw jd(r,...e)}function tn(r,...e){return jd(r,...e)}function yv(r,e,n){const s=Object.assign(Object.assign({},qk()),{[e]:n});return new Ar("auth","Firebase",s).create(e,{appName:r.name})}function er(r){return yv(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function jd(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return vv.create(r,...e)}function Y(r,e,...n){if(!r)throw jd(e,...n)}function vn(r){const e="INTERNAL ASSERTION FAILED: "+r;throw ol(e),new Error(e)}function Tn(r,e){r||vn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function Qk(){return tg()==="http:"||tg()==="https:"}function tg(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Qk()||Ng()||"connection"in navigator)?navigator.onLine:!0}function Xk(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e,n){this.shortDelay=e,this.longDelay=n,Tn(n>e,"Short delay should be less than long delay!"),this.isMobile=Yc()||Pg()}get(){return Yk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(r,e){Tn(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk=new Ws(3e4,6e4);function Xl(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function ki(r,e,n,s,l={}){return Ev(r,l,async()=>{let u={},d={};s&&(e==="GET"?d=s:u={body:JSON.stringify(s)});const f=Ei(Object.assign({key:r.config.apiKey},d)).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const g=Object.assign({method:e,headers:p},u);return j0()||(g.referrerPolicy="no-referrer"),wv.fetch()(Iv(r,r.config.apiHost,n,f),g)})}async function Ev(r,e,n){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},Jk),e);try{const l=new e1(r),u=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const d=await u.json();if("needConfirmation"in d)throw il(r,"account-exists-with-different-credential",d);if(u.ok&&!("errorMessage"in d))return d;{const f=u.ok?d.errorMessage:d.error.message,[p,g]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw il(r,"credential-already-in-use",d);if(p==="EMAIL_EXISTS")throw il(r,"email-already-in-use",d);if(p==="USER_DISABLED")throw il(r,"user-disabled",d);const w=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw yv(r,w,g);Cn(r,w)}}catch(l){if(l instanceof sn)throw l;Cn(r,"network-request-failed",{message:String(l)})}}async function Sv(r,e,n,s,l={}){const u=await ki(r,e,n,s,l);return"mfaPendingCredential"in u&&Cn(r,"multi-factor-auth-required",{_serverResponse:u}),u}function Iv(r,e,n,s){const l=`${e}${n}?${s}`;return r.config.emulator?Wd(r.config,l):`${r.config.apiScheme}://${l}`}class e1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(tn(this.auth,"network-request-failed")),Zk.get())})}}function il(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const l=tn(r,e,s);return l.customData._tokenResponse=n,l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t1(r,e){return ki(r,"POST","/v1/accounts:delete",e)}async function Cv(r,e){return ki(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function n1(r,e=!1){const n=Tt(r),s=await n.getIdToken(e),l=Bd(s);Y(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const u=typeof l.firebase=="object"?l.firebase:void 0,d=u==null?void 0:u.sign_in_provider;return{claims:l,token:s,authTime:Ts(vc(l.auth_time)),issuedAtTime:Ts(vc(l.iat)),expirationTime:Ts(vc(l.exp)),signInProvider:d||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function vc(r){return Number(r)*1e3}function Bd(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return ol("JWT malformed, contained fewer than 3 sections"),null;try{const l=dl(n);return l?JSON.parse(l):(ol("Failed to decode base64 JWT payload"),null)}catch(l){return ol("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function ng(r){const e=Bd(r);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ms(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof sn&&r1(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function r1({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const l=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,l)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ts(this.lastLoginAt),this.creationTime=Ts(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Al(r){var e;const n=r.auth,s=await r.getIdToken(),l=await Ms(r,Cv(n,{idToken:s}));Y(l==null?void 0:l.users.length,n,"internal-error");const u=l.users[0];r._notifyReloadListener(u);const d=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?Tv(u.providerUserInfo):[],f=o1(r.providerData,d),p=r.isAnonymous,g=!(r.email&&u.passwordHash)&&!(f!=null&&f.length),w=p?g:!1,v={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:f,metadata:new Vc(u.createdAt,u.lastLoginAt),isAnonymous:w};Object.assign(r,v)}async function s1(r){const e=Tt(r);await Al(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function o1(r,e){return[...r.filter(s=>!e.some(l=>l.providerId===s.providerId)),...e]}function Tv(r){return r.map(e=>{var{providerId:n}=e,s=zd(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l1(r,e){const n=await Ev(r,{},async()=>{const s=Ei({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:u}=r.config,d=Iv(r,l,"/v1/token",`key=${u}`),f=await r._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",wv.fetch()(d,{method:"POST",headers:f,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function a1(r,e){return ki(r,"POST","/v2/accounts:revokeToken",Xl(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ng(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const n=ng(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:l,expiresIn:u}=await l1(e,n);this.updateTokensAndExpiration(s,l,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:l,expirationTime:u}=n,d=new di;return s&&(Y(typeof s=="string","internal-error",{appName:e}),d.refreshToken=s),l&&(Y(typeof l=="string","internal-error",{appName:e}),d.accessToken=l),u&&(Y(typeof u=="number","internal-error",{appName:e}),d.expirationTime=u),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new di,this.toJSON())}_performRefresh(){return vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(r,e){Y(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class yn{constructor(e){var{uid:n,auth:s,stsTokenManager:l}=e,u=zd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new i1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=l,this.accessToken=l.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new Vc(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const n=await Ms(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return n1(this,e)}reload(){return s1(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new yn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Al(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(gn(this.auth.app))return Promise.reject(er(this.auth));const e=await this.getIdToken();return await Ms(this,t1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,l,u,d,f,p,g,w;const v=(s=n.displayName)!==null&&s!==void 0?s:void 0,S=(l=n.email)!==null&&l!==void 0?l:void 0,R=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,M=(d=n.photoURL)!==null&&d!==void 0?d:void 0,x=(f=n.tenantId)!==null&&f!==void 0?f:void 0,$=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,Ce=(g=n.createdAt)!==null&&g!==void 0?g:void 0,ye=(w=n.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:De,emailVerified:V,isAnonymous:X,providerData:J,stsTokenManager:Te}=n;Y(De&&Te,e,"internal-error");const ze=di.fromJSON(this.name,Te);Y(typeof De=="string",e,"internal-error"),Hn(v,e.name),Hn(S,e.name),Y(typeof V=="boolean",e,"internal-error"),Y(typeof X=="boolean",e,"internal-error"),Hn(R,e.name),Hn(M,e.name),Hn(x,e.name),Hn($,e.name),Hn(Ce,e.name),Hn(ye,e.name);const nt=new yn({uid:De,auth:e,email:S,emailVerified:V,displayName:v,isAnonymous:X,photoURL:M,phoneNumber:R,tenantId:x,stsTokenManager:ze,createdAt:Ce,lastLoginAt:ye});return J&&Array.isArray(J)&&(nt.providerData=J.map(_t=>Object.assign({},_t))),$&&(nt._redirectEventId=$),nt}static async _fromIdTokenResponse(e,n,s=!1){const l=new di;l.updateFromServerResponse(n);const u=new yn({uid:n.localId,auth:e,stsTokenManager:l,isAnonymous:s});return await Al(u),u}static async _fromGetAccountInfoResponse(e,n,s){const l=n.users[0];Y(l.localId!==void 0,"internal-error");const u=l.providerUserInfo!==void 0?Tv(l.providerUserInfo):[],d=!(l.email&&l.passwordHash)&&!(u!=null&&u.length),f=new di;f.updateFromIdToken(s);const p=new yn({uid:l.localId,auth:e,stsTokenManager:f,isAnonymous:d}),g={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:u,metadata:new Vc(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(u!=null&&u.length)};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg=new Map;function wn(r){Tn(r instanceof Function,"Expected a class definition");let e=rg.get(r);return e?(Tn(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,rg.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}kv.type="NONE";const ig=kv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(r,e,n){return`firebase:${r}:${e}:${n}`}class hi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:l,name:u}=this.auth;this.fullUserKey=ll(this.userKey,l.apiKey,u),this.fullPersistenceKey=ll("persistence",l.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?yn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new hi(wn(ig),e,s);const l=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=l[0]||wn(ig);const d=ll(s,e.config.apiKey,e.name);let f=null;for(const g of n)try{const w=await g._get(d);if(w){const v=yn._fromJSON(e,w);g!==u&&(f=v),u=g;break}}catch{}const p=l.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new hi(u,e,s):(u=p[0],f&&await u._set(d,f.toJSON()),await Promise.all(n.map(async g=>{if(g!==u)try{await g._remove(d)}catch{}})),new hi(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Av(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Rv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xv(e))return"Blackberry";if(Dv(e))return"Webos";if(Nv(e))return"Safari";if((e.includes("chrome/")||Pv(e))&&!e.includes("edge/"))return"Chrome";if(Ov(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Rv(r=ot()){return/firefox\//i.test(r)}function Nv(r=ot()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Pv(r=ot()){return/crios\//i.test(r)}function Av(r=ot()){return/iemobile/i.test(r)}function Ov(r=ot()){return/android/i.test(r)}function xv(r=ot()){return/blackberry/i.test(r)}function Dv(r=ot()){return/webos/i.test(r)}function Vd(r=ot()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function u1(r=ot()){var e;return Vd(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function c1(){return W0()&&document.documentMode===10}function Lv(r=ot()){return Vd(r)||Ov(r)||Dv(r)||xv(r)||/windows phone/i.test(r)||Av(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mv(r,e=[]){let n;switch(r){case"Browser":n=sg(ot());break;case"Worker":n=`${sg(ot())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Si}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=u=>new Promise((d,f)=>{try{const p=e(u);d(p)}catch(p){f(p)}});s.onAbort=n,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const l of n)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h1(r,e={}){return ki(r,"GET","/v2/passwordPolicy",Xl(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f1=6;class p1{constructor(e){var n,s,l,u;const d=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=d.minPasswordLength)!==null&&n!==void 0?n:f1,d.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=d.maxPasswordLength),d.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=d.containsLowercaseCharacter),d.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=d.containsUppercaseCharacter),d.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=d.containsNumericCharacter),d.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=d.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(l=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&l!==void 0?l:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,l,u,d,f;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(n=p.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(l=p.containsLowercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(u=p.containsUppercaseLetter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(d=p.containsNumericCharacter)!==null&&d!==void 0?d:!0),p.isValid&&(p.isValid=(f=p.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),p}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),l&&(n.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let l=0;l<e.length;l++)s=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,l,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(e,n,s,l){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new og(this),this.idTokenSubscription=new og(this),this.beforeStateQueue=new d1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=wn(n)),this._initializationPromise=this.queue(async()=>{var s,l;if(!this._deleted&&(this.persistenceManager=await hi.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Cv(this,{idToken:e}),s=await yn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(gn(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let l=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,f=l==null?void 0:l._redirectEventId,p=await this.tryRedirectSignIn(e);(!d||d===f)&&(p!=null&&p.user)&&(l=p.user,u=!0)}if(!l)return this.directlySetCurrentUser(null);if(!l._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(l)}catch(d){l=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return l?this.reloadAndSetCurrentUserOrClear(l):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===l._redirectEventId?this.directlySetCurrentUser(l):this.reloadAndSetCurrentUserOrClear(l)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Al(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Xk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(gn(this.app))return Promise.reject(er(this));const n=e?Tt(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return gn(this.app)?Promise.reject(er(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return gn(this.app)?Promise.reject(er(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await h1(this),n=new p1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ar("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await a1(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&wn(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await hi.create(this,[wn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,l){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let d=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(f,this,"internal-error"),f.then(()=>{d||u(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,s,l);return()=>{d=!0,p()}}else{const p=e.addObserver(n);return()=>{d=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const l=await this._getAppCheckToken();return l&&(n["X-Firebase-AppCheck"]=l),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Kk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Jl(r){return Tt(r)}class og{constructor(e){this.auth=e,this.observer=null,this.addObserver=Q0(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $d={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function g1(r){$d=r}function _1(r){return $d.loadJS(r)}function v1(){return $d.gapiScript}function y1(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w1(r,e){const n=Or(r,"auth");if(n.isInitialized()){const l=n.getImmediate(),u=n.getOptions();if(Rs(u,e??{}))return l;Cn(l,"already-initialized")}return n.initialize({options:e})}function E1(r,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(wn);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function S1(r,e,n){const s=Jl(r);Y(s._canInitEmulator,s,"emulator-config-failed"),Y(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const l=!1,u=bv(e),{host:d,port:f}=I1(e),p=f===null?"":`:${f}`;s.config.emulator={url:`${u}//${d}${p}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:d,port:f,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:l})}),C1()}function bv(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function I1(r){const e=bv(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const u=l[1];return{host:u,port:lg(s.substr(u.length+1))}}else{const[u,d]=s.split(":");return{host:u,port:lg(d)}}}function lg(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function C1(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return vn("not implemented")}_getIdTokenResponse(e){return vn("not implemented")}_linkToIdToken(e,n){return vn("not implemented")}_getReauthenticationResolver(e){return vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fi(r,e){return Sv(r,"POST","/v1/accounts:signInWithIdp",Xl(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T1="http://localhost";class Pr extends Fv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Pr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Cn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:l}=n,u=zd(n,["providerId","signInMethod"]);if(!s||!l)return null;const d=new Pr(s,l);return d.idToken=u.idToken||void 0,d.accessToken=u.accessToken||void 0,d.secret=u.secret,d.nonce=u.nonce,d.pendingToken=u.pendingToken||null,d}_getIdTokenResponse(e){const n=this.buildRequest();return fi(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,fi(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fi(e,n)}buildRequest(){const e={requestUri:T1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ei(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs extends Uv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends Bs{constructor(){super("facebook.com")}static credential(e){return Pr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends Bs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Pr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return qn.credential(n,s)}catch{return null}}}qn.GOOGLE_SIGN_IN_METHOD="google.com";qn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends Bs{constructor(){super("github.com")}static credential(e){return Pr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.GITHUB_SIGN_IN_METHOD="github.com";Kn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends Bs{constructor(){super("twitter.com")}static credential(e,n){return Pr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Qn.credential(n,s)}catch{return null}}}Qn.TWITTER_SIGN_IN_METHOD="twitter.com";Qn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k1(r,e){return Sv(r,"POST","/v1/accounts:signUp",Xl(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,l=!1){const u=await yn._fromIdTokenResponse(e,s,l),d=ag(s);return new rr({user:u,providerId:d,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const l=ag(s);return new rr({user:e,providerId:l,_tokenResponse:s,operationType:n})}}function ag(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R1(r){var e;if(gn(r.app))return Promise.reject(er(r));const n=Jl(r);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new rr({user:n.currentUser,providerId:null,operationType:"signIn"});const s=await k1(n,{returnSecureToken:!0}),l=await rr._fromIdTokenResponse(n,"signIn",s,!0);return await n._updateCurrentUser(l.user),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol extends sn{constructor(e,n,s,l){var u;super(n.code,n.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,Ol.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,l){return new Ol(e,n,s,l)}}function zv(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Ol._fromErrorAndOperation(r,u,e,s):u})}async function N1(r,e,n=!1){const s=await Ms(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return rr._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P1(r,e,n=!1){const{auth:s}=r;if(gn(s.app))return Promise.reject(er(s));const l="reauthenticate";try{const u=await Ms(r,zv(s,l,e,r),n);Y(u.idToken,s,"internal-error");const d=Bd(u.idToken);Y(d,s,"internal-error");const{sub:f}=d;return Y(r.uid===f,s,"user-mismatch"),rr._forOperation(r,l,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Cn(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A1(r,e,n=!1){if(gn(r.app))return Promise.reject(er(r));const s="signIn",l=await zv(r,s,e),u=await rr._fromIdTokenResponse(r,s,l);return n||await r._updateCurrentUser(u.user),u}function O1(r,e,n,s){return Tt(r).onIdTokenChanged(e,n,s)}function x1(r,e,n){return Tt(r).beforeAuthStateChanged(e,n)}const xl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(xl,"1"),this.storage.removeItem(xl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D1=1e3,L1=10;class Wv extends jv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Lv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),l=this.localCache[n];s!==l&&e(n,l,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((d,f,p)=>{this.notifyListeners(d,p)});return}const s=e.key;n?this.detachListener():this.stopPolling();const l=()=>{const d=this.storage.getItem(s);!n&&this.localCache[s]===d||this.notifyListeners(s,d)},u=this.storage.getItem(s);c1()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,L1):l()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},D1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Wv.type="LOCAL";const M1=Wv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv extends jv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Bv.type="SESSION";const Vv=Bv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b1(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(l=>l.isListeningto(e));if(n)return n;const s=new Zl(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:l,data:u}=n.data,d=this.handlersMap[l];if(!(d!=null&&d.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const f=Array.from(d).map(async g=>g(n.origin,u)),p=await b1(f);n.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(r="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return r+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let u,d;return new Promise((f,p)=>{const g=Hd("",20);l.port1.start();const w=setTimeout(()=>{p(new Error("unsupported_event"))},s);d={messageChannel:l,onMessage(v){const S=v;if(S.data.eventId===g)switch(S.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),f(S.data.response);break;default:clearTimeout(w),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(d),l.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[l.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(){return window}function U1(r){nn().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $v(){return typeof nn().WorkerGlobalScope<"u"&&typeof nn().importScripts=="function"}async function z1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function j1(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function W1(){return $v()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv="firebaseLocalStorageDb",B1=1,Dl="firebaseLocalStorage",Gv="fbase_key";class Vs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ea(r,e){return r.transaction([Dl],e?"readwrite":"readonly").objectStore(Dl)}function V1(){const r=indexedDB.deleteDatabase(Hv);return new Vs(r).toPromise()}function $c(){const r=indexedDB.open(Hv,B1);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Dl,{keyPath:Gv})}catch(l){n(l)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Dl)?e(s):(s.close(),await V1(),e(await $c()))})})}async function ug(r,e,n){const s=ea(r,!0).put({[Gv]:e,value:n});return new Vs(s).toPromise()}async function $1(r,e){const n=ea(r,!1).get(e),s=await new Vs(n).toPromise();return s===void 0?null:s.value}function cg(r,e){const n=ea(r,!0).delete(e);return new Vs(n).toPromise()}const H1=800,G1=3;class qv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $c(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>G1)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $v()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zl._getInstance(W1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await z1(),!this.activeServiceWorker)return;this.sender=new F1(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||j1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $c();return await ug(e,xl,"1"),await cg(e,xl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>ug(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>$1(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>cg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const u=ea(l,!1).getAll();return new Vs(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:l,value:u}of e)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(u)&&(this.notifyListeners(l,u),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),H1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qv.type="LOCAL";const q1=qv;new Ws(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K1(r,e){return e?wn(e):(Y(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd extends Fv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Q1(r){return A1(r.auth,new Gd(r),r.bypassAuthState)}function Y1(r){const{auth:e,user:n}=r;return Y(n,e,"internal-error"),P1(n,new Gd(r),r.bypassAuthState)}async function X1(r){const{auth:e,user:n}=r;return Y(n,e,"internal-error"),N1(n,new Gd(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(e,n,s,l,u=!1){this.auth=e,this.resolver=s,this.user=l,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:l,tenantId:u,error:d,type:f}=e;if(d){this.reject(d);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Q1;case"linkViaPopup":case"linkViaRedirect":return X1;case"reauthViaPopup":case"reauthViaRedirect":return Y1;default:Cn(this.auth,"internal-error")}}resolve(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J1=new Ws(2e3,1e4);class li extends Kv{constructor(e,n,s,l,u){super(e,n,l,u),this.provider=s,this.authWindow=null,this.pollId=null,li.currentPopupAction&&li.currentPopupAction.cancel(),li.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){Tn(this.filter.length===1,"Popup operations only handle one event");const e=Hd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,li.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,J1.get())};e()}}li.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z1="pendingRedirect",al=new Map;class eR extends Kv{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=al.get(this.auth._key());if(!e){try{const s=await tR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}al.set(this.auth._key(),e)}return this.bypassAuthState||al.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tR(r,e){const n=iR(e),s=rR(r);if(!await s._isAvailable())return!1;const l=await s._get(n)==="true";return await s._remove(n),l}function nR(r,e){al.set(r._key(),e)}function rR(r){return wn(r._redirectPersistence)}function iR(r){return ll(Z1,r.config.apiKey,r.name)}async function sR(r,e,n=!1){if(gn(r.app))return Promise.reject(er(r));const s=Jl(r),l=K1(s,e),d=await new eR(s,l,n).execute();return d&&!n&&(delete d.user._redirectEventId,await s._persistUserIfCurrent(d.user),await s._setRedirectUser(null,e)),d}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR=10*60*1e3;class lR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!aR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Qv(e)){const l=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(tn(this.auth,l))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=oR&&this.cachedEventUids.clear(),this.cachedEventUids.has(dg(e))}saveEventToCache(e){this.cachedEventUids.add(dg(e)),this.lastProcessedEventTime=Date.now()}}function dg(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Qv({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function aR(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qv(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uR(r,e={}){return ki(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dR=/^https?/;async function hR(r){if(r.config.emulator)return;const{authorizedDomains:e}=await uR(r);for(const n of e)try{if(fR(n))return}catch{}Cn(r,"unauthorized-domain")}function fR(r){const e=Bc(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const d=new URL(r);return d.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&d.hostname===s}if(!dR.test(n))return!1;if(cR.test(r))return s===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR=new Ws(3e4,6e4);function hg(){const r=nn().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function mR(r){return new Promise((e,n)=>{var s,l,u;function d(){hg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hg(),n(tn(r,"network-request-failed"))},timeout:pR.get()})}if(!((l=(s=nn().gapi)===null||s===void 0?void 0:s.iframes)===null||l===void 0)&&l.Iframe)e(gapi.iframes.getContext());else if(!((u=nn().gapi)===null||u===void 0)&&u.load)d();else{const f=y1("iframefcb");return nn()[f]=()=>{gapi.load?d():n(tn(r,"network-request-failed"))},_1(`${v1()}?onload=${f}`).catch(p=>n(p))}}).catch(e=>{throw ul=null,e})}let ul=null;function gR(r){return ul=ul||mR(r),ul}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R=new Ws(5e3,15e3),vR="__/auth/iframe",yR="emulator/auth/iframe",wR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ER=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function SR(r){const e=r.config;Y(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?Wd(e,yR):`https://${r.config.authDomain}/${vR}`,s={apiKey:e.apiKey,appName:r.name,v:Si},l=ER.get(r.config.apiHost);l&&(s.eid=l);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${Ei(s).slice(1)}`}async function IR(r){const e=await gR(r),n=nn().gapi;return Y(n,r,"internal-error"),e.open({where:document.body,url:SR(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wR,dontclear:!0},s=>new Promise(async(l,u)=>{await s.restyle({setHideOnLeave:!1});const d=tn(r,"network-request-failed"),f=nn().setTimeout(()=>{u(d)},_R.get());function p(){nn().clearTimeout(f),l(s)}s.ping(p).then(p,()=>{u(d)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},TR=500,kR=600,RR="_blank",NR="http://localhost";class fg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function PR(r,e,n,s=TR,l=kR){const u=Math.max((window.screen.availHeight-l)/2,0).toString(),d=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const p=Object.assign(Object.assign({},CR),{width:s.toString(),height:l.toString(),top:u,left:d}),g=ot().toLowerCase();n&&(f=Pv(g)?RR:n),Rv(g)&&(e=e||NR,p.scrollbars="yes");const w=Object.entries(p).reduce((S,[R,M])=>`${S}${R}=${M},`,"");if(u1(g)&&f!=="_self")return AR(e||"",f),new fg(null);const v=window.open(e||"",f,w);Y(v,r,"popup-blocked");try{v.focus()}catch{}return new fg(v)}function AR(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR="__/auth/handler",xR="emulator/auth/handler",DR=encodeURIComponent("fac");async function pg(r,e,n,s,l,u){Y(r.config.authDomain,r,"auth-domain-config-required"),Y(r.config.apiKey,r,"invalid-api-key");const d={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:Si,eventId:l};if(e instanceof Uv){e.setDefaultLanguage(r.languageCode),d.providerId=e.providerId||"",wc(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,v]of Object.entries({}))d[w]=v}if(e instanceof Bs){const w=e.getScopes().filter(v=>v!=="");w.length>0&&(d.scopes=w.join(","))}r.tenantId&&(d.tid=r.tenantId);const f=d;for(const w of Object.keys(f))f[w]===void 0&&delete f[w];const p=await r._getAppCheckToken(),g=p?`#${DR}=${encodeURIComponent(p)}`:"";return`${LR(r)}?${Ei(f).slice(1)}${g}`}function LR({config:r}){return r.emulator?Wd(r,xR):`https://${r.authDomain}/${OR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc="webStorageSupport";class MR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vv,this._completeRedirectFn=sR,this._overrideRedirectResult=nR}async _openPopup(e,n,s,l){var u;Tn((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const d=await pg(e,n,s,Bc(),l);return PR(e,d,Hd())}async _openRedirect(e,n,s,l){await this._originValidation(e);const u=await pg(e,n,s,Bc(),l);return U1(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:l,promise:u}=this.eventManagers[n];return l?Promise.resolve(l):(Tn(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await IR(e),s=new lR(e);return n.register("authEvent",l=>(Y(l==null?void 0:l.authEvent,e,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(yc,{type:yc},l=>{var u;const d=(u=l==null?void 0:l[0])===null||u===void 0?void 0:u[yc];d!==void 0&&n(!!d),Cn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=hR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Lv()||Nv()||Vd()}}const bR=MR;var mg="@firebase/auth",gg="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UR(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function zR(r){rn(new Gt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:d,authDomain:f}=s.options;Y(d&&!d.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:d,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mv(r)},g=new m1(s,l,u,p);return E1(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),rn(new Gt("auth-internal",e=>{const n=Jl(e.getProvider("auth").getImmediate());return(s=>new FR(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dt(mg,gg,UR(r)),Dt(mg,gg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR=5*60,WR=Rg("authIdTokenMaxAge")||jR;let _g=null;const BR=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>WR)return;const l=n==null?void 0:n.token;_g!==l&&(_g=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function VR(r=Jc()){const e=Or(r,"auth");if(e.isInitialized())return e.getImmediate();const n=w1(r,{popupRedirectResolver:bR,persistence:[q1,M1,Vv]}),s=Rg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const d=BR(u.toString());x1(n,d,()=>d(n.currentUser)),O1(n,f=>d(f))}}const l=Tg("auth");return l&&S1(n,`http://${l}`),n}function $R(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}g1({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=l=>{const u=tn("internal-error");u.customData=l,n(u)},s.type="text/javascript",s.charset="UTF-8",$R().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});zR("Browser");const HR={apiKey:"AIzaSyB2SlnQ03tQfpjLMcleDimnz-wI6_BSXYE",authDomain:"my-multiplayer-dbf6b.firebaseapp.com",databaseURL:"https://my-multiplayer-dbf6b-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"my-multiplayer-dbf6b",storageBucket:"my-multiplayer-dbf6b.firebasestorage.app",messagingSenderId:"3902656578",appId:"1:3902656578:web:ea447bf59037a7d25b5ddb",measurementId:"G-3DVR8Y6VSM"},qd=Fg(HR);Vk(qd);const ta=IT(qd),Hc=VR(qd);R1(Hc).then(()=>{console.log("Signed in anonymously")}).catch(r=>{console.error("Error signing in anonymously:",r)});const GR=(r,e)=>{const n=Kl(ta,`players/${r}`);K_(n,e).then(()=>{console.log("Data written successfully!")}).catch(s=>{console.error("Error writing data:",s)})},vs=(r,e,n,s,l,u)=>{const d=Kl(ta,`players/${r}`);fT(d,{x:n,y:e,dir:s,vector:l,score:u}).then(()=>{console.log("Data updated successfully!")}).catch(f=>{console.error("Error updating data:",f)})},qR=r=>{const e=Kl(ta,`players/${r}`);hT(e).then(()=>{console.log("Data removed successfully!")}).catch(n=>{console.error("Error deleting data:",n)})};function Yv(r){const{rows:e,cols:n,players:s=[],myPlayer:l}=r,u=Ae.useRef(null),[d,f]=Ae.useState(0),[p,g]=Ae.useState(()=>P0(e,n)),[w,v]=Ae.useState(()=>0),[S,R]=Ae.useState(()=>0),[M,x]=Ae.useState(()=>2),[$,Ce]=Ae.useState(()=>0),ye=(V,X,J)=>{const Te=J===0||J===2,ze=Te?e:n;if(X<0||X>=ze)return V;const nt=Te?p[X][S].type:p[w][X].type;return nt===He.ROCK?V:(nt===He.WATER?x(4):x(J),Ce(_t=>(_t+1)%4),X)},De=V=>{switch(console.log("##keydown",V.key),V.key){case"ArrowUp":v(X=>{let J=X-1;return console.log("##up",X,J),ye(X,J,0)});break;case"ArrowRight":R(X=>{let J=X+1;return console.log("##right",X,J),ye(X,J,1)});break;case"ArrowDown":v(X=>{let J=X+1;return console.log("##down",X,J),ye(X,J,2)});break;case"ArrowLeft":R(X=>{let J=X-1;return console.log("##left",X,J),ye(X,J,3)});break}};return Ae.useEffect(()=>{p[w][S].type===He.FOOD&&setTimeout(()=>{let V=p;V[w][S].type=He.EMPTY,g(V),f(X=>X+1)},400),vs(l==null?void 0:l.id,w,S,M,$,d)},[w,S]),Ae.useEffect(()=>{var V;u&&((V=u==null?void 0:u.current)==null||V.focus(),v((l==null?void 0:l.y)||0),R((l==null?void 0:l.x)||0),f((l==null?void 0:l.score)||0))},[]),ie.jsxs("div",{tabIndex:"0",onKeyDown:De,ref:u,children:[ie.jsxs("div",{children:[" Score: ",d]}),ie.jsxs("div",{className:mn.board,children:[s==null?void 0:s.map(V=>ie.jsxs(ie.Fragment,{children:[ie.jsx("div",{className:`${mn.mycharacter} ${mn[wg[V==null?void 0:V.dir]]}`,style:{transform:`translate(${(V==null?void 0:V.x)*6}rem, ${(V==null?void 0:V.y)*6}rem)`,backgroundPosition:`${(V==null?void 0:V.vector)*-44}px 0`}},V.id),ie.jsxs("div",{className:mn.name,style:{transform:`translate(${(V==null?void 0:V.x)*6}rem, ${(V==null?void 0:V.y)*6}rem)`},children:[V.name," ",V.score]})]})),p.map((V,X)=>ie.jsx("div",{className:mn.row,children:V.map((J,Te)=>{const ze=w===X&&S===Te;return ie.jsx(qc,{isActive:ze,type:J==null?void 0:J.type},Te)})},X))]})]})}Yv.propTypes={rows:Vt.number.isRequired,cols:Vt.number.isRequired,players:Vt.array,myPlayer:Vt.object};const KR="_newPlayer_1dkh4_1",QR="_btnSubmit_1dkh4_10",vg={newPlayer:KR,btnSubmit:QR};function Xv(r){const{user:e,setNewPlayer:n}=r,[s,l]=Ae.useState(""),[u,d]=Ae.useState("male"),f=()=>{n(!1);const g={name:s,score:0,x:0,y:0,character:"",dir:2,vector:0};GR(e==null?void 0:e.id,g)},p=g=>{d(g.target.value)};return ie.jsxs("div",{className:vg.newPlayer,children:[ie.jsx("div",{children:"New player"}),ie.jsx("input",{type:"text",placeholder:"Enter your name",value:s,onChange:g=>l(g.target.value)}),ie.jsx("br",{}),ie.jsxs("select",{value:u,onChange:p,children:[ie.jsx("option",{value:"male",children:"Man"}),ie.jsx("option",{value:"female",children:"Women"}),ie.jsx("option",{value:"snake",children:"Snake"})]}),ie.jsx("button",{className:vg.btnSubmit,onClick:f,children:"Submit"})]})}Xv.propTypes={user:Vt.object.isRequired,setNewPlayer:Vt.func.isRequired};const _s=[["null","empty","empty","null","null","null","null","null","null","empty","empty","null"],["null","empty","empty","empty","null","null","null","null","empty","empty","empty","null"],["empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty"],["empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty"],["game","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty"],["empty","empty","empty","empty","water","water","water","water","empty","empty","empty","empty"],["empty","empty","empty","empty","water","water","water","water","empty","empty","empty","empty"],["empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty"],["empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty"]],YR="_home_1ko3v_1",XR="_hint_1ko3v_8",yg={home:YR,hint:XR};function Jv(r){const{players:e=[],myPlayer:n,setPage:s}=r,{x:l,y:u,id:d,score:f,vector:p}=n,g=Ae.useRef(null),[w,v]=Ae.useState(""),S=(x,$)=>x<0||x>=_s[0].length||$<0||$>=_s.length?!0:_s[$][x]!==He.WATER,R=()=>{_s[u][l]===He.GAME&&s("forest")},M=x=>{switch(console.log("##keydown",x.key),x.key){case"ArrowUp":if(!S(l,u-1))return;vs(d,u-1,l,0,(p+1)%4,f);break;case"ArrowRight":if(!S(l+1,u))return;vs(d,u,l+1,1,(p+1)%4,f);break;case"ArrowDown":if(!S(l,u+1))return;vs(d,u+1,l,2,(p+1)%4,f);break;case"ArrowLeft":if(!S(l-1,u))return;vs(d,u,l-1,3,(p+1)%4,f);break;case" ":break;case"Enter":R();break}};return Ae.useEffect(()=>{v(l===0&&u===4?"Press enter":"")},[l,u]),Ae.useEffect(()=>{var x;g&&((x=g==null?void 0:g.current)==null||x.focus())},[]),ie.jsxs("div",{className:yg.home,tabIndex:"0",onKeyDown:M,ref:g,children:["Living area",ie.jsxs("div",{className:yg.hint,children:["Hint: ",w]}),ie.jsxs("div",{children:[e==null?void 0:e.map(x=>ie.jsxs("div",{children:[ie.jsx("div",{className:`${mn.mycharacter} ${mn[wg[x==null?void 0:x.dir]]}`,style:{transform:`translate(${(x==null?void 0:x.x)*6}rem, ${(x==null?void 0:x.y)*6}rem)`,backgroundPosition:`${(x==null?void 0:x.vector)*-44}px 0`}}),ie.jsx("div",{className:mn.name,style:{transform:`translate(${(x==null?void 0:x.x)*6}rem, ${(x==null?void 0:x.y)*6}rem)`},children:x.name})]},x.id)),_s.map((x,$)=>ie.jsx("div",{className:mn.row,children:x.map((Ce,ye)=>ie.jsx(qc,{type:Ce},ye))},$))]})]})}Jv.propTypes={players:Vt.array,myPlayer:Vt.object,setPage:Vt.func};function JR(){const[r,e]=Ae.useState(!0),[n,s]=Ae.useState({}),[l,u]=Ae.useState([]),[d,f]=Ae.useState("home"),p=v=>{if(!v)return;let S=[];for(const R in v)R===n.id&&(s({id:R,...v[R]}),e(!1)),S.push({id:R,...v[R]});u(S)},g=()=>{qR(n==null?void 0:n.id),e(!0),s({})},w=()=>{d!=="home"&&f("home")};return Ae.useEffect(()=>Hc.onAuthStateChanged(S=>{if(S){let R=n;R.id=S.uid,s(R)}else console.log("User signed out")}),[Hc]),Ae.useEffect(()=>{const v=Kl(ta,"players"),S=mT(v,R=>{p(R.val())});return()=>S()},[]),r?ie.jsx(Xv,{user:n,setNewPlayer:e}):ie.jsxs(ie.Fragment,{children:[ie.jsxs("div",{style:{padding:"1rem",fontWeight:"bolder",display:"flex",justifyContent:"space-between"},children:[ie.jsx("button",{onClick:w,children:"Home"}),ie.jsx("button",{onClick:g,children:"Reset"})]}),d==="home"&&ie.jsx(Jv,{myPlayer:n,players:l,setPage:f}),d==="forest"&&ie.jsx(Yv,{rows:9,cols:12,myPlayer:n,players:l})]})}i0.createRoot(document.getElementById("root")).render(ie.jsx(Ae.StrictMode,{children:ie.jsx(JR,{})}));
