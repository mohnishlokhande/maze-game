(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=n(l);fetch(l.href,u)}})();function Zw(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ju={exports:{}},ps={},Zu={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hp;function e0(){if(Hp)return te;Hp=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),y=Symbol.iterator;function S(I){return I===null||typeof I!="object"?null:(I=y&&I[y]||I["@@iterator"],typeof I=="function"?I:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,M={};function b(I,P,ee){this.props=I,this.context=P,this.refs=M,this.updater=ee||R}b.prototype.isReactComponent={},b.prototype.setState=function(I,P){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,P,"setState")},b.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function ae(){}ae.prototype=b.prototype;function ke(I,P,ee){this.props=I,this.context=P,this.refs=M,this.updater=ee||R}var X=ke.prototype=new ae;X.constructor=ke,x(X,b.prototype),X.isPureReactComponent=!0;var J=Array.isArray,be=Object.prototype.hasOwnProperty,ie={current:null},Z={key:!0,ref:!0,__self:!0,__source:!0};function le(I,P,ee){var se,ce={},de=null,ve=null;if(P!=null)for(se in P.ref!==void 0&&(ve=P.ref),P.key!==void 0&&(de=""+P.key),P)be.call(P,se)&&!Z.hasOwnProperty(se)&&(ce[se]=P[se]);var me=arguments.length-2;if(me===1)ce.children=ee;else if(1<me){for(var Re=Array(me),Et=0;Et<me;Et++)Re[Et]=arguments[Et+2];ce.children=Re}if(I&&I.defaultProps)for(se in me=I.defaultProps,me)ce[se]===void 0&&(ce[se]=me[se]);return{$$typeof:r,type:I,key:de,ref:ve,props:ce,_owner:ie.current}}function Be(I,P){return{$$typeof:r,type:I.type,key:P,ref:I.ref,props:I.props,_owner:I._owner}}function it(I){return typeof I=="object"&&I!==null&&I.$$typeof===r}function Yt(I){var P={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(ee){return P[ee]})}var Nt=/\/+/g;function wt(I,P){return typeof I=="object"&&I!==null&&I.key!=null?Yt(""+I.key):P.toString(36)}function Ft(I,P,ee,se,ce){var de=typeof I;(de==="undefined"||de==="boolean")&&(I=null);var ve=!1;if(I===null)ve=!0;else switch(de){case"string":case"number":ve=!0;break;case"object":switch(I.$$typeof){case r:case e:ve=!0}}if(ve)return ve=I,ce=ce(ve),I=se===""?"."+wt(ve,0):se,J(ce)?(ee="",I!=null&&(ee=I.replace(Nt,"$&/")+"/"),Ft(ce,P,ee,"",function(Et){return Et})):ce!=null&&(it(ce)&&(ce=Be(ce,ee+(!ce.key||ve&&ve.key===ce.key?"":(""+ce.key).replace(Nt,"$&/")+"/")+I)),P.push(ce)),1;if(ve=0,se=se===""?".":se+":",J(I))for(var me=0;me<I.length;me++){de=I[me];var Re=se+wt(de,me);ve+=Ft(de,P,ee,Re,ce)}else if(Re=S(I),typeof Re=="function")for(I=Re.call(I),me=0;!(de=I.next()).done;)de=de.value,Re=se+wt(de,me++),ve+=Ft(de,P,ee,Re,ce);else if(de==="object")throw P=String(I),Error("Objects are not valid as a React child (found: "+(P==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":P)+"). If you meant to render a collection of children, use an array instead.");return ve}function Xt(I,P,ee){if(I==null)return I;var se=[],ce=0;return Ft(I,se,"","",function(de){return P.call(ee,de,ce++)}),se}function ut(I){if(I._status===-1){var P=I._result;P=P(),P.then(function(ee){(I._status===0||I._status===-1)&&(I._status=1,I._result=ee)},function(ee){(I._status===0||I._status===-1)&&(I._status=2,I._result=ee)}),I._status===-1&&(I._status=0,I._result=P)}if(I._status===1)return I._result.default;throw I._result}var xe={current:null},F={transition:null},q={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:F,ReactCurrentOwner:ie};function j(){throw Error("act(...) is not supported in production builds of React.")}return te.Children={map:Xt,forEach:function(I,P,ee){Xt(I,function(){P.apply(this,arguments)},ee)},count:function(I){var P=0;return Xt(I,function(){P++}),P},toArray:function(I){return Xt(I,function(P){return P})||[]},only:function(I){if(!it(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},te.Component=b,te.Fragment=n,te.Profiler=l,te.PureComponent=ke,te.StrictMode=s,te.Suspense=p,te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,te.act=j,te.cloneElement=function(I,P,ee){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var se=x({},I.props),ce=I.key,de=I.ref,ve=I._owner;if(P!=null){if(P.ref!==void 0&&(de=P.ref,ve=ie.current),P.key!==void 0&&(ce=""+P.key),I.type&&I.type.defaultProps)var me=I.type.defaultProps;for(Re in P)be.call(P,Re)&&!Z.hasOwnProperty(Re)&&(se[Re]=P[Re]===void 0&&me!==void 0?me[Re]:P[Re])}var Re=arguments.length-2;if(Re===1)se.children=ee;else if(1<Re){me=Array(Re);for(var Et=0;Et<Re;Et++)me[Et]=arguments[Et+2];se.children=me}return{$$typeof:r,type:I.type,key:ce,ref:de,props:se,_owner:ve}},te.createContext=function(I){return I={$$typeof:d,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:u,_context:I},I.Consumer=I},te.createElement=le,te.createFactory=function(I){var P=le.bind(null,I);return P.type=I,P},te.createRef=function(){return{current:null}},te.forwardRef=function(I){return{$$typeof:f,render:I}},te.isValidElement=it,te.lazy=function(I){return{$$typeof:w,_payload:{_status:-1,_result:I},_init:ut}},te.memo=function(I,P){return{$$typeof:g,type:I,compare:P===void 0?null:P}},te.startTransition=function(I){var P=F.transition;F.transition={};try{I()}finally{F.transition=P}},te.unstable_act=j,te.useCallback=function(I,P){return xe.current.useCallback(I,P)},te.useContext=function(I){return xe.current.useContext(I)},te.useDebugValue=function(){},te.useDeferredValue=function(I){return xe.current.useDeferredValue(I)},te.useEffect=function(I,P){return xe.current.useEffect(I,P)},te.useId=function(){return xe.current.useId()},te.useImperativeHandle=function(I,P,ee){return xe.current.useImperativeHandle(I,P,ee)},te.useInsertionEffect=function(I,P){return xe.current.useInsertionEffect(I,P)},te.useLayoutEffect=function(I,P){return xe.current.useLayoutEffect(I,P)},te.useMemo=function(I,P){return xe.current.useMemo(I,P)},te.useReducer=function(I,P,ee){return xe.current.useReducer(I,P,ee)},te.useRef=function(I){return xe.current.useRef(I)},te.useState=function(I){return xe.current.useState(I)},te.useSyncExternalStore=function(I,P,ee){return xe.current.useSyncExternalStore(I,P,ee)},te.useTransition=function(){return xe.current.useTransition()},te.version="18.3.1",te}var qp;function Qc(){return qp||(qp=1,Zu.exports=e0()),Zu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gp;function t0(){if(Gp)return ps;Gp=1;var r=Qc(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(f,p,g){var w,y={},S=null,R=null;g!==void 0&&(S=""+g),p.key!==void 0&&(S=""+p.key),p.ref!==void 0&&(R=p.ref);for(w in p)s.call(p,w)&&!u.hasOwnProperty(w)&&(y[w]=p[w]);if(f&&f.defaultProps)for(w in p=f.defaultProps,p)y[w]===void 0&&(y[w]=p[w]);return{$$typeof:e,type:f,key:S,ref:R,props:y,_owner:l.current}}return ps.Fragment=n,ps.jsx=d,ps.jsxs=d,ps}var Kp;function n0(){return Kp||(Kp=1,Ju.exports=t0()),Ju.exports}var G=n0(),fe=Qc(),nl={},ec={exports:{}},mt={},tc={exports:{}},nc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp;function r0(){return Qp||(Qp=1,function(r){function e(F,q){var j=F.length;F.push(q);e:for(;0<j;){var I=j-1>>>1,P=F[I];if(0<l(P,q))F[I]=q,F[j]=P,j=I;else break e}}function n(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var q=F[0],j=F.pop();if(j!==q){F[0]=j;e:for(var I=0,P=F.length,ee=P>>>1;I<ee;){var se=2*(I+1)-1,ce=F[se],de=se+1,ve=F[de];if(0>l(ce,j))de<P&&0>l(ve,ce)?(F[I]=ve,F[de]=j,I=de):(F[I]=ce,F[se]=j,I=se);else if(de<P&&0>l(ve,j))F[I]=ve,F[de]=j,I=de;else break e}}return q}function l(F,q){var j=F.sortIndex-q.sortIndex;return j!==0?j:F.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var d=Date,f=d.now();r.unstable_now=function(){return d.now()-f}}var p=[],g=[],w=1,y=null,S=3,R=!1,x=!1,M=!1,b=typeof setTimeout=="function"?setTimeout:null,ae=typeof clearTimeout=="function"?clearTimeout:null,ke=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function X(F){for(var q=n(g);q!==null;){if(q.callback===null)s(g);else if(q.startTime<=F)s(g),q.sortIndex=q.expirationTime,e(p,q);else break;q=n(g)}}function J(F){if(M=!1,X(F),!x)if(n(p)!==null)x=!0,ut(be);else{var q=n(g);q!==null&&xe(J,q.startTime-F)}}function be(F,q){x=!1,M&&(M=!1,ae(le),le=-1),R=!0;var j=S;try{for(X(q),y=n(p);y!==null&&(!(y.expirationTime>q)||F&&!Yt());){var I=y.callback;if(typeof I=="function"){y.callback=null,S=y.priorityLevel;var P=I(y.expirationTime<=q);q=r.unstable_now(),typeof P=="function"?y.callback=P:y===n(p)&&s(p),X(q)}else s(p);y=n(p)}if(y!==null)var ee=!0;else{var se=n(g);se!==null&&xe(J,se.startTime-q),ee=!1}return ee}finally{y=null,S=j,R=!1}}var ie=!1,Z=null,le=-1,Be=5,it=-1;function Yt(){return!(r.unstable_now()-it<Be)}function Nt(){if(Z!==null){var F=r.unstable_now();it=F;var q=!0;try{q=Z(!0,F)}finally{q?wt():(ie=!1,Z=null)}}else ie=!1}var wt;if(typeof ke=="function")wt=function(){ke(Nt)};else if(typeof MessageChannel<"u"){var Ft=new MessageChannel,Xt=Ft.port2;Ft.port1.onmessage=Nt,wt=function(){Xt.postMessage(null)}}else wt=function(){b(Nt,0)};function ut(F){Z=F,ie||(ie=!0,wt())}function xe(F,q){le=b(function(){F(r.unstable_now())},q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_continueExecution=function(){x||R||(x=!0,ut(be))},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Be=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_getFirstCallbackNode=function(){return n(p)},r.unstable_next=function(F){switch(S){case 1:case 2:case 3:var q=3;break;default:q=S}var j=S;S=q;try{return F()}finally{S=j}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(F,q){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var j=S;S=F;try{return q()}finally{S=j}},r.unstable_scheduleCallback=function(F,q,j){var I=r.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?I+j:I):j=I,F){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=j+P,F={id:w++,callback:q,priorityLevel:F,startTime:j,expirationTime:P,sortIndex:-1},j>I?(F.sortIndex=j,e(g,F),n(p)===null&&F===n(g)&&(M?(ae(le),le=-1):M=!0,xe(J,j-I))):(F.sortIndex=P,e(p,F),x||R||(x=!0,ut(be))),F},r.unstable_shouldYield=Yt,r.unstable_wrapCallback=function(F){var q=S;return function(){var j=S;S=q;try{return F.apply(this,arguments)}finally{S=j}}}}(nc)),nc}var Yp;function i0(){return Yp||(Yp=1,tc.exports=r0()),tc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xp;function s0(){if(Xp)return mt;Xp=1;var r=Qc(),e=i0();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function u(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(l[t]=i,t=0;t<i.length;t++)s.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},y={};function S(t){return p.call(y,t)?!0:p.call(w,t)?!1:g.test(t)?y[t]=!0:(w[t]=!0,!1)}function R(t,i,o,a){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return a?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function x(t,i,o,a){if(i===null||typeof i>"u"||R(t,i,o,a))return!0;if(a)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function M(t,i,o,a,c,h,m){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=a,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=m}var b={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){b[t]=new M(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];b[i]=new M(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){b[t]=new M(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){b[t]=new M(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){b[t]=new M(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){b[t]=new M(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){b[t]=new M(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){b[t]=new M(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){b[t]=new M(t,5,!1,t.toLowerCase(),null,!1,!1)});var ae=/[\-:]([a-z])/g;function ke(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(ae,ke);b[i]=new M(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(ae,ke);b[i]=new M(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(ae,ke);b[i]=new M(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){b[t]=new M(t,1,!1,t.toLowerCase(),null,!1,!1)}),b.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){b[t]=new M(t,1,!1,t.toLowerCase(),null,!0,!0)});function X(t,i,o,a){var c=b.hasOwnProperty(i)?b[i]:null;(c!==null?c.type!==0:a||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(x(i,o,c,a)&&(o=null),a||c===null?S(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):c.mustUseProperty?t[c.propertyName]=o===null?c.type===3?!1:"":o:(i=c.attributeName,a=c.attributeNamespace,o===null?t.removeAttribute(i):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,a?t.setAttributeNS(a,i,o):t.setAttribute(i,o))))}var J=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,be=Symbol.for("react.element"),ie=Symbol.for("react.portal"),Z=Symbol.for("react.fragment"),le=Symbol.for("react.strict_mode"),Be=Symbol.for("react.profiler"),it=Symbol.for("react.provider"),Yt=Symbol.for("react.context"),Nt=Symbol.for("react.forward_ref"),wt=Symbol.for("react.suspense"),Ft=Symbol.for("react.suspense_list"),Xt=Symbol.for("react.memo"),ut=Symbol.for("react.lazy"),xe=Symbol.for("react.offscreen"),F=Symbol.iterator;function q(t){return t===null||typeof t!="object"?null:(t=F&&t[F]||t["@@iterator"],typeof t=="function"?t:null)}var j=Object.assign,I;function P(t){if(I===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+t}var ee=!1;function se(t,i){if(!t||ee)return"";ee=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(k){var a=k}Reflect.construct(t,[],i)}else{try{i.call()}catch(k){a=k}t.call(i.prototype)}else{try{throw Error()}catch(k){a=k}t()}}catch(k){if(k&&a&&typeof k.stack=="string"){for(var c=k.stack.split(`
`),h=a.stack.split(`
`),m=c.length-1,_=h.length-1;1<=m&&0<=_&&c[m]!==h[_];)_--;for(;1<=m&&0<=_;m--,_--)if(c[m]!==h[_]){if(m!==1||_!==1)do if(m--,_--,0>_||c[m]!==h[_]){var v=`
`+c[m].replace(" at new "," at ");return t.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",t.displayName)),v}while(1<=m&&0<=_);break}}}finally{ee=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?P(t):""}function ce(t){switch(t.tag){case 5:return P(t.type);case 16:return P("Lazy");case 13:return P("Suspense");case 19:return P("SuspenseList");case 0:case 2:case 15:return t=se(t.type,!1),t;case 11:return t=se(t.type.render,!1),t;case 1:return t=se(t.type,!0),t;default:return""}}function de(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Z:return"Fragment";case ie:return"Portal";case Be:return"Profiler";case le:return"StrictMode";case wt:return"Suspense";case Ft:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Yt:return(t.displayName||"Context")+".Consumer";case it:return(t._context.displayName||"Context")+".Provider";case Nt:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Xt:return i=t.displayName||null,i!==null?i:de(t.type)||"Memo";case ut:i=t._payload,t=t._init;try{return de(t(i))}catch{}}return null}function ve(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return de(i);case 8:return i===le?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function me(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Re(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Et(t){var i=Re(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),a=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(m){a=""+m,h.call(this,m)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(m){a=""+m},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Hs(t){t._valueTracker||(t._valueTracker=Et(t))}function Yd(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),a="";return t&&(a=Re(t)?t.checked?"true":"false":t.value),t=a,t!==o?(i.setValue(t),!0):!1}function qs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function sa(t,i){var o=i.checked;return j({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function Xd(t,i){var o=i.defaultValue==null?"":i.defaultValue,a=i.checked!=null?i.checked:i.defaultChecked;o=me(i.value!=null?i.value:o),t._wrapperState={initialChecked:a,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Jd(t,i){i=i.checked,i!=null&&X(t,"checked",i,!1)}function oa(t,i){Jd(t,i);var o=me(i.value),a=i.type;if(o!=null)a==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(a==="submit"||a==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?la(t,i.type,o):i.hasOwnProperty("defaultValue")&&la(t,i.type,me(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Zd(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var a=i.type;if(!(a!=="submit"&&a!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function la(t,i,o){(i!=="number"||qs(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Pi=Array.isArray;function Mr(t,i,o,a){if(t=t.options,i){i={};for(var c=0;c<o.length;c++)i["$"+o[c]]=!0;for(o=0;o<t.length;o++)c=i.hasOwnProperty("$"+t[o].value),t[o].selected!==c&&(t[o].selected=c),c&&a&&(t[o].defaultSelected=!0)}else{for(o=""+me(o),i=null,c=0;c<t.length;c++){if(t[c].value===o){t[c].selected=!0,a&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function aa(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return j({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function eh(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(Pi(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:me(o)}}function th(t,i){var o=me(i.value),a=me(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),a!=null&&(t.defaultValue=""+a)}function nh(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function rh(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ua(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?rh(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Gs,ih=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,a,c){MSApp.execUnsafeLocalFunction(function(){return t(i,o,a,c)})}:t}(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Gs=Gs||document.createElement("div"),Gs.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Gs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Ai(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Oi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rv=["Webkit","ms","Moz","O"];Object.keys(Oi).forEach(function(t){rv.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Oi[i]=Oi[t]})});function sh(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Oi.hasOwnProperty(t)&&Oi[t]?(""+i).trim():i+"px"}function oh(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var a=o.indexOf("--")===0,c=sh(o,i[o],a);o==="float"&&(o="cssFloat"),a?t.setProperty(o,c):t[o]=c}}var iv=j({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ca(t,i){if(i){if(iv[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function da(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ha=null;function fa(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pa=null,br=null,Fr=null;function lh(t){if(t=Zi(t)){if(typeof pa!="function")throw Error(n(280));var i=t.stateNode;i&&(i=_o(i),pa(t.stateNode,t.type,i))}}function ah(t){br?Fr?Fr.push(t):Fr=[t]:br=t}function uh(){if(br){var t=br,i=Fr;if(Fr=br=null,lh(t),i)for(t=0;t<i.length;t++)lh(i[t])}}function ch(t,i){return t(i)}function dh(){}var ma=!1;function hh(t,i,o){if(ma)return t(i,o);ma=!0;try{return ch(t,i,o)}finally{ma=!1,(br!==null||Fr!==null)&&(dh(),uh())}}function xi(t,i){var o=t.stateNode;if(o===null)return null;var a=_o(o);if(a===null)return null;o=a[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var ga=!1;if(f)try{var Di={};Object.defineProperty(Di,"passive",{get:function(){ga=!0}}),window.addEventListener("test",Di,Di),window.removeEventListener("test",Di,Di)}catch{ga=!1}function sv(t,i,o,a,c,h,m,_,v){var k=Array.prototype.slice.call(arguments,3);try{i.apply(o,k)}catch(A){this.onError(A)}}var Li=!1,Ks=null,Qs=!1,_a=null,ov={onError:function(t){Li=!0,Ks=t}};function lv(t,i,o,a,c,h,m,_,v){Li=!1,Ks=null,sv.apply(ov,arguments)}function av(t,i,o,a,c,h,m,_,v){if(lv.apply(this,arguments),Li){if(Li){var k=Ks;Li=!1,Ks=null}else throw Error(n(198));Qs||(Qs=!0,_a=k)}}function or(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,i.flags&4098&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function fh(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function ph(t){if(or(t)!==t)throw Error(n(188))}function uv(t){var i=t.alternate;if(!i){if(i=or(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,a=i;;){var c=o.return;if(c===null)break;var h=c.alternate;if(h===null){if(a=c.return,a!==null){o=a;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===o)return ph(c),t;if(h===a)return ph(c),i;h=h.sibling}throw Error(n(188))}if(o.return!==a.return)o=c,a=h;else{for(var m=!1,_=c.child;_;){if(_===o){m=!0,o=c,a=h;break}if(_===a){m=!0,a=c,o=h;break}_=_.sibling}if(!m){for(_=h.child;_;){if(_===o){m=!0,o=h,a=c;break}if(_===a){m=!0,a=h,o=c;break}_=_.sibling}if(!m)throw Error(n(189))}}if(o.alternate!==a)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function mh(t){return t=uv(t),t!==null?gh(t):null}function gh(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=gh(t);if(i!==null)return i;t=t.sibling}return null}var _h=e.unstable_scheduleCallback,yh=e.unstable_cancelCallback,cv=e.unstable_shouldYield,dv=e.unstable_requestPaint,Fe=e.unstable_now,hv=e.unstable_getCurrentPriorityLevel,ya=e.unstable_ImmediatePriority,vh=e.unstable_UserBlockingPriority,Ys=e.unstable_NormalPriority,fv=e.unstable_LowPriority,wh=e.unstable_IdlePriority,Xs=null,Jt=null;function pv(t){if(Jt&&typeof Jt.onCommitFiberRoot=="function")try{Jt.onCommitFiberRoot(Xs,t,void 0,(t.current.flags&128)===128)}catch{}}var Ut=Math.clz32?Math.clz32:_v,mv=Math.log,gv=Math.LN2;function _v(t){return t>>>=0,t===0?32:31-(mv(t)/gv|0)|0}var Js=64,Zs=4194304;function Mi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function eo(t,i){var o=t.pendingLanes;if(o===0)return 0;var a=0,c=t.suspendedLanes,h=t.pingedLanes,m=o&268435455;if(m!==0){var _=m&~c;_!==0?a=Mi(_):(h&=m,h!==0&&(a=Mi(h)))}else m=o&~c,m!==0?a=Mi(m):h!==0&&(a=Mi(h));if(a===0)return 0;if(i!==0&&i!==a&&!(i&c)&&(c=a&-a,h=i&-i,c>=h||c===16&&(h&4194240)!==0))return i;if(a&4&&(a|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=a;0<i;)o=31-Ut(i),c=1<<o,a|=t[o],i&=~c;return a}function yv(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vv(t,i){for(var o=t.suspendedLanes,a=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var m=31-Ut(h),_=1<<m,v=c[m];v===-1?(!(_&o)||_&a)&&(c[m]=yv(_,i)):v<=i&&(t.expiredLanes|=_),h&=~_}}function va(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Eh(){var t=Js;return Js<<=1,!(Js&4194240)&&(Js=64),t}function wa(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function bi(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Ut(i),t[i]=o}function wv(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var a=t.eventTimes;for(t=t.expirationTimes;0<o;){var c=31-Ut(o),h=1<<c;i[c]=0,a[c]=-1,t[c]=-1,o&=~h}}function Ea(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var a=31-Ut(o),c=1<<a;c&i|t[a]&i&&(t[a]|=i),o&=~c}}var ge=0;function Sh(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ih,Sa,Ch,Th,kh,Ia=!1,to=[],Rn=null,Nn=null,Pn=null,Fi=new Map,Ui=new Map,An=[],Ev="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rh(t,i){switch(t){case"focusin":case"focusout":Rn=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":Pn=null;break;case"pointerover":case"pointerout":Fi.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ui.delete(i.pointerId)}}function zi(t,i,o,a,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:a,nativeEvent:h,targetContainers:[c]},i!==null&&(i=Zi(i),i!==null&&Sa(i)),t):(t.eventSystemFlags|=a,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function Sv(t,i,o,a,c){switch(i){case"focusin":return Rn=zi(Rn,t,i,o,a,c),!0;case"dragenter":return Nn=zi(Nn,t,i,o,a,c),!0;case"mouseover":return Pn=zi(Pn,t,i,o,a,c),!0;case"pointerover":var h=c.pointerId;return Fi.set(h,zi(Fi.get(h)||null,t,i,o,a,c)),!0;case"gotpointercapture":return h=c.pointerId,Ui.set(h,zi(Ui.get(h)||null,t,i,o,a,c)),!0}return!1}function Nh(t){var i=lr(t.target);if(i!==null){var o=or(i);if(o!==null){if(i=o.tag,i===13){if(i=fh(o),i!==null){t.blockedOn=i,kh(t.priority,function(){Ch(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function no(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Ta(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var a=new o.constructor(o.type,o);ha=a,o.target.dispatchEvent(a),ha=null}else return i=Zi(o),i!==null&&Sa(i),t.blockedOn=o,!1;i.shift()}return!0}function Ph(t,i,o){no(t)&&o.delete(i)}function Iv(){Ia=!1,Rn!==null&&no(Rn)&&(Rn=null),Nn!==null&&no(Nn)&&(Nn=null),Pn!==null&&no(Pn)&&(Pn=null),Fi.forEach(Ph),Ui.forEach(Ph)}function ji(t,i){t.blockedOn===i&&(t.blockedOn=null,Ia||(Ia=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Iv)))}function Wi(t){function i(c){return ji(c,t)}if(0<to.length){ji(to[0],t);for(var o=1;o<to.length;o++){var a=to[o];a.blockedOn===t&&(a.blockedOn=null)}}for(Rn!==null&&ji(Rn,t),Nn!==null&&ji(Nn,t),Pn!==null&&ji(Pn,t),Fi.forEach(i),Ui.forEach(i),o=0;o<An.length;o++)a=An[o],a.blockedOn===t&&(a.blockedOn=null);for(;0<An.length&&(o=An[0],o.blockedOn===null);)Nh(o),o.blockedOn===null&&An.shift()}var Ur=J.ReactCurrentBatchConfig,ro=!0;function Cv(t,i,o,a){var c=ge,h=Ur.transition;Ur.transition=null;try{ge=1,Ca(t,i,o,a)}finally{ge=c,Ur.transition=h}}function Tv(t,i,o,a){var c=ge,h=Ur.transition;Ur.transition=null;try{ge=4,Ca(t,i,o,a)}finally{ge=c,Ur.transition=h}}function Ca(t,i,o,a){if(ro){var c=Ta(t,i,o,a);if(c===null)Ba(t,i,a,io,o),Rh(t,a);else if(Sv(c,t,i,o,a))a.stopPropagation();else if(Rh(t,a),i&4&&-1<Ev.indexOf(t)){for(;c!==null;){var h=Zi(c);if(h!==null&&Ih(h),h=Ta(t,i,o,a),h===null&&Ba(t,i,a,io,o),h===c)break;c=h}c!==null&&a.stopPropagation()}else Ba(t,i,a,null,o)}}var io=null;function Ta(t,i,o,a){if(io=null,t=fa(a),t=lr(t),t!==null)if(i=or(t),i===null)t=null;else if(o=i.tag,o===13){if(t=fh(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return io=t,null}function Ah(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hv()){case ya:return 1;case vh:return 4;case Ys:case fv:return 16;case wh:return 536870912;default:return 16}default:return 16}}var On=null,ka=null,so=null;function Oh(){if(so)return so;var t,i=ka,o=i.length,a,c="value"in On?On.value:On.textContent,h=c.length;for(t=0;t<o&&i[t]===c[t];t++);var m=o-t;for(a=1;a<=m&&i[o-a]===c[h-a];a++);return so=c.slice(t,1<a?1-a:void 0)}function oo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function lo(){return!0}function xh(){return!1}function St(t){function i(o,a,c,h,m){this._reactName=o,this._targetInst=c,this.type=a,this.nativeEvent=h,this.target=m,this.currentTarget=null;for(var _ in t)t.hasOwnProperty(_)&&(o=t[_],this[_]=o?o(h):h[_]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?lo:xh,this.isPropagationStopped=xh,this}return j(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=lo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=lo)},persist:function(){},isPersistent:lo}),i}var zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ra=St(zr),Bi=j({},zr,{view:0,detail:0}),kv=St(Bi),Na,Pa,Vi,ao=j({},Bi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Oa,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vi&&(Vi&&t.type==="mousemove"?(Na=t.screenX-Vi.screenX,Pa=t.screenY-Vi.screenY):Pa=Na=0,Vi=t),Na)},movementY:function(t){return"movementY"in t?t.movementY:Pa}}),Dh=St(ao),Rv=j({},ao,{dataTransfer:0}),Nv=St(Rv),Pv=j({},Bi,{relatedTarget:0}),Aa=St(Pv),Av=j({},zr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ov=St(Av),xv=j({},zr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Dv=St(xv),Lv=j({},zr,{data:0}),Lh=St(Lv),Mv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uv(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Fv[t])?!!i[t]:!1}function Oa(){return Uv}var zv=j({},Bi,{key:function(t){if(t.key){var i=Mv[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=oo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?bv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Oa,charCode:function(t){return t.type==="keypress"?oo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?oo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),jv=St(zv),Wv=j({},ao,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mh=St(Wv),Bv=j({},Bi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Oa}),Vv=St(Bv),$v=j({},zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hv=St($v),qv=j({},ao,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Gv=St(qv),Kv=[9,13,27,32],xa=f&&"CompositionEvent"in window,$i=null;f&&"documentMode"in document&&($i=document.documentMode);var Qv=f&&"TextEvent"in window&&!$i,bh=f&&(!xa||$i&&8<$i&&11>=$i),Fh=" ",Uh=!1;function zh(t,i){switch(t){case"keyup":return Kv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var jr=!1;function Yv(t,i){switch(t){case"compositionend":return jh(i);case"keypress":return i.which!==32?null:(Uh=!0,Fh);case"textInput":return t=i.data,t===Fh&&Uh?null:t;default:return null}}function Xv(t,i){if(jr)return t==="compositionend"||!xa&&zh(t,i)?(t=Oh(),so=ka=On=null,jr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return bh&&i.locale!=="ko"?null:i.data;default:return null}}var Jv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wh(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Jv[t.type]:i==="textarea"}function Bh(t,i,o,a){ah(a),i=po(i,"onChange"),0<i.length&&(o=new Ra("onChange","change",null,o,a),t.push({event:o,listeners:i}))}var Hi=null,qi=null;function Zv(t){lf(t,0)}function uo(t){var i=Hr(t);if(Yd(i))return t}function ew(t,i){if(t==="change")return i}var Vh=!1;if(f){var Da;if(f){var La="oninput"in document;if(!La){var $h=document.createElement("div");$h.setAttribute("oninput","return;"),La=typeof $h.oninput=="function"}Da=La}else Da=!1;Vh=Da&&(!document.documentMode||9<document.documentMode)}function Hh(){Hi&&(Hi.detachEvent("onpropertychange",qh),qi=Hi=null)}function qh(t){if(t.propertyName==="value"&&uo(qi)){var i=[];Bh(i,qi,t,fa(t)),hh(Zv,i)}}function tw(t,i,o){t==="focusin"?(Hh(),Hi=i,qi=o,Hi.attachEvent("onpropertychange",qh)):t==="focusout"&&Hh()}function nw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return uo(qi)}function rw(t,i){if(t==="click")return uo(i)}function iw(t,i){if(t==="input"||t==="change")return uo(i)}function sw(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var zt=typeof Object.is=="function"?Object.is:sw;function Gi(t,i){if(zt(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),a=Object.keys(i);if(o.length!==a.length)return!1;for(a=0;a<o.length;a++){var c=o[a];if(!p.call(i,c)||!zt(t[c],i[c]))return!1}return!0}function Gh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Kh(t,i){var o=Gh(t);t=0;for(var a;o;){if(o.nodeType===3){if(a=t+o.textContent.length,t<=i&&a>=i)return{node:o,offset:i-t};t=a}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Gh(o)}}function Qh(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Qh(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Yh(){for(var t=window,i=qs();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=qs(t.document)}return i}function Ma(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function ow(t){var i=Yh(),o=t.focusedElem,a=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&Qh(o.ownerDocument.documentElement,o)){if(a!==null&&Ma(o)){if(i=a.start,t=a.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=o.textContent.length,h=Math.min(a.start,c);a=a.end===void 0?h:Math.min(a.end,c),!t.extend&&h>a&&(c=a,a=h,h=c),c=Kh(o,h);var m=Kh(o,a);c&&m&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==m.node||t.focusOffset!==m.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),h>a?(t.addRange(i),t.extend(m.node,m.offset)):(i.setEnd(m.node,m.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var lw=f&&"documentMode"in document&&11>=document.documentMode,Wr=null,ba=null,Ki=null,Fa=!1;function Xh(t,i,o){var a=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Fa||Wr==null||Wr!==qs(a)||(a=Wr,"selectionStart"in a&&Ma(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ki&&Gi(Ki,a)||(Ki=a,a=po(ba,"onSelect"),0<a.length&&(i=new Ra("onSelect","select",null,i,o),t.push({event:i,listeners:a}),i.target=Wr)))}function co(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var Br={animationend:co("Animation","AnimationEnd"),animationiteration:co("Animation","AnimationIteration"),animationstart:co("Animation","AnimationStart"),transitionend:co("Transition","TransitionEnd")},Ua={},Jh={};f&&(Jh=document.createElement("div").style,"AnimationEvent"in window||(delete Br.animationend.animation,delete Br.animationiteration.animation,delete Br.animationstart.animation),"TransitionEvent"in window||delete Br.transitionend.transition);function ho(t){if(Ua[t])return Ua[t];if(!Br[t])return t;var i=Br[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Jh)return Ua[t]=i[o];return t}var Zh=ho("animationend"),ef=ho("animationiteration"),tf=ho("animationstart"),nf=ho("transitionend"),rf=new Map,sf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xn(t,i){rf.set(t,i),u(i,[t])}for(var za=0;za<sf.length;za++){var ja=sf[za],aw=ja.toLowerCase(),uw=ja[0].toUpperCase()+ja.slice(1);xn(aw,"on"+uw)}xn(Zh,"onAnimationEnd"),xn(ef,"onAnimationIteration"),xn(tf,"onAnimationStart"),xn("dblclick","onDoubleClick"),xn("focusin","onFocus"),xn("focusout","onBlur"),xn(nf,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qi));function of(t,i,o){var a=t.type||"unknown-event";t.currentTarget=o,av(a,i,void 0,t),t.currentTarget=null}function lf(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var a=t[o],c=a.event;a=a.listeners;e:{var h=void 0;if(i)for(var m=a.length-1;0<=m;m--){var _=a[m],v=_.instance,k=_.currentTarget;if(_=_.listener,v!==h&&c.isPropagationStopped())break e;of(c,_,k),h=v}else for(m=0;m<a.length;m++){if(_=a[m],v=_.instance,k=_.currentTarget,_=_.listener,v!==h&&c.isPropagationStopped())break e;of(c,_,k),h=v}}}if(Qs)throw t=_a,Qs=!1,_a=null,t}function Ie(t,i){var o=i[Ka];o===void 0&&(o=i[Ka]=new Set);var a=t+"__bubble";o.has(a)||(af(i,t,2,!1),o.add(a))}function Wa(t,i,o){var a=0;i&&(a|=4),af(o,t,a,i)}var fo="_reactListening"+Math.random().toString(36).slice(2);function Yi(t){if(!t[fo]){t[fo]=!0,s.forEach(function(o){o!=="selectionchange"&&(cw.has(o)||Wa(o,!1,t),Wa(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[fo]||(i[fo]=!0,Wa("selectionchange",!1,i))}}function af(t,i,o,a){switch(Ah(i)){case 1:var c=Cv;break;case 4:c=Tv;break;default:c=Ca}o=c.bind(null,i,o,t),c=void 0,!ga||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),a?c!==void 0?t.addEventListener(i,o,{capture:!0,passive:c}):t.addEventListener(i,o,!0):c!==void 0?t.addEventListener(i,o,{passive:c}):t.addEventListener(i,o,!1)}function Ba(t,i,o,a,c){var h=a;if(!(i&1)&&!(i&2)&&a!==null)e:for(;;){if(a===null)return;var m=a.tag;if(m===3||m===4){var _=a.stateNode.containerInfo;if(_===c||_.nodeType===8&&_.parentNode===c)break;if(m===4)for(m=a.return;m!==null;){var v=m.tag;if((v===3||v===4)&&(v=m.stateNode.containerInfo,v===c||v.nodeType===8&&v.parentNode===c))return;m=m.return}for(;_!==null;){if(m=lr(_),m===null)return;if(v=m.tag,v===5||v===6){a=h=m;continue e}_=_.parentNode}}a=a.return}hh(function(){var k=h,A=fa(o),O=[];e:{var N=rf.get(t);if(N!==void 0){var U=Ra,W=t;switch(t){case"keypress":if(oo(o)===0)break e;case"keydown":case"keyup":U=jv;break;case"focusin":W="focus",U=Aa;break;case"focusout":W="blur",U=Aa;break;case"beforeblur":case"afterblur":U=Aa;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=Dh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=Nv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=Vv;break;case Zh:case ef:case tf:U=Ov;break;case nf:U=Hv;break;case"scroll":U=kv;break;case"wheel":U=Gv;break;case"copy":case"cut":case"paste":U=Dv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=Mh}var B=(i&4)!==0,Ue=!B&&t==="scroll",C=B?N!==null?N+"Capture":null:N;B=[];for(var E=k,T;E!==null;){T=E;var D=T.stateNode;if(T.tag===5&&D!==null&&(T=D,C!==null&&(D=xi(E,C),D!=null&&B.push(Xi(E,D,T)))),Ue)break;E=E.return}0<B.length&&(N=new U(N,W,null,o,A),O.push({event:N,listeners:B}))}}if(!(i&7)){e:{if(N=t==="mouseover"||t==="pointerover",U=t==="mouseout"||t==="pointerout",N&&o!==ha&&(W=o.relatedTarget||o.fromElement)&&(lr(W)||W[un]))break e;if((U||N)&&(N=A.window===A?A:(N=A.ownerDocument)?N.defaultView||N.parentWindow:window,U?(W=o.relatedTarget||o.toElement,U=k,W=W?lr(W):null,W!==null&&(Ue=or(W),W!==Ue||W.tag!==5&&W.tag!==6)&&(W=null)):(U=null,W=k),U!==W)){if(B=Dh,D="onMouseLeave",C="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(B=Mh,D="onPointerLeave",C="onPointerEnter",E="pointer"),Ue=U==null?N:Hr(U),T=W==null?N:Hr(W),N=new B(D,E+"leave",U,o,A),N.target=Ue,N.relatedTarget=T,D=null,lr(A)===k&&(B=new B(C,E+"enter",W,o,A),B.target=T,B.relatedTarget=Ue,D=B),Ue=D,U&&W)t:{for(B=U,C=W,E=0,T=B;T;T=Vr(T))E++;for(T=0,D=C;D;D=Vr(D))T++;for(;0<E-T;)B=Vr(B),E--;for(;0<T-E;)C=Vr(C),T--;for(;E--;){if(B===C||C!==null&&B===C.alternate)break t;B=Vr(B),C=Vr(C)}B=null}else B=null;U!==null&&uf(O,N,U,B,!1),W!==null&&Ue!==null&&uf(O,Ue,W,B,!0)}}e:{if(N=k?Hr(k):window,U=N.nodeName&&N.nodeName.toLowerCase(),U==="select"||U==="input"&&N.type==="file")var V=ew;else if(Wh(N))if(Vh)V=iw;else{V=nw;var $=tw}else(U=N.nodeName)&&U.toLowerCase()==="input"&&(N.type==="checkbox"||N.type==="radio")&&(V=rw);if(V&&(V=V(t,k))){Bh(O,V,o,A);break e}$&&$(t,N,k),t==="focusout"&&($=N._wrapperState)&&$.controlled&&N.type==="number"&&la(N,"number",N.value)}switch($=k?Hr(k):window,t){case"focusin":(Wh($)||$.contentEditable==="true")&&(Wr=$,ba=k,Ki=null);break;case"focusout":Ki=ba=Wr=null;break;case"mousedown":Fa=!0;break;case"contextmenu":case"mouseup":case"dragend":Fa=!1,Xh(O,o,A);break;case"selectionchange":if(lw)break;case"keydown":case"keyup":Xh(O,o,A)}var H;if(xa)e:{switch(t){case"compositionstart":var Q="onCompositionStart";break e;case"compositionend":Q="onCompositionEnd";break e;case"compositionupdate":Q="onCompositionUpdate";break e}Q=void 0}else jr?zh(t,o)&&(Q="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(Q="onCompositionStart");Q&&(bh&&o.locale!=="ko"&&(jr||Q!=="onCompositionStart"?Q==="onCompositionEnd"&&jr&&(H=Oh()):(On=A,ka="value"in On?On.value:On.textContent,jr=!0)),$=po(k,Q),0<$.length&&(Q=new Lh(Q,t,null,o,A),O.push({event:Q,listeners:$}),H?Q.data=H:(H=jh(o),H!==null&&(Q.data=H)))),(H=Qv?Yv(t,o):Xv(t,o))&&(k=po(k,"onBeforeInput"),0<k.length&&(A=new Lh("onBeforeInput","beforeinput",null,o,A),O.push({event:A,listeners:k}),A.data=H))}lf(O,i)})}function Xi(t,i,o){return{instance:t,listener:i,currentTarget:o}}function po(t,i){for(var o=i+"Capture",a=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=xi(t,o),h!=null&&a.unshift(Xi(t,h,c)),h=xi(t,i),h!=null&&a.push(Xi(t,h,c))),t=t.return}return a}function Vr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function uf(t,i,o,a,c){for(var h=i._reactName,m=[];o!==null&&o!==a;){var _=o,v=_.alternate,k=_.stateNode;if(v!==null&&v===a)break;_.tag===5&&k!==null&&(_=k,c?(v=xi(o,h),v!=null&&m.unshift(Xi(o,v,_))):c||(v=xi(o,h),v!=null&&m.push(Xi(o,v,_)))),o=o.return}m.length!==0&&t.push({event:i,listeners:m})}var dw=/\r\n?/g,hw=/\u0000|\uFFFD/g;function cf(t){return(typeof t=="string"?t:""+t).replace(dw,`
`).replace(hw,"")}function mo(t,i,o){if(i=cf(i),cf(t)!==i&&o)throw Error(n(425))}function go(){}var Va=null,$a=null;function Ha(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var qa=typeof setTimeout=="function"?setTimeout:void 0,fw=typeof clearTimeout=="function"?clearTimeout:void 0,df=typeof Promise=="function"?Promise:void 0,pw=typeof queueMicrotask=="function"?queueMicrotask:typeof df<"u"?function(t){return df.resolve(null).then(t).catch(mw)}:qa;function mw(t){setTimeout(function(){throw t})}function Ga(t,i){var o=i,a=0;do{var c=o.nextSibling;if(t.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(a===0){t.removeChild(c),Wi(i);return}a--}else o!=="$"&&o!=="$?"&&o!=="$!"||a++;o=c}while(o);Wi(i)}function Dn(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function hf(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var $r=Math.random().toString(36).slice(2),Zt="__reactFiber$"+$r,Ji="__reactProps$"+$r,un="__reactContainer$"+$r,Ka="__reactEvents$"+$r,gw="__reactListeners$"+$r,_w="__reactHandles$"+$r;function lr(t){var i=t[Zt];if(i)return i;for(var o=t.parentNode;o;){if(i=o[un]||o[Zt]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=hf(t);t!==null;){if(o=t[Zt])return o;t=hf(t)}return i}t=o,o=t.parentNode}return null}function Zi(t){return t=t[Zt]||t[un],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Hr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function _o(t){return t[Ji]||null}var Qa=[],qr=-1;function Ln(t){return{current:t}}function Ce(t){0>qr||(t.current=Qa[qr],Qa[qr]=null,qr--)}function we(t,i){qr++,Qa[qr]=t.current,t.current=i}var Mn={},et=Ln(Mn),ct=Ln(!1),ar=Mn;function Gr(t,i){var o=t.type.contextTypes;if(!o)return Mn;var a=t.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===i)return a.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in o)c[h]=i[h];return a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function dt(t){return t=t.childContextTypes,t!=null}function yo(){Ce(ct),Ce(et)}function ff(t,i,o){if(et.current!==Mn)throw Error(n(168));we(et,i),we(ct,o)}function pf(t,i,o){var a=t.stateNode;if(i=i.childContextTypes,typeof a.getChildContext!="function")return o;a=a.getChildContext();for(var c in a)if(!(c in i))throw Error(n(108,ve(t)||"Unknown",c));return j({},o,a)}function vo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Mn,ar=et.current,we(et,t),we(ct,ct.current),!0}function mf(t,i,o){var a=t.stateNode;if(!a)throw Error(n(169));o?(t=pf(t,i,ar),a.__reactInternalMemoizedMergedChildContext=t,Ce(ct),Ce(et),we(et,t)):Ce(ct),we(ct,o)}var cn=null,wo=!1,Ya=!1;function gf(t){cn===null?cn=[t]:cn.push(t)}function yw(t){wo=!0,gf(t)}function bn(){if(!Ya&&cn!==null){Ya=!0;var t=0,i=ge;try{var o=cn;for(ge=1;t<o.length;t++){var a=o[t];do a=a(!0);while(a!==null)}cn=null,wo=!1}catch(c){throw cn!==null&&(cn=cn.slice(t+1)),_h(ya,bn),c}finally{ge=i,Ya=!1}}return null}var Kr=[],Qr=0,Eo=null,So=0,Pt=[],At=0,ur=null,dn=1,hn="";function cr(t,i){Kr[Qr++]=So,Kr[Qr++]=Eo,Eo=t,So=i}function _f(t,i,o){Pt[At++]=dn,Pt[At++]=hn,Pt[At++]=ur,ur=t;var a=dn;t=hn;var c=32-Ut(a)-1;a&=~(1<<c),o+=1;var h=32-Ut(i)+c;if(30<h){var m=c-c%5;h=(a&(1<<m)-1).toString(32),a>>=m,c-=m,dn=1<<32-Ut(i)+c|o<<c|a,hn=h+t}else dn=1<<h|o<<c|a,hn=t}function Xa(t){t.return!==null&&(cr(t,1),_f(t,1,0))}function Ja(t){for(;t===Eo;)Eo=Kr[--Qr],Kr[Qr]=null,So=Kr[--Qr],Kr[Qr]=null;for(;t===ur;)ur=Pt[--At],Pt[At]=null,hn=Pt[--At],Pt[At]=null,dn=Pt[--At],Pt[At]=null}var It=null,Ct=null,Ne=!1,jt=null;function yf(t,i){var o=Lt(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function vf(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,It=t,Ct=Dn(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,It=t,Ct=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=ur!==null?{id:dn,overflow:hn}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Lt(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,It=t,Ct=null,!0):!1;default:return!1}}function Za(t){return(t.mode&1)!==0&&(t.flags&128)===0}function eu(t){if(Ne){var i=Ct;if(i){var o=i;if(!vf(t,i)){if(Za(t))throw Error(n(418));i=Dn(o.nextSibling);var a=It;i&&vf(t,i)?yf(a,o):(t.flags=t.flags&-4097|2,Ne=!1,It=t)}}else{if(Za(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ne=!1,It=t}}}function wf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;It=t}function Io(t){if(t!==It)return!1;if(!Ne)return wf(t),Ne=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Ha(t.type,t.memoizedProps)),i&&(i=Ct)){if(Za(t))throw Ef(),Error(n(418));for(;i;)yf(t,i),i=Dn(i.nextSibling)}if(wf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Ct=Dn(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Ct=null}}else Ct=It?Dn(t.stateNode.nextSibling):null;return!0}function Ef(){for(var t=Ct;t;)t=Dn(t.nextSibling)}function Yr(){Ct=It=null,Ne=!1}function tu(t){jt===null?jt=[t]:jt.push(t)}var vw=J.ReactCurrentBatchConfig;function es(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var a=o.stateNode}if(!a)throw Error(n(147,t));var c=a,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(m){var _=c.refs;m===null?delete _[h]:_[h]=m},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Co(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Sf(t){var i=t._init;return i(t._payload)}function If(t){function i(C,E){if(t){var T=C.deletions;T===null?(C.deletions=[E],C.flags|=16):T.push(E)}}function o(C,E){if(!t)return null;for(;E!==null;)i(C,E),E=E.sibling;return null}function a(C,E){for(C=new Map;E!==null;)E.key!==null?C.set(E.key,E):C.set(E.index,E),E=E.sibling;return C}function c(C,E){return C=$n(C,E),C.index=0,C.sibling=null,C}function h(C,E,T){return C.index=T,t?(T=C.alternate,T!==null?(T=T.index,T<E?(C.flags|=2,E):T):(C.flags|=2,E)):(C.flags|=1048576,E)}function m(C){return t&&C.alternate===null&&(C.flags|=2),C}function _(C,E,T,D){return E===null||E.tag!==6?(E=qu(T,C.mode,D),E.return=C,E):(E=c(E,T),E.return=C,E)}function v(C,E,T,D){var V=T.type;return V===Z?A(C,E,T.props.children,D,T.key):E!==null&&(E.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===ut&&Sf(V)===E.type)?(D=c(E,T.props),D.ref=es(C,E,T),D.return=C,D):(D=Ko(T.type,T.key,T.props,null,C.mode,D),D.ref=es(C,E,T),D.return=C,D)}function k(C,E,T,D){return E===null||E.tag!==4||E.stateNode.containerInfo!==T.containerInfo||E.stateNode.implementation!==T.implementation?(E=Gu(T,C.mode,D),E.return=C,E):(E=c(E,T.children||[]),E.return=C,E)}function A(C,E,T,D,V){return E===null||E.tag!==7?(E=yr(T,C.mode,D,V),E.return=C,E):(E=c(E,T),E.return=C,E)}function O(C,E,T){if(typeof E=="string"&&E!==""||typeof E=="number")return E=qu(""+E,C.mode,T),E.return=C,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case be:return T=Ko(E.type,E.key,E.props,null,C.mode,T),T.ref=es(C,null,E),T.return=C,T;case ie:return E=Gu(E,C.mode,T),E.return=C,E;case ut:var D=E._init;return O(C,D(E._payload),T)}if(Pi(E)||q(E))return E=yr(E,C.mode,T,null),E.return=C,E;Co(C,E)}return null}function N(C,E,T,D){var V=E!==null?E.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return V!==null?null:_(C,E,""+T,D);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case be:return T.key===V?v(C,E,T,D):null;case ie:return T.key===V?k(C,E,T,D):null;case ut:return V=T._init,N(C,E,V(T._payload),D)}if(Pi(T)||q(T))return V!==null?null:A(C,E,T,D,null);Co(C,T)}return null}function U(C,E,T,D,V){if(typeof D=="string"&&D!==""||typeof D=="number")return C=C.get(T)||null,_(E,C,""+D,V);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case be:return C=C.get(D.key===null?T:D.key)||null,v(E,C,D,V);case ie:return C=C.get(D.key===null?T:D.key)||null,k(E,C,D,V);case ut:var $=D._init;return U(C,E,T,$(D._payload),V)}if(Pi(D)||q(D))return C=C.get(T)||null,A(E,C,D,V,null);Co(E,D)}return null}function W(C,E,T,D){for(var V=null,$=null,H=E,Q=E=0,He=null;H!==null&&Q<T.length;Q++){H.index>Q?(He=H,H=null):He=H.sibling;var he=N(C,H,T[Q],D);if(he===null){H===null&&(H=He);break}t&&H&&he.alternate===null&&i(C,H),E=h(he,E,Q),$===null?V=he:$.sibling=he,$=he,H=He}if(Q===T.length)return o(C,H),Ne&&cr(C,Q),V;if(H===null){for(;Q<T.length;Q++)H=O(C,T[Q],D),H!==null&&(E=h(H,E,Q),$===null?V=H:$.sibling=H,$=H);return Ne&&cr(C,Q),V}for(H=a(C,H);Q<T.length;Q++)He=U(H,C,Q,T[Q],D),He!==null&&(t&&He.alternate!==null&&H.delete(He.key===null?Q:He.key),E=h(He,E,Q),$===null?V=He:$.sibling=He,$=He);return t&&H.forEach(function(Hn){return i(C,Hn)}),Ne&&cr(C,Q),V}function B(C,E,T,D){var V=q(T);if(typeof V!="function")throw Error(n(150));if(T=V.call(T),T==null)throw Error(n(151));for(var $=V=null,H=E,Q=E=0,He=null,he=T.next();H!==null&&!he.done;Q++,he=T.next()){H.index>Q?(He=H,H=null):He=H.sibling;var Hn=N(C,H,he.value,D);if(Hn===null){H===null&&(H=He);break}t&&H&&Hn.alternate===null&&i(C,H),E=h(Hn,E,Q),$===null?V=Hn:$.sibling=Hn,$=Hn,H=He}if(he.done)return o(C,H),Ne&&cr(C,Q),V;if(H===null){for(;!he.done;Q++,he=T.next())he=O(C,he.value,D),he!==null&&(E=h(he,E,Q),$===null?V=he:$.sibling=he,$=he);return Ne&&cr(C,Q),V}for(H=a(C,H);!he.done;Q++,he=T.next())he=U(H,C,Q,he.value,D),he!==null&&(t&&he.alternate!==null&&H.delete(he.key===null?Q:he.key),E=h(he,E,Q),$===null?V=he:$.sibling=he,$=he);return t&&H.forEach(function(Jw){return i(C,Jw)}),Ne&&cr(C,Q),V}function Ue(C,E,T,D){if(typeof T=="object"&&T!==null&&T.type===Z&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case be:e:{for(var V=T.key,$=E;$!==null;){if($.key===V){if(V=T.type,V===Z){if($.tag===7){o(C,$.sibling),E=c($,T.props.children),E.return=C,C=E;break e}}else if($.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===ut&&Sf(V)===$.type){o(C,$.sibling),E=c($,T.props),E.ref=es(C,$,T),E.return=C,C=E;break e}o(C,$);break}else i(C,$);$=$.sibling}T.type===Z?(E=yr(T.props.children,C.mode,D,T.key),E.return=C,C=E):(D=Ko(T.type,T.key,T.props,null,C.mode,D),D.ref=es(C,E,T),D.return=C,C=D)}return m(C);case ie:e:{for($=T.key;E!==null;){if(E.key===$)if(E.tag===4&&E.stateNode.containerInfo===T.containerInfo&&E.stateNode.implementation===T.implementation){o(C,E.sibling),E=c(E,T.children||[]),E.return=C,C=E;break e}else{o(C,E);break}else i(C,E);E=E.sibling}E=Gu(T,C.mode,D),E.return=C,C=E}return m(C);case ut:return $=T._init,Ue(C,E,$(T._payload),D)}if(Pi(T))return W(C,E,T,D);if(q(T))return B(C,E,T,D);Co(C,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,E!==null&&E.tag===6?(o(C,E.sibling),E=c(E,T),E.return=C,C=E):(o(C,E),E=qu(T,C.mode,D),E.return=C,C=E),m(C)):o(C,E)}return Ue}var Xr=If(!0),Cf=If(!1),To=Ln(null),ko=null,Jr=null,nu=null;function ru(){nu=Jr=ko=null}function iu(t){var i=To.current;Ce(To),t._currentValue=i}function su(t,i,o){for(;t!==null;){var a=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,a!==null&&(a.childLanes|=i)):a!==null&&(a.childLanes&i)!==i&&(a.childLanes|=i),t===o)break;t=t.return}}function Zr(t,i){ko=t,nu=Jr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&i&&(ht=!0),t.firstContext=null)}function Ot(t){var i=t._currentValue;if(nu!==t)if(t={context:t,memoizedValue:i,next:null},Jr===null){if(ko===null)throw Error(n(308));Jr=t,ko.dependencies={lanes:0,firstContext:t}}else Jr=Jr.next=t;return i}var dr=null;function ou(t){dr===null?dr=[t]:dr.push(t)}function Tf(t,i,o,a){var c=i.interleaved;return c===null?(o.next=o,ou(i)):(o.next=c.next,c.next=o),i.interleaved=o,fn(t,a)}function fn(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Fn=!1;function lu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function pn(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Un(t,i,o){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,ue&2){var c=a.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),a.pending=i,fn(t,o)}return c=a.interleaved,c===null?(i.next=i,ou(a)):(i.next=c.next,c.next=i),a.interleaved=i,fn(t,o)}function Ro(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var a=i.lanes;a&=t.pendingLanes,o|=a,i.lanes=o,Ea(t,o)}}function Rf(t,i){var o=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,o===a)){var c=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var m={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?c=h=m:h=h.next=m,o=o.next}while(o!==null);h===null?c=h=i:h=h.next=i}else c=h=i;o={baseState:a.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:a.shared,effects:a.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function No(t,i,o,a){var c=t.updateQueue;Fn=!1;var h=c.firstBaseUpdate,m=c.lastBaseUpdate,_=c.shared.pending;if(_!==null){c.shared.pending=null;var v=_,k=v.next;v.next=null,m===null?h=k:m.next=k,m=v;var A=t.alternate;A!==null&&(A=A.updateQueue,_=A.lastBaseUpdate,_!==m&&(_===null?A.firstBaseUpdate=k:_.next=k,A.lastBaseUpdate=v))}if(h!==null){var O=c.baseState;m=0,A=k=v=null,_=h;do{var N=_.lane,U=_.eventTime;if((a&N)===N){A!==null&&(A=A.next={eventTime:U,lane:0,tag:_.tag,payload:_.payload,callback:_.callback,next:null});e:{var W=t,B=_;switch(N=i,U=o,B.tag){case 1:if(W=B.payload,typeof W=="function"){O=W.call(U,O,N);break e}O=W;break e;case 3:W.flags=W.flags&-65537|128;case 0:if(W=B.payload,N=typeof W=="function"?W.call(U,O,N):W,N==null)break e;O=j({},O,N);break e;case 2:Fn=!0}}_.callback!==null&&_.lane!==0&&(t.flags|=64,N=c.effects,N===null?c.effects=[_]:N.push(_))}else U={eventTime:U,lane:N,tag:_.tag,payload:_.payload,callback:_.callback,next:null},A===null?(k=A=U,v=O):A=A.next=U,m|=N;if(_=_.next,_===null){if(_=c.shared.pending,_===null)break;N=_,_=N.next,N.next=null,c.lastBaseUpdate=N,c.shared.pending=null}}while(!0);if(A===null&&(v=O),c.baseState=v,c.firstBaseUpdate=k,c.lastBaseUpdate=A,i=c.shared.interleaved,i!==null){c=i;do m|=c.lane,c=c.next;while(c!==i)}else h===null&&(c.shared.lanes=0);pr|=m,t.lanes=m,t.memoizedState=O}}function Nf(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var a=t[i],c=a.callback;if(c!==null){if(a.callback=null,a=o,typeof c!="function")throw Error(n(191,c));c.call(a)}}}var ts={},en=Ln(ts),ns=Ln(ts),rs=Ln(ts);function hr(t){if(t===ts)throw Error(n(174));return t}function au(t,i){switch(we(rs,i),we(ns,t),we(en,ts),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ua(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=ua(i,t)}Ce(en),we(en,i)}function ei(){Ce(en),Ce(ns),Ce(rs)}function Pf(t){hr(rs.current);var i=hr(en.current),o=ua(i,t.type);i!==o&&(we(ns,t),we(en,o))}function uu(t){ns.current===t&&(Ce(en),Ce(ns))}var Ae=Ln(0);function Po(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var cu=[];function du(){for(var t=0;t<cu.length;t++)cu[t]._workInProgressVersionPrimary=null;cu.length=0}var Ao=J.ReactCurrentDispatcher,hu=J.ReactCurrentBatchConfig,fr=0,Oe=null,je=null,Ve=null,Oo=!1,is=!1,ss=0,ww=0;function tt(){throw Error(n(321))}function fu(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!zt(t[o],i[o]))return!1;return!0}function pu(t,i,o,a,c,h){if(fr=h,Oe=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ao.current=t===null||t.memoizedState===null?Cw:Tw,t=o(a,c),is){h=0;do{if(is=!1,ss=0,25<=h)throw Error(n(301));h+=1,Ve=je=null,i.updateQueue=null,Ao.current=kw,t=o(a,c)}while(is)}if(Ao.current=Lo,i=je!==null&&je.next!==null,fr=0,Ve=je=Oe=null,Oo=!1,i)throw Error(n(300));return t}function mu(){var t=ss!==0;return ss=0,t}function tn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?Oe.memoizedState=Ve=t:Ve=Ve.next=t,Ve}function xt(){if(je===null){var t=Oe.alternate;t=t!==null?t.memoizedState:null}else t=je.next;var i=Ve===null?Oe.memoizedState:Ve.next;if(i!==null)Ve=i,je=t;else{if(t===null)throw Error(n(310));je=t,t={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Ve===null?Oe.memoizedState=Ve=t:Ve=Ve.next=t}return Ve}function os(t,i){return typeof i=="function"?i(t):i}function gu(t){var i=xt(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=je,c=a.baseQueue,h=o.pending;if(h!==null){if(c!==null){var m=c.next;c.next=h.next,h.next=m}a.baseQueue=c=h,o.pending=null}if(c!==null){h=c.next,a=a.baseState;var _=m=null,v=null,k=h;do{var A=k.lane;if((fr&A)===A)v!==null&&(v=v.next={lane:0,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),a=k.hasEagerState?k.eagerState:t(a,k.action);else{var O={lane:A,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null};v===null?(_=v=O,m=a):v=v.next=O,Oe.lanes|=A,pr|=A}k=k.next}while(k!==null&&k!==h);v===null?m=a:v.next=_,zt(a,i.memoizedState)||(ht=!0),i.memoizedState=a,i.baseState=m,i.baseQueue=v,o.lastRenderedState=a}if(t=o.interleaved,t!==null){c=t;do h=c.lane,Oe.lanes|=h,pr|=h,c=c.next;while(c!==t)}else c===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function _u(t){var i=xt(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=o.dispatch,c=o.pending,h=i.memoizedState;if(c!==null){o.pending=null;var m=c=c.next;do h=t(h,m.action),m=m.next;while(m!==c);zt(h,i.memoizedState)||(ht=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,a]}function Af(){}function Of(t,i){var o=Oe,a=xt(),c=i(),h=!zt(a.memoizedState,c);if(h&&(a.memoizedState=c,ht=!0),a=a.queue,yu(Lf.bind(null,o,a,t),[t]),a.getSnapshot!==i||h||Ve!==null&&Ve.memoizedState.tag&1){if(o.flags|=2048,ls(9,Df.bind(null,o,a,c,i),void 0,null),$e===null)throw Error(n(349));fr&30||xf(o,i,c)}return c}function xf(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Oe.updateQueue,i===null?(i={lastEffect:null,stores:null},Oe.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Df(t,i,o,a){i.value=o,i.getSnapshot=a,Mf(i)&&bf(t)}function Lf(t,i,o){return o(function(){Mf(i)&&bf(t)})}function Mf(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!zt(t,o)}catch{return!0}}function bf(t){var i=fn(t,1);i!==null&&$t(i,t,1,-1)}function Ff(t){var i=tn();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:os,lastRenderedState:t},i.queue=t,t=t.dispatch=Iw.bind(null,Oe,t),[i.memoizedState,t]}function ls(t,i,o,a){return t={tag:t,create:i,destroy:o,deps:a,next:null},i=Oe.updateQueue,i===null?(i={lastEffect:null,stores:null},Oe.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(a=o.next,o.next=t,t.next=a,i.lastEffect=t)),t}function Uf(){return xt().memoizedState}function xo(t,i,o,a){var c=tn();Oe.flags|=t,c.memoizedState=ls(1|i,o,void 0,a===void 0?null:a)}function Do(t,i,o,a){var c=xt();a=a===void 0?null:a;var h=void 0;if(je!==null){var m=je.memoizedState;if(h=m.destroy,a!==null&&fu(a,m.deps)){c.memoizedState=ls(i,o,h,a);return}}Oe.flags|=t,c.memoizedState=ls(1|i,o,h,a)}function zf(t,i){return xo(8390656,8,t,i)}function yu(t,i){return Do(2048,8,t,i)}function jf(t,i){return Do(4,2,t,i)}function Wf(t,i){return Do(4,4,t,i)}function Bf(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Vf(t,i,o){return o=o!=null?o.concat([t]):null,Do(4,4,Bf.bind(null,i,t),o)}function vu(){}function $f(t,i){var o=xt();i=i===void 0?null:i;var a=o.memoizedState;return a!==null&&i!==null&&fu(i,a[1])?a[0]:(o.memoizedState=[t,i],t)}function Hf(t,i){var o=xt();i=i===void 0?null:i;var a=o.memoizedState;return a!==null&&i!==null&&fu(i,a[1])?a[0]:(t=t(),o.memoizedState=[t,i],t)}function qf(t,i,o){return fr&21?(zt(o,i)||(o=Eh(),Oe.lanes|=o,pr|=o,t.baseState=!0),i):(t.baseState&&(t.baseState=!1,ht=!0),t.memoizedState=o)}function Ew(t,i){var o=ge;ge=o!==0&&4>o?o:4,t(!0);var a=hu.transition;hu.transition={};try{t(!1),i()}finally{ge=o,hu.transition=a}}function Gf(){return xt().memoizedState}function Sw(t,i,o){var a=Bn(t);if(o={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null},Kf(t))Qf(i,o);else if(o=Tf(t,i,o,a),o!==null){var c=ot();$t(o,t,a,c),Yf(o,i,a)}}function Iw(t,i,o){var a=Bn(t),c={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null};if(Kf(t))Qf(i,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var m=i.lastRenderedState,_=h(m,o);if(c.hasEagerState=!0,c.eagerState=_,zt(_,m)){var v=i.interleaved;v===null?(c.next=c,ou(i)):(c.next=v.next,v.next=c),i.interleaved=c;return}}catch{}finally{}o=Tf(t,i,c,a),o!==null&&(c=ot(),$t(o,t,a,c),Yf(o,i,a))}}function Kf(t){var i=t.alternate;return t===Oe||i!==null&&i===Oe}function Qf(t,i){is=Oo=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function Yf(t,i,o){if(o&4194240){var a=i.lanes;a&=t.pendingLanes,o|=a,i.lanes=o,Ea(t,o)}}var Lo={readContext:Ot,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},Cw={readContext:Ot,useCallback:function(t,i){return tn().memoizedState=[t,i===void 0?null:i],t},useContext:Ot,useEffect:zf,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,xo(4194308,4,Bf.bind(null,i,t),o)},useLayoutEffect:function(t,i){return xo(4194308,4,t,i)},useInsertionEffect:function(t,i){return xo(4,2,t,i)},useMemo:function(t,i){var o=tn();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var a=tn();return i=o!==void 0?o(i):i,a.memoizedState=a.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},a.queue=t,t=t.dispatch=Sw.bind(null,Oe,t),[a.memoizedState,t]},useRef:function(t){var i=tn();return t={current:t},i.memoizedState=t},useState:Ff,useDebugValue:vu,useDeferredValue:function(t){return tn().memoizedState=t},useTransition:function(){var t=Ff(!1),i=t[0];return t=Ew.bind(null,t[1]),tn().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var a=Oe,c=tn();if(Ne){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),$e===null)throw Error(n(349));fr&30||xf(a,i,o)}c.memoizedState=o;var h={value:o,getSnapshot:i};return c.queue=h,zf(Lf.bind(null,a,h,t),[t]),a.flags|=2048,ls(9,Df.bind(null,a,h,o,i),void 0,null),o},useId:function(){var t=tn(),i=$e.identifierPrefix;if(Ne){var o=hn,a=dn;o=(a&~(1<<32-Ut(a)-1)).toString(32)+o,i=":"+i+"R"+o,o=ss++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=ww++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},Tw={readContext:Ot,useCallback:$f,useContext:Ot,useEffect:yu,useImperativeHandle:Vf,useInsertionEffect:jf,useLayoutEffect:Wf,useMemo:Hf,useReducer:gu,useRef:Uf,useState:function(){return gu(os)},useDebugValue:vu,useDeferredValue:function(t){var i=xt();return qf(i,je.memoizedState,t)},useTransition:function(){var t=gu(os)[0],i=xt().memoizedState;return[t,i]},useMutableSource:Af,useSyncExternalStore:Of,useId:Gf,unstable_isNewReconciler:!1},kw={readContext:Ot,useCallback:$f,useContext:Ot,useEffect:yu,useImperativeHandle:Vf,useInsertionEffect:jf,useLayoutEffect:Wf,useMemo:Hf,useReducer:_u,useRef:Uf,useState:function(){return _u(os)},useDebugValue:vu,useDeferredValue:function(t){var i=xt();return je===null?i.memoizedState=t:qf(i,je.memoizedState,t)},useTransition:function(){var t=_u(os)[0],i=xt().memoizedState;return[t,i]},useMutableSource:Af,useSyncExternalStore:Of,useId:Gf,unstable_isNewReconciler:!1};function Wt(t,i){if(t&&t.defaultProps){i=j({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function wu(t,i,o,a){i=t.memoizedState,o=o(a,i),o=o==null?i:j({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Mo={isMounted:function(t){return(t=t._reactInternals)?or(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var a=ot(),c=Bn(t),h=pn(a,c);h.payload=i,o!=null&&(h.callback=o),i=Un(t,h,c),i!==null&&($t(i,t,c,a),Ro(i,t,c))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var a=ot(),c=Bn(t),h=pn(a,c);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=Un(t,h,c),i!==null&&($t(i,t,c,a),Ro(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=ot(),a=Bn(t),c=pn(o,a);c.tag=2,i!=null&&(c.callback=i),i=Un(t,c,a),i!==null&&($t(i,t,a,o),Ro(i,t,a))}};function Xf(t,i,o,a,c,h,m){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,h,m):i.prototype&&i.prototype.isPureReactComponent?!Gi(o,a)||!Gi(c,h):!0}function Jf(t,i,o){var a=!1,c=Mn,h=i.contextType;return typeof h=="object"&&h!==null?h=Ot(h):(c=dt(i)?ar:et.current,a=i.contextTypes,h=(a=a!=null)?Gr(t,c):Mn),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Mo,t.stateNode=i,i._reactInternals=t,a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),i}function Zf(t,i,o,a){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,a),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,a),i.state!==t&&Mo.enqueueReplaceState(i,i.state,null)}function Eu(t,i,o,a){var c=t.stateNode;c.props=o,c.state=t.memoizedState,c.refs={},lu(t);var h=i.contextType;typeof h=="object"&&h!==null?c.context=Ot(h):(h=dt(i)?ar:et.current,c.context=Gr(t,h)),c.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(wu(t,i,h,o),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&Mo.enqueueReplaceState(c,c.state,null),No(t,o,c,a),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function ti(t,i){try{var o="",a=i;do o+=ce(a),a=a.return;while(a);var c=o}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:c,digest:null}}function Su(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Iu(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var Rw=typeof WeakMap=="function"?WeakMap:Map;function ep(t,i,o){o=pn(-1,o),o.tag=3,o.payload={element:null};var a=i.value;return o.callback=function(){Bo||(Bo=!0,Uu=a),Iu(t,i)},o}function tp(t,i,o){o=pn(-1,o),o.tag=3;var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var c=i.value;o.payload=function(){return a(c)},o.callback=function(){Iu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Iu(t,i),typeof a!="function"&&(jn===null?jn=new Set([this]):jn.add(this));var m=i.stack;this.componentDidCatch(i.value,{componentStack:m!==null?m:""})}),o}function np(t,i,o){var a=t.pingCache;if(a===null){a=t.pingCache=new Rw;var c=new Set;a.set(i,c)}else c=a.get(i),c===void 0&&(c=new Set,a.set(i,c));c.has(o)||(c.add(o),t=Ww.bind(null,t,i,o),i.then(t,t))}function rp(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function ip(t,i,o,a,c){return t.mode&1?(t.flags|=65536,t.lanes=c,t):(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=pn(-1,1),i.tag=2,Un(o,i,1))),o.lanes|=1),t)}var Nw=J.ReactCurrentOwner,ht=!1;function st(t,i,o,a){i.child=t===null?Cf(i,null,o,a):Xr(i,t.child,o,a)}function sp(t,i,o,a,c){o=o.render;var h=i.ref;return Zr(i,c),a=pu(t,i,o,a,h,c),o=mu(),t!==null&&!ht?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,mn(t,i,c)):(Ne&&o&&Xa(i),i.flags|=1,st(t,i,a,c),i.child)}function op(t,i,o,a,c){if(t===null){var h=o.type;return typeof h=="function"&&!Hu(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,lp(t,i,h,a,c)):(t=Ko(o.type,null,a,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,!(t.lanes&c)){var m=h.memoizedProps;if(o=o.compare,o=o!==null?o:Gi,o(m,a)&&t.ref===i.ref)return mn(t,i,c)}return i.flags|=1,t=$n(h,a),t.ref=i.ref,t.return=i,i.child=t}function lp(t,i,o,a,c){if(t!==null){var h=t.memoizedProps;if(Gi(h,a)&&t.ref===i.ref)if(ht=!1,i.pendingProps=a=h,(t.lanes&c)!==0)t.flags&131072&&(ht=!0);else return i.lanes=t.lanes,mn(t,i,c)}return Cu(t,i,o,a,c)}function ap(t,i,o){var a=i.pendingProps,c=a.children,h=t!==null?t.memoizedState:null;if(a.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(ri,Tt),Tt|=o;else{if(!(o&1073741824))return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,we(ri,Tt),Tt|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=h!==null?h.baseLanes:o,we(ri,Tt),Tt|=a}else h!==null?(a=h.baseLanes|o,i.memoizedState=null):a=o,we(ri,Tt),Tt|=a;return st(t,i,c,o),i.child}function up(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Cu(t,i,o,a,c){var h=dt(o)?ar:et.current;return h=Gr(i,h),Zr(i,c),o=pu(t,i,o,a,h,c),a=mu(),t!==null&&!ht?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,mn(t,i,c)):(Ne&&a&&Xa(i),i.flags|=1,st(t,i,o,c),i.child)}function cp(t,i,o,a,c){if(dt(o)){var h=!0;vo(i)}else h=!1;if(Zr(i,c),i.stateNode===null)Fo(t,i),Jf(i,o,a),Eu(i,o,a,c),a=!0;else if(t===null){var m=i.stateNode,_=i.memoizedProps;m.props=_;var v=m.context,k=o.contextType;typeof k=="object"&&k!==null?k=Ot(k):(k=dt(o)?ar:et.current,k=Gr(i,k));var A=o.getDerivedStateFromProps,O=typeof A=="function"||typeof m.getSnapshotBeforeUpdate=="function";O||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(_!==a||v!==k)&&Zf(i,m,a,k),Fn=!1;var N=i.memoizedState;m.state=N,No(i,a,m,c),v=i.memoizedState,_!==a||N!==v||ct.current||Fn?(typeof A=="function"&&(wu(i,o,A,a),v=i.memoizedState),(_=Fn||Xf(i,o,_,a,N,v,k))?(O||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=a,i.memoizedState=v),m.props=a,m.state=v,m.context=k,a=_):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),a=!1)}else{m=i.stateNode,kf(t,i),_=i.memoizedProps,k=i.type===i.elementType?_:Wt(i.type,_),m.props=k,O=i.pendingProps,N=m.context,v=o.contextType,typeof v=="object"&&v!==null?v=Ot(v):(v=dt(o)?ar:et.current,v=Gr(i,v));var U=o.getDerivedStateFromProps;(A=typeof U=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(_!==O||N!==v)&&Zf(i,m,a,v),Fn=!1,N=i.memoizedState,m.state=N,No(i,a,m,c);var W=i.memoizedState;_!==O||N!==W||ct.current||Fn?(typeof U=="function"&&(wu(i,o,U,a),W=i.memoizedState),(k=Fn||Xf(i,o,k,a,N,W,v)||!1)?(A||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(a,W,v),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(a,W,v)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||_===t.memoizedProps&&N===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&N===t.memoizedState||(i.flags|=1024),i.memoizedProps=a,i.memoizedState=W),m.props=a,m.state=W,m.context=v,a=k):(typeof m.componentDidUpdate!="function"||_===t.memoizedProps&&N===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&N===t.memoizedState||(i.flags|=1024),a=!1)}return Tu(t,i,o,a,h,c)}function Tu(t,i,o,a,c,h){up(t,i);var m=(i.flags&128)!==0;if(!a&&!m)return c&&mf(i,o,!1),mn(t,i,h);a=i.stateNode,Nw.current=i;var _=m&&typeof o.getDerivedStateFromError!="function"?null:a.render();return i.flags|=1,t!==null&&m?(i.child=Xr(i,t.child,null,h),i.child=Xr(i,null,_,h)):st(t,i,_,h),i.memoizedState=a.state,c&&mf(i,o,!0),i.child}function dp(t){var i=t.stateNode;i.pendingContext?ff(t,i.pendingContext,i.pendingContext!==i.context):i.context&&ff(t,i.context,!1),au(t,i.containerInfo)}function hp(t,i,o,a,c){return Yr(),tu(c),i.flags|=256,st(t,i,o,a),i.child}var ku={dehydrated:null,treeContext:null,retryLane:0};function Ru(t){return{baseLanes:t,cachePool:null,transitions:null}}function fp(t,i,o){var a=i.pendingProps,c=Ae.current,h=!1,m=(i.flags&128)!==0,_;if((_=m)||(_=t!==null&&t.memoizedState===null?!1:(c&2)!==0),_?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),we(Ae,c&1),t===null)return eu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(i.mode&1?t.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(m=a.children,t=a.fallback,h?(a=i.mode,h=i.child,m={mode:"hidden",children:m},!(a&1)&&h!==null?(h.childLanes=0,h.pendingProps=m):h=Qo(m,a,0,null),t=yr(t,a,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Ru(o),i.memoizedState=ku,t):Nu(i,m));if(c=t.memoizedState,c!==null&&(_=c.dehydrated,_!==null))return Pw(t,i,m,a,_,c,o);if(h){h=a.fallback,m=i.mode,c=t.child,_=c.sibling;var v={mode:"hidden",children:a.children};return!(m&1)&&i.child!==c?(a=i.child,a.childLanes=0,a.pendingProps=v,i.deletions=null):(a=$n(c,v),a.subtreeFlags=c.subtreeFlags&14680064),_!==null?h=$n(_,h):(h=yr(h,m,o,null),h.flags|=2),h.return=i,a.return=i,a.sibling=h,i.child=a,a=h,h=i.child,m=t.child.memoizedState,m=m===null?Ru(o):{baseLanes:m.baseLanes|o,cachePool:null,transitions:m.transitions},h.memoizedState=m,h.childLanes=t.childLanes&~o,i.memoizedState=ku,a}return h=t.child,t=h.sibling,a=$n(h,{mode:"visible",children:a.children}),!(i.mode&1)&&(a.lanes=o),a.return=i,a.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=a,i.memoizedState=null,a}function Nu(t,i){return i=Qo({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function bo(t,i,o,a){return a!==null&&tu(a),Xr(i,t.child,null,o),t=Nu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Pw(t,i,o,a,c,h,m){if(o)return i.flags&256?(i.flags&=-257,a=Su(Error(n(422))),bo(t,i,m,a)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=a.fallback,c=i.mode,a=Qo({mode:"visible",children:a.children},c,0,null),h=yr(h,c,m,null),h.flags|=2,a.return=i,h.return=i,a.sibling=h,i.child=a,i.mode&1&&Xr(i,t.child,null,m),i.child.memoizedState=Ru(m),i.memoizedState=ku,h);if(!(i.mode&1))return bo(t,i,m,null);if(c.data==="$!"){if(a=c.nextSibling&&c.nextSibling.dataset,a)var _=a.dgst;return a=_,h=Error(n(419)),a=Su(h,a,void 0),bo(t,i,m,a)}if(_=(m&t.childLanes)!==0,ht||_){if(a=$e,a!==null){switch(m&-m){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=c&(a.suspendedLanes|m)?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,fn(t,c),$t(a,t,c,-1))}return $u(),a=Su(Error(n(421))),bo(t,i,m,a)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=Bw.bind(null,t),c._reactRetry=i,null):(t=h.treeContext,Ct=Dn(c.nextSibling),It=i,Ne=!0,jt=null,t!==null&&(Pt[At++]=dn,Pt[At++]=hn,Pt[At++]=ur,dn=t.id,hn=t.overflow,ur=i),i=Nu(i,a.children),i.flags|=4096,i)}function pp(t,i,o){t.lanes|=i;var a=t.alternate;a!==null&&(a.lanes|=i),su(t.return,i,o)}function Pu(t,i,o,a,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:a,tail:o,tailMode:c}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=a,h.tail=o,h.tailMode=c)}function mp(t,i,o){var a=i.pendingProps,c=a.revealOrder,h=a.tail;if(st(t,i,a.children,o),a=Ae.current,a&2)a=a&1|2,i.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&pp(t,o,i);else if(t.tag===19)pp(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}if(we(Ae,a),!(i.mode&1))i.memoizedState=null;else switch(c){case"forwards":for(o=i.child,c=null;o!==null;)t=o.alternate,t!==null&&Po(t)===null&&(c=o),o=o.sibling;o=c,o===null?(c=i.child,i.child=null):(c=o.sibling,o.sibling=null),Pu(i,!1,c,o,h);break;case"backwards":for(o=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&Po(t)===null){i.child=c;break}t=c.sibling,c.sibling=o,o=c,c=t}Pu(i,!0,o,null,h);break;case"together":Pu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Fo(t,i){!(i.mode&1)&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function mn(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),pr|=i.lanes,!(o&i.childLanes))return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=$n(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=$n(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function Aw(t,i,o){switch(i.tag){case 3:dp(i),Yr();break;case 5:Pf(i);break;case 1:dt(i.type)&&vo(i);break;case 4:au(i,i.stateNode.containerInfo);break;case 10:var a=i.type._context,c=i.memoizedProps.value;we(To,a._currentValue),a._currentValue=c;break;case 13:if(a=i.memoizedState,a!==null)return a.dehydrated!==null?(we(Ae,Ae.current&1),i.flags|=128,null):o&i.child.childLanes?fp(t,i,o):(we(Ae,Ae.current&1),t=mn(t,i,o),t!==null?t.sibling:null);we(Ae,Ae.current&1);break;case 19:if(a=(o&i.childLanes)!==0,t.flags&128){if(a)return mp(t,i,o);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),we(Ae,Ae.current),a)break;return null;case 22:case 23:return i.lanes=0,ap(t,i,o)}return mn(t,i,o)}var gp,Au,_p,yp;gp=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Au=function(){},_p=function(t,i,o,a){var c=t.memoizedProps;if(c!==a){t=i.stateNode,hr(en.current);var h=null;switch(o){case"input":c=sa(t,c),a=sa(t,a),h=[];break;case"select":c=j({},c,{value:void 0}),a=j({},a,{value:void 0}),h=[];break;case"textarea":c=aa(t,c),a=aa(t,a),h=[];break;default:typeof c.onClick!="function"&&typeof a.onClick=="function"&&(t.onclick=go)}ca(o,a);var m;o=null;for(k in c)if(!a.hasOwnProperty(k)&&c.hasOwnProperty(k)&&c[k]!=null)if(k==="style"){var _=c[k];for(m in _)_.hasOwnProperty(m)&&(o||(o={}),o[m]="")}else k!=="dangerouslySetInnerHTML"&&k!=="children"&&k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&k!=="autoFocus"&&(l.hasOwnProperty(k)?h||(h=[]):(h=h||[]).push(k,null));for(k in a){var v=a[k];if(_=c!=null?c[k]:void 0,a.hasOwnProperty(k)&&v!==_&&(v!=null||_!=null))if(k==="style")if(_){for(m in _)!_.hasOwnProperty(m)||v&&v.hasOwnProperty(m)||(o||(o={}),o[m]="");for(m in v)v.hasOwnProperty(m)&&_[m]!==v[m]&&(o||(o={}),o[m]=v[m])}else o||(h||(h=[]),h.push(k,o)),o=v;else k==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,_=_?_.__html:void 0,v!=null&&_!==v&&(h=h||[]).push(k,v)):k==="children"?typeof v!="string"&&typeof v!="number"||(h=h||[]).push(k,""+v):k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&(l.hasOwnProperty(k)?(v!=null&&k==="onScroll"&&Ie("scroll",t),h||_===v||(h=[])):(h=h||[]).push(k,v))}o&&(h=h||[]).push("style",o);var k=h;(i.updateQueue=k)&&(i.flags|=4)}},yp=function(t,i,o,a){o!==a&&(i.flags|=4)};function as(t,i){if(!Ne)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function nt(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,a=0;if(i)for(var c=t.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags&14680064,a|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags,a|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=a,t.childLanes=o,i}function Ow(t,i,o){var a=i.pendingProps;switch(Ja(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(i),null;case 1:return dt(i.type)&&yo(),nt(i),null;case 3:return a=i.stateNode,ei(),Ce(ct),Ce(et),du(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Io(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,jt!==null&&(Wu(jt),jt=null))),Au(t,i),nt(i),null;case 5:uu(i);var c=hr(rs.current);if(o=i.type,t!==null&&i.stateNode!=null)_p(t,i,o,a,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!a){if(i.stateNode===null)throw Error(n(166));return nt(i),null}if(t=hr(en.current),Io(i)){a=i.stateNode,o=i.type;var h=i.memoizedProps;switch(a[Zt]=i,a[Ji]=h,t=(i.mode&1)!==0,o){case"dialog":Ie("cancel",a),Ie("close",a);break;case"iframe":case"object":case"embed":Ie("load",a);break;case"video":case"audio":for(c=0;c<Qi.length;c++)Ie(Qi[c],a);break;case"source":Ie("error",a);break;case"img":case"image":case"link":Ie("error",a),Ie("load",a);break;case"details":Ie("toggle",a);break;case"input":Xd(a,h),Ie("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!h.multiple},Ie("invalid",a);break;case"textarea":eh(a,h),Ie("invalid",a)}ca(o,h),c=null;for(var m in h)if(h.hasOwnProperty(m)){var _=h[m];m==="children"?typeof _=="string"?a.textContent!==_&&(h.suppressHydrationWarning!==!0&&mo(a.textContent,_,t),c=["children",_]):typeof _=="number"&&a.textContent!==""+_&&(h.suppressHydrationWarning!==!0&&mo(a.textContent,_,t),c=["children",""+_]):l.hasOwnProperty(m)&&_!=null&&m==="onScroll"&&Ie("scroll",a)}switch(o){case"input":Hs(a),Zd(a,h,!0);break;case"textarea":Hs(a),nh(a);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(a.onclick=go)}a=c,i.updateQueue=a,a!==null&&(i.flags|=4)}else{m=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=rh(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=m.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof a.is=="string"?t=m.createElement(o,{is:a.is}):(t=m.createElement(o),o==="select"&&(m=t,a.multiple?m.multiple=!0:a.size&&(m.size=a.size))):t=m.createElementNS(t,o),t[Zt]=i,t[Ji]=a,gp(t,i,!1,!1),i.stateNode=t;e:{switch(m=da(o,a),o){case"dialog":Ie("cancel",t),Ie("close",t),c=a;break;case"iframe":case"object":case"embed":Ie("load",t),c=a;break;case"video":case"audio":for(c=0;c<Qi.length;c++)Ie(Qi[c],t);c=a;break;case"source":Ie("error",t),c=a;break;case"img":case"image":case"link":Ie("error",t),Ie("load",t),c=a;break;case"details":Ie("toggle",t),c=a;break;case"input":Xd(t,a),c=sa(t,a),Ie("invalid",t);break;case"option":c=a;break;case"select":t._wrapperState={wasMultiple:!!a.multiple},c=j({},a,{value:void 0}),Ie("invalid",t);break;case"textarea":eh(t,a),c=aa(t,a),Ie("invalid",t);break;default:c=a}ca(o,c),_=c;for(h in _)if(_.hasOwnProperty(h)){var v=_[h];h==="style"?oh(t,v):h==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,v!=null&&ih(t,v)):h==="children"?typeof v=="string"?(o!=="textarea"||v!=="")&&Ai(t,v):typeof v=="number"&&Ai(t,""+v):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(l.hasOwnProperty(h)?v!=null&&h==="onScroll"&&Ie("scroll",t):v!=null&&X(t,h,v,m))}switch(o){case"input":Hs(t),Zd(t,a,!1);break;case"textarea":Hs(t),nh(t);break;case"option":a.value!=null&&t.setAttribute("value",""+me(a.value));break;case"select":t.multiple=!!a.multiple,h=a.value,h!=null?Mr(t,!!a.multiple,h,!1):a.defaultValue!=null&&Mr(t,!!a.multiple,a.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=go)}switch(o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return nt(i),null;case 6:if(t&&i.stateNode!=null)yp(t,i,t.memoizedProps,a);else{if(typeof a!="string"&&i.stateNode===null)throw Error(n(166));if(o=hr(rs.current),hr(en.current),Io(i)){if(a=i.stateNode,o=i.memoizedProps,a[Zt]=i,(h=a.nodeValue!==o)&&(t=It,t!==null))switch(t.tag){case 3:mo(a.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&mo(a.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else a=(o.nodeType===9?o:o.ownerDocument).createTextNode(a),a[Zt]=i,i.stateNode=a}return nt(i),null;case 13:if(Ce(Ae),a=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ne&&Ct!==null&&i.mode&1&&!(i.flags&128))Ef(),Yr(),i.flags|=98560,h=!1;else if(h=Io(i),a!==null&&a.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[Zt]=i}else Yr(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;nt(i),h=!1}else jt!==null&&(Wu(jt),jt=null),h=!0;if(!h)return i.flags&65536?i:null}return i.flags&128?(i.lanes=o,i):(a=a!==null,a!==(t!==null&&t.memoizedState!==null)&&a&&(i.child.flags|=8192,i.mode&1&&(t===null||Ae.current&1?We===0&&(We=3):$u())),i.updateQueue!==null&&(i.flags|=4),nt(i),null);case 4:return ei(),Au(t,i),t===null&&Yi(i.stateNode.containerInfo),nt(i),null;case 10:return iu(i.type._context),nt(i),null;case 17:return dt(i.type)&&yo(),nt(i),null;case 19:if(Ce(Ae),h=i.memoizedState,h===null)return nt(i),null;if(a=(i.flags&128)!==0,m=h.rendering,m===null)if(a)as(h,!1);else{if(We!==0||t!==null&&t.flags&128)for(t=i.child;t!==null;){if(m=Po(t),m!==null){for(i.flags|=128,as(h,!1),a=m.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),i.subtreeFlags=0,a=o,o=i.child;o!==null;)h=o,t=a,h.flags&=14680066,m=h.alternate,m===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=m.childLanes,h.lanes=m.lanes,h.child=m.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=m.memoizedProps,h.memoizedState=m.memoizedState,h.updateQueue=m.updateQueue,h.type=m.type,t=m.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return we(Ae,Ae.current&1|2),i.child}t=t.sibling}h.tail!==null&&Fe()>ii&&(i.flags|=128,a=!0,as(h,!1),i.lanes=4194304)}else{if(!a)if(t=Po(m),t!==null){if(i.flags|=128,a=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),as(h,!0),h.tail===null&&h.tailMode==="hidden"&&!m.alternate&&!Ne)return nt(i),null}else 2*Fe()-h.renderingStartTime>ii&&o!==1073741824&&(i.flags|=128,a=!0,as(h,!1),i.lanes=4194304);h.isBackwards?(m.sibling=i.child,i.child=m):(o=h.last,o!==null?o.sibling=m:i.child=m,h.last=m)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Fe(),i.sibling=null,o=Ae.current,we(Ae,a?o&1|2:o&1),i):(nt(i),null);case 22:case 23:return Vu(),a=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==a&&(i.flags|=8192),a&&i.mode&1?Tt&1073741824&&(nt(i),i.subtreeFlags&6&&(i.flags|=8192)):nt(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function xw(t,i){switch(Ja(i),i.tag){case 1:return dt(i.type)&&yo(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ei(),Ce(ct),Ce(et),du(),t=i.flags,t&65536&&!(t&128)?(i.flags=t&-65537|128,i):null;case 5:return uu(i),null;case 13:if(Ce(Ae),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Yr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ce(Ae),null;case 4:return ei(),null;case 10:return iu(i.type._context),null;case 22:case 23:return Vu(),null;case 24:return null;default:return null}}var Uo=!1,rt=!1,Dw=typeof WeakSet=="function"?WeakSet:Set,z=null;function ni(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(a){De(t,i,a)}else o.current=null}function Ou(t,i,o){try{o()}catch(a){De(t,i,a)}}var vp=!1;function Lw(t,i){if(Va=ro,t=Yh(),Ma(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var a=o.getSelection&&o.getSelection();if(a&&a.rangeCount!==0){o=a.anchorNode;var c=a.anchorOffset,h=a.focusNode;a=a.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var m=0,_=-1,v=-1,k=0,A=0,O=t,N=null;t:for(;;){for(var U;O!==o||c!==0&&O.nodeType!==3||(_=m+c),O!==h||a!==0&&O.nodeType!==3||(v=m+a),O.nodeType===3&&(m+=O.nodeValue.length),(U=O.firstChild)!==null;)N=O,O=U;for(;;){if(O===t)break t;if(N===o&&++k===c&&(_=m),N===h&&++A===a&&(v=m),(U=O.nextSibling)!==null)break;O=N,N=O.parentNode}O=U}o=_===-1||v===-1?null:{start:_,end:v}}else o=null}o=o||{start:0,end:0}}else o=null;for($a={focusedElem:t,selectionRange:o},ro=!1,z=i;z!==null;)if(i=z,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,z=t;else for(;z!==null;){i=z;try{var W=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(W!==null){var B=W.memoizedProps,Ue=W.memoizedState,C=i.stateNode,E=C.getSnapshotBeforeUpdate(i.elementType===i.type?B:Wt(i.type,B),Ue);C.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var T=i.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(D){De(i,i.return,D)}if(t=i.sibling,t!==null){t.return=i.return,z=t;break}z=i.return}return W=vp,vp=!1,W}function us(t,i,o){var a=i.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var c=a=a.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&Ou(i,o,h)}c=c.next}while(c!==a)}}function zo(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var a=o.create;o.destroy=a()}o=o.next}while(o!==i)}}function xu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function wp(t){var i=t.alternate;i!==null&&(t.alternate=null,wp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Zt],delete i[Ji],delete i[Ka],delete i[gw],delete i[_w])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ep(t){return t.tag===5||t.tag===3||t.tag===4}function Sp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ep(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Du(t,i,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=go));else if(a!==4&&(t=t.child,t!==null))for(Du(t,i,o),t=t.sibling;t!==null;)Du(t,i,o),t=t.sibling}function Lu(t,i,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(a!==4&&(t=t.child,t!==null))for(Lu(t,i,o),t=t.sibling;t!==null;)Lu(t,i,o),t=t.sibling}var Ye=null,Bt=!1;function zn(t,i,o){for(o=o.child;o!==null;)Ip(t,i,o),o=o.sibling}function Ip(t,i,o){if(Jt&&typeof Jt.onCommitFiberUnmount=="function")try{Jt.onCommitFiberUnmount(Xs,o)}catch{}switch(o.tag){case 5:rt||ni(o,i);case 6:var a=Ye,c=Bt;Ye=null,zn(t,i,o),Ye=a,Bt=c,Ye!==null&&(Bt?(t=Ye,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):Ye.removeChild(o.stateNode));break;case 18:Ye!==null&&(Bt?(t=Ye,o=o.stateNode,t.nodeType===8?Ga(t.parentNode,o):t.nodeType===1&&Ga(t,o),Wi(t)):Ga(Ye,o.stateNode));break;case 4:a=Ye,c=Bt,Ye=o.stateNode.containerInfo,Bt=!0,zn(t,i,o),Ye=a,Bt=c;break;case 0:case 11:case 14:case 15:if(!rt&&(a=o.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){c=a=a.next;do{var h=c,m=h.destroy;h=h.tag,m!==void 0&&(h&2||h&4)&&Ou(o,i,m),c=c.next}while(c!==a)}zn(t,i,o);break;case 1:if(!rt&&(ni(o,i),a=o.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=o.memoizedProps,a.state=o.memoizedState,a.componentWillUnmount()}catch(_){De(o,i,_)}zn(t,i,o);break;case 21:zn(t,i,o);break;case 22:o.mode&1?(rt=(a=rt)||o.memoizedState!==null,zn(t,i,o),rt=a):zn(t,i,o);break;default:zn(t,i,o)}}function Cp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new Dw),i.forEach(function(a){var c=Vw.bind(null,t,a);o.has(a)||(o.add(a),a.then(c,c))})}}function Vt(t,i){var o=i.deletions;if(o!==null)for(var a=0;a<o.length;a++){var c=o[a];try{var h=t,m=i,_=m;e:for(;_!==null;){switch(_.tag){case 5:Ye=_.stateNode,Bt=!1;break e;case 3:Ye=_.stateNode.containerInfo,Bt=!0;break e;case 4:Ye=_.stateNode.containerInfo,Bt=!0;break e}_=_.return}if(Ye===null)throw Error(n(160));Ip(h,m,c),Ye=null,Bt=!1;var v=c.alternate;v!==null&&(v.return=null),c.return=null}catch(k){De(c,i,k)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Tp(i,t),i=i.sibling}function Tp(t,i){var o=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vt(i,t),nn(t),a&4){try{us(3,t,t.return),zo(3,t)}catch(B){De(t,t.return,B)}try{us(5,t,t.return)}catch(B){De(t,t.return,B)}}break;case 1:Vt(i,t),nn(t),a&512&&o!==null&&ni(o,o.return);break;case 5:if(Vt(i,t),nn(t),a&512&&o!==null&&ni(o,o.return),t.flags&32){var c=t.stateNode;try{Ai(c,"")}catch(B){De(t,t.return,B)}}if(a&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,m=o!==null?o.memoizedProps:h,_=t.type,v=t.updateQueue;if(t.updateQueue=null,v!==null)try{_==="input"&&h.type==="radio"&&h.name!=null&&Jd(c,h),da(_,m);var k=da(_,h);for(m=0;m<v.length;m+=2){var A=v[m],O=v[m+1];A==="style"?oh(c,O):A==="dangerouslySetInnerHTML"?ih(c,O):A==="children"?Ai(c,O):X(c,A,O,k)}switch(_){case"input":oa(c,h);break;case"textarea":th(c,h);break;case"select":var N=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var U=h.value;U!=null?Mr(c,!!h.multiple,U,!1):N!==!!h.multiple&&(h.defaultValue!=null?Mr(c,!!h.multiple,h.defaultValue,!0):Mr(c,!!h.multiple,h.multiple?[]:"",!1))}c[Ji]=h}catch(B){De(t,t.return,B)}}break;case 6:if(Vt(i,t),nn(t),a&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(B){De(t,t.return,B)}}break;case 3:if(Vt(i,t),nn(t),a&4&&o!==null&&o.memoizedState.isDehydrated)try{Wi(i.containerInfo)}catch(B){De(t,t.return,B)}break;case 4:Vt(i,t),nn(t);break;case 13:Vt(i,t),nn(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(Fu=Fe())),a&4&&Cp(t);break;case 22:if(A=o!==null&&o.memoizedState!==null,t.mode&1?(rt=(k=rt)||A,Vt(i,t),rt=k):Vt(i,t),nn(t),a&8192){if(k=t.memoizedState!==null,(t.stateNode.isHidden=k)&&!A&&t.mode&1)for(z=t,A=t.child;A!==null;){for(O=z=A;z!==null;){switch(N=z,U=N.child,N.tag){case 0:case 11:case 14:case 15:us(4,N,N.return);break;case 1:ni(N,N.return);var W=N.stateNode;if(typeof W.componentWillUnmount=="function"){a=N,o=N.return;try{i=a,W.props=i.memoizedProps,W.state=i.memoizedState,W.componentWillUnmount()}catch(B){De(a,o,B)}}break;case 5:ni(N,N.return);break;case 22:if(N.memoizedState!==null){Np(O);continue}}U!==null?(U.return=N,z=U):Np(O)}A=A.sibling}e:for(A=null,O=t;;){if(O.tag===5){if(A===null){A=O;try{c=O.stateNode,k?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(_=O.stateNode,v=O.memoizedProps.style,m=v!=null&&v.hasOwnProperty("display")?v.display:null,_.style.display=sh("display",m))}catch(B){De(t,t.return,B)}}}else if(O.tag===6){if(A===null)try{O.stateNode.nodeValue=k?"":O.memoizedProps}catch(B){De(t,t.return,B)}}else if((O.tag!==22&&O.tag!==23||O.memoizedState===null||O===t)&&O.child!==null){O.child.return=O,O=O.child;continue}if(O===t)break e;for(;O.sibling===null;){if(O.return===null||O.return===t)break e;A===O&&(A=null),O=O.return}A===O&&(A=null),O.sibling.return=O.return,O=O.sibling}}break;case 19:Vt(i,t),nn(t),a&4&&Cp(t);break;case 21:break;default:Vt(i,t),nn(t)}}function nn(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(Ep(o)){var a=o;break e}o=o.return}throw Error(n(160))}switch(a.tag){case 5:var c=a.stateNode;a.flags&32&&(Ai(c,""),a.flags&=-33);var h=Sp(t);Lu(t,h,c);break;case 3:case 4:var m=a.stateNode.containerInfo,_=Sp(t);Du(t,_,m);break;default:throw Error(n(161))}}catch(v){De(t,t.return,v)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Mw(t,i,o){z=t,kp(t)}function kp(t,i,o){for(var a=(t.mode&1)!==0;z!==null;){var c=z,h=c.child;if(c.tag===22&&a){var m=c.memoizedState!==null||Uo;if(!m){var _=c.alternate,v=_!==null&&_.memoizedState!==null||rt;_=Uo;var k=rt;if(Uo=m,(rt=v)&&!k)for(z=c;z!==null;)m=z,v=m.child,m.tag===22&&m.memoizedState!==null?Pp(c):v!==null?(v.return=m,z=v):Pp(c);for(;h!==null;)z=h,kp(h),h=h.sibling;z=c,Uo=_,rt=k}Rp(t)}else c.subtreeFlags&8772&&h!==null?(h.return=c,z=h):Rp(t)}}function Rp(t){for(;z!==null;){var i=z;if(i.flags&8772){var o=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:rt||zo(5,i);break;case 1:var a=i.stateNode;if(i.flags&4&&!rt)if(o===null)a.componentDidMount();else{var c=i.elementType===i.type?o.memoizedProps:Wt(i.type,o.memoizedProps);a.componentDidUpdate(c,o.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&Nf(i,h,a);break;case 3:var m=i.updateQueue;if(m!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Nf(i,m,o)}break;case 5:var _=i.stateNode;if(o===null&&i.flags&4){o=_;var v=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":v.autoFocus&&o.focus();break;case"img":v.src&&(o.src=v.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var k=i.alternate;if(k!==null){var A=k.memoizedState;if(A!==null){var O=A.dehydrated;O!==null&&Wi(O)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}rt||i.flags&512&&xu(i)}catch(N){De(i,i.return,N)}}if(i===t){z=null;break}if(o=i.sibling,o!==null){o.return=i.return,z=o;break}z=i.return}}function Np(t){for(;z!==null;){var i=z;if(i===t){z=null;break}var o=i.sibling;if(o!==null){o.return=i.return,z=o;break}z=i.return}}function Pp(t){for(;z!==null;){var i=z;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{zo(4,i)}catch(v){De(i,o,v)}break;case 1:var a=i.stateNode;if(typeof a.componentDidMount=="function"){var c=i.return;try{a.componentDidMount()}catch(v){De(i,c,v)}}var h=i.return;try{xu(i)}catch(v){De(i,h,v)}break;case 5:var m=i.return;try{xu(i)}catch(v){De(i,m,v)}}}catch(v){De(i,i.return,v)}if(i===t){z=null;break}var _=i.sibling;if(_!==null){_.return=i.return,z=_;break}z=i.return}}var bw=Math.ceil,jo=J.ReactCurrentDispatcher,Mu=J.ReactCurrentOwner,Dt=J.ReactCurrentBatchConfig,ue=0,$e=null,ze=null,Xe=0,Tt=0,ri=Ln(0),We=0,cs=null,pr=0,Wo=0,bu=0,ds=null,ft=null,Fu=0,ii=1/0,gn=null,Bo=!1,Uu=null,jn=null,Vo=!1,Wn=null,$o=0,hs=0,zu=null,Ho=-1,qo=0;function ot(){return ue&6?Fe():Ho!==-1?Ho:Ho=Fe()}function Bn(t){return t.mode&1?ue&2&&Xe!==0?Xe&-Xe:vw.transition!==null?(qo===0&&(qo=Eh()),qo):(t=ge,t!==0||(t=window.event,t=t===void 0?16:Ah(t.type)),t):1}function $t(t,i,o,a){if(50<hs)throw hs=0,zu=null,Error(n(185));bi(t,o,a),(!(ue&2)||t!==$e)&&(t===$e&&(!(ue&2)&&(Wo|=o),We===4&&Vn(t,Xe)),pt(t,a),o===1&&ue===0&&!(i.mode&1)&&(ii=Fe()+500,wo&&bn()))}function pt(t,i){var o=t.callbackNode;vv(t,i);var a=eo(t,t===$e?Xe:0);if(a===0)o!==null&&yh(o),t.callbackNode=null,t.callbackPriority=0;else if(i=a&-a,t.callbackPriority!==i){if(o!=null&&yh(o),i===1)t.tag===0?yw(Op.bind(null,t)):gf(Op.bind(null,t)),pw(function(){!(ue&6)&&bn()}),o=null;else{switch(Sh(a)){case 1:o=ya;break;case 4:o=vh;break;case 16:o=Ys;break;case 536870912:o=wh;break;default:o=Ys}o=zp(o,Ap.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function Ap(t,i){if(Ho=-1,qo=0,ue&6)throw Error(n(327));var o=t.callbackNode;if(si()&&t.callbackNode!==o)return null;var a=eo(t,t===$e?Xe:0);if(a===0)return null;if(a&30||a&t.expiredLanes||i)i=Go(t,a);else{i=a;var c=ue;ue|=2;var h=Dp();($e!==t||Xe!==i)&&(gn=null,ii=Fe()+500,gr(t,i));do try{zw();break}catch(_){xp(t,_)}while(!0);ru(),jo.current=h,ue=c,ze!==null?i=0:($e=null,Xe=0,i=We)}if(i!==0){if(i===2&&(c=va(t),c!==0&&(a=c,i=ju(t,c))),i===1)throw o=cs,gr(t,0),Vn(t,a),pt(t,Fe()),o;if(i===6)Vn(t,a);else{if(c=t.current.alternate,!(a&30)&&!Fw(c)&&(i=Go(t,a),i===2&&(h=va(t),h!==0&&(a=h,i=ju(t,h))),i===1))throw o=cs,gr(t,0),Vn(t,a),pt(t,Fe()),o;switch(t.finishedWork=c,t.finishedLanes=a,i){case 0:case 1:throw Error(n(345));case 2:_r(t,ft,gn);break;case 3:if(Vn(t,a),(a&130023424)===a&&(i=Fu+500-Fe(),10<i)){if(eo(t,0)!==0)break;if(c=t.suspendedLanes,(c&a)!==a){ot(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=qa(_r.bind(null,t,ft,gn),i);break}_r(t,ft,gn);break;case 4:if(Vn(t,a),(a&4194240)===a)break;for(i=t.eventTimes,c=-1;0<a;){var m=31-Ut(a);h=1<<m,m=i[m],m>c&&(c=m),a&=~h}if(a=c,a=Fe()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*bw(a/1960))-a,10<a){t.timeoutHandle=qa(_r.bind(null,t,ft,gn),a);break}_r(t,ft,gn);break;case 5:_r(t,ft,gn);break;default:throw Error(n(329))}}}return pt(t,Fe()),t.callbackNode===o?Ap.bind(null,t):null}function ju(t,i){var o=ds;return t.current.memoizedState.isDehydrated&&(gr(t,i).flags|=256),t=Go(t,i),t!==2&&(i=ft,ft=o,i!==null&&Wu(i)),t}function Wu(t){ft===null?ft=t:ft.push.apply(ft,t)}function Fw(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var a=0;a<o.length;a++){var c=o[a],h=c.getSnapshot;c=c.value;try{if(!zt(h(),c))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Vn(t,i){for(i&=~bu,i&=~Wo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-Ut(i),a=1<<o;t[o]=-1,i&=~a}}function Op(t){if(ue&6)throw Error(n(327));si();var i=eo(t,0);if(!(i&1))return pt(t,Fe()),null;var o=Go(t,i);if(t.tag!==0&&o===2){var a=va(t);a!==0&&(i=a,o=ju(t,a))}if(o===1)throw o=cs,gr(t,0),Vn(t,i),pt(t,Fe()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,_r(t,ft,gn),pt(t,Fe()),null}function Bu(t,i){var o=ue;ue|=1;try{return t(i)}finally{ue=o,ue===0&&(ii=Fe()+500,wo&&bn())}}function mr(t){Wn!==null&&Wn.tag===0&&!(ue&6)&&si();var i=ue;ue|=1;var o=Dt.transition,a=ge;try{if(Dt.transition=null,ge=1,t)return t()}finally{ge=a,Dt.transition=o,ue=i,!(ue&6)&&bn()}}function Vu(){Tt=ri.current,Ce(ri)}function gr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,fw(o)),ze!==null)for(o=ze.return;o!==null;){var a=o;switch(Ja(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&yo();break;case 3:ei(),Ce(ct),Ce(et),du();break;case 5:uu(a);break;case 4:ei();break;case 13:Ce(Ae);break;case 19:Ce(Ae);break;case 10:iu(a.type._context);break;case 22:case 23:Vu()}o=o.return}if($e=t,ze=t=$n(t.current,null),Xe=Tt=i,We=0,cs=null,bu=Wo=pr=0,ft=ds=null,dr!==null){for(i=0;i<dr.length;i++)if(o=dr[i],a=o.interleaved,a!==null){o.interleaved=null;var c=a.next,h=o.pending;if(h!==null){var m=h.next;h.next=c,a.next=m}o.pending=a}dr=null}return t}function xp(t,i){do{var o=ze;try{if(ru(),Ao.current=Lo,Oo){for(var a=Oe.memoizedState;a!==null;){var c=a.queue;c!==null&&(c.pending=null),a=a.next}Oo=!1}if(fr=0,Ve=je=Oe=null,is=!1,ss=0,Mu.current=null,o===null||o.return===null){We=1,cs=i,ze=null;break}e:{var h=t,m=o.return,_=o,v=i;if(i=Xe,_.flags|=32768,v!==null&&typeof v=="object"&&typeof v.then=="function"){var k=v,A=_,O=A.tag;if(!(A.mode&1)&&(O===0||O===11||O===15)){var N=A.alternate;N?(A.updateQueue=N.updateQueue,A.memoizedState=N.memoizedState,A.lanes=N.lanes):(A.updateQueue=null,A.memoizedState=null)}var U=rp(m);if(U!==null){U.flags&=-257,ip(U,m,_,h,i),U.mode&1&&np(h,k,i),i=U,v=k;var W=i.updateQueue;if(W===null){var B=new Set;B.add(v),i.updateQueue=B}else W.add(v);break e}else{if(!(i&1)){np(h,k,i),$u();break e}v=Error(n(426))}}else if(Ne&&_.mode&1){var Ue=rp(m);if(Ue!==null){!(Ue.flags&65536)&&(Ue.flags|=256),ip(Ue,m,_,h,i),tu(ti(v,_));break e}}h=v=ti(v,_),We!==4&&(We=2),ds===null?ds=[h]:ds.push(h),h=m;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var C=ep(h,v,i);Rf(h,C);break e;case 1:_=v;var E=h.type,T=h.stateNode;if(!(h.flags&128)&&(typeof E.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(jn===null||!jn.has(T)))){h.flags|=65536,i&=-i,h.lanes|=i;var D=tp(h,_,i);Rf(h,D);break e}}h=h.return}while(h!==null)}Mp(o)}catch(V){i=V,ze===o&&o!==null&&(ze=o=o.return);continue}break}while(!0)}function Dp(){var t=jo.current;return jo.current=Lo,t===null?Lo:t}function $u(){(We===0||We===3||We===2)&&(We=4),$e===null||!(pr&268435455)&&!(Wo&268435455)||Vn($e,Xe)}function Go(t,i){var o=ue;ue|=2;var a=Dp();($e!==t||Xe!==i)&&(gn=null,gr(t,i));do try{Uw();break}catch(c){xp(t,c)}while(!0);if(ru(),ue=o,jo.current=a,ze!==null)throw Error(n(261));return $e=null,Xe=0,We}function Uw(){for(;ze!==null;)Lp(ze)}function zw(){for(;ze!==null&&!cv();)Lp(ze)}function Lp(t){var i=Up(t.alternate,t,Tt);t.memoizedProps=t.pendingProps,i===null?Mp(t):ze=i,Mu.current=null}function Mp(t){var i=t;do{var o=i.alternate;if(t=i.return,i.flags&32768){if(o=xw(o,i),o!==null){o.flags&=32767,ze=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{We=6,ze=null;return}}else if(o=Ow(o,i,Tt),o!==null){ze=o;return}if(i=i.sibling,i!==null){ze=i;return}ze=i=t}while(i!==null);We===0&&(We=5)}function _r(t,i,o){var a=ge,c=Dt.transition;try{Dt.transition=null,ge=1,jw(t,i,o,a)}finally{Dt.transition=c,ge=a}return null}function jw(t,i,o,a){do si();while(Wn!==null);if(ue&6)throw Error(n(327));o=t.finishedWork;var c=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(wv(t,h),t===$e&&(ze=$e=null,Xe=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||Vo||(Vo=!0,zp(Ys,function(){return si(),null})),h=(o.flags&15990)!==0,o.subtreeFlags&15990||h){h=Dt.transition,Dt.transition=null;var m=ge;ge=1;var _=ue;ue|=4,Mu.current=null,Lw(t,o),Tp(o,t),ow($a),ro=!!Va,$a=Va=null,t.current=o,Mw(o),dv(),ue=_,ge=m,Dt.transition=h}else t.current=o;if(Vo&&(Vo=!1,Wn=t,$o=c),h=t.pendingLanes,h===0&&(jn=null),pv(o.stateNode),pt(t,Fe()),i!==null)for(a=t.onRecoverableError,o=0;o<i.length;o++)c=i[o],a(c.value,{componentStack:c.stack,digest:c.digest});if(Bo)throw Bo=!1,t=Uu,Uu=null,t;return $o&1&&t.tag!==0&&si(),h=t.pendingLanes,h&1?t===zu?hs++:(hs=0,zu=t):hs=0,bn(),null}function si(){if(Wn!==null){var t=Sh($o),i=Dt.transition,o=ge;try{if(Dt.transition=null,ge=16>t?16:t,Wn===null)var a=!1;else{if(t=Wn,Wn=null,$o=0,ue&6)throw Error(n(331));var c=ue;for(ue|=4,z=t.current;z!==null;){var h=z,m=h.child;if(z.flags&16){var _=h.deletions;if(_!==null){for(var v=0;v<_.length;v++){var k=_[v];for(z=k;z!==null;){var A=z;switch(A.tag){case 0:case 11:case 15:us(8,A,h)}var O=A.child;if(O!==null)O.return=A,z=O;else for(;z!==null;){A=z;var N=A.sibling,U=A.return;if(wp(A),A===k){z=null;break}if(N!==null){N.return=U,z=N;break}z=U}}}var W=h.alternate;if(W!==null){var B=W.child;if(B!==null){W.child=null;do{var Ue=B.sibling;B.sibling=null,B=Ue}while(B!==null)}}z=h}}if(h.subtreeFlags&2064&&m!==null)m.return=h,z=m;else e:for(;z!==null;){if(h=z,h.flags&2048)switch(h.tag){case 0:case 11:case 15:us(9,h,h.return)}var C=h.sibling;if(C!==null){C.return=h.return,z=C;break e}z=h.return}}var E=t.current;for(z=E;z!==null;){m=z;var T=m.child;if(m.subtreeFlags&2064&&T!==null)T.return=m,z=T;else e:for(m=E;z!==null;){if(_=z,_.flags&2048)try{switch(_.tag){case 0:case 11:case 15:zo(9,_)}}catch(V){De(_,_.return,V)}if(_===m){z=null;break e}var D=_.sibling;if(D!==null){D.return=_.return,z=D;break e}z=_.return}}if(ue=c,bn(),Jt&&typeof Jt.onPostCommitFiberRoot=="function")try{Jt.onPostCommitFiberRoot(Xs,t)}catch{}a=!0}return a}finally{ge=o,Dt.transition=i}}return!1}function bp(t,i,o){i=ti(o,i),i=ep(t,i,1),t=Un(t,i,1),i=ot(),t!==null&&(bi(t,1,i),pt(t,i))}function De(t,i,o){if(t.tag===3)bp(t,t,o);else for(;i!==null;){if(i.tag===3){bp(i,t,o);break}else if(i.tag===1){var a=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(jn===null||!jn.has(a))){t=ti(o,t),t=tp(i,t,1),i=Un(i,t,1),t=ot(),i!==null&&(bi(i,1,t),pt(i,t));break}}i=i.return}}function Ww(t,i,o){var a=t.pingCache;a!==null&&a.delete(i),i=ot(),t.pingedLanes|=t.suspendedLanes&o,$e===t&&(Xe&o)===o&&(We===4||We===3&&(Xe&130023424)===Xe&&500>Fe()-Fu?gr(t,0):bu|=o),pt(t,i)}function Fp(t,i){i===0&&(t.mode&1?(i=Zs,Zs<<=1,!(Zs&130023424)&&(Zs=4194304)):i=1);var o=ot();t=fn(t,i),t!==null&&(bi(t,i,o),pt(t,o))}function Bw(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Fp(t,o)}function Vw(t,i){var o=0;switch(t.tag){case 13:var a=t.stateNode,c=t.memoizedState;c!==null&&(o=c.retryLane);break;case 19:a=t.stateNode;break;default:throw Error(n(314))}a!==null&&a.delete(i),Fp(t,o)}var Up;Up=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||ct.current)ht=!0;else{if(!(t.lanes&o)&&!(i.flags&128))return ht=!1,Aw(t,i,o);ht=!!(t.flags&131072)}else ht=!1,Ne&&i.flags&1048576&&_f(i,So,i.index);switch(i.lanes=0,i.tag){case 2:var a=i.type;Fo(t,i),t=i.pendingProps;var c=Gr(i,et.current);Zr(i,o),c=pu(null,i,a,t,c,o);var h=mu();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,dt(a)?(h=!0,vo(i)):h=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,lu(i),c.updater=Mo,i.stateNode=c,c._reactInternals=i,Eu(i,a,t,o),i=Tu(null,i,a,!0,h,o)):(i.tag=0,Ne&&h&&Xa(i),st(null,i,c,o),i=i.child),i;case 16:a=i.elementType;e:{switch(Fo(t,i),t=i.pendingProps,c=a._init,a=c(a._payload),i.type=a,c=i.tag=Hw(a),t=Wt(a,t),c){case 0:i=Cu(null,i,a,t,o);break e;case 1:i=cp(null,i,a,t,o);break e;case 11:i=sp(null,i,a,t,o);break e;case 14:i=op(null,i,a,Wt(a.type,t),o);break e}throw Error(n(306,a,""))}return i;case 0:return a=i.type,c=i.pendingProps,c=i.elementType===a?c:Wt(a,c),Cu(t,i,a,c,o);case 1:return a=i.type,c=i.pendingProps,c=i.elementType===a?c:Wt(a,c),cp(t,i,a,c,o);case 3:e:{if(dp(i),t===null)throw Error(n(387));a=i.pendingProps,h=i.memoizedState,c=h.element,kf(t,i),No(i,a,null,o);var m=i.memoizedState;if(a=m.element,h.isDehydrated)if(h={element:a,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){c=ti(Error(n(423)),i),i=hp(t,i,a,o,c);break e}else if(a!==c){c=ti(Error(n(424)),i),i=hp(t,i,a,o,c);break e}else for(Ct=Dn(i.stateNode.containerInfo.firstChild),It=i,Ne=!0,jt=null,o=Cf(i,null,a,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Yr(),a===c){i=mn(t,i,o);break e}st(t,i,a,o)}i=i.child}return i;case 5:return Pf(i),t===null&&eu(i),a=i.type,c=i.pendingProps,h=t!==null?t.memoizedProps:null,m=c.children,Ha(a,c)?m=null:h!==null&&Ha(a,h)&&(i.flags|=32),up(t,i),st(t,i,m,o),i.child;case 6:return t===null&&eu(i),null;case 13:return fp(t,i,o);case 4:return au(i,i.stateNode.containerInfo),a=i.pendingProps,t===null?i.child=Xr(i,null,a,o):st(t,i,a,o),i.child;case 11:return a=i.type,c=i.pendingProps,c=i.elementType===a?c:Wt(a,c),sp(t,i,a,c,o);case 7:return st(t,i,i.pendingProps,o),i.child;case 8:return st(t,i,i.pendingProps.children,o),i.child;case 12:return st(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(a=i.type._context,c=i.pendingProps,h=i.memoizedProps,m=c.value,we(To,a._currentValue),a._currentValue=m,h!==null)if(zt(h.value,m)){if(h.children===c.children&&!ct.current){i=mn(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var _=h.dependencies;if(_!==null){m=h.child;for(var v=_.firstContext;v!==null;){if(v.context===a){if(h.tag===1){v=pn(-1,o&-o),v.tag=2;var k=h.updateQueue;if(k!==null){k=k.shared;var A=k.pending;A===null?v.next=v:(v.next=A.next,A.next=v),k.pending=v}}h.lanes|=o,v=h.alternate,v!==null&&(v.lanes|=o),su(h.return,o,i),_.lanes|=o;break}v=v.next}}else if(h.tag===10)m=h.type===i.type?null:h.child;else if(h.tag===18){if(m=h.return,m===null)throw Error(n(341));m.lanes|=o,_=m.alternate,_!==null&&(_.lanes|=o),su(m,o,i),m=h.sibling}else m=h.child;if(m!==null)m.return=h;else for(m=h;m!==null;){if(m===i){m=null;break}if(h=m.sibling,h!==null){h.return=m.return,m=h;break}m=m.return}h=m}st(t,i,c.children,o),i=i.child}return i;case 9:return c=i.type,a=i.pendingProps.children,Zr(i,o),c=Ot(c),a=a(c),i.flags|=1,st(t,i,a,o),i.child;case 14:return a=i.type,c=Wt(a,i.pendingProps),c=Wt(a.type,c),op(t,i,a,c,o);case 15:return lp(t,i,i.type,i.pendingProps,o);case 17:return a=i.type,c=i.pendingProps,c=i.elementType===a?c:Wt(a,c),Fo(t,i),i.tag=1,dt(a)?(t=!0,vo(i)):t=!1,Zr(i,o),Jf(i,a,c),Eu(i,a,c,o),Tu(null,i,a,!0,t,o);case 19:return mp(t,i,o);case 22:return ap(t,i,o)}throw Error(n(156,i.tag))};function zp(t,i){return _h(t,i)}function $w(t,i,o,a){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lt(t,i,o,a){return new $w(t,i,o,a)}function Hu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Hw(t){if(typeof t=="function")return Hu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Nt)return 11;if(t===Xt)return 14}return 2}function $n(t,i){var o=t.alternate;return o===null?(o=Lt(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Ko(t,i,o,a,c,h){var m=2;if(a=t,typeof t=="function")Hu(t)&&(m=1);else if(typeof t=="string")m=5;else e:switch(t){case Z:return yr(o.children,c,h,i);case le:m=8,c|=8;break;case Be:return t=Lt(12,o,i,c|2),t.elementType=Be,t.lanes=h,t;case wt:return t=Lt(13,o,i,c),t.elementType=wt,t.lanes=h,t;case Ft:return t=Lt(19,o,i,c),t.elementType=Ft,t.lanes=h,t;case xe:return Qo(o,c,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case it:m=10;break e;case Yt:m=9;break e;case Nt:m=11;break e;case Xt:m=14;break e;case ut:m=16,a=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Lt(m,o,i,c),i.elementType=t,i.type=a,i.lanes=h,i}function yr(t,i,o,a){return t=Lt(7,t,a,i),t.lanes=o,t}function Qo(t,i,o,a){return t=Lt(22,t,a,i),t.elementType=xe,t.lanes=o,t.stateNode={isHidden:!1},t}function qu(t,i,o){return t=Lt(6,t,null,i),t.lanes=o,t}function Gu(t,i,o){return i=Lt(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function qw(t,i,o,a,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wa(0),this.expirationTimes=wa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wa(0),this.identifierPrefix=a,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function Ku(t,i,o,a,c,h,m,_,v){return t=new qw(t,i,o,_,v),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Lt(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:a,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},lu(h),t}function Gw(t,i,o){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ie,key:a==null?null:""+a,children:t,containerInfo:i,implementation:o}}function jp(t){if(!t)return Mn;t=t._reactInternals;e:{if(or(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(dt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(dt(o))return pf(t,o,i)}return i}function Wp(t,i,o,a,c,h,m,_,v){return t=Ku(o,a,!0,t,c,h,m,_,v),t.context=jp(null),o=t.current,a=ot(),c=Bn(o),h=pn(a,c),h.callback=i??null,Un(o,h,c),t.current.lanes=c,bi(t,c,a),pt(t,a),t}function Yo(t,i,o,a){var c=i.current,h=ot(),m=Bn(c);return o=jp(o),i.context===null?i.context=o:i.pendingContext=o,i=pn(h,m),i.payload={element:t},a=a===void 0?null:a,a!==null&&(i.callback=a),t=Un(c,i,m),t!==null&&($t(t,c,m,h),Ro(t,c,m)),m}function Xo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Bp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function Qu(t,i){Bp(t,i),(t=t.alternate)&&Bp(t,i)}function Kw(){return null}var Vp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Yu(t){this._internalRoot=t}Jo.prototype.render=Yu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Yo(t,i,null,null)},Jo.prototype.unmount=Yu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;mr(function(){Yo(null,t,null,null)}),i[un]=null}};function Jo(t){this._internalRoot=t}Jo.prototype.unstable_scheduleHydration=function(t){if(t){var i=Th();t={blockedOn:null,target:t,priority:i};for(var o=0;o<An.length&&i!==0&&i<An[o].priority;o++);An.splice(o,0,t),o===0&&Nh(t)}};function Xu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function $p(){}function Qw(t,i,o,a,c){if(c){if(typeof a=="function"){var h=a;a=function(){var k=Xo(m);h.call(k)}}var m=Wp(i,a,t,0,null,!1,!1,"",$p);return t._reactRootContainer=m,t[un]=m.current,Yi(t.nodeType===8?t.parentNode:t),mr(),m}for(;c=t.lastChild;)t.removeChild(c);if(typeof a=="function"){var _=a;a=function(){var k=Xo(v);_.call(k)}}var v=Ku(t,0,!1,null,null,!1,!1,"",$p);return t._reactRootContainer=v,t[un]=v.current,Yi(t.nodeType===8?t.parentNode:t),mr(function(){Yo(i,v,o,a)}),v}function el(t,i,o,a,c){var h=o._reactRootContainer;if(h){var m=h;if(typeof c=="function"){var _=c;c=function(){var v=Xo(m);_.call(v)}}Yo(i,m,t,c)}else m=Qw(o,i,t,c,a);return Xo(m)}Ih=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Mi(i.pendingLanes);o!==0&&(Ea(i,o|1),pt(i,Fe()),!(ue&6)&&(ii=Fe()+500,bn()))}break;case 13:mr(function(){var a=fn(t,1);if(a!==null){var c=ot();$t(a,t,1,c)}}),Qu(t,1)}},Sa=function(t){if(t.tag===13){var i=fn(t,134217728);if(i!==null){var o=ot();$t(i,t,134217728,o)}Qu(t,134217728)}},Ch=function(t){if(t.tag===13){var i=Bn(t),o=fn(t,i);if(o!==null){var a=ot();$t(o,t,i,a)}Qu(t,i)}},Th=function(){return ge},kh=function(t,i){var o=ge;try{return ge=t,i()}finally{ge=o}},pa=function(t,i,o){switch(i){case"input":if(oa(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var a=o[i];if(a!==t&&a.form===t.form){var c=_o(a);if(!c)throw Error(n(90));Yd(a),oa(a,c)}}}break;case"textarea":th(t,o);break;case"select":i=o.value,i!=null&&Mr(t,!!o.multiple,i,!1)}},ch=Bu,dh=mr;var Yw={usingClientEntryPoint:!1,Events:[Zi,Hr,_o,ah,uh,Bu]},fs={findFiberByHostInstance:lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Xw={bundleType:fs.bundleType,version:fs.version,rendererPackageName:fs.rendererPackageName,rendererConfig:fs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:J.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=mh(t),t===null?null:t.stateNode},findFiberByHostInstance:fs.findFiberByHostInstance||Kw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tl.isDisabled&&tl.supportsFiber)try{Xs=tl.inject(Xw),Jt=tl}catch{}}return mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yw,mt.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xu(i))throw Error(n(200));return Gw(t,i,null,o)},mt.createRoot=function(t,i){if(!Xu(t))throw Error(n(299));var o=!1,a="",c=Vp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(a=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=Ku(t,1,!1,null,null,o,!1,a,c),t[un]=i.current,Yi(t.nodeType===8?t.parentNode:t),new Yu(i)},mt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=mh(i),t=t===null?null:t.stateNode,t},mt.flushSync=function(t){return mr(t)},mt.hydrate=function(t,i,o){if(!Zo(i))throw Error(n(200));return el(null,t,i,!0,o)},mt.hydrateRoot=function(t,i,o){if(!Xu(t))throw Error(n(405));var a=o!=null&&o.hydratedSources||null,c=!1,h="",m=Vp;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(m=o.onRecoverableError)),i=Wp(i,null,t,1,o??null,c,!1,h,m),t[un]=i.current,Yi(t),a)for(t=0;t<a.length;t++)o=a[t],c=o._getVersion,c=c(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,c]:i.mutableSourceEagerHydrationData.push(o,c);return new Jo(i)},mt.render=function(t,i,o){if(!Zo(i))throw Error(n(200));return el(null,t,i,!1,o)},mt.unmountComponentAtNode=function(t){if(!Zo(t))throw Error(n(40));return t._reactRootContainer?(mr(function(){el(null,null,t,!1,function(){t._reactRootContainer=null,t[un]=null})}),!0):!1},mt.unstable_batchedUpdates=Bu,mt.unstable_renderSubtreeIntoContainer=function(t,i,o,a){if(!Zo(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return el(t,i,o,!1,a)},mt.version="18.3.1-next-f1338f8080-20240426",mt}var Jp;function o0(){if(Jp)return ec.exports;Jp=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),ec.exports=s0(),ec.exports}var Zp;function l0(){if(Zp)return nl;Zp=1;var r=o0();return nl.createRoot=r.createRoot,nl.hydrateRoot=r.hydrateRoot,nl}var a0=l0();const Te={GRASS:"grass",WATER:"water",ROCK:"rock",EMPTY:"empty",FOOD:"food",NULL:"null",GAME:"game",WOOD:"wood",SELL_APPLE:"sellApple",FREE_WAY:"freeway"},u0={[Te.GRASS]:.4,[Te.WATER]:.2,[Te.EMPTY]:.1,[Te.ROCK]:.14,[Te.FOOD]:.15,[Te.GAME]:.01},c0=["moveU","moveR","moveD","moveL","dragon"],d0="_tile_qefos_1",h0="_grass_qefos_14",f0="_water_qefos_22",p0="_rock_qefos_29",m0="_empty_qefos_36",g0="_food_qefos_43",_0="_game_qefos_50",y0="_wood_qefos_57",v0="_sellApple_qefos_64",w0="_freeway_qefos_71",em={tile:d0,grass:h0,water:f0,rock:p0,empty:m0,food:g0,game:_0,wood:y0,sellApple:v0,freeway:w0};var rc={exports:{}},ic,tm;function E0(){if(tm)return ic;tm=1;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return ic=r,ic}var sc,nm;function S0(){if(nm)return sc;nm=1;var r=E0();function e(){}function n(){}return n.resetWarningCache=e,sc=function(){function s(d,f,p,g,w,y){if(y!==r){var S=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw S.name="Invariant Violation",S}}s.isRequired=s;function l(){return s}var u={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:l,element:s,elementType:s,instanceOf:l,node:s,objectOf:l,oneOf:l,oneOfType:l,shape:l,exact:l,checkPropTypes:n,resetWarningCache:e};return u.PropTypes=u,u},sc}var rm;function I0(){return rm||(rm=1,rc.exports=S0()()),rc.exports}var C0=I0();const Pe=Zw(C0);function Ml(r){const{isActive:e=!1,type:n="empty"}=r,s={[Te.GRASS]:"☘️",[Te.WATER]:"",[Te.ROCK]:"⛰️",[Te.EMPTY]:"",[Te.FOOD]:"🍎",[Te.GAME]:"🌳",[Te.SELL_APPLE]:"💰",[Te.FREE_WAY]:"🚦"};return G.jsx("div",{className:`${em.tile} ${em[n]}`,children:s[n]})}Ml.propTypes={isActive:Pe.bool,type:Pe.string};const T0="_board_pk1lm_1",k0="_row_pk1lm_8",R0="_boardContainer_pk1lm_13",ui={board:T0,row:k0,boardContainer:R0},N0=(r,e)=>{const n=r*e,s={};for(const[f,p]of Object.entries(u0))s[f]=Math.floor(p*n);let l=[];for(const[f,p]of Object.entries(s))l=l.concat(Array(p).fill(f));for(;l.length<n;)l.push(Te.EMPTY);for(let f=l.length-1;f>0;f--){const p=Math.floor(Math.random()*(f+1));[l[f],l[p]]=[l[p],l[f]]}const u=[];let d=0;for(let f=0;f<r;f++){const p=[];for(let g=0;g<e;g++)p.push({isActive:!1,type:l[d++]});u.push(p)}return u};var im={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L=function(r,e){if(!r)throw Si(e)},Si=function(r){return new Error("Firebase Database ("+Ig.SDK_VERSION+") INTERNAL ASSERT FAILED: "+r)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):(l&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},P0=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const l=r[n++];if(l<128)e[s++]=String.fromCharCode(l);else if(l>191&&l<224){const u=r[n++];e[s++]=String.fromCharCode((l&31)<<6|u&63)}else if(l>239&&l<365){const u=r[n++],d=r[n++],f=r[n++],p=((l&7)<<18|(u&63)<<12|(d&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const u=r[n++],d=r[n++];e[s++]=String.fromCharCode((l&15)<<12|(u&63)<<6|d&63)}}return e.join("")},Yc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<r.length;l+=3){const u=r[l],d=l+1<r.length,f=d?r[l+1]:0,p=l+2<r.length,g=p?r[l+2]:0,w=u>>2,y=(u&3)<<4|f>>4;let S=(f&15)<<2|g>>6,R=g&63;p||(R=64,d||(S=64)),s.push(n[w],n[y],n[S],n[R])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Cg(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):P0(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<r.length;){const u=n[r.charAt(l++)],f=l<r.length?n[r.charAt(l)]:0;++l;const g=l<r.length?n[r.charAt(l)]:64;++l;const y=l<r.length?n[r.charAt(l)]:64;if(++l,u==null||f==null||g==null||y==null)throw new A0;const S=u<<2|f>>4;if(s.push(S),g!==64){const R=f<<4&240|g>>2;if(s.push(R),y!==64){const x=g<<6&192|y;s.push(x)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class A0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Tg=function(r){const e=Cg(r);return Yc.encodeByteArray(e,!0)},dl=function(r){return Tg(r).replace(/\./g,"")},hl=function(r){try{return Yc.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O0(r){return kg(void 0,r)}function kg(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!x0(n)||(r[n]=kg(r[n],e[n]));return r}function x0(r){return r!=="__proto__"}/**
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
 */function D0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const L0=()=>D0().__FIREBASE_DEFAULTS__,M0=()=>{if(typeof process>"u"||typeof im>"u")return;const r=im.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},b0=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&hl(r[1]);return e&&JSON.parse(e)},Xc=()=>{try{return L0()||M0()||b0()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Rg=r=>{var e,n;return(n=(e=Xc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[r]},F0=r=>{const e=Rg(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Ng=()=>{var r;return(r=Xc())===null||r===void 0?void 0:r.config},Pg=r=>{var e;return(e=Xc())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function U0(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",l=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},r);return[dl(JSON.stringify(n)),dl(JSON.stringify(d)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Jc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(at())}function z0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ag(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Og(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function j0(){const r=at();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function xg(){return Ig.NODE_ADMIN===!0}function Dg(){try{return typeof indexedDB=="object"}catch{return!1}}function Lg(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},l.onupgradeneeded=()=>{n=!1},l.onerror=()=>{var u;e(((u=l.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){e(n)}})}function W0(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0="FirebaseError";class ln extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=B0,Object.setPrototypeOf(this,ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Or.prototype.create)}}class Or{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},l=`${this.service}/${e}`,u=this.errors[e],d=u?V0(u,s):"Error",f=`${this.serviceName}: ${d} (${l}).`;return new ln(l,f,s)}}function V0(r,e){return r.replace($0,(n,s)=>{const l=e[s];return l!=null?String(l):`<${s}?>`})}const $0=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(r){return JSON.parse(r)}function Qe(r){return JSON.stringify(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg=function(r){let e={},n={},s={},l="";try{const u=r.split(".");e=Rs(hl(u[0])||""),n=Rs(hl(u[1])||""),l=u[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:l}},H0=function(r){const e=Mg(r),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},q0=function(r){const e=Mg(r).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function gi(r,e){if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}function Ic(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function fl(r,e,n){const s={};for(const l in r)Object.prototype.hasOwnProperty.call(r,l)&&(s[l]=e.call(n,r[l],l,r));return s}function Ns(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const l of n){if(!s.includes(l))return!1;const u=r[l],d=e[l];if(sm(u)&&sm(d)){if(!Ns(u,d))return!1}else if(u!==d)return!1}for(const l of s)if(!n.includes(l))return!1;return!0}function sm(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(r){const e=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(l=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(l))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let y=0;y<16;y++)s[y]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let y=0;y<16;y++)s[y]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let y=16;y<80;y++){const S=s[y-3]^s[y-8]^s[y-14]^s[y-16];s[y]=(S<<1|S>>>31)&4294967295}let l=this.chain_[0],u=this.chain_[1],d=this.chain_[2],f=this.chain_[3],p=this.chain_[4],g,w;for(let y=0;y<80;y++){y<40?y<20?(g=f^u&(d^f),w=1518500249):(g=u^d^f,w=1859775393):y<60?(g=u&d|f&(u|d),w=2400959708):(g=u^d^f,w=3395469782);const S=(l<<5|l>>>27)+g+p+w+s[y]&4294967295;p=f,f=d,d=(u<<30|u>>>2)&4294967295,u=l,l=S}this.chain_[0]=this.chain_[0]+l&4294967295,this.chain_[1]=this.chain_[1]+u&4294967295,this.chain_[2]=this.chain_[2]+d&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let l=0;const u=this.buf_;let d=this.inbuf_;for(;l<n;){if(d===0)for(;l<=s;)this.compress_(e,l),l+=this.blockSize;if(typeof e=="string"){for(;l<n;)if(u[d]=e.charCodeAt(l),++d,++l,d===this.blockSize){this.compress_(u),d=0;break}}else for(;l<n;)if(u[d]=e[l],++d,++l,d===this.blockSize){this.compress_(u),d=0;break}}this.inbuf_=d,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let l=this.blockSize-1;l>=56;l--)this.buf_[l]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let l=0;l<5;l++)for(let u=24;u>=0;u-=8)e[s]=this.chain_[l]>>u&255,++s;return e}}function K0(r,e){const n=new Q0(r,e);return n.subscribe.bind(n)}class Q0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let l;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Y0(e,["next","error","complete"])?l=e:l={next:e,error:n,complete:s},l.next===void 0&&(l.next=oc),l.error===void 0&&(l.error=oc),l.complete===void 0&&(l.complete=oc);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Y0(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function oc(){}function bl(r,e){return`${r} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);if(l>=55296&&l<=56319){const u=l-55296;s++,L(s<r.length,"Surrogate pair missing trail surrogate.");const d=r.charCodeAt(s)-56320;l=65536+(u<<10)+d}l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):l<65536?(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},Fl=function(r){let e=0;for(let n=0;n<r.length;n++){const s=r.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J0=1e3,Z0=2,eE=4*60*60*1e3,tE=.5;function om(r,e=J0,n=Z0){const s=e*Math.pow(n,r),l=Math.round(tE*s*(Math.random()-.5)*2);return Math.min(eE,s+l)}/**
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
 */function Rt(r){return r&&r._delegate?r._delegate:r}class Kt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Fs;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:n});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),l=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(l)return null;throw u}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(iE(e))try{this.getOrInitializeService({instanceIdentifier:wr})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:l});s.resolve(u)}catch{}}}}clearInstance(e=wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wr){return this.instances.has(e)}getOptions(e=wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,d]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(u);s===f&&d.resolve(l)}return l}onInit(e,n){var s;const l=this.normalizeInstanceIdentifier(n),u=(s=this.onInitCallbacks.get(l))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(l,u);const d=this.instances.get(l);return d&&e(d,l),()=>{u.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const l of s)try{l(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:rE(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=wr){return this.component?this.component.multipleInstances?e:wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rE(r){return r===wr?void 0:r}function iE(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new nE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(_e||(_e={}));const oE={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},lE=_e.INFO,aE={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},uE=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),l=aE[e];if(l)console[l](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ul{constructor(e){this.name=e,this._logLevel=lE,this._logHandler=uE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?oE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const cE=(r,e)=>e.some(n=>r instanceof n);let lm,am;function dE(){return lm||(lm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hE(){return am||(am=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bg=new WeakMap,Cc=new WeakMap,Fg=new WeakMap,lc=new WeakMap,Zc=new WeakMap;function fE(r){const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("success",u),r.removeEventListener("error",d)},u=()=>{n(Jn(r.result)),l()},d=()=>{s(r.error),l()};r.addEventListener("success",u),r.addEventListener("error",d)});return e.then(n=>{n instanceof IDBCursor&&bg.set(n,r)}).catch(()=>{}),Zc.set(e,r),e}function pE(r){if(Cc.has(r))return;const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",d),r.removeEventListener("abort",d)},u=()=>{n(),l()},d=()=>{s(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",u),r.addEventListener("error",d),r.addEventListener("abort",d)});Cc.set(r,e)}let Tc={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return Cc.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Fg.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Jn(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function mE(r){Tc=r(Tc)}function gE(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(ac(this),e,...n);return Fg.set(s,e.sort?e.sort():[e]),Jn(s)}:hE().includes(r)?function(...e){return r.apply(ac(this),e),Jn(bg.get(this))}:function(...e){return Jn(r.apply(ac(this),e))}}function _E(r){return typeof r=="function"?gE(r):(r instanceof IDBTransaction&&pE(r),cE(r,dE())?new Proxy(r,Tc):r)}function Jn(r){if(r instanceof IDBRequest)return fE(r);if(lc.has(r))return lc.get(r);const e=_E(r);return e!==r&&(lc.set(r,e),Zc.set(e,r)),e}const ac=r=>Zc.get(r);function Ug(r,e,{blocked:n,upgrade:s,blocking:l,terminated:u}={}){const d=indexedDB.open(r,e),f=Jn(d);return s&&d.addEventListener("upgradeneeded",p=>{s(Jn(d.result),p.oldVersion,p.newVersion,Jn(d.transaction),p)}),n&&d.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),f.then(p=>{u&&p.addEventListener("close",()=>u()),l&&p.addEventListener("versionchange",g=>l(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const yE=["get","getKey","getAll","getAllKeys","count"],vE=["put","add","delete","clear"],uc=new Map;function um(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(uc.get(e))return uc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,l=vE.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(l||yE.includes(n)))return;const u=async function(d,...f){const p=this.transaction(d,l?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(f.shift())),(await Promise.all([g[n](...f),l&&p.done]))[0]};return uc.set(e,u),u}mE(r=>({...r,get:(e,n,s)=>um(e,n)||r.get(e,n,s),has:(e,n)=>!!um(e,n)||r.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(EE(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function EE(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const kc="@firebase/app",cm="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=new Ul("@firebase/app"),SE="@firebase/app-compat",IE="@firebase/analytics-compat",CE="@firebase/analytics",TE="@firebase/app-check-compat",kE="@firebase/app-check",RE="@firebase/auth",NE="@firebase/auth-compat",PE="@firebase/database",AE="@firebase/data-connect",OE="@firebase/database-compat",xE="@firebase/functions",DE="@firebase/functions-compat",LE="@firebase/installations",ME="@firebase/installations-compat",bE="@firebase/messaging",FE="@firebase/messaging-compat",UE="@firebase/performance",zE="@firebase/performance-compat",jE="@firebase/remote-config",WE="@firebase/remote-config-compat",BE="@firebase/storage",VE="@firebase/storage-compat",$E="@firebase/firestore",HE="@firebase/vertexai",qE="@firebase/firestore-compat",GE="firebase",KE="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc="[DEFAULT]",QE={[kc]:"fire-core",[SE]:"fire-core-compat",[CE]:"fire-analytics",[IE]:"fire-analytics-compat",[kE]:"fire-app-check",[TE]:"fire-app-check-compat",[RE]:"fire-auth",[NE]:"fire-auth-compat",[PE]:"fire-rtdb",[AE]:"fire-data-connect",[OE]:"fire-rtdb-compat",[xE]:"fire-fn",[DE]:"fire-fn-compat",[LE]:"fire-iid",[ME]:"fire-iid-compat",[bE]:"fire-fcm",[FE]:"fire-fcm-compat",[UE]:"fire-perf",[zE]:"fire-perf-compat",[jE]:"fire-rc",[WE]:"fire-rc-compat",[BE]:"fire-gcs",[VE]:"fire-gcs-compat",[$E]:"fire-fst",[qE]:"fire-fst-compat",[HE]:"fire-vertex","fire-js":"fire-js",[GE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl=new Map,YE=new Map,Nc=new Map;function dm(r,e){try{r.container.addComponent(e)}catch(n){In.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function on(r){const e=r.name;if(Nc.has(e))return In.debug(`There were multiple attempts to register component ${e}.`),!1;Nc.set(e,r);for(const n of pl.values())dm(n,r);for(const n of YE.values())dm(n,r);return!0}function xr(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function _n(r){return r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zn=new Or("app","Firebase",XE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Kt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci=KE;function zg(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Rc,automaticDataCollectionEnabled:!1},e),l=s.name;if(typeof l!="string"||!l)throw Zn.create("bad-app-name",{appName:String(l)});if(n||(n=Ng()),!n)throw Zn.create("no-options");const u=pl.get(l);if(u){if(Ns(n,u.options)&&Ns(s,u.config))return u;throw Zn.create("duplicate-app",{appName:l})}const d=new sE(l);for(const p of Nc.values())d.addComponent(p);const f=new JE(n,s,d);return pl.set(l,f),f}function ed(r=Rc){const e=pl.get(r);if(!e&&r===Rc&&Ng())return zg();if(!e)throw Zn.create("no-app",{appName:r});return e}function bt(r,e,n){var s;let l=(s=QE[r])!==null&&s!==void 0?s:r;n&&(l+=`-${n}`);const u=l.match(/\s|\//),d=e.match(/\s|\//);if(u||d){const f=[`Unable to register library "${l}" with version "${e}":`];u&&f.push(`library name "${l}" contains illegal characters (whitespace or "/")`),u&&d&&f.push("and"),d&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),In.warn(f.join(" "));return}on(new Kt(`${l}-version`,()=>({library:l,version:e}),"VERSION"))}/**
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
 */const ZE="firebase-heartbeat-database",eS=1,Ps="firebase-heartbeat-store";let cc=null;function jg(){return cc||(cc=Ug(ZE,eS,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Ps)}catch(n){console.warn(n)}}}}).catch(r=>{throw Zn.create("idb-open",{originalErrorMessage:r.message})})),cc}async function tS(r){try{const n=(await jg()).transaction(Ps),s=await n.objectStore(Ps).get(Wg(r));return await n.done,s}catch(e){if(e instanceof ln)In.warn(e.message);else{const n=Zn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});In.warn(n.message)}}}async function hm(r,e){try{const s=(await jg()).transaction(Ps,"readwrite");await s.objectStore(Ps).put(e,Wg(r)),await s.done}catch(n){if(n instanceof ln)In.warn(n.message);else{const s=Zn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});In.warn(s.message)}}}function Wg(r){return`${r.name}!${r.options.appId}`}/**
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
 */const nS=1024,rS=30*24*60*60*1e3;class iS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new oS(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=fm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(d=>d.date===u)?void 0:(this._heartbeatsCache.heartbeats.push({date:u,agent:l}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(d=>{const f=new Date(d.date).valueOf();return Date.now()-f<=rS}),this._storage.overwrite(this._heartbeatsCache))}catch(s){In.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=fm(),{heartbeatsToSend:s,unsentEntries:l}=sS(this._heartbeatsCache.heartbeats),u=dl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return In.warn(n),""}}}function fm(){return new Date().toISOString().substring(0,10)}function sS(r,e=nS){const n=[];let s=r.slice();for(const l of r){const u=n.find(d=>d.agent===l.agent);if(u){if(u.dates.push(l.date),pm(n)>e){u.dates.pop();break}}else if(n.push({agent:l.agent,dates:[l.date]}),pm(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class oS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Dg()?Lg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await tS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return hm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return hm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...e.heartbeats]})}else return}}function pm(r){return dl(JSON.stringify({version:2,heartbeats:r})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lS(r){on(new Kt("platform-logger",e=>new wE(e),"PRIVATE")),on(new Kt("heartbeat",e=>new iS(e),"PRIVATE")),bt(kc,cm,r),bt(kc,cm,"esm2017"),bt("fire-js","")}lS("");var mm={};const gm="@firebase/database",_m="1.0.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bg="";function aS(r){Bg=r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Qe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Rs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return an(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg=function(r){try{if(typeof window<"u"&&typeof window[r]<"u"){const e=window[r];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new uS(e)}}catch{}return new cS},Sr=Vg("localStorage"),dS=Vg("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=new Ul("@firebase/database"),hS=function(){let r=1;return function(){return r++}}(),$g=function(r){const e=X0(r),n=new G0;n.update(e);const s=n.digest();return Yc.encodeByteArray(s)},Us=function(...r){let e="";for(let n=0;n<r.length;n++){const s=r[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Us.apply(null,s):typeof s=="object"?e+=Qe(s):e+=s,e+=" "}return e};let ws=null,ym=!0;const fS=function(r,e){L(!e,"Can't turn on custom loggers persistently."),ci.logLevel=_e.VERBOSE,ws=ci.log.bind(ci)},Je=function(...r){if(ym===!0&&(ym=!1,ws===null&&dS.get("logging_enabled")===!0&&fS()),ws){const e=Us.apply(null,r);ws(e)}},zs=function(r){return function(...e){Je(r,...e)}},Pc=function(...r){const e="FIREBASE INTERNAL ERROR: "+Us(...r);ci.error(e)},Cn=function(...r){const e=`FIREBASE FATAL ERROR: ${Us(...r)}`;throw ci.error(e),new Error(e)},lt=function(...r){const e="FIREBASE WARNING: "+Us(...r);ci.warn(e)},pS=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&lt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},td=function(r){return typeof r=="number"&&(r!==r||r===Number.POSITIVE_INFINITY||r===Number.NEGATIVE_INFINITY)},mS=function(r){if(document.readyState==="complete")r();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,r())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},_i="[MIN_NAME]",Cr="[MAX_NAME]",Dr=function(r,e){if(r===e)return 0;if(r===_i||e===Cr)return-1;if(e===_i||r===Cr)return 1;{const n=vm(r),s=vm(e);return n!==null?s!==null?n-s===0?r.length-e.length:n-s:-1:s!==null?1:r<e?-1:1}},gS=function(r,e){return r===e?0:r<e?-1:1},ms=function(r,e){if(e&&r in e)return e[r];throw new Error("Missing required key ("+r+") in object: "+Qe(e))},nd=function(r){if(typeof r!="object"||r===null)return Qe(r);const e=[];for(const s in r)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Qe(e[s]),n+=":",n+=nd(r[e[s]]);return n+="}",n},Hg=function(r,e){const n=r.length;if(n<=e)return[r];const s=[];for(let l=0;l<n;l+=e)l+e>n?s.push(r.substring(l,n)):s.push(r.substring(l,l+e));return s};function Ze(r,e){for(const n in r)r.hasOwnProperty(n)&&e(n,r[n])}const qg=function(r){L(!td(r),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let l,u,d,f,p;r===0?(u=0,d=0,l=1/r===-1/0?1:0):(l=r<0,r=Math.abs(r),r>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(r)/Math.LN2),s),u=f+s,d=Math.round(r*Math.pow(2,n-f)-Math.pow(2,n))):(u=0,d=Math.round(r/Math.pow(2,1-s-n))));const g=[];for(p=n;p;p-=1)g.push(d%2?1:0),d=Math.floor(d/2);for(p=e;p;p-=1)g.push(u%2?1:0),u=Math.floor(u/2);g.push(l?1:0),g.reverse();const w=g.join("");let y="";for(p=0;p<64;p+=8){let S=parseInt(w.substr(p,8),2).toString(16);S.length===1&&(S="0"+S),y=y+S}return y.toLowerCase()},_S=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},yS=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function vS(r,e){let n="Unknown Error";r==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":r==="permission_denied"?n="Client doesn't have permission to access the desired data.":r==="unavailable"&&(n="The service is unavailable");const s=new Error(r+" at "+e._path.toString()+": "+n);return s.code=r.toUpperCase(),s}const wS=new RegExp("^-?(0*)\\d{1,10}$"),ES=-2147483648,SS=2147483647,vm=function(r){if(wS.test(r)){const e=Number(r);if(e>=ES&&e<=SS)return e}return null},Ti=function(r){try{r()}catch(e){setTimeout(()=>{const n=e.stack||"";throw lt("Exception was thrown by user callback.",n),e},Math.floor(0))}},IS=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Es=function(r,e){const n=setTimeout(r,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class CS{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){lt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(l=>this.auth_=l)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Je("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',lt(e)}}class ol{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ol.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd="5",Gg="v",Kg="s",Qg="r",Yg="f",Xg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Jg="ls",Zg="p",Ac="ac",e_="websocket",t_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e,n,s,l,u=!1,d="",f=!1,p=!1){this.secure=n,this.namespace=s,this.webSocketOnly=l,this.nodeAdmin=u,this.persistenceKey=d,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=p,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Sr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Sr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function kS(r){return r.host!==r.internalHost||r.isCustomHost()||r.includeNamespaceInQueryParams}function r_(r,e,n){L(typeof e=="string","typeof type must == string"),L(typeof n=="object","typeof params must == object");let s;if(e===e_)s=(r.secure?"wss://":"ws://")+r.internalHost+"/.ws?";else if(e===t_)s=(r.secure?"https://":"http://")+r.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);kS(r)&&(n.ns=r.namespace);const l=[];return Ze(n,(u,d)=>{l.push(u+"="+d)}),s+l.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(){this.counters_={}}incrementCounter(e,n=1){an(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return O0(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc={},hc={};function id(r){const e=r.toString();return dc[e]||(dc[e]=new RS),dc[e]}function NS(r,e){const n=r.toString();return hc[n]||(hc[n]=e()),hc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let l=0;l<s.length;++l)s[l]&&Ti(()=>{this.onMessage_(s[l])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm="start",AS="close",OS="pLPCommand",xS="pRTLPCB",i_="id",s_="pw",o_="ser",DS="cb",LS="seg",MS="ts",bS="d",FS="dframe",l_=1870,a_=30,US=l_-a_,zS=25e3,jS=3e4;class li{constructor(e,n,s,l,u,d,f){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.transportSessionId=d,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=zs(e),this.stats_=id(n),this.urlFn=p=>(this.appCheckToken&&(p[Ac]=this.appCheckToken),r_(n,t_,p))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new PS(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(jS)),mS(()=>{if(this.isClosed_)return;this.scriptTagHolder=new sd((...u)=>{const[d,f,p,g,w]=u;if(this.incrementIncomingBytes_(u),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,d===wm)this.id=f,this.password=p;else if(d===AS)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+d)},(...u)=>{const[d,f]=u;this.incrementIncomingBytes_(u),this.myPacketOrderer.handleResponse(d,f)},()=>{this.onClosed_()},this.urlFn);const s={};s[wm]="t",s[o_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[DS]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Gg]=rd,this.transportSessionId&&(s[Kg]=this.transportSessionId),this.lastSessionId&&(s[Jg]=this.lastSessionId),this.applicationId&&(s[Zg]=this.applicationId),this.appCheckToken&&(s[Ac]=this.appCheckToken),typeof location<"u"&&location.hostname&&Xg.test(location.hostname)&&(s[Qg]=Yg);const l=this.urlFn(s);this.log_("Connecting via long-poll to "+l),this.scriptTagHolder.addTag(l,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){li.forceAllow_=!0}static forceDisallow(){li.forceDisallow_=!0}static isAvailable(){return li.forceAllow_?!0:!li.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!_S()&&!yS()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Qe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Tg(n),l=Hg(s,US);for(let u=0;u<l.length;u++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,l.length,l[u]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[FS]="t",s[i_]=e,s[s_]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Qe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class sd{constructor(e,n,s,l){this.onDisconnect=s,this.urlFn=l,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=hS(),window[OS+this.uniqueCallbackIdentifier]=e,window[xS+this.uniqueCallbackIdentifier]=n,this.myIFrame=sd.createIFrame_();let u="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(u='<script>document.domain="'+document.domain+'";<\/script>');const d="<html><body>"+u+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(d),this.myIFrame.doc.close()}catch(f){Je("frame writing exception"),f.stack&&Je(f.stack),Je(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Je("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[i_]=this.myID,e[s_]=this.myPW,e[o_]=this.currentSerial;let n=this.urlFn(e),s="",l=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+a_+s.length<=l_;){const d=this.pendingSegs.shift();s=s+"&"+LS+l+"="+d.seg+"&"+MS+l+"="+d.ts+"&"+bS+l+"="+d.d,l++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},l=setTimeout(s,Math.floor(zS)),u=()=>{clearTimeout(l),s()};this.addTag(e,u)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const l=s.readyState;(!l||l==="loaded"||l==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Je("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WS=16384,BS=45e3;let ml=null;typeof MozWebSocket<"u"?ml=MozWebSocket:typeof WebSocket<"u"&&(ml=WebSocket);class Ht{constructor(e,n,s,l,u,d,f){this.connId=e,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=zs(this.connId),this.stats_=id(n),this.connURL=Ht.connectionURL_(n,d,f,l,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,l,u){const d={};return d[Gg]=rd,typeof location<"u"&&location.hostname&&Xg.test(location.hostname)&&(d[Qg]=Yg),n&&(d[Kg]=n),s&&(d[Jg]=s),l&&(d[Ac]=l),u&&(d[Zg]=u),r_(e,e_,d)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Sr.set("previous_websocket_failure",!0);try{let s;xg(),this.mySock=new ml(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_()}}start(){}static forceDisallow(){Ht.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ml!==null&&!Ht.forceDisallow_}static previouslyFailed(){return Sr.isInMemoryStorage||Sr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Sr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Rs(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(L(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Qe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Hg(n,WS);s.length>1&&this.sendString_(String(s.length));for(let l=0;l<s.length;l++)this.sendString_(s[l])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(BS))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ht.responsesRequiredToBeHealthy=2;Ht.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{static get ALL_TRANSPORTS(){return[li,Ht]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Ht&&Ht.isAvailable();let s=n&&!Ht.previouslyFailed();if(e.webSocketOnly&&(n||lt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ht];else{const l=this.transports_=[];for(const u of As.ALL_TRANSPORTS)u&&u.isAvailable()&&l.push(u);As.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}As.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS=6e4,$S=5e3,HS=10*1024,qS=100*1024,fc="t",Em="d",GS="s",Sm="r",KS="e",Im="o",Cm="a",Tm="n",km="p",QS="h";class YS{constructor(e,n,s,l,u,d,f,p,g,w){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=l,this.authToken_=u,this.onMessage_=d,this.onReady_=f,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=w,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=zs("c:"+this.id+":"),this.transportManager_=new As(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const l=e.healthyTimeout||0;l>0&&(this.healthyTimeout_=Es(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>qS?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>HS?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(l)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(fc in e){const n=e[fc];n===Cm?this.upgradeIfSecondaryHealthy_():n===Sm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Im&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ms("t",e),s=ms("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:km,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Cm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Tm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ms("t",e),s=ms("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ms(fc,e);if(Em in e){const s=e[Em];if(n===QS){const l=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(l.h=this.repoInfo_.host),this.onHandshake_(l)}else if(n===Tm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let l=0;l<this.pendingDataMessages.length;++l)this.onDataMessage_(this.pendingDataMessages[l]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===GS?this.onConnectionShutdown_(s):n===Sm?this.onReset_(s):n===KS?Pc("Server Error: "+s):n===Im?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Pc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,l=e.h;this.sessionId=e.s,this.repoInfo_.host=l,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),rd!==s&&lt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Es(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(VS))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Es(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor($S))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:km,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Sr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{put(e,n,s,l){}merge(e,n,s,l){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(e){this.allowedEvents_=e,this.listeners_={},L(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let l=0;l<s.length;l++)s[l].callback.apply(s[l].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const l=this.getInitialEvent(e);l&&n.apply(s,l)}off(e,n,s){this.validateEventType_(e);const l=this.listeners_[e]||[];for(let u=0;u<l.length;u++)if(l[u].callback===n&&(!s||s===l[u].context)){l.splice(u,1);return}}validateEventType_(e){L(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl extends c_{static getInstance(){return new gl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Jc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return L(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm=32,Nm=768;class ye{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let l=0;l<this.pieces_.length;l++)this.pieces_[l].length>0&&(this.pieces_[s]=this.pieces_[l],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function pe(){return new ye("")}function ne(r){return r.pieceNum_>=r.pieces_.length?null:r.pieces_[r.pieceNum_]}function nr(r){return r.pieces_.length-r.pieceNum_}function Se(r){let e=r.pieceNum_;return e<r.pieces_.length&&e++,new ye(r.pieces_,e)}function od(r){return r.pieceNum_<r.pieces_.length?r.pieces_[r.pieces_.length-1]:null}function XS(r){let e="";for(let n=r.pieceNum_;n<r.pieces_.length;n++)r.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(r.pieces_[n])));return e||"/"}function Os(r,e=0){return r.pieces_.slice(r.pieceNum_+e)}function d_(r){if(r.pieceNum_>=r.pieces_.length)return null;const e=[];for(let n=r.pieceNum_;n<r.pieces_.length-1;n++)e.push(r.pieces_[n]);return new ye(e,0)}function Le(r,e){const n=[];for(let s=r.pieceNum_;s<r.pieces_.length;s++)n.push(r.pieces_[s]);if(e instanceof ye)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let l=0;l<s.length;l++)s[l].length>0&&n.push(s[l])}return new ye(n,0)}function oe(r){return r.pieceNum_>=r.pieces_.length}function _t(r,e){const n=ne(r),s=ne(e);if(n===null)return e;if(n===s)return _t(Se(r),Se(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+r+")")}function JS(r,e){const n=Os(r,0),s=Os(e,0);for(let l=0;l<n.length&&l<s.length;l++){const u=Dr(n[l],s[l]);if(u!==0)return u}return n.length===s.length?0:n.length<s.length?-1:1}function ld(r,e){if(nr(r)!==nr(e))return!1;for(let n=r.pieceNum_,s=e.pieceNum_;n<=r.pieces_.length;n++,s++)if(r.pieces_[n]!==e.pieces_[s])return!1;return!0}function Mt(r,e){let n=r.pieceNum_,s=e.pieceNum_;if(nr(r)>nr(e))return!1;for(;n<r.pieces_.length;){if(r.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class ZS{constructor(e,n){this.errorPrefix_=n,this.parts_=Os(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Fl(this.parts_[s]);h_(this)}}function eI(r,e){r.parts_.length>0&&(r.byteLength_+=1),r.parts_.push(e),r.byteLength_+=Fl(e),h_(r)}function tI(r){const e=r.parts_.pop();r.byteLength_-=Fl(e),r.parts_.length>0&&(r.byteLength_-=1)}function h_(r){if(r.byteLength_>Nm)throw new Error(r.errorPrefix_+"has a key path longer than "+Nm+" bytes ("+r.byteLength_+").");if(r.parts_.length>Rm)throw new Error(r.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Rm+") or object contains a cycle "+Er(r))}function Er(r){return r.parts_.length===0?"":"in property '"+r.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad extends c_{static getInstance(){return new ad}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return L(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs=1e3,nI=60*5*1e3,Pm=30*1e3,rI=1.3,iI=3e4,sI="server_kill",Am=3;class Sn extends u_{constructor(e,n,s,l,u,d,f,p){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=l,this.onServerInfoUpdate_=u,this.authTokenProvider_=d,this.appCheckTokenProvider_=f,this.authOverride_=p,this.id=Sn.nextPersistentConnectionId_++,this.log_=zs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=gs,this.maxReconnectDelay_=nI,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p&&!xg())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ad.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&gl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const l=++this.requestNumber_,u={r:l,a:e,b:n};this.log_(Qe(u)),L(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(u),s&&(this.requestCBHash_[l]=s)}get(e){this.initConnection_();const n=new Fs,l={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:d=>{const f=d.d;d.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(l),this.outstandingGetCount_++;const u=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(u),n.promise}listen(e,n,s,l){this.initConnection_();const u=e._queryIdentifier,d=e._path.toString();this.log_("Listen called for "+d+" "+u),this.listens.has(d)||this.listens.set(d,new Map),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),L(!this.listens.get(d).has(u),"listen() called twice for same path/queryId.");const f={onComplete:l,hashFn:n,query:e,tag:s};this.listens.get(d).set(u,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),l=n._queryIdentifier;this.log_("Listen on "+s+" for "+l);const u={p:s},d="q";e.tag&&(u.q=n._queryObject,u.t=e.tag),u.h=e.hashFn(),this.sendRequest(d,u,f=>{const p=f.d,g=f.s;Sn.warnOnListenWarnings_(p,n),(this.listens.get(s)&&this.listens.get(s).get(l))===e&&(this.log_("listen response",f),g!=="ok"&&this.removeListen_(s,l),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&an(e,"w")){const s=gi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const l='".indexOn": "'+n._queryParams.getIndex().toString()+'"',u=n._path.toString();lt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${l} at ${u} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||q0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Pm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=H0(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,l=>{const u=l.s,d=l.d||"error";this.authToken_===e&&(u==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(u,d))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),l=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+l),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,l)&&this.connected_&&this.sendUnlisten_(s,l,e._queryObject,n)}sendUnlisten_(e,n,s,l){this.log_("Unlisten on "+e+" for "+n);const u={p:e},d="n";l&&(u.q=s,u.t=l),this.sendRequest(d,u)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,l){const u={p:n,d:s};this.log_("onDisconnect "+e,u),this.sendRequest(e,u,d=>{l&&setTimeout(()=>{l(d.s,d.d)},Math.floor(0))})}put(e,n,s,l){this.putInternal("p",e,n,s,l)}merge(e,n,s,l){this.putInternal("m",e,n,s,l)}putInternal(e,n,s,l,u){this.initConnection_();const d={p:n,d:s};u!==void 0&&(d.h=u),this.outstandingPuts_.push({action:e,request:d,onComplete:l}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,l=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,u=>{this.log_(n+" response",u),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),l&&l(u.s,u.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const u=s.d;this.log_("reportStats","Error sending stats: "+u)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Qe(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Pc("Unrecognized action received from server: "+Qe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){L(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=gs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=gs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>iI&&(this.reconnectDelay_=gs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*rI)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),l=this.id+":"+Sn.nextConnectionId_++,u=this.lastSessionId;let d=!1,f=null;const p=function(){f?f.close():(d=!0,s())},g=function(y){L(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(y)};this.realtime_={close:p,sendRequest:g};const w=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[y,S]=await Promise.all([this.authTokenProvider_.getToken(w),this.appCheckTokenProvider_.getToken(w)]);d?Je("getToken() completed but was canceled"):(Je("getToken() completed. Creating connection."),this.authToken_=y&&y.accessToken,this.appCheckToken_=S&&S.token,f=new YS(l,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,R=>{lt(R+" ("+this.repoInfo_.toString()+")"),this.interrupt(sI)},u))}catch(y){this.log_("Failed to get token: "+y),d||(this.repoInfo_.nodeAdmin&&lt(y),p())}}}interrupt(e){Je("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Je("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ic(this.interruptReasons_)&&(this.reconnectDelay_=gs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(u=>nd(u)).join("$"):s="default";const l=this.removeListen_(e,s);l&&l.onComplete&&l.onComplete("permission_denied")}removeListen_(e,n){const s=new ye(e).toString();let l;if(this.listens.has(s)){const u=this.listens.get(s);l=u.get(n),u.delete(n),u.size===0&&this.listens.delete(s)}else l=void 0;return l}onAuthRevoked_(e,n){Je("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Am&&(this.reconnectDelay_=Pm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Je("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Am&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Bg.replace(/\./g,"-")]=1,Jc()?e["framework.cordova"]=1:Og()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=gl.getInstance().currentlyOnline();return Ic(this.interruptReasons_)&&e}}Sn.nextPersistentConnectionId_=0;Sn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new re(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new re(_i,e),l=new re(_i,n);return this.compare(s,l)!==0}minPost(){return re.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rl;class f_ extends zl{static get __EMPTY_NODE(){return rl}static set __EMPTY_NODE(e){rl=e}compare(e,n){return Dr(e.name,n.name)}isDefinedOn(e){throw Si("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return re.MIN}maxPost(){return new re(Cr,rl)}makePost(e,n){return L(typeof e=="string","KeyIndex indexValue must always be a string."),new re(e,rl)}toString(){return".key"}}const di=new f_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,n,s,l,u=null){this.isReverse_=l,this.resultGenerator_=u,this.nodeStack_=[];let d=1;for(;!e.isEmpty();)if(e=e,d=n?s(e.key,n):1,l&&(d*=-1),d<0)this.isReverse_?e=e.left:e=e.right;else if(d===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ge{constructor(e,n,s,l,u){this.key=e,this.value=n,this.color=s??Ge.RED,this.left=l??yt.EMPTY_NODE,this.right=u??yt.EMPTY_NODE}copy(e,n,s,l,u){return new Ge(e??this.key,n??this.value,s??this.color,l??this.left,u??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let l=this;const u=s(e,l.key);return u<0?l=l.copy(null,null,null,l.left.insert(e,n,s),null):u===0?l=l.copy(null,n,null,null,null):l=l.copy(null,null,null,null,l.right.insert(e,n,s)),l.fixUp_()}removeMin_(){if(this.left.isEmpty())return yt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,l;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return yt.EMPTY_NODE;l=s.right.min_(),s=s.copy(l.key,l.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ge.RED=!0;Ge.BLACK=!1;class oI{copy(e,n,s,l,u){return this}insert(e,n,s){return new Ge(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class yt{constructor(e,n=yt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new yt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ge.BLACK,null,null))}remove(e){return new yt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ge.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,l=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return l?l.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(l=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new il(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new il(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new il(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new il(this.root_,null,this.comparator_,!0,e)}}yt.EMPTY_NODE=new oI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lI(r,e){return Dr(r.name,e.name)}function ud(r,e){return Dr(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oc;function aI(r){Oc=r}const p_=function(r){return typeof r=="number"?"number:"+qg(r):"string:"+r},m_=function(r){if(r.isLeafNode()){const e=r.val();L(typeof e=="string"||typeof e=="number"||typeof e=="object"&&an(e,".sv"),"Priority must be a string or number.")}else L(r===Oc||r.isEmpty(),"priority of unexpected type.");L(r===Oc||r.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Om;class qe{static set __childrenNodeConstructor(e){Om=e}static get __childrenNodeConstructor(){return Om}constructor(e,n=qe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,L(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),m_(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new qe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:qe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return oe(e)?this:ne(e)===".priority"?this.priorityNode_:qe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:qe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ne(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(L(s!==".priority"||nr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,qe.__childrenNodeConstructor.EMPTY_NODE.updateChild(Se(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+p_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=qg(this.value_):e+=this.value_,this.lazyHash_=$g(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===qe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof qe.__childrenNodeConstructor?-1:(L(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,l=qe.VALUE_TYPE_ORDER.indexOf(n),u=qe.VALUE_TYPE_ORDER.indexOf(s);return L(l>=0,"Unknown leaf type: "+n),L(u>=0,"Unknown leaf type: "+s),l===u?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:u-l}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}qe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let g_,__;function uI(r){g_=r}function cI(r){__=r}class dI extends zl{compare(e,n){const s=e.node.getPriority(),l=n.node.getPriority(),u=s.compareTo(l);return u===0?Dr(e.name,n.name):u}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return re.MIN}maxPost(){return new re(Cr,new qe("[PRIORITY-POST]",__))}makePost(e,n){const s=g_(e);return new re(n,new qe("[PRIORITY-POST]",s))}toString(){return".priority"}}const Me=new dI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI=Math.log(2);class fI{constructor(e){const n=u=>parseInt(Math.log(u)/hI,10),s=u=>parseInt(Array(u+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const l=s(this.count);this.bits_=e+1&l}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const _l=function(r,e,n,s){r.sort(e);const l=function(p,g){const w=g-p;let y,S;if(w===0)return null;if(w===1)return y=r[p],S=n?n(y):y,new Ge(S,y.node,Ge.BLACK,null,null);{const R=parseInt(w/2,10)+p,x=l(p,R),M=l(R+1,g);return y=r[R],S=n?n(y):y,new Ge(S,y.node,Ge.BLACK,x,M)}},u=function(p){let g=null,w=null,y=r.length;const S=function(x,M){const b=y-x,ae=y;y-=x;const ke=l(b+1,ae),X=r[b],J=n?n(X):X;R(new Ge(J,X.node,M,null,ke))},R=function(x){g?(g.left=x,g=x):(w=x,g=x)};for(let x=0;x<p.count;++x){const M=p.nextBitIsOne(),b=Math.pow(2,p.count-(x+1));M?S(b,Ge.BLACK):(S(b,Ge.BLACK),S(b,Ge.RED))}return w},d=new fI(r.length),f=u(d);return new yt(s||e,f)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pc;const oi={};class yn{static get Default(){return L(oi&&Me,"ChildrenNode.ts has not been loaded"),pc=pc||new yn({".priority":oi},{".priority":Me}),pc}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=gi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof yt?n:null}hasIndex(e){return an(this.indexSet_,e.toString())}addIndex(e,n){L(e!==di,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let l=!1;const u=n.getIterator(re.Wrap);let d=u.getNext();for(;d;)l=l||e.isDefinedOn(d.node),s.push(d),d=u.getNext();let f;l?f=_l(s,e.getCompare()):f=oi;const p=e.toString(),g=Object.assign({},this.indexSet_);g[p]=e;const w=Object.assign({},this.indexes_);return w[p]=f,new yn(w,g)}addToIndexes(e,n){const s=fl(this.indexes_,(l,u)=>{const d=gi(this.indexSet_,u);if(L(d,"Missing index implementation for "+u),l===oi)if(d.isDefinedOn(e.node)){const f=[],p=n.getIterator(re.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&f.push(g),g=p.getNext();return f.push(e),_l(f,d.getCompare())}else return oi;else{const f=n.get(e.name);let p=l;return f&&(p=p.remove(new re(e.name,f))),p.insert(e,e.node)}});return new yn(s,this.indexSet_)}removeFromIndexes(e,n){const s=fl(this.indexes_,l=>{if(l===oi)return l;{const u=n.get(e.name);return u?l.remove(new re(e.name,u)):l}});return new yn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _s;class K{static get EMPTY_NODE(){return _s||(_s=new K(new yt(ud),null,yn.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&m_(this.priorityNode_),this.children_.isEmpty()&&L(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||_s}updatePriority(e){return this.children_.isEmpty()?this:new K(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?_s:n}}getChild(e){const n=ne(e);return n===null?this:this.getImmediateChild(n).getChild(Se(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(L(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new re(e,n);let l,u;n.isEmpty()?(l=this.children_.remove(e),u=this.indexMap_.removeFromIndexes(s,this.children_)):(l=this.children_.insert(e,n),u=this.indexMap_.addToIndexes(s,this.children_));const d=l.isEmpty()?_s:this.priorityNode_;return new K(l,d,u)}}updateChild(e,n){const s=ne(e);if(s===null)return n;{L(ne(e)!==".priority"||nr(e)===1,".priority must be the last token in a path");const l=this.getImmediateChild(s).updateChild(Se(e),n);return this.updateImmediateChild(s,l)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,l=0,u=!0;if(this.forEachChild(Me,(d,f)=>{n[d]=f.val(e),s++,u&&K.INTEGER_REGEXP_.test(d)?l=Math.max(l,Number(d)):u=!1}),!e&&u&&l<2*s){const d=[];for(const f in n)d[f]=n[f];return d}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+p_(this.getPriority().val())+":"),this.forEachChild(Me,(n,s)=>{const l=s.hash();l!==""&&(e+=":"+n+":"+l)}),this.lazyHash_=e===""?"":$g(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const l=this.resolveIndex_(s);if(l){const u=l.getPredecessorKey(new re(e,n));return u?u.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new re(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new re(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(l=>n(l.name,l.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,l=>l);{const l=this.children_.getIteratorFrom(e.name,re.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)<0;)l.getNext(),u=l.peek();return l}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,l=>l);{const l=this.children_.getReverseIteratorFrom(e.name,re.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)>0;)l.getNext(),u=l.peek();return l}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===js?-1:0}withIndex(e){if(e===di||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new K(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===di||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Me),l=n.getIterator(Me);let u=s.getNext(),d=l.getNext();for(;u&&d;){if(u.name!==d.name||!u.node.equals(d.node))return!1;u=s.getNext(),d=l.getNext()}return u===null&&d===null}else return!1;else return!1}}resolveIndex_(e){return e===di?null:this.indexMap_.get(e.toString())}}K.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class pI extends K{constructor(){super(new yt(ud),K.EMPTY_NODE,yn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return K.EMPTY_NODE}isEmpty(){return!1}}const js=new pI;Object.defineProperties(re,{MIN:{value:new re(_i,K.EMPTY_NODE)},MAX:{value:new re(Cr,js)}});f_.__EMPTY_NODE=K.EMPTY_NODE;qe.__childrenNodeConstructor=K;aI(js);cI(js);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI=!0;function Ke(r,e=null){if(r===null)return K.EMPTY_NODE;if(typeof r=="object"&&".priority"in r&&(e=r[".priority"]),L(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof r=="object"&&".value"in r&&r[".value"]!==null&&(r=r[".value"]),typeof r!="object"||".sv"in r){const n=r;return new qe(n,Ke(e))}if(!(r instanceof Array)&&mI){const n=[];let s=!1;if(Ze(r,(d,f)=>{if(d.substring(0,1)!=="."){const p=Ke(f);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),n.push(new re(d,p)))}}),n.length===0)return K.EMPTY_NODE;const u=_l(n,lI,d=>d.name,ud);if(s){const d=_l(n,Me.getCompare());return new K(u,Ke(e),new yn({".priority":d},{".priority":Me}))}else return new K(u,Ke(e),yn.Default)}else{let n=K.EMPTY_NODE;return Ze(r,(s,l)=>{if(an(r,s)&&s.substring(0,1)!=="."){const u=Ke(l);(u.isLeafNode()||!u.isEmpty())&&(n=n.updateImmediateChild(s,u))}}),n.updatePriority(Ke(e))}}uI(Ke);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI extends zl{constructor(e){super(),this.indexPath_=e,L(!oe(e)&&ne(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),l=this.extractChild(n.node),u=s.compareTo(l);return u===0?Dr(e.name,n.name):u}makePost(e,n){const s=Ke(e),l=K.EMPTY_NODE.updateChild(this.indexPath_,s);return new re(n,l)}maxPost(){const e=K.EMPTY_NODE.updateChild(this.indexPath_,js);return new re(Cr,e)}toString(){return Os(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I extends zl{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Dr(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return re.MIN}maxPost(){return re.MAX}makePost(e,n){const s=Ke(e);return new re(n,s)}toString(){return".value"}}const yI=new _I;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y_(r){return{type:"value",snapshotNode:r}}function yi(r,e){return{type:"child_added",snapshotNode:e,childName:r}}function xs(r,e){return{type:"child_removed",snapshotNode:e,childName:r}}function Ds(r,e,n){return{type:"child_changed",snapshotNode:e,childName:r,oldSnap:n}}function vI(r,e){return{type:"child_moved",snapshotNode:e,childName:r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e){this.index_=e}updateChild(e,n,s,l,u,d){L(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(n);return f.getChild(l).equals(s.getChild(l))&&f.isEmpty()===s.isEmpty()||(d!=null&&(s.isEmpty()?e.hasChild(n)?d.trackChildChange(xs(n,f)):L(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?d.trackChildChange(yi(n,s)):d.trackChildChange(Ds(n,s,f))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Me,(l,u)=>{n.hasChild(l)||s.trackChildChange(xs(l,u))}),n.isLeafNode()||n.forEachChild(Me,(l,u)=>{if(e.hasChild(l)){const d=e.getImmediateChild(l);d.equals(u)||s.trackChildChange(Ds(l,u,d))}else s.trackChildChange(yi(l,u))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?K.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e){this.indexedFilter_=new cd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ls.getStartPost_(e),this.endPost_=Ls.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,l,u,d){return this.matches(new re(n,s))||(s=K.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,l,u,d)}updateFullNode(e,n,s){n.isLeafNode()&&(n=K.EMPTY_NODE);let l=n.withIndex(this.index_);l=l.updatePriority(K.EMPTY_NODE);const u=this;return n.forEachChild(Me,(d,f)=>{u.matches(new re(d,f))||(l=l.updateImmediateChild(d,K.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Ls(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,l,u,d){return this.rangedFilter_.matches(new re(n,s))||(s=K.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,l,u,d):this.fullLimitUpdateChild_(e,n,s,u,d)}updateFullNode(e,n,s){let l;if(n.isLeafNode()||n.isEmpty())l=K.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){l=K.EMPTY_NODE.withIndex(this.index_);let u;this.reverse_?u=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):u=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let d=0;for(;u.hasNext()&&d<this.limit_;){const f=u.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))l=l.updateImmediateChild(f.name,f.node),d++;else break;else continue}}else{l=n.withIndex(this.index_),l=l.updatePriority(K.EMPTY_NODE);let u;this.reverse_?u=l.getReverseIterator(this.index_):u=l.getIterator(this.index_);let d=0;for(;u.hasNext();){const f=u.getNext();d<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?d++:l=l.updateImmediateChild(f.name,K.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,l,u){let d;if(this.reverse_){const y=this.index_.getCompare();d=(S,R)=>y(R,S)}else d=this.index_.getCompare();const f=e;L(f.numChildren()===this.limit_,"");const p=new re(n,s),g=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),w=this.rangedFilter_.matches(p);if(f.hasChild(n)){const y=f.getImmediateChild(n);let S=l.getChildAfterChild(this.index_,g,this.reverse_);for(;S!=null&&(S.name===n||f.hasChild(S.name));)S=l.getChildAfterChild(this.index_,S,this.reverse_);const R=S==null?1:d(S,p);if(w&&!s.isEmpty()&&R>=0)return u!=null&&u.trackChildChange(Ds(n,s,y)),f.updateImmediateChild(n,s);{u!=null&&u.trackChildChange(xs(n,y));const M=f.updateImmediateChild(n,K.EMPTY_NODE);return S!=null&&this.rangedFilter_.matches(S)?(u!=null&&u.trackChildChange(yi(S.name,S.node)),M.updateImmediateChild(S.name,S.node)):M}}else return s.isEmpty()?e:w&&d(g,p)>=0?(u!=null&&(u.trackChildChange(xs(g.name,g.node)),u.trackChildChange(yi(n,s))),f.updateImmediateChild(n,s).updateImmediateChild(g.name,K.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Me}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return L(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return L(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:_i}hasEnd(){return this.endSet_}getIndexEndValue(){return L(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return L(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Cr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return L(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Me}copy(){const e=new dd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function EI(r){return r.loadsAllData()?new cd(r.getIndex()):r.hasLimit()?new wI(r):new Ls(r)}function xm(r){const e={};if(r.isDefault())return e;let n;if(r.index_===Me?n="$priority":r.index_===yI?n="$value":r.index_===di?n="$key":(L(r.index_ instanceof gI,"Unrecognized index type!"),n=r.index_.toString()),e.orderBy=Qe(n),r.startSet_){const s=r.startAfterSet_?"startAfter":"startAt";e[s]=Qe(r.indexStartValue_),r.startNameSet_&&(e[s]+=","+Qe(r.indexStartName_))}if(r.endSet_){const s=r.endBeforeSet_?"endBefore":"endAt";e[s]=Qe(r.indexEndValue_),r.endNameSet_&&(e[s]+=","+Qe(r.indexEndName_))}return r.limitSet_&&(r.isViewFromLeft()?e.limitToFirst=r.limit_:e.limitToLast=r.limit_),e}function Dm(r){const e={};if(r.startSet_&&(e.sp=r.indexStartValue_,r.startNameSet_&&(e.sn=r.indexStartName_),e.sin=!r.startAfterSet_),r.endSet_&&(e.ep=r.indexEndValue_,r.endNameSet_&&(e.en=r.indexEndName_),e.ein=!r.endBeforeSet_),r.limitSet_){e.l=r.limit_;let n=r.viewFrom_;n===""&&(r.isViewFromLeft()?n="l":n="r"),e.vf=n}return r.index_!==Me&&(e.i=r.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl extends u_{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(L(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,l){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=l,this.log_=zs("p:rest:"),this.listens_={}}listen(e,n,s,l){const u=e._path.toString();this.log_("Listen called for "+u+" "+e._queryIdentifier);const d=yl.getListenId_(e,s),f={};this.listens_[d]=f;const p=xm(e._queryParams);this.restRequest_(u+".json",p,(g,w)=>{let y=w;if(g===404&&(y=null,g=null),g===null&&this.onDataUpdate_(u,y,!1,s),gi(this.listens_,d)===f){let S;g?g===401?S="permission_denied":S="rest_error:"+g:S="ok",l(S,null)}})}unlisten(e,n){const s=yl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=xm(e._queryParams),s=e._path.toString(),l=new Fs;return this.restRequest_(s+".json",n,(u,d)=>{let f=d;u===404&&(f=null,u=null),u===null?(this.onDataUpdate_(s,f,!1,null),l.resolve(f)):l.reject(new Error(f))}),l.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([l,u])=>{l&&l.accessToken&&(n.auth=l.accessToken),u&&u.token&&(n.ac=u.token);const d=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ii(n);this.log_("Sending REST request for "+d);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(s&&f.readyState===4){this.log_("REST Response for "+d+" received. status:",f.status,"response:",f.responseText);let p=null;if(f.status>=200&&f.status<300){try{p=Rs(f.responseText)}catch{lt("Failed to parse JSON response for "+d+": "+f.responseText)}s(null,p)}else f.status!==401&&f.status!==404&&lt("Got unsuccessful REST response for "+d+" Status: "+f.status),s(f.status);s=null}},f.open("GET",d,!0),f.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(){this.rootNode_=K.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(){return{value:null,children:new Map}}function v_(r,e,n){if(oe(e))r.value=n,r.children.clear();else if(r.value!==null)r.value=r.value.updateChild(e,n);else{const s=ne(e);r.children.has(s)||r.children.set(s,vl());const l=r.children.get(s);e=Se(e),v_(l,e,n)}}function xc(r,e,n){r.value!==null?n(e,r.value):II(r,(s,l)=>{const u=new ye(e.toString()+"/"+s);xc(l,u,n)})}function II(r,e){r.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ze(this.last_,(s,l)=>{n[s]=n[s]-l}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm=10*1e3,TI=30*1e3,kI=5*60*1e3;class RI{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new CI(e);const s=Lm+(TI-Lm)*Math.random();Es(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ze(e,(l,u)=>{u>0&&an(this.statsToReport_,l)&&(n[l]=u,s=!0)}),s&&this.server_.reportStats(n),Es(this.reportStats_.bind(this),Math.floor(Math.random()*2*kI))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qt;(function(r){r[r.OVERWRITE=0]="OVERWRITE",r[r.MERGE=1]="MERGE",r[r.ACK_USER_WRITE=2]="ACK_USER_WRITE",r[r.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(qt||(qt={}));function hd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function fd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function pd(r){return{fromUser:!1,fromServer:!0,queryId:r,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=qt.ACK_USER_WRITE,this.source=hd()}operationForChild(e){if(oe(this.path)){if(this.affectedTree.value!=null)return L(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ye(e));return new wl(pe(),n,this.revert)}}else return L(ne(this.path)===e,"operationForChild called for unrelated child."),new wl(Se(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,n){this.source=e,this.path=n,this.type=qt.LISTEN_COMPLETE}operationForChild(e){return oe(this.path)?new Ms(this.source,pe()):new Ms(this.source,Se(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=qt.OVERWRITE}operationForChild(e){return oe(this.path)?new Tr(this.source,pe(),this.snap.getImmediateChild(e)):new Tr(this.source,Se(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=qt.MERGE}operationForChild(e){if(oe(this.path)){const n=this.children.subtree(new ye(e));return n.isEmpty()?null:n.value?new Tr(this.source,pe(),n.value):new vi(this.source,pe(),n)}else return L(ne(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new vi(this.source,Se(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(oe(e))return this.isFullyInitialized()&&!this.filtered_;const n=ne(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function PI(r,e,n,s){const l=[],u=[];return e.forEach(d=>{d.type==="child_changed"&&r.index_.indexedValueChanged(d.oldSnap,d.snapshotNode)&&u.push(vI(d.childName,d.snapshotNode))}),ys(r,l,"child_removed",e,s,n),ys(r,l,"child_added",e,s,n),ys(r,l,"child_moved",u,s,n),ys(r,l,"child_changed",e,s,n),ys(r,l,"value",e,s,n),l}function ys(r,e,n,s,l,u){const d=s.filter(f=>f.type===n);d.sort((f,p)=>OI(r,f,p)),d.forEach(f=>{const p=AI(r,f,u);l.forEach(g=>{g.respondsTo(f.type)&&e.push(g.createEvent(p,r.query_))})})}function AI(r,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,r.index_)),e}function OI(r,e,n){if(e.childName==null||n.childName==null)throw Si("Should only compare child_ events.");const s=new re(e.childName,e.snapshotNode),l=new re(n.childName,n.snapshotNode);return r.index_.compare(s,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(r,e){return{eventCache:r,serverCache:e}}function Ss(r,e,n,s){return jl(new kr(e,n,s),r.serverCache)}function w_(r,e,n,s){return jl(r.eventCache,new kr(e,n,s))}function Dc(r){return r.eventCache.isFullyInitialized()?r.eventCache.getNode():null}function Rr(r){return r.serverCache.isFullyInitialized()?r.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mc;const xI=()=>(mc||(mc=new yt(gS)),mc);class Ee{static fromObject(e){let n=new Ee(null);return Ze(e,(s,l)=>{n=n.set(new ye(s),l)}),n}constructor(e,n=xI()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:pe(),value:this.value};if(oe(e))return null;{const s=ne(e),l=this.children.get(s);if(l!==null){const u=l.findRootMostMatchingPathAndValue(Se(e),n);return u!=null?{path:Le(new ye(s),u.path),value:u.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(oe(e))return this;{const n=ne(e),s=this.children.get(n);return s!==null?s.subtree(Se(e)):new Ee(null)}}set(e,n){if(oe(e))return new Ee(n,this.children);{const s=ne(e),u=(this.children.get(s)||new Ee(null)).set(Se(e),n),d=this.children.insert(s,u);return new Ee(this.value,d)}}remove(e){if(oe(e))return this.children.isEmpty()?new Ee(null):new Ee(null,this.children);{const n=ne(e),s=this.children.get(n);if(s){const l=s.remove(Se(e));let u;return l.isEmpty()?u=this.children.remove(n):u=this.children.insert(n,l),this.value===null&&u.isEmpty()?new Ee(null):new Ee(this.value,u)}else return this}}get(e){if(oe(e))return this.value;{const n=ne(e),s=this.children.get(n);return s?s.get(Se(e)):null}}setTree(e,n){if(oe(e))return n;{const s=ne(e),u=(this.children.get(s)||new Ee(null)).setTree(Se(e),n);let d;return u.isEmpty()?d=this.children.remove(s):d=this.children.insert(s,u),new Ee(this.value,d)}}fold(e){return this.fold_(pe(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((l,u)=>{s[l]=u.fold_(Le(e,l),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,pe(),n)}findOnPath_(e,n,s){const l=this.value?s(n,this.value):!1;if(l)return l;if(oe(e))return null;{const u=ne(e),d=this.children.get(u);return d?d.findOnPath_(Se(e),Le(n,u),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,pe(),n)}foreachOnPath_(e,n,s){if(oe(e))return this;{this.value&&s(n,this.value);const l=ne(e),u=this.children.get(l);return u?u.foreachOnPath_(Se(e),Le(n,l),s):new Ee(null)}}foreach(e){this.foreach_(pe(),e)}foreach_(e,n){this.children.inorderTraversal((s,l)=>{l.foreach_(Le(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.writeTree_=e}static empty(){return new Gt(new Ee(null))}}function Is(r,e,n){if(oe(e))return new Gt(new Ee(n));{const s=r.writeTree_.findRootMostValueAndPath(e);if(s!=null){const l=s.path;let u=s.value;const d=_t(l,e);return u=u.updateChild(d,n),new Gt(r.writeTree_.set(l,u))}else{const l=new Ee(n),u=r.writeTree_.setTree(e,l);return new Gt(u)}}}function Lc(r,e,n){let s=r;return Ze(n,(l,u)=>{s=Is(s,Le(e,l),u)}),s}function Mm(r,e){if(oe(e))return Gt.empty();{const n=r.writeTree_.setTree(e,new Ee(null));return new Gt(n)}}function Mc(r,e){return Lr(r,e)!=null}function Lr(r,e){const n=r.writeTree_.findRootMostValueAndPath(e);return n!=null?r.writeTree_.get(n.path).getChild(_t(n.path,e)):null}function bm(r){const e=[],n=r.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Me,(s,l)=>{e.push(new re(s,l))}):r.writeTree_.children.inorderTraversal((s,l)=>{l.value!=null&&e.push(new re(s,l.value))}),e}function er(r,e){if(oe(e))return r;{const n=Lr(r,e);return n!=null?new Gt(new Ee(n)):new Gt(r.writeTree_.subtree(e))}}function bc(r){return r.writeTree_.isEmpty()}function wi(r,e){return E_(pe(),r.writeTree_,e)}function E_(r,e,n){if(e.value!=null)return n.updateChild(r,e.value);{let s=null;return e.children.inorderTraversal((l,u)=>{l===".priority"?(L(u.value!==null,"Priority writes must always be leaf nodes"),s=u.value):n=E_(Le(r,l),u,n)}),!n.getChild(r).isEmpty()&&s!==null&&(n=n.updateChild(Le(r,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(r,e){return T_(e,r)}function DI(r,e,n,s,l){L(s>r.lastWriteId,"Stacking an older write on top of newer ones"),l===void 0&&(l=!0),r.allWrites.push({path:e,snap:n,writeId:s,visible:l}),l&&(r.visibleWrites=Is(r.visibleWrites,e,n)),r.lastWriteId=s}function LI(r,e,n,s){L(s>r.lastWriteId,"Stacking an older merge on top of newer ones"),r.allWrites.push({path:e,children:n,writeId:s,visible:!0}),r.visibleWrites=Lc(r.visibleWrites,e,n),r.lastWriteId=s}function MI(r,e){for(let n=0;n<r.allWrites.length;n++){const s=r.allWrites[n];if(s.writeId===e)return s}return null}function bI(r,e){const n=r.allWrites.findIndex(f=>f.writeId===e);L(n>=0,"removeWrite called with nonexistent writeId.");const s=r.allWrites[n];r.allWrites.splice(n,1);let l=s.visible,u=!1,d=r.allWrites.length-1;for(;l&&d>=0;){const f=r.allWrites[d];f.visible&&(d>=n&&FI(f,s.path)?l=!1:Mt(s.path,f.path)&&(u=!0)),d--}if(l){if(u)return UI(r),!0;if(s.snap)r.visibleWrites=Mm(r.visibleWrites,s.path);else{const f=s.children;Ze(f,p=>{r.visibleWrites=Mm(r.visibleWrites,Le(s.path,p))})}return!0}else return!1}function FI(r,e){if(r.snap)return Mt(r.path,e);for(const n in r.children)if(r.children.hasOwnProperty(n)&&Mt(Le(r.path,n),e))return!0;return!1}function UI(r){r.visibleWrites=S_(r.allWrites,zI,pe()),r.allWrites.length>0?r.lastWriteId=r.allWrites[r.allWrites.length-1].writeId:r.lastWriteId=-1}function zI(r){return r.visible}function S_(r,e,n){let s=Gt.empty();for(let l=0;l<r.length;++l){const u=r[l];if(e(u)){const d=u.path;let f;if(u.snap)Mt(n,d)?(f=_t(n,d),s=Is(s,f,u.snap)):Mt(d,n)&&(f=_t(d,n),s=Is(s,pe(),u.snap.getChild(f)));else if(u.children){if(Mt(n,d))f=_t(n,d),s=Lc(s,f,u.children);else if(Mt(d,n))if(f=_t(d,n),oe(f))s=Lc(s,pe(),u.children);else{const p=gi(u.children,ne(f));if(p){const g=p.getChild(Se(f));s=Is(s,pe(),g)}}}else throw Si("WriteRecord should have .snap or .children")}}return s}function I_(r,e,n,s,l){if(!s&&!l){const u=Lr(r.visibleWrites,e);if(u!=null)return u;{const d=er(r.visibleWrites,e);if(bc(d))return n;if(n==null&&!Mc(d,pe()))return null;{const f=n||K.EMPTY_NODE;return wi(d,f)}}}else{const u=er(r.visibleWrites,e);if(!l&&bc(u))return n;if(!l&&n==null&&!Mc(u,pe()))return null;{const d=function(g){return(g.visible||l)&&(!s||!~s.indexOf(g.writeId))&&(Mt(g.path,e)||Mt(e,g.path))},f=S_(r.allWrites,d,e),p=n||K.EMPTY_NODE;return wi(f,p)}}}function jI(r,e,n){let s=K.EMPTY_NODE;const l=Lr(r.visibleWrites,e);if(l)return l.isLeafNode()||l.forEachChild(Me,(u,d)=>{s=s.updateImmediateChild(u,d)}),s;if(n){const u=er(r.visibleWrites,e);return n.forEachChild(Me,(d,f)=>{const p=wi(er(u,new ye(d)),f);s=s.updateImmediateChild(d,p)}),bm(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}else{const u=er(r.visibleWrites,e);return bm(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}}function WI(r,e,n,s,l){L(s||l,"Either existingEventSnap or existingServerSnap must exist");const u=Le(e,n);if(Mc(r.visibleWrites,u))return null;{const d=er(r.visibleWrites,u);return bc(d)?l.getChild(n):wi(d,l.getChild(n))}}function BI(r,e,n,s){const l=Le(e,n),u=Lr(r.visibleWrites,l);if(u!=null)return u;if(s.isCompleteForChild(n)){const d=er(r.visibleWrites,l);return wi(d,s.getNode().getImmediateChild(n))}else return null}function VI(r,e){return Lr(r.visibleWrites,e)}function $I(r,e,n,s,l,u,d){let f;const p=er(r.visibleWrites,e),g=Lr(p,pe());if(g!=null)f=g;else if(n!=null)f=wi(p,n);else return[];if(f=f.withIndex(d),!f.isEmpty()&&!f.isLeafNode()){const w=[],y=d.getCompare(),S=u?f.getReverseIteratorFrom(s,d):f.getIteratorFrom(s,d);let R=S.getNext();for(;R&&w.length<l;)y(R,s)!==0&&w.push(R),R=S.getNext();return w}else return[]}function HI(){return{visibleWrites:Gt.empty(),allWrites:[],lastWriteId:-1}}function El(r,e,n,s){return I_(r.writeTree,r.treePath,e,n,s)}function gd(r,e){return jI(r.writeTree,r.treePath,e)}function Fm(r,e,n,s){return WI(r.writeTree,r.treePath,e,n,s)}function Sl(r,e){return VI(r.writeTree,Le(r.treePath,e))}function qI(r,e,n,s,l,u){return $I(r.writeTree,r.treePath,e,n,s,l,u)}function _d(r,e,n){return BI(r.writeTree,r.treePath,e,n)}function C_(r,e){return T_(Le(r.treePath,e),r.writeTree)}function T_(r,e){return{treePath:r,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;L(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),L(s!==".priority","Only non-priority child changes can be tracked.");const l=this.changeMap.get(s);if(l){const u=l.type;if(n==="child_added"&&u==="child_removed")this.changeMap.set(s,Ds(s,e.snapshotNode,l.snapshotNode));else if(n==="child_removed"&&u==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&u==="child_changed")this.changeMap.set(s,xs(s,l.oldSnap));else if(n==="child_changed"&&u==="child_added")this.changeMap.set(s,yi(s,e.snapshotNode));else if(n==="child_changed"&&u==="child_changed")this.changeMap.set(s,Ds(s,e.snapshotNode,l.oldSnap));else throw Si("Illegal combination of changes: "+e+" occurred after "+l)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const k_=new KI;class yd{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new kr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return _d(this.writes_,e,s)}}getChildAfterChild(e,n,s){const l=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Rr(this.viewCache_),u=qI(this.writes_,l,n,1,s,e);return u.length===0?null:u[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QI(r){return{filter:r}}function YI(r,e){L(e.eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),L(e.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed")}function XI(r,e,n,s,l){const u=new GI;let d,f;if(n.type===qt.OVERWRITE){const g=n;g.source.fromUser?d=Fc(r,e,g.path,g.snap,s,l,u):(L(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered()&&!oe(g.path),d=Il(r,e,g.path,g.snap,s,l,f,u))}else if(n.type===qt.MERGE){const g=n;g.source.fromUser?d=ZI(r,e,g.path,g.children,s,l,u):(L(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered(),d=Uc(r,e,g.path,g.children,s,l,f,u))}else if(n.type===qt.ACK_USER_WRITE){const g=n;g.revert?d=nC(r,e,g.path,s,l,u):d=eC(r,e,g.path,g.affectedTree,s,l,u)}else if(n.type===qt.LISTEN_COMPLETE)d=tC(r,e,n.path,s,u);else throw Si("Unknown operation type: "+n.type);const p=u.getChanges();return JI(e,d,p),{viewCache:d,changes:p}}function JI(r,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const l=s.getNode().isLeafNode()||s.getNode().isEmpty(),u=Dc(r);(n.length>0||!r.eventCache.isFullyInitialized()||l&&!s.getNode().equals(u)||!s.getNode().getPriority().equals(u.getPriority()))&&n.push(y_(Dc(e)))}}function R_(r,e,n,s,l,u){const d=e.eventCache;if(Sl(s,n)!=null)return e;{let f,p;if(oe(n))if(L(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=Rr(e),w=g instanceof K?g:K.EMPTY_NODE,y=gd(s,w);f=r.filter.updateFullNode(e.eventCache.getNode(),y,u)}else{const g=El(s,Rr(e));f=r.filter.updateFullNode(e.eventCache.getNode(),g,u)}else{const g=ne(n);if(g===".priority"){L(nr(n)===1,"Can't have a priority with additional path components");const w=d.getNode();p=e.serverCache.getNode();const y=Fm(s,n,w,p);y!=null?f=r.filter.updatePriority(w,y):f=d.getNode()}else{const w=Se(n);let y;if(d.isCompleteForChild(g)){p=e.serverCache.getNode();const S=Fm(s,n,d.getNode(),p);S!=null?y=d.getNode().getImmediateChild(g).updateChild(w,S):y=d.getNode().getImmediateChild(g)}else y=_d(s,g,e.serverCache);y!=null?f=r.filter.updateChild(d.getNode(),g,y,w,l,u):f=d.getNode()}}return Ss(e,f,d.isFullyInitialized()||oe(n),r.filter.filtersNodes())}}function Il(r,e,n,s,l,u,d,f){const p=e.serverCache;let g;const w=d?r.filter:r.filter.getIndexedFilter();if(oe(n))g=w.updateFullNode(p.getNode(),s,null);else if(w.filtersNodes()&&!p.isFiltered()){const R=p.getNode().updateChild(n,s);g=w.updateFullNode(p.getNode(),R,null)}else{const R=ne(n);if(!p.isCompleteForPath(n)&&nr(n)>1)return e;const x=Se(n),b=p.getNode().getImmediateChild(R).updateChild(x,s);R===".priority"?g=w.updatePriority(p.getNode(),b):g=w.updateChild(p.getNode(),R,b,x,k_,null)}const y=w_(e,g,p.isFullyInitialized()||oe(n),w.filtersNodes()),S=new yd(l,y,u);return R_(r,y,n,l,S,f)}function Fc(r,e,n,s,l,u,d){const f=e.eventCache;let p,g;const w=new yd(l,e,u);if(oe(n))g=r.filter.updateFullNode(e.eventCache.getNode(),s,d),p=Ss(e,g,!0,r.filter.filtersNodes());else{const y=ne(n);if(y===".priority")g=r.filter.updatePriority(e.eventCache.getNode(),s),p=Ss(e,g,f.isFullyInitialized(),f.isFiltered());else{const S=Se(n),R=f.getNode().getImmediateChild(y);let x;if(oe(S))x=s;else{const M=w.getCompleteChild(y);M!=null?od(S)===".priority"&&M.getChild(d_(S)).isEmpty()?x=M:x=M.updateChild(S,s):x=K.EMPTY_NODE}if(R.equals(x))p=e;else{const M=r.filter.updateChild(f.getNode(),y,x,S,w,d);p=Ss(e,M,f.isFullyInitialized(),r.filter.filtersNodes())}}}return p}function Um(r,e){return r.eventCache.isCompleteForChild(e)}function ZI(r,e,n,s,l,u,d){let f=e;return s.foreach((p,g)=>{const w=Le(n,p);Um(e,ne(w))&&(f=Fc(r,f,w,g,l,u,d))}),s.foreach((p,g)=>{const w=Le(n,p);Um(e,ne(w))||(f=Fc(r,f,w,g,l,u,d))}),f}function zm(r,e,n){return n.foreach((s,l)=>{e=e.updateChild(s,l)}),e}function Uc(r,e,n,s,l,u,d,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;oe(n)?g=s:g=new Ee(null).setTree(n,s);const w=e.serverCache.getNode();return g.children.inorderTraversal((y,S)=>{if(w.hasChild(y)){const R=e.serverCache.getNode().getImmediateChild(y),x=zm(r,R,S);p=Il(r,p,new ye(y),x,l,u,d,f)}}),g.children.inorderTraversal((y,S)=>{const R=!e.serverCache.isCompleteForChild(y)&&S.value===null;if(!w.hasChild(y)&&!R){const x=e.serverCache.getNode().getImmediateChild(y),M=zm(r,x,S);p=Il(r,p,new ye(y),M,l,u,d,f)}}),p}function eC(r,e,n,s,l,u,d){if(Sl(l,n)!=null)return e;const f=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(oe(n)&&p.isFullyInitialized()||p.isCompleteForPath(n))return Il(r,e,n,p.getNode().getChild(n),l,u,f,d);if(oe(n)){let g=new Ee(null);return p.getNode().forEachChild(di,(w,y)=>{g=g.set(new ye(w),y)}),Uc(r,e,n,g,l,u,f,d)}else return e}else{let g=new Ee(null);return s.foreach((w,y)=>{const S=Le(n,w);p.isCompleteForPath(S)&&(g=g.set(w,p.getNode().getChild(S)))}),Uc(r,e,n,g,l,u,f,d)}}function tC(r,e,n,s,l){const u=e.serverCache,d=w_(e,u.getNode(),u.isFullyInitialized()||oe(n),u.isFiltered());return R_(r,d,n,s,k_,l)}function nC(r,e,n,s,l,u){let d;if(Sl(s,n)!=null)return e;{const f=new yd(s,e,l),p=e.eventCache.getNode();let g;if(oe(n)||ne(n)===".priority"){let w;if(e.serverCache.isFullyInitialized())w=El(s,Rr(e));else{const y=e.serverCache.getNode();L(y instanceof K,"serverChildren would be complete if leaf node"),w=gd(s,y)}w=w,g=r.filter.updateFullNode(p,w,u)}else{const w=ne(n);let y=_d(s,w,e.serverCache);y==null&&e.serverCache.isCompleteForChild(w)&&(y=p.getImmediateChild(w)),y!=null?g=r.filter.updateChild(p,w,y,Se(n),f,u):e.eventCache.getNode().hasChild(w)?g=r.filter.updateChild(p,w,K.EMPTY_NODE,Se(n),f,u):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(d=El(s,Rr(e)),d.isLeafNode()&&(g=r.filter.updateFullNode(g,d,u)))}return d=e.serverCache.isFullyInitialized()||Sl(s,pe())!=null,Ss(e,g,d,r.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,l=new cd(s.getIndex()),u=EI(s);this.processor_=QI(u);const d=n.serverCache,f=n.eventCache,p=l.updateFullNode(K.EMPTY_NODE,d.getNode(),null),g=u.updateFullNode(K.EMPTY_NODE,f.getNode(),null),w=new kr(p,d.isFullyInitialized(),l.filtersNodes()),y=new kr(g,f.isFullyInitialized(),u.filtersNodes());this.viewCache_=jl(y,w),this.eventGenerator_=new NI(this.query_)}get query(){return this.query_}}function iC(r){return r.viewCache_.serverCache.getNode()}function sC(r,e){const n=Rr(r.viewCache_);return n&&(r.query._queryParams.loadsAllData()||!oe(e)&&!n.getImmediateChild(ne(e)).isEmpty())?n.getChild(e):null}function jm(r){return r.eventRegistrations_.length===0}function oC(r,e){r.eventRegistrations_.push(e)}function Wm(r,e,n){const s=[];if(n){L(e==null,"A cancel should cancel all event registrations.");const l=r.query._path;r.eventRegistrations_.forEach(u=>{const d=u.createCancelEvent(n,l);d&&s.push(d)})}if(e){let l=[];for(let u=0;u<r.eventRegistrations_.length;++u){const d=r.eventRegistrations_[u];if(!d.matches(e))l.push(d);else if(e.hasAnyCallback()){l=l.concat(r.eventRegistrations_.slice(u+1));break}}r.eventRegistrations_=l}else r.eventRegistrations_=[];return s}function Bm(r,e,n,s){e.type===qt.MERGE&&e.source.queryId!==null&&(L(Rr(r.viewCache_),"We should always have a full cache before handling merges"),L(Dc(r.viewCache_),"Missing event cache, even though we have a server cache"));const l=r.viewCache_,u=XI(r.processor_,l,e,n,s);return YI(r.processor_,u.viewCache),L(u.viewCache.serverCache.isFullyInitialized()||!l.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),r.viewCache_=u.viewCache,N_(r,u.changes,u.viewCache.eventCache.getNode(),null)}function lC(r,e){const n=r.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Me,(u,d)=>{s.push(yi(u,d))}),n.isFullyInitialized()&&s.push(y_(n.getNode())),N_(r,s,n.getNode(),e)}function N_(r,e,n,s){const l=s?[s]:r.eventRegistrations_;return PI(r.eventGenerator_,e,n,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cl;class aC{constructor(){this.views=new Map}}function uC(r){L(!Cl,"__referenceConstructor has already been defined"),Cl=r}function cC(){return L(Cl,"Reference.ts has not been loaded"),Cl}function dC(r){return r.views.size===0}function vd(r,e,n,s){const l=e.source.queryId;if(l!==null){const u=r.views.get(l);return L(u!=null,"SyncTree gave us an op for an invalid query."),Bm(u,e,n,s)}else{let u=[];for(const d of r.views.values())u=u.concat(Bm(d,e,n,s));return u}}function hC(r,e,n,s,l){const u=e._queryIdentifier,d=r.views.get(u);if(!d){let f=El(n,l?s:null),p=!1;f?p=!0:s instanceof K?(f=gd(n,s),p=!1):(f=K.EMPTY_NODE,p=!1);const g=jl(new kr(f,p,!1),new kr(s,l,!1));return new rC(e,g)}return d}function fC(r,e,n,s,l,u){const d=hC(r,e,s,l,u);return r.views.has(e._queryIdentifier)||r.views.set(e._queryIdentifier,d),oC(d,n),lC(d,n)}function pC(r,e,n,s){const l=e._queryIdentifier,u=[];let d=[];const f=rr(r);if(l==="default")for(const[p,g]of r.views.entries())d=d.concat(Wm(g,n,s)),jm(g)&&(r.views.delete(p),g.query._queryParams.loadsAllData()||u.push(g.query));else{const p=r.views.get(l);p&&(d=d.concat(Wm(p,n,s)),jm(p)&&(r.views.delete(l),p.query._queryParams.loadsAllData()||u.push(p.query)))}return f&&!rr(r)&&u.push(new(cC())(e._repo,e._path)),{removed:u,events:d}}function P_(r){const e=[];for(const n of r.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function hi(r,e){let n=null;for(const s of r.views.values())n=n||sC(s,e);return n}function A_(r,e){if(e._queryParams.loadsAllData())return Wl(r);{const s=e._queryIdentifier;return r.views.get(s)}}function O_(r,e){return A_(r,e)!=null}function rr(r){return Wl(r)!=null}function Wl(r){for(const e of r.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tl;function mC(r){L(!Tl,"__referenceConstructor has already been defined"),Tl=r}function gC(){return L(Tl,"Reference.ts has not been loaded"),Tl}let _C=1;class Vm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ee(null),this.pendingWriteTree_=HI(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function x_(r,e,n,s,l){return DI(r.pendingWriteTree_,e,n,s,l),l?ki(r,new Tr(hd(),e,n)):[]}function yC(r,e,n,s){LI(r.pendingWriteTree_,e,n,s);const l=Ee.fromObject(n);return ki(r,new vi(hd(),e,l))}function Xn(r,e,n=!1){const s=MI(r.pendingWriteTree_,e);if(bI(r.pendingWriteTree_,e)){let u=new Ee(null);return s.snap!=null?u=u.set(pe(),!0):Ze(s.children,d=>{u=u.set(new ye(d),!0)}),ki(r,new wl(s.path,u,n))}else return[]}function Bl(r,e,n){return ki(r,new Tr(fd(),e,n))}function vC(r,e,n){const s=Ee.fromObject(n);return ki(r,new vi(fd(),e,s))}function wC(r,e){return ki(r,new Ms(fd(),e))}function EC(r,e,n){const s=Ed(r,n);if(s){const l=Sd(s),u=l.path,d=l.queryId,f=_t(u,e),p=new Ms(pd(d),f);return Id(r,u,p)}else return[]}function zc(r,e,n,s,l=!1){const u=e._path,d=r.syncPointTree_.get(u);let f=[];if(d&&(e._queryIdentifier==="default"||O_(d,e))){const p=pC(d,e,n,s);dC(d)&&(r.syncPointTree_=r.syncPointTree_.remove(u));const g=p.removed;if(f=p.events,!l){const w=g.findIndex(S=>S._queryParams.loadsAllData())!==-1,y=r.syncPointTree_.findOnPath(u,(S,R)=>rr(R));if(w&&!y){const S=r.syncPointTree_.subtree(u);if(!S.isEmpty()){const R=CC(S);for(let x=0;x<R.length;++x){const M=R[x],b=M.query,ae=M_(r,M);r.listenProvider_.startListening(Cs(b),kl(r,b),ae.hashFn,ae.onComplete)}}}!y&&g.length>0&&!s&&(w?r.listenProvider_.stopListening(Cs(e),null):g.forEach(S=>{const R=r.queryToTagMap.get(Vl(S));r.listenProvider_.stopListening(Cs(S),R)}))}TC(r,g)}return f}function SC(r,e,n,s){const l=Ed(r,s);if(l!=null){const u=Sd(l),d=u.path,f=u.queryId,p=_t(d,e),g=new Tr(pd(f),p,n);return Id(r,d,g)}else return[]}function IC(r,e,n,s){const l=Ed(r,s);if(l){const u=Sd(l),d=u.path,f=u.queryId,p=_t(d,e),g=Ee.fromObject(n),w=new vi(pd(f),p,g);return Id(r,d,w)}else return[]}function $m(r,e,n,s=!1){const l=e._path;let u=null,d=!1;r.syncPointTree_.foreachOnPath(l,(S,R)=>{const x=_t(S,l);u=u||hi(R,x),d=d||rr(R)});let f=r.syncPointTree_.get(l);f?(d=d||rr(f),u=u||hi(f,pe())):(f=new aC,r.syncPointTree_=r.syncPointTree_.set(l,f));let p;u!=null?p=!0:(p=!1,u=K.EMPTY_NODE,r.syncPointTree_.subtree(l).foreachChild((R,x)=>{const M=hi(x,pe());M&&(u=u.updateImmediateChild(R,M))}));const g=O_(f,e);if(!g&&!e._queryParams.loadsAllData()){const S=Vl(e);L(!r.queryToTagMap.has(S),"View does not exist, but we have a tag");const R=kC();r.queryToTagMap.set(S,R),r.tagToQueryMap.set(R,S)}const w=md(r.pendingWriteTree_,l);let y=fC(f,e,n,w,u,p);if(!g&&!d&&!s){const S=A_(f,e);y=y.concat(RC(r,e,S))}return y}function wd(r,e,n){const l=r.pendingWriteTree_,u=r.syncPointTree_.findOnPath(e,(d,f)=>{const p=_t(d,e),g=hi(f,p);if(g)return g});return I_(l,e,u,n,!0)}function ki(r,e){return D_(e,r.syncPointTree_,null,md(r.pendingWriteTree_,pe()))}function D_(r,e,n,s){if(oe(r.path))return L_(r,e,n,s);{const l=e.get(pe());n==null&&l!=null&&(n=hi(l,pe()));let u=[];const d=ne(r.path),f=r.operationForChild(d),p=e.children.get(d);if(p&&f){const g=n?n.getImmediateChild(d):null,w=C_(s,d);u=u.concat(D_(f,p,g,w))}return l&&(u=u.concat(vd(l,r,s,n))),u}}function L_(r,e,n,s){const l=e.get(pe());n==null&&l!=null&&(n=hi(l,pe()));let u=[];return e.children.inorderTraversal((d,f)=>{const p=n?n.getImmediateChild(d):null,g=C_(s,d),w=r.operationForChild(d);w&&(u=u.concat(L_(w,f,p,g)))}),l&&(u=u.concat(vd(l,r,s,n))),u}function M_(r,e){const n=e.query,s=kl(r,n);return{hashFn:()=>(iC(e)||K.EMPTY_NODE).hash(),onComplete:l=>{if(l==="ok")return s?EC(r,n._path,s):wC(r,n._path);{const u=vS(l,n);return zc(r,n,null,u)}}}}function kl(r,e){const n=Vl(e);return r.queryToTagMap.get(n)}function Vl(r){return r._path.toString()+"$"+r._queryIdentifier}function Ed(r,e){return r.tagToQueryMap.get(e)}function Sd(r){const e=r.indexOf("$");return L(e!==-1&&e<r.length-1,"Bad queryKey."),{queryId:r.substr(e+1),path:new ye(r.substr(0,e))}}function Id(r,e,n){const s=r.syncPointTree_.get(e);L(s,"Missing sync point for query tag that we're tracking");const l=md(r.pendingWriteTree_,e);return vd(s,n,l,null)}function CC(r){return r.fold((e,n,s)=>{if(n&&rr(n))return[Wl(n)];{let l=[];return n&&(l=P_(n)),Ze(s,(u,d)=>{l=l.concat(d)}),l}})}function Cs(r){return r._queryParams.loadsAllData()&&!r._queryParams.isDefault()?new(gC())(r._repo,r._path):r}function TC(r,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const l=Vl(s),u=r.queryToTagMap.get(l);r.queryToTagMap.delete(l),r.tagToQueryMap.delete(u)}}}function kC(){return _C++}function RC(r,e,n){const s=e._path,l=kl(r,e),u=M_(r,n),d=r.listenProvider_.startListening(Cs(e),l,u.hashFn,u.onComplete),f=r.syncPointTree_.subtree(s);if(l)L(!rr(f.value),"If we're adding a query, it shouldn't be shadowed");else{const p=f.fold((g,w,y)=>{if(!oe(g)&&w&&rr(w))return[Wl(w).query];{let S=[];return w&&(S=S.concat(P_(w).map(R=>R.query))),Ze(y,(R,x)=>{S=S.concat(x)}),S}});for(let g=0;g<p.length;++g){const w=p[g];r.listenProvider_.stopListening(Cs(w),kl(r,w))}}return d}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Cd(n)}node(){return this.node_}}class Td{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Le(this.path_,e);return new Td(this.syncTree_,n)}node(){return wd(this.syncTree_,this.path_)}}const NC=function(r){return r=r||{},r.timestamp=r.timestamp||new Date().getTime(),r},Hm=function(r,e,n){if(!r||typeof r!="object")return r;if(L(".sv"in r,"Unexpected leaf node or priority contents"),typeof r[".sv"]=="string")return PC(r[".sv"],e,n);if(typeof r[".sv"]=="object")return AC(r[".sv"],e);L(!1,"Unexpected server value: "+JSON.stringify(r,null,2))},PC=function(r,e,n){switch(r){case"timestamp":return n.timestamp;default:L(!1,"Unexpected server value: "+r)}},AC=function(r,e,n){r.hasOwnProperty("increment")||L(!1,"Unexpected server value: "+JSON.stringify(r,null,2));const s=r.increment;typeof s!="number"&&L(!1,"Unexpected increment value: "+s);const l=e.node();if(L(l!==null&&typeof l<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!l.isLeafNode())return s;const d=l.getValue();return typeof d!="number"?s:d+s},b_=function(r,e,n,s){return kd(e,new Td(n,r),s)},F_=function(r,e,n){return kd(r,new Cd(e),n)};function kd(r,e,n){const s=r.getPriority().val(),l=Hm(s,e.getImmediateChild(".priority"),n);let u;if(r.isLeafNode()){const d=r,f=Hm(d.getValue(),e,n);return f!==d.getValue()||l!==d.getPriority().val()?new qe(f,Ke(l)):r}else{const d=r;return u=d,l!==d.getPriority().val()&&(u=u.updatePriority(new qe(l))),d.forEachChild(Me,(f,p)=>{const g=kd(p,e.getImmediateChild(f),n);g!==p&&(u=u.updateImmediateChild(f,g))}),u}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Nd(r,e){let n=e instanceof ye?e:new ye(e),s=r,l=ne(n);for(;l!==null;){const u=gi(s.node.children,l)||{children:{},childCount:0};s=new Rd(l,s,u),n=Se(n),l=ne(n)}return s}function Ri(r){return r.node.value}function U_(r,e){r.node.value=e,jc(r)}function z_(r){return r.node.childCount>0}function OC(r){return Ri(r)===void 0&&!z_(r)}function $l(r,e){Ze(r.node.children,(n,s)=>{e(new Rd(n,r,s))})}function j_(r,e,n,s){n&&!s&&e(r),$l(r,l=>{j_(l,e,!0,s)}),n&&s&&e(r)}function xC(r,e,n){let s=r.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ws(r){return new ye(r.parent===null?r.name:Ws(r.parent)+"/"+r.name)}function jc(r){r.parent!==null&&DC(r.parent,r.name,r)}function DC(r,e,n){const s=OC(n),l=an(r.node.children,e);s&&l?(delete r.node.children[e],r.node.childCount--,jc(r)):!s&&!l&&(r.node.children[e]=n.node,r.node.childCount++,jc(r))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LC=/[\[\].#$\/\u0000-\u001F\u007F]/,MC=/[\[\].#$\u0000-\u001F\u007F]/,gc=10*1024*1024,Pd=function(r){return typeof r=="string"&&r.length!==0&&!LC.test(r)},W_=function(r){return typeof r=="string"&&r.length!==0&&!MC.test(r)},bC=function(r){return r&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),W_(r)},FC=function(r){return r===null||typeof r=="string"||typeof r=="number"&&!td(r)||r&&typeof r=="object"&&an(r,".sv")},UC=function(r,e,n,s){Hl(bl(r,"value"),e,n)},Hl=function(r,e,n){const s=n instanceof ye?new ZS(n,r):n;if(e===void 0)throw new Error(r+"contains undefined "+Er(s));if(typeof e=="function")throw new Error(r+"contains a function "+Er(s)+" with contents = "+e.toString());if(td(e))throw new Error(r+"contains "+e.toString()+" "+Er(s));if(typeof e=="string"&&e.length>gc/3&&Fl(e)>gc)throw new Error(r+"contains a string greater than "+gc+" utf8 bytes "+Er(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let l=!1,u=!1;if(Ze(e,(d,f)=>{if(d===".value")l=!0;else if(d!==".priority"&&d!==".sv"&&(u=!0,!Pd(d)))throw new Error(r+" contains an invalid key ("+d+") "+Er(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);eI(s,d),Hl(r,f,s),tI(s)}),l&&u)throw new Error(r+' contains ".value" child '+Er(s)+" in addition to actual children.")}},zC=function(r,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const u=Os(s);for(let d=0;d<u.length;d++)if(!(u[d]===".priority"&&d===u.length-1)){if(!Pd(u[d]))throw new Error(r+"contains an invalid key ("+u[d]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(JS);let l=null;for(n=0;n<e.length;n++){if(s=e[n],l!==null&&Mt(l,s))throw new Error(r+"contains a path "+l.toString()+" that is ancestor of another path "+s.toString());l=s}},jC=function(r,e,n,s){const l=bl(r,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(l+" must be an object containing the children to replace.");const u=[];Ze(e,(d,f)=>{const p=new ye(d);if(Hl(l,f,Le(n,p)),od(p)===".priority"&&!FC(f))throw new Error(l+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");u.push(p)}),zC(l,u)},B_=function(r,e,n,s){if(!W_(n))throw new Error(bl(r,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},WC=function(r,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),B_(r,e,n)},V_=function(r,e){if(ne(e)===".info")throw new Error(r+" failed = Can't modify data under /.info/")},BC=function(r,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Pd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!bC(n))throw new Error(bl(r,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ql(r,e){let n=null;for(let s=0;s<e.length;s++){const l=e[s],u=l.getPath();n!==null&&!ld(u,n.path)&&(r.eventLists_.push(n),n=null),n===null&&(n={events:[],path:u}),n.events.push(l)}n&&r.eventLists_.push(n)}function $_(r,e,n){ql(r,n),H_(r,s=>ld(s,e))}function Qt(r,e,n){ql(r,n),H_(r,s=>Mt(s,e)||Mt(e,s))}function H_(r,e){r.recursionDepth_++;let n=!0;for(let s=0;s<r.eventLists_.length;s++){const l=r.eventLists_[s];if(l){const u=l.path;e(u)?($C(r.eventLists_[s]),r.eventLists_[s]=null):n=!1}}n&&(r.eventLists_=[]),r.recursionDepth_--}function $C(r){for(let e=0;e<r.events.length;e++){const n=r.events[e];if(n!==null){r.events[e]=null;const s=n.getEventRunner();ws&&Je("event: "+n.toString()),Ti(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HC="repo_interrupt",qC=25;class GC{constructor(e,n,s,l){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=l,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new VC,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=vl(),this.transactionQueueTree_=new Rd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function KC(r,e,n){if(r.stats_=id(r.repoInfo_),r.forceRestClient_||IS())r.server_=new yl(r.repoInfo_,(s,l,u,d)=>{qm(r,s,l,u,d)},r.authTokenProvider_,r.appCheckProvider_),setTimeout(()=>Gm(r,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Qe(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}r.persistentConnection_=new Sn(r.repoInfo_,e,(s,l,u,d)=>{qm(r,s,l,u,d)},s=>{Gm(r,s)},s=>{YC(r,s)},r.authTokenProvider_,r.appCheckProvider_,n),r.server_=r.persistentConnection_}r.authTokenProvider_.addTokenChangeListener(s=>{r.server_.refreshAuthToken(s)}),r.appCheckProvider_.addTokenChangeListener(s=>{r.server_.refreshAppCheckToken(s.token)}),r.statsReporter_=NS(r.repoInfo_,()=>new RI(r.stats_,r.server_)),r.infoData_=new SI,r.infoSyncTree_=new Vm({startListening:(s,l,u,d)=>{let f=[];const p=r.infoData_.getNode(s._path);return p.isEmpty()||(f=Bl(r.infoSyncTree_,s._path,p),setTimeout(()=>{d("ok")},0)),f},stopListening:()=>{}}),Ad(r,"connected",!1),r.serverSyncTree_=new Vm({startListening:(s,l,u,d)=>(r.server_.listen(s,u,l,(f,p)=>{const g=d(f,p);Qt(r.eventQueue_,s._path,g)}),[]),stopListening:(s,l)=>{r.server_.unlisten(s,l)}})}function QC(r){const n=r.infoData_.getNode(new ye(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Gl(r){return NC({timestamp:QC(r)})}function qm(r,e,n,s,l){r.dataUpdateCount++;const u=new ye(e);n=r.interceptServerDataCallback_?r.interceptServerDataCallback_(e,n):n;let d=[];if(l)if(s){const p=fl(n,g=>Ke(g));d=IC(r.serverSyncTree_,u,p,l)}else{const p=Ke(n);d=SC(r.serverSyncTree_,u,p,l)}else if(s){const p=fl(n,g=>Ke(g));d=vC(r.serverSyncTree_,u,p)}else{const p=Ke(n);d=Bl(r.serverSyncTree_,u,p)}let f=u;d.length>0&&(f=Ei(r,u)),Qt(r.eventQueue_,f,d)}function Gm(r,e){Ad(r,"connected",e),e===!1&&ZC(r)}function YC(r,e){Ze(e,(n,s)=>{Ad(r,n,s)})}function Ad(r,e,n){const s=new ye("/.info/"+e),l=Ke(n);r.infoData_.updateSnapshot(s,l);const u=Bl(r.infoSyncTree_,s,l);Qt(r.eventQueue_,s,u)}function Od(r){return r.nextWriteId_++}function XC(r,e,n,s,l){Kl(r,"set",{path:e.toString(),value:n,priority:s});const u=Gl(r),d=Ke(n,s),f=wd(r.serverSyncTree_,e),p=F_(d,f,u),g=Od(r),w=x_(r.serverSyncTree_,e,p,g,!0);ql(r.eventQueue_,w),r.server_.put(e.toString(),d.val(!0),(S,R)=>{const x=S==="ok";x||lt("set at "+e+" failed: "+S);const M=Xn(r.serverSyncTree_,g,!x);Qt(r.eventQueue_,e,M),Wc(r,l,S,R)});const y=Dd(r,e);Ei(r,y),Qt(r.eventQueue_,y,[])}function JC(r,e,n,s){Kl(r,"update",{path:e.toString(),value:n});let l=!0;const u=Gl(r),d={};if(Ze(n,(f,p)=>{l=!1,d[f]=b_(Le(e,f),Ke(p),r.serverSyncTree_,u)}),l)Je("update() called with empty data.  Don't do anything."),Wc(r,s,"ok",void 0);else{const f=Od(r),p=yC(r.serverSyncTree_,e,d,f);ql(r.eventQueue_,p),r.server_.merge(e.toString(),n,(g,w)=>{const y=g==="ok";y||lt("update at "+e+" failed: "+g);const S=Xn(r.serverSyncTree_,f,!y),R=S.length>0?Ei(r,e):e;Qt(r.eventQueue_,R,S),Wc(r,s,g,w)}),Ze(n,g=>{const w=Dd(r,Le(e,g));Ei(r,w)}),Qt(r.eventQueue_,e,[])}}function ZC(r){Kl(r,"onDisconnectEvents");const e=Gl(r),n=vl();xc(r.onDisconnect_,pe(),(l,u)=>{const d=b_(l,u,r.serverSyncTree_,e);v_(n,l,d)});let s=[];xc(n,pe(),(l,u)=>{s=s.concat(Bl(r.serverSyncTree_,l,u));const d=Dd(r,l);Ei(r,d)}),r.onDisconnect_=vl(),Qt(r.eventQueue_,pe(),s)}function eT(r,e,n){let s;ne(e._path)===".info"?s=$m(r.infoSyncTree_,e,n):s=$m(r.serverSyncTree_,e,n),$_(r.eventQueue_,e._path,s)}function tT(r,e,n){let s;ne(e._path)===".info"?s=zc(r.infoSyncTree_,e,n):s=zc(r.serverSyncTree_,e,n),$_(r.eventQueue_,e._path,s)}function nT(r){r.persistentConnection_&&r.persistentConnection_.interrupt(HC)}function Kl(r,...e){let n="";r.persistentConnection_&&(n=r.persistentConnection_.id+":"),Je(n,...e)}function Wc(r,e,n,s){e&&Ti(()=>{if(n==="ok")e(null);else{const l=(n||"error").toUpperCase();let u=l;s&&(u+=": "+s);const d=new Error(u);d.code=l,e(d)}})}function q_(r,e,n){return wd(r.serverSyncTree_,e,n)||K.EMPTY_NODE}function xd(r,e=r.transactionQueueTree_){if(e||Ql(r,e),Ri(e)){const n=K_(r,e);L(n.length>0,"Sending zero length transaction queue"),n.every(l=>l.status===0)&&rT(r,Ws(e),n)}else z_(e)&&$l(e,n=>{xd(r,n)})}function rT(r,e,n){const s=n.map(g=>g.currentWriteId),l=q_(r,e,s);let u=l;const d=l.hash();for(let g=0;g<n.length;g++){const w=n[g];L(w.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),w.status=1,w.retryCount++;const y=_t(e,w.path);u=u.updateChild(y,w.currentOutputSnapshotRaw)}const f=u.val(!0),p=e;r.server_.put(p.toString(),f,g=>{Kl(r,"transaction put response",{path:p.toString(),status:g});let w=[];if(g==="ok"){const y=[];for(let S=0;S<n.length;S++)n[S].status=2,w=w.concat(Xn(r.serverSyncTree_,n[S].currentWriteId)),n[S].onComplete&&y.push(()=>n[S].onComplete(null,!0,n[S].currentOutputSnapshotResolved)),n[S].unwatcher();Ql(r,Nd(r.transactionQueueTree_,e)),xd(r,r.transactionQueueTree_),Qt(r.eventQueue_,e,w);for(let S=0;S<y.length;S++)Ti(y[S])}else{if(g==="datastale")for(let y=0;y<n.length;y++)n[y].status===3?n[y].status=4:n[y].status=0;else{lt("transaction at "+p.toString()+" failed: "+g);for(let y=0;y<n.length;y++)n[y].status=4,n[y].abortReason=g}Ei(r,e)}},d)}function Ei(r,e){const n=G_(r,e),s=Ws(n),l=K_(r,n);return iT(r,l,s),s}function iT(r,e,n){if(e.length===0)return;const s=[];let l=[];const d=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const p=e[f],g=_t(n,p.path);let w=!1,y;if(L(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)w=!0,y=p.abortReason,l=l.concat(Xn(r.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=qC)w=!0,y="maxretry",l=l.concat(Xn(r.serverSyncTree_,p.currentWriteId,!0));else{const S=q_(r,p.path,d);p.currentInputSnapshot=S;const R=e[f].update(S.val());if(R!==void 0){Hl("transaction failed: Data returned ",R,p.path);let x=Ke(R);typeof R=="object"&&R!=null&&an(R,".priority")||(x=x.updatePriority(S.getPriority()));const b=p.currentWriteId,ae=Gl(r),ke=F_(x,S,ae);p.currentOutputSnapshotRaw=x,p.currentOutputSnapshotResolved=ke,p.currentWriteId=Od(r),d.splice(d.indexOf(b),1),l=l.concat(x_(r.serverSyncTree_,p.path,ke,p.currentWriteId,p.applyLocally)),l=l.concat(Xn(r.serverSyncTree_,b,!0))}else w=!0,y="nodata",l=l.concat(Xn(r.serverSyncTree_,p.currentWriteId,!0))}Qt(r.eventQueue_,n,l),l=[],w&&(e[f].status=2,function(S){setTimeout(S,Math.floor(0))}(e[f].unwatcher),e[f].onComplete&&(y==="nodata"?s.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):s.push(()=>e[f].onComplete(new Error(y),!1,null))))}Ql(r,r.transactionQueueTree_);for(let f=0;f<s.length;f++)Ti(s[f]);xd(r,r.transactionQueueTree_)}function G_(r,e){let n,s=r.transactionQueueTree_;for(n=ne(e);n!==null&&Ri(s)===void 0;)s=Nd(s,n),e=Se(e),n=ne(e);return s}function K_(r,e){const n=[];return Q_(r,e,n),n.sort((s,l)=>s.order-l.order),n}function Q_(r,e,n){const s=Ri(e);if(s)for(let l=0;l<s.length;l++)n.push(s[l]);$l(e,l=>{Q_(r,l,n)})}function Ql(r,e){const n=Ri(e);if(n){let s=0;for(let l=0;l<n.length;l++)n[l].status!==2&&(n[s]=n[l],s++);n.length=s,U_(e,n.length>0?n:void 0)}$l(e,s=>{Ql(r,s)})}function Dd(r,e){const n=Ws(G_(r,e)),s=Nd(r.transactionQueueTree_,e);return xC(s,l=>{_c(r,l)}),_c(r,s),j_(s,l=>{_c(r,l)}),n}function _c(r,e){const n=Ri(e);if(n){const s=[];let l=[],u=-1;for(let d=0;d<n.length;d++)n[d].status===3||(n[d].status===1?(L(u===d-1,"All SENT items should be at beginning of queue."),u=d,n[d].status=3,n[d].abortReason="set"):(L(n[d].status===0,"Unexpected transaction status in abort"),n[d].unwatcher(),l=l.concat(Xn(r.serverSyncTree_,n[d].currentWriteId,!0)),n[d].onComplete&&s.push(n[d].onComplete.bind(null,new Error("set"),!1,null))));u===-1?U_(e,void 0):n.length=u+1,Qt(r.eventQueue_,Ws(e),l);for(let d=0;d<s.length;d++)Ti(s[d])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sT(r){let e="";const n=r.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let l=n[s];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch{}e+="/"+l}return e}function oT(r){const e={};r.charAt(0)==="?"&&(r=r.substring(1));for(const n of r.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):lt(`Invalid query segment '${n}' in query '${r}'`)}return e}const Km=function(r,e){const n=lT(r),s=n.namespace;n.domain==="firebase.com"&&Cn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Cn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||pS();const l=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new n_(n.host,n.secure,s,l,e,"",s!==n.subdomain),path:new ye(n.pathString)}},lT=function(r){let e="",n="",s="",l="",u="",d=!0,f="https",p=443;if(typeof r=="string"){let g=r.indexOf("//");g>=0&&(f=r.substring(0,g-1),r=r.substring(g+2));let w=r.indexOf("/");w===-1&&(w=r.length);let y=r.indexOf("?");y===-1&&(y=r.length),e=r.substring(0,Math.min(w,y)),w<y&&(l=sT(r.substring(w,y)));const S=oT(r.substring(Math.min(r.length,y)));g=e.indexOf(":"),g>=0?(d=f==="https"||f==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const R=e.slice(0,g);if(R.toLowerCase()==="localhost")n="localhost";else if(R.split(".").length<=2)n=R;else{const x=e.indexOf(".");s=e.substring(0,x).toLowerCase(),n=e.substring(x+1),u=s}"ns"in S&&(u=S.ns)}return{host:e,port:p,domain:n,subdomain:s,secure:d,scheme:f,pathString:l,namespace:u}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(e,n,s,l){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=l}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Qe(this.snapshot.exportVal())}}class uT{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return L(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e,n,s,l){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=l}get key(){return oe(this._path)?null:od(this._path)}get ref(){return new sr(this._repo,this._path)}get _queryIdentifier(){const e=Dm(this._queryParams),n=nd(e);return n==="{}"?"default":n}get _queryObject(){return Dm(this._queryParams)}isEqual(e){if(e=Rt(e),!(e instanceof Ld))return!1;const n=this._repo===e._repo,s=ld(this._path,e._path),l=this._queryIdentifier===e._queryIdentifier;return n&&s&&l}toJSON(){return this.toString()}toString(){return this._repo.toString()+XS(this._path)}}class sr extends Ld{constructor(e,n){super(e,n,new dd,!1)}get parent(){const e=d_(this._path);return e===null?null:new sr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Rl{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ye(e),s=Bc(this.ref,e);return new Rl(this._node.getChild(n),s,Me)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,l)=>e(new Rl(l,Bc(this.ref,s),Me)))}hasChild(e){const n=new ye(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Yl(r,e){return r=Rt(r),r._checkNotDeleted("ref"),e!==void 0?Bc(r._root,e):r._root}function Bc(r,e){return r=Rt(r),ne(r._path)===null?WC("child","path",e):B_("child","path",e),new sr(r._repo,Le(r._path,e))}function dT(r){return V_("remove",r._path),Y_(r,null)}function Y_(r,e){r=Rt(r),V_("set",r._path),UC("set",e,r._path);const n=new Fs;return XC(r._repo,r._path,e,null,n.wrapCallback(()=>{})),n.promise}function hT(r,e){jC("update",e,r._path);const n=new Fs;return JC(r._repo,r._path,e,n.wrapCallback(()=>{})),n.promise}class Md{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new aT("value",this,new Rl(e.snapshotNode,new sr(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new uT(this,e,n):null}matches(e){return e instanceof Md?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function fT(r,e,n,s,l){const u=new cT(n,void 0),d=new Md(u);return eT(r._repo,r,d),()=>tT(r._repo,r,d)}function pT(r,e,n,s){return fT(r,"value",e)}uC(sr);mC(sr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT="FIREBASE_DATABASE_EMULATOR_HOST",Vc={};let gT=!1;function _T(r,e,n,s){r.repoInfo_=new n_(`${e}:${n}`,!1,r.repoInfo_.namespace,r.repoInfo_.webSocketOnly,r.repoInfo_.nodeAdmin,r.repoInfo_.persistenceKey,r.repoInfo_.includeNamespaceInQueryParams,!0),s&&(r.authTokenProvider_=s)}function yT(r,e,n,s,l){let u=s||r.options.databaseURL;u===void 0&&(r.options.projectId||Cn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Je("Using default host for project ",r.options.projectId),u=`${r.options.projectId}-default-rtdb.firebaseio.com`);let d=Km(u,l),f=d.repoInfo,p;typeof process<"u"&&mm&&(p=mm[mT]),p?(u=`http://${p}?ns=${f.namespace}`,d=Km(u,l),f=d.repoInfo):d.repoInfo.secure;const g=new TS(r.name,r.options,e);BC("Invalid Firebase Database URL",d),oe(d.path)||Cn("Database URL must point to the root of a Firebase Database (not including a child path).");const w=wT(f,r,g,new CS(r.name,n));return new ET(w,r)}function vT(r,e){const n=Vc[e];(!n||n[r.key]!==r)&&Cn(`Database ${e}(${r.repoInfo_}) has already been deleted.`),nT(r),delete n[r.key]}function wT(r,e,n,s){let l=Vc[e.name];l||(l={},Vc[e.name]=l);let u=l[r.toURLString()];return u&&Cn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),u=new GC(r,gT,n,s),l[r.toURLString()]=u,u}class ET{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(KC(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new sr(this._repo,pe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(vT(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Cn("Cannot call "+e+" on a deleted database.")}}function ST(r=ed(),e){const n=xr(r,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=F0("database");s&&IT(n,...s)}return n}function IT(r,e,n,s={}){r=Rt(r),r._checkNotDeleted("useEmulator"),r._instanceStarted&&Cn("Cannot call useEmulator() after instance has already been initialized.");const l=r._repoInternal;let u;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&Cn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new ol(ol.OWNER);else if(s.mockUserToken){const d=typeof s.mockUserToken=="string"?s.mockUserToken:U0(s.mockUserToken,r.app.options.projectId);u=new ol(d)}_T(l,e,n,u)}/**
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
 */function CT(r){aS(Ci),on(new Kt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("auth-internal"),u=e.getProvider("app-check-internal");return yT(s,l,u,n)},"PUBLIC").setMultipleInstances(!0)),bt(gm,_m,r),bt(gm,_m,"esm2017")}Sn.prototype.simpleListen=function(r,e){this.sendRequest("q",{p:r},e)};Sn.prototype.echo=function(r,e){this.sendRequest("echo",{d:r},e)};CT();var TT="firebase",kT="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bt(TT,kT,"app");const X_="@firebase/installations",bd="0.6.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_=1e4,Z_=`w:${bd}`,ey="FIS_v2",RT="https://firebaseinstallations.googleapis.com/v1",NT=60*60*1e3,PT="installations",AT="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Nr=new Or(PT,AT,OT);function ty(r){return r instanceof ln&&r.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ny({projectId:r}){return`${RT}/projects/${r}/installations`}function ry(r){return{token:r.token,requestStatus:2,expiresIn:DT(r.expiresIn),creationTime:Date.now()}}async function iy(r,e){const s=(await e.json()).error;return Nr.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function sy({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function xT(r,{refreshToken:e}){const n=sy(r);return n.append("Authorization",LT(e)),n}async function oy(r){const e=await r();return e.status>=500&&e.status<600?r():e}function DT(r){return Number(r.replace("s","000"))}function LT(r){return`${ey} ${r}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MT({appConfig:r,heartbeatServiceProvider:e},{fid:n}){const s=ny(r),l=sy(r),u=e.getImmediate({optional:!0});if(u){const g=await u.getHeartbeatsHeader();g&&l.append("x-firebase-client",g)}const d={fid:n,authVersion:ey,appId:r.appId,sdkVersion:Z_},f={method:"POST",headers:l,body:JSON.stringify(d)},p=await oy(()=>fetch(s,f));if(p.ok){const g=await p.json();return{fid:g.fid||n,registrationStatus:2,refreshToken:g.refreshToken,authToken:ry(g.authToken)}}else throw await iy("Create Installation",p)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ly(r){return new Promise(e=>{setTimeout(e,r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bT(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT=/^[cdef][\w-]{21}$/,$c="";function UT(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=zT(r);return FT.test(n)?n:$c}catch{return $c}}function zT(r){return bT(r).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(r){return`${r.appName}!${r.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=new Map;function uy(r,e){const n=Xl(r);cy(n,e),jT(n,e)}function cy(r,e){const n=ay.get(r);if(n)for(const s of n)s(e)}function jT(r,e){const n=WT();n&&n.postMessage({key:r,fid:e}),BT()}let Ir=null;function WT(){return!Ir&&"BroadcastChannel"in self&&(Ir=new BroadcastChannel("[Firebase] FID Change"),Ir.onmessage=r=>{cy(r.data.key,r.data.fid)}),Ir}function BT(){ay.size===0&&Ir&&(Ir.close(),Ir=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT="firebase-installations-database",$T=1,Pr="firebase-installations-store";let yc=null;function Fd(){return yc||(yc=Ug(VT,$T,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(Pr)}}})),yc}async function Nl(r,e){const n=Xl(r),l=(await Fd()).transaction(Pr,"readwrite"),u=l.objectStore(Pr),d=await u.get(n);return await u.put(e,n),await l.done,(!d||d.fid!==e.fid)&&uy(r,e.fid),e}async function dy(r){const e=Xl(r),s=(await Fd()).transaction(Pr,"readwrite");await s.objectStore(Pr).delete(e),await s.done}async function Jl(r,e){const n=Xl(r),l=(await Fd()).transaction(Pr,"readwrite"),u=l.objectStore(Pr),d=await u.get(n),f=e(d);return f===void 0?await u.delete(n):await u.put(f,n),await l.done,f&&(!d||d.fid!==f.fid)&&uy(r,f.fid),f}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ud(r){let e;const n=await Jl(r.appConfig,s=>{const l=HT(s),u=qT(r,l);return e=u.registrationPromise,u.installationEntry});return n.fid===$c?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function HT(r){const e=r||{fid:UT(),registrationStatus:0};return hy(e)}function qT(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const l=Promise.reject(Nr.create("app-offline"));return{installationEntry:e,registrationPromise:l}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=GT(r,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:KT(r)}:{installationEntry:e}}async function GT(r,e){try{const n=await MT(r,e);return Nl(r.appConfig,n)}catch(n){throw ty(n)&&n.customData.serverCode===409?await dy(r.appConfig):await Nl(r.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function KT(r){let e=await Qm(r.appConfig);for(;e.registrationStatus===1;)await ly(100),e=await Qm(r.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Ud(r);return s||n}return e}function Qm(r){return Jl(r,e=>{if(!e)throw Nr.create("installation-not-found");return hy(e)})}function hy(r){return QT(r)?{fid:r.fid,registrationStatus:0}:r}function QT(r){return r.registrationStatus===1&&r.registrationTime+J_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YT({appConfig:r,heartbeatServiceProvider:e},n){const s=XT(r,n),l=xT(r,n),u=e.getImmediate({optional:!0});if(u){const g=await u.getHeartbeatsHeader();g&&l.append("x-firebase-client",g)}const d={installation:{sdkVersion:Z_,appId:r.appId}},f={method:"POST",headers:l,body:JSON.stringify(d)},p=await oy(()=>fetch(s,f));if(p.ok){const g=await p.json();return ry(g)}else throw await iy("Generate Auth Token",p)}function XT(r,{fid:e}){return`${ny(r)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zd(r,e=!1){let n;const s=await Jl(r.appConfig,u=>{if(!fy(u))throw Nr.create("not-registered");const d=u.authToken;if(!e&&ek(d))return u;if(d.requestStatus===1)return n=JT(r,e),u;{if(!navigator.onLine)throw Nr.create("app-offline");const f=nk(u);return n=ZT(r,f),f}});return n?await n:s.authToken}async function JT(r,e){let n=await Ym(r.appConfig);for(;n.authToken.requestStatus===1;)await ly(100),n=await Ym(r.appConfig);const s=n.authToken;return s.requestStatus===0?zd(r,e):s}function Ym(r){return Jl(r,e=>{if(!fy(e))throw Nr.create("not-registered");const n=e.authToken;return rk(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function ZT(r,e){try{const n=await YT(r,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Nl(r.appConfig,s),n}catch(n){if(ty(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await dy(r.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Nl(r.appConfig,s)}throw n}}function fy(r){return r!==void 0&&r.registrationStatus===2}function ek(r){return r.requestStatus===2&&!tk(r)}function tk(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+NT}function nk(r){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:e})}function rk(r){return r.requestStatus===1&&r.requestTime+J_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ik(r){const e=r,{installationEntry:n,registrationPromise:s}=await Ud(e);return s?s.catch(console.error):zd(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sk(r,e=!1){const n=r;return await ok(n),(await zd(n,e)).token}async function ok(r){const{registrationPromise:e}=await Ud(r);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lk(r){if(!r||!r.options)throw vc("App Configuration");if(!r.name)throw vc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!r.options[n])throw vc(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function vc(r){return Nr.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py="installations",ak="installations-internal",uk=r=>{const e=r.getProvider("app").getImmediate(),n=lk(e),s=xr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},ck=r=>{const e=r.getProvider("app").getImmediate(),n=xr(e,py).getImmediate();return{getId:()=>ik(n),getToken:l=>sk(n,l)}};function dk(){on(new Kt(py,uk,"PUBLIC")),on(new Kt(ak,ck,"PRIVATE"))}dk();bt(X_,bd);bt(X_,bd,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl="analytics",hk="firebase_id",fk="origin",pk=60*1e3,mk="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",jd="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=new Ul("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gk={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},kt=new Or("analytics","Analytics",gk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _k(r){if(!r.startsWith(jd)){const e=kt.create("invalid-gtag-resource",{gtagURL:r});return vt.warn(e.message),""}return r}function my(r){return Promise.all(r.map(e=>e.catch(n=>n)))}function yk(r,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,e)),n}function vk(r,e){const n=yk("firebase-js-sdk-policy",{createScriptURL:_k}),s=document.createElement("script"),l=`${jd}?l=${r}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(l):l,s.async=!0,document.head.appendChild(s)}function wk(r){let e=[];return Array.isArray(window[r])?e=window[r]:window[r]=e,e}async function Ek(r,e,n,s,l,u){const d=s[l];try{if(d)await e[d];else{const p=(await my(n)).find(g=>g.measurementId===l);p&&await e[p.appId]}}catch(f){vt.error(f)}r("config",l,u)}async function Sk(r,e,n,s,l){try{let u=[];if(l&&l.send_to){let d=l.send_to;Array.isArray(d)||(d=[d]);const f=await my(n);for(const p of d){const g=f.find(y=>y.measurementId===p),w=g&&e[g.appId];if(w)u.push(w);else{u=[];break}}}u.length===0&&(u=Object.values(e)),await Promise.all(u),r("event",s,l||{})}catch(u){vt.error(u)}}function Ik(r,e,n,s){async function l(u,...d){try{if(u==="event"){const[f,p]=d;await Sk(r,e,n,f,p)}else if(u==="config"){const[f,p]=d;await Ek(r,e,n,s,f,p)}else if(u==="consent"){const[f,p]=d;r("consent",f,p)}else if(u==="get"){const[f,p,g]=d;r("get",f,p,g)}else if(u==="set"){const[f]=d;r("set",f)}else r(u,...d)}catch(f){vt.error(f)}}return l}function Ck(r,e,n,s,l){let u=function(...d){window[s].push(arguments)};return window[l]&&typeof window[l]=="function"&&(u=window[l]),window[l]=Ik(u,r,e,n),{gtagCore:u,wrappedGtag:window[l]}}function Tk(r){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(jd)&&n.src.includes(r))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kk=30,Rk=1e3;class Nk{constructor(e={},n=Rk){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const gy=new Nk;function Pk(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function Ak(r){var e;const{appId:n,apiKey:s}=r,l={method:"GET",headers:Pk(s)},u=mk.replace("{app-id}",n),d=await fetch(u,l);if(d.status!==200&&d.status!==304){let f="";try{const p=await d.json();!((e=p.error)===null||e===void 0)&&e.message&&(f=p.error.message)}catch{}throw kt.create("config-fetch-failed",{httpStatus:d.status,responseMessage:f})}return d.json()}async function Ok(r,e=gy,n){const{appId:s,apiKey:l,measurementId:u}=r.options;if(!s)throw kt.create("no-app-id");if(!l){if(u)return{measurementId:u,appId:s};throw kt.create("no-api-key")}const d=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},f=new Lk;return setTimeout(async()=>{f.abort()},pk),_y({appId:s,apiKey:l,measurementId:u},d,f,e)}async function _y(r,{throttleEndTimeMillis:e,backoffCount:n},s,l=gy){var u;const{appId:d,measurementId:f}=r;try{await xk(s,e)}catch(p){if(f)return vt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:d,measurementId:f};throw p}try{const p=await Ak(r);return l.deleteThrottleMetadata(d),p}catch(p){const g=p;if(!Dk(g)){if(l.deleteThrottleMetadata(d),f)return vt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:d,measurementId:f};throw p}const w=Number((u=g==null?void 0:g.customData)===null||u===void 0?void 0:u.httpStatus)===503?om(n,l.intervalMillis,kk):om(n,l.intervalMillis),y={throttleEndTimeMillis:Date.now()+w,backoffCount:n+1};return l.setThrottleMetadata(d,y),vt.debug(`Calling attemptFetch again in ${w} millis`),_y(r,y,s,l)}}function xk(r,e){return new Promise((n,s)=>{const l=Math.max(e-Date.now(),0),u=setTimeout(n,l);r.addEventListener(()=>{clearTimeout(u),s(kt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Dk(r){if(!(r instanceof ln)||!r.customData)return!1;const e=Number(r.customData.httpStatus);return e===429||e===500||e===503||e===504}class Lk{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Mk(r,e,n,s,l){if(l&&l.global){r("event",n,s);return}else{const u=await e,d=Object.assign(Object.assign({},s),{send_to:u});r("event",n,d)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bk(){if(Dg())try{await Lg()}catch(r){return vt.warn(kt.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return vt.warn(kt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Fk(r,e,n,s,l,u,d){var f;const p=Ok(r);p.then(R=>{n[R.measurementId]=R.appId,r.options.measurementId&&R.measurementId!==r.options.measurementId&&vt.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${R.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(R=>vt.error(R)),e.push(p);const g=bk().then(R=>{if(R)return s.getId()}),[w,y]=await Promise.all([p,g]);Tk(u)||vk(u,w.measurementId),l("js",new Date);const S=(f=d==null?void 0:d.config)!==null&&f!==void 0?f:{};return S[fk]="firebase",S.update=!0,y!=null&&(S[hk]=y),l("config",w.measurementId,S),w.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(e){this.app=e}_delete(){return delete Ts[this.app.options.appId],Promise.resolve()}}let Ts={},Xm=[];const Jm={};let wc="dataLayer",zk="gtag",Zm,yy,eg=!1;function jk(){const r=[];if(Ag()&&r.push("This is a browser extension environment."),W0()||r.push("Cookies are not available."),r.length>0){const e=r.map((s,l)=>`(${l+1}) ${s}`).join(" "),n=kt.create("invalid-analytics-context",{errorInfo:e});vt.warn(n.message)}}function Wk(r,e,n){jk();const s=r.options.appId;if(!s)throw kt.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)vt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw kt.create("no-api-key");if(Ts[s]!=null)throw kt.create("already-exists",{id:s});if(!eg){wk(wc);const{wrappedGtag:u,gtagCore:d}=Ck(Ts,Xm,Jm,wc,zk);yy=u,Zm=d,eg=!0}return Ts[s]=Fk(r,Xm,Jm,e,Zm,wc,n),new Uk(r)}function Bk(r=ed()){r=Rt(r);const e=xr(r,Pl);return e.isInitialized()?e.getImmediate():Vk(r)}function Vk(r,e={}){const n=xr(r,Pl);if(n.isInitialized()){const l=n.getImmediate();if(Ns(e,n.getOptions()))return l;throw kt.create("already-initialized")}return n.initialize({options:e})}function $k(r,e,n,s){r=Rt(r),Mk(yy,Ts[r.app.options.appId],e,n,s).catch(l=>vt.error(l))}const tg="@firebase/analytics",ng="0.10.10";function Hk(){on(new Kt(Pl,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("installations-internal").getImmediate();return Wk(s,l,n)},"PUBLIC")),on(new Kt("analytics-internal",r,"PRIVATE")),bt(tg,ng),bt(tg,ng,"esm2017");function r(e){try{const n=e.getProvider(Pl).getImmediate();return{logEvent:(s,l,u)=>$k(n,s,l,u)}}catch(n){throw kt.create("interop-component-reg-failed",{reason:n})}}}Hk();function Wd(r,e){var n={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(n[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(r);l<s.length;l++)e.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(r,s[l])&&(n[s[l]]=r[s[l]]);return n}function vy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qk=vy,wy=new Or("auth","Firebase",vy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al=new Ul("@firebase/auth");function Gk(r,...e){Al.logLevel<=_e.WARN&&Al.warn(`Auth (${Ci}): ${r}`,...e)}function ll(r,...e){Al.logLevel<=_e.ERROR&&Al.error(`Auth (${Ci}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(r,...e){throw Bd(r,...e)}function rn(r,...e){return Bd(r,...e)}function Ey(r,e,n){const s=Object.assign(Object.assign({},qk()),{[e]:n});return new Or("auth","Firebase",s).create(e,{appName:r.name})}function tr(r){return Ey(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Bd(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return wy.create(r,...e)}function Y(r,e,...n){if(!r)throw Bd(e,...n)}function vn(r){const e="INTERNAL ASSERTION FAILED: "+r;throw ll(e),new Error(e)}function kn(r,e){r||vn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hc(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function Kk(){return rg()==="http:"||rg()==="https:"}function rg(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Kk()||Ag()||"connection"in navigator)?navigator.onLine:!0}function Yk(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,n){this.shortDelay=e,this.longDelay=n,kn(n>e,"Short delay should be less than long delay!"),this.isMobile=Jc()||Og()}get(){return Qk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(r,e){kn(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk=new Bs(3e4,6e4);function Zl(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Ni(r,e,n,s,l={}){return Iy(r,l,async()=>{let u={},d={};s&&(e==="GET"?d=s:u={body:JSON.stringify(s)});const f=Ii(Object.assign({key:r.config.apiKey},d)).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const g=Object.assign({method:e,headers:p},u);return z0()||(g.referrerPolicy="no-referrer"),Sy.fetch()(Ty(r,r.config.apiHost,n,f),g)})}async function Iy(r,e,n){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},Xk),e);try{const l=new Zk(r),u=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const d=await u.json();if("needConfirmation"in d)throw sl(r,"account-exists-with-different-credential",d);if(u.ok&&!("errorMessage"in d))return d;{const f=u.ok?d.errorMessage:d.error.message,[p,g]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw sl(r,"credential-already-in-use",d);if(p==="EMAIL_EXISTS")throw sl(r,"email-already-in-use",d);if(p==="USER_DISABLED")throw sl(r,"user-disabled",d);const w=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw Ey(r,w,g);Tn(r,w)}}catch(l){if(l instanceof ln)throw l;Tn(r,"network-request-failed",{message:String(l)})}}async function Cy(r,e,n,s,l={}){const u=await Ni(r,e,n,s,l);return"mfaPendingCredential"in u&&Tn(r,"multi-factor-auth-required",{_serverResponse:u}),u}function Ty(r,e,n,s){const l=`${e}${n}?${s}`;return r.config.emulator?Vd(r.config,l):`${r.config.apiScheme}://${l}`}class Zk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(rn(this.auth,"network-request-failed")),Jk.get())})}}function sl(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const l=rn(r,e,s);return l.customData._tokenResponse=n,l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e1(r,e){return Ni(r,"POST","/v1/accounts:delete",e)}async function ky(r,e){return Ni(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function t1(r,e=!1){const n=Rt(r),s=await n.getIdToken(e),l=$d(s);Y(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const u=typeof l.firebase=="object"?l.firebase:void 0,d=u==null?void 0:u.sign_in_provider;return{claims:l,token:s,authTime:ks(Ec(l.auth_time)),issuedAtTime:ks(Ec(l.iat)),expirationTime:ks(Ec(l.exp)),signInProvider:d||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Ec(r){return Number(r)*1e3}function $d(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return ll("JWT malformed, contained fewer than 3 sections"),null;try{const l=hl(n);return l?JSON.parse(l):(ll("Failed to decode base64 JWT payload"),null)}catch(l){return ll("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function ig(r){const e=$d(r);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bs(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof ln&&n1(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function n1({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const l=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,l)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ks(this.lastLoginAt),this.creationTime=ks(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ol(r){var e;const n=r.auth,s=await r.getIdToken(),l=await bs(r,ky(n,{idToken:s}));Y(l==null?void 0:l.users.length,n,"internal-error");const u=l.users[0];r._notifyReloadListener(u);const d=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?Ry(u.providerUserInfo):[],f=s1(r.providerData,d),p=r.isAnonymous,g=!(r.email&&u.passwordHash)&&!(f!=null&&f.length),w=p?g:!1,y={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:f,metadata:new qc(u.createdAt,u.lastLoginAt),isAnonymous:w};Object.assign(r,y)}async function i1(r){const e=Rt(r);await Ol(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function s1(r,e){return[...r.filter(s=>!e.some(l=>l.providerId===s.providerId)),...e]}function Ry(r){return r.map(e=>{var{providerId:n}=e,s=Wd(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o1(r,e){const n=await Iy(r,{},async()=>{const s=Ii({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:u}=r.config,d=Ty(r,l,"/v1/token",`key=${u}`),f=await r._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",Sy.fetch()(d,{method:"POST",headers:f,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function l1(r,e){return Ni(r,"POST","/v2/accounts:revokeToken",Zl(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ig(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const n=ig(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:l,expiresIn:u}=await o1(e,n);this.updateTokensAndExpiration(s,l,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:l,expirationTime:u}=n,d=new fi;return s&&(Y(typeof s=="string","internal-error",{appName:e}),d.refreshToken=s),l&&(Y(typeof l=="string","internal-error",{appName:e}),d.accessToken=l),u&&(Y(typeof u=="number","internal-error",{appName:e}),d.expirationTime=u),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fi,this.toJSON())}_performRefresh(){return vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(r,e){Y(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class wn{constructor(e){var{uid:n,auth:s,stsTokenManager:l}=e,u=Wd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new r1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=l,this.accessToken=l.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new qc(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const n=await bs(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return t1(this,e)}reload(){return i1(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new wn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ol(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_n(this.auth.app))return Promise.reject(tr(this.auth));const e=await this.getIdToken();return await bs(this,e1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,l,u,d,f,p,g,w;const y=(s=n.displayName)!==null&&s!==void 0?s:void 0,S=(l=n.email)!==null&&l!==void 0?l:void 0,R=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,x=(d=n.photoURL)!==null&&d!==void 0?d:void 0,M=(f=n.tenantId)!==null&&f!==void 0?f:void 0,b=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,ae=(g=n.createdAt)!==null&&g!==void 0?g:void 0,ke=(w=n.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:X,emailVerified:J,isAnonymous:be,providerData:ie,stsTokenManager:Z}=n;Y(X&&Z,e,"internal-error");const le=fi.fromJSON(this.name,Z);Y(typeof X=="string",e,"internal-error"),qn(y,e.name),qn(S,e.name),Y(typeof J=="boolean",e,"internal-error"),Y(typeof be=="boolean",e,"internal-error"),qn(R,e.name),qn(x,e.name),qn(M,e.name),qn(b,e.name),qn(ae,e.name),qn(ke,e.name);const Be=new wn({uid:X,auth:e,email:S,emailVerified:J,displayName:y,isAnonymous:be,photoURL:x,phoneNumber:R,tenantId:M,stsTokenManager:le,createdAt:ae,lastLoginAt:ke});return ie&&Array.isArray(ie)&&(Be.providerData=ie.map(it=>Object.assign({},it))),b&&(Be._redirectEventId=b),Be}static async _fromIdTokenResponse(e,n,s=!1){const l=new fi;l.updateFromServerResponse(n);const u=new wn({uid:n.localId,auth:e,stsTokenManager:l,isAnonymous:s});return await Ol(u),u}static async _fromGetAccountInfoResponse(e,n,s){const l=n.users[0];Y(l.localId!==void 0,"internal-error");const u=l.providerUserInfo!==void 0?Ry(l.providerUserInfo):[],d=!(l.email&&l.passwordHash)&&!(u!=null&&u.length),f=new fi;f.updateFromIdToken(s);const p=new wn({uid:l.localId,auth:e,stsTokenManager:f,isAnonymous:d}),g={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:u,metadata:new qc(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(u!=null&&u.length)};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg=new Map;function En(r){kn(r instanceof Function,"Expected a class definition");let e=sg.get(r);return e?(kn(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,sg.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ny.type="NONE";const og=Ny;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(r,e,n){return`firebase:${r}:${e}:${n}`}class pi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:l,name:u}=this.auth;this.fullUserKey=al(this.userKey,l.apiKey,u),this.fullPersistenceKey=al("persistence",l.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?wn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new pi(En(og),e,s);const l=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=l[0]||En(og);const d=al(s,e.config.apiKey,e.name);let f=null;for(const g of n)try{const w=await g._get(d);if(w){const y=wn._fromJSON(e,w);g!==u&&(f=y),u=g;break}}catch{}const p=l.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new pi(u,e,s):(u=p[0],f&&await u._set(d,f.toJSON()),await Promise.all(n.map(async g=>{if(g!==u)try{await g._remove(d)}catch{}})),new pi(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(xy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Py(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ly(e))return"Blackberry";if(My(e))return"Webos";if(Ay(e))return"Safari";if((e.includes("chrome/")||Oy(e))&&!e.includes("edge/"))return"Chrome";if(Dy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Py(r=at()){return/firefox\//i.test(r)}function Ay(r=at()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Oy(r=at()){return/crios\//i.test(r)}function xy(r=at()){return/iemobile/i.test(r)}function Dy(r=at()){return/android/i.test(r)}function Ly(r=at()){return/blackberry/i.test(r)}function My(r=at()){return/webos/i.test(r)}function Hd(r=at()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function a1(r=at()){var e;return Hd(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function u1(){return j0()&&document.documentMode===10}function by(r=at()){return Hd(r)||Dy(r)||My(r)||Ly(r)||/windows phone/i.test(r)||xy(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fy(r,e=[]){let n;switch(r){case"Browser":n=lg(at());break;case"Worker":n=`${lg(at())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ci}/${s}`}/**
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
 */class c1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=u=>new Promise((d,f)=>{try{const p=e(u);d(p)}catch(p){f(p)}});s.onAbort=n,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const l of n)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function d1(r,e={}){return Ni(r,"GET","/v2/passwordPolicy",Zl(r,e))}/**
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
 */const h1=6;class f1{constructor(e){var n,s,l,u;const d=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=d.minPasswordLength)!==null&&n!==void 0?n:h1,d.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=d.maxPasswordLength),d.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=d.containsLowercaseCharacter),d.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=d.containsUppercaseCharacter),d.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=d.containsNumericCharacter),d.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=d.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(l=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&l!==void 0?l:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,l,u,d,f;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(n=p.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(l=p.containsLowercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(u=p.containsUppercaseLetter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(d=p.containsNumericCharacter)!==null&&d!==void 0?d:!0),p.isValid&&(p.isValid=(f=p.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),p}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),l&&(n.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let l=0;l<e.length;l++)s=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,l,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(e,n,s,l){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ag(this),this.idTokenSubscription=new ag(this),this.beforeStateQueue=new c1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=En(n)),this._initializationPromise=this.queue(async()=>{var s,l;if(!this._deleted&&(this.persistenceManager=await pi.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ky(this,{idToken:e}),s=await wn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(_n(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let l=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,f=l==null?void 0:l._redirectEventId,p=await this.tryRedirectSignIn(e);(!d||d===f)&&(p!=null&&p.user)&&(l=p.user,u=!0)}if(!l)return this.directlySetCurrentUser(null);if(!l._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(l)}catch(d){l=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return l?this.reloadAndSetCurrentUserOrClear(l):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===l._redirectEventId?this.directlySetCurrentUser(l):this.reloadAndSetCurrentUserOrClear(l)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ol(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Yk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(_n(this.app))return Promise.reject(tr(this));const n=e?Rt(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return _n(this.app)?Promise.reject(tr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return _n(this.app)?Promise.reject(tr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(En(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await d1(this),n=new f1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Or("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await l1(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&En(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await pi.create(this,[En(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,l){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let d=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(f,this,"internal-error"),f.then(()=>{d||u(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,s,l);return()=>{d=!0,p()}}else{const p=e.addObserver(n);return()=>{d=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Fy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const l=await this._getAppCheckToken();return l&&(n["X-Firebase-AppCheck"]=l),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Gk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ea(r){return Rt(r)}class ag{constructor(e){this.auth=e,this.observer=null,this.addObserver=K0(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function m1(r){qd=r}function g1(r){return qd.loadJS(r)}function _1(){return qd.gapiScript}function y1(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v1(r,e){const n=xr(r,"auth");if(n.isInitialized()){const l=n.getImmediate(),u=n.getOptions();if(Ns(u,e??{}))return l;Tn(l,"already-initialized")}return n.initialize({options:e})}function w1(r,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(En);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function E1(r,e,n){const s=ea(r);Y(s._canInitEmulator,s,"emulator-config-failed"),Y(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const l=!1,u=Uy(e),{host:d,port:f}=S1(e),p=f===null?"":`:${f}`;s.config.emulator={url:`${u}//${d}${p}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:d,port:f,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:l})}),I1()}function Uy(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function S1(r){const e=Uy(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const u=l[1];return{host:u,port:ug(s.substr(u.length+1))}}else{const[u,d]=s.split(":");return{host:u,port:ug(d)}}}function ug(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function I1(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return vn("not implemented")}_getIdTokenResponse(e){return vn("not implemented")}_linkToIdToken(e,n){return vn("not implemented")}_getReauthenticationResolver(e){return vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mi(r,e){return Cy(r,"POST","/v1/accounts:signInWithIdp",Zl(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C1="http://localhost";class Ar extends zy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ar(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:l}=n,u=Wd(n,["providerId","signInMethod"]);if(!s||!l)return null;const d=new Ar(s,l);return d.idToken=u.idToken||void 0,d.accessToken=u.accessToken||void 0,d.secret=u.secret,d.nonce=u.nonce,d.pendingToken=u.pendingToken||null,d}_getIdTokenResponse(e){const n=this.buildRequest();return mi(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,mi(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,mi(e,n)}buildRequest(){const e={requestUri:C1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ii(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs extends jy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends Vs{constructor(){super("facebook.com")}static credential(e){return Ar._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends Vs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ar._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Kn.credential(n,s)}catch{return null}}}Kn.GOOGLE_SIGN_IN_METHOD="google.com";Kn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends Vs{constructor(){super("github.com")}static credential(e){return Ar._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.GITHUB_SIGN_IN_METHOD="github.com";Qn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends Vs{constructor(){super("twitter.com")}static credential(e,n){return Ar._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Yn.credential(n,s)}catch{return null}}}Yn.TWITTER_SIGN_IN_METHOD="twitter.com";Yn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T1(r,e){return Cy(r,"POST","/v1/accounts:signUp",Zl(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,l=!1){const u=await wn._fromIdTokenResponse(e,s,l),d=cg(s);return new ir({user:u,providerId:d,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const l=cg(s);return new ir({user:e,providerId:l,_tokenResponse:s,operationType:n})}}function cg(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k1(r){var e;if(_n(r.app))return Promise.reject(tr(r));const n=ea(r);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new ir({user:n.currentUser,providerId:null,operationType:"signIn"});const s=await T1(n,{returnSecureToken:!0}),l=await ir._fromIdTokenResponse(n,"signIn",s,!0);return await n._updateCurrentUser(l.user),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl extends ln{constructor(e,n,s,l){var u;super(n.code,n.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,xl.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,l){return new xl(e,n,s,l)}}function Wy(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?xl._fromErrorAndOperation(r,u,e,s):u})}async function R1(r,e,n=!1){const s=await bs(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return ir._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N1(r,e,n=!1){const{auth:s}=r;if(_n(s.app))return Promise.reject(tr(s));const l="reauthenticate";try{const u=await bs(r,Wy(s,l,e,r),n);Y(u.idToken,s,"internal-error");const d=$d(u.idToken);Y(d,s,"internal-error");const{sub:f}=d;return Y(r.uid===f,s,"user-mismatch"),ir._forOperation(r,l,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Tn(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P1(r,e,n=!1){if(_n(r.app))return Promise.reject(tr(r));const s="signIn",l=await Wy(r,s,e),u=await ir._fromIdTokenResponse(r,s,l);return n||await r._updateCurrentUser(u.user),u}function A1(r,e,n,s){return Rt(r).onIdTokenChanged(e,n,s)}function O1(r,e,n){return Rt(r).beforeAuthStateChanged(e,n)}const Dl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Dl,"1"),this.storage.removeItem(Dl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x1=1e3,D1=10;class Vy extends By{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=by(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),l=this.localCache[n];s!==l&&e(n,l,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((d,f,p)=>{this.notifyListeners(d,p)});return}const s=e.key;n?this.detachListener():this.stopPolling();const l=()=>{const d=this.storage.getItem(s);!n&&this.localCache[s]===d||this.notifyListeners(s,d)},u=this.storage.getItem(s);u1()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,D1):l()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},x1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Vy.type="LOCAL";const L1=Vy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y extends By{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}$y.type="SESSION";const Hy=$y;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M1(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(l=>l.isListeningto(e));if(n)return n;const s=new ta(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:l,data:u}=n.data,d=this.handlersMap[l];if(!(d!=null&&d.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const f=Array.from(d).map(async g=>g(n.origin,u)),p=await M1(f);n.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ta.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(r="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return r+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let u,d;return new Promise((f,p)=>{const g=Gd("",20);l.port1.start();const w=setTimeout(()=>{p(new Error("unsupported_event"))},s);d={messageChannel:l,onMessage(y){const S=y;if(S.data.eventId===g)switch(S.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),f(S.data.response);break;default:clearTimeout(w),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(d),l.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[l.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(){return window}function F1(r){sn().location.href=r}/**
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
 */function qy(){return typeof sn().WorkerGlobalScope<"u"&&typeof sn().importScripts=="function"}async function U1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function z1(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function j1(){return qy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gy="firebaseLocalStorageDb",W1=1,Ll="firebaseLocalStorage",Ky="fbase_key";class $s{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function na(r,e){return r.transaction([Ll],e?"readwrite":"readonly").objectStore(Ll)}function B1(){const r=indexedDB.deleteDatabase(Gy);return new $s(r).toPromise()}function Gc(){const r=indexedDB.open(Gy,W1);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Ll,{keyPath:Ky})}catch(l){n(l)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Ll)?e(s):(s.close(),await B1(),e(await Gc()))})})}async function dg(r,e,n){const s=na(r,!0).put({[Ky]:e,value:n});return new $s(s).toPromise()}async function V1(r,e){const n=na(r,!1).get(e),s=await new $s(n).toPromise();return s===void 0?null:s.value}function hg(r,e){const n=na(r,!0).delete(e);return new $s(n).toPromise()}const $1=800,H1=3;class Qy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>H1)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ta._getInstance(j1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await U1(),!this.activeServiceWorker)return;this.sender=new b1(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||z1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gc();return await dg(e,Dl,"1"),await hg(e,Dl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>dg(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>V1(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>hg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const u=na(l,!1).getAll();return new $s(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:l,value:u}of e)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(u)&&(this.notifyListeners(l,u),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Qy.type="LOCAL";const q1=Qy;new Bs(3e4,6e4);/**
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
 */function G1(r,e){return e?En(e):(Y(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd extends zy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return mi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return mi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return mi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function K1(r){return P1(r.auth,new Kd(r),r.bypassAuthState)}function Q1(r){const{auth:e,user:n}=r;return Y(n,e,"internal-error"),N1(n,new Kd(r),r.bypassAuthState)}async function Y1(r){const{auth:e,user:n}=r;return Y(n,e,"internal-error"),R1(n,new Kd(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(e,n,s,l,u=!1){this.auth=e,this.resolver=s,this.user=l,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:l,tenantId:u,error:d,type:f}=e;if(d){this.reject(d);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return K1;case"linkViaPopup":case"linkViaRedirect":return Y1;case"reauthViaPopup":case"reauthViaRedirect":return Q1;default:Tn(this.auth,"internal-error")}}resolve(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1=new Bs(2e3,1e4);class ai extends Yy{constructor(e,n,s,l,u){super(e,n,l,u),this.provider=s,this.authWindow=null,this.pollId=null,ai.currentPopupAction&&ai.currentPopupAction.cancel(),ai.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){kn(this.filter.length===1,"Popup operations only handle one event");const e=Gd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ai.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,X1.get())};e()}}ai.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J1="pendingRedirect",ul=new Map;class Z1 extends Yy{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ul.get(this.auth._key());if(!e){try{const s=await eR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ul.set(this.auth._key(),e)}return this.bypassAuthState||ul.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function eR(r,e){const n=rR(e),s=nR(r);if(!await s._isAvailable())return!1;const l=await s._get(n)==="true";return await s._remove(n),l}function tR(r,e){ul.set(r._key(),e)}function nR(r){return En(r._redirectPersistence)}function rR(r){return al(J1,r.config.apiKey,r.name)}async function iR(r,e,n=!1){if(_n(r.app))return Promise.reject(tr(r));const s=ea(r),l=G1(s,e),d=await new Z1(s,l,n).execute();return d&&!n&&(delete d.user._redirectEventId,await s._persistUserIfCurrent(d.user),await s._setRedirectUser(null,e)),d}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR=10*60*1e3;class oR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Xy(e)){const l=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(rn(this.auth,l))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=sR&&this.cachedEventUids.clear(),this.cachedEventUids.has(fg(e))}saveEventToCache(e){this.cachedEventUids.add(fg(e)),this.lastProcessedEventTime=Date.now()}}function fg(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Xy({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lR(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xy(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aR(r,e={}){return Ni(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cR=/^https?/;async function dR(r){if(r.config.emulator)return;const{authorizedDomains:e}=await aR(r);for(const n of e)try{if(hR(n))return}catch{}Tn(r,"unauthorized-domain")}function hR(r){const e=Hc(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const d=new URL(r);return d.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&d.hostname===s}if(!cR.test(n))return!1;if(uR.test(r))return s===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
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
 */const fR=new Bs(3e4,6e4);function pg(){const r=sn().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function pR(r){return new Promise((e,n)=>{var s,l,u;function d(){pg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{pg(),n(rn(r,"network-request-failed"))},timeout:fR.get()})}if(!((l=(s=sn().gapi)===null||s===void 0?void 0:s.iframes)===null||l===void 0)&&l.Iframe)e(gapi.iframes.getContext());else if(!((u=sn().gapi)===null||u===void 0)&&u.load)d();else{const f=y1("iframefcb");return sn()[f]=()=>{gapi.load?d():n(rn(r,"network-request-failed"))},g1(`${_1()}?onload=${f}`).catch(p=>n(p))}}).catch(e=>{throw cl=null,e})}let cl=null;function mR(r){return cl=cl||pR(r),cl}/**
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
 */const gR=new Bs(5e3,15e3),_R="__/auth/iframe",yR="emulator/auth/iframe",vR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ER(r){const e=r.config;Y(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?Vd(e,yR):`https://${r.config.authDomain}/${_R}`,s={apiKey:e.apiKey,appName:r.name,v:Ci},l=wR.get(r.config.apiHost);l&&(s.eid=l);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${Ii(s).slice(1)}`}async function SR(r){const e=await mR(r),n=sn().gapi;return Y(n,r,"internal-error"),e.open({where:document.body,url:ER(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vR,dontclear:!0},s=>new Promise(async(l,u)=>{await s.restyle({setHideOnLeave:!1});const d=rn(r,"network-request-failed"),f=sn().setTimeout(()=>{u(d)},gR.get());function p(){sn().clearTimeout(f),l(s)}s.ping(p).then(p,()=>{u(d)})}))}/**
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
 */const IR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},CR=500,TR=600,kR="_blank",RR="http://localhost";class mg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function NR(r,e,n,s=CR,l=TR){const u=Math.max((window.screen.availHeight-l)/2,0).toString(),d=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const p=Object.assign(Object.assign({},IR),{width:s.toString(),height:l.toString(),top:u,left:d}),g=at().toLowerCase();n&&(f=Oy(g)?kR:n),Py(g)&&(e=e||RR,p.scrollbars="yes");const w=Object.entries(p).reduce((S,[R,x])=>`${S}${R}=${x},`,"");if(a1(g)&&f!=="_self")return PR(e||"",f),new mg(null);const y=window.open(e||"",f,w);Y(y,r,"popup-blocked");try{y.focus()}catch{}return new mg(y)}function PR(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const AR="__/auth/handler",OR="emulator/auth/handler",xR=encodeURIComponent("fac");async function gg(r,e,n,s,l,u){Y(r.config.authDomain,r,"auth-domain-config-required"),Y(r.config.apiKey,r,"invalid-api-key");const d={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:Ci,eventId:l};if(e instanceof jy){e.setDefaultLanguage(r.languageCode),d.providerId=e.providerId||"",Ic(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,y]of Object.entries({}))d[w]=y}if(e instanceof Vs){const w=e.getScopes().filter(y=>y!=="");w.length>0&&(d.scopes=w.join(","))}r.tenantId&&(d.tid=r.tenantId);const f=d;for(const w of Object.keys(f))f[w]===void 0&&delete f[w];const p=await r._getAppCheckToken(),g=p?`#${xR}=${encodeURIComponent(p)}`:"";return`${DR(r)}?${Ii(f).slice(1)}${g}`}function DR({config:r}){return r.emulator?Vd(r,OR):`https://${r.authDomain}/${AR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc="webStorageSupport";class LR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Hy,this._completeRedirectFn=iR,this._overrideRedirectResult=tR}async _openPopup(e,n,s,l){var u;kn((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const d=await gg(e,n,s,Hc(),l);return NR(e,d,Gd())}async _openRedirect(e,n,s,l){await this._originValidation(e);const u=await gg(e,n,s,Hc(),l);return F1(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:l,promise:u}=this.eventManagers[n];return l?Promise.resolve(l):(kn(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await SR(e),s=new oR(e);return n.register("authEvent",l=>(Y(l==null?void 0:l.authEvent,e,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Sc,{type:Sc},l=>{var u;const d=(u=l==null?void 0:l[0])===null||u===void 0?void 0:u[Sc];d!==void 0&&n(!!d),Tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=dR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return by()||Ay()||Hd()}}const MR=LR;var _g="@firebase/auth",yg="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FR(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function UR(r){on(new Kt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:d,authDomain:f}=s.options;Y(d&&!d.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:d,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fy(r)},g=new p1(s,l,u,p);return w1(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),on(new Kt("auth-internal",e=>{const n=ea(e.getProvider("auth").getImmediate());return(s=>new bR(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),bt(_g,yg,FR(r)),bt(_g,yg,"esm2017")}/**
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
 */const zR=5*60,jR=Pg("authIdTokenMaxAge")||zR;let vg=null;const WR=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>jR)return;const l=n==null?void 0:n.token;vg!==l&&(vg=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function BR(r=ed()){const e=xr(r,"auth");if(e.isInitialized())return e.getImmediate();const n=v1(r,{popupRedirectResolver:MR,persistence:[q1,L1,Hy]}),s=Pg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const d=WR(u.toString());O1(n,d,()=>d(n.currentUser)),A1(n,f=>d(f))}}const l=Rg("auth");return l&&E1(n,`http://${l}`),n}function VR(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}m1({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=l=>{const u=rn("internal-error");u.customData=l,n(u)},s.type="text/javascript",s.charset="UTF-8",VR().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});UR("Browser");const $R={apiKey:"AIzaSyB2SlnQ03tQfpjLMcleDimnz-wI6_BSXYE",authDomain:"my-multiplayer-dbf6b.firebaseapp.com",databaseURL:"https://my-multiplayer-dbf6b-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"my-multiplayer-dbf6b",storageBucket:"my-multiplayer-dbf6b.firebasestorage.app",messagingSenderId:"3902656578",appId:"1:3902656578:web:ea447bf59037a7d25b5ddb",measurementId:"G-3DVR8Y6VSM"},Qd=zg($R);Bk(Qd);const ra=ST(Qd),Kc=BR(Qd);k1(Kc).then(()=>{console.log("Signed in anonymously")}).catch(r=>{console.error("Error signing in anonymously:",r)});const HR=(r,e)=>{const n=Yl(ra,`players/${r}`);Y_(n,e).then(()=>{console.log("Data written successfully!")}).catch(s=>{console.error("Error writing data:",s)})},gt=(r,e)=>{const n=Yl(ra,`players/${r}`);hT(n,e).then(()=>{console.log("Data updated successfully!")}).catch(s=>{console.error("Error updating data:",s)})},qR=r=>{const e=Yl(ra,`players/${r}`);dT(e).then(()=>{console.log("Data removed successfully!")}).catch(n=>{console.error("Error deleting data:",n)})},GR="_mycharacter_rf43a_1",KR="_moveD_rf43a_10",QR="_moveU_rf43a_13",YR="_moveR_rf43a_16",XR="_moveL_rf43a_19",JR="_dragon_rf43a_22",ZR="_walkLeft_rf43a_25",eN="_walkRight_rf43a_28",tN="_name_rf43a_31",nN="_msgContainer_rf43a_37",rN="_msg_rf43a_37",vs={mycharacter:GR,moveD:KR,moveU:QR,moveR:YR,moveL:XR,dragon:JR,walkLeft:ZR,walkRight:eN,name:tN,msgContainer:nN,msg:rN};function ia(r){var s,l;const{p:e,site:n=""}=r;return(e==null?void 0:e.page)!==n?null:G.jsxs("div",{style:{position:"relative"},children:[G.jsx("div",{className:`${vs.mycharacter} ${vs[c0[e==null?void 0:e.dir]]}`,style:{transform:`translate(${(e==null?void 0:e.x)*4}rem, ${(e==null?void 0:e.y)*4}rem)`,backgroundPosition:`${(e==null?void 0:e.vector)*-24}px 0`}}),G.jsxs("div",{className:vs.name,style:{transform:`translate(${(e==null?void 0:e.x)*4}rem, ${(e==null?void 0:e.y)*4}rem)`},children:[e.name," ",n==="forest"&&e.score]}),((l=(s=e==null?void 0:e.msg)==null?void 0:s.trim())==null?void 0:l.length)!==0&&G.jsx("div",{className:vs.msgContainer,style:{transform:`translate(${(e==null?void 0:e.x)*4}rem, ${(e==null?void 0:e.y)*4}rem)`},children:G.jsx("div",{className:vs.msg,children:e.msg})})]})}ia.propTypes={p:Pe.object,site:Pe.string};function Jy(r){const{rows:e,cols:n,players:s=[],myPlayer:l,setPage:u}=r,d=fe.useRef(null),[f,p]=fe.useState(0),[g,w]=fe.useState(()=>N0(e,n)),[y,S]=fe.useState(()=>0),[R,x]=fe.useState(()=>0),[M,b]=fe.useState(()=>2),[ae,ke]=fe.useState(()=>0),X=(ie,Z,le)=>{const Be=le===0||le===2,it=Be?e:n;if(Z<0||Z>=it)return ie;const Yt=Be?g[Z][R].type:g[y][Z].type;return Yt===Te.ROCK?ie:(Yt===Te.WATER?b(4):b(le),ke(Nt=>(Nt+1)%4),Z)},J=()=>{g[y][R].type===Te.GAME&&(gt(l==null?void 0:l.id,{page:"home"}),u("home"))},be=ie=>{switch(console.log("##keydown",ie.key),ie.key){case"ArrowUp":S(Z=>{let le=Z-1;return console.log("##up",Z,le),X(Z,le,0)});break;case"ArrowRight":x(Z=>{let le=Z+1;return console.log("##right",Z,le),X(Z,le,1)});break;case"ArrowDown":S(Z=>{let le=Z+1;return console.log("##down",Z,le),X(Z,le,2)});break;case"ArrowLeft":x(Z=>{let le=Z-1;return console.log("##left",Z,le),X(Z,le,3)});break;case" ":break;case"Enter":J();break}};return fe.useEffect(()=>{g[y][R].type===Te.FOOD&&setTimeout(()=>{let Z=g;Z[y][R].type=Te.EMPTY,w(Z),p(le=>le+1)},400);let ie={x:R,y,dir:M,vector:ae,score:f};gt(l==null?void 0:l.id,ie)},[y,R]),fe.useEffect(()=>{var ie;d&&((ie=d==null?void 0:d.current)==null||ie.focus(),S((l==null?void 0:l.y)||0),x((l==null?void 0:l.x)||0),p((l==null?void 0:l.score)||0))},[]),G.jsxs("div",{tabIndex:"0",onKeyDown:be,ref:d,className:ui.boardContainer,children:[G.jsxs("div",{children:[" Score: ",f]}),G.jsxs("div",{className:ui.board,children:[s==null?void 0:s.map(ie=>G.jsx(ia,{p:ie,site:"forest"},ie.id)),g.map((ie,Z)=>G.jsx("div",{className:ui.row,children:ie.map((le,Be)=>{const it=y===Z&&R===Be;return G.jsx(Ml,{isActive:it,type:le==null?void 0:le.type},Be)})},Z))]})]})}Jy.propTypes={rows:Pe.number.isRequired,cols:Pe.number.isRequired,players:Pe.array,myPlayer:Pe.object,setPage:Pe.func};const iN="_newPlayer_1dkh4_1",sN="_btnSubmit_1dkh4_10",wg={newPlayer:iN,btnSubmit:sN};function Zy(r){const{user:e,setNewPlayer:n}=r,[s,l]=fe.useState(""),[u,d]=fe.useState("male"),f=()=>{if(s.trim().length===0)return;n(!1);const g={name:s,score:0,x:0,y:0,character:"",dir:2,vector:0,page:"home",msg:""};HR(e==null?void 0:e.id,g)},p=g=>{d(g.target.value)};return G.jsxs("div",{className:wg.newPlayer,children:[G.jsx("div",{children:"New player"}),G.jsx("input",{type:"text",placeholder:"Enter your name",value:s,onChange:g=>l(g.target.value)}),G.jsx("br",{}),G.jsxs("select",{value:u,onChange:p,children:[G.jsx("option",{value:"male",children:"Man"}),G.jsx("option",{value:"female",children:"Women"}),G.jsx("option",{value:"snake",children:"Snake"})]}),G.jsx("button",{className:wg.btnSubmit,onClick:f,children:"Submit"})]})}Zy.propTypes={user:Pe.object.isRequired,setNewPlayer:Pe.func.isRequired};const vr=[["null","wood","wood","null","null","null","null","null","null","wood","wood","null"],["null","wood","wood","empty","null","null","null","null","sellApple","wood","wood","null"],["empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty"],["empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty"],["game","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty"],["empty","empty","empty","empty","water","water","water","water","empty","empty","empty","empty"],["empty","empty","empty","empty","water","water","water","water","empty","empty","empty","empty"],["empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty"],["empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty"]],oN="_home_b7lxk_1",lN="_hint_b7lxk_10",Eg={home:oN,hint:lN},aN="_editor_ge73_1",uN="_input_ge73_9",Sg={editor:aN,input:uN};function ev(r){const{id:e,boardRef:n,isTyping:s,msg:l,setIsTyping:u,setMsg:d}=r,f=fe.useRef(null),[p,g]=fe.useState(2),w=y=>{var S,R;console.log("##handleKeyPress",y.key),y.key==="Enter"&&!y.shiftKey&&(l==null?void 0:l.trim().length)>0?(y.preventDefault(),gt(e,{isTyping:!1,msg:l}),u(!1),d(""),g(2),(S=n==null?void 0:n.current)==null||S.focus()):y.key==="Enter"&&y.shiftKey&&p<16?g(x=>x+1):y.key==="Backspace"&&p>2?g(x=>x-1):y.key==="Escape"&&(u(!1),d(""),gt(e,{isTyping:!1}),(R=n==null?void 0:n.current)==null||R.focus())};if(s)return G.jsx("div",{className:Sg.editor,children:G.jsx("textarea",{ref:f,value:l,autoFocus:!0,className:Sg.input,placeholder:"Type your message...",onChange:y=>{var S;console.log("##onChange",y.target.value,(S=y.target.value)==null?void 0:S.length),d(y.target.value)},onKeyUp:w,rows:p.toString()})})}ev.propTypes={id:Pe.string,boardRef:Pe.object,isTyping:Pe.bool,setIsTyping:Pe.func,setMsg:Pe.func,msg:Pe.string};function tv(r){const{players:e=[],myPlayer:n,setPage:s}=r,{x:l,y:u,id:d,vector:f}=n,p=fe.useRef(null),[g,w]=fe.useState("Press Enter to type message, and again Enter to send it. Esc to cancel or delete."),[y,S]=fe.useState(!1),[R,x]=fe.useState(""),M=(X,J)=>e.some(be=>be.x===X&&be.y===J),b=(X,J)=>X<0||X>=vr[0].length||J<0||J>=vr.length?2:vr[J][X]===Te.WATER||M(X,J)?0:1,ae=()=>{var X;b(l,u)!==2&&(vr[u][l]===Te.GAME?(gt(d,{page:"forest"}),s("forest")):vr[u][l]===Te.FREE_WAY?(gt(d,{page:"freeway"}),s("freeway")):vr[u][l]===Te.SELL_APPLE?gt(d,{score:0}):b(l,u)===1&&((X=p==null?void 0:p.current)==null||X.blur(),S(!0),gt(d,{isTyping:!0})))},ke=X=>{X.preventDefault();let J={};switch(X.key){case"ArrowUp":J={dir:0,vector:(f+1)%4},b(l,u-1)&&(J.y=u-1),gt(d,J);break;case"ArrowRight":J={dir:1,vector:(f+1)%4},b(l+1,u)&&(J.x=l+1),gt(d,J);break;case"ArrowDown":J={dir:2,vector:(f+1)%4},b(l,u+1)&&(J.y=u+1),gt(d,J);break;case"ArrowLeft":J={dir:3,vector:(f+1)%4},b(l-1,u)&&(J.x=l-1),gt(d,J);break;case" ":break;case"Enter":ae();break;case"Escape":x(""),gt(d,{isTyping:!1,msg:""});break}};return fe.useEffect(()=>{w(l===0&&u===4?"Press enter":"Press Enter to type message, and again Enter to send it. Esc to cancel or delete.")},[l,u]),fe.useEffect(()=>{var X;p&&((X=p==null?void 0:p.current)==null||X.focus())},[]),G.jsxs(G.Fragment,{children:[G.jsxs("div",{className:Eg.home,tabIndex:"0",onKeyDown:ke,ref:p,children:["Living area",G.jsxs("div",{className:Eg.hint,children:["Hint: ",g]}),G.jsxs("div",{children:[e==null?void 0:e.map(X=>G.jsx(ia,{p:X,site:"home"},X.id)),vr.map((X,J)=>G.jsx("div",{className:ui.row,children:X.map((be,ie)=>G.jsx(Ml,{type:be},ie))},J))]})]}),G.jsx(ev,{id:d,isTyping:y,msg:R,boardRef:p,setIsTyping:S,setMsg:x})]})}tv.propTypes={players:Pe.array,myPlayer:Pe.object,setPage:Pe.func};function nv(r){const{rows:e,cols:n,myPlayer:s,players:l}=r,[u]=fe.useState(()=>{let x=[];for(let M=0;M<e;M++){let b=[];for(let ae=0;ae<n;ae++)b.push({isActive:!1,type:Te.EMPTY});x.push(b)}return x}),[d,f]=fe.useState({row:0,col:0}),[p,g]=fe.useState(0),[w,y]=fe.useState(new Set),S=x=>{y(M=>new Set(M).add(x.key))},R=x=>{y(M=>{const b=new Set(M);return b.delete(x.key),b})};return fe.useEffect(()=>{const x=()=>{console.log("#####ctiveKeys",w),f(M=>{let{row:b,col:ae}=M;return w.has("ArrowLeft")&&(ae=Math.max(0,ae-1),g(270)),w.has("ArrowRight")&&(ae=Math.min(n-1,ae+1),g(90)),w.has("ArrowUp")&&(b=Math.max(0,b-1),g(0)),w.has("ArrowDown")&&(b=Math.min(e-1,b+1),g(180)),{row:b,col:ae}})};if(w.size>0){const M=setInterval(x,100);return()=>clearInterval(M)}},[w]),console.log("position",l),G.jsx("div",{tabIndex:"0",onKeyDown:S,onKeyUp:R,children:G.jsxs("div",{className:ui.board,children:[l==null?void 0:l.map(x=>G.jsx(ia,{p:x,site:"freeway"},x.id)),u.map((x,M)=>G.jsx("div",{className:ui.row,children:x.map((b,ae)=>{const ke=d.row===M&&d.col===ae;return G.jsx(Ml,{isActive:ke,tile:b},ae)})},M))]})})}nv.propTypes={rows:Pe.number.isRequired,cols:Pe.number.isRequired,players:Pe.array,myPlayer:Pe.object};function cN(){const[r,e]=fe.useState(!0),[n,s]=fe.useState({}),[l,u]=fe.useState([]),[d,f]=fe.useState("home"),p=y=>{if(!y)return;let S=[];for(const R in y)R===n.id&&(s({id:R,...y[R]}),e(!1)),S.push({id:R,...y[R]});u(S)},g=()=>{qR(n==null?void 0:n.id),e(!0),s({})},w=()=>{d!=="home"&&(f("home"),gt(n==null?void 0:n.id,{page:"home"}))};return fe.useEffect(()=>Kc.onAuthStateChanged(S=>{if(S){let R=n;R.id=S.uid,s(R)}else console.log("User signed out")}),[Kc]),fe.useEffect(()=>{const y=Yl(ra,"players"),S=pT(y,R=>{p(R.val())});return()=>S()},[]),r?G.jsx(Zy,{user:n,setNewPlayer:e}):G.jsxs(G.Fragment,{children:[G.jsxs("div",{style:{padding:"1rem",fontWeight:"bolder",display:"flex",justifyContent:"space-between"},children:[G.jsx("button",{onClick:w,children:"Home"}),G.jsx("button",{onClick:g,children:"Reset"})]}),d==="home"&&G.jsx(tv,{myPlayer:n,players:l,setPage:f}),d==="forest"&&G.jsx(Jy,{rows:9,cols:12,myPlayer:n,players:l,setPage:f}),d==="freeWay"&&G.jsx(nv,{rows:10,cols:10,myPlayer:n,players:l})]})}a0.createRoot(document.getElementById("root")).render(G.jsx(fe.StrictMode,{children:G.jsx(cN,{})}));
