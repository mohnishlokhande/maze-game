(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=n(l);fetch(l.href,u)}})();function $0(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var qu={exports:{}},ds={},Ku={exports:{}},J={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp;function H0(){if(jp)return J;jp=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),v=Symbol.iterator;function S(I){return I===null||typeof I!="object"?null:(I=v&&I[v]||I["@@iterator"],typeof I=="function"?I:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,B={};function H(I,N,X){this.props=I,this.context=N,this.refs=B,this.updater=X||A}H.prototype.isReactComponent={},H.prototype.setState=function(I,N){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,N,"setState")},H.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function Ae(){}Ae.prototype=H.prototype;function Oe(I,N,X){this.props=I,this.context=N,this.refs=B,this.updater=X||A}var xe=Oe.prototype=new Ae;xe.constructor=Oe,L(xe,H.prototype),xe.isPureReactComponent=!0;var pe=Array.isArray,Xe=Object.prototype.hasOwnProperty,re={current:null},K={key:!0,ref:!0,__self:!0,__source:!0};function ie(I,N,X){var te,oe={},le=null,me=null;if(N!=null)for(te in N.ref!==void 0&&(me=N.ref),N.key!==void 0&&(le=""+N.key),N)Xe.call(N,te)&&!K.hasOwnProperty(te)&&(oe[te]=N[te]);var ce=arguments.length-2;if(ce===1)oe.children=X;else if(1<ce){for(var Ee=Array(ce),yt=0;yt<ce;yt++)Ee[yt]=arguments[yt+2];oe.children=Ee}if(I&&I.defaultProps)for(te in ce=I.defaultProps,ce)oe[te]===void 0&&(oe[te]=ce[te]);return{$$typeof:r,type:I,key:le,ref:me,props:oe,_owner:re.current}}function Ue(I,N){return{$$typeof:r,type:I.type,key:N,ref:I.ref,props:I.props,_owner:I._owner}}function nt(I){return typeof I=="object"&&I!==null&&I.$$typeof===r}function qt(I){var N={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(X){return N[X]})}var Kt=/\/+/g;function vt(I,N){return typeof I=="object"&&I!==null&&I.key!=null?qt(""+I.key):N.toString(36)}function Lt(I,N,X,te,oe){var le=typeof I;(le==="undefined"||le==="boolean")&&(I=null);var me=!1;if(I===null)me=!0;else switch(le){case"string":case"number":me=!0;break;case"object":switch(I.$$typeof){case r:case e:me=!0}}if(me)return me=I,oe=oe(me),I=te===""?"."+vt(me,0):te,pe(oe)?(X="",I!=null&&(X=I.replace(Kt,"$&/")+"/"),Lt(oe,N,X,"",function(yt){return yt})):oe!=null&&(nt(oe)&&(oe=Ue(oe,X+(!oe.key||me&&me.key===oe.key?"":(""+oe.key).replace(Kt,"$&/")+"/")+I)),N.push(oe)),1;if(me=0,te=te===""?".":te+":",pe(I))for(var ce=0;ce<I.length;ce++){le=I[ce];var Ee=te+vt(le,ce);me+=Lt(le,N,X,Ee,oe)}else if(Ee=S(I),typeof Ee=="function")for(I=Ee.call(I),ce=0;!(le=I.next()).done;)le=le.value,Ee=te+vt(le,ce++),me+=Lt(le,N,X,Ee,oe);else if(le==="object")throw N=String(I),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.");return me}function Qt(I,N,X){if(I==null)return I;var te=[],oe=0;return Lt(I,te,"","",function(le){return N.call(X,le,oe++)}),te}function at(I){if(I._status===-1){var N=I._result;N=N(),N.then(function(X){(I._status===0||I._status===-1)&&(I._status=1,I._result=X)},function(X){(I._status===0||I._status===-1)&&(I._status=2,I._result=X)}),I._status===-1&&(I._status=0,I._result=N)}if(I._status===1)return I._result.default;throw I._result}var ke={current:null},M={transition:null},G={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:M,ReactCurrentOwner:re};function U(){throw Error("act(...) is not supported in production builds of React.")}return J.Children={map:Qt,forEach:function(I,N,X){Qt(I,function(){N.apply(this,arguments)},X)},count:function(I){var N=0;return Qt(I,function(){N++}),N},toArray:function(I){return Qt(I,function(N){return N})||[]},only:function(I){if(!nt(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},J.Component=H,J.Fragment=n,J.Profiler=l,J.PureComponent=Oe,J.StrictMode=s,J.Suspense=p,J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G,J.act=U,J.cloneElement=function(I,N,X){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var te=L({},I.props),oe=I.key,le=I.ref,me=I._owner;if(N!=null){if(N.ref!==void 0&&(le=N.ref,me=re.current),N.key!==void 0&&(oe=""+N.key),I.type&&I.type.defaultProps)var ce=I.type.defaultProps;for(Ee in N)Xe.call(N,Ee)&&!K.hasOwnProperty(Ee)&&(te[Ee]=N[Ee]===void 0&&ce!==void 0?ce[Ee]:N[Ee])}var Ee=arguments.length-2;if(Ee===1)te.children=X;else if(1<Ee){ce=Array(Ee);for(var yt=0;yt<Ee;yt++)ce[yt]=arguments[yt+2];te.children=ce}return{$$typeof:r,type:I.type,key:oe,ref:le,props:te,_owner:me}},J.createContext=function(I){return I={$$typeof:d,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:u,_context:I},I.Consumer=I},J.createElement=ie,J.createFactory=function(I){var N=ie.bind(null,I);return N.type=I,N},J.createRef=function(){return{current:null}},J.forwardRef=function(I){return{$$typeof:f,render:I}},J.isValidElement=nt,J.lazy=function(I){return{$$typeof:w,_payload:{_status:-1,_result:I},_init:at}},J.memo=function(I,N){return{$$typeof:g,type:I,compare:N===void 0?null:N}},J.startTransition=function(I){var N=M.transition;M.transition={};try{I()}finally{M.transition=N}},J.unstable_act=U,J.useCallback=function(I,N){return ke.current.useCallback(I,N)},J.useContext=function(I){return ke.current.useContext(I)},J.useDebugValue=function(){},J.useDeferredValue=function(I){return ke.current.useDeferredValue(I)},J.useEffect=function(I,N){return ke.current.useEffect(I,N)},J.useId=function(){return ke.current.useId()},J.useImperativeHandle=function(I,N,X){return ke.current.useImperativeHandle(I,N,X)},J.useInsertionEffect=function(I,N){return ke.current.useInsertionEffect(I,N)},J.useLayoutEffect=function(I,N){return ke.current.useLayoutEffect(I,N)},J.useMemo=function(I,N){return ke.current.useMemo(I,N)},J.useReducer=function(I,N,X){return ke.current.useReducer(I,N,X)},J.useRef=function(I){return ke.current.useRef(I)},J.useState=function(I){return ke.current.useState(I)},J.useSyncExternalStore=function(I,N,X){return ke.current.useSyncExternalStore(I,N,X)},J.useTransition=function(){return ke.current.useTransition()},J.version="18.3.1",J}var Wp;function $c(){return Wp||(Wp=1,Ku.exports=H0()),Ku.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp;function G0(){if(Bp)return ds;Bp=1;var r=$c(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(f,p,g){var w,v={},S=null,A=null;g!==void 0&&(S=""+g),p.key!==void 0&&(S=""+p.key),p.ref!==void 0&&(A=p.ref);for(w in p)s.call(p,w)&&!u.hasOwnProperty(w)&&(v[w]=p[w]);if(f&&f.defaultProps)for(w in p=f.defaultProps,p)v[w]===void 0&&(v[w]=p[w]);return{$$typeof:e,type:f,key:S,ref:A,props:v,_owner:l.current}}return ds.Fragment=n,ds.jsx=d,ds.jsxs=d,ds}var Vp;function q0(){return Vp||(Vp=1,qu.exports=G0()),qu.exports}var Ie=q0(),Ve=$c(),Jo={},Qu={exports:{}},pt={},Yu={exports:{}},Xu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p;function K0(){return $p||($p=1,function(r){function e(M,G){var U=M.length;M.push(G);e:for(;0<U;){var I=U-1>>>1,N=M[I];if(0<l(N,G))M[I]=G,M[U]=N,U=I;else break e}}function n(M){return M.length===0?null:M[0]}function s(M){if(M.length===0)return null;var G=M[0],U=M.pop();if(U!==G){M[0]=U;e:for(var I=0,N=M.length,X=N>>>1;I<X;){var te=2*(I+1)-1,oe=M[te],le=te+1,me=M[le];if(0>l(oe,U))le<N&&0>l(me,oe)?(M[I]=me,M[le]=U,I=le):(M[I]=oe,M[te]=U,I=te);else if(le<N&&0>l(me,U))M[I]=me,M[le]=U,I=le;else break e}}return G}function l(M,G){var U=M.sortIndex-G.sortIndex;return U!==0?U:M.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var d=Date,f=d.now();r.unstable_now=function(){return d.now()-f}}var p=[],g=[],w=1,v=null,S=3,A=!1,L=!1,B=!1,H=typeof setTimeout=="function"?setTimeout:null,Ae=typeof clearTimeout=="function"?clearTimeout:null,Oe=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function xe(M){for(var G=n(g);G!==null;){if(G.callback===null)s(g);else if(G.startTime<=M)s(g),G.sortIndex=G.expirationTime,e(p,G);else break;G=n(g)}}function pe(M){if(B=!1,xe(M),!L)if(n(p)!==null)L=!0,at(Xe);else{var G=n(g);G!==null&&ke(pe,G.startTime-M)}}function Xe(M,G){L=!1,B&&(B=!1,Ae(ie),ie=-1),A=!0;var U=S;try{for(xe(G),v=n(p);v!==null&&(!(v.expirationTime>G)||M&&!qt());){var I=v.callback;if(typeof I=="function"){v.callback=null,S=v.priorityLevel;var N=I(v.expirationTime<=G);G=r.unstable_now(),typeof N=="function"?v.callback=N:v===n(p)&&s(p),xe(G)}else s(p);v=n(p)}if(v!==null)var X=!0;else{var te=n(g);te!==null&&ke(pe,te.startTime-G),X=!1}return X}finally{v=null,S=U,A=!1}}var re=!1,K=null,ie=-1,Ue=5,nt=-1;function qt(){return!(r.unstable_now()-nt<Ue)}function Kt(){if(K!==null){var M=r.unstable_now();nt=M;var G=!0;try{G=K(!0,M)}finally{G?vt():(re=!1,K=null)}}else re=!1}var vt;if(typeof Oe=="function")vt=function(){Oe(Kt)};else if(typeof MessageChannel<"u"){var Lt=new MessageChannel,Qt=Lt.port2;Lt.port1.onmessage=Kt,vt=function(){Qt.postMessage(null)}}else vt=function(){H(Kt,0)};function at(M){K=M,re||(re=!0,vt())}function ke(M,G){ie=H(function(){M(r.unstable_now())},G)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(M){M.callback=null},r.unstable_continueExecution=function(){L||A||(L=!0,at(Xe))},r.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ue=0<M?Math.floor(1e3/M):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_getFirstCallbackNode=function(){return n(p)},r.unstable_next=function(M){switch(S){case 1:case 2:case 3:var G=3;break;default:G=S}var U=S;S=G;try{return M()}finally{S=U}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(M,G){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var U=S;S=M;try{return G()}finally{S=U}},r.unstable_scheduleCallback=function(M,G,U){var I=r.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?I+U:I):U=I,M){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=U+N,M={id:w++,callback:G,priorityLevel:M,startTime:U,expirationTime:N,sortIndex:-1},U>I?(M.sortIndex=U,e(g,M),n(p)===null&&M===n(g)&&(B?(Ae(ie),ie=-1):B=!0,ke(pe,U-I))):(M.sortIndex=N,e(p,M),L||A||(L=!0,at(Xe))),M},r.unstable_shouldYield=qt,r.unstable_wrapCallback=function(M){var G=S;return function(){var U=S;S=G;try{return M.apply(this,arguments)}finally{S=U}}}}(Xu)),Xu}var Hp;function Q0(){return Hp||(Hp=1,Yu.exports=K0()),Yu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gp;function Y0(){if(Gp)return pt;Gp=1;var r=$c(),e=Q0();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function u(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(l[t]=i,t=0;t<i.length;t++)s.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},v={};function S(t){return p.call(v,t)?!0:p.call(w,t)?!1:g.test(t)?v[t]=!0:(w[t]=!0,!1)}function A(t,i,o,a){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return a?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function L(t,i,o,a){if(i===null||typeof i>"u"||A(t,i,o,a))return!0;if(a)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function B(t,i,o,a,c,h,m){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=a,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=m}var H={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){H[t]=new B(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];H[i]=new B(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){H[t]=new B(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){H[t]=new B(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){H[t]=new B(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){H[t]=new B(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){H[t]=new B(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){H[t]=new B(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){H[t]=new B(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ae=/[\-:]([a-z])/g;function Oe(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(Ae,Oe);H[i]=new B(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(Ae,Oe);H[i]=new B(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(Ae,Oe);H[i]=new B(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){H[t]=new B(t,1,!1,t.toLowerCase(),null,!1,!1)}),H.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){H[t]=new B(t,1,!1,t.toLowerCase(),null,!0,!0)});function xe(t,i,o,a){var c=H.hasOwnProperty(i)?H[i]:null;(c!==null?c.type!==0:a||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(L(i,o,c,a)&&(o=null),a||c===null?S(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):c.mustUseProperty?t[c.propertyName]=o===null?c.type===3?!1:"":o:(i=c.attributeName,a=c.attributeNamespace,o===null?t.removeAttribute(i):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,a?t.setAttributeNS(a,i,o):t.setAttribute(i,o))))}var pe=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xe=Symbol.for("react.element"),re=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),ie=Symbol.for("react.strict_mode"),Ue=Symbol.for("react.profiler"),nt=Symbol.for("react.provider"),qt=Symbol.for("react.context"),Kt=Symbol.for("react.forward_ref"),vt=Symbol.for("react.suspense"),Lt=Symbol.for("react.suspense_list"),Qt=Symbol.for("react.memo"),at=Symbol.for("react.lazy"),ke=Symbol.for("react.offscreen"),M=Symbol.iterator;function G(t){return t===null||typeof t!="object"?null:(t=M&&t[M]||t["@@iterator"],typeof t=="function"?t:null)}var U=Object.assign,I;function N(t){if(I===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+t}var X=!1;function te(t,i){if(!t||X)return"";X=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(k){var a=k}Reflect.construct(t,[],i)}else{try{i.call()}catch(k){a=k}t.call(i.prototype)}else{try{throw Error()}catch(k){a=k}t()}}catch(k){if(k&&a&&typeof k.stack=="string"){for(var c=k.stack.split(`
`),h=a.stack.split(`
`),m=c.length-1,_=h.length-1;1<=m&&0<=_&&c[m]!==h[_];)_--;for(;1<=m&&0<=_;m--,_--)if(c[m]!==h[_]){if(m!==1||_!==1)do if(m--,_--,0>_||c[m]!==h[_]){var y=`
`+c[m].replace(" at new "," at ");return t.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",t.displayName)),y}while(1<=m&&0<=_);break}}}finally{X=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?N(t):""}function oe(t){switch(t.tag){case 5:return N(t.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return t=te(t.type,!1),t;case 11:return t=te(t.type.render,!1),t;case 1:return t=te(t.type,!0),t;default:return""}}function le(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case K:return"Fragment";case re:return"Portal";case Ue:return"Profiler";case ie:return"StrictMode";case vt:return"Suspense";case Lt:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case qt:return(t.displayName||"Context")+".Consumer";case nt:return(t._context.displayName||"Context")+".Provider";case Kt:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Qt:return i=t.displayName||null,i!==null?i:le(t.type)||"Memo";case at:i=t._payload,t=t._init;try{return le(t(i))}catch{}}return null}function me(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return le(i);case 8:return i===ie?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ce(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ee(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function yt(t){var i=Ee(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),a=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(m){a=""+m,h.call(this,m)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(m){a=""+m},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Ws(t){t._valueTracker||(t._valueTracker=yt(t))}function Hd(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),a="";return t&&(a=Ee(t)?t.checked?"true":"false":t.value),t=a,t!==o?(i.setValue(t),!0):!1}function Bs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ea(t,i){var o=i.checked;return U({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function Gd(t,i){var o=i.defaultValue==null?"":i.defaultValue,a=i.checked!=null?i.checked:i.defaultChecked;o=ce(i.value!=null?i.value:o),t._wrapperState={initialChecked:a,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function qd(t,i){i=i.checked,i!=null&&xe(t,"checked",i,!1)}function ta(t,i){qd(t,i);var o=ce(i.value),a=i.type;if(o!=null)a==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(a==="submit"||a==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?na(t,i.type,o):i.hasOwnProperty("defaultValue")&&na(t,i.type,ce(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Kd(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var a=i.type;if(!(a!=="submit"&&a!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function na(t,i,o){(i!=="number"||Bs(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var ki=Array.isArray;function Dr(t,i,o,a){if(t=t.options,i){i={};for(var c=0;c<o.length;c++)i["$"+o[c]]=!0;for(o=0;o<t.length;o++)c=i.hasOwnProperty("$"+t[o].value),t[o].selected!==c&&(t[o].selected=c),c&&a&&(t[o].defaultSelected=!0)}else{for(o=""+ce(o),i=null,c=0;c<t.length;c++){if(t[c].value===o){t[c].selected=!0,a&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function ra(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return U({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Qd(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(ki(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:ce(o)}}function Yd(t,i){var o=ce(i.value),a=ce(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),a!=null&&(t.defaultValue=""+a)}function Xd(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function Jd(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ia(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?Jd(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Vs,Zd=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,a,c){MSApp.execUnsafeLocalFunction(function(){return t(i,o,a,c)})}:t}(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Vs=Vs||document.createElement("div"),Vs.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Vs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Ri(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Ni={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Kv=["Webkit","ms","Moz","O"];Object.keys(Ni).forEach(function(t){Kv.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Ni[i]=Ni[t]})});function eh(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Ni.hasOwnProperty(t)&&Ni[t]?(""+i).trim():i+"px"}function th(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var a=o.indexOf("--")===0,c=eh(o,i[o],a);o==="float"&&(o="cssFloat"),a?t.setProperty(o,c):t[o]=c}}var Qv=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sa(t,i){if(i){if(Qv[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function oa(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var la=null;function aa(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ua=null,Lr=null,Mr=null;function nh(t){if(t=Yi(t)){if(typeof ua!="function")throw Error(n(280));var i=t.stateNode;i&&(i=fo(i),ua(t.stateNode,t.type,i))}}function rh(t){Lr?Mr?Mr.push(t):Mr=[t]:Lr=t}function ih(){if(Lr){var t=Lr,i=Mr;if(Mr=Lr=null,nh(t),i)for(t=0;t<i.length;t++)nh(i[t])}}function sh(t,i){return t(i)}function oh(){}var ca=!1;function lh(t,i,o){if(ca)return t(i,o);ca=!0;try{return sh(t,i,o)}finally{ca=!1,(Lr!==null||Mr!==null)&&(oh(),ih())}}function Pi(t,i){var o=t.stateNode;if(o===null)return null;var a=fo(o);if(a===null)return null;o=a[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var da=!1;if(f)try{var Ai={};Object.defineProperty(Ai,"passive",{get:function(){da=!0}}),window.addEventListener("test",Ai,Ai),window.removeEventListener("test",Ai,Ai)}catch{da=!1}function Yv(t,i,o,a,c,h,m,_,y){var k=Array.prototype.slice.call(arguments,3);try{i.apply(o,k)}catch(P){this.onError(P)}}var Oi=!1,$s=null,Hs=!1,ha=null,Xv={onError:function(t){Oi=!0,$s=t}};function Jv(t,i,o,a,c,h,m,_,y){Oi=!1,$s=null,Yv.apply(Xv,arguments)}function Zv(t,i,o,a,c,h,m,_,y){if(Jv.apply(this,arguments),Oi){if(Oi){var k=$s;Oi=!1,$s=null}else throw Error(n(198));Hs||(Hs=!0,ha=k)}}function sr(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,i.flags&4098&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function ah(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function uh(t){if(sr(t)!==t)throw Error(n(188))}function ey(t){var i=t.alternate;if(!i){if(i=sr(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,a=i;;){var c=o.return;if(c===null)break;var h=c.alternate;if(h===null){if(a=c.return,a!==null){o=a;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===o)return uh(c),t;if(h===a)return uh(c),i;h=h.sibling}throw Error(n(188))}if(o.return!==a.return)o=c,a=h;else{for(var m=!1,_=c.child;_;){if(_===o){m=!0,o=c,a=h;break}if(_===a){m=!0,a=c,o=h;break}_=_.sibling}if(!m){for(_=h.child;_;){if(_===o){m=!0,o=h,a=c;break}if(_===a){m=!0,a=h,o=c;break}_=_.sibling}if(!m)throw Error(n(189))}}if(o.alternate!==a)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function ch(t){return t=ey(t),t!==null?dh(t):null}function dh(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=dh(t);if(i!==null)return i;t=t.sibling}return null}var hh=e.unstable_scheduleCallback,fh=e.unstable_cancelCallback,ty=e.unstable_shouldYield,ny=e.unstable_requestPaint,De=e.unstable_now,ry=e.unstable_getCurrentPriorityLevel,fa=e.unstable_ImmediatePriority,ph=e.unstable_UserBlockingPriority,Gs=e.unstable_NormalPriority,iy=e.unstable_LowPriority,mh=e.unstable_IdlePriority,qs=null,Yt=null;function sy(t){if(Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(qs,t,void 0,(t.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:ay,oy=Math.log,ly=Math.LN2;function ay(t){return t>>>=0,t===0?32:31-(oy(t)/ly|0)|0}var Ks=64,Qs=4194304;function xi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ys(t,i){var o=t.pendingLanes;if(o===0)return 0;var a=0,c=t.suspendedLanes,h=t.pingedLanes,m=o&268435455;if(m!==0){var _=m&~c;_!==0?a=xi(_):(h&=m,h!==0&&(a=xi(h)))}else m=o&~c,m!==0?a=xi(m):h!==0&&(a=xi(h));if(a===0)return 0;if(i!==0&&i!==a&&!(i&c)&&(c=a&-a,h=i&-i,c>=h||c===16&&(h&4194240)!==0))return i;if(a&4&&(a|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=a;0<i;)o=31-Mt(i),c=1<<o,a|=t[o],i&=~c;return a}function uy(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cy(t,i){for(var o=t.suspendedLanes,a=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var m=31-Mt(h),_=1<<m,y=c[m];y===-1?(!(_&o)||_&a)&&(c[m]=uy(_,i)):y<=i&&(t.expiredLanes|=_),h&=~_}}function pa(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function gh(){var t=Ks;return Ks<<=1,!(Ks&4194240)&&(Ks=64),t}function ma(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Di(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Mt(i),t[i]=o}function dy(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var a=t.eventTimes;for(t=t.expirationTimes;0<o;){var c=31-Mt(o),h=1<<c;i[c]=0,a[c]=-1,t[c]=-1,o&=~h}}function ga(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var a=31-Mt(o),c=1<<a;c&i|t[a]&i&&(t[a]|=i),o&=~c}}var de=0;function _h(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var vh,_a,yh,wh,Eh,va=!1,Xs=[],kn=null,Rn=null,Nn=null,Li=new Map,Mi=new Map,Pn=[],hy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sh(t,i){switch(t){case"focusin":case"focusout":kn=null;break;case"dragenter":case"dragleave":Rn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":Li.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mi.delete(i.pointerId)}}function bi(t,i,o,a,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:a,nativeEvent:h,targetContainers:[c]},i!==null&&(i=Yi(i),i!==null&&_a(i)),t):(t.eventSystemFlags|=a,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function fy(t,i,o,a,c){switch(i){case"focusin":return kn=bi(kn,t,i,o,a,c),!0;case"dragenter":return Rn=bi(Rn,t,i,o,a,c),!0;case"mouseover":return Nn=bi(Nn,t,i,o,a,c),!0;case"pointerover":var h=c.pointerId;return Li.set(h,bi(Li.get(h)||null,t,i,o,a,c)),!0;case"gotpointercapture":return h=c.pointerId,Mi.set(h,bi(Mi.get(h)||null,t,i,o,a,c)),!0}return!1}function Ih(t){var i=or(t.target);if(i!==null){var o=sr(i);if(o!==null){if(i=o.tag,i===13){if(i=ah(o),i!==null){t.blockedOn=i,Eh(t.priority,function(){yh(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Js(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=wa(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var a=new o.constructor(o.type,o);la=a,o.target.dispatchEvent(a),la=null}else return i=Yi(o),i!==null&&_a(i),t.blockedOn=o,!1;i.shift()}return!0}function Ch(t,i,o){Js(t)&&o.delete(i)}function py(){va=!1,kn!==null&&Js(kn)&&(kn=null),Rn!==null&&Js(Rn)&&(Rn=null),Nn!==null&&Js(Nn)&&(Nn=null),Li.forEach(Ch),Mi.forEach(Ch)}function Fi(t,i){t.blockedOn===i&&(t.blockedOn=null,va||(va=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,py)))}function Ui(t){function i(c){return Fi(c,t)}if(0<Xs.length){Fi(Xs[0],t);for(var o=1;o<Xs.length;o++){var a=Xs[o];a.blockedOn===t&&(a.blockedOn=null)}}for(kn!==null&&Fi(kn,t),Rn!==null&&Fi(Rn,t),Nn!==null&&Fi(Nn,t),Li.forEach(i),Mi.forEach(i),o=0;o<Pn.length;o++)a=Pn[o],a.blockedOn===t&&(a.blockedOn=null);for(;0<Pn.length&&(o=Pn[0],o.blockedOn===null);)Ih(o),o.blockedOn===null&&Pn.shift()}var br=pe.ReactCurrentBatchConfig,Zs=!0;function my(t,i,o,a){var c=de,h=br.transition;br.transition=null;try{de=1,ya(t,i,o,a)}finally{de=c,br.transition=h}}function gy(t,i,o,a){var c=de,h=br.transition;br.transition=null;try{de=4,ya(t,i,o,a)}finally{de=c,br.transition=h}}function ya(t,i,o,a){if(Zs){var c=wa(t,i,o,a);if(c===null)Fa(t,i,a,eo,o),Sh(t,a);else if(fy(c,t,i,o,a))a.stopPropagation();else if(Sh(t,a),i&4&&-1<hy.indexOf(t)){for(;c!==null;){var h=Yi(c);if(h!==null&&vh(h),h=wa(t,i,o,a),h===null&&Fa(t,i,a,eo,o),h===c)break;c=h}c!==null&&a.stopPropagation()}else Fa(t,i,a,null,o)}}var eo=null;function wa(t,i,o,a){if(eo=null,t=aa(a),t=or(t),t!==null)if(i=sr(t),i===null)t=null;else if(o=i.tag,o===13){if(t=ah(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return eo=t,null}function Th(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ry()){case fa:return 1;case ph:return 4;case Gs:case iy:return 16;case mh:return 536870912;default:return 16}default:return 16}}var An=null,Ea=null,to=null;function kh(){if(to)return to;var t,i=Ea,o=i.length,a,c="value"in An?An.value:An.textContent,h=c.length;for(t=0;t<o&&i[t]===c[t];t++);var m=o-t;for(a=1;a<=m&&i[o-a]===c[h-a];a++);return to=c.slice(t,1<a?1-a:void 0)}function no(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ro(){return!0}function Rh(){return!1}function wt(t){function i(o,a,c,h,m){this._reactName=o,this._targetInst=c,this.type=a,this.nativeEvent=h,this.target=m,this.currentTarget=null;for(var _ in t)t.hasOwnProperty(_)&&(o=t[_],this[_]=o?o(h):h[_]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ro:Rh,this.isPropagationStopped=Rh,this}return U(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ro)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ro)},persist:function(){},isPersistent:ro}),i}var Fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sa=wt(Fr),zi=U({},Fr,{view:0,detail:0}),_y=wt(zi),Ia,Ca,ji,io=U({},zi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ka,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ji&&(ji&&t.type==="mousemove"?(Ia=t.screenX-ji.screenX,Ca=t.screenY-ji.screenY):Ca=Ia=0,ji=t),Ia)},movementY:function(t){return"movementY"in t?t.movementY:Ca}}),Nh=wt(io),vy=U({},io,{dataTransfer:0}),yy=wt(vy),wy=U({},zi,{relatedTarget:0}),Ta=wt(wy),Ey=U({},Fr,{animationName:0,elapsedTime:0,pseudoElement:0}),Sy=wt(Ey),Iy=U({},Fr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Cy=wt(Iy),Ty=U({},Fr,{data:0}),Ph=wt(Ty),ky={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ry={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ny={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Py(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Ny[t])?!!i[t]:!1}function ka(){return Py}var Ay=U({},zi,{key:function(t){if(t.key){var i=ky[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=no(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ry[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ka,charCode:function(t){return t.type==="keypress"?no(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?no(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Oy=wt(Ay),xy=U({},io,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ah=wt(xy),Dy=U({},zi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ka}),Ly=wt(Dy),My=U({},Fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),by=wt(My),Fy=U({},io,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Uy=wt(Fy),zy=[9,13,27,32],Ra=f&&"CompositionEvent"in window,Wi=null;f&&"documentMode"in document&&(Wi=document.documentMode);var jy=f&&"TextEvent"in window&&!Wi,Oh=f&&(!Ra||Wi&&8<Wi&&11>=Wi),xh=" ",Dh=!1;function Lh(t,i){switch(t){case"keyup":return zy.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ur=!1;function Wy(t,i){switch(t){case"compositionend":return Mh(i);case"keypress":return i.which!==32?null:(Dh=!0,xh);case"textInput":return t=i.data,t===xh&&Dh?null:t;default:return null}}function By(t,i){if(Ur)return t==="compositionend"||!Ra&&Lh(t,i)?(t=kh(),to=Ea=An=null,Ur=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Oh&&i.locale!=="ko"?null:i.data;default:return null}}var Vy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bh(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Vy[t.type]:i==="textarea"}function Fh(t,i,o,a){rh(a),i=uo(i,"onChange"),0<i.length&&(o=new Sa("onChange","change",null,o,a),t.push({event:o,listeners:i}))}var Bi=null,Vi=null;function $y(t){tf(t,0)}function so(t){var i=Vr(t);if(Hd(i))return t}function Hy(t,i){if(t==="change")return i}var Uh=!1;if(f){var Na;if(f){var Pa="oninput"in document;if(!Pa){var zh=document.createElement("div");zh.setAttribute("oninput","return;"),Pa=typeof zh.oninput=="function"}Na=Pa}else Na=!1;Uh=Na&&(!document.documentMode||9<document.documentMode)}function jh(){Bi&&(Bi.detachEvent("onpropertychange",Wh),Vi=Bi=null)}function Wh(t){if(t.propertyName==="value"&&so(Vi)){var i=[];Fh(i,Vi,t,aa(t)),lh($y,i)}}function Gy(t,i,o){t==="focusin"?(jh(),Bi=i,Vi=o,Bi.attachEvent("onpropertychange",Wh)):t==="focusout"&&jh()}function qy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return so(Vi)}function Ky(t,i){if(t==="click")return so(i)}function Qy(t,i){if(t==="input"||t==="change")return so(i)}function Yy(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var bt=typeof Object.is=="function"?Object.is:Yy;function $i(t,i){if(bt(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),a=Object.keys(i);if(o.length!==a.length)return!1;for(a=0;a<o.length;a++){var c=o[a];if(!p.call(i,c)||!bt(t[c],i[c]))return!1}return!0}function Bh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vh(t,i){var o=Bh(t);t=0;for(var a;o;){if(o.nodeType===3){if(a=t+o.textContent.length,t<=i&&a>=i)return{node:o,offset:i-t};t=a}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Bh(o)}}function $h(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?$h(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Hh(){for(var t=window,i=Bs();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=Bs(t.document)}return i}function Aa(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Xy(t){var i=Hh(),o=t.focusedElem,a=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&$h(o.ownerDocument.documentElement,o)){if(a!==null&&Aa(o)){if(i=a.start,t=a.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=o.textContent.length,h=Math.min(a.start,c);a=a.end===void 0?h:Math.min(a.end,c),!t.extend&&h>a&&(c=a,a=h,h=c),c=Vh(o,h);var m=Vh(o,a);c&&m&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==m.node||t.focusOffset!==m.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),h>a?(t.addRange(i),t.extend(m.node,m.offset)):(i.setEnd(m.node,m.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Jy=f&&"documentMode"in document&&11>=document.documentMode,zr=null,Oa=null,Hi=null,xa=!1;function Gh(t,i,o){var a=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;xa||zr==null||zr!==Bs(a)||(a=zr,"selectionStart"in a&&Aa(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Hi&&$i(Hi,a)||(Hi=a,a=uo(Oa,"onSelect"),0<a.length&&(i=new Sa("onSelect","select",null,i,o),t.push({event:i,listeners:a}),i.target=zr)))}function oo(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var jr={animationend:oo("Animation","AnimationEnd"),animationiteration:oo("Animation","AnimationIteration"),animationstart:oo("Animation","AnimationStart"),transitionend:oo("Transition","TransitionEnd")},Da={},qh={};f&&(qh=document.createElement("div").style,"AnimationEvent"in window||(delete jr.animationend.animation,delete jr.animationiteration.animation,delete jr.animationstart.animation),"TransitionEvent"in window||delete jr.transitionend.transition);function lo(t){if(Da[t])return Da[t];if(!jr[t])return t;var i=jr[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in qh)return Da[t]=i[o];return t}var Kh=lo("animationend"),Qh=lo("animationiteration"),Yh=lo("animationstart"),Xh=lo("transitionend"),Jh=new Map,Zh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function On(t,i){Jh.set(t,i),u(i,[t])}for(var La=0;La<Zh.length;La++){var Ma=Zh[La],Zy=Ma.toLowerCase(),e0=Ma[0].toUpperCase()+Ma.slice(1);On(Zy,"on"+e0)}On(Kh,"onAnimationEnd"),On(Qh,"onAnimationIteration"),On(Yh,"onAnimationStart"),On("dblclick","onDoubleClick"),On("focusin","onFocus"),On("focusout","onBlur"),On(Xh,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),t0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gi));function ef(t,i,o){var a=t.type||"unknown-event";t.currentTarget=o,Zv(a,i,void 0,t),t.currentTarget=null}function tf(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var a=t[o],c=a.event;a=a.listeners;e:{var h=void 0;if(i)for(var m=a.length-1;0<=m;m--){var _=a[m],y=_.instance,k=_.currentTarget;if(_=_.listener,y!==h&&c.isPropagationStopped())break e;ef(c,_,k),h=y}else for(m=0;m<a.length;m++){if(_=a[m],y=_.instance,k=_.currentTarget,_=_.listener,y!==h&&c.isPropagationStopped())break e;ef(c,_,k),h=y}}}if(Hs)throw t=ha,Hs=!1,ha=null,t}function ye(t,i){var o=i[Va];o===void 0&&(o=i[Va]=new Set);var a=t+"__bubble";o.has(a)||(nf(i,t,2,!1),o.add(a))}function ba(t,i,o){var a=0;i&&(a|=4),nf(o,t,a,i)}var ao="_reactListening"+Math.random().toString(36).slice(2);function qi(t){if(!t[ao]){t[ao]=!0,s.forEach(function(o){o!=="selectionchange"&&(t0.has(o)||ba(o,!1,t),ba(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ao]||(i[ao]=!0,ba("selectionchange",!1,i))}}function nf(t,i,o,a){switch(Th(i)){case 1:var c=my;break;case 4:c=gy;break;default:c=ya}o=c.bind(null,i,o,t),c=void 0,!da||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),a?c!==void 0?t.addEventListener(i,o,{capture:!0,passive:c}):t.addEventListener(i,o,!0):c!==void 0?t.addEventListener(i,o,{passive:c}):t.addEventListener(i,o,!1)}function Fa(t,i,o,a,c){var h=a;if(!(i&1)&&!(i&2)&&a!==null)e:for(;;){if(a===null)return;var m=a.tag;if(m===3||m===4){var _=a.stateNode.containerInfo;if(_===c||_.nodeType===8&&_.parentNode===c)break;if(m===4)for(m=a.return;m!==null;){var y=m.tag;if((y===3||y===4)&&(y=m.stateNode.containerInfo,y===c||y.nodeType===8&&y.parentNode===c))return;m=m.return}for(;_!==null;){if(m=or(_),m===null)return;if(y=m.tag,y===5||y===6){a=h=m;continue e}_=_.parentNode}}a=a.return}lh(function(){var k=h,P=aa(o),O=[];e:{var R=Jh.get(t);if(R!==void 0){var b=Sa,z=t;switch(t){case"keypress":if(no(o)===0)break e;case"keydown":case"keyup":b=Oy;break;case"focusin":z="focus",b=Ta;break;case"focusout":z="blur",b=Ta;break;case"beforeblur":case"afterblur":b=Ta;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Nh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=yy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=Ly;break;case Kh:case Qh:case Yh:b=Sy;break;case Xh:b=by;break;case"scroll":b=_y;break;case"wheel":b=Uy;break;case"copy":case"cut":case"paste":b=Cy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Ah}var j=(i&4)!==0,Le=!j&&t==="scroll",C=j?R!==null?R+"Capture":null:R;j=[];for(var E=k,T;E!==null;){T=E;var x=T.stateNode;if(T.tag===5&&x!==null&&(T=x,C!==null&&(x=Pi(E,C),x!=null&&j.push(Ki(E,x,T)))),Le)break;E=E.return}0<j.length&&(R=new b(R,z,null,o,P),O.push({event:R,listeners:j}))}}if(!(i&7)){e:{if(R=t==="mouseover"||t==="pointerover",b=t==="mouseout"||t==="pointerout",R&&o!==la&&(z=o.relatedTarget||o.fromElement)&&(or(z)||z[ln]))break e;if((b||R)&&(R=P.window===P?P:(R=P.ownerDocument)?R.defaultView||R.parentWindow:window,b?(z=o.relatedTarget||o.toElement,b=k,z=z?or(z):null,z!==null&&(Le=sr(z),z!==Le||z.tag!==5&&z.tag!==6)&&(z=null)):(b=null,z=k),b!==z)){if(j=Nh,x="onMouseLeave",C="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(j=Ah,x="onPointerLeave",C="onPointerEnter",E="pointer"),Le=b==null?R:Vr(b),T=z==null?R:Vr(z),R=new j(x,E+"leave",b,o,P),R.target=Le,R.relatedTarget=T,x=null,or(P)===k&&(j=new j(C,E+"enter",z,o,P),j.target=T,j.relatedTarget=Le,x=j),Le=x,b&&z)t:{for(j=b,C=z,E=0,T=j;T;T=Wr(T))E++;for(T=0,x=C;x;x=Wr(x))T++;for(;0<E-T;)j=Wr(j),E--;for(;0<T-E;)C=Wr(C),T--;for(;E--;){if(j===C||C!==null&&j===C.alternate)break t;j=Wr(j),C=Wr(C)}j=null}else j=null;b!==null&&rf(O,R,b,j,!1),z!==null&&Le!==null&&rf(O,Le,z,j,!0)}}e:{if(R=k?Vr(k):window,b=R.nodeName&&R.nodeName.toLowerCase(),b==="select"||b==="input"&&R.type==="file")var W=Hy;else if(bh(R))if(Uh)W=Qy;else{W=qy;var V=Gy}else(b=R.nodeName)&&b.toLowerCase()==="input"&&(R.type==="checkbox"||R.type==="radio")&&(W=Ky);if(W&&(W=W(t,k))){Fh(O,W,o,P);break e}V&&V(t,R,k),t==="focusout"&&(V=R._wrapperState)&&V.controlled&&R.type==="number"&&na(R,"number",R.value)}switch(V=k?Vr(k):window,t){case"focusin":(bh(V)||V.contentEditable==="true")&&(zr=V,Oa=k,Hi=null);break;case"focusout":Hi=Oa=zr=null;break;case"mousedown":xa=!0;break;case"contextmenu":case"mouseup":case"dragend":xa=!1,Gh(O,o,P);break;case"selectionchange":if(Jy)break;case"keydown":case"keyup":Gh(O,o,P)}var $;if(Ra)e:{switch(t){case"compositionstart":var Q="onCompositionStart";break e;case"compositionend":Q="onCompositionEnd";break e;case"compositionupdate":Q="onCompositionUpdate";break e}Q=void 0}else Ur?Lh(t,o)&&(Q="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(Q="onCompositionStart");Q&&(Oh&&o.locale!=="ko"&&(Ur||Q!=="onCompositionStart"?Q==="onCompositionEnd"&&Ur&&($=kh()):(An=P,Ea="value"in An?An.value:An.textContent,Ur=!0)),V=uo(k,Q),0<V.length&&(Q=new Ph(Q,t,null,o,P),O.push({event:Q,listeners:V}),$?Q.data=$:($=Mh(o),$!==null&&(Q.data=$)))),($=jy?Wy(t,o):By(t,o))&&(k=uo(k,"onBeforeInput"),0<k.length&&(P=new Ph("onBeforeInput","beforeinput",null,o,P),O.push({event:P,listeners:k}),P.data=$))}tf(O,i)})}function Ki(t,i,o){return{instance:t,listener:i,currentTarget:o}}function uo(t,i){for(var o=i+"Capture",a=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=Pi(t,o),h!=null&&a.unshift(Ki(t,h,c)),h=Pi(t,i),h!=null&&a.push(Ki(t,h,c))),t=t.return}return a}function Wr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function rf(t,i,o,a,c){for(var h=i._reactName,m=[];o!==null&&o!==a;){var _=o,y=_.alternate,k=_.stateNode;if(y!==null&&y===a)break;_.tag===5&&k!==null&&(_=k,c?(y=Pi(o,h),y!=null&&m.unshift(Ki(o,y,_))):c||(y=Pi(o,h),y!=null&&m.push(Ki(o,y,_)))),o=o.return}m.length!==0&&t.push({event:i,listeners:m})}var n0=/\r\n?/g,r0=/\u0000|\uFFFD/g;function sf(t){return(typeof t=="string"?t:""+t).replace(n0,`
`).replace(r0,"")}function co(t,i,o){if(i=sf(i),sf(t)!==i&&o)throw Error(n(425))}function ho(){}var Ua=null,za=null;function ja(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Wa=typeof setTimeout=="function"?setTimeout:void 0,i0=typeof clearTimeout=="function"?clearTimeout:void 0,of=typeof Promise=="function"?Promise:void 0,s0=typeof queueMicrotask=="function"?queueMicrotask:typeof of<"u"?function(t){return of.resolve(null).then(t).catch(o0)}:Wa;function o0(t){setTimeout(function(){throw t})}function Ba(t,i){var o=i,a=0;do{var c=o.nextSibling;if(t.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(a===0){t.removeChild(c),Ui(i);return}a--}else o!=="$"&&o!=="$?"&&o!=="$!"||a++;o=c}while(o);Ui(i)}function xn(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function lf(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var Br=Math.random().toString(36).slice(2),Xt="__reactFiber$"+Br,Qi="__reactProps$"+Br,ln="__reactContainer$"+Br,Va="__reactEvents$"+Br,l0="__reactListeners$"+Br,a0="__reactHandles$"+Br;function or(t){var i=t[Xt];if(i)return i;for(var o=t.parentNode;o;){if(i=o[ln]||o[Xt]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=lf(t);t!==null;){if(o=t[Xt])return o;t=lf(t)}return i}t=o,o=t.parentNode}return null}function Yi(t){return t=t[Xt]||t[ln],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Vr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function fo(t){return t[Qi]||null}var $a=[],$r=-1;function Dn(t){return{current:t}}function we(t){0>$r||(t.current=$a[$r],$a[$r]=null,$r--)}function ge(t,i){$r++,$a[$r]=t.current,t.current=i}var Ln={},Je=Dn(Ln),ut=Dn(!1),lr=Ln;function Hr(t,i){var o=t.type.contextTypes;if(!o)return Ln;var a=t.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===i)return a.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in o)c[h]=i[h];return a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function ct(t){return t=t.childContextTypes,t!=null}function po(){we(ut),we(Je)}function af(t,i,o){if(Je.current!==Ln)throw Error(n(168));ge(Je,i),ge(ut,o)}function uf(t,i,o){var a=t.stateNode;if(i=i.childContextTypes,typeof a.getChildContext!="function")return o;a=a.getChildContext();for(var c in a)if(!(c in i))throw Error(n(108,me(t)||"Unknown",c));return U({},o,a)}function mo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ln,lr=Je.current,ge(Je,t),ge(ut,ut.current),!0}function cf(t,i,o){var a=t.stateNode;if(!a)throw Error(n(169));o?(t=uf(t,i,lr),a.__reactInternalMemoizedMergedChildContext=t,we(ut),we(Je),ge(Je,t)):we(ut),ge(ut,o)}var an=null,go=!1,Ha=!1;function df(t){an===null?an=[t]:an.push(t)}function u0(t){go=!0,df(t)}function Mn(){if(!Ha&&an!==null){Ha=!0;var t=0,i=de;try{var o=an;for(de=1;t<o.length;t++){var a=o[t];do a=a(!0);while(a!==null)}an=null,go=!1}catch(c){throw an!==null&&(an=an.slice(t+1)),hh(fa,Mn),c}finally{de=i,Ha=!1}}return null}var Gr=[],qr=0,_o=null,vo=0,kt=[],Rt=0,ar=null,un=1,cn="";function ur(t,i){Gr[qr++]=vo,Gr[qr++]=_o,_o=t,vo=i}function hf(t,i,o){kt[Rt++]=un,kt[Rt++]=cn,kt[Rt++]=ar,ar=t;var a=un;t=cn;var c=32-Mt(a)-1;a&=~(1<<c),o+=1;var h=32-Mt(i)+c;if(30<h){var m=c-c%5;h=(a&(1<<m)-1).toString(32),a>>=m,c-=m,un=1<<32-Mt(i)+c|o<<c|a,cn=h+t}else un=1<<h|o<<c|a,cn=t}function Ga(t){t.return!==null&&(ur(t,1),hf(t,1,0))}function qa(t){for(;t===_o;)_o=Gr[--qr],Gr[qr]=null,vo=Gr[--qr],Gr[qr]=null;for(;t===ar;)ar=kt[--Rt],kt[Rt]=null,cn=kt[--Rt],kt[Rt]=null,un=kt[--Rt],kt[Rt]=null}var Et=null,St=null,Se=!1,Ft=null;function ff(t,i){var o=Ot(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function pf(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Et=t,St=xn(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Et=t,St=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=ar!==null?{id:un,overflow:cn}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Ot(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Et=t,St=null,!0):!1;default:return!1}}function Ka(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Qa(t){if(Se){var i=St;if(i){var o=i;if(!pf(t,i)){if(Ka(t))throw Error(n(418));i=xn(o.nextSibling);var a=Et;i&&pf(t,i)?ff(a,o):(t.flags=t.flags&-4097|2,Se=!1,Et=t)}}else{if(Ka(t))throw Error(n(418));t.flags=t.flags&-4097|2,Se=!1,Et=t}}}function mf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Et=t}function yo(t){if(t!==Et)return!1;if(!Se)return mf(t),Se=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!ja(t.type,t.memoizedProps)),i&&(i=St)){if(Ka(t))throw gf(),Error(n(418));for(;i;)ff(t,i),i=xn(i.nextSibling)}if(mf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){St=xn(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}St=null}}else St=Et?xn(t.stateNode.nextSibling):null;return!0}function gf(){for(var t=St;t;)t=xn(t.nextSibling)}function Kr(){St=Et=null,Se=!1}function Ya(t){Ft===null?Ft=[t]:Ft.push(t)}var c0=pe.ReactCurrentBatchConfig;function Xi(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var a=o.stateNode}if(!a)throw Error(n(147,t));var c=a,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(m){var _=c.refs;m===null?delete _[h]:_[h]=m},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function wo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function _f(t){var i=t._init;return i(t._payload)}function vf(t){function i(C,E){if(t){var T=C.deletions;T===null?(C.deletions=[E],C.flags|=16):T.push(E)}}function o(C,E){if(!t)return null;for(;E!==null;)i(C,E),E=E.sibling;return null}function a(C,E){for(C=new Map;E!==null;)E.key!==null?C.set(E.key,E):C.set(E.index,E),E=E.sibling;return C}function c(C,E){return C=Vn(C,E),C.index=0,C.sibling=null,C}function h(C,E,T){return C.index=T,t?(T=C.alternate,T!==null?(T=T.index,T<E?(C.flags|=2,E):T):(C.flags|=2,E)):(C.flags|=1048576,E)}function m(C){return t&&C.alternate===null&&(C.flags|=2),C}function _(C,E,T,x){return E===null||E.tag!==6?(E=Wu(T,C.mode,x),E.return=C,E):(E=c(E,T),E.return=C,E)}function y(C,E,T,x){var W=T.type;return W===K?P(C,E,T.props.children,x,T.key):E!==null&&(E.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===at&&_f(W)===E.type)?(x=c(E,T.props),x.ref=Xi(C,E,T),x.return=C,x):(x=$o(T.type,T.key,T.props,null,C.mode,x),x.ref=Xi(C,E,T),x.return=C,x)}function k(C,E,T,x){return E===null||E.tag!==4||E.stateNode.containerInfo!==T.containerInfo||E.stateNode.implementation!==T.implementation?(E=Bu(T,C.mode,x),E.return=C,E):(E=c(E,T.children||[]),E.return=C,E)}function P(C,E,T,x,W){return E===null||E.tag!==7?(E=_r(T,C.mode,x,W),E.return=C,E):(E=c(E,T),E.return=C,E)}function O(C,E,T){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Wu(""+E,C.mode,T),E.return=C,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Xe:return T=$o(E.type,E.key,E.props,null,C.mode,T),T.ref=Xi(C,null,E),T.return=C,T;case re:return E=Bu(E,C.mode,T),E.return=C,E;case at:var x=E._init;return O(C,x(E._payload),T)}if(ki(E)||G(E))return E=_r(E,C.mode,T,null),E.return=C,E;wo(C,E)}return null}function R(C,E,T,x){var W=E!==null?E.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return W!==null?null:_(C,E,""+T,x);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Xe:return T.key===W?y(C,E,T,x):null;case re:return T.key===W?k(C,E,T,x):null;case at:return W=T._init,R(C,E,W(T._payload),x)}if(ki(T)||G(T))return W!==null?null:P(C,E,T,x,null);wo(C,T)}return null}function b(C,E,T,x,W){if(typeof x=="string"&&x!==""||typeof x=="number")return C=C.get(T)||null,_(E,C,""+x,W);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Xe:return C=C.get(x.key===null?T:x.key)||null,y(E,C,x,W);case re:return C=C.get(x.key===null?T:x.key)||null,k(E,C,x,W);case at:var V=x._init;return b(C,E,T,V(x._payload),W)}if(ki(x)||G(x))return C=C.get(T)||null,P(E,C,x,W,null);wo(E,x)}return null}function z(C,E,T,x){for(var W=null,V=null,$=E,Q=E=0,We=null;$!==null&&Q<T.length;Q++){$.index>Q?(We=$,$=null):We=$.sibling;var ae=R(C,$,T[Q],x);if(ae===null){$===null&&($=We);break}t&&$&&ae.alternate===null&&i(C,$),E=h(ae,E,Q),V===null?W=ae:V.sibling=ae,V=ae,$=We}if(Q===T.length)return o(C,$),Se&&ur(C,Q),W;if($===null){for(;Q<T.length;Q++)$=O(C,T[Q],x),$!==null&&(E=h($,E,Q),V===null?W=$:V.sibling=$,V=$);return Se&&ur(C,Q),W}for($=a(C,$);Q<T.length;Q++)We=b($,C,Q,T[Q],x),We!==null&&(t&&We.alternate!==null&&$.delete(We.key===null?Q:We.key),E=h(We,E,Q),V===null?W=We:V.sibling=We,V=We);return t&&$.forEach(function($n){return i(C,$n)}),Se&&ur(C,Q),W}function j(C,E,T,x){var W=G(T);if(typeof W!="function")throw Error(n(150));if(T=W.call(T),T==null)throw Error(n(151));for(var V=W=null,$=E,Q=E=0,We=null,ae=T.next();$!==null&&!ae.done;Q++,ae=T.next()){$.index>Q?(We=$,$=null):We=$.sibling;var $n=R(C,$,ae.value,x);if($n===null){$===null&&($=We);break}t&&$&&$n.alternate===null&&i(C,$),E=h($n,E,Q),V===null?W=$n:V.sibling=$n,V=$n,$=We}if(ae.done)return o(C,$),Se&&ur(C,Q),W;if($===null){for(;!ae.done;Q++,ae=T.next())ae=O(C,ae.value,x),ae!==null&&(E=h(ae,E,Q),V===null?W=ae:V.sibling=ae,V=ae);return Se&&ur(C,Q),W}for($=a(C,$);!ae.done;Q++,ae=T.next())ae=b($,C,Q,ae.value,x),ae!==null&&(t&&ae.alternate!==null&&$.delete(ae.key===null?Q:ae.key),E=h(ae,E,Q),V===null?W=ae:V.sibling=ae,V=ae);return t&&$.forEach(function(V0){return i(C,V0)}),Se&&ur(C,Q),W}function Le(C,E,T,x){if(typeof T=="object"&&T!==null&&T.type===K&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case Xe:e:{for(var W=T.key,V=E;V!==null;){if(V.key===W){if(W=T.type,W===K){if(V.tag===7){o(C,V.sibling),E=c(V,T.props.children),E.return=C,C=E;break e}}else if(V.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===at&&_f(W)===V.type){o(C,V.sibling),E=c(V,T.props),E.ref=Xi(C,V,T),E.return=C,C=E;break e}o(C,V);break}else i(C,V);V=V.sibling}T.type===K?(E=_r(T.props.children,C.mode,x,T.key),E.return=C,C=E):(x=$o(T.type,T.key,T.props,null,C.mode,x),x.ref=Xi(C,E,T),x.return=C,C=x)}return m(C);case re:e:{for(V=T.key;E!==null;){if(E.key===V)if(E.tag===4&&E.stateNode.containerInfo===T.containerInfo&&E.stateNode.implementation===T.implementation){o(C,E.sibling),E=c(E,T.children||[]),E.return=C,C=E;break e}else{o(C,E);break}else i(C,E);E=E.sibling}E=Bu(T,C.mode,x),E.return=C,C=E}return m(C);case at:return V=T._init,Le(C,E,V(T._payload),x)}if(ki(T))return z(C,E,T,x);if(G(T))return j(C,E,T,x);wo(C,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,E!==null&&E.tag===6?(o(C,E.sibling),E=c(E,T),E.return=C,C=E):(o(C,E),E=Wu(T,C.mode,x),E.return=C,C=E),m(C)):o(C,E)}return Le}var Qr=vf(!0),yf=vf(!1),Eo=Dn(null),So=null,Yr=null,Xa=null;function Ja(){Xa=Yr=So=null}function Za(t){var i=Eo.current;we(Eo),t._currentValue=i}function eu(t,i,o){for(;t!==null;){var a=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,a!==null&&(a.childLanes|=i)):a!==null&&(a.childLanes&i)!==i&&(a.childLanes|=i),t===o)break;t=t.return}}function Xr(t,i){So=t,Xa=Yr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&i&&(dt=!0),t.firstContext=null)}function Nt(t){var i=t._currentValue;if(Xa!==t)if(t={context:t,memoizedValue:i,next:null},Yr===null){if(So===null)throw Error(n(308));Yr=t,So.dependencies={lanes:0,firstContext:t}}else Yr=Yr.next=t;return i}var cr=null;function tu(t){cr===null?cr=[t]:cr.push(t)}function wf(t,i,o,a){var c=i.interleaved;return c===null?(o.next=o,tu(i)):(o.next=c.next,c.next=o),i.interleaved=o,dn(t,a)}function dn(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var bn=!1;function nu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ef(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hn(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Fn(t,i,o){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,se&2){var c=a.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),a.pending=i,dn(t,o)}return c=a.interleaved,c===null?(i.next=i,tu(a)):(i.next=c.next,c.next=i),a.interleaved=i,dn(t,o)}function Io(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var a=i.lanes;a&=t.pendingLanes,o|=a,i.lanes=o,ga(t,o)}}function Sf(t,i){var o=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,o===a)){var c=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var m={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?c=h=m:h=h.next=m,o=o.next}while(o!==null);h===null?c=h=i:h=h.next=i}else c=h=i;o={baseState:a.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:a.shared,effects:a.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Co(t,i,o,a){var c=t.updateQueue;bn=!1;var h=c.firstBaseUpdate,m=c.lastBaseUpdate,_=c.shared.pending;if(_!==null){c.shared.pending=null;var y=_,k=y.next;y.next=null,m===null?h=k:m.next=k,m=y;var P=t.alternate;P!==null&&(P=P.updateQueue,_=P.lastBaseUpdate,_!==m&&(_===null?P.firstBaseUpdate=k:_.next=k,P.lastBaseUpdate=y))}if(h!==null){var O=c.baseState;m=0,P=k=y=null,_=h;do{var R=_.lane,b=_.eventTime;if((a&R)===R){P!==null&&(P=P.next={eventTime:b,lane:0,tag:_.tag,payload:_.payload,callback:_.callback,next:null});e:{var z=t,j=_;switch(R=i,b=o,j.tag){case 1:if(z=j.payload,typeof z=="function"){O=z.call(b,O,R);break e}O=z;break e;case 3:z.flags=z.flags&-65537|128;case 0:if(z=j.payload,R=typeof z=="function"?z.call(b,O,R):z,R==null)break e;O=U({},O,R);break e;case 2:bn=!0}}_.callback!==null&&_.lane!==0&&(t.flags|=64,R=c.effects,R===null?c.effects=[_]:R.push(_))}else b={eventTime:b,lane:R,tag:_.tag,payload:_.payload,callback:_.callback,next:null},P===null?(k=P=b,y=O):P=P.next=b,m|=R;if(_=_.next,_===null){if(_=c.shared.pending,_===null)break;R=_,_=R.next,R.next=null,c.lastBaseUpdate=R,c.shared.pending=null}}while(!0);if(P===null&&(y=O),c.baseState=y,c.firstBaseUpdate=k,c.lastBaseUpdate=P,i=c.shared.interleaved,i!==null){c=i;do m|=c.lane,c=c.next;while(c!==i)}else h===null&&(c.shared.lanes=0);fr|=m,t.lanes=m,t.memoizedState=O}}function If(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var a=t[i],c=a.callback;if(c!==null){if(a.callback=null,a=o,typeof c!="function")throw Error(n(191,c));c.call(a)}}}var Ji={},Jt=Dn(Ji),Zi=Dn(Ji),es=Dn(Ji);function dr(t){if(t===Ji)throw Error(n(174));return t}function ru(t,i){switch(ge(es,i),ge(Zi,t),ge(Jt,Ji),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ia(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=ia(i,t)}we(Jt),ge(Jt,i)}function Jr(){we(Jt),we(Zi),we(es)}function Cf(t){dr(es.current);var i=dr(Jt.current),o=ia(i,t.type);i!==o&&(ge(Zi,t),ge(Jt,o))}function iu(t){Zi.current===t&&(we(Jt),we(Zi))}var Ce=Dn(0);function To(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var su=[];function ou(){for(var t=0;t<su.length;t++)su[t]._workInProgressVersionPrimary=null;su.length=0}var ko=pe.ReactCurrentDispatcher,lu=pe.ReactCurrentBatchConfig,hr=0,Te=null,be=null,ze=null,Ro=!1,ts=!1,ns=0,d0=0;function Ze(){throw Error(n(321))}function au(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!bt(t[o],i[o]))return!1;return!0}function uu(t,i,o,a,c,h){if(hr=h,Te=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ko.current=t===null||t.memoizedState===null?m0:g0,t=o(a,c),ts){h=0;do{if(ts=!1,ns=0,25<=h)throw Error(n(301));h+=1,ze=be=null,i.updateQueue=null,ko.current=_0,t=o(a,c)}while(ts)}if(ko.current=Ao,i=be!==null&&be.next!==null,hr=0,ze=be=Te=null,Ro=!1,i)throw Error(n(300));return t}function cu(){var t=ns!==0;return ns=0,t}function Zt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?Te.memoizedState=ze=t:ze=ze.next=t,ze}function Pt(){if(be===null){var t=Te.alternate;t=t!==null?t.memoizedState:null}else t=be.next;var i=ze===null?Te.memoizedState:ze.next;if(i!==null)ze=i,be=t;else{if(t===null)throw Error(n(310));be=t,t={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},ze===null?Te.memoizedState=ze=t:ze=ze.next=t}return ze}function rs(t,i){return typeof i=="function"?i(t):i}function du(t){var i=Pt(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=be,c=a.baseQueue,h=o.pending;if(h!==null){if(c!==null){var m=c.next;c.next=h.next,h.next=m}a.baseQueue=c=h,o.pending=null}if(c!==null){h=c.next,a=a.baseState;var _=m=null,y=null,k=h;do{var P=k.lane;if((hr&P)===P)y!==null&&(y=y.next={lane:0,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),a=k.hasEagerState?k.eagerState:t(a,k.action);else{var O={lane:P,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null};y===null?(_=y=O,m=a):y=y.next=O,Te.lanes|=P,fr|=P}k=k.next}while(k!==null&&k!==h);y===null?m=a:y.next=_,bt(a,i.memoizedState)||(dt=!0),i.memoizedState=a,i.baseState=m,i.baseQueue=y,o.lastRenderedState=a}if(t=o.interleaved,t!==null){c=t;do h=c.lane,Te.lanes|=h,fr|=h,c=c.next;while(c!==t)}else c===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function hu(t){var i=Pt(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=o.dispatch,c=o.pending,h=i.memoizedState;if(c!==null){o.pending=null;var m=c=c.next;do h=t(h,m.action),m=m.next;while(m!==c);bt(h,i.memoizedState)||(dt=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,a]}function Tf(){}function kf(t,i){var o=Te,a=Pt(),c=i(),h=!bt(a.memoizedState,c);if(h&&(a.memoizedState=c,dt=!0),a=a.queue,fu(Pf.bind(null,o,a,t),[t]),a.getSnapshot!==i||h||ze!==null&&ze.memoizedState.tag&1){if(o.flags|=2048,is(9,Nf.bind(null,o,a,c,i),void 0,null),je===null)throw Error(n(349));hr&30||Rf(o,i,c)}return c}function Rf(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Te.updateQueue,i===null?(i={lastEffect:null,stores:null},Te.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Nf(t,i,o,a){i.value=o,i.getSnapshot=a,Af(i)&&Of(t)}function Pf(t,i,o){return o(function(){Af(i)&&Of(t)})}function Af(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!bt(t,o)}catch{return!0}}function Of(t){var i=dn(t,1);i!==null&&Wt(i,t,1,-1)}function xf(t){var i=Zt();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:t},i.queue=t,t=t.dispatch=p0.bind(null,Te,t),[i.memoizedState,t]}function is(t,i,o,a){return t={tag:t,create:i,destroy:o,deps:a,next:null},i=Te.updateQueue,i===null?(i={lastEffect:null,stores:null},Te.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(a=o.next,o.next=t,t.next=a,i.lastEffect=t)),t}function Df(){return Pt().memoizedState}function No(t,i,o,a){var c=Zt();Te.flags|=t,c.memoizedState=is(1|i,o,void 0,a===void 0?null:a)}function Po(t,i,o,a){var c=Pt();a=a===void 0?null:a;var h=void 0;if(be!==null){var m=be.memoizedState;if(h=m.destroy,a!==null&&au(a,m.deps)){c.memoizedState=is(i,o,h,a);return}}Te.flags|=t,c.memoizedState=is(1|i,o,h,a)}function Lf(t,i){return No(8390656,8,t,i)}function fu(t,i){return Po(2048,8,t,i)}function Mf(t,i){return Po(4,2,t,i)}function bf(t,i){return Po(4,4,t,i)}function Ff(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Uf(t,i,o){return o=o!=null?o.concat([t]):null,Po(4,4,Ff.bind(null,i,t),o)}function pu(){}function zf(t,i){var o=Pt();i=i===void 0?null:i;var a=o.memoizedState;return a!==null&&i!==null&&au(i,a[1])?a[0]:(o.memoizedState=[t,i],t)}function jf(t,i){var o=Pt();i=i===void 0?null:i;var a=o.memoizedState;return a!==null&&i!==null&&au(i,a[1])?a[0]:(t=t(),o.memoizedState=[t,i],t)}function Wf(t,i,o){return hr&21?(bt(o,i)||(o=gh(),Te.lanes|=o,fr|=o,t.baseState=!0),i):(t.baseState&&(t.baseState=!1,dt=!0),t.memoizedState=o)}function h0(t,i){var o=de;de=o!==0&&4>o?o:4,t(!0);var a=lu.transition;lu.transition={};try{t(!1),i()}finally{de=o,lu.transition=a}}function Bf(){return Pt().memoizedState}function f0(t,i,o){var a=Wn(t);if(o={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null},Vf(t))$f(i,o);else if(o=wf(t,i,o,a),o!==null){var c=it();Wt(o,t,a,c),Hf(o,i,a)}}function p0(t,i,o){var a=Wn(t),c={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null};if(Vf(t))$f(i,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var m=i.lastRenderedState,_=h(m,o);if(c.hasEagerState=!0,c.eagerState=_,bt(_,m)){var y=i.interleaved;y===null?(c.next=c,tu(i)):(c.next=y.next,y.next=c),i.interleaved=c;return}}catch{}finally{}o=wf(t,i,c,a),o!==null&&(c=it(),Wt(o,t,a,c),Hf(o,i,a))}}function Vf(t){var i=t.alternate;return t===Te||i!==null&&i===Te}function $f(t,i){ts=Ro=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function Hf(t,i,o){if(o&4194240){var a=i.lanes;a&=t.pendingLanes,o|=a,i.lanes=o,ga(t,o)}}var Ao={readContext:Nt,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useInsertionEffect:Ze,useLayoutEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useMutableSource:Ze,useSyncExternalStore:Ze,useId:Ze,unstable_isNewReconciler:!1},m0={readContext:Nt,useCallback:function(t,i){return Zt().memoizedState=[t,i===void 0?null:i],t},useContext:Nt,useEffect:Lf,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,No(4194308,4,Ff.bind(null,i,t),o)},useLayoutEffect:function(t,i){return No(4194308,4,t,i)},useInsertionEffect:function(t,i){return No(4,2,t,i)},useMemo:function(t,i){var o=Zt();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var a=Zt();return i=o!==void 0?o(i):i,a.memoizedState=a.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},a.queue=t,t=t.dispatch=f0.bind(null,Te,t),[a.memoizedState,t]},useRef:function(t){var i=Zt();return t={current:t},i.memoizedState=t},useState:xf,useDebugValue:pu,useDeferredValue:function(t){return Zt().memoizedState=t},useTransition:function(){var t=xf(!1),i=t[0];return t=h0.bind(null,t[1]),Zt().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var a=Te,c=Zt();if(Se){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),je===null)throw Error(n(349));hr&30||Rf(a,i,o)}c.memoizedState=o;var h={value:o,getSnapshot:i};return c.queue=h,Lf(Pf.bind(null,a,h,t),[t]),a.flags|=2048,is(9,Nf.bind(null,a,h,o,i),void 0,null),o},useId:function(){var t=Zt(),i=je.identifierPrefix;if(Se){var o=cn,a=un;o=(a&~(1<<32-Mt(a)-1)).toString(32)+o,i=":"+i+"R"+o,o=ns++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=d0++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},g0={readContext:Nt,useCallback:zf,useContext:Nt,useEffect:fu,useImperativeHandle:Uf,useInsertionEffect:Mf,useLayoutEffect:bf,useMemo:jf,useReducer:du,useRef:Df,useState:function(){return du(rs)},useDebugValue:pu,useDeferredValue:function(t){var i=Pt();return Wf(i,be.memoizedState,t)},useTransition:function(){var t=du(rs)[0],i=Pt().memoizedState;return[t,i]},useMutableSource:Tf,useSyncExternalStore:kf,useId:Bf,unstable_isNewReconciler:!1},_0={readContext:Nt,useCallback:zf,useContext:Nt,useEffect:fu,useImperativeHandle:Uf,useInsertionEffect:Mf,useLayoutEffect:bf,useMemo:jf,useReducer:hu,useRef:Df,useState:function(){return hu(rs)},useDebugValue:pu,useDeferredValue:function(t){var i=Pt();return be===null?i.memoizedState=t:Wf(i,be.memoizedState,t)},useTransition:function(){var t=hu(rs)[0],i=Pt().memoizedState;return[t,i]},useMutableSource:Tf,useSyncExternalStore:kf,useId:Bf,unstable_isNewReconciler:!1};function Ut(t,i){if(t&&t.defaultProps){i=U({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function mu(t,i,o,a){i=t.memoizedState,o=o(a,i),o=o==null?i:U({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Oo={isMounted:function(t){return(t=t._reactInternals)?sr(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var a=it(),c=Wn(t),h=hn(a,c);h.payload=i,o!=null&&(h.callback=o),i=Fn(t,h,c),i!==null&&(Wt(i,t,c,a),Io(i,t,c))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var a=it(),c=Wn(t),h=hn(a,c);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=Fn(t,h,c),i!==null&&(Wt(i,t,c,a),Io(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=it(),a=Wn(t),c=hn(o,a);c.tag=2,i!=null&&(c.callback=i),i=Fn(t,c,a),i!==null&&(Wt(i,t,a,o),Io(i,t,a))}};function Gf(t,i,o,a,c,h,m){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,h,m):i.prototype&&i.prototype.isPureReactComponent?!$i(o,a)||!$i(c,h):!0}function qf(t,i,o){var a=!1,c=Ln,h=i.contextType;return typeof h=="object"&&h!==null?h=Nt(h):(c=ct(i)?lr:Je.current,a=i.contextTypes,h=(a=a!=null)?Hr(t,c):Ln),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Oo,t.stateNode=i,i._reactInternals=t,a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),i}function Kf(t,i,o,a){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,a),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,a),i.state!==t&&Oo.enqueueReplaceState(i,i.state,null)}function gu(t,i,o,a){var c=t.stateNode;c.props=o,c.state=t.memoizedState,c.refs={},nu(t);var h=i.contextType;typeof h=="object"&&h!==null?c.context=Nt(h):(h=ct(i)?lr:Je.current,c.context=Hr(t,h)),c.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(mu(t,i,h,o),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&Oo.enqueueReplaceState(c,c.state,null),Co(t,o,c,a),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function Zr(t,i){try{var o="",a=i;do o+=oe(a),a=a.return;while(a);var c=o}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:c,digest:null}}function _u(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function vu(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var v0=typeof WeakMap=="function"?WeakMap:Map;function Qf(t,i,o){o=hn(-1,o),o.tag=3,o.payload={element:null};var a=i.value;return o.callback=function(){Uo||(Uo=!0,Du=a),vu(t,i)},o}function Yf(t,i,o){o=hn(-1,o),o.tag=3;var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var c=i.value;o.payload=function(){return a(c)},o.callback=function(){vu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){vu(t,i),typeof a!="function"&&(zn===null?zn=new Set([this]):zn.add(this));var m=i.stack;this.componentDidCatch(i.value,{componentStack:m!==null?m:""})}),o}function Xf(t,i,o){var a=t.pingCache;if(a===null){a=t.pingCache=new v0;var c=new Set;a.set(i,c)}else c=a.get(i),c===void 0&&(c=new Set,a.set(i,c));c.has(o)||(c.add(o),t=x0.bind(null,t,i,o),i.then(t,t))}function Jf(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Zf(t,i,o,a,c){return t.mode&1?(t.flags|=65536,t.lanes=c,t):(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=hn(-1,1),i.tag=2,Fn(o,i,1))),o.lanes|=1),t)}var y0=pe.ReactCurrentOwner,dt=!1;function rt(t,i,o,a){i.child=t===null?yf(i,null,o,a):Qr(i,t.child,o,a)}function ep(t,i,o,a,c){o=o.render;var h=i.ref;return Xr(i,c),a=uu(t,i,o,a,h,c),o=cu(),t!==null&&!dt?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,fn(t,i,c)):(Se&&o&&Ga(i),i.flags|=1,rt(t,i,a,c),i.child)}function tp(t,i,o,a,c){if(t===null){var h=o.type;return typeof h=="function"&&!ju(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,np(t,i,h,a,c)):(t=$o(o.type,null,a,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,!(t.lanes&c)){var m=h.memoizedProps;if(o=o.compare,o=o!==null?o:$i,o(m,a)&&t.ref===i.ref)return fn(t,i,c)}return i.flags|=1,t=Vn(h,a),t.ref=i.ref,t.return=i,i.child=t}function np(t,i,o,a,c){if(t!==null){var h=t.memoizedProps;if($i(h,a)&&t.ref===i.ref)if(dt=!1,i.pendingProps=a=h,(t.lanes&c)!==0)t.flags&131072&&(dt=!0);else return i.lanes=t.lanes,fn(t,i,c)}return yu(t,i,o,a,c)}function rp(t,i,o){var a=i.pendingProps,c=a.children,h=t!==null?t.memoizedState:null;if(a.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(ti,It),It|=o;else{if(!(o&1073741824))return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,ge(ti,It),It|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=h!==null?h.baseLanes:o,ge(ti,It),It|=a}else h!==null?(a=h.baseLanes|o,i.memoizedState=null):a=o,ge(ti,It),It|=a;return rt(t,i,c,o),i.child}function ip(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function yu(t,i,o,a,c){var h=ct(o)?lr:Je.current;return h=Hr(i,h),Xr(i,c),o=uu(t,i,o,a,h,c),a=cu(),t!==null&&!dt?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,fn(t,i,c)):(Se&&a&&Ga(i),i.flags|=1,rt(t,i,o,c),i.child)}function sp(t,i,o,a,c){if(ct(o)){var h=!0;mo(i)}else h=!1;if(Xr(i,c),i.stateNode===null)Do(t,i),qf(i,o,a),gu(i,o,a,c),a=!0;else if(t===null){var m=i.stateNode,_=i.memoizedProps;m.props=_;var y=m.context,k=o.contextType;typeof k=="object"&&k!==null?k=Nt(k):(k=ct(o)?lr:Je.current,k=Hr(i,k));var P=o.getDerivedStateFromProps,O=typeof P=="function"||typeof m.getSnapshotBeforeUpdate=="function";O||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(_!==a||y!==k)&&Kf(i,m,a,k),bn=!1;var R=i.memoizedState;m.state=R,Co(i,a,m,c),y=i.memoizedState,_!==a||R!==y||ut.current||bn?(typeof P=="function"&&(mu(i,o,P,a),y=i.memoizedState),(_=bn||Gf(i,o,_,a,R,y,k))?(O||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=a,i.memoizedState=y),m.props=a,m.state=y,m.context=k,a=_):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),a=!1)}else{m=i.stateNode,Ef(t,i),_=i.memoizedProps,k=i.type===i.elementType?_:Ut(i.type,_),m.props=k,O=i.pendingProps,R=m.context,y=o.contextType,typeof y=="object"&&y!==null?y=Nt(y):(y=ct(o)?lr:Je.current,y=Hr(i,y));var b=o.getDerivedStateFromProps;(P=typeof b=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(_!==O||R!==y)&&Kf(i,m,a,y),bn=!1,R=i.memoizedState,m.state=R,Co(i,a,m,c);var z=i.memoizedState;_!==O||R!==z||ut.current||bn?(typeof b=="function"&&(mu(i,o,b,a),z=i.memoizedState),(k=bn||Gf(i,o,k,a,R,z,y)||!1)?(P||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(a,z,y),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(a,z,y)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||_===t.memoizedProps&&R===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&R===t.memoizedState||(i.flags|=1024),i.memoizedProps=a,i.memoizedState=z),m.props=a,m.state=z,m.context=y,a=k):(typeof m.componentDidUpdate!="function"||_===t.memoizedProps&&R===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&R===t.memoizedState||(i.flags|=1024),a=!1)}return wu(t,i,o,a,h,c)}function wu(t,i,o,a,c,h){ip(t,i);var m=(i.flags&128)!==0;if(!a&&!m)return c&&cf(i,o,!1),fn(t,i,h);a=i.stateNode,y0.current=i;var _=m&&typeof o.getDerivedStateFromError!="function"?null:a.render();return i.flags|=1,t!==null&&m?(i.child=Qr(i,t.child,null,h),i.child=Qr(i,null,_,h)):rt(t,i,_,h),i.memoizedState=a.state,c&&cf(i,o,!0),i.child}function op(t){var i=t.stateNode;i.pendingContext?af(t,i.pendingContext,i.pendingContext!==i.context):i.context&&af(t,i.context,!1),ru(t,i.containerInfo)}function lp(t,i,o,a,c){return Kr(),Ya(c),i.flags|=256,rt(t,i,o,a),i.child}var Eu={dehydrated:null,treeContext:null,retryLane:0};function Su(t){return{baseLanes:t,cachePool:null,transitions:null}}function ap(t,i,o){var a=i.pendingProps,c=Ce.current,h=!1,m=(i.flags&128)!==0,_;if((_=m)||(_=t!==null&&t.memoizedState===null?!1:(c&2)!==0),_?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),ge(Ce,c&1),t===null)return Qa(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(i.mode&1?t.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(m=a.children,t=a.fallback,h?(a=i.mode,h=i.child,m={mode:"hidden",children:m},!(a&1)&&h!==null?(h.childLanes=0,h.pendingProps=m):h=Ho(m,a,0,null),t=_r(t,a,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Su(o),i.memoizedState=Eu,t):Iu(i,m));if(c=t.memoizedState,c!==null&&(_=c.dehydrated,_!==null))return w0(t,i,m,a,_,c,o);if(h){h=a.fallback,m=i.mode,c=t.child,_=c.sibling;var y={mode:"hidden",children:a.children};return!(m&1)&&i.child!==c?(a=i.child,a.childLanes=0,a.pendingProps=y,i.deletions=null):(a=Vn(c,y),a.subtreeFlags=c.subtreeFlags&14680064),_!==null?h=Vn(_,h):(h=_r(h,m,o,null),h.flags|=2),h.return=i,a.return=i,a.sibling=h,i.child=a,a=h,h=i.child,m=t.child.memoizedState,m=m===null?Su(o):{baseLanes:m.baseLanes|o,cachePool:null,transitions:m.transitions},h.memoizedState=m,h.childLanes=t.childLanes&~o,i.memoizedState=Eu,a}return h=t.child,t=h.sibling,a=Vn(h,{mode:"visible",children:a.children}),!(i.mode&1)&&(a.lanes=o),a.return=i,a.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=a,i.memoizedState=null,a}function Iu(t,i){return i=Ho({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function xo(t,i,o,a){return a!==null&&Ya(a),Qr(i,t.child,null,o),t=Iu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function w0(t,i,o,a,c,h,m){if(o)return i.flags&256?(i.flags&=-257,a=_u(Error(n(422))),xo(t,i,m,a)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=a.fallback,c=i.mode,a=Ho({mode:"visible",children:a.children},c,0,null),h=_r(h,c,m,null),h.flags|=2,a.return=i,h.return=i,a.sibling=h,i.child=a,i.mode&1&&Qr(i,t.child,null,m),i.child.memoizedState=Su(m),i.memoizedState=Eu,h);if(!(i.mode&1))return xo(t,i,m,null);if(c.data==="$!"){if(a=c.nextSibling&&c.nextSibling.dataset,a)var _=a.dgst;return a=_,h=Error(n(419)),a=_u(h,a,void 0),xo(t,i,m,a)}if(_=(m&t.childLanes)!==0,dt||_){if(a=je,a!==null){switch(m&-m){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=c&(a.suspendedLanes|m)?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,dn(t,c),Wt(a,t,c,-1))}return zu(),a=_u(Error(n(421))),xo(t,i,m,a)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=D0.bind(null,t),c._reactRetry=i,null):(t=h.treeContext,St=xn(c.nextSibling),Et=i,Se=!0,Ft=null,t!==null&&(kt[Rt++]=un,kt[Rt++]=cn,kt[Rt++]=ar,un=t.id,cn=t.overflow,ar=i),i=Iu(i,a.children),i.flags|=4096,i)}function up(t,i,o){t.lanes|=i;var a=t.alternate;a!==null&&(a.lanes|=i),eu(t.return,i,o)}function Cu(t,i,o,a,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:a,tail:o,tailMode:c}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=a,h.tail=o,h.tailMode=c)}function cp(t,i,o){var a=i.pendingProps,c=a.revealOrder,h=a.tail;if(rt(t,i,a.children,o),a=Ce.current,a&2)a=a&1|2,i.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&up(t,o,i);else if(t.tag===19)up(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}if(ge(Ce,a),!(i.mode&1))i.memoizedState=null;else switch(c){case"forwards":for(o=i.child,c=null;o!==null;)t=o.alternate,t!==null&&To(t)===null&&(c=o),o=o.sibling;o=c,o===null?(c=i.child,i.child=null):(c=o.sibling,o.sibling=null),Cu(i,!1,c,o,h);break;case"backwards":for(o=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&To(t)===null){i.child=c;break}t=c.sibling,c.sibling=o,o=c,c=t}Cu(i,!0,o,null,h);break;case"together":Cu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Do(t,i){!(i.mode&1)&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function fn(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),fr|=i.lanes,!(o&i.childLanes))return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=Vn(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=Vn(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function E0(t,i,o){switch(i.tag){case 3:op(i),Kr();break;case 5:Cf(i);break;case 1:ct(i.type)&&mo(i);break;case 4:ru(i,i.stateNode.containerInfo);break;case 10:var a=i.type._context,c=i.memoizedProps.value;ge(Eo,a._currentValue),a._currentValue=c;break;case 13:if(a=i.memoizedState,a!==null)return a.dehydrated!==null?(ge(Ce,Ce.current&1),i.flags|=128,null):o&i.child.childLanes?ap(t,i,o):(ge(Ce,Ce.current&1),t=fn(t,i,o),t!==null?t.sibling:null);ge(Ce,Ce.current&1);break;case 19:if(a=(o&i.childLanes)!==0,t.flags&128){if(a)return cp(t,i,o);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),ge(Ce,Ce.current),a)break;return null;case 22:case 23:return i.lanes=0,rp(t,i,o)}return fn(t,i,o)}var dp,Tu,hp,fp;dp=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Tu=function(){},hp=function(t,i,o,a){var c=t.memoizedProps;if(c!==a){t=i.stateNode,dr(Jt.current);var h=null;switch(o){case"input":c=ea(t,c),a=ea(t,a),h=[];break;case"select":c=U({},c,{value:void 0}),a=U({},a,{value:void 0}),h=[];break;case"textarea":c=ra(t,c),a=ra(t,a),h=[];break;default:typeof c.onClick!="function"&&typeof a.onClick=="function"&&(t.onclick=ho)}sa(o,a);var m;o=null;for(k in c)if(!a.hasOwnProperty(k)&&c.hasOwnProperty(k)&&c[k]!=null)if(k==="style"){var _=c[k];for(m in _)_.hasOwnProperty(m)&&(o||(o={}),o[m]="")}else k!=="dangerouslySetInnerHTML"&&k!=="children"&&k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&k!=="autoFocus"&&(l.hasOwnProperty(k)?h||(h=[]):(h=h||[]).push(k,null));for(k in a){var y=a[k];if(_=c!=null?c[k]:void 0,a.hasOwnProperty(k)&&y!==_&&(y!=null||_!=null))if(k==="style")if(_){for(m in _)!_.hasOwnProperty(m)||y&&y.hasOwnProperty(m)||(o||(o={}),o[m]="");for(m in y)y.hasOwnProperty(m)&&_[m]!==y[m]&&(o||(o={}),o[m]=y[m])}else o||(h||(h=[]),h.push(k,o)),o=y;else k==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,_=_?_.__html:void 0,y!=null&&_!==y&&(h=h||[]).push(k,y)):k==="children"?typeof y!="string"&&typeof y!="number"||(h=h||[]).push(k,""+y):k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&(l.hasOwnProperty(k)?(y!=null&&k==="onScroll"&&ye("scroll",t),h||_===y||(h=[])):(h=h||[]).push(k,y))}o&&(h=h||[]).push("style",o);var k=h;(i.updateQueue=k)&&(i.flags|=4)}},fp=function(t,i,o,a){o!==a&&(i.flags|=4)};function ss(t,i){if(!Se)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function et(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,a=0;if(i)for(var c=t.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags&14680064,a|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags,a|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=a,t.childLanes=o,i}function S0(t,i,o){var a=i.pendingProps;switch(qa(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(i),null;case 1:return ct(i.type)&&po(),et(i),null;case 3:return a=i.stateNode,Jr(),we(ut),we(Je),ou(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(yo(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,Ft!==null&&(bu(Ft),Ft=null))),Tu(t,i),et(i),null;case 5:iu(i);var c=dr(es.current);if(o=i.type,t!==null&&i.stateNode!=null)hp(t,i,o,a,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!a){if(i.stateNode===null)throw Error(n(166));return et(i),null}if(t=dr(Jt.current),yo(i)){a=i.stateNode,o=i.type;var h=i.memoizedProps;switch(a[Xt]=i,a[Qi]=h,t=(i.mode&1)!==0,o){case"dialog":ye("cancel",a),ye("close",a);break;case"iframe":case"object":case"embed":ye("load",a);break;case"video":case"audio":for(c=0;c<Gi.length;c++)ye(Gi[c],a);break;case"source":ye("error",a);break;case"img":case"image":case"link":ye("error",a),ye("load",a);break;case"details":ye("toggle",a);break;case"input":Gd(a,h),ye("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!h.multiple},ye("invalid",a);break;case"textarea":Qd(a,h),ye("invalid",a)}sa(o,h),c=null;for(var m in h)if(h.hasOwnProperty(m)){var _=h[m];m==="children"?typeof _=="string"?a.textContent!==_&&(h.suppressHydrationWarning!==!0&&co(a.textContent,_,t),c=["children",_]):typeof _=="number"&&a.textContent!==""+_&&(h.suppressHydrationWarning!==!0&&co(a.textContent,_,t),c=["children",""+_]):l.hasOwnProperty(m)&&_!=null&&m==="onScroll"&&ye("scroll",a)}switch(o){case"input":Ws(a),Kd(a,h,!0);break;case"textarea":Ws(a),Xd(a);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(a.onclick=ho)}a=c,i.updateQueue=a,a!==null&&(i.flags|=4)}else{m=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Jd(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=m.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof a.is=="string"?t=m.createElement(o,{is:a.is}):(t=m.createElement(o),o==="select"&&(m=t,a.multiple?m.multiple=!0:a.size&&(m.size=a.size))):t=m.createElementNS(t,o),t[Xt]=i,t[Qi]=a,dp(t,i,!1,!1),i.stateNode=t;e:{switch(m=oa(o,a),o){case"dialog":ye("cancel",t),ye("close",t),c=a;break;case"iframe":case"object":case"embed":ye("load",t),c=a;break;case"video":case"audio":for(c=0;c<Gi.length;c++)ye(Gi[c],t);c=a;break;case"source":ye("error",t),c=a;break;case"img":case"image":case"link":ye("error",t),ye("load",t),c=a;break;case"details":ye("toggle",t),c=a;break;case"input":Gd(t,a),c=ea(t,a),ye("invalid",t);break;case"option":c=a;break;case"select":t._wrapperState={wasMultiple:!!a.multiple},c=U({},a,{value:void 0}),ye("invalid",t);break;case"textarea":Qd(t,a),c=ra(t,a),ye("invalid",t);break;default:c=a}sa(o,c),_=c;for(h in _)if(_.hasOwnProperty(h)){var y=_[h];h==="style"?th(t,y):h==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,y!=null&&Zd(t,y)):h==="children"?typeof y=="string"?(o!=="textarea"||y!=="")&&Ri(t,y):typeof y=="number"&&Ri(t,""+y):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(l.hasOwnProperty(h)?y!=null&&h==="onScroll"&&ye("scroll",t):y!=null&&xe(t,h,y,m))}switch(o){case"input":Ws(t),Kd(t,a,!1);break;case"textarea":Ws(t),Xd(t);break;case"option":a.value!=null&&t.setAttribute("value",""+ce(a.value));break;case"select":t.multiple=!!a.multiple,h=a.value,h!=null?Dr(t,!!a.multiple,h,!1):a.defaultValue!=null&&Dr(t,!!a.multiple,a.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=ho)}switch(o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return et(i),null;case 6:if(t&&i.stateNode!=null)fp(t,i,t.memoizedProps,a);else{if(typeof a!="string"&&i.stateNode===null)throw Error(n(166));if(o=dr(es.current),dr(Jt.current),yo(i)){if(a=i.stateNode,o=i.memoizedProps,a[Xt]=i,(h=a.nodeValue!==o)&&(t=Et,t!==null))switch(t.tag){case 3:co(a.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&co(a.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else a=(o.nodeType===9?o:o.ownerDocument).createTextNode(a),a[Xt]=i,i.stateNode=a}return et(i),null;case 13:if(we(Ce),a=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Se&&St!==null&&i.mode&1&&!(i.flags&128))gf(),Kr(),i.flags|=98560,h=!1;else if(h=yo(i),a!==null&&a.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[Xt]=i}else Kr(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;et(i),h=!1}else Ft!==null&&(bu(Ft),Ft=null),h=!0;if(!h)return i.flags&65536?i:null}return i.flags&128?(i.lanes=o,i):(a=a!==null,a!==(t!==null&&t.memoizedState!==null)&&a&&(i.child.flags|=8192,i.mode&1&&(t===null||Ce.current&1?Fe===0&&(Fe=3):zu())),i.updateQueue!==null&&(i.flags|=4),et(i),null);case 4:return Jr(),Tu(t,i),t===null&&qi(i.stateNode.containerInfo),et(i),null;case 10:return Za(i.type._context),et(i),null;case 17:return ct(i.type)&&po(),et(i),null;case 19:if(we(Ce),h=i.memoizedState,h===null)return et(i),null;if(a=(i.flags&128)!==0,m=h.rendering,m===null)if(a)ss(h,!1);else{if(Fe!==0||t!==null&&t.flags&128)for(t=i.child;t!==null;){if(m=To(t),m!==null){for(i.flags|=128,ss(h,!1),a=m.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),i.subtreeFlags=0,a=o,o=i.child;o!==null;)h=o,t=a,h.flags&=14680066,m=h.alternate,m===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=m.childLanes,h.lanes=m.lanes,h.child=m.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=m.memoizedProps,h.memoizedState=m.memoizedState,h.updateQueue=m.updateQueue,h.type=m.type,t=m.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return ge(Ce,Ce.current&1|2),i.child}t=t.sibling}h.tail!==null&&De()>ni&&(i.flags|=128,a=!0,ss(h,!1),i.lanes=4194304)}else{if(!a)if(t=To(m),t!==null){if(i.flags|=128,a=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),ss(h,!0),h.tail===null&&h.tailMode==="hidden"&&!m.alternate&&!Se)return et(i),null}else 2*De()-h.renderingStartTime>ni&&o!==1073741824&&(i.flags|=128,a=!0,ss(h,!1),i.lanes=4194304);h.isBackwards?(m.sibling=i.child,i.child=m):(o=h.last,o!==null?o.sibling=m:i.child=m,h.last=m)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=De(),i.sibling=null,o=Ce.current,ge(Ce,a?o&1|2:o&1),i):(et(i),null);case 22:case 23:return Uu(),a=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==a&&(i.flags|=8192),a&&i.mode&1?It&1073741824&&(et(i),i.subtreeFlags&6&&(i.flags|=8192)):et(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function I0(t,i){switch(qa(i),i.tag){case 1:return ct(i.type)&&po(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Jr(),we(ut),we(Je),ou(),t=i.flags,t&65536&&!(t&128)?(i.flags=t&-65537|128,i):null;case 5:return iu(i),null;case 13:if(we(Ce),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Kr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return we(Ce),null;case 4:return Jr(),null;case 10:return Za(i.type._context),null;case 22:case 23:return Uu(),null;case 24:return null;default:return null}}var Lo=!1,tt=!1,C0=typeof WeakSet=="function"?WeakSet:Set,F=null;function ei(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(a){Re(t,i,a)}else o.current=null}function ku(t,i,o){try{o()}catch(a){Re(t,i,a)}}var pp=!1;function T0(t,i){if(Ua=Zs,t=Hh(),Aa(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var a=o.getSelection&&o.getSelection();if(a&&a.rangeCount!==0){o=a.anchorNode;var c=a.anchorOffset,h=a.focusNode;a=a.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var m=0,_=-1,y=-1,k=0,P=0,O=t,R=null;t:for(;;){for(var b;O!==o||c!==0&&O.nodeType!==3||(_=m+c),O!==h||a!==0&&O.nodeType!==3||(y=m+a),O.nodeType===3&&(m+=O.nodeValue.length),(b=O.firstChild)!==null;)R=O,O=b;for(;;){if(O===t)break t;if(R===o&&++k===c&&(_=m),R===h&&++P===a&&(y=m),(b=O.nextSibling)!==null)break;O=R,R=O.parentNode}O=b}o=_===-1||y===-1?null:{start:_,end:y}}else o=null}o=o||{start:0,end:0}}else o=null;for(za={focusedElem:t,selectionRange:o},Zs=!1,F=i;F!==null;)if(i=F,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,F=t;else for(;F!==null;){i=F;try{var z=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(z!==null){var j=z.memoizedProps,Le=z.memoizedState,C=i.stateNode,E=C.getSnapshotBeforeUpdate(i.elementType===i.type?j:Ut(i.type,j),Le);C.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var T=i.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(x){Re(i,i.return,x)}if(t=i.sibling,t!==null){t.return=i.return,F=t;break}F=i.return}return z=pp,pp=!1,z}function os(t,i,o){var a=i.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var c=a=a.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&ku(i,o,h)}c=c.next}while(c!==a)}}function Mo(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var a=o.create;o.destroy=a()}o=o.next}while(o!==i)}}function Ru(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function mp(t){var i=t.alternate;i!==null&&(t.alternate=null,mp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Xt],delete i[Qi],delete i[Va],delete i[l0],delete i[a0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function gp(t){return t.tag===5||t.tag===3||t.tag===4}function _p(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||gp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Nu(t,i,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=ho));else if(a!==4&&(t=t.child,t!==null))for(Nu(t,i,o),t=t.sibling;t!==null;)Nu(t,i,o),t=t.sibling}function Pu(t,i,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(a!==4&&(t=t.child,t!==null))for(Pu(t,i,o),t=t.sibling;t!==null;)Pu(t,i,o),t=t.sibling}var qe=null,zt=!1;function Un(t,i,o){for(o=o.child;o!==null;)vp(t,i,o),o=o.sibling}function vp(t,i,o){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(qs,o)}catch{}switch(o.tag){case 5:tt||ei(o,i);case 6:var a=qe,c=zt;qe=null,Un(t,i,o),qe=a,zt=c,qe!==null&&(zt?(t=qe,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):qe.removeChild(o.stateNode));break;case 18:qe!==null&&(zt?(t=qe,o=o.stateNode,t.nodeType===8?Ba(t.parentNode,o):t.nodeType===1&&Ba(t,o),Ui(t)):Ba(qe,o.stateNode));break;case 4:a=qe,c=zt,qe=o.stateNode.containerInfo,zt=!0,Un(t,i,o),qe=a,zt=c;break;case 0:case 11:case 14:case 15:if(!tt&&(a=o.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){c=a=a.next;do{var h=c,m=h.destroy;h=h.tag,m!==void 0&&(h&2||h&4)&&ku(o,i,m),c=c.next}while(c!==a)}Un(t,i,o);break;case 1:if(!tt&&(ei(o,i),a=o.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=o.memoizedProps,a.state=o.memoizedState,a.componentWillUnmount()}catch(_){Re(o,i,_)}Un(t,i,o);break;case 21:Un(t,i,o);break;case 22:o.mode&1?(tt=(a=tt)||o.memoizedState!==null,Un(t,i,o),tt=a):Un(t,i,o);break;default:Un(t,i,o)}}function yp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new C0),i.forEach(function(a){var c=L0.bind(null,t,a);o.has(a)||(o.add(a),a.then(c,c))})}}function jt(t,i){var o=i.deletions;if(o!==null)for(var a=0;a<o.length;a++){var c=o[a];try{var h=t,m=i,_=m;e:for(;_!==null;){switch(_.tag){case 5:qe=_.stateNode,zt=!1;break e;case 3:qe=_.stateNode.containerInfo,zt=!0;break e;case 4:qe=_.stateNode.containerInfo,zt=!0;break e}_=_.return}if(qe===null)throw Error(n(160));vp(h,m,c),qe=null,zt=!1;var y=c.alternate;y!==null&&(y.return=null),c.return=null}catch(k){Re(c,i,k)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)wp(i,t),i=i.sibling}function wp(t,i){var o=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(jt(i,t),en(t),a&4){try{os(3,t,t.return),Mo(3,t)}catch(j){Re(t,t.return,j)}try{os(5,t,t.return)}catch(j){Re(t,t.return,j)}}break;case 1:jt(i,t),en(t),a&512&&o!==null&&ei(o,o.return);break;case 5:if(jt(i,t),en(t),a&512&&o!==null&&ei(o,o.return),t.flags&32){var c=t.stateNode;try{Ri(c,"")}catch(j){Re(t,t.return,j)}}if(a&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,m=o!==null?o.memoizedProps:h,_=t.type,y=t.updateQueue;if(t.updateQueue=null,y!==null)try{_==="input"&&h.type==="radio"&&h.name!=null&&qd(c,h),oa(_,m);var k=oa(_,h);for(m=0;m<y.length;m+=2){var P=y[m],O=y[m+1];P==="style"?th(c,O):P==="dangerouslySetInnerHTML"?Zd(c,O):P==="children"?Ri(c,O):xe(c,P,O,k)}switch(_){case"input":ta(c,h);break;case"textarea":Yd(c,h);break;case"select":var R=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var b=h.value;b!=null?Dr(c,!!h.multiple,b,!1):R!==!!h.multiple&&(h.defaultValue!=null?Dr(c,!!h.multiple,h.defaultValue,!0):Dr(c,!!h.multiple,h.multiple?[]:"",!1))}c[Qi]=h}catch(j){Re(t,t.return,j)}}break;case 6:if(jt(i,t),en(t),a&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(j){Re(t,t.return,j)}}break;case 3:if(jt(i,t),en(t),a&4&&o!==null&&o.memoizedState.isDehydrated)try{Ui(i.containerInfo)}catch(j){Re(t,t.return,j)}break;case 4:jt(i,t),en(t);break;case 13:jt(i,t),en(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(xu=De())),a&4&&yp(t);break;case 22:if(P=o!==null&&o.memoizedState!==null,t.mode&1?(tt=(k=tt)||P,jt(i,t),tt=k):jt(i,t),en(t),a&8192){if(k=t.memoizedState!==null,(t.stateNode.isHidden=k)&&!P&&t.mode&1)for(F=t,P=t.child;P!==null;){for(O=F=P;F!==null;){switch(R=F,b=R.child,R.tag){case 0:case 11:case 14:case 15:os(4,R,R.return);break;case 1:ei(R,R.return);var z=R.stateNode;if(typeof z.componentWillUnmount=="function"){a=R,o=R.return;try{i=a,z.props=i.memoizedProps,z.state=i.memoizedState,z.componentWillUnmount()}catch(j){Re(a,o,j)}}break;case 5:ei(R,R.return);break;case 22:if(R.memoizedState!==null){Ip(O);continue}}b!==null?(b.return=R,F=b):Ip(O)}P=P.sibling}e:for(P=null,O=t;;){if(O.tag===5){if(P===null){P=O;try{c=O.stateNode,k?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(_=O.stateNode,y=O.memoizedProps.style,m=y!=null&&y.hasOwnProperty("display")?y.display:null,_.style.display=eh("display",m))}catch(j){Re(t,t.return,j)}}}else if(O.tag===6){if(P===null)try{O.stateNode.nodeValue=k?"":O.memoizedProps}catch(j){Re(t,t.return,j)}}else if((O.tag!==22&&O.tag!==23||O.memoizedState===null||O===t)&&O.child!==null){O.child.return=O,O=O.child;continue}if(O===t)break e;for(;O.sibling===null;){if(O.return===null||O.return===t)break e;P===O&&(P=null),O=O.return}P===O&&(P=null),O.sibling.return=O.return,O=O.sibling}}break;case 19:jt(i,t),en(t),a&4&&yp(t);break;case 21:break;default:jt(i,t),en(t)}}function en(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(gp(o)){var a=o;break e}o=o.return}throw Error(n(160))}switch(a.tag){case 5:var c=a.stateNode;a.flags&32&&(Ri(c,""),a.flags&=-33);var h=_p(t);Pu(t,h,c);break;case 3:case 4:var m=a.stateNode.containerInfo,_=_p(t);Nu(t,_,m);break;default:throw Error(n(161))}}catch(y){Re(t,t.return,y)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function k0(t,i,o){F=t,Ep(t)}function Ep(t,i,o){for(var a=(t.mode&1)!==0;F!==null;){var c=F,h=c.child;if(c.tag===22&&a){var m=c.memoizedState!==null||Lo;if(!m){var _=c.alternate,y=_!==null&&_.memoizedState!==null||tt;_=Lo;var k=tt;if(Lo=m,(tt=y)&&!k)for(F=c;F!==null;)m=F,y=m.child,m.tag===22&&m.memoizedState!==null?Cp(c):y!==null?(y.return=m,F=y):Cp(c);for(;h!==null;)F=h,Ep(h),h=h.sibling;F=c,Lo=_,tt=k}Sp(t)}else c.subtreeFlags&8772&&h!==null?(h.return=c,F=h):Sp(t)}}function Sp(t){for(;F!==null;){var i=F;if(i.flags&8772){var o=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:tt||Mo(5,i);break;case 1:var a=i.stateNode;if(i.flags&4&&!tt)if(o===null)a.componentDidMount();else{var c=i.elementType===i.type?o.memoizedProps:Ut(i.type,o.memoizedProps);a.componentDidUpdate(c,o.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&If(i,h,a);break;case 3:var m=i.updateQueue;if(m!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}If(i,m,o)}break;case 5:var _=i.stateNode;if(o===null&&i.flags&4){o=_;var y=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":y.autoFocus&&o.focus();break;case"img":y.src&&(o.src=y.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var k=i.alternate;if(k!==null){var P=k.memoizedState;if(P!==null){var O=P.dehydrated;O!==null&&Ui(O)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}tt||i.flags&512&&Ru(i)}catch(R){Re(i,i.return,R)}}if(i===t){F=null;break}if(o=i.sibling,o!==null){o.return=i.return,F=o;break}F=i.return}}function Ip(t){for(;F!==null;){var i=F;if(i===t){F=null;break}var o=i.sibling;if(o!==null){o.return=i.return,F=o;break}F=i.return}}function Cp(t){for(;F!==null;){var i=F;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Mo(4,i)}catch(y){Re(i,o,y)}break;case 1:var a=i.stateNode;if(typeof a.componentDidMount=="function"){var c=i.return;try{a.componentDidMount()}catch(y){Re(i,c,y)}}var h=i.return;try{Ru(i)}catch(y){Re(i,h,y)}break;case 5:var m=i.return;try{Ru(i)}catch(y){Re(i,m,y)}}}catch(y){Re(i,i.return,y)}if(i===t){F=null;break}var _=i.sibling;if(_!==null){_.return=i.return,F=_;break}F=i.return}}var R0=Math.ceil,bo=pe.ReactCurrentDispatcher,Au=pe.ReactCurrentOwner,At=pe.ReactCurrentBatchConfig,se=0,je=null,Me=null,Ke=0,It=0,ti=Dn(0),Fe=0,ls=null,fr=0,Fo=0,Ou=0,as=null,ht=null,xu=0,ni=1/0,pn=null,Uo=!1,Du=null,zn=null,zo=!1,jn=null,jo=0,us=0,Lu=null,Wo=-1,Bo=0;function it(){return se&6?De():Wo!==-1?Wo:Wo=De()}function Wn(t){return t.mode&1?se&2&&Ke!==0?Ke&-Ke:c0.transition!==null?(Bo===0&&(Bo=gh()),Bo):(t=de,t!==0||(t=window.event,t=t===void 0?16:Th(t.type)),t):1}function Wt(t,i,o,a){if(50<us)throw us=0,Lu=null,Error(n(185));Di(t,o,a),(!(se&2)||t!==je)&&(t===je&&(!(se&2)&&(Fo|=o),Fe===4&&Bn(t,Ke)),ft(t,a),o===1&&se===0&&!(i.mode&1)&&(ni=De()+500,go&&Mn()))}function ft(t,i){var o=t.callbackNode;cy(t,i);var a=Ys(t,t===je?Ke:0);if(a===0)o!==null&&fh(o),t.callbackNode=null,t.callbackPriority=0;else if(i=a&-a,t.callbackPriority!==i){if(o!=null&&fh(o),i===1)t.tag===0?u0(kp.bind(null,t)):df(kp.bind(null,t)),s0(function(){!(se&6)&&Mn()}),o=null;else{switch(_h(a)){case 1:o=fa;break;case 4:o=ph;break;case 16:o=Gs;break;case 536870912:o=mh;break;default:o=Gs}o=Lp(o,Tp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function Tp(t,i){if(Wo=-1,Bo=0,se&6)throw Error(n(327));var o=t.callbackNode;if(ri()&&t.callbackNode!==o)return null;var a=Ys(t,t===je?Ke:0);if(a===0)return null;if(a&30||a&t.expiredLanes||i)i=Vo(t,a);else{i=a;var c=se;se|=2;var h=Np();(je!==t||Ke!==i)&&(pn=null,ni=De()+500,mr(t,i));do try{A0();break}catch(_){Rp(t,_)}while(!0);Ja(),bo.current=h,se=c,Me!==null?i=0:(je=null,Ke=0,i=Fe)}if(i!==0){if(i===2&&(c=pa(t),c!==0&&(a=c,i=Mu(t,c))),i===1)throw o=ls,mr(t,0),Bn(t,a),ft(t,De()),o;if(i===6)Bn(t,a);else{if(c=t.current.alternate,!(a&30)&&!N0(c)&&(i=Vo(t,a),i===2&&(h=pa(t),h!==0&&(a=h,i=Mu(t,h))),i===1))throw o=ls,mr(t,0),Bn(t,a),ft(t,De()),o;switch(t.finishedWork=c,t.finishedLanes=a,i){case 0:case 1:throw Error(n(345));case 2:gr(t,ht,pn);break;case 3:if(Bn(t,a),(a&130023424)===a&&(i=xu+500-De(),10<i)){if(Ys(t,0)!==0)break;if(c=t.suspendedLanes,(c&a)!==a){it(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=Wa(gr.bind(null,t,ht,pn),i);break}gr(t,ht,pn);break;case 4:if(Bn(t,a),(a&4194240)===a)break;for(i=t.eventTimes,c=-1;0<a;){var m=31-Mt(a);h=1<<m,m=i[m],m>c&&(c=m),a&=~h}if(a=c,a=De()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*R0(a/1960))-a,10<a){t.timeoutHandle=Wa(gr.bind(null,t,ht,pn),a);break}gr(t,ht,pn);break;case 5:gr(t,ht,pn);break;default:throw Error(n(329))}}}return ft(t,De()),t.callbackNode===o?Tp.bind(null,t):null}function Mu(t,i){var o=as;return t.current.memoizedState.isDehydrated&&(mr(t,i).flags|=256),t=Vo(t,i),t!==2&&(i=ht,ht=o,i!==null&&bu(i)),t}function bu(t){ht===null?ht=t:ht.push.apply(ht,t)}function N0(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var a=0;a<o.length;a++){var c=o[a],h=c.getSnapshot;c=c.value;try{if(!bt(h(),c))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Bn(t,i){for(i&=~Ou,i&=~Fo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-Mt(i),a=1<<o;t[o]=-1,i&=~a}}function kp(t){if(se&6)throw Error(n(327));ri();var i=Ys(t,0);if(!(i&1))return ft(t,De()),null;var o=Vo(t,i);if(t.tag!==0&&o===2){var a=pa(t);a!==0&&(i=a,o=Mu(t,a))}if(o===1)throw o=ls,mr(t,0),Bn(t,i),ft(t,De()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,gr(t,ht,pn),ft(t,De()),null}function Fu(t,i){var o=se;se|=1;try{return t(i)}finally{se=o,se===0&&(ni=De()+500,go&&Mn())}}function pr(t){jn!==null&&jn.tag===0&&!(se&6)&&ri();var i=se;se|=1;var o=At.transition,a=de;try{if(At.transition=null,de=1,t)return t()}finally{de=a,At.transition=o,se=i,!(se&6)&&Mn()}}function Uu(){It=ti.current,we(ti)}function mr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,i0(o)),Me!==null)for(o=Me.return;o!==null;){var a=o;switch(qa(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&po();break;case 3:Jr(),we(ut),we(Je),ou();break;case 5:iu(a);break;case 4:Jr();break;case 13:we(Ce);break;case 19:we(Ce);break;case 10:Za(a.type._context);break;case 22:case 23:Uu()}o=o.return}if(je=t,Me=t=Vn(t.current,null),Ke=It=i,Fe=0,ls=null,Ou=Fo=fr=0,ht=as=null,cr!==null){for(i=0;i<cr.length;i++)if(o=cr[i],a=o.interleaved,a!==null){o.interleaved=null;var c=a.next,h=o.pending;if(h!==null){var m=h.next;h.next=c,a.next=m}o.pending=a}cr=null}return t}function Rp(t,i){do{var o=Me;try{if(Ja(),ko.current=Ao,Ro){for(var a=Te.memoizedState;a!==null;){var c=a.queue;c!==null&&(c.pending=null),a=a.next}Ro=!1}if(hr=0,ze=be=Te=null,ts=!1,ns=0,Au.current=null,o===null||o.return===null){Fe=1,ls=i,Me=null;break}e:{var h=t,m=o.return,_=o,y=i;if(i=Ke,_.flags|=32768,y!==null&&typeof y=="object"&&typeof y.then=="function"){var k=y,P=_,O=P.tag;if(!(P.mode&1)&&(O===0||O===11||O===15)){var R=P.alternate;R?(P.updateQueue=R.updateQueue,P.memoizedState=R.memoizedState,P.lanes=R.lanes):(P.updateQueue=null,P.memoizedState=null)}var b=Jf(m);if(b!==null){b.flags&=-257,Zf(b,m,_,h,i),b.mode&1&&Xf(h,k,i),i=b,y=k;var z=i.updateQueue;if(z===null){var j=new Set;j.add(y),i.updateQueue=j}else z.add(y);break e}else{if(!(i&1)){Xf(h,k,i),zu();break e}y=Error(n(426))}}else if(Se&&_.mode&1){var Le=Jf(m);if(Le!==null){!(Le.flags&65536)&&(Le.flags|=256),Zf(Le,m,_,h,i),Ya(Zr(y,_));break e}}h=y=Zr(y,_),Fe!==4&&(Fe=2),as===null?as=[h]:as.push(h),h=m;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var C=Qf(h,y,i);Sf(h,C);break e;case 1:_=y;var E=h.type,T=h.stateNode;if(!(h.flags&128)&&(typeof E.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(zn===null||!zn.has(T)))){h.flags|=65536,i&=-i,h.lanes|=i;var x=Yf(h,_,i);Sf(h,x);break e}}h=h.return}while(h!==null)}Ap(o)}catch(W){i=W,Me===o&&o!==null&&(Me=o=o.return);continue}break}while(!0)}function Np(){var t=bo.current;return bo.current=Ao,t===null?Ao:t}function zu(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),je===null||!(fr&268435455)&&!(Fo&268435455)||Bn(je,Ke)}function Vo(t,i){var o=se;se|=2;var a=Np();(je!==t||Ke!==i)&&(pn=null,mr(t,i));do try{P0();break}catch(c){Rp(t,c)}while(!0);if(Ja(),se=o,bo.current=a,Me!==null)throw Error(n(261));return je=null,Ke=0,Fe}function P0(){for(;Me!==null;)Pp(Me)}function A0(){for(;Me!==null&&!ty();)Pp(Me)}function Pp(t){var i=Dp(t.alternate,t,It);t.memoizedProps=t.pendingProps,i===null?Ap(t):Me=i,Au.current=null}function Ap(t){var i=t;do{var o=i.alternate;if(t=i.return,i.flags&32768){if(o=I0(o,i),o!==null){o.flags&=32767,Me=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Fe=6,Me=null;return}}else if(o=S0(o,i,It),o!==null){Me=o;return}if(i=i.sibling,i!==null){Me=i;return}Me=i=t}while(i!==null);Fe===0&&(Fe=5)}function gr(t,i,o){var a=de,c=At.transition;try{At.transition=null,de=1,O0(t,i,o,a)}finally{At.transition=c,de=a}return null}function O0(t,i,o,a){do ri();while(jn!==null);if(se&6)throw Error(n(327));o=t.finishedWork;var c=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(dy(t,h),t===je&&(Me=je=null,Ke=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||zo||(zo=!0,Lp(Gs,function(){return ri(),null})),h=(o.flags&15990)!==0,o.subtreeFlags&15990||h){h=At.transition,At.transition=null;var m=de;de=1;var _=se;se|=4,Au.current=null,T0(t,o),wp(o,t),Xy(za),Zs=!!Ua,za=Ua=null,t.current=o,k0(o),ny(),se=_,de=m,At.transition=h}else t.current=o;if(zo&&(zo=!1,jn=t,jo=c),h=t.pendingLanes,h===0&&(zn=null),sy(o.stateNode),ft(t,De()),i!==null)for(a=t.onRecoverableError,o=0;o<i.length;o++)c=i[o],a(c.value,{componentStack:c.stack,digest:c.digest});if(Uo)throw Uo=!1,t=Du,Du=null,t;return jo&1&&t.tag!==0&&ri(),h=t.pendingLanes,h&1?t===Lu?us++:(us=0,Lu=t):us=0,Mn(),null}function ri(){if(jn!==null){var t=_h(jo),i=At.transition,o=de;try{if(At.transition=null,de=16>t?16:t,jn===null)var a=!1;else{if(t=jn,jn=null,jo=0,se&6)throw Error(n(331));var c=se;for(se|=4,F=t.current;F!==null;){var h=F,m=h.child;if(F.flags&16){var _=h.deletions;if(_!==null){for(var y=0;y<_.length;y++){var k=_[y];for(F=k;F!==null;){var P=F;switch(P.tag){case 0:case 11:case 15:os(8,P,h)}var O=P.child;if(O!==null)O.return=P,F=O;else for(;F!==null;){P=F;var R=P.sibling,b=P.return;if(mp(P),P===k){F=null;break}if(R!==null){R.return=b,F=R;break}F=b}}}var z=h.alternate;if(z!==null){var j=z.child;if(j!==null){z.child=null;do{var Le=j.sibling;j.sibling=null,j=Le}while(j!==null)}}F=h}}if(h.subtreeFlags&2064&&m!==null)m.return=h,F=m;else e:for(;F!==null;){if(h=F,h.flags&2048)switch(h.tag){case 0:case 11:case 15:os(9,h,h.return)}var C=h.sibling;if(C!==null){C.return=h.return,F=C;break e}F=h.return}}var E=t.current;for(F=E;F!==null;){m=F;var T=m.child;if(m.subtreeFlags&2064&&T!==null)T.return=m,F=T;else e:for(m=E;F!==null;){if(_=F,_.flags&2048)try{switch(_.tag){case 0:case 11:case 15:Mo(9,_)}}catch(W){Re(_,_.return,W)}if(_===m){F=null;break e}var x=_.sibling;if(x!==null){x.return=_.return,F=x;break e}F=_.return}}if(se=c,Mn(),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(qs,t)}catch{}a=!0}return a}finally{de=o,At.transition=i}}return!1}function Op(t,i,o){i=Zr(o,i),i=Qf(t,i,1),t=Fn(t,i,1),i=it(),t!==null&&(Di(t,1,i),ft(t,i))}function Re(t,i,o){if(t.tag===3)Op(t,t,o);else for(;i!==null;){if(i.tag===3){Op(i,t,o);break}else if(i.tag===1){var a=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(zn===null||!zn.has(a))){t=Zr(o,t),t=Yf(i,t,1),i=Fn(i,t,1),t=it(),i!==null&&(Di(i,1,t),ft(i,t));break}}i=i.return}}function x0(t,i,o){var a=t.pingCache;a!==null&&a.delete(i),i=it(),t.pingedLanes|=t.suspendedLanes&o,je===t&&(Ke&o)===o&&(Fe===4||Fe===3&&(Ke&130023424)===Ke&&500>De()-xu?mr(t,0):Ou|=o),ft(t,i)}function xp(t,i){i===0&&(t.mode&1?(i=Qs,Qs<<=1,!(Qs&130023424)&&(Qs=4194304)):i=1);var o=it();t=dn(t,i),t!==null&&(Di(t,i,o),ft(t,o))}function D0(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),xp(t,o)}function L0(t,i){var o=0;switch(t.tag){case 13:var a=t.stateNode,c=t.memoizedState;c!==null&&(o=c.retryLane);break;case 19:a=t.stateNode;break;default:throw Error(n(314))}a!==null&&a.delete(i),xp(t,o)}var Dp;Dp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||ut.current)dt=!0;else{if(!(t.lanes&o)&&!(i.flags&128))return dt=!1,E0(t,i,o);dt=!!(t.flags&131072)}else dt=!1,Se&&i.flags&1048576&&hf(i,vo,i.index);switch(i.lanes=0,i.tag){case 2:var a=i.type;Do(t,i),t=i.pendingProps;var c=Hr(i,Je.current);Xr(i,o),c=uu(null,i,a,t,c,o);var h=cu();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,ct(a)?(h=!0,mo(i)):h=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,nu(i),c.updater=Oo,i.stateNode=c,c._reactInternals=i,gu(i,a,t,o),i=wu(null,i,a,!0,h,o)):(i.tag=0,Se&&h&&Ga(i),rt(null,i,c,o),i=i.child),i;case 16:a=i.elementType;e:{switch(Do(t,i),t=i.pendingProps,c=a._init,a=c(a._payload),i.type=a,c=i.tag=b0(a),t=Ut(a,t),c){case 0:i=yu(null,i,a,t,o);break e;case 1:i=sp(null,i,a,t,o);break e;case 11:i=ep(null,i,a,t,o);break e;case 14:i=tp(null,i,a,Ut(a.type,t),o);break e}throw Error(n(306,a,""))}return i;case 0:return a=i.type,c=i.pendingProps,c=i.elementType===a?c:Ut(a,c),yu(t,i,a,c,o);case 1:return a=i.type,c=i.pendingProps,c=i.elementType===a?c:Ut(a,c),sp(t,i,a,c,o);case 3:e:{if(op(i),t===null)throw Error(n(387));a=i.pendingProps,h=i.memoizedState,c=h.element,Ef(t,i),Co(i,a,null,o);var m=i.memoizedState;if(a=m.element,h.isDehydrated)if(h={element:a,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){c=Zr(Error(n(423)),i),i=lp(t,i,a,o,c);break e}else if(a!==c){c=Zr(Error(n(424)),i),i=lp(t,i,a,o,c);break e}else for(St=xn(i.stateNode.containerInfo.firstChild),Et=i,Se=!0,Ft=null,o=yf(i,null,a,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Kr(),a===c){i=fn(t,i,o);break e}rt(t,i,a,o)}i=i.child}return i;case 5:return Cf(i),t===null&&Qa(i),a=i.type,c=i.pendingProps,h=t!==null?t.memoizedProps:null,m=c.children,ja(a,c)?m=null:h!==null&&ja(a,h)&&(i.flags|=32),ip(t,i),rt(t,i,m,o),i.child;case 6:return t===null&&Qa(i),null;case 13:return ap(t,i,o);case 4:return ru(i,i.stateNode.containerInfo),a=i.pendingProps,t===null?i.child=Qr(i,null,a,o):rt(t,i,a,o),i.child;case 11:return a=i.type,c=i.pendingProps,c=i.elementType===a?c:Ut(a,c),ep(t,i,a,c,o);case 7:return rt(t,i,i.pendingProps,o),i.child;case 8:return rt(t,i,i.pendingProps.children,o),i.child;case 12:return rt(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(a=i.type._context,c=i.pendingProps,h=i.memoizedProps,m=c.value,ge(Eo,a._currentValue),a._currentValue=m,h!==null)if(bt(h.value,m)){if(h.children===c.children&&!ut.current){i=fn(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var _=h.dependencies;if(_!==null){m=h.child;for(var y=_.firstContext;y!==null;){if(y.context===a){if(h.tag===1){y=hn(-1,o&-o),y.tag=2;var k=h.updateQueue;if(k!==null){k=k.shared;var P=k.pending;P===null?y.next=y:(y.next=P.next,P.next=y),k.pending=y}}h.lanes|=o,y=h.alternate,y!==null&&(y.lanes|=o),eu(h.return,o,i),_.lanes|=o;break}y=y.next}}else if(h.tag===10)m=h.type===i.type?null:h.child;else if(h.tag===18){if(m=h.return,m===null)throw Error(n(341));m.lanes|=o,_=m.alternate,_!==null&&(_.lanes|=o),eu(m,o,i),m=h.sibling}else m=h.child;if(m!==null)m.return=h;else for(m=h;m!==null;){if(m===i){m=null;break}if(h=m.sibling,h!==null){h.return=m.return,m=h;break}m=m.return}h=m}rt(t,i,c.children,o),i=i.child}return i;case 9:return c=i.type,a=i.pendingProps.children,Xr(i,o),c=Nt(c),a=a(c),i.flags|=1,rt(t,i,a,o),i.child;case 14:return a=i.type,c=Ut(a,i.pendingProps),c=Ut(a.type,c),tp(t,i,a,c,o);case 15:return np(t,i,i.type,i.pendingProps,o);case 17:return a=i.type,c=i.pendingProps,c=i.elementType===a?c:Ut(a,c),Do(t,i),i.tag=1,ct(a)?(t=!0,mo(i)):t=!1,Xr(i,o),qf(i,a,c),gu(i,a,c,o),wu(null,i,a,!0,t,o);case 19:return cp(t,i,o);case 22:return rp(t,i,o)}throw Error(n(156,i.tag))};function Lp(t,i){return hh(t,i)}function M0(t,i,o,a){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(t,i,o,a){return new M0(t,i,o,a)}function ju(t){return t=t.prototype,!(!t||!t.isReactComponent)}function b0(t){if(typeof t=="function")return ju(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Kt)return 11;if(t===Qt)return 14}return 2}function Vn(t,i){var o=t.alternate;return o===null?(o=Ot(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function $o(t,i,o,a,c,h){var m=2;if(a=t,typeof t=="function")ju(t)&&(m=1);else if(typeof t=="string")m=5;else e:switch(t){case K:return _r(o.children,c,h,i);case ie:m=8,c|=8;break;case Ue:return t=Ot(12,o,i,c|2),t.elementType=Ue,t.lanes=h,t;case vt:return t=Ot(13,o,i,c),t.elementType=vt,t.lanes=h,t;case Lt:return t=Ot(19,o,i,c),t.elementType=Lt,t.lanes=h,t;case ke:return Ho(o,c,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case nt:m=10;break e;case qt:m=9;break e;case Kt:m=11;break e;case Qt:m=14;break e;case at:m=16,a=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Ot(m,o,i,c),i.elementType=t,i.type=a,i.lanes=h,i}function _r(t,i,o,a){return t=Ot(7,t,a,i),t.lanes=o,t}function Ho(t,i,o,a){return t=Ot(22,t,a,i),t.elementType=ke,t.lanes=o,t.stateNode={isHidden:!1},t}function Wu(t,i,o){return t=Ot(6,t,null,i),t.lanes=o,t}function Bu(t,i,o){return i=Ot(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function F0(t,i,o,a,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ma(0),this.expirationTimes=ma(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ma(0),this.identifierPrefix=a,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function Vu(t,i,o,a,c,h,m,_,y){return t=new F0(t,i,o,_,y),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Ot(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:a,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},nu(h),t}function U0(t,i,o){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:re,key:a==null?null:""+a,children:t,containerInfo:i,implementation:o}}function Mp(t){if(!t)return Ln;t=t._reactInternals;e:{if(sr(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(ct(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(ct(o))return uf(t,o,i)}return i}function bp(t,i,o,a,c,h,m,_,y){return t=Vu(o,a,!0,t,c,h,m,_,y),t.context=Mp(null),o=t.current,a=it(),c=Wn(o),h=hn(a,c),h.callback=i??null,Fn(o,h,c),t.current.lanes=c,Di(t,c,a),ft(t,a),t}function Go(t,i,o,a){var c=i.current,h=it(),m=Wn(c);return o=Mp(o),i.context===null?i.context=o:i.pendingContext=o,i=hn(h,m),i.payload={element:t},a=a===void 0?null:a,a!==null&&(i.callback=a),t=Fn(c,i,m),t!==null&&(Wt(t,c,m,h),Io(t,c,m)),m}function qo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Fp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function $u(t,i){Fp(t,i),(t=t.alternate)&&Fp(t,i)}function z0(){return null}var Up=typeof reportError=="function"?reportError:function(t){console.error(t)};function Hu(t){this._internalRoot=t}Ko.prototype.render=Hu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Go(t,i,null,null)},Ko.prototype.unmount=Hu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;pr(function(){Go(null,t,null,null)}),i[ln]=null}};function Ko(t){this._internalRoot=t}Ko.prototype.unstable_scheduleHydration=function(t){if(t){var i=wh();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Pn.length&&i!==0&&i<Pn[o].priority;o++);Pn.splice(o,0,t),o===0&&Ih(t)}};function Gu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Qo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function zp(){}function j0(t,i,o,a,c){if(c){if(typeof a=="function"){var h=a;a=function(){var k=qo(m);h.call(k)}}var m=bp(i,a,t,0,null,!1,!1,"",zp);return t._reactRootContainer=m,t[ln]=m.current,qi(t.nodeType===8?t.parentNode:t),pr(),m}for(;c=t.lastChild;)t.removeChild(c);if(typeof a=="function"){var _=a;a=function(){var k=qo(y);_.call(k)}}var y=Vu(t,0,!1,null,null,!1,!1,"",zp);return t._reactRootContainer=y,t[ln]=y.current,qi(t.nodeType===8?t.parentNode:t),pr(function(){Go(i,y,o,a)}),y}function Yo(t,i,o,a,c){var h=o._reactRootContainer;if(h){var m=h;if(typeof c=="function"){var _=c;c=function(){var y=qo(m);_.call(y)}}Go(i,m,t,c)}else m=j0(o,i,t,c,a);return qo(m)}vh=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=xi(i.pendingLanes);o!==0&&(ga(i,o|1),ft(i,De()),!(se&6)&&(ni=De()+500,Mn()))}break;case 13:pr(function(){var a=dn(t,1);if(a!==null){var c=it();Wt(a,t,1,c)}}),$u(t,1)}},_a=function(t){if(t.tag===13){var i=dn(t,134217728);if(i!==null){var o=it();Wt(i,t,134217728,o)}$u(t,134217728)}},yh=function(t){if(t.tag===13){var i=Wn(t),o=dn(t,i);if(o!==null){var a=it();Wt(o,t,i,a)}$u(t,i)}},wh=function(){return de},Eh=function(t,i){var o=de;try{return de=t,i()}finally{de=o}},ua=function(t,i,o){switch(i){case"input":if(ta(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var a=o[i];if(a!==t&&a.form===t.form){var c=fo(a);if(!c)throw Error(n(90));Hd(a),ta(a,c)}}}break;case"textarea":Yd(t,o);break;case"select":i=o.value,i!=null&&Dr(t,!!o.multiple,i,!1)}},sh=Fu,oh=pr;var W0={usingClientEntryPoint:!1,Events:[Yi,Vr,fo,rh,ih,Fu]},cs={findFiberByHostInstance:or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},B0={bundleType:cs.bundleType,version:cs.version,rendererPackageName:cs.rendererPackageName,rendererConfig:cs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pe.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ch(t),t===null?null:t.stateNode},findFiberByHostInstance:cs.findFiberByHostInstance||z0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xo.isDisabled&&Xo.supportsFiber)try{qs=Xo.inject(B0),Yt=Xo}catch{}}return pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W0,pt.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gu(i))throw Error(n(200));return U0(t,i,null,o)},pt.createRoot=function(t,i){if(!Gu(t))throw Error(n(299));var o=!1,a="",c=Up;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(a=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=Vu(t,1,!1,null,null,o,!1,a,c),t[ln]=i.current,qi(t.nodeType===8?t.parentNode:t),new Hu(i)},pt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=ch(i),t=t===null?null:t.stateNode,t},pt.flushSync=function(t){return pr(t)},pt.hydrate=function(t,i,o){if(!Qo(i))throw Error(n(200));return Yo(null,t,i,!0,o)},pt.hydrateRoot=function(t,i,o){if(!Gu(t))throw Error(n(405));var a=o!=null&&o.hydratedSources||null,c=!1,h="",m=Up;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(m=o.onRecoverableError)),i=bp(i,null,t,1,o??null,c,!1,h,m),t[ln]=i.current,qi(t),a)for(t=0;t<a.length;t++)o=a[t],c=o._getVersion,c=c(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,c]:i.mutableSourceEagerHydrationData.push(o,c);return new Ko(i)},pt.render=function(t,i,o){if(!Qo(i))throw Error(n(200));return Yo(null,t,i,!1,o)},pt.unmountComponentAtNode=function(t){if(!Qo(t))throw Error(n(40));return t._reactRootContainer?(pr(function(){Yo(null,null,t,!1,function(){t._reactRootContainer=null,t[ln]=null})}),!0):!1},pt.unstable_batchedUpdates=Fu,pt.unstable_renderSubtreeIntoContainer=function(t,i,o,a){if(!Qo(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Yo(t,i,o,!1,a)},pt.version="18.3.1-next-f1338f8080-20240426",pt}var qp;function X0(){if(qp)return Qu.exports;qp=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Qu.exports=Y0(),Qu.exports}var Kp;function J0(){if(Kp)return Jo;Kp=1;var r=X0();return Jo.createRoot=r.createRoot,Jo.hydrateRoot=r.hydrateRoot,Jo}var Z0=J0();const st={GRASS:"grass",WATER:"water",ROCK:"rock",EMPTY:"empty",FOOD:"food"},ew={[st.GRASS]:.4,[st.WATER]:.2,[st.EMPTY]:.1,[st.ROCK]:.15,[st.FOOD]:.15},tw="_tile_xzvxb_1",nw="_grass_xzvxb_14",rw="_water_xzvxb_22",iw="_rock_xzvxb_29",sw="_empty_xzvxb_36",ow="_food_xzvxb_43",Qp={tile:tw,grass:nw,water:rw,rock:iw,empty:sw,food:ow};var Ju={exports:{}},Zu,Yp;function lw(){if(Yp)return Zu;Yp=1;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Zu=r,Zu}var ec,Xp;function aw(){if(Xp)return ec;Xp=1;var r=lw();function e(){}function n(){}return n.resetWarningCache=e,ec=function(){function s(d,f,p,g,w,v){if(v!==r){var S=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw S.name="Invariant Violation",S}}s.isRequired=s;function l(){return s}var u={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:l,element:s,elementType:s,instanceOf:l,node:s,objectOf:l,oneOf:l,oneOfType:l,shape:l,exact:l,checkPropTypes:n,resetWarningCache:e};return u.PropTypes=u,u},ec}var Jp;function uw(){return Jp||(Jp=1,Ju.exports=aw()()),Ju.exports}var cw=uw();const mn=$0(cw);function gg(r){const{isActive:e=!1,tile:n={}}=r,{type:s}=n,l={[st.GRASS]:"☘️",[st.WATER]:"",[st.ROCK]:"⛰️",[st.EMPTY]:"",[st.FOOD]:"🍎"};return Ie.jsx("div",{className:`${Qp.tile} ${Qp[s]}`,children:l[s]})}gg.propTypes={isActive:mn.bool,tile:mn.object};const dw="_board_48rpi_1",hw="_row_48rpi_8",fw="_mycharacter_48rpi_13",pw="_moveD_48rpi_22",mw="_moveU_48rpi_25",gw="_moveR_48rpi_28",_w="_moveL_48rpi_31",vw="_dragon_48rpi_34",Zo={board:dw,row:hw,mycharacter:fw,moveD:pw,moveU:mw,moveR:gw,moveL:_w,dragon:vw},yw=(r,e)=>{const n=r*e,s={};for(const[f,p]of Object.entries(ew))s[f]=Math.floor(p*n);let l=[];for(const[f,p]of Object.entries(s))l=l.concat(Array(p).fill(f));for(;l.length<n;)l.push(st.EMPTY);for(let f=l.length-1;f>0;f--){const p=Math.floor(Math.random()*(f+1));[l[f],l[p]]=[l[p],l[f]]}const u=[];let d=0;for(let f=0;f<r;f++){const p=[];for(let g=0;g<e;g++)p.push({isActive:!1,type:l[d++]});u.push(p)}return u};var Zp={};/**
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
 */const _g={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const D=function(r,e){if(!r)throw yi(e)},yi=function(r){return new Error("Firebase Database ("+_g.SDK_VERSION+") INTERNAL ASSERT FAILED: "+r)};/**
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
 */const vg=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):(l&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},ww=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const l=r[n++];if(l<128)e[s++]=String.fromCharCode(l);else if(l>191&&l<224){const u=r[n++];e[s++]=String.fromCharCode((l&31)<<6|u&63)}else if(l>239&&l<365){const u=r[n++],d=r[n++],f=r[n++],p=((l&7)<<18|(u&63)<<12|(d&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const u=r[n++],d=r[n++];e[s++]=String.fromCharCode((l&15)<<12|(u&63)<<6|d&63)}}return e.join("")},Hc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<r.length;l+=3){const u=r[l],d=l+1<r.length,f=d?r[l+1]:0,p=l+2<r.length,g=p?r[l+2]:0,w=u>>2,v=(u&3)<<4|f>>4;let S=(f&15)<<2|g>>6,A=g&63;p||(A=64,d||(S=64)),s.push(n[w],n[v],n[S],n[A])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(vg(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):ww(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<r.length;){const u=n[r.charAt(l++)],f=l<r.length?n[r.charAt(l)]:0;++l;const g=l<r.length?n[r.charAt(l)]:64;++l;const v=l<r.length?n[r.charAt(l)]:64;if(++l,u==null||f==null||g==null||v==null)throw new Ew;const S=u<<2|f>>4;if(s.push(S),g!==64){const A=f<<4&240|g>>2;if(s.push(A),v!==64){const L=g<<6&192|v;s.push(L)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Ew extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yg=function(r){const e=vg(r);return Hc.encodeByteArray(e,!0)},al=function(r){return yg(r).replace(/\./g,"")},ul=function(r){try{return Hc.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Sw(r){return wg(void 0,r)}function wg(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Iw(n)||(r[n]=wg(r[n],e[n]));return r}function Iw(r){return r!=="__proto__"}/**
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
 */function Cw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Tw=()=>Cw().__FIREBASE_DEFAULTS__,kw=()=>{if(typeof process>"u"||typeof Zp>"u")return;const r=Zp.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Rw=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&ul(r[1]);return e&&JSON.parse(e)},Gc=()=>{try{return Tw()||kw()||Rw()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Eg=r=>{var e,n;return(n=(e=Gc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[r]},Nw=r=>{const e=Eg(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Sg=()=>{var r;return(r=Gc())===null||r===void 0?void 0:r.config},Ig=r=>{var e;return(e=Gc())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */function Pw(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",l=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},r);return[al(JSON.stringify(n)),al(JSON.stringify(d)),""].join(".")}/**
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
 */function lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lt())}function Aw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Cg(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Tg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ow(){const r=lt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function kg(){return _g.NODE_ADMIN===!0}function Rg(){try{return typeof indexedDB=="object"}catch{return!1}}function Ng(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},l.onupgradeneeded=()=>{n=!1},l.onerror=()=>{var u;e(((u=l.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){e(n)}})}function xw(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Dw="FirebaseError";class sn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Dw,Object.setPrototypeOf(this,sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pr.prototype.create)}}class Pr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},l=`${this.service}/${e}`,u=this.errors[e],d=u?Lw(u,s):"Error",f=`${this.serviceName}: ${d} (${l}).`;return new sn(l,f,s)}}function Lw(r,e){return r.replace(Mw,(n,s)=>{const l=e[s];return l!=null?String(l):`<${s}?>`})}const Mw=/\{\$([^}]+)}/g;/**
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
 */function Is(r){return JSON.parse(r)}function Ge(r){return JSON.stringify(r)}/**
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
 */const Pg=function(r){let e={},n={},s={},l="";try{const u=r.split(".");e=Is(ul(u[0])||""),n=Is(ul(u[1])||""),l=u[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:l}},bw=function(r){const e=Pg(r),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Fw=function(r){const e=Pg(r).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function on(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function fi(r,e){if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}function vc(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function cl(r,e,n){const s={};for(const l in r)Object.prototype.hasOwnProperty.call(r,l)&&(s[l]=e.call(n,r[l],l,r));return s}function Cs(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const l of n){if(!s.includes(l))return!1;const u=r[l],d=e[l];if(em(u)&&em(d)){if(!Cs(u,d))return!1}else if(u!==d)return!1}for(const l of s)if(!n.includes(l))return!1;return!0}function em(r){return r!==null&&typeof r=="object"}/**
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
 */class Uw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let v=0;v<16;v++)s[v]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let v=0;v<16;v++)s[v]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let v=16;v<80;v++){const S=s[v-3]^s[v-8]^s[v-14]^s[v-16];s[v]=(S<<1|S>>>31)&4294967295}let l=this.chain_[0],u=this.chain_[1],d=this.chain_[2],f=this.chain_[3],p=this.chain_[4],g,w;for(let v=0;v<80;v++){v<40?v<20?(g=f^u&(d^f),w=1518500249):(g=u^d^f,w=1859775393):v<60?(g=u&d|f&(u|d),w=2400959708):(g=u^d^f,w=3395469782);const S=(l<<5|l>>>27)+g+p+w+s[v]&4294967295;p=f,f=d,d=(u<<30|u>>>2)&4294967295,u=l,l=S}this.chain_[0]=this.chain_[0]+l&4294967295,this.chain_[1]=this.chain_[1]+u&4294967295,this.chain_[2]=this.chain_[2]+d&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let l=0;const u=this.buf_;let d=this.inbuf_;for(;l<n;){if(d===0)for(;l<=s;)this.compress_(e,l),l+=this.blockSize;if(typeof e=="string"){for(;l<n;)if(u[d]=e.charCodeAt(l),++d,++l,d===this.blockSize){this.compress_(u),d=0;break}}else for(;l<n;)if(u[d]=e[l],++d,++l,d===this.blockSize){this.compress_(u),d=0;break}}this.inbuf_=d,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let l=this.blockSize-1;l>=56;l--)this.buf_[l]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let l=0;l<5;l++)for(let u=24;u>=0;u-=8)e[s]=this.chain_[l]>>u&255,++s;return e}}function zw(r,e){const n=new jw(r,e);return n.subscribe.bind(n)}class jw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let l;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Ww(e,["next","error","complete"])?l=e:l={next:e,error:n,complete:s},l.next===void 0&&(l.next=tc),l.error===void 0&&(l.error=tc),l.complete===void 0&&(l.complete=tc);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ww(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function tc(){}function xl(r,e){return`${r} failed: ${e} argument `}/**
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
 */const Bw=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);if(l>=55296&&l<=56319){const u=l-55296;s++,D(s<r.length,"Surrogate pair missing trail surrogate.");const d=r.charCodeAt(s)-56320;l=65536+(u<<10)+d}l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):l<65536?(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},Dl=function(r){let e=0;for(let n=0;n<r.length;n++){const s=r.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const Vw=1e3,$w=2,Hw=4*60*60*1e3,Gw=.5;function tm(r,e=Vw,n=$w){const s=e*Math.pow(n,r),l=Math.round(Gw*s*(Math.random()-.5)*2);return Math.min(Hw,s+l)}/**
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
 */function Tt(r){return r&&r._delegate?r._delegate:r}class Ht{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const vr="[DEFAULT]";/**
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
 */class qw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ds;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:n});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),l=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(l)return null;throw u}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Qw(e))try{this.getOrInitializeService({instanceIdentifier:vr})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:l});s.resolve(u)}catch{}}}}clearInstance(e=vr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vr){return this.instances.has(e)}getOptions(e=vr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,d]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(u);s===f&&d.resolve(l)}return l}onInit(e,n){var s;const l=this.normalizeInstanceIdentifier(n),u=(s=this.onInitCallbacks.get(l))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(l,u);const d=this.instances.get(l);return d&&e(d,l),()=>{u.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const l of s)try{l(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Kw(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=vr){return this.component?this.component.multipleInstances?e:vr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Kw(r){return r===vr?void 0:r}function Qw(r){return r.instantiationMode==="EAGER"}/**
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
 */class Yw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new qw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var he;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(he||(he={}));const Xw={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},Jw=he.INFO,Zw={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},eE=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),l=Zw[e];if(l)console[l](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ll{constructor(e){this.name=e,this._logLevel=Jw,this._logHandler=eE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Xw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const tE=(r,e)=>e.some(n=>r instanceof n);let nm,rm;function nE(){return nm||(nm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rE(){return rm||(rm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ag=new WeakMap,yc=new WeakMap,Og=new WeakMap,nc=new WeakMap,Kc=new WeakMap;function iE(r){const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("success",u),r.removeEventListener("error",d)},u=()=>{n(Xn(r.result)),l()},d=()=>{s(r.error),l()};r.addEventListener("success",u),r.addEventListener("error",d)});return e.then(n=>{n instanceof IDBCursor&&Ag.set(n,r)}).catch(()=>{}),Kc.set(e,r),e}function sE(r){if(yc.has(r))return;const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",d),r.removeEventListener("abort",d)},u=()=>{n(),l()},d=()=>{s(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",u),r.addEventListener("error",d),r.addEventListener("abort",d)});yc.set(r,e)}let wc={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return yc.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Og.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xn(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function oE(r){wc=r(wc)}function lE(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(rc(this),e,...n);return Og.set(s,e.sort?e.sort():[e]),Xn(s)}:rE().includes(r)?function(...e){return r.apply(rc(this),e),Xn(Ag.get(this))}:function(...e){return Xn(r.apply(rc(this),e))}}function aE(r){return typeof r=="function"?lE(r):(r instanceof IDBTransaction&&sE(r),tE(r,nE())?new Proxy(r,wc):r)}function Xn(r){if(r instanceof IDBRequest)return iE(r);if(nc.has(r))return nc.get(r);const e=aE(r);return e!==r&&(nc.set(r,e),Kc.set(e,r)),e}const rc=r=>Kc.get(r);function xg(r,e,{blocked:n,upgrade:s,blocking:l,terminated:u}={}){const d=indexedDB.open(r,e),f=Xn(d);return s&&d.addEventListener("upgradeneeded",p=>{s(Xn(d.result),p.oldVersion,p.newVersion,Xn(d.transaction),p)}),n&&d.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),f.then(p=>{u&&p.addEventListener("close",()=>u()),l&&p.addEventListener("versionchange",g=>l(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const uE=["get","getKey","getAll","getAllKeys","count"],cE=["put","add","delete","clear"],ic=new Map;function im(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(ic.get(e))return ic.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,l=cE.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(l||uE.includes(n)))return;const u=async function(d,...f){const p=this.transaction(d,l?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(f.shift())),(await Promise.all([g[n](...f),l&&p.done]))[0]};return ic.set(e,u),u}oE(r=>({...r,get:(e,n,s)=>im(e,n)||r.get(e,n,s),has:(e,n)=>!!im(e,n)||r.has(e,n)}));/**
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
 */class dE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(hE(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function hE(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ec="@firebase/app",sm="0.10.17";/**
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
 */const Sn=new Ll("@firebase/app"),fE="@firebase/app-compat",pE="@firebase/analytics-compat",mE="@firebase/analytics",gE="@firebase/app-check-compat",_E="@firebase/app-check",vE="@firebase/auth",yE="@firebase/auth-compat",wE="@firebase/database",EE="@firebase/data-connect",SE="@firebase/database-compat",IE="@firebase/functions",CE="@firebase/functions-compat",TE="@firebase/installations",kE="@firebase/installations-compat",RE="@firebase/messaging",NE="@firebase/messaging-compat",PE="@firebase/performance",AE="@firebase/performance-compat",OE="@firebase/remote-config",xE="@firebase/remote-config-compat",DE="@firebase/storage",LE="@firebase/storage-compat",ME="@firebase/firestore",bE="@firebase/vertexai",FE="@firebase/firestore-compat",UE="firebase",zE="11.1.0";/**
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
 */const Sc="[DEFAULT]",jE={[Ec]:"fire-core",[fE]:"fire-core-compat",[mE]:"fire-analytics",[pE]:"fire-analytics-compat",[_E]:"fire-app-check",[gE]:"fire-app-check-compat",[vE]:"fire-auth",[yE]:"fire-auth-compat",[wE]:"fire-rtdb",[EE]:"fire-data-connect",[SE]:"fire-rtdb-compat",[IE]:"fire-fn",[CE]:"fire-fn-compat",[TE]:"fire-iid",[kE]:"fire-iid-compat",[RE]:"fire-fcm",[NE]:"fire-fcm-compat",[PE]:"fire-perf",[AE]:"fire-perf-compat",[OE]:"fire-rc",[xE]:"fire-rc-compat",[DE]:"fire-gcs",[LE]:"fire-gcs-compat",[ME]:"fire-fst",[FE]:"fire-fst-compat",[bE]:"fire-vertex","fire-js":"fire-js",[UE]:"fire-js-all"};/**
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
 */const dl=new Map,WE=new Map,Ic=new Map;function om(r,e){try{r.container.addComponent(e)}catch(n){Sn.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function rn(r){const e=r.name;if(Ic.has(e))return Sn.debug(`There were multiple attempts to register component ${e}.`),!1;Ic.set(e,r);for(const n of dl.values())om(n,r);for(const n of WE.values())om(n,r);return!0}function Ar(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function gn(r){return r.settings!==void 0}/**
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
 */const BE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Jn=new Pr("app","Firebase",BE);/**
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
 */class VE{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ht("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jn.create("app-deleted",{appName:this._name})}}/**
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
 */const Ei=zE;function Dg(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Sc,automaticDataCollectionEnabled:!1},e),l=s.name;if(typeof l!="string"||!l)throw Jn.create("bad-app-name",{appName:String(l)});if(n||(n=Sg()),!n)throw Jn.create("no-options");const u=dl.get(l);if(u){if(Cs(n,u.options)&&Cs(s,u.config))return u;throw Jn.create("duplicate-app",{appName:l})}const d=new Yw(l);for(const p of Ic.values())d.addComponent(p);const f=new VE(n,s,d);return dl.set(l,f),f}function Qc(r=Sc){const e=dl.get(r);if(!e&&r===Sc&&Sg())return Dg();if(!e)throw Jn.create("no-app",{appName:r});return e}function Dt(r,e,n){var s;let l=(s=jE[r])!==null&&s!==void 0?s:r;n&&(l+=`-${n}`);const u=l.match(/\s|\//),d=e.match(/\s|\//);if(u||d){const f=[`Unable to register library "${l}" with version "${e}":`];u&&f.push(`library name "${l}" contains illegal characters (whitespace or "/")`),u&&d&&f.push("and"),d&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Sn.warn(f.join(" "));return}rn(new Ht(`${l}-version`,()=>({library:l,version:e}),"VERSION"))}/**
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
 */const $E="firebase-heartbeat-database",HE=1,Ts="firebase-heartbeat-store";let sc=null;function Lg(){return sc||(sc=xg($E,HE,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Ts)}catch(n){console.warn(n)}}}}).catch(r=>{throw Jn.create("idb-open",{originalErrorMessage:r.message})})),sc}async function GE(r){try{const n=(await Lg()).transaction(Ts),s=await n.objectStore(Ts).get(Mg(r));return await n.done,s}catch(e){if(e instanceof sn)Sn.warn(e.message);else{const n=Jn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Sn.warn(n.message)}}}async function lm(r,e){try{const s=(await Lg()).transaction(Ts,"readwrite");await s.objectStore(Ts).put(e,Mg(r)),await s.done}catch(n){if(n instanceof sn)Sn.warn(n.message);else{const s=Jn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Sn.warn(s.message)}}}function Mg(r){return`${r.name}!${r.options.appId}`}/**
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
 */const qE=1024,KE=30*24*60*60*1e3;class QE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new XE(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=am();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(d=>d.date===u)?void 0:(this._heartbeatsCache.heartbeats.push({date:u,agent:l}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(d=>{const f=new Date(d.date).valueOf();return Date.now()-f<=KE}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Sn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=am(),{heartbeatsToSend:s,unsentEntries:l}=YE(this._heartbeatsCache.heartbeats),u=al(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return Sn.warn(n),""}}}function am(){return new Date().toISOString().substring(0,10)}function YE(r,e=qE){const n=[];let s=r.slice();for(const l of r){const u=n.find(d=>d.agent===l.agent);if(u){if(u.dates.push(l.date),um(n)>e){u.dates.pop();break}}else if(n.push({agent:l.agent,dates:[l.date]}),um(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class XE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rg()?Ng().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await GE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return lm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return lm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...e.heartbeats]})}else return}}function um(r){return al(JSON.stringify({version:2,heartbeats:r})).length}/**
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
 */function JE(r){rn(new Ht("platform-logger",e=>new dE(e),"PRIVATE")),rn(new Ht("heartbeat",e=>new QE(e),"PRIVATE")),Dt(Ec,sm,r),Dt(Ec,sm,"esm2017"),Dt("fire-js","")}JE("");var cm={};const dm="@firebase/database",hm="1.0.10";/**
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
 */let bg="";function ZE(r){bg=r}/**
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
 */class eS{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ge(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Is(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class tS{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return on(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Fg=function(r){try{if(typeof window<"u"&&typeof window[r]<"u"){const e=window[r];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new eS(e)}}catch{}return new tS},wr=Fg("localStorage"),nS=Fg("sessionStorage");/**
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
 */const li=new Ll("@firebase/database"),rS=function(){let r=1;return function(){return r++}}(),Ug=function(r){const e=Bw(r),n=new Uw;n.update(e);const s=n.digest();return Hc.encodeByteArray(s)},Ls=function(...r){let e="";for(let n=0;n<r.length;n++){const s=r[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ls.apply(null,s):typeof s=="object"?e+=Ge(s):e+=s,e+=" "}return e};let gs=null,fm=!0;const iS=function(r,e){D(!e,"Can't turn on custom loggers persistently."),li.logLevel=he.VERBOSE,gs=li.log.bind(li)},Qe=function(...r){if(fm===!0&&(fm=!1,gs===null&&nS.get("logging_enabled")===!0&&iS()),gs){const e=Ls.apply(null,r);gs(e)}},Ms=function(r){return function(...e){Qe(r,...e)}},Cc=function(...r){const e="FIREBASE INTERNAL ERROR: "+Ls(...r);li.error(e)},In=function(...r){const e=`FIREBASE FATAL ERROR: ${Ls(...r)}`;throw li.error(e),new Error(e)},ot=function(...r){const e="FIREBASE WARNING: "+Ls(...r);li.warn(e)},sS=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ot("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Yc=function(r){return typeof r=="number"&&(r!==r||r===Number.POSITIVE_INFINITY||r===Number.NEGATIVE_INFINITY)},oS=function(r){if(document.readyState==="complete")r();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,r())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},pi="[MIN_NAME]",Sr="[MAX_NAME]",Or=function(r,e){if(r===e)return 0;if(r===pi||e===Sr)return-1;if(e===pi||r===Sr)return 1;{const n=pm(r),s=pm(e);return n!==null?s!==null?n-s===0?r.length-e.length:n-s:-1:s!==null?1:r<e?-1:1}},lS=function(r,e){return r===e?0:r<e?-1:1},hs=function(r,e){if(e&&r in e)return e[r];throw new Error("Missing required key ("+r+") in object: "+Ge(e))},Xc=function(r){if(typeof r!="object"||r===null)return Ge(r);const e=[];for(const s in r)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ge(e[s]),n+=":",n+=Xc(r[e[s]]);return n+="}",n},zg=function(r,e){const n=r.length;if(n<=e)return[r];const s=[];for(let l=0;l<n;l+=e)l+e>n?s.push(r.substring(l,n)):s.push(r.substring(l,l+e));return s};function Ye(r,e){for(const n in r)r.hasOwnProperty(n)&&e(n,r[n])}const jg=function(r){D(!Yc(r),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let l,u,d,f,p;r===0?(u=0,d=0,l=1/r===-1/0?1:0):(l=r<0,r=Math.abs(r),r>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(r)/Math.LN2),s),u=f+s,d=Math.round(r*Math.pow(2,n-f)-Math.pow(2,n))):(u=0,d=Math.round(r/Math.pow(2,1-s-n))));const g=[];for(p=n;p;p-=1)g.push(d%2?1:0),d=Math.floor(d/2);for(p=e;p;p-=1)g.push(u%2?1:0),u=Math.floor(u/2);g.push(l?1:0),g.reverse();const w=g.join("");let v="";for(p=0;p<64;p+=8){let S=parseInt(w.substr(p,8),2).toString(16);S.length===1&&(S="0"+S),v=v+S}return v.toLowerCase()},aS=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},uS=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function cS(r,e){let n="Unknown Error";r==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":r==="permission_denied"?n="Client doesn't have permission to access the desired data.":r==="unavailable"&&(n="The service is unavailable");const s=new Error(r+" at "+e._path.toString()+": "+n);return s.code=r.toUpperCase(),s}const dS=new RegExp("^-?(0*)\\d{1,10}$"),hS=-2147483648,fS=2147483647,pm=function(r){if(dS.test(r)){const e=Number(r);if(e>=hS&&e<=fS)return e}return null},Si=function(r){try{r()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ot("Exception was thrown by user callback.",n),e},Math.floor(0))}},pS=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},_s=function(r,e){const n=setTimeout(r,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class mS{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ot(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class gS{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(l=>this.auth_=l)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Qe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ot(e)}}class rl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}rl.OWNER="owner";/**
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
 */const Jc="5",Wg="v",Bg="s",Vg="r",$g="f",Hg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Gg="ls",qg="p",Tc="ac",Kg="websocket",Qg="long_polling";/**
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
 */class Yg{constructor(e,n,s,l,u=!1,d="",f=!1,p=!1){this.secure=n,this.namespace=s,this.webSocketOnly=l,this.nodeAdmin=u,this.persistenceKey=d,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=p,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=wr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&wr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function _S(r){return r.host!==r.internalHost||r.isCustomHost()||r.includeNamespaceInQueryParams}function Xg(r,e,n){D(typeof e=="string","typeof type must == string"),D(typeof n=="object","typeof params must == object");let s;if(e===Kg)s=(r.secure?"wss://":"ws://")+r.internalHost+"/.ws?";else if(e===Qg)s=(r.secure?"https://":"http://")+r.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);_S(r)&&(n.ns=r.namespace);const l=[];return Ye(n,(u,d)=>{l.push(u+"="+d)}),s+l.join("&")}/**
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
 */class vS{constructor(){this.counters_={}}incrementCounter(e,n=1){on(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Sw(this.counters_)}}/**
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
 */const oc={},lc={};function Zc(r){const e=r.toString();return oc[e]||(oc[e]=new vS),oc[e]}function yS(r,e){const n=r.toString();return lc[n]||(lc[n]=e()),lc[n]}/**
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
 */class wS{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let l=0;l<s.length;++l)s[l]&&Si(()=>{this.onMessage_(s[l])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const mm="start",ES="close",SS="pLPCommand",IS="pRTLPCB",Jg="id",Zg="pw",e_="ser",CS="cb",TS="seg",kS="ts",RS="d",NS="dframe",t_=1870,n_=30,PS=t_-n_,AS=25e3,OS=3e4;class si{constructor(e,n,s,l,u,d,f){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.transportSessionId=d,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ms(e),this.stats_=Zc(n),this.urlFn=p=>(this.appCheckToken&&(p[Tc]=this.appCheckToken),Xg(n,Qg,p))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new wS(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(OS)),oS(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ed((...u)=>{const[d,f,p,g,w]=u;if(this.incrementIncomingBytes_(u),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,d===mm)this.id=f,this.password=p;else if(d===ES)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+d)},(...u)=>{const[d,f]=u;this.incrementIncomingBytes_(u),this.myPacketOrderer.handleResponse(d,f)},()=>{this.onClosed_()},this.urlFn);const s={};s[mm]="t",s[e_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[CS]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Wg]=Jc,this.transportSessionId&&(s[Bg]=this.transportSessionId),this.lastSessionId&&(s[Gg]=this.lastSessionId),this.applicationId&&(s[qg]=this.applicationId),this.appCheckToken&&(s[Tc]=this.appCheckToken),typeof location<"u"&&location.hostname&&Hg.test(location.hostname)&&(s[Vg]=$g);const l=this.urlFn(s);this.log_("Connecting via long-poll to "+l),this.scriptTagHolder.addTag(l,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){si.forceAllow_=!0}static forceDisallow(){si.forceDisallow_=!0}static isAvailable(){return si.forceAllow_?!0:!si.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!aS()&&!uS()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ge(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=yg(n),l=zg(s,PS);for(let u=0;u<l.length;u++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,l.length,l[u]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[NS]="t",s[Jg]=e,s[Zg]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ge(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ed{constructor(e,n,s,l){this.onDisconnect=s,this.urlFn=l,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=rS(),window[SS+this.uniqueCallbackIdentifier]=e,window[IS+this.uniqueCallbackIdentifier]=n,this.myIFrame=ed.createIFrame_();let u="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(u='<script>document.domain="'+document.domain+'";<\/script>');const d="<html><body>"+u+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(d),this.myIFrame.doc.close()}catch(f){Qe("frame writing exception"),f.stack&&Qe(f.stack),Qe(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Qe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Jg]=this.myID,e[Zg]=this.myPW,e[e_]=this.currentSerial;let n=this.urlFn(e),s="",l=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+n_+s.length<=t_;){const d=this.pendingSegs.shift();s=s+"&"+TS+l+"="+d.seg+"&"+kS+l+"="+d.ts+"&"+RS+l+"="+d.d,l++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},l=setTimeout(s,Math.floor(AS)),u=()=>{clearTimeout(l),s()};this.addTag(e,u)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const l=s.readyState;(!l||l==="loaded"||l==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Qe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const xS=16384,DS=45e3;let hl=null;typeof MozWebSocket<"u"?hl=MozWebSocket:typeof WebSocket<"u"&&(hl=WebSocket);class Bt{constructor(e,n,s,l,u,d,f){this.connId=e,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ms(this.connId),this.stats_=Zc(n),this.connURL=Bt.connectionURL_(n,d,f,l,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,l,u){const d={};return d[Wg]=Jc,typeof location<"u"&&location.hostname&&Hg.test(location.hostname)&&(d[Vg]=$g),n&&(d[Bg]=n),s&&(d[Gg]=s),l&&(d[Tc]=l),u&&(d[qg]=u),Xg(e,Kg,d)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,wr.set("previous_websocket_failure",!0);try{let s;kg(),this.mySock=new hl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_()}}start(){}static forceDisallow(){Bt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&hl!==null&&!Bt.forceDisallow_}static previouslyFailed(){return wr.isInMemoryStorage||wr.get("previous_websocket_failure")===!0}markConnectionHealthy(){wr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Is(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(D(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ge(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=zg(n,xS);s.length>1&&this.sendString_(String(s.length));for(let l=0;l<s.length;l++)this.sendString_(s[l])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(DS))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Bt.responsesRequiredToBeHealthy=2;Bt.healthyTimeout=3e4;/**
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
 */class ks{static get ALL_TRANSPORTS(){return[si,Bt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Bt&&Bt.isAvailable();let s=n&&!Bt.previouslyFailed();if(e.webSocketOnly&&(n||ot("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Bt];else{const l=this.transports_=[];for(const u of ks.ALL_TRANSPORTS)u&&u.isAvailable()&&l.push(u);ks.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ks.globalTransportInitialized_=!1;/**
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
 */const LS=6e4,MS=5e3,bS=10*1024,FS=100*1024,ac="t",gm="d",US="s",_m="r",zS="e",vm="o",ym="a",wm="n",Em="p",jS="h";class WS{constructor(e,n,s,l,u,d,f,p,g,w){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=l,this.authToken_=u,this.onMessage_=d,this.onReady_=f,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=w,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ms("c:"+this.id+":"),this.transportManager_=new ks(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const l=e.healthyTimeout||0;l>0&&(this.healthyTimeout_=_s(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>FS?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>bS?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(l)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ac in e){const n=e[ac];n===ym?this.upgradeIfSecondaryHealthy_():n===_m?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===vm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=hs("t",e),s=hs("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Em,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ym,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:wm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=hs("t",e),s=hs("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=hs(ac,e);if(gm in e){const s=e[gm];if(n===jS){const l=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(l.h=this.repoInfo_.host),this.onHandshake_(l)}else if(n===wm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let l=0;l<this.pendingDataMessages.length;++l)this.onDataMessage_(this.pendingDataMessages[l]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===US?this.onConnectionShutdown_(s):n===_m?this.onReset_(s):n===zS?Cc("Server Error: "+s):n===vm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Cc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,l=e.h;this.sessionId=e.s,this.repoInfo_.host=l,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Jc!==s&&ot("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),_s(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(LS))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):_s(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(MS))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Em,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(wr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class r_{put(e,n,s,l){}merge(e,n,s,l){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class i_{constructor(e){this.allowedEvents_=e,this.listeners_={},D(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let l=0;l<s.length;l++)s[l].callback.apply(s[l].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const l=this.getInitialEvent(e);l&&n.apply(s,l)}off(e,n,s){this.validateEventType_(e);const l=this.listeners_[e]||[];for(let u=0;u<l.length;u++)if(l[u].callback===n&&(!s||s===l[u].context)){l.splice(u,1);return}}validateEventType_(e){D(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class fl extends i_{static getInstance(){return new fl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!qc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return D(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Sm=32,Im=768;class fe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let l=0;l<this.pieces_.length;l++)this.pieces_[l].length>0&&(this.pieces_[s]=this.pieces_[l],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ue(){return new fe("")}function Z(r){return r.pieceNum_>=r.pieces_.length?null:r.pieces_[r.pieceNum_]}function tr(r){return r.pieces_.length-r.pieceNum_}function ve(r){let e=r.pieceNum_;return e<r.pieces_.length&&e++,new fe(r.pieces_,e)}function td(r){return r.pieceNum_<r.pieces_.length?r.pieces_[r.pieces_.length-1]:null}function BS(r){let e="";for(let n=r.pieceNum_;n<r.pieces_.length;n++)r.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(r.pieces_[n])));return e||"/"}function Rs(r,e=0){return r.pieces_.slice(r.pieceNum_+e)}function s_(r){if(r.pieceNum_>=r.pieces_.length)return null;const e=[];for(let n=r.pieceNum_;n<r.pieces_.length-1;n++)e.push(r.pieces_[n]);return new fe(e,0)}function Ne(r,e){const n=[];for(let s=r.pieceNum_;s<r.pieces_.length;s++)n.push(r.pieces_[s]);if(e instanceof fe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let l=0;l<s.length;l++)s[l].length>0&&n.push(s[l])}return new fe(n,0)}function ne(r){return r.pieceNum_>=r.pieces_.length}function mt(r,e){const n=Z(r),s=Z(e);if(n===null)return e;if(n===s)return mt(ve(r),ve(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+r+")")}function VS(r,e){const n=Rs(r,0),s=Rs(e,0);for(let l=0;l<n.length&&l<s.length;l++){const u=Or(n[l],s[l]);if(u!==0)return u}return n.length===s.length?0:n.length<s.length?-1:1}function nd(r,e){if(tr(r)!==tr(e))return!1;for(let n=r.pieceNum_,s=e.pieceNum_;n<=r.pieces_.length;n++,s++)if(r.pieces_[n]!==e.pieces_[s])return!1;return!0}function xt(r,e){let n=r.pieceNum_,s=e.pieceNum_;if(tr(r)>tr(e))return!1;for(;n<r.pieces_.length;){if(r.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class $S{constructor(e,n){this.errorPrefix_=n,this.parts_=Rs(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Dl(this.parts_[s]);o_(this)}}function HS(r,e){r.parts_.length>0&&(r.byteLength_+=1),r.parts_.push(e),r.byteLength_+=Dl(e),o_(r)}function GS(r){const e=r.parts_.pop();r.byteLength_-=Dl(e),r.parts_.length>0&&(r.byteLength_-=1)}function o_(r){if(r.byteLength_>Im)throw new Error(r.errorPrefix_+"has a key path longer than "+Im+" bytes ("+r.byteLength_+").");if(r.parts_.length>Sm)throw new Error(r.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Sm+") or object contains a cycle "+yr(r))}function yr(r){return r.parts_.length===0?"":"in property '"+r.parts_.join(".")+"'"}/**
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
 */class rd extends i_{static getInstance(){return new rd}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return D(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const fs=1e3,qS=60*5*1e3,Cm=30*1e3,KS=1.3,QS=3e4,YS="server_kill",Tm=3;class En extends r_{constructor(e,n,s,l,u,d,f,p){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=l,this.onServerInfoUpdate_=u,this.authTokenProvider_=d,this.appCheckTokenProvider_=f,this.authOverride_=p,this.id=En.nextPersistentConnectionId_++,this.log_=Ms("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=fs,this.maxReconnectDelay_=qS,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p&&!kg())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");rd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&fl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const l=++this.requestNumber_,u={r:l,a:e,b:n};this.log_(Ge(u)),D(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(u),s&&(this.requestCBHash_[l]=s)}get(e){this.initConnection_();const n=new Ds,l={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:d=>{const f=d.d;d.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(l),this.outstandingGetCount_++;const u=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(u),n.promise}listen(e,n,s,l){this.initConnection_();const u=e._queryIdentifier,d=e._path.toString();this.log_("Listen called for "+d+" "+u),this.listens.has(d)||this.listens.set(d,new Map),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),D(!this.listens.get(d).has(u),"listen() called twice for same path/queryId.");const f={onComplete:l,hashFn:n,query:e,tag:s};this.listens.get(d).set(u,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),l=n._queryIdentifier;this.log_("Listen on "+s+" for "+l);const u={p:s},d="q";e.tag&&(u.q=n._queryObject,u.t=e.tag),u.h=e.hashFn(),this.sendRequest(d,u,f=>{const p=f.d,g=f.s;En.warnOnListenWarnings_(p,n),(this.listens.get(s)&&this.listens.get(s).get(l))===e&&(this.log_("listen response",f),g!=="ok"&&this.removeListen_(s,l),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&on(e,"w")){const s=fi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const l='".indexOn": "'+n._queryParams.getIndex().toString()+'"',u=n._path.toString();ot(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${l} at ${u} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Fw(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Cm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=bw(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,l=>{const u=l.s,d=l.d||"error";this.authToken_===e&&(u==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(u,d))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),l=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+l),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,l)&&this.connected_&&this.sendUnlisten_(s,l,e._queryObject,n)}sendUnlisten_(e,n,s,l){this.log_("Unlisten on "+e+" for "+n);const u={p:e},d="n";l&&(u.q=s,u.t=l),this.sendRequest(d,u)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,l){const u={p:n,d:s};this.log_("onDisconnect "+e,u),this.sendRequest(e,u,d=>{l&&setTimeout(()=>{l(d.s,d.d)},Math.floor(0))})}put(e,n,s,l){this.putInternal("p",e,n,s,l)}merge(e,n,s,l){this.putInternal("m",e,n,s,l)}putInternal(e,n,s,l,u){this.initConnection_();const d={p:n,d:s};u!==void 0&&(d.h=u),this.outstandingPuts_.push({action:e,request:d,onComplete:l}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,l=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,u=>{this.log_(n+" response",u),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),l&&l(u.s,u.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const u=s.d;this.log_("reportStats","Error sending stats: "+u)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ge(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Cc("Unrecognized action received from server: "+Ge(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){D(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=fs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=fs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>QS&&(this.reconnectDelay_=fs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*KS)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),l=this.id+":"+En.nextConnectionId_++,u=this.lastSessionId;let d=!1,f=null;const p=function(){f?f.close():(d=!0,s())},g=function(v){D(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(v)};this.realtime_={close:p,sendRequest:g};const w=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[v,S]=await Promise.all([this.authTokenProvider_.getToken(w),this.appCheckTokenProvider_.getToken(w)]);d?Qe("getToken() completed but was canceled"):(Qe("getToken() completed. Creating connection."),this.authToken_=v&&v.accessToken,this.appCheckToken_=S&&S.token,f=new WS(l,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,A=>{ot(A+" ("+this.repoInfo_.toString()+")"),this.interrupt(YS)},u))}catch(v){this.log_("Failed to get token: "+v),d||(this.repoInfo_.nodeAdmin&&ot(v),p())}}}interrupt(e){Qe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Qe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],vc(this.interruptReasons_)&&(this.reconnectDelay_=fs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(u=>Xc(u)).join("$"):s="default";const l=this.removeListen_(e,s);l&&l.onComplete&&l.onComplete("permission_denied")}removeListen_(e,n){const s=new fe(e).toString();let l;if(this.listens.has(s)){const u=this.listens.get(s);l=u.get(n),u.delete(n),u.size===0&&this.listens.delete(s)}else l=void 0;return l}onAuthRevoked_(e,n){Qe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Tm&&(this.reconnectDelay_=Cm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Qe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Tm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+bg.replace(/\./g,"-")]=1,qc()?e["framework.cordova"]=1:Tg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=fl.getInstance().currentlyOnline();return vc(this.interruptReasons_)&&e}}En.nextPersistentConnectionId_=0;En.nextConnectionId_=0;/**
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
 */class ee{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ee(e,n)}}/**
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
 */class Ml{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ee(pi,e),l=new ee(pi,n);return this.compare(s,l)!==0}minPost(){return ee.MIN}}/**
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
 */let el;class l_ extends Ml{static get __EMPTY_NODE(){return el}static set __EMPTY_NODE(e){el=e}compare(e,n){return Or(e.name,n.name)}isDefinedOn(e){throw yi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ee.MIN}maxPost(){return new ee(Sr,el)}makePost(e,n){return D(typeof e=="string","KeyIndex indexValue must always be a string."),new ee(e,el)}toString(){return".key"}}const ai=new l_;/**
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
 */class tl{constructor(e,n,s,l,u=null){this.isReverse_=l,this.resultGenerator_=u,this.nodeStack_=[];let d=1;for(;!e.isEmpty();)if(e=e,d=n?s(e.key,n):1,l&&(d*=-1),d<0)this.isReverse_?e=e.left:e=e.right;else if(d===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class $e{constructor(e,n,s,l,u){this.key=e,this.value=n,this.color=s??$e.RED,this.left=l??gt.EMPTY_NODE,this.right=u??gt.EMPTY_NODE}copy(e,n,s,l,u){return new $e(e??this.key,n??this.value,s??this.color,l??this.left,u??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let l=this;const u=s(e,l.key);return u<0?l=l.copy(null,null,null,l.left.insert(e,n,s),null):u===0?l=l.copy(null,n,null,null,null):l=l.copy(null,null,null,null,l.right.insert(e,n,s)),l.fixUp_()}removeMin_(){if(this.left.isEmpty())return gt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,l;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return gt.EMPTY_NODE;l=s.right.min_(),s=s.copy(l.key,l.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}$e.RED=!0;$e.BLACK=!1;class XS{copy(e,n,s,l,u){return this}insert(e,n,s){return new $e(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class gt{constructor(e,n=gt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new gt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,$e.BLACK,null,null))}remove(e){return new gt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,$e.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,l=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return l?l.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(l=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new tl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new tl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new tl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new tl(this.root_,null,this.comparator_,!0,e)}}gt.EMPTY_NODE=new XS;/**
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
 */function JS(r,e){return Or(r.name,e.name)}function id(r,e){return Or(r,e)}/**
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
 */let kc;function ZS(r){kc=r}const a_=function(r){return typeof r=="number"?"number:"+jg(r):"string:"+r},u_=function(r){if(r.isLeafNode()){const e=r.val();D(typeof e=="string"||typeof e=="number"||typeof e=="object"&&on(e,".sv"),"Priority must be a string or number.")}else D(r===kc||r.isEmpty(),"priority of unexpected type.");D(r===kc||r.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let km;class Be{static set __childrenNodeConstructor(e){km=e}static get __childrenNodeConstructor(){return km}constructor(e,n=Be.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,D(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),u_(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Be(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Be.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ne(e)?this:Z(e)===".priority"?this.priorityNode_:Be.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Be.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=Z(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(D(s!==".priority"||tr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Be.__childrenNodeConstructor.EMPTY_NODE.updateChild(ve(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+a_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=jg(this.value_):e+=this.value_,this.lazyHash_=Ug(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Be.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Be.__childrenNodeConstructor?-1:(D(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,l=Be.VALUE_TYPE_ORDER.indexOf(n),u=Be.VALUE_TYPE_ORDER.indexOf(s);return D(l>=0,"Unknown leaf type: "+n),D(u>=0,"Unknown leaf type: "+s),l===u?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:u-l}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Be.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let c_,d_;function eI(r){c_=r}function tI(r){d_=r}class nI extends Ml{compare(e,n){const s=e.node.getPriority(),l=n.node.getPriority(),u=s.compareTo(l);return u===0?Or(e.name,n.name):u}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ee.MIN}maxPost(){return new ee(Sr,new Be("[PRIORITY-POST]",d_))}makePost(e,n){const s=c_(e);return new ee(n,new Be("[PRIORITY-POST]",s))}toString(){return".priority"}}const Pe=new nI;/**
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
 */const rI=Math.log(2);class iI{constructor(e){const n=u=>parseInt(Math.log(u)/rI,10),s=u=>parseInt(Array(u+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const l=s(this.count);this.bits_=e+1&l}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const pl=function(r,e,n,s){r.sort(e);const l=function(p,g){const w=g-p;let v,S;if(w===0)return null;if(w===1)return v=r[p],S=n?n(v):v,new $e(S,v.node,$e.BLACK,null,null);{const A=parseInt(w/2,10)+p,L=l(p,A),B=l(A+1,g);return v=r[A],S=n?n(v):v,new $e(S,v.node,$e.BLACK,L,B)}},u=function(p){let g=null,w=null,v=r.length;const S=function(L,B){const H=v-L,Ae=v;v-=L;const Oe=l(H+1,Ae),xe=r[H],pe=n?n(xe):xe;A(new $e(pe,xe.node,B,null,Oe))},A=function(L){g?(g.left=L,g=L):(w=L,g=L)};for(let L=0;L<p.count;++L){const B=p.nextBitIsOne(),H=Math.pow(2,p.count-(L+1));B?S(H,$e.BLACK):(S(H,$e.BLACK),S(H,$e.RED))}return w},d=new iI(r.length),f=u(d);return new gt(s||e,f)};/**
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
 */let uc;const ii={};class _n{static get Default(){return D(ii&&Pe,"ChildrenNode.ts has not been loaded"),uc=uc||new _n({".priority":ii},{".priority":Pe}),uc}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=fi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof gt?n:null}hasIndex(e){return on(this.indexSet_,e.toString())}addIndex(e,n){D(e!==ai,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let l=!1;const u=n.getIterator(ee.Wrap);let d=u.getNext();for(;d;)l=l||e.isDefinedOn(d.node),s.push(d),d=u.getNext();let f;l?f=pl(s,e.getCompare()):f=ii;const p=e.toString(),g=Object.assign({},this.indexSet_);g[p]=e;const w=Object.assign({},this.indexes_);return w[p]=f,new _n(w,g)}addToIndexes(e,n){const s=cl(this.indexes_,(l,u)=>{const d=fi(this.indexSet_,u);if(D(d,"Missing index implementation for "+u),l===ii)if(d.isDefinedOn(e.node)){const f=[],p=n.getIterator(ee.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&f.push(g),g=p.getNext();return f.push(e),pl(f,d.getCompare())}else return ii;else{const f=n.get(e.name);let p=l;return f&&(p=p.remove(new ee(e.name,f))),p.insert(e,e.node)}});return new _n(s,this.indexSet_)}removeFromIndexes(e,n){const s=cl(this.indexes_,l=>{if(l===ii)return l;{const u=n.get(e.name);return u?l.remove(new ee(e.name,u)):l}});return new _n(s,this.indexSet_)}}/**
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
 */let ps;class q{static get EMPTY_NODE(){return ps||(ps=new q(new gt(id),null,_n.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&u_(this.priorityNode_),this.children_.isEmpty()&&D(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ps}updatePriority(e){return this.children_.isEmpty()?this:new q(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ps:n}}getChild(e){const n=Z(e);return n===null?this:this.getImmediateChild(n).getChild(ve(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(D(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ee(e,n);let l,u;n.isEmpty()?(l=this.children_.remove(e),u=this.indexMap_.removeFromIndexes(s,this.children_)):(l=this.children_.insert(e,n),u=this.indexMap_.addToIndexes(s,this.children_));const d=l.isEmpty()?ps:this.priorityNode_;return new q(l,d,u)}}updateChild(e,n){const s=Z(e);if(s===null)return n;{D(Z(e)!==".priority"||tr(e)===1,".priority must be the last token in a path");const l=this.getImmediateChild(s).updateChild(ve(e),n);return this.updateImmediateChild(s,l)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,l=0,u=!0;if(this.forEachChild(Pe,(d,f)=>{n[d]=f.val(e),s++,u&&q.INTEGER_REGEXP_.test(d)?l=Math.max(l,Number(d)):u=!1}),!e&&u&&l<2*s){const d=[];for(const f in n)d[f]=n[f];return d}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+a_(this.getPriority().val())+":"),this.forEachChild(Pe,(n,s)=>{const l=s.hash();l!==""&&(e+=":"+n+":"+l)}),this.lazyHash_=e===""?"":Ug(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const l=this.resolveIndex_(s);if(l){const u=l.getPredecessorKey(new ee(e,n));return u?u.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ee(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ee(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(l=>n(l.name,l.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,l=>l);{const l=this.children_.getIteratorFrom(e.name,ee.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)<0;)l.getNext(),u=l.peek();return l}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,l=>l);{const l=this.children_.getReverseIteratorFrom(e.name,ee.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)>0;)l.getNext(),u=l.peek();return l}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===bs?-1:0}withIndex(e){if(e===ai||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new q(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ai||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Pe),l=n.getIterator(Pe);let u=s.getNext(),d=l.getNext();for(;u&&d;){if(u.name!==d.name||!u.node.equals(d.node))return!1;u=s.getNext(),d=l.getNext()}return u===null&&d===null}else return!1;else return!1}}resolveIndex_(e){return e===ai?null:this.indexMap_.get(e.toString())}}q.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class sI extends q{constructor(){super(new gt(id),q.EMPTY_NODE,_n.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return q.EMPTY_NODE}isEmpty(){return!1}}const bs=new sI;Object.defineProperties(ee,{MIN:{value:new ee(pi,q.EMPTY_NODE)},MAX:{value:new ee(Sr,bs)}});l_.__EMPTY_NODE=q.EMPTY_NODE;Be.__childrenNodeConstructor=q;ZS(bs);tI(bs);/**
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
 */const oI=!0;function He(r,e=null){if(r===null)return q.EMPTY_NODE;if(typeof r=="object"&&".priority"in r&&(e=r[".priority"]),D(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof r=="object"&&".value"in r&&r[".value"]!==null&&(r=r[".value"]),typeof r!="object"||".sv"in r){const n=r;return new Be(n,He(e))}if(!(r instanceof Array)&&oI){const n=[];let s=!1;if(Ye(r,(d,f)=>{if(d.substring(0,1)!=="."){const p=He(f);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),n.push(new ee(d,p)))}}),n.length===0)return q.EMPTY_NODE;const u=pl(n,JS,d=>d.name,id);if(s){const d=pl(n,Pe.getCompare());return new q(u,He(e),new _n({".priority":d},{".priority":Pe}))}else return new q(u,He(e),_n.Default)}else{let n=q.EMPTY_NODE;return Ye(r,(s,l)=>{if(on(r,s)&&s.substring(0,1)!=="."){const u=He(l);(u.isLeafNode()||!u.isEmpty())&&(n=n.updateImmediateChild(s,u))}}),n.updatePriority(He(e))}}eI(He);/**
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
 */class lI extends Ml{constructor(e){super(),this.indexPath_=e,D(!ne(e)&&Z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),l=this.extractChild(n.node),u=s.compareTo(l);return u===0?Or(e.name,n.name):u}makePost(e,n){const s=He(e),l=q.EMPTY_NODE.updateChild(this.indexPath_,s);return new ee(n,l)}maxPost(){const e=q.EMPTY_NODE.updateChild(this.indexPath_,bs);return new ee(Sr,e)}toString(){return Rs(this.indexPath_,0).join("/")}}/**
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
 */class aI extends Ml{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Or(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ee.MIN}maxPost(){return ee.MAX}makePost(e,n){const s=He(e);return new ee(n,s)}toString(){return".value"}}const uI=new aI;/**
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
 */function h_(r){return{type:"value",snapshotNode:r}}function mi(r,e){return{type:"child_added",snapshotNode:e,childName:r}}function Ns(r,e){return{type:"child_removed",snapshotNode:e,childName:r}}function Ps(r,e,n){return{type:"child_changed",snapshotNode:e,childName:r,oldSnap:n}}function cI(r,e){return{type:"child_moved",snapshotNode:e,childName:r}}/**
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
 */class sd{constructor(e){this.index_=e}updateChild(e,n,s,l,u,d){D(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(n);return f.getChild(l).equals(s.getChild(l))&&f.isEmpty()===s.isEmpty()||(d!=null&&(s.isEmpty()?e.hasChild(n)?d.trackChildChange(Ns(n,f)):D(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?d.trackChildChange(mi(n,s)):d.trackChildChange(Ps(n,s,f))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Pe,(l,u)=>{n.hasChild(l)||s.trackChildChange(Ns(l,u))}),n.isLeafNode()||n.forEachChild(Pe,(l,u)=>{if(e.hasChild(l)){const d=e.getImmediateChild(l);d.equals(u)||s.trackChildChange(Ps(l,u,d))}else s.trackChildChange(mi(l,u))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?q.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class As{constructor(e){this.indexedFilter_=new sd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=As.getStartPost_(e),this.endPost_=As.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,l,u,d){return this.matches(new ee(n,s))||(s=q.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,l,u,d)}updateFullNode(e,n,s){n.isLeafNode()&&(n=q.EMPTY_NODE);let l=n.withIndex(this.index_);l=l.updatePriority(q.EMPTY_NODE);const u=this;return n.forEachChild(Pe,(d,f)=>{u.matches(new ee(d,f))||(l=l.updateImmediateChild(d,q.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class dI{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new As(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,l,u,d){return this.rangedFilter_.matches(new ee(n,s))||(s=q.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,l,u,d):this.fullLimitUpdateChild_(e,n,s,u,d)}updateFullNode(e,n,s){let l;if(n.isLeafNode()||n.isEmpty())l=q.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){l=q.EMPTY_NODE.withIndex(this.index_);let u;this.reverse_?u=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):u=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let d=0;for(;u.hasNext()&&d<this.limit_;){const f=u.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))l=l.updateImmediateChild(f.name,f.node),d++;else break;else continue}}else{l=n.withIndex(this.index_),l=l.updatePriority(q.EMPTY_NODE);let u;this.reverse_?u=l.getReverseIterator(this.index_):u=l.getIterator(this.index_);let d=0;for(;u.hasNext();){const f=u.getNext();d<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?d++:l=l.updateImmediateChild(f.name,q.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,l,u){let d;if(this.reverse_){const v=this.index_.getCompare();d=(S,A)=>v(A,S)}else d=this.index_.getCompare();const f=e;D(f.numChildren()===this.limit_,"");const p=new ee(n,s),g=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),w=this.rangedFilter_.matches(p);if(f.hasChild(n)){const v=f.getImmediateChild(n);let S=l.getChildAfterChild(this.index_,g,this.reverse_);for(;S!=null&&(S.name===n||f.hasChild(S.name));)S=l.getChildAfterChild(this.index_,S,this.reverse_);const A=S==null?1:d(S,p);if(w&&!s.isEmpty()&&A>=0)return u!=null&&u.trackChildChange(Ps(n,s,v)),f.updateImmediateChild(n,s);{u!=null&&u.trackChildChange(Ns(n,v));const B=f.updateImmediateChild(n,q.EMPTY_NODE);return S!=null&&this.rangedFilter_.matches(S)?(u!=null&&u.trackChildChange(mi(S.name,S.node)),B.updateImmediateChild(S.name,S.node)):B}}else return s.isEmpty()?e:w&&d(g,p)>=0?(u!=null&&(u.trackChildChange(Ns(g.name,g.node)),u.trackChildChange(mi(n,s))),f.updateImmediateChild(n,s).updateImmediateChild(g.name,q.EMPTY_NODE)):e}}/**
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
 */class od{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Pe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return D(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return D(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:pi}hasEnd(){return this.endSet_}getIndexEndValue(){return D(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return D(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Sr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return D(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Pe}copy(){const e=new od;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function hI(r){return r.loadsAllData()?new sd(r.getIndex()):r.hasLimit()?new dI(r):new As(r)}function Rm(r){const e={};if(r.isDefault())return e;let n;if(r.index_===Pe?n="$priority":r.index_===uI?n="$value":r.index_===ai?n="$key":(D(r.index_ instanceof lI,"Unrecognized index type!"),n=r.index_.toString()),e.orderBy=Ge(n),r.startSet_){const s=r.startAfterSet_?"startAfter":"startAt";e[s]=Ge(r.indexStartValue_),r.startNameSet_&&(e[s]+=","+Ge(r.indexStartName_))}if(r.endSet_){const s=r.endBeforeSet_?"endBefore":"endAt";e[s]=Ge(r.indexEndValue_),r.endNameSet_&&(e[s]+=","+Ge(r.indexEndName_))}return r.limitSet_&&(r.isViewFromLeft()?e.limitToFirst=r.limit_:e.limitToLast=r.limit_),e}function Nm(r){const e={};if(r.startSet_&&(e.sp=r.indexStartValue_,r.startNameSet_&&(e.sn=r.indexStartName_),e.sin=!r.startAfterSet_),r.endSet_&&(e.ep=r.indexEndValue_,r.endNameSet_&&(e.en=r.indexEndName_),e.ein=!r.endBeforeSet_),r.limitSet_){e.l=r.limit_;let n=r.viewFrom_;n===""&&(r.isViewFromLeft()?n="l":n="r"),e.vf=n}return r.index_!==Pe&&(e.i=r.index_.toString()),e}/**
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
 */class ml extends r_{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(D(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,l){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=l,this.log_=Ms("p:rest:"),this.listens_={}}listen(e,n,s,l){const u=e._path.toString();this.log_("Listen called for "+u+" "+e._queryIdentifier);const d=ml.getListenId_(e,s),f={};this.listens_[d]=f;const p=Rm(e._queryParams);this.restRequest_(u+".json",p,(g,w)=>{let v=w;if(g===404&&(v=null,g=null),g===null&&this.onDataUpdate_(u,v,!1,s),fi(this.listens_,d)===f){let S;g?g===401?S="permission_denied":S="rest_error:"+g:S="ok",l(S,null)}})}unlisten(e,n){const s=ml.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Rm(e._queryParams),s=e._path.toString(),l=new Ds;return this.restRequest_(s+".json",n,(u,d)=>{let f=d;u===404&&(f=null,u=null),u===null?(this.onDataUpdate_(s,f,!1,null),l.resolve(f)):l.reject(new Error(f))}),l.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([l,u])=>{l&&l.accessToken&&(n.auth=l.accessToken),u&&u.token&&(n.ac=u.token);const d=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+wi(n);this.log_("Sending REST request for "+d);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(s&&f.readyState===4){this.log_("REST Response for "+d+" received. status:",f.status,"response:",f.responseText);let p=null;if(f.status>=200&&f.status<300){try{p=Is(f.responseText)}catch{ot("Failed to parse JSON response for "+d+": "+f.responseText)}s(null,p)}else f.status!==401&&f.status!==404&&ot("Got unsuccessful REST response for "+d+" Status: "+f.status),s(f.status);s=null}},f.open("GET",d,!0),f.send()})}}/**
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
 */class fI{constructor(){this.rootNode_=q.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function gl(){return{value:null,children:new Map}}function f_(r,e,n){if(ne(e))r.value=n,r.children.clear();else if(r.value!==null)r.value=r.value.updateChild(e,n);else{const s=Z(e);r.children.has(s)||r.children.set(s,gl());const l=r.children.get(s);e=ve(e),f_(l,e,n)}}function Rc(r,e,n){r.value!==null?n(e,r.value):pI(r,(s,l)=>{const u=new fe(e.toString()+"/"+s);Rc(l,u,n)})}function pI(r,e){r.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class mI{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ye(this.last_,(s,l)=>{n[s]=n[s]-l}),this.last_=e,n}}/**
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
 */const Pm=10*1e3,gI=30*1e3,_I=5*60*1e3;class vI{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new mI(e);const s=Pm+(gI-Pm)*Math.random();_s(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ye(e,(l,u)=>{u>0&&on(this.statsToReport_,l)&&(n[l]=u,s=!0)}),s&&this.server_.reportStats(n),_s(this.reportStats_.bind(this),Math.floor(Math.random()*2*_I))}}/**
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
 */var Vt;(function(r){r[r.OVERWRITE=0]="OVERWRITE",r[r.MERGE=1]="MERGE",r[r.ACK_USER_WRITE=2]="ACK_USER_WRITE",r[r.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Vt||(Vt={}));function ld(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ad(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ud(r){return{fromUser:!1,fromServer:!0,queryId:r,tagged:!0}}/**
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
 */class _l{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Vt.ACK_USER_WRITE,this.source=ld()}operationForChild(e){if(ne(this.path)){if(this.affectedTree.value!=null)return D(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new fe(e));return new _l(ue(),n,this.revert)}}else return D(Z(this.path)===e,"operationForChild called for unrelated child."),new _l(ve(this.path),this.affectedTree,this.revert)}}/**
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
 */class Os{constructor(e,n){this.source=e,this.path=n,this.type=Vt.LISTEN_COMPLETE}operationForChild(e){return ne(this.path)?new Os(this.source,ue()):new Os(this.source,ve(this.path))}}/**
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
 */class Ir{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Vt.OVERWRITE}operationForChild(e){return ne(this.path)?new Ir(this.source,ue(),this.snap.getImmediateChild(e)):new Ir(this.source,ve(this.path),this.snap)}}/**
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
 */class gi{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Vt.MERGE}operationForChild(e){if(ne(this.path)){const n=this.children.subtree(new fe(e));return n.isEmpty()?null:n.value?new Ir(this.source,ue(),n.value):new gi(this.source,ue(),n)}else return D(Z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new gi(this.source,ve(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Cr{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ne(e))return this.isFullyInitialized()&&!this.filtered_;const n=Z(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class yI{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function wI(r,e,n,s){const l=[],u=[];return e.forEach(d=>{d.type==="child_changed"&&r.index_.indexedValueChanged(d.oldSnap,d.snapshotNode)&&u.push(cI(d.childName,d.snapshotNode))}),ms(r,l,"child_removed",e,s,n),ms(r,l,"child_added",e,s,n),ms(r,l,"child_moved",u,s,n),ms(r,l,"child_changed",e,s,n),ms(r,l,"value",e,s,n),l}function ms(r,e,n,s,l,u){const d=s.filter(f=>f.type===n);d.sort((f,p)=>SI(r,f,p)),d.forEach(f=>{const p=EI(r,f,u);l.forEach(g=>{g.respondsTo(f.type)&&e.push(g.createEvent(p,r.query_))})})}function EI(r,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,r.index_)),e}function SI(r,e,n){if(e.childName==null||n.childName==null)throw yi("Should only compare child_ events.");const s=new ee(e.childName,e.snapshotNode),l=new ee(n.childName,n.snapshotNode);return r.index_.compare(s,l)}/**
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
 */function bl(r,e){return{eventCache:r,serverCache:e}}function vs(r,e,n,s){return bl(new Cr(e,n,s),r.serverCache)}function p_(r,e,n,s){return bl(r.eventCache,new Cr(e,n,s))}function Nc(r){return r.eventCache.isFullyInitialized()?r.eventCache.getNode():null}function Tr(r){return r.serverCache.isFullyInitialized()?r.serverCache.getNode():null}/**
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
 */let cc;const II=()=>(cc||(cc=new gt(lS)),cc);class _e{static fromObject(e){let n=new _e(null);return Ye(e,(s,l)=>{n=n.set(new fe(s),l)}),n}constructor(e,n=II()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ue(),value:this.value};if(ne(e))return null;{const s=Z(e),l=this.children.get(s);if(l!==null){const u=l.findRootMostMatchingPathAndValue(ve(e),n);return u!=null?{path:Ne(new fe(s),u.path),value:u.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ne(e))return this;{const n=Z(e),s=this.children.get(n);return s!==null?s.subtree(ve(e)):new _e(null)}}set(e,n){if(ne(e))return new _e(n,this.children);{const s=Z(e),u=(this.children.get(s)||new _e(null)).set(ve(e),n),d=this.children.insert(s,u);return new _e(this.value,d)}}remove(e){if(ne(e))return this.children.isEmpty()?new _e(null):new _e(null,this.children);{const n=Z(e),s=this.children.get(n);if(s){const l=s.remove(ve(e));let u;return l.isEmpty()?u=this.children.remove(n):u=this.children.insert(n,l),this.value===null&&u.isEmpty()?new _e(null):new _e(this.value,u)}else return this}}get(e){if(ne(e))return this.value;{const n=Z(e),s=this.children.get(n);return s?s.get(ve(e)):null}}setTree(e,n){if(ne(e))return n;{const s=Z(e),u=(this.children.get(s)||new _e(null)).setTree(ve(e),n);let d;return u.isEmpty()?d=this.children.remove(s):d=this.children.insert(s,u),new _e(this.value,d)}}fold(e){return this.fold_(ue(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((l,u)=>{s[l]=u.fold_(Ne(e,l),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ue(),n)}findOnPath_(e,n,s){const l=this.value?s(n,this.value):!1;if(l)return l;if(ne(e))return null;{const u=Z(e),d=this.children.get(u);return d?d.findOnPath_(ve(e),Ne(n,u),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ue(),n)}foreachOnPath_(e,n,s){if(ne(e))return this;{this.value&&s(n,this.value);const l=Z(e),u=this.children.get(l);return u?u.foreachOnPath_(ve(e),Ne(n,l),s):new _e(null)}}foreach(e){this.foreach_(ue(),e)}foreach_(e,n){this.children.inorderTraversal((s,l)=>{l.foreach_(Ne(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class $t{constructor(e){this.writeTree_=e}static empty(){return new $t(new _e(null))}}function ys(r,e,n){if(ne(e))return new $t(new _e(n));{const s=r.writeTree_.findRootMostValueAndPath(e);if(s!=null){const l=s.path;let u=s.value;const d=mt(l,e);return u=u.updateChild(d,n),new $t(r.writeTree_.set(l,u))}else{const l=new _e(n),u=r.writeTree_.setTree(e,l);return new $t(u)}}}function Pc(r,e,n){let s=r;return Ye(n,(l,u)=>{s=ys(s,Ne(e,l),u)}),s}function Am(r,e){if(ne(e))return $t.empty();{const n=r.writeTree_.setTree(e,new _e(null));return new $t(n)}}function Ac(r,e){return xr(r,e)!=null}function xr(r,e){const n=r.writeTree_.findRootMostValueAndPath(e);return n!=null?r.writeTree_.get(n.path).getChild(mt(n.path,e)):null}function Om(r){const e=[],n=r.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Pe,(s,l)=>{e.push(new ee(s,l))}):r.writeTree_.children.inorderTraversal((s,l)=>{l.value!=null&&e.push(new ee(s,l.value))}),e}function Zn(r,e){if(ne(e))return r;{const n=xr(r,e);return n!=null?new $t(new _e(n)):new $t(r.writeTree_.subtree(e))}}function Oc(r){return r.writeTree_.isEmpty()}function _i(r,e){return m_(ue(),r.writeTree_,e)}function m_(r,e,n){if(e.value!=null)return n.updateChild(r,e.value);{let s=null;return e.children.inorderTraversal((l,u)=>{l===".priority"?(D(u.value!==null,"Priority writes must always be leaf nodes"),s=u.value):n=m_(Ne(r,l),u,n)}),!n.getChild(r).isEmpty()&&s!==null&&(n=n.updateChild(Ne(r,".priority"),s)),n}}/**
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
 */function cd(r,e){return y_(e,r)}function CI(r,e,n,s,l){D(s>r.lastWriteId,"Stacking an older write on top of newer ones"),l===void 0&&(l=!0),r.allWrites.push({path:e,snap:n,writeId:s,visible:l}),l&&(r.visibleWrites=ys(r.visibleWrites,e,n)),r.lastWriteId=s}function TI(r,e,n,s){D(s>r.lastWriteId,"Stacking an older merge on top of newer ones"),r.allWrites.push({path:e,children:n,writeId:s,visible:!0}),r.visibleWrites=Pc(r.visibleWrites,e,n),r.lastWriteId=s}function kI(r,e){for(let n=0;n<r.allWrites.length;n++){const s=r.allWrites[n];if(s.writeId===e)return s}return null}function RI(r,e){const n=r.allWrites.findIndex(f=>f.writeId===e);D(n>=0,"removeWrite called with nonexistent writeId.");const s=r.allWrites[n];r.allWrites.splice(n,1);let l=s.visible,u=!1,d=r.allWrites.length-1;for(;l&&d>=0;){const f=r.allWrites[d];f.visible&&(d>=n&&NI(f,s.path)?l=!1:xt(s.path,f.path)&&(u=!0)),d--}if(l){if(u)return PI(r),!0;if(s.snap)r.visibleWrites=Am(r.visibleWrites,s.path);else{const f=s.children;Ye(f,p=>{r.visibleWrites=Am(r.visibleWrites,Ne(s.path,p))})}return!0}else return!1}function NI(r,e){if(r.snap)return xt(r.path,e);for(const n in r.children)if(r.children.hasOwnProperty(n)&&xt(Ne(r.path,n),e))return!0;return!1}function PI(r){r.visibleWrites=g_(r.allWrites,AI,ue()),r.allWrites.length>0?r.lastWriteId=r.allWrites[r.allWrites.length-1].writeId:r.lastWriteId=-1}function AI(r){return r.visible}function g_(r,e,n){let s=$t.empty();for(let l=0;l<r.length;++l){const u=r[l];if(e(u)){const d=u.path;let f;if(u.snap)xt(n,d)?(f=mt(n,d),s=ys(s,f,u.snap)):xt(d,n)&&(f=mt(d,n),s=ys(s,ue(),u.snap.getChild(f)));else if(u.children){if(xt(n,d))f=mt(n,d),s=Pc(s,f,u.children);else if(xt(d,n))if(f=mt(d,n),ne(f))s=Pc(s,ue(),u.children);else{const p=fi(u.children,Z(f));if(p){const g=p.getChild(ve(f));s=ys(s,ue(),g)}}}else throw yi("WriteRecord should have .snap or .children")}}return s}function __(r,e,n,s,l){if(!s&&!l){const u=xr(r.visibleWrites,e);if(u!=null)return u;{const d=Zn(r.visibleWrites,e);if(Oc(d))return n;if(n==null&&!Ac(d,ue()))return null;{const f=n||q.EMPTY_NODE;return _i(d,f)}}}else{const u=Zn(r.visibleWrites,e);if(!l&&Oc(u))return n;if(!l&&n==null&&!Ac(u,ue()))return null;{const d=function(g){return(g.visible||l)&&(!s||!~s.indexOf(g.writeId))&&(xt(g.path,e)||xt(e,g.path))},f=g_(r.allWrites,d,e),p=n||q.EMPTY_NODE;return _i(f,p)}}}function OI(r,e,n){let s=q.EMPTY_NODE;const l=xr(r.visibleWrites,e);if(l)return l.isLeafNode()||l.forEachChild(Pe,(u,d)=>{s=s.updateImmediateChild(u,d)}),s;if(n){const u=Zn(r.visibleWrites,e);return n.forEachChild(Pe,(d,f)=>{const p=_i(Zn(u,new fe(d)),f);s=s.updateImmediateChild(d,p)}),Om(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}else{const u=Zn(r.visibleWrites,e);return Om(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}}function xI(r,e,n,s,l){D(s||l,"Either existingEventSnap or existingServerSnap must exist");const u=Ne(e,n);if(Ac(r.visibleWrites,u))return null;{const d=Zn(r.visibleWrites,u);return Oc(d)?l.getChild(n):_i(d,l.getChild(n))}}function DI(r,e,n,s){const l=Ne(e,n),u=xr(r.visibleWrites,l);if(u!=null)return u;if(s.isCompleteForChild(n)){const d=Zn(r.visibleWrites,l);return _i(d,s.getNode().getImmediateChild(n))}else return null}function LI(r,e){return xr(r.visibleWrites,e)}function MI(r,e,n,s,l,u,d){let f;const p=Zn(r.visibleWrites,e),g=xr(p,ue());if(g!=null)f=g;else if(n!=null)f=_i(p,n);else return[];if(f=f.withIndex(d),!f.isEmpty()&&!f.isLeafNode()){const w=[],v=d.getCompare(),S=u?f.getReverseIteratorFrom(s,d):f.getIteratorFrom(s,d);let A=S.getNext();for(;A&&w.length<l;)v(A,s)!==0&&w.push(A),A=S.getNext();return w}else return[]}function bI(){return{visibleWrites:$t.empty(),allWrites:[],lastWriteId:-1}}function vl(r,e,n,s){return __(r.writeTree,r.treePath,e,n,s)}function dd(r,e){return OI(r.writeTree,r.treePath,e)}function xm(r,e,n,s){return xI(r.writeTree,r.treePath,e,n,s)}function yl(r,e){return LI(r.writeTree,Ne(r.treePath,e))}function FI(r,e,n,s,l,u){return MI(r.writeTree,r.treePath,e,n,s,l,u)}function hd(r,e,n){return DI(r.writeTree,r.treePath,e,n)}function v_(r,e){return y_(Ne(r.treePath,e),r.writeTree)}function y_(r,e){return{treePath:r,writeTree:e}}/**
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
 */class UI{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;D(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),D(s!==".priority","Only non-priority child changes can be tracked.");const l=this.changeMap.get(s);if(l){const u=l.type;if(n==="child_added"&&u==="child_removed")this.changeMap.set(s,Ps(s,e.snapshotNode,l.snapshotNode));else if(n==="child_removed"&&u==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&u==="child_changed")this.changeMap.set(s,Ns(s,l.oldSnap));else if(n==="child_changed"&&u==="child_added")this.changeMap.set(s,mi(s,e.snapshotNode));else if(n==="child_changed"&&u==="child_changed")this.changeMap.set(s,Ps(s,e.snapshotNode,l.oldSnap));else throw yi("Illegal combination of changes: "+e+" occurred after "+l)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class zI{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const w_=new zI;class fd{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Cr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return hd(this.writes_,e,s)}}getChildAfterChild(e,n,s){const l=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Tr(this.viewCache_),u=FI(this.writes_,l,n,1,s,e);return u.length===0?null:u[0]}}/**
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
 */function jI(r){return{filter:r}}function WI(r,e){D(e.eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),D(e.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed")}function BI(r,e,n,s,l){const u=new UI;let d,f;if(n.type===Vt.OVERWRITE){const g=n;g.source.fromUser?d=xc(r,e,g.path,g.snap,s,l,u):(D(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered()&&!ne(g.path),d=wl(r,e,g.path,g.snap,s,l,f,u))}else if(n.type===Vt.MERGE){const g=n;g.source.fromUser?d=$I(r,e,g.path,g.children,s,l,u):(D(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered(),d=Dc(r,e,g.path,g.children,s,l,f,u))}else if(n.type===Vt.ACK_USER_WRITE){const g=n;g.revert?d=qI(r,e,g.path,s,l,u):d=HI(r,e,g.path,g.affectedTree,s,l,u)}else if(n.type===Vt.LISTEN_COMPLETE)d=GI(r,e,n.path,s,u);else throw yi("Unknown operation type: "+n.type);const p=u.getChanges();return VI(e,d,p),{viewCache:d,changes:p}}function VI(r,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const l=s.getNode().isLeafNode()||s.getNode().isEmpty(),u=Nc(r);(n.length>0||!r.eventCache.isFullyInitialized()||l&&!s.getNode().equals(u)||!s.getNode().getPriority().equals(u.getPriority()))&&n.push(h_(Nc(e)))}}function E_(r,e,n,s,l,u){const d=e.eventCache;if(yl(s,n)!=null)return e;{let f,p;if(ne(n))if(D(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=Tr(e),w=g instanceof q?g:q.EMPTY_NODE,v=dd(s,w);f=r.filter.updateFullNode(e.eventCache.getNode(),v,u)}else{const g=vl(s,Tr(e));f=r.filter.updateFullNode(e.eventCache.getNode(),g,u)}else{const g=Z(n);if(g===".priority"){D(tr(n)===1,"Can't have a priority with additional path components");const w=d.getNode();p=e.serverCache.getNode();const v=xm(s,n,w,p);v!=null?f=r.filter.updatePriority(w,v):f=d.getNode()}else{const w=ve(n);let v;if(d.isCompleteForChild(g)){p=e.serverCache.getNode();const S=xm(s,n,d.getNode(),p);S!=null?v=d.getNode().getImmediateChild(g).updateChild(w,S):v=d.getNode().getImmediateChild(g)}else v=hd(s,g,e.serverCache);v!=null?f=r.filter.updateChild(d.getNode(),g,v,w,l,u):f=d.getNode()}}return vs(e,f,d.isFullyInitialized()||ne(n),r.filter.filtersNodes())}}function wl(r,e,n,s,l,u,d,f){const p=e.serverCache;let g;const w=d?r.filter:r.filter.getIndexedFilter();if(ne(n))g=w.updateFullNode(p.getNode(),s,null);else if(w.filtersNodes()&&!p.isFiltered()){const A=p.getNode().updateChild(n,s);g=w.updateFullNode(p.getNode(),A,null)}else{const A=Z(n);if(!p.isCompleteForPath(n)&&tr(n)>1)return e;const L=ve(n),H=p.getNode().getImmediateChild(A).updateChild(L,s);A===".priority"?g=w.updatePriority(p.getNode(),H):g=w.updateChild(p.getNode(),A,H,L,w_,null)}const v=p_(e,g,p.isFullyInitialized()||ne(n),w.filtersNodes()),S=new fd(l,v,u);return E_(r,v,n,l,S,f)}function xc(r,e,n,s,l,u,d){const f=e.eventCache;let p,g;const w=new fd(l,e,u);if(ne(n))g=r.filter.updateFullNode(e.eventCache.getNode(),s,d),p=vs(e,g,!0,r.filter.filtersNodes());else{const v=Z(n);if(v===".priority")g=r.filter.updatePriority(e.eventCache.getNode(),s),p=vs(e,g,f.isFullyInitialized(),f.isFiltered());else{const S=ve(n),A=f.getNode().getImmediateChild(v);let L;if(ne(S))L=s;else{const B=w.getCompleteChild(v);B!=null?td(S)===".priority"&&B.getChild(s_(S)).isEmpty()?L=B:L=B.updateChild(S,s):L=q.EMPTY_NODE}if(A.equals(L))p=e;else{const B=r.filter.updateChild(f.getNode(),v,L,S,w,d);p=vs(e,B,f.isFullyInitialized(),r.filter.filtersNodes())}}}return p}function Dm(r,e){return r.eventCache.isCompleteForChild(e)}function $I(r,e,n,s,l,u,d){let f=e;return s.foreach((p,g)=>{const w=Ne(n,p);Dm(e,Z(w))&&(f=xc(r,f,w,g,l,u,d))}),s.foreach((p,g)=>{const w=Ne(n,p);Dm(e,Z(w))||(f=xc(r,f,w,g,l,u,d))}),f}function Lm(r,e,n){return n.foreach((s,l)=>{e=e.updateChild(s,l)}),e}function Dc(r,e,n,s,l,u,d,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;ne(n)?g=s:g=new _e(null).setTree(n,s);const w=e.serverCache.getNode();return g.children.inorderTraversal((v,S)=>{if(w.hasChild(v)){const A=e.serverCache.getNode().getImmediateChild(v),L=Lm(r,A,S);p=wl(r,p,new fe(v),L,l,u,d,f)}}),g.children.inorderTraversal((v,S)=>{const A=!e.serverCache.isCompleteForChild(v)&&S.value===null;if(!w.hasChild(v)&&!A){const L=e.serverCache.getNode().getImmediateChild(v),B=Lm(r,L,S);p=wl(r,p,new fe(v),B,l,u,d,f)}}),p}function HI(r,e,n,s,l,u,d){if(yl(l,n)!=null)return e;const f=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(ne(n)&&p.isFullyInitialized()||p.isCompleteForPath(n))return wl(r,e,n,p.getNode().getChild(n),l,u,f,d);if(ne(n)){let g=new _e(null);return p.getNode().forEachChild(ai,(w,v)=>{g=g.set(new fe(w),v)}),Dc(r,e,n,g,l,u,f,d)}else return e}else{let g=new _e(null);return s.foreach((w,v)=>{const S=Ne(n,w);p.isCompleteForPath(S)&&(g=g.set(w,p.getNode().getChild(S)))}),Dc(r,e,n,g,l,u,f,d)}}function GI(r,e,n,s,l){const u=e.serverCache,d=p_(e,u.getNode(),u.isFullyInitialized()||ne(n),u.isFiltered());return E_(r,d,n,s,w_,l)}function qI(r,e,n,s,l,u){let d;if(yl(s,n)!=null)return e;{const f=new fd(s,e,l),p=e.eventCache.getNode();let g;if(ne(n)||Z(n)===".priority"){let w;if(e.serverCache.isFullyInitialized())w=vl(s,Tr(e));else{const v=e.serverCache.getNode();D(v instanceof q,"serverChildren would be complete if leaf node"),w=dd(s,v)}w=w,g=r.filter.updateFullNode(p,w,u)}else{const w=Z(n);let v=hd(s,w,e.serverCache);v==null&&e.serverCache.isCompleteForChild(w)&&(v=p.getImmediateChild(w)),v!=null?g=r.filter.updateChild(p,w,v,ve(n),f,u):e.eventCache.getNode().hasChild(w)?g=r.filter.updateChild(p,w,q.EMPTY_NODE,ve(n),f,u):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(d=vl(s,Tr(e)),d.isLeafNode()&&(g=r.filter.updateFullNode(g,d,u)))}return d=e.serverCache.isFullyInitialized()||yl(s,ue())!=null,vs(e,g,d,r.filter.filtersNodes())}}/**
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
 */class KI{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,l=new sd(s.getIndex()),u=hI(s);this.processor_=jI(u);const d=n.serverCache,f=n.eventCache,p=l.updateFullNode(q.EMPTY_NODE,d.getNode(),null),g=u.updateFullNode(q.EMPTY_NODE,f.getNode(),null),w=new Cr(p,d.isFullyInitialized(),l.filtersNodes()),v=new Cr(g,f.isFullyInitialized(),u.filtersNodes());this.viewCache_=bl(v,w),this.eventGenerator_=new yI(this.query_)}get query(){return this.query_}}function QI(r){return r.viewCache_.serverCache.getNode()}function YI(r,e){const n=Tr(r.viewCache_);return n&&(r.query._queryParams.loadsAllData()||!ne(e)&&!n.getImmediateChild(Z(e)).isEmpty())?n.getChild(e):null}function Mm(r){return r.eventRegistrations_.length===0}function XI(r,e){r.eventRegistrations_.push(e)}function bm(r,e,n){const s=[];if(n){D(e==null,"A cancel should cancel all event registrations.");const l=r.query._path;r.eventRegistrations_.forEach(u=>{const d=u.createCancelEvent(n,l);d&&s.push(d)})}if(e){let l=[];for(let u=0;u<r.eventRegistrations_.length;++u){const d=r.eventRegistrations_[u];if(!d.matches(e))l.push(d);else if(e.hasAnyCallback()){l=l.concat(r.eventRegistrations_.slice(u+1));break}}r.eventRegistrations_=l}else r.eventRegistrations_=[];return s}function Fm(r,e,n,s){e.type===Vt.MERGE&&e.source.queryId!==null&&(D(Tr(r.viewCache_),"We should always have a full cache before handling merges"),D(Nc(r.viewCache_),"Missing event cache, even though we have a server cache"));const l=r.viewCache_,u=BI(r.processor_,l,e,n,s);return WI(r.processor_,u.viewCache),D(u.viewCache.serverCache.isFullyInitialized()||!l.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),r.viewCache_=u.viewCache,S_(r,u.changes,u.viewCache.eventCache.getNode(),null)}function JI(r,e){const n=r.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Pe,(u,d)=>{s.push(mi(u,d))}),n.isFullyInitialized()&&s.push(h_(n.getNode())),S_(r,s,n.getNode(),e)}function S_(r,e,n,s){const l=s?[s]:r.eventRegistrations_;return wI(r.eventGenerator_,e,n,l)}/**
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
 */let El;class ZI{constructor(){this.views=new Map}}function eC(r){D(!El,"__referenceConstructor has already been defined"),El=r}function tC(){return D(El,"Reference.ts has not been loaded"),El}function nC(r){return r.views.size===0}function pd(r,e,n,s){const l=e.source.queryId;if(l!==null){const u=r.views.get(l);return D(u!=null,"SyncTree gave us an op for an invalid query."),Fm(u,e,n,s)}else{let u=[];for(const d of r.views.values())u=u.concat(Fm(d,e,n,s));return u}}function rC(r,e,n,s,l){const u=e._queryIdentifier,d=r.views.get(u);if(!d){let f=vl(n,l?s:null),p=!1;f?p=!0:s instanceof q?(f=dd(n,s),p=!1):(f=q.EMPTY_NODE,p=!1);const g=bl(new Cr(f,p,!1),new Cr(s,l,!1));return new KI(e,g)}return d}function iC(r,e,n,s,l,u){const d=rC(r,e,s,l,u);return r.views.has(e._queryIdentifier)||r.views.set(e._queryIdentifier,d),XI(d,n),JI(d,n)}function sC(r,e,n,s){const l=e._queryIdentifier,u=[];let d=[];const f=nr(r);if(l==="default")for(const[p,g]of r.views.entries())d=d.concat(bm(g,n,s)),Mm(g)&&(r.views.delete(p),g.query._queryParams.loadsAllData()||u.push(g.query));else{const p=r.views.get(l);p&&(d=d.concat(bm(p,n,s)),Mm(p)&&(r.views.delete(l),p.query._queryParams.loadsAllData()||u.push(p.query)))}return f&&!nr(r)&&u.push(new(tC())(e._repo,e._path)),{removed:u,events:d}}function I_(r){const e=[];for(const n of r.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function ui(r,e){let n=null;for(const s of r.views.values())n=n||YI(s,e);return n}function C_(r,e){if(e._queryParams.loadsAllData())return Fl(r);{const s=e._queryIdentifier;return r.views.get(s)}}function T_(r,e){return C_(r,e)!=null}function nr(r){return Fl(r)!=null}function Fl(r){for(const e of r.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Sl;function oC(r){D(!Sl,"__referenceConstructor has already been defined"),Sl=r}function lC(){return D(Sl,"Reference.ts has not been loaded"),Sl}let aC=1;class Um{constructor(e){this.listenProvider_=e,this.syncPointTree_=new _e(null),this.pendingWriteTree_=bI(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function k_(r,e,n,s,l){return CI(r.pendingWriteTree_,e,n,s,l),l?Ii(r,new Ir(ld(),e,n)):[]}function uC(r,e,n,s){TI(r.pendingWriteTree_,e,n,s);const l=_e.fromObject(n);return Ii(r,new gi(ld(),e,l))}function Yn(r,e,n=!1){const s=kI(r.pendingWriteTree_,e);if(RI(r.pendingWriteTree_,e)){let u=new _e(null);return s.snap!=null?u=u.set(ue(),!0):Ye(s.children,d=>{u=u.set(new fe(d),!0)}),Ii(r,new _l(s.path,u,n))}else return[]}function Ul(r,e,n){return Ii(r,new Ir(ad(),e,n))}function cC(r,e,n){const s=_e.fromObject(n);return Ii(r,new gi(ad(),e,s))}function dC(r,e){return Ii(r,new Os(ad(),e))}function hC(r,e,n){const s=gd(r,n);if(s){const l=_d(s),u=l.path,d=l.queryId,f=mt(u,e),p=new Os(ud(d),f);return vd(r,u,p)}else return[]}function Lc(r,e,n,s,l=!1){const u=e._path,d=r.syncPointTree_.get(u);let f=[];if(d&&(e._queryIdentifier==="default"||T_(d,e))){const p=sC(d,e,n,s);nC(d)&&(r.syncPointTree_=r.syncPointTree_.remove(u));const g=p.removed;if(f=p.events,!l){const w=g.findIndex(S=>S._queryParams.loadsAllData())!==-1,v=r.syncPointTree_.findOnPath(u,(S,A)=>nr(A));if(w&&!v){const S=r.syncPointTree_.subtree(u);if(!S.isEmpty()){const A=mC(S);for(let L=0;L<A.length;++L){const B=A[L],H=B.query,Ae=P_(r,B);r.listenProvider_.startListening(ws(H),Il(r,H),Ae.hashFn,Ae.onComplete)}}}!v&&g.length>0&&!s&&(w?r.listenProvider_.stopListening(ws(e),null):g.forEach(S=>{const A=r.queryToTagMap.get(zl(S));r.listenProvider_.stopListening(ws(S),A)}))}gC(r,g)}return f}function fC(r,e,n,s){const l=gd(r,s);if(l!=null){const u=_d(l),d=u.path,f=u.queryId,p=mt(d,e),g=new Ir(ud(f),p,n);return vd(r,d,g)}else return[]}function pC(r,e,n,s){const l=gd(r,s);if(l){const u=_d(l),d=u.path,f=u.queryId,p=mt(d,e),g=_e.fromObject(n),w=new gi(ud(f),p,g);return vd(r,d,w)}else return[]}function zm(r,e,n,s=!1){const l=e._path;let u=null,d=!1;r.syncPointTree_.foreachOnPath(l,(S,A)=>{const L=mt(S,l);u=u||ui(A,L),d=d||nr(A)});let f=r.syncPointTree_.get(l);f?(d=d||nr(f),u=u||ui(f,ue())):(f=new ZI,r.syncPointTree_=r.syncPointTree_.set(l,f));let p;u!=null?p=!0:(p=!1,u=q.EMPTY_NODE,r.syncPointTree_.subtree(l).foreachChild((A,L)=>{const B=ui(L,ue());B&&(u=u.updateImmediateChild(A,B))}));const g=T_(f,e);if(!g&&!e._queryParams.loadsAllData()){const S=zl(e);D(!r.queryToTagMap.has(S),"View does not exist, but we have a tag");const A=_C();r.queryToTagMap.set(S,A),r.tagToQueryMap.set(A,S)}const w=cd(r.pendingWriteTree_,l);let v=iC(f,e,n,w,u,p);if(!g&&!d&&!s){const S=C_(f,e);v=v.concat(vC(r,e,S))}return v}function md(r,e,n){const l=r.pendingWriteTree_,u=r.syncPointTree_.findOnPath(e,(d,f)=>{const p=mt(d,e),g=ui(f,p);if(g)return g});return __(l,e,u,n,!0)}function Ii(r,e){return R_(e,r.syncPointTree_,null,cd(r.pendingWriteTree_,ue()))}function R_(r,e,n,s){if(ne(r.path))return N_(r,e,n,s);{const l=e.get(ue());n==null&&l!=null&&(n=ui(l,ue()));let u=[];const d=Z(r.path),f=r.operationForChild(d),p=e.children.get(d);if(p&&f){const g=n?n.getImmediateChild(d):null,w=v_(s,d);u=u.concat(R_(f,p,g,w))}return l&&(u=u.concat(pd(l,r,s,n))),u}}function N_(r,e,n,s){const l=e.get(ue());n==null&&l!=null&&(n=ui(l,ue()));let u=[];return e.children.inorderTraversal((d,f)=>{const p=n?n.getImmediateChild(d):null,g=v_(s,d),w=r.operationForChild(d);w&&(u=u.concat(N_(w,f,p,g)))}),l&&(u=u.concat(pd(l,r,s,n))),u}function P_(r,e){const n=e.query,s=Il(r,n);return{hashFn:()=>(QI(e)||q.EMPTY_NODE).hash(),onComplete:l=>{if(l==="ok")return s?hC(r,n._path,s):dC(r,n._path);{const u=cS(l,n);return Lc(r,n,null,u)}}}}function Il(r,e){const n=zl(e);return r.queryToTagMap.get(n)}function zl(r){return r._path.toString()+"$"+r._queryIdentifier}function gd(r,e){return r.tagToQueryMap.get(e)}function _d(r){const e=r.indexOf("$");return D(e!==-1&&e<r.length-1,"Bad queryKey."),{queryId:r.substr(e+1),path:new fe(r.substr(0,e))}}function vd(r,e,n){const s=r.syncPointTree_.get(e);D(s,"Missing sync point for query tag that we're tracking");const l=cd(r.pendingWriteTree_,e);return pd(s,n,l,null)}function mC(r){return r.fold((e,n,s)=>{if(n&&nr(n))return[Fl(n)];{let l=[];return n&&(l=I_(n)),Ye(s,(u,d)=>{l=l.concat(d)}),l}})}function ws(r){return r._queryParams.loadsAllData()&&!r._queryParams.isDefault()?new(lC())(r._repo,r._path):r}function gC(r,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const l=zl(s),u=r.queryToTagMap.get(l);r.queryToTagMap.delete(l),r.tagToQueryMap.delete(u)}}}function _C(){return aC++}function vC(r,e,n){const s=e._path,l=Il(r,e),u=P_(r,n),d=r.listenProvider_.startListening(ws(e),l,u.hashFn,u.onComplete),f=r.syncPointTree_.subtree(s);if(l)D(!nr(f.value),"If we're adding a query, it shouldn't be shadowed");else{const p=f.fold((g,w,v)=>{if(!ne(g)&&w&&nr(w))return[Fl(w).query];{let S=[];return w&&(S=S.concat(I_(w).map(A=>A.query))),Ye(v,(A,L)=>{S=S.concat(L)}),S}});for(let g=0;g<p.length;++g){const w=p[g];r.listenProvider_.stopListening(ws(w),Il(r,w))}}return d}/**
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
 */class yd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new yd(n)}node(){return this.node_}}class wd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ne(this.path_,e);return new wd(this.syncTree_,n)}node(){return md(this.syncTree_,this.path_)}}const yC=function(r){return r=r||{},r.timestamp=r.timestamp||new Date().getTime(),r},jm=function(r,e,n){if(!r||typeof r!="object")return r;if(D(".sv"in r,"Unexpected leaf node or priority contents"),typeof r[".sv"]=="string")return wC(r[".sv"],e,n);if(typeof r[".sv"]=="object")return EC(r[".sv"],e);D(!1,"Unexpected server value: "+JSON.stringify(r,null,2))},wC=function(r,e,n){switch(r){case"timestamp":return n.timestamp;default:D(!1,"Unexpected server value: "+r)}},EC=function(r,e,n){r.hasOwnProperty("increment")||D(!1,"Unexpected server value: "+JSON.stringify(r,null,2));const s=r.increment;typeof s!="number"&&D(!1,"Unexpected increment value: "+s);const l=e.node();if(D(l!==null&&typeof l<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!l.isLeafNode())return s;const d=l.getValue();return typeof d!="number"?s:d+s},A_=function(r,e,n,s){return Ed(e,new wd(n,r),s)},O_=function(r,e,n){return Ed(r,new yd(e),n)};function Ed(r,e,n){const s=r.getPriority().val(),l=jm(s,e.getImmediateChild(".priority"),n);let u;if(r.isLeafNode()){const d=r,f=jm(d.getValue(),e,n);return f!==d.getValue()||l!==d.getPriority().val()?new Be(f,He(l)):r}else{const d=r;return u=d,l!==d.getPriority().val()&&(u=u.updatePriority(new Be(l))),d.forEachChild(Pe,(f,p)=>{const g=Ed(p,e.getImmediateChild(f),n);g!==p&&(u=u.updateImmediateChild(f,g))}),u}}/**
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
 */class Sd{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Id(r,e){let n=e instanceof fe?e:new fe(e),s=r,l=Z(n);for(;l!==null;){const u=fi(s.node.children,l)||{children:{},childCount:0};s=new Sd(l,s,u),n=ve(n),l=Z(n)}return s}function Ci(r){return r.node.value}function x_(r,e){r.node.value=e,Mc(r)}function D_(r){return r.node.childCount>0}function SC(r){return Ci(r)===void 0&&!D_(r)}function jl(r,e){Ye(r.node.children,(n,s)=>{e(new Sd(n,r,s))})}function L_(r,e,n,s){n&&!s&&e(r),jl(r,l=>{L_(l,e,!0,s)}),n&&s&&e(r)}function IC(r,e,n){let s=r.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Fs(r){return new fe(r.parent===null?r.name:Fs(r.parent)+"/"+r.name)}function Mc(r){r.parent!==null&&CC(r.parent,r.name,r)}function CC(r,e,n){const s=SC(n),l=on(r.node.children,e);s&&l?(delete r.node.children[e],r.node.childCount--,Mc(r)):!s&&!l&&(r.node.children[e]=n.node,r.node.childCount++,Mc(r))}/**
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
 */const TC=/[\[\].#$\/\u0000-\u001F\u007F]/,kC=/[\[\].#$\u0000-\u001F\u007F]/,dc=10*1024*1024,Cd=function(r){return typeof r=="string"&&r.length!==0&&!TC.test(r)},M_=function(r){return typeof r=="string"&&r.length!==0&&!kC.test(r)},RC=function(r){return r&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),M_(r)},NC=function(r){return r===null||typeof r=="string"||typeof r=="number"&&!Yc(r)||r&&typeof r=="object"&&on(r,".sv")},PC=function(r,e,n,s){Wl(xl(r,"value"),e,n)},Wl=function(r,e,n){const s=n instanceof fe?new $S(n,r):n;if(e===void 0)throw new Error(r+"contains undefined "+yr(s));if(typeof e=="function")throw new Error(r+"contains a function "+yr(s)+" with contents = "+e.toString());if(Yc(e))throw new Error(r+"contains "+e.toString()+" "+yr(s));if(typeof e=="string"&&e.length>dc/3&&Dl(e)>dc)throw new Error(r+"contains a string greater than "+dc+" utf8 bytes "+yr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let l=!1,u=!1;if(Ye(e,(d,f)=>{if(d===".value")l=!0;else if(d!==".priority"&&d!==".sv"&&(u=!0,!Cd(d)))throw new Error(r+" contains an invalid key ("+d+") "+yr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);HS(s,d),Wl(r,f,s),GS(s)}),l&&u)throw new Error(r+' contains ".value" child '+yr(s)+" in addition to actual children.")}},AC=function(r,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const u=Rs(s);for(let d=0;d<u.length;d++)if(!(u[d]===".priority"&&d===u.length-1)){if(!Cd(u[d]))throw new Error(r+"contains an invalid key ("+u[d]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(VS);let l=null;for(n=0;n<e.length;n++){if(s=e[n],l!==null&&xt(l,s))throw new Error(r+"contains a path "+l.toString()+" that is ancestor of another path "+s.toString());l=s}},OC=function(r,e,n,s){const l=xl(r,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(l+" must be an object containing the children to replace.");const u=[];Ye(e,(d,f)=>{const p=new fe(d);if(Wl(l,f,Ne(n,p)),td(p)===".priority"&&!NC(f))throw new Error(l+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");u.push(p)}),AC(l,u)},b_=function(r,e,n,s){if(!M_(n))throw new Error(xl(r,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},xC=function(r,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),b_(r,e,n)},F_=function(r,e){if(Z(e)===".info")throw new Error(r+" failed = Can't modify data under /.info/")},DC=function(r,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Cd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!RC(n))throw new Error(xl(r,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class LC{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Bl(r,e){let n=null;for(let s=0;s<e.length;s++){const l=e[s],u=l.getPath();n!==null&&!nd(u,n.path)&&(r.eventLists_.push(n),n=null),n===null&&(n={events:[],path:u}),n.events.push(l)}n&&r.eventLists_.push(n)}function U_(r,e,n){Bl(r,n),z_(r,s=>nd(s,e))}function Gt(r,e,n){Bl(r,n),z_(r,s=>xt(s,e)||xt(e,s))}function z_(r,e){r.recursionDepth_++;let n=!0;for(let s=0;s<r.eventLists_.length;s++){const l=r.eventLists_[s];if(l){const u=l.path;e(u)?(MC(r.eventLists_[s]),r.eventLists_[s]=null):n=!1}}n&&(r.eventLists_=[]),r.recursionDepth_--}function MC(r){for(let e=0;e<r.events.length;e++){const n=r.events[e];if(n!==null){r.events[e]=null;const s=n.getEventRunner();gs&&Qe("event: "+n.toString()),Si(s)}}}/**
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
 */const bC="repo_interrupt",FC=25;class UC{constructor(e,n,s,l){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=l,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new LC,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=gl(),this.transactionQueueTree_=new Sd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function zC(r,e,n){if(r.stats_=Zc(r.repoInfo_),r.forceRestClient_||pS())r.server_=new ml(r.repoInfo_,(s,l,u,d)=>{Wm(r,s,l,u,d)},r.authTokenProvider_,r.appCheckProvider_),setTimeout(()=>Bm(r,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ge(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}r.persistentConnection_=new En(r.repoInfo_,e,(s,l,u,d)=>{Wm(r,s,l,u,d)},s=>{Bm(r,s)},s=>{WC(r,s)},r.authTokenProvider_,r.appCheckProvider_,n),r.server_=r.persistentConnection_}r.authTokenProvider_.addTokenChangeListener(s=>{r.server_.refreshAuthToken(s)}),r.appCheckProvider_.addTokenChangeListener(s=>{r.server_.refreshAppCheckToken(s.token)}),r.statsReporter_=yS(r.repoInfo_,()=>new vI(r.stats_,r.server_)),r.infoData_=new fI,r.infoSyncTree_=new Um({startListening:(s,l,u,d)=>{let f=[];const p=r.infoData_.getNode(s._path);return p.isEmpty()||(f=Ul(r.infoSyncTree_,s._path,p),setTimeout(()=>{d("ok")},0)),f},stopListening:()=>{}}),Td(r,"connected",!1),r.serverSyncTree_=new Um({startListening:(s,l,u,d)=>(r.server_.listen(s,u,l,(f,p)=>{const g=d(f,p);Gt(r.eventQueue_,s._path,g)}),[]),stopListening:(s,l)=>{r.server_.unlisten(s,l)}})}function jC(r){const n=r.infoData_.getNode(new fe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Vl(r){return yC({timestamp:jC(r)})}function Wm(r,e,n,s,l){r.dataUpdateCount++;const u=new fe(e);n=r.interceptServerDataCallback_?r.interceptServerDataCallback_(e,n):n;let d=[];if(l)if(s){const p=cl(n,g=>He(g));d=pC(r.serverSyncTree_,u,p,l)}else{const p=He(n);d=fC(r.serverSyncTree_,u,p,l)}else if(s){const p=cl(n,g=>He(g));d=cC(r.serverSyncTree_,u,p)}else{const p=He(n);d=Ul(r.serverSyncTree_,u,p)}let f=u;d.length>0&&(f=vi(r,u)),Gt(r.eventQueue_,f,d)}function Bm(r,e){Td(r,"connected",e),e===!1&&$C(r)}function WC(r,e){Ye(e,(n,s)=>{Td(r,n,s)})}function Td(r,e,n){const s=new fe("/.info/"+e),l=He(n);r.infoData_.updateSnapshot(s,l);const u=Ul(r.infoSyncTree_,s,l);Gt(r.eventQueue_,s,u)}function kd(r){return r.nextWriteId_++}function BC(r,e,n,s,l){$l(r,"set",{path:e.toString(),value:n,priority:s});const u=Vl(r),d=He(n,s),f=md(r.serverSyncTree_,e),p=O_(d,f,u),g=kd(r),w=k_(r.serverSyncTree_,e,p,g,!0);Bl(r.eventQueue_,w),r.server_.put(e.toString(),d.val(!0),(S,A)=>{const L=S==="ok";L||ot("set at "+e+" failed: "+S);const B=Yn(r.serverSyncTree_,g,!L);Gt(r.eventQueue_,e,B),bc(r,l,S,A)});const v=Nd(r,e);vi(r,v),Gt(r.eventQueue_,v,[])}function VC(r,e,n,s){$l(r,"update",{path:e.toString(),value:n});let l=!0;const u=Vl(r),d={};if(Ye(n,(f,p)=>{l=!1,d[f]=A_(Ne(e,f),He(p),r.serverSyncTree_,u)}),l)Qe("update() called with empty data.  Don't do anything."),bc(r,s,"ok",void 0);else{const f=kd(r),p=uC(r.serverSyncTree_,e,d,f);Bl(r.eventQueue_,p),r.server_.merge(e.toString(),n,(g,w)=>{const v=g==="ok";v||ot("update at "+e+" failed: "+g);const S=Yn(r.serverSyncTree_,f,!v),A=S.length>0?vi(r,e):e;Gt(r.eventQueue_,A,S),bc(r,s,g,w)}),Ye(n,g=>{const w=Nd(r,Ne(e,g));vi(r,w)}),Gt(r.eventQueue_,e,[])}}function $C(r){$l(r,"onDisconnectEvents");const e=Vl(r),n=gl();Rc(r.onDisconnect_,ue(),(l,u)=>{const d=A_(l,u,r.serverSyncTree_,e);f_(n,l,d)});let s=[];Rc(n,ue(),(l,u)=>{s=s.concat(Ul(r.serverSyncTree_,l,u));const d=Nd(r,l);vi(r,d)}),r.onDisconnect_=gl(),Gt(r.eventQueue_,ue(),s)}function HC(r,e,n){let s;Z(e._path)===".info"?s=zm(r.infoSyncTree_,e,n):s=zm(r.serverSyncTree_,e,n),U_(r.eventQueue_,e._path,s)}function GC(r,e,n){let s;Z(e._path)===".info"?s=Lc(r.infoSyncTree_,e,n):s=Lc(r.serverSyncTree_,e,n),U_(r.eventQueue_,e._path,s)}function qC(r){r.persistentConnection_&&r.persistentConnection_.interrupt(bC)}function $l(r,...e){let n="";r.persistentConnection_&&(n=r.persistentConnection_.id+":"),Qe(n,...e)}function bc(r,e,n,s){e&&Si(()=>{if(n==="ok")e(null);else{const l=(n||"error").toUpperCase();let u=l;s&&(u+=": "+s);const d=new Error(u);d.code=l,e(d)}})}function j_(r,e,n){return md(r.serverSyncTree_,e,n)||q.EMPTY_NODE}function Rd(r,e=r.transactionQueueTree_){if(e||Hl(r,e),Ci(e)){const n=B_(r,e);D(n.length>0,"Sending zero length transaction queue"),n.every(l=>l.status===0)&&KC(r,Fs(e),n)}else D_(e)&&jl(e,n=>{Rd(r,n)})}function KC(r,e,n){const s=n.map(g=>g.currentWriteId),l=j_(r,e,s);let u=l;const d=l.hash();for(let g=0;g<n.length;g++){const w=n[g];D(w.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),w.status=1,w.retryCount++;const v=mt(e,w.path);u=u.updateChild(v,w.currentOutputSnapshotRaw)}const f=u.val(!0),p=e;r.server_.put(p.toString(),f,g=>{$l(r,"transaction put response",{path:p.toString(),status:g});let w=[];if(g==="ok"){const v=[];for(let S=0;S<n.length;S++)n[S].status=2,w=w.concat(Yn(r.serverSyncTree_,n[S].currentWriteId)),n[S].onComplete&&v.push(()=>n[S].onComplete(null,!0,n[S].currentOutputSnapshotResolved)),n[S].unwatcher();Hl(r,Id(r.transactionQueueTree_,e)),Rd(r,r.transactionQueueTree_),Gt(r.eventQueue_,e,w);for(let S=0;S<v.length;S++)Si(v[S])}else{if(g==="datastale")for(let v=0;v<n.length;v++)n[v].status===3?n[v].status=4:n[v].status=0;else{ot("transaction at "+p.toString()+" failed: "+g);for(let v=0;v<n.length;v++)n[v].status=4,n[v].abortReason=g}vi(r,e)}},d)}function vi(r,e){const n=W_(r,e),s=Fs(n),l=B_(r,n);return QC(r,l,s),s}function QC(r,e,n){if(e.length===0)return;const s=[];let l=[];const d=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const p=e[f],g=mt(n,p.path);let w=!1,v;if(D(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)w=!0,v=p.abortReason,l=l.concat(Yn(r.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=FC)w=!0,v="maxretry",l=l.concat(Yn(r.serverSyncTree_,p.currentWriteId,!0));else{const S=j_(r,p.path,d);p.currentInputSnapshot=S;const A=e[f].update(S.val());if(A!==void 0){Wl("transaction failed: Data returned ",A,p.path);let L=He(A);typeof A=="object"&&A!=null&&on(A,".priority")||(L=L.updatePriority(S.getPriority()));const H=p.currentWriteId,Ae=Vl(r),Oe=O_(L,S,Ae);p.currentOutputSnapshotRaw=L,p.currentOutputSnapshotResolved=Oe,p.currentWriteId=kd(r),d.splice(d.indexOf(H),1),l=l.concat(k_(r.serverSyncTree_,p.path,Oe,p.currentWriteId,p.applyLocally)),l=l.concat(Yn(r.serverSyncTree_,H,!0))}else w=!0,v="nodata",l=l.concat(Yn(r.serverSyncTree_,p.currentWriteId,!0))}Gt(r.eventQueue_,n,l),l=[],w&&(e[f].status=2,function(S){setTimeout(S,Math.floor(0))}(e[f].unwatcher),e[f].onComplete&&(v==="nodata"?s.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):s.push(()=>e[f].onComplete(new Error(v),!1,null))))}Hl(r,r.transactionQueueTree_);for(let f=0;f<s.length;f++)Si(s[f]);Rd(r,r.transactionQueueTree_)}function W_(r,e){let n,s=r.transactionQueueTree_;for(n=Z(e);n!==null&&Ci(s)===void 0;)s=Id(s,n),e=ve(e),n=Z(e);return s}function B_(r,e){const n=[];return V_(r,e,n),n.sort((s,l)=>s.order-l.order),n}function V_(r,e,n){const s=Ci(e);if(s)for(let l=0;l<s.length;l++)n.push(s[l]);jl(e,l=>{V_(r,l,n)})}function Hl(r,e){const n=Ci(e);if(n){let s=0;for(let l=0;l<n.length;l++)n[l].status!==2&&(n[s]=n[l],s++);n.length=s,x_(e,n.length>0?n:void 0)}jl(e,s=>{Hl(r,s)})}function Nd(r,e){const n=Fs(W_(r,e)),s=Id(r.transactionQueueTree_,e);return IC(s,l=>{hc(r,l)}),hc(r,s),L_(s,l=>{hc(r,l)}),n}function hc(r,e){const n=Ci(e);if(n){const s=[];let l=[],u=-1;for(let d=0;d<n.length;d++)n[d].status===3||(n[d].status===1?(D(u===d-1,"All SENT items should be at beginning of queue."),u=d,n[d].status=3,n[d].abortReason="set"):(D(n[d].status===0,"Unexpected transaction status in abort"),n[d].unwatcher(),l=l.concat(Yn(r.serverSyncTree_,n[d].currentWriteId,!0)),n[d].onComplete&&s.push(n[d].onComplete.bind(null,new Error("set"),!1,null))));u===-1?x_(e,void 0):n.length=u+1,Gt(r.eventQueue_,Fs(e),l);for(let d=0;d<s.length;d++)Si(s[d])}}/**
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
 */function YC(r){let e="";const n=r.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let l=n[s];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch{}e+="/"+l}return e}function XC(r){const e={};r.charAt(0)==="?"&&(r=r.substring(1));for(const n of r.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ot(`Invalid query segment '${n}' in query '${r}'`)}return e}const Vm=function(r,e){const n=JC(r),s=n.namespace;n.domain==="firebase.com"&&In(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&In("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||sS();const l=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Yg(n.host,n.secure,s,l,e,"",s!==n.subdomain),path:new fe(n.pathString)}},JC=function(r){let e="",n="",s="",l="",u="",d=!0,f="https",p=443;if(typeof r=="string"){let g=r.indexOf("//");g>=0&&(f=r.substring(0,g-1),r=r.substring(g+2));let w=r.indexOf("/");w===-1&&(w=r.length);let v=r.indexOf("?");v===-1&&(v=r.length),e=r.substring(0,Math.min(w,v)),w<v&&(l=YC(r.substring(w,v)));const S=XC(r.substring(Math.min(r.length,v)));g=e.indexOf(":"),g>=0?(d=f==="https"||f==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const A=e.slice(0,g);if(A.toLowerCase()==="localhost")n="localhost";else if(A.split(".").length<=2)n=A;else{const L=e.indexOf(".");s=e.substring(0,L).toLowerCase(),n=e.substring(L+1),u=s}"ns"in S&&(u=S.ns)}return{host:e,port:p,domain:n,subdomain:s,secure:d,scheme:f,pathString:l,namespace:u}};/**
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
 */class ZC{constructor(e,n,s,l){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=l}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ge(this.snapshot.exportVal())}}class eT{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class tT{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return D(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Pd{constructor(e,n,s,l){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=l}get key(){return ne(this._path)?null:td(this._path)}get ref(){return new ir(this._repo,this._path)}get _queryIdentifier(){const e=Nm(this._queryParams),n=Xc(e);return n==="{}"?"default":n}get _queryObject(){return Nm(this._queryParams)}isEqual(e){if(e=Tt(e),!(e instanceof Pd))return!1;const n=this._repo===e._repo,s=nd(this._path,e._path),l=this._queryIdentifier===e._queryIdentifier;return n&&s&&l}toJSON(){return this.toString()}toString(){return this._repo.toString()+BS(this._path)}}class ir extends Pd{constructor(e,n){super(e,n,new od,!1)}get parent(){const e=s_(this._path);return e===null?null:new ir(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Cl{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new fe(e),s=Fc(this.ref,e);return new Cl(this._node.getChild(n),s,Pe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,l)=>e(new Cl(l,Fc(this.ref,s),Pe)))}hasChild(e){const n=new fe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Gl(r,e){return r=Tt(r),r._checkNotDeleted("ref"),e!==void 0?Fc(r._root,e):r._root}function Fc(r,e){return r=Tt(r),Z(r._path)===null?xC("child","path",e):b_("child","path",e),new ir(r._repo,Ne(r._path,e))}function nT(r){return F_("remove",r._path),$_(r,null)}function $_(r,e){r=Tt(r),F_("set",r._path),PC("set",e,r._path);const n=new Ds;return BC(r._repo,r._path,e,null,n.wrapCallback(()=>{})),n.promise}function rT(r,e){OC("update",e,r._path);const n=new Ds;return VC(r._repo,r._path,e,n.wrapCallback(()=>{})),n.promise}class Ad{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new ZC("value",this,new Cl(e.snapshotNode,new ir(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new eT(this,e,n):null}matches(e){return e instanceof Ad?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function iT(r,e,n,s,l){const u=new tT(n,void 0),d=new Ad(u);return HC(r._repo,r,d),()=>GC(r._repo,r,d)}function sT(r,e,n,s){return iT(r,"value",e)}eC(ir);oC(ir);/**
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
 */const oT="FIREBASE_DATABASE_EMULATOR_HOST",Uc={};let lT=!1;function aT(r,e,n,s){r.repoInfo_=new Yg(`${e}:${n}`,!1,r.repoInfo_.namespace,r.repoInfo_.webSocketOnly,r.repoInfo_.nodeAdmin,r.repoInfo_.persistenceKey,r.repoInfo_.includeNamespaceInQueryParams,!0),s&&(r.authTokenProvider_=s)}function uT(r,e,n,s,l){let u=s||r.options.databaseURL;u===void 0&&(r.options.projectId||In("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Qe("Using default host for project ",r.options.projectId),u=`${r.options.projectId}-default-rtdb.firebaseio.com`);let d=Vm(u,l),f=d.repoInfo,p;typeof process<"u"&&cm&&(p=cm[oT]),p?(u=`http://${p}?ns=${f.namespace}`,d=Vm(u,l),f=d.repoInfo):d.repoInfo.secure;const g=new gS(r.name,r.options,e);DC("Invalid Firebase Database URL",d),ne(d.path)||In("Database URL must point to the root of a Firebase Database (not including a child path).");const w=dT(f,r,g,new mS(r.name,n));return new hT(w,r)}function cT(r,e){const n=Uc[e];(!n||n[r.key]!==r)&&In(`Database ${e}(${r.repoInfo_}) has already been deleted.`),qC(r),delete n[r.key]}function dT(r,e,n,s){let l=Uc[e.name];l||(l={},Uc[e.name]=l);let u=l[r.toURLString()];return u&&In("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),u=new UC(r,lT,n,s),l[r.toURLString()]=u,u}class hT{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(zC(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ir(this._repo,ue())),this._rootInternal}_delete(){return this._rootInternal!==null&&(cT(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&In("Cannot call "+e+" on a deleted database.")}}function fT(r=Qc(),e){const n=Ar(r,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Nw("database");s&&pT(n,...s)}return n}function pT(r,e,n,s={}){r=Tt(r),r._checkNotDeleted("useEmulator"),r._instanceStarted&&In("Cannot call useEmulator() after instance has already been initialized.");const l=r._repoInternal;let u;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&In('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new rl(rl.OWNER);else if(s.mockUserToken){const d=typeof s.mockUserToken=="string"?s.mockUserToken:Pw(s.mockUserToken,r.app.options.projectId);u=new rl(d)}aT(l,e,n,u)}/**
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
 */function mT(r){ZE(Ei),rn(new Ht("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("auth-internal"),u=e.getProvider("app-check-internal");return uT(s,l,u,n)},"PUBLIC").setMultipleInstances(!0)),Dt(dm,hm,r),Dt(dm,hm,"esm2017")}En.prototype.simpleListen=function(r,e){this.sendRequest("q",{p:r},e)};En.prototype.echo=function(r,e){this.sendRequest("echo",{d:r},e)};mT();var gT="firebase",_T="11.1.0";/**
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
 */Dt(gT,_T,"app");const H_="@firebase/installations",Od="0.6.11";/**
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
 */const G_=1e4,q_=`w:${Od}`,K_="FIS_v2",vT="https://firebaseinstallations.googleapis.com/v1",yT=60*60*1e3,wT="installations",ET="Installations";/**
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
 */const ST={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},kr=new Pr(wT,ET,ST);function Q_(r){return r instanceof sn&&r.code.includes("request-failed")}/**
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
 */function Y_({projectId:r}){return`${vT}/projects/${r}/installations`}function X_(r){return{token:r.token,requestStatus:2,expiresIn:CT(r.expiresIn),creationTime:Date.now()}}async function J_(r,e){const s=(await e.json()).error;return kr.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Z_({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function IT(r,{refreshToken:e}){const n=Z_(r);return n.append("Authorization",TT(e)),n}async function ev(r){const e=await r();return e.status>=500&&e.status<600?r():e}function CT(r){return Number(r.replace("s","000"))}function TT(r){return`${K_} ${r}`}/**
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
 */async function kT({appConfig:r,heartbeatServiceProvider:e},{fid:n}){const s=Y_(r),l=Z_(r),u=e.getImmediate({optional:!0});if(u){const g=await u.getHeartbeatsHeader();g&&l.append("x-firebase-client",g)}const d={fid:n,authVersion:K_,appId:r.appId,sdkVersion:q_},f={method:"POST",headers:l,body:JSON.stringify(d)},p=await ev(()=>fetch(s,f));if(p.ok){const g=await p.json();return{fid:g.fid||n,registrationStatus:2,refreshToken:g.refreshToken,authToken:X_(g.authToken)}}else throw await J_("Create Installation",p)}/**
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
 */function tv(r){return new Promise(e=>{setTimeout(e,r)})}/**
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
 */function RT(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const NT=/^[cdef][\w-]{21}$/,zc="";function PT(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=AT(r);return NT.test(n)?n:zc}catch{return zc}}function AT(r){return RT(r).substr(0,22)}/**
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
 */function ql(r){return`${r.appName}!${r.appId}`}/**
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
 */const nv=new Map;function rv(r,e){const n=ql(r);iv(n,e),OT(n,e)}function iv(r,e){const n=nv.get(r);if(n)for(const s of n)s(e)}function OT(r,e){const n=xT();n&&n.postMessage({key:r,fid:e}),DT()}let Er=null;function xT(){return!Er&&"BroadcastChannel"in self&&(Er=new BroadcastChannel("[Firebase] FID Change"),Er.onmessage=r=>{iv(r.data.key,r.data.fid)}),Er}function DT(){nv.size===0&&Er&&(Er.close(),Er=null)}/**
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
 */const LT="firebase-installations-database",MT=1,Rr="firebase-installations-store";let fc=null;function xd(){return fc||(fc=xg(LT,MT,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(Rr)}}})),fc}async function Tl(r,e){const n=ql(r),l=(await xd()).transaction(Rr,"readwrite"),u=l.objectStore(Rr),d=await u.get(n);return await u.put(e,n),await l.done,(!d||d.fid!==e.fid)&&rv(r,e.fid),e}async function sv(r){const e=ql(r),s=(await xd()).transaction(Rr,"readwrite");await s.objectStore(Rr).delete(e),await s.done}async function Kl(r,e){const n=ql(r),l=(await xd()).transaction(Rr,"readwrite"),u=l.objectStore(Rr),d=await u.get(n),f=e(d);return f===void 0?await u.delete(n):await u.put(f,n),await l.done,f&&(!d||d.fid!==f.fid)&&rv(r,f.fid),f}/**
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
 */async function Dd(r){let e;const n=await Kl(r.appConfig,s=>{const l=bT(s),u=FT(r,l);return e=u.registrationPromise,u.installationEntry});return n.fid===zc?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function bT(r){const e=r||{fid:PT(),registrationStatus:0};return ov(e)}function FT(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const l=Promise.reject(kr.create("app-offline"));return{installationEntry:e,registrationPromise:l}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=UT(r,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:zT(r)}:{installationEntry:e}}async function UT(r,e){try{const n=await kT(r,e);return Tl(r.appConfig,n)}catch(n){throw Q_(n)&&n.customData.serverCode===409?await sv(r.appConfig):await Tl(r.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function zT(r){let e=await $m(r.appConfig);for(;e.registrationStatus===1;)await tv(100),e=await $m(r.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Dd(r);return s||n}return e}function $m(r){return Kl(r,e=>{if(!e)throw kr.create("installation-not-found");return ov(e)})}function ov(r){return jT(r)?{fid:r.fid,registrationStatus:0}:r}function jT(r){return r.registrationStatus===1&&r.registrationTime+G_<Date.now()}/**
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
 */async function WT({appConfig:r,heartbeatServiceProvider:e},n){const s=BT(r,n),l=IT(r,n),u=e.getImmediate({optional:!0});if(u){const g=await u.getHeartbeatsHeader();g&&l.append("x-firebase-client",g)}const d={installation:{sdkVersion:q_,appId:r.appId}},f={method:"POST",headers:l,body:JSON.stringify(d)},p=await ev(()=>fetch(s,f));if(p.ok){const g=await p.json();return X_(g)}else throw await J_("Generate Auth Token",p)}function BT(r,{fid:e}){return`${Y_(r)}/${e}/authTokens:generate`}/**
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
 */async function Ld(r,e=!1){let n;const s=await Kl(r.appConfig,u=>{if(!lv(u))throw kr.create("not-registered");const d=u.authToken;if(!e&&HT(d))return u;if(d.requestStatus===1)return n=VT(r,e),u;{if(!navigator.onLine)throw kr.create("app-offline");const f=qT(u);return n=$T(r,f),f}});return n?await n:s.authToken}async function VT(r,e){let n=await Hm(r.appConfig);for(;n.authToken.requestStatus===1;)await tv(100),n=await Hm(r.appConfig);const s=n.authToken;return s.requestStatus===0?Ld(r,e):s}function Hm(r){return Kl(r,e=>{if(!lv(e))throw kr.create("not-registered");const n=e.authToken;return KT(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function $T(r,e){try{const n=await WT(r,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Tl(r.appConfig,s),n}catch(n){if(Q_(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await sv(r.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Tl(r.appConfig,s)}throw n}}function lv(r){return r!==void 0&&r.registrationStatus===2}function HT(r){return r.requestStatus===2&&!GT(r)}function GT(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+yT}function qT(r){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:e})}function KT(r){return r.requestStatus===1&&r.requestTime+G_<Date.now()}/**
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
 */async function QT(r){const e=r,{installationEntry:n,registrationPromise:s}=await Dd(e);return s?s.catch(console.error):Ld(e).catch(console.error),n.fid}/**
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
 */async function YT(r,e=!1){const n=r;return await XT(n),(await Ld(n,e)).token}async function XT(r){const{registrationPromise:e}=await Dd(r);e&&await e}/**
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
 */function JT(r){if(!r||!r.options)throw pc("App Configuration");if(!r.name)throw pc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!r.options[n])throw pc(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function pc(r){return kr.create("missing-app-config-values",{valueName:r})}/**
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
 */const av="installations",ZT="installations-internal",ek=r=>{const e=r.getProvider("app").getImmediate(),n=JT(e),s=Ar(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},tk=r=>{const e=r.getProvider("app").getImmediate(),n=Ar(e,av).getImmediate();return{getId:()=>QT(n),getToken:l=>YT(n,l)}};function nk(){rn(new Ht(av,ek,"PUBLIC")),rn(new Ht(ZT,tk,"PRIVATE"))}nk();Dt(H_,Od);Dt(H_,Od,"esm2017");/**
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
 */const kl="analytics",rk="firebase_id",ik="origin",sk=60*1e3,ok="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Md="https://www.googletagmanager.com/gtag/js";/**
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
 */const _t=new Ll("@firebase/analytics");/**
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
 */const lk={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ct=new Pr("analytics","Analytics",lk);/**
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
 */function ak(r){if(!r.startsWith(Md)){const e=Ct.create("invalid-gtag-resource",{gtagURL:r});return _t.warn(e.message),""}return r}function uv(r){return Promise.all(r.map(e=>e.catch(n=>n)))}function uk(r,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,e)),n}function ck(r,e){const n=uk("firebase-js-sdk-policy",{createScriptURL:ak}),s=document.createElement("script"),l=`${Md}?l=${r}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(l):l,s.async=!0,document.head.appendChild(s)}function dk(r){let e=[];return Array.isArray(window[r])?e=window[r]:window[r]=e,e}async function hk(r,e,n,s,l,u){const d=s[l];try{if(d)await e[d];else{const p=(await uv(n)).find(g=>g.measurementId===l);p&&await e[p.appId]}}catch(f){_t.error(f)}r("config",l,u)}async function fk(r,e,n,s,l){try{let u=[];if(l&&l.send_to){let d=l.send_to;Array.isArray(d)||(d=[d]);const f=await uv(n);for(const p of d){const g=f.find(v=>v.measurementId===p),w=g&&e[g.appId];if(w)u.push(w);else{u=[];break}}}u.length===0&&(u=Object.values(e)),await Promise.all(u),r("event",s,l||{})}catch(u){_t.error(u)}}function pk(r,e,n,s){async function l(u,...d){try{if(u==="event"){const[f,p]=d;await fk(r,e,n,f,p)}else if(u==="config"){const[f,p]=d;await hk(r,e,n,s,f,p)}else if(u==="consent"){const[f,p]=d;r("consent",f,p)}else if(u==="get"){const[f,p,g]=d;r("get",f,p,g)}else if(u==="set"){const[f]=d;r("set",f)}else r(u,...d)}catch(f){_t.error(f)}}return l}function mk(r,e,n,s,l){let u=function(...d){window[s].push(arguments)};return window[l]&&typeof window[l]=="function"&&(u=window[l]),window[l]=pk(u,r,e,n),{gtagCore:u,wrappedGtag:window[l]}}function gk(r){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Md)&&n.src.includes(r))return n;return null}/**
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
 */const _k=30,vk=1e3;class yk{constructor(e={},n=vk){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const cv=new yk;function wk(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function Ek(r){var e;const{appId:n,apiKey:s}=r,l={method:"GET",headers:wk(s)},u=ok.replace("{app-id}",n),d=await fetch(u,l);if(d.status!==200&&d.status!==304){let f="";try{const p=await d.json();!((e=p.error)===null||e===void 0)&&e.message&&(f=p.error.message)}catch{}throw Ct.create("config-fetch-failed",{httpStatus:d.status,responseMessage:f})}return d.json()}async function Sk(r,e=cv,n){const{appId:s,apiKey:l,measurementId:u}=r.options;if(!s)throw Ct.create("no-app-id");if(!l){if(u)return{measurementId:u,appId:s};throw Ct.create("no-api-key")}const d=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},f=new Tk;return setTimeout(async()=>{f.abort()},sk),dv({appId:s,apiKey:l,measurementId:u},d,f,e)}async function dv(r,{throttleEndTimeMillis:e,backoffCount:n},s,l=cv){var u;const{appId:d,measurementId:f}=r;try{await Ik(s,e)}catch(p){if(f)return _t.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:d,measurementId:f};throw p}try{const p=await Ek(r);return l.deleteThrottleMetadata(d),p}catch(p){const g=p;if(!Ck(g)){if(l.deleteThrottleMetadata(d),f)return _t.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:d,measurementId:f};throw p}const w=Number((u=g==null?void 0:g.customData)===null||u===void 0?void 0:u.httpStatus)===503?tm(n,l.intervalMillis,_k):tm(n,l.intervalMillis),v={throttleEndTimeMillis:Date.now()+w,backoffCount:n+1};return l.setThrottleMetadata(d,v),_t.debug(`Calling attemptFetch again in ${w} millis`),dv(r,v,s,l)}}function Ik(r,e){return new Promise((n,s)=>{const l=Math.max(e-Date.now(),0),u=setTimeout(n,l);r.addEventListener(()=>{clearTimeout(u),s(Ct.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Ck(r){if(!(r instanceof sn)||!r.customData)return!1;const e=Number(r.customData.httpStatus);return e===429||e===500||e===503||e===504}class Tk{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function kk(r,e,n,s,l){if(l&&l.global){r("event",n,s);return}else{const u=await e,d=Object.assign(Object.assign({},s),{send_to:u});r("event",n,d)}}/**
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
 */async function Rk(){if(Rg())try{await Ng()}catch(r){return _t.warn(Ct.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return _t.warn(Ct.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Nk(r,e,n,s,l,u,d){var f;const p=Sk(r);p.then(A=>{n[A.measurementId]=A.appId,r.options.measurementId&&A.measurementId!==r.options.measurementId&&_t.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${A.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(A=>_t.error(A)),e.push(p);const g=Rk().then(A=>{if(A)return s.getId()}),[w,v]=await Promise.all([p,g]);gk(u)||ck(u,w.measurementId),l("js",new Date);const S=(f=d==null?void 0:d.config)!==null&&f!==void 0?f:{};return S[ik]="firebase",S.update=!0,v!=null&&(S[rk]=v),l("config",w.measurementId,S),w.measurementId}/**
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
 */class Pk{constructor(e){this.app=e}_delete(){return delete Es[this.app.options.appId],Promise.resolve()}}let Es={},Gm=[];const qm={};let mc="dataLayer",Ak="gtag",Km,hv,Qm=!1;function Ok(){const r=[];if(Cg()&&r.push("This is a browser extension environment."),xw()||r.push("Cookies are not available."),r.length>0){const e=r.map((s,l)=>`(${l+1}) ${s}`).join(" "),n=Ct.create("invalid-analytics-context",{errorInfo:e});_t.warn(n.message)}}function xk(r,e,n){Ok();const s=r.options.appId;if(!s)throw Ct.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)_t.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ct.create("no-api-key");if(Es[s]!=null)throw Ct.create("already-exists",{id:s});if(!Qm){dk(mc);const{wrappedGtag:u,gtagCore:d}=mk(Es,Gm,qm,mc,Ak);hv=u,Km=d,Qm=!0}return Es[s]=Nk(r,Gm,qm,e,Km,mc,n),new Pk(r)}function Dk(r=Qc()){r=Tt(r);const e=Ar(r,kl);return e.isInitialized()?e.getImmediate():Lk(r)}function Lk(r,e={}){const n=Ar(r,kl);if(n.isInitialized()){const l=n.getImmediate();if(Cs(e,n.getOptions()))return l;throw Ct.create("already-initialized")}return n.initialize({options:e})}function Mk(r,e,n,s){r=Tt(r),kk(hv,Es[r.app.options.appId],e,n,s).catch(l=>_t.error(l))}const Ym="@firebase/analytics",Xm="0.10.10";function bk(){rn(new Ht(kl,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("installations-internal").getImmediate();return xk(s,l,n)},"PUBLIC")),rn(new Ht("analytics-internal",r,"PRIVATE")),Dt(Ym,Xm),Dt(Ym,Xm,"esm2017");function r(e){try{const n=e.getProvider(kl).getImmediate();return{logEvent:(s,l,u)=>Mk(n,s,l,u)}}catch(n){throw Ct.create("interop-component-reg-failed",{reason:n})}}}bk();function bd(r,e){var n={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(n[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(r);l<s.length;l++)e.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(r,s[l])&&(n[s[l]]=r[s[l]]);return n}function fv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Fk=fv,pv=new Pr("auth","Firebase",fv());/**
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
 */const Rl=new Ll("@firebase/auth");function Uk(r,...e){Rl.logLevel<=he.WARN&&Rl.warn(`Auth (${Ei}): ${r}`,...e)}function il(r,...e){Rl.logLevel<=he.ERROR&&Rl.error(`Auth (${Ei}): ${r}`,...e)}/**
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
 */function Cn(r,...e){throw Fd(r,...e)}function tn(r,...e){return Fd(r,...e)}function mv(r,e,n){const s=Object.assign(Object.assign({},Fk()),{[e]:n});return new Pr("auth","Firebase",s).create(e,{appName:r.name})}function er(r){return mv(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Fd(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return pv.create(r,...e)}function Y(r,e,...n){if(!r)throw Fd(e,...n)}function vn(r){const e="INTERNAL ASSERTION FAILED: "+r;throw il(e),new Error(e)}function Tn(r,e){r||vn(e)}/**
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
 */function jc(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function zk(){return Jm()==="http:"||Jm()==="https:"}function Jm(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function jk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zk()||Cg()||"connection"in navigator)?navigator.onLine:!0}function Wk(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Us{constructor(e,n){this.shortDelay=e,this.longDelay=n,Tn(n>e,"Short delay should be less than long delay!"),this.isMobile=qc()||Tg()}get(){return jk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ud(r,e){Tn(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class gv{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Bk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Vk=new Us(3e4,6e4);function Ql(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Ti(r,e,n,s,l={}){return _v(r,l,async()=>{let u={},d={};s&&(e==="GET"?d=s:u={body:JSON.stringify(s)});const f=wi(Object.assign({key:r.config.apiKey},d)).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const g=Object.assign({method:e,headers:p},u);return Aw()||(g.referrerPolicy="no-referrer"),gv.fetch()(yv(r,r.config.apiHost,n,f),g)})}async function _v(r,e,n){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},Bk),e);try{const l=new $k(r),u=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const d=await u.json();if("needConfirmation"in d)throw nl(r,"account-exists-with-different-credential",d);if(u.ok&&!("errorMessage"in d))return d;{const f=u.ok?d.errorMessage:d.error.message,[p,g]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw nl(r,"credential-already-in-use",d);if(p==="EMAIL_EXISTS")throw nl(r,"email-already-in-use",d);if(p==="USER_DISABLED")throw nl(r,"user-disabled",d);const w=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw mv(r,w,g);Cn(r,w)}}catch(l){if(l instanceof sn)throw l;Cn(r,"network-request-failed",{message:String(l)})}}async function vv(r,e,n,s,l={}){const u=await Ti(r,e,n,s,l);return"mfaPendingCredential"in u&&Cn(r,"multi-factor-auth-required",{_serverResponse:u}),u}function yv(r,e,n,s){const l=`${e}${n}?${s}`;return r.config.emulator?Ud(r.config,l):`${r.config.apiScheme}://${l}`}class $k{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(tn(this.auth,"network-request-failed")),Vk.get())})}}function nl(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const l=tn(r,e,s);return l.customData._tokenResponse=n,l}/**
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
 */async function Hk(r,e){return Ti(r,"POST","/v1/accounts:delete",e)}async function wv(r,e){return Ti(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ss(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Gk(r,e=!1){const n=Tt(r),s=await n.getIdToken(e),l=zd(s);Y(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const u=typeof l.firebase=="object"?l.firebase:void 0,d=u==null?void 0:u.sign_in_provider;return{claims:l,token:s,authTime:Ss(gc(l.auth_time)),issuedAtTime:Ss(gc(l.iat)),expirationTime:Ss(gc(l.exp)),signInProvider:d||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function gc(r){return Number(r)*1e3}function zd(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return il("JWT malformed, contained fewer than 3 sections"),null;try{const l=ul(n);return l?JSON.parse(l):(il("Failed to decode base64 JWT payload"),null)}catch(l){return il("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function Zm(r){const e=zd(r);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function xs(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof sn&&qk(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function qk({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class Kk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const l=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,l)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Wc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ss(this.lastLoginAt),this.creationTime=Ss(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Nl(r){var e;const n=r.auth,s=await r.getIdToken(),l=await xs(r,wv(n,{idToken:s}));Y(l==null?void 0:l.users.length,n,"internal-error");const u=l.users[0];r._notifyReloadListener(u);const d=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?Ev(u.providerUserInfo):[],f=Yk(r.providerData,d),p=r.isAnonymous,g=!(r.email&&u.passwordHash)&&!(f!=null&&f.length),w=p?g:!1,v={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:f,metadata:new Wc(u.createdAt,u.lastLoginAt),isAnonymous:w};Object.assign(r,v)}async function Qk(r){const e=Tt(r);await Nl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Yk(r,e){return[...r.filter(s=>!e.some(l=>l.providerId===s.providerId)),...e]}function Ev(r){return r.map(e=>{var{providerId:n}=e,s=bd(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Xk(r,e){const n=await _v(r,{},async()=>{const s=wi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:u}=r.config,d=yv(r,l,"/v1/token",`key=${u}`),f=await r._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",gv.fetch()(d,{method:"POST",headers:f,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Jk(r,e){return Ti(r,"POST","/v2/accounts:revokeToken",Ql(r,e))}/**
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
 */class ci{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Zm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const n=Zm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:l,expiresIn:u}=await Xk(e,n);this.updateTokensAndExpiration(s,l,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:l,expirationTime:u}=n,d=new ci;return s&&(Y(typeof s=="string","internal-error",{appName:e}),d.refreshToken=s),l&&(Y(typeof l=="string","internal-error",{appName:e}),d.accessToken=l),u&&(Y(typeof u=="number","internal-error",{appName:e}),d.expirationTime=u),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ci,this.toJSON())}_performRefresh(){return vn("not implemented")}}/**
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
 */function Hn(r,e){Y(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class yn{constructor(e){var{uid:n,auth:s,stsTokenManager:l}=e,u=bd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Kk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=l,this.accessToken=l.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new Wc(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const n=await xs(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Gk(this,e)}reload(){return Qk(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new yn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Nl(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(gn(this.auth.app))return Promise.reject(er(this.auth));const e=await this.getIdToken();return await xs(this,Hk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,l,u,d,f,p,g,w;const v=(s=n.displayName)!==null&&s!==void 0?s:void 0,S=(l=n.email)!==null&&l!==void 0?l:void 0,A=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,L=(d=n.photoURL)!==null&&d!==void 0?d:void 0,B=(f=n.tenantId)!==null&&f!==void 0?f:void 0,H=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,Ae=(g=n.createdAt)!==null&&g!==void 0?g:void 0,Oe=(w=n.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:xe,emailVerified:pe,isAnonymous:Xe,providerData:re,stsTokenManager:K}=n;Y(xe&&K,e,"internal-error");const ie=ci.fromJSON(this.name,K);Y(typeof xe=="string",e,"internal-error"),Hn(v,e.name),Hn(S,e.name),Y(typeof pe=="boolean",e,"internal-error"),Y(typeof Xe=="boolean",e,"internal-error"),Hn(A,e.name),Hn(L,e.name),Hn(B,e.name),Hn(H,e.name),Hn(Ae,e.name),Hn(Oe,e.name);const Ue=new yn({uid:xe,auth:e,email:S,emailVerified:pe,displayName:v,isAnonymous:Xe,photoURL:L,phoneNumber:A,tenantId:B,stsTokenManager:ie,createdAt:Ae,lastLoginAt:Oe});return re&&Array.isArray(re)&&(Ue.providerData=re.map(nt=>Object.assign({},nt))),H&&(Ue._redirectEventId=H),Ue}static async _fromIdTokenResponse(e,n,s=!1){const l=new ci;l.updateFromServerResponse(n);const u=new yn({uid:n.localId,auth:e,stsTokenManager:l,isAnonymous:s});return await Nl(u),u}static async _fromGetAccountInfoResponse(e,n,s){const l=n.users[0];Y(l.localId!==void 0,"internal-error");const u=l.providerUserInfo!==void 0?Ev(l.providerUserInfo):[],d=!(l.email&&l.passwordHash)&&!(u!=null&&u.length),f=new ci;f.updateFromIdToken(s);const p=new yn({uid:l.localId,auth:e,stsTokenManager:f,isAnonymous:d}),g={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:u,metadata:new Wc(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(u!=null&&u.length)};return Object.assign(p,g),p}}/**
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
 */const eg=new Map;function wn(r){Tn(r instanceof Function,"Expected a class definition");let e=eg.get(r);return e?(Tn(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,eg.set(r,e),e)}/**
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
 */class Sv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Sv.type="NONE";const tg=Sv;/**
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
 */function sl(r,e,n){return`firebase:${r}:${e}:${n}`}class di{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:l,name:u}=this.auth;this.fullUserKey=sl(this.userKey,l.apiKey,u),this.fullPersistenceKey=sl("persistence",l.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?yn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new di(wn(tg),e,s);const l=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=l[0]||wn(tg);const d=sl(s,e.config.apiKey,e.name);let f=null;for(const g of n)try{const w=await g._get(d);if(w){const v=yn._fromJSON(e,w);g!==u&&(f=v),u=g;break}}catch{}const p=l.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new di(u,e,s):(u=p[0],f&&await u._set(d,f.toJSON()),await Promise.all(n.map(async g=>{if(g!==u)try{await g._remove(d)}catch{}})),new di(u,e,s))}}/**
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
 */function ng(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(kv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Iv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Nv(e))return"Blackberry";if(Pv(e))return"Webos";if(Cv(e))return"Safari";if((e.includes("chrome/")||Tv(e))&&!e.includes("edge/"))return"Chrome";if(Rv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Iv(r=lt()){return/firefox\//i.test(r)}function Cv(r=lt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Tv(r=lt()){return/crios\//i.test(r)}function kv(r=lt()){return/iemobile/i.test(r)}function Rv(r=lt()){return/android/i.test(r)}function Nv(r=lt()){return/blackberry/i.test(r)}function Pv(r=lt()){return/webos/i.test(r)}function jd(r=lt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function Zk(r=lt()){var e;return jd(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function e1(){return Ow()&&document.documentMode===10}function Av(r=lt()){return jd(r)||Rv(r)||Pv(r)||Nv(r)||/windows phone/i.test(r)||kv(r)}/**
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
 */function Ov(r,e=[]){let n;switch(r){case"Browser":n=ng(lt());break;case"Worker":n=`${ng(lt())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ei}/${s}`}/**
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
 */class t1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=u=>new Promise((d,f)=>{try{const p=e(u);d(p)}catch(p){f(p)}});s.onAbort=n,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const l of n)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function n1(r,e={}){return Ti(r,"GET","/v2/passwordPolicy",Ql(r,e))}/**
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
 */const r1=6;class i1{constructor(e){var n,s,l,u;const d=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=d.minPasswordLength)!==null&&n!==void 0?n:r1,d.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=d.maxPasswordLength),d.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=d.containsLowercaseCharacter),d.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=d.containsUppercaseCharacter),d.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=d.containsNumericCharacter),d.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=d.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(l=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&l!==void 0?l:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,l,u,d,f;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(n=p.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(l=p.containsLowercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(u=p.containsUppercaseLetter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(d=p.containsNumericCharacter)!==null&&d!==void 0?d:!0),p.isValid&&(p.isValid=(f=p.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),p}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),l&&(n.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let l=0;l<e.length;l++)s=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,l,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class s1{constructor(e,n,s,l){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rg(this),this.idTokenSubscription=new rg(this),this.beforeStateQueue=new t1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=wn(n)),this._initializationPromise=this.queue(async()=>{var s,l;if(!this._deleted&&(this.persistenceManager=await di.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await wv(this,{idToken:e}),s=await yn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(gn(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let l=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,f=l==null?void 0:l._redirectEventId,p=await this.tryRedirectSignIn(e);(!d||d===f)&&(p!=null&&p.user)&&(l=p.user,u=!0)}if(!l)return this.directlySetCurrentUser(null);if(!l._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(l)}catch(d){l=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return l?this.reloadAndSetCurrentUserOrClear(l):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===l._redirectEventId?this.directlySetCurrentUser(l):this.reloadAndSetCurrentUserOrClear(l)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Nl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Wk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(gn(this.app))return Promise.reject(er(this));const n=e?Tt(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return gn(this.app)?Promise.reject(er(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return gn(this.app)?Promise.reject(er(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await n1(this),n=new i1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Pr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Jk(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&wn(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await di.create(this,[wn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,l){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let d=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(f,this,"internal-error"),f.then(()=>{d||u(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,s,l);return()=>{d=!0,p()}}else{const p=e.addObserver(n);return()=>{d=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ov(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const l=await this._getAppCheckToken();return l&&(n["X-Firebase-AppCheck"]=l),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Uk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Yl(r){return Tt(r)}class rg{constructor(e){this.auth=e,this.observer=null,this.addObserver=zw(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Wd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function o1(r){Wd=r}function l1(r){return Wd.loadJS(r)}function a1(){return Wd.gapiScript}function u1(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function c1(r,e){const n=Ar(r,"auth");if(n.isInitialized()){const l=n.getImmediate(),u=n.getOptions();if(Cs(u,e??{}))return l;Cn(l,"already-initialized")}return n.initialize({options:e})}function d1(r,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(wn);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function h1(r,e,n){const s=Yl(r);Y(s._canInitEmulator,s,"emulator-config-failed"),Y(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const l=!1,u=xv(e),{host:d,port:f}=f1(e),p=f===null?"":`:${f}`;s.config.emulator={url:`${u}//${d}${p}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:d,port:f,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:l})}),p1()}function xv(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function f1(r){const e=xv(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const u=l[1];return{host:u,port:ig(s.substr(u.length+1))}}else{const[u,d]=s.split(":");return{host:u,port:ig(d)}}}function ig(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function p1(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Dv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return vn("not implemented")}_getIdTokenResponse(e){return vn("not implemented")}_linkToIdToken(e,n){return vn("not implemented")}_getReauthenticationResolver(e){return vn("not implemented")}}/**
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
 */async function hi(r,e){return vv(r,"POST","/v1/accounts:signInWithIdp",Ql(r,e))}/**
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
 */const m1="http://localhost";class Nr extends Dv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Nr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Cn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:l}=n,u=bd(n,["providerId","signInMethod"]);if(!s||!l)return null;const d=new Nr(s,l);return d.idToken=u.idToken||void 0,d.accessToken=u.accessToken||void 0,d.secret=u.secret,d.nonce=u.nonce,d.pendingToken=u.pendingToken||null,d}_getIdTokenResponse(e){const n=this.buildRequest();return hi(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,hi(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,hi(e,n)}buildRequest(){const e={requestUri:m1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=wi(n)}return e}}/**
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
 */class Lv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class zs extends Lv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Gn extends zs{constructor(){super("facebook.com")}static credential(e){return Nr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gn.PROVIDER_ID="facebook.com";/**
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
 */class qn extends zs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Nr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return qn.credential(n,s)}catch{return null}}}qn.GOOGLE_SIGN_IN_METHOD="google.com";qn.PROVIDER_ID="google.com";/**
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
 */class Kn extends zs{constructor(){super("github.com")}static credential(e){return Nr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.GITHUB_SIGN_IN_METHOD="github.com";Kn.PROVIDER_ID="github.com";/**
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
 */class Qn extends zs{constructor(){super("twitter.com")}static credential(e,n){return Nr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Qn.credential(n,s)}catch{return null}}}Qn.TWITTER_SIGN_IN_METHOD="twitter.com";Qn.PROVIDER_ID="twitter.com";/**
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
 */async function g1(r,e){return vv(r,"POST","/v1/accounts:signUp",Ql(r,e))}/**
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
 */class rr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,l=!1){const u=await yn._fromIdTokenResponse(e,s,l),d=sg(s);return new rr({user:u,providerId:d,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const l=sg(s);return new rr({user:e,providerId:l,_tokenResponse:s,operationType:n})}}function sg(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */async function _1(r){var e;if(gn(r.app))return Promise.reject(er(r));const n=Yl(r);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new rr({user:n.currentUser,providerId:null,operationType:"signIn"});const s=await g1(n,{returnSecureToken:!0}),l=await rr._fromIdTokenResponse(n,"signIn",s,!0);return await n._updateCurrentUser(l.user),l}/**
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
 */class Pl extends sn{constructor(e,n,s,l){var u;super(n.code,n.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,Pl.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,l){return new Pl(e,n,s,l)}}function Mv(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Pl._fromErrorAndOperation(r,u,e,s):u})}async function v1(r,e,n=!1){const s=await xs(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return rr._forOperation(r,"link",s)}/**
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
 */async function y1(r,e,n=!1){const{auth:s}=r;if(gn(s.app))return Promise.reject(er(s));const l="reauthenticate";try{const u=await xs(r,Mv(s,l,e,r),n);Y(u.idToken,s,"internal-error");const d=zd(u.idToken);Y(d,s,"internal-error");const{sub:f}=d;return Y(r.uid===f,s,"user-mismatch"),rr._forOperation(r,l,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Cn(s,"user-mismatch"),u}}/**
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
 */async function w1(r,e,n=!1){if(gn(r.app))return Promise.reject(er(r));const s="signIn",l=await Mv(r,s,e),u=await rr._fromIdTokenResponse(r,s,l);return n||await r._updateCurrentUser(u.user),u}function E1(r,e,n,s){return Tt(r).onIdTokenChanged(e,n,s)}function S1(r,e,n){return Tt(r).beforeAuthStateChanged(e,n)}const Al="__sak";/**
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
 */class bv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Al,"1"),this.storage.removeItem(Al),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const I1=1e3,C1=10;class Fv extends bv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Av(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),l=this.localCache[n];s!==l&&e(n,l,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((d,f,p)=>{this.notifyListeners(d,p)});return}const s=e.key;n?this.detachListener():this.stopPolling();const l=()=>{const d=this.storage.getItem(s);!n&&this.localCache[s]===d||this.notifyListeners(s,d)},u=this.storage.getItem(s);e1()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,C1):l()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},I1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fv.type="LOCAL";const T1=Fv;/**
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
 */class Uv extends bv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Uv.type="SESSION";const zv=Uv;/**
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
 */function k1(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Xl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(l=>l.isListeningto(e));if(n)return n;const s=new Xl(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:l,data:u}=n.data,d=this.handlersMap[l];if(!(d!=null&&d.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const f=Array.from(d).map(async g=>g(n.origin,u)),p=await k1(f);n.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xl.receivers=[];/**
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
 */function Bd(r="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return r+n}/**
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
 */class R1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let u,d;return new Promise((f,p)=>{const g=Bd("",20);l.port1.start();const w=setTimeout(()=>{p(new Error("unsupported_event"))},s);d={messageChannel:l,onMessage(v){const S=v;if(S.data.eventId===g)switch(S.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),f(S.data.response);break;default:clearTimeout(w),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(d),l.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[l.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
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
 */function nn(){return window}function N1(r){nn().location.href=r}/**
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
 */function jv(){return typeof nn().WorkerGlobalScope<"u"&&typeof nn().importScripts=="function"}async function P1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function A1(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function O1(){return jv()?self:null}/**
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
 */const Wv="firebaseLocalStorageDb",x1=1,Ol="firebaseLocalStorage",Bv="fbase_key";class js{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Jl(r,e){return r.transaction([Ol],e?"readwrite":"readonly").objectStore(Ol)}function D1(){const r=indexedDB.deleteDatabase(Wv);return new js(r).toPromise()}function Bc(){const r=indexedDB.open(Wv,x1);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Ol,{keyPath:Bv})}catch(l){n(l)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Ol)?e(s):(s.close(),await D1(),e(await Bc()))})})}async function og(r,e,n){const s=Jl(r,!0).put({[Bv]:e,value:n});return new js(s).toPromise()}async function L1(r,e){const n=Jl(r,!1).get(e),s=await new js(n).toPromise();return s===void 0?null:s.value}function lg(r,e){const n=Jl(r,!0).delete(e);return new js(n).toPromise()}const M1=800,b1=3;class Vv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>b1)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xl._getInstance(O1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await P1(),!this.activeServiceWorker)return;this.sender=new R1(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||A1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bc();return await og(e,Al,"1"),await lg(e,Al),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>og(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>L1(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>lg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const u=Jl(l,!1).getAll();return new js(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:l,value:u}of e)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(u)&&(this.notifyListeners(l,u),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),M1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Vv.type="LOCAL";const F1=Vv;new Us(3e4,6e4);/**
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
 */function U1(r,e){return e?wn(e):(Y(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Vd extends Dv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return hi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return hi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return hi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function z1(r){return w1(r.auth,new Vd(r),r.bypassAuthState)}function j1(r){const{auth:e,user:n}=r;return Y(n,e,"internal-error"),y1(n,new Vd(r),r.bypassAuthState)}async function W1(r){const{auth:e,user:n}=r;return Y(n,e,"internal-error"),v1(n,new Vd(r),r.bypassAuthState)}/**
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
 */class $v{constructor(e,n,s,l,u=!1){this.auth=e,this.resolver=s,this.user=l,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:l,tenantId:u,error:d,type:f}=e;if(d){this.reject(d);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return z1;case"linkViaPopup":case"linkViaRedirect":return W1;case"reauthViaPopup":case"reauthViaRedirect":return j1;default:Cn(this.auth,"internal-error")}}resolve(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const B1=new Us(2e3,1e4);class oi extends $v{constructor(e,n,s,l,u){super(e,n,l,u),this.provider=s,this.authWindow=null,this.pollId=null,oi.currentPopupAction&&oi.currentPopupAction.cancel(),oi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){Tn(this.filter.length===1,"Popup operations only handle one event");const e=Bd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,oi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,B1.get())};e()}}oi.currentPopupAction=null;/**
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
 */const V1="pendingRedirect",ol=new Map;class $1 extends $v{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ol.get(this.auth._key());if(!e){try{const s=await H1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ol.set(this.auth._key(),e)}return this.bypassAuthState||ol.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function H1(r,e){const n=K1(e),s=q1(r);if(!await s._isAvailable())return!1;const l=await s._get(n)==="true";return await s._remove(n),l}function G1(r,e){ol.set(r._key(),e)}function q1(r){return wn(r._redirectPersistence)}function K1(r){return sl(V1,r.config.apiKey,r.name)}async function Q1(r,e,n=!1){if(gn(r.app))return Promise.reject(er(r));const s=Yl(r),l=U1(s,e),d=await new $1(s,l,n).execute();return d&&!n&&(delete d.user._redirectEventId,await s._persistUserIfCurrent(d.user),await s._setRedirectUser(null,e)),d}/**
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
 */const Y1=10*60*1e3;class X1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!J1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Hv(e)){const l=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(tn(this.auth,l))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Y1&&this.cachedEventUids.clear(),this.cachedEventUids.has(ag(e))}saveEventToCache(e){this.cachedEventUids.add(ag(e)),this.lastProcessedEventTime=Date.now()}}function ag(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Hv({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function J1(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hv(r);default:return!1}}/**
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
 */async function Z1(r,e={}){return Ti(r,"GET","/v1/projects",e)}/**
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
 */const eR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tR=/^https?/;async function nR(r){if(r.config.emulator)return;const{authorizedDomains:e}=await Z1(r);for(const n of e)try{if(rR(n))return}catch{}Cn(r,"unauthorized-domain")}function rR(r){const e=jc(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const d=new URL(r);return d.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&d.hostname===s}if(!tR.test(n))return!1;if(eR.test(r))return s===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
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
 */const iR=new Us(3e4,6e4);function ug(){const r=nn().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function sR(r){return new Promise((e,n)=>{var s,l,u;function d(){ug(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ug(),n(tn(r,"network-request-failed"))},timeout:iR.get()})}if(!((l=(s=nn().gapi)===null||s===void 0?void 0:s.iframes)===null||l===void 0)&&l.Iframe)e(gapi.iframes.getContext());else if(!((u=nn().gapi)===null||u===void 0)&&u.load)d();else{const f=u1("iframefcb");return nn()[f]=()=>{gapi.load?d():n(tn(r,"network-request-failed"))},l1(`${a1()}?onload=${f}`).catch(p=>n(p))}}).catch(e=>{throw ll=null,e})}let ll=null;function oR(r){return ll=ll||sR(r),ll}/**
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
 */const lR=new Us(5e3,15e3),aR="__/auth/iframe",uR="emulator/auth/iframe",cR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hR(r){const e=r.config;Y(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?Ud(e,uR):`https://${r.config.authDomain}/${aR}`,s={apiKey:e.apiKey,appName:r.name,v:Ei},l=dR.get(r.config.apiHost);l&&(s.eid=l);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${wi(s).slice(1)}`}async function fR(r){const e=await oR(r),n=nn().gapi;return Y(n,r,"internal-error"),e.open({where:document.body,url:hR(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cR,dontclear:!0},s=>new Promise(async(l,u)=>{await s.restyle({setHideOnLeave:!1});const d=tn(r,"network-request-failed"),f=nn().setTimeout(()=>{u(d)},lR.get());function p(){nn().clearTimeout(f),l(s)}s.ping(p).then(p,()=>{u(d)})}))}/**
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
 */const pR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mR=500,gR=600,_R="_blank",vR="http://localhost";class cg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yR(r,e,n,s=mR,l=gR){const u=Math.max((window.screen.availHeight-l)/2,0).toString(),d=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const p=Object.assign(Object.assign({},pR),{width:s.toString(),height:l.toString(),top:u,left:d}),g=lt().toLowerCase();n&&(f=Tv(g)?_R:n),Iv(g)&&(e=e||vR,p.scrollbars="yes");const w=Object.entries(p).reduce((S,[A,L])=>`${S}${A}=${L},`,"");if(Zk(g)&&f!=="_self")return wR(e||"",f),new cg(null);const v=window.open(e||"",f,w);Y(v,r,"popup-blocked");try{v.focus()}catch{}return new cg(v)}function wR(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const ER="__/auth/handler",SR="emulator/auth/handler",IR=encodeURIComponent("fac");async function dg(r,e,n,s,l,u){Y(r.config.authDomain,r,"auth-domain-config-required"),Y(r.config.apiKey,r,"invalid-api-key");const d={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:Ei,eventId:l};if(e instanceof Lv){e.setDefaultLanguage(r.languageCode),d.providerId=e.providerId||"",vc(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,v]of Object.entries({}))d[w]=v}if(e instanceof zs){const w=e.getScopes().filter(v=>v!=="");w.length>0&&(d.scopes=w.join(","))}r.tenantId&&(d.tid=r.tenantId);const f=d;for(const w of Object.keys(f))f[w]===void 0&&delete f[w];const p=await r._getAppCheckToken(),g=p?`#${IR}=${encodeURIComponent(p)}`:"";return`${CR(r)}?${wi(f).slice(1)}${g}`}function CR({config:r}){return r.emulator?Ud(r,SR):`https://${r.authDomain}/${ER}`}/**
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
 */const _c="webStorageSupport";class TR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zv,this._completeRedirectFn=Q1,this._overrideRedirectResult=G1}async _openPopup(e,n,s,l){var u;Tn((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const d=await dg(e,n,s,jc(),l);return yR(e,d,Bd())}async _openRedirect(e,n,s,l){await this._originValidation(e);const u=await dg(e,n,s,jc(),l);return N1(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:l,promise:u}=this.eventManagers[n];return l?Promise.resolve(l):(Tn(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await fR(e),s=new X1(e);return n.register("authEvent",l=>(Y(l==null?void 0:l.authEvent,e,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(_c,{type:_c},l=>{var u;const d=(u=l==null?void 0:l[0])===null||u===void 0?void 0:u[_c];d!==void 0&&n(!!d),Cn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=nR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Av()||Cv()||jd()}}const kR=TR;var hg="@firebase/auth",fg="1.8.1";/**
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
 */class RR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function NR(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function PR(r){rn(new Ht("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:d,authDomain:f}=s.options;Y(d&&!d.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:d,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ov(r)},g=new s1(s,l,u,p);return d1(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),rn(new Ht("auth-internal",e=>{const n=Yl(e.getProvider("auth").getImmediate());return(s=>new RR(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dt(hg,fg,NR(r)),Dt(hg,fg,"esm2017")}/**
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
 */const AR=5*60,OR=Ig("authIdTokenMaxAge")||AR;let pg=null;const xR=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>OR)return;const l=n==null?void 0:n.token;pg!==l&&(pg=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function DR(r=Qc()){const e=Ar(r,"auth");if(e.isInitialized())return e.getImmediate();const n=c1(r,{popupRedirectResolver:kR,persistence:[F1,T1,zv]}),s=Ig("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const d=xR(u.toString());S1(n,d,()=>d(n.currentUser)),E1(n,f=>d(f))}}const l=Eg("auth");return l&&h1(n,`http://${l}`),n}function LR(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}o1({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=l=>{const u=tn("internal-error");u.customData=l,n(u)},s.type="text/javascript",s.charset="UTF-8",LR().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});PR("Browser");const MR={apiKey:"AIzaSyB2SlnQ03tQfpjLMcleDimnz-wI6_BSXYE",authDomain:"my-multiplayer-dbf6b.firebaseapp.com",databaseURL:"https://my-multiplayer-dbf6b-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"my-multiplayer-dbf6b",storageBucket:"my-multiplayer-dbf6b.firebasestorage.app",messagingSenderId:"3902656578",appId:"1:3902656578:web:ea447bf59037a7d25b5ddb",measurementId:"G-3DVR8Y6VSM"},$d=Dg(MR);Dk($d);const Zl=fT($d),Vc=DR($d);_1(Vc).then(()=>{console.log("Signed in anonymously")}).catch(r=>{console.error("Error signing in anonymously:",r)});const bR=(r,e)=>{const n=Gl(Zl,`players/${r}`);$_(n,e).then(()=>{console.log("Data written successfully!")}).catch(s=>{console.error("Error writing data:",s)})},FR=(r,e,n)=>{const s=Gl(Zl,`players/${r}`);rT(s,{x:n,y:e}).then(()=>{console.log("Data updated successfully!")}).catch(l=>{console.error("Error updating data:",l)})},UR=r=>{const e=Gl(Zl,`players/${r}`);nT(e).then(()=>{console.log("Data removed successfully!")}).catch(n=>{console.error("Error deleting data:",n)})},zR=["moveU","moveR","moveD","moveL","dragon"];function Gv(r){const{rows:e,cols:n,setScore:s,players:l={},player:u}=r,d=Ve.useRef(null),[f,p]=Ve.useState(()=>yw(e,n)),[g,w]=Ve.useState(()=>0),[v,S]=Ve.useState(()=>0),[A,L]=Ve.useState(()=>2),[B,H]=Ve.useState(()=>0),[Ae,Oe]=Ve.useState(!1),xe=()=>{if(Ae)return;Oe(!0),console.log("##handleMovement",A,B,g,v);const re=setInterval(()=>{H(K=>(K+1)%4)},200);setTimeout(()=>{clearInterval(re),H(0),Oe(!1)},800)},pe=(re,K,ie)=>{console.log("##P",ie,re,"=>",K);const Ue=ie===0||ie===2,nt=Ue?e:n;if(K<0||K>=nt)return re;const qt=Ue?f[K][v].type:f[g][K].type;return qt===st.ROCK?re:(qt===st.WATER?L(4):L(ie),xe(),K)},Xe=re=>{switch(console.log("##keydown",re.key),re.key){case"ArrowUp":w(K=>{let ie=K-1;return console.log("##up",K,ie),pe(K,ie,0)});break;case"ArrowRight":S(K=>{let ie=K+1;return console.log("##right",K,ie),pe(K,ie,1)});break;case"ArrowDown":w(K=>{let ie=K+1;return console.log("##down",K,ie),pe(K,ie,2)});break;case"ArrowLeft":S(K=>{let ie=K-1;return console.log("##left",K,ie),pe(K,ie,3)});break}};return Ve.useEffect(()=>{f[g][v].type===st.FOOD&&setTimeout(()=>{let re=f;re[g][v].type=st.EMPTY,p(re),s(K=>K+1)},400),FR(u==null?void 0:u.id,g,v)},[g,v]),Ve.useEffect(()=>{var re;d&&((re=d==null?void 0:d.current)==null||re.focus())},[]),Ie.jsx("div",{tabIndex:"0",onKeyDown:Xe,ref:d,children:Ie.jsxs("div",{className:Zo.board,children:[Ie.jsx("div",{className:`${Zo.mycharacter} ${Zo[zR[A]]}`,style:{transform:`translate(${v*6}rem, ${g*6}rem)`,backgroundPosition:`${B*-44}px 0`}}),f.map((re,K)=>Ie.jsx("div",{className:Zo.row,children:re.map((ie,Ue)=>{const nt=g===K&&v===Ue;return Ie.jsx(gg,{isActive:nt,tile:ie},Ue)})},K))]})})}Gv.propTypes={rows:mn.number.isRequired,cols:mn.number.isRequired,setScore:mn.func.isRequired,players:mn.object,player:mn.object};const jR="_newPlayer_1dkh4_1",WR="_btnSubmit_1dkh4_10",mg={newPlayer:jR,btnSubmit:WR};function qv(r){const{user:e,setNewPlayer:n}=r,[s,l]=Ve.useState(""),[u,d]=Ve.useState("male"),f=()=>{n(!1);const g={name:s,score:0,x:0,y:0,character:""};bR(e==null?void 0:e.id,g)},p=g=>{d(g.target.value)};return Ie.jsxs("div",{className:mg.newPlayer,children:[Ie.jsx("div",{children:"New player"}),Ie.jsx("input",{type:"text",placeholder:"Enter your name",value:s,onChange:g=>l(g.target.value)}),Ie.jsx("br",{}),Ie.jsxs("select",{value:u,onChange:p,children:[Ie.jsx("option",{value:"male",children:"Man"}),Ie.jsx("option",{value:"female",children:"Women"}),Ie.jsx("option",{value:"snake",children:"Snake"})]}),Ie.jsx("button",{className:mg.btnSubmit,onClick:f,children:"Submit"})]})}qv.propTypes={user:mn.object.isRequired,setNewPlayer:mn.func.isRequired};function BR(){const[r,e]=Ve.useState(0),[n,s]=Ve.useState(null),[l,u]=Ve.useState(!0),[d,f]=Ve.useState({}),p=g=>{if(g)for(const w in g)console.log(`${w}: ${g[w]}`),w===d.id&&(f({...d,...g[w]}),u(!1))};return Ve.useEffect(()=>Vc.onAuthStateChanged(w=>{if(console.log("##user",w),w){let v=d;v.id=w.uid,f(v)}else console.log("User signed out")}),[Vc]),Ve.useEffect(()=>{const g=Gl(Zl,"players"),w=sT(g,v=>{p(v.val()),s(v.val())});return()=>w()},[]),console.log("##users",d,n),l?Ie.jsx(qv,{user:d,setNewPlayer:u}):Ie.jsxs(Ie.Fragment,{children:[Ie.jsxs("div",{style:{padding:"1rem",fontWeight:"bolder",display:"flex",justifyContent:"space-between"},children:[Ie.jsxs("div",{children:[" Score: ",r]}),Ie.jsx("button",{onClick:()=>{UR(d==null?void 0:d.id)},children:"Reset"})]}),Ie.jsx(Gv,{rows:9,cols:12,setScore:e,players:n,player:d})]})}Z0.createRoot(document.getElementById("root")).render(Ie.jsx(Ve.StrictMode,{children:Ie.jsx(BR,{})}));
