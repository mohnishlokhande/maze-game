(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=n(l);fetch(l.href,u)}})();function Hw(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Gu={exports:{}},hs={},Ku={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp;function qw(){if(jp)return Z;jp=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),v=Symbol.iterator;function S(I){return I===null||typeof I!="object"?null:(I=v&&I[v]||I["@@iterator"],typeof I=="function"?I:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,B={};function q(I,N,J){this.props=I,this.context=N,this.refs=B,this.updater=J||A}q.prototype.isReactComponent={},q.prototype.setState=function(I,N){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,N,"setState")},q.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function Oe(){}Oe.prototype=q.prototype;function Ie(I,N,J){this.props=I,this.context=N,this.refs=B,this.updater=J||A}var xe=Ie.prototype=new Oe;xe.constructor=Ie,L(xe,q.prototype),xe.isPureReactComponent=!0;var V=Array.isArray,X=Object.prototype.hasOwnProperty,ne={current:null},Ce={key:!0,ref:!0,__self:!0,__source:!0};function Ue(I,N,J){var re,oe={},le=null,me=null;if(N!=null)for(re in N.ref!==void 0&&(me=N.ref),N.key!==void 0&&(le=""+N.key),N)X.call(N,re)&&!Ce.hasOwnProperty(re)&&(oe[re]=N[re]);var ce=arguments.length-2;if(ce===1)oe.children=J;else if(1<ce){for(var Ee=Array(ce),yt=0;yt<ce;yt++)Ee[yt]=arguments[yt+2];oe.children=Ee}if(I&&I.defaultProps)for(re in ce=I.defaultProps,ce)oe[re]===void 0&&(oe[re]=ce[re]);return{$$typeof:r,type:I,key:le,ref:me,props:oe,_owner:ne.current}}function tt(I,N){return{$$typeof:r,type:I.type,key:N,ref:I.ref,props:I.props,_owner:I._owner}}function _t(I){return typeof I=="object"&&I!==null&&I.$$typeof===r}function ir(I){var N={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(J){return N[J]})}var Gt=/\/+/g;function vt(I,N){return typeof I=="object"&&I!==null&&I.key!=null?ir(""+I.key):N.toString(36)}function Lt(I,N,J,re,oe){var le=typeof I;(le==="undefined"||le==="boolean")&&(I=null);var me=!1;if(I===null)me=!0;else switch(le){case"string":case"number":me=!0;break;case"object":switch(I.$$typeof){case r:case e:me=!0}}if(me)return me=I,oe=oe(me),I=re===""?"."+vt(me,0):re,V(oe)?(J="",I!=null&&(J=I.replace(Gt,"$&/")+"/"),Lt(oe,N,J,"",function(yt){return yt})):oe!=null&&(_t(oe)&&(oe=tt(oe,J+(!oe.key||me&&me.key===oe.key?"":(""+oe.key).replace(Gt,"$&/")+"/")+I)),N.push(oe)),1;if(me=0,re=re===""?".":re+":",V(I))for(var ce=0;ce<I.length;ce++){le=I[ce];var Ee=re+vt(le,ce);me+=Lt(le,N,J,Ee,oe)}else if(Ee=S(I),typeof Ee=="function")for(I=Ee.call(I),ce=0;!(le=I.next()).done;)le=le.value,Ee=re+vt(le,ce++),me+=Lt(le,N,J,Ee,oe);else if(le==="object")throw N=String(I),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.");return me}function Kt(I,N,J){if(I==null)return I;var re=[],oe=0;return Lt(I,re,"","",function(le){return N.call(J,le,oe++)}),re}function lt(I){if(I._status===-1){var N=I._result;N=N(),N.then(function(J){(I._status===0||I._status===-1)&&(I._status=1,I._result=J)},function(J){(I._status===0||I._status===-1)&&(I._status=2,I._result=J)}),I._status===-1&&(I._status=0,I._result=N)}if(I._status===1)return I._result.default;throw I._result}var Re={current:null},M={transition:null},G={ReactCurrentDispatcher:Re,ReactCurrentBatchConfig:M,ReactCurrentOwner:ne};function U(){throw Error("act(...) is not supported in production builds of React.")}return Z.Children={map:Kt,forEach:function(I,N,J){Kt(I,function(){N.apply(this,arguments)},J)},count:function(I){var N=0;return Kt(I,function(){N++}),N},toArray:function(I){return Kt(I,function(N){return N})||[]},only:function(I){if(!_t(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},Z.Component=q,Z.Fragment=n,Z.Profiler=l,Z.PureComponent=Ie,Z.StrictMode=s,Z.Suspense=p,Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G,Z.act=U,Z.cloneElement=function(I,N,J){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var re=L({},I.props),oe=I.key,le=I.ref,me=I._owner;if(N!=null){if(N.ref!==void 0&&(le=N.ref,me=ne.current),N.key!==void 0&&(oe=""+N.key),I.type&&I.type.defaultProps)var ce=I.type.defaultProps;for(Ee in N)X.call(N,Ee)&&!Ce.hasOwnProperty(Ee)&&(re[Ee]=N[Ee]===void 0&&ce!==void 0?ce[Ee]:N[Ee])}var Ee=arguments.length-2;if(Ee===1)re.children=J;else if(1<Ee){ce=Array(Ee);for(var yt=0;yt<Ee;yt++)ce[yt]=arguments[yt+2];re.children=ce}return{$$typeof:r,type:I.type,key:oe,ref:le,props:re,_owner:me}},Z.createContext=function(I){return I={$$typeof:d,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:u,_context:I},I.Consumer=I},Z.createElement=Ue,Z.createFactory=function(I){var N=Ue.bind(null,I);return N.type=I,N},Z.createRef=function(){return{current:null}},Z.forwardRef=function(I){return{$$typeof:f,render:I}},Z.isValidElement=_t,Z.lazy=function(I){return{$$typeof:w,_payload:{_status:-1,_result:I},_init:lt}},Z.memo=function(I,N){return{$$typeof:g,type:I,compare:N===void 0?null:N}},Z.startTransition=function(I){var N=M.transition;M.transition={};try{I()}finally{M.transition=N}},Z.unstable_act=U,Z.useCallback=function(I,N){return Re.current.useCallback(I,N)},Z.useContext=function(I){return Re.current.useContext(I)},Z.useDebugValue=function(){},Z.useDeferredValue=function(I){return Re.current.useDeferredValue(I)},Z.useEffect=function(I,N){return Re.current.useEffect(I,N)},Z.useId=function(){return Re.current.useId()},Z.useImperativeHandle=function(I,N,J){return Re.current.useImperativeHandle(I,N,J)},Z.useInsertionEffect=function(I,N){return Re.current.useInsertionEffect(I,N)},Z.useLayoutEffect=function(I,N){return Re.current.useLayoutEffect(I,N)},Z.useMemo=function(I,N){return Re.current.useMemo(I,N)},Z.useReducer=function(I,N,J){return Re.current.useReducer(I,N,J)},Z.useRef=function(I){return Re.current.useRef(I)},Z.useState=function(I){return Re.current.useState(I)},Z.useSyncExternalStore=function(I,N,J){return Re.current.useSyncExternalStore(I,N,J)},Z.useTransition=function(){return Re.current.useTransition()},Z.version="18.3.1",Z}var Wp;function $c(){return Wp||(Wp=1,Ku.exports=qw()),Ku.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp;function Gw(){if(Bp)return hs;Bp=1;var r=$c(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(f,p,g){var w,v={},S=null,A=null;g!==void 0&&(S=""+g),p.key!==void 0&&(S=""+p.key),p.ref!==void 0&&(A=p.ref);for(w in p)s.call(p,w)&&!u.hasOwnProperty(w)&&(v[w]=p[w]);if(f&&f.defaultProps)for(w in p=f.defaultProps,p)v[w]===void 0&&(v[w]=p[w]);return{$$typeof:e,type:f,key:S,ref:A,props:v,_owner:l.current}}return hs.Fragment=n,hs.jsx=d,hs.jsxs=d,hs}var Vp;function Kw(){return Vp||(Vp=1,Gu.exports=Gw()),Gu.exports}var fe=Kw(),Ke=$c(),Zo={},Qu={exports:{}},ft={},Yu={exports:{}},Xu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p;function Qw(){return $p||($p=1,function(r){function e(M,G){var U=M.length;M.push(G);e:for(;0<U;){var I=U-1>>>1,N=M[I];if(0<l(N,G))M[I]=G,M[U]=N,U=I;else break e}}function n(M){return M.length===0?null:M[0]}function s(M){if(M.length===0)return null;var G=M[0],U=M.pop();if(U!==G){M[0]=U;e:for(var I=0,N=M.length,J=N>>>1;I<J;){var re=2*(I+1)-1,oe=M[re],le=re+1,me=M[le];if(0>l(oe,U))le<N&&0>l(me,oe)?(M[I]=me,M[le]=U,I=le):(M[I]=oe,M[re]=U,I=re);else if(le<N&&0>l(me,U))M[I]=me,M[le]=U,I=le;else break e}}return G}function l(M,G){var U=M.sortIndex-G.sortIndex;return U!==0?U:M.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var d=Date,f=d.now();r.unstable_now=function(){return d.now()-f}}var p=[],g=[],w=1,v=null,S=3,A=!1,L=!1,B=!1,q=typeof setTimeout=="function"?setTimeout:null,Oe=typeof clearTimeout=="function"?clearTimeout:null,Ie=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function xe(M){for(var G=n(g);G!==null;){if(G.callback===null)s(g);else if(G.startTime<=M)s(g),G.sortIndex=G.expirationTime,e(p,G);else break;G=n(g)}}function V(M){if(B=!1,xe(M),!L)if(n(p)!==null)L=!0,lt(X);else{var G=n(g);G!==null&&Re(V,G.startTime-M)}}function X(M,G){L=!1,B&&(B=!1,Oe(Ue),Ue=-1),A=!0;var U=S;try{for(xe(G),v=n(p);v!==null&&(!(v.expirationTime>G)||M&&!ir());){var I=v.callback;if(typeof I=="function"){v.callback=null,S=v.priorityLevel;var N=I(v.expirationTime<=G);G=r.unstable_now(),typeof N=="function"?v.callback=N:v===n(p)&&s(p),xe(G)}else s(p);v=n(p)}if(v!==null)var J=!0;else{var re=n(g);re!==null&&Re(V,re.startTime-G),J=!1}return J}finally{v=null,S=U,A=!1}}var ne=!1,Ce=null,Ue=-1,tt=5,_t=-1;function ir(){return!(r.unstable_now()-_t<tt)}function Gt(){if(Ce!==null){var M=r.unstable_now();_t=M;var G=!0;try{G=Ce(!0,M)}finally{G?vt():(ne=!1,Ce=null)}}else ne=!1}var vt;if(typeof Ie=="function")vt=function(){Ie(Gt)};else if(typeof MessageChannel<"u"){var Lt=new MessageChannel,Kt=Lt.port2;Lt.port1.onmessage=Gt,vt=function(){Kt.postMessage(null)}}else vt=function(){q(Gt,0)};function lt(M){Ce=M,ne||(ne=!0,vt())}function Re(M,G){Ue=q(function(){M(r.unstable_now())},G)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(M){M.callback=null},r.unstable_continueExecution=function(){L||A||(L=!0,lt(X))},r.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):tt=0<M?Math.floor(1e3/M):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_getFirstCallbackNode=function(){return n(p)},r.unstable_next=function(M){switch(S){case 1:case 2:case 3:var G=3;break;default:G=S}var U=S;S=G;try{return M()}finally{S=U}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(M,G){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var U=S;S=M;try{return G()}finally{S=U}},r.unstable_scheduleCallback=function(M,G,U){var I=r.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?I+U:I):U=I,M){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=U+N,M={id:w++,callback:G,priorityLevel:M,startTime:U,expirationTime:N,sortIndex:-1},U>I?(M.sortIndex=U,e(g,M),n(p)===null&&M===n(g)&&(B?(Oe(Ue),Ue=-1):B=!0,Re(V,U-I))):(M.sortIndex=N,e(p,M),L||A||(L=!0,lt(X))),M},r.unstable_shouldYield=ir,r.unstable_wrapCallback=function(M){var G=S;return function(){var U=S;S=G;try{return M.apply(this,arguments)}finally{S=U}}}}(Xu)),Xu}var Hp;function Yw(){return Hp||(Hp=1,Yu.exports=Qw()),Yu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp;function Xw(){if(qp)return ft;qp=1;var r=$c(),e=Yw();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function u(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(l[t]=i,t=0;t<i.length;t++)s.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},v={};function S(t){return p.call(v,t)?!0:p.call(w,t)?!1:g.test(t)?v[t]=!0:(w[t]=!0,!1)}function A(t,i,o,a){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return a?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function L(t,i,o,a){if(i===null||typeof i>"u"||A(t,i,o,a))return!0;if(a)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function B(t,i,o,a,c,h,m){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=a,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=m}var q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){q[t]=new B(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];q[i]=new B(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){q[t]=new B(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){q[t]=new B(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){q[t]=new B(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){q[t]=new B(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){q[t]=new B(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){q[t]=new B(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){q[t]=new B(t,5,!1,t.toLowerCase(),null,!1,!1)});var Oe=/[\-:]([a-z])/g;function Ie(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(Oe,Ie);q[i]=new B(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(Oe,Ie);q[i]=new B(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(Oe,Ie);q[i]=new B(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){q[t]=new B(t,1,!1,t.toLowerCase(),null,!1,!1)}),q.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){q[t]=new B(t,1,!1,t.toLowerCase(),null,!0,!0)});function xe(t,i,o,a){var c=q.hasOwnProperty(i)?q[i]:null;(c!==null?c.type!==0:a||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(L(i,o,c,a)&&(o=null),a||c===null?S(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):c.mustUseProperty?t[c.propertyName]=o===null?c.type===3?!1:"":o:(i=c.attributeName,a=c.attributeNamespace,o===null?t.removeAttribute(i):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,a?t.setAttributeNS(a,i,o):t.setAttribute(i,o))))}var V=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,X=Symbol.for("react.element"),ne=Symbol.for("react.portal"),Ce=Symbol.for("react.fragment"),Ue=Symbol.for("react.strict_mode"),tt=Symbol.for("react.profiler"),_t=Symbol.for("react.provider"),ir=Symbol.for("react.context"),Gt=Symbol.for("react.forward_ref"),vt=Symbol.for("react.suspense"),Lt=Symbol.for("react.suspense_list"),Kt=Symbol.for("react.memo"),lt=Symbol.for("react.lazy"),Re=Symbol.for("react.offscreen"),M=Symbol.iterator;function G(t){return t===null||typeof t!="object"?null:(t=M&&t[M]||t["@@iterator"],typeof t=="function"?t:null)}var U=Object.assign,I;function N(t){if(I===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+t}var J=!1;function re(t,i){if(!t||J)return"";J=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(k){var a=k}Reflect.construct(t,[],i)}else{try{i.call()}catch(k){a=k}t.call(i.prototype)}else{try{throw Error()}catch(k){a=k}t()}}catch(k){if(k&&a&&typeof k.stack=="string"){for(var c=k.stack.split(`
`),h=a.stack.split(`
`),m=c.length-1,_=h.length-1;1<=m&&0<=_&&c[m]!==h[_];)_--;for(;1<=m&&0<=_;m--,_--)if(c[m]!==h[_]){if(m!==1||_!==1)do if(m--,_--,0>_||c[m]!==h[_]){var y=`
`+c[m].replace(" at new "," at ");return t.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",t.displayName)),y}while(1<=m&&0<=_);break}}}finally{J=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?N(t):""}function oe(t){switch(t.tag){case 5:return N(t.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return t=re(t.type,!1),t;case 11:return t=re(t.type.render,!1),t;case 1:return t=re(t.type,!0),t;default:return""}}function le(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ce:return"Fragment";case ne:return"Portal";case tt:return"Profiler";case Ue:return"StrictMode";case vt:return"Suspense";case Lt:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ir:return(t.displayName||"Context")+".Consumer";case _t:return(t._context.displayName||"Context")+".Provider";case Gt:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Kt:return i=t.displayName||null,i!==null?i:le(t.type)||"Memo";case lt:i=t._payload,t=t._init;try{return le(t(i))}catch{}}return null}function me(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return le(i);case 8:return i===Ue?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ce(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ee(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function yt(t){var i=Ee(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),a=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(m){a=""+m,h.call(this,m)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(m){a=""+m},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Bs(t){t._valueTracker||(t._valueTracker=yt(t))}function Hd(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),a="";return t&&(a=Ee(t)?t.checked?"true":"false":t.value),t=a,t!==o?(i.setValue(t),!0):!1}function Vs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ea(t,i){var o=i.checked;return U({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function qd(t,i){var o=i.defaultValue==null?"":i.defaultValue,a=i.checked!=null?i.checked:i.defaultChecked;o=ce(i.value!=null?i.value:o),t._wrapperState={initialChecked:a,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Gd(t,i){i=i.checked,i!=null&&xe(t,"checked",i,!1)}function ta(t,i){Gd(t,i);var o=ce(i.value),a=i.type;if(o!=null)a==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(a==="submit"||a==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?na(t,i.type,o):i.hasOwnProperty("defaultValue")&&na(t,i.type,ce(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Kd(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var a=i.type;if(!(a!=="submit"&&a!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function na(t,i,o){(i!=="number"||Vs(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Ri=Array.isArray;function Lr(t,i,o,a){if(t=t.options,i){i={};for(var c=0;c<o.length;c++)i["$"+o[c]]=!0;for(o=0;o<t.length;o++)c=i.hasOwnProperty("$"+t[o].value),t[o].selected!==c&&(t[o].selected=c),c&&a&&(t[o].defaultSelected=!0)}else{for(o=""+ce(o),i=null,c=0;c<t.length;c++){if(t[c].value===o){t[c].selected=!0,a&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function ra(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return U({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Qd(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(Ri(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:ce(o)}}function Yd(t,i){var o=ce(i.value),a=ce(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),a!=null&&(t.defaultValue=""+a)}function Xd(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function Jd(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ia(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?Jd(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var $s,Zd=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,a,c){MSApp.execUnsafeLocalFunction(function(){return t(i,o,a,c)})}:t}(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for($s=$s||document.createElement("div"),$s.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=$s.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Ni(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Pi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qv=["Webkit","ms","Moz","O"];Object.keys(Pi).forEach(function(t){Qv.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Pi[i]=Pi[t]})});function eh(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Pi.hasOwnProperty(t)&&Pi[t]?(""+i).trim():i+"px"}function th(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var a=o.indexOf("--")===0,c=eh(o,i[o],a);o==="float"&&(o="cssFloat"),a?t.setProperty(o,c):t[o]=c}}var Yv=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sa(t,i){if(i){if(Yv[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function oa(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var la=null;function aa(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ua=null,Mr=null,br=null;function nh(t){if(t=Xi(t)){if(typeof ua!="function")throw Error(n(280));var i=t.stateNode;i&&(i=po(i),ua(t.stateNode,t.type,i))}}function rh(t){Mr?br?br.push(t):br=[t]:Mr=t}function ih(){if(Mr){var t=Mr,i=br;if(br=Mr=null,nh(t),i)for(t=0;t<i.length;t++)nh(i[t])}}function sh(t,i){return t(i)}function oh(){}var ca=!1;function lh(t,i,o){if(ca)return t(i,o);ca=!0;try{return sh(t,i,o)}finally{ca=!1,(Mr!==null||br!==null)&&(oh(),ih())}}function Ai(t,i){var o=t.stateNode;if(o===null)return null;var a=po(o);if(a===null)return null;o=a[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var da=!1;if(f)try{var Oi={};Object.defineProperty(Oi,"passive",{get:function(){da=!0}}),window.addEventListener("test",Oi,Oi),window.removeEventListener("test",Oi,Oi)}catch{da=!1}function Xv(t,i,o,a,c,h,m,_,y){var k=Array.prototype.slice.call(arguments,3);try{i.apply(o,k)}catch(P){this.onError(P)}}var xi=!1,Hs=null,qs=!1,ha=null,Jv={onError:function(t){xi=!0,Hs=t}};function Zv(t,i,o,a,c,h,m,_,y){xi=!1,Hs=null,Xv.apply(Jv,arguments)}function ey(t,i,o,a,c,h,m,_,y){if(Zv.apply(this,arguments),xi){if(xi){var k=Hs;xi=!1,Hs=null}else throw Error(n(198));qs||(qs=!0,ha=k)}}function sr(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,i.flags&4098&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function ah(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function uh(t){if(sr(t)!==t)throw Error(n(188))}function ty(t){var i=t.alternate;if(!i){if(i=sr(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,a=i;;){var c=o.return;if(c===null)break;var h=c.alternate;if(h===null){if(a=c.return,a!==null){o=a;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===o)return uh(c),t;if(h===a)return uh(c),i;h=h.sibling}throw Error(n(188))}if(o.return!==a.return)o=c,a=h;else{for(var m=!1,_=c.child;_;){if(_===o){m=!0,o=c,a=h;break}if(_===a){m=!0,a=c,o=h;break}_=_.sibling}if(!m){for(_=h.child;_;){if(_===o){m=!0,o=h,a=c;break}if(_===a){m=!0,a=h,o=c;break}_=_.sibling}if(!m)throw Error(n(189))}}if(o.alternate!==a)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function ch(t){return t=ty(t),t!==null?dh(t):null}function dh(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=dh(t);if(i!==null)return i;t=t.sibling}return null}var hh=e.unstable_scheduleCallback,fh=e.unstable_cancelCallback,ny=e.unstable_shouldYield,ry=e.unstable_requestPaint,De=e.unstable_now,iy=e.unstable_getCurrentPriorityLevel,fa=e.unstable_ImmediatePriority,ph=e.unstable_UserBlockingPriority,Gs=e.unstable_NormalPriority,sy=e.unstable_LowPriority,mh=e.unstable_IdlePriority,Ks=null,Qt=null;function oy(t){if(Qt&&typeof Qt.onCommitFiberRoot=="function")try{Qt.onCommitFiberRoot(Ks,t,void 0,(t.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:uy,ly=Math.log,ay=Math.LN2;function uy(t){return t>>>=0,t===0?32:31-(ly(t)/ay|0)|0}var Qs=64,Ys=4194304;function Di(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Xs(t,i){var o=t.pendingLanes;if(o===0)return 0;var a=0,c=t.suspendedLanes,h=t.pingedLanes,m=o&268435455;if(m!==0){var _=m&~c;_!==0?a=Di(_):(h&=m,h!==0&&(a=Di(h)))}else m=o&~c,m!==0?a=Di(m):h!==0&&(a=Di(h));if(a===0)return 0;if(i!==0&&i!==a&&!(i&c)&&(c=a&-a,h=i&-i,c>=h||c===16&&(h&4194240)!==0))return i;if(a&4&&(a|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=a;0<i;)o=31-Mt(i),c=1<<o,a|=t[o],i&=~c;return a}function cy(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dy(t,i){for(var o=t.suspendedLanes,a=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var m=31-Mt(h),_=1<<m,y=c[m];y===-1?(!(_&o)||_&a)&&(c[m]=cy(_,i)):y<=i&&(t.expiredLanes|=_),h&=~_}}function pa(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function gh(){var t=Qs;return Qs<<=1,!(Qs&4194240)&&(Qs=64),t}function ma(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Li(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Mt(i),t[i]=o}function hy(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var a=t.eventTimes;for(t=t.expirationTimes;0<o;){var c=31-Mt(o),h=1<<c;i[c]=0,a[c]=-1,t[c]=-1,o&=~h}}function ga(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var a=31-Mt(o),c=1<<a;c&i|t[a]&i&&(t[a]|=i),o&=~c}}var de=0;function _h(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var vh,_a,yh,wh,Eh,va=!1,Js=[],Tn=null,kn=null,Rn=null,Mi=new Map,bi=new Map,Nn=[],fy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sh(t,i){switch(t){case"focusin":case"focusout":Tn=null;break;case"dragenter":case"dragleave":kn=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":Mi.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":bi.delete(i.pointerId)}}function Fi(t,i,o,a,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:a,nativeEvent:h,targetContainers:[c]},i!==null&&(i=Xi(i),i!==null&&_a(i)),t):(t.eventSystemFlags|=a,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function py(t,i,o,a,c){switch(i){case"focusin":return Tn=Fi(Tn,t,i,o,a,c),!0;case"dragenter":return kn=Fi(kn,t,i,o,a,c),!0;case"mouseover":return Rn=Fi(Rn,t,i,o,a,c),!0;case"pointerover":var h=c.pointerId;return Mi.set(h,Fi(Mi.get(h)||null,t,i,o,a,c)),!0;case"gotpointercapture":return h=c.pointerId,bi.set(h,Fi(bi.get(h)||null,t,i,o,a,c)),!0}return!1}function Ih(t){var i=or(t.target);if(i!==null){var o=sr(i);if(o!==null){if(i=o.tag,i===13){if(i=ah(o),i!==null){t.blockedOn=i,Eh(t.priority,function(){yh(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Zs(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=wa(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var a=new o.constructor(o.type,o);la=a,o.target.dispatchEvent(a),la=null}else return i=Xi(o),i!==null&&_a(i),t.blockedOn=o,!1;i.shift()}return!0}function Ch(t,i,o){Zs(t)&&o.delete(i)}function my(){va=!1,Tn!==null&&Zs(Tn)&&(Tn=null),kn!==null&&Zs(kn)&&(kn=null),Rn!==null&&Zs(Rn)&&(Rn=null),Mi.forEach(Ch),bi.forEach(Ch)}function Ui(t,i){t.blockedOn===i&&(t.blockedOn=null,va||(va=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,my)))}function zi(t){function i(c){return Ui(c,t)}if(0<Js.length){Ui(Js[0],t);for(var o=1;o<Js.length;o++){var a=Js[o];a.blockedOn===t&&(a.blockedOn=null)}}for(Tn!==null&&Ui(Tn,t),kn!==null&&Ui(kn,t),Rn!==null&&Ui(Rn,t),Mi.forEach(i),bi.forEach(i),o=0;o<Nn.length;o++)a=Nn[o],a.blockedOn===t&&(a.blockedOn=null);for(;0<Nn.length&&(o=Nn[0],o.blockedOn===null);)Ih(o),o.blockedOn===null&&Nn.shift()}var Fr=V.ReactCurrentBatchConfig,eo=!0;function gy(t,i,o,a){var c=de,h=Fr.transition;Fr.transition=null;try{de=1,ya(t,i,o,a)}finally{de=c,Fr.transition=h}}function _y(t,i,o,a){var c=de,h=Fr.transition;Fr.transition=null;try{de=4,ya(t,i,o,a)}finally{de=c,Fr.transition=h}}function ya(t,i,o,a){if(eo){var c=wa(t,i,o,a);if(c===null)Fa(t,i,a,to,o),Sh(t,a);else if(py(c,t,i,o,a))a.stopPropagation();else if(Sh(t,a),i&4&&-1<fy.indexOf(t)){for(;c!==null;){var h=Xi(c);if(h!==null&&vh(h),h=wa(t,i,o,a),h===null&&Fa(t,i,a,to,o),h===c)break;c=h}c!==null&&a.stopPropagation()}else Fa(t,i,a,null,o)}}var to=null;function wa(t,i,o,a){if(to=null,t=aa(a),t=or(t),t!==null)if(i=sr(t),i===null)t=null;else if(o=i.tag,o===13){if(t=ah(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return to=t,null}function Th(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(iy()){case fa:return 1;case ph:return 4;case Gs:case sy:return 16;case mh:return 536870912;default:return 16}default:return 16}}var Pn=null,Ea=null,no=null;function kh(){if(no)return no;var t,i=Ea,o=i.length,a,c="value"in Pn?Pn.value:Pn.textContent,h=c.length;for(t=0;t<o&&i[t]===c[t];t++);var m=o-t;for(a=1;a<=m&&i[o-a]===c[h-a];a++);return no=c.slice(t,1<a?1-a:void 0)}function ro(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function io(){return!0}function Rh(){return!1}function wt(t){function i(o,a,c,h,m){this._reactName=o,this._targetInst=c,this.type=a,this.nativeEvent=h,this.target=m,this.currentTarget=null;for(var _ in t)t.hasOwnProperty(_)&&(o=t[_],this[_]=o?o(h):h[_]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?io:Rh,this.isPropagationStopped=Rh,this}return U(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=io)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=io)},persist:function(){},isPersistent:io}),i}var Ur={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sa=wt(Ur),ji=U({},Ur,{view:0,detail:0}),vy=wt(ji),Ia,Ca,Wi,so=U({},ji,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ka,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Wi&&(Wi&&t.type==="mousemove"?(Ia=t.screenX-Wi.screenX,Ca=t.screenY-Wi.screenY):Ca=Ia=0,Wi=t),Ia)},movementY:function(t){return"movementY"in t?t.movementY:Ca}}),Nh=wt(so),yy=U({},so,{dataTransfer:0}),wy=wt(yy),Ey=U({},ji,{relatedTarget:0}),Ta=wt(Ey),Sy=U({},Ur,{animationName:0,elapsedTime:0,pseudoElement:0}),Iy=wt(Sy),Cy=U({},Ur,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ty=wt(Cy),ky=U({},Ur,{data:0}),Ph=wt(ky),Ry={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ny={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Py={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ay(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Py[t])?!!i[t]:!1}function ka(){return Ay}var Oy=U({},ji,{key:function(t){if(t.key){var i=Ry[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ro(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ny[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ka,charCode:function(t){return t.type==="keypress"?ro(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ro(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xy=wt(Oy),Dy=U({},so,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ah=wt(Dy),Ly=U({},ji,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ka}),My=wt(Ly),by=U({},Ur,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fy=wt(by),Uy=U({},so,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),zy=wt(Uy),jy=[9,13,27,32],Ra=f&&"CompositionEvent"in window,Bi=null;f&&"documentMode"in document&&(Bi=document.documentMode);var Wy=f&&"TextEvent"in window&&!Bi,Oh=f&&(!Ra||Bi&&8<Bi&&11>=Bi),xh=" ",Dh=!1;function Lh(t,i){switch(t){case"keyup":return jy.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var zr=!1;function By(t,i){switch(t){case"compositionend":return Mh(i);case"keypress":return i.which!==32?null:(Dh=!0,xh);case"textInput":return t=i.data,t===xh&&Dh?null:t;default:return null}}function Vy(t,i){if(zr)return t==="compositionend"||!Ra&&Lh(t,i)?(t=kh(),no=Ea=Pn=null,zr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Oh&&i.locale!=="ko"?null:i.data;default:return null}}var $y={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bh(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!$y[t.type]:i==="textarea"}function Fh(t,i,o,a){rh(a),i=co(i,"onChange"),0<i.length&&(o=new Sa("onChange","change",null,o,a),t.push({event:o,listeners:i}))}var Vi=null,$i=null;function Hy(t){tf(t,0)}function oo(t){var i=$r(t);if(Hd(i))return t}function qy(t,i){if(t==="change")return i}var Uh=!1;if(f){var Na;if(f){var Pa="oninput"in document;if(!Pa){var zh=document.createElement("div");zh.setAttribute("oninput","return;"),Pa=typeof zh.oninput=="function"}Na=Pa}else Na=!1;Uh=Na&&(!document.documentMode||9<document.documentMode)}function jh(){Vi&&(Vi.detachEvent("onpropertychange",Wh),$i=Vi=null)}function Wh(t){if(t.propertyName==="value"&&oo($i)){var i=[];Fh(i,$i,t,aa(t)),lh(Hy,i)}}function Gy(t,i,o){t==="focusin"?(jh(),Vi=i,$i=o,Vi.attachEvent("onpropertychange",Wh)):t==="focusout"&&jh()}function Ky(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return oo($i)}function Qy(t,i){if(t==="click")return oo(i)}function Yy(t,i){if(t==="input"||t==="change")return oo(i)}function Xy(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var bt=typeof Object.is=="function"?Object.is:Xy;function Hi(t,i){if(bt(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),a=Object.keys(i);if(o.length!==a.length)return!1;for(a=0;a<o.length;a++){var c=o[a];if(!p.call(i,c)||!bt(t[c],i[c]))return!1}return!0}function Bh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vh(t,i){var o=Bh(t);t=0;for(var a;o;){if(o.nodeType===3){if(a=t+o.textContent.length,t<=i&&a>=i)return{node:o,offset:i-t};t=a}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Bh(o)}}function $h(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?$h(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Hh(){for(var t=window,i=Vs();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=Vs(t.document)}return i}function Aa(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Jy(t){var i=Hh(),o=t.focusedElem,a=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&$h(o.ownerDocument.documentElement,o)){if(a!==null&&Aa(o)){if(i=a.start,t=a.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=o.textContent.length,h=Math.min(a.start,c);a=a.end===void 0?h:Math.min(a.end,c),!t.extend&&h>a&&(c=a,a=h,h=c),c=Vh(o,h);var m=Vh(o,a);c&&m&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==m.node||t.focusOffset!==m.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),h>a?(t.addRange(i),t.extend(m.node,m.offset)):(i.setEnd(m.node,m.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Zy=f&&"documentMode"in document&&11>=document.documentMode,jr=null,Oa=null,qi=null,xa=!1;function qh(t,i,o){var a=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;xa||jr==null||jr!==Vs(a)||(a=jr,"selectionStart"in a&&Aa(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),qi&&Hi(qi,a)||(qi=a,a=co(Oa,"onSelect"),0<a.length&&(i=new Sa("onSelect","select",null,i,o),t.push({event:i,listeners:a}),i.target=jr)))}function lo(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var Wr={animationend:lo("Animation","AnimationEnd"),animationiteration:lo("Animation","AnimationIteration"),animationstart:lo("Animation","AnimationStart"),transitionend:lo("Transition","TransitionEnd")},Da={},Gh={};f&&(Gh=document.createElement("div").style,"AnimationEvent"in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),"TransitionEvent"in window||delete Wr.transitionend.transition);function ao(t){if(Da[t])return Da[t];if(!Wr[t])return t;var i=Wr[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Gh)return Da[t]=i[o];return t}var Kh=ao("animationend"),Qh=ao("animationiteration"),Yh=ao("animationstart"),Xh=ao("transitionend"),Jh=new Map,Zh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function An(t,i){Jh.set(t,i),u(i,[t])}for(var La=0;La<Zh.length;La++){var Ma=Zh[La],ew=Ma.toLowerCase(),tw=Ma[0].toUpperCase()+Ma.slice(1);An(ew,"on"+tw)}An(Kh,"onAnimationEnd"),An(Qh,"onAnimationIteration"),An(Yh,"onAnimationStart"),An("dblclick","onDoubleClick"),An("focusin","onFocus"),An("focusout","onBlur"),An(Xh,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gi));function ef(t,i,o){var a=t.type||"unknown-event";t.currentTarget=o,ey(a,i,void 0,t),t.currentTarget=null}function tf(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var a=t[o],c=a.event;a=a.listeners;e:{var h=void 0;if(i)for(var m=a.length-1;0<=m;m--){var _=a[m],y=_.instance,k=_.currentTarget;if(_=_.listener,y!==h&&c.isPropagationStopped())break e;ef(c,_,k),h=y}else for(m=0;m<a.length;m++){if(_=a[m],y=_.instance,k=_.currentTarget,_=_.listener,y!==h&&c.isPropagationStopped())break e;ef(c,_,k),h=y}}}if(qs)throw t=ha,qs=!1,ha=null,t}function ye(t,i){var o=i[Va];o===void 0&&(o=i[Va]=new Set);var a=t+"__bubble";o.has(a)||(nf(i,t,2,!1),o.add(a))}function ba(t,i,o){var a=0;i&&(a|=4),nf(o,t,a,i)}var uo="_reactListening"+Math.random().toString(36).slice(2);function Ki(t){if(!t[uo]){t[uo]=!0,s.forEach(function(o){o!=="selectionchange"&&(nw.has(o)||ba(o,!1,t),ba(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[uo]||(i[uo]=!0,ba("selectionchange",!1,i))}}function nf(t,i,o,a){switch(Th(i)){case 1:var c=gy;break;case 4:c=_y;break;default:c=ya}o=c.bind(null,i,o,t),c=void 0,!da||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),a?c!==void 0?t.addEventListener(i,o,{capture:!0,passive:c}):t.addEventListener(i,o,!0):c!==void 0?t.addEventListener(i,o,{passive:c}):t.addEventListener(i,o,!1)}function Fa(t,i,o,a,c){var h=a;if(!(i&1)&&!(i&2)&&a!==null)e:for(;;){if(a===null)return;var m=a.tag;if(m===3||m===4){var _=a.stateNode.containerInfo;if(_===c||_.nodeType===8&&_.parentNode===c)break;if(m===4)for(m=a.return;m!==null;){var y=m.tag;if((y===3||y===4)&&(y=m.stateNode.containerInfo,y===c||y.nodeType===8&&y.parentNode===c))return;m=m.return}for(;_!==null;){if(m=or(_),m===null)return;if(y=m.tag,y===5||y===6){a=h=m;continue e}_=_.parentNode}}a=a.return}lh(function(){var k=h,P=aa(o),O=[];e:{var R=Jh.get(t);if(R!==void 0){var b=Sa,z=t;switch(t){case"keypress":if(ro(o)===0)break e;case"keydown":case"keyup":b=xy;break;case"focusin":z="focus",b=Ta;break;case"focusout":z="blur",b=Ta;break;case"beforeblur":case"afterblur":b=Ta;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Nh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=wy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=My;break;case Kh:case Qh:case Yh:b=Iy;break;case Xh:b=Fy;break;case"scroll":b=vy;break;case"wheel":b=zy;break;case"copy":case"cut":case"paste":b=Ty;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Ah}var j=(i&4)!==0,Le=!j&&t==="scroll",C=j?R!==null?R+"Capture":null:R;j=[];for(var E=k,T;E!==null;){T=E;var x=T.stateNode;if(T.tag===5&&x!==null&&(T=x,C!==null&&(x=Ai(E,C),x!=null&&j.push(Qi(E,x,T)))),Le)break;E=E.return}0<j.length&&(R=new b(R,z,null,o,P),O.push({event:R,listeners:j}))}}if(!(i&7)){e:{if(R=t==="mouseover"||t==="pointerover",b=t==="mouseout"||t==="pointerout",R&&o!==la&&(z=o.relatedTarget||o.fromElement)&&(or(z)||z[ln]))break e;if((b||R)&&(R=P.window===P?P:(R=P.ownerDocument)?R.defaultView||R.parentWindow:window,b?(z=o.relatedTarget||o.toElement,b=k,z=z?or(z):null,z!==null&&(Le=sr(z),z!==Le||z.tag!==5&&z.tag!==6)&&(z=null)):(b=null,z=k),b!==z)){if(j=Nh,x="onMouseLeave",C="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(j=Ah,x="onPointerLeave",C="onPointerEnter",E="pointer"),Le=b==null?R:$r(b),T=z==null?R:$r(z),R=new j(x,E+"leave",b,o,P),R.target=Le,R.relatedTarget=T,x=null,or(P)===k&&(j=new j(C,E+"enter",z,o,P),j.target=T,j.relatedTarget=Le,x=j),Le=x,b&&z)t:{for(j=b,C=z,E=0,T=j;T;T=Br(T))E++;for(T=0,x=C;x;x=Br(x))T++;for(;0<E-T;)j=Br(j),E--;for(;0<T-E;)C=Br(C),T--;for(;E--;){if(j===C||C!==null&&j===C.alternate)break t;j=Br(j),C=Br(C)}j=null}else j=null;b!==null&&rf(O,R,b,j,!1),z!==null&&Le!==null&&rf(O,Le,z,j,!0)}}e:{if(R=k?$r(k):window,b=R.nodeName&&R.nodeName.toLowerCase(),b==="select"||b==="input"&&R.type==="file")var W=qy;else if(bh(R))if(Uh)W=Yy;else{W=Ky;var $=Gy}else(b=R.nodeName)&&b.toLowerCase()==="input"&&(R.type==="checkbox"||R.type==="radio")&&(W=Qy);if(W&&(W=W(t,k))){Fh(O,W,o,P);break e}$&&$(t,R,k),t==="focusout"&&($=R._wrapperState)&&$.controlled&&R.type==="number"&&na(R,"number",R.value)}switch($=k?$r(k):window,t){case"focusin":(bh($)||$.contentEditable==="true")&&(jr=$,Oa=k,qi=null);break;case"focusout":qi=Oa=jr=null;break;case"mousedown":xa=!0;break;case"contextmenu":case"mouseup":case"dragend":xa=!1,qh(O,o,P);break;case"selectionchange":if(Zy)break;case"keydown":case"keyup":qh(O,o,P)}var H;if(Ra)e:{switch(t){case"compositionstart":var Q="onCompositionStart";break e;case"compositionend":Q="onCompositionEnd";break e;case"compositionupdate":Q="onCompositionUpdate";break e}Q=void 0}else zr?Lh(t,o)&&(Q="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(Q="onCompositionStart");Q&&(Oh&&o.locale!=="ko"&&(zr||Q!=="onCompositionStart"?Q==="onCompositionEnd"&&zr&&(H=kh()):(Pn=P,Ea="value"in Pn?Pn.value:Pn.textContent,zr=!0)),$=co(k,Q),0<$.length&&(Q=new Ph(Q,t,null,o,P),O.push({event:Q,listeners:$}),H?Q.data=H:(H=Mh(o),H!==null&&(Q.data=H)))),(H=Wy?By(t,o):Vy(t,o))&&(k=co(k,"onBeforeInput"),0<k.length&&(P=new Ph("onBeforeInput","beforeinput",null,o,P),O.push({event:P,listeners:k}),P.data=H))}tf(O,i)})}function Qi(t,i,o){return{instance:t,listener:i,currentTarget:o}}function co(t,i){for(var o=i+"Capture",a=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=Ai(t,o),h!=null&&a.unshift(Qi(t,h,c)),h=Ai(t,i),h!=null&&a.push(Qi(t,h,c))),t=t.return}return a}function Br(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function rf(t,i,o,a,c){for(var h=i._reactName,m=[];o!==null&&o!==a;){var _=o,y=_.alternate,k=_.stateNode;if(y!==null&&y===a)break;_.tag===5&&k!==null&&(_=k,c?(y=Ai(o,h),y!=null&&m.unshift(Qi(o,y,_))):c||(y=Ai(o,h),y!=null&&m.push(Qi(o,y,_)))),o=o.return}m.length!==0&&t.push({event:i,listeners:m})}var rw=/\r\n?/g,iw=/\u0000|\uFFFD/g;function sf(t){return(typeof t=="string"?t:""+t).replace(rw,`
`).replace(iw,"")}function ho(t,i,o){if(i=sf(i),sf(t)!==i&&o)throw Error(n(425))}function fo(){}var Ua=null,za=null;function ja(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Wa=typeof setTimeout=="function"?setTimeout:void 0,sw=typeof clearTimeout=="function"?clearTimeout:void 0,of=typeof Promise=="function"?Promise:void 0,ow=typeof queueMicrotask=="function"?queueMicrotask:typeof of<"u"?function(t){return of.resolve(null).then(t).catch(lw)}:Wa;function lw(t){setTimeout(function(){throw t})}function Ba(t,i){var o=i,a=0;do{var c=o.nextSibling;if(t.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(a===0){t.removeChild(c),zi(i);return}a--}else o!=="$"&&o!=="$?"&&o!=="$!"||a++;o=c}while(o);zi(i)}function On(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function lf(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var Vr=Math.random().toString(36).slice(2),Yt="__reactFiber$"+Vr,Yi="__reactProps$"+Vr,ln="__reactContainer$"+Vr,Va="__reactEvents$"+Vr,aw="__reactListeners$"+Vr,uw="__reactHandles$"+Vr;function or(t){var i=t[Yt];if(i)return i;for(var o=t.parentNode;o;){if(i=o[ln]||o[Yt]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=lf(t);t!==null;){if(o=t[Yt])return o;t=lf(t)}return i}t=o,o=t.parentNode}return null}function Xi(t){return t=t[Yt]||t[ln],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function $r(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function po(t){return t[Yi]||null}var $a=[],Hr=-1;function xn(t){return{current:t}}function we(t){0>Hr||(t.current=$a[Hr],$a[Hr]=null,Hr--)}function ge(t,i){Hr++,$a[Hr]=t.current,t.current=i}var Dn={},Xe=xn(Dn),at=xn(!1),lr=Dn;function qr(t,i){var o=t.type.contextTypes;if(!o)return Dn;var a=t.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===i)return a.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in o)c[h]=i[h];return a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function ut(t){return t=t.childContextTypes,t!=null}function mo(){we(at),we(Xe)}function af(t,i,o){if(Xe.current!==Dn)throw Error(n(168));ge(Xe,i),ge(at,o)}function uf(t,i,o){var a=t.stateNode;if(i=i.childContextTypes,typeof a.getChildContext!="function")return o;a=a.getChildContext();for(var c in a)if(!(c in i))throw Error(n(108,me(t)||"Unknown",c));return U({},o,a)}function go(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Dn,lr=Xe.current,ge(Xe,t),ge(at,at.current),!0}function cf(t,i,o){var a=t.stateNode;if(!a)throw Error(n(169));o?(t=uf(t,i,lr),a.__reactInternalMemoizedMergedChildContext=t,we(at),we(Xe),ge(Xe,t)):we(at),ge(at,o)}var an=null,_o=!1,Ha=!1;function df(t){an===null?an=[t]:an.push(t)}function cw(t){_o=!0,df(t)}function Ln(){if(!Ha&&an!==null){Ha=!0;var t=0,i=de;try{var o=an;for(de=1;t<o.length;t++){var a=o[t];do a=a(!0);while(a!==null)}an=null,_o=!1}catch(c){throw an!==null&&(an=an.slice(t+1)),hh(fa,Ln),c}finally{de=i,Ha=!1}}return null}var Gr=[],Kr=0,vo=null,yo=0,kt=[],Rt=0,ar=null,un=1,cn="";function ur(t,i){Gr[Kr++]=yo,Gr[Kr++]=vo,vo=t,yo=i}function hf(t,i,o){kt[Rt++]=un,kt[Rt++]=cn,kt[Rt++]=ar,ar=t;var a=un;t=cn;var c=32-Mt(a)-1;a&=~(1<<c),o+=1;var h=32-Mt(i)+c;if(30<h){var m=c-c%5;h=(a&(1<<m)-1).toString(32),a>>=m,c-=m,un=1<<32-Mt(i)+c|o<<c|a,cn=h+t}else un=1<<h|o<<c|a,cn=t}function qa(t){t.return!==null&&(ur(t,1),hf(t,1,0))}function Ga(t){for(;t===vo;)vo=Gr[--Kr],Gr[Kr]=null,yo=Gr[--Kr],Gr[Kr]=null;for(;t===ar;)ar=kt[--Rt],kt[Rt]=null,cn=kt[--Rt],kt[Rt]=null,un=kt[--Rt],kt[Rt]=null}var Et=null,St=null,Se=!1,Ft=null;function ff(t,i){var o=Ot(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function pf(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Et=t,St=On(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Et=t,St=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=ar!==null?{id:un,overflow:cn}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Ot(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Et=t,St=null,!0):!1;default:return!1}}function Ka(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Qa(t){if(Se){var i=St;if(i){var o=i;if(!pf(t,i)){if(Ka(t))throw Error(n(418));i=On(o.nextSibling);var a=Et;i&&pf(t,i)?ff(a,o):(t.flags=t.flags&-4097|2,Se=!1,Et=t)}}else{if(Ka(t))throw Error(n(418));t.flags=t.flags&-4097|2,Se=!1,Et=t}}}function mf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Et=t}function wo(t){if(t!==Et)return!1;if(!Se)return mf(t),Se=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!ja(t.type,t.memoizedProps)),i&&(i=St)){if(Ka(t))throw gf(),Error(n(418));for(;i;)ff(t,i),i=On(i.nextSibling)}if(mf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){St=On(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}St=null}}else St=Et?On(t.stateNode.nextSibling):null;return!0}function gf(){for(var t=St;t;)t=On(t.nextSibling)}function Qr(){St=Et=null,Se=!1}function Ya(t){Ft===null?Ft=[t]:Ft.push(t)}var dw=V.ReactCurrentBatchConfig;function Ji(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var a=o.stateNode}if(!a)throw Error(n(147,t));var c=a,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(m){var _=c.refs;m===null?delete _[h]:_[h]=m},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Eo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function _f(t){var i=t._init;return i(t._payload)}function vf(t){function i(C,E){if(t){var T=C.deletions;T===null?(C.deletions=[E],C.flags|=16):T.push(E)}}function o(C,E){if(!t)return null;for(;E!==null;)i(C,E),E=E.sibling;return null}function a(C,E){for(C=new Map;E!==null;)E.key!==null?C.set(E.key,E):C.set(E.index,E),E=E.sibling;return C}function c(C,E){return C=Bn(C,E),C.index=0,C.sibling=null,C}function h(C,E,T){return C.index=T,t?(T=C.alternate,T!==null?(T=T.index,T<E?(C.flags|=2,E):T):(C.flags|=2,E)):(C.flags|=1048576,E)}function m(C){return t&&C.alternate===null&&(C.flags|=2),C}function _(C,E,T,x){return E===null||E.tag!==6?(E=Wu(T,C.mode,x),E.return=C,E):(E=c(E,T),E.return=C,E)}function y(C,E,T,x){var W=T.type;return W===Ce?P(C,E,T.props.children,x,T.key):E!==null&&(E.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===lt&&_f(W)===E.type)?(x=c(E,T.props),x.ref=Ji(C,E,T),x.return=C,x):(x=Ho(T.type,T.key,T.props,null,C.mode,x),x.ref=Ji(C,E,T),x.return=C,x)}function k(C,E,T,x){return E===null||E.tag!==4||E.stateNode.containerInfo!==T.containerInfo||E.stateNode.implementation!==T.implementation?(E=Bu(T,C.mode,x),E.return=C,E):(E=c(E,T.children||[]),E.return=C,E)}function P(C,E,T,x,W){return E===null||E.tag!==7?(E=_r(T,C.mode,x,W),E.return=C,E):(E=c(E,T),E.return=C,E)}function O(C,E,T){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Wu(""+E,C.mode,T),E.return=C,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case X:return T=Ho(E.type,E.key,E.props,null,C.mode,T),T.ref=Ji(C,null,E),T.return=C,T;case ne:return E=Bu(E,C.mode,T),E.return=C,E;case lt:var x=E._init;return O(C,x(E._payload),T)}if(Ri(E)||G(E))return E=_r(E,C.mode,T,null),E.return=C,E;Eo(C,E)}return null}function R(C,E,T,x){var W=E!==null?E.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return W!==null?null:_(C,E,""+T,x);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case X:return T.key===W?y(C,E,T,x):null;case ne:return T.key===W?k(C,E,T,x):null;case lt:return W=T._init,R(C,E,W(T._payload),x)}if(Ri(T)||G(T))return W!==null?null:P(C,E,T,x,null);Eo(C,T)}return null}function b(C,E,T,x,W){if(typeof x=="string"&&x!==""||typeof x=="number")return C=C.get(T)||null,_(E,C,""+x,W);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case X:return C=C.get(x.key===null?T:x.key)||null,y(E,C,x,W);case ne:return C=C.get(x.key===null?T:x.key)||null,k(E,C,x,W);case lt:var $=x._init;return b(C,E,T,$(x._payload),W)}if(Ri(x)||G(x))return C=C.get(T)||null,P(E,C,x,W,null);Eo(E,x)}return null}function z(C,E,T,x){for(var W=null,$=null,H=E,Q=E=0,We=null;H!==null&&Q<T.length;Q++){H.index>Q?(We=H,H=null):We=H.sibling;var ae=R(C,H,T[Q],x);if(ae===null){H===null&&(H=We);break}t&&H&&ae.alternate===null&&i(C,H),E=h(ae,E,Q),$===null?W=ae:$.sibling=ae,$=ae,H=We}if(Q===T.length)return o(C,H),Se&&ur(C,Q),W;if(H===null){for(;Q<T.length;Q++)H=O(C,T[Q],x),H!==null&&(E=h(H,E,Q),$===null?W=H:$.sibling=H,$=H);return Se&&ur(C,Q),W}for(H=a(C,H);Q<T.length;Q++)We=b(H,C,Q,T[Q],x),We!==null&&(t&&We.alternate!==null&&H.delete(We.key===null?Q:We.key),E=h(We,E,Q),$===null?W=We:$.sibling=We,$=We);return t&&H.forEach(function(Vn){return i(C,Vn)}),Se&&ur(C,Q),W}function j(C,E,T,x){var W=G(T);if(typeof W!="function")throw Error(n(150));if(T=W.call(T),T==null)throw Error(n(151));for(var $=W=null,H=E,Q=E=0,We=null,ae=T.next();H!==null&&!ae.done;Q++,ae=T.next()){H.index>Q?(We=H,H=null):We=H.sibling;var Vn=R(C,H,ae.value,x);if(Vn===null){H===null&&(H=We);break}t&&H&&Vn.alternate===null&&i(C,H),E=h(Vn,E,Q),$===null?W=Vn:$.sibling=Vn,$=Vn,H=We}if(ae.done)return o(C,H),Se&&ur(C,Q),W;if(H===null){for(;!ae.done;Q++,ae=T.next())ae=O(C,ae.value,x),ae!==null&&(E=h(ae,E,Q),$===null?W=ae:$.sibling=ae,$=ae);return Se&&ur(C,Q),W}for(H=a(C,H);!ae.done;Q++,ae=T.next())ae=b(H,C,Q,ae.value,x),ae!==null&&(t&&ae.alternate!==null&&H.delete(ae.key===null?Q:ae.key),E=h(ae,E,Q),$===null?W=ae:$.sibling=ae,$=ae);return t&&H.forEach(function($w){return i(C,$w)}),Se&&ur(C,Q),W}function Le(C,E,T,x){if(typeof T=="object"&&T!==null&&T.type===Ce&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case X:e:{for(var W=T.key,$=E;$!==null;){if($.key===W){if(W=T.type,W===Ce){if($.tag===7){o(C,$.sibling),E=c($,T.props.children),E.return=C,C=E;break e}}else if($.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===lt&&_f(W)===$.type){o(C,$.sibling),E=c($,T.props),E.ref=Ji(C,$,T),E.return=C,C=E;break e}o(C,$);break}else i(C,$);$=$.sibling}T.type===Ce?(E=_r(T.props.children,C.mode,x,T.key),E.return=C,C=E):(x=Ho(T.type,T.key,T.props,null,C.mode,x),x.ref=Ji(C,E,T),x.return=C,C=x)}return m(C);case ne:e:{for($=T.key;E!==null;){if(E.key===$)if(E.tag===4&&E.stateNode.containerInfo===T.containerInfo&&E.stateNode.implementation===T.implementation){o(C,E.sibling),E=c(E,T.children||[]),E.return=C,C=E;break e}else{o(C,E);break}else i(C,E);E=E.sibling}E=Bu(T,C.mode,x),E.return=C,C=E}return m(C);case lt:return $=T._init,Le(C,E,$(T._payload),x)}if(Ri(T))return z(C,E,T,x);if(G(T))return j(C,E,T,x);Eo(C,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,E!==null&&E.tag===6?(o(C,E.sibling),E=c(E,T),E.return=C,C=E):(o(C,E),E=Wu(T,C.mode,x),E.return=C,C=E),m(C)):o(C,E)}return Le}var Yr=vf(!0),yf=vf(!1),So=xn(null),Io=null,Xr=null,Xa=null;function Ja(){Xa=Xr=Io=null}function Za(t){var i=So.current;we(So),t._currentValue=i}function eu(t,i,o){for(;t!==null;){var a=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,a!==null&&(a.childLanes|=i)):a!==null&&(a.childLanes&i)!==i&&(a.childLanes|=i),t===o)break;t=t.return}}function Jr(t,i){Io=t,Xa=Xr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&i&&(ct=!0),t.firstContext=null)}function Nt(t){var i=t._currentValue;if(Xa!==t)if(t={context:t,memoizedValue:i,next:null},Xr===null){if(Io===null)throw Error(n(308));Xr=t,Io.dependencies={lanes:0,firstContext:t}}else Xr=Xr.next=t;return i}var cr=null;function tu(t){cr===null?cr=[t]:cr.push(t)}function wf(t,i,o,a){var c=i.interleaved;return c===null?(o.next=o,tu(i)):(o.next=c.next,c.next=o),i.interleaved=o,dn(t,a)}function dn(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Mn=!1;function nu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ef(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hn(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function bn(t,i,o){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,se&2){var c=a.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),a.pending=i,dn(t,o)}return c=a.interleaved,c===null?(i.next=i,tu(a)):(i.next=c.next,c.next=i),a.interleaved=i,dn(t,o)}function Co(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var a=i.lanes;a&=t.pendingLanes,o|=a,i.lanes=o,ga(t,o)}}function Sf(t,i){var o=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,o===a)){var c=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var m={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?c=h=m:h=h.next=m,o=o.next}while(o!==null);h===null?c=h=i:h=h.next=i}else c=h=i;o={baseState:a.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:a.shared,effects:a.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function To(t,i,o,a){var c=t.updateQueue;Mn=!1;var h=c.firstBaseUpdate,m=c.lastBaseUpdate,_=c.shared.pending;if(_!==null){c.shared.pending=null;var y=_,k=y.next;y.next=null,m===null?h=k:m.next=k,m=y;var P=t.alternate;P!==null&&(P=P.updateQueue,_=P.lastBaseUpdate,_!==m&&(_===null?P.firstBaseUpdate=k:_.next=k,P.lastBaseUpdate=y))}if(h!==null){var O=c.baseState;m=0,P=k=y=null,_=h;do{var R=_.lane,b=_.eventTime;if((a&R)===R){P!==null&&(P=P.next={eventTime:b,lane:0,tag:_.tag,payload:_.payload,callback:_.callback,next:null});e:{var z=t,j=_;switch(R=i,b=o,j.tag){case 1:if(z=j.payload,typeof z=="function"){O=z.call(b,O,R);break e}O=z;break e;case 3:z.flags=z.flags&-65537|128;case 0:if(z=j.payload,R=typeof z=="function"?z.call(b,O,R):z,R==null)break e;O=U({},O,R);break e;case 2:Mn=!0}}_.callback!==null&&_.lane!==0&&(t.flags|=64,R=c.effects,R===null?c.effects=[_]:R.push(_))}else b={eventTime:b,lane:R,tag:_.tag,payload:_.payload,callback:_.callback,next:null},P===null?(k=P=b,y=O):P=P.next=b,m|=R;if(_=_.next,_===null){if(_=c.shared.pending,_===null)break;R=_,_=R.next,R.next=null,c.lastBaseUpdate=R,c.shared.pending=null}}while(!0);if(P===null&&(y=O),c.baseState=y,c.firstBaseUpdate=k,c.lastBaseUpdate=P,i=c.shared.interleaved,i!==null){c=i;do m|=c.lane,c=c.next;while(c!==i)}else h===null&&(c.shared.lanes=0);fr|=m,t.lanes=m,t.memoizedState=O}}function If(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var a=t[i],c=a.callback;if(c!==null){if(a.callback=null,a=o,typeof c!="function")throw Error(n(191,c));c.call(a)}}}var Zi={},Xt=xn(Zi),es=xn(Zi),ts=xn(Zi);function dr(t){if(t===Zi)throw Error(n(174));return t}function ru(t,i){switch(ge(ts,i),ge(es,t),ge(Xt,Zi),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ia(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=ia(i,t)}we(Xt),ge(Xt,i)}function Zr(){we(Xt),we(es),we(ts)}function Cf(t){dr(ts.current);var i=dr(Xt.current),o=ia(i,t.type);i!==o&&(ge(es,t),ge(Xt,o))}function iu(t){es.current===t&&(we(Xt),we(es))}var Te=xn(0);function ko(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var su=[];function ou(){for(var t=0;t<su.length;t++)su[t]._workInProgressVersionPrimary=null;su.length=0}var Ro=V.ReactCurrentDispatcher,lu=V.ReactCurrentBatchConfig,hr=0,ke=null,be=null,ze=null,No=!1,ns=!1,rs=0,hw=0;function Je(){throw Error(n(321))}function au(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!bt(t[o],i[o]))return!1;return!0}function uu(t,i,o,a,c,h){if(hr=h,ke=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ro.current=t===null||t.memoizedState===null?gw:_w,t=o(a,c),ns){h=0;do{if(ns=!1,rs=0,25<=h)throw Error(n(301));h+=1,ze=be=null,i.updateQueue=null,Ro.current=vw,t=o(a,c)}while(ns)}if(Ro.current=Oo,i=be!==null&&be.next!==null,hr=0,ze=be=ke=null,No=!1,i)throw Error(n(300));return t}function cu(){var t=rs!==0;return rs=0,t}function Jt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?ke.memoizedState=ze=t:ze=ze.next=t,ze}function Pt(){if(be===null){var t=ke.alternate;t=t!==null?t.memoizedState:null}else t=be.next;var i=ze===null?ke.memoizedState:ze.next;if(i!==null)ze=i,be=t;else{if(t===null)throw Error(n(310));be=t,t={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},ze===null?ke.memoizedState=ze=t:ze=ze.next=t}return ze}function is(t,i){return typeof i=="function"?i(t):i}function du(t){var i=Pt(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=be,c=a.baseQueue,h=o.pending;if(h!==null){if(c!==null){var m=c.next;c.next=h.next,h.next=m}a.baseQueue=c=h,o.pending=null}if(c!==null){h=c.next,a=a.baseState;var _=m=null,y=null,k=h;do{var P=k.lane;if((hr&P)===P)y!==null&&(y=y.next={lane:0,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),a=k.hasEagerState?k.eagerState:t(a,k.action);else{var O={lane:P,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null};y===null?(_=y=O,m=a):y=y.next=O,ke.lanes|=P,fr|=P}k=k.next}while(k!==null&&k!==h);y===null?m=a:y.next=_,bt(a,i.memoizedState)||(ct=!0),i.memoizedState=a,i.baseState=m,i.baseQueue=y,o.lastRenderedState=a}if(t=o.interleaved,t!==null){c=t;do h=c.lane,ke.lanes|=h,fr|=h,c=c.next;while(c!==t)}else c===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function hu(t){var i=Pt(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=o.dispatch,c=o.pending,h=i.memoizedState;if(c!==null){o.pending=null;var m=c=c.next;do h=t(h,m.action),m=m.next;while(m!==c);bt(h,i.memoizedState)||(ct=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,a]}function Tf(){}function kf(t,i){var o=ke,a=Pt(),c=i(),h=!bt(a.memoizedState,c);if(h&&(a.memoizedState=c,ct=!0),a=a.queue,fu(Pf.bind(null,o,a,t),[t]),a.getSnapshot!==i||h||ze!==null&&ze.memoizedState.tag&1){if(o.flags|=2048,ss(9,Nf.bind(null,o,a,c,i),void 0,null),je===null)throw Error(n(349));hr&30||Rf(o,i,c)}return c}function Rf(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=ke.updateQueue,i===null?(i={lastEffect:null,stores:null},ke.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Nf(t,i,o,a){i.value=o,i.getSnapshot=a,Af(i)&&Of(t)}function Pf(t,i,o){return o(function(){Af(i)&&Of(t)})}function Af(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!bt(t,o)}catch{return!0}}function Of(t){var i=dn(t,1);i!==null&&Wt(i,t,1,-1)}function xf(t){var i=Jt();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:t},i.queue=t,t=t.dispatch=mw.bind(null,ke,t),[i.memoizedState,t]}function ss(t,i,o,a){return t={tag:t,create:i,destroy:o,deps:a,next:null},i=ke.updateQueue,i===null?(i={lastEffect:null,stores:null},ke.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(a=o.next,o.next=t,t.next=a,i.lastEffect=t)),t}function Df(){return Pt().memoizedState}function Po(t,i,o,a){var c=Jt();ke.flags|=t,c.memoizedState=ss(1|i,o,void 0,a===void 0?null:a)}function Ao(t,i,o,a){var c=Pt();a=a===void 0?null:a;var h=void 0;if(be!==null){var m=be.memoizedState;if(h=m.destroy,a!==null&&au(a,m.deps)){c.memoizedState=ss(i,o,h,a);return}}ke.flags|=t,c.memoizedState=ss(1|i,o,h,a)}function Lf(t,i){return Po(8390656,8,t,i)}function fu(t,i){return Ao(2048,8,t,i)}function Mf(t,i){return Ao(4,2,t,i)}function bf(t,i){return Ao(4,4,t,i)}function Ff(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Uf(t,i,o){return o=o!=null?o.concat([t]):null,Ao(4,4,Ff.bind(null,i,t),o)}function pu(){}function zf(t,i){var o=Pt();i=i===void 0?null:i;var a=o.memoizedState;return a!==null&&i!==null&&au(i,a[1])?a[0]:(o.memoizedState=[t,i],t)}function jf(t,i){var o=Pt();i=i===void 0?null:i;var a=o.memoizedState;return a!==null&&i!==null&&au(i,a[1])?a[0]:(t=t(),o.memoizedState=[t,i],t)}function Wf(t,i,o){return hr&21?(bt(o,i)||(o=gh(),ke.lanes|=o,fr|=o,t.baseState=!0),i):(t.baseState&&(t.baseState=!1,ct=!0),t.memoizedState=o)}function fw(t,i){var o=de;de=o!==0&&4>o?o:4,t(!0);var a=lu.transition;lu.transition={};try{t(!1),i()}finally{de=o,lu.transition=a}}function Bf(){return Pt().memoizedState}function pw(t,i,o){var a=jn(t);if(o={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null},Vf(t))$f(i,o);else if(o=wf(t,i,o,a),o!==null){var c=rt();Wt(o,t,a,c),Hf(o,i,a)}}function mw(t,i,o){var a=jn(t),c={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null};if(Vf(t))$f(i,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var m=i.lastRenderedState,_=h(m,o);if(c.hasEagerState=!0,c.eagerState=_,bt(_,m)){var y=i.interleaved;y===null?(c.next=c,tu(i)):(c.next=y.next,y.next=c),i.interleaved=c;return}}catch{}finally{}o=wf(t,i,c,a),o!==null&&(c=rt(),Wt(o,t,a,c),Hf(o,i,a))}}function Vf(t){var i=t.alternate;return t===ke||i!==null&&i===ke}function $f(t,i){ns=No=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function Hf(t,i,o){if(o&4194240){var a=i.lanes;a&=t.pendingLanes,o|=a,i.lanes=o,ga(t,o)}}var Oo={readContext:Nt,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},gw={readContext:Nt,useCallback:function(t,i){return Jt().memoizedState=[t,i===void 0?null:i],t},useContext:Nt,useEffect:Lf,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Po(4194308,4,Ff.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Po(4194308,4,t,i)},useInsertionEffect:function(t,i){return Po(4,2,t,i)},useMemo:function(t,i){var o=Jt();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var a=Jt();return i=o!==void 0?o(i):i,a.memoizedState=a.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},a.queue=t,t=t.dispatch=pw.bind(null,ke,t),[a.memoizedState,t]},useRef:function(t){var i=Jt();return t={current:t},i.memoizedState=t},useState:xf,useDebugValue:pu,useDeferredValue:function(t){return Jt().memoizedState=t},useTransition:function(){var t=xf(!1),i=t[0];return t=fw.bind(null,t[1]),Jt().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var a=ke,c=Jt();if(Se){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),je===null)throw Error(n(349));hr&30||Rf(a,i,o)}c.memoizedState=o;var h={value:o,getSnapshot:i};return c.queue=h,Lf(Pf.bind(null,a,h,t),[t]),a.flags|=2048,ss(9,Nf.bind(null,a,h,o,i),void 0,null),o},useId:function(){var t=Jt(),i=je.identifierPrefix;if(Se){var o=cn,a=un;o=(a&~(1<<32-Mt(a)-1)).toString(32)+o,i=":"+i+"R"+o,o=rs++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=hw++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},_w={readContext:Nt,useCallback:zf,useContext:Nt,useEffect:fu,useImperativeHandle:Uf,useInsertionEffect:Mf,useLayoutEffect:bf,useMemo:jf,useReducer:du,useRef:Df,useState:function(){return du(is)},useDebugValue:pu,useDeferredValue:function(t){var i=Pt();return Wf(i,be.memoizedState,t)},useTransition:function(){var t=du(is)[0],i=Pt().memoizedState;return[t,i]},useMutableSource:Tf,useSyncExternalStore:kf,useId:Bf,unstable_isNewReconciler:!1},vw={readContext:Nt,useCallback:zf,useContext:Nt,useEffect:fu,useImperativeHandle:Uf,useInsertionEffect:Mf,useLayoutEffect:bf,useMemo:jf,useReducer:hu,useRef:Df,useState:function(){return hu(is)},useDebugValue:pu,useDeferredValue:function(t){var i=Pt();return be===null?i.memoizedState=t:Wf(i,be.memoizedState,t)},useTransition:function(){var t=hu(is)[0],i=Pt().memoizedState;return[t,i]},useMutableSource:Tf,useSyncExternalStore:kf,useId:Bf,unstable_isNewReconciler:!1};function Ut(t,i){if(t&&t.defaultProps){i=U({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function mu(t,i,o,a){i=t.memoizedState,o=o(a,i),o=o==null?i:U({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var xo={isMounted:function(t){return(t=t._reactInternals)?sr(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var a=rt(),c=jn(t),h=hn(a,c);h.payload=i,o!=null&&(h.callback=o),i=bn(t,h,c),i!==null&&(Wt(i,t,c,a),Co(i,t,c))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var a=rt(),c=jn(t),h=hn(a,c);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=bn(t,h,c),i!==null&&(Wt(i,t,c,a),Co(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=rt(),a=jn(t),c=hn(o,a);c.tag=2,i!=null&&(c.callback=i),i=bn(t,c,a),i!==null&&(Wt(i,t,a,o),Co(i,t,a))}};function qf(t,i,o,a,c,h,m){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,h,m):i.prototype&&i.prototype.isPureReactComponent?!Hi(o,a)||!Hi(c,h):!0}function Gf(t,i,o){var a=!1,c=Dn,h=i.contextType;return typeof h=="object"&&h!==null?h=Nt(h):(c=ut(i)?lr:Xe.current,a=i.contextTypes,h=(a=a!=null)?qr(t,c):Dn),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=xo,t.stateNode=i,i._reactInternals=t,a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),i}function Kf(t,i,o,a){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,a),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,a),i.state!==t&&xo.enqueueReplaceState(i,i.state,null)}function gu(t,i,o,a){var c=t.stateNode;c.props=o,c.state=t.memoizedState,c.refs={},nu(t);var h=i.contextType;typeof h=="object"&&h!==null?c.context=Nt(h):(h=ut(i)?lr:Xe.current,c.context=qr(t,h)),c.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(mu(t,i,h,o),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&xo.enqueueReplaceState(c,c.state,null),To(t,o,c,a),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function ei(t,i){try{var o="",a=i;do o+=oe(a),a=a.return;while(a);var c=o}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:c,digest:null}}function _u(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function vu(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var yw=typeof WeakMap=="function"?WeakMap:Map;function Qf(t,i,o){o=hn(-1,o),o.tag=3,o.payload={element:null};var a=i.value;return o.callback=function(){zo||(zo=!0,Du=a),vu(t,i)},o}function Yf(t,i,o){o=hn(-1,o),o.tag=3;var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var c=i.value;o.payload=function(){return a(c)},o.callback=function(){vu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){vu(t,i),typeof a!="function"&&(Un===null?Un=new Set([this]):Un.add(this));var m=i.stack;this.componentDidCatch(i.value,{componentStack:m!==null?m:""})}),o}function Xf(t,i,o){var a=t.pingCache;if(a===null){a=t.pingCache=new yw;var c=new Set;a.set(i,c)}else c=a.get(i),c===void 0&&(c=new Set,a.set(i,c));c.has(o)||(c.add(o),t=Dw.bind(null,t,i,o),i.then(t,t))}function Jf(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Zf(t,i,o,a,c){return t.mode&1?(t.flags|=65536,t.lanes=c,t):(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=hn(-1,1),i.tag=2,bn(o,i,1))),o.lanes|=1),t)}var ww=V.ReactCurrentOwner,ct=!1;function nt(t,i,o,a){i.child=t===null?yf(i,null,o,a):Yr(i,t.child,o,a)}function ep(t,i,o,a,c){o=o.render;var h=i.ref;return Jr(i,c),a=uu(t,i,o,a,h,c),o=cu(),t!==null&&!ct?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,fn(t,i,c)):(Se&&o&&qa(i),i.flags|=1,nt(t,i,a,c),i.child)}function tp(t,i,o,a,c){if(t===null){var h=o.type;return typeof h=="function"&&!ju(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,np(t,i,h,a,c)):(t=Ho(o.type,null,a,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,!(t.lanes&c)){var m=h.memoizedProps;if(o=o.compare,o=o!==null?o:Hi,o(m,a)&&t.ref===i.ref)return fn(t,i,c)}return i.flags|=1,t=Bn(h,a),t.ref=i.ref,t.return=i,i.child=t}function np(t,i,o,a,c){if(t!==null){var h=t.memoizedProps;if(Hi(h,a)&&t.ref===i.ref)if(ct=!1,i.pendingProps=a=h,(t.lanes&c)!==0)t.flags&131072&&(ct=!0);else return i.lanes=t.lanes,fn(t,i,c)}return yu(t,i,o,a,c)}function rp(t,i,o){var a=i.pendingProps,c=a.children,h=t!==null?t.memoizedState:null;if(a.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(ni,It),It|=o;else{if(!(o&1073741824))return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,ge(ni,It),It|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=h!==null?h.baseLanes:o,ge(ni,It),It|=a}else h!==null?(a=h.baseLanes|o,i.memoizedState=null):a=o,ge(ni,It),It|=a;return nt(t,i,c,o),i.child}function ip(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function yu(t,i,o,a,c){var h=ut(o)?lr:Xe.current;return h=qr(i,h),Jr(i,c),o=uu(t,i,o,a,h,c),a=cu(),t!==null&&!ct?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,fn(t,i,c)):(Se&&a&&qa(i),i.flags|=1,nt(t,i,o,c),i.child)}function sp(t,i,o,a,c){if(ut(o)){var h=!0;go(i)}else h=!1;if(Jr(i,c),i.stateNode===null)Lo(t,i),Gf(i,o,a),gu(i,o,a,c),a=!0;else if(t===null){var m=i.stateNode,_=i.memoizedProps;m.props=_;var y=m.context,k=o.contextType;typeof k=="object"&&k!==null?k=Nt(k):(k=ut(o)?lr:Xe.current,k=qr(i,k));var P=o.getDerivedStateFromProps,O=typeof P=="function"||typeof m.getSnapshotBeforeUpdate=="function";O||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(_!==a||y!==k)&&Kf(i,m,a,k),Mn=!1;var R=i.memoizedState;m.state=R,To(i,a,m,c),y=i.memoizedState,_!==a||R!==y||at.current||Mn?(typeof P=="function"&&(mu(i,o,P,a),y=i.memoizedState),(_=Mn||qf(i,o,_,a,R,y,k))?(O||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=a,i.memoizedState=y),m.props=a,m.state=y,m.context=k,a=_):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),a=!1)}else{m=i.stateNode,Ef(t,i),_=i.memoizedProps,k=i.type===i.elementType?_:Ut(i.type,_),m.props=k,O=i.pendingProps,R=m.context,y=o.contextType,typeof y=="object"&&y!==null?y=Nt(y):(y=ut(o)?lr:Xe.current,y=qr(i,y));var b=o.getDerivedStateFromProps;(P=typeof b=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(_!==O||R!==y)&&Kf(i,m,a,y),Mn=!1,R=i.memoizedState,m.state=R,To(i,a,m,c);var z=i.memoizedState;_!==O||R!==z||at.current||Mn?(typeof b=="function"&&(mu(i,o,b,a),z=i.memoizedState),(k=Mn||qf(i,o,k,a,R,z,y)||!1)?(P||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(a,z,y),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(a,z,y)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||_===t.memoizedProps&&R===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&R===t.memoizedState||(i.flags|=1024),i.memoizedProps=a,i.memoizedState=z),m.props=a,m.state=z,m.context=y,a=k):(typeof m.componentDidUpdate!="function"||_===t.memoizedProps&&R===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&R===t.memoizedState||(i.flags|=1024),a=!1)}return wu(t,i,o,a,h,c)}function wu(t,i,o,a,c,h){ip(t,i);var m=(i.flags&128)!==0;if(!a&&!m)return c&&cf(i,o,!1),fn(t,i,h);a=i.stateNode,ww.current=i;var _=m&&typeof o.getDerivedStateFromError!="function"?null:a.render();return i.flags|=1,t!==null&&m?(i.child=Yr(i,t.child,null,h),i.child=Yr(i,null,_,h)):nt(t,i,_,h),i.memoizedState=a.state,c&&cf(i,o,!0),i.child}function op(t){var i=t.stateNode;i.pendingContext?af(t,i.pendingContext,i.pendingContext!==i.context):i.context&&af(t,i.context,!1),ru(t,i.containerInfo)}function lp(t,i,o,a,c){return Qr(),Ya(c),i.flags|=256,nt(t,i,o,a),i.child}var Eu={dehydrated:null,treeContext:null,retryLane:0};function Su(t){return{baseLanes:t,cachePool:null,transitions:null}}function ap(t,i,o){var a=i.pendingProps,c=Te.current,h=!1,m=(i.flags&128)!==0,_;if((_=m)||(_=t!==null&&t.memoizedState===null?!1:(c&2)!==0),_?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),ge(Te,c&1),t===null)return Qa(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(i.mode&1?t.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(m=a.children,t=a.fallback,h?(a=i.mode,h=i.child,m={mode:"hidden",children:m},!(a&1)&&h!==null?(h.childLanes=0,h.pendingProps=m):h=qo(m,a,0,null),t=_r(t,a,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Su(o),i.memoizedState=Eu,t):Iu(i,m));if(c=t.memoizedState,c!==null&&(_=c.dehydrated,_!==null))return Ew(t,i,m,a,_,c,o);if(h){h=a.fallback,m=i.mode,c=t.child,_=c.sibling;var y={mode:"hidden",children:a.children};return!(m&1)&&i.child!==c?(a=i.child,a.childLanes=0,a.pendingProps=y,i.deletions=null):(a=Bn(c,y),a.subtreeFlags=c.subtreeFlags&14680064),_!==null?h=Bn(_,h):(h=_r(h,m,o,null),h.flags|=2),h.return=i,a.return=i,a.sibling=h,i.child=a,a=h,h=i.child,m=t.child.memoizedState,m=m===null?Su(o):{baseLanes:m.baseLanes|o,cachePool:null,transitions:m.transitions},h.memoizedState=m,h.childLanes=t.childLanes&~o,i.memoizedState=Eu,a}return h=t.child,t=h.sibling,a=Bn(h,{mode:"visible",children:a.children}),!(i.mode&1)&&(a.lanes=o),a.return=i,a.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=a,i.memoizedState=null,a}function Iu(t,i){return i=qo({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Do(t,i,o,a){return a!==null&&Ya(a),Yr(i,t.child,null,o),t=Iu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Ew(t,i,o,a,c,h,m){if(o)return i.flags&256?(i.flags&=-257,a=_u(Error(n(422))),Do(t,i,m,a)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=a.fallback,c=i.mode,a=qo({mode:"visible",children:a.children},c,0,null),h=_r(h,c,m,null),h.flags|=2,a.return=i,h.return=i,a.sibling=h,i.child=a,i.mode&1&&Yr(i,t.child,null,m),i.child.memoizedState=Su(m),i.memoizedState=Eu,h);if(!(i.mode&1))return Do(t,i,m,null);if(c.data==="$!"){if(a=c.nextSibling&&c.nextSibling.dataset,a)var _=a.dgst;return a=_,h=Error(n(419)),a=_u(h,a,void 0),Do(t,i,m,a)}if(_=(m&t.childLanes)!==0,ct||_){if(a=je,a!==null){switch(m&-m){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=c&(a.suspendedLanes|m)?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,dn(t,c),Wt(a,t,c,-1))}return zu(),a=_u(Error(n(421))),Do(t,i,m,a)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=Lw.bind(null,t),c._reactRetry=i,null):(t=h.treeContext,St=On(c.nextSibling),Et=i,Se=!0,Ft=null,t!==null&&(kt[Rt++]=un,kt[Rt++]=cn,kt[Rt++]=ar,un=t.id,cn=t.overflow,ar=i),i=Iu(i,a.children),i.flags|=4096,i)}function up(t,i,o){t.lanes|=i;var a=t.alternate;a!==null&&(a.lanes|=i),eu(t.return,i,o)}function Cu(t,i,o,a,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:a,tail:o,tailMode:c}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=a,h.tail=o,h.tailMode=c)}function cp(t,i,o){var a=i.pendingProps,c=a.revealOrder,h=a.tail;if(nt(t,i,a.children,o),a=Te.current,a&2)a=a&1|2,i.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&up(t,o,i);else if(t.tag===19)up(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}if(ge(Te,a),!(i.mode&1))i.memoizedState=null;else switch(c){case"forwards":for(o=i.child,c=null;o!==null;)t=o.alternate,t!==null&&ko(t)===null&&(c=o),o=o.sibling;o=c,o===null?(c=i.child,i.child=null):(c=o.sibling,o.sibling=null),Cu(i,!1,c,o,h);break;case"backwards":for(o=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&ko(t)===null){i.child=c;break}t=c.sibling,c.sibling=o,o=c,c=t}Cu(i,!0,o,null,h);break;case"together":Cu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Lo(t,i){!(i.mode&1)&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function fn(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),fr|=i.lanes,!(o&i.childLanes))return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=Bn(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=Bn(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function Sw(t,i,o){switch(i.tag){case 3:op(i),Qr();break;case 5:Cf(i);break;case 1:ut(i.type)&&go(i);break;case 4:ru(i,i.stateNode.containerInfo);break;case 10:var a=i.type._context,c=i.memoizedProps.value;ge(So,a._currentValue),a._currentValue=c;break;case 13:if(a=i.memoizedState,a!==null)return a.dehydrated!==null?(ge(Te,Te.current&1),i.flags|=128,null):o&i.child.childLanes?ap(t,i,o):(ge(Te,Te.current&1),t=fn(t,i,o),t!==null?t.sibling:null);ge(Te,Te.current&1);break;case 19:if(a=(o&i.childLanes)!==0,t.flags&128){if(a)return cp(t,i,o);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),ge(Te,Te.current),a)break;return null;case 22:case 23:return i.lanes=0,rp(t,i,o)}return fn(t,i,o)}var dp,Tu,hp,fp;dp=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Tu=function(){},hp=function(t,i,o,a){var c=t.memoizedProps;if(c!==a){t=i.stateNode,dr(Xt.current);var h=null;switch(o){case"input":c=ea(t,c),a=ea(t,a),h=[];break;case"select":c=U({},c,{value:void 0}),a=U({},a,{value:void 0}),h=[];break;case"textarea":c=ra(t,c),a=ra(t,a),h=[];break;default:typeof c.onClick!="function"&&typeof a.onClick=="function"&&(t.onclick=fo)}sa(o,a);var m;o=null;for(k in c)if(!a.hasOwnProperty(k)&&c.hasOwnProperty(k)&&c[k]!=null)if(k==="style"){var _=c[k];for(m in _)_.hasOwnProperty(m)&&(o||(o={}),o[m]="")}else k!=="dangerouslySetInnerHTML"&&k!=="children"&&k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&k!=="autoFocus"&&(l.hasOwnProperty(k)?h||(h=[]):(h=h||[]).push(k,null));for(k in a){var y=a[k];if(_=c!=null?c[k]:void 0,a.hasOwnProperty(k)&&y!==_&&(y!=null||_!=null))if(k==="style")if(_){for(m in _)!_.hasOwnProperty(m)||y&&y.hasOwnProperty(m)||(o||(o={}),o[m]="");for(m in y)y.hasOwnProperty(m)&&_[m]!==y[m]&&(o||(o={}),o[m]=y[m])}else o||(h||(h=[]),h.push(k,o)),o=y;else k==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,_=_?_.__html:void 0,y!=null&&_!==y&&(h=h||[]).push(k,y)):k==="children"?typeof y!="string"&&typeof y!="number"||(h=h||[]).push(k,""+y):k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&(l.hasOwnProperty(k)?(y!=null&&k==="onScroll"&&ye("scroll",t),h||_===y||(h=[])):(h=h||[]).push(k,y))}o&&(h=h||[]).push("style",o);var k=h;(i.updateQueue=k)&&(i.flags|=4)}},fp=function(t,i,o,a){o!==a&&(i.flags|=4)};function os(t,i){if(!Se)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function Ze(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,a=0;if(i)for(var c=t.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags&14680064,a|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags,a|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=a,t.childLanes=o,i}function Iw(t,i,o){var a=i.pendingProps;switch(Ga(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(i),null;case 1:return ut(i.type)&&mo(),Ze(i),null;case 3:return a=i.stateNode,Zr(),we(at),we(Xe),ou(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(wo(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,Ft!==null&&(bu(Ft),Ft=null))),Tu(t,i),Ze(i),null;case 5:iu(i);var c=dr(ts.current);if(o=i.type,t!==null&&i.stateNode!=null)hp(t,i,o,a,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!a){if(i.stateNode===null)throw Error(n(166));return Ze(i),null}if(t=dr(Xt.current),wo(i)){a=i.stateNode,o=i.type;var h=i.memoizedProps;switch(a[Yt]=i,a[Yi]=h,t=(i.mode&1)!==0,o){case"dialog":ye("cancel",a),ye("close",a);break;case"iframe":case"object":case"embed":ye("load",a);break;case"video":case"audio":for(c=0;c<Gi.length;c++)ye(Gi[c],a);break;case"source":ye("error",a);break;case"img":case"image":case"link":ye("error",a),ye("load",a);break;case"details":ye("toggle",a);break;case"input":qd(a,h),ye("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!h.multiple},ye("invalid",a);break;case"textarea":Qd(a,h),ye("invalid",a)}sa(o,h),c=null;for(var m in h)if(h.hasOwnProperty(m)){var _=h[m];m==="children"?typeof _=="string"?a.textContent!==_&&(h.suppressHydrationWarning!==!0&&ho(a.textContent,_,t),c=["children",_]):typeof _=="number"&&a.textContent!==""+_&&(h.suppressHydrationWarning!==!0&&ho(a.textContent,_,t),c=["children",""+_]):l.hasOwnProperty(m)&&_!=null&&m==="onScroll"&&ye("scroll",a)}switch(o){case"input":Bs(a),Kd(a,h,!0);break;case"textarea":Bs(a),Xd(a);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(a.onclick=fo)}a=c,i.updateQueue=a,a!==null&&(i.flags|=4)}else{m=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Jd(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=m.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof a.is=="string"?t=m.createElement(o,{is:a.is}):(t=m.createElement(o),o==="select"&&(m=t,a.multiple?m.multiple=!0:a.size&&(m.size=a.size))):t=m.createElementNS(t,o),t[Yt]=i,t[Yi]=a,dp(t,i,!1,!1),i.stateNode=t;e:{switch(m=oa(o,a),o){case"dialog":ye("cancel",t),ye("close",t),c=a;break;case"iframe":case"object":case"embed":ye("load",t),c=a;break;case"video":case"audio":for(c=0;c<Gi.length;c++)ye(Gi[c],t);c=a;break;case"source":ye("error",t),c=a;break;case"img":case"image":case"link":ye("error",t),ye("load",t),c=a;break;case"details":ye("toggle",t),c=a;break;case"input":qd(t,a),c=ea(t,a),ye("invalid",t);break;case"option":c=a;break;case"select":t._wrapperState={wasMultiple:!!a.multiple},c=U({},a,{value:void 0}),ye("invalid",t);break;case"textarea":Qd(t,a),c=ra(t,a),ye("invalid",t);break;default:c=a}sa(o,c),_=c;for(h in _)if(_.hasOwnProperty(h)){var y=_[h];h==="style"?th(t,y):h==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,y!=null&&Zd(t,y)):h==="children"?typeof y=="string"?(o!=="textarea"||y!=="")&&Ni(t,y):typeof y=="number"&&Ni(t,""+y):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(l.hasOwnProperty(h)?y!=null&&h==="onScroll"&&ye("scroll",t):y!=null&&xe(t,h,y,m))}switch(o){case"input":Bs(t),Kd(t,a,!1);break;case"textarea":Bs(t),Xd(t);break;case"option":a.value!=null&&t.setAttribute("value",""+ce(a.value));break;case"select":t.multiple=!!a.multiple,h=a.value,h!=null?Lr(t,!!a.multiple,h,!1):a.defaultValue!=null&&Lr(t,!!a.multiple,a.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=fo)}switch(o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Ze(i),null;case 6:if(t&&i.stateNode!=null)fp(t,i,t.memoizedProps,a);else{if(typeof a!="string"&&i.stateNode===null)throw Error(n(166));if(o=dr(ts.current),dr(Xt.current),wo(i)){if(a=i.stateNode,o=i.memoizedProps,a[Yt]=i,(h=a.nodeValue!==o)&&(t=Et,t!==null))switch(t.tag){case 3:ho(a.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ho(a.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else a=(o.nodeType===9?o:o.ownerDocument).createTextNode(a),a[Yt]=i,i.stateNode=a}return Ze(i),null;case 13:if(we(Te),a=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Se&&St!==null&&i.mode&1&&!(i.flags&128))gf(),Qr(),i.flags|=98560,h=!1;else if(h=wo(i),a!==null&&a.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[Yt]=i}else Qr(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;Ze(i),h=!1}else Ft!==null&&(bu(Ft),Ft=null),h=!0;if(!h)return i.flags&65536?i:null}return i.flags&128?(i.lanes=o,i):(a=a!==null,a!==(t!==null&&t.memoizedState!==null)&&a&&(i.child.flags|=8192,i.mode&1&&(t===null||Te.current&1?Fe===0&&(Fe=3):zu())),i.updateQueue!==null&&(i.flags|=4),Ze(i),null);case 4:return Zr(),Tu(t,i),t===null&&Ki(i.stateNode.containerInfo),Ze(i),null;case 10:return Za(i.type._context),Ze(i),null;case 17:return ut(i.type)&&mo(),Ze(i),null;case 19:if(we(Te),h=i.memoizedState,h===null)return Ze(i),null;if(a=(i.flags&128)!==0,m=h.rendering,m===null)if(a)os(h,!1);else{if(Fe!==0||t!==null&&t.flags&128)for(t=i.child;t!==null;){if(m=ko(t),m!==null){for(i.flags|=128,os(h,!1),a=m.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),i.subtreeFlags=0,a=o,o=i.child;o!==null;)h=o,t=a,h.flags&=14680066,m=h.alternate,m===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=m.childLanes,h.lanes=m.lanes,h.child=m.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=m.memoizedProps,h.memoizedState=m.memoizedState,h.updateQueue=m.updateQueue,h.type=m.type,t=m.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return ge(Te,Te.current&1|2),i.child}t=t.sibling}h.tail!==null&&De()>ri&&(i.flags|=128,a=!0,os(h,!1),i.lanes=4194304)}else{if(!a)if(t=ko(m),t!==null){if(i.flags|=128,a=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),os(h,!0),h.tail===null&&h.tailMode==="hidden"&&!m.alternate&&!Se)return Ze(i),null}else 2*De()-h.renderingStartTime>ri&&o!==1073741824&&(i.flags|=128,a=!0,os(h,!1),i.lanes=4194304);h.isBackwards?(m.sibling=i.child,i.child=m):(o=h.last,o!==null?o.sibling=m:i.child=m,h.last=m)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=De(),i.sibling=null,o=Te.current,ge(Te,a?o&1|2:o&1),i):(Ze(i),null);case 22:case 23:return Uu(),a=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==a&&(i.flags|=8192),a&&i.mode&1?It&1073741824&&(Ze(i),i.subtreeFlags&6&&(i.flags|=8192)):Ze(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function Cw(t,i){switch(Ga(i),i.tag){case 1:return ut(i.type)&&mo(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Zr(),we(at),we(Xe),ou(),t=i.flags,t&65536&&!(t&128)?(i.flags=t&-65537|128,i):null;case 5:return iu(i),null;case 13:if(we(Te),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Qr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return we(Te),null;case 4:return Zr(),null;case 10:return Za(i.type._context),null;case 22:case 23:return Uu(),null;case 24:return null;default:return null}}var Mo=!1,et=!1,Tw=typeof WeakSet=="function"?WeakSet:Set,F=null;function ti(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(a){Ne(t,i,a)}else o.current=null}function ku(t,i,o){try{o()}catch(a){Ne(t,i,a)}}var pp=!1;function kw(t,i){if(Ua=eo,t=Hh(),Aa(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var a=o.getSelection&&o.getSelection();if(a&&a.rangeCount!==0){o=a.anchorNode;var c=a.anchorOffset,h=a.focusNode;a=a.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var m=0,_=-1,y=-1,k=0,P=0,O=t,R=null;t:for(;;){for(var b;O!==o||c!==0&&O.nodeType!==3||(_=m+c),O!==h||a!==0&&O.nodeType!==3||(y=m+a),O.nodeType===3&&(m+=O.nodeValue.length),(b=O.firstChild)!==null;)R=O,O=b;for(;;){if(O===t)break t;if(R===o&&++k===c&&(_=m),R===h&&++P===a&&(y=m),(b=O.nextSibling)!==null)break;O=R,R=O.parentNode}O=b}o=_===-1||y===-1?null:{start:_,end:y}}else o=null}o=o||{start:0,end:0}}else o=null;for(za={focusedElem:t,selectionRange:o},eo=!1,F=i;F!==null;)if(i=F,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,F=t;else for(;F!==null;){i=F;try{var z=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(z!==null){var j=z.memoizedProps,Le=z.memoizedState,C=i.stateNode,E=C.getSnapshotBeforeUpdate(i.elementType===i.type?j:Ut(i.type,j),Le);C.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var T=i.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(x){Ne(i,i.return,x)}if(t=i.sibling,t!==null){t.return=i.return,F=t;break}F=i.return}return z=pp,pp=!1,z}function ls(t,i,o){var a=i.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var c=a=a.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&ku(i,o,h)}c=c.next}while(c!==a)}}function bo(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var a=o.create;o.destroy=a()}o=o.next}while(o!==i)}}function Ru(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function mp(t){var i=t.alternate;i!==null&&(t.alternate=null,mp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Yt],delete i[Yi],delete i[Va],delete i[aw],delete i[uw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function gp(t){return t.tag===5||t.tag===3||t.tag===4}function _p(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||gp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Nu(t,i,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=fo));else if(a!==4&&(t=t.child,t!==null))for(Nu(t,i,o),t=t.sibling;t!==null;)Nu(t,i,o),t=t.sibling}function Pu(t,i,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(a!==4&&(t=t.child,t!==null))for(Pu(t,i,o),t=t.sibling;t!==null;)Pu(t,i,o),t=t.sibling}var qe=null,zt=!1;function Fn(t,i,o){for(o=o.child;o!==null;)vp(t,i,o),o=o.sibling}function vp(t,i,o){if(Qt&&typeof Qt.onCommitFiberUnmount=="function")try{Qt.onCommitFiberUnmount(Ks,o)}catch{}switch(o.tag){case 5:et||ti(o,i);case 6:var a=qe,c=zt;qe=null,Fn(t,i,o),qe=a,zt=c,qe!==null&&(zt?(t=qe,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):qe.removeChild(o.stateNode));break;case 18:qe!==null&&(zt?(t=qe,o=o.stateNode,t.nodeType===8?Ba(t.parentNode,o):t.nodeType===1&&Ba(t,o),zi(t)):Ba(qe,o.stateNode));break;case 4:a=qe,c=zt,qe=o.stateNode.containerInfo,zt=!0,Fn(t,i,o),qe=a,zt=c;break;case 0:case 11:case 14:case 15:if(!et&&(a=o.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){c=a=a.next;do{var h=c,m=h.destroy;h=h.tag,m!==void 0&&(h&2||h&4)&&ku(o,i,m),c=c.next}while(c!==a)}Fn(t,i,o);break;case 1:if(!et&&(ti(o,i),a=o.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=o.memoizedProps,a.state=o.memoizedState,a.componentWillUnmount()}catch(_){Ne(o,i,_)}Fn(t,i,o);break;case 21:Fn(t,i,o);break;case 22:o.mode&1?(et=(a=et)||o.memoizedState!==null,Fn(t,i,o),et=a):Fn(t,i,o);break;default:Fn(t,i,o)}}function yp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new Tw),i.forEach(function(a){var c=Mw.bind(null,t,a);o.has(a)||(o.add(a),a.then(c,c))})}}function jt(t,i){var o=i.deletions;if(o!==null)for(var a=0;a<o.length;a++){var c=o[a];try{var h=t,m=i,_=m;e:for(;_!==null;){switch(_.tag){case 5:qe=_.stateNode,zt=!1;break e;case 3:qe=_.stateNode.containerInfo,zt=!0;break e;case 4:qe=_.stateNode.containerInfo,zt=!0;break e}_=_.return}if(qe===null)throw Error(n(160));vp(h,m,c),qe=null,zt=!1;var y=c.alternate;y!==null&&(y.return=null),c.return=null}catch(k){Ne(c,i,k)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)wp(i,t),i=i.sibling}function wp(t,i){var o=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(jt(i,t),Zt(t),a&4){try{ls(3,t,t.return),bo(3,t)}catch(j){Ne(t,t.return,j)}try{ls(5,t,t.return)}catch(j){Ne(t,t.return,j)}}break;case 1:jt(i,t),Zt(t),a&512&&o!==null&&ti(o,o.return);break;case 5:if(jt(i,t),Zt(t),a&512&&o!==null&&ti(o,o.return),t.flags&32){var c=t.stateNode;try{Ni(c,"")}catch(j){Ne(t,t.return,j)}}if(a&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,m=o!==null?o.memoizedProps:h,_=t.type,y=t.updateQueue;if(t.updateQueue=null,y!==null)try{_==="input"&&h.type==="radio"&&h.name!=null&&Gd(c,h),oa(_,m);var k=oa(_,h);for(m=0;m<y.length;m+=2){var P=y[m],O=y[m+1];P==="style"?th(c,O):P==="dangerouslySetInnerHTML"?Zd(c,O):P==="children"?Ni(c,O):xe(c,P,O,k)}switch(_){case"input":ta(c,h);break;case"textarea":Yd(c,h);break;case"select":var R=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var b=h.value;b!=null?Lr(c,!!h.multiple,b,!1):R!==!!h.multiple&&(h.defaultValue!=null?Lr(c,!!h.multiple,h.defaultValue,!0):Lr(c,!!h.multiple,h.multiple?[]:"",!1))}c[Yi]=h}catch(j){Ne(t,t.return,j)}}break;case 6:if(jt(i,t),Zt(t),a&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(j){Ne(t,t.return,j)}}break;case 3:if(jt(i,t),Zt(t),a&4&&o!==null&&o.memoizedState.isDehydrated)try{zi(i.containerInfo)}catch(j){Ne(t,t.return,j)}break;case 4:jt(i,t),Zt(t);break;case 13:jt(i,t),Zt(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(xu=De())),a&4&&yp(t);break;case 22:if(P=o!==null&&o.memoizedState!==null,t.mode&1?(et=(k=et)||P,jt(i,t),et=k):jt(i,t),Zt(t),a&8192){if(k=t.memoizedState!==null,(t.stateNode.isHidden=k)&&!P&&t.mode&1)for(F=t,P=t.child;P!==null;){for(O=F=P;F!==null;){switch(R=F,b=R.child,R.tag){case 0:case 11:case 14:case 15:ls(4,R,R.return);break;case 1:ti(R,R.return);var z=R.stateNode;if(typeof z.componentWillUnmount=="function"){a=R,o=R.return;try{i=a,z.props=i.memoizedProps,z.state=i.memoizedState,z.componentWillUnmount()}catch(j){Ne(a,o,j)}}break;case 5:ti(R,R.return);break;case 22:if(R.memoizedState!==null){Ip(O);continue}}b!==null?(b.return=R,F=b):Ip(O)}P=P.sibling}e:for(P=null,O=t;;){if(O.tag===5){if(P===null){P=O;try{c=O.stateNode,k?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(_=O.stateNode,y=O.memoizedProps.style,m=y!=null&&y.hasOwnProperty("display")?y.display:null,_.style.display=eh("display",m))}catch(j){Ne(t,t.return,j)}}}else if(O.tag===6){if(P===null)try{O.stateNode.nodeValue=k?"":O.memoizedProps}catch(j){Ne(t,t.return,j)}}else if((O.tag!==22&&O.tag!==23||O.memoizedState===null||O===t)&&O.child!==null){O.child.return=O,O=O.child;continue}if(O===t)break e;for(;O.sibling===null;){if(O.return===null||O.return===t)break e;P===O&&(P=null),O=O.return}P===O&&(P=null),O.sibling.return=O.return,O=O.sibling}}break;case 19:jt(i,t),Zt(t),a&4&&yp(t);break;case 21:break;default:jt(i,t),Zt(t)}}function Zt(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(gp(o)){var a=o;break e}o=o.return}throw Error(n(160))}switch(a.tag){case 5:var c=a.stateNode;a.flags&32&&(Ni(c,""),a.flags&=-33);var h=_p(t);Pu(t,h,c);break;case 3:case 4:var m=a.stateNode.containerInfo,_=_p(t);Nu(t,_,m);break;default:throw Error(n(161))}}catch(y){Ne(t,t.return,y)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Rw(t,i,o){F=t,Ep(t)}function Ep(t,i,o){for(var a=(t.mode&1)!==0;F!==null;){var c=F,h=c.child;if(c.tag===22&&a){var m=c.memoizedState!==null||Mo;if(!m){var _=c.alternate,y=_!==null&&_.memoizedState!==null||et;_=Mo;var k=et;if(Mo=m,(et=y)&&!k)for(F=c;F!==null;)m=F,y=m.child,m.tag===22&&m.memoizedState!==null?Cp(c):y!==null?(y.return=m,F=y):Cp(c);for(;h!==null;)F=h,Ep(h),h=h.sibling;F=c,Mo=_,et=k}Sp(t)}else c.subtreeFlags&8772&&h!==null?(h.return=c,F=h):Sp(t)}}function Sp(t){for(;F!==null;){var i=F;if(i.flags&8772){var o=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:et||bo(5,i);break;case 1:var a=i.stateNode;if(i.flags&4&&!et)if(o===null)a.componentDidMount();else{var c=i.elementType===i.type?o.memoizedProps:Ut(i.type,o.memoizedProps);a.componentDidUpdate(c,o.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&If(i,h,a);break;case 3:var m=i.updateQueue;if(m!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}If(i,m,o)}break;case 5:var _=i.stateNode;if(o===null&&i.flags&4){o=_;var y=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":y.autoFocus&&o.focus();break;case"img":y.src&&(o.src=y.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var k=i.alternate;if(k!==null){var P=k.memoizedState;if(P!==null){var O=P.dehydrated;O!==null&&zi(O)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}et||i.flags&512&&Ru(i)}catch(R){Ne(i,i.return,R)}}if(i===t){F=null;break}if(o=i.sibling,o!==null){o.return=i.return,F=o;break}F=i.return}}function Ip(t){for(;F!==null;){var i=F;if(i===t){F=null;break}var o=i.sibling;if(o!==null){o.return=i.return,F=o;break}F=i.return}}function Cp(t){for(;F!==null;){var i=F;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{bo(4,i)}catch(y){Ne(i,o,y)}break;case 1:var a=i.stateNode;if(typeof a.componentDidMount=="function"){var c=i.return;try{a.componentDidMount()}catch(y){Ne(i,c,y)}}var h=i.return;try{Ru(i)}catch(y){Ne(i,h,y)}break;case 5:var m=i.return;try{Ru(i)}catch(y){Ne(i,m,y)}}}catch(y){Ne(i,i.return,y)}if(i===t){F=null;break}var _=i.sibling;if(_!==null){_.return=i.return,F=_;break}F=i.return}}var Nw=Math.ceil,Fo=V.ReactCurrentDispatcher,Au=V.ReactCurrentOwner,At=V.ReactCurrentBatchConfig,se=0,je=null,Me=null,Ge=0,It=0,ni=xn(0),Fe=0,as=null,fr=0,Uo=0,Ou=0,us=null,dt=null,xu=0,ri=1/0,pn=null,zo=!1,Du=null,Un=null,jo=!1,zn=null,Wo=0,cs=0,Lu=null,Bo=-1,Vo=0;function rt(){return se&6?De():Bo!==-1?Bo:Bo=De()}function jn(t){return t.mode&1?se&2&&Ge!==0?Ge&-Ge:dw.transition!==null?(Vo===0&&(Vo=gh()),Vo):(t=de,t!==0||(t=window.event,t=t===void 0?16:Th(t.type)),t):1}function Wt(t,i,o,a){if(50<cs)throw cs=0,Lu=null,Error(n(185));Li(t,o,a),(!(se&2)||t!==je)&&(t===je&&(!(se&2)&&(Uo|=o),Fe===4&&Wn(t,Ge)),ht(t,a),o===1&&se===0&&!(i.mode&1)&&(ri=De()+500,_o&&Ln()))}function ht(t,i){var o=t.callbackNode;dy(t,i);var a=Xs(t,t===je?Ge:0);if(a===0)o!==null&&fh(o),t.callbackNode=null,t.callbackPriority=0;else if(i=a&-a,t.callbackPriority!==i){if(o!=null&&fh(o),i===1)t.tag===0?cw(kp.bind(null,t)):df(kp.bind(null,t)),ow(function(){!(se&6)&&Ln()}),o=null;else{switch(_h(a)){case 1:o=fa;break;case 4:o=ph;break;case 16:o=Gs;break;case 536870912:o=mh;break;default:o=Gs}o=Lp(o,Tp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function Tp(t,i){if(Bo=-1,Vo=0,se&6)throw Error(n(327));var o=t.callbackNode;if(ii()&&t.callbackNode!==o)return null;var a=Xs(t,t===je?Ge:0);if(a===0)return null;if(a&30||a&t.expiredLanes||i)i=$o(t,a);else{i=a;var c=se;se|=2;var h=Np();(je!==t||Ge!==i)&&(pn=null,ri=De()+500,mr(t,i));do try{Ow();break}catch(_){Rp(t,_)}while(!0);Ja(),Fo.current=h,se=c,Me!==null?i=0:(je=null,Ge=0,i=Fe)}if(i!==0){if(i===2&&(c=pa(t),c!==0&&(a=c,i=Mu(t,c))),i===1)throw o=as,mr(t,0),Wn(t,a),ht(t,De()),o;if(i===6)Wn(t,a);else{if(c=t.current.alternate,!(a&30)&&!Pw(c)&&(i=$o(t,a),i===2&&(h=pa(t),h!==0&&(a=h,i=Mu(t,h))),i===1))throw o=as,mr(t,0),Wn(t,a),ht(t,De()),o;switch(t.finishedWork=c,t.finishedLanes=a,i){case 0:case 1:throw Error(n(345));case 2:gr(t,dt,pn);break;case 3:if(Wn(t,a),(a&130023424)===a&&(i=xu+500-De(),10<i)){if(Xs(t,0)!==0)break;if(c=t.suspendedLanes,(c&a)!==a){rt(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=Wa(gr.bind(null,t,dt,pn),i);break}gr(t,dt,pn);break;case 4:if(Wn(t,a),(a&4194240)===a)break;for(i=t.eventTimes,c=-1;0<a;){var m=31-Mt(a);h=1<<m,m=i[m],m>c&&(c=m),a&=~h}if(a=c,a=De()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Nw(a/1960))-a,10<a){t.timeoutHandle=Wa(gr.bind(null,t,dt,pn),a);break}gr(t,dt,pn);break;case 5:gr(t,dt,pn);break;default:throw Error(n(329))}}}return ht(t,De()),t.callbackNode===o?Tp.bind(null,t):null}function Mu(t,i){var o=us;return t.current.memoizedState.isDehydrated&&(mr(t,i).flags|=256),t=$o(t,i),t!==2&&(i=dt,dt=o,i!==null&&bu(i)),t}function bu(t){dt===null?dt=t:dt.push.apply(dt,t)}function Pw(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var a=0;a<o.length;a++){var c=o[a],h=c.getSnapshot;c=c.value;try{if(!bt(h(),c))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Wn(t,i){for(i&=~Ou,i&=~Uo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-Mt(i),a=1<<o;t[o]=-1,i&=~a}}function kp(t){if(se&6)throw Error(n(327));ii();var i=Xs(t,0);if(!(i&1))return ht(t,De()),null;var o=$o(t,i);if(t.tag!==0&&o===2){var a=pa(t);a!==0&&(i=a,o=Mu(t,a))}if(o===1)throw o=as,mr(t,0),Wn(t,i),ht(t,De()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,gr(t,dt,pn),ht(t,De()),null}function Fu(t,i){var o=se;se|=1;try{return t(i)}finally{se=o,se===0&&(ri=De()+500,_o&&Ln())}}function pr(t){zn!==null&&zn.tag===0&&!(se&6)&&ii();var i=se;se|=1;var o=At.transition,a=de;try{if(At.transition=null,de=1,t)return t()}finally{de=a,At.transition=o,se=i,!(se&6)&&Ln()}}function Uu(){It=ni.current,we(ni)}function mr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,sw(o)),Me!==null)for(o=Me.return;o!==null;){var a=o;switch(Ga(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&mo();break;case 3:Zr(),we(at),we(Xe),ou();break;case 5:iu(a);break;case 4:Zr();break;case 13:we(Te);break;case 19:we(Te);break;case 10:Za(a.type._context);break;case 22:case 23:Uu()}o=o.return}if(je=t,Me=t=Bn(t.current,null),Ge=It=i,Fe=0,as=null,Ou=Uo=fr=0,dt=us=null,cr!==null){for(i=0;i<cr.length;i++)if(o=cr[i],a=o.interleaved,a!==null){o.interleaved=null;var c=a.next,h=o.pending;if(h!==null){var m=h.next;h.next=c,a.next=m}o.pending=a}cr=null}return t}function Rp(t,i){do{var o=Me;try{if(Ja(),Ro.current=Oo,No){for(var a=ke.memoizedState;a!==null;){var c=a.queue;c!==null&&(c.pending=null),a=a.next}No=!1}if(hr=0,ze=be=ke=null,ns=!1,rs=0,Au.current=null,o===null||o.return===null){Fe=1,as=i,Me=null;break}e:{var h=t,m=o.return,_=o,y=i;if(i=Ge,_.flags|=32768,y!==null&&typeof y=="object"&&typeof y.then=="function"){var k=y,P=_,O=P.tag;if(!(P.mode&1)&&(O===0||O===11||O===15)){var R=P.alternate;R?(P.updateQueue=R.updateQueue,P.memoizedState=R.memoizedState,P.lanes=R.lanes):(P.updateQueue=null,P.memoizedState=null)}var b=Jf(m);if(b!==null){b.flags&=-257,Zf(b,m,_,h,i),b.mode&1&&Xf(h,k,i),i=b,y=k;var z=i.updateQueue;if(z===null){var j=new Set;j.add(y),i.updateQueue=j}else z.add(y);break e}else{if(!(i&1)){Xf(h,k,i),zu();break e}y=Error(n(426))}}else if(Se&&_.mode&1){var Le=Jf(m);if(Le!==null){!(Le.flags&65536)&&(Le.flags|=256),Zf(Le,m,_,h,i),Ya(ei(y,_));break e}}h=y=ei(y,_),Fe!==4&&(Fe=2),us===null?us=[h]:us.push(h),h=m;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var C=Qf(h,y,i);Sf(h,C);break e;case 1:_=y;var E=h.type,T=h.stateNode;if(!(h.flags&128)&&(typeof E.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(Un===null||!Un.has(T)))){h.flags|=65536,i&=-i,h.lanes|=i;var x=Yf(h,_,i);Sf(h,x);break e}}h=h.return}while(h!==null)}Ap(o)}catch(W){i=W,Me===o&&o!==null&&(Me=o=o.return);continue}break}while(!0)}function Np(){var t=Fo.current;return Fo.current=Oo,t===null?Oo:t}function zu(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),je===null||!(fr&268435455)&&!(Uo&268435455)||Wn(je,Ge)}function $o(t,i){var o=se;se|=2;var a=Np();(je!==t||Ge!==i)&&(pn=null,mr(t,i));do try{Aw();break}catch(c){Rp(t,c)}while(!0);if(Ja(),se=o,Fo.current=a,Me!==null)throw Error(n(261));return je=null,Ge=0,Fe}function Aw(){for(;Me!==null;)Pp(Me)}function Ow(){for(;Me!==null&&!ny();)Pp(Me)}function Pp(t){var i=Dp(t.alternate,t,It);t.memoizedProps=t.pendingProps,i===null?Ap(t):Me=i,Au.current=null}function Ap(t){var i=t;do{var o=i.alternate;if(t=i.return,i.flags&32768){if(o=Cw(o,i),o!==null){o.flags&=32767,Me=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Fe=6,Me=null;return}}else if(o=Iw(o,i,It),o!==null){Me=o;return}if(i=i.sibling,i!==null){Me=i;return}Me=i=t}while(i!==null);Fe===0&&(Fe=5)}function gr(t,i,o){var a=de,c=At.transition;try{At.transition=null,de=1,xw(t,i,o,a)}finally{At.transition=c,de=a}return null}function xw(t,i,o,a){do ii();while(zn!==null);if(se&6)throw Error(n(327));o=t.finishedWork;var c=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(hy(t,h),t===je&&(Me=je=null,Ge=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||jo||(jo=!0,Lp(Gs,function(){return ii(),null})),h=(o.flags&15990)!==0,o.subtreeFlags&15990||h){h=At.transition,At.transition=null;var m=de;de=1;var _=se;se|=4,Au.current=null,kw(t,o),wp(o,t),Jy(za),eo=!!Ua,za=Ua=null,t.current=o,Rw(o),ry(),se=_,de=m,At.transition=h}else t.current=o;if(jo&&(jo=!1,zn=t,Wo=c),h=t.pendingLanes,h===0&&(Un=null),oy(o.stateNode),ht(t,De()),i!==null)for(a=t.onRecoverableError,o=0;o<i.length;o++)c=i[o],a(c.value,{componentStack:c.stack,digest:c.digest});if(zo)throw zo=!1,t=Du,Du=null,t;return Wo&1&&t.tag!==0&&ii(),h=t.pendingLanes,h&1?t===Lu?cs++:(cs=0,Lu=t):cs=0,Ln(),null}function ii(){if(zn!==null){var t=_h(Wo),i=At.transition,o=de;try{if(At.transition=null,de=16>t?16:t,zn===null)var a=!1;else{if(t=zn,zn=null,Wo=0,se&6)throw Error(n(331));var c=se;for(se|=4,F=t.current;F!==null;){var h=F,m=h.child;if(F.flags&16){var _=h.deletions;if(_!==null){for(var y=0;y<_.length;y++){var k=_[y];for(F=k;F!==null;){var P=F;switch(P.tag){case 0:case 11:case 15:ls(8,P,h)}var O=P.child;if(O!==null)O.return=P,F=O;else for(;F!==null;){P=F;var R=P.sibling,b=P.return;if(mp(P),P===k){F=null;break}if(R!==null){R.return=b,F=R;break}F=b}}}var z=h.alternate;if(z!==null){var j=z.child;if(j!==null){z.child=null;do{var Le=j.sibling;j.sibling=null,j=Le}while(j!==null)}}F=h}}if(h.subtreeFlags&2064&&m!==null)m.return=h,F=m;else e:for(;F!==null;){if(h=F,h.flags&2048)switch(h.tag){case 0:case 11:case 15:ls(9,h,h.return)}var C=h.sibling;if(C!==null){C.return=h.return,F=C;break e}F=h.return}}var E=t.current;for(F=E;F!==null;){m=F;var T=m.child;if(m.subtreeFlags&2064&&T!==null)T.return=m,F=T;else e:for(m=E;F!==null;){if(_=F,_.flags&2048)try{switch(_.tag){case 0:case 11:case 15:bo(9,_)}}catch(W){Ne(_,_.return,W)}if(_===m){F=null;break e}var x=_.sibling;if(x!==null){x.return=_.return,F=x;break e}F=_.return}}if(se=c,Ln(),Qt&&typeof Qt.onPostCommitFiberRoot=="function")try{Qt.onPostCommitFiberRoot(Ks,t)}catch{}a=!0}return a}finally{de=o,At.transition=i}}return!1}function Op(t,i,o){i=ei(o,i),i=Qf(t,i,1),t=bn(t,i,1),i=rt(),t!==null&&(Li(t,1,i),ht(t,i))}function Ne(t,i,o){if(t.tag===3)Op(t,t,o);else for(;i!==null;){if(i.tag===3){Op(i,t,o);break}else if(i.tag===1){var a=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Un===null||!Un.has(a))){t=ei(o,t),t=Yf(i,t,1),i=bn(i,t,1),t=rt(),i!==null&&(Li(i,1,t),ht(i,t));break}}i=i.return}}function Dw(t,i,o){var a=t.pingCache;a!==null&&a.delete(i),i=rt(),t.pingedLanes|=t.suspendedLanes&o,je===t&&(Ge&o)===o&&(Fe===4||Fe===3&&(Ge&130023424)===Ge&&500>De()-xu?mr(t,0):Ou|=o),ht(t,i)}function xp(t,i){i===0&&(t.mode&1?(i=Ys,Ys<<=1,!(Ys&130023424)&&(Ys=4194304)):i=1);var o=rt();t=dn(t,i),t!==null&&(Li(t,i,o),ht(t,o))}function Lw(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),xp(t,o)}function Mw(t,i){var o=0;switch(t.tag){case 13:var a=t.stateNode,c=t.memoizedState;c!==null&&(o=c.retryLane);break;case 19:a=t.stateNode;break;default:throw Error(n(314))}a!==null&&a.delete(i),xp(t,o)}var Dp;Dp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||at.current)ct=!0;else{if(!(t.lanes&o)&&!(i.flags&128))return ct=!1,Sw(t,i,o);ct=!!(t.flags&131072)}else ct=!1,Se&&i.flags&1048576&&hf(i,yo,i.index);switch(i.lanes=0,i.tag){case 2:var a=i.type;Lo(t,i),t=i.pendingProps;var c=qr(i,Xe.current);Jr(i,o),c=uu(null,i,a,t,c,o);var h=cu();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,ut(a)?(h=!0,go(i)):h=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,nu(i),c.updater=xo,i.stateNode=c,c._reactInternals=i,gu(i,a,t,o),i=wu(null,i,a,!0,h,o)):(i.tag=0,Se&&h&&qa(i),nt(null,i,c,o),i=i.child),i;case 16:a=i.elementType;e:{switch(Lo(t,i),t=i.pendingProps,c=a._init,a=c(a._payload),i.type=a,c=i.tag=Fw(a),t=Ut(a,t),c){case 0:i=yu(null,i,a,t,o);break e;case 1:i=sp(null,i,a,t,o);break e;case 11:i=ep(null,i,a,t,o);break e;case 14:i=tp(null,i,a,Ut(a.type,t),o);break e}throw Error(n(306,a,""))}return i;case 0:return a=i.type,c=i.pendingProps,c=i.elementType===a?c:Ut(a,c),yu(t,i,a,c,o);case 1:return a=i.type,c=i.pendingProps,c=i.elementType===a?c:Ut(a,c),sp(t,i,a,c,o);case 3:e:{if(op(i),t===null)throw Error(n(387));a=i.pendingProps,h=i.memoizedState,c=h.element,Ef(t,i),To(i,a,null,o);var m=i.memoizedState;if(a=m.element,h.isDehydrated)if(h={element:a,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){c=ei(Error(n(423)),i),i=lp(t,i,a,o,c);break e}else if(a!==c){c=ei(Error(n(424)),i),i=lp(t,i,a,o,c);break e}else for(St=On(i.stateNode.containerInfo.firstChild),Et=i,Se=!0,Ft=null,o=yf(i,null,a,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Qr(),a===c){i=fn(t,i,o);break e}nt(t,i,a,o)}i=i.child}return i;case 5:return Cf(i),t===null&&Qa(i),a=i.type,c=i.pendingProps,h=t!==null?t.memoizedProps:null,m=c.children,ja(a,c)?m=null:h!==null&&ja(a,h)&&(i.flags|=32),ip(t,i),nt(t,i,m,o),i.child;case 6:return t===null&&Qa(i),null;case 13:return ap(t,i,o);case 4:return ru(i,i.stateNode.containerInfo),a=i.pendingProps,t===null?i.child=Yr(i,null,a,o):nt(t,i,a,o),i.child;case 11:return a=i.type,c=i.pendingProps,c=i.elementType===a?c:Ut(a,c),ep(t,i,a,c,o);case 7:return nt(t,i,i.pendingProps,o),i.child;case 8:return nt(t,i,i.pendingProps.children,o),i.child;case 12:return nt(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(a=i.type._context,c=i.pendingProps,h=i.memoizedProps,m=c.value,ge(So,a._currentValue),a._currentValue=m,h!==null)if(bt(h.value,m)){if(h.children===c.children&&!at.current){i=fn(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var _=h.dependencies;if(_!==null){m=h.child;for(var y=_.firstContext;y!==null;){if(y.context===a){if(h.tag===1){y=hn(-1,o&-o),y.tag=2;var k=h.updateQueue;if(k!==null){k=k.shared;var P=k.pending;P===null?y.next=y:(y.next=P.next,P.next=y),k.pending=y}}h.lanes|=o,y=h.alternate,y!==null&&(y.lanes|=o),eu(h.return,o,i),_.lanes|=o;break}y=y.next}}else if(h.tag===10)m=h.type===i.type?null:h.child;else if(h.tag===18){if(m=h.return,m===null)throw Error(n(341));m.lanes|=o,_=m.alternate,_!==null&&(_.lanes|=o),eu(m,o,i),m=h.sibling}else m=h.child;if(m!==null)m.return=h;else for(m=h;m!==null;){if(m===i){m=null;break}if(h=m.sibling,h!==null){h.return=m.return,m=h;break}m=m.return}h=m}nt(t,i,c.children,o),i=i.child}return i;case 9:return c=i.type,a=i.pendingProps.children,Jr(i,o),c=Nt(c),a=a(c),i.flags|=1,nt(t,i,a,o),i.child;case 14:return a=i.type,c=Ut(a,i.pendingProps),c=Ut(a.type,c),tp(t,i,a,c,o);case 15:return np(t,i,i.type,i.pendingProps,o);case 17:return a=i.type,c=i.pendingProps,c=i.elementType===a?c:Ut(a,c),Lo(t,i),i.tag=1,ut(a)?(t=!0,go(i)):t=!1,Jr(i,o),Gf(i,a,c),gu(i,a,c,o),wu(null,i,a,!0,t,o);case 19:return cp(t,i,o);case 22:return rp(t,i,o)}throw Error(n(156,i.tag))};function Lp(t,i){return hh(t,i)}function bw(t,i,o,a){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(t,i,o,a){return new bw(t,i,o,a)}function ju(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Fw(t){if(typeof t=="function")return ju(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Gt)return 11;if(t===Kt)return 14}return 2}function Bn(t,i){var o=t.alternate;return o===null?(o=Ot(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Ho(t,i,o,a,c,h){var m=2;if(a=t,typeof t=="function")ju(t)&&(m=1);else if(typeof t=="string")m=5;else e:switch(t){case Ce:return _r(o.children,c,h,i);case Ue:m=8,c|=8;break;case tt:return t=Ot(12,o,i,c|2),t.elementType=tt,t.lanes=h,t;case vt:return t=Ot(13,o,i,c),t.elementType=vt,t.lanes=h,t;case Lt:return t=Ot(19,o,i,c),t.elementType=Lt,t.lanes=h,t;case Re:return qo(o,c,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _t:m=10;break e;case ir:m=9;break e;case Gt:m=11;break e;case Kt:m=14;break e;case lt:m=16,a=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Ot(m,o,i,c),i.elementType=t,i.type=a,i.lanes=h,i}function _r(t,i,o,a){return t=Ot(7,t,a,i),t.lanes=o,t}function qo(t,i,o,a){return t=Ot(22,t,a,i),t.elementType=Re,t.lanes=o,t.stateNode={isHidden:!1},t}function Wu(t,i,o){return t=Ot(6,t,null,i),t.lanes=o,t}function Bu(t,i,o){return i=Ot(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Uw(t,i,o,a,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ma(0),this.expirationTimes=ma(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ma(0),this.identifierPrefix=a,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function Vu(t,i,o,a,c,h,m,_,y){return t=new Uw(t,i,o,_,y),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Ot(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:a,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},nu(h),t}function zw(t,i,o){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ne,key:a==null?null:""+a,children:t,containerInfo:i,implementation:o}}function Mp(t){if(!t)return Dn;t=t._reactInternals;e:{if(sr(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(ut(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(ut(o))return uf(t,o,i)}return i}function bp(t,i,o,a,c,h,m,_,y){return t=Vu(o,a,!0,t,c,h,m,_,y),t.context=Mp(null),o=t.current,a=rt(),c=jn(o),h=hn(a,c),h.callback=i??null,bn(o,h,c),t.current.lanes=c,Li(t,c,a),ht(t,a),t}function Go(t,i,o,a){var c=i.current,h=rt(),m=jn(c);return o=Mp(o),i.context===null?i.context=o:i.pendingContext=o,i=hn(h,m),i.payload={element:t},a=a===void 0?null:a,a!==null&&(i.callback=a),t=bn(c,i,m),t!==null&&(Wt(t,c,m,h),Co(t,c,m)),m}function Ko(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Fp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function $u(t,i){Fp(t,i),(t=t.alternate)&&Fp(t,i)}function jw(){return null}var Up=typeof reportError=="function"?reportError:function(t){console.error(t)};function Hu(t){this._internalRoot=t}Qo.prototype.render=Hu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Go(t,i,null,null)},Qo.prototype.unmount=Hu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;pr(function(){Go(null,t,null,null)}),i[ln]=null}};function Qo(t){this._internalRoot=t}Qo.prototype.unstable_scheduleHydration=function(t){if(t){var i=wh();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Nn.length&&i!==0&&i<Nn[o].priority;o++);Nn.splice(o,0,t),o===0&&Ih(t)}};function qu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Yo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function zp(){}function Ww(t,i,o,a,c){if(c){if(typeof a=="function"){var h=a;a=function(){var k=Ko(m);h.call(k)}}var m=bp(i,a,t,0,null,!1,!1,"",zp);return t._reactRootContainer=m,t[ln]=m.current,Ki(t.nodeType===8?t.parentNode:t),pr(),m}for(;c=t.lastChild;)t.removeChild(c);if(typeof a=="function"){var _=a;a=function(){var k=Ko(y);_.call(k)}}var y=Vu(t,0,!1,null,null,!1,!1,"",zp);return t._reactRootContainer=y,t[ln]=y.current,Ki(t.nodeType===8?t.parentNode:t),pr(function(){Go(i,y,o,a)}),y}function Xo(t,i,o,a,c){var h=o._reactRootContainer;if(h){var m=h;if(typeof c=="function"){var _=c;c=function(){var y=Ko(m);_.call(y)}}Go(i,m,t,c)}else m=Ww(o,i,t,c,a);return Ko(m)}vh=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Di(i.pendingLanes);o!==0&&(ga(i,o|1),ht(i,De()),!(se&6)&&(ri=De()+500,Ln()))}break;case 13:pr(function(){var a=dn(t,1);if(a!==null){var c=rt();Wt(a,t,1,c)}}),$u(t,1)}},_a=function(t){if(t.tag===13){var i=dn(t,134217728);if(i!==null){var o=rt();Wt(i,t,134217728,o)}$u(t,134217728)}},yh=function(t){if(t.tag===13){var i=jn(t),o=dn(t,i);if(o!==null){var a=rt();Wt(o,t,i,a)}$u(t,i)}},wh=function(){return de},Eh=function(t,i){var o=de;try{return de=t,i()}finally{de=o}},ua=function(t,i,o){switch(i){case"input":if(ta(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var a=o[i];if(a!==t&&a.form===t.form){var c=po(a);if(!c)throw Error(n(90));Hd(a),ta(a,c)}}}break;case"textarea":Yd(t,o);break;case"select":i=o.value,i!=null&&Lr(t,!!o.multiple,i,!1)}},sh=Fu,oh=pr;var Bw={usingClientEntryPoint:!1,Events:[Xi,$r,po,rh,ih,Fu]},ds={findFiberByHostInstance:or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Vw={bundleType:ds.bundleType,version:ds.version,rendererPackageName:ds.rendererPackageName,rendererConfig:ds.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:V.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ch(t),t===null?null:t.stateNode},findFiberByHostInstance:ds.findFiberByHostInstance||jw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jo.isDisabled&&Jo.supportsFiber)try{Ks=Jo.inject(Vw),Qt=Jo}catch{}}return ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bw,ft.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qu(i))throw Error(n(200));return zw(t,i,null,o)},ft.createRoot=function(t,i){if(!qu(t))throw Error(n(299));var o=!1,a="",c=Up;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(a=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=Vu(t,1,!1,null,null,o,!1,a,c),t[ln]=i.current,Ki(t.nodeType===8?t.parentNode:t),new Hu(i)},ft.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=ch(i),t=t===null?null:t.stateNode,t},ft.flushSync=function(t){return pr(t)},ft.hydrate=function(t,i,o){if(!Yo(i))throw Error(n(200));return Xo(null,t,i,!0,o)},ft.hydrateRoot=function(t,i,o){if(!qu(t))throw Error(n(405));var a=o!=null&&o.hydratedSources||null,c=!1,h="",m=Up;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(m=o.onRecoverableError)),i=bp(i,null,t,1,o??null,c,!1,h,m),t[ln]=i.current,Ki(t),a)for(t=0;t<a.length;t++)o=a[t],c=o._getVersion,c=c(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,c]:i.mutableSourceEagerHydrationData.push(o,c);return new Qo(i)},ft.render=function(t,i,o){if(!Yo(i))throw Error(n(200));return Xo(null,t,i,!1,o)},ft.unmountComponentAtNode=function(t){if(!Yo(t))throw Error(n(40));return t._reactRootContainer?(pr(function(){Xo(null,null,t,!1,function(){t._reactRootContainer=null,t[ln]=null})}),!0):!1},ft.unstable_batchedUpdates=Fu,ft.unstable_renderSubtreeIntoContainer=function(t,i,o,a){if(!Yo(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Xo(t,i,o,!1,a)},ft.version="18.3.1-next-f1338f8080-20240426",ft}var Gp;function Jw(){if(Gp)return Qu.exports;Gp=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Qu.exports=Xw(),Qu.exports}var Kp;function Zw(){if(Kp)return Zo;Kp=1;var r=Jw();return Zo.createRoot=r.createRoot,Zo.hydrateRoot=r.hydrateRoot,Zo}var e0=Zw();const it={GRASS:"grass",WATER:"water",ROCK:"rock",EMPTY:"empty",FOOD:"food"},t0={[it.GRASS]:.4,[it.WATER]:.2,[it.EMPTY]:.1,[it.ROCK]:.15,[it.FOOD]:.15},n0="_tile_xzvxb_1",r0="_grass_xzvxb_14",i0="_water_xzvxb_22",s0="_rock_xzvxb_29",o0="_empty_xzvxb_36",l0="_food_xzvxb_43",Qp={tile:n0,grass:r0,water:i0,rock:s0,empty:o0,food:l0};var Ju={exports:{}},Zu,Yp;function a0(){if(Yp)return Zu;Yp=1;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Zu=r,Zu}var ec,Xp;function u0(){if(Xp)return ec;Xp=1;var r=a0();function e(){}function n(){}return n.resetWarningCache=e,ec=function(){function s(d,f,p,g,w,v){if(v!==r){var S=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw S.name="Invariant Violation",S}}s.isRequired=s;function l(){return s}var u={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:l,element:s,elementType:s,instanceOf:l,node:s,objectOf:l,oneOf:l,oneOfType:l,shape:l,exact:l,checkPropTypes:n,resetWarningCache:e};return u.PropTypes=u,u},ec}var Jp;function c0(){return Jp||(Jp=1,Ju.exports=u0()()),Ju.exports}var d0=c0();const en=Hw(d0);function _g(r){const{isActive:e=!1,tile:n={}}=r,{type:s}=n,l={[it.GRASS]:"☘️",[it.WATER]:"",[it.ROCK]:"⛰️",[it.EMPTY]:"",[it.FOOD]:"🍎"};return fe.jsx("div",{className:`${Qp.tile} ${Qp[s]}`,children:l[s]})}_g.propTypes={isActive:en.bool,tile:en.object};const h0="_board_1afqm_1",f0="_row_1afqm_8",p0="_mycharacter_1afqm_13",m0="_char_1afqm_21",g0="_name_1afqm_28",_0="_moveD_1afqm_35",v0="_moveU_1afqm_38",y0="_moveR_1afqm_41",w0="_moveL_1afqm_44",E0="_dragon_1afqm_47",S0="_walkLeft_1afqm_50",I0="_walkRight_1afqm_53",vr={board:h0,row:f0,mycharacter:p0,char:m0,name:g0,moveD:_0,moveU:v0,moveR:y0,moveL:w0,dragon:E0,walkLeft:S0,walkRight:I0},C0=(r,e)=>{const n=r*e,s={};for(const[f,p]of Object.entries(t0))s[f]=Math.floor(p*n);let l=[];for(const[f,p]of Object.entries(s))l=l.concat(Array(p).fill(f));for(;l.length<n;)l.push(it.EMPTY);for(let f=l.length-1;f>0;f--){const p=Math.floor(Math.random()*(f+1));[l[f],l[p]]=[l[p],l[f]]}const u=[];let d=0;for(let f=0;f<r;f++){const p=[];for(let g=0;g<e;g++)p.push({isActive:!1,type:l[d++]});u.push(p)}return u};var Zp={};/**
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
 */const D=function(r,e){if(!r)throw wi(e)},wi=function(r){return new Error("Firebase Database ("+vg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+r)};/**
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
 */const yg=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):(l&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},T0=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const l=r[n++];if(l<128)e[s++]=String.fromCharCode(l);else if(l>191&&l<224){const u=r[n++];e[s++]=String.fromCharCode((l&31)<<6|u&63)}else if(l>239&&l<365){const u=r[n++],d=r[n++],f=r[n++],p=((l&7)<<18|(u&63)<<12|(d&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const u=r[n++],d=r[n++];e[s++]=String.fromCharCode((l&15)<<12|(u&63)<<6|d&63)}}return e.join("")},Hc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<r.length;l+=3){const u=r[l],d=l+1<r.length,f=d?r[l+1]:0,p=l+2<r.length,g=p?r[l+2]:0,w=u>>2,v=(u&3)<<4|f>>4;let S=(f&15)<<2|g>>6,A=g&63;p||(A=64,d||(S=64)),s.push(n[w],n[v],n[S],n[A])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(yg(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):T0(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<r.length;){const u=n[r.charAt(l++)],f=l<r.length?n[r.charAt(l)]:0;++l;const g=l<r.length?n[r.charAt(l)]:64;++l;const v=l<r.length?n[r.charAt(l)]:64;if(++l,u==null||f==null||g==null||v==null)throw new k0;const S=u<<2|f>>4;if(s.push(S),g!==64){const A=f<<4&240|g>>2;if(s.push(A),v!==64){const L=g<<6&192|v;s.push(L)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class k0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wg=function(r){const e=yg(r);return Hc.encodeByteArray(e,!0)},al=function(r){return wg(r).replace(/\./g,"")},ul=function(r){try{return Hc.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function R0(r){return Eg(void 0,r)}function Eg(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!N0(n)||(r[n]=Eg(r[n],e[n]));return r}function N0(r){return r!=="__proto__"}/**
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
 */function P0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const A0=()=>P0().__FIREBASE_DEFAULTS__,O0=()=>{if(typeof process>"u"||typeof Zp>"u")return;const r=Zp.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},x0=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&ul(r[1]);return e&&JSON.parse(e)},qc=()=>{try{return A0()||O0()||x0()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Sg=r=>{var e,n;return(n=(e=qc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[r]},D0=r=>{const e=Sg(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Ig=()=>{var r;return(r=qc())===null||r===void 0?void 0:r.config},Cg=r=>{var e;return(e=qc())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class Ls{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function L0(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",l=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},r);return[al(JSON.stringify(n)),al(JSON.stringify(d)),""].join(".")}/**
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
 */function ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ot())}function M0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Tg(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function kg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function b0(){const r=ot();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Rg(){return vg.NODE_ADMIN===!0}function Ng(){try{return typeof indexedDB=="object"}catch{return!1}}function Pg(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},l.onupgradeneeded=()=>{n=!1},l.onerror=()=>{var u;e(((u=l.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){e(n)}})}function F0(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const U0="FirebaseError";class sn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=U0,Object.setPrototypeOf(this,sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ar.prototype.create)}}class Ar{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},l=`${this.service}/${e}`,u=this.errors[e],d=u?z0(u,s):"Error",f=`${this.serviceName}: ${d} (${l}).`;return new sn(l,f,s)}}function z0(r,e){return r.replace(j0,(n,s)=>{const l=e[s];return l!=null?String(l):`<${s}?>`})}const j0=/\{\$([^}]+)}/g;/**
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
 */function Cs(r){return JSON.parse(r)}function He(r){return JSON.stringify(r)}/**
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
 */const Ag=function(r){let e={},n={},s={},l="";try{const u=r.split(".");e=Cs(ul(u[0])||""),n=Cs(ul(u[1])||""),l=u[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:l}},W0=function(r){const e=Ag(r),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},B0=function(r){const e=Ag(r).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function on(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function pi(r,e){if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}function vc(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function cl(r,e,n){const s={};for(const l in r)Object.prototype.hasOwnProperty.call(r,l)&&(s[l]=e.call(n,r[l],l,r));return s}function Ts(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const l of n){if(!s.includes(l))return!1;const u=r[l],d=e[l];if(em(u)&&em(d)){if(!Ts(u,d))return!1}else if(u!==d)return!1}for(const l of s)if(!n.includes(l))return!1;return!0}function em(r){return r!==null&&typeof r=="object"}/**
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
 */class V0{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let v=0;v<16;v++)s[v]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let v=0;v<16;v++)s[v]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let v=16;v<80;v++){const S=s[v-3]^s[v-8]^s[v-14]^s[v-16];s[v]=(S<<1|S>>>31)&4294967295}let l=this.chain_[0],u=this.chain_[1],d=this.chain_[2],f=this.chain_[3],p=this.chain_[4],g,w;for(let v=0;v<80;v++){v<40?v<20?(g=f^u&(d^f),w=1518500249):(g=u^d^f,w=1859775393):v<60?(g=u&d|f&(u|d),w=2400959708):(g=u^d^f,w=3395469782);const S=(l<<5|l>>>27)+g+p+w+s[v]&4294967295;p=f,f=d,d=(u<<30|u>>>2)&4294967295,u=l,l=S}this.chain_[0]=this.chain_[0]+l&4294967295,this.chain_[1]=this.chain_[1]+u&4294967295,this.chain_[2]=this.chain_[2]+d&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let l=0;const u=this.buf_;let d=this.inbuf_;for(;l<n;){if(d===0)for(;l<=s;)this.compress_(e,l),l+=this.blockSize;if(typeof e=="string"){for(;l<n;)if(u[d]=e.charCodeAt(l),++d,++l,d===this.blockSize){this.compress_(u),d=0;break}}else for(;l<n;)if(u[d]=e[l],++d,++l,d===this.blockSize){this.compress_(u),d=0;break}}this.inbuf_=d,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let l=this.blockSize-1;l>=56;l--)this.buf_[l]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let l=0;l<5;l++)for(let u=24;u>=0;u-=8)e[s]=this.chain_[l]>>u&255,++s;return e}}function $0(r,e){const n=new H0(r,e);return n.subscribe.bind(n)}class H0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let l;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");q0(e,["next","error","complete"])?l=e:l={next:e,error:n,complete:s},l.next===void 0&&(l.next=tc),l.error===void 0&&(l.error=tc),l.complete===void 0&&(l.complete=tc);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function q0(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function tc(){}function xl(r,e){return`${r} failed: ${e} argument `}/**
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
 */const G0=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);if(l>=55296&&l<=56319){const u=l-55296;s++,D(s<r.length,"Surrogate pair missing trail surrogate.");const d=r.charCodeAt(s)-56320;l=65536+(u<<10)+d}l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):l<65536?(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},Dl=function(r){let e=0;for(let n=0;n<r.length;n++){const s=r.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const K0=1e3,Q0=2,Y0=4*60*60*1e3,X0=.5;function tm(r,e=K0,n=Q0){const s=e*Math.pow(n,r),l=Math.round(X0*s*(Math.random()-.5)*2);return Math.min(Y0,s+l)}/**
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
 */class J0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ls;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:n});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),l=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(l)return null;throw u}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(eE(e))try{this.getOrInitializeService({instanceIdentifier:yr})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:l});s.resolve(u)}catch{}}}}clearInstance(e=yr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yr){return this.instances.has(e)}getOptions(e=yr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,d]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(u);s===f&&d.resolve(l)}return l}onInit(e,n){var s;const l=this.normalizeInstanceIdentifier(n),u=(s=this.onInitCallbacks.get(l))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(l,u);const d=this.instances.get(l);return d&&e(d,l),()=>{u.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const l of s)try{l(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Z0(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=yr){return this.component?this.component.multipleInstances?e:yr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Z0(r){return r===yr?void 0:r}function eE(r){return r.instantiationMode==="EAGER"}/**
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
 */class tE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new J0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var he;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(he||(he={}));const nE={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},rE=he.INFO,iE={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},sE=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),l=iE[e];if(l)console[l](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ll{constructor(e){this.name=e,this._logLevel=rE,this._logHandler=sE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?nE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const oE=(r,e)=>e.some(n=>r instanceof n);let nm,rm;function lE(){return nm||(nm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function aE(){return rm||(rm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Og=new WeakMap,yc=new WeakMap,xg=new WeakMap,nc=new WeakMap,Kc=new WeakMap;function uE(r){const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("success",u),r.removeEventListener("error",d)},u=()=>{n(Yn(r.result)),l()},d=()=>{s(r.error),l()};r.addEventListener("success",u),r.addEventListener("error",d)});return e.then(n=>{n instanceof IDBCursor&&Og.set(n,r)}).catch(()=>{}),Kc.set(e,r),e}function cE(r){if(yc.has(r))return;const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",d),r.removeEventListener("abort",d)},u=()=>{n(),l()},d=()=>{s(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",u),r.addEventListener("error",d),r.addEventListener("abort",d)});yc.set(r,e)}let wc={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return yc.get(r);if(e==="objectStoreNames")return r.objectStoreNames||xg.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yn(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function dE(r){wc=r(wc)}function hE(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(rc(this),e,...n);return xg.set(s,e.sort?e.sort():[e]),Yn(s)}:aE().includes(r)?function(...e){return r.apply(rc(this),e),Yn(Og.get(this))}:function(...e){return Yn(r.apply(rc(this),e))}}function fE(r){return typeof r=="function"?hE(r):(r instanceof IDBTransaction&&cE(r),oE(r,lE())?new Proxy(r,wc):r)}function Yn(r){if(r instanceof IDBRequest)return uE(r);if(nc.has(r))return nc.get(r);const e=fE(r);return e!==r&&(nc.set(r,e),Kc.set(e,r)),e}const rc=r=>Kc.get(r);function Dg(r,e,{blocked:n,upgrade:s,blocking:l,terminated:u}={}){const d=indexedDB.open(r,e),f=Yn(d);return s&&d.addEventListener("upgradeneeded",p=>{s(Yn(d.result),p.oldVersion,p.newVersion,Yn(d.transaction),p)}),n&&d.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),f.then(p=>{u&&p.addEventListener("close",()=>u()),l&&p.addEventListener("versionchange",g=>l(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const pE=["get","getKey","getAll","getAllKeys","count"],mE=["put","add","delete","clear"],ic=new Map;function im(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(ic.get(e))return ic.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,l=mE.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(l||pE.includes(n)))return;const u=async function(d,...f){const p=this.transaction(d,l?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(f.shift())),(await Promise.all([g[n](...f),l&&p.done]))[0]};return ic.set(e,u),u}dE(r=>({...r,get:(e,n,s)=>im(e,n)||r.get(e,n,s),has:(e,n)=>!!im(e,n)||r.has(e,n)}));/**
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
 */class gE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_E(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function _E(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ec="@firebase/app",sm="0.10.17";/**
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
 */const En=new Ll("@firebase/app"),vE="@firebase/app-compat",yE="@firebase/analytics-compat",wE="@firebase/analytics",EE="@firebase/app-check-compat",SE="@firebase/app-check",IE="@firebase/auth",CE="@firebase/auth-compat",TE="@firebase/database",kE="@firebase/data-connect",RE="@firebase/database-compat",NE="@firebase/functions",PE="@firebase/functions-compat",AE="@firebase/installations",OE="@firebase/installations-compat",xE="@firebase/messaging",DE="@firebase/messaging-compat",LE="@firebase/performance",ME="@firebase/performance-compat",bE="@firebase/remote-config",FE="@firebase/remote-config-compat",UE="@firebase/storage",zE="@firebase/storage-compat",jE="@firebase/firestore",WE="@firebase/vertexai",BE="@firebase/firestore-compat",VE="firebase",$E="11.1.0";/**
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
 */const Sc="[DEFAULT]",HE={[Ec]:"fire-core",[vE]:"fire-core-compat",[wE]:"fire-analytics",[yE]:"fire-analytics-compat",[SE]:"fire-app-check",[EE]:"fire-app-check-compat",[IE]:"fire-auth",[CE]:"fire-auth-compat",[TE]:"fire-rtdb",[kE]:"fire-data-connect",[RE]:"fire-rtdb-compat",[NE]:"fire-fn",[PE]:"fire-fn-compat",[AE]:"fire-iid",[OE]:"fire-iid-compat",[xE]:"fire-fcm",[DE]:"fire-fcm-compat",[LE]:"fire-perf",[ME]:"fire-perf-compat",[bE]:"fire-rc",[FE]:"fire-rc-compat",[UE]:"fire-gcs",[zE]:"fire-gcs-compat",[jE]:"fire-fst",[BE]:"fire-fst-compat",[WE]:"fire-vertex","fire-js":"fire-js",[VE]:"fire-js-all"};/**
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
 */const dl=new Map,qE=new Map,Ic=new Map;function om(r,e){try{r.container.addComponent(e)}catch(n){En.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function rn(r){const e=r.name;if(Ic.has(e))return En.debug(`There were multiple attempts to register component ${e}.`),!1;Ic.set(e,r);for(const n of dl.values())om(n,r);for(const n of qE.values())om(n,r);return!0}function Or(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function mn(r){return r.settings!==void 0}/**
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
 */const GE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xn=new Ar("app","Firebase",GE);/**
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
 */class KE{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ht("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xn.create("app-deleted",{appName:this._name})}}/**
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
 */const Si=$E;function Lg(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Sc,automaticDataCollectionEnabled:!1},e),l=s.name;if(typeof l!="string"||!l)throw Xn.create("bad-app-name",{appName:String(l)});if(n||(n=Ig()),!n)throw Xn.create("no-options");const u=dl.get(l);if(u){if(Ts(n,u.options)&&Ts(s,u.config))return u;throw Xn.create("duplicate-app",{appName:l})}const d=new tE(l);for(const p of Ic.values())d.addComponent(p);const f=new KE(n,s,d);return dl.set(l,f),f}function Qc(r=Sc){const e=dl.get(r);if(!e&&r===Sc&&Ig())return Lg();if(!e)throw Xn.create("no-app",{appName:r});return e}function Dt(r,e,n){var s;let l=(s=HE[r])!==null&&s!==void 0?s:r;n&&(l+=`-${n}`);const u=l.match(/\s|\//),d=e.match(/\s|\//);if(u||d){const f=[`Unable to register library "${l}" with version "${e}":`];u&&f.push(`library name "${l}" contains illegal characters (whitespace or "/")`),u&&d&&f.push("and"),d&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),En.warn(f.join(" "));return}rn(new Ht(`${l}-version`,()=>({library:l,version:e}),"VERSION"))}/**
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
 */const QE="firebase-heartbeat-database",YE=1,ks="firebase-heartbeat-store";let sc=null;function Mg(){return sc||(sc=Dg(QE,YE,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(ks)}catch(n){console.warn(n)}}}}).catch(r=>{throw Xn.create("idb-open",{originalErrorMessage:r.message})})),sc}async function XE(r){try{const n=(await Mg()).transaction(ks),s=await n.objectStore(ks).get(bg(r));return await n.done,s}catch(e){if(e instanceof sn)En.warn(e.message);else{const n=Xn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});En.warn(n.message)}}}async function lm(r,e){try{const s=(await Mg()).transaction(ks,"readwrite");await s.objectStore(ks).put(e,bg(r)),await s.done}catch(n){if(n instanceof sn)En.warn(n.message);else{const s=Xn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});En.warn(s.message)}}}function bg(r){return`${r.name}!${r.options.appId}`}/**
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
 */const JE=1024,ZE=30*24*60*60*1e3;class eS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new nS(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=am();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(d=>d.date===u)?void 0:(this._heartbeatsCache.heartbeats.push({date:u,agent:l}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(d=>{const f=new Date(d.date).valueOf();return Date.now()-f<=ZE}),this._storage.overwrite(this._heartbeatsCache))}catch(s){En.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=am(),{heartbeatsToSend:s,unsentEntries:l}=tS(this._heartbeatsCache.heartbeats),u=al(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return En.warn(n),""}}}function am(){return new Date().toISOString().substring(0,10)}function tS(r,e=JE){const n=[];let s=r.slice();for(const l of r){const u=n.find(d=>d.agent===l.agent);if(u){if(u.dates.push(l.date),um(n)>e){u.dates.pop();break}}else if(n.push({agent:l.agent,dates:[l.date]}),um(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class nS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ng()?Pg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await XE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return lm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return lm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...e.heartbeats]})}else return}}function um(r){return al(JSON.stringify({version:2,heartbeats:r})).length}/**
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
 */function rS(r){rn(new Ht("platform-logger",e=>new gE(e),"PRIVATE")),rn(new Ht("heartbeat",e=>new eS(e),"PRIVATE")),Dt(Ec,sm,r),Dt(Ec,sm,"esm2017"),Dt("fire-js","")}rS("");var cm={};const dm="@firebase/database",hm="1.0.10";/**
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
 */let Fg="";function iS(r){Fg=r}/**
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
 */class sS{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),He(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Cs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class oS{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return on(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Ug=function(r){try{if(typeof window<"u"&&typeof window[r]<"u"){const e=window[r];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new sS(e)}}catch{}return new oS},Er=Ug("localStorage"),lS=Ug("sessionStorage");/**
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
 */const ai=new Ll("@firebase/database"),aS=function(){let r=1;return function(){return r++}}(),zg=function(r){const e=G0(r),n=new V0;n.update(e);const s=n.digest();return Hc.encodeByteArray(s)},Ms=function(...r){let e="";for(let n=0;n<r.length;n++){const s=r[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ms.apply(null,s):typeof s=="object"?e+=He(s):e+=s,e+=" "}return e};let _s=null,fm=!0;const uS=function(r,e){D(!e,"Can't turn on custom loggers persistently."),ai.logLevel=he.VERBOSE,_s=ai.log.bind(ai)},Qe=function(...r){if(fm===!0&&(fm=!1,_s===null&&lS.get("logging_enabled")===!0&&uS()),_s){const e=Ms.apply(null,r);_s(e)}},bs=function(r){return function(...e){Qe(r,...e)}},Cc=function(...r){const e="FIREBASE INTERNAL ERROR: "+Ms(...r);ai.error(e)},Sn=function(...r){const e=`FIREBASE FATAL ERROR: ${Ms(...r)}`;throw ai.error(e),new Error(e)},st=function(...r){const e="FIREBASE WARNING: "+Ms(...r);ai.warn(e)},cS=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&st("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Yc=function(r){return typeof r=="number"&&(r!==r||r===Number.POSITIVE_INFINITY||r===Number.NEGATIVE_INFINITY)},dS=function(r){if(document.readyState==="complete")r();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,r())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},mi="[MIN_NAME]",Ir="[MAX_NAME]",xr=function(r,e){if(r===e)return 0;if(r===mi||e===Ir)return-1;if(e===mi||r===Ir)return 1;{const n=pm(r),s=pm(e);return n!==null?s!==null?n-s===0?r.length-e.length:n-s:-1:s!==null?1:r<e?-1:1}},hS=function(r,e){return r===e?0:r<e?-1:1},fs=function(r,e){if(e&&r in e)return e[r];throw new Error("Missing required key ("+r+") in object: "+He(e))},Xc=function(r){if(typeof r!="object"||r===null)return He(r);const e=[];for(const s in r)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=He(e[s]),n+=":",n+=Xc(r[e[s]]);return n+="}",n},jg=function(r,e){const n=r.length;if(n<=e)return[r];const s=[];for(let l=0;l<n;l+=e)l+e>n?s.push(r.substring(l,n)):s.push(r.substring(l,l+e));return s};function Ye(r,e){for(const n in r)r.hasOwnProperty(n)&&e(n,r[n])}const Wg=function(r){D(!Yc(r),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let l,u,d,f,p;r===0?(u=0,d=0,l=1/r===-1/0?1:0):(l=r<0,r=Math.abs(r),r>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(r)/Math.LN2),s),u=f+s,d=Math.round(r*Math.pow(2,n-f)-Math.pow(2,n))):(u=0,d=Math.round(r/Math.pow(2,1-s-n))));const g=[];for(p=n;p;p-=1)g.push(d%2?1:0),d=Math.floor(d/2);for(p=e;p;p-=1)g.push(u%2?1:0),u=Math.floor(u/2);g.push(l?1:0),g.reverse();const w=g.join("");let v="";for(p=0;p<64;p+=8){let S=parseInt(w.substr(p,8),2).toString(16);S.length===1&&(S="0"+S),v=v+S}return v.toLowerCase()},fS=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},pS=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function mS(r,e){let n="Unknown Error";r==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":r==="permission_denied"?n="Client doesn't have permission to access the desired data.":r==="unavailable"&&(n="The service is unavailable");const s=new Error(r+" at "+e._path.toString()+": "+n);return s.code=r.toUpperCase(),s}const gS=new RegExp("^-?(0*)\\d{1,10}$"),_S=-2147483648,vS=2147483647,pm=function(r){if(gS.test(r)){const e=Number(r);if(e>=_S&&e<=vS)return e}return null},Ii=function(r){try{r()}catch(e){setTimeout(()=>{const n=e.stack||"";throw st("Exception was thrown by user callback.",n),e},Math.floor(0))}},yS=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},vs=function(r,e){const n=setTimeout(r,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class wS{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){st(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class ES{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(l=>this.auth_=l)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Qe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',st(e)}}class rl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}rl.OWNER="owner";/**
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
 */const Jc="5",Bg="v",Vg="s",$g="r",Hg="f",qg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Gg="ls",Kg="p",Tc="ac",Qg="websocket",Yg="long_polling";/**
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
 */class Xg{constructor(e,n,s,l,u=!1,d="",f=!1,p=!1){this.secure=n,this.namespace=s,this.webSocketOnly=l,this.nodeAdmin=u,this.persistenceKey=d,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=p,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Er.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Er.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function SS(r){return r.host!==r.internalHost||r.isCustomHost()||r.includeNamespaceInQueryParams}function Jg(r,e,n){D(typeof e=="string","typeof type must == string"),D(typeof n=="object","typeof params must == object");let s;if(e===Qg)s=(r.secure?"wss://":"ws://")+r.internalHost+"/.ws?";else if(e===Yg)s=(r.secure?"https://":"http://")+r.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);SS(r)&&(n.ns=r.namespace);const l=[];return Ye(n,(u,d)=>{l.push(u+"="+d)}),s+l.join("&")}/**
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
 */class IS{constructor(){this.counters_={}}incrementCounter(e,n=1){on(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return R0(this.counters_)}}/**
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
 */const oc={},lc={};function Zc(r){const e=r.toString();return oc[e]||(oc[e]=new IS),oc[e]}function CS(r,e){const n=r.toString();return lc[n]||(lc[n]=e()),lc[n]}/**
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
 */class TS{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let l=0;l<s.length;++l)s[l]&&Ii(()=>{this.onMessage_(s[l])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const mm="start",kS="close",RS="pLPCommand",NS="pRTLPCB",Zg="id",e_="pw",t_="ser",PS="cb",AS="seg",OS="ts",xS="d",DS="dframe",n_=1870,r_=30,LS=n_-r_,MS=25e3,bS=3e4;class oi{constructor(e,n,s,l,u,d,f){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.transportSessionId=d,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=bs(e),this.stats_=Zc(n),this.urlFn=p=>(this.appCheckToken&&(p[Tc]=this.appCheckToken),Jg(n,Yg,p))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new TS(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(bS)),dS(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ed((...u)=>{const[d,f,p,g,w]=u;if(this.incrementIncomingBytes_(u),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,d===mm)this.id=f,this.password=p;else if(d===kS)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+d)},(...u)=>{const[d,f]=u;this.incrementIncomingBytes_(u),this.myPacketOrderer.handleResponse(d,f)},()=>{this.onClosed_()},this.urlFn);const s={};s[mm]="t",s[t_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[PS]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Bg]=Jc,this.transportSessionId&&(s[Vg]=this.transportSessionId),this.lastSessionId&&(s[Gg]=this.lastSessionId),this.applicationId&&(s[Kg]=this.applicationId),this.appCheckToken&&(s[Tc]=this.appCheckToken),typeof location<"u"&&location.hostname&&qg.test(location.hostname)&&(s[$g]=Hg);const l=this.urlFn(s);this.log_("Connecting via long-poll to "+l),this.scriptTagHolder.addTag(l,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){oi.forceAllow_=!0}static forceDisallow(){oi.forceDisallow_=!0}static isAvailable(){return oi.forceAllow_?!0:!oi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!fS()&&!pS()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=He(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=wg(n),l=jg(s,LS);for(let u=0;u<l.length;u++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,l.length,l[u]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[DS]="t",s[Zg]=e,s[e_]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=He(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ed{constructor(e,n,s,l){this.onDisconnect=s,this.urlFn=l,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=aS(),window[RS+this.uniqueCallbackIdentifier]=e,window[NS+this.uniqueCallbackIdentifier]=n,this.myIFrame=ed.createIFrame_();let u="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(u='<script>document.domain="'+document.domain+'";<\/script>');const d="<html><body>"+u+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(d),this.myIFrame.doc.close()}catch(f){Qe("frame writing exception"),f.stack&&Qe(f.stack),Qe(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Qe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Zg]=this.myID,e[e_]=this.myPW,e[t_]=this.currentSerial;let n=this.urlFn(e),s="",l=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+r_+s.length<=n_;){const d=this.pendingSegs.shift();s=s+"&"+AS+l+"="+d.seg+"&"+OS+l+"="+d.ts+"&"+xS+l+"="+d.d,l++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},l=setTimeout(s,Math.floor(MS)),u=()=>{clearTimeout(l),s()};this.addTag(e,u)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const l=s.readyState;(!l||l==="loaded"||l==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Qe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const FS=16384,US=45e3;let hl=null;typeof MozWebSocket<"u"?hl=MozWebSocket:typeof WebSocket<"u"&&(hl=WebSocket);class Bt{constructor(e,n,s,l,u,d,f){this.connId=e,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=bs(this.connId),this.stats_=Zc(n),this.connURL=Bt.connectionURL_(n,d,f,l,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,l,u){const d={};return d[Bg]=Jc,typeof location<"u"&&location.hostname&&qg.test(location.hostname)&&(d[$g]=Hg),n&&(d[Vg]=n),s&&(d[Gg]=s),l&&(d[Tc]=l),u&&(d[Kg]=u),Jg(e,Qg,d)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Er.set("previous_websocket_failure",!0);try{let s;Rg(),this.mySock=new hl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_()}}start(){}static forceDisallow(){Bt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&hl!==null&&!Bt.forceDisallow_}static previouslyFailed(){return Er.isInMemoryStorage||Er.get("previous_websocket_failure")===!0}markConnectionHealthy(){Er.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Cs(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(D(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=He(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=jg(n,FS);s.length>1&&this.sendString_(String(s.length));for(let l=0;l<s.length;l++)this.sendString_(s[l])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(US))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Bt.responsesRequiredToBeHealthy=2;Bt.healthyTimeout=3e4;/**
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
 */class Rs{static get ALL_TRANSPORTS(){return[oi,Bt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Bt&&Bt.isAvailable();let s=n&&!Bt.previouslyFailed();if(e.webSocketOnly&&(n||st("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Bt];else{const l=this.transports_=[];for(const u of Rs.ALL_TRANSPORTS)u&&u.isAvailable()&&l.push(u);Rs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Rs.globalTransportInitialized_=!1;/**
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
 */const zS=6e4,jS=5e3,WS=10*1024,BS=100*1024,ac="t",gm="d",VS="s",_m="r",$S="e",vm="o",ym="a",wm="n",Em="p",HS="h";class qS{constructor(e,n,s,l,u,d,f,p,g,w){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=l,this.authToken_=u,this.onMessage_=d,this.onReady_=f,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=w,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=bs("c:"+this.id+":"),this.transportManager_=new Rs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const l=e.healthyTimeout||0;l>0&&(this.healthyTimeout_=vs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>BS?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>WS?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(l)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ac in e){const n=e[ac];n===ym?this.upgradeIfSecondaryHealthy_():n===_m?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===vm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=fs("t",e),s=fs("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Em,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ym,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:wm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=fs("t",e),s=fs("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=fs(ac,e);if(gm in e){const s=e[gm];if(n===HS){const l=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(l.h=this.repoInfo_.host),this.onHandshake_(l)}else if(n===wm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let l=0;l<this.pendingDataMessages.length;++l)this.onDataMessage_(this.pendingDataMessages[l]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===VS?this.onConnectionShutdown_(s):n===_m?this.onReset_(s):n===$S?Cc("Server Error: "+s):n===vm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Cc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,l=e.h;this.sessionId=e.s,this.repoInfo_.host=l,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Jc!==s&&st("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),vs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(zS))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):vs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(jS))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Em,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Er.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class i_{put(e,n,s,l){}merge(e,n,s,l){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class s_{constructor(e){this.allowedEvents_=e,this.listeners_={},D(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let l=0;l<s.length;l++)s[l].callback.apply(s[l].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const l=this.getInitialEvent(e);l&&n.apply(s,l)}off(e,n,s){this.validateEventType_(e);const l=this.listeners_[e]||[];for(let u=0;u<l.length;u++)if(l[u].callback===n&&(!s||s===l[u].context)){l.splice(u,1);return}}validateEventType_(e){D(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class fl extends s_{static getInstance(){return new fl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Gc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return D(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Sm=32,Im=768;class pe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let l=0;l<this.pieces_.length;l++)this.pieces_[l].length>0&&(this.pieces_[s]=this.pieces_[l],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ue(){return new pe("")}function ee(r){return r.pieceNum_>=r.pieces_.length?null:r.pieces_[r.pieceNum_]}function er(r){return r.pieces_.length-r.pieceNum_}function ve(r){let e=r.pieceNum_;return e<r.pieces_.length&&e++,new pe(r.pieces_,e)}function td(r){return r.pieceNum_<r.pieces_.length?r.pieces_[r.pieces_.length-1]:null}function GS(r){let e="";for(let n=r.pieceNum_;n<r.pieces_.length;n++)r.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(r.pieces_[n])));return e||"/"}function Ns(r,e=0){return r.pieces_.slice(r.pieceNum_+e)}function o_(r){if(r.pieceNum_>=r.pieces_.length)return null;const e=[];for(let n=r.pieceNum_;n<r.pieces_.length-1;n++)e.push(r.pieces_[n]);return new pe(e,0)}function Pe(r,e){const n=[];for(let s=r.pieceNum_;s<r.pieces_.length;s++)n.push(r.pieces_[s]);if(e instanceof pe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let l=0;l<s.length;l++)s[l].length>0&&n.push(s[l])}return new pe(n,0)}function ie(r){return r.pieceNum_>=r.pieces_.length}function pt(r,e){const n=ee(r),s=ee(e);if(n===null)return e;if(n===s)return pt(ve(r),ve(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+r+")")}function KS(r,e){const n=Ns(r,0),s=Ns(e,0);for(let l=0;l<n.length&&l<s.length;l++){const u=xr(n[l],s[l]);if(u!==0)return u}return n.length===s.length?0:n.length<s.length?-1:1}function nd(r,e){if(er(r)!==er(e))return!1;for(let n=r.pieceNum_,s=e.pieceNum_;n<=r.pieces_.length;n++,s++)if(r.pieces_[n]!==e.pieces_[s])return!1;return!0}function xt(r,e){let n=r.pieceNum_,s=e.pieceNum_;if(er(r)>er(e))return!1;for(;n<r.pieces_.length;){if(r.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class QS{constructor(e,n){this.errorPrefix_=n,this.parts_=Ns(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Dl(this.parts_[s]);l_(this)}}function YS(r,e){r.parts_.length>0&&(r.byteLength_+=1),r.parts_.push(e),r.byteLength_+=Dl(e),l_(r)}function XS(r){const e=r.parts_.pop();r.byteLength_-=Dl(e),r.parts_.length>0&&(r.byteLength_-=1)}function l_(r){if(r.byteLength_>Im)throw new Error(r.errorPrefix_+"has a key path longer than "+Im+" bytes ("+r.byteLength_+").");if(r.parts_.length>Sm)throw new Error(r.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Sm+") or object contains a cycle "+wr(r))}function wr(r){return r.parts_.length===0?"":"in property '"+r.parts_.join(".")+"'"}/**
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
 */class rd extends s_{static getInstance(){return new rd}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return D(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ps=1e3,JS=60*5*1e3,Cm=30*1e3,ZS=1.3,eI=3e4,tI="server_kill",Tm=3;class wn extends i_{constructor(e,n,s,l,u,d,f,p){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=l,this.onServerInfoUpdate_=u,this.authTokenProvider_=d,this.appCheckTokenProvider_=f,this.authOverride_=p,this.id=wn.nextPersistentConnectionId_++,this.log_=bs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ps,this.maxReconnectDelay_=JS,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p&&!Rg())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");rd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&fl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const l=++this.requestNumber_,u={r:l,a:e,b:n};this.log_(He(u)),D(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(u),s&&(this.requestCBHash_[l]=s)}get(e){this.initConnection_();const n=new Ls,l={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:d=>{const f=d.d;d.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(l),this.outstandingGetCount_++;const u=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(u),n.promise}listen(e,n,s,l){this.initConnection_();const u=e._queryIdentifier,d=e._path.toString();this.log_("Listen called for "+d+" "+u),this.listens.has(d)||this.listens.set(d,new Map),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),D(!this.listens.get(d).has(u),"listen() called twice for same path/queryId.");const f={onComplete:l,hashFn:n,query:e,tag:s};this.listens.get(d).set(u,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),l=n._queryIdentifier;this.log_("Listen on "+s+" for "+l);const u={p:s},d="q";e.tag&&(u.q=n._queryObject,u.t=e.tag),u.h=e.hashFn(),this.sendRequest(d,u,f=>{const p=f.d,g=f.s;wn.warnOnListenWarnings_(p,n),(this.listens.get(s)&&this.listens.get(s).get(l))===e&&(this.log_("listen response",f),g!=="ok"&&this.removeListen_(s,l),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&on(e,"w")){const s=pi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const l='".indexOn": "'+n._queryParams.getIndex().toString()+'"',u=n._path.toString();st(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${l} at ${u} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||B0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Cm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=W0(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,l=>{const u=l.s,d=l.d||"error";this.authToken_===e&&(u==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(u,d))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),l=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+l),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,l)&&this.connected_&&this.sendUnlisten_(s,l,e._queryObject,n)}sendUnlisten_(e,n,s,l){this.log_("Unlisten on "+e+" for "+n);const u={p:e},d="n";l&&(u.q=s,u.t=l),this.sendRequest(d,u)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,l){const u={p:n,d:s};this.log_("onDisconnect "+e,u),this.sendRequest(e,u,d=>{l&&setTimeout(()=>{l(d.s,d.d)},Math.floor(0))})}put(e,n,s,l){this.putInternal("p",e,n,s,l)}merge(e,n,s,l){this.putInternal("m",e,n,s,l)}putInternal(e,n,s,l,u){this.initConnection_();const d={p:n,d:s};u!==void 0&&(d.h=u),this.outstandingPuts_.push({action:e,request:d,onComplete:l}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,l=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,u=>{this.log_(n+" response",u),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),l&&l(u.s,u.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const u=s.d;this.log_("reportStats","Error sending stats: "+u)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+He(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Cc("Unrecognized action received from server: "+He(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){D(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ps,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ps,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>eI&&(this.reconnectDelay_=ps),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*ZS)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),l=this.id+":"+wn.nextConnectionId_++,u=this.lastSessionId;let d=!1,f=null;const p=function(){f?f.close():(d=!0,s())},g=function(v){D(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(v)};this.realtime_={close:p,sendRequest:g};const w=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[v,S]=await Promise.all([this.authTokenProvider_.getToken(w),this.appCheckTokenProvider_.getToken(w)]);d?Qe("getToken() completed but was canceled"):(Qe("getToken() completed. Creating connection."),this.authToken_=v&&v.accessToken,this.appCheckToken_=S&&S.token,f=new qS(l,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,A=>{st(A+" ("+this.repoInfo_.toString()+")"),this.interrupt(tI)},u))}catch(v){this.log_("Failed to get token: "+v),d||(this.repoInfo_.nodeAdmin&&st(v),p())}}}interrupt(e){Qe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Qe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],vc(this.interruptReasons_)&&(this.reconnectDelay_=ps,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(u=>Xc(u)).join("$"):s="default";const l=this.removeListen_(e,s);l&&l.onComplete&&l.onComplete("permission_denied")}removeListen_(e,n){const s=new pe(e).toString();let l;if(this.listens.has(s)){const u=this.listens.get(s);l=u.get(n),u.delete(n),u.size===0&&this.listens.delete(s)}else l=void 0;return l}onAuthRevoked_(e,n){Qe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Tm&&(this.reconnectDelay_=Cm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Qe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Tm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Fg.replace(/\./g,"-")]=1,Gc()?e["framework.cordova"]=1:kg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=fl.getInstance().currentlyOnline();return vc(this.interruptReasons_)&&e}}wn.nextPersistentConnectionId_=0;wn.nextConnectionId_=0;/**
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
 */class te{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new te(e,n)}}/**
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
 */class Ml{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new te(mi,e),l=new te(mi,n);return this.compare(s,l)!==0}minPost(){return te.MIN}}/**
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
 */let el;class a_ extends Ml{static get __EMPTY_NODE(){return el}static set __EMPTY_NODE(e){el=e}compare(e,n){return xr(e.name,n.name)}isDefinedOn(e){throw wi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return te.MIN}maxPost(){return new te(Ir,el)}makePost(e,n){return D(typeof e=="string","KeyIndex indexValue must always be a string."),new te(e,el)}toString(){return".key"}}const ui=new a_;/**
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
 */class tl{constructor(e,n,s,l,u=null){this.isReverse_=l,this.resultGenerator_=u,this.nodeStack_=[];let d=1;for(;!e.isEmpty();)if(e=e,d=n?s(e.key,n):1,l&&(d*=-1),d<0)this.isReverse_?e=e.left:e=e.right;else if(d===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ve{constructor(e,n,s,l,u){this.key=e,this.value=n,this.color=s??Ve.RED,this.left=l??mt.EMPTY_NODE,this.right=u??mt.EMPTY_NODE}copy(e,n,s,l,u){return new Ve(e??this.key,n??this.value,s??this.color,l??this.left,u??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let l=this;const u=s(e,l.key);return u<0?l=l.copy(null,null,null,l.left.insert(e,n,s),null):u===0?l=l.copy(null,n,null,null,null):l=l.copy(null,null,null,null,l.right.insert(e,n,s)),l.fixUp_()}removeMin_(){if(this.left.isEmpty())return mt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,l;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return mt.EMPTY_NODE;l=s.right.min_(),s=s.copy(l.key,l.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ve.RED=!0;Ve.BLACK=!1;class nI{copy(e,n,s,l,u){return this}insert(e,n,s){return new Ve(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class mt{constructor(e,n=mt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new mt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ve.BLACK,null,null))}remove(e){return new mt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ve.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,l=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return l?l.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(l=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new tl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new tl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new tl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new tl(this.root_,null,this.comparator_,!0,e)}}mt.EMPTY_NODE=new nI;/**
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
 */function rI(r,e){return xr(r.name,e.name)}function id(r,e){return xr(r,e)}/**
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
 */let kc;function iI(r){kc=r}const u_=function(r){return typeof r=="number"?"number:"+Wg(r):"string:"+r},c_=function(r){if(r.isLeafNode()){const e=r.val();D(typeof e=="string"||typeof e=="number"||typeof e=="object"&&on(e,".sv"),"Priority must be a string or number.")}else D(r===kc||r.isEmpty(),"priority of unexpected type.");D(r===kc||r.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let km;class Be{static set __childrenNodeConstructor(e){km=e}static get __childrenNodeConstructor(){return km}constructor(e,n=Be.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,D(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),c_(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Be(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Be.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ie(e)?this:ee(e)===".priority"?this.priorityNode_:Be.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Be.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ee(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(D(s!==".priority"||er(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Be.__childrenNodeConstructor.EMPTY_NODE.updateChild(ve(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+u_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Wg(this.value_):e+=this.value_,this.lazyHash_=zg(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Be.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Be.__childrenNodeConstructor?-1:(D(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,l=Be.VALUE_TYPE_ORDER.indexOf(n),u=Be.VALUE_TYPE_ORDER.indexOf(s);return D(l>=0,"Unknown leaf type: "+n),D(u>=0,"Unknown leaf type: "+s),l===u?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:u-l}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Be.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let d_,h_;function sI(r){d_=r}function oI(r){h_=r}class lI extends Ml{compare(e,n){const s=e.node.getPriority(),l=n.node.getPriority(),u=s.compareTo(l);return u===0?xr(e.name,n.name):u}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return te.MIN}maxPost(){return new te(Ir,new Be("[PRIORITY-POST]",h_))}makePost(e,n){const s=d_(e);return new te(n,new Be("[PRIORITY-POST]",s))}toString(){return".priority"}}const Ae=new lI;/**
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
 */const aI=Math.log(2);class uI{constructor(e){const n=u=>parseInt(Math.log(u)/aI,10),s=u=>parseInt(Array(u+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const l=s(this.count);this.bits_=e+1&l}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const pl=function(r,e,n,s){r.sort(e);const l=function(p,g){const w=g-p;let v,S;if(w===0)return null;if(w===1)return v=r[p],S=n?n(v):v,new Ve(S,v.node,Ve.BLACK,null,null);{const A=parseInt(w/2,10)+p,L=l(p,A),B=l(A+1,g);return v=r[A],S=n?n(v):v,new Ve(S,v.node,Ve.BLACK,L,B)}},u=function(p){let g=null,w=null,v=r.length;const S=function(L,B){const q=v-L,Oe=v;v-=L;const Ie=l(q+1,Oe),xe=r[q],V=n?n(xe):xe;A(new Ve(V,xe.node,B,null,Ie))},A=function(L){g?(g.left=L,g=L):(w=L,g=L)};for(let L=0;L<p.count;++L){const B=p.nextBitIsOne(),q=Math.pow(2,p.count-(L+1));B?S(q,Ve.BLACK):(S(q,Ve.BLACK),S(q,Ve.RED))}return w},d=new uI(r.length),f=u(d);return new mt(s||e,f)};/**
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
 */let uc;const si={};class gn{static get Default(){return D(si&&Ae,"ChildrenNode.ts has not been loaded"),uc=uc||new gn({".priority":si},{".priority":Ae}),uc}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=pi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof mt?n:null}hasIndex(e){return on(this.indexSet_,e.toString())}addIndex(e,n){D(e!==ui,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let l=!1;const u=n.getIterator(te.Wrap);let d=u.getNext();for(;d;)l=l||e.isDefinedOn(d.node),s.push(d),d=u.getNext();let f;l?f=pl(s,e.getCompare()):f=si;const p=e.toString(),g=Object.assign({},this.indexSet_);g[p]=e;const w=Object.assign({},this.indexes_);return w[p]=f,new gn(w,g)}addToIndexes(e,n){const s=cl(this.indexes_,(l,u)=>{const d=pi(this.indexSet_,u);if(D(d,"Missing index implementation for "+u),l===si)if(d.isDefinedOn(e.node)){const f=[],p=n.getIterator(te.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&f.push(g),g=p.getNext();return f.push(e),pl(f,d.getCompare())}else return si;else{const f=n.get(e.name);let p=l;return f&&(p=p.remove(new te(e.name,f))),p.insert(e,e.node)}});return new gn(s,this.indexSet_)}removeFromIndexes(e,n){const s=cl(this.indexes_,l=>{if(l===si)return l;{const u=n.get(e.name);return u?l.remove(new te(e.name,u)):l}});return new gn(s,this.indexSet_)}}/**
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
 */let ms;class K{static get EMPTY_NODE(){return ms||(ms=new K(new mt(id),null,gn.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&c_(this.priorityNode_),this.children_.isEmpty()&&D(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ms}updatePriority(e){return this.children_.isEmpty()?this:new K(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ms:n}}getChild(e){const n=ee(e);return n===null?this:this.getImmediateChild(n).getChild(ve(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(D(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new te(e,n);let l,u;n.isEmpty()?(l=this.children_.remove(e),u=this.indexMap_.removeFromIndexes(s,this.children_)):(l=this.children_.insert(e,n),u=this.indexMap_.addToIndexes(s,this.children_));const d=l.isEmpty()?ms:this.priorityNode_;return new K(l,d,u)}}updateChild(e,n){const s=ee(e);if(s===null)return n;{D(ee(e)!==".priority"||er(e)===1,".priority must be the last token in a path");const l=this.getImmediateChild(s).updateChild(ve(e),n);return this.updateImmediateChild(s,l)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,l=0,u=!0;if(this.forEachChild(Ae,(d,f)=>{n[d]=f.val(e),s++,u&&K.INTEGER_REGEXP_.test(d)?l=Math.max(l,Number(d)):u=!1}),!e&&u&&l<2*s){const d=[];for(const f in n)d[f]=n[f];return d}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+u_(this.getPriority().val())+":"),this.forEachChild(Ae,(n,s)=>{const l=s.hash();l!==""&&(e+=":"+n+":"+l)}),this.lazyHash_=e===""?"":zg(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const l=this.resolveIndex_(s);if(l){const u=l.getPredecessorKey(new te(e,n));return u?u.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new te(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new te(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(l=>n(l.name,l.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,l=>l);{const l=this.children_.getIteratorFrom(e.name,te.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)<0;)l.getNext(),u=l.peek();return l}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,l=>l);{const l=this.children_.getReverseIteratorFrom(e.name,te.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)>0;)l.getNext(),u=l.peek();return l}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Fs?-1:0}withIndex(e){if(e===ui||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new K(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ui||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Ae),l=n.getIterator(Ae);let u=s.getNext(),d=l.getNext();for(;u&&d;){if(u.name!==d.name||!u.node.equals(d.node))return!1;u=s.getNext(),d=l.getNext()}return u===null&&d===null}else return!1;else return!1}}resolveIndex_(e){return e===ui?null:this.indexMap_.get(e.toString())}}K.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class cI extends K{constructor(){super(new mt(id),K.EMPTY_NODE,gn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return K.EMPTY_NODE}isEmpty(){return!1}}const Fs=new cI;Object.defineProperties(te,{MIN:{value:new te(mi,K.EMPTY_NODE)},MAX:{value:new te(Ir,Fs)}});a_.__EMPTY_NODE=K.EMPTY_NODE;Be.__childrenNodeConstructor=K;iI(Fs);oI(Fs);/**
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
 */const dI=!0;function $e(r,e=null){if(r===null)return K.EMPTY_NODE;if(typeof r=="object"&&".priority"in r&&(e=r[".priority"]),D(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof r=="object"&&".value"in r&&r[".value"]!==null&&(r=r[".value"]),typeof r!="object"||".sv"in r){const n=r;return new Be(n,$e(e))}if(!(r instanceof Array)&&dI){const n=[];let s=!1;if(Ye(r,(d,f)=>{if(d.substring(0,1)!=="."){const p=$e(f);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),n.push(new te(d,p)))}}),n.length===0)return K.EMPTY_NODE;const u=pl(n,rI,d=>d.name,id);if(s){const d=pl(n,Ae.getCompare());return new K(u,$e(e),new gn({".priority":d},{".priority":Ae}))}else return new K(u,$e(e),gn.Default)}else{let n=K.EMPTY_NODE;return Ye(r,(s,l)=>{if(on(r,s)&&s.substring(0,1)!=="."){const u=$e(l);(u.isLeafNode()||!u.isEmpty())&&(n=n.updateImmediateChild(s,u))}}),n.updatePriority($e(e))}}sI($e);/**
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
 */class hI extends Ml{constructor(e){super(),this.indexPath_=e,D(!ie(e)&&ee(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),l=this.extractChild(n.node),u=s.compareTo(l);return u===0?xr(e.name,n.name):u}makePost(e,n){const s=$e(e),l=K.EMPTY_NODE.updateChild(this.indexPath_,s);return new te(n,l)}maxPost(){const e=K.EMPTY_NODE.updateChild(this.indexPath_,Fs);return new te(Ir,e)}toString(){return Ns(this.indexPath_,0).join("/")}}/**
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
 */class fI extends Ml{compare(e,n){const s=e.node.compareTo(n.node);return s===0?xr(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return te.MIN}maxPost(){return te.MAX}makePost(e,n){const s=$e(e);return new te(n,s)}toString(){return".value"}}const pI=new fI;/**
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
 */function f_(r){return{type:"value",snapshotNode:r}}function gi(r,e){return{type:"child_added",snapshotNode:e,childName:r}}function Ps(r,e){return{type:"child_removed",snapshotNode:e,childName:r}}function As(r,e,n){return{type:"child_changed",snapshotNode:e,childName:r,oldSnap:n}}function mI(r,e){return{type:"child_moved",snapshotNode:e,childName:r}}/**
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
 */class sd{constructor(e){this.index_=e}updateChild(e,n,s,l,u,d){D(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(n);return f.getChild(l).equals(s.getChild(l))&&f.isEmpty()===s.isEmpty()||(d!=null&&(s.isEmpty()?e.hasChild(n)?d.trackChildChange(Ps(n,f)):D(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?d.trackChildChange(gi(n,s)):d.trackChildChange(As(n,s,f))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Ae,(l,u)=>{n.hasChild(l)||s.trackChildChange(Ps(l,u))}),n.isLeafNode()||n.forEachChild(Ae,(l,u)=>{if(e.hasChild(l)){const d=e.getImmediateChild(l);d.equals(u)||s.trackChildChange(As(l,u,d))}else s.trackChildChange(gi(l,u))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?K.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Os{constructor(e){this.indexedFilter_=new sd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Os.getStartPost_(e),this.endPost_=Os.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,l,u,d){return this.matches(new te(n,s))||(s=K.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,l,u,d)}updateFullNode(e,n,s){n.isLeafNode()&&(n=K.EMPTY_NODE);let l=n.withIndex(this.index_);l=l.updatePriority(K.EMPTY_NODE);const u=this;return n.forEachChild(Ae,(d,f)=>{u.matches(new te(d,f))||(l=l.updateImmediateChild(d,K.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class gI{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Os(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,l,u,d){return this.rangedFilter_.matches(new te(n,s))||(s=K.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,l,u,d):this.fullLimitUpdateChild_(e,n,s,u,d)}updateFullNode(e,n,s){let l;if(n.isLeafNode()||n.isEmpty())l=K.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){l=K.EMPTY_NODE.withIndex(this.index_);let u;this.reverse_?u=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):u=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let d=0;for(;u.hasNext()&&d<this.limit_;){const f=u.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))l=l.updateImmediateChild(f.name,f.node),d++;else break;else continue}}else{l=n.withIndex(this.index_),l=l.updatePriority(K.EMPTY_NODE);let u;this.reverse_?u=l.getReverseIterator(this.index_):u=l.getIterator(this.index_);let d=0;for(;u.hasNext();){const f=u.getNext();d<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?d++:l=l.updateImmediateChild(f.name,K.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,l,u){let d;if(this.reverse_){const v=this.index_.getCompare();d=(S,A)=>v(A,S)}else d=this.index_.getCompare();const f=e;D(f.numChildren()===this.limit_,"");const p=new te(n,s),g=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),w=this.rangedFilter_.matches(p);if(f.hasChild(n)){const v=f.getImmediateChild(n);let S=l.getChildAfterChild(this.index_,g,this.reverse_);for(;S!=null&&(S.name===n||f.hasChild(S.name));)S=l.getChildAfterChild(this.index_,S,this.reverse_);const A=S==null?1:d(S,p);if(w&&!s.isEmpty()&&A>=0)return u!=null&&u.trackChildChange(As(n,s,v)),f.updateImmediateChild(n,s);{u!=null&&u.trackChildChange(Ps(n,v));const B=f.updateImmediateChild(n,K.EMPTY_NODE);return S!=null&&this.rangedFilter_.matches(S)?(u!=null&&u.trackChildChange(gi(S.name,S.node)),B.updateImmediateChild(S.name,S.node)):B}}else return s.isEmpty()?e:w&&d(g,p)>=0?(u!=null&&(u.trackChildChange(Ps(g.name,g.node)),u.trackChildChange(gi(n,s))),f.updateImmediateChild(n,s).updateImmediateChild(g.name,K.EMPTY_NODE)):e}}/**
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
 */class od{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ae}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return D(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return D(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:mi}hasEnd(){return this.endSet_}getIndexEndValue(){return D(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return D(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ir}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return D(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ae}copy(){const e=new od;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function _I(r){return r.loadsAllData()?new sd(r.getIndex()):r.hasLimit()?new gI(r):new Os(r)}function Rm(r){const e={};if(r.isDefault())return e;let n;if(r.index_===Ae?n="$priority":r.index_===pI?n="$value":r.index_===ui?n="$key":(D(r.index_ instanceof hI,"Unrecognized index type!"),n=r.index_.toString()),e.orderBy=He(n),r.startSet_){const s=r.startAfterSet_?"startAfter":"startAt";e[s]=He(r.indexStartValue_),r.startNameSet_&&(e[s]+=","+He(r.indexStartName_))}if(r.endSet_){const s=r.endBeforeSet_?"endBefore":"endAt";e[s]=He(r.indexEndValue_),r.endNameSet_&&(e[s]+=","+He(r.indexEndName_))}return r.limitSet_&&(r.isViewFromLeft()?e.limitToFirst=r.limit_:e.limitToLast=r.limit_),e}function Nm(r){const e={};if(r.startSet_&&(e.sp=r.indexStartValue_,r.startNameSet_&&(e.sn=r.indexStartName_),e.sin=!r.startAfterSet_),r.endSet_&&(e.ep=r.indexEndValue_,r.endNameSet_&&(e.en=r.indexEndName_),e.ein=!r.endBeforeSet_),r.limitSet_){e.l=r.limit_;let n=r.viewFrom_;n===""&&(r.isViewFromLeft()?n="l":n="r"),e.vf=n}return r.index_!==Ae&&(e.i=r.index_.toString()),e}/**
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
 */class ml extends i_{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(D(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,l){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=l,this.log_=bs("p:rest:"),this.listens_={}}listen(e,n,s,l){const u=e._path.toString();this.log_("Listen called for "+u+" "+e._queryIdentifier);const d=ml.getListenId_(e,s),f={};this.listens_[d]=f;const p=Rm(e._queryParams);this.restRequest_(u+".json",p,(g,w)=>{let v=w;if(g===404&&(v=null,g=null),g===null&&this.onDataUpdate_(u,v,!1,s),pi(this.listens_,d)===f){let S;g?g===401?S="permission_denied":S="rest_error:"+g:S="ok",l(S,null)}})}unlisten(e,n){const s=ml.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Rm(e._queryParams),s=e._path.toString(),l=new Ls;return this.restRequest_(s+".json",n,(u,d)=>{let f=d;u===404&&(f=null,u=null),u===null?(this.onDataUpdate_(s,f,!1,null),l.resolve(f)):l.reject(new Error(f))}),l.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([l,u])=>{l&&l.accessToken&&(n.auth=l.accessToken),u&&u.token&&(n.ac=u.token);const d=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ei(n);this.log_("Sending REST request for "+d);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(s&&f.readyState===4){this.log_("REST Response for "+d+" received. status:",f.status,"response:",f.responseText);let p=null;if(f.status>=200&&f.status<300){try{p=Cs(f.responseText)}catch{st("Failed to parse JSON response for "+d+": "+f.responseText)}s(null,p)}else f.status!==401&&f.status!==404&&st("Got unsuccessful REST response for "+d+" Status: "+f.status),s(f.status);s=null}},f.open("GET",d,!0),f.send()})}}/**
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
 */class vI{constructor(){this.rootNode_=K.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function gl(){return{value:null,children:new Map}}function p_(r,e,n){if(ie(e))r.value=n,r.children.clear();else if(r.value!==null)r.value=r.value.updateChild(e,n);else{const s=ee(e);r.children.has(s)||r.children.set(s,gl());const l=r.children.get(s);e=ve(e),p_(l,e,n)}}function Rc(r,e,n){r.value!==null?n(e,r.value):yI(r,(s,l)=>{const u=new pe(e.toString()+"/"+s);Rc(l,u,n)})}function yI(r,e){r.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class wI{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ye(this.last_,(s,l)=>{n[s]=n[s]-l}),this.last_=e,n}}/**
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
 */const Pm=10*1e3,EI=30*1e3,SI=5*60*1e3;class II{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new wI(e);const s=Pm+(EI-Pm)*Math.random();vs(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ye(e,(l,u)=>{u>0&&on(this.statsToReport_,l)&&(n[l]=u,s=!0)}),s&&this.server_.reportStats(n),vs(this.reportStats_.bind(this),Math.floor(Math.random()*2*SI))}}/**
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
 */class _l{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Vt.ACK_USER_WRITE,this.source=ld()}operationForChild(e){if(ie(this.path)){if(this.affectedTree.value!=null)return D(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new pe(e));return new _l(ue(),n,this.revert)}}else return D(ee(this.path)===e,"operationForChild called for unrelated child."),new _l(ve(this.path),this.affectedTree,this.revert)}}/**
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
 */class xs{constructor(e,n){this.source=e,this.path=n,this.type=Vt.LISTEN_COMPLETE}operationForChild(e){return ie(this.path)?new xs(this.source,ue()):new xs(this.source,ve(this.path))}}/**
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
 */class Cr{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Vt.OVERWRITE}operationForChild(e){return ie(this.path)?new Cr(this.source,ue(),this.snap.getImmediateChild(e)):new Cr(this.source,ve(this.path),this.snap)}}/**
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
 */class _i{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Vt.MERGE}operationForChild(e){if(ie(this.path)){const n=this.children.subtree(new pe(e));return n.isEmpty()?null:n.value?new Cr(this.source,ue(),n.value):new _i(this.source,ue(),n)}else return D(ee(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new _i(this.source,ve(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Tr{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ie(e))return this.isFullyInitialized()&&!this.filtered_;const n=ee(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class CI{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function TI(r,e,n,s){const l=[],u=[];return e.forEach(d=>{d.type==="child_changed"&&r.index_.indexedValueChanged(d.oldSnap,d.snapshotNode)&&u.push(mI(d.childName,d.snapshotNode))}),gs(r,l,"child_removed",e,s,n),gs(r,l,"child_added",e,s,n),gs(r,l,"child_moved",u,s,n),gs(r,l,"child_changed",e,s,n),gs(r,l,"value",e,s,n),l}function gs(r,e,n,s,l,u){const d=s.filter(f=>f.type===n);d.sort((f,p)=>RI(r,f,p)),d.forEach(f=>{const p=kI(r,f,u);l.forEach(g=>{g.respondsTo(f.type)&&e.push(g.createEvent(p,r.query_))})})}function kI(r,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,r.index_)),e}function RI(r,e,n){if(e.childName==null||n.childName==null)throw wi("Should only compare child_ events.");const s=new te(e.childName,e.snapshotNode),l=new te(n.childName,n.snapshotNode);return r.index_.compare(s,l)}/**
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
 */function bl(r,e){return{eventCache:r,serverCache:e}}function ys(r,e,n,s){return bl(new Tr(e,n,s),r.serverCache)}function m_(r,e,n,s){return bl(r.eventCache,new Tr(e,n,s))}function Nc(r){return r.eventCache.isFullyInitialized()?r.eventCache.getNode():null}function kr(r){return r.serverCache.isFullyInitialized()?r.serverCache.getNode():null}/**
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
 */let cc;const NI=()=>(cc||(cc=new mt(hS)),cc);class _e{static fromObject(e){let n=new _e(null);return Ye(e,(s,l)=>{n=n.set(new pe(s),l)}),n}constructor(e,n=NI()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ue(),value:this.value};if(ie(e))return null;{const s=ee(e),l=this.children.get(s);if(l!==null){const u=l.findRootMostMatchingPathAndValue(ve(e),n);return u!=null?{path:Pe(new pe(s),u.path),value:u.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ie(e))return this;{const n=ee(e),s=this.children.get(n);return s!==null?s.subtree(ve(e)):new _e(null)}}set(e,n){if(ie(e))return new _e(n,this.children);{const s=ee(e),u=(this.children.get(s)||new _e(null)).set(ve(e),n),d=this.children.insert(s,u);return new _e(this.value,d)}}remove(e){if(ie(e))return this.children.isEmpty()?new _e(null):new _e(null,this.children);{const n=ee(e),s=this.children.get(n);if(s){const l=s.remove(ve(e));let u;return l.isEmpty()?u=this.children.remove(n):u=this.children.insert(n,l),this.value===null&&u.isEmpty()?new _e(null):new _e(this.value,u)}else return this}}get(e){if(ie(e))return this.value;{const n=ee(e),s=this.children.get(n);return s?s.get(ve(e)):null}}setTree(e,n){if(ie(e))return n;{const s=ee(e),u=(this.children.get(s)||new _e(null)).setTree(ve(e),n);let d;return u.isEmpty()?d=this.children.remove(s):d=this.children.insert(s,u),new _e(this.value,d)}}fold(e){return this.fold_(ue(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((l,u)=>{s[l]=u.fold_(Pe(e,l),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ue(),n)}findOnPath_(e,n,s){const l=this.value?s(n,this.value):!1;if(l)return l;if(ie(e))return null;{const u=ee(e),d=this.children.get(u);return d?d.findOnPath_(ve(e),Pe(n,u),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ue(),n)}foreachOnPath_(e,n,s){if(ie(e))return this;{this.value&&s(n,this.value);const l=ee(e),u=this.children.get(l);return u?u.foreachOnPath_(ve(e),Pe(n,l),s):new _e(null)}}foreach(e){this.foreach_(ue(),e)}foreach_(e,n){this.children.inorderTraversal((s,l)=>{l.foreach_(Pe(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class $t{constructor(e){this.writeTree_=e}static empty(){return new $t(new _e(null))}}function ws(r,e,n){if(ie(e))return new $t(new _e(n));{const s=r.writeTree_.findRootMostValueAndPath(e);if(s!=null){const l=s.path;let u=s.value;const d=pt(l,e);return u=u.updateChild(d,n),new $t(r.writeTree_.set(l,u))}else{const l=new _e(n),u=r.writeTree_.setTree(e,l);return new $t(u)}}}function Pc(r,e,n){let s=r;return Ye(n,(l,u)=>{s=ws(s,Pe(e,l),u)}),s}function Am(r,e){if(ie(e))return $t.empty();{const n=r.writeTree_.setTree(e,new _e(null));return new $t(n)}}function Ac(r,e){return Dr(r,e)!=null}function Dr(r,e){const n=r.writeTree_.findRootMostValueAndPath(e);return n!=null?r.writeTree_.get(n.path).getChild(pt(n.path,e)):null}function Om(r){const e=[],n=r.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ae,(s,l)=>{e.push(new te(s,l))}):r.writeTree_.children.inorderTraversal((s,l)=>{l.value!=null&&e.push(new te(s,l.value))}),e}function Jn(r,e){if(ie(e))return r;{const n=Dr(r,e);return n!=null?new $t(new _e(n)):new $t(r.writeTree_.subtree(e))}}function Oc(r){return r.writeTree_.isEmpty()}function vi(r,e){return g_(ue(),r.writeTree_,e)}function g_(r,e,n){if(e.value!=null)return n.updateChild(r,e.value);{let s=null;return e.children.inorderTraversal((l,u)=>{l===".priority"?(D(u.value!==null,"Priority writes must always be leaf nodes"),s=u.value):n=g_(Pe(r,l),u,n)}),!n.getChild(r).isEmpty()&&s!==null&&(n=n.updateChild(Pe(r,".priority"),s)),n}}/**
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
 */function cd(r,e){return w_(e,r)}function PI(r,e,n,s,l){D(s>r.lastWriteId,"Stacking an older write on top of newer ones"),l===void 0&&(l=!0),r.allWrites.push({path:e,snap:n,writeId:s,visible:l}),l&&(r.visibleWrites=ws(r.visibleWrites,e,n)),r.lastWriteId=s}function AI(r,e,n,s){D(s>r.lastWriteId,"Stacking an older merge on top of newer ones"),r.allWrites.push({path:e,children:n,writeId:s,visible:!0}),r.visibleWrites=Pc(r.visibleWrites,e,n),r.lastWriteId=s}function OI(r,e){for(let n=0;n<r.allWrites.length;n++){const s=r.allWrites[n];if(s.writeId===e)return s}return null}function xI(r,e){const n=r.allWrites.findIndex(f=>f.writeId===e);D(n>=0,"removeWrite called with nonexistent writeId.");const s=r.allWrites[n];r.allWrites.splice(n,1);let l=s.visible,u=!1,d=r.allWrites.length-1;for(;l&&d>=0;){const f=r.allWrites[d];f.visible&&(d>=n&&DI(f,s.path)?l=!1:xt(s.path,f.path)&&(u=!0)),d--}if(l){if(u)return LI(r),!0;if(s.snap)r.visibleWrites=Am(r.visibleWrites,s.path);else{const f=s.children;Ye(f,p=>{r.visibleWrites=Am(r.visibleWrites,Pe(s.path,p))})}return!0}else return!1}function DI(r,e){if(r.snap)return xt(r.path,e);for(const n in r.children)if(r.children.hasOwnProperty(n)&&xt(Pe(r.path,n),e))return!0;return!1}function LI(r){r.visibleWrites=__(r.allWrites,MI,ue()),r.allWrites.length>0?r.lastWriteId=r.allWrites[r.allWrites.length-1].writeId:r.lastWriteId=-1}function MI(r){return r.visible}function __(r,e,n){let s=$t.empty();for(let l=0;l<r.length;++l){const u=r[l];if(e(u)){const d=u.path;let f;if(u.snap)xt(n,d)?(f=pt(n,d),s=ws(s,f,u.snap)):xt(d,n)&&(f=pt(d,n),s=ws(s,ue(),u.snap.getChild(f)));else if(u.children){if(xt(n,d))f=pt(n,d),s=Pc(s,f,u.children);else if(xt(d,n))if(f=pt(d,n),ie(f))s=Pc(s,ue(),u.children);else{const p=pi(u.children,ee(f));if(p){const g=p.getChild(ve(f));s=ws(s,ue(),g)}}}else throw wi("WriteRecord should have .snap or .children")}}return s}function v_(r,e,n,s,l){if(!s&&!l){const u=Dr(r.visibleWrites,e);if(u!=null)return u;{const d=Jn(r.visibleWrites,e);if(Oc(d))return n;if(n==null&&!Ac(d,ue()))return null;{const f=n||K.EMPTY_NODE;return vi(d,f)}}}else{const u=Jn(r.visibleWrites,e);if(!l&&Oc(u))return n;if(!l&&n==null&&!Ac(u,ue()))return null;{const d=function(g){return(g.visible||l)&&(!s||!~s.indexOf(g.writeId))&&(xt(g.path,e)||xt(e,g.path))},f=__(r.allWrites,d,e),p=n||K.EMPTY_NODE;return vi(f,p)}}}function bI(r,e,n){let s=K.EMPTY_NODE;const l=Dr(r.visibleWrites,e);if(l)return l.isLeafNode()||l.forEachChild(Ae,(u,d)=>{s=s.updateImmediateChild(u,d)}),s;if(n){const u=Jn(r.visibleWrites,e);return n.forEachChild(Ae,(d,f)=>{const p=vi(Jn(u,new pe(d)),f);s=s.updateImmediateChild(d,p)}),Om(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}else{const u=Jn(r.visibleWrites,e);return Om(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}}function FI(r,e,n,s,l){D(s||l,"Either existingEventSnap or existingServerSnap must exist");const u=Pe(e,n);if(Ac(r.visibleWrites,u))return null;{const d=Jn(r.visibleWrites,u);return Oc(d)?l.getChild(n):vi(d,l.getChild(n))}}function UI(r,e,n,s){const l=Pe(e,n),u=Dr(r.visibleWrites,l);if(u!=null)return u;if(s.isCompleteForChild(n)){const d=Jn(r.visibleWrites,l);return vi(d,s.getNode().getImmediateChild(n))}else return null}function zI(r,e){return Dr(r.visibleWrites,e)}function jI(r,e,n,s,l,u,d){let f;const p=Jn(r.visibleWrites,e),g=Dr(p,ue());if(g!=null)f=g;else if(n!=null)f=vi(p,n);else return[];if(f=f.withIndex(d),!f.isEmpty()&&!f.isLeafNode()){const w=[],v=d.getCompare(),S=u?f.getReverseIteratorFrom(s,d):f.getIteratorFrom(s,d);let A=S.getNext();for(;A&&w.length<l;)v(A,s)!==0&&w.push(A),A=S.getNext();return w}else return[]}function WI(){return{visibleWrites:$t.empty(),allWrites:[],lastWriteId:-1}}function vl(r,e,n,s){return v_(r.writeTree,r.treePath,e,n,s)}function dd(r,e){return bI(r.writeTree,r.treePath,e)}function xm(r,e,n,s){return FI(r.writeTree,r.treePath,e,n,s)}function yl(r,e){return zI(r.writeTree,Pe(r.treePath,e))}function BI(r,e,n,s,l,u){return jI(r.writeTree,r.treePath,e,n,s,l,u)}function hd(r,e,n){return UI(r.writeTree,r.treePath,e,n)}function y_(r,e){return w_(Pe(r.treePath,e),r.writeTree)}function w_(r,e){return{treePath:r,writeTree:e}}/**
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
 */class VI{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;D(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),D(s!==".priority","Only non-priority child changes can be tracked.");const l=this.changeMap.get(s);if(l){const u=l.type;if(n==="child_added"&&u==="child_removed")this.changeMap.set(s,As(s,e.snapshotNode,l.snapshotNode));else if(n==="child_removed"&&u==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&u==="child_changed")this.changeMap.set(s,Ps(s,l.oldSnap));else if(n==="child_changed"&&u==="child_added")this.changeMap.set(s,gi(s,e.snapshotNode));else if(n==="child_changed"&&u==="child_changed")this.changeMap.set(s,As(s,e.snapshotNode,l.oldSnap));else throw wi("Illegal combination of changes: "+e+" occurred after "+l)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class $I{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const E_=new $I;class fd{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Tr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return hd(this.writes_,e,s)}}getChildAfterChild(e,n,s){const l=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:kr(this.viewCache_),u=BI(this.writes_,l,n,1,s,e);return u.length===0?null:u[0]}}/**
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
 */function HI(r){return{filter:r}}function qI(r,e){D(e.eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),D(e.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed")}function GI(r,e,n,s,l){const u=new VI;let d,f;if(n.type===Vt.OVERWRITE){const g=n;g.source.fromUser?d=xc(r,e,g.path,g.snap,s,l,u):(D(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered()&&!ie(g.path),d=wl(r,e,g.path,g.snap,s,l,f,u))}else if(n.type===Vt.MERGE){const g=n;g.source.fromUser?d=QI(r,e,g.path,g.children,s,l,u):(D(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered(),d=Dc(r,e,g.path,g.children,s,l,f,u))}else if(n.type===Vt.ACK_USER_WRITE){const g=n;g.revert?d=JI(r,e,g.path,s,l,u):d=YI(r,e,g.path,g.affectedTree,s,l,u)}else if(n.type===Vt.LISTEN_COMPLETE)d=XI(r,e,n.path,s,u);else throw wi("Unknown operation type: "+n.type);const p=u.getChanges();return KI(e,d,p),{viewCache:d,changes:p}}function KI(r,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const l=s.getNode().isLeafNode()||s.getNode().isEmpty(),u=Nc(r);(n.length>0||!r.eventCache.isFullyInitialized()||l&&!s.getNode().equals(u)||!s.getNode().getPriority().equals(u.getPriority()))&&n.push(f_(Nc(e)))}}function S_(r,e,n,s,l,u){const d=e.eventCache;if(yl(s,n)!=null)return e;{let f,p;if(ie(n))if(D(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=kr(e),w=g instanceof K?g:K.EMPTY_NODE,v=dd(s,w);f=r.filter.updateFullNode(e.eventCache.getNode(),v,u)}else{const g=vl(s,kr(e));f=r.filter.updateFullNode(e.eventCache.getNode(),g,u)}else{const g=ee(n);if(g===".priority"){D(er(n)===1,"Can't have a priority with additional path components");const w=d.getNode();p=e.serverCache.getNode();const v=xm(s,n,w,p);v!=null?f=r.filter.updatePriority(w,v):f=d.getNode()}else{const w=ve(n);let v;if(d.isCompleteForChild(g)){p=e.serverCache.getNode();const S=xm(s,n,d.getNode(),p);S!=null?v=d.getNode().getImmediateChild(g).updateChild(w,S):v=d.getNode().getImmediateChild(g)}else v=hd(s,g,e.serverCache);v!=null?f=r.filter.updateChild(d.getNode(),g,v,w,l,u):f=d.getNode()}}return ys(e,f,d.isFullyInitialized()||ie(n),r.filter.filtersNodes())}}function wl(r,e,n,s,l,u,d,f){const p=e.serverCache;let g;const w=d?r.filter:r.filter.getIndexedFilter();if(ie(n))g=w.updateFullNode(p.getNode(),s,null);else if(w.filtersNodes()&&!p.isFiltered()){const A=p.getNode().updateChild(n,s);g=w.updateFullNode(p.getNode(),A,null)}else{const A=ee(n);if(!p.isCompleteForPath(n)&&er(n)>1)return e;const L=ve(n),q=p.getNode().getImmediateChild(A).updateChild(L,s);A===".priority"?g=w.updatePriority(p.getNode(),q):g=w.updateChild(p.getNode(),A,q,L,E_,null)}const v=m_(e,g,p.isFullyInitialized()||ie(n),w.filtersNodes()),S=new fd(l,v,u);return S_(r,v,n,l,S,f)}function xc(r,e,n,s,l,u,d){const f=e.eventCache;let p,g;const w=new fd(l,e,u);if(ie(n))g=r.filter.updateFullNode(e.eventCache.getNode(),s,d),p=ys(e,g,!0,r.filter.filtersNodes());else{const v=ee(n);if(v===".priority")g=r.filter.updatePriority(e.eventCache.getNode(),s),p=ys(e,g,f.isFullyInitialized(),f.isFiltered());else{const S=ve(n),A=f.getNode().getImmediateChild(v);let L;if(ie(S))L=s;else{const B=w.getCompleteChild(v);B!=null?td(S)===".priority"&&B.getChild(o_(S)).isEmpty()?L=B:L=B.updateChild(S,s):L=K.EMPTY_NODE}if(A.equals(L))p=e;else{const B=r.filter.updateChild(f.getNode(),v,L,S,w,d);p=ys(e,B,f.isFullyInitialized(),r.filter.filtersNodes())}}}return p}function Dm(r,e){return r.eventCache.isCompleteForChild(e)}function QI(r,e,n,s,l,u,d){let f=e;return s.foreach((p,g)=>{const w=Pe(n,p);Dm(e,ee(w))&&(f=xc(r,f,w,g,l,u,d))}),s.foreach((p,g)=>{const w=Pe(n,p);Dm(e,ee(w))||(f=xc(r,f,w,g,l,u,d))}),f}function Lm(r,e,n){return n.foreach((s,l)=>{e=e.updateChild(s,l)}),e}function Dc(r,e,n,s,l,u,d,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;ie(n)?g=s:g=new _e(null).setTree(n,s);const w=e.serverCache.getNode();return g.children.inorderTraversal((v,S)=>{if(w.hasChild(v)){const A=e.serverCache.getNode().getImmediateChild(v),L=Lm(r,A,S);p=wl(r,p,new pe(v),L,l,u,d,f)}}),g.children.inorderTraversal((v,S)=>{const A=!e.serverCache.isCompleteForChild(v)&&S.value===null;if(!w.hasChild(v)&&!A){const L=e.serverCache.getNode().getImmediateChild(v),B=Lm(r,L,S);p=wl(r,p,new pe(v),B,l,u,d,f)}}),p}function YI(r,e,n,s,l,u,d){if(yl(l,n)!=null)return e;const f=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(ie(n)&&p.isFullyInitialized()||p.isCompleteForPath(n))return wl(r,e,n,p.getNode().getChild(n),l,u,f,d);if(ie(n)){let g=new _e(null);return p.getNode().forEachChild(ui,(w,v)=>{g=g.set(new pe(w),v)}),Dc(r,e,n,g,l,u,f,d)}else return e}else{let g=new _e(null);return s.foreach((w,v)=>{const S=Pe(n,w);p.isCompleteForPath(S)&&(g=g.set(w,p.getNode().getChild(S)))}),Dc(r,e,n,g,l,u,f,d)}}function XI(r,e,n,s,l){const u=e.serverCache,d=m_(e,u.getNode(),u.isFullyInitialized()||ie(n),u.isFiltered());return S_(r,d,n,s,E_,l)}function JI(r,e,n,s,l,u){let d;if(yl(s,n)!=null)return e;{const f=new fd(s,e,l),p=e.eventCache.getNode();let g;if(ie(n)||ee(n)===".priority"){let w;if(e.serverCache.isFullyInitialized())w=vl(s,kr(e));else{const v=e.serverCache.getNode();D(v instanceof K,"serverChildren would be complete if leaf node"),w=dd(s,v)}w=w,g=r.filter.updateFullNode(p,w,u)}else{const w=ee(n);let v=hd(s,w,e.serverCache);v==null&&e.serverCache.isCompleteForChild(w)&&(v=p.getImmediateChild(w)),v!=null?g=r.filter.updateChild(p,w,v,ve(n),f,u):e.eventCache.getNode().hasChild(w)?g=r.filter.updateChild(p,w,K.EMPTY_NODE,ve(n),f,u):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(d=vl(s,kr(e)),d.isLeafNode()&&(g=r.filter.updateFullNode(g,d,u)))}return d=e.serverCache.isFullyInitialized()||yl(s,ue())!=null,ys(e,g,d,r.filter.filtersNodes())}}/**
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
 */class ZI{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,l=new sd(s.getIndex()),u=_I(s);this.processor_=HI(u);const d=n.serverCache,f=n.eventCache,p=l.updateFullNode(K.EMPTY_NODE,d.getNode(),null),g=u.updateFullNode(K.EMPTY_NODE,f.getNode(),null),w=new Tr(p,d.isFullyInitialized(),l.filtersNodes()),v=new Tr(g,f.isFullyInitialized(),u.filtersNodes());this.viewCache_=bl(v,w),this.eventGenerator_=new CI(this.query_)}get query(){return this.query_}}function eC(r){return r.viewCache_.serverCache.getNode()}function tC(r,e){const n=kr(r.viewCache_);return n&&(r.query._queryParams.loadsAllData()||!ie(e)&&!n.getImmediateChild(ee(e)).isEmpty())?n.getChild(e):null}function Mm(r){return r.eventRegistrations_.length===0}function nC(r,e){r.eventRegistrations_.push(e)}function bm(r,e,n){const s=[];if(n){D(e==null,"A cancel should cancel all event registrations.");const l=r.query._path;r.eventRegistrations_.forEach(u=>{const d=u.createCancelEvent(n,l);d&&s.push(d)})}if(e){let l=[];for(let u=0;u<r.eventRegistrations_.length;++u){const d=r.eventRegistrations_[u];if(!d.matches(e))l.push(d);else if(e.hasAnyCallback()){l=l.concat(r.eventRegistrations_.slice(u+1));break}}r.eventRegistrations_=l}else r.eventRegistrations_=[];return s}function Fm(r,e,n,s){e.type===Vt.MERGE&&e.source.queryId!==null&&(D(kr(r.viewCache_),"We should always have a full cache before handling merges"),D(Nc(r.viewCache_),"Missing event cache, even though we have a server cache"));const l=r.viewCache_,u=GI(r.processor_,l,e,n,s);return qI(r.processor_,u.viewCache),D(u.viewCache.serverCache.isFullyInitialized()||!l.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),r.viewCache_=u.viewCache,I_(r,u.changes,u.viewCache.eventCache.getNode(),null)}function rC(r,e){const n=r.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ae,(u,d)=>{s.push(gi(u,d))}),n.isFullyInitialized()&&s.push(f_(n.getNode())),I_(r,s,n.getNode(),e)}function I_(r,e,n,s){const l=s?[s]:r.eventRegistrations_;return TI(r.eventGenerator_,e,n,l)}/**
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
 */let El;class iC{constructor(){this.views=new Map}}function sC(r){D(!El,"__referenceConstructor has already been defined"),El=r}function oC(){return D(El,"Reference.ts has not been loaded"),El}function lC(r){return r.views.size===0}function pd(r,e,n,s){const l=e.source.queryId;if(l!==null){const u=r.views.get(l);return D(u!=null,"SyncTree gave us an op for an invalid query."),Fm(u,e,n,s)}else{let u=[];for(const d of r.views.values())u=u.concat(Fm(d,e,n,s));return u}}function aC(r,e,n,s,l){const u=e._queryIdentifier,d=r.views.get(u);if(!d){let f=vl(n,l?s:null),p=!1;f?p=!0:s instanceof K?(f=dd(n,s),p=!1):(f=K.EMPTY_NODE,p=!1);const g=bl(new Tr(f,p,!1),new Tr(s,l,!1));return new ZI(e,g)}return d}function uC(r,e,n,s,l,u){const d=aC(r,e,s,l,u);return r.views.has(e._queryIdentifier)||r.views.set(e._queryIdentifier,d),nC(d,n),rC(d,n)}function cC(r,e,n,s){const l=e._queryIdentifier,u=[];let d=[];const f=tr(r);if(l==="default")for(const[p,g]of r.views.entries())d=d.concat(bm(g,n,s)),Mm(g)&&(r.views.delete(p),g.query._queryParams.loadsAllData()||u.push(g.query));else{const p=r.views.get(l);p&&(d=d.concat(bm(p,n,s)),Mm(p)&&(r.views.delete(l),p.query._queryParams.loadsAllData()||u.push(p.query)))}return f&&!tr(r)&&u.push(new(oC())(e._repo,e._path)),{removed:u,events:d}}function C_(r){const e=[];for(const n of r.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function ci(r,e){let n=null;for(const s of r.views.values())n=n||tC(s,e);return n}function T_(r,e){if(e._queryParams.loadsAllData())return Fl(r);{const s=e._queryIdentifier;return r.views.get(s)}}function k_(r,e){return T_(r,e)!=null}function tr(r){return Fl(r)!=null}function Fl(r){for(const e of r.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Sl;function dC(r){D(!Sl,"__referenceConstructor has already been defined"),Sl=r}function hC(){return D(Sl,"Reference.ts has not been loaded"),Sl}let fC=1;class Um{constructor(e){this.listenProvider_=e,this.syncPointTree_=new _e(null),this.pendingWriteTree_=WI(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function R_(r,e,n,s,l){return PI(r.pendingWriteTree_,e,n,s,l),l?Ci(r,new Cr(ld(),e,n)):[]}function pC(r,e,n,s){AI(r.pendingWriteTree_,e,n,s);const l=_e.fromObject(n);return Ci(r,new _i(ld(),e,l))}function Qn(r,e,n=!1){const s=OI(r.pendingWriteTree_,e);if(xI(r.pendingWriteTree_,e)){let u=new _e(null);return s.snap!=null?u=u.set(ue(),!0):Ye(s.children,d=>{u=u.set(new pe(d),!0)}),Ci(r,new _l(s.path,u,n))}else return[]}function Ul(r,e,n){return Ci(r,new Cr(ad(),e,n))}function mC(r,e,n){const s=_e.fromObject(n);return Ci(r,new _i(ad(),e,s))}function gC(r,e){return Ci(r,new xs(ad(),e))}function _C(r,e,n){const s=gd(r,n);if(s){const l=_d(s),u=l.path,d=l.queryId,f=pt(u,e),p=new xs(ud(d),f);return vd(r,u,p)}else return[]}function Lc(r,e,n,s,l=!1){const u=e._path,d=r.syncPointTree_.get(u);let f=[];if(d&&(e._queryIdentifier==="default"||k_(d,e))){const p=cC(d,e,n,s);lC(d)&&(r.syncPointTree_=r.syncPointTree_.remove(u));const g=p.removed;if(f=p.events,!l){const w=g.findIndex(S=>S._queryParams.loadsAllData())!==-1,v=r.syncPointTree_.findOnPath(u,(S,A)=>tr(A));if(w&&!v){const S=r.syncPointTree_.subtree(u);if(!S.isEmpty()){const A=wC(S);for(let L=0;L<A.length;++L){const B=A[L],q=B.query,Oe=A_(r,B);r.listenProvider_.startListening(Es(q),Il(r,q),Oe.hashFn,Oe.onComplete)}}}!v&&g.length>0&&!s&&(w?r.listenProvider_.stopListening(Es(e),null):g.forEach(S=>{const A=r.queryToTagMap.get(zl(S));r.listenProvider_.stopListening(Es(S),A)}))}EC(r,g)}return f}function vC(r,e,n,s){const l=gd(r,s);if(l!=null){const u=_d(l),d=u.path,f=u.queryId,p=pt(d,e),g=new Cr(ud(f),p,n);return vd(r,d,g)}else return[]}function yC(r,e,n,s){const l=gd(r,s);if(l){const u=_d(l),d=u.path,f=u.queryId,p=pt(d,e),g=_e.fromObject(n),w=new _i(ud(f),p,g);return vd(r,d,w)}else return[]}function zm(r,e,n,s=!1){const l=e._path;let u=null,d=!1;r.syncPointTree_.foreachOnPath(l,(S,A)=>{const L=pt(S,l);u=u||ci(A,L),d=d||tr(A)});let f=r.syncPointTree_.get(l);f?(d=d||tr(f),u=u||ci(f,ue())):(f=new iC,r.syncPointTree_=r.syncPointTree_.set(l,f));let p;u!=null?p=!0:(p=!1,u=K.EMPTY_NODE,r.syncPointTree_.subtree(l).foreachChild((A,L)=>{const B=ci(L,ue());B&&(u=u.updateImmediateChild(A,B))}));const g=k_(f,e);if(!g&&!e._queryParams.loadsAllData()){const S=zl(e);D(!r.queryToTagMap.has(S),"View does not exist, but we have a tag");const A=SC();r.queryToTagMap.set(S,A),r.tagToQueryMap.set(A,S)}const w=cd(r.pendingWriteTree_,l);let v=uC(f,e,n,w,u,p);if(!g&&!d&&!s){const S=T_(f,e);v=v.concat(IC(r,e,S))}return v}function md(r,e,n){const l=r.pendingWriteTree_,u=r.syncPointTree_.findOnPath(e,(d,f)=>{const p=pt(d,e),g=ci(f,p);if(g)return g});return v_(l,e,u,n,!0)}function Ci(r,e){return N_(e,r.syncPointTree_,null,cd(r.pendingWriteTree_,ue()))}function N_(r,e,n,s){if(ie(r.path))return P_(r,e,n,s);{const l=e.get(ue());n==null&&l!=null&&(n=ci(l,ue()));let u=[];const d=ee(r.path),f=r.operationForChild(d),p=e.children.get(d);if(p&&f){const g=n?n.getImmediateChild(d):null,w=y_(s,d);u=u.concat(N_(f,p,g,w))}return l&&(u=u.concat(pd(l,r,s,n))),u}}function P_(r,e,n,s){const l=e.get(ue());n==null&&l!=null&&(n=ci(l,ue()));let u=[];return e.children.inorderTraversal((d,f)=>{const p=n?n.getImmediateChild(d):null,g=y_(s,d),w=r.operationForChild(d);w&&(u=u.concat(P_(w,f,p,g)))}),l&&(u=u.concat(pd(l,r,s,n))),u}function A_(r,e){const n=e.query,s=Il(r,n);return{hashFn:()=>(eC(e)||K.EMPTY_NODE).hash(),onComplete:l=>{if(l==="ok")return s?_C(r,n._path,s):gC(r,n._path);{const u=mS(l,n);return Lc(r,n,null,u)}}}}function Il(r,e){const n=zl(e);return r.queryToTagMap.get(n)}function zl(r){return r._path.toString()+"$"+r._queryIdentifier}function gd(r,e){return r.tagToQueryMap.get(e)}function _d(r){const e=r.indexOf("$");return D(e!==-1&&e<r.length-1,"Bad queryKey."),{queryId:r.substr(e+1),path:new pe(r.substr(0,e))}}function vd(r,e,n){const s=r.syncPointTree_.get(e);D(s,"Missing sync point for query tag that we're tracking");const l=cd(r.pendingWriteTree_,e);return pd(s,n,l,null)}function wC(r){return r.fold((e,n,s)=>{if(n&&tr(n))return[Fl(n)];{let l=[];return n&&(l=C_(n)),Ye(s,(u,d)=>{l=l.concat(d)}),l}})}function Es(r){return r._queryParams.loadsAllData()&&!r._queryParams.isDefault()?new(hC())(r._repo,r._path):r}function EC(r,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const l=zl(s),u=r.queryToTagMap.get(l);r.queryToTagMap.delete(l),r.tagToQueryMap.delete(u)}}}function SC(){return fC++}function IC(r,e,n){const s=e._path,l=Il(r,e),u=A_(r,n),d=r.listenProvider_.startListening(Es(e),l,u.hashFn,u.onComplete),f=r.syncPointTree_.subtree(s);if(l)D(!tr(f.value),"If we're adding a query, it shouldn't be shadowed");else{const p=f.fold((g,w,v)=>{if(!ie(g)&&w&&tr(w))return[Fl(w).query];{let S=[];return w&&(S=S.concat(C_(w).map(A=>A.query))),Ye(v,(A,L)=>{S=S.concat(L)}),S}});for(let g=0;g<p.length;++g){const w=p[g];r.listenProvider_.stopListening(Es(w),Il(r,w))}}return d}/**
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
 */class yd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new yd(n)}node(){return this.node_}}class wd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Pe(this.path_,e);return new wd(this.syncTree_,n)}node(){return md(this.syncTree_,this.path_)}}const CC=function(r){return r=r||{},r.timestamp=r.timestamp||new Date().getTime(),r},jm=function(r,e,n){if(!r||typeof r!="object")return r;if(D(".sv"in r,"Unexpected leaf node or priority contents"),typeof r[".sv"]=="string")return TC(r[".sv"],e,n);if(typeof r[".sv"]=="object")return kC(r[".sv"],e);D(!1,"Unexpected server value: "+JSON.stringify(r,null,2))},TC=function(r,e,n){switch(r){case"timestamp":return n.timestamp;default:D(!1,"Unexpected server value: "+r)}},kC=function(r,e,n){r.hasOwnProperty("increment")||D(!1,"Unexpected server value: "+JSON.stringify(r,null,2));const s=r.increment;typeof s!="number"&&D(!1,"Unexpected increment value: "+s);const l=e.node();if(D(l!==null&&typeof l<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!l.isLeafNode())return s;const d=l.getValue();return typeof d!="number"?s:d+s},O_=function(r,e,n,s){return Ed(e,new wd(n,r),s)},x_=function(r,e,n){return Ed(r,new yd(e),n)};function Ed(r,e,n){const s=r.getPriority().val(),l=jm(s,e.getImmediateChild(".priority"),n);let u;if(r.isLeafNode()){const d=r,f=jm(d.getValue(),e,n);return f!==d.getValue()||l!==d.getPriority().val()?new Be(f,$e(l)):r}else{const d=r;return u=d,l!==d.getPriority().val()&&(u=u.updatePriority(new Be(l))),d.forEachChild(Ae,(f,p)=>{const g=Ed(p,e.getImmediateChild(f),n);g!==p&&(u=u.updateImmediateChild(f,g))}),u}}/**
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
 */class Sd{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Id(r,e){let n=e instanceof pe?e:new pe(e),s=r,l=ee(n);for(;l!==null;){const u=pi(s.node.children,l)||{children:{},childCount:0};s=new Sd(l,s,u),n=ve(n),l=ee(n)}return s}function Ti(r){return r.node.value}function D_(r,e){r.node.value=e,Mc(r)}function L_(r){return r.node.childCount>0}function RC(r){return Ti(r)===void 0&&!L_(r)}function jl(r,e){Ye(r.node.children,(n,s)=>{e(new Sd(n,r,s))})}function M_(r,e,n,s){n&&!s&&e(r),jl(r,l=>{M_(l,e,!0,s)}),n&&s&&e(r)}function NC(r,e,n){let s=r.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Us(r){return new pe(r.parent===null?r.name:Us(r.parent)+"/"+r.name)}function Mc(r){r.parent!==null&&PC(r.parent,r.name,r)}function PC(r,e,n){const s=RC(n),l=on(r.node.children,e);s&&l?(delete r.node.children[e],r.node.childCount--,Mc(r)):!s&&!l&&(r.node.children[e]=n.node,r.node.childCount++,Mc(r))}/**
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
 */const AC=/[\[\].#$\/\u0000-\u001F\u007F]/,OC=/[\[\].#$\u0000-\u001F\u007F]/,dc=10*1024*1024,Cd=function(r){return typeof r=="string"&&r.length!==0&&!AC.test(r)},b_=function(r){return typeof r=="string"&&r.length!==0&&!OC.test(r)},xC=function(r){return r&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),b_(r)},DC=function(r){return r===null||typeof r=="string"||typeof r=="number"&&!Yc(r)||r&&typeof r=="object"&&on(r,".sv")},LC=function(r,e,n,s){Wl(xl(r,"value"),e,n)},Wl=function(r,e,n){const s=n instanceof pe?new QS(n,r):n;if(e===void 0)throw new Error(r+"contains undefined "+wr(s));if(typeof e=="function")throw new Error(r+"contains a function "+wr(s)+" with contents = "+e.toString());if(Yc(e))throw new Error(r+"contains "+e.toString()+" "+wr(s));if(typeof e=="string"&&e.length>dc/3&&Dl(e)>dc)throw new Error(r+"contains a string greater than "+dc+" utf8 bytes "+wr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let l=!1,u=!1;if(Ye(e,(d,f)=>{if(d===".value")l=!0;else if(d!==".priority"&&d!==".sv"&&(u=!0,!Cd(d)))throw new Error(r+" contains an invalid key ("+d+") "+wr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);YS(s,d),Wl(r,f,s),XS(s)}),l&&u)throw new Error(r+' contains ".value" child '+wr(s)+" in addition to actual children.")}},MC=function(r,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const u=Ns(s);for(let d=0;d<u.length;d++)if(!(u[d]===".priority"&&d===u.length-1)){if(!Cd(u[d]))throw new Error(r+"contains an invalid key ("+u[d]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(KS);let l=null;for(n=0;n<e.length;n++){if(s=e[n],l!==null&&xt(l,s))throw new Error(r+"contains a path "+l.toString()+" that is ancestor of another path "+s.toString());l=s}},bC=function(r,e,n,s){const l=xl(r,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(l+" must be an object containing the children to replace.");const u=[];Ye(e,(d,f)=>{const p=new pe(d);if(Wl(l,f,Pe(n,p)),td(p)===".priority"&&!DC(f))throw new Error(l+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");u.push(p)}),MC(l,u)},F_=function(r,e,n,s){if(!b_(n))throw new Error(xl(r,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},FC=function(r,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),F_(r,e,n)},U_=function(r,e){if(ee(e)===".info")throw new Error(r+" failed = Can't modify data under /.info/")},UC=function(r,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Cd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!xC(n))throw new Error(xl(r,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class zC{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Bl(r,e){let n=null;for(let s=0;s<e.length;s++){const l=e[s],u=l.getPath();n!==null&&!nd(u,n.path)&&(r.eventLists_.push(n),n=null),n===null&&(n={events:[],path:u}),n.events.push(l)}n&&r.eventLists_.push(n)}function z_(r,e,n){Bl(r,n),j_(r,s=>nd(s,e))}function qt(r,e,n){Bl(r,n),j_(r,s=>xt(s,e)||xt(e,s))}function j_(r,e){r.recursionDepth_++;let n=!0;for(let s=0;s<r.eventLists_.length;s++){const l=r.eventLists_[s];if(l){const u=l.path;e(u)?(jC(r.eventLists_[s]),r.eventLists_[s]=null):n=!1}}n&&(r.eventLists_=[]),r.recursionDepth_--}function jC(r){for(let e=0;e<r.events.length;e++){const n=r.events[e];if(n!==null){r.events[e]=null;const s=n.getEventRunner();_s&&Qe("event: "+n.toString()),Ii(s)}}}/**
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
 */const WC="repo_interrupt",BC=25;class VC{constructor(e,n,s,l){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=l,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new zC,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=gl(),this.transactionQueueTree_=new Sd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function $C(r,e,n){if(r.stats_=Zc(r.repoInfo_),r.forceRestClient_||yS())r.server_=new ml(r.repoInfo_,(s,l,u,d)=>{Wm(r,s,l,u,d)},r.authTokenProvider_,r.appCheckProvider_),setTimeout(()=>Bm(r,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{He(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}r.persistentConnection_=new wn(r.repoInfo_,e,(s,l,u,d)=>{Wm(r,s,l,u,d)},s=>{Bm(r,s)},s=>{qC(r,s)},r.authTokenProvider_,r.appCheckProvider_,n),r.server_=r.persistentConnection_}r.authTokenProvider_.addTokenChangeListener(s=>{r.server_.refreshAuthToken(s)}),r.appCheckProvider_.addTokenChangeListener(s=>{r.server_.refreshAppCheckToken(s.token)}),r.statsReporter_=CS(r.repoInfo_,()=>new II(r.stats_,r.server_)),r.infoData_=new vI,r.infoSyncTree_=new Um({startListening:(s,l,u,d)=>{let f=[];const p=r.infoData_.getNode(s._path);return p.isEmpty()||(f=Ul(r.infoSyncTree_,s._path,p),setTimeout(()=>{d("ok")},0)),f},stopListening:()=>{}}),Td(r,"connected",!1),r.serverSyncTree_=new Um({startListening:(s,l,u,d)=>(r.server_.listen(s,u,l,(f,p)=>{const g=d(f,p);qt(r.eventQueue_,s._path,g)}),[]),stopListening:(s,l)=>{r.server_.unlisten(s,l)}})}function HC(r){const n=r.infoData_.getNode(new pe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Vl(r){return CC({timestamp:HC(r)})}function Wm(r,e,n,s,l){r.dataUpdateCount++;const u=new pe(e);n=r.interceptServerDataCallback_?r.interceptServerDataCallback_(e,n):n;let d=[];if(l)if(s){const p=cl(n,g=>$e(g));d=yC(r.serverSyncTree_,u,p,l)}else{const p=$e(n);d=vC(r.serverSyncTree_,u,p,l)}else if(s){const p=cl(n,g=>$e(g));d=mC(r.serverSyncTree_,u,p)}else{const p=$e(n);d=Ul(r.serverSyncTree_,u,p)}let f=u;d.length>0&&(f=yi(r,u)),qt(r.eventQueue_,f,d)}function Bm(r,e){Td(r,"connected",e),e===!1&&QC(r)}function qC(r,e){Ye(e,(n,s)=>{Td(r,n,s)})}function Td(r,e,n){const s=new pe("/.info/"+e),l=$e(n);r.infoData_.updateSnapshot(s,l);const u=Ul(r.infoSyncTree_,s,l);qt(r.eventQueue_,s,u)}function kd(r){return r.nextWriteId_++}function GC(r,e,n,s,l){$l(r,"set",{path:e.toString(),value:n,priority:s});const u=Vl(r),d=$e(n,s),f=md(r.serverSyncTree_,e),p=x_(d,f,u),g=kd(r),w=R_(r.serverSyncTree_,e,p,g,!0);Bl(r.eventQueue_,w),r.server_.put(e.toString(),d.val(!0),(S,A)=>{const L=S==="ok";L||st("set at "+e+" failed: "+S);const B=Qn(r.serverSyncTree_,g,!L);qt(r.eventQueue_,e,B),bc(r,l,S,A)});const v=Nd(r,e);yi(r,v),qt(r.eventQueue_,v,[])}function KC(r,e,n,s){$l(r,"update",{path:e.toString(),value:n});let l=!0;const u=Vl(r),d={};if(Ye(n,(f,p)=>{l=!1,d[f]=O_(Pe(e,f),$e(p),r.serverSyncTree_,u)}),l)Qe("update() called with empty data.  Don't do anything."),bc(r,s,"ok",void 0);else{const f=kd(r),p=pC(r.serverSyncTree_,e,d,f);Bl(r.eventQueue_,p),r.server_.merge(e.toString(),n,(g,w)=>{const v=g==="ok";v||st("update at "+e+" failed: "+g);const S=Qn(r.serverSyncTree_,f,!v),A=S.length>0?yi(r,e):e;qt(r.eventQueue_,A,S),bc(r,s,g,w)}),Ye(n,g=>{const w=Nd(r,Pe(e,g));yi(r,w)}),qt(r.eventQueue_,e,[])}}function QC(r){$l(r,"onDisconnectEvents");const e=Vl(r),n=gl();Rc(r.onDisconnect_,ue(),(l,u)=>{const d=O_(l,u,r.serverSyncTree_,e);p_(n,l,d)});let s=[];Rc(n,ue(),(l,u)=>{s=s.concat(Ul(r.serverSyncTree_,l,u));const d=Nd(r,l);yi(r,d)}),r.onDisconnect_=gl(),qt(r.eventQueue_,ue(),s)}function YC(r,e,n){let s;ee(e._path)===".info"?s=zm(r.infoSyncTree_,e,n):s=zm(r.serverSyncTree_,e,n),z_(r.eventQueue_,e._path,s)}function XC(r,e,n){let s;ee(e._path)===".info"?s=Lc(r.infoSyncTree_,e,n):s=Lc(r.serverSyncTree_,e,n),z_(r.eventQueue_,e._path,s)}function JC(r){r.persistentConnection_&&r.persistentConnection_.interrupt(WC)}function $l(r,...e){let n="";r.persistentConnection_&&(n=r.persistentConnection_.id+":"),Qe(n,...e)}function bc(r,e,n,s){e&&Ii(()=>{if(n==="ok")e(null);else{const l=(n||"error").toUpperCase();let u=l;s&&(u+=": "+s);const d=new Error(u);d.code=l,e(d)}})}function W_(r,e,n){return md(r.serverSyncTree_,e,n)||K.EMPTY_NODE}function Rd(r,e=r.transactionQueueTree_){if(e||Hl(r,e),Ti(e)){const n=V_(r,e);D(n.length>0,"Sending zero length transaction queue"),n.every(l=>l.status===0)&&ZC(r,Us(e),n)}else L_(e)&&jl(e,n=>{Rd(r,n)})}function ZC(r,e,n){const s=n.map(g=>g.currentWriteId),l=W_(r,e,s);let u=l;const d=l.hash();for(let g=0;g<n.length;g++){const w=n[g];D(w.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),w.status=1,w.retryCount++;const v=pt(e,w.path);u=u.updateChild(v,w.currentOutputSnapshotRaw)}const f=u.val(!0),p=e;r.server_.put(p.toString(),f,g=>{$l(r,"transaction put response",{path:p.toString(),status:g});let w=[];if(g==="ok"){const v=[];for(let S=0;S<n.length;S++)n[S].status=2,w=w.concat(Qn(r.serverSyncTree_,n[S].currentWriteId)),n[S].onComplete&&v.push(()=>n[S].onComplete(null,!0,n[S].currentOutputSnapshotResolved)),n[S].unwatcher();Hl(r,Id(r.transactionQueueTree_,e)),Rd(r,r.transactionQueueTree_),qt(r.eventQueue_,e,w);for(let S=0;S<v.length;S++)Ii(v[S])}else{if(g==="datastale")for(let v=0;v<n.length;v++)n[v].status===3?n[v].status=4:n[v].status=0;else{st("transaction at "+p.toString()+" failed: "+g);for(let v=0;v<n.length;v++)n[v].status=4,n[v].abortReason=g}yi(r,e)}},d)}function yi(r,e){const n=B_(r,e),s=Us(n),l=V_(r,n);return eT(r,l,s),s}function eT(r,e,n){if(e.length===0)return;const s=[];let l=[];const d=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const p=e[f],g=pt(n,p.path);let w=!1,v;if(D(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)w=!0,v=p.abortReason,l=l.concat(Qn(r.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=BC)w=!0,v="maxretry",l=l.concat(Qn(r.serverSyncTree_,p.currentWriteId,!0));else{const S=W_(r,p.path,d);p.currentInputSnapshot=S;const A=e[f].update(S.val());if(A!==void 0){Wl("transaction failed: Data returned ",A,p.path);let L=$e(A);typeof A=="object"&&A!=null&&on(A,".priority")||(L=L.updatePriority(S.getPriority()));const q=p.currentWriteId,Oe=Vl(r),Ie=x_(L,S,Oe);p.currentOutputSnapshotRaw=L,p.currentOutputSnapshotResolved=Ie,p.currentWriteId=kd(r),d.splice(d.indexOf(q),1),l=l.concat(R_(r.serverSyncTree_,p.path,Ie,p.currentWriteId,p.applyLocally)),l=l.concat(Qn(r.serverSyncTree_,q,!0))}else w=!0,v="nodata",l=l.concat(Qn(r.serverSyncTree_,p.currentWriteId,!0))}qt(r.eventQueue_,n,l),l=[],w&&(e[f].status=2,function(S){setTimeout(S,Math.floor(0))}(e[f].unwatcher),e[f].onComplete&&(v==="nodata"?s.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):s.push(()=>e[f].onComplete(new Error(v),!1,null))))}Hl(r,r.transactionQueueTree_);for(let f=0;f<s.length;f++)Ii(s[f]);Rd(r,r.transactionQueueTree_)}function B_(r,e){let n,s=r.transactionQueueTree_;for(n=ee(e);n!==null&&Ti(s)===void 0;)s=Id(s,n),e=ve(e),n=ee(e);return s}function V_(r,e){const n=[];return $_(r,e,n),n.sort((s,l)=>s.order-l.order),n}function $_(r,e,n){const s=Ti(e);if(s)for(let l=0;l<s.length;l++)n.push(s[l]);jl(e,l=>{$_(r,l,n)})}function Hl(r,e){const n=Ti(e);if(n){let s=0;for(let l=0;l<n.length;l++)n[l].status!==2&&(n[s]=n[l],s++);n.length=s,D_(e,n.length>0?n:void 0)}jl(e,s=>{Hl(r,s)})}function Nd(r,e){const n=Us(B_(r,e)),s=Id(r.transactionQueueTree_,e);return NC(s,l=>{hc(r,l)}),hc(r,s),M_(s,l=>{hc(r,l)}),n}function hc(r,e){const n=Ti(e);if(n){const s=[];let l=[],u=-1;for(let d=0;d<n.length;d++)n[d].status===3||(n[d].status===1?(D(u===d-1,"All SENT items should be at beginning of queue."),u=d,n[d].status=3,n[d].abortReason="set"):(D(n[d].status===0,"Unexpected transaction status in abort"),n[d].unwatcher(),l=l.concat(Qn(r.serverSyncTree_,n[d].currentWriteId,!0)),n[d].onComplete&&s.push(n[d].onComplete.bind(null,new Error("set"),!1,null))));u===-1?D_(e,void 0):n.length=u+1,qt(r.eventQueue_,Us(e),l);for(let d=0;d<s.length;d++)Ii(s[d])}}/**
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
 */function tT(r){let e="";const n=r.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let l=n[s];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch{}e+="/"+l}return e}function nT(r){const e={};r.charAt(0)==="?"&&(r=r.substring(1));for(const n of r.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):st(`Invalid query segment '${n}' in query '${r}'`)}return e}const Vm=function(r,e){const n=rT(r),s=n.namespace;n.domain==="firebase.com"&&Sn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Sn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||cS();const l=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Xg(n.host,n.secure,s,l,e,"",s!==n.subdomain),path:new pe(n.pathString)}},rT=function(r){let e="",n="",s="",l="",u="",d=!0,f="https",p=443;if(typeof r=="string"){let g=r.indexOf("//");g>=0&&(f=r.substring(0,g-1),r=r.substring(g+2));let w=r.indexOf("/");w===-1&&(w=r.length);let v=r.indexOf("?");v===-1&&(v=r.length),e=r.substring(0,Math.min(w,v)),w<v&&(l=tT(r.substring(w,v)));const S=nT(r.substring(Math.min(r.length,v)));g=e.indexOf(":"),g>=0?(d=f==="https"||f==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const A=e.slice(0,g);if(A.toLowerCase()==="localhost")n="localhost";else if(A.split(".").length<=2)n=A;else{const L=e.indexOf(".");s=e.substring(0,L).toLowerCase(),n=e.substring(L+1),u=s}"ns"in S&&(u=S.ns)}return{host:e,port:p,domain:n,subdomain:s,secure:d,scheme:f,pathString:l,namespace:u}};/**
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
 */class iT{constructor(e,n,s,l){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=l}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+He(this.snapshot.exportVal())}}class sT{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class oT{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return D(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Pd{constructor(e,n,s,l){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=l}get key(){return ie(this._path)?null:td(this._path)}get ref(){return new rr(this._repo,this._path)}get _queryIdentifier(){const e=Nm(this._queryParams),n=Xc(e);return n==="{}"?"default":n}get _queryObject(){return Nm(this._queryParams)}isEqual(e){if(e=Tt(e),!(e instanceof Pd))return!1;const n=this._repo===e._repo,s=nd(this._path,e._path),l=this._queryIdentifier===e._queryIdentifier;return n&&s&&l}toJSON(){return this.toString()}toString(){return this._repo.toString()+GS(this._path)}}class rr extends Pd{constructor(e,n){super(e,n,new od,!1)}get parent(){const e=o_(this._path);return e===null?null:new rr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Cl{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new pe(e),s=Fc(this.ref,e);return new Cl(this._node.getChild(n),s,Ae)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,l)=>e(new Cl(l,Fc(this.ref,s),Ae)))}hasChild(e){const n=new pe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ql(r,e){return r=Tt(r),r._checkNotDeleted("ref"),e!==void 0?Fc(r._root,e):r._root}function Fc(r,e){return r=Tt(r),ee(r._path)===null?FC("child","path",e):F_("child","path",e),new rr(r._repo,Pe(r._path,e))}function lT(r){return U_("remove",r._path),H_(r,null)}function H_(r,e){r=Tt(r),U_("set",r._path),LC("set",e,r._path);const n=new Ls;return GC(r._repo,r._path,e,null,n.wrapCallback(()=>{})),n.promise}function aT(r,e){bC("update",e,r._path);const n=new Ls;return KC(r._repo,r._path,e,n.wrapCallback(()=>{})),n.promise}class Ad{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new iT("value",this,new Cl(e.snapshotNode,new rr(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new sT(this,e,n):null}matches(e){return e instanceof Ad?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function uT(r,e,n,s,l){const u=new oT(n,void 0),d=new Ad(u);return YC(r._repo,r,d),()=>XC(r._repo,r,d)}function cT(r,e,n,s){return uT(r,"value",e)}sC(rr);dC(rr);/**
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
 */const dT="FIREBASE_DATABASE_EMULATOR_HOST",Uc={};let hT=!1;function fT(r,e,n,s){r.repoInfo_=new Xg(`${e}:${n}`,!1,r.repoInfo_.namespace,r.repoInfo_.webSocketOnly,r.repoInfo_.nodeAdmin,r.repoInfo_.persistenceKey,r.repoInfo_.includeNamespaceInQueryParams,!0),s&&(r.authTokenProvider_=s)}function pT(r,e,n,s,l){let u=s||r.options.databaseURL;u===void 0&&(r.options.projectId||Sn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Qe("Using default host for project ",r.options.projectId),u=`${r.options.projectId}-default-rtdb.firebaseio.com`);let d=Vm(u,l),f=d.repoInfo,p;typeof process<"u"&&cm&&(p=cm[dT]),p?(u=`http://${p}?ns=${f.namespace}`,d=Vm(u,l),f=d.repoInfo):d.repoInfo.secure;const g=new ES(r.name,r.options,e);UC("Invalid Firebase Database URL",d),ie(d.path)||Sn("Database URL must point to the root of a Firebase Database (not including a child path).");const w=gT(f,r,g,new wS(r.name,n));return new _T(w,r)}function mT(r,e){const n=Uc[e];(!n||n[r.key]!==r)&&Sn(`Database ${e}(${r.repoInfo_}) has already been deleted.`),JC(r),delete n[r.key]}function gT(r,e,n,s){let l=Uc[e.name];l||(l={},Uc[e.name]=l);let u=l[r.toURLString()];return u&&Sn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),u=new VC(r,hT,n,s),l[r.toURLString()]=u,u}class _T{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||($C(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new rr(this._repo,ue())),this._rootInternal}_delete(){return this._rootInternal!==null&&(mT(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Sn("Cannot call "+e+" on a deleted database.")}}function vT(r=Qc(),e){const n=Or(r,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=D0("database");s&&yT(n,...s)}return n}function yT(r,e,n,s={}){r=Tt(r),r._checkNotDeleted("useEmulator"),r._instanceStarted&&Sn("Cannot call useEmulator() after instance has already been initialized.");const l=r._repoInternal;let u;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&Sn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new rl(rl.OWNER);else if(s.mockUserToken){const d=typeof s.mockUserToken=="string"?s.mockUserToken:L0(s.mockUserToken,r.app.options.projectId);u=new rl(d)}fT(l,e,n,u)}/**
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
 */function wT(r){iS(Si),rn(new Ht("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("auth-internal"),u=e.getProvider("app-check-internal");return pT(s,l,u,n)},"PUBLIC").setMultipleInstances(!0)),Dt(dm,hm,r),Dt(dm,hm,"esm2017")}wn.prototype.simpleListen=function(r,e){this.sendRequest("q",{p:r},e)};wn.prototype.echo=function(r,e){this.sendRequest("echo",{d:r},e)};wT();var ET="firebase",ST="11.1.0";/**
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
 */Dt(ET,ST,"app");const q_="@firebase/installations",Od="0.6.11";/**
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
 */const G_=1e4,K_=`w:${Od}`,Q_="FIS_v2",IT="https://firebaseinstallations.googleapis.com/v1",CT=60*60*1e3,TT="installations",kT="Installations";/**
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
 */const RT={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Rr=new Ar(TT,kT,RT);function Y_(r){return r instanceof sn&&r.code.includes("request-failed")}/**
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
 */function X_({projectId:r}){return`${IT}/projects/${r}/installations`}function J_(r){return{token:r.token,requestStatus:2,expiresIn:PT(r.expiresIn),creationTime:Date.now()}}async function Z_(r,e){const s=(await e.json()).error;return Rr.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function ev({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function NT(r,{refreshToken:e}){const n=ev(r);return n.append("Authorization",AT(e)),n}async function tv(r){const e=await r();return e.status>=500&&e.status<600?r():e}function PT(r){return Number(r.replace("s","000"))}function AT(r){return`${Q_} ${r}`}/**
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
 */async function OT({appConfig:r,heartbeatServiceProvider:e},{fid:n}){const s=X_(r),l=ev(r),u=e.getImmediate({optional:!0});if(u){const g=await u.getHeartbeatsHeader();g&&l.append("x-firebase-client",g)}const d={fid:n,authVersion:Q_,appId:r.appId,sdkVersion:K_},f={method:"POST",headers:l,body:JSON.stringify(d)},p=await tv(()=>fetch(s,f));if(p.ok){const g=await p.json();return{fid:g.fid||n,registrationStatus:2,refreshToken:g.refreshToken,authToken:J_(g.authToken)}}else throw await Z_("Create Installation",p)}/**
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
 */function nv(r){return new Promise(e=>{setTimeout(e,r)})}/**
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
 */function xT(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const DT=/^[cdef][\w-]{21}$/,zc="";function LT(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=MT(r);return DT.test(n)?n:zc}catch{return zc}}function MT(r){return xT(r).substr(0,22)}/**
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
 */function Gl(r){return`${r.appName}!${r.appId}`}/**
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
 */const rv=new Map;function iv(r,e){const n=Gl(r);sv(n,e),bT(n,e)}function sv(r,e){const n=rv.get(r);if(n)for(const s of n)s(e)}function bT(r,e){const n=FT();n&&n.postMessage({key:r,fid:e}),UT()}let Sr=null;function FT(){return!Sr&&"BroadcastChannel"in self&&(Sr=new BroadcastChannel("[Firebase] FID Change"),Sr.onmessage=r=>{sv(r.data.key,r.data.fid)}),Sr}function UT(){rv.size===0&&Sr&&(Sr.close(),Sr=null)}/**
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
 */const zT="firebase-installations-database",jT=1,Nr="firebase-installations-store";let fc=null;function xd(){return fc||(fc=Dg(zT,jT,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(Nr)}}})),fc}async function Tl(r,e){const n=Gl(r),l=(await xd()).transaction(Nr,"readwrite"),u=l.objectStore(Nr),d=await u.get(n);return await u.put(e,n),await l.done,(!d||d.fid!==e.fid)&&iv(r,e.fid),e}async function ov(r){const e=Gl(r),s=(await xd()).transaction(Nr,"readwrite");await s.objectStore(Nr).delete(e),await s.done}async function Kl(r,e){const n=Gl(r),l=(await xd()).transaction(Nr,"readwrite"),u=l.objectStore(Nr),d=await u.get(n),f=e(d);return f===void 0?await u.delete(n):await u.put(f,n),await l.done,f&&(!d||d.fid!==f.fid)&&iv(r,f.fid),f}/**
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
 */async function Dd(r){let e;const n=await Kl(r.appConfig,s=>{const l=WT(s),u=BT(r,l);return e=u.registrationPromise,u.installationEntry});return n.fid===zc?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function WT(r){const e=r||{fid:LT(),registrationStatus:0};return lv(e)}function BT(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const l=Promise.reject(Rr.create("app-offline"));return{installationEntry:e,registrationPromise:l}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=VT(r,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:$T(r)}:{installationEntry:e}}async function VT(r,e){try{const n=await OT(r,e);return Tl(r.appConfig,n)}catch(n){throw Y_(n)&&n.customData.serverCode===409?await ov(r.appConfig):await Tl(r.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function $T(r){let e=await $m(r.appConfig);for(;e.registrationStatus===1;)await nv(100),e=await $m(r.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Dd(r);return s||n}return e}function $m(r){return Kl(r,e=>{if(!e)throw Rr.create("installation-not-found");return lv(e)})}function lv(r){return HT(r)?{fid:r.fid,registrationStatus:0}:r}function HT(r){return r.registrationStatus===1&&r.registrationTime+G_<Date.now()}/**
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
 */async function qT({appConfig:r,heartbeatServiceProvider:e},n){const s=GT(r,n),l=NT(r,n),u=e.getImmediate({optional:!0});if(u){const g=await u.getHeartbeatsHeader();g&&l.append("x-firebase-client",g)}const d={installation:{sdkVersion:K_,appId:r.appId}},f={method:"POST",headers:l,body:JSON.stringify(d)},p=await tv(()=>fetch(s,f));if(p.ok){const g=await p.json();return J_(g)}else throw await Z_("Generate Auth Token",p)}function GT(r,{fid:e}){return`${X_(r)}/${e}/authTokens:generate`}/**
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
 */async function Ld(r,e=!1){let n;const s=await Kl(r.appConfig,u=>{if(!av(u))throw Rr.create("not-registered");const d=u.authToken;if(!e&&YT(d))return u;if(d.requestStatus===1)return n=KT(r,e),u;{if(!navigator.onLine)throw Rr.create("app-offline");const f=JT(u);return n=QT(r,f),f}});return n?await n:s.authToken}async function KT(r,e){let n=await Hm(r.appConfig);for(;n.authToken.requestStatus===1;)await nv(100),n=await Hm(r.appConfig);const s=n.authToken;return s.requestStatus===0?Ld(r,e):s}function Hm(r){return Kl(r,e=>{if(!av(e))throw Rr.create("not-registered");const n=e.authToken;return ZT(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function QT(r,e){try{const n=await qT(r,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Tl(r.appConfig,s),n}catch(n){if(Y_(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ov(r.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Tl(r.appConfig,s)}throw n}}function av(r){return r!==void 0&&r.registrationStatus===2}function YT(r){return r.requestStatus===2&&!XT(r)}function XT(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+CT}function JT(r){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:e})}function ZT(r){return r.requestStatus===1&&r.requestTime+G_<Date.now()}/**
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
 */async function ek(r){const e=r,{installationEntry:n,registrationPromise:s}=await Dd(e);return s?s.catch(console.error):Ld(e).catch(console.error),n.fid}/**
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
 */async function tk(r,e=!1){const n=r;return await nk(n),(await Ld(n,e)).token}async function nk(r){const{registrationPromise:e}=await Dd(r);e&&await e}/**
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
 */function rk(r){if(!r||!r.options)throw pc("App Configuration");if(!r.name)throw pc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!r.options[n])throw pc(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function pc(r){return Rr.create("missing-app-config-values",{valueName:r})}/**
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
 */const uv="installations",ik="installations-internal",sk=r=>{const e=r.getProvider("app").getImmediate(),n=rk(e),s=Or(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},ok=r=>{const e=r.getProvider("app").getImmediate(),n=Or(e,uv).getImmediate();return{getId:()=>ek(n),getToken:l=>tk(n,l)}};function lk(){rn(new Ht(uv,sk,"PUBLIC")),rn(new Ht(ik,ok,"PRIVATE"))}lk();Dt(q_,Od);Dt(q_,Od,"esm2017");/**
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
 */const kl="analytics",ak="firebase_id",uk="origin",ck=60*1e3,dk="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Md="https://www.googletagmanager.com/gtag/js";/**
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
 */const gt=new Ll("@firebase/analytics");/**
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
 */const hk={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ct=new Ar("analytics","Analytics",hk);/**
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
 */function fk(r){if(!r.startsWith(Md)){const e=Ct.create("invalid-gtag-resource",{gtagURL:r});return gt.warn(e.message),""}return r}function cv(r){return Promise.all(r.map(e=>e.catch(n=>n)))}function pk(r,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,e)),n}function mk(r,e){const n=pk("firebase-js-sdk-policy",{createScriptURL:fk}),s=document.createElement("script"),l=`${Md}?l=${r}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(l):l,s.async=!0,document.head.appendChild(s)}function gk(r){let e=[];return Array.isArray(window[r])?e=window[r]:window[r]=e,e}async function _k(r,e,n,s,l,u){const d=s[l];try{if(d)await e[d];else{const p=(await cv(n)).find(g=>g.measurementId===l);p&&await e[p.appId]}}catch(f){gt.error(f)}r("config",l,u)}async function vk(r,e,n,s,l){try{let u=[];if(l&&l.send_to){let d=l.send_to;Array.isArray(d)||(d=[d]);const f=await cv(n);for(const p of d){const g=f.find(v=>v.measurementId===p),w=g&&e[g.appId];if(w)u.push(w);else{u=[];break}}}u.length===0&&(u=Object.values(e)),await Promise.all(u),r("event",s,l||{})}catch(u){gt.error(u)}}function yk(r,e,n,s){async function l(u,...d){try{if(u==="event"){const[f,p]=d;await vk(r,e,n,f,p)}else if(u==="config"){const[f,p]=d;await _k(r,e,n,s,f,p)}else if(u==="consent"){const[f,p]=d;r("consent",f,p)}else if(u==="get"){const[f,p,g]=d;r("get",f,p,g)}else if(u==="set"){const[f]=d;r("set",f)}else r(u,...d)}catch(f){gt.error(f)}}return l}function wk(r,e,n,s,l){let u=function(...d){window[s].push(arguments)};return window[l]&&typeof window[l]=="function"&&(u=window[l]),window[l]=yk(u,r,e,n),{gtagCore:u,wrappedGtag:window[l]}}function Ek(r){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Md)&&n.src.includes(r))return n;return null}/**
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
 */const Sk=30,Ik=1e3;class Ck{constructor(e={},n=Ik){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const dv=new Ck;function Tk(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function kk(r){var e;const{appId:n,apiKey:s}=r,l={method:"GET",headers:Tk(s)},u=dk.replace("{app-id}",n),d=await fetch(u,l);if(d.status!==200&&d.status!==304){let f="";try{const p=await d.json();!((e=p.error)===null||e===void 0)&&e.message&&(f=p.error.message)}catch{}throw Ct.create("config-fetch-failed",{httpStatus:d.status,responseMessage:f})}return d.json()}async function Rk(r,e=dv,n){const{appId:s,apiKey:l,measurementId:u}=r.options;if(!s)throw Ct.create("no-app-id");if(!l){if(u)return{measurementId:u,appId:s};throw Ct.create("no-api-key")}const d=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},f=new Ak;return setTimeout(async()=>{f.abort()},ck),hv({appId:s,apiKey:l,measurementId:u},d,f,e)}async function hv(r,{throttleEndTimeMillis:e,backoffCount:n},s,l=dv){var u;const{appId:d,measurementId:f}=r;try{await Nk(s,e)}catch(p){if(f)return gt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:d,measurementId:f};throw p}try{const p=await kk(r);return l.deleteThrottleMetadata(d),p}catch(p){const g=p;if(!Pk(g)){if(l.deleteThrottleMetadata(d),f)return gt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:d,measurementId:f};throw p}const w=Number((u=g==null?void 0:g.customData)===null||u===void 0?void 0:u.httpStatus)===503?tm(n,l.intervalMillis,Sk):tm(n,l.intervalMillis),v={throttleEndTimeMillis:Date.now()+w,backoffCount:n+1};return l.setThrottleMetadata(d,v),gt.debug(`Calling attemptFetch again in ${w} millis`),hv(r,v,s,l)}}function Nk(r,e){return new Promise((n,s)=>{const l=Math.max(e-Date.now(),0),u=setTimeout(n,l);r.addEventListener(()=>{clearTimeout(u),s(Ct.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Pk(r){if(!(r instanceof sn)||!r.customData)return!1;const e=Number(r.customData.httpStatus);return e===429||e===500||e===503||e===504}class Ak{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Ok(r,e,n,s,l){if(l&&l.global){r("event",n,s);return}else{const u=await e,d=Object.assign(Object.assign({},s),{send_to:u});r("event",n,d)}}/**
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
 */async function xk(){if(Ng())try{await Pg()}catch(r){return gt.warn(Ct.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return gt.warn(Ct.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Dk(r,e,n,s,l,u,d){var f;const p=Rk(r);p.then(A=>{n[A.measurementId]=A.appId,r.options.measurementId&&A.measurementId!==r.options.measurementId&&gt.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${A.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(A=>gt.error(A)),e.push(p);const g=xk().then(A=>{if(A)return s.getId()}),[w,v]=await Promise.all([p,g]);Ek(u)||mk(u,w.measurementId),l("js",new Date);const S=(f=d==null?void 0:d.config)!==null&&f!==void 0?f:{};return S[uk]="firebase",S.update=!0,v!=null&&(S[ak]=v),l("config",w.measurementId,S),w.measurementId}/**
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
 */class Lk{constructor(e){this.app=e}_delete(){return delete Ss[this.app.options.appId],Promise.resolve()}}let Ss={},qm=[];const Gm={};let mc="dataLayer",Mk="gtag",Km,fv,Qm=!1;function bk(){const r=[];if(Tg()&&r.push("This is a browser extension environment."),F0()||r.push("Cookies are not available."),r.length>0){const e=r.map((s,l)=>`(${l+1}) ${s}`).join(" "),n=Ct.create("invalid-analytics-context",{errorInfo:e});gt.warn(n.message)}}function Fk(r,e,n){bk();const s=r.options.appId;if(!s)throw Ct.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)gt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ct.create("no-api-key");if(Ss[s]!=null)throw Ct.create("already-exists",{id:s});if(!Qm){gk(mc);const{wrappedGtag:u,gtagCore:d}=wk(Ss,qm,Gm,mc,Mk);fv=u,Km=d,Qm=!0}return Ss[s]=Dk(r,qm,Gm,e,Km,mc,n),new Lk(r)}function Uk(r=Qc()){r=Tt(r);const e=Or(r,kl);return e.isInitialized()?e.getImmediate():zk(r)}function zk(r,e={}){const n=Or(r,kl);if(n.isInitialized()){const l=n.getImmediate();if(Ts(e,n.getOptions()))return l;throw Ct.create("already-initialized")}return n.initialize({options:e})}function jk(r,e,n,s){r=Tt(r),Ok(fv,Ss[r.app.options.appId],e,n,s).catch(l=>gt.error(l))}const Ym="@firebase/analytics",Xm="0.10.10";function Wk(){rn(new Ht(kl,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("installations-internal").getImmediate();return Fk(s,l,n)},"PUBLIC")),rn(new Ht("analytics-internal",r,"PRIVATE")),Dt(Ym,Xm),Dt(Ym,Xm,"esm2017");function r(e){try{const n=e.getProvider(kl).getImmediate();return{logEvent:(s,l,u)=>jk(n,s,l,u)}}catch(n){throw Ct.create("interop-component-reg-failed",{reason:n})}}}Wk();function bd(r,e){var n={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(n[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(r);l<s.length;l++)e.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(r,s[l])&&(n[s[l]]=r[s[l]]);return n}function pv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Bk=pv,mv=new Ar("auth","Firebase",pv());/**
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
 */const Rl=new Ll("@firebase/auth");function Vk(r,...e){Rl.logLevel<=he.WARN&&Rl.warn(`Auth (${Si}): ${r}`,...e)}function il(r,...e){Rl.logLevel<=he.ERROR&&Rl.error(`Auth (${Si}): ${r}`,...e)}/**
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
 */function In(r,...e){throw Fd(r,...e)}function tn(r,...e){return Fd(r,...e)}function gv(r,e,n){const s=Object.assign(Object.assign({},Bk()),{[e]:n});return new Ar("auth","Firebase",s).create(e,{appName:r.name})}function Zn(r){return gv(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Fd(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return mv.create(r,...e)}function Y(r,e,...n){if(!r)throw Fd(e,...n)}function _n(r){const e="INTERNAL ASSERTION FAILED: "+r;throw il(e),new Error(e)}function Cn(r,e){r||_n(e)}/**
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
 */function jc(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function $k(){return Jm()==="http:"||Jm()==="https:"}function Jm(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function Hk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($k()||Tg()||"connection"in navigator)?navigator.onLine:!0}function qk(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class zs{constructor(e,n){this.shortDelay=e,this.longDelay=n,Cn(n>e,"Short delay should be less than long delay!"),this.isMobile=Gc()||kg()}get(){return Hk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ud(r,e){Cn(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class _v{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_n("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_n("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_n("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Gk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Kk=new zs(3e4,6e4);function Ql(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function ki(r,e,n,s,l={}){return vv(r,l,async()=>{let u={},d={};s&&(e==="GET"?d=s:u={body:JSON.stringify(s)});const f=Ei(Object.assign({key:r.config.apiKey},d)).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const g=Object.assign({method:e,headers:p},u);return M0()||(g.referrerPolicy="no-referrer"),_v.fetch()(wv(r,r.config.apiHost,n,f),g)})}async function vv(r,e,n){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},Gk),e);try{const l=new Qk(r),u=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const d=await u.json();if("needConfirmation"in d)throw nl(r,"account-exists-with-different-credential",d);if(u.ok&&!("errorMessage"in d))return d;{const f=u.ok?d.errorMessage:d.error.message,[p,g]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw nl(r,"credential-already-in-use",d);if(p==="EMAIL_EXISTS")throw nl(r,"email-already-in-use",d);if(p==="USER_DISABLED")throw nl(r,"user-disabled",d);const w=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw gv(r,w,g);In(r,w)}}catch(l){if(l instanceof sn)throw l;In(r,"network-request-failed",{message:String(l)})}}async function yv(r,e,n,s,l={}){const u=await ki(r,e,n,s,l);return"mfaPendingCredential"in u&&In(r,"multi-factor-auth-required",{_serverResponse:u}),u}function wv(r,e,n,s){const l=`${e}${n}?${s}`;return r.config.emulator?Ud(r.config,l):`${r.config.apiScheme}://${l}`}class Qk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(tn(this.auth,"network-request-failed")),Kk.get())})}}function nl(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const l=tn(r,e,s);return l.customData._tokenResponse=n,l}/**
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
 */async function Yk(r,e){return ki(r,"POST","/v1/accounts:delete",e)}async function Ev(r,e){return ki(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Is(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Xk(r,e=!1){const n=Tt(r),s=await n.getIdToken(e),l=zd(s);Y(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const u=typeof l.firebase=="object"?l.firebase:void 0,d=u==null?void 0:u.sign_in_provider;return{claims:l,token:s,authTime:Is(gc(l.auth_time)),issuedAtTime:Is(gc(l.iat)),expirationTime:Is(gc(l.exp)),signInProvider:d||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function gc(r){return Number(r)*1e3}function zd(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return il("JWT malformed, contained fewer than 3 sections"),null;try{const l=ul(n);return l?JSON.parse(l):(il("Failed to decode base64 JWT payload"),null)}catch(l){return il("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function Zm(r){const e=zd(r);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ds(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof sn&&Jk(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function Jk({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class Zk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const l=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,l)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Wc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Is(this.lastLoginAt),this.creationTime=Is(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Nl(r){var e;const n=r.auth,s=await r.getIdToken(),l=await Ds(r,Ev(n,{idToken:s}));Y(l==null?void 0:l.users.length,n,"internal-error");const u=l.users[0];r._notifyReloadListener(u);const d=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?Sv(u.providerUserInfo):[],f=t1(r.providerData,d),p=r.isAnonymous,g=!(r.email&&u.passwordHash)&&!(f!=null&&f.length),w=p?g:!1,v={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:f,metadata:new Wc(u.createdAt,u.lastLoginAt),isAnonymous:w};Object.assign(r,v)}async function e1(r){const e=Tt(r);await Nl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function t1(r,e){return[...r.filter(s=>!e.some(l=>l.providerId===s.providerId)),...e]}function Sv(r){return r.map(e=>{var{providerId:n}=e,s=bd(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function n1(r,e){const n=await vv(r,{},async()=>{const s=Ei({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:u}=r.config,d=wv(r,l,"/v1/token",`key=${u}`),f=await r._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",_v.fetch()(d,{method:"POST",headers:f,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function r1(r,e){return ki(r,"POST","/v2/accounts:revokeToken",Ql(r,e))}/**
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
 */class di{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Zm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const n=Zm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:l,expiresIn:u}=await n1(e,n);this.updateTokensAndExpiration(s,l,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:l,expirationTime:u}=n,d=new di;return s&&(Y(typeof s=="string","internal-error",{appName:e}),d.refreshToken=s),l&&(Y(typeof l=="string","internal-error",{appName:e}),d.accessToken=l),u&&(Y(typeof u=="number","internal-error",{appName:e}),d.expirationTime=u),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new di,this.toJSON())}_performRefresh(){return _n("not implemented")}}/**
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
 */function $n(r,e){Y(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class vn{constructor(e){var{uid:n,auth:s,stsTokenManager:l}=e,u=bd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Zk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=l,this.accessToken=l.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new Wc(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const n=await Ds(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Xk(this,e)}reload(){return e1(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new vn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Nl(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mn(this.auth.app))return Promise.reject(Zn(this.auth));const e=await this.getIdToken();return await Ds(this,Yk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,l,u,d,f,p,g,w;const v=(s=n.displayName)!==null&&s!==void 0?s:void 0,S=(l=n.email)!==null&&l!==void 0?l:void 0,A=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,L=(d=n.photoURL)!==null&&d!==void 0?d:void 0,B=(f=n.tenantId)!==null&&f!==void 0?f:void 0,q=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,Oe=(g=n.createdAt)!==null&&g!==void 0?g:void 0,Ie=(w=n.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:xe,emailVerified:V,isAnonymous:X,providerData:ne,stsTokenManager:Ce}=n;Y(xe&&Ce,e,"internal-error");const Ue=di.fromJSON(this.name,Ce);Y(typeof xe=="string",e,"internal-error"),$n(v,e.name),$n(S,e.name),Y(typeof V=="boolean",e,"internal-error"),Y(typeof X=="boolean",e,"internal-error"),$n(A,e.name),$n(L,e.name),$n(B,e.name),$n(q,e.name),$n(Oe,e.name),$n(Ie,e.name);const tt=new vn({uid:xe,auth:e,email:S,emailVerified:V,displayName:v,isAnonymous:X,photoURL:L,phoneNumber:A,tenantId:B,stsTokenManager:Ue,createdAt:Oe,lastLoginAt:Ie});return ne&&Array.isArray(ne)&&(tt.providerData=ne.map(_t=>Object.assign({},_t))),q&&(tt._redirectEventId=q),tt}static async _fromIdTokenResponse(e,n,s=!1){const l=new di;l.updateFromServerResponse(n);const u=new vn({uid:n.localId,auth:e,stsTokenManager:l,isAnonymous:s});return await Nl(u),u}static async _fromGetAccountInfoResponse(e,n,s){const l=n.users[0];Y(l.localId!==void 0,"internal-error");const u=l.providerUserInfo!==void 0?Sv(l.providerUserInfo):[],d=!(l.email&&l.passwordHash)&&!(u!=null&&u.length),f=new di;f.updateFromIdToken(s);const p=new vn({uid:l.localId,auth:e,stsTokenManager:f,isAnonymous:d}),g={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:u,metadata:new Wc(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(u!=null&&u.length)};return Object.assign(p,g),p}}/**
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
 */const eg=new Map;function yn(r){Cn(r instanceof Function,"Expected a class definition");let e=eg.get(r);return e?(Cn(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,eg.set(r,e),e)}/**
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
 */class Iv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Iv.type="NONE";const tg=Iv;/**
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
 */function sl(r,e,n){return`firebase:${r}:${e}:${n}`}class hi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:l,name:u}=this.auth;this.fullUserKey=sl(this.userKey,l.apiKey,u),this.fullPersistenceKey=sl("persistence",l.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new hi(yn(tg),e,s);const l=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=l[0]||yn(tg);const d=sl(s,e.config.apiKey,e.name);let f=null;for(const g of n)try{const w=await g._get(d);if(w){const v=vn._fromJSON(e,w);g!==u&&(f=v),u=g;break}}catch{}const p=l.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new hi(u,e,s):(u=p[0],f&&await u._set(d,f.toJSON()),await Promise.all(n.map(async g=>{if(g!==u)try{await g._remove(d)}catch{}})),new hi(u,e,s))}}/**
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
 */function ng(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Rv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Cv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Pv(e))return"Blackberry";if(Av(e))return"Webos";if(Tv(e))return"Safari";if((e.includes("chrome/")||kv(e))&&!e.includes("edge/"))return"Chrome";if(Nv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Cv(r=ot()){return/firefox\//i.test(r)}function Tv(r=ot()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kv(r=ot()){return/crios\//i.test(r)}function Rv(r=ot()){return/iemobile/i.test(r)}function Nv(r=ot()){return/android/i.test(r)}function Pv(r=ot()){return/blackberry/i.test(r)}function Av(r=ot()){return/webos/i.test(r)}function jd(r=ot()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function i1(r=ot()){var e;return jd(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function s1(){return b0()&&document.documentMode===10}function Ov(r=ot()){return jd(r)||Nv(r)||Av(r)||Pv(r)||/windows phone/i.test(r)||Rv(r)}/**
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
 */function xv(r,e=[]){let n;switch(r){case"Browser":n=ng(ot());break;case"Worker":n=`${ng(ot())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Si}/${s}`}/**
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
 */class o1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=u=>new Promise((d,f)=>{try{const p=e(u);d(p)}catch(p){f(p)}});s.onAbort=n,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const l of n)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function l1(r,e={}){return ki(r,"GET","/v2/passwordPolicy",Ql(r,e))}/**
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
 */const a1=6;class u1{constructor(e){var n,s,l,u;const d=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=d.minPasswordLength)!==null&&n!==void 0?n:a1,d.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=d.maxPasswordLength),d.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=d.containsLowercaseCharacter),d.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=d.containsUppercaseCharacter),d.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=d.containsNumericCharacter),d.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=d.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(l=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&l!==void 0?l:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,l,u,d,f;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(n=p.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(l=p.containsLowercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(u=p.containsUppercaseLetter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(d=p.containsNumericCharacter)!==null&&d!==void 0?d:!0),p.isValid&&(p.isValid=(f=p.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),p}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),l&&(n.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let l=0;l<e.length;l++)s=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,l,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class c1{constructor(e,n,s,l){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rg(this),this.idTokenSubscription=new rg(this),this.beforeStateQueue=new o1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=mv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yn(n)),this._initializationPromise=this.queue(async()=>{var s,l;if(!this._deleted&&(this.persistenceManager=await hi.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ev(this,{idToken:e}),s=await vn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(mn(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let l=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,f=l==null?void 0:l._redirectEventId,p=await this.tryRedirectSignIn(e);(!d||d===f)&&(p!=null&&p.user)&&(l=p.user,u=!0)}if(!l)return this.directlySetCurrentUser(null);if(!l._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(l)}catch(d){l=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return l?this.reloadAndSetCurrentUserOrClear(l):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===l._redirectEventId?this.directlySetCurrentUser(l):this.reloadAndSetCurrentUserOrClear(l)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Nl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(mn(this.app))return Promise.reject(Zn(this));const n=e?Tt(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return mn(this.app)?Promise.reject(Zn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return mn(this.app)?Promise.reject(Zn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await l1(this),n=new u1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ar("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await r1(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yn(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await hi.create(this,[yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,l){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let d=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(f,this,"internal-error"),f.then(()=>{d||u(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,s,l);return()=>{d=!0,p()}}else{const p=e.addObserver(n);return()=>{d=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const l=await this._getAppCheckToken();return l&&(n["X-Firebase-AppCheck"]=l),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Vk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Yl(r){return Tt(r)}class rg{constructor(e){this.auth=e,this.observer=null,this.addObserver=$0(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Wd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function d1(r){Wd=r}function h1(r){return Wd.loadJS(r)}function f1(){return Wd.gapiScript}function p1(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function m1(r,e){const n=Or(r,"auth");if(n.isInitialized()){const l=n.getImmediate(),u=n.getOptions();if(Ts(u,e??{}))return l;In(l,"already-initialized")}return n.initialize({options:e})}function g1(r,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(yn);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function _1(r,e,n){const s=Yl(r);Y(s._canInitEmulator,s,"emulator-config-failed"),Y(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const l=!1,u=Dv(e),{host:d,port:f}=v1(e),p=f===null?"":`:${f}`;s.config.emulator={url:`${u}//${d}${p}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:d,port:f,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:l})}),y1()}function Dv(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function v1(r){const e=Dv(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const u=l[1];return{host:u,port:ig(s.substr(u.length+1))}}else{const[u,d]=s.split(":");return{host:u,port:ig(d)}}}function ig(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function y1(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Lv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return _n("not implemented")}_getIdTokenResponse(e){return _n("not implemented")}_linkToIdToken(e,n){return _n("not implemented")}_getReauthenticationResolver(e){return _n("not implemented")}}/**
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
 */async function fi(r,e){return yv(r,"POST","/v1/accounts:signInWithIdp",Ql(r,e))}/**
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
 */const w1="http://localhost";class Pr extends Lv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Pr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):In("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:l}=n,u=bd(n,["providerId","signInMethod"]);if(!s||!l)return null;const d=new Pr(s,l);return d.idToken=u.idToken||void 0,d.accessToken=u.accessToken||void 0,d.secret=u.secret,d.nonce=u.nonce,d.pendingToken=u.pendingToken||null,d}_getIdTokenResponse(e){const n=this.buildRequest();return fi(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,fi(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fi(e,n)}buildRequest(){const e={requestUri:w1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ei(n)}return e}}/**
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
 */class Mv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class js extends Mv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Hn extends js{constructor(){super("facebook.com")}static credential(e){return Pr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch{return null}}}Hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Hn.PROVIDER_ID="facebook.com";/**
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
 */class qn extends js{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Pr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return qn.credential(n,s)}catch{return null}}}qn.GOOGLE_SIGN_IN_METHOD="google.com";qn.PROVIDER_ID="google.com";/**
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
 */class Gn extends js{constructor(){super("github.com")}static credential(e){return Pr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.GITHUB_SIGN_IN_METHOD="github.com";Gn.PROVIDER_ID="github.com";/**
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
 */class Kn extends js{constructor(){super("twitter.com")}static credential(e,n){return Pr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Kn.credential(n,s)}catch{return null}}}Kn.TWITTER_SIGN_IN_METHOD="twitter.com";Kn.PROVIDER_ID="twitter.com";/**
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
 */async function E1(r,e){return yv(r,"POST","/v1/accounts:signUp",Ql(r,e))}/**
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
 */class nr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,l=!1){const u=await vn._fromIdTokenResponse(e,s,l),d=sg(s);return new nr({user:u,providerId:d,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const l=sg(s);return new nr({user:e,providerId:l,_tokenResponse:s,operationType:n})}}function sg(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */async function S1(r){var e;if(mn(r.app))return Promise.reject(Zn(r));const n=Yl(r);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new nr({user:n.currentUser,providerId:null,operationType:"signIn"});const s=await E1(n,{returnSecureToken:!0}),l=await nr._fromIdTokenResponse(n,"signIn",s,!0);return await n._updateCurrentUser(l.user),l}/**
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
 */class Pl extends sn{constructor(e,n,s,l){var u;super(n.code,n.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,Pl.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,l){return new Pl(e,n,s,l)}}function bv(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Pl._fromErrorAndOperation(r,u,e,s):u})}async function I1(r,e,n=!1){const s=await Ds(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return nr._forOperation(r,"link",s)}/**
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
 */async function C1(r,e,n=!1){const{auth:s}=r;if(mn(s.app))return Promise.reject(Zn(s));const l="reauthenticate";try{const u=await Ds(r,bv(s,l,e,r),n);Y(u.idToken,s,"internal-error");const d=zd(u.idToken);Y(d,s,"internal-error");const{sub:f}=d;return Y(r.uid===f,s,"user-mismatch"),nr._forOperation(r,l,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&In(s,"user-mismatch"),u}}/**
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
 */async function T1(r,e,n=!1){if(mn(r.app))return Promise.reject(Zn(r));const s="signIn",l=await bv(r,s,e),u=await nr._fromIdTokenResponse(r,s,l);return n||await r._updateCurrentUser(u.user),u}function k1(r,e,n,s){return Tt(r).onIdTokenChanged(e,n,s)}function R1(r,e,n){return Tt(r).beforeAuthStateChanged(e,n)}const Al="__sak";/**
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
 */class Fv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Al,"1"),this.storage.removeItem(Al),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const N1=1e3,P1=10;class Uv extends Fv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ov(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),l=this.localCache[n];s!==l&&e(n,l,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((d,f,p)=>{this.notifyListeners(d,p)});return}const s=e.key;n?this.detachListener():this.stopPolling();const l=()=>{const d=this.storage.getItem(s);!n&&this.localCache[s]===d||this.notifyListeners(s,d)},u=this.storage.getItem(s);s1()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,P1):l()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},N1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Uv.type="LOCAL";const A1=Uv;/**
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
 */class zv extends Fv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}zv.type="SESSION";const jv=zv;/**
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
 */function O1(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Xl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(l=>l.isListeningto(e));if(n)return n;const s=new Xl(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:l,data:u}=n.data,d=this.handlersMap[l];if(!(d!=null&&d.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const f=Array.from(d).map(async g=>g(n.origin,u)),p=await O1(f);n.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xl.receivers=[];/**
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
 */class x1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let u,d;return new Promise((f,p)=>{const g=Bd("",20);l.port1.start();const w=setTimeout(()=>{p(new Error("unsupported_event"))},s);d={messageChannel:l,onMessage(v){const S=v;if(S.data.eventId===g)switch(S.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),f(S.data.response);break;default:clearTimeout(w),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(d),l.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[l.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
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
 */function nn(){return window}function D1(r){nn().location.href=r}/**
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
 */function Wv(){return typeof nn().WorkerGlobalScope<"u"&&typeof nn().importScripts=="function"}async function L1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function M1(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function b1(){return Wv()?self:null}/**
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
 */const Bv="firebaseLocalStorageDb",F1=1,Ol="firebaseLocalStorage",Vv="fbase_key";class Ws{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Jl(r,e){return r.transaction([Ol],e?"readwrite":"readonly").objectStore(Ol)}function U1(){const r=indexedDB.deleteDatabase(Bv);return new Ws(r).toPromise()}function Bc(){const r=indexedDB.open(Bv,F1);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Ol,{keyPath:Vv})}catch(l){n(l)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Ol)?e(s):(s.close(),await U1(),e(await Bc()))})})}async function og(r,e,n){const s=Jl(r,!0).put({[Vv]:e,value:n});return new Ws(s).toPromise()}async function z1(r,e){const n=Jl(r,!1).get(e),s=await new Ws(n).toPromise();return s===void 0?null:s.value}function lg(r,e){const n=Jl(r,!0).delete(e);return new Ws(n).toPromise()}const j1=800,W1=3;class $v{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>W1)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xl._getInstance(b1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await L1(),!this.activeServiceWorker)return;this.sender=new x1(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||M1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bc();return await og(e,Al,"1"),await lg(e,Al),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>og(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>z1(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>lg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const u=Jl(l,!1).getAll();return new Ws(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:l,value:u}of e)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(u)&&(this.notifyListeners(l,u),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),j1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$v.type="LOCAL";const B1=$v;new zs(3e4,6e4);/**
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
 */function V1(r,e){return e?yn(e):(Y(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Vd extends Lv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function $1(r){return T1(r.auth,new Vd(r),r.bypassAuthState)}function H1(r){const{auth:e,user:n}=r;return Y(n,e,"internal-error"),C1(n,new Vd(r),r.bypassAuthState)}async function q1(r){const{auth:e,user:n}=r;return Y(n,e,"internal-error"),I1(n,new Vd(r),r.bypassAuthState)}/**
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
 */class Hv{constructor(e,n,s,l,u=!1){this.auth=e,this.resolver=s,this.user=l,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:l,tenantId:u,error:d,type:f}=e;if(d){this.reject(d);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $1;case"linkViaPopup":case"linkViaRedirect":return q1;case"reauthViaPopup":case"reauthViaRedirect":return H1;default:In(this.auth,"internal-error")}}resolve(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const G1=new zs(2e3,1e4);class li extends Hv{constructor(e,n,s,l,u){super(e,n,l,u),this.provider=s,this.authWindow=null,this.pollId=null,li.currentPopupAction&&li.currentPopupAction.cancel(),li.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){Cn(this.filter.length===1,"Popup operations only handle one event");const e=Bd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,li.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,G1.get())};e()}}li.currentPopupAction=null;/**
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
 */const K1="pendingRedirect",ol=new Map;class Q1 extends Hv{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ol.get(this.auth._key());if(!e){try{const s=await Y1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ol.set(this.auth._key(),e)}return this.bypassAuthState||ol.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Y1(r,e){const n=Z1(e),s=J1(r);if(!await s._isAvailable())return!1;const l=await s._get(n)==="true";return await s._remove(n),l}function X1(r,e){ol.set(r._key(),e)}function J1(r){return yn(r._redirectPersistence)}function Z1(r){return sl(K1,r.config.apiKey,r.name)}async function eR(r,e,n=!1){if(mn(r.app))return Promise.reject(Zn(r));const s=Yl(r),l=V1(s,e),d=await new Q1(s,l,n).execute();return d&&!n&&(delete d.user._redirectEventId,await s._persistUserIfCurrent(d.user),await s._setRedirectUser(null,e)),d}/**
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
 */const tR=10*60*1e3;class nR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!qv(e)){const l=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(tn(this.auth,l))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=tR&&this.cachedEventUids.clear(),this.cachedEventUids.has(ag(e))}saveEventToCache(e){this.cachedEventUids.add(ag(e)),this.lastProcessedEventTime=Date.now()}}function ag(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function qv({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function rR(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qv(r);default:return!1}}/**
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
 */async function iR(r,e={}){return ki(r,"GET","/v1/projects",e)}/**
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
 */const sR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,oR=/^https?/;async function lR(r){if(r.config.emulator)return;const{authorizedDomains:e}=await iR(r);for(const n of e)try{if(aR(n))return}catch{}In(r,"unauthorized-domain")}function aR(r){const e=jc(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const d=new URL(r);return d.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&d.hostname===s}if(!oR.test(n))return!1;if(sR.test(r))return s===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
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
 */const uR=new zs(3e4,6e4);function ug(){const r=nn().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function cR(r){return new Promise((e,n)=>{var s,l,u;function d(){ug(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ug(),n(tn(r,"network-request-failed"))},timeout:uR.get()})}if(!((l=(s=nn().gapi)===null||s===void 0?void 0:s.iframes)===null||l===void 0)&&l.Iframe)e(gapi.iframes.getContext());else if(!((u=nn().gapi)===null||u===void 0)&&u.load)d();else{const f=p1("iframefcb");return nn()[f]=()=>{gapi.load?d():n(tn(r,"network-request-failed"))},h1(`${f1()}?onload=${f}`).catch(p=>n(p))}}).catch(e=>{throw ll=null,e})}let ll=null;function dR(r){return ll=ll||cR(r),ll}/**
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
 */const hR=new zs(5e3,15e3),fR="__/auth/iframe",pR="emulator/auth/iframe",mR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _R(r){const e=r.config;Y(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?Ud(e,pR):`https://${r.config.authDomain}/${fR}`,s={apiKey:e.apiKey,appName:r.name,v:Si},l=gR.get(r.config.apiHost);l&&(s.eid=l);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${Ei(s).slice(1)}`}async function vR(r){const e=await dR(r),n=nn().gapi;return Y(n,r,"internal-error"),e.open({where:document.body,url:_R(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mR,dontclear:!0},s=>new Promise(async(l,u)=>{await s.restyle({setHideOnLeave:!1});const d=tn(r,"network-request-failed"),f=nn().setTimeout(()=>{u(d)},hR.get());function p(){nn().clearTimeout(f),l(s)}s.ping(p).then(p,()=>{u(d)})}))}/**
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
 */const yR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wR=500,ER=600,SR="_blank",IR="http://localhost";class cg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function CR(r,e,n,s=wR,l=ER){const u=Math.max((window.screen.availHeight-l)/2,0).toString(),d=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const p=Object.assign(Object.assign({},yR),{width:s.toString(),height:l.toString(),top:u,left:d}),g=ot().toLowerCase();n&&(f=kv(g)?SR:n),Cv(g)&&(e=e||IR,p.scrollbars="yes");const w=Object.entries(p).reduce((S,[A,L])=>`${S}${A}=${L},`,"");if(i1(g)&&f!=="_self")return TR(e||"",f),new cg(null);const v=window.open(e||"",f,w);Y(v,r,"popup-blocked");try{v.focus()}catch{}return new cg(v)}function TR(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const kR="__/auth/handler",RR="emulator/auth/handler",NR=encodeURIComponent("fac");async function dg(r,e,n,s,l,u){Y(r.config.authDomain,r,"auth-domain-config-required"),Y(r.config.apiKey,r,"invalid-api-key");const d={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:Si,eventId:l};if(e instanceof Mv){e.setDefaultLanguage(r.languageCode),d.providerId=e.providerId||"",vc(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,v]of Object.entries({}))d[w]=v}if(e instanceof js){const w=e.getScopes().filter(v=>v!=="");w.length>0&&(d.scopes=w.join(","))}r.tenantId&&(d.tid=r.tenantId);const f=d;for(const w of Object.keys(f))f[w]===void 0&&delete f[w];const p=await r._getAppCheckToken(),g=p?`#${NR}=${encodeURIComponent(p)}`:"";return`${PR(r)}?${Ei(f).slice(1)}${g}`}function PR({config:r}){return r.emulator?Ud(r,RR):`https://${r.authDomain}/${kR}`}/**
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
 */const _c="webStorageSupport";class AR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jv,this._completeRedirectFn=eR,this._overrideRedirectResult=X1}async _openPopup(e,n,s,l){var u;Cn((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const d=await dg(e,n,s,jc(),l);return CR(e,d,Bd())}async _openRedirect(e,n,s,l){await this._originValidation(e);const u=await dg(e,n,s,jc(),l);return D1(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:l,promise:u}=this.eventManagers[n];return l?Promise.resolve(l):(Cn(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await vR(e),s=new nR(e);return n.register("authEvent",l=>(Y(l==null?void 0:l.authEvent,e,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(_c,{type:_c},l=>{var u;const d=(u=l==null?void 0:l[0])===null||u===void 0?void 0:u[_c];d!==void 0&&n(!!d),In(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=lR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ov()||Tv()||jd()}}const OR=AR;var hg="@firebase/auth",fg="1.8.1";/**
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
 */class xR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function DR(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function LR(r){rn(new Ht("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:d,authDomain:f}=s.options;Y(d&&!d.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:d,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xv(r)},g=new c1(s,l,u,p);return g1(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),rn(new Ht("auth-internal",e=>{const n=Yl(e.getProvider("auth").getImmediate());return(s=>new xR(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dt(hg,fg,DR(r)),Dt(hg,fg,"esm2017")}/**
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
 */const MR=5*60,bR=Cg("authIdTokenMaxAge")||MR;let pg=null;const FR=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>bR)return;const l=n==null?void 0:n.token;pg!==l&&(pg=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function UR(r=Qc()){const e=Or(r,"auth");if(e.isInitialized())return e.getImmediate();const n=m1(r,{popupRedirectResolver:OR,persistence:[B1,A1,jv]}),s=Cg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const d=FR(u.toString());R1(n,d,()=>d(n.currentUser)),k1(n,f=>d(f))}}const l=Sg("auth");return l&&_1(n,`http://${l}`),n}function zR(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}d1({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=l=>{const u=tn("internal-error");u.customData=l,n(u)},s.type="text/javascript",s.charset="UTF-8",zR().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});LR("Browser");const jR={apiKey:"AIzaSyB2SlnQ03tQfpjLMcleDimnz-wI6_BSXYE",authDomain:"my-multiplayer-dbf6b.firebaseapp.com",databaseURL:"https://my-multiplayer-dbf6b-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"my-multiplayer-dbf6b",storageBucket:"my-multiplayer-dbf6b.firebasestorage.app",messagingSenderId:"3902656578",appId:"1:3902656578:web:ea447bf59037a7d25b5ddb",measurementId:"G-3DVR8Y6VSM"},$d=Lg(jR);Uk($d);const Zl=vT($d),Vc=UR($d);S1(Vc).then(()=>{console.log("Signed in anonymously")}).catch(r=>{console.error("Error signing in anonymously:",r)});const WR=(r,e)=>{const n=ql(Zl,`players/${r}`);H_(n,e).then(()=>{console.log("Data written successfully!")}).catch(s=>{console.error("Error writing data:",s)})},BR=(r,e,n,s,l,u)=>{const d=ql(Zl,`players/${r}`);aT(d,{x:n,y:e,dir:s,vector:l,score:u}).then(()=>{console.log("Data updated successfully!")}).catch(f=>{console.error("Error updating data:",f)})},VR=r=>{const e=ql(Zl,`players/${r}`);lT(e).then(()=>{console.log("Data removed successfully!")}).catch(n=>{console.error("Error deleting data:",n)})},mg=["moveU","moveR","moveD","moveL","dragon"];function Gv(r){const{rows:e,cols:n,setScore:s,players:l=[],myPlayer:u,score:d}=r,f=Ke.useRef(null),[p,g]=Ke.useState(()=>C0(e,n)),[w,v]=Ke.useState(()=>0),[S,A]=Ke.useState(()=>0),[L,B]=Ke.useState(()=>2),[q,Oe]=Ke.useState(()=>0),Ie=(V,X,ne)=>{const Ce=ne===0||ne===2,Ue=Ce?e:n;if(X<0||X>=Ue)return V;const tt=Ce?p[X][S].type:p[w][X].type;return tt===it.ROCK?V:(tt===it.WATER?B(4):B(ne),Oe(_t=>(_t+1)%4),X)},xe=V=>{switch(console.log("##keydown",V.key),V.key){case"ArrowUp":v(X=>{let ne=X-1;return console.log("##up",X,ne),Ie(X,ne,0)});break;case"ArrowRight":A(X=>{let ne=X+1;return console.log("##right",X,ne),Ie(X,ne,1)});break;case"ArrowDown":v(X=>{let ne=X+1;return console.log("##down",X,ne),Ie(X,ne,2)});break;case"ArrowLeft":A(X=>{let ne=X-1;return console.log("##left",X,ne),Ie(X,ne,3)});break}};return Ke.useEffect(()=>{p[w][S].type===it.FOOD&&setTimeout(()=>{let V=p;V[w][S].type=it.EMPTY,g(V),s(X=>X+1)},400),BR(u==null?void 0:u.id,w,S,L,q,d)},[w,S]),Ke.useEffect(()=>{var V;f&&((V=f==null?void 0:f.current)==null||V.focus(),v(u==null?void 0:u.y),A(u==null?void 0:u.x),s(u==null?void 0:u.score))},[]),fe.jsx("div",{tabIndex:"0",onKeyDown:xe,ref:f,children:fe.jsxs("div",{className:vr.board,children:[fe.jsx("div",{className:`${vr.mycharacter} ${vr[mg[L]]}`,style:{transform:`translate(${S*6}rem, ${w*6}rem)`,backgroundPosition:`${q*-44}px 0`}}),l==null?void 0:l.map(V=>fe.jsxs(fe.Fragment,{children:[fe.jsx("div",{className:`${vr.mycharacter} ${vr[mg[V==null?void 0:V.dir]]}`,style:{transform:`translate(${(V==null?void 0:V.x)*6}rem, ${(V==null?void 0:V.y)*6}rem)`,backgroundPosition:`${(V==null?void 0:V.vector)*-44}px 0`}},V.id),fe.jsxs("div",{className:vr.name,style:{transform:`translate(${(V==null?void 0:V.x)*6}rem, ${(V==null?void 0:V.y)*6}rem)`},children:[V.name," ",V.score]})]})),p.map((V,X)=>fe.jsx("div",{className:vr.row,children:V.map((ne,Ce)=>{const Ue=w===X&&S===Ce;return fe.jsx(_g,{isActive:Ue,tile:ne},Ce)})},X))]})})}Gv.propTypes={rows:en.number.isRequired,cols:en.number.isRequired,score:en.number.isRequired,setScore:en.func.isRequired,players:en.array,myPlayer:en.object};const $R="_newPlayer_1dkh4_1",HR="_btnSubmit_1dkh4_10",gg={newPlayer:$R,btnSubmit:HR};function Kv(r){const{user:e,setNewPlayer:n}=r,[s,l]=Ke.useState(""),[u,d]=Ke.useState("male"),f=()=>{n(!1);const g={name:s,score:0,x:0,y:0,character:"",dir:2,vector:0};WR(e==null?void 0:e.id,g)},p=g=>{d(g.target.value)};return fe.jsxs("div",{className:gg.newPlayer,children:[fe.jsx("div",{children:"New player"}),fe.jsx("input",{type:"text",placeholder:"Enter your name",value:s,onChange:g=>l(g.target.value)}),fe.jsx("br",{}),fe.jsxs("select",{value:u,onChange:p,children:[fe.jsx("option",{value:"male",children:"Man"}),fe.jsx("option",{value:"female",children:"Women"}),fe.jsx("option",{value:"snake",children:"Snake"})]}),fe.jsx("button",{className:gg.btnSubmit,onClick:f,children:"Submit"})]})}Kv.propTypes={user:en.object.isRequired,setNewPlayer:en.func.isRequired};function qR(){const[r,e]=Ke.useState(0),[n,s]=Ke.useState(!0),[l,u]=Ke.useState({}),[d,f]=Ke.useState([]),p=w=>{if(!w)return;let v=[];for(const S in w)S===l.id?(u({id:S,...w[S]}),s(!1)):v.push({id:S,...w[S]});f(v)},g=()=>{VR(l==null?void 0:l.id),s(!0),u({})};return Ke.useEffect(()=>Vc.onAuthStateChanged(v=>{if(v){let S=l;S.id=v.uid,u(S)}else console.log("User signed out")}),[Vc]),Ke.useEffect(()=>{const w=ql(Zl,"players"),v=cT(w,S=>{p(S.val())});return()=>v()},[]),n?fe.jsx(Kv,{user:l,setNewPlayer:s}):fe.jsxs(fe.Fragment,{children:[fe.jsxs("div",{style:{padding:"1rem",fontWeight:"bolder",display:"flex",justifyContent:"space-between"},children:[fe.jsxs("div",{children:[" Score: ",r]}),fe.jsx("button",{onClick:g,children:"Reset"})]}),fe.jsx(Gv,{rows:9,cols:12,score:r,setScore:e,myPlayer:l,players:d})]})}e0.createRoot(document.getElementById("root")).render(fe.jsx(Ke.StrictMode,{children:fe.jsx(qR,{})}));
