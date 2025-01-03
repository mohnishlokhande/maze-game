(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=n(l);fetch(l.href,u)}})();function xg(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var ec={exports:{}},ms={},tc={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp;function u0(){if(Qp)return ee;Qp=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),v=Symbol.iterator;function y(I){return I===null||typeof I!="object"?null:(I=v&&I[v]||I["@@iterator"],typeof I=="function"?I:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,F={};function $(I,P,J){this.props=I,this.context=P,this.refs=F,this.updater=J||R}$.prototype.isReactComponent={},$.prototype.setState=function(I,P){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,P,"setState")},$.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function ve(){}ve.prototype=$.prototype;function we(I,P,J){this.props=I,this.context=P,this.refs=F,this.updater=J||R}var pe=we.prototype=new ve;pe.constructor=we,D(pe,$.prototype),pe.isPureReactComponent=!0;var le=Array.isArray,Ue=Object.prototype.hasOwnProperty,Z={current:null},Q={key:!0,ref:!0,__self:!0,__source:!0};function se(I,P,J){var re,ae={},ue=null,Ee=null;if(P!=null)for(re in P.ref!==void 0&&(Ee=P.ref),P.key!==void 0&&(ue=""+P.key),P)Ue.call(P,re)&&!Q.hasOwnProperty(re)&&(ae[re]=P[re]);var he=arguments.length-2;if(he===1)ae.children=J;else if(1<he){for(var Re=Array(he),vt=0;vt<he;vt++)Re[vt]=arguments[vt+2];ae.children=Re}if(I&&I.defaultProps)for(re in he=I.defaultProps,he)ae[re]===void 0&&(ae[re]=he[re]);return{$$typeof:r,type:I,key:ue,ref:Ee,props:ae,_owner:Z.current}}function We(I,P){return{$$typeof:r,type:I.type,key:P,ref:I.ref,props:I.props,_owner:I._owner}}function rt(I){return typeof I=="object"&&I!==null&&I.$$typeof===r}function Qt(I){var P={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(J){return P[J]})}var Rt=/\/+/g;function yt(I,P){return typeof I=="object"&&I!==null&&I.key!=null?Qt(""+I.key):P.toString(36)}function Ft(I,P,J,re,ae){var ue=typeof I;(ue==="undefined"||ue==="boolean")&&(I=null);var Ee=!1;if(I===null)Ee=!0;else switch(ue){case"string":case"number":Ee=!0;break;case"object":switch(I.$$typeof){case r:case e:Ee=!0}}if(Ee)return Ee=I,ae=ae(Ee),I=re===""?"."+yt(Ee,0):re,le(ae)?(J="",I!=null&&(J=I.replace(Rt,"$&/")+"/"),Ft(ae,P,J,"",function(vt){return vt})):ae!=null&&(rt(ae)&&(ae=We(ae,J+(!ae.key||Ee&&Ee.key===ae.key?"":(""+ae.key).replace(Rt,"$&/")+"/")+I)),P.push(ae)),1;if(Ee=0,re=re===""?".":re+":",le(I))for(var he=0;he<I.length;he++){ue=I[he];var Re=re+yt(ue,he);Ee+=Ft(ue,P,J,Re,ae)}else if(Re=y(I),typeof Re=="function")for(I=Re.call(I),he=0;!(ue=I.next()).done;)ue=ue.value,Re=re+yt(ue,he++),Ee+=Ft(ue,P,J,Re,ae);else if(ue==="object")throw P=String(I),Error("Objects are not valid as a React child (found: "+(P==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":P)+"). If you meant to render a collection of children, use an array instead.");return Ee}function Xt(I,P,J){if(I==null)return I;var re=[],ae=0;return Ft(I,re,"","",function(ue){return P.call(J,ue,ae++)}),re}function at(I){if(I._status===-1){var P=I._result;P=P(),P.then(function(J){(I._status===0||I._status===-1)&&(I._status=1,I._result=J)},function(J){(I._status===0||I._status===-1)&&(I._status=2,I._result=J)}),I._status===-1&&(I._status=0,I._result=P)}if(I._status===1)return I._result.default;throw I._result}var Oe={current:null},M={transition:null},q={ReactCurrentDispatcher:Oe,ReactCurrentBatchConfig:M,ReactCurrentOwner:Z};function j(){throw Error("act(...) is not supported in production builds of React.")}return ee.Children={map:Xt,forEach:function(I,P,J){Xt(I,function(){P.apply(this,arguments)},J)},count:function(I){var P=0;return Xt(I,function(){P++}),P},toArray:function(I){return Xt(I,function(P){return P})||[]},only:function(I){if(!rt(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},ee.Component=$,ee.Fragment=n,ee.Profiler=l,ee.PureComponent=we,ee.StrictMode=s,ee.Suspense=p,ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,ee.act=j,ee.cloneElement=function(I,P,J){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var re=D({},I.props),ae=I.key,ue=I.ref,Ee=I._owner;if(P!=null){if(P.ref!==void 0&&(ue=P.ref,Ee=Z.current),P.key!==void 0&&(ae=""+P.key),I.type&&I.type.defaultProps)var he=I.type.defaultProps;for(Re in P)Ue.call(P,Re)&&!Q.hasOwnProperty(Re)&&(re[Re]=P[Re]===void 0&&he!==void 0?he[Re]:P[Re])}var Re=arguments.length-2;if(Re===1)re.children=J;else if(1<Re){he=Array(Re);for(var vt=0;vt<Re;vt++)he[vt]=arguments[vt+2];re.children=he}return{$$typeof:r,type:I.type,key:ae,ref:ue,props:re,_owner:Ee}},ee.createContext=function(I){return I={$$typeof:d,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:u,_context:I},I.Consumer=I},ee.createElement=se,ee.createFactory=function(I){var P=se.bind(null,I);return P.type=I,P},ee.createRef=function(){return{current:null}},ee.forwardRef=function(I){return{$$typeof:f,render:I}},ee.isValidElement=rt,ee.lazy=function(I){return{$$typeof:w,_payload:{_status:-1,_result:I},_init:at}},ee.memo=function(I,P){return{$$typeof:g,type:I,compare:P===void 0?null:P}},ee.startTransition=function(I){var P=M.transition;M.transition={};try{I()}finally{M.transition=P}},ee.unstable_act=j,ee.useCallback=function(I,P){return Oe.current.useCallback(I,P)},ee.useContext=function(I){return Oe.current.useContext(I)},ee.useDebugValue=function(){},ee.useDeferredValue=function(I){return Oe.current.useDeferredValue(I)},ee.useEffect=function(I,P){return Oe.current.useEffect(I,P)},ee.useId=function(){return Oe.current.useId()},ee.useImperativeHandle=function(I,P,J){return Oe.current.useImperativeHandle(I,P,J)},ee.useInsertionEffect=function(I,P){return Oe.current.useInsertionEffect(I,P)},ee.useLayoutEffect=function(I,P){return Oe.current.useLayoutEffect(I,P)},ee.useMemo=function(I,P){return Oe.current.useMemo(I,P)},ee.useReducer=function(I,P,J){return Oe.current.useReducer(I,P,J)},ee.useRef=function(I){return Oe.current.useRef(I)},ee.useState=function(I){return Oe.current.useState(I)},ee.useSyncExternalStore=function(I,P,J){return Oe.current.useSyncExternalStore(I,P,J)},ee.useTransition=function(){return Oe.current.useTransition()},ee.version="18.3.1",ee}var Xp;function Jc(){return Xp||(Xp=1,tc.exports=u0()),tc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp;function c0(){if(Jp)return ms;Jp=1;var r=Jc(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(f,p,g){var w,v={},y=null,R=null;g!==void 0&&(y=""+g),p.key!==void 0&&(y=""+p.key),p.ref!==void 0&&(R=p.ref);for(w in p)s.call(p,w)&&!u.hasOwnProperty(w)&&(v[w]=p[w]);if(f&&f.defaultProps)for(w in p=f.defaultProps,p)v[w]===void 0&&(v[w]=p[w]);return{$$typeof:e,type:f,key:y,ref:R,props:v,_owner:l.current}}return ms.Fragment=n,ms.jsx=d,ms.jsxs=d,ms}var Zp;function d0(){return Zp||(Zp=1,ec.exports=c0()),ec.exports}var V=d0(),ye=Jc();const em=xg(ye);var rl={},nc={exports:{}},pt={},rc={exports:{}},ic={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm;function h0(){return tm||(tm=1,function(r){function e(M,q){var j=M.length;M.push(q);e:for(;0<j;){var I=j-1>>>1,P=M[I];if(0<l(P,q))M[I]=q,M[j]=P,j=I;else break e}}function n(M){return M.length===0?null:M[0]}function s(M){if(M.length===0)return null;var q=M[0],j=M.pop();if(j!==q){M[0]=j;e:for(var I=0,P=M.length,J=P>>>1;I<J;){var re=2*(I+1)-1,ae=M[re],ue=re+1,Ee=M[ue];if(0>l(ae,j))ue<P&&0>l(Ee,ae)?(M[I]=Ee,M[ue]=j,I=ue):(M[I]=ae,M[re]=j,I=re);else if(ue<P&&0>l(Ee,j))M[I]=Ee,M[ue]=j,I=ue;else break e}}return q}function l(M,q){var j=M.sortIndex-q.sortIndex;return j!==0?j:M.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var d=Date,f=d.now();r.unstable_now=function(){return d.now()-f}}var p=[],g=[],w=1,v=null,y=3,R=!1,D=!1,F=!1,$=typeof setTimeout=="function"?setTimeout:null,ve=typeof clearTimeout=="function"?clearTimeout:null,we=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function pe(M){for(var q=n(g);q!==null;){if(q.callback===null)s(g);else if(q.startTime<=M)s(g),q.sortIndex=q.expirationTime,e(p,q);else break;q=n(g)}}function le(M){if(F=!1,pe(M),!D)if(n(p)!==null)D=!0,at(Ue);else{var q=n(g);q!==null&&Oe(le,q.startTime-M)}}function Ue(M,q){D=!1,F&&(F=!1,ve(se),se=-1),R=!0;var j=y;try{for(pe(q),v=n(p);v!==null&&(!(v.expirationTime>q)||M&&!Qt());){var I=v.callback;if(typeof I=="function"){v.callback=null,y=v.priorityLevel;var P=I(v.expirationTime<=q);q=r.unstable_now(),typeof P=="function"?v.callback=P:v===n(p)&&s(p),pe(q)}else s(p);v=n(p)}if(v!==null)var J=!0;else{var re=n(g);re!==null&&Oe(le,re.startTime-q),J=!1}return J}finally{v=null,y=j,R=!1}}var Z=!1,Q=null,se=-1,We=5,rt=-1;function Qt(){return!(r.unstable_now()-rt<We)}function Rt(){if(Q!==null){var M=r.unstable_now();rt=M;var q=!0;try{q=Q(!0,M)}finally{q?yt():(Z=!1,Q=null)}}else Z=!1}var yt;if(typeof we=="function")yt=function(){we(Rt)};else if(typeof MessageChannel<"u"){var Ft=new MessageChannel,Xt=Ft.port2;Ft.port1.onmessage=Rt,yt=function(){Xt.postMessage(null)}}else yt=function(){$(Rt,0)};function at(M){Q=M,Z||(Z=!0,yt())}function Oe(M,q){se=$(function(){M(r.unstable_now())},q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(M){M.callback=null},r.unstable_continueExecution=function(){D||R||(D=!0,at(Ue))},r.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):We=0<M?Math.floor(1e3/M):5},r.unstable_getCurrentPriorityLevel=function(){return y},r.unstable_getFirstCallbackNode=function(){return n(p)},r.unstable_next=function(M){switch(y){case 1:case 2:case 3:var q=3;break;default:q=y}var j=y;y=q;try{return M()}finally{y=j}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(M,q){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var j=y;y=M;try{return q()}finally{y=j}},r.unstable_scheduleCallback=function(M,q,j){var I=r.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?I+j:I):j=I,M){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=j+P,M={id:w++,callback:q,priorityLevel:M,startTime:j,expirationTime:P,sortIndex:-1},j>I?(M.sortIndex=j,e(g,M),n(p)===null&&M===n(g)&&(F?(ve(se),se=-1):F=!0,Oe(le,j-I))):(M.sortIndex=P,e(p,M),D||R||(D=!0,at(Ue))),M},r.unstable_shouldYield=Qt,r.unstable_wrapCallback=function(M){var q=y;return function(){var j=y;y=q;try{return M.apply(this,arguments)}finally{y=j}}}}(ic)),ic}var nm;function f0(){return nm||(nm=1,rc.exports=h0()),rc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rm;function p0(){if(rm)return pt;rm=1;var r=Jc(),e=f0();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function u(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(l[t]=i,t=0;t<i.length;t++)s.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},v={};function y(t){return p.call(v,t)?!0:p.call(w,t)?!1:g.test(t)?v[t]=!0:(w[t]=!0,!1)}function R(t,i,o,a){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return a?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function D(t,i,o,a){if(i===null||typeof i>"u"||R(t,i,o,a))return!0;if(a)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function F(t,i,o,a,c,h,m){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=a,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=m}var $={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$[t]=new F(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];$[i]=new F(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){$[t]=new F(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$[t]=new F(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$[t]=new F(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){$[t]=new F(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){$[t]=new F(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){$[t]=new F(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){$[t]=new F(t,5,!1,t.toLowerCase(),null,!1,!1)});var ve=/[\-:]([a-z])/g;function we(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(ve,we);$[i]=new F(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(ve,we);$[i]=new F(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(ve,we);$[i]=new F(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){$[t]=new F(t,1,!1,t.toLowerCase(),null,!1,!1)}),$.xlinkHref=new F("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){$[t]=new F(t,1,!1,t.toLowerCase(),null,!0,!0)});function pe(t,i,o,a){var c=$.hasOwnProperty(i)?$[i]:null;(c!==null?c.type!==0:a||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(D(i,o,c,a)&&(o=null),a||c===null?y(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):c.mustUseProperty?t[c.propertyName]=o===null?c.type===3?!1:"":o:(i=c.attributeName,a=c.attributeNamespace,o===null?t.removeAttribute(i):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,a?t.setAttributeNS(a,i,o):t.setAttribute(i,o))))}var le=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ue=Symbol.for("react.element"),Z=Symbol.for("react.portal"),Q=Symbol.for("react.fragment"),se=Symbol.for("react.strict_mode"),We=Symbol.for("react.profiler"),rt=Symbol.for("react.provider"),Qt=Symbol.for("react.context"),Rt=Symbol.for("react.forward_ref"),yt=Symbol.for("react.suspense"),Ft=Symbol.for("react.suspense_list"),Xt=Symbol.for("react.memo"),at=Symbol.for("react.lazy"),Oe=Symbol.for("react.offscreen"),M=Symbol.iterator;function q(t){return t===null||typeof t!="object"?null:(t=M&&t[M]||t["@@iterator"],typeof t=="function"?t:null)}var j=Object.assign,I;function P(t){if(I===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+t}var J=!1;function re(t,i){if(!t||J)return"";J=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(k){var a=k}Reflect.construct(t,[],i)}else{try{i.call()}catch(k){a=k}t.call(i.prototype)}else{try{throw Error()}catch(k){a=k}t()}}catch(k){if(k&&a&&typeof k.stack=="string"){for(var c=k.stack.split(`
`),h=a.stack.split(`
`),m=c.length-1,_=h.length-1;1<=m&&0<=_&&c[m]!==h[_];)_--;for(;1<=m&&0<=_;m--,_--)if(c[m]!==h[_]){if(m!==1||_!==1)do if(m--,_--,0>_||c[m]!==h[_]){var E=`
`+c[m].replace(" at new "," at ");return t.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",t.displayName)),E}while(1<=m&&0<=_);break}}}finally{J=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?P(t):""}function ae(t){switch(t.tag){case 5:return P(t.type);case 16:return P("Lazy");case 13:return P("Suspense");case 19:return P("SuspenseList");case 0:case 2:case 15:return t=re(t.type,!1),t;case 11:return t=re(t.type.render,!1),t;case 1:return t=re(t.type,!0),t;default:return""}}function ue(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Q:return"Fragment";case Z:return"Portal";case We:return"Profiler";case se:return"StrictMode";case yt:return"Suspense";case Ft:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Qt:return(t.displayName||"Context")+".Consumer";case rt:return(t._context.displayName||"Context")+".Provider";case Rt:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Xt:return i=t.displayName||null,i!==null?i:ue(t.type)||"Memo";case at:i=t._payload,t=t._init;try{return ue(t(i))}catch{}}return null}function Ee(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ue(i);case 8:return i===se?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function he(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Re(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function vt(t){var i=Re(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),a=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(m){a=""+m,h.call(this,m)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(m){a=""+m},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Gs(t){t._valueTracker||(t._valueTracker=vt(t))}function th(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),a="";return t&&(a=Re(t)?t.checked?"true":"false":t.value),t=a,t!==o?(i.setValue(t),!0):!1}function qs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function la(t,i){var o=i.checked;return j({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function nh(t,i){var o=i.defaultValue==null?"":i.defaultValue,a=i.checked!=null?i.checked:i.defaultChecked;o=he(i.value!=null?i.value:o),t._wrapperState={initialChecked:a,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function rh(t,i){i=i.checked,i!=null&&pe(t,"checked",i,!1)}function aa(t,i){rh(t,i);var o=he(i.value),a=i.type;if(o!=null)a==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(a==="submit"||a==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?ua(t,i.type,o):i.hasOwnProperty("defaultValue")&&ua(t,i.type,he(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function ih(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var a=i.type;if(!(a!=="submit"&&a!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function ua(t,i,o){(i!=="number"||qs(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Ai=Array.isArray;function br(t,i,o,a){if(t=t.options,i){i={};for(var c=0;c<o.length;c++)i["$"+o[c]]=!0;for(o=0;o<t.length;o++)c=i.hasOwnProperty("$"+t[o].value),t[o].selected!==c&&(t[o].selected=c),c&&a&&(t[o].defaultSelected=!0)}else{for(o=""+he(o),i=null,c=0;c<t.length;c++){if(t[c].value===o){t[c].selected=!0,a&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function ca(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return j({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function sh(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(Ai(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:he(o)}}function oh(t,i){var o=he(i.value),a=he(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),a!=null&&(t.defaultValue=""+a)}function lh(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function ah(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function da(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?ah(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ks,uh=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,a,c){MSApp.execUnsafeLocalFunction(function(){return t(i,o,a,c)})}:t}(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Ks=Ks||document.createElement("div"),Ks.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ks.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Oi(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var xi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fv=["Webkit","ms","Moz","O"];Object.keys(xi).forEach(function(t){fv.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),xi[i]=xi[t]})});function ch(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||xi.hasOwnProperty(t)&&xi[t]?(""+i).trim():i+"px"}function dh(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var a=o.indexOf("--")===0,c=ch(o,i[o],a);o==="float"&&(o="cssFloat"),a?t.setProperty(o,c):t[o]=c}}var pv=j({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ha(t,i){if(i){if(pv[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function fa(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pa=null;function ma(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ga=null,Fr=null,Ur=null;function hh(t){if(t=es(t)){if(typeof ga!="function")throw Error(n(280));var i=t.stateNode;i&&(i=yo(i),ga(t.stateNode,t.type,i))}}function fh(t){Fr?Ur?Ur.push(t):Ur=[t]:Fr=t}function ph(){if(Fr){var t=Fr,i=Ur;if(Ur=Fr=null,hh(t),i)for(t=0;t<i.length;t++)hh(i[t])}}function mh(t,i){return t(i)}function gh(){}var _a=!1;function _h(t,i,o){if(_a)return t(i,o);_a=!0;try{return mh(t,i,o)}finally{_a=!1,(Fr!==null||Ur!==null)&&(gh(),ph())}}function Di(t,i){var o=t.stateNode;if(o===null)return null;var a=yo(o);if(a===null)return null;o=a[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var ya=!1;if(f)try{var Li={};Object.defineProperty(Li,"passive",{get:function(){ya=!0}}),window.addEventListener("test",Li,Li),window.removeEventListener("test",Li,Li)}catch{ya=!1}function mv(t,i,o,a,c,h,m,_,E){var k=Array.prototype.slice.call(arguments,3);try{i.apply(o,k)}catch(A){this.onError(A)}}var Mi=!1,Ys=null,Qs=!1,va=null,gv={onError:function(t){Mi=!0,Ys=t}};function _v(t,i,o,a,c,h,m,_,E){Mi=!1,Ys=null,mv.apply(gv,arguments)}function yv(t,i,o,a,c,h,m,_,E){if(_v.apply(this,arguments),Mi){if(Mi){var k=Ys;Mi=!1,Ys=null}else throw Error(n(198));Qs||(Qs=!0,va=k)}}function lr(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,i.flags&4098&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function yh(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function vh(t){if(lr(t)!==t)throw Error(n(188))}function vv(t){var i=t.alternate;if(!i){if(i=lr(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,a=i;;){var c=o.return;if(c===null)break;var h=c.alternate;if(h===null){if(a=c.return,a!==null){o=a;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===o)return vh(c),t;if(h===a)return vh(c),i;h=h.sibling}throw Error(n(188))}if(o.return!==a.return)o=c,a=h;else{for(var m=!1,_=c.child;_;){if(_===o){m=!0,o=c,a=h;break}if(_===a){m=!0,a=c,o=h;break}_=_.sibling}if(!m){for(_=h.child;_;){if(_===o){m=!0,o=h,a=c;break}if(_===a){m=!0,a=h,o=c;break}_=_.sibling}if(!m)throw Error(n(189))}}if(o.alternate!==a)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function wh(t){return t=vv(t),t!==null?Eh(t):null}function Eh(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Eh(t);if(i!==null)return i;t=t.sibling}return null}var Sh=e.unstable_scheduleCallback,Ih=e.unstable_cancelCallback,wv=e.unstable_shouldYield,Ev=e.unstable_requestPaint,Me=e.unstable_now,Sv=e.unstable_getCurrentPriorityLevel,wa=e.unstable_ImmediatePriority,Ch=e.unstable_UserBlockingPriority,Xs=e.unstable_NormalPriority,Iv=e.unstable_LowPriority,Th=e.unstable_IdlePriority,Js=null,Jt=null;function Cv(t){if(Jt&&typeof Jt.onCommitFiberRoot=="function")try{Jt.onCommitFiberRoot(Js,t,void 0,(t.current.flags&128)===128)}catch{}}var Ut=Math.clz32?Math.clz32:Rv,Tv=Math.log,kv=Math.LN2;function Rv(t){return t>>>=0,t===0?32:31-(Tv(t)/kv|0)|0}var Zs=64,eo=4194304;function bi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function to(t,i){var o=t.pendingLanes;if(o===0)return 0;var a=0,c=t.suspendedLanes,h=t.pingedLanes,m=o&268435455;if(m!==0){var _=m&~c;_!==0?a=bi(_):(h&=m,h!==0&&(a=bi(h)))}else m=o&~c,m!==0?a=bi(m):h!==0&&(a=bi(h));if(a===0)return 0;if(i!==0&&i!==a&&!(i&c)&&(c=a&-a,h=i&-i,c>=h||c===16&&(h&4194240)!==0))return i;if(a&4&&(a|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=a;0<i;)o=31-Ut(i),c=1<<o,a|=t[o],i&=~c;return a}function Nv(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pv(t,i){for(var o=t.suspendedLanes,a=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var m=31-Ut(h),_=1<<m,E=c[m];E===-1?(!(_&o)||_&a)&&(c[m]=Nv(_,i)):E<=i&&(t.expiredLanes|=_),h&=~_}}function Ea(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function kh(){var t=Zs;return Zs<<=1,!(Zs&4194240)&&(Zs=64),t}function Sa(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Fi(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Ut(i),t[i]=o}function Av(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var a=t.eventTimes;for(t=t.expirationTimes;0<o;){var c=31-Ut(o),h=1<<c;i[c]=0,a[c]=-1,t[c]=-1,o&=~h}}function Ia(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var a=31-Ut(o),c=1<<a;c&i|t[a]&i&&(t[a]|=i),o&=~c}}var fe=0;function Rh(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Nh,Ca,Ph,Ah,Oh,Ta=!1,no=[],Rn=null,Nn=null,Pn=null,Ui=new Map,ji=new Map,An=[],Ov="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xh(t,i){switch(t){case"focusin":case"focusout":Rn=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":Pn=null;break;case"pointerover":case"pointerout":Ui.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ji.delete(i.pointerId)}}function zi(t,i,o,a,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:a,nativeEvent:h,targetContainers:[c]},i!==null&&(i=es(i),i!==null&&Ca(i)),t):(t.eventSystemFlags|=a,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function xv(t,i,o,a,c){switch(i){case"focusin":return Rn=zi(Rn,t,i,o,a,c),!0;case"dragenter":return Nn=zi(Nn,t,i,o,a,c),!0;case"mouseover":return Pn=zi(Pn,t,i,o,a,c),!0;case"pointerover":var h=c.pointerId;return Ui.set(h,zi(Ui.get(h)||null,t,i,o,a,c)),!0;case"gotpointercapture":return h=c.pointerId,ji.set(h,zi(ji.get(h)||null,t,i,o,a,c)),!0}return!1}function Dh(t){var i=ar(t.target);if(i!==null){var o=lr(i);if(o!==null){if(i=o.tag,i===13){if(i=yh(o),i!==null){t.blockedOn=i,Oh(t.priority,function(){Ph(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ro(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Ra(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var a=new o.constructor(o.type,o);pa=a,o.target.dispatchEvent(a),pa=null}else return i=es(o),i!==null&&Ca(i),t.blockedOn=o,!1;i.shift()}return!0}function Lh(t,i,o){ro(t)&&o.delete(i)}function Dv(){Ta=!1,Rn!==null&&ro(Rn)&&(Rn=null),Nn!==null&&ro(Nn)&&(Nn=null),Pn!==null&&ro(Pn)&&(Pn=null),Ui.forEach(Lh),ji.forEach(Lh)}function Wi(t,i){t.blockedOn===i&&(t.blockedOn=null,Ta||(Ta=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Dv)))}function Bi(t){function i(c){return Wi(c,t)}if(0<no.length){Wi(no[0],t);for(var o=1;o<no.length;o++){var a=no[o];a.blockedOn===t&&(a.blockedOn=null)}}for(Rn!==null&&Wi(Rn,t),Nn!==null&&Wi(Nn,t),Pn!==null&&Wi(Pn,t),Ui.forEach(i),ji.forEach(i),o=0;o<An.length;o++)a=An[o],a.blockedOn===t&&(a.blockedOn=null);for(;0<An.length&&(o=An[0],o.blockedOn===null);)Dh(o),o.blockedOn===null&&An.shift()}var jr=le.ReactCurrentBatchConfig,io=!0;function Lv(t,i,o,a){var c=fe,h=jr.transition;jr.transition=null;try{fe=1,ka(t,i,o,a)}finally{fe=c,jr.transition=h}}function Mv(t,i,o,a){var c=fe,h=jr.transition;jr.transition=null;try{fe=4,ka(t,i,o,a)}finally{fe=c,jr.transition=h}}function ka(t,i,o,a){if(io){var c=Ra(t,i,o,a);if(c===null)$a(t,i,a,so,o),xh(t,a);else if(xv(c,t,i,o,a))a.stopPropagation();else if(xh(t,a),i&4&&-1<Ov.indexOf(t)){for(;c!==null;){var h=es(c);if(h!==null&&Nh(h),h=Ra(t,i,o,a),h===null&&$a(t,i,a,so,o),h===c)break;c=h}c!==null&&a.stopPropagation()}else $a(t,i,a,null,o)}}var so=null;function Ra(t,i,o,a){if(so=null,t=ma(a),t=ar(t),t!==null)if(i=lr(t),i===null)t=null;else if(o=i.tag,o===13){if(t=yh(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return so=t,null}function Mh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sv()){case wa:return 1;case Ch:return 4;case Xs:case Iv:return 16;case Th:return 536870912;default:return 16}default:return 16}}var On=null,Na=null,oo=null;function bh(){if(oo)return oo;var t,i=Na,o=i.length,a,c="value"in On?On.value:On.textContent,h=c.length;for(t=0;t<o&&i[t]===c[t];t++);var m=o-t;for(a=1;a<=m&&i[o-a]===c[h-a];a++);return oo=c.slice(t,1<a?1-a:void 0)}function lo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ao(){return!0}function Fh(){return!1}function wt(t){function i(o,a,c,h,m){this._reactName=o,this._targetInst=c,this.type=a,this.nativeEvent=h,this.target=m,this.currentTarget=null;for(var _ in t)t.hasOwnProperty(_)&&(o=t[_],this[_]=o?o(h):h[_]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ao:Fh,this.isPropagationStopped=Fh,this}return j(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ao)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ao)},persist:function(){},isPersistent:ao}),i}var zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pa=wt(zr),Vi=j({},zr,{view:0,detail:0}),bv=wt(Vi),Aa,Oa,$i,uo=j({},Vi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Da,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$i&&($i&&t.type==="mousemove"?(Aa=t.screenX-$i.screenX,Oa=t.screenY-$i.screenY):Oa=Aa=0,$i=t),Aa)},movementY:function(t){return"movementY"in t?t.movementY:Oa}}),Uh=wt(uo),Fv=j({},uo,{dataTransfer:0}),Uv=wt(Fv),jv=j({},Vi,{relatedTarget:0}),xa=wt(jv),zv=j({},zr,{animationName:0,elapsedTime:0,pseudoElement:0}),Wv=wt(zv),Bv=j({},zr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Vv=wt(Bv),$v=j({},zr,{data:0}),jh=wt($v),Hv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kv(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=qv[t])?!!i[t]:!1}function Da(){return Kv}var Yv=j({},Vi,{key:function(t){if(t.key){var i=Hv[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=lo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Gv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Da,charCode:function(t){return t.type==="keypress"?lo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?lo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Qv=wt(Yv),Xv=j({},uo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zh=wt(Xv),Jv=j({},Vi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Da}),Zv=wt(Jv),ew=j({},zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),tw=wt(ew),nw=j({},uo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),rw=wt(nw),iw=[9,13,27,32],La=f&&"CompositionEvent"in window,Hi=null;f&&"documentMode"in document&&(Hi=document.documentMode);var sw=f&&"TextEvent"in window&&!Hi,Wh=f&&(!La||Hi&&8<Hi&&11>=Hi),Bh=" ",Vh=!1;function $h(t,i){switch(t){case"keyup":return iw.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wr=!1;function ow(t,i){switch(t){case"compositionend":return Hh(i);case"keypress":return i.which!==32?null:(Vh=!0,Bh);case"textInput":return t=i.data,t===Bh&&Vh?null:t;default:return null}}function lw(t,i){if(Wr)return t==="compositionend"||!La&&$h(t,i)?(t=bh(),oo=Na=On=null,Wr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Wh&&i.locale!=="ko"?null:i.data;default:return null}}var aw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gh(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!aw[t.type]:i==="textarea"}function qh(t,i,o,a){fh(a),i=mo(i,"onChange"),0<i.length&&(o=new Pa("onChange","change",null,o,a),t.push({event:o,listeners:i}))}var Gi=null,qi=null;function uw(t){hf(t,0)}function co(t){var i=Gr(t);if(th(i))return t}function cw(t,i){if(t==="change")return i}var Kh=!1;if(f){var Ma;if(f){var ba="oninput"in document;if(!ba){var Yh=document.createElement("div");Yh.setAttribute("oninput","return;"),ba=typeof Yh.oninput=="function"}Ma=ba}else Ma=!1;Kh=Ma&&(!document.documentMode||9<document.documentMode)}function Qh(){Gi&&(Gi.detachEvent("onpropertychange",Xh),qi=Gi=null)}function Xh(t){if(t.propertyName==="value"&&co(qi)){var i=[];qh(i,qi,t,ma(t)),_h(uw,i)}}function dw(t,i,o){t==="focusin"?(Qh(),Gi=i,qi=o,Gi.attachEvent("onpropertychange",Xh)):t==="focusout"&&Qh()}function hw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return co(qi)}function fw(t,i){if(t==="click")return co(i)}function pw(t,i){if(t==="input"||t==="change")return co(i)}function mw(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var jt=typeof Object.is=="function"?Object.is:mw;function Ki(t,i){if(jt(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),a=Object.keys(i);if(o.length!==a.length)return!1;for(a=0;a<o.length;a++){var c=o[a];if(!p.call(i,c)||!jt(t[c],i[c]))return!1}return!0}function Jh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zh(t,i){var o=Jh(t);t=0;for(var a;o;){if(o.nodeType===3){if(a=t+o.textContent.length,t<=i&&a>=i)return{node:o,offset:i-t};t=a}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Jh(o)}}function ef(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?ef(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function tf(){for(var t=window,i=qs();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=qs(t.document)}return i}function Fa(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function gw(t){var i=tf(),o=t.focusedElem,a=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&ef(o.ownerDocument.documentElement,o)){if(a!==null&&Fa(o)){if(i=a.start,t=a.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=o.textContent.length,h=Math.min(a.start,c);a=a.end===void 0?h:Math.min(a.end,c),!t.extend&&h>a&&(c=a,a=h,h=c),c=Zh(o,h);var m=Zh(o,a);c&&m&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==m.node||t.focusOffset!==m.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),h>a?(t.addRange(i),t.extend(m.node,m.offset)):(i.setEnd(m.node,m.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var _w=f&&"documentMode"in document&&11>=document.documentMode,Br=null,Ua=null,Yi=null,ja=!1;function nf(t,i,o){var a=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;ja||Br==null||Br!==qs(a)||(a=Br,"selectionStart"in a&&Fa(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Yi&&Ki(Yi,a)||(Yi=a,a=mo(Ua,"onSelect"),0<a.length&&(i=new Pa("onSelect","select",null,i,o),t.push({event:i,listeners:a}),i.target=Br)))}function ho(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var Vr={animationend:ho("Animation","AnimationEnd"),animationiteration:ho("Animation","AnimationIteration"),animationstart:ho("Animation","AnimationStart"),transitionend:ho("Transition","TransitionEnd")},za={},rf={};f&&(rf=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function fo(t){if(za[t])return za[t];if(!Vr[t])return t;var i=Vr[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in rf)return za[t]=i[o];return t}var sf=fo("animationend"),of=fo("animationiteration"),lf=fo("animationstart"),af=fo("transitionend"),uf=new Map,cf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xn(t,i){uf.set(t,i),u(i,[t])}for(var Wa=0;Wa<cf.length;Wa++){var Ba=cf[Wa],yw=Ba.toLowerCase(),vw=Ba[0].toUpperCase()+Ba.slice(1);xn(yw,"on"+vw)}xn(sf,"onAnimationEnd"),xn(of,"onAnimationIteration"),xn(lf,"onAnimationStart"),xn("dblclick","onDoubleClick"),xn("focusin","onFocus"),xn("focusout","onBlur"),xn(af,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ww=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qi));function df(t,i,o){var a=t.type||"unknown-event";t.currentTarget=o,yv(a,i,void 0,t),t.currentTarget=null}function hf(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var a=t[o],c=a.event;a=a.listeners;e:{var h=void 0;if(i)for(var m=a.length-1;0<=m;m--){var _=a[m],E=_.instance,k=_.currentTarget;if(_=_.listener,E!==h&&c.isPropagationStopped())break e;df(c,_,k),h=E}else for(m=0;m<a.length;m++){if(_=a[m],E=_.instance,k=_.currentTarget,_=_.listener,E!==h&&c.isPropagationStopped())break e;df(c,_,k),h=E}}}if(Qs)throw t=va,Qs=!1,va=null,t}function Te(t,i){var o=i[Qa];o===void 0&&(o=i[Qa]=new Set);var a=t+"__bubble";o.has(a)||(ff(i,t,2,!1),o.add(a))}function Va(t,i,o){var a=0;i&&(a|=4),ff(o,t,a,i)}var po="_reactListening"+Math.random().toString(36).slice(2);function Xi(t){if(!t[po]){t[po]=!0,s.forEach(function(o){o!=="selectionchange"&&(ww.has(o)||Va(o,!1,t),Va(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[po]||(i[po]=!0,Va("selectionchange",!1,i))}}function ff(t,i,o,a){switch(Mh(i)){case 1:var c=Lv;break;case 4:c=Mv;break;default:c=ka}o=c.bind(null,i,o,t),c=void 0,!ya||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),a?c!==void 0?t.addEventListener(i,o,{capture:!0,passive:c}):t.addEventListener(i,o,!0):c!==void 0?t.addEventListener(i,o,{passive:c}):t.addEventListener(i,o,!1)}function $a(t,i,o,a,c){var h=a;if(!(i&1)&&!(i&2)&&a!==null)e:for(;;){if(a===null)return;var m=a.tag;if(m===3||m===4){var _=a.stateNode.containerInfo;if(_===c||_.nodeType===8&&_.parentNode===c)break;if(m===4)for(m=a.return;m!==null;){var E=m.tag;if((E===3||E===4)&&(E=m.stateNode.containerInfo,E===c||E.nodeType===8&&E.parentNode===c))return;m=m.return}for(;_!==null;){if(m=ar(_),m===null)return;if(E=m.tag,E===5||E===6){a=h=m;continue e}_=_.parentNode}}a=a.return}_h(function(){var k=h,A=ma(o),O=[];e:{var N=uf.get(t);if(N!==void 0){var b=Pa,z=t;switch(t){case"keypress":if(lo(o)===0)break e;case"keydown":case"keyup":b=Qv;break;case"focusin":z="focus",b=xa;break;case"focusout":z="blur",b=xa;break;case"beforeblur":case"afterblur":b=xa;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Uh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=Uv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=Zv;break;case sf:case of:case lf:b=Wv;break;case af:b=tw;break;case"scroll":b=bv;break;case"wheel":b=rw;break;case"copy":case"cut":case"paste":b=Vv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=zh}var W=(i&4)!==0,be=!W&&t==="scroll",C=W?N!==null?N+"Capture":null:N;W=[];for(var S=k,T;S!==null;){T=S;var x=T.stateNode;if(T.tag===5&&x!==null&&(T=x,C!==null&&(x=Di(S,C),x!=null&&W.push(Ji(S,x,T)))),be)break;S=S.return}0<W.length&&(N=new b(N,z,null,o,A),O.push({event:N,listeners:W}))}}if(!(i&7)){e:{if(N=t==="mouseover"||t==="pointerover",b=t==="mouseout"||t==="pointerout",N&&o!==pa&&(z=o.relatedTarget||o.fromElement)&&(ar(z)||z[un]))break e;if((b||N)&&(N=A.window===A?A:(N=A.ownerDocument)?N.defaultView||N.parentWindow:window,b?(z=o.relatedTarget||o.toElement,b=k,z=z?ar(z):null,z!==null&&(be=lr(z),z!==be||z.tag!==5&&z.tag!==6)&&(z=null)):(b=null,z=k),b!==z)){if(W=Uh,x="onMouseLeave",C="onMouseEnter",S="mouse",(t==="pointerout"||t==="pointerover")&&(W=zh,x="onPointerLeave",C="onPointerEnter",S="pointer"),be=b==null?N:Gr(b),T=z==null?N:Gr(z),N=new W(x,S+"leave",b,o,A),N.target=be,N.relatedTarget=T,x=null,ar(A)===k&&(W=new W(C,S+"enter",z,o,A),W.target=T,W.relatedTarget=be,x=W),be=x,b&&z)t:{for(W=b,C=z,S=0,T=W;T;T=$r(T))S++;for(T=0,x=C;x;x=$r(x))T++;for(;0<S-T;)W=$r(W),S--;for(;0<T-S;)C=$r(C),T--;for(;S--;){if(W===C||C!==null&&W===C.alternate)break t;W=$r(W),C=$r(C)}W=null}else W=null;b!==null&&pf(O,N,b,W,!1),z!==null&&be!==null&&pf(O,be,z,W,!0)}}e:{if(N=k?Gr(k):window,b=N.nodeName&&N.nodeName.toLowerCase(),b==="select"||b==="input"&&N.type==="file")var B=cw;else if(Gh(N))if(Kh)B=pw;else{B=hw;var H=dw}else(b=N.nodeName)&&b.toLowerCase()==="input"&&(N.type==="checkbox"||N.type==="radio")&&(B=fw);if(B&&(B=B(t,k))){qh(O,B,o,A);break e}H&&H(t,N,k),t==="focusout"&&(H=N._wrapperState)&&H.controlled&&N.type==="number"&&ua(N,"number",N.value)}switch(H=k?Gr(k):window,t){case"focusin":(Gh(H)||H.contentEditable==="true")&&(Br=H,Ua=k,Yi=null);break;case"focusout":Yi=Ua=Br=null;break;case"mousedown":ja=!0;break;case"contextmenu":case"mouseup":case"dragend":ja=!1,nf(O,o,A);break;case"selectionchange":if(_w)break;case"keydown":case"keyup":nf(O,o,A)}var G;if(La)e:{switch(t){case"compositionstart":var Y="onCompositionStart";break e;case"compositionend":Y="onCompositionEnd";break e;case"compositionupdate":Y="onCompositionUpdate";break e}Y=void 0}else Wr?$h(t,o)&&(Y="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(Y="onCompositionStart");Y&&(Wh&&o.locale!=="ko"&&(Wr||Y!=="onCompositionStart"?Y==="onCompositionEnd"&&Wr&&(G=bh()):(On=A,Na="value"in On?On.value:On.textContent,Wr=!0)),H=mo(k,Y),0<H.length&&(Y=new jh(Y,t,null,o,A),O.push({event:Y,listeners:H}),G?Y.data=G:(G=Hh(o),G!==null&&(Y.data=G)))),(G=sw?ow(t,o):lw(t,o))&&(k=mo(k,"onBeforeInput"),0<k.length&&(A=new jh("onBeforeInput","beforeinput",null,o,A),O.push({event:A,listeners:k}),A.data=G))}hf(O,i)})}function Ji(t,i,o){return{instance:t,listener:i,currentTarget:o}}function mo(t,i){for(var o=i+"Capture",a=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=Di(t,o),h!=null&&a.unshift(Ji(t,h,c)),h=Di(t,i),h!=null&&a.push(Ji(t,h,c))),t=t.return}return a}function $r(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function pf(t,i,o,a,c){for(var h=i._reactName,m=[];o!==null&&o!==a;){var _=o,E=_.alternate,k=_.stateNode;if(E!==null&&E===a)break;_.tag===5&&k!==null&&(_=k,c?(E=Di(o,h),E!=null&&m.unshift(Ji(o,E,_))):c||(E=Di(o,h),E!=null&&m.push(Ji(o,E,_)))),o=o.return}m.length!==0&&t.push({event:i,listeners:m})}var Ew=/\r\n?/g,Sw=/\u0000|\uFFFD/g;function mf(t){return(typeof t=="string"?t:""+t).replace(Ew,`
`).replace(Sw,"")}function go(t,i,o){if(i=mf(i),mf(t)!==i&&o)throw Error(n(425))}function _o(){}var Ha=null,Ga=null;function qa(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ka=typeof setTimeout=="function"?setTimeout:void 0,Iw=typeof clearTimeout=="function"?clearTimeout:void 0,gf=typeof Promise=="function"?Promise:void 0,Cw=typeof queueMicrotask=="function"?queueMicrotask:typeof gf<"u"?function(t){return gf.resolve(null).then(t).catch(Tw)}:Ka;function Tw(t){setTimeout(function(){throw t})}function Ya(t,i){var o=i,a=0;do{var c=o.nextSibling;if(t.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(a===0){t.removeChild(c),Bi(i);return}a--}else o!=="$"&&o!=="$?"&&o!=="$!"||a++;o=c}while(o);Bi(i)}function Dn(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function _f(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var Hr=Math.random().toString(36).slice(2),Zt="__reactFiber$"+Hr,Zi="__reactProps$"+Hr,un="__reactContainer$"+Hr,Qa="__reactEvents$"+Hr,kw="__reactListeners$"+Hr,Rw="__reactHandles$"+Hr;function ar(t){var i=t[Zt];if(i)return i;for(var o=t.parentNode;o;){if(i=o[un]||o[Zt]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=_f(t);t!==null;){if(o=t[Zt])return o;t=_f(t)}return i}t=o,o=t.parentNode}return null}function es(t){return t=t[Zt]||t[un],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Gr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function yo(t){return t[Zi]||null}var Xa=[],qr=-1;function Ln(t){return{current:t}}function ke(t){0>qr||(t.current=Xa[qr],Xa[qr]=null,qr--)}function Se(t,i){qr++,Xa[qr]=t.current,t.current=i}var Mn={},Ze=Ln(Mn),ut=Ln(!1),ur=Mn;function Kr(t,i){var o=t.type.contextTypes;if(!o)return Mn;var a=t.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===i)return a.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in o)c[h]=i[h];return a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function ct(t){return t=t.childContextTypes,t!=null}function vo(){ke(ut),ke(Ze)}function yf(t,i,o){if(Ze.current!==Mn)throw Error(n(168));Se(Ze,i),Se(ut,o)}function vf(t,i,o){var a=t.stateNode;if(i=i.childContextTypes,typeof a.getChildContext!="function")return o;a=a.getChildContext();for(var c in a)if(!(c in i))throw Error(n(108,Ee(t)||"Unknown",c));return j({},o,a)}function wo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Mn,ur=Ze.current,Se(Ze,t),Se(ut,ut.current),!0}function wf(t,i,o){var a=t.stateNode;if(!a)throw Error(n(169));o?(t=vf(t,i,ur),a.__reactInternalMemoizedMergedChildContext=t,ke(ut),ke(Ze),Se(Ze,t)):ke(ut),Se(ut,o)}var cn=null,Eo=!1,Ja=!1;function Ef(t){cn===null?cn=[t]:cn.push(t)}function Nw(t){Eo=!0,Ef(t)}function bn(){if(!Ja&&cn!==null){Ja=!0;var t=0,i=fe;try{var o=cn;for(fe=1;t<o.length;t++){var a=o[t];do a=a(!0);while(a!==null)}cn=null,Eo=!1}catch(c){throw cn!==null&&(cn=cn.slice(t+1)),Sh(wa,bn),c}finally{fe=i,Ja=!1}}return null}var Yr=[],Qr=0,So=null,Io=0,Nt=[],Pt=0,cr=null,dn=1,hn="";function dr(t,i){Yr[Qr++]=Io,Yr[Qr++]=So,So=t,Io=i}function Sf(t,i,o){Nt[Pt++]=dn,Nt[Pt++]=hn,Nt[Pt++]=cr,cr=t;var a=dn;t=hn;var c=32-Ut(a)-1;a&=~(1<<c),o+=1;var h=32-Ut(i)+c;if(30<h){var m=c-c%5;h=(a&(1<<m)-1).toString(32),a>>=m,c-=m,dn=1<<32-Ut(i)+c|o<<c|a,hn=h+t}else dn=1<<h|o<<c|a,hn=t}function Za(t){t.return!==null&&(dr(t,1),Sf(t,1,0))}function eu(t){for(;t===So;)So=Yr[--Qr],Yr[Qr]=null,Io=Yr[--Qr],Yr[Qr]=null;for(;t===cr;)cr=Nt[--Pt],Nt[Pt]=null,hn=Nt[--Pt],Nt[Pt]=null,dn=Nt[--Pt],Nt[Pt]=null}var Et=null,St=null,Ne=!1,zt=null;function If(t,i){var o=Dt(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Cf(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Et=t,St=Dn(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Et=t,St=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=cr!==null?{id:dn,overflow:hn}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Dt(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Et=t,St=null,!0):!1;default:return!1}}function tu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function nu(t){if(Ne){var i=St;if(i){var o=i;if(!Cf(t,i)){if(tu(t))throw Error(n(418));i=Dn(o.nextSibling);var a=Et;i&&Cf(t,i)?If(a,o):(t.flags=t.flags&-4097|2,Ne=!1,Et=t)}}else{if(tu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ne=!1,Et=t}}}function Tf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Et=t}function Co(t){if(t!==Et)return!1;if(!Ne)return Tf(t),Ne=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!qa(t.type,t.memoizedProps)),i&&(i=St)){if(tu(t))throw kf(),Error(n(418));for(;i;)If(t,i),i=Dn(i.nextSibling)}if(Tf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){St=Dn(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}St=null}}else St=Et?Dn(t.stateNode.nextSibling):null;return!0}function kf(){for(var t=St;t;)t=Dn(t.nextSibling)}function Xr(){St=Et=null,Ne=!1}function ru(t){zt===null?zt=[t]:zt.push(t)}var Pw=le.ReactCurrentBatchConfig;function ts(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var a=o.stateNode}if(!a)throw Error(n(147,t));var c=a,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(m){var _=c.refs;m===null?delete _[h]:_[h]=m},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function To(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Rf(t){var i=t._init;return i(t._payload)}function Nf(t){function i(C,S){if(t){var T=C.deletions;T===null?(C.deletions=[S],C.flags|=16):T.push(S)}}function o(C,S){if(!t)return null;for(;S!==null;)i(C,S),S=S.sibling;return null}function a(C,S){for(C=new Map;S!==null;)S.key!==null?C.set(S.key,S):C.set(S.index,S),S=S.sibling;return C}function c(C,S){return C=$n(C,S),C.index=0,C.sibling=null,C}function h(C,S,T){return C.index=T,t?(T=C.alternate,T!==null?(T=T.index,T<S?(C.flags|=2,S):T):(C.flags|=2,S)):(C.flags|=1048576,S)}function m(C){return t&&C.alternate===null&&(C.flags|=2),C}function _(C,S,T,x){return S===null||S.tag!==6?(S=Ku(T,C.mode,x),S.return=C,S):(S=c(S,T),S.return=C,S)}function E(C,S,T,x){var B=T.type;return B===Q?A(C,S,T.props.children,x,T.key):S!==null&&(S.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===at&&Rf(B)===S.type)?(x=c(S,T.props),x.ref=ts(C,S,T),x.return=C,x):(x=Yo(T.type,T.key,T.props,null,C.mode,x),x.ref=ts(C,S,T),x.return=C,x)}function k(C,S,T,x){return S===null||S.tag!==4||S.stateNode.containerInfo!==T.containerInfo||S.stateNode.implementation!==T.implementation?(S=Yu(T,C.mode,x),S.return=C,S):(S=c(S,T.children||[]),S.return=C,S)}function A(C,S,T,x,B){return S===null||S.tag!==7?(S=vr(T,C.mode,x,B),S.return=C,S):(S=c(S,T),S.return=C,S)}function O(C,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return S=Ku(""+S,C.mode,T),S.return=C,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ue:return T=Yo(S.type,S.key,S.props,null,C.mode,T),T.ref=ts(C,null,S),T.return=C,T;case Z:return S=Yu(S,C.mode,T),S.return=C,S;case at:var x=S._init;return O(C,x(S._payload),T)}if(Ai(S)||q(S))return S=vr(S,C.mode,T,null),S.return=C,S;To(C,S)}return null}function N(C,S,T,x){var B=S!==null?S.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return B!==null?null:_(C,S,""+T,x);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Ue:return T.key===B?E(C,S,T,x):null;case Z:return T.key===B?k(C,S,T,x):null;case at:return B=T._init,N(C,S,B(T._payload),x)}if(Ai(T)||q(T))return B!==null?null:A(C,S,T,x,null);To(C,T)}return null}function b(C,S,T,x,B){if(typeof x=="string"&&x!==""||typeof x=="number")return C=C.get(T)||null,_(S,C,""+x,B);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ue:return C=C.get(x.key===null?T:x.key)||null,E(S,C,x,B);case Z:return C=C.get(x.key===null?T:x.key)||null,k(S,C,x,B);case at:var H=x._init;return b(C,S,T,H(x._payload),B)}if(Ai(x)||q(x))return C=C.get(T)||null,A(S,C,x,B,null);To(S,x)}return null}function z(C,S,T,x){for(var B=null,H=null,G=S,Y=S=0,$e=null;G!==null&&Y<T.length;Y++){G.index>Y?($e=G,G=null):$e=G.sibling;var ce=N(C,G,T[Y],x);if(ce===null){G===null&&(G=$e);break}t&&G&&ce.alternate===null&&i(C,G),S=h(ce,S,Y),H===null?B=ce:H.sibling=ce,H=ce,G=$e}if(Y===T.length)return o(C,G),Ne&&dr(C,Y),B;if(G===null){for(;Y<T.length;Y++)G=O(C,T[Y],x),G!==null&&(S=h(G,S,Y),H===null?B=G:H.sibling=G,H=G);return Ne&&dr(C,Y),B}for(G=a(C,G);Y<T.length;Y++)$e=b(G,C,Y,T[Y],x),$e!==null&&(t&&$e.alternate!==null&&G.delete($e.key===null?Y:$e.key),S=h($e,S,Y),H===null?B=$e:H.sibling=$e,H=$e);return t&&G.forEach(function(Hn){return i(C,Hn)}),Ne&&dr(C,Y),B}function W(C,S,T,x){var B=q(T);if(typeof B!="function")throw Error(n(150));if(T=B.call(T),T==null)throw Error(n(151));for(var H=B=null,G=S,Y=S=0,$e=null,ce=T.next();G!==null&&!ce.done;Y++,ce=T.next()){G.index>Y?($e=G,G=null):$e=G.sibling;var Hn=N(C,G,ce.value,x);if(Hn===null){G===null&&(G=$e);break}t&&G&&Hn.alternate===null&&i(C,G),S=h(Hn,S,Y),H===null?B=Hn:H.sibling=Hn,H=Hn,G=$e}if(ce.done)return o(C,G),Ne&&dr(C,Y),B;if(G===null){for(;!ce.done;Y++,ce=T.next())ce=O(C,ce.value,x),ce!==null&&(S=h(ce,S,Y),H===null?B=ce:H.sibling=ce,H=ce);return Ne&&dr(C,Y),B}for(G=a(C,G);!ce.done;Y++,ce=T.next())ce=b(G,C,Y,ce.value,x),ce!==null&&(t&&ce.alternate!==null&&G.delete(ce.key===null?Y:ce.key),S=h(ce,S,Y),H===null?B=ce:H.sibling=ce,H=ce);return t&&G.forEach(function(a0){return i(C,a0)}),Ne&&dr(C,Y),B}function be(C,S,T,x){if(typeof T=="object"&&T!==null&&T.type===Q&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case Ue:e:{for(var B=T.key,H=S;H!==null;){if(H.key===B){if(B=T.type,B===Q){if(H.tag===7){o(C,H.sibling),S=c(H,T.props.children),S.return=C,C=S;break e}}else if(H.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===at&&Rf(B)===H.type){o(C,H.sibling),S=c(H,T.props),S.ref=ts(C,H,T),S.return=C,C=S;break e}o(C,H);break}else i(C,H);H=H.sibling}T.type===Q?(S=vr(T.props.children,C.mode,x,T.key),S.return=C,C=S):(x=Yo(T.type,T.key,T.props,null,C.mode,x),x.ref=ts(C,S,T),x.return=C,C=x)}return m(C);case Z:e:{for(H=T.key;S!==null;){if(S.key===H)if(S.tag===4&&S.stateNode.containerInfo===T.containerInfo&&S.stateNode.implementation===T.implementation){o(C,S.sibling),S=c(S,T.children||[]),S.return=C,C=S;break e}else{o(C,S);break}else i(C,S);S=S.sibling}S=Yu(T,C.mode,x),S.return=C,C=S}return m(C);case at:return H=T._init,be(C,S,H(T._payload),x)}if(Ai(T))return z(C,S,T,x);if(q(T))return W(C,S,T,x);To(C,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,S!==null&&S.tag===6?(o(C,S.sibling),S=c(S,T),S.return=C,C=S):(o(C,S),S=Ku(T,C.mode,x),S.return=C,C=S),m(C)):o(C,S)}return be}var Jr=Nf(!0),Pf=Nf(!1),ko=Ln(null),Ro=null,Zr=null,iu=null;function su(){iu=Zr=Ro=null}function ou(t){var i=ko.current;ke(ko),t._currentValue=i}function lu(t,i,o){for(;t!==null;){var a=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,a!==null&&(a.childLanes|=i)):a!==null&&(a.childLanes&i)!==i&&(a.childLanes|=i),t===o)break;t=t.return}}function ei(t,i){Ro=t,iu=Zr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&i&&(dt=!0),t.firstContext=null)}function At(t){var i=t._currentValue;if(iu!==t)if(t={context:t,memoizedValue:i,next:null},Zr===null){if(Ro===null)throw Error(n(308));Zr=t,Ro.dependencies={lanes:0,firstContext:t}}else Zr=Zr.next=t;return i}var hr=null;function au(t){hr===null?hr=[t]:hr.push(t)}function Af(t,i,o,a){var c=i.interleaved;return c===null?(o.next=o,au(i)):(o.next=c.next,c.next=o),i.interleaved=o,fn(t,a)}function fn(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Fn=!1;function uu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Of(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function pn(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Un(t,i,o){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,oe&2){var c=a.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),a.pending=i,fn(t,o)}return c=a.interleaved,c===null?(i.next=i,au(a)):(i.next=c.next,c.next=i),a.interleaved=i,fn(t,o)}function No(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var a=i.lanes;a&=t.pendingLanes,o|=a,i.lanes=o,Ia(t,o)}}function xf(t,i){var o=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,o===a)){var c=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var m={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?c=h=m:h=h.next=m,o=o.next}while(o!==null);h===null?c=h=i:h=h.next=i}else c=h=i;o={baseState:a.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:a.shared,effects:a.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Po(t,i,o,a){var c=t.updateQueue;Fn=!1;var h=c.firstBaseUpdate,m=c.lastBaseUpdate,_=c.shared.pending;if(_!==null){c.shared.pending=null;var E=_,k=E.next;E.next=null,m===null?h=k:m.next=k,m=E;var A=t.alternate;A!==null&&(A=A.updateQueue,_=A.lastBaseUpdate,_!==m&&(_===null?A.firstBaseUpdate=k:_.next=k,A.lastBaseUpdate=E))}if(h!==null){var O=c.baseState;m=0,A=k=E=null,_=h;do{var N=_.lane,b=_.eventTime;if((a&N)===N){A!==null&&(A=A.next={eventTime:b,lane:0,tag:_.tag,payload:_.payload,callback:_.callback,next:null});e:{var z=t,W=_;switch(N=i,b=o,W.tag){case 1:if(z=W.payload,typeof z=="function"){O=z.call(b,O,N);break e}O=z;break e;case 3:z.flags=z.flags&-65537|128;case 0:if(z=W.payload,N=typeof z=="function"?z.call(b,O,N):z,N==null)break e;O=j({},O,N);break e;case 2:Fn=!0}}_.callback!==null&&_.lane!==0&&(t.flags|=64,N=c.effects,N===null?c.effects=[_]:N.push(_))}else b={eventTime:b,lane:N,tag:_.tag,payload:_.payload,callback:_.callback,next:null},A===null?(k=A=b,E=O):A=A.next=b,m|=N;if(_=_.next,_===null){if(_=c.shared.pending,_===null)break;N=_,_=N.next,N.next=null,c.lastBaseUpdate=N,c.shared.pending=null}}while(!0);if(A===null&&(E=O),c.baseState=E,c.firstBaseUpdate=k,c.lastBaseUpdate=A,i=c.shared.interleaved,i!==null){c=i;do m|=c.lane,c=c.next;while(c!==i)}else h===null&&(c.shared.lanes=0);mr|=m,t.lanes=m,t.memoizedState=O}}function Df(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var a=t[i],c=a.callback;if(c!==null){if(a.callback=null,a=o,typeof c!="function")throw Error(n(191,c));c.call(a)}}}var ns={},en=Ln(ns),rs=Ln(ns),is=Ln(ns);function fr(t){if(t===ns)throw Error(n(174));return t}function cu(t,i){switch(Se(is,i),Se(rs,t),Se(en,ns),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:da(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=da(i,t)}ke(en),Se(en,i)}function ti(){ke(en),ke(rs),ke(is)}function Lf(t){fr(is.current);var i=fr(en.current),o=da(i,t.type);i!==o&&(Se(rs,t),Se(en,o))}function du(t){rs.current===t&&(ke(en),ke(rs))}var Pe=Ln(0);function Ao(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var hu=[];function fu(){for(var t=0;t<hu.length;t++)hu[t]._workInProgressVersionPrimary=null;hu.length=0}var Oo=le.ReactCurrentDispatcher,pu=le.ReactCurrentBatchConfig,pr=0,Ae=null,je=null,Be=null,xo=!1,ss=!1,os=0,Aw=0;function et(){throw Error(n(321))}function mu(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!jt(t[o],i[o]))return!1;return!0}function gu(t,i,o,a,c,h){if(pr=h,Ae=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Oo.current=t===null||t.memoizedState===null?Lw:Mw,t=o(a,c),ss){h=0;do{if(ss=!1,os=0,25<=h)throw Error(n(301));h+=1,Be=je=null,i.updateQueue=null,Oo.current=bw,t=o(a,c)}while(ss)}if(Oo.current=Mo,i=je!==null&&je.next!==null,pr=0,Be=je=Ae=null,xo=!1,i)throw Error(n(300));return t}function _u(){var t=os!==0;return os=0,t}function tn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Ae.memoizedState=Be=t:Be=Be.next=t,Be}function Ot(){if(je===null){var t=Ae.alternate;t=t!==null?t.memoizedState:null}else t=je.next;var i=Be===null?Ae.memoizedState:Be.next;if(i!==null)Be=i,je=t;else{if(t===null)throw Error(n(310));je=t,t={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Be===null?Ae.memoizedState=Be=t:Be=Be.next=t}return Be}function ls(t,i){return typeof i=="function"?i(t):i}function yu(t){var i=Ot(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=je,c=a.baseQueue,h=o.pending;if(h!==null){if(c!==null){var m=c.next;c.next=h.next,h.next=m}a.baseQueue=c=h,o.pending=null}if(c!==null){h=c.next,a=a.baseState;var _=m=null,E=null,k=h;do{var A=k.lane;if((pr&A)===A)E!==null&&(E=E.next={lane:0,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),a=k.hasEagerState?k.eagerState:t(a,k.action);else{var O={lane:A,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null};E===null?(_=E=O,m=a):E=E.next=O,Ae.lanes|=A,mr|=A}k=k.next}while(k!==null&&k!==h);E===null?m=a:E.next=_,jt(a,i.memoizedState)||(dt=!0),i.memoizedState=a,i.baseState=m,i.baseQueue=E,o.lastRenderedState=a}if(t=o.interleaved,t!==null){c=t;do h=c.lane,Ae.lanes|=h,mr|=h,c=c.next;while(c!==t)}else c===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function vu(t){var i=Ot(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=o.dispatch,c=o.pending,h=i.memoizedState;if(c!==null){o.pending=null;var m=c=c.next;do h=t(h,m.action),m=m.next;while(m!==c);jt(h,i.memoizedState)||(dt=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,a]}function Mf(){}function bf(t,i){var o=Ae,a=Ot(),c=i(),h=!jt(a.memoizedState,c);if(h&&(a.memoizedState=c,dt=!0),a=a.queue,wu(jf.bind(null,o,a,t),[t]),a.getSnapshot!==i||h||Be!==null&&Be.memoizedState.tag&1){if(o.flags|=2048,as(9,Uf.bind(null,o,a,c,i),void 0,null),Ve===null)throw Error(n(349));pr&30||Ff(o,i,c)}return c}function Ff(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Ae.updateQueue,i===null?(i={lastEffect:null,stores:null},Ae.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Uf(t,i,o,a){i.value=o,i.getSnapshot=a,zf(i)&&Wf(t)}function jf(t,i,o){return o(function(){zf(i)&&Wf(t)})}function zf(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!jt(t,o)}catch{return!0}}function Wf(t){var i=fn(t,1);i!==null&&$t(i,t,1,-1)}function Bf(t){var i=tn();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ls,lastRenderedState:t},i.queue=t,t=t.dispatch=Dw.bind(null,Ae,t),[i.memoizedState,t]}function as(t,i,o,a){return t={tag:t,create:i,destroy:o,deps:a,next:null},i=Ae.updateQueue,i===null?(i={lastEffect:null,stores:null},Ae.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(a=o.next,o.next=t,t.next=a,i.lastEffect=t)),t}function Vf(){return Ot().memoizedState}function Do(t,i,o,a){var c=tn();Ae.flags|=t,c.memoizedState=as(1|i,o,void 0,a===void 0?null:a)}function Lo(t,i,o,a){var c=Ot();a=a===void 0?null:a;var h=void 0;if(je!==null){var m=je.memoizedState;if(h=m.destroy,a!==null&&mu(a,m.deps)){c.memoizedState=as(i,o,h,a);return}}Ae.flags|=t,c.memoizedState=as(1|i,o,h,a)}function $f(t,i){return Do(8390656,8,t,i)}function wu(t,i){return Lo(2048,8,t,i)}function Hf(t,i){return Lo(4,2,t,i)}function Gf(t,i){return Lo(4,4,t,i)}function qf(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Kf(t,i,o){return o=o!=null?o.concat([t]):null,Lo(4,4,qf.bind(null,i,t),o)}function Eu(){}function Yf(t,i){var o=Ot();i=i===void 0?null:i;var a=o.memoizedState;return a!==null&&i!==null&&mu(i,a[1])?a[0]:(o.memoizedState=[t,i],t)}function Qf(t,i){var o=Ot();i=i===void 0?null:i;var a=o.memoizedState;return a!==null&&i!==null&&mu(i,a[1])?a[0]:(t=t(),o.memoizedState=[t,i],t)}function Xf(t,i,o){return pr&21?(jt(o,i)||(o=kh(),Ae.lanes|=o,mr|=o,t.baseState=!0),i):(t.baseState&&(t.baseState=!1,dt=!0),t.memoizedState=o)}function Ow(t,i){var o=fe;fe=o!==0&&4>o?o:4,t(!0);var a=pu.transition;pu.transition={};try{t(!1),i()}finally{fe=o,pu.transition=a}}function Jf(){return Ot().memoizedState}function xw(t,i,o){var a=Bn(t);if(o={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null},Zf(t))ep(i,o);else if(o=Af(t,i,o,a),o!==null){var c=st();$t(o,t,a,c),tp(o,i,a)}}function Dw(t,i,o){var a=Bn(t),c={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null};if(Zf(t))ep(i,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var m=i.lastRenderedState,_=h(m,o);if(c.hasEagerState=!0,c.eagerState=_,jt(_,m)){var E=i.interleaved;E===null?(c.next=c,au(i)):(c.next=E.next,E.next=c),i.interleaved=c;return}}catch{}finally{}o=Af(t,i,c,a),o!==null&&(c=st(),$t(o,t,a,c),tp(o,i,a))}}function Zf(t){var i=t.alternate;return t===Ae||i!==null&&i===Ae}function ep(t,i){ss=xo=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function tp(t,i,o){if(o&4194240){var a=i.lanes;a&=t.pendingLanes,o|=a,i.lanes=o,Ia(t,o)}}var Mo={readContext:At,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useInsertionEffect:et,useLayoutEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useMutableSource:et,useSyncExternalStore:et,useId:et,unstable_isNewReconciler:!1},Lw={readContext:At,useCallback:function(t,i){return tn().memoizedState=[t,i===void 0?null:i],t},useContext:At,useEffect:$f,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Do(4194308,4,qf.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Do(4194308,4,t,i)},useInsertionEffect:function(t,i){return Do(4,2,t,i)},useMemo:function(t,i){var o=tn();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var a=tn();return i=o!==void 0?o(i):i,a.memoizedState=a.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},a.queue=t,t=t.dispatch=xw.bind(null,Ae,t),[a.memoizedState,t]},useRef:function(t){var i=tn();return t={current:t},i.memoizedState=t},useState:Bf,useDebugValue:Eu,useDeferredValue:function(t){return tn().memoizedState=t},useTransition:function(){var t=Bf(!1),i=t[0];return t=Ow.bind(null,t[1]),tn().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var a=Ae,c=tn();if(Ne){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),Ve===null)throw Error(n(349));pr&30||Ff(a,i,o)}c.memoizedState=o;var h={value:o,getSnapshot:i};return c.queue=h,$f(jf.bind(null,a,h,t),[t]),a.flags|=2048,as(9,Uf.bind(null,a,h,o,i),void 0,null),o},useId:function(){var t=tn(),i=Ve.identifierPrefix;if(Ne){var o=hn,a=dn;o=(a&~(1<<32-Ut(a)-1)).toString(32)+o,i=":"+i+"R"+o,o=os++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=Aw++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},Mw={readContext:At,useCallback:Yf,useContext:At,useEffect:wu,useImperativeHandle:Kf,useInsertionEffect:Hf,useLayoutEffect:Gf,useMemo:Qf,useReducer:yu,useRef:Vf,useState:function(){return yu(ls)},useDebugValue:Eu,useDeferredValue:function(t){var i=Ot();return Xf(i,je.memoizedState,t)},useTransition:function(){var t=yu(ls)[0],i=Ot().memoizedState;return[t,i]},useMutableSource:Mf,useSyncExternalStore:bf,useId:Jf,unstable_isNewReconciler:!1},bw={readContext:At,useCallback:Yf,useContext:At,useEffect:wu,useImperativeHandle:Kf,useInsertionEffect:Hf,useLayoutEffect:Gf,useMemo:Qf,useReducer:vu,useRef:Vf,useState:function(){return vu(ls)},useDebugValue:Eu,useDeferredValue:function(t){var i=Ot();return je===null?i.memoizedState=t:Xf(i,je.memoizedState,t)},useTransition:function(){var t=vu(ls)[0],i=Ot().memoizedState;return[t,i]},useMutableSource:Mf,useSyncExternalStore:bf,useId:Jf,unstable_isNewReconciler:!1};function Wt(t,i){if(t&&t.defaultProps){i=j({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Su(t,i,o,a){i=t.memoizedState,o=o(a,i),o=o==null?i:j({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var bo={isMounted:function(t){return(t=t._reactInternals)?lr(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var a=st(),c=Bn(t),h=pn(a,c);h.payload=i,o!=null&&(h.callback=o),i=Un(t,h,c),i!==null&&($t(i,t,c,a),No(i,t,c))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var a=st(),c=Bn(t),h=pn(a,c);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=Un(t,h,c),i!==null&&($t(i,t,c,a),No(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=st(),a=Bn(t),c=pn(o,a);c.tag=2,i!=null&&(c.callback=i),i=Un(t,c,a),i!==null&&($t(i,t,a,o),No(i,t,a))}};function np(t,i,o,a,c,h,m){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,h,m):i.prototype&&i.prototype.isPureReactComponent?!Ki(o,a)||!Ki(c,h):!0}function rp(t,i,o){var a=!1,c=Mn,h=i.contextType;return typeof h=="object"&&h!==null?h=At(h):(c=ct(i)?ur:Ze.current,a=i.contextTypes,h=(a=a!=null)?Kr(t,c):Mn),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=bo,t.stateNode=i,i._reactInternals=t,a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),i}function ip(t,i,o,a){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,a),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,a),i.state!==t&&bo.enqueueReplaceState(i,i.state,null)}function Iu(t,i,o,a){var c=t.stateNode;c.props=o,c.state=t.memoizedState,c.refs={},uu(t);var h=i.contextType;typeof h=="object"&&h!==null?c.context=At(h):(h=ct(i)?ur:Ze.current,c.context=Kr(t,h)),c.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Su(t,i,h,o),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&bo.enqueueReplaceState(c,c.state,null),Po(t,o,c,a),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function ni(t,i){try{var o="",a=i;do o+=ae(a),a=a.return;while(a);var c=o}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:c,digest:null}}function Cu(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Tu(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var Fw=typeof WeakMap=="function"?WeakMap:Map;function sp(t,i,o){o=pn(-1,o),o.tag=3,o.payload={element:null};var a=i.value;return o.callback=function(){Vo||(Vo=!0,zu=a),Tu(t,i)},o}function op(t,i,o){o=pn(-1,o),o.tag=3;var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var c=i.value;o.payload=function(){return a(c)},o.callback=function(){Tu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Tu(t,i),typeof a!="function"&&(zn===null?zn=new Set([this]):zn.add(this));var m=i.stack;this.componentDidCatch(i.value,{componentStack:m!==null?m:""})}),o}function lp(t,i,o){var a=t.pingCache;if(a===null){a=t.pingCache=new Fw;var c=new Set;a.set(i,c)}else c=a.get(i),c===void 0&&(c=new Set,a.set(i,c));c.has(o)||(c.add(o),t=Xw.bind(null,t,i,o),i.then(t,t))}function ap(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function up(t,i,o,a,c){return t.mode&1?(t.flags|=65536,t.lanes=c,t):(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=pn(-1,1),i.tag=2,Un(o,i,1))),o.lanes|=1),t)}var Uw=le.ReactCurrentOwner,dt=!1;function it(t,i,o,a){i.child=t===null?Pf(i,null,o,a):Jr(i,t.child,o,a)}function cp(t,i,o,a,c){o=o.render;var h=i.ref;return ei(i,c),a=gu(t,i,o,a,h,c),o=_u(),t!==null&&!dt?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,mn(t,i,c)):(Ne&&o&&Za(i),i.flags|=1,it(t,i,a,c),i.child)}function dp(t,i,o,a,c){if(t===null){var h=o.type;return typeof h=="function"&&!qu(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,hp(t,i,h,a,c)):(t=Yo(o.type,null,a,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,!(t.lanes&c)){var m=h.memoizedProps;if(o=o.compare,o=o!==null?o:Ki,o(m,a)&&t.ref===i.ref)return mn(t,i,c)}return i.flags|=1,t=$n(h,a),t.ref=i.ref,t.return=i,i.child=t}function hp(t,i,o,a,c){if(t!==null){var h=t.memoizedProps;if(Ki(h,a)&&t.ref===i.ref)if(dt=!1,i.pendingProps=a=h,(t.lanes&c)!==0)t.flags&131072&&(dt=!0);else return i.lanes=t.lanes,mn(t,i,c)}return ku(t,i,o,a,c)}function fp(t,i,o){var a=i.pendingProps,c=a.children,h=t!==null?t.memoizedState:null;if(a.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(ii,It),It|=o;else{if(!(o&1073741824))return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Se(ii,It),It|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=h!==null?h.baseLanes:o,Se(ii,It),It|=a}else h!==null?(a=h.baseLanes|o,i.memoizedState=null):a=o,Se(ii,It),It|=a;return it(t,i,c,o),i.child}function pp(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function ku(t,i,o,a,c){var h=ct(o)?ur:Ze.current;return h=Kr(i,h),ei(i,c),o=gu(t,i,o,a,h,c),a=_u(),t!==null&&!dt?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,mn(t,i,c)):(Ne&&a&&Za(i),i.flags|=1,it(t,i,o,c),i.child)}function mp(t,i,o,a,c){if(ct(o)){var h=!0;wo(i)}else h=!1;if(ei(i,c),i.stateNode===null)Uo(t,i),rp(i,o,a),Iu(i,o,a,c),a=!0;else if(t===null){var m=i.stateNode,_=i.memoizedProps;m.props=_;var E=m.context,k=o.contextType;typeof k=="object"&&k!==null?k=At(k):(k=ct(o)?ur:Ze.current,k=Kr(i,k));var A=o.getDerivedStateFromProps,O=typeof A=="function"||typeof m.getSnapshotBeforeUpdate=="function";O||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(_!==a||E!==k)&&ip(i,m,a,k),Fn=!1;var N=i.memoizedState;m.state=N,Po(i,a,m,c),E=i.memoizedState,_!==a||N!==E||ut.current||Fn?(typeof A=="function"&&(Su(i,o,A,a),E=i.memoizedState),(_=Fn||np(i,o,_,a,N,E,k))?(O||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=a,i.memoizedState=E),m.props=a,m.state=E,m.context=k,a=_):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),a=!1)}else{m=i.stateNode,Of(t,i),_=i.memoizedProps,k=i.type===i.elementType?_:Wt(i.type,_),m.props=k,O=i.pendingProps,N=m.context,E=o.contextType,typeof E=="object"&&E!==null?E=At(E):(E=ct(o)?ur:Ze.current,E=Kr(i,E));var b=o.getDerivedStateFromProps;(A=typeof b=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(_!==O||N!==E)&&ip(i,m,a,E),Fn=!1,N=i.memoizedState,m.state=N,Po(i,a,m,c);var z=i.memoizedState;_!==O||N!==z||ut.current||Fn?(typeof b=="function"&&(Su(i,o,b,a),z=i.memoizedState),(k=Fn||np(i,o,k,a,N,z,E)||!1)?(A||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(a,z,E),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(a,z,E)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||_===t.memoizedProps&&N===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&N===t.memoizedState||(i.flags|=1024),i.memoizedProps=a,i.memoizedState=z),m.props=a,m.state=z,m.context=E,a=k):(typeof m.componentDidUpdate!="function"||_===t.memoizedProps&&N===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&N===t.memoizedState||(i.flags|=1024),a=!1)}return Ru(t,i,o,a,h,c)}function Ru(t,i,o,a,c,h){pp(t,i);var m=(i.flags&128)!==0;if(!a&&!m)return c&&wf(i,o,!1),mn(t,i,h);a=i.stateNode,Uw.current=i;var _=m&&typeof o.getDerivedStateFromError!="function"?null:a.render();return i.flags|=1,t!==null&&m?(i.child=Jr(i,t.child,null,h),i.child=Jr(i,null,_,h)):it(t,i,_,h),i.memoizedState=a.state,c&&wf(i,o,!0),i.child}function gp(t){var i=t.stateNode;i.pendingContext?yf(t,i.pendingContext,i.pendingContext!==i.context):i.context&&yf(t,i.context,!1),cu(t,i.containerInfo)}function _p(t,i,o,a,c){return Xr(),ru(c),i.flags|=256,it(t,i,o,a),i.child}var Nu={dehydrated:null,treeContext:null,retryLane:0};function Pu(t){return{baseLanes:t,cachePool:null,transitions:null}}function yp(t,i,o){var a=i.pendingProps,c=Pe.current,h=!1,m=(i.flags&128)!==0,_;if((_=m)||(_=t!==null&&t.memoizedState===null?!1:(c&2)!==0),_?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),Se(Pe,c&1),t===null)return nu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(i.mode&1?t.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(m=a.children,t=a.fallback,h?(a=i.mode,h=i.child,m={mode:"hidden",children:m},!(a&1)&&h!==null?(h.childLanes=0,h.pendingProps=m):h=Qo(m,a,0,null),t=vr(t,a,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Pu(o),i.memoizedState=Nu,t):Au(i,m));if(c=t.memoizedState,c!==null&&(_=c.dehydrated,_!==null))return jw(t,i,m,a,_,c,o);if(h){h=a.fallback,m=i.mode,c=t.child,_=c.sibling;var E={mode:"hidden",children:a.children};return!(m&1)&&i.child!==c?(a=i.child,a.childLanes=0,a.pendingProps=E,i.deletions=null):(a=$n(c,E),a.subtreeFlags=c.subtreeFlags&14680064),_!==null?h=$n(_,h):(h=vr(h,m,o,null),h.flags|=2),h.return=i,a.return=i,a.sibling=h,i.child=a,a=h,h=i.child,m=t.child.memoizedState,m=m===null?Pu(o):{baseLanes:m.baseLanes|o,cachePool:null,transitions:m.transitions},h.memoizedState=m,h.childLanes=t.childLanes&~o,i.memoizedState=Nu,a}return h=t.child,t=h.sibling,a=$n(h,{mode:"visible",children:a.children}),!(i.mode&1)&&(a.lanes=o),a.return=i,a.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=a,i.memoizedState=null,a}function Au(t,i){return i=Qo({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Fo(t,i,o,a){return a!==null&&ru(a),Jr(i,t.child,null,o),t=Au(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function jw(t,i,o,a,c,h,m){if(o)return i.flags&256?(i.flags&=-257,a=Cu(Error(n(422))),Fo(t,i,m,a)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=a.fallback,c=i.mode,a=Qo({mode:"visible",children:a.children},c,0,null),h=vr(h,c,m,null),h.flags|=2,a.return=i,h.return=i,a.sibling=h,i.child=a,i.mode&1&&Jr(i,t.child,null,m),i.child.memoizedState=Pu(m),i.memoizedState=Nu,h);if(!(i.mode&1))return Fo(t,i,m,null);if(c.data==="$!"){if(a=c.nextSibling&&c.nextSibling.dataset,a)var _=a.dgst;return a=_,h=Error(n(419)),a=Cu(h,a,void 0),Fo(t,i,m,a)}if(_=(m&t.childLanes)!==0,dt||_){if(a=Ve,a!==null){switch(m&-m){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=c&(a.suspendedLanes|m)?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,fn(t,c),$t(a,t,c,-1))}return Gu(),a=Cu(Error(n(421))),Fo(t,i,m,a)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=Jw.bind(null,t),c._reactRetry=i,null):(t=h.treeContext,St=Dn(c.nextSibling),Et=i,Ne=!0,zt=null,t!==null&&(Nt[Pt++]=dn,Nt[Pt++]=hn,Nt[Pt++]=cr,dn=t.id,hn=t.overflow,cr=i),i=Au(i,a.children),i.flags|=4096,i)}function vp(t,i,o){t.lanes|=i;var a=t.alternate;a!==null&&(a.lanes|=i),lu(t.return,i,o)}function Ou(t,i,o,a,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:a,tail:o,tailMode:c}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=a,h.tail=o,h.tailMode=c)}function wp(t,i,o){var a=i.pendingProps,c=a.revealOrder,h=a.tail;if(it(t,i,a.children,o),a=Pe.current,a&2)a=a&1|2,i.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&vp(t,o,i);else if(t.tag===19)vp(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}if(Se(Pe,a),!(i.mode&1))i.memoizedState=null;else switch(c){case"forwards":for(o=i.child,c=null;o!==null;)t=o.alternate,t!==null&&Ao(t)===null&&(c=o),o=o.sibling;o=c,o===null?(c=i.child,i.child=null):(c=o.sibling,o.sibling=null),Ou(i,!1,c,o,h);break;case"backwards":for(o=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&Ao(t)===null){i.child=c;break}t=c.sibling,c.sibling=o,o=c,c=t}Ou(i,!0,o,null,h);break;case"together":Ou(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Uo(t,i){!(i.mode&1)&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function mn(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),mr|=i.lanes,!(o&i.childLanes))return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=$n(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=$n(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function zw(t,i,o){switch(i.tag){case 3:gp(i),Xr();break;case 5:Lf(i);break;case 1:ct(i.type)&&wo(i);break;case 4:cu(i,i.stateNode.containerInfo);break;case 10:var a=i.type._context,c=i.memoizedProps.value;Se(ko,a._currentValue),a._currentValue=c;break;case 13:if(a=i.memoizedState,a!==null)return a.dehydrated!==null?(Se(Pe,Pe.current&1),i.flags|=128,null):o&i.child.childLanes?yp(t,i,o):(Se(Pe,Pe.current&1),t=mn(t,i,o),t!==null?t.sibling:null);Se(Pe,Pe.current&1);break;case 19:if(a=(o&i.childLanes)!==0,t.flags&128){if(a)return wp(t,i,o);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Se(Pe,Pe.current),a)break;return null;case 22:case 23:return i.lanes=0,fp(t,i,o)}return mn(t,i,o)}var Ep,xu,Sp,Ip;Ep=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},xu=function(){},Sp=function(t,i,o,a){var c=t.memoizedProps;if(c!==a){t=i.stateNode,fr(en.current);var h=null;switch(o){case"input":c=la(t,c),a=la(t,a),h=[];break;case"select":c=j({},c,{value:void 0}),a=j({},a,{value:void 0}),h=[];break;case"textarea":c=ca(t,c),a=ca(t,a),h=[];break;default:typeof c.onClick!="function"&&typeof a.onClick=="function"&&(t.onclick=_o)}ha(o,a);var m;o=null;for(k in c)if(!a.hasOwnProperty(k)&&c.hasOwnProperty(k)&&c[k]!=null)if(k==="style"){var _=c[k];for(m in _)_.hasOwnProperty(m)&&(o||(o={}),o[m]="")}else k!=="dangerouslySetInnerHTML"&&k!=="children"&&k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&k!=="autoFocus"&&(l.hasOwnProperty(k)?h||(h=[]):(h=h||[]).push(k,null));for(k in a){var E=a[k];if(_=c!=null?c[k]:void 0,a.hasOwnProperty(k)&&E!==_&&(E!=null||_!=null))if(k==="style")if(_){for(m in _)!_.hasOwnProperty(m)||E&&E.hasOwnProperty(m)||(o||(o={}),o[m]="");for(m in E)E.hasOwnProperty(m)&&_[m]!==E[m]&&(o||(o={}),o[m]=E[m])}else o||(h||(h=[]),h.push(k,o)),o=E;else k==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,_=_?_.__html:void 0,E!=null&&_!==E&&(h=h||[]).push(k,E)):k==="children"?typeof E!="string"&&typeof E!="number"||(h=h||[]).push(k,""+E):k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&(l.hasOwnProperty(k)?(E!=null&&k==="onScroll"&&Te("scroll",t),h||_===E||(h=[])):(h=h||[]).push(k,E))}o&&(h=h||[]).push("style",o);var k=h;(i.updateQueue=k)&&(i.flags|=4)}},Ip=function(t,i,o,a){o!==a&&(i.flags|=4)};function us(t,i){if(!Ne)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function tt(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,a=0;if(i)for(var c=t.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags&14680064,a|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags,a|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=a,t.childLanes=o,i}function Ww(t,i,o){var a=i.pendingProps;switch(eu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(i),null;case 1:return ct(i.type)&&vo(),tt(i),null;case 3:return a=i.stateNode,ti(),ke(ut),ke(Ze),fu(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Co(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,zt!==null&&(Vu(zt),zt=null))),xu(t,i),tt(i),null;case 5:du(i);var c=fr(is.current);if(o=i.type,t!==null&&i.stateNode!=null)Sp(t,i,o,a,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!a){if(i.stateNode===null)throw Error(n(166));return tt(i),null}if(t=fr(en.current),Co(i)){a=i.stateNode,o=i.type;var h=i.memoizedProps;switch(a[Zt]=i,a[Zi]=h,t=(i.mode&1)!==0,o){case"dialog":Te("cancel",a),Te("close",a);break;case"iframe":case"object":case"embed":Te("load",a);break;case"video":case"audio":for(c=0;c<Qi.length;c++)Te(Qi[c],a);break;case"source":Te("error",a);break;case"img":case"image":case"link":Te("error",a),Te("load",a);break;case"details":Te("toggle",a);break;case"input":nh(a,h),Te("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!h.multiple},Te("invalid",a);break;case"textarea":sh(a,h),Te("invalid",a)}ha(o,h),c=null;for(var m in h)if(h.hasOwnProperty(m)){var _=h[m];m==="children"?typeof _=="string"?a.textContent!==_&&(h.suppressHydrationWarning!==!0&&go(a.textContent,_,t),c=["children",_]):typeof _=="number"&&a.textContent!==""+_&&(h.suppressHydrationWarning!==!0&&go(a.textContent,_,t),c=["children",""+_]):l.hasOwnProperty(m)&&_!=null&&m==="onScroll"&&Te("scroll",a)}switch(o){case"input":Gs(a),ih(a,h,!0);break;case"textarea":Gs(a),lh(a);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(a.onclick=_o)}a=c,i.updateQueue=a,a!==null&&(i.flags|=4)}else{m=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ah(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=m.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof a.is=="string"?t=m.createElement(o,{is:a.is}):(t=m.createElement(o),o==="select"&&(m=t,a.multiple?m.multiple=!0:a.size&&(m.size=a.size))):t=m.createElementNS(t,o),t[Zt]=i,t[Zi]=a,Ep(t,i,!1,!1),i.stateNode=t;e:{switch(m=fa(o,a),o){case"dialog":Te("cancel",t),Te("close",t),c=a;break;case"iframe":case"object":case"embed":Te("load",t),c=a;break;case"video":case"audio":for(c=0;c<Qi.length;c++)Te(Qi[c],t);c=a;break;case"source":Te("error",t),c=a;break;case"img":case"image":case"link":Te("error",t),Te("load",t),c=a;break;case"details":Te("toggle",t),c=a;break;case"input":nh(t,a),c=la(t,a),Te("invalid",t);break;case"option":c=a;break;case"select":t._wrapperState={wasMultiple:!!a.multiple},c=j({},a,{value:void 0}),Te("invalid",t);break;case"textarea":sh(t,a),c=ca(t,a),Te("invalid",t);break;default:c=a}ha(o,c),_=c;for(h in _)if(_.hasOwnProperty(h)){var E=_[h];h==="style"?dh(t,E):h==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,E!=null&&uh(t,E)):h==="children"?typeof E=="string"?(o!=="textarea"||E!=="")&&Oi(t,E):typeof E=="number"&&Oi(t,""+E):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(l.hasOwnProperty(h)?E!=null&&h==="onScroll"&&Te("scroll",t):E!=null&&pe(t,h,E,m))}switch(o){case"input":Gs(t),ih(t,a,!1);break;case"textarea":Gs(t),lh(t);break;case"option":a.value!=null&&t.setAttribute("value",""+he(a.value));break;case"select":t.multiple=!!a.multiple,h=a.value,h!=null?br(t,!!a.multiple,h,!1):a.defaultValue!=null&&br(t,!!a.multiple,a.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=_o)}switch(o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return tt(i),null;case 6:if(t&&i.stateNode!=null)Ip(t,i,t.memoizedProps,a);else{if(typeof a!="string"&&i.stateNode===null)throw Error(n(166));if(o=fr(is.current),fr(en.current),Co(i)){if(a=i.stateNode,o=i.memoizedProps,a[Zt]=i,(h=a.nodeValue!==o)&&(t=Et,t!==null))switch(t.tag){case 3:go(a.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&go(a.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else a=(o.nodeType===9?o:o.ownerDocument).createTextNode(a),a[Zt]=i,i.stateNode=a}return tt(i),null;case 13:if(ke(Pe),a=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ne&&St!==null&&i.mode&1&&!(i.flags&128))kf(),Xr(),i.flags|=98560,h=!1;else if(h=Co(i),a!==null&&a.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[Zt]=i}else Xr(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;tt(i),h=!1}else zt!==null&&(Vu(zt),zt=null),h=!0;if(!h)return i.flags&65536?i:null}return i.flags&128?(i.lanes=o,i):(a=a!==null,a!==(t!==null&&t.memoizedState!==null)&&a&&(i.child.flags|=8192,i.mode&1&&(t===null||Pe.current&1?ze===0&&(ze=3):Gu())),i.updateQueue!==null&&(i.flags|=4),tt(i),null);case 4:return ti(),xu(t,i),t===null&&Xi(i.stateNode.containerInfo),tt(i),null;case 10:return ou(i.type._context),tt(i),null;case 17:return ct(i.type)&&vo(),tt(i),null;case 19:if(ke(Pe),h=i.memoizedState,h===null)return tt(i),null;if(a=(i.flags&128)!==0,m=h.rendering,m===null)if(a)us(h,!1);else{if(ze!==0||t!==null&&t.flags&128)for(t=i.child;t!==null;){if(m=Ao(t),m!==null){for(i.flags|=128,us(h,!1),a=m.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),i.subtreeFlags=0,a=o,o=i.child;o!==null;)h=o,t=a,h.flags&=14680066,m=h.alternate,m===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=m.childLanes,h.lanes=m.lanes,h.child=m.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=m.memoizedProps,h.memoizedState=m.memoizedState,h.updateQueue=m.updateQueue,h.type=m.type,t=m.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Se(Pe,Pe.current&1|2),i.child}t=t.sibling}h.tail!==null&&Me()>si&&(i.flags|=128,a=!0,us(h,!1),i.lanes=4194304)}else{if(!a)if(t=Ao(m),t!==null){if(i.flags|=128,a=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),us(h,!0),h.tail===null&&h.tailMode==="hidden"&&!m.alternate&&!Ne)return tt(i),null}else 2*Me()-h.renderingStartTime>si&&o!==1073741824&&(i.flags|=128,a=!0,us(h,!1),i.lanes=4194304);h.isBackwards?(m.sibling=i.child,i.child=m):(o=h.last,o!==null?o.sibling=m:i.child=m,h.last=m)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Me(),i.sibling=null,o=Pe.current,Se(Pe,a?o&1|2:o&1),i):(tt(i),null);case 22:case 23:return Hu(),a=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==a&&(i.flags|=8192),a&&i.mode&1?It&1073741824&&(tt(i),i.subtreeFlags&6&&(i.flags|=8192)):tt(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function Bw(t,i){switch(eu(i),i.tag){case 1:return ct(i.type)&&vo(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ti(),ke(ut),ke(Ze),fu(),t=i.flags,t&65536&&!(t&128)?(i.flags=t&-65537|128,i):null;case 5:return du(i),null;case 13:if(ke(Pe),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Xr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return ke(Pe),null;case 4:return ti(),null;case 10:return ou(i.type._context),null;case 22:case 23:return Hu(),null;case 24:return null;default:return null}}var jo=!1,nt=!1,Vw=typeof WeakSet=="function"?WeakSet:Set,U=null;function ri(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(a){xe(t,i,a)}else o.current=null}function Du(t,i,o){try{o()}catch(a){xe(t,i,a)}}var Cp=!1;function $w(t,i){if(Ha=io,t=tf(),Fa(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var a=o.getSelection&&o.getSelection();if(a&&a.rangeCount!==0){o=a.anchorNode;var c=a.anchorOffset,h=a.focusNode;a=a.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var m=0,_=-1,E=-1,k=0,A=0,O=t,N=null;t:for(;;){for(var b;O!==o||c!==0&&O.nodeType!==3||(_=m+c),O!==h||a!==0&&O.nodeType!==3||(E=m+a),O.nodeType===3&&(m+=O.nodeValue.length),(b=O.firstChild)!==null;)N=O,O=b;for(;;){if(O===t)break t;if(N===o&&++k===c&&(_=m),N===h&&++A===a&&(E=m),(b=O.nextSibling)!==null)break;O=N,N=O.parentNode}O=b}o=_===-1||E===-1?null:{start:_,end:E}}else o=null}o=o||{start:0,end:0}}else o=null;for(Ga={focusedElem:t,selectionRange:o},io=!1,U=i;U!==null;)if(i=U,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,U=t;else for(;U!==null;){i=U;try{var z=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(z!==null){var W=z.memoizedProps,be=z.memoizedState,C=i.stateNode,S=C.getSnapshotBeforeUpdate(i.elementType===i.type?W:Wt(i.type,W),be);C.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var T=i.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(x){xe(i,i.return,x)}if(t=i.sibling,t!==null){t.return=i.return,U=t;break}U=i.return}return z=Cp,Cp=!1,z}function cs(t,i,o){var a=i.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var c=a=a.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&Du(i,o,h)}c=c.next}while(c!==a)}}function zo(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var a=o.create;o.destroy=a()}o=o.next}while(o!==i)}}function Lu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function Tp(t){var i=t.alternate;i!==null&&(t.alternate=null,Tp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Zt],delete i[Zi],delete i[Qa],delete i[kw],delete i[Rw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function kp(t){return t.tag===5||t.tag===3||t.tag===4}function Rp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||kp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Mu(t,i,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=_o));else if(a!==4&&(t=t.child,t!==null))for(Mu(t,i,o),t=t.sibling;t!==null;)Mu(t,i,o),t=t.sibling}function bu(t,i,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(a!==4&&(t=t.child,t!==null))for(bu(t,i,o),t=t.sibling;t!==null;)bu(t,i,o),t=t.sibling}var Ye=null,Bt=!1;function jn(t,i,o){for(o=o.child;o!==null;)Np(t,i,o),o=o.sibling}function Np(t,i,o){if(Jt&&typeof Jt.onCommitFiberUnmount=="function")try{Jt.onCommitFiberUnmount(Js,o)}catch{}switch(o.tag){case 5:nt||ri(o,i);case 6:var a=Ye,c=Bt;Ye=null,jn(t,i,o),Ye=a,Bt=c,Ye!==null&&(Bt?(t=Ye,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):Ye.removeChild(o.stateNode));break;case 18:Ye!==null&&(Bt?(t=Ye,o=o.stateNode,t.nodeType===8?Ya(t.parentNode,o):t.nodeType===1&&Ya(t,o),Bi(t)):Ya(Ye,o.stateNode));break;case 4:a=Ye,c=Bt,Ye=o.stateNode.containerInfo,Bt=!0,jn(t,i,o),Ye=a,Bt=c;break;case 0:case 11:case 14:case 15:if(!nt&&(a=o.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){c=a=a.next;do{var h=c,m=h.destroy;h=h.tag,m!==void 0&&(h&2||h&4)&&Du(o,i,m),c=c.next}while(c!==a)}jn(t,i,o);break;case 1:if(!nt&&(ri(o,i),a=o.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=o.memoizedProps,a.state=o.memoizedState,a.componentWillUnmount()}catch(_){xe(o,i,_)}jn(t,i,o);break;case 21:jn(t,i,o);break;case 22:o.mode&1?(nt=(a=nt)||o.memoizedState!==null,jn(t,i,o),nt=a):jn(t,i,o);break;default:jn(t,i,o)}}function Pp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new Vw),i.forEach(function(a){var c=Zw.bind(null,t,a);o.has(a)||(o.add(a),a.then(c,c))})}}function Vt(t,i){var o=i.deletions;if(o!==null)for(var a=0;a<o.length;a++){var c=o[a];try{var h=t,m=i,_=m;e:for(;_!==null;){switch(_.tag){case 5:Ye=_.stateNode,Bt=!1;break e;case 3:Ye=_.stateNode.containerInfo,Bt=!0;break e;case 4:Ye=_.stateNode.containerInfo,Bt=!0;break e}_=_.return}if(Ye===null)throw Error(n(160));Np(h,m,c),Ye=null,Bt=!1;var E=c.alternate;E!==null&&(E.return=null),c.return=null}catch(k){xe(c,i,k)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Ap(i,t),i=i.sibling}function Ap(t,i){var o=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vt(i,t),nn(t),a&4){try{cs(3,t,t.return),zo(3,t)}catch(W){xe(t,t.return,W)}try{cs(5,t,t.return)}catch(W){xe(t,t.return,W)}}break;case 1:Vt(i,t),nn(t),a&512&&o!==null&&ri(o,o.return);break;case 5:if(Vt(i,t),nn(t),a&512&&o!==null&&ri(o,o.return),t.flags&32){var c=t.stateNode;try{Oi(c,"")}catch(W){xe(t,t.return,W)}}if(a&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,m=o!==null?o.memoizedProps:h,_=t.type,E=t.updateQueue;if(t.updateQueue=null,E!==null)try{_==="input"&&h.type==="radio"&&h.name!=null&&rh(c,h),fa(_,m);var k=fa(_,h);for(m=0;m<E.length;m+=2){var A=E[m],O=E[m+1];A==="style"?dh(c,O):A==="dangerouslySetInnerHTML"?uh(c,O):A==="children"?Oi(c,O):pe(c,A,O,k)}switch(_){case"input":aa(c,h);break;case"textarea":oh(c,h);break;case"select":var N=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var b=h.value;b!=null?br(c,!!h.multiple,b,!1):N!==!!h.multiple&&(h.defaultValue!=null?br(c,!!h.multiple,h.defaultValue,!0):br(c,!!h.multiple,h.multiple?[]:"",!1))}c[Zi]=h}catch(W){xe(t,t.return,W)}}break;case 6:if(Vt(i,t),nn(t),a&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(W){xe(t,t.return,W)}}break;case 3:if(Vt(i,t),nn(t),a&4&&o!==null&&o.memoizedState.isDehydrated)try{Bi(i.containerInfo)}catch(W){xe(t,t.return,W)}break;case 4:Vt(i,t),nn(t);break;case 13:Vt(i,t),nn(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(ju=Me())),a&4&&Pp(t);break;case 22:if(A=o!==null&&o.memoizedState!==null,t.mode&1?(nt=(k=nt)||A,Vt(i,t),nt=k):Vt(i,t),nn(t),a&8192){if(k=t.memoizedState!==null,(t.stateNode.isHidden=k)&&!A&&t.mode&1)for(U=t,A=t.child;A!==null;){for(O=U=A;U!==null;){switch(N=U,b=N.child,N.tag){case 0:case 11:case 14:case 15:cs(4,N,N.return);break;case 1:ri(N,N.return);var z=N.stateNode;if(typeof z.componentWillUnmount=="function"){a=N,o=N.return;try{i=a,z.props=i.memoizedProps,z.state=i.memoizedState,z.componentWillUnmount()}catch(W){xe(a,o,W)}}break;case 5:ri(N,N.return);break;case 22:if(N.memoizedState!==null){Dp(O);continue}}b!==null?(b.return=N,U=b):Dp(O)}A=A.sibling}e:for(A=null,O=t;;){if(O.tag===5){if(A===null){A=O;try{c=O.stateNode,k?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(_=O.stateNode,E=O.memoizedProps.style,m=E!=null&&E.hasOwnProperty("display")?E.display:null,_.style.display=ch("display",m))}catch(W){xe(t,t.return,W)}}}else if(O.tag===6){if(A===null)try{O.stateNode.nodeValue=k?"":O.memoizedProps}catch(W){xe(t,t.return,W)}}else if((O.tag!==22&&O.tag!==23||O.memoizedState===null||O===t)&&O.child!==null){O.child.return=O,O=O.child;continue}if(O===t)break e;for(;O.sibling===null;){if(O.return===null||O.return===t)break e;A===O&&(A=null),O=O.return}A===O&&(A=null),O.sibling.return=O.return,O=O.sibling}}break;case 19:Vt(i,t),nn(t),a&4&&Pp(t);break;case 21:break;default:Vt(i,t),nn(t)}}function nn(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(kp(o)){var a=o;break e}o=o.return}throw Error(n(160))}switch(a.tag){case 5:var c=a.stateNode;a.flags&32&&(Oi(c,""),a.flags&=-33);var h=Rp(t);bu(t,h,c);break;case 3:case 4:var m=a.stateNode.containerInfo,_=Rp(t);Mu(t,_,m);break;default:throw Error(n(161))}}catch(E){xe(t,t.return,E)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Hw(t,i,o){U=t,Op(t)}function Op(t,i,o){for(var a=(t.mode&1)!==0;U!==null;){var c=U,h=c.child;if(c.tag===22&&a){var m=c.memoizedState!==null||jo;if(!m){var _=c.alternate,E=_!==null&&_.memoizedState!==null||nt;_=jo;var k=nt;if(jo=m,(nt=E)&&!k)for(U=c;U!==null;)m=U,E=m.child,m.tag===22&&m.memoizedState!==null?Lp(c):E!==null?(E.return=m,U=E):Lp(c);for(;h!==null;)U=h,Op(h),h=h.sibling;U=c,jo=_,nt=k}xp(t)}else c.subtreeFlags&8772&&h!==null?(h.return=c,U=h):xp(t)}}function xp(t){for(;U!==null;){var i=U;if(i.flags&8772){var o=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:nt||zo(5,i);break;case 1:var a=i.stateNode;if(i.flags&4&&!nt)if(o===null)a.componentDidMount();else{var c=i.elementType===i.type?o.memoizedProps:Wt(i.type,o.memoizedProps);a.componentDidUpdate(c,o.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&Df(i,h,a);break;case 3:var m=i.updateQueue;if(m!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Df(i,m,o)}break;case 5:var _=i.stateNode;if(o===null&&i.flags&4){o=_;var E=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":E.autoFocus&&o.focus();break;case"img":E.src&&(o.src=E.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var k=i.alternate;if(k!==null){var A=k.memoizedState;if(A!==null){var O=A.dehydrated;O!==null&&Bi(O)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}nt||i.flags&512&&Lu(i)}catch(N){xe(i,i.return,N)}}if(i===t){U=null;break}if(o=i.sibling,o!==null){o.return=i.return,U=o;break}U=i.return}}function Dp(t){for(;U!==null;){var i=U;if(i===t){U=null;break}var o=i.sibling;if(o!==null){o.return=i.return,U=o;break}U=i.return}}function Lp(t){for(;U!==null;){var i=U;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{zo(4,i)}catch(E){xe(i,o,E)}break;case 1:var a=i.stateNode;if(typeof a.componentDidMount=="function"){var c=i.return;try{a.componentDidMount()}catch(E){xe(i,c,E)}}var h=i.return;try{Lu(i)}catch(E){xe(i,h,E)}break;case 5:var m=i.return;try{Lu(i)}catch(E){xe(i,m,E)}}}catch(E){xe(i,i.return,E)}if(i===t){U=null;break}var _=i.sibling;if(_!==null){_.return=i.return,U=_;break}U=i.return}}var Gw=Math.ceil,Wo=le.ReactCurrentDispatcher,Fu=le.ReactCurrentOwner,xt=le.ReactCurrentBatchConfig,oe=0,Ve=null,Fe=null,Qe=0,It=0,ii=Ln(0),ze=0,ds=null,mr=0,Bo=0,Uu=0,hs=null,ht=null,ju=0,si=1/0,gn=null,Vo=!1,zu=null,zn=null,$o=!1,Wn=null,Ho=0,fs=0,Wu=null,Go=-1,qo=0;function st(){return oe&6?Me():Go!==-1?Go:Go=Me()}function Bn(t){return t.mode&1?oe&2&&Qe!==0?Qe&-Qe:Pw.transition!==null?(qo===0&&(qo=kh()),qo):(t=fe,t!==0||(t=window.event,t=t===void 0?16:Mh(t.type)),t):1}function $t(t,i,o,a){if(50<fs)throw fs=0,Wu=null,Error(n(185));Fi(t,o,a),(!(oe&2)||t!==Ve)&&(t===Ve&&(!(oe&2)&&(Bo|=o),ze===4&&Vn(t,Qe)),ft(t,a),o===1&&oe===0&&!(i.mode&1)&&(si=Me()+500,Eo&&bn()))}function ft(t,i){var o=t.callbackNode;Pv(t,i);var a=to(t,t===Ve?Qe:0);if(a===0)o!==null&&Ih(o),t.callbackNode=null,t.callbackPriority=0;else if(i=a&-a,t.callbackPriority!==i){if(o!=null&&Ih(o),i===1)t.tag===0?Nw(bp.bind(null,t)):Ef(bp.bind(null,t)),Cw(function(){!(oe&6)&&bn()}),o=null;else{switch(Rh(a)){case 1:o=wa;break;case 4:o=Ch;break;case 16:o=Xs;break;case 536870912:o=Th;break;default:o=Xs}o=$p(o,Mp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function Mp(t,i){if(Go=-1,qo=0,oe&6)throw Error(n(327));var o=t.callbackNode;if(oi()&&t.callbackNode!==o)return null;var a=to(t,t===Ve?Qe:0);if(a===0)return null;if(a&30||a&t.expiredLanes||i)i=Ko(t,a);else{i=a;var c=oe;oe|=2;var h=Up();(Ve!==t||Qe!==i)&&(gn=null,si=Me()+500,_r(t,i));do try{Yw();break}catch(_){Fp(t,_)}while(!0);su(),Wo.current=h,oe=c,Fe!==null?i=0:(Ve=null,Qe=0,i=ze)}if(i!==0){if(i===2&&(c=Ea(t),c!==0&&(a=c,i=Bu(t,c))),i===1)throw o=ds,_r(t,0),Vn(t,a),ft(t,Me()),o;if(i===6)Vn(t,a);else{if(c=t.current.alternate,!(a&30)&&!qw(c)&&(i=Ko(t,a),i===2&&(h=Ea(t),h!==0&&(a=h,i=Bu(t,h))),i===1))throw o=ds,_r(t,0),Vn(t,a),ft(t,Me()),o;switch(t.finishedWork=c,t.finishedLanes=a,i){case 0:case 1:throw Error(n(345));case 2:yr(t,ht,gn);break;case 3:if(Vn(t,a),(a&130023424)===a&&(i=ju+500-Me(),10<i)){if(to(t,0)!==0)break;if(c=t.suspendedLanes,(c&a)!==a){st(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=Ka(yr.bind(null,t,ht,gn),i);break}yr(t,ht,gn);break;case 4:if(Vn(t,a),(a&4194240)===a)break;for(i=t.eventTimes,c=-1;0<a;){var m=31-Ut(a);h=1<<m,m=i[m],m>c&&(c=m),a&=~h}if(a=c,a=Me()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Gw(a/1960))-a,10<a){t.timeoutHandle=Ka(yr.bind(null,t,ht,gn),a);break}yr(t,ht,gn);break;case 5:yr(t,ht,gn);break;default:throw Error(n(329))}}}return ft(t,Me()),t.callbackNode===o?Mp.bind(null,t):null}function Bu(t,i){var o=hs;return t.current.memoizedState.isDehydrated&&(_r(t,i).flags|=256),t=Ko(t,i),t!==2&&(i=ht,ht=o,i!==null&&Vu(i)),t}function Vu(t){ht===null?ht=t:ht.push.apply(ht,t)}function qw(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var a=0;a<o.length;a++){var c=o[a],h=c.getSnapshot;c=c.value;try{if(!jt(h(),c))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Vn(t,i){for(i&=~Uu,i&=~Bo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-Ut(i),a=1<<o;t[o]=-1,i&=~a}}function bp(t){if(oe&6)throw Error(n(327));oi();var i=to(t,0);if(!(i&1))return ft(t,Me()),null;var o=Ko(t,i);if(t.tag!==0&&o===2){var a=Ea(t);a!==0&&(i=a,o=Bu(t,a))}if(o===1)throw o=ds,_r(t,0),Vn(t,i),ft(t,Me()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,yr(t,ht,gn),ft(t,Me()),null}function $u(t,i){var o=oe;oe|=1;try{return t(i)}finally{oe=o,oe===0&&(si=Me()+500,Eo&&bn())}}function gr(t){Wn!==null&&Wn.tag===0&&!(oe&6)&&oi();var i=oe;oe|=1;var o=xt.transition,a=fe;try{if(xt.transition=null,fe=1,t)return t()}finally{fe=a,xt.transition=o,oe=i,!(oe&6)&&bn()}}function Hu(){It=ii.current,ke(ii)}function _r(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,Iw(o)),Fe!==null)for(o=Fe.return;o!==null;){var a=o;switch(eu(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&vo();break;case 3:ti(),ke(ut),ke(Ze),fu();break;case 5:du(a);break;case 4:ti();break;case 13:ke(Pe);break;case 19:ke(Pe);break;case 10:ou(a.type._context);break;case 22:case 23:Hu()}o=o.return}if(Ve=t,Fe=t=$n(t.current,null),Qe=It=i,ze=0,ds=null,Uu=Bo=mr=0,ht=hs=null,hr!==null){for(i=0;i<hr.length;i++)if(o=hr[i],a=o.interleaved,a!==null){o.interleaved=null;var c=a.next,h=o.pending;if(h!==null){var m=h.next;h.next=c,a.next=m}o.pending=a}hr=null}return t}function Fp(t,i){do{var o=Fe;try{if(su(),Oo.current=Mo,xo){for(var a=Ae.memoizedState;a!==null;){var c=a.queue;c!==null&&(c.pending=null),a=a.next}xo=!1}if(pr=0,Be=je=Ae=null,ss=!1,os=0,Fu.current=null,o===null||o.return===null){ze=1,ds=i,Fe=null;break}e:{var h=t,m=o.return,_=o,E=i;if(i=Qe,_.flags|=32768,E!==null&&typeof E=="object"&&typeof E.then=="function"){var k=E,A=_,O=A.tag;if(!(A.mode&1)&&(O===0||O===11||O===15)){var N=A.alternate;N?(A.updateQueue=N.updateQueue,A.memoizedState=N.memoizedState,A.lanes=N.lanes):(A.updateQueue=null,A.memoizedState=null)}var b=ap(m);if(b!==null){b.flags&=-257,up(b,m,_,h,i),b.mode&1&&lp(h,k,i),i=b,E=k;var z=i.updateQueue;if(z===null){var W=new Set;W.add(E),i.updateQueue=W}else z.add(E);break e}else{if(!(i&1)){lp(h,k,i),Gu();break e}E=Error(n(426))}}else if(Ne&&_.mode&1){var be=ap(m);if(be!==null){!(be.flags&65536)&&(be.flags|=256),up(be,m,_,h,i),ru(ni(E,_));break e}}h=E=ni(E,_),ze!==4&&(ze=2),hs===null?hs=[h]:hs.push(h),h=m;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var C=sp(h,E,i);xf(h,C);break e;case 1:_=E;var S=h.type,T=h.stateNode;if(!(h.flags&128)&&(typeof S.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(zn===null||!zn.has(T)))){h.flags|=65536,i&=-i,h.lanes|=i;var x=op(h,_,i);xf(h,x);break e}}h=h.return}while(h!==null)}zp(o)}catch(B){i=B,Fe===o&&o!==null&&(Fe=o=o.return);continue}break}while(!0)}function Up(){var t=Wo.current;return Wo.current=Mo,t===null?Mo:t}function Gu(){(ze===0||ze===3||ze===2)&&(ze=4),Ve===null||!(mr&268435455)&&!(Bo&268435455)||Vn(Ve,Qe)}function Ko(t,i){var o=oe;oe|=2;var a=Up();(Ve!==t||Qe!==i)&&(gn=null,_r(t,i));do try{Kw();break}catch(c){Fp(t,c)}while(!0);if(su(),oe=o,Wo.current=a,Fe!==null)throw Error(n(261));return Ve=null,Qe=0,ze}function Kw(){for(;Fe!==null;)jp(Fe)}function Yw(){for(;Fe!==null&&!wv();)jp(Fe)}function jp(t){var i=Vp(t.alternate,t,It);t.memoizedProps=t.pendingProps,i===null?zp(t):Fe=i,Fu.current=null}function zp(t){var i=t;do{var o=i.alternate;if(t=i.return,i.flags&32768){if(o=Bw(o,i),o!==null){o.flags&=32767,Fe=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ze=6,Fe=null;return}}else if(o=Ww(o,i,It),o!==null){Fe=o;return}if(i=i.sibling,i!==null){Fe=i;return}Fe=i=t}while(i!==null);ze===0&&(ze=5)}function yr(t,i,o){var a=fe,c=xt.transition;try{xt.transition=null,fe=1,Qw(t,i,o,a)}finally{xt.transition=c,fe=a}return null}function Qw(t,i,o,a){do oi();while(Wn!==null);if(oe&6)throw Error(n(327));o=t.finishedWork;var c=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(Av(t,h),t===Ve&&(Fe=Ve=null,Qe=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||$o||($o=!0,$p(Xs,function(){return oi(),null})),h=(o.flags&15990)!==0,o.subtreeFlags&15990||h){h=xt.transition,xt.transition=null;var m=fe;fe=1;var _=oe;oe|=4,Fu.current=null,$w(t,o),Ap(o,t),gw(Ga),io=!!Ha,Ga=Ha=null,t.current=o,Hw(o),Ev(),oe=_,fe=m,xt.transition=h}else t.current=o;if($o&&($o=!1,Wn=t,Ho=c),h=t.pendingLanes,h===0&&(zn=null),Cv(o.stateNode),ft(t,Me()),i!==null)for(a=t.onRecoverableError,o=0;o<i.length;o++)c=i[o],a(c.value,{componentStack:c.stack,digest:c.digest});if(Vo)throw Vo=!1,t=zu,zu=null,t;return Ho&1&&t.tag!==0&&oi(),h=t.pendingLanes,h&1?t===Wu?fs++:(fs=0,Wu=t):fs=0,bn(),null}function oi(){if(Wn!==null){var t=Rh(Ho),i=xt.transition,o=fe;try{if(xt.transition=null,fe=16>t?16:t,Wn===null)var a=!1;else{if(t=Wn,Wn=null,Ho=0,oe&6)throw Error(n(331));var c=oe;for(oe|=4,U=t.current;U!==null;){var h=U,m=h.child;if(U.flags&16){var _=h.deletions;if(_!==null){for(var E=0;E<_.length;E++){var k=_[E];for(U=k;U!==null;){var A=U;switch(A.tag){case 0:case 11:case 15:cs(8,A,h)}var O=A.child;if(O!==null)O.return=A,U=O;else for(;U!==null;){A=U;var N=A.sibling,b=A.return;if(Tp(A),A===k){U=null;break}if(N!==null){N.return=b,U=N;break}U=b}}}var z=h.alternate;if(z!==null){var W=z.child;if(W!==null){z.child=null;do{var be=W.sibling;W.sibling=null,W=be}while(W!==null)}}U=h}}if(h.subtreeFlags&2064&&m!==null)m.return=h,U=m;else e:for(;U!==null;){if(h=U,h.flags&2048)switch(h.tag){case 0:case 11:case 15:cs(9,h,h.return)}var C=h.sibling;if(C!==null){C.return=h.return,U=C;break e}U=h.return}}var S=t.current;for(U=S;U!==null;){m=U;var T=m.child;if(m.subtreeFlags&2064&&T!==null)T.return=m,U=T;else e:for(m=S;U!==null;){if(_=U,_.flags&2048)try{switch(_.tag){case 0:case 11:case 15:zo(9,_)}}catch(B){xe(_,_.return,B)}if(_===m){U=null;break e}var x=_.sibling;if(x!==null){x.return=_.return,U=x;break e}U=_.return}}if(oe=c,bn(),Jt&&typeof Jt.onPostCommitFiberRoot=="function")try{Jt.onPostCommitFiberRoot(Js,t)}catch{}a=!0}return a}finally{fe=o,xt.transition=i}}return!1}function Wp(t,i,o){i=ni(o,i),i=sp(t,i,1),t=Un(t,i,1),i=st(),t!==null&&(Fi(t,1,i),ft(t,i))}function xe(t,i,o){if(t.tag===3)Wp(t,t,o);else for(;i!==null;){if(i.tag===3){Wp(i,t,o);break}else if(i.tag===1){var a=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(zn===null||!zn.has(a))){t=ni(o,t),t=op(i,t,1),i=Un(i,t,1),t=st(),i!==null&&(Fi(i,1,t),ft(i,t));break}}i=i.return}}function Xw(t,i,o){var a=t.pingCache;a!==null&&a.delete(i),i=st(),t.pingedLanes|=t.suspendedLanes&o,Ve===t&&(Qe&o)===o&&(ze===4||ze===3&&(Qe&130023424)===Qe&&500>Me()-ju?_r(t,0):Uu|=o),ft(t,i)}function Bp(t,i){i===0&&(t.mode&1?(i=eo,eo<<=1,!(eo&130023424)&&(eo=4194304)):i=1);var o=st();t=fn(t,i),t!==null&&(Fi(t,i,o),ft(t,o))}function Jw(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Bp(t,o)}function Zw(t,i){var o=0;switch(t.tag){case 13:var a=t.stateNode,c=t.memoizedState;c!==null&&(o=c.retryLane);break;case 19:a=t.stateNode;break;default:throw Error(n(314))}a!==null&&a.delete(i),Bp(t,o)}var Vp;Vp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||ut.current)dt=!0;else{if(!(t.lanes&o)&&!(i.flags&128))return dt=!1,zw(t,i,o);dt=!!(t.flags&131072)}else dt=!1,Ne&&i.flags&1048576&&Sf(i,Io,i.index);switch(i.lanes=0,i.tag){case 2:var a=i.type;Uo(t,i),t=i.pendingProps;var c=Kr(i,Ze.current);ei(i,o),c=gu(null,i,a,t,c,o);var h=_u();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,ct(a)?(h=!0,wo(i)):h=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,uu(i),c.updater=bo,i.stateNode=c,c._reactInternals=i,Iu(i,a,t,o),i=Ru(null,i,a,!0,h,o)):(i.tag=0,Ne&&h&&Za(i),it(null,i,c,o),i=i.child),i;case 16:a=i.elementType;e:{switch(Uo(t,i),t=i.pendingProps,c=a._init,a=c(a._payload),i.type=a,c=i.tag=t0(a),t=Wt(a,t),c){case 0:i=ku(null,i,a,t,o);break e;case 1:i=mp(null,i,a,t,o);break e;case 11:i=cp(null,i,a,t,o);break e;case 14:i=dp(null,i,a,Wt(a.type,t),o);break e}throw Error(n(306,a,""))}return i;case 0:return a=i.type,c=i.pendingProps,c=i.elementType===a?c:Wt(a,c),ku(t,i,a,c,o);case 1:return a=i.type,c=i.pendingProps,c=i.elementType===a?c:Wt(a,c),mp(t,i,a,c,o);case 3:e:{if(gp(i),t===null)throw Error(n(387));a=i.pendingProps,h=i.memoizedState,c=h.element,Of(t,i),Po(i,a,null,o);var m=i.memoizedState;if(a=m.element,h.isDehydrated)if(h={element:a,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){c=ni(Error(n(423)),i),i=_p(t,i,a,o,c);break e}else if(a!==c){c=ni(Error(n(424)),i),i=_p(t,i,a,o,c);break e}else for(St=Dn(i.stateNode.containerInfo.firstChild),Et=i,Ne=!0,zt=null,o=Pf(i,null,a,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Xr(),a===c){i=mn(t,i,o);break e}it(t,i,a,o)}i=i.child}return i;case 5:return Lf(i),t===null&&nu(i),a=i.type,c=i.pendingProps,h=t!==null?t.memoizedProps:null,m=c.children,qa(a,c)?m=null:h!==null&&qa(a,h)&&(i.flags|=32),pp(t,i),it(t,i,m,o),i.child;case 6:return t===null&&nu(i),null;case 13:return yp(t,i,o);case 4:return cu(i,i.stateNode.containerInfo),a=i.pendingProps,t===null?i.child=Jr(i,null,a,o):it(t,i,a,o),i.child;case 11:return a=i.type,c=i.pendingProps,c=i.elementType===a?c:Wt(a,c),cp(t,i,a,c,o);case 7:return it(t,i,i.pendingProps,o),i.child;case 8:return it(t,i,i.pendingProps.children,o),i.child;case 12:return it(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(a=i.type._context,c=i.pendingProps,h=i.memoizedProps,m=c.value,Se(ko,a._currentValue),a._currentValue=m,h!==null)if(jt(h.value,m)){if(h.children===c.children&&!ut.current){i=mn(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var _=h.dependencies;if(_!==null){m=h.child;for(var E=_.firstContext;E!==null;){if(E.context===a){if(h.tag===1){E=pn(-1,o&-o),E.tag=2;var k=h.updateQueue;if(k!==null){k=k.shared;var A=k.pending;A===null?E.next=E:(E.next=A.next,A.next=E),k.pending=E}}h.lanes|=o,E=h.alternate,E!==null&&(E.lanes|=o),lu(h.return,o,i),_.lanes|=o;break}E=E.next}}else if(h.tag===10)m=h.type===i.type?null:h.child;else if(h.tag===18){if(m=h.return,m===null)throw Error(n(341));m.lanes|=o,_=m.alternate,_!==null&&(_.lanes|=o),lu(m,o,i),m=h.sibling}else m=h.child;if(m!==null)m.return=h;else for(m=h;m!==null;){if(m===i){m=null;break}if(h=m.sibling,h!==null){h.return=m.return,m=h;break}m=m.return}h=m}it(t,i,c.children,o),i=i.child}return i;case 9:return c=i.type,a=i.pendingProps.children,ei(i,o),c=At(c),a=a(c),i.flags|=1,it(t,i,a,o),i.child;case 14:return a=i.type,c=Wt(a,i.pendingProps),c=Wt(a.type,c),dp(t,i,a,c,o);case 15:return hp(t,i,i.type,i.pendingProps,o);case 17:return a=i.type,c=i.pendingProps,c=i.elementType===a?c:Wt(a,c),Uo(t,i),i.tag=1,ct(a)?(t=!0,wo(i)):t=!1,ei(i,o),rp(i,a,c),Iu(i,a,c,o),Ru(null,i,a,!0,t,o);case 19:return wp(t,i,o);case 22:return fp(t,i,o)}throw Error(n(156,i.tag))};function $p(t,i){return Sh(t,i)}function e0(t,i,o,a){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(t,i,o,a){return new e0(t,i,o,a)}function qu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function t0(t){if(typeof t=="function")return qu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Rt)return 11;if(t===Xt)return 14}return 2}function $n(t,i){var o=t.alternate;return o===null?(o=Dt(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Yo(t,i,o,a,c,h){var m=2;if(a=t,typeof t=="function")qu(t)&&(m=1);else if(typeof t=="string")m=5;else e:switch(t){case Q:return vr(o.children,c,h,i);case se:m=8,c|=8;break;case We:return t=Dt(12,o,i,c|2),t.elementType=We,t.lanes=h,t;case yt:return t=Dt(13,o,i,c),t.elementType=yt,t.lanes=h,t;case Ft:return t=Dt(19,o,i,c),t.elementType=Ft,t.lanes=h,t;case Oe:return Qo(o,c,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case rt:m=10;break e;case Qt:m=9;break e;case Rt:m=11;break e;case Xt:m=14;break e;case at:m=16,a=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Dt(m,o,i,c),i.elementType=t,i.type=a,i.lanes=h,i}function vr(t,i,o,a){return t=Dt(7,t,a,i),t.lanes=o,t}function Qo(t,i,o,a){return t=Dt(22,t,a,i),t.elementType=Oe,t.lanes=o,t.stateNode={isHidden:!1},t}function Ku(t,i,o){return t=Dt(6,t,null,i),t.lanes=o,t}function Yu(t,i,o){return i=Dt(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function n0(t,i,o,a,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sa(0),this.expirationTimes=Sa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sa(0),this.identifierPrefix=a,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function Qu(t,i,o,a,c,h,m,_,E){return t=new n0(t,i,o,_,E),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Dt(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:a,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},uu(h),t}function r0(t,i,o){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Z,key:a==null?null:""+a,children:t,containerInfo:i,implementation:o}}function Hp(t){if(!t)return Mn;t=t._reactInternals;e:{if(lr(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(ct(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(ct(o))return vf(t,o,i)}return i}function Gp(t,i,o,a,c,h,m,_,E){return t=Qu(o,a,!0,t,c,h,m,_,E),t.context=Hp(null),o=t.current,a=st(),c=Bn(o),h=pn(a,c),h.callback=i??null,Un(o,h,c),t.current.lanes=c,Fi(t,c,a),ft(t,a),t}function Xo(t,i,o,a){var c=i.current,h=st(),m=Bn(c);return o=Hp(o),i.context===null?i.context=o:i.pendingContext=o,i=pn(h,m),i.payload={element:t},a=a===void 0?null:a,a!==null&&(i.callback=a),t=Un(c,i,m),t!==null&&($t(t,c,m,h),No(t,c,m)),m}function Jo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function qp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function Xu(t,i){qp(t,i),(t=t.alternate)&&qp(t,i)}function i0(){return null}var Kp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ju(t){this._internalRoot=t}Zo.prototype.render=Ju.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Xo(t,i,null,null)},Zo.prototype.unmount=Ju.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;gr(function(){Xo(null,t,null,null)}),i[un]=null}};function Zo(t){this._internalRoot=t}Zo.prototype.unstable_scheduleHydration=function(t){if(t){var i=Ah();t={blockedOn:null,target:t,priority:i};for(var o=0;o<An.length&&i!==0&&i<An[o].priority;o++);An.splice(o,0,t),o===0&&Dh(t)}};function Zu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function el(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Yp(){}function s0(t,i,o,a,c){if(c){if(typeof a=="function"){var h=a;a=function(){var k=Jo(m);h.call(k)}}var m=Gp(i,a,t,0,null,!1,!1,"",Yp);return t._reactRootContainer=m,t[un]=m.current,Xi(t.nodeType===8?t.parentNode:t),gr(),m}for(;c=t.lastChild;)t.removeChild(c);if(typeof a=="function"){var _=a;a=function(){var k=Jo(E);_.call(k)}}var E=Qu(t,0,!1,null,null,!1,!1,"",Yp);return t._reactRootContainer=E,t[un]=E.current,Xi(t.nodeType===8?t.parentNode:t),gr(function(){Xo(i,E,o,a)}),E}function tl(t,i,o,a,c){var h=o._reactRootContainer;if(h){var m=h;if(typeof c=="function"){var _=c;c=function(){var E=Jo(m);_.call(E)}}Xo(i,m,t,c)}else m=s0(o,i,t,c,a);return Jo(m)}Nh=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=bi(i.pendingLanes);o!==0&&(Ia(i,o|1),ft(i,Me()),!(oe&6)&&(si=Me()+500,bn()))}break;case 13:gr(function(){var a=fn(t,1);if(a!==null){var c=st();$t(a,t,1,c)}}),Xu(t,1)}},Ca=function(t){if(t.tag===13){var i=fn(t,134217728);if(i!==null){var o=st();$t(i,t,134217728,o)}Xu(t,134217728)}},Ph=function(t){if(t.tag===13){var i=Bn(t),o=fn(t,i);if(o!==null){var a=st();$t(o,t,i,a)}Xu(t,i)}},Ah=function(){return fe},Oh=function(t,i){var o=fe;try{return fe=t,i()}finally{fe=o}},ga=function(t,i,o){switch(i){case"input":if(aa(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var a=o[i];if(a!==t&&a.form===t.form){var c=yo(a);if(!c)throw Error(n(90));th(a),aa(a,c)}}}break;case"textarea":oh(t,o);break;case"select":i=o.value,i!=null&&br(t,!!o.multiple,i,!1)}},mh=$u,gh=gr;var o0={usingClientEntryPoint:!1,Events:[es,Gr,yo,fh,ph,$u]},ps={findFiberByHostInstance:ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},l0={bundleType:ps.bundleType,version:ps.version,rendererPackageName:ps.rendererPackageName,rendererConfig:ps.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:le.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=wh(t),t===null?null:t.stateNode},findFiberByHostInstance:ps.findFiberByHostInstance||i0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nl.isDisabled&&nl.supportsFiber)try{Js=nl.inject(l0),Jt=nl}catch{}}return pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=o0,pt.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zu(i))throw Error(n(200));return r0(t,i,null,o)},pt.createRoot=function(t,i){if(!Zu(t))throw Error(n(299));var o=!1,a="",c=Kp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(a=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=Qu(t,1,!1,null,null,o,!1,a,c),t[un]=i.current,Xi(t.nodeType===8?t.parentNode:t),new Ju(i)},pt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=wh(i),t=t===null?null:t.stateNode,t},pt.flushSync=function(t){return gr(t)},pt.hydrate=function(t,i,o){if(!el(i))throw Error(n(200));return tl(null,t,i,!0,o)},pt.hydrateRoot=function(t,i,o){if(!Zu(t))throw Error(n(405));var a=o!=null&&o.hydratedSources||null,c=!1,h="",m=Kp;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(m=o.onRecoverableError)),i=Gp(i,null,t,1,o??null,c,!1,h,m),t[un]=i.current,Xi(t),a)for(t=0;t<a.length;t++)o=a[t],c=o._getVersion,c=c(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,c]:i.mutableSourceEagerHydrationData.push(o,c);return new Zo(i)},pt.render=function(t,i,o){if(!el(i))throw Error(n(200));return tl(null,t,i,!1,o)},pt.unmountComponentAtNode=function(t){if(!el(t))throw Error(n(40));return t._reactRootContainer?(gr(function(){tl(null,null,t,!1,function(){t._reactRootContainer=null,t[un]=null})}),!0):!1},pt.unstable_batchedUpdates=$u,pt.unstable_renderSubtreeIntoContainer=function(t,i,o,a){if(!el(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return tl(t,i,o,!1,a)},pt.version="18.3.1-next-f1338f8080-20240426",pt}var im;function m0(){if(im)return nc.exports;im=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),nc.exports=p0(),nc.exports}var sm;function g0(){if(sm)return rl;sm=1;var r=m0();return rl.createRoot=r.createRoot,rl.hydrateRoot=r.hydrateRoot,rl}var _0=g0();const ge={GRASS:"grass",WATER:"water",ROCK:"rock",EMPTY:"empty",FOOD:"food",NULL:"null",GAME:"game",WOOD:"wood",SELL_APPLE:"sellApple",FREE_WAY:"freeway",HOME:"home"},y0={[ge.GRASS]:.4,[ge.WATER]:.2,[ge.EMPTY]:.1,[ge.ROCK]:.14,[ge.FOOD]:.15,[ge.HOME]:.01},v0=["moveU","moveR","moveD","moveL","dragon"],w0="_tile_1en58_1",E0="_grass_1en58_14",S0="_water_1en58_22",I0="_rock_1en58_29",C0="_empty_1en58_36",T0="_food_1en58_43",k0="_game_1en58_50",R0="_home_1en58_51",N0="_wood_1en58_58",P0="_sellApple_1en58_65",A0="_freeway_1en58_72",om={tile:w0,grass:E0,water:S0,rock:I0,empty:C0,food:T0,game:k0,home:R0,wood:N0,sellApple:P0,freeway:A0};var sc={exports:{}},oc,lm;function O0(){if(lm)return oc;lm=1;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return oc=r,oc}var lc,am;function x0(){if(am)return lc;am=1;var r=O0();function e(){}function n(){}return n.resetWarningCache=e,lc=function(){function s(d,f,p,g,w,v){if(v!==r){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}}s.isRequired=s;function l(){return s}var u={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:l,element:s,elementType:s,instanceOf:l,node:s,objectOf:l,oneOf:l,oneOfType:l,shape:l,exact:l,checkPropTypes:n,resetWarningCache:e};return u.PropTypes=u,u},lc}var um;function D0(){return um||(um=1,sc.exports=x0()()),sc.exports}var L0=D0();const Mt=xg(L0);function bl(r){const{isActive:e=!1,type:n="empty",site:s="home"}=r,l={[ge.GRASS]:s==="home"?"":"☘️",[ge.WATER]:"",[ge.ROCK]:"⛰️",[ge.EMPTY]:"",[ge.FOOD]:"🍎",[ge.GAME]:"🌳",[ge.SELL_APPLE]:"💰",[ge.FREE_WAY]:"🚦",[ge.HOME]:"🏠"};return V.jsx("div",{className:`${om.tile} ${om[n]}`,children:l[n]})}bl.propTypes={isActive:Mt.bool,type:Mt.string,site:Mt.string};const M0="_board_16uod_1",b0="_row_16uod_8",F0="_boardContainer_16uod_13",ci={board:M0,row:b0,boardContainer:F0};var cm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L=function(r,e){if(!r)throw Ii(e)},Ii=function(r){return new Error("Firebase Database ("+Dg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+r)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):(l&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},U0=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const l=r[n++];if(l<128)e[s++]=String.fromCharCode(l);else if(l>191&&l<224){const u=r[n++];e[s++]=String.fromCharCode((l&31)<<6|u&63)}else if(l>239&&l<365){const u=r[n++],d=r[n++],f=r[n++],p=((l&7)<<18|(u&63)<<12|(d&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const u=r[n++],d=r[n++];e[s++]=String.fromCharCode((l&15)<<12|(u&63)<<6|d&63)}}return e.join("")},Zc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<r.length;l+=3){const u=r[l],d=l+1<r.length,f=d?r[l+1]:0,p=l+2<r.length,g=p?r[l+2]:0,w=u>>2,v=(u&3)<<4|f>>4;let y=(f&15)<<2|g>>6,R=g&63;p||(R=64,d||(y=64)),s.push(n[w],n[v],n[y],n[R])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Lg(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):U0(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<r.length;){const u=n[r.charAt(l++)],f=l<r.length?n[r.charAt(l)]:0;++l;const g=l<r.length?n[r.charAt(l)]:64;++l;const v=l<r.length?n[r.charAt(l)]:64;if(++l,u==null||f==null||g==null||v==null)throw new j0;const y=u<<2|f>>4;if(s.push(y),g!==64){const R=f<<4&240|g>>2;if(s.push(R),v!==64){const D=g<<6&192|v;s.push(D)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class j0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Mg=function(r){const e=Lg(r);return Zc.encodeByteArray(e,!0)},hl=function(r){return Mg(r).replace(/\./g,"")},fl=function(r){try{return Zc.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z0(r){return bg(void 0,r)}function bg(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!W0(n)||(r[n]=bg(r[n],e[n]));return r}function W0(r){return r!=="__proto__"}/**
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
 */function B0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const V0=()=>B0().__FIREBASE_DEFAULTS__,$0=()=>{if(typeof process>"u"||typeof cm>"u")return;const r=cm.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},H0=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&fl(r[1]);return e&&JSON.parse(e)},ed=()=>{try{return V0()||$0()||H0()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Fg=r=>{var e,n;return(n=(e=ed())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[r]},G0=r=>{const e=Fg(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Ug=()=>{var r;return(r=ed())===null||r===void 0?void 0:r.config},jg=r=>{var e;return(e=ed())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function q0(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",l=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},r);return[hl(JSON.stringify(n)),hl(JSON.stringify(d)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function td(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lt())}function K0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function zg(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Wg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Y0(){const r=lt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Bg(){return Dg.NODE_ADMIN===!0}function Vg(){try{return typeof indexedDB=="object"}catch{return!1}}function $g(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},l.onupgradeneeded=()=>{n=!1},l.onerror=()=>{var u;e(((u=l.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){e(n)}})}function Q0(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0="FirebaseError";class ln extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=X0,Object.setPrototypeOf(this,ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xr.prototype.create)}}class xr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},l=`${this.service}/${e}`,u=this.errors[e],d=u?J0(u,s):"Error",f=`${this.serviceName}: ${d} (${l}).`;return new ln(l,f,s)}}function J0(r,e){return r.replace(Z0,(n,s)=>{const l=e[s];return l!=null?String(l):`<${s}?>`})}const Z0=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(r){return JSON.parse(r)}function Ke(r){return JSON.stringify(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg=function(r){let e={},n={},s={},l="";try{const u=r.split(".");e=Rs(fl(u[0])||""),n=Rs(fl(u[1])||""),l=u[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:l}},eE=function(r){const e=Hg(r),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},tE=function(r){const e=Hg(r).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function _i(r,e){if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}function Tc(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function pl(r,e,n){const s={};for(const l in r)Object.prototype.hasOwnProperty.call(r,l)&&(s[l]=e.call(n,r[l],l,r));return s}function Ns(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const l of n){if(!s.includes(l))return!1;const u=r[l],d=e[l];if(dm(u)&&dm(d)){if(!Ns(u,d))return!1}else if(u!==d)return!1}for(const l of s)if(!n.includes(l))return!1;return!0}function dm(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(r){const e=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(l=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(l))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let v=0;v<16;v++)s[v]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let v=0;v<16;v++)s[v]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let v=16;v<80;v++){const y=s[v-3]^s[v-8]^s[v-14]^s[v-16];s[v]=(y<<1|y>>>31)&4294967295}let l=this.chain_[0],u=this.chain_[1],d=this.chain_[2],f=this.chain_[3],p=this.chain_[4],g,w;for(let v=0;v<80;v++){v<40?v<20?(g=f^u&(d^f),w=1518500249):(g=u^d^f,w=1859775393):v<60?(g=u&d|f&(u|d),w=2400959708):(g=u^d^f,w=3395469782);const y=(l<<5|l>>>27)+g+p+w+s[v]&4294967295;p=f,f=d,d=(u<<30|u>>>2)&4294967295,u=l,l=y}this.chain_[0]=this.chain_[0]+l&4294967295,this.chain_[1]=this.chain_[1]+u&4294967295,this.chain_[2]=this.chain_[2]+d&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let l=0;const u=this.buf_;let d=this.inbuf_;for(;l<n;){if(d===0)for(;l<=s;)this.compress_(e,l),l+=this.blockSize;if(typeof e=="string"){for(;l<n;)if(u[d]=e.charCodeAt(l),++d,++l,d===this.blockSize){this.compress_(u),d=0;break}}else for(;l<n;)if(u[d]=e[l],++d,++l,d===this.blockSize){this.compress_(u),d=0;break}}this.inbuf_=d,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let l=this.blockSize-1;l>=56;l--)this.buf_[l]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let l=0;l<5;l++)for(let u=24;u>=0;u-=8)e[s]=this.chain_[l]>>u&255,++s;return e}}function rE(r,e){const n=new iE(r,e);return n.subscribe.bind(n)}class iE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let l;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");sE(e,["next","error","complete"])?l=e:l={next:e,error:n,complete:s},l.next===void 0&&(l.next=ac),l.error===void 0&&(l.error=ac),l.complete===void 0&&(l.complete=ac);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sE(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function ac(){}function Fl(r,e){return`${r} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);if(l>=55296&&l<=56319){const u=l-55296;s++,L(s<r.length,"Surrogate pair missing trail surrogate.");const d=r.charCodeAt(s)-56320;l=65536+(u<<10)+d}l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):l<65536?(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},Ul=function(r){let e=0;for(let n=0;n<r.length;n++){const s=r.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE=1e3,aE=2,uE=4*60*60*1e3,cE=.5;function hm(r,e=lE,n=aE){const s=e*Math.pow(n,r),l=Math.round(cE*s*(Math.random()-.5)*2);return Math.min(uE,s+l)}/**
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
 */function kt(r){return r&&r._delegate?r._delegate:r}class Kt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Fs;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:n});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),l=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(l)return null;throw u}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fE(e))try{this.getOrInitializeService({instanceIdentifier:Er})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:l});s.resolve(u)}catch{}}}}clearInstance(e=Er){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Er){return this.instances.has(e)}getOptions(e=Er){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,d]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(u);s===f&&d.resolve(l)}return l}onInit(e,n){var s;const l=this.normalizeInstanceIdentifier(n),u=(s=this.onInitCallbacks.get(l))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(l,u);const d=this.instances.get(l);return d&&e(d,l),()=>{u.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const l of s)try{l(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:hE(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Er){return this.component?this.component.multipleInstances?e:Er:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hE(r){return r===Er?void 0:r}function fE(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new dE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(me||(me={}));const mE={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},gE=me.INFO,_E={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},yE=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),l=_E[e];if(l)console[l](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jl{constructor(e){this.name=e,this._logLevel=gE,this._logHandler=yE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const vE=(r,e)=>e.some(n=>r instanceof n);let fm,pm;function wE(){return fm||(fm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function EE(){return pm||(pm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gg=new WeakMap,kc=new WeakMap,qg=new WeakMap,uc=new WeakMap,nd=new WeakMap;function SE(r){const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("success",u),r.removeEventListener("error",d)},u=()=>{n(Zn(r.result)),l()},d=()=>{s(r.error),l()};r.addEventListener("success",u),r.addEventListener("error",d)});return e.then(n=>{n instanceof IDBCursor&&Gg.set(n,r)}).catch(()=>{}),nd.set(e,r),e}function IE(r){if(kc.has(r))return;const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",d),r.removeEventListener("abort",d)},u=()=>{n(),l()},d=()=>{s(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",u),r.addEventListener("error",d),r.addEventListener("abort",d)});kc.set(r,e)}let Rc={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return kc.get(r);if(e==="objectStoreNames")return r.objectStoreNames||qg.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Zn(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function CE(r){Rc=r(Rc)}function TE(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(cc(this),e,...n);return qg.set(s,e.sort?e.sort():[e]),Zn(s)}:EE().includes(r)?function(...e){return r.apply(cc(this),e),Zn(Gg.get(this))}:function(...e){return Zn(r.apply(cc(this),e))}}function kE(r){return typeof r=="function"?TE(r):(r instanceof IDBTransaction&&IE(r),vE(r,wE())?new Proxy(r,Rc):r)}function Zn(r){if(r instanceof IDBRequest)return SE(r);if(uc.has(r))return uc.get(r);const e=kE(r);return e!==r&&(uc.set(r,e),nd.set(e,r)),e}const cc=r=>nd.get(r);function Kg(r,e,{blocked:n,upgrade:s,blocking:l,terminated:u}={}){const d=indexedDB.open(r,e),f=Zn(d);return s&&d.addEventListener("upgradeneeded",p=>{s(Zn(d.result),p.oldVersion,p.newVersion,Zn(d.transaction),p)}),n&&d.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),f.then(p=>{u&&p.addEventListener("close",()=>u()),l&&p.addEventListener("versionchange",g=>l(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const RE=["get","getKey","getAll","getAllKeys","count"],NE=["put","add","delete","clear"],dc=new Map;function mm(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(dc.get(e))return dc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,l=NE.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(l||RE.includes(n)))return;const u=async function(d,...f){const p=this.transaction(d,l?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(f.shift())),(await Promise.all([g[n](...f),l&&p.done]))[0]};return dc.set(e,u),u}CE(r=>({...r,get:(e,n,s)=>mm(e,n)||r.get(e,n,s),has:(e,n)=>!!mm(e,n)||r.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(AE(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function AE(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Nc="@firebase/app",gm="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=new jl("@firebase/app"),OE="@firebase/app-compat",xE="@firebase/analytics-compat",DE="@firebase/analytics",LE="@firebase/app-check-compat",ME="@firebase/app-check",bE="@firebase/auth",FE="@firebase/auth-compat",UE="@firebase/database",jE="@firebase/data-connect",zE="@firebase/database-compat",WE="@firebase/functions",BE="@firebase/functions-compat",VE="@firebase/installations",$E="@firebase/installations-compat",HE="@firebase/messaging",GE="@firebase/messaging-compat",qE="@firebase/performance",KE="@firebase/performance-compat",YE="@firebase/remote-config",QE="@firebase/remote-config-compat",XE="@firebase/storage",JE="@firebase/storage-compat",ZE="@firebase/firestore",eS="@firebase/vertexai",tS="@firebase/firestore-compat",nS="firebase",rS="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc="[DEFAULT]",iS={[Nc]:"fire-core",[OE]:"fire-core-compat",[DE]:"fire-analytics",[xE]:"fire-analytics-compat",[ME]:"fire-app-check",[LE]:"fire-app-check-compat",[bE]:"fire-auth",[FE]:"fire-auth-compat",[UE]:"fire-rtdb",[jE]:"fire-data-connect",[zE]:"fire-rtdb-compat",[WE]:"fire-fn",[BE]:"fire-fn-compat",[VE]:"fire-iid",[$E]:"fire-iid-compat",[HE]:"fire-fcm",[GE]:"fire-fcm-compat",[qE]:"fire-perf",[KE]:"fire-perf-compat",[YE]:"fire-rc",[QE]:"fire-rc-compat",[XE]:"fire-gcs",[JE]:"fire-gcs-compat",[ZE]:"fire-fst",[tS]:"fire-fst-compat",[eS]:"fire-vertex","fire-js":"fire-js",[nS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml=new Map,sS=new Map,Ac=new Map;function _m(r,e){try{r.container.addComponent(e)}catch(n){In.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function on(r){const e=r.name;if(Ac.has(e))return In.debug(`There were multiple attempts to register component ${e}.`),!1;Ac.set(e,r);for(const n of ml.values())_m(n,r);for(const n of sS.values())_m(n,r);return!0}function Dr(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function _n(r){return r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},er=new xr("app","Firebase",oS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Kt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw er.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti=rS;function Yg(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Pc,automaticDataCollectionEnabled:!1},e),l=s.name;if(typeof l!="string"||!l)throw er.create("bad-app-name",{appName:String(l)});if(n||(n=Ug()),!n)throw er.create("no-options");const u=ml.get(l);if(u){if(Ns(n,u.options)&&Ns(s,u.config))return u;throw er.create("duplicate-app",{appName:l})}const d=new pE(l);for(const p of Ac.values())d.addComponent(p);const f=new lS(n,s,d);return ml.set(l,f),f}function rd(r=Pc){const e=ml.get(r);if(!e&&r===Pc&&Ug())return Yg();if(!e)throw er.create("no-app",{appName:r});return e}function bt(r,e,n){var s;let l=(s=iS[r])!==null&&s!==void 0?s:r;n&&(l+=`-${n}`);const u=l.match(/\s|\//),d=e.match(/\s|\//);if(u||d){const f=[`Unable to register library "${l}" with version "${e}":`];u&&f.push(`library name "${l}" contains illegal characters (whitespace or "/")`),u&&d&&f.push("and"),d&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),In.warn(f.join(" "));return}on(new Kt(`${l}-version`,()=>({library:l,version:e}),"VERSION"))}/**
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
 */const aS="firebase-heartbeat-database",uS=1,Ps="firebase-heartbeat-store";let hc=null;function Qg(){return hc||(hc=Kg(aS,uS,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Ps)}catch(n){console.warn(n)}}}}).catch(r=>{throw er.create("idb-open",{originalErrorMessage:r.message})})),hc}async function cS(r){try{const n=(await Qg()).transaction(Ps),s=await n.objectStore(Ps).get(Xg(r));return await n.done,s}catch(e){if(e instanceof ln)In.warn(e.message);else{const n=er.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});In.warn(n.message)}}}async function ym(r,e){try{const s=(await Qg()).transaction(Ps,"readwrite");await s.objectStore(Ps).put(e,Xg(r)),await s.done}catch(n){if(n instanceof ln)In.warn(n.message);else{const s=er.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});In.warn(s.message)}}}function Xg(r){return`${r.name}!${r.options.appId}`}/**
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
 */const dS=1024,hS=30*24*60*60*1e3;class fS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new mS(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=vm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(d=>d.date===u)?void 0:(this._heartbeatsCache.heartbeats.push({date:u,agent:l}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(d=>{const f=new Date(d.date).valueOf();return Date.now()-f<=hS}),this._storage.overwrite(this._heartbeatsCache))}catch(s){In.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=vm(),{heartbeatsToSend:s,unsentEntries:l}=pS(this._heartbeatsCache.heartbeats),u=hl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return In.warn(n),""}}}function vm(){return new Date().toISOString().substring(0,10)}function pS(r,e=dS){const n=[];let s=r.slice();for(const l of r){const u=n.find(d=>d.agent===l.agent);if(u){if(u.dates.push(l.date),wm(n)>e){u.dates.pop();break}}else if(n.push({agent:l.agent,dates:[l.date]}),wm(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class mS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vg()?$g().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await cS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return ym(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return ym(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...e.heartbeats]})}else return}}function wm(r){return hl(JSON.stringify({version:2,heartbeats:r})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gS(r){on(new Kt("platform-logger",e=>new PE(e),"PRIVATE")),on(new Kt("heartbeat",e=>new fS(e),"PRIVATE")),bt(Nc,gm,r),bt(Nc,gm,"esm2017"),bt("fire-js","")}gS("");var Em={};const Sm="@firebase/database",Im="1.0.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jg="";function _S(r){Jg=r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ke(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Rs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return an(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg=function(r){try{if(typeof window<"u"&&typeof window[r]<"u"){const e=window[r];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new yS(e)}}catch{}return new vS},Ir=Zg("localStorage"),wS=Zg("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di=new jl("@firebase/database"),ES=function(){let r=1;return function(){return r++}}(),e_=function(r){const e=oE(r),n=new nE;n.update(e);const s=n.digest();return Zc.encodeByteArray(s)},Us=function(...r){let e="";for(let n=0;n<r.length;n++){const s=r[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Us.apply(null,s):typeof s=="object"?e+=Ke(s):e+=s,e+=" "}return e};let ws=null,Cm=!0;const SS=function(r,e){L(!e,"Can't turn on custom loggers persistently."),di.logLevel=me.VERBOSE,ws=di.log.bind(di)},Xe=function(...r){if(Cm===!0&&(Cm=!1,ws===null&&wS.get("logging_enabled")===!0&&SS()),ws){const e=Us.apply(null,r);ws(e)}},js=function(r){return function(...e){Xe(r,...e)}},Oc=function(...r){const e="FIREBASE INTERNAL ERROR: "+Us(...r);di.error(e)},Cn=function(...r){const e=`FIREBASE FATAL ERROR: ${Us(...r)}`;throw di.error(e),new Error(e)},ot=function(...r){const e="FIREBASE WARNING: "+Us(...r);di.warn(e)},IS=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ot("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},id=function(r){return typeof r=="number"&&(r!==r||r===Number.POSITIVE_INFINITY||r===Number.NEGATIVE_INFINITY)},CS=function(r){if(document.readyState==="complete")r();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,r())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},yi="[MIN_NAME]",Tr="[MAX_NAME]",Lr=function(r,e){if(r===e)return 0;if(r===yi||e===Tr)return-1;if(e===yi||r===Tr)return 1;{const n=Tm(r),s=Tm(e);return n!==null?s!==null?n-s===0?r.length-e.length:n-s:-1:s!==null?1:r<e?-1:1}},TS=function(r,e){return r===e?0:r<e?-1:1},gs=function(r,e){if(e&&r in e)return e[r];throw new Error("Missing required key ("+r+") in object: "+Ke(e))},sd=function(r){if(typeof r!="object"||r===null)return Ke(r);const e=[];for(const s in r)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ke(e[s]),n+=":",n+=sd(r[e[s]]);return n+="}",n},t_=function(r,e){const n=r.length;if(n<=e)return[r];const s=[];for(let l=0;l<n;l+=e)l+e>n?s.push(r.substring(l,n)):s.push(r.substring(l,l+e));return s};function Je(r,e){for(const n in r)r.hasOwnProperty(n)&&e(n,r[n])}const n_=function(r){L(!id(r),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let l,u,d,f,p;r===0?(u=0,d=0,l=1/r===-1/0?1:0):(l=r<0,r=Math.abs(r),r>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(r)/Math.LN2),s),u=f+s,d=Math.round(r*Math.pow(2,n-f)-Math.pow(2,n))):(u=0,d=Math.round(r/Math.pow(2,1-s-n))));const g=[];for(p=n;p;p-=1)g.push(d%2?1:0),d=Math.floor(d/2);for(p=e;p;p-=1)g.push(u%2?1:0),u=Math.floor(u/2);g.push(l?1:0),g.reverse();const w=g.join("");let v="";for(p=0;p<64;p+=8){let y=parseInt(w.substr(p,8),2).toString(16);y.length===1&&(y="0"+y),v=v+y}return v.toLowerCase()},kS=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},RS=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function NS(r,e){let n="Unknown Error";r==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":r==="permission_denied"?n="Client doesn't have permission to access the desired data.":r==="unavailable"&&(n="The service is unavailable");const s=new Error(r+" at "+e._path.toString()+": "+n);return s.code=r.toUpperCase(),s}const PS=new RegExp("^-?(0*)\\d{1,10}$"),AS=-2147483648,OS=2147483647,Tm=function(r){if(PS.test(r)){const e=Number(r);if(e>=AS&&e<=OS)return e}return null},ki=function(r){try{r()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ot("Exception was thrown by user callback.",n),e},Math.floor(0))}},xS=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Es=function(r,e){const n=setTimeout(r,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class DS{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ot(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(l=>this.auth_=l)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Xe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ot(e)}}class ll{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ll.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od="5",r_="v",i_="s",s_="r",o_="f",l_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,a_="ls",u_="p",xc="ac",c_="websocket",d_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e,n,s,l,u=!1,d="",f=!1,p=!1){this.secure=n,this.namespace=s,this.webSocketOnly=l,this.nodeAdmin=u,this.persistenceKey=d,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=p,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ir.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ir.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function MS(r){return r.host!==r.internalHost||r.isCustomHost()||r.includeNamespaceInQueryParams}function f_(r,e,n){L(typeof e=="string","typeof type must == string"),L(typeof n=="object","typeof params must == object");let s;if(e===c_)s=(r.secure?"wss://":"ws://")+r.internalHost+"/.ws?";else if(e===d_)s=(r.secure?"https://":"http://")+r.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);MS(r)&&(n.ns=r.namespace);const l=[];return Je(n,(u,d)=>{l.push(u+"="+d)}),s+l.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(){this.counters_={}}incrementCounter(e,n=1){an(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return z0(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc={},pc={};function ld(r){const e=r.toString();return fc[e]||(fc[e]=new bS),fc[e]}function FS(r,e){const n=r.toString();return pc[n]||(pc[n]=e()),pc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let l=0;l<s.length;++l)s[l]&&ki(()=>{this.onMessage_(s[l])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km="start",jS="close",zS="pLPCommand",WS="pRTLPCB",p_="id",m_="pw",g_="ser",BS="cb",VS="seg",$S="ts",HS="d",GS="dframe",__=1870,y_=30,qS=__-y_,KS=25e3,YS=3e4;class ai{constructor(e,n,s,l,u,d,f){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.transportSessionId=d,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=js(e),this.stats_=ld(n),this.urlFn=p=>(this.appCheckToken&&(p[xc]=this.appCheckToken),f_(n,d_,p))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new US(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(YS)),CS(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ad((...u)=>{const[d,f,p,g,w]=u;if(this.incrementIncomingBytes_(u),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,d===km)this.id=f,this.password=p;else if(d===jS)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+d)},(...u)=>{const[d,f]=u;this.incrementIncomingBytes_(u),this.myPacketOrderer.handleResponse(d,f)},()=>{this.onClosed_()},this.urlFn);const s={};s[km]="t",s[g_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[BS]=this.scriptTagHolder.uniqueCallbackIdentifier),s[r_]=od,this.transportSessionId&&(s[i_]=this.transportSessionId),this.lastSessionId&&(s[a_]=this.lastSessionId),this.applicationId&&(s[u_]=this.applicationId),this.appCheckToken&&(s[xc]=this.appCheckToken),typeof location<"u"&&location.hostname&&l_.test(location.hostname)&&(s[s_]=o_);const l=this.urlFn(s);this.log_("Connecting via long-poll to "+l),this.scriptTagHolder.addTag(l,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ai.forceAllow_=!0}static forceDisallow(){ai.forceDisallow_=!0}static isAvailable(){return ai.forceAllow_?!0:!ai.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!kS()&&!RS()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Mg(n),l=t_(s,qS);for(let u=0;u<l.length;u++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,l.length,l[u]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[GS]="t",s[p_]=e,s[m_]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ke(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ad{constructor(e,n,s,l){this.onDisconnect=s,this.urlFn=l,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ES(),window[zS+this.uniqueCallbackIdentifier]=e,window[WS+this.uniqueCallbackIdentifier]=n,this.myIFrame=ad.createIFrame_();let u="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(u='<script>document.domain="'+document.domain+'";<\/script>');const d="<html><body>"+u+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(d),this.myIFrame.doc.close()}catch(f){Xe("frame writing exception"),f.stack&&Xe(f.stack),Xe(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Xe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[p_]=this.myID,e[m_]=this.myPW,e[g_]=this.currentSerial;let n=this.urlFn(e),s="",l=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+y_+s.length<=__;){const d=this.pendingSegs.shift();s=s+"&"+VS+l+"="+d.seg+"&"+$S+l+"="+d.ts+"&"+HS+l+"="+d.d,l++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},l=setTimeout(s,Math.floor(KS)),u=()=>{clearTimeout(l),s()};this.addTag(e,u)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const l=s.readyState;(!l||l==="loaded"||l==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Xe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS=16384,XS=45e3;let gl=null;typeof MozWebSocket<"u"?gl=MozWebSocket:typeof WebSocket<"u"&&(gl=WebSocket);class Ht{constructor(e,n,s,l,u,d,f){this.connId=e,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=js(this.connId),this.stats_=ld(n),this.connURL=Ht.connectionURL_(n,d,f,l,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,l,u){const d={};return d[r_]=od,typeof location<"u"&&location.hostname&&l_.test(location.hostname)&&(d[s_]=o_),n&&(d[i_]=n),s&&(d[a_]=s),l&&(d[xc]=l),u&&(d[u_]=u),f_(e,c_,d)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ir.set("previous_websocket_failure",!0);try{let s;Bg(),this.mySock=new gl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_()}}start(){}static forceDisallow(){Ht.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&gl!==null&&!Ht.forceDisallow_}static previouslyFailed(){return Ir.isInMemoryStorage||Ir.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ir.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Rs(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(L(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=t_(n,QS);s.length>1&&this.sendString_(String(s.length));for(let l=0;l<s.length;l++)this.sendString_(s[l])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(XS))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ht.responsesRequiredToBeHealthy=2;Ht.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{static get ALL_TRANSPORTS(){return[ai,Ht]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Ht&&Ht.isAvailable();let s=n&&!Ht.previouslyFailed();if(e.webSocketOnly&&(n||ot("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ht];else{const l=this.transports_=[];for(const u of As.ALL_TRANSPORTS)u&&u.isAvailable()&&l.push(u);As.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}As.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS=6e4,ZS=5e3,eI=10*1024,tI=100*1024,mc="t",Rm="d",nI="s",Nm="r",rI="e",Pm="o",Am="a",Om="n",xm="p",iI="h";class sI{constructor(e,n,s,l,u,d,f,p,g,w){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=l,this.authToken_=u,this.onMessage_=d,this.onReady_=f,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=w,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=js("c:"+this.id+":"),this.transportManager_=new As(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const l=e.healthyTimeout||0;l>0&&(this.healthyTimeout_=Es(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>tI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>eI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(l)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(mc in e){const n=e[mc];n===Am?this.upgradeIfSecondaryHealthy_():n===Nm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Pm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=gs("t",e),s=gs("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:xm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Am,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Om,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=gs("t",e),s=gs("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=gs(mc,e);if(Rm in e){const s=e[Rm];if(n===iI){const l=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(l.h=this.repoInfo_.host),this.onHandshake_(l)}else if(n===Om){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let l=0;l<this.pendingDataMessages.length;++l)this.onDataMessage_(this.pendingDataMessages[l]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===nI?this.onConnectionShutdown_(s):n===Nm?this.onReset_(s):n===rI?Oc("Server Error: "+s):n===Pm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Oc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,l=e.h;this.sessionId=e.s,this.repoInfo_.host=l,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),od!==s&&ot("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Es(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(JS))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Es(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(ZS))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:xm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ir.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{put(e,n,s,l){}merge(e,n,s,l){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e){this.allowedEvents_=e,this.listeners_={},L(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let l=0;l<s.length;l++)s[l].callback.apply(s[l].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const l=this.getInitialEvent(e);l&&n.apply(s,l)}off(e,n,s){this.validateEventType_(e);const l=this.listeners_[e]||[];for(let u=0;u<l.length;u++)if(l[u].callback===n&&(!s||s===l[u].context)){l.splice(u,1);return}}validateEventType_(e){L(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l extends w_{static getInstance(){return new _l}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!td()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return L(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm=32,Lm=768;class _e{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let l=0;l<this.pieces_.length;l++)this.pieces_[l].length>0&&(this.pieces_[s]=this.pieces_[l],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function de(){return new _e("")}function te(r){return r.pieceNum_>=r.pieces_.length?null:r.pieces_[r.pieceNum_]}function rr(r){return r.pieces_.length-r.pieceNum_}function Ce(r){let e=r.pieceNum_;return e<r.pieces_.length&&e++,new _e(r.pieces_,e)}function ud(r){return r.pieceNum_<r.pieces_.length?r.pieces_[r.pieces_.length-1]:null}function oI(r){let e="";for(let n=r.pieceNum_;n<r.pieces_.length;n++)r.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(r.pieces_[n])));return e||"/"}function Os(r,e=0){return r.pieces_.slice(r.pieceNum_+e)}function E_(r){if(r.pieceNum_>=r.pieces_.length)return null;const e=[];for(let n=r.pieceNum_;n<r.pieces_.length-1;n++)e.push(r.pieces_[n]);return new _e(e,0)}function De(r,e){const n=[];for(let s=r.pieceNum_;s<r.pieces_.length;s++)n.push(r.pieces_[s]);if(e instanceof _e)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let l=0;l<s.length;l++)s[l].length>0&&n.push(s[l])}return new _e(n,0)}function ie(r){return r.pieceNum_>=r.pieces_.length}function mt(r,e){const n=te(r),s=te(e);if(n===null)return e;if(n===s)return mt(Ce(r),Ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+r+")")}function lI(r,e){const n=Os(r,0),s=Os(e,0);for(let l=0;l<n.length&&l<s.length;l++){const u=Lr(n[l],s[l]);if(u!==0)return u}return n.length===s.length?0:n.length<s.length?-1:1}function cd(r,e){if(rr(r)!==rr(e))return!1;for(let n=r.pieceNum_,s=e.pieceNum_;n<=r.pieces_.length;n++,s++)if(r.pieces_[n]!==e.pieces_[s])return!1;return!0}function Lt(r,e){let n=r.pieceNum_,s=e.pieceNum_;if(rr(r)>rr(e))return!1;for(;n<r.pieces_.length;){if(r.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class aI{constructor(e,n){this.errorPrefix_=n,this.parts_=Os(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ul(this.parts_[s]);S_(this)}}function uI(r,e){r.parts_.length>0&&(r.byteLength_+=1),r.parts_.push(e),r.byteLength_+=Ul(e),S_(r)}function cI(r){const e=r.parts_.pop();r.byteLength_-=Ul(e),r.parts_.length>0&&(r.byteLength_-=1)}function S_(r){if(r.byteLength_>Lm)throw new Error(r.errorPrefix_+"has a key path longer than "+Lm+" bytes ("+r.byteLength_+").");if(r.parts_.length>Dm)throw new Error(r.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Dm+") or object contains a cycle "+Sr(r))}function Sr(r){return r.parts_.length===0?"":"in property '"+r.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd extends w_{static getInstance(){return new dd}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return L(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s=1e3,dI=60*5*1e3,Mm=30*1e3,hI=1.3,fI=3e4,pI="server_kill",bm=3;class Sn extends v_{constructor(e,n,s,l,u,d,f,p){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=l,this.onServerInfoUpdate_=u,this.authTokenProvider_=d,this.appCheckTokenProvider_=f,this.authOverride_=p,this.id=Sn.nextPersistentConnectionId_++,this.log_=js("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=_s,this.maxReconnectDelay_=dI,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p&&!Bg())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");dd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&_l.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const l=++this.requestNumber_,u={r:l,a:e,b:n};this.log_(Ke(u)),L(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(u),s&&(this.requestCBHash_[l]=s)}get(e){this.initConnection_();const n=new Fs,l={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:d=>{const f=d.d;d.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(l),this.outstandingGetCount_++;const u=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(u),n.promise}listen(e,n,s,l){this.initConnection_();const u=e._queryIdentifier,d=e._path.toString();this.log_("Listen called for "+d+" "+u),this.listens.has(d)||this.listens.set(d,new Map),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),L(!this.listens.get(d).has(u),"listen() called twice for same path/queryId.");const f={onComplete:l,hashFn:n,query:e,tag:s};this.listens.get(d).set(u,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),l=n._queryIdentifier;this.log_("Listen on "+s+" for "+l);const u={p:s},d="q";e.tag&&(u.q=n._queryObject,u.t=e.tag),u.h=e.hashFn(),this.sendRequest(d,u,f=>{const p=f.d,g=f.s;Sn.warnOnListenWarnings_(p,n),(this.listens.get(s)&&this.listens.get(s).get(l))===e&&(this.log_("listen response",f),g!=="ok"&&this.removeListen_(s,l),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&an(e,"w")){const s=_i(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const l='".indexOn": "'+n._queryParams.getIndex().toString()+'"',u=n._path.toString();ot(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${l} at ${u} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||tE(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Mm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=eE(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,l=>{const u=l.s,d=l.d||"error";this.authToken_===e&&(u==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(u,d))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),l=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+l),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,l)&&this.connected_&&this.sendUnlisten_(s,l,e._queryObject,n)}sendUnlisten_(e,n,s,l){this.log_("Unlisten on "+e+" for "+n);const u={p:e},d="n";l&&(u.q=s,u.t=l),this.sendRequest(d,u)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,l){const u={p:n,d:s};this.log_("onDisconnect "+e,u),this.sendRequest(e,u,d=>{l&&setTimeout(()=>{l(d.s,d.d)},Math.floor(0))})}put(e,n,s,l){this.putInternal("p",e,n,s,l)}merge(e,n,s,l){this.putInternal("m",e,n,s,l)}putInternal(e,n,s,l,u){this.initConnection_();const d={p:n,d:s};u!==void 0&&(d.h=u),this.outstandingPuts_.push({action:e,request:d,onComplete:l}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,l=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,u=>{this.log_(n+" response",u),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),l&&l(u.s,u.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const u=s.d;this.log_("reportStats","Error sending stats: "+u)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ke(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Oc("Unrecognized action received from server: "+Ke(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){L(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=_s,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=_s,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>fI&&(this.reconnectDelay_=_s),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*hI)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),l=this.id+":"+Sn.nextConnectionId_++,u=this.lastSessionId;let d=!1,f=null;const p=function(){f?f.close():(d=!0,s())},g=function(v){L(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(v)};this.realtime_={close:p,sendRequest:g};const w=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[v,y]=await Promise.all([this.authTokenProvider_.getToken(w),this.appCheckTokenProvider_.getToken(w)]);d?Xe("getToken() completed but was canceled"):(Xe("getToken() completed. Creating connection."),this.authToken_=v&&v.accessToken,this.appCheckToken_=y&&y.token,f=new sI(l,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,R=>{ot(R+" ("+this.repoInfo_.toString()+")"),this.interrupt(pI)},u))}catch(v){this.log_("Failed to get token: "+v),d||(this.repoInfo_.nodeAdmin&&ot(v),p())}}}interrupt(e){Xe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Xe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Tc(this.interruptReasons_)&&(this.reconnectDelay_=_s,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(u=>sd(u)).join("$"):s="default";const l=this.removeListen_(e,s);l&&l.onComplete&&l.onComplete("permission_denied")}removeListen_(e,n){const s=new _e(e).toString();let l;if(this.listens.has(s)){const u=this.listens.get(s);l=u.get(n),u.delete(n),u.size===0&&this.listens.delete(s)}else l=void 0;return l}onAuthRevoked_(e,n){Xe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=bm&&(this.reconnectDelay_=Mm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Xe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=bm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Jg.replace(/\./g,"-")]=1,td()?e["framework.cordova"]=1:Wg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=_l.getInstance().currentlyOnline();return Tc(this.interruptReasons_)&&e}}Sn.nextPersistentConnectionId_=0;Sn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class zl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ne(yi,e),l=new ne(yi,n);return this.compare(s,l)!==0}minPost(){return ne.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let il;class I_ extends zl{static get __EMPTY_NODE(){return il}static set __EMPTY_NODE(e){il=e}compare(e,n){return Lr(e.name,n.name)}isDefinedOn(e){throw Ii("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ne.MIN}maxPost(){return new ne(Tr,il)}makePost(e,n){return L(typeof e=="string","KeyIndex indexValue must always be a string."),new ne(e,il)}toString(){return".key"}}const hi=new I_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,n,s,l,u=null){this.isReverse_=l,this.resultGenerator_=u,this.nodeStack_=[];let d=1;for(;!e.isEmpty();)if(e=e,d=n?s(e.key,n):1,l&&(d*=-1),d<0)this.isReverse_?e=e.left:e=e.right;else if(d===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ge{constructor(e,n,s,l,u){this.key=e,this.value=n,this.color=s??Ge.RED,this.left=l??gt.EMPTY_NODE,this.right=u??gt.EMPTY_NODE}copy(e,n,s,l,u){return new Ge(e??this.key,n??this.value,s??this.color,l??this.left,u??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let l=this;const u=s(e,l.key);return u<0?l=l.copy(null,null,null,l.left.insert(e,n,s),null):u===0?l=l.copy(null,n,null,null,null):l=l.copy(null,null,null,null,l.right.insert(e,n,s)),l.fixUp_()}removeMin_(){if(this.left.isEmpty())return gt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,l;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return gt.EMPTY_NODE;l=s.right.min_(),s=s.copy(l.key,l.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ge.RED=!0;Ge.BLACK=!1;class mI{copy(e,n,s,l,u){return this}insert(e,n,s){return new Ge(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class gt{constructor(e,n=gt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new gt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ge.BLACK,null,null))}remove(e){return new gt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ge.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,l=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return l?l.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(l=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new sl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new sl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new sl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new sl(this.root_,null,this.comparator_,!0,e)}}gt.EMPTY_NODE=new mI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gI(r,e){return Lr(r.name,e.name)}function hd(r,e){return Lr(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dc;function _I(r){Dc=r}const C_=function(r){return typeof r=="number"?"number:"+n_(r):"string:"+r},T_=function(r){if(r.isLeafNode()){const e=r.val();L(typeof e=="string"||typeof e=="number"||typeof e=="object"&&an(e,".sv"),"Priority must be a string or number.")}else L(r===Dc||r.isEmpty(),"priority of unexpected type.");L(r===Dc||r.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fm;class He{static set __childrenNodeConstructor(e){Fm=e}static get __childrenNodeConstructor(){return Fm}constructor(e,n=He.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,L(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),T_(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new He(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:He.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ie(e)?this:te(e)===".priority"?this.priorityNode_:He.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:He.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=te(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(L(s!==".priority"||rr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,He.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ce(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+C_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=n_(this.value_):e+=this.value_,this.lazyHash_=e_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===He.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof He.__childrenNodeConstructor?-1:(L(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,l=He.VALUE_TYPE_ORDER.indexOf(n),u=He.VALUE_TYPE_ORDER.indexOf(s);return L(l>=0,"Unknown leaf type: "+n),L(u>=0,"Unknown leaf type: "+s),l===u?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:u-l}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}He.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let k_,R_;function yI(r){k_=r}function vI(r){R_=r}class wI extends zl{compare(e,n){const s=e.node.getPriority(),l=n.node.getPriority(),u=s.compareTo(l);return u===0?Lr(e.name,n.name):u}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ne.MIN}maxPost(){return new ne(Tr,new He("[PRIORITY-POST]",R_))}makePost(e,n){const s=k_(e);return new ne(n,new He("[PRIORITY-POST]",s))}toString(){return".priority"}}const Le=new wI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI=Math.log(2);class SI{constructor(e){const n=u=>parseInt(Math.log(u)/EI,10),s=u=>parseInt(Array(u+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const l=s(this.count);this.bits_=e+1&l}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const yl=function(r,e,n,s){r.sort(e);const l=function(p,g){const w=g-p;let v,y;if(w===0)return null;if(w===1)return v=r[p],y=n?n(v):v,new Ge(y,v.node,Ge.BLACK,null,null);{const R=parseInt(w/2,10)+p,D=l(p,R),F=l(R+1,g);return v=r[R],y=n?n(v):v,new Ge(y,v.node,Ge.BLACK,D,F)}},u=function(p){let g=null,w=null,v=r.length;const y=function(D,F){const $=v-D,ve=v;v-=D;const we=l($+1,ve),pe=r[$],le=n?n(pe):pe;R(new Ge(le,pe.node,F,null,we))},R=function(D){g?(g.left=D,g=D):(w=D,g=D)};for(let D=0;D<p.count;++D){const F=p.nextBitIsOne(),$=Math.pow(2,p.count-(D+1));F?y($,Ge.BLACK):(y($,Ge.BLACK),y($,Ge.RED))}return w},d=new SI(r.length),f=u(d);return new gt(s||e,f)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gc;const li={};class yn{static get Default(){return L(li&&Le,"ChildrenNode.ts has not been loaded"),gc=gc||new yn({".priority":li},{".priority":Le}),gc}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=_i(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof gt?n:null}hasIndex(e){return an(this.indexSet_,e.toString())}addIndex(e,n){L(e!==hi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let l=!1;const u=n.getIterator(ne.Wrap);let d=u.getNext();for(;d;)l=l||e.isDefinedOn(d.node),s.push(d),d=u.getNext();let f;l?f=yl(s,e.getCompare()):f=li;const p=e.toString(),g=Object.assign({},this.indexSet_);g[p]=e;const w=Object.assign({},this.indexes_);return w[p]=f,new yn(w,g)}addToIndexes(e,n){const s=pl(this.indexes_,(l,u)=>{const d=_i(this.indexSet_,u);if(L(d,"Missing index implementation for "+u),l===li)if(d.isDefinedOn(e.node)){const f=[],p=n.getIterator(ne.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&f.push(g),g=p.getNext();return f.push(e),yl(f,d.getCompare())}else return li;else{const f=n.get(e.name);let p=l;return f&&(p=p.remove(new ne(e.name,f))),p.insert(e,e.node)}});return new yn(s,this.indexSet_)}removeFromIndexes(e,n){const s=pl(this.indexes_,l=>{if(l===li)return l;{const u=n.get(e.name);return u?l.remove(new ne(e.name,u)):l}});return new yn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ys;class K{static get EMPTY_NODE(){return ys||(ys=new K(new gt(hd),null,yn.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&T_(this.priorityNode_),this.children_.isEmpty()&&L(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ys}updatePriority(e){return this.children_.isEmpty()?this:new K(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ys:n}}getChild(e){const n=te(e);return n===null?this:this.getImmediateChild(n).getChild(Ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(L(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ne(e,n);let l,u;n.isEmpty()?(l=this.children_.remove(e),u=this.indexMap_.removeFromIndexes(s,this.children_)):(l=this.children_.insert(e,n),u=this.indexMap_.addToIndexes(s,this.children_));const d=l.isEmpty()?ys:this.priorityNode_;return new K(l,d,u)}}updateChild(e,n){const s=te(e);if(s===null)return n;{L(te(e)!==".priority"||rr(e)===1,".priority must be the last token in a path");const l=this.getImmediateChild(s).updateChild(Ce(e),n);return this.updateImmediateChild(s,l)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,l=0,u=!0;if(this.forEachChild(Le,(d,f)=>{n[d]=f.val(e),s++,u&&K.INTEGER_REGEXP_.test(d)?l=Math.max(l,Number(d)):u=!1}),!e&&u&&l<2*s){const d=[];for(const f in n)d[f]=n[f];return d}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+C_(this.getPriority().val())+":"),this.forEachChild(Le,(n,s)=>{const l=s.hash();l!==""&&(e+=":"+n+":"+l)}),this.lazyHash_=e===""?"":e_(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const l=this.resolveIndex_(s);if(l){const u=l.getPredecessorKey(new ne(e,n));return u?u.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ne(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ne(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(l=>n(l.name,l.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,l=>l);{const l=this.children_.getIteratorFrom(e.name,ne.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)<0;)l.getNext(),u=l.peek();return l}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,l=>l);{const l=this.children_.getReverseIteratorFrom(e.name,ne.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)>0;)l.getNext(),u=l.peek();return l}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===zs?-1:0}withIndex(e){if(e===hi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new K(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===hi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Le),l=n.getIterator(Le);let u=s.getNext(),d=l.getNext();for(;u&&d;){if(u.name!==d.name||!u.node.equals(d.node))return!1;u=s.getNext(),d=l.getNext()}return u===null&&d===null}else return!1;else return!1}}resolveIndex_(e){return e===hi?null:this.indexMap_.get(e.toString())}}K.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class II extends K{constructor(){super(new gt(hd),K.EMPTY_NODE,yn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return K.EMPTY_NODE}isEmpty(){return!1}}const zs=new II;Object.defineProperties(ne,{MIN:{value:new ne(yi,K.EMPTY_NODE)},MAX:{value:new ne(Tr,zs)}});I_.__EMPTY_NODE=K.EMPTY_NODE;He.__childrenNodeConstructor=K;_I(zs);vI(zs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CI=!0;function qe(r,e=null){if(r===null)return K.EMPTY_NODE;if(typeof r=="object"&&".priority"in r&&(e=r[".priority"]),L(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof r=="object"&&".value"in r&&r[".value"]!==null&&(r=r[".value"]),typeof r!="object"||".sv"in r){const n=r;return new He(n,qe(e))}if(!(r instanceof Array)&&CI){const n=[];let s=!1;if(Je(r,(d,f)=>{if(d.substring(0,1)!=="."){const p=qe(f);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),n.push(new ne(d,p)))}}),n.length===0)return K.EMPTY_NODE;const u=yl(n,gI,d=>d.name,hd);if(s){const d=yl(n,Le.getCompare());return new K(u,qe(e),new yn({".priority":d},{".priority":Le}))}else return new K(u,qe(e),yn.Default)}else{let n=K.EMPTY_NODE;return Je(r,(s,l)=>{if(an(r,s)&&s.substring(0,1)!=="."){const u=qe(l);(u.isLeafNode()||!u.isEmpty())&&(n=n.updateImmediateChild(s,u))}}),n.updatePriority(qe(e))}}yI(qe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI extends zl{constructor(e){super(),this.indexPath_=e,L(!ie(e)&&te(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),l=this.extractChild(n.node),u=s.compareTo(l);return u===0?Lr(e.name,n.name):u}makePost(e,n){const s=qe(e),l=K.EMPTY_NODE.updateChild(this.indexPath_,s);return new ne(n,l)}maxPost(){const e=K.EMPTY_NODE.updateChild(this.indexPath_,zs);return new ne(Tr,e)}toString(){return Os(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI extends zl{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Lr(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ne.MIN}maxPost(){return ne.MAX}makePost(e,n){const s=qe(e);return new ne(n,s)}toString(){return".value"}}const RI=new kI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(r){return{type:"value",snapshotNode:r}}function vi(r,e){return{type:"child_added",snapshotNode:e,childName:r}}function xs(r,e){return{type:"child_removed",snapshotNode:e,childName:r}}function Ds(r,e,n){return{type:"child_changed",snapshotNode:e,childName:r,oldSnap:n}}function NI(r,e){return{type:"child_moved",snapshotNode:e,childName:r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(e){this.index_=e}updateChild(e,n,s,l,u,d){L(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(n);return f.getChild(l).equals(s.getChild(l))&&f.isEmpty()===s.isEmpty()||(d!=null&&(s.isEmpty()?e.hasChild(n)?d.trackChildChange(xs(n,f)):L(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?d.trackChildChange(vi(n,s)):d.trackChildChange(Ds(n,s,f))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Le,(l,u)=>{n.hasChild(l)||s.trackChildChange(xs(l,u))}),n.isLeafNode()||n.forEachChild(Le,(l,u)=>{if(e.hasChild(l)){const d=e.getImmediateChild(l);d.equals(u)||s.trackChildChange(Ds(l,u,d))}else s.trackChildChange(vi(l,u))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?K.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e){this.indexedFilter_=new fd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ls.getStartPost_(e),this.endPost_=Ls.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,l,u,d){return this.matches(new ne(n,s))||(s=K.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,l,u,d)}updateFullNode(e,n,s){n.isLeafNode()&&(n=K.EMPTY_NODE);let l=n.withIndex(this.index_);l=l.updatePriority(K.EMPTY_NODE);const u=this;return n.forEachChild(Le,(d,f)=>{u.matches(new ne(d,f))||(l=l.updateImmediateChild(d,K.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Ls(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,l,u,d){return this.rangedFilter_.matches(new ne(n,s))||(s=K.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,l,u,d):this.fullLimitUpdateChild_(e,n,s,u,d)}updateFullNode(e,n,s){let l;if(n.isLeafNode()||n.isEmpty())l=K.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){l=K.EMPTY_NODE.withIndex(this.index_);let u;this.reverse_?u=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):u=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let d=0;for(;u.hasNext()&&d<this.limit_;){const f=u.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))l=l.updateImmediateChild(f.name,f.node),d++;else break;else continue}}else{l=n.withIndex(this.index_),l=l.updatePriority(K.EMPTY_NODE);let u;this.reverse_?u=l.getReverseIterator(this.index_):u=l.getIterator(this.index_);let d=0;for(;u.hasNext();){const f=u.getNext();d<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?d++:l=l.updateImmediateChild(f.name,K.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,l,u){let d;if(this.reverse_){const v=this.index_.getCompare();d=(y,R)=>v(R,y)}else d=this.index_.getCompare();const f=e;L(f.numChildren()===this.limit_,"");const p=new ne(n,s),g=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),w=this.rangedFilter_.matches(p);if(f.hasChild(n)){const v=f.getImmediateChild(n);let y=l.getChildAfterChild(this.index_,g,this.reverse_);for(;y!=null&&(y.name===n||f.hasChild(y.name));)y=l.getChildAfterChild(this.index_,y,this.reverse_);const R=y==null?1:d(y,p);if(w&&!s.isEmpty()&&R>=0)return u!=null&&u.trackChildChange(Ds(n,s,v)),f.updateImmediateChild(n,s);{u!=null&&u.trackChildChange(xs(n,v));const F=f.updateImmediateChild(n,K.EMPTY_NODE);return y!=null&&this.rangedFilter_.matches(y)?(u!=null&&u.trackChildChange(vi(y.name,y.node)),F.updateImmediateChild(y.name,y.node)):F}}else return s.isEmpty()?e:w&&d(g,p)>=0?(u!=null&&(u.trackChildChange(xs(g.name,g.node)),u.trackChildChange(vi(n,s))),f.updateImmediateChild(n,s).updateImmediateChild(g.name,K.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Le}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return L(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return L(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:yi}hasEnd(){return this.endSet_}getIndexEndValue(){return L(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return L(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Tr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return L(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Le}copy(){const e=new pd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function AI(r){return r.loadsAllData()?new fd(r.getIndex()):r.hasLimit()?new PI(r):new Ls(r)}function Um(r){const e={};if(r.isDefault())return e;let n;if(r.index_===Le?n="$priority":r.index_===RI?n="$value":r.index_===hi?n="$key":(L(r.index_ instanceof TI,"Unrecognized index type!"),n=r.index_.toString()),e.orderBy=Ke(n),r.startSet_){const s=r.startAfterSet_?"startAfter":"startAt";e[s]=Ke(r.indexStartValue_),r.startNameSet_&&(e[s]+=","+Ke(r.indexStartName_))}if(r.endSet_){const s=r.endBeforeSet_?"endBefore":"endAt";e[s]=Ke(r.indexEndValue_),r.endNameSet_&&(e[s]+=","+Ke(r.indexEndName_))}return r.limitSet_&&(r.isViewFromLeft()?e.limitToFirst=r.limit_:e.limitToLast=r.limit_),e}function jm(r){const e={};if(r.startSet_&&(e.sp=r.indexStartValue_,r.startNameSet_&&(e.sn=r.indexStartName_),e.sin=!r.startAfterSet_),r.endSet_&&(e.ep=r.indexEndValue_,r.endNameSet_&&(e.en=r.indexEndName_),e.ein=!r.endBeforeSet_),r.limitSet_){e.l=r.limit_;let n=r.viewFrom_;n===""&&(r.isViewFromLeft()?n="l":n="r"),e.vf=n}return r.index_!==Le&&(e.i=r.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl extends v_{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(L(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,l){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=l,this.log_=js("p:rest:"),this.listens_={}}listen(e,n,s,l){const u=e._path.toString();this.log_("Listen called for "+u+" "+e._queryIdentifier);const d=vl.getListenId_(e,s),f={};this.listens_[d]=f;const p=Um(e._queryParams);this.restRequest_(u+".json",p,(g,w)=>{let v=w;if(g===404&&(v=null,g=null),g===null&&this.onDataUpdate_(u,v,!1,s),_i(this.listens_,d)===f){let y;g?g===401?y="permission_denied":y="rest_error:"+g:y="ok",l(y,null)}})}unlisten(e,n){const s=vl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Um(e._queryParams),s=e._path.toString(),l=new Fs;return this.restRequest_(s+".json",n,(u,d)=>{let f=d;u===404&&(f=null,u=null),u===null?(this.onDataUpdate_(s,f,!1,null),l.resolve(f)):l.reject(new Error(f))}),l.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([l,u])=>{l&&l.accessToken&&(n.auth=l.accessToken),u&&u.token&&(n.ac=u.token);const d=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ci(n);this.log_("Sending REST request for "+d);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(s&&f.readyState===4){this.log_("REST Response for "+d+" received. status:",f.status,"response:",f.responseText);let p=null;if(f.status>=200&&f.status<300){try{p=Rs(f.responseText)}catch{ot("Failed to parse JSON response for "+d+": "+f.responseText)}s(null,p)}else f.status!==401&&f.status!==404&&ot("Got unsuccessful REST response for "+d+" Status: "+f.status),s(f.status);s=null}},f.open("GET",d,!0),f.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(){this.rootNode_=K.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(){return{value:null,children:new Map}}function P_(r,e,n){if(ie(e))r.value=n,r.children.clear();else if(r.value!==null)r.value=r.value.updateChild(e,n);else{const s=te(e);r.children.has(s)||r.children.set(s,wl());const l=r.children.get(s);e=Ce(e),P_(l,e,n)}}function Lc(r,e,n){r.value!==null?n(e,r.value):xI(r,(s,l)=>{const u=new _e(e.toString()+"/"+s);Lc(l,u,n)})}function xI(r,e){r.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Je(this.last_,(s,l)=>{n[s]=n[s]-l}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm=10*1e3,LI=30*1e3,MI=5*60*1e3;class bI{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new DI(e);const s=zm+(LI-zm)*Math.random();Es(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Je(e,(l,u)=>{u>0&&an(this.statsToReport_,l)&&(n[l]=u,s=!0)}),s&&this.server_.reportStats(n),Es(this.reportStats_.bind(this),Math.floor(Math.random()*2*MI))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gt;(function(r){r[r.OVERWRITE=0]="OVERWRITE",r[r.MERGE=1]="MERGE",r[r.ACK_USER_WRITE=2]="ACK_USER_WRITE",r[r.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Gt||(Gt={}));function md(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function gd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function _d(r){return{fromUser:!1,fromServer:!0,queryId:r,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Gt.ACK_USER_WRITE,this.source=md()}operationForChild(e){if(ie(this.path)){if(this.affectedTree.value!=null)return L(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new _e(e));return new El(de(),n,this.revert)}}else return L(te(this.path)===e,"operationForChild called for unrelated child."),new El(Ce(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,n){this.source=e,this.path=n,this.type=Gt.LISTEN_COMPLETE}operationForChild(e){return ie(this.path)?new Ms(this.source,de()):new Ms(this.source,Ce(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Gt.OVERWRITE}operationForChild(e){return ie(this.path)?new kr(this.source,de(),this.snap.getImmediateChild(e)):new kr(this.source,Ce(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Gt.MERGE}operationForChild(e){if(ie(this.path)){const n=this.children.subtree(new _e(e));return n.isEmpty()?null:n.value?new kr(this.source,de(),n.value):new wi(this.source,de(),n)}else return L(te(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new wi(this.source,Ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ie(e))return this.isFullyInitialized()&&!this.filtered_;const n=te(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function UI(r,e,n,s){const l=[],u=[];return e.forEach(d=>{d.type==="child_changed"&&r.index_.indexedValueChanged(d.oldSnap,d.snapshotNode)&&u.push(NI(d.childName,d.snapshotNode))}),vs(r,l,"child_removed",e,s,n),vs(r,l,"child_added",e,s,n),vs(r,l,"child_moved",u,s,n),vs(r,l,"child_changed",e,s,n),vs(r,l,"value",e,s,n),l}function vs(r,e,n,s,l,u){const d=s.filter(f=>f.type===n);d.sort((f,p)=>zI(r,f,p)),d.forEach(f=>{const p=jI(r,f,u);l.forEach(g=>{g.respondsTo(f.type)&&e.push(g.createEvent(p,r.query_))})})}function jI(r,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,r.index_)),e}function zI(r,e,n){if(e.childName==null||n.childName==null)throw Ii("Should only compare child_ events.");const s=new ne(e.childName,e.snapshotNode),l=new ne(n.childName,n.snapshotNode);return r.index_.compare(s,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(r,e){return{eventCache:r,serverCache:e}}function Ss(r,e,n,s){return Wl(new Rr(e,n,s),r.serverCache)}function A_(r,e,n,s){return Wl(r.eventCache,new Rr(e,n,s))}function Mc(r){return r.eventCache.isFullyInitialized()?r.eventCache.getNode():null}function Nr(r){return r.serverCache.isFullyInitialized()?r.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _c;const WI=()=>(_c||(_c=new gt(TS)),_c);class Ie{static fromObject(e){let n=new Ie(null);return Je(e,(s,l)=>{n=n.set(new _e(s),l)}),n}constructor(e,n=WI()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:de(),value:this.value};if(ie(e))return null;{const s=te(e),l=this.children.get(s);if(l!==null){const u=l.findRootMostMatchingPathAndValue(Ce(e),n);return u!=null?{path:De(new _e(s),u.path),value:u.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ie(e))return this;{const n=te(e),s=this.children.get(n);return s!==null?s.subtree(Ce(e)):new Ie(null)}}set(e,n){if(ie(e))return new Ie(n,this.children);{const s=te(e),u=(this.children.get(s)||new Ie(null)).set(Ce(e),n),d=this.children.insert(s,u);return new Ie(this.value,d)}}remove(e){if(ie(e))return this.children.isEmpty()?new Ie(null):new Ie(null,this.children);{const n=te(e),s=this.children.get(n);if(s){const l=s.remove(Ce(e));let u;return l.isEmpty()?u=this.children.remove(n):u=this.children.insert(n,l),this.value===null&&u.isEmpty()?new Ie(null):new Ie(this.value,u)}else return this}}get(e){if(ie(e))return this.value;{const n=te(e),s=this.children.get(n);return s?s.get(Ce(e)):null}}setTree(e,n){if(ie(e))return n;{const s=te(e),u=(this.children.get(s)||new Ie(null)).setTree(Ce(e),n);let d;return u.isEmpty()?d=this.children.remove(s):d=this.children.insert(s,u),new Ie(this.value,d)}}fold(e){return this.fold_(de(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((l,u)=>{s[l]=u.fold_(De(e,l),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,de(),n)}findOnPath_(e,n,s){const l=this.value?s(n,this.value):!1;if(l)return l;if(ie(e))return null;{const u=te(e),d=this.children.get(u);return d?d.findOnPath_(Ce(e),De(n,u),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,de(),n)}foreachOnPath_(e,n,s){if(ie(e))return this;{this.value&&s(n,this.value);const l=te(e),u=this.children.get(l);return u?u.foreachOnPath_(Ce(e),De(n,l),s):new Ie(null)}}foreach(e){this.foreach_(de(),e)}foreach_(e,n){this.children.inorderTraversal((s,l)=>{l.foreach_(De(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.writeTree_=e}static empty(){return new qt(new Ie(null))}}function Is(r,e,n){if(ie(e))return new qt(new Ie(n));{const s=r.writeTree_.findRootMostValueAndPath(e);if(s!=null){const l=s.path;let u=s.value;const d=mt(l,e);return u=u.updateChild(d,n),new qt(r.writeTree_.set(l,u))}else{const l=new Ie(n),u=r.writeTree_.setTree(e,l);return new qt(u)}}}function bc(r,e,n){let s=r;return Je(n,(l,u)=>{s=Is(s,De(e,l),u)}),s}function Wm(r,e){if(ie(e))return qt.empty();{const n=r.writeTree_.setTree(e,new Ie(null));return new qt(n)}}function Fc(r,e){return Mr(r,e)!=null}function Mr(r,e){const n=r.writeTree_.findRootMostValueAndPath(e);return n!=null?r.writeTree_.get(n.path).getChild(mt(n.path,e)):null}function Bm(r){const e=[],n=r.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Le,(s,l)=>{e.push(new ne(s,l))}):r.writeTree_.children.inorderTraversal((s,l)=>{l.value!=null&&e.push(new ne(s,l.value))}),e}function tr(r,e){if(ie(e))return r;{const n=Mr(r,e);return n!=null?new qt(new Ie(n)):new qt(r.writeTree_.subtree(e))}}function Uc(r){return r.writeTree_.isEmpty()}function Ei(r,e){return O_(de(),r.writeTree_,e)}function O_(r,e,n){if(e.value!=null)return n.updateChild(r,e.value);{let s=null;return e.children.inorderTraversal((l,u)=>{l===".priority"?(L(u.value!==null,"Priority writes must always be leaf nodes"),s=u.value):n=O_(De(r,l),u,n)}),!n.getChild(r).isEmpty()&&s!==null&&(n=n.updateChild(De(r,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yd(r,e){return M_(e,r)}function BI(r,e,n,s,l){L(s>r.lastWriteId,"Stacking an older write on top of newer ones"),l===void 0&&(l=!0),r.allWrites.push({path:e,snap:n,writeId:s,visible:l}),l&&(r.visibleWrites=Is(r.visibleWrites,e,n)),r.lastWriteId=s}function VI(r,e,n,s){L(s>r.lastWriteId,"Stacking an older merge on top of newer ones"),r.allWrites.push({path:e,children:n,writeId:s,visible:!0}),r.visibleWrites=bc(r.visibleWrites,e,n),r.lastWriteId=s}function $I(r,e){for(let n=0;n<r.allWrites.length;n++){const s=r.allWrites[n];if(s.writeId===e)return s}return null}function HI(r,e){const n=r.allWrites.findIndex(f=>f.writeId===e);L(n>=0,"removeWrite called with nonexistent writeId.");const s=r.allWrites[n];r.allWrites.splice(n,1);let l=s.visible,u=!1,d=r.allWrites.length-1;for(;l&&d>=0;){const f=r.allWrites[d];f.visible&&(d>=n&&GI(f,s.path)?l=!1:Lt(s.path,f.path)&&(u=!0)),d--}if(l){if(u)return qI(r),!0;if(s.snap)r.visibleWrites=Wm(r.visibleWrites,s.path);else{const f=s.children;Je(f,p=>{r.visibleWrites=Wm(r.visibleWrites,De(s.path,p))})}return!0}else return!1}function GI(r,e){if(r.snap)return Lt(r.path,e);for(const n in r.children)if(r.children.hasOwnProperty(n)&&Lt(De(r.path,n),e))return!0;return!1}function qI(r){r.visibleWrites=x_(r.allWrites,KI,de()),r.allWrites.length>0?r.lastWriteId=r.allWrites[r.allWrites.length-1].writeId:r.lastWriteId=-1}function KI(r){return r.visible}function x_(r,e,n){let s=qt.empty();for(let l=0;l<r.length;++l){const u=r[l];if(e(u)){const d=u.path;let f;if(u.snap)Lt(n,d)?(f=mt(n,d),s=Is(s,f,u.snap)):Lt(d,n)&&(f=mt(d,n),s=Is(s,de(),u.snap.getChild(f)));else if(u.children){if(Lt(n,d))f=mt(n,d),s=bc(s,f,u.children);else if(Lt(d,n))if(f=mt(d,n),ie(f))s=bc(s,de(),u.children);else{const p=_i(u.children,te(f));if(p){const g=p.getChild(Ce(f));s=Is(s,de(),g)}}}else throw Ii("WriteRecord should have .snap or .children")}}return s}function D_(r,e,n,s,l){if(!s&&!l){const u=Mr(r.visibleWrites,e);if(u!=null)return u;{const d=tr(r.visibleWrites,e);if(Uc(d))return n;if(n==null&&!Fc(d,de()))return null;{const f=n||K.EMPTY_NODE;return Ei(d,f)}}}else{const u=tr(r.visibleWrites,e);if(!l&&Uc(u))return n;if(!l&&n==null&&!Fc(u,de()))return null;{const d=function(g){return(g.visible||l)&&(!s||!~s.indexOf(g.writeId))&&(Lt(g.path,e)||Lt(e,g.path))},f=x_(r.allWrites,d,e),p=n||K.EMPTY_NODE;return Ei(f,p)}}}function YI(r,e,n){let s=K.EMPTY_NODE;const l=Mr(r.visibleWrites,e);if(l)return l.isLeafNode()||l.forEachChild(Le,(u,d)=>{s=s.updateImmediateChild(u,d)}),s;if(n){const u=tr(r.visibleWrites,e);return n.forEachChild(Le,(d,f)=>{const p=Ei(tr(u,new _e(d)),f);s=s.updateImmediateChild(d,p)}),Bm(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}else{const u=tr(r.visibleWrites,e);return Bm(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}}function QI(r,e,n,s,l){L(s||l,"Either existingEventSnap or existingServerSnap must exist");const u=De(e,n);if(Fc(r.visibleWrites,u))return null;{const d=tr(r.visibleWrites,u);return Uc(d)?l.getChild(n):Ei(d,l.getChild(n))}}function XI(r,e,n,s){const l=De(e,n),u=Mr(r.visibleWrites,l);if(u!=null)return u;if(s.isCompleteForChild(n)){const d=tr(r.visibleWrites,l);return Ei(d,s.getNode().getImmediateChild(n))}else return null}function JI(r,e){return Mr(r.visibleWrites,e)}function ZI(r,e,n,s,l,u,d){let f;const p=tr(r.visibleWrites,e),g=Mr(p,de());if(g!=null)f=g;else if(n!=null)f=Ei(p,n);else return[];if(f=f.withIndex(d),!f.isEmpty()&&!f.isLeafNode()){const w=[],v=d.getCompare(),y=u?f.getReverseIteratorFrom(s,d):f.getIteratorFrom(s,d);let R=y.getNext();for(;R&&w.length<l;)v(R,s)!==0&&w.push(R),R=y.getNext();return w}else return[]}function eC(){return{visibleWrites:qt.empty(),allWrites:[],lastWriteId:-1}}function Sl(r,e,n,s){return D_(r.writeTree,r.treePath,e,n,s)}function vd(r,e){return YI(r.writeTree,r.treePath,e)}function Vm(r,e,n,s){return QI(r.writeTree,r.treePath,e,n,s)}function Il(r,e){return JI(r.writeTree,De(r.treePath,e))}function tC(r,e,n,s,l,u){return ZI(r.writeTree,r.treePath,e,n,s,l,u)}function wd(r,e,n){return XI(r.writeTree,r.treePath,e,n)}function L_(r,e){return M_(De(r.treePath,e),r.writeTree)}function M_(r,e){return{treePath:r,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;L(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),L(s!==".priority","Only non-priority child changes can be tracked.");const l=this.changeMap.get(s);if(l){const u=l.type;if(n==="child_added"&&u==="child_removed")this.changeMap.set(s,Ds(s,e.snapshotNode,l.snapshotNode));else if(n==="child_removed"&&u==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&u==="child_changed")this.changeMap.set(s,xs(s,l.oldSnap));else if(n==="child_changed"&&u==="child_added")this.changeMap.set(s,vi(s,e.snapshotNode));else if(n==="child_changed"&&u==="child_changed")this.changeMap.set(s,Ds(s,e.snapshotNode,l.oldSnap));else throw Ii("Illegal combination of changes: "+e+" occurred after "+l)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const b_=new rC;class Ed{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Rr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return wd(this.writes_,e,s)}}getChildAfterChild(e,n,s){const l=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Nr(this.viewCache_),u=tC(this.writes_,l,n,1,s,e);return u.length===0?null:u[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iC(r){return{filter:r}}function sC(r,e){L(e.eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),L(e.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed")}function oC(r,e,n,s,l){const u=new nC;let d,f;if(n.type===Gt.OVERWRITE){const g=n;g.source.fromUser?d=jc(r,e,g.path,g.snap,s,l,u):(L(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered()&&!ie(g.path),d=Cl(r,e,g.path,g.snap,s,l,f,u))}else if(n.type===Gt.MERGE){const g=n;g.source.fromUser?d=aC(r,e,g.path,g.children,s,l,u):(L(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered(),d=zc(r,e,g.path,g.children,s,l,f,u))}else if(n.type===Gt.ACK_USER_WRITE){const g=n;g.revert?d=dC(r,e,g.path,s,l,u):d=uC(r,e,g.path,g.affectedTree,s,l,u)}else if(n.type===Gt.LISTEN_COMPLETE)d=cC(r,e,n.path,s,u);else throw Ii("Unknown operation type: "+n.type);const p=u.getChanges();return lC(e,d,p),{viewCache:d,changes:p}}function lC(r,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const l=s.getNode().isLeafNode()||s.getNode().isEmpty(),u=Mc(r);(n.length>0||!r.eventCache.isFullyInitialized()||l&&!s.getNode().equals(u)||!s.getNode().getPriority().equals(u.getPriority()))&&n.push(N_(Mc(e)))}}function F_(r,e,n,s,l,u){const d=e.eventCache;if(Il(s,n)!=null)return e;{let f,p;if(ie(n))if(L(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=Nr(e),w=g instanceof K?g:K.EMPTY_NODE,v=vd(s,w);f=r.filter.updateFullNode(e.eventCache.getNode(),v,u)}else{const g=Sl(s,Nr(e));f=r.filter.updateFullNode(e.eventCache.getNode(),g,u)}else{const g=te(n);if(g===".priority"){L(rr(n)===1,"Can't have a priority with additional path components");const w=d.getNode();p=e.serverCache.getNode();const v=Vm(s,n,w,p);v!=null?f=r.filter.updatePriority(w,v):f=d.getNode()}else{const w=Ce(n);let v;if(d.isCompleteForChild(g)){p=e.serverCache.getNode();const y=Vm(s,n,d.getNode(),p);y!=null?v=d.getNode().getImmediateChild(g).updateChild(w,y):v=d.getNode().getImmediateChild(g)}else v=wd(s,g,e.serverCache);v!=null?f=r.filter.updateChild(d.getNode(),g,v,w,l,u):f=d.getNode()}}return Ss(e,f,d.isFullyInitialized()||ie(n),r.filter.filtersNodes())}}function Cl(r,e,n,s,l,u,d,f){const p=e.serverCache;let g;const w=d?r.filter:r.filter.getIndexedFilter();if(ie(n))g=w.updateFullNode(p.getNode(),s,null);else if(w.filtersNodes()&&!p.isFiltered()){const R=p.getNode().updateChild(n,s);g=w.updateFullNode(p.getNode(),R,null)}else{const R=te(n);if(!p.isCompleteForPath(n)&&rr(n)>1)return e;const D=Ce(n),$=p.getNode().getImmediateChild(R).updateChild(D,s);R===".priority"?g=w.updatePriority(p.getNode(),$):g=w.updateChild(p.getNode(),R,$,D,b_,null)}const v=A_(e,g,p.isFullyInitialized()||ie(n),w.filtersNodes()),y=new Ed(l,v,u);return F_(r,v,n,l,y,f)}function jc(r,e,n,s,l,u,d){const f=e.eventCache;let p,g;const w=new Ed(l,e,u);if(ie(n))g=r.filter.updateFullNode(e.eventCache.getNode(),s,d),p=Ss(e,g,!0,r.filter.filtersNodes());else{const v=te(n);if(v===".priority")g=r.filter.updatePriority(e.eventCache.getNode(),s),p=Ss(e,g,f.isFullyInitialized(),f.isFiltered());else{const y=Ce(n),R=f.getNode().getImmediateChild(v);let D;if(ie(y))D=s;else{const F=w.getCompleteChild(v);F!=null?ud(y)===".priority"&&F.getChild(E_(y)).isEmpty()?D=F:D=F.updateChild(y,s):D=K.EMPTY_NODE}if(R.equals(D))p=e;else{const F=r.filter.updateChild(f.getNode(),v,D,y,w,d);p=Ss(e,F,f.isFullyInitialized(),r.filter.filtersNodes())}}}return p}function $m(r,e){return r.eventCache.isCompleteForChild(e)}function aC(r,e,n,s,l,u,d){let f=e;return s.foreach((p,g)=>{const w=De(n,p);$m(e,te(w))&&(f=jc(r,f,w,g,l,u,d))}),s.foreach((p,g)=>{const w=De(n,p);$m(e,te(w))||(f=jc(r,f,w,g,l,u,d))}),f}function Hm(r,e,n){return n.foreach((s,l)=>{e=e.updateChild(s,l)}),e}function zc(r,e,n,s,l,u,d,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;ie(n)?g=s:g=new Ie(null).setTree(n,s);const w=e.serverCache.getNode();return g.children.inorderTraversal((v,y)=>{if(w.hasChild(v)){const R=e.serverCache.getNode().getImmediateChild(v),D=Hm(r,R,y);p=Cl(r,p,new _e(v),D,l,u,d,f)}}),g.children.inorderTraversal((v,y)=>{const R=!e.serverCache.isCompleteForChild(v)&&y.value===null;if(!w.hasChild(v)&&!R){const D=e.serverCache.getNode().getImmediateChild(v),F=Hm(r,D,y);p=Cl(r,p,new _e(v),F,l,u,d,f)}}),p}function uC(r,e,n,s,l,u,d){if(Il(l,n)!=null)return e;const f=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(ie(n)&&p.isFullyInitialized()||p.isCompleteForPath(n))return Cl(r,e,n,p.getNode().getChild(n),l,u,f,d);if(ie(n)){let g=new Ie(null);return p.getNode().forEachChild(hi,(w,v)=>{g=g.set(new _e(w),v)}),zc(r,e,n,g,l,u,f,d)}else return e}else{let g=new Ie(null);return s.foreach((w,v)=>{const y=De(n,w);p.isCompleteForPath(y)&&(g=g.set(w,p.getNode().getChild(y)))}),zc(r,e,n,g,l,u,f,d)}}function cC(r,e,n,s,l){const u=e.serverCache,d=A_(e,u.getNode(),u.isFullyInitialized()||ie(n),u.isFiltered());return F_(r,d,n,s,b_,l)}function dC(r,e,n,s,l,u){let d;if(Il(s,n)!=null)return e;{const f=new Ed(s,e,l),p=e.eventCache.getNode();let g;if(ie(n)||te(n)===".priority"){let w;if(e.serverCache.isFullyInitialized())w=Sl(s,Nr(e));else{const v=e.serverCache.getNode();L(v instanceof K,"serverChildren would be complete if leaf node"),w=vd(s,v)}w=w,g=r.filter.updateFullNode(p,w,u)}else{const w=te(n);let v=wd(s,w,e.serverCache);v==null&&e.serverCache.isCompleteForChild(w)&&(v=p.getImmediateChild(w)),v!=null?g=r.filter.updateChild(p,w,v,Ce(n),f,u):e.eventCache.getNode().hasChild(w)?g=r.filter.updateChild(p,w,K.EMPTY_NODE,Ce(n),f,u):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(d=Sl(s,Nr(e)),d.isLeafNode()&&(g=r.filter.updateFullNode(g,d,u)))}return d=e.serverCache.isFullyInitialized()||Il(s,de())!=null,Ss(e,g,d,r.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,l=new fd(s.getIndex()),u=AI(s);this.processor_=iC(u);const d=n.serverCache,f=n.eventCache,p=l.updateFullNode(K.EMPTY_NODE,d.getNode(),null),g=u.updateFullNode(K.EMPTY_NODE,f.getNode(),null),w=new Rr(p,d.isFullyInitialized(),l.filtersNodes()),v=new Rr(g,f.isFullyInitialized(),u.filtersNodes());this.viewCache_=Wl(v,w),this.eventGenerator_=new FI(this.query_)}get query(){return this.query_}}function fC(r){return r.viewCache_.serverCache.getNode()}function pC(r,e){const n=Nr(r.viewCache_);return n&&(r.query._queryParams.loadsAllData()||!ie(e)&&!n.getImmediateChild(te(e)).isEmpty())?n.getChild(e):null}function Gm(r){return r.eventRegistrations_.length===0}function mC(r,e){r.eventRegistrations_.push(e)}function qm(r,e,n){const s=[];if(n){L(e==null,"A cancel should cancel all event registrations.");const l=r.query._path;r.eventRegistrations_.forEach(u=>{const d=u.createCancelEvent(n,l);d&&s.push(d)})}if(e){let l=[];for(let u=0;u<r.eventRegistrations_.length;++u){const d=r.eventRegistrations_[u];if(!d.matches(e))l.push(d);else if(e.hasAnyCallback()){l=l.concat(r.eventRegistrations_.slice(u+1));break}}r.eventRegistrations_=l}else r.eventRegistrations_=[];return s}function Km(r,e,n,s){e.type===Gt.MERGE&&e.source.queryId!==null&&(L(Nr(r.viewCache_),"We should always have a full cache before handling merges"),L(Mc(r.viewCache_),"Missing event cache, even though we have a server cache"));const l=r.viewCache_,u=oC(r.processor_,l,e,n,s);return sC(r.processor_,u.viewCache),L(u.viewCache.serverCache.isFullyInitialized()||!l.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),r.viewCache_=u.viewCache,U_(r,u.changes,u.viewCache.eventCache.getNode(),null)}function gC(r,e){const n=r.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Le,(u,d)=>{s.push(vi(u,d))}),n.isFullyInitialized()&&s.push(N_(n.getNode())),U_(r,s,n.getNode(),e)}function U_(r,e,n,s){const l=s?[s]:r.eventRegistrations_;return UI(r.eventGenerator_,e,n,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tl;class _C{constructor(){this.views=new Map}}function yC(r){L(!Tl,"__referenceConstructor has already been defined"),Tl=r}function vC(){return L(Tl,"Reference.ts has not been loaded"),Tl}function wC(r){return r.views.size===0}function Sd(r,e,n,s){const l=e.source.queryId;if(l!==null){const u=r.views.get(l);return L(u!=null,"SyncTree gave us an op for an invalid query."),Km(u,e,n,s)}else{let u=[];for(const d of r.views.values())u=u.concat(Km(d,e,n,s));return u}}function EC(r,e,n,s,l){const u=e._queryIdentifier,d=r.views.get(u);if(!d){let f=Sl(n,l?s:null),p=!1;f?p=!0:s instanceof K?(f=vd(n,s),p=!1):(f=K.EMPTY_NODE,p=!1);const g=Wl(new Rr(f,p,!1),new Rr(s,l,!1));return new hC(e,g)}return d}function SC(r,e,n,s,l,u){const d=EC(r,e,s,l,u);return r.views.has(e._queryIdentifier)||r.views.set(e._queryIdentifier,d),mC(d,n),gC(d,n)}function IC(r,e,n,s){const l=e._queryIdentifier,u=[];let d=[];const f=ir(r);if(l==="default")for(const[p,g]of r.views.entries())d=d.concat(qm(g,n,s)),Gm(g)&&(r.views.delete(p),g.query._queryParams.loadsAllData()||u.push(g.query));else{const p=r.views.get(l);p&&(d=d.concat(qm(p,n,s)),Gm(p)&&(r.views.delete(l),p.query._queryParams.loadsAllData()||u.push(p.query)))}return f&&!ir(r)&&u.push(new(vC())(e._repo,e._path)),{removed:u,events:d}}function j_(r){const e=[];for(const n of r.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function fi(r,e){let n=null;for(const s of r.views.values())n=n||pC(s,e);return n}function z_(r,e){if(e._queryParams.loadsAllData())return Bl(r);{const s=e._queryIdentifier;return r.views.get(s)}}function W_(r,e){return z_(r,e)!=null}function ir(r){return Bl(r)!=null}function Bl(r){for(const e of r.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kl;function CC(r){L(!kl,"__referenceConstructor has already been defined"),kl=r}function TC(){return L(kl,"Reference.ts has not been loaded"),kl}let kC=1;class Ym{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ie(null),this.pendingWriteTree_=eC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function B_(r,e,n,s,l){return BI(r.pendingWriteTree_,e,n,s,l),l?Ri(r,new kr(md(),e,n)):[]}function RC(r,e,n,s){VI(r.pendingWriteTree_,e,n,s);const l=Ie.fromObject(n);return Ri(r,new wi(md(),e,l))}function Jn(r,e,n=!1){const s=$I(r.pendingWriteTree_,e);if(HI(r.pendingWriteTree_,e)){let u=new Ie(null);return s.snap!=null?u=u.set(de(),!0):Je(s.children,d=>{u=u.set(new _e(d),!0)}),Ri(r,new El(s.path,u,n))}else return[]}function Vl(r,e,n){return Ri(r,new kr(gd(),e,n))}function NC(r,e,n){const s=Ie.fromObject(n);return Ri(r,new wi(gd(),e,s))}function PC(r,e){return Ri(r,new Ms(gd(),e))}function AC(r,e,n){const s=Cd(r,n);if(s){const l=Td(s),u=l.path,d=l.queryId,f=mt(u,e),p=new Ms(_d(d),f);return kd(r,u,p)}else return[]}function Wc(r,e,n,s,l=!1){const u=e._path,d=r.syncPointTree_.get(u);let f=[];if(d&&(e._queryIdentifier==="default"||W_(d,e))){const p=IC(d,e,n,s);wC(d)&&(r.syncPointTree_=r.syncPointTree_.remove(u));const g=p.removed;if(f=p.events,!l){const w=g.findIndex(y=>y._queryParams.loadsAllData())!==-1,v=r.syncPointTree_.findOnPath(u,(y,R)=>ir(R));if(w&&!v){const y=r.syncPointTree_.subtree(u);if(!y.isEmpty()){const R=DC(y);for(let D=0;D<R.length;++D){const F=R[D],$=F.query,ve=H_(r,F);r.listenProvider_.startListening(Cs($),Rl(r,$),ve.hashFn,ve.onComplete)}}}!v&&g.length>0&&!s&&(w?r.listenProvider_.stopListening(Cs(e),null):g.forEach(y=>{const R=r.queryToTagMap.get($l(y));r.listenProvider_.stopListening(Cs(y),R)}))}LC(r,g)}return f}function OC(r,e,n,s){const l=Cd(r,s);if(l!=null){const u=Td(l),d=u.path,f=u.queryId,p=mt(d,e),g=new kr(_d(f),p,n);return kd(r,d,g)}else return[]}function xC(r,e,n,s){const l=Cd(r,s);if(l){const u=Td(l),d=u.path,f=u.queryId,p=mt(d,e),g=Ie.fromObject(n),w=new wi(_d(f),p,g);return kd(r,d,w)}else return[]}function Qm(r,e,n,s=!1){const l=e._path;let u=null,d=!1;r.syncPointTree_.foreachOnPath(l,(y,R)=>{const D=mt(y,l);u=u||fi(R,D),d=d||ir(R)});let f=r.syncPointTree_.get(l);f?(d=d||ir(f),u=u||fi(f,de())):(f=new _C,r.syncPointTree_=r.syncPointTree_.set(l,f));let p;u!=null?p=!0:(p=!1,u=K.EMPTY_NODE,r.syncPointTree_.subtree(l).foreachChild((R,D)=>{const F=fi(D,de());F&&(u=u.updateImmediateChild(R,F))}));const g=W_(f,e);if(!g&&!e._queryParams.loadsAllData()){const y=$l(e);L(!r.queryToTagMap.has(y),"View does not exist, but we have a tag");const R=MC();r.queryToTagMap.set(y,R),r.tagToQueryMap.set(R,y)}const w=yd(r.pendingWriteTree_,l);let v=SC(f,e,n,w,u,p);if(!g&&!d&&!s){const y=z_(f,e);v=v.concat(bC(r,e,y))}return v}function Id(r,e,n){const l=r.pendingWriteTree_,u=r.syncPointTree_.findOnPath(e,(d,f)=>{const p=mt(d,e),g=fi(f,p);if(g)return g});return D_(l,e,u,n,!0)}function Ri(r,e){return V_(e,r.syncPointTree_,null,yd(r.pendingWriteTree_,de()))}function V_(r,e,n,s){if(ie(r.path))return $_(r,e,n,s);{const l=e.get(de());n==null&&l!=null&&(n=fi(l,de()));let u=[];const d=te(r.path),f=r.operationForChild(d),p=e.children.get(d);if(p&&f){const g=n?n.getImmediateChild(d):null,w=L_(s,d);u=u.concat(V_(f,p,g,w))}return l&&(u=u.concat(Sd(l,r,s,n))),u}}function $_(r,e,n,s){const l=e.get(de());n==null&&l!=null&&(n=fi(l,de()));let u=[];return e.children.inorderTraversal((d,f)=>{const p=n?n.getImmediateChild(d):null,g=L_(s,d),w=r.operationForChild(d);w&&(u=u.concat($_(w,f,p,g)))}),l&&(u=u.concat(Sd(l,r,s,n))),u}function H_(r,e){const n=e.query,s=Rl(r,n);return{hashFn:()=>(fC(e)||K.EMPTY_NODE).hash(),onComplete:l=>{if(l==="ok")return s?AC(r,n._path,s):PC(r,n._path);{const u=NS(l,n);return Wc(r,n,null,u)}}}}function Rl(r,e){const n=$l(e);return r.queryToTagMap.get(n)}function $l(r){return r._path.toString()+"$"+r._queryIdentifier}function Cd(r,e){return r.tagToQueryMap.get(e)}function Td(r){const e=r.indexOf("$");return L(e!==-1&&e<r.length-1,"Bad queryKey."),{queryId:r.substr(e+1),path:new _e(r.substr(0,e))}}function kd(r,e,n){const s=r.syncPointTree_.get(e);L(s,"Missing sync point for query tag that we're tracking");const l=yd(r.pendingWriteTree_,e);return Sd(s,n,l,null)}function DC(r){return r.fold((e,n,s)=>{if(n&&ir(n))return[Bl(n)];{let l=[];return n&&(l=j_(n)),Je(s,(u,d)=>{l=l.concat(d)}),l}})}function Cs(r){return r._queryParams.loadsAllData()&&!r._queryParams.isDefault()?new(TC())(r._repo,r._path):r}function LC(r,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const l=$l(s),u=r.queryToTagMap.get(l);r.queryToTagMap.delete(l),r.tagToQueryMap.delete(u)}}}function MC(){return kC++}function bC(r,e,n){const s=e._path,l=Rl(r,e),u=H_(r,n),d=r.listenProvider_.startListening(Cs(e),l,u.hashFn,u.onComplete),f=r.syncPointTree_.subtree(s);if(l)L(!ir(f.value),"If we're adding a query, it shouldn't be shadowed");else{const p=f.fold((g,w,v)=>{if(!ie(g)&&w&&ir(w))return[Bl(w).query];{let y=[];return w&&(y=y.concat(j_(w).map(R=>R.query))),Je(v,(R,D)=>{y=y.concat(D)}),y}});for(let g=0;g<p.length;++g){const w=p[g];r.listenProvider_.stopListening(Cs(w),Rl(r,w))}}return d}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Rd(n)}node(){return this.node_}}class Nd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=De(this.path_,e);return new Nd(this.syncTree_,n)}node(){return Id(this.syncTree_,this.path_)}}const FC=function(r){return r=r||{},r.timestamp=r.timestamp||new Date().getTime(),r},Xm=function(r,e,n){if(!r||typeof r!="object")return r;if(L(".sv"in r,"Unexpected leaf node or priority contents"),typeof r[".sv"]=="string")return UC(r[".sv"],e,n);if(typeof r[".sv"]=="object")return jC(r[".sv"],e);L(!1,"Unexpected server value: "+JSON.stringify(r,null,2))},UC=function(r,e,n){switch(r){case"timestamp":return n.timestamp;default:L(!1,"Unexpected server value: "+r)}},jC=function(r,e,n){r.hasOwnProperty("increment")||L(!1,"Unexpected server value: "+JSON.stringify(r,null,2));const s=r.increment;typeof s!="number"&&L(!1,"Unexpected increment value: "+s);const l=e.node();if(L(l!==null&&typeof l<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!l.isLeafNode())return s;const d=l.getValue();return typeof d!="number"?s:d+s},G_=function(r,e,n,s){return Pd(e,new Nd(n,r),s)},q_=function(r,e,n){return Pd(r,new Rd(e),n)};function Pd(r,e,n){const s=r.getPriority().val(),l=Xm(s,e.getImmediateChild(".priority"),n);let u;if(r.isLeafNode()){const d=r,f=Xm(d.getValue(),e,n);return f!==d.getValue()||l!==d.getPriority().val()?new He(f,qe(l)):r}else{const d=r;return u=d,l!==d.getPriority().val()&&(u=u.updatePriority(new He(l))),d.forEachChild(Le,(f,p)=>{const g=Pd(p,e.getImmediateChild(f),n);g!==p&&(u=u.updateImmediateChild(f,g))}),u}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Od(r,e){let n=e instanceof _e?e:new _e(e),s=r,l=te(n);for(;l!==null;){const u=_i(s.node.children,l)||{children:{},childCount:0};s=new Ad(l,s,u),n=Ce(n),l=te(n)}return s}function Ni(r){return r.node.value}function K_(r,e){r.node.value=e,Bc(r)}function Y_(r){return r.node.childCount>0}function zC(r){return Ni(r)===void 0&&!Y_(r)}function Hl(r,e){Je(r.node.children,(n,s)=>{e(new Ad(n,r,s))})}function Q_(r,e,n,s){n&&!s&&e(r),Hl(r,l=>{Q_(l,e,!0,s)}),n&&s&&e(r)}function WC(r,e,n){let s=r.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ws(r){return new _e(r.parent===null?r.name:Ws(r.parent)+"/"+r.name)}function Bc(r){r.parent!==null&&BC(r.parent,r.name,r)}function BC(r,e,n){const s=zC(n),l=an(r.node.children,e);s&&l?(delete r.node.children[e],r.node.childCount--,Bc(r)):!s&&!l&&(r.node.children[e]=n.node,r.node.childCount++,Bc(r))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VC=/[\[\].#$\/\u0000-\u001F\u007F]/,$C=/[\[\].#$\u0000-\u001F\u007F]/,yc=10*1024*1024,xd=function(r){return typeof r=="string"&&r.length!==0&&!VC.test(r)},X_=function(r){return typeof r=="string"&&r.length!==0&&!$C.test(r)},HC=function(r){return r&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),X_(r)},GC=function(r){return r===null||typeof r=="string"||typeof r=="number"&&!id(r)||r&&typeof r=="object"&&an(r,".sv")},qC=function(r,e,n,s){Gl(Fl(r,"value"),e,n)},Gl=function(r,e,n){const s=n instanceof _e?new aI(n,r):n;if(e===void 0)throw new Error(r+"contains undefined "+Sr(s));if(typeof e=="function")throw new Error(r+"contains a function "+Sr(s)+" with contents = "+e.toString());if(id(e))throw new Error(r+"contains "+e.toString()+" "+Sr(s));if(typeof e=="string"&&e.length>yc/3&&Ul(e)>yc)throw new Error(r+"contains a string greater than "+yc+" utf8 bytes "+Sr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let l=!1,u=!1;if(Je(e,(d,f)=>{if(d===".value")l=!0;else if(d!==".priority"&&d!==".sv"&&(u=!0,!xd(d)))throw new Error(r+" contains an invalid key ("+d+") "+Sr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);uI(s,d),Gl(r,f,s),cI(s)}),l&&u)throw new Error(r+' contains ".value" child '+Sr(s)+" in addition to actual children.")}},KC=function(r,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const u=Os(s);for(let d=0;d<u.length;d++)if(!(u[d]===".priority"&&d===u.length-1)){if(!xd(u[d]))throw new Error(r+"contains an invalid key ("+u[d]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(lI);let l=null;for(n=0;n<e.length;n++){if(s=e[n],l!==null&&Lt(l,s))throw new Error(r+"contains a path "+l.toString()+" that is ancestor of another path "+s.toString());l=s}},YC=function(r,e,n,s){const l=Fl(r,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(l+" must be an object containing the children to replace.");const u=[];Je(e,(d,f)=>{const p=new _e(d);if(Gl(l,f,De(n,p)),ud(p)===".priority"&&!GC(f))throw new Error(l+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");u.push(p)}),KC(l,u)},J_=function(r,e,n,s){if(!X_(n))throw new Error(Fl(r,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},QC=function(r,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),J_(r,e,n)},Z_=function(r,e){if(te(e)===".info")throw new Error(r+" failed = Can't modify data under /.info/")},XC=function(r,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!xd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!HC(n))throw new Error(Fl(r,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ql(r,e){let n=null;for(let s=0;s<e.length;s++){const l=e[s],u=l.getPath();n!==null&&!cd(u,n.path)&&(r.eventLists_.push(n),n=null),n===null&&(n={events:[],path:u}),n.events.push(l)}n&&r.eventLists_.push(n)}function ey(r,e,n){ql(r,n),ty(r,s=>cd(s,e))}function Yt(r,e,n){ql(r,n),ty(r,s=>Lt(s,e)||Lt(e,s))}function ty(r,e){r.recursionDepth_++;let n=!0;for(let s=0;s<r.eventLists_.length;s++){const l=r.eventLists_[s];if(l){const u=l.path;e(u)?(ZC(r.eventLists_[s]),r.eventLists_[s]=null):n=!1}}n&&(r.eventLists_=[]),r.recursionDepth_--}function ZC(r){for(let e=0;e<r.events.length;e++){const n=r.events[e];if(n!==null){r.events[e]=null;const s=n.getEventRunner();ws&&Xe("event: "+n.toString()),ki(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT="repo_interrupt",tT=25;class nT{constructor(e,n,s,l){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=l,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new JC,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=wl(),this.transactionQueueTree_=new Ad,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function rT(r,e,n){if(r.stats_=ld(r.repoInfo_),r.forceRestClient_||xS())r.server_=new vl(r.repoInfo_,(s,l,u,d)=>{Jm(r,s,l,u,d)},r.authTokenProvider_,r.appCheckProvider_),setTimeout(()=>Zm(r,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ke(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}r.persistentConnection_=new Sn(r.repoInfo_,e,(s,l,u,d)=>{Jm(r,s,l,u,d)},s=>{Zm(r,s)},s=>{sT(r,s)},r.authTokenProvider_,r.appCheckProvider_,n),r.server_=r.persistentConnection_}r.authTokenProvider_.addTokenChangeListener(s=>{r.server_.refreshAuthToken(s)}),r.appCheckProvider_.addTokenChangeListener(s=>{r.server_.refreshAppCheckToken(s.token)}),r.statsReporter_=FS(r.repoInfo_,()=>new bI(r.stats_,r.server_)),r.infoData_=new OI,r.infoSyncTree_=new Ym({startListening:(s,l,u,d)=>{let f=[];const p=r.infoData_.getNode(s._path);return p.isEmpty()||(f=Vl(r.infoSyncTree_,s._path,p),setTimeout(()=>{d("ok")},0)),f},stopListening:()=>{}}),Dd(r,"connected",!1),r.serverSyncTree_=new Ym({startListening:(s,l,u,d)=>(r.server_.listen(s,u,l,(f,p)=>{const g=d(f,p);Yt(r.eventQueue_,s._path,g)}),[]),stopListening:(s,l)=>{r.server_.unlisten(s,l)}})}function iT(r){const n=r.infoData_.getNode(new _e(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Kl(r){return FC({timestamp:iT(r)})}function Jm(r,e,n,s,l){r.dataUpdateCount++;const u=new _e(e);n=r.interceptServerDataCallback_?r.interceptServerDataCallback_(e,n):n;let d=[];if(l)if(s){const p=pl(n,g=>qe(g));d=xC(r.serverSyncTree_,u,p,l)}else{const p=qe(n);d=OC(r.serverSyncTree_,u,p,l)}else if(s){const p=pl(n,g=>qe(g));d=NC(r.serverSyncTree_,u,p)}else{const p=qe(n);d=Vl(r.serverSyncTree_,u,p)}let f=u;d.length>0&&(f=Si(r,u)),Yt(r.eventQueue_,f,d)}function Zm(r,e){Dd(r,"connected",e),e===!1&&aT(r)}function sT(r,e){Je(e,(n,s)=>{Dd(r,n,s)})}function Dd(r,e,n){const s=new _e("/.info/"+e),l=qe(n);r.infoData_.updateSnapshot(s,l);const u=Vl(r.infoSyncTree_,s,l);Yt(r.eventQueue_,s,u)}function Ld(r){return r.nextWriteId_++}function oT(r,e,n,s,l){Yl(r,"set",{path:e.toString(),value:n,priority:s});const u=Kl(r),d=qe(n,s),f=Id(r.serverSyncTree_,e),p=q_(d,f,u),g=Ld(r),w=B_(r.serverSyncTree_,e,p,g,!0);ql(r.eventQueue_,w),r.server_.put(e.toString(),d.val(!0),(y,R)=>{const D=y==="ok";D||ot("set at "+e+" failed: "+y);const F=Jn(r.serverSyncTree_,g,!D);Yt(r.eventQueue_,e,F),Vc(r,l,y,R)});const v=bd(r,e);Si(r,v),Yt(r.eventQueue_,v,[])}function lT(r,e,n,s){Yl(r,"update",{path:e.toString(),value:n});let l=!0;const u=Kl(r),d={};if(Je(n,(f,p)=>{l=!1,d[f]=G_(De(e,f),qe(p),r.serverSyncTree_,u)}),l)Xe("update() called with empty data.  Don't do anything."),Vc(r,s,"ok",void 0);else{const f=Ld(r),p=RC(r.serverSyncTree_,e,d,f);ql(r.eventQueue_,p),r.server_.merge(e.toString(),n,(g,w)=>{const v=g==="ok";v||ot("update at "+e+" failed: "+g);const y=Jn(r.serverSyncTree_,f,!v),R=y.length>0?Si(r,e):e;Yt(r.eventQueue_,R,y),Vc(r,s,g,w)}),Je(n,g=>{const w=bd(r,De(e,g));Si(r,w)}),Yt(r.eventQueue_,e,[])}}function aT(r){Yl(r,"onDisconnectEvents");const e=Kl(r),n=wl();Lc(r.onDisconnect_,de(),(l,u)=>{const d=G_(l,u,r.serverSyncTree_,e);P_(n,l,d)});let s=[];Lc(n,de(),(l,u)=>{s=s.concat(Vl(r.serverSyncTree_,l,u));const d=bd(r,l);Si(r,d)}),r.onDisconnect_=wl(),Yt(r.eventQueue_,de(),s)}function uT(r,e,n){let s;te(e._path)===".info"?s=Qm(r.infoSyncTree_,e,n):s=Qm(r.serverSyncTree_,e,n),ey(r.eventQueue_,e._path,s)}function cT(r,e,n){let s;te(e._path)===".info"?s=Wc(r.infoSyncTree_,e,n):s=Wc(r.serverSyncTree_,e,n),ey(r.eventQueue_,e._path,s)}function dT(r){r.persistentConnection_&&r.persistentConnection_.interrupt(eT)}function Yl(r,...e){let n="";r.persistentConnection_&&(n=r.persistentConnection_.id+":"),Xe(n,...e)}function Vc(r,e,n,s){e&&ki(()=>{if(n==="ok")e(null);else{const l=(n||"error").toUpperCase();let u=l;s&&(u+=": "+s);const d=new Error(u);d.code=l,e(d)}})}function ny(r,e,n){return Id(r.serverSyncTree_,e,n)||K.EMPTY_NODE}function Md(r,e=r.transactionQueueTree_){if(e||Ql(r,e),Ni(e)){const n=iy(r,e);L(n.length>0,"Sending zero length transaction queue"),n.every(l=>l.status===0)&&hT(r,Ws(e),n)}else Y_(e)&&Hl(e,n=>{Md(r,n)})}function hT(r,e,n){const s=n.map(g=>g.currentWriteId),l=ny(r,e,s);let u=l;const d=l.hash();for(let g=0;g<n.length;g++){const w=n[g];L(w.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),w.status=1,w.retryCount++;const v=mt(e,w.path);u=u.updateChild(v,w.currentOutputSnapshotRaw)}const f=u.val(!0),p=e;r.server_.put(p.toString(),f,g=>{Yl(r,"transaction put response",{path:p.toString(),status:g});let w=[];if(g==="ok"){const v=[];for(let y=0;y<n.length;y++)n[y].status=2,w=w.concat(Jn(r.serverSyncTree_,n[y].currentWriteId)),n[y].onComplete&&v.push(()=>n[y].onComplete(null,!0,n[y].currentOutputSnapshotResolved)),n[y].unwatcher();Ql(r,Od(r.transactionQueueTree_,e)),Md(r,r.transactionQueueTree_),Yt(r.eventQueue_,e,w);for(let y=0;y<v.length;y++)ki(v[y])}else{if(g==="datastale")for(let v=0;v<n.length;v++)n[v].status===3?n[v].status=4:n[v].status=0;else{ot("transaction at "+p.toString()+" failed: "+g);for(let v=0;v<n.length;v++)n[v].status=4,n[v].abortReason=g}Si(r,e)}},d)}function Si(r,e){const n=ry(r,e),s=Ws(n),l=iy(r,n);return fT(r,l,s),s}function fT(r,e,n){if(e.length===0)return;const s=[];let l=[];const d=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const p=e[f],g=mt(n,p.path);let w=!1,v;if(L(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)w=!0,v=p.abortReason,l=l.concat(Jn(r.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=tT)w=!0,v="maxretry",l=l.concat(Jn(r.serverSyncTree_,p.currentWriteId,!0));else{const y=ny(r,p.path,d);p.currentInputSnapshot=y;const R=e[f].update(y.val());if(R!==void 0){Gl("transaction failed: Data returned ",R,p.path);let D=qe(R);typeof R=="object"&&R!=null&&an(R,".priority")||(D=D.updatePriority(y.getPriority()));const $=p.currentWriteId,ve=Kl(r),we=q_(D,y,ve);p.currentOutputSnapshotRaw=D,p.currentOutputSnapshotResolved=we,p.currentWriteId=Ld(r),d.splice(d.indexOf($),1),l=l.concat(B_(r.serverSyncTree_,p.path,we,p.currentWriteId,p.applyLocally)),l=l.concat(Jn(r.serverSyncTree_,$,!0))}else w=!0,v="nodata",l=l.concat(Jn(r.serverSyncTree_,p.currentWriteId,!0))}Yt(r.eventQueue_,n,l),l=[],w&&(e[f].status=2,function(y){setTimeout(y,Math.floor(0))}(e[f].unwatcher),e[f].onComplete&&(v==="nodata"?s.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):s.push(()=>e[f].onComplete(new Error(v),!1,null))))}Ql(r,r.transactionQueueTree_);for(let f=0;f<s.length;f++)ki(s[f]);Md(r,r.transactionQueueTree_)}function ry(r,e){let n,s=r.transactionQueueTree_;for(n=te(e);n!==null&&Ni(s)===void 0;)s=Od(s,n),e=Ce(e),n=te(e);return s}function iy(r,e){const n=[];return sy(r,e,n),n.sort((s,l)=>s.order-l.order),n}function sy(r,e,n){const s=Ni(e);if(s)for(let l=0;l<s.length;l++)n.push(s[l]);Hl(e,l=>{sy(r,l,n)})}function Ql(r,e){const n=Ni(e);if(n){let s=0;for(let l=0;l<n.length;l++)n[l].status!==2&&(n[s]=n[l],s++);n.length=s,K_(e,n.length>0?n:void 0)}Hl(e,s=>{Ql(r,s)})}function bd(r,e){const n=Ws(ry(r,e)),s=Od(r.transactionQueueTree_,e);return WC(s,l=>{vc(r,l)}),vc(r,s),Q_(s,l=>{vc(r,l)}),n}function vc(r,e){const n=Ni(e);if(n){const s=[];let l=[],u=-1;for(let d=0;d<n.length;d++)n[d].status===3||(n[d].status===1?(L(u===d-1,"All SENT items should be at beginning of queue."),u=d,n[d].status=3,n[d].abortReason="set"):(L(n[d].status===0,"Unexpected transaction status in abort"),n[d].unwatcher(),l=l.concat(Jn(r.serverSyncTree_,n[d].currentWriteId,!0)),n[d].onComplete&&s.push(n[d].onComplete.bind(null,new Error("set"),!1,null))));u===-1?K_(e,void 0):n.length=u+1,Yt(r.eventQueue_,Ws(e),l);for(let d=0;d<s.length;d++)ki(s[d])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pT(r){let e="";const n=r.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let l=n[s];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch{}e+="/"+l}return e}function mT(r){const e={};r.charAt(0)==="?"&&(r=r.substring(1));for(const n of r.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ot(`Invalid query segment '${n}' in query '${r}'`)}return e}const eg=function(r,e){const n=gT(r),s=n.namespace;n.domain==="firebase.com"&&Cn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Cn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||IS();const l=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new h_(n.host,n.secure,s,l,e,"",s!==n.subdomain),path:new _e(n.pathString)}},gT=function(r){let e="",n="",s="",l="",u="",d=!0,f="https",p=443;if(typeof r=="string"){let g=r.indexOf("//");g>=0&&(f=r.substring(0,g-1),r=r.substring(g+2));let w=r.indexOf("/");w===-1&&(w=r.length);let v=r.indexOf("?");v===-1&&(v=r.length),e=r.substring(0,Math.min(w,v)),w<v&&(l=pT(r.substring(w,v)));const y=mT(r.substring(Math.min(r.length,v)));g=e.indexOf(":"),g>=0?(d=f==="https"||f==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const R=e.slice(0,g);if(R.toLowerCase()==="localhost")n="localhost";else if(R.split(".").length<=2)n=R;else{const D=e.indexOf(".");s=e.substring(0,D).toLowerCase(),n=e.substring(D+1),u=s}"ns"in y&&(u=y.ns)}return{host:e,port:p,domain:n,subdomain:s,secure:d,scheme:f,pathString:l,namespace:u}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{constructor(e,n,s,l){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=l}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ke(this.snapshot.exportVal())}}class yT{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return L(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e,n,s,l){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=l}get key(){return ie(this._path)?null:ud(this._path)}get ref(){return new or(this._repo,this._path)}get _queryIdentifier(){const e=jm(this._queryParams),n=sd(e);return n==="{}"?"default":n}get _queryObject(){return jm(this._queryParams)}isEqual(e){if(e=kt(e),!(e instanceof Fd))return!1;const n=this._repo===e._repo,s=cd(this._path,e._path),l=this._queryIdentifier===e._queryIdentifier;return n&&s&&l}toJSON(){return this.toString()}toString(){return this._repo.toString()+oI(this._path)}}class or extends Fd{constructor(e,n){super(e,n,new pd,!1)}get parent(){const e=E_(this._path);return e===null?null:new or(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Nl{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new _e(e),s=$c(this.ref,e);return new Nl(this._node.getChild(n),s,Le)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,l)=>e(new Nl(l,$c(this.ref,s),Le)))}hasChild(e){const n=new _e(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Xl(r,e){return r=kt(r),r._checkNotDeleted("ref"),e!==void 0?$c(r._root,e):r._root}function $c(r,e){return r=kt(r),te(r._path)===null?QC("child","path",e):J_("child","path",e),new or(r._repo,De(r._path,e))}function wT(r){return Z_("remove",r._path),oy(r,null)}function oy(r,e){r=kt(r),Z_("set",r._path),qC("set",e,r._path);const n=new Fs;return oT(r._repo,r._path,e,null,n.wrapCallback(()=>{})),n.promise}function ET(r,e){YC("update",e,r._path);const n=new Fs;return lT(r._repo,r._path,e,n.wrapCallback(()=>{})),n.promise}class Ud{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new _T("value",this,new Nl(e.snapshotNode,new or(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new yT(this,e,n):null}matches(e){return e instanceof Ud?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function ST(r,e,n,s,l){const u=new vT(n,void 0),d=new Ud(u);return uT(r._repo,r,d),()=>cT(r._repo,r,d)}function IT(r,e,n,s){return ST(r,"value",e)}yC(or);CC(or);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT="FIREBASE_DATABASE_EMULATOR_HOST",Hc={};let TT=!1;function kT(r,e,n,s){r.repoInfo_=new h_(`${e}:${n}`,!1,r.repoInfo_.namespace,r.repoInfo_.webSocketOnly,r.repoInfo_.nodeAdmin,r.repoInfo_.persistenceKey,r.repoInfo_.includeNamespaceInQueryParams,!0),s&&(r.authTokenProvider_=s)}function RT(r,e,n,s,l){let u=s||r.options.databaseURL;u===void 0&&(r.options.projectId||Cn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Xe("Using default host for project ",r.options.projectId),u=`${r.options.projectId}-default-rtdb.firebaseio.com`);let d=eg(u,l),f=d.repoInfo,p;typeof process<"u"&&Em&&(p=Em[CT]),p?(u=`http://${p}?ns=${f.namespace}`,d=eg(u,l),f=d.repoInfo):d.repoInfo.secure;const g=new LS(r.name,r.options,e);XC("Invalid Firebase Database URL",d),ie(d.path)||Cn("Database URL must point to the root of a Firebase Database (not including a child path).");const w=PT(f,r,g,new DS(r.name,n));return new AT(w,r)}function NT(r,e){const n=Hc[e];(!n||n[r.key]!==r)&&Cn(`Database ${e}(${r.repoInfo_}) has already been deleted.`),dT(r),delete n[r.key]}function PT(r,e,n,s){let l=Hc[e.name];l||(l={},Hc[e.name]=l);let u=l[r.toURLString()];return u&&Cn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),u=new nT(r,TT,n,s),l[r.toURLString()]=u,u}class AT{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(rT(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new or(this._repo,de())),this._rootInternal}_delete(){return this._rootInternal!==null&&(NT(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Cn("Cannot call "+e+" on a deleted database.")}}function OT(r=rd(),e){const n=Dr(r,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=G0("database");s&&xT(n,...s)}return n}function xT(r,e,n,s={}){r=kt(r),r._checkNotDeleted("useEmulator"),r._instanceStarted&&Cn("Cannot call useEmulator() after instance has already been initialized.");const l=r._repoInternal;let u;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&Cn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new ll(ll.OWNER);else if(s.mockUserToken){const d=typeof s.mockUserToken=="string"?s.mockUserToken:q0(s.mockUserToken,r.app.options.projectId);u=new ll(d)}kT(l,e,n,u)}/**
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
 */function DT(r){_S(Ti),on(new Kt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("auth-internal"),u=e.getProvider("app-check-internal");return RT(s,l,u,n)},"PUBLIC").setMultipleInstances(!0)),bt(Sm,Im,r),bt(Sm,Im,"esm2017")}Sn.prototype.simpleListen=function(r,e){this.sendRequest("q",{p:r},e)};Sn.prototype.echo=function(r,e){this.sendRequest("echo",{d:r},e)};DT();var LT="firebase",MT="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bt(LT,MT,"app");const ly="@firebase/installations",jd="0.6.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=1e4,uy=`w:${jd}`,cy="FIS_v2",bT="https://firebaseinstallations.googleapis.com/v1",FT=60*60*1e3,UT="installations",jT="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Pr=new xr(UT,jT,zT);function dy(r){return r instanceof ln&&r.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hy({projectId:r}){return`${bT}/projects/${r}/installations`}function fy(r){return{token:r.token,requestStatus:2,expiresIn:BT(r.expiresIn),creationTime:Date.now()}}async function py(r,e){const s=(await e.json()).error;return Pr.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function my({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function WT(r,{refreshToken:e}){const n=my(r);return n.append("Authorization",VT(e)),n}async function gy(r){const e=await r();return e.status>=500&&e.status<600?r():e}function BT(r){return Number(r.replace("s","000"))}function VT(r){return`${cy} ${r}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $T({appConfig:r,heartbeatServiceProvider:e},{fid:n}){const s=hy(r),l=my(r),u=e.getImmediate({optional:!0});if(u){const g=await u.getHeartbeatsHeader();g&&l.append("x-firebase-client",g)}const d={fid:n,authVersion:cy,appId:r.appId,sdkVersion:uy},f={method:"POST",headers:l,body:JSON.stringify(d)},p=await gy(()=>fetch(s,f));if(p.ok){const g=await p.json();return{fid:g.fid||n,registrationStatus:2,refreshToken:g.refreshToken,authToken:fy(g.authToken)}}else throw await py("Create Installation",p)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _y(r){return new Promise(e=>{setTimeout(e,r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HT(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT=/^[cdef][\w-]{21}$/,Gc="";function qT(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=KT(r);return GT.test(n)?n:Gc}catch{return Gc}}function KT(r){return HT(r).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(r){return`${r.appName}!${r.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy=new Map;function vy(r,e){const n=Jl(r);wy(n,e),YT(n,e)}function wy(r,e){const n=yy.get(r);if(n)for(const s of n)s(e)}function YT(r,e){const n=QT();n&&n.postMessage({key:r,fid:e}),XT()}let Cr=null;function QT(){return!Cr&&"BroadcastChannel"in self&&(Cr=new BroadcastChannel("[Firebase] FID Change"),Cr.onmessage=r=>{wy(r.data.key,r.data.fid)}),Cr}function XT(){yy.size===0&&Cr&&(Cr.close(),Cr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JT="firebase-installations-database",ZT=1,Ar="firebase-installations-store";let wc=null;function zd(){return wc||(wc=Kg(JT,ZT,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(Ar)}}})),wc}async function Pl(r,e){const n=Jl(r),l=(await zd()).transaction(Ar,"readwrite"),u=l.objectStore(Ar),d=await u.get(n);return await u.put(e,n),await l.done,(!d||d.fid!==e.fid)&&vy(r,e.fid),e}async function Ey(r){const e=Jl(r),s=(await zd()).transaction(Ar,"readwrite");await s.objectStore(Ar).delete(e),await s.done}async function Zl(r,e){const n=Jl(r),l=(await zd()).transaction(Ar,"readwrite"),u=l.objectStore(Ar),d=await u.get(n),f=e(d);return f===void 0?await u.delete(n):await u.put(f,n),await l.done,f&&(!d||d.fid!==f.fid)&&vy(r,f.fid),f}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wd(r){let e;const n=await Zl(r.appConfig,s=>{const l=ek(s),u=tk(r,l);return e=u.registrationPromise,u.installationEntry});return n.fid===Gc?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function ek(r){const e=r||{fid:qT(),registrationStatus:0};return Sy(e)}function tk(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const l=Promise.reject(Pr.create("app-offline"));return{installationEntry:e,registrationPromise:l}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=nk(r,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:rk(r)}:{installationEntry:e}}async function nk(r,e){try{const n=await $T(r,e);return Pl(r.appConfig,n)}catch(n){throw dy(n)&&n.customData.serverCode===409?await Ey(r.appConfig):await Pl(r.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function rk(r){let e=await tg(r.appConfig);for(;e.registrationStatus===1;)await _y(100),e=await tg(r.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Wd(r);return s||n}return e}function tg(r){return Zl(r,e=>{if(!e)throw Pr.create("installation-not-found");return Sy(e)})}function Sy(r){return ik(r)?{fid:r.fid,registrationStatus:0}:r}function ik(r){return r.registrationStatus===1&&r.registrationTime+ay<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sk({appConfig:r,heartbeatServiceProvider:e},n){const s=ok(r,n),l=WT(r,n),u=e.getImmediate({optional:!0});if(u){const g=await u.getHeartbeatsHeader();g&&l.append("x-firebase-client",g)}const d={installation:{sdkVersion:uy,appId:r.appId}},f={method:"POST",headers:l,body:JSON.stringify(d)},p=await gy(()=>fetch(s,f));if(p.ok){const g=await p.json();return fy(g)}else throw await py("Generate Auth Token",p)}function ok(r,{fid:e}){return`${hy(r)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bd(r,e=!1){let n;const s=await Zl(r.appConfig,u=>{if(!Iy(u))throw Pr.create("not-registered");const d=u.authToken;if(!e&&uk(d))return u;if(d.requestStatus===1)return n=lk(r,e),u;{if(!navigator.onLine)throw Pr.create("app-offline");const f=dk(u);return n=ak(r,f),f}});return n?await n:s.authToken}async function lk(r,e){let n=await ng(r.appConfig);for(;n.authToken.requestStatus===1;)await _y(100),n=await ng(r.appConfig);const s=n.authToken;return s.requestStatus===0?Bd(r,e):s}function ng(r){return Zl(r,e=>{if(!Iy(e))throw Pr.create("not-registered");const n=e.authToken;return hk(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function ak(r,e){try{const n=await sk(r,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Pl(r.appConfig,s),n}catch(n){if(dy(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Ey(r.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Pl(r.appConfig,s)}throw n}}function Iy(r){return r!==void 0&&r.registrationStatus===2}function uk(r){return r.requestStatus===2&&!ck(r)}function ck(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+FT}function dk(r){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:e})}function hk(r){return r.requestStatus===1&&r.requestTime+ay<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fk(r){const e=r,{installationEntry:n,registrationPromise:s}=await Wd(e);return s?s.catch(console.error):Bd(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pk(r,e=!1){const n=r;return await mk(n),(await Bd(n,e)).token}async function mk(r){const{registrationPromise:e}=await Wd(r);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gk(r){if(!r||!r.options)throw Ec("App Configuration");if(!r.name)throw Ec("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!r.options[n])throw Ec(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function Ec(r){return Pr.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy="installations",_k="installations-internal",yk=r=>{const e=r.getProvider("app").getImmediate(),n=gk(e),s=Dr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},vk=r=>{const e=r.getProvider("app").getImmediate(),n=Dr(e,Cy).getImmediate();return{getId:()=>fk(n),getToken:l=>pk(n,l)}};function wk(){on(new Kt(Cy,yk,"PUBLIC")),on(new Kt(_k,vk,"PRIVATE"))}wk();bt(ly,jd);bt(ly,jd,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al="analytics",Ek="firebase_id",Sk="origin",Ik=60*1e3,Ck="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Vd="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t=new jl("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tk={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Tt=new xr("analytics","Analytics",Tk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kk(r){if(!r.startsWith(Vd)){const e=Tt.create("invalid-gtag-resource",{gtagURL:r});return _t.warn(e.message),""}return r}function Ty(r){return Promise.all(r.map(e=>e.catch(n=>n)))}function Rk(r,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,e)),n}function Nk(r,e){const n=Rk("firebase-js-sdk-policy",{createScriptURL:kk}),s=document.createElement("script"),l=`${Vd}?l=${r}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(l):l,s.async=!0,document.head.appendChild(s)}function Pk(r){let e=[];return Array.isArray(window[r])?e=window[r]:window[r]=e,e}async function Ak(r,e,n,s,l,u){const d=s[l];try{if(d)await e[d];else{const p=(await Ty(n)).find(g=>g.measurementId===l);p&&await e[p.appId]}}catch(f){_t.error(f)}r("config",l,u)}async function Ok(r,e,n,s,l){try{let u=[];if(l&&l.send_to){let d=l.send_to;Array.isArray(d)||(d=[d]);const f=await Ty(n);for(const p of d){const g=f.find(v=>v.measurementId===p),w=g&&e[g.appId];if(w)u.push(w);else{u=[];break}}}u.length===0&&(u=Object.values(e)),await Promise.all(u),r("event",s,l||{})}catch(u){_t.error(u)}}function xk(r,e,n,s){async function l(u,...d){try{if(u==="event"){const[f,p]=d;await Ok(r,e,n,f,p)}else if(u==="config"){const[f,p]=d;await Ak(r,e,n,s,f,p)}else if(u==="consent"){const[f,p]=d;r("consent",f,p)}else if(u==="get"){const[f,p,g]=d;r("get",f,p,g)}else if(u==="set"){const[f]=d;r("set",f)}else r(u,...d)}catch(f){_t.error(f)}}return l}function Dk(r,e,n,s,l){let u=function(...d){window[s].push(arguments)};return window[l]&&typeof window[l]=="function"&&(u=window[l]),window[l]=xk(u,r,e,n),{gtagCore:u,wrappedGtag:window[l]}}function Lk(r){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Vd)&&n.src.includes(r))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk=30,bk=1e3;class Fk{constructor(e={},n=bk){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const ky=new Fk;function Uk(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function jk(r){var e;const{appId:n,apiKey:s}=r,l={method:"GET",headers:Uk(s)},u=Ck.replace("{app-id}",n),d=await fetch(u,l);if(d.status!==200&&d.status!==304){let f="";try{const p=await d.json();!((e=p.error)===null||e===void 0)&&e.message&&(f=p.error.message)}catch{}throw Tt.create("config-fetch-failed",{httpStatus:d.status,responseMessage:f})}return d.json()}async function zk(r,e=ky,n){const{appId:s,apiKey:l,measurementId:u}=r.options;if(!s)throw Tt.create("no-app-id");if(!l){if(u)return{measurementId:u,appId:s};throw Tt.create("no-api-key")}const d=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},f=new Vk;return setTimeout(async()=>{f.abort()},Ik),Ry({appId:s,apiKey:l,measurementId:u},d,f,e)}async function Ry(r,{throttleEndTimeMillis:e,backoffCount:n},s,l=ky){var u;const{appId:d,measurementId:f}=r;try{await Wk(s,e)}catch(p){if(f)return _t.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:d,measurementId:f};throw p}try{const p=await jk(r);return l.deleteThrottleMetadata(d),p}catch(p){const g=p;if(!Bk(g)){if(l.deleteThrottleMetadata(d),f)return _t.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:d,measurementId:f};throw p}const w=Number((u=g==null?void 0:g.customData)===null||u===void 0?void 0:u.httpStatus)===503?hm(n,l.intervalMillis,Mk):hm(n,l.intervalMillis),v={throttleEndTimeMillis:Date.now()+w,backoffCount:n+1};return l.setThrottleMetadata(d,v),_t.debug(`Calling attemptFetch again in ${w} millis`),Ry(r,v,s,l)}}function Wk(r,e){return new Promise((n,s)=>{const l=Math.max(e-Date.now(),0),u=setTimeout(n,l);r.addEventListener(()=>{clearTimeout(u),s(Tt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Bk(r){if(!(r instanceof ln)||!r.customData)return!1;const e=Number(r.customData.httpStatus);return e===429||e===500||e===503||e===504}class Vk{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function $k(r,e,n,s,l){if(l&&l.global){r("event",n,s);return}else{const u=await e,d=Object.assign(Object.assign({},s),{send_to:u});r("event",n,d)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hk(){if(Vg())try{await $g()}catch(r){return _t.warn(Tt.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return _t.warn(Tt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Gk(r,e,n,s,l,u,d){var f;const p=zk(r);p.then(R=>{n[R.measurementId]=R.appId,r.options.measurementId&&R.measurementId!==r.options.measurementId&&_t.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${R.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(R=>_t.error(R)),e.push(p);const g=Hk().then(R=>{if(R)return s.getId()}),[w,v]=await Promise.all([p,g]);Lk(u)||Nk(u,w.measurementId),l("js",new Date);const y=(f=d==null?void 0:d.config)!==null&&f!==void 0?f:{};return y[Sk]="firebase",y.update=!0,v!=null&&(y[Ek]=v),l("config",w.measurementId,y),w.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qk{constructor(e){this.app=e}_delete(){return delete Ts[this.app.options.appId],Promise.resolve()}}let Ts={},rg=[];const ig={};let Sc="dataLayer",Kk="gtag",sg,Ny,og=!1;function Yk(){const r=[];if(zg()&&r.push("This is a browser extension environment."),Q0()||r.push("Cookies are not available."),r.length>0){const e=r.map((s,l)=>`(${l+1}) ${s}`).join(" "),n=Tt.create("invalid-analytics-context",{errorInfo:e});_t.warn(n.message)}}function Qk(r,e,n){Yk();const s=r.options.appId;if(!s)throw Tt.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)_t.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Tt.create("no-api-key");if(Ts[s]!=null)throw Tt.create("already-exists",{id:s});if(!og){Pk(Sc);const{wrappedGtag:u,gtagCore:d}=Dk(Ts,rg,ig,Sc,Kk);Ny=u,sg=d,og=!0}return Ts[s]=Gk(r,rg,ig,e,sg,Sc,n),new qk(r)}function Xk(r=rd()){r=kt(r);const e=Dr(r,Al);return e.isInitialized()?e.getImmediate():Jk(r)}function Jk(r,e={}){const n=Dr(r,Al);if(n.isInitialized()){const l=n.getImmediate();if(Ns(e,n.getOptions()))return l;throw Tt.create("already-initialized")}return n.initialize({options:e})}function Zk(r,e,n,s){r=kt(r),$k(Ny,Ts[r.app.options.appId],e,n,s).catch(l=>_t.error(l))}const lg="@firebase/analytics",ag="0.10.10";function e1(){on(new Kt(Al,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("installations-internal").getImmediate();return Qk(s,l,n)},"PUBLIC")),on(new Kt("analytics-internal",r,"PRIVATE")),bt(lg,ag),bt(lg,ag,"esm2017");function r(e){try{const n=e.getProvider(Al).getImmediate();return{logEvent:(s,l,u)=>Zk(n,s,l,u)}}catch(n){throw Tt.create("interop-component-reg-failed",{reason:n})}}}e1();function $d(r,e){var n={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(n[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(r);l<s.length;l++)e.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(r,s[l])&&(n[s[l]]=r[s[l]]);return n}function Py(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const t1=Py,Ay=new xr("auth","Firebase",Py());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol=new jl("@firebase/auth");function n1(r,...e){Ol.logLevel<=me.WARN&&Ol.warn(`Auth (${Ti}): ${r}`,...e)}function al(r,...e){Ol.logLevel<=me.ERROR&&Ol.error(`Auth (${Ti}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(r,...e){throw Hd(r,...e)}function rn(r,...e){return Hd(r,...e)}function Oy(r,e,n){const s=Object.assign(Object.assign({},t1()),{[e]:n});return new xr("auth","Firebase",s).create(e,{appName:r.name})}function nr(r){return Oy(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Hd(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return Ay.create(r,...e)}function X(r,e,...n){if(!r)throw Hd(e,...n)}function vn(r){const e="INTERNAL ASSERTION FAILED: "+r;throw al(e),new Error(e)}function kn(r,e){r||vn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function r1(){return ug()==="http:"||ug()==="https:"}function ug(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(r1()||zg()||"connection"in navigator)?navigator.onLine:!0}function s1(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,n){this.shortDelay=e,this.longDelay=n,kn(n>e,"Short delay should be less than long delay!"),this.isMobile=td()||Wg()}get(){return i1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(r,e){kn(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l1=new Bs(3e4,6e4);function ea(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Pi(r,e,n,s,l={}){return Dy(r,l,async()=>{let u={},d={};s&&(e==="GET"?d=s:u={body:JSON.stringify(s)});const f=Ci(Object.assign({key:r.config.apiKey},d)).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const g=Object.assign({method:e,headers:p},u);return K0()||(g.referrerPolicy="no-referrer"),xy.fetch()(My(r,r.config.apiHost,n,f),g)})}async function Dy(r,e,n){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},o1),e);try{const l=new a1(r),u=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const d=await u.json();if("needConfirmation"in d)throw ol(r,"account-exists-with-different-credential",d);if(u.ok&&!("errorMessage"in d))return d;{const f=u.ok?d.errorMessage:d.error.message,[p,g]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw ol(r,"credential-already-in-use",d);if(p==="EMAIL_EXISTS")throw ol(r,"email-already-in-use",d);if(p==="USER_DISABLED")throw ol(r,"user-disabled",d);const w=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw Oy(r,w,g);Tn(r,w)}}catch(l){if(l instanceof ln)throw l;Tn(r,"network-request-failed",{message:String(l)})}}async function Ly(r,e,n,s,l={}){const u=await Pi(r,e,n,s,l);return"mfaPendingCredential"in u&&Tn(r,"multi-factor-auth-required",{_serverResponse:u}),u}function My(r,e,n,s){const l=`${e}${n}?${s}`;return r.config.emulator?Gd(r.config,l):`${r.config.apiScheme}://${l}`}class a1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(rn(this.auth,"network-request-failed")),l1.get())})}}function ol(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const l=rn(r,e,s);return l.customData._tokenResponse=n,l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u1(r,e){return Pi(r,"POST","/v1/accounts:delete",e)}async function by(r,e){return Pi(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function c1(r,e=!1){const n=kt(r),s=await n.getIdToken(e),l=qd(s);X(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const u=typeof l.firebase=="object"?l.firebase:void 0,d=u==null?void 0:u.sign_in_provider;return{claims:l,token:s,authTime:ks(Ic(l.auth_time)),issuedAtTime:ks(Ic(l.iat)),expirationTime:ks(Ic(l.exp)),signInProvider:d||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Ic(r){return Number(r)*1e3}function qd(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return al("JWT malformed, contained fewer than 3 sections"),null;try{const l=fl(n);return l?JSON.parse(l):(al("Failed to decode base64 JWT payload"),null)}catch(l){return al("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function cg(r){const e=qd(r);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bs(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof ln&&d1(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function d1({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const l=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,l)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ks(this.lastLoginAt),this.creationTime=ks(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xl(r){var e;const n=r.auth,s=await r.getIdToken(),l=await bs(r,by(n,{idToken:s}));X(l==null?void 0:l.users.length,n,"internal-error");const u=l.users[0];r._notifyReloadListener(u);const d=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?Fy(u.providerUserInfo):[],f=p1(r.providerData,d),p=r.isAnonymous,g=!(r.email&&u.passwordHash)&&!(f!=null&&f.length),w=p?g:!1,v={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:f,metadata:new Kc(u.createdAt,u.lastLoginAt),isAnonymous:w};Object.assign(r,v)}async function f1(r){const e=kt(r);await xl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function p1(r,e){return[...r.filter(s=>!e.some(l=>l.providerId===s.providerId)),...e]}function Fy(r){return r.map(e=>{var{providerId:n}=e,s=$d(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m1(r,e){const n=await Dy(r,{},async()=>{const s=Ci({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:u}=r.config,d=My(r,l,"/v1/token",`key=${u}`),f=await r._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",xy.fetch()(d,{method:"POST",headers:f,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function g1(r,e){return Pi(r,"POST","/v2/accounts:revokeToken",ea(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):cg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=cg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:l,expiresIn:u}=await m1(e,n);this.updateTokensAndExpiration(s,l,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:l,expirationTime:u}=n,d=new pi;return s&&(X(typeof s=="string","internal-error",{appName:e}),d.refreshToken=s),l&&(X(typeof l=="string","internal-error",{appName:e}),d.accessToken=l),u&&(X(typeof u=="number","internal-error",{appName:e}),d.expirationTime=u),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new pi,this.toJSON())}_performRefresh(){return vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(r,e){X(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class wn{constructor(e){var{uid:n,auth:s,stsTokenManager:l}=e,u=$d(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new h1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=l,this.accessToken=l.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new Kc(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const n=await bs(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return c1(this,e)}reload(){return f1(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new wn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await xl(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_n(this.auth.app))return Promise.reject(nr(this.auth));const e=await this.getIdToken();return await bs(this,u1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,l,u,d,f,p,g,w;const v=(s=n.displayName)!==null&&s!==void 0?s:void 0,y=(l=n.email)!==null&&l!==void 0?l:void 0,R=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,D=(d=n.photoURL)!==null&&d!==void 0?d:void 0,F=(f=n.tenantId)!==null&&f!==void 0?f:void 0,$=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,ve=(g=n.createdAt)!==null&&g!==void 0?g:void 0,we=(w=n.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:pe,emailVerified:le,isAnonymous:Ue,providerData:Z,stsTokenManager:Q}=n;X(pe&&Q,e,"internal-error");const se=pi.fromJSON(this.name,Q);X(typeof pe=="string",e,"internal-error"),Gn(v,e.name),Gn(y,e.name),X(typeof le=="boolean",e,"internal-error"),X(typeof Ue=="boolean",e,"internal-error"),Gn(R,e.name),Gn(D,e.name),Gn(F,e.name),Gn($,e.name),Gn(ve,e.name),Gn(we,e.name);const We=new wn({uid:pe,auth:e,email:y,emailVerified:le,displayName:v,isAnonymous:Ue,photoURL:D,phoneNumber:R,tenantId:F,stsTokenManager:se,createdAt:ve,lastLoginAt:we});return Z&&Array.isArray(Z)&&(We.providerData=Z.map(rt=>Object.assign({},rt))),$&&(We._redirectEventId=$),We}static async _fromIdTokenResponse(e,n,s=!1){const l=new pi;l.updateFromServerResponse(n);const u=new wn({uid:n.localId,auth:e,stsTokenManager:l,isAnonymous:s});return await xl(u),u}static async _fromGetAccountInfoResponse(e,n,s){const l=n.users[0];X(l.localId!==void 0,"internal-error");const u=l.providerUserInfo!==void 0?Fy(l.providerUserInfo):[],d=!(l.email&&l.passwordHash)&&!(u!=null&&u.length),f=new pi;f.updateFromIdToken(s);const p=new wn({uid:l.localId,auth:e,stsTokenManager:f,isAnonymous:d}),g={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:u,metadata:new Kc(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(u!=null&&u.length)};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg=new Map;function En(r){kn(r instanceof Function,"Expected a class definition");let e=dg.get(r);return e?(kn(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,dg.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Uy.type="NONE";const hg=Uy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ul(r,e,n){return`firebase:${r}:${e}:${n}`}class mi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:l,name:u}=this.auth;this.fullUserKey=ul(this.userKey,l.apiKey,u),this.fullPersistenceKey=ul("persistence",l.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?wn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new mi(En(hg),e,s);const l=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=l[0]||En(hg);const d=ul(s,e.config.apiKey,e.name);let f=null;for(const g of n)try{const w=await g._get(d);if(w){const v=wn._fromJSON(e,w);g!==u&&(f=v),u=g;break}}catch{}const p=l.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new mi(u,e,s):(u=p[0],f&&await u._set(d,f.toJSON()),await Promise.all(n.map(async g=>{if(g!==u)try{await g._remove(d)}catch{}})),new mi(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(By(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(jy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($y(e))return"Blackberry";if(Hy(e))return"Webos";if(zy(e))return"Safari";if((e.includes("chrome/")||Wy(e))&&!e.includes("edge/"))return"Chrome";if(Vy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function jy(r=lt()){return/firefox\//i.test(r)}function zy(r=lt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Wy(r=lt()){return/crios\//i.test(r)}function By(r=lt()){return/iemobile/i.test(r)}function Vy(r=lt()){return/android/i.test(r)}function $y(r=lt()){return/blackberry/i.test(r)}function Hy(r=lt()){return/webos/i.test(r)}function Kd(r=lt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function _1(r=lt()){var e;return Kd(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function y1(){return Y0()&&document.documentMode===10}function Gy(r=lt()){return Kd(r)||Vy(r)||Hy(r)||$y(r)||/windows phone/i.test(r)||By(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qy(r,e=[]){let n;switch(r){case"Browser":n=fg(lt());break;case"Worker":n=`${fg(lt())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ti}/${s}`}/**
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
 */class v1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=u=>new Promise((d,f)=>{try{const p=e(u);d(p)}catch(p){f(p)}});s.onAbort=n,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const l of n)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function w1(r,e={}){return Pi(r,"GET","/v2/passwordPolicy",ea(r,e))}/**
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
 */const E1=6;class S1{constructor(e){var n,s,l,u;const d=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=d.minPasswordLength)!==null&&n!==void 0?n:E1,d.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=d.maxPasswordLength),d.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=d.containsLowercaseCharacter),d.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=d.containsUppercaseCharacter),d.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=d.containsNumericCharacter),d.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=d.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(l=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&l!==void 0?l:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,l,u,d,f;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(n=p.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(l=p.containsLowercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(u=p.containsUppercaseLetter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(d=p.containsNumericCharacter)!==null&&d!==void 0?d:!0),p.isValid&&(p.isValid=(f=p.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),p}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),l&&(n.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let l=0;l<e.length;l++)s=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,l,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{constructor(e,n,s,l){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pg(this),this.idTokenSubscription=new pg(this),this.beforeStateQueue=new v1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ay,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=En(n)),this._initializationPromise=this.queue(async()=>{var s,l;if(!this._deleted&&(this.persistenceManager=await mi.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await by(this,{idToken:e}),s=await wn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(_n(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let l=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,f=l==null?void 0:l._redirectEventId,p=await this.tryRedirectSignIn(e);(!d||d===f)&&(p!=null&&p.user)&&(l=p.user,u=!0)}if(!l)return this.directlySetCurrentUser(null);if(!l._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(l)}catch(d){l=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return l?this.reloadAndSetCurrentUserOrClear(l):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===l._redirectEventId?this.directlySetCurrentUser(l):this.reloadAndSetCurrentUserOrClear(l)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await xl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=s1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(_n(this.app))return Promise.reject(nr(this));const n=e?kt(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return _n(this.app)?Promise.reject(nr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return _n(this.app)?Promise.reject(nr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(En(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await w1(this),n=new S1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new xr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await g1(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&En(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await mi.create(this,[En(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,l){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let d=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(f,this,"internal-error"),f.then(()=>{d||u(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,s,l);return()=>{d=!0,p()}}else{const p=e.addObserver(n);return()=>{d=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const l=await this._getAppCheckToken();return l&&(n["X-Firebase-AppCheck"]=l),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&n1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ta(r){return kt(r)}class pg{constructor(e){this.auth=e,this.observer=null,this.addObserver=rE(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function C1(r){Yd=r}function T1(r){return Yd.loadJS(r)}function k1(){return Yd.gapiScript}function R1(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N1(r,e){const n=Dr(r,"auth");if(n.isInitialized()){const l=n.getImmediate(),u=n.getOptions();if(Ns(u,e??{}))return l;Tn(l,"already-initialized")}return n.initialize({options:e})}function P1(r,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(En);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function A1(r,e,n){const s=ta(r);X(s._canInitEmulator,s,"emulator-config-failed"),X(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const l=!1,u=Ky(e),{host:d,port:f}=O1(e),p=f===null?"":`:${f}`;s.config.emulator={url:`${u}//${d}${p}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:d,port:f,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:l})}),x1()}function Ky(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function O1(r){const e=Ky(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const u=l[1];return{host:u,port:mg(s.substr(u.length+1))}}else{const[u,d]=s.split(":");return{host:u,port:mg(d)}}}function mg(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function x1(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return vn("not implemented")}_getIdTokenResponse(e){return vn("not implemented")}_linkToIdToken(e,n){return vn("not implemented")}_getReauthenticationResolver(e){return vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gi(r,e){return Ly(r,"POST","/v1/accounts:signInWithIdp",ea(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D1="http://localhost";class Or extends Yy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Or(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:l}=n,u=$d(n,["providerId","signInMethod"]);if(!s||!l)return null;const d=new Or(s,l);return d.idToken=u.idToken||void 0,d.accessToken=u.accessToken||void 0,d.secret=u.secret,d.nonce=u.nonce,d.pendingToken=u.pendingToken||null,d}_getIdTokenResponse(e){const n=this.buildRequest();return gi(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,gi(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,gi(e,n)}buildRequest(){const e={requestUri:D1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ci(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs extends Qy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends Vs{constructor(){super("facebook.com")}static credential(e){return Or._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends Vs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Or._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Yn.credential(n,s)}catch{return null}}}Yn.GOOGLE_SIGN_IN_METHOD="google.com";Yn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends Vs{constructor(){super("github.com")}static credential(e){return Or._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.GITHUB_SIGN_IN_METHOD="github.com";Qn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends Vs{constructor(){super("twitter.com")}static credential(e,n){return Or._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Xn.credential(n,s)}catch{return null}}}Xn.TWITTER_SIGN_IN_METHOD="twitter.com";Xn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L1(r,e){return Ly(r,"POST","/v1/accounts:signUp",ea(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,l=!1){const u=await wn._fromIdTokenResponse(e,s,l),d=gg(s);return new sr({user:u,providerId:d,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const l=gg(s);return new sr({user:e,providerId:l,_tokenResponse:s,operationType:n})}}function gg(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M1(r){var e;if(_n(r.app))return Promise.reject(nr(r));const n=ta(r);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new sr({user:n.currentUser,providerId:null,operationType:"signIn"});const s=await L1(n,{returnSecureToken:!0}),l=await sr._fromIdTokenResponse(n,"signIn",s,!0);return await n._updateCurrentUser(l.user),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl extends ln{constructor(e,n,s,l){var u;super(n.code,n.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,Dl.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,l){return new Dl(e,n,s,l)}}function Xy(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Dl._fromErrorAndOperation(r,u,e,s):u})}async function b1(r,e,n=!1){const s=await bs(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return sr._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F1(r,e,n=!1){const{auth:s}=r;if(_n(s.app))return Promise.reject(nr(s));const l="reauthenticate";try{const u=await bs(r,Xy(s,l,e,r),n);X(u.idToken,s,"internal-error");const d=qd(u.idToken);X(d,s,"internal-error");const{sub:f}=d;return X(r.uid===f,s,"user-mismatch"),sr._forOperation(r,l,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Tn(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U1(r,e,n=!1){if(_n(r.app))return Promise.reject(nr(r));const s="signIn",l=await Xy(r,s,e),u=await sr._fromIdTokenResponse(r,s,l);return n||await r._updateCurrentUser(u.user),u}function j1(r,e,n,s){return kt(r).onIdTokenChanged(e,n,s)}function z1(r,e,n){return kt(r).beforeAuthStateChanged(e,n)}const Ll="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ll,"1"),this.storage.removeItem(Ll),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W1=1e3,B1=10;class Zy extends Jy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Gy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),l=this.localCache[n];s!==l&&e(n,l,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((d,f,p)=>{this.notifyListeners(d,p)});return}const s=e.key;n?this.detachListener():this.stopPolling();const l=()=>{const d=this.storage.getItem(s);!n&&this.localCache[s]===d||this.notifyListeners(s,d)},u=this.storage.getItem(s);y1()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,B1):l()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},W1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Zy.type="LOCAL";const V1=Zy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev extends Jy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ev.type="SESSION";const tv=ev;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $1(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(l=>l.isListeningto(e));if(n)return n;const s=new na(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:l,data:u}=n.data,d=this.handlersMap[l];if(!(d!=null&&d.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const f=Array.from(d).map(async g=>g(n.origin,u)),p=await $1(f);n.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}na.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qd(r="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return r+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let u,d;return new Promise((f,p)=>{const g=Qd("",20);l.port1.start();const w=setTimeout(()=>{p(new Error("unsupported_event"))},s);d={messageChannel:l,onMessage(v){const y=v;if(y.data.eventId===g)switch(y.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),f(y.data.response);break;default:clearTimeout(w),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(d),l.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[l.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(){return window}function G1(r){sn().location.href=r}/**
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
 */function nv(){return typeof sn().WorkerGlobalScope<"u"&&typeof sn().importScripts=="function"}async function q1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function K1(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function Y1(){return nv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv="firebaseLocalStorageDb",Q1=1,Ml="firebaseLocalStorage",iv="fbase_key";class $s{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ra(r,e){return r.transaction([Ml],e?"readwrite":"readonly").objectStore(Ml)}function X1(){const r=indexedDB.deleteDatabase(rv);return new $s(r).toPromise()}function Yc(){const r=indexedDB.open(rv,Q1);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Ml,{keyPath:iv})}catch(l){n(l)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Ml)?e(s):(s.close(),await X1(),e(await Yc()))})})}async function _g(r,e,n){const s=ra(r,!0).put({[iv]:e,value:n});return new $s(s).toPromise()}async function J1(r,e){const n=ra(r,!1).get(e),s=await new $s(n).toPromise();return s===void 0?null:s.value}function yg(r,e){const n=ra(r,!0).delete(e);return new $s(n).toPromise()}const Z1=800,eR=3;class sv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>eR)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=na._getInstance(Y1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await q1(),!this.activeServiceWorker)return;this.sender=new H1(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||K1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yc();return await _g(e,Ll,"1"),await yg(e,Ll),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>_g(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>J1(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>yg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const u=ra(l,!1).getAll();return new $s(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:l,value:u}of e)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(u)&&(this.notifyListeners(l,u),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Z1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sv.type="LOCAL";const tR=sv;new Bs(3e4,6e4);/**
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
 */function nR(r,e){return e?En(e):(X(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd extends Yy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return gi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return gi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function rR(r){return U1(r.auth,new Xd(r),r.bypassAuthState)}function iR(r){const{auth:e,user:n}=r;return X(n,e,"internal-error"),F1(n,new Xd(r),r.bypassAuthState)}async function sR(r){const{auth:e,user:n}=r;return X(n,e,"internal-error"),b1(n,new Xd(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(e,n,s,l,u=!1){this.auth=e,this.resolver=s,this.user=l,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:l,tenantId:u,error:d,type:f}=e;if(d){this.reject(d);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rR;case"linkViaPopup":case"linkViaRedirect":return sR;case"reauthViaPopup":case"reauthViaRedirect":return iR;default:Tn(this.auth,"internal-error")}}resolve(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR=new Bs(2e3,1e4);class ui extends ov{constructor(e,n,s,l,u){super(e,n,l,u),this.provider=s,this.authWindow=null,this.pollId=null,ui.currentPopupAction&&ui.currentPopupAction.cancel(),ui.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){kn(this.filter.length===1,"Popup operations only handle one event");const e=Qd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ui.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,oR.get())};e()}}ui.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lR="pendingRedirect",cl=new Map;class aR extends ov{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=cl.get(this.auth._key());if(!e){try{const s=await uR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}cl.set(this.auth._key(),e)}return this.bypassAuthState||cl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function uR(r,e){const n=hR(e),s=dR(r);if(!await s._isAvailable())return!1;const l=await s._get(n)==="true";return await s._remove(n),l}function cR(r,e){cl.set(r._key(),e)}function dR(r){return En(r._redirectPersistence)}function hR(r){return ul(lR,r.config.apiKey,r.name)}async function fR(r,e,n=!1){if(_n(r.app))return Promise.reject(nr(r));const s=ta(r),l=nR(s,e),d=await new aR(s,l,n).execute();return d&&!n&&(delete d.user._redirectEventId,await s._persistUserIfCurrent(d.user),await s._setRedirectUser(null,e)),d}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR=10*60*1e3;class mR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!gR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!lv(e)){const l=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(rn(this.auth,l))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=pR&&this.cachedEventUids.clear(),this.cachedEventUids.has(vg(e))}saveEventToCache(e){this.cachedEventUids.add(vg(e)),this.lastProcessedEventTime=Date.now()}}function vg(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function lv({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function gR(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return lv(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _R(r,e={}){return Pi(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vR=/^https?/;async function wR(r){if(r.config.emulator)return;const{authorizedDomains:e}=await _R(r);for(const n of e)try{if(ER(n))return}catch{}Tn(r,"unauthorized-domain")}function ER(r){const e=qc(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const d=new URL(r);return d.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&d.hostname===s}if(!vR.test(n))return!1;if(yR.test(r))return s===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
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
 */const SR=new Bs(3e4,6e4);function wg(){const r=sn().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function IR(r){return new Promise((e,n)=>{var s,l,u;function d(){wg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wg(),n(rn(r,"network-request-failed"))},timeout:SR.get()})}if(!((l=(s=sn().gapi)===null||s===void 0?void 0:s.iframes)===null||l===void 0)&&l.Iframe)e(gapi.iframes.getContext());else if(!((u=sn().gapi)===null||u===void 0)&&u.load)d();else{const f=R1("iframefcb");return sn()[f]=()=>{gapi.load?d():n(rn(r,"network-request-failed"))},T1(`${k1()}?onload=${f}`).catch(p=>n(p))}}).catch(e=>{throw dl=null,e})}let dl=null;function CR(r){return dl=dl||IR(r),dl}/**
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
 */const TR=new Bs(5e3,15e3),kR="__/auth/iframe",RR="emulator/auth/iframe",NR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},PR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function AR(r){const e=r.config;X(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?Gd(e,RR):`https://${r.config.authDomain}/${kR}`,s={apiKey:e.apiKey,appName:r.name,v:Ti},l=PR.get(r.config.apiHost);l&&(s.eid=l);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${Ci(s).slice(1)}`}async function OR(r){const e=await CR(r),n=sn().gapi;return X(n,r,"internal-error"),e.open({where:document.body,url:AR(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:NR,dontclear:!0},s=>new Promise(async(l,u)=>{await s.restyle({setHideOnLeave:!1});const d=rn(r,"network-request-failed"),f=sn().setTimeout(()=>{u(d)},TR.get());function p(){sn().clearTimeout(f),l(s)}s.ping(p).then(p,()=>{u(d)})}))}/**
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
 */const xR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},DR=500,LR=600,MR="_blank",bR="http://localhost";class Eg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function FR(r,e,n,s=DR,l=LR){const u=Math.max((window.screen.availHeight-l)/2,0).toString(),d=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const p=Object.assign(Object.assign({},xR),{width:s.toString(),height:l.toString(),top:u,left:d}),g=lt().toLowerCase();n&&(f=Wy(g)?MR:n),jy(g)&&(e=e||bR,p.scrollbars="yes");const w=Object.entries(p).reduce((y,[R,D])=>`${y}${R}=${D},`,"");if(_1(g)&&f!=="_self")return UR(e||"",f),new Eg(null);const v=window.open(e||"",f,w);X(v,r,"popup-blocked");try{v.focus()}catch{}return new Eg(v)}function UR(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const jR="__/auth/handler",zR="emulator/auth/handler",WR=encodeURIComponent("fac");async function Sg(r,e,n,s,l,u){X(r.config.authDomain,r,"auth-domain-config-required"),X(r.config.apiKey,r,"invalid-api-key");const d={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:Ti,eventId:l};if(e instanceof Qy){e.setDefaultLanguage(r.languageCode),d.providerId=e.providerId||"",Tc(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,v]of Object.entries({}))d[w]=v}if(e instanceof Vs){const w=e.getScopes().filter(v=>v!=="");w.length>0&&(d.scopes=w.join(","))}r.tenantId&&(d.tid=r.tenantId);const f=d;for(const w of Object.keys(f))f[w]===void 0&&delete f[w];const p=await r._getAppCheckToken(),g=p?`#${WR}=${encodeURIComponent(p)}`:"";return`${BR(r)}?${Ci(f).slice(1)}${g}`}function BR({config:r}){return r.emulator?Gd(r,zR):`https://${r.authDomain}/${jR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc="webStorageSupport";class VR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tv,this._completeRedirectFn=fR,this._overrideRedirectResult=cR}async _openPopup(e,n,s,l){var u;kn((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const d=await Sg(e,n,s,qc(),l);return FR(e,d,Qd())}async _openRedirect(e,n,s,l){await this._originValidation(e);const u=await Sg(e,n,s,qc(),l);return G1(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:l,promise:u}=this.eventManagers[n];return l?Promise.resolve(l):(kn(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await OR(e),s=new mR(e);return n.register("authEvent",l=>(X(l==null?void 0:l.authEvent,e,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Cc,{type:Cc},l=>{var u;const d=(u=l==null?void 0:l[0])===null||u===void 0?void 0:u[Cc];d!==void 0&&n(!!d),Tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=wR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Gy()||zy()||Kd()}}const $R=VR;var Ig="@firebase/auth",Cg="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GR(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function qR(r){on(new Kt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:d,authDomain:f}=s.options;X(d&&!d.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:d,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qy(r)},g=new I1(s,l,u,p);return P1(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),on(new Kt("auth-internal",e=>{const n=ta(e.getProvider("auth").getImmediate());return(s=>new HR(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),bt(Ig,Cg,GR(r)),bt(Ig,Cg,"esm2017")}/**
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
 */const KR=5*60,YR=jg("authIdTokenMaxAge")||KR;let Tg=null;const QR=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>YR)return;const l=n==null?void 0:n.token;Tg!==l&&(Tg=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function XR(r=rd()){const e=Dr(r,"auth");if(e.isInitialized())return e.getImmediate();const n=N1(r,{popupRedirectResolver:$R,persistence:[tR,V1,tv]}),s=jg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const d=QR(u.toString());z1(n,d,()=>d(n.currentUser)),j1(n,f=>d(f))}}const l=Fg("auth");return l&&A1(n,`http://${l}`),n}function JR(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}C1({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=l=>{const u=rn("internal-error");u.customData=l,n(u)},s.type="text/javascript",s.charset="UTF-8",JR().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});qR("Browser");const ZR={apiKey:"AIzaSyB2SlnQ03tQfpjLMcleDimnz-wI6_BSXYE",authDomain:"my-multiplayer-dbf6b.firebaseapp.com",databaseURL:"https://my-multiplayer-dbf6b-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"my-multiplayer-dbf6b",storageBucket:"my-multiplayer-dbf6b.firebasestorage.app",messagingSenderId:"3902656578",appId:"1:3902656578:web:ea447bf59037a7d25b5ddb",measurementId:"G-3DVR8Y6VSM"},Jd=Yg(ZR);Xk(Jd);const ia=OT(Jd),Qc=XR(Jd);M1(Qc).then(()=>{console.log("Signed in anonymously")}).catch(r=>{console.error("Error signing in anonymously:",r)});const eN=(r,e)=>{const n=Xl(ia,`players/${r}`);oy(n,e).then(()=>{console.log("Data written successfully!")}).catch(s=>{console.error("Error writing data:",s)})},Ct=(r,e)=>{const n=Xl(ia,`players/${r}`);ET(n,{...e,modifiedAt:new Date().toISOString()}).then(()=>{console.log("Data updated successfully!")}).catch(s=>{console.error("Error updating data:",s)})},tN=r=>{const e=Xl(ia,`players/${r}`);wT(e).then(()=>{console.log("Data removed successfully!")}).catch(n=>{console.error("Error deleting data:",n)})},nN=(r,e)=>{const n=r*e,s={};for(const[f,p]of Object.entries(y0))s[f]=Math.floor(p*n);let l=[];for(const[f,p]of Object.entries(s))l=l.concat(Array(p).fill(f));for(;l.length<n;)l.push(ge.EMPTY);for(let f=l.length-1;f>0;f--){const p=Math.floor(Math.random()*(f+1));[l[f],l[p]]=[l[p],l[f]]}const u=[];let d=0;for(let f=0;f<r;f++){const p=[];for(let g=0;g<e;g++)p.push({isActive:!1,type:l[d++]});u.push(p)}return u},rN=(r,e,n,s,l)=>n==null?void 0:n.find(u=>u.x===r&&u.y===e&&u.page===s&&u.id!==l),Xc=(r,e,n,s,l,u="")=>{const d=rN(r,e,n,l,u);return d!==void 0?d:r<0||r>=s[0].length||e<0||e>=s.length?2:s[e][r]===ge.WATER?0:1},iN=(r,e,n,s,l)=>{const{x:u,y:d,id:f,page:p}=r,g=Xc(u,d,n,l,p,f);if(g!==2)switch(l[d][u]){case ge.HOME:Ct(f,{page:"home"}),e("home");break;case ge.GAME:Ct(f,{page:"forest"}),e("forest");break;case ge.FREE_WAY:Ct(f,{page:"freeway"}),e("freeway");break;case ge.SELL_APPLE:Ct(f,{score:0});break;default:(g===1||g===0)&&(s(),Ct(f,{isTyping:!0}));break}},av=(r,e,n,s,l,u,d)=>{const{x:f,y:p,id:g,vector:w,page:v}=r,y={ArrowUp:{dir:0,dx:0,dy:-1},ArrowRight:{dir:1,dx:1,dy:0},ArrowDown:{dir:2,dx:0,dy:1},ArrowLeft:{dir:3,dx:-1,dy:0}};if(e in y){const{dir:R,dx:D,dy:F}=y[e],$=f+D,ve=p+F,we={dir:R,vector:(w+1)%4},pe={dir:R},le=Xc($,ve,u,d,v);if(le!=null&&le.id&&n){const Ue=$+D,Z=ve+F;D!==0&&(pe.x=Ue),F!==0&&(pe.y=Z),Xc(Ue,Z,u,d,v)===1&&(Ct(le==null?void 0:le.id,pe),we.x=$,we.y=ve)}else(le===1||le===2)&&(D!==0&&(we.x=$),F!==0&&(we.y=ve));Ct(g,we)}else e==="Enter"?iN(r,s,u,l,d):e==="Escape"&&Ct(g,{isTyping:!1,msg:""})};function kg(r,e,n){return typeof r=="string"?new Date(new Date(r).toLocaleString(n,{timeZone:e})):new Date(r.toLocaleString(n,{timeZone:e}))}function sN(r,e="dd/mm/yyyy",n="",s="us"){let l=new Date(r);if(n&&(l=new Date(l.toLocaleString(s,{timeZone:n}))),l.toString()==="Invalid Date")return r;let u=""+(l.getMonth()+1),d=""+l.getDate();const f=l.getFullYear().toString();return u.length<2&&(u="0"+u),d.length<2&&(d="0"+d),e.replace("dd",d).replace("mm",u).replace("yyyy",f)}function oN(r,e="Asia/Kolkata",n="dd/mm/yyyy"){if(!r)return;const s="en-US",l=new Date(r),u=kg(new Date,e,s),d=kg(l,e,s);function f(){var p=Math.floor((u-d)/1e3);if(p<60)return Math.floor(p)+" "+[Math.floor(p)>1?"seconds":"second","ago"].join(" ");let g=p/60;return g<60?Math.floor(g)+" "+[Math.floor(g)>1?"minutes":"minute","ago"].join(" "):(g=p/3600,g<=24?Math.floor(g)+" "+[Math.floor(g)>1?"hours":"hour","ago"].join(" "):(g=p/86400,g<=3?Math.floor(g)+" "+[Math.floor(g)>1?"days":"day","ago"].join(" "):sN(r,n,e,s)))}return f()}const lN="_mycharacter_1j082_1",aN="_moveD_1j082_10",uN="_moveU_1j082_13",cN="_moveR_1j082_16",dN="_moveL_1j082_19",hN="_dragon_1j082_22",fN="_walkLeft_1j082_25",pN="_walkRight_1j082_28",mN="_name_1j082_31",gN="_msgContainer_1j082_38",_N="_msg_1j082_38",yN="_msgArrow_1j082_61",vN="_typing_1j082_72",wN="_blink_1j082_1",wr={mycharacter:lN,moveD:aN,moveU:uN,moveR:cN,moveL:dN,dragon:hN,walkLeft:fN,walkRight:pN,name:mN,msgContainer:gN,msg:_N,msgArrow:yN,"typing-container":"_typing-container_1j082_72",typing:vN,blink:wN};function sa(r){var s,l;const{p:e,site:n=""}=r;return(e==null?void 0:e.page)!==n?null:V.jsxs("div",{style:{position:"relative"},children:[V.jsx("div",{className:`${wr.mycharacter} ${wr[v0[e==null?void 0:e.dir]]}`,style:{transform:`translate(${(e==null?void 0:e.x)*4}rem, ${(e==null?void 0:e.y)*4}rem)`,backgroundPosition:`${(e==null?void 0:e.vector)*-24}px 0`}}),V.jsxs("div",{className:wr.name,style:{transform:`translate(${(e==null?void 0:e.x)*4}rem, ${(e==null?void 0:e.y)*4}rem)`},children:[e.name," ",n==="forest"&&e.score]}),(((l=(s=e==null?void 0:e.msg)==null?void 0:s.trim())==null?void 0:l.length)!==0||(e==null?void 0:e.isTyping)==!0)&&V.jsx(V.Fragment,{children:V.jsxs("div",{style:{transform:`translate(${(e==null?void 0:e.x)*4}rem, ${(e==null?void 0:e.y)*4}rem)`},className:wr.msgContainer,children:[e.isTyping&&V.jsx("span",{className:wr.typing,children:"....."}),V.jsx("div",{className:wr.msg,children:e.msg}),V.jsx("div",{className:wr.msgArrow})]})})]})}sa.propTypes={p:Mt.object,site:Mt.string};const Rg=r=>{let e;const n=new Set,s=(g,w)=>{const v=typeof g=="function"?g(e):g;if(!Object.is(v,e)){const y=e;e=w??(typeof v!="object"||v===null)?v:Object.assign({},e,v),n.forEach(R=>R(e,y))}},l=()=>e,f={setState:s,getState:l,getInitialState:()=>p,subscribe:g=>(n.add(g),()=>n.delete(g))},p=e=r(s,l,f);return f},EN=r=>r?Rg(r):Rg,SN=r=>r;function IN(r,e=SN){const n=em.useSyncExternalStore(r.subscribe,()=>e(r.getState()),()=>e(r.getInitialState()));return em.useDebugValue(n),n}const Ng=r=>{const e=EN(r),n=s=>IN(e,s);return Object.assign(n,e),n},Zd=r=>r?Ng(r):Ng,oa=Zd(r=>({players:[],setPlayers:e=>r({players:e})})),Hs=Zd(r=>({myPlayer:{},setMyPlayer:e=>r({myPlayer:e}),page:"home",setPage:e=>r({page:e})})),eh=Zd(r=>({isTyping:!1,setIsTyping:e=>r({isTyping:e}),msg:"",setMsg:e=>r({msg:e})}));function uv(r){const{rows:e,cols:n}=r,{myPlayer:s,setPage:l}=Hs(),{players:u}=oa(),d=ye.useRef(null),[f,p]=ye.useState(0),[g,w]=ye.useState(()=>nN(e,n)),[v,y]=ye.useState(()=>0),[R,D]=ye.useState(()=>0),[F,$]=ye.useState(()=>2),[ve,we]=ye.useState(()=>0),pe=(Z,Q,se)=>{const We=se===0||se===2,rt=We?e:n;if(Q<0||Q>=rt)return Z;const Qt=We?g[Q][R].type:g[v][Q].type;return Qt===ge.ROCK?Z:(Qt===ge.WATER?$(4):$(se),we(Rt=>(Rt+1)%4),Q)},le=()=>{g[v][R].type===ge.HOME&&(Ct(s==null?void 0:s.id,{page:"home"}),l("home"))},Ue=Z=>{switch(console.log("##keydown",Z.key),Z.key){case"ArrowUp":y(Q=>{let se=Q-1;return console.log("##up",Q,se),pe(Q,se,0)});break;case"ArrowRight":D(Q=>{let se=Q+1;return console.log("##right",Q,se),pe(Q,se,1)});break;case"ArrowDown":y(Q=>{let se=Q+1;return console.log("##down",Q,se),pe(Q,se,2)});break;case"ArrowLeft":D(Q=>{let se=Q-1;return console.log("##left",Q,se),pe(Q,se,3)});break;case" ":break;case"Enter":le();break}};return ye.useEffect(()=>{g[v][R].type===ge.FOOD&&setTimeout(()=>{let Q=g;Q[v][R].type=ge.EMPTY,w(Q),p(se=>se+1)},400);let Z={x:R,y:v,dir:F,vector:ve,score:f};Ct(s==null?void 0:s.id,Z)},[v,R]),ye.useEffect(()=>{var Z;d&&((Z=d==null?void 0:d.current)==null||Z.focus(),y((s==null?void 0:s.y)||0),D((s==null?void 0:s.x)||0),p((s==null?void 0:s.score)||0))},[]),V.jsxs("div",{tabIndex:"0",onKeyDown:Ue,ref:d,className:ci.boardContainer,children:[V.jsxs("div",{children:[" Score: ",f]}),V.jsxs("div",{className:ci.board,children:[u==null?void 0:u.map(Z=>V.jsx(sa,{p:Z,site:"forest"},Z.id)),g.map((Z,Q)=>V.jsx("div",{className:ci.row,children:Z.map((se,We)=>{const rt=v===Q&&R===We;return V.jsx(bl,{isActive:rt,type:se==null?void 0:se.type,site:"forest"},We)})},Q))]})]})}uv.propTypes={rows:Mt.number.isRequired,cols:Mt.number.isRequired};const CN="_newPlayer_1dkh4_1",TN="_btnSubmit_1dkh4_10",Pg={newPlayer:CN,btnSubmit:TN};function cv(r){const{user:e,setNewPlayer:n}=r,[s,l]=ye.useState(""),[u,d]=ye.useState("male"),f=()=>{if(s.trim().length===0)return;n(!1);const g={name:s,score:0,x:0,y:0,character:"",dir:2,vector:0,page:"home",msg:""};eN(e==null?void 0:e.id,g)},p=g=>{d(g.target.value)};return V.jsxs("div",{className:Pg.newPlayer,children:[V.jsx("div",{children:"New player"}),V.jsx("input",{type:"text",placeholder:"Enter your name",value:s,onChange:g=>l(g.target.value)}),V.jsx("br",{}),V.jsxs("select",{value:u,onChange:p,children:[V.jsx("option",{value:"male",children:"Man"}),V.jsx("option",{value:"female",children:"Women"}),V.jsx("option",{value:"snake",children:"Snake"})]}),V.jsx("button",{className:Pg.btnSubmit,onClick:f,children:"Submit"})]})}cv.propTypes={user:Mt.object.isRequired,setNewPlayer:Mt.func.isRequired};const Ag=[["null","wood","wood","null","null","null","null","null","null","wood","wood","null"],["null","wood","wood","empty","null","null","null","null","sellApple","wood","wood","null"],["empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty"],["empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty"],["game","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty"],["empty","empty","empty","empty","water","water","water","water","empty","empty","empty","empty"],["freeway","empty","empty","empty","water","water","water","water","empty","empty","empty","empty"],["empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty"],["grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass"]],kN="_homeContainer_2j3fa_1",RN="_home_2j3fa_1",NN="_hint_2j3fa_17",PN="_col_2j3fa_24",AN="_heading_2j3fa_33",ON="_row_2j3fa_37",xN="_activePlayer_2j3fa_40",qn={homeContainer:kN,home:RN,hint:NN,col:PN,heading:AN,row:ON,activePlayer:xN};function DN(){const{myPlayer:r,setPage:e}=Hs(),{players:n}=oa(),{isTyping:s,setIsTyping:l}=eh(),{x:u,y:d}=r,f=ye.useRef(null),[p,g]=ye.useState("Press Enter to type message, and again Enter to send it. Esc to cancel or delete. Hold shift to move other players."),w=()=>{var y;(y=f==null?void 0:f.current)==null||y.blur(),l(!0)},v=y=>{y.preventDefault(),av(r,y.key,y.shiftKey,e,w,n,Ag)};return ye.useEffect(()=>{g(u===0&&d===4?"Press enter":"Press Enter to type message, and again Enter to send it. Esc to cancel or delete. Hold shift to move other players.")},[u,d]),ye.useEffect(()=>{var y;f&&((y=f==null?void 0:f.current)==null||y.focus())},[]),ye.useEffect(()=>{var y;s||(y=f==null?void 0:f.current)==null||y.focus()},[s]),V.jsxs("div",{className:qn.homeContainer,children:[V.jsxs("div",{className:qn.col,children:[V.jsxs("div",{className:qn.hint,children:["Hint: ",p]}),V.jsx("div",{className:qn.heading,children:"Active players"}),n==null?void 0:n.map(y=>V.jsxs("div",{className:qn.activePlayer,children:[V.jsxs("div",{className:qn.row,children:[V.jsx("span",{style:{paddingRight:"4px"},children:"🟢"}),y.name]}),V.jsx("div",{children:oN(y==null?void 0:y.modifiedAt)})]},y.id))]}),V.jsxs("div",{className:qn.home,tabIndex:"0",onKeyDown:v,ref:f,children:[V.jsx("h2",{children:"Living area"}),V.jsxs("div",{children:[n==null?void 0:n.map(y=>V.jsx(sa,{p:y,site:"home"},y.id)),Ag.map((y,R)=>V.jsx("div",{className:ci.row,children:y.map((D,F)=>V.jsx(bl,{type:D,site:"home"},F))},R))]})]}),V.jsx("div",{className:qn.col,children:"Recent Chats"})]})}function dv(r){const{rows:e,cols:n}=r,s=ye.useRef(null),{myPlayer:l,setPage:u}=Hs(),{players:d}=oa(),{isTyping:f,setIsTyping:p}=eh(),[g]=ye.useState(()=>{let y=[];for(let R=0;R<e;R++){let D=[];for(let F=0;F<n;F++)D.push(ge.NULL);y.push(D)}return y[0][0]=ge.HOME,y}),w=()=>{var y;(y=s==null?void 0:s.current)==null||y.blur(),p(!0)},v=y=>{y.preventDefault(),av(l,y.key,y.shiftKey,u,w,d,g)};return ye.useEffect(()=>{var y;f||(y=s==null?void 0:s.current)==null||y.focus()},[f]),ye.useEffect(()=>{var y;s&&((y=s==null?void 0:s.current)==null||y.focus())},[]),V.jsxs("div",{tabIndex:"0",onKeyDown:v,ref:s,className:ci.board,children:[d==null?void 0:d.map(y=>V.jsx(sa,{p:y,site:"freeway"},y.id)),g.map((y,R)=>V.jsx("div",{className:ci.row,children:y.map((D,F)=>V.jsx(bl,{type:D,site:"freeway"},F))},R))]})}dv.propTypes={rows:Mt.number.isRequired,cols:Mt.number.isRequired};const LN="_editor_ge73_1",MN="_input_ge73_9",Og={editor:LN,input:MN};function hv(){const{myPlayer:{id:r=""}}=Hs(),{isTyping:e,setIsTyping:n,msg:s,setMsg:l}=eh(),u=ye.useRef(null),[d,f]=ye.useState(2),p=g=>{g.key==="Enter"&&!g.shiftKey&&(s==null?void 0:s.trim().length)>0?(g.preventDefault(),Ct(r,{isTyping:!1,msg:s}),n(!1),l(""),f(2)):g.key==="Enter"&&g.shiftKey&&d<16?f(w=>w+1):g.key==="Backspace"&&d>2?f(w=>w-1):g.key==="Escape"&&(n(!1),l(""),Ct(r,{isTyping:!1}))};if(e)return V.jsx("div",{className:Og.editor,children:V.jsx("textarea",{ref:u,value:s,autoFocus:!0,className:Og.input,placeholder:"Type your message...",onChange:g=>{l(g.target.value)},onKeyUp:p,rows:d.toString()})})}hv.propTypes={id:Mt.string};function bN(){const[r,e]=ye.useState(!0),{myPlayer:n,setMyPlayer:s,page:l,setPage:u}=Hs(),{setPlayers:d}=oa(),f=w=>{if(!w)return;let v=[];for(const y in w)y===n.id&&(s({id:y,...w[y]}),u(w[y].page),e(!1)),v.push({id:y,...w[y]});d(v)},p=()=>{tN(n==null?void 0:n.id),e(!0),s({}),window.location.reload()},g=()=>{l!=="home"&&(u("home"),Ct(n==null?void 0:n.id,{page:"home"}))};return ye.useEffect(()=>Qc.onAuthStateChanged(v=>{if(v){let y=n;y.id=v.uid,s(y)}else console.log("User signed out")}),[Qc]),ye.useEffect(()=>{const w=Xl(ia,"players"),v=IT(w,y=>{f(y.val())});return()=>v()},[]),r?V.jsx(cv,{user:n,setNewPlayer:e}):V.jsxs(V.Fragment,{children:[V.jsxs("div",{style:{padding:"1rem",fontWeight:"bolder",display:"flex",justifyContent:"space-between"},children:[V.jsx("button",{onClick:g,children:"Home"}),V.jsx("button",{onClick:p,children:"Reset"})]}),l==="home"&&V.jsx(DN,{}),l==="forest"&&V.jsx(uv,{rows:9,cols:12}),l==="freeway"&&V.jsx(dv,{rows:10,cols:10}),V.jsx(hv,{})]})}_0.createRoot(document.getElementById("root")).render(V.jsx(ye.StrictMode,{children:V.jsx(bN,{})}));
