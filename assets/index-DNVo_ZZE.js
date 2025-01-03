(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=n(l);fetch(l.href,u)}})();function Mg(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var oc={exports:{}},_s={},lc={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp;function _0(){if(Jp)return ee;Jp=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function w(I){return I===null||typeof I!="object"?null:(I=_&&I[_]||I["@@iterator"],typeof I=="function"?I:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,M={};function B(I,A,J){this.props=I,this.context=A,this.refs=M,this.updater=J||R}B.prototype.isReactComponent={},B.prototype.setState=function(I,A){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,A,"setState")},B.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function pe(){}pe.prototype=B.prototype;function we(I,A,J){this.props=I,this.context=A,this.refs=M,this.updater=J||R}var me=we.prototype=new pe;me.constructor=we,N(me,B.prototype),me.isPureReactComponent=!0;var le=Array.isArray,Ue=Object.prototype.hasOwnProperty,Z={current:null},Q={key:!0,ref:!0,__self:!0,__source:!0};function se(I,A,J){var re,ae={},ue=null,Ee=null;if(A!=null)for(re in A.ref!==void 0&&(Ee=A.ref),A.key!==void 0&&(ue=""+A.key),A)Ue.call(A,re)&&!Q.hasOwnProperty(re)&&(ae[re]=A[re]);var he=arguments.length-2;if(he===1)ae.children=J;else if(1<he){for(var Re=Array(he),Et=0;Et<he;Et++)Re[Et]=arguments[Et+2];ae.children=Re}if(I&&I.defaultProps)for(re in he=I.defaultProps,he)ae[re]===void 0&&(ae[re]=he[re]);return{$$typeof:r,type:I,key:ue,ref:Ee,props:ae,_owner:Z.current}}function Be(I,A){return{$$typeof:r,type:I.type,key:A,ref:I.ref,props:I.props,_owner:I._owner}}function rt(I){return typeof I=="object"&&I!==null&&I.$$typeof===r}function Xt(I){var A={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(J){return A[J]})}var Nt=/\/+/g;function wt(I,A){return typeof I=="object"&&I!==null&&I.key!=null?Xt(""+I.key):A.toString(36)}function jt(I,A,J,re,ae){var ue=typeof I;(ue==="undefined"||ue==="boolean")&&(I=null);var Ee=!1;if(I===null)Ee=!0;else switch(ue){case"string":case"number":Ee=!0;break;case"object":switch(I.$$typeof){case r:case e:Ee=!0}}if(Ee)return Ee=I,ae=ae(Ee),I=re===""?"."+wt(Ee,0):re,le(ae)?(J="",I!=null&&(J=I.replace(Nt,"$&/")+"/"),jt(ae,A,J,"",function(Et){return Et})):ae!=null&&(rt(ae)&&(ae=Be(ae,J+(!ae.key||Ee&&Ee.key===ae.key?"":(""+ae.key).replace(Nt,"$&/")+"/")+I)),A.push(ae)),1;if(Ee=0,re=re===""?".":re+":",le(I))for(var he=0;he<I.length;he++){ue=I[he];var Re=re+wt(ue,he);Ee+=jt(ue,A,J,Re,ae)}else if(Re=w(I),typeof Re=="function")for(I=Re.call(I),he=0;!(ue=I.next()).done;)ue=ue.value,Re=re+wt(ue,he++),Ee+=jt(ue,A,J,Re,ae);else if(ue==="object")throw A=String(I),Error("Objects are not valid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":A)+"). If you meant to render a collection of children, use an array instead.");return Ee}function Jt(I,A,J){if(I==null)return I;var re=[],ae=0;return jt(I,re,"","",function(ue){return A.call(J,ue,ae++)}),re}function ct(I){if(I._status===-1){var A=I._result;A=A(),A.then(function(J){(I._status===0||I._status===-1)&&(I._status=1,I._result=J)},function(J){(I._status===0||I._status===-1)&&(I._status=2,I._result=J)}),I._status===-1&&(I._status=0,I._result=A)}if(I._status===1)return I._result.default;throw I._result}var xe={current:null},b={transition:null},K={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:b,ReactCurrentOwner:Z};function z(){throw Error("act(...) is not supported in production builds of React.")}return ee.Children={map:Jt,forEach:function(I,A,J){Jt(I,function(){A.apply(this,arguments)},J)},count:function(I){var A=0;return Jt(I,function(){A++}),A},toArray:function(I){return Jt(I,function(A){return A})||[]},only:function(I){if(!rt(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},ee.Component=B,ee.Fragment=n,ee.Profiler=l,ee.PureComponent=we,ee.StrictMode=s,ee.Suspense=p,ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K,ee.act=z,ee.cloneElement=function(I,A,J){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var re=N({},I.props),ae=I.key,ue=I.ref,Ee=I._owner;if(A!=null){if(A.ref!==void 0&&(ue=A.ref,Ee=Z.current),A.key!==void 0&&(ae=""+A.key),I.type&&I.type.defaultProps)var he=I.type.defaultProps;for(Re in A)Ue.call(A,Re)&&!Q.hasOwnProperty(Re)&&(re[Re]=A[Re]===void 0&&he!==void 0?he[Re]:A[Re])}var Re=arguments.length-2;if(Re===1)re.children=J;else if(1<Re){he=Array(Re);for(var Et=0;Et<Re;Et++)he[Et]=arguments[Et+2];re.children=he}return{$$typeof:r,type:I.type,key:ae,ref:ue,props:re,_owner:Ee}},ee.createContext=function(I){return I={$$typeof:c,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:u,_context:I},I.Consumer=I},ee.createElement=se,ee.createFactory=function(I){var A=se.bind(null,I);return A.type=I,A},ee.createRef=function(){return{current:null}},ee.forwardRef=function(I){return{$$typeof:f,render:I}},ee.isValidElement=rt,ee.lazy=function(I){return{$$typeof:v,_payload:{_status:-1,_result:I},_init:ct}},ee.memo=function(I,A){return{$$typeof:g,type:I,compare:A===void 0?null:A}},ee.startTransition=function(I){var A=b.transition;b.transition={};try{I()}finally{b.transition=A}},ee.unstable_act=z,ee.useCallback=function(I,A){return xe.current.useCallback(I,A)},ee.useContext=function(I){return xe.current.useContext(I)},ee.useDebugValue=function(){},ee.useDeferredValue=function(I){return xe.current.useDeferredValue(I)},ee.useEffect=function(I,A){return xe.current.useEffect(I,A)},ee.useId=function(){return xe.current.useId()},ee.useImperativeHandle=function(I,A,J){return xe.current.useImperativeHandle(I,A,J)},ee.useInsertionEffect=function(I,A){return xe.current.useInsertionEffect(I,A)},ee.useLayoutEffect=function(I,A){return xe.current.useLayoutEffect(I,A)},ee.useMemo=function(I,A){return xe.current.useMemo(I,A)},ee.useReducer=function(I,A,J){return xe.current.useReducer(I,A,J)},ee.useRef=function(I){return xe.current.useRef(I)},ee.useState=function(I){return xe.current.useState(I)},ee.useSyncExternalStore=function(I,A,J){return xe.current.useSyncExternalStore(I,A,J)},ee.useTransition=function(){return xe.current.useTransition()},ee.version="18.3.1",ee}var Zp;function rd(){return Zp||(Zp=1,lc.exports=_0()),lc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var em;function y0(){if(em)return _s;em=1;var r=rd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(f,p,g){var v,_={},w=null,R=null;g!==void 0&&(w=""+g),p.key!==void 0&&(w=""+p.key),p.ref!==void 0&&(R=p.ref);for(v in p)s.call(p,v)&&!u.hasOwnProperty(v)&&(_[v]=p[v]);if(f&&f.defaultProps)for(v in p=f.defaultProps,p)_[v]===void 0&&(_[v]=p[v]);return{$$typeof:e,type:f,key:w,ref:R,props:_,_owner:l.current}}return _s.Fragment=n,_s.jsx=c,_s.jsxs=c,_s}var tm;function v0(){return tm||(tm=1,oc.exports=y0()),oc.exports}var j=v0(),_e=rd();const nm=Mg(_e);var ul={},ac={exports:{}},gt={},uc={exports:{}},cc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rm;function w0(){return rm||(rm=1,function(r){function e(b,K){var z=b.length;b.push(K);e:for(;0<z;){var I=z-1>>>1,A=b[I];if(0<l(A,K))b[I]=K,b[z]=A,z=I;else break e}}function n(b){return b.length===0?null:b[0]}function s(b){if(b.length===0)return null;var K=b[0],z=b.pop();if(z!==K){b[0]=z;e:for(var I=0,A=b.length,J=A>>>1;I<J;){var re=2*(I+1)-1,ae=b[re],ue=re+1,Ee=b[ue];if(0>l(ae,z))ue<A&&0>l(Ee,ae)?(b[I]=Ee,b[ue]=z,I=ue):(b[I]=ae,b[re]=z,I=re);else if(ue<A&&0>l(Ee,z))b[I]=Ee,b[ue]=z,I=ue;else break e}}return K}function l(b,K){var z=b.sortIndex-K.sortIndex;return z!==0?z:b.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var c=Date,f=c.now();r.unstable_now=function(){return c.now()-f}}var p=[],g=[],v=1,_=null,w=3,R=!1,N=!1,M=!1,B=typeof setTimeout=="function"?setTimeout:null,pe=typeof clearTimeout=="function"?clearTimeout:null,we=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function me(b){for(var K=n(g);K!==null;){if(K.callback===null)s(g);else if(K.startTime<=b)s(g),K.sortIndex=K.expirationTime,e(p,K);else break;K=n(g)}}function le(b){if(M=!1,me(b),!N)if(n(p)!==null)N=!0,ct(Ue);else{var K=n(g);K!==null&&xe(le,K.startTime-b)}}function Ue(b,K){N=!1,M&&(M=!1,pe(se),se=-1),R=!0;var z=w;try{for(me(K),_=n(p);_!==null&&(!(_.expirationTime>K)||b&&!Xt());){var I=_.callback;if(typeof I=="function"){_.callback=null,w=_.priorityLevel;var A=I(_.expirationTime<=K);K=r.unstable_now(),typeof A=="function"?_.callback=A:_===n(p)&&s(p),me(K)}else s(p);_=n(p)}if(_!==null)var J=!0;else{var re=n(g);re!==null&&xe(le,re.startTime-K),J=!1}return J}finally{_=null,w=z,R=!1}}var Z=!1,Q=null,se=-1,Be=5,rt=-1;function Xt(){return!(r.unstable_now()-rt<Be)}function Nt(){if(Q!==null){var b=r.unstable_now();rt=b;var K=!0;try{K=Q(!0,b)}finally{K?wt():(Z=!1,Q=null)}}else Z=!1}var wt;if(typeof we=="function")wt=function(){we(Nt)};else if(typeof MessageChannel<"u"){var jt=new MessageChannel,Jt=jt.port2;jt.port1.onmessage=Nt,wt=function(){Jt.postMessage(null)}}else wt=function(){B(Nt,0)};function ct(b){Q=b,Z||(Z=!0,wt())}function xe(b,K){se=B(function(){b(r.unstable_now())},K)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(b){b.callback=null},r.unstable_continueExecution=function(){N||R||(N=!0,ct(Ue))},r.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Be=0<b?Math.floor(1e3/b):5},r.unstable_getCurrentPriorityLevel=function(){return w},r.unstable_getFirstCallbackNode=function(){return n(p)},r.unstable_next=function(b){switch(w){case 1:case 2:case 3:var K=3;break;default:K=w}var z=w;w=K;try{return b()}finally{w=z}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(b,K){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var z=w;w=b;try{return K()}finally{w=z}},r.unstable_scheduleCallback=function(b,K,z){var I=r.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?I+z:I):z=I,b){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=z+A,b={id:v++,callback:K,priorityLevel:b,startTime:z,expirationTime:A,sortIndex:-1},z>I?(b.sortIndex=z,e(g,b),n(p)===null&&b===n(g)&&(M?(pe(se),se=-1):M=!0,xe(le,z-I))):(b.sortIndex=A,e(p,b),N||R||(N=!0,ct(Ue))),b},r.unstable_shouldYield=Xt,r.unstable_wrapCallback=function(b){var K=w;return function(){var z=w;w=K;try{return b.apply(this,arguments)}finally{w=z}}}}(cc)),cc}var im;function E0(){return im||(im=1,uc.exports=w0()),uc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sm;function S0(){if(sm)return gt;sm=1;var r=rd(),e=E0();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function u(t,i){c(t,i),c(t+"Capture",i)}function c(t,i){for(l[t]=i,t=0;t<i.length;t++)s.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},_={};function w(t){return p.call(_,t)?!0:p.call(v,t)?!1:g.test(t)?_[t]=!0:(v[t]=!0,!1)}function R(t,i,o,a){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return a?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function N(t,i,o,a){if(i===null||typeof i>"u"||R(t,i,o,a))return!0;if(a)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function M(t,i,o,a,d,h,m){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=a,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=m}var B={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){B[t]=new M(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];B[i]=new M(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){B[t]=new M(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){B[t]=new M(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){B[t]=new M(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){B[t]=new M(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){B[t]=new M(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){B[t]=new M(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){B[t]=new M(t,5,!1,t.toLowerCase(),null,!1,!1)});var pe=/[\-:]([a-z])/g;function we(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(pe,we);B[i]=new M(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(pe,we);B[i]=new M(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(pe,we);B[i]=new M(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){B[t]=new M(t,1,!1,t.toLowerCase(),null,!1,!1)}),B.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){B[t]=new M(t,1,!1,t.toLowerCase(),null,!0,!0)});function me(t,i,o,a){var d=B.hasOwnProperty(i)?B[i]:null;(d!==null?d.type!==0:a||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(N(i,o,d,a)&&(o=null),a||d===null?w(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):d.mustUseProperty?t[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,a=d.attributeNamespace,o===null?t.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,a?t.setAttributeNS(a,i,o):t.setAttribute(i,o))))}var le=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ue=Symbol.for("react.element"),Z=Symbol.for("react.portal"),Q=Symbol.for("react.fragment"),se=Symbol.for("react.strict_mode"),Be=Symbol.for("react.profiler"),rt=Symbol.for("react.provider"),Xt=Symbol.for("react.context"),Nt=Symbol.for("react.forward_ref"),wt=Symbol.for("react.suspense"),jt=Symbol.for("react.suspense_list"),Jt=Symbol.for("react.memo"),ct=Symbol.for("react.lazy"),xe=Symbol.for("react.offscreen"),b=Symbol.iterator;function K(t){return t===null||typeof t!="object"?null:(t=b&&t[b]||t["@@iterator"],typeof t=="function"?t:null)}var z=Object.assign,I;function A(t){if(I===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+t}var J=!1;function re(t,i){if(!t||J)return"";J=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(k){var a=k}Reflect.construct(t,[],i)}else{try{i.call()}catch(k){a=k}t.call(i.prototype)}else{try{throw Error()}catch(k){a=k}t()}}catch(k){if(k&&a&&typeof k.stack=="string"){for(var d=k.stack.split(`
`),h=a.stack.split(`
`),m=d.length-1,y=h.length-1;1<=m&&0<=y&&d[m]!==h[y];)y--;for(;1<=m&&0<=y;m--,y--)if(d[m]!==h[y]){if(m!==1||y!==1)do if(m--,y--,0>y||d[m]!==h[y]){var E=`
`+d[m].replace(" at new "," at ");return t.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",t.displayName)),E}while(1<=m&&0<=y);break}}}finally{J=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?A(t):""}function ae(t){switch(t.tag){case 5:return A(t.type);case 16:return A("Lazy");case 13:return A("Suspense");case 19:return A("SuspenseList");case 0:case 2:case 15:return t=re(t.type,!1),t;case 11:return t=re(t.type.render,!1),t;case 1:return t=re(t.type,!0),t;default:return""}}function ue(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Q:return"Fragment";case Z:return"Portal";case Be:return"Profiler";case se:return"StrictMode";case wt:return"Suspense";case jt:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Xt:return(t.displayName||"Context")+".Consumer";case rt:return(t._context.displayName||"Context")+".Provider";case Nt:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Jt:return i=t.displayName||null,i!==null?i:ue(t.type)||"Memo";case ct:i=t._payload,t=t._init;try{return ue(t(i))}catch{}}return null}function Ee(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ue(i);case 8:return i===se?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function he(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Re(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Et(t){var i=Re(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),a=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(m){a=""+m,h.call(this,m)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(m){a=""+m},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Js(t){t._valueTracker||(t._valueTracker=Et(t))}function rh(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),a="";return t&&(a=Re(t)?t.checked?"true":"false":t.value),t=a,t!==o?(i.setValue(t),!0):!1}function Zs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function fa(t,i){var o=i.checked;return z({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function ih(t,i){var o=i.defaultValue==null?"":i.defaultValue,a=i.checked!=null?i.checked:i.defaultChecked;o=he(i.value!=null?i.value:o),t._wrapperState={initialChecked:a,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function sh(t,i){i=i.checked,i!=null&&me(t,"checked",i,!1)}function pa(t,i){sh(t,i);var o=he(i.value),a=i.type;if(o!=null)a==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(a==="submit"||a==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?ma(t,i.type,o):i.hasOwnProperty("defaultValue")&&ma(t,i.type,he(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function oh(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var a=i.type;if(!(a!=="submit"&&a!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function ma(t,i,o){(i!=="number"||Zs(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Oi=Array.isArray;function Fr(t,i,o,a){if(t=t.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<t.length;o++)d=i.hasOwnProperty("$"+t[o].value),t[o].selected!==d&&(t[o].selected=d),d&&a&&(t[o].defaultSelected=!0)}else{for(o=""+he(o),i=null,d=0;d<t.length;d++){if(t[d].value===o){t[d].selected=!0,a&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function ga(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return z({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function lh(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(Oi(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:he(o)}}function ah(t,i){var o=he(i.value),a=he(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),a!=null&&(t.defaultValue=""+a)}function uh(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function ch(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _a(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?ch(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var eo,dh=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,a,d){MSApp.execUnsafeLocalFunction(function(){return t(i,o,a,d)})}:t}(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(eo=eo||document.createElement("div"),eo.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=eo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Di(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Li={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ev=["Webkit","ms","Moz","O"];Object.keys(Li).forEach(function(t){Ev.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Li[i]=Li[t]})});function hh(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Li.hasOwnProperty(t)&&Li[t]?(""+i).trim():i+"px"}function fh(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var a=o.indexOf("--")===0,d=hh(o,i[o],a);o==="float"&&(o="cssFloat"),a?t.setProperty(o,d):t[o]=d}}var Sv=z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ya(t,i){if(i){if(Sv[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function va(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wa=null;function Ea(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Sa=null,Ur=null,jr=null;function ph(t){if(t=ns(t)){if(typeof Sa!="function")throw Error(n(280));var i=t.stateNode;i&&(i=Co(i),Sa(t.stateNode,t.type,i))}}function mh(t){Ur?jr?jr.push(t):jr=[t]:Ur=t}function gh(){if(Ur){var t=Ur,i=jr;if(jr=Ur=null,ph(t),i)for(t=0;t<i.length;t++)ph(i[t])}}function _h(t,i){return t(i)}function yh(){}var Ia=!1;function vh(t,i,o){if(Ia)return t(i,o);Ia=!0;try{return _h(t,i,o)}finally{Ia=!1,(Ur!==null||jr!==null)&&(yh(),gh())}}function Mi(t,i){var o=t.stateNode;if(o===null)return null;var a=Co(o);if(a===null)return null;o=a[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Ca=!1;if(f)try{var bi={};Object.defineProperty(bi,"passive",{get:function(){Ca=!0}}),window.addEventListener("test",bi,bi),window.removeEventListener("test",bi,bi)}catch{Ca=!1}function Iv(t,i,o,a,d,h,m,y,E){var k=Array.prototype.slice.call(arguments,3);try{i.apply(o,k)}catch(x){this.onError(x)}}var Fi=!1,to=null,no=!1,Ta=null,Cv={onError:function(t){Fi=!0,to=t}};function Tv(t,i,o,a,d,h,m,y,E){Fi=!1,to=null,Iv.apply(Cv,arguments)}function kv(t,i,o,a,d,h,m,y,E){if(Tv.apply(this,arguments),Fi){if(Fi){var k=to;Fi=!1,to=null}else throw Error(n(198));no||(no=!0,Ta=k)}}function ur(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,i.flags&4098&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function wh(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Eh(t){if(ur(t)!==t)throw Error(n(188))}function Rv(t){var i=t.alternate;if(!i){if(i=ur(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,a=i;;){var d=o.return;if(d===null)break;var h=d.alternate;if(h===null){if(a=d.return,a!==null){o=a;continue}break}if(d.child===h.child){for(h=d.child;h;){if(h===o)return Eh(d),t;if(h===a)return Eh(d),i;h=h.sibling}throw Error(n(188))}if(o.return!==a.return)o=d,a=h;else{for(var m=!1,y=d.child;y;){if(y===o){m=!0,o=d,a=h;break}if(y===a){m=!0,a=d,o=h;break}y=y.sibling}if(!m){for(y=h.child;y;){if(y===o){m=!0,o=h,a=d;break}if(y===a){m=!0,a=h,o=d;break}y=y.sibling}if(!m)throw Error(n(189))}}if(o.alternate!==a)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function Sh(t){return t=Rv(t),t!==null?Ih(t):null}function Ih(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Ih(t);if(i!==null)return i;t=t.sibling}return null}var Ch=e.unstable_scheduleCallback,Th=e.unstable_cancelCallback,Nv=e.unstable_shouldYield,Pv=e.unstable_requestPaint,Me=e.unstable_now,Av=e.unstable_getCurrentPriorityLevel,ka=e.unstable_ImmediatePriority,kh=e.unstable_UserBlockingPriority,ro=e.unstable_NormalPriority,xv=e.unstable_LowPriority,Rh=e.unstable_IdlePriority,io=null,Zt=null;function Ov(t){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(io,t,void 0,(t.current.flags&128)===128)}catch{}}var zt=Math.clz32?Math.clz32:Mv,Dv=Math.log,Lv=Math.LN2;function Mv(t){return t>>>=0,t===0?32:31-(Dv(t)/Lv|0)|0}var so=64,oo=4194304;function Ui(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function lo(t,i){var o=t.pendingLanes;if(o===0)return 0;var a=0,d=t.suspendedLanes,h=t.pingedLanes,m=o&268435455;if(m!==0){var y=m&~d;y!==0?a=Ui(y):(h&=m,h!==0&&(a=Ui(h)))}else m=o&~d,m!==0?a=Ui(m):h!==0&&(a=Ui(h));if(a===0)return 0;if(i!==0&&i!==a&&!(i&d)&&(d=a&-a,h=i&-i,d>=h||d===16&&(h&4194240)!==0))return i;if(a&4&&(a|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=a;0<i;)o=31-zt(i),d=1<<o,a|=t[o],i&=~d;return a}function bv(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fv(t,i){for(var o=t.suspendedLanes,a=t.pingedLanes,d=t.expirationTimes,h=t.pendingLanes;0<h;){var m=31-zt(h),y=1<<m,E=d[m];E===-1?(!(y&o)||y&a)&&(d[m]=bv(y,i)):E<=i&&(t.expiredLanes|=y),h&=~y}}function Ra(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Nh(){var t=so;return so<<=1,!(so&4194240)&&(so=64),t}function Na(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function ji(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-zt(i),t[i]=o}function Uv(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var a=t.eventTimes;for(t=t.expirationTimes;0<o;){var d=31-zt(o),h=1<<d;i[d]=0,a[d]=-1,t[d]=-1,o&=~h}}function Pa(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var a=31-zt(o),d=1<<a;d&i|t[a]&i&&(t[a]|=i),o&=~d}}var fe=0;function Ph(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ah,Aa,xh,Oh,Dh,xa=!1,ao=[],Pn=null,An=null,xn=null,zi=new Map,Wi=new Map,On=[],jv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lh(t,i){switch(t){case"focusin":case"focusout":Pn=null;break;case"dragenter":case"dragleave":An=null;break;case"mouseover":case"mouseout":xn=null;break;case"pointerover":case"pointerout":zi.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wi.delete(i.pointerId)}}function Vi(t,i,o,a,d,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:a,nativeEvent:h,targetContainers:[d]},i!==null&&(i=ns(i),i!==null&&Aa(i)),t):(t.eventSystemFlags|=a,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function zv(t,i,o,a,d){switch(i){case"focusin":return Pn=Vi(Pn,t,i,o,a,d),!0;case"dragenter":return An=Vi(An,t,i,o,a,d),!0;case"mouseover":return xn=Vi(xn,t,i,o,a,d),!0;case"pointerover":var h=d.pointerId;return zi.set(h,Vi(zi.get(h)||null,t,i,o,a,d)),!0;case"gotpointercapture":return h=d.pointerId,Wi.set(h,Vi(Wi.get(h)||null,t,i,o,a,d)),!0}return!1}function Mh(t){var i=cr(t.target);if(i!==null){var o=ur(i);if(o!==null){if(i=o.tag,i===13){if(i=wh(o),i!==null){t.blockedOn=i,Dh(t.priority,function(){xh(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function uo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Da(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var a=new o.constructor(o.type,o);wa=a,o.target.dispatchEvent(a),wa=null}else return i=ns(o),i!==null&&Aa(i),t.blockedOn=o,!1;i.shift()}return!0}function bh(t,i,o){uo(t)&&o.delete(i)}function Wv(){xa=!1,Pn!==null&&uo(Pn)&&(Pn=null),An!==null&&uo(An)&&(An=null),xn!==null&&uo(xn)&&(xn=null),zi.forEach(bh),Wi.forEach(bh)}function Bi(t,i){t.blockedOn===i&&(t.blockedOn=null,xa||(xa=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Wv)))}function $i(t){function i(d){return Bi(d,t)}if(0<ao.length){Bi(ao[0],t);for(var o=1;o<ao.length;o++){var a=ao[o];a.blockedOn===t&&(a.blockedOn=null)}}for(Pn!==null&&Bi(Pn,t),An!==null&&Bi(An,t),xn!==null&&Bi(xn,t),zi.forEach(i),Wi.forEach(i),o=0;o<On.length;o++)a=On[o],a.blockedOn===t&&(a.blockedOn=null);for(;0<On.length&&(o=On[0],o.blockedOn===null);)Mh(o),o.blockedOn===null&&On.shift()}var zr=le.ReactCurrentBatchConfig,co=!0;function Vv(t,i,o,a){var d=fe,h=zr.transition;zr.transition=null;try{fe=1,Oa(t,i,o,a)}finally{fe=d,zr.transition=h}}function Bv(t,i,o,a){var d=fe,h=zr.transition;zr.transition=null;try{fe=4,Oa(t,i,o,a)}finally{fe=d,zr.transition=h}}function Oa(t,i,o,a){if(co){var d=Da(t,i,o,a);if(d===null)Qa(t,i,a,ho,o),Lh(t,a);else if(zv(d,t,i,o,a))a.stopPropagation();else if(Lh(t,a),i&4&&-1<jv.indexOf(t)){for(;d!==null;){var h=ns(d);if(h!==null&&Ah(h),h=Da(t,i,o,a),h===null&&Qa(t,i,a,ho,o),h===d)break;d=h}d!==null&&a.stopPropagation()}else Qa(t,i,a,null,o)}}var ho=null;function Da(t,i,o,a){if(ho=null,t=Ea(a),t=cr(t),t!==null)if(i=ur(t),i===null)t=null;else if(o=i.tag,o===13){if(t=wh(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return ho=t,null}function Fh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Av()){case ka:return 1;case kh:return 4;case ro:case xv:return 16;case Rh:return 536870912;default:return 16}default:return 16}}var Dn=null,La=null,fo=null;function Uh(){if(fo)return fo;var t,i=La,o=i.length,a,d="value"in Dn?Dn.value:Dn.textContent,h=d.length;for(t=0;t<o&&i[t]===d[t];t++);var m=o-t;for(a=1;a<=m&&i[o-a]===d[h-a];a++);return fo=d.slice(t,1<a?1-a:void 0)}function po(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function mo(){return!0}function jh(){return!1}function St(t){function i(o,a,d,h,m){this._reactName=o,this._targetInst=d,this.type=a,this.nativeEvent=h,this.target=m,this.currentTarget=null;for(var y in t)t.hasOwnProperty(y)&&(o=t[y],this[y]=o?o(h):h[y]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?mo:jh,this.isPropagationStopped=jh,this}return z(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=mo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=mo)},persist:function(){},isPersistent:mo}),i}var Wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ma=St(Wr),Hi=z({},Wr,{view:0,detail:0}),$v=St(Hi),ba,Fa,Gi,go=z({},Hi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ja,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Gi&&(Gi&&t.type==="mousemove"?(ba=t.screenX-Gi.screenX,Fa=t.screenY-Gi.screenY):Fa=ba=0,Gi=t),ba)},movementY:function(t){return"movementY"in t?t.movementY:Fa}}),zh=St(go),Hv=z({},go,{dataTransfer:0}),Gv=St(Hv),Kv=z({},Hi,{relatedTarget:0}),Ua=St(Kv),qv=z({},Wr,{animationName:0,elapsedTime:0,pseudoElement:0}),Yv=St(qv),Qv=z({},Wr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Xv=St(Qv),Jv=z({},Wr,{data:0}),Wh=St(Jv),Zv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ew={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nw(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=tw[t])?!!i[t]:!1}function ja(){return nw}var rw=z({},Hi,{key:function(t){if(t.key){var i=Zv[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=po(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ew[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ja,charCode:function(t){return t.type==="keypress"?po(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?po(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),iw=St(rw),sw=z({},go,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vh=St(sw),ow=z({},Hi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ja}),lw=St(ow),aw=z({},Wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),uw=St(aw),cw=z({},go,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),dw=St(cw),hw=[9,13,27,32],za=f&&"CompositionEvent"in window,Ki=null;f&&"documentMode"in document&&(Ki=document.documentMode);var fw=f&&"TextEvent"in window&&!Ki,Bh=f&&(!za||Ki&&8<Ki&&11>=Ki),$h=" ",Hh=!1;function Gh(t,i){switch(t){case"keyup":return hw.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Vr=!1;function pw(t,i){switch(t){case"compositionend":return Kh(i);case"keypress":return i.which!==32?null:(Hh=!0,$h);case"textInput":return t=i.data,t===$h&&Hh?null:t;default:return null}}function mw(t,i){if(Vr)return t==="compositionend"||!za&&Gh(t,i)?(t=Uh(),fo=La=Dn=null,Vr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Bh&&i.locale!=="ko"?null:i.data;default:return null}}var gw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qh(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!gw[t.type]:i==="textarea"}function Yh(t,i,o,a){mh(a),i=Eo(i,"onChange"),0<i.length&&(o=new Ma("onChange","change",null,o,a),t.push({event:o,listeners:i}))}var qi=null,Yi=null;function _w(t){pf(t,0)}function _o(t){var i=Kr(t);if(rh(i))return t}function yw(t,i){if(t==="change")return i}var Qh=!1;if(f){var Wa;if(f){var Va="oninput"in document;if(!Va){var Xh=document.createElement("div");Xh.setAttribute("oninput","return;"),Va=typeof Xh.oninput=="function"}Wa=Va}else Wa=!1;Qh=Wa&&(!document.documentMode||9<document.documentMode)}function Jh(){qi&&(qi.detachEvent("onpropertychange",Zh),Yi=qi=null)}function Zh(t){if(t.propertyName==="value"&&_o(Yi)){var i=[];Yh(i,Yi,t,Ea(t)),vh(_w,i)}}function vw(t,i,o){t==="focusin"?(Jh(),qi=i,Yi=o,qi.attachEvent("onpropertychange",Zh)):t==="focusout"&&Jh()}function ww(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return _o(Yi)}function Ew(t,i){if(t==="click")return _o(i)}function Sw(t,i){if(t==="input"||t==="change")return _o(i)}function Iw(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Wt=typeof Object.is=="function"?Object.is:Iw;function Qi(t,i){if(Wt(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),a=Object.keys(i);if(o.length!==a.length)return!1;for(a=0;a<o.length;a++){var d=o[a];if(!p.call(i,d)||!Wt(t[d],i[d]))return!1}return!0}function ef(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function tf(t,i){var o=ef(t);t=0;for(var a;o;){if(o.nodeType===3){if(a=t+o.textContent.length,t<=i&&a>=i)return{node:o,offset:i-t};t=a}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=ef(o)}}function nf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?nf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function rf(){for(var t=window,i=Zs();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=Zs(t.document)}return i}function Ba(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Cw(t){var i=rf(),o=t.focusedElem,a=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&nf(o.ownerDocument.documentElement,o)){if(a!==null&&Ba(o)){if(i=a.start,t=a.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=o.textContent.length,h=Math.min(a.start,d);a=a.end===void 0?h:Math.min(a.end,d),!t.extend&&h>a&&(d=a,a=h,h=d),d=tf(o,h);var m=tf(o,a);d&&m&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==m.node||t.focusOffset!==m.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),h>a?(t.addRange(i),t.extend(m.node,m.offset)):(i.setEnd(m.node,m.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Tw=f&&"documentMode"in document&&11>=document.documentMode,Br=null,$a=null,Xi=null,Ha=!1;function sf(t,i,o){var a=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Ha||Br==null||Br!==Zs(a)||(a=Br,"selectionStart"in a&&Ba(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Xi&&Qi(Xi,a)||(Xi=a,a=Eo($a,"onSelect"),0<a.length&&(i=new Ma("onSelect","select",null,i,o),t.push({event:i,listeners:a}),i.target=Br)))}function yo(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var $r={animationend:yo("Animation","AnimationEnd"),animationiteration:yo("Animation","AnimationIteration"),animationstart:yo("Animation","AnimationStart"),transitionend:yo("Transition","TransitionEnd")},Ga={},of={};f&&(of=document.createElement("div").style,"AnimationEvent"in window||(delete $r.animationend.animation,delete $r.animationiteration.animation,delete $r.animationstart.animation),"TransitionEvent"in window||delete $r.transitionend.transition);function vo(t){if(Ga[t])return Ga[t];if(!$r[t])return t;var i=$r[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in of)return Ga[t]=i[o];return t}var lf=vo("animationend"),af=vo("animationiteration"),uf=vo("animationstart"),cf=vo("transitionend"),df=new Map,hf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ln(t,i){df.set(t,i),u(i,[t])}for(var Ka=0;Ka<hf.length;Ka++){var qa=hf[Ka],kw=qa.toLowerCase(),Rw=qa[0].toUpperCase()+qa.slice(1);Ln(kw,"on"+Rw)}Ln(lf,"onAnimationEnd"),Ln(af,"onAnimationIteration"),Ln(uf,"onAnimationStart"),Ln("dblclick","onDoubleClick"),Ln("focusin","onFocus"),Ln("focusout","onBlur"),Ln(cf,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ji="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ji));function ff(t,i,o){var a=t.type||"unknown-event";t.currentTarget=o,kv(a,i,void 0,t),t.currentTarget=null}function pf(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var a=t[o],d=a.event;a=a.listeners;e:{var h=void 0;if(i)for(var m=a.length-1;0<=m;m--){var y=a[m],E=y.instance,k=y.currentTarget;if(y=y.listener,E!==h&&d.isPropagationStopped())break e;ff(d,y,k),h=E}else for(m=0;m<a.length;m++){if(y=a[m],E=y.instance,k=y.currentTarget,y=y.listener,E!==h&&d.isPropagationStopped())break e;ff(d,y,k),h=E}}}if(no)throw t=Ta,no=!1,Ta=null,t}function Te(t,i){var o=i[nu];o===void 0&&(o=i[nu]=new Set);var a=t+"__bubble";o.has(a)||(mf(i,t,2,!1),o.add(a))}function Ya(t,i,o){var a=0;i&&(a|=4),mf(o,t,a,i)}var wo="_reactListening"+Math.random().toString(36).slice(2);function Zi(t){if(!t[wo]){t[wo]=!0,s.forEach(function(o){o!=="selectionchange"&&(Nw.has(o)||Ya(o,!1,t),Ya(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[wo]||(i[wo]=!0,Ya("selectionchange",!1,i))}}function mf(t,i,o,a){switch(Fh(i)){case 1:var d=Vv;break;case 4:d=Bv;break;default:d=Oa}o=d.bind(null,i,o,t),d=void 0,!Ca||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),a?d!==void 0?t.addEventListener(i,o,{capture:!0,passive:d}):t.addEventListener(i,o,!0):d!==void 0?t.addEventListener(i,o,{passive:d}):t.addEventListener(i,o,!1)}function Qa(t,i,o,a,d){var h=a;if(!(i&1)&&!(i&2)&&a!==null)e:for(;;){if(a===null)return;var m=a.tag;if(m===3||m===4){var y=a.stateNode.containerInfo;if(y===d||y.nodeType===8&&y.parentNode===d)break;if(m===4)for(m=a.return;m!==null;){var E=m.tag;if((E===3||E===4)&&(E=m.stateNode.containerInfo,E===d||E.nodeType===8&&E.parentNode===d))return;m=m.return}for(;y!==null;){if(m=cr(y),m===null)return;if(E=m.tag,E===5||E===6){a=h=m;continue e}y=y.parentNode}}a=a.return}vh(function(){var k=h,x=Ea(o),O=[];e:{var P=df.get(t);if(P!==void 0){var F=Ma,W=t;switch(t){case"keypress":if(po(o)===0)break e;case"keydown":case"keyup":F=iw;break;case"focusin":W="focus",F=Ua;break;case"focusout":W="blur",F=Ua;break;case"beforeblur":case"afterblur":F=Ua;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=zh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=Gv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=lw;break;case lf:case af:case uf:F=Yv;break;case cf:F=uw;break;case"scroll":F=$v;break;case"wheel":F=dw;break;case"copy":case"cut":case"paste":F=Xv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=Vh}var V=(i&4)!==0,be=!V&&t==="scroll",C=V?P!==null?P+"Capture":null:P;V=[];for(var S=k,T;S!==null;){T=S;var D=T.stateNode;if(T.tag===5&&D!==null&&(T=D,C!==null&&(D=Mi(S,C),D!=null&&V.push(es(S,D,T)))),be)break;S=S.return}0<V.length&&(P=new F(P,W,null,o,x),O.push({event:P,listeners:V}))}}if(!(i&7)){e:{if(P=t==="mouseover"||t==="pointerover",F=t==="mouseout"||t==="pointerout",P&&o!==wa&&(W=o.relatedTarget||o.fromElement)&&(cr(W)||W[cn]))break e;if((F||P)&&(P=x.window===x?x:(P=x.ownerDocument)?P.defaultView||P.parentWindow:window,F?(W=o.relatedTarget||o.toElement,F=k,W=W?cr(W):null,W!==null&&(be=ur(W),W!==be||W.tag!==5&&W.tag!==6)&&(W=null)):(F=null,W=k),F!==W)){if(V=zh,D="onMouseLeave",C="onMouseEnter",S="mouse",(t==="pointerout"||t==="pointerover")&&(V=Vh,D="onPointerLeave",C="onPointerEnter",S="pointer"),be=F==null?P:Kr(F),T=W==null?P:Kr(W),P=new V(D,S+"leave",F,o,x),P.target=be,P.relatedTarget=T,D=null,cr(x)===k&&(V=new V(C,S+"enter",W,o,x),V.target=T,V.relatedTarget=be,D=V),be=D,F&&W)t:{for(V=F,C=W,S=0,T=V;T;T=Hr(T))S++;for(T=0,D=C;D;D=Hr(D))T++;for(;0<S-T;)V=Hr(V),S--;for(;0<T-S;)C=Hr(C),T--;for(;S--;){if(V===C||C!==null&&V===C.alternate)break t;V=Hr(V),C=Hr(C)}V=null}else V=null;F!==null&&gf(O,P,F,V,!1),W!==null&&be!==null&&gf(O,be,W,V,!0)}}e:{if(P=k?Kr(k):window,F=P.nodeName&&P.nodeName.toLowerCase(),F==="select"||F==="input"&&P.type==="file")var $=yw;else if(qh(P))if(Qh)$=Sw;else{$=ww;var H=vw}else(F=P.nodeName)&&F.toLowerCase()==="input"&&(P.type==="checkbox"||P.type==="radio")&&($=Ew);if($&&($=$(t,k))){Yh(O,$,o,x);break e}H&&H(t,P,k),t==="focusout"&&(H=P._wrapperState)&&H.controlled&&P.type==="number"&&ma(P,"number",P.value)}switch(H=k?Kr(k):window,t){case"focusin":(qh(H)||H.contentEditable==="true")&&(Br=H,$a=k,Xi=null);break;case"focusout":Xi=$a=Br=null;break;case"mousedown":Ha=!0;break;case"contextmenu":case"mouseup":case"dragend":Ha=!1,sf(O,o,x);break;case"selectionchange":if(Tw)break;case"keydown":case"keyup":sf(O,o,x)}var G;if(za)e:{switch(t){case"compositionstart":var Y="onCompositionStart";break e;case"compositionend":Y="onCompositionEnd";break e;case"compositionupdate":Y="onCompositionUpdate";break e}Y=void 0}else Vr?Gh(t,o)&&(Y="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(Y="onCompositionStart");Y&&(Bh&&o.locale!=="ko"&&(Vr||Y!=="onCompositionStart"?Y==="onCompositionEnd"&&Vr&&(G=Uh()):(Dn=x,La="value"in Dn?Dn.value:Dn.textContent,Vr=!0)),H=Eo(k,Y),0<H.length&&(Y=new Wh(Y,t,null,o,x),O.push({event:Y,listeners:H}),G?Y.data=G:(G=Kh(o),G!==null&&(Y.data=G)))),(G=fw?pw(t,o):mw(t,o))&&(k=Eo(k,"onBeforeInput"),0<k.length&&(x=new Wh("onBeforeInput","beforeinput",null,o,x),O.push({event:x,listeners:k}),x.data=G))}pf(O,i)})}function es(t,i,o){return{instance:t,listener:i,currentTarget:o}}function Eo(t,i){for(var o=i+"Capture",a=[];t!==null;){var d=t,h=d.stateNode;d.tag===5&&h!==null&&(d=h,h=Mi(t,o),h!=null&&a.unshift(es(t,h,d)),h=Mi(t,i),h!=null&&a.push(es(t,h,d))),t=t.return}return a}function Hr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function gf(t,i,o,a,d){for(var h=i._reactName,m=[];o!==null&&o!==a;){var y=o,E=y.alternate,k=y.stateNode;if(E!==null&&E===a)break;y.tag===5&&k!==null&&(y=k,d?(E=Mi(o,h),E!=null&&m.unshift(es(o,E,y))):d||(E=Mi(o,h),E!=null&&m.push(es(o,E,y)))),o=o.return}m.length!==0&&t.push({event:i,listeners:m})}var Pw=/\r\n?/g,Aw=/\u0000|\uFFFD/g;function _f(t){return(typeof t=="string"?t:""+t).replace(Pw,`
`).replace(Aw,"")}function So(t,i,o){if(i=_f(i),_f(t)!==i&&o)throw Error(n(425))}function Io(){}var Xa=null,Ja=null;function Za(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var eu=typeof setTimeout=="function"?setTimeout:void 0,xw=typeof clearTimeout=="function"?clearTimeout:void 0,yf=typeof Promise=="function"?Promise:void 0,Ow=typeof queueMicrotask=="function"?queueMicrotask:typeof yf<"u"?function(t){return yf.resolve(null).then(t).catch(Dw)}:eu;function Dw(t){setTimeout(function(){throw t})}function tu(t,i){var o=i,a=0;do{var d=o.nextSibling;if(t.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(a===0){t.removeChild(d),$i(i);return}a--}else o!=="$"&&o!=="$?"&&o!=="$!"||a++;o=d}while(o);$i(i)}function Mn(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function vf(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var Gr=Math.random().toString(36).slice(2),en="__reactFiber$"+Gr,ts="__reactProps$"+Gr,cn="__reactContainer$"+Gr,nu="__reactEvents$"+Gr,Lw="__reactListeners$"+Gr,Mw="__reactHandles$"+Gr;function cr(t){var i=t[en];if(i)return i;for(var o=t.parentNode;o;){if(i=o[cn]||o[en]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=vf(t);t!==null;){if(o=t[en])return o;t=vf(t)}return i}t=o,o=t.parentNode}return null}function ns(t){return t=t[en]||t[cn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Kr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function Co(t){return t[ts]||null}var ru=[],qr=-1;function bn(t){return{current:t}}function ke(t){0>qr||(t.current=ru[qr],ru[qr]=null,qr--)}function Se(t,i){qr++,ru[qr]=t.current,t.current=i}var Fn={},Ze=bn(Fn),dt=bn(!1),dr=Fn;function Yr(t,i){var o=t.type.contextTypes;if(!o)return Fn;var a=t.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===i)return a.__reactInternalMemoizedMaskedChildContext;var d={},h;for(h in o)d[h]=i[h];return a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function ht(t){return t=t.childContextTypes,t!=null}function To(){ke(dt),ke(Ze)}function wf(t,i,o){if(Ze.current!==Fn)throw Error(n(168));Se(Ze,i),Se(dt,o)}function Ef(t,i,o){var a=t.stateNode;if(i=i.childContextTypes,typeof a.getChildContext!="function")return o;a=a.getChildContext();for(var d in a)if(!(d in i))throw Error(n(108,Ee(t)||"Unknown",d));return z({},o,a)}function ko(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Fn,dr=Ze.current,Se(Ze,t),Se(dt,dt.current),!0}function Sf(t,i,o){var a=t.stateNode;if(!a)throw Error(n(169));o?(t=Ef(t,i,dr),a.__reactInternalMemoizedMergedChildContext=t,ke(dt),ke(Ze),Se(Ze,t)):ke(dt),Se(dt,o)}var dn=null,Ro=!1,iu=!1;function If(t){dn===null?dn=[t]:dn.push(t)}function bw(t){Ro=!0,If(t)}function Un(){if(!iu&&dn!==null){iu=!0;var t=0,i=fe;try{var o=dn;for(fe=1;t<o.length;t++){var a=o[t];do a=a(!0);while(a!==null)}dn=null,Ro=!1}catch(d){throw dn!==null&&(dn=dn.slice(t+1)),Ch(ka,Un),d}finally{fe=i,iu=!1}}return null}var Qr=[],Xr=0,No=null,Po=0,Pt=[],At=0,hr=null,hn=1,fn="";function fr(t,i){Qr[Xr++]=Po,Qr[Xr++]=No,No=t,Po=i}function Cf(t,i,o){Pt[At++]=hn,Pt[At++]=fn,Pt[At++]=hr,hr=t;var a=hn;t=fn;var d=32-zt(a)-1;a&=~(1<<d),o+=1;var h=32-zt(i)+d;if(30<h){var m=d-d%5;h=(a&(1<<m)-1).toString(32),a>>=m,d-=m,hn=1<<32-zt(i)+d|o<<d|a,fn=h+t}else hn=1<<h|o<<d|a,fn=t}function su(t){t.return!==null&&(fr(t,1),Cf(t,1,0))}function ou(t){for(;t===No;)No=Qr[--Xr],Qr[Xr]=null,Po=Qr[--Xr],Qr[Xr]=null;for(;t===hr;)hr=Pt[--At],Pt[At]=null,fn=Pt[--At],Pt[At]=null,hn=Pt[--At],Pt[At]=null}var It=null,Ct=null,Ne=!1,Vt=null;function Tf(t,i){var o=Lt(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function kf(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,It=t,Ct=Mn(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,It=t,Ct=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=hr!==null?{id:hn,overflow:fn}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Lt(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,It=t,Ct=null,!0):!1;default:return!1}}function lu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function au(t){if(Ne){var i=Ct;if(i){var o=i;if(!kf(t,i)){if(lu(t))throw Error(n(418));i=Mn(o.nextSibling);var a=It;i&&kf(t,i)?Tf(a,o):(t.flags=t.flags&-4097|2,Ne=!1,It=t)}}else{if(lu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ne=!1,It=t}}}function Rf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;It=t}function Ao(t){if(t!==It)return!1;if(!Ne)return Rf(t),Ne=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Za(t.type,t.memoizedProps)),i&&(i=Ct)){if(lu(t))throw Nf(),Error(n(418));for(;i;)Tf(t,i),i=Mn(i.nextSibling)}if(Rf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Ct=Mn(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Ct=null}}else Ct=It?Mn(t.stateNode.nextSibling):null;return!0}function Nf(){for(var t=Ct;t;)t=Mn(t.nextSibling)}function Jr(){Ct=It=null,Ne=!1}function uu(t){Vt===null?Vt=[t]:Vt.push(t)}var Fw=le.ReactCurrentBatchConfig;function rs(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var a=o.stateNode}if(!a)throw Error(n(147,t));var d=a,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(m){var y=d.refs;m===null?delete y[h]:y[h]=m},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function xo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Pf(t){var i=t._init;return i(t._payload)}function Af(t){function i(C,S){if(t){var T=C.deletions;T===null?(C.deletions=[S],C.flags|=16):T.push(S)}}function o(C,S){if(!t)return null;for(;S!==null;)i(C,S),S=S.sibling;return null}function a(C,S){for(C=new Map;S!==null;)S.key!==null?C.set(S.key,S):C.set(S.index,S),S=S.sibling;return C}function d(C,S){return C=Gn(C,S),C.index=0,C.sibling=null,C}function h(C,S,T){return C.index=T,t?(T=C.alternate,T!==null?(T=T.index,T<S?(C.flags|=2,S):T):(C.flags|=2,S)):(C.flags|=1048576,S)}function m(C){return t&&C.alternate===null&&(C.flags|=2),C}function y(C,S,T,D){return S===null||S.tag!==6?(S=ec(T,C.mode,D),S.return=C,S):(S=d(S,T),S.return=C,S)}function E(C,S,T,D){var $=T.type;return $===Q?x(C,S,T.props.children,D,T.key):S!==null&&(S.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===ct&&Pf($)===S.type)?(D=d(S,T.props),D.ref=rs(C,S,T),D.return=C,D):(D=tl(T.type,T.key,T.props,null,C.mode,D),D.ref=rs(C,S,T),D.return=C,D)}function k(C,S,T,D){return S===null||S.tag!==4||S.stateNode.containerInfo!==T.containerInfo||S.stateNode.implementation!==T.implementation?(S=tc(T,C.mode,D),S.return=C,S):(S=d(S,T.children||[]),S.return=C,S)}function x(C,S,T,D,$){return S===null||S.tag!==7?(S=Er(T,C.mode,D,$),S.return=C,S):(S=d(S,T),S.return=C,S)}function O(C,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return S=ec(""+S,C.mode,T),S.return=C,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ue:return T=tl(S.type,S.key,S.props,null,C.mode,T),T.ref=rs(C,null,S),T.return=C,T;case Z:return S=tc(S,C.mode,T),S.return=C,S;case ct:var D=S._init;return O(C,D(S._payload),T)}if(Oi(S)||K(S))return S=Er(S,C.mode,T,null),S.return=C,S;xo(C,S)}return null}function P(C,S,T,D){var $=S!==null?S.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return $!==null?null:y(C,S,""+T,D);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Ue:return T.key===$?E(C,S,T,D):null;case Z:return T.key===$?k(C,S,T,D):null;case ct:return $=T._init,P(C,S,$(T._payload),D)}if(Oi(T)||K(T))return $!==null?null:x(C,S,T,D,null);xo(C,T)}return null}function F(C,S,T,D,$){if(typeof D=="string"&&D!==""||typeof D=="number")return C=C.get(T)||null,y(S,C,""+D,$);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Ue:return C=C.get(D.key===null?T:D.key)||null,E(S,C,D,$);case Z:return C=C.get(D.key===null?T:D.key)||null,k(S,C,D,$);case ct:var H=D._init;return F(C,S,T,H(D._payload),$)}if(Oi(D)||K(D))return C=C.get(T)||null,x(S,C,D,$,null);xo(S,D)}return null}function W(C,S,T,D){for(var $=null,H=null,G=S,Y=S=0,Ge=null;G!==null&&Y<T.length;Y++){G.index>Y?(Ge=G,G=null):Ge=G.sibling;var ce=P(C,G,T[Y],D);if(ce===null){G===null&&(G=Ge);break}t&&G&&ce.alternate===null&&i(C,G),S=h(ce,S,Y),H===null?$=ce:H.sibling=ce,H=ce,G=Ge}if(Y===T.length)return o(C,G),Ne&&fr(C,Y),$;if(G===null){for(;Y<T.length;Y++)G=O(C,T[Y],D),G!==null&&(S=h(G,S,Y),H===null?$=G:H.sibling=G,H=G);return Ne&&fr(C,Y),$}for(G=a(C,G);Y<T.length;Y++)Ge=F(G,C,Y,T[Y],D),Ge!==null&&(t&&Ge.alternate!==null&&G.delete(Ge.key===null?Y:Ge.key),S=h(Ge,S,Y),H===null?$=Ge:H.sibling=Ge,H=Ge);return t&&G.forEach(function(Kn){return i(C,Kn)}),Ne&&fr(C,Y),$}function V(C,S,T,D){var $=K(T);if(typeof $!="function")throw Error(n(150));if(T=$.call(T),T==null)throw Error(n(151));for(var H=$=null,G=S,Y=S=0,Ge=null,ce=T.next();G!==null&&!ce.done;Y++,ce=T.next()){G.index>Y?(Ge=G,G=null):Ge=G.sibling;var Kn=P(C,G,ce.value,D);if(Kn===null){G===null&&(G=Ge);break}t&&G&&Kn.alternate===null&&i(C,G),S=h(Kn,S,Y),H===null?$=Kn:H.sibling=Kn,H=Kn,G=Ge}if(ce.done)return o(C,G),Ne&&fr(C,Y),$;if(G===null){for(;!ce.done;Y++,ce=T.next())ce=O(C,ce.value,D),ce!==null&&(S=h(ce,S,Y),H===null?$=ce:H.sibling=ce,H=ce);return Ne&&fr(C,Y),$}for(G=a(C,G);!ce.done;Y++,ce=T.next())ce=F(G,C,Y,ce.value,D),ce!==null&&(t&&ce.alternate!==null&&G.delete(ce.key===null?Y:ce.key),S=h(ce,S,Y),H===null?$=ce:H.sibling=ce,H=ce);return t&&G.forEach(function(g0){return i(C,g0)}),Ne&&fr(C,Y),$}function be(C,S,T,D){if(typeof T=="object"&&T!==null&&T.type===Q&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case Ue:e:{for(var $=T.key,H=S;H!==null;){if(H.key===$){if($=T.type,$===Q){if(H.tag===7){o(C,H.sibling),S=d(H,T.props.children),S.return=C,C=S;break e}}else if(H.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===ct&&Pf($)===H.type){o(C,H.sibling),S=d(H,T.props),S.ref=rs(C,H,T),S.return=C,C=S;break e}o(C,H);break}else i(C,H);H=H.sibling}T.type===Q?(S=Er(T.props.children,C.mode,D,T.key),S.return=C,C=S):(D=tl(T.type,T.key,T.props,null,C.mode,D),D.ref=rs(C,S,T),D.return=C,C=D)}return m(C);case Z:e:{for(H=T.key;S!==null;){if(S.key===H)if(S.tag===4&&S.stateNode.containerInfo===T.containerInfo&&S.stateNode.implementation===T.implementation){o(C,S.sibling),S=d(S,T.children||[]),S.return=C,C=S;break e}else{o(C,S);break}else i(C,S);S=S.sibling}S=tc(T,C.mode,D),S.return=C,C=S}return m(C);case ct:return H=T._init,be(C,S,H(T._payload),D)}if(Oi(T))return W(C,S,T,D);if(K(T))return V(C,S,T,D);xo(C,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,S!==null&&S.tag===6?(o(C,S.sibling),S=d(S,T),S.return=C,C=S):(o(C,S),S=ec(T,C.mode,D),S.return=C,C=S),m(C)):o(C,S)}return be}var Zr=Af(!0),xf=Af(!1),Oo=bn(null),Do=null,ei=null,cu=null;function du(){cu=ei=Do=null}function hu(t){var i=Oo.current;ke(Oo),t._currentValue=i}function fu(t,i,o){for(;t!==null;){var a=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,a!==null&&(a.childLanes|=i)):a!==null&&(a.childLanes&i)!==i&&(a.childLanes|=i),t===o)break;t=t.return}}function ti(t,i){Do=t,cu=ei=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&i&&(ft=!0),t.firstContext=null)}function xt(t){var i=t._currentValue;if(cu!==t)if(t={context:t,memoizedValue:i,next:null},ei===null){if(Do===null)throw Error(n(308));ei=t,Do.dependencies={lanes:0,firstContext:t}}else ei=ei.next=t;return i}var pr=null;function pu(t){pr===null?pr=[t]:pr.push(t)}function Of(t,i,o,a){var d=i.interleaved;return d===null?(o.next=o,pu(i)):(o.next=d.next,d.next=o),i.interleaved=o,pn(t,a)}function pn(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var jn=!1;function mu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Df(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function mn(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function zn(t,i,o){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,oe&2){var d=a.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),a.pending=i,pn(t,o)}return d=a.interleaved,d===null?(i.next=i,pu(a)):(i.next=d.next,d.next=i),a.interleaved=i,pn(t,o)}function Lo(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var a=i.lanes;a&=t.pendingLanes,o|=a,i.lanes=o,Pa(t,o)}}function Lf(t,i){var o=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,o===a)){var d=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var m={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?d=h=m:h=h.next=m,o=o.next}while(o!==null);h===null?d=h=i:h=h.next=i}else d=h=i;o={baseState:a.baseState,firstBaseUpdate:d,lastBaseUpdate:h,shared:a.shared,effects:a.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Mo(t,i,o,a){var d=t.updateQueue;jn=!1;var h=d.firstBaseUpdate,m=d.lastBaseUpdate,y=d.shared.pending;if(y!==null){d.shared.pending=null;var E=y,k=E.next;E.next=null,m===null?h=k:m.next=k,m=E;var x=t.alternate;x!==null&&(x=x.updateQueue,y=x.lastBaseUpdate,y!==m&&(y===null?x.firstBaseUpdate=k:y.next=k,x.lastBaseUpdate=E))}if(h!==null){var O=d.baseState;m=0,x=k=E=null,y=h;do{var P=y.lane,F=y.eventTime;if((a&P)===P){x!==null&&(x=x.next={eventTime:F,lane:0,tag:y.tag,payload:y.payload,callback:y.callback,next:null});e:{var W=t,V=y;switch(P=i,F=o,V.tag){case 1:if(W=V.payload,typeof W=="function"){O=W.call(F,O,P);break e}O=W;break e;case 3:W.flags=W.flags&-65537|128;case 0:if(W=V.payload,P=typeof W=="function"?W.call(F,O,P):W,P==null)break e;O=z({},O,P);break e;case 2:jn=!0}}y.callback!==null&&y.lane!==0&&(t.flags|=64,P=d.effects,P===null?d.effects=[y]:P.push(y))}else F={eventTime:F,lane:P,tag:y.tag,payload:y.payload,callback:y.callback,next:null},x===null?(k=x=F,E=O):x=x.next=F,m|=P;if(y=y.next,y===null){if(y=d.shared.pending,y===null)break;P=y,y=P.next,P.next=null,d.lastBaseUpdate=P,d.shared.pending=null}}while(!0);if(x===null&&(E=O),d.baseState=E,d.firstBaseUpdate=k,d.lastBaseUpdate=x,i=d.shared.interleaved,i!==null){d=i;do m|=d.lane,d=d.next;while(d!==i)}else h===null&&(d.shared.lanes=0);_r|=m,t.lanes=m,t.memoizedState=O}}function Mf(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var a=t[i],d=a.callback;if(d!==null){if(a.callback=null,a=o,typeof d!="function")throw Error(n(191,d));d.call(a)}}}var is={},tn=bn(is),ss=bn(is),os=bn(is);function mr(t){if(t===is)throw Error(n(174));return t}function gu(t,i){switch(Se(os,i),Se(ss,t),Se(tn,is),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:_a(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=_a(i,t)}ke(tn),Se(tn,i)}function ni(){ke(tn),ke(ss),ke(os)}function bf(t){mr(os.current);var i=mr(tn.current),o=_a(i,t.type);i!==o&&(Se(ss,t),Se(tn,o))}function _u(t){ss.current===t&&(ke(tn),ke(ss))}var Pe=bn(0);function bo(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var yu=[];function vu(){for(var t=0;t<yu.length;t++)yu[t]._workInProgressVersionPrimary=null;yu.length=0}var Fo=le.ReactCurrentDispatcher,wu=le.ReactCurrentBatchConfig,gr=0,Ae=null,je=null,$e=null,Uo=!1,ls=!1,as=0,Uw=0;function et(){throw Error(n(321))}function Eu(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Wt(t[o],i[o]))return!1;return!0}function Su(t,i,o,a,d,h){if(gr=h,Ae=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Fo.current=t===null||t.memoizedState===null?Vw:Bw,t=o(a,d),ls){h=0;do{if(ls=!1,as=0,25<=h)throw Error(n(301));h+=1,$e=je=null,i.updateQueue=null,Fo.current=$w,t=o(a,d)}while(ls)}if(Fo.current=Wo,i=je!==null&&je.next!==null,gr=0,$e=je=Ae=null,Uo=!1,i)throw Error(n(300));return t}function Iu(){var t=as!==0;return as=0,t}function nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?Ae.memoizedState=$e=t:$e=$e.next=t,$e}function Ot(){if(je===null){var t=Ae.alternate;t=t!==null?t.memoizedState:null}else t=je.next;var i=$e===null?Ae.memoizedState:$e.next;if(i!==null)$e=i,je=t;else{if(t===null)throw Error(n(310));je=t,t={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},$e===null?Ae.memoizedState=$e=t:$e=$e.next=t}return $e}function us(t,i){return typeof i=="function"?i(t):i}function Cu(t){var i=Ot(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=je,d=a.baseQueue,h=o.pending;if(h!==null){if(d!==null){var m=d.next;d.next=h.next,h.next=m}a.baseQueue=d=h,o.pending=null}if(d!==null){h=d.next,a=a.baseState;var y=m=null,E=null,k=h;do{var x=k.lane;if((gr&x)===x)E!==null&&(E=E.next={lane:0,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),a=k.hasEagerState?k.eagerState:t(a,k.action);else{var O={lane:x,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null};E===null?(y=E=O,m=a):E=E.next=O,Ae.lanes|=x,_r|=x}k=k.next}while(k!==null&&k!==h);E===null?m=a:E.next=y,Wt(a,i.memoizedState)||(ft=!0),i.memoizedState=a,i.baseState=m,i.baseQueue=E,o.lastRenderedState=a}if(t=o.interleaved,t!==null){d=t;do h=d.lane,Ae.lanes|=h,_r|=h,d=d.next;while(d!==t)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Tu(t){var i=Ot(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=o.dispatch,d=o.pending,h=i.memoizedState;if(d!==null){o.pending=null;var m=d=d.next;do h=t(h,m.action),m=m.next;while(m!==d);Wt(h,i.memoizedState)||(ft=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,a]}function Ff(){}function Uf(t,i){var o=Ae,a=Ot(),d=i(),h=!Wt(a.memoizedState,d);if(h&&(a.memoizedState=d,ft=!0),a=a.queue,ku(Wf.bind(null,o,a,t),[t]),a.getSnapshot!==i||h||$e!==null&&$e.memoizedState.tag&1){if(o.flags|=2048,cs(9,zf.bind(null,o,a,d,i),void 0,null),He===null)throw Error(n(349));gr&30||jf(o,i,d)}return d}function jf(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Ae.updateQueue,i===null?(i={lastEffect:null,stores:null},Ae.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function zf(t,i,o,a){i.value=o,i.getSnapshot=a,Vf(i)&&Bf(t)}function Wf(t,i,o){return o(function(){Vf(i)&&Bf(t)})}function Vf(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Wt(t,o)}catch{return!0}}function Bf(t){var i=pn(t,1);i!==null&&Gt(i,t,1,-1)}function $f(t){var i=nn();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:us,lastRenderedState:t},i.queue=t,t=t.dispatch=Ww.bind(null,Ae,t),[i.memoizedState,t]}function cs(t,i,o,a){return t={tag:t,create:i,destroy:o,deps:a,next:null},i=Ae.updateQueue,i===null?(i={lastEffect:null,stores:null},Ae.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(a=o.next,o.next=t,t.next=a,i.lastEffect=t)),t}function Hf(){return Ot().memoizedState}function jo(t,i,o,a){var d=nn();Ae.flags|=t,d.memoizedState=cs(1|i,o,void 0,a===void 0?null:a)}function zo(t,i,o,a){var d=Ot();a=a===void 0?null:a;var h=void 0;if(je!==null){var m=je.memoizedState;if(h=m.destroy,a!==null&&Eu(a,m.deps)){d.memoizedState=cs(i,o,h,a);return}}Ae.flags|=t,d.memoizedState=cs(1|i,o,h,a)}function Gf(t,i){return jo(8390656,8,t,i)}function ku(t,i){return zo(2048,8,t,i)}function Kf(t,i){return zo(4,2,t,i)}function qf(t,i){return zo(4,4,t,i)}function Yf(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Qf(t,i,o){return o=o!=null?o.concat([t]):null,zo(4,4,Yf.bind(null,i,t),o)}function Ru(){}function Xf(t,i){var o=Ot();i=i===void 0?null:i;var a=o.memoizedState;return a!==null&&i!==null&&Eu(i,a[1])?a[0]:(o.memoizedState=[t,i],t)}function Jf(t,i){var o=Ot();i=i===void 0?null:i;var a=o.memoizedState;return a!==null&&i!==null&&Eu(i,a[1])?a[0]:(t=t(),o.memoizedState=[t,i],t)}function Zf(t,i,o){return gr&21?(Wt(o,i)||(o=Nh(),Ae.lanes|=o,_r|=o,t.baseState=!0),i):(t.baseState&&(t.baseState=!1,ft=!0),t.memoizedState=o)}function jw(t,i){var o=fe;fe=o!==0&&4>o?o:4,t(!0);var a=wu.transition;wu.transition={};try{t(!1),i()}finally{fe=o,wu.transition=a}}function ep(){return Ot().memoizedState}function zw(t,i,o){var a=$n(t);if(o={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null},tp(t))np(i,o);else if(o=Of(t,i,o,a),o!==null){var d=st();Gt(o,t,a,d),rp(o,i,a)}}function Ww(t,i,o){var a=$n(t),d={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null};if(tp(t))np(i,d);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var m=i.lastRenderedState,y=h(m,o);if(d.hasEagerState=!0,d.eagerState=y,Wt(y,m)){var E=i.interleaved;E===null?(d.next=d,pu(i)):(d.next=E.next,E.next=d),i.interleaved=d;return}}catch{}finally{}o=Of(t,i,d,a),o!==null&&(d=st(),Gt(o,t,a,d),rp(o,i,a))}}function tp(t){var i=t.alternate;return t===Ae||i!==null&&i===Ae}function np(t,i){ls=Uo=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function rp(t,i,o){if(o&4194240){var a=i.lanes;a&=t.pendingLanes,o|=a,i.lanes=o,Pa(t,o)}}var Wo={readContext:xt,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useInsertionEffect:et,useLayoutEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useMutableSource:et,useSyncExternalStore:et,useId:et,unstable_isNewReconciler:!1},Vw={readContext:xt,useCallback:function(t,i){return nn().memoizedState=[t,i===void 0?null:i],t},useContext:xt,useEffect:Gf,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,jo(4194308,4,Yf.bind(null,i,t),o)},useLayoutEffect:function(t,i){return jo(4194308,4,t,i)},useInsertionEffect:function(t,i){return jo(4,2,t,i)},useMemo:function(t,i){var o=nn();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var a=nn();return i=o!==void 0?o(i):i,a.memoizedState=a.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},a.queue=t,t=t.dispatch=zw.bind(null,Ae,t),[a.memoizedState,t]},useRef:function(t){var i=nn();return t={current:t},i.memoizedState=t},useState:$f,useDebugValue:Ru,useDeferredValue:function(t){return nn().memoizedState=t},useTransition:function(){var t=$f(!1),i=t[0];return t=jw.bind(null,t[1]),nn().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var a=Ae,d=nn();if(Ne){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),He===null)throw Error(n(349));gr&30||jf(a,i,o)}d.memoizedState=o;var h={value:o,getSnapshot:i};return d.queue=h,Gf(Wf.bind(null,a,h,t),[t]),a.flags|=2048,cs(9,zf.bind(null,a,h,o,i),void 0,null),o},useId:function(){var t=nn(),i=He.identifierPrefix;if(Ne){var o=fn,a=hn;o=(a&~(1<<32-zt(a)-1)).toString(32)+o,i=":"+i+"R"+o,o=as++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=Uw++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},Bw={readContext:xt,useCallback:Xf,useContext:xt,useEffect:ku,useImperativeHandle:Qf,useInsertionEffect:Kf,useLayoutEffect:qf,useMemo:Jf,useReducer:Cu,useRef:Hf,useState:function(){return Cu(us)},useDebugValue:Ru,useDeferredValue:function(t){var i=Ot();return Zf(i,je.memoizedState,t)},useTransition:function(){var t=Cu(us)[0],i=Ot().memoizedState;return[t,i]},useMutableSource:Ff,useSyncExternalStore:Uf,useId:ep,unstable_isNewReconciler:!1},$w={readContext:xt,useCallback:Xf,useContext:xt,useEffect:ku,useImperativeHandle:Qf,useInsertionEffect:Kf,useLayoutEffect:qf,useMemo:Jf,useReducer:Tu,useRef:Hf,useState:function(){return Tu(us)},useDebugValue:Ru,useDeferredValue:function(t){var i=Ot();return je===null?i.memoizedState=t:Zf(i,je.memoizedState,t)},useTransition:function(){var t=Tu(us)[0],i=Ot().memoizedState;return[t,i]},useMutableSource:Ff,useSyncExternalStore:Uf,useId:ep,unstable_isNewReconciler:!1};function Bt(t,i){if(t&&t.defaultProps){i=z({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Nu(t,i,o,a){i=t.memoizedState,o=o(a,i),o=o==null?i:z({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Vo={isMounted:function(t){return(t=t._reactInternals)?ur(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var a=st(),d=$n(t),h=mn(a,d);h.payload=i,o!=null&&(h.callback=o),i=zn(t,h,d),i!==null&&(Gt(i,t,d,a),Lo(i,t,d))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var a=st(),d=$n(t),h=mn(a,d);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=zn(t,h,d),i!==null&&(Gt(i,t,d,a),Lo(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=st(),a=$n(t),d=mn(o,a);d.tag=2,i!=null&&(d.callback=i),i=zn(t,d,a),i!==null&&(Gt(i,t,a,o),Lo(i,t,a))}};function ip(t,i,o,a,d,h,m){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,h,m):i.prototype&&i.prototype.isPureReactComponent?!Qi(o,a)||!Qi(d,h):!0}function sp(t,i,o){var a=!1,d=Fn,h=i.contextType;return typeof h=="object"&&h!==null?h=xt(h):(d=ht(i)?dr:Ze.current,a=i.contextTypes,h=(a=a!=null)?Yr(t,d):Fn),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Vo,t.stateNode=i,i._reactInternals=t,a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=h),i}function op(t,i,o,a){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,a),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,a),i.state!==t&&Vo.enqueueReplaceState(i,i.state,null)}function Pu(t,i,o,a){var d=t.stateNode;d.props=o,d.state=t.memoizedState,d.refs={},mu(t);var h=i.contextType;typeof h=="object"&&h!==null?d.context=xt(h):(h=ht(i)?dr:Ze.current,d.context=Yr(t,h)),d.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Nu(t,i,h,o),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Vo.enqueueReplaceState(d,d.state,null),Mo(t,o,d,a),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function ri(t,i){try{var o="",a=i;do o+=ae(a),a=a.return;while(a);var d=o}catch(h){d=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:d,digest:null}}function Au(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function xu(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var Hw=typeof WeakMap=="function"?WeakMap:Map;function lp(t,i,o){o=mn(-1,o),o.tag=3,o.payload={element:null};var a=i.value;return o.callback=function(){Yo||(Yo=!0,Gu=a),xu(t,i)},o}function ap(t,i,o){o=mn(-1,o),o.tag=3;var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var d=i.value;o.payload=function(){return a(d)},o.callback=function(){xu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){xu(t,i),typeof a!="function"&&(Vn===null?Vn=new Set([this]):Vn.add(this));var m=i.stack;this.componentDidCatch(i.value,{componentStack:m!==null?m:""})}),o}function up(t,i,o){var a=t.pingCache;if(a===null){a=t.pingCache=new Hw;var d=new Set;a.set(i,d)}else d=a.get(i),d===void 0&&(d=new Set,a.set(i,d));d.has(o)||(d.add(o),t=s0.bind(null,t,i,o),i.then(t,t))}function cp(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function dp(t,i,o,a,d){return t.mode&1?(t.flags|=65536,t.lanes=d,t):(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=mn(-1,1),i.tag=2,zn(o,i,1))),o.lanes|=1),t)}var Gw=le.ReactCurrentOwner,ft=!1;function it(t,i,o,a){i.child=t===null?xf(i,null,o,a):Zr(i,t.child,o,a)}function hp(t,i,o,a,d){o=o.render;var h=i.ref;return ti(i,d),a=Su(t,i,o,a,h,d),o=Iu(),t!==null&&!ft?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,gn(t,i,d)):(Ne&&o&&su(i),i.flags|=1,it(t,i,a,d),i.child)}function fp(t,i,o,a,d){if(t===null){var h=o.type;return typeof h=="function"&&!Zu(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,pp(t,i,h,a,d)):(t=tl(o.type,null,a,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,!(t.lanes&d)){var m=h.memoizedProps;if(o=o.compare,o=o!==null?o:Qi,o(m,a)&&t.ref===i.ref)return gn(t,i,d)}return i.flags|=1,t=Gn(h,a),t.ref=i.ref,t.return=i,i.child=t}function pp(t,i,o,a,d){if(t!==null){var h=t.memoizedProps;if(Qi(h,a)&&t.ref===i.ref)if(ft=!1,i.pendingProps=a=h,(t.lanes&d)!==0)t.flags&131072&&(ft=!0);else return i.lanes=t.lanes,gn(t,i,d)}return Ou(t,i,o,a,d)}function mp(t,i,o){var a=i.pendingProps,d=a.children,h=t!==null?t.memoizedState:null;if(a.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(si,Tt),Tt|=o;else{if(!(o&1073741824))return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Se(si,Tt),Tt|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=h!==null?h.baseLanes:o,Se(si,Tt),Tt|=a}else h!==null?(a=h.baseLanes|o,i.memoizedState=null):a=o,Se(si,Tt),Tt|=a;return it(t,i,d,o),i.child}function gp(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Ou(t,i,o,a,d){var h=ht(o)?dr:Ze.current;return h=Yr(i,h),ti(i,d),o=Su(t,i,o,a,h,d),a=Iu(),t!==null&&!ft?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,gn(t,i,d)):(Ne&&a&&su(i),i.flags|=1,it(t,i,o,d),i.child)}function _p(t,i,o,a,d){if(ht(o)){var h=!0;ko(i)}else h=!1;if(ti(i,d),i.stateNode===null)$o(t,i),sp(i,o,a),Pu(i,o,a,d),a=!0;else if(t===null){var m=i.stateNode,y=i.memoizedProps;m.props=y;var E=m.context,k=o.contextType;typeof k=="object"&&k!==null?k=xt(k):(k=ht(o)?dr:Ze.current,k=Yr(i,k));var x=o.getDerivedStateFromProps,O=typeof x=="function"||typeof m.getSnapshotBeforeUpdate=="function";O||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(y!==a||E!==k)&&op(i,m,a,k),jn=!1;var P=i.memoizedState;m.state=P,Mo(i,a,m,d),E=i.memoizedState,y!==a||P!==E||dt.current||jn?(typeof x=="function"&&(Nu(i,o,x,a),E=i.memoizedState),(y=jn||ip(i,o,y,a,P,E,k))?(O||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=a,i.memoizedState=E),m.props=a,m.state=E,m.context=k,a=y):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),a=!1)}else{m=i.stateNode,Df(t,i),y=i.memoizedProps,k=i.type===i.elementType?y:Bt(i.type,y),m.props=k,O=i.pendingProps,P=m.context,E=o.contextType,typeof E=="object"&&E!==null?E=xt(E):(E=ht(o)?dr:Ze.current,E=Yr(i,E));var F=o.getDerivedStateFromProps;(x=typeof F=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(y!==O||P!==E)&&op(i,m,a,E),jn=!1,P=i.memoizedState,m.state=P,Mo(i,a,m,d);var W=i.memoizedState;y!==O||P!==W||dt.current||jn?(typeof F=="function"&&(Nu(i,o,F,a),W=i.memoizedState),(k=jn||ip(i,o,k,a,P,W,E)||!1)?(x||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(a,W,E),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(a,W,E)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||y===t.memoizedProps&&P===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&P===t.memoizedState||(i.flags|=1024),i.memoizedProps=a,i.memoizedState=W),m.props=a,m.state=W,m.context=E,a=k):(typeof m.componentDidUpdate!="function"||y===t.memoizedProps&&P===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&P===t.memoizedState||(i.flags|=1024),a=!1)}return Du(t,i,o,a,h,d)}function Du(t,i,o,a,d,h){gp(t,i);var m=(i.flags&128)!==0;if(!a&&!m)return d&&Sf(i,o,!1),gn(t,i,h);a=i.stateNode,Gw.current=i;var y=m&&typeof o.getDerivedStateFromError!="function"?null:a.render();return i.flags|=1,t!==null&&m?(i.child=Zr(i,t.child,null,h),i.child=Zr(i,null,y,h)):it(t,i,y,h),i.memoizedState=a.state,d&&Sf(i,o,!0),i.child}function yp(t){var i=t.stateNode;i.pendingContext?wf(t,i.pendingContext,i.pendingContext!==i.context):i.context&&wf(t,i.context,!1),gu(t,i.containerInfo)}function vp(t,i,o,a,d){return Jr(),uu(d),i.flags|=256,it(t,i,o,a),i.child}var Lu={dehydrated:null,treeContext:null,retryLane:0};function Mu(t){return{baseLanes:t,cachePool:null,transitions:null}}function wp(t,i,o){var a=i.pendingProps,d=Pe.current,h=!1,m=(i.flags&128)!==0,y;if((y=m)||(y=t!==null&&t.memoizedState===null?!1:(d&2)!==0),y?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),Se(Pe,d&1),t===null)return au(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(i.mode&1?t.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(m=a.children,t=a.fallback,h?(a=i.mode,h=i.child,m={mode:"hidden",children:m},!(a&1)&&h!==null?(h.childLanes=0,h.pendingProps=m):h=nl(m,a,0,null),t=Er(t,a,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Mu(o),i.memoizedState=Lu,t):bu(i,m));if(d=t.memoizedState,d!==null&&(y=d.dehydrated,y!==null))return Kw(t,i,m,a,y,d,o);if(h){h=a.fallback,m=i.mode,d=t.child,y=d.sibling;var E={mode:"hidden",children:a.children};return!(m&1)&&i.child!==d?(a=i.child,a.childLanes=0,a.pendingProps=E,i.deletions=null):(a=Gn(d,E),a.subtreeFlags=d.subtreeFlags&14680064),y!==null?h=Gn(y,h):(h=Er(h,m,o,null),h.flags|=2),h.return=i,a.return=i,a.sibling=h,i.child=a,a=h,h=i.child,m=t.child.memoizedState,m=m===null?Mu(o):{baseLanes:m.baseLanes|o,cachePool:null,transitions:m.transitions},h.memoizedState=m,h.childLanes=t.childLanes&~o,i.memoizedState=Lu,a}return h=t.child,t=h.sibling,a=Gn(h,{mode:"visible",children:a.children}),!(i.mode&1)&&(a.lanes=o),a.return=i,a.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=a,i.memoizedState=null,a}function bu(t,i){return i=nl({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Bo(t,i,o,a){return a!==null&&uu(a),Zr(i,t.child,null,o),t=bu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Kw(t,i,o,a,d,h,m){if(o)return i.flags&256?(i.flags&=-257,a=Au(Error(n(422))),Bo(t,i,m,a)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=a.fallback,d=i.mode,a=nl({mode:"visible",children:a.children},d,0,null),h=Er(h,d,m,null),h.flags|=2,a.return=i,h.return=i,a.sibling=h,i.child=a,i.mode&1&&Zr(i,t.child,null,m),i.child.memoizedState=Mu(m),i.memoizedState=Lu,h);if(!(i.mode&1))return Bo(t,i,m,null);if(d.data==="$!"){if(a=d.nextSibling&&d.nextSibling.dataset,a)var y=a.dgst;return a=y,h=Error(n(419)),a=Au(h,a,void 0),Bo(t,i,m,a)}if(y=(m&t.childLanes)!==0,ft||y){if(a=He,a!==null){switch(m&-m){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(a.suspendedLanes|m)?0:d,d!==0&&d!==h.retryLane&&(h.retryLane=d,pn(t,d),Gt(a,t,d,-1))}return Ju(),a=Au(Error(n(421))),Bo(t,i,m,a)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=o0.bind(null,t),d._reactRetry=i,null):(t=h.treeContext,Ct=Mn(d.nextSibling),It=i,Ne=!0,Vt=null,t!==null&&(Pt[At++]=hn,Pt[At++]=fn,Pt[At++]=hr,hn=t.id,fn=t.overflow,hr=i),i=bu(i,a.children),i.flags|=4096,i)}function Ep(t,i,o){t.lanes|=i;var a=t.alternate;a!==null&&(a.lanes|=i),fu(t.return,i,o)}function Fu(t,i,o,a,d){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:a,tail:o,tailMode:d}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=a,h.tail=o,h.tailMode=d)}function Sp(t,i,o){var a=i.pendingProps,d=a.revealOrder,h=a.tail;if(it(t,i,a.children,o),a=Pe.current,a&2)a=a&1|2,i.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ep(t,o,i);else if(t.tag===19)Ep(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}if(Se(Pe,a),!(i.mode&1))i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)t=o.alternate,t!==null&&bo(t)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),Fu(i,!1,d,o,h);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&bo(t)===null){i.child=d;break}t=d.sibling,d.sibling=o,o=d,d=t}Fu(i,!0,o,null,h);break;case"together":Fu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function $o(t,i){!(i.mode&1)&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function gn(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),_r|=i.lanes,!(o&i.childLanes))return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=Gn(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=Gn(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function qw(t,i,o){switch(i.tag){case 3:yp(i),Jr();break;case 5:bf(i);break;case 1:ht(i.type)&&ko(i);break;case 4:gu(i,i.stateNode.containerInfo);break;case 10:var a=i.type._context,d=i.memoizedProps.value;Se(Oo,a._currentValue),a._currentValue=d;break;case 13:if(a=i.memoizedState,a!==null)return a.dehydrated!==null?(Se(Pe,Pe.current&1),i.flags|=128,null):o&i.child.childLanes?wp(t,i,o):(Se(Pe,Pe.current&1),t=gn(t,i,o),t!==null?t.sibling:null);Se(Pe,Pe.current&1);break;case 19:if(a=(o&i.childLanes)!==0,t.flags&128){if(a)return Sp(t,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Se(Pe,Pe.current),a)break;return null;case 22:case 23:return i.lanes=0,mp(t,i,o)}return gn(t,i,o)}var Ip,Uu,Cp,Tp;Ip=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Uu=function(){},Cp=function(t,i,o,a){var d=t.memoizedProps;if(d!==a){t=i.stateNode,mr(tn.current);var h=null;switch(o){case"input":d=fa(t,d),a=fa(t,a),h=[];break;case"select":d=z({},d,{value:void 0}),a=z({},a,{value:void 0}),h=[];break;case"textarea":d=ga(t,d),a=ga(t,a),h=[];break;default:typeof d.onClick!="function"&&typeof a.onClick=="function"&&(t.onclick=Io)}ya(o,a);var m;o=null;for(k in d)if(!a.hasOwnProperty(k)&&d.hasOwnProperty(k)&&d[k]!=null)if(k==="style"){var y=d[k];for(m in y)y.hasOwnProperty(m)&&(o||(o={}),o[m]="")}else k!=="dangerouslySetInnerHTML"&&k!=="children"&&k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&k!=="autoFocus"&&(l.hasOwnProperty(k)?h||(h=[]):(h=h||[]).push(k,null));for(k in a){var E=a[k];if(y=d!=null?d[k]:void 0,a.hasOwnProperty(k)&&E!==y&&(E!=null||y!=null))if(k==="style")if(y){for(m in y)!y.hasOwnProperty(m)||E&&E.hasOwnProperty(m)||(o||(o={}),o[m]="");for(m in E)E.hasOwnProperty(m)&&y[m]!==E[m]&&(o||(o={}),o[m]=E[m])}else o||(h||(h=[]),h.push(k,o)),o=E;else k==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,y=y?y.__html:void 0,E!=null&&y!==E&&(h=h||[]).push(k,E)):k==="children"?typeof E!="string"&&typeof E!="number"||(h=h||[]).push(k,""+E):k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&(l.hasOwnProperty(k)?(E!=null&&k==="onScroll"&&Te("scroll",t),h||y===E||(h=[])):(h=h||[]).push(k,E))}o&&(h=h||[]).push("style",o);var k=h;(i.updateQueue=k)&&(i.flags|=4)}},Tp=function(t,i,o,a){o!==a&&(i.flags|=4)};function ds(t,i){if(!Ne)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function tt(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,a=0;if(i)for(var d=t.child;d!==null;)o|=d.lanes|d.childLanes,a|=d.subtreeFlags&14680064,a|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)o|=d.lanes|d.childLanes,a|=d.subtreeFlags,a|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=a,t.childLanes=o,i}function Yw(t,i,o){var a=i.pendingProps;switch(ou(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(i),null;case 1:return ht(i.type)&&To(),tt(i),null;case 3:return a=i.stateNode,ni(),ke(dt),ke(Ze),vu(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ao(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,Vt!==null&&(Yu(Vt),Vt=null))),Uu(t,i),tt(i),null;case 5:_u(i);var d=mr(os.current);if(o=i.type,t!==null&&i.stateNode!=null)Cp(t,i,o,a,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!a){if(i.stateNode===null)throw Error(n(166));return tt(i),null}if(t=mr(tn.current),Ao(i)){a=i.stateNode,o=i.type;var h=i.memoizedProps;switch(a[en]=i,a[ts]=h,t=(i.mode&1)!==0,o){case"dialog":Te("cancel",a),Te("close",a);break;case"iframe":case"object":case"embed":Te("load",a);break;case"video":case"audio":for(d=0;d<Ji.length;d++)Te(Ji[d],a);break;case"source":Te("error",a);break;case"img":case"image":case"link":Te("error",a),Te("load",a);break;case"details":Te("toggle",a);break;case"input":ih(a,h),Te("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!h.multiple},Te("invalid",a);break;case"textarea":lh(a,h),Te("invalid",a)}ya(o,h),d=null;for(var m in h)if(h.hasOwnProperty(m)){var y=h[m];m==="children"?typeof y=="string"?a.textContent!==y&&(h.suppressHydrationWarning!==!0&&So(a.textContent,y,t),d=["children",y]):typeof y=="number"&&a.textContent!==""+y&&(h.suppressHydrationWarning!==!0&&So(a.textContent,y,t),d=["children",""+y]):l.hasOwnProperty(m)&&y!=null&&m==="onScroll"&&Te("scroll",a)}switch(o){case"input":Js(a),oh(a,h,!0);break;case"textarea":Js(a),uh(a);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(a.onclick=Io)}a=d,i.updateQueue=a,a!==null&&(i.flags|=4)}else{m=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ch(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=m.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof a.is=="string"?t=m.createElement(o,{is:a.is}):(t=m.createElement(o),o==="select"&&(m=t,a.multiple?m.multiple=!0:a.size&&(m.size=a.size))):t=m.createElementNS(t,o),t[en]=i,t[ts]=a,Ip(t,i,!1,!1),i.stateNode=t;e:{switch(m=va(o,a),o){case"dialog":Te("cancel",t),Te("close",t),d=a;break;case"iframe":case"object":case"embed":Te("load",t),d=a;break;case"video":case"audio":for(d=0;d<Ji.length;d++)Te(Ji[d],t);d=a;break;case"source":Te("error",t),d=a;break;case"img":case"image":case"link":Te("error",t),Te("load",t),d=a;break;case"details":Te("toggle",t),d=a;break;case"input":ih(t,a),d=fa(t,a),Te("invalid",t);break;case"option":d=a;break;case"select":t._wrapperState={wasMultiple:!!a.multiple},d=z({},a,{value:void 0}),Te("invalid",t);break;case"textarea":lh(t,a),d=ga(t,a),Te("invalid",t);break;default:d=a}ya(o,d),y=d;for(h in y)if(y.hasOwnProperty(h)){var E=y[h];h==="style"?fh(t,E):h==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,E!=null&&dh(t,E)):h==="children"?typeof E=="string"?(o!=="textarea"||E!=="")&&Di(t,E):typeof E=="number"&&Di(t,""+E):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(l.hasOwnProperty(h)?E!=null&&h==="onScroll"&&Te("scroll",t):E!=null&&me(t,h,E,m))}switch(o){case"input":Js(t),oh(t,a,!1);break;case"textarea":Js(t),uh(t);break;case"option":a.value!=null&&t.setAttribute("value",""+he(a.value));break;case"select":t.multiple=!!a.multiple,h=a.value,h!=null?Fr(t,!!a.multiple,h,!1):a.defaultValue!=null&&Fr(t,!!a.multiple,a.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=Io)}switch(o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return tt(i),null;case 6:if(t&&i.stateNode!=null)Tp(t,i,t.memoizedProps,a);else{if(typeof a!="string"&&i.stateNode===null)throw Error(n(166));if(o=mr(os.current),mr(tn.current),Ao(i)){if(a=i.stateNode,o=i.memoizedProps,a[en]=i,(h=a.nodeValue!==o)&&(t=It,t!==null))switch(t.tag){case 3:So(a.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&So(a.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else a=(o.nodeType===9?o:o.ownerDocument).createTextNode(a),a[en]=i,i.stateNode=a}return tt(i),null;case 13:if(ke(Pe),a=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ne&&Ct!==null&&i.mode&1&&!(i.flags&128))Nf(),Jr(),i.flags|=98560,h=!1;else if(h=Ao(i),a!==null&&a.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[en]=i}else Jr(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;tt(i),h=!1}else Vt!==null&&(Yu(Vt),Vt=null),h=!0;if(!h)return i.flags&65536?i:null}return i.flags&128?(i.lanes=o,i):(a=a!==null,a!==(t!==null&&t.memoizedState!==null)&&a&&(i.child.flags|=8192,i.mode&1&&(t===null||Pe.current&1?ze===0&&(ze=3):Ju())),i.updateQueue!==null&&(i.flags|=4),tt(i),null);case 4:return ni(),Uu(t,i),t===null&&Zi(i.stateNode.containerInfo),tt(i),null;case 10:return hu(i.type._context),tt(i),null;case 17:return ht(i.type)&&To(),tt(i),null;case 19:if(ke(Pe),h=i.memoizedState,h===null)return tt(i),null;if(a=(i.flags&128)!==0,m=h.rendering,m===null)if(a)ds(h,!1);else{if(ze!==0||t!==null&&t.flags&128)for(t=i.child;t!==null;){if(m=bo(t),m!==null){for(i.flags|=128,ds(h,!1),a=m.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),i.subtreeFlags=0,a=o,o=i.child;o!==null;)h=o,t=a,h.flags&=14680066,m=h.alternate,m===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=m.childLanes,h.lanes=m.lanes,h.child=m.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=m.memoizedProps,h.memoizedState=m.memoizedState,h.updateQueue=m.updateQueue,h.type=m.type,t=m.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Se(Pe,Pe.current&1|2),i.child}t=t.sibling}h.tail!==null&&Me()>oi&&(i.flags|=128,a=!0,ds(h,!1),i.lanes=4194304)}else{if(!a)if(t=bo(m),t!==null){if(i.flags|=128,a=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),ds(h,!0),h.tail===null&&h.tailMode==="hidden"&&!m.alternate&&!Ne)return tt(i),null}else 2*Me()-h.renderingStartTime>oi&&o!==1073741824&&(i.flags|=128,a=!0,ds(h,!1),i.lanes=4194304);h.isBackwards?(m.sibling=i.child,i.child=m):(o=h.last,o!==null?o.sibling=m:i.child=m,h.last=m)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Me(),i.sibling=null,o=Pe.current,Se(Pe,a?o&1|2:o&1),i):(tt(i),null);case 22:case 23:return Xu(),a=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==a&&(i.flags|=8192),a&&i.mode&1?Tt&1073741824&&(tt(i),i.subtreeFlags&6&&(i.flags|=8192)):tt(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function Qw(t,i){switch(ou(i),i.tag){case 1:return ht(i.type)&&To(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ni(),ke(dt),ke(Ze),vu(),t=i.flags,t&65536&&!(t&128)?(i.flags=t&-65537|128,i):null;case 5:return _u(i),null;case 13:if(ke(Pe),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Jr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return ke(Pe),null;case 4:return ni(),null;case 10:return hu(i.type._context),null;case 22:case 23:return Xu(),null;case 24:return null;default:return null}}var Ho=!1,nt=!1,Xw=typeof WeakSet=="function"?WeakSet:Set,U=null;function ii(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(a){Oe(t,i,a)}else o.current=null}function ju(t,i,o){try{o()}catch(a){Oe(t,i,a)}}var kp=!1;function Jw(t,i){if(Xa=co,t=rf(),Ba(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var a=o.getSelection&&o.getSelection();if(a&&a.rangeCount!==0){o=a.anchorNode;var d=a.anchorOffset,h=a.focusNode;a=a.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var m=0,y=-1,E=-1,k=0,x=0,O=t,P=null;t:for(;;){for(var F;O!==o||d!==0&&O.nodeType!==3||(y=m+d),O!==h||a!==0&&O.nodeType!==3||(E=m+a),O.nodeType===3&&(m+=O.nodeValue.length),(F=O.firstChild)!==null;)P=O,O=F;for(;;){if(O===t)break t;if(P===o&&++k===d&&(y=m),P===h&&++x===a&&(E=m),(F=O.nextSibling)!==null)break;O=P,P=O.parentNode}O=F}o=y===-1||E===-1?null:{start:y,end:E}}else o=null}o=o||{start:0,end:0}}else o=null;for(Ja={focusedElem:t,selectionRange:o},co=!1,U=i;U!==null;)if(i=U,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,U=t;else for(;U!==null;){i=U;try{var W=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(W!==null){var V=W.memoizedProps,be=W.memoizedState,C=i.stateNode,S=C.getSnapshotBeforeUpdate(i.elementType===i.type?V:Bt(i.type,V),be);C.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var T=i.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(D){Oe(i,i.return,D)}if(t=i.sibling,t!==null){t.return=i.return,U=t;break}U=i.return}return W=kp,kp=!1,W}function hs(t,i,o){var a=i.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var d=a=a.next;do{if((d.tag&t)===t){var h=d.destroy;d.destroy=void 0,h!==void 0&&ju(i,o,h)}d=d.next}while(d!==a)}}function Go(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var a=o.create;o.destroy=a()}o=o.next}while(o!==i)}}function zu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function Rp(t){var i=t.alternate;i!==null&&(t.alternate=null,Rp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[en],delete i[ts],delete i[nu],delete i[Lw],delete i[Mw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Np(t){return t.tag===5||t.tag===3||t.tag===4}function Pp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Np(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Wu(t,i,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Io));else if(a!==4&&(t=t.child,t!==null))for(Wu(t,i,o),t=t.sibling;t!==null;)Wu(t,i,o),t=t.sibling}function Vu(t,i,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(a!==4&&(t=t.child,t!==null))for(Vu(t,i,o),t=t.sibling;t!==null;)Vu(t,i,o),t=t.sibling}var Ye=null,$t=!1;function Wn(t,i,o){for(o=o.child;o!==null;)Ap(t,i,o),o=o.sibling}function Ap(t,i,o){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(io,o)}catch{}switch(o.tag){case 5:nt||ii(o,i);case 6:var a=Ye,d=$t;Ye=null,Wn(t,i,o),Ye=a,$t=d,Ye!==null&&($t?(t=Ye,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):Ye.removeChild(o.stateNode));break;case 18:Ye!==null&&($t?(t=Ye,o=o.stateNode,t.nodeType===8?tu(t.parentNode,o):t.nodeType===1&&tu(t,o),$i(t)):tu(Ye,o.stateNode));break;case 4:a=Ye,d=$t,Ye=o.stateNode.containerInfo,$t=!0,Wn(t,i,o),Ye=a,$t=d;break;case 0:case 11:case 14:case 15:if(!nt&&(a=o.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){d=a=a.next;do{var h=d,m=h.destroy;h=h.tag,m!==void 0&&(h&2||h&4)&&ju(o,i,m),d=d.next}while(d!==a)}Wn(t,i,o);break;case 1:if(!nt&&(ii(o,i),a=o.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=o.memoizedProps,a.state=o.memoizedState,a.componentWillUnmount()}catch(y){Oe(o,i,y)}Wn(t,i,o);break;case 21:Wn(t,i,o);break;case 22:o.mode&1?(nt=(a=nt)||o.memoizedState!==null,Wn(t,i,o),nt=a):Wn(t,i,o);break;default:Wn(t,i,o)}}function xp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new Xw),i.forEach(function(a){var d=l0.bind(null,t,a);o.has(a)||(o.add(a),a.then(d,d))})}}function Ht(t,i){var o=i.deletions;if(o!==null)for(var a=0;a<o.length;a++){var d=o[a];try{var h=t,m=i,y=m;e:for(;y!==null;){switch(y.tag){case 5:Ye=y.stateNode,$t=!1;break e;case 3:Ye=y.stateNode.containerInfo,$t=!0;break e;case 4:Ye=y.stateNode.containerInfo,$t=!0;break e}y=y.return}if(Ye===null)throw Error(n(160));Ap(h,m,d),Ye=null,$t=!1;var E=d.alternate;E!==null&&(E.return=null),d.return=null}catch(k){Oe(d,i,k)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Op(i,t),i=i.sibling}function Op(t,i){var o=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ht(i,t),rn(t),a&4){try{hs(3,t,t.return),Go(3,t)}catch(V){Oe(t,t.return,V)}try{hs(5,t,t.return)}catch(V){Oe(t,t.return,V)}}break;case 1:Ht(i,t),rn(t),a&512&&o!==null&&ii(o,o.return);break;case 5:if(Ht(i,t),rn(t),a&512&&o!==null&&ii(o,o.return),t.flags&32){var d=t.stateNode;try{Di(d,"")}catch(V){Oe(t,t.return,V)}}if(a&4&&(d=t.stateNode,d!=null)){var h=t.memoizedProps,m=o!==null?o.memoizedProps:h,y=t.type,E=t.updateQueue;if(t.updateQueue=null,E!==null)try{y==="input"&&h.type==="radio"&&h.name!=null&&sh(d,h),va(y,m);var k=va(y,h);for(m=0;m<E.length;m+=2){var x=E[m],O=E[m+1];x==="style"?fh(d,O):x==="dangerouslySetInnerHTML"?dh(d,O):x==="children"?Di(d,O):me(d,x,O,k)}switch(y){case"input":pa(d,h);break;case"textarea":ah(d,h);break;case"select":var P=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!h.multiple;var F=h.value;F!=null?Fr(d,!!h.multiple,F,!1):P!==!!h.multiple&&(h.defaultValue!=null?Fr(d,!!h.multiple,h.defaultValue,!0):Fr(d,!!h.multiple,h.multiple?[]:"",!1))}d[ts]=h}catch(V){Oe(t,t.return,V)}}break;case 6:if(Ht(i,t),rn(t),a&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,h=t.memoizedProps;try{d.nodeValue=h}catch(V){Oe(t,t.return,V)}}break;case 3:if(Ht(i,t),rn(t),a&4&&o!==null&&o.memoizedState.isDehydrated)try{$i(i.containerInfo)}catch(V){Oe(t,t.return,V)}break;case 4:Ht(i,t),rn(t);break;case 13:Ht(i,t),rn(t),d=t.child,d.flags&8192&&(h=d.memoizedState!==null,d.stateNode.isHidden=h,!h||d.alternate!==null&&d.alternate.memoizedState!==null||(Hu=Me())),a&4&&xp(t);break;case 22:if(x=o!==null&&o.memoizedState!==null,t.mode&1?(nt=(k=nt)||x,Ht(i,t),nt=k):Ht(i,t),rn(t),a&8192){if(k=t.memoizedState!==null,(t.stateNode.isHidden=k)&&!x&&t.mode&1)for(U=t,x=t.child;x!==null;){for(O=U=x;U!==null;){switch(P=U,F=P.child,P.tag){case 0:case 11:case 14:case 15:hs(4,P,P.return);break;case 1:ii(P,P.return);var W=P.stateNode;if(typeof W.componentWillUnmount=="function"){a=P,o=P.return;try{i=a,W.props=i.memoizedProps,W.state=i.memoizedState,W.componentWillUnmount()}catch(V){Oe(a,o,V)}}break;case 5:ii(P,P.return);break;case 22:if(P.memoizedState!==null){Mp(O);continue}}F!==null?(F.return=P,U=F):Mp(O)}x=x.sibling}e:for(x=null,O=t;;){if(O.tag===5){if(x===null){x=O;try{d=O.stateNode,k?(h=d.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(y=O.stateNode,E=O.memoizedProps.style,m=E!=null&&E.hasOwnProperty("display")?E.display:null,y.style.display=hh("display",m))}catch(V){Oe(t,t.return,V)}}}else if(O.tag===6){if(x===null)try{O.stateNode.nodeValue=k?"":O.memoizedProps}catch(V){Oe(t,t.return,V)}}else if((O.tag!==22&&O.tag!==23||O.memoizedState===null||O===t)&&O.child!==null){O.child.return=O,O=O.child;continue}if(O===t)break e;for(;O.sibling===null;){if(O.return===null||O.return===t)break e;x===O&&(x=null),O=O.return}x===O&&(x=null),O.sibling.return=O.return,O=O.sibling}}break;case 19:Ht(i,t),rn(t),a&4&&xp(t);break;case 21:break;default:Ht(i,t),rn(t)}}function rn(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(Np(o)){var a=o;break e}o=o.return}throw Error(n(160))}switch(a.tag){case 5:var d=a.stateNode;a.flags&32&&(Di(d,""),a.flags&=-33);var h=Pp(t);Vu(t,h,d);break;case 3:case 4:var m=a.stateNode.containerInfo,y=Pp(t);Wu(t,y,m);break;default:throw Error(n(161))}}catch(E){Oe(t,t.return,E)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Zw(t,i,o){U=t,Dp(t)}function Dp(t,i,o){for(var a=(t.mode&1)!==0;U!==null;){var d=U,h=d.child;if(d.tag===22&&a){var m=d.memoizedState!==null||Ho;if(!m){var y=d.alternate,E=y!==null&&y.memoizedState!==null||nt;y=Ho;var k=nt;if(Ho=m,(nt=E)&&!k)for(U=d;U!==null;)m=U,E=m.child,m.tag===22&&m.memoizedState!==null?bp(d):E!==null?(E.return=m,U=E):bp(d);for(;h!==null;)U=h,Dp(h),h=h.sibling;U=d,Ho=y,nt=k}Lp(t)}else d.subtreeFlags&8772&&h!==null?(h.return=d,U=h):Lp(t)}}function Lp(t){for(;U!==null;){var i=U;if(i.flags&8772){var o=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:nt||Go(5,i);break;case 1:var a=i.stateNode;if(i.flags&4&&!nt)if(o===null)a.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:Bt(i.type,o.memoizedProps);a.componentDidUpdate(d,o.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&Mf(i,h,a);break;case 3:var m=i.updateQueue;if(m!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Mf(i,m,o)}break;case 5:var y=i.stateNode;if(o===null&&i.flags&4){o=y;var E=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":E.autoFocus&&o.focus();break;case"img":E.src&&(o.src=E.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var k=i.alternate;if(k!==null){var x=k.memoizedState;if(x!==null){var O=x.dehydrated;O!==null&&$i(O)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}nt||i.flags&512&&zu(i)}catch(P){Oe(i,i.return,P)}}if(i===t){U=null;break}if(o=i.sibling,o!==null){o.return=i.return,U=o;break}U=i.return}}function Mp(t){for(;U!==null;){var i=U;if(i===t){U=null;break}var o=i.sibling;if(o!==null){o.return=i.return,U=o;break}U=i.return}}function bp(t){for(;U!==null;){var i=U;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Go(4,i)}catch(E){Oe(i,o,E)}break;case 1:var a=i.stateNode;if(typeof a.componentDidMount=="function"){var d=i.return;try{a.componentDidMount()}catch(E){Oe(i,d,E)}}var h=i.return;try{zu(i)}catch(E){Oe(i,h,E)}break;case 5:var m=i.return;try{zu(i)}catch(E){Oe(i,m,E)}}}catch(E){Oe(i,i.return,E)}if(i===t){U=null;break}var y=i.sibling;if(y!==null){y.return=i.return,U=y;break}U=i.return}}var e0=Math.ceil,Ko=le.ReactCurrentDispatcher,Bu=le.ReactCurrentOwner,Dt=le.ReactCurrentBatchConfig,oe=0,He=null,Fe=null,Qe=0,Tt=0,si=bn(0),ze=0,fs=null,_r=0,qo=0,$u=0,ps=null,pt=null,Hu=0,oi=1/0,_n=null,Yo=!1,Gu=null,Vn=null,Qo=!1,Bn=null,Xo=0,ms=0,Ku=null,Jo=-1,Zo=0;function st(){return oe&6?Me():Jo!==-1?Jo:Jo=Me()}function $n(t){return t.mode&1?oe&2&&Qe!==0?Qe&-Qe:Fw.transition!==null?(Zo===0&&(Zo=Nh()),Zo):(t=fe,t!==0||(t=window.event,t=t===void 0?16:Fh(t.type)),t):1}function Gt(t,i,o,a){if(50<ms)throw ms=0,Ku=null,Error(n(185));ji(t,o,a),(!(oe&2)||t!==He)&&(t===He&&(!(oe&2)&&(qo|=o),ze===4&&Hn(t,Qe)),mt(t,a),o===1&&oe===0&&!(i.mode&1)&&(oi=Me()+500,Ro&&Un()))}function mt(t,i){var o=t.callbackNode;Fv(t,i);var a=lo(t,t===He?Qe:0);if(a===0)o!==null&&Th(o),t.callbackNode=null,t.callbackPriority=0;else if(i=a&-a,t.callbackPriority!==i){if(o!=null&&Th(o),i===1)t.tag===0?bw(Up.bind(null,t)):If(Up.bind(null,t)),Ow(function(){!(oe&6)&&Un()}),o=null;else{switch(Ph(a)){case 1:o=ka;break;case 4:o=kh;break;case 16:o=ro;break;case 536870912:o=Rh;break;default:o=ro}o=Gp(o,Fp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function Fp(t,i){if(Jo=-1,Zo=0,oe&6)throw Error(n(327));var o=t.callbackNode;if(li()&&t.callbackNode!==o)return null;var a=lo(t,t===He?Qe:0);if(a===0)return null;if(a&30||a&t.expiredLanes||i)i=el(t,a);else{i=a;var d=oe;oe|=2;var h=zp();(He!==t||Qe!==i)&&(_n=null,oi=Me()+500,vr(t,i));do try{r0();break}catch(y){jp(t,y)}while(!0);du(),Ko.current=h,oe=d,Fe!==null?i=0:(He=null,Qe=0,i=ze)}if(i!==0){if(i===2&&(d=Ra(t),d!==0&&(a=d,i=qu(t,d))),i===1)throw o=fs,vr(t,0),Hn(t,a),mt(t,Me()),o;if(i===6)Hn(t,a);else{if(d=t.current.alternate,!(a&30)&&!t0(d)&&(i=el(t,a),i===2&&(h=Ra(t),h!==0&&(a=h,i=qu(t,h))),i===1))throw o=fs,vr(t,0),Hn(t,a),mt(t,Me()),o;switch(t.finishedWork=d,t.finishedLanes=a,i){case 0:case 1:throw Error(n(345));case 2:wr(t,pt,_n);break;case 3:if(Hn(t,a),(a&130023424)===a&&(i=Hu+500-Me(),10<i)){if(lo(t,0)!==0)break;if(d=t.suspendedLanes,(d&a)!==a){st(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=eu(wr.bind(null,t,pt,_n),i);break}wr(t,pt,_n);break;case 4:if(Hn(t,a),(a&4194240)===a)break;for(i=t.eventTimes,d=-1;0<a;){var m=31-zt(a);h=1<<m,m=i[m],m>d&&(d=m),a&=~h}if(a=d,a=Me()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*e0(a/1960))-a,10<a){t.timeoutHandle=eu(wr.bind(null,t,pt,_n),a);break}wr(t,pt,_n);break;case 5:wr(t,pt,_n);break;default:throw Error(n(329))}}}return mt(t,Me()),t.callbackNode===o?Fp.bind(null,t):null}function qu(t,i){var o=ps;return t.current.memoizedState.isDehydrated&&(vr(t,i).flags|=256),t=el(t,i),t!==2&&(i=pt,pt=o,i!==null&&Yu(i)),t}function Yu(t){pt===null?pt=t:pt.push.apply(pt,t)}function t0(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var a=0;a<o.length;a++){var d=o[a],h=d.getSnapshot;d=d.value;try{if(!Wt(h(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Hn(t,i){for(i&=~$u,i&=~qo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-zt(i),a=1<<o;t[o]=-1,i&=~a}}function Up(t){if(oe&6)throw Error(n(327));li();var i=lo(t,0);if(!(i&1))return mt(t,Me()),null;var o=el(t,i);if(t.tag!==0&&o===2){var a=Ra(t);a!==0&&(i=a,o=qu(t,a))}if(o===1)throw o=fs,vr(t,0),Hn(t,i),mt(t,Me()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,wr(t,pt,_n),mt(t,Me()),null}function Qu(t,i){var o=oe;oe|=1;try{return t(i)}finally{oe=o,oe===0&&(oi=Me()+500,Ro&&Un())}}function yr(t){Bn!==null&&Bn.tag===0&&!(oe&6)&&li();var i=oe;oe|=1;var o=Dt.transition,a=fe;try{if(Dt.transition=null,fe=1,t)return t()}finally{fe=a,Dt.transition=o,oe=i,!(oe&6)&&Un()}}function Xu(){Tt=si.current,ke(si)}function vr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,xw(o)),Fe!==null)for(o=Fe.return;o!==null;){var a=o;switch(ou(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&To();break;case 3:ni(),ke(dt),ke(Ze),vu();break;case 5:_u(a);break;case 4:ni();break;case 13:ke(Pe);break;case 19:ke(Pe);break;case 10:hu(a.type._context);break;case 22:case 23:Xu()}o=o.return}if(He=t,Fe=t=Gn(t.current,null),Qe=Tt=i,ze=0,fs=null,$u=qo=_r=0,pt=ps=null,pr!==null){for(i=0;i<pr.length;i++)if(o=pr[i],a=o.interleaved,a!==null){o.interleaved=null;var d=a.next,h=o.pending;if(h!==null){var m=h.next;h.next=d,a.next=m}o.pending=a}pr=null}return t}function jp(t,i){do{var o=Fe;try{if(du(),Fo.current=Wo,Uo){for(var a=Ae.memoizedState;a!==null;){var d=a.queue;d!==null&&(d.pending=null),a=a.next}Uo=!1}if(gr=0,$e=je=Ae=null,ls=!1,as=0,Bu.current=null,o===null||o.return===null){ze=1,fs=i,Fe=null;break}e:{var h=t,m=o.return,y=o,E=i;if(i=Qe,y.flags|=32768,E!==null&&typeof E=="object"&&typeof E.then=="function"){var k=E,x=y,O=x.tag;if(!(x.mode&1)&&(O===0||O===11||O===15)){var P=x.alternate;P?(x.updateQueue=P.updateQueue,x.memoizedState=P.memoizedState,x.lanes=P.lanes):(x.updateQueue=null,x.memoizedState=null)}var F=cp(m);if(F!==null){F.flags&=-257,dp(F,m,y,h,i),F.mode&1&&up(h,k,i),i=F,E=k;var W=i.updateQueue;if(W===null){var V=new Set;V.add(E),i.updateQueue=V}else W.add(E);break e}else{if(!(i&1)){up(h,k,i),Ju();break e}E=Error(n(426))}}else if(Ne&&y.mode&1){var be=cp(m);if(be!==null){!(be.flags&65536)&&(be.flags|=256),dp(be,m,y,h,i),uu(ri(E,y));break e}}h=E=ri(E,y),ze!==4&&(ze=2),ps===null?ps=[h]:ps.push(h),h=m;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var C=lp(h,E,i);Lf(h,C);break e;case 1:y=E;var S=h.type,T=h.stateNode;if(!(h.flags&128)&&(typeof S.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(Vn===null||!Vn.has(T)))){h.flags|=65536,i&=-i,h.lanes|=i;var D=ap(h,y,i);Lf(h,D);break e}}h=h.return}while(h!==null)}Vp(o)}catch($){i=$,Fe===o&&o!==null&&(Fe=o=o.return);continue}break}while(!0)}function zp(){var t=Ko.current;return Ko.current=Wo,t===null?Wo:t}function Ju(){(ze===0||ze===3||ze===2)&&(ze=4),He===null||!(_r&268435455)&&!(qo&268435455)||Hn(He,Qe)}function el(t,i){var o=oe;oe|=2;var a=zp();(He!==t||Qe!==i)&&(_n=null,vr(t,i));do try{n0();break}catch(d){jp(t,d)}while(!0);if(du(),oe=o,Ko.current=a,Fe!==null)throw Error(n(261));return He=null,Qe=0,ze}function n0(){for(;Fe!==null;)Wp(Fe)}function r0(){for(;Fe!==null&&!Nv();)Wp(Fe)}function Wp(t){var i=Hp(t.alternate,t,Tt);t.memoizedProps=t.pendingProps,i===null?Vp(t):Fe=i,Bu.current=null}function Vp(t){var i=t;do{var o=i.alternate;if(t=i.return,i.flags&32768){if(o=Qw(o,i),o!==null){o.flags&=32767,Fe=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ze=6,Fe=null;return}}else if(o=Yw(o,i,Tt),o!==null){Fe=o;return}if(i=i.sibling,i!==null){Fe=i;return}Fe=i=t}while(i!==null);ze===0&&(ze=5)}function wr(t,i,o){var a=fe,d=Dt.transition;try{Dt.transition=null,fe=1,i0(t,i,o,a)}finally{Dt.transition=d,fe=a}return null}function i0(t,i,o,a){do li();while(Bn!==null);if(oe&6)throw Error(n(327));o=t.finishedWork;var d=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(Uv(t,h),t===He&&(Fe=He=null,Qe=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||Qo||(Qo=!0,Gp(ro,function(){return li(),null})),h=(o.flags&15990)!==0,o.subtreeFlags&15990||h){h=Dt.transition,Dt.transition=null;var m=fe;fe=1;var y=oe;oe|=4,Bu.current=null,Jw(t,o),Op(o,t),Cw(Ja),co=!!Xa,Ja=Xa=null,t.current=o,Zw(o),Pv(),oe=y,fe=m,Dt.transition=h}else t.current=o;if(Qo&&(Qo=!1,Bn=t,Xo=d),h=t.pendingLanes,h===0&&(Vn=null),Ov(o.stateNode),mt(t,Me()),i!==null)for(a=t.onRecoverableError,o=0;o<i.length;o++)d=i[o],a(d.value,{componentStack:d.stack,digest:d.digest});if(Yo)throw Yo=!1,t=Gu,Gu=null,t;return Xo&1&&t.tag!==0&&li(),h=t.pendingLanes,h&1?t===Ku?ms++:(ms=0,Ku=t):ms=0,Un(),null}function li(){if(Bn!==null){var t=Ph(Xo),i=Dt.transition,o=fe;try{if(Dt.transition=null,fe=16>t?16:t,Bn===null)var a=!1;else{if(t=Bn,Bn=null,Xo=0,oe&6)throw Error(n(331));var d=oe;for(oe|=4,U=t.current;U!==null;){var h=U,m=h.child;if(U.flags&16){var y=h.deletions;if(y!==null){for(var E=0;E<y.length;E++){var k=y[E];for(U=k;U!==null;){var x=U;switch(x.tag){case 0:case 11:case 15:hs(8,x,h)}var O=x.child;if(O!==null)O.return=x,U=O;else for(;U!==null;){x=U;var P=x.sibling,F=x.return;if(Rp(x),x===k){U=null;break}if(P!==null){P.return=F,U=P;break}U=F}}}var W=h.alternate;if(W!==null){var V=W.child;if(V!==null){W.child=null;do{var be=V.sibling;V.sibling=null,V=be}while(V!==null)}}U=h}}if(h.subtreeFlags&2064&&m!==null)m.return=h,U=m;else e:for(;U!==null;){if(h=U,h.flags&2048)switch(h.tag){case 0:case 11:case 15:hs(9,h,h.return)}var C=h.sibling;if(C!==null){C.return=h.return,U=C;break e}U=h.return}}var S=t.current;for(U=S;U!==null;){m=U;var T=m.child;if(m.subtreeFlags&2064&&T!==null)T.return=m,U=T;else e:for(m=S;U!==null;){if(y=U,y.flags&2048)try{switch(y.tag){case 0:case 11:case 15:Go(9,y)}}catch($){Oe(y,y.return,$)}if(y===m){U=null;break e}var D=y.sibling;if(D!==null){D.return=y.return,U=D;break e}U=y.return}}if(oe=d,Un(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(io,t)}catch{}a=!0}return a}finally{fe=o,Dt.transition=i}}return!1}function Bp(t,i,o){i=ri(o,i),i=lp(t,i,1),t=zn(t,i,1),i=st(),t!==null&&(ji(t,1,i),mt(t,i))}function Oe(t,i,o){if(t.tag===3)Bp(t,t,o);else for(;i!==null;){if(i.tag===3){Bp(i,t,o);break}else if(i.tag===1){var a=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Vn===null||!Vn.has(a))){t=ri(o,t),t=ap(i,t,1),i=zn(i,t,1),t=st(),i!==null&&(ji(i,1,t),mt(i,t));break}}i=i.return}}function s0(t,i,o){var a=t.pingCache;a!==null&&a.delete(i),i=st(),t.pingedLanes|=t.suspendedLanes&o,He===t&&(Qe&o)===o&&(ze===4||ze===3&&(Qe&130023424)===Qe&&500>Me()-Hu?vr(t,0):$u|=o),mt(t,i)}function $p(t,i){i===0&&(t.mode&1?(i=oo,oo<<=1,!(oo&130023424)&&(oo=4194304)):i=1);var o=st();t=pn(t,i),t!==null&&(ji(t,i,o),mt(t,o))}function o0(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),$p(t,o)}function l0(t,i){var o=0;switch(t.tag){case 13:var a=t.stateNode,d=t.memoizedState;d!==null&&(o=d.retryLane);break;case 19:a=t.stateNode;break;default:throw Error(n(314))}a!==null&&a.delete(i),$p(t,o)}var Hp;Hp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||dt.current)ft=!0;else{if(!(t.lanes&o)&&!(i.flags&128))return ft=!1,qw(t,i,o);ft=!!(t.flags&131072)}else ft=!1,Ne&&i.flags&1048576&&Cf(i,Po,i.index);switch(i.lanes=0,i.tag){case 2:var a=i.type;$o(t,i),t=i.pendingProps;var d=Yr(i,Ze.current);ti(i,o),d=Su(null,i,a,t,d,o);var h=Iu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,ht(a)?(h=!0,ko(i)):h=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,mu(i),d.updater=Vo,i.stateNode=d,d._reactInternals=i,Pu(i,a,t,o),i=Du(null,i,a,!0,h,o)):(i.tag=0,Ne&&h&&su(i),it(null,i,d,o),i=i.child),i;case 16:a=i.elementType;e:{switch($o(t,i),t=i.pendingProps,d=a._init,a=d(a._payload),i.type=a,d=i.tag=u0(a),t=Bt(a,t),d){case 0:i=Ou(null,i,a,t,o);break e;case 1:i=_p(null,i,a,t,o);break e;case 11:i=hp(null,i,a,t,o);break e;case 14:i=fp(null,i,a,Bt(a.type,t),o);break e}throw Error(n(306,a,""))}return i;case 0:return a=i.type,d=i.pendingProps,d=i.elementType===a?d:Bt(a,d),Ou(t,i,a,d,o);case 1:return a=i.type,d=i.pendingProps,d=i.elementType===a?d:Bt(a,d),_p(t,i,a,d,o);case 3:e:{if(yp(i),t===null)throw Error(n(387));a=i.pendingProps,h=i.memoizedState,d=h.element,Df(t,i),Mo(i,a,null,o);var m=i.memoizedState;if(a=m.element,h.isDehydrated)if(h={element:a,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){d=ri(Error(n(423)),i),i=vp(t,i,a,o,d);break e}else if(a!==d){d=ri(Error(n(424)),i),i=vp(t,i,a,o,d);break e}else for(Ct=Mn(i.stateNode.containerInfo.firstChild),It=i,Ne=!0,Vt=null,o=xf(i,null,a,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Jr(),a===d){i=gn(t,i,o);break e}it(t,i,a,o)}i=i.child}return i;case 5:return bf(i),t===null&&au(i),a=i.type,d=i.pendingProps,h=t!==null?t.memoizedProps:null,m=d.children,Za(a,d)?m=null:h!==null&&Za(a,h)&&(i.flags|=32),gp(t,i),it(t,i,m,o),i.child;case 6:return t===null&&au(i),null;case 13:return wp(t,i,o);case 4:return gu(i,i.stateNode.containerInfo),a=i.pendingProps,t===null?i.child=Zr(i,null,a,o):it(t,i,a,o),i.child;case 11:return a=i.type,d=i.pendingProps,d=i.elementType===a?d:Bt(a,d),hp(t,i,a,d,o);case 7:return it(t,i,i.pendingProps,o),i.child;case 8:return it(t,i,i.pendingProps.children,o),i.child;case 12:return it(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(a=i.type._context,d=i.pendingProps,h=i.memoizedProps,m=d.value,Se(Oo,a._currentValue),a._currentValue=m,h!==null)if(Wt(h.value,m)){if(h.children===d.children&&!dt.current){i=gn(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var y=h.dependencies;if(y!==null){m=h.child;for(var E=y.firstContext;E!==null;){if(E.context===a){if(h.tag===1){E=mn(-1,o&-o),E.tag=2;var k=h.updateQueue;if(k!==null){k=k.shared;var x=k.pending;x===null?E.next=E:(E.next=x.next,x.next=E),k.pending=E}}h.lanes|=o,E=h.alternate,E!==null&&(E.lanes|=o),fu(h.return,o,i),y.lanes|=o;break}E=E.next}}else if(h.tag===10)m=h.type===i.type?null:h.child;else if(h.tag===18){if(m=h.return,m===null)throw Error(n(341));m.lanes|=o,y=m.alternate,y!==null&&(y.lanes|=o),fu(m,o,i),m=h.sibling}else m=h.child;if(m!==null)m.return=h;else for(m=h;m!==null;){if(m===i){m=null;break}if(h=m.sibling,h!==null){h.return=m.return,m=h;break}m=m.return}h=m}it(t,i,d.children,o),i=i.child}return i;case 9:return d=i.type,a=i.pendingProps.children,ti(i,o),d=xt(d),a=a(d),i.flags|=1,it(t,i,a,o),i.child;case 14:return a=i.type,d=Bt(a,i.pendingProps),d=Bt(a.type,d),fp(t,i,a,d,o);case 15:return pp(t,i,i.type,i.pendingProps,o);case 17:return a=i.type,d=i.pendingProps,d=i.elementType===a?d:Bt(a,d),$o(t,i),i.tag=1,ht(a)?(t=!0,ko(i)):t=!1,ti(i,o),sp(i,a,d),Pu(i,a,d,o),Du(null,i,a,!0,t,o);case 19:return Sp(t,i,o);case 22:return mp(t,i,o)}throw Error(n(156,i.tag))};function Gp(t,i){return Ch(t,i)}function a0(t,i,o,a){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lt(t,i,o,a){return new a0(t,i,o,a)}function Zu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function u0(t){if(typeof t=="function")return Zu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Nt)return 11;if(t===Jt)return 14}return 2}function Gn(t,i){var o=t.alternate;return o===null?(o=Lt(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function tl(t,i,o,a,d,h){var m=2;if(a=t,typeof t=="function")Zu(t)&&(m=1);else if(typeof t=="string")m=5;else e:switch(t){case Q:return Er(o.children,d,h,i);case se:m=8,d|=8;break;case Be:return t=Lt(12,o,i,d|2),t.elementType=Be,t.lanes=h,t;case wt:return t=Lt(13,o,i,d),t.elementType=wt,t.lanes=h,t;case jt:return t=Lt(19,o,i,d),t.elementType=jt,t.lanes=h,t;case xe:return nl(o,d,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case rt:m=10;break e;case Xt:m=9;break e;case Nt:m=11;break e;case Jt:m=14;break e;case ct:m=16,a=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Lt(m,o,i,d),i.elementType=t,i.type=a,i.lanes=h,i}function Er(t,i,o,a){return t=Lt(7,t,a,i),t.lanes=o,t}function nl(t,i,o,a){return t=Lt(22,t,a,i),t.elementType=xe,t.lanes=o,t.stateNode={isHidden:!1},t}function ec(t,i,o){return t=Lt(6,t,null,i),t.lanes=o,t}function tc(t,i,o){return i=Lt(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function c0(t,i,o,a,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Na(0),this.expirationTimes=Na(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Na(0),this.identifierPrefix=a,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function nc(t,i,o,a,d,h,m,y,E){return t=new c0(t,i,o,y,E),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Lt(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:a,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},mu(h),t}function d0(t,i,o){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Z,key:a==null?null:""+a,children:t,containerInfo:i,implementation:o}}function Kp(t){if(!t)return Fn;t=t._reactInternals;e:{if(ur(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(ht(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(ht(o))return Ef(t,o,i)}return i}function qp(t,i,o,a,d,h,m,y,E){return t=nc(o,a,!0,t,d,h,m,y,E),t.context=Kp(null),o=t.current,a=st(),d=$n(o),h=mn(a,d),h.callback=i??null,zn(o,h,d),t.current.lanes=d,ji(t,d,a),mt(t,a),t}function rl(t,i,o,a){var d=i.current,h=st(),m=$n(d);return o=Kp(o),i.context===null?i.context=o:i.pendingContext=o,i=mn(h,m),i.payload={element:t},a=a===void 0?null:a,a!==null&&(i.callback=a),t=zn(d,i,m),t!==null&&(Gt(t,d,m,h),Lo(t,d,m)),m}function il(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Yp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function rc(t,i){Yp(t,i),(t=t.alternate)&&Yp(t,i)}function h0(){return null}var Qp=typeof reportError=="function"?reportError:function(t){console.error(t)};function ic(t){this._internalRoot=t}sl.prototype.render=ic.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));rl(t,i,null,null)},sl.prototype.unmount=ic.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;yr(function(){rl(null,t,null,null)}),i[cn]=null}};function sl(t){this._internalRoot=t}sl.prototype.unstable_scheduleHydration=function(t){if(t){var i=Oh();t={blockedOn:null,target:t,priority:i};for(var o=0;o<On.length&&i!==0&&i<On[o].priority;o++);On.splice(o,0,t),o===0&&Mh(t)}};function sc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ol(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Xp(){}function f0(t,i,o,a,d){if(d){if(typeof a=="function"){var h=a;a=function(){var k=il(m);h.call(k)}}var m=qp(i,a,t,0,null,!1,!1,"",Xp);return t._reactRootContainer=m,t[cn]=m.current,Zi(t.nodeType===8?t.parentNode:t),yr(),m}for(;d=t.lastChild;)t.removeChild(d);if(typeof a=="function"){var y=a;a=function(){var k=il(E);y.call(k)}}var E=nc(t,0,!1,null,null,!1,!1,"",Xp);return t._reactRootContainer=E,t[cn]=E.current,Zi(t.nodeType===8?t.parentNode:t),yr(function(){rl(i,E,o,a)}),E}function ll(t,i,o,a,d){var h=o._reactRootContainer;if(h){var m=h;if(typeof d=="function"){var y=d;d=function(){var E=il(m);y.call(E)}}rl(i,m,t,d)}else m=f0(o,i,t,d,a);return il(m)}Ah=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Ui(i.pendingLanes);o!==0&&(Pa(i,o|1),mt(i,Me()),!(oe&6)&&(oi=Me()+500,Un()))}break;case 13:yr(function(){var a=pn(t,1);if(a!==null){var d=st();Gt(a,t,1,d)}}),rc(t,1)}},Aa=function(t){if(t.tag===13){var i=pn(t,134217728);if(i!==null){var o=st();Gt(i,t,134217728,o)}rc(t,134217728)}},xh=function(t){if(t.tag===13){var i=$n(t),o=pn(t,i);if(o!==null){var a=st();Gt(o,t,i,a)}rc(t,i)}},Oh=function(){return fe},Dh=function(t,i){var o=fe;try{return fe=t,i()}finally{fe=o}},Sa=function(t,i,o){switch(i){case"input":if(pa(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var a=o[i];if(a!==t&&a.form===t.form){var d=Co(a);if(!d)throw Error(n(90));rh(a),pa(a,d)}}}break;case"textarea":ah(t,o);break;case"select":i=o.value,i!=null&&Fr(t,!!o.multiple,i,!1)}},_h=Qu,yh=yr;var p0={usingClientEntryPoint:!1,Events:[ns,Kr,Co,mh,gh,Qu]},gs={findFiberByHostInstance:cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},m0={bundleType:gs.bundleType,version:gs.version,rendererPackageName:gs.rendererPackageName,rendererConfig:gs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:le.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Sh(t),t===null?null:t.stateNode},findFiberByHostInstance:gs.findFiberByHostInstance||h0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!al.isDisabled&&al.supportsFiber)try{io=al.inject(m0),Zt=al}catch{}}return gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=p0,gt.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sc(i))throw Error(n(200));return d0(t,i,null,o)},gt.createRoot=function(t,i){if(!sc(t))throw Error(n(299));var o=!1,a="",d=Qp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(a=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=nc(t,1,!1,null,null,o,!1,a,d),t[cn]=i.current,Zi(t.nodeType===8?t.parentNode:t),new ic(i)},gt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Sh(i),t=t===null?null:t.stateNode,t},gt.flushSync=function(t){return yr(t)},gt.hydrate=function(t,i,o){if(!ol(i))throw Error(n(200));return ll(null,t,i,!0,o)},gt.hydrateRoot=function(t,i,o){if(!sc(t))throw Error(n(405));var a=o!=null&&o.hydratedSources||null,d=!1,h="",m=Qp;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(m=o.onRecoverableError)),i=qp(i,null,t,1,o??null,d,!1,h,m),t[cn]=i.current,Zi(t),a)for(t=0;t<a.length;t++)o=a[t],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new sl(i)},gt.render=function(t,i,o){if(!ol(i))throw Error(n(200));return ll(null,t,i,!1,o)},gt.unmountComponentAtNode=function(t){if(!ol(t))throw Error(n(40));return t._reactRootContainer?(yr(function(){ll(null,null,t,!1,function(){t._reactRootContainer=null,t[cn]=null})}),!0):!1},gt.unstable_batchedUpdates=Qu,gt.unstable_renderSubtreeIntoContainer=function(t,i,o,a){if(!ol(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return ll(t,i,o,!1,a)},gt.version="18.3.1-next-f1338f8080-20240426",gt}var om;function I0(){if(om)return ac.exports;om=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),ac.exports=S0(),ac.exports}var lm;function C0(){if(lm)return ul;lm=1;var r=I0();return ul.createRoot=r.createRoot,ul.hydrateRoot=r.hydrateRoot,ul}var T0=C0();const ye={GRASS:"grass",WATER:"water",ROCK:"rock",EMPTY:"empty",FOOD:"food",NULL:"null",GAME:"game",WOOD:"wood",SELL_APPLE:"sellApple",FREE_WAY:"freeway",HOME:"home"},k0={[ye.GRASS]:.4,[ye.WATER]:.2,[ye.EMPTY]:.1,[ye.ROCK]:.14,[ye.FOOD]:.15,[ye.HOME]:.01},R0=["moveU","moveR","moveD","moveL","dragon"],N0="_tile_1en58_1",P0="_grass_1en58_14",A0="_water_1en58_22",x0="_rock_1en58_29",O0="_empty_1en58_36",D0="_food_1en58_43",L0="_game_1en58_50",M0="_home_1en58_51",b0="_wood_1en58_58",F0="_sellApple_1en58_65",U0="_freeway_1en58_72",am={tile:N0,grass:P0,water:A0,rock:x0,empty:O0,food:D0,game:L0,home:M0,wood:b0,sellApple:F0,freeway:U0};var dc={exports:{}},hc,um;function j0(){if(um)return hc;um=1;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return hc=r,hc}var fc,cm;function z0(){if(cm)return fc;cm=1;var r=j0();function e(){}function n(){}return n.resetWarningCache=e,fc=function(){function s(c,f,p,g,v,_){if(_!==r){var w=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw w.name="Invariant Violation",w}}s.isRequired=s;function l(){return s}var u={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:l,element:s,elementType:s,instanceOf:l,node:s,objectOf:l,oneOf:l,oneOfType:l,shape:l,exact:l,checkPropTypes:n,resetWarningCache:e};return u.PropTypes=u,u},fc}var dm;function W0(){return dm||(dm=1,dc.exports=z0()()),dc.exports}var V0=W0();const bt=Mg(V0);function Bl(r){const{isActive:e=!1,type:n="empty",site:s="home"}=r,l={[ye.GRASS]:s==="home"?"":"☘️",[ye.WATER]:"",[ye.ROCK]:"⛰️",[ye.EMPTY]:"",[ye.FOOD]:"🍎",[ye.GAME]:"🌳",[ye.SELL_APPLE]:"💰",[ye.FREE_WAY]:"🚦",[ye.HOME]:"🏠"};return j.jsx("div",{className:`${am.tile} ${am[n]}`,children:l[n]})}Bl.propTypes={isActive:bt.bool,type:bt.string,site:bt.string};const B0="_board_16uod_1",$0="_row_16uod_8",H0="_boardContainer_16uod_13",di={board:B0,row:$0,boardContainer:H0};var hm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L=function(r,e){if(!r)throw Ti(e)},Ti=function(r){return new Error("Firebase Database ("+bg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+r)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):(l&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},G0=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const l=r[n++];if(l<128)e[s++]=String.fromCharCode(l);else if(l>191&&l<224){const u=r[n++];e[s++]=String.fromCharCode((l&31)<<6|u&63)}else if(l>239&&l<365){const u=r[n++],c=r[n++],f=r[n++],p=((l&7)<<18|(u&63)<<12|(c&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const u=r[n++],c=r[n++];e[s++]=String.fromCharCode((l&15)<<12|(u&63)<<6|c&63)}}return e.join("")},id={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<r.length;l+=3){const u=r[l],c=l+1<r.length,f=c?r[l+1]:0,p=l+2<r.length,g=p?r[l+2]:0,v=u>>2,_=(u&3)<<4|f>>4;let w=(f&15)<<2|g>>6,R=g&63;p||(R=64,c||(w=64)),s.push(n[v],n[_],n[w],n[R])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Fg(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):G0(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<r.length;){const u=n[r.charAt(l++)],f=l<r.length?n[r.charAt(l)]:0;++l;const g=l<r.length?n[r.charAt(l)]:64;++l;const _=l<r.length?n[r.charAt(l)]:64;if(++l,u==null||f==null||g==null||_==null)throw new K0;const w=u<<2|f>>4;if(s.push(w),g!==64){const R=f<<4&240|g>>2;if(s.push(R),_!==64){const N=g<<6&192|_;s.push(N)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class K0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ug=function(r){const e=Fg(r);return id.encodeByteArray(e,!0)},yl=function(r){return Ug(r).replace(/\./g,"")},vl=function(r){try{return id.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q0(r){return jg(void 0,r)}function jg(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Y0(n)||(r[n]=jg(r[n],e[n]));return r}function Y0(r){return r!=="__proto__"}/**
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
 */function Q0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const X0=()=>Q0().__FIREBASE_DEFAULTS__,J0=()=>{if(typeof process>"u"||typeof hm>"u")return;const r=hm.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Z0=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&vl(r[1]);return e&&JSON.parse(e)},sd=()=>{try{return X0()||J0()||Z0()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},zg=r=>{var e,n;return(n=(e=sd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[r]},eE=r=>{const e=zg(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Wg=()=>{var r;return(r=sd())===null||r===void 0?void 0:r.config},Vg=r=>{var e;return(e=sd())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function tE(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",l=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},r);return[yl(JSON.stringify(n)),yl(JSON.stringify(c)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function od(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function nE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Bg(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function $g(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rE(){const r=ut();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Hg(){return bg.NODE_ADMIN===!0}function Gg(){try{return typeof indexedDB=="object"}catch{return!1}}function Kg(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},l.onupgradeneeded=()=>{n=!1},l.onerror=()=>{var u;e(((u=l.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){e(n)}})}function iE(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE="FirebaseError";class an extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=sE,Object.setPrototypeOf(this,an.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Dr.prototype.create)}}class Dr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},l=`${this.service}/${e}`,u=this.errors[e],c=u?oE(u,s):"Error",f=`${this.serviceName}: ${c} (${l}).`;return new an(l,f,s)}}function oE(r,e){return r.replace(lE,(n,s)=>{const l=e[s];return l!=null?String(l):`<${s}?>`})}const lE=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ps(r){return JSON.parse(r)}function Ve(r){return JSON.stringify(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg=function(r){let e={},n={},s={},l="";try{const u=r.split(".");e=Ps(vl(u[0])||""),n=Ps(vl(u[1])||""),l=u[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:l}},aE=function(r){const e=qg(r),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},uE=function(r){const e=qg(r).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function _i(r,e){if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}function xc(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function wl(r,e,n){const s={};for(const l in r)Object.prototype.hasOwnProperty.call(r,l)&&(s[l]=e.call(n,r[l],l,r));return s}function As(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const l of n){if(!s.includes(l))return!1;const u=r[l],c=e[l];if(fm(u)&&fm(c)){if(!As(u,c))return!1}else if(u!==c)return!1}for(const l of s)if(!n.includes(l))return!1;return!0}function fm(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(r){const e=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(l=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(l))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let _=0;_<16;_++)s[_]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let _=0;_<16;_++)s[_]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let _=16;_<80;_++){const w=s[_-3]^s[_-8]^s[_-14]^s[_-16];s[_]=(w<<1|w>>>31)&4294967295}let l=this.chain_[0],u=this.chain_[1],c=this.chain_[2],f=this.chain_[3],p=this.chain_[4],g,v;for(let _=0;_<80;_++){_<40?_<20?(g=f^u&(c^f),v=1518500249):(g=u^c^f,v=1859775393):_<60?(g=u&c|f&(u|c),v=2400959708):(g=u^c^f,v=3395469782);const w=(l<<5|l>>>27)+g+p+v+s[_]&4294967295;p=f,f=c,c=(u<<30|u>>>2)&4294967295,u=l,l=w}this.chain_[0]=this.chain_[0]+l&4294967295,this.chain_[1]=this.chain_[1]+u&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let l=0;const u=this.buf_;let c=this.inbuf_;for(;l<n;){if(c===0)for(;l<=s;)this.compress_(e,l),l+=this.blockSize;if(typeof e=="string"){for(;l<n;)if(u[c]=e.charCodeAt(l),++c,++l,c===this.blockSize){this.compress_(u),c=0;break}}else for(;l<n;)if(u[c]=e[l],++c,++l,c===this.blockSize){this.compress_(u),c=0;break}}this.inbuf_=c,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let l=this.blockSize-1;l>=56;l--)this.buf_[l]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let l=0;l<5;l++)for(let u=24;u>=0;u-=8)e[s]=this.chain_[l]>>u&255,++s;return e}}function dE(r,e){const n=new hE(r,e);return n.subscribe.bind(n)}class hE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let l;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");fE(e,["next","error","complete"])?l=e:l={next:e,error:n,complete:s},l.next===void 0&&(l.next=pc),l.error===void 0&&(l.error=pc),l.complete===void 0&&(l.complete=pc);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fE(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function pc(){}function $l(r,e){return`${r} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pE=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);if(l>=55296&&l<=56319){const u=l-55296;s++,L(s<r.length,"Surrogate pair missing trail surrogate.");const c=r.charCodeAt(s)-56320;l=65536+(u<<10)+c}l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):l<65536?(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},Hl=function(r){let e=0;for(let n=0;n<r.length;n++){const s=r.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const mE=1e3,gE=2,_E=4*60*60*1e3,yE=.5;function pm(r,e=mE,n=gE){const s=e*Math.pow(n,r),l=Math.round(yE*s*(Math.random()-.5)*2);return Math.min(_E,s+l)}/**
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
 */function vt(r){return r&&r._delegate?r._delegate:r}class Qt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ir="[DEFAULT]";/**
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
 */class vE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ws;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:n});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),l=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(l)return null;throw u}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(EE(e))try{this.getOrInitializeService({instanceIdentifier:Ir})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:l});s.resolve(u)}catch{}}}}clearInstance(e=Ir){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ir){return this.instances.has(e)}getOptions(e=Ir){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,c]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(u);s===f&&c.resolve(l)}return l}onInit(e,n){var s;const l=this.normalizeInstanceIdentifier(n),u=(s=this.onInitCallbacks.get(l))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(l,u);const c=this.instances.get(l);return c&&e(c,l),()=>{u.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const l of s)try{l(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:wE(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ir){return this.component?this.component.multipleInstances?e:Ir:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wE(r){return r===Ir?void 0:r}function EE(r){return r.instantiationMode==="EAGER"}/**
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
 */class SE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new vE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(ge||(ge={}));const IE={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},CE=ge.INFO,TE={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},kE=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),l=TE[e];if(l)console[l](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gl{constructor(e){this.name=e,this._logLevel=CE,this._logHandler=kE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?IE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const RE=(r,e)=>e.some(n=>r instanceof n);let mm,gm;function NE(){return mm||(mm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function PE(){return gm||(gm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yg=new WeakMap,Oc=new WeakMap,Qg=new WeakMap,mc=new WeakMap,ld=new WeakMap;function AE(r){const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("success",u),r.removeEventListener("error",c)},u=()=>{n(er(r.result)),l()},c=()=>{s(r.error),l()};r.addEventListener("success",u),r.addEventListener("error",c)});return e.then(n=>{n instanceof IDBCursor&&Yg.set(n,r)}).catch(()=>{}),ld.set(e,r),e}function xE(r){if(Oc.has(r))return;const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",c),r.removeEventListener("abort",c)},u=()=>{n(),l()},c=()=>{s(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",u),r.addEventListener("error",c),r.addEventListener("abort",c)});Oc.set(r,e)}let Dc={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return Oc.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Qg.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return er(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function OE(r){Dc=r(Dc)}function DE(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(gc(this),e,...n);return Qg.set(s,e.sort?e.sort():[e]),er(s)}:PE().includes(r)?function(...e){return r.apply(gc(this),e),er(Yg.get(this))}:function(...e){return er(r.apply(gc(this),e))}}function LE(r){return typeof r=="function"?DE(r):(r instanceof IDBTransaction&&xE(r),RE(r,NE())?new Proxy(r,Dc):r)}function er(r){if(r instanceof IDBRequest)return AE(r);if(mc.has(r))return mc.get(r);const e=LE(r);return e!==r&&(mc.set(r,e),ld.set(e,r)),e}const gc=r=>ld.get(r);function Xg(r,e,{blocked:n,upgrade:s,blocking:l,terminated:u}={}){const c=indexedDB.open(r,e),f=er(c);return s&&c.addEventListener("upgradeneeded",p=>{s(er(c.result),p.oldVersion,p.newVersion,er(c.transaction),p)}),n&&c.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),f.then(p=>{u&&p.addEventListener("close",()=>u()),l&&p.addEventListener("versionchange",g=>l(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const ME=["get","getKey","getAll","getAllKeys","count"],bE=["put","add","delete","clear"],_c=new Map;function _m(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(_c.get(e))return _c.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,l=bE.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(l||ME.includes(n)))return;const u=async function(c,...f){const p=this.transaction(c,l?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(f.shift())),(await Promise.all([g[n](...f),l&&p.done]))[0]};return _c.set(e,u),u}OE(r=>({...r,get:(e,n,s)=>_m(e,n)||r.get(e,n,s),has:(e,n)=>!!_m(e,n)||r.has(e,n)}));/**
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
 */class FE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(UE(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function UE(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Lc="@firebase/app",ym="0.10.17";/**
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
 */const Cn=new Gl("@firebase/app"),jE="@firebase/app-compat",zE="@firebase/analytics-compat",WE="@firebase/analytics",VE="@firebase/app-check-compat",BE="@firebase/app-check",$E="@firebase/auth",HE="@firebase/auth-compat",GE="@firebase/database",KE="@firebase/data-connect",qE="@firebase/database-compat",YE="@firebase/functions",QE="@firebase/functions-compat",XE="@firebase/installations",JE="@firebase/installations-compat",ZE="@firebase/messaging",eS="@firebase/messaging-compat",tS="@firebase/performance",nS="@firebase/performance-compat",rS="@firebase/remote-config",iS="@firebase/remote-config-compat",sS="@firebase/storage",oS="@firebase/storage-compat",lS="@firebase/firestore",aS="@firebase/vertexai",uS="@firebase/firestore-compat",cS="firebase",dS="11.1.0";/**
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
 */const Mc="[DEFAULT]",hS={[Lc]:"fire-core",[jE]:"fire-core-compat",[WE]:"fire-analytics",[zE]:"fire-analytics-compat",[BE]:"fire-app-check",[VE]:"fire-app-check-compat",[$E]:"fire-auth",[HE]:"fire-auth-compat",[GE]:"fire-rtdb",[KE]:"fire-data-connect",[qE]:"fire-rtdb-compat",[YE]:"fire-fn",[QE]:"fire-fn-compat",[XE]:"fire-iid",[JE]:"fire-iid-compat",[ZE]:"fire-fcm",[eS]:"fire-fcm-compat",[tS]:"fire-perf",[nS]:"fire-perf-compat",[rS]:"fire-rc",[iS]:"fire-rc-compat",[sS]:"fire-gcs",[oS]:"fire-gcs-compat",[lS]:"fire-fst",[uS]:"fire-fst-compat",[aS]:"fire-vertex","fire-js":"fire-js",[cS]:"fire-js-all"};/**
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
 */const El=new Map,fS=new Map,bc=new Map;function vm(r,e){try{r.container.addComponent(e)}catch(n){Cn.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function ln(r){const e=r.name;if(bc.has(e))return Cn.debug(`There were multiple attempts to register component ${e}.`),!1;bc.set(e,r);for(const n of El.values())vm(n,r);for(const n of fS.values())vm(n,r);return!0}function Lr(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function yn(r){return r.settings!==void 0}/**
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
 */const pS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},tr=new Dr("app","Firebase",pS);/**
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
 */class mS{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Qt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw tr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ri=dS;function Jg(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Mc,automaticDataCollectionEnabled:!1},e),l=s.name;if(typeof l!="string"||!l)throw tr.create("bad-app-name",{appName:String(l)});if(n||(n=Wg()),!n)throw tr.create("no-options");const u=El.get(l);if(u){if(As(n,u.options)&&As(s,u.config))return u;throw tr.create("duplicate-app",{appName:l})}const c=new SE(l);for(const p of bc.values())c.addComponent(p);const f=new mS(n,s,c);return El.set(l,f),f}function ad(r=Mc){const e=El.get(r);if(!e&&r===Mc&&Wg())return Jg();if(!e)throw tr.create("no-app",{appName:r});return e}function Ft(r,e,n){var s;let l=(s=hS[r])!==null&&s!==void 0?s:r;n&&(l+=`-${n}`);const u=l.match(/\s|\//),c=e.match(/\s|\//);if(u||c){const f=[`Unable to register library "${l}" with version "${e}":`];u&&f.push(`library name "${l}" contains illegal characters (whitespace or "/")`),u&&c&&f.push("and"),c&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cn.warn(f.join(" "));return}ln(new Qt(`${l}-version`,()=>({library:l,version:e}),"VERSION"))}/**
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
 */const gS="firebase-heartbeat-database",_S=1,xs="firebase-heartbeat-store";let yc=null;function Zg(){return yc||(yc=Xg(gS,_S,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(xs)}catch(n){console.warn(n)}}}}).catch(r=>{throw tr.create("idb-open",{originalErrorMessage:r.message})})),yc}async function yS(r){try{const n=(await Zg()).transaction(xs),s=await n.objectStore(xs).get(e_(r));return await n.done,s}catch(e){if(e instanceof an)Cn.warn(e.message);else{const n=tr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Cn.warn(n.message)}}}async function wm(r,e){try{const s=(await Zg()).transaction(xs,"readwrite");await s.objectStore(xs).put(e,e_(r)),await s.done}catch(n){if(n instanceof an)Cn.warn(n.message);else{const s=tr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Cn.warn(s.message)}}}function e_(r){return`${r.name}!${r.options.appId}`}/**
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
 */const vS=1024,wS=30*24*60*60*1e3;class ES{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new IS(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Em();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(c=>c.date===u)?void 0:(this._heartbeatsCache.heartbeats.push({date:u,agent:l}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(c=>{const f=new Date(c.date).valueOf();return Date.now()-f<=wS}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Cn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Em(),{heartbeatsToSend:s,unsentEntries:l}=SS(this._heartbeatsCache.heartbeats),u=yl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return Cn.warn(n),""}}}function Em(){return new Date().toISOString().substring(0,10)}function SS(r,e=vS){const n=[];let s=r.slice();for(const l of r){const u=n.find(c=>c.agent===l.agent);if(u){if(u.dates.push(l.date),Sm(n)>e){u.dates.pop();break}}else if(n.push({agent:l.agent,dates:[l.date]}),Sm(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class IS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Gg()?Kg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await yS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return wm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return wm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...e.heartbeats]})}else return}}function Sm(r){return yl(JSON.stringify({version:2,heartbeats:r})).length}/**
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
 */function CS(r){ln(new Qt("platform-logger",e=>new FE(e),"PRIVATE")),ln(new Qt("heartbeat",e=>new ES(e),"PRIVATE")),Ft(Lc,ym,r),Ft(Lc,ym,"esm2017"),Ft("fire-js","")}CS("");var Im={};const Cm="@firebase/database",Tm="1.0.10";/**
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
 */let t_="";function TS(r){t_=r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ve(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ps(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return un(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_=function(r){try{if(typeof window<"u"&&typeof window[r]<"u"){const e=window[r];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new kS(e)}}catch{}return new RS},Tr=n_("localStorage"),NS=n_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=new Gl("@firebase/database"),PS=function(){let r=1;return function(){return r++}}(),r_=function(r){const e=pE(r),n=new cE;n.update(e);const s=n.digest();return id.encodeByteArray(s)},Vs=function(...r){let e="";for(let n=0;n<r.length;n++){const s=r[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Vs.apply(null,s):typeof s=="object"?e+=Ve(s):e+=s,e+=" "}return e};let Ss=null,km=!0;const AS=function(r,e){L(!e,"Can't turn on custom loggers persistently."),hi.logLevel=ge.VERBOSE,Ss=hi.log.bind(hi)},Xe=function(...r){if(km===!0&&(km=!1,Ss===null&&NS.get("logging_enabled")===!0&&AS()),Ss){const e=Vs.apply(null,r);Ss(e)}},Bs=function(r){return function(...e){Xe(r,...e)}},Fc=function(...r){const e="FIREBASE INTERNAL ERROR: "+Vs(...r);hi.error(e)},Tn=function(...r){const e=`FIREBASE FATAL ERROR: ${Vs(...r)}`;throw hi.error(e),new Error(e)},at=function(...r){const e="FIREBASE WARNING: "+Vs(...r);hi.warn(e)},xS=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&at("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ud=function(r){return typeof r=="number"&&(r!==r||r===Number.POSITIVE_INFINITY||r===Number.NEGATIVE_INFINITY)},OS=function(r){if(document.readyState==="complete")r();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,r())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},yi="[MIN_NAME]",Rr="[MAX_NAME]",Mr=function(r,e){if(r===e)return 0;if(r===yi||e===Rr)return-1;if(e===yi||r===Rr)return 1;{const n=Rm(r),s=Rm(e);return n!==null?s!==null?n-s===0?r.length-e.length:n-s:-1:s!==null?1:r<e?-1:1}},DS=function(r,e){return r===e?0:r<e?-1:1},ys=function(r,e){if(e&&r in e)return e[r];throw new Error("Missing required key ("+r+") in object: "+Ve(e))},cd=function(r){if(typeof r!="object"||r===null)return Ve(r);const e=[];for(const s in r)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ve(e[s]),n+=":",n+=cd(r[e[s]]);return n+="}",n},i_=function(r,e){const n=r.length;if(n<=e)return[r];const s=[];for(let l=0;l<n;l+=e)l+e>n?s.push(r.substring(l,n)):s.push(r.substring(l,l+e));return s};function Je(r,e){for(const n in r)r.hasOwnProperty(n)&&e(n,r[n])}const s_=function(r){L(!ud(r),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let l,u,c,f,p;r===0?(u=0,c=0,l=1/r===-1/0?1:0):(l=r<0,r=Math.abs(r),r>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(r)/Math.LN2),s),u=f+s,c=Math.round(r*Math.pow(2,n-f)-Math.pow(2,n))):(u=0,c=Math.round(r/Math.pow(2,1-s-n))));const g=[];for(p=n;p;p-=1)g.push(c%2?1:0),c=Math.floor(c/2);for(p=e;p;p-=1)g.push(u%2?1:0),u=Math.floor(u/2);g.push(l?1:0),g.reverse();const v=g.join("");let _="";for(p=0;p<64;p+=8){let w=parseInt(v.substr(p,8),2).toString(16);w.length===1&&(w="0"+w),_=_+w}return _.toLowerCase()},LS=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},MS=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function bS(r,e){let n="Unknown Error";r==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":r==="permission_denied"?n="Client doesn't have permission to access the desired data.":r==="unavailable"&&(n="The service is unavailable");const s=new Error(r+" at "+e._path.toString()+": "+n);return s.code=r.toUpperCase(),s}const FS=new RegExp("^-?(0*)\\d{1,10}$"),US=-2147483648,jS=2147483647,Rm=function(r){if(FS.test(r)){const e=Number(r);if(e>=US&&e<=jS)return e}return null},Ni=function(r){try{r()}catch(e){setTimeout(()=>{const n=e.stack||"";throw at("Exception was thrown by user callback.",n),e},Math.floor(0))}},zS=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Is=function(r,e){const n=setTimeout(r,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class WS{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){at(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(l=>this.auth_=l)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Xe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',at(e)}}class fl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}fl.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd="5",o_="v",l_="s",a_="r",u_="f",c_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,d_="ls",h_="p",Uc="ac",f_="websocket",p_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(e,n,s,l,u=!1,c="",f=!1,p=!1){this.secure=n,this.namespace=s,this.webSocketOnly=l,this.nodeAdmin=u,this.persistenceKey=c,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=p,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Tr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Tr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function BS(r){return r.host!==r.internalHost||r.isCustomHost()||r.includeNamespaceInQueryParams}function g_(r,e,n){L(typeof e=="string","typeof type must == string"),L(typeof n=="object","typeof params must == object");let s;if(e===f_)s=(r.secure?"wss://":"ws://")+r.internalHost+"/.ws?";else if(e===p_)s=(r.secure?"https://":"http://")+r.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);BS(r)&&(n.ns=r.namespace);const l=[];return Je(n,(u,c)=>{l.push(u+"="+c)}),s+l.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(){this.counters_={}}incrementCounter(e,n=1){un(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return q0(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc={},wc={};function hd(r){const e=r.toString();return vc[e]||(vc[e]=new $S),vc[e]}function HS(r,e){const n=r.toString();return wc[n]||(wc[n]=e()),wc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let l=0;l<s.length;++l)s[l]&&Ni(()=>{this.onMessage_(s[l])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm="start",KS="close",qS="pLPCommand",YS="pRTLPCB",__="id",y_="pw",v_="ser",QS="cb",XS="seg",JS="ts",ZS="d",eI="dframe",w_=1870,E_=30,tI=w_-E_,nI=25e3,rI=3e4;class ui{constructor(e,n,s,l,u,c,f){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.transportSessionId=c,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Bs(e),this.stats_=hd(n),this.urlFn=p=>(this.appCheckToken&&(p[Uc]=this.appCheckToken),g_(n,p_,p))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new GS(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(rI)),OS(()=>{if(this.isClosed_)return;this.scriptTagHolder=new fd((...u)=>{const[c,f,p,g,v]=u;if(this.incrementIncomingBytes_(u),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===Nm)this.id=f,this.password=p;else if(c===KS)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...u)=>{const[c,f]=u;this.incrementIncomingBytes_(u),this.myPacketOrderer.handleResponse(c,f)},()=>{this.onClosed_()},this.urlFn);const s={};s[Nm]="t",s[v_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[QS]=this.scriptTagHolder.uniqueCallbackIdentifier),s[o_]=dd,this.transportSessionId&&(s[l_]=this.transportSessionId),this.lastSessionId&&(s[d_]=this.lastSessionId),this.applicationId&&(s[h_]=this.applicationId),this.appCheckToken&&(s[Uc]=this.appCheckToken),typeof location<"u"&&location.hostname&&c_.test(location.hostname)&&(s[a_]=u_);const l=this.urlFn(s);this.log_("Connecting via long-poll to "+l),this.scriptTagHolder.addTag(l,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ui.forceAllow_=!0}static forceDisallow(){ui.forceDisallow_=!0}static isAvailable(){return ui.forceAllow_?!0:!ui.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!LS()&&!MS()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Ug(n),l=i_(s,tI);for(let u=0;u<l.length;u++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,l.length,l[u]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[eI]="t",s[__]=e,s[y_]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ve(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class fd{constructor(e,n,s,l){this.onDisconnect=s,this.urlFn=l,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=PS(),window[qS+this.uniqueCallbackIdentifier]=e,window[YS+this.uniqueCallbackIdentifier]=n,this.myIFrame=fd.createIFrame_();let u="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(u='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+u+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(f){Xe("frame writing exception"),f.stack&&Xe(f.stack),Xe(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Xe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[__]=this.myID,e[y_]=this.myPW,e[v_]=this.currentSerial;let n=this.urlFn(e),s="",l=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+E_+s.length<=w_;){const c=this.pendingSegs.shift();s=s+"&"+XS+l+"="+c.seg+"&"+JS+l+"="+c.ts+"&"+ZS+l+"="+c.d,l++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},l=setTimeout(s,Math.floor(nI)),u=()=>{clearTimeout(l),s()};this.addTag(e,u)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const l=s.readyState;(!l||l==="loaded"||l==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Xe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI=16384,sI=45e3;let Sl=null;typeof MozWebSocket<"u"?Sl=MozWebSocket:typeof WebSocket<"u"&&(Sl=WebSocket);class Kt{constructor(e,n,s,l,u,c,f){this.connId=e,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Bs(this.connId),this.stats_=hd(n),this.connURL=Kt.connectionURL_(n,c,f,l,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,l,u){const c={};return c[o_]=dd,typeof location<"u"&&location.hostname&&c_.test(location.hostname)&&(c[a_]=u_),n&&(c[l_]=n),s&&(c[d_]=s),l&&(c[Uc]=l),u&&(c[h_]=u),g_(e,f_,c)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Tr.set("previous_websocket_failure",!0);try{let s;Hg(),this.mySock=new Sl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_()}}start(){}static forceDisallow(){Kt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Sl!==null&&!Kt.forceDisallow_}static previouslyFailed(){return Tr.isInMemoryStorage||Tr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Tr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Ps(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(L(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=i_(n,iI);s.length>1&&this.sendString_(String(s.length));for(let l=0;l<s.length;l++)this.sendString_(s[l])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(sI))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Kt.responsesRequiredToBeHealthy=2;Kt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{static get ALL_TRANSPORTS(){return[ui,Kt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Kt&&Kt.isAvailable();let s=n&&!Kt.previouslyFailed();if(e.webSocketOnly&&(n||at("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Kt];else{const l=this.transports_=[];for(const u of Os.ALL_TRANSPORTS)u&&u.isAvailable()&&l.push(u);Os.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Os.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI=6e4,lI=5e3,aI=10*1024,uI=100*1024,Ec="t",Pm="d",cI="s",Am="r",dI="e",xm="o",Om="a",Dm="n",Lm="p",hI="h";class fI{constructor(e,n,s,l,u,c,f,p,g,v){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=l,this.authToken_=u,this.onMessage_=c,this.onReady_=f,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=v,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Bs("c:"+this.id+":"),this.transportManager_=new Os(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const l=e.healthyTimeout||0;l>0&&(this.healthyTimeout_=Is(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>uI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>aI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(l)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ec in e){const n=e[Ec];n===Om?this.upgradeIfSecondaryHealthy_():n===Am?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===xm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ys("t",e),s=ys("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Lm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Om,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Dm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ys("t",e),s=ys("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ys(Ec,e);if(Pm in e){const s=e[Pm];if(n===hI){const l=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(l.h=this.repoInfo_.host),this.onHandshake_(l)}else if(n===Dm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let l=0;l<this.pendingDataMessages.length;++l)this.onDataMessage_(this.pendingDataMessages[l]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===cI?this.onConnectionShutdown_(s):n===Am?this.onReset_(s):n===dI?Fc("Server Error: "+s):n===xm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Fc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,l=e.h;this.sessionId=e.s,this.repoInfo_.host=l,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),dd!==s&&at("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Is(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(oI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Is(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(lI))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Lm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Tr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{put(e,n,s,l){}merge(e,n,s,l){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Mm=32,bm=768;class ve{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let l=0;l<this.pieces_.length;l++)this.pieces_[l].length>0&&(this.pieces_[s]=this.pieces_[l],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function de(){return new ve("")}function te(r){return r.pieceNum_>=r.pieces_.length?null:r.pieces_[r.pieceNum_]}function sr(r){return r.pieces_.length-r.pieceNum_}function Ce(r){let e=r.pieceNum_;return e<r.pieces_.length&&e++,new ve(r.pieces_,e)}function pd(r){return r.pieceNum_<r.pieces_.length?r.pieces_[r.pieces_.length-1]:null}function pI(r){let e="";for(let n=r.pieceNum_;n<r.pieces_.length;n++)r.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(r.pieces_[n])));return e||"/"}function Ds(r,e=0){return r.pieces_.slice(r.pieceNum_+e)}function C_(r){if(r.pieceNum_>=r.pieces_.length)return null;const e=[];for(let n=r.pieceNum_;n<r.pieces_.length-1;n++)e.push(r.pieces_[n]);return new ve(e,0)}function De(r,e){const n=[];for(let s=r.pieceNum_;s<r.pieces_.length;s++)n.push(r.pieces_[s]);if(e instanceof ve)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let l=0;l<s.length;l++)s[l].length>0&&n.push(s[l])}return new ve(n,0)}function ie(r){return r.pieceNum_>=r.pieces_.length}function lt(r,e){const n=te(r),s=te(e);if(n===null)return e;if(n===s)return lt(Ce(r),Ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+r+")")}function mI(r,e){const n=Ds(r,0),s=Ds(e,0);for(let l=0;l<n.length&&l<s.length;l++){const u=Mr(n[l],s[l]);if(u!==0)return u}return n.length===s.length?0:n.length<s.length?-1:1}function md(r,e){if(sr(r)!==sr(e))return!1;for(let n=r.pieceNum_,s=e.pieceNum_;n<=r.pieces_.length;n++,s++)if(r.pieces_[n]!==e.pieces_[s])return!1;return!0}function Mt(r,e){let n=r.pieceNum_,s=e.pieceNum_;if(sr(r)>sr(e))return!1;for(;n<r.pieces_.length;){if(r.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class gI{constructor(e,n){this.errorPrefix_=n,this.parts_=Ds(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Hl(this.parts_[s]);T_(this)}}function _I(r,e){r.parts_.length>0&&(r.byteLength_+=1),r.parts_.push(e),r.byteLength_+=Hl(e),T_(r)}function yI(r){const e=r.parts_.pop();r.byteLength_-=Hl(e),r.parts_.length>0&&(r.byteLength_-=1)}function T_(r){if(r.byteLength_>bm)throw new Error(r.errorPrefix_+"has a key path longer than "+bm+" bytes ("+r.byteLength_+").");if(r.parts_.length>Mm)throw new Error(r.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Mm+") or object contains a cycle "+Cr(r))}function Cr(r){return r.parts_.length===0?"":"in property '"+r.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const vs=1e3,vI=60*5*1e3,Fm=30*1e3,wI=1.3,EI=3e4,SI="server_kill",Um=3;class In extends S_{constructor(e,n,s,l,u,c,f,p){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=l,this.onServerInfoUpdate_=u,this.authTokenProvider_=c,this.appCheckTokenProvider_=f,this.authOverride_=p,this.id=In.nextPersistentConnectionId_++,this.log_=Bs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=vs,this.maxReconnectDelay_=vI,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p&&!Hg())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");gd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Il.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const l=++this.requestNumber_,u={r:l,a:e,b:n};this.log_(Ve(u)),L(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(u),s&&(this.requestCBHash_[l]=s)}get(e){this.initConnection_();const n=new Ws,l={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const f=c.d;c.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(l),this.outstandingGetCount_++;const u=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(u),n.promise}listen(e,n,s,l){this.initConnection_();const u=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+u),this.listens.has(c)||this.listens.set(c,new Map),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),L(!this.listens.get(c).has(u),"listen() called twice for same path/queryId.");const f={onComplete:l,hashFn:n,query:e,tag:s};this.listens.get(c).set(u,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),l=n._queryIdentifier;this.log_("Listen on "+s+" for "+l);const u={p:s},c="q";e.tag&&(u.q=n._queryObject,u.t=e.tag),u.h=e.hashFn(),this.sendRequest(c,u,f=>{const p=f.d,g=f.s;In.warnOnListenWarnings_(p,n),(this.listens.get(s)&&this.listens.get(s).get(l))===e&&(this.log_("listen response",f),g!=="ok"&&this.removeListen_(s,l),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&un(e,"w")){const s=_i(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const l='".indexOn": "'+n._queryParams.getIndex().toString()+'"',u=n._path.toString();at(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${l} at ${u} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||uE(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Fm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=aE(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,l=>{const u=l.s,c=l.d||"error";this.authToken_===e&&(u==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(u,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),l=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+l),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,l)&&this.connected_&&this.sendUnlisten_(s,l,e._queryObject,n)}sendUnlisten_(e,n,s,l){this.log_("Unlisten on "+e+" for "+n);const u={p:e},c="n";l&&(u.q=s,u.t=l),this.sendRequest(c,u)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,l){const u={p:n,d:s};this.log_("onDisconnect "+e,u),this.sendRequest(e,u,c=>{l&&setTimeout(()=>{l(c.s,c.d)},Math.floor(0))})}put(e,n,s,l){this.putInternal("p",e,n,s,l)}merge(e,n,s,l){this.putInternal("m",e,n,s,l)}putInternal(e,n,s,l,u){this.initConnection_();const c={p:n,d:s};u!==void 0&&(c.h=u),this.outstandingPuts_.push({action:e,request:c,onComplete:l}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,l=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,u=>{this.log_(n+" response",u),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),l&&l(u.s,u.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const u=s.d;this.log_("reportStats","Error sending stats: "+u)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ve(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Fc("Unrecognized action received from server: "+Ve(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){L(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=vs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=vs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>EI&&(this.reconnectDelay_=vs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*wI)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),l=this.id+":"+In.nextConnectionId_++,u=this.lastSessionId;let c=!1,f=null;const p=function(){f?f.close():(c=!0,s())},g=function(_){L(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(_)};this.realtime_={close:p,sendRequest:g};const v=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[_,w]=await Promise.all([this.authTokenProvider_.getToken(v),this.appCheckTokenProvider_.getToken(v)]);c?Xe("getToken() completed but was canceled"):(Xe("getToken() completed. Creating connection."),this.authToken_=_&&_.accessToken,this.appCheckToken_=w&&w.token,f=new fI(l,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,R=>{at(R+" ("+this.repoInfo_.toString()+")"),this.interrupt(SI)},u))}catch(_){this.log_("Failed to get token: "+_),c||(this.repoInfo_.nodeAdmin&&at(_),p())}}}interrupt(e){Xe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Xe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],xc(this.interruptReasons_)&&(this.reconnectDelay_=vs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(u=>cd(u)).join("$"):s="default";const l=this.removeListen_(e,s);l&&l.onComplete&&l.onComplete("permission_denied")}removeListen_(e,n){const s=new ve(e).toString();let l;if(this.listens.has(s)){const u=this.listens.get(s);l=u.get(n),u.delete(n),u.size===0&&this.listens.delete(s)}else l=void 0;return l}onAuthRevoked_(e,n){Xe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Um&&(this.reconnectDelay_=Fm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Xe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Um&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+t_.replace(/\./g,"-")]=1,od()?e["framework.cordova"]=1:$g()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Il.getInstance().currentlyOnline();return xc(this.interruptReasons_)&&e}}In.nextPersistentConnectionId_=0;In.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Kl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ne(yi,e),l=new ne(yi,n);return this.compare(s,l)!==0}minPost(){return ne.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cl;class k_ extends Kl{static get __EMPTY_NODE(){return cl}static set __EMPTY_NODE(e){cl=e}compare(e,n){return Mr(e.name,n.name)}isDefinedOn(e){throw Ti("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ne.MIN}maxPost(){return new ne(Rr,cl)}makePost(e,n){return L(typeof e=="string","KeyIndex indexValue must always be a string."),new ne(e,cl)}toString(){return".key"}}const fi=new k_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,n,s,l,u=null){this.isReverse_=l,this.resultGenerator_=u,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=n?s(e.key,n):1,l&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class qe{constructor(e,n,s,l,u){this.key=e,this.value=n,this.color=s??qe.RED,this.left=l??_t.EMPTY_NODE,this.right=u??_t.EMPTY_NODE}copy(e,n,s,l,u){return new qe(e??this.key,n??this.value,s??this.color,l??this.left,u??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let l=this;const u=s(e,l.key);return u<0?l=l.copy(null,null,null,l.left.insert(e,n,s),null):u===0?l=l.copy(null,n,null,null,null):l=l.copy(null,null,null,null,l.right.insert(e,n,s)),l.fixUp_()}removeMin_(){if(this.left.isEmpty())return _t.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,l;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return _t.EMPTY_NODE;l=s.right.min_(),s=s.copy(l.key,l.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}qe.RED=!0;qe.BLACK=!1;class II{copy(e,n,s,l,u){return this}insert(e,n,s){return new qe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class _t{constructor(e,n=_t.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new _t(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,qe.BLACK,null,null))}remove(e){return new _t(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,qe.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,l=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return l?l.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(l=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new dl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new dl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new dl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new dl(this.root_,null,this.comparator_,!0,e)}}_t.EMPTY_NODE=new II;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CI(r,e){return Mr(r.name,e.name)}function _d(r,e){return Mr(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jc;function TI(r){jc=r}const R_=function(r){return typeof r=="number"?"number:"+s_(r):"string:"+r},N_=function(r){if(r.isLeafNode()){const e=r.val();L(typeof e=="string"||typeof e=="number"||typeof e=="object"&&un(e,".sv"),"Priority must be a string or number.")}else L(r===jc||r.isEmpty(),"priority of unexpected type.");L(r===jc||r.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jm;class Ke{static set __childrenNodeConstructor(e){jm=e}static get __childrenNodeConstructor(){return jm}constructor(e,n=Ke.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,L(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),N_(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ke(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ke.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ie(e)?this:te(e)===".priority"?this.priorityNode_:Ke.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ke.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=te(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(L(s!==".priority"||sr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ke.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ce(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+R_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=s_(this.value_):e+=this.value_,this.lazyHash_=r_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ke.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ke.__childrenNodeConstructor?-1:(L(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,l=Ke.VALUE_TYPE_ORDER.indexOf(n),u=Ke.VALUE_TYPE_ORDER.indexOf(s);return L(l>=0,"Unknown leaf type: "+n),L(u>=0,"Unknown leaf type: "+s),l===u?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:u-l}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ke.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let P_,A_;function kI(r){P_=r}function RI(r){A_=r}class NI extends Kl{compare(e,n){const s=e.node.getPriority(),l=n.node.getPriority(),u=s.compareTo(l);return u===0?Mr(e.name,n.name):u}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ne.MIN}maxPost(){return new ne(Rr,new Ke("[PRIORITY-POST]",A_))}makePost(e,n){const s=P_(e);return new ne(n,new Ke("[PRIORITY-POST]",s))}toString(){return".priority"}}const Le=new NI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI=Math.log(2);class AI{constructor(e){const n=u=>parseInt(Math.log(u)/PI,10),s=u=>parseInt(Array(u+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const l=s(this.count);this.bits_=e+1&l}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Cl=function(r,e,n,s){r.sort(e);const l=function(p,g){const v=g-p;let _,w;if(v===0)return null;if(v===1)return _=r[p],w=n?n(_):_,new qe(w,_.node,qe.BLACK,null,null);{const R=parseInt(v/2,10)+p,N=l(p,R),M=l(R+1,g);return _=r[R],w=n?n(_):_,new qe(w,_.node,qe.BLACK,N,M)}},u=function(p){let g=null,v=null,_=r.length;const w=function(N,M){const B=_-N,pe=_;_-=N;const we=l(B+1,pe),me=r[B],le=n?n(me):me;R(new qe(le,me.node,M,null,we))},R=function(N){g?(g.left=N,g=N):(v=N,g=N)};for(let N=0;N<p.count;++N){const M=p.nextBitIsOne(),B=Math.pow(2,p.count-(N+1));M?w(B,qe.BLACK):(w(B,qe.BLACK),w(B,qe.RED))}return v},c=new AI(r.length),f=u(c);return new _t(s||e,f)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sc;const ai={};class vn{static get Default(){return L(ai&&Le,"ChildrenNode.ts has not been loaded"),Sc=Sc||new vn({".priority":ai},{".priority":Le}),Sc}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=_i(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof _t?n:null}hasIndex(e){return un(this.indexSet_,e.toString())}addIndex(e,n){L(e!==fi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let l=!1;const u=n.getIterator(ne.Wrap);let c=u.getNext();for(;c;)l=l||e.isDefinedOn(c.node),s.push(c),c=u.getNext();let f;l?f=Cl(s,e.getCompare()):f=ai;const p=e.toString(),g=Object.assign({},this.indexSet_);g[p]=e;const v=Object.assign({},this.indexes_);return v[p]=f,new vn(v,g)}addToIndexes(e,n){const s=wl(this.indexes_,(l,u)=>{const c=_i(this.indexSet_,u);if(L(c,"Missing index implementation for "+u),l===ai)if(c.isDefinedOn(e.node)){const f=[],p=n.getIterator(ne.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&f.push(g),g=p.getNext();return f.push(e),Cl(f,c.getCompare())}else return ai;else{const f=n.get(e.name);let p=l;return f&&(p=p.remove(new ne(e.name,f))),p.insert(e,e.node)}});return new vn(s,this.indexSet_)}removeFromIndexes(e,n){const s=wl(this.indexes_,l=>{if(l===ai)return l;{const u=n.get(e.name);return u?l.remove(new ne(e.name,u)):l}});return new vn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ws;class q{static get EMPTY_NODE(){return ws||(ws=new q(new _t(_d),null,vn.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&N_(this.priorityNode_),this.children_.isEmpty()&&L(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ws}updatePriority(e){return this.children_.isEmpty()?this:new q(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ws:n}}getChild(e){const n=te(e);return n===null?this:this.getImmediateChild(n).getChild(Ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(L(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ne(e,n);let l,u;n.isEmpty()?(l=this.children_.remove(e),u=this.indexMap_.removeFromIndexes(s,this.children_)):(l=this.children_.insert(e,n),u=this.indexMap_.addToIndexes(s,this.children_));const c=l.isEmpty()?ws:this.priorityNode_;return new q(l,c,u)}}updateChild(e,n){const s=te(e);if(s===null)return n;{L(te(e)!==".priority"||sr(e)===1,".priority must be the last token in a path");const l=this.getImmediateChild(s).updateChild(Ce(e),n);return this.updateImmediateChild(s,l)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,l=0,u=!0;if(this.forEachChild(Le,(c,f)=>{n[c]=f.val(e),s++,u&&q.INTEGER_REGEXP_.test(c)?l=Math.max(l,Number(c)):u=!1}),!e&&u&&l<2*s){const c=[];for(const f in n)c[f]=n[f];return c}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+R_(this.getPriority().val())+":"),this.forEachChild(Le,(n,s)=>{const l=s.hash();l!==""&&(e+=":"+n+":"+l)}),this.lazyHash_=e===""?"":r_(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const l=this.resolveIndex_(s);if(l){const u=l.getPredecessorKey(new ne(e,n));return u?u.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ne(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ne(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(l=>n(l.name,l.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,l=>l);{const l=this.children_.getIteratorFrom(e.name,ne.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)<0;)l.getNext(),u=l.peek();return l}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,l=>l);{const l=this.children_.getReverseIteratorFrom(e.name,ne.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)>0;)l.getNext(),u=l.peek();return l}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===$s?-1:0}withIndex(e){if(e===fi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new q(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===fi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Le),l=n.getIterator(Le);let u=s.getNext(),c=l.getNext();for(;u&&c;){if(u.name!==c.name||!u.node.equals(c.node))return!1;u=s.getNext(),c=l.getNext()}return u===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===fi?null:this.indexMap_.get(e.toString())}}q.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class xI extends q{constructor(){super(new _t(_d),q.EMPTY_NODE,vn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return q.EMPTY_NODE}isEmpty(){return!1}}const $s=new xI;Object.defineProperties(ne,{MIN:{value:new ne(yi,q.EMPTY_NODE)},MAX:{value:new ne(Rr,$s)}});k_.__EMPTY_NODE=q.EMPTY_NODE;Ke.__childrenNodeConstructor=q;TI($s);RI($s);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI=!0;function We(r,e=null){if(r===null)return q.EMPTY_NODE;if(typeof r=="object"&&".priority"in r&&(e=r[".priority"]),L(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof r=="object"&&".value"in r&&r[".value"]!==null&&(r=r[".value"]),typeof r!="object"||".sv"in r){const n=r;return new Ke(n,We(e))}if(!(r instanceof Array)&&OI){const n=[];let s=!1;if(Je(r,(c,f)=>{if(c.substring(0,1)!=="."){const p=We(f);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),n.push(new ne(c,p)))}}),n.length===0)return q.EMPTY_NODE;const u=Cl(n,CI,c=>c.name,_d);if(s){const c=Cl(n,Le.getCompare());return new q(u,We(e),new vn({".priority":c},{".priority":Le}))}else return new q(u,We(e),vn.Default)}else{let n=q.EMPTY_NODE;return Je(r,(s,l)=>{if(un(r,s)&&s.substring(0,1)!=="."){const u=We(l);(u.isLeafNode()||!u.isEmpty())&&(n=n.updateImmediateChild(s,u))}}),n.updatePriority(We(e))}}kI(We);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI extends Kl{constructor(e){super(),this.indexPath_=e,L(!ie(e)&&te(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),l=this.extractChild(n.node),u=s.compareTo(l);return u===0?Mr(e.name,n.name):u}makePost(e,n){const s=We(e),l=q.EMPTY_NODE.updateChild(this.indexPath_,s);return new ne(n,l)}maxPost(){const e=q.EMPTY_NODE.updateChild(this.indexPath_,$s);return new ne(Rr,e)}toString(){return Ds(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI extends Kl{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Mr(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ne.MIN}maxPost(){return ne.MAX}makePost(e,n){const s=We(e);return new ne(n,s)}toString(){return".value"}}const MI=new LI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(r){return{type:"value",snapshotNode:r}}function vi(r,e){return{type:"child_added",snapshotNode:e,childName:r}}function Ls(r,e){return{type:"child_removed",snapshotNode:e,childName:r}}function Ms(r,e,n){return{type:"child_changed",snapshotNode:e,childName:r,oldSnap:n}}function bI(r,e){return{type:"child_moved",snapshotNode:e,childName:r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e){this.index_=e}updateChild(e,n,s,l,u,c){L(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(n);return f.getChild(l).equals(s.getChild(l))&&f.isEmpty()===s.isEmpty()||(c!=null&&(s.isEmpty()?e.hasChild(n)?c.trackChildChange(Ls(n,f)):L(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?c.trackChildChange(vi(n,s)):c.trackChildChange(Ms(n,s,f))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Le,(l,u)=>{n.hasChild(l)||s.trackChildChange(Ls(l,u))}),n.isLeafNode()||n.forEachChild(Le,(l,u)=>{if(e.hasChild(l)){const c=e.getImmediateChild(l);c.equals(u)||s.trackChildChange(Ms(l,u,c))}else s.trackChildChange(vi(l,u))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?q.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e){this.indexedFilter_=new yd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=bs.getStartPost_(e),this.endPost_=bs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,l,u,c){return this.matches(new ne(n,s))||(s=q.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,l,u,c)}updateFullNode(e,n,s){n.isLeafNode()&&(n=q.EMPTY_NODE);let l=n.withIndex(this.index_);l=l.updatePriority(q.EMPTY_NODE);const u=this;return n.forEachChild(Le,(c,f)=>{u.matches(new ne(c,f))||(l=l.updateImmediateChild(c,q.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new bs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,l,u,c){return this.rangedFilter_.matches(new ne(n,s))||(s=q.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,l,u,c):this.fullLimitUpdateChild_(e,n,s,u,c)}updateFullNode(e,n,s){let l;if(n.isLeafNode()||n.isEmpty())l=q.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){l=q.EMPTY_NODE.withIndex(this.index_);let u;this.reverse_?u=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):u=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let c=0;for(;u.hasNext()&&c<this.limit_;){const f=u.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))l=l.updateImmediateChild(f.name,f.node),c++;else break;else continue}}else{l=n.withIndex(this.index_),l=l.updatePriority(q.EMPTY_NODE);let u;this.reverse_?u=l.getReverseIterator(this.index_):u=l.getIterator(this.index_);let c=0;for(;u.hasNext();){const f=u.getNext();c<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?c++:l=l.updateImmediateChild(f.name,q.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,l,u){let c;if(this.reverse_){const _=this.index_.getCompare();c=(w,R)=>_(R,w)}else c=this.index_.getCompare();const f=e;L(f.numChildren()===this.limit_,"");const p=new ne(n,s),g=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),v=this.rangedFilter_.matches(p);if(f.hasChild(n)){const _=f.getImmediateChild(n);let w=l.getChildAfterChild(this.index_,g,this.reverse_);for(;w!=null&&(w.name===n||f.hasChild(w.name));)w=l.getChildAfterChild(this.index_,w,this.reverse_);const R=w==null?1:c(w,p);if(v&&!s.isEmpty()&&R>=0)return u!=null&&u.trackChildChange(Ms(n,s,_)),f.updateImmediateChild(n,s);{u!=null&&u.trackChildChange(Ls(n,_));const M=f.updateImmediateChild(n,q.EMPTY_NODE);return w!=null&&this.rangedFilter_.matches(w)?(u!=null&&u.trackChildChange(vi(w.name,w.node)),M.updateImmediateChild(w.name,w.node)):M}}else return s.isEmpty()?e:v&&c(g,p)>=0?(u!=null&&(u.trackChildChange(Ls(g.name,g.node)),u.trackChildChange(vi(n,s))),f.updateImmediateChild(n,s).updateImmediateChild(g.name,q.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Le}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return L(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return L(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:yi}hasEnd(){return this.endSet_}getIndexEndValue(){return L(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return L(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Rr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return L(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Le}copy(){const e=new vd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function UI(r){return r.loadsAllData()?new yd(r.getIndex()):r.hasLimit()?new FI(r):new bs(r)}function zm(r){const e={};if(r.isDefault())return e;let n;if(r.index_===Le?n="$priority":r.index_===MI?n="$value":r.index_===fi?n="$key":(L(r.index_ instanceof DI,"Unrecognized index type!"),n=r.index_.toString()),e.orderBy=Ve(n),r.startSet_){const s=r.startAfterSet_?"startAfter":"startAt";e[s]=Ve(r.indexStartValue_),r.startNameSet_&&(e[s]+=","+Ve(r.indexStartName_))}if(r.endSet_){const s=r.endBeforeSet_?"endBefore":"endAt";e[s]=Ve(r.indexEndValue_),r.endNameSet_&&(e[s]+=","+Ve(r.indexEndName_))}return r.limitSet_&&(r.isViewFromLeft()?e.limitToFirst=r.limit_:e.limitToLast=r.limit_),e}function Wm(r){const e={};if(r.startSet_&&(e.sp=r.indexStartValue_,r.startNameSet_&&(e.sn=r.indexStartName_),e.sin=!r.startAfterSet_),r.endSet_&&(e.ep=r.indexEndValue_,r.endNameSet_&&(e.en=r.indexEndName_),e.ein=!r.endBeforeSet_),r.limitSet_){e.l=r.limit_;let n=r.viewFrom_;n===""&&(r.isViewFromLeft()?n="l":n="r"),e.vf=n}return r.index_!==Le&&(e.i=r.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl extends S_{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(L(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,l){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=l,this.log_=Bs("p:rest:"),this.listens_={}}listen(e,n,s,l){const u=e._path.toString();this.log_("Listen called for "+u+" "+e._queryIdentifier);const c=Tl.getListenId_(e,s),f={};this.listens_[c]=f;const p=zm(e._queryParams);this.restRequest_(u+".json",p,(g,v)=>{let _=v;if(g===404&&(_=null,g=null),g===null&&this.onDataUpdate_(u,_,!1,s),_i(this.listens_,c)===f){let w;g?g===401?w="permission_denied":w="rest_error:"+g:w="ok",l(w,null)}})}unlisten(e,n){const s=Tl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=zm(e._queryParams),s=e._path.toString(),l=new Ws;return this.restRequest_(s+".json",n,(u,c)=>{let f=c;u===404&&(f=null,u=null),u===null?(this.onDataUpdate_(s,f,!1,null),l.resolve(f)):l.reject(new Error(f))}),l.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([l,u])=>{l&&l.accessToken&&(n.auth=l.accessToken),u&&u.token&&(n.ac=u.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ki(n);this.log_("Sending REST request for "+c);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(s&&f.readyState===4){this.log_("REST Response for "+c+" received. status:",f.status,"response:",f.responseText);let p=null;if(f.status>=200&&f.status<300){try{p=Ps(f.responseText)}catch{at("Failed to parse JSON response for "+c+": "+f.responseText)}s(null,p)}else f.status!==401&&f.status!==404&&at("Got unsuccessful REST response for "+c+" Status: "+f.status),s(f.status);s=null}},f.open("GET",c,!0),f.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(){this.rootNode_=q.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(){return{value:null,children:new Map}}function O_(r,e,n){if(ie(e))r.value=n,r.children.clear();else if(r.value!==null)r.value=r.value.updateChild(e,n);else{const s=te(e);r.children.has(s)||r.children.set(s,kl());const l=r.children.get(s);e=Ce(e),O_(l,e,n)}}function zc(r,e,n){r.value!==null?n(e,r.value):zI(r,(s,l)=>{const u=new ve(e.toString()+"/"+s);zc(l,u,n)})}function zI(r,e){r.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Je(this.last_,(s,l)=>{n[s]=n[s]-l}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm=10*1e3,VI=30*1e3,BI=5*60*1e3;class $I{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new WI(e);const s=Vm+(VI-Vm)*Math.random();Is(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Je(e,(l,u)=>{u>0&&un(this.statsToReport_,l)&&(n[l]=u,s=!0)}),s&&this.server_.reportStats(n),Is(this.reportStats_.bind(this),Math.floor(Math.random()*2*BI))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Rl{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=qt.ACK_USER_WRITE,this.source=wd()}operationForChild(e){if(ie(this.path)){if(this.affectedTree.value!=null)return L(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ve(e));return new Rl(de(),n,this.revert)}}else return L(te(this.path)===e,"operationForChild called for unrelated child."),new Rl(Ce(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,n){this.source=e,this.path=n,this.type=qt.LISTEN_COMPLETE}operationForChild(e){return ie(this.path)?new Fs(this.source,de()):new Fs(this.source,Ce(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=qt.OVERWRITE}operationForChild(e){return ie(this.path)?new Nr(this.source,de(),this.snap.getImmediateChild(e)):new Nr(this.source,Ce(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=qt.MERGE}operationForChild(e){if(ie(this.path)){const n=this.children.subtree(new ve(e));return n.isEmpty()?null:n.value?new Nr(this.source,de(),n.value):new wi(this.source,de(),n)}else return L(te(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new wi(this.source,Ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class HI{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function GI(r,e,n,s){const l=[],u=[];return e.forEach(c=>{c.type==="child_changed"&&r.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&u.push(bI(c.childName,c.snapshotNode))}),Es(r,l,"child_removed",e,s,n),Es(r,l,"child_added",e,s,n),Es(r,l,"child_moved",u,s,n),Es(r,l,"child_changed",e,s,n),Es(r,l,"value",e,s,n),l}function Es(r,e,n,s,l,u){const c=s.filter(f=>f.type===n);c.sort((f,p)=>qI(r,f,p)),c.forEach(f=>{const p=KI(r,f,u);l.forEach(g=>{g.respondsTo(f.type)&&e.push(g.createEvent(p,r.query_))})})}function KI(r,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,r.index_)),e}function qI(r,e,n){if(e.childName==null||n.childName==null)throw Ti("Should only compare child_ events.");const s=new ne(e.childName,e.snapshotNode),l=new ne(n.childName,n.snapshotNode);return r.index_.compare(s,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(r,e){return{eventCache:r,serverCache:e}}function Cs(r,e,n,s){return ql(new or(e,n,s),r.serverCache)}function D_(r,e,n,s){return ql(r.eventCache,new or(e,n,s))}function Nl(r){return r.eventCache.isFullyInitialized()?r.eventCache.getNode():null}function Pr(r){return r.serverCache.isFullyInitialized()?r.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ic;const YI=()=>(Ic||(Ic=new _t(DS)),Ic);class Ie{static fromObject(e){let n=new Ie(null);return Je(e,(s,l)=>{n=n.set(new ve(s),l)}),n}constructor(e,n=YI()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:de(),value:this.value};if(ie(e))return null;{const s=te(e),l=this.children.get(s);if(l!==null){const u=l.findRootMostMatchingPathAndValue(Ce(e),n);return u!=null?{path:De(new ve(s),u.path),value:u.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ie(e))return this;{const n=te(e),s=this.children.get(n);return s!==null?s.subtree(Ce(e)):new Ie(null)}}set(e,n){if(ie(e))return new Ie(n,this.children);{const s=te(e),u=(this.children.get(s)||new Ie(null)).set(Ce(e),n),c=this.children.insert(s,u);return new Ie(this.value,c)}}remove(e){if(ie(e))return this.children.isEmpty()?new Ie(null):new Ie(null,this.children);{const n=te(e),s=this.children.get(n);if(s){const l=s.remove(Ce(e));let u;return l.isEmpty()?u=this.children.remove(n):u=this.children.insert(n,l),this.value===null&&u.isEmpty()?new Ie(null):new Ie(this.value,u)}else return this}}get(e){if(ie(e))return this.value;{const n=te(e),s=this.children.get(n);return s?s.get(Ce(e)):null}}setTree(e,n){if(ie(e))return n;{const s=te(e),u=(this.children.get(s)||new Ie(null)).setTree(Ce(e),n);let c;return u.isEmpty()?c=this.children.remove(s):c=this.children.insert(s,u),new Ie(this.value,c)}}fold(e){return this.fold_(de(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((l,u)=>{s[l]=u.fold_(De(e,l),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,de(),n)}findOnPath_(e,n,s){const l=this.value?s(n,this.value):!1;if(l)return l;if(ie(e))return null;{const u=te(e),c=this.children.get(u);return c?c.findOnPath_(Ce(e),De(n,u),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,de(),n)}foreachOnPath_(e,n,s){if(ie(e))return this;{this.value&&s(n,this.value);const l=te(e),u=this.children.get(l);return u?u.foreachOnPath_(Ce(e),De(n,l),s):new Ie(null)}}foreach(e){this.foreach_(de(),e)}foreach_(e,n){this.children.inorderTraversal((s,l)=>{l.foreach_(De(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.writeTree_=e}static empty(){return new Yt(new Ie(null))}}function Ts(r,e,n){if(ie(e))return new Yt(new Ie(n));{const s=r.writeTree_.findRootMostValueAndPath(e);if(s!=null){const l=s.path;let u=s.value;const c=lt(l,e);return u=u.updateChild(c,n),new Yt(r.writeTree_.set(l,u))}else{const l=new Ie(n),u=r.writeTree_.setTree(e,l);return new Yt(u)}}}function Wc(r,e,n){let s=r;return Je(n,(l,u)=>{s=Ts(s,De(e,l),u)}),s}function Bm(r,e){if(ie(e))return Yt.empty();{const n=r.writeTree_.setTree(e,new Ie(null));return new Yt(n)}}function Vc(r,e){return br(r,e)!=null}function br(r,e){const n=r.writeTree_.findRootMostValueAndPath(e);return n!=null?r.writeTree_.get(n.path).getChild(lt(n.path,e)):null}function $m(r){const e=[],n=r.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Le,(s,l)=>{e.push(new ne(s,l))}):r.writeTree_.children.inorderTraversal((s,l)=>{l.value!=null&&e.push(new ne(s,l.value))}),e}function nr(r,e){if(ie(e))return r;{const n=br(r,e);return n!=null?new Yt(new Ie(n)):new Yt(r.writeTree_.subtree(e))}}function Bc(r){return r.writeTree_.isEmpty()}function Ei(r,e){return L_(de(),r.writeTree_,e)}function L_(r,e,n){if(e.value!=null)return n.updateChild(r,e.value);{let s=null;return e.children.inorderTraversal((l,u)=>{l===".priority"?(L(u.value!==null,"Priority writes must always be leaf nodes"),s=u.value):n=L_(De(r,l),u,n)}),!n.getChild(r).isEmpty()&&s!==null&&(n=n.updateChild(De(r,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yl(r,e){return U_(e,r)}function QI(r,e,n,s,l){L(s>r.lastWriteId,"Stacking an older write on top of newer ones"),l===void 0&&(l=!0),r.allWrites.push({path:e,snap:n,writeId:s,visible:l}),l&&(r.visibleWrites=Ts(r.visibleWrites,e,n)),r.lastWriteId=s}function XI(r,e,n,s){L(s>r.lastWriteId,"Stacking an older merge on top of newer ones"),r.allWrites.push({path:e,children:n,writeId:s,visible:!0}),r.visibleWrites=Wc(r.visibleWrites,e,n),r.lastWriteId=s}function JI(r,e){for(let n=0;n<r.allWrites.length;n++){const s=r.allWrites[n];if(s.writeId===e)return s}return null}function ZI(r,e){const n=r.allWrites.findIndex(f=>f.writeId===e);L(n>=0,"removeWrite called with nonexistent writeId.");const s=r.allWrites[n];r.allWrites.splice(n,1);let l=s.visible,u=!1,c=r.allWrites.length-1;for(;l&&c>=0;){const f=r.allWrites[c];f.visible&&(c>=n&&eC(f,s.path)?l=!1:Mt(s.path,f.path)&&(u=!0)),c--}if(l){if(u)return tC(r),!0;if(s.snap)r.visibleWrites=Bm(r.visibleWrites,s.path);else{const f=s.children;Je(f,p=>{r.visibleWrites=Bm(r.visibleWrites,De(s.path,p))})}return!0}else return!1}function eC(r,e){if(r.snap)return Mt(r.path,e);for(const n in r.children)if(r.children.hasOwnProperty(n)&&Mt(De(r.path,n),e))return!0;return!1}function tC(r){r.visibleWrites=M_(r.allWrites,nC,de()),r.allWrites.length>0?r.lastWriteId=r.allWrites[r.allWrites.length-1].writeId:r.lastWriteId=-1}function nC(r){return r.visible}function M_(r,e,n){let s=Yt.empty();for(let l=0;l<r.length;++l){const u=r[l];if(e(u)){const c=u.path;let f;if(u.snap)Mt(n,c)?(f=lt(n,c),s=Ts(s,f,u.snap)):Mt(c,n)&&(f=lt(c,n),s=Ts(s,de(),u.snap.getChild(f)));else if(u.children){if(Mt(n,c))f=lt(n,c),s=Wc(s,f,u.children);else if(Mt(c,n))if(f=lt(c,n),ie(f))s=Wc(s,de(),u.children);else{const p=_i(u.children,te(f));if(p){const g=p.getChild(Ce(f));s=Ts(s,de(),g)}}}else throw Ti("WriteRecord should have .snap or .children")}}return s}function b_(r,e,n,s,l){if(!s&&!l){const u=br(r.visibleWrites,e);if(u!=null)return u;{const c=nr(r.visibleWrites,e);if(Bc(c))return n;if(n==null&&!Vc(c,de()))return null;{const f=n||q.EMPTY_NODE;return Ei(c,f)}}}else{const u=nr(r.visibleWrites,e);if(!l&&Bc(u))return n;if(!l&&n==null&&!Vc(u,de()))return null;{const c=function(g){return(g.visible||l)&&(!s||!~s.indexOf(g.writeId))&&(Mt(g.path,e)||Mt(e,g.path))},f=M_(r.allWrites,c,e),p=n||q.EMPTY_NODE;return Ei(f,p)}}}function rC(r,e,n){let s=q.EMPTY_NODE;const l=br(r.visibleWrites,e);if(l)return l.isLeafNode()||l.forEachChild(Le,(u,c)=>{s=s.updateImmediateChild(u,c)}),s;if(n){const u=nr(r.visibleWrites,e);return n.forEachChild(Le,(c,f)=>{const p=Ei(nr(u,new ve(c)),f);s=s.updateImmediateChild(c,p)}),$m(u).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}else{const u=nr(r.visibleWrites,e);return $m(u).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}}function iC(r,e,n,s,l){L(s||l,"Either existingEventSnap or existingServerSnap must exist");const u=De(e,n);if(Vc(r.visibleWrites,u))return null;{const c=nr(r.visibleWrites,u);return Bc(c)?l.getChild(n):Ei(c,l.getChild(n))}}function sC(r,e,n,s){const l=De(e,n),u=br(r.visibleWrites,l);if(u!=null)return u;if(s.isCompleteForChild(n)){const c=nr(r.visibleWrites,l);return Ei(c,s.getNode().getImmediateChild(n))}else return null}function oC(r,e){return br(r.visibleWrites,e)}function lC(r,e,n,s,l,u,c){let f;const p=nr(r.visibleWrites,e),g=br(p,de());if(g!=null)f=g;else if(n!=null)f=Ei(p,n);else return[];if(f=f.withIndex(c),!f.isEmpty()&&!f.isLeafNode()){const v=[],_=c.getCompare(),w=u?f.getReverseIteratorFrom(s,c):f.getIteratorFrom(s,c);let R=w.getNext();for(;R&&v.length<l;)_(R,s)!==0&&v.push(R),R=w.getNext();return v}else return[]}function aC(){return{visibleWrites:Yt.empty(),allWrites:[],lastWriteId:-1}}function Pl(r,e,n,s){return b_(r.writeTree,r.treePath,e,n,s)}function Id(r,e){return rC(r.writeTree,r.treePath,e)}function Hm(r,e,n,s){return iC(r.writeTree,r.treePath,e,n,s)}function Al(r,e){return oC(r.writeTree,De(r.treePath,e))}function uC(r,e,n,s,l,u){return lC(r.writeTree,r.treePath,e,n,s,l,u)}function Cd(r,e,n){return sC(r.writeTree,r.treePath,e,n)}function F_(r,e){return U_(De(r.treePath,e),r.writeTree)}function U_(r,e){return{treePath:r,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;L(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),L(s!==".priority","Only non-priority child changes can be tracked.");const l=this.changeMap.get(s);if(l){const u=l.type;if(n==="child_added"&&u==="child_removed")this.changeMap.set(s,Ms(s,e.snapshotNode,l.snapshotNode));else if(n==="child_removed"&&u==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&u==="child_changed")this.changeMap.set(s,Ls(s,l.oldSnap));else if(n==="child_changed"&&u==="child_added")this.changeMap.set(s,vi(s,e.snapshotNode));else if(n==="child_changed"&&u==="child_changed")this.changeMap.set(s,Ms(s,e.snapshotNode,l.oldSnap));else throw Ti("Illegal combination of changes: "+e+" occurred after "+l)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const j_=new dC;class Td{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new or(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Cd(this.writes_,e,s)}}getChildAfterChild(e,n,s){const l=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Pr(this.viewCache_),u=uC(this.writes_,l,n,1,s,e);return u.length===0?null:u[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hC(r){return{filter:r}}function fC(r,e){L(e.eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),L(e.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed")}function pC(r,e,n,s,l){const u=new cC;let c,f;if(n.type===qt.OVERWRITE){const g=n;g.source.fromUser?c=$c(r,e,g.path,g.snap,s,l,u):(L(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered()&&!ie(g.path),c=xl(r,e,g.path,g.snap,s,l,f,u))}else if(n.type===qt.MERGE){const g=n;g.source.fromUser?c=gC(r,e,g.path,g.children,s,l,u):(L(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered(),c=Hc(r,e,g.path,g.children,s,l,f,u))}else if(n.type===qt.ACK_USER_WRITE){const g=n;g.revert?c=vC(r,e,g.path,s,l,u):c=_C(r,e,g.path,g.affectedTree,s,l,u)}else if(n.type===qt.LISTEN_COMPLETE)c=yC(r,e,n.path,s,u);else throw Ti("Unknown operation type: "+n.type);const p=u.getChanges();return mC(e,c,p),{viewCache:c,changes:p}}function mC(r,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const l=s.getNode().isLeafNode()||s.getNode().isEmpty(),u=Nl(r);(n.length>0||!r.eventCache.isFullyInitialized()||l&&!s.getNode().equals(u)||!s.getNode().getPriority().equals(u.getPriority()))&&n.push(x_(Nl(e)))}}function z_(r,e,n,s,l,u){const c=e.eventCache;if(Al(s,n)!=null)return e;{let f,p;if(ie(n))if(L(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=Pr(e),v=g instanceof q?g:q.EMPTY_NODE,_=Id(s,v);f=r.filter.updateFullNode(e.eventCache.getNode(),_,u)}else{const g=Pl(s,Pr(e));f=r.filter.updateFullNode(e.eventCache.getNode(),g,u)}else{const g=te(n);if(g===".priority"){L(sr(n)===1,"Can't have a priority with additional path components");const v=c.getNode();p=e.serverCache.getNode();const _=Hm(s,n,v,p);_!=null?f=r.filter.updatePriority(v,_):f=c.getNode()}else{const v=Ce(n);let _;if(c.isCompleteForChild(g)){p=e.serverCache.getNode();const w=Hm(s,n,c.getNode(),p);w!=null?_=c.getNode().getImmediateChild(g).updateChild(v,w):_=c.getNode().getImmediateChild(g)}else _=Cd(s,g,e.serverCache);_!=null?f=r.filter.updateChild(c.getNode(),g,_,v,l,u):f=c.getNode()}}return Cs(e,f,c.isFullyInitialized()||ie(n),r.filter.filtersNodes())}}function xl(r,e,n,s,l,u,c,f){const p=e.serverCache;let g;const v=c?r.filter:r.filter.getIndexedFilter();if(ie(n))g=v.updateFullNode(p.getNode(),s,null);else if(v.filtersNodes()&&!p.isFiltered()){const R=p.getNode().updateChild(n,s);g=v.updateFullNode(p.getNode(),R,null)}else{const R=te(n);if(!p.isCompleteForPath(n)&&sr(n)>1)return e;const N=Ce(n),B=p.getNode().getImmediateChild(R).updateChild(N,s);R===".priority"?g=v.updatePriority(p.getNode(),B):g=v.updateChild(p.getNode(),R,B,N,j_,null)}const _=D_(e,g,p.isFullyInitialized()||ie(n),v.filtersNodes()),w=new Td(l,_,u);return z_(r,_,n,l,w,f)}function $c(r,e,n,s,l,u,c){const f=e.eventCache;let p,g;const v=new Td(l,e,u);if(ie(n))g=r.filter.updateFullNode(e.eventCache.getNode(),s,c),p=Cs(e,g,!0,r.filter.filtersNodes());else{const _=te(n);if(_===".priority")g=r.filter.updatePriority(e.eventCache.getNode(),s),p=Cs(e,g,f.isFullyInitialized(),f.isFiltered());else{const w=Ce(n),R=f.getNode().getImmediateChild(_);let N;if(ie(w))N=s;else{const M=v.getCompleteChild(_);M!=null?pd(w)===".priority"&&M.getChild(C_(w)).isEmpty()?N=M:N=M.updateChild(w,s):N=q.EMPTY_NODE}if(R.equals(N))p=e;else{const M=r.filter.updateChild(f.getNode(),_,N,w,v,c);p=Cs(e,M,f.isFullyInitialized(),r.filter.filtersNodes())}}}return p}function Gm(r,e){return r.eventCache.isCompleteForChild(e)}function gC(r,e,n,s,l,u,c){let f=e;return s.foreach((p,g)=>{const v=De(n,p);Gm(e,te(v))&&(f=$c(r,f,v,g,l,u,c))}),s.foreach((p,g)=>{const v=De(n,p);Gm(e,te(v))||(f=$c(r,f,v,g,l,u,c))}),f}function Km(r,e,n){return n.foreach((s,l)=>{e=e.updateChild(s,l)}),e}function Hc(r,e,n,s,l,u,c,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;ie(n)?g=s:g=new Ie(null).setTree(n,s);const v=e.serverCache.getNode();return g.children.inorderTraversal((_,w)=>{if(v.hasChild(_)){const R=e.serverCache.getNode().getImmediateChild(_),N=Km(r,R,w);p=xl(r,p,new ve(_),N,l,u,c,f)}}),g.children.inorderTraversal((_,w)=>{const R=!e.serverCache.isCompleteForChild(_)&&w.value===null;if(!v.hasChild(_)&&!R){const N=e.serverCache.getNode().getImmediateChild(_),M=Km(r,N,w);p=xl(r,p,new ve(_),M,l,u,c,f)}}),p}function _C(r,e,n,s,l,u,c){if(Al(l,n)!=null)return e;const f=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(ie(n)&&p.isFullyInitialized()||p.isCompleteForPath(n))return xl(r,e,n,p.getNode().getChild(n),l,u,f,c);if(ie(n)){let g=new Ie(null);return p.getNode().forEachChild(fi,(v,_)=>{g=g.set(new ve(v),_)}),Hc(r,e,n,g,l,u,f,c)}else return e}else{let g=new Ie(null);return s.foreach((v,_)=>{const w=De(n,v);p.isCompleteForPath(w)&&(g=g.set(v,p.getNode().getChild(w)))}),Hc(r,e,n,g,l,u,f,c)}}function yC(r,e,n,s,l){const u=e.serverCache,c=D_(e,u.getNode(),u.isFullyInitialized()||ie(n),u.isFiltered());return z_(r,c,n,s,j_,l)}function vC(r,e,n,s,l,u){let c;if(Al(s,n)!=null)return e;{const f=new Td(s,e,l),p=e.eventCache.getNode();let g;if(ie(n)||te(n)===".priority"){let v;if(e.serverCache.isFullyInitialized())v=Pl(s,Pr(e));else{const _=e.serverCache.getNode();L(_ instanceof q,"serverChildren would be complete if leaf node"),v=Id(s,_)}v=v,g=r.filter.updateFullNode(p,v,u)}else{const v=te(n);let _=Cd(s,v,e.serverCache);_==null&&e.serverCache.isCompleteForChild(v)&&(_=p.getImmediateChild(v)),_!=null?g=r.filter.updateChild(p,v,_,Ce(n),f,u):e.eventCache.getNode().hasChild(v)?g=r.filter.updateChild(p,v,q.EMPTY_NODE,Ce(n),f,u):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=Pl(s,Pr(e)),c.isLeafNode()&&(g=r.filter.updateFullNode(g,c,u)))}return c=e.serverCache.isFullyInitialized()||Al(s,de())!=null,Cs(e,g,c,r.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,l=new yd(s.getIndex()),u=UI(s);this.processor_=hC(u);const c=n.serverCache,f=n.eventCache,p=l.updateFullNode(q.EMPTY_NODE,c.getNode(),null),g=u.updateFullNode(q.EMPTY_NODE,f.getNode(),null),v=new or(p,c.isFullyInitialized(),l.filtersNodes()),_=new or(g,f.isFullyInitialized(),u.filtersNodes());this.viewCache_=ql(_,v),this.eventGenerator_=new HI(this.query_)}get query(){return this.query_}}function EC(r){return r.viewCache_.serverCache.getNode()}function SC(r){return Nl(r.viewCache_)}function IC(r,e){const n=Pr(r.viewCache_);return n&&(r.query._queryParams.loadsAllData()||!ie(e)&&!n.getImmediateChild(te(e)).isEmpty())?n.getChild(e):null}function qm(r){return r.eventRegistrations_.length===0}function CC(r,e){r.eventRegistrations_.push(e)}function Ym(r,e,n){const s=[];if(n){L(e==null,"A cancel should cancel all event registrations.");const l=r.query._path;r.eventRegistrations_.forEach(u=>{const c=u.createCancelEvent(n,l);c&&s.push(c)})}if(e){let l=[];for(let u=0;u<r.eventRegistrations_.length;++u){const c=r.eventRegistrations_[u];if(!c.matches(e))l.push(c);else if(e.hasAnyCallback()){l=l.concat(r.eventRegistrations_.slice(u+1));break}}r.eventRegistrations_=l}else r.eventRegistrations_=[];return s}function Qm(r,e,n,s){e.type===qt.MERGE&&e.source.queryId!==null&&(L(Pr(r.viewCache_),"We should always have a full cache before handling merges"),L(Nl(r.viewCache_),"Missing event cache, even though we have a server cache"));const l=r.viewCache_,u=pC(r.processor_,l,e,n,s);return fC(r.processor_,u.viewCache),L(u.viewCache.serverCache.isFullyInitialized()||!l.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),r.viewCache_=u.viewCache,W_(r,u.changes,u.viewCache.eventCache.getNode(),null)}function TC(r,e){const n=r.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Le,(u,c)=>{s.push(vi(u,c))}),n.isFullyInitialized()&&s.push(x_(n.getNode())),W_(r,s,n.getNode(),e)}function W_(r,e,n,s){const l=s?[s]:r.eventRegistrations_;return GI(r.eventGenerator_,e,n,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ol;class V_{constructor(){this.views=new Map}}function kC(r){L(!Ol,"__referenceConstructor has already been defined"),Ol=r}function RC(){return L(Ol,"Reference.ts has not been loaded"),Ol}function NC(r){return r.views.size===0}function kd(r,e,n,s){const l=e.source.queryId;if(l!==null){const u=r.views.get(l);return L(u!=null,"SyncTree gave us an op for an invalid query."),Qm(u,e,n,s)}else{let u=[];for(const c of r.views.values())u=u.concat(Qm(c,e,n,s));return u}}function B_(r,e,n,s,l){const u=e._queryIdentifier,c=r.views.get(u);if(!c){let f=Pl(n,l?s:null),p=!1;f?p=!0:s instanceof q?(f=Id(n,s),p=!1):(f=q.EMPTY_NODE,p=!1);const g=ql(new or(f,p,!1),new or(s,l,!1));return new wC(e,g)}return c}function PC(r,e,n,s,l,u){const c=B_(r,e,s,l,u);return r.views.has(e._queryIdentifier)||r.views.set(e._queryIdentifier,c),CC(c,n),TC(c,n)}function AC(r,e,n,s){const l=e._queryIdentifier,u=[];let c=[];const f=lr(r);if(l==="default")for(const[p,g]of r.views.entries())c=c.concat(Ym(g,n,s)),qm(g)&&(r.views.delete(p),g.query._queryParams.loadsAllData()||u.push(g.query));else{const p=r.views.get(l);p&&(c=c.concat(Ym(p,n,s)),qm(p)&&(r.views.delete(l),p.query._queryParams.loadsAllData()||u.push(p.query)))}return f&&!lr(r)&&u.push(new(RC())(e._repo,e._path)),{removed:u,events:c}}function $_(r){const e=[];for(const n of r.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function rr(r,e){let n=null;for(const s of r.views.values())n=n||IC(s,e);return n}function H_(r,e){if(e._queryParams.loadsAllData())return Ql(r);{const s=e._queryIdentifier;return r.views.get(s)}}function G_(r,e){return H_(r,e)!=null}function lr(r){return Ql(r)!=null}function Ql(r){for(const e of r.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dl;function xC(r){L(!Dl,"__referenceConstructor has already been defined"),Dl=r}function OC(){return L(Dl,"Reference.ts has not been loaded"),Dl}let DC=1;class Xm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ie(null),this.pendingWriteTree_=aC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function K_(r,e,n,s,l){return QI(r.pendingWriteTree_,e,n,s,l),l?Pi(r,new Nr(wd(),e,n)):[]}function LC(r,e,n,s){XI(r.pendingWriteTree_,e,n,s);const l=Ie.fromObject(n);return Pi(r,new wi(wd(),e,l))}function Zn(r,e,n=!1){const s=JI(r.pendingWriteTree_,e);if(ZI(r.pendingWriteTree_,e)){let u=new Ie(null);return s.snap!=null?u=u.set(de(),!0):Je(s.children,c=>{u=u.set(new ve(c),!0)}),Pi(r,new Rl(s.path,u,n))}else return[]}function Hs(r,e,n){return Pi(r,new Nr(Ed(),e,n))}function MC(r,e,n){const s=Ie.fromObject(n);return Pi(r,new wi(Ed(),e,s))}function bC(r,e){return Pi(r,new Fs(Ed(),e))}function FC(r,e,n){const s=Nd(r,n);if(s){const l=Pd(s),u=l.path,c=l.queryId,f=lt(u,e),p=new Fs(Sd(c),f);return Ad(r,u,p)}else return[]}function Ll(r,e,n,s,l=!1){const u=e._path,c=r.syncPointTree_.get(u);let f=[];if(c&&(e._queryIdentifier==="default"||G_(c,e))){const p=AC(c,e,n,s);NC(c)&&(r.syncPointTree_=r.syncPointTree_.remove(u));const g=p.removed;if(f=p.events,!l){const v=g.findIndex(w=>w._queryParams.loadsAllData())!==-1,_=r.syncPointTree_.findOnPath(u,(w,R)=>lr(R));if(v&&!_){const w=r.syncPointTree_.subtree(u);if(!w.isEmpty()){const R=zC(w);for(let N=0;N<R.length;++N){const M=R[N],B=M.query,pe=X_(r,M);r.listenProvider_.startListening(ks(B),Us(r,B),pe.hashFn,pe.onComplete)}}}!_&&g.length>0&&!s&&(v?r.listenProvider_.stopListening(ks(e),null):g.forEach(w=>{const R=r.queryToTagMap.get(Xl(w));r.listenProvider_.stopListening(ks(w),R)}))}WC(r,g)}return f}function q_(r,e,n,s){const l=Nd(r,s);if(l!=null){const u=Pd(l),c=u.path,f=u.queryId,p=lt(c,e),g=new Nr(Sd(f),p,n);return Ad(r,c,g)}else return[]}function UC(r,e,n,s){const l=Nd(r,s);if(l){const u=Pd(l),c=u.path,f=u.queryId,p=lt(c,e),g=Ie.fromObject(n),v=new wi(Sd(f),p,g);return Ad(r,c,v)}else return[]}function Gc(r,e,n,s=!1){const l=e._path;let u=null,c=!1;r.syncPointTree_.foreachOnPath(l,(w,R)=>{const N=lt(w,l);u=u||rr(R,N),c=c||lr(R)});let f=r.syncPointTree_.get(l);f?(c=c||lr(f),u=u||rr(f,de())):(f=new V_,r.syncPointTree_=r.syncPointTree_.set(l,f));let p;u!=null?p=!0:(p=!1,u=q.EMPTY_NODE,r.syncPointTree_.subtree(l).foreachChild((R,N)=>{const M=rr(N,de());M&&(u=u.updateImmediateChild(R,M))}));const g=G_(f,e);if(!g&&!e._queryParams.loadsAllData()){const w=Xl(e);L(!r.queryToTagMap.has(w),"View does not exist, but we have a tag");const R=VC();r.queryToTagMap.set(w,R),r.tagToQueryMap.set(R,w)}const v=Yl(r.pendingWriteTree_,l);let _=PC(f,e,n,v,u,p);if(!g&&!c&&!s){const w=H_(f,e);_=_.concat(BC(r,e,w))}return _}function Rd(r,e,n){const l=r.pendingWriteTree_,u=r.syncPointTree_.findOnPath(e,(c,f)=>{const p=lt(c,e),g=rr(f,p);if(g)return g});return b_(l,e,u,n,!0)}function jC(r,e){const n=e._path;let s=null;r.syncPointTree_.foreachOnPath(n,(g,v)=>{const _=lt(g,n);s=s||rr(v,_)});let l=r.syncPointTree_.get(n);l?s=s||rr(l,de()):(l=new V_,r.syncPointTree_=r.syncPointTree_.set(n,l));const u=s!=null,c=u?new or(s,!0,!1):null,f=Yl(r.pendingWriteTree_,e._path),p=B_(l,e,f,u?c.getNode():q.EMPTY_NODE,u);return SC(p)}function Pi(r,e){return Y_(e,r.syncPointTree_,null,Yl(r.pendingWriteTree_,de()))}function Y_(r,e,n,s){if(ie(r.path))return Q_(r,e,n,s);{const l=e.get(de());n==null&&l!=null&&(n=rr(l,de()));let u=[];const c=te(r.path),f=r.operationForChild(c),p=e.children.get(c);if(p&&f){const g=n?n.getImmediateChild(c):null,v=F_(s,c);u=u.concat(Y_(f,p,g,v))}return l&&(u=u.concat(kd(l,r,s,n))),u}}function Q_(r,e,n,s){const l=e.get(de());n==null&&l!=null&&(n=rr(l,de()));let u=[];return e.children.inorderTraversal((c,f)=>{const p=n?n.getImmediateChild(c):null,g=F_(s,c),v=r.operationForChild(c);v&&(u=u.concat(Q_(v,f,p,g)))}),l&&(u=u.concat(kd(l,r,s,n))),u}function X_(r,e){const n=e.query,s=Us(r,n);return{hashFn:()=>(EC(e)||q.EMPTY_NODE).hash(),onComplete:l=>{if(l==="ok")return s?FC(r,n._path,s):bC(r,n._path);{const u=bS(l,n);return Ll(r,n,null,u)}}}}function Us(r,e){const n=Xl(e);return r.queryToTagMap.get(n)}function Xl(r){return r._path.toString()+"$"+r._queryIdentifier}function Nd(r,e){return r.tagToQueryMap.get(e)}function Pd(r){const e=r.indexOf("$");return L(e!==-1&&e<r.length-1,"Bad queryKey."),{queryId:r.substr(e+1),path:new ve(r.substr(0,e))}}function Ad(r,e,n){const s=r.syncPointTree_.get(e);L(s,"Missing sync point for query tag that we're tracking");const l=Yl(r.pendingWriteTree_,e);return kd(s,n,l,null)}function zC(r){return r.fold((e,n,s)=>{if(n&&lr(n))return[Ql(n)];{let l=[];return n&&(l=$_(n)),Je(s,(u,c)=>{l=l.concat(c)}),l}})}function ks(r){return r._queryParams.loadsAllData()&&!r._queryParams.isDefault()?new(OC())(r._repo,r._path):r}function WC(r,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const l=Xl(s),u=r.queryToTagMap.get(l);r.queryToTagMap.delete(l),r.tagToQueryMap.delete(u)}}}function VC(){return DC++}function BC(r,e,n){const s=e._path,l=Us(r,e),u=X_(r,n),c=r.listenProvider_.startListening(ks(e),l,u.hashFn,u.onComplete),f=r.syncPointTree_.subtree(s);if(l)L(!lr(f.value),"If we're adding a query, it shouldn't be shadowed");else{const p=f.fold((g,v,_)=>{if(!ie(g)&&v&&lr(v))return[Ql(v).query];{let w=[];return v&&(w=w.concat($_(v).map(R=>R.query))),Je(_,(R,N)=>{w=w.concat(N)}),w}});for(let g=0;g<p.length;++g){const v=p[g];r.listenProvider_.stopListening(ks(v),Us(r,v))}}return c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new xd(n)}node(){return this.node_}}class Od{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=De(this.path_,e);return new Od(this.syncTree_,n)}node(){return Rd(this.syncTree_,this.path_)}}const $C=function(r){return r=r||{},r.timestamp=r.timestamp||new Date().getTime(),r},Jm=function(r,e,n){if(!r||typeof r!="object")return r;if(L(".sv"in r,"Unexpected leaf node or priority contents"),typeof r[".sv"]=="string")return HC(r[".sv"],e,n);if(typeof r[".sv"]=="object")return GC(r[".sv"],e);L(!1,"Unexpected server value: "+JSON.stringify(r,null,2))},HC=function(r,e,n){switch(r){case"timestamp":return n.timestamp;default:L(!1,"Unexpected server value: "+r)}},GC=function(r,e,n){r.hasOwnProperty("increment")||L(!1,"Unexpected server value: "+JSON.stringify(r,null,2));const s=r.increment;typeof s!="number"&&L(!1,"Unexpected increment value: "+s);const l=e.node();if(L(l!==null&&typeof l<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!l.isLeafNode())return s;const c=l.getValue();return typeof c!="number"?s:c+s},J_=function(r,e,n,s){return Dd(e,new Od(n,r),s)},Z_=function(r,e,n){return Dd(r,new xd(e),n)};function Dd(r,e,n){const s=r.getPriority().val(),l=Jm(s,e.getImmediateChild(".priority"),n);let u;if(r.isLeafNode()){const c=r,f=Jm(c.getValue(),e,n);return f!==c.getValue()||l!==c.getPriority().val()?new Ke(f,We(l)):r}else{const c=r;return u=c,l!==c.getPriority().val()&&(u=u.updatePriority(new Ke(l))),c.forEachChild(Le,(f,p)=>{const g=Dd(p,e.getImmediateChild(f),n);g!==p&&(u=u.updateImmediateChild(f,g))}),u}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Md(r,e){let n=e instanceof ve?e:new ve(e),s=r,l=te(n);for(;l!==null;){const u=_i(s.node.children,l)||{children:{},childCount:0};s=new Ld(l,s,u),n=Ce(n),l=te(n)}return s}function Ai(r){return r.node.value}function ey(r,e){r.node.value=e,Kc(r)}function ty(r){return r.node.childCount>0}function KC(r){return Ai(r)===void 0&&!ty(r)}function Jl(r,e){Je(r.node.children,(n,s)=>{e(new Ld(n,r,s))})}function ny(r,e,n,s){n&&!s&&e(r),Jl(r,l=>{ny(l,e,!0,s)}),n&&s&&e(r)}function qC(r,e,n){let s=r.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Gs(r){return new ve(r.parent===null?r.name:Gs(r.parent)+"/"+r.name)}function Kc(r){r.parent!==null&&YC(r.parent,r.name,r)}function YC(r,e,n){const s=KC(n),l=un(r.node.children,e);s&&l?(delete r.node.children[e],r.node.childCount--,Kc(r)):!s&&!l&&(r.node.children[e]=n.node,r.node.childCount++,Kc(r))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QC=/[\[\].#$\/\u0000-\u001F\u007F]/,XC=/[\[\].#$\u0000-\u001F\u007F]/,Cc=10*1024*1024,bd=function(r){return typeof r=="string"&&r.length!==0&&!QC.test(r)},ry=function(r){return typeof r=="string"&&r.length!==0&&!XC.test(r)},JC=function(r){return r&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),ry(r)},ZC=function(r){return r===null||typeof r=="string"||typeof r=="number"&&!ud(r)||r&&typeof r=="object"&&un(r,".sv")},eT=function(r,e,n,s){Zl($l(r,"value"),e,n)},Zl=function(r,e,n){const s=n instanceof ve?new gI(n,r):n;if(e===void 0)throw new Error(r+"contains undefined "+Cr(s));if(typeof e=="function")throw new Error(r+"contains a function "+Cr(s)+" with contents = "+e.toString());if(ud(e))throw new Error(r+"contains "+e.toString()+" "+Cr(s));if(typeof e=="string"&&e.length>Cc/3&&Hl(e)>Cc)throw new Error(r+"contains a string greater than "+Cc+" utf8 bytes "+Cr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let l=!1,u=!1;if(Je(e,(c,f)=>{if(c===".value")l=!0;else if(c!==".priority"&&c!==".sv"&&(u=!0,!bd(c)))throw new Error(r+" contains an invalid key ("+c+") "+Cr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);_I(s,c),Zl(r,f,s),yI(s)}),l&&u)throw new Error(r+' contains ".value" child '+Cr(s)+" in addition to actual children.")}},tT=function(r,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const u=Ds(s);for(let c=0;c<u.length;c++)if(!(u[c]===".priority"&&c===u.length-1)){if(!bd(u[c]))throw new Error(r+"contains an invalid key ("+u[c]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(mI);let l=null;for(n=0;n<e.length;n++){if(s=e[n],l!==null&&Mt(l,s))throw new Error(r+"contains a path "+l.toString()+" that is ancestor of another path "+s.toString());l=s}},nT=function(r,e,n,s){const l=$l(r,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(l+" must be an object containing the children to replace.");const u=[];Je(e,(c,f)=>{const p=new ve(c);if(Zl(l,f,De(n,p)),pd(p)===".priority"&&!ZC(f))throw new Error(l+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");u.push(p)}),tT(l,u)},iy=function(r,e,n,s){if(!ry(n))throw new Error($l(r,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},rT=function(r,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),iy(r,e,n)},sy=function(r,e){if(te(e)===".info")throw new Error(r+" failed = Can't modify data under /.info/")},iT=function(r,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!bd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!JC(n))throw new Error($l(r,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ea(r,e){let n=null;for(let s=0;s<e.length;s++){const l=e[s],u=l.getPath();n!==null&&!md(u,n.path)&&(r.eventLists_.push(n),n=null),n===null&&(n={events:[],path:u}),n.events.push(l)}n&&r.eventLists_.push(n)}function oy(r,e,n){ea(r,n),ly(r,s=>md(s,e))}function Ut(r,e,n){ea(r,n),ly(r,s=>Mt(s,e)||Mt(e,s))}function ly(r,e){r.recursionDepth_++;let n=!0;for(let s=0;s<r.eventLists_.length;s++){const l=r.eventLists_[s];if(l){const u=l.path;e(u)?(oT(r.eventLists_[s]),r.eventLists_[s]=null):n=!1}}n&&(r.eventLists_=[]),r.recursionDepth_--}function oT(r){for(let e=0;e<r.events.length;e++){const n=r.events[e];if(n!==null){r.events[e]=null;const s=n.getEventRunner();Ss&&Xe("event: "+n.toString()),Ni(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT="repo_interrupt",aT=25;class uT{constructor(e,n,s,l){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=l,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new sT,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=kl(),this.transactionQueueTree_=new Ld,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function cT(r,e,n){if(r.stats_=hd(r.repoInfo_),r.forceRestClient_||zS())r.server_=new Tl(r.repoInfo_,(s,l,u,c)=>{Zm(r,s,l,u,c)},r.authTokenProvider_,r.appCheckProvider_),setTimeout(()=>eg(r,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ve(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}r.persistentConnection_=new In(r.repoInfo_,e,(s,l,u,c)=>{Zm(r,s,l,u,c)},s=>{eg(r,s)},s=>{hT(r,s)},r.authTokenProvider_,r.appCheckProvider_,n),r.server_=r.persistentConnection_}r.authTokenProvider_.addTokenChangeListener(s=>{r.server_.refreshAuthToken(s)}),r.appCheckProvider_.addTokenChangeListener(s=>{r.server_.refreshAppCheckToken(s.token)}),r.statsReporter_=HS(r.repoInfo_,()=>new $I(r.stats_,r.server_)),r.infoData_=new jI,r.infoSyncTree_=new Xm({startListening:(s,l,u,c)=>{let f=[];const p=r.infoData_.getNode(s._path);return p.isEmpty()||(f=Hs(r.infoSyncTree_,s._path,p),setTimeout(()=>{c("ok")},0)),f},stopListening:()=>{}}),Fd(r,"connected",!1),r.serverSyncTree_=new Xm({startListening:(s,l,u,c)=>(r.server_.listen(s,u,l,(f,p)=>{const g=c(f,p);Ut(r.eventQueue_,s._path,g)}),[]),stopListening:(s,l)=>{r.server_.unlisten(s,l)}})}function dT(r){const n=r.infoData_.getNode(new ve(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ta(r){return $C({timestamp:dT(r)})}function Zm(r,e,n,s,l){r.dataUpdateCount++;const u=new ve(e);n=r.interceptServerDataCallback_?r.interceptServerDataCallback_(e,n):n;let c=[];if(l)if(s){const p=wl(n,g=>We(g));c=UC(r.serverSyncTree_,u,p,l)}else{const p=We(n);c=q_(r.serverSyncTree_,u,p,l)}else if(s){const p=wl(n,g=>We(g));c=MC(r.serverSyncTree_,u,p)}else{const p=We(n);c=Hs(r.serverSyncTree_,u,p)}let f=u;c.length>0&&(f=Si(r,u)),Ut(r.eventQueue_,f,c)}function eg(r,e){Fd(r,"connected",e),e===!1&&gT(r)}function hT(r,e){Je(e,(n,s)=>{Fd(r,n,s)})}function Fd(r,e,n){const s=new ve("/.info/"+e),l=We(n);r.infoData_.updateSnapshot(s,l);const u=Hs(r.infoSyncTree_,s,l);Ut(r.eventQueue_,s,u)}function Ud(r){return r.nextWriteId_++}function fT(r,e,n){const s=jC(r.serverSyncTree_,e);return s!=null?Promise.resolve(s):r.server_.get(e).then(l=>{const u=We(l).withIndex(e._queryParams.getIndex());Gc(r.serverSyncTree_,e,n,!0);let c;if(e._queryParams.loadsAllData())c=Hs(r.serverSyncTree_,e._path,u);else{const f=Us(r.serverSyncTree_,e);c=q_(r.serverSyncTree_,e._path,u,f)}return Ut(r.eventQueue_,e._path,c),Ll(r.serverSyncTree_,e,n,null,!0),u},l=>(Ks(r,"get for query "+Ve(e)+" failed: "+l),Promise.reject(new Error(l))))}function pT(r,e,n,s,l){Ks(r,"set",{path:e.toString(),value:n,priority:s});const u=ta(r),c=We(n,s),f=Rd(r.serverSyncTree_,e),p=Z_(c,f,u),g=Ud(r),v=K_(r.serverSyncTree_,e,p,g,!0);ea(r.eventQueue_,v),r.server_.put(e.toString(),c.val(!0),(w,R)=>{const N=w==="ok";N||at("set at "+e+" failed: "+w);const M=Zn(r.serverSyncTree_,g,!N);Ut(r.eventQueue_,e,M),qc(r,l,w,R)});const _=zd(r,e);Si(r,_),Ut(r.eventQueue_,_,[])}function mT(r,e,n,s){Ks(r,"update",{path:e.toString(),value:n});let l=!0;const u=ta(r),c={};if(Je(n,(f,p)=>{l=!1,c[f]=J_(De(e,f),We(p),r.serverSyncTree_,u)}),l)Xe("update() called with empty data.  Don't do anything."),qc(r,s,"ok",void 0);else{const f=Ud(r),p=LC(r.serverSyncTree_,e,c,f);ea(r.eventQueue_,p),r.server_.merge(e.toString(),n,(g,v)=>{const _=g==="ok";_||at("update at "+e+" failed: "+g);const w=Zn(r.serverSyncTree_,f,!_),R=w.length>0?Si(r,e):e;Ut(r.eventQueue_,R,w),qc(r,s,g,v)}),Je(n,g=>{const v=zd(r,De(e,g));Si(r,v)}),Ut(r.eventQueue_,e,[])}}function gT(r){Ks(r,"onDisconnectEvents");const e=ta(r),n=kl();zc(r.onDisconnect_,de(),(l,u)=>{const c=J_(l,u,r.serverSyncTree_,e);O_(n,l,c)});let s=[];zc(n,de(),(l,u)=>{s=s.concat(Hs(r.serverSyncTree_,l,u));const c=zd(r,l);Si(r,c)}),r.onDisconnect_=kl(),Ut(r.eventQueue_,de(),s)}function _T(r,e,n){let s;te(e._path)===".info"?s=Gc(r.infoSyncTree_,e,n):s=Gc(r.serverSyncTree_,e,n),oy(r.eventQueue_,e._path,s)}function yT(r,e,n){let s;te(e._path)===".info"?s=Ll(r.infoSyncTree_,e,n):s=Ll(r.serverSyncTree_,e,n),oy(r.eventQueue_,e._path,s)}function vT(r){r.persistentConnection_&&r.persistentConnection_.interrupt(lT)}function Ks(r,...e){let n="";r.persistentConnection_&&(n=r.persistentConnection_.id+":"),Xe(n,...e)}function qc(r,e,n,s){e&&Ni(()=>{if(n==="ok")e(null);else{const l=(n||"error").toUpperCase();let u=l;s&&(u+=": "+s);const c=new Error(u);c.code=l,e(c)}})}function ay(r,e,n){return Rd(r.serverSyncTree_,e,n)||q.EMPTY_NODE}function jd(r,e=r.transactionQueueTree_){if(e||na(r,e),Ai(e)){const n=cy(r,e);L(n.length>0,"Sending zero length transaction queue"),n.every(l=>l.status===0)&&wT(r,Gs(e),n)}else ty(e)&&Jl(e,n=>{jd(r,n)})}function wT(r,e,n){const s=n.map(g=>g.currentWriteId),l=ay(r,e,s);let u=l;const c=l.hash();for(let g=0;g<n.length;g++){const v=n[g];L(v.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),v.status=1,v.retryCount++;const _=lt(e,v.path);u=u.updateChild(_,v.currentOutputSnapshotRaw)}const f=u.val(!0),p=e;r.server_.put(p.toString(),f,g=>{Ks(r,"transaction put response",{path:p.toString(),status:g});let v=[];if(g==="ok"){const _=[];for(let w=0;w<n.length;w++)n[w].status=2,v=v.concat(Zn(r.serverSyncTree_,n[w].currentWriteId)),n[w].onComplete&&_.push(()=>n[w].onComplete(null,!0,n[w].currentOutputSnapshotResolved)),n[w].unwatcher();na(r,Md(r.transactionQueueTree_,e)),jd(r,r.transactionQueueTree_),Ut(r.eventQueue_,e,v);for(let w=0;w<_.length;w++)Ni(_[w])}else{if(g==="datastale")for(let _=0;_<n.length;_++)n[_].status===3?n[_].status=4:n[_].status=0;else{at("transaction at "+p.toString()+" failed: "+g);for(let _=0;_<n.length;_++)n[_].status=4,n[_].abortReason=g}Si(r,e)}},c)}function Si(r,e){const n=uy(r,e),s=Gs(n),l=cy(r,n);return ET(r,l,s),s}function ET(r,e,n){if(e.length===0)return;const s=[];let l=[];const c=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const p=e[f],g=lt(n,p.path);let v=!1,_;if(L(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)v=!0,_=p.abortReason,l=l.concat(Zn(r.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=aT)v=!0,_="maxretry",l=l.concat(Zn(r.serverSyncTree_,p.currentWriteId,!0));else{const w=ay(r,p.path,c);p.currentInputSnapshot=w;const R=e[f].update(w.val());if(R!==void 0){Zl("transaction failed: Data returned ",R,p.path);let N=We(R);typeof R=="object"&&R!=null&&un(R,".priority")||(N=N.updatePriority(w.getPriority()));const B=p.currentWriteId,pe=ta(r),we=Z_(N,w,pe);p.currentOutputSnapshotRaw=N,p.currentOutputSnapshotResolved=we,p.currentWriteId=Ud(r),c.splice(c.indexOf(B),1),l=l.concat(K_(r.serverSyncTree_,p.path,we,p.currentWriteId,p.applyLocally)),l=l.concat(Zn(r.serverSyncTree_,B,!0))}else v=!0,_="nodata",l=l.concat(Zn(r.serverSyncTree_,p.currentWriteId,!0))}Ut(r.eventQueue_,n,l),l=[],v&&(e[f].status=2,function(w){setTimeout(w,Math.floor(0))}(e[f].unwatcher),e[f].onComplete&&(_==="nodata"?s.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):s.push(()=>e[f].onComplete(new Error(_),!1,null))))}na(r,r.transactionQueueTree_);for(let f=0;f<s.length;f++)Ni(s[f]);jd(r,r.transactionQueueTree_)}function uy(r,e){let n,s=r.transactionQueueTree_;for(n=te(e);n!==null&&Ai(s)===void 0;)s=Md(s,n),e=Ce(e),n=te(e);return s}function cy(r,e){const n=[];return dy(r,e,n),n.sort((s,l)=>s.order-l.order),n}function dy(r,e,n){const s=Ai(e);if(s)for(let l=0;l<s.length;l++)n.push(s[l]);Jl(e,l=>{dy(r,l,n)})}function na(r,e){const n=Ai(e);if(n){let s=0;for(let l=0;l<n.length;l++)n[l].status!==2&&(n[s]=n[l],s++);n.length=s,ey(e,n.length>0?n:void 0)}Jl(e,s=>{na(r,s)})}function zd(r,e){const n=Gs(uy(r,e)),s=Md(r.transactionQueueTree_,e);return qC(s,l=>{Tc(r,l)}),Tc(r,s),ny(s,l=>{Tc(r,l)}),n}function Tc(r,e){const n=Ai(e);if(n){const s=[];let l=[],u=-1;for(let c=0;c<n.length;c++)n[c].status===3||(n[c].status===1?(L(u===c-1,"All SENT items should be at beginning of queue."),u=c,n[c].status=3,n[c].abortReason="set"):(L(n[c].status===0,"Unexpected transaction status in abort"),n[c].unwatcher(),l=l.concat(Zn(r.serverSyncTree_,n[c].currentWriteId,!0)),n[c].onComplete&&s.push(n[c].onComplete.bind(null,new Error("set"),!1,null))));u===-1?ey(e,void 0):n.length=u+1,Ut(r.eventQueue_,Gs(e),l);for(let c=0;c<s.length;c++)Ni(s[c])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ST(r){let e="";const n=r.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let l=n[s];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch{}e+="/"+l}return e}function IT(r){const e={};r.charAt(0)==="?"&&(r=r.substring(1));for(const n of r.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):at(`Invalid query segment '${n}' in query '${r}'`)}return e}const tg=function(r,e){const n=CT(r),s=n.namespace;n.domain==="firebase.com"&&Tn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Tn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||xS();const l=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new m_(n.host,n.secure,s,l,e,"",s!==n.subdomain),path:new ve(n.pathString)}},CT=function(r){let e="",n="",s="",l="",u="",c=!0,f="https",p=443;if(typeof r=="string"){let g=r.indexOf("//");g>=0&&(f=r.substring(0,g-1),r=r.substring(g+2));let v=r.indexOf("/");v===-1&&(v=r.length);let _=r.indexOf("?");_===-1&&(_=r.length),e=r.substring(0,Math.min(v,_)),v<_&&(l=ST(r.substring(v,_)));const w=IT(r.substring(Math.min(r.length,_)));g=e.indexOf(":"),g>=0?(c=f==="https"||f==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const R=e.slice(0,g);if(R.toLowerCase()==="localhost")n="localhost";else if(R.split(".").length<=2)n=R;else{const N=e.indexOf(".");s=e.substring(0,N).toLowerCase(),n=e.substring(N+1),u=s}"ns"in w&&(u=w.ns)}return{host:e,port:p,domain:n,subdomain:s,secure:c,scheme:f,pathString:l,namespace:u}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(e,n,s,l){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=l}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ve(this.snapshot.exportVal())}}class kT{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return L(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e,n,s,l){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=l}get key(){return ie(this._path)?null:pd(this._path)}get ref(){return new Nn(this._repo,this._path)}get _queryIdentifier(){const e=Wm(this._queryParams),n=cd(e);return n==="{}"?"default":n}get _queryObject(){return Wm(this._queryParams)}isEqual(e){if(e=vt(e),!(e instanceof Wd))return!1;const n=this._repo===e._repo,s=md(this._path,e._path),l=this._queryIdentifier===e._queryIdentifier;return n&&s&&l}toJSON(){return this.toString()}toString(){return this._repo.toString()+pI(this._path)}}class Nn extends Wd{constructor(e,n){super(e,n,new vd,!1)}get parent(){const e=C_(this._path);return e===null?null:new Nn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class js{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ve(e),s=Yc(this.ref,e);return new js(this._node.getChild(n),s,Le)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,l)=>e(new js(l,Yc(this.ref,s),Le)))}hasChild(e){const n=new ve(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ii(r,e){return r=vt(r),r._checkNotDeleted("ref"),e!==void 0?Yc(r._root,e):r._root}function Yc(r,e){return r=vt(r),te(r._path)===null?rT("child","path",e):iy("child","path",e),new Nn(r._repo,De(r._path,e))}function RT(r){return sy("remove",r._path),Ml(r,null)}function Ml(r,e){r=vt(r),sy("set",r._path),eT("set",e,r._path);const n=new Ws;return pT(r._repo,r._path,e,null,n.wrapCallback(()=>{})),n.promise}function NT(r,e){nT("update",e,r._path);const n=new Ws;return mT(r._repo,r._path,e,n.wrapCallback(()=>{})),n.promise}function PT(r){r=vt(r);const e=new hy(()=>{}),n=new ra(e);return fT(r._repo,r,n).then(s=>new js(s,new Nn(r._repo,r._path),r._queryParams.getIndex()))}class ra{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new TT("value",this,new js(e.snapshotNode,new Nn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new kT(this,e,n):null}matches(e){return e instanceof ra?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function AT(r,e,n,s,l){const u=new hy(n,void 0),c=new ra(u);return _T(r._repo,r,c),()=>yT(r._repo,r,c)}function ng(r,e,n,s){return AT(r,"value",e)}kC(Nn);xC(Nn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT="FIREBASE_DATABASE_EMULATOR_HOST",Qc={};let OT=!1;function DT(r,e,n,s){r.repoInfo_=new m_(`${e}:${n}`,!1,r.repoInfo_.namespace,r.repoInfo_.webSocketOnly,r.repoInfo_.nodeAdmin,r.repoInfo_.persistenceKey,r.repoInfo_.includeNamespaceInQueryParams,!0),s&&(r.authTokenProvider_=s)}function LT(r,e,n,s,l){let u=s||r.options.databaseURL;u===void 0&&(r.options.projectId||Tn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Xe("Using default host for project ",r.options.projectId),u=`${r.options.projectId}-default-rtdb.firebaseio.com`);let c=tg(u,l),f=c.repoInfo,p;typeof process<"u"&&Im&&(p=Im[xT]),p?(u=`http://${p}?ns=${f.namespace}`,c=tg(u,l),f=c.repoInfo):c.repoInfo.secure;const g=new VS(r.name,r.options,e);iT("Invalid Firebase Database URL",c),ie(c.path)||Tn("Database URL must point to the root of a Firebase Database (not including a child path).");const v=bT(f,r,g,new WS(r.name,n));return new FT(v,r)}function MT(r,e){const n=Qc[e];(!n||n[r.key]!==r)&&Tn(`Database ${e}(${r.repoInfo_}) has already been deleted.`),vT(r),delete n[r.key]}function bT(r,e,n,s){let l=Qc[e.name];l||(l={},Qc[e.name]=l);let u=l[r.toURLString()];return u&&Tn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),u=new uT(r,OT,n,s),l[r.toURLString()]=u,u}class FT{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(cT(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Nn(this._repo,de())),this._rootInternal}_delete(){return this._rootInternal!==null&&(MT(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Tn("Cannot call "+e+" on a deleted database.")}}function UT(r=ad(),e){const n=Lr(r,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=eE("database");s&&jT(n,...s)}return n}function jT(r,e,n,s={}){r=vt(r),r._checkNotDeleted("useEmulator"),r._instanceStarted&&Tn("Cannot call useEmulator() after instance has already been initialized.");const l=r._repoInternal;let u;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&Tn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new fl(fl.OWNER);else if(s.mockUserToken){const c=typeof s.mockUserToken=="string"?s.mockUserToken:tE(s.mockUserToken,r.app.options.projectId);u=new fl(c)}DT(l,e,n,u)}/**
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
 */function zT(r){TS(Ri),ln(new Qt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("auth-internal"),u=e.getProvider("app-check-internal");return LT(s,l,u,n)},"PUBLIC").setMultipleInstances(!0)),Ft(Cm,Tm,r),Ft(Cm,Tm,"esm2017")}In.prototype.simpleListen=function(r,e){this.sendRequest("q",{p:r},e)};In.prototype.echo=function(r,e){this.sendRequest("echo",{d:r},e)};zT();var WT="firebase",VT="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ft(WT,VT,"app");const fy="@firebase/installations",Vd="0.6.11";/**
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
 */const py=1e4,my=`w:${Vd}`,gy="FIS_v2",BT="https://firebaseinstallations.googleapis.com/v1",$T=60*60*1e3,HT="installations",GT="Installations";/**
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
 */const KT={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ar=new Dr(HT,GT,KT);function _y(r){return r instanceof an&&r.code.includes("request-failed")}/**
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
 */function yy({projectId:r}){return`${BT}/projects/${r}/installations`}function vy(r){return{token:r.token,requestStatus:2,expiresIn:YT(r.expiresIn),creationTime:Date.now()}}async function wy(r,e){const s=(await e.json()).error;return Ar.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Ey({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function qT(r,{refreshToken:e}){const n=Ey(r);return n.append("Authorization",QT(e)),n}async function Sy(r){const e=await r();return e.status>=500&&e.status<600?r():e}function YT(r){return Number(r.replace("s","000"))}function QT(r){return`${gy} ${r}`}/**
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
 */async function XT({appConfig:r,heartbeatServiceProvider:e},{fid:n}){const s=yy(r),l=Ey(r),u=e.getImmediate({optional:!0});if(u){const g=await u.getHeartbeatsHeader();g&&l.append("x-firebase-client",g)}const c={fid:n,authVersion:gy,appId:r.appId,sdkVersion:my},f={method:"POST",headers:l,body:JSON.stringify(c)},p=await Sy(()=>fetch(s,f));if(p.ok){const g=await p.json();return{fid:g.fid||n,registrationStatus:2,refreshToken:g.refreshToken,authToken:vy(g.authToken)}}else throw await wy("Create Installation",p)}/**
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
 */function JT(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const ZT=/^[cdef][\w-]{21}$/,Xc="";function ek(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=tk(r);return ZT.test(n)?n:Xc}catch{return Xc}}function tk(r){return JT(r).substr(0,22)}/**
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
 */function ia(r){return`${r.appName}!${r.appId}`}/**
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
 */const Cy=new Map;function Ty(r,e){const n=ia(r);ky(n,e),nk(n,e)}function ky(r,e){const n=Cy.get(r);if(n)for(const s of n)s(e)}function nk(r,e){const n=rk();n&&n.postMessage({key:r,fid:e}),ik()}let kr=null;function rk(){return!kr&&"BroadcastChannel"in self&&(kr=new BroadcastChannel("[Firebase] FID Change"),kr.onmessage=r=>{ky(r.data.key,r.data.fid)}),kr}function ik(){Cy.size===0&&kr&&(kr.close(),kr=null)}/**
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
 */const sk="firebase-installations-database",ok=1,xr="firebase-installations-store";let kc=null;function Bd(){return kc||(kc=Xg(sk,ok,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(xr)}}})),kc}async function bl(r,e){const n=ia(r),l=(await Bd()).transaction(xr,"readwrite"),u=l.objectStore(xr),c=await u.get(n);return await u.put(e,n),await l.done,(!c||c.fid!==e.fid)&&Ty(r,e.fid),e}async function Ry(r){const e=ia(r),s=(await Bd()).transaction(xr,"readwrite");await s.objectStore(xr).delete(e),await s.done}async function sa(r,e){const n=ia(r),l=(await Bd()).transaction(xr,"readwrite"),u=l.objectStore(xr),c=await u.get(n),f=e(c);return f===void 0?await u.delete(n):await u.put(f,n),await l.done,f&&(!c||c.fid!==f.fid)&&Ty(r,f.fid),f}/**
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
 */async function $d(r){let e;const n=await sa(r.appConfig,s=>{const l=lk(s),u=ak(r,l);return e=u.registrationPromise,u.installationEntry});return n.fid===Xc?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function lk(r){const e=r||{fid:ek(),registrationStatus:0};return Ny(e)}function ak(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const l=Promise.reject(Ar.create("app-offline"));return{installationEntry:e,registrationPromise:l}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=uk(r,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:ck(r)}:{installationEntry:e}}async function uk(r,e){try{const n=await XT(r,e);return bl(r.appConfig,n)}catch(n){throw _y(n)&&n.customData.serverCode===409?await Ry(r.appConfig):await bl(r.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function ck(r){let e=await rg(r.appConfig);for(;e.registrationStatus===1;)await Iy(100),e=await rg(r.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await $d(r);return s||n}return e}function rg(r){return sa(r,e=>{if(!e)throw Ar.create("installation-not-found");return Ny(e)})}function Ny(r){return dk(r)?{fid:r.fid,registrationStatus:0}:r}function dk(r){return r.registrationStatus===1&&r.registrationTime+py<Date.now()}/**
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
 */async function hk({appConfig:r,heartbeatServiceProvider:e},n){const s=fk(r,n),l=qT(r,n),u=e.getImmediate({optional:!0});if(u){const g=await u.getHeartbeatsHeader();g&&l.append("x-firebase-client",g)}const c={installation:{sdkVersion:my,appId:r.appId}},f={method:"POST",headers:l,body:JSON.stringify(c)},p=await Sy(()=>fetch(s,f));if(p.ok){const g=await p.json();return vy(g)}else throw await wy("Generate Auth Token",p)}function fk(r,{fid:e}){return`${yy(r)}/${e}/authTokens:generate`}/**
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
 */async function Hd(r,e=!1){let n;const s=await sa(r.appConfig,u=>{if(!Py(u))throw Ar.create("not-registered");const c=u.authToken;if(!e&&gk(c))return u;if(c.requestStatus===1)return n=pk(r,e),u;{if(!navigator.onLine)throw Ar.create("app-offline");const f=yk(u);return n=mk(r,f),f}});return n?await n:s.authToken}async function pk(r,e){let n=await ig(r.appConfig);for(;n.authToken.requestStatus===1;)await Iy(100),n=await ig(r.appConfig);const s=n.authToken;return s.requestStatus===0?Hd(r,e):s}function ig(r){return sa(r,e=>{if(!Py(e))throw Ar.create("not-registered");const n=e.authToken;return vk(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function mk(r,e){try{const n=await hk(r,e),s=Object.assign(Object.assign({},e),{authToken:n});return await bl(r.appConfig,s),n}catch(n){if(_y(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Ry(r.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await bl(r.appConfig,s)}throw n}}function Py(r){return r!==void 0&&r.registrationStatus===2}function gk(r){return r.requestStatus===2&&!_k(r)}function _k(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+$T}function yk(r){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:e})}function vk(r){return r.requestStatus===1&&r.requestTime+py<Date.now()}/**
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
 */async function wk(r){const e=r,{installationEntry:n,registrationPromise:s}=await $d(e);return s?s.catch(console.error):Hd(e).catch(console.error),n.fid}/**
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
 */async function Ek(r,e=!1){const n=r;return await Sk(n),(await Hd(n,e)).token}async function Sk(r){const{registrationPromise:e}=await $d(r);e&&await e}/**
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
 */function Ik(r){if(!r||!r.options)throw Rc("App Configuration");if(!r.name)throw Rc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!r.options[n])throw Rc(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function Rc(r){return Ar.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay="installations",Ck="installations-internal",Tk=r=>{const e=r.getProvider("app").getImmediate(),n=Ik(e),s=Lr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},kk=r=>{const e=r.getProvider("app").getImmediate(),n=Lr(e,Ay).getImmediate();return{getId:()=>wk(n),getToken:l=>Ek(n,l)}};function Rk(){ln(new Qt(Ay,Tk,"PUBLIC")),ln(new Qt(Ck,kk,"PRIVATE"))}Rk();Ft(fy,Vd);Ft(fy,Vd,"esm2017");/**
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
 */const Fl="analytics",Nk="firebase_id",Pk="origin",Ak=60*1e3,xk="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Gd="https://www.googletagmanager.com/gtag/js";/**
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
 */const yt=new Gl("@firebase/analytics");/**
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
 */const Ok={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Rt=new Dr("analytics","Analytics",Ok);/**
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
 */function Dk(r){if(!r.startsWith(Gd)){const e=Rt.create("invalid-gtag-resource",{gtagURL:r});return yt.warn(e.message),""}return r}function xy(r){return Promise.all(r.map(e=>e.catch(n=>n)))}function Lk(r,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,e)),n}function Mk(r,e){const n=Lk("firebase-js-sdk-policy",{createScriptURL:Dk}),s=document.createElement("script"),l=`${Gd}?l=${r}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(l):l,s.async=!0,document.head.appendChild(s)}function bk(r){let e=[];return Array.isArray(window[r])?e=window[r]:window[r]=e,e}async function Fk(r,e,n,s,l,u){const c=s[l];try{if(c)await e[c];else{const p=(await xy(n)).find(g=>g.measurementId===l);p&&await e[p.appId]}}catch(f){yt.error(f)}r("config",l,u)}async function Uk(r,e,n,s,l){try{let u=[];if(l&&l.send_to){let c=l.send_to;Array.isArray(c)||(c=[c]);const f=await xy(n);for(const p of c){const g=f.find(_=>_.measurementId===p),v=g&&e[g.appId];if(v)u.push(v);else{u=[];break}}}u.length===0&&(u=Object.values(e)),await Promise.all(u),r("event",s,l||{})}catch(u){yt.error(u)}}function jk(r,e,n,s){async function l(u,...c){try{if(u==="event"){const[f,p]=c;await Uk(r,e,n,f,p)}else if(u==="config"){const[f,p]=c;await Fk(r,e,n,s,f,p)}else if(u==="consent"){const[f,p]=c;r("consent",f,p)}else if(u==="get"){const[f,p,g]=c;r("get",f,p,g)}else if(u==="set"){const[f]=c;r("set",f)}else r(u,...c)}catch(f){yt.error(f)}}return l}function zk(r,e,n,s,l){let u=function(...c){window[s].push(arguments)};return window[l]&&typeof window[l]=="function"&&(u=window[l]),window[l]=jk(u,r,e,n),{gtagCore:u,wrappedGtag:window[l]}}function Wk(r){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Gd)&&n.src.includes(r))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vk=30,Bk=1e3;class $k{constructor(e={},n=Bk){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Oy=new $k;function Hk(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function Gk(r){var e;const{appId:n,apiKey:s}=r,l={method:"GET",headers:Hk(s)},u=xk.replace("{app-id}",n),c=await fetch(u,l);if(c.status!==200&&c.status!==304){let f="";try{const p=await c.json();!((e=p.error)===null||e===void 0)&&e.message&&(f=p.error.message)}catch{}throw Rt.create("config-fetch-failed",{httpStatus:c.status,responseMessage:f})}return c.json()}async function Kk(r,e=Oy,n){const{appId:s,apiKey:l,measurementId:u}=r.options;if(!s)throw Rt.create("no-app-id");if(!l){if(u)return{measurementId:u,appId:s};throw Rt.create("no-api-key")}const c=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},f=new Qk;return setTimeout(async()=>{f.abort()},Ak),Dy({appId:s,apiKey:l,measurementId:u},c,f,e)}async function Dy(r,{throttleEndTimeMillis:e,backoffCount:n},s,l=Oy){var u;const{appId:c,measurementId:f}=r;try{await qk(s,e)}catch(p){if(f)return yt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:c,measurementId:f};throw p}try{const p=await Gk(r);return l.deleteThrottleMetadata(c),p}catch(p){const g=p;if(!Yk(g)){if(l.deleteThrottleMetadata(c),f)return yt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:c,measurementId:f};throw p}const v=Number((u=g==null?void 0:g.customData)===null||u===void 0?void 0:u.httpStatus)===503?pm(n,l.intervalMillis,Vk):pm(n,l.intervalMillis),_={throttleEndTimeMillis:Date.now()+v,backoffCount:n+1};return l.setThrottleMetadata(c,_),yt.debug(`Calling attemptFetch again in ${v} millis`),Dy(r,_,s,l)}}function qk(r,e){return new Promise((n,s)=>{const l=Math.max(e-Date.now(),0),u=setTimeout(n,l);r.addEventListener(()=>{clearTimeout(u),s(Rt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Yk(r){if(!(r instanceof an)||!r.customData)return!1;const e=Number(r.customData.httpStatus);return e===429||e===500||e===503||e===504}class Qk{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Xk(r,e,n,s,l){if(l&&l.global){r("event",n,s);return}else{const u=await e,c=Object.assign(Object.assign({},s),{send_to:u});r("event",n,c)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jk(){if(Gg())try{await Kg()}catch(r){return yt.warn(Rt.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return yt.warn(Rt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Zk(r,e,n,s,l,u,c){var f;const p=Kk(r);p.then(R=>{n[R.measurementId]=R.appId,r.options.measurementId&&R.measurementId!==r.options.measurementId&&yt.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${R.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(R=>yt.error(R)),e.push(p);const g=Jk().then(R=>{if(R)return s.getId()}),[v,_]=await Promise.all([p,g]);Wk(u)||Mk(u,v.measurementId),l("js",new Date);const w=(f=c==null?void 0:c.config)!==null&&f!==void 0?f:{};return w[Pk]="firebase",w.update=!0,_!=null&&(w[Nk]=_),l("config",v.measurementId,w),v.measurementId}/**
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
 */class e1{constructor(e){this.app=e}_delete(){return delete Rs[this.app.options.appId],Promise.resolve()}}let Rs={},sg=[];const og={};let Nc="dataLayer",t1="gtag",lg,Ly,ag=!1;function n1(){const r=[];if(Bg()&&r.push("This is a browser extension environment."),iE()||r.push("Cookies are not available."),r.length>0){const e=r.map((s,l)=>`(${l+1}) ${s}`).join(" "),n=Rt.create("invalid-analytics-context",{errorInfo:e});yt.warn(n.message)}}function r1(r,e,n){n1();const s=r.options.appId;if(!s)throw Rt.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)yt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Rt.create("no-api-key");if(Rs[s]!=null)throw Rt.create("already-exists",{id:s});if(!ag){bk(Nc);const{wrappedGtag:u,gtagCore:c}=zk(Rs,sg,og,Nc,t1);Ly=u,lg=c,ag=!0}return Rs[s]=Zk(r,sg,og,e,lg,Nc,n),new e1(r)}function i1(r=ad()){r=vt(r);const e=Lr(r,Fl);return e.isInitialized()?e.getImmediate():s1(r)}function s1(r,e={}){const n=Lr(r,Fl);if(n.isInitialized()){const l=n.getImmediate();if(As(e,n.getOptions()))return l;throw Rt.create("already-initialized")}return n.initialize({options:e})}function o1(r,e,n,s){r=vt(r),Xk(Ly,Rs[r.app.options.appId],e,n,s).catch(l=>yt.error(l))}const ug="@firebase/analytics",cg="0.10.10";function l1(){ln(new Qt(Fl,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("installations-internal").getImmediate();return r1(s,l,n)},"PUBLIC")),ln(new Qt("analytics-internal",r,"PRIVATE")),Ft(ug,cg),Ft(ug,cg,"esm2017");function r(e){try{const n=e.getProvider(Fl).getImmediate();return{logEvent:(s,l,u)=>o1(n,s,l,u)}}catch(n){throw Rt.create("interop-component-reg-failed",{reason:n})}}}l1();function Kd(r,e){var n={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(n[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(r);l<s.length;l++)e.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(r,s[l])&&(n[s[l]]=r[s[l]]);return n}function My(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const a1=My,by=new Dr("auth","Firebase",My());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul=new Gl("@firebase/auth");function u1(r,...e){Ul.logLevel<=ge.WARN&&Ul.warn(`Auth (${Ri}): ${r}`,...e)}function pl(r,...e){Ul.logLevel<=ge.ERROR&&Ul.error(`Auth (${Ri}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(r,...e){throw qd(r,...e)}function sn(r,...e){return qd(r,...e)}function Fy(r,e,n){const s=Object.assign(Object.assign({},a1()),{[e]:n});return new Dr("auth","Firebase",s).create(e,{appName:r.name})}function ir(r){return Fy(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function qd(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return by.create(r,...e)}function X(r,e,...n){if(!r)throw qd(e,...n)}function wn(r){const e="INTERNAL ASSERTION FAILED: "+r;throw pl(e),new Error(e)}function Rn(r,e){r||wn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jc(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function c1(){return dg()==="http:"||dg()==="https:"}function dg(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(c1()||Bg()||"connection"in navigator)?navigator.onLine:!0}function h1(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,n){this.shortDelay=e,this.longDelay=n,Rn(n>e,"Short delay should be less than long delay!"),this.isMobile=od()||$g()}get(){return d1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(r,e){Rn(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p1=new qs(3e4,6e4);function oa(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function xi(r,e,n,s,l={}){return jy(r,l,async()=>{let u={},c={};s&&(e==="GET"?c=s:u={body:JSON.stringify(s)});const f=ki(Object.assign({key:r.config.apiKey},c)).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const g=Object.assign({method:e,headers:p},u);return nE()||(g.referrerPolicy="no-referrer"),Uy.fetch()(Wy(r,r.config.apiHost,n,f),g)})}async function jy(r,e,n){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},f1),e);try{const l=new m1(r),u=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const c=await u.json();if("needConfirmation"in c)throw hl(r,"account-exists-with-different-credential",c);if(u.ok&&!("errorMessage"in c))return c;{const f=u.ok?c.errorMessage:c.error.message,[p,g]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw hl(r,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw hl(r,"email-already-in-use",c);if(p==="USER_DISABLED")throw hl(r,"user-disabled",c);const v=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw Fy(r,v,g);kn(r,v)}}catch(l){if(l instanceof an)throw l;kn(r,"network-request-failed",{message:String(l)})}}async function zy(r,e,n,s,l={}){const u=await xi(r,e,n,s,l);return"mfaPendingCredential"in u&&kn(r,"multi-factor-auth-required",{_serverResponse:u}),u}function Wy(r,e,n,s){const l=`${e}${n}?${s}`;return r.config.emulator?Yd(r.config,l):`${r.config.apiScheme}://${l}`}class m1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(sn(this.auth,"network-request-failed")),p1.get())})}}function hl(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const l=sn(r,e,s);return l.customData._tokenResponse=n,l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g1(r,e){return xi(r,"POST","/v1/accounts:delete",e)}async function Vy(r,e){return xi(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _1(r,e=!1){const n=vt(r),s=await n.getIdToken(e),l=Qd(s);X(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const u=typeof l.firebase=="object"?l.firebase:void 0,c=u==null?void 0:u.sign_in_provider;return{claims:l,token:s,authTime:Ns(Pc(l.auth_time)),issuedAtTime:Ns(Pc(l.iat)),expirationTime:Ns(Pc(l.exp)),signInProvider:c||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Pc(r){return Number(r)*1e3}function Qd(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return pl("JWT malformed, contained fewer than 3 sections"),null;try{const l=vl(n);return l?JSON.parse(l):(pl("Failed to decode base64 JWT payload"),null)}catch(l){return pl("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function hg(r){const e=Qd(r);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zs(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof an&&y1(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function y1({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const l=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,l)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ns(this.lastLoginAt),this.creationTime=Ns(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function jl(r){var e;const n=r.auth,s=await r.getIdToken(),l=await zs(r,Vy(n,{idToken:s}));X(l==null?void 0:l.users.length,n,"internal-error");const u=l.users[0];r._notifyReloadListener(u);const c=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?By(u.providerUserInfo):[],f=E1(r.providerData,c),p=r.isAnonymous,g=!(r.email&&u.passwordHash)&&!(f!=null&&f.length),v=p?g:!1,_={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:f,metadata:new Zc(u.createdAt,u.lastLoginAt),isAnonymous:v};Object.assign(r,_)}async function w1(r){const e=vt(r);await jl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function E1(r,e){return[...r.filter(s=>!e.some(l=>l.providerId===s.providerId)),...e]}function By(r){return r.map(e=>{var{providerId:n}=e,s=Kd(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S1(r,e){const n=await jy(r,{},async()=>{const s=ki({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:u}=r.config,c=Wy(r,l,"/v1/token",`key=${u}`),f=await r._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",Uy.fetch()(c,{method:"POST",headers:f,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function I1(r,e){return xi(r,"POST","/v2/accounts:revokeToken",oa(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=hg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:l,expiresIn:u}=await S1(e,n);this.updateTokensAndExpiration(s,l,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:l,expirationTime:u}=n,c=new pi;return s&&(X(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),l&&(X(typeof l=="string","internal-error",{appName:e}),c.accessToken=l),u&&(X(typeof u=="number","internal-error",{appName:e}),c.expirationTime=u),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new pi,this.toJSON())}_performRefresh(){return wn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(r,e){X(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class En{constructor(e){var{uid:n,auth:s,stsTokenManager:l}=e,u=Kd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new v1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=l,this.accessToken=l.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new Zc(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const n=await zs(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return _1(this,e)}reload(){return w1(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new En(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await jl(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(yn(this.auth.app))return Promise.reject(ir(this.auth));const e=await this.getIdToken();return await zs(this,g1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,l,u,c,f,p,g,v;const _=(s=n.displayName)!==null&&s!==void 0?s:void 0,w=(l=n.email)!==null&&l!==void 0?l:void 0,R=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,N=(c=n.photoURL)!==null&&c!==void 0?c:void 0,M=(f=n.tenantId)!==null&&f!==void 0?f:void 0,B=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,pe=(g=n.createdAt)!==null&&g!==void 0?g:void 0,we=(v=n.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:me,emailVerified:le,isAnonymous:Ue,providerData:Z,stsTokenManager:Q}=n;X(me&&Q,e,"internal-error");const se=pi.fromJSON(this.name,Q);X(typeof me=="string",e,"internal-error"),qn(_,e.name),qn(w,e.name),X(typeof le=="boolean",e,"internal-error"),X(typeof Ue=="boolean",e,"internal-error"),qn(R,e.name),qn(N,e.name),qn(M,e.name),qn(B,e.name),qn(pe,e.name),qn(we,e.name);const Be=new En({uid:me,auth:e,email:w,emailVerified:le,displayName:_,isAnonymous:Ue,photoURL:N,phoneNumber:R,tenantId:M,stsTokenManager:se,createdAt:pe,lastLoginAt:we});return Z&&Array.isArray(Z)&&(Be.providerData=Z.map(rt=>Object.assign({},rt))),B&&(Be._redirectEventId=B),Be}static async _fromIdTokenResponse(e,n,s=!1){const l=new pi;l.updateFromServerResponse(n);const u=new En({uid:n.localId,auth:e,stsTokenManager:l,isAnonymous:s});return await jl(u),u}static async _fromGetAccountInfoResponse(e,n,s){const l=n.users[0];X(l.localId!==void 0,"internal-error");const u=l.providerUserInfo!==void 0?By(l.providerUserInfo):[],c=!(l.email&&l.passwordHash)&&!(u!=null&&u.length),f=new pi;f.updateFromIdToken(s);const p=new En({uid:l.localId,auth:e,stsTokenManager:f,isAnonymous:c}),g={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:u,metadata:new Zc(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(u!=null&&u.length)};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg=new Map;function Sn(r){Rn(r instanceof Function,"Expected a class definition");let e=fg.get(r);return e?(Rn(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,fg.set(r,e),e)}/**
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
 */class $y{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}$y.type="NONE";const pg=$y;/**
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
 */function ml(r,e,n){return`firebase:${r}:${e}:${n}`}class mi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:l,name:u}=this.auth;this.fullUserKey=ml(this.userKey,l.apiKey,u),this.fullPersistenceKey=ml("persistence",l.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?En._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new mi(Sn(pg),e,s);const l=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=l[0]||Sn(pg);const c=ml(s,e.config.apiKey,e.name);let f=null;for(const g of n)try{const v=await g._get(c);if(v){const _=En._fromJSON(e,v);g!==u&&(f=_),u=g;break}}catch{}const p=l.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new mi(u,e,s):(u=p[0],f&&await u._set(c,f.toJSON()),await Promise.all(n.map(async g=>{if(g!==u)try{await g._remove(c)}catch{}})),new mi(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Hy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Qy(e))return"Blackberry";if(Xy(e))return"Webos";if(Gy(e))return"Safari";if((e.includes("chrome/")||Ky(e))&&!e.includes("edge/"))return"Chrome";if(Yy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Hy(r=ut()){return/firefox\//i.test(r)}function Gy(r=ut()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ky(r=ut()){return/crios\//i.test(r)}function qy(r=ut()){return/iemobile/i.test(r)}function Yy(r=ut()){return/android/i.test(r)}function Qy(r=ut()){return/blackberry/i.test(r)}function Xy(r=ut()){return/webos/i.test(r)}function Xd(r=ut()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function C1(r=ut()){var e;return Xd(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function T1(){return rE()&&document.documentMode===10}function Jy(r=ut()){return Xd(r)||Yy(r)||Xy(r)||Qy(r)||/windows phone/i.test(r)||qy(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zy(r,e=[]){let n;switch(r){case"Browser":n=mg(ut());break;case"Worker":n=`${mg(ut())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ri}/${s}`}/**
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
 */class k1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=u=>new Promise((c,f)=>{try{const p=e(u);c(p)}catch(p){f(p)}});s.onAbort=n,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const l of n)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function R1(r,e={}){return xi(r,"GET","/v2/passwordPolicy",oa(r,e))}/**
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
 */const N1=6;class P1{constructor(e){var n,s,l,u;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=c.minPasswordLength)!==null&&n!==void 0?n:N1,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(l=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&l!==void 0?l:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,l,u,c,f;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(n=p.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(l=p.containsLowercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(u=p.containsUppercaseLetter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(f=p.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),p}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),l&&(n.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let l=0;l<e.length;l++)s=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,l,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(e,n,s,l){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gg(this),this.idTokenSubscription=new gg(this),this.beforeStateQueue=new k1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=by,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Sn(n)),this._initializationPromise=this.queue(async()=>{var s,l;if(!this._deleted&&(this.persistenceManager=await mi.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Vy(this,{idToken:e}),s=await En._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(yn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let l=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,f=l==null?void 0:l._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===f)&&(p!=null&&p.user)&&(l=p.user,u=!0)}if(!l)return this.directlySetCurrentUser(null);if(!l._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(l)}catch(c){l=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return l?this.reloadAndSetCurrentUserOrClear(l):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===l._redirectEventId?this.directlySetCurrentUser(l):this.reloadAndSetCurrentUserOrClear(l)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await jl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=h1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(yn(this.app))return Promise.reject(ir(this));const n=e?vt(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return yn(this.app)?Promise.reject(ir(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return yn(this.app)?Promise.reject(ir(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Sn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await R1(this),n=new P1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Dr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await I1(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Sn(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await mi.create(this,[Sn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,l){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let c=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(f,this,"internal-error"),f.then(()=>{c||u(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,s,l);return()=>{c=!0,p()}}else{const p=e.addObserver(n);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Zy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const l=await this._getAppCheckToken();return l&&(n["X-Firebase-AppCheck"]=l),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&u1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function la(r){return vt(r)}class gg{constructor(e){this.auth=e,this.observer=null,this.addObserver=dE(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function x1(r){Jd=r}function O1(r){return Jd.loadJS(r)}function D1(){return Jd.gapiScript}function L1(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M1(r,e){const n=Lr(r,"auth");if(n.isInitialized()){const l=n.getImmediate(),u=n.getOptions();if(As(u,e??{}))return l;kn(l,"already-initialized")}return n.initialize({options:e})}function b1(r,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Sn);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function F1(r,e,n){const s=la(r);X(s._canInitEmulator,s,"emulator-config-failed"),X(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const l=!1,u=ev(e),{host:c,port:f}=U1(e),p=f===null?"":`:${f}`;s.config.emulator={url:`${u}//${c}${p}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:c,port:f,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:l})}),j1()}function ev(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function U1(r){const e=ev(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const u=l[1];return{host:u,port:_g(s.substr(u.length+1))}}else{const[u,c]=s.split(":");return{host:u,port:_g(c)}}}function _g(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function j1(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return wn("not implemented")}_getIdTokenResponse(e){return wn("not implemented")}_linkToIdToken(e,n){return wn("not implemented")}_getReauthenticationResolver(e){return wn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gi(r,e){return zy(r,"POST","/v1/accounts:signInWithIdp",oa(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z1="http://localhost";class Or extends tv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Or(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):kn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:l}=n,u=Kd(n,["providerId","signInMethod"]);if(!s||!l)return null;const c=new Or(s,l);return c.idToken=u.idToken||void 0,c.accessToken=u.accessToken||void 0,c.secret=u.secret,c.nonce=u.nonce,c.pendingToken=u.pendingToken||null,c}_getIdTokenResponse(e){const n=this.buildRequest();return gi(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,gi(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,gi(e,n)}buildRequest(){const e={requestUri:z1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ki(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ys extends nv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends Ys{constructor(){super("facebook.com")}static credential(e){return Or._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends Ys{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Or._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Qn.credential(n,s)}catch{return null}}}Qn.GOOGLE_SIGN_IN_METHOD="google.com";Qn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends Ys{constructor(){super("github.com")}static credential(e){return Or._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.GITHUB_SIGN_IN_METHOD="github.com";Xn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends Ys{constructor(){super("twitter.com")}static credential(e,n){return Or._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Jn.credential(n,s)}catch{return null}}}Jn.TWITTER_SIGN_IN_METHOD="twitter.com";Jn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W1(r,e){return zy(r,"POST","/v1/accounts:signUp",oa(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,l=!1){const u=await En._fromIdTokenResponse(e,s,l),c=yg(s);return new ar({user:u,providerId:c,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const l=yg(s);return new ar({user:e,providerId:l,_tokenResponse:s,operationType:n})}}function yg(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V1(r){var e;if(yn(r.app))return Promise.reject(ir(r));const n=la(r);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new ar({user:n.currentUser,providerId:null,operationType:"signIn"});const s=await W1(n,{returnSecureToken:!0}),l=await ar._fromIdTokenResponse(n,"signIn",s,!0);return await n._updateCurrentUser(l.user),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl extends an{constructor(e,n,s,l){var u;super(n.code,n.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,zl.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,l){return new zl(e,n,s,l)}}function rv(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?zl._fromErrorAndOperation(r,u,e,s):u})}async function B1(r,e,n=!1){const s=await zs(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return ar._forOperation(r,"link",s)}/**
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
 */async function $1(r,e,n=!1){const{auth:s}=r;if(yn(s.app))return Promise.reject(ir(s));const l="reauthenticate";try{const u=await zs(r,rv(s,l,e,r),n);X(u.idToken,s,"internal-error");const c=Qd(u.idToken);X(c,s,"internal-error");const{sub:f}=c;return X(r.uid===f,s,"user-mismatch"),ar._forOperation(r,l,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&kn(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H1(r,e,n=!1){if(yn(r.app))return Promise.reject(ir(r));const s="signIn",l=await rv(r,s,e),u=await ar._fromIdTokenResponse(r,s,l);return n||await r._updateCurrentUser(u.user),u}function G1(r,e,n,s){return vt(r).onIdTokenChanged(e,n,s)}function K1(r,e,n){return vt(r).beforeAuthStateChanged(e,n)}const Wl="__sak";/**
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
 */class iv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Wl,"1"),this.storage.removeItem(Wl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q1=1e3,Y1=10;class sv extends iv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Jy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),l=this.localCache[n];s!==l&&e(n,l,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((c,f,p)=>{this.notifyListeners(c,p)});return}const s=e.key;n?this.detachListener():this.stopPolling();const l=()=>{const c=this.storage.getItem(s);!n&&this.localCache[s]===c||this.notifyListeners(s,c)},u=this.storage.getItem(s);T1()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,Y1):l()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},q1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}sv.type="LOCAL";const Q1=sv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov extends iv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ov.type="SESSION";const lv=ov;/**
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
 */function X1(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class aa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(l=>l.isListeningto(e));if(n)return n;const s=new aa(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:l,data:u}=n.data,c=this.handlersMap[l];if(!(c!=null&&c.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const f=Array.from(c).map(async g=>g(n.origin,u)),p=await X1(f);n.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}aa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class J1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let u,c;return new Promise((f,p)=>{const g=Zd("",20);l.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},s);c={messageChannel:l,onMessage(_){const w=_;if(w.data.eventId===g)switch(w.data.status){case"ack":clearTimeout(v),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),f(w.data.response);break;default:clearTimeout(v),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(c),l.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[l.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(){return window}function Z1(r){on().location.href=r}/**
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
 */function av(){return typeof on().WorkerGlobalScope<"u"&&typeof on().importScripts=="function"}async function eR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tR(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function nR(){return av()?self:null}/**
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
 */const uv="firebaseLocalStorageDb",rR=1,Vl="firebaseLocalStorage",cv="fbase_key";class Qs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ua(r,e){return r.transaction([Vl],e?"readwrite":"readonly").objectStore(Vl)}function iR(){const r=indexedDB.deleteDatabase(uv);return new Qs(r).toPromise()}function ed(){const r=indexedDB.open(uv,rR);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Vl,{keyPath:cv})}catch(l){n(l)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Vl)?e(s):(s.close(),await iR(),e(await ed()))})})}async function vg(r,e,n){const s=ua(r,!0).put({[cv]:e,value:n});return new Qs(s).toPromise()}async function sR(r,e){const n=ua(r,!1).get(e),s=await new Qs(n).toPromise();return s===void 0?null:s.value}function wg(r,e){const n=ua(r,!0).delete(e);return new Qs(n).toPromise()}const oR=800,lR=3;class dv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ed(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>lR)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return av()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=aa._getInstance(nR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await eR(),!this.activeServiceWorker)return;this.sender=new J1(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||tR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ed();return await vg(e,Wl,"1"),await wg(e,Wl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>vg(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>sR(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>wg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const u=ua(l,!1).getAll();return new Qs(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:l,value:u}of e)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(u)&&(this.notifyListeners(l,u),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),oR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}dv.type="LOCAL";const aR=dv;new qs(3e4,6e4);/**
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
 */function uR(r,e){return e?Sn(e):(X(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class eh extends tv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return gi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return gi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function cR(r){return H1(r.auth,new eh(r),r.bypassAuthState)}function dR(r){const{auth:e,user:n}=r;return X(n,e,"internal-error"),$1(n,new eh(r),r.bypassAuthState)}async function hR(r){const{auth:e,user:n}=r;return X(n,e,"internal-error"),B1(n,new eh(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e,n,s,l,u=!1){this.auth=e,this.resolver=s,this.user=l,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:l,tenantId:u,error:c,type:f}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return cR;case"linkViaPopup":case"linkViaRedirect":return hR;case"reauthViaPopup":case"reauthViaRedirect":return dR;default:kn(this.auth,"internal-error")}}resolve(e){Rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fR=new qs(2e3,1e4);class ci extends hv{constructor(e,n,s,l,u){super(e,n,l,u),this.provider=s,this.authWindow=null,this.pollId=null,ci.currentPopupAction&&ci.currentPopupAction.cancel(),ci.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){Rn(this.filter.length===1,"Popup operations only handle one event");const e=Zd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ci.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,fR.get())};e()}}ci.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR="pendingRedirect",gl=new Map;class mR extends hv{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=gl.get(this.auth._key());if(!e){try{const s=await gR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}gl.set(this.auth._key(),e)}return this.bypassAuthState||gl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gR(r,e){const n=vR(e),s=yR(r);if(!await s._isAvailable())return!1;const l=await s._get(n)==="true";return await s._remove(n),l}function _R(r,e){gl.set(r._key(),e)}function yR(r){return Sn(r._redirectPersistence)}function vR(r){return ml(pR,r.config.apiKey,r.name)}async function wR(r,e,n=!1){if(yn(r.app))return Promise.reject(ir(r));const s=la(r),l=uR(s,e),c=await new mR(s,l,n).execute();return c&&!n&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER=10*60*1e3;class SR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!IR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!fv(e)){const l=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(sn(this.auth,l))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ER&&this.cachedEventUids.clear(),this.cachedEventUids.has(Eg(e))}saveEventToCache(e){this.cachedEventUids.add(Eg(e)),this.lastProcessedEventTime=Date.now()}}function Eg(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function fv({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function IR(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fv(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CR(r,e={}){return xi(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kR=/^https?/;async function RR(r){if(r.config.emulator)return;const{authorizedDomains:e}=await CR(r);for(const n of e)try{if(NR(n))return}catch{}kn(r,"unauthorized-domain")}function NR(r){const e=Jc(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const c=new URL(r);return c.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&c.hostname===s}if(!kR.test(n))return!1;if(TR.test(r))return s===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
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
 */const PR=new qs(3e4,6e4);function Sg(){const r=on().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function AR(r){return new Promise((e,n)=>{var s,l,u;function c(){Sg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sg(),n(sn(r,"network-request-failed"))},timeout:PR.get()})}if(!((l=(s=on().gapi)===null||s===void 0?void 0:s.iframes)===null||l===void 0)&&l.Iframe)e(gapi.iframes.getContext());else if(!((u=on().gapi)===null||u===void 0)&&u.load)c();else{const f=L1("iframefcb");return on()[f]=()=>{gapi.load?c():n(sn(r,"network-request-failed"))},O1(`${D1()}?onload=${f}`).catch(p=>n(p))}}).catch(e=>{throw _l=null,e})}let _l=null;function xR(r){return _l=_l||AR(r),_l}/**
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
 */const OR=new qs(5e3,15e3),DR="__/auth/iframe",LR="emulator/auth/iframe",MR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function FR(r){const e=r.config;X(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?Yd(e,LR):`https://${r.config.authDomain}/${DR}`,s={apiKey:e.apiKey,appName:r.name,v:Ri},l=bR.get(r.config.apiHost);l&&(s.eid=l);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${ki(s).slice(1)}`}async function UR(r){const e=await xR(r),n=on().gapi;return X(n,r,"internal-error"),e.open({where:document.body,url:FR(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:MR,dontclear:!0},s=>new Promise(async(l,u)=>{await s.restyle({setHideOnLeave:!1});const c=sn(r,"network-request-failed"),f=on().setTimeout(()=>{u(c)},OR.get());function p(){on().clearTimeout(f),l(s)}s.ping(p).then(p,()=>{u(c)})}))}/**
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
 */const jR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zR=500,WR=600,VR="_blank",BR="http://localhost";class Ig{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $R(r,e,n,s=zR,l=WR){const u=Math.max((window.screen.availHeight-l)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const p=Object.assign(Object.assign({},jR),{width:s.toString(),height:l.toString(),top:u,left:c}),g=ut().toLowerCase();n&&(f=Ky(g)?VR:n),Hy(g)&&(e=e||BR,p.scrollbars="yes");const v=Object.entries(p).reduce((w,[R,N])=>`${w}${R}=${N},`,"");if(C1(g)&&f!=="_self")return HR(e||"",f),new Ig(null);const _=window.open(e||"",f,v);X(_,r,"popup-blocked");try{_.focus()}catch{}return new Ig(_)}function HR(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const GR="__/auth/handler",KR="emulator/auth/handler",qR=encodeURIComponent("fac");async function Cg(r,e,n,s,l,u){X(r.config.authDomain,r,"auth-domain-config-required"),X(r.config.apiKey,r,"invalid-api-key");const c={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:Ri,eventId:l};if(e instanceof nv){e.setDefaultLanguage(r.languageCode),c.providerId=e.providerId||"",xc(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,_]of Object.entries({}))c[v]=_}if(e instanceof Ys){const v=e.getScopes().filter(_=>_!=="");v.length>0&&(c.scopes=v.join(","))}r.tenantId&&(c.tid=r.tenantId);const f=c;for(const v of Object.keys(f))f[v]===void 0&&delete f[v];const p=await r._getAppCheckToken(),g=p?`#${qR}=${encodeURIComponent(p)}`:"";return`${YR(r)}?${ki(f).slice(1)}${g}`}function YR({config:r}){return r.emulator?Yd(r,KR):`https://${r.authDomain}/${GR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac="webStorageSupport";class QR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=lv,this._completeRedirectFn=wR,this._overrideRedirectResult=_R}async _openPopup(e,n,s,l){var u;Rn((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const c=await Cg(e,n,s,Jc(),l);return $R(e,c,Zd())}async _openRedirect(e,n,s,l){await this._originValidation(e);const u=await Cg(e,n,s,Jc(),l);return Z1(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:l,promise:u}=this.eventManagers[n];return l?Promise.resolve(l):(Rn(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await UR(e),s=new SR(e);return n.register("authEvent",l=>(X(l==null?void 0:l.authEvent,e,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ac,{type:Ac},l=>{var u;const c=(u=l==null?void 0:l[0])===null||u===void 0?void 0:u[Ac];c!==void 0&&n(!!c),kn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=RR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Jy()||Gy()||Xd()}}const XR=QR;var Tg="@firebase/auth",kg="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZR(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function eN(r){ln(new Qt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:c,authDomain:f}=s.options;X(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:c,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zy(r)},g=new A1(s,l,u,p);return b1(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ln(new Qt("auth-internal",e=>{const n=la(e.getProvider("auth").getImmediate());return(s=>new JR(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ft(Tg,kg,ZR(r)),Ft(Tg,kg,"esm2017")}/**
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
 */const tN=5*60,nN=Vg("authIdTokenMaxAge")||tN;let Rg=null;const rN=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>nN)return;const l=n==null?void 0:n.token;Rg!==l&&(Rg=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function iN(r=ad()){const e=Lr(r,"auth");if(e.isInitialized())return e.getImmediate();const n=M1(r,{popupRedirectResolver:XR,persistence:[aR,Q1,lv]}),s=Vg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const c=rN(u.toString());K1(n,c,()=>c(n.currentUser)),G1(n,f=>c(f))}}const l=zg("auth");return l&&F1(n,`http://${l}`),n}function sN(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}x1({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=l=>{const u=sn("internal-error");u.customData=l,n(u)},s.type="text/javascript",s.charset="UTF-8",sN().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});eN("Browser");const oN={apiKey:"AIzaSyB2SlnQ03tQfpjLMcleDimnz-wI6_BSXYE",authDomain:"my-multiplayer-dbf6b.firebaseapp.com",databaseURL:"https://my-multiplayer-dbf6b-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"my-multiplayer-dbf6b",storageBucket:"my-multiplayer-dbf6b.firebasestorage.app",messagingSenderId:"3902656578",appId:"1:3902656578:web:ea447bf59037a7d25b5ddb",measurementId:"G-3DVR8Y6VSM"},th=Jg(oN);i1(th);const Ci=UT(th),td=iN(th);V1(td).then(()=>{console.log("Signed in anonymously")}).catch(r=>{console.error("Error signing in anonymously:",r)});const lN=(r,e)=>{const n=Ii(Ci,`players/${r}`);Ml(n,e).then(()=>{console.log("Data written successfully!")}).catch(s=>{console.error("Error writing data:",s)})},kt=(r,e,n=!1)=>{const s=Ii(Ci,`players/${r}`),l=n?e:{...e,modifiedAt:new Date().toISOString()};NT(s,l).then(()=>{console.log("Data updated successfully!")}).catch(u=>{console.error("Error updating data:",u)})},pv=r=>{const e=Ii(Ci,r);RT(e).then(()=>{console.log("Data removed successfully!")}).catch(n=>{console.error("Error deleting data:",n)})},aN=async(r,e,n)=>{const s=Ii(Ci,"conversations"),l={senderId:r,senderName:e,msg:n,createdAt:new Date().toISOString()};try{const u=await PT(s);if(u.exists()){const c=u.val(),f=Array.isArray(c)?[l,...c]:[l];await Ml(s,f)}else await Ml(s,[l]);console.log("Item added successfully!")}catch(u){console.error("Error adding item to array:",u)}},uN=(r,e)=>{const n=r*e,s={};for(const[f,p]of Object.entries(k0))s[f]=Math.floor(p*n);let l=[];for(const[f,p]of Object.entries(s))l=l.concat(Array(p).fill(f));for(;l.length<n;)l.push(ye.EMPTY);for(let f=l.length-1;f>0;f--){const p=Math.floor(Math.random()*(f+1));[l[f],l[p]]=[l[p],l[f]]}const u=[];let c=0;for(let f=0;f<r;f++){const p=[];for(let g=0;g<e;g++)p.push({isActive:!1,type:l[c++]});u.push(p)}return u},cN=(r,e,n,s,l)=>n==null?void 0:n.find(u=>u.x===r&&u.y===e&&u.page===s&&u.id!==l),nd=(r,e,n,s,l,u="")=>{const c=cN(r,e,n,l,u);return c!==void 0?c:r<0||r>=s[0].length||e<0||e>=s.length?2:s[e][r]===ye.WATER?0:1},dN=(r,e,n,s,l)=>{const{x:u,y:c,id:f,page:p}=r,g=nd(u,c,n,l,p,f);if(g!==2)switch(l[c][u]){case ye.HOME:kt(f,{page:"home"}),e("home");break;case ye.GAME:kt(f,{page:"forest"}),e("forest");break;case ye.FREE_WAY:kt(f,{page:"freeway"}),e("freeway");break;case ye.SELL_APPLE:kt(f,{score:0});break;default:(g===1||g===0)&&(s(),kt(f,{isTyping:!0}));break}},mv=(r,e,n,s,l,u,c)=>{const{x:f,y:p,id:g,vector:v,page:_}=r,w={ArrowUp:{dir:0,dx:0,dy:-1},ArrowRight:{dir:1,dx:1,dy:0},ArrowDown:{dir:2,dx:0,dy:1},ArrowLeft:{dir:3,dx:-1,dy:0}};if(e in w){const{dir:R,dx:N,dy:M}=w[e],B=f+N,pe=p+M,we={dir:R,vector:(v+1)%4},me={dir:R},le=nd(B,pe,u,c,_);if(le!=null&&le.id&&n){const Ue=B+N,Z=pe+M;N!==0&&(me.x=Ue),M!==0&&(me.y=Z),nd(Ue,Z,u,c,_)===1&&(kt(le==null?void 0:le.id,me,!0),we.x=B,we.y=pe)}else(le===1||le===2)&&(N!==0&&(we.x=B),M!==0&&(we.y=pe));kt(g,we)}else e==="Enter"?dN(r,s,u,l,c):e==="Escape"&&kt(g,{isTyping:!1,msg:""})};function Ng(r,e,n){return typeof r=="string"?new Date(new Date(r).toLocaleString(n,{timeZone:e})):new Date(r.toLocaleString(n,{timeZone:e}))}function hN(r,e="dd/mm/yyyy",n="",s="us"){let l=new Date(r);if(n&&(l=new Date(l.toLocaleString(s,{timeZone:n}))),l.toString()==="Invalid Date")return r;let u=""+(l.getMonth()+1),c=""+l.getDate();const f=l.getFullYear().toString();return u.length<2&&(u="0"+u),c.length<2&&(c="0"+c),e.replace("dd",c).replace("mm",u).replace("yyyy",f)}function Pg(r,e="Asia/Kolkata",n="dd/mm/yyyy"){if(!r)return;const s="en-US",l=new Date(r),u=Ng(new Date,e,s),c=Ng(l,e,s);let f=!0;function p(){var v=Math.floor((u-c)/1e3);if(v<60)return"now";let _=v/60;return _>4&&(f=!1),_<60?Math.floor(_)+" "+[Math.floor(_)>1?"minutes":"minute","ago"].join(" "):(_=v/3600,_<=24?Math.floor(_)+" "+[Math.floor(_)>1?"hours":"hour","ago"].join(" "):(_=v/86400,_<=3?Math.floor(_)+" "+[Math.floor(_)>1?"days":"day","ago"].join(" "):hN(r,n,e,s)))}return{time:p(),isActive:f}}const fN="_mycharacter_1j082_1",pN="_moveD_1j082_10",mN="_moveU_1j082_13",gN="_moveR_1j082_16",_N="_moveL_1j082_19",yN="_dragon_1j082_22",vN="_walkLeft_1j082_25",wN="_walkRight_1j082_28",EN="_name_1j082_31",SN="_msgContainer_1j082_38",IN="_msg_1j082_38",CN="_msgArrow_1j082_61",TN="_typing_1j082_72",kN="_blink_1j082_1",Sr={mycharacter:fN,moveD:pN,moveU:mN,moveR:gN,moveL:_N,dragon:yN,walkLeft:vN,walkRight:wN,name:EN,msgContainer:SN,msg:IN,msgArrow:CN,"typing-container":"_typing-container_1j082_72",typing:TN,blink:kN};function ca(r){var s,l;const{p:e,site:n=""}=r;return(e==null?void 0:e.page)!==n?null:j.jsxs("div",{style:{position:"relative"},children:[j.jsx("div",{className:`${Sr.mycharacter} ${Sr[R0[e==null?void 0:e.dir]]}`,style:{transform:`translate(${(e==null?void 0:e.x)*4}rem, ${(e==null?void 0:e.y)*4}rem)`,backgroundPosition:`${(e==null?void 0:e.vector)*-24}px 0`}}),j.jsxs("div",{className:Sr.name,style:{transform:`translate(${(e==null?void 0:e.x)*4}rem, ${(e==null?void 0:e.y)*4}rem)`},children:[e.name," ",n==="forest"&&e.score]}),(((l=(s=e==null?void 0:e.msg)==null?void 0:s.trim())==null?void 0:l.length)!==0||(e==null?void 0:e.isTyping)==!0)&&j.jsx(j.Fragment,{children:j.jsxs("div",{style:{transform:`translate(${(e==null?void 0:e.x)*4}rem, ${(e==null?void 0:e.y)*4}rem)`},className:Sr.msgContainer,children:[e.isTyping&&j.jsx("span",{className:Sr.typing,children:"....."}),j.jsx("div",{className:Sr.msg,children:e.msg}),j.jsx("div",{className:Sr.msgArrow})]})})]})}ca.propTypes={p:bt.object,site:bt.string};const Ag=r=>{let e;const n=new Set,s=(g,v)=>{const _=typeof g=="function"?g(e):g;if(!Object.is(_,e)){const w=e;e=v??(typeof _!="object"||_===null)?_:Object.assign({},e,_),n.forEach(R=>R(e,w))}},l=()=>e,f={setState:s,getState:l,getInitialState:()=>p,subscribe:g=>(n.add(g),()=>n.delete(g))},p=e=r(s,l,f);return f},RN=r=>r?Ag(r):Ag,NN=r=>r;function PN(r,e=NN){const n=nm.useSyncExternalStore(r.subscribe,()=>e(r.getState()),()=>e(r.getInitialState()));return nm.useDebugValue(n),n}const xg=r=>{const e=RN(r),n=s=>PN(e,s);return Object.assign(n,e),n},da=r=>r?xg(r):xg,ha=da(r=>({players:[],setPlayers:e=>r({players:e})})),Xs=da(r=>({myPlayer:{},setMyPlayer:e=>r({myPlayer:e}),page:"home",setPage:e=>r({page:e})})),nh=da(r=>({isTyping:!1,setIsTyping:e=>r({isTyping:e}),msg:"",setMsg:e=>r({msg:e})})),gv=da(r=>({conversations:[],setConversations:e=>r({conversations:e})}));function _v(r){const{rows:e,cols:n}=r,{myPlayer:s,setPage:l}=Xs(),{players:u}=ha(),c=_e.useRef(null),[f,p]=_e.useState(0),[g,v]=_e.useState(()=>uN(e,n)),[_,w]=_e.useState(()=>0),[R,N]=_e.useState(()=>0),[M,B]=_e.useState(()=>2),[pe,we]=_e.useState(()=>0),me=(Z,Q,se)=>{const Be=se===0||se===2,rt=Be?e:n;if(Q<0||Q>=rt)return Z;const Xt=Be?g[Q][R].type:g[_][Q].type;return Xt===ye.ROCK?Z:(Xt===ye.WATER?B(4):B(se),we(Nt=>(Nt+1)%4),Q)},le=()=>{g[_][R].type===ye.HOME&&(kt(s==null?void 0:s.id,{page:"home"}),l("home"))},Ue=Z=>{switch(console.log("##keydown",Z.key),Z.key){case"ArrowUp":w(Q=>{let se=Q-1;return console.log("##up",Q,se),me(Q,se,0)});break;case"ArrowRight":N(Q=>{let se=Q+1;return console.log("##right",Q,se),me(Q,se,1)});break;case"ArrowDown":w(Q=>{let se=Q+1;return console.log("##down",Q,se),me(Q,se,2)});break;case"ArrowLeft":N(Q=>{let se=Q-1;return console.log("##left",Q,se),me(Q,se,3)});break;case" ":break;case"Enter":le();break}};return _e.useEffect(()=>{g[_][R].type===ye.FOOD&&setTimeout(()=>{let Q=g;Q[_][R].type=ye.EMPTY,v(Q),p(se=>se+1)},400);let Z={x:R,y:_,dir:M,vector:pe,score:f};kt(s==null?void 0:s.id,Z)},[_,R]),_e.useEffect(()=>{var Z;c&&((Z=c==null?void 0:c.current)==null||Z.focus(),w((s==null?void 0:s.y)||0),N((s==null?void 0:s.x)||0),p((s==null?void 0:s.score)||0))},[]),j.jsxs("div",{tabIndex:"0",onKeyDown:Ue,ref:c,className:di.boardContainer,children:[j.jsxs("div",{children:[" Score: ",f]}),j.jsxs("div",{className:di.board,children:[u==null?void 0:u.map(Z=>j.jsx(ca,{p:Z,site:"forest"},Z.id)),g.map((Z,Q)=>j.jsx("div",{className:di.row,children:Z.map((se,Be)=>{const rt=_===Q&&R===Be;return j.jsx(Bl,{isActive:rt,type:se==null?void 0:se.type,site:"forest"},Be)})},Q))]})]})}_v.propTypes={rows:bt.number.isRequired,cols:bt.number.isRequired};const AN="_newPlayer_1dkh4_1",xN="_btnSubmit_1dkh4_10",Og={newPlayer:AN,btnSubmit:xN};function yv(r){const{user:e,setNewPlayer:n}=r,[s,l]=_e.useState(""),[u,c]=_e.useState("male"),f=()=>{if(s.trim().length===0)return;n(!1);const g={name:s,score:0,x:0,y:0,character:"",dir:2,vector:0,page:"home",msg:""};lN(e==null?void 0:e.id,g)},p=g=>{c(g.target.value)};return j.jsxs("div",{className:Og.newPlayer,children:[j.jsx("div",{children:"New player"}),j.jsx("input",{type:"text",placeholder:"Enter your name",value:s,onChange:g=>l(g.target.value)}),j.jsx("br",{}),j.jsxs("select",{value:u,onChange:p,children:[j.jsx("option",{value:"male",children:"Man"}),j.jsx("option",{value:"female",children:"Women"}),j.jsx("option",{value:"snake",children:"Snake"})]}),j.jsx("button",{className:Og.btnSubmit,onClick:f,children:"Submit"})]})}yv.propTypes={user:bt.object.isRequired,setNewPlayer:bt.func.isRequired};const Dg=[["null","wood","wood","null","null","null","null","null","null","wood","wood","null"],["null","wood","wood","empty","null","null","null","null","sellApple","wood","wood","null"],["empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty"],["empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty"],["game","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty"],["empty","empty","empty","empty","water","water","water","water","empty","empty","empty","empty"],["freeway","empty","empty","empty","water","water","water","water","empty","empty","empty","empty"],["empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty"],["grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass"]],ON="_homeContainer_10x50_1",DN="_home_10x50_1",LN="_hint_10x50_16",MN="_col_10x50_25",bN="_heading_10x50_34",FN="_row_10x50_42",UN="_activePlayer_10x50_45",jN="_recentChats_10x50_52",zN="_chat_10x50_58",WN="_msg_10x50_64",VN="_msgTime_10x50_68",BN="_senderName_10x50_74",$N="_deleteChats_10x50_79",ot={homeContainer:ON,home:DN,hint:LN,col:MN,heading:bN,row:FN,activePlayer:UN,recentChats:jN,chat:zN,msg:WN,msgTime:VN,senderName:BN,deleteChats:$N};function HN(){const{myPlayer:r,setPage:e}=Xs(),{players:n}=ha(),{isTyping:s,setIsTyping:l}=nh(),{conversations:u}=gv(),{x:c,y:f}=r,p=_e.useRef(null),[g,v]=_e.useState("Press Enter to type message, and again Enter to send it. Esc to cancel or delete. Hold shift to move other players."),_=()=>{var N;(N=p==null?void 0:p.current)==null||N.blur(),l(!0)},w=N=>{N.preventDefault(),mv(r,N.key,N.shiftKey,e,_,n,Dg)},R=()=>{pv("conversations")};return _e.useEffect(()=>{v(c===0&&f===4?"Press enter":"Press Enter to type message, and again Enter to send it. Esc to cancel or delete. Hold shift to move other players.")},[c,f]),_e.useEffect(()=>{var N;p&&((N=p==null?void 0:p.current)==null||N.focus())},[]),_e.useEffect(()=>{var N;s||(N=p==null?void 0:p.current)==null||N.focus()},[s]),j.jsxs("div",{className:ot.homeContainer,children:[j.jsxs("div",{className:ot.col,children:[j.jsxs("div",{className:ot.hint,children:["Hint: ",g]}),j.jsx("div",{className:ot.heading,children:"Active players"}),n==null?void 0:n.map(N=>{const M=Pg(N==null?void 0:N.modifiedAt);return j.jsxs("div",{className:ot.activePlayer,children:[j.jsxs("div",{className:ot.row,children:[j.jsx("span",{style:{paddingRight:"4px"},children:M!=null&&M.isActive?"🟢":"🔴"}),N.name]}),j.jsx("div",{children:M==null?void 0:M.time})]},N.id)})]}),j.jsxs("div",{className:ot.home,tabIndex:"0",onKeyDown:w,ref:p,children:[j.jsx("h2",{children:"Living area"}),j.jsxs("div",{children:[n==null?void 0:n.map(N=>j.jsx(ca,{p:N,site:"home"},N.id)),Dg.map((N,M)=>j.jsx("div",{className:di.row,children:N.map((B,pe)=>j.jsx(Bl,{type:B,site:"home"},pe))},M))]})]}),j.jsxs("div",{className:ot.col,children:[j.jsxs("div",{className:ot.heading,children:["Recent Chats"," ",j.jsx("div",{className:ot.deleteChats,onClick:R,children:"🗑️"})," "]}),j.jsx("div",{className:ot.recentChats,children:u==null?void 0:u.map((N,M)=>{var B;return j.jsxs("div",{className:ot.chat,children:[j.jsxs("div",{children:[j.jsx("span",{className:ot.senderName,children:N.senderName})," ",j.jsx("span",{className:ot.msg,children:N.msg})]}),j.jsx("div",{className:ot.msgTime,children:(B=Pg(N.createdAt))==null?void 0:B.time})]},M)})})]})]})}function vv(r){const{rows:e,cols:n}=r,s=_e.useRef(null),{myPlayer:l,setPage:u}=Xs(),{players:c}=ha(),{isTyping:f,setIsTyping:p}=nh(),[g]=_e.useState(()=>{let w=[];for(let R=0;R<e;R++){let N=[];for(let M=0;M<n;M++)N.push(ye.NULL);w.push(N)}return w[0][0]=ye.HOME,w}),v=()=>{var w;(w=s==null?void 0:s.current)==null||w.blur(),p(!0)},_=w=>{w.preventDefault(),mv(l,w.key,w.shiftKey,u,v,c,g)};return _e.useEffect(()=>{var w;f||(w=s==null?void 0:s.current)==null||w.focus()},[f]),_e.useEffect(()=>{var w;s&&((w=s==null?void 0:s.current)==null||w.focus())},[]),j.jsxs("div",{tabIndex:"0",onKeyDown:_,ref:s,className:di.board,children:[c==null?void 0:c.map(w=>j.jsx(ca,{p:w,site:"freeway"},w.id)),g.map((w,R)=>j.jsx("div",{className:di.row,children:w.map((N,M)=>j.jsx(Bl,{type:N,site:"freeway"},M))},R))]})}vv.propTypes={rows:bt.number.isRequired,cols:bt.number.isRequired};const GN="_editor_ge73_1",KN="_input_ge73_9",Lg={editor:GN,input:KN};function wv(){const{myPlayer:{id:r="",name:e=""}}=Xs(),{isTyping:n,setIsTyping:s,msg:l,setMsg:u}=nh(),c=_e.useRef(null),[f,p]=_e.useState(2),g=v=>{v.key==="Enter"&&!v.shiftKey&&(l==null?void 0:l.trim().length)>0?(v.preventDefault(),kt(r,{isTyping:!1,msg:l}),aN(r,e,l),s(!1),u(""),p(2)):v.key==="Enter"&&v.shiftKey&&f<16?p(_=>_+1):v.key==="Backspace"&&f>2?p(_=>_-1):v.key==="Escape"&&(s(!1),u(""),kt(r,{isTyping:!1}))};if(n)return j.jsx("div",{className:Lg.editor,children:j.jsx("textarea",{ref:c,value:l,autoFocus:!0,className:Lg.input,placeholder:"Type your message...",onChange:v=>{u(v.target.value)},onKeyUp:g,rows:f.toString()})})}wv.propTypes={id:bt.string};function qN(){const[r,e]=_e.useState(!0),{myPlayer:n,setMyPlayer:s,page:l,setPage:u}=Xs(),{setPlayers:c}=ha(),{setConversations:f}=gv(),p=_=>{if(!_)return;let w=[];for(const R in _)R===n.id&&(s({id:R,..._[R]}),u(_[R].page),e(!1)),w.push({id:R,..._[R]});c(w)},g=()=>{pv(`players/${n==null?void 0:n.id}`),e(!0),s({}),window.location.reload()},v=()=>{l!=="home"&&(u("home"),kt(n==null?void 0:n.id,{page:"home"}))};return _e.useEffect(()=>td.onAuthStateChanged(w=>{if(w){let R=n;R.id=w.uid,s(R)}else console.log("User signed out")}),[td]),_e.useEffect(()=>{const _=Ii(Ci,"players"),w=ng(_,R=>{p(R.val())});return()=>w()},[]),_e.useEffect(()=>{const _=Ii(Ci,"conversations"),w=ng(_,R=>{f(R.val())});return()=>w()},[]),r?j.jsx(yv,{user:n,setNewPlayer:e}):j.jsxs(j.Fragment,{children:[j.jsxs("div",{style:{padding:"1rem",fontWeight:"bolder",display:"flex",justifyContent:"space-between"},children:[j.jsx("button",{onClick:v,children:"Home"}),j.jsx("button",{onClick:g,children:"Reset"})]}),l==="home"&&j.jsx(HN,{}),l==="forest"&&j.jsx(_v,{rows:9,cols:12}),l==="freeway"&&j.jsx(vv,{rows:10,cols:10}),j.jsx(wv,{})]})}T0.createRoot(document.getElementById("root")).render(j.jsx(_e.StrictMode,{children:j.jsx(qN,{})}));
