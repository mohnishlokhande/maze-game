(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=n(l);fetch(l.href,u)}})();function Ng(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Zu={exports:{}},ps={},ec={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp;function o0(){if(qp)return Z;qp=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.iterator;function E(I){return I===null||typeof I!="object"?null:(I=y&&I[y]||I["@@iterator"],typeof I=="function"?I:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,b={};function M(I,P,J){this.props=I,this.context=P,this.refs=b,this.updater=J||R}M.prototype.isReactComponent={},M.prototype.setState=function(I,P){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,P,"setState")},M.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function Ee(){}Ee.prototype=M.prototype;function Ae(I,P,J){this.props=I,this.context=P,this.refs=b,this.updater=J||R}var ge=Ae.prototype=new Ee;ge.constructor=Ae,O(ge,M.prototype),ge.isPureReactComponent=!0;var Re=Array.isArray,Ze=Object.prototype.hasOwnProperty,se={current:null},X={key:!0,ref:!0,__self:!0,__source:!0};function ie(I,P,J){var ne,le={},ae=null,_e=null;if(P!=null)for(ne in P.ref!==void 0&&(_e=P.ref),P.key!==void 0&&(ae=""+P.key),P)Ze.call(P,ne)&&!X.hasOwnProperty(ne)&&(le[ne]=P[ne]);var de=arguments.length-2;if(de===1)le.children=J;else if(1<de){for(var Te=Array(de),wt=0;wt<de;wt++)Te[wt]=arguments[wt+2];le.children=Te}if(I&&I.defaultProps)for(ne in de=I.defaultProps,de)le[ne]===void 0&&(le[ne]=de[ne]);return{$$typeof:r,type:I,key:ae,ref:_e,props:le,_owner:se.current}}function ze(I,P){return{$$typeof:r,type:I.type,key:P,ref:I.ref,props:I.props,_owner:I._owner}}function it(I){return typeof I=="object"&&I!==null&&I.$$typeof===r}function Qt(I){var P={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(J){return P[J]})}var Rt=/\/+/g;function vt(I,P){return typeof I=="object"&&I!==null&&I.key!=null?Qt(""+I.key):P.toString(36)}function bt(I,P,J,ne,le){var ae=typeof I;(ae==="undefined"||ae==="boolean")&&(I=null);var _e=!1;if(I===null)_e=!0;else switch(ae){case"string":case"number":_e=!0;break;case"object":switch(I.$$typeof){case r:case e:_e=!0}}if(_e)return _e=I,le=le(_e),I=ne===""?"."+vt(_e,0):ne,Re(le)?(J="",I!=null&&(J=I.replace(Rt,"$&/")+"/"),bt(le,P,J,"",function(wt){return wt})):le!=null&&(it(le)&&(le=ze(le,J+(!le.key||_e&&_e.key===le.key?"":(""+le.key).replace(Rt,"$&/")+"/")+I)),P.push(le)),1;if(_e=0,ne=ne===""?".":ne+":",Re(I))for(var de=0;de<I.length;de++){ae=I[de];var Te=ne+vt(ae,de);_e+=bt(ae,P,J,Te,le)}else if(Te=E(I),typeof Te=="function")for(I=Te.call(I),de=0;!(ae=I.next()).done;)ae=ae.value,Te=ne+vt(ae,de++),_e+=bt(ae,P,J,Te,le);else if(ae==="object")throw P=String(I),Error("Objects are not valid as a React child (found: "+(P==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":P)+"). If you meant to render a collection of children, use an array instead.");return _e}function Xt(I,P,J){if(I==null)return I;var ne=[],le=0;return bt(I,ne,"","",function(ae){return P.call(J,ae,le++)}),ne}function ut(I){if(I._status===-1){var P=I._result;P=P(),P.then(function(J){(I._status===0||I._status===-1)&&(I._status=1,I._result=J)},function(J){(I._status===0||I._status===-1)&&(I._status=2,I._result=J)}),I._status===-1&&(I._status=0,I._result=P)}if(I._status===1)return I._result.default;throw I._result}var Oe={current:null},F={transition:null},q={ReactCurrentDispatcher:Oe,ReactCurrentBatchConfig:F,ReactCurrentOwner:se};function z(){throw Error("act(...) is not supported in production builds of React.")}return Z.Children={map:Xt,forEach:function(I,P,J){Xt(I,function(){P.apply(this,arguments)},J)},count:function(I){var P=0;return Xt(I,function(){P++}),P},toArray:function(I){return Xt(I,function(P){return P})||[]},only:function(I){if(!it(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},Z.Component=M,Z.Fragment=n,Z.Profiler=l,Z.PureComponent=Ae,Z.StrictMode=s,Z.Suspense=p,Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,Z.act=z,Z.cloneElement=function(I,P,J){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var ne=O({},I.props),le=I.key,ae=I.ref,_e=I._owner;if(P!=null){if(P.ref!==void 0&&(ae=P.ref,_e=se.current),P.key!==void 0&&(le=""+P.key),I.type&&I.type.defaultProps)var de=I.type.defaultProps;for(Te in P)Ze.call(P,Te)&&!X.hasOwnProperty(Te)&&(ne[Te]=P[Te]===void 0&&de!==void 0?de[Te]:P[Te])}var Te=arguments.length-2;if(Te===1)ne.children=J;else if(1<Te){de=Array(Te);for(var wt=0;wt<Te;wt++)de[wt]=arguments[wt+2];ne.children=de}return{$$typeof:r,type:I.type,key:le,ref:ae,props:ne,_owner:_e}},Z.createContext=function(I){return I={$$typeof:d,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:u,_context:I},I.Consumer=I},Z.createElement=ie,Z.createFactory=function(I){var P=ie.bind(null,I);return P.type=I,P},Z.createRef=function(){return{current:null}},Z.forwardRef=function(I){return{$$typeof:f,render:I}},Z.isValidElement=it,Z.lazy=function(I){return{$$typeof:v,_payload:{_status:-1,_result:I},_init:ut}},Z.memo=function(I,P){return{$$typeof:g,type:I,compare:P===void 0?null:P}},Z.startTransition=function(I){var P=F.transition;F.transition={};try{I()}finally{F.transition=P}},Z.unstable_act=z,Z.useCallback=function(I,P){return Oe.current.useCallback(I,P)},Z.useContext=function(I){return Oe.current.useContext(I)},Z.useDebugValue=function(){},Z.useDeferredValue=function(I){return Oe.current.useDeferredValue(I)},Z.useEffect=function(I,P){return Oe.current.useEffect(I,P)},Z.useId=function(){return Oe.current.useId()},Z.useImperativeHandle=function(I,P,J){return Oe.current.useImperativeHandle(I,P,J)},Z.useInsertionEffect=function(I,P){return Oe.current.useInsertionEffect(I,P)},Z.useLayoutEffect=function(I,P){return Oe.current.useLayoutEffect(I,P)},Z.useMemo=function(I,P){return Oe.current.useMemo(I,P)},Z.useReducer=function(I,P,J){return Oe.current.useReducer(I,P,J)},Z.useRef=function(I){return Oe.current.useRef(I)},Z.useState=function(I){return Oe.current.useState(I)},Z.useSyncExternalStore=function(I,P,J){return Oe.current.useSyncExternalStore(I,P,J)},Z.useTransition=function(){return Oe.current.useTransition()},Z.version="18.3.1",Z}var Kp;function Qc(){return Kp||(Kp=1,ec.exports=o0()),ec.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp;function l0(){if(Yp)return ps;Yp=1;var r=Qc(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(f,p,g){var v,y={},E=null,R=null;g!==void 0&&(E=""+g),p.key!==void 0&&(E=""+p.key),p.ref!==void 0&&(R=p.ref);for(v in p)s.call(p,v)&&!u.hasOwnProperty(v)&&(y[v]=p[v]);if(f&&f.defaultProps)for(v in p=f.defaultProps,p)y[v]===void 0&&(y[v]=p[v]);return{$$typeof:e,type:f,key:E,ref:R,props:y,_owner:l.current}}return ps.Fragment=n,ps.jsx=d,ps.jsxs=d,ps}var Qp;function a0(){return Qp||(Qp=1,Zu.exports=l0()),Zu.exports}var G=a0(),fe=Qc();const Xp=Ng(fe);var nl={},tc={exports:{}},mt={},nc={exports:{}},rc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp;function u0(){return Jp||(Jp=1,function(r){function e(F,q){var z=F.length;F.push(q);e:for(;0<z;){var I=z-1>>>1,P=F[I];if(0<l(P,q))F[I]=q,F[z]=P,z=I;else break e}}function n(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var q=F[0],z=F.pop();if(z!==q){F[0]=z;e:for(var I=0,P=F.length,J=P>>>1;I<J;){var ne=2*(I+1)-1,le=F[ne],ae=ne+1,_e=F[ae];if(0>l(le,z))ae<P&&0>l(_e,le)?(F[I]=_e,F[ae]=z,I=ae):(F[I]=le,F[ne]=z,I=ne);else if(ae<P&&0>l(_e,z))F[I]=_e,F[ae]=z,I=ae;else break e}}return q}function l(F,q){var z=F.sortIndex-q.sortIndex;return z!==0?z:F.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var d=Date,f=d.now();r.unstable_now=function(){return d.now()-f}}var p=[],g=[],v=1,y=null,E=3,R=!1,O=!1,b=!1,M=typeof setTimeout=="function"?setTimeout:null,Ee=typeof clearTimeout=="function"?clearTimeout:null,Ae=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ge(F){for(var q=n(g);q!==null;){if(q.callback===null)s(g);else if(q.startTime<=F)s(g),q.sortIndex=q.expirationTime,e(p,q);else break;q=n(g)}}function Re(F){if(b=!1,ge(F),!O)if(n(p)!==null)O=!0,ut(Ze);else{var q=n(g);q!==null&&Oe(Re,q.startTime-F)}}function Ze(F,q){O=!1,b&&(b=!1,Ee(ie),ie=-1),R=!0;var z=E;try{for(ge(q),y=n(p);y!==null&&(!(y.expirationTime>q)||F&&!Qt());){var I=y.callback;if(typeof I=="function"){y.callback=null,E=y.priorityLevel;var P=I(y.expirationTime<=q);q=r.unstable_now(),typeof P=="function"?y.callback=P:y===n(p)&&s(p),ge(q)}else s(p);y=n(p)}if(y!==null)var J=!0;else{var ne=n(g);ne!==null&&Oe(Re,ne.startTime-q),J=!1}return J}finally{y=null,E=z,R=!1}}var se=!1,X=null,ie=-1,ze=5,it=-1;function Qt(){return!(r.unstable_now()-it<ze)}function Rt(){if(X!==null){var F=r.unstable_now();it=F;var q=!0;try{q=X(!0,F)}finally{q?vt():(se=!1,X=null)}}else se=!1}var vt;if(typeof Ae=="function")vt=function(){Ae(Rt)};else if(typeof MessageChannel<"u"){var bt=new MessageChannel,Xt=bt.port2;bt.port1.onmessage=Rt,vt=function(){Xt.postMessage(null)}}else vt=function(){M(Rt,0)};function ut(F){X=F,se||(se=!0,vt())}function Oe(F,q){ie=M(function(){F(r.unstable_now())},q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_continueExecution=function(){O||R||(O=!0,ut(Ze))},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ze=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return E},r.unstable_getFirstCallbackNode=function(){return n(p)},r.unstable_next=function(F){switch(E){case 1:case 2:case 3:var q=3;break;default:q=E}var z=E;E=q;try{return F()}finally{E=z}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(F,q){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var z=E;E=F;try{return q()}finally{E=z}},r.unstable_scheduleCallback=function(F,q,z){var I=r.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?I+z:I):z=I,F){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=z+P,F={id:v++,callback:q,priorityLevel:F,startTime:z,expirationTime:P,sortIndex:-1},z>I?(F.sortIndex=z,e(g,F),n(p)===null&&F===n(g)&&(b?(Ee(ie),ie=-1):b=!0,Oe(Re,z-I))):(F.sortIndex=P,e(p,F),O||R||(O=!0,ut(Ze))),F},r.unstable_shouldYield=Qt,r.unstable_wrapCallback=function(F){var q=E;return function(){var z=E;E=q;try{return F.apply(this,arguments)}finally{E=z}}}}(rc)),rc}var Zp;function c0(){return Zp||(Zp=1,nc.exports=u0()),nc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var em;function d0(){if(em)return mt;em=1;var r=Qc(),e=c0();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function u(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(l[t]=i,t=0;t<i.length;t++)s.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},y={};function E(t){return p.call(y,t)?!0:p.call(v,t)?!1:g.test(t)?y[t]=!0:(v[t]=!0,!1)}function R(t,i,o,a){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return a?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function O(t,i,o,a){if(i===null||typeof i>"u"||R(t,i,o,a))return!0;if(a)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function b(t,i,o,a,c,h,m){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=a,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=m}var M={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){M[t]=new b(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];M[i]=new b(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){M[t]=new b(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){M[t]=new b(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){M[t]=new b(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){M[t]=new b(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){M[t]=new b(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){M[t]=new b(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){M[t]=new b(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ee=/[\-:]([a-z])/g;function Ae(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(Ee,Ae);M[i]=new b(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(Ee,Ae);M[i]=new b(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(Ee,Ae);M[i]=new b(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){M[t]=new b(t,1,!1,t.toLowerCase(),null,!1,!1)}),M.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){M[t]=new b(t,1,!1,t.toLowerCase(),null,!0,!0)});function ge(t,i,o,a){var c=M.hasOwnProperty(i)?M[i]:null;(c!==null?c.type!==0:a||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(O(i,o,c,a)&&(o=null),a||c===null?E(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):c.mustUseProperty?t[c.propertyName]=o===null?c.type===3?!1:"":o:(i=c.attributeName,a=c.attributeNamespace,o===null?t.removeAttribute(i):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,a?t.setAttributeNS(a,i,o):t.setAttribute(i,o))))}var Re=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ze=Symbol.for("react.element"),se=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),ie=Symbol.for("react.strict_mode"),ze=Symbol.for("react.profiler"),it=Symbol.for("react.provider"),Qt=Symbol.for("react.context"),Rt=Symbol.for("react.forward_ref"),vt=Symbol.for("react.suspense"),bt=Symbol.for("react.suspense_list"),Xt=Symbol.for("react.memo"),ut=Symbol.for("react.lazy"),Oe=Symbol.for("react.offscreen"),F=Symbol.iterator;function q(t){return t===null||typeof t!="object"?null:(t=F&&t[F]||t["@@iterator"],typeof t=="function"?t:null)}var z=Object.assign,I;function P(t){if(I===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+t}var J=!1;function ne(t,i){if(!t||J)return"";J=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(k){var a=k}Reflect.construct(t,[],i)}else{try{i.call()}catch(k){a=k}t.call(i.prototype)}else{try{throw Error()}catch(k){a=k}t()}}catch(k){if(k&&a&&typeof k.stack=="string"){for(var c=k.stack.split(`
`),h=a.stack.split(`
`),m=c.length-1,_=h.length-1;1<=m&&0<=_&&c[m]!==h[_];)_--;for(;1<=m&&0<=_;m--,_--)if(c[m]!==h[_]){if(m!==1||_!==1)do if(m--,_--,0>_||c[m]!==h[_]){var w=`
`+c[m].replace(" at new "," at ");return t.displayName&&w.includes("<anonymous>")&&(w=w.replace("<anonymous>",t.displayName)),w}while(1<=m&&0<=_);break}}}finally{J=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?P(t):""}function le(t){switch(t.tag){case 5:return P(t.type);case 16:return P("Lazy");case 13:return P("Suspense");case 19:return P("SuspenseList");case 0:case 2:case 15:return t=ne(t.type,!1),t;case 11:return t=ne(t.type.render,!1),t;case 1:return t=ne(t.type,!0),t;default:return""}}function ae(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case X:return"Fragment";case se:return"Portal";case ze:return"Profiler";case ie:return"StrictMode";case vt:return"Suspense";case bt:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Qt:return(t.displayName||"Context")+".Consumer";case it:return(t._context.displayName||"Context")+".Provider";case Rt:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Xt:return i=t.displayName||null,i!==null?i:ae(t.type)||"Memo";case ut:i=t._payload,t=t._init;try{return ae(t(i))}catch{}}return null}function _e(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ae(i);case 8:return i===ie?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function de(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Te(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function wt(t){var i=Te(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),a=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(m){a=""+m,h.call(this,m)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(m){a=""+m},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Hs(t){t._valueTracker||(t._valueTracker=wt(t))}function Jd(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),a="";return t&&(a=Te(t)?t.checked?"true":"false":t.value),t=a,t!==o?(i.setValue(t),!0):!1}function Gs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function oa(t,i){var o=i.checked;return z({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function Zd(t,i){var o=i.defaultValue==null?"":i.defaultValue,a=i.checked!=null?i.checked:i.defaultChecked;o=de(i.value!=null?i.value:o),t._wrapperState={initialChecked:a,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function eh(t,i){i=i.checked,i!=null&&ge(t,"checked",i,!1)}function la(t,i){eh(t,i);var o=de(i.value),a=i.type;if(o!=null)a==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(a==="submit"||a==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?aa(t,i.type,o):i.hasOwnProperty("defaultValue")&&aa(t,i.type,de(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function th(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var a=i.type;if(!(a!=="submit"&&a!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function aa(t,i,o){(i!=="number"||Gs(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Pi=Array.isArray;function Mr(t,i,o,a){if(t=t.options,i){i={};for(var c=0;c<o.length;c++)i["$"+o[c]]=!0;for(o=0;o<t.length;o++)c=i.hasOwnProperty("$"+t[o].value),t[o].selected!==c&&(t[o].selected=c),c&&a&&(t[o].defaultSelected=!0)}else{for(o=""+de(o),i=null,c=0;c<t.length;c++){if(t[c].value===o){t[c].selected=!0,a&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function ua(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return z({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function nh(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(Pi(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:de(o)}}function rh(t,i){var o=de(i.value),a=de(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),a!=null&&(t.defaultValue=""+a)}function ih(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function sh(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ca(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?sh(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var qs,oh=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,a,c){MSApp.execUnsafeLocalFunction(function(){return t(i,o,a,c)})}:t}(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(qs=qs||document.createElement("div"),qs.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=qs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Ai(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Oi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cv=["Webkit","ms","Moz","O"];Object.keys(Oi).forEach(function(t){cv.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Oi[i]=Oi[t]})});function lh(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Oi.hasOwnProperty(t)&&Oi[t]?(""+i).trim():i+"px"}function ah(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var a=o.indexOf("--")===0,c=lh(o,i[o],a);o==="float"&&(o="cssFloat"),a?t.setProperty(o,c):t[o]=c}}var dv=z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function da(t,i){if(i){if(dv[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function ha(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fa=null;function pa(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ma=null,br=null,Fr=null;function uh(t){if(t=Zi(t)){if(typeof ma!="function")throw Error(n(280));var i=t.stateNode;i&&(i=_o(i),ma(t.stateNode,t.type,i))}}function ch(t){br?Fr?Fr.push(t):Fr=[t]:br=t}function dh(){if(br){var t=br,i=Fr;if(Fr=br=null,uh(t),i)for(t=0;t<i.length;t++)uh(i[t])}}function hh(t,i){return t(i)}function fh(){}var ga=!1;function ph(t,i,o){if(ga)return t(i,o);ga=!0;try{return hh(t,i,o)}finally{ga=!1,(br!==null||Fr!==null)&&(fh(),dh())}}function xi(t,i){var o=t.stateNode;if(o===null)return null;var a=_o(o);if(a===null)return null;o=a[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var _a=!1;if(f)try{var Di={};Object.defineProperty(Di,"passive",{get:function(){_a=!0}}),window.addEventListener("test",Di,Di),window.removeEventListener("test",Di,Di)}catch{_a=!1}function hv(t,i,o,a,c,h,m,_,w){var k=Array.prototype.slice.call(arguments,3);try{i.apply(o,k)}catch(A){this.onError(A)}}var Li=!1,Ks=null,Ys=!1,ya=null,fv={onError:function(t){Li=!0,Ks=t}};function pv(t,i,o,a,c,h,m,_,w){Li=!1,Ks=null,hv.apply(fv,arguments)}function mv(t,i,o,a,c,h,m,_,w){if(pv.apply(this,arguments),Li){if(Li){var k=Ks;Li=!1,Ks=null}else throw Error(n(198));Ys||(Ys=!0,ya=k)}}function or(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,i.flags&4098&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function mh(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function gh(t){if(or(t)!==t)throw Error(n(188))}function gv(t){var i=t.alternate;if(!i){if(i=or(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,a=i;;){var c=o.return;if(c===null)break;var h=c.alternate;if(h===null){if(a=c.return,a!==null){o=a;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===o)return gh(c),t;if(h===a)return gh(c),i;h=h.sibling}throw Error(n(188))}if(o.return!==a.return)o=c,a=h;else{for(var m=!1,_=c.child;_;){if(_===o){m=!0,o=c,a=h;break}if(_===a){m=!0,a=c,o=h;break}_=_.sibling}if(!m){for(_=h.child;_;){if(_===o){m=!0,o=h,a=c;break}if(_===a){m=!0,a=h,o=c;break}_=_.sibling}if(!m)throw Error(n(189))}}if(o.alternate!==a)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function _h(t){return t=gv(t),t!==null?yh(t):null}function yh(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=yh(t);if(i!==null)return i;t=t.sibling}return null}var vh=e.unstable_scheduleCallback,wh=e.unstable_cancelCallback,_v=e.unstable_shouldYield,yv=e.unstable_requestPaint,Me=e.unstable_now,vv=e.unstable_getCurrentPriorityLevel,va=e.unstable_ImmediatePriority,Eh=e.unstable_UserBlockingPriority,Qs=e.unstable_NormalPriority,wv=e.unstable_LowPriority,Sh=e.unstable_IdlePriority,Xs=null,Jt=null;function Ev(t){if(Jt&&typeof Jt.onCommitFiberRoot=="function")try{Jt.onCommitFiberRoot(Xs,t,void 0,(t.current.flags&128)===128)}catch{}}var Ft=Math.clz32?Math.clz32:Cv,Sv=Math.log,Iv=Math.LN2;function Cv(t){return t>>>=0,t===0?32:31-(Sv(t)/Iv|0)|0}var Js=64,Zs=4194304;function Mi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function eo(t,i){var o=t.pendingLanes;if(o===0)return 0;var a=0,c=t.suspendedLanes,h=t.pingedLanes,m=o&268435455;if(m!==0){var _=m&~c;_!==0?a=Mi(_):(h&=m,h!==0&&(a=Mi(h)))}else m=o&~c,m!==0?a=Mi(m):h!==0&&(a=Mi(h));if(a===0)return 0;if(i!==0&&i!==a&&!(i&c)&&(c=a&-a,h=i&-i,c>=h||c===16&&(h&4194240)!==0))return i;if(a&4&&(a|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=a;0<i;)o=31-Ft(i),c=1<<o,a|=t[o],i&=~c;return a}function Tv(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kv(t,i){for(var o=t.suspendedLanes,a=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var m=31-Ft(h),_=1<<m,w=c[m];w===-1?(!(_&o)||_&a)&&(c[m]=Tv(_,i)):w<=i&&(t.expiredLanes|=_),h&=~_}}function wa(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ih(){var t=Js;return Js<<=1,!(Js&4194240)&&(Js=64),t}function Ea(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function bi(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Ft(i),t[i]=o}function Rv(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var a=t.eventTimes;for(t=t.expirationTimes;0<o;){var c=31-Ft(o),h=1<<c;i[c]=0,a[c]=-1,t[c]=-1,o&=~h}}function Sa(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var a=31-Ft(o),c=1<<a;c&i|t[a]&i&&(t[a]|=i),o&=~c}}var he=0;function Ch(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Th,Ia,kh,Rh,Nh,Ca=!1,to=[],Rn=null,Nn=null,Pn=null,Fi=new Map,Ui=new Map,An=[],Nv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ph(t,i){switch(t){case"focusin":case"focusout":Rn=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":Pn=null;break;case"pointerover":case"pointerout":Fi.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ui.delete(i.pointerId)}}function ji(t,i,o,a,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:a,nativeEvent:h,targetContainers:[c]},i!==null&&(i=Zi(i),i!==null&&Ia(i)),t):(t.eventSystemFlags|=a,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function Pv(t,i,o,a,c){switch(i){case"focusin":return Rn=ji(Rn,t,i,o,a,c),!0;case"dragenter":return Nn=ji(Nn,t,i,o,a,c),!0;case"mouseover":return Pn=ji(Pn,t,i,o,a,c),!0;case"pointerover":var h=c.pointerId;return Fi.set(h,ji(Fi.get(h)||null,t,i,o,a,c)),!0;case"gotpointercapture":return h=c.pointerId,Ui.set(h,ji(Ui.get(h)||null,t,i,o,a,c)),!0}return!1}function Ah(t){var i=lr(t.target);if(i!==null){var o=or(i);if(o!==null){if(i=o.tag,i===13){if(i=mh(o),i!==null){t.blockedOn=i,Nh(t.priority,function(){kh(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function no(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=ka(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var a=new o.constructor(o.type,o);fa=a,o.target.dispatchEvent(a),fa=null}else return i=Zi(o),i!==null&&Ia(i),t.blockedOn=o,!1;i.shift()}return!0}function Oh(t,i,o){no(t)&&o.delete(i)}function Av(){Ca=!1,Rn!==null&&no(Rn)&&(Rn=null),Nn!==null&&no(Nn)&&(Nn=null),Pn!==null&&no(Pn)&&(Pn=null),Fi.forEach(Oh),Ui.forEach(Oh)}function zi(t,i){t.blockedOn===i&&(t.blockedOn=null,Ca||(Ca=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Av)))}function Wi(t){function i(c){return zi(c,t)}if(0<to.length){zi(to[0],t);for(var o=1;o<to.length;o++){var a=to[o];a.blockedOn===t&&(a.blockedOn=null)}}for(Rn!==null&&zi(Rn,t),Nn!==null&&zi(Nn,t),Pn!==null&&zi(Pn,t),Fi.forEach(i),Ui.forEach(i),o=0;o<An.length;o++)a=An[o],a.blockedOn===t&&(a.blockedOn=null);for(;0<An.length&&(o=An[0],o.blockedOn===null);)Ah(o),o.blockedOn===null&&An.shift()}var Ur=Re.ReactCurrentBatchConfig,ro=!0;function Ov(t,i,o,a){var c=he,h=Ur.transition;Ur.transition=null;try{he=1,Ta(t,i,o,a)}finally{he=c,Ur.transition=h}}function xv(t,i,o,a){var c=he,h=Ur.transition;Ur.transition=null;try{he=4,Ta(t,i,o,a)}finally{he=c,Ur.transition=h}}function Ta(t,i,o,a){if(ro){var c=ka(t,i,o,a);if(c===null)Va(t,i,a,io,o),Ph(t,a);else if(Pv(c,t,i,o,a))a.stopPropagation();else if(Ph(t,a),i&4&&-1<Nv.indexOf(t)){for(;c!==null;){var h=Zi(c);if(h!==null&&Th(h),h=ka(t,i,o,a),h===null&&Va(t,i,a,io,o),h===c)break;c=h}c!==null&&a.stopPropagation()}else Va(t,i,a,null,o)}}var io=null;function ka(t,i,o,a){if(io=null,t=pa(a),t=lr(t),t!==null)if(i=or(t),i===null)t=null;else if(o=i.tag,o===13){if(t=mh(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return io=t,null}function xh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vv()){case va:return 1;case Eh:return 4;case Qs:case wv:return 16;case Sh:return 536870912;default:return 16}default:return 16}}var On=null,Ra=null,so=null;function Dh(){if(so)return so;var t,i=Ra,o=i.length,a,c="value"in On?On.value:On.textContent,h=c.length;for(t=0;t<o&&i[t]===c[t];t++);var m=o-t;for(a=1;a<=m&&i[o-a]===c[h-a];a++);return so=c.slice(t,1<a?1-a:void 0)}function oo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function lo(){return!0}function Lh(){return!1}function Et(t){function i(o,a,c,h,m){this._reactName=o,this._targetInst=c,this.type=a,this.nativeEvent=h,this.target=m,this.currentTarget=null;for(var _ in t)t.hasOwnProperty(_)&&(o=t[_],this[_]=o?o(h):h[_]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?lo:Lh,this.isPropagationStopped=Lh,this}return z(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=lo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=lo)},persist:function(){},isPersistent:lo}),i}var jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Na=Et(jr),Bi=z({},jr,{view:0,detail:0}),Dv=Et(Bi),Pa,Aa,Vi,ao=z({},Bi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xa,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vi&&(Vi&&t.type==="mousemove"?(Pa=t.screenX-Vi.screenX,Aa=t.screenY-Vi.screenY):Aa=Pa=0,Vi=t),Pa)},movementY:function(t){return"movementY"in t?t.movementY:Aa}}),Mh=Et(ao),Lv=z({},ao,{dataTransfer:0}),Mv=Et(Lv),bv=z({},Bi,{relatedTarget:0}),Oa=Et(bv),Fv=z({},jr,{animationName:0,elapsedTime:0,pseudoElement:0}),Uv=Et(Fv),jv=z({},jr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),zv=Et(jv),Wv=z({},jr,{data:0}),bh=Et(Wv),Bv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$v={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hv(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=$v[t])?!!i[t]:!1}function xa(){return Hv}var Gv=z({},Bi,{key:function(t){if(t.key){var i=Bv[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=oo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Vv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xa,charCode:function(t){return t.type==="keypress"?oo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?oo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),qv=Et(Gv),Kv=z({},ao,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fh=Et(Kv),Yv=z({},Bi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xa}),Qv=Et(Yv),Xv=z({},jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jv=Et(Xv),Zv=z({},ao,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ew=Et(Zv),tw=[9,13,27,32],Da=f&&"CompositionEvent"in window,$i=null;f&&"documentMode"in document&&($i=document.documentMode);var nw=f&&"TextEvent"in window&&!$i,Uh=f&&(!Da||$i&&8<$i&&11>=$i),jh=" ",zh=!1;function Wh(t,i){switch(t){case"keyup":return tw.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var zr=!1;function rw(t,i){switch(t){case"compositionend":return Bh(i);case"keypress":return i.which!==32?null:(zh=!0,jh);case"textInput":return t=i.data,t===jh&&zh?null:t;default:return null}}function iw(t,i){if(zr)return t==="compositionend"||!Da&&Wh(t,i)?(t=Dh(),so=Ra=On=null,zr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Uh&&i.locale!=="ko"?null:i.data;default:return null}}var sw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vh(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!sw[t.type]:i==="textarea"}function $h(t,i,o,a){ch(a),i=po(i,"onChange"),0<i.length&&(o=new Na("onChange","change",null,o,a),t.push({event:o,listeners:i}))}var Hi=null,Gi=null;function ow(t){uf(t,0)}function uo(t){var i=Hr(t);if(Jd(i))return t}function lw(t,i){if(t==="change")return i}var Hh=!1;if(f){var La;if(f){var Ma="oninput"in document;if(!Ma){var Gh=document.createElement("div");Gh.setAttribute("oninput","return;"),Ma=typeof Gh.oninput=="function"}La=Ma}else La=!1;Hh=La&&(!document.documentMode||9<document.documentMode)}function qh(){Hi&&(Hi.detachEvent("onpropertychange",Kh),Gi=Hi=null)}function Kh(t){if(t.propertyName==="value"&&uo(Gi)){var i=[];$h(i,Gi,t,pa(t)),ph(ow,i)}}function aw(t,i,o){t==="focusin"?(qh(),Hi=i,Gi=o,Hi.attachEvent("onpropertychange",Kh)):t==="focusout"&&qh()}function uw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return uo(Gi)}function cw(t,i){if(t==="click")return uo(i)}function dw(t,i){if(t==="input"||t==="change")return uo(i)}function hw(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Ut=typeof Object.is=="function"?Object.is:hw;function qi(t,i){if(Ut(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),a=Object.keys(i);if(o.length!==a.length)return!1;for(a=0;a<o.length;a++){var c=o[a];if(!p.call(i,c)||!Ut(t[c],i[c]))return!1}return!0}function Yh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Qh(t,i){var o=Yh(t);t=0;for(var a;o;){if(o.nodeType===3){if(a=t+o.textContent.length,t<=i&&a>=i)return{node:o,offset:i-t};t=a}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Yh(o)}}function Xh(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Xh(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Jh(){for(var t=window,i=Gs();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=Gs(t.document)}return i}function ba(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function fw(t){var i=Jh(),o=t.focusedElem,a=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&Xh(o.ownerDocument.documentElement,o)){if(a!==null&&ba(o)){if(i=a.start,t=a.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=o.textContent.length,h=Math.min(a.start,c);a=a.end===void 0?h:Math.min(a.end,c),!t.extend&&h>a&&(c=a,a=h,h=c),c=Qh(o,h);var m=Qh(o,a);c&&m&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==m.node||t.focusOffset!==m.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),h>a?(t.addRange(i),t.extend(m.node,m.offset)):(i.setEnd(m.node,m.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var pw=f&&"documentMode"in document&&11>=document.documentMode,Wr=null,Fa=null,Ki=null,Ua=!1;function Zh(t,i,o){var a=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Ua||Wr==null||Wr!==Gs(a)||(a=Wr,"selectionStart"in a&&ba(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ki&&qi(Ki,a)||(Ki=a,a=po(Fa,"onSelect"),0<a.length&&(i=new Na("onSelect","select",null,i,o),t.push({event:i,listeners:a}),i.target=Wr)))}function co(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var Br={animationend:co("Animation","AnimationEnd"),animationiteration:co("Animation","AnimationIteration"),animationstart:co("Animation","AnimationStart"),transitionend:co("Transition","TransitionEnd")},ja={},ef={};f&&(ef=document.createElement("div").style,"AnimationEvent"in window||(delete Br.animationend.animation,delete Br.animationiteration.animation,delete Br.animationstart.animation),"TransitionEvent"in window||delete Br.transitionend.transition);function ho(t){if(ja[t])return ja[t];if(!Br[t])return t;var i=Br[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in ef)return ja[t]=i[o];return t}var tf=ho("animationend"),nf=ho("animationiteration"),rf=ho("animationstart"),sf=ho("transitionend"),of=new Map,lf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xn(t,i){of.set(t,i),u(i,[t])}for(var za=0;za<lf.length;za++){var Wa=lf[za],mw=Wa.toLowerCase(),gw=Wa[0].toUpperCase()+Wa.slice(1);xn(mw,"on"+gw)}xn(tf,"onAnimationEnd"),xn(nf,"onAnimationIteration"),xn(rf,"onAnimationStart"),xn("dblclick","onDoubleClick"),xn("focusin","onFocus"),xn("focusout","onBlur"),xn(sf,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_w=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yi));function af(t,i,o){var a=t.type||"unknown-event";t.currentTarget=o,mv(a,i,void 0,t),t.currentTarget=null}function uf(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var a=t[o],c=a.event;a=a.listeners;e:{var h=void 0;if(i)for(var m=a.length-1;0<=m;m--){var _=a[m],w=_.instance,k=_.currentTarget;if(_=_.listener,w!==h&&c.isPropagationStopped())break e;af(c,_,k),h=w}else for(m=0;m<a.length;m++){if(_=a[m],w=_.instance,k=_.currentTarget,_=_.listener,w!==h&&c.isPropagationStopped())break e;af(c,_,k),h=w}}}if(Ys)throw t=ya,Ys=!1,ya=null,t}function Se(t,i){var o=i[Ya];o===void 0&&(o=i[Ya]=new Set);var a=t+"__bubble";o.has(a)||(cf(i,t,2,!1),o.add(a))}function Ba(t,i,o){var a=0;i&&(a|=4),cf(o,t,a,i)}var fo="_reactListening"+Math.random().toString(36).slice(2);function Qi(t){if(!t[fo]){t[fo]=!0,s.forEach(function(o){o!=="selectionchange"&&(_w.has(o)||Ba(o,!1,t),Ba(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[fo]||(i[fo]=!0,Ba("selectionchange",!1,i))}}function cf(t,i,o,a){switch(xh(i)){case 1:var c=Ov;break;case 4:c=xv;break;default:c=Ta}o=c.bind(null,i,o,t),c=void 0,!_a||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),a?c!==void 0?t.addEventListener(i,o,{capture:!0,passive:c}):t.addEventListener(i,o,!0):c!==void 0?t.addEventListener(i,o,{passive:c}):t.addEventListener(i,o,!1)}function Va(t,i,o,a,c){var h=a;if(!(i&1)&&!(i&2)&&a!==null)e:for(;;){if(a===null)return;var m=a.tag;if(m===3||m===4){var _=a.stateNode.containerInfo;if(_===c||_.nodeType===8&&_.parentNode===c)break;if(m===4)for(m=a.return;m!==null;){var w=m.tag;if((w===3||w===4)&&(w=m.stateNode.containerInfo,w===c||w.nodeType===8&&w.parentNode===c))return;m=m.return}for(;_!==null;){if(m=lr(_),m===null)return;if(w=m.tag,w===5||w===6){a=h=m;continue e}_=_.parentNode}}a=a.return}ph(function(){var k=h,A=pa(o),x=[];e:{var N=of.get(t);if(N!==void 0){var U=Na,W=t;switch(t){case"keypress":if(oo(o)===0)break e;case"keydown":case"keyup":U=qv;break;case"focusin":W="focus",U=Oa;break;case"focusout":W="blur",U=Oa;break;case"beforeblur":case"afterblur":U=Oa;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=Mh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=Mv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=Qv;break;case tf:case nf:case rf:U=Uv;break;case sf:U=Jv;break;case"scroll":U=Dv;break;case"wheel":U=ew;break;case"copy":case"cut":case"paste":U=zv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=Fh}var B=(i&4)!==0,be=!B&&t==="scroll",C=B?N!==null?N+"Capture":null:N;B=[];for(var S=k,T;S!==null;){T=S;var D=T.stateNode;if(T.tag===5&&D!==null&&(T=D,C!==null&&(D=xi(S,C),D!=null&&B.push(Xi(S,D,T)))),be)break;S=S.return}0<B.length&&(N=new U(N,W,null,o,A),x.push({event:N,listeners:B}))}}if(!(i&7)){e:{if(N=t==="mouseover"||t==="pointerover",U=t==="mouseout"||t==="pointerout",N&&o!==fa&&(W=o.relatedTarget||o.fromElement)&&(lr(W)||W[un]))break e;if((U||N)&&(N=A.window===A?A:(N=A.ownerDocument)?N.defaultView||N.parentWindow:window,U?(W=o.relatedTarget||o.toElement,U=k,W=W?lr(W):null,W!==null&&(be=or(W),W!==be||W.tag!==5&&W.tag!==6)&&(W=null)):(U=null,W=k),U!==W)){if(B=Mh,D="onMouseLeave",C="onMouseEnter",S="mouse",(t==="pointerout"||t==="pointerover")&&(B=Fh,D="onPointerLeave",C="onPointerEnter",S="pointer"),be=U==null?N:Hr(U),T=W==null?N:Hr(W),N=new B(D,S+"leave",U,o,A),N.target=be,N.relatedTarget=T,D=null,lr(A)===k&&(B=new B(C,S+"enter",W,o,A),B.target=T,B.relatedTarget=be,D=B),be=D,U&&W)t:{for(B=U,C=W,S=0,T=B;T;T=Vr(T))S++;for(T=0,D=C;D;D=Vr(D))T++;for(;0<S-T;)B=Vr(B),S--;for(;0<T-S;)C=Vr(C),T--;for(;S--;){if(B===C||C!==null&&B===C.alternate)break t;B=Vr(B),C=Vr(C)}B=null}else B=null;U!==null&&df(x,N,U,B,!1),W!==null&&be!==null&&df(x,be,W,B,!0)}}e:{if(N=k?Hr(k):window,U=N.nodeName&&N.nodeName.toLowerCase(),U==="select"||U==="input"&&N.type==="file")var V=lw;else if(Vh(N))if(Hh)V=dw;else{V=uw;var $=aw}else(U=N.nodeName)&&U.toLowerCase()==="input"&&(N.type==="checkbox"||N.type==="radio")&&(V=cw);if(V&&(V=V(t,k))){$h(x,V,o,A);break e}$&&$(t,N,k),t==="focusout"&&($=N._wrapperState)&&$.controlled&&N.type==="number"&&aa(N,"number",N.value)}switch($=k?Hr(k):window,t){case"focusin":(Vh($)||$.contentEditable==="true")&&(Wr=$,Fa=k,Ki=null);break;case"focusout":Ki=Fa=Wr=null;break;case"mousedown":Ua=!0;break;case"contextmenu":case"mouseup":case"dragend":Ua=!1,Zh(x,o,A);break;case"selectionchange":if(pw)break;case"keydown":case"keyup":Zh(x,o,A)}var H;if(Da)e:{switch(t){case"compositionstart":var Y="onCompositionStart";break e;case"compositionend":Y="onCompositionEnd";break e;case"compositionupdate":Y="onCompositionUpdate";break e}Y=void 0}else zr?Wh(t,o)&&(Y="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(Y="onCompositionStart");Y&&(Uh&&o.locale!=="ko"&&(zr||Y!=="onCompositionStart"?Y==="onCompositionEnd"&&zr&&(H=Dh()):(On=A,Ra="value"in On?On.value:On.textContent,zr=!0)),$=po(k,Y),0<$.length&&(Y=new bh(Y,t,null,o,A),x.push({event:Y,listeners:$}),H?Y.data=H:(H=Bh(o),H!==null&&(Y.data=H)))),(H=nw?rw(t,o):iw(t,o))&&(k=po(k,"onBeforeInput"),0<k.length&&(A=new bh("onBeforeInput","beforeinput",null,o,A),x.push({event:A,listeners:k}),A.data=H))}uf(x,i)})}function Xi(t,i,o){return{instance:t,listener:i,currentTarget:o}}function po(t,i){for(var o=i+"Capture",a=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=xi(t,o),h!=null&&a.unshift(Xi(t,h,c)),h=xi(t,i),h!=null&&a.push(Xi(t,h,c))),t=t.return}return a}function Vr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function df(t,i,o,a,c){for(var h=i._reactName,m=[];o!==null&&o!==a;){var _=o,w=_.alternate,k=_.stateNode;if(w!==null&&w===a)break;_.tag===5&&k!==null&&(_=k,c?(w=xi(o,h),w!=null&&m.unshift(Xi(o,w,_))):c||(w=xi(o,h),w!=null&&m.push(Xi(o,w,_)))),o=o.return}m.length!==0&&t.push({event:i,listeners:m})}var yw=/\r\n?/g,vw=/\u0000|\uFFFD/g;function hf(t){return(typeof t=="string"?t:""+t).replace(yw,`
`).replace(vw,"")}function mo(t,i,o){if(i=hf(i),hf(t)!==i&&o)throw Error(n(425))}function go(){}var $a=null,Ha=null;function Ga(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var qa=typeof setTimeout=="function"?setTimeout:void 0,ww=typeof clearTimeout=="function"?clearTimeout:void 0,ff=typeof Promise=="function"?Promise:void 0,Ew=typeof queueMicrotask=="function"?queueMicrotask:typeof ff<"u"?function(t){return ff.resolve(null).then(t).catch(Sw)}:qa;function Sw(t){setTimeout(function(){throw t})}function Ka(t,i){var o=i,a=0;do{var c=o.nextSibling;if(t.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(a===0){t.removeChild(c),Wi(i);return}a--}else o!=="$"&&o!=="$?"&&o!=="$!"||a++;o=c}while(o);Wi(i)}function Dn(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function pf(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var $r=Math.random().toString(36).slice(2),Zt="__reactFiber$"+$r,Ji="__reactProps$"+$r,un="__reactContainer$"+$r,Ya="__reactEvents$"+$r,Iw="__reactListeners$"+$r,Cw="__reactHandles$"+$r;function lr(t){var i=t[Zt];if(i)return i;for(var o=t.parentNode;o;){if(i=o[un]||o[Zt]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=pf(t);t!==null;){if(o=t[Zt])return o;t=pf(t)}return i}t=o,o=t.parentNode}return null}function Zi(t){return t=t[Zt]||t[un],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Hr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function _o(t){return t[Ji]||null}var Qa=[],Gr=-1;function Ln(t){return{current:t}}function Ie(t){0>Gr||(t.current=Qa[Gr],Qa[Gr]=null,Gr--)}function ye(t,i){Gr++,Qa[Gr]=t.current,t.current=i}var Mn={},et=Ln(Mn),ct=Ln(!1),ar=Mn;function qr(t,i){var o=t.type.contextTypes;if(!o)return Mn;var a=t.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===i)return a.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in o)c[h]=i[h];return a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function dt(t){return t=t.childContextTypes,t!=null}function yo(){Ie(ct),Ie(et)}function mf(t,i,o){if(et.current!==Mn)throw Error(n(168));ye(et,i),ye(ct,o)}function gf(t,i,o){var a=t.stateNode;if(i=i.childContextTypes,typeof a.getChildContext!="function")return o;a=a.getChildContext();for(var c in a)if(!(c in i))throw Error(n(108,_e(t)||"Unknown",c));return z({},o,a)}function vo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Mn,ar=et.current,ye(et,t),ye(ct,ct.current),!0}function _f(t,i,o){var a=t.stateNode;if(!a)throw Error(n(169));o?(t=gf(t,i,ar),a.__reactInternalMemoizedMergedChildContext=t,Ie(ct),Ie(et),ye(et,t)):Ie(ct),ye(ct,o)}var cn=null,wo=!1,Xa=!1;function yf(t){cn===null?cn=[t]:cn.push(t)}function Tw(t){wo=!0,yf(t)}function bn(){if(!Xa&&cn!==null){Xa=!0;var t=0,i=he;try{var o=cn;for(he=1;t<o.length;t++){var a=o[t];do a=a(!0);while(a!==null)}cn=null,wo=!1}catch(c){throw cn!==null&&(cn=cn.slice(t+1)),vh(va,bn),c}finally{he=i,Xa=!1}}return null}var Kr=[],Yr=0,Eo=null,So=0,Nt=[],Pt=0,ur=null,dn=1,hn="";function cr(t,i){Kr[Yr++]=So,Kr[Yr++]=Eo,Eo=t,So=i}function vf(t,i,o){Nt[Pt++]=dn,Nt[Pt++]=hn,Nt[Pt++]=ur,ur=t;var a=dn;t=hn;var c=32-Ft(a)-1;a&=~(1<<c),o+=1;var h=32-Ft(i)+c;if(30<h){var m=c-c%5;h=(a&(1<<m)-1).toString(32),a>>=m,c-=m,dn=1<<32-Ft(i)+c|o<<c|a,hn=h+t}else dn=1<<h|o<<c|a,hn=t}function Ja(t){t.return!==null&&(cr(t,1),vf(t,1,0))}function Za(t){for(;t===Eo;)Eo=Kr[--Yr],Kr[Yr]=null,So=Kr[--Yr],Kr[Yr]=null;for(;t===ur;)ur=Nt[--Pt],Nt[Pt]=null,hn=Nt[--Pt],Nt[Pt]=null,dn=Nt[--Pt],Nt[Pt]=null}var St=null,It=null,ke=!1,jt=null;function wf(t,i){var o=Dt(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Ef(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,St=t,It=Dn(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,St=t,It=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=ur!==null?{id:dn,overflow:hn}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Dt(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,St=t,It=null,!0):!1;default:return!1}}function eu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function tu(t){if(ke){var i=It;if(i){var o=i;if(!Ef(t,i)){if(eu(t))throw Error(n(418));i=Dn(o.nextSibling);var a=St;i&&Ef(t,i)?wf(a,o):(t.flags=t.flags&-4097|2,ke=!1,St=t)}}else{if(eu(t))throw Error(n(418));t.flags=t.flags&-4097|2,ke=!1,St=t}}}function Sf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;St=t}function Io(t){if(t!==St)return!1;if(!ke)return Sf(t),ke=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Ga(t.type,t.memoizedProps)),i&&(i=It)){if(eu(t))throw If(),Error(n(418));for(;i;)wf(t,i),i=Dn(i.nextSibling)}if(Sf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){It=Dn(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}It=null}}else It=St?Dn(t.stateNode.nextSibling):null;return!0}function If(){for(var t=It;t;)t=Dn(t.nextSibling)}function Qr(){It=St=null,ke=!1}function nu(t){jt===null?jt=[t]:jt.push(t)}var kw=Re.ReactCurrentBatchConfig;function es(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var a=o.stateNode}if(!a)throw Error(n(147,t));var c=a,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(m){var _=c.refs;m===null?delete _[h]:_[h]=m},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Co(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Cf(t){var i=t._init;return i(t._payload)}function Tf(t){function i(C,S){if(t){var T=C.deletions;T===null?(C.deletions=[S],C.flags|=16):T.push(S)}}function o(C,S){if(!t)return null;for(;S!==null;)i(C,S),S=S.sibling;return null}function a(C,S){for(C=new Map;S!==null;)S.key!==null?C.set(S.key,S):C.set(S.index,S),S=S.sibling;return C}function c(C,S){return C=$n(C,S),C.index=0,C.sibling=null,C}function h(C,S,T){return C.index=T,t?(T=C.alternate,T!==null?(T=T.index,T<S?(C.flags|=2,S):T):(C.flags|=2,S)):(C.flags|=1048576,S)}function m(C){return t&&C.alternate===null&&(C.flags|=2),C}function _(C,S,T,D){return S===null||S.tag!==6?(S=qu(T,C.mode,D),S.return=C,S):(S=c(S,T),S.return=C,S)}function w(C,S,T,D){var V=T.type;return V===X?A(C,S,T.props.children,D,T.key):S!==null&&(S.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===ut&&Cf(V)===S.type)?(D=c(S,T.props),D.ref=es(C,S,T),D.return=C,D):(D=Ko(T.type,T.key,T.props,null,C.mode,D),D.ref=es(C,S,T),D.return=C,D)}function k(C,S,T,D){return S===null||S.tag!==4||S.stateNode.containerInfo!==T.containerInfo||S.stateNode.implementation!==T.implementation?(S=Ku(T,C.mode,D),S.return=C,S):(S=c(S,T.children||[]),S.return=C,S)}function A(C,S,T,D,V){return S===null||S.tag!==7?(S=yr(T,C.mode,D,V),S.return=C,S):(S=c(S,T),S.return=C,S)}function x(C,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return S=qu(""+S,C.mode,T),S.return=C,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ze:return T=Ko(S.type,S.key,S.props,null,C.mode,T),T.ref=es(C,null,S),T.return=C,T;case se:return S=Ku(S,C.mode,T),S.return=C,S;case ut:var D=S._init;return x(C,D(S._payload),T)}if(Pi(S)||q(S))return S=yr(S,C.mode,T,null),S.return=C,S;Co(C,S)}return null}function N(C,S,T,D){var V=S!==null?S.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return V!==null?null:_(C,S,""+T,D);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Ze:return T.key===V?w(C,S,T,D):null;case se:return T.key===V?k(C,S,T,D):null;case ut:return V=T._init,N(C,S,V(T._payload),D)}if(Pi(T)||q(T))return V!==null?null:A(C,S,T,D,null);Co(C,T)}return null}function U(C,S,T,D,V){if(typeof D=="string"&&D!==""||typeof D=="number")return C=C.get(T)||null,_(S,C,""+D,V);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Ze:return C=C.get(D.key===null?T:D.key)||null,w(S,C,D,V);case se:return C=C.get(D.key===null?T:D.key)||null,k(S,C,D,V);case ut:var $=D._init;return U(C,S,T,$(D._payload),V)}if(Pi(D)||q(D))return C=C.get(T)||null,A(S,C,D,V,null);Co(S,D)}return null}function W(C,S,T,D){for(var V=null,$=null,H=S,Y=S=0,Ve=null;H!==null&&Y<T.length;Y++){H.index>Y?(Ve=H,H=null):Ve=H.sibling;var ue=N(C,H,T[Y],D);if(ue===null){H===null&&(H=Ve);break}t&&H&&ue.alternate===null&&i(C,H),S=h(ue,S,Y),$===null?V=ue:$.sibling=ue,$=ue,H=Ve}if(Y===T.length)return o(C,H),ke&&cr(C,Y),V;if(H===null){for(;Y<T.length;Y++)H=x(C,T[Y],D),H!==null&&(S=h(H,S,Y),$===null?V=H:$.sibling=H,$=H);return ke&&cr(C,Y),V}for(H=a(C,H);Y<T.length;Y++)Ve=U(H,C,Y,T[Y],D),Ve!==null&&(t&&Ve.alternate!==null&&H.delete(Ve.key===null?Y:Ve.key),S=h(Ve,S,Y),$===null?V=Ve:$.sibling=Ve,$=Ve);return t&&H.forEach(function(Hn){return i(C,Hn)}),ke&&cr(C,Y),V}function B(C,S,T,D){var V=q(T);if(typeof V!="function")throw Error(n(150));if(T=V.call(T),T==null)throw Error(n(151));for(var $=V=null,H=S,Y=S=0,Ve=null,ue=T.next();H!==null&&!ue.done;Y++,ue=T.next()){H.index>Y?(Ve=H,H=null):Ve=H.sibling;var Hn=N(C,H,ue.value,D);if(Hn===null){H===null&&(H=Ve);break}t&&H&&Hn.alternate===null&&i(C,H),S=h(Hn,S,Y),$===null?V=Hn:$.sibling=Hn,$=Hn,H=Ve}if(ue.done)return o(C,H),ke&&cr(C,Y),V;if(H===null){for(;!ue.done;Y++,ue=T.next())ue=x(C,ue.value,D),ue!==null&&(S=h(ue,S,Y),$===null?V=ue:$.sibling=ue,$=ue);return ke&&cr(C,Y),V}for(H=a(C,H);!ue.done;Y++,ue=T.next())ue=U(H,C,Y,ue.value,D),ue!==null&&(t&&ue.alternate!==null&&H.delete(ue.key===null?Y:ue.key),S=h(ue,S,Y),$===null?V=ue:$.sibling=ue,$=ue);return t&&H.forEach(function(s0){return i(C,s0)}),ke&&cr(C,Y),V}function be(C,S,T,D){if(typeof T=="object"&&T!==null&&T.type===X&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case Ze:e:{for(var V=T.key,$=S;$!==null;){if($.key===V){if(V=T.type,V===X){if($.tag===7){o(C,$.sibling),S=c($,T.props.children),S.return=C,C=S;break e}}else if($.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===ut&&Cf(V)===$.type){o(C,$.sibling),S=c($,T.props),S.ref=es(C,$,T),S.return=C,C=S;break e}o(C,$);break}else i(C,$);$=$.sibling}T.type===X?(S=yr(T.props.children,C.mode,D,T.key),S.return=C,C=S):(D=Ko(T.type,T.key,T.props,null,C.mode,D),D.ref=es(C,S,T),D.return=C,C=D)}return m(C);case se:e:{for($=T.key;S!==null;){if(S.key===$)if(S.tag===4&&S.stateNode.containerInfo===T.containerInfo&&S.stateNode.implementation===T.implementation){o(C,S.sibling),S=c(S,T.children||[]),S.return=C,C=S;break e}else{o(C,S);break}else i(C,S);S=S.sibling}S=Ku(T,C.mode,D),S.return=C,C=S}return m(C);case ut:return $=T._init,be(C,S,$(T._payload),D)}if(Pi(T))return W(C,S,T,D);if(q(T))return B(C,S,T,D);Co(C,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,S!==null&&S.tag===6?(o(C,S.sibling),S=c(S,T),S.return=C,C=S):(o(C,S),S=qu(T,C.mode,D),S.return=C,C=S),m(C)):o(C,S)}return be}var Xr=Tf(!0),kf=Tf(!1),To=Ln(null),ko=null,Jr=null,ru=null;function iu(){ru=Jr=ko=null}function su(t){var i=To.current;Ie(To),t._currentValue=i}function ou(t,i,o){for(;t!==null;){var a=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,a!==null&&(a.childLanes|=i)):a!==null&&(a.childLanes&i)!==i&&(a.childLanes|=i),t===o)break;t=t.return}}function Zr(t,i){ko=t,ru=Jr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&i&&(ht=!0),t.firstContext=null)}function At(t){var i=t._currentValue;if(ru!==t)if(t={context:t,memoizedValue:i,next:null},Jr===null){if(ko===null)throw Error(n(308));Jr=t,ko.dependencies={lanes:0,firstContext:t}}else Jr=Jr.next=t;return i}var dr=null;function lu(t){dr===null?dr=[t]:dr.push(t)}function Rf(t,i,o,a){var c=i.interleaved;return c===null?(o.next=o,lu(i)):(o.next=c.next,c.next=o),i.interleaved=o,fn(t,a)}function fn(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Fn=!1;function au(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Nf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function pn(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Un(t,i,o){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,oe&2){var c=a.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),a.pending=i,fn(t,o)}return c=a.interleaved,c===null?(i.next=i,lu(a)):(i.next=c.next,c.next=i),a.interleaved=i,fn(t,o)}function Ro(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var a=i.lanes;a&=t.pendingLanes,o|=a,i.lanes=o,Sa(t,o)}}function Pf(t,i){var o=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,o===a)){var c=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var m={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?c=h=m:h=h.next=m,o=o.next}while(o!==null);h===null?c=h=i:h=h.next=i}else c=h=i;o={baseState:a.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:a.shared,effects:a.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function No(t,i,o,a){var c=t.updateQueue;Fn=!1;var h=c.firstBaseUpdate,m=c.lastBaseUpdate,_=c.shared.pending;if(_!==null){c.shared.pending=null;var w=_,k=w.next;w.next=null,m===null?h=k:m.next=k,m=w;var A=t.alternate;A!==null&&(A=A.updateQueue,_=A.lastBaseUpdate,_!==m&&(_===null?A.firstBaseUpdate=k:_.next=k,A.lastBaseUpdate=w))}if(h!==null){var x=c.baseState;m=0,A=k=w=null,_=h;do{var N=_.lane,U=_.eventTime;if((a&N)===N){A!==null&&(A=A.next={eventTime:U,lane:0,tag:_.tag,payload:_.payload,callback:_.callback,next:null});e:{var W=t,B=_;switch(N=i,U=o,B.tag){case 1:if(W=B.payload,typeof W=="function"){x=W.call(U,x,N);break e}x=W;break e;case 3:W.flags=W.flags&-65537|128;case 0:if(W=B.payload,N=typeof W=="function"?W.call(U,x,N):W,N==null)break e;x=z({},x,N);break e;case 2:Fn=!0}}_.callback!==null&&_.lane!==0&&(t.flags|=64,N=c.effects,N===null?c.effects=[_]:N.push(_))}else U={eventTime:U,lane:N,tag:_.tag,payload:_.payload,callback:_.callback,next:null},A===null?(k=A=U,w=x):A=A.next=U,m|=N;if(_=_.next,_===null){if(_=c.shared.pending,_===null)break;N=_,_=N.next,N.next=null,c.lastBaseUpdate=N,c.shared.pending=null}}while(!0);if(A===null&&(w=x),c.baseState=w,c.firstBaseUpdate=k,c.lastBaseUpdate=A,i=c.shared.interleaved,i!==null){c=i;do m|=c.lane,c=c.next;while(c!==i)}else h===null&&(c.shared.lanes=0);pr|=m,t.lanes=m,t.memoizedState=x}}function Af(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var a=t[i],c=a.callback;if(c!==null){if(a.callback=null,a=o,typeof c!="function")throw Error(n(191,c));c.call(a)}}}var ts={},en=Ln(ts),ns=Ln(ts),rs=Ln(ts);function hr(t){if(t===ts)throw Error(n(174));return t}function uu(t,i){switch(ye(rs,i),ye(ns,t),ye(en,ts),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ca(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=ca(i,t)}Ie(en),ye(en,i)}function ei(){Ie(en),Ie(ns),Ie(rs)}function Of(t){hr(rs.current);var i=hr(en.current),o=ca(i,t.type);i!==o&&(ye(ns,t),ye(en,o))}function cu(t){ns.current===t&&(Ie(en),Ie(ns))}var Ne=Ln(0);function Po(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var du=[];function hu(){for(var t=0;t<du.length;t++)du[t]._workInProgressVersionPrimary=null;du.length=0}var Ao=Re.ReactCurrentDispatcher,fu=Re.ReactCurrentBatchConfig,fr=0,Pe=null,Ue=null,We=null,Oo=!1,is=!1,ss=0,Rw=0;function tt(){throw Error(n(321))}function pu(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Ut(t[o],i[o]))return!1;return!0}function mu(t,i,o,a,c,h){if(fr=h,Pe=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ao.current=t===null||t.memoizedState===null?Ow:xw,t=o(a,c),is){h=0;do{if(is=!1,ss=0,25<=h)throw Error(n(301));h+=1,We=Ue=null,i.updateQueue=null,Ao.current=Dw,t=o(a,c)}while(is)}if(Ao.current=Lo,i=Ue!==null&&Ue.next!==null,fr=0,We=Ue=Pe=null,Oo=!1,i)throw Error(n(300));return t}function gu(){var t=ss!==0;return ss=0,t}function tn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?Pe.memoizedState=We=t:We=We.next=t,We}function Ot(){if(Ue===null){var t=Pe.alternate;t=t!==null?t.memoizedState:null}else t=Ue.next;var i=We===null?Pe.memoizedState:We.next;if(i!==null)We=i,Ue=t;else{if(t===null)throw Error(n(310));Ue=t,t={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},We===null?Pe.memoizedState=We=t:We=We.next=t}return We}function os(t,i){return typeof i=="function"?i(t):i}function _u(t){var i=Ot(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=Ue,c=a.baseQueue,h=o.pending;if(h!==null){if(c!==null){var m=c.next;c.next=h.next,h.next=m}a.baseQueue=c=h,o.pending=null}if(c!==null){h=c.next,a=a.baseState;var _=m=null,w=null,k=h;do{var A=k.lane;if((fr&A)===A)w!==null&&(w=w.next={lane:0,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),a=k.hasEagerState?k.eagerState:t(a,k.action);else{var x={lane:A,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null};w===null?(_=w=x,m=a):w=w.next=x,Pe.lanes|=A,pr|=A}k=k.next}while(k!==null&&k!==h);w===null?m=a:w.next=_,Ut(a,i.memoizedState)||(ht=!0),i.memoizedState=a,i.baseState=m,i.baseQueue=w,o.lastRenderedState=a}if(t=o.interleaved,t!==null){c=t;do h=c.lane,Pe.lanes|=h,pr|=h,c=c.next;while(c!==t)}else c===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function yu(t){var i=Ot(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=o.dispatch,c=o.pending,h=i.memoizedState;if(c!==null){o.pending=null;var m=c=c.next;do h=t(h,m.action),m=m.next;while(m!==c);Ut(h,i.memoizedState)||(ht=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,a]}function xf(){}function Df(t,i){var o=Pe,a=Ot(),c=i(),h=!Ut(a.memoizedState,c);if(h&&(a.memoizedState=c,ht=!0),a=a.queue,vu(bf.bind(null,o,a,t),[t]),a.getSnapshot!==i||h||We!==null&&We.memoizedState.tag&1){if(o.flags|=2048,ls(9,Mf.bind(null,o,a,c,i),void 0,null),Be===null)throw Error(n(349));fr&30||Lf(o,i,c)}return c}function Lf(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Pe.updateQueue,i===null?(i={lastEffect:null,stores:null},Pe.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Mf(t,i,o,a){i.value=o,i.getSnapshot=a,Ff(i)&&Uf(t)}function bf(t,i,o){return o(function(){Ff(i)&&Uf(t)})}function Ff(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Ut(t,o)}catch{return!0}}function Uf(t){var i=fn(t,1);i!==null&&Vt(i,t,1,-1)}function jf(t){var i=tn();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:os,lastRenderedState:t},i.queue=t,t=t.dispatch=Aw.bind(null,Pe,t),[i.memoizedState,t]}function ls(t,i,o,a){return t={tag:t,create:i,destroy:o,deps:a,next:null},i=Pe.updateQueue,i===null?(i={lastEffect:null,stores:null},Pe.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(a=o.next,o.next=t,t.next=a,i.lastEffect=t)),t}function zf(){return Ot().memoizedState}function xo(t,i,o,a){var c=tn();Pe.flags|=t,c.memoizedState=ls(1|i,o,void 0,a===void 0?null:a)}function Do(t,i,o,a){var c=Ot();a=a===void 0?null:a;var h=void 0;if(Ue!==null){var m=Ue.memoizedState;if(h=m.destroy,a!==null&&pu(a,m.deps)){c.memoizedState=ls(i,o,h,a);return}}Pe.flags|=t,c.memoizedState=ls(1|i,o,h,a)}function Wf(t,i){return xo(8390656,8,t,i)}function vu(t,i){return Do(2048,8,t,i)}function Bf(t,i){return Do(4,2,t,i)}function Vf(t,i){return Do(4,4,t,i)}function $f(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Hf(t,i,o){return o=o!=null?o.concat([t]):null,Do(4,4,$f.bind(null,i,t),o)}function wu(){}function Gf(t,i){var o=Ot();i=i===void 0?null:i;var a=o.memoizedState;return a!==null&&i!==null&&pu(i,a[1])?a[0]:(o.memoizedState=[t,i],t)}function qf(t,i){var o=Ot();i=i===void 0?null:i;var a=o.memoizedState;return a!==null&&i!==null&&pu(i,a[1])?a[0]:(t=t(),o.memoizedState=[t,i],t)}function Kf(t,i,o){return fr&21?(Ut(o,i)||(o=Ih(),Pe.lanes|=o,pr|=o,t.baseState=!0),i):(t.baseState&&(t.baseState=!1,ht=!0),t.memoizedState=o)}function Nw(t,i){var o=he;he=o!==0&&4>o?o:4,t(!0);var a=fu.transition;fu.transition={};try{t(!1),i()}finally{he=o,fu.transition=a}}function Yf(){return Ot().memoizedState}function Pw(t,i,o){var a=Bn(t);if(o={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null},Qf(t))Xf(i,o);else if(o=Rf(t,i,o,a),o!==null){var c=ot();Vt(o,t,a,c),Jf(o,i,a)}}function Aw(t,i,o){var a=Bn(t),c={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null};if(Qf(t))Xf(i,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var m=i.lastRenderedState,_=h(m,o);if(c.hasEagerState=!0,c.eagerState=_,Ut(_,m)){var w=i.interleaved;w===null?(c.next=c,lu(i)):(c.next=w.next,w.next=c),i.interleaved=c;return}}catch{}finally{}o=Rf(t,i,c,a),o!==null&&(c=ot(),Vt(o,t,a,c),Jf(o,i,a))}}function Qf(t){var i=t.alternate;return t===Pe||i!==null&&i===Pe}function Xf(t,i){is=Oo=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function Jf(t,i,o){if(o&4194240){var a=i.lanes;a&=t.pendingLanes,o|=a,i.lanes=o,Sa(t,o)}}var Lo={readContext:At,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},Ow={readContext:At,useCallback:function(t,i){return tn().memoizedState=[t,i===void 0?null:i],t},useContext:At,useEffect:Wf,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,xo(4194308,4,$f.bind(null,i,t),o)},useLayoutEffect:function(t,i){return xo(4194308,4,t,i)},useInsertionEffect:function(t,i){return xo(4,2,t,i)},useMemo:function(t,i){var o=tn();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var a=tn();return i=o!==void 0?o(i):i,a.memoizedState=a.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},a.queue=t,t=t.dispatch=Pw.bind(null,Pe,t),[a.memoizedState,t]},useRef:function(t){var i=tn();return t={current:t},i.memoizedState=t},useState:jf,useDebugValue:wu,useDeferredValue:function(t){return tn().memoizedState=t},useTransition:function(){var t=jf(!1),i=t[0];return t=Nw.bind(null,t[1]),tn().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var a=Pe,c=tn();if(ke){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),Be===null)throw Error(n(349));fr&30||Lf(a,i,o)}c.memoizedState=o;var h={value:o,getSnapshot:i};return c.queue=h,Wf(bf.bind(null,a,h,t),[t]),a.flags|=2048,ls(9,Mf.bind(null,a,h,o,i),void 0,null),o},useId:function(){var t=tn(),i=Be.identifierPrefix;if(ke){var o=hn,a=dn;o=(a&~(1<<32-Ft(a)-1)).toString(32)+o,i=":"+i+"R"+o,o=ss++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=Rw++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},xw={readContext:At,useCallback:Gf,useContext:At,useEffect:vu,useImperativeHandle:Hf,useInsertionEffect:Bf,useLayoutEffect:Vf,useMemo:qf,useReducer:_u,useRef:zf,useState:function(){return _u(os)},useDebugValue:wu,useDeferredValue:function(t){var i=Ot();return Kf(i,Ue.memoizedState,t)},useTransition:function(){var t=_u(os)[0],i=Ot().memoizedState;return[t,i]},useMutableSource:xf,useSyncExternalStore:Df,useId:Yf,unstable_isNewReconciler:!1},Dw={readContext:At,useCallback:Gf,useContext:At,useEffect:vu,useImperativeHandle:Hf,useInsertionEffect:Bf,useLayoutEffect:Vf,useMemo:qf,useReducer:yu,useRef:zf,useState:function(){return yu(os)},useDebugValue:wu,useDeferredValue:function(t){var i=Ot();return Ue===null?i.memoizedState=t:Kf(i,Ue.memoizedState,t)},useTransition:function(){var t=yu(os)[0],i=Ot().memoizedState;return[t,i]},useMutableSource:xf,useSyncExternalStore:Df,useId:Yf,unstable_isNewReconciler:!1};function zt(t,i){if(t&&t.defaultProps){i=z({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Eu(t,i,o,a){i=t.memoizedState,o=o(a,i),o=o==null?i:z({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Mo={isMounted:function(t){return(t=t._reactInternals)?or(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var a=ot(),c=Bn(t),h=pn(a,c);h.payload=i,o!=null&&(h.callback=o),i=Un(t,h,c),i!==null&&(Vt(i,t,c,a),Ro(i,t,c))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var a=ot(),c=Bn(t),h=pn(a,c);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=Un(t,h,c),i!==null&&(Vt(i,t,c,a),Ro(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=ot(),a=Bn(t),c=pn(o,a);c.tag=2,i!=null&&(c.callback=i),i=Un(t,c,a),i!==null&&(Vt(i,t,a,o),Ro(i,t,a))}};function Zf(t,i,o,a,c,h,m){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,h,m):i.prototype&&i.prototype.isPureReactComponent?!qi(o,a)||!qi(c,h):!0}function ep(t,i,o){var a=!1,c=Mn,h=i.contextType;return typeof h=="object"&&h!==null?h=At(h):(c=dt(i)?ar:et.current,a=i.contextTypes,h=(a=a!=null)?qr(t,c):Mn),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Mo,t.stateNode=i,i._reactInternals=t,a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),i}function tp(t,i,o,a){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,a),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,a),i.state!==t&&Mo.enqueueReplaceState(i,i.state,null)}function Su(t,i,o,a){var c=t.stateNode;c.props=o,c.state=t.memoizedState,c.refs={},au(t);var h=i.contextType;typeof h=="object"&&h!==null?c.context=At(h):(h=dt(i)?ar:et.current,c.context=qr(t,h)),c.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Eu(t,i,h,o),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&Mo.enqueueReplaceState(c,c.state,null),No(t,o,c,a),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function ti(t,i){try{var o="",a=i;do o+=le(a),a=a.return;while(a);var c=o}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:c,digest:null}}function Iu(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Cu(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var Lw=typeof WeakMap=="function"?WeakMap:Map;function np(t,i,o){o=pn(-1,o),o.tag=3,o.payload={element:null};var a=i.value;return o.callback=function(){Bo||(Bo=!0,ju=a),Cu(t,i)},o}function rp(t,i,o){o=pn(-1,o),o.tag=3;var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var c=i.value;o.payload=function(){return a(c)},o.callback=function(){Cu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Cu(t,i),typeof a!="function"&&(zn===null?zn=new Set([this]):zn.add(this));var m=i.stack;this.componentDidCatch(i.value,{componentStack:m!==null?m:""})}),o}function ip(t,i,o){var a=t.pingCache;if(a===null){a=t.pingCache=new Lw;var c=new Set;a.set(i,c)}else c=a.get(i),c===void 0&&(c=new Set,a.set(i,c));c.has(o)||(c.add(o),t=Kw.bind(null,t,i,o),i.then(t,t))}function sp(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function op(t,i,o,a,c){return t.mode&1?(t.flags|=65536,t.lanes=c,t):(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=pn(-1,1),i.tag=2,Un(o,i,1))),o.lanes|=1),t)}var Mw=Re.ReactCurrentOwner,ht=!1;function st(t,i,o,a){i.child=t===null?kf(i,null,o,a):Xr(i,t.child,o,a)}function lp(t,i,o,a,c){o=o.render;var h=i.ref;return Zr(i,c),a=mu(t,i,o,a,h,c),o=gu(),t!==null&&!ht?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,mn(t,i,c)):(ke&&o&&Ja(i),i.flags|=1,st(t,i,a,c),i.child)}function ap(t,i,o,a,c){if(t===null){var h=o.type;return typeof h=="function"&&!Gu(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,up(t,i,h,a,c)):(t=Ko(o.type,null,a,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,!(t.lanes&c)){var m=h.memoizedProps;if(o=o.compare,o=o!==null?o:qi,o(m,a)&&t.ref===i.ref)return mn(t,i,c)}return i.flags|=1,t=$n(h,a),t.ref=i.ref,t.return=i,i.child=t}function up(t,i,o,a,c){if(t!==null){var h=t.memoizedProps;if(qi(h,a)&&t.ref===i.ref)if(ht=!1,i.pendingProps=a=h,(t.lanes&c)!==0)t.flags&131072&&(ht=!0);else return i.lanes=t.lanes,mn(t,i,c)}return Tu(t,i,o,a,c)}function cp(t,i,o){var a=i.pendingProps,c=a.children,h=t!==null?t.memoizedState:null;if(a.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(ri,Ct),Ct|=o;else{if(!(o&1073741824))return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,ye(ri,Ct),Ct|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=h!==null?h.baseLanes:o,ye(ri,Ct),Ct|=a}else h!==null?(a=h.baseLanes|o,i.memoizedState=null):a=o,ye(ri,Ct),Ct|=a;return st(t,i,c,o),i.child}function dp(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Tu(t,i,o,a,c){var h=dt(o)?ar:et.current;return h=qr(i,h),Zr(i,c),o=mu(t,i,o,a,h,c),a=gu(),t!==null&&!ht?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,mn(t,i,c)):(ke&&a&&Ja(i),i.flags|=1,st(t,i,o,c),i.child)}function hp(t,i,o,a,c){if(dt(o)){var h=!0;vo(i)}else h=!1;if(Zr(i,c),i.stateNode===null)Fo(t,i),ep(i,o,a),Su(i,o,a,c),a=!0;else if(t===null){var m=i.stateNode,_=i.memoizedProps;m.props=_;var w=m.context,k=o.contextType;typeof k=="object"&&k!==null?k=At(k):(k=dt(o)?ar:et.current,k=qr(i,k));var A=o.getDerivedStateFromProps,x=typeof A=="function"||typeof m.getSnapshotBeforeUpdate=="function";x||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(_!==a||w!==k)&&tp(i,m,a,k),Fn=!1;var N=i.memoizedState;m.state=N,No(i,a,m,c),w=i.memoizedState,_!==a||N!==w||ct.current||Fn?(typeof A=="function"&&(Eu(i,o,A,a),w=i.memoizedState),(_=Fn||Zf(i,o,_,a,N,w,k))?(x||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=a,i.memoizedState=w),m.props=a,m.state=w,m.context=k,a=_):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),a=!1)}else{m=i.stateNode,Nf(t,i),_=i.memoizedProps,k=i.type===i.elementType?_:zt(i.type,_),m.props=k,x=i.pendingProps,N=m.context,w=o.contextType,typeof w=="object"&&w!==null?w=At(w):(w=dt(o)?ar:et.current,w=qr(i,w));var U=o.getDerivedStateFromProps;(A=typeof U=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(_!==x||N!==w)&&tp(i,m,a,w),Fn=!1,N=i.memoizedState,m.state=N,No(i,a,m,c);var W=i.memoizedState;_!==x||N!==W||ct.current||Fn?(typeof U=="function"&&(Eu(i,o,U,a),W=i.memoizedState),(k=Fn||Zf(i,o,k,a,N,W,w)||!1)?(A||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(a,W,w),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(a,W,w)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||_===t.memoizedProps&&N===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&N===t.memoizedState||(i.flags|=1024),i.memoizedProps=a,i.memoizedState=W),m.props=a,m.state=W,m.context=w,a=k):(typeof m.componentDidUpdate!="function"||_===t.memoizedProps&&N===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&N===t.memoizedState||(i.flags|=1024),a=!1)}return ku(t,i,o,a,h,c)}function ku(t,i,o,a,c,h){dp(t,i);var m=(i.flags&128)!==0;if(!a&&!m)return c&&_f(i,o,!1),mn(t,i,h);a=i.stateNode,Mw.current=i;var _=m&&typeof o.getDerivedStateFromError!="function"?null:a.render();return i.flags|=1,t!==null&&m?(i.child=Xr(i,t.child,null,h),i.child=Xr(i,null,_,h)):st(t,i,_,h),i.memoizedState=a.state,c&&_f(i,o,!0),i.child}function fp(t){var i=t.stateNode;i.pendingContext?mf(t,i.pendingContext,i.pendingContext!==i.context):i.context&&mf(t,i.context,!1),uu(t,i.containerInfo)}function pp(t,i,o,a,c){return Qr(),nu(c),i.flags|=256,st(t,i,o,a),i.child}var Ru={dehydrated:null,treeContext:null,retryLane:0};function Nu(t){return{baseLanes:t,cachePool:null,transitions:null}}function mp(t,i,o){var a=i.pendingProps,c=Ne.current,h=!1,m=(i.flags&128)!==0,_;if((_=m)||(_=t!==null&&t.memoizedState===null?!1:(c&2)!==0),_?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),ye(Ne,c&1),t===null)return tu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(i.mode&1?t.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(m=a.children,t=a.fallback,h?(a=i.mode,h=i.child,m={mode:"hidden",children:m},!(a&1)&&h!==null?(h.childLanes=0,h.pendingProps=m):h=Yo(m,a,0,null),t=yr(t,a,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Nu(o),i.memoizedState=Ru,t):Pu(i,m));if(c=t.memoizedState,c!==null&&(_=c.dehydrated,_!==null))return bw(t,i,m,a,_,c,o);if(h){h=a.fallback,m=i.mode,c=t.child,_=c.sibling;var w={mode:"hidden",children:a.children};return!(m&1)&&i.child!==c?(a=i.child,a.childLanes=0,a.pendingProps=w,i.deletions=null):(a=$n(c,w),a.subtreeFlags=c.subtreeFlags&14680064),_!==null?h=$n(_,h):(h=yr(h,m,o,null),h.flags|=2),h.return=i,a.return=i,a.sibling=h,i.child=a,a=h,h=i.child,m=t.child.memoizedState,m=m===null?Nu(o):{baseLanes:m.baseLanes|o,cachePool:null,transitions:m.transitions},h.memoizedState=m,h.childLanes=t.childLanes&~o,i.memoizedState=Ru,a}return h=t.child,t=h.sibling,a=$n(h,{mode:"visible",children:a.children}),!(i.mode&1)&&(a.lanes=o),a.return=i,a.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=a,i.memoizedState=null,a}function Pu(t,i){return i=Yo({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function bo(t,i,o,a){return a!==null&&nu(a),Xr(i,t.child,null,o),t=Pu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function bw(t,i,o,a,c,h,m){if(o)return i.flags&256?(i.flags&=-257,a=Iu(Error(n(422))),bo(t,i,m,a)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=a.fallback,c=i.mode,a=Yo({mode:"visible",children:a.children},c,0,null),h=yr(h,c,m,null),h.flags|=2,a.return=i,h.return=i,a.sibling=h,i.child=a,i.mode&1&&Xr(i,t.child,null,m),i.child.memoizedState=Nu(m),i.memoizedState=Ru,h);if(!(i.mode&1))return bo(t,i,m,null);if(c.data==="$!"){if(a=c.nextSibling&&c.nextSibling.dataset,a)var _=a.dgst;return a=_,h=Error(n(419)),a=Iu(h,a,void 0),bo(t,i,m,a)}if(_=(m&t.childLanes)!==0,ht||_){if(a=Be,a!==null){switch(m&-m){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=c&(a.suspendedLanes|m)?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,fn(t,c),Vt(a,t,c,-1))}return Hu(),a=Iu(Error(n(421))),bo(t,i,m,a)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=Yw.bind(null,t),c._reactRetry=i,null):(t=h.treeContext,It=Dn(c.nextSibling),St=i,ke=!0,jt=null,t!==null&&(Nt[Pt++]=dn,Nt[Pt++]=hn,Nt[Pt++]=ur,dn=t.id,hn=t.overflow,ur=i),i=Pu(i,a.children),i.flags|=4096,i)}function gp(t,i,o){t.lanes|=i;var a=t.alternate;a!==null&&(a.lanes|=i),ou(t.return,i,o)}function Au(t,i,o,a,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:a,tail:o,tailMode:c}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=a,h.tail=o,h.tailMode=c)}function _p(t,i,o){var a=i.pendingProps,c=a.revealOrder,h=a.tail;if(st(t,i,a.children,o),a=Ne.current,a&2)a=a&1|2,i.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&gp(t,o,i);else if(t.tag===19)gp(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}if(ye(Ne,a),!(i.mode&1))i.memoizedState=null;else switch(c){case"forwards":for(o=i.child,c=null;o!==null;)t=o.alternate,t!==null&&Po(t)===null&&(c=o),o=o.sibling;o=c,o===null?(c=i.child,i.child=null):(c=o.sibling,o.sibling=null),Au(i,!1,c,o,h);break;case"backwards":for(o=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&Po(t)===null){i.child=c;break}t=c.sibling,c.sibling=o,o=c,c=t}Au(i,!0,o,null,h);break;case"together":Au(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Fo(t,i){!(i.mode&1)&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function mn(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),pr|=i.lanes,!(o&i.childLanes))return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=$n(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=$n(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function Fw(t,i,o){switch(i.tag){case 3:fp(i),Qr();break;case 5:Of(i);break;case 1:dt(i.type)&&vo(i);break;case 4:uu(i,i.stateNode.containerInfo);break;case 10:var a=i.type._context,c=i.memoizedProps.value;ye(To,a._currentValue),a._currentValue=c;break;case 13:if(a=i.memoizedState,a!==null)return a.dehydrated!==null?(ye(Ne,Ne.current&1),i.flags|=128,null):o&i.child.childLanes?mp(t,i,o):(ye(Ne,Ne.current&1),t=mn(t,i,o),t!==null?t.sibling:null);ye(Ne,Ne.current&1);break;case 19:if(a=(o&i.childLanes)!==0,t.flags&128){if(a)return _p(t,i,o);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),ye(Ne,Ne.current),a)break;return null;case 22:case 23:return i.lanes=0,cp(t,i,o)}return mn(t,i,o)}var yp,Ou,vp,wp;yp=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Ou=function(){},vp=function(t,i,o,a){var c=t.memoizedProps;if(c!==a){t=i.stateNode,hr(en.current);var h=null;switch(o){case"input":c=oa(t,c),a=oa(t,a),h=[];break;case"select":c=z({},c,{value:void 0}),a=z({},a,{value:void 0}),h=[];break;case"textarea":c=ua(t,c),a=ua(t,a),h=[];break;default:typeof c.onClick!="function"&&typeof a.onClick=="function"&&(t.onclick=go)}da(o,a);var m;o=null;for(k in c)if(!a.hasOwnProperty(k)&&c.hasOwnProperty(k)&&c[k]!=null)if(k==="style"){var _=c[k];for(m in _)_.hasOwnProperty(m)&&(o||(o={}),o[m]="")}else k!=="dangerouslySetInnerHTML"&&k!=="children"&&k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&k!=="autoFocus"&&(l.hasOwnProperty(k)?h||(h=[]):(h=h||[]).push(k,null));for(k in a){var w=a[k];if(_=c!=null?c[k]:void 0,a.hasOwnProperty(k)&&w!==_&&(w!=null||_!=null))if(k==="style")if(_){for(m in _)!_.hasOwnProperty(m)||w&&w.hasOwnProperty(m)||(o||(o={}),o[m]="");for(m in w)w.hasOwnProperty(m)&&_[m]!==w[m]&&(o||(o={}),o[m]=w[m])}else o||(h||(h=[]),h.push(k,o)),o=w;else k==="dangerouslySetInnerHTML"?(w=w?w.__html:void 0,_=_?_.__html:void 0,w!=null&&_!==w&&(h=h||[]).push(k,w)):k==="children"?typeof w!="string"&&typeof w!="number"||(h=h||[]).push(k,""+w):k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&(l.hasOwnProperty(k)?(w!=null&&k==="onScroll"&&Se("scroll",t),h||_===w||(h=[])):(h=h||[]).push(k,w))}o&&(h=h||[]).push("style",o);var k=h;(i.updateQueue=k)&&(i.flags|=4)}},wp=function(t,i,o,a){o!==a&&(i.flags|=4)};function as(t,i){if(!ke)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function nt(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,a=0;if(i)for(var c=t.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags&14680064,a|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags,a|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=a,t.childLanes=o,i}function Uw(t,i,o){var a=i.pendingProps;switch(Za(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(i),null;case 1:return dt(i.type)&&yo(),nt(i),null;case 3:return a=i.stateNode,ei(),Ie(ct),Ie(et),hu(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Io(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,jt!==null&&(Bu(jt),jt=null))),Ou(t,i),nt(i),null;case 5:cu(i);var c=hr(rs.current);if(o=i.type,t!==null&&i.stateNode!=null)vp(t,i,o,a,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!a){if(i.stateNode===null)throw Error(n(166));return nt(i),null}if(t=hr(en.current),Io(i)){a=i.stateNode,o=i.type;var h=i.memoizedProps;switch(a[Zt]=i,a[Ji]=h,t=(i.mode&1)!==0,o){case"dialog":Se("cancel",a),Se("close",a);break;case"iframe":case"object":case"embed":Se("load",a);break;case"video":case"audio":for(c=0;c<Yi.length;c++)Se(Yi[c],a);break;case"source":Se("error",a);break;case"img":case"image":case"link":Se("error",a),Se("load",a);break;case"details":Se("toggle",a);break;case"input":Zd(a,h),Se("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!h.multiple},Se("invalid",a);break;case"textarea":nh(a,h),Se("invalid",a)}da(o,h),c=null;for(var m in h)if(h.hasOwnProperty(m)){var _=h[m];m==="children"?typeof _=="string"?a.textContent!==_&&(h.suppressHydrationWarning!==!0&&mo(a.textContent,_,t),c=["children",_]):typeof _=="number"&&a.textContent!==""+_&&(h.suppressHydrationWarning!==!0&&mo(a.textContent,_,t),c=["children",""+_]):l.hasOwnProperty(m)&&_!=null&&m==="onScroll"&&Se("scroll",a)}switch(o){case"input":Hs(a),th(a,h,!0);break;case"textarea":Hs(a),ih(a);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(a.onclick=go)}a=c,i.updateQueue=a,a!==null&&(i.flags|=4)}else{m=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=sh(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=m.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof a.is=="string"?t=m.createElement(o,{is:a.is}):(t=m.createElement(o),o==="select"&&(m=t,a.multiple?m.multiple=!0:a.size&&(m.size=a.size))):t=m.createElementNS(t,o),t[Zt]=i,t[Ji]=a,yp(t,i,!1,!1),i.stateNode=t;e:{switch(m=ha(o,a),o){case"dialog":Se("cancel",t),Se("close",t),c=a;break;case"iframe":case"object":case"embed":Se("load",t),c=a;break;case"video":case"audio":for(c=0;c<Yi.length;c++)Se(Yi[c],t);c=a;break;case"source":Se("error",t),c=a;break;case"img":case"image":case"link":Se("error",t),Se("load",t),c=a;break;case"details":Se("toggle",t),c=a;break;case"input":Zd(t,a),c=oa(t,a),Se("invalid",t);break;case"option":c=a;break;case"select":t._wrapperState={wasMultiple:!!a.multiple},c=z({},a,{value:void 0}),Se("invalid",t);break;case"textarea":nh(t,a),c=ua(t,a),Se("invalid",t);break;default:c=a}da(o,c),_=c;for(h in _)if(_.hasOwnProperty(h)){var w=_[h];h==="style"?ah(t,w):h==="dangerouslySetInnerHTML"?(w=w?w.__html:void 0,w!=null&&oh(t,w)):h==="children"?typeof w=="string"?(o!=="textarea"||w!=="")&&Ai(t,w):typeof w=="number"&&Ai(t,""+w):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(l.hasOwnProperty(h)?w!=null&&h==="onScroll"&&Se("scroll",t):w!=null&&ge(t,h,w,m))}switch(o){case"input":Hs(t),th(t,a,!1);break;case"textarea":Hs(t),ih(t);break;case"option":a.value!=null&&t.setAttribute("value",""+de(a.value));break;case"select":t.multiple=!!a.multiple,h=a.value,h!=null?Mr(t,!!a.multiple,h,!1):a.defaultValue!=null&&Mr(t,!!a.multiple,a.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=go)}switch(o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return nt(i),null;case 6:if(t&&i.stateNode!=null)wp(t,i,t.memoizedProps,a);else{if(typeof a!="string"&&i.stateNode===null)throw Error(n(166));if(o=hr(rs.current),hr(en.current),Io(i)){if(a=i.stateNode,o=i.memoizedProps,a[Zt]=i,(h=a.nodeValue!==o)&&(t=St,t!==null))switch(t.tag){case 3:mo(a.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&mo(a.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else a=(o.nodeType===9?o:o.ownerDocument).createTextNode(a),a[Zt]=i,i.stateNode=a}return nt(i),null;case 13:if(Ie(Ne),a=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ke&&It!==null&&i.mode&1&&!(i.flags&128))If(),Qr(),i.flags|=98560,h=!1;else if(h=Io(i),a!==null&&a.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[Zt]=i}else Qr(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;nt(i),h=!1}else jt!==null&&(Bu(jt),jt=null),h=!0;if(!h)return i.flags&65536?i:null}return i.flags&128?(i.lanes=o,i):(a=a!==null,a!==(t!==null&&t.memoizedState!==null)&&a&&(i.child.flags|=8192,i.mode&1&&(t===null||Ne.current&1?je===0&&(je=3):Hu())),i.updateQueue!==null&&(i.flags|=4),nt(i),null);case 4:return ei(),Ou(t,i),t===null&&Qi(i.stateNode.containerInfo),nt(i),null;case 10:return su(i.type._context),nt(i),null;case 17:return dt(i.type)&&yo(),nt(i),null;case 19:if(Ie(Ne),h=i.memoizedState,h===null)return nt(i),null;if(a=(i.flags&128)!==0,m=h.rendering,m===null)if(a)as(h,!1);else{if(je!==0||t!==null&&t.flags&128)for(t=i.child;t!==null;){if(m=Po(t),m!==null){for(i.flags|=128,as(h,!1),a=m.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),i.subtreeFlags=0,a=o,o=i.child;o!==null;)h=o,t=a,h.flags&=14680066,m=h.alternate,m===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=m.childLanes,h.lanes=m.lanes,h.child=m.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=m.memoizedProps,h.memoizedState=m.memoizedState,h.updateQueue=m.updateQueue,h.type=m.type,t=m.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return ye(Ne,Ne.current&1|2),i.child}t=t.sibling}h.tail!==null&&Me()>ii&&(i.flags|=128,a=!0,as(h,!1),i.lanes=4194304)}else{if(!a)if(t=Po(m),t!==null){if(i.flags|=128,a=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),as(h,!0),h.tail===null&&h.tailMode==="hidden"&&!m.alternate&&!ke)return nt(i),null}else 2*Me()-h.renderingStartTime>ii&&o!==1073741824&&(i.flags|=128,a=!0,as(h,!1),i.lanes=4194304);h.isBackwards?(m.sibling=i.child,i.child=m):(o=h.last,o!==null?o.sibling=m:i.child=m,h.last=m)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Me(),i.sibling=null,o=Ne.current,ye(Ne,a?o&1|2:o&1),i):(nt(i),null);case 22:case 23:return $u(),a=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==a&&(i.flags|=8192),a&&i.mode&1?Ct&1073741824&&(nt(i),i.subtreeFlags&6&&(i.flags|=8192)):nt(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function jw(t,i){switch(Za(i),i.tag){case 1:return dt(i.type)&&yo(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ei(),Ie(ct),Ie(et),hu(),t=i.flags,t&65536&&!(t&128)?(i.flags=t&-65537|128,i):null;case 5:return cu(i),null;case 13:if(Ie(Ne),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Qr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ie(Ne),null;case 4:return ei(),null;case 10:return su(i.type._context),null;case 22:case 23:return $u(),null;case 24:return null;default:return null}}var Uo=!1,rt=!1,zw=typeof WeakSet=="function"?WeakSet:Set,j=null;function ni(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(a){xe(t,i,a)}else o.current=null}function xu(t,i,o){try{o()}catch(a){xe(t,i,a)}}var Ep=!1;function Ww(t,i){if($a=ro,t=Jh(),ba(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var a=o.getSelection&&o.getSelection();if(a&&a.rangeCount!==0){o=a.anchorNode;var c=a.anchorOffset,h=a.focusNode;a=a.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var m=0,_=-1,w=-1,k=0,A=0,x=t,N=null;t:for(;;){for(var U;x!==o||c!==0&&x.nodeType!==3||(_=m+c),x!==h||a!==0&&x.nodeType!==3||(w=m+a),x.nodeType===3&&(m+=x.nodeValue.length),(U=x.firstChild)!==null;)N=x,x=U;for(;;){if(x===t)break t;if(N===o&&++k===c&&(_=m),N===h&&++A===a&&(w=m),(U=x.nextSibling)!==null)break;x=N,N=x.parentNode}x=U}o=_===-1||w===-1?null:{start:_,end:w}}else o=null}o=o||{start:0,end:0}}else o=null;for(Ha={focusedElem:t,selectionRange:o},ro=!1,j=i;j!==null;)if(i=j,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,j=t;else for(;j!==null;){i=j;try{var W=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(W!==null){var B=W.memoizedProps,be=W.memoizedState,C=i.stateNode,S=C.getSnapshotBeforeUpdate(i.elementType===i.type?B:zt(i.type,B),be);C.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var T=i.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(D){xe(i,i.return,D)}if(t=i.sibling,t!==null){t.return=i.return,j=t;break}j=i.return}return W=Ep,Ep=!1,W}function us(t,i,o){var a=i.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var c=a=a.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&xu(i,o,h)}c=c.next}while(c!==a)}}function jo(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var a=o.create;o.destroy=a()}o=o.next}while(o!==i)}}function Du(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function Sp(t){var i=t.alternate;i!==null&&(t.alternate=null,Sp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Zt],delete i[Ji],delete i[Ya],delete i[Iw],delete i[Cw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ip(t){return t.tag===5||t.tag===3||t.tag===4}function Cp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ip(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Lu(t,i,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=go));else if(a!==4&&(t=t.child,t!==null))for(Lu(t,i,o),t=t.sibling;t!==null;)Lu(t,i,o),t=t.sibling}function Mu(t,i,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(a!==4&&(t=t.child,t!==null))for(Mu(t,i,o),t=t.sibling;t!==null;)Mu(t,i,o),t=t.sibling}var Ke=null,Wt=!1;function jn(t,i,o){for(o=o.child;o!==null;)Tp(t,i,o),o=o.sibling}function Tp(t,i,o){if(Jt&&typeof Jt.onCommitFiberUnmount=="function")try{Jt.onCommitFiberUnmount(Xs,o)}catch{}switch(o.tag){case 5:rt||ni(o,i);case 6:var a=Ke,c=Wt;Ke=null,jn(t,i,o),Ke=a,Wt=c,Ke!==null&&(Wt?(t=Ke,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):Ke.removeChild(o.stateNode));break;case 18:Ke!==null&&(Wt?(t=Ke,o=o.stateNode,t.nodeType===8?Ka(t.parentNode,o):t.nodeType===1&&Ka(t,o),Wi(t)):Ka(Ke,o.stateNode));break;case 4:a=Ke,c=Wt,Ke=o.stateNode.containerInfo,Wt=!0,jn(t,i,o),Ke=a,Wt=c;break;case 0:case 11:case 14:case 15:if(!rt&&(a=o.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){c=a=a.next;do{var h=c,m=h.destroy;h=h.tag,m!==void 0&&(h&2||h&4)&&xu(o,i,m),c=c.next}while(c!==a)}jn(t,i,o);break;case 1:if(!rt&&(ni(o,i),a=o.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=o.memoizedProps,a.state=o.memoizedState,a.componentWillUnmount()}catch(_){xe(o,i,_)}jn(t,i,o);break;case 21:jn(t,i,o);break;case 22:o.mode&1?(rt=(a=rt)||o.memoizedState!==null,jn(t,i,o),rt=a):jn(t,i,o);break;default:jn(t,i,o)}}function kp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new zw),i.forEach(function(a){var c=Qw.bind(null,t,a);o.has(a)||(o.add(a),a.then(c,c))})}}function Bt(t,i){var o=i.deletions;if(o!==null)for(var a=0;a<o.length;a++){var c=o[a];try{var h=t,m=i,_=m;e:for(;_!==null;){switch(_.tag){case 5:Ke=_.stateNode,Wt=!1;break e;case 3:Ke=_.stateNode.containerInfo,Wt=!0;break e;case 4:Ke=_.stateNode.containerInfo,Wt=!0;break e}_=_.return}if(Ke===null)throw Error(n(160));Tp(h,m,c),Ke=null,Wt=!1;var w=c.alternate;w!==null&&(w.return=null),c.return=null}catch(k){xe(c,i,k)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Rp(i,t),i=i.sibling}function Rp(t,i){var o=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Bt(i,t),nn(t),a&4){try{us(3,t,t.return),jo(3,t)}catch(B){xe(t,t.return,B)}try{us(5,t,t.return)}catch(B){xe(t,t.return,B)}}break;case 1:Bt(i,t),nn(t),a&512&&o!==null&&ni(o,o.return);break;case 5:if(Bt(i,t),nn(t),a&512&&o!==null&&ni(o,o.return),t.flags&32){var c=t.stateNode;try{Ai(c,"")}catch(B){xe(t,t.return,B)}}if(a&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,m=o!==null?o.memoizedProps:h,_=t.type,w=t.updateQueue;if(t.updateQueue=null,w!==null)try{_==="input"&&h.type==="radio"&&h.name!=null&&eh(c,h),ha(_,m);var k=ha(_,h);for(m=0;m<w.length;m+=2){var A=w[m],x=w[m+1];A==="style"?ah(c,x):A==="dangerouslySetInnerHTML"?oh(c,x):A==="children"?Ai(c,x):ge(c,A,x,k)}switch(_){case"input":la(c,h);break;case"textarea":rh(c,h);break;case"select":var N=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var U=h.value;U!=null?Mr(c,!!h.multiple,U,!1):N!==!!h.multiple&&(h.defaultValue!=null?Mr(c,!!h.multiple,h.defaultValue,!0):Mr(c,!!h.multiple,h.multiple?[]:"",!1))}c[Ji]=h}catch(B){xe(t,t.return,B)}}break;case 6:if(Bt(i,t),nn(t),a&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(B){xe(t,t.return,B)}}break;case 3:if(Bt(i,t),nn(t),a&4&&o!==null&&o.memoizedState.isDehydrated)try{Wi(i.containerInfo)}catch(B){xe(t,t.return,B)}break;case 4:Bt(i,t),nn(t);break;case 13:Bt(i,t),nn(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(Uu=Me())),a&4&&kp(t);break;case 22:if(A=o!==null&&o.memoizedState!==null,t.mode&1?(rt=(k=rt)||A,Bt(i,t),rt=k):Bt(i,t),nn(t),a&8192){if(k=t.memoizedState!==null,(t.stateNode.isHidden=k)&&!A&&t.mode&1)for(j=t,A=t.child;A!==null;){for(x=j=A;j!==null;){switch(N=j,U=N.child,N.tag){case 0:case 11:case 14:case 15:us(4,N,N.return);break;case 1:ni(N,N.return);var W=N.stateNode;if(typeof W.componentWillUnmount=="function"){a=N,o=N.return;try{i=a,W.props=i.memoizedProps,W.state=i.memoizedState,W.componentWillUnmount()}catch(B){xe(a,o,B)}}break;case 5:ni(N,N.return);break;case 22:if(N.memoizedState!==null){Ap(x);continue}}U!==null?(U.return=N,j=U):Ap(x)}A=A.sibling}e:for(A=null,x=t;;){if(x.tag===5){if(A===null){A=x;try{c=x.stateNode,k?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(_=x.stateNode,w=x.memoizedProps.style,m=w!=null&&w.hasOwnProperty("display")?w.display:null,_.style.display=lh("display",m))}catch(B){xe(t,t.return,B)}}}else if(x.tag===6){if(A===null)try{x.stateNode.nodeValue=k?"":x.memoizedProps}catch(B){xe(t,t.return,B)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===t)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===t)break e;for(;x.sibling===null;){if(x.return===null||x.return===t)break e;A===x&&(A=null),x=x.return}A===x&&(A=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:Bt(i,t),nn(t),a&4&&kp(t);break;case 21:break;default:Bt(i,t),nn(t)}}function nn(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(Ip(o)){var a=o;break e}o=o.return}throw Error(n(160))}switch(a.tag){case 5:var c=a.stateNode;a.flags&32&&(Ai(c,""),a.flags&=-33);var h=Cp(t);Mu(t,h,c);break;case 3:case 4:var m=a.stateNode.containerInfo,_=Cp(t);Lu(t,_,m);break;default:throw Error(n(161))}}catch(w){xe(t,t.return,w)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Bw(t,i,o){j=t,Np(t)}function Np(t,i,o){for(var a=(t.mode&1)!==0;j!==null;){var c=j,h=c.child;if(c.tag===22&&a){var m=c.memoizedState!==null||Uo;if(!m){var _=c.alternate,w=_!==null&&_.memoizedState!==null||rt;_=Uo;var k=rt;if(Uo=m,(rt=w)&&!k)for(j=c;j!==null;)m=j,w=m.child,m.tag===22&&m.memoizedState!==null?Op(c):w!==null?(w.return=m,j=w):Op(c);for(;h!==null;)j=h,Np(h),h=h.sibling;j=c,Uo=_,rt=k}Pp(t)}else c.subtreeFlags&8772&&h!==null?(h.return=c,j=h):Pp(t)}}function Pp(t){for(;j!==null;){var i=j;if(i.flags&8772){var o=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:rt||jo(5,i);break;case 1:var a=i.stateNode;if(i.flags&4&&!rt)if(o===null)a.componentDidMount();else{var c=i.elementType===i.type?o.memoizedProps:zt(i.type,o.memoizedProps);a.componentDidUpdate(c,o.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&Af(i,h,a);break;case 3:var m=i.updateQueue;if(m!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Af(i,m,o)}break;case 5:var _=i.stateNode;if(o===null&&i.flags&4){o=_;var w=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":w.autoFocus&&o.focus();break;case"img":w.src&&(o.src=w.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var k=i.alternate;if(k!==null){var A=k.memoizedState;if(A!==null){var x=A.dehydrated;x!==null&&Wi(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}rt||i.flags&512&&Du(i)}catch(N){xe(i,i.return,N)}}if(i===t){j=null;break}if(o=i.sibling,o!==null){o.return=i.return,j=o;break}j=i.return}}function Ap(t){for(;j!==null;){var i=j;if(i===t){j=null;break}var o=i.sibling;if(o!==null){o.return=i.return,j=o;break}j=i.return}}function Op(t){for(;j!==null;){var i=j;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{jo(4,i)}catch(w){xe(i,o,w)}break;case 1:var a=i.stateNode;if(typeof a.componentDidMount=="function"){var c=i.return;try{a.componentDidMount()}catch(w){xe(i,c,w)}}var h=i.return;try{Du(i)}catch(w){xe(i,h,w)}break;case 5:var m=i.return;try{Du(i)}catch(w){xe(i,m,w)}}}catch(w){xe(i,i.return,w)}if(i===t){j=null;break}var _=i.sibling;if(_!==null){_.return=i.return,j=_;break}j=i.return}}var Vw=Math.ceil,zo=Re.ReactCurrentDispatcher,bu=Re.ReactCurrentOwner,xt=Re.ReactCurrentBatchConfig,oe=0,Be=null,Fe=null,Ye=0,Ct=0,ri=Ln(0),je=0,cs=null,pr=0,Wo=0,Fu=0,ds=null,ft=null,Uu=0,ii=1/0,gn=null,Bo=!1,ju=null,zn=null,Vo=!1,Wn=null,$o=0,hs=0,zu=null,Ho=-1,Go=0;function ot(){return oe&6?Me():Ho!==-1?Ho:Ho=Me()}function Bn(t){return t.mode&1?oe&2&&Ye!==0?Ye&-Ye:kw.transition!==null?(Go===0&&(Go=Ih()),Go):(t=he,t!==0||(t=window.event,t=t===void 0?16:xh(t.type)),t):1}function Vt(t,i,o,a){if(50<hs)throw hs=0,zu=null,Error(n(185));bi(t,o,a),(!(oe&2)||t!==Be)&&(t===Be&&(!(oe&2)&&(Wo|=o),je===4&&Vn(t,Ye)),pt(t,a),o===1&&oe===0&&!(i.mode&1)&&(ii=Me()+500,wo&&bn()))}function pt(t,i){var o=t.callbackNode;kv(t,i);var a=eo(t,t===Be?Ye:0);if(a===0)o!==null&&wh(o),t.callbackNode=null,t.callbackPriority=0;else if(i=a&-a,t.callbackPriority!==i){if(o!=null&&wh(o),i===1)t.tag===0?Tw(Dp.bind(null,t)):yf(Dp.bind(null,t)),Ew(function(){!(oe&6)&&bn()}),o=null;else{switch(Ch(a)){case 1:o=va;break;case 4:o=Eh;break;case 16:o=Qs;break;case 536870912:o=Sh;break;default:o=Qs}o=Wp(o,xp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function xp(t,i){if(Ho=-1,Go=0,oe&6)throw Error(n(327));var o=t.callbackNode;if(si()&&t.callbackNode!==o)return null;var a=eo(t,t===Be?Ye:0);if(a===0)return null;if(a&30||a&t.expiredLanes||i)i=qo(t,a);else{i=a;var c=oe;oe|=2;var h=Mp();(Be!==t||Ye!==i)&&(gn=null,ii=Me()+500,gr(t,i));do try{Gw();break}catch(_){Lp(t,_)}while(!0);iu(),zo.current=h,oe=c,Fe!==null?i=0:(Be=null,Ye=0,i=je)}if(i!==0){if(i===2&&(c=wa(t),c!==0&&(a=c,i=Wu(t,c))),i===1)throw o=cs,gr(t,0),Vn(t,a),pt(t,Me()),o;if(i===6)Vn(t,a);else{if(c=t.current.alternate,!(a&30)&&!$w(c)&&(i=qo(t,a),i===2&&(h=wa(t),h!==0&&(a=h,i=Wu(t,h))),i===1))throw o=cs,gr(t,0),Vn(t,a),pt(t,Me()),o;switch(t.finishedWork=c,t.finishedLanes=a,i){case 0:case 1:throw Error(n(345));case 2:_r(t,ft,gn);break;case 3:if(Vn(t,a),(a&130023424)===a&&(i=Uu+500-Me(),10<i)){if(eo(t,0)!==0)break;if(c=t.suspendedLanes,(c&a)!==a){ot(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=qa(_r.bind(null,t,ft,gn),i);break}_r(t,ft,gn);break;case 4:if(Vn(t,a),(a&4194240)===a)break;for(i=t.eventTimes,c=-1;0<a;){var m=31-Ft(a);h=1<<m,m=i[m],m>c&&(c=m),a&=~h}if(a=c,a=Me()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Vw(a/1960))-a,10<a){t.timeoutHandle=qa(_r.bind(null,t,ft,gn),a);break}_r(t,ft,gn);break;case 5:_r(t,ft,gn);break;default:throw Error(n(329))}}}return pt(t,Me()),t.callbackNode===o?xp.bind(null,t):null}function Wu(t,i){var o=ds;return t.current.memoizedState.isDehydrated&&(gr(t,i).flags|=256),t=qo(t,i),t!==2&&(i=ft,ft=o,i!==null&&Bu(i)),t}function Bu(t){ft===null?ft=t:ft.push.apply(ft,t)}function $w(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var a=0;a<o.length;a++){var c=o[a],h=c.getSnapshot;c=c.value;try{if(!Ut(h(),c))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Vn(t,i){for(i&=~Fu,i&=~Wo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-Ft(i),a=1<<o;t[o]=-1,i&=~a}}function Dp(t){if(oe&6)throw Error(n(327));si();var i=eo(t,0);if(!(i&1))return pt(t,Me()),null;var o=qo(t,i);if(t.tag!==0&&o===2){var a=wa(t);a!==0&&(i=a,o=Wu(t,a))}if(o===1)throw o=cs,gr(t,0),Vn(t,i),pt(t,Me()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,_r(t,ft,gn),pt(t,Me()),null}function Vu(t,i){var o=oe;oe|=1;try{return t(i)}finally{oe=o,oe===0&&(ii=Me()+500,wo&&bn())}}function mr(t){Wn!==null&&Wn.tag===0&&!(oe&6)&&si();var i=oe;oe|=1;var o=xt.transition,a=he;try{if(xt.transition=null,he=1,t)return t()}finally{he=a,xt.transition=o,oe=i,!(oe&6)&&bn()}}function $u(){Ct=ri.current,Ie(ri)}function gr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,ww(o)),Fe!==null)for(o=Fe.return;o!==null;){var a=o;switch(Za(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&yo();break;case 3:ei(),Ie(ct),Ie(et),hu();break;case 5:cu(a);break;case 4:ei();break;case 13:Ie(Ne);break;case 19:Ie(Ne);break;case 10:su(a.type._context);break;case 22:case 23:$u()}o=o.return}if(Be=t,Fe=t=$n(t.current,null),Ye=Ct=i,je=0,cs=null,Fu=Wo=pr=0,ft=ds=null,dr!==null){for(i=0;i<dr.length;i++)if(o=dr[i],a=o.interleaved,a!==null){o.interleaved=null;var c=a.next,h=o.pending;if(h!==null){var m=h.next;h.next=c,a.next=m}o.pending=a}dr=null}return t}function Lp(t,i){do{var o=Fe;try{if(iu(),Ao.current=Lo,Oo){for(var a=Pe.memoizedState;a!==null;){var c=a.queue;c!==null&&(c.pending=null),a=a.next}Oo=!1}if(fr=0,We=Ue=Pe=null,is=!1,ss=0,bu.current=null,o===null||o.return===null){je=1,cs=i,Fe=null;break}e:{var h=t,m=o.return,_=o,w=i;if(i=Ye,_.flags|=32768,w!==null&&typeof w=="object"&&typeof w.then=="function"){var k=w,A=_,x=A.tag;if(!(A.mode&1)&&(x===0||x===11||x===15)){var N=A.alternate;N?(A.updateQueue=N.updateQueue,A.memoizedState=N.memoizedState,A.lanes=N.lanes):(A.updateQueue=null,A.memoizedState=null)}var U=sp(m);if(U!==null){U.flags&=-257,op(U,m,_,h,i),U.mode&1&&ip(h,k,i),i=U,w=k;var W=i.updateQueue;if(W===null){var B=new Set;B.add(w),i.updateQueue=B}else W.add(w);break e}else{if(!(i&1)){ip(h,k,i),Hu();break e}w=Error(n(426))}}else if(ke&&_.mode&1){var be=sp(m);if(be!==null){!(be.flags&65536)&&(be.flags|=256),op(be,m,_,h,i),nu(ti(w,_));break e}}h=w=ti(w,_),je!==4&&(je=2),ds===null?ds=[h]:ds.push(h),h=m;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var C=np(h,w,i);Pf(h,C);break e;case 1:_=w;var S=h.type,T=h.stateNode;if(!(h.flags&128)&&(typeof S.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(zn===null||!zn.has(T)))){h.flags|=65536,i&=-i,h.lanes|=i;var D=rp(h,_,i);Pf(h,D);break e}}h=h.return}while(h!==null)}Fp(o)}catch(V){i=V,Fe===o&&o!==null&&(Fe=o=o.return);continue}break}while(!0)}function Mp(){var t=zo.current;return zo.current=Lo,t===null?Lo:t}function Hu(){(je===0||je===3||je===2)&&(je=4),Be===null||!(pr&268435455)&&!(Wo&268435455)||Vn(Be,Ye)}function qo(t,i){var o=oe;oe|=2;var a=Mp();(Be!==t||Ye!==i)&&(gn=null,gr(t,i));do try{Hw();break}catch(c){Lp(t,c)}while(!0);if(iu(),oe=o,zo.current=a,Fe!==null)throw Error(n(261));return Be=null,Ye=0,je}function Hw(){for(;Fe!==null;)bp(Fe)}function Gw(){for(;Fe!==null&&!_v();)bp(Fe)}function bp(t){var i=zp(t.alternate,t,Ct);t.memoizedProps=t.pendingProps,i===null?Fp(t):Fe=i,bu.current=null}function Fp(t){var i=t;do{var o=i.alternate;if(t=i.return,i.flags&32768){if(o=jw(o,i),o!==null){o.flags&=32767,Fe=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{je=6,Fe=null;return}}else if(o=Uw(o,i,Ct),o!==null){Fe=o;return}if(i=i.sibling,i!==null){Fe=i;return}Fe=i=t}while(i!==null);je===0&&(je=5)}function _r(t,i,o){var a=he,c=xt.transition;try{xt.transition=null,he=1,qw(t,i,o,a)}finally{xt.transition=c,he=a}return null}function qw(t,i,o,a){do si();while(Wn!==null);if(oe&6)throw Error(n(327));o=t.finishedWork;var c=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(Rv(t,h),t===Be&&(Fe=Be=null,Ye=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||Vo||(Vo=!0,Wp(Qs,function(){return si(),null})),h=(o.flags&15990)!==0,o.subtreeFlags&15990||h){h=xt.transition,xt.transition=null;var m=he;he=1;var _=oe;oe|=4,bu.current=null,Ww(t,o),Rp(o,t),fw(Ha),ro=!!$a,Ha=$a=null,t.current=o,Bw(o),yv(),oe=_,he=m,xt.transition=h}else t.current=o;if(Vo&&(Vo=!1,Wn=t,$o=c),h=t.pendingLanes,h===0&&(zn=null),Ev(o.stateNode),pt(t,Me()),i!==null)for(a=t.onRecoverableError,o=0;o<i.length;o++)c=i[o],a(c.value,{componentStack:c.stack,digest:c.digest});if(Bo)throw Bo=!1,t=ju,ju=null,t;return $o&1&&t.tag!==0&&si(),h=t.pendingLanes,h&1?t===zu?hs++:(hs=0,zu=t):hs=0,bn(),null}function si(){if(Wn!==null){var t=Ch($o),i=xt.transition,o=he;try{if(xt.transition=null,he=16>t?16:t,Wn===null)var a=!1;else{if(t=Wn,Wn=null,$o=0,oe&6)throw Error(n(331));var c=oe;for(oe|=4,j=t.current;j!==null;){var h=j,m=h.child;if(j.flags&16){var _=h.deletions;if(_!==null){for(var w=0;w<_.length;w++){var k=_[w];for(j=k;j!==null;){var A=j;switch(A.tag){case 0:case 11:case 15:us(8,A,h)}var x=A.child;if(x!==null)x.return=A,j=x;else for(;j!==null;){A=j;var N=A.sibling,U=A.return;if(Sp(A),A===k){j=null;break}if(N!==null){N.return=U,j=N;break}j=U}}}var W=h.alternate;if(W!==null){var B=W.child;if(B!==null){W.child=null;do{var be=B.sibling;B.sibling=null,B=be}while(B!==null)}}j=h}}if(h.subtreeFlags&2064&&m!==null)m.return=h,j=m;else e:for(;j!==null;){if(h=j,h.flags&2048)switch(h.tag){case 0:case 11:case 15:us(9,h,h.return)}var C=h.sibling;if(C!==null){C.return=h.return,j=C;break e}j=h.return}}var S=t.current;for(j=S;j!==null;){m=j;var T=m.child;if(m.subtreeFlags&2064&&T!==null)T.return=m,j=T;else e:for(m=S;j!==null;){if(_=j,_.flags&2048)try{switch(_.tag){case 0:case 11:case 15:jo(9,_)}}catch(V){xe(_,_.return,V)}if(_===m){j=null;break e}var D=_.sibling;if(D!==null){D.return=_.return,j=D;break e}j=_.return}}if(oe=c,bn(),Jt&&typeof Jt.onPostCommitFiberRoot=="function")try{Jt.onPostCommitFiberRoot(Xs,t)}catch{}a=!0}return a}finally{he=o,xt.transition=i}}return!1}function Up(t,i,o){i=ti(o,i),i=np(t,i,1),t=Un(t,i,1),i=ot(),t!==null&&(bi(t,1,i),pt(t,i))}function xe(t,i,o){if(t.tag===3)Up(t,t,o);else for(;i!==null;){if(i.tag===3){Up(i,t,o);break}else if(i.tag===1){var a=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(zn===null||!zn.has(a))){t=ti(o,t),t=rp(i,t,1),i=Un(i,t,1),t=ot(),i!==null&&(bi(i,1,t),pt(i,t));break}}i=i.return}}function Kw(t,i,o){var a=t.pingCache;a!==null&&a.delete(i),i=ot(),t.pingedLanes|=t.suspendedLanes&o,Be===t&&(Ye&o)===o&&(je===4||je===3&&(Ye&130023424)===Ye&&500>Me()-Uu?gr(t,0):Fu|=o),pt(t,i)}function jp(t,i){i===0&&(t.mode&1?(i=Zs,Zs<<=1,!(Zs&130023424)&&(Zs=4194304)):i=1);var o=ot();t=fn(t,i),t!==null&&(bi(t,i,o),pt(t,o))}function Yw(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),jp(t,o)}function Qw(t,i){var o=0;switch(t.tag){case 13:var a=t.stateNode,c=t.memoizedState;c!==null&&(o=c.retryLane);break;case 19:a=t.stateNode;break;default:throw Error(n(314))}a!==null&&a.delete(i),jp(t,o)}var zp;zp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||ct.current)ht=!0;else{if(!(t.lanes&o)&&!(i.flags&128))return ht=!1,Fw(t,i,o);ht=!!(t.flags&131072)}else ht=!1,ke&&i.flags&1048576&&vf(i,So,i.index);switch(i.lanes=0,i.tag){case 2:var a=i.type;Fo(t,i),t=i.pendingProps;var c=qr(i,et.current);Zr(i,o),c=mu(null,i,a,t,c,o);var h=gu();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,dt(a)?(h=!0,vo(i)):h=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,au(i),c.updater=Mo,i.stateNode=c,c._reactInternals=i,Su(i,a,t,o),i=ku(null,i,a,!0,h,o)):(i.tag=0,ke&&h&&Ja(i),st(null,i,c,o),i=i.child),i;case 16:a=i.elementType;e:{switch(Fo(t,i),t=i.pendingProps,c=a._init,a=c(a._payload),i.type=a,c=i.tag=Jw(a),t=zt(a,t),c){case 0:i=Tu(null,i,a,t,o);break e;case 1:i=hp(null,i,a,t,o);break e;case 11:i=lp(null,i,a,t,o);break e;case 14:i=ap(null,i,a,zt(a.type,t),o);break e}throw Error(n(306,a,""))}return i;case 0:return a=i.type,c=i.pendingProps,c=i.elementType===a?c:zt(a,c),Tu(t,i,a,c,o);case 1:return a=i.type,c=i.pendingProps,c=i.elementType===a?c:zt(a,c),hp(t,i,a,c,o);case 3:e:{if(fp(i),t===null)throw Error(n(387));a=i.pendingProps,h=i.memoizedState,c=h.element,Nf(t,i),No(i,a,null,o);var m=i.memoizedState;if(a=m.element,h.isDehydrated)if(h={element:a,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){c=ti(Error(n(423)),i),i=pp(t,i,a,o,c);break e}else if(a!==c){c=ti(Error(n(424)),i),i=pp(t,i,a,o,c);break e}else for(It=Dn(i.stateNode.containerInfo.firstChild),St=i,ke=!0,jt=null,o=kf(i,null,a,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Qr(),a===c){i=mn(t,i,o);break e}st(t,i,a,o)}i=i.child}return i;case 5:return Of(i),t===null&&tu(i),a=i.type,c=i.pendingProps,h=t!==null?t.memoizedProps:null,m=c.children,Ga(a,c)?m=null:h!==null&&Ga(a,h)&&(i.flags|=32),dp(t,i),st(t,i,m,o),i.child;case 6:return t===null&&tu(i),null;case 13:return mp(t,i,o);case 4:return uu(i,i.stateNode.containerInfo),a=i.pendingProps,t===null?i.child=Xr(i,null,a,o):st(t,i,a,o),i.child;case 11:return a=i.type,c=i.pendingProps,c=i.elementType===a?c:zt(a,c),lp(t,i,a,c,o);case 7:return st(t,i,i.pendingProps,o),i.child;case 8:return st(t,i,i.pendingProps.children,o),i.child;case 12:return st(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(a=i.type._context,c=i.pendingProps,h=i.memoizedProps,m=c.value,ye(To,a._currentValue),a._currentValue=m,h!==null)if(Ut(h.value,m)){if(h.children===c.children&&!ct.current){i=mn(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var _=h.dependencies;if(_!==null){m=h.child;for(var w=_.firstContext;w!==null;){if(w.context===a){if(h.tag===1){w=pn(-1,o&-o),w.tag=2;var k=h.updateQueue;if(k!==null){k=k.shared;var A=k.pending;A===null?w.next=w:(w.next=A.next,A.next=w),k.pending=w}}h.lanes|=o,w=h.alternate,w!==null&&(w.lanes|=o),ou(h.return,o,i),_.lanes|=o;break}w=w.next}}else if(h.tag===10)m=h.type===i.type?null:h.child;else if(h.tag===18){if(m=h.return,m===null)throw Error(n(341));m.lanes|=o,_=m.alternate,_!==null&&(_.lanes|=o),ou(m,o,i),m=h.sibling}else m=h.child;if(m!==null)m.return=h;else for(m=h;m!==null;){if(m===i){m=null;break}if(h=m.sibling,h!==null){h.return=m.return,m=h;break}m=m.return}h=m}st(t,i,c.children,o),i=i.child}return i;case 9:return c=i.type,a=i.pendingProps.children,Zr(i,o),c=At(c),a=a(c),i.flags|=1,st(t,i,a,o),i.child;case 14:return a=i.type,c=zt(a,i.pendingProps),c=zt(a.type,c),ap(t,i,a,c,o);case 15:return up(t,i,i.type,i.pendingProps,o);case 17:return a=i.type,c=i.pendingProps,c=i.elementType===a?c:zt(a,c),Fo(t,i),i.tag=1,dt(a)?(t=!0,vo(i)):t=!1,Zr(i,o),ep(i,a,c),Su(i,a,c,o),ku(null,i,a,!0,t,o);case 19:return _p(t,i,o);case 22:return cp(t,i,o)}throw Error(n(156,i.tag))};function Wp(t,i){return vh(t,i)}function Xw(t,i,o,a){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(t,i,o,a){return new Xw(t,i,o,a)}function Gu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Jw(t){if(typeof t=="function")return Gu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Rt)return 11;if(t===Xt)return 14}return 2}function $n(t,i){var o=t.alternate;return o===null?(o=Dt(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Ko(t,i,o,a,c,h){var m=2;if(a=t,typeof t=="function")Gu(t)&&(m=1);else if(typeof t=="string")m=5;else e:switch(t){case X:return yr(o.children,c,h,i);case ie:m=8,c|=8;break;case ze:return t=Dt(12,o,i,c|2),t.elementType=ze,t.lanes=h,t;case vt:return t=Dt(13,o,i,c),t.elementType=vt,t.lanes=h,t;case bt:return t=Dt(19,o,i,c),t.elementType=bt,t.lanes=h,t;case Oe:return Yo(o,c,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case it:m=10;break e;case Qt:m=9;break e;case Rt:m=11;break e;case Xt:m=14;break e;case ut:m=16,a=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Dt(m,o,i,c),i.elementType=t,i.type=a,i.lanes=h,i}function yr(t,i,o,a){return t=Dt(7,t,a,i),t.lanes=o,t}function Yo(t,i,o,a){return t=Dt(22,t,a,i),t.elementType=Oe,t.lanes=o,t.stateNode={isHidden:!1},t}function qu(t,i,o){return t=Dt(6,t,null,i),t.lanes=o,t}function Ku(t,i,o){return i=Dt(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Zw(t,i,o,a,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ea(0),this.expirationTimes=Ea(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ea(0),this.identifierPrefix=a,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function Yu(t,i,o,a,c,h,m,_,w){return t=new Zw(t,i,o,_,w),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Dt(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:a,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},au(h),t}function e0(t,i,o){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:se,key:a==null?null:""+a,children:t,containerInfo:i,implementation:o}}function Bp(t){if(!t)return Mn;t=t._reactInternals;e:{if(or(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(dt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(dt(o))return gf(t,o,i)}return i}function Vp(t,i,o,a,c,h,m,_,w){return t=Yu(o,a,!0,t,c,h,m,_,w),t.context=Bp(null),o=t.current,a=ot(),c=Bn(o),h=pn(a,c),h.callback=i??null,Un(o,h,c),t.current.lanes=c,bi(t,c,a),pt(t,a),t}function Qo(t,i,o,a){var c=i.current,h=ot(),m=Bn(c);return o=Bp(o),i.context===null?i.context=o:i.pendingContext=o,i=pn(h,m),i.payload={element:t},a=a===void 0?null:a,a!==null&&(i.callback=a),t=Un(c,i,m),t!==null&&(Vt(t,c,m,h),Ro(t,c,m)),m}function Xo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function $p(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function Qu(t,i){$p(t,i),(t=t.alternate)&&$p(t,i)}function t0(){return null}var Hp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Xu(t){this._internalRoot=t}Jo.prototype.render=Xu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Qo(t,i,null,null)},Jo.prototype.unmount=Xu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;mr(function(){Qo(null,t,null,null)}),i[un]=null}};function Jo(t){this._internalRoot=t}Jo.prototype.unstable_scheduleHydration=function(t){if(t){var i=Rh();t={blockedOn:null,target:t,priority:i};for(var o=0;o<An.length&&i!==0&&i<An[o].priority;o++);An.splice(o,0,t),o===0&&Ah(t)}};function Ju(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Gp(){}function n0(t,i,o,a,c){if(c){if(typeof a=="function"){var h=a;a=function(){var k=Xo(m);h.call(k)}}var m=Vp(i,a,t,0,null,!1,!1,"",Gp);return t._reactRootContainer=m,t[un]=m.current,Qi(t.nodeType===8?t.parentNode:t),mr(),m}for(;c=t.lastChild;)t.removeChild(c);if(typeof a=="function"){var _=a;a=function(){var k=Xo(w);_.call(k)}}var w=Yu(t,0,!1,null,null,!1,!1,"",Gp);return t._reactRootContainer=w,t[un]=w.current,Qi(t.nodeType===8?t.parentNode:t),mr(function(){Qo(i,w,o,a)}),w}function el(t,i,o,a,c){var h=o._reactRootContainer;if(h){var m=h;if(typeof c=="function"){var _=c;c=function(){var w=Xo(m);_.call(w)}}Qo(i,m,t,c)}else m=n0(o,i,t,c,a);return Xo(m)}Th=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Mi(i.pendingLanes);o!==0&&(Sa(i,o|1),pt(i,Me()),!(oe&6)&&(ii=Me()+500,bn()))}break;case 13:mr(function(){var a=fn(t,1);if(a!==null){var c=ot();Vt(a,t,1,c)}}),Qu(t,1)}},Ia=function(t){if(t.tag===13){var i=fn(t,134217728);if(i!==null){var o=ot();Vt(i,t,134217728,o)}Qu(t,134217728)}},kh=function(t){if(t.tag===13){var i=Bn(t),o=fn(t,i);if(o!==null){var a=ot();Vt(o,t,i,a)}Qu(t,i)}},Rh=function(){return he},Nh=function(t,i){var o=he;try{return he=t,i()}finally{he=o}},ma=function(t,i,o){switch(i){case"input":if(la(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var a=o[i];if(a!==t&&a.form===t.form){var c=_o(a);if(!c)throw Error(n(90));Jd(a),la(a,c)}}}break;case"textarea":rh(t,o);break;case"select":i=o.value,i!=null&&Mr(t,!!o.multiple,i,!1)}},hh=Vu,fh=mr;var r0={usingClientEntryPoint:!1,Events:[Zi,Hr,_o,ch,dh,Vu]},fs={findFiberByHostInstance:lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},i0={bundleType:fs.bundleType,version:fs.version,rendererPackageName:fs.rendererPackageName,rendererConfig:fs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Re.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=_h(t),t===null?null:t.stateNode},findFiberByHostInstance:fs.findFiberByHostInstance||t0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tl.isDisabled&&tl.supportsFiber)try{Xs=tl.inject(i0),Jt=tl}catch{}}return mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=r0,mt.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ju(i))throw Error(n(200));return e0(t,i,null,o)},mt.createRoot=function(t,i){if(!Ju(t))throw Error(n(299));var o=!1,a="",c=Hp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(a=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=Yu(t,1,!1,null,null,o,!1,a,c),t[un]=i.current,Qi(t.nodeType===8?t.parentNode:t),new Xu(i)},mt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=_h(i),t=t===null?null:t.stateNode,t},mt.flushSync=function(t){return mr(t)},mt.hydrate=function(t,i,o){if(!Zo(i))throw Error(n(200));return el(null,t,i,!0,o)},mt.hydrateRoot=function(t,i,o){if(!Ju(t))throw Error(n(405));var a=o!=null&&o.hydratedSources||null,c=!1,h="",m=Hp;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(m=o.onRecoverableError)),i=Vp(i,null,t,1,o??null,c,!1,h,m),t[un]=i.current,Qi(t),a)for(t=0;t<a.length;t++)o=a[t],c=o._getVersion,c=c(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,c]:i.mutableSourceEagerHydrationData.push(o,c);return new Jo(i)},mt.render=function(t,i,o){if(!Zo(i))throw Error(n(200));return el(null,t,i,!1,o)},mt.unmountComponentAtNode=function(t){if(!Zo(t))throw Error(n(40));return t._reactRootContainer?(mr(function(){el(null,null,t,!1,function(){t._reactRootContainer=null,t[un]=null})}),!0):!1},mt.unstable_batchedUpdates=Vu,mt.unstable_renderSubtreeIntoContainer=function(t,i,o,a){if(!Zo(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return el(t,i,o,!1,a)},mt.version="18.3.1-next-f1338f8080-20240426",mt}var tm;function h0(){if(tm)return tc.exports;tm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),tc.exports=d0(),tc.exports}var nm;function f0(){if(nm)return nl;nm=1;var r=h0();return nl.createRoot=r.createRoot,nl.hydrateRoot=r.hydrateRoot,nl}var p0=f0();const Ce={GRASS:"grass",WATER:"water",ROCK:"rock",EMPTY:"empty",FOOD:"food",NULL:"null",GAME:"game",WOOD:"wood",SELL_APPLE:"sellApple",FREE_WAY:"freeway"},m0={[Ce.GRASS]:.4,[Ce.WATER]:.2,[Ce.EMPTY]:.1,[Ce.ROCK]:.14,[Ce.FOOD]:.15,[Ce.GAME]:.01},g0=["moveU","moveR","moveD","moveL","dragon"],_0="_tile_14go9_1",y0="_grass_14go9_14",v0="_water_14go9_22",w0="_rock_14go9_29",E0="_empty_14go9_36",S0="_food_14go9_43",I0="_game_14go9_50",C0="_wood_14go9_57",T0="_sellApple_14go9_64",k0="_freeway_14go9_71",rm={tile:_0,grass:y0,water:v0,rock:w0,empty:E0,food:S0,game:I0,wood:C0,sellApple:T0,freeway:k0};var ic={exports:{}},sc,im;function R0(){if(im)return sc;im=1;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return sc=r,sc}var oc,sm;function N0(){if(sm)return oc;sm=1;var r=R0();function e(){}function n(){}return n.resetWarningCache=e,oc=function(){function s(d,f,p,g,v,y){if(y!==r){var E=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw E.name="Invariant Violation",E}}s.isRequired=s;function l(){return s}var u={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:l,element:s,elementType:s,instanceOf:l,node:s,objectOf:l,oneOf:l,oneOfType:l,shape:l,exact:l,checkPropTypes:n,resetWarningCache:e};return u.PropTypes=u,u},oc}var om;function P0(){return om||(om=1,ic.exports=N0()()),ic.exports}var A0=P0();const Qe=Ng(A0);function Ml(r){const{isActive:e=!1,type:n="empty",site:s="home"}=r,l={[Ce.GRASS]:s==="home"?"":"☘️",[Ce.WATER]:"",[Ce.ROCK]:"⛰️",[Ce.EMPTY]:"",[Ce.FOOD]:"🍎",[Ce.GAME]:"🌳",[Ce.SELL_APPLE]:"💰",[Ce.FREE_WAY]:"🚦"};return G.jsx("div",{className:`${rm.tile} ${rm[n]}`,children:l[n]})}Ml.propTypes={isActive:Qe.bool,type:Qe.string,site:Qe.string};const O0="_board_pk1lm_1",x0="_row_pk1lm_8",D0="_boardContainer_pk1lm_13",ui={board:O0,row:x0,boardContainer:D0};var lm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L=function(r,e){if(!r)throw Si(e)},Si=function(r){return new Error("Firebase Database ("+Pg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+r)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):(l&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},L0=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const l=r[n++];if(l<128)e[s++]=String.fromCharCode(l);else if(l>191&&l<224){const u=r[n++];e[s++]=String.fromCharCode((l&31)<<6|u&63)}else if(l>239&&l<365){const u=r[n++],d=r[n++],f=r[n++],p=((l&7)<<18|(u&63)<<12|(d&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const u=r[n++],d=r[n++];e[s++]=String.fromCharCode((l&15)<<12|(u&63)<<6|d&63)}}return e.join("")},Xc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<r.length;l+=3){const u=r[l],d=l+1<r.length,f=d?r[l+1]:0,p=l+2<r.length,g=p?r[l+2]:0,v=u>>2,y=(u&3)<<4|f>>4;let E=(f&15)<<2|g>>6,R=g&63;p||(R=64,d||(E=64)),s.push(n[v],n[y],n[E],n[R])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Ag(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):L0(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<r.length;){const u=n[r.charAt(l++)],f=l<r.length?n[r.charAt(l)]:0;++l;const g=l<r.length?n[r.charAt(l)]:64;++l;const y=l<r.length?n[r.charAt(l)]:64;if(++l,u==null||f==null||g==null||y==null)throw new M0;const E=u<<2|f>>4;if(s.push(E),g!==64){const R=f<<4&240|g>>2;if(s.push(R),y!==64){const O=g<<6&192|y;s.push(O)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class M0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Og=function(r){const e=Ag(r);return Xc.encodeByteArray(e,!0)},dl=function(r){return Og(r).replace(/\./g,"")},hl=function(r){try{return Xc.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b0(r){return xg(void 0,r)}function xg(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!F0(n)||(r[n]=xg(r[n],e[n]));return r}function F0(r){return r!=="__proto__"}/**
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
 */function U0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const j0=()=>U0().__FIREBASE_DEFAULTS__,z0=()=>{if(typeof process>"u"||typeof lm>"u")return;const r=lm.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},W0=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&hl(r[1]);return e&&JSON.parse(e)},Jc=()=>{try{return j0()||z0()||W0()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Dg=r=>{var e,n;return(n=(e=Jc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[r]},B0=r=>{const e=Dg(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Lg=()=>{var r;return(r=Jc())===null||r===void 0?void 0:r.config},Mg=r=>{var e;return(e=Jc())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function V0(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",l=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},r);return[dl(JSON.stringify(n)),dl(JSON.stringify(d)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Zc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(at())}function $0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function bg(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Fg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function H0(){const r=at();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Ug(){return Pg.NODE_ADMIN===!0}function jg(){try{return typeof indexedDB=="object"}catch{return!1}}function zg(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},l.onupgradeneeded=()=>{n=!1},l.onerror=()=>{var u;e(((u=l.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){e(n)}})}function G0(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0="FirebaseError";class ln extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=q0,Object.setPrototypeOf(this,ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Or.prototype.create)}}class Or{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},l=`${this.service}/${e}`,u=this.errors[e],d=u?K0(u,s):"Error",f=`${this.serviceName}: ${d} (${l}).`;return new ln(l,f,s)}}function K0(r,e){return r.replace(Y0,(n,s)=>{const l=e[s];return l!=null?String(l):`<${s}?>`})}const Y0=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(r){return JSON.parse(r)}function qe(r){return JSON.stringify(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg=function(r){let e={},n={},s={},l="";try{const u=r.split(".");e=Rs(hl(u[0])||""),n=Rs(hl(u[1])||""),l=u[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:l}},Q0=function(r){const e=Wg(r),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},X0=function(r){const e=Wg(r).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function gi(r,e){if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}function Cc(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function fl(r,e,n){const s={};for(const l in r)Object.prototype.hasOwnProperty.call(r,l)&&(s[l]=e.call(n,r[l],l,r));return s}function Ns(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const l of n){if(!s.includes(l))return!1;const u=r[l],d=e[l];if(am(u)&&am(d)){if(!Ns(u,d))return!1}else if(u!==d)return!1}for(const l of s)if(!n.includes(l))return!1;return!0}function am(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class J0{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let y=0;y<16;y++)s[y]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let y=0;y<16;y++)s[y]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let y=16;y<80;y++){const E=s[y-3]^s[y-8]^s[y-14]^s[y-16];s[y]=(E<<1|E>>>31)&4294967295}let l=this.chain_[0],u=this.chain_[1],d=this.chain_[2],f=this.chain_[3],p=this.chain_[4],g,v;for(let y=0;y<80;y++){y<40?y<20?(g=f^u&(d^f),v=1518500249):(g=u^d^f,v=1859775393):y<60?(g=u&d|f&(u|d),v=2400959708):(g=u^d^f,v=3395469782);const E=(l<<5|l>>>27)+g+p+v+s[y]&4294967295;p=f,f=d,d=(u<<30|u>>>2)&4294967295,u=l,l=E}this.chain_[0]=this.chain_[0]+l&4294967295,this.chain_[1]=this.chain_[1]+u&4294967295,this.chain_[2]=this.chain_[2]+d&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let l=0;const u=this.buf_;let d=this.inbuf_;for(;l<n;){if(d===0)for(;l<=s;)this.compress_(e,l),l+=this.blockSize;if(typeof e=="string"){for(;l<n;)if(u[d]=e.charCodeAt(l),++d,++l,d===this.blockSize){this.compress_(u),d=0;break}}else for(;l<n;)if(u[d]=e[l],++d,++l,d===this.blockSize){this.compress_(u),d=0;break}}this.inbuf_=d,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let l=this.blockSize-1;l>=56;l--)this.buf_[l]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let l=0;l<5;l++)for(let u=24;u>=0;u-=8)e[s]=this.chain_[l]>>u&255,++s;return e}}function Z0(r,e){const n=new eE(r,e);return n.subscribe.bind(n)}class eE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let l;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");tE(e,["next","error","complete"])?l=e:l={next:e,error:n,complete:s},l.next===void 0&&(l.next=lc),l.error===void 0&&(l.error=lc),l.complete===void 0&&(l.complete=lc);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tE(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function lc(){}function bl(r,e){return`${r} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);if(l>=55296&&l<=56319){const u=l-55296;s++,L(s<r.length,"Surrogate pair missing trail surrogate.");const d=r.charCodeAt(s)-56320;l=65536+(u<<10)+d}l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):l<65536?(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},Fl=function(r){let e=0;for(let n=0;n<r.length;n++){const s=r.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE=1e3,iE=2,sE=4*60*60*1e3,oE=.5;function um(r,e=rE,n=iE){const s=e*Math.pow(n,r),l=Math.round(oE*s*(Math.random()-.5)*2);return Math.min(sE,s+l)}/**
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
 */class lE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Fs;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:n});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),l=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(l)return null;throw u}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(uE(e))try{this.getOrInitializeService({instanceIdentifier:wr})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:l});s.resolve(u)}catch{}}}}clearInstance(e=wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wr){return this.instances.has(e)}getOptions(e=wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,d]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(u);s===f&&d.resolve(l)}return l}onInit(e,n){var s;const l=this.normalizeInstanceIdentifier(n),u=(s=this.onInitCallbacks.get(l))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(l,u);const d=this.instances.get(l);return d&&e(d,l),()=>{u.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const l of s)try{l(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:aE(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=wr){return this.component?this.component.multipleInstances?e:wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function aE(r){return r===wr?void 0:r}function uE(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new lE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(pe||(pe={}));const dE={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},hE=pe.INFO,fE={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},pE=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),l=fE[e];if(l)console[l](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ul{constructor(e){this.name=e,this._logLevel=hE,this._logHandler=pE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const mE=(r,e)=>e.some(n=>r instanceof n);let cm,dm;function gE(){return cm||(cm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _E(){return dm||(dm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bg=new WeakMap,Tc=new WeakMap,Vg=new WeakMap,ac=new WeakMap,ed=new WeakMap;function yE(r){const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("success",u),r.removeEventListener("error",d)},u=()=>{n(Jn(r.result)),l()},d=()=>{s(r.error),l()};r.addEventListener("success",u),r.addEventListener("error",d)});return e.then(n=>{n instanceof IDBCursor&&Bg.set(n,r)}).catch(()=>{}),ed.set(e,r),e}function vE(r){if(Tc.has(r))return;const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",d),r.removeEventListener("abort",d)},u=()=>{n(),l()},d=()=>{s(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",u),r.addEventListener("error",d),r.addEventListener("abort",d)});Tc.set(r,e)}let kc={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return Tc.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Vg.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Jn(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function wE(r){kc=r(kc)}function EE(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(uc(this),e,...n);return Vg.set(s,e.sort?e.sort():[e]),Jn(s)}:_E().includes(r)?function(...e){return r.apply(uc(this),e),Jn(Bg.get(this))}:function(...e){return Jn(r.apply(uc(this),e))}}function SE(r){return typeof r=="function"?EE(r):(r instanceof IDBTransaction&&vE(r),mE(r,gE())?new Proxy(r,kc):r)}function Jn(r){if(r instanceof IDBRequest)return yE(r);if(ac.has(r))return ac.get(r);const e=SE(r);return e!==r&&(ac.set(r,e),ed.set(e,r)),e}const uc=r=>ed.get(r);function $g(r,e,{blocked:n,upgrade:s,blocking:l,terminated:u}={}){const d=indexedDB.open(r,e),f=Jn(d);return s&&d.addEventListener("upgradeneeded",p=>{s(Jn(d.result),p.oldVersion,p.newVersion,Jn(d.transaction),p)}),n&&d.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),f.then(p=>{u&&p.addEventListener("close",()=>u()),l&&p.addEventListener("versionchange",g=>l(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const IE=["get","getKey","getAll","getAllKeys","count"],CE=["put","add","delete","clear"],cc=new Map;function hm(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(cc.get(e))return cc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,l=CE.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(l||IE.includes(n)))return;const u=async function(d,...f){const p=this.transaction(d,l?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(f.shift())),(await Promise.all([g[n](...f),l&&p.done]))[0]};return cc.set(e,u),u}wE(r=>({...r,get:(e,n,s)=>hm(e,n)||r.get(e,n,s),has:(e,n)=>!!hm(e,n)||r.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(kE(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function kE(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Rc="@firebase/app",fm="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=new Ul("@firebase/app"),RE="@firebase/app-compat",NE="@firebase/analytics-compat",PE="@firebase/analytics",AE="@firebase/app-check-compat",OE="@firebase/app-check",xE="@firebase/auth",DE="@firebase/auth-compat",LE="@firebase/database",ME="@firebase/data-connect",bE="@firebase/database-compat",FE="@firebase/functions",UE="@firebase/functions-compat",jE="@firebase/installations",zE="@firebase/installations-compat",WE="@firebase/messaging",BE="@firebase/messaging-compat",VE="@firebase/performance",$E="@firebase/performance-compat",HE="@firebase/remote-config",GE="@firebase/remote-config-compat",qE="@firebase/storage",KE="@firebase/storage-compat",YE="@firebase/firestore",QE="@firebase/vertexai",XE="@firebase/firestore-compat",JE="firebase",ZE="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc="[DEFAULT]",eS={[Rc]:"fire-core",[RE]:"fire-core-compat",[PE]:"fire-analytics",[NE]:"fire-analytics-compat",[OE]:"fire-app-check",[AE]:"fire-app-check-compat",[xE]:"fire-auth",[DE]:"fire-auth-compat",[LE]:"fire-rtdb",[ME]:"fire-data-connect",[bE]:"fire-rtdb-compat",[FE]:"fire-fn",[UE]:"fire-fn-compat",[jE]:"fire-iid",[zE]:"fire-iid-compat",[WE]:"fire-fcm",[BE]:"fire-fcm-compat",[VE]:"fire-perf",[$E]:"fire-perf-compat",[HE]:"fire-rc",[GE]:"fire-rc-compat",[qE]:"fire-gcs",[KE]:"fire-gcs-compat",[YE]:"fire-fst",[XE]:"fire-fst-compat",[QE]:"fire-vertex","fire-js":"fire-js",[JE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl=new Map,tS=new Map,Pc=new Map;function pm(r,e){try{r.container.addComponent(e)}catch(n){In.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function on(r){const e=r.name;if(Pc.has(e))return In.debug(`There were multiple attempts to register component ${e}.`),!1;Pc.set(e,r);for(const n of pl.values())pm(n,r);for(const n of tS.values())pm(n,r);return!0}function xr(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function _n(r){return r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zn=new Or("app","Firebase",nS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Kt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci=ZE;function Hg(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Nc,automaticDataCollectionEnabled:!1},e),l=s.name;if(typeof l!="string"||!l)throw Zn.create("bad-app-name",{appName:String(l)});if(n||(n=Lg()),!n)throw Zn.create("no-options");const u=pl.get(l);if(u){if(Ns(n,u.options)&&Ns(s,u.config))return u;throw Zn.create("duplicate-app",{appName:l})}const d=new cE(l);for(const p of Pc.values())d.addComponent(p);const f=new rS(n,s,d);return pl.set(l,f),f}function td(r=Nc){const e=pl.get(r);if(!e&&r===Nc&&Lg())return Hg();if(!e)throw Zn.create("no-app",{appName:r});return e}function Mt(r,e,n){var s;let l=(s=eS[r])!==null&&s!==void 0?s:r;n&&(l+=`-${n}`);const u=l.match(/\s|\//),d=e.match(/\s|\//);if(u||d){const f=[`Unable to register library "${l}" with version "${e}":`];u&&f.push(`library name "${l}" contains illegal characters (whitespace or "/")`),u&&d&&f.push("and"),d&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),In.warn(f.join(" "));return}on(new Kt(`${l}-version`,()=>({library:l,version:e}),"VERSION"))}/**
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
 */const iS="firebase-heartbeat-database",sS=1,Ps="firebase-heartbeat-store";let dc=null;function Gg(){return dc||(dc=$g(iS,sS,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Ps)}catch(n){console.warn(n)}}}}).catch(r=>{throw Zn.create("idb-open",{originalErrorMessage:r.message})})),dc}async function oS(r){try{const n=(await Gg()).transaction(Ps),s=await n.objectStore(Ps).get(qg(r));return await n.done,s}catch(e){if(e instanceof ln)In.warn(e.message);else{const n=Zn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});In.warn(n.message)}}}async function mm(r,e){try{const s=(await Gg()).transaction(Ps,"readwrite");await s.objectStore(Ps).put(e,qg(r)),await s.done}catch(n){if(n instanceof ln)In.warn(n.message);else{const s=Zn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});In.warn(s.message)}}}function qg(r){return`${r.name}!${r.options.appId}`}/**
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
 */const lS=1024,aS=30*24*60*60*1e3;class uS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new dS(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=gm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(d=>d.date===u)?void 0:(this._heartbeatsCache.heartbeats.push({date:u,agent:l}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(d=>{const f=new Date(d.date).valueOf();return Date.now()-f<=aS}),this._storage.overwrite(this._heartbeatsCache))}catch(s){In.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=gm(),{heartbeatsToSend:s,unsentEntries:l}=cS(this._heartbeatsCache.heartbeats),u=dl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return In.warn(n),""}}}function gm(){return new Date().toISOString().substring(0,10)}function cS(r,e=lS){const n=[];let s=r.slice();for(const l of r){const u=n.find(d=>d.agent===l.agent);if(u){if(u.dates.push(l.date),_m(n)>e){u.dates.pop();break}}else if(n.push({agent:l.agent,dates:[l.date]}),_m(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class dS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jg()?zg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await oS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return mm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return mm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...e.heartbeats]})}else return}}function _m(r){return dl(JSON.stringify({version:2,heartbeats:r})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hS(r){on(new Kt("platform-logger",e=>new TE(e),"PRIVATE")),on(new Kt("heartbeat",e=>new uS(e),"PRIVATE")),Mt(Rc,fm,r),Mt(Rc,fm,"esm2017"),Mt("fire-js","")}hS("");var ym={};const vm="@firebase/database",wm="1.0.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kg="";function fS(r){Kg=r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),qe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Rs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return an(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg=function(r){try{if(typeof window<"u"&&typeof window[r]<"u"){const e=window[r];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new pS(e)}}catch{}return new mS},Sr=Yg("localStorage"),gS=Yg("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=new Ul("@firebase/database"),_S=function(){let r=1;return function(){return r++}}(),Qg=function(r){const e=nE(r),n=new J0;n.update(e);const s=n.digest();return Xc.encodeByteArray(s)},Us=function(...r){let e="";for(let n=0;n<r.length;n++){const s=r[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Us.apply(null,s):typeof s=="object"?e+=qe(s):e+=s,e+=" "}return e};let vs=null,Em=!0;const yS=function(r,e){L(!e,"Can't turn on custom loggers persistently."),ci.logLevel=pe.VERBOSE,vs=ci.log.bind(ci)},Xe=function(...r){if(Em===!0&&(Em=!1,vs===null&&gS.get("logging_enabled")===!0&&yS()),vs){const e=Us.apply(null,r);vs(e)}},js=function(r){return function(...e){Xe(r,...e)}},Ac=function(...r){const e="FIREBASE INTERNAL ERROR: "+Us(...r);ci.error(e)},Cn=function(...r){const e=`FIREBASE FATAL ERROR: ${Us(...r)}`;throw ci.error(e),new Error(e)},lt=function(...r){const e="FIREBASE WARNING: "+Us(...r);ci.warn(e)},vS=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&lt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},nd=function(r){return typeof r=="number"&&(r!==r||r===Number.POSITIVE_INFINITY||r===Number.NEGATIVE_INFINITY)},wS=function(r){if(document.readyState==="complete")r();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,r())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},_i="[MIN_NAME]",Cr="[MAX_NAME]",Dr=function(r,e){if(r===e)return 0;if(r===_i||e===Cr)return-1;if(e===_i||r===Cr)return 1;{const n=Sm(r),s=Sm(e);return n!==null?s!==null?n-s===0?r.length-e.length:n-s:-1:s!==null?1:r<e?-1:1}},ES=function(r,e){return r===e?0:r<e?-1:1},ms=function(r,e){if(e&&r in e)return e[r];throw new Error("Missing required key ("+r+") in object: "+qe(e))},rd=function(r){if(typeof r!="object"||r===null)return qe(r);const e=[];for(const s in r)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=qe(e[s]),n+=":",n+=rd(r[e[s]]);return n+="}",n},Xg=function(r,e){const n=r.length;if(n<=e)return[r];const s=[];for(let l=0;l<n;l+=e)l+e>n?s.push(r.substring(l,n)):s.push(r.substring(l,l+e));return s};function Je(r,e){for(const n in r)r.hasOwnProperty(n)&&e(n,r[n])}const Jg=function(r){L(!nd(r),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let l,u,d,f,p;r===0?(u=0,d=0,l=1/r===-1/0?1:0):(l=r<0,r=Math.abs(r),r>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(r)/Math.LN2),s),u=f+s,d=Math.round(r*Math.pow(2,n-f)-Math.pow(2,n))):(u=0,d=Math.round(r/Math.pow(2,1-s-n))));const g=[];for(p=n;p;p-=1)g.push(d%2?1:0),d=Math.floor(d/2);for(p=e;p;p-=1)g.push(u%2?1:0),u=Math.floor(u/2);g.push(l?1:0),g.reverse();const v=g.join("");let y="";for(p=0;p<64;p+=8){let E=parseInt(v.substr(p,8),2).toString(16);E.length===1&&(E="0"+E),y=y+E}return y.toLowerCase()},SS=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},IS=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function CS(r,e){let n="Unknown Error";r==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":r==="permission_denied"?n="Client doesn't have permission to access the desired data.":r==="unavailable"&&(n="The service is unavailable");const s=new Error(r+" at "+e._path.toString()+": "+n);return s.code=r.toUpperCase(),s}const TS=new RegExp("^-?(0*)\\d{1,10}$"),kS=-2147483648,RS=2147483647,Sm=function(r){if(TS.test(r)){const e=Number(r);if(e>=kS&&e<=RS)return e}return null},Ti=function(r){try{r()}catch(e){setTimeout(()=>{const n=e.stack||"";throw lt("Exception was thrown by user callback.",n),e},Math.floor(0))}},NS=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ws=function(r,e){const n=setTimeout(r,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class PS{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){lt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(l=>this.auth_=l)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Xe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',lt(e)}}class ol{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ol.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id="5",Zg="v",e_="s",t_="r",n_="f",r_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,i_="ls",s_="p",Oc="ac",o_="websocket",l_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e,n,s,l,u=!1,d="",f=!1,p=!1){this.secure=n,this.namespace=s,this.webSocketOnly=l,this.nodeAdmin=u,this.persistenceKey=d,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=p,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Sr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Sr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function OS(r){return r.host!==r.internalHost||r.isCustomHost()||r.includeNamespaceInQueryParams}function u_(r,e,n){L(typeof e=="string","typeof type must == string"),L(typeof n=="object","typeof params must == object");let s;if(e===o_)s=(r.secure?"wss://":"ws://")+r.internalHost+"/.ws?";else if(e===l_)s=(r.secure?"https://":"http://")+r.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);OS(r)&&(n.ns=r.namespace);const l=[];return Je(n,(u,d)=>{l.push(u+"="+d)}),s+l.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(){this.counters_={}}incrementCounter(e,n=1){an(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return b0(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc={},fc={};function sd(r){const e=r.toString();return hc[e]||(hc[e]=new xS),hc[e]}function DS(r,e){const n=r.toString();return fc[n]||(fc[n]=e()),fc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let l=0;l<s.length;++l)s[l]&&Ti(()=>{this.onMessage_(s[l])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im="start",MS="close",bS="pLPCommand",FS="pRTLPCB",c_="id",d_="pw",h_="ser",US="cb",jS="seg",zS="ts",WS="d",BS="dframe",f_=1870,p_=30,VS=f_-p_,$S=25e3,HS=3e4;class li{constructor(e,n,s,l,u,d,f){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.transportSessionId=d,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=js(e),this.stats_=sd(n),this.urlFn=p=>(this.appCheckToken&&(p[Oc]=this.appCheckToken),u_(n,l_,p))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new LS(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(HS)),wS(()=>{if(this.isClosed_)return;this.scriptTagHolder=new od((...u)=>{const[d,f,p,g,v]=u;if(this.incrementIncomingBytes_(u),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,d===Im)this.id=f,this.password=p;else if(d===MS)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+d)},(...u)=>{const[d,f]=u;this.incrementIncomingBytes_(u),this.myPacketOrderer.handleResponse(d,f)},()=>{this.onClosed_()},this.urlFn);const s={};s[Im]="t",s[h_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[US]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Zg]=id,this.transportSessionId&&(s[e_]=this.transportSessionId),this.lastSessionId&&(s[i_]=this.lastSessionId),this.applicationId&&(s[s_]=this.applicationId),this.appCheckToken&&(s[Oc]=this.appCheckToken),typeof location<"u"&&location.hostname&&r_.test(location.hostname)&&(s[t_]=n_);const l=this.urlFn(s);this.log_("Connecting via long-poll to "+l),this.scriptTagHolder.addTag(l,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){li.forceAllow_=!0}static forceDisallow(){li.forceDisallow_=!0}static isAvailable(){return li.forceAllow_?!0:!li.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!SS()&&!IS()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=qe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Og(n),l=Xg(s,VS);for(let u=0;u<l.length;u++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,l.length,l[u]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[BS]="t",s[c_]=e,s[d_]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=qe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class od{constructor(e,n,s,l){this.onDisconnect=s,this.urlFn=l,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=_S(),window[bS+this.uniqueCallbackIdentifier]=e,window[FS+this.uniqueCallbackIdentifier]=n,this.myIFrame=od.createIFrame_();let u="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(u='<script>document.domain="'+document.domain+'";<\/script>');const d="<html><body>"+u+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(d),this.myIFrame.doc.close()}catch(f){Xe("frame writing exception"),f.stack&&Xe(f.stack),Xe(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Xe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[c_]=this.myID,e[d_]=this.myPW,e[h_]=this.currentSerial;let n=this.urlFn(e),s="",l=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+p_+s.length<=f_;){const d=this.pendingSegs.shift();s=s+"&"+jS+l+"="+d.seg+"&"+zS+l+"="+d.ts+"&"+WS+l+"="+d.d,l++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},l=setTimeout(s,Math.floor($S)),u=()=>{clearTimeout(l),s()};this.addTag(e,u)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const l=s.readyState;(!l||l==="loaded"||l==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Xe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS=16384,qS=45e3;let ml=null;typeof MozWebSocket<"u"?ml=MozWebSocket:typeof WebSocket<"u"&&(ml=WebSocket);class $t{constructor(e,n,s,l,u,d,f){this.connId=e,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=js(this.connId),this.stats_=sd(n),this.connURL=$t.connectionURL_(n,d,f,l,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,l,u){const d={};return d[Zg]=id,typeof location<"u"&&location.hostname&&r_.test(location.hostname)&&(d[t_]=n_),n&&(d[e_]=n),s&&(d[i_]=s),l&&(d[Oc]=l),u&&(d[s_]=u),u_(e,o_,d)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Sr.set("previous_websocket_failure",!0);try{let s;Ug(),this.mySock=new ml(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_()}}start(){}static forceDisallow(){$t.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ml!==null&&!$t.forceDisallow_}static previouslyFailed(){return Sr.isInMemoryStorage||Sr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Sr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Rs(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(L(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=qe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Xg(n,GS);s.length>1&&this.sendString_(String(s.length));for(let l=0;l<s.length;l++)this.sendString_(s[l])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(qS))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}$t.responsesRequiredToBeHealthy=2;$t.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{static get ALL_TRANSPORTS(){return[li,$t]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=$t&&$t.isAvailable();let s=n&&!$t.previouslyFailed();if(e.webSocketOnly&&(n||lt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[$t];else{const l=this.transports_=[];for(const u of As.ALL_TRANSPORTS)u&&u.isAvailable()&&l.push(u);As.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}As.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KS=6e4,YS=5e3,QS=10*1024,XS=100*1024,pc="t",Cm="d",JS="s",Tm="r",ZS="e",km="o",Rm="a",Nm="n",Pm="p",eI="h";class tI{constructor(e,n,s,l,u,d,f,p,g,v){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=l,this.authToken_=u,this.onMessage_=d,this.onReady_=f,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=v,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=js("c:"+this.id+":"),this.transportManager_=new As(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const l=e.healthyTimeout||0;l>0&&(this.healthyTimeout_=ws(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>XS?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>QS?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(l)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(pc in e){const n=e[pc];n===Rm?this.upgradeIfSecondaryHealthy_():n===Tm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===km&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ms("t",e),s=ms("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Pm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Rm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Nm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ms("t",e),s=ms("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ms(pc,e);if(Cm in e){const s=e[Cm];if(n===eI){const l=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(l.h=this.repoInfo_.host),this.onHandshake_(l)}else if(n===Nm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let l=0;l<this.pendingDataMessages.length;++l)this.onDataMessage_(this.pendingDataMessages[l]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===JS?this.onConnectionShutdown_(s):n===Tm?this.onReset_(s):n===ZS?Ac("Server Error: "+s):n===km?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ac("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,l=e.h;this.sessionId=e.s,this.repoInfo_.host=l,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),id!==s&&lt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),ws(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(KS))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ws(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(YS))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Pm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Sr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{put(e,n,s,l){}merge(e,n,s,l){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e){this.allowedEvents_=e,this.listeners_={},L(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let l=0;l<s.length;l++)s[l].callback.apply(s[l].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const l=this.getInitialEvent(e);l&&n.apply(s,l)}off(e,n,s){this.validateEventType_(e);const l=this.listeners_[e]||[];for(let u=0;u<l.length;u++)if(l[u].callback===n&&(!s||s===l[u].context)){l.splice(u,1);return}}validateEventType_(e){L(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl extends g_{static getInstance(){return new gl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Zc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return L(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am=32,Om=768;class me{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let l=0;l<this.pieces_.length;l++)this.pieces_[l].length>0&&(this.pieces_[s]=this.pieces_[l],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ce(){return new me("")}function ee(r){return r.pieceNum_>=r.pieces_.length?null:r.pieces_[r.pieceNum_]}function nr(r){return r.pieces_.length-r.pieceNum_}function we(r){let e=r.pieceNum_;return e<r.pieces_.length&&e++,new me(r.pieces_,e)}function ld(r){return r.pieceNum_<r.pieces_.length?r.pieces_[r.pieces_.length-1]:null}function nI(r){let e="";for(let n=r.pieceNum_;n<r.pieces_.length;n++)r.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(r.pieces_[n])));return e||"/"}function Os(r,e=0){return r.pieces_.slice(r.pieceNum_+e)}function __(r){if(r.pieceNum_>=r.pieces_.length)return null;const e=[];for(let n=r.pieceNum_;n<r.pieces_.length-1;n++)e.push(r.pieces_[n]);return new me(e,0)}function De(r,e){const n=[];for(let s=r.pieceNum_;s<r.pieces_.length;s++)n.push(r.pieces_[s]);if(e instanceof me)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let l=0;l<s.length;l++)s[l].length>0&&n.push(s[l])}return new me(n,0)}function re(r){return r.pieceNum_>=r.pieces_.length}function gt(r,e){const n=ee(r),s=ee(e);if(n===null)return e;if(n===s)return gt(we(r),we(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+r+")")}function rI(r,e){const n=Os(r,0),s=Os(e,0);for(let l=0;l<n.length&&l<s.length;l++){const u=Dr(n[l],s[l]);if(u!==0)return u}return n.length===s.length?0:n.length<s.length?-1:1}function ad(r,e){if(nr(r)!==nr(e))return!1;for(let n=r.pieceNum_,s=e.pieceNum_;n<=r.pieces_.length;n++,s++)if(r.pieces_[n]!==e.pieces_[s])return!1;return!0}function Lt(r,e){let n=r.pieceNum_,s=e.pieceNum_;if(nr(r)>nr(e))return!1;for(;n<r.pieces_.length;){if(r.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class iI{constructor(e,n){this.errorPrefix_=n,this.parts_=Os(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Fl(this.parts_[s]);y_(this)}}function sI(r,e){r.parts_.length>0&&(r.byteLength_+=1),r.parts_.push(e),r.byteLength_+=Fl(e),y_(r)}function oI(r){const e=r.parts_.pop();r.byteLength_-=Fl(e),r.parts_.length>0&&(r.byteLength_-=1)}function y_(r){if(r.byteLength_>Om)throw new Error(r.errorPrefix_+"has a key path longer than "+Om+" bytes ("+r.byteLength_+").");if(r.parts_.length>Am)throw new Error(r.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Am+") or object contains a cycle "+Er(r))}function Er(r){return r.parts_.length===0?"":"in property '"+r.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud extends g_{static getInstance(){return new ud}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return L(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs=1e3,lI=60*5*1e3,xm=30*1e3,aI=1.3,uI=3e4,cI="server_kill",Dm=3;class Sn extends m_{constructor(e,n,s,l,u,d,f,p){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=l,this.onServerInfoUpdate_=u,this.authTokenProvider_=d,this.appCheckTokenProvider_=f,this.authOverride_=p,this.id=Sn.nextPersistentConnectionId_++,this.log_=js("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=gs,this.maxReconnectDelay_=lI,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p&&!Ug())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ud.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&gl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const l=++this.requestNumber_,u={r:l,a:e,b:n};this.log_(qe(u)),L(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(u),s&&(this.requestCBHash_[l]=s)}get(e){this.initConnection_();const n=new Fs,l={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:d=>{const f=d.d;d.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(l),this.outstandingGetCount_++;const u=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(u),n.promise}listen(e,n,s,l){this.initConnection_();const u=e._queryIdentifier,d=e._path.toString();this.log_("Listen called for "+d+" "+u),this.listens.has(d)||this.listens.set(d,new Map),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),L(!this.listens.get(d).has(u),"listen() called twice for same path/queryId.");const f={onComplete:l,hashFn:n,query:e,tag:s};this.listens.get(d).set(u,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),l=n._queryIdentifier;this.log_("Listen on "+s+" for "+l);const u={p:s},d="q";e.tag&&(u.q=n._queryObject,u.t=e.tag),u.h=e.hashFn(),this.sendRequest(d,u,f=>{const p=f.d,g=f.s;Sn.warnOnListenWarnings_(p,n),(this.listens.get(s)&&this.listens.get(s).get(l))===e&&(this.log_("listen response",f),g!=="ok"&&this.removeListen_(s,l),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&an(e,"w")){const s=gi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const l='".indexOn": "'+n._queryParams.getIndex().toString()+'"',u=n._path.toString();lt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${l} at ${u} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||X0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=xm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Q0(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,l=>{const u=l.s,d=l.d||"error";this.authToken_===e&&(u==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(u,d))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),l=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+l),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,l)&&this.connected_&&this.sendUnlisten_(s,l,e._queryObject,n)}sendUnlisten_(e,n,s,l){this.log_("Unlisten on "+e+" for "+n);const u={p:e},d="n";l&&(u.q=s,u.t=l),this.sendRequest(d,u)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,l){const u={p:n,d:s};this.log_("onDisconnect "+e,u),this.sendRequest(e,u,d=>{l&&setTimeout(()=>{l(d.s,d.d)},Math.floor(0))})}put(e,n,s,l){this.putInternal("p",e,n,s,l)}merge(e,n,s,l){this.putInternal("m",e,n,s,l)}putInternal(e,n,s,l,u){this.initConnection_();const d={p:n,d:s};u!==void 0&&(d.h=u),this.outstandingPuts_.push({action:e,request:d,onComplete:l}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,l=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,u=>{this.log_(n+" response",u),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),l&&l(u.s,u.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const u=s.d;this.log_("reportStats","Error sending stats: "+u)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+qe(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ac("Unrecognized action received from server: "+qe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){L(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=gs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=gs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>uI&&(this.reconnectDelay_=gs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*aI)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),l=this.id+":"+Sn.nextConnectionId_++,u=this.lastSessionId;let d=!1,f=null;const p=function(){f?f.close():(d=!0,s())},g=function(y){L(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(y)};this.realtime_={close:p,sendRequest:g};const v=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[y,E]=await Promise.all([this.authTokenProvider_.getToken(v),this.appCheckTokenProvider_.getToken(v)]);d?Xe("getToken() completed but was canceled"):(Xe("getToken() completed. Creating connection."),this.authToken_=y&&y.accessToken,this.appCheckToken_=E&&E.token,f=new tI(l,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,R=>{lt(R+" ("+this.repoInfo_.toString()+")"),this.interrupt(cI)},u))}catch(y){this.log_("Failed to get token: "+y),d||(this.repoInfo_.nodeAdmin&&lt(y),p())}}}interrupt(e){Xe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Xe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Cc(this.interruptReasons_)&&(this.reconnectDelay_=gs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(u=>rd(u)).join("$"):s="default";const l=this.removeListen_(e,s);l&&l.onComplete&&l.onComplete("permission_denied")}removeListen_(e,n){const s=new me(e).toString();let l;if(this.listens.has(s)){const u=this.listens.get(s);l=u.get(n),u.delete(n),u.size===0&&this.listens.delete(s)}else l=void 0;return l}onAuthRevoked_(e,n){Xe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Dm&&(this.reconnectDelay_=xm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Xe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Dm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Kg.replace(/\./g,"-")]=1,Zc()?e["framework.cordova"]=1:Fg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=gl.getInstance().currentlyOnline();return Cc(this.interruptReasons_)&&e}}Sn.nextPersistentConnectionId_=0;Sn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class jl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new te(_i,e),l=new te(_i,n);return this.compare(s,l)!==0}minPost(){return te.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rl;class v_ extends jl{static get __EMPTY_NODE(){return rl}static set __EMPTY_NODE(e){rl=e}compare(e,n){return Dr(e.name,n.name)}isDefinedOn(e){throw Si("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return te.MIN}maxPost(){return new te(Cr,rl)}makePost(e,n){return L(typeof e=="string","KeyIndex indexValue must always be a string."),new te(e,rl)}toString(){return".key"}}const di=new v_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,n,s,l,u=null){this.isReverse_=l,this.resultGenerator_=u,this.nodeStack_=[];let d=1;for(;!e.isEmpty();)if(e=e,d=n?s(e.key,n):1,l&&(d*=-1),d<0)this.isReverse_?e=e.left:e=e.right;else if(d===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class He{constructor(e,n,s,l,u){this.key=e,this.value=n,this.color=s??He.RED,this.left=l??_t.EMPTY_NODE,this.right=u??_t.EMPTY_NODE}copy(e,n,s,l,u){return new He(e??this.key,n??this.value,s??this.color,l??this.left,u??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let l=this;const u=s(e,l.key);return u<0?l=l.copy(null,null,null,l.left.insert(e,n,s),null):u===0?l=l.copy(null,n,null,null,null):l=l.copy(null,null,null,null,l.right.insert(e,n,s)),l.fixUp_()}removeMin_(){if(this.left.isEmpty())return _t.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,l;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return _t.EMPTY_NODE;l=s.right.min_(),s=s.copy(l.key,l.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}He.RED=!0;He.BLACK=!1;class dI{copy(e,n,s,l,u){return this}insert(e,n,s){return new He(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class _t{constructor(e,n=_t.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new _t(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,He.BLACK,null,null))}remove(e){return new _t(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,He.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,l=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return l?l.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(l=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new il(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new il(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new il(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new il(this.root_,null,this.comparator_,!0,e)}}_t.EMPTY_NODE=new dI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(r,e){return Dr(r.name,e.name)}function cd(r,e){return Dr(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xc;function fI(r){xc=r}const w_=function(r){return typeof r=="number"?"number:"+Jg(r):"string:"+r},E_=function(r){if(r.isLeafNode()){const e=r.val();L(typeof e=="string"||typeof e=="number"||typeof e=="object"&&an(e,".sv"),"Priority must be a string or number.")}else L(r===xc||r.isEmpty(),"priority of unexpected type.");L(r===xc||r.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lm;class $e{static set __childrenNodeConstructor(e){Lm=e}static get __childrenNodeConstructor(){return Lm}constructor(e,n=$e.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,L(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),E_(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new $e(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:$e.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return re(e)?this:ee(e)===".priority"?this.priorityNode_:$e.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:$e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ee(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(L(s!==".priority"||nr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,$e.__childrenNodeConstructor.EMPTY_NODE.updateChild(we(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+w_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Jg(this.value_):e+=this.value_,this.lazyHash_=Qg(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===$e.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof $e.__childrenNodeConstructor?-1:(L(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,l=$e.VALUE_TYPE_ORDER.indexOf(n),u=$e.VALUE_TYPE_ORDER.indexOf(s);return L(l>=0,"Unknown leaf type: "+n),L(u>=0,"Unknown leaf type: "+s),l===u?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:u-l}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}$e.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let S_,I_;function pI(r){S_=r}function mI(r){I_=r}class gI extends jl{compare(e,n){const s=e.node.getPriority(),l=n.node.getPriority(),u=s.compareTo(l);return u===0?Dr(e.name,n.name):u}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return te.MIN}maxPost(){return new te(Cr,new $e("[PRIORITY-POST]",I_))}makePost(e,n){const s=S_(e);return new te(n,new $e("[PRIORITY-POST]",s))}toString(){return".priority"}}const Le=new gI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I=Math.log(2);class yI{constructor(e){const n=u=>parseInt(Math.log(u)/_I,10),s=u=>parseInt(Array(u+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const l=s(this.count);this.bits_=e+1&l}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const _l=function(r,e,n,s){r.sort(e);const l=function(p,g){const v=g-p;let y,E;if(v===0)return null;if(v===1)return y=r[p],E=n?n(y):y,new He(E,y.node,He.BLACK,null,null);{const R=parseInt(v/2,10)+p,O=l(p,R),b=l(R+1,g);return y=r[R],E=n?n(y):y,new He(E,y.node,He.BLACK,O,b)}},u=function(p){let g=null,v=null,y=r.length;const E=function(O,b){const M=y-O,Ee=y;y-=O;const Ae=l(M+1,Ee),ge=r[M],Re=n?n(ge):ge;R(new He(Re,ge.node,b,null,Ae))},R=function(O){g?(g.left=O,g=O):(v=O,g=O)};for(let O=0;O<p.count;++O){const b=p.nextBitIsOne(),M=Math.pow(2,p.count-(O+1));b?E(M,He.BLACK):(E(M,He.BLACK),E(M,He.RED))}return v},d=new yI(r.length),f=u(d);return new _t(s||e,f)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mc;const oi={};class yn{static get Default(){return L(oi&&Le,"ChildrenNode.ts has not been loaded"),mc=mc||new yn({".priority":oi},{".priority":Le}),mc}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=gi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof _t?n:null}hasIndex(e){return an(this.indexSet_,e.toString())}addIndex(e,n){L(e!==di,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let l=!1;const u=n.getIterator(te.Wrap);let d=u.getNext();for(;d;)l=l||e.isDefinedOn(d.node),s.push(d),d=u.getNext();let f;l?f=_l(s,e.getCompare()):f=oi;const p=e.toString(),g=Object.assign({},this.indexSet_);g[p]=e;const v=Object.assign({},this.indexes_);return v[p]=f,new yn(v,g)}addToIndexes(e,n){const s=fl(this.indexes_,(l,u)=>{const d=gi(this.indexSet_,u);if(L(d,"Missing index implementation for "+u),l===oi)if(d.isDefinedOn(e.node)){const f=[],p=n.getIterator(te.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&f.push(g),g=p.getNext();return f.push(e),_l(f,d.getCompare())}else return oi;else{const f=n.get(e.name);let p=l;return f&&(p=p.remove(new te(e.name,f))),p.insert(e,e.node)}});return new yn(s,this.indexSet_)}removeFromIndexes(e,n){const s=fl(this.indexes_,l=>{if(l===oi)return l;{const u=n.get(e.name);return u?l.remove(new te(e.name,u)):l}});return new yn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _s;class K{static get EMPTY_NODE(){return _s||(_s=new K(new _t(cd),null,yn.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&E_(this.priorityNode_),this.children_.isEmpty()&&L(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||_s}updatePriority(e){return this.children_.isEmpty()?this:new K(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?_s:n}}getChild(e){const n=ee(e);return n===null?this:this.getImmediateChild(n).getChild(we(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(L(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new te(e,n);let l,u;n.isEmpty()?(l=this.children_.remove(e),u=this.indexMap_.removeFromIndexes(s,this.children_)):(l=this.children_.insert(e,n),u=this.indexMap_.addToIndexes(s,this.children_));const d=l.isEmpty()?_s:this.priorityNode_;return new K(l,d,u)}}updateChild(e,n){const s=ee(e);if(s===null)return n;{L(ee(e)!==".priority"||nr(e)===1,".priority must be the last token in a path");const l=this.getImmediateChild(s).updateChild(we(e),n);return this.updateImmediateChild(s,l)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,l=0,u=!0;if(this.forEachChild(Le,(d,f)=>{n[d]=f.val(e),s++,u&&K.INTEGER_REGEXP_.test(d)?l=Math.max(l,Number(d)):u=!1}),!e&&u&&l<2*s){const d=[];for(const f in n)d[f]=n[f];return d}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+w_(this.getPriority().val())+":"),this.forEachChild(Le,(n,s)=>{const l=s.hash();l!==""&&(e+=":"+n+":"+l)}),this.lazyHash_=e===""?"":Qg(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const l=this.resolveIndex_(s);if(l){const u=l.getPredecessorKey(new te(e,n));return u?u.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new te(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new te(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(l=>n(l.name,l.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,l=>l);{const l=this.children_.getIteratorFrom(e.name,te.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)<0;)l.getNext(),u=l.peek();return l}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,l=>l);{const l=this.children_.getReverseIteratorFrom(e.name,te.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)>0;)l.getNext(),u=l.peek();return l}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===zs?-1:0}withIndex(e){if(e===di||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new K(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===di||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Le),l=n.getIterator(Le);let u=s.getNext(),d=l.getNext();for(;u&&d;){if(u.name!==d.name||!u.node.equals(d.node))return!1;u=s.getNext(),d=l.getNext()}return u===null&&d===null}else return!1;else return!1}}resolveIndex_(e){return e===di?null:this.indexMap_.get(e.toString())}}K.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class vI extends K{constructor(){super(new _t(cd),K.EMPTY_NODE,yn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return K.EMPTY_NODE}isEmpty(){return!1}}const zs=new vI;Object.defineProperties(te,{MIN:{value:new te(_i,K.EMPTY_NODE)},MAX:{value:new te(Cr,zs)}});v_.__EMPTY_NODE=K.EMPTY_NODE;$e.__childrenNodeConstructor=K;fI(zs);mI(zs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI=!0;function Ge(r,e=null){if(r===null)return K.EMPTY_NODE;if(typeof r=="object"&&".priority"in r&&(e=r[".priority"]),L(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof r=="object"&&".value"in r&&r[".value"]!==null&&(r=r[".value"]),typeof r!="object"||".sv"in r){const n=r;return new $e(n,Ge(e))}if(!(r instanceof Array)&&wI){const n=[];let s=!1;if(Je(r,(d,f)=>{if(d.substring(0,1)!=="."){const p=Ge(f);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),n.push(new te(d,p)))}}),n.length===0)return K.EMPTY_NODE;const u=_l(n,hI,d=>d.name,cd);if(s){const d=_l(n,Le.getCompare());return new K(u,Ge(e),new yn({".priority":d},{".priority":Le}))}else return new K(u,Ge(e),yn.Default)}else{let n=K.EMPTY_NODE;return Je(r,(s,l)=>{if(an(r,s)&&s.substring(0,1)!=="."){const u=Ge(l);(u.isLeafNode()||!u.isEmpty())&&(n=n.updateImmediateChild(s,u))}}),n.updatePriority(Ge(e))}}pI(Ge);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI extends jl{constructor(e){super(),this.indexPath_=e,L(!re(e)&&ee(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),l=this.extractChild(n.node),u=s.compareTo(l);return u===0?Dr(e.name,n.name):u}makePost(e,n){const s=Ge(e),l=K.EMPTY_NODE.updateChild(this.indexPath_,s);return new te(n,l)}maxPost(){const e=K.EMPTY_NODE.updateChild(this.indexPath_,zs);return new te(Cr,e)}toString(){return Os(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI extends jl{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Dr(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return te.MIN}maxPost(){return te.MAX}makePost(e,n){const s=Ge(e);return new te(n,s)}toString(){return".value"}}const II=new SI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C_(r){return{type:"value",snapshotNode:r}}function yi(r,e){return{type:"child_added",snapshotNode:e,childName:r}}function xs(r,e){return{type:"child_removed",snapshotNode:e,childName:r}}function Ds(r,e,n){return{type:"child_changed",snapshotNode:e,childName:r,oldSnap:n}}function CI(r,e){return{type:"child_moved",snapshotNode:e,childName:r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e){this.index_=e}updateChild(e,n,s,l,u,d){L(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(n);return f.getChild(l).equals(s.getChild(l))&&f.isEmpty()===s.isEmpty()||(d!=null&&(s.isEmpty()?e.hasChild(n)?d.trackChildChange(xs(n,f)):L(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?d.trackChildChange(yi(n,s)):d.trackChildChange(Ds(n,s,f))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Le,(l,u)=>{n.hasChild(l)||s.trackChildChange(xs(l,u))}),n.isLeafNode()||n.forEachChild(Le,(l,u)=>{if(e.hasChild(l)){const d=e.getImmediateChild(l);d.equals(u)||s.trackChildChange(Ds(l,u,d))}else s.trackChildChange(yi(l,u))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?K.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e){this.indexedFilter_=new dd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ls.getStartPost_(e),this.endPost_=Ls.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,l,u,d){return this.matches(new te(n,s))||(s=K.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,l,u,d)}updateFullNode(e,n,s){n.isLeafNode()&&(n=K.EMPTY_NODE);let l=n.withIndex(this.index_);l=l.updatePriority(K.EMPTY_NODE);const u=this;return n.forEachChild(Le,(d,f)=>{u.matches(new te(d,f))||(l=l.updateImmediateChild(d,K.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Ls(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,l,u,d){return this.rangedFilter_.matches(new te(n,s))||(s=K.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,l,u,d):this.fullLimitUpdateChild_(e,n,s,u,d)}updateFullNode(e,n,s){let l;if(n.isLeafNode()||n.isEmpty())l=K.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){l=K.EMPTY_NODE.withIndex(this.index_);let u;this.reverse_?u=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):u=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let d=0;for(;u.hasNext()&&d<this.limit_;){const f=u.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))l=l.updateImmediateChild(f.name,f.node),d++;else break;else continue}}else{l=n.withIndex(this.index_),l=l.updatePriority(K.EMPTY_NODE);let u;this.reverse_?u=l.getReverseIterator(this.index_):u=l.getIterator(this.index_);let d=0;for(;u.hasNext();){const f=u.getNext();d<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?d++:l=l.updateImmediateChild(f.name,K.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,l,u){let d;if(this.reverse_){const y=this.index_.getCompare();d=(E,R)=>y(R,E)}else d=this.index_.getCompare();const f=e;L(f.numChildren()===this.limit_,"");const p=new te(n,s),g=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),v=this.rangedFilter_.matches(p);if(f.hasChild(n)){const y=f.getImmediateChild(n);let E=l.getChildAfterChild(this.index_,g,this.reverse_);for(;E!=null&&(E.name===n||f.hasChild(E.name));)E=l.getChildAfterChild(this.index_,E,this.reverse_);const R=E==null?1:d(E,p);if(v&&!s.isEmpty()&&R>=0)return u!=null&&u.trackChildChange(Ds(n,s,y)),f.updateImmediateChild(n,s);{u!=null&&u.trackChildChange(xs(n,y));const b=f.updateImmediateChild(n,K.EMPTY_NODE);return E!=null&&this.rangedFilter_.matches(E)?(u!=null&&u.trackChildChange(yi(E.name,E.node)),b.updateImmediateChild(E.name,E.node)):b}}else return s.isEmpty()?e:v&&d(g,p)>=0?(u!=null&&(u.trackChildChange(xs(g.name,g.node)),u.trackChildChange(yi(n,s))),f.updateImmediateChild(n,s).updateImmediateChild(g.name,K.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Le}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return L(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return L(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:_i}hasEnd(){return this.endSet_}getIndexEndValue(){return L(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return L(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Cr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return L(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Le}copy(){const e=new hd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function kI(r){return r.loadsAllData()?new dd(r.getIndex()):r.hasLimit()?new TI(r):new Ls(r)}function Mm(r){const e={};if(r.isDefault())return e;let n;if(r.index_===Le?n="$priority":r.index_===II?n="$value":r.index_===di?n="$key":(L(r.index_ instanceof EI,"Unrecognized index type!"),n=r.index_.toString()),e.orderBy=qe(n),r.startSet_){const s=r.startAfterSet_?"startAfter":"startAt";e[s]=qe(r.indexStartValue_),r.startNameSet_&&(e[s]+=","+qe(r.indexStartName_))}if(r.endSet_){const s=r.endBeforeSet_?"endBefore":"endAt";e[s]=qe(r.indexEndValue_),r.endNameSet_&&(e[s]+=","+qe(r.indexEndName_))}return r.limitSet_&&(r.isViewFromLeft()?e.limitToFirst=r.limit_:e.limitToLast=r.limit_),e}function bm(r){const e={};if(r.startSet_&&(e.sp=r.indexStartValue_,r.startNameSet_&&(e.sn=r.indexStartName_),e.sin=!r.startAfterSet_),r.endSet_&&(e.ep=r.indexEndValue_,r.endNameSet_&&(e.en=r.indexEndName_),e.ein=!r.endBeforeSet_),r.limitSet_){e.l=r.limit_;let n=r.viewFrom_;n===""&&(r.isViewFromLeft()?n="l":n="r"),e.vf=n}return r.index_!==Le&&(e.i=r.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl extends m_{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(L(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,l){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=l,this.log_=js("p:rest:"),this.listens_={}}listen(e,n,s,l){const u=e._path.toString();this.log_("Listen called for "+u+" "+e._queryIdentifier);const d=yl.getListenId_(e,s),f={};this.listens_[d]=f;const p=Mm(e._queryParams);this.restRequest_(u+".json",p,(g,v)=>{let y=v;if(g===404&&(y=null,g=null),g===null&&this.onDataUpdate_(u,y,!1,s),gi(this.listens_,d)===f){let E;g?g===401?E="permission_denied":E="rest_error:"+g:E="ok",l(E,null)}})}unlisten(e,n){const s=yl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Mm(e._queryParams),s=e._path.toString(),l=new Fs;return this.restRequest_(s+".json",n,(u,d)=>{let f=d;u===404&&(f=null,u=null),u===null?(this.onDataUpdate_(s,f,!1,null),l.resolve(f)):l.reject(new Error(f))}),l.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([l,u])=>{l&&l.accessToken&&(n.auth=l.accessToken),u&&u.token&&(n.ac=u.token);const d=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ii(n);this.log_("Sending REST request for "+d);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(s&&f.readyState===4){this.log_("REST Response for "+d+" received. status:",f.status,"response:",f.responseText);let p=null;if(f.status>=200&&f.status<300){try{p=Rs(f.responseText)}catch{lt("Failed to parse JSON response for "+d+": "+f.responseText)}s(null,p)}else f.status!==401&&f.status!==404&&lt("Got unsuccessful REST response for "+d+" Status: "+f.status),s(f.status);s=null}},f.open("GET",d,!0),f.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(){this.rootNode_=K.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(){return{value:null,children:new Map}}function T_(r,e,n){if(re(e))r.value=n,r.children.clear();else if(r.value!==null)r.value=r.value.updateChild(e,n);else{const s=ee(e);r.children.has(s)||r.children.set(s,vl());const l=r.children.get(s);e=we(e),T_(l,e,n)}}function Dc(r,e,n){r.value!==null?n(e,r.value):NI(r,(s,l)=>{const u=new me(e.toString()+"/"+s);Dc(l,u,n)})}function NI(r,e){r.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Je(this.last_,(s,l)=>{n[s]=n[s]-l}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm=10*1e3,AI=30*1e3,OI=5*60*1e3;class xI{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new PI(e);const s=Fm+(AI-Fm)*Math.random();ws(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Je(e,(l,u)=>{u>0&&an(this.statsToReport_,l)&&(n[l]=u,s=!0)}),s&&this.server_.reportStats(n),ws(this.reportStats_.bind(this),Math.floor(Math.random()*2*OI))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ht;(function(r){r[r.OVERWRITE=0]="OVERWRITE",r[r.MERGE=1]="MERGE",r[r.ACK_USER_WRITE=2]="ACK_USER_WRITE",r[r.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ht||(Ht={}));function fd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function pd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function md(r){return{fromUser:!1,fromServer:!0,queryId:r,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Ht.ACK_USER_WRITE,this.source=fd()}operationForChild(e){if(re(this.path)){if(this.affectedTree.value!=null)return L(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new me(e));return new wl(ce(),n,this.revert)}}else return L(ee(this.path)===e,"operationForChild called for unrelated child."),new wl(we(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,n){this.source=e,this.path=n,this.type=Ht.LISTEN_COMPLETE}operationForChild(e){return re(this.path)?new Ms(this.source,ce()):new Ms(this.source,we(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Ht.OVERWRITE}operationForChild(e){return re(this.path)?new Tr(this.source,ce(),this.snap.getImmediateChild(e)):new Tr(this.source,we(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Ht.MERGE}operationForChild(e){if(re(this.path)){const n=this.children.subtree(new me(e));return n.isEmpty()?null:n.value?new Tr(this.source,ce(),n.value):new vi(this.source,ce(),n)}else return L(ee(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new vi(this.source,we(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(re(e))return this.isFullyInitialized()&&!this.filtered_;const n=ee(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function LI(r,e,n,s){const l=[],u=[];return e.forEach(d=>{d.type==="child_changed"&&r.index_.indexedValueChanged(d.oldSnap,d.snapshotNode)&&u.push(CI(d.childName,d.snapshotNode))}),ys(r,l,"child_removed",e,s,n),ys(r,l,"child_added",e,s,n),ys(r,l,"child_moved",u,s,n),ys(r,l,"child_changed",e,s,n),ys(r,l,"value",e,s,n),l}function ys(r,e,n,s,l,u){const d=s.filter(f=>f.type===n);d.sort((f,p)=>bI(r,f,p)),d.forEach(f=>{const p=MI(r,f,u);l.forEach(g=>{g.respondsTo(f.type)&&e.push(g.createEvent(p,r.query_))})})}function MI(r,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,r.index_)),e}function bI(r,e,n){if(e.childName==null||n.childName==null)throw Si("Should only compare child_ events.");const s=new te(e.childName,e.snapshotNode),l=new te(n.childName,n.snapshotNode);return r.index_.compare(s,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(r,e){return{eventCache:r,serverCache:e}}function Es(r,e,n,s){return zl(new kr(e,n,s),r.serverCache)}function k_(r,e,n,s){return zl(r.eventCache,new kr(e,n,s))}function Lc(r){return r.eventCache.isFullyInitialized()?r.eventCache.getNode():null}function Rr(r){return r.serverCache.isFullyInitialized()?r.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gc;const FI=()=>(gc||(gc=new _t(ES)),gc);class ve{static fromObject(e){let n=new ve(null);return Je(e,(s,l)=>{n=n.set(new me(s),l)}),n}constructor(e,n=FI()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ce(),value:this.value};if(re(e))return null;{const s=ee(e),l=this.children.get(s);if(l!==null){const u=l.findRootMostMatchingPathAndValue(we(e),n);return u!=null?{path:De(new me(s),u.path),value:u.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(re(e))return this;{const n=ee(e),s=this.children.get(n);return s!==null?s.subtree(we(e)):new ve(null)}}set(e,n){if(re(e))return new ve(n,this.children);{const s=ee(e),u=(this.children.get(s)||new ve(null)).set(we(e),n),d=this.children.insert(s,u);return new ve(this.value,d)}}remove(e){if(re(e))return this.children.isEmpty()?new ve(null):new ve(null,this.children);{const n=ee(e),s=this.children.get(n);if(s){const l=s.remove(we(e));let u;return l.isEmpty()?u=this.children.remove(n):u=this.children.insert(n,l),this.value===null&&u.isEmpty()?new ve(null):new ve(this.value,u)}else return this}}get(e){if(re(e))return this.value;{const n=ee(e),s=this.children.get(n);return s?s.get(we(e)):null}}setTree(e,n){if(re(e))return n;{const s=ee(e),u=(this.children.get(s)||new ve(null)).setTree(we(e),n);let d;return u.isEmpty()?d=this.children.remove(s):d=this.children.insert(s,u),new ve(this.value,d)}}fold(e){return this.fold_(ce(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((l,u)=>{s[l]=u.fold_(De(e,l),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ce(),n)}findOnPath_(e,n,s){const l=this.value?s(n,this.value):!1;if(l)return l;if(re(e))return null;{const u=ee(e),d=this.children.get(u);return d?d.findOnPath_(we(e),De(n,u),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ce(),n)}foreachOnPath_(e,n,s){if(re(e))return this;{this.value&&s(n,this.value);const l=ee(e),u=this.children.get(l);return u?u.foreachOnPath_(we(e),De(n,l),s):new ve(null)}}foreach(e){this.foreach_(ce(),e)}foreach_(e,n){this.children.inorderTraversal((s,l)=>{l.foreach_(De(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.writeTree_=e}static empty(){return new qt(new ve(null))}}function Ss(r,e,n){if(re(e))return new qt(new ve(n));{const s=r.writeTree_.findRootMostValueAndPath(e);if(s!=null){const l=s.path;let u=s.value;const d=gt(l,e);return u=u.updateChild(d,n),new qt(r.writeTree_.set(l,u))}else{const l=new ve(n),u=r.writeTree_.setTree(e,l);return new qt(u)}}}function Mc(r,e,n){let s=r;return Je(n,(l,u)=>{s=Ss(s,De(e,l),u)}),s}function Um(r,e){if(re(e))return qt.empty();{const n=r.writeTree_.setTree(e,new ve(null));return new qt(n)}}function bc(r,e){return Lr(r,e)!=null}function Lr(r,e){const n=r.writeTree_.findRootMostValueAndPath(e);return n!=null?r.writeTree_.get(n.path).getChild(gt(n.path,e)):null}function jm(r){const e=[],n=r.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Le,(s,l)=>{e.push(new te(s,l))}):r.writeTree_.children.inorderTraversal((s,l)=>{l.value!=null&&e.push(new te(s,l.value))}),e}function er(r,e){if(re(e))return r;{const n=Lr(r,e);return n!=null?new qt(new ve(n)):new qt(r.writeTree_.subtree(e))}}function Fc(r){return r.writeTree_.isEmpty()}function wi(r,e){return R_(ce(),r.writeTree_,e)}function R_(r,e,n){if(e.value!=null)return n.updateChild(r,e.value);{let s=null;return e.children.inorderTraversal((l,u)=>{l===".priority"?(L(u.value!==null,"Priority writes must always be leaf nodes"),s=u.value):n=R_(De(r,l),u,n)}),!n.getChild(r).isEmpty()&&s!==null&&(n=n.updateChild(De(r,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(r,e){return O_(e,r)}function UI(r,e,n,s,l){L(s>r.lastWriteId,"Stacking an older write on top of newer ones"),l===void 0&&(l=!0),r.allWrites.push({path:e,snap:n,writeId:s,visible:l}),l&&(r.visibleWrites=Ss(r.visibleWrites,e,n)),r.lastWriteId=s}function jI(r,e,n,s){L(s>r.lastWriteId,"Stacking an older merge on top of newer ones"),r.allWrites.push({path:e,children:n,writeId:s,visible:!0}),r.visibleWrites=Mc(r.visibleWrites,e,n),r.lastWriteId=s}function zI(r,e){for(let n=0;n<r.allWrites.length;n++){const s=r.allWrites[n];if(s.writeId===e)return s}return null}function WI(r,e){const n=r.allWrites.findIndex(f=>f.writeId===e);L(n>=0,"removeWrite called with nonexistent writeId.");const s=r.allWrites[n];r.allWrites.splice(n,1);let l=s.visible,u=!1,d=r.allWrites.length-1;for(;l&&d>=0;){const f=r.allWrites[d];f.visible&&(d>=n&&BI(f,s.path)?l=!1:Lt(s.path,f.path)&&(u=!0)),d--}if(l){if(u)return VI(r),!0;if(s.snap)r.visibleWrites=Um(r.visibleWrites,s.path);else{const f=s.children;Je(f,p=>{r.visibleWrites=Um(r.visibleWrites,De(s.path,p))})}return!0}else return!1}function BI(r,e){if(r.snap)return Lt(r.path,e);for(const n in r.children)if(r.children.hasOwnProperty(n)&&Lt(De(r.path,n),e))return!0;return!1}function VI(r){r.visibleWrites=N_(r.allWrites,$I,ce()),r.allWrites.length>0?r.lastWriteId=r.allWrites[r.allWrites.length-1].writeId:r.lastWriteId=-1}function $I(r){return r.visible}function N_(r,e,n){let s=qt.empty();for(let l=0;l<r.length;++l){const u=r[l];if(e(u)){const d=u.path;let f;if(u.snap)Lt(n,d)?(f=gt(n,d),s=Ss(s,f,u.snap)):Lt(d,n)&&(f=gt(d,n),s=Ss(s,ce(),u.snap.getChild(f)));else if(u.children){if(Lt(n,d))f=gt(n,d),s=Mc(s,f,u.children);else if(Lt(d,n))if(f=gt(d,n),re(f))s=Mc(s,ce(),u.children);else{const p=gi(u.children,ee(f));if(p){const g=p.getChild(we(f));s=Ss(s,ce(),g)}}}else throw Si("WriteRecord should have .snap or .children")}}return s}function P_(r,e,n,s,l){if(!s&&!l){const u=Lr(r.visibleWrites,e);if(u!=null)return u;{const d=er(r.visibleWrites,e);if(Fc(d))return n;if(n==null&&!bc(d,ce()))return null;{const f=n||K.EMPTY_NODE;return wi(d,f)}}}else{const u=er(r.visibleWrites,e);if(!l&&Fc(u))return n;if(!l&&n==null&&!bc(u,ce()))return null;{const d=function(g){return(g.visible||l)&&(!s||!~s.indexOf(g.writeId))&&(Lt(g.path,e)||Lt(e,g.path))},f=N_(r.allWrites,d,e),p=n||K.EMPTY_NODE;return wi(f,p)}}}function HI(r,e,n){let s=K.EMPTY_NODE;const l=Lr(r.visibleWrites,e);if(l)return l.isLeafNode()||l.forEachChild(Le,(u,d)=>{s=s.updateImmediateChild(u,d)}),s;if(n){const u=er(r.visibleWrites,e);return n.forEachChild(Le,(d,f)=>{const p=wi(er(u,new me(d)),f);s=s.updateImmediateChild(d,p)}),jm(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}else{const u=er(r.visibleWrites,e);return jm(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}}function GI(r,e,n,s,l){L(s||l,"Either existingEventSnap or existingServerSnap must exist");const u=De(e,n);if(bc(r.visibleWrites,u))return null;{const d=er(r.visibleWrites,u);return Fc(d)?l.getChild(n):wi(d,l.getChild(n))}}function qI(r,e,n,s){const l=De(e,n),u=Lr(r.visibleWrites,l);if(u!=null)return u;if(s.isCompleteForChild(n)){const d=er(r.visibleWrites,l);return wi(d,s.getNode().getImmediateChild(n))}else return null}function KI(r,e){return Lr(r.visibleWrites,e)}function YI(r,e,n,s,l,u,d){let f;const p=er(r.visibleWrites,e),g=Lr(p,ce());if(g!=null)f=g;else if(n!=null)f=wi(p,n);else return[];if(f=f.withIndex(d),!f.isEmpty()&&!f.isLeafNode()){const v=[],y=d.getCompare(),E=u?f.getReverseIteratorFrom(s,d):f.getIteratorFrom(s,d);let R=E.getNext();for(;R&&v.length<l;)y(R,s)!==0&&v.push(R),R=E.getNext();return v}else return[]}function QI(){return{visibleWrites:qt.empty(),allWrites:[],lastWriteId:-1}}function El(r,e,n,s){return P_(r.writeTree,r.treePath,e,n,s)}function _d(r,e){return HI(r.writeTree,r.treePath,e)}function zm(r,e,n,s){return GI(r.writeTree,r.treePath,e,n,s)}function Sl(r,e){return KI(r.writeTree,De(r.treePath,e))}function XI(r,e,n,s,l,u){return YI(r.writeTree,r.treePath,e,n,s,l,u)}function yd(r,e,n){return qI(r.writeTree,r.treePath,e,n)}function A_(r,e){return O_(De(r.treePath,e),r.writeTree)}function O_(r,e){return{treePath:r,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;L(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),L(s!==".priority","Only non-priority child changes can be tracked.");const l=this.changeMap.get(s);if(l){const u=l.type;if(n==="child_added"&&u==="child_removed")this.changeMap.set(s,Ds(s,e.snapshotNode,l.snapshotNode));else if(n==="child_removed"&&u==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&u==="child_changed")this.changeMap.set(s,xs(s,l.oldSnap));else if(n==="child_changed"&&u==="child_added")this.changeMap.set(s,yi(s,e.snapshotNode));else if(n==="child_changed"&&u==="child_changed")this.changeMap.set(s,Ds(s,e.snapshotNode,l.oldSnap));else throw Si("Illegal combination of changes: "+e+" occurred after "+l)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const x_=new ZI;class vd{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new kr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return yd(this.writes_,e,s)}}getChildAfterChild(e,n,s){const l=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Rr(this.viewCache_),u=XI(this.writes_,l,n,1,s,e);return u.length===0?null:u[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eC(r){return{filter:r}}function tC(r,e){L(e.eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),L(e.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed")}function nC(r,e,n,s,l){const u=new JI;let d,f;if(n.type===Ht.OVERWRITE){const g=n;g.source.fromUser?d=Uc(r,e,g.path,g.snap,s,l,u):(L(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered()&&!re(g.path),d=Il(r,e,g.path,g.snap,s,l,f,u))}else if(n.type===Ht.MERGE){const g=n;g.source.fromUser?d=iC(r,e,g.path,g.children,s,l,u):(L(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered(),d=jc(r,e,g.path,g.children,s,l,f,u))}else if(n.type===Ht.ACK_USER_WRITE){const g=n;g.revert?d=lC(r,e,g.path,s,l,u):d=sC(r,e,g.path,g.affectedTree,s,l,u)}else if(n.type===Ht.LISTEN_COMPLETE)d=oC(r,e,n.path,s,u);else throw Si("Unknown operation type: "+n.type);const p=u.getChanges();return rC(e,d,p),{viewCache:d,changes:p}}function rC(r,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const l=s.getNode().isLeafNode()||s.getNode().isEmpty(),u=Lc(r);(n.length>0||!r.eventCache.isFullyInitialized()||l&&!s.getNode().equals(u)||!s.getNode().getPriority().equals(u.getPriority()))&&n.push(C_(Lc(e)))}}function D_(r,e,n,s,l,u){const d=e.eventCache;if(Sl(s,n)!=null)return e;{let f,p;if(re(n))if(L(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=Rr(e),v=g instanceof K?g:K.EMPTY_NODE,y=_d(s,v);f=r.filter.updateFullNode(e.eventCache.getNode(),y,u)}else{const g=El(s,Rr(e));f=r.filter.updateFullNode(e.eventCache.getNode(),g,u)}else{const g=ee(n);if(g===".priority"){L(nr(n)===1,"Can't have a priority with additional path components");const v=d.getNode();p=e.serverCache.getNode();const y=zm(s,n,v,p);y!=null?f=r.filter.updatePriority(v,y):f=d.getNode()}else{const v=we(n);let y;if(d.isCompleteForChild(g)){p=e.serverCache.getNode();const E=zm(s,n,d.getNode(),p);E!=null?y=d.getNode().getImmediateChild(g).updateChild(v,E):y=d.getNode().getImmediateChild(g)}else y=yd(s,g,e.serverCache);y!=null?f=r.filter.updateChild(d.getNode(),g,y,v,l,u):f=d.getNode()}}return Es(e,f,d.isFullyInitialized()||re(n),r.filter.filtersNodes())}}function Il(r,e,n,s,l,u,d,f){const p=e.serverCache;let g;const v=d?r.filter:r.filter.getIndexedFilter();if(re(n))g=v.updateFullNode(p.getNode(),s,null);else if(v.filtersNodes()&&!p.isFiltered()){const R=p.getNode().updateChild(n,s);g=v.updateFullNode(p.getNode(),R,null)}else{const R=ee(n);if(!p.isCompleteForPath(n)&&nr(n)>1)return e;const O=we(n),M=p.getNode().getImmediateChild(R).updateChild(O,s);R===".priority"?g=v.updatePriority(p.getNode(),M):g=v.updateChild(p.getNode(),R,M,O,x_,null)}const y=k_(e,g,p.isFullyInitialized()||re(n),v.filtersNodes()),E=new vd(l,y,u);return D_(r,y,n,l,E,f)}function Uc(r,e,n,s,l,u,d){const f=e.eventCache;let p,g;const v=new vd(l,e,u);if(re(n))g=r.filter.updateFullNode(e.eventCache.getNode(),s,d),p=Es(e,g,!0,r.filter.filtersNodes());else{const y=ee(n);if(y===".priority")g=r.filter.updatePriority(e.eventCache.getNode(),s),p=Es(e,g,f.isFullyInitialized(),f.isFiltered());else{const E=we(n),R=f.getNode().getImmediateChild(y);let O;if(re(E))O=s;else{const b=v.getCompleteChild(y);b!=null?ld(E)===".priority"&&b.getChild(__(E)).isEmpty()?O=b:O=b.updateChild(E,s):O=K.EMPTY_NODE}if(R.equals(O))p=e;else{const b=r.filter.updateChild(f.getNode(),y,O,E,v,d);p=Es(e,b,f.isFullyInitialized(),r.filter.filtersNodes())}}}return p}function Wm(r,e){return r.eventCache.isCompleteForChild(e)}function iC(r,e,n,s,l,u,d){let f=e;return s.foreach((p,g)=>{const v=De(n,p);Wm(e,ee(v))&&(f=Uc(r,f,v,g,l,u,d))}),s.foreach((p,g)=>{const v=De(n,p);Wm(e,ee(v))||(f=Uc(r,f,v,g,l,u,d))}),f}function Bm(r,e,n){return n.foreach((s,l)=>{e=e.updateChild(s,l)}),e}function jc(r,e,n,s,l,u,d,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;re(n)?g=s:g=new ve(null).setTree(n,s);const v=e.serverCache.getNode();return g.children.inorderTraversal((y,E)=>{if(v.hasChild(y)){const R=e.serverCache.getNode().getImmediateChild(y),O=Bm(r,R,E);p=Il(r,p,new me(y),O,l,u,d,f)}}),g.children.inorderTraversal((y,E)=>{const R=!e.serverCache.isCompleteForChild(y)&&E.value===null;if(!v.hasChild(y)&&!R){const O=e.serverCache.getNode().getImmediateChild(y),b=Bm(r,O,E);p=Il(r,p,new me(y),b,l,u,d,f)}}),p}function sC(r,e,n,s,l,u,d){if(Sl(l,n)!=null)return e;const f=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(re(n)&&p.isFullyInitialized()||p.isCompleteForPath(n))return Il(r,e,n,p.getNode().getChild(n),l,u,f,d);if(re(n)){let g=new ve(null);return p.getNode().forEachChild(di,(v,y)=>{g=g.set(new me(v),y)}),jc(r,e,n,g,l,u,f,d)}else return e}else{let g=new ve(null);return s.foreach((v,y)=>{const E=De(n,v);p.isCompleteForPath(E)&&(g=g.set(v,p.getNode().getChild(E)))}),jc(r,e,n,g,l,u,f,d)}}function oC(r,e,n,s,l){const u=e.serverCache,d=k_(e,u.getNode(),u.isFullyInitialized()||re(n),u.isFiltered());return D_(r,d,n,s,x_,l)}function lC(r,e,n,s,l,u){let d;if(Sl(s,n)!=null)return e;{const f=new vd(s,e,l),p=e.eventCache.getNode();let g;if(re(n)||ee(n)===".priority"){let v;if(e.serverCache.isFullyInitialized())v=El(s,Rr(e));else{const y=e.serverCache.getNode();L(y instanceof K,"serverChildren would be complete if leaf node"),v=_d(s,y)}v=v,g=r.filter.updateFullNode(p,v,u)}else{const v=ee(n);let y=yd(s,v,e.serverCache);y==null&&e.serverCache.isCompleteForChild(v)&&(y=p.getImmediateChild(v)),y!=null?g=r.filter.updateChild(p,v,y,we(n),f,u):e.eventCache.getNode().hasChild(v)?g=r.filter.updateChild(p,v,K.EMPTY_NODE,we(n),f,u):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(d=El(s,Rr(e)),d.isLeafNode()&&(g=r.filter.updateFullNode(g,d,u)))}return d=e.serverCache.isFullyInitialized()||Sl(s,ce())!=null,Es(e,g,d,r.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,l=new dd(s.getIndex()),u=kI(s);this.processor_=eC(u);const d=n.serverCache,f=n.eventCache,p=l.updateFullNode(K.EMPTY_NODE,d.getNode(),null),g=u.updateFullNode(K.EMPTY_NODE,f.getNode(),null),v=new kr(p,d.isFullyInitialized(),l.filtersNodes()),y=new kr(g,f.isFullyInitialized(),u.filtersNodes());this.viewCache_=zl(y,v),this.eventGenerator_=new DI(this.query_)}get query(){return this.query_}}function uC(r){return r.viewCache_.serverCache.getNode()}function cC(r,e){const n=Rr(r.viewCache_);return n&&(r.query._queryParams.loadsAllData()||!re(e)&&!n.getImmediateChild(ee(e)).isEmpty())?n.getChild(e):null}function Vm(r){return r.eventRegistrations_.length===0}function dC(r,e){r.eventRegistrations_.push(e)}function $m(r,e,n){const s=[];if(n){L(e==null,"A cancel should cancel all event registrations.");const l=r.query._path;r.eventRegistrations_.forEach(u=>{const d=u.createCancelEvent(n,l);d&&s.push(d)})}if(e){let l=[];for(let u=0;u<r.eventRegistrations_.length;++u){const d=r.eventRegistrations_[u];if(!d.matches(e))l.push(d);else if(e.hasAnyCallback()){l=l.concat(r.eventRegistrations_.slice(u+1));break}}r.eventRegistrations_=l}else r.eventRegistrations_=[];return s}function Hm(r,e,n,s){e.type===Ht.MERGE&&e.source.queryId!==null&&(L(Rr(r.viewCache_),"We should always have a full cache before handling merges"),L(Lc(r.viewCache_),"Missing event cache, even though we have a server cache"));const l=r.viewCache_,u=nC(r.processor_,l,e,n,s);return tC(r.processor_,u.viewCache),L(u.viewCache.serverCache.isFullyInitialized()||!l.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),r.viewCache_=u.viewCache,L_(r,u.changes,u.viewCache.eventCache.getNode(),null)}function hC(r,e){const n=r.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Le,(u,d)=>{s.push(yi(u,d))}),n.isFullyInitialized()&&s.push(C_(n.getNode())),L_(r,s,n.getNode(),e)}function L_(r,e,n,s){const l=s?[s]:r.eventRegistrations_;return LI(r.eventGenerator_,e,n,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cl;class fC{constructor(){this.views=new Map}}function pC(r){L(!Cl,"__referenceConstructor has already been defined"),Cl=r}function mC(){return L(Cl,"Reference.ts has not been loaded"),Cl}function gC(r){return r.views.size===0}function wd(r,e,n,s){const l=e.source.queryId;if(l!==null){const u=r.views.get(l);return L(u!=null,"SyncTree gave us an op for an invalid query."),Hm(u,e,n,s)}else{let u=[];for(const d of r.views.values())u=u.concat(Hm(d,e,n,s));return u}}function _C(r,e,n,s,l){const u=e._queryIdentifier,d=r.views.get(u);if(!d){let f=El(n,l?s:null),p=!1;f?p=!0:s instanceof K?(f=_d(n,s),p=!1):(f=K.EMPTY_NODE,p=!1);const g=zl(new kr(f,p,!1),new kr(s,l,!1));return new aC(e,g)}return d}function yC(r,e,n,s,l,u){const d=_C(r,e,s,l,u);return r.views.has(e._queryIdentifier)||r.views.set(e._queryIdentifier,d),dC(d,n),hC(d,n)}function vC(r,e,n,s){const l=e._queryIdentifier,u=[];let d=[];const f=rr(r);if(l==="default")for(const[p,g]of r.views.entries())d=d.concat($m(g,n,s)),Vm(g)&&(r.views.delete(p),g.query._queryParams.loadsAllData()||u.push(g.query));else{const p=r.views.get(l);p&&(d=d.concat($m(p,n,s)),Vm(p)&&(r.views.delete(l),p.query._queryParams.loadsAllData()||u.push(p.query)))}return f&&!rr(r)&&u.push(new(mC())(e._repo,e._path)),{removed:u,events:d}}function M_(r){const e=[];for(const n of r.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function hi(r,e){let n=null;for(const s of r.views.values())n=n||cC(s,e);return n}function b_(r,e){if(e._queryParams.loadsAllData())return Wl(r);{const s=e._queryIdentifier;return r.views.get(s)}}function F_(r,e){return b_(r,e)!=null}function rr(r){return Wl(r)!=null}function Wl(r){for(const e of r.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tl;function wC(r){L(!Tl,"__referenceConstructor has already been defined"),Tl=r}function EC(){return L(Tl,"Reference.ts has not been loaded"),Tl}let SC=1;class Gm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ve(null),this.pendingWriteTree_=QI(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function U_(r,e,n,s,l){return UI(r.pendingWriteTree_,e,n,s,l),l?ki(r,new Tr(fd(),e,n)):[]}function IC(r,e,n,s){jI(r.pendingWriteTree_,e,n,s);const l=ve.fromObject(n);return ki(r,new vi(fd(),e,l))}function Xn(r,e,n=!1){const s=zI(r.pendingWriteTree_,e);if(WI(r.pendingWriteTree_,e)){let u=new ve(null);return s.snap!=null?u=u.set(ce(),!0):Je(s.children,d=>{u=u.set(new me(d),!0)}),ki(r,new wl(s.path,u,n))}else return[]}function Bl(r,e,n){return ki(r,new Tr(pd(),e,n))}function CC(r,e,n){const s=ve.fromObject(n);return ki(r,new vi(pd(),e,s))}function TC(r,e){return ki(r,new Ms(pd(),e))}function kC(r,e,n){const s=Sd(r,n);if(s){const l=Id(s),u=l.path,d=l.queryId,f=gt(u,e),p=new Ms(md(d),f);return Cd(r,u,p)}else return[]}function zc(r,e,n,s,l=!1){const u=e._path,d=r.syncPointTree_.get(u);let f=[];if(d&&(e._queryIdentifier==="default"||F_(d,e))){const p=vC(d,e,n,s);gC(d)&&(r.syncPointTree_=r.syncPointTree_.remove(u));const g=p.removed;if(f=p.events,!l){const v=g.findIndex(E=>E._queryParams.loadsAllData())!==-1,y=r.syncPointTree_.findOnPath(u,(E,R)=>rr(R));if(v&&!y){const E=r.syncPointTree_.subtree(u);if(!E.isEmpty()){const R=PC(E);for(let O=0;O<R.length;++O){const b=R[O],M=b.query,Ee=W_(r,b);r.listenProvider_.startListening(Is(M),kl(r,M),Ee.hashFn,Ee.onComplete)}}}!y&&g.length>0&&!s&&(v?r.listenProvider_.stopListening(Is(e),null):g.forEach(E=>{const R=r.queryToTagMap.get(Vl(E));r.listenProvider_.stopListening(Is(E),R)}))}AC(r,g)}return f}function RC(r,e,n,s){const l=Sd(r,s);if(l!=null){const u=Id(l),d=u.path,f=u.queryId,p=gt(d,e),g=new Tr(md(f),p,n);return Cd(r,d,g)}else return[]}function NC(r,e,n,s){const l=Sd(r,s);if(l){const u=Id(l),d=u.path,f=u.queryId,p=gt(d,e),g=ve.fromObject(n),v=new vi(md(f),p,g);return Cd(r,d,v)}else return[]}function qm(r,e,n,s=!1){const l=e._path;let u=null,d=!1;r.syncPointTree_.foreachOnPath(l,(E,R)=>{const O=gt(E,l);u=u||hi(R,O),d=d||rr(R)});let f=r.syncPointTree_.get(l);f?(d=d||rr(f),u=u||hi(f,ce())):(f=new fC,r.syncPointTree_=r.syncPointTree_.set(l,f));let p;u!=null?p=!0:(p=!1,u=K.EMPTY_NODE,r.syncPointTree_.subtree(l).foreachChild((R,O)=>{const b=hi(O,ce());b&&(u=u.updateImmediateChild(R,b))}));const g=F_(f,e);if(!g&&!e._queryParams.loadsAllData()){const E=Vl(e);L(!r.queryToTagMap.has(E),"View does not exist, but we have a tag");const R=OC();r.queryToTagMap.set(E,R),r.tagToQueryMap.set(R,E)}const v=gd(r.pendingWriteTree_,l);let y=yC(f,e,n,v,u,p);if(!g&&!d&&!s){const E=b_(f,e);y=y.concat(xC(r,e,E))}return y}function Ed(r,e,n){const l=r.pendingWriteTree_,u=r.syncPointTree_.findOnPath(e,(d,f)=>{const p=gt(d,e),g=hi(f,p);if(g)return g});return P_(l,e,u,n,!0)}function ki(r,e){return j_(e,r.syncPointTree_,null,gd(r.pendingWriteTree_,ce()))}function j_(r,e,n,s){if(re(r.path))return z_(r,e,n,s);{const l=e.get(ce());n==null&&l!=null&&(n=hi(l,ce()));let u=[];const d=ee(r.path),f=r.operationForChild(d),p=e.children.get(d);if(p&&f){const g=n?n.getImmediateChild(d):null,v=A_(s,d);u=u.concat(j_(f,p,g,v))}return l&&(u=u.concat(wd(l,r,s,n))),u}}function z_(r,e,n,s){const l=e.get(ce());n==null&&l!=null&&(n=hi(l,ce()));let u=[];return e.children.inorderTraversal((d,f)=>{const p=n?n.getImmediateChild(d):null,g=A_(s,d),v=r.operationForChild(d);v&&(u=u.concat(z_(v,f,p,g)))}),l&&(u=u.concat(wd(l,r,s,n))),u}function W_(r,e){const n=e.query,s=kl(r,n);return{hashFn:()=>(uC(e)||K.EMPTY_NODE).hash(),onComplete:l=>{if(l==="ok")return s?kC(r,n._path,s):TC(r,n._path);{const u=CS(l,n);return zc(r,n,null,u)}}}}function kl(r,e){const n=Vl(e);return r.queryToTagMap.get(n)}function Vl(r){return r._path.toString()+"$"+r._queryIdentifier}function Sd(r,e){return r.tagToQueryMap.get(e)}function Id(r){const e=r.indexOf("$");return L(e!==-1&&e<r.length-1,"Bad queryKey."),{queryId:r.substr(e+1),path:new me(r.substr(0,e))}}function Cd(r,e,n){const s=r.syncPointTree_.get(e);L(s,"Missing sync point for query tag that we're tracking");const l=gd(r.pendingWriteTree_,e);return wd(s,n,l,null)}function PC(r){return r.fold((e,n,s)=>{if(n&&rr(n))return[Wl(n)];{let l=[];return n&&(l=M_(n)),Je(s,(u,d)=>{l=l.concat(d)}),l}})}function Is(r){return r._queryParams.loadsAllData()&&!r._queryParams.isDefault()?new(EC())(r._repo,r._path):r}function AC(r,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const l=Vl(s),u=r.queryToTagMap.get(l);r.queryToTagMap.delete(l),r.tagToQueryMap.delete(u)}}}function OC(){return SC++}function xC(r,e,n){const s=e._path,l=kl(r,e),u=W_(r,n),d=r.listenProvider_.startListening(Is(e),l,u.hashFn,u.onComplete),f=r.syncPointTree_.subtree(s);if(l)L(!rr(f.value),"If we're adding a query, it shouldn't be shadowed");else{const p=f.fold((g,v,y)=>{if(!re(g)&&v&&rr(v))return[Wl(v).query];{let E=[];return v&&(E=E.concat(M_(v).map(R=>R.query))),Je(y,(R,O)=>{E=E.concat(O)}),E}});for(let g=0;g<p.length;++g){const v=p[g];r.listenProvider_.stopListening(Is(v),kl(r,v))}}return d}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Td(n)}node(){return this.node_}}class kd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=De(this.path_,e);return new kd(this.syncTree_,n)}node(){return Ed(this.syncTree_,this.path_)}}const DC=function(r){return r=r||{},r.timestamp=r.timestamp||new Date().getTime(),r},Km=function(r,e,n){if(!r||typeof r!="object")return r;if(L(".sv"in r,"Unexpected leaf node or priority contents"),typeof r[".sv"]=="string")return LC(r[".sv"],e,n);if(typeof r[".sv"]=="object")return MC(r[".sv"],e);L(!1,"Unexpected server value: "+JSON.stringify(r,null,2))},LC=function(r,e,n){switch(r){case"timestamp":return n.timestamp;default:L(!1,"Unexpected server value: "+r)}},MC=function(r,e,n){r.hasOwnProperty("increment")||L(!1,"Unexpected server value: "+JSON.stringify(r,null,2));const s=r.increment;typeof s!="number"&&L(!1,"Unexpected increment value: "+s);const l=e.node();if(L(l!==null&&typeof l<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!l.isLeafNode())return s;const d=l.getValue();return typeof d!="number"?s:d+s},B_=function(r,e,n,s){return Rd(e,new kd(n,r),s)},V_=function(r,e,n){return Rd(r,new Td(e),n)};function Rd(r,e,n){const s=r.getPriority().val(),l=Km(s,e.getImmediateChild(".priority"),n);let u;if(r.isLeafNode()){const d=r,f=Km(d.getValue(),e,n);return f!==d.getValue()||l!==d.getPriority().val()?new $e(f,Ge(l)):r}else{const d=r;return u=d,l!==d.getPriority().val()&&(u=u.updatePriority(new $e(l))),d.forEachChild(Le,(f,p)=>{const g=Rd(p,e.getImmediateChild(f),n);g!==p&&(u=u.updateImmediateChild(f,g))}),u}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Pd(r,e){let n=e instanceof me?e:new me(e),s=r,l=ee(n);for(;l!==null;){const u=gi(s.node.children,l)||{children:{},childCount:0};s=new Nd(l,s,u),n=we(n),l=ee(n)}return s}function Ri(r){return r.node.value}function $_(r,e){r.node.value=e,Wc(r)}function H_(r){return r.node.childCount>0}function bC(r){return Ri(r)===void 0&&!H_(r)}function $l(r,e){Je(r.node.children,(n,s)=>{e(new Nd(n,r,s))})}function G_(r,e,n,s){n&&!s&&e(r),$l(r,l=>{G_(l,e,!0,s)}),n&&s&&e(r)}function FC(r,e,n){let s=r.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ws(r){return new me(r.parent===null?r.name:Ws(r.parent)+"/"+r.name)}function Wc(r){r.parent!==null&&UC(r.parent,r.name,r)}function UC(r,e,n){const s=bC(n),l=an(r.node.children,e);s&&l?(delete r.node.children[e],r.node.childCount--,Wc(r)):!s&&!l&&(r.node.children[e]=n.node,r.node.childCount++,Wc(r))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC=/[\[\].#$\/\u0000-\u001F\u007F]/,zC=/[\[\].#$\u0000-\u001F\u007F]/,_c=10*1024*1024,Ad=function(r){return typeof r=="string"&&r.length!==0&&!jC.test(r)},q_=function(r){return typeof r=="string"&&r.length!==0&&!zC.test(r)},WC=function(r){return r&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),q_(r)},BC=function(r){return r===null||typeof r=="string"||typeof r=="number"&&!nd(r)||r&&typeof r=="object"&&an(r,".sv")},VC=function(r,e,n,s){Hl(bl(r,"value"),e,n)},Hl=function(r,e,n){const s=n instanceof me?new iI(n,r):n;if(e===void 0)throw new Error(r+"contains undefined "+Er(s));if(typeof e=="function")throw new Error(r+"contains a function "+Er(s)+" with contents = "+e.toString());if(nd(e))throw new Error(r+"contains "+e.toString()+" "+Er(s));if(typeof e=="string"&&e.length>_c/3&&Fl(e)>_c)throw new Error(r+"contains a string greater than "+_c+" utf8 bytes "+Er(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let l=!1,u=!1;if(Je(e,(d,f)=>{if(d===".value")l=!0;else if(d!==".priority"&&d!==".sv"&&(u=!0,!Ad(d)))throw new Error(r+" contains an invalid key ("+d+") "+Er(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);sI(s,d),Hl(r,f,s),oI(s)}),l&&u)throw new Error(r+' contains ".value" child '+Er(s)+" in addition to actual children.")}},$C=function(r,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const u=Os(s);for(let d=0;d<u.length;d++)if(!(u[d]===".priority"&&d===u.length-1)){if(!Ad(u[d]))throw new Error(r+"contains an invalid key ("+u[d]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(rI);let l=null;for(n=0;n<e.length;n++){if(s=e[n],l!==null&&Lt(l,s))throw new Error(r+"contains a path "+l.toString()+" that is ancestor of another path "+s.toString());l=s}},HC=function(r,e,n,s){const l=bl(r,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(l+" must be an object containing the children to replace.");const u=[];Je(e,(d,f)=>{const p=new me(d);if(Hl(l,f,De(n,p)),ld(p)===".priority"&&!BC(f))throw new Error(l+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");u.push(p)}),$C(l,u)},K_=function(r,e,n,s){if(!q_(n))throw new Error(bl(r,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},GC=function(r,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),K_(r,e,n)},Y_=function(r,e){if(ee(e)===".info")throw new Error(r+" failed = Can't modify data under /.info/")},qC=function(r,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ad(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!WC(n))throw new Error(bl(r,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Gl(r,e){let n=null;for(let s=0;s<e.length;s++){const l=e[s],u=l.getPath();n!==null&&!ad(u,n.path)&&(r.eventLists_.push(n),n=null),n===null&&(n={events:[],path:u}),n.events.push(l)}n&&r.eventLists_.push(n)}function Q_(r,e,n){Gl(r,n),X_(r,s=>ad(s,e))}function Yt(r,e,n){Gl(r,n),X_(r,s=>Lt(s,e)||Lt(e,s))}function X_(r,e){r.recursionDepth_++;let n=!0;for(let s=0;s<r.eventLists_.length;s++){const l=r.eventLists_[s];if(l){const u=l.path;e(u)?(YC(r.eventLists_[s]),r.eventLists_[s]=null):n=!1}}n&&(r.eventLists_=[]),r.recursionDepth_--}function YC(r){for(let e=0;e<r.events.length;e++){const n=r.events[e];if(n!==null){r.events[e]=null;const s=n.getEventRunner();vs&&Xe("event: "+n.toString()),Ti(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QC="repo_interrupt",XC=25;class JC{constructor(e,n,s,l){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=l,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new KC,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=vl(),this.transactionQueueTree_=new Nd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ZC(r,e,n){if(r.stats_=sd(r.repoInfo_),r.forceRestClient_||NS())r.server_=new yl(r.repoInfo_,(s,l,u,d)=>{Ym(r,s,l,u,d)},r.authTokenProvider_,r.appCheckProvider_),setTimeout(()=>Qm(r,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{qe(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}r.persistentConnection_=new Sn(r.repoInfo_,e,(s,l,u,d)=>{Ym(r,s,l,u,d)},s=>{Qm(r,s)},s=>{tT(r,s)},r.authTokenProvider_,r.appCheckProvider_,n),r.server_=r.persistentConnection_}r.authTokenProvider_.addTokenChangeListener(s=>{r.server_.refreshAuthToken(s)}),r.appCheckProvider_.addTokenChangeListener(s=>{r.server_.refreshAppCheckToken(s.token)}),r.statsReporter_=DS(r.repoInfo_,()=>new xI(r.stats_,r.server_)),r.infoData_=new RI,r.infoSyncTree_=new Gm({startListening:(s,l,u,d)=>{let f=[];const p=r.infoData_.getNode(s._path);return p.isEmpty()||(f=Bl(r.infoSyncTree_,s._path,p),setTimeout(()=>{d("ok")},0)),f},stopListening:()=>{}}),Od(r,"connected",!1),r.serverSyncTree_=new Gm({startListening:(s,l,u,d)=>(r.server_.listen(s,u,l,(f,p)=>{const g=d(f,p);Yt(r.eventQueue_,s._path,g)}),[]),stopListening:(s,l)=>{r.server_.unlisten(s,l)}})}function eT(r){const n=r.infoData_.getNode(new me(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ql(r){return DC({timestamp:eT(r)})}function Ym(r,e,n,s,l){r.dataUpdateCount++;const u=new me(e);n=r.interceptServerDataCallback_?r.interceptServerDataCallback_(e,n):n;let d=[];if(l)if(s){const p=fl(n,g=>Ge(g));d=NC(r.serverSyncTree_,u,p,l)}else{const p=Ge(n);d=RC(r.serverSyncTree_,u,p,l)}else if(s){const p=fl(n,g=>Ge(g));d=CC(r.serverSyncTree_,u,p)}else{const p=Ge(n);d=Bl(r.serverSyncTree_,u,p)}let f=u;d.length>0&&(f=Ei(r,u)),Yt(r.eventQueue_,f,d)}function Qm(r,e){Od(r,"connected",e),e===!1&&iT(r)}function tT(r,e){Je(e,(n,s)=>{Od(r,n,s)})}function Od(r,e,n){const s=new me("/.info/"+e),l=Ge(n);r.infoData_.updateSnapshot(s,l);const u=Bl(r.infoSyncTree_,s,l);Yt(r.eventQueue_,s,u)}function xd(r){return r.nextWriteId_++}function nT(r,e,n,s,l){Kl(r,"set",{path:e.toString(),value:n,priority:s});const u=ql(r),d=Ge(n,s),f=Ed(r.serverSyncTree_,e),p=V_(d,f,u),g=xd(r),v=U_(r.serverSyncTree_,e,p,g,!0);Gl(r.eventQueue_,v),r.server_.put(e.toString(),d.val(!0),(E,R)=>{const O=E==="ok";O||lt("set at "+e+" failed: "+E);const b=Xn(r.serverSyncTree_,g,!O);Yt(r.eventQueue_,e,b),Bc(r,l,E,R)});const y=Ld(r,e);Ei(r,y),Yt(r.eventQueue_,y,[])}function rT(r,e,n,s){Kl(r,"update",{path:e.toString(),value:n});let l=!0;const u=ql(r),d={};if(Je(n,(f,p)=>{l=!1,d[f]=B_(De(e,f),Ge(p),r.serverSyncTree_,u)}),l)Xe("update() called with empty data.  Don't do anything."),Bc(r,s,"ok",void 0);else{const f=xd(r),p=IC(r.serverSyncTree_,e,d,f);Gl(r.eventQueue_,p),r.server_.merge(e.toString(),n,(g,v)=>{const y=g==="ok";y||lt("update at "+e+" failed: "+g);const E=Xn(r.serverSyncTree_,f,!y),R=E.length>0?Ei(r,e):e;Yt(r.eventQueue_,R,E),Bc(r,s,g,v)}),Je(n,g=>{const v=Ld(r,De(e,g));Ei(r,v)}),Yt(r.eventQueue_,e,[])}}function iT(r){Kl(r,"onDisconnectEvents");const e=ql(r),n=vl();Dc(r.onDisconnect_,ce(),(l,u)=>{const d=B_(l,u,r.serverSyncTree_,e);T_(n,l,d)});let s=[];Dc(n,ce(),(l,u)=>{s=s.concat(Bl(r.serverSyncTree_,l,u));const d=Ld(r,l);Ei(r,d)}),r.onDisconnect_=vl(),Yt(r.eventQueue_,ce(),s)}function sT(r,e,n){let s;ee(e._path)===".info"?s=qm(r.infoSyncTree_,e,n):s=qm(r.serverSyncTree_,e,n),Q_(r.eventQueue_,e._path,s)}function oT(r,e,n){let s;ee(e._path)===".info"?s=zc(r.infoSyncTree_,e,n):s=zc(r.serverSyncTree_,e,n),Q_(r.eventQueue_,e._path,s)}function lT(r){r.persistentConnection_&&r.persistentConnection_.interrupt(QC)}function Kl(r,...e){let n="";r.persistentConnection_&&(n=r.persistentConnection_.id+":"),Xe(n,...e)}function Bc(r,e,n,s){e&&Ti(()=>{if(n==="ok")e(null);else{const l=(n||"error").toUpperCase();let u=l;s&&(u+=": "+s);const d=new Error(u);d.code=l,e(d)}})}function J_(r,e,n){return Ed(r.serverSyncTree_,e,n)||K.EMPTY_NODE}function Dd(r,e=r.transactionQueueTree_){if(e||Yl(r,e),Ri(e)){const n=ey(r,e);L(n.length>0,"Sending zero length transaction queue"),n.every(l=>l.status===0)&&aT(r,Ws(e),n)}else H_(e)&&$l(e,n=>{Dd(r,n)})}function aT(r,e,n){const s=n.map(g=>g.currentWriteId),l=J_(r,e,s);let u=l;const d=l.hash();for(let g=0;g<n.length;g++){const v=n[g];L(v.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),v.status=1,v.retryCount++;const y=gt(e,v.path);u=u.updateChild(y,v.currentOutputSnapshotRaw)}const f=u.val(!0),p=e;r.server_.put(p.toString(),f,g=>{Kl(r,"transaction put response",{path:p.toString(),status:g});let v=[];if(g==="ok"){const y=[];for(let E=0;E<n.length;E++)n[E].status=2,v=v.concat(Xn(r.serverSyncTree_,n[E].currentWriteId)),n[E].onComplete&&y.push(()=>n[E].onComplete(null,!0,n[E].currentOutputSnapshotResolved)),n[E].unwatcher();Yl(r,Pd(r.transactionQueueTree_,e)),Dd(r,r.transactionQueueTree_),Yt(r.eventQueue_,e,v);for(let E=0;E<y.length;E++)Ti(y[E])}else{if(g==="datastale")for(let y=0;y<n.length;y++)n[y].status===3?n[y].status=4:n[y].status=0;else{lt("transaction at "+p.toString()+" failed: "+g);for(let y=0;y<n.length;y++)n[y].status=4,n[y].abortReason=g}Ei(r,e)}},d)}function Ei(r,e){const n=Z_(r,e),s=Ws(n),l=ey(r,n);return uT(r,l,s),s}function uT(r,e,n){if(e.length===0)return;const s=[];let l=[];const d=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const p=e[f],g=gt(n,p.path);let v=!1,y;if(L(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)v=!0,y=p.abortReason,l=l.concat(Xn(r.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=XC)v=!0,y="maxretry",l=l.concat(Xn(r.serverSyncTree_,p.currentWriteId,!0));else{const E=J_(r,p.path,d);p.currentInputSnapshot=E;const R=e[f].update(E.val());if(R!==void 0){Hl("transaction failed: Data returned ",R,p.path);let O=Ge(R);typeof R=="object"&&R!=null&&an(R,".priority")||(O=O.updatePriority(E.getPriority()));const M=p.currentWriteId,Ee=ql(r),Ae=V_(O,E,Ee);p.currentOutputSnapshotRaw=O,p.currentOutputSnapshotResolved=Ae,p.currentWriteId=xd(r),d.splice(d.indexOf(M),1),l=l.concat(U_(r.serverSyncTree_,p.path,Ae,p.currentWriteId,p.applyLocally)),l=l.concat(Xn(r.serverSyncTree_,M,!0))}else v=!0,y="nodata",l=l.concat(Xn(r.serverSyncTree_,p.currentWriteId,!0))}Yt(r.eventQueue_,n,l),l=[],v&&(e[f].status=2,function(E){setTimeout(E,Math.floor(0))}(e[f].unwatcher),e[f].onComplete&&(y==="nodata"?s.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):s.push(()=>e[f].onComplete(new Error(y),!1,null))))}Yl(r,r.transactionQueueTree_);for(let f=0;f<s.length;f++)Ti(s[f]);Dd(r,r.transactionQueueTree_)}function Z_(r,e){let n,s=r.transactionQueueTree_;for(n=ee(e);n!==null&&Ri(s)===void 0;)s=Pd(s,n),e=we(e),n=ee(e);return s}function ey(r,e){const n=[];return ty(r,e,n),n.sort((s,l)=>s.order-l.order),n}function ty(r,e,n){const s=Ri(e);if(s)for(let l=0;l<s.length;l++)n.push(s[l]);$l(e,l=>{ty(r,l,n)})}function Yl(r,e){const n=Ri(e);if(n){let s=0;for(let l=0;l<n.length;l++)n[l].status!==2&&(n[s]=n[l],s++);n.length=s,$_(e,n.length>0?n:void 0)}$l(e,s=>{Yl(r,s)})}function Ld(r,e){const n=Ws(Z_(r,e)),s=Pd(r.transactionQueueTree_,e);return FC(s,l=>{yc(r,l)}),yc(r,s),G_(s,l=>{yc(r,l)}),n}function yc(r,e){const n=Ri(e);if(n){const s=[];let l=[],u=-1;for(let d=0;d<n.length;d++)n[d].status===3||(n[d].status===1?(L(u===d-1,"All SENT items should be at beginning of queue."),u=d,n[d].status=3,n[d].abortReason="set"):(L(n[d].status===0,"Unexpected transaction status in abort"),n[d].unwatcher(),l=l.concat(Xn(r.serverSyncTree_,n[d].currentWriteId,!0)),n[d].onComplete&&s.push(n[d].onComplete.bind(null,new Error("set"),!1,null))));u===-1?$_(e,void 0):n.length=u+1,Yt(r.eventQueue_,Ws(e),l);for(let d=0;d<s.length;d++)Ti(s[d])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cT(r){let e="";const n=r.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let l=n[s];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch{}e+="/"+l}return e}function dT(r){const e={};r.charAt(0)==="?"&&(r=r.substring(1));for(const n of r.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):lt(`Invalid query segment '${n}' in query '${r}'`)}return e}const Xm=function(r,e){const n=hT(r),s=n.namespace;n.domain==="firebase.com"&&Cn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Cn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||vS();const l=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new a_(n.host,n.secure,s,l,e,"",s!==n.subdomain),path:new me(n.pathString)}},hT=function(r){let e="",n="",s="",l="",u="",d=!0,f="https",p=443;if(typeof r=="string"){let g=r.indexOf("//");g>=0&&(f=r.substring(0,g-1),r=r.substring(g+2));let v=r.indexOf("/");v===-1&&(v=r.length);let y=r.indexOf("?");y===-1&&(y=r.length),e=r.substring(0,Math.min(v,y)),v<y&&(l=cT(r.substring(v,y)));const E=dT(r.substring(Math.min(r.length,y)));g=e.indexOf(":"),g>=0?(d=f==="https"||f==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const R=e.slice(0,g);if(R.toLowerCase()==="localhost")n="localhost";else if(R.split(".").length<=2)n=R;else{const O=e.indexOf(".");s=e.substring(0,O).toLowerCase(),n=e.substring(O+1),u=s}"ns"in E&&(u=E.ns)}return{host:e,port:p,domain:n,subdomain:s,secure:d,scheme:f,pathString:l,namespace:u}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e,n,s,l){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=l}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+qe(this.snapshot.exportVal())}}class pT{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return L(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(e,n,s,l){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=l}get key(){return re(this._path)?null:ld(this._path)}get ref(){return new sr(this._repo,this._path)}get _queryIdentifier(){const e=bm(this._queryParams),n=rd(e);return n==="{}"?"default":n}get _queryObject(){return bm(this._queryParams)}isEqual(e){if(e=kt(e),!(e instanceof Md))return!1;const n=this._repo===e._repo,s=ad(this._path,e._path),l=this._queryIdentifier===e._queryIdentifier;return n&&s&&l}toJSON(){return this.toString()}toString(){return this._repo.toString()+nI(this._path)}}class sr extends Md{constructor(e,n){super(e,n,new hd,!1)}get parent(){const e=__(this._path);return e===null?null:new sr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Rl{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new me(e),s=Vc(this.ref,e);return new Rl(this._node.getChild(n),s,Le)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,l)=>e(new Rl(l,Vc(this.ref,s),Le)))}hasChild(e){const n=new me(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ql(r,e){return r=kt(r),r._checkNotDeleted("ref"),e!==void 0?Vc(r._root,e):r._root}function Vc(r,e){return r=kt(r),ee(r._path)===null?GC("child","path",e):K_("child","path",e),new sr(r._repo,De(r._path,e))}function gT(r){return Y_("remove",r._path),ny(r,null)}function ny(r,e){r=kt(r),Y_("set",r._path),VC("set",e,r._path);const n=new Fs;return nT(r._repo,r._path,e,null,n.wrapCallback(()=>{})),n.promise}function _T(r,e){HC("update",e,r._path);const n=new Fs;return rT(r._repo,r._path,e,n.wrapCallback(()=>{})),n.promise}class bd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new fT("value",this,new Rl(e.snapshotNode,new sr(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new pT(this,e,n):null}matches(e){return e instanceof bd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function yT(r,e,n,s,l){const u=new mT(n,void 0),d=new bd(u);return sT(r._repo,r,d),()=>oT(r._repo,r,d)}function vT(r,e,n,s){return yT(r,"value",e)}pC(sr);wC(sr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT="FIREBASE_DATABASE_EMULATOR_HOST",$c={};let ET=!1;function ST(r,e,n,s){r.repoInfo_=new a_(`${e}:${n}`,!1,r.repoInfo_.namespace,r.repoInfo_.webSocketOnly,r.repoInfo_.nodeAdmin,r.repoInfo_.persistenceKey,r.repoInfo_.includeNamespaceInQueryParams,!0),s&&(r.authTokenProvider_=s)}function IT(r,e,n,s,l){let u=s||r.options.databaseURL;u===void 0&&(r.options.projectId||Cn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Xe("Using default host for project ",r.options.projectId),u=`${r.options.projectId}-default-rtdb.firebaseio.com`);let d=Xm(u,l),f=d.repoInfo,p;typeof process<"u"&&ym&&(p=ym[wT]),p?(u=`http://${p}?ns=${f.namespace}`,d=Xm(u,l),f=d.repoInfo):d.repoInfo.secure;const g=new AS(r.name,r.options,e);qC("Invalid Firebase Database URL",d),re(d.path)||Cn("Database URL must point to the root of a Firebase Database (not including a child path).");const v=TT(f,r,g,new PS(r.name,n));return new kT(v,r)}function CT(r,e){const n=$c[e];(!n||n[r.key]!==r)&&Cn(`Database ${e}(${r.repoInfo_}) has already been deleted.`),lT(r),delete n[r.key]}function TT(r,e,n,s){let l=$c[e.name];l||(l={},$c[e.name]=l);let u=l[r.toURLString()];return u&&Cn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),u=new JC(r,ET,n,s),l[r.toURLString()]=u,u}class kT{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ZC(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new sr(this._repo,ce())),this._rootInternal}_delete(){return this._rootInternal!==null&&(CT(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Cn("Cannot call "+e+" on a deleted database.")}}function RT(r=td(),e){const n=xr(r,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=B0("database");s&&NT(n,...s)}return n}function NT(r,e,n,s={}){r=kt(r),r._checkNotDeleted("useEmulator"),r._instanceStarted&&Cn("Cannot call useEmulator() after instance has already been initialized.");const l=r._repoInternal;let u;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&Cn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new ol(ol.OWNER);else if(s.mockUserToken){const d=typeof s.mockUserToken=="string"?s.mockUserToken:V0(s.mockUserToken,r.app.options.projectId);u=new ol(d)}ST(l,e,n,u)}/**
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
 */function PT(r){fS(Ci),on(new Kt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("auth-internal"),u=e.getProvider("app-check-internal");return IT(s,l,u,n)},"PUBLIC").setMultipleInstances(!0)),Mt(vm,wm,r),Mt(vm,wm,"esm2017")}Sn.prototype.simpleListen=function(r,e){this.sendRequest("q",{p:r},e)};Sn.prototype.echo=function(r,e){this.sendRequest("echo",{d:r},e)};PT();var AT="firebase",OT="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mt(AT,OT,"app");const ry="@firebase/installations",Fd="0.6.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy=1e4,sy=`w:${Fd}`,oy="FIS_v2",xT="https://firebaseinstallations.googleapis.com/v1",DT=60*60*1e3,LT="installations",MT="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Nr=new Or(LT,MT,bT);function ly(r){return r instanceof ln&&r.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay({projectId:r}){return`${xT}/projects/${r}/installations`}function uy(r){return{token:r.token,requestStatus:2,expiresIn:UT(r.expiresIn),creationTime:Date.now()}}async function cy(r,e){const s=(await e.json()).error;return Nr.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function dy({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function FT(r,{refreshToken:e}){const n=dy(r);return n.append("Authorization",jT(e)),n}async function hy(r){const e=await r();return e.status>=500&&e.status<600?r():e}function UT(r){return Number(r.replace("s","000"))}function jT(r){return`${oy} ${r}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zT({appConfig:r,heartbeatServiceProvider:e},{fid:n}){const s=ay(r),l=dy(r),u=e.getImmediate({optional:!0});if(u){const g=await u.getHeartbeatsHeader();g&&l.append("x-firebase-client",g)}const d={fid:n,authVersion:oy,appId:r.appId,sdkVersion:sy},f={method:"POST",headers:l,body:JSON.stringify(d)},p=await hy(()=>fetch(s,f));if(p.ok){const g=await p.json();return{fid:g.fid||n,registrationStatus:2,refreshToken:g.refreshToken,authToken:uy(g.authToken)}}else throw await cy("Create Installation",p)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fy(r){return new Promise(e=>{setTimeout(e,r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WT(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT=/^[cdef][\w-]{21}$/,Hc="";function VT(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=$T(r);return BT.test(n)?n:Hc}catch{return Hc}}function $T(r){return WT(r).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const py=new Map;function my(r,e){const n=Xl(r);gy(n,e),HT(n,e)}function gy(r,e){const n=py.get(r);if(n)for(const s of n)s(e)}function HT(r,e){const n=GT();n&&n.postMessage({key:r,fid:e}),qT()}let Ir=null;function GT(){return!Ir&&"BroadcastChannel"in self&&(Ir=new BroadcastChannel("[Firebase] FID Change"),Ir.onmessage=r=>{gy(r.data.key,r.data.fid)}),Ir}function qT(){py.size===0&&Ir&&(Ir.close(),Ir=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KT="firebase-installations-database",YT=1,Pr="firebase-installations-store";let vc=null;function Ud(){return vc||(vc=$g(KT,YT,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(Pr)}}})),vc}async function Nl(r,e){const n=Xl(r),l=(await Ud()).transaction(Pr,"readwrite"),u=l.objectStore(Pr),d=await u.get(n);return await u.put(e,n),await l.done,(!d||d.fid!==e.fid)&&my(r,e.fid),e}async function _y(r){const e=Xl(r),s=(await Ud()).transaction(Pr,"readwrite");await s.objectStore(Pr).delete(e),await s.done}async function Jl(r,e){const n=Xl(r),l=(await Ud()).transaction(Pr,"readwrite"),u=l.objectStore(Pr),d=await u.get(n),f=e(d);return f===void 0?await u.delete(n):await u.put(f,n),await l.done,f&&(!d||d.fid!==f.fid)&&my(r,f.fid),f}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jd(r){let e;const n=await Jl(r.appConfig,s=>{const l=QT(s),u=XT(r,l);return e=u.registrationPromise,u.installationEntry});return n.fid===Hc?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function QT(r){const e=r||{fid:VT(),registrationStatus:0};return yy(e)}function XT(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const l=Promise.reject(Nr.create("app-offline"));return{installationEntry:e,registrationPromise:l}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=JT(r,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:ZT(r)}:{installationEntry:e}}async function JT(r,e){try{const n=await zT(r,e);return Nl(r.appConfig,n)}catch(n){throw ly(n)&&n.customData.serverCode===409?await _y(r.appConfig):await Nl(r.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function ZT(r){let e=await Jm(r.appConfig);for(;e.registrationStatus===1;)await fy(100),e=await Jm(r.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await jd(r);return s||n}return e}function Jm(r){return Jl(r,e=>{if(!e)throw Nr.create("installation-not-found");return yy(e)})}function yy(r){return ek(r)?{fid:r.fid,registrationStatus:0}:r}function ek(r){return r.registrationStatus===1&&r.registrationTime+iy<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tk({appConfig:r,heartbeatServiceProvider:e},n){const s=nk(r,n),l=FT(r,n),u=e.getImmediate({optional:!0});if(u){const g=await u.getHeartbeatsHeader();g&&l.append("x-firebase-client",g)}const d={installation:{sdkVersion:sy,appId:r.appId}},f={method:"POST",headers:l,body:JSON.stringify(d)},p=await hy(()=>fetch(s,f));if(p.ok){const g=await p.json();return uy(g)}else throw await cy("Generate Auth Token",p)}function nk(r,{fid:e}){return`${ay(r)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zd(r,e=!1){let n;const s=await Jl(r.appConfig,u=>{if(!vy(u))throw Nr.create("not-registered");const d=u.authToken;if(!e&&sk(d))return u;if(d.requestStatus===1)return n=rk(r,e),u;{if(!navigator.onLine)throw Nr.create("app-offline");const f=lk(u);return n=ik(r,f),f}});return n?await n:s.authToken}async function rk(r,e){let n=await Zm(r.appConfig);for(;n.authToken.requestStatus===1;)await fy(100),n=await Zm(r.appConfig);const s=n.authToken;return s.requestStatus===0?zd(r,e):s}function Zm(r){return Jl(r,e=>{if(!vy(e))throw Nr.create("not-registered");const n=e.authToken;return ak(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function ik(r,e){try{const n=await tk(r,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Nl(r.appConfig,s),n}catch(n){if(ly(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await _y(r.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Nl(r.appConfig,s)}throw n}}function vy(r){return r!==void 0&&r.registrationStatus===2}function sk(r){return r.requestStatus===2&&!ok(r)}function ok(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+DT}function lk(r){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:e})}function ak(r){return r.requestStatus===1&&r.requestTime+iy<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uk(r){const e=r,{installationEntry:n,registrationPromise:s}=await jd(e);return s?s.catch(console.error):zd(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ck(r,e=!1){const n=r;return await dk(n),(await zd(n,e)).token}async function dk(r){const{registrationPromise:e}=await jd(r);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hk(r){if(!r||!r.options)throw wc("App Configuration");if(!r.name)throw wc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!r.options[n])throw wc(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function wc(r){return Nr.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy="installations",fk="installations-internal",pk=r=>{const e=r.getProvider("app").getImmediate(),n=hk(e),s=xr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},mk=r=>{const e=r.getProvider("app").getImmediate(),n=xr(e,wy).getImmediate();return{getId:()=>uk(n),getToken:l=>ck(n,l)}};function gk(){on(new Kt(wy,pk,"PUBLIC")),on(new Kt(fk,mk,"PRIVATE"))}gk();Mt(ry,Fd);Mt(ry,Fd,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl="analytics",_k="firebase_id",yk="origin",vk=60*1e3,wk="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Wd="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt=new Ul("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Tt=new Or("analytics","Analytics",Ek);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sk(r){if(!r.startsWith(Wd)){const e=Tt.create("invalid-gtag-resource",{gtagURL:r});return yt.warn(e.message),""}return r}function Ey(r){return Promise.all(r.map(e=>e.catch(n=>n)))}function Ik(r,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,e)),n}function Ck(r,e){const n=Ik("firebase-js-sdk-policy",{createScriptURL:Sk}),s=document.createElement("script"),l=`${Wd}?l=${r}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(l):l,s.async=!0,document.head.appendChild(s)}function Tk(r){let e=[];return Array.isArray(window[r])?e=window[r]:window[r]=e,e}async function kk(r,e,n,s,l,u){const d=s[l];try{if(d)await e[d];else{const p=(await Ey(n)).find(g=>g.measurementId===l);p&&await e[p.appId]}}catch(f){yt.error(f)}r("config",l,u)}async function Rk(r,e,n,s,l){try{let u=[];if(l&&l.send_to){let d=l.send_to;Array.isArray(d)||(d=[d]);const f=await Ey(n);for(const p of d){const g=f.find(y=>y.measurementId===p),v=g&&e[g.appId];if(v)u.push(v);else{u=[];break}}}u.length===0&&(u=Object.values(e)),await Promise.all(u),r("event",s,l||{})}catch(u){yt.error(u)}}function Nk(r,e,n,s){async function l(u,...d){try{if(u==="event"){const[f,p]=d;await Rk(r,e,n,f,p)}else if(u==="config"){const[f,p]=d;await kk(r,e,n,s,f,p)}else if(u==="consent"){const[f,p]=d;r("consent",f,p)}else if(u==="get"){const[f,p,g]=d;r("get",f,p,g)}else if(u==="set"){const[f]=d;r("set",f)}else r(u,...d)}catch(f){yt.error(f)}}return l}function Pk(r,e,n,s,l){let u=function(...d){window[s].push(arguments)};return window[l]&&typeof window[l]=="function"&&(u=window[l]),window[l]=Nk(u,r,e,n),{gtagCore:u,wrappedGtag:window[l]}}function Ak(r){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Wd)&&n.src.includes(r))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ok=30,xk=1e3;class Dk{constructor(e={},n=xk){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Sy=new Dk;function Lk(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function Mk(r){var e;const{appId:n,apiKey:s}=r,l={method:"GET",headers:Lk(s)},u=wk.replace("{app-id}",n),d=await fetch(u,l);if(d.status!==200&&d.status!==304){let f="";try{const p=await d.json();!((e=p.error)===null||e===void 0)&&e.message&&(f=p.error.message)}catch{}throw Tt.create("config-fetch-failed",{httpStatus:d.status,responseMessage:f})}return d.json()}async function bk(r,e=Sy,n){const{appId:s,apiKey:l,measurementId:u}=r.options;if(!s)throw Tt.create("no-app-id");if(!l){if(u)return{measurementId:u,appId:s};throw Tt.create("no-api-key")}const d=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},f=new jk;return setTimeout(async()=>{f.abort()},vk),Iy({appId:s,apiKey:l,measurementId:u},d,f,e)}async function Iy(r,{throttleEndTimeMillis:e,backoffCount:n},s,l=Sy){var u;const{appId:d,measurementId:f}=r;try{await Fk(s,e)}catch(p){if(f)return yt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:d,measurementId:f};throw p}try{const p=await Mk(r);return l.deleteThrottleMetadata(d),p}catch(p){const g=p;if(!Uk(g)){if(l.deleteThrottleMetadata(d),f)return yt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:d,measurementId:f};throw p}const v=Number((u=g==null?void 0:g.customData)===null||u===void 0?void 0:u.httpStatus)===503?um(n,l.intervalMillis,Ok):um(n,l.intervalMillis),y={throttleEndTimeMillis:Date.now()+v,backoffCount:n+1};return l.setThrottleMetadata(d,y),yt.debug(`Calling attemptFetch again in ${v} millis`),Iy(r,y,s,l)}}function Fk(r,e){return new Promise((n,s)=>{const l=Math.max(e-Date.now(),0),u=setTimeout(n,l);r.addEventListener(()=>{clearTimeout(u),s(Tt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Uk(r){if(!(r instanceof ln)||!r.customData)return!1;const e=Number(r.customData.httpStatus);return e===429||e===500||e===503||e===504}class jk{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function zk(r,e,n,s,l){if(l&&l.global){r("event",n,s);return}else{const u=await e,d=Object.assign(Object.assign({},s),{send_to:u});r("event",n,d)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wk(){if(jg())try{await zg()}catch(r){return yt.warn(Tt.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return yt.warn(Tt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Bk(r,e,n,s,l,u,d){var f;const p=bk(r);p.then(R=>{n[R.measurementId]=R.appId,r.options.measurementId&&R.measurementId!==r.options.measurementId&&yt.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${R.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(R=>yt.error(R)),e.push(p);const g=Wk().then(R=>{if(R)return s.getId()}),[v,y]=await Promise.all([p,g]);Ak(u)||Ck(u,v.measurementId),l("js",new Date);const E=(f=d==null?void 0:d.config)!==null&&f!==void 0?f:{};return E[yk]="firebase",E.update=!0,y!=null&&(E[_k]=y),l("config",v.measurementId,E),v.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(e){this.app=e}_delete(){return delete Cs[this.app.options.appId],Promise.resolve()}}let Cs={},eg=[];const tg={};let Ec="dataLayer",$k="gtag",ng,Cy,rg=!1;function Hk(){const r=[];if(bg()&&r.push("This is a browser extension environment."),G0()||r.push("Cookies are not available."),r.length>0){const e=r.map((s,l)=>`(${l+1}) ${s}`).join(" "),n=Tt.create("invalid-analytics-context",{errorInfo:e});yt.warn(n.message)}}function Gk(r,e,n){Hk();const s=r.options.appId;if(!s)throw Tt.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)yt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Tt.create("no-api-key");if(Cs[s]!=null)throw Tt.create("already-exists",{id:s});if(!rg){Tk(Ec);const{wrappedGtag:u,gtagCore:d}=Pk(Cs,eg,tg,Ec,$k);Cy=u,ng=d,rg=!0}return Cs[s]=Bk(r,eg,tg,e,ng,Ec,n),new Vk(r)}function qk(r=td()){r=kt(r);const e=xr(r,Pl);return e.isInitialized()?e.getImmediate():Kk(r)}function Kk(r,e={}){const n=xr(r,Pl);if(n.isInitialized()){const l=n.getImmediate();if(Ns(e,n.getOptions()))return l;throw Tt.create("already-initialized")}return n.initialize({options:e})}function Yk(r,e,n,s){r=kt(r),zk(Cy,Cs[r.app.options.appId],e,n,s).catch(l=>yt.error(l))}const ig="@firebase/analytics",sg="0.10.10";function Qk(){on(new Kt(Pl,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("installations-internal").getImmediate();return Gk(s,l,n)},"PUBLIC")),on(new Kt("analytics-internal",r,"PRIVATE")),Mt(ig,sg),Mt(ig,sg,"esm2017");function r(e){try{const n=e.getProvider(Pl).getImmediate();return{logEvent:(s,l,u)=>Yk(n,s,l,u)}}catch(n){throw Tt.create("interop-component-reg-failed",{reason:n})}}}Qk();function Bd(r,e){var n={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(n[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(r);l<s.length;l++)e.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(r,s[l])&&(n[s[l]]=r[s[l]]);return n}function Ty(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Xk=Ty,ky=new Or("auth","Firebase",Ty());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al=new Ul("@firebase/auth");function Jk(r,...e){Al.logLevel<=pe.WARN&&Al.warn(`Auth (${Ci}): ${r}`,...e)}function ll(r,...e){Al.logLevel<=pe.ERROR&&Al.error(`Auth (${Ci}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(r,...e){throw Vd(r,...e)}function rn(r,...e){return Vd(r,...e)}function Ry(r,e,n){const s=Object.assign(Object.assign({},Xk()),{[e]:n});return new Or("auth","Firebase",s).create(e,{appName:r.name})}function tr(r){return Ry(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Vd(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return ky.create(r,...e)}function Q(r,e,...n){if(!r)throw Vd(e,...n)}function vn(r){const e="INTERNAL ASSERTION FAILED: "+r;throw ll(e),new Error(e)}function kn(r,e){r||vn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function Zk(){return og()==="http:"||og()==="https:"}function og(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Zk()||bg()||"connection"in navigator)?navigator.onLine:!0}function t1(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,n){this.shortDelay=e,this.longDelay=n,kn(n>e,"Short delay should be less than long delay!"),this.isMobile=Zc()||Fg()}get(){return e1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $d(r,e){kn(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r1=new Bs(3e4,6e4);function Zl(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Ni(r,e,n,s,l={}){return Py(r,l,async()=>{let u={},d={};s&&(e==="GET"?d=s:u={body:JSON.stringify(s)});const f=Ii(Object.assign({key:r.config.apiKey},d)).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const g=Object.assign({method:e,headers:p},u);return $0()||(g.referrerPolicy="no-referrer"),Ny.fetch()(Oy(r,r.config.apiHost,n,f),g)})}async function Py(r,e,n){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},n1),e);try{const l=new i1(r),u=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const d=await u.json();if("needConfirmation"in d)throw sl(r,"account-exists-with-different-credential",d);if(u.ok&&!("errorMessage"in d))return d;{const f=u.ok?d.errorMessage:d.error.message,[p,g]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw sl(r,"credential-already-in-use",d);if(p==="EMAIL_EXISTS")throw sl(r,"email-already-in-use",d);if(p==="USER_DISABLED")throw sl(r,"user-disabled",d);const v=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw Ry(r,v,g);Tn(r,v)}}catch(l){if(l instanceof ln)throw l;Tn(r,"network-request-failed",{message:String(l)})}}async function Ay(r,e,n,s,l={}){const u=await Ni(r,e,n,s,l);return"mfaPendingCredential"in u&&Tn(r,"multi-factor-auth-required",{_serverResponse:u}),u}function Oy(r,e,n,s){const l=`${e}${n}?${s}`;return r.config.emulator?$d(r.config,l):`${r.config.apiScheme}://${l}`}class i1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(rn(this.auth,"network-request-failed")),r1.get())})}}function sl(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const l=rn(r,e,s);return l.customData._tokenResponse=n,l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s1(r,e){return Ni(r,"POST","/v1/accounts:delete",e)}async function xy(r,e){return Ni(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function o1(r,e=!1){const n=kt(r),s=await n.getIdToken(e),l=Hd(s);Q(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const u=typeof l.firebase=="object"?l.firebase:void 0,d=u==null?void 0:u.sign_in_provider;return{claims:l,token:s,authTime:Ts(Sc(l.auth_time)),issuedAtTime:Ts(Sc(l.iat)),expirationTime:Ts(Sc(l.exp)),signInProvider:d||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Sc(r){return Number(r)*1e3}function Hd(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return ll("JWT malformed, contained fewer than 3 sections"),null;try{const l=hl(n);return l?JSON.parse(l):(ll("Failed to decode base64 JWT payload"),null)}catch(l){return ll("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function lg(r){const e=Hd(r);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bs(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof ln&&l1(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function l1({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const l=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,l)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ts(this.lastLoginAt),this.creationTime=Ts(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ol(r){var e;const n=r.auth,s=await r.getIdToken(),l=await bs(r,xy(n,{idToken:s}));Q(l==null?void 0:l.users.length,n,"internal-error");const u=l.users[0];r._notifyReloadListener(u);const d=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?Dy(u.providerUserInfo):[],f=c1(r.providerData,d),p=r.isAnonymous,g=!(r.email&&u.passwordHash)&&!(f!=null&&f.length),v=p?g:!1,y={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:f,metadata:new qc(u.createdAt,u.lastLoginAt),isAnonymous:v};Object.assign(r,y)}async function u1(r){const e=kt(r);await Ol(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function c1(r,e){return[...r.filter(s=>!e.some(l=>l.providerId===s.providerId)),...e]}function Dy(r){return r.map(e=>{var{providerId:n}=e,s=Bd(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d1(r,e){const n=await Py(r,{},async()=>{const s=Ii({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:u}=r.config,d=Oy(r,l,"/v1/token",`key=${u}`),f=await r._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",Ny.fetch()(d,{method:"POST",headers:f,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function h1(r,e){return Ni(r,"POST","/v2/accounts:revokeToken",Zl(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):lg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const n=lg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:l,expiresIn:u}=await d1(e,n);this.updateTokensAndExpiration(s,l,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:l,expirationTime:u}=n,d=new fi;return s&&(Q(typeof s=="string","internal-error",{appName:e}),d.refreshToken=s),l&&(Q(typeof l=="string","internal-error",{appName:e}),d.accessToken=l),u&&(Q(typeof u=="number","internal-error",{appName:e}),d.expirationTime=u),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fi,this.toJSON())}_performRefresh(){return vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(r,e){Q(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class wn{constructor(e){var{uid:n,auth:s,stsTokenManager:l}=e,u=Bd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new a1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=l,this.accessToken=l.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new qc(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const n=await bs(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return o1(this,e)}reload(){return u1(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new wn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ol(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_n(this.auth.app))return Promise.reject(tr(this.auth));const e=await this.getIdToken();return await bs(this,s1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,l,u,d,f,p,g,v;const y=(s=n.displayName)!==null&&s!==void 0?s:void 0,E=(l=n.email)!==null&&l!==void 0?l:void 0,R=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,O=(d=n.photoURL)!==null&&d!==void 0?d:void 0,b=(f=n.tenantId)!==null&&f!==void 0?f:void 0,M=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,Ee=(g=n.createdAt)!==null&&g!==void 0?g:void 0,Ae=(v=n.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:ge,emailVerified:Re,isAnonymous:Ze,providerData:se,stsTokenManager:X}=n;Q(ge&&X,e,"internal-error");const ie=fi.fromJSON(this.name,X);Q(typeof ge=="string",e,"internal-error"),Gn(y,e.name),Gn(E,e.name),Q(typeof Re=="boolean",e,"internal-error"),Q(typeof Ze=="boolean",e,"internal-error"),Gn(R,e.name),Gn(O,e.name),Gn(b,e.name),Gn(M,e.name),Gn(Ee,e.name),Gn(Ae,e.name);const ze=new wn({uid:ge,auth:e,email:E,emailVerified:Re,displayName:y,isAnonymous:Ze,photoURL:O,phoneNumber:R,tenantId:b,stsTokenManager:ie,createdAt:Ee,lastLoginAt:Ae});return se&&Array.isArray(se)&&(ze.providerData=se.map(it=>Object.assign({},it))),M&&(ze._redirectEventId=M),ze}static async _fromIdTokenResponse(e,n,s=!1){const l=new fi;l.updateFromServerResponse(n);const u=new wn({uid:n.localId,auth:e,stsTokenManager:l,isAnonymous:s});return await Ol(u),u}static async _fromGetAccountInfoResponse(e,n,s){const l=n.users[0];Q(l.localId!==void 0,"internal-error");const u=l.providerUserInfo!==void 0?Dy(l.providerUserInfo):[],d=!(l.email&&l.passwordHash)&&!(u!=null&&u.length),f=new fi;f.updateFromIdToken(s);const p=new wn({uid:l.localId,auth:e,stsTokenManager:f,isAnonymous:d}),g={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:u,metadata:new qc(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(u!=null&&u.length)};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag=new Map;function En(r){kn(r instanceof Function,"Expected a class definition");let e=ag.get(r);return e?(kn(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,ag.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ly.type="NONE";const ug=Ly;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(r,e,n){return`firebase:${r}:${e}:${n}`}class pi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:l,name:u}=this.auth;this.fullUserKey=al(this.userKey,l.apiKey,u),this.fullPersistenceKey=al("persistence",l.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?wn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new pi(En(ug),e,s);const l=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=l[0]||En(ug);const d=al(s,e.config.apiKey,e.name);let f=null;for(const g of n)try{const v=await g._get(d);if(v){const y=wn._fromJSON(e,v);g!==u&&(f=y),u=g;break}}catch{}const p=l.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new pi(u,e,s):(u=p[0],f&&await u._set(d,f.toJSON()),await Promise.all(n.map(async g=>{if(g!==u)try{await g._remove(d)}catch{}})),new pi(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Uy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(My(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zy(e))return"Blackberry";if(Wy(e))return"Webos";if(by(e))return"Safari";if((e.includes("chrome/")||Fy(e))&&!e.includes("edge/"))return"Chrome";if(jy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function My(r=at()){return/firefox\//i.test(r)}function by(r=at()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Fy(r=at()){return/crios\//i.test(r)}function Uy(r=at()){return/iemobile/i.test(r)}function jy(r=at()){return/android/i.test(r)}function zy(r=at()){return/blackberry/i.test(r)}function Wy(r=at()){return/webos/i.test(r)}function Gd(r=at()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function f1(r=at()){var e;return Gd(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function p1(){return H0()&&document.documentMode===10}function By(r=at()){return Gd(r)||jy(r)||Wy(r)||zy(r)||/windows phone/i.test(r)||Uy(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vy(r,e=[]){let n;switch(r){case"Browser":n=cg(at());break;case"Worker":n=`${cg(at())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ci}/${s}`}/**
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
 */class m1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=u=>new Promise((d,f)=>{try{const p=e(u);d(p)}catch(p){f(p)}});s.onAbort=n,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const l of n)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function g1(r,e={}){return Ni(r,"GET","/v2/passwordPolicy",Zl(r,e))}/**
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
 */const _1=6;class y1{constructor(e){var n,s,l,u;const d=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=d.minPasswordLength)!==null&&n!==void 0?n:_1,d.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=d.maxPasswordLength),d.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=d.containsLowercaseCharacter),d.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=d.containsUppercaseCharacter),d.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=d.containsNumericCharacter),d.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=d.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(l=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&l!==void 0?l:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,l,u,d,f;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(n=p.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(l=p.containsLowercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(u=p.containsUppercaseLetter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(d=p.containsNumericCharacter)!==null&&d!==void 0?d:!0),p.isValid&&(p.isValid=(f=p.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),p}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),l&&(n.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let l=0;l<e.length;l++)s=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,l,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(e,n,s,l){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dg(this),this.idTokenSubscription=new dg(this),this.beforeStateQueue=new m1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ky,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=En(n)),this._initializationPromise=this.queue(async()=>{var s,l;if(!this._deleted&&(this.persistenceManager=await pi.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await xy(this,{idToken:e}),s=await wn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(_n(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let l=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,f=l==null?void 0:l._redirectEventId,p=await this.tryRedirectSignIn(e);(!d||d===f)&&(p!=null&&p.user)&&(l=p.user,u=!0)}if(!l)return this.directlySetCurrentUser(null);if(!l._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(l)}catch(d){l=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return l?this.reloadAndSetCurrentUserOrClear(l):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===l._redirectEventId?this.directlySetCurrentUser(l):this.reloadAndSetCurrentUserOrClear(l)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ol(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=t1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(_n(this.app))return Promise.reject(tr(this));const n=e?kt(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return _n(this.app)?Promise.reject(tr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return _n(this.app)?Promise.reject(tr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(En(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await g1(this),n=new y1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Or("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await h1(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&En(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await pi.create(this,[En(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,l){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let d=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(f,this,"internal-error"),f.then(()=>{d||u(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,s,l);return()=>{d=!0,p()}}else{const p=e.addObserver(n);return()=>{d=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const l=await this._getAppCheckToken();return l&&(n["X-Firebase-AppCheck"]=l),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Jk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ea(r){return kt(r)}class dg{constructor(e){this.auth=e,this.observer=null,this.addObserver=Z0(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function w1(r){qd=r}function E1(r){return qd.loadJS(r)}function S1(){return qd.gapiScript}function I1(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C1(r,e){const n=xr(r,"auth");if(n.isInitialized()){const l=n.getImmediate(),u=n.getOptions();if(Ns(u,e??{}))return l;Tn(l,"already-initialized")}return n.initialize({options:e})}function T1(r,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(En);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function k1(r,e,n){const s=ea(r);Q(s._canInitEmulator,s,"emulator-config-failed"),Q(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const l=!1,u=$y(e),{host:d,port:f}=R1(e),p=f===null?"":`:${f}`;s.config.emulator={url:`${u}//${d}${p}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:d,port:f,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:l})}),N1()}function $y(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function R1(r){const e=$y(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const u=l[1];return{host:u,port:hg(s.substr(u.length+1))}}else{const[u,d]=s.split(":");return{host:u,port:hg(d)}}}function hg(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function N1(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return vn("not implemented")}_getIdTokenResponse(e){return vn("not implemented")}_linkToIdToken(e,n){return vn("not implemented")}_getReauthenticationResolver(e){return vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mi(r,e){return Ay(r,"POST","/v1/accounts:signInWithIdp",Zl(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P1="http://localhost";class Ar extends Hy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ar(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:l}=n,u=Bd(n,["providerId","signInMethod"]);if(!s||!l)return null;const d=new Ar(s,l);return d.idToken=u.idToken||void 0,d.accessToken=u.accessToken||void 0,d.secret=u.secret,d.nonce=u.nonce,d.pendingToken=u.pendingToken||null,d}_getIdTokenResponse(e){const n=this.buildRequest();return mi(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,mi(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,mi(e,n)}buildRequest(){const e={requestUri:P1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ii(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs extends Gy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends Vs{constructor(){super("facebook.com")}static credential(e){return Ar._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch{return null}}}qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";qn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Yn extends Vs{constructor(){super("github.com")}static credential(e){return Ar._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.GITHUB_SIGN_IN_METHOD="github.com";Yn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends Vs{constructor(){super("twitter.com")}static credential(e,n){return Ar._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Qn.credential(n,s)}catch{return null}}}Qn.TWITTER_SIGN_IN_METHOD="twitter.com";Qn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A1(r,e){return Ay(r,"POST","/v1/accounts:signUp",Zl(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,l=!1){const u=await wn._fromIdTokenResponse(e,s,l),d=fg(s);return new ir({user:u,providerId:d,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const l=fg(s);return new ir({user:e,providerId:l,_tokenResponse:s,operationType:n})}}function fg(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O1(r){var e;if(_n(r.app))return Promise.reject(tr(r));const n=ea(r);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new ir({user:n.currentUser,providerId:null,operationType:"signIn"});const s=await A1(n,{returnSecureToken:!0}),l=await ir._fromIdTokenResponse(n,"signIn",s,!0);return await n._updateCurrentUser(l.user),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl extends ln{constructor(e,n,s,l){var u;super(n.code,n.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,xl.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,l){return new xl(e,n,s,l)}}function qy(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?xl._fromErrorAndOperation(r,u,e,s):u})}async function x1(r,e,n=!1){const s=await bs(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return ir._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D1(r,e,n=!1){const{auth:s}=r;if(_n(s.app))return Promise.reject(tr(s));const l="reauthenticate";try{const u=await bs(r,qy(s,l,e,r),n);Q(u.idToken,s,"internal-error");const d=Hd(u.idToken);Q(d,s,"internal-error");const{sub:f}=d;return Q(r.uid===f,s,"user-mismatch"),ir._forOperation(r,l,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Tn(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L1(r,e,n=!1){if(_n(r.app))return Promise.reject(tr(r));const s="signIn",l=await qy(r,s,e),u=await ir._fromIdTokenResponse(r,s,l);return n||await r._updateCurrentUser(u.user),u}function M1(r,e,n,s){return kt(r).onIdTokenChanged(e,n,s)}function b1(r,e,n){return kt(r).beforeAuthStateChanged(e,n)}const Dl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Dl,"1"),this.storage.removeItem(Dl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F1=1e3,U1=10;class Yy extends Ky{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=By(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),l=this.localCache[n];s!==l&&e(n,l,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((d,f,p)=>{this.notifyListeners(d,p)});return}const s=e.key;n?this.detachListener():this.stopPolling();const l=()=>{const d=this.storage.getItem(s);!n&&this.localCache[s]===d||this.notifyListeners(s,d)},u=this.storage.getItem(s);p1()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,U1):l()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},F1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Yy.type="LOCAL";const j1=Yy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy extends Ky{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Qy.type="SESSION";const Xy=Qy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z1(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(l=>l.isListeningto(e));if(n)return n;const s=new ta(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:l,data:u}=n.data,d=this.handlersMap[l];if(!(d!=null&&d.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const f=Array.from(d).map(async g=>g(n.origin,u)),p=await z1(f);n.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ta.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(r="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return r+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let u,d;return new Promise((f,p)=>{const g=Kd("",20);l.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},s);d={messageChannel:l,onMessage(y){const E=y;if(E.data.eventId===g)switch(E.data.status){case"ack":clearTimeout(v),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),f(E.data.response);break;default:clearTimeout(v),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(d),l.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[l.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(){return window}function B1(r){sn().location.href=r}/**
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
 */function Jy(){return typeof sn().WorkerGlobalScope<"u"&&typeof sn().importScripts=="function"}async function V1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $1(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function H1(){return Jy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zy="firebaseLocalStorageDb",G1=1,Ll="firebaseLocalStorage",ev="fbase_key";class $s{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function na(r,e){return r.transaction([Ll],e?"readwrite":"readonly").objectStore(Ll)}function q1(){const r=indexedDB.deleteDatabase(Zy);return new $s(r).toPromise()}function Kc(){const r=indexedDB.open(Zy,G1);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Ll,{keyPath:ev})}catch(l){n(l)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Ll)?e(s):(s.close(),await q1(),e(await Kc()))})})}async function pg(r,e,n){const s=na(r,!0).put({[ev]:e,value:n});return new $s(s).toPromise()}async function K1(r,e){const n=na(r,!1).get(e),s=await new $s(n).toPromise();return s===void 0?null:s.value}function mg(r,e){const n=na(r,!0).delete(e);return new $s(n).toPromise()}const Y1=800,Q1=3;class tv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Kc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Q1)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Jy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ta._getInstance(H1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await V1(),!this.activeServiceWorker)return;this.sender=new W1(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Kc();return await pg(e,Dl,"1"),await mg(e,Dl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>pg(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>K1(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>mg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const u=na(l,!1).getAll();return new $s(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:l,value:u}of e)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(u)&&(this.notifyListeners(l,u),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Y1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}tv.type="LOCAL";const X1=tv;new Bs(3e4,6e4);/**
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
 */function J1(r,e){return e?En(e):(Q(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd extends Hy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return mi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return mi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return mi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Z1(r){return L1(r.auth,new Yd(r),r.bypassAuthState)}function eR(r){const{auth:e,user:n}=r;return Q(n,e,"internal-error"),D1(n,new Yd(r),r.bypassAuthState)}async function tR(r){const{auth:e,user:n}=r;return Q(n,e,"internal-error"),x1(n,new Yd(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e,n,s,l,u=!1){this.auth=e,this.resolver=s,this.user=l,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:l,tenantId:u,error:d,type:f}=e;if(d){this.reject(d);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Z1;case"linkViaPopup":case"linkViaRedirect":return tR;case"reauthViaPopup":case"reauthViaRedirect":return eR;default:Tn(this.auth,"internal-error")}}resolve(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nR=new Bs(2e3,1e4);class ai extends nv{constructor(e,n,s,l,u){super(e,n,l,u),this.provider=s,this.authWindow=null,this.pollId=null,ai.currentPopupAction&&ai.currentPopupAction.cancel(),ai.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){kn(this.filter.length===1,"Popup operations only handle one event");const e=Kd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ai.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,nR.get())};e()}}ai.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR="pendingRedirect",ul=new Map;class iR extends nv{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ul.get(this.auth._key());if(!e){try{const s=await sR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ul.set(this.auth._key(),e)}return this.bypassAuthState||ul.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sR(r,e){const n=aR(e),s=lR(r);if(!await s._isAvailable())return!1;const l=await s._get(n)==="true";return await s._remove(n),l}function oR(r,e){ul.set(r._key(),e)}function lR(r){return En(r._redirectPersistence)}function aR(r){return al(rR,r.config.apiKey,r.name)}async function uR(r,e,n=!1){if(_n(r.app))return Promise.reject(tr(r));const s=ea(r),l=J1(s,e),d=await new iR(s,l,n).execute();return d&&!n&&(delete d.user._redirectEventId,await s._persistUserIfCurrent(d.user),await s._setRedirectUser(null,e)),d}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR=10*60*1e3;class dR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!rv(e)){const l=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(rn(this.auth,l))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=cR&&this.cachedEventUids.clear(),this.cachedEventUids.has(gg(e))}saveEventToCache(e){this.cachedEventUids.add(gg(e)),this.lastProcessedEventTime=Date.now()}}function gg(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function rv({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function hR(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rv(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fR(r,e={}){return Ni(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mR=/^https?/;async function gR(r){if(r.config.emulator)return;const{authorizedDomains:e}=await fR(r);for(const n of e)try{if(_R(n))return}catch{}Tn(r,"unauthorized-domain")}function _R(r){const e=Gc(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const d=new URL(r);return d.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&d.hostname===s}if(!mR.test(n))return!1;if(pR.test(r))return s===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
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
 */const yR=new Bs(3e4,6e4);function _g(){const r=sn().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function vR(r){return new Promise((e,n)=>{var s,l,u;function d(){_g(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_g(),n(rn(r,"network-request-failed"))},timeout:yR.get()})}if(!((l=(s=sn().gapi)===null||s===void 0?void 0:s.iframes)===null||l===void 0)&&l.Iframe)e(gapi.iframes.getContext());else if(!((u=sn().gapi)===null||u===void 0)&&u.load)d();else{const f=I1("iframefcb");return sn()[f]=()=>{gapi.load?d():n(rn(r,"network-request-failed"))},E1(`${S1()}?onload=${f}`).catch(p=>n(p))}}).catch(e=>{throw cl=null,e})}let cl=null;function wR(r){return cl=cl||vR(r),cl}/**
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
 */const ER=new Bs(5e3,15e3),SR="__/auth/iframe",IR="emulator/auth/iframe",CR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},TR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kR(r){const e=r.config;Q(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?$d(e,IR):`https://${r.config.authDomain}/${SR}`,s={apiKey:e.apiKey,appName:r.name,v:Ci},l=TR.get(r.config.apiHost);l&&(s.eid=l);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${Ii(s).slice(1)}`}async function RR(r){const e=await wR(r),n=sn().gapi;return Q(n,r,"internal-error"),e.open({where:document.body,url:kR(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:CR,dontclear:!0},s=>new Promise(async(l,u)=>{await s.restyle({setHideOnLeave:!1});const d=rn(r,"network-request-failed"),f=sn().setTimeout(()=>{u(d)},ER.get());function p(){sn().clearTimeout(f),l(s)}s.ping(p).then(p,()=>{u(d)})}))}/**
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
 */const NR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},PR=500,AR=600,OR="_blank",xR="http://localhost";class yg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function DR(r,e,n,s=PR,l=AR){const u=Math.max((window.screen.availHeight-l)/2,0).toString(),d=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const p=Object.assign(Object.assign({},NR),{width:s.toString(),height:l.toString(),top:u,left:d}),g=at().toLowerCase();n&&(f=Fy(g)?OR:n),My(g)&&(e=e||xR,p.scrollbars="yes");const v=Object.entries(p).reduce((E,[R,O])=>`${E}${R}=${O},`,"");if(f1(g)&&f!=="_self")return LR(e||"",f),new yg(null);const y=window.open(e||"",f,v);Q(y,r,"popup-blocked");try{y.focus()}catch{}return new yg(y)}function LR(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const MR="__/auth/handler",bR="emulator/auth/handler",FR=encodeURIComponent("fac");async function vg(r,e,n,s,l,u){Q(r.config.authDomain,r,"auth-domain-config-required"),Q(r.config.apiKey,r,"invalid-api-key");const d={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:Ci,eventId:l};if(e instanceof Gy){e.setDefaultLanguage(r.languageCode),d.providerId=e.providerId||"",Cc(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,y]of Object.entries({}))d[v]=y}if(e instanceof Vs){const v=e.getScopes().filter(y=>y!=="");v.length>0&&(d.scopes=v.join(","))}r.tenantId&&(d.tid=r.tenantId);const f=d;for(const v of Object.keys(f))f[v]===void 0&&delete f[v];const p=await r._getAppCheckToken(),g=p?`#${FR}=${encodeURIComponent(p)}`:"";return`${UR(r)}?${Ii(f).slice(1)}${g}`}function UR({config:r}){return r.emulator?$d(r,bR):`https://${r.authDomain}/${MR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic="webStorageSupport";class jR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xy,this._completeRedirectFn=uR,this._overrideRedirectResult=oR}async _openPopup(e,n,s,l){var u;kn((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const d=await vg(e,n,s,Gc(),l);return DR(e,d,Kd())}async _openRedirect(e,n,s,l){await this._originValidation(e);const u=await vg(e,n,s,Gc(),l);return B1(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:l,promise:u}=this.eventManagers[n];return l?Promise.resolve(l):(kn(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await RR(e),s=new dR(e);return n.register("authEvent",l=>(Q(l==null?void 0:l.authEvent,e,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ic,{type:Ic},l=>{var u;const d=(u=l==null?void 0:l[0])===null||u===void 0?void 0:u[Ic];d!==void 0&&n(!!d),Tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=gR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return By()||by()||Gd()}}const zR=jR;var wg="@firebase/auth",Eg="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BR(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function VR(r){on(new Kt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:d,authDomain:f}=s.options;Q(d&&!d.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:d,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vy(r)},g=new v1(s,l,u,p);return T1(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),on(new Kt("auth-internal",e=>{const n=ea(e.getProvider("auth").getImmediate());return(s=>new WR(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Mt(wg,Eg,BR(r)),Mt(wg,Eg,"esm2017")}/**
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
 */const $R=5*60,HR=Mg("authIdTokenMaxAge")||$R;let Sg=null;const GR=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>HR)return;const l=n==null?void 0:n.token;Sg!==l&&(Sg=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function qR(r=td()){const e=xr(r,"auth");if(e.isInitialized())return e.getImmediate();const n=C1(r,{popupRedirectResolver:zR,persistence:[X1,j1,Xy]}),s=Mg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const d=GR(u.toString());b1(n,d,()=>d(n.currentUser)),M1(n,f=>d(f))}}const l=Dg("auth");return l&&k1(n,`http://${l}`),n}function KR(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}w1({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=l=>{const u=rn("internal-error");u.customData=l,n(u)},s.type="text/javascript",s.charset="UTF-8",KR().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});VR("Browser");const YR={apiKey:"AIzaSyB2SlnQ03tQfpjLMcleDimnz-wI6_BSXYE",authDomain:"my-multiplayer-dbf6b.firebaseapp.com",databaseURL:"https://my-multiplayer-dbf6b-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"my-multiplayer-dbf6b",storageBucket:"my-multiplayer-dbf6b.firebasestorage.app",messagingSenderId:"3902656578",appId:"1:3902656578:web:ea447bf59037a7d25b5ddb",measurementId:"G-3DVR8Y6VSM"},Qd=Hg(YR);qk(Qd);const ra=RT(Qd),Yc=qR(Qd);O1(Yc).then(()=>{console.log("Signed in anonymously")}).catch(r=>{console.error("Error signing in anonymously:",r)});const QR=(r,e)=>{const n=Ql(ra,`players/${r}`);ny(n,e).then(()=>{console.log("Data written successfully!")}).catch(s=>{console.error("Error writing data:",s)})},Gt=(r,e)=>{const n=Ql(ra,`players/${r}`);_T(n,e).then(()=>{console.log("Data updated successfully!")}).catch(s=>{console.error("Error updating data:",s)})},XR=r=>{const e=Ql(ra,`players/${r}`);gT(e).then(()=>{console.log("Data removed successfully!")}).catch(n=>{console.error("Error deleting data:",n)})},ks=[["null","wood","wood","null","null","null","null","null","null","wood","wood","null"],["null","wood","wood","empty","null","null","null","null","sellApple","wood","wood","null"],["empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty"],["empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty"],["game","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty"],["empty","empty","empty","empty","water","water","water","water","empty","empty","empty","empty"],["empty","empty","empty","empty","water","water","water","water","empty","empty","empty","empty"],["empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty"],["grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass"]],JR=(r,e)=>{const n=r*e,s={};for(const[f,p]of Object.entries(m0))s[f]=Math.floor(p*n);let l=[];for(const[f,p]of Object.entries(s))l=l.concat(Array(p).fill(f));for(;l.length<n;)l.push(Ce.EMPTY);for(let f=l.length-1;f>0;f--){const p=Math.floor(Math.random()*(f+1));[l[f],l[p]]=[l[p],l[f]]}const u=[];let d=0;for(let f=0;f<r;f++){const p=[];for(let g=0;g<e;g++)p.push({isActive:!1,type:l[d++]});u.push(p)}return u},ZR=(r,e,n)=>n==null?void 0:n.some(s=>s.x===r&&s.y===e),iv=(r,e,n)=>r<0||r>=ks[0].length||e<0||e>=ks.length?2:ks[e][r]===Ce.WATER||ZR(r,e,n)?0:1,eN=(r,e,n,s,l,u)=>{const d=iv(e,n,l);if(d!==2)switch(ks[n][e]){case Ce.GAME:Gt(r,{page:"forest"}),s("forest");break;case Ce.FREE_WAY:Gt(r,{page:"freeway"}),s("freeway");break;case Ce.SELL_APPLE:Gt(r,{score:0});break;default:(d===1||d===0)&&(u(),Gt(r,{isTyping:!0}));break}},tN=(r,e,n,s,l,u,d,f)=>{const p={ArrowUp:{dir:0,dx:0,dy:-1},ArrowRight:{dir:1,dx:1,dy:0},ArrowDown:{dir:2,dx:0,dy:1},ArrowLeft:{dir:3,dx:-1,dy:0}};if(l in p){const{dir:g,dx:v,dy:y}=p[l],E=e+v,R=n+y,O={dir:g,vector:(s+1)%4};iv(E,R,f)&&(v!==0&&(O.x=E),y!==0&&(O.y=R)),Gt(r,O)}else l==="Enter"?eN(r,e,n,u,f,d):l==="Escape"&&Gt(r,{isTyping:!1,msg:""})},nN="_mycharacter_1j082_1",rN="_moveD_1j082_10",iN="_moveU_1j082_13",sN="_moveR_1j082_16",oN="_moveL_1j082_19",lN="_dragon_1j082_22",aN="_walkLeft_1j082_25",uN="_walkRight_1j082_28",cN="_name_1j082_31",dN="_msgContainer_1j082_38",hN="_msg_1j082_38",fN="_msgArrow_1j082_61",pN="_typing_1j082_72",mN="_blink_1j082_1",vr={mycharacter:nN,moveD:rN,moveU:iN,moveR:sN,moveL:oN,dragon:lN,walkLeft:aN,walkRight:uN,name:cN,msgContainer:dN,msg:hN,msgArrow:fN,"typing-container":"_typing-container_1j082_72",typing:pN,blink:mN};function ia(r){var s,l;const{p:e,site:n=""}=r;return(e==null?void 0:e.page)!==n?null:G.jsxs("div",{style:{position:"relative"},children:[G.jsx("div",{className:`${vr.mycharacter} ${vr[g0[e==null?void 0:e.dir]]}`,style:{transform:`translate(${(e==null?void 0:e.x)*4}rem, ${(e==null?void 0:e.y)*4}rem)`,backgroundPosition:`${(e==null?void 0:e.vector)*-24}px 0`}}),G.jsxs("div",{className:vr.name,style:{transform:`translate(${(e==null?void 0:e.x)*4}rem, ${(e==null?void 0:e.y)*4}rem)`},children:[e.name," ",n==="forest"&&e.score]}),(((l=(s=e==null?void 0:e.msg)==null?void 0:s.trim())==null?void 0:l.length)!==0||(e==null?void 0:e.isTyping)==!0)&&G.jsx(G.Fragment,{children:G.jsxs("div",{style:{transform:`translate(${(e==null?void 0:e.x)*4}rem, ${(e==null?void 0:e.y)*4}rem)`},className:vr.msgContainer,children:[e.isTyping&&G.jsx("span",{className:vr.typing,children:"....."}),G.jsx("div",{className:vr.msg,children:e.msg}),G.jsx("div",{className:vr.msgArrow})]})})]})}ia.propTypes={p:Qe.object,site:Qe.string};const Ig=r=>{let e;const n=new Set,s=(g,v)=>{const y=typeof g=="function"?g(e):g;if(!Object.is(y,e)){const E=e;e=v??(typeof y!="object"||y===null)?y:Object.assign({},e,y),n.forEach(R=>R(e,E))}},l=()=>e,f={setState:s,getState:l,getInitialState:()=>p,subscribe:g=>(n.add(g),()=>n.delete(g))},p=e=r(s,l,f);return f},gN=r=>r?Ig(r):Ig,_N=r=>r;function yN(r,e=_N){const n=Xp.useSyncExternalStore(r.subscribe,()=>e(r.getState()),()=>e(r.getInitialState()));return Xp.useDebugValue(n),n}const Cg=r=>{const e=gN(r),n=s=>yN(e,s);return Object.assign(n,e),n},sv=r=>r?Cg(r):Cg,sa=sv(r=>({players:[],setPlayers:e=>r({players:e})})),Xd=sv(r=>({myPlayer:{},setMyPlayer:e=>r({myPlayer:e}),page:"home",setPage:e=>r({page:e})}));function ov(r){const{rows:e,cols:n}=r,{myPlayer:s,setPage:l}=Xd(),{players:u}=sa(),d=fe.useRef(null),[f,p]=fe.useState(0),[g,v]=fe.useState(()=>JR(e,n)),[y,E]=fe.useState(()=>0),[R,O]=fe.useState(()=>0),[b,M]=fe.useState(()=>2),[Ee,Ae]=fe.useState(()=>0),ge=(se,X,ie)=>{const ze=ie===0||ie===2,it=ze?e:n;if(X<0||X>=it)return se;const Qt=ze?g[X][R].type:g[y][X].type;return Qt===Ce.ROCK?se:(Qt===Ce.WATER?M(4):M(ie),Ae(Rt=>(Rt+1)%4),X)},Re=()=>{g[y][R].type===Ce.GAME&&(Gt(s==null?void 0:s.id,{page:"home"}),l("home"))},Ze=se=>{switch(console.log("##keydown",se.key),se.key){case"ArrowUp":E(X=>{let ie=X-1;return console.log("##up",X,ie),ge(X,ie,0)});break;case"ArrowRight":O(X=>{let ie=X+1;return console.log("##right",X,ie),ge(X,ie,1)});break;case"ArrowDown":E(X=>{let ie=X+1;return console.log("##down",X,ie),ge(X,ie,2)});break;case"ArrowLeft":O(X=>{let ie=X-1;return console.log("##left",X,ie),ge(X,ie,3)});break;case" ":break;case"Enter":Re();break}};return fe.useEffect(()=>{g[y][R].type===Ce.FOOD&&setTimeout(()=>{let X=g;X[y][R].type=Ce.EMPTY,v(X),p(ie=>ie+1)},400);let se={x:R,y,dir:b,vector:Ee,score:f};Gt(s==null?void 0:s.id,se)},[y,R]),fe.useEffect(()=>{var se;d&&((se=d==null?void 0:d.current)==null||se.focus(),E((s==null?void 0:s.y)||0),O((s==null?void 0:s.x)||0),p((s==null?void 0:s.score)||0))},[]),G.jsxs("div",{tabIndex:"0",onKeyDown:Ze,ref:d,className:ui.boardContainer,children:[G.jsxs("div",{children:[" Score: ",f]}),G.jsxs("div",{className:ui.board,children:[u==null?void 0:u.map(se=>G.jsx(ia,{p:se,site:"forest"},se.id)),g.map((se,X)=>G.jsx("div",{className:ui.row,children:se.map((ie,ze)=>{const it=y===X&&R===ze;return G.jsx(Ml,{isActive:it,type:ie==null?void 0:ie.type,site:"forest"},ze)})},X))]})]})}ov.propTypes={rows:Qe.number.isRequired,cols:Qe.number.isRequired};const vN="_newPlayer_1dkh4_1",wN="_btnSubmit_1dkh4_10",Tg={newPlayer:vN,btnSubmit:wN};function lv(r){const{user:e,setNewPlayer:n}=r,[s,l]=fe.useState(""),[u,d]=fe.useState("male"),f=()=>{if(s.trim().length===0)return;n(!1);const g={name:s,score:0,x:0,y:0,character:"",dir:2,vector:0,page:"home",msg:""};QR(e==null?void 0:e.id,g)},p=g=>{d(g.target.value)};return G.jsxs("div",{className:Tg.newPlayer,children:[G.jsx("div",{children:"New player"}),G.jsx("input",{type:"text",placeholder:"Enter your name",value:s,onChange:g=>l(g.target.value)}),G.jsx("br",{}),G.jsxs("select",{value:u,onChange:p,children:[G.jsx("option",{value:"male",children:"Man"}),G.jsx("option",{value:"female",children:"Women"}),G.jsx("option",{value:"snake",children:"Snake"})]}),G.jsx("button",{className:Tg.btnSubmit,onClick:f,children:"Submit"})]})}lv.propTypes={user:Qe.object.isRequired,setNewPlayer:Qe.func.isRequired};const EN="_home_b7lxk_1",SN="_hint_b7lxk_10",kg={home:EN,hint:SN},IN="_editor_ge73_1",CN="_input_ge73_9",Rg={editor:IN,input:CN};function av(r){const{id:e,boardRef:n,isTyping:s,msg:l,setIsTyping:u,setMsg:d}=r,f=fe.useRef(null),[p,g]=fe.useState(2),v=y=>{var E,R;console.log("##handleKeyPress",y.key),y.key==="Enter"&&!y.shiftKey&&(l==null?void 0:l.trim().length)>0?(y.preventDefault(),Gt(e,{isTyping:!1,msg:l}),u(!1),d(""),g(2),(E=n==null?void 0:n.current)==null||E.focus()):y.key==="Enter"&&y.shiftKey&&p<16?g(O=>O+1):y.key==="Backspace"&&p>2?g(O=>O-1):y.key==="Escape"&&(u(!1),d(""),Gt(e,{isTyping:!1}),(R=n==null?void 0:n.current)==null||R.focus())};if(s)return G.jsx("div",{className:Rg.editor,children:G.jsx("textarea",{ref:f,value:l,autoFocus:!0,className:Rg.input,placeholder:"Type your message...",onChange:y=>{d(y.target.value)},onKeyUp:v,rows:p.toString()})})}av.propTypes={id:Qe.string,boardRef:Qe.object,isTyping:Qe.bool,setIsTyping:Qe.func,setMsg:Qe.func,msg:Qe.string};function TN(){const{myPlayer:r,setPage:e}=Xd(),{players:n}=sa(),{x:s,y:l,id:u,vector:d}=r,f=fe.useRef(null),[p,g]=fe.useState("Press Enter to type message, and again Enter to send it. Esc to cancel or delete."),[v,y]=fe.useState(!1),[E,R]=fe.useState(""),O=()=>{var M;(M=f==null?void 0:f.current)==null||M.blur(),y(!0)},b=M=>{M.preventDefault(),tN(u,s,l,d,M.key,e,O,n)};return fe.useEffect(()=>{g(s===0&&l===4?"Press enter":"Press Enter to type message, and again Enter to send it. Esc to cancel or delete.")},[s,l]),fe.useEffect(()=>{var M;f&&((M=f==null?void 0:f.current)==null||M.focus())},[]),G.jsxs(G.Fragment,{children:[G.jsxs("div",{className:kg.home,tabIndex:"0",onKeyDown:b,ref:f,children:["Living area",G.jsxs("div",{className:kg.hint,children:["Hint: ",p]}),G.jsxs("div",{children:[n==null?void 0:n.map(M=>G.jsx(ia,{p:M,site:"home"},M.id)),ks.map((M,Ee)=>G.jsx("div",{className:ui.row,children:M.map((Ae,ge)=>G.jsx(Ml,{type:Ae,site:"home"},ge))},Ee))]})]}),G.jsx(av,{id:u,isTyping:v,msg:E,boardRef:f,setIsTyping:y,setMsg:R})]})}function uv(r){const{rows:e,cols:n}=r,{players:s}=sa(),[l]=fe.useState(()=>{let R=[];for(let O=0;O<e;O++){let b=[];for(let M=0;M<n;M++)b.push({isActive:!1,type:Ce.EMPTY});R.push(b)}return R}),[u,d]=fe.useState({row:0,col:0}),[f,p]=fe.useState(0),[g,v]=fe.useState(new Set),y=R=>{v(O=>new Set(O).add(R.key))},E=R=>{v(O=>{const b=new Set(O);return b.delete(R.key),b})};return fe.useEffect(()=>{const R=()=>{console.log("#####ctiveKeys",g),d(O=>{let{row:b,col:M}=O;return g.has("ArrowLeft")&&(M=Math.max(0,M-1),p(270)),g.has("ArrowRight")&&(M=Math.min(n-1,M+1),p(90)),g.has("ArrowUp")&&(b=Math.max(0,b-1),p(0)),g.has("ArrowDown")&&(b=Math.min(e-1,b+1),p(180)),{row:b,col:M}})};if(g.size>0){const O=setInterval(R,100);return()=>clearInterval(O)}},[g]),console.log("position",s),G.jsx("div",{tabIndex:"0",onKeyDown:y,onKeyUp:E,children:G.jsxs("div",{className:ui.board,children:[s==null?void 0:s.map(R=>G.jsx(ia,{p:R,site:"freeway"},R.id)),l.map((R,O)=>G.jsx("div",{className:ui.row,children:R.map((b,M)=>{const Ee=u.row===O&&u.col===M;return G.jsx(Ml,{isActive:Ee,tile:b,site:"freeway"},M)})},O))]})})}uv.propTypes={rows:Qe.number.isRequired,cols:Qe.number.isRequired};function kN(){const[r,e]=fe.useState(!0),{myPlayer:n,setMyPlayer:s,page:l,setPage:u}=Xd(),{setPlayers:d}=sa(),f=v=>{if(!v)return;let y=[];for(const E in v)E===n.id&&(s({id:E,...v[E]}),e(!1)),y.push({id:E,...v[E]});d(y)},p=()=>{XR(n==null?void 0:n.id),e(!0),s({})},g=()=>{l!=="home"&&(u("home"),Gt(n==null?void 0:n.id,{page:"home"}))};return fe.useEffect(()=>Yc.onAuthStateChanged(y=>{if(y){let E=n;E.id=y.uid,s(E)}else console.log("User signed out")}),[Yc]),fe.useEffect(()=>{const v=Ql(ra,"players"),y=vT(v,E=>{f(E.val())});return()=>y()},[]),r?G.jsx(lv,{user:n,setNewPlayer:e}):G.jsxs(G.Fragment,{children:[G.jsxs("div",{style:{padding:"1rem",fontWeight:"bolder",display:"flex",justifyContent:"space-between"},children:[G.jsx("button",{onClick:g,children:"Home"}),G.jsx("button",{onClick:p,children:"Reset"})]}),l==="home"&&G.jsx(TN,{}),l==="forest"&&G.jsx(ov,{rows:9,cols:12}),l==="freeWay"&&G.jsx(uv,{rows:10,cols:10})]})}p0.createRoot(document.getElementById("root")).render(G.jsx(fe.StrictMode,{children:G.jsx(kN,{})}));
