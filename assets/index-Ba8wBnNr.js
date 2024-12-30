(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=n(l);fetch(l.href,u)}})();function Gw(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Qu={exports:{}},ds={},Yu={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vp;function qw(){if(Vp)return X;Vp=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),v=Symbol.iterator;function S(I){return I===null||typeof I!="object"?null:(I=v&&I[v]||I["@@iterator"],typeof I=="function"?I:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,V={};function G(I,N,Y){this.props=I,this.context=N,this.refs=V,this.updater=Y||O}G.prototype.isReactComponent={},G.prototype.setState=function(I,N){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,N,"setState")},G.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function Ae(){}Ae.prototype=G.prototype;function Me(I,N,Y){this.props=I,this.context=N,this.refs=V,this.updater=Y||O}var Oe=Me.prototype=new Ae;Oe.constructor=Me,M(Oe,G.prototype),Oe.isPureReactComponent=!0;var ke=Array.isArray,nt=Object.prototype.hasOwnProperty,xe={current:null},Be={key:!0,ref:!0,__self:!0,__source:!0};function rt(I,N,Y){var ee,re={},ie=null,de=null;if(N!=null)for(ee in N.ref!==void 0&&(de=N.ref),N.key!==void 0&&(ie=""+N.key),N)nt.call(N,ee)&&!Be.hasOwnProperty(ee)&&(re[ee]=N[ee]);var le=arguments.length-2;if(le===1)re.children=Y;else if(1<le){for(var ve=Array(le),mt=0;mt<le;mt++)ve[mt]=arguments[mt+2];re.children=ve}if(I&&I.defaultProps)for(ee in le=I.defaultProps,le)re[ee]===void 0&&(re[ee]=le[ee]);return{$$typeof:r,type:I,key:ie,ref:de,props:re,_owner:xe.current}}function St(I,N){return{$$typeof:r,type:I.type,key:N,ref:I.ref,props:I.props,_owner:I._owner}}function Ot(I){return typeof I=="object"&&I!==null&&I.$$typeof===r}function nr(I){var N={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Y){return N[Y]})}var Ht=/\/+/g;function pt(I,N){return typeof I=="object"&&I!==null&&I.key!=null?nr(""+I.key):N.toString(36)}function xt(I,N,Y,ee,re){var ie=typeof I;(ie==="undefined"||ie==="boolean")&&(I=null);var de=!1;if(I===null)de=!0;else switch(ie){case"string":case"number":de=!0;break;case"object":switch(I.$$typeof){case r:case e:de=!0}}if(de)return de=I,re=re(de),I=ee===""?"."+pt(de,0):ee,ke(re)?(Y="",I!=null&&(Y=I.replace(Ht,"$&/")+"/"),xt(re,N,Y,"",function(mt){return mt})):re!=null&&(Ot(re)&&(re=St(re,Y+(!re.key||de&&de.key===re.key?"":(""+re.key).replace(Ht,"$&/")+"/")+I)),N.push(re)),1;if(de=0,ee=ee===""?".":ee+":",ke(I))for(var le=0;le<I.length;le++){ie=I[le];var ve=ee+pt(ie,le);de+=xt(ie,N,Y,ve,re)}else if(ve=S(I),typeof ve=="function")for(I=ve.call(I),le=0;!(ie=I.next()).done;)ie=ie.value,ve=ee+pt(ie,le++),de+=xt(ie,N,Y,ve,re);else if(ie==="object")throw N=String(I),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.");return de}function Gt(I,N,Y){if(I==null)return I;var ee=[],re=0;return xt(I,ee,"","",function(ie){return N.call(Y,ie,re++)}),ee}function it(I){if(I._status===-1){var N=I._result;N=N(),N.then(function(Y){(I._status===0||I._status===-1)&&(I._status=1,I._result=Y)},function(Y){(I._status===0||I._status===-1)&&(I._status=2,I._result=Y)}),I._status===-1&&(I._status=0,I._result=N)}if(I._status===1)return I._result.default;throw I._result}var Se={current:null},L={transition:null},H={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:L,ReactCurrentOwner:xe};function U(){throw Error("act(...) is not supported in production builds of React.")}return X.Children={map:Gt,forEach:function(I,N,Y){Gt(I,function(){N.apply(this,arguments)},Y)},count:function(I){var N=0;return Gt(I,function(){N++}),N},toArray:function(I){return Gt(I,function(N){return N})||[]},only:function(I){if(!Ot(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},X.Component=G,X.Fragment=n,X.Profiler=l,X.PureComponent=Me,X.StrictMode=s,X.Suspense=p,X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H,X.act=U,X.cloneElement=function(I,N,Y){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var ee=M({},I.props),re=I.key,ie=I.ref,de=I._owner;if(N!=null){if(N.ref!==void 0&&(ie=N.ref,de=xe.current),N.key!==void 0&&(re=""+N.key),I.type&&I.type.defaultProps)var le=I.type.defaultProps;for(ve in N)nt.call(N,ve)&&!Be.hasOwnProperty(ve)&&(ee[ve]=N[ve]===void 0&&le!==void 0?le[ve]:N[ve])}var ve=arguments.length-2;if(ve===1)ee.children=Y;else if(1<ve){le=Array(ve);for(var mt=0;mt<ve;mt++)le[mt]=arguments[mt+2];ee.children=le}return{$$typeof:r,type:I.type,key:re,ref:ie,props:ee,_owner:de}},X.createContext=function(I){return I={$$typeof:d,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:u,_context:I},I.Consumer=I},X.createElement=rt,X.createFactory=function(I){var N=rt.bind(null,I);return N.type=I,N},X.createRef=function(){return{current:null}},X.forwardRef=function(I){return{$$typeof:f,render:I}},X.isValidElement=Ot,X.lazy=function(I){return{$$typeof:w,_payload:{_status:-1,_result:I},_init:it}},X.memo=function(I,N){return{$$typeof:g,type:I,compare:N===void 0?null:N}},X.startTransition=function(I){var N=L.transition;L.transition={};try{I()}finally{L.transition=N}},X.unstable_act=U,X.useCallback=function(I,N){return Se.current.useCallback(I,N)},X.useContext=function(I){return Se.current.useContext(I)},X.useDebugValue=function(){},X.useDeferredValue=function(I){return Se.current.useDeferredValue(I)},X.useEffect=function(I,N){return Se.current.useEffect(I,N)},X.useId=function(){return Se.current.useId()},X.useImperativeHandle=function(I,N,Y){return Se.current.useImperativeHandle(I,N,Y)},X.useInsertionEffect=function(I,N){return Se.current.useInsertionEffect(I,N)},X.useLayoutEffect=function(I,N){return Se.current.useLayoutEffect(I,N)},X.useMemo=function(I,N){return Se.current.useMemo(I,N)},X.useReducer=function(I,N,Y){return Se.current.useReducer(I,N,Y)},X.useRef=function(I){return Se.current.useRef(I)},X.useState=function(I){return Se.current.useState(I)},X.useSyncExternalStore=function(I,N,Y){return Se.current.useSyncExternalStore(I,N,Y)},X.useTransition=function(){return Se.current.useTransition()},X.version="18.3.1",X}var Bp;function Gc(){return Bp||(Bp=1,Yu.exports=qw()),Yu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p;function Kw(){if($p)return ds;$p=1;var r=Gc(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(f,p,g){var w,v={},S=null,O=null;g!==void 0&&(S=""+g),p.key!==void 0&&(S=""+p.key),p.ref!==void 0&&(O=p.ref);for(w in p)s.call(p,w)&&!u.hasOwnProperty(w)&&(v[w]=p[w]);if(f&&f.defaultProps)for(w in p=f.defaultProps,p)v[w]===void 0&&(v[w]=p[w]);return{$$typeof:e,type:f,key:S,ref:O,props:v,_owner:l.current}}return ds.Fragment=n,ds.jsx=d,ds.jsxs=d,ds}var Hp;function Qw(){return Hp||(Hp=1,Qu.exports=Kw()),Qu.exports}var _e=Qw(),Jt=Gc(),Jo={},Xu={exports:{}},ct={},Ju={exports:{}},Zu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gp;function Yw(){return Gp||(Gp=1,function(r){function e(L,H){var U=L.length;L.push(H);e:for(;0<U;){var I=U-1>>>1,N=L[I];if(0<l(N,H))L[I]=H,L[U]=N,U=I;else break e}}function n(L){return L.length===0?null:L[0]}function s(L){if(L.length===0)return null;var H=L[0],U=L.pop();if(U!==H){L[0]=U;e:for(var I=0,N=L.length,Y=N>>>1;I<Y;){var ee=2*(I+1)-1,re=L[ee],ie=ee+1,de=L[ie];if(0>l(re,U))ie<N&&0>l(de,re)?(L[I]=de,L[ie]=U,I=ie):(L[I]=re,L[ee]=U,I=ee);else if(ie<N&&0>l(de,U))L[I]=de,L[ie]=U,I=ie;else break e}}return H}function l(L,H){var U=L.sortIndex-H.sortIndex;return U!==0?U:L.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var d=Date,f=d.now();r.unstable_now=function(){return d.now()-f}}var p=[],g=[],w=1,v=null,S=3,O=!1,M=!1,V=!1,G=typeof setTimeout=="function"?setTimeout:null,Ae=typeof clearTimeout=="function"?clearTimeout:null,Me=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Oe(L){for(var H=n(g);H!==null;){if(H.callback===null)s(g);else if(H.startTime<=L)s(g),H.sortIndex=H.expirationTime,e(p,H);else break;H=n(g)}}function ke(L){if(V=!1,Oe(L),!M)if(n(p)!==null)M=!0,it(nt);else{var H=n(g);H!==null&&Se(ke,H.startTime-L)}}function nt(L,H){M=!1,V&&(V=!1,Ae(rt),rt=-1),O=!0;var U=S;try{for(Oe(H),v=n(p);v!==null&&(!(v.expirationTime>H)||L&&!nr());){var I=v.callback;if(typeof I=="function"){v.callback=null,S=v.priorityLevel;var N=I(v.expirationTime<=H);H=r.unstable_now(),typeof N=="function"?v.callback=N:v===n(p)&&s(p),Oe(H)}else s(p);v=n(p)}if(v!==null)var Y=!0;else{var ee=n(g);ee!==null&&Se(ke,ee.startTime-H),Y=!1}return Y}finally{v=null,S=U,O=!1}}var xe=!1,Be=null,rt=-1,St=5,Ot=-1;function nr(){return!(r.unstable_now()-Ot<St)}function Ht(){if(Be!==null){var L=r.unstable_now();Ot=L;var H=!0;try{H=Be(!0,L)}finally{H?pt():(xe=!1,Be=null)}}else xe=!1}var pt;if(typeof Me=="function")pt=function(){Me(Ht)};else if(typeof MessageChannel<"u"){var xt=new MessageChannel,Gt=xt.port2;xt.port1.onmessage=Ht,pt=function(){Gt.postMessage(null)}}else pt=function(){G(Ht,0)};function it(L){Be=L,xe||(xe=!0,pt())}function Se(L,H){rt=G(function(){L(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(L){L.callback=null},r.unstable_continueExecution=function(){M||O||(M=!0,it(nt))},r.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):St=0<L?Math.floor(1e3/L):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_getFirstCallbackNode=function(){return n(p)},r.unstable_next=function(L){switch(S){case 1:case 2:case 3:var H=3;break;default:H=S}var U=S;S=H;try{return L()}finally{S=U}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(L,H){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var U=S;S=L;try{return H()}finally{S=U}},r.unstable_scheduleCallback=function(L,H,U){var I=r.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?I+U:I):U=I,L){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=U+N,L={id:w++,callback:H,priorityLevel:L,startTime:U,expirationTime:N,sortIndex:-1},U>I?(L.sortIndex=U,e(g,L),n(p)===null&&L===n(g)&&(V?(Ae(rt),rt=-1):V=!0,Se(ke,U-I))):(L.sortIndex=N,e(p,L),M||O||(M=!0,it(nt))),L},r.unstable_shouldYield=nr,r.unstable_wrapCallback=function(L){var H=S;return function(){var U=S;S=H;try{return L.apply(this,arguments)}finally{S=U}}}}(Zu)),Zu}var qp;function Xw(){return qp||(qp=1,Ju.exports=Yw()),Ju.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp;function Jw(){if(Kp)return ct;Kp=1;var r=Gc(),e=Xw();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function u(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(l[t]=i,t=0;t<i.length;t++)s.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},v={};function S(t){return p.call(v,t)?!0:p.call(w,t)?!1:g.test(t)?v[t]=!0:(w[t]=!0,!1)}function O(t,i,o,a){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return a?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function M(t,i,o,a){if(i===null||typeof i>"u"||O(t,i,o,a))return!0;if(a)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function V(t,i,o,a,c,h,m){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=a,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=m}var G={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){G[t]=new V(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];G[i]=new V(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){G[t]=new V(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){G[t]=new V(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){G[t]=new V(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){G[t]=new V(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){G[t]=new V(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){G[t]=new V(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){G[t]=new V(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ae=/[\-:]([a-z])/g;function Me(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(Ae,Me);G[i]=new V(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(Ae,Me);G[i]=new V(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(Ae,Me);G[i]=new V(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){G[t]=new V(t,1,!1,t.toLowerCase(),null,!1,!1)}),G.xlinkHref=new V("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){G[t]=new V(t,1,!1,t.toLowerCase(),null,!0,!0)});function Oe(t,i,o,a){var c=G.hasOwnProperty(i)?G[i]:null;(c!==null?c.type!==0:a||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,o,c,a)&&(o=null),a||c===null?S(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):c.mustUseProperty?t[c.propertyName]=o===null?c.type===3?!1:"":o:(i=c.attributeName,a=c.attributeNamespace,o===null?t.removeAttribute(i):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,a?t.setAttributeNS(a,i,o):t.setAttribute(i,o))))}var ke=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nt=Symbol.for("react.element"),xe=Symbol.for("react.portal"),Be=Symbol.for("react.fragment"),rt=Symbol.for("react.strict_mode"),St=Symbol.for("react.profiler"),Ot=Symbol.for("react.provider"),nr=Symbol.for("react.context"),Ht=Symbol.for("react.forward_ref"),pt=Symbol.for("react.suspense"),xt=Symbol.for("react.suspense_list"),Gt=Symbol.for("react.memo"),it=Symbol.for("react.lazy"),Se=Symbol.for("react.offscreen"),L=Symbol.iterator;function H(t){return t===null||typeof t!="object"?null:(t=L&&t[L]||t["@@iterator"],typeof t=="function"?t:null)}var U=Object.assign,I;function N(t){if(I===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+t}var Y=!1;function ee(t,i){if(!t||Y)return"";Y=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(k){var a=k}Reflect.construct(t,[],i)}else{try{i.call()}catch(k){a=k}t.call(i.prototype)}else{try{throw Error()}catch(k){a=k}t()}}catch(k){if(k&&a&&typeof k.stack=="string"){for(var c=k.stack.split(`
`),h=a.stack.split(`
`),m=c.length-1,_=h.length-1;1<=m&&0<=_&&c[m]!==h[_];)_--;for(;1<=m&&0<=_;m--,_--)if(c[m]!==h[_]){if(m!==1||_!==1)do if(m--,_--,0>_||c[m]!==h[_]){var y=`
`+c[m].replace(" at new "," at ");return t.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",t.displayName)),y}while(1<=m&&0<=_);break}}}finally{Y=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?N(t):""}function re(t){switch(t.tag){case 5:return N(t.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return t=ee(t.type,!1),t;case 11:return t=ee(t.type.render,!1),t;case 1:return t=ee(t.type,!0),t;default:return""}}function ie(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Be:return"Fragment";case xe:return"Portal";case St:return"Profiler";case rt:return"StrictMode";case pt:return"Suspense";case xt:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case nr:return(t.displayName||"Context")+".Consumer";case Ot:return(t._context.displayName||"Context")+".Provider";case Ht:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Gt:return i=t.displayName||null,i!==null?i:ie(t.type)||"Memo";case it:i=t._payload,t=t._init;try{return ie(t(i))}catch{}}return null}function de(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ie(i);case 8:return i===rt?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function le(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ve(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function mt(t){var i=ve(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),a=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(m){a=""+m,h.call(this,m)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(m){a=""+m},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Ws(t){t._valueTracker||(t._valueTracker=mt(t))}function qd(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),a="";return t&&(a=ve(t)?t.checked?"true":"false":t.value),t=a,t!==o?(i.setValue(t),!0):!1}function Vs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function na(t,i){var o=i.checked;return U({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function Kd(t,i){var o=i.defaultValue==null?"":i.defaultValue,a=i.checked!=null?i.checked:i.defaultChecked;o=le(i.value!=null?i.value:o),t._wrapperState={initialChecked:a,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Qd(t,i){i=i.checked,i!=null&&Oe(t,"checked",i,!1)}function ra(t,i){Qd(t,i);var o=le(i.value),a=i.type;if(o!=null)a==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(a==="submit"||a==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?ia(t,i.type,o):i.hasOwnProperty("defaultValue")&&ia(t,i.type,le(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Yd(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var a=i.type;if(!(a!=="submit"&&a!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function ia(t,i,o){(i!=="number"||Vs(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var ki=Array.isArray;function Or(t,i,o,a){if(t=t.options,i){i={};for(var c=0;c<o.length;c++)i["$"+o[c]]=!0;for(o=0;o<t.length;o++)c=i.hasOwnProperty("$"+t[o].value),t[o].selected!==c&&(t[o].selected=c),c&&a&&(t[o].defaultSelected=!0)}else{for(o=""+le(o),i=null,c=0;c<t.length;c++){if(t[c].value===o){t[c].selected=!0,a&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function sa(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return U({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Xd(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(ki(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:le(o)}}function Jd(t,i){var o=le(i.value),a=le(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),a!=null&&(t.defaultValue=""+a)}function Zd(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function eh(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function oa(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?eh(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Bs,th=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,a,c){MSApp.execUnsafeLocalFunction(function(){return t(i,o,a,c)})}:t}(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Bs=Bs||document.createElement("div"),Bs.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Bs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Ri(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Ni={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yv=["Webkit","ms","Moz","O"];Object.keys(Ni).forEach(function(t){Yv.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Ni[i]=Ni[t]})});function nh(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Ni.hasOwnProperty(t)&&Ni[t]?(""+i).trim():i+"px"}function rh(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var a=o.indexOf("--")===0,c=nh(o,i[o],a);o==="float"&&(o="cssFloat"),a?t.setProperty(o,c):t[o]=c}}var Xv=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function la(t,i){if(i){if(Xv[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function aa(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ua=null;function ca(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var da=null,xr=null,Dr=null;function ih(t){if(t=Yi(t)){if(typeof da!="function")throw Error(n(280));var i=t.stateNode;i&&(i=fo(i),da(t.stateNode,t.type,i))}}function sh(t){xr?Dr?Dr.push(t):Dr=[t]:xr=t}function oh(){if(xr){var t=xr,i=Dr;if(Dr=xr=null,ih(t),i)for(t=0;t<i.length;t++)ih(i[t])}}function lh(t,i){return t(i)}function ah(){}var ha=!1;function uh(t,i,o){if(ha)return t(i,o);ha=!0;try{return lh(t,i,o)}finally{ha=!1,(xr!==null||Dr!==null)&&(ah(),oh())}}function Pi(t,i){var o=t.stateNode;if(o===null)return null;var a=fo(o);if(a===null)return null;o=a[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var fa=!1;if(f)try{var Ai={};Object.defineProperty(Ai,"passive",{get:function(){fa=!0}}),window.addEventListener("test",Ai,Ai),window.removeEventListener("test",Ai,Ai)}catch{fa=!1}function Jv(t,i,o,a,c,h,m,_,y){var k=Array.prototype.slice.call(arguments,3);try{i.apply(o,k)}catch(P){this.onError(P)}}var Oi=!1,$s=null,Hs=!1,pa=null,Zv={onError:function(t){Oi=!0,$s=t}};function ey(t,i,o,a,c,h,m,_,y){Oi=!1,$s=null,Jv.apply(Zv,arguments)}function ty(t,i,o,a,c,h,m,_,y){if(ey.apply(this,arguments),Oi){if(Oi){var k=$s;Oi=!1,$s=null}else throw Error(n(198));Hs||(Hs=!0,pa=k)}}function rr(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,i.flags&4098&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function ch(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function dh(t){if(rr(t)!==t)throw Error(n(188))}function ny(t){var i=t.alternate;if(!i){if(i=rr(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,a=i;;){var c=o.return;if(c===null)break;var h=c.alternate;if(h===null){if(a=c.return,a!==null){o=a;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===o)return dh(c),t;if(h===a)return dh(c),i;h=h.sibling}throw Error(n(188))}if(o.return!==a.return)o=c,a=h;else{for(var m=!1,_=c.child;_;){if(_===o){m=!0,o=c,a=h;break}if(_===a){m=!0,a=c,o=h;break}_=_.sibling}if(!m){for(_=h.child;_;){if(_===o){m=!0,o=h,a=c;break}if(_===a){m=!0,a=h,o=c;break}_=_.sibling}if(!m)throw Error(n(189))}}if(o.alternate!==a)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function hh(t){return t=ny(t),t!==null?fh(t):null}function fh(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=fh(t);if(i!==null)return i;t=t.sibling}return null}var ph=e.unstable_scheduleCallback,mh=e.unstable_cancelCallback,ry=e.unstable_shouldYield,iy=e.unstable_requestPaint,Re=e.unstable_now,sy=e.unstable_getCurrentPriorityLevel,ma=e.unstable_ImmediatePriority,gh=e.unstable_UserBlockingPriority,Gs=e.unstable_NormalPriority,oy=e.unstable_LowPriority,_h=e.unstable_IdlePriority,qs=null,qt=null;function ly(t){if(qt&&typeof qt.onCommitFiberRoot=="function")try{qt.onCommitFiberRoot(qs,t,void 0,(t.current.flags&128)===128)}catch{}}var Dt=Math.clz32?Math.clz32:cy,ay=Math.log,uy=Math.LN2;function cy(t){return t>>>=0,t===0?32:31-(ay(t)/uy|0)|0}var Ks=64,Qs=4194304;function xi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ys(t,i){var o=t.pendingLanes;if(o===0)return 0;var a=0,c=t.suspendedLanes,h=t.pingedLanes,m=o&268435455;if(m!==0){var _=m&~c;_!==0?a=xi(_):(h&=m,h!==0&&(a=xi(h)))}else m=o&~c,m!==0?a=xi(m):h!==0&&(a=xi(h));if(a===0)return 0;if(i!==0&&i!==a&&!(i&c)&&(c=a&-a,h=i&-i,c>=h||c===16&&(h&4194240)!==0))return i;if(a&4&&(a|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=a;0<i;)o=31-Dt(i),c=1<<o,a|=t[o],i&=~c;return a}function dy(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hy(t,i){for(var o=t.suspendedLanes,a=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var m=31-Dt(h),_=1<<m,y=c[m];y===-1?(!(_&o)||_&a)&&(c[m]=dy(_,i)):y<=i&&(t.expiredLanes|=_),h&=~_}}function ga(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function vh(){var t=Ks;return Ks<<=1,!(Ks&4194240)&&(Ks=64),t}function _a(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Di(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Dt(i),t[i]=o}function fy(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var a=t.eventTimes;for(t=t.expirationTimes;0<o;){var c=31-Dt(o),h=1<<c;i[c]=0,a[c]=-1,t[c]=-1,o&=~h}}function va(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var a=31-Dt(o),c=1<<a;c&i|t[a]&i&&(t[a]|=i),o&=~c}}var ae=0;function yh(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var wh,ya,Eh,Sh,Ih,wa=!1,Xs=[],In=null,Cn=null,Tn=null,Li=new Map,Mi=new Map,kn=[],py="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ch(t,i){switch(t){case"focusin":case"focusout":In=null;break;case"dragenter":case"dragleave":Cn=null;break;case"mouseover":case"mouseout":Tn=null;break;case"pointerover":case"pointerout":Li.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mi.delete(i.pointerId)}}function bi(t,i,o,a,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:a,nativeEvent:h,targetContainers:[c]},i!==null&&(i=Yi(i),i!==null&&ya(i)),t):(t.eventSystemFlags|=a,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function my(t,i,o,a,c){switch(i){case"focusin":return In=bi(In,t,i,o,a,c),!0;case"dragenter":return Cn=bi(Cn,t,i,o,a,c),!0;case"mouseover":return Tn=bi(Tn,t,i,o,a,c),!0;case"pointerover":var h=c.pointerId;return Li.set(h,bi(Li.get(h)||null,t,i,o,a,c)),!0;case"gotpointercapture":return h=c.pointerId,Mi.set(h,bi(Mi.get(h)||null,t,i,o,a,c)),!0}return!1}function Th(t){var i=ir(t.target);if(i!==null){var o=rr(i);if(o!==null){if(i=o.tag,i===13){if(i=ch(o),i!==null){t.blockedOn=i,Ih(t.priority,function(){Eh(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Js(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Sa(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var a=new o.constructor(o.type,o);ua=a,o.target.dispatchEvent(a),ua=null}else return i=Yi(o),i!==null&&ya(i),t.blockedOn=o,!1;i.shift()}return!0}function kh(t,i,o){Js(t)&&o.delete(i)}function gy(){wa=!1,In!==null&&Js(In)&&(In=null),Cn!==null&&Js(Cn)&&(Cn=null),Tn!==null&&Js(Tn)&&(Tn=null),Li.forEach(kh),Mi.forEach(kh)}function Fi(t,i){t.blockedOn===i&&(t.blockedOn=null,wa||(wa=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,gy)))}function Ui(t){function i(c){return Fi(c,t)}if(0<Xs.length){Fi(Xs[0],t);for(var o=1;o<Xs.length;o++){var a=Xs[o];a.blockedOn===t&&(a.blockedOn=null)}}for(In!==null&&Fi(In,t),Cn!==null&&Fi(Cn,t),Tn!==null&&Fi(Tn,t),Li.forEach(i),Mi.forEach(i),o=0;o<kn.length;o++)a=kn[o],a.blockedOn===t&&(a.blockedOn=null);for(;0<kn.length&&(o=kn[0],o.blockedOn===null);)Th(o),o.blockedOn===null&&kn.shift()}var Lr=ke.ReactCurrentBatchConfig,Zs=!0;function _y(t,i,o,a){var c=ae,h=Lr.transition;Lr.transition=null;try{ae=1,Ea(t,i,o,a)}finally{ae=c,Lr.transition=h}}function vy(t,i,o,a){var c=ae,h=Lr.transition;Lr.transition=null;try{ae=4,Ea(t,i,o,a)}finally{ae=c,Lr.transition=h}}function Ea(t,i,o,a){if(Zs){var c=Sa(t,i,o,a);if(c===null)za(t,i,a,eo,o),Ch(t,a);else if(my(c,t,i,o,a))a.stopPropagation();else if(Ch(t,a),i&4&&-1<py.indexOf(t)){for(;c!==null;){var h=Yi(c);if(h!==null&&wh(h),h=Sa(t,i,o,a),h===null&&za(t,i,a,eo,o),h===c)break;c=h}c!==null&&a.stopPropagation()}else za(t,i,a,null,o)}}var eo=null;function Sa(t,i,o,a){if(eo=null,t=ca(a),t=ir(t),t!==null)if(i=rr(t),i===null)t=null;else if(o=i.tag,o===13){if(t=ch(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return eo=t,null}function Rh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sy()){case ma:return 1;case gh:return 4;case Gs:case oy:return 16;case _h:return 536870912;default:return 16}default:return 16}}var Rn=null,Ia=null,to=null;function Nh(){if(to)return to;var t,i=Ia,o=i.length,a,c="value"in Rn?Rn.value:Rn.textContent,h=c.length;for(t=0;t<o&&i[t]===c[t];t++);var m=o-t;for(a=1;a<=m&&i[o-a]===c[h-a];a++);return to=c.slice(t,1<a?1-a:void 0)}function no(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ro(){return!0}function Ph(){return!1}function gt(t){function i(o,a,c,h,m){this._reactName=o,this._targetInst=c,this.type=a,this.nativeEvent=h,this.target=m,this.currentTarget=null;for(var _ in t)t.hasOwnProperty(_)&&(o=t[_],this[_]=o?o(h):h[_]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ro:Ph,this.isPropagationStopped=Ph,this}return U(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ro)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ro)},persist:function(){},isPersistent:ro}),i}var Mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ca=gt(Mr),zi=U({},Mr,{view:0,detail:0}),yy=gt(zi),Ta,ka,ji,io=U({},zi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Na,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ji&&(ji&&t.type==="mousemove"?(Ta=t.screenX-ji.screenX,ka=t.screenY-ji.screenY):ka=Ta=0,ji=t),Ta)},movementY:function(t){return"movementY"in t?t.movementY:ka}}),Ah=gt(io),wy=U({},io,{dataTransfer:0}),Ey=gt(wy),Sy=U({},zi,{relatedTarget:0}),Ra=gt(Sy),Iy=U({},Mr,{animationName:0,elapsedTime:0,pseudoElement:0}),Cy=gt(Iy),Ty=U({},Mr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ky=gt(Ty),Ry=U({},Mr,{data:0}),Oh=gt(Ry),Ny={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Py={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ay={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Oy(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Ay[t])?!!i[t]:!1}function Na(){return Oy}var xy=U({},zi,{key:function(t){if(t.key){var i=Ny[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=no(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Py[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Na,charCode:function(t){return t.type==="keypress"?no(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?no(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Dy=gt(xy),Ly=U({},io,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xh=gt(Ly),My=U({},zi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Na}),by=gt(My),Fy=U({},Mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Uy=gt(Fy),zy=U({},io,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),jy=gt(zy),Wy=[9,13,27,32],Pa=f&&"CompositionEvent"in window,Wi=null;f&&"documentMode"in document&&(Wi=document.documentMode);var Vy=f&&"TextEvent"in window&&!Wi,Dh=f&&(!Pa||Wi&&8<Wi&&11>=Wi),Lh=" ",Mh=!1;function bh(t,i){switch(t){case"keyup":return Wy.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var br=!1;function By(t,i){switch(t){case"compositionend":return Fh(i);case"keypress":return i.which!==32?null:(Mh=!0,Lh);case"textInput":return t=i.data,t===Lh&&Mh?null:t;default:return null}}function $y(t,i){if(br)return t==="compositionend"||!Pa&&bh(t,i)?(t=Nh(),to=Ia=Rn=null,br=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Dh&&i.locale!=="ko"?null:i.data;default:return null}}var Hy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uh(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Hy[t.type]:i==="textarea"}function zh(t,i,o,a){sh(a),i=uo(i,"onChange"),0<i.length&&(o=new Ca("onChange","change",null,o,a),t.push({event:o,listeners:i}))}var Vi=null,Bi=null;function Gy(t){rf(t,0)}function so(t){var i=Wr(t);if(qd(i))return t}function qy(t,i){if(t==="change")return i}var jh=!1;if(f){var Aa;if(f){var Oa="oninput"in document;if(!Oa){var Wh=document.createElement("div");Wh.setAttribute("oninput","return;"),Oa=typeof Wh.oninput=="function"}Aa=Oa}else Aa=!1;jh=Aa&&(!document.documentMode||9<document.documentMode)}function Vh(){Vi&&(Vi.detachEvent("onpropertychange",Bh),Bi=Vi=null)}function Bh(t){if(t.propertyName==="value"&&so(Bi)){var i=[];zh(i,Bi,t,ca(t)),uh(Gy,i)}}function Ky(t,i,o){t==="focusin"?(Vh(),Vi=i,Bi=o,Vi.attachEvent("onpropertychange",Bh)):t==="focusout"&&Vh()}function Qy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return so(Bi)}function Yy(t,i){if(t==="click")return so(i)}function Xy(t,i){if(t==="input"||t==="change")return so(i)}function Jy(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Lt=typeof Object.is=="function"?Object.is:Jy;function $i(t,i){if(Lt(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),a=Object.keys(i);if(o.length!==a.length)return!1;for(a=0;a<o.length;a++){var c=o[a];if(!p.call(i,c)||!Lt(t[c],i[c]))return!1}return!0}function $h(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Hh(t,i){var o=$h(t);t=0;for(var a;o;){if(o.nodeType===3){if(a=t+o.textContent.length,t<=i&&a>=i)return{node:o,offset:i-t};t=a}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=$h(o)}}function Gh(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Gh(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function qh(){for(var t=window,i=Vs();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=Vs(t.document)}return i}function xa(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Zy(t){var i=qh(),o=t.focusedElem,a=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&Gh(o.ownerDocument.documentElement,o)){if(a!==null&&xa(o)){if(i=a.start,t=a.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=o.textContent.length,h=Math.min(a.start,c);a=a.end===void 0?h:Math.min(a.end,c),!t.extend&&h>a&&(c=a,a=h,h=c),c=Hh(o,h);var m=Hh(o,a);c&&m&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==m.node||t.focusOffset!==m.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),h>a?(t.addRange(i),t.extend(m.node,m.offset)):(i.setEnd(m.node,m.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ew=f&&"documentMode"in document&&11>=document.documentMode,Fr=null,Da=null,Hi=null,La=!1;function Kh(t,i,o){var a=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;La||Fr==null||Fr!==Vs(a)||(a=Fr,"selectionStart"in a&&xa(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Hi&&$i(Hi,a)||(Hi=a,a=uo(Da,"onSelect"),0<a.length&&(i=new Ca("onSelect","select",null,i,o),t.push({event:i,listeners:a}),i.target=Fr)))}function oo(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var Ur={animationend:oo("Animation","AnimationEnd"),animationiteration:oo("Animation","AnimationIteration"),animationstart:oo("Animation","AnimationStart"),transitionend:oo("Transition","TransitionEnd")},Ma={},Qh={};f&&(Qh=document.createElement("div").style,"AnimationEvent"in window||(delete Ur.animationend.animation,delete Ur.animationiteration.animation,delete Ur.animationstart.animation),"TransitionEvent"in window||delete Ur.transitionend.transition);function lo(t){if(Ma[t])return Ma[t];if(!Ur[t])return t;var i=Ur[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Qh)return Ma[t]=i[o];return t}var Yh=lo("animationend"),Xh=lo("animationiteration"),Jh=lo("animationstart"),Zh=lo("transitionend"),ef=new Map,tf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nn(t,i){ef.set(t,i),u(i,[t])}for(var ba=0;ba<tf.length;ba++){var Fa=tf[ba],tw=Fa.toLowerCase(),nw=Fa[0].toUpperCase()+Fa.slice(1);Nn(tw,"on"+nw)}Nn(Yh,"onAnimationEnd"),Nn(Xh,"onAnimationIteration"),Nn(Jh,"onAnimationStart"),Nn("dblclick","onDoubleClick"),Nn("focusin","onFocus"),Nn("focusout","onBlur"),Nn(Zh,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gi));function nf(t,i,o){var a=t.type||"unknown-event";t.currentTarget=o,ty(a,i,void 0,t),t.currentTarget=null}function rf(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var a=t[o],c=a.event;a=a.listeners;e:{var h=void 0;if(i)for(var m=a.length-1;0<=m;m--){var _=a[m],y=_.instance,k=_.currentTarget;if(_=_.listener,y!==h&&c.isPropagationStopped())break e;nf(c,_,k),h=y}else for(m=0;m<a.length;m++){if(_=a[m],y=_.instance,k=_.currentTarget,_=_.listener,y!==h&&c.isPropagationStopped())break e;nf(c,_,k),h=y}}}if(Hs)throw t=pa,Hs=!1,pa=null,t}function me(t,i){var o=i[Ha];o===void 0&&(o=i[Ha]=new Set);var a=t+"__bubble";o.has(a)||(sf(i,t,2,!1),o.add(a))}function Ua(t,i,o){var a=0;i&&(a|=4),sf(o,t,a,i)}var ao="_reactListening"+Math.random().toString(36).slice(2);function qi(t){if(!t[ao]){t[ao]=!0,s.forEach(function(o){o!=="selectionchange"&&(rw.has(o)||Ua(o,!1,t),Ua(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ao]||(i[ao]=!0,Ua("selectionchange",!1,i))}}function sf(t,i,o,a){switch(Rh(i)){case 1:var c=_y;break;case 4:c=vy;break;default:c=Ea}o=c.bind(null,i,o,t),c=void 0,!fa||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),a?c!==void 0?t.addEventListener(i,o,{capture:!0,passive:c}):t.addEventListener(i,o,!0):c!==void 0?t.addEventListener(i,o,{passive:c}):t.addEventListener(i,o,!1)}function za(t,i,o,a,c){var h=a;if(!(i&1)&&!(i&2)&&a!==null)e:for(;;){if(a===null)return;var m=a.tag;if(m===3||m===4){var _=a.stateNode.containerInfo;if(_===c||_.nodeType===8&&_.parentNode===c)break;if(m===4)for(m=a.return;m!==null;){var y=m.tag;if((y===3||y===4)&&(y=m.stateNode.containerInfo,y===c||y.nodeType===8&&y.parentNode===c))return;m=m.return}for(;_!==null;){if(m=ir(_),m===null)return;if(y=m.tag,y===5||y===6){a=h=m;continue e}_=_.parentNode}}a=a.return}uh(function(){var k=h,P=ca(o),A=[];e:{var R=ef.get(t);if(R!==void 0){var b=Ca,z=t;switch(t){case"keypress":if(no(o)===0)break e;case"keydown":case"keyup":b=Dy;break;case"focusin":z="focus",b=Ra;break;case"focusout":z="blur",b=Ra;break;case"beforeblur":case"afterblur":b=Ra;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Ah;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=Ey;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=by;break;case Yh:case Xh:case Jh:b=Cy;break;case Zh:b=Uy;break;case"scroll":b=yy;break;case"wheel":b=jy;break;case"copy":case"cut":case"paste":b=ky;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=xh}var j=(i&4)!==0,Ne=!j&&t==="scroll",C=j?R!==null?R+"Capture":null:R;j=[];for(var E=k,T;E!==null;){T=E;var x=T.stateNode;if(T.tag===5&&x!==null&&(T=x,C!==null&&(x=Pi(E,C),x!=null&&j.push(Ki(E,x,T)))),Ne)break;E=E.return}0<j.length&&(R=new b(R,z,null,o,P),A.push({event:R,listeners:j}))}}if(!(i&7)){e:{if(R=t==="mouseover"||t==="pointerover",b=t==="mouseout"||t==="pointerout",R&&o!==ua&&(z=o.relatedTarget||o.fromElement)&&(ir(z)||z[sn]))break e;if((b||R)&&(R=P.window===P?P:(R=P.ownerDocument)?R.defaultView||R.parentWindow:window,b?(z=o.relatedTarget||o.toElement,b=k,z=z?ir(z):null,z!==null&&(Ne=rr(z),z!==Ne||z.tag!==5&&z.tag!==6)&&(z=null)):(b=null,z=k),b!==z)){if(j=Ah,x="onMouseLeave",C="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(j=xh,x="onPointerLeave",C="onPointerEnter",E="pointer"),Ne=b==null?R:Wr(b),T=z==null?R:Wr(z),R=new j(x,E+"leave",b,o,P),R.target=Ne,R.relatedTarget=T,x=null,ir(P)===k&&(j=new j(C,E+"enter",z,o,P),j.target=T,j.relatedTarget=Ne,x=j),Ne=x,b&&z)t:{for(j=b,C=z,E=0,T=j;T;T=zr(T))E++;for(T=0,x=C;x;x=zr(x))T++;for(;0<E-T;)j=zr(j),E--;for(;0<T-E;)C=zr(C),T--;for(;E--;){if(j===C||C!==null&&j===C.alternate)break t;j=zr(j),C=zr(C)}j=null}else j=null;b!==null&&of(A,R,b,j,!1),z!==null&&Ne!==null&&of(A,Ne,z,j,!0)}}e:{if(R=k?Wr(k):window,b=R.nodeName&&R.nodeName.toLowerCase(),b==="select"||b==="input"&&R.type==="file")var W=qy;else if(Uh(R))if(jh)W=Xy;else{W=Qy;var B=Ky}else(b=R.nodeName)&&b.toLowerCase()==="input"&&(R.type==="checkbox"||R.type==="radio")&&(W=Yy);if(W&&(W=W(t,k))){zh(A,W,o,P);break e}B&&B(t,R,k),t==="focusout"&&(B=R._wrapperState)&&B.controlled&&R.type==="number"&&ia(R,"number",R.value)}switch(B=k?Wr(k):window,t){case"focusin":(Uh(B)||B.contentEditable==="true")&&(Fr=B,Da=k,Hi=null);break;case"focusout":Hi=Da=Fr=null;break;case"mousedown":La=!0;break;case"contextmenu":case"mouseup":case"dragend":La=!1,Kh(A,o,P);break;case"selectionchange":if(ew)break;case"keydown":case"keyup":Kh(A,o,P)}var $;if(Pa)e:{switch(t){case"compositionstart":var K="onCompositionStart";break e;case"compositionend":K="onCompositionEnd";break e;case"compositionupdate":K="onCompositionUpdate";break e}K=void 0}else br?bh(t,o)&&(K="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(K="onCompositionStart");K&&(Dh&&o.locale!=="ko"&&(br||K!=="onCompositionStart"?K==="onCompositionEnd"&&br&&($=Nh()):(Rn=P,Ia="value"in Rn?Rn.value:Rn.textContent,br=!0)),B=uo(k,K),0<B.length&&(K=new Oh(K,t,null,o,P),A.push({event:K,listeners:B}),$?K.data=$:($=Fh(o),$!==null&&(K.data=$)))),($=Vy?By(t,o):$y(t,o))&&(k=uo(k,"onBeforeInput"),0<k.length&&(P=new Oh("onBeforeInput","beforeinput",null,o,P),A.push({event:P,listeners:k}),P.data=$))}rf(A,i)})}function Ki(t,i,o){return{instance:t,listener:i,currentTarget:o}}function uo(t,i){for(var o=i+"Capture",a=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=Pi(t,o),h!=null&&a.unshift(Ki(t,h,c)),h=Pi(t,i),h!=null&&a.push(Ki(t,h,c))),t=t.return}return a}function zr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function of(t,i,o,a,c){for(var h=i._reactName,m=[];o!==null&&o!==a;){var _=o,y=_.alternate,k=_.stateNode;if(y!==null&&y===a)break;_.tag===5&&k!==null&&(_=k,c?(y=Pi(o,h),y!=null&&m.unshift(Ki(o,y,_))):c||(y=Pi(o,h),y!=null&&m.push(Ki(o,y,_)))),o=o.return}m.length!==0&&t.push({event:i,listeners:m})}var iw=/\r\n?/g,sw=/\u0000|\uFFFD/g;function lf(t){return(typeof t=="string"?t:""+t).replace(iw,`
`).replace(sw,"")}function co(t,i,o){if(i=lf(i),lf(t)!==i&&o)throw Error(n(425))}function ho(){}var ja=null,Wa=null;function Va(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ba=typeof setTimeout=="function"?setTimeout:void 0,ow=typeof clearTimeout=="function"?clearTimeout:void 0,af=typeof Promise=="function"?Promise:void 0,lw=typeof queueMicrotask=="function"?queueMicrotask:typeof af<"u"?function(t){return af.resolve(null).then(t).catch(aw)}:Ba;function aw(t){setTimeout(function(){throw t})}function $a(t,i){var o=i,a=0;do{var c=o.nextSibling;if(t.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(a===0){t.removeChild(c),Ui(i);return}a--}else o!=="$"&&o!=="$?"&&o!=="$!"||a++;o=c}while(o);Ui(i)}function Pn(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function uf(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var jr=Math.random().toString(36).slice(2),Kt="__reactFiber$"+jr,Qi="__reactProps$"+jr,sn="__reactContainer$"+jr,Ha="__reactEvents$"+jr,uw="__reactListeners$"+jr,cw="__reactHandles$"+jr;function ir(t){var i=t[Kt];if(i)return i;for(var o=t.parentNode;o;){if(i=o[sn]||o[Kt]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=uf(t);t!==null;){if(o=t[Kt])return o;t=uf(t)}return i}t=o,o=t.parentNode}return null}function Yi(t){return t=t[Kt]||t[sn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Wr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function fo(t){return t[Qi]||null}var Ga=[],Vr=-1;function An(t){return{current:t}}function ge(t){0>Vr||(t.current=Ga[Vr],Ga[Vr]=null,Vr--)}function he(t,i){Vr++,Ga[Vr]=t.current,t.current=i}var On={},Ke=An(On),st=An(!1),sr=On;function Br(t,i){var o=t.type.contextTypes;if(!o)return On;var a=t.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===i)return a.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in o)c[h]=i[h];return a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function ot(t){return t=t.childContextTypes,t!=null}function po(){ge(st),ge(Ke)}function cf(t,i,o){if(Ke.current!==On)throw Error(n(168));he(Ke,i),he(st,o)}function df(t,i,o){var a=t.stateNode;if(i=i.childContextTypes,typeof a.getChildContext!="function")return o;a=a.getChildContext();for(var c in a)if(!(c in i))throw Error(n(108,de(t)||"Unknown",c));return U({},o,a)}function mo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||On,sr=Ke.current,he(Ke,t),he(st,st.current),!0}function hf(t,i,o){var a=t.stateNode;if(!a)throw Error(n(169));o?(t=df(t,i,sr),a.__reactInternalMemoizedMergedChildContext=t,ge(st),ge(Ke),he(Ke,t)):ge(st),he(st,o)}var on=null,go=!1,qa=!1;function ff(t){on===null?on=[t]:on.push(t)}function dw(t){go=!0,ff(t)}function xn(){if(!qa&&on!==null){qa=!0;var t=0,i=ae;try{var o=on;for(ae=1;t<o.length;t++){var a=o[t];do a=a(!0);while(a!==null)}on=null,go=!1}catch(c){throw on!==null&&(on=on.slice(t+1)),ph(ma,xn),c}finally{ae=i,qa=!1}}return null}var $r=[],Hr=0,_o=null,vo=0,It=[],Ct=0,or=null,ln=1,an="";function lr(t,i){$r[Hr++]=vo,$r[Hr++]=_o,_o=t,vo=i}function pf(t,i,o){It[Ct++]=ln,It[Ct++]=an,It[Ct++]=or,or=t;var a=ln;t=an;var c=32-Dt(a)-1;a&=~(1<<c),o+=1;var h=32-Dt(i)+c;if(30<h){var m=c-c%5;h=(a&(1<<m)-1).toString(32),a>>=m,c-=m,ln=1<<32-Dt(i)+c|o<<c|a,an=h+t}else ln=1<<h|o<<c|a,an=t}function Ka(t){t.return!==null&&(lr(t,1),pf(t,1,0))}function Qa(t){for(;t===_o;)_o=$r[--Hr],$r[Hr]=null,vo=$r[--Hr],$r[Hr]=null;for(;t===or;)or=It[--Ct],It[Ct]=null,an=It[--Ct],It[Ct]=null,ln=It[--Ct],It[Ct]=null}var _t=null,vt=null,ye=!1,Mt=null;function mf(t,i){var o=Nt(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function gf(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,_t=t,vt=Pn(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,_t=t,vt=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=or!==null?{id:ln,overflow:an}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Nt(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,_t=t,vt=null,!0):!1;default:return!1}}function Ya(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Xa(t){if(ye){var i=vt;if(i){var o=i;if(!gf(t,i)){if(Ya(t))throw Error(n(418));i=Pn(o.nextSibling);var a=_t;i&&gf(t,i)?mf(a,o):(t.flags=t.flags&-4097|2,ye=!1,_t=t)}}else{if(Ya(t))throw Error(n(418));t.flags=t.flags&-4097|2,ye=!1,_t=t}}}function _f(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;_t=t}function yo(t){if(t!==_t)return!1;if(!ye)return _f(t),ye=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Va(t.type,t.memoizedProps)),i&&(i=vt)){if(Ya(t))throw vf(),Error(n(418));for(;i;)mf(t,i),i=Pn(i.nextSibling)}if(_f(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){vt=Pn(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}vt=null}}else vt=_t?Pn(t.stateNode.nextSibling):null;return!0}function vf(){for(var t=vt;t;)t=Pn(t.nextSibling)}function Gr(){vt=_t=null,ye=!1}function Ja(t){Mt===null?Mt=[t]:Mt.push(t)}var hw=ke.ReactCurrentBatchConfig;function Xi(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var a=o.stateNode}if(!a)throw Error(n(147,t));var c=a,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(m){var _=c.refs;m===null?delete _[h]:_[h]=m},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function wo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function yf(t){var i=t._init;return i(t._payload)}function wf(t){function i(C,E){if(t){var T=C.deletions;T===null?(C.deletions=[E],C.flags|=16):T.push(E)}}function o(C,E){if(!t)return null;for(;E!==null;)i(C,E),E=E.sibling;return null}function a(C,E){for(C=new Map;E!==null;)E.key!==null?C.set(E.key,E):C.set(E.index,E),E=E.sibling;return C}function c(C,E){return C=jn(C,E),C.index=0,C.sibling=null,C}function h(C,E,T){return C.index=T,t?(T=C.alternate,T!==null?(T=T.index,T<E?(C.flags|=2,E):T):(C.flags|=2,E)):(C.flags|=1048576,E)}function m(C){return t&&C.alternate===null&&(C.flags|=2),C}function _(C,E,T,x){return E===null||E.tag!==6?(E=Bu(T,C.mode,x),E.return=C,E):(E=c(E,T),E.return=C,E)}function y(C,E,T,x){var W=T.type;return W===Be?P(C,E,T.props.children,x,T.key):E!==null&&(E.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===it&&yf(W)===E.type)?(x=c(E,T.props),x.ref=Xi(C,E,T),x.return=C,x):(x=$o(T.type,T.key,T.props,null,C.mode,x),x.ref=Xi(C,E,T),x.return=C,x)}function k(C,E,T,x){return E===null||E.tag!==4||E.stateNode.containerInfo!==T.containerInfo||E.stateNode.implementation!==T.implementation?(E=$u(T,C.mode,x),E.return=C,E):(E=c(E,T.children||[]),E.return=C,E)}function P(C,E,T,x,W){return E===null||E.tag!==7?(E=mr(T,C.mode,x,W),E.return=C,E):(E=c(E,T),E.return=C,E)}function A(C,E,T){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Bu(""+E,C.mode,T),E.return=C,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case nt:return T=$o(E.type,E.key,E.props,null,C.mode,T),T.ref=Xi(C,null,E),T.return=C,T;case xe:return E=$u(E,C.mode,T),E.return=C,E;case it:var x=E._init;return A(C,x(E._payload),T)}if(ki(E)||H(E))return E=mr(E,C.mode,T,null),E.return=C,E;wo(C,E)}return null}function R(C,E,T,x){var W=E!==null?E.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return W!==null?null:_(C,E,""+T,x);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case nt:return T.key===W?y(C,E,T,x):null;case xe:return T.key===W?k(C,E,T,x):null;case it:return W=T._init,R(C,E,W(T._payload),x)}if(ki(T)||H(T))return W!==null?null:P(C,E,T,x,null);wo(C,T)}return null}function b(C,E,T,x,W){if(typeof x=="string"&&x!==""||typeof x=="number")return C=C.get(T)||null,_(E,C,""+x,W);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case nt:return C=C.get(x.key===null?T:x.key)||null,y(E,C,x,W);case xe:return C=C.get(x.key===null?T:x.key)||null,k(E,C,x,W);case it:var B=x._init;return b(C,E,T,B(x._payload),W)}if(ki(x)||H(x))return C=C.get(T)||null,P(E,C,x,W,null);wo(E,x)}return null}function z(C,E,T,x){for(var W=null,B=null,$=E,K=E=0,Ue=null;$!==null&&K<T.length;K++){$.index>K?(Ue=$,$=null):Ue=$.sibling;var se=R(C,$,T[K],x);if(se===null){$===null&&($=Ue);break}t&&$&&se.alternate===null&&i(C,$),E=h(se,E,K),B===null?W=se:B.sibling=se,B=se,$=Ue}if(K===T.length)return o(C,$),ye&&lr(C,K),W;if($===null){for(;K<T.length;K++)$=A(C,T[K],x),$!==null&&(E=h($,E,K),B===null?W=$:B.sibling=$,B=$);return ye&&lr(C,K),W}for($=a(C,$);K<T.length;K++)Ue=b($,C,K,T[K],x),Ue!==null&&(t&&Ue.alternate!==null&&$.delete(Ue.key===null?K:Ue.key),E=h(Ue,E,K),B===null?W=Ue:B.sibling=Ue,B=Ue);return t&&$.forEach(function(Wn){return i(C,Wn)}),ye&&lr(C,K),W}function j(C,E,T,x){var W=H(T);if(typeof W!="function")throw Error(n(150));if(T=W.call(T),T==null)throw Error(n(151));for(var B=W=null,$=E,K=E=0,Ue=null,se=T.next();$!==null&&!se.done;K++,se=T.next()){$.index>K?(Ue=$,$=null):Ue=$.sibling;var Wn=R(C,$,se.value,x);if(Wn===null){$===null&&($=Ue);break}t&&$&&Wn.alternate===null&&i(C,$),E=h(Wn,E,K),B===null?W=Wn:B.sibling=Wn,B=Wn,$=Ue}if(se.done)return o(C,$),ye&&lr(C,K),W;if($===null){for(;!se.done;K++,se=T.next())se=A(C,se.value,x),se!==null&&(E=h(se,E,K),B===null?W=se:B.sibling=se,B=se);return ye&&lr(C,K),W}for($=a(C,$);!se.done;K++,se=T.next())se=b($,C,K,se.value,x),se!==null&&(t&&se.alternate!==null&&$.delete(se.key===null?K:se.key),E=h(se,E,K),B===null?W=se:B.sibling=se,B=se);return t&&$.forEach(function(Hw){return i(C,Hw)}),ye&&lr(C,K),W}function Ne(C,E,T,x){if(typeof T=="object"&&T!==null&&T.type===Be&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case nt:e:{for(var W=T.key,B=E;B!==null;){if(B.key===W){if(W=T.type,W===Be){if(B.tag===7){o(C,B.sibling),E=c(B,T.props.children),E.return=C,C=E;break e}}else if(B.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===it&&yf(W)===B.type){o(C,B.sibling),E=c(B,T.props),E.ref=Xi(C,B,T),E.return=C,C=E;break e}o(C,B);break}else i(C,B);B=B.sibling}T.type===Be?(E=mr(T.props.children,C.mode,x,T.key),E.return=C,C=E):(x=$o(T.type,T.key,T.props,null,C.mode,x),x.ref=Xi(C,E,T),x.return=C,C=x)}return m(C);case xe:e:{for(B=T.key;E!==null;){if(E.key===B)if(E.tag===4&&E.stateNode.containerInfo===T.containerInfo&&E.stateNode.implementation===T.implementation){o(C,E.sibling),E=c(E,T.children||[]),E.return=C,C=E;break e}else{o(C,E);break}else i(C,E);E=E.sibling}E=$u(T,C.mode,x),E.return=C,C=E}return m(C);case it:return B=T._init,Ne(C,E,B(T._payload),x)}if(ki(T))return z(C,E,T,x);if(H(T))return j(C,E,T,x);wo(C,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,E!==null&&E.tag===6?(o(C,E.sibling),E=c(E,T),E.return=C,C=E):(o(C,E),E=Bu(T,C.mode,x),E.return=C,C=E),m(C)):o(C,E)}return Ne}var qr=wf(!0),Ef=wf(!1),Eo=An(null),So=null,Kr=null,Za=null;function eu(){Za=Kr=So=null}function tu(t){var i=Eo.current;ge(Eo),t._currentValue=i}function nu(t,i,o){for(;t!==null;){var a=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,a!==null&&(a.childLanes|=i)):a!==null&&(a.childLanes&i)!==i&&(a.childLanes|=i),t===o)break;t=t.return}}function Qr(t,i){So=t,Za=Kr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&i&&(lt=!0),t.firstContext=null)}function Tt(t){var i=t._currentValue;if(Za!==t)if(t={context:t,memoizedValue:i,next:null},Kr===null){if(So===null)throw Error(n(308));Kr=t,So.dependencies={lanes:0,firstContext:t}}else Kr=Kr.next=t;return i}var ar=null;function ru(t){ar===null?ar=[t]:ar.push(t)}function Sf(t,i,o,a){var c=i.interleaved;return c===null?(o.next=o,ru(i)):(o.next=c.next,c.next=o),i.interleaved=o,un(t,a)}function un(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Dn=!1;function iu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function If(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function cn(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Ln(t,i,o){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,ne&2){var c=a.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),a.pending=i,un(t,o)}return c=a.interleaved,c===null?(i.next=i,ru(a)):(i.next=c.next,c.next=i),a.interleaved=i,un(t,o)}function Io(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var a=i.lanes;a&=t.pendingLanes,o|=a,i.lanes=o,va(t,o)}}function Cf(t,i){var o=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,o===a)){var c=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var m={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?c=h=m:h=h.next=m,o=o.next}while(o!==null);h===null?c=h=i:h=h.next=i}else c=h=i;o={baseState:a.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:a.shared,effects:a.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Co(t,i,o,a){var c=t.updateQueue;Dn=!1;var h=c.firstBaseUpdate,m=c.lastBaseUpdate,_=c.shared.pending;if(_!==null){c.shared.pending=null;var y=_,k=y.next;y.next=null,m===null?h=k:m.next=k,m=y;var P=t.alternate;P!==null&&(P=P.updateQueue,_=P.lastBaseUpdate,_!==m&&(_===null?P.firstBaseUpdate=k:_.next=k,P.lastBaseUpdate=y))}if(h!==null){var A=c.baseState;m=0,P=k=y=null,_=h;do{var R=_.lane,b=_.eventTime;if((a&R)===R){P!==null&&(P=P.next={eventTime:b,lane:0,tag:_.tag,payload:_.payload,callback:_.callback,next:null});e:{var z=t,j=_;switch(R=i,b=o,j.tag){case 1:if(z=j.payload,typeof z=="function"){A=z.call(b,A,R);break e}A=z;break e;case 3:z.flags=z.flags&-65537|128;case 0:if(z=j.payload,R=typeof z=="function"?z.call(b,A,R):z,R==null)break e;A=U({},A,R);break e;case 2:Dn=!0}}_.callback!==null&&_.lane!==0&&(t.flags|=64,R=c.effects,R===null?c.effects=[_]:R.push(_))}else b={eventTime:b,lane:R,tag:_.tag,payload:_.payload,callback:_.callback,next:null},P===null?(k=P=b,y=A):P=P.next=b,m|=R;if(_=_.next,_===null){if(_=c.shared.pending,_===null)break;R=_,_=R.next,R.next=null,c.lastBaseUpdate=R,c.shared.pending=null}}while(!0);if(P===null&&(y=A),c.baseState=y,c.firstBaseUpdate=k,c.lastBaseUpdate=P,i=c.shared.interleaved,i!==null){c=i;do m|=c.lane,c=c.next;while(c!==i)}else h===null&&(c.shared.lanes=0);dr|=m,t.lanes=m,t.memoizedState=A}}function Tf(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var a=t[i],c=a.callback;if(c!==null){if(a.callback=null,a=o,typeof c!="function")throw Error(n(191,c));c.call(a)}}}var Ji={},Qt=An(Ji),Zi=An(Ji),es=An(Ji);function ur(t){if(t===Ji)throw Error(n(174));return t}function su(t,i){switch(he(es,i),he(Zi,t),he(Qt,Ji),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:oa(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=oa(i,t)}ge(Qt),he(Qt,i)}function Yr(){ge(Qt),ge(Zi),ge(es)}function kf(t){ur(es.current);var i=ur(Qt.current),o=oa(i,t.type);i!==o&&(he(Zi,t),he(Qt,o))}function ou(t){Zi.current===t&&(ge(Qt),ge(Zi))}var we=An(0);function To(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var lu=[];function au(){for(var t=0;t<lu.length;t++)lu[t]._workInProgressVersionPrimary=null;lu.length=0}var ko=ke.ReactCurrentDispatcher,uu=ke.ReactCurrentBatchConfig,cr=0,Ee=null,De=null,be=null,Ro=!1,ts=!1,ns=0,fw=0;function Qe(){throw Error(n(321))}function cu(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Lt(t[o],i[o]))return!1;return!0}function du(t,i,o,a,c,h){if(cr=h,Ee=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ko.current=t===null||t.memoizedState===null?_w:vw,t=o(a,c),ts){h=0;do{if(ts=!1,ns=0,25<=h)throw Error(n(301));h+=1,be=De=null,i.updateQueue=null,ko.current=yw,t=o(a,c)}while(ts)}if(ko.current=Ao,i=De!==null&&De.next!==null,cr=0,be=De=Ee=null,Ro=!1,i)throw Error(n(300));return t}function hu(){var t=ns!==0;return ns=0,t}function Yt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?Ee.memoizedState=be=t:be=be.next=t,be}function kt(){if(De===null){var t=Ee.alternate;t=t!==null?t.memoizedState:null}else t=De.next;var i=be===null?Ee.memoizedState:be.next;if(i!==null)be=i,De=t;else{if(t===null)throw Error(n(310));De=t,t={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},be===null?Ee.memoizedState=be=t:be=be.next=t}return be}function rs(t,i){return typeof i=="function"?i(t):i}function fu(t){var i=kt(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=De,c=a.baseQueue,h=o.pending;if(h!==null){if(c!==null){var m=c.next;c.next=h.next,h.next=m}a.baseQueue=c=h,o.pending=null}if(c!==null){h=c.next,a=a.baseState;var _=m=null,y=null,k=h;do{var P=k.lane;if((cr&P)===P)y!==null&&(y=y.next={lane:0,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),a=k.hasEagerState?k.eagerState:t(a,k.action);else{var A={lane:P,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null};y===null?(_=y=A,m=a):y=y.next=A,Ee.lanes|=P,dr|=P}k=k.next}while(k!==null&&k!==h);y===null?m=a:y.next=_,Lt(a,i.memoizedState)||(lt=!0),i.memoizedState=a,i.baseState=m,i.baseQueue=y,o.lastRenderedState=a}if(t=o.interleaved,t!==null){c=t;do h=c.lane,Ee.lanes|=h,dr|=h,c=c.next;while(c!==t)}else c===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function pu(t){var i=kt(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=o.dispatch,c=o.pending,h=i.memoizedState;if(c!==null){o.pending=null;var m=c=c.next;do h=t(h,m.action),m=m.next;while(m!==c);Lt(h,i.memoizedState)||(lt=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,a]}function Rf(){}function Nf(t,i){var o=Ee,a=kt(),c=i(),h=!Lt(a.memoizedState,c);if(h&&(a.memoizedState=c,lt=!0),a=a.queue,mu(Of.bind(null,o,a,t),[t]),a.getSnapshot!==i||h||be!==null&&be.memoizedState.tag&1){if(o.flags|=2048,is(9,Af.bind(null,o,a,c,i),void 0,null),Fe===null)throw Error(n(349));cr&30||Pf(o,i,c)}return c}function Pf(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Ee.updateQueue,i===null?(i={lastEffect:null,stores:null},Ee.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Af(t,i,o,a){i.value=o,i.getSnapshot=a,xf(i)&&Df(t)}function Of(t,i,o){return o(function(){xf(i)&&Df(t)})}function xf(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Lt(t,o)}catch{return!0}}function Df(t){var i=un(t,1);i!==null&&zt(i,t,1,-1)}function Lf(t){var i=Yt();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:t},i.queue=t,t=t.dispatch=gw.bind(null,Ee,t),[i.memoizedState,t]}function is(t,i,o,a){return t={tag:t,create:i,destroy:o,deps:a,next:null},i=Ee.updateQueue,i===null?(i={lastEffect:null,stores:null},Ee.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(a=o.next,o.next=t,t.next=a,i.lastEffect=t)),t}function Mf(){return kt().memoizedState}function No(t,i,o,a){var c=Yt();Ee.flags|=t,c.memoizedState=is(1|i,o,void 0,a===void 0?null:a)}function Po(t,i,o,a){var c=kt();a=a===void 0?null:a;var h=void 0;if(De!==null){var m=De.memoizedState;if(h=m.destroy,a!==null&&cu(a,m.deps)){c.memoizedState=is(i,o,h,a);return}}Ee.flags|=t,c.memoizedState=is(1|i,o,h,a)}function bf(t,i){return No(8390656,8,t,i)}function mu(t,i){return Po(2048,8,t,i)}function Ff(t,i){return Po(4,2,t,i)}function Uf(t,i){return Po(4,4,t,i)}function zf(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function jf(t,i,o){return o=o!=null?o.concat([t]):null,Po(4,4,zf.bind(null,i,t),o)}function gu(){}function Wf(t,i){var o=kt();i=i===void 0?null:i;var a=o.memoizedState;return a!==null&&i!==null&&cu(i,a[1])?a[0]:(o.memoizedState=[t,i],t)}function Vf(t,i){var o=kt();i=i===void 0?null:i;var a=o.memoizedState;return a!==null&&i!==null&&cu(i,a[1])?a[0]:(t=t(),o.memoizedState=[t,i],t)}function Bf(t,i,o){return cr&21?(Lt(o,i)||(o=vh(),Ee.lanes|=o,dr|=o,t.baseState=!0),i):(t.baseState&&(t.baseState=!1,lt=!0),t.memoizedState=o)}function pw(t,i){var o=ae;ae=o!==0&&4>o?o:4,t(!0);var a=uu.transition;uu.transition={};try{t(!1),i()}finally{ae=o,uu.transition=a}}function $f(){return kt().memoizedState}function mw(t,i,o){var a=Un(t);if(o={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null},Hf(t))Gf(i,o);else if(o=Sf(t,i,o,a),o!==null){var c=Ze();zt(o,t,a,c),qf(o,i,a)}}function gw(t,i,o){var a=Un(t),c={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null};if(Hf(t))Gf(i,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var m=i.lastRenderedState,_=h(m,o);if(c.hasEagerState=!0,c.eagerState=_,Lt(_,m)){var y=i.interleaved;y===null?(c.next=c,ru(i)):(c.next=y.next,y.next=c),i.interleaved=c;return}}catch{}finally{}o=Sf(t,i,c,a),o!==null&&(c=Ze(),zt(o,t,a,c),qf(o,i,a))}}function Hf(t){var i=t.alternate;return t===Ee||i!==null&&i===Ee}function Gf(t,i){ts=Ro=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function qf(t,i,o){if(o&4194240){var a=i.lanes;a&=t.pendingLanes,o|=a,i.lanes=o,va(t,o)}}var Ao={readContext:Tt,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},_w={readContext:Tt,useCallback:function(t,i){return Yt().memoizedState=[t,i===void 0?null:i],t},useContext:Tt,useEffect:bf,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,No(4194308,4,zf.bind(null,i,t),o)},useLayoutEffect:function(t,i){return No(4194308,4,t,i)},useInsertionEffect:function(t,i){return No(4,2,t,i)},useMemo:function(t,i){var o=Yt();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var a=Yt();return i=o!==void 0?o(i):i,a.memoizedState=a.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},a.queue=t,t=t.dispatch=mw.bind(null,Ee,t),[a.memoizedState,t]},useRef:function(t){var i=Yt();return t={current:t},i.memoizedState=t},useState:Lf,useDebugValue:gu,useDeferredValue:function(t){return Yt().memoizedState=t},useTransition:function(){var t=Lf(!1),i=t[0];return t=pw.bind(null,t[1]),Yt().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var a=Ee,c=Yt();if(ye){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),Fe===null)throw Error(n(349));cr&30||Pf(a,i,o)}c.memoizedState=o;var h={value:o,getSnapshot:i};return c.queue=h,bf(Of.bind(null,a,h,t),[t]),a.flags|=2048,is(9,Af.bind(null,a,h,o,i),void 0,null),o},useId:function(){var t=Yt(),i=Fe.identifierPrefix;if(ye){var o=an,a=ln;o=(a&~(1<<32-Dt(a)-1)).toString(32)+o,i=":"+i+"R"+o,o=ns++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=fw++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},vw={readContext:Tt,useCallback:Wf,useContext:Tt,useEffect:mu,useImperativeHandle:jf,useInsertionEffect:Ff,useLayoutEffect:Uf,useMemo:Vf,useReducer:fu,useRef:Mf,useState:function(){return fu(rs)},useDebugValue:gu,useDeferredValue:function(t){var i=kt();return Bf(i,De.memoizedState,t)},useTransition:function(){var t=fu(rs)[0],i=kt().memoizedState;return[t,i]},useMutableSource:Rf,useSyncExternalStore:Nf,useId:$f,unstable_isNewReconciler:!1},yw={readContext:Tt,useCallback:Wf,useContext:Tt,useEffect:mu,useImperativeHandle:jf,useInsertionEffect:Ff,useLayoutEffect:Uf,useMemo:Vf,useReducer:pu,useRef:Mf,useState:function(){return pu(rs)},useDebugValue:gu,useDeferredValue:function(t){var i=kt();return De===null?i.memoizedState=t:Bf(i,De.memoizedState,t)},useTransition:function(){var t=pu(rs)[0],i=kt().memoizedState;return[t,i]},useMutableSource:Rf,useSyncExternalStore:Nf,useId:$f,unstable_isNewReconciler:!1};function bt(t,i){if(t&&t.defaultProps){i=U({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function _u(t,i,o,a){i=t.memoizedState,o=o(a,i),o=o==null?i:U({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Oo={isMounted:function(t){return(t=t._reactInternals)?rr(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var a=Ze(),c=Un(t),h=cn(a,c);h.payload=i,o!=null&&(h.callback=o),i=Ln(t,h,c),i!==null&&(zt(i,t,c,a),Io(i,t,c))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var a=Ze(),c=Un(t),h=cn(a,c);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=Ln(t,h,c),i!==null&&(zt(i,t,c,a),Io(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=Ze(),a=Un(t),c=cn(o,a);c.tag=2,i!=null&&(c.callback=i),i=Ln(t,c,a),i!==null&&(zt(i,t,a,o),Io(i,t,a))}};function Kf(t,i,o,a,c,h,m){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,h,m):i.prototype&&i.prototype.isPureReactComponent?!$i(o,a)||!$i(c,h):!0}function Qf(t,i,o){var a=!1,c=On,h=i.contextType;return typeof h=="object"&&h!==null?h=Tt(h):(c=ot(i)?sr:Ke.current,a=i.contextTypes,h=(a=a!=null)?Br(t,c):On),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Oo,t.stateNode=i,i._reactInternals=t,a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),i}function Yf(t,i,o,a){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,a),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,a),i.state!==t&&Oo.enqueueReplaceState(i,i.state,null)}function vu(t,i,o,a){var c=t.stateNode;c.props=o,c.state=t.memoizedState,c.refs={},iu(t);var h=i.contextType;typeof h=="object"&&h!==null?c.context=Tt(h):(h=ot(i)?sr:Ke.current,c.context=Br(t,h)),c.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(_u(t,i,h,o),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&Oo.enqueueReplaceState(c,c.state,null),Co(t,o,c,a),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function Xr(t,i){try{var o="",a=i;do o+=re(a),a=a.return;while(a);var c=o}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:c,digest:null}}function yu(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function wu(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var ww=typeof WeakMap=="function"?WeakMap:Map;function Xf(t,i,o){o=cn(-1,o),o.tag=3,o.payload={element:null};var a=i.value;return o.callback=function(){Uo||(Uo=!0,Mu=a),wu(t,i)},o}function Jf(t,i,o){o=cn(-1,o),o.tag=3;var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var c=i.value;o.payload=function(){return a(c)},o.callback=function(){wu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){wu(t,i),typeof a!="function"&&(bn===null?bn=new Set([this]):bn.add(this));var m=i.stack;this.componentDidCatch(i.value,{componentStack:m!==null?m:""})}),o}function Zf(t,i,o){var a=t.pingCache;if(a===null){a=t.pingCache=new ww;var c=new Set;a.set(i,c)}else c=a.get(i),c===void 0&&(c=new Set,a.set(i,c));c.has(o)||(c.add(o),t=Lw.bind(null,t,i,o),i.then(t,t))}function ep(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function tp(t,i,o,a,c){return t.mode&1?(t.flags|=65536,t.lanes=c,t):(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=cn(-1,1),i.tag=2,Ln(o,i,1))),o.lanes|=1),t)}var Ew=ke.ReactCurrentOwner,lt=!1;function Je(t,i,o,a){i.child=t===null?Ef(i,null,o,a):qr(i,t.child,o,a)}function np(t,i,o,a,c){o=o.render;var h=i.ref;return Qr(i,c),a=du(t,i,o,a,h,c),o=hu(),t!==null&&!lt?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,dn(t,i,c)):(ye&&o&&Ka(i),i.flags|=1,Je(t,i,a,c),i.child)}function rp(t,i,o,a,c){if(t===null){var h=o.type;return typeof h=="function"&&!Vu(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,ip(t,i,h,a,c)):(t=$o(o.type,null,a,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,!(t.lanes&c)){var m=h.memoizedProps;if(o=o.compare,o=o!==null?o:$i,o(m,a)&&t.ref===i.ref)return dn(t,i,c)}return i.flags|=1,t=jn(h,a),t.ref=i.ref,t.return=i,i.child=t}function ip(t,i,o,a,c){if(t!==null){var h=t.memoizedProps;if($i(h,a)&&t.ref===i.ref)if(lt=!1,i.pendingProps=a=h,(t.lanes&c)!==0)t.flags&131072&&(lt=!0);else return i.lanes=t.lanes,dn(t,i,c)}return Eu(t,i,o,a,c)}function sp(t,i,o){var a=i.pendingProps,c=a.children,h=t!==null?t.memoizedState:null;if(a.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(Zr,yt),yt|=o;else{if(!(o&1073741824))return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,he(Zr,yt),yt|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=h!==null?h.baseLanes:o,he(Zr,yt),yt|=a}else h!==null?(a=h.baseLanes|o,i.memoizedState=null):a=o,he(Zr,yt),yt|=a;return Je(t,i,c,o),i.child}function op(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Eu(t,i,o,a,c){var h=ot(o)?sr:Ke.current;return h=Br(i,h),Qr(i,c),o=du(t,i,o,a,h,c),a=hu(),t!==null&&!lt?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,dn(t,i,c)):(ye&&a&&Ka(i),i.flags|=1,Je(t,i,o,c),i.child)}function lp(t,i,o,a,c){if(ot(o)){var h=!0;mo(i)}else h=!1;if(Qr(i,c),i.stateNode===null)Do(t,i),Qf(i,o,a),vu(i,o,a,c),a=!0;else if(t===null){var m=i.stateNode,_=i.memoizedProps;m.props=_;var y=m.context,k=o.contextType;typeof k=="object"&&k!==null?k=Tt(k):(k=ot(o)?sr:Ke.current,k=Br(i,k));var P=o.getDerivedStateFromProps,A=typeof P=="function"||typeof m.getSnapshotBeforeUpdate=="function";A||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(_!==a||y!==k)&&Yf(i,m,a,k),Dn=!1;var R=i.memoizedState;m.state=R,Co(i,a,m,c),y=i.memoizedState,_!==a||R!==y||st.current||Dn?(typeof P=="function"&&(_u(i,o,P,a),y=i.memoizedState),(_=Dn||Kf(i,o,_,a,R,y,k))?(A||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=a,i.memoizedState=y),m.props=a,m.state=y,m.context=k,a=_):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),a=!1)}else{m=i.stateNode,If(t,i),_=i.memoizedProps,k=i.type===i.elementType?_:bt(i.type,_),m.props=k,A=i.pendingProps,R=m.context,y=o.contextType,typeof y=="object"&&y!==null?y=Tt(y):(y=ot(o)?sr:Ke.current,y=Br(i,y));var b=o.getDerivedStateFromProps;(P=typeof b=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(_!==A||R!==y)&&Yf(i,m,a,y),Dn=!1,R=i.memoizedState,m.state=R,Co(i,a,m,c);var z=i.memoizedState;_!==A||R!==z||st.current||Dn?(typeof b=="function"&&(_u(i,o,b,a),z=i.memoizedState),(k=Dn||Kf(i,o,k,a,R,z,y)||!1)?(P||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(a,z,y),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(a,z,y)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||_===t.memoizedProps&&R===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&R===t.memoizedState||(i.flags|=1024),i.memoizedProps=a,i.memoizedState=z),m.props=a,m.state=z,m.context=y,a=k):(typeof m.componentDidUpdate!="function"||_===t.memoizedProps&&R===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&R===t.memoizedState||(i.flags|=1024),a=!1)}return Su(t,i,o,a,h,c)}function Su(t,i,o,a,c,h){op(t,i);var m=(i.flags&128)!==0;if(!a&&!m)return c&&hf(i,o,!1),dn(t,i,h);a=i.stateNode,Ew.current=i;var _=m&&typeof o.getDerivedStateFromError!="function"?null:a.render();return i.flags|=1,t!==null&&m?(i.child=qr(i,t.child,null,h),i.child=qr(i,null,_,h)):Je(t,i,_,h),i.memoizedState=a.state,c&&hf(i,o,!0),i.child}function ap(t){var i=t.stateNode;i.pendingContext?cf(t,i.pendingContext,i.pendingContext!==i.context):i.context&&cf(t,i.context,!1),su(t,i.containerInfo)}function up(t,i,o,a,c){return Gr(),Ja(c),i.flags|=256,Je(t,i,o,a),i.child}var Iu={dehydrated:null,treeContext:null,retryLane:0};function Cu(t){return{baseLanes:t,cachePool:null,transitions:null}}function cp(t,i,o){var a=i.pendingProps,c=we.current,h=!1,m=(i.flags&128)!==0,_;if((_=m)||(_=t!==null&&t.memoizedState===null?!1:(c&2)!==0),_?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),he(we,c&1),t===null)return Xa(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(i.mode&1?t.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(m=a.children,t=a.fallback,h?(a=i.mode,h=i.child,m={mode:"hidden",children:m},!(a&1)&&h!==null?(h.childLanes=0,h.pendingProps=m):h=Ho(m,a,0,null),t=mr(t,a,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Cu(o),i.memoizedState=Iu,t):Tu(i,m));if(c=t.memoizedState,c!==null&&(_=c.dehydrated,_!==null))return Sw(t,i,m,a,_,c,o);if(h){h=a.fallback,m=i.mode,c=t.child,_=c.sibling;var y={mode:"hidden",children:a.children};return!(m&1)&&i.child!==c?(a=i.child,a.childLanes=0,a.pendingProps=y,i.deletions=null):(a=jn(c,y),a.subtreeFlags=c.subtreeFlags&14680064),_!==null?h=jn(_,h):(h=mr(h,m,o,null),h.flags|=2),h.return=i,a.return=i,a.sibling=h,i.child=a,a=h,h=i.child,m=t.child.memoizedState,m=m===null?Cu(o):{baseLanes:m.baseLanes|o,cachePool:null,transitions:m.transitions},h.memoizedState=m,h.childLanes=t.childLanes&~o,i.memoizedState=Iu,a}return h=t.child,t=h.sibling,a=jn(h,{mode:"visible",children:a.children}),!(i.mode&1)&&(a.lanes=o),a.return=i,a.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=a,i.memoizedState=null,a}function Tu(t,i){return i=Ho({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function xo(t,i,o,a){return a!==null&&Ja(a),qr(i,t.child,null,o),t=Tu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Sw(t,i,o,a,c,h,m){if(o)return i.flags&256?(i.flags&=-257,a=yu(Error(n(422))),xo(t,i,m,a)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=a.fallback,c=i.mode,a=Ho({mode:"visible",children:a.children},c,0,null),h=mr(h,c,m,null),h.flags|=2,a.return=i,h.return=i,a.sibling=h,i.child=a,i.mode&1&&qr(i,t.child,null,m),i.child.memoizedState=Cu(m),i.memoizedState=Iu,h);if(!(i.mode&1))return xo(t,i,m,null);if(c.data==="$!"){if(a=c.nextSibling&&c.nextSibling.dataset,a)var _=a.dgst;return a=_,h=Error(n(419)),a=yu(h,a,void 0),xo(t,i,m,a)}if(_=(m&t.childLanes)!==0,lt||_){if(a=Fe,a!==null){switch(m&-m){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=c&(a.suspendedLanes|m)?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,un(t,c),zt(a,t,c,-1))}return Wu(),a=yu(Error(n(421))),xo(t,i,m,a)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=Mw.bind(null,t),c._reactRetry=i,null):(t=h.treeContext,vt=Pn(c.nextSibling),_t=i,ye=!0,Mt=null,t!==null&&(It[Ct++]=ln,It[Ct++]=an,It[Ct++]=or,ln=t.id,an=t.overflow,or=i),i=Tu(i,a.children),i.flags|=4096,i)}function dp(t,i,o){t.lanes|=i;var a=t.alternate;a!==null&&(a.lanes|=i),nu(t.return,i,o)}function ku(t,i,o,a,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:a,tail:o,tailMode:c}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=a,h.tail=o,h.tailMode=c)}function hp(t,i,o){var a=i.pendingProps,c=a.revealOrder,h=a.tail;if(Je(t,i,a.children,o),a=we.current,a&2)a=a&1|2,i.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&dp(t,o,i);else if(t.tag===19)dp(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}if(he(we,a),!(i.mode&1))i.memoizedState=null;else switch(c){case"forwards":for(o=i.child,c=null;o!==null;)t=o.alternate,t!==null&&To(t)===null&&(c=o),o=o.sibling;o=c,o===null?(c=i.child,i.child=null):(c=o.sibling,o.sibling=null),ku(i,!1,c,o,h);break;case"backwards":for(o=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&To(t)===null){i.child=c;break}t=c.sibling,c.sibling=o,o=c,c=t}ku(i,!0,o,null,h);break;case"together":ku(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Do(t,i){!(i.mode&1)&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function dn(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),dr|=i.lanes,!(o&i.childLanes))return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=jn(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=jn(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function Iw(t,i,o){switch(i.tag){case 3:ap(i),Gr();break;case 5:kf(i);break;case 1:ot(i.type)&&mo(i);break;case 4:su(i,i.stateNode.containerInfo);break;case 10:var a=i.type._context,c=i.memoizedProps.value;he(Eo,a._currentValue),a._currentValue=c;break;case 13:if(a=i.memoizedState,a!==null)return a.dehydrated!==null?(he(we,we.current&1),i.flags|=128,null):o&i.child.childLanes?cp(t,i,o):(he(we,we.current&1),t=dn(t,i,o),t!==null?t.sibling:null);he(we,we.current&1);break;case 19:if(a=(o&i.childLanes)!==0,t.flags&128){if(a)return hp(t,i,o);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),he(we,we.current),a)break;return null;case 22:case 23:return i.lanes=0,sp(t,i,o)}return dn(t,i,o)}var fp,Ru,pp,mp;fp=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Ru=function(){},pp=function(t,i,o,a){var c=t.memoizedProps;if(c!==a){t=i.stateNode,ur(Qt.current);var h=null;switch(o){case"input":c=na(t,c),a=na(t,a),h=[];break;case"select":c=U({},c,{value:void 0}),a=U({},a,{value:void 0}),h=[];break;case"textarea":c=sa(t,c),a=sa(t,a),h=[];break;default:typeof c.onClick!="function"&&typeof a.onClick=="function"&&(t.onclick=ho)}la(o,a);var m;o=null;for(k in c)if(!a.hasOwnProperty(k)&&c.hasOwnProperty(k)&&c[k]!=null)if(k==="style"){var _=c[k];for(m in _)_.hasOwnProperty(m)&&(o||(o={}),o[m]="")}else k!=="dangerouslySetInnerHTML"&&k!=="children"&&k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&k!=="autoFocus"&&(l.hasOwnProperty(k)?h||(h=[]):(h=h||[]).push(k,null));for(k in a){var y=a[k];if(_=c!=null?c[k]:void 0,a.hasOwnProperty(k)&&y!==_&&(y!=null||_!=null))if(k==="style")if(_){for(m in _)!_.hasOwnProperty(m)||y&&y.hasOwnProperty(m)||(o||(o={}),o[m]="");for(m in y)y.hasOwnProperty(m)&&_[m]!==y[m]&&(o||(o={}),o[m]=y[m])}else o||(h||(h=[]),h.push(k,o)),o=y;else k==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,_=_?_.__html:void 0,y!=null&&_!==y&&(h=h||[]).push(k,y)):k==="children"?typeof y!="string"&&typeof y!="number"||(h=h||[]).push(k,""+y):k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&(l.hasOwnProperty(k)?(y!=null&&k==="onScroll"&&me("scroll",t),h||_===y||(h=[])):(h=h||[]).push(k,y))}o&&(h=h||[]).push("style",o);var k=h;(i.updateQueue=k)&&(i.flags|=4)}},mp=function(t,i,o,a){o!==a&&(i.flags|=4)};function ss(t,i){if(!ye)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function Ye(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,a=0;if(i)for(var c=t.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags&14680064,a|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags,a|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=a,t.childLanes=o,i}function Cw(t,i,o){var a=i.pendingProps;switch(Qa(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(i),null;case 1:return ot(i.type)&&po(),Ye(i),null;case 3:return a=i.stateNode,Yr(),ge(st),ge(Ke),au(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(yo(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,Mt!==null&&(Uu(Mt),Mt=null))),Ru(t,i),Ye(i),null;case 5:ou(i);var c=ur(es.current);if(o=i.type,t!==null&&i.stateNode!=null)pp(t,i,o,a,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!a){if(i.stateNode===null)throw Error(n(166));return Ye(i),null}if(t=ur(Qt.current),yo(i)){a=i.stateNode,o=i.type;var h=i.memoizedProps;switch(a[Kt]=i,a[Qi]=h,t=(i.mode&1)!==0,o){case"dialog":me("cancel",a),me("close",a);break;case"iframe":case"object":case"embed":me("load",a);break;case"video":case"audio":for(c=0;c<Gi.length;c++)me(Gi[c],a);break;case"source":me("error",a);break;case"img":case"image":case"link":me("error",a),me("load",a);break;case"details":me("toggle",a);break;case"input":Kd(a,h),me("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!h.multiple},me("invalid",a);break;case"textarea":Xd(a,h),me("invalid",a)}la(o,h),c=null;for(var m in h)if(h.hasOwnProperty(m)){var _=h[m];m==="children"?typeof _=="string"?a.textContent!==_&&(h.suppressHydrationWarning!==!0&&co(a.textContent,_,t),c=["children",_]):typeof _=="number"&&a.textContent!==""+_&&(h.suppressHydrationWarning!==!0&&co(a.textContent,_,t),c=["children",""+_]):l.hasOwnProperty(m)&&_!=null&&m==="onScroll"&&me("scroll",a)}switch(o){case"input":Ws(a),Yd(a,h,!0);break;case"textarea":Ws(a),Zd(a);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(a.onclick=ho)}a=c,i.updateQueue=a,a!==null&&(i.flags|=4)}else{m=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=eh(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=m.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof a.is=="string"?t=m.createElement(o,{is:a.is}):(t=m.createElement(o),o==="select"&&(m=t,a.multiple?m.multiple=!0:a.size&&(m.size=a.size))):t=m.createElementNS(t,o),t[Kt]=i,t[Qi]=a,fp(t,i,!1,!1),i.stateNode=t;e:{switch(m=aa(o,a),o){case"dialog":me("cancel",t),me("close",t),c=a;break;case"iframe":case"object":case"embed":me("load",t),c=a;break;case"video":case"audio":for(c=0;c<Gi.length;c++)me(Gi[c],t);c=a;break;case"source":me("error",t),c=a;break;case"img":case"image":case"link":me("error",t),me("load",t),c=a;break;case"details":me("toggle",t),c=a;break;case"input":Kd(t,a),c=na(t,a),me("invalid",t);break;case"option":c=a;break;case"select":t._wrapperState={wasMultiple:!!a.multiple},c=U({},a,{value:void 0}),me("invalid",t);break;case"textarea":Xd(t,a),c=sa(t,a),me("invalid",t);break;default:c=a}la(o,c),_=c;for(h in _)if(_.hasOwnProperty(h)){var y=_[h];h==="style"?rh(t,y):h==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,y!=null&&th(t,y)):h==="children"?typeof y=="string"?(o!=="textarea"||y!=="")&&Ri(t,y):typeof y=="number"&&Ri(t,""+y):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(l.hasOwnProperty(h)?y!=null&&h==="onScroll"&&me("scroll",t):y!=null&&Oe(t,h,y,m))}switch(o){case"input":Ws(t),Yd(t,a,!1);break;case"textarea":Ws(t),Zd(t);break;case"option":a.value!=null&&t.setAttribute("value",""+le(a.value));break;case"select":t.multiple=!!a.multiple,h=a.value,h!=null?Or(t,!!a.multiple,h,!1):a.defaultValue!=null&&Or(t,!!a.multiple,a.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=ho)}switch(o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Ye(i),null;case 6:if(t&&i.stateNode!=null)mp(t,i,t.memoizedProps,a);else{if(typeof a!="string"&&i.stateNode===null)throw Error(n(166));if(o=ur(es.current),ur(Qt.current),yo(i)){if(a=i.stateNode,o=i.memoizedProps,a[Kt]=i,(h=a.nodeValue!==o)&&(t=_t,t!==null))switch(t.tag){case 3:co(a.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&co(a.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else a=(o.nodeType===9?o:o.ownerDocument).createTextNode(a),a[Kt]=i,i.stateNode=a}return Ye(i),null;case 13:if(ge(we),a=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ye&&vt!==null&&i.mode&1&&!(i.flags&128))vf(),Gr(),i.flags|=98560,h=!1;else if(h=yo(i),a!==null&&a.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[Kt]=i}else Gr(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;Ye(i),h=!1}else Mt!==null&&(Uu(Mt),Mt=null),h=!0;if(!h)return i.flags&65536?i:null}return i.flags&128?(i.lanes=o,i):(a=a!==null,a!==(t!==null&&t.memoizedState!==null)&&a&&(i.child.flags|=8192,i.mode&1&&(t===null||we.current&1?Le===0&&(Le=3):Wu())),i.updateQueue!==null&&(i.flags|=4),Ye(i),null);case 4:return Yr(),Ru(t,i),t===null&&qi(i.stateNode.containerInfo),Ye(i),null;case 10:return tu(i.type._context),Ye(i),null;case 17:return ot(i.type)&&po(),Ye(i),null;case 19:if(ge(we),h=i.memoizedState,h===null)return Ye(i),null;if(a=(i.flags&128)!==0,m=h.rendering,m===null)if(a)ss(h,!1);else{if(Le!==0||t!==null&&t.flags&128)for(t=i.child;t!==null;){if(m=To(t),m!==null){for(i.flags|=128,ss(h,!1),a=m.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),i.subtreeFlags=0,a=o,o=i.child;o!==null;)h=o,t=a,h.flags&=14680066,m=h.alternate,m===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=m.childLanes,h.lanes=m.lanes,h.child=m.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=m.memoizedProps,h.memoizedState=m.memoizedState,h.updateQueue=m.updateQueue,h.type=m.type,t=m.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return he(we,we.current&1|2),i.child}t=t.sibling}h.tail!==null&&Re()>ei&&(i.flags|=128,a=!0,ss(h,!1),i.lanes=4194304)}else{if(!a)if(t=To(m),t!==null){if(i.flags|=128,a=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),ss(h,!0),h.tail===null&&h.tailMode==="hidden"&&!m.alternate&&!ye)return Ye(i),null}else 2*Re()-h.renderingStartTime>ei&&o!==1073741824&&(i.flags|=128,a=!0,ss(h,!1),i.lanes=4194304);h.isBackwards?(m.sibling=i.child,i.child=m):(o=h.last,o!==null?o.sibling=m:i.child=m,h.last=m)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Re(),i.sibling=null,o=we.current,he(we,a?o&1|2:o&1),i):(Ye(i),null);case 22:case 23:return ju(),a=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==a&&(i.flags|=8192),a&&i.mode&1?yt&1073741824&&(Ye(i),i.subtreeFlags&6&&(i.flags|=8192)):Ye(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function Tw(t,i){switch(Qa(i),i.tag){case 1:return ot(i.type)&&po(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Yr(),ge(st),ge(Ke),au(),t=i.flags,t&65536&&!(t&128)?(i.flags=t&-65537|128,i):null;case 5:return ou(i),null;case 13:if(ge(we),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Gr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return ge(we),null;case 4:return Yr(),null;case 10:return tu(i.type._context),null;case 22:case 23:return ju(),null;case 24:return null;default:return null}}var Lo=!1,Xe=!1,kw=typeof WeakSet=="function"?WeakSet:Set,F=null;function Jr(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(a){Ie(t,i,a)}else o.current=null}function Nu(t,i,o){try{o()}catch(a){Ie(t,i,a)}}var gp=!1;function Rw(t,i){if(ja=Zs,t=qh(),xa(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var a=o.getSelection&&o.getSelection();if(a&&a.rangeCount!==0){o=a.anchorNode;var c=a.anchorOffset,h=a.focusNode;a=a.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var m=0,_=-1,y=-1,k=0,P=0,A=t,R=null;t:for(;;){for(var b;A!==o||c!==0&&A.nodeType!==3||(_=m+c),A!==h||a!==0&&A.nodeType!==3||(y=m+a),A.nodeType===3&&(m+=A.nodeValue.length),(b=A.firstChild)!==null;)R=A,A=b;for(;;){if(A===t)break t;if(R===o&&++k===c&&(_=m),R===h&&++P===a&&(y=m),(b=A.nextSibling)!==null)break;A=R,R=A.parentNode}A=b}o=_===-1||y===-1?null:{start:_,end:y}}else o=null}o=o||{start:0,end:0}}else o=null;for(Wa={focusedElem:t,selectionRange:o},Zs=!1,F=i;F!==null;)if(i=F,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,F=t;else for(;F!==null;){i=F;try{var z=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(z!==null){var j=z.memoizedProps,Ne=z.memoizedState,C=i.stateNode,E=C.getSnapshotBeforeUpdate(i.elementType===i.type?j:bt(i.type,j),Ne);C.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var T=i.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(x){Ie(i,i.return,x)}if(t=i.sibling,t!==null){t.return=i.return,F=t;break}F=i.return}return z=gp,gp=!1,z}function os(t,i,o){var a=i.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var c=a=a.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&Nu(i,o,h)}c=c.next}while(c!==a)}}function Mo(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var a=o.create;o.destroy=a()}o=o.next}while(o!==i)}}function Pu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function _p(t){var i=t.alternate;i!==null&&(t.alternate=null,_p(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Kt],delete i[Qi],delete i[Ha],delete i[uw],delete i[cw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function vp(t){return t.tag===5||t.tag===3||t.tag===4}function yp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||vp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Au(t,i,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=ho));else if(a!==4&&(t=t.child,t!==null))for(Au(t,i,o),t=t.sibling;t!==null;)Au(t,i,o),t=t.sibling}function Ou(t,i,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(a!==4&&(t=t.child,t!==null))for(Ou(t,i,o),t=t.sibling;t!==null;)Ou(t,i,o),t=t.sibling}var $e=null,Ft=!1;function Mn(t,i,o){for(o=o.child;o!==null;)wp(t,i,o),o=o.sibling}function wp(t,i,o){if(qt&&typeof qt.onCommitFiberUnmount=="function")try{qt.onCommitFiberUnmount(qs,o)}catch{}switch(o.tag){case 5:Xe||Jr(o,i);case 6:var a=$e,c=Ft;$e=null,Mn(t,i,o),$e=a,Ft=c,$e!==null&&(Ft?(t=$e,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):$e.removeChild(o.stateNode));break;case 18:$e!==null&&(Ft?(t=$e,o=o.stateNode,t.nodeType===8?$a(t.parentNode,o):t.nodeType===1&&$a(t,o),Ui(t)):$a($e,o.stateNode));break;case 4:a=$e,c=Ft,$e=o.stateNode.containerInfo,Ft=!0,Mn(t,i,o),$e=a,Ft=c;break;case 0:case 11:case 14:case 15:if(!Xe&&(a=o.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){c=a=a.next;do{var h=c,m=h.destroy;h=h.tag,m!==void 0&&(h&2||h&4)&&Nu(o,i,m),c=c.next}while(c!==a)}Mn(t,i,o);break;case 1:if(!Xe&&(Jr(o,i),a=o.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=o.memoizedProps,a.state=o.memoizedState,a.componentWillUnmount()}catch(_){Ie(o,i,_)}Mn(t,i,o);break;case 21:Mn(t,i,o);break;case 22:o.mode&1?(Xe=(a=Xe)||o.memoizedState!==null,Mn(t,i,o),Xe=a):Mn(t,i,o);break;default:Mn(t,i,o)}}function Ep(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new kw),i.forEach(function(a){var c=bw.bind(null,t,a);o.has(a)||(o.add(a),a.then(c,c))})}}function Ut(t,i){var o=i.deletions;if(o!==null)for(var a=0;a<o.length;a++){var c=o[a];try{var h=t,m=i,_=m;e:for(;_!==null;){switch(_.tag){case 5:$e=_.stateNode,Ft=!1;break e;case 3:$e=_.stateNode.containerInfo,Ft=!0;break e;case 4:$e=_.stateNode.containerInfo,Ft=!0;break e}_=_.return}if($e===null)throw Error(n(160));wp(h,m,c),$e=null,Ft=!1;var y=c.alternate;y!==null&&(y.return=null),c.return=null}catch(k){Ie(c,i,k)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Sp(i,t),i=i.sibling}function Sp(t,i){var o=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ut(i,t),Xt(t),a&4){try{os(3,t,t.return),Mo(3,t)}catch(j){Ie(t,t.return,j)}try{os(5,t,t.return)}catch(j){Ie(t,t.return,j)}}break;case 1:Ut(i,t),Xt(t),a&512&&o!==null&&Jr(o,o.return);break;case 5:if(Ut(i,t),Xt(t),a&512&&o!==null&&Jr(o,o.return),t.flags&32){var c=t.stateNode;try{Ri(c,"")}catch(j){Ie(t,t.return,j)}}if(a&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,m=o!==null?o.memoizedProps:h,_=t.type,y=t.updateQueue;if(t.updateQueue=null,y!==null)try{_==="input"&&h.type==="radio"&&h.name!=null&&Qd(c,h),aa(_,m);var k=aa(_,h);for(m=0;m<y.length;m+=2){var P=y[m],A=y[m+1];P==="style"?rh(c,A):P==="dangerouslySetInnerHTML"?th(c,A):P==="children"?Ri(c,A):Oe(c,P,A,k)}switch(_){case"input":ra(c,h);break;case"textarea":Jd(c,h);break;case"select":var R=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var b=h.value;b!=null?Or(c,!!h.multiple,b,!1):R!==!!h.multiple&&(h.defaultValue!=null?Or(c,!!h.multiple,h.defaultValue,!0):Or(c,!!h.multiple,h.multiple?[]:"",!1))}c[Qi]=h}catch(j){Ie(t,t.return,j)}}break;case 6:if(Ut(i,t),Xt(t),a&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(j){Ie(t,t.return,j)}}break;case 3:if(Ut(i,t),Xt(t),a&4&&o!==null&&o.memoizedState.isDehydrated)try{Ui(i.containerInfo)}catch(j){Ie(t,t.return,j)}break;case 4:Ut(i,t),Xt(t);break;case 13:Ut(i,t),Xt(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(Lu=Re())),a&4&&Ep(t);break;case 22:if(P=o!==null&&o.memoizedState!==null,t.mode&1?(Xe=(k=Xe)||P,Ut(i,t),Xe=k):Ut(i,t),Xt(t),a&8192){if(k=t.memoizedState!==null,(t.stateNode.isHidden=k)&&!P&&t.mode&1)for(F=t,P=t.child;P!==null;){for(A=F=P;F!==null;){switch(R=F,b=R.child,R.tag){case 0:case 11:case 14:case 15:os(4,R,R.return);break;case 1:Jr(R,R.return);var z=R.stateNode;if(typeof z.componentWillUnmount=="function"){a=R,o=R.return;try{i=a,z.props=i.memoizedProps,z.state=i.memoizedState,z.componentWillUnmount()}catch(j){Ie(a,o,j)}}break;case 5:Jr(R,R.return);break;case 22:if(R.memoizedState!==null){Tp(A);continue}}b!==null?(b.return=R,F=b):Tp(A)}P=P.sibling}e:for(P=null,A=t;;){if(A.tag===5){if(P===null){P=A;try{c=A.stateNode,k?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(_=A.stateNode,y=A.memoizedProps.style,m=y!=null&&y.hasOwnProperty("display")?y.display:null,_.style.display=nh("display",m))}catch(j){Ie(t,t.return,j)}}}else if(A.tag===6){if(P===null)try{A.stateNode.nodeValue=k?"":A.memoizedProps}catch(j){Ie(t,t.return,j)}}else if((A.tag!==22&&A.tag!==23||A.memoizedState===null||A===t)&&A.child!==null){A.child.return=A,A=A.child;continue}if(A===t)break e;for(;A.sibling===null;){if(A.return===null||A.return===t)break e;P===A&&(P=null),A=A.return}P===A&&(P=null),A.sibling.return=A.return,A=A.sibling}}break;case 19:Ut(i,t),Xt(t),a&4&&Ep(t);break;case 21:break;default:Ut(i,t),Xt(t)}}function Xt(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(vp(o)){var a=o;break e}o=o.return}throw Error(n(160))}switch(a.tag){case 5:var c=a.stateNode;a.flags&32&&(Ri(c,""),a.flags&=-33);var h=yp(t);Ou(t,h,c);break;case 3:case 4:var m=a.stateNode.containerInfo,_=yp(t);Au(t,_,m);break;default:throw Error(n(161))}}catch(y){Ie(t,t.return,y)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Nw(t,i,o){F=t,Ip(t)}function Ip(t,i,o){for(var a=(t.mode&1)!==0;F!==null;){var c=F,h=c.child;if(c.tag===22&&a){var m=c.memoizedState!==null||Lo;if(!m){var _=c.alternate,y=_!==null&&_.memoizedState!==null||Xe;_=Lo;var k=Xe;if(Lo=m,(Xe=y)&&!k)for(F=c;F!==null;)m=F,y=m.child,m.tag===22&&m.memoizedState!==null?kp(c):y!==null?(y.return=m,F=y):kp(c);for(;h!==null;)F=h,Ip(h),h=h.sibling;F=c,Lo=_,Xe=k}Cp(t)}else c.subtreeFlags&8772&&h!==null?(h.return=c,F=h):Cp(t)}}function Cp(t){for(;F!==null;){var i=F;if(i.flags&8772){var o=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:Xe||Mo(5,i);break;case 1:var a=i.stateNode;if(i.flags&4&&!Xe)if(o===null)a.componentDidMount();else{var c=i.elementType===i.type?o.memoizedProps:bt(i.type,o.memoizedProps);a.componentDidUpdate(c,o.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&Tf(i,h,a);break;case 3:var m=i.updateQueue;if(m!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Tf(i,m,o)}break;case 5:var _=i.stateNode;if(o===null&&i.flags&4){o=_;var y=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":y.autoFocus&&o.focus();break;case"img":y.src&&(o.src=y.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var k=i.alternate;if(k!==null){var P=k.memoizedState;if(P!==null){var A=P.dehydrated;A!==null&&Ui(A)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Xe||i.flags&512&&Pu(i)}catch(R){Ie(i,i.return,R)}}if(i===t){F=null;break}if(o=i.sibling,o!==null){o.return=i.return,F=o;break}F=i.return}}function Tp(t){for(;F!==null;){var i=F;if(i===t){F=null;break}var o=i.sibling;if(o!==null){o.return=i.return,F=o;break}F=i.return}}function kp(t){for(;F!==null;){var i=F;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Mo(4,i)}catch(y){Ie(i,o,y)}break;case 1:var a=i.stateNode;if(typeof a.componentDidMount=="function"){var c=i.return;try{a.componentDidMount()}catch(y){Ie(i,c,y)}}var h=i.return;try{Pu(i)}catch(y){Ie(i,h,y)}break;case 5:var m=i.return;try{Pu(i)}catch(y){Ie(i,m,y)}}}catch(y){Ie(i,i.return,y)}if(i===t){F=null;break}var _=i.sibling;if(_!==null){_.return=i.return,F=_;break}F=i.return}}var Pw=Math.ceil,bo=ke.ReactCurrentDispatcher,xu=ke.ReactCurrentOwner,Rt=ke.ReactCurrentBatchConfig,ne=0,Fe=null,Pe=null,He=0,yt=0,Zr=An(0),Le=0,ls=null,dr=0,Fo=0,Du=0,as=null,at=null,Lu=0,ei=1/0,hn=null,Uo=!1,Mu=null,bn=null,zo=!1,Fn=null,jo=0,us=0,bu=null,Wo=-1,Vo=0;function Ze(){return ne&6?Re():Wo!==-1?Wo:Wo=Re()}function Un(t){return t.mode&1?ne&2&&He!==0?He&-He:hw.transition!==null?(Vo===0&&(Vo=vh()),Vo):(t=ae,t!==0||(t=window.event,t=t===void 0?16:Rh(t.type)),t):1}function zt(t,i,o,a){if(50<us)throw us=0,bu=null,Error(n(185));Di(t,o,a),(!(ne&2)||t!==Fe)&&(t===Fe&&(!(ne&2)&&(Fo|=o),Le===4&&zn(t,He)),ut(t,a),o===1&&ne===0&&!(i.mode&1)&&(ei=Re()+500,go&&xn()))}function ut(t,i){var o=t.callbackNode;hy(t,i);var a=Ys(t,t===Fe?He:0);if(a===0)o!==null&&mh(o),t.callbackNode=null,t.callbackPriority=0;else if(i=a&-a,t.callbackPriority!==i){if(o!=null&&mh(o),i===1)t.tag===0?dw(Np.bind(null,t)):ff(Np.bind(null,t)),lw(function(){!(ne&6)&&xn()}),o=null;else{switch(yh(a)){case 1:o=ma;break;case 4:o=gh;break;case 16:o=Gs;break;case 536870912:o=_h;break;default:o=Gs}o=bp(o,Rp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function Rp(t,i){if(Wo=-1,Vo=0,ne&6)throw Error(n(327));var o=t.callbackNode;if(ti()&&t.callbackNode!==o)return null;var a=Ys(t,t===Fe?He:0);if(a===0)return null;if(a&30||a&t.expiredLanes||i)i=Bo(t,a);else{i=a;var c=ne;ne|=2;var h=Ap();(Fe!==t||He!==i)&&(hn=null,ei=Re()+500,fr(t,i));do try{xw();break}catch(_){Pp(t,_)}while(!0);eu(),bo.current=h,ne=c,Pe!==null?i=0:(Fe=null,He=0,i=Le)}if(i!==0){if(i===2&&(c=ga(t),c!==0&&(a=c,i=Fu(t,c))),i===1)throw o=ls,fr(t,0),zn(t,a),ut(t,Re()),o;if(i===6)zn(t,a);else{if(c=t.current.alternate,!(a&30)&&!Aw(c)&&(i=Bo(t,a),i===2&&(h=ga(t),h!==0&&(a=h,i=Fu(t,h))),i===1))throw o=ls,fr(t,0),zn(t,a),ut(t,Re()),o;switch(t.finishedWork=c,t.finishedLanes=a,i){case 0:case 1:throw Error(n(345));case 2:pr(t,at,hn);break;case 3:if(zn(t,a),(a&130023424)===a&&(i=Lu+500-Re(),10<i)){if(Ys(t,0)!==0)break;if(c=t.suspendedLanes,(c&a)!==a){Ze(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=Ba(pr.bind(null,t,at,hn),i);break}pr(t,at,hn);break;case 4:if(zn(t,a),(a&4194240)===a)break;for(i=t.eventTimes,c=-1;0<a;){var m=31-Dt(a);h=1<<m,m=i[m],m>c&&(c=m),a&=~h}if(a=c,a=Re()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Pw(a/1960))-a,10<a){t.timeoutHandle=Ba(pr.bind(null,t,at,hn),a);break}pr(t,at,hn);break;case 5:pr(t,at,hn);break;default:throw Error(n(329))}}}return ut(t,Re()),t.callbackNode===o?Rp.bind(null,t):null}function Fu(t,i){var o=as;return t.current.memoizedState.isDehydrated&&(fr(t,i).flags|=256),t=Bo(t,i),t!==2&&(i=at,at=o,i!==null&&Uu(i)),t}function Uu(t){at===null?at=t:at.push.apply(at,t)}function Aw(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var a=0;a<o.length;a++){var c=o[a],h=c.getSnapshot;c=c.value;try{if(!Lt(h(),c))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function zn(t,i){for(i&=~Du,i&=~Fo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-Dt(i),a=1<<o;t[o]=-1,i&=~a}}function Np(t){if(ne&6)throw Error(n(327));ti();var i=Ys(t,0);if(!(i&1))return ut(t,Re()),null;var o=Bo(t,i);if(t.tag!==0&&o===2){var a=ga(t);a!==0&&(i=a,o=Fu(t,a))}if(o===1)throw o=ls,fr(t,0),zn(t,i),ut(t,Re()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,pr(t,at,hn),ut(t,Re()),null}function zu(t,i){var o=ne;ne|=1;try{return t(i)}finally{ne=o,ne===0&&(ei=Re()+500,go&&xn())}}function hr(t){Fn!==null&&Fn.tag===0&&!(ne&6)&&ti();var i=ne;ne|=1;var o=Rt.transition,a=ae;try{if(Rt.transition=null,ae=1,t)return t()}finally{ae=a,Rt.transition=o,ne=i,!(ne&6)&&xn()}}function ju(){yt=Zr.current,ge(Zr)}function fr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,ow(o)),Pe!==null)for(o=Pe.return;o!==null;){var a=o;switch(Qa(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&po();break;case 3:Yr(),ge(st),ge(Ke),au();break;case 5:ou(a);break;case 4:Yr();break;case 13:ge(we);break;case 19:ge(we);break;case 10:tu(a.type._context);break;case 22:case 23:ju()}o=o.return}if(Fe=t,Pe=t=jn(t.current,null),He=yt=i,Le=0,ls=null,Du=Fo=dr=0,at=as=null,ar!==null){for(i=0;i<ar.length;i++)if(o=ar[i],a=o.interleaved,a!==null){o.interleaved=null;var c=a.next,h=o.pending;if(h!==null){var m=h.next;h.next=c,a.next=m}o.pending=a}ar=null}return t}function Pp(t,i){do{var o=Pe;try{if(eu(),ko.current=Ao,Ro){for(var a=Ee.memoizedState;a!==null;){var c=a.queue;c!==null&&(c.pending=null),a=a.next}Ro=!1}if(cr=0,be=De=Ee=null,ts=!1,ns=0,xu.current=null,o===null||o.return===null){Le=1,ls=i,Pe=null;break}e:{var h=t,m=o.return,_=o,y=i;if(i=He,_.flags|=32768,y!==null&&typeof y=="object"&&typeof y.then=="function"){var k=y,P=_,A=P.tag;if(!(P.mode&1)&&(A===0||A===11||A===15)){var R=P.alternate;R?(P.updateQueue=R.updateQueue,P.memoizedState=R.memoizedState,P.lanes=R.lanes):(P.updateQueue=null,P.memoizedState=null)}var b=ep(m);if(b!==null){b.flags&=-257,tp(b,m,_,h,i),b.mode&1&&Zf(h,k,i),i=b,y=k;var z=i.updateQueue;if(z===null){var j=new Set;j.add(y),i.updateQueue=j}else z.add(y);break e}else{if(!(i&1)){Zf(h,k,i),Wu();break e}y=Error(n(426))}}else if(ye&&_.mode&1){var Ne=ep(m);if(Ne!==null){!(Ne.flags&65536)&&(Ne.flags|=256),tp(Ne,m,_,h,i),Ja(Xr(y,_));break e}}h=y=Xr(y,_),Le!==4&&(Le=2),as===null?as=[h]:as.push(h),h=m;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var C=Xf(h,y,i);Cf(h,C);break e;case 1:_=y;var E=h.type,T=h.stateNode;if(!(h.flags&128)&&(typeof E.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(bn===null||!bn.has(T)))){h.flags|=65536,i&=-i,h.lanes|=i;var x=Jf(h,_,i);Cf(h,x);break e}}h=h.return}while(h!==null)}xp(o)}catch(W){i=W,Pe===o&&o!==null&&(Pe=o=o.return);continue}break}while(!0)}function Ap(){var t=bo.current;return bo.current=Ao,t===null?Ao:t}function Wu(){(Le===0||Le===3||Le===2)&&(Le=4),Fe===null||!(dr&268435455)&&!(Fo&268435455)||zn(Fe,He)}function Bo(t,i){var o=ne;ne|=2;var a=Ap();(Fe!==t||He!==i)&&(hn=null,fr(t,i));do try{Ow();break}catch(c){Pp(t,c)}while(!0);if(eu(),ne=o,bo.current=a,Pe!==null)throw Error(n(261));return Fe=null,He=0,Le}function Ow(){for(;Pe!==null;)Op(Pe)}function xw(){for(;Pe!==null&&!ry();)Op(Pe)}function Op(t){var i=Mp(t.alternate,t,yt);t.memoizedProps=t.pendingProps,i===null?xp(t):Pe=i,xu.current=null}function xp(t){var i=t;do{var o=i.alternate;if(t=i.return,i.flags&32768){if(o=Tw(o,i),o!==null){o.flags&=32767,Pe=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Le=6,Pe=null;return}}else if(o=Cw(o,i,yt),o!==null){Pe=o;return}if(i=i.sibling,i!==null){Pe=i;return}Pe=i=t}while(i!==null);Le===0&&(Le=5)}function pr(t,i,o){var a=ae,c=Rt.transition;try{Rt.transition=null,ae=1,Dw(t,i,o,a)}finally{Rt.transition=c,ae=a}return null}function Dw(t,i,o,a){do ti();while(Fn!==null);if(ne&6)throw Error(n(327));o=t.finishedWork;var c=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(fy(t,h),t===Fe&&(Pe=Fe=null,He=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||zo||(zo=!0,bp(Gs,function(){return ti(),null})),h=(o.flags&15990)!==0,o.subtreeFlags&15990||h){h=Rt.transition,Rt.transition=null;var m=ae;ae=1;var _=ne;ne|=4,xu.current=null,Rw(t,o),Sp(o,t),Zy(Wa),Zs=!!ja,Wa=ja=null,t.current=o,Nw(o),iy(),ne=_,ae=m,Rt.transition=h}else t.current=o;if(zo&&(zo=!1,Fn=t,jo=c),h=t.pendingLanes,h===0&&(bn=null),ly(o.stateNode),ut(t,Re()),i!==null)for(a=t.onRecoverableError,o=0;o<i.length;o++)c=i[o],a(c.value,{componentStack:c.stack,digest:c.digest});if(Uo)throw Uo=!1,t=Mu,Mu=null,t;return jo&1&&t.tag!==0&&ti(),h=t.pendingLanes,h&1?t===bu?us++:(us=0,bu=t):us=0,xn(),null}function ti(){if(Fn!==null){var t=yh(jo),i=Rt.transition,o=ae;try{if(Rt.transition=null,ae=16>t?16:t,Fn===null)var a=!1;else{if(t=Fn,Fn=null,jo=0,ne&6)throw Error(n(331));var c=ne;for(ne|=4,F=t.current;F!==null;){var h=F,m=h.child;if(F.flags&16){var _=h.deletions;if(_!==null){for(var y=0;y<_.length;y++){var k=_[y];for(F=k;F!==null;){var P=F;switch(P.tag){case 0:case 11:case 15:os(8,P,h)}var A=P.child;if(A!==null)A.return=P,F=A;else for(;F!==null;){P=F;var R=P.sibling,b=P.return;if(_p(P),P===k){F=null;break}if(R!==null){R.return=b,F=R;break}F=b}}}var z=h.alternate;if(z!==null){var j=z.child;if(j!==null){z.child=null;do{var Ne=j.sibling;j.sibling=null,j=Ne}while(j!==null)}}F=h}}if(h.subtreeFlags&2064&&m!==null)m.return=h,F=m;else e:for(;F!==null;){if(h=F,h.flags&2048)switch(h.tag){case 0:case 11:case 15:os(9,h,h.return)}var C=h.sibling;if(C!==null){C.return=h.return,F=C;break e}F=h.return}}var E=t.current;for(F=E;F!==null;){m=F;var T=m.child;if(m.subtreeFlags&2064&&T!==null)T.return=m,F=T;else e:for(m=E;F!==null;){if(_=F,_.flags&2048)try{switch(_.tag){case 0:case 11:case 15:Mo(9,_)}}catch(W){Ie(_,_.return,W)}if(_===m){F=null;break e}var x=_.sibling;if(x!==null){x.return=_.return,F=x;break e}F=_.return}}if(ne=c,xn(),qt&&typeof qt.onPostCommitFiberRoot=="function")try{qt.onPostCommitFiberRoot(qs,t)}catch{}a=!0}return a}finally{ae=o,Rt.transition=i}}return!1}function Dp(t,i,o){i=Xr(o,i),i=Xf(t,i,1),t=Ln(t,i,1),i=Ze(),t!==null&&(Di(t,1,i),ut(t,i))}function Ie(t,i,o){if(t.tag===3)Dp(t,t,o);else for(;i!==null;){if(i.tag===3){Dp(i,t,o);break}else if(i.tag===1){var a=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(bn===null||!bn.has(a))){t=Xr(o,t),t=Jf(i,t,1),i=Ln(i,t,1),t=Ze(),i!==null&&(Di(i,1,t),ut(i,t));break}}i=i.return}}function Lw(t,i,o){var a=t.pingCache;a!==null&&a.delete(i),i=Ze(),t.pingedLanes|=t.suspendedLanes&o,Fe===t&&(He&o)===o&&(Le===4||Le===3&&(He&130023424)===He&&500>Re()-Lu?fr(t,0):Du|=o),ut(t,i)}function Lp(t,i){i===0&&(t.mode&1?(i=Qs,Qs<<=1,!(Qs&130023424)&&(Qs=4194304)):i=1);var o=Ze();t=un(t,i),t!==null&&(Di(t,i,o),ut(t,o))}function Mw(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Lp(t,o)}function bw(t,i){var o=0;switch(t.tag){case 13:var a=t.stateNode,c=t.memoizedState;c!==null&&(o=c.retryLane);break;case 19:a=t.stateNode;break;default:throw Error(n(314))}a!==null&&a.delete(i),Lp(t,o)}var Mp;Mp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||st.current)lt=!0;else{if(!(t.lanes&o)&&!(i.flags&128))return lt=!1,Iw(t,i,o);lt=!!(t.flags&131072)}else lt=!1,ye&&i.flags&1048576&&pf(i,vo,i.index);switch(i.lanes=0,i.tag){case 2:var a=i.type;Do(t,i),t=i.pendingProps;var c=Br(i,Ke.current);Qr(i,o),c=du(null,i,a,t,c,o);var h=hu();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,ot(a)?(h=!0,mo(i)):h=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,iu(i),c.updater=Oo,i.stateNode=c,c._reactInternals=i,vu(i,a,t,o),i=Su(null,i,a,!0,h,o)):(i.tag=0,ye&&h&&Ka(i),Je(null,i,c,o),i=i.child),i;case 16:a=i.elementType;e:{switch(Do(t,i),t=i.pendingProps,c=a._init,a=c(a._payload),i.type=a,c=i.tag=Uw(a),t=bt(a,t),c){case 0:i=Eu(null,i,a,t,o);break e;case 1:i=lp(null,i,a,t,o);break e;case 11:i=np(null,i,a,t,o);break e;case 14:i=rp(null,i,a,bt(a.type,t),o);break e}throw Error(n(306,a,""))}return i;case 0:return a=i.type,c=i.pendingProps,c=i.elementType===a?c:bt(a,c),Eu(t,i,a,c,o);case 1:return a=i.type,c=i.pendingProps,c=i.elementType===a?c:bt(a,c),lp(t,i,a,c,o);case 3:e:{if(ap(i),t===null)throw Error(n(387));a=i.pendingProps,h=i.memoizedState,c=h.element,If(t,i),Co(i,a,null,o);var m=i.memoizedState;if(a=m.element,h.isDehydrated)if(h={element:a,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){c=Xr(Error(n(423)),i),i=up(t,i,a,o,c);break e}else if(a!==c){c=Xr(Error(n(424)),i),i=up(t,i,a,o,c);break e}else for(vt=Pn(i.stateNode.containerInfo.firstChild),_t=i,ye=!0,Mt=null,o=Ef(i,null,a,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Gr(),a===c){i=dn(t,i,o);break e}Je(t,i,a,o)}i=i.child}return i;case 5:return kf(i),t===null&&Xa(i),a=i.type,c=i.pendingProps,h=t!==null?t.memoizedProps:null,m=c.children,Va(a,c)?m=null:h!==null&&Va(a,h)&&(i.flags|=32),op(t,i),Je(t,i,m,o),i.child;case 6:return t===null&&Xa(i),null;case 13:return cp(t,i,o);case 4:return su(i,i.stateNode.containerInfo),a=i.pendingProps,t===null?i.child=qr(i,null,a,o):Je(t,i,a,o),i.child;case 11:return a=i.type,c=i.pendingProps,c=i.elementType===a?c:bt(a,c),np(t,i,a,c,o);case 7:return Je(t,i,i.pendingProps,o),i.child;case 8:return Je(t,i,i.pendingProps.children,o),i.child;case 12:return Je(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(a=i.type._context,c=i.pendingProps,h=i.memoizedProps,m=c.value,he(Eo,a._currentValue),a._currentValue=m,h!==null)if(Lt(h.value,m)){if(h.children===c.children&&!st.current){i=dn(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var _=h.dependencies;if(_!==null){m=h.child;for(var y=_.firstContext;y!==null;){if(y.context===a){if(h.tag===1){y=cn(-1,o&-o),y.tag=2;var k=h.updateQueue;if(k!==null){k=k.shared;var P=k.pending;P===null?y.next=y:(y.next=P.next,P.next=y),k.pending=y}}h.lanes|=o,y=h.alternate,y!==null&&(y.lanes|=o),nu(h.return,o,i),_.lanes|=o;break}y=y.next}}else if(h.tag===10)m=h.type===i.type?null:h.child;else if(h.tag===18){if(m=h.return,m===null)throw Error(n(341));m.lanes|=o,_=m.alternate,_!==null&&(_.lanes|=o),nu(m,o,i),m=h.sibling}else m=h.child;if(m!==null)m.return=h;else for(m=h;m!==null;){if(m===i){m=null;break}if(h=m.sibling,h!==null){h.return=m.return,m=h;break}m=m.return}h=m}Je(t,i,c.children,o),i=i.child}return i;case 9:return c=i.type,a=i.pendingProps.children,Qr(i,o),c=Tt(c),a=a(c),i.flags|=1,Je(t,i,a,o),i.child;case 14:return a=i.type,c=bt(a,i.pendingProps),c=bt(a.type,c),rp(t,i,a,c,o);case 15:return ip(t,i,i.type,i.pendingProps,o);case 17:return a=i.type,c=i.pendingProps,c=i.elementType===a?c:bt(a,c),Do(t,i),i.tag=1,ot(a)?(t=!0,mo(i)):t=!1,Qr(i,o),Qf(i,a,c),vu(i,a,c,o),Su(null,i,a,!0,t,o);case 19:return hp(t,i,o);case 22:return sp(t,i,o)}throw Error(n(156,i.tag))};function bp(t,i){return ph(t,i)}function Fw(t,i,o,a){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(t,i,o,a){return new Fw(t,i,o,a)}function Vu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Uw(t){if(typeof t=="function")return Vu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ht)return 11;if(t===Gt)return 14}return 2}function jn(t,i){var o=t.alternate;return o===null?(o=Nt(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function $o(t,i,o,a,c,h){var m=2;if(a=t,typeof t=="function")Vu(t)&&(m=1);else if(typeof t=="string")m=5;else e:switch(t){case Be:return mr(o.children,c,h,i);case rt:m=8,c|=8;break;case St:return t=Nt(12,o,i,c|2),t.elementType=St,t.lanes=h,t;case pt:return t=Nt(13,o,i,c),t.elementType=pt,t.lanes=h,t;case xt:return t=Nt(19,o,i,c),t.elementType=xt,t.lanes=h,t;case Se:return Ho(o,c,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ot:m=10;break e;case nr:m=9;break e;case Ht:m=11;break e;case Gt:m=14;break e;case it:m=16,a=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Nt(m,o,i,c),i.elementType=t,i.type=a,i.lanes=h,i}function mr(t,i,o,a){return t=Nt(7,t,a,i),t.lanes=o,t}function Ho(t,i,o,a){return t=Nt(22,t,a,i),t.elementType=Se,t.lanes=o,t.stateNode={isHidden:!1},t}function Bu(t,i,o){return t=Nt(6,t,null,i),t.lanes=o,t}function $u(t,i,o){return i=Nt(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function zw(t,i,o,a,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_a(0),this.expirationTimes=_a(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_a(0),this.identifierPrefix=a,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function Hu(t,i,o,a,c,h,m,_,y){return t=new zw(t,i,o,_,y),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Nt(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:a,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},iu(h),t}function jw(t,i,o){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xe,key:a==null?null:""+a,children:t,containerInfo:i,implementation:o}}function Fp(t){if(!t)return On;t=t._reactInternals;e:{if(rr(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(ot(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(ot(o))return df(t,o,i)}return i}function Up(t,i,o,a,c,h,m,_,y){return t=Hu(o,a,!0,t,c,h,m,_,y),t.context=Fp(null),o=t.current,a=Ze(),c=Un(o),h=cn(a,c),h.callback=i??null,Ln(o,h,c),t.current.lanes=c,Di(t,c,a),ut(t,a),t}function Go(t,i,o,a){var c=i.current,h=Ze(),m=Un(c);return o=Fp(o),i.context===null?i.context=o:i.pendingContext=o,i=cn(h,m),i.payload={element:t},a=a===void 0?null:a,a!==null&&(i.callback=a),t=Ln(c,i,m),t!==null&&(zt(t,c,m,h),Io(t,c,m)),m}function qo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function zp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function Gu(t,i){zp(t,i),(t=t.alternate)&&zp(t,i)}function Ww(){return null}var jp=typeof reportError=="function"?reportError:function(t){console.error(t)};function qu(t){this._internalRoot=t}Ko.prototype.render=qu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Go(t,i,null,null)},Ko.prototype.unmount=qu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;hr(function(){Go(null,t,null,null)}),i[sn]=null}};function Ko(t){this._internalRoot=t}Ko.prototype.unstable_scheduleHydration=function(t){if(t){var i=Sh();t={blockedOn:null,target:t,priority:i};for(var o=0;o<kn.length&&i!==0&&i<kn[o].priority;o++);kn.splice(o,0,t),o===0&&Th(t)}};function Ku(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Qo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Wp(){}function Vw(t,i,o,a,c){if(c){if(typeof a=="function"){var h=a;a=function(){var k=qo(m);h.call(k)}}var m=Up(i,a,t,0,null,!1,!1,"",Wp);return t._reactRootContainer=m,t[sn]=m.current,qi(t.nodeType===8?t.parentNode:t),hr(),m}for(;c=t.lastChild;)t.removeChild(c);if(typeof a=="function"){var _=a;a=function(){var k=qo(y);_.call(k)}}var y=Hu(t,0,!1,null,null,!1,!1,"",Wp);return t._reactRootContainer=y,t[sn]=y.current,qi(t.nodeType===8?t.parentNode:t),hr(function(){Go(i,y,o,a)}),y}function Yo(t,i,o,a,c){var h=o._reactRootContainer;if(h){var m=h;if(typeof c=="function"){var _=c;c=function(){var y=qo(m);_.call(y)}}Go(i,m,t,c)}else m=Vw(o,i,t,c,a);return qo(m)}wh=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=xi(i.pendingLanes);o!==0&&(va(i,o|1),ut(i,Re()),!(ne&6)&&(ei=Re()+500,xn()))}break;case 13:hr(function(){var a=un(t,1);if(a!==null){var c=Ze();zt(a,t,1,c)}}),Gu(t,1)}},ya=function(t){if(t.tag===13){var i=un(t,134217728);if(i!==null){var o=Ze();zt(i,t,134217728,o)}Gu(t,134217728)}},Eh=function(t){if(t.tag===13){var i=Un(t),o=un(t,i);if(o!==null){var a=Ze();zt(o,t,i,a)}Gu(t,i)}},Sh=function(){return ae},Ih=function(t,i){var o=ae;try{return ae=t,i()}finally{ae=o}},da=function(t,i,o){switch(i){case"input":if(ra(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var a=o[i];if(a!==t&&a.form===t.form){var c=fo(a);if(!c)throw Error(n(90));qd(a),ra(a,c)}}}break;case"textarea":Jd(t,o);break;case"select":i=o.value,i!=null&&Or(t,!!o.multiple,i,!1)}},lh=zu,ah=hr;var Bw={usingClientEntryPoint:!1,Events:[Yi,Wr,fo,sh,oh,zu]},cs={findFiberByHostInstance:ir,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$w={bundleType:cs.bundleType,version:cs.version,rendererPackageName:cs.rendererPackageName,rendererConfig:cs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ke.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=hh(t),t===null?null:t.stateNode},findFiberByHostInstance:cs.findFiberByHostInstance||Ww,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xo.isDisabled&&Xo.supportsFiber)try{qs=Xo.inject($w),qt=Xo}catch{}}return ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bw,ct.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ku(i))throw Error(n(200));return jw(t,i,null,o)},ct.createRoot=function(t,i){if(!Ku(t))throw Error(n(299));var o=!1,a="",c=jp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(a=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=Hu(t,1,!1,null,null,o,!1,a,c),t[sn]=i.current,qi(t.nodeType===8?t.parentNode:t),new qu(i)},ct.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=hh(i),t=t===null?null:t.stateNode,t},ct.flushSync=function(t){return hr(t)},ct.hydrate=function(t,i,o){if(!Qo(i))throw Error(n(200));return Yo(null,t,i,!0,o)},ct.hydrateRoot=function(t,i,o){if(!Ku(t))throw Error(n(405));var a=o!=null&&o.hydratedSources||null,c=!1,h="",m=jp;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(m=o.onRecoverableError)),i=Up(i,null,t,1,o??null,c,!1,h,m),t[sn]=i.current,qi(t),a)for(t=0;t<a.length;t++)o=a[t],c=o._getVersion,c=c(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,c]:i.mutableSourceEagerHydrationData.push(o,c);return new Ko(i)},ct.render=function(t,i,o){if(!Qo(i))throw Error(n(200));return Yo(null,t,i,!1,o)},ct.unmountComponentAtNode=function(t){if(!Qo(t))throw Error(n(40));return t._reactRootContainer?(hr(function(){Yo(null,null,t,!1,function(){t._reactRootContainer=null,t[sn]=null})}),!0):!1},ct.unstable_batchedUpdates=zu,ct.unstable_renderSubtreeIntoContainer=function(t,i,o,a){if(!Qo(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Yo(t,i,o,!1,a)},ct.version="18.3.1-next-f1338f8080-20240426",ct}var Qp;function Zw(){if(Qp)return Xu.exports;Qp=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Xu.exports=Jw(),Xu.exports}var Yp;function e0(){if(Yp)return Jo;Yp=1;var r=Zw();return Jo.createRoot=r.createRoot,Jo.hydrateRoot=r.hydrateRoot,Jo}var t0=e0(),Xp={};/**
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
 */const vg={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const D=function(r,e){if(!r)throw yi(e)},yi=function(r){return new Error("Firebase Database ("+vg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+r)};/**
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
 */const yg=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):(l&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},n0=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const l=r[n++];if(l<128)e[s++]=String.fromCharCode(l);else if(l>191&&l<224){const u=r[n++];e[s++]=String.fromCharCode((l&31)<<6|u&63)}else if(l>239&&l<365){const u=r[n++],d=r[n++],f=r[n++],p=((l&7)<<18|(u&63)<<12|(d&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const u=r[n++],d=r[n++];e[s++]=String.fromCharCode((l&15)<<12|(u&63)<<6|d&63)}}return e.join("")},qc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<r.length;l+=3){const u=r[l],d=l+1<r.length,f=d?r[l+1]:0,p=l+2<r.length,g=p?r[l+2]:0,w=u>>2,v=(u&3)<<4|f>>4;let S=(f&15)<<2|g>>6,O=g&63;p||(O=64,d||(S=64)),s.push(n[w],n[v],n[S],n[O])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(yg(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):n0(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<r.length;){const u=n[r.charAt(l++)],f=l<r.length?n[r.charAt(l)]:0;++l;const g=l<r.length?n[r.charAt(l)]:64;++l;const v=l<r.length?n[r.charAt(l)]:64;if(++l,u==null||f==null||g==null||v==null)throw new r0;const S=u<<2|f>>4;if(s.push(S),g!==64){const O=f<<4&240|g>>2;if(s.push(O),v!==64){const M=g<<6&192|v;s.push(M)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class r0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wg=function(r){const e=yg(r);return qc.encodeByteArray(e,!0)},cl=function(r){return wg(r).replace(/\./g,"")},dl=function(r){try{return qc.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function i0(r){return Eg(void 0,r)}function Eg(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!s0(n)||(r[n]=Eg(r[n],e[n]));return r}function s0(r){return r!=="__proto__"}/**
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
 */function o0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const l0=()=>o0().__FIREBASE_DEFAULTS__,a0=()=>{if(typeof process>"u"||typeof Xp>"u")return;const r=Xp.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},u0=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&dl(r[1]);return e&&JSON.parse(e)},Kc=()=>{try{return l0()||a0()||u0()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Sg=r=>{var e,n;return(n=(e=Kc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[r]},c0=r=>{const e=Sg(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Ig=()=>{var r;return(r=Kc())===null||r===void 0?void 0:r.config},Cg=r=>{var e;return(e=Kc())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class Ds{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function d0(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",l=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},r);return[cl(JSON.stringify(n)),cl(JSON.stringify(d)),""].join(".")}/**
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
 */function tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tt())}function h0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Tg(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function kg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function f0(){const r=tt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Rg(){return vg.NODE_ADMIN===!0}function Ng(){try{return typeof indexedDB=="object"}catch{return!1}}function Pg(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},l.onupgradeneeded=()=>{n=!1},l.onerror=()=>{var u;e(((u=l.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){e(n)}})}function p0(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const m0="FirebaseError";class nn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=m0,Object.setPrototypeOf(this,nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Rr.prototype.create)}}class Rr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},l=`${this.service}/${e}`,u=this.errors[e],d=u?g0(u,s):"Error",f=`${this.serviceName}: ${d} (${l}).`;return new nn(l,f,s)}}function g0(r,e){return r.replace(_0,(n,s)=>{const l=e[s];return l!=null?String(l):`<${s}?>`})}const _0=/\{\$([^}]+)}/g;/**
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
 */function Is(r){return JSON.parse(r)}function Ve(r){return JSON.stringify(r)}/**
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
 */const Ag=function(r){let e={},n={},s={},l="";try{const u=r.split(".");e=Is(dl(u[0])||""),n=Is(dl(u[1])||""),l=u[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:l}},v0=function(r){const e=Ag(r),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},y0=function(r){const e=Ag(r).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function rn(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function hi(r,e){if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}function wc(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function hl(r,e,n){const s={};for(const l in r)Object.prototype.hasOwnProperty.call(r,l)&&(s[l]=e.call(n,r[l],l,r));return s}function Cs(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const l of n){if(!s.includes(l))return!1;const u=r[l],d=e[l];if(Jp(u)&&Jp(d)){if(!Cs(u,d))return!1}else if(u!==d)return!1}for(const l of s)if(!n.includes(l))return!1;return!0}function Jp(r){return r!==null&&typeof r=="object"}/**
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
 */function wi(r){const e=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(l=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(l))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class w0{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let v=0;v<16;v++)s[v]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let v=0;v<16;v++)s[v]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let v=16;v<80;v++){const S=s[v-3]^s[v-8]^s[v-14]^s[v-16];s[v]=(S<<1|S>>>31)&4294967295}let l=this.chain_[0],u=this.chain_[1],d=this.chain_[2],f=this.chain_[3],p=this.chain_[4],g,w;for(let v=0;v<80;v++){v<40?v<20?(g=f^u&(d^f),w=1518500249):(g=u^d^f,w=1859775393):v<60?(g=u&d|f&(u|d),w=2400959708):(g=u^d^f,w=3395469782);const S=(l<<5|l>>>27)+g+p+w+s[v]&4294967295;p=f,f=d,d=(u<<30|u>>>2)&4294967295,u=l,l=S}this.chain_[0]=this.chain_[0]+l&4294967295,this.chain_[1]=this.chain_[1]+u&4294967295,this.chain_[2]=this.chain_[2]+d&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let l=0;const u=this.buf_;let d=this.inbuf_;for(;l<n;){if(d===0)for(;l<=s;)this.compress_(e,l),l+=this.blockSize;if(typeof e=="string"){for(;l<n;)if(u[d]=e.charCodeAt(l),++d,++l,d===this.blockSize){this.compress_(u),d=0;break}}else for(;l<n;)if(u[d]=e[l],++d,++l,d===this.blockSize){this.compress_(u),d=0;break}}this.inbuf_=d,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let l=this.blockSize-1;l>=56;l--)this.buf_[l]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let l=0;l<5;l++)for(let u=24;u>=0;u-=8)e[s]=this.chain_[l]>>u&255,++s;return e}}function E0(r,e){const n=new S0(r,e);return n.subscribe.bind(n)}class S0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let l;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");I0(e,["next","error","complete"])?l=e:l={next:e,error:n,complete:s},l.next===void 0&&(l.next=ec),l.error===void 0&&(l.error=ec),l.complete===void 0&&(l.complete=ec);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function I0(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function ec(){}function Ll(r,e){return`${r} failed: ${e} argument `}/**
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
 */const C0=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);if(l>=55296&&l<=56319){const u=l-55296;s++,D(s<r.length,"Surrogate pair missing trail surrogate.");const d=r.charCodeAt(s)-56320;l=65536+(u<<10)+d}l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):l<65536?(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},Ml=function(r){let e=0;for(let n=0;n<r.length;n++){const s=r.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const T0=1e3,k0=2,R0=4*60*60*1e3,N0=.5;function Zp(r,e=T0,n=k0){const s=e*Math.pow(n,r),l=Math.round(N0*s*(Math.random()-.5)*2);return Math.min(R0,s+l)}/**
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
 */function Et(r){return r&&r._delegate?r._delegate:r}class Bt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const gr="[DEFAULT]";/**
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
 */class P0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ds;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:n});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),l=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(l)return null;throw u}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(O0(e))try{this.getOrInitializeService({instanceIdentifier:gr})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:l});s.resolve(u)}catch{}}}}clearInstance(e=gr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=gr){return this.instances.has(e)}getOptions(e=gr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,d]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(u);s===f&&d.resolve(l)}return l}onInit(e,n){var s;const l=this.normalizeInstanceIdentifier(n),u=(s=this.onInitCallbacks.get(l))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(l,u);const d=this.instances.get(l);return d&&e(d,l),()=>{u.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const l of s)try{l(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:A0(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=gr){return this.component?this.component.multipleInstances?e:gr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function A0(r){return r===gr?void 0:r}function O0(r){return r.instantiationMode==="EAGER"}/**
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
 */class x0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new P0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ue;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(ue||(ue={}));const D0={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},L0=ue.INFO,M0={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},b0=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),l=M0[e];if(l)console[l](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bl{constructor(e){this.name=e,this._logLevel=L0,this._logHandler=b0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?D0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const F0=(r,e)=>e.some(n=>r instanceof n);let em,tm;function U0(){return em||(em=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function z0(){return tm||(tm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Og=new WeakMap,Ec=new WeakMap,xg=new WeakMap,tc=new WeakMap,Yc=new WeakMap;function j0(r){const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("success",u),r.removeEventListener("error",d)},u=()=>{n(Kn(r.result)),l()},d=()=>{s(r.error),l()};r.addEventListener("success",u),r.addEventListener("error",d)});return e.then(n=>{n instanceof IDBCursor&&Og.set(n,r)}).catch(()=>{}),Yc.set(e,r),e}function W0(r){if(Ec.has(r))return;const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",d),r.removeEventListener("abort",d)},u=()=>{n(),l()},d=()=>{s(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",u),r.addEventListener("error",d),r.addEventListener("abort",d)});Ec.set(r,e)}let Sc={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return Ec.get(r);if(e==="objectStoreNames")return r.objectStoreNames||xg.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Kn(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function V0(r){Sc=r(Sc)}function B0(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(nc(this),e,...n);return xg.set(s,e.sort?e.sort():[e]),Kn(s)}:z0().includes(r)?function(...e){return r.apply(nc(this),e),Kn(Og.get(this))}:function(...e){return Kn(r.apply(nc(this),e))}}function $0(r){return typeof r=="function"?B0(r):(r instanceof IDBTransaction&&W0(r),F0(r,U0())?new Proxy(r,Sc):r)}function Kn(r){if(r instanceof IDBRequest)return j0(r);if(tc.has(r))return tc.get(r);const e=$0(r);return e!==r&&(tc.set(r,e),Yc.set(e,r)),e}const nc=r=>Yc.get(r);function Dg(r,e,{blocked:n,upgrade:s,blocking:l,terminated:u}={}){const d=indexedDB.open(r,e),f=Kn(d);return s&&d.addEventListener("upgradeneeded",p=>{s(Kn(d.result),p.oldVersion,p.newVersion,Kn(d.transaction),p)}),n&&d.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),f.then(p=>{u&&p.addEventListener("close",()=>u()),l&&p.addEventListener("versionchange",g=>l(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const H0=["get","getKey","getAll","getAllKeys","count"],G0=["put","add","delete","clear"],rc=new Map;function nm(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(rc.get(e))return rc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,l=G0.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(l||H0.includes(n)))return;const u=async function(d,...f){const p=this.transaction(d,l?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(f.shift())),(await Promise.all([g[n](...f),l&&p.done]))[0]};return rc.set(e,u),u}V0(r=>({...r,get:(e,n,s)=>nm(e,n)||r.get(e,n,s),has:(e,n)=>!!nm(e,n)||r.has(e,n)}));/**
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
 */class q0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(K0(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function K0(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ic="@firebase/app",rm="0.10.17";/**
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
 */const yn=new bl("@firebase/app"),Q0="@firebase/app-compat",Y0="@firebase/analytics-compat",X0="@firebase/analytics",J0="@firebase/app-check-compat",Z0="@firebase/app-check",eE="@firebase/auth",tE="@firebase/auth-compat",nE="@firebase/database",rE="@firebase/data-connect",iE="@firebase/database-compat",sE="@firebase/functions",oE="@firebase/functions-compat",lE="@firebase/installations",aE="@firebase/installations-compat",uE="@firebase/messaging",cE="@firebase/messaging-compat",dE="@firebase/performance",hE="@firebase/performance-compat",fE="@firebase/remote-config",pE="@firebase/remote-config-compat",mE="@firebase/storage",gE="@firebase/storage-compat",_E="@firebase/firestore",vE="@firebase/vertexai",yE="@firebase/firestore-compat",wE="firebase",EE="11.1.0";/**
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
 */const Cc="[DEFAULT]",SE={[Ic]:"fire-core",[Q0]:"fire-core-compat",[X0]:"fire-analytics",[Y0]:"fire-analytics-compat",[Z0]:"fire-app-check",[J0]:"fire-app-check-compat",[eE]:"fire-auth",[tE]:"fire-auth-compat",[nE]:"fire-rtdb",[rE]:"fire-data-connect",[iE]:"fire-rtdb-compat",[sE]:"fire-fn",[oE]:"fire-fn-compat",[lE]:"fire-iid",[aE]:"fire-iid-compat",[uE]:"fire-fcm",[cE]:"fire-fcm-compat",[dE]:"fire-perf",[hE]:"fire-perf-compat",[fE]:"fire-rc",[pE]:"fire-rc-compat",[mE]:"fire-gcs",[gE]:"fire-gcs-compat",[_E]:"fire-fst",[yE]:"fire-fst-compat",[vE]:"fire-vertex","fire-js":"fire-js",[wE]:"fire-js-all"};/**
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
 */const fl=new Map,IE=new Map,Tc=new Map;function im(r,e){try{r.container.addComponent(e)}catch(n){yn.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function tn(r){const e=r.name;if(Tc.has(e))return yn.debug(`There were multiple attempts to register component ${e}.`),!1;Tc.set(e,r);for(const n of fl.values())im(n,r);for(const n of IE.values())im(n,r);return!0}function Nr(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function fn(r){return r.settings!==void 0}/**
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
 */const CE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qn=new Rr("app","Firebase",CE);/**
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
 */class TE{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Bt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qn.create("app-deleted",{appName:this._name})}}/**
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
 */const Ei=EE;function Lg(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Cc,automaticDataCollectionEnabled:!1},e),l=s.name;if(typeof l!="string"||!l)throw Qn.create("bad-app-name",{appName:String(l)});if(n||(n=Ig()),!n)throw Qn.create("no-options");const u=fl.get(l);if(u){if(Cs(n,u.options)&&Cs(s,u.config))return u;throw Qn.create("duplicate-app",{appName:l})}const d=new x0(l);for(const p of Tc.values())d.addComponent(p);const f=new TE(n,s,d);return fl.set(l,f),f}function Xc(r=Cc){const e=fl.get(r);if(!e&&r===Cc&&Ig())return Lg();if(!e)throw Qn.create("no-app",{appName:r});return e}function At(r,e,n){var s;let l=(s=SE[r])!==null&&s!==void 0?s:r;n&&(l+=`-${n}`);const u=l.match(/\s|\//),d=e.match(/\s|\//);if(u||d){const f=[`Unable to register library "${l}" with version "${e}":`];u&&f.push(`library name "${l}" contains illegal characters (whitespace or "/")`),u&&d&&f.push("and"),d&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yn.warn(f.join(" "));return}tn(new Bt(`${l}-version`,()=>({library:l,version:e}),"VERSION"))}/**
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
 */const kE="firebase-heartbeat-database",RE=1,Ts="firebase-heartbeat-store";let ic=null;function Mg(){return ic||(ic=Dg(kE,RE,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Ts)}catch(n){console.warn(n)}}}}).catch(r=>{throw Qn.create("idb-open",{originalErrorMessage:r.message})})),ic}async function NE(r){try{const n=(await Mg()).transaction(Ts),s=await n.objectStore(Ts).get(bg(r));return await n.done,s}catch(e){if(e instanceof nn)yn.warn(e.message);else{const n=Qn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});yn.warn(n.message)}}}async function sm(r,e){try{const s=(await Mg()).transaction(Ts,"readwrite");await s.objectStore(Ts).put(e,bg(r)),await s.done}catch(n){if(n instanceof nn)yn.warn(n.message);else{const s=Qn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});yn.warn(s.message)}}}function bg(r){return`${r.name}!${r.options.appId}`}/**
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
 */const PE=1024,AE=30*24*60*60*1e3;class OE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new DE(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=om();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(d=>d.date===u)?void 0:(this._heartbeatsCache.heartbeats.push({date:u,agent:l}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(d=>{const f=new Date(d.date).valueOf();return Date.now()-f<=AE}),this._storage.overwrite(this._heartbeatsCache))}catch(s){yn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=om(),{heartbeatsToSend:s,unsentEntries:l}=xE(this._heartbeatsCache.heartbeats),u=cl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return yn.warn(n),""}}}function om(){return new Date().toISOString().substring(0,10)}function xE(r,e=PE){const n=[];let s=r.slice();for(const l of r){const u=n.find(d=>d.agent===l.agent);if(u){if(u.dates.push(l.date),lm(n)>e){u.dates.pop();break}}else if(n.push({agent:l.agent,dates:[l.date]}),lm(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class DE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ng()?Pg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await NE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return sm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return sm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...e.heartbeats]})}else return}}function lm(r){return cl(JSON.stringify({version:2,heartbeats:r})).length}/**
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
 */function LE(r){tn(new Bt("platform-logger",e=>new q0(e),"PRIVATE")),tn(new Bt("heartbeat",e=>new OE(e),"PRIVATE")),At(Ic,rm,r),At(Ic,rm,"esm2017"),At("fire-js","")}LE("");var ME="firebase",bE="11.1.0";/**
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
 */At(ME,bE,"app");const Fg="@firebase/installations",Jc="0.6.11";/**
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
 */const Ug=1e4,zg=`w:${Jc}`,jg="FIS_v2",FE="https://firebaseinstallations.googleapis.com/v1",UE=60*60*1e3,zE="installations",jE="Installations";/**
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
 */const WE={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},wr=new Rr(zE,jE,WE);function Wg(r){return r instanceof nn&&r.code.includes("request-failed")}/**
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
 */function Vg({projectId:r}){return`${FE}/projects/${r}/installations`}function Bg(r){return{token:r.token,requestStatus:2,expiresIn:BE(r.expiresIn),creationTime:Date.now()}}async function $g(r,e){const s=(await e.json()).error;return wr.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Hg({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function VE(r,{refreshToken:e}){const n=Hg(r);return n.append("Authorization",$E(e)),n}async function Gg(r){const e=await r();return e.status>=500&&e.status<600?r():e}function BE(r){return Number(r.replace("s","000"))}function $E(r){return`${jg} ${r}`}/**
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
 */async function HE({appConfig:r,heartbeatServiceProvider:e},{fid:n}){const s=Vg(r),l=Hg(r),u=e.getImmediate({optional:!0});if(u){const g=await u.getHeartbeatsHeader();g&&l.append("x-firebase-client",g)}const d={fid:n,authVersion:jg,appId:r.appId,sdkVersion:zg},f={method:"POST",headers:l,body:JSON.stringify(d)},p=await Gg(()=>fetch(s,f));if(p.ok){const g=await p.json();return{fid:g.fid||n,registrationStatus:2,refreshToken:g.refreshToken,authToken:Bg(g.authToken)}}else throw await $g("Create Installation",p)}/**
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
 */function qg(r){return new Promise(e=>{setTimeout(e,r)})}/**
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
 */function GE(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const qE=/^[cdef][\w-]{21}$/,kc="";function KE(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=QE(r);return qE.test(n)?n:kc}catch{return kc}}function QE(r){return GE(r).substr(0,22)}/**
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
 */function Fl(r){return`${r.appName}!${r.appId}`}/**
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
 */const Kg=new Map;function Qg(r,e){const n=Fl(r);Yg(n,e),YE(n,e)}function Yg(r,e){const n=Kg.get(r);if(n)for(const s of n)s(e)}function YE(r,e){const n=XE();n&&n.postMessage({key:r,fid:e}),JE()}let vr=null;function XE(){return!vr&&"BroadcastChannel"in self&&(vr=new BroadcastChannel("[Firebase] FID Change"),vr.onmessage=r=>{Yg(r.data.key,r.data.fid)}),vr}function JE(){Kg.size===0&&vr&&(vr.close(),vr=null)}/**
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
 */const ZE="firebase-installations-database",eS=1,Er="firebase-installations-store";let sc=null;function Zc(){return sc||(sc=Dg(ZE,eS,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(Er)}}})),sc}async function pl(r,e){const n=Fl(r),l=(await Zc()).transaction(Er,"readwrite"),u=l.objectStore(Er),d=await u.get(n);return await u.put(e,n),await l.done,(!d||d.fid!==e.fid)&&Qg(r,e.fid),e}async function Xg(r){const e=Fl(r),s=(await Zc()).transaction(Er,"readwrite");await s.objectStore(Er).delete(e),await s.done}async function Ul(r,e){const n=Fl(r),l=(await Zc()).transaction(Er,"readwrite"),u=l.objectStore(Er),d=await u.get(n),f=e(d);return f===void 0?await u.delete(n):await u.put(f,n),await l.done,f&&(!d||d.fid!==f.fid)&&Qg(r,f.fid),f}/**
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
 */async function ed(r){let e;const n=await Ul(r.appConfig,s=>{const l=tS(s),u=nS(r,l);return e=u.registrationPromise,u.installationEntry});return n.fid===kc?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function tS(r){const e=r||{fid:KE(),registrationStatus:0};return Jg(e)}function nS(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const l=Promise.reject(wr.create("app-offline"));return{installationEntry:e,registrationPromise:l}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=rS(r,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:iS(r)}:{installationEntry:e}}async function rS(r,e){try{const n=await HE(r,e);return pl(r.appConfig,n)}catch(n){throw Wg(n)&&n.customData.serverCode===409?await Xg(r.appConfig):await pl(r.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function iS(r){let e=await am(r.appConfig);for(;e.registrationStatus===1;)await qg(100),e=await am(r.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await ed(r);return s||n}return e}function am(r){return Ul(r,e=>{if(!e)throw wr.create("installation-not-found");return Jg(e)})}function Jg(r){return sS(r)?{fid:r.fid,registrationStatus:0}:r}function sS(r){return r.registrationStatus===1&&r.registrationTime+Ug<Date.now()}/**
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
 */async function oS({appConfig:r,heartbeatServiceProvider:e},n){const s=lS(r,n),l=VE(r,n),u=e.getImmediate({optional:!0});if(u){const g=await u.getHeartbeatsHeader();g&&l.append("x-firebase-client",g)}const d={installation:{sdkVersion:zg,appId:r.appId}},f={method:"POST",headers:l,body:JSON.stringify(d)},p=await Gg(()=>fetch(s,f));if(p.ok){const g=await p.json();return Bg(g)}else throw await $g("Generate Auth Token",p)}function lS(r,{fid:e}){return`${Vg(r)}/${e}/authTokens:generate`}/**
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
 */async function td(r,e=!1){let n;const s=await Ul(r.appConfig,u=>{if(!Zg(u))throw wr.create("not-registered");const d=u.authToken;if(!e&&cS(d))return u;if(d.requestStatus===1)return n=aS(r,e),u;{if(!navigator.onLine)throw wr.create("app-offline");const f=hS(u);return n=uS(r,f),f}});return n?await n:s.authToken}async function aS(r,e){let n=await um(r.appConfig);for(;n.authToken.requestStatus===1;)await qg(100),n=await um(r.appConfig);const s=n.authToken;return s.requestStatus===0?td(r,e):s}function um(r){return Ul(r,e=>{if(!Zg(e))throw wr.create("not-registered");const n=e.authToken;return fS(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function uS(r,e){try{const n=await oS(r,e),s=Object.assign(Object.assign({},e),{authToken:n});return await pl(r.appConfig,s),n}catch(n){if(Wg(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Xg(r.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await pl(r.appConfig,s)}throw n}}function Zg(r){return r!==void 0&&r.registrationStatus===2}function cS(r){return r.requestStatus===2&&!dS(r)}function dS(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+UE}function hS(r){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:e})}function fS(r){return r.requestStatus===1&&r.requestTime+Ug<Date.now()}/**
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
 */async function pS(r){const e=r,{installationEntry:n,registrationPromise:s}=await ed(e);return s?s.catch(console.error):td(e).catch(console.error),n.fid}/**
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
 */async function mS(r,e=!1){const n=r;return await gS(n),(await td(n,e)).token}async function gS(r){const{registrationPromise:e}=await ed(r);e&&await e}/**
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
 */function _S(r){if(!r||!r.options)throw oc("App Configuration");if(!r.name)throw oc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!r.options[n])throw oc(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function oc(r){return wr.create("missing-app-config-values",{valueName:r})}/**
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
 */const e_="installations",vS="installations-internal",yS=r=>{const e=r.getProvider("app").getImmediate(),n=_S(e),s=Nr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},wS=r=>{const e=r.getProvider("app").getImmediate(),n=Nr(e,e_).getImmediate();return{getId:()=>pS(n),getToken:l=>mS(n,l)}};function ES(){tn(new Bt(e_,yS,"PUBLIC")),tn(new Bt(vS,wS,"PRIVATE"))}ES();At(Fg,Jc);At(Fg,Jc,"esm2017");/**
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
 */const ml="analytics",SS="firebase_id",IS="origin",CS=60*1e3,TS="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",nd="https://www.googletagmanager.com/gtag/js";/**
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
 */const ft=new bl("@firebase/analytics");/**
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
 */const kS={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},wt=new Rr("analytics","Analytics",kS);/**
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
 */function RS(r){if(!r.startsWith(nd)){const e=wt.create("invalid-gtag-resource",{gtagURL:r});return ft.warn(e.message),""}return r}function t_(r){return Promise.all(r.map(e=>e.catch(n=>n)))}function NS(r,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,e)),n}function PS(r,e){const n=NS("firebase-js-sdk-policy",{createScriptURL:RS}),s=document.createElement("script"),l=`${nd}?l=${r}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(l):l,s.async=!0,document.head.appendChild(s)}function AS(r){let e=[];return Array.isArray(window[r])?e=window[r]:window[r]=e,e}async function OS(r,e,n,s,l,u){const d=s[l];try{if(d)await e[d];else{const p=(await t_(n)).find(g=>g.measurementId===l);p&&await e[p.appId]}}catch(f){ft.error(f)}r("config",l,u)}async function xS(r,e,n,s,l){try{let u=[];if(l&&l.send_to){let d=l.send_to;Array.isArray(d)||(d=[d]);const f=await t_(n);for(const p of d){const g=f.find(v=>v.measurementId===p),w=g&&e[g.appId];if(w)u.push(w);else{u=[];break}}}u.length===0&&(u=Object.values(e)),await Promise.all(u),r("event",s,l||{})}catch(u){ft.error(u)}}function DS(r,e,n,s){async function l(u,...d){try{if(u==="event"){const[f,p]=d;await xS(r,e,n,f,p)}else if(u==="config"){const[f,p]=d;await OS(r,e,n,s,f,p)}else if(u==="consent"){const[f,p]=d;r("consent",f,p)}else if(u==="get"){const[f,p,g]=d;r("get",f,p,g)}else if(u==="set"){const[f]=d;r("set",f)}else r(u,...d)}catch(f){ft.error(f)}}return l}function LS(r,e,n,s,l){let u=function(...d){window[s].push(arguments)};return window[l]&&typeof window[l]=="function"&&(u=window[l]),window[l]=DS(u,r,e,n),{gtagCore:u,wrappedGtag:window[l]}}function MS(r){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(nd)&&n.src.includes(r))return n;return null}/**
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
 */const bS=30,FS=1e3;class US{constructor(e={},n=FS){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const n_=new US;function zS(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function jS(r){var e;const{appId:n,apiKey:s}=r,l={method:"GET",headers:zS(s)},u=TS.replace("{app-id}",n),d=await fetch(u,l);if(d.status!==200&&d.status!==304){let f="";try{const p=await d.json();!((e=p.error)===null||e===void 0)&&e.message&&(f=p.error.message)}catch{}throw wt.create("config-fetch-failed",{httpStatus:d.status,responseMessage:f})}return d.json()}async function WS(r,e=n_,n){const{appId:s,apiKey:l,measurementId:u}=r.options;if(!s)throw wt.create("no-app-id");if(!l){if(u)return{measurementId:u,appId:s};throw wt.create("no-api-key")}const d=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},f=new $S;return setTimeout(async()=>{f.abort()},CS),r_({appId:s,apiKey:l,measurementId:u},d,f,e)}async function r_(r,{throttleEndTimeMillis:e,backoffCount:n},s,l=n_){var u;const{appId:d,measurementId:f}=r;try{await VS(s,e)}catch(p){if(f)return ft.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:d,measurementId:f};throw p}try{const p=await jS(r);return l.deleteThrottleMetadata(d),p}catch(p){const g=p;if(!BS(g)){if(l.deleteThrottleMetadata(d),f)return ft.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:d,measurementId:f};throw p}const w=Number((u=g==null?void 0:g.customData)===null||u===void 0?void 0:u.httpStatus)===503?Zp(n,l.intervalMillis,bS):Zp(n,l.intervalMillis),v={throttleEndTimeMillis:Date.now()+w,backoffCount:n+1};return l.setThrottleMetadata(d,v),ft.debug(`Calling attemptFetch again in ${w} millis`),r_(r,v,s,l)}}function VS(r,e){return new Promise((n,s)=>{const l=Math.max(e-Date.now(),0),u=setTimeout(n,l);r.addEventListener(()=>{clearTimeout(u),s(wt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function BS(r){if(!(r instanceof nn)||!r.customData)return!1;const e=Number(r.customData.httpStatus);return e===429||e===500||e===503||e===504}class $S{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function HS(r,e,n,s,l){if(l&&l.global){r("event",n,s);return}else{const u=await e,d=Object.assign(Object.assign({},s),{send_to:u});r("event",n,d)}}/**
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
 */async function GS(){if(Ng())try{await Pg()}catch(r){return ft.warn(wt.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return ft.warn(wt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function qS(r,e,n,s,l,u,d){var f;const p=WS(r);p.then(O=>{n[O.measurementId]=O.appId,r.options.measurementId&&O.measurementId!==r.options.measurementId&&ft.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${O.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(O=>ft.error(O)),e.push(p);const g=GS().then(O=>{if(O)return s.getId()}),[w,v]=await Promise.all([p,g]);MS(u)||PS(u,w.measurementId),l("js",new Date);const S=(f=d==null?void 0:d.config)!==null&&f!==void 0?f:{};return S[IS]="firebase",S.update=!0,v!=null&&(S[SS]=v),l("config",w.measurementId,S),w.measurementId}/**
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
 */class KS{constructor(e){this.app=e}_delete(){return delete gs[this.app.options.appId],Promise.resolve()}}let gs={},cm=[];const dm={};let lc="dataLayer",QS="gtag",hm,i_,fm=!1;function YS(){const r=[];if(Tg()&&r.push("This is a browser extension environment."),p0()||r.push("Cookies are not available."),r.length>0){const e=r.map((s,l)=>`(${l+1}) ${s}`).join(" "),n=wt.create("invalid-analytics-context",{errorInfo:e});ft.warn(n.message)}}function XS(r,e,n){YS();const s=r.options.appId;if(!s)throw wt.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)ft.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw wt.create("no-api-key");if(gs[s]!=null)throw wt.create("already-exists",{id:s});if(!fm){AS(lc);const{wrappedGtag:u,gtagCore:d}=LS(gs,cm,dm,lc,QS);i_=u,hm=d,fm=!0}return gs[s]=qS(r,cm,dm,e,hm,lc,n),new KS(r)}function JS(r=Xc()){r=Et(r);const e=Nr(r,ml);return e.isInitialized()?e.getImmediate():ZS(r)}function ZS(r,e={}){const n=Nr(r,ml);if(n.isInitialized()){const l=n.getImmediate();if(Cs(e,n.getOptions()))return l;throw wt.create("already-initialized")}return n.initialize({options:e})}function eI(r,e,n,s){r=Et(r),HS(i_,gs[r.app.options.appId],e,n,s).catch(l=>ft.error(l))}const pm="@firebase/analytics",mm="0.10.10";function tI(){tn(new Bt(ml,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("installations-internal").getImmediate();return XS(s,l,n)},"PUBLIC")),tn(new Bt("analytics-internal",r,"PRIVATE")),At(pm,mm),At(pm,mm,"esm2017");function r(e){try{const n=e.getProvider(ml).getImmediate();return{logEvent:(s,l,u)=>eI(n,s,l,u)}}catch(n){throw wt.create("interop-component-reg-failed",{reason:n})}}}tI();function rd(r,e){var n={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(n[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(r);l<s.length;l++)e.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(r,s[l])&&(n[s[l]]=r[s[l]]);return n}function s_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nI=s_,o_=new Rr("auth","Firebase",s_());/**
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
 */const gl=new bl("@firebase/auth");function rI(r,...e){gl.logLevel<=ue.WARN&&gl.warn(`Auth (${Ei}): ${r}`,...e)}function sl(r,...e){gl.logLevel<=ue.ERROR&&gl.error(`Auth (${Ei}): ${r}`,...e)}/**
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
 */function wn(r,...e){throw id(r,...e)}function Zt(r,...e){return id(r,...e)}function l_(r,e,n){const s=Object.assign(Object.assign({},nI()),{[e]:n});return new Rr("auth","Firebase",s).create(e,{appName:r.name})}function Yn(r){return l_(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function id(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return o_.create(r,...e)}function Q(r,e,...n){if(!r)throw id(e,...n)}function pn(r){const e="INTERNAL ASSERTION FAILED: "+r;throw sl(e),new Error(e)}function En(r,e){r||pn(e)}/**
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
 */function Rc(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function iI(){return gm()==="http:"||gm()==="https:"}function gm(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function sI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iI()||Tg()||"connection"in navigator)?navigator.onLine:!0}function oI(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Ls{constructor(e,n){this.shortDelay=e,this.longDelay=n,En(n>e,"Short delay should be less than long delay!"),this.isMobile=Qc()||kg()}get(){return sI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function sd(r,e){En(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class a_{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const lI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const aI=new Ls(3e4,6e4);function zl(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Si(r,e,n,s,l={}){return u_(r,l,async()=>{let u={},d={};s&&(e==="GET"?d=s:u={body:JSON.stringify(s)});const f=wi(Object.assign({key:r.config.apiKey},d)).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const g=Object.assign({method:e,headers:p},u);return h0()||(g.referrerPolicy="no-referrer"),a_.fetch()(d_(r,r.config.apiHost,n,f),g)})}async function u_(r,e,n){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},lI),e);try{const l=new uI(r),u=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const d=await u.json();if("needConfirmation"in d)throw Zo(r,"account-exists-with-different-credential",d);if(u.ok&&!("errorMessage"in d))return d;{const f=u.ok?d.errorMessage:d.error.message,[p,g]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zo(r,"credential-already-in-use",d);if(p==="EMAIL_EXISTS")throw Zo(r,"email-already-in-use",d);if(p==="USER_DISABLED")throw Zo(r,"user-disabled",d);const w=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw l_(r,w,g);wn(r,w)}}catch(l){if(l instanceof nn)throw l;wn(r,"network-request-failed",{message:String(l)})}}async function c_(r,e,n,s,l={}){const u=await Si(r,e,n,s,l);return"mfaPendingCredential"in u&&wn(r,"multi-factor-auth-required",{_serverResponse:u}),u}function d_(r,e,n,s){const l=`${e}${n}?${s}`;return r.config.emulator?sd(r.config,l):`${r.config.apiScheme}://${l}`}class uI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Zt(this.auth,"network-request-failed")),aI.get())})}}function Zo(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const l=Zt(r,e,s);return l.customData._tokenResponse=n,l}/**
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
 */async function cI(r,e){return Si(r,"POST","/v1/accounts:delete",e)}async function h_(r,e){return Si(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function _s(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function dI(r,e=!1){const n=Et(r),s=await n.getIdToken(e),l=od(s);Q(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const u=typeof l.firebase=="object"?l.firebase:void 0,d=u==null?void 0:u.sign_in_provider;return{claims:l,token:s,authTime:_s(ac(l.auth_time)),issuedAtTime:_s(ac(l.iat)),expirationTime:_s(ac(l.exp)),signInProvider:d||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function ac(r){return Number(r)*1e3}function od(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return sl("JWT malformed, contained fewer than 3 sections"),null;try{const l=dl(n);return l?JSON.parse(l):(sl("Failed to decode base64 JWT payload"),null)}catch(l){return sl("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function _m(r){const e=od(r);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ks(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof nn&&hI(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function hI({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class fI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const l=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,l)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Nc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=_s(this.lastLoginAt),this.creationTime=_s(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function _l(r){var e;const n=r.auth,s=await r.getIdToken(),l=await ks(r,h_(n,{idToken:s}));Q(l==null?void 0:l.users.length,n,"internal-error");const u=l.users[0];r._notifyReloadListener(u);const d=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?f_(u.providerUserInfo):[],f=mI(r.providerData,d),p=r.isAnonymous,g=!(r.email&&u.passwordHash)&&!(f!=null&&f.length),w=p?g:!1,v={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:f,metadata:new Nc(u.createdAt,u.lastLoginAt),isAnonymous:w};Object.assign(r,v)}async function pI(r){const e=Et(r);await _l(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mI(r,e){return[...r.filter(s=>!e.some(l=>l.providerId===s.providerId)),...e]}function f_(r){return r.map(e=>{var{providerId:n}=e,s=rd(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function gI(r,e){const n=await u_(r,{},async()=>{const s=wi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:u}=r.config,d=d_(r,l,"/v1/token",`key=${u}`),f=await r._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",a_.fetch()(d,{method:"POST",headers:f,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function _I(r,e){return Si(r,"POST","/v2/accounts:revokeToken",zl(r,e))}/**
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
 */class oi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_m(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const n=_m(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:l,expiresIn:u}=await gI(e,n);this.updateTokensAndExpiration(s,l,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:l,expirationTime:u}=n,d=new oi;return s&&(Q(typeof s=="string","internal-error",{appName:e}),d.refreshToken=s),l&&(Q(typeof l=="string","internal-error",{appName:e}),d.accessToken=l),u&&(Q(typeof u=="number","internal-error",{appName:e}),d.expirationTime=u),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new oi,this.toJSON())}_performRefresh(){return pn("not implemented")}}/**
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
 */function Vn(r,e){Q(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class mn{constructor(e){var{uid:n,auth:s,stsTokenManager:l}=e,u=rd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=l,this.accessToken=l.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new Nc(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const n=await ks(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return dI(this,e)}reload(){return pI(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new mn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await _l(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(fn(this.auth.app))return Promise.reject(Yn(this.auth));const e=await this.getIdToken();return await ks(this,cI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,l,u,d,f,p,g,w;const v=(s=n.displayName)!==null&&s!==void 0?s:void 0,S=(l=n.email)!==null&&l!==void 0?l:void 0,O=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,M=(d=n.photoURL)!==null&&d!==void 0?d:void 0,V=(f=n.tenantId)!==null&&f!==void 0?f:void 0,G=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,Ae=(g=n.createdAt)!==null&&g!==void 0?g:void 0,Me=(w=n.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:Oe,emailVerified:ke,isAnonymous:nt,providerData:xe,stsTokenManager:Be}=n;Q(Oe&&Be,e,"internal-error");const rt=oi.fromJSON(this.name,Be);Q(typeof Oe=="string",e,"internal-error"),Vn(v,e.name),Vn(S,e.name),Q(typeof ke=="boolean",e,"internal-error"),Q(typeof nt=="boolean",e,"internal-error"),Vn(O,e.name),Vn(M,e.name),Vn(V,e.name),Vn(G,e.name),Vn(Ae,e.name),Vn(Me,e.name);const St=new mn({uid:Oe,auth:e,email:S,emailVerified:ke,displayName:v,isAnonymous:nt,photoURL:M,phoneNumber:O,tenantId:V,stsTokenManager:rt,createdAt:Ae,lastLoginAt:Me});return xe&&Array.isArray(xe)&&(St.providerData=xe.map(Ot=>Object.assign({},Ot))),G&&(St._redirectEventId=G),St}static async _fromIdTokenResponse(e,n,s=!1){const l=new oi;l.updateFromServerResponse(n);const u=new mn({uid:n.localId,auth:e,stsTokenManager:l,isAnonymous:s});return await _l(u),u}static async _fromGetAccountInfoResponse(e,n,s){const l=n.users[0];Q(l.localId!==void 0,"internal-error");const u=l.providerUserInfo!==void 0?f_(l.providerUserInfo):[],d=!(l.email&&l.passwordHash)&&!(u!=null&&u.length),f=new oi;f.updateFromIdToken(s);const p=new mn({uid:l.localId,auth:e,stsTokenManager:f,isAnonymous:d}),g={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:u,metadata:new Nc(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(u!=null&&u.length)};return Object.assign(p,g),p}}/**
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
 */const vm=new Map;function gn(r){En(r instanceof Function,"Expected a class definition");let e=vm.get(r);return e?(En(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,vm.set(r,e),e)}/**
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
 */class p_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}p_.type="NONE";const ym=p_;/**
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
 */function ol(r,e,n){return`firebase:${r}:${e}:${n}`}class li{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:l,name:u}=this.auth;this.fullUserKey=ol(this.userKey,l.apiKey,u),this.fullPersistenceKey=ol("persistence",l.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?mn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new li(gn(ym),e,s);const l=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=l[0]||gn(ym);const d=ol(s,e.config.apiKey,e.name);let f=null;for(const g of n)try{const w=await g._get(d);if(w){const v=mn._fromJSON(e,w);g!==u&&(f=v),u=g;break}}catch{}const p=l.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new li(u,e,s):(u=p[0],f&&await u._set(d,f.toJSON()),await Promise.all(n.map(async g=>{if(g!==u)try{await g._remove(d)}catch{}})),new li(u,e,s))}}/**
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
 */function wm(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(v_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(m_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(w_(e))return"Blackberry";if(E_(e))return"Webos";if(g_(e))return"Safari";if((e.includes("chrome/")||__(e))&&!e.includes("edge/"))return"Chrome";if(y_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function m_(r=tt()){return/firefox\//i.test(r)}function g_(r=tt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function __(r=tt()){return/crios\//i.test(r)}function v_(r=tt()){return/iemobile/i.test(r)}function y_(r=tt()){return/android/i.test(r)}function w_(r=tt()){return/blackberry/i.test(r)}function E_(r=tt()){return/webos/i.test(r)}function ld(r=tt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function vI(r=tt()){var e;return ld(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function yI(){return f0()&&document.documentMode===10}function S_(r=tt()){return ld(r)||y_(r)||E_(r)||w_(r)||/windows phone/i.test(r)||v_(r)}/**
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
 */function I_(r,e=[]){let n;switch(r){case"Browser":n=wm(tt());break;case"Worker":n=`${wm(tt())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ei}/${s}`}/**
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
 */class wI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=u=>new Promise((d,f)=>{try{const p=e(u);d(p)}catch(p){f(p)}});s.onAbort=n,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const l of n)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function EI(r,e={}){return Si(r,"GET","/v2/passwordPolicy",zl(r,e))}/**
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
 */const SI=6;class II{constructor(e){var n,s,l,u;const d=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=d.minPasswordLength)!==null&&n!==void 0?n:SI,d.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=d.maxPasswordLength),d.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=d.containsLowercaseCharacter),d.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=d.containsUppercaseCharacter),d.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=d.containsNumericCharacter),d.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=d.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(l=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&l!==void 0?l:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,l,u,d,f;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(n=p.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(l=p.containsLowercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(u=p.containsUppercaseLetter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(d=p.containsNumericCharacter)!==null&&d!==void 0?d:!0),p.isValid&&(p.isValid=(f=p.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),p}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),l&&(n.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let l=0;l<e.length;l++)s=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,l,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class CI{constructor(e,n,s,l){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Em(this),this.idTokenSubscription=new Em(this),this.beforeStateQueue=new wI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=o_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=gn(n)),this._initializationPromise=this.queue(async()=>{var s,l;if(!this._deleted&&(this.persistenceManager=await li.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await h_(this,{idToken:e}),s=await mn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(fn(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let l=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,f=l==null?void 0:l._redirectEventId,p=await this.tryRedirectSignIn(e);(!d||d===f)&&(p!=null&&p.user)&&(l=p.user,u=!0)}if(!l)return this.directlySetCurrentUser(null);if(!l._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(l)}catch(d){l=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return l?this.reloadAndSetCurrentUserOrClear(l):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===l._redirectEventId?this.directlySetCurrentUser(l):this.reloadAndSetCurrentUserOrClear(l)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await _l(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=oI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(fn(this.app))return Promise.reject(Yn(this));const n=e?Et(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return fn(this.app)?Promise.reject(Yn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return fn(this.app)?Promise.reject(Yn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await EI(this),n=new II(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Rr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await _I(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&gn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await li.create(this,[gn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,l){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let d=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(f,this,"internal-error"),f.then(()=>{d||u(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,s,l);return()=>{d=!0,p()}}else{const p=e.addObserver(n);return()=>{d=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=I_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const l=await this._getAppCheckToken();return l&&(n["X-Firebase-AppCheck"]=l),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&rI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function jl(r){return Et(r)}class Em{constructor(e){this.auth=e,this.observer=null,this.addObserver=E0(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ad={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function TI(r){ad=r}function kI(r){return ad.loadJS(r)}function RI(){return ad.gapiScript}function NI(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function PI(r,e){const n=Nr(r,"auth");if(n.isInitialized()){const l=n.getImmediate(),u=n.getOptions();if(Cs(u,e??{}))return l;wn(l,"already-initialized")}return n.initialize({options:e})}function AI(r,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(gn);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function OI(r,e,n){const s=jl(r);Q(s._canInitEmulator,s,"emulator-config-failed"),Q(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const l=!1,u=C_(e),{host:d,port:f}=xI(e),p=f===null?"":`:${f}`;s.config.emulator={url:`${u}//${d}${p}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:d,port:f,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:l})}),DI()}function C_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function xI(r){const e=C_(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const u=l[1];return{host:u,port:Sm(s.substr(u.length+1))}}else{const[u,d]=s.split(":");return{host:u,port:Sm(d)}}}function Sm(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function DI(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class T_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return pn("not implemented")}_getIdTokenResponse(e){return pn("not implemented")}_linkToIdToken(e,n){return pn("not implemented")}_getReauthenticationResolver(e){return pn("not implemented")}}/**
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
 */async function ai(r,e){return c_(r,"POST","/v1/accounts:signInWithIdp",zl(r,e))}/**
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
 */const LI="http://localhost";class Sr extends T_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Sr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):wn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:l}=n,u=rd(n,["providerId","signInMethod"]);if(!s||!l)return null;const d=new Sr(s,l);return d.idToken=u.idToken||void 0,d.accessToken=u.accessToken||void 0,d.secret=u.secret,d.nonce=u.nonce,d.pendingToken=u.pendingToken||null,d}_getIdTokenResponse(e){const n=this.buildRequest();return ai(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ai(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ai(e,n)}buildRequest(){const e={requestUri:LI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=wi(n)}return e}}/**
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
 */class k_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ms extends k_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Bn extends Ms{constructor(){super("facebook.com")}static credential(e){return Sr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bn.credential(e.oauthAccessToken)}catch{return null}}}Bn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Bn.PROVIDER_ID="facebook.com";/**
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
 */class $n extends Ms{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Sr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return $n.credential(n,s)}catch{return null}}}$n.GOOGLE_SIGN_IN_METHOD="google.com";$n.PROVIDER_ID="google.com";/**
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
 */class Hn extends Ms{constructor(){super("github.com")}static credential(e){return Sr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch{return null}}}Hn.GITHUB_SIGN_IN_METHOD="github.com";Hn.PROVIDER_ID="github.com";/**
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
 */class Gn extends Ms{constructor(){super("twitter.com")}static credential(e,n){return Sr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Gn.credential(n,s)}catch{return null}}}Gn.TWITTER_SIGN_IN_METHOD="twitter.com";Gn.PROVIDER_ID="twitter.com";/**
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
 */async function MI(r,e){return c_(r,"POST","/v1/accounts:signUp",zl(r,e))}/**
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
 */class Jn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,l=!1){const u=await mn._fromIdTokenResponse(e,s,l),d=Im(s);return new Jn({user:u,providerId:d,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const l=Im(s);return new Jn({user:e,providerId:l,_tokenResponse:s,operationType:n})}}function Im(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */async function bI(r){var e;if(fn(r.app))return Promise.reject(Yn(r));const n=jl(r);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Jn({user:n.currentUser,providerId:null,operationType:"signIn"});const s=await MI(n,{returnSecureToken:!0}),l=await Jn._fromIdTokenResponse(n,"signIn",s,!0);return await n._updateCurrentUser(l.user),l}/**
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
 */class vl extends nn{constructor(e,n,s,l){var u;super(n.code,n.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,vl.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,l){return new vl(e,n,s,l)}}function R_(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?vl._fromErrorAndOperation(r,u,e,s):u})}async function FI(r,e,n=!1){const s=await ks(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return Jn._forOperation(r,"link",s)}/**
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
 */async function UI(r,e,n=!1){const{auth:s}=r;if(fn(s.app))return Promise.reject(Yn(s));const l="reauthenticate";try{const u=await ks(r,R_(s,l,e,r),n);Q(u.idToken,s,"internal-error");const d=od(u.idToken);Q(d,s,"internal-error");const{sub:f}=d;return Q(r.uid===f,s,"user-mismatch"),Jn._forOperation(r,l,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&wn(s,"user-mismatch"),u}}/**
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
 */async function zI(r,e,n=!1){if(fn(r.app))return Promise.reject(Yn(r));const s="signIn",l=await R_(r,s,e),u=await Jn._fromIdTokenResponse(r,s,l);return n||await r._updateCurrentUser(u.user),u}function jI(r,e,n,s){return Et(r).onIdTokenChanged(e,n,s)}function WI(r,e,n){return Et(r).beforeAuthStateChanged(e,n)}const yl="__sak";/**
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
 */class N_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(yl,"1"),this.storage.removeItem(yl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const VI=1e3,BI=10;class P_ extends N_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=S_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),l=this.localCache[n];s!==l&&e(n,l,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((d,f,p)=>{this.notifyListeners(d,p)});return}const s=e.key;n?this.detachListener():this.stopPolling();const l=()=>{const d=this.storage.getItem(s);!n&&this.localCache[s]===d||this.notifyListeners(s,d)},u=this.storage.getItem(s);yI()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,BI):l()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},VI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}P_.type="LOCAL";const $I=P_;/**
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
 */class A_ extends N_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}A_.type="SESSION";const O_=A_;/**
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
 */function HI(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Wl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(l=>l.isListeningto(e));if(n)return n;const s=new Wl(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:l,data:u}=n.data,d=this.handlersMap[l];if(!(d!=null&&d.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const f=Array.from(d).map(async g=>g(n.origin,u)),p=await HI(f);n.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wl.receivers=[];/**
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
 */function ud(r="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return r+n}/**
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
 */class GI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let u,d;return new Promise((f,p)=>{const g=ud("",20);l.port1.start();const w=setTimeout(()=>{p(new Error("unsupported_event"))},s);d={messageChannel:l,onMessage(v){const S=v;if(S.data.eventId===g)switch(S.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),f(S.data.response);break;default:clearTimeout(w),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(d),l.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[l.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
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
 */function en(){return window}function qI(r){en().location.href=r}/**
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
 */function x_(){return typeof en().WorkerGlobalScope<"u"&&typeof en().importScripts=="function"}async function KI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function QI(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function YI(){return x_()?self:null}/**
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
 */const D_="firebaseLocalStorageDb",XI=1,wl="firebaseLocalStorage",L_="fbase_key";class bs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vl(r,e){return r.transaction([wl],e?"readwrite":"readonly").objectStore(wl)}function JI(){const r=indexedDB.deleteDatabase(D_);return new bs(r).toPromise()}function Pc(){const r=indexedDB.open(D_,XI);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(wl,{keyPath:L_})}catch(l){n(l)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(wl)?e(s):(s.close(),await JI(),e(await Pc()))})})}async function Cm(r,e,n){const s=Vl(r,!0).put({[L_]:e,value:n});return new bs(s).toPromise()}async function ZI(r,e){const n=Vl(r,!1).get(e),s=await new bs(n).toPromise();return s===void 0?null:s.value}function Tm(r,e){const n=Vl(r,!0).delete(e);return new bs(n).toPromise()}const eC=800,tC=3;class M_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Pc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>tC)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return x_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wl._getInstance(YI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await KI(),!this.activeServiceWorker)return;this.sender=new GI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||QI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Pc();return await Cm(e,yl,"1"),await Tm(e,yl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Cm(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>ZI(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Tm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const u=Vl(l,!1).getAll();return new bs(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:l,value:u}of e)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(u)&&(this.notifyListeners(l,u),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),eC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}M_.type="LOCAL";const nC=M_;new Ls(3e4,6e4);/**
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
 */function rC(r,e){return e?gn(e):(Q(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class cd extends T_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ai(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ai(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ai(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function iC(r){return zI(r.auth,new cd(r),r.bypassAuthState)}function sC(r){const{auth:e,user:n}=r;return Q(n,e,"internal-error"),UI(n,new cd(r),r.bypassAuthState)}async function oC(r){const{auth:e,user:n}=r;return Q(n,e,"internal-error"),FI(n,new cd(r),r.bypassAuthState)}/**
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
 */class b_{constructor(e,n,s,l,u=!1){this.auth=e,this.resolver=s,this.user=l,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:l,tenantId:u,error:d,type:f}=e;if(d){this.reject(d);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return iC;case"linkViaPopup":case"linkViaRedirect":return oC;case"reauthViaPopup":case"reauthViaRedirect":return sC;default:wn(this.auth,"internal-error")}}resolve(e){En(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){En(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const lC=new Ls(2e3,1e4);class ii extends b_{constructor(e,n,s,l,u){super(e,n,l,u),this.provider=s,this.authWindow=null,this.pollId=null,ii.currentPopupAction&&ii.currentPopupAction.cancel(),ii.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){En(this.filter.length===1,"Popup operations only handle one event");const e=ud();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ii.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,lC.get())};e()}}ii.currentPopupAction=null;/**
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
 */const aC="pendingRedirect",ll=new Map;class uC extends b_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ll.get(this.auth._key());if(!e){try{const s=await cC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ll.set(this.auth._key(),e)}return this.bypassAuthState||ll.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function cC(r,e){const n=fC(e),s=hC(r);if(!await s._isAvailable())return!1;const l=await s._get(n)==="true";return await s._remove(n),l}function dC(r,e){ll.set(r._key(),e)}function hC(r){return gn(r._redirectPersistence)}function fC(r){return ol(aC,r.config.apiKey,r.name)}async function pC(r,e,n=!1){if(fn(r.app))return Promise.reject(Yn(r));const s=jl(r),l=rC(s,e),d=await new uC(s,l,n).execute();return d&&!n&&(delete d.user._redirectEventId,await s._persistUserIfCurrent(d.user),await s._setRedirectUser(null,e)),d}/**
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
 */const mC=10*60*1e3;class gC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_C(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!F_(e)){const l=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Zt(this.auth,l))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=mC&&this.cachedEventUids.clear(),this.cachedEventUids.has(km(e))}saveEventToCache(e){this.cachedEventUids.add(km(e)),this.lastProcessedEventTime=Date.now()}}function km(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function F_({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function _C(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return F_(r);default:return!1}}/**
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
 */async function vC(r,e={}){return Si(r,"GET","/v1/projects",e)}/**
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
 */const yC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wC=/^https?/;async function EC(r){if(r.config.emulator)return;const{authorizedDomains:e}=await vC(r);for(const n of e)try{if(SC(n))return}catch{}wn(r,"unauthorized-domain")}function SC(r){const e=Rc(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const d=new URL(r);return d.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&d.hostname===s}if(!wC.test(n))return!1;if(yC.test(r))return s===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
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
 */const IC=new Ls(3e4,6e4);function Rm(){const r=en().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function CC(r){return new Promise((e,n)=>{var s,l,u;function d(){Rm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Rm(),n(Zt(r,"network-request-failed"))},timeout:IC.get()})}if(!((l=(s=en().gapi)===null||s===void 0?void 0:s.iframes)===null||l===void 0)&&l.Iframe)e(gapi.iframes.getContext());else if(!((u=en().gapi)===null||u===void 0)&&u.load)d();else{const f=NI("iframefcb");return en()[f]=()=>{gapi.load?d():n(Zt(r,"network-request-failed"))},kI(`${RI()}?onload=${f}`).catch(p=>n(p))}}).catch(e=>{throw al=null,e})}let al=null;function TC(r){return al=al||CC(r),al}/**
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
 */const kC=new Ls(5e3,15e3),RC="__/auth/iframe",NC="emulator/auth/iframe",PC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},AC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function OC(r){const e=r.config;Q(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?sd(e,NC):`https://${r.config.authDomain}/${RC}`,s={apiKey:e.apiKey,appName:r.name,v:Ei},l=AC.get(r.config.apiHost);l&&(s.eid=l);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${wi(s).slice(1)}`}async function xC(r){const e=await TC(r),n=en().gapi;return Q(n,r,"internal-error"),e.open({where:document.body,url:OC(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:PC,dontclear:!0},s=>new Promise(async(l,u)=>{await s.restyle({setHideOnLeave:!1});const d=Zt(r,"network-request-failed"),f=en().setTimeout(()=>{u(d)},kC.get());function p(){en().clearTimeout(f),l(s)}s.ping(p).then(p,()=>{u(d)})}))}/**
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
 */const DC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},LC=500,MC=600,bC="_blank",FC="http://localhost";class Nm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function UC(r,e,n,s=LC,l=MC){const u=Math.max((window.screen.availHeight-l)/2,0).toString(),d=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const p=Object.assign(Object.assign({},DC),{width:s.toString(),height:l.toString(),top:u,left:d}),g=tt().toLowerCase();n&&(f=__(g)?bC:n),m_(g)&&(e=e||FC,p.scrollbars="yes");const w=Object.entries(p).reduce((S,[O,M])=>`${S}${O}=${M},`,"");if(vI(g)&&f!=="_self")return zC(e||"",f),new Nm(null);const v=window.open(e||"",f,w);Q(v,r,"popup-blocked");try{v.focus()}catch{}return new Nm(v)}function zC(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const jC="__/auth/handler",WC="emulator/auth/handler",VC=encodeURIComponent("fac");async function Pm(r,e,n,s,l,u){Q(r.config.authDomain,r,"auth-domain-config-required"),Q(r.config.apiKey,r,"invalid-api-key");const d={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:Ei,eventId:l};if(e instanceof k_){e.setDefaultLanguage(r.languageCode),d.providerId=e.providerId||"",wc(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,v]of Object.entries({}))d[w]=v}if(e instanceof Ms){const w=e.getScopes().filter(v=>v!=="");w.length>0&&(d.scopes=w.join(","))}r.tenantId&&(d.tid=r.tenantId);const f=d;for(const w of Object.keys(f))f[w]===void 0&&delete f[w];const p=await r._getAppCheckToken(),g=p?`#${VC}=${encodeURIComponent(p)}`:"";return`${BC(r)}?${wi(f).slice(1)}${g}`}function BC({config:r}){return r.emulator?sd(r,WC):`https://${r.authDomain}/${jC}`}/**
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
 */const uc="webStorageSupport";class $C{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=O_,this._completeRedirectFn=pC,this._overrideRedirectResult=dC}async _openPopup(e,n,s,l){var u;En((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const d=await Pm(e,n,s,Rc(),l);return UC(e,d,ud())}async _openRedirect(e,n,s,l){await this._originValidation(e);const u=await Pm(e,n,s,Rc(),l);return qI(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:l,promise:u}=this.eventManagers[n];return l?Promise.resolve(l):(En(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await xC(e),s=new gC(e);return n.register("authEvent",l=>(Q(l==null?void 0:l.authEvent,e,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(uc,{type:uc},l=>{var u;const d=(u=l==null?void 0:l[0])===null||u===void 0?void 0:u[uc];d!==void 0&&n(!!d),wn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=EC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return S_()||g_()||ld()}}const HC=$C;var Am="@firebase/auth",Om="1.8.1";/**
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
 */class GC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function qC(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function KC(r){tn(new Bt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:d,authDomain:f}=s.options;Q(d&&!d.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:d,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:I_(r)},g=new CI(s,l,u,p);return AI(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),tn(new Bt("auth-internal",e=>{const n=jl(e.getProvider("auth").getImmediate());return(s=>new GC(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),At(Am,Om,qC(r)),At(Am,Om,"esm2017")}/**
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
 */const QC=5*60,YC=Cg("authIdTokenMaxAge")||QC;let xm=null;const XC=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>YC)return;const l=n==null?void 0:n.token;xm!==l&&(xm=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function JC(r=Xc()){const e=Nr(r,"auth");if(e.isInitialized())return e.getImmediate();const n=PI(r,{popupRedirectResolver:HC,persistence:[nC,$I,O_]}),s=Cg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const d=XC(u.toString());WI(n,d,()=>d(n.currentUser)),jI(n,f=>d(f))}}const l=Sg("auth");return l&&OI(n,`http://${l}`),n}function ZC(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}TI({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=l=>{const u=Zt("internal-error");u.customData=l,n(u)},s.type="text/javascript",s.charset="UTF-8",ZC().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});KC("Browser");var Dm={};const Lm="@firebase/database",Mm="1.0.10";/**
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
 */let U_="";function eT(r){U_=r}/**
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
 */class tT{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ve(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Is(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class nT{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return rn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const z_=function(r){try{if(typeof window<"u"&&typeof window[r]<"u"){const e=window[r];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new tT(e)}}catch{}return new nT},yr=z_("localStorage"),rT=z_("sessionStorage");/**
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
 */const ui=new bl("@firebase/database"),iT=function(){let r=1;return function(){return r++}}(),j_=function(r){const e=C0(r),n=new w0;n.update(e);const s=n.digest();return qc.encodeByteArray(s)},Fs=function(...r){let e="";for(let n=0;n<r.length;n++){const s=r[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Fs.apply(null,s):typeof s=="object"?e+=Ve(s):e+=s,e+=" "}return e};let vs=null,bm=!0;const sT=function(r,e){D(!e,"Can't turn on custom loggers persistently."),ui.logLevel=ue.VERBOSE,vs=ui.log.bind(ui)},Ge=function(...r){if(bm===!0&&(bm=!1,vs===null&&rT.get("logging_enabled")===!0&&sT()),vs){const e=Fs.apply(null,r);vs(e)}},Us=function(r){return function(...e){Ge(r,...e)}},Ac=function(...r){const e="FIREBASE INTERNAL ERROR: "+Fs(...r);ui.error(e)},Sn=function(...r){const e=`FIREBASE FATAL ERROR: ${Fs(...r)}`;throw ui.error(e),new Error(e)},et=function(...r){const e="FIREBASE WARNING: "+Fs(...r);ui.warn(e)},oT=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&et("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},dd=function(r){return typeof r=="number"&&(r!==r||r===Number.POSITIVE_INFINITY||r===Number.NEGATIVE_INFINITY)},lT=function(r){if(document.readyState==="complete")r();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,r())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},fi="[MIN_NAME]",Ir="[MAX_NAME]",Pr=function(r,e){if(r===e)return 0;if(r===fi||e===Ir)return-1;if(e===fi||r===Ir)return 1;{const n=Fm(r),s=Fm(e);return n!==null?s!==null?n-s===0?r.length-e.length:n-s:-1:s!==null?1:r<e?-1:1}},aT=function(r,e){return r===e?0:r<e?-1:1},hs=function(r,e){if(e&&r in e)return e[r];throw new Error("Missing required key ("+r+") in object: "+Ve(e))},hd=function(r){if(typeof r!="object"||r===null)return Ve(r);const e=[];for(const s in r)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ve(e[s]),n+=":",n+=hd(r[e[s]]);return n+="}",n},W_=function(r,e){const n=r.length;if(n<=e)return[r];const s=[];for(let l=0;l<n;l+=e)l+e>n?s.push(r.substring(l,n)):s.push(r.substring(l,l+e));return s};function qe(r,e){for(const n in r)r.hasOwnProperty(n)&&e(n,r[n])}const V_=function(r){D(!dd(r),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let l,u,d,f,p;r===0?(u=0,d=0,l=1/r===-1/0?1:0):(l=r<0,r=Math.abs(r),r>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(r)/Math.LN2),s),u=f+s,d=Math.round(r*Math.pow(2,n-f)-Math.pow(2,n))):(u=0,d=Math.round(r/Math.pow(2,1-s-n))));const g=[];for(p=n;p;p-=1)g.push(d%2?1:0),d=Math.floor(d/2);for(p=e;p;p-=1)g.push(u%2?1:0),u=Math.floor(u/2);g.push(l?1:0),g.reverse();const w=g.join("");let v="";for(p=0;p<64;p+=8){let S=parseInt(w.substr(p,8),2).toString(16);S.length===1&&(S="0"+S),v=v+S}return v.toLowerCase()},uT=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},cT=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function dT(r,e){let n="Unknown Error";r==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":r==="permission_denied"?n="Client doesn't have permission to access the desired data.":r==="unavailable"&&(n="The service is unavailable");const s=new Error(r+" at "+e._path.toString()+": "+n);return s.code=r.toUpperCase(),s}const hT=new RegExp("^-?(0*)\\d{1,10}$"),fT=-2147483648,pT=2147483647,Fm=function(r){if(hT.test(r)){const e=Number(r);if(e>=fT&&e<=pT)return e}return null},Ii=function(r){try{r()}catch(e){setTimeout(()=>{const n=e.stack||"";throw et("Exception was thrown by user callback.",n),e},Math.floor(0))}},mT=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ys=function(r,e){const n=setTimeout(r,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class gT{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){et(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class _T{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(l=>this.auth_=l)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ge("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',et(e)}}class ul{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ul.OWNER="owner";/**
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
 */const fd="5",B_="v",$_="s",H_="r",G_="f",q_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,K_="ls",Q_="p",Oc="ac",Y_="websocket",X_="long_polling";/**
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
 */class J_{constructor(e,n,s,l,u=!1,d="",f=!1,p=!1){this.secure=n,this.namespace=s,this.webSocketOnly=l,this.nodeAdmin=u,this.persistenceKey=d,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=p,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=yr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&yr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function vT(r){return r.host!==r.internalHost||r.isCustomHost()||r.includeNamespaceInQueryParams}function Z_(r,e,n){D(typeof e=="string","typeof type must == string"),D(typeof n=="object","typeof params must == object");let s;if(e===Y_)s=(r.secure?"wss://":"ws://")+r.internalHost+"/.ws?";else if(e===X_)s=(r.secure?"https://":"http://")+r.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);vT(r)&&(n.ns=r.namespace);const l=[];return qe(n,(u,d)=>{l.push(u+"="+d)}),s+l.join("&")}/**
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
 */class yT{constructor(){this.counters_={}}incrementCounter(e,n=1){rn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return i0(this.counters_)}}/**
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
 */const cc={},dc={};function pd(r){const e=r.toString();return cc[e]||(cc[e]=new yT),cc[e]}function wT(r,e){const n=r.toString();return dc[n]||(dc[n]=e()),dc[n]}/**
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
 */class ET{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let l=0;l<s.length;++l)s[l]&&Ii(()=>{this.onMessage_(s[l])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Um="start",ST="close",IT="pLPCommand",CT="pRTLPCB",ev="id",tv="pw",nv="ser",TT="cb",kT="seg",RT="ts",NT="d",PT="dframe",rv=1870,iv=30,AT=rv-iv,OT=25e3,xT=3e4;class si{constructor(e,n,s,l,u,d,f){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.transportSessionId=d,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Us(e),this.stats_=pd(n),this.urlFn=p=>(this.appCheckToken&&(p[Oc]=this.appCheckToken),Z_(n,X_,p))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new ET(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(xT)),lT(()=>{if(this.isClosed_)return;this.scriptTagHolder=new md((...u)=>{const[d,f,p,g,w]=u;if(this.incrementIncomingBytes_(u),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,d===Um)this.id=f,this.password=p;else if(d===ST)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+d)},(...u)=>{const[d,f]=u;this.incrementIncomingBytes_(u),this.myPacketOrderer.handleResponse(d,f)},()=>{this.onClosed_()},this.urlFn);const s={};s[Um]="t",s[nv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[TT]=this.scriptTagHolder.uniqueCallbackIdentifier),s[B_]=fd,this.transportSessionId&&(s[$_]=this.transportSessionId),this.lastSessionId&&(s[K_]=this.lastSessionId),this.applicationId&&(s[Q_]=this.applicationId),this.appCheckToken&&(s[Oc]=this.appCheckToken),typeof location<"u"&&location.hostname&&q_.test(location.hostname)&&(s[H_]=G_);const l=this.urlFn(s);this.log_("Connecting via long-poll to "+l),this.scriptTagHolder.addTag(l,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){si.forceAllow_=!0}static forceDisallow(){si.forceDisallow_=!0}static isAvailable(){return si.forceAllow_?!0:!si.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!uT()&&!cT()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=wg(n),l=W_(s,AT);for(let u=0;u<l.length;u++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,l.length,l[u]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[PT]="t",s[ev]=e,s[tv]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ve(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class md{constructor(e,n,s,l){this.onDisconnect=s,this.urlFn=l,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=iT(),window[IT+this.uniqueCallbackIdentifier]=e,window[CT+this.uniqueCallbackIdentifier]=n,this.myIFrame=md.createIFrame_();let u="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(u='<script>document.domain="'+document.domain+'";<\/script>');const d="<html><body>"+u+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(d),this.myIFrame.doc.close()}catch(f){Ge("frame writing exception"),f.stack&&Ge(f.stack),Ge(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ge("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ev]=this.myID,e[tv]=this.myPW,e[nv]=this.currentSerial;let n=this.urlFn(e),s="",l=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+iv+s.length<=rv;){const d=this.pendingSegs.shift();s=s+"&"+kT+l+"="+d.seg+"&"+RT+l+"="+d.ts+"&"+NT+l+"="+d.d,l++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},l=setTimeout(s,Math.floor(OT)),u=()=>{clearTimeout(l),s()};this.addTag(e,u)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const l=s.readyState;(!l||l==="loaded"||l==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ge("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const DT=16384,LT=45e3;let El=null;typeof MozWebSocket<"u"?El=MozWebSocket:typeof WebSocket<"u"&&(El=WebSocket);class jt{constructor(e,n,s,l,u,d,f){this.connId=e,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Us(this.connId),this.stats_=pd(n),this.connURL=jt.connectionURL_(n,d,f,l,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,l,u){const d={};return d[B_]=fd,typeof location<"u"&&location.hostname&&q_.test(location.hostname)&&(d[H_]=G_),n&&(d[$_]=n),s&&(d[K_]=s),l&&(d[Oc]=l),u&&(d[Q_]=u),Z_(e,Y_,d)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,yr.set("previous_websocket_failure",!0);try{let s;Rg(),this.mySock=new El(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_()}}start(){}static forceDisallow(){jt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&El!==null&&!jt.forceDisallow_}static previouslyFailed(){return yr.isInMemoryStorage||yr.get("previous_websocket_failure")===!0}markConnectionHealthy(){yr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Is(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(D(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=W_(n,DT);s.length>1&&this.sendString_(String(s.length));for(let l=0;l<s.length;l++)this.sendString_(s[l])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(LT))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}jt.responsesRequiredToBeHealthy=2;jt.healthyTimeout=3e4;/**
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
 */class Rs{static get ALL_TRANSPORTS(){return[si,jt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=jt&&jt.isAvailable();let s=n&&!jt.previouslyFailed();if(e.webSocketOnly&&(n||et("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[jt];else{const l=this.transports_=[];for(const u of Rs.ALL_TRANSPORTS)u&&u.isAvailable()&&l.push(u);Rs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Rs.globalTransportInitialized_=!1;/**
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
 */const MT=6e4,bT=5e3,FT=10*1024,UT=100*1024,hc="t",zm="d",zT="s",jm="r",jT="e",Wm="o",Vm="a",Bm="n",$m="p",WT="h";class VT{constructor(e,n,s,l,u,d,f,p,g,w){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=l,this.authToken_=u,this.onMessage_=d,this.onReady_=f,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=w,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Us("c:"+this.id+":"),this.transportManager_=new Rs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const l=e.healthyTimeout||0;l>0&&(this.healthyTimeout_=ys(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>UT?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>FT?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(l)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(hc in e){const n=e[hc];n===Vm?this.upgradeIfSecondaryHealthy_():n===jm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Wm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=hs("t",e),s=hs("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:$m,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Vm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Bm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=hs("t",e),s=hs("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=hs(hc,e);if(zm in e){const s=e[zm];if(n===WT){const l=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(l.h=this.repoInfo_.host),this.onHandshake_(l)}else if(n===Bm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let l=0;l<this.pendingDataMessages.length;++l)this.onDataMessage_(this.pendingDataMessages[l]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===zT?this.onConnectionShutdown_(s):n===jm?this.onReset_(s):n===jT?Ac("Server Error: "+s):n===Wm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ac("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,l=e.h;this.sessionId=e.s,this.repoInfo_.host=l,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),fd!==s&&et("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),ys(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(MT))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ys(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(bT))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:$m,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(yr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class sv{put(e,n,s,l){}merge(e,n,s,l){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class ov{constructor(e){this.allowedEvents_=e,this.listeners_={},D(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let l=0;l<s.length;l++)s[l].callback.apply(s[l].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const l=this.getInitialEvent(e);l&&n.apply(s,l)}off(e,n,s){this.validateEventType_(e);const l=this.listeners_[e]||[];for(let u=0;u<l.length;u++)if(l[u].callback===n&&(!s||s===l[u].context)){l.splice(u,1);return}}validateEventType_(e){D(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Sl extends ov{static getInstance(){return new Sl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Qc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return D(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Hm=32,Gm=768;class ce{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let l=0;l<this.pieces_.length;l++)this.pieces_[l].length>0&&(this.pieces_[s]=this.pieces_[l],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function oe(){return new ce("")}function J(r){return r.pieceNum_>=r.pieces_.length?null:r.pieces_[r.pieceNum_]}function Zn(r){return r.pieces_.length-r.pieceNum_}function pe(r){let e=r.pieceNum_;return e<r.pieces_.length&&e++,new ce(r.pieces_,e)}function gd(r){return r.pieceNum_<r.pieces_.length?r.pieces_[r.pieces_.length-1]:null}function BT(r){let e="";for(let n=r.pieceNum_;n<r.pieces_.length;n++)r.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(r.pieces_[n])));return e||"/"}function Ns(r,e=0){return r.pieces_.slice(r.pieceNum_+e)}function lv(r){if(r.pieceNum_>=r.pieces_.length)return null;const e=[];for(let n=r.pieceNum_;n<r.pieces_.length-1;n++)e.push(r.pieces_[n]);return new ce(e,0)}function Ce(r,e){const n=[];for(let s=r.pieceNum_;s<r.pieces_.length;s++)n.push(r.pieces_[s]);if(e instanceof ce)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let l=0;l<s.length;l++)s[l].length>0&&n.push(s[l])}return new ce(n,0)}function te(r){return r.pieceNum_>=r.pieces_.length}function dt(r,e){const n=J(r),s=J(e);if(n===null)return e;if(n===s)return dt(pe(r),pe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+r+")")}function $T(r,e){const n=Ns(r,0),s=Ns(e,0);for(let l=0;l<n.length&&l<s.length;l++){const u=Pr(n[l],s[l]);if(u!==0)return u}return n.length===s.length?0:n.length<s.length?-1:1}function _d(r,e){if(Zn(r)!==Zn(e))return!1;for(let n=r.pieceNum_,s=e.pieceNum_;n<=r.pieces_.length;n++,s++)if(r.pieces_[n]!==e.pieces_[s])return!1;return!0}function Pt(r,e){let n=r.pieceNum_,s=e.pieceNum_;if(Zn(r)>Zn(e))return!1;for(;n<r.pieces_.length;){if(r.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class HT{constructor(e,n){this.errorPrefix_=n,this.parts_=Ns(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ml(this.parts_[s]);av(this)}}function GT(r,e){r.parts_.length>0&&(r.byteLength_+=1),r.parts_.push(e),r.byteLength_+=Ml(e),av(r)}function qT(r){const e=r.parts_.pop();r.byteLength_-=Ml(e),r.parts_.length>0&&(r.byteLength_-=1)}function av(r){if(r.byteLength_>Gm)throw new Error(r.errorPrefix_+"has a key path longer than "+Gm+" bytes ("+r.byteLength_+").");if(r.parts_.length>Hm)throw new Error(r.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Hm+") or object contains a cycle "+_r(r))}function _r(r){return r.parts_.length===0?"":"in property '"+r.parts_.join(".")+"'"}/**
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
 */class vd extends ov{static getInstance(){return new vd}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return D(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const fs=1e3,KT=60*5*1e3,qm=30*1e3,QT=1.3,YT=3e4,XT="server_kill",Km=3;class vn extends sv{constructor(e,n,s,l,u,d,f,p){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=l,this.onServerInfoUpdate_=u,this.authTokenProvider_=d,this.appCheckTokenProvider_=f,this.authOverride_=p,this.id=vn.nextPersistentConnectionId_++,this.log_=Us("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=fs,this.maxReconnectDelay_=KT,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p&&!Rg())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");vd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Sl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const l=++this.requestNumber_,u={r:l,a:e,b:n};this.log_(Ve(u)),D(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(u),s&&(this.requestCBHash_[l]=s)}get(e){this.initConnection_();const n=new Ds,l={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:d=>{const f=d.d;d.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(l),this.outstandingGetCount_++;const u=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(u),n.promise}listen(e,n,s,l){this.initConnection_();const u=e._queryIdentifier,d=e._path.toString();this.log_("Listen called for "+d+" "+u),this.listens.has(d)||this.listens.set(d,new Map),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),D(!this.listens.get(d).has(u),"listen() called twice for same path/queryId.");const f={onComplete:l,hashFn:n,query:e,tag:s};this.listens.get(d).set(u,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),l=n._queryIdentifier;this.log_("Listen on "+s+" for "+l);const u={p:s},d="q";e.tag&&(u.q=n._queryObject,u.t=e.tag),u.h=e.hashFn(),this.sendRequest(d,u,f=>{const p=f.d,g=f.s;vn.warnOnListenWarnings_(p,n),(this.listens.get(s)&&this.listens.get(s).get(l))===e&&(this.log_("listen response",f),g!=="ok"&&this.removeListen_(s,l),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&rn(e,"w")){const s=hi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const l='".indexOn": "'+n._queryParams.getIndex().toString()+'"',u=n._path.toString();et(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${l} at ${u} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||y0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=qm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=v0(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,l=>{const u=l.s,d=l.d||"error";this.authToken_===e&&(u==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(u,d))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),l=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+l),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,l)&&this.connected_&&this.sendUnlisten_(s,l,e._queryObject,n)}sendUnlisten_(e,n,s,l){this.log_("Unlisten on "+e+" for "+n);const u={p:e},d="n";l&&(u.q=s,u.t=l),this.sendRequest(d,u)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,l){const u={p:n,d:s};this.log_("onDisconnect "+e,u),this.sendRequest(e,u,d=>{l&&setTimeout(()=>{l(d.s,d.d)},Math.floor(0))})}put(e,n,s,l){this.putInternal("p",e,n,s,l)}merge(e,n,s,l){this.putInternal("m",e,n,s,l)}putInternal(e,n,s,l,u){this.initConnection_();const d={p:n,d:s};u!==void 0&&(d.h=u),this.outstandingPuts_.push({action:e,request:d,onComplete:l}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,l=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,u=>{this.log_(n+" response",u),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),l&&l(u.s,u.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const u=s.d;this.log_("reportStats","Error sending stats: "+u)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ve(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ac("Unrecognized action received from server: "+Ve(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){D(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=fs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=fs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>YT&&(this.reconnectDelay_=fs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*QT)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),l=this.id+":"+vn.nextConnectionId_++,u=this.lastSessionId;let d=!1,f=null;const p=function(){f?f.close():(d=!0,s())},g=function(v){D(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(v)};this.realtime_={close:p,sendRequest:g};const w=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[v,S]=await Promise.all([this.authTokenProvider_.getToken(w),this.appCheckTokenProvider_.getToken(w)]);d?Ge("getToken() completed but was canceled"):(Ge("getToken() completed. Creating connection."),this.authToken_=v&&v.accessToken,this.appCheckToken_=S&&S.token,f=new VT(l,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,O=>{et(O+" ("+this.repoInfo_.toString()+")"),this.interrupt(XT)},u))}catch(v){this.log_("Failed to get token: "+v),d||(this.repoInfo_.nodeAdmin&&et(v),p())}}}interrupt(e){Ge("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ge("Resuming connection for reason: "+e),delete this.interruptReasons_[e],wc(this.interruptReasons_)&&(this.reconnectDelay_=fs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(u=>hd(u)).join("$"):s="default";const l=this.removeListen_(e,s);l&&l.onComplete&&l.onComplete("permission_denied")}removeListen_(e,n){const s=new ce(e).toString();let l;if(this.listens.has(s)){const u=this.listens.get(s);l=u.get(n),u.delete(n),u.size===0&&this.listens.delete(s)}else l=void 0;return l}onAuthRevoked_(e,n){Ge("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Km&&(this.reconnectDelay_=qm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ge("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Km&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+U_.replace(/\./g,"-")]=1,Qc()?e["framework.cordova"]=1:kg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Sl.getInstance().currentlyOnline();return wc(this.interruptReasons_)&&e}}vn.nextPersistentConnectionId_=0;vn.nextConnectionId_=0;/**
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
 */class Z{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Z(e,n)}}/**
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
 */class Bl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new Z(fi,e),l=new Z(fi,n);return this.compare(s,l)!==0}minPost(){return Z.MIN}}/**
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
 */let el;class uv extends Bl{static get __EMPTY_NODE(){return el}static set __EMPTY_NODE(e){el=e}compare(e,n){return Pr(e.name,n.name)}isDefinedOn(e){throw yi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Z.MIN}maxPost(){return new Z(Ir,el)}makePost(e,n){return D(typeof e=="string","KeyIndex indexValue must always be a string."),new Z(e,el)}toString(){return".key"}}const ci=new uv;/**
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
 */class tl{constructor(e,n,s,l,u=null){this.isReverse_=l,this.resultGenerator_=u,this.nodeStack_=[];let d=1;for(;!e.isEmpty();)if(e=e,d=n?s(e.key,n):1,l&&(d*=-1),d<0)this.isReverse_?e=e.left:e=e.right;else if(d===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class je{constructor(e,n,s,l,u){this.key=e,this.value=n,this.color=s??je.RED,this.left=l??ht.EMPTY_NODE,this.right=u??ht.EMPTY_NODE}copy(e,n,s,l,u){return new je(e??this.key,n??this.value,s??this.color,l??this.left,u??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let l=this;const u=s(e,l.key);return u<0?l=l.copy(null,null,null,l.left.insert(e,n,s),null):u===0?l=l.copy(null,n,null,null,null):l=l.copy(null,null,null,null,l.right.insert(e,n,s)),l.fixUp_()}removeMin_(){if(this.left.isEmpty())return ht.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,l;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return ht.EMPTY_NODE;l=s.right.min_(),s=s.copy(l.key,l.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}je.RED=!0;je.BLACK=!1;class JT{copy(e,n,s,l,u){return this}insert(e,n,s){return new je(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ht{constructor(e,n=ht.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ht(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,je.BLACK,null,null))}remove(e){return new ht(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,je.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,l=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return l?l.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(l=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new tl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new tl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new tl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new tl(this.root_,null,this.comparator_,!0,e)}}ht.EMPTY_NODE=new JT;/**
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
 */function ZT(r,e){return Pr(r.name,e.name)}function yd(r,e){return Pr(r,e)}/**
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
 */let xc;function ek(r){xc=r}const cv=function(r){return typeof r=="number"?"number:"+V_(r):"string:"+r},dv=function(r){if(r.isLeafNode()){const e=r.val();D(typeof e=="string"||typeof e=="number"||typeof e=="object"&&rn(e,".sv"),"Priority must be a string or number.")}else D(r===xc||r.isEmpty(),"priority of unexpected type.");D(r===xc||r.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Qm;class ze{static set __childrenNodeConstructor(e){Qm=e}static get __childrenNodeConstructor(){return Qm}constructor(e,n=ze.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,D(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),dv(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ze(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ze.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return te(e)?this:J(e)===".priority"?this.priorityNode_:ze.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ze.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=J(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(D(s!==".priority"||Zn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ze.__childrenNodeConstructor.EMPTY_NODE.updateChild(pe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+cv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=V_(this.value_):e+=this.value_,this.lazyHash_=j_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ze.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ze.__childrenNodeConstructor?-1:(D(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,l=ze.VALUE_TYPE_ORDER.indexOf(n),u=ze.VALUE_TYPE_ORDER.indexOf(s);return D(l>=0,"Unknown leaf type: "+n),D(u>=0,"Unknown leaf type: "+s),l===u?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:u-l}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ze.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let hv,fv;function tk(r){hv=r}function nk(r){fv=r}class rk extends Bl{compare(e,n){const s=e.node.getPriority(),l=n.node.getPriority(),u=s.compareTo(l);return u===0?Pr(e.name,n.name):u}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Z.MIN}maxPost(){return new Z(Ir,new ze("[PRIORITY-POST]",fv))}makePost(e,n){const s=hv(e);return new Z(n,new ze("[PRIORITY-POST]",s))}toString(){return".priority"}}const Te=new rk;/**
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
 */const ik=Math.log(2);class sk{constructor(e){const n=u=>parseInt(Math.log(u)/ik,10),s=u=>parseInt(Array(u+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const l=s(this.count);this.bits_=e+1&l}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Il=function(r,e,n,s){r.sort(e);const l=function(p,g){const w=g-p;let v,S;if(w===0)return null;if(w===1)return v=r[p],S=n?n(v):v,new je(S,v.node,je.BLACK,null,null);{const O=parseInt(w/2,10)+p,M=l(p,O),V=l(O+1,g);return v=r[O],S=n?n(v):v,new je(S,v.node,je.BLACK,M,V)}},u=function(p){let g=null,w=null,v=r.length;const S=function(M,V){const G=v-M,Ae=v;v-=M;const Me=l(G+1,Ae),Oe=r[G],ke=n?n(Oe):Oe;O(new je(ke,Oe.node,V,null,Me))},O=function(M){g?(g.left=M,g=M):(w=M,g=M)};for(let M=0;M<p.count;++M){const V=p.nextBitIsOne(),G=Math.pow(2,p.count-(M+1));V?S(G,je.BLACK):(S(G,je.BLACK),S(G,je.RED))}return w},d=new sk(r.length),f=u(d);return new ht(s||e,f)};/**
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
 */let fc;const ni={};class _n{static get Default(){return D(ni&&Te,"ChildrenNode.ts has not been loaded"),fc=fc||new _n({".priority":ni},{".priority":Te}),fc}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=hi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ht?n:null}hasIndex(e){return rn(this.indexSet_,e.toString())}addIndex(e,n){D(e!==ci,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let l=!1;const u=n.getIterator(Z.Wrap);let d=u.getNext();for(;d;)l=l||e.isDefinedOn(d.node),s.push(d),d=u.getNext();let f;l?f=Il(s,e.getCompare()):f=ni;const p=e.toString(),g=Object.assign({},this.indexSet_);g[p]=e;const w=Object.assign({},this.indexes_);return w[p]=f,new _n(w,g)}addToIndexes(e,n){const s=hl(this.indexes_,(l,u)=>{const d=hi(this.indexSet_,u);if(D(d,"Missing index implementation for "+u),l===ni)if(d.isDefinedOn(e.node)){const f=[],p=n.getIterator(Z.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&f.push(g),g=p.getNext();return f.push(e),Il(f,d.getCompare())}else return ni;else{const f=n.get(e.name);let p=l;return f&&(p=p.remove(new Z(e.name,f))),p.insert(e,e.node)}});return new _n(s,this.indexSet_)}removeFromIndexes(e,n){const s=hl(this.indexes_,l=>{if(l===ni)return l;{const u=n.get(e.name);return u?l.remove(new Z(e.name,u)):l}});return new _n(s,this.indexSet_)}}/**
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
 */let ps;class q{static get EMPTY_NODE(){return ps||(ps=new q(new ht(yd),null,_n.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&dv(this.priorityNode_),this.children_.isEmpty()&&D(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ps}updatePriority(e){return this.children_.isEmpty()?this:new q(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ps:n}}getChild(e){const n=J(e);return n===null?this:this.getImmediateChild(n).getChild(pe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(D(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new Z(e,n);let l,u;n.isEmpty()?(l=this.children_.remove(e),u=this.indexMap_.removeFromIndexes(s,this.children_)):(l=this.children_.insert(e,n),u=this.indexMap_.addToIndexes(s,this.children_));const d=l.isEmpty()?ps:this.priorityNode_;return new q(l,d,u)}}updateChild(e,n){const s=J(e);if(s===null)return n;{D(J(e)!==".priority"||Zn(e)===1,".priority must be the last token in a path");const l=this.getImmediateChild(s).updateChild(pe(e),n);return this.updateImmediateChild(s,l)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,l=0,u=!0;if(this.forEachChild(Te,(d,f)=>{n[d]=f.val(e),s++,u&&q.INTEGER_REGEXP_.test(d)?l=Math.max(l,Number(d)):u=!1}),!e&&u&&l<2*s){const d=[];for(const f in n)d[f]=n[f];return d}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+cv(this.getPriority().val())+":"),this.forEachChild(Te,(n,s)=>{const l=s.hash();l!==""&&(e+=":"+n+":"+l)}),this.lazyHash_=e===""?"":j_(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const l=this.resolveIndex_(s);if(l){const u=l.getPredecessorKey(new Z(e,n));return u?u.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Z(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Z(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(l=>n(l.name,l.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,l=>l);{const l=this.children_.getIteratorFrom(e.name,Z.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)<0;)l.getNext(),u=l.peek();return l}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,l=>l);{const l=this.children_.getReverseIteratorFrom(e.name,Z.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)>0;)l.getNext(),u=l.peek();return l}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===zs?-1:0}withIndex(e){if(e===ci||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new q(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ci||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Te),l=n.getIterator(Te);let u=s.getNext(),d=l.getNext();for(;u&&d;){if(u.name!==d.name||!u.node.equals(d.node))return!1;u=s.getNext(),d=l.getNext()}return u===null&&d===null}else return!1;else return!1}}resolveIndex_(e){return e===ci?null:this.indexMap_.get(e.toString())}}q.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ok extends q{constructor(){super(new ht(yd),q.EMPTY_NODE,_n.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return q.EMPTY_NODE}isEmpty(){return!1}}const zs=new ok;Object.defineProperties(Z,{MIN:{value:new Z(fi,q.EMPTY_NODE)},MAX:{value:new Z(Ir,zs)}});uv.__EMPTY_NODE=q.EMPTY_NODE;ze.__childrenNodeConstructor=q;ek(zs);nk(zs);/**
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
 */const lk=!0;function We(r,e=null){if(r===null)return q.EMPTY_NODE;if(typeof r=="object"&&".priority"in r&&(e=r[".priority"]),D(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof r=="object"&&".value"in r&&r[".value"]!==null&&(r=r[".value"]),typeof r!="object"||".sv"in r){const n=r;return new ze(n,We(e))}if(!(r instanceof Array)&&lk){const n=[];let s=!1;if(qe(r,(d,f)=>{if(d.substring(0,1)!=="."){const p=We(f);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),n.push(new Z(d,p)))}}),n.length===0)return q.EMPTY_NODE;const u=Il(n,ZT,d=>d.name,yd);if(s){const d=Il(n,Te.getCompare());return new q(u,We(e),new _n({".priority":d},{".priority":Te}))}else return new q(u,We(e),_n.Default)}else{let n=q.EMPTY_NODE;return qe(r,(s,l)=>{if(rn(r,s)&&s.substring(0,1)!=="."){const u=We(l);(u.isLeafNode()||!u.isEmpty())&&(n=n.updateImmediateChild(s,u))}}),n.updatePriority(We(e))}}tk(We);/**
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
 */class ak extends Bl{constructor(e){super(),this.indexPath_=e,D(!te(e)&&J(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),l=this.extractChild(n.node),u=s.compareTo(l);return u===0?Pr(e.name,n.name):u}makePost(e,n){const s=We(e),l=q.EMPTY_NODE.updateChild(this.indexPath_,s);return new Z(n,l)}maxPost(){const e=q.EMPTY_NODE.updateChild(this.indexPath_,zs);return new Z(Ir,e)}toString(){return Ns(this.indexPath_,0).join("/")}}/**
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
 */class uk extends Bl{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Pr(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Z.MIN}maxPost(){return Z.MAX}makePost(e,n){const s=We(e);return new Z(n,s)}toString(){return".value"}}const ck=new uk;/**
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
 */function pv(r){return{type:"value",snapshotNode:r}}function pi(r,e){return{type:"child_added",snapshotNode:e,childName:r}}function Ps(r,e){return{type:"child_removed",snapshotNode:e,childName:r}}function As(r,e,n){return{type:"child_changed",snapshotNode:e,childName:r,oldSnap:n}}function dk(r,e){return{type:"child_moved",snapshotNode:e,childName:r}}/**
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
 */class wd{constructor(e){this.index_=e}updateChild(e,n,s,l,u,d){D(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(n);return f.getChild(l).equals(s.getChild(l))&&f.isEmpty()===s.isEmpty()||(d!=null&&(s.isEmpty()?e.hasChild(n)?d.trackChildChange(Ps(n,f)):D(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?d.trackChildChange(pi(n,s)):d.trackChildChange(As(n,s,f))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Te,(l,u)=>{n.hasChild(l)||s.trackChildChange(Ps(l,u))}),n.isLeafNode()||n.forEachChild(Te,(l,u)=>{if(e.hasChild(l)){const d=e.getImmediateChild(l);d.equals(u)||s.trackChildChange(As(l,u,d))}else s.trackChildChange(pi(l,u))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?q.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Os{constructor(e){this.indexedFilter_=new wd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Os.getStartPost_(e),this.endPost_=Os.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,l,u,d){return this.matches(new Z(n,s))||(s=q.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,l,u,d)}updateFullNode(e,n,s){n.isLeafNode()&&(n=q.EMPTY_NODE);let l=n.withIndex(this.index_);l=l.updatePriority(q.EMPTY_NODE);const u=this;return n.forEachChild(Te,(d,f)=>{u.matches(new Z(d,f))||(l=l.updateImmediateChild(d,q.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class hk{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Os(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,l,u,d){return this.rangedFilter_.matches(new Z(n,s))||(s=q.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,l,u,d):this.fullLimitUpdateChild_(e,n,s,u,d)}updateFullNode(e,n,s){let l;if(n.isLeafNode()||n.isEmpty())l=q.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){l=q.EMPTY_NODE.withIndex(this.index_);let u;this.reverse_?u=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):u=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let d=0;for(;u.hasNext()&&d<this.limit_;){const f=u.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))l=l.updateImmediateChild(f.name,f.node),d++;else break;else continue}}else{l=n.withIndex(this.index_),l=l.updatePriority(q.EMPTY_NODE);let u;this.reverse_?u=l.getReverseIterator(this.index_):u=l.getIterator(this.index_);let d=0;for(;u.hasNext();){const f=u.getNext();d<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?d++:l=l.updateImmediateChild(f.name,q.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,l,u){let d;if(this.reverse_){const v=this.index_.getCompare();d=(S,O)=>v(O,S)}else d=this.index_.getCompare();const f=e;D(f.numChildren()===this.limit_,"");const p=new Z(n,s),g=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),w=this.rangedFilter_.matches(p);if(f.hasChild(n)){const v=f.getImmediateChild(n);let S=l.getChildAfterChild(this.index_,g,this.reverse_);for(;S!=null&&(S.name===n||f.hasChild(S.name));)S=l.getChildAfterChild(this.index_,S,this.reverse_);const O=S==null?1:d(S,p);if(w&&!s.isEmpty()&&O>=0)return u!=null&&u.trackChildChange(As(n,s,v)),f.updateImmediateChild(n,s);{u!=null&&u.trackChildChange(Ps(n,v));const V=f.updateImmediateChild(n,q.EMPTY_NODE);return S!=null&&this.rangedFilter_.matches(S)?(u!=null&&u.trackChildChange(pi(S.name,S.node)),V.updateImmediateChild(S.name,S.node)):V}}else return s.isEmpty()?e:w&&d(g,p)>=0?(u!=null&&(u.trackChildChange(Ps(g.name,g.node)),u.trackChildChange(pi(n,s))),f.updateImmediateChild(n,s).updateImmediateChild(g.name,q.EMPTY_NODE)):e}}/**
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
 */class Ed{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Te}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return D(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return D(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:fi}hasEnd(){return this.endSet_}getIndexEndValue(){return D(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return D(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ir}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return D(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Te}copy(){const e=new Ed;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function fk(r){return r.loadsAllData()?new wd(r.getIndex()):r.hasLimit()?new hk(r):new Os(r)}function Ym(r){const e={};if(r.isDefault())return e;let n;if(r.index_===Te?n="$priority":r.index_===ck?n="$value":r.index_===ci?n="$key":(D(r.index_ instanceof ak,"Unrecognized index type!"),n=r.index_.toString()),e.orderBy=Ve(n),r.startSet_){const s=r.startAfterSet_?"startAfter":"startAt";e[s]=Ve(r.indexStartValue_),r.startNameSet_&&(e[s]+=","+Ve(r.indexStartName_))}if(r.endSet_){const s=r.endBeforeSet_?"endBefore":"endAt";e[s]=Ve(r.indexEndValue_),r.endNameSet_&&(e[s]+=","+Ve(r.indexEndName_))}return r.limitSet_&&(r.isViewFromLeft()?e.limitToFirst=r.limit_:e.limitToLast=r.limit_),e}function Xm(r){const e={};if(r.startSet_&&(e.sp=r.indexStartValue_,r.startNameSet_&&(e.sn=r.indexStartName_),e.sin=!r.startAfterSet_),r.endSet_&&(e.ep=r.indexEndValue_,r.endNameSet_&&(e.en=r.indexEndName_),e.ein=!r.endBeforeSet_),r.limitSet_){e.l=r.limit_;let n=r.viewFrom_;n===""&&(r.isViewFromLeft()?n="l":n="r"),e.vf=n}return r.index_!==Te&&(e.i=r.index_.toString()),e}/**
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
 */class Cl extends sv{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(D(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,l){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=l,this.log_=Us("p:rest:"),this.listens_={}}listen(e,n,s,l){const u=e._path.toString();this.log_("Listen called for "+u+" "+e._queryIdentifier);const d=Cl.getListenId_(e,s),f={};this.listens_[d]=f;const p=Ym(e._queryParams);this.restRequest_(u+".json",p,(g,w)=>{let v=w;if(g===404&&(v=null,g=null),g===null&&this.onDataUpdate_(u,v,!1,s),hi(this.listens_,d)===f){let S;g?g===401?S="permission_denied":S="rest_error:"+g:S="ok",l(S,null)}})}unlisten(e,n){const s=Cl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Ym(e._queryParams),s=e._path.toString(),l=new Ds;return this.restRequest_(s+".json",n,(u,d)=>{let f=d;u===404&&(f=null,u=null),u===null?(this.onDataUpdate_(s,f,!1,null),l.resolve(f)):l.reject(new Error(f))}),l.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([l,u])=>{l&&l.accessToken&&(n.auth=l.accessToken),u&&u.token&&(n.ac=u.token);const d=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+wi(n);this.log_("Sending REST request for "+d);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(s&&f.readyState===4){this.log_("REST Response for "+d+" received. status:",f.status,"response:",f.responseText);let p=null;if(f.status>=200&&f.status<300){try{p=Is(f.responseText)}catch{et("Failed to parse JSON response for "+d+": "+f.responseText)}s(null,p)}else f.status!==401&&f.status!==404&&et("Got unsuccessful REST response for "+d+" Status: "+f.status),s(f.status);s=null}},f.open("GET",d,!0),f.send()})}}/**
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
 */class pk{constructor(){this.rootNode_=q.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Tl(){return{value:null,children:new Map}}function mv(r,e,n){if(te(e))r.value=n,r.children.clear();else if(r.value!==null)r.value=r.value.updateChild(e,n);else{const s=J(e);r.children.has(s)||r.children.set(s,Tl());const l=r.children.get(s);e=pe(e),mv(l,e,n)}}function Dc(r,e,n){r.value!==null?n(e,r.value):mk(r,(s,l)=>{const u=new ce(e.toString()+"/"+s);Dc(l,u,n)})}function mk(r,e){r.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class gk{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&qe(this.last_,(s,l)=>{n[s]=n[s]-l}),this.last_=e,n}}/**
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
 */const Jm=10*1e3,_k=30*1e3,vk=5*60*1e3;class yk{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new gk(e);const s=Jm+(_k-Jm)*Math.random();ys(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;qe(e,(l,u)=>{u>0&&rn(this.statsToReport_,l)&&(n[l]=u,s=!0)}),s&&this.server_.reportStats(n),ys(this.reportStats_.bind(this),Math.floor(Math.random()*2*vk))}}/**
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
 */var Wt;(function(r){r[r.OVERWRITE=0]="OVERWRITE",r[r.MERGE=1]="MERGE",r[r.ACK_USER_WRITE=2]="ACK_USER_WRITE",r[r.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Wt||(Wt={}));function Sd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Id(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Cd(r){return{fromUser:!1,fromServer:!0,queryId:r,tagged:!0}}/**
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
 */class kl{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Wt.ACK_USER_WRITE,this.source=Sd()}operationForChild(e){if(te(this.path)){if(this.affectedTree.value!=null)return D(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ce(e));return new kl(oe(),n,this.revert)}}else return D(J(this.path)===e,"operationForChild called for unrelated child."),new kl(pe(this.path),this.affectedTree,this.revert)}}/**
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
 */class xs{constructor(e,n){this.source=e,this.path=n,this.type=Wt.LISTEN_COMPLETE}operationForChild(e){return te(this.path)?new xs(this.source,oe()):new xs(this.source,pe(this.path))}}/**
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
 */class Cr{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Wt.OVERWRITE}operationForChild(e){return te(this.path)?new Cr(this.source,oe(),this.snap.getImmediateChild(e)):new Cr(this.source,pe(this.path),this.snap)}}/**
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
 */class mi{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Wt.MERGE}operationForChild(e){if(te(this.path)){const n=this.children.subtree(new ce(e));return n.isEmpty()?null:n.value?new Cr(this.source,oe(),n.value):new mi(this.source,oe(),n)}else return D(J(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new mi(this.source,pe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Tr{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(te(e))return this.isFullyInitialized()&&!this.filtered_;const n=J(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class wk{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Ek(r,e,n,s){const l=[],u=[];return e.forEach(d=>{d.type==="child_changed"&&r.index_.indexedValueChanged(d.oldSnap,d.snapshotNode)&&u.push(dk(d.childName,d.snapshotNode))}),ms(r,l,"child_removed",e,s,n),ms(r,l,"child_added",e,s,n),ms(r,l,"child_moved",u,s,n),ms(r,l,"child_changed",e,s,n),ms(r,l,"value",e,s,n),l}function ms(r,e,n,s,l,u){const d=s.filter(f=>f.type===n);d.sort((f,p)=>Ik(r,f,p)),d.forEach(f=>{const p=Sk(r,f,u);l.forEach(g=>{g.respondsTo(f.type)&&e.push(g.createEvent(p,r.query_))})})}function Sk(r,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,r.index_)),e}function Ik(r,e,n){if(e.childName==null||n.childName==null)throw yi("Should only compare child_ events.");const s=new Z(e.childName,e.snapshotNode),l=new Z(n.childName,n.snapshotNode);return r.index_.compare(s,l)}/**
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
 */function $l(r,e){return{eventCache:r,serverCache:e}}function ws(r,e,n,s){return $l(new Tr(e,n,s),r.serverCache)}function gv(r,e,n,s){return $l(r.eventCache,new Tr(e,n,s))}function Lc(r){return r.eventCache.isFullyInitialized()?r.eventCache.getNode():null}function kr(r){return r.serverCache.isFullyInitialized()?r.serverCache.getNode():null}/**
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
 */let pc;const Ck=()=>(pc||(pc=new ht(aT)),pc);class fe{static fromObject(e){let n=new fe(null);return qe(e,(s,l)=>{n=n.set(new ce(s),l)}),n}constructor(e,n=Ck()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:oe(),value:this.value};if(te(e))return null;{const s=J(e),l=this.children.get(s);if(l!==null){const u=l.findRootMostMatchingPathAndValue(pe(e),n);return u!=null?{path:Ce(new ce(s),u.path),value:u.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(te(e))return this;{const n=J(e),s=this.children.get(n);return s!==null?s.subtree(pe(e)):new fe(null)}}set(e,n){if(te(e))return new fe(n,this.children);{const s=J(e),u=(this.children.get(s)||new fe(null)).set(pe(e),n),d=this.children.insert(s,u);return new fe(this.value,d)}}remove(e){if(te(e))return this.children.isEmpty()?new fe(null):new fe(null,this.children);{const n=J(e),s=this.children.get(n);if(s){const l=s.remove(pe(e));let u;return l.isEmpty()?u=this.children.remove(n):u=this.children.insert(n,l),this.value===null&&u.isEmpty()?new fe(null):new fe(this.value,u)}else return this}}get(e){if(te(e))return this.value;{const n=J(e),s=this.children.get(n);return s?s.get(pe(e)):null}}setTree(e,n){if(te(e))return n;{const s=J(e),u=(this.children.get(s)||new fe(null)).setTree(pe(e),n);let d;return u.isEmpty()?d=this.children.remove(s):d=this.children.insert(s,u),new fe(this.value,d)}}fold(e){return this.fold_(oe(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((l,u)=>{s[l]=u.fold_(Ce(e,l),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,oe(),n)}findOnPath_(e,n,s){const l=this.value?s(n,this.value):!1;if(l)return l;if(te(e))return null;{const u=J(e),d=this.children.get(u);return d?d.findOnPath_(pe(e),Ce(n,u),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,oe(),n)}foreachOnPath_(e,n,s){if(te(e))return this;{this.value&&s(n,this.value);const l=J(e),u=this.children.get(l);return u?u.foreachOnPath_(pe(e),Ce(n,l),s):new fe(null)}}foreach(e){this.foreach_(oe(),e)}foreach_(e,n){this.children.inorderTraversal((s,l)=>{l.foreach_(Ce(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class Vt{constructor(e){this.writeTree_=e}static empty(){return new Vt(new fe(null))}}function Es(r,e,n){if(te(e))return new Vt(new fe(n));{const s=r.writeTree_.findRootMostValueAndPath(e);if(s!=null){const l=s.path;let u=s.value;const d=dt(l,e);return u=u.updateChild(d,n),new Vt(r.writeTree_.set(l,u))}else{const l=new fe(n),u=r.writeTree_.setTree(e,l);return new Vt(u)}}}function Mc(r,e,n){let s=r;return qe(n,(l,u)=>{s=Es(s,Ce(e,l),u)}),s}function Zm(r,e){if(te(e))return Vt.empty();{const n=r.writeTree_.setTree(e,new fe(null));return new Vt(n)}}function bc(r,e){return Ar(r,e)!=null}function Ar(r,e){const n=r.writeTree_.findRootMostValueAndPath(e);return n!=null?r.writeTree_.get(n.path).getChild(dt(n.path,e)):null}function eg(r){const e=[],n=r.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Te,(s,l)=>{e.push(new Z(s,l))}):r.writeTree_.children.inorderTraversal((s,l)=>{l.value!=null&&e.push(new Z(s,l.value))}),e}function Xn(r,e){if(te(e))return r;{const n=Ar(r,e);return n!=null?new Vt(new fe(n)):new Vt(r.writeTree_.subtree(e))}}function Fc(r){return r.writeTree_.isEmpty()}function gi(r,e){return _v(oe(),r.writeTree_,e)}function _v(r,e,n){if(e.value!=null)return n.updateChild(r,e.value);{let s=null;return e.children.inorderTraversal((l,u)=>{l===".priority"?(D(u.value!==null,"Priority writes must always be leaf nodes"),s=u.value):n=_v(Ce(r,l),u,n)}),!n.getChild(r).isEmpty()&&s!==null&&(n=n.updateChild(Ce(r,".priority"),s)),n}}/**
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
 */function Td(r,e){return Ev(e,r)}function Tk(r,e,n,s,l){D(s>r.lastWriteId,"Stacking an older write on top of newer ones"),l===void 0&&(l=!0),r.allWrites.push({path:e,snap:n,writeId:s,visible:l}),l&&(r.visibleWrites=Es(r.visibleWrites,e,n)),r.lastWriteId=s}function kk(r,e,n,s){D(s>r.lastWriteId,"Stacking an older merge on top of newer ones"),r.allWrites.push({path:e,children:n,writeId:s,visible:!0}),r.visibleWrites=Mc(r.visibleWrites,e,n),r.lastWriteId=s}function Rk(r,e){for(let n=0;n<r.allWrites.length;n++){const s=r.allWrites[n];if(s.writeId===e)return s}return null}function Nk(r,e){const n=r.allWrites.findIndex(f=>f.writeId===e);D(n>=0,"removeWrite called with nonexistent writeId.");const s=r.allWrites[n];r.allWrites.splice(n,1);let l=s.visible,u=!1,d=r.allWrites.length-1;for(;l&&d>=0;){const f=r.allWrites[d];f.visible&&(d>=n&&Pk(f,s.path)?l=!1:Pt(s.path,f.path)&&(u=!0)),d--}if(l){if(u)return Ak(r),!0;if(s.snap)r.visibleWrites=Zm(r.visibleWrites,s.path);else{const f=s.children;qe(f,p=>{r.visibleWrites=Zm(r.visibleWrites,Ce(s.path,p))})}return!0}else return!1}function Pk(r,e){if(r.snap)return Pt(r.path,e);for(const n in r.children)if(r.children.hasOwnProperty(n)&&Pt(Ce(r.path,n),e))return!0;return!1}function Ak(r){r.visibleWrites=vv(r.allWrites,Ok,oe()),r.allWrites.length>0?r.lastWriteId=r.allWrites[r.allWrites.length-1].writeId:r.lastWriteId=-1}function Ok(r){return r.visible}function vv(r,e,n){let s=Vt.empty();for(let l=0;l<r.length;++l){const u=r[l];if(e(u)){const d=u.path;let f;if(u.snap)Pt(n,d)?(f=dt(n,d),s=Es(s,f,u.snap)):Pt(d,n)&&(f=dt(d,n),s=Es(s,oe(),u.snap.getChild(f)));else if(u.children){if(Pt(n,d))f=dt(n,d),s=Mc(s,f,u.children);else if(Pt(d,n))if(f=dt(d,n),te(f))s=Mc(s,oe(),u.children);else{const p=hi(u.children,J(f));if(p){const g=p.getChild(pe(f));s=Es(s,oe(),g)}}}else throw yi("WriteRecord should have .snap or .children")}}return s}function yv(r,e,n,s,l){if(!s&&!l){const u=Ar(r.visibleWrites,e);if(u!=null)return u;{const d=Xn(r.visibleWrites,e);if(Fc(d))return n;if(n==null&&!bc(d,oe()))return null;{const f=n||q.EMPTY_NODE;return gi(d,f)}}}else{const u=Xn(r.visibleWrites,e);if(!l&&Fc(u))return n;if(!l&&n==null&&!bc(u,oe()))return null;{const d=function(g){return(g.visible||l)&&(!s||!~s.indexOf(g.writeId))&&(Pt(g.path,e)||Pt(e,g.path))},f=vv(r.allWrites,d,e),p=n||q.EMPTY_NODE;return gi(f,p)}}}function xk(r,e,n){let s=q.EMPTY_NODE;const l=Ar(r.visibleWrites,e);if(l)return l.isLeafNode()||l.forEachChild(Te,(u,d)=>{s=s.updateImmediateChild(u,d)}),s;if(n){const u=Xn(r.visibleWrites,e);return n.forEachChild(Te,(d,f)=>{const p=gi(Xn(u,new ce(d)),f);s=s.updateImmediateChild(d,p)}),eg(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}else{const u=Xn(r.visibleWrites,e);return eg(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}}function Dk(r,e,n,s,l){D(s||l,"Either existingEventSnap or existingServerSnap must exist");const u=Ce(e,n);if(bc(r.visibleWrites,u))return null;{const d=Xn(r.visibleWrites,u);return Fc(d)?l.getChild(n):gi(d,l.getChild(n))}}function Lk(r,e,n,s){const l=Ce(e,n),u=Ar(r.visibleWrites,l);if(u!=null)return u;if(s.isCompleteForChild(n)){const d=Xn(r.visibleWrites,l);return gi(d,s.getNode().getImmediateChild(n))}else return null}function Mk(r,e){return Ar(r.visibleWrites,e)}function bk(r,e,n,s,l,u,d){let f;const p=Xn(r.visibleWrites,e),g=Ar(p,oe());if(g!=null)f=g;else if(n!=null)f=gi(p,n);else return[];if(f=f.withIndex(d),!f.isEmpty()&&!f.isLeafNode()){const w=[],v=d.getCompare(),S=u?f.getReverseIteratorFrom(s,d):f.getIteratorFrom(s,d);let O=S.getNext();for(;O&&w.length<l;)v(O,s)!==0&&w.push(O),O=S.getNext();return w}else return[]}function Fk(){return{visibleWrites:Vt.empty(),allWrites:[],lastWriteId:-1}}function Rl(r,e,n,s){return yv(r.writeTree,r.treePath,e,n,s)}function kd(r,e){return xk(r.writeTree,r.treePath,e)}function tg(r,e,n,s){return Dk(r.writeTree,r.treePath,e,n,s)}function Nl(r,e){return Mk(r.writeTree,Ce(r.treePath,e))}function Uk(r,e,n,s,l,u){return bk(r.writeTree,r.treePath,e,n,s,l,u)}function Rd(r,e,n){return Lk(r.writeTree,r.treePath,e,n)}function wv(r,e){return Ev(Ce(r.treePath,e),r.writeTree)}function Ev(r,e){return{treePath:r,writeTree:e}}/**
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
 */class zk{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;D(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),D(s!==".priority","Only non-priority child changes can be tracked.");const l=this.changeMap.get(s);if(l){const u=l.type;if(n==="child_added"&&u==="child_removed")this.changeMap.set(s,As(s,e.snapshotNode,l.snapshotNode));else if(n==="child_removed"&&u==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&u==="child_changed")this.changeMap.set(s,Ps(s,l.oldSnap));else if(n==="child_changed"&&u==="child_added")this.changeMap.set(s,pi(s,e.snapshotNode));else if(n==="child_changed"&&u==="child_changed")this.changeMap.set(s,As(s,e.snapshotNode,l.oldSnap));else throw yi("Illegal combination of changes: "+e+" occurred after "+l)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class jk{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Sv=new jk;class Nd{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Tr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Rd(this.writes_,e,s)}}getChildAfterChild(e,n,s){const l=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:kr(this.viewCache_),u=Uk(this.writes_,l,n,1,s,e);return u.length===0?null:u[0]}}/**
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
 */function Wk(r){return{filter:r}}function Vk(r,e){D(e.eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),D(e.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed")}function Bk(r,e,n,s,l){const u=new zk;let d,f;if(n.type===Wt.OVERWRITE){const g=n;g.source.fromUser?d=Uc(r,e,g.path,g.snap,s,l,u):(D(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered()&&!te(g.path),d=Pl(r,e,g.path,g.snap,s,l,f,u))}else if(n.type===Wt.MERGE){const g=n;g.source.fromUser?d=Hk(r,e,g.path,g.children,s,l,u):(D(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered(),d=zc(r,e,g.path,g.children,s,l,f,u))}else if(n.type===Wt.ACK_USER_WRITE){const g=n;g.revert?d=Kk(r,e,g.path,s,l,u):d=Gk(r,e,g.path,g.affectedTree,s,l,u)}else if(n.type===Wt.LISTEN_COMPLETE)d=qk(r,e,n.path,s,u);else throw yi("Unknown operation type: "+n.type);const p=u.getChanges();return $k(e,d,p),{viewCache:d,changes:p}}function $k(r,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const l=s.getNode().isLeafNode()||s.getNode().isEmpty(),u=Lc(r);(n.length>0||!r.eventCache.isFullyInitialized()||l&&!s.getNode().equals(u)||!s.getNode().getPriority().equals(u.getPriority()))&&n.push(pv(Lc(e)))}}function Iv(r,e,n,s,l,u){const d=e.eventCache;if(Nl(s,n)!=null)return e;{let f,p;if(te(n))if(D(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=kr(e),w=g instanceof q?g:q.EMPTY_NODE,v=kd(s,w);f=r.filter.updateFullNode(e.eventCache.getNode(),v,u)}else{const g=Rl(s,kr(e));f=r.filter.updateFullNode(e.eventCache.getNode(),g,u)}else{const g=J(n);if(g===".priority"){D(Zn(n)===1,"Can't have a priority with additional path components");const w=d.getNode();p=e.serverCache.getNode();const v=tg(s,n,w,p);v!=null?f=r.filter.updatePriority(w,v):f=d.getNode()}else{const w=pe(n);let v;if(d.isCompleteForChild(g)){p=e.serverCache.getNode();const S=tg(s,n,d.getNode(),p);S!=null?v=d.getNode().getImmediateChild(g).updateChild(w,S):v=d.getNode().getImmediateChild(g)}else v=Rd(s,g,e.serverCache);v!=null?f=r.filter.updateChild(d.getNode(),g,v,w,l,u):f=d.getNode()}}return ws(e,f,d.isFullyInitialized()||te(n),r.filter.filtersNodes())}}function Pl(r,e,n,s,l,u,d,f){const p=e.serverCache;let g;const w=d?r.filter:r.filter.getIndexedFilter();if(te(n))g=w.updateFullNode(p.getNode(),s,null);else if(w.filtersNodes()&&!p.isFiltered()){const O=p.getNode().updateChild(n,s);g=w.updateFullNode(p.getNode(),O,null)}else{const O=J(n);if(!p.isCompleteForPath(n)&&Zn(n)>1)return e;const M=pe(n),G=p.getNode().getImmediateChild(O).updateChild(M,s);O===".priority"?g=w.updatePriority(p.getNode(),G):g=w.updateChild(p.getNode(),O,G,M,Sv,null)}const v=gv(e,g,p.isFullyInitialized()||te(n),w.filtersNodes()),S=new Nd(l,v,u);return Iv(r,v,n,l,S,f)}function Uc(r,e,n,s,l,u,d){const f=e.eventCache;let p,g;const w=new Nd(l,e,u);if(te(n))g=r.filter.updateFullNode(e.eventCache.getNode(),s,d),p=ws(e,g,!0,r.filter.filtersNodes());else{const v=J(n);if(v===".priority")g=r.filter.updatePriority(e.eventCache.getNode(),s),p=ws(e,g,f.isFullyInitialized(),f.isFiltered());else{const S=pe(n),O=f.getNode().getImmediateChild(v);let M;if(te(S))M=s;else{const V=w.getCompleteChild(v);V!=null?gd(S)===".priority"&&V.getChild(lv(S)).isEmpty()?M=V:M=V.updateChild(S,s):M=q.EMPTY_NODE}if(O.equals(M))p=e;else{const V=r.filter.updateChild(f.getNode(),v,M,S,w,d);p=ws(e,V,f.isFullyInitialized(),r.filter.filtersNodes())}}}return p}function ng(r,e){return r.eventCache.isCompleteForChild(e)}function Hk(r,e,n,s,l,u,d){let f=e;return s.foreach((p,g)=>{const w=Ce(n,p);ng(e,J(w))&&(f=Uc(r,f,w,g,l,u,d))}),s.foreach((p,g)=>{const w=Ce(n,p);ng(e,J(w))||(f=Uc(r,f,w,g,l,u,d))}),f}function rg(r,e,n){return n.foreach((s,l)=>{e=e.updateChild(s,l)}),e}function zc(r,e,n,s,l,u,d,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;te(n)?g=s:g=new fe(null).setTree(n,s);const w=e.serverCache.getNode();return g.children.inorderTraversal((v,S)=>{if(w.hasChild(v)){const O=e.serverCache.getNode().getImmediateChild(v),M=rg(r,O,S);p=Pl(r,p,new ce(v),M,l,u,d,f)}}),g.children.inorderTraversal((v,S)=>{const O=!e.serverCache.isCompleteForChild(v)&&S.value===null;if(!w.hasChild(v)&&!O){const M=e.serverCache.getNode().getImmediateChild(v),V=rg(r,M,S);p=Pl(r,p,new ce(v),V,l,u,d,f)}}),p}function Gk(r,e,n,s,l,u,d){if(Nl(l,n)!=null)return e;const f=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(te(n)&&p.isFullyInitialized()||p.isCompleteForPath(n))return Pl(r,e,n,p.getNode().getChild(n),l,u,f,d);if(te(n)){let g=new fe(null);return p.getNode().forEachChild(ci,(w,v)=>{g=g.set(new ce(w),v)}),zc(r,e,n,g,l,u,f,d)}else return e}else{let g=new fe(null);return s.foreach((w,v)=>{const S=Ce(n,w);p.isCompleteForPath(S)&&(g=g.set(w,p.getNode().getChild(S)))}),zc(r,e,n,g,l,u,f,d)}}function qk(r,e,n,s,l){const u=e.serverCache,d=gv(e,u.getNode(),u.isFullyInitialized()||te(n),u.isFiltered());return Iv(r,d,n,s,Sv,l)}function Kk(r,e,n,s,l,u){let d;if(Nl(s,n)!=null)return e;{const f=new Nd(s,e,l),p=e.eventCache.getNode();let g;if(te(n)||J(n)===".priority"){let w;if(e.serverCache.isFullyInitialized())w=Rl(s,kr(e));else{const v=e.serverCache.getNode();D(v instanceof q,"serverChildren would be complete if leaf node"),w=kd(s,v)}w=w,g=r.filter.updateFullNode(p,w,u)}else{const w=J(n);let v=Rd(s,w,e.serverCache);v==null&&e.serverCache.isCompleteForChild(w)&&(v=p.getImmediateChild(w)),v!=null?g=r.filter.updateChild(p,w,v,pe(n),f,u):e.eventCache.getNode().hasChild(w)?g=r.filter.updateChild(p,w,q.EMPTY_NODE,pe(n),f,u):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(d=Rl(s,kr(e)),d.isLeafNode()&&(g=r.filter.updateFullNode(g,d,u)))}return d=e.serverCache.isFullyInitialized()||Nl(s,oe())!=null,ws(e,g,d,r.filter.filtersNodes())}}/**
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
 */class Qk{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,l=new wd(s.getIndex()),u=fk(s);this.processor_=Wk(u);const d=n.serverCache,f=n.eventCache,p=l.updateFullNode(q.EMPTY_NODE,d.getNode(),null),g=u.updateFullNode(q.EMPTY_NODE,f.getNode(),null),w=new Tr(p,d.isFullyInitialized(),l.filtersNodes()),v=new Tr(g,f.isFullyInitialized(),u.filtersNodes());this.viewCache_=$l(v,w),this.eventGenerator_=new wk(this.query_)}get query(){return this.query_}}function Yk(r){return r.viewCache_.serverCache.getNode()}function Xk(r,e){const n=kr(r.viewCache_);return n&&(r.query._queryParams.loadsAllData()||!te(e)&&!n.getImmediateChild(J(e)).isEmpty())?n.getChild(e):null}function ig(r){return r.eventRegistrations_.length===0}function Jk(r,e){r.eventRegistrations_.push(e)}function sg(r,e,n){const s=[];if(n){D(e==null,"A cancel should cancel all event registrations.");const l=r.query._path;r.eventRegistrations_.forEach(u=>{const d=u.createCancelEvent(n,l);d&&s.push(d)})}if(e){let l=[];for(let u=0;u<r.eventRegistrations_.length;++u){const d=r.eventRegistrations_[u];if(!d.matches(e))l.push(d);else if(e.hasAnyCallback()){l=l.concat(r.eventRegistrations_.slice(u+1));break}}r.eventRegistrations_=l}else r.eventRegistrations_=[];return s}function og(r,e,n,s){e.type===Wt.MERGE&&e.source.queryId!==null&&(D(kr(r.viewCache_),"We should always have a full cache before handling merges"),D(Lc(r.viewCache_),"Missing event cache, even though we have a server cache"));const l=r.viewCache_,u=Bk(r.processor_,l,e,n,s);return Vk(r.processor_,u.viewCache),D(u.viewCache.serverCache.isFullyInitialized()||!l.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),r.viewCache_=u.viewCache,Cv(r,u.changes,u.viewCache.eventCache.getNode(),null)}function Zk(r,e){const n=r.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Te,(u,d)=>{s.push(pi(u,d))}),n.isFullyInitialized()&&s.push(pv(n.getNode())),Cv(r,s,n.getNode(),e)}function Cv(r,e,n,s){const l=s?[s]:r.eventRegistrations_;return Ek(r.eventGenerator_,e,n,l)}/**
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
 */let Al;class e1{constructor(){this.views=new Map}}function t1(r){D(!Al,"__referenceConstructor has already been defined"),Al=r}function n1(){return D(Al,"Reference.ts has not been loaded"),Al}function r1(r){return r.views.size===0}function Pd(r,e,n,s){const l=e.source.queryId;if(l!==null){const u=r.views.get(l);return D(u!=null,"SyncTree gave us an op for an invalid query."),og(u,e,n,s)}else{let u=[];for(const d of r.views.values())u=u.concat(og(d,e,n,s));return u}}function i1(r,e,n,s,l){const u=e._queryIdentifier,d=r.views.get(u);if(!d){let f=Rl(n,l?s:null),p=!1;f?p=!0:s instanceof q?(f=kd(n,s),p=!1):(f=q.EMPTY_NODE,p=!1);const g=$l(new Tr(f,p,!1),new Tr(s,l,!1));return new Qk(e,g)}return d}function s1(r,e,n,s,l,u){const d=i1(r,e,s,l,u);return r.views.has(e._queryIdentifier)||r.views.set(e._queryIdentifier,d),Jk(d,n),Zk(d,n)}function o1(r,e,n,s){const l=e._queryIdentifier,u=[];let d=[];const f=er(r);if(l==="default")for(const[p,g]of r.views.entries())d=d.concat(sg(g,n,s)),ig(g)&&(r.views.delete(p),g.query._queryParams.loadsAllData()||u.push(g.query));else{const p=r.views.get(l);p&&(d=d.concat(sg(p,n,s)),ig(p)&&(r.views.delete(l),p.query._queryParams.loadsAllData()||u.push(p.query)))}return f&&!er(r)&&u.push(new(n1())(e._repo,e._path)),{removed:u,events:d}}function Tv(r){const e=[];for(const n of r.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function di(r,e){let n=null;for(const s of r.views.values())n=n||Xk(s,e);return n}function kv(r,e){if(e._queryParams.loadsAllData())return Hl(r);{const s=e._queryIdentifier;return r.views.get(s)}}function Rv(r,e){return kv(r,e)!=null}function er(r){return Hl(r)!=null}function Hl(r){for(const e of r.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Ol;function l1(r){D(!Ol,"__referenceConstructor has already been defined"),Ol=r}function a1(){return D(Ol,"Reference.ts has not been loaded"),Ol}let u1=1;class lg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new fe(null),this.pendingWriteTree_=Fk(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Nv(r,e,n,s,l){return Tk(r.pendingWriteTree_,e,n,s,l),l?Ci(r,new Cr(Sd(),e,n)):[]}function c1(r,e,n,s){kk(r.pendingWriteTree_,e,n,s);const l=fe.fromObject(n);return Ci(r,new mi(Sd(),e,l))}function qn(r,e,n=!1){const s=Rk(r.pendingWriteTree_,e);if(Nk(r.pendingWriteTree_,e)){let u=new fe(null);return s.snap!=null?u=u.set(oe(),!0):qe(s.children,d=>{u=u.set(new ce(d),!0)}),Ci(r,new kl(s.path,u,n))}else return[]}function Gl(r,e,n){return Ci(r,new Cr(Id(),e,n))}function d1(r,e,n){const s=fe.fromObject(n);return Ci(r,new mi(Id(),e,s))}function h1(r,e){return Ci(r,new xs(Id(),e))}function f1(r,e,n){const s=Od(r,n);if(s){const l=xd(s),u=l.path,d=l.queryId,f=dt(u,e),p=new xs(Cd(d),f);return Dd(r,u,p)}else return[]}function jc(r,e,n,s,l=!1){const u=e._path,d=r.syncPointTree_.get(u);let f=[];if(d&&(e._queryIdentifier==="default"||Rv(d,e))){const p=o1(d,e,n,s);r1(d)&&(r.syncPointTree_=r.syncPointTree_.remove(u));const g=p.removed;if(f=p.events,!l){const w=g.findIndex(S=>S._queryParams.loadsAllData())!==-1,v=r.syncPointTree_.findOnPath(u,(S,O)=>er(O));if(w&&!v){const S=r.syncPointTree_.subtree(u);if(!S.isEmpty()){const O=g1(S);for(let M=0;M<O.length;++M){const V=O[M],G=V.query,Ae=Ov(r,V);r.listenProvider_.startListening(Ss(G),xl(r,G),Ae.hashFn,Ae.onComplete)}}}!v&&g.length>0&&!s&&(w?r.listenProvider_.stopListening(Ss(e),null):g.forEach(S=>{const O=r.queryToTagMap.get(ql(S));r.listenProvider_.stopListening(Ss(S),O)}))}_1(r,g)}return f}function p1(r,e,n,s){const l=Od(r,s);if(l!=null){const u=xd(l),d=u.path,f=u.queryId,p=dt(d,e),g=new Cr(Cd(f),p,n);return Dd(r,d,g)}else return[]}function m1(r,e,n,s){const l=Od(r,s);if(l){const u=xd(l),d=u.path,f=u.queryId,p=dt(d,e),g=fe.fromObject(n),w=new mi(Cd(f),p,g);return Dd(r,d,w)}else return[]}function ag(r,e,n,s=!1){const l=e._path;let u=null,d=!1;r.syncPointTree_.foreachOnPath(l,(S,O)=>{const M=dt(S,l);u=u||di(O,M),d=d||er(O)});let f=r.syncPointTree_.get(l);f?(d=d||er(f),u=u||di(f,oe())):(f=new e1,r.syncPointTree_=r.syncPointTree_.set(l,f));let p;u!=null?p=!0:(p=!1,u=q.EMPTY_NODE,r.syncPointTree_.subtree(l).foreachChild((O,M)=>{const V=di(M,oe());V&&(u=u.updateImmediateChild(O,V))}));const g=Rv(f,e);if(!g&&!e._queryParams.loadsAllData()){const S=ql(e);D(!r.queryToTagMap.has(S),"View does not exist, but we have a tag");const O=v1();r.queryToTagMap.set(S,O),r.tagToQueryMap.set(O,S)}const w=Td(r.pendingWriteTree_,l);let v=s1(f,e,n,w,u,p);if(!g&&!d&&!s){const S=kv(f,e);v=v.concat(y1(r,e,S))}return v}function Ad(r,e,n){const l=r.pendingWriteTree_,u=r.syncPointTree_.findOnPath(e,(d,f)=>{const p=dt(d,e),g=di(f,p);if(g)return g});return yv(l,e,u,n,!0)}function Ci(r,e){return Pv(e,r.syncPointTree_,null,Td(r.pendingWriteTree_,oe()))}function Pv(r,e,n,s){if(te(r.path))return Av(r,e,n,s);{const l=e.get(oe());n==null&&l!=null&&(n=di(l,oe()));let u=[];const d=J(r.path),f=r.operationForChild(d),p=e.children.get(d);if(p&&f){const g=n?n.getImmediateChild(d):null,w=wv(s,d);u=u.concat(Pv(f,p,g,w))}return l&&(u=u.concat(Pd(l,r,s,n))),u}}function Av(r,e,n,s){const l=e.get(oe());n==null&&l!=null&&(n=di(l,oe()));let u=[];return e.children.inorderTraversal((d,f)=>{const p=n?n.getImmediateChild(d):null,g=wv(s,d),w=r.operationForChild(d);w&&(u=u.concat(Av(w,f,p,g)))}),l&&(u=u.concat(Pd(l,r,s,n))),u}function Ov(r,e){const n=e.query,s=xl(r,n);return{hashFn:()=>(Yk(e)||q.EMPTY_NODE).hash(),onComplete:l=>{if(l==="ok")return s?f1(r,n._path,s):h1(r,n._path);{const u=dT(l,n);return jc(r,n,null,u)}}}}function xl(r,e){const n=ql(e);return r.queryToTagMap.get(n)}function ql(r){return r._path.toString()+"$"+r._queryIdentifier}function Od(r,e){return r.tagToQueryMap.get(e)}function xd(r){const e=r.indexOf("$");return D(e!==-1&&e<r.length-1,"Bad queryKey."),{queryId:r.substr(e+1),path:new ce(r.substr(0,e))}}function Dd(r,e,n){const s=r.syncPointTree_.get(e);D(s,"Missing sync point for query tag that we're tracking");const l=Td(r.pendingWriteTree_,e);return Pd(s,n,l,null)}function g1(r){return r.fold((e,n,s)=>{if(n&&er(n))return[Hl(n)];{let l=[];return n&&(l=Tv(n)),qe(s,(u,d)=>{l=l.concat(d)}),l}})}function Ss(r){return r._queryParams.loadsAllData()&&!r._queryParams.isDefault()?new(a1())(r._repo,r._path):r}function _1(r,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const l=ql(s),u=r.queryToTagMap.get(l);r.queryToTagMap.delete(l),r.tagToQueryMap.delete(u)}}}function v1(){return u1++}function y1(r,e,n){const s=e._path,l=xl(r,e),u=Ov(r,n),d=r.listenProvider_.startListening(Ss(e),l,u.hashFn,u.onComplete),f=r.syncPointTree_.subtree(s);if(l)D(!er(f.value),"If we're adding a query, it shouldn't be shadowed");else{const p=f.fold((g,w,v)=>{if(!te(g)&&w&&er(w))return[Hl(w).query];{let S=[];return w&&(S=S.concat(Tv(w).map(O=>O.query))),qe(v,(O,M)=>{S=S.concat(M)}),S}});for(let g=0;g<p.length;++g){const w=p[g];r.listenProvider_.stopListening(Ss(w),xl(r,w))}}return d}/**
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
 */class Ld{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ld(n)}node(){return this.node_}}class Md{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ce(this.path_,e);return new Md(this.syncTree_,n)}node(){return Ad(this.syncTree_,this.path_)}}const w1=function(r){return r=r||{},r.timestamp=r.timestamp||new Date().getTime(),r},ug=function(r,e,n){if(!r||typeof r!="object")return r;if(D(".sv"in r,"Unexpected leaf node or priority contents"),typeof r[".sv"]=="string")return E1(r[".sv"],e,n);if(typeof r[".sv"]=="object")return S1(r[".sv"],e);D(!1,"Unexpected server value: "+JSON.stringify(r,null,2))},E1=function(r,e,n){switch(r){case"timestamp":return n.timestamp;default:D(!1,"Unexpected server value: "+r)}},S1=function(r,e,n){r.hasOwnProperty("increment")||D(!1,"Unexpected server value: "+JSON.stringify(r,null,2));const s=r.increment;typeof s!="number"&&D(!1,"Unexpected increment value: "+s);const l=e.node();if(D(l!==null&&typeof l<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!l.isLeafNode())return s;const d=l.getValue();return typeof d!="number"?s:d+s},xv=function(r,e,n,s){return bd(e,new Md(n,r),s)},Dv=function(r,e,n){return bd(r,new Ld(e),n)};function bd(r,e,n){const s=r.getPriority().val(),l=ug(s,e.getImmediateChild(".priority"),n);let u;if(r.isLeafNode()){const d=r,f=ug(d.getValue(),e,n);return f!==d.getValue()||l!==d.getPriority().val()?new ze(f,We(l)):r}else{const d=r;return u=d,l!==d.getPriority().val()&&(u=u.updatePriority(new ze(l))),d.forEachChild(Te,(f,p)=>{const g=bd(p,e.getImmediateChild(f),n);g!==p&&(u=u.updateImmediateChild(f,g))}),u}}/**
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
 */class Fd{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Ud(r,e){let n=e instanceof ce?e:new ce(e),s=r,l=J(n);for(;l!==null;){const u=hi(s.node.children,l)||{children:{},childCount:0};s=new Fd(l,s,u),n=pe(n),l=J(n)}return s}function Ti(r){return r.node.value}function Lv(r,e){r.node.value=e,Wc(r)}function Mv(r){return r.node.childCount>0}function I1(r){return Ti(r)===void 0&&!Mv(r)}function Kl(r,e){qe(r.node.children,(n,s)=>{e(new Fd(n,r,s))})}function bv(r,e,n,s){n&&!s&&e(r),Kl(r,l=>{bv(l,e,!0,s)}),n&&s&&e(r)}function C1(r,e,n){let s=r.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function js(r){return new ce(r.parent===null?r.name:js(r.parent)+"/"+r.name)}function Wc(r){r.parent!==null&&T1(r.parent,r.name,r)}function T1(r,e,n){const s=I1(n),l=rn(r.node.children,e);s&&l?(delete r.node.children[e],r.node.childCount--,Wc(r)):!s&&!l&&(r.node.children[e]=n.node,r.node.childCount++,Wc(r))}/**
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
 */const k1=/[\[\].#$\/\u0000-\u001F\u007F]/,R1=/[\[\].#$\u0000-\u001F\u007F]/,mc=10*1024*1024,zd=function(r){return typeof r=="string"&&r.length!==0&&!k1.test(r)},Fv=function(r){return typeof r=="string"&&r.length!==0&&!R1.test(r)},N1=function(r){return r&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),Fv(r)},P1=function(r){return r===null||typeof r=="string"||typeof r=="number"&&!dd(r)||r&&typeof r=="object"&&rn(r,".sv")},A1=function(r,e,n,s){Ql(Ll(r,"value"),e,n)},Ql=function(r,e,n){const s=n instanceof ce?new HT(n,r):n;if(e===void 0)throw new Error(r+"contains undefined "+_r(s));if(typeof e=="function")throw new Error(r+"contains a function "+_r(s)+" with contents = "+e.toString());if(dd(e))throw new Error(r+"contains "+e.toString()+" "+_r(s));if(typeof e=="string"&&e.length>mc/3&&Ml(e)>mc)throw new Error(r+"contains a string greater than "+mc+" utf8 bytes "+_r(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let l=!1,u=!1;if(qe(e,(d,f)=>{if(d===".value")l=!0;else if(d!==".priority"&&d!==".sv"&&(u=!0,!zd(d)))throw new Error(r+" contains an invalid key ("+d+") "+_r(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);GT(s,d),Ql(r,f,s),qT(s)}),l&&u)throw new Error(r+' contains ".value" child '+_r(s)+" in addition to actual children.")}},O1=function(r,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const u=Ns(s);for(let d=0;d<u.length;d++)if(!(u[d]===".priority"&&d===u.length-1)){if(!zd(u[d]))throw new Error(r+"contains an invalid key ("+u[d]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort($T);let l=null;for(n=0;n<e.length;n++){if(s=e[n],l!==null&&Pt(l,s))throw new Error(r+"contains a path "+l.toString()+" that is ancestor of another path "+s.toString());l=s}},x1=function(r,e,n,s){const l=Ll(r,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(l+" must be an object containing the children to replace.");const u=[];qe(e,(d,f)=>{const p=new ce(d);if(Ql(l,f,Ce(n,p)),gd(p)===".priority"&&!P1(f))throw new Error(l+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");u.push(p)}),O1(l,u)},Uv=function(r,e,n,s){if(!Fv(n))throw new Error(Ll(r,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},D1=function(r,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Uv(r,e,n)},zv=function(r,e){if(J(e)===".info")throw new Error(r+" failed = Can't modify data under /.info/")},L1=function(r,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!zd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!N1(n))throw new Error(Ll(r,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class M1{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Yl(r,e){let n=null;for(let s=0;s<e.length;s++){const l=e[s],u=l.getPath();n!==null&&!_d(u,n.path)&&(r.eventLists_.push(n),n=null),n===null&&(n={events:[],path:u}),n.events.push(l)}n&&r.eventLists_.push(n)}function jv(r,e,n){Yl(r,n),Wv(r,s=>_d(s,e))}function $t(r,e,n){Yl(r,n),Wv(r,s=>Pt(s,e)||Pt(e,s))}function Wv(r,e){r.recursionDepth_++;let n=!0;for(let s=0;s<r.eventLists_.length;s++){const l=r.eventLists_[s];if(l){const u=l.path;e(u)?(b1(r.eventLists_[s]),r.eventLists_[s]=null):n=!1}}n&&(r.eventLists_=[]),r.recursionDepth_--}function b1(r){for(let e=0;e<r.events.length;e++){const n=r.events[e];if(n!==null){r.events[e]=null;const s=n.getEventRunner();vs&&Ge("event: "+n.toString()),Ii(s)}}}/**
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
 */const F1="repo_interrupt",U1=25;class z1{constructor(e,n,s,l){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=l,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new M1,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Tl(),this.transactionQueueTree_=new Fd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function j1(r,e,n){if(r.stats_=pd(r.repoInfo_),r.forceRestClient_||mT())r.server_=new Cl(r.repoInfo_,(s,l,u,d)=>{cg(r,s,l,u,d)},r.authTokenProvider_,r.appCheckProvider_),setTimeout(()=>dg(r,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ve(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}r.persistentConnection_=new vn(r.repoInfo_,e,(s,l,u,d)=>{cg(r,s,l,u,d)},s=>{dg(r,s)},s=>{V1(r,s)},r.authTokenProvider_,r.appCheckProvider_,n),r.server_=r.persistentConnection_}r.authTokenProvider_.addTokenChangeListener(s=>{r.server_.refreshAuthToken(s)}),r.appCheckProvider_.addTokenChangeListener(s=>{r.server_.refreshAppCheckToken(s.token)}),r.statsReporter_=wT(r.repoInfo_,()=>new yk(r.stats_,r.server_)),r.infoData_=new pk,r.infoSyncTree_=new lg({startListening:(s,l,u,d)=>{let f=[];const p=r.infoData_.getNode(s._path);return p.isEmpty()||(f=Gl(r.infoSyncTree_,s._path,p),setTimeout(()=>{d("ok")},0)),f},stopListening:()=>{}}),jd(r,"connected",!1),r.serverSyncTree_=new lg({startListening:(s,l,u,d)=>(r.server_.listen(s,u,l,(f,p)=>{const g=d(f,p);$t(r.eventQueue_,s._path,g)}),[]),stopListening:(s,l)=>{r.server_.unlisten(s,l)}})}function W1(r){const n=r.infoData_.getNode(new ce(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Xl(r){return w1({timestamp:W1(r)})}function cg(r,e,n,s,l){r.dataUpdateCount++;const u=new ce(e);n=r.interceptServerDataCallback_?r.interceptServerDataCallback_(e,n):n;let d=[];if(l)if(s){const p=hl(n,g=>We(g));d=m1(r.serverSyncTree_,u,p,l)}else{const p=We(n);d=p1(r.serverSyncTree_,u,p,l)}else if(s){const p=hl(n,g=>We(g));d=d1(r.serverSyncTree_,u,p)}else{const p=We(n);d=Gl(r.serverSyncTree_,u,p)}let f=u;d.length>0&&(f=_i(r,u)),$t(r.eventQueue_,f,d)}function dg(r,e){jd(r,"connected",e),e===!1&&H1(r)}function V1(r,e){qe(e,(n,s)=>{jd(r,n,s)})}function jd(r,e,n){const s=new ce("/.info/"+e),l=We(n);r.infoData_.updateSnapshot(s,l);const u=Gl(r.infoSyncTree_,s,l);$t(r.eventQueue_,s,u)}function Wd(r){return r.nextWriteId_++}function B1(r,e,n,s,l){Jl(r,"set",{path:e.toString(),value:n,priority:s});const u=Xl(r),d=We(n,s),f=Ad(r.serverSyncTree_,e),p=Dv(d,f,u),g=Wd(r),w=Nv(r.serverSyncTree_,e,p,g,!0);Yl(r.eventQueue_,w),r.server_.put(e.toString(),d.val(!0),(S,O)=>{const M=S==="ok";M||et("set at "+e+" failed: "+S);const V=qn(r.serverSyncTree_,g,!M);$t(r.eventQueue_,e,V),Vc(r,l,S,O)});const v=Bd(r,e);_i(r,v),$t(r.eventQueue_,v,[])}function $1(r,e,n,s){Jl(r,"update",{path:e.toString(),value:n});let l=!0;const u=Xl(r),d={};if(qe(n,(f,p)=>{l=!1,d[f]=xv(Ce(e,f),We(p),r.serverSyncTree_,u)}),l)Ge("update() called with empty data.  Don't do anything."),Vc(r,s,"ok",void 0);else{const f=Wd(r),p=c1(r.serverSyncTree_,e,d,f);Yl(r.eventQueue_,p),r.server_.merge(e.toString(),n,(g,w)=>{const v=g==="ok";v||et("update at "+e+" failed: "+g);const S=qn(r.serverSyncTree_,f,!v),O=S.length>0?_i(r,e):e;$t(r.eventQueue_,O,S),Vc(r,s,g,w)}),qe(n,g=>{const w=Bd(r,Ce(e,g));_i(r,w)}),$t(r.eventQueue_,e,[])}}function H1(r){Jl(r,"onDisconnectEvents");const e=Xl(r),n=Tl();Dc(r.onDisconnect_,oe(),(l,u)=>{const d=xv(l,u,r.serverSyncTree_,e);mv(n,l,d)});let s=[];Dc(n,oe(),(l,u)=>{s=s.concat(Gl(r.serverSyncTree_,l,u));const d=Bd(r,l);_i(r,d)}),r.onDisconnect_=Tl(),$t(r.eventQueue_,oe(),s)}function G1(r,e,n){let s;J(e._path)===".info"?s=ag(r.infoSyncTree_,e,n):s=ag(r.serverSyncTree_,e,n),jv(r.eventQueue_,e._path,s)}function q1(r,e,n){let s;J(e._path)===".info"?s=jc(r.infoSyncTree_,e,n):s=jc(r.serverSyncTree_,e,n),jv(r.eventQueue_,e._path,s)}function K1(r){r.persistentConnection_&&r.persistentConnection_.interrupt(F1)}function Jl(r,...e){let n="";r.persistentConnection_&&(n=r.persistentConnection_.id+":"),Ge(n,...e)}function Vc(r,e,n,s){e&&Ii(()=>{if(n==="ok")e(null);else{const l=(n||"error").toUpperCase();let u=l;s&&(u+=": "+s);const d=new Error(u);d.code=l,e(d)}})}function Vv(r,e,n){return Ad(r.serverSyncTree_,e,n)||q.EMPTY_NODE}function Vd(r,e=r.transactionQueueTree_){if(e||Zl(r,e),Ti(e)){const n=$v(r,e);D(n.length>0,"Sending zero length transaction queue"),n.every(l=>l.status===0)&&Q1(r,js(e),n)}else Mv(e)&&Kl(e,n=>{Vd(r,n)})}function Q1(r,e,n){const s=n.map(g=>g.currentWriteId),l=Vv(r,e,s);let u=l;const d=l.hash();for(let g=0;g<n.length;g++){const w=n[g];D(w.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),w.status=1,w.retryCount++;const v=dt(e,w.path);u=u.updateChild(v,w.currentOutputSnapshotRaw)}const f=u.val(!0),p=e;r.server_.put(p.toString(),f,g=>{Jl(r,"transaction put response",{path:p.toString(),status:g});let w=[];if(g==="ok"){const v=[];for(let S=0;S<n.length;S++)n[S].status=2,w=w.concat(qn(r.serverSyncTree_,n[S].currentWriteId)),n[S].onComplete&&v.push(()=>n[S].onComplete(null,!0,n[S].currentOutputSnapshotResolved)),n[S].unwatcher();Zl(r,Ud(r.transactionQueueTree_,e)),Vd(r,r.transactionQueueTree_),$t(r.eventQueue_,e,w);for(let S=0;S<v.length;S++)Ii(v[S])}else{if(g==="datastale")for(let v=0;v<n.length;v++)n[v].status===3?n[v].status=4:n[v].status=0;else{et("transaction at "+p.toString()+" failed: "+g);for(let v=0;v<n.length;v++)n[v].status=4,n[v].abortReason=g}_i(r,e)}},d)}function _i(r,e){const n=Bv(r,e),s=js(n),l=$v(r,n);return Y1(r,l,s),s}function Y1(r,e,n){if(e.length===0)return;const s=[];let l=[];const d=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const p=e[f],g=dt(n,p.path);let w=!1,v;if(D(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)w=!0,v=p.abortReason,l=l.concat(qn(r.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=U1)w=!0,v="maxretry",l=l.concat(qn(r.serverSyncTree_,p.currentWriteId,!0));else{const S=Vv(r,p.path,d);p.currentInputSnapshot=S;const O=e[f].update(S.val());if(O!==void 0){Ql("transaction failed: Data returned ",O,p.path);let M=We(O);typeof O=="object"&&O!=null&&rn(O,".priority")||(M=M.updatePriority(S.getPriority()));const G=p.currentWriteId,Ae=Xl(r),Me=Dv(M,S,Ae);p.currentOutputSnapshotRaw=M,p.currentOutputSnapshotResolved=Me,p.currentWriteId=Wd(r),d.splice(d.indexOf(G),1),l=l.concat(Nv(r.serverSyncTree_,p.path,Me,p.currentWriteId,p.applyLocally)),l=l.concat(qn(r.serverSyncTree_,G,!0))}else w=!0,v="nodata",l=l.concat(qn(r.serverSyncTree_,p.currentWriteId,!0))}$t(r.eventQueue_,n,l),l=[],w&&(e[f].status=2,function(S){setTimeout(S,Math.floor(0))}(e[f].unwatcher),e[f].onComplete&&(v==="nodata"?s.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):s.push(()=>e[f].onComplete(new Error(v),!1,null))))}Zl(r,r.transactionQueueTree_);for(let f=0;f<s.length;f++)Ii(s[f]);Vd(r,r.transactionQueueTree_)}function Bv(r,e){let n,s=r.transactionQueueTree_;for(n=J(e);n!==null&&Ti(s)===void 0;)s=Ud(s,n),e=pe(e),n=J(e);return s}function $v(r,e){const n=[];return Hv(r,e,n),n.sort((s,l)=>s.order-l.order),n}function Hv(r,e,n){const s=Ti(e);if(s)for(let l=0;l<s.length;l++)n.push(s[l]);Kl(e,l=>{Hv(r,l,n)})}function Zl(r,e){const n=Ti(e);if(n){let s=0;for(let l=0;l<n.length;l++)n[l].status!==2&&(n[s]=n[l],s++);n.length=s,Lv(e,n.length>0?n:void 0)}Kl(e,s=>{Zl(r,s)})}function Bd(r,e){const n=js(Bv(r,e)),s=Ud(r.transactionQueueTree_,e);return C1(s,l=>{gc(r,l)}),gc(r,s),bv(s,l=>{gc(r,l)}),n}function gc(r,e){const n=Ti(e);if(n){const s=[];let l=[],u=-1;for(let d=0;d<n.length;d++)n[d].status===3||(n[d].status===1?(D(u===d-1,"All SENT items should be at beginning of queue."),u=d,n[d].status=3,n[d].abortReason="set"):(D(n[d].status===0,"Unexpected transaction status in abort"),n[d].unwatcher(),l=l.concat(qn(r.serverSyncTree_,n[d].currentWriteId,!0)),n[d].onComplete&&s.push(n[d].onComplete.bind(null,new Error("set"),!1,null))));u===-1?Lv(e,void 0):n.length=u+1,$t(r.eventQueue_,js(e),l);for(let d=0;d<s.length;d++)Ii(s[d])}}/**
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
 */function X1(r){let e="";const n=r.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let l=n[s];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch{}e+="/"+l}return e}function J1(r){const e={};r.charAt(0)==="?"&&(r=r.substring(1));for(const n of r.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):et(`Invalid query segment '${n}' in query '${r}'`)}return e}const hg=function(r,e){const n=Z1(r),s=n.namespace;n.domain==="firebase.com"&&Sn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Sn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||oT();const l=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new J_(n.host,n.secure,s,l,e,"",s!==n.subdomain),path:new ce(n.pathString)}},Z1=function(r){let e="",n="",s="",l="",u="",d=!0,f="https",p=443;if(typeof r=="string"){let g=r.indexOf("//");g>=0&&(f=r.substring(0,g-1),r=r.substring(g+2));let w=r.indexOf("/");w===-1&&(w=r.length);let v=r.indexOf("?");v===-1&&(v=r.length),e=r.substring(0,Math.min(w,v)),w<v&&(l=X1(r.substring(w,v)));const S=J1(r.substring(Math.min(r.length,v)));g=e.indexOf(":"),g>=0?(d=f==="https"||f==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const O=e.slice(0,g);if(O.toLowerCase()==="localhost")n="localhost";else if(O.split(".").length<=2)n=O;else{const M=e.indexOf(".");s=e.substring(0,M).toLowerCase(),n=e.substring(M+1),u=s}"ns"in S&&(u=S.ns)}return{host:e,port:p,domain:n,subdomain:s,secure:d,scheme:f,pathString:l,namespace:u}};/**
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
 */class eR{constructor(e,n,s,l){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=l}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ve(this.snapshot.exportVal())}}class tR{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class nR{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return D(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class $d{constructor(e,n,s,l){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=l}get key(){return te(this._path)?null:gd(this._path)}get ref(){return new tr(this._repo,this._path)}get _queryIdentifier(){const e=Xm(this._queryParams),n=hd(e);return n==="{}"?"default":n}get _queryObject(){return Xm(this._queryParams)}isEqual(e){if(e=Et(e),!(e instanceof $d))return!1;const n=this._repo===e._repo,s=_d(this._path,e._path),l=this._queryIdentifier===e._queryIdentifier;return n&&s&&l}toJSON(){return this.toString()}toString(){return this._repo.toString()+BT(this._path)}}class tr extends $d{constructor(e,n){super(e,n,new Ed,!1)}get parent(){const e=lv(this._path);return e===null?null:new tr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Dl{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ce(e),s=Bc(this.ref,e);return new Dl(this._node.getChild(n),s,Te)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,l)=>e(new Dl(l,Bc(this.ref,s),Te)))}hasChild(e){const n=new ce(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ea(r,e){return r=Et(r),r._checkNotDeleted("ref"),e!==void 0?Bc(r._root,e):r._root}function Bc(r,e){return r=Et(r),J(r._path)===null?D1("child","path",e):Uv("child","path",e),new tr(r._repo,Ce(r._path,e))}function rR(r){return zv("remove",r._path),Gv(r,null)}function Gv(r,e){r=Et(r),zv("set",r._path),A1("set",e,r._path);const n=new Ds;return B1(r._repo,r._path,e,null,n.wrapCallback(()=>{})),n.promise}function iR(r,e){x1("update",e,r._path);const n=new Ds;return $1(r._repo,r._path,e,n.wrapCallback(()=>{})),n.promise}class Hd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new eR("value",this,new Dl(e.snapshotNode,new tr(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new tR(this,e,n):null}matches(e){return e instanceof Hd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function sR(r,e,n,s,l){const u=new nR(n,void 0),d=new Hd(u);return G1(r._repo,r,d),()=>q1(r._repo,r,d)}function oR(r,e,n,s){return sR(r,"value",e)}t1(tr);l1(tr);/**
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
 */const lR="FIREBASE_DATABASE_EMULATOR_HOST",$c={};let aR=!1;function uR(r,e,n,s){r.repoInfo_=new J_(`${e}:${n}`,!1,r.repoInfo_.namespace,r.repoInfo_.webSocketOnly,r.repoInfo_.nodeAdmin,r.repoInfo_.persistenceKey,r.repoInfo_.includeNamespaceInQueryParams,!0),s&&(r.authTokenProvider_=s)}function cR(r,e,n,s,l){let u=s||r.options.databaseURL;u===void 0&&(r.options.projectId||Sn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ge("Using default host for project ",r.options.projectId),u=`${r.options.projectId}-default-rtdb.firebaseio.com`);let d=hg(u,l),f=d.repoInfo,p;typeof process<"u"&&Dm&&(p=Dm[lR]),p?(u=`http://${p}?ns=${f.namespace}`,d=hg(u,l),f=d.repoInfo):d.repoInfo.secure;const g=new _T(r.name,r.options,e);L1("Invalid Firebase Database URL",d),te(d.path)||Sn("Database URL must point to the root of a Firebase Database (not including a child path).");const w=hR(f,r,g,new gT(r.name,n));return new fR(w,r)}function dR(r,e){const n=$c[e];(!n||n[r.key]!==r)&&Sn(`Database ${e}(${r.repoInfo_}) has already been deleted.`),K1(r),delete n[r.key]}function hR(r,e,n,s){let l=$c[e.name];l||(l={},$c[e.name]=l);let u=l[r.toURLString()];return u&&Sn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),u=new z1(r,aR,n,s),l[r.toURLString()]=u,u}class fR{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(j1(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new tr(this._repo,oe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(dR(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Sn("Cannot call "+e+" on a deleted database.")}}function pR(r=Xc(),e){const n=Nr(r,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=c0("database");s&&mR(n,...s)}return n}function mR(r,e,n,s={}){r=Et(r),r._checkNotDeleted("useEmulator"),r._instanceStarted&&Sn("Cannot call useEmulator() after instance has already been initialized.");const l=r._repoInternal;let u;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&Sn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new ul(ul.OWNER);else if(s.mockUserToken){const d=typeof s.mockUserToken=="string"?s.mockUserToken:d0(s.mockUserToken,r.app.options.projectId);u=new ul(d)}uR(l,e,n,u)}/**
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
 */function gR(r){eT(Ei),tn(new Bt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("auth-internal"),u=e.getProvider("app-check-internal");return cR(s,l,u,n)},"PUBLIC").setMultipleInstances(!0)),At(Lm,Mm,r),At(Lm,Mm,"esm2017")}vn.prototype.simpleListen=function(r,e){this.sendRequest("q",{p:r},e)};vn.prototype.echo=function(r,e){this.sendRequest("echo",{d:r},e)};gR();const _R={apiKey:"AIzaSyB2SlnQ03tQfpjLMcleDimnz-wI6_BSXYE",authDomain:"my-multiplayer-dbf6b.firebaseapp.com",databaseURL:"https://my-multiplayer-dbf6b-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"my-multiplayer-dbf6b",storageBucket:"my-multiplayer-dbf6b.firebasestorage.app",messagingSenderId:"3902656578",appId:"1:3902656578:web:ea447bf59037a7d25b5ddb",measurementId:"G-3DVR8Y6VSM"},Gd=Lg(_R);JS(Gd);const ta=pR(Gd),Hc=JC(Gd);bI(Hc).then(()=>{console.log("Signed in anonymously")}).catch(r=>{console.error("Error signing in anonymously:",r)});var _c={exports:{}},vc,fg;function vR(){if(fg)return vc;fg=1;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return vc=r,vc}var yc,pg;function yR(){if(pg)return yc;pg=1;var r=vR();function e(){}function n(){}return n.resetWarningCache=e,yc=function(){function s(d,f,p,g,w,v){if(v!==r){var S=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw S.name="Invariant Violation",S}}s.isRequired=s;function l(){return s}var u={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:l,element:s,elementType:s,instanceOf:l,node:s,objectOf:l,oneOf:l,oneOfType:l,shape:l,exact:l,checkPropTypes:n,resetWarningCache:e};return u.PropTypes=u,u},yc}var mg;function wR(){return mg||(mg=1,_c.exports=yR()()),_c.exports}var ER=wR();const vi=Gw(ER),SR=(r,e)=>{const n=ea(ta,`players/${r}`);Gv(n,e).then(()=>{console.log("Data written successfully!")}).catch(s=>{console.error("Error writing data:",s)})},nl=(r,e,n,s,l,u)=>{const d=ea(ta,`players/${r}`);iR(d,{x:n,y:e,dir:s,vector:l,score:u}).then(()=>{console.log("Data updated successfully!")}).catch(f=>{console.error("Error updating data:",f)})},IR=r=>{const e=ea(ta,`players/${r}`);rR(e).then(()=>{console.log("Data removed successfully!")}).catch(n=>{console.error("Error deleting data:",n)})},CR="_newPlayer_1dkh4_1",TR="_btnSubmit_1dkh4_10",gg={newPlayer:CR,btnSubmit:TR};function qv(r){const{user:e,setNewPlayer:n}=r,[s,l]=Jt.useState(""),[u,d]=Jt.useState("male"),f=()=>{n(!1);const g={name:s,score:0,x:0,y:0,character:"",dir:2,vector:0};SR(e==null?void 0:e.id,g)},p=g=>{d(g.target.value)};return _e.jsxs("div",{className:gg.newPlayer,children:[_e.jsx("div",{children:"New player"}),_e.jsx("input",{type:"text",placeholder:"Enter your name",value:s,onChange:g=>l(g.target.value)}),_e.jsx("br",{}),_e.jsxs("select",{value:u,onChange:p,children:[_e.jsx("option",{value:"male",children:"Man"}),_e.jsx("option",{value:"female",children:"Women"}),_e.jsx("option",{value:"snake",children:"Snake"})]}),_e.jsx("button",{className:gg.btnSubmit,onClick:f,children:"Submit"})]})}qv.propTypes={user:vi.object.isRequired,setNewPlayer:vi.func.isRequired};const rl=[["null","empty","empty","null","null","null","null","null","null","empty","empty","null"],["null","empty","empty","empty","null","null","null","null","empty","empty","empty","null"],["empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty"],["empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty"],["empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty"],["empty","empty","empty","empty","water","water","water","water","empty","empty","empty","empty"],["empty","empty","empty","empty","water","water","water","water","empty","empty","empty","empty"],["empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty"],["empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty"]],ri={GRASS:"grass",WATER:"water",ROCK:"rock",EMPTY:"empty",FOOD:"food",null:"null"},kR=["moveU","moveR","moveD","moveL","dragon"],RR="_tile_xzvxb_1",NR="_grass_xzvxb_14",PR="_water_xzvxb_22",AR="_rock_xzvxb_29",OR="_empty_xzvxb_36",xR="_food_xzvxb_43",_g={tile:RR,grass:NR,water:PR,rock:AR,empty:OR,food:xR};function Kv(r){const{isActive:e=!1,type:n="empty"}=r,s={[ri.GRASS]:"☘️",[ri.WATER]:"",[ri.ROCK]:"⛰️",[ri.EMPTY]:"",[ri.FOOD]:"🍎"};return _e.jsx("div",{className:`${_g.tile} ${_g[n]}`,children:s[n]})}Kv.propTypes={isActive:vi.bool,type:vi.string};const DR="_board_xv3fs_1",LR="_row_xv3fs_8",MR="_mycharacter_xv3fs_13",bR="_char_xv3fs_21",FR="_name_xv3fs_28",UR="_moveD_xv3fs_35",zR="_moveU_xv3fs_38",jR="_moveR_xv3fs_41",WR="_moveL_xv3fs_44",VR="_dragon_xv3fs_47",BR="_walkLeft_xv3fs_50",$R="_walkRight_xv3fs_53",il={board:DR,row:LR,mycharacter:MR,char:bR,name:FR,moveD:UR,moveU:zR,moveR:jR,moveL:WR,dragon:VR,walkLeft:BR,walkRight:$R},HR="_home_1fd8q_1",GR={home:HR};function Qv(r){const{players:e=[],myPlayer:n}=r,{x:s,y:l,id:u,score:d,vector:f}=n,p=Jt.useRef(null),g=(v,S)=>v<0||v>=rl[0].length||S<0||S>=rl.length?!0:rl[S][v]!==ri.WATER,w=v=>{switch(console.log("##keydown",v.key),v.key){case"ArrowUp":if(!g(s,l-1))return;nl(u,l-1,s,0,(f+1)%4,d);break;case"ArrowRight":if(!g(s+1,l))return;nl(u,l,s+1,1,(f+1)%4,d);break;case"ArrowDown":if(!g(s,l+1))return;nl(u,l+1,s,2,(f+1)%4,d);break;case"ArrowLeft":if(!g(s-1,l))return;nl(u,l,s-1,3,(f+1)%4,d);break}};return Jt.useEffect(()=>{var v;p&&((v=p==null?void 0:p.current)==null||v.focus())},[]),_e.jsxs("div",{className:GR.home,tabIndex:"0",onKeyDown:w,ref:p,children:["Living area",_e.jsxs("div",{children:[e==null?void 0:e.map(v=>_e.jsxs("div",{children:[_e.jsx("div",{className:`${il.mycharacter} ${il[kR[v==null?void 0:v.dir]]}`,style:{transform:`translate(${(v==null?void 0:v.x)*6}rem, ${(v==null?void 0:v.y)*6}rem)`,backgroundPosition:`${(v==null?void 0:v.vector)*-44}px 0`}}),_e.jsx("div",{className:il.name,style:{transform:`translate(${(v==null?void 0:v.x)*6}rem, ${(v==null?void 0:v.y)*6}rem)`},children:v.name})]},v.id)),rl.map((v,S)=>_e.jsx("div",{className:il.row,children:v.map((O,M)=>_e.jsx(Kv,{type:O},M))},S))]})]})}Qv.propTypes={players:vi.array,myPlayer:vi.object};function qR(){const[r,e]=Jt.useState(!0),[n,s]=Jt.useState({}),[l,u]=Jt.useState([]),d=p=>{if(!p)return;let g=[];for(const w in p)w===n.id&&(s({id:w,...p[w]}),e(!1)),g.push({id:w,...p[w]});u(g)},f=()=>{IR(n==null?void 0:n.id),e(!0),s({})};return Jt.useEffect(()=>Hc.onAuthStateChanged(g=>{if(g){let w=n;w.id=g.uid,s(w)}else console.log("User signed out")}),[Hc]),Jt.useEffect(()=>{const p=ea(ta,"players"),g=oR(p,w=>{d(w.val())});return()=>g()},[]),r?_e.jsx(qv,{user:n,setNewPlayer:e}):_e.jsxs(_e.Fragment,{children:[_e.jsx("div",{style:{padding:"1rem",fontWeight:"bolder",display:"flex",justifyContent:"space-between"},children:_e.jsx("button",{onClick:f,children:"Reset"})}),_e.jsx(Qv,{myPlayer:n,players:l})]})}t0.createRoot(document.getElementById("root")).render(_e.jsx(Jt.StrictMode,{children:_e.jsx(qR,{})}));
