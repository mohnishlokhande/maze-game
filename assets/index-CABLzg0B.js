(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=n(l);fetch(l.href,u)}})();function bg(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var oc={exports:{}},ys={},lc={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp;function v0(){if(Zp)return ee;Zp=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function S(C){return C===null||typeof C!="object"?null:(C=_&&C[_]||C["@@iterator"],typeof C=="function"?C:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,b={};function j(C,A,J){this.props=C,this.context=A,this.refs=b,this.updater=J||k}j.prototype.isReactComponent={},j.prototype.setState=function(C,A){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,A,"setState")},j.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function me(){}me.prototype=j.prototype;function we(C,A,J){this.props=C,this.context=A,this.refs=b,this.updater=J||k}var ge=we.prototype=new me;ge.constructor=we,R(ge,j.prototype),ge.isPureReactComponent=!0;var le=Array.isArray,Ue=Object.prototype.hasOwnProperty,Z={current:null},Q={key:!0,ref:!0,__self:!0,__source:!0};function se(C,A,J){var re,ae={},ue=null,Ee=null;if(A!=null)for(re in A.ref!==void 0&&(Ee=A.ref),A.key!==void 0&&(ue=""+A.key),A)Ue.call(A,re)&&!Q.hasOwnProperty(re)&&(ae[re]=A[re]);var fe=arguments.length-2;if(fe===1)ae.children=J;else if(1<fe){for(var Ne=Array(fe),Ct=0;Ct<fe;Ct++)Ne[Ct]=arguments[Ct+2];ae.children=Ne}if(C&&C.defaultProps)for(re in fe=C.defaultProps,fe)ae[re]===void 0&&(ae[re]=fe[re]);return{$$typeof:r,type:C,key:ue,ref:Ee,props:ae,_owner:Z.current}}function Ve(C,A){return{$$typeof:r,type:C.type,key:A,ref:C.ref,props:C.props,_owner:C._owner}}function rt(C){return typeof C=="object"&&C!==null&&C.$$typeof===r}function Xt(C){var A={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(J){return A[J]})}var Pt=/\/+/g;function St(C,A){return typeof C=="object"&&C!==null&&C.key!=null?Xt(""+C.key):A.toString(36)}function jt(C,A,J,re,ae){var ue=typeof C;(ue==="undefined"||ue==="boolean")&&(C=null);var Ee=!1;if(C===null)Ee=!0;else switch(ue){case"string":case"number":Ee=!0;break;case"object":switch(C.$$typeof){case r:case e:Ee=!0}}if(Ee)return Ee=C,ae=ae(Ee),C=re===""?"."+St(Ee,0):re,le(ae)?(J="",C!=null&&(J=C.replace(Pt,"$&/")+"/"),jt(ae,A,J,"",function(Ct){return Ct})):ae!=null&&(rt(ae)&&(ae=Ve(ae,J+(!ae.key||Ee&&Ee.key===ae.key?"":(""+ae.key).replace(Pt,"$&/")+"/")+C)),A.push(ae)),1;if(Ee=0,re=re===""?".":re+":",le(C))for(var fe=0;fe<C.length;fe++){ue=C[fe];var Ne=re+St(ue,fe);Ee+=jt(ue,A,J,Ne,ae)}else if(Ne=S(C),typeof Ne=="function")for(C=Ne.call(C),fe=0;!(ue=C.next()).done;)ue=ue.value,Ne=re+St(ue,fe++),Ee+=jt(ue,A,J,Ne,ae);else if(ue==="object")throw A=String(C),Error("Objects are not valid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":A)+"). If you meant to render a collection of children, use an array instead.");return Ee}function Jt(C,A,J){if(C==null)return C;var re=[],ae=0;return jt(C,re,"","",function(ue){return A.call(J,ue,ae++)}),re}function ct(C){if(C._status===-1){var A=C._result;A=A(),A.then(function(J){(C._status===0||C._status===-1)&&(C._status=1,C._result=J)},function(J){(C._status===0||C._status===-1)&&(C._status=2,C._result=J)}),C._status===-1&&(C._status=0,C._result=A)}if(C._status===1)return C._result.default;throw C._result}var xe={current:null},F={transition:null},K={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:F,ReactCurrentOwner:Z};function W(){throw Error("act(...) is not supported in production builds of React.")}return ee.Children={map:Jt,forEach:function(C,A,J){Jt(C,function(){A.apply(this,arguments)},J)},count:function(C){var A=0;return Jt(C,function(){A++}),A},toArray:function(C){return Jt(C,function(A){return A})||[]},only:function(C){if(!rt(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},ee.Component=j,ee.Fragment=n,ee.Profiler=l,ee.PureComponent=we,ee.StrictMode=s,ee.Suspense=p,ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K,ee.act=W,ee.cloneElement=function(C,A,J){if(C==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+C+".");var re=R({},C.props),ae=C.key,ue=C.ref,Ee=C._owner;if(A!=null){if(A.ref!==void 0&&(ue=A.ref,Ee=Z.current),A.key!==void 0&&(ae=""+A.key),C.type&&C.type.defaultProps)var fe=C.type.defaultProps;for(Ne in A)Ue.call(A,Ne)&&!Q.hasOwnProperty(Ne)&&(re[Ne]=A[Ne]===void 0&&fe!==void 0?fe[Ne]:A[Ne])}var Ne=arguments.length-2;if(Ne===1)re.children=J;else if(1<Ne){fe=Array(Ne);for(var Ct=0;Ct<Ne;Ct++)fe[Ct]=arguments[Ct+2];re.children=fe}return{$$typeof:r,type:C.type,key:ae,ref:ue,props:re,_owner:Ee}},ee.createContext=function(C){return C={$$typeof:c,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},C.Provider={$$typeof:u,_context:C},C.Consumer=C},ee.createElement=se,ee.createFactory=function(C){var A=se.bind(null,C);return A.type=C,A},ee.createRef=function(){return{current:null}},ee.forwardRef=function(C){return{$$typeof:f,render:C}},ee.isValidElement=rt,ee.lazy=function(C){return{$$typeof:v,_payload:{_status:-1,_result:C},_init:ct}},ee.memo=function(C,A){return{$$typeof:g,type:C,compare:A===void 0?null:A}},ee.startTransition=function(C){var A=F.transition;F.transition={};try{C()}finally{F.transition=A}},ee.unstable_act=W,ee.useCallback=function(C,A){return xe.current.useCallback(C,A)},ee.useContext=function(C){return xe.current.useContext(C)},ee.useDebugValue=function(){},ee.useDeferredValue=function(C){return xe.current.useDeferredValue(C)},ee.useEffect=function(C,A){return xe.current.useEffect(C,A)},ee.useId=function(){return xe.current.useId()},ee.useImperativeHandle=function(C,A,J){return xe.current.useImperativeHandle(C,A,J)},ee.useInsertionEffect=function(C,A){return xe.current.useInsertionEffect(C,A)},ee.useLayoutEffect=function(C,A){return xe.current.useLayoutEffect(C,A)},ee.useMemo=function(C,A){return xe.current.useMemo(C,A)},ee.useReducer=function(C,A,J){return xe.current.useReducer(C,A,J)},ee.useRef=function(C){return xe.current.useRef(C)},ee.useState=function(C){return xe.current.useState(C)},ee.useSyncExternalStore=function(C,A,J){return xe.current.useSyncExternalStore(C,A,J)},ee.useTransition=function(){return xe.current.useTransition()},ee.version="18.3.1",ee}var em;function rd(){return em||(em=1,lc.exports=v0()),lc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm;function w0(){if(tm)return ys;tm=1;var r=rd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(f,p,g){var v,_={},S=null,k=null;g!==void 0&&(S=""+g),p.key!==void 0&&(S=""+p.key),p.ref!==void 0&&(k=p.ref);for(v in p)s.call(p,v)&&!u.hasOwnProperty(v)&&(_[v]=p[v]);if(f&&f.defaultProps)for(v in p=f.defaultProps,p)_[v]===void 0&&(_[v]=p[v]);return{$$typeof:e,type:f,key:S,ref:k,props:_,_owner:l.current}}return ys.Fragment=n,ys.jsx=c,ys.jsxs=c,ys}var nm;function E0(){return nm||(nm=1,oc.exports=w0()),oc.exports}var M=E0(),he=rd();const rm=bg(he);var cl={},ac={exports:{}},gt={},uc={exports:{}},cc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var im;function S0(){return im||(im=1,function(r){function e(F,K){var W=F.length;F.push(K);e:for(;0<W;){var C=W-1>>>1,A=F[C];if(0<l(A,K))F[C]=K,F[W]=A,W=C;else break e}}function n(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var K=F[0],W=F.pop();if(W!==K){F[0]=W;e:for(var C=0,A=F.length,J=A>>>1;C<J;){var re=2*(C+1)-1,ae=F[re],ue=re+1,Ee=F[ue];if(0>l(ae,W))ue<A&&0>l(Ee,ae)?(F[C]=Ee,F[ue]=W,C=ue):(F[C]=ae,F[re]=W,C=re);else if(ue<A&&0>l(Ee,W))F[C]=Ee,F[ue]=W,C=ue;else break e}}return K}function l(F,K){var W=F.sortIndex-K.sortIndex;return W!==0?W:F.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var c=Date,f=c.now();r.unstable_now=function(){return c.now()-f}}var p=[],g=[],v=1,_=null,S=3,k=!1,R=!1,b=!1,j=typeof setTimeout=="function"?setTimeout:null,me=typeof clearTimeout=="function"?clearTimeout:null,we=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ge(F){for(var K=n(g);K!==null;){if(K.callback===null)s(g);else if(K.startTime<=F)s(g),K.sortIndex=K.expirationTime,e(p,K);else break;K=n(g)}}function le(F){if(b=!1,ge(F),!R)if(n(p)!==null)R=!0,ct(Ue);else{var K=n(g);K!==null&&xe(le,K.startTime-F)}}function Ue(F,K){R=!1,b&&(b=!1,me(se),se=-1),k=!0;var W=S;try{for(ge(K),_=n(p);_!==null&&(!(_.expirationTime>K)||F&&!Xt());){var C=_.callback;if(typeof C=="function"){_.callback=null,S=_.priorityLevel;var A=C(_.expirationTime<=K);K=r.unstable_now(),typeof A=="function"?_.callback=A:_===n(p)&&s(p),ge(K)}else s(p);_=n(p)}if(_!==null)var J=!0;else{var re=n(g);re!==null&&xe(le,re.startTime-K),J=!1}return J}finally{_=null,S=W,k=!1}}var Z=!1,Q=null,se=-1,Ve=5,rt=-1;function Xt(){return!(r.unstable_now()-rt<Ve)}function Pt(){if(Q!==null){var F=r.unstable_now();rt=F;var K=!0;try{K=Q(!0,F)}finally{K?St():(Z=!1,Q=null)}}else Z=!1}var St;if(typeof we=="function")St=function(){we(Pt)};else if(typeof MessageChannel<"u"){var jt=new MessageChannel,Jt=jt.port2;jt.port1.onmessage=Pt,St=function(){Jt.postMessage(null)}}else St=function(){j(Pt,0)};function ct(F){Q=F,Z||(Z=!0,St())}function xe(F,K){se=j(function(){F(r.unstable_now())},K)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_continueExecution=function(){R||k||(R=!0,ct(Ue))},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ve=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_getFirstCallbackNode=function(){return n(p)},r.unstable_next=function(F){switch(S){case 1:case 2:case 3:var K=3;break;default:K=S}var W=S;S=K;try{return F()}finally{S=W}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(F,K){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var W=S;S=F;try{return K()}finally{S=W}},r.unstable_scheduleCallback=function(F,K,W){var C=r.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?C+W:C):W=C,F){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=W+A,F={id:v++,callback:K,priorityLevel:F,startTime:W,expirationTime:A,sortIndex:-1},W>C?(F.sortIndex=W,e(g,F),n(p)===null&&F===n(g)&&(b?(me(se),se=-1):b=!0,xe(le,W-C))):(F.sortIndex=A,e(p,F),R||k||(R=!0,ct(Ue))),F},r.unstable_shouldYield=Xt,r.unstable_wrapCallback=function(F){var K=S;return function(){var W=S;S=K;try{return F.apply(this,arguments)}finally{S=W}}}}(cc)),cc}var sm;function C0(){return sm||(sm=1,uc.exports=S0()),uc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var om;function I0(){if(om)return gt;om=1;var r=rd(),e=C0();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function u(t,i){c(t,i),c(t+"Capture",i)}function c(t,i){for(l[t]=i,t=0;t<i.length;t++)s.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},_={};function S(t){return p.call(_,t)?!0:p.call(v,t)?!1:g.test(t)?_[t]=!0:(v[t]=!0,!1)}function k(t,i,o,a){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return a?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function R(t,i,o,a){if(i===null||typeof i>"u"||k(t,i,o,a))return!0;if(a)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function b(t,i,o,a,d,h,m){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=a,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=m}var j={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){j[t]=new b(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];j[i]=new b(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){j[t]=new b(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){j[t]=new b(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){j[t]=new b(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){j[t]=new b(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){j[t]=new b(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){j[t]=new b(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){j[t]=new b(t,5,!1,t.toLowerCase(),null,!1,!1)});var me=/[\-:]([a-z])/g;function we(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(me,we);j[i]=new b(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(me,we);j[i]=new b(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(me,we);j[i]=new b(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){j[t]=new b(t,1,!1,t.toLowerCase(),null,!1,!1)}),j.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){j[t]=new b(t,1,!1,t.toLowerCase(),null,!0,!0)});function ge(t,i,o,a){var d=j.hasOwnProperty(i)?j[i]:null;(d!==null?d.type!==0:a||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(R(i,o,d,a)&&(o=null),a||d===null?S(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):d.mustUseProperty?t[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,a=d.attributeNamespace,o===null?t.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,a?t.setAttributeNS(a,i,o):t.setAttribute(i,o))))}var le=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ue=Symbol.for("react.element"),Z=Symbol.for("react.portal"),Q=Symbol.for("react.fragment"),se=Symbol.for("react.strict_mode"),Ve=Symbol.for("react.profiler"),rt=Symbol.for("react.provider"),Xt=Symbol.for("react.context"),Pt=Symbol.for("react.forward_ref"),St=Symbol.for("react.suspense"),jt=Symbol.for("react.suspense_list"),Jt=Symbol.for("react.memo"),ct=Symbol.for("react.lazy"),xe=Symbol.for("react.offscreen"),F=Symbol.iterator;function K(t){return t===null||typeof t!="object"?null:(t=F&&t[F]||t["@@iterator"],typeof t=="function"?t:null)}var W=Object.assign,C;function A(t){if(C===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);C=i&&i[1]||""}return`
`+C+t}var J=!1;function re(t,i){if(!t||J)return"";J=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(N){var a=N}Reflect.construct(t,[],i)}else{try{i.call()}catch(N){a=N}t.call(i.prototype)}else{try{throw Error()}catch(N){a=N}t()}}catch(N){if(N&&a&&typeof N.stack=="string"){for(var d=N.stack.split(`
`),h=a.stack.split(`
`),m=d.length-1,y=h.length-1;1<=m&&0<=y&&d[m]!==h[y];)y--;for(;1<=m&&0<=y;m--,y--)if(d[m]!==h[y]){if(m!==1||y!==1)do if(m--,y--,0>y||d[m]!==h[y]){var w=`
`+d[m].replace(" at new "," at ");return t.displayName&&w.includes("<anonymous>")&&(w=w.replace("<anonymous>",t.displayName)),w}while(1<=m&&0<=y);break}}}finally{J=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?A(t):""}function ae(t){switch(t.tag){case 5:return A(t.type);case 16:return A("Lazy");case 13:return A("Suspense");case 19:return A("SuspenseList");case 0:case 2:case 15:return t=re(t.type,!1),t;case 11:return t=re(t.type.render,!1),t;case 1:return t=re(t.type,!0),t;default:return""}}function ue(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Q:return"Fragment";case Z:return"Portal";case Ve:return"Profiler";case se:return"StrictMode";case St:return"Suspense";case jt:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Xt:return(t.displayName||"Context")+".Consumer";case rt:return(t._context.displayName||"Context")+".Provider";case Pt:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Jt:return i=t.displayName||null,i!==null?i:ue(t.type)||"Memo";case ct:i=t._payload,t=t._init;try{return ue(t(i))}catch{}}return null}function Ee(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ue(i);case 8:return i===se?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function fe(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ne(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ct(t){var i=Ne(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),a=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(m){a=""+m,h.call(this,m)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(m){a=""+m},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Zs(t){t._valueTracker||(t._valueTracker=Ct(t))}function ih(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),a="";return t&&(a=Ne(t)?t.checked?"true":"false":t.value),t=a,t!==o?(i.setValue(t),!0):!1}function eo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function fa(t,i){var o=i.checked;return W({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function sh(t,i){var o=i.defaultValue==null?"":i.defaultValue,a=i.checked!=null?i.checked:i.defaultChecked;o=fe(i.value!=null?i.value:o),t._wrapperState={initialChecked:a,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function oh(t,i){i=i.checked,i!=null&&ge(t,"checked",i,!1)}function pa(t,i){oh(t,i);var o=fe(i.value),a=i.type;if(o!=null)a==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(a==="submit"||a==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?ma(t,i.type,o):i.hasOwnProperty("defaultValue")&&ma(t,i.type,fe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function lh(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var a=i.type;if(!(a!=="submit"&&a!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function ma(t,i,o){(i!=="number"||eo(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Di=Array.isArray;function Ur(t,i,o,a){if(t=t.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<t.length;o++)d=i.hasOwnProperty("$"+t[o].value),t[o].selected!==d&&(t[o].selected=d),d&&a&&(t[o].defaultSelected=!0)}else{for(o=""+fe(o),i=null,d=0;d<t.length;d++){if(t[d].value===o){t[d].selected=!0,a&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function ga(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return W({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ah(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(Di(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:fe(o)}}function uh(t,i){var o=fe(i.value),a=fe(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),a!=null&&(t.defaultValue=""+a)}function ch(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function dh(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _a(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?dh(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var to,hh=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,a,d){MSApp.execUnsafeLocalFunction(function(){return t(i,o,a,d)})}:t}(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(to=to||document.createElement("div"),to.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=to.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Li(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Mi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Cv=["Webkit","ms","Moz","O"];Object.keys(Mi).forEach(function(t){Cv.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Mi[i]=Mi[t]})});function fh(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Mi.hasOwnProperty(t)&&Mi[t]?(""+i).trim():i+"px"}function ph(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var a=o.indexOf("--")===0,d=fh(o,i[o],a);o==="float"&&(o="cssFloat"),a?t.setProperty(o,d):t[o]=d}}var Iv=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ya(t,i){if(i){if(Iv[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function va(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wa=null;function Ea(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Sa=null,jr=null,zr=null;function mh(t){if(t=rs(t)){if(typeof Sa!="function")throw Error(n(280));var i=t.stateNode;i&&(i=To(i),Sa(t.stateNode,t.type,i))}}function gh(t){jr?zr?zr.push(t):zr=[t]:jr=t}function _h(){if(jr){var t=jr,i=zr;if(zr=jr=null,mh(t),i)for(t=0;t<i.length;t++)mh(i[t])}}function yh(t,i){return t(i)}function vh(){}var Ca=!1;function wh(t,i,o){if(Ca)return t(i,o);Ca=!0;try{return yh(t,i,o)}finally{Ca=!1,(jr!==null||zr!==null)&&(vh(),_h())}}function bi(t,i){var o=t.stateNode;if(o===null)return null;var a=To(o);if(a===null)return null;o=a[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Ia=!1;if(f)try{var Fi={};Object.defineProperty(Fi,"passive",{get:function(){Ia=!0}}),window.addEventListener("test",Fi,Fi),window.removeEventListener("test",Fi,Fi)}catch{Ia=!1}function Tv(t,i,o,a,d,h,m,y,w){var N=Array.prototype.slice.call(arguments,3);try{i.apply(o,N)}catch(x){this.onError(x)}}var Ui=!1,no=null,ro=!1,Ta=null,kv={onError:function(t){Ui=!0,no=t}};function Nv(t,i,o,a,d,h,m,y,w){Ui=!1,no=null,Tv.apply(kv,arguments)}function Rv(t,i,o,a,d,h,m,y,w){if(Nv.apply(this,arguments),Ui){if(Ui){var N=no;Ui=!1,no=null}else throw Error(n(198));ro||(ro=!0,Ta=N)}}function ur(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,i.flags&4098&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Eh(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Sh(t){if(ur(t)!==t)throw Error(n(188))}function Pv(t){var i=t.alternate;if(!i){if(i=ur(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,a=i;;){var d=o.return;if(d===null)break;var h=d.alternate;if(h===null){if(a=d.return,a!==null){o=a;continue}break}if(d.child===h.child){for(h=d.child;h;){if(h===o)return Sh(d),t;if(h===a)return Sh(d),i;h=h.sibling}throw Error(n(188))}if(o.return!==a.return)o=d,a=h;else{for(var m=!1,y=d.child;y;){if(y===o){m=!0,o=d,a=h;break}if(y===a){m=!0,a=d,o=h;break}y=y.sibling}if(!m){for(y=h.child;y;){if(y===o){m=!0,o=h,a=d;break}if(y===a){m=!0,a=h,o=d;break}y=y.sibling}if(!m)throw Error(n(189))}}if(o.alternate!==a)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function Ch(t){return t=Pv(t),t!==null?Ih(t):null}function Ih(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Ih(t);if(i!==null)return i;t=t.sibling}return null}var Th=e.unstable_scheduleCallback,kh=e.unstable_cancelCallback,Av=e.unstable_shouldYield,xv=e.unstable_requestPaint,Me=e.unstable_now,Ov=e.unstable_getCurrentPriorityLevel,ka=e.unstable_ImmediatePriority,Nh=e.unstable_UserBlockingPriority,io=e.unstable_NormalPriority,Dv=e.unstable_LowPriority,Rh=e.unstable_IdlePriority,so=null,Zt=null;function Lv(t){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(so,t,void 0,(t.current.flags&128)===128)}catch{}}var zt=Math.clz32?Math.clz32:Fv,Mv=Math.log,bv=Math.LN2;function Fv(t){return t>>>=0,t===0?32:31-(Mv(t)/bv|0)|0}var oo=64,lo=4194304;function ji(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ao(t,i){var o=t.pendingLanes;if(o===0)return 0;var a=0,d=t.suspendedLanes,h=t.pingedLanes,m=o&268435455;if(m!==0){var y=m&~d;y!==0?a=ji(y):(h&=m,h!==0&&(a=ji(h)))}else m=o&~d,m!==0?a=ji(m):h!==0&&(a=ji(h));if(a===0)return 0;if(i!==0&&i!==a&&!(i&d)&&(d=a&-a,h=i&-i,d>=h||d===16&&(h&4194240)!==0))return i;if(a&4&&(a|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=a;0<i;)o=31-zt(i),d=1<<o,a|=t[o],i&=~d;return a}function Uv(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jv(t,i){for(var o=t.suspendedLanes,a=t.pingedLanes,d=t.expirationTimes,h=t.pendingLanes;0<h;){var m=31-zt(h),y=1<<m,w=d[m];w===-1?(!(y&o)||y&a)&&(d[m]=Uv(y,i)):w<=i&&(t.expiredLanes|=y),h&=~y}}function Na(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ph(){var t=oo;return oo<<=1,!(oo&4194240)&&(oo=64),t}function Ra(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function zi(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-zt(i),t[i]=o}function zv(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var a=t.eventTimes;for(t=t.expirationTimes;0<o;){var d=31-zt(o),h=1<<d;i[d]=0,a[d]=-1,t[d]=-1,o&=~h}}function Pa(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var a=31-zt(o),d=1<<a;d&i|t[a]&i&&(t[a]|=i),o&=~d}}var pe=0;function Ah(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var xh,Aa,Oh,Dh,Lh,xa=!1,uo=[],Pn=null,An=null,xn=null,Wi=new Map,Bi=new Map,On=[],Wv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mh(t,i){switch(t){case"focusin":case"focusout":Pn=null;break;case"dragenter":case"dragleave":An=null;break;case"mouseover":case"mouseout":xn=null;break;case"pointerover":case"pointerout":Wi.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bi.delete(i.pointerId)}}function Vi(t,i,o,a,d,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:a,nativeEvent:h,targetContainers:[d]},i!==null&&(i=rs(i),i!==null&&Aa(i)),t):(t.eventSystemFlags|=a,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function Bv(t,i,o,a,d){switch(i){case"focusin":return Pn=Vi(Pn,t,i,o,a,d),!0;case"dragenter":return An=Vi(An,t,i,o,a,d),!0;case"mouseover":return xn=Vi(xn,t,i,o,a,d),!0;case"pointerover":var h=d.pointerId;return Wi.set(h,Vi(Wi.get(h)||null,t,i,o,a,d)),!0;case"gotpointercapture":return h=d.pointerId,Bi.set(h,Vi(Bi.get(h)||null,t,i,o,a,d)),!0}return!1}function bh(t){var i=cr(t.target);if(i!==null){var o=ur(i);if(o!==null){if(i=o.tag,i===13){if(i=Eh(o),i!==null){t.blockedOn=i,Lh(t.priority,function(){Oh(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function co(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Da(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var a=new o.constructor(o.type,o);wa=a,o.target.dispatchEvent(a),wa=null}else return i=rs(o),i!==null&&Aa(i),t.blockedOn=o,!1;i.shift()}return!0}function Fh(t,i,o){co(t)&&o.delete(i)}function Vv(){xa=!1,Pn!==null&&co(Pn)&&(Pn=null),An!==null&&co(An)&&(An=null),xn!==null&&co(xn)&&(xn=null),Wi.forEach(Fh),Bi.forEach(Fh)}function $i(t,i){t.blockedOn===i&&(t.blockedOn=null,xa||(xa=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Vv)))}function Hi(t){function i(d){return $i(d,t)}if(0<uo.length){$i(uo[0],t);for(var o=1;o<uo.length;o++){var a=uo[o];a.blockedOn===t&&(a.blockedOn=null)}}for(Pn!==null&&$i(Pn,t),An!==null&&$i(An,t),xn!==null&&$i(xn,t),Wi.forEach(i),Bi.forEach(i),o=0;o<On.length;o++)a=On[o],a.blockedOn===t&&(a.blockedOn=null);for(;0<On.length&&(o=On[0],o.blockedOn===null);)bh(o),o.blockedOn===null&&On.shift()}var Wr=le.ReactCurrentBatchConfig,ho=!0;function $v(t,i,o,a){var d=pe,h=Wr.transition;Wr.transition=null;try{pe=1,Oa(t,i,o,a)}finally{pe=d,Wr.transition=h}}function Hv(t,i,o,a){var d=pe,h=Wr.transition;Wr.transition=null;try{pe=4,Oa(t,i,o,a)}finally{pe=d,Wr.transition=h}}function Oa(t,i,o,a){if(ho){var d=Da(t,i,o,a);if(d===null)Qa(t,i,a,fo,o),Mh(t,a);else if(Bv(d,t,i,o,a))a.stopPropagation();else if(Mh(t,a),i&4&&-1<Wv.indexOf(t)){for(;d!==null;){var h=rs(d);if(h!==null&&xh(h),h=Da(t,i,o,a),h===null&&Qa(t,i,a,fo,o),h===d)break;d=h}d!==null&&a.stopPropagation()}else Qa(t,i,a,null,o)}}var fo=null;function Da(t,i,o,a){if(fo=null,t=Ea(a),t=cr(t),t!==null)if(i=ur(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Eh(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return fo=t,null}function Uh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ov()){case ka:return 1;case Nh:return 4;case io:case Dv:return 16;case Rh:return 536870912;default:return 16}default:return 16}}var Dn=null,La=null,po=null;function jh(){if(po)return po;var t,i=La,o=i.length,a,d="value"in Dn?Dn.value:Dn.textContent,h=d.length;for(t=0;t<o&&i[t]===d[t];t++);var m=o-t;for(a=1;a<=m&&i[o-a]===d[h-a];a++);return po=d.slice(t,1<a?1-a:void 0)}function mo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function go(){return!0}function zh(){return!1}function It(t){function i(o,a,d,h,m){this._reactName=o,this._targetInst=d,this.type=a,this.nativeEvent=h,this.target=m,this.currentTarget=null;for(var y in t)t.hasOwnProperty(y)&&(o=t[y],this[y]=o?o(h):h[y]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?go:zh,this.isPropagationStopped=zh,this}return W(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=go)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=go)},persist:function(){},isPersistent:go}),i}var Br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ma=It(Br),Gi=W({},Br,{view:0,detail:0}),Gv=It(Gi),ba,Fa,Ki,_o=W({},Gi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ja,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ki&&(Ki&&t.type==="mousemove"?(ba=t.screenX-Ki.screenX,Fa=t.screenY-Ki.screenY):Fa=ba=0,Ki=t),ba)},movementY:function(t){return"movementY"in t?t.movementY:Fa}}),Wh=It(_o),Kv=W({},_o,{dataTransfer:0}),qv=It(Kv),Yv=W({},Gi,{relatedTarget:0}),Ua=It(Yv),Qv=W({},Br,{animationName:0,elapsedTime:0,pseudoElement:0}),Xv=It(Qv),Jv=W({},Br,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Zv=It(Jv),ew=W({},Br,{data:0}),Bh=It(ew),tw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function iw(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=rw[t])?!!i[t]:!1}function ja(){return iw}var sw=W({},Gi,{key:function(t){if(t.key){var i=tw[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=mo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?nw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ja,charCode:function(t){return t.type==="keypress"?mo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?mo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ow=It(sw),lw=W({},_o,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vh=It(lw),aw=W({},Gi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ja}),uw=It(aw),cw=W({},Br,{propertyName:0,elapsedTime:0,pseudoElement:0}),dw=It(cw),hw=W({},_o,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),fw=It(hw),pw=[9,13,27,32],za=f&&"CompositionEvent"in window,qi=null;f&&"documentMode"in document&&(qi=document.documentMode);var mw=f&&"TextEvent"in window&&!qi,$h=f&&(!za||qi&&8<qi&&11>=qi),Hh=" ",Gh=!1;function Kh(t,i){switch(t){case"keyup":return pw.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Vr=!1;function gw(t,i){switch(t){case"compositionend":return qh(i);case"keypress":return i.which!==32?null:(Gh=!0,Hh);case"textInput":return t=i.data,t===Hh&&Gh?null:t;default:return null}}function _w(t,i){if(Vr)return t==="compositionend"||!za&&Kh(t,i)?(t=jh(),po=La=Dn=null,Vr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return $h&&i.locale!=="ko"?null:i.data;default:return null}}var yw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yh(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!yw[t.type]:i==="textarea"}function Qh(t,i,o,a){gh(a),i=So(i,"onChange"),0<i.length&&(o=new Ma("onChange","change",null,o,a),t.push({event:o,listeners:i}))}var Yi=null,Qi=null;function vw(t){mf(t,0)}function yo(t){var i=qr(t);if(ih(i))return t}function ww(t,i){if(t==="change")return i}var Xh=!1;if(f){var Wa;if(f){var Ba="oninput"in document;if(!Ba){var Jh=document.createElement("div");Jh.setAttribute("oninput","return;"),Ba=typeof Jh.oninput=="function"}Wa=Ba}else Wa=!1;Xh=Wa&&(!document.documentMode||9<document.documentMode)}function Zh(){Yi&&(Yi.detachEvent("onpropertychange",ef),Qi=Yi=null)}function ef(t){if(t.propertyName==="value"&&yo(Qi)){var i=[];Qh(i,Qi,t,Ea(t)),wh(vw,i)}}function Ew(t,i,o){t==="focusin"?(Zh(),Yi=i,Qi=o,Yi.attachEvent("onpropertychange",ef)):t==="focusout"&&Zh()}function Sw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yo(Qi)}function Cw(t,i){if(t==="click")return yo(i)}function Iw(t,i){if(t==="input"||t==="change")return yo(i)}function Tw(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Wt=typeof Object.is=="function"?Object.is:Tw;function Xi(t,i){if(Wt(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),a=Object.keys(i);if(o.length!==a.length)return!1;for(a=0;a<o.length;a++){var d=o[a];if(!p.call(i,d)||!Wt(t[d],i[d]))return!1}return!0}function tf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function nf(t,i){var o=tf(t);t=0;for(var a;o;){if(o.nodeType===3){if(a=t+o.textContent.length,t<=i&&a>=i)return{node:o,offset:i-t};t=a}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=tf(o)}}function rf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?rf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function sf(){for(var t=window,i=eo();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=eo(t.document)}return i}function Va(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function kw(t){var i=sf(),o=t.focusedElem,a=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&rf(o.ownerDocument.documentElement,o)){if(a!==null&&Va(o)){if(i=a.start,t=a.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=o.textContent.length,h=Math.min(a.start,d);a=a.end===void 0?h:Math.min(a.end,d),!t.extend&&h>a&&(d=a,a=h,h=d),d=nf(o,h);var m=nf(o,a);d&&m&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==m.node||t.focusOffset!==m.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),h>a?(t.addRange(i),t.extend(m.node,m.offset)):(i.setEnd(m.node,m.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Nw=f&&"documentMode"in document&&11>=document.documentMode,$r=null,$a=null,Ji=null,Ha=!1;function of(t,i,o){var a=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Ha||$r==null||$r!==eo(a)||(a=$r,"selectionStart"in a&&Va(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ji&&Xi(Ji,a)||(Ji=a,a=So($a,"onSelect"),0<a.length&&(i=new Ma("onSelect","select",null,i,o),t.push({event:i,listeners:a}),i.target=$r)))}function vo(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var Hr={animationend:vo("Animation","AnimationEnd"),animationiteration:vo("Animation","AnimationIteration"),animationstart:vo("Animation","AnimationStart"),transitionend:vo("Transition","TransitionEnd")},Ga={},lf={};f&&(lf=document.createElement("div").style,"AnimationEvent"in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),"TransitionEvent"in window||delete Hr.transitionend.transition);function wo(t){if(Ga[t])return Ga[t];if(!Hr[t])return t;var i=Hr[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in lf)return Ga[t]=i[o];return t}var af=wo("animationend"),uf=wo("animationiteration"),cf=wo("animationstart"),df=wo("transitionend"),hf=new Map,ff="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ln(t,i){hf.set(t,i),u(i,[t])}for(var Ka=0;Ka<ff.length;Ka++){var qa=ff[Ka],Rw=qa.toLowerCase(),Pw=qa[0].toUpperCase()+qa.slice(1);Ln(Rw,"on"+Pw)}Ln(af,"onAnimationEnd"),Ln(uf,"onAnimationIteration"),Ln(cf,"onAnimationStart"),Ln("dblclick","onDoubleClick"),Ln("focusin","onFocus"),Ln("focusout","onBlur"),Ln(df,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Aw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zi));function pf(t,i,o){var a=t.type||"unknown-event";t.currentTarget=o,Rv(a,i,void 0,t),t.currentTarget=null}function mf(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var a=t[o],d=a.event;a=a.listeners;e:{var h=void 0;if(i)for(var m=a.length-1;0<=m;m--){var y=a[m],w=y.instance,N=y.currentTarget;if(y=y.listener,w!==h&&d.isPropagationStopped())break e;pf(d,y,N),h=w}else for(m=0;m<a.length;m++){if(y=a[m],w=y.instance,N=y.currentTarget,y=y.listener,w!==h&&d.isPropagationStopped())break e;pf(d,y,N),h=w}}}if(ro)throw t=Ta,ro=!1,Ta=null,t}function Te(t,i){var o=i[nu];o===void 0&&(o=i[nu]=new Set);var a=t+"__bubble";o.has(a)||(gf(i,t,2,!1),o.add(a))}function Ya(t,i,o){var a=0;i&&(a|=4),gf(o,t,a,i)}var Eo="_reactListening"+Math.random().toString(36).slice(2);function es(t){if(!t[Eo]){t[Eo]=!0,s.forEach(function(o){o!=="selectionchange"&&(Aw.has(o)||Ya(o,!1,t),Ya(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Eo]||(i[Eo]=!0,Ya("selectionchange",!1,i))}}function gf(t,i,o,a){switch(Uh(i)){case 1:var d=$v;break;case 4:d=Hv;break;default:d=Oa}o=d.bind(null,i,o,t),d=void 0,!Ia||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),a?d!==void 0?t.addEventListener(i,o,{capture:!0,passive:d}):t.addEventListener(i,o,!0):d!==void 0?t.addEventListener(i,o,{passive:d}):t.addEventListener(i,o,!1)}function Qa(t,i,o,a,d){var h=a;if(!(i&1)&&!(i&2)&&a!==null)e:for(;;){if(a===null)return;var m=a.tag;if(m===3||m===4){var y=a.stateNode.containerInfo;if(y===d||y.nodeType===8&&y.parentNode===d)break;if(m===4)for(m=a.return;m!==null;){var w=m.tag;if((w===3||w===4)&&(w=m.stateNode.containerInfo,w===d||w.nodeType===8&&w.parentNode===d))return;m=m.return}for(;y!==null;){if(m=cr(y),m===null)return;if(w=m.tag,w===5||w===6){a=h=m;continue e}y=y.parentNode}}a=a.return}wh(function(){var N=h,x=Ea(o),O=[];e:{var P=hf.get(t);if(P!==void 0){var U=Ma,B=t;switch(t){case"keypress":if(mo(o)===0)break e;case"keydown":case"keyup":U=ow;break;case"focusin":B="focus",U=Ua;break;case"focusout":B="blur",U=Ua;break;case"beforeblur":case"afterblur":U=Ua;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=Wh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=qv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=uw;break;case af:case uf:case cf:U=Xv;break;case df:U=dw;break;case"scroll":U=Gv;break;case"wheel":U=fw;break;case"copy":case"cut":case"paste":U=Zv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=Vh}var V=(i&4)!==0,be=!V&&t==="scroll",I=V?P!==null?P+"Capture":null:P;V=[];for(var E=N,T;E!==null;){T=E;var D=T.stateNode;if(T.tag===5&&D!==null&&(T=D,I!==null&&(D=bi(E,I),D!=null&&V.push(ts(E,D,T)))),be)break;E=E.return}0<V.length&&(P=new U(P,B,null,o,x),O.push({event:P,listeners:V}))}}if(!(i&7)){e:{if(P=t==="mouseover"||t==="pointerover",U=t==="mouseout"||t==="pointerout",P&&o!==wa&&(B=o.relatedTarget||o.fromElement)&&(cr(B)||B[cn]))break e;if((U||P)&&(P=x.window===x?x:(P=x.ownerDocument)?P.defaultView||P.parentWindow:window,U?(B=o.relatedTarget||o.toElement,U=N,B=B?cr(B):null,B!==null&&(be=ur(B),B!==be||B.tag!==5&&B.tag!==6)&&(B=null)):(U=null,B=N),U!==B)){if(V=Wh,D="onMouseLeave",I="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(V=Vh,D="onPointerLeave",I="onPointerEnter",E="pointer"),be=U==null?P:qr(U),T=B==null?P:qr(B),P=new V(D,E+"leave",U,o,x),P.target=be,P.relatedTarget=T,D=null,cr(x)===N&&(V=new V(I,E+"enter",B,o,x),V.target=T,V.relatedTarget=be,D=V),be=D,U&&B)t:{for(V=U,I=B,E=0,T=V;T;T=Gr(T))E++;for(T=0,D=I;D;D=Gr(D))T++;for(;0<E-T;)V=Gr(V),E--;for(;0<T-E;)I=Gr(I),T--;for(;E--;){if(V===I||I!==null&&V===I.alternate)break t;V=Gr(V),I=Gr(I)}V=null}else V=null;U!==null&&_f(O,P,U,V,!1),B!==null&&be!==null&&_f(O,be,B,V,!0)}}e:{if(P=N?qr(N):window,U=P.nodeName&&P.nodeName.toLowerCase(),U==="select"||U==="input"&&P.type==="file")var $=ww;else if(Yh(P))if(Xh)$=Iw;else{$=Sw;var H=Ew}else(U=P.nodeName)&&U.toLowerCase()==="input"&&(P.type==="checkbox"||P.type==="radio")&&($=Cw);if($&&($=$(t,N))){Qh(O,$,o,x);break e}H&&H(t,P,N),t==="focusout"&&(H=P._wrapperState)&&H.controlled&&P.type==="number"&&ma(P,"number",P.value)}switch(H=N?qr(N):window,t){case"focusin":(Yh(H)||H.contentEditable==="true")&&($r=H,$a=N,Ji=null);break;case"focusout":Ji=$a=$r=null;break;case"mousedown":Ha=!0;break;case"contextmenu":case"mouseup":case"dragend":Ha=!1,of(O,o,x);break;case"selectionchange":if(Nw)break;case"keydown":case"keyup":of(O,o,x)}var G;if(za)e:{switch(t){case"compositionstart":var Y="onCompositionStart";break e;case"compositionend":Y="onCompositionEnd";break e;case"compositionupdate":Y="onCompositionUpdate";break e}Y=void 0}else Vr?Kh(t,o)&&(Y="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(Y="onCompositionStart");Y&&($h&&o.locale!=="ko"&&(Vr||Y!=="onCompositionStart"?Y==="onCompositionEnd"&&Vr&&(G=jh()):(Dn=x,La="value"in Dn?Dn.value:Dn.textContent,Vr=!0)),H=So(N,Y),0<H.length&&(Y=new Bh(Y,t,null,o,x),O.push({event:Y,listeners:H}),G?Y.data=G:(G=qh(o),G!==null&&(Y.data=G)))),(G=mw?gw(t,o):_w(t,o))&&(N=So(N,"onBeforeInput"),0<N.length&&(x=new Bh("onBeforeInput","beforeinput",null,o,x),O.push({event:x,listeners:N}),x.data=G))}mf(O,i)})}function ts(t,i,o){return{instance:t,listener:i,currentTarget:o}}function So(t,i){for(var o=i+"Capture",a=[];t!==null;){var d=t,h=d.stateNode;d.tag===5&&h!==null&&(d=h,h=bi(t,o),h!=null&&a.unshift(ts(t,h,d)),h=bi(t,i),h!=null&&a.push(ts(t,h,d))),t=t.return}return a}function Gr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function _f(t,i,o,a,d){for(var h=i._reactName,m=[];o!==null&&o!==a;){var y=o,w=y.alternate,N=y.stateNode;if(w!==null&&w===a)break;y.tag===5&&N!==null&&(y=N,d?(w=bi(o,h),w!=null&&m.unshift(ts(o,w,y))):d||(w=bi(o,h),w!=null&&m.push(ts(o,w,y)))),o=o.return}m.length!==0&&t.push({event:i,listeners:m})}var xw=/\r\n?/g,Ow=/\u0000|\uFFFD/g;function yf(t){return(typeof t=="string"?t:""+t).replace(xw,`
`).replace(Ow,"")}function Co(t,i,o){if(i=yf(i),yf(t)!==i&&o)throw Error(n(425))}function Io(){}var Xa=null,Ja=null;function Za(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var eu=typeof setTimeout=="function"?setTimeout:void 0,Dw=typeof clearTimeout=="function"?clearTimeout:void 0,vf=typeof Promise=="function"?Promise:void 0,Lw=typeof queueMicrotask=="function"?queueMicrotask:typeof vf<"u"?function(t){return vf.resolve(null).then(t).catch(Mw)}:eu;function Mw(t){setTimeout(function(){throw t})}function tu(t,i){var o=i,a=0;do{var d=o.nextSibling;if(t.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(a===0){t.removeChild(d),Hi(i);return}a--}else o!=="$"&&o!=="$?"&&o!=="$!"||a++;o=d}while(o);Hi(i)}function Mn(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function wf(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var Kr=Math.random().toString(36).slice(2),en="__reactFiber$"+Kr,ns="__reactProps$"+Kr,cn="__reactContainer$"+Kr,nu="__reactEvents$"+Kr,bw="__reactListeners$"+Kr,Fw="__reactHandles$"+Kr;function cr(t){var i=t[en];if(i)return i;for(var o=t.parentNode;o;){if(i=o[cn]||o[en]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=wf(t);t!==null;){if(o=t[en])return o;t=wf(t)}return i}t=o,o=t.parentNode}return null}function rs(t){return t=t[en]||t[cn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function qr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function To(t){return t[ns]||null}var ru=[],Yr=-1;function bn(t){return{current:t}}function ke(t){0>Yr||(t.current=ru[Yr],ru[Yr]=null,Yr--)}function Se(t,i){Yr++,ru[Yr]=t.current,t.current=i}var Fn={},Ze=bn(Fn),dt=bn(!1),dr=Fn;function Qr(t,i){var o=t.type.contextTypes;if(!o)return Fn;var a=t.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===i)return a.__reactInternalMemoizedMaskedChildContext;var d={},h;for(h in o)d[h]=i[h];return a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function ht(t){return t=t.childContextTypes,t!=null}function ko(){ke(dt),ke(Ze)}function Ef(t,i,o){if(Ze.current!==Fn)throw Error(n(168));Se(Ze,i),Se(dt,o)}function Sf(t,i,o){var a=t.stateNode;if(i=i.childContextTypes,typeof a.getChildContext!="function")return o;a=a.getChildContext();for(var d in a)if(!(d in i))throw Error(n(108,Ee(t)||"Unknown",d));return W({},o,a)}function No(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Fn,dr=Ze.current,Se(Ze,t),Se(dt,dt.current),!0}function Cf(t,i,o){var a=t.stateNode;if(!a)throw Error(n(169));o?(t=Sf(t,i,dr),a.__reactInternalMemoizedMergedChildContext=t,ke(dt),ke(Ze),Se(Ze,t)):ke(dt),Se(dt,o)}var dn=null,Ro=!1,iu=!1;function If(t){dn===null?dn=[t]:dn.push(t)}function Uw(t){Ro=!0,If(t)}function Un(){if(!iu&&dn!==null){iu=!0;var t=0,i=pe;try{var o=dn;for(pe=1;t<o.length;t++){var a=o[t];do a=a(!0);while(a!==null)}dn=null,Ro=!1}catch(d){throw dn!==null&&(dn=dn.slice(t+1)),Th(ka,Un),d}finally{pe=i,iu=!1}}return null}var Xr=[],Jr=0,Po=null,Ao=0,At=[],xt=0,hr=null,hn=1,fn="";function fr(t,i){Xr[Jr++]=Ao,Xr[Jr++]=Po,Po=t,Ao=i}function Tf(t,i,o){At[xt++]=hn,At[xt++]=fn,At[xt++]=hr,hr=t;var a=hn;t=fn;var d=32-zt(a)-1;a&=~(1<<d),o+=1;var h=32-zt(i)+d;if(30<h){var m=d-d%5;h=(a&(1<<m)-1).toString(32),a>>=m,d-=m,hn=1<<32-zt(i)+d|o<<d|a,fn=h+t}else hn=1<<h|o<<d|a,fn=t}function su(t){t.return!==null&&(fr(t,1),Tf(t,1,0))}function ou(t){for(;t===Po;)Po=Xr[--Jr],Xr[Jr]=null,Ao=Xr[--Jr],Xr[Jr]=null;for(;t===hr;)hr=At[--xt],At[xt]=null,fn=At[--xt],At[xt]=null,hn=At[--xt],At[xt]=null}var Tt=null,kt=null,Re=!1,Bt=null;function kf(t,i){var o=Mt(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Nf(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Tt=t,kt=Mn(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Tt=t,kt=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=hr!==null?{id:hn,overflow:fn}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Mt(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Tt=t,kt=null,!0):!1;default:return!1}}function lu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function au(t){if(Re){var i=kt;if(i){var o=i;if(!Nf(t,i)){if(lu(t))throw Error(n(418));i=Mn(o.nextSibling);var a=Tt;i&&Nf(t,i)?kf(a,o):(t.flags=t.flags&-4097|2,Re=!1,Tt=t)}}else{if(lu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Re=!1,Tt=t}}}function Rf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tt=t}function xo(t){if(t!==Tt)return!1;if(!Re)return Rf(t),Re=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Za(t.type,t.memoizedProps)),i&&(i=kt)){if(lu(t))throw Pf(),Error(n(418));for(;i;)kf(t,i),i=Mn(i.nextSibling)}if(Rf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){kt=Mn(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}kt=null}}else kt=Tt?Mn(t.stateNode.nextSibling):null;return!0}function Pf(){for(var t=kt;t;)t=Mn(t.nextSibling)}function Zr(){kt=Tt=null,Re=!1}function uu(t){Bt===null?Bt=[t]:Bt.push(t)}var jw=le.ReactCurrentBatchConfig;function is(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var a=o.stateNode}if(!a)throw Error(n(147,t));var d=a,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(m){var y=d.refs;m===null?delete y[h]:y[h]=m},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Oo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Af(t){var i=t._init;return i(t._payload)}function xf(t){function i(I,E){if(t){var T=I.deletions;T===null?(I.deletions=[E],I.flags|=16):T.push(E)}}function o(I,E){if(!t)return null;for(;E!==null;)i(I,E),E=E.sibling;return null}function a(I,E){for(I=new Map;E!==null;)E.key!==null?I.set(E.key,E):I.set(E.index,E),E=E.sibling;return I}function d(I,E){return I=Gn(I,E),I.index=0,I.sibling=null,I}function h(I,E,T){return I.index=T,t?(T=I.alternate,T!==null?(T=T.index,T<E?(I.flags|=2,E):T):(I.flags|=2,E)):(I.flags|=1048576,E)}function m(I){return t&&I.alternate===null&&(I.flags|=2),I}function y(I,E,T,D){return E===null||E.tag!==6?(E=ec(T,I.mode,D),E.return=I,E):(E=d(E,T),E.return=I,E)}function w(I,E,T,D){var $=T.type;return $===Q?x(I,E,T.props.children,D,T.key):E!==null&&(E.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===ct&&Af($)===E.type)?(D=d(E,T.props),D.ref=is(I,E,T),D.return=I,D):(D=nl(T.type,T.key,T.props,null,I.mode,D),D.ref=is(I,E,T),D.return=I,D)}function N(I,E,T,D){return E===null||E.tag!==4||E.stateNode.containerInfo!==T.containerInfo||E.stateNode.implementation!==T.implementation?(E=tc(T,I.mode,D),E.return=I,E):(E=d(E,T.children||[]),E.return=I,E)}function x(I,E,T,D,$){return E===null||E.tag!==7?(E=Er(T,I.mode,D,$),E.return=I,E):(E=d(E,T),E.return=I,E)}function O(I,E,T){if(typeof E=="string"&&E!==""||typeof E=="number")return E=ec(""+E,I.mode,T),E.return=I,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ue:return T=nl(E.type,E.key,E.props,null,I.mode,T),T.ref=is(I,null,E),T.return=I,T;case Z:return E=tc(E,I.mode,T),E.return=I,E;case ct:var D=E._init;return O(I,D(E._payload),T)}if(Di(E)||K(E))return E=Er(E,I.mode,T,null),E.return=I,E;Oo(I,E)}return null}function P(I,E,T,D){var $=E!==null?E.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return $!==null?null:y(I,E,""+T,D);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Ue:return T.key===$?w(I,E,T,D):null;case Z:return T.key===$?N(I,E,T,D):null;case ct:return $=T._init,P(I,E,$(T._payload),D)}if(Di(T)||K(T))return $!==null?null:x(I,E,T,D,null);Oo(I,T)}return null}function U(I,E,T,D,$){if(typeof D=="string"&&D!==""||typeof D=="number")return I=I.get(T)||null,y(E,I,""+D,$);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Ue:return I=I.get(D.key===null?T:D.key)||null,w(E,I,D,$);case Z:return I=I.get(D.key===null?T:D.key)||null,N(E,I,D,$);case ct:var H=D._init;return U(I,E,T,H(D._payload),$)}if(Di(D)||K(D))return I=I.get(T)||null,x(E,I,D,$,null);Oo(E,D)}return null}function B(I,E,T,D){for(var $=null,H=null,G=E,Y=E=0,Ge=null;G!==null&&Y<T.length;Y++){G.index>Y?(Ge=G,G=null):Ge=G.sibling;var ce=P(I,G,T[Y],D);if(ce===null){G===null&&(G=Ge);break}t&&G&&ce.alternate===null&&i(I,G),E=h(ce,E,Y),H===null?$=ce:H.sibling=ce,H=ce,G=Ge}if(Y===T.length)return o(I,G),Re&&fr(I,Y),$;if(G===null){for(;Y<T.length;Y++)G=O(I,T[Y],D),G!==null&&(E=h(G,E,Y),H===null?$=G:H.sibling=G,H=G);return Re&&fr(I,Y),$}for(G=a(I,G);Y<T.length;Y++)Ge=U(G,I,Y,T[Y],D),Ge!==null&&(t&&Ge.alternate!==null&&G.delete(Ge.key===null?Y:Ge.key),E=h(Ge,E,Y),H===null?$=Ge:H.sibling=Ge,H=Ge);return t&&G.forEach(function(Kn){return i(I,Kn)}),Re&&fr(I,Y),$}function V(I,E,T,D){var $=K(T);if(typeof $!="function")throw Error(n(150));if(T=$.call(T),T==null)throw Error(n(151));for(var H=$=null,G=E,Y=E=0,Ge=null,ce=T.next();G!==null&&!ce.done;Y++,ce=T.next()){G.index>Y?(Ge=G,G=null):Ge=G.sibling;var Kn=P(I,G,ce.value,D);if(Kn===null){G===null&&(G=Ge);break}t&&G&&Kn.alternate===null&&i(I,G),E=h(Kn,E,Y),H===null?$=Kn:H.sibling=Kn,H=Kn,G=Ge}if(ce.done)return o(I,G),Re&&fr(I,Y),$;if(G===null){for(;!ce.done;Y++,ce=T.next())ce=O(I,ce.value,D),ce!==null&&(E=h(ce,E,Y),H===null?$=ce:H.sibling=ce,H=ce);return Re&&fr(I,Y),$}for(G=a(I,G);!ce.done;Y++,ce=T.next())ce=U(G,I,Y,ce.value,D),ce!==null&&(t&&ce.alternate!==null&&G.delete(ce.key===null?Y:ce.key),E=h(ce,E,Y),H===null?$=ce:H.sibling=ce,H=ce);return t&&G.forEach(function(y0){return i(I,y0)}),Re&&fr(I,Y),$}function be(I,E,T,D){if(typeof T=="object"&&T!==null&&T.type===Q&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case Ue:e:{for(var $=T.key,H=E;H!==null;){if(H.key===$){if($=T.type,$===Q){if(H.tag===7){o(I,H.sibling),E=d(H,T.props.children),E.return=I,I=E;break e}}else if(H.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===ct&&Af($)===H.type){o(I,H.sibling),E=d(H,T.props),E.ref=is(I,H,T),E.return=I,I=E;break e}o(I,H);break}else i(I,H);H=H.sibling}T.type===Q?(E=Er(T.props.children,I.mode,D,T.key),E.return=I,I=E):(D=nl(T.type,T.key,T.props,null,I.mode,D),D.ref=is(I,E,T),D.return=I,I=D)}return m(I);case Z:e:{for(H=T.key;E!==null;){if(E.key===H)if(E.tag===4&&E.stateNode.containerInfo===T.containerInfo&&E.stateNode.implementation===T.implementation){o(I,E.sibling),E=d(E,T.children||[]),E.return=I,I=E;break e}else{o(I,E);break}else i(I,E);E=E.sibling}E=tc(T,I.mode,D),E.return=I,I=E}return m(I);case ct:return H=T._init,be(I,E,H(T._payload),D)}if(Di(T))return B(I,E,T,D);if(K(T))return V(I,E,T,D);Oo(I,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,E!==null&&E.tag===6?(o(I,E.sibling),E=d(E,T),E.return=I,I=E):(o(I,E),E=ec(T,I.mode,D),E.return=I,I=E),m(I)):o(I,E)}return be}var ei=xf(!0),Of=xf(!1),Do=bn(null),Lo=null,ti=null,cu=null;function du(){cu=ti=Lo=null}function hu(t){var i=Do.current;ke(Do),t._currentValue=i}function fu(t,i,o){for(;t!==null;){var a=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,a!==null&&(a.childLanes|=i)):a!==null&&(a.childLanes&i)!==i&&(a.childLanes|=i),t===o)break;t=t.return}}function ni(t,i){Lo=t,cu=ti=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&i&&(ft=!0),t.firstContext=null)}function Ot(t){var i=t._currentValue;if(cu!==t)if(t={context:t,memoizedValue:i,next:null},ti===null){if(Lo===null)throw Error(n(308));ti=t,Lo.dependencies={lanes:0,firstContext:t}}else ti=ti.next=t;return i}var pr=null;function pu(t){pr===null?pr=[t]:pr.push(t)}function Df(t,i,o,a){var d=i.interleaved;return d===null?(o.next=o,pu(i)):(o.next=d.next,d.next=o),i.interleaved=o,pn(t,a)}function pn(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var jn=!1;function mu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function mn(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function zn(t,i,o){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,oe&2){var d=a.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),a.pending=i,pn(t,o)}return d=a.interleaved,d===null?(i.next=i,pu(a)):(i.next=d.next,d.next=i),a.interleaved=i,pn(t,o)}function Mo(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var a=i.lanes;a&=t.pendingLanes,o|=a,i.lanes=o,Pa(t,o)}}function Mf(t,i){var o=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,o===a)){var d=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var m={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?d=h=m:h=h.next=m,o=o.next}while(o!==null);h===null?d=h=i:h=h.next=i}else d=h=i;o={baseState:a.baseState,firstBaseUpdate:d,lastBaseUpdate:h,shared:a.shared,effects:a.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function bo(t,i,o,a){var d=t.updateQueue;jn=!1;var h=d.firstBaseUpdate,m=d.lastBaseUpdate,y=d.shared.pending;if(y!==null){d.shared.pending=null;var w=y,N=w.next;w.next=null,m===null?h=N:m.next=N,m=w;var x=t.alternate;x!==null&&(x=x.updateQueue,y=x.lastBaseUpdate,y!==m&&(y===null?x.firstBaseUpdate=N:y.next=N,x.lastBaseUpdate=w))}if(h!==null){var O=d.baseState;m=0,x=N=w=null,y=h;do{var P=y.lane,U=y.eventTime;if((a&P)===P){x!==null&&(x=x.next={eventTime:U,lane:0,tag:y.tag,payload:y.payload,callback:y.callback,next:null});e:{var B=t,V=y;switch(P=i,U=o,V.tag){case 1:if(B=V.payload,typeof B=="function"){O=B.call(U,O,P);break e}O=B;break e;case 3:B.flags=B.flags&-65537|128;case 0:if(B=V.payload,P=typeof B=="function"?B.call(U,O,P):B,P==null)break e;O=W({},O,P);break e;case 2:jn=!0}}y.callback!==null&&y.lane!==0&&(t.flags|=64,P=d.effects,P===null?d.effects=[y]:P.push(y))}else U={eventTime:U,lane:P,tag:y.tag,payload:y.payload,callback:y.callback,next:null},x===null?(N=x=U,w=O):x=x.next=U,m|=P;if(y=y.next,y===null){if(y=d.shared.pending,y===null)break;P=y,y=P.next,P.next=null,d.lastBaseUpdate=P,d.shared.pending=null}}while(!0);if(x===null&&(w=O),d.baseState=w,d.firstBaseUpdate=N,d.lastBaseUpdate=x,i=d.shared.interleaved,i!==null){d=i;do m|=d.lane,d=d.next;while(d!==i)}else h===null&&(d.shared.lanes=0);_r|=m,t.lanes=m,t.memoizedState=O}}function bf(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var a=t[i],d=a.callback;if(d!==null){if(a.callback=null,a=o,typeof d!="function")throw Error(n(191,d));d.call(a)}}}var ss={},tn=bn(ss),os=bn(ss),ls=bn(ss);function mr(t){if(t===ss)throw Error(n(174));return t}function gu(t,i){switch(Se(ls,i),Se(os,t),Se(tn,ss),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:_a(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=_a(i,t)}ke(tn),Se(tn,i)}function ri(){ke(tn),ke(os),ke(ls)}function Ff(t){mr(ls.current);var i=mr(tn.current),o=_a(i,t.type);i!==o&&(Se(os,t),Se(tn,o))}function _u(t){os.current===t&&(ke(tn),ke(os))}var Pe=bn(0);function Fo(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var yu=[];function vu(){for(var t=0;t<yu.length;t++)yu[t]._workInProgressVersionPrimary=null;yu.length=0}var Uo=le.ReactCurrentDispatcher,wu=le.ReactCurrentBatchConfig,gr=0,Ae=null,je=null,$e=null,jo=!1,as=!1,us=0,zw=0;function et(){throw Error(n(321))}function Eu(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Wt(t[o],i[o]))return!1;return!0}function Su(t,i,o,a,d,h){if(gr=h,Ae=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Uo.current=t===null||t.memoizedState===null?$w:Hw,t=o(a,d),as){h=0;do{if(as=!1,us=0,25<=h)throw Error(n(301));h+=1,$e=je=null,i.updateQueue=null,Uo.current=Gw,t=o(a,d)}while(as)}if(Uo.current=Bo,i=je!==null&&je.next!==null,gr=0,$e=je=Ae=null,jo=!1,i)throw Error(n(300));return t}function Cu(){var t=us!==0;return us=0,t}function nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?Ae.memoizedState=$e=t:$e=$e.next=t,$e}function Dt(){if(je===null){var t=Ae.alternate;t=t!==null?t.memoizedState:null}else t=je.next;var i=$e===null?Ae.memoizedState:$e.next;if(i!==null)$e=i,je=t;else{if(t===null)throw Error(n(310));je=t,t={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},$e===null?Ae.memoizedState=$e=t:$e=$e.next=t}return $e}function cs(t,i){return typeof i=="function"?i(t):i}function Iu(t){var i=Dt(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=je,d=a.baseQueue,h=o.pending;if(h!==null){if(d!==null){var m=d.next;d.next=h.next,h.next=m}a.baseQueue=d=h,o.pending=null}if(d!==null){h=d.next,a=a.baseState;var y=m=null,w=null,N=h;do{var x=N.lane;if((gr&x)===x)w!==null&&(w=w.next={lane:0,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),a=N.hasEagerState?N.eagerState:t(a,N.action);else{var O={lane:x,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null};w===null?(y=w=O,m=a):w=w.next=O,Ae.lanes|=x,_r|=x}N=N.next}while(N!==null&&N!==h);w===null?m=a:w.next=y,Wt(a,i.memoizedState)||(ft=!0),i.memoizedState=a,i.baseState=m,i.baseQueue=w,o.lastRenderedState=a}if(t=o.interleaved,t!==null){d=t;do h=d.lane,Ae.lanes|=h,_r|=h,d=d.next;while(d!==t)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Tu(t){var i=Dt(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=o.dispatch,d=o.pending,h=i.memoizedState;if(d!==null){o.pending=null;var m=d=d.next;do h=t(h,m.action),m=m.next;while(m!==d);Wt(h,i.memoizedState)||(ft=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,a]}function Uf(){}function jf(t,i){var o=Ae,a=Dt(),d=i(),h=!Wt(a.memoizedState,d);if(h&&(a.memoizedState=d,ft=!0),a=a.queue,ku(Bf.bind(null,o,a,t),[t]),a.getSnapshot!==i||h||$e!==null&&$e.memoizedState.tag&1){if(o.flags|=2048,ds(9,Wf.bind(null,o,a,d,i),void 0,null),He===null)throw Error(n(349));gr&30||zf(o,i,d)}return d}function zf(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Ae.updateQueue,i===null?(i={lastEffect:null,stores:null},Ae.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Wf(t,i,o,a){i.value=o,i.getSnapshot=a,Vf(i)&&$f(t)}function Bf(t,i,o){return o(function(){Vf(i)&&$f(t)})}function Vf(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Wt(t,o)}catch{return!0}}function $f(t){var i=pn(t,1);i!==null&&Gt(i,t,1,-1)}function Hf(t){var i=nn();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cs,lastRenderedState:t},i.queue=t,t=t.dispatch=Vw.bind(null,Ae,t),[i.memoizedState,t]}function ds(t,i,o,a){return t={tag:t,create:i,destroy:o,deps:a,next:null},i=Ae.updateQueue,i===null?(i={lastEffect:null,stores:null},Ae.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(a=o.next,o.next=t,t.next=a,i.lastEffect=t)),t}function Gf(){return Dt().memoizedState}function zo(t,i,o,a){var d=nn();Ae.flags|=t,d.memoizedState=ds(1|i,o,void 0,a===void 0?null:a)}function Wo(t,i,o,a){var d=Dt();a=a===void 0?null:a;var h=void 0;if(je!==null){var m=je.memoizedState;if(h=m.destroy,a!==null&&Eu(a,m.deps)){d.memoizedState=ds(i,o,h,a);return}}Ae.flags|=t,d.memoizedState=ds(1|i,o,h,a)}function Kf(t,i){return zo(8390656,8,t,i)}function ku(t,i){return Wo(2048,8,t,i)}function qf(t,i){return Wo(4,2,t,i)}function Yf(t,i){return Wo(4,4,t,i)}function Qf(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Xf(t,i,o){return o=o!=null?o.concat([t]):null,Wo(4,4,Qf.bind(null,i,t),o)}function Nu(){}function Jf(t,i){var o=Dt();i=i===void 0?null:i;var a=o.memoizedState;return a!==null&&i!==null&&Eu(i,a[1])?a[0]:(o.memoizedState=[t,i],t)}function Zf(t,i){var o=Dt();i=i===void 0?null:i;var a=o.memoizedState;return a!==null&&i!==null&&Eu(i,a[1])?a[0]:(t=t(),o.memoizedState=[t,i],t)}function ep(t,i,o){return gr&21?(Wt(o,i)||(o=Ph(),Ae.lanes|=o,_r|=o,t.baseState=!0),i):(t.baseState&&(t.baseState=!1,ft=!0),t.memoizedState=o)}function Ww(t,i){var o=pe;pe=o!==0&&4>o?o:4,t(!0);var a=wu.transition;wu.transition={};try{t(!1),i()}finally{pe=o,wu.transition=a}}function tp(){return Dt().memoizedState}function Bw(t,i,o){var a=$n(t);if(o={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null},np(t))rp(i,o);else if(o=Df(t,i,o,a),o!==null){var d=st();Gt(o,t,a,d),ip(o,i,a)}}function Vw(t,i,o){var a=$n(t),d={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null};if(np(t))rp(i,d);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var m=i.lastRenderedState,y=h(m,o);if(d.hasEagerState=!0,d.eagerState=y,Wt(y,m)){var w=i.interleaved;w===null?(d.next=d,pu(i)):(d.next=w.next,w.next=d),i.interleaved=d;return}}catch{}finally{}o=Df(t,i,d,a),o!==null&&(d=st(),Gt(o,t,a,d),ip(o,i,a))}}function np(t){var i=t.alternate;return t===Ae||i!==null&&i===Ae}function rp(t,i){as=jo=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function ip(t,i,o){if(o&4194240){var a=i.lanes;a&=t.pendingLanes,o|=a,i.lanes=o,Pa(t,o)}}var Bo={readContext:Ot,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useInsertionEffect:et,useLayoutEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useMutableSource:et,useSyncExternalStore:et,useId:et,unstable_isNewReconciler:!1},$w={readContext:Ot,useCallback:function(t,i){return nn().memoizedState=[t,i===void 0?null:i],t},useContext:Ot,useEffect:Kf,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,zo(4194308,4,Qf.bind(null,i,t),o)},useLayoutEffect:function(t,i){return zo(4194308,4,t,i)},useInsertionEffect:function(t,i){return zo(4,2,t,i)},useMemo:function(t,i){var o=nn();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var a=nn();return i=o!==void 0?o(i):i,a.memoizedState=a.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},a.queue=t,t=t.dispatch=Bw.bind(null,Ae,t),[a.memoizedState,t]},useRef:function(t){var i=nn();return t={current:t},i.memoizedState=t},useState:Hf,useDebugValue:Nu,useDeferredValue:function(t){return nn().memoizedState=t},useTransition:function(){var t=Hf(!1),i=t[0];return t=Ww.bind(null,t[1]),nn().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var a=Ae,d=nn();if(Re){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),He===null)throw Error(n(349));gr&30||zf(a,i,o)}d.memoizedState=o;var h={value:o,getSnapshot:i};return d.queue=h,Kf(Bf.bind(null,a,h,t),[t]),a.flags|=2048,ds(9,Wf.bind(null,a,h,o,i),void 0,null),o},useId:function(){var t=nn(),i=He.identifierPrefix;if(Re){var o=fn,a=hn;o=(a&~(1<<32-zt(a)-1)).toString(32)+o,i=":"+i+"R"+o,o=us++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=zw++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},Hw={readContext:Ot,useCallback:Jf,useContext:Ot,useEffect:ku,useImperativeHandle:Xf,useInsertionEffect:qf,useLayoutEffect:Yf,useMemo:Zf,useReducer:Iu,useRef:Gf,useState:function(){return Iu(cs)},useDebugValue:Nu,useDeferredValue:function(t){var i=Dt();return ep(i,je.memoizedState,t)},useTransition:function(){var t=Iu(cs)[0],i=Dt().memoizedState;return[t,i]},useMutableSource:Uf,useSyncExternalStore:jf,useId:tp,unstable_isNewReconciler:!1},Gw={readContext:Ot,useCallback:Jf,useContext:Ot,useEffect:ku,useImperativeHandle:Xf,useInsertionEffect:qf,useLayoutEffect:Yf,useMemo:Zf,useReducer:Tu,useRef:Gf,useState:function(){return Tu(cs)},useDebugValue:Nu,useDeferredValue:function(t){var i=Dt();return je===null?i.memoizedState=t:ep(i,je.memoizedState,t)},useTransition:function(){var t=Tu(cs)[0],i=Dt().memoizedState;return[t,i]},useMutableSource:Uf,useSyncExternalStore:jf,useId:tp,unstable_isNewReconciler:!1};function Vt(t,i){if(t&&t.defaultProps){i=W({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Ru(t,i,o,a){i=t.memoizedState,o=o(a,i),o=o==null?i:W({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Vo={isMounted:function(t){return(t=t._reactInternals)?ur(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var a=st(),d=$n(t),h=mn(a,d);h.payload=i,o!=null&&(h.callback=o),i=zn(t,h,d),i!==null&&(Gt(i,t,d,a),Mo(i,t,d))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var a=st(),d=$n(t),h=mn(a,d);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=zn(t,h,d),i!==null&&(Gt(i,t,d,a),Mo(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=st(),a=$n(t),d=mn(o,a);d.tag=2,i!=null&&(d.callback=i),i=zn(t,d,a),i!==null&&(Gt(i,t,a,o),Mo(i,t,a))}};function sp(t,i,o,a,d,h,m){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,h,m):i.prototype&&i.prototype.isPureReactComponent?!Xi(o,a)||!Xi(d,h):!0}function op(t,i,o){var a=!1,d=Fn,h=i.contextType;return typeof h=="object"&&h!==null?h=Ot(h):(d=ht(i)?dr:Ze.current,a=i.contextTypes,h=(a=a!=null)?Qr(t,d):Fn),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Vo,t.stateNode=i,i._reactInternals=t,a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=h),i}function lp(t,i,o,a){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,a),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,a),i.state!==t&&Vo.enqueueReplaceState(i,i.state,null)}function Pu(t,i,o,a){var d=t.stateNode;d.props=o,d.state=t.memoizedState,d.refs={},mu(t);var h=i.contextType;typeof h=="object"&&h!==null?d.context=Ot(h):(h=ht(i)?dr:Ze.current,d.context=Qr(t,h)),d.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Ru(t,i,h,o),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Vo.enqueueReplaceState(d,d.state,null),bo(t,o,d,a),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function ii(t,i){try{var o="",a=i;do o+=ae(a),a=a.return;while(a);var d=o}catch(h){d=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:d,digest:null}}function Au(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function xu(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var Kw=typeof WeakMap=="function"?WeakMap:Map;function ap(t,i,o){o=mn(-1,o),o.tag=3,o.payload={element:null};var a=i.value;return o.callback=function(){Qo||(Qo=!0,Gu=a),xu(t,i)},o}function up(t,i,o){o=mn(-1,o),o.tag=3;var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var d=i.value;o.payload=function(){return a(d)},o.callback=function(){xu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){xu(t,i),typeof a!="function"&&(Bn===null?Bn=new Set([this]):Bn.add(this));var m=i.stack;this.componentDidCatch(i.value,{componentStack:m!==null?m:""})}),o}function cp(t,i,o){var a=t.pingCache;if(a===null){a=t.pingCache=new Kw;var d=new Set;a.set(i,d)}else d=a.get(i),d===void 0&&(d=new Set,a.set(i,d));d.has(o)||(d.add(o),t=l0.bind(null,t,i,o),i.then(t,t))}function dp(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function hp(t,i,o,a,d){return t.mode&1?(t.flags|=65536,t.lanes=d,t):(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=mn(-1,1),i.tag=2,zn(o,i,1))),o.lanes|=1),t)}var qw=le.ReactCurrentOwner,ft=!1;function it(t,i,o,a){i.child=t===null?Of(i,null,o,a):ei(i,t.child,o,a)}function fp(t,i,o,a,d){o=o.render;var h=i.ref;return ni(i,d),a=Su(t,i,o,a,h,d),o=Cu(),t!==null&&!ft?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,gn(t,i,d)):(Re&&o&&su(i),i.flags|=1,it(t,i,a,d),i.child)}function pp(t,i,o,a,d){if(t===null){var h=o.type;return typeof h=="function"&&!Zu(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,mp(t,i,h,a,d)):(t=nl(o.type,null,a,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,!(t.lanes&d)){var m=h.memoizedProps;if(o=o.compare,o=o!==null?o:Xi,o(m,a)&&t.ref===i.ref)return gn(t,i,d)}return i.flags|=1,t=Gn(h,a),t.ref=i.ref,t.return=i,i.child=t}function mp(t,i,o,a,d){if(t!==null){var h=t.memoizedProps;if(Xi(h,a)&&t.ref===i.ref)if(ft=!1,i.pendingProps=a=h,(t.lanes&d)!==0)t.flags&131072&&(ft=!0);else return i.lanes=t.lanes,gn(t,i,d)}return Ou(t,i,o,a,d)}function gp(t,i,o){var a=i.pendingProps,d=a.children,h=t!==null?t.memoizedState:null;if(a.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(oi,Nt),Nt|=o;else{if(!(o&1073741824))return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Se(oi,Nt),Nt|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=h!==null?h.baseLanes:o,Se(oi,Nt),Nt|=a}else h!==null?(a=h.baseLanes|o,i.memoizedState=null):a=o,Se(oi,Nt),Nt|=a;return it(t,i,d,o),i.child}function _p(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Ou(t,i,o,a,d){var h=ht(o)?dr:Ze.current;return h=Qr(i,h),ni(i,d),o=Su(t,i,o,a,h,d),a=Cu(),t!==null&&!ft?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,gn(t,i,d)):(Re&&a&&su(i),i.flags|=1,it(t,i,o,d),i.child)}function yp(t,i,o,a,d){if(ht(o)){var h=!0;No(i)}else h=!1;if(ni(i,d),i.stateNode===null)Ho(t,i),op(i,o,a),Pu(i,o,a,d),a=!0;else if(t===null){var m=i.stateNode,y=i.memoizedProps;m.props=y;var w=m.context,N=o.contextType;typeof N=="object"&&N!==null?N=Ot(N):(N=ht(o)?dr:Ze.current,N=Qr(i,N));var x=o.getDerivedStateFromProps,O=typeof x=="function"||typeof m.getSnapshotBeforeUpdate=="function";O||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(y!==a||w!==N)&&lp(i,m,a,N),jn=!1;var P=i.memoizedState;m.state=P,bo(i,a,m,d),w=i.memoizedState,y!==a||P!==w||dt.current||jn?(typeof x=="function"&&(Ru(i,o,x,a),w=i.memoizedState),(y=jn||sp(i,o,y,a,P,w,N))?(O||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=a,i.memoizedState=w),m.props=a,m.state=w,m.context=N,a=y):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),a=!1)}else{m=i.stateNode,Lf(t,i),y=i.memoizedProps,N=i.type===i.elementType?y:Vt(i.type,y),m.props=N,O=i.pendingProps,P=m.context,w=o.contextType,typeof w=="object"&&w!==null?w=Ot(w):(w=ht(o)?dr:Ze.current,w=Qr(i,w));var U=o.getDerivedStateFromProps;(x=typeof U=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(y!==O||P!==w)&&lp(i,m,a,w),jn=!1,P=i.memoizedState,m.state=P,bo(i,a,m,d);var B=i.memoizedState;y!==O||P!==B||dt.current||jn?(typeof U=="function"&&(Ru(i,o,U,a),B=i.memoizedState),(N=jn||sp(i,o,N,a,P,B,w)||!1)?(x||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(a,B,w),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(a,B,w)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||y===t.memoizedProps&&P===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&P===t.memoizedState||(i.flags|=1024),i.memoizedProps=a,i.memoizedState=B),m.props=a,m.state=B,m.context=w,a=N):(typeof m.componentDidUpdate!="function"||y===t.memoizedProps&&P===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&P===t.memoizedState||(i.flags|=1024),a=!1)}return Du(t,i,o,a,h,d)}function Du(t,i,o,a,d,h){_p(t,i);var m=(i.flags&128)!==0;if(!a&&!m)return d&&Cf(i,o,!1),gn(t,i,h);a=i.stateNode,qw.current=i;var y=m&&typeof o.getDerivedStateFromError!="function"?null:a.render();return i.flags|=1,t!==null&&m?(i.child=ei(i,t.child,null,h),i.child=ei(i,null,y,h)):it(t,i,y,h),i.memoizedState=a.state,d&&Cf(i,o,!0),i.child}function vp(t){var i=t.stateNode;i.pendingContext?Ef(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Ef(t,i.context,!1),gu(t,i.containerInfo)}function wp(t,i,o,a,d){return Zr(),uu(d),i.flags|=256,it(t,i,o,a),i.child}var Lu={dehydrated:null,treeContext:null,retryLane:0};function Mu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ep(t,i,o){var a=i.pendingProps,d=Pe.current,h=!1,m=(i.flags&128)!==0,y;if((y=m)||(y=t!==null&&t.memoizedState===null?!1:(d&2)!==0),y?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),Se(Pe,d&1),t===null)return au(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(i.mode&1?t.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(m=a.children,t=a.fallback,h?(a=i.mode,h=i.child,m={mode:"hidden",children:m},!(a&1)&&h!==null?(h.childLanes=0,h.pendingProps=m):h=rl(m,a,0,null),t=Er(t,a,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Mu(o),i.memoizedState=Lu,t):bu(i,m));if(d=t.memoizedState,d!==null&&(y=d.dehydrated,y!==null))return Yw(t,i,m,a,y,d,o);if(h){h=a.fallback,m=i.mode,d=t.child,y=d.sibling;var w={mode:"hidden",children:a.children};return!(m&1)&&i.child!==d?(a=i.child,a.childLanes=0,a.pendingProps=w,i.deletions=null):(a=Gn(d,w),a.subtreeFlags=d.subtreeFlags&14680064),y!==null?h=Gn(y,h):(h=Er(h,m,o,null),h.flags|=2),h.return=i,a.return=i,a.sibling=h,i.child=a,a=h,h=i.child,m=t.child.memoizedState,m=m===null?Mu(o):{baseLanes:m.baseLanes|o,cachePool:null,transitions:m.transitions},h.memoizedState=m,h.childLanes=t.childLanes&~o,i.memoizedState=Lu,a}return h=t.child,t=h.sibling,a=Gn(h,{mode:"visible",children:a.children}),!(i.mode&1)&&(a.lanes=o),a.return=i,a.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=a,i.memoizedState=null,a}function bu(t,i){return i=rl({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function $o(t,i,o,a){return a!==null&&uu(a),ei(i,t.child,null,o),t=bu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Yw(t,i,o,a,d,h,m){if(o)return i.flags&256?(i.flags&=-257,a=Au(Error(n(422))),$o(t,i,m,a)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=a.fallback,d=i.mode,a=rl({mode:"visible",children:a.children},d,0,null),h=Er(h,d,m,null),h.flags|=2,a.return=i,h.return=i,a.sibling=h,i.child=a,i.mode&1&&ei(i,t.child,null,m),i.child.memoizedState=Mu(m),i.memoizedState=Lu,h);if(!(i.mode&1))return $o(t,i,m,null);if(d.data==="$!"){if(a=d.nextSibling&&d.nextSibling.dataset,a)var y=a.dgst;return a=y,h=Error(n(419)),a=Au(h,a,void 0),$o(t,i,m,a)}if(y=(m&t.childLanes)!==0,ft||y){if(a=He,a!==null){switch(m&-m){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(a.suspendedLanes|m)?0:d,d!==0&&d!==h.retryLane&&(h.retryLane=d,pn(t,d),Gt(a,t,d,-1))}return Ju(),a=Au(Error(n(421))),$o(t,i,m,a)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=a0.bind(null,t),d._reactRetry=i,null):(t=h.treeContext,kt=Mn(d.nextSibling),Tt=i,Re=!0,Bt=null,t!==null&&(At[xt++]=hn,At[xt++]=fn,At[xt++]=hr,hn=t.id,fn=t.overflow,hr=i),i=bu(i,a.children),i.flags|=4096,i)}function Sp(t,i,o){t.lanes|=i;var a=t.alternate;a!==null&&(a.lanes|=i),fu(t.return,i,o)}function Fu(t,i,o,a,d){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:a,tail:o,tailMode:d}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=a,h.tail=o,h.tailMode=d)}function Cp(t,i,o){var a=i.pendingProps,d=a.revealOrder,h=a.tail;if(it(t,i,a.children,o),a=Pe.current,a&2)a=a&1|2,i.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Sp(t,o,i);else if(t.tag===19)Sp(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}if(Se(Pe,a),!(i.mode&1))i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)t=o.alternate,t!==null&&Fo(t)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),Fu(i,!1,d,o,h);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&Fo(t)===null){i.child=d;break}t=d.sibling,d.sibling=o,o=d,d=t}Fu(i,!0,o,null,h);break;case"together":Fu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ho(t,i){!(i.mode&1)&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function gn(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),_r|=i.lanes,!(o&i.childLanes))return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=Gn(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=Gn(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function Qw(t,i,o){switch(i.tag){case 3:vp(i),Zr();break;case 5:Ff(i);break;case 1:ht(i.type)&&No(i);break;case 4:gu(i,i.stateNode.containerInfo);break;case 10:var a=i.type._context,d=i.memoizedProps.value;Se(Do,a._currentValue),a._currentValue=d;break;case 13:if(a=i.memoizedState,a!==null)return a.dehydrated!==null?(Se(Pe,Pe.current&1),i.flags|=128,null):o&i.child.childLanes?Ep(t,i,o):(Se(Pe,Pe.current&1),t=gn(t,i,o),t!==null?t.sibling:null);Se(Pe,Pe.current&1);break;case 19:if(a=(o&i.childLanes)!==0,t.flags&128){if(a)return Cp(t,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Se(Pe,Pe.current),a)break;return null;case 22:case 23:return i.lanes=0,gp(t,i,o)}return gn(t,i,o)}var Ip,Uu,Tp,kp;Ip=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Uu=function(){},Tp=function(t,i,o,a){var d=t.memoizedProps;if(d!==a){t=i.stateNode,mr(tn.current);var h=null;switch(o){case"input":d=fa(t,d),a=fa(t,a),h=[];break;case"select":d=W({},d,{value:void 0}),a=W({},a,{value:void 0}),h=[];break;case"textarea":d=ga(t,d),a=ga(t,a),h=[];break;default:typeof d.onClick!="function"&&typeof a.onClick=="function"&&(t.onclick=Io)}ya(o,a);var m;o=null;for(N in d)if(!a.hasOwnProperty(N)&&d.hasOwnProperty(N)&&d[N]!=null)if(N==="style"){var y=d[N];for(m in y)y.hasOwnProperty(m)&&(o||(o={}),o[m]="")}else N!=="dangerouslySetInnerHTML"&&N!=="children"&&N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&N!=="autoFocus"&&(l.hasOwnProperty(N)?h||(h=[]):(h=h||[]).push(N,null));for(N in a){var w=a[N];if(y=d!=null?d[N]:void 0,a.hasOwnProperty(N)&&w!==y&&(w!=null||y!=null))if(N==="style")if(y){for(m in y)!y.hasOwnProperty(m)||w&&w.hasOwnProperty(m)||(o||(o={}),o[m]="");for(m in w)w.hasOwnProperty(m)&&y[m]!==w[m]&&(o||(o={}),o[m]=w[m])}else o||(h||(h=[]),h.push(N,o)),o=w;else N==="dangerouslySetInnerHTML"?(w=w?w.__html:void 0,y=y?y.__html:void 0,w!=null&&y!==w&&(h=h||[]).push(N,w)):N==="children"?typeof w!="string"&&typeof w!="number"||(h=h||[]).push(N,""+w):N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&(l.hasOwnProperty(N)?(w!=null&&N==="onScroll"&&Te("scroll",t),h||y===w||(h=[])):(h=h||[]).push(N,w))}o&&(h=h||[]).push("style",o);var N=h;(i.updateQueue=N)&&(i.flags|=4)}},kp=function(t,i,o,a){o!==a&&(i.flags|=4)};function hs(t,i){if(!Re)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function tt(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,a=0;if(i)for(var d=t.child;d!==null;)o|=d.lanes|d.childLanes,a|=d.subtreeFlags&14680064,a|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)o|=d.lanes|d.childLanes,a|=d.subtreeFlags,a|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=a,t.childLanes=o,i}function Xw(t,i,o){var a=i.pendingProps;switch(ou(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(i),null;case 1:return ht(i.type)&&ko(),tt(i),null;case 3:return a=i.stateNode,ri(),ke(dt),ke(Ze),vu(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(xo(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,Bt!==null&&(Yu(Bt),Bt=null))),Uu(t,i),tt(i),null;case 5:_u(i);var d=mr(ls.current);if(o=i.type,t!==null&&i.stateNode!=null)Tp(t,i,o,a,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!a){if(i.stateNode===null)throw Error(n(166));return tt(i),null}if(t=mr(tn.current),xo(i)){a=i.stateNode,o=i.type;var h=i.memoizedProps;switch(a[en]=i,a[ns]=h,t=(i.mode&1)!==0,o){case"dialog":Te("cancel",a),Te("close",a);break;case"iframe":case"object":case"embed":Te("load",a);break;case"video":case"audio":for(d=0;d<Zi.length;d++)Te(Zi[d],a);break;case"source":Te("error",a);break;case"img":case"image":case"link":Te("error",a),Te("load",a);break;case"details":Te("toggle",a);break;case"input":sh(a,h),Te("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!h.multiple},Te("invalid",a);break;case"textarea":ah(a,h),Te("invalid",a)}ya(o,h),d=null;for(var m in h)if(h.hasOwnProperty(m)){var y=h[m];m==="children"?typeof y=="string"?a.textContent!==y&&(h.suppressHydrationWarning!==!0&&Co(a.textContent,y,t),d=["children",y]):typeof y=="number"&&a.textContent!==""+y&&(h.suppressHydrationWarning!==!0&&Co(a.textContent,y,t),d=["children",""+y]):l.hasOwnProperty(m)&&y!=null&&m==="onScroll"&&Te("scroll",a)}switch(o){case"input":Zs(a),lh(a,h,!0);break;case"textarea":Zs(a),ch(a);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(a.onclick=Io)}a=d,i.updateQueue=a,a!==null&&(i.flags|=4)}else{m=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=dh(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=m.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof a.is=="string"?t=m.createElement(o,{is:a.is}):(t=m.createElement(o),o==="select"&&(m=t,a.multiple?m.multiple=!0:a.size&&(m.size=a.size))):t=m.createElementNS(t,o),t[en]=i,t[ns]=a,Ip(t,i,!1,!1),i.stateNode=t;e:{switch(m=va(o,a),o){case"dialog":Te("cancel",t),Te("close",t),d=a;break;case"iframe":case"object":case"embed":Te("load",t),d=a;break;case"video":case"audio":for(d=0;d<Zi.length;d++)Te(Zi[d],t);d=a;break;case"source":Te("error",t),d=a;break;case"img":case"image":case"link":Te("error",t),Te("load",t),d=a;break;case"details":Te("toggle",t),d=a;break;case"input":sh(t,a),d=fa(t,a),Te("invalid",t);break;case"option":d=a;break;case"select":t._wrapperState={wasMultiple:!!a.multiple},d=W({},a,{value:void 0}),Te("invalid",t);break;case"textarea":ah(t,a),d=ga(t,a),Te("invalid",t);break;default:d=a}ya(o,d),y=d;for(h in y)if(y.hasOwnProperty(h)){var w=y[h];h==="style"?ph(t,w):h==="dangerouslySetInnerHTML"?(w=w?w.__html:void 0,w!=null&&hh(t,w)):h==="children"?typeof w=="string"?(o!=="textarea"||w!=="")&&Li(t,w):typeof w=="number"&&Li(t,""+w):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(l.hasOwnProperty(h)?w!=null&&h==="onScroll"&&Te("scroll",t):w!=null&&ge(t,h,w,m))}switch(o){case"input":Zs(t),lh(t,a,!1);break;case"textarea":Zs(t),ch(t);break;case"option":a.value!=null&&t.setAttribute("value",""+fe(a.value));break;case"select":t.multiple=!!a.multiple,h=a.value,h!=null?Ur(t,!!a.multiple,h,!1):a.defaultValue!=null&&Ur(t,!!a.multiple,a.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=Io)}switch(o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return tt(i),null;case 6:if(t&&i.stateNode!=null)kp(t,i,t.memoizedProps,a);else{if(typeof a!="string"&&i.stateNode===null)throw Error(n(166));if(o=mr(ls.current),mr(tn.current),xo(i)){if(a=i.stateNode,o=i.memoizedProps,a[en]=i,(h=a.nodeValue!==o)&&(t=Tt,t!==null))switch(t.tag){case 3:Co(a.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Co(a.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else a=(o.nodeType===9?o:o.ownerDocument).createTextNode(a),a[en]=i,i.stateNode=a}return tt(i),null;case 13:if(ke(Pe),a=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Re&&kt!==null&&i.mode&1&&!(i.flags&128))Pf(),Zr(),i.flags|=98560,h=!1;else if(h=xo(i),a!==null&&a.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[en]=i}else Zr(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;tt(i),h=!1}else Bt!==null&&(Yu(Bt),Bt=null),h=!0;if(!h)return i.flags&65536?i:null}return i.flags&128?(i.lanes=o,i):(a=a!==null,a!==(t!==null&&t.memoizedState!==null)&&a&&(i.child.flags|=8192,i.mode&1&&(t===null||Pe.current&1?ze===0&&(ze=3):Ju())),i.updateQueue!==null&&(i.flags|=4),tt(i),null);case 4:return ri(),Uu(t,i),t===null&&es(i.stateNode.containerInfo),tt(i),null;case 10:return hu(i.type._context),tt(i),null;case 17:return ht(i.type)&&ko(),tt(i),null;case 19:if(ke(Pe),h=i.memoizedState,h===null)return tt(i),null;if(a=(i.flags&128)!==0,m=h.rendering,m===null)if(a)hs(h,!1);else{if(ze!==0||t!==null&&t.flags&128)for(t=i.child;t!==null;){if(m=Fo(t),m!==null){for(i.flags|=128,hs(h,!1),a=m.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),i.subtreeFlags=0,a=o,o=i.child;o!==null;)h=o,t=a,h.flags&=14680066,m=h.alternate,m===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=m.childLanes,h.lanes=m.lanes,h.child=m.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=m.memoizedProps,h.memoizedState=m.memoizedState,h.updateQueue=m.updateQueue,h.type=m.type,t=m.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Se(Pe,Pe.current&1|2),i.child}t=t.sibling}h.tail!==null&&Me()>li&&(i.flags|=128,a=!0,hs(h,!1),i.lanes=4194304)}else{if(!a)if(t=Fo(m),t!==null){if(i.flags|=128,a=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),hs(h,!0),h.tail===null&&h.tailMode==="hidden"&&!m.alternate&&!Re)return tt(i),null}else 2*Me()-h.renderingStartTime>li&&o!==1073741824&&(i.flags|=128,a=!0,hs(h,!1),i.lanes=4194304);h.isBackwards?(m.sibling=i.child,i.child=m):(o=h.last,o!==null?o.sibling=m:i.child=m,h.last=m)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Me(),i.sibling=null,o=Pe.current,Se(Pe,a?o&1|2:o&1),i):(tt(i),null);case 22:case 23:return Xu(),a=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==a&&(i.flags|=8192),a&&i.mode&1?Nt&1073741824&&(tt(i),i.subtreeFlags&6&&(i.flags|=8192)):tt(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function Jw(t,i){switch(ou(i),i.tag){case 1:return ht(i.type)&&ko(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ri(),ke(dt),ke(Ze),vu(),t=i.flags,t&65536&&!(t&128)?(i.flags=t&-65537|128,i):null;case 5:return _u(i),null;case 13:if(ke(Pe),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Zr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return ke(Pe),null;case 4:return ri(),null;case 10:return hu(i.type._context),null;case 22:case 23:return Xu(),null;case 24:return null;default:return null}}var Go=!1,nt=!1,Zw=typeof WeakSet=="function"?WeakSet:Set,z=null;function si(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(a){Oe(t,i,a)}else o.current=null}function ju(t,i,o){try{o()}catch(a){Oe(t,i,a)}}var Np=!1;function e0(t,i){if(Xa=ho,t=sf(),Va(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var a=o.getSelection&&o.getSelection();if(a&&a.rangeCount!==0){o=a.anchorNode;var d=a.anchorOffset,h=a.focusNode;a=a.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var m=0,y=-1,w=-1,N=0,x=0,O=t,P=null;t:for(;;){for(var U;O!==o||d!==0&&O.nodeType!==3||(y=m+d),O!==h||a!==0&&O.nodeType!==3||(w=m+a),O.nodeType===3&&(m+=O.nodeValue.length),(U=O.firstChild)!==null;)P=O,O=U;for(;;){if(O===t)break t;if(P===o&&++N===d&&(y=m),P===h&&++x===a&&(w=m),(U=O.nextSibling)!==null)break;O=P,P=O.parentNode}O=U}o=y===-1||w===-1?null:{start:y,end:w}}else o=null}o=o||{start:0,end:0}}else o=null;for(Ja={focusedElem:t,selectionRange:o},ho=!1,z=i;z!==null;)if(i=z,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,z=t;else for(;z!==null;){i=z;try{var B=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(B!==null){var V=B.memoizedProps,be=B.memoizedState,I=i.stateNode,E=I.getSnapshotBeforeUpdate(i.elementType===i.type?V:Vt(i.type,V),be);I.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var T=i.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(D){Oe(i,i.return,D)}if(t=i.sibling,t!==null){t.return=i.return,z=t;break}z=i.return}return B=Np,Np=!1,B}function fs(t,i,o){var a=i.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var d=a=a.next;do{if((d.tag&t)===t){var h=d.destroy;d.destroy=void 0,h!==void 0&&ju(i,o,h)}d=d.next}while(d!==a)}}function Ko(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var a=o.create;o.destroy=a()}o=o.next}while(o!==i)}}function zu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function Rp(t){var i=t.alternate;i!==null&&(t.alternate=null,Rp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[en],delete i[ns],delete i[nu],delete i[bw],delete i[Fw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Pp(t){return t.tag===5||t.tag===3||t.tag===4}function Ap(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Pp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Wu(t,i,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Io));else if(a!==4&&(t=t.child,t!==null))for(Wu(t,i,o),t=t.sibling;t!==null;)Wu(t,i,o),t=t.sibling}function Bu(t,i,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(a!==4&&(t=t.child,t!==null))for(Bu(t,i,o),t=t.sibling;t!==null;)Bu(t,i,o),t=t.sibling}var Ye=null,$t=!1;function Wn(t,i,o){for(o=o.child;o!==null;)xp(t,i,o),o=o.sibling}function xp(t,i,o){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(so,o)}catch{}switch(o.tag){case 5:nt||si(o,i);case 6:var a=Ye,d=$t;Ye=null,Wn(t,i,o),Ye=a,$t=d,Ye!==null&&($t?(t=Ye,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):Ye.removeChild(o.stateNode));break;case 18:Ye!==null&&($t?(t=Ye,o=o.stateNode,t.nodeType===8?tu(t.parentNode,o):t.nodeType===1&&tu(t,o),Hi(t)):tu(Ye,o.stateNode));break;case 4:a=Ye,d=$t,Ye=o.stateNode.containerInfo,$t=!0,Wn(t,i,o),Ye=a,$t=d;break;case 0:case 11:case 14:case 15:if(!nt&&(a=o.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){d=a=a.next;do{var h=d,m=h.destroy;h=h.tag,m!==void 0&&(h&2||h&4)&&ju(o,i,m),d=d.next}while(d!==a)}Wn(t,i,o);break;case 1:if(!nt&&(si(o,i),a=o.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=o.memoizedProps,a.state=o.memoizedState,a.componentWillUnmount()}catch(y){Oe(o,i,y)}Wn(t,i,o);break;case 21:Wn(t,i,o);break;case 22:o.mode&1?(nt=(a=nt)||o.memoizedState!==null,Wn(t,i,o),nt=a):Wn(t,i,o);break;default:Wn(t,i,o)}}function Op(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new Zw),i.forEach(function(a){var d=u0.bind(null,t,a);o.has(a)||(o.add(a),a.then(d,d))})}}function Ht(t,i){var o=i.deletions;if(o!==null)for(var a=0;a<o.length;a++){var d=o[a];try{var h=t,m=i,y=m;e:for(;y!==null;){switch(y.tag){case 5:Ye=y.stateNode,$t=!1;break e;case 3:Ye=y.stateNode.containerInfo,$t=!0;break e;case 4:Ye=y.stateNode.containerInfo,$t=!0;break e}y=y.return}if(Ye===null)throw Error(n(160));xp(h,m,d),Ye=null,$t=!1;var w=d.alternate;w!==null&&(w.return=null),d.return=null}catch(N){Oe(d,i,N)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Dp(i,t),i=i.sibling}function Dp(t,i){var o=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ht(i,t),rn(t),a&4){try{fs(3,t,t.return),Ko(3,t)}catch(V){Oe(t,t.return,V)}try{fs(5,t,t.return)}catch(V){Oe(t,t.return,V)}}break;case 1:Ht(i,t),rn(t),a&512&&o!==null&&si(o,o.return);break;case 5:if(Ht(i,t),rn(t),a&512&&o!==null&&si(o,o.return),t.flags&32){var d=t.stateNode;try{Li(d,"")}catch(V){Oe(t,t.return,V)}}if(a&4&&(d=t.stateNode,d!=null)){var h=t.memoizedProps,m=o!==null?o.memoizedProps:h,y=t.type,w=t.updateQueue;if(t.updateQueue=null,w!==null)try{y==="input"&&h.type==="radio"&&h.name!=null&&oh(d,h),va(y,m);var N=va(y,h);for(m=0;m<w.length;m+=2){var x=w[m],O=w[m+1];x==="style"?ph(d,O):x==="dangerouslySetInnerHTML"?hh(d,O):x==="children"?Li(d,O):ge(d,x,O,N)}switch(y){case"input":pa(d,h);break;case"textarea":uh(d,h);break;case"select":var P=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!h.multiple;var U=h.value;U!=null?Ur(d,!!h.multiple,U,!1):P!==!!h.multiple&&(h.defaultValue!=null?Ur(d,!!h.multiple,h.defaultValue,!0):Ur(d,!!h.multiple,h.multiple?[]:"",!1))}d[ns]=h}catch(V){Oe(t,t.return,V)}}break;case 6:if(Ht(i,t),rn(t),a&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,h=t.memoizedProps;try{d.nodeValue=h}catch(V){Oe(t,t.return,V)}}break;case 3:if(Ht(i,t),rn(t),a&4&&o!==null&&o.memoizedState.isDehydrated)try{Hi(i.containerInfo)}catch(V){Oe(t,t.return,V)}break;case 4:Ht(i,t),rn(t);break;case 13:Ht(i,t),rn(t),d=t.child,d.flags&8192&&(h=d.memoizedState!==null,d.stateNode.isHidden=h,!h||d.alternate!==null&&d.alternate.memoizedState!==null||(Hu=Me())),a&4&&Op(t);break;case 22:if(x=o!==null&&o.memoizedState!==null,t.mode&1?(nt=(N=nt)||x,Ht(i,t),nt=N):Ht(i,t),rn(t),a&8192){if(N=t.memoizedState!==null,(t.stateNode.isHidden=N)&&!x&&t.mode&1)for(z=t,x=t.child;x!==null;){for(O=z=x;z!==null;){switch(P=z,U=P.child,P.tag){case 0:case 11:case 14:case 15:fs(4,P,P.return);break;case 1:si(P,P.return);var B=P.stateNode;if(typeof B.componentWillUnmount=="function"){a=P,o=P.return;try{i=a,B.props=i.memoizedProps,B.state=i.memoizedState,B.componentWillUnmount()}catch(V){Oe(a,o,V)}}break;case 5:si(P,P.return);break;case 22:if(P.memoizedState!==null){bp(O);continue}}U!==null?(U.return=P,z=U):bp(O)}x=x.sibling}e:for(x=null,O=t;;){if(O.tag===5){if(x===null){x=O;try{d=O.stateNode,N?(h=d.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(y=O.stateNode,w=O.memoizedProps.style,m=w!=null&&w.hasOwnProperty("display")?w.display:null,y.style.display=fh("display",m))}catch(V){Oe(t,t.return,V)}}}else if(O.tag===6){if(x===null)try{O.stateNode.nodeValue=N?"":O.memoizedProps}catch(V){Oe(t,t.return,V)}}else if((O.tag!==22&&O.tag!==23||O.memoizedState===null||O===t)&&O.child!==null){O.child.return=O,O=O.child;continue}if(O===t)break e;for(;O.sibling===null;){if(O.return===null||O.return===t)break e;x===O&&(x=null),O=O.return}x===O&&(x=null),O.sibling.return=O.return,O=O.sibling}}break;case 19:Ht(i,t),rn(t),a&4&&Op(t);break;case 21:break;default:Ht(i,t),rn(t)}}function rn(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(Pp(o)){var a=o;break e}o=o.return}throw Error(n(160))}switch(a.tag){case 5:var d=a.stateNode;a.flags&32&&(Li(d,""),a.flags&=-33);var h=Ap(t);Bu(t,h,d);break;case 3:case 4:var m=a.stateNode.containerInfo,y=Ap(t);Wu(t,y,m);break;default:throw Error(n(161))}}catch(w){Oe(t,t.return,w)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function t0(t,i,o){z=t,Lp(t)}function Lp(t,i,o){for(var a=(t.mode&1)!==0;z!==null;){var d=z,h=d.child;if(d.tag===22&&a){var m=d.memoizedState!==null||Go;if(!m){var y=d.alternate,w=y!==null&&y.memoizedState!==null||nt;y=Go;var N=nt;if(Go=m,(nt=w)&&!N)for(z=d;z!==null;)m=z,w=m.child,m.tag===22&&m.memoizedState!==null?Fp(d):w!==null?(w.return=m,z=w):Fp(d);for(;h!==null;)z=h,Lp(h),h=h.sibling;z=d,Go=y,nt=N}Mp(t)}else d.subtreeFlags&8772&&h!==null?(h.return=d,z=h):Mp(t)}}function Mp(t){for(;z!==null;){var i=z;if(i.flags&8772){var o=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:nt||Ko(5,i);break;case 1:var a=i.stateNode;if(i.flags&4&&!nt)if(o===null)a.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:Vt(i.type,o.memoizedProps);a.componentDidUpdate(d,o.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&bf(i,h,a);break;case 3:var m=i.updateQueue;if(m!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}bf(i,m,o)}break;case 5:var y=i.stateNode;if(o===null&&i.flags&4){o=y;var w=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":w.autoFocus&&o.focus();break;case"img":w.src&&(o.src=w.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var N=i.alternate;if(N!==null){var x=N.memoizedState;if(x!==null){var O=x.dehydrated;O!==null&&Hi(O)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}nt||i.flags&512&&zu(i)}catch(P){Oe(i,i.return,P)}}if(i===t){z=null;break}if(o=i.sibling,o!==null){o.return=i.return,z=o;break}z=i.return}}function bp(t){for(;z!==null;){var i=z;if(i===t){z=null;break}var o=i.sibling;if(o!==null){o.return=i.return,z=o;break}z=i.return}}function Fp(t){for(;z!==null;){var i=z;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Ko(4,i)}catch(w){Oe(i,o,w)}break;case 1:var a=i.stateNode;if(typeof a.componentDidMount=="function"){var d=i.return;try{a.componentDidMount()}catch(w){Oe(i,d,w)}}var h=i.return;try{zu(i)}catch(w){Oe(i,h,w)}break;case 5:var m=i.return;try{zu(i)}catch(w){Oe(i,m,w)}}}catch(w){Oe(i,i.return,w)}if(i===t){z=null;break}var y=i.sibling;if(y!==null){y.return=i.return,z=y;break}z=i.return}}var n0=Math.ceil,qo=le.ReactCurrentDispatcher,Vu=le.ReactCurrentOwner,Lt=le.ReactCurrentBatchConfig,oe=0,He=null,Fe=null,Qe=0,Nt=0,oi=bn(0),ze=0,ps=null,_r=0,Yo=0,$u=0,ms=null,pt=null,Hu=0,li=1/0,_n=null,Qo=!1,Gu=null,Bn=null,Xo=!1,Vn=null,Jo=0,gs=0,Ku=null,Zo=-1,el=0;function st(){return oe&6?Me():Zo!==-1?Zo:Zo=Me()}function $n(t){return t.mode&1?oe&2&&Qe!==0?Qe&-Qe:jw.transition!==null?(el===0&&(el=Ph()),el):(t=pe,t!==0||(t=window.event,t=t===void 0?16:Uh(t.type)),t):1}function Gt(t,i,o,a){if(50<gs)throw gs=0,Ku=null,Error(n(185));zi(t,o,a),(!(oe&2)||t!==He)&&(t===He&&(!(oe&2)&&(Yo|=o),ze===4&&Hn(t,Qe)),mt(t,a),o===1&&oe===0&&!(i.mode&1)&&(li=Me()+500,Ro&&Un()))}function mt(t,i){var o=t.callbackNode;jv(t,i);var a=ao(t,t===He?Qe:0);if(a===0)o!==null&&kh(o),t.callbackNode=null,t.callbackPriority=0;else if(i=a&-a,t.callbackPriority!==i){if(o!=null&&kh(o),i===1)t.tag===0?Uw(jp.bind(null,t)):If(jp.bind(null,t)),Lw(function(){!(oe&6)&&Un()}),o=null;else{switch(Ah(a)){case 1:o=ka;break;case 4:o=Nh;break;case 16:o=io;break;case 536870912:o=Rh;break;default:o=io}o=Kp(o,Up.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function Up(t,i){if(Zo=-1,el=0,oe&6)throw Error(n(327));var o=t.callbackNode;if(ai()&&t.callbackNode!==o)return null;var a=ao(t,t===He?Qe:0);if(a===0)return null;if(a&30||a&t.expiredLanes||i)i=tl(t,a);else{i=a;var d=oe;oe|=2;var h=Wp();(He!==t||Qe!==i)&&(_n=null,li=Me()+500,vr(t,i));do try{s0();break}catch(y){zp(t,y)}while(!0);du(),qo.current=h,oe=d,Fe!==null?i=0:(He=null,Qe=0,i=ze)}if(i!==0){if(i===2&&(d=Na(t),d!==0&&(a=d,i=qu(t,d))),i===1)throw o=ps,vr(t,0),Hn(t,a),mt(t,Me()),o;if(i===6)Hn(t,a);else{if(d=t.current.alternate,!(a&30)&&!r0(d)&&(i=tl(t,a),i===2&&(h=Na(t),h!==0&&(a=h,i=qu(t,h))),i===1))throw o=ps,vr(t,0),Hn(t,a),mt(t,Me()),o;switch(t.finishedWork=d,t.finishedLanes=a,i){case 0:case 1:throw Error(n(345));case 2:wr(t,pt,_n);break;case 3:if(Hn(t,a),(a&130023424)===a&&(i=Hu+500-Me(),10<i)){if(ao(t,0)!==0)break;if(d=t.suspendedLanes,(d&a)!==a){st(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=eu(wr.bind(null,t,pt,_n),i);break}wr(t,pt,_n);break;case 4:if(Hn(t,a),(a&4194240)===a)break;for(i=t.eventTimes,d=-1;0<a;){var m=31-zt(a);h=1<<m,m=i[m],m>d&&(d=m),a&=~h}if(a=d,a=Me()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*n0(a/1960))-a,10<a){t.timeoutHandle=eu(wr.bind(null,t,pt,_n),a);break}wr(t,pt,_n);break;case 5:wr(t,pt,_n);break;default:throw Error(n(329))}}}return mt(t,Me()),t.callbackNode===o?Up.bind(null,t):null}function qu(t,i){var o=ms;return t.current.memoizedState.isDehydrated&&(vr(t,i).flags|=256),t=tl(t,i),t!==2&&(i=pt,pt=o,i!==null&&Yu(i)),t}function Yu(t){pt===null?pt=t:pt.push.apply(pt,t)}function r0(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var a=0;a<o.length;a++){var d=o[a],h=d.getSnapshot;d=d.value;try{if(!Wt(h(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Hn(t,i){for(i&=~$u,i&=~Yo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-zt(i),a=1<<o;t[o]=-1,i&=~a}}function jp(t){if(oe&6)throw Error(n(327));ai();var i=ao(t,0);if(!(i&1))return mt(t,Me()),null;var o=tl(t,i);if(t.tag!==0&&o===2){var a=Na(t);a!==0&&(i=a,o=qu(t,a))}if(o===1)throw o=ps,vr(t,0),Hn(t,i),mt(t,Me()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,wr(t,pt,_n),mt(t,Me()),null}function Qu(t,i){var o=oe;oe|=1;try{return t(i)}finally{oe=o,oe===0&&(li=Me()+500,Ro&&Un())}}function yr(t){Vn!==null&&Vn.tag===0&&!(oe&6)&&ai();var i=oe;oe|=1;var o=Lt.transition,a=pe;try{if(Lt.transition=null,pe=1,t)return t()}finally{pe=a,Lt.transition=o,oe=i,!(oe&6)&&Un()}}function Xu(){Nt=oi.current,ke(oi)}function vr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,Dw(o)),Fe!==null)for(o=Fe.return;o!==null;){var a=o;switch(ou(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&ko();break;case 3:ri(),ke(dt),ke(Ze),vu();break;case 5:_u(a);break;case 4:ri();break;case 13:ke(Pe);break;case 19:ke(Pe);break;case 10:hu(a.type._context);break;case 22:case 23:Xu()}o=o.return}if(He=t,Fe=t=Gn(t.current,null),Qe=Nt=i,ze=0,ps=null,$u=Yo=_r=0,pt=ms=null,pr!==null){for(i=0;i<pr.length;i++)if(o=pr[i],a=o.interleaved,a!==null){o.interleaved=null;var d=a.next,h=o.pending;if(h!==null){var m=h.next;h.next=d,a.next=m}o.pending=a}pr=null}return t}function zp(t,i){do{var o=Fe;try{if(du(),Uo.current=Bo,jo){for(var a=Ae.memoizedState;a!==null;){var d=a.queue;d!==null&&(d.pending=null),a=a.next}jo=!1}if(gr=0,$e=je=Ae=null,as=!1,us=0,Vu.current=null,o===null||o.return===null){ze=1,ps=i,Fe=null;break}e:{var h=t,m=o.return,y=o,w=i;if(i=Qe,y.flags|=32768,w!==null&&typeof w=="object"&&typeof w.then=="function"){var N=w,x=y,O=x.tag;if(!(x.mode&1)&&(O===0||O===11||O===15)){var P=x.alternate;P?(x.updateQueue=P.updateQueue,x.memoizedState=P.memoizedState,x.lanes=P.lanes):(x.updateQueue=null,x.memoizedState=null)}var U=dp(m);if(U!==null){U.flags&=-257,hp(U,m,y,h,i),U.mode&1&&cp(h,N,i),i=U,w=N;var B=i.updateQueue;if(B===null){var V=new Set;V.add(w),i.updateQueue=V}else B.add(w);break e}else{if(!(i&1)){cp(h,N,i),Ju();break e}w=Error(n(426))}}else if(Re&&y.mode&1){var be=dp(m);if(be!==null){!(be.flags&65536)&&(be.flags|=256),hp(be,m,y,h,i),uu(ii(w,y));break e}}h=w=ii(w,y),ze!==4&&(ze=2),ms===null?ms=[h]:ms.push(h),h=m;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var I=ap(h,w,i);Mf(h,I);break e;case 1:y=w;var E=h.type,T=h.stateNode;if(!(h.flags&128)&&(typeof E.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(Bn===null||!Bn.has(T)))){h.flags|=65536,i&=-i,h.lanes|=i;var D=up(h,y,i);Mf(h,D);break e}}h=h.return}while(h!==null)}Vp(o)}catch($){i=$,Fe===o&&o!==null&&(Fe=o=o.return);continue}break}while(!0)}function Wp(){var t=qo.current;return qo.current=Bo,t===null?Bo:t}function Ju(){(ze===0||ze===3||ze===2)&&(ze=4),He===null||!(_r&268435455)&&!(Yo&268435455)||Hn(He,Qe)}function tl(t,i){var o=oe;oe|=2;var a=Wp();(He!==t||Qe!==i)&&(_n=null,vr(t,i));do try{i0();break}catch(d){zp(t,d)}while(!0);if(du(),oe=o,qo.current=a,Fe!==null)throw Error(n(261));return He=null,Qe=0,ze}function i0(){for(;Fe!==null;)Bp(Fe)}function s0(){for(;Fe!==null&&!Av();)Bp(Fe)}function Bp(t){var i=Gp(t.alternate,t,Nt);t.memoizedProps=t.pendingProps,i===null?Vp(t):Fe=i,Vu.current=null}function Vp(t){var i=t;do{var o=i.alternate;if(t=i.return,i.flags&32768){if(o=Jw(o,i),o!==null){o.flags&=32767,Fe=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ze=6,Fe=null;return}}else if(o=Xw(o,i,Nt),o!==null){Fe=o;return}if(i=i.sibling,i!==null){Fe=i;return}Fe=i=t}while(i!==null);ze===0&&(ze=5)}function wr(t,i,o){var a=pe,d=Lt.transition;try{Lt.transition=null,pe=1,o0(t,i,o,a)}finally{Lt.transition=d,pe=a}return null}function o0(t,i,o,a){do ai();while(Vn!==null);if(oe&6)throw Error(n(327));o=t.finishedWork;var d=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(zv(t,h),t===He&&(Fe=He=null,Qe=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||Xo||(Xo=!0,Kp(io,function(){return ai(),null})),h=(o.flags&15990)!==0,o.subtreeFlags&15990||h){h=Lt.transition,Lt.transition=null;var m=pe;pe=1;var y=oe;oe|=4,Vu.current=null,e0(t,o),Dp(o,t),kw(Ja),ho=!!Xa,Ja=Xa=null,t.current=o,t0(o),xv(),oe=y,pe=m,Lt.transition=h}else t.current=o;if(Xo&&(Xo=!1,Vn=t,Jo=d),h=t.pendingLanes,h===0&&(Bn=null),Lv(o.stateNode),mt(t,Me()),i!==null)for(a=t.onRecoverableError,o=0;o<i.length;o++)d=i[o],a(d.value,{componentStack:d.stack,digest:d.digest});if(Qo)throw Qo=!1,t=Gu,Gu=null,t;return Jo&1&&t.tag!==0&&ai(),h=t.pendingLanes,h&1?t===Ku?gs++:(gs=0,Ku=t):gs=0,Un(),null}function ai(){if(Vn!==null){var t=Ah(Jo),i=Lt.transition,o=pe;try{if(Lt.transition=null,pe=16>t?16:t,Vn===null)var a=!1;else{if(t=Vn,Vn=null,Jo=0,oe&6)throw Error(n(331));var d=oe;for(oe|=4,z=t.current;z!==null;){var h=z,m=h.child;if(z.flags&16){var y=h.deletions;if(y!==null){for(var w=0;w<y.length;w++){var N=y[w];for(z=N;z!==null;){var x=z;switch(x.tag){case 0:case 11:case 15:fs(8,x,h)}var O=x.child;if(O!==null)O.return=x,z=O;else for(;z!==null;){x=z;var P=x.sibling,U=x.return;if(Rp(x),x===N){z=null;break}if(P!==null){P.return=U,z=P;break}z=U}}}var B=h.alternate;if(B!==null){var V=B.child;if(V!==null){B.child=null;do{var be=V.sibling;V.sibling=null,V=be}while(V!==null)}}z=h}}if(h.subtreeFlags&2064&&m!==null)m.return=h,z=m;else e:for(;z!==null;){if(h=z,h.flags&2048)switch(h.tag){case 0:case 11:case 15:fs(9,h,h.return)}var I=h.sibling;if(I!==null){I.return=h.return,z=I;break e}z=h.return}}var E=t.current;for(z=E;z!==null;){m=z;var T=m.child;if(m.subtreeFlags&2064&&T!==null)T.return=m,z=T;else e:for(m=E;z!==null;){if(y=z,y.flags&2048)try{switch(y.tag){case 0:case 11:case 15:Ko(9,y)}}catch($){Oe(y,y.return,$)}if(y===m){z=null;break e}var D=y.sibling;if(D!==null){D.return=y.return,z=D;break e}z=y.return}}if(oe=d,Un(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(so,t)}catch{}a=!0}return a}finally{pe=o,Lt.transition=i}}return!1}function $p(t,i,o){i=ii(o,i),i=ap(t,i,1),t=zn(t,i,1),i=st(),t!==null&&(zi(t,1,i),mt(t,i))}function Oe(t,i,o){if(t.tag===3)$p(t,t,o);else for(;i!==null;){if(i.tag===3){$p(i,t,o);break}else if(i.tag===1){var a=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Bn===null||!Bn.has(a))){t=ii(o,t),t=up(i,t,1),i=zn(i,t,1),t=st(),i!==null&&(zi(i,1,t),mt(i,t));break}}i=i.return}}function l0(t,i,o){var a=t.pingCache;a!==null&&a.delete(i),i=st(),t.pingedLanes|=t.suspendedLanes&o,He===t&&(Qe&o)===o&&(ze===4||ze===3&&(Qe&130023424)===Qe&&500>Me()-Hu?vr(t,0):$u|=o),mt(t,i)}function Hp(t,i){i===0&&(t.mode&1?(i=lo,lo<<=1,!(lo&130023424)&&(lo=4194304)):i=1);var o=st();t=pn(t,i),t!==null&&(zi(t,i,o),mt(t,o))}function a0(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Hp(t,o)}function u0(t,i){var o=0;switch(t.tag){case 13:var a=t.stateNode,d=t.memoizedState;d!==null&&(o=d.retryLane);break;case 19:a=t.stateNode;break;default:throw Error(n(314))}a!==null&&a.delete(i),Hp(t,o)}var Gp;Gp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||dt.current)ft=!0;else{if(!(t.lanes&o)&&!(i.flags&128))return ft=!1,Qw(t,i,o);ft=!!(t.flags&131072)}else ft=!1,Re&&i.flags&1048576&&Tf(i,Ao,i.index);switch(i.lanes=0,i.tag){case 2:var a=i.type;Ho(t,i),t=i.pendingProps;var d=Qr(i,Ze.current);ni(i,o),d=Su(null,i,a,t,d,o);var h=Cu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,ht(a)?(h=!0,No(i)):h=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,mu(i),d.updater=Vo,i.stateNode=d,d._reactInternals=i,Pu(i,a,t,o),i=Du(null,i,a,!0,h,o)):(i.tag=0,Re&&h&&su(i),it(null,i,d,o),i=i.child),i;case 16:a=i.elementType;e:{switch(Ho(t,i),t=i.pendingProps,d=a._init,a=d(a._payload),i.type=a,d=i.tag=d0(a),t=Vt(a,t),d){case 0:i=Ou(null,i,a,t,o);break e;case 1:i=yp(null,i,a,t,o);break e;case 11:i=fp(null,i,a,t,o);break e;case 14:i=pp(null,i,a,Vt(a.type,t),o);break e}throw Error(n(306,a,""))}return i;case 0:return a=i.type,d=i.pendingProps,d=i.elementType===a?d:Vt(a,d),Ou(t,i,a,d,o);case 1:return a=i.type,d=i.pendingProps,d=i.elementType===a?d:Vt(a,d),yp(t,i,a,d,o);case 3:e:{if(vp(i),t===null)throw Error(n(387));a=i.pendingProps,h=i.memoizedState,d=h.element,Lf(t,i),bo(i,a,null,o);var m=i.memoizedState;if(a=m.element,h.isDehydrated)if(h={element:a,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){d=ii(Error(n(423)),i),i=wp(t,i,a,o,d);break e}else if(a!==d){d=ii(Error(n(424)),i),i=wp(t,i,a,o,d);break e}else for(kt=Mn(i.stateNode.containerInfo.firstChild),Tt=i,Re=!0,Bt=null,o=Of(i,null,a,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Zr(),a===d){i=gn(t,i,o);break e}it(t,i,a,o)}i=i.child}return i;case 5:return Ff(i),t===null&&au(i),a=i.type,d=i.pendingProps,h=t!==null?t.memoizedProps:null,m=d.children,Za(a,d)?m=null:h!==null&&Za(a,h)&&(i.flags|=32),_p(t,i),it(t,i,m,o),i.child;case 6:return t===null&&au(i),null;case 13:return Ep(t,i,o);case 4:return gu(i,i.stateNode.containerInfo),a=i.pendingProps,t===null?i.child=ei(i,null,a,o):it(t,i,a,o),i.child;case 11:return a=i.type,d=i.pendingProps,d=i.elementType===a?d:Vt(a,d),fp(t,i,a,d,o);case 7:return it(t,i,i.pendingProps,o),i.child;case 8:return it(t,i,i.pendingProps.children,o),i.child;case 12:return it(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(a=i.type._context,d=i.pendingProps,h=i.memoizedProps,m=d.value,Se(Do,a._currentValue),a._currentValue=m,h!==null)if(Wt(h.value,m)){if(h.children===d.children&&!dt.current){i=gn(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var y=h.dependencies;if(y!==null){m=h.child;for(var w=y.firstContext;w!==null;){if(w.context===a){if(h.tag===1){w=mn(-1,o&-o),w.tag=2;var N=h.updateQueue;if(N!==null){N=N.shared;var x=N.pending;x===null?w.next=w:(w.next=x.next,x.next=w),N.pending=w}}h.lanes|=o,w=h.alternate,w!==null&&(w.lanes|=o),fu(h.return,o,i),y.lanes|=o;break}w=w.next}}else if(h.tag===10)m=h.type===i.type?null:h.child;else if(h.tag===18){if(m=h.return,m===null)throw Error(n(341));m.lanes|=o,y=m.alternate,y!==null&&(y.lanes|=o),fu(m,o,i),m=h.sibling}else m=h.child;if(m!==null)m.return=h;else for(m=h;m!==null;){if(m===i){m=null;break}if(h=m.sibling,h!==null){h.return=m.return,m=h;break}m=m.return}h=m}it(t,i,d.children,o),i=i.child}return i;case 9:return d=i.type,a=i.pendingProps.children,ni(i,o),d=Ot(d),a=a(d),i.flags|=1,it(t,i,a,o),i.child;case 14:return a=i.type,d=Vt(a,i.pendingProps),d=Vt(a.type,d),pp(t,i,a,d,o);case 15:return mp(t,i,i.type,i.pendingProps,o);case 17:return a=i.type,d=i.pendingProps,d=i.elementType===a?d:Vt(a,d),Ho(t,i),i.tag=1,ht(a)?(t=!0,No(i)):t=!1,ni(i,o),op(i,a,d),Pu(i,a,d,o),Du(null,i,a,!0,t,o);case 19:return Cp(t,i,o);case 22:return gp(t,i,o)}throw Error(n(156,i.tag))};function Kp(t,i){return Th(t,i)}function c0(t,i,o,a){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(t,i,o,a){return new c0(t,i,o,a)}function Zu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function d0(t){if(typeof t=="function")return Zu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Pt)return 11;if(t===Jt)return 14}return 2}function Gn(t,i){var o=t.alternate;return o===null?(o=Mt(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function nl(t,i,o,a,d,h){var m=2;if(a=t,typeof t=="function")Zu(t)&&(m=1);else if(typeof t=="string")m=5;else e:switch(t){case Q:return Er(o.children,d,h,i);case se:m=8,d|=8;break;case Ve:return t=Mt(12,o,i,d|2),t.elementType=Ve,t.lanes=h,t;case St:return t=Mt(13,o,i,d),t.elementType=St,t.lanes=h,t;case jt:return t=Mt(19,o,i,d),t.elementType=jt,t.lanes=h,t;case xe:return rl(o,d,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case rt:m=10;break e;case Xt:m=9;break e;case Pt:m=11;break e;case Jt:m=14;break e;case ct:m=16,a=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Mt(m,o,i,d),i.elementType=t,i.type=a,i.lanes=h,i}function Er(t,i,o,a){return t=Mt(7,t,a,i),t.lanes=o,t}function rl(t,i,o,a){return t=Mt(22,t,a,i),t.elementType=xe,t.lanes=o,t.stateNode={isHidden:!1},t}function ec(t,i,o){return t=Mt(6,t,null,i),t.lanes=o,t}function tc(t,i,o){return i=Mt(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function h0(t,i,o,a,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ra(0),this.expirationTimes=Ra(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ra(0),this.identifierPrefix=a,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function nc(t,i,o,a,d,h,m,y,w){return t=new h0(t,i,o,y,w),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Mt(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:a,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},mu(h),t}function f0(t,i,o){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Z,key:a==null?null:""+a,children:t,containerInfo:i,implementation:o}}function qp(t){if(!t)return Fn;t=t._reactInternals;e:{if(ur(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(ht(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(ht(o))return Sf(t,o,i)}return i}function Yp(t,i,o,a,d,h,m,y,w){return t=nc(o,a,!0,t,d,h,m,y,w),t.context=qp(null),o=t.current,a=st(),d=$n(o),h=mn(a,d),h.callback=i??null,zn(o,h,d),t.current.lanes=d,zi(t,d,a),mt(t,a),t}function il(t,i,o,a){var d=i.current,h=st(),m=$n(d);return o=qp(o),i.context===null?i.context=o:i.pendingContext=o,i=mn(h,m),i.payload={element:t},a=a===void 0?null:a,a!==null&&(i.callback=a),t=zn(d,i,m),t!==null&&(Gt(t,d,m,h),Mo(t,d,m)),m}function sl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Qp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function rc(t,i){Qp(t,i),(t=t.alternate)&&Qp(t,i)}function p0(){return null}var Xp=typeof reportError=="function"?reportError:function(t){console.error(t)};function ic(t){this._internalRoot=t}ol.prototype.render=ic.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));il(t,i,null,null)},ol.prototype.unmount=ic.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;yr(function(){il(null,t,null,null)}),i[cn]=null}};function ol(t){this._internalRoot=t}ol.prototype.unstable_scheduleHydration=function(t){if(t){var i=Dh();t={blockedOn:null,target:t,priority:i};for(var o=0;o<On.length&&i!==0&&i<On[o].priority;o++);On.splice(o,0,t),o===0&&bh(t)}};function sc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ll(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Jp(){}function m0(t,i,o,a,d){if(d){if(typeof a=="function"){var h=a;a=function(){var N=sl(m);h.call(N)}}var m=Yp(i,a,t,0,null,!1,!1,"",Jp);return t._reactRootContainer=m,t[cn]=m.current,es(t.nodeType===8?t.parentNode:t),yr(),m}for(;d=t.lastChild;)t.removeChild(d);if(typeof a=="function"){var y=a;a=function(){var N=sl(w);y.call(N)}}var w=nc(t,0,!1,null,null,!1,!1,"",Jp);return t._reactRootContainer=w,t[cn]=w.current,es(t.nodeType===8?t.parentNode:t),yr(function(){il(i,w,o,a)}),w}function al(t,i,o,a,d){var h=o._reactRootContainer;if(h){var m=h;if(typeof d=="function"){var y=d;d=function(){var w=sl(m);y.call(w)}}il(i,m,t,d)}else m=m0(o,i,t,d,a);return sl(m)}xh=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=ji(i.pendingLanes);o!==0&&(Pa(i,o|1),mt(i,Me()),!(oe&6)&&(li=Me()+500,Un()))}break;case 13:yr(function(){var a=pn(t,1);if(a!==null){var d=st();Gt(a,t,1,d)}}),rc(t,1)}},Aa=function(t){if(t.tag===13){var i=pn(t,134217728);if(i!==null){var o=st();Gt(i,t,134217728,o)}rc(t,134217728)}},Oh=function(t){if(t.tag===13){var i=$n(t),o=pn(t,i);if(o!==null){var a=st();Gt(o,t,i,a)}rc(t,i)}},Dh=function(){return pe},Lh=function(t,i){var o=pe;try{return pe=t,i()}finally{pe=o}},Sa=function(t,i,o){switch(i){case"input":if(pa(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var a=o[i];if(a!==t&&a.form===t.form){var d=To(a);if(!d)throw Error(n(90));ih(a),pa(a,d)}}}break;case"textarea":uh(t,o);break;case"select":i=o.value,i!=null&&Ur(t,!!o.multiple,i,!1)}},yh=Qu,vh=yr;var g0={usingClientEntryPoint:!1,Events:[rs,qr,To,gh,_h,Qu]},_s={findFiberByHostInstance:cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_0={bundleType:_s.bundleType,version:_s.version,rendererPackageName:_s.rendererPackageName,rendererConfig:_s.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:le.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ch(t),t===null?null:t.stateNode},findFiberByHostInstance:_s.findFiberByHostInstance||p0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ul=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ul.isDisabled&&ul.supportsFiber)try{so=ul.inject(_0),Zt=ul}catch{}}return gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=g0,gt.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sc(i))throw Error(n(200));return f0(t,i,null,o)},gt.createRoot=function(t,i){if(!sc(t))throw Error(n(299));var o=!1,a="",d=Xp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(a=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=nc(t,1,!1,null,null,o,!1,a,d),t[cn]=i.current,es(t.nodeType===8?t.parentNode:t),new ic(i)},gt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Ch(i),t=t===null?null:t.stateNode,t},gt.flushSync=function(t){return yr(t)},gt.hydrate=function(t,i,o){if(!ll(i))throw Error(n(200));return al(null,t,i,!0,o)},gt.hydrateRoot=function(t,i,o){if(!sc(t))throw Error(n(405));var a=o!=null&&o.hydratedSources||null,d=!1,h="",m=Xp;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(m=o.onRecoverableError)),i=Yp(i,null,t,1,o??null,d,!1,h,m),t[cn]=i.current,es(t),a)for(t=0;t<a.length;t++)o=a[t],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new ol(i)},gt.render=function(t,i,o){if(!ll(i))throw Error(n(200));return al(null,t,i,!1,o)},gt.unmountComponentAtNode=function(t){if(!ll(t))throw Error(n(40));return t._reactRootContainer?(yr(function(){al(null,null,t,!1,function(){t._reactRootContainer=null,t[cn]=null})}),!0):!1},gt.unstable_batchedUpdates=Qu,gt.unstable_renderSubtreeIntoContainer=function(t,i,o,a){if(!ll(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return al(t,i,o,!1,a)},gt.version="18.3.1-next-f1338f8080-20240426",gt}var lm;function T0(){if(lm)return ac.exports;lm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),ac.exports=I0(),ac.exports}var am;function k0(){if(am)return cl;am=1;var r=T0();return cl.createRoot=r.createRoot,cl.hydrateRoot=r.hydrateRoot,cl}var N0=k0();const ye={GRASS:"grass",WATER:"water",ROCK:"rock",EMPTY:"empty",FOOD:"food",NULL:"null",GAME:"game",WOOD:"wood",SELL_APPLE:"sellApple",FREE_WAY:"freeway",HOME:"home"},R0={[ye.GRASS]:.4,[ye.WATER]:.2,[ye.EMPTY]:.1,[ye.ROCK]:.14,[ye.FOOD]:.15,[ye.HOME]:.01},P0=["moveU","moveR","moveD","moveL","dragon"],A0="_tile_1en58_1",x0="_grass_1en58_14",O0="_water_1en58_22",D0="_rock_1en58_29",L0="_empty_1en58_36",M0="_food_1en58_43",b0="_game_1en58_50",F0="_home_1en58_51",U0="_wood_1en58_58",j0="_sellApple_1en58_65",z0="_freeway_1en58_72",um={tile:A0,grass:x0,water:O0,rock:D0,empty:L0,food:M0,game:b0,home:F0,wood:U0,sellApple:j0,freeway:z0};var dc={exports:{}},hc,cm;function W0(){if(cm)return hc;cm=1;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return hc=r,hc}var fc,dm;function B0(){if(dm)return fc;dm=1;var r=W0();function e(){}function n(){}return n.resetWarningCache=e,fc=function(){function s(c,f,p,g,v,_){if(_!==r){var S=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw S.name="Invariant Violation",S}}s.isRequired=s;function l(){return s}var u={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:l,element:s,elementType:s,instanceOf:l,node:s,objectOf:l,oneOf:l,oneOfType:l,shape:l,exact:l,checkPropTypes:n,resetWarningCache:e};return u.PropTypes=u,u},fc}var hm;function V0(){return hm||(hm=1,dc.exports=B0()()),dc.exports}var $0=V0();const vt=bg($0);function $l(r){const{isActive:e=!1,type:n="empty",site:s="home"}=r,l={[ye.GRASS]:s==="home"?"":"☘️",[ye.WATER]:"",[ye.ROCK]:"⛰️",[ye.EMPTY]:"",[ye.FOOD]:"🍎",[ye.GAME]:"🌳",[ye.SELL_APPLE]:"💰",[ye.FREE_WAY]:"🚦",[ye.HOME]:"🏠"};return M.jsx("div",{className:`${um.tile} ${um[n]}`,children:l[n]})}$l.propTypes={isActive:vt.bool,type:vt.string,site:vt.string};const H0="_board_16uod_1",G0="_row_16uod_8",K0="_boardContainer_16uod_13",Nr={board:H0,row:G0,boardContainer:K0};var fm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L=function(r,e){if(!r)throw ki(e)},ki=function(r){return new Error("Firebase Database ("+Fg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+r)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):(l&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},q0=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const l=r[n++];if(l<128)e[s++]=String.fromCharCode(l);else if(l>191&&l<224){const u=r[n++];e[s++]=String.fromCharCode((l&31)<<6|u&63)}else if(l>239&&l<365){const u=r[n++],c=r[n++],f=r[n++],p=((l&7)<<18|(u&63)<<12|(c&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const u=r[n++],c=r[n++];e[s++]=String.fromCharCode((l&15)<<12|(u&63)<<6|c&63)}}return e.join("")},id={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<r.length;l+=3){const u=r[l],c=l+1<r.length,f=c?r[l+1]:0,p=l+2<r.length,g=p?r[l+2]:0,v=u>>2,_=(u&3)<<4|f>>4;let S=(f&15)<<2|g>>6,k=g&63;p||(k=64,c||(S=64)),s.push(n[v],n[_],n[S],n[k])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Ug(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):q0(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<r.length;){const u=n[r.charAt(l++)],f=l<r.length?n[r.charAt(l)]:0;++l;const g=l<r.length?n[r.charAt(l)]:64;++l;const _=l<r.length?n[r.charAt(l)]:64;if(++l,u==null||f==null||g==null||_==null)throw new Y0;const S=u<<2|f>>4;if(s.push(S),g!==64){const k=f<<4&240|g>>2;if(s.push(k),_!==64){const R=g<<6&192|_;s.push(R)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Y0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jg=function(r){const e=Ug(r);return id.encodeByteArray(e,!0)},vl=function(r){return jg(r).replace(/\./g,"")},wl=function(r){try{return id.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q0(r){return zg(void 0,r)}function zg(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!X0(n)||(r[n]=zg(r[n],e[n]));return r}function X0(r){return r!=="__proto__"}/**
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
 */function J0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Z0=()=>J0().__FIREBASE_DEFAULTS__,eE=()=>{if(typeof process>"u"||typeof fm>"u")return;const r=fm.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},tE=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&wl(r[1]);return e&&JSON.parse(e)},sd=()=>{try{return Z0()||eE()||tE()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Wg=r=>{var e,n;return(n=(e=sd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[r]},nE=r=>{const e=Wg(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Bg=()=>{var r;return(r=sd())===null||r===void 0?void 0:r.config},Vg=r=>{var e;return(e=sd())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function rE(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",l=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},r);return[vl(JSON.stringify(n)),vl(JSON.stringify(c)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function od(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function iE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function $g(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Hg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sE(){const r=ut();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Gg(){return Fg.NODE_ADMIN===!0}function Kg(){try{return typeof indexedDB=="object"}catch{return!1}}function qg(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},l.onupgradeneeded=()=>{n=!1},l.onerror=()=>{var u;e(((u=l.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){e(n)}})}function oE(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE="FirebaseError";class an extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=lE,Object.setPrototypeOf(this,an.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Lr.prototype.create)}}class Lr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},l=`${this.service}/${e}`,u=this.errors[e],c=u?aE(u,s):"Error",f=`${this.serviceName}: ${c} (${l}).`;return new an(l,f,s)}}function aE(r,e){return r.replace(uE,(n,s)=>{const l=e[s];return l!=null?String(l):`<${s}?>`})}const uE=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(r){return JSON.parse(r)}function Be(r){return JSON.stringify(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg=function(r){let e={},n={},s={},l="";try{const u=r.split(".");e=As(wl(u[0])||""),n=As(wl(u[1])||""),l=u[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:l}},cE=function(r){const e=Yg(r),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},dE=function(r){const e=Yg(r).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function yi(r,e){if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}function xc(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function El(r,e,n){const s={};for(const l in r)Object.prototype.hasOwnProperty.call(r,l)&&(s[l]=e.call(n,r[l],l,r));return s}function xs(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const l of n){if(!s.includes(l))return!1;const u=r[l],c=e[l];if(pm(u)&&pm(c)){if(!xs(u,c))return!1}else if(u!==c)return!1}for(const l of s)if(!n.includes(l))return!1;return!0}function pm(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(r){const e=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(l=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(l))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let _=0;_<16;_++)s[_]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let _=0;_<16;_++)s[_]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let _=16;_<80;_++){const S=s[_-3]^s[_-8]^s[_-14]^s[_-16];s[_]=(S<<1|S>>>31)&4294967295}let l=this.chain_[0],u=this.chain_[1],c=this.chain_[2],f=this.chain_[3],p=this.chain_[4],g,v;for(let _=0;_<80;_++){_<40?_<20?(g=f^u&(c^f),v=1518500249):(g=u^c^f,v=1859775393):_<60?(g=u&c|f&(u|c),v=2400959708):(g=u^c^f,v=3395469782);const S=(l<<5|l>>>27)+g+p+v+s[_]&4294967295;p=f,f=c,c=(u<<30|u>>>2)&4294967295,u=l,l=S}this.chain_[0]=this.chain_[0]+l&4294967295,this.chain_[1]=this.chain_[1]+u&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let l=0;const u=this.buf_;let c=this.inbuf_;for(;l<n;){if(c===0)for(;l<=s;)this.compress_(e,l),l+=this.blockSize;if(typeof e=="string"){for(;l<n;)if(u[c]=e.charCodeAt(l),++c,++l,c===this.blockSize){this.compress_(u),c=0;break}}else for(;l<n;)if(u[c]=e[l],++c,++l,c===this.blockSize){this.compress_(u),c=0;break}}this.inbuf_=c,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let l=this.blockSize-1;l>=56;l--)this.buf_[l]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let l=0;l<5;l++)for(let u=24;u>=0;u-=8)e[s]=this.chain_[l]>>u&255,++s;return e}}function fE(r,e){const n=new pE(r,e);return n.subscribe.bind(n)}class pE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let l;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");mE(e,["next","error","complete"])?l=e:l={next:e,error:n,complete:s},l.next===void 0&&(l.next=pc),l.error===void 0&&(l.error=pc),l.complete===void 0&&(l.complete=pc);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mE(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function pc(){}function Hl(r,e){return`${r} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gE=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);if(l>=55296&&l<=56319){const u=l-55296;s++,L(s<r.length,"Surrogate pair missing trail surrogate.");const c=r.charCodeAt(s)-56320;l=65536+(u<<10)+c}l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):l<65536?(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},Gl=function(r){let e=0;for(let n=0;n<r.length;n++){const s=r.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const _E=1e3,yE=2,vE=4*60*60*1e3,wE=.5;function mm(r,e=_E,n=yE){const s=e*Math.pow(n,r),l=Math.round(wE*s*(Math.random()-.5)*2);return Math.min(vE,s+l)}/**
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
 */function Et(r){return r&&r._delegate?r._delegate:r}class Qt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Cr="[DEFAULT]";/**
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
 */class EE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Bs;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:n});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),l=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(l)return null;throw u}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(CE(e))try{this.getOrInitializeService({instanceIdentifier:Cr})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:l});s.resolve(u)}catch{}}}}clearInstance(e=Cr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Cr){return this.instances.has(e)}getOptions(e=Cr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,c]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(u);s===f&&c.resolve(l)}return l}onInit(e,n){var s;const l=this.normalizeInstanceIdentifier(n),u=(s=this.onInitCallbacks.get(l))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(l,u);const c=this.instances.get(l);return c&&e(c,l),()=>{u.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const l of s)try{l(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:SE(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Cr){return this.component?this.component.multipleInstances?e:Cr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function SE(r){return r===Cr?void 0:r}function CE(r){return r.instantiationMode==="EAGER"}/**
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
 */class IE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new EE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(_e||(_e={}));const TE={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},kE=_e.INFO,NE={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},RE=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),l=NE[e];if(l)console[l](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Kl{constructor(e){this.name=e,this._logLevel=kE,this._logHandler=RE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?TE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const PE=(r,e)=>e.some(n=>r instanceof n);let gm,_m;function AE(){return gm||(gm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xE(){return _m||(_m=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qg=new WeakMap,Oc=new WeakMap,Xg=new WeakMap,mc=new WeakMap,ld=new WeakMap;function OE(r){const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("success",u),r.removeEventListener("error",c)},u=()=>{n(er(r.result)),l()},c=()=>{s(r.error),l()};r.addEventListener("success",u),r.addEventListener("error",c)});return e.then(n=>{n instanceof IDBCursor&&Qg.set(n,r)}).catch(()=>{}),ld.set(e,r),e}function DE(r){if(Oc.has(r))return;const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",c),r.removeEventListener("abort",c)},u=()=>{n(),l()},c=()=>{s(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",u),r.addEventListener("error",c),r.addEventListener("abort",c)});Oc.set(r,e)}let Dc={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return Oc.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Xg.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return er(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function LE(r){Dc=r(Dc)}function ME(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(gc(this),e,...n);return Xg.set(s,e.sort?e.sort():[e]),er(s)}:xE().includes(r)?function(...e){return r.apply(gc(this),e),er(Qg.get(this))}:function(...e){return er(r.apply(gc(this),e))}}function bE(r){return typeof r=="function"?ME(r):(r instanceof IDBTransaction&&DE(r),PE(r,AE())?new Proxy(r,Dc):r)}function er(r){if(r instanceof IDBRequest)return OE(r);if(mc.has(r))return mc.get(r);const e=bE(r);return e!==r&&(mc.set(r,e),ld.set(e,r)),e}const gc=r=>ld.get(r);function Jg(r,e,{blocked:n,upgrade:s,blocking:l,terminated:u}={}){const c=indexedDB.open(r,e),f=er(c);return s&&c.addEventListener("upgradeneeded",p=>{s(er(c.result),p.oldVersion,p.newVersion,er(c.transaction),p)}),n&&c.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),f.then(p=>{u&&p.addEventListener("close",()=>u()),l&&p.addEventListener("versionchange",g=>l(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const FE=["get","getKey","getAll","getAllKeys","count"],UE=["put","add","delete","clear"],_c=new Map;function ym(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(_c.get(e))return _c.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,l=UE.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(l||FE.includes(n)))return;const u=async function(c,...f){const p=this.transaction(c,l?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(f.shift())),(await Promise.all([g[n](...f),l&&p.done]))[0]};return _c.set(e,u),u}LE(r=>({...r,get:(e,n,s)=>ym(e,n)||r.get(e,n,s),has:(e,n)=>!!ym(e,n)||r.has(e,n)}));/**
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
 */class jE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(zE(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function zE(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Lc="@firebase/app",vm="0.10.17";/**
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
 */const In=new Kl("@firebase/app"),WE="@firebase/app-compat",BE="@firebase/analytics-compat",VE="@firebase/analytics",$E="@firebase/app-check-compat",HE="@firebase/app-check",GE="@firebase/auth",KE="@firebase/auth-compat",qE="@firebase/database",YE="@firebase/data-connect",QE="@firebase/database-compat",XE="@firebase/functions",JE="@firebase/functions-compat",ZE="@firebase/installations",eS="@firebase/installations-compat",tS="@firebase/messaging",nS="@firebase/messaging-compat",rS="@firebase/performance",iS="@firebase/performance-compat",sS="@firebase/remote-config",oS="@firebase/remote-config-compat",lS="@firebase/storage",aS="@firebase/storage-compat",uS="@firebase/firestore",cS="@firebase/vertexai",dS="@firebase/firestore-compat",hS="firebase",fS="11.1.0";/**
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
 */const Mc="[DEFAULT]",pS={[Lc]:"fire-core",[WE]:"fire-core-compat",[VE]:"fire-analytics",[BE]:"fire-analytics-compat",[HE]:"fire-app-check",[$E]:"fire-app-check-compat",[GE]:"fire-auth",[KE]:"fire-auth-compat",[qE]:"fire-rtdb",[YE]:"fire-data-connect",[QE]:"fire-rtdb-compat",[XE]:"fire-fn",[JE]:"fire-fn-compat",[ZE]:"fire-iid",[eS]:"fire-iid-compat",[tS]:"fire-fcm",[nS]:"fire-fcm-compat",[rS]:"fire-perf",[iS]:"fire-perf-compat",[sS]:"fire-rc",[oS]:"fire-rc-compat",[lS]:"fire-gcs",[aS]:"fire-gcs-compat",[uS]:"fire-fst",[dS]:"fire-fst-compat",[cS]:"fire-vertex","fire-js":"fire-js",[hS]:"fire-js-all"};/**
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
 */const Sl=new Map,mS=new Map,bc=new Map;function wm(r,e){try{r.container.addComponent(e)}catch(n){In.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function ln(r){const e=r.name;if(bc.has(e))return In.debug(`There were multiple attempts to register component ${e}.`),!1;bc.set(e,r);for(const n of Sl.values())wm(n,r);for(const n of mS.values())wm(n,r);return!0}function Mr(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function yn(r){return r.settings!==void 0}/**
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
 */const gS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},tr=new Lr("app","Firebase",gS);/**
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
 */class _S{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Qt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw tr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ri=fS;function Zg(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Mc,automaticDataCollectionEnabled:!1},e),l=s.name;if(typeof l!="string"||!l)throw tr.create("bad-app-name",{appName:String(l)});if(n||(n=Bg()),!n)throw tr.create("no-options");const u=Sl.get(l);if(u){if(xs(n,u.options)&&xs(s,u.config))return u;throw tr.create("duplicate-app",{appName:l})}const c=new IE(l);for(const p of bc.values())c.addComponent(p);const f=new _S(n,s,c);return Sl.set(l,f),f}function ad(r=Mc){const e=Sl.get(r);if(!e&&r===Mc&&Bg())return Zg();if(!e)throw tr.create("no-app",{appName:r});return e}function Ft(r,e,n){var s;let l=(s=pS[r])!==null&&s!==void 0?s:r;n&&(l+=`-${n}`);const u=l.match(/\s|\//),c=e.match(/\s|\//);if(u||c){const f=[`Unable to register library "${l}" with version "${e}":`];u&&f.push(`library name "${l}" contains illegal characters (whitespace or "/")`),u&&c&&f.push("and"),c&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),In.warn(f.join(" "));return}ln(new Qt(`${l}-version`,()=>({library:l,version:e}),"VERSION"))}/**
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
 */const yS="firebase-heartbeat-database",vS=1,Os="firebase-heartbeat-store";let yc=null;function e_(){return yc||(yc=Jg(yS,vS,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Os)}catch(n){console.warn(n)}}}}).catch(r=>{throw tr.create("idb-open",{originalErrorMessage:r.message})})),yc}async function wS(r){try{const n=(await e_()).transaction(Os),s=await n.objectStore(Os).get(t_(r));return await n.done,s}catch(e){if(e instanceof an)In.warn(e.message);else{const n=tr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});In.warn(n.message)}}}async function Em(r,e){try{const s=(await e_()).transaction(Os,"readwrite");await s.objectStore(Os).put(e,t_(r)),await s.done}catch(n){if(n instanceof an)In.warn(n.message);else{const s=tr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});In.warn(s.message)}}}function t_(r){return`${r.name}!${r.options.appId}`}/**
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
 */const ES=1024,SS=30*24*60*60*1e3;class CS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new TS(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Sm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(c=>c.date===u)?void 0:(this._heartbeatsCache.heartbeats.push({date:u,agent:l}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(c=>{const f=new Date(c.date).valueOf();return Date.now()-f<=SS}),this._storage.overwrite(this._heartbeatsCache))}catch(s){In.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Sm(),{heartbeatsToSend:s,unsentEntries:l}=IS(this._heartbeatsCache.heartbeats),u=vl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return In.warn(n),""}}}function Sm(){return new Date().toISOString().substring(0,10)}function IS(r,e=ES){const n=[];let s=r.slice();for(const l of r){const u=n.find(c=>c.agent===l.agent);if(u){if(u.dates.push(l.date),Cm(n)>e){u.dates.pop();break}}else if(n.push({agent:l.agent,dates:[l.date]}),Cm(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class TS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Kg()?qg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await wS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return Em(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return Em(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...e.heartbeats]})}else return}}function Cm(r){return vl(JSON.stringify({version:2,heartbeats:r})).length}/**
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
 */function kS(r){ln(new Qt("platform-logger",e=>new jE(e),"PRIVATE")),ln(new Qt("heartbeat",e=>new CS(e),"PRIVATE")),Ft(Lc,vm,r),Ft(Lc,vm,"esm2017"),Ft("fire-js","")}kS("");var Im={};const Tm="@firebase/database",km="1.0.10";/**
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
 */let n_="";function NS(r){n_=r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Be(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:As(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return un(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_=function(r){try{if(typeof window<"u"&&typeof window[r]<"u"){const e=window[r];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new RS(e)}}catch{}return new PS},Tr=r_("localStorage"),AS=r_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi=new Kl("@firebase/database"),xS=function(){let r=1;return function(){return r++}}(),i_=function(r){const e=gE(r),n=new hE;n.update(e);const s=n.digest();return id.encodeByteArray(s)},Vs=function(...r){let e="";for(let n=0;n<r.length;n++){const s=r[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Vs.apply(null,s):typeof s=="object"?e+=Be(s):e+=s,e+=" "}return e};let Cs=null,Nm=!0;const OS=function(r,e){L(!e,"Can't turn on custom loggers persistently."),fi.logLevel=_e.VERBOSE,Cs=fi.log.bind(fi)},Xe=function(...r){if(Nm===!0&&(Nm=!1,Cs===null&&AS.get("logging_enabled")===!0&&OS()),Cs){const e=Vs.apply(null,r);Cs(e)}},$s=function(r){return function(...e){Xe(r,...e)}},Fc=function(...r){const e="FIREBASE INTERNAL ERROR: "+Vs(...r);fi.error(e)},Tn=function(...r){const e=`FIREBASE FATAL ERROR: ${Vs(...r)}`;throw fi.error(e),new Error(e)},at=function(...r){const e="FIREBASE WARNING: "+Vs(...r);fi.warn(e)},DS=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&at("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ud=function(r){return typeof r=="number"&&(r!==r||r===Number.POSITIVE_INFINITY||r===Number.NEGATIVE_INFINITY)},LS=function(r){if(document.readyState==="complete")r();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,r())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},vi="[MIN_NAME]",Rr="[MAX_NAME]",br=function(r,e){if(r===e)return 0;if(r===vi||e===Rr)return-1;if(e===vi||r===Rr)return 1;{const n=Rm(r),s=Rm(e);return n!==null?s!==null?n-s===0?r.length-e.length:n-s:-1:s!==null?1:r<e?-1:1}},MS=function(r,e){return r===e?0:r<e?-1:1},vs=function(r,e){if(e&&r in e)return e[r];throw new Error("Missing required key ("+r+") in object: "+Be(e))},cd=function(r){if(typeof r!="object"||r===null)return Be(r);const e=[];for(const s in r)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Be(e[s]),n+=":",n+=cd(r[e[s]]);return n+="}",n},s_=function(r,e){const n=r.length;if(n<=e)return[r];const s=[];for(let l=0;l<n;l+=e)l+e>n?s.push(r.substring(l,n)):s.push(r.substring(l,l+e));return s};function Je(r,e){for(const n in r)r.hasOwnProperty(n)&&e(n,r[n])}const o_=function(r){L(!ud(r),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let l,u,c,f,p;r===0?(u=0,c=0,l=1/r===-1/0?1:0):(l=r<0,r=Math.abs(r),r>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(r)/Math.LN2),s),u=f+s,c=Math.round(r*Math.pow(2,n-f)-Math.pow(2,n))):(u=0,c=Math.round(r/Math.pow(2,1-s-n))));const g=[];for(p=n;p;p-=1)g.push(c%2?1:0),c=Math.floor(c/2);for(p=e;p;p-=1)g.push(u%2?1:0),u=Math.floor(u/2);g.push(l?1:0),g.reverse();const v=g.join("");let _="";for(p=0;p<64;p+=8){let S=parseInt(v.substr(p,8),2).toString(16);S.length===1&&(S="0"+S),_=_+S}return _.toLowerCase()},bS=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},FS=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function US(r,e){let n="Unknown Error";r==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":r==="permission_denied"?n="Client doesn't have permission to access the desired data.":r==="unavailable"&&(n="The service is unavailable");const s=new Error(r+" at "+e._path.toString()+": "+n);return s.code=r.toUpperCase(),s}const jS=new RegExp("^-?(0*)\\d{1,10}$"),zS=-2147483648,WS=2147483647,Rm=function(r){if(jS.test(r)){const e=Number(r);if(e>=zS&&e<=WS)return e}return null},Pi=function(r){try{r()}catch(e){setTimeout(()=>{const n=e.stack||"";throw at("Exception was thrown by user callback.",n),e},Math.floor(0))}},BS=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Is=function(r,e){const n=setTimeout(r,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class VS{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){at(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(l=>this.auth_=l)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Xe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',at(e)}}class pl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}pl.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd="5",l_="v",a_="s",u_="r",c_="f",d_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,h_="ls",f_="p",Uc="ac",p_="websocket",m_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e,n,s,l,u=!1,c="",f=!1,p=!1){this.secure=n,this.namespace=s,this.webSocketOnly=l,this.nodeAdmin=u,this.persistenceKey=c,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=p,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Tr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Tr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function HS(r){return r.host!==r.internalHost||r.isCustomHost()||r.includeNamespaceInQueryParams}function __(r,e,n){L(typeof e=="string","typeof type must == string"),L(typeof n=="object","typeof params must == object");let s;if(e===p_)s=(r.secure?"wss://":"ws://")+r.internalHost+"/.ws?";else if(e===m_)s=(r.secure?"https://":"http://")+r.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);HS(r)&&(n.ns=r.namespace);const l=[];return Je(n,(u,c)=>{l.push(u+"="+c)}),s+l.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(){this.counters_={}}incrementCounter(e,n=1){un(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Q0(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc={},wc={};function hd(r){const e=r.toString();return vc[e]||(vc[e]=new GS),vc[e]}function KS(r,e){const n=r.toString();return wc[n]||(wc[n]=e()),wc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let l=0;l<s.length;++l)s[l]&&Pi(()=>{this.onMessage_(s[l])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm="start",YS="close",QS="pLPCommand",XS="pRTLPCB",y_="id",v_="pw",w_="ser",JS="cb",ZS="seg",eC="ts",tC="d",nC="dframe",E_=1870,S_=30,rC=E_-S_,iC=25e3,sC=3e4;class di{constructor(e,n,s,l,u,c,f){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.transportSessionId=c,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=$s(e),this.stats_=hd(n),this.urlFn=p=>(this.appCheckToken&&(p[Uc]=this.appCheckToken),__(n,m_,p))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new qS(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(sC)),LS(()=>{if(this.isClosed_)return;this.scriptTagHolder=new fd((...u)=>{const[c,f,p,g,v]=u;if(this.incrementIncomingBytes_(u),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===Pm)this.id=f,this.password=p;else if(c===YS)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...u)=>{const[c,f]=u;this.incrementIncomingBytes_(u),this.myPacketOrderer.handleResponse(c,f)},()=>{this.onClosed_()},this.urlFn);const s={};s[Pm]="t",s[w_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[JS]=this.scriptTagHolder.uniqueCallbackIdentifier),s[l_]=dd,this.transportSessionId&&(s[a_]=this.transportSessionId),this.lastSessionId&&(s[h_]=this.lastSessionId),this.applicationId&&(s[f_]=this.applicationId),this.appCheckToken&&(s[Uc]=this.appCheckToken),typeof location<"u"&&location.hostname&&d_.test(location.hostname)&&(s[u_]=c_);const l=this.urlFn(s);this.log_("Connecting via long-poll to "+l),this.scriptTagHolder.addTag(l,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){di.forceAllow_=!0}static forceDisallow(){di.forceDisallow_=!0}static isAvailable(){return di.forceAllow_?!0:!di.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!bS()&&!FS()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=jg(n),l=s_(s,rC);for(let u=0;u<l.length;u++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,l.length,l[u]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[nC]="t",s[y_]=e,s[v_]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Be(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class fd{constructor(e,n,s,l){this.onDisconnect=s,this.urlFn=l,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=xS(),window[QS+this.uniqueCallbackIdentifier]=e,window[XS+this.uniqueCallbackIdentifier]=n,this.myIFrame=fd.createIFrame_();let u="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(u='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+u+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(f){Xe("frame writing exception"),f.stack&&Xe(f.stack),Xe(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Xe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[y_]=this.myID,e[v_]=this.myPW,e[w_]=this.currentSerial;let n=this.urlFn(e),s="",l=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+S_+s.length<=E_;){const c=this.pendingSegs.shift();s=s+"&"+ZS+l+"="+c.seg+"&"+eC+l+"="+c.ts+"&"+tC+l+"="+c.d,l++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},l=setTimeout(s,Math.floor(iC)),u=()=>{clearTimeout(l),s()};this.addTag(e,u)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const l=s.readyState;(!l||l==="loaded"||l==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Xe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oC=16384,lC=45e3;let Cl=null;typeof MozWebSocket<"u"?Cl=MozWebSocket:typeof WebSocket<"u"&&(Cl=WebSocket);class Kt{constructor(e,n,s,l,u,c,f){this.connId=e,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=$s(this.connId),this.stats_=hd(n),this.connURL=Kt.connectionURL_(n,c,f,l,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,l,u){const c={};return c[l_]=dd,typeof location<"u"&&location.hostname&&d_.test(location.hostname)&&(c[u_]=c_),n&&(c[a_]=n),s&&(c[h_]=s),l&&(c[Uc]=l),u&&(c[f_]=u),__(e,p_,c)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Tr.set("previous_websocket_failure",!0);try{let s;Gg(),this.mySock=new Cl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_()}}start(){}static forceDisallow(){Kt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Cl!==null&&!Kt.forceDisallow_}static previouslyFailed(){return Tr.isInMemoryStorage||Tr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Tr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=As(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(L(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=s_(n,oC);s.length>1&&this.sendString_(String(s.length));for(let l=0;l<s.length;l++)this.sendString_(s[l])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(lC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Kt.responsesRequiredToBeHealthy=2;Kt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{static get ALL_TRANSPORTS(){return[di,Kt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Kt&&Kt.isAvailable();let s=n&&!Kt.previouslyFailed();if(e.webSocketOnly&&(n||at("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Kt];else{const l=this.transports_=[];for(const u of Ds.ALL_TRANSPORTS)u&&u.isAvailable()&&l.push(u);Ds.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ds.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC=6e4,uC=5e3,cC=10*1024,dC=100*1024,Ec="t",Am="d",hC="s",xm="r",fC="e",Om="o",Dm="a",Lm="n",Mm="p",pC="h";class mC{constructor(e,n,s,l,u,c,f,p,g,v){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=l,this.authToken_=u,this.onMessage_=c,this.onReady_=f,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=v,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=$s("c:"+this.id+":"),this.transportManager_=new Ds(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const l=e.healthyTimeout||0;l>0&&(this.healthyTimeout_=Is(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>dC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>cC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(l)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ec in e){const n=e[Ec];n===Dm?this.upgradeIfSecondaryHealthy_():n===xm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Om&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=vs("t",e),s=vs("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Mm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Dm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Lm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=vs("t",e),s=vs("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=vs(Ec,e);if(Am in e){const s=e[Am];if(n===pC){const l=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(l.h=this.repoInfo_.host),this.onHandshake_(l)}else if(n===Lm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let l=0;l<this.pendingDataMessages.length;++l)this.onDataMessage_(this.pendingDataMessages[l]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===hC?this.onConnectionShutdown_(s):n===xm?this.onReset_(s):n===fC?Fc("Server Error: "+s):n===Om?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Fc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,l=e.h;this.sessionId=e.s,this.repoInfo_.host=l,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),dd!==s&&at("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Is(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(aC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Is(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(uC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Mm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Tr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{put(e,n,s,l){}merge(e,n,s,l){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e){this.allowedEvents_=e,this.listeners_={},L(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let l=0;l<s.length;l++)s[l].callback.apply(s[l].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const l=this.getInitialEvent(e);l&&n.apply(s,l)}off(e,n,s){this.validateEventType_(e);const l=this.listeners_[e]||[];for(let u=0;u<l.length;u++)if(l[u].callback===n&&(!s||s===l[u].context)){l.splice(u,1);return}}validateEventType_(e){L(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il extends I_{static getInstance(){return new Il}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!od()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return L(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm=32,Fm=768;class ve{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let l=0;l<this.pieces_.length;l++)this.pieces_[l].length>0&&(this.pieces_[s]=this.pieces_[l],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function de(){return new ve("")}function te(r){return r.pieceNum_>=r.pieces_.length?null:r.pieces_[r.pieceNum_]}function sr(r){return r.pieces_.length-r.pieceNum_}function Ie(r){let e=r.pieceNum_;return e<r.pieces_.length&&e++,new ve(r.pieces_,e)}function pd(r){return r.pieceNum_<r.pieces_.length?r.pieces_[r.pieces_.length-1]:null}function gC(r){let e="";for(let n=r.pieceNum_;n<r.pieces_.length;n++)r.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(r.pieces_[n])));return e||"/"}function Ls(r,e=0){return r.pieces_.slice(r.pieceNum_+e)}function T_(r){if(r.pieceNum_>=r.pieces_.length)return null;const e=[];for(let n=r.pieceNum_;n<r.pieces_.length-1;n++)e.push(r.pieces_[n]);return new ve(e,0)}function De(r,e){const n=[];for(let s=r.pieceNum_;s<r.pieces_.length;s++)n.push(r.pieces_[s]);if(e instanceof ve)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let l=0;l<s.length;l++)s[l].length>0&&n.push(s[l])}return new ve(n,0)}function ie(r){return r.pieceNum_>=r.pieces_.length}function lt(r,e){const n=te(r),s=te(e);if(n===null)return e;if(n===s)return lt(Ie(r),Ie(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+r+")")}function _C(r,e){const n=Ls(r,0),s=Ls(e,0);for(let l=0;l<n.length&&l<s.length;l++){const u=br(n[l],s[l]);if(u!==0)return u}return n.length===s.length?0:n.length<s.length?-1:1}function md(r,e){if(sr(r)!==sr(e))return!1;for(let n=r.pieceNum_,s=e.pieceNum_;n<=r.pieces_.length;n++,s++)if(r.pieces_[n]!==e.pieces_[s])return!1;return!0}function bt(r,e){let n=r.pieceNum_,s=e.pieceNum_;if(sr(r)>sr(e))return!1;for(;n<r.pieces_.length;){if(r.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class yC{constructor(e,n){this.errorPrefix_=n,this.parts_=Ls(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Gl(this.parts_[s]);k_(this)}}function vC(r,e){r.parts_.length>0&&(r.byteLength_+=1),r.parts_.push(e),r.byteLength_+=Gl(e),k_(r)}function wC(r){const e=r.parts_.pop();r.byteLength_-=Gl(e),r.parts_.length>0&&(r.byteLength_-=1)}function k_(r){if(r.byteLength_>Fm)throw new Error(r.errorPrefix_+"has a key path longer than "+Fm+" bytes ("+r.byteLength_+").");if(r.parts_.length>bm)throw new Error(r.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+bm+") or object contains a cycle "+Ir(r))}function Ir(r){return r.parts_.length===0?"":"in property '"+r.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd extends I_{static getInstance(){return new gd}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return L(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws=1e3,EC=60*5*1e3,Um=30*1e3,SC=1.3,CC=3e4,IC="server_kill",jm=3;class Cn extends C_{constructor(e,n,s,l,u,c,f,p){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=l,this.onServerInfoUpdate_=u,this.authTokenProvider_=c,this.appCheckTokenProvider_=f,this.authOverride_=p,this.id=Cn.nextPersistentConnectionId_++,this.log_=$s("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ws,this.maxReconnectDelay_=EC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p&&!Gg())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");gd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Il.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const l=++this.requestNumber_,u={r:l,a:e,b:n};this.log_(Be(u)),L(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(u),s&&(this.requestCBHash_[l]=s)}get(e){this.initConnection_();const n=new Bs,l={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const f=c.d;c.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(l),this.outstandingGetCount_++;const u=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(u),n.promise}listen(e,n,s,l){this.initConnection_();const u=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+u),this.listens.has(c)||this.listens.set(c,new Map),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),L(!this.listens.get(c).has(u),"listen() called twice for same path/queryId.");const f={onComplete:l,hashFn:n,query:e,tag:s};this.listens.get(c).set(u,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),l=n._queryIdentifier;this.log_("Listen on "+s+" for "+l);const u={p:s},c="q";e.tag&&(u.q=n._queryObject,u.t=e.tag),u.h=e.hashFn(),this.sendRequest(c,u,f=>{const p=f.d,g=f.s;Cn.warnOnListenWarnings_(p,n),(this.listens.get(s)&&this.listens.get(s).get(l))===e&&(this.log_("listen response",f),g!=="ok"&&this.removeListen_(s,l),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&un(e,"w")){const s=yi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const l='".indexOn": "'+n._queryParams.getIndex().toString()+'"',u=n._path.toString();at(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${l} at ${u} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||dE(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Um)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=cE(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,l=>{const u=l.s,c=l.d||"error";this.authToken_===e&&(u==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(u,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),l=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+l),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,l)&&this.connected_&&this.sendUnlisten_(s,l,e._queryObject,n)}sendUnlisten_(e,n,s,l){this.log_("Unlisten on "+e+" for "+n);const u={p:e},c="n";l&&(u.q=s,u.t=l),this.sendRequest(c,u)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,l){const u={p:n,d:s};this.log_("onDisconnect "+e,u),this.sendRequest(e,u,c=>{l&&setTimeout(()=>{l(c.s,c.d)},Math.floor(0))})}put(e,n,s,l){this.putInternal("p",e,n,s,l)}merge(e,n,s,l){this.putInternal("m",e,n,s,l)}putInternal(e,n,s,l,u){this.initConnection_();const c={p:n,d:s};u!==void 0&&(c.h=u),this.outstandingPuts_.push({action:e,request:c,onComplete:l}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,l=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,u=>{this.log_(n+" response",u),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),l&&l(u.s,u.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const u=s.d;this.log_("reportStats","Error sending stats: "+u)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Be(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Fc("Unrecognized action received from server: "+Be(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){L(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ws,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ws,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>CC&&(this.reconnectDelay_=ws),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*SC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),l=this.id+":"+Cn.nextConnectionId_++,u=this.lastSessionId;let c=!1,f=null;const p=function(){f?f.close():(c=!0,s())},g=function(_){L(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(_)};this.realtime_={close:p,sendRequest:g};const v=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[_,S]=await Promise.all([this.authTokenProvider_.getToken(v),this.appCheckTokenProvider_.getToken(v)]);c?Xe("getToken() completed but was canceled"):(Xe("getToken() completed. Creating connection."),this.authToken_=_&&_.accessToken,this.appCheckToken_=S&&S.token,f=new mC(l,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,k=>{at(k+" ("+this.repoInfo_.toString()+")"),this.interrupt(IC)},u))}catch(_){this.log_("Failed to get token: "+_),c||(this.repoInfo_.nodeAdmin&&at(_),p())}}}interrupt(e){Xe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Xe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],xc(this.interruptReasons_)&&(this.reconnectDelay_=ws,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(u=>cd(u)).join("$"):s="default";const l=this.removeListen_(e,s);l&&l.onComplete&&l.onComplete("permission_denied")}removeListen_(e,n){const s=new ve(e).toString();let l;if(this.listens.has(s)){const u=this.listens.get(s);l=u.get(n),u.delete(n),u.size===0&&this.listens.delete(s)}else l=void 0;return l}onAuthRevoked_(e,n){Xe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=jm&&(this.reconnectDelay_=Um,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Xe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=jm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+n_.replace(/\./g,"-")]=1,od()?e["framework.cordova"]=1:Hg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Il.getInstance().currentlyOnline();return xc(this.interruptReasons_)&&e}}Cn.nextPersistentConnectionId_=0;Cn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ql{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ne(vi,e),l=new ne(vi,n);return this.compare(s,l)!==0}minPost(){return ne.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dl;class N_ extends ql{static get __EMPTY_NODE(){return dl}static set __EMPTY_NODE(e){dl=e}compare(e,n){return br(e.name,n.name)}isDefinedOn(e){throw ki("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ne.MIN}maxPost(){return new ne(Rr,dl)}makePost(e,n){return L(typeof e=="string","KeyIndex indexValue must always be a string."),new ne(e,dl)}toString(){return".key"}}const pi=new N_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,n,s,l,u=null){this.isReverse_=l,this.resultGenerator_=u,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=n?s(e.key,n):1,l&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class qe{constructor(e,n,s,l,u){this.key=e,this.value=n,this.color=s??qe.RED,this.left=l??yt.EMPTY_NODE,this.right=u??yt.EMPTY_NODE}copy(e,n,s,l,u){return new qe(e??this.key,n??this.value,s??this.color,l??this.left,u??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let l=this;const u=s(e,l.key);return u<0?l=l.copy(null,null,null,l.left.insert(e,n,s),null):u===0?l=l.copy(null,n,null,null,null):l=l.copy(null,null,null,null,l.right.insert(e,n,s)),l.fixUp_()}removeMin_(){if(this.left.isEmpty())return yt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,l;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return yt.EMPTY_NODE;l=s.right.min_(),s=s.copy(l.key,l.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}qe.RED=!0;qe.BLACK=!1;class TC{copy(e,n,s,l,u){return this}insert(e,n,s){return new qe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class yt{constructor(e,n=yt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new yt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,qe.BLACK,null,null))}remove(e){return new yt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,qe.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,l=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return l?l.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(l=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new hl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new hl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new hl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new hl(this.root_,null,this.comparator_,!0,e)}}yt.EMPTY_NODE=new TC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kC(r,e){return br(r.name,e.name)}function _d(r,e){return br(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jc;function NC(r){jc=r}const R_=function(r){return typeof r=="number"?"number:"+o_(r):"string:"+r},P_=function(r){if(r.isLeafNode()){const e=r.val();L(typeof e=="string"||typeof e=="number"||typeof e=="object"&&un(e,".sv"),"Priority must be a string or number.")}else L(r===jc||r.isEmpty(),"priority of unexpected type.");L(r===jc||r.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zm;class Ke{static set __childrenNodeConstructor(e){zm=e}static get __childrenNodeConstructor(){return zm}constructor(e,n=Ke.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,L(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),P_(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ke(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ke.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ie(e)?this:te(e)===".priority"?this.priorityNode_:Ke.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ke.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=te(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(L(s!==".priority"||sr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ke.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ie(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+R_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=o_(this.value_):e+=this.value_,this.lazyHash_=i_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ke.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ke.__childrenNodeConstructor?-1:(L(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,l=Ke.VALUE_TYPE_ORDER.indexOf(n),u=Ke.VALUE_TYPE_ORDER.indexOf(s);return L(l>=0,"Unknown leaf type: "+n),L(u>=0,"Unknown leaf type: "+s),l===u?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:u-l}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ke.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let A_,x_;function RC(r){A_=r}function PC(r){x_=r}class AC extends ql{compare(e,n){const s=e.node.getPriority(),l=n.node.getPriority(),u=s.compareTo(l);return u===0?br(e.name,n.name):u}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ne.MIN}maxPost(){return new ne(Rr,new Ke("[PRIORITY-POST]",x_))}makePost(e,n){const s=A_(e);return new ne(n,new Ke("[PRIORITY-POST]",s))}toString(){return".priority"}}const Le=new AC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xC=Math.log(2);class OC{constructor(e){const n=u=>parseInt(Math.log(u)/xC,10),s=u=>parseInt(Array(u+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const l=s(this.count);this.bits_=e+1&l}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Tl=function(r,e,n,s){r.sort(e);const l=function(p,g){const v=g-p;let _,S;if(v===0)return null;if(v===1)return _=r[p],S=n?n(_):_,new qe(S,_.node,qe.BLACK,null,null);{const k=parseInt(v/2,10)+p,R=l(p,k),b=l(k+1,g);return _=r[k],S=n?n(_):_,new qe(S,_.node,qe.BLACK,R,b)}},u=function(p){let g=null,v=null,_=r.length;const S=function(R,b){const j=_-R,me=_;_-=R;const we=l(j+1,me),ge=r[j],le=n?n(ge):ge;k(new qe(le,ge.node,b,null,we))},k=function(R){g?(g.left=R,g=R):(v=R,g=R)};for(let R=0;R<p.count;++R){const b=p.nextBitIsOne(),j=Math.pow(2,p.count-(R+1));b?S(j,qe.BLACK):(S(j,qe.BLACK),S(j,qe.RED))}return v},c=new OC(r.length),f=u(c);return new yt(s||e,f)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sc;const ui={};class vn{static get Default(){return L(ui&&Le,"ChildrenNode.ts has not been loaded"),Sc=Sc||new vn({".priority":ui},{".priority":Le}),Sc}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=yi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof yt?n:null}hasIndex(e){return un(this.indexSet_,e.toString())}addIndex(e,n){L(e!==pi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let l=!1;const u=n.getIterator(ne.Wrap);let c=u.getNext();for(;c;)l=l||e.isDefinedOn(c.node),s.push(c),c=u.getNext();let f;l?f=Tl(s,e.getCompare()):f=ui;const p=e.toString(),g=Object.assign({},this.indexSet_);g[p]=e;const v=Object.assign({},this.indexes_);return v[p]=f,new vn(v,g)}addToIndexes(e,n){const s=El(this.indexes_,(l,u)=>{const c=yi(this.indexSet_,u);if(L(c,"Missing index implementation for "+u),l===ui)if(c.isDefinedOn(e.node)){const f=[],p=n.getIterator(ne.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&f.push(g),g=p.getNext();return f.push(e),Tl(f,c.getCompare())}else return ui;else{const f=n.get(e.name);let p=l;return f&&(p=p.remove(new ne(e.name,f))),p.insert(e,e.node)}});return new vn(s,this.indexSet_)}removeFromIndexes(e,n){const s=El(this.indexes_,l=>{if(l===ui)return l;{const u=n.get(e.name);return u?l.remove(new ne(e.name,u)):l}});return new vn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Es;class q{static get EMPTY_NODE(){return Es||(Es=new q(new yt(_d),null,vn.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&P_(this.priorityNode_),this.children_.isEmpty()&&L(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Es}updatePriority(e){return this.children_.isEmpty()?this:new q(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Es:n}}getChild(e){const n=te(e);return n===null?this:this.getImmediateChild(n).getChild(Ie(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(L(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ne(e,n);let l,u;n.isEmpty()?(l=this.children_.remove(e),u=this.indexMap_.removeFromIndexes(s,this.children_)):(l=this.children_.insert(e,n),u=this.indexMap_.addToIndexes(s,this.children_));const c=l.isEmpty()?Es:this.priorityNode_;return new q(l,c,u)}}updateChild(e,n){const s=te(e);if(s===null)return n;{L(te(e)!==".priority"||sr(e)===1,".priority must be the last token in a path");const l=this.getImmediateChild(s).updateChild(Ie(e),n);return this.updateImmediateChild(s,l)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,l=0,u=!0;if(this.forEachChild(Le,(c,f)=>{n[c]=f.val(e),s++,u&&q.INTEGER_REGEXP_.test(c)?l=Math.max(l,Number(c)):u=!1}),!e&&u&&l<2*s){const c=[];for(const f in n)c[f]=n[f];return c}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+R_(this.getPriority().val())+":"),this.forEachChild(Le,(n,s)=>{const l=s.hash();l!==""&&(e+=":"+n+":"+l)}),this.lazyHash_=e===""?"":i_(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const l=this.resolveIndex_(s);if(l){const u=l.getPredecessorKey(new ne(e,n));return u?u.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ne(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ne(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(l=>n(l.name,l.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,l=>l);{const l=this.children_.getIteratorFrom(e.name,ne.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)<0;)l.getNext(),u=l.peek();return l}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,l=>l);{const l=this.children_.getReverseIteratorFrom(e.name,ne.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)>0;)l.getNext(),u=l.peek();return l}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Hs?-1:0}withIndex(e){if(e===pi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new q(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===pi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Le),l=n.getIterator(Le);let u=s.getNext(),c=l.getNext();for(;u&&c;){if(u.name!==c.name||!u.node.equals(c.node))return!1;u=s.getNext(),c=l.getNext()}return u===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===pi?null:this.indexMap_.get(e.toString())}}q.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class DC extends q{constructor(){super(new yt(_d),q.EMPTY_NODE,vn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return q.EMPTY_NODE}isEmpty(){return!1}}const Hs=new DC;Object.defineProperties(ne,{MIN:{value:new ne(vi,q.EMPTY_NODE)},MAX:{value:new ne(Rr,Hs)}});N_.__EMPTY_NODE=q.EMPTY_NODE;Ke.__childrenNodeConstructor=q;NC(Hs);PC(Hs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LC=!0;function We(r,e=null){if(r===null)return q.EMPTY_NODE;if(typeof r=="object"&&".priority"in r&&(e=r[".priority"]),L(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof r=="object"&&".value"in r&&r[".value"]!==null&&(r=r[".value"]),typeof r!="object"||".sv"in r){const n=r;return new Ke(n,We(e))}if(!(r instanceof Array)&&LC){const n=[];let s=!1;if(Je(r,(c,f)=>{if(c.substring(0,1)!=="."){const p=We(f);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),n.push(new ne(c,p)))}}),n.length===0)return q.EMPTY_NODE;const u=Tl(n,kC,c=>c.name,_d);if(s){const c=Tl(n,Le.getCompare());return new q(u,We(e),new vn({".priority":c},{".priority":Le}))}else return new q(u,We(e),vn.Default)}else{let n=q.EMPTY_NODE;return Je(r,(s,l)=>{if(un(r,s)&&s.substring(0,1)!=="."){const u=We(l);(u.isLeafNode()||!u.isEmpty())&&(n=n.updateImmediateChild(s,u))}}),n.updatePriority(We(e))}}RC(We);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC extends ql{constructor(e){super(),this.indexPath_=e,L(!ie(e)&&te(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),l=this.extractChild(n.node),u=s.compareTo(l);return u===0?br(e.name,n.name):u}makePost(e,n){const s=We(e),l=q.EMPTY_NODE.updateChild(this.indexPath_,s);return new ne(n,l)}maxPost(){const e=q.EMPTY_NODE.updateChild(this.indexPath_,Hs);return new ne(Rr,e)}toString(){return Ls(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC extends ql{compare(e,n){const s=e.node.compareTo(n.node);return s===0?br(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ne.MIN}maxPost(){return ne.MAX}makePost(e,n){const s=We(e);return new ne(n,s)}toString(){return".value"}}const FC=new bC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O_(r){return{type:"value",snapshotNode:r}}function wi(r,e){return{type:"child_added",snapshotNode:e,childName:r}}function Ms(r,e){return{type:"child_removed",snapshotNode:e,childName:r}}function bs(r,e,n){return{type:"child_changed",snapshotNode:e,childName:r,oldSnap:n}}function UC(r,e){return{type:"child_moved",snapshotNode:e,childName:r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e){this.index_=e}updateChild(e,n,s,l,u,c){L(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(n);return f.getChild(l).equals(s.getChild(l))&&f.isEmpty()===s.isEmpty()||(c!=null&&(s.isEmpty()?e.hasChild(n)?c.trackChildChange(Ms(n,f)):L(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?c.trackChildChange(wi(n,s)):c.trackChildChange(bs(n,s,f))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Le,(l,u)=>{n.hasChild(l)||s.trackChildChange(Ms(l,u))}),n.isLeafNode()||n.forEachChild(Le,(l,u)=>{if(e.hasChild(l)){const c=e.getImmediateChild(l);c.equals(u)||s.trackChildChange(bs(l,u,c))}else s.trackChildChange(wi(l,u))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?q.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e){this.indexedFilter_=new yd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Fs.getStartPost_(e),this.endPost_=Fs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,l,u,c){return this.matches(new ne(n,s))||(s=q.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,l,u,c)}updateFullNode(e,n,s){n.isLeafNode()&&(n=q.EMPTY_NODE);let l=n.withIndex(this.index_);l=l.updatePriority(q.EMPTY_NODE);const u=this;return n.forEachChild(Le,(c,f)=>{u.matches(new ne(c,f))||(l=l.updateImmediateChild(c,q.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Fs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,l,u,c){return this.rangedFilter_.matches(new ne(n,s))||(s=q.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,l,u,c):this.fullLimitUpdateChild_(e,n,s,u,c)}updateFullNode(e,n,s){let l;if(n.isLeafNode()||n.isEmpty())l=q.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){l=q.EMPTY_NODE.withIndex(this.index_);let u;this.reverse_?u=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):u=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let c=0;for(;u.hasNext()&&c<this.limit_;){const f=u.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))l=l.updateImmediateChild(f.name,f.node),c++;else break;else continue}}else{l=n.withIndex(this.index_),l=l.updatePriority(q.EMPTY_NODE);let u;this.reverse_?u=l.getReverseIterator(this.index_):u=l.getIterator(this.index_);let c=0;for(;u.hasNext();){const f=u.getNext();c<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?c++:l=l.updateImmediateChild(f.name,q.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,l,u){let c;if(this.reverse_){const _=this.index_.getCompare();c=(S,k)=>_(k,S)}else c=this.index_.getCompare();const f=e;L(f.numChildren()===this.limit_,"");const p=new ne(n,s),g=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),v=this.rangedFilter_.matches(p);if(f.hasChild(n)){const _=f.getImmediateChild(n);let S=l.getChildAfterChild(this.index_,g,this.reverse_);for(;S!=null&&(S.name===n||f.hasChild(S.name));)S=l.getChildAfterChild(this.index_,S,this.reverse_);const k=S==null?1:c(S,p);if(v&&!s.isEmpty()&&k>=0)return u!=null&&u.trackChildChange(bs(n,s,_)),f.updateImmediateChild(n,s);{u!=null&&u.trackChildChange(Ms(n,_));const b=f.updateImmediateChild(n,q.EMPTY_NODE);return S!=null&&this.rangedFilter_.matches(S)?(u!=null&&u.trackChildChange(wi(S.name,S.node)),b.updateImmediateChild(S.name,S.node)):b}}else return s.isEmpty()?e:v&&c(g,p)>=0?(u!=null&&(u.trackChildChange(Ms(g.name,g.node)),u.trackChildChange(wi(n,s))),f.updateImmediateChild(n,s).updateImmediateChild(g.name,q.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Le}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return L(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return L(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:vi}hasEnd(){return this.endSet_}getIndexEndValue(){return L(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return L(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Rr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return L(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Le}copy(){const e=new vd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function zC(r){return r.loadsAllData()?new yd(r.getIndex()):r.hasLimit()?new jC(r):new Fs(r)}function Wm(r){const e={};if(r.isDefault())return e;let n;if(r.index_===Le?n="$priority":r.index_===FC?n="$value":r.index_===pi?n="$key":(L(r.index_ instanceof MC,"Unrecognized index type!"),n=r.index_.toString()),e.orderBy=Be(n),r.startSet_){const s=r.startAfterSet_?"startAfter":"startAt";e[s]=Be(r.indexStartValue_),r.startNameSet_&&(e[s]+=","+Be(r.indexStartName_))}if(r.endSet_){const s=r.endBeforeSet_?"endBefore":"endAt";e[s]=Be(r.indexEndValue_),r.endNameSet_&&(e[s]+=","+Be(r.indexEndName_))}return r.limitSet_&&(r.isViewFromLeft()?e.limitToFirst=r.limit_:e.limitToLast=r.limit_),e}function Bm(r){const e={};if(r.startSet_&&(e.sp=r.indexStartValue_,r.startNameSet_&&(e.sn=r.indexStartName_),e.sin=!r.startAfterSet_),r.endSet_&&(e.ep=r.indexEndValue_,r.endNameSet_&&(e.en=r.indexEndName_),e.ein=!r.endBeforeSet_),r.limitSet_){e.l=r.limit_;let n=r.viewFrom_;n===""&&(r.isViewFromLeft()?n="l":n="r"),e.vf=n}return r.index_!==Le&&(e.i=r.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl extends C_{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(L(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,l){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=l,this.log_=$s("p:rest:"),this.listens_={}}listen(e,n,s,l){const u=e._path.toString();this.log_("Listen called for "+u+" "+e._queryIdentifier);const c=kl.getListenId_(e,s),f={};this.listens_[c]=f;const p=Wm(e._queryParams);this.restRequest_(u+".json",p,(g,v)=>{let _=v;if(g===404&&(_=null,g=null),g===null&&this.onDataUpdate_(u,_,!1,s),yi(this.listens_,c)===f){let S;g?g===401?S="permission_denied":S="rest_error:"+g:S="ok",l(S,null)}})}unlisten(e,n){const s=kl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Wm(e._queryParams),s=e._path.toString(),l=new Bs;return this.restRequest_(s+".json",n,(u,c)=>{let f=c;u===404&&(f=null,u=null),u===null?(this.onDataUpdate_(s,f,!1,null),l.resolve(f)):l.reject(new Error(f))}),l.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([l,u])=>{l&&l.accessToken&&(n.auth=l.accessToken),u&&u.token&&(n.ac=u.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ni(n);this.log_("Sending REST request for "+c);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(s&&f.readyState===4){this.log_("REST Response for "+c+" received. status:",f.status,"response:",f.responseText);let p=null;if(f.status>=200&&f.status<300){try{p=As(f.responseText)}catch{at("Failed to parse JSON response for "+c+": "+f.responseText)}s(null,p)}else f.status!==401&&f.status!==404&&at("Got unsuccessful REST response for "+c+" Status: "+f.status),s(f.status);s=null}},f.open("GET",c,!0),f.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(){this.rootNode_=q.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(){return{value:null,children:new Map}}function D_(r,e,n){if(ie(e))r.value=n,r.children.clear();else if(r.value!==null)r.value=r.value.updateChild(e,n);else{const s=te(e);r.children.has(s)||r.children.set(s,Nl());const l=r.children.get(s);e=Ie(e),D_(l,e,n)}}function zc(r,e,n){r.value!==null?n(e,r.value):BC(r,(s,l)=>{const u=new ve(e.toString()+"/"+s);zc(l,u,n)})}function BC(r,e){r.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Je(this.last_,(s,l)=>{n[s]=n[s]-l}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm=10*1e3,$C=30*1e3,HC=5*60*1e3;class GC{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new VC(e);const s=Vm+($C-Vm)*Math.random();Is(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Je(e,(l,u)=>{u>0&&un(this.statsToReport_,l)&&(n[l]=u,s=!0)}),s&&this.server_.reportStats(n),Is(this.reportStats_.bind(this),Math.floor(Math.random()*2*HC))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qt;(function(r){r[r.OVERWRITE=0]="OVERWRITE",r[r.MERGE=1]="MERGE",r[r.ACK_USER_WRITE=2]="ACK_USER_WRITE",r[r.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(qt||(qt={}));function wd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ed(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Sd(r){return{fromUser:!1,fromServer:!0,queryId:r,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=qt.ACK_USER_WRITE,this.source=wd()}operationForChild(e){if(ie(this.path)){if(this.affectedTree.value!=null)return L(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ve(e));return new Rl(de(),n,this.revert)}}else return L(te(this.path)===e,"operationForChild called for unrelated child."),new Rl(Ie(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,n){this.source=e,this.path=n,this.type=qt.LISTEN_COMPLETE}operationForChild(e){return ie(this.path)?new Us(this.source,de()):new Us(this.source,Ie(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=qt.OVERWRITE}operationForChild(e){return ie(this.path)?new Pr(this.source,de(),this.snap.getImmediateChild(e)):new Pr(this.source,Ie(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=qt.MERGE}operationForChild(e){if(ie(this.path)){const n=this.children.subtree(new ve(e));return n.isEmpty()?null:n.value?new Pr(this.source,de(),n.value):new Ei(this.source,de(),n)}else return L(te(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ei(this.source,Ie(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ie(e))return this.isFullyInitialized()&&!this.filtered_;const n=te(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function qC(r,e,n,s){const l=[],u=[];return e.forEach(c=>{c.type==="child_changed"&&r.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&u.push(UC(c.childName,c.snapshotNode))}),Ss(r,l,"child_removed",e,s,n),Ss(r,l,"child_added",e,s,n),Ss(r,l,"child_moved",u,s,n),Ss(r,l,"child_changed",e,s,n),Ss(r,l,"value",e,s,n),l}function Ss(r,e,n,s,l,u){const c=s.filter(f=>f.type===n);c.sort((f,p)=>QC(r,f,p)),c.forEach(f=>{const p=YC(r,f,u);l.forEach(g=>{g.respondsTo(f.type)&&e.push(g.createEvent(p,r.query_))})})}function YC(r,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,r.index_)),e}function QC(r,e,n){if(e.childName==null||n.childName==null)throw ki("Should only compare child_ events.");const s=new ne(e.childName,e.snapshotNode),l=new ne(n.childName,n.snapshotNode);return r.index_.compare(s,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yl(r,e){return{eventCache:r,serverCache:e}}function Ts(r,e,n,s){return Yl(new or(e,n,s),r.serverCache)}function L_(r,e,n,s){return Yl(r.eventCache,new or(e,n,s))}function Pl(r){return r.eventCache.isFullyInitialized()?r.eventCache.getNode():null}function Ar(r){return r.serverCache.isFullyInitialized()?r.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cc;const XC=()=>(Cc||(Cc=new yt(MS)),Cc);class Ce{static fromObject(e){let n=new Ce(null);return Je(e,(s,l)=>{n=n.set(new ve(s),l)}),n}constructor(e,n=XC()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:de(),value:this.value};if(ie(e))return null;{const s=te(e),l=this.children.get(s);if(l!==null){const u=l.findRootMostMatchingPathAndValue(Ie(e),n);return u!=null?{path:De(new ve(s),u.path),value:u.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ie(e))return this;{const n=te(e),s=this.children.get(n);return s!==null?s.subtree(Ie(e)):new Ce(null)}}set(e,n){if(ie(e))return new Ce(n,this.children);{const s=te(e),u=(this.children.get(s)||new Ce(null)).set(Ie(e),n),c=this.children.insert(s,u);return new Ce(this.value,c)}}remove(e){if(ie(e))return this.children.isEmpty()?new Ce(null):new Ce(null,this.children);{const n=te(e),s=this.children.get(n);if(s){const l=s.remove(Ie(e));let u;return l.isEmpty()?u=this.children.remove(n):u=this.children.insert(n,l),this.value===null&&u.isEmpty()?new Ce(null):new Ce(this.value,u)}else return this}}get(e){if(ie(e))return this.value;{const n=te(e),s=this.children.get(n);return s?s.get(Ie(e)):null}}setTree(e,n){if(ie(e))return n;{const s=te(e),u=(this.children.get(s)||new Ce(null)).setTree(Ie(e),n);let c;return u.isEmpty()?c=this.children.remove(s):c=this.children.insert(s,u),new Ce(this.value,c)}}fold(e){return this.fold_(de(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((l,u)=>{s[l]=u.fold_(De(e,l),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,de(),n)}findOnPath_(e,n,s){const l=this.value?s(n,this.value):!1;if(l)return l;if(ie(e))return null;{const u=te(e),c=this.children.get(u);return c?c.findOnPath_(Ie(e),De(n,u),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,de(),n)}foreachOnPath_(e,n,s){if(ie(e))return this;{this.value&&s(n,this.value);const l=te(e),u=this.children.get(l);return u?u.foreachOnPath_(Ie(e),De(n,l),s):new Ce(null)}}foreach(e){this.foreach_(de(),e)}foreach_(e,n){this.children.inorderTraversal((s,l)=>{l.foreach_(De(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.writeTree_=e}static empty(){return new Yt(new Ce(null))}}function ks(r,e,n){if(ie(e))return new Yt(new Ce(n));{const s=r.writeTree_.findRootMostValueAndPath(e);if(s!=null){const l=s.path;let u=s.value;const c=lt(l,e);return u=u.updateChild(c,n),new Yt(r.writeTree_.set(l,u))}else{const l=new Ce(n),u=r.writeTree_.setTree(e,l);return new Yt(u)}}}function Wc(r,e,n){let s=r;return Je(n,(l,u)=>{s=ks(s,De(e,l),u)}),s}function $m(r,e){if(ie(e))return Yt.empty();{const n=r.writeTree_.setTree(e,new Ce(null));return new Yt(n)}}function Bc(r,e){return Fr(r,e)!=null}function Fr(r,e){const n=r.writeTree_.findRootMostValueAndPath(e);return n!=null?r.writeTree_.get(n.path).getChild(lt(n.path,e)):null}function Hm(r){const e=[],n=r.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Le,(s,l)=>{e.push(new ne(s,l))}):r.writeTree_.children.inorderTraversal((s,l)=>{l.value!=null&&e.push(new ne(s,l.value))}),e}function nr(r,e){if(ie(e))return r;{const n=Fr(r,e);return n!=null?new Yt(new Ce(n)):new Yt(r.writeTree_.subtree(e))}}function Vc(r){return r.writeTree_.isEmpty()}function Si(r,e){return M_(de(),r.writeTree_,e)}function M_(r,e,n){if(e.value!=null)return n.updateChild(r,e.value);{let s=null;return e.children.inorderTraversal((l,u)=>{l===".priority"?(L(u.value!==null,"Priority writes must always be leaf nodes"),s=u.value):n=M_(De(r,l),u,n)}),!n.getChild(r).isEmpty()&&s!==null&&(n=n.updateChild(De(r,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(r,e){return j_(e,r)}function JC(r,e,n,s,l){L(s>r.lastWriteId,"Stacking an older write on top of newer ones"),l===void 0&&(l=!0),r.allWrites.push({path:e,snap:n,writeId:s,visible:l}),l&&(r.visibleWrites=ks(r.visibleWrites,e,n)),r.lastWriteId=s}function ZC(r,e,n,s){L(s>r.lastWriteId,"Stacking an older merge on top of newer ones"),r.allWrites.push({path:e,children:n,writeId:s,visible:!0}),r.visibleWrites=Wc(r.visibleWrites,e,n),r.lastWriteId=s}function eI(r,e){for(let n=0;n<r.allWrites.length;n++){const s=r.allWrites[n];if(s.writeId===e)return s}return null}function tI(r,e){const n=r.allWrites.findIndex(f=>f.writeId===e);L(n>=0,"removeWrite called with nonexistent writeId.");const s=r.allWrites[n];r.allWrites.splice(n,1);let l=s.visible,u=!1,c=r.allWrites.length-1;for(;l&&c>=0;){const f=r.allWrites[c];f.visible&&(c>=n&&nI(f,s.path)?l=!1:bt(s.path,f.path)&&(u=!0)),c--}if(l){if(u)return rI(r),!0;if(s.snap)r.visibleWrites=$m(r.visibleWrites,s.path);else{const f=s.children;Je(f,p=>{r.visibleWrites=$m(r.visibleWrites,De(s.path,p))})}return!0}else return!1}function nI(r,e){if(r.snap)return bt(r.path,e);for(const n in r.children)if(r.children.hasOwnProperty(n)&&bt(De(r.path,n),e))return!0;return!1}function rI(r){r.visibleWrites=b_(r.allWrites,iI,de()),r.allWrites.length>0?r.lastWriteId=r.allWrites[r.allWrites.length-1].writeId:r.lastWriteId=-1}function iI(r){return r.visible}function b_(r,e,n){let s=Yt.empty();for(let l=0;l<r.length;++l){const u=r[l];if(e(u)){const c=u.path;let f;if(u.snap)bt(n,c)?(f=lt(n,c),s=ks(s,f,u.snap)):bt(c,n)&&(f=lt(c,n),s=ks(s,de(),u.snap.getChild(f)));else if(u.children){if(bt(n,c))f=lt(n,c),s=Wc(s,f,u.children);else if(bt(c,n))if(f=lt(c,n),ie(f))s=Wc(s,de(),u.children);else{const p=yi(u.children,te(f));if(p){const g=p.getChild(Ie(f));s=ks(s,de(),g)}}}else throw ki("WriteRecord should have .snap or .children")}}return s}function F_(r,e,n,s,l){if(!s&&!l){const u=Fr(r.visibleWrites,e);if(u!=null)return u;{const c=nr(r.visibleWrites,e);if(Vc(c))return n;if(n==null&&!Bc(c,de()))return null;{const f=n||q.EMPTY_NODE;return Si(c,f)}}}else{const u=nr(r.visibleWrites,e);if(!l&&Vc(u))return n;if(!l&&n==null&&!Bc(u,de()))return null;{const c=function(g){return(g.visible||l)&&(!s||!~s.indexOf(g.writeId))&&(bt(g.path,e)||bt(e,g.path))},f=b_(r.allWrites,c,e),p=n||q.EMPTY_NODE;return Si(f,p)}}}function sI(r,e,n){let s=q.EMPTY_NODE;const l=Fr(r.visibleWrites,e);if(l)return l.isLeafNode()||l.forEachChild(Le,(u,c)=>{s=s.updateImmediateChild(u,c)}),s;if(n){const u=nr(r.visibleWrites,e);return n.forEachChild(Le,(c,f)=>{const p=Si(nr(u,new ve(c)),f);s=s.updateImmediateChild(c,p)}),Hm(u).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}else{const u=nr(r.visibleWrites,e);return Hm(u).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}}function oI(r,e,n,s,l){L(s||l,"Either existingEventSnap or existingServerSnap must exist");const u=De(e,n);if(Bc(r.visibleWrites,u))return null;{const c=nr(r.visibleWrites,u);return Vc(c)?l.getChild(n):Si(c,l.getChild(n))}}function lI(r,e,n,s){const l=De(e,n),u=Fr(r.visibleWrites,l);if(u!=null)return u;if(s.isCompleteForChild(n)){const c=nr(r.visibleWrites,l);return Si(c,s.getNode().getImmediateChild(n))}else return null}function aI(r,e){return Fr(r.visibleWrites,e)}function uI(r,e,n,s,l,u,c){let f;const p=nr(r.visibleWrites,e),g=Fr(p,de());if(g!=null)f=g;else if(n!=null)f=Si(p,n);else return[];if(f=f.withIndex(c),!f.isEmpty()&&!f.isLeafNode()){const v=[],_=c.getCompare(),S=u?f.getReverseIteratorFrom(s,c):f.getIteratorFrom(s,c);let k=S.getNext();for(;k&&v.length<l;)_(k,s)!==0&&v.push(k),k=S.getNext();return v}else return[]}function cI(){return{visibleWrites:Yt.empty(),allWrites:[],lastWriteId:-1}}function Al(r,e,n,s){return F_(r.writeTree,r.treePath,e,n,s)}function Cd(r,e){return sI(r.writeTree,r.treePath,e)}function Gm(r,e,n,s){return oI(r.writeTree,r.treePath,e,n,s)}function xl(r,e){return aI(r.writeTree,De(r.treePath,e))}function dI(r,e,n,s,l,u){return uI(r.writeTree,r.treePath,e,n,s,l,u)}function Id(r,e,n){return lI(r.writeTree,r.treePath,e,n)}function U_(r,e){return j_(De(r.treePath,e),r.writeTree)}function j_(r,e){return{treePath:r,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;L(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),L(s!==".priority","Only non-priority child changes can be tracked.");const l=this.changeMap.get(s);if(l){const u=l.type;if(n==="child_added"&&u==="child_removed")this.changeMap.set(s,bs(s,e.snapshotNode,l.snapshotNode));else if(n==="child_removed"&&u==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&u==="child_changed")this.changeMap.set(s,Ms(s,l.oldSnap));else if(n==="child_changed"&&u==="child_added")this.changeMap.set(s,wi(s,e.snapshotNode));else if(n==="child_changed"&&u==="child_changed")this.changeMap.set(s,bs(s,e.snapshotNode,l.oldSnap));else throw ki("Illegal combination of changes: "+e+" occurred after "+l)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const z_=new fI;class Td{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new or(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Id(this.writes_,e,s)}}getChildAfterChild(e,n,s){const l=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ar(this.viewCache_),u=dI(this.writes_,l,n,1,s,e);return u.length===0?null:u[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pI(r){return{filter:r}}function mI(r,e){L(e.eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),L(e.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed")}function gI(r,e,n,s,l){const u=new hI;let c,f;if(n.type===qt.OVERWRITE){const g=n;g.source.fromUser?c=$c(r,e,g.path,g.snap,s,l,u):(L(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered()&&!ie(g.path),c=Ol(r,e,g.path,g.snap,s,l,f,u))}else if(n.type===qt.MERGE){const g=n;g.source.fromUser?c=yI(r,e,g.path,g.children,s,l,u):(L(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered(),c=Hc(r,e,g.path,g.children,s,l,f,u))}else if(n.type===qt.ACK_USER_WRITE){const g=n;g.revert?c=EI(r,e,g.path,s,l,u):c=vI(r,e,g.path,g.affectedTree,s,l,u)}else if(n.type===qt.LISTEN_COMPLETE)c=wI(r,e,n.path,s,u);else throw ki("Unknown operation type: "+n.type);const p=u.getChanges();return _I(e,c,p),{viewCache:c,changes:p}}function _I(r,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const l=s.getNode().isLeafNode()||s.getNode().isEmpty(),u=Pl(r);(n.length>0||!r.eventCache.isFullyInitialized()||l&&!s.getNode().equals(u)||!s.getNode().getPriority().equals(u.getPriority()))&&n.push(O_(Pl(e)))}}function W_(r,e,n,s,l,u){const c=e.eventCache;if(xl(s,n)!=null)return e;{let f,p;if(ie(n))if(L(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=Ar(e),v=g instanceof q?g:q.EMPTY_NODE,_=Cd(s,v);f=r.filter.updateFullNode(e.eventCache.getNode(),_,u)}else{const g=Al(s,Ar(e));f=r.filter.updateFullNode(e.eventCache.getNode(),g,u)}else{const g=te(n);if(g===".priority"){L(sr(n)===1,"Can't have a priority with additional path components");const v=c.getNode();p=e.serverCache.getNode();const _=Gm(s,n,v,p);_!=null?f=r.filter.updatePriority(v,_):f=c.getNode()}else{const v=Ie(n);let _;if(c.isCompleteForChild(g)){p=e.serverCache.getNode();const S=Gm(s,n,c.getNode(),p);S!=null?_=c.getNode().getImmediateChild(g).updateChild(v,S):_=c.getNode().getImmediateChild(g)}else _=Id(s,g,e.serverCache);_!=null?f=r.filter.updateChild(c.getNode(),g,_,v,l,u):f=c.getNode()}}return Ts(e,f,c.isFullyInitialized()||ie(n),r.filter.filtersNodes())}}function Ol(r,e,n,s,l,u,c,f){const p=e.serverCache;let g;const v=c?r.filter:r.filter.getIndexedFilter();if(ie(n))g=v.updateFullNode(p.getNode(),s,null);else if(v.filtersNodes()&&!p.isFiltered()){const k=p.getNode().updateChild(n,s);g=v.updateFullNode(p.getNode(),k,null)}else{const k=te(n);if(!p.isCompleteForPath(n)&&sr(n)>1)return e;const R=Ie(n),j=p.getNode().getImmediateChild(k).updateChild(R,s);k===".priority"?g=v.updatePriority(p.getNode(),j):g=v.updateChild(p.getNode(),k,j,R,z_,null)}const _=L_(e,g,p.isFullyInitialized()||ie(n),v.filtersNodes()),S=new Td(l,_,u);return W_(r,_,n,l,S,f)}function $c(r,e,n,s,l,u,c){const f=e.eventCache;let p,g;const v=new Td(l,e,u);if(ie(n))g=r.filter.updateFullNode(e.eventCache.getNode(),s,c),p=Ts(e,g,!0,r.filter.filtersNodes());else{const _=te(n);if(_===".priority")g=r.filter.updatePriority(e.eventCache.getNode(),s),p=Ts(e,g,f.isFullyInitialized(),f.isFiltered());else{const S=Ie(n),k=f.getNode().getImmediateChild(_);let R;if(ie(S))R=s;else{const b=v.getCompleteChild(_);b!=null?pd(S)===".priority"&&b.getChild(T_(S)).isEmpty()?R=b:R=b.updateChild(S,s):R=q.EMPTY_NODE}if(k.equals(R))p=e;else{const b=r.filter.updateChild(f.getNode(),_,R,S,v,c);p=Ts(e,b,f.isFullyInitialized(),r.filter.filtersNodes())}}}return p}function Km(r,e){return r.eventCache.isCompleteForChild(e)}function yI(r,e,n,s,l,u,c){let f=e;return s.foreach((p,g)=>{const v=De(n,p);Km(e,te(v))&&(f=$c(r,f,v,g,l,u,c))}),s.foreach((p,g)=>{const v=De(n,p);Km(e,te(v))||(f=$c(r,f,v,g,l,u,c))}),f}function qm(r,e,n){return n.foreach((s,l)=>{e=e.updateChild(s,l)}),e}function Hc(r,e,n,s,l,u,c,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;ie(n)?g=s:g=new Ce(null).setTree(n,s);const v=e.serverCache.getNode();return g.children.inorderTraversal((_,S)=>{if(v.hasChild(_)){const k=e.serverCache.getNode().getImmediateChild(_),R=qm(r,k,S);p=Ol(r,p,new ve(_),R,l,u,c,f)}}),g.children.inorderTraversal((_,S)=>{const k=!e.serverCache.isCompleteForChild(_)&&S.value===null;if(!v.hasChild(_)&&!k){const R=e.serverCache.getNode().getImmediateChild(_),b=qm(r,R,S);p=Ol(r,p,new ve(_),b,l,u,c,f)}}),p}function vI(r,e,n,s,l,u,c){if(xl(l,n)!=null)return e;const f=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(ie(n)&&p.isFullyInitialized()||p.isCompleteForPath(n))return Ol(r,e,n,p.getNode().getChild(n),l,u,f,c);if(ie(n)){let g=new Ce(null);return p.getNode().forEachChild(pi,(v,_)=>{g=g.set(new ve(v),_)}),Hc(r,e,n,g,l,u,f,c)}else return e}else{let g=new Ce(null);return s.foreach((v,_)=>{const S=De(n,v);p.isCompleteForPath(S)&&(g=g.set(v,p.getNode().getChild(S)))}),Hc(r,e,n,g,l,u,f,c)}}function wI(r,e,n,s,l){const u=e.serverCache,c=L_(e,u.getNode(),u.isFullyInitialized()||ie(n),u.isFiltered());return W_(r,c,n,s,z_,l)}function EI(r,e,n,s,l,u){let c;if(xl(s,n)!=null)return e;{const f=new Td(s,e,l),p=e.eventCache.getNode();let g;if(ie(n)||te(n)===".priority"){let v;if(e.serverCache.isFullyInitialized())v=Al(s,Ar(e));else{const _=e.serverCache.getNode();L(_ instanceof q,"serverChildren would be complete if leaf node"),v=Cd(s,_)}v=v,g=r.filter.updateFullNode(p,v,u)}else{const v=te(n);let _=Id(s,v,e.serverCache);_==null&&e.serverCache.isCompleteForChild(v)&&(_=p.getImmediateChild(v)),_!=null?g=r.filter.updateChild(p,v,_,Ie(n),f,u):e.eventCache.getNode().hasChild(v)?g=r.filter.updateChild(p,v,q.EMPTY_NODE,Ie(n),f,u):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=Al(s,Ar(e)),c.isLeafNode()&&(g=r.filter.updateFullNode(g,c,u)))}return c=e.serverCache.isFullyInitialized()||xl(s,de())!=null,Ts(e,g,c,r.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,l=new yd(s.getIndex()),u=zC(s);this.processor_=pI(u);const c=n.serverCache,f=n.eventCache,p=l.updateFullNode(q.EMPTY_NODE,c.getNode(),null),g=u.updateFullNode(q.EMPTY_NODE,f.getNode(),null),v=new or(p,c.isFullyInitialized(),l.filtersNodes()),_=new or(g,f.isFullyInitialized(),u.filtersNodes());this.viewCache_=Yl(_,v),this.eventGenerator_=new KC(this.query_)}get query(){return this.query_}}function CI(r){return r.viewCache_.serverCache.getNode()}function II(r){return Pl(r.viewCache_)}function TI(r,e){const n=Ar(r.viewCache_);return n&&(r.query._queryParams.loadsAllData()||!ie(e)&&!n.getImmediateChild(te(e)).isEmpty())?n.getChild(e):null}function Ym(r){return r.eventRegistrations_.length===0}function kI(r,e){r.eventRegistrations_.push(e)}function Qm(r,e,n){const s=[];if(n){L(e==null,"A cancel should cancel all event registrations.");const l=r.query._path;r.eventRegistrations_.forEach(u=>{const c=u.createCancelEvent(n,l);c&&s.push(c)})}if(e){let l=[];for(let u=0;u<r.eventRegistrations_.length;++u){const c=r.eventRegistrations_[u];if(!c.matches(e))l.push(c);else if(e.hasAnyCallback()){l=l.concat(r.eventRegistrations_.slice(u+1));break}}r.eventRegistrations_=l}else r.eventRegistrations_=[];return s}function Xm(r,e,n,s){e.type===qt.MERGE&&e.source.queryId!==null&&(L(Ar(r.viewCache_),"We should always have a full cache before handling merges"),L(Pl(r.viewCache_),"Missing event cache, even though we have a server cache"));const l=r.viewCache_,u=gI(r.processor_,l,e,n,s);return mI(r.processor_,u.viewCache),L(u.viewCache.serverCache.isFullyInitialized()||!l.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),r.viewCache_=u.viewCache,B_(r,u.changes,u.viewCache.eventCache.getNode(),null)}function NI(r,e){const n=r.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Le,(u,c)=>{s.push(wi(u,c))}),n.isFullyInitialized()&&s.push(O_(n.getNode())),B_(r,s,n.getNode(),e)}function B_(r,e,n,s){const l=s?[s]:r.eventRegistrations_;return qC(r.eventGenerator_,e,n,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dl;class V_{constructor(){this.views=new Map}}function RI(r){L(!Dl,"__referenceConstructor has already been defined"),Dl=r}function PI(){return L(Dl,"Reference.ts has not been loaded"),Dl}function AI(r){return r.views.size===0}function kd(r,e,n,s){const l=e.source.queryId;if(l!==null){const u=r.views.get(l);return L(u!=null,"SyncTree gave us an op for an invalid query."),Xm(u,e,n,s)}else{let u=[];for(const c of r.views.values())u=u.concat(Xm(c,e,n,s));return u}}function $_(r,e,n,s,l){const u=e._queryIdentifier,c=r.views.get(u);if(!c){let f=Al(n,l?s:null),p=!1;f?p=!0:s instanceof q?(f=Cd(n,s),p=!1):(f=q.EMPTY_NODE,p=!1);const g=Yl(new or(f,p,!1),new or(s,l,!1));return new SI(e,g)}return c}function xI(r,e,n,s,l,u){const c=$_(r,e,s,l,u);return r.views.has(e._queryIdentifier)||r.views.set(e._queryIdentifier,c),kI(c,n),NI(c,n)}function OI(r,e,n,s){const l=e._queryIdentifier,u=[];let c=[];const f=lr(r);if(l==="default")for(const[p,g]of r.views.entries())c=c.concat(Qm(g,n,s)),Ym(g)&&(r.views.delete(p),g.query._queryParams.loadsAllData()||u.push(g.query));else{const p=r.views.get(l);p&&(c=c.concat(Qm(p,n,s)),Ym(p)&&(r.views.delete(l),p.query._queryParams.loadsAllData()||u.push(p.query)))}return f&&!lr(r)&&u.push(new(PI())(e._repo,e._path)),{removed:u,events:c}}function H_(r){const e=[];for(const n of r.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function rr(r,e){let n=null;for(const s of r.views.values())n=n||TI(s,e);return n}function G_(r,e){if(e._queryParams.loadsAllData())return Xl(r);{const s=e._queryIdentifier;return r.views.get(s)}}function K_(r,e){return G_(r,e)!=null}function lr(r){return Xl(r)!=null}function Xl(r){for(const e of r.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ll;function DI(r){L(!Ll,"__referenceConstructor has already been defined"),Ll=r}function LI(){return L(Ll,"Reference.ts has not been loaded"),Ll}let MI=1;class Jm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ce(null),this.pendingWriteTree_=cI(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function q_(r,e,n,s,l){return JC(r.pendingWriteTree_,e,n,s,l),l?Ai(r,new Pr(wd(),e,n)):[]}function bI(r,e,n,s){ZC(r.pendingWriteTree_,e,n,s);const l=Ce.fromObject(n);return Ai(r,new Ei(wd(),e,l))}function Zn(r,e,n=!1){const s=eI(r.pendingWriteTree_,e);if(tI(r.pendingWriteTree_,e)){let u=new Ce(null);return s.snap!=null?u=u.set(de(),!0):Je(s.children,c=>{u=u.set(new ve(c),!0)}),Ai(r,new Rl(s.path,u,n))}else return[]}function Gs(r,e,n){return Ai(r,new Pr(Ed(),e,n))}function FI(r,e,n){const s=Ce.fromObject(n);return Ai(r,new Ei(Ed(),e,s))}function UI(r,e){return Ai(r,new Us(Ed(),e))}function jI(r,e,n){const s=Rd(r,n);if(s){const l=Pd(s),u=l.path,c=l.queryId,f=lt(u,e),p=new Us(Sd(c),f);return Ad(r,u,p)}else return[]}function Ml(r,e,n,s,l=!1){const u=e._path,c=r.syncPointTree_.get(u);let f=[];if(c&&(e._queryIdentifier==="default"||K_(c,e))){const p=OI(c,e,n,s);AI(c)&&(r.syncPointTree_=r.syncPointTree_.remove(u));const g=p.removed;if(f=p.events,!l){const v=g.findIndex(S=>S._queryParams.loadsAllData())!==-1,_=r.syncPointTree_.findOnPath(u,(S,k)=>lr(k));if(v&&!_){const S=r.syncPointTree_.subtree(u);if(!S.isEmpty()){const k=BI(S);for(let R=0;R<k.length;++R){const b=k[R],j=b.query,me=J_(r,b);r.listenProvider_.startListening(Ns(j),js(r,j),me.hashFn,me.onComplete)}}}!_&&g.length>0&&!s&&(v?r.listenProvider_.stopListening(Ns(e),null):g.forEach(S=>{const k=r.queryToTagMap.get(Jl(S));r.listenProvider_.stopListening(Ns(S),k)}))}VI(r,g)}return f}function Y_(r,e,n,s){const l=Rd(r,s);if(l!=null){const u=Pd(l),c=u.path,f=u.queryId,p=lt(c,e),g=new Pr(Sd(f),p,n);return Ad(r,c,g)}else return[]}function zI(r,e,n,s){const l=Rd(r,s);if(l){const u=Pd(l),c=u.path,f=u.queryId,p=lt(c,e),g=Ce.fromObject(n),v=new Ei(Sd(f),p,g);return Ad(r,c,v)}else return[]}function Gc(r,e,n,s=!1){const l=e._path;let u=null,c=!1;r.syncPointTree_.foreachOnPath(l,(S,k)=>{const R=lt(S,l);u=u||rr(k,R),c=c||lr(k)});let f=r.syncPointTree_.get(l);f?(c=c||lr(f),u=u||rr(f,de())):(f=new V_,r.syncPointTree_=r.syncPointTree_.set(l,f));let p;u!=null?p=!0:(p=!1,u=q.EMPTY_NODE,r.syncPointTree_.subtree(l).foreachChild((k,R)=>{const b=rr(R,de());b&&(u=u.updateImmediateChild(k,b))}));const g=K_(f,e);if(!g&&!e._queryParams.loadsAllData()){const S=Jl(e);L(!r.queryToTagMap.has(S),"View does not exist, but we have a tag");const k=$I();r.queryToTagMap.set(S,k),r.tagToQueryMap.set(k,S)}const v=Ql(r.pendingWriteTree_,l);let _=xI(f,e,n,v,u,p);if(!g&&!c&&!s){const S=G_(f,e);_=_.concat(HI(r,e,S))}return _}function Nd(r,e,n){const l=r.pendingWriteTree_,u=r.syncPointTree_.findOnPath(e,(c,f)=>{const p=lt(c,e),g=rr(f,p);if(g)return g});return F_(l,e,u,n,!0)}function WI(r,e){const n=e._path;let s=null;r.syncPointTree_.foreachOnPath(n,(g,v)=>{const _=lt(g,n);s=s||rr(v,_)});let l=r.syncPointTree_.get(n);l?s=s||rr(l,de()):(l=new V_,r.syncPointTree_=r.syncPointTree_.set(n,l));const u=s!=null,c=u?new or(s,!0,!1):null,f=Ql(r.pendingWriteTree_,e._path),p=$_(l,e,f,u?c.getNode():q.EMPTY_NODE,u);return II(p)}function Ai(r,e){return Q_(e,r.syncPointTree_,null,Ql(r.pendingWriteTree_,de()))}function Q_(r,e,n,s){if(ie(r.path))return X_(r,e,n,s);{const l=e.get(de());n==null&&l!=null&&(n=rr(l,de()));let u=[];const c=te(r.path),f=r.operationForChild(c),p=e.children.get(c);if(p&&f){const g=n?n.getImmediateChild(c):null,v=U_(s,c);u=u.concat(Q_(f,p,g,v))}return l&&(u=u.concat(kd(l,r,s,n))),u}}function X_(r,e,n,s){const l=e.get(de());n==null&&l!=null&&(n=rr(l,de()));let u=[];return e.children.inorderTraversal((c,f)=>{const p=n?n.getImmediateChild(c):null,g=U_(s,c),v=r.operationForChild(c);v&&(u=u.concat(X_(v,f,p,g)))}),l&&(u=u.concat(kd(l,r,s,n))),u}function J_(r,e){const n=e.query,s=js(r,n);return{hashFn:()=>(CI(e)||q.EMPTY_NODE).hash(),onComplete:l=>{if(l==="ok")return s?jI(r,n._path,s):UI(r,n._path);{const u=US(l,n);return Ml(r,n,null,u)}}}}function js(r,e){const n=Jl(e);return r.queryToTagMap.get(n)}function Jl(r){return r._path.toString()+"$"+r._queryIdentifier}function Rd(r,e){return r.tagToQueryMap.get(e)}function Pd(r){const e=r.indexOf("$");return L(e!==-1&&e<r.length-1,"Bad queryKey."),{queryId:r.substr(e+1),path:new ve(r.substr(0,e))}}function Ad(r,e,n){const s=r.syncPointTree_.get(e);L(s,"Missing sync point for query tag that we're tracking");const l=Ql(r.pendingWriteTree_,e);return kd(s,n,l,null)}function BI(r){return r.fold((e,n,s)=>{if(n&&lr(n))return[Xl(n)];{let l=[];return n&&(l=H_(n)),Je(s,(u,c)=>{l=l.concat(c)}),l}})}function Ns(r){return r._queryParams.loadsAllData()&&!r._queryParams.isDefault()?new(LI())(r._repo,r._path):r}function VI(r,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const l=Jl(s),u=r.queryToTagMap.get(l);r.queryToTagMap.delete(l),r.tagToQueryMap.delete(u)}}}function $I(){return MI++}function HI(r,e,n){const s=e._path,l=js(r,e),u=J_(r,n),c=r.listenProvider_.startListening(Ns(e),l,u.hashFn,u.onComplete),f=r.syncPointTree_.subtree(s);if(l)L(!lr(f.value),"If we're adding a query, it shouldn't be shadowed");else{const p=f.fold((g,v,_)=>{if(!ie(g)&&v&&lr(v))return[Xl(v).query];{let S=[];return v&&(S=S.concat(H_(v).map(k=>k.query))),Je(_,(k,R)=>{S=S.concat(R)}),S}});for(let g=0;g<p.length;++g){const v=p[g];r.listenProvider_.stopListening(Ns(v),js(r,v))}}return c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new xd(n)}node(){return this.node_}}class Od{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=De(this.path_,e);return new Od(this.syncTree_,n)}node(){return Nd(this.syncTree_,this.path_)}}const GI=function(r){return r=r||{},r.timestamp=r.timestamp||new Date().getTime(),r},Zm=function(r,e,n){if(!r||typeof r!="object")return r;if(L(".sv"in r,"Unexpected leaf node or priority contents"),typeof r[".sv"]=="string")return KI(r[".sv"],e,n);if(typeof r[".sv"]=="object")return qI(r[".sv"],e);L(!1,"Unexpected server value: "+JSON.stringify(r,null,2))},KI=function(r,e,n){switch(r){case"timestamp":return n.timestamp;default:L(!1,"Unexpected server value: "+r)}},qI=function(r,e,n){r.hasOwnProperty("increment")||L(!1,"Unexpected server value: "+JSON.stringify(r,null,2));const s=r.increment;typeof s!="number"&&L(!1,"Unexpected increment value: "+s);const l=e.node();if(L(l!==null&&typeof l<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!l.isLeafNode())return s;const c=l.getValue();return typeof c!="number"?s:c+s},Z_=function(r,e,n,s){return Dd(e,new Od(n,r),s)},ey=function(r,e,n){return Dd(r,new xd(e),n)};function Dd(r,e,n){const s=r.getPriority().val(),l=Zm(s,e.getImmediateChild(".priority"),n);let u;if(r.isLeafNode()){const c=r,f=Zm(c.getValue(),e,n);return f!==c.getValue()||l!==c.getPriority().val()?new Ke(f,We(l)):r}else{const c=r;return u=c,l!==c.getPriority().val()&&(u=u.updatePriority(new Ke(l))),c.forEachChild(Le,(f,p)=>{const g=Dd(p,e.getImmediateChild(f),n);g!==p&&(u=u.updateImmediateChild(f,g))}),u}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Md(r,e){let n=e instanceof ve?e:new ve(e),s=r,l=te(n);for(;l!==null;){const u=yi(s.node.children,l)||{children:{},childCount:0};s=new Ld(l,s,u),n=Ie(n),l=te(n)}return s}function xi(r){return r.node.value}function ty(r,e){r.node.value=e,Kc(r)}function ny(r){return r.node.childCount>0}function YI(r){return xi(r)===void 0&&!ny(r)}function Zl(r,e){Je(r.node.children,(n,s)=>{e(new Ld(n,r,s))})}function ry(r,e,n,s){n&&!s&&e(r),Zl(r,l=>{ry(l,e,!0,s)}),n&&s&&e(r)}function QI(r,e,n){let s=r.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ks(r){return new ve(r.parent===null?r.name:Ks(r.parent)+"/"+r.name)}function Kc(r){r.parent!==null&&XI(r.parent,r.name,r)}function XI(r,e,n){const s=YI(n),l=un(r.node.children,e);s&&l?(delete r.node.children[e],r.node.childCount--,Kc(r)):!s&&!l&&(r.node.children[e]=n.node,r.node.childCount++,Kc(r))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI=/[\[\].#$\/\u0000-\u001F\u007F]/,ZI=/[\[\].#$\u0000-\u001F\u007F]/,Ic=10*1024*1024,bd=function(r){return typeof r=="string"&&r.length!==0&&!JI.test(r)},iy=function(r){return typeof r=="string"&&r.length!==0&&!ZI.test(r)},eT=function(r){return r&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),iy(r)},tT=function(r){return r===null||typeof r=="string"||typeof r=="number"&&!ud(r)||r&&typeof r=="object"&&un(r,".sv")},nT=function(r,e,n,s){ea(Hl(r,"value"),e,n)},ea=function(r,e,n){const s=n instanceof ve?new yC(n,r):n;if(e===void 0)throw new Error(r+"contains undefined "+Ir(s));if(typeof e=="function")throw new Error(r+"contains a function "+Ir(s)+" with contents = "+e.toString());if(ud(e))throw new Error(r+"contains "+e.toString()+" "+Ir(s));if(typeof e=="string"&&e.length>Ic/3&&Gl(e)>Ic)throw new Error(r+"contains a string greater than "+Ic+" utf8 bytes "+Ir(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let l=!1,u=!1;if(Je(e,(c,f)=>{if(c===".value")l=!0;else if(c!==".priority"&&c!==".sv"&&(u=!0,!bd(c)))throw new Error(r+" contains an invalid key ("+c+") "+Ir(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);vC(s,c),ea(r,f,s),wC(s)}),l&&u)throw new Error(r+' contains ".value" child '+Ir(s)+" in addition to actual children.")}},rT=function(r,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const u=Ls(s);for(let c=0;c<u.length;c++)if(!(u[c]===".priority"&&c===u.length-1)){if(!bd(u[c]))throw new Error(r+"contains an invalid key ("+u[c]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(_C);let l=null;for(n=0;n<e.length;n++){if(s=e[n],l!==null&&bt(l,s))throw new Error(r+"contains a path "+l.toString()+" that is ancestor of another path "+s.toString());l=s}},iT=function(r,e,n,s){const l=Hl(r,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(l+" must be an object containing the children to replace.");const u=[];Je(e,(c,f)=>{const p=new ve(c);if(ea(l,f,De(n,p)),pd(p)===".priority"&&!tT(f))throw new Error(l+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");u.push(p)}),rT(l,u)},sy=function(r,e,n,s){if(!iy(n))throw new Error(Hl(r,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},sT=function(r,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),sy(r,e,n)},oy=function(r,e){if(te(e)===".info")throw new Error(r+" failed = Can't modify data under /.info/")},oT=function(r,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!bd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!eT(n))throw new Error(Hl(r,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ta(r,e){let n=null;for(let s=0;s<e.length;s++){const l=e[s],u=l.getPath();n!==null&&!md(u,n.path)&&(r.eventLists_.push(n),n=null),n===null&&(n={events:[],path:u}),n.events.push(l)}n&&r.eventLists_.push(n)}function ly(r,e,n){ta(r,n),ay(r,s=>md(s,e))}function Ut(r,e,n){ta(r,n),ay(r,s=>bt(s,e)||bt(e,s))}function ay(r,e){r.recursionDepth_++;let n=!0;for(let s=0;s<r.eventLists_.length;s++){const l=r.eventLists_[s];if(l){const u=l.path;e(u)?(aT(r.eventLists_[s]),r.eventLists_[s]=null):n=!1}}n&&(r.eventLists_=[]),r.recursionDepth_--}function aT(r){for(let e=0;e<r.events.length;e++){const n=r.events[e];if(n!==null){r.events[e]=null;const s=n.getEventRunner();Cs&&Xe("event: "+n.toString()),Pi(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT="repo_interrupt",cT=25;class dT{constructor(e,n,s,l){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=l,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new lT,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Nl(),this.transactionQueueTree_=new Ld,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function hT(r,e,n){if(r.stats_=hd(r.repoInfo_),r.forceRestClient_||BS())r.server_=new kl(r.repoInfo_,(s,l,u,c)=>{eg(r,s,l,u,c)},r.authTokenProvider_,r.appCheckProvider_),setTimeout(()=>tg(r,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Be(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}r.persistentConnection_=new Cn(r.repoInfo_,e,(s,l,u,c)=>{eg(r,s,l,u,c)},s=>{tg(r,s)},s=>{pT(r,s)},r.authTokenProvider_,r.appCheckProvider_,n),r.server_=r.persistentConnection_}r.authTokenProvider_.addTokenChangeListener(s=>{r.server_.refreshAuthToken(s)}),r.appCheckProvider_.addTokenChangeListener(s=>{r.server_.refreshAppCheckToken(s.token)}),r.statsReporter_=KS(r.repoInfo_,()=>new GC(r.stats_,r.server_)),r.infoData_=new WC,r.infoSyncTree_=new Jm({startListening:(s,l,u,c)=>{let f=[];const p=r.infoData_.getNode(s._path);return p.isEmpty()||(f=Gs(r.infoSyncTree_,s._path,p),setTimeout(()=>{c("ok")},0)),f},stopListening:()=>{}}),Fd(r,"connected",!1),r.serverSyncTree_=new Jm({startListening:(s,l,u,c)=>(r.server_.listen(s,u,l,(f,p)=>{const g=c(f,p);Ut(r.eventQueue_,s._path,g)}),[]),stopListening:(s,l)=>{r.server_.unlisten(s,l)}})}function fT(r){const n=r.infoData_.getNode(new ve(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function na(r){return GI({timestamp:fT(r)})}function eg(r,e,n,s,l){r.dataUpdateCount++;const u=new ve(e);n=r.interceptServerDataCallback_?r.interceptServerDataCallback_(e,n):n;let c=[];if(l)if(s){const p=El(n,g=>We(g));c=zI(r.serverSyncTree_,u,p,l)}else{const p=We(n);c=Y_(r.serverSyncTree_,u,p,l)}else if(s){const p=El(n,g=>We(g));c=FI(r.serverSyncTree_,u,p)}else{const p=We(n);c=Gs(r.serverSyncTree_,u,p)}let f=u;c.length>0&&(f=Ci(r,u)),Ut(r.eventQueue_,f,c)}function tg(r,e){Fd(r,"connected",e),e===!1&&yT(r)}function pT(r,e){Je(e,(n,s)=>{Fd(r,n,s)})}function Fd(r,e,n){const s=new ve("/.info/"+e),l=We(n);r.infoData_.updateSnapshot(s,l);const u=Gs(r.infoSyncTree_,s,l);Ut(r.eventQueue_,s,u)}function Ud(r){return r.nextWriteId_++}function mT(r,e,n){const s=WI(r.serverSyncTree_,e);return s!=null?Promise.resolve(s):r.server_.get(e).then(l=>{const u=We(l).withIndex(e._queryParams.getIndex());Gc(r.serverSyncTree_,e,n,!0);let c;if(e._queryParams.loadsAllData())c=Gs(r.serverSyncTree_,e._path,u);else{const f=js(r.serverSyncTree_,e);c=Y_(r.serverSyncTree_,e._path,u,f)}return Ut(r.eventQueue_,e._path,c),Ml(r.serverSyncTree_,e,n,null,!0),u},l=>(qs(r,"get for query "+Be(e)+" failed: "+l),Promise.reject(new Error(l))))}function gT(r,e,n,s,l){qs(r,"set",{path:e.toString(),value:n,priority:s});const u=na(r),c=We(n,s),f=Nd(r.serverSyncTree_,e),p=ey(c,f,u),g=Ud(r),v=q_(r.serverSyncTree_,e,p,g,!0);ta(r.eventQueue_,v),r.server_.put(e.toString(),c.val(!0),(S,k)=>{const R=S==="ok";R||at("set at "+e+" failed: "+S);const b=Zn(r.serverSyncTree_,g,!R);Ut(r.eventQueue_,e,b),qc(r,l,S,k)});const _=zd(r,e);Ci(r,_),Ut(r.eventQueue_,_,[])}function _T(r,e,n,s){qs(r,"update",{path:e.toString(),value:n});let l=!0;const u=na(r),c={};if(Je(n,(f,p)=>{l=!1,c[f]=Z_(De(e,f),We(p),r.serverSyncTree_,u)}),l)Xe("update() called with empty data.  Don't do anything."),qc(r,s,"ok",void 0);else{const f=Ud(r),p=bI(r.serverSyncTree_,e,c,f);ta(r.eventQueue_,p),r.server_.merge(e.toString(),n,(g,v)=>{const _=g==="ok";_||at("update at "+e+" failed: "+g);const S=Zn(r.serverSyncTree_,f,!_),k=S.length>0?Ci(r,e):e;Ut(r.eventQueue_,k,S),qc(r,s,g,v)}),Je(n,g=>{const v=zd(r,De(e,g));Ci(r,v)}),Ut(r.eventQueue_,e,[])}}function yT(r){qs(r,"onDisconnectEvents");const e=na(r),n=Nl();zc(r.onDisconnect_,de(),(l,u)=>{const c=Z_(l,u,r.serverSyncTree_,e);D_(n,l,c)});let s=[];zc(n,de(),(l,u)=>{s=s.concat(Gs(r.serverSyncTree_,l,u));const c=zd(r,l);Ci(r,c)}),r.onDisconnect_=Nl(),Ut(r.eventQueue_,de(),s)}function vT(r,e,n){let s;te(e._path)===".info"?s=Gc(r.infoSyncTree_,e,n):s=Gc(r.serverSyncTree_,e,n),ly(r.eventQueue_,e._path,s)}function wT(r,e,n){let s;te(e._path)===".info"?s=Ml(r.infoSyncTree_,e,n):s=Ml(r.serverSyncTree_,e,n),ly(r.eventQueue_,e._path,s)}function ET(r){r.persistentConnection_&&r.persistentConnection_.interrupt(uT)}function qs(r,...e){let n="";r.persistentConnection_&&(n=r.persistentConnection_.id+":"),Xe(n,...e)}function qc(r,e,n,s){e&&Pi(()=>{if(n==="ok")e(null);else{const l=(n||"error").toUpperCase();let u=l;s&&(u+=": "+s);const c=new Error(u);c.code=l,e(c)}})}function uy(r,e,n){return Nd(r.serverSyncTree_,e,n)||q.EMPTY_NODE}function jd(r,e=r.transactionQueueTree_){if(e||ra(r,e),xi(e)){const n=dy(r,e);L(n.length>0,"Sending zero length transaction queue"),n.every(l=>l.status===0)&&ST(r,Ks(e),n)}else ny(e)&&Zl(e,n=>{jd(r,n)})}function ST(r,e,n){const s=n.map(g=>g.currentWriteId),l=uy(r,e,s);let u=l;const c=l.hash();for(let g=0;g<n.length;g++){const v=n[g];L(v.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),v.status=1,v.retryCount++;const _=lt(e,v.path);u=u.updateChild(_,v.currentOutputSnapshotRaw)}const f=u.val(!0),p=e;r.server_.put(p.toString(),f,g=>{qs(r,"transaction put response",{path:p.toString(),status:g});let v=[];if(g==="ok"){const _=[];for(let S=0;S<n.length;S++)n[S].status=2,v=v.concat(Zn(r.serverSyncTree_,n[S].currentWriteId)),n[S].onComplete&&_.push(()=>n[S].onComplete(null,!0,n[S].currentOutputSnapshotResolved)),n[S].unwatcher();ra(r,Md(r.transactionQueueTree_,e)),jd(r,r.transactionQueueTree_),Ut(r.eventQueue_,e,v);for(let S=0;S<_.length;S++)Pi(_[S])}else{if(g==="datastale")for(let _=0;_<n.length;_++)n[_].status===3?n[_].status=4:n[_].status=0;else{at("transaction at "+p.toString()+" failed: "+g);for(let _=0;_<n.length;_++)n[_].status=4,n[_].abortReason=g}Ci(r,e)}},c)}function Ci(r,e){const n=cy(r,e),s=Ks(n),l=dy(r,n);return CT(r,l,s),s}function CT(r,e,n){if(e.length===0)return;const s=[];let l=[];const c=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const p=e[f],g=lt(n,p.path);let v=!1,_;if(L(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)v=!0,_=p.abortReason,l=l.concat(Zn(r.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=cT)v=!0,_="maxretry",l=l.concat(Zn(r.serverSyncTree_,p.currentWriteId,!0));else{const S=uy(r,p.path,c);p.currentInputSnapshot=S;const k=e[f].update(S.val());if(k!==void 0){ea("transaction failed: Data returned ",k,p.path);let R=We(k);typeof k=="object"&&k!=null&&un(k,".priority")||(R=R.updatePriority(S.getPriority()));const j=p.currentWriteId,me=na(r),we=ey(R,S,me);p.currentOutputSnapshotRaw=R,p.currentOutputSnapshotResolved=we,p.currentWriteId=Ud(r),c.splice(c.indexOf(j),1),l=l.concat(q_(r.serverSyncTree_,p.path,we,p.currentWriteId,p.applyLocally)),l=l.concat(Zn(r.serverSyncTree_,j,!0))}else v=!0,_="nodata",l=l.concat(Zn(r.serverSyncTree_,p.currentWriteId,!0))}Ut(r.eventQueue_,n,l),l=[],v&&(e[f].status=2,function(S){setTimeout(S,Math.floor(0))}(e[f].unwatcher),e[f].onComplete&&(_==="nodata"?s.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):s.push(()=>e[f].onComplete(new Error(_),!1,null))))}ra(r,r.transactionQueueTree_);for(let f=0;f<s.length;f++)Pi(s[f]);jd(r,r.transactionQueueTree_)}function cy(r,e){let n,s=r.transactionQueueTree_;for(n=te(e);n!==null&&xi(s)===void 0;)s=Md(s,n),e=Ie(e),n=te(e);return s}function dy(r,e){const n=[];return hy(r,e,n),n.sort((s,l)=>s.order-l.order),n}function hy(r,e,n){const s=xi(e);if(s)for(let l=0;l<s.length;l++)n.push(s[l]);Zl(e,l=>{hy(r,l,n)})}function ra(r,e){const n=xi(e);if(n){let s=0;for(let l=0;l<n.length;l++)n[l].status!==2&&(n[s]=n[l],s++);n.length=s,ty(e,n.length>0?n:void 0)}Zl(e,s=>{ra(r,s)})}function zd(r,e){const n=Ks(cy(r,e)),s=Md(r.transactionQueueTree_,e);return QI(s,l=>{Tc(r,l)}),Tc(r,s),ry(s,l=>{Tc(r,l)}),n}function Tc(r,e){const n=xi(e);if(n){const s=[];let l=[],u=-1;for(let c=0;c<n.length;c++)n[c].status===3||(n[c].status===1?(L(u===c-1,"All SENT items should be at beginning of queue."),u=c,n[c].status=3,n[c].abortReason="set"):(L(n[c].status===0,"Unexpected transaction status in abort"),n[c].unwatcher(),l=l.concat(Zn(r.serverSyncTree_,n[c].currentWriteId,!0)),n[c].onComplete&&s.push(n[c].onComplete.bind(null,new Error("set"),!1,null))));u===-1?ty(e,void 0):n.length=u+1,Ut(r.eventQueue_,Ks(e),l);for(let c=0;c<s.length;c++)Pi(s[c])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IT(r){let e="";const n=r.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let l=n[s];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch{}e+="/"+l}return e}function TT(r){const e={};r.charAt(0)==="?"&&(r=r.substring(1));for(const n of r.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):at(`Invalid query segment '${n}' in query '${r}'`)}return e}const ng=function(r,e){const n=kT(r),s=n.namespace;n.domain==="firebase.com"&&Tn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Tn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||DS();const l=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new g_(n.host,n.secure,s,l,e,"",s!==n.subdomain),path:new ve(n.pathString)}},kT=function(r){let e="",n="",s="",l="",u="",c=!0,f="https",p=443;if(typeof r=="string"){let g=r.indexOf("//");g>=0&&(f=r.substring(0,g-1),r=r.substring(g+2));let v=r.indexOf("/");v===-1&&(v=r.length);let _=r.indexOf("?");_===-1&&(_=r.length),e=r.substring(0,Math.min(v,_)),v<_&&(l=IT(r.substring(v,_)));const S=TT(r.substring(Math.min(r.length,_)));g=e.indexOf(":"),g>=0?(c=f==="https"||f==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const k=e.slice(0,g);if(k.toLowerCase()==="localhost")n="localhost";else if(k.split(".").length<=2)n=k;else{const R=e.indexOf(".");s=e.substring(0,R).toLowerCase(),n=e.substring(R+1),u=s}"ns"in S&&(u=S.ns)}return{host:e,port:p,domain:n,subdomain:s,secure:c,scheme:f,pathString:l,namespace:u}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(e,n,s,l){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=l}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Be(this.snapshot.exportVal())}}class RT{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return L(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Wd{constructor(e,n,s,l){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=l}get key(){return ie(this._path)?null:pd(this._path)}get ref(){return new Rn(this._repo,this._path)}get _queryIdentifier(){const e=Bm(this._queryParams),n=cd(e);return n==="{}"?"default":n}get _queryObject(){return Bm(this._queryParams)}isEqual(e){if(e=Et(e),!(e instanceof Wd))return!1;const n=this._repo===e._repo,s=md(this._path,e._path),l=this._queryIdentifier===e._queryIdentifier;return n&&s&&l}toJSON(){return this.toString()}toString(){return this._repo.toString()+gC(this._path)}}class Rn extends Wd{constructor(e,n){super(e,n,new vd,!1)}get parent(){const e=T_(this._path);return e===null?null:new Rn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class zs{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ve(e),s=Yc(this.ref,e);return new zs(this._node.getChild(n),s,Le)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,l)=>e(new zs(l,Yc(this.ref,s),Le)))}hasChild(e){const n=new ve(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ii(r,e){return r=Et(r),r._checkNotDeleted("ref"),e!==void 0?Yc(r._root,e):r._root}function Yc(r,e){return r=Et(r),te(r._path)===null?sT("child","path",e):sy("child","path",e),new Rn(r._repo,De(r._path,e))}function PT(r){return oy("remove",r._path),bl(r,null)}function bl(r,e){r=Et(r),oy("set",r._path),nT("set",e,r._path);const n=new Bs;return gT(r._repo,r._path,e,null,n.wrapCallback(()=>{})),n.promise}function AT(r,e){iT("update",e,r._path);const n=new Bs;return _T(r._repo,r._path,e,n.wrapCallback(()=>{})),n.promise}function xT(r){r=Et(r);const e=new fy(()=>{}),n=new ia(e);return mT(r._repo,r,n).then(s=>new zs(s,new Rn(r._repo,r._path),r._queryParams.getIndex()))}class ia{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new NT("value",this,new zs(e.snapshotNode,new Rn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new RT(this,e,n):null}matches(e){return e instanceof ia?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function OT(r,e,n,s,l){const u=new fy(n,void 0),c=new ia(u);return vT(r._repo,r,c),()=>wT(r._repo,r,c)}function rg(r,e,n,s){return OT(r,"value",e)}RI(Rn);DI(Rn);/**
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
 */const DT="FIREBASE_DATABASE_EMULATOR_HOST",Qc={};let LT=!1;function MT(r,e,n,s){r.repoInfo_=new g_(`${e}:${n}`,!1,r.repoInfo_.namespace,r.repoInfo_.webSocketOnly,r.repoInfo_.nodeAdmin,r.repoInfo_.persistenceKey,r.repoInfo_.includeNamespaceInQueryParams,!0),s&&(r.authTokenProvider_=s)}function bT(r,e,n,s,l){let u=s||r.options.databaseURL;u===void 0&&(r.options.projectId||Tn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Xe("Using default host for project ",r.options.projectId),u=`${r.options.projectId}-default-rtdb.firebaseio.com`);let c=ng(u,l),f=c.repoInfo,p;typeof process<"u"&&Im&&(p=Im[DT]),p?(u=`http://${p}?ns=${f.namespace}`,c=ng(u,l),f=c.repoInfo):c.repoInfo.secure;const g=new $S(r.name,r.options,e);oT("Invalid Firebase Database URL",c),ie(c.path)||Tn("Database URL must point to the root of a Firebase Database (not including a child path).");const v=UT(f,r,g,new VS(r.name,n));return new jT(v,r)}function FT(r,e){const n=Qc[e];(!n||n[r.key]!==r)&&Tn(`Database ${e}(${r.repoInfo_}) has already been deleted.`),ET(r),delete n[r.key]}function UT(r,e,n,s){let l=Qc[e.name];l||(l={},Qc[e.name]=l);let u=l[r.toURLString()];return u&&Tn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),u=new dT(r,LT,n,s),l[r.toURLString()]=u,u}class jT{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(hT(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Rn(this._repo,de())),this._rootInternal}_delete(){return this._rootInternal!==null&&(FT(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Tn("Cannot call "+e+" on a deleted database.")}}function zT(r=ad(),e){const n=Mr(r,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=nE("database");s&&WT(n,...s)}return n}function WT(r,e,n,s={}){r=Et(r),r._checkNotDeleted("useEmulator"),r._instanceStarted&&Tn("Cannot call useEmulator() after instance has already been initialized.");const l=r._repoInternal;let u;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&Tn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new pl(pl.OWNER);else if(s.mockUserToken){const c=typeof s.mockUserToken=="string"?s.mockUserToken:rE(s.mockUserToken,r.app.options.projectId);u=new pl(c)}MT(l,e,n,u)}/**
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
 */function BT(r){NS(Ri),ln(new Qt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("auth-internal"),u=e.getProvider("app-check-internal");return bT(s,l,u,n)},"PUBLIC").setMultipleInstances(!0)),Ft(Tm,km,r),Ft(Tm,km,"esm2017")}Cn.prototype.simpleListen=function(r,e){this.sendRequest("q",{p:r},e)};Cn.prototype.echo=function(r,e){this.sendRequest("echo",{d:r},e)};BT();var VT="firebase",$T="11.1.0";/**
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
 */Ft(VT,$T,"app");const py="@firebase/installations",Bd="0.6.11";/**
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
 */const my=1e4,gy=`w:${Bd}`,_y="FIS_v2",HT="https://firebaseinstallations.googleapis.com/v1",GT=60*60*1e3,KT="installations",qT="Installations";/**
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
 */const YT={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},xr=new Lr(KT,qT,YT);function yy(r){return r instanceof an&&r.code.includes("request-failed")}/**
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
 */function vy({projectId:r}){return`${HT}/projects/${r}/installations`}function wy(r){return{token:r.token,requestStatus:2,expiresIn:XT(r.expiresIn),creationTime:Date.now()}}async function Ey(r,e){const s=(await e.json()).error;return xr.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Sy({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function QT(r,{refreshToken:e}){const n=Sy(r);return n.append("Authorization",JT(e)),n}async function Cy(r){const e=await r();return e.status>=500&&e.status<600?r():e}function XT(r){return Number(r.replace("s","000"))}function JT(r){return`${_y} ${r}`}/**
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
 */async function ZT({appConfig:r,heartbeatServiceProvider:e},{fid:n}){const s=vy(r),l=Sy(r),u=e.getImmediate({optional:!0});if(u){const g=await u.getHeartbeatsHeader();g&&l.append("x-firebase-client",g)}const c={fid:n,authVersion:_y,appId:r.appId,sdkVersion:gy},f={method:"POST",headers:l,body:JSON.stringify(c)},p=await Cy(()=>fetch(s,f));if(p.ok){const g=await p.json();return{fid:g.fid||n,registrationStatus:2,refreshToken:g.refreshToken,authToken:wy(g.authToken)}}else throw await Ey("Create Installation",p)}/**
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
 */function Iy(r){return new Promise(e=>{setTimeout(e,r)})}/**
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
 */function ek(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const tk=/^[cdef][\w-]{21}$/,Xc="";function nk(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=rk(r);return tk.test(n)?n:Xc}catch{return Xc}}function rk(r){return ek(r).substr(0,22)}/**
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
 */function sa(r){return`${r.appName}!${r.appId}`}/**
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
 */const Ty=new Map;function ky(r,e){const n=sa(r);Ny(n,e),ik(n,e)}function Ny(r,e){const n=Ty.get(r);if(n)for(const s of n)s(e)}function ik(r,e){const n=sk();n&&n.postMessage({key:r,fid:e}),ok()}let kr=null;function sk(){return!kr&&"BroadcastChannel"in self&&(kr=new BroadcastChannel("[Firebase] FID Change"),kr.onmessage=r=>{Ny(r.data.key,r.data.fid)}),kr}function ok(){Ty.size===0&&kr&&(kr.close(),kr=null)}/**
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
 */const lk="firebase-installations-database",ak=1,Or="firebase-installations-store";let kc=null;function Vd(){return kc||(kc=Jg(lk,ak,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(Or)}}})),kc}async function Fl(r,e){const n=sa(r),l=(await Vd()).transaction(Or,"readwrite"),u=l.objectStore(Or),c=await u.get(n);return await u.put(e,n),await l.done,(!c||c.fid!==e.fid)&&ky(r,e.fid),e}async function Ry(r){const e=sa(r),s=(await Vd()).transaction(Or,"readwrite");await s.objectStore(Or).delete(e),await s.done}async function oa(r,e){const n=sa(r),l=(await Vd()).transaction(Or,"readwrite"),u=l.objectStore(Or),c=await u.get(n),f=e(c);return f===void 0?await u.delete(n):await u.put(f,n),await l.done,f&&(!c||c.fid!==f.fid)&&ky(r,f.fid),f}/**
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
 */async function $d(r){let e;const n=await oa(r.appConfig,s=>{const l=uk(s),u=ck(r,l);return e=u.registrationPromise,u.installationEntry});return n.fid===Xc?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function uk(r){const e=r||{fid:nk(),registrationStatus:0};return Py(e)}function ck(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const l=Promise.reject(xr.create("app-offline"));return{installationEntry:e,registrationPromise:l}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=dk(r,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:hk(r)}:{installationEntry:e}}async function dk(r,e){try{const n=await ZT(r,e);return Fl(r.appConfig,n)}catch(n){throw yy(n)&&n.customData.serverCode===409?await Ry(r.appConfig):await Fl(r.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function hk(r){let e=await ig(r.appConfig);for(;e.registrationStatus===1;)await Iy(100),e=await ig(r.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await $d(r);return s||n}return e}function ig(r){return oa(r,e=>{if(!e)throw xr.create("installation-not-found");return Py(e)})}function Py(r){return fk(r)?{fid:r.fid,registrationStatus:0}:r}function fk(r){return r.registrationStatus===1&&r.registrationTime+my<Date.now()}/**
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
 */async function pk({appConfig:r,heartbeatServiceProvider:e},n){const s=mk(r,n),l=QT(r,n),u=e.getImmediate({optional:!0});if(u){const g=await u.getHeartbeatsHeader();g&&l.append("x-firebase-client",g)}const c={installation:{sdkVersion:gy,appId:r.appId}},f={method:"POST",headers:l,body:JSON.stringify(c)},p=await Cy(()=>fetch(s,f));if(p.ok){const g=await p.json();return wy(g)}else throw await Ey("Generate Auth Token",p)}function mk(r,{fid:e}){return`${vy(r)}/${e}/authTokens:generate`}/**
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
 */async function Hd(r,e=!1){let n;const s=await oa(r.appConfig,u=>{if(!Ay(u))throw xr.create("not-registered");const c=u.authToken;if(!e&&yk(c))return u;if(c.requestStatus===1)return n=gk(r,e),u;{if(!navigator.onLine)throw xr.create("app-offline");const f=wk(u);return n=_k(r,f),f}});return n?await n:s.authToken}async function gk(r,e){let n=await sg(r.appConfig);for(;n.authToken.requestStatus===1;)await Iy(100),n=await sg(r.appConfig);const s=n.authToken;return s.requestStatus===0?Hd(r,e):s}function sg(r){return oa(r,e=>{if(!Ay(e))throw xr.create("not-registered");const n=e.authToken;return Ek(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function _k(r,e){try{const n=await pk(r,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Fl(r.appConfig,s),n}catch(n){if(yy(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Ry(r.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Fl(r.appConfig,s)}throw n}}function Ay(r){return r!==void 0&&r.registrationStatus===2}function yk(r){return r.requestStatus===2&&!vk(r)}function vk(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+GT}function wk(r){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:e})}function Ek(r){return r.requestStatus===1&&r.requestTime+my<Date.now()}/**
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
 */async function Sk(r){const e=r,{installationEntry:n,registrationPromise:s}=await $d(e);return s?s.catch(console.error):Hd(e).catch(console.error),n.fid}/**
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
 */async function Ck(r,e=!1){const n=r;return await Ik(n),(await Hd(n,e)).token}async function Ik(r){const{registrationPromise:e}=await $d(r);e&&await e}/**
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
 */function Tk(r){if(!r||!r.options)throw Nc("App Configuration");if(!r.name)throw Nc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!r.options[n])throw Nc(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function Nc(r){return xr.create("missing-app-config-values",{valueName:r})}/**
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
 */const xy="installations",kk="installations-internal",Nk=r=>{const e=r.getProvider("app").getImmediate(),n=Tk(e),s=Mr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Rk=r=>{const e=r.getProvider("app").getImmediate(),n=Mr(e,xy).getImmediate();return{getId:()=>Sk(n),getToken:l=>Ck(n,l)}};function Pk(){ln(new Qt(xy,Nk,"PUBLIC")),ln(new Qt(kk,Rk,"PRIVATE"))}Pk();Ft(py,Bd);Ft(py,Bd,"esm2017");/**
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
 */const Ul="analytics",Ak="firebase_id",xk="origin",Ok=60*1e3,Dk="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Gd="https://www.googletagmanager.com/gtag/js";/**
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
 */const wt=new Kl("@firebase/analytics");/**
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
 */const Lk={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Rt=new Lr("analytics","Analytics",Lk);/**
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
 */function Mk(r){if(!r.startsWith(Gd)){const e=Rt.create("invalid-gtag-resource",{gtagURL:r});return wt.warn(e.message),""}return r}function Oy(r){return Promise.all(r.map(e=>e.catch(n=>n)))}function bk(r,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,e)),n}function Fk(r,e){const n=bk("firebase-js-sdk-policy",{createScriptURL:Mk}),s=document.createElement("script"),l=`${Gd}?l=${r}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(l):l,s.async=!0,document.head.appendChild(s)}function Uk(r){let e=[];return Array.isArray(window[r])?e=window[r]:window[r]=e,e}async function jk(r,e,n,s,l,u){const c=s[l];try{if(c)await e[c];else{const p=(await Oy(n)).find(g=>g.measurementId===l);p&&await e[p.appId]}}catch(f){wt.error(f)}r("config",l,u)}async function zk(r,e,n,s,l){try{let u=[];if(l&&l.send_to){let c=l.send_to;Array.isArray(c)||(c=[c]);const f=await Oy(n);for(const p of c){const g=f.find(_=>_.measurementId===p),v=g&&e[g.appId];if(v)u.push(v);else{u=[];break}}}u.length===0&&(u=Object.values(e)),await Promise.all(u),r("event",s,l||{})}catch(u){wt.error(u)}}function Wk(r,e,n,s){async function l(u,...c){try{if(u==="event"){const[f,p]=c;await zk(r,e,n,f,p)}else if(u==="config"){const[f,p]=c;await jk(r,e,n,s,f,p)}else if(u==="consent"){const[f,p]=c;r("consent",f,p)}else if(u==="get"){const[f,p,g]=c;r("get",f,p,g)}else if(u==="set"){const[f]=c;r("set",f)}else r(u,...c)}catch(f){wt.error(f)}}return l}function Bk(r,e,n,s,l){let u=function(...c){window[s].push(arguments)};return window[l]&&typeof window[l]=="function"&&(u=window[l]),window[l]=Wk(u,r,e,n),{gtagCore:u,wrappedGtag:window[l]}}function Vk(r){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Gd)&&n.src.includes(r))return n;return null}/**
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
 */const $k=30,Hk=1e3;class Gk{constructor(e={},n=Hk){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Dy=new Gk;function Kk(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function qk(r){var e;const{appId:n,apiKey:s}=r,l={method:"GET",headers:Kk(s)},u=Dk.replace("{app-id}",n),c=await fetch(u,l);if(c.status!==200&&c.status!==304){let f="";try{const p=await c.json();!((e=p.error)===null||e===void 0)&&e.message&&(f=p.error.message)}catch{}throw Rt.create("config-fetch-failed",{httpStatus:c.status,responseMessage:f})}return c.json()}async function Yk(r,e=Dy,n){const{appId:s,apiKey:l,measurementId:u}=r.options;if(!s)throw Rt.create("no-app-id");if(!l){if(u)return{measurementId:u,appId:s};throw Rt.create("no-api-key")}const c=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},f=new Jk;return setTimeout(async()=>{f.abort()},Ok),Ly({appId:s,apiKey:l,measurementId:u},c,f,e)}async function Ly(r,{throttleEndTimeMillis:e,backoffCount:n},s,l=Dy){var u;const{appId:c,measurementId:f}=r;try{await Qk(s,e)}catch(p){if(f)return wt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:c,measurementId:f};throw p}try{const p=await qk(r);return l.deleteThrottleMetadata(c),p}catch(p){const g=p;if(!Xk(g)){if(l.deleteThrottleMetadata(c),f)return wt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:c,measurementId:f};throw p}const v=Number((u=g==null?void 0:g.customData)===null||u===void 0?void 0:u.httpStatus)===503?mm(n,l.intervalMillis,$k):mm(n,l.intervalMillis),_={throttleEndTimeMillis:Date.now()+v,backoffCount:n+1};return l.setThrottleMetadata(c,_),wt.debug(`Calling attemptFetch again in ${v} millis`),Ly(r,_,s,l)}}function Qk(r,e){return new Promise((n,s)=>{const l=Math.max(e-Date.now(),0),u=setTimeout(n,l);r.addEventListener(()=>{clearTimeout(u),s(Rt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Xk(r){if(!(r instanceof an)||!r.customData)return!1;const e=Number(r.customData.httpStatus);return e===429||e===500||e===503||e===504}class Jk{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Zk(r,e,n,s,l){if(l&&l.global){r("event",n,s);return}else{const u=await e,c=Object.assign(Object.assign({},s),{send_to:u});r("event",n,c)}}/**
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
 */async function e1(){if(Kg())try{await qg()}catch(r){return wt.warn(Rt.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return wt.warn(Rt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function t1(r,e,n,s,l,u,c){var f;const p=Yk(r);p.then(k=>{n[k.measurementId]=k.appId,r.options.measurementId&&k.measurementId!==r.options.measurementId&&wt.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${k.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(k=>wt.error(k)),e.push(p);const g=e1().then(k=>{if(k)return s.getId()}),[v,_]=await Promise.all([p,g]);Vk(u)||Fk(u,v.measurementId),l("js",new Date);const S=(f=c==null?void 0:c.config)!==null&&f!==void 0?f:{};return S[xk]="firebase",S.update=!0,_!=null&&(S[Ak]=_),l("config",v.measurementId,S),v.measurementId}/**
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
 */class n1{constructor(e){this.app=e}_delete(){return delete Rs[this.app.options.appId],Promise.resolve()}}let Rs={},og=[];const lg={};let Rc="dataLayer",r1="gtag",ag,My,ug=!1;function i1(){const r=[];if($g()&&r.push("This is a browser extension environment."),oE()||r.push("Cookies are not available."),r.length>0){const e=r.map((s,l)=>`(${l+1}) ${s}`).join(" "),n=Rt.create("invalid-analytics-context",{errorInfo:e});wt.warn(n.message)}}function s1(r,e,n){i1();const s=r.options.appId;if(!s)throw Rt.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)wt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Rt.create("no-api-key");if(Rs[s]!=null)throw Rt.create("already-exists",{id:s});if(!ug){Uk(Rc);const{wrappedGtag:u,gtagCore:c}=Bk(Rs,og,lg,Rc,r1);My=u,ag=c,ug=!0}return Rs[s]=t1(r,og,lg,e,ag,Rc,n),new n1(r)}function o1(r=ad()){r=Et(r);const e=Mr(r,Ul);return e.isInitialized()?e.getImmediate():l1(r)}function l1(r,e={}){const n=Mr(r,Ul);if(n.isInitialized()){const l=n.getImmediate();if(xs(e,n.getOptions()))return l;throw Rt.create("already-initialized")}return n.initialize({options:e})}function a1(r,e,n,s){r=Et(r),Zk(My,Rs[r.app.options.appId],e,n,s).catch(l=>wt.error(l))}const cg="@firebase/analytics",dg="0.10.10";function u1(){ln(new Qt(Ul,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("installations-internal").getImmediate();return s1(s,l,n)},"PUBLIC")),ln(new Qt("analytics-internal",r,"PRIVATE")),Ft(cg,dg),Ft(cg,dg,"esm2017");function r(e){try{const n=e.getProvider(Ul).getImmediate();return{logEvent:(s,l,u)=>a1(n,s,l,u)}}catch(n){throw Rt.create("interop-component-reg-failed",{reason:n})}}}u1();function Kd(r,e){var n={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(n[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(r);l<s.length;l++)e.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(r,s[l])&&(n[s[l]]=r[s[l]]);return n}function by(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const c1=by,Fy=new Lr("auth","Firebase",by());/**
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
 */const jl=new Kl("@firebase/auth");function d1(r,...e){jl.logLevel<=_e.WARN&&jl.warn(`Auth (${Ri}): ${r}`,...e)}function ml(r,...e){jl.logLevel<=_e.ERROR&&jl.error(`Auth (${Ri}): ${r}`,...e)}/**
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
 */function kn(r,...e){throw qd(r,...e)}function sn(r,...e){return qd(r,...e)}function Uy(r,e,n){const s=Object.assign(Object.assign({},c1()),{[e]:n});return new Lr("auth","Firebase",s).create(e,{appName:r.name})}function ir(r){return Uy(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function qd(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return Fy.create(r,...e)}function X(r,e,...n){if(!r)throw qd(e,...n)}function wn(r){const e="INTERNAL ASSERTION FAILED: "+r;throw ml(e),new Error(e)}function Nn(r,e){r||wn(e)}/**
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
 */function Jc(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function h1(){return hg()==="http:"||hg()==="https:"}function hg(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function f1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(h1()||$g()||"connection"in navigator)?navigator.onLine:!0}function p1(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Ys{constructor(e,n){this.shortDelay=e,this.longDelay=n,Nn(n>e,"Short delay should be less than long delay!"),this.isMobile=od()||Hg()}get(){return f1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Yd(r,e){Nn(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class jy{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const m1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const g1=new Ys(3e4,6e4);function la(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Oi(r,e,n,s,l={}){return zy(r,l,async()=>{let u={},c={};s&&(e==="GET"?c=s:u={body:JSON.stringify(s)});const f=Ni(Object.assign({key:r.config.apiKey},c)).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const g=Object.assign({method:e,headers:p},u);return iE()||(g.referrerPolicy="no-referrer"),jy.fetch()(By(r,r.config.apiHost,n,f),g)})}async function zy(r,e,n){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},m1),e);try{const l=new _1(r),u=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const c=await u.json();if("needConfirmation"in c)throw fl(r,"account-exists-with-different-credential",c);if(u.ok&&!("errorMessage"in c))return c;{const f=u.ok?c.errorMessage:c.error.message,[p,g]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw fl(r,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw fl(r,"email-already-in-use",c);if(p==="USER_DISABLED")throw fl(r,"user-disabled",c);const v=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw Uy(r,v,g);kn(r,v)}}catch(l){if(l instanceof an)throw l;kn(r,"network-request-failed",{message:String(l)})}}async function Wy(r,e,n,s,l={}){const u=await Oi(r,e,n,s,l);return"mfaPendingCredential"in u&&kn(r,"multi-factor-auth-required",{_serverResponse:u}),u}function By(r,e,n,s){const l=`${e}${n}?${s}`;return r.config.emulator?Yd(r.config,l):`${r.config.apiScheme}://${l}`}class _1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(sn(this.auth,"network-request-failed")),g1.get())})}}function fl(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const l=sn(r,e,s);return l.customData._tokenResponse=n,l}/**
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
 */async function y1(r,e){return Oi(r,"POST","/v1/accounts:delete",e)}async function Vy(r,e){return Oi(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ps(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function v1(r,e=!1){const n=Et(r),s=await n.getIdToken(e),l=Qd(s);X(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const u=typeof l.firebase=="object"?l.firebase:void 0,c=u==null?void 0:u.sign_in_provider;return{claims:l,token:s,authTime:Ps(Pc(l.auth_time)),issuedAtTime:Ps(Pc(l.iat)),expirationTime:Ps(Pc(l.exp)),signInProvider:c||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Pc(r){return Number(r)*1e3}function Qd(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return ml("JWT malformed, contained fewer than 3 sections"),null;try{const l=wl(n);return l?JSON.parse(l):(ml("Failed to decode base64 JWT payload"),null)}catch(l){return ml("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function fg(r){const e=Qd(r);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ws(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof an&&w1(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function w1({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class E1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const l=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,l)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Zc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ps(this.lastLoginAt),this.creationTime=Ps(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function zl(r){var e;const n=r.auth,s=await r.getIdToken(),l=await Ws(r,Vy(n,{idToken:s}));X(l==null?void 0:l.users.length,n,"internal-error");const u=l.users[0];r._notifyReloadListener(u);const c=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?$y(u.providerUserInfo):[],f=C1(r.providerData,c),p=r.isAnonymous,g=!(r.email&&u.passwordHash)&&!(f!=null&&f.length),v=p?g:!1,_={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:f,metadata:new Zc(u.createdAt,u.lastLoginAt),isAnonymous:v};Object.assign(r,_)}async function S1(r){const e=Et(r);await zl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function C1(r,e){return[...r.filter(s=>!e.some(l=>l.providerId===s.providerId)),...e]}function $y(r){return r.map(e=>{var{providerId:n}=e,s=Kd(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function I1(r,e){const n=await zy(r,{},async()=>{const s=Ni({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:u}=r.config,c=By(r,l,"/v1/token",`key=${u}`),f=await r._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",jy.fetch()(c,{method:"POST",headers:f,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function T1(r,e){return Oi(r,"POST","/v2/accounts:revokeToken",la(r,e))}/**
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
 */class mi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=fg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:l,expiresIn:u}=await I1(e,n);this.updateTokensAndExpiration(s,l,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:l,expirationTime:u}=n,c=new mi;return s&&(X(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),l&&(X(typeof l=="string","internal-error",{appName:e}),c.accessToken=l),u&&(X(typeof u=="number","internal-error",{appName:e}),c.expirationTime=u),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mi,this.toJSON())}_performRefresh(){return wn("not implemented")}}/**
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
 */function qn(r,e){X(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class En{constructor(e){var{uid:n,auth:s,stsTokenManager:l}=e,u=Kd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new E1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=l,this.accessToken=l.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new Zc(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const n=await Ws(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return v1(this,e)}reload(){return S1(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new En(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await zl(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(yn(this.auth.app))return Promise.reject(ir(this.auth));const e=await this.getIdToken();return await Ws(this,y1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,l,u,c,f,p,g,v;const _=(s=n.displayName)!==null&&s!==void 0?s:void 0,S=(l=n.email)!==null&&l!==void 0?l:void 0,k=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,R=(c=n.photoURL)!==null&&c!==void 0?c:void 0,b=(f=n.tenantId)!==null&&f!==void 0?f:void 0,j=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,me=(g=n.createdAt)!==null&&g!==void 0?g:void 0,we=(v=n.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:ge,emailVerified:le,isAnonymous:Ue,providerData:Z,stsTokenManager:Q}=n;X(ge&&Q,e,"internal-error");const se=mi.fromJSON(this.name,Q);X(typeof ge=="string",e,"internal-error"),qn(_,e.name),qn(S,e.name),X(typeof le=="boolean",e,"internal-error"),X(typeof Ue=="boolean",e,"internal-error"),qn(k,e.name),qn(R,e.name),qn(b,e.name),qn(j,e.name),qn(me,e.name),qn(we,e.name);const Ve=new En({uid:ge,auth:e,email:S,emailVerified:le,displayName:_,isAnonymous:Ue,photoURL:R,phoneNumber:k,tenantId:b,stsTokenManager:se,createdAt:me,lastLoginAt:we});return Z&&Array.isArray(Z)&&(Ve.providerData=Z.map(rt=>Object.assign({},rt))),j&&(Ve._redirectEventId=j),Ve}static async _fromIdTokenResponse(e,n,s=!1){const l=new mi;l.updateFromServerResponse(n);const u=new En({uid:n.localId,auth:e,stsTokenManager:l,isAnonymous:s});return await zl(u),u}static async _fromGetAccountInfoResponse(e,n,s){const l=n.users[0];X(l.localId!==void 0,"internal-error");const u=l.providerUserInfo!==void 0?$y(l.providerUserInfo):[],c=!(l.email&&l.passwordHash)&&!(u!=null&&u.length),f=new mi;f.updateFromIdToken(s);const p=new En({uid:l.localId,auth:e,stsTokenManager:f,isAnonymous:c}),g={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:u,metadata:new Zc(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(u!=null&&u.length)};return Object.assign(p,g),p}}/**
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
 */const pg=new Map;function Sn(r){Nn(r instanceof Function,"Expected a class definition");let e=pg.get(r);return e?(Nn(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,pg.set(r,e),e)}/**
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
 */class Hy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Hy.type="NONE";const mg=Hy;/**
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
 */function gl(r,e,n){return`firebase:${r}:${e}:${n}`}class gi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:l,name:u}=this.auth;this.fullUserKey=gl(this.userKey,l.apiKey,u),this.fullPersistenceKey=gl("persistence",l.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?En._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new gi(Sn(mg),e,s);const l=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=l[0]||Sn(mg);const c=gl(s,e.config.apiKey,e.name);let f=null;for(const g of n)try{const v=await g._get(c);if(v){const _=En._fromJSON(e,v);g!==u&&(f=_),u=g;break}}catch{}const p=l.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new gi(u,e,s):(u=p[0],f&&await u._set(c,f.toJSON()),await Promise.all(n.map(async g=>{if(g!==u)try{await g._remove(c)}catch{}})),new gi(u,e,s))}}/**
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
 */function gg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Yy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Gy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xy(e))return"Blackberry";if(Jy(e))return"Webos";if(Ky(e))return"Safari";if((e.includes("chrome/")||qy(e))&&!e.includes("edge/"))return"Chrome";if(Qy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Gy(r=ut()){return/firefox\//i.test(r)}function Ky(r=ut()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qy(r=ut()){return/crios\//i.test(r)}function Yy(r=ut()){return/iemobile/i.test(r)}function Qy(r=ut()){return/android/i.test(r)}function Xy(r=ut()){return/blackberry/i.test(r)}function Jy(r=ut()){return/webos/i.test(r)}function Xd(r=ut()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function k1(r=ut()){var e;return Xd(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function N1(){return sE()&&document.documentMode===10}function Zy(r=ut()){return Xd(r)||Qy(r)||Jy(r)||Xy(r)||/windows phone/i.test(r)||Yy(r)}/**
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
 */function ev(r,e=[]){let n;switch(r){case"Browser":n=gg(ut());break;case"Worker":n=`${gg(ut())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ri}/${s}`}/**
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
 */class R1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=u=>new Promise((c,f)=>{try{const p=e(u);c(p)}catch(p){f(p)}});s.onAbort=n,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const l of n)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function P1(r,e={}){return Oi(r,"GET","/v2/passwordPolicy",la(r,e))}/**
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
 */const A1=6;class x1{constructor(e){var n,s,l,u;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=c.minPasswordLength)!==null&&n!==void 0?n:A1,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(l=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&l!==void 0?l:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,l,u,c,f;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(n=p.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(l=p.containsLowercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(u=p.containsUppercaseLetter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(f=p.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),p}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),l&&(n.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let l=0;l<e.length;l++)s=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,l,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class O1{constructor(e,n,s,l){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _g(this),this.idTokenSubscription=new _g(this),this.beforeStateQueue=new R1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Fy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Sn(n)),this._initializationPromise=this.queue(async()=>{var s,l;if(!this._deleted&&(this.persistenceManager=await gi.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Vy(this,{idToken:e}),s=await En._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(yn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let l=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,f=l==null?void 0:l._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===f)&&(p!=null&&p.user)&&(l=p.user,u=!0)}if(!l)return this.directlySetCurrentUser(null);if(!l._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(l)}catch(c){l=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return l?this.reloadAndSetCurrentUserOrClear(l):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===l._redirectEventId?this.directlySetCurrentUser(l):this.reloadAndSetCurrentUserOrClear(l)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await zl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=p1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(yn(this.app))return Promise.reject(ir(this));const n=e?Et(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return yn(this.app)?Promise.reject(ir(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return yn(this.app)?Promise.reject(ir(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Sn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await P1(this),n=new x1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Lr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await T1(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Sn(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await gi.create(this,[Sn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,l){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let c=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(f,this,"internal-error"),f.then(()=>{c||u(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,s,l);return()=>{c=!0,p()}}else{const p=e.addObserver(n);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ev(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const l=await this._getAppCheckToken();return l&&(n["X-Firebase-AppCheck"]=l),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&d1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function aa(r){return Et(r)}class _g{constructor(e){this.auth=e,this.observer=null,this.addObserver=fE(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Jd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function D1(r){Jd=r}function L1(r){return Jd.loadJS(r)}function M1(){return Jd.gapiScript}function b1(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function F1(r,e){const n=Mr(r,"auth");if(n.isInitialized()){const l=n.getImmediate(),u=n.getOptions();if(xs(u,e??{}))return l;kn(l,"already-initialized")}return n.initialize({options:e})}function U1(r,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Sn);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function j1(r,e,n){const s=aa(r);X(s._canInitEmulator,s,"emulator-config-failed"),X(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const l=!1,u=tv(e),{host:c,port:f}=z1(e),p=f===null?"":`:${f}`;s.config.emulator={url:`${u}//${c}${p}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:c,port:f,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:l})}),W1()}function tv(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function z1(r){const e=tv(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const u=l[1];return{host:u,port:yg(s.substr(u.length+1))}}else{const[u,c]=s.split(":");return{host:u,port:yg(c)}}}function yg(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function W1(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class nv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return wn("not implemented")}_getIdTokenResponse(e){return wn("not implemented")}_linkToIdToken(e,n){return wn("not implemented")}_getReauthenticationResolver(e){return wn("not implemented")}}/**
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
 */async function _i(r,e){return Wy(r,"POST","/v1/accounts:signInWithIdp",la(r,e))}/**
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
 */const B1="http://localhost";class Dr extends nv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Dr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):kn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:l}=n,u=Kd(n,["providerId","signInMethod"]);if(!s||!l)return null;const c=new Dr(s,l);return c.idToken=u.idToken||void 0,c.accessToken=u.accessToken||void 0,c.secret=u.secret,c.nonce=u.nonce,c.pendingToken=u.pendingToken||null,c}_getIdTokenResponse(e){const n=this.buildRequest();return _i(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,_i(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,_i(e,n)}buildRequest(){const e={requestUri:B1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ni(n)}return e}}/**
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
 */class rv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Qs extends rv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Yn extends Qs{constructor(){super("facebook.com")}static credential(e){return Dr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yn.PROVIDER_ID="facebook.com";/**
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
 */class Qn extends Qs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Dr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Qn.credential(n,s)}catch{return null}}}Qn.GOOGLE_SIGN_IN_METHOD="google.com";Qn.PROVIDER_ID="google.com";/**
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
 */class Xn extends Qs{constructor(){super("github.com")}static credential(e){return Dr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.GITHUB_SIGN_IN_METHOD="github.com";Xn.PROVIDER_ID="github.com";/**
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
 */class Jn extends Qs{constructor(){super("twitter.com")}static credential(e,n){return Dr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Jn.credential(n,s)}catch{return null}}}Jn.TWITTER_SIGN_IN_METHOD="twitter.com";Jn.PROVIDER_ID="twitter.com";/**
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
 */async function V1(r,e){return Wy(r,"POST","/v1/accounts:signUp",la(r,e))}/**
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
 */class ar{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,l=!1){const u=await En._fromIdTokenResponse(e,s,l),c=vg(s);return new ar({user:u,providerId:c,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const l=vg(s);return new ar({user:e,providerId:l,_tokenResponse:s,operationType:n})}}function vg(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */async function $1(r){var e;if(yn(r.app))return Promise.reject(ir(r));const n=aa(r);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new ar({user:n.currentUser,providerId:null,operationType:"signIn"});const s=await V1(n,{returnSecureToken:!0}),l=await ar._fromIdTokenResponse(n,"signIn",s,!0);return await n._updateCurrentUser(l.user),l}/**
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
 */class Wl extends an{constructor(e,n,s,l){var u;super(n.code,n.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,Wl.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,l){return new Wl(e,n,s,l)}}function iv(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Wl._fromErrorAndOperation(r,u,e,s):u})}async function H1(r,e,n=!1){const s=await Ws(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return ar._forOperation(r,"link",s)}/**
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
 */async function G1(r,e,n=!1){const{auth:s}=r;if(yn(s.app))return Promise.reject(ir(s));const l="reauthenticate";try{const u=await Ws(r,iv(s,l,e,r),n);X(u.idToken,s,"internal-error");const c=Qd(u.idToken);X(c,s,"internal-error");const{sub:f}=c;return X(r.uid===f,s,"user-mismatch"),ar._forOperation(r,l,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&kn(s,"user-mismatch"),u}}/**
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
 */async function K1(r,e,n=!1){if(yn(r.app))return Promise.reject(ir(r));const s="signIn",l=await iv(r,s,e),u=await ar._fromIdTokenResponse(r,s,l);return n||await r._updateCurrentUser(u.user),u}function q1(r,e,n,s){return Et(r).onIdTokenChanged(e,n,s)}function Y1(r,e,n){return Et(r).beforeAuthStateChanged(e,n)}const Bl="__sak";/**
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
 */class sv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Bl,"1"),this.storage.removeItem(Bl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Q1=1e3,X1=10;class ov extends sv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Zy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),l=this.localCache[n];s!==l&&e(n,l,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((c,f,p)=>{this.notifyListeners(c,p)});return}const s=e.key;n?this.detachListener():this.stopPolling();const l=()=>{const c=this.storage.getItem(s);!n&&this.localCache[s]===c||this.notifyListeners(s,c)},u=this.storage.getItem(s);N1()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,X1):l()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Q1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ov.type="LOCAL";const J1=ov;/**
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
 */class lv extends sv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}lv.type="SESSION";const av=lv;/**
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
 */function Z1(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ua{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(l=>l.isListeningto(e));if(n)return n;const s=new ua(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:l,data:u}=n.data,c=this.handlersMap[l];if(!(c!=null&&c.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const f=Array.from(c).map(async g=>g(n.origin,u)),p=await Z1(f);n.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ua.receivers=[];/**
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
 */function Zd(r="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return r+n}/**
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
 */class eN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let u,c;return new Promise((f,p)=>{const g=Zd("",20);l.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},s);c={messageChannel:l,onMessage(_){const S=_;if(S.data.eventId===g)switch(S.data.status){case"ack":clearTimeout(v),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),f(S.data.response);break;default:clearTimeout(v),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(c),l.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[l.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function on(){return window}function tN(r){on().location.href=r}/**
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
 */function uv(){return typeof on().WorkerGlobalScope<"u"&&typeof on().importScripts=="function"}async function nN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rN(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function iN(){return uv()?self:null}/**
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
 */const cv="firebaseLocalStorageDb",sN=1,Vl="firebaseLocalStorage",dv="fbase_key";class Xs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ca(r,e){return r.transaction([Vl],e?"readwrite":"readonly").objectStore(Vl)}function oN(){const r=indexedDB.deleteDatabase(cv);return new Xs(r).toPromise()}function ed(){const r=indexedDB.open(cv,sN);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Vl,{keyPath:dv})}catch(l){n(l)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Vl)?e(s):(s.close(),await oN(),e(await ed()))})})}async function wg(r,e,n){const s=ca(r,!0).put({[dv]:e,value:n});return new Xs(s).toPromise()}async function lN(r,e){const n=ca(r,!1).get(e),s=await new Xs(n).toPromise();return s===void 0?null:s.value}function Eg(r,e){const n=ca(r,!0).delete(e);return new Xs(n).toPromise()}const aN=800,uN=3;class hv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ed(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>uN)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return uv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ua._getInstance(iN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await nN(),!this.activeServiceWorker)return;this.sender=new eN(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ed();return await wg(e,Bl,"1"),await Eg(e,Bl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>wg(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>lN(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Eg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const u=ca(l,!1).getAll();return new Xs(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:l,value:u}of e)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(u)&&(this.notifyListeners(l,u),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),aN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hv.type="LOCAL";const cN=hv;new Ys(3e4,6e4);/**
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
 */function dN(r,e){return e?Sn(e):(X(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class eh extends nv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _i(e,this._buildIdpRequest())}_linkToIdToken(e,n){return _i(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return _i(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function hN(r){return K1(r.auth,new eh(r),r.bypassAuthState)}function fN(r){const{auth:e,user:n}=r;return X(n,e,"internal-error"),G1(n,new eh(r),r.bypassAuthState)}async function pN(r){const{auth:e,user:n}=r;return X(n,e,"internal-error"),H1(n,new eh(r),r.bypassAuthState)}/**
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
 */class fv{constructor(e,n,s,l,u=!1){this.auth=e,this.resolver=s,this.user=l,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:l,tenantId:u,error:c,type:f}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hN;case"linkViaPopup":case"linkViaRedirect":return pN;case"reauthViaPopup":case"reauthViaRedirect":return fN;default:kn(this.auth,"internal-error")}}resolve(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const mN=new Ys(2e3,1e4);class hi extends fv{constructor(e,n,s,l,u){super(e,n,l,u),this.provider=s,this.authWindow=null,this.pollId=null,hi.currentPopupAction&&hi.currentPopupAction.cancel(),hi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){Nn(this.filter.length===1,"Popup operations only handle one event");const e=Zd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mN.get())};e()}}hi.currentPopupAction=null;/**
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
 */const gN="pendingRedirect",_l=new Map;class _N extends fv{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=_l.get(this.auth._key());if(!e){try{const s=await yN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}_l.set(this.auth._key(),e)}return this.bypassAuthState||_l.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yN(r,e){const n=EN(e),s=wN(r);if(!await s._isAvailable())return!1;const l=await s._get(n)==="true";return await s._remove(n),l}function vN(r,e){_l.set(r._key(),e)}function wN(r){return Sn(r._redirectPersistence)}function EN(r){return gl(gN,r.config.apiKey,r.name)}async function SN(r,e,n=!1){if(yn(r.app))return Promise.reject(ir(r));const s=aa(r),l=dN(s,e),c=await new _N(s,l,n).execute();return c&&!n&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
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
 */const CN=10*60*1e3;class IN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!TN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!pv(e)){const l=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(sn(this.auth,l))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=CN&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sg(e))}saveEventToCache(e){this.cachedEventUids.add(Sg(e)),this.lastProcessedEventTime=Date.now()}}function Sg(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function pv({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function TN(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pv(r);default:return!1}}/**
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
 */async function kN(r,e={}){return Oi(r,"GET","/v1/projects",e)}/**
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
 */const NN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,RN=/^https?/;async function PN(r){if(r.config.emulator)return;const{authorizedDomains:e}=await kN(r);for(const n of e)try{if(AN(n))return}catch{}kn(r,"unauthorized-domain")}function AN(r){const e=Jc(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const c=new URL(r);return c.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&c.hostname===s}if(!RN.test(n))return!1;if(NN.test(r))return s===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
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
 */const xN=new Ys(3e4,6e4);function Cg(){const r=on().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function ON(r){return new Promise((e,n)=>{var s,l,u;function c(){Cg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Cg(),n(sn(r,"network-request-failed"))},timeout:xN.get()})}if(!((l=(s=on().gapi)===null||s===void 0?void 0:s.iframes)===null||l===void 0)&&l.Iframe)e(gapi.iframes.getContext());else if(!((u=on().gapi)===null||u===void 0)&&u.load)c();else{const f=b1("iframefcb");return on()[f]=()=>{gapi.load?c():n(sn(r,"network-request-failed"))},L1(`${M1()}?onload=${f}`).catch(p=>n(p))}}).catch(e=>{throw yl=null,e})}let yl=null;function DN(r){return yl=yl||ON(r),yl}/**
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
 */const LN=new Ys(5e3,15e3),MN="__/auth/iframe",bN="emulator/auth/iframe",FN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},UN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jN(r){const e=r.config;X(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?Yd(e,bN):`https://${r.config.authDomain}/${MN}`,s={apiKey:e.apiKey,appName:r.name,v:Ri},l=UN.get(r.config.apiHost);l&&(s.eid=l);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${Ni(s).slice(1)}`}async function zN(r){const e=await DN(r),n=on().gapi;return X(n,r,"internal-error"),e.open({where:document.body,url:jN(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:FN,dontclear:!0},s=>new Promise(async(l,u)=>{await s.restyle({setHideOnLeave:!1});const c=sn(r,"network-request-failed"),f=on().setTimeout(()=>{u(c)},LN.get());function p(){on().clearTimeout(f),l(s)}s.ping(p).then(p,()=>{u(c)})}))}/**
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
 */const WN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},BN=500,VN=600,$N="_blank",HN="http://localhost";class Ig{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function GN(r,e,n,s=BN,l=VN){const u=Math.max((window.screen.availHeight-l)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const p=Object.assign(Object.assign({},WN),{width:s.toString(),height:l.toString(),top:u,left:c}),g=ut().toLowerCase();n&&(f=qy(g)?$N:n),Gy(g)&&(e=e||HN,p.scrollbars="yes");const v=Object.entries(p).reduce((S,[k,R])=>`${S}${k}=${R},`,"");if(k1(g)&&f!=="_self")return KN(e||"",f),new Ig(null);const _=window.open(e||"",f,v);X(_,r,"popup-blocked");try{_.focus()}catch{}return new Ig(_)}function KN(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const qN="__/auth/handler",YN="emulator/auth/handler",QN=encodeURIComponent("fac");async function Tg(r,e,n,s,l,u){X(r.config.authDomain,r,"auth-domain-config-required"),X(r.config.apiKey,r,"invalid-api-key");const c={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:Ri,eventId:l};if(e instanceof rv){e.setDefaultLanguage(r.languageCode),c.providerId=e.providerId||"",xc(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,_]of Object.entries({}))c[v]=_}if(e instanceof Qs){const v=e.getScopes().filter(_=>_!=="");v.length>0&&(c.scopes=v.join(","))}r.tenantId&&(c.tid=r.tenantId);const f=c;for(const v of Object.keys(f))f[v]===void 0&&delete f[v];const p=await r._getAppCheckToken(),g=p?`#${QN}=${encodeURIComponent(p)}`:"";return`${XN(r)}?${Ni(f).slice(1)}${g}`}function XN({config:r}){return r.emulator?Yd(r,YN):`https://${r.authDomain}/${qN}`}/**
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
 */const Ac="webStorageSupport";class JN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=av,this._completeRedirectFn=SN,this._overrideRedirectResult=vN}async _openPopup(e,n,s,l){var u;Nn((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const c=await Tg(e,n,s,Jc(),l);return GN(e,c,Zd())}async _openRedirect(e,n,s,l){await this._originValidation(e);const u=await Tg(e,n,s,Jc(),l);return tN(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:l,promise:u}=this.eventManagers[n];return l?Promise.resolve(l):(Nn(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await zN(e),s=new IN(e);return n.register("authEvent",l=>(X(l==null?void 0:l.authEvent,e,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ac,{type:Ac},l=>{var u;const c=(u=l==null?void 0:l[0])===null||u===void 0?void 0:u[Ac];c!==void 0&&n(!!c),kn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=PN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Zy()||Ky()||Xd()}}const ZN=JN;var kg="@firebase/auth",Ng="1.8.1";/**
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
 */class eR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function tR(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function nR(r){ln(new Qt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:c,authDomain:f}=s.options;X(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:c,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ev(r)},g=new O1(s,l,u,p);return U1(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ln(new Qt("auth-internal",e=>{const n=aa(e.getProvider("auth").getImmediate());return(s=>new eR(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ft(kg,Ng,tR(r)),Ft(kg,Ng,"esm2017")}/**
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
 */const rR=5*60,iR=Vg("authIdTokenMaxAge")||rR;let Rg=null;const sR=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>iR)return;const l=n==null?void 0:n.token;Rg!==l&&(Rg=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function oR(r=ad()){const e=Mr(r,"auth");if(e.isInitialized())return e.getImmediate();const n=F1(r,{popupRedirectResolver:ZN,persistence:[cN,J1,av]}),s=Vg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const c=sR(u.toString());Y1(n,c,()=>c(n.currentUser)),q1(n,f=>c(f))}}const l=Wg("auth");return l&&j1(n,`http://${l}`),n}function lR(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}D1({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=l=>{const u=sn("internal-error");u.customData=l,n(u)},s.type="text/javascript",s.charset="UTF-8",lR().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});nR("Browser");const aR={apiKey:"AIzaSyB2SlnQ03tQfpjLMcleDimnz-wI6_BSXYE",authDomain:"my-multiplayer-dbf6b.firebaseapp.com",databaseURL:"https://my-multiplayer-dbf6b-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"my-multiplayer-dbf6b",storageBucket:"my-multiplayer-dbf6b.firebasestorage.app",messagingSenderId:"3902656578",appId:"1:3902656578:web:ea447bf59037a7d25b5ddb",measurementId:"G-3DVR8Y6VSM"},th=Zg(aR);o1(th);const Ti=zT(th),td=oR(th);$1(td).then(()=>{console.log("Signed in anonymously")}).catch(r=>{console.error("Error signing in anonymously:",r)});const uR=(r,e)=>{const n=Ii(Ti,`players/${r}`);bl(n,e).then(()=>{console.log("Data written successfully!")}).catch(s=>{console.error("Error writing data:",s)})},_t=(r,e,n=!1)=>{const s=Ii(Ti,`players/${r}`),l=n?e:{...e,modifiedAt:new Date().toISOString()};AT(s,l).then(()=>{console.log("Data updated successfully!")}).catch(u=>{console.error("Error updating data:",u)})},mv=r=>{const e=Ii(Ti,r);PT(e).then(()=>{console.log("Data removed successfully!")}).catch(n=>{console.error("Error deleting data:",n)})},cR=async(r,e,n)=>{const s=Ii(Ti,"conversations"),l={senderId:r,senderName:e,msg:n,createdAt:new Date().toISOString()};try{const u=await xT(s);if(u.exists()){const c=u.val(),f=Array.isArray(c)?[l,...c]:[l];await bl(s,f)}else await bl(s,[l]);console.log("Item added successfully!")}catch(u){console.error("Error adding item to array:",u)}},dR=(r,e)=>{const n=r*e,s={};for(const[f,p]of Object.entries(R0))s[f]=Math.floor(p*n);let l=[];for(const[f,p]of Object.entries(s))l=l.concat(Array(p).fill(f));for(;l.length<n;)l.push(ye.EMPTY);for(let f=l.length-1;f>0;f--){const p=Math.floor(Math.random()*(f+1));[l[f],l[p]]=[l[p],l[f]]}const u=[];let c=0;for(let f=0;f<r;f++){const p=[];for(let g=0;g<e;g++)p.push({isActive:!1,type:l[c++]});u.push(p)}return u},hR=(r,e,n,s,l)=>n==null?void 0:n.find(u=>u.x===r&&u.y===e&&u.page===s&&u.id!==l),nd=(r,e,n,s,l,u="")=>{const c=hR(r,e,n,l,u);return c!==void 0?c:r<0||r>=s[0].length||e<0||e>=s.length?2:s[e][r]===ye.WATER?0:1},fR=(r,e,n,s,l)=>{const{x:u,y:c,id:f,page:p}=r,g=nd(u,c,n,l,p,f);if(g!==2)switch(l[c][u]){case ye.HOME:_t(f,{page:"home"}),e("home");break;case ye.GAME:_t(f,{page:"forest"}),e("forest");break;case ye.FREE_WAY:_t(f,{page:"freeway"}),e("freeway");break;case ye.SELL_APPLE:_t(f,{score:0});break;default:(g===1||g===0)&&(s(),_t(f,{isTyping:!0}));break}},gv=(r,e,n,s,l,u,c)=>{const{x:f,y:p,id:g,vector:v,page:_}=r,S={ArrowUp:{dir:0,dx:0,dy:-1},ArrowRight:{dir:1,dx:1,dy:0},ArrowDown:{dir:2,dx:0,dy:1},ArrowLeft:{dir:3,dx:-1,dy:0}};if(e in S){const{dir:k,dx:R,dy:b}=S[e],j=f+R,me=p+b,we={dir:k,vector:(v+1)%4},ge={dir:k},le=nd(j,me,u,c,_);if(le!=null&&le.id&&n){const Ue=j+R,Z=me+b;R!==0&&(ge.x=Ue),b!==0&&(ge.y=Z),nd(Ue,Z,u,c,_)===1&&(_t(le==null?void 0:le.id,ge,!0),we.x=j,we.y=me)}else(le===1||le===2)&&(R!==0&&(we.x=j),b!==0&&(we.y=me));_t(g,we)}else e==="Enter"?fR(r,s,u,l,c):e==="Escape"&&_t(g,{isTyping:!1,msg:""})};function Pg(r,e,n){return typeof r=="string"?new Date(new Date(r).toLocaleString(n,{timeZone:e})):new Date(r.toLocaleString(n,{timeZone:e}))}function pR(r,e="dd/mm/yyyy",n="",s="us"){let l=new Date(r);if(n&&(l=new Date(l.toLocaleString(s,{timeZone:n}))),l.toString()==="Invalid Date")return r;let u=""+(l.getMonth()+1),c=""+l.getDate();const f=l.getFullYear().toString();return u.length<2&&(u="0"+u),c.length<2&&(c="0"+c),e.replace("dd",c).replace("mm",u).replace("yyyy",f)}function Ag(r,e="Asia/Kolkata",n="dd/mm/yyyy"){if(!r)return;const s="en-US",l=new Date(r),u=Pg(new Date,e,s),c=Pg(l,e,s);let f=!0;function p(){var v=Math.floor((u-c)/1e3);if(v<60)return"now";let _=v/60;return _>4&&(f=!1),_<60?Math.floor(_)+" "+[Math.floor(_)>1?"minutes":"minute","ago"].join(" "):(_=v/3600,_<=24?Math.floor(_)+" "+[Math.floor(_)>1?"hours":"hour","ago"].join(" "):(_=v/86400,_<=3?Math.floor(_)+" "+[Math.floor(_)>1?"days":"day","ago"].join(" "):pR(r,n,e,s)))}return{time:p(),isActive:f}}const mR="_mycharacter_1j082_1",gR="_moveD_1j082_10",_R="_moveU_1j082_13",yR="_moveR_1j082_16",vR="_moveL_1j082_19",wR="_dragon_1j082_22",ER="_walkLeft_1j082_25",SR="_walkRight_1j082_28",CR="_name_1j082_31",IR="_msgContainer_1j082_38",TR="_msg_1j082_38",kR="_msgArrow_1j082_61",NR="_typing_1j082_72",RR="_blink_1j082_1",Sr={mycharacter:mR,moveD:gR,moveU:_R,moveR:yR,moveL:vR,dragon:wR,walkLeft:ER,walkRight:SR,name:CR,msgContainer:IR,msg:TR,msgArrow:kR,"typing-container":"_typing-container_1j082_72",typing:NR,blink:RR};function nh(r){var s,l;const{p:e,site:n=""}=r;return(e==null?void 0:e.page)!==n?null:M.jsxs("div",{style:{position:"relative"},children:[M.jsx("div",{className:`${Sr.mycharacter} ${Sr[P0[e==null?void 0:e.dir]]}`,style:{transform:`translate(${(e==null?void 0:e.x)*4}rem, ${(e==null?void 0:e.y)*4}rem)`,backgroundPosition:`${(e==null?void 0:e.vector)*-24}px 0`}}),M.jsxs("div",{className:Sr.name,style:{transform:`translate(${(e==null?void 0:e.x)*4}rem, ${(e==null?void 0:e.y)*4}rem)`},children:[e.name," ",n==="forest"&&e.score]}),(((l=(s=e==null?void 0:e.msg)==null?void 0:s.trim())==null?void 0:l.length)!==0||(e==null?void 0:e.isTyping)==!0)&&M.jsx(M.Fragment,{children:M.jsxs("div",{style:{transform:`translate(${(e==null?void 0:e.x)*4}rem, ${(e==null?void 0:e.y)*4}rem)`},className:Sr.msgContainer,children:[e.isTyping&&M.jsx("span",{className:Sr.typing,children:"....."}),M.jsx("div",{className:Sr.msg,children:e.msg}),M.jsx("div",{className:Sr.msgArrow})]})})]})}nh.propTypes={p:vt.object,site:vt.string};const xg=r=>{let e;const n=new Set,s=(g,v)=>{const _=typeof g=="function"?g(e):g;if(!Object.is(_,e)){const S=e;e=v??(typeof _!="object"||_===null)?_:Object.assign({},e,_),n.forEach(k=>k(e,S))}},l=()=>e,f={setState:s,getState:l,getInitialState:()=>p,subscribe:g=>(n.add(g),()=>n.delete(g))},p=e=r(s,l,f);return f},PR=r=>r?xg(r):xg,AR=r=>r;function xR(r,e=AR){const n=rm.useSyncExternalStore(r.subscribe,()=>e(r.getState()),()=>e(r.getInitialState()));return rm.useDebugValue(n),n}const Og=r=>{const e=PR(r),n=s=>xR(e,s);return Object.assign(n,e),n},da=r=>r?Og(r):Og,ha=da(r=>({players:[],setPlayers:e=>r({players:e})})),Js=da(r=>({myPlayer:{},setMyPlayer:e=>r({myPlayer:e}),page:"home",setPage:e=>r({page:e})})),rh=da(r=>({isTyping:!1,setIsTyping:e=>r({isTyping:e}),msg:"",setMsg:e=>r({msg:e})})),_v=da(r=>({conversations:[],setConversations:e=>r({conversations:e})}));function yv(r){const{rows:e,cols:n}=r,{myPlayer:s,setPage:l}=Js(),{players:u}=ha(),c=he.useRef(null),[f,p]=he.useState(0),[g,v]=he.useState(()=>dR(e,n)),[_,S]=he.useState(()=>0),[k,R]=he.useState(()=>0),[b,j]=he.useState(()=>2),[me,we]=he.useState(()=>0),ge=(Z,Q,se)=>{const Ve=se===0||se===2,rt=Ve?e:n;if(Q<0||Q>=rt)return Z;const Xt=Ve?g[Q][k].type:g[_][Q].type;return Xt===ye.ROCK?Z:(Xt===ye.WATER?j(4):j(se),we(Pt=>(Pt+1)%4),Q)},le=()=>{g[_][k].type===ye.HOME&&(_t(s==null?void 0:s.id,{page:"home"}),l("home"))},Ue=Z=>{switch(console.log("##keydown",Z.key),Z.key){case"ArrowUp":S(Q=>{let se=Q-1;return console.log("##up",Q,se),ge(Q,se,0)});break;case"ArrowRight":R(Q=>{let se=Q+1;return console.log("##right",Q,se),ge(Q,se,1)});break;case"ArrowDown":S(Q=>{let se=Q+1;return console.log("##down",Q,se),ge(Q,se,2)});break;case"ArrowLeft":R(Q=>{let se=Q-1;return console.log("##left",Q,se),ge(Q,se,3)});break;case" ":break;case"Enter":le();break}};return he.useEffect(()=>{g[_][k].type===ye.FOOD&&setTimeout(()=>{let Q=g;Q[_][k].type=ye.EMPTY,v(Q),p(se=>se+1)},400);let Z={x:k,y:_,dir:b,vector:me,score:f};_t(s==null?void 0:s.id,Z)},[_,k]),he.useEffect(()=>{var Z;c&&((Z=c==null?void 0:c.current)==null||Z.focus(),S((s==null?void 0:s.y)||0),R((s==null?void 0:s.x)||0),p((s==null?void 0:s.score)||0))},[]),M.jsxs("div",{tabIndex:"0",onKeyDown:Ue,ref:c,className:Nr.boardContainer,children:[M.jsxs("div",{children:[" Score: ",f]}),M.jsxs("div",{className:Nr.board,children:[u==null?void 0:u.map(Z=>M.jsx(nh,{p:Z,site:"forest"},Z.id)),g.map((Z,Q)=>M.jsx("div",{className:Nr.row,children:Z.map((se,Ve)=>{const rt=_===Q&&k===Ve;return M.jsx($l,{isActive:rt,type:se==null?void 0:se.type,site:"forest"},Ve)})},Q))]})]})}yv.propTypes={rows:vt.number.isRequired,cols:vt.number.isRequired};const OR="_newPlayer_1dkh4_1",DR="_btnSubmit_1dkh4_10",Dg={newPlayer:OR,btnSubmit:DR};function vv(r){const{user:e,setNewPlayer:n}=r,[s,l]=he.useState(""),[u,c]=he.useState("male"),f=()=>{if(s.trim().length===0)return;n(!1);const g={name:s,score:0,x:0,y:0,character:"",dir:2,vector:0,page:"home",msg:""};uR(e==null?void 0:e.id,g)},p=g=>{c(g.target.value)};return M.jsxs("div",{className:Dg.newPlayer,children:[M.jsx("div",{children:"New player"}),M.jsx("input",{type:"text",placeholder:"Enter your name",value:s,onChange:g=>l(g.target.value)}),M.jsx("br",{}),M.jsxs("select",{value:u,onChange:p,children:[M.jsx("option",{value:"male",children:"Man"}),M.jsx("option",{value:"female",children:"Women"}),M.jsx("option",{value:"snake",children:"Snake"})]}),M.jsx("button",{className:Dg.btnSubmit,onClick:f,children:"Submit"})]})}vv.propTypes={user:vt.object.isRequired,setNewPlayer:vt.func.isRequired};const Lg=[["null","wood","wood","null","null","null","null","null","null","wood","wood","null"],["null","wood","wood","empty","null","null","null","null","sellApple","wood","wood","null"],["empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty"],["empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty"],["game","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty"],["empty","empty","empty","empty","water","water","water","water","empty","empty","empty","empty"],["freeway","empty","empty","empty","water","water","water","water","empty","empty","empty","empty"],["empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty"],["grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass"]],LR="_homeContainer_10x50_1",MR="_home_10x50_1",bR="_hint_10x50_16",FR="_col_10x50_25",UR="_heading_10x50_34",jR="_row_10x50_42",zR="_activePlayer_10x50_45",WR="_recentChats_10x50_52",BR="_chat_10x50_58",VR="_msg_10x50_64",$R="_msgTime_10x50_68",HR="_senderName_10x50_74",GR="_deleteChats_10x50_79",ot={homeContainer:LR,home:MR,hint:bR,col:FR,heading:UR,row:jR,activePlayer:zR,recentChats:WR,chat:BR,msg:VR,msgTime:$R,senderName:HR,deleteChats:GR};function KR(){const{myPlayer:r,setPage:e}=Js(),{players:n}=ha(),{isTyping:s,setIsTyping:l}=rh(),{conversations:u}=_v(),{x:c,y:f}=r,p=he.useRef(null),[g,v]=he.useState("Press Enter to type message, and again Enter to send it. Esc to cancel or delete. Hold shift to move other players."),_=()=>{var R;(R=p==null?void 0:p.current)==null||R.blur(),l(!0)},S=R=>{R.preventDefault(),gv(r,R.key,R.shiftKey,e,_,n,Lg)},k=()=>{mv("conversations")};return he.useEffect(()=>{v(c===0&&f===4?"Press enter":"Press Enter to type message, and again Enter to send it. Esc to cancel or delete. Hold shift to move other players.")},[c,f]),he.useEffect(()=>{var R;p&&((R=p==null?void 0:p.current)==null||R.focus())},[]),he.useEffect(()=>{var R;s||(R=p==null?void 0:p.current)==null||R.focus()},[s]),M.jsxs("div",{className:ot.homeContainer,children:[M.jsxs("div",{className:ot.col,children:[M.jsxs("div",{className:ot.hint,children:["Hint: ",g]}),M.jsx("div",{className:ot.heading,children:"Active players"}),n==null?void 0:n.map(R=>{const b=Ag(R==null?void 0:R.modifiedAt);return M.jsxs("div",{className:ot.activePlayer,children:[M.jsxs("div",{className:ot.row,children:[M.jsx("span",{style:{paddingRight:"4px"},children:b!=null&&b.isActive?"🟢":"🔴"}),R.name]}),M.jsx("div",{children:b==null?void 0:b.time})]},R.id)})]}),M.jsxs("div",{className:ot.home,tabIndex:"0",onKeyDown:S,ref:p,children:[M.jsx("h2",{children:"Living area"}),M.jsxs("div",{children:[n==null?void 0:n.map(R=>M.jsx(nh,{p:R,site:"home"},R.id)),Lg.map((R,b)=>M.jsx("div",{className:Nr.row,children:R.map((j,me)=>M.jsx($l,{type:j,site:"home"},me))},b))]})]}),M.jsxs("div",{className:ot.col,children:[M.jsxs("div",{className:ot.heading,children:["Recent Chats"," ",M.jsx("div",{className:ot.deleteChats,onClick:k,children:"🗑️"})," "]}),M.jsx("div",{className:ot.recentChats,children:u==null?void 0:u.map((R,b)=>{var j;return M.jsxs("div",{className:ot.chat,children:[M.jsxs("div",{children:[M.jsx("span",{className:ot.senderName,children:R.senderName})," ",M.jsx("span",{className:ot.msg,children:R.msg})]}),M.jsx("div",{className:ot.msgTime,children:(j=Ag(R.createdAt))==null?void 0:j.time})]},b)})})]})]})}const qR="_car_tsnpc_1",YR="_name_tsnpc_20",QR="_msgContainer_tsnpc_27",XR="_msg_tsnpc_27",JR="_msgArrow_tsnpc_50",ZR="_typing_tsnpc_61",eP="_blink_tsnpc_1",ci={car:qR,name:YR,msgContainer:QR,msg:XR,msgArrow:JR,"typing-container":"_typing-container_tsnpc_61",typing:ZR,blink:eP},tP=[180,270,0,90];function wv(r){var f,p;const{p:e,site:n=""}=r,[s,l]=he.useState(e==null?void 0:e.dir),[u,c]=he.useState(tP[e==null?void 0:e.dir]);return he.useEffect(()=>{let g=e==null?void 0:e.dir;if(s!==g){switch(s){case 0:g===1?c(v=>v+90):g===3&&c(v=>v-90);break;case 1:g===2?c(v=>v+90):g===0&&c(v=>v-90);break;case 2:g===3?c(v=>v+90):g===1&&c(v=>v-90);break;case 3:g===0?c(v=>v+90):g===2&&c(v=>v-90);break}l(e==null?void 0:e.dir)}},[e==null?void 0:e.dir]),(e==null?void 0:e.page)!==n?null:M.jsxs("div",{style:{position:"relative"},children:[M.jsx("div",{className:`${ci.car}`,"data-color":(e==null?void 0:e.carColor)||"red",style:{transform:`translate(${(e==null?void 0:e.x)*2.5}rem, ${(e==null?void 0:e.y)*2.5}rem) rotateZ(${u}deg)`}}),M.jsxs("div",{className:ci.name,style:{transform:`translate(${(e==null?void 0:e.x)*2.5}rem, ${(e==null?void 0:e.y)*2.5}rem)`},children:[e.name," ",n==="forest"&&e.score]}),(((p=(f=e==null?void 0:e.msg)==null?void 0:f.trim())==null?void 0:p.length)!==0||(e==null?void 0:e.isTyping)==!0)&&M.jsx(M.Fragment,{children:M.jsxs("div",{style:{transform:`translate(${(e==null?void 0:e.x)*2.5}rem, ${(e==null?void 0:e.y)*2.5}rem)`},className:ci.msgContainer,children:[e.isTyping&&M.jsx("span",{className:ci.typing,children:"....."}),M.jsx("div",{className:ci.msg,children:e.msg}),M.jsx("div",{className:ci.msgArrow})]})})]})}wv.propTypes={p:vt.object,site:vt.string};function Ev(r){const{rows:e,cols:n}=r,s=he.useRef(null),{myPlayer:l,setPage:u}=Js(),{players:c}=ha(),{isTyping:f,setIsTyping:p}=rh(),[g]=he.useState(()=>{let k=[];for(let R=0;R<e;R++){let b=[];for(let j=0;j<n;j++)b.push(ye.NULL);k.push(b)}return k[0][0]=ye.HOME,k}),v=()=>{var k;(k=s==null?void 0:s.current)==null||k.blur(),p(!0)},_=k=>{k.preventDefault(),gv(l,k.key,k.shiftKey,u,v,c,g)},S=k=>{_t(l.id,{carColor:k.target.name})};return he.useEffect(()=>{var k;f||(k=s==null?void 0:s.current)==null||k.focus()},[f]),he.useEffect(()=>{var k;s&&((k=s==null?void 0:s.current)==null||k.focus())},[]),M.jsxs("div",{tabIndex:"0",onKeyDown:_,ref:s,className:Nr.board,children:[M.jsxs("div",{className:Nr.row,style:{columnGap:"1rem",padding:"1rem"},children:[M.jsx("div",{children:"Color:"}),M.jsx("button",{onClick:S,name:"green",className:"btn",children:"Green"}),M.jsx("button",{onClick:S,name:"red",className:"btn",children:"Red"}),M.jsx("button",{onClick:S,name:"blue",className:"btn",children:"Blue"})]}),c==null?void 0:c.map(k=>M.jsx(wv,{p:k,site:"freeway"},k.id)),g.map((k,R)=>M.jsx("div",{className:Nr.row,children:k.map((b,j)=>M.jsx($l,{type:b,site:"freeway"},j))},R))]})}Ev.propTypes={rows:vt.number.isRequired,cols:vt.number.isRequired};const nP="_editor_ge73_1",rP="_input_ge73_9",Mg={editor:nP,input:rP};function Sv(){const{myPlayer:{id:r="",name:e=""}}=Js(),{isTyping:n,setIsTyping:s,msg:l,setMsg:u}=rh(),c=he.useRef(null),[f,p]=he.useState(2),g=v=>{v.key==="Enter"&&!v.shiftKey&&(l==null?void 0:l.trim().length)>0?(v.preventDefault(),_t(r,{isTyping:!1,msg:l}),cR(r,e,l),s(!1),u(""),p(2)):v.key==="Enter"&&v.shiftKey&&f<16?p(_=>_+1):v.key==="Backspace"&&f>2?p(_=>_-1):v.key==="Escape"&&(s(!1),u(""),_t(r,{isTyping:!1}))};if(n)return M.jsx("div",{className:Mg.editor,children:M.jsx("textarea",{ref:c,value:l,autoFocus:!0,className:Mg.input,placeholder:"Type your message...",onChange:v=>{u(v.target.value)},onKeyUp:g,rows:f.toString()})})}Sv.propTypes={id:vt.string};function iP(){const[r,e]=he.useState(!0),{myPlayer:n,setMyPlayer:s,page:l,setPage:u}=Js(),{setPlayers:c}=ha(),{setConversations:f}=_v(),p=_=>{if(!_)return;let S=[];for(const k in _)k===n.id&&(s({id:k,..._[k]}),u(_[k].page),e(!1)),S.push({id:k,..._[k]});c(S)},g=()=>{mv(`players/${n==null?void 0:n.id}`),e(!0),s({}),window.location.reload()},v=()=>{l!=="home"&&(u("home"),_t(n==null?void 0:n.id,{page:"home"}))};return he.useEffect(()=>td.onAuthStateChanged(S=>{if(S){let k=n;k.id=S.uid,s(k)}else console.log("User signed out")}),[td]),he.useEffect(()=>{const _=Ii(Ti,"players"),S=rg(_,k=>{p(k.val())});return()=>S()},[]),he.useEffect(()=>{const _=Ii(Ti,"conversations"),S=rg(_,k=>{f(k.val())});return()=>S()},[]),r?M.jsx(vv,{user:n,setNewPlayer:e}):M.jsxs(M.Fragment,{children:[M.jsxs("div",{style:{padding:"1rem",fontWeight:"bolder",display:"flex",justifyContent:"space-between"},children:[M.jsx("button",{onClick:v,children:"Home"}),M.jsx("button",{onClick:g,children:"Reset"})]}),l==="home"&&M.jsx(KR,{}),l==="forest"&&M.jsx(yv,{rows:9,cols:12}),l==="freeway"&&M.jsx(Ev,{rows:10,cols:10}),M.jsx(Sv,{})]})}N0.createRoot(document.getElementById("root")).render(M.jsx(he.StrictMode,{children:M.jsx(iP,{})}));
