(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=n(l);fetch(l.href,u)}})();function Pg(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Zu={exports:{}},ps={},ec={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp;function l0(){if(qp)return ee;qp=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.iterator;function E(I){return I===null||typeof I!="object"?null:(I=y&&I[y]||I["@@iterator"],typeof I=="function"?I:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,M={};function V(I,P,J){this.props=I,this.context=P,this.refs=M,this.updater=J||R}V.prototype.isReactComponent={},V.prototype.setState=function(I,P){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,P,"setState")},V.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function pe(){}pe.prototype=V.prototype;function me(I,P,J){this.props=I,this.context=P,this.refs=M,this.updater=J||R}var ge=me.prototype=new pe;ge.constructor=me,L(ge,V.prototype),ge.isPureReactComponent=!0;var le=Array.isArray,Ue=Object.prototype.hasOwnProperty,Z={current:null},Q={key:!0,ref:!0,__self:!0,__source:!0};function se(I,P,J){var re,ae={},ue=null,Ee=null;if(P!=null)for(re in P.ref!==void 0&&(Ee=P.ref),P.key!==void 0&&(ue=""+P.key),P)Ue.call(P,re)&&!Q.hasOwnProperty(re)&&(ae[re]=P[re]);var he=arguments.length-2;if(he===1)ae.children=J;else if(1<he){for(var Re=Array(he),wt=0;wt<he;wt++)Re[wt]=arguments[wt+2];ae.children=Re}if(I&&I.defaultProps)for(re in he=I.defaultProps,he)ae[re]===void 0&&(ae[re]=he[re]);return{$$typeof:r,type:I,key:ue,ref:Ee,props:ae,_owner:Z.current}}function We(I,P){return{$$typeof:r,type:I.type,key:P,ref:I.ref,props:I.props,_owner:I._owner}}function it(I){return typeof I=="object"&&I!==null&&I.$$typeof===r}function Qt(I){var P={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(J){return P[J]})}var Nt=/\/+/g;function vt(I,P){return typeof I=="object"&&I!==null&&I.key!=null?Qt(""+I.key):P.toString(36)}function Ft(I,P,J,re,ae){var ue=typeof I;(ue==="undefined"||ue==="boolean")&&(I=null);var Ee=!1;if(I===null)Ee=!0;else switch(ue){case"string":case"number":Ee=!0;break;case"object":switch(I.$$typeof){case r:case e:Ee=!0}}if(Ee)return Ee=I,ae=ae(Ee),I=re===""?"."+vt(Ee,0):re,le(ae)?(J="",I!=null&&(J=I.replace(Nt,"$&/")+"/"),Ft(ae,P,J,"",function(wt){return wt})):ae!=null&&(it(ae)&&(ae=We(ae,J+(!ae.key||Ee&&Ee.key===ae.key?"":(""+ae.key).replace(Nt,"$&/")+"/")+I)),P.push(ae)),1;if(Ee=0,re=re===""?".":re+":",le(I))for(var he=0;he<I.length;he++){ue=I[he];var Re=re+vt(ue,he);Ee+=Ft(ue,P,J,Re,ae)}else if(Re=E(I),typeof Re=="function")for(I=Re.call(I),he=0;!(ue=I.next()).done;)ue=ue.value,Re=re+vt(ue,he++),Ee+=Ft(ue,P,J,Re,ae);else if(ue==="object")throw P=String(I),Error("Objects are not valid as a React child (found: "+(P==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":P)+"). If you meant to render a collection of children, use an array instead.");return Ee}function Xt(I,P,J){if(I==null)return I;var re=[],ae=0;return Ft(I,re,"","",function(ue){return P.call(J,ue,ae++)}),re}function ut(I){if(I._status===-1){var P=I._result;P=P(),P.then(function(J){(I._status===0||I._status===-1)&&(I._status=1,I._result=J)},function(J){(I._status===0||I._status===-1)&&(I._status=2,I._result=J)}),I._status===-1&&(I._status=0,I._result=P)}if(I._status===1)return I._result.default;throw I._result}var Oe={current:null},b={transition:null},q={ReactCurrentDispatcher:Oe,ReactCurrentBatchConfig:b,ReactCurrentOwner:Z};function j(){throw Error("act(...) is not supported in production builds of React.")}return ee.Children={map:Xt,forEach:function(I,P,J){Xt(I,function(){P.apply(this,arguments)},J)},count:function(I){var P=0;return Xt(I,function(){P++}),P},toArray:function(I){return Xt(I,function(P){return P})||[]},only:function(I){if(!it(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},ee.Component=V,ee.Fragment=n,ee.Profiler=l,ee.PureComponent=me,ee.StrictMode=s,ee.Suspense=p,ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,ee.act=j,ee.cloneElement=function(I,P,J){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var re=L({},I.props),ae=I.key,ue=I.ref,Ee=I._owner;if(P!=null){if(P.ref!==void 0&&(ue=P.ref,Ee=Z.current),P.key!==void 0&&(ae=""+P.key),I.type&&I.type.defaultProps)var he=I.type.defaultProps;for(Re in P)Ue.call(P,Re)&&!Q.hasOwnProperty(Re)&&(re[Re]=P[Re]===void 0&&he!==void 0?he[Re]:P[Re])}var Re=arguments.length-2;if(Re===1)re.children=J;else if(1<Re){he=Array(Re);for(var wt=0;wt<Re;wt++)he[wt]=arguments[wt+2];re.children=he}return{$$typeof:r,type:I.type,key:ae,ref:ue,props:re,_owner:Ee}},ee.createContext=function(I){return I={$$typeof:d,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:u,_context:I},I.Consumer=I},ee.createElement=se,ee.createFactory=function(I){var P=se.bind(null,I);return P.type=I,P},ee.createRef=function(){return{current:null}},ee.forwardRef=function(I){return{$$typeof:f,render:I}},ee.isValidElement=it,ee.lazy=function(I){return{$$typeof:v,_payload:{_status:-1,_result:I},_init:ut}},ee.memo=function(I,P){return{$$typeof:g,type:I,compare:P===void 0?null:P}},ee.startTransition=function(I){var P=b.transition;b.transition={};try{I()}finally{b.transition=P}},ee.unstable_act=j,ee.useCallback=function(I,P){return Oe.current.useCallback(I,P)},ee.useContext=function(I){return Oe.current.useContext(I)},ee.useDebugValue=function(){},ee.useDeferredValue=function(I){return Oe.current.useDeferredValue(I)},ee.useEffect=function(I,P){return Oe.current.useEffect(I,P)},ee.useId=function(){return Oe.current.useId()},ee.useImperativeHandle=function(I,P,J){return Oe.current.useImperativeHandle(I,P,J)},ee.useInsertionEffect=function(I,P){return Oe.current.useInsertionEffect(I,P)},ee.useLayoutEffect=function(I,P){return Oe.current.useLayoutEffect(I,P)},ee.useMemo=function(I,P){return Oe.current.useMemo(I,P)},ee.useReducer=function(I,P,J){return Oe.current.useReducer(I,P,J)},ee.useRef=function(I){return Oe.current.useRef(I)},ee.useState=function(I){return Oe.current.useState(I)},ee.useSyncExternalStore=function(I,P,J){return Oe.current.useSyncExternalStore(I,P,J)},ee.useTransition=function(){return Oe.current.useTransition()},ee.version="18.3.1",ee}var Kp;function Xc(){return Kp||(Kp=1,ec.exports=l0()),ec.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp;function a0(){if(Yp)return ps;Yp=1;var r=Xc(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(f,p,g){var v,y={},E=null,R=null;g!==void 0&&(E=""+g),p.key!==void 0&&(E=""+p.key),p.ref!==void 0&&(R=p.ref);for(v in p)s.call(p,v)&&!u.hasOwnProperty(v)&&(y[v]=p[v]);if(f&&f.defaultProps)for(v in p=f.defaultProps,p)y[v]===void 0&&(y[v]=p[v]);return{$$typeof:e,type:f,key:E,ref:R,props:y,_owner:l.current}}return ps.Fragment=n,ps.jsx=d,ps.jsxs=d,ps}var Qp;function u0(){return Qp||(Qp=1,Zu.exports=a0()),Zu.exports}var G=u0(),we=Xc();const Xp=Pg(we);var tl={},tc={exports:{}},mt={},nc={exports:{}},rc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp;function c0(){return Jp||(Jp=1,function(r){function e(b,q){var j=b.length;b.push(q);e:for(;0<j;){var I=j-1>>>1,P=b[I];if(0<l(P,q))b[I]=q,b[j]=P,j=I;else break e}}function n(b){return b.length===0?null:b[0]}function s(b){if(b.length===0)return null;var q=b[0],j=b.pop();if(j!==q){b[0]=j;e:for(var I=0,P=b.length,J=P>>>1;I<J;){var re=2*(I+1)-1,ae=b[re],ue=re+1,Ee=b[ue];if(0>l(ae,j))ue<P&&0>l(Ee,ae)?(b[I]=Ee,b[ue]=j,I=ue):(b[I]=ae,b[re]=j,I=re);else if(ue<P&&0>l(Ee,j))b[I]=Ee,b[ue]=j,I=ue;else break e}}return q}function l(b,q){var j=b.sortIndex-q.sortIndex;return j!==0?j:b.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var d=Date,f=d.now();r.unstable_now=function(){return d.now()-f}}var p=[],g=[],v=1,y=null,E=3,R=!1,L=!1,M=!1,V=typeof setTimeout=="function"?setTimeout:null,pe=typeof clearTimeout=="function"?clearTimeout:null,me=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ge(b){for(var q=n(g);q!==null;){if(q.callback===null)s(g);else if(q.startTime<=b)s(g),q.sortIndex=q.expirationTime,e(p,q);else break;q=n(g)}}function le(b){if(M=!1,ge(b),!L)if(n(p)!==null)L=!0,ut(Ue);else{var q=n(g);q!==null&&Oe(le,q.startTime-b)}}function Ue(b,q){L=!1,M&&(M=!1,pe(se),se=-1),R=!0;var j=E;try{for(ge(q),y=n(p);y!==null&&(!(y.expirationTime>q)||b&&!Qt());){var I=y.callback;if(typeof I=="function"){y.callback=null,E=y.priorityLevel;var P=I(y.expirationTime<=q);q=r.unstable_now(),typeof P=="function"?y.callback=P:y===n(p)&&s(p),ge(q)}else s(p);y=n(p)}if(y!==null)var J=!0;else{var re=n(g);re!==null&&Oe(le,re.startTime-q),J=!1}return J}finally{y=null,E=j,R=!1}}var Z=!1,Q=null,se=-1,We=5,it=-1;function Qt(){return!(r.unstable_now()-it<We)}function Nt(){if(Q!==null){var b=r.unstable_now();it=b;var q=!0;try{q=Q(!0,b)}finally{q?vt():(Z=!1,Q=null)}}else Z=!1}var vt;if(typeof me=="function")vt=function(){me(Nt)};else if(typeof MessageChannel<"u"){var Ft=new MessageChannel,Xt=Ft.port2;Ft.port1.onmessage=Nt,vt=function(){Xt.postMessage(null)}}else vt=function(){V(Nt,0)};function ut(b){Q=b,Z||(Z=!0,vt())}function Oe(b,q){se=V(function(){b(r.unstable_now())},q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(b){b.callback=null},r.unstable_continueExecution=function(){L||R||(L=!0,ut(Ue))},r.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):We=0<b?Math.floor(1e3/b):5},r.unstable_getCurrentPriorityLevel=function(){return E},r.unstable_getFirstCallbackNode=function(){return n(p)},r.unstable_next=function(b){switch(E){case 1:case 2:case 3:var q=3;break;default:q=E}var j=E;E=q;try{return b()}finally{E=j}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(b,q){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var j=E;E=b;try{return q()}finally{E=j}},r.unstable_scheduleCallback=function(b,q,j){var I=r.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?I+j:I):j=I,b){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=j+P,b={id:v++,callback:q,priorityLevel:b,startTime:j,expirationTime:P,sortIndex:-1},j>I?(b.sortIndex=j,e(g,b),n(p)===null&&b===n(g)&&(M?(pe(se),se=-1):M=!0,Oe(le,j-I))):(b.sortIndex=P,e(p,b),L||R||(L=!0,ut(Ue))),b},r.unstable_shouldYield=Qt,r.unstable_wrapCallback=function(b){var q=E;return function(){var j=E;E=q;try{return b.apply(this,arguments)}finally{E=j}}}}(rc)),rc}var Zp;function d0(){return Zp||(Zp=1,nc.exports=c0()),nc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var em;function h0(){if(em)return mt;em=1;var r=Xc(),e=d0();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function u(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(l[t]=i,t=0;t<i.length;t++)s.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},y={};function E(t){return p.call(y,t)?!0:p.call(v,t)?!1:g.test(t)?y[t]=!0:(v[t]=!0,!1)}function R(t,i,o,a){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return a?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function L(t,i,o,a){if(i===null||typeof i>"u"||R(t,i,o,a))return!0;if(a)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function M(t,i,o,a,c,h,m){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=a,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=m}var V={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){V[t]=new M(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];V[i]=new M(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){V[t]=new M(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){V[t]=new M(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){V[t]=new M(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){V[t]=new M(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){V[t]=new M(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){V[t]=new M(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){V[t]=new M(t,5,!1,t.toLowerCase(),null,!1,!1)});var pe=/[\-:]([a-z])/g;function me(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(pe,me);V[i]=new M(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(pe,me);V[i]=new M(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(pe,me);V[i]=new M(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){V[t]=new M(t,1,!1,t.toLowerCase(),null,!1,!1)}),V.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){V[t]=new M(t,1,!1,t.toLowerCase(),null,!0,!0)});function ge(t,i,o,a){var c=V.hasOwnProperty(i)?V[i]:null;(c!==null?c.type!==0:a||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(L(i,o,c,a)&&(o=null),a||c===null?E(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):c.mustUseProperty?t[c.propertyName]=o===null?c.type===3?!1:"":o:(i=c.attributeName,a=c.attributeNamespace,o===null?t.removeAttribute(i):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,a?t.setAttributeNS(a,i,o):t.setAttribute(i,o))))}var le=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ue=Symbol.for("react.element"),Z=Symbol.for("react.portal"),Q=Symbol.for("react.fragment"),se=Symbol.for("react.strict_mode"),We=Symbol.for("react.profiler"),it=Symbol.for("react.provider"),Qt=Symbol.for("react.context"),Nt=Symbol.for("react.forward_ref"),vt=Symbol.for("react.suspense"),Ft=Symbol.for("react.suspense_list"),Xt=Symbol.for("react.memo"),ut=Symbol.for("react.lazy"),Oe=Symbol.for("react.offscreen"),b=Symbol.iterator;function q(t){return t===null||typeof t!="object"?null:(t=b&&t[b]||t["@@iterator"],typeof t=="function"?t:null)}var j=Object.assign,I;function P(t){if(I===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+t}var J=!1;function re(t,i){if(!t||J)return"";J=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(k){var a=k}Reflect.construct(t,[],i)}else{try{i.call()}catch(k){a=k}t.call(i.prototype)}else{try{throw Error()}catch(k){a=k}t()}}catch(k){if(k&&a&&typeof k.stack=="string"){for(var c=k.stack.split(`
`),h=a.stack.split(`
`),m=c.length-1,_=h.length-1;1<=m&&0<=_&&c[m]!==h[_];)_--;for(;1<=m&&0<=_;m--,_--)if(c[m]!==h[_]){if(m!==1||_!==1)do if(m--,_--,0>_||c[m]!==h[_]){var w=`
`+c[m].replace(" at new "," at ");return t.displayName&&w.includes("<anonymous>")&&(w=w.replace("<anonymous>",t.displayName)),w}while(1<=m&&0<=_);break}}}finally{J=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?P(t):""}function ae(t){switch(t.tag){case 5:return P(t.type);case 16:return P("Lazy");case 13:return P("Suspense");case 19:return P("SuspenseList");case 0:case 2:case 15:return t=re(t.type,!1),t;case 11:return t=re(t.type.render,!1),t;case 1:return t=re(t.type,!0),t;default:return""}}function ue(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Q:return"Fragment";case Z:return"Portal";case We:return"Profiler";case se:return"StrictMode";case vt:return"Suspense";case Ft:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Qt:return(t.displayName||"Context")+".Consumer";case it:return(t._context.displayName||"Context")+".Provider";case Nt:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Xt:return i=t.displayName||null,i!==null?i:ue(t.type)||"Memo";case ut:i=t._payload,t=t._init;try{return ue(t(i))}catch{}}return null}function Ee(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ue(i);case 8:return i===se?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function he(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Re(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function wt(t){var i=Re(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),a=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(m){a=""+m,h.call(this,m)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(m){a=""+m},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Hs(t){t._valueTracker||(t._valueTracker=wt(t))}function Jd(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),a="";return t&&(a=Re(t)?t.checked?"true":"false":t.value),t=a,t!==o?(i.setValue(t),!0):!1}function $s(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function oa(t,i){var o=i.checked;return j({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function Zd(t,i){var o=i.defaultValue==null?"":i.defaultValue,a=i.checked!=null?i.checked:i.defaultChecked;o=he(i.value!=null?i.value:o),t._wrapperState={initialChecked:a,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function eh(t,i){i=i.checked,i!=null&&ge(t,"checked",i,!1)}function la(t,i){eh(t,i);var o=he(i.value),a=i.type;if(o!=null)a==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(a==="submit"||a==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?aa(t,i.type,o):i.hasOwnProperty("defaultValue")&&aa(t,i.type,he(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function th(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var a=i.type;if(!(a!=="submit"&&a!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function aa(t,i,o){(i!=="number"||$s(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Pi=Array.isArray;function Mr(t,i,o,a){if(t=t.options,i){i={};for(var c=0;c<o.length;c++)i["$"+o[c]]=!0;for(o=0;o<t.length;o++)c=i.hasOwnProperty("$"+t[o].value),t[o].selected!==c&&(t[o].selected=c),c&&a&&(t[o].defaultSelected=!0)}else{for(o=""+he(o),i=null,c=0;c<t.length;c++){if(t[c].value===o){t[c].selected=!0,a&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function ua(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return j({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function nh(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(Pi(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:he(o)}}function rh(t,i){var o=he(i.value),a=he(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),a!=null&&(t.defaultValue=""+a)}function ih(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function sh(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ca(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?sh(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Gs,oh=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,a,c){MSApp.execUnsafeLocalFunction(function(){return t(i,o,a,c)})}:t}(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Gs=Gs||document.createElement("div"),Gs.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Gs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Ai(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Oi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dv=["Webkit","ms","Moz","O"];Object.keys(Oi).forEach(function(t){dv.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Oi[i]=Oi[t]})});function lh(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Oi.hasOwnProperty(t)&&Oi[t]?(""+i).trim():i+"px"}function ah(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var a=o.indexOf("--")===0,c=lh(o,i[o],a);o==="float"&&(o="cssFloat"),a?t.setProperty(o,c):t[o]=c}}var hv=j({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function da(t,i){if(i){if(hv[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function ha(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fa=null;function pa(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ma=null,br=null,Fr=null;function uh(t){if(t=Zi(t)){if(typeof ma!="function")throw Error(n(280));var i=t.stateNode;i&&(i=go(i),ma(t.stateNode,t.type,i))}}function ch(t){br?Fr?Fr.push(t):Fr=[t]:br=t}function dh(){if(br){var t=br,i=Fr;if(Fr=br=null,uh(t),i)for(t=0;t<i.length;t++)uh(i[t])}}function hh(t,i){return t(i)}function fh(){}var ga=!1;function ph(t,i,o){if(ga)return t(i,o);ga=!0;try{return hh(t,i,o)}finally{ga=!1,(br!==null||Fr!==null)&&(fh(),dh())}}function xi(t,i){var o=t.stateNode;if(o===null)return null;var a=go(o);if(a===null)return null;o=a[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var _a=!1;if(f)try{var Di={};Object.defineProperty(Di,"passive",{get:function(){_a=!0}}),window.addEventListener("test",Di,Di),window.removeEventListener("test",Di,Di)}catch{_a=!1}function fv(t,i,o,a,c,h,m,_,w){var k=Array.prototype.slice.call(arguments,3);try{i.apply(o,k)}catch(A){this.onError(A)}}var Li=!1,qs=null,Ks=!1,ya=null,pv={onError:function(t){Li=!0,qs=t}};function mv(t,i,o,a,c,h,m,_,w){Li=!1,qs=null,fv.apply(pv,arguments)}function gv(t,i,o,a,c,h,m,_,w){if(mv.apply(this,arguments),Li){if(Li){var k=qs;Li=!1,qs=null}else throw Error(n(198));Ks||(Ks=!0,ya=k)}}function or(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,i.flags&4098&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function mh(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function gh(t){if(or(t)!==t)throw Error(n(188))}function _v(t){var i=t.alternate;if(!i){if(i=or(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,a=i;;){var c=o.return;if(c===null)break;var h=c.alternate;if(h===null){if(a=c.return,a!==null){o=a;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===o)return gh(c),t;if(h===a)return gh(c),i;h=h.sibling}throw Error(n(188))}if(o.return!==a.return)o=c,a=h;else{for(var m=!1,_=c.child;_;){if(_===o){m=!0,o=c,a=h;break}if(_===a){m=!0,a=c,o=h;break}_=_.sibling}if(!m){for(_=h.child;_;){if(_===o){m=!0,o=h,a=c;break}if(_===a){m=!0,a=h,o=c;break}_=_.sibling}if(!m)throw Error(n(189))}}if(o.alternate!==a)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function _h(t){return t=_v(t),t!==null?yh(t):null}function yh(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=yh(t);if(i!==null)return i;t=t.sibling}return null}var vh=e.unstable_scheduleCallback,wh=e.unstable_cancelCallback,yv=e.unstable_shouldYield,vv=e.unstable_requestPaint,Me=e.unstable_now,wv=e.unstable_getCurrentPriorityLevel,va=e.unstable_ImmediatePriority,Eh=e.unstable_UserBlockingPriority,Ys=e.unstable_NormalPriority,Ev=e.unstable_LowPriority,Sh=e.unstable_IdlePriority,Qs=null,Jt=null;function Sv(t){if(Jt&&typeof Jt.onCommitFiberRoot=="function")try{Jt.onCommitFiberRoot(Qs,t,void 0,(t.current.flags&128)===128)}catch{}}var Ut=Math.clz32?Math.clz32:Tv,Iv=Math.log,Cv=Math.LN2;function Tv(t){return t>>>=0,t===0?32:31-(Iv(t)/Cv|0)|0}var Xs=64,Js=4194304;function Mi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Zs(t,i){var o=t.pendingLanes;if(o===0)return 0;var a=0,c=t.suspendedLanes,h=t.pingedLanes,m=o&268435455;if(m!==0){var _=m&~c;_!==0?a=Mi(_):(h&=m,h!==0&&(a=Mi(h)))}else m=o&~c,m!==0?a=Mi(m):h!==0&&(a=Mi(h));if(a===0)return 0;if(i!==0&&i!==a&&!(i&c)&&(c=a&-a,h=i&-i,c>=h||c===16&&(h&4194240)!==0))return i;if(a&4&&(a|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=a;0<i;)o=31-Ut(i),c=1<<o,a|=t[o],i&=~c;return a}function kv(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rv(t,i){for(var o=t.suspendedLanes,a=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var m=31-Ut(h),_=1<<m,w=c[m];w===-1?(!(_&o)||_&a)&&(c[m]=kv(_,i)):w<=i&&(t.expiredLanes|=_),h&=~_}}function wa(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ih(){var t=Xs;return Xs<<=1,!(Xs&4194240)&&(Xs=64),t}function Ea(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function bi(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Ut(i),t[i]=o}function Nv(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var a=t.eventTimes;for(t=t.expirationTimes;0<o;){var c=31-Ut(o),h=1<<c;i[c]=0,a[c]=-1,t[c]=-1,o&=~h}}function Sa(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var a=31-Ut(o),c=1<<a;c&i|t[a]&i&&(t[a]|=i),o&=~c}}var fe=0;function Ch(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Th,Ia,kh,Rh,Nh,Ca=!1,eo=[],Rn=null,Nn=null,Pn=null,Fi=new Map,Ui=new Map,An=[],Pv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ph(t,i){switch(t){case"focusin":case"focusout":Rn=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":Pn=null;break;case"pointerover":case"pointerout":Fi.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ui.delete(i.pointerId)}}function ji(t,i,o,a,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:a,nativeEvent:h,targetContainers:[c]},i!==null&&(i=Zi(i),i!==null&&Ia(i)),t):(t.eventSystemFlags|=a,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function Av(t,i,o,a,c){switch(i){case"focusin":return Rn=ji(Rn,t,i,o,a,c),!0;case"dragenter":return Nn=ji(Nn,t,i,o,a,c),!0;case"mouseover":return Pn=ji(Pn,t,i,o,a,c),!0;case"pointerover":var h=c.pointerId;return Fi.set(h,ji(Fi.get(h)||null,t,i,o,a,c)),!0;case"gotpointercapture":return h=c.pointerId,Ui.set(h,ji(Ui.get(h)||null,t,i,o,a,c)),!0}return!1}function Ah(t){var i=lr(t.target);if(i!==null){var o=or(i);if(o!==null){if(i=o.tag,i===13){if(i=mh(o),i!==null){t.blockedOn=i,Nh(t.priority,function(){kh(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function to(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=ka(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var a=new o.constructor(o.type,o);fa=a,o.target.dispatchEvent(a),fa=null}else return i=Zi(o),i!==null&&Ia(i),t.blockedOn=o,!1;i.shift()}return!0}function Oh(t,i,o){to(t)&&o.delete(i)}function Ov(){Ca=!1,Rn!==null&&to(Rn)&&(Rn=null),Nn!==null&&to(Nn)&&(Nn=null),Pn!==null&&to(Pn)&&(Pn=null),Fi.forEach(Oh),Ui.forEach(Oh)}function zi(t,i){t.blockedOn===i&&(t.blockedOn=null,Ca||(Ca=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ov)))}function Wi(t){function i(c){return zi(c,t)}if(0<eo.length){zi(eo[0],t);for(var o=1;o<eo.length;o++){var a=eo[o];a.blockedOn===t&&(a.blockedOn=null)}}for(Rn!==null&&zi(Rn,t),Nn!==null&&zi(Nn,t),Pn!==null&&zi(Pn,t),Fi.forEach(i),Ui.forEach(i),o=0;o<An.length;o++)a=An[o],a.blockedOn===t&&(a.blockedOn=null);for(;0<An.length&&(o=An[0],o.blockedOn===null);)Ah(o),o.blockedOn===null&&An.shift()}var Ur=le.ReactCurrentBatchConfig,no=!0;function xv(t,i,o,a){var c=fe,h=Ur.transition;Ur.transition=null;try{fe=1,Ta(t,i,o,a)}finally{fe=c,Ur.transition=h}}function Dv(t,i,o,a){var c=fe,h=Ur.transition;Ur.transition=null;try{fe=4,Ta(t,i,o,a)}finally{fe=c,Ur.transition=h}}function Ta(t,i,o,a){if(no){var c=ka(t,i,o,a);if(c===null)Va(t,i,a,ro,o),Ph(t,a);else if(Av(c,t,i,o,a))a.stopPropagation();else if(Ph(t,a),i&4&&-1<Pv.indexOf(t)){for(;c!==null;){var h=Zi(c);if(h!==null&&Th(h),h=ka(t,i,o,a),h===null&&Va(t,i,a,ro,o),h===c)break;c=h}c!==null&&a.stopPropagation()}else Va(t,i,a,null,o)}}var ro=null;function ka(t,i,o,a){if(ro=null,t=pa(a),t=lr(t),t!==null)if(i=or(t),i===null)t=null;else if(o=i.tag,o===13){if(t=mh(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return ro=t,null}function xh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wv()){case va:return 1;case Eh:return 4;case Ys:case Ev:return 16;case Sh:return 536870912;default:return 16}default:return 16}}var On=null,Ra=null,io=null;function Dh(){if(io)return io;var t,i=Ra,o=i.length,a,c="value"in On?On.value:On.textContent,h=c.length;for(t=0;t<o&&i[t]===c[t];t++);var m=o-t;for(a=1;a<=m&&i[o-a]===c[h-a];a++);return io=c.slice(t,1<a?1-a:void 0)}function so(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function oo(){return!0}function Lh(){return!1}function Et(t){function i(o,a,c,h,m){this._reactName=o,this._targetInst=c,this.type=a,this.nativeEvent=h,this.target=m,this.currentTarget=null;for(var _ in t)t.hasOwnProperty(_)&&(o=t[_],this[_]=o?o(h):h[_]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?oo:Lh,this.isPropagationStopped=Lh,this}return j(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=oo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=oo)},persist:function(){},isPersistent:oo}),i}var jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Na=Et(jr),Bi=j({},jr,{view:0,detail:0}),Lv=Et(Bi),Pa,Aa,Vi,lo=j({},Bi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xa,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vi&&(Vi&&t.type==="mousemove"?(Pa=t.screenX-Vi.screenX,Aa=t.screenY-Vi.screenY):Aa=Pa=0,Vi=t),Pa)},movementY:function(t){return"movementY"in t?t.movementY:Aa}}),Mh=Et(lo),Mv=j({},lo,{dataTransfer:0}),bv=Et(Mv),Fv=j({},Bi,{relatedTarget:0}),Oa=Et(Fv),Uv=j({},jr,{animationName:0,elapsedTime:0,pseudoElement:0}),jv=Et(Uv),zv=j({},jr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Wv=Et(zv),Bv=j({},jr,{data:0}),bh=Et(Bv),Vv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$v={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gv(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=$v[t])?!!i[t]:!1}function xa(){return Gv}var qv=j({},Bi,{key:function(t){if(t.key){var i=Vv[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=so(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Hv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xa,charCode:function(t){return t.type==="keypress"?so(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?so(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Kv=Et(qv),Yv=j({},lo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fh=Et(Yv),Qv=j({},Bi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xa}),Xv=Et(Qv),Jv=j({},jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zv=Et(Jv),ew=j({},lo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),tw=Et(ew),nw=[9,13,27,32],Da=f&&"CompositionEvent"in window,Hi=null;f&&"documentMode"in document&&(Hi=document.documentMode);var rw=f&&"TextEvent"in window&&!Hi,Uh=f&&(!Da||Hi&&8<Hi&&11>=Hi),jh=" ",zh=!1;function Wh(t,i){switch(t){case"keyup":return nw.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var zr=!1;function iw(t,i){switch(t){case"compositionend":return Bh(i);case"keypress":return i.which!==32?null:(zh=!0,jh);case"textInput":return t=i.data,t===jh&&zh?null:t;default:return null}}function sw(t,i){if(zr)return t==="compositionend"||!Da&&Wh(t,i)?(t=Dh(),io=Ra=On=null,zr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Uh&&i.locale!=="ko"?null:i.data;default:return null}}var ow={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vh(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!ow[t.type]:i==="textarea"}function Hh(t,i,o,a){ch(a),i=fo(i,"onChange"),0<i.length&&(o=new Na("onChange","change",null,o,a),t.push({event:o,listeners:i}))}var $i=null,Gi=null;function lw(t){uf(t,0)}function ao(t){var i=$r(t);if(Jd(i))return t}function aw(t,i){if(t==="change")return i}var $h=!1;if(f){var La;if(f){var Ma="oninput"in document;if(!Ma){var Gh=document.createElement("div");Gh.setAttribute("oninput","return;"),Ma=typeof Gh.oninput=="function"}La=Ma}else La=!1;$h=La&&(!document.documentMode||9<document.documentMode)}function qh(){$i&&($i.detachEvent("onpropertychange",Kh),Gi=$i=null)}function Kh(t){if(t.propertyName==="value"&&ao(Gi)){var i=[];Hh(i,Gi,t,pa(t)),ph(lw,i)}}function uw(t,i,o){t==="focusin"?(qh(),$i=i,Gi=o,$i.attachEvent("onpropertychange",Kh)):t==="focusout"&&qh()}function cw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ao(Gi)}function dw(t,i){if(t==="click")return ao(i)}function hw(t,i){if(t==="input"||t==="change")return ao(i)}function fw(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var jt=typeof Object.is=="function"?Object.is:fw;function qi(t,i){if(jt(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),a=Object.keys(i);if(o.length!==a.length)return!1;for(a=0;a<o.length;a++){var c=o[a];if(!p.call(i,c)||!jt(t[c],i[c]))return!1}return!0}function Yh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Qh(t,i){var o=Yh(t);t=0;for(var a;o;){if(o.nodeType===3){if(a=t+o.textContent.length,t<=i&&a>=i)return{node:o,offset:i-t};t=a}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Yh(o)}}function Xh(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Xh(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Jh(){for(var t=window,i=$s();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=$s(t.document)}return i}function ba(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function pw(t){var i=Jh(),o=t.focusedElem,a=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&Xh(o.ownerDocument.documentElement,o)){if(a!==null&&ba(o)){if(i=a.start,t=a.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=o.textContent.length,h=Math.min(a.start,c);a=a.end===void 0?h:Math.min(a.end,c),!t.extend&&h>a&&(c=a,a=h,h=c),c=Qh(o,h);var m=Qh(o,a);c&&m&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==m.node||t.focusOffset!==m.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),h>a?(t.addRange(i),t.extend(m.node,m.offset)):(i.setEnd(m.node,m.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var mw=f&&"documentMode"in document&&11>=document.documentMode,Wr=null,Fa=null,Ki=null,Ua=!1;function Zh(t,i,o){var a=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Ua||Wr==null||Wr!==$s(a)||(a=Wr,"selectionStart"in a&&ba(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ki&&qi(Ki,a)||(Ki=a,a=fo(Fa,"onSelect"),0<a.length&&(i=new Na("onSelect","select",null,i,o),t.push({event:i,listeners:a}),i.target=Wr)))}function uo(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var Br={animationend:uo("Animation","AnimationEnd"),animationiteration:uo("Animation","AnimationIteration"),animationstart:uo("Animation","AnimationStart"),transitionend:uo("Transition","TransitionEnd")},ja={},ef={};f&&(ef=document.createElement("div").style,"AnimationEvent"in window||(delete Br.animationend.animation,delete Br.animationiteration.animation,delete Br.animationstart.animation),"TransitionEvent"in window||delete Br.transitionend.transition);function co(t){if(ja[t])return ja[t];if(!Br[t])return t;var i=Br[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in ef)return ja[t]=i[o];return t}var tf=co("animationend"),nf=co("animationiteration"),rf=co("animationstart"),sf=co("transitionend"),of=new Map,lf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xn(t,i){of.set(t,i),u(i,[t])}for(var za=0;za<lf.length;za++){var Wa=lf[za],gw=Wa.toLowerCase(),_w=Wa[0].toUpperCase()+Wa.slice(1);xn(gw,"on"+_w)}xn(tf,"onAnimationEnd"),xn(nf,"onAnimationIteration"),xn(rf,"onAnimationStart"),xn("dblclick","onDoubleClick"),xn("focusin","onFocus"),xn("focusout","onBlur"),xn(sf,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yi));function af(t,i,o){var a=t.type||"unknown-event";t.currentTarget=o,gv(a,i,void 0,t),t.currentTarget=null}function uf(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var a=t[o],c=a.event;a=a.listeners;e:{var h=void 0;if(i)for(var m=a.length-1;0<=m;m--){var _=a[m],w=_.instance,k=_.currentTarget;if(_=_.listener,w!==h&&c.isPropagationStopped())break e;af(c,_,k),h=w}else for(m=0;m<a.length;m++){if(_=a[m],w=_.instance,k=_.currentTarget,_=_.listener,w!==h&&c.isPropagationStopped())break e;af(c,_,k),h=w}}}if(Ks)throw t=ya,Ks=!1,ya=null,t}function Te(t,i){var o=i[Ya];o===void 0&&(o=i[Ya]=new Set);var a=t+"__bubble";o.has(a)||(cf(i,t,2,!1),o.add(a))}function Ba(t,i,o){var a=0;i&&(a|=4),cf(o,t,a,i)}var ho="_reactListening"+Math.random().toString(36).slice(2);function Qi(t){if(!t[ho]){t[ho]=!0,s.forEach(function(o){o!=="selectionchange"&&(yw.has(o)||Ba(o,!1,t),Ba(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ho]||(i[ho]=!0,Ba("selectionchange",!1,i))}}function cf(t,i,o,a){switch(xh(i)){case 1:var c=xv;break;case 4:c=Dv;break;default:c=Ta}o=c.bind(null,i,o,t),c=void 0,!_a||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),a?c!==void 0?t.addEventListener(i,o,{capture:!0,passive:c}):t.addEventListener(i,o,!0):c!==void 0?t.addEventListener(i,o,{passive:c}):t.addEventListener(i,o,!1)}function Va(t,i,o,a,c){var h=a;if(!(i&1)&&!(i&2)&&a!==null)e:for(;;){if(a===null)return;var m=a.tag;if(m===3||m===4){var _=a.stateNode.containerInfo;if(_===c||_.nodeType===8&&_.parentNode===c)break;if(m===4)for(m=a.return;m!==null;){var w=m.tag;if((w===3||w===4)&&(w=m.stateNode.containerInfo,w===c||w.nodeType===8&&w.parentNode===c))return;m=m.return}for(;_!==null;){if(m=lr(_),m===null)return;if(w=m.tag,w===5||w===6){a=h=m;continue e}_=_.parentNode}}a=a.return}ph(function(){var k=h,A=pa(o),O=[];e:{var N=of.get(t);if(N!==void 0){var F=Na,z=t;switch(t){case"keypress":if(so(o)===0)break e;case"keydown":case"keyup":F=Kv;break;case"focusin":z="focus",F=Oa;break;case"focusout":z="blur",F=Oa;break;case"beforeblur":case"afterblur":F=Oa;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=Mh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=bv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=Xv;break;case tf:case nf:case rf:F=jv;break;case sf:F=Zv;break;case"scroll":F=Lv;break;case"wheel":F=tw;break;case"copy":case"cut":case"paste":F=Wv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=Fh}var W=(i&4)!==0,be=!W&&t==="scroll",C=W?N!==null?N+"Capture":null:N;W=[];for(var S=k,T;S!==null;){T=S;var x=T.stateNode;if(T.tag===5&&x!==null&&(T=x,C!==null&&(x=xi(S,C),x!=null&&W.push(Xi(S,x,T)))),be)break;S=S.return}0<W.length&&(N=new F(N,z,null,o,A),O.push({event:N,listeners:W}))}}if(!(i&7)){e:{if(N=t==="mouseover"||t==="pointerover",F=t==="mouseout"||t==="pointerout",N&&o!==fa&&(z=o.relatedTarget||o.fromElement)&&(lr(z)||z[un]))break e;if((F||N)&&(N=A.window===A?A:(N=A.ownerDocument)?N.defaultView||N.parentWindow:window,F?(z=o.relatedTarget||o.toElement,F=k,z=z?lr(z):null,z!==null&&(be=or(z),z!==be||z.tag!==5&&z.tag!==6)&&(z=null)):(F=null,z=k),F!==z)){if(W=Mh,x="onMouseLeave",C="onMouseEnter",S="mouse",(t==="pointerout"||t==="pointerover")&&(W=Fh,x="onPointerLeave",C="onPointerEnter",S="pointer"),be=F==null?N:$r(F),T=z==null?N:$r(z),N=new W(x,S+"leave",F,o,A),N.target=be,N.relatedTarget=T,x=null,lr(A)===k&&(W=new W(C,S+"enter",z,o,A),W.target=T,W.relatedTarget=be,x=W),be=x,F&&z)t:{for(W=F,C=z,S=0,T=W;T;T=Vr(T))S++;for(T=0,x=C;x;x=Vr(x))T++;for(;0<S-T;)W=Vr(W),S--;for(;0<T-S;)C=Vr(C),T--;for(;S--;){if(W===C||C!==null&&W===C.alternate)break t;W=Vr(W),C=Vr(C)}W=null}else W=null;F!==null&&df(O,N,F,W,!1),z!==null&&be!==null&&df(O,be,z,W,!0)}}e:{if(N=k?$r(k):window,F=N.nodeName&&N.nodeName.toLowerCase(),F==="select"||F==="input"&&N.type==="file")var B=aw;else if(Vh(N))if($h)B=hw;else{B=cw;var H=uw}else(F=N.nodeName)&&F.toLowerCase()==="input"&&(N.type==="checkbox"||N.type==="radio")&&(B=dw);if(B&&(B=B(t,k))){Hh(O,B,o,A);break e}H&&H(t,N,k),t==="focusout"&&(H=N._wrapperState)&&H.controlled&&N.type==="number"&&aa(N,"number",N.value)}switch(H=k?$r(k):window,t){case"focusin":(Vh(H)||H.contentEditable==="true")&&(Wr=H,Fa=k,Ki=null);break;case"focusout":Ki=Fa=Wr=null;break;case"mousedown":Ua=!0;break;case"contextmenu":case"mouseup":case"dragend":Ua=!1,Zh(O,o,A);break;case"selectionchange":if(mw)break;case"keydown":case"keyup":Zh(O,o,A)}var $;if(Da)e:{switch(t){case"compositionstart":var Y="onCompositionStart";break e;case"compositionend":Y="onCompositionEnd";break e;case"compositionupdate":Y="onCompositionUpdate";break e}Y=void 0}else zr?Wh(t,o)&&(Y="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(Y="onCompositionStart");Y&&(Uh&&o.locale!=="ko"&&(zr||Y!=="onCompositionStart"?Y==="onCompositionEnd"&&zr&&($=Dh()):(On=A,Ra="value"in On?On.value:On.textContent,zr=!0)),H=fo(k,Y),0<H.length&&(Y=new bh(Y,t,null,o,A),O.push({event:Y,listeners:H}),$?Y.data=$:($=Bh(o),$!==null&&(Y.data=$)))),($=rw?iw(t,o):sw(t,o))&&(k=fo(k,"onBeforeInput"),0<k.length&&(A=new bh("onBeforeInput","beforeinput",null,o,A),O.push({event:A,listeners:k}),A.data=$))}uf(O,i)})}function Xi(t,i,o){return{instance:t,listener:i,currentTarget:o}}function fo(t,i){for(var o=i+"Capture",a=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=xi(t,o),h!=null&&a.unshift(Xi(t,h,c)),h=xi(t,i),h!=null&&a.push(Xi(t,h,c))),t=t.return}return a}function Vr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function df(t,i,o,a,c){for(var h=i._reactName,m=[];o!==null&&o!==a;){var _=o,w=_.alternate,k=_.stateNode;if(w!==null&&w===a)break;_.tag===5&&k!==null&&(_=k,c?(w=xi(o,h),w!=null&&m.unshift(Xi(o,w,_))):c||(w=xi(o,h),w!=null&&m.push(Xi(o,w,_)))),o=o.return}m.length!==0&&t.push({event:i,listeners:m})}var vw=/\r\n?/g,ww=/\u0000|\uFFFD/g;function hf(t){return(typeof t=="string"?t:""+t).replace(vw,`
`).replace(ww,"")}function po(t,i,o){if(i=hf(i),hf(t)!==i&&o)throw Error(n(425))}function mo(){}var Ha=null,$a=null;function Ga(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var qa=typeof setTimeout=="function"?setTimeout:void 0,Ew=typeof clearTimeout=="function"?clearTimeout:void 0,ff=typeof Promise=="function"?Promise:void 0,Sw=typeof queueMicrotask=="function"?queueMicrotask:typeof ff<"u"?function(t){return ff.resolve(null).then(t).catch(Iw)}:qa;function Iw(t){setTimeout(function(){throw t})}function Ka(t,i){var o=i,a=0;do{var c=o.nextSibling;if(t.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(a===0){t.removeChild(c),Wi(i);return}a--}else o!=="$"&&o!=="$?"&&o!=="$!"||a++;o=c}while(o);Wi(i)}function Dn(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function pf(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var Hr=Math.random().toString(36).slice(2),Zt="__reactFiber$"+Hr,Ji="__reactProps$"+Hr,un="__reactContainer$"+Hr,Ya="__reactEvents$"+Hr,Cw="__reactListeners$"+Hr,Tw="__reactHandles$"+Hr;function lr(t){var i=t[Zt];if(i)return i;for(var o=t.parentNode;o;){if(i=o[un]||o[Zt]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=pf(t);t!==null;){if(o=t[Zt])return o;t=pf(t)}return i}t=o,o=t.parentNode}return null}function Zi(t){return t=t[Zt]||t[un],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function $r(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function go(t){return t[Ji]||null}var Qa=[],Gr=-1;function Ln(t){return{current:t}}function ke(t){0>Gr||(t.current=Qa[Gr],Qa[Gr]=null,Gr--)}function Se(t,i){Gr++,Qa[Gr]=t.current,t.current=i}var Mn={},et=Ln(Mn),ct=Ln(!1),ar=Mn;function qr(t,i){var o=t.type.contextTypes;if(!o)return Mn;var a=t.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===i)return a.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in o)c[h]=i[h];return a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function dt(t){return t=t.childContextTypes,t!=null}function _o(){ke(ct),ke(et)}function mf(t,i,o){if(et.current!==Mn)throw Error(n(168));Se(et,i),Se(ct,o)}function gf(t,i,o){var a=t.stateNode;if(i=i.childContextTypes,typeof a.getChildContext!="function")return o;a=a.getChildContext();for(var c in a)if(!(c in i))throw Error(n(108,Ee(t)||"Unknown",c));return j({},o,a)}function yo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Mn,ar=et.current,Se(et,t),Se(ct,ct.current),!0}function _f(t,i,o){var a=t.stateNode;if(!a)throw Error(n(169));o?(t=gf(t,i,ar),a.__reactInternalMemoizedMergedChildContext=t,ke(ct),ke(et),Se(et,t)):ke(ct),Se(ct,o)}var cn=null,vo=!1,Xa=!1;function yf(t){cn===null?cn=[t]:cn.push(t)}function kw(t){vo=!0,yf(t)}function bn(){if(!Xa&&cn!==null){Xa=!0;var t=0,i=fe;try{var o=cn;for(fe=1;t<o.length;t++){var a=o[t];do a=a(!0);while(a!==null)}cn=null,vo=!1}catch(c){throw cn!==null&&(cn=cn.slice(t+1)),vh(va,bn),c}finally{fe=i,Xa=!1}}return null}var Kr=[],Yr=0,wo=null,Eo=0,Pt=[],At=0,ur=null,dn=1,hn="";function cr(t,i){Kr[Yr++]=Eo,Kr[Yr++]=wo,wo=t,Eo=i}function vf(t,i,o){Pt[At++]=dn,Pt[At++]=hn,Pt[At++]=ur,ur=t;var a=dn;t=hn;var c=32-Ut(a)-1;a&=~(1<<c),o+=1;var h=32-Ut(i)+c;if(30<h){var m=c-c%5;h=(a&(1<<m)-1).toString(32),a>>=m,c-=m,dn=1<<32-Ut(i)+c|o<<c|a,hn=h+t}else dn=1<<h|o<<c|a,hn=t}function Ja(t){t.return!==null&&(cr(t,1),vf(t,1,0))}function Za(t){for(;t===wo;)wo=Kr[--Yr],Kr[Yr]=null,Eo=Kr[--Yr],Kr[Yr]=null;for(;t===ur;)ur=Pt[--At],Pt[At]=null,hn=Pt[--At],Pt[At]=null,dn=Pt[--At],Pt[At]=null}var St=null,It=null,Ne=!1,zt=null;function wf(t,i){var o=Lt(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Ef(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,St=t,It=Dn(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,St=t,It=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=ur!==null?{id:dn,overflow:hn}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Lt(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,St=t,It=null,!0):!1;default:return!1}}function eu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function tu(t){if(Ne){var i=It;if(i){var o=i;if(!Ef(t,i)){if(eu(t))throw Error(n(418));i=Dn(o.nextSibling);var a=St;i&&Ef(t,i)?wf(a,o):(t.flags=t.flags&-4097|2,Ne=!1,St=t)}}else{if(eu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ne=!1,St=t}}}function Sf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;St=t}function So(t){if(t!==St)return!1;if(!Ne)return Sf(t),Ne=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Ga(t.type,t.memoizedProps)),i&&(i=It)){if(eu(t))throw If(),Error(n(418));for(;i;)wf(t,i),i=Dn(i.nextSibling)}if(Sf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){It=Dn(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}It=null}}else It=St?Dn(t.stateNode.nextSibling):null;return!0}function If(){for(var t=It;t;)t=Dn(t.nextSibling)}function Qr(){It=St=null,Ne=!1}function nu(t){zt===null?zt=[t]:zt.push(t)}var Rw=le.ReactCurrentBatchConfig;function es(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var a=o.stateNode}if(!a)throw Error(n(147,t));var c=a,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(m){var _=c.refs;m===null?delete _[h]:_[h]=m},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Io(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Cf(t){var i=t._init;return i(t._payload)}function Tf(t){function i(C,S){if(t){var T=C.deletions;T===null?(C.deletions=[S],C.flags|=16):T.push(S)}}function o(C,S){if(!t)return null;for(;S!==null;)i(C,S),S=S.sibling;return null}function a(C,S){for(C=new Map;S!==null;)S.key!==null?C.set(S.key,S):C.set(S.index,S),S=S.sibling;return C}function c(C,S){return C=Hn(C,S),C.index=0,C.sibling=null,C}function h(C,S,T){return C.index=T,t?(T=C.alternate,T!==null?(T=T.index,T<S?(C.flags|=2,S):T):(C.flags|=2,S)):(C.flags|=1048576,S)}function m(C){return t&&C.alternate===null&&(C.flags|=2),C}function _(C,S,T,x){return S===null||S.tag!==6?(S=qu(T,C.mode,x),S.return=C,S):(S=c(S,T),S.return=C,S)}function w(C,S,T,x){var B=T.type;return B===Q?A(C,S,T.props.children,x,T.key):S!==null&&(S.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===ut&&Cf(B)===S.type)?(x=c(S,T.props),x.ref=es(C,S,T),x.return=C,x):(x=qo(T.type,T.key,T.props,null,C.mode,x),x.ref=es(C,S,T),x.return=C,x)}function k(C,S,T,x){return S===null||S.tag!==4||S.stateNode.containerInfo!==T.containerInfo||S.stateNode.implementation!==T.implementation?(S=Ku(T,C.mode,x),S.return=C,S):(S=c(S,T.children||[]),S.return=C,S)}function A(C,S,T,x,B){return S===null||S.tag!==7?(S=yr(T,C.mode,x,B),S.return=C,S):(S=c(S,T),S.return=C,S)}function O(C,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return S=qu(""+S,C.mode,T),S.return=C,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ue:return T=qo(S.type,S.key,S.props,null,C.mode,T),T.ref=es(C,null,S),T.return=C,T;case Z:return S=Ku(S,C.mode,T),S.return=C,S;case ut:var x=S._init;return O(C,x(S._payload),T)}if(Pi(S)||q(S))return S=yr(S,C.mode,T,null),S.return=C,S;Io(C,S)}return null}function N(C,S,T,x){var B=S!==null?S.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return B!==null?null:_(C,S,""+T,x);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Ue:return T.key===B?w(C,S,T,x):null;case Z:return T.key===B?k(C,S,T,x):null;case ut:return B=T._init,N(C,S,B(T._payload),x)}if(Pi(T)||q(T))return B!==null?null:A(C,S,T,x,null);Io(C,T)}return null}function F(C,S,T,x,B){if(typeof x=="string"&&x!==""||typeof x=="number")return C=C.get(T)||null,_(S,C,""+x,B);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ue:return C=C.get(x.key===null?T:x.key)||null,w(S,C,x,B);case Z:return C=C.get(x.key===null?T:x.key)||null,k(S,C,x,B);case ut:var H=x._init;return F(C,S,T,H(x._payload),B)}if(Pi(x)||q(x))return C=C.get(T)||null,A(S,C,x,B,null);Io(S,x)}return null}function z(C,S,T,x){for(var B=null,H=null,$=S,Y=S=0,He=null;$!==null&&Y<T.length;Y++){$.index>Y?(He=$,$=null):He=$.sibling;var ce=N(C,$,T[Y],x);if(ce===null){$===null&&($=He);break}t&&$&&ce.alternate===null&&i(C,$),S=h(ce,S,Y),H===null?B=ce:H.sibling=ce,H=ce,$=He}if(Y===T.length)return o(C,$),Ne&&cr(C,Y),B;if($===null){for(;Y<T.length;Y++)$=O(C,T[Y],x),$!==null&&(S=h($,S,Y),H===null?B=$:H.sibling=$,H=$);return Ne&&cr(C,Y),B}for($=a(C,$);Y<T.length;Y++)He=F($,C,Y,T[Y],x),He!==null&&(t&&He.alternate!==null&&$.delete(He.key===null?Y:He.key),S=h(He,S,Y),H===null?B=He:H.sibling=He,H=He);return t&&$.forEach(function($n){return i(C,$n)}),Ne&&cr(C,Y),B}function W(C,S,T,x){var B=q(T);if(typeof B!="function")throw Error(n(150));if(T=B.call(T),T==null)throw Error(n(151));for(var H=B=null,$=S,Y=S=0,He=null,ce=T.next();$!==null&&!ce.done;Y++,ce=T.next()){$.index>Y?(He=$,$=null):He=$.sibling;var $n=N(C,$,ce.value,x);if($n===null){$===null&&($=He);break}t&&$&&$n.alternate===null&&i(C,$),S=h($n,S,Y),H===null?B=$n:H.sibling=$n,H=$n,$=He}if(ce.done)return o(C,$),Ne&&cr(C,Y),B;if($===null){for(;!ce.done;Y++,ce=T.next())ce=O(C,ce.value,x),ce!==null&&(S=h(ce,S,Y),H===null?B=ce:H.sibling=ce,H=ce);return Ne&&cr(C,Y),B}for($=a(C,$);!ce.done;Y++,ce=T.next())ce=F($,C,Y,ce.value,x),ce!==null&&(t&&ce.alternate!==null&&$.delete(ce.key===null?Y:ce.key),S=h(ce,S,Y),H===null?B=ce:H.sibling=ce,H=ce);return t&&$.forEach(function(o0){return i(C,o0)}),Ne&&cr(C,Y),B}function be(C,S,T,x){if(typeof T=="object"&&T!==null&&T.type===Q&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case Ue:e:{for(var B=T.key,H=S;H!==null;){if(H.key===B){if(B=T.type,B===Q){if(H.tag===7){o(C,H.sibling),S=c(H,T.props.children),S.return=C,C=S;break e}}else if(H.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===ut&&Cf(B)===H.type){o(C,H.sibling),S=c(H,T.props),S.ref=es(C,H,T),S.return=C,C=S;break e}o(C,H);break}else i(C,H);H=H.sibling}T.type===Q?(S=yr(T.props.children,C.mode,x,T.key),S.return=C,C=S):(x=qo(T.type,T.key,T.props,null,C.mode,x),x.ref=es(C,S,T),x.return=C,C=x)}return m(C);case Z:e:{for(H=T.key;S!==null;){if(S.key===H)if(S.tag===4&&S.stateNode.containerInfo===T.containerInfo&&S.stateNode.implementation===T.implementation){o(C,S.sibling),S=c(S,T.children||[]),S.return=C,C=S;break e}else{o(C,S);break}else i(C,S);S=S.sibling}S=Ku(T,C.mode,x),S.return=C,C=S}return m(C);case ut:return H=T._init,be(C,S,H(T._payload),x)}if(Pi(T))return z(C,S,T,x);if(q(T))return W(C,S,T,x);Io(C,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,S!==null&&S.tag===6?(o(C,S.sibling),S=c(S,T),S.return=C,C=S):(o(C,S),S=qu(T,C.mode,x),S.return=C,C=S),m(C)):o(C,S)}return be}var Xr=Tf(!0),kf=Tf(!1),Co=Ln(null),To=null,Jr=null,ru=null;function iu(){ru=Jr=To=null}function su(t){var i=Co.current;ke(Co),t._currentValue=i}function ou(t,i,o){for(;t!==null;){var a=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,a!==null&&(a.childLanes|=i)):a!==null&&(a.childLanes&i)!==i&&(a.childLanes|=i),t===o)break;t=t.return}}function Zr(t,i){To=t,ru=Jr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&i&&(ht=!0),t.firstContext=null)}function Ot(t){var i=t._currentValue;if(ru!==t)if(t={context:t,memoizedValue:i,next:null},Jr===null){if(To===null)throw Error(n(308));Jr=t,To.dependencies={lanes:0,firstContext:t}}else Jr=Jr.next=t;return i}var dr=null;function lu(t){dr===null?dr=[t]:dr.push(t)}function Rf(t,i,o,a){var c=i.interleaved;return c===null?(o.next=o,lu(i)):(o.next=c.next,c.next=o),i.interleaved=o,fn(t,a)}function fn(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Fn=!1;function au(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Nf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function pn(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Un(t,i,o){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,oe&2){var c=a.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),a.pending=i,fn(t,o)}return c=a.interleaved,c===null?(i.next=i,lu(a)):(i.next=c.next,c.next=i),a.interleaved=i,fn(t,o)}function ko(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var a=i.lanes;a&=t.pendingLanes,o|=a,i.lanes=o,Sa(t,o)}}function Pf(t,i){var o=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,o===a)){var c=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var m={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?c=h=m:h=h.next=m,o=o.next}while(o!==null);h===null?c=h=i:h=h.next=i}else c=h=i;o={baseState:a.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:a.shared,effects:a.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Ro(t,i,o,a){var c=t.updateQueue;Fn=!1;var h=c.firstBaseUpdate,m=c.lastBaseUpdate,_=c.shared.pending;if(_!==null){c.shared.pending=null;var w=_,k=w.next;w.next=null,m===null?h=k:m.next=k,m=w;var A=t.alternate;A!==null&&(A=A.updateQueue,_=A.lastBaseUpdate,_!==m&&(_===null?A.firstBaseUpdate=k:_.next=k,A.lastBaseUpdate=w))}if(h!==null){var O=c.baseState;m=0,A=k=w=null,_=h;do{var N=_.lane,F=_.eventTime;if((a&N)===N){A!==null&&(A=A.next={eventTime:F,lane:0,tag:_.tag,payload:_.payload,callback:_.callback,next:null});e:{var z=t,W=_;switch(N=i,F=o,W.tag){case 1:if(z=W.payload,typeof z=="function"){O=z.call(F,O,N);break e}O=z;break e;case 3:z.flags=z.flags&-65537|128;case 0:if(z=W.payload,N=typeof z=="function"?z.call(F,O,N):z,N==null)break e;O=j({},O,N);break e;case 2:Fn=!0}}_.callback!==null&&_.lane!==0&&(t.flags|=64,N=c.effects,N===null?c.effects=[_]:N.push(_))}else F={eventTime:F,lane:N,tag:_.tag,payload:_.payload,callback:_.callback,next:null},A===null?(k=A=F,w=O):A=A.next=F,m|=N;if(_=_.next,_===null){if(_=c.shared.pending,_===null)break;N=_,_=N.next,N.next=null,c.lastBaseUpdate=N,c.shared.pending=null}}while(!0);if(A===null&&(w=O),c.baseState=w,c.firstBaseUpdate=k,c.lastBaseUpdate=A,i=c.shared.interleaved,i!==null){c=i;do m|=c.lane,c=c.next;while(c!==i)}else h===null&&(c.shared.lanes=0);pr|=m,t.lanes=m,t.memoizedState=O}}function Af(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var a=t[i],c=a.callback;if(c!==null){if(a.callback=null,a=o,typeof c!="function")throw Error(n(191,c));c.call(a)}}}var ts={},en=Ln(ts),ns=Ln(ts),rs=Ln(ts);function hr(t){if(t===ts)throw Error(n(174));return t}function uu(t,i){switch(Se(rs,i),Se(ns,t),Se(en,ts),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ca(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=ca(i,t)}ke(en),Se(en,i)}function ei(){ke(en),ke(ns),ke(rs)}function Of(t){hr(rs.current);var i=hr(en.current),o=ca(i,t.type);i!==o&&(Se(ns,t),Se(en,o))}function cu(t){ns.current===t&&(ke(en),ke(ns))}var Pe=Ln(0);function No(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var du=[];function hu(){for(var t=0;t<du.length;t++)du[t]._workInProgressVersionPrimary=null;du.length=0}var Po=le.ReactCurrentDispatcher,fu=le.ReactCurrentBatchConfig,fr=0,Ae=null,je=null,Be=null,Ao=!1,is=!1,ss=0,Nw=0;function tt(){throw Error(n(321))}function pu(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!jt(t[o],i[o]))return!1;return!0}function mu(t,i,o,a,c,h){if(fr=h,Ae=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Po.current=t===null||t.memoizedState===null?xw:Dw,t=o(a,c),is){h=0;do{if(is=!1,ss=0,25<=h)throw Error(n(301));h+=1,Be=je=null,i.updateQueue=null,Po.current=Lw,t=o(a,c)}while(is)}if(Po.current=Do,i=je!==null&&je.next!==null,fr=0,Be=je=Ae=null,Ao=!1,i)throw Error(n(300));return t}function gu(){var t=ss!==0;return ss=0,t}function tn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Ae.memoizedState=Be=t:Be=Be.next=t,Be}function xt(){if(je===null){var t=Ae.alternate;t=t!==null?t.memoizedState:null}else t=je.next;var i=Be===null?Ae.memoizedState:Be.next;if(i!==null)Be=i,je=t;else{if(t===null)throw Error(n(310));je=t,t={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Be===null?Ae.memoizedState=Be=t:Be=Be.next=t}return Be}function os(t,i){return typeof i=="function"?i(t):i}function _u(t){var i=xt(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=je,c=a.baseQueue,h=o.pending;if(h!==null){if(c!==null){var m=c.next;c.next=h.next,h.next=m}a.baseQueue=c=h,o.pending=null}if(c!==null){h=c.next,a=a.baseState;var _=m=null,w=null,k=h;do{var A=k.lane;if((fr&A)===A)w!==null&&(w=w.next={lane:0,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),a=k.hasEagerState?k.eagerState:t(a,k.action);else{var O={lane:A,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null};w===null?(_=w=O,m=a):w=w.next=O,Ae.lanes|=A,pr|=A}k=k.next}while(k!==null&&k!==h);w===null?m=a:w.next=_,jt(a,i.memoizedState)||(ht=!0),i.memoizedState=a,i.baseState=m,i.baseQueue=w,o.lastRenderedState=a}if(t=o.interleaved,t!==null){c=t;do h=c.lane,Ae.lanes|=h,pr|=h,c=c.next;while(c!==t)}else c===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function yu(t){var i=xt(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=o.dispatch,c=o.pending,h=i.memoizedState;if(c!==null){o.pending=null;var m=c=c.next;do h=t(h,m.action),m=m.next;while(m!==c);jt(h,i.memoizedState)||(ht=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,a]}function xf(){}function Df(t,i){var o=Ae,a=xt(),c=i(),h=!jt(a.memoizedState,c);if(h&&(a.memoizedState=c,ht=!0),a=a.queue,vu(bf.bind(null,o,a,t),[t]),a.getSnapshot!==i||h||Be!==null&&Be.memoizedState.tag&1){if(o.flags|=2048,ls(9,Mf.bind(null,o,a,c,i),void 0,null),Ve===null)throw Error(n(349));fr&30||Lf(o,i,c)}return c}function Lf(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Ae.updateQueue,i===null?(i={lastEffect:null,stores:null},Ae.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Mf(t,i,o,a){i.value=o,i.getSnapshot=a,Ff(i)&&Uf(t)}function bf(t,i,o){return o(function(){Ff(i)&&Uf(t)})}function Ff(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!jt(t,o)}catch{return!0}}function Uf(t){var i=fn(t,1);i!==null&&Ht(i,t,1,-1)}function jf(t){var i=tn();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:os,lastRenderedState:t},i.queue=t,t=t.dispatch=Ow.bind(null,Ae,t),[i.memoizedState,t]}function ls(t,i,o,a){return t={tag:t,create:i,destroy:o,deps:a,next:null},i=Ae.updateQueue,i===null?(i={lastEffect:null,stores:null},Ae.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(a=o.next,o.next=t,t.next=a,i.lastEffect=t)),t}function zf(){return xt().memoizedState}function Oo(t,i,o,a){var c=tn();Ae.flags|=t,c.memoizedState=ls(1|i,o,void 0,a===void 0?null:a)}function xo(t,i,o,a){var c=xt();a=a===void 0?null:a;var h=void 0;if(je!==null){var m=je.memoizedState;if(h=m.destroy,a!==null&&pu(a,m.deps)){c.memoizedState=ls(i,o,h,a);return}}Ae.flags|=t,c.memoizedState=ls(1|i,o,h,a)}function Wf(t,i){return Oo(8390656,8,t,i)}function vu(t,i){return xo(2048,8,t,i)}function Bf(t,i){return xo(4,2,t,i)}function Vf(t,i){return xo(4,4,t,i)}function Hf(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function $f(t,i,o){return o=o!=null?o.concat([t]):null,xo(4,4,Hf.bind(null,i,t),o)}function wu(){}function Gf(t,i){var o=xt();i=i===void 0?null:i;var a=o.memoizedState;return a!==null&&i!==null&&pu(i,a[1])?a[0]:(o.memoizedState=[t,i],t)}function qf(t,i){var o=xt();i=i===void 0?null:i;var a=o.memoizedState;return a!==null&&i!==null&&pu(i,a[1])?a[0]:(t=t(),o.memoizedState=[t,i],t)}function Kf(t,i,o){return fr&21?(jt(o,i)||(o=Ih(),Ae.lanes|=o,pr|=o,t.baseState=!0),i):(t.baseState&&(t.baseState=!1,ht=!0),t.memoizedState=o)}function Pw(t,i){var o=fe;fe=o!==0&&4>o?o:4,t(!0);var a=fu.transition;fu.transition={};try{t(!1),i()}finally{fe=o,fu.transition=a}}function Yf(){return xt().memoizedState}function Aw(t,i,o){var a=Bn(t);if(o={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null},Qf(t))Xf(i,o);else if(o=Rf(t,i,o,a),o!==null){var c=ot();Ht(o,t,a,c),Jf(o,i,a)}}function Ow(t,i,o){var a=Bn(t),c={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null};if(Qf(t))Xf(i,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var m=i.lastRenderedState,_=h(m,o);if(c.hasEagerState=!0,c.eagerState=_,jt(_,m)){var w=i.interleaved;w===null?(c.next=c,lu(i)):(c.next=w.next,w.next=c),i.interleaved=c;return}}catch{}finally{}o=Rf(t,i,c,a),o!==null&&(c=ot(),Ht(o,t,a,c),Jf(o,i,a))}}function Qf(t){var i=t.alternate;return t===Ae||i!==null&&i===Ae}function Xf(t,i){is=Ao=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function Jf(t,i,o){if(o&4194240){var a=i.lanes;a&=t.pendingLanes,o|=a,i.lanes=o,Sa(t,o)}}var Do={readContext:Ot,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},xw={readContext:Ot,useCallback:function(t,i){return tn().memoizedState=[t,i===void 0?null:i],t},useContext:Ot,useEffect:Wf,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Oo(4194308,4,Hf.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Oo(4194308,4,t,i)},useInsertionEffect:function(t,i){return Oo(4,2,t,i)},useMemo:function(t,i){var o=tn();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var a=tn();return i=o!==void 0?o(i):i,a.memoizedState=a.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},a.queue=t,t=t.dispatch=Aw.bind(null,Ae,t),[a.memoizedState,t]},useRef:function(t){var i=tn();return t={current:t},i.memoizedState=t},useState:jf,useDebugValue:wu,useDeferredValue:function(t){return tn().memoizedState=t},useTransition:function(){var t=jf(!1),i=t[0];return t=Pw.bind(null,t[1]),tn().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var a=Ae,c=tn();if(Ne){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),Ve===null)throw Error(n(349));fr&30||Lf(a,i,o)}c.memoizedState=o;var h={value:o,getSnapshot:i};return c.queue=h,Wf(bf.bind(null,a,h,t),[t]),a.flags|=2048,ls(9,Mf.bind(null,a,h,o,i),void 0,null),o},useId:function(){var t=tn(),i=Ve.identifierPrefix;if(Ne){var o=hn,a=dn;o=(a&~(1<<32-Ut(a)-1)).toString(32)+o,i=":"+i+"R"+o,o=ss++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=Nw++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},Dw={readContext:Ot,useCallback:Gf,useContext:Ot,useEffect:vu,useImperativeHandle:$f,useInsertionEffect:Bf,useLayoutEffect:Vf,useMemo:qf,useReducer:_u,useRef:zf,useState:function(){return _u(os)},useDebugValue:wu,useDeferredValue:function(t){var i=xt();return Kf(i,je.memoizedState,t)},useTransition:function(){var t=_u(os)[0],i=xt().memoizedState;return[t,i]},useMutableSource:xf,useSyncExternalStore:Df,useId:Yf,unstable_isNewReconciler:!1},Lw={readContext:Ot,useCallback:Gf,useContext:Ot,useEffect:vu,useImperativeHandle:$f,useInsertionEffect:Bf,useLayoutEffect:Vf,useMemo:qf,useReducer:yu,useRef:zf,useState:function(){return yu(os)},useDebugValue:wu,useDeferredValue:function(t){var i=xt();return je===null?i.memoizedState=t:Kf(i,je.memoizedState,t)},useTransition:function(){var t=yu(os)[0],i=xt().memoizedState;return[t,i]},useMutableSource:xf,useSyncExternalStore:Df,useId:Yf,unstable_isNewReconciler:!1};function Wt(t,i){if(t&&t.defaultProps){i=j({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Eu(t,i,o,a){i=t.memoizedState,o=o(a,i),o=o==null?i:j({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Lo={isMounted:function(t){return(t=t._reactInternals)?or(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var a=ot(),c=Bn(t),h=pn(a,c);h.payload=i,o!=null&&(h.callback=o),i=Un(t,h,c),i!==null&&(Ht(i,t,c,a),ko(i,t,c))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var a=ot(),c=Bn(t),h=pn(a,c);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=Un(t,h,c),i!==null&&(Ht(i,t,c,a),ko(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=ot(),a=Bn(t),c=pn(o,a);c.tag=2,i!=null&&(c.callback=i),i=Un(t,c,a),i!==null&&(Ht(i,t,a,o),ko(i,t,a))}};function Zf(t,i,o,a,c,h,m){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,h,m):i.prototype&&i.prototype.isPureReactComponent?!qi(o,a)||!qi(c,h):!0}function ep(t,i,o){var a=!1,c=Mn,h=i.contextType;return typeof h=="object"&&h!==null?h=Ot(h):(c=dt(i)?ar:et.current,a=i.contextTypes,h=(a=a!=null)?qr(t,c):Mn),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Lo,t.stateNode=i,i._reactInternals=t,a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),i}function tp(t,i,o,a){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,a),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,a),i.state!==t&&Lo.enqueueReplaceState(i,i.state,null)}function Su(t,i,o,a){var c=t.stateNode;c.props=o,c.state=t.memoizedState,c.refs={},au(t);var h=i.contextType;typeof h=="object"&&h!==null?c.context=Ot(h):(h=dt(i)?ar:et.current,c.context=qr(t,h)),c.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Eu(t,i,h,o),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&Lo.enqueueReplaceState(c,c.state,null),Ro(t,o,c,a),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function ti(t,i){try{var o="",a=i;do o+=ae(a),a=a.return;while(a);var c=o}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:c,digest:null}}function Iu(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Cu(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var Mw=typeof WeakMap=="function"?WeakMap:Map;function np(t,i,o){o=pn(-1,o),o.tag=3,o.payload={element:null};var a=i.value;return o.callback=function(){Wo||(Wo=!0,ju=a),Cu(t,i)},o}function rp(t,i,o){o=pn(-1,o),o.tag=3;var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var c=i.value;o.payload=function(){return a(c)},o.callback=function(){Cu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Cu(t,i),typeof a!="function"&&(zn===null?zn=new Set([this]):zn.add(this));var m=i.stack;this.componentDidCatch(i.value,{componentStack:m!==null?m:""})}),o}function ip(t,i,o){var a=t.pingCache;if(a===null){a=t.pingCache=new Mw;var c=new Set;a.set(i,c)}else c=a.get(i),c===void 0&&(c=new Set,a.set(i,c));c.has(o)||(c.add(o),t=Yw.bind(null,t,i,o),i.then(t,t))}function sp(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function op(t,i,o,a,c){return t.mode&1?(t.flags|=65536,t.lanes=c,t):(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=pn(-1,1),i.tag=2,Un(o,i,1))),o.lanes|=1),t)}var bw=le.ReactCurrentOwner,ht=!1;function st(t,i,o,a){i.child=t===null?kf(i,null,o,a):Xr(i,t.child,o,a)}function lp(t,i,o,a,c){o=o.render;var h=i.ref;return Zr(i,c),a=mu(t,i,o,a,h,c),o=gu(),t!==null&&!ht?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,mn(t,i,c)):(Ne&&o&&Ja(i),i.flags|=1,st(t,i,a,c),i.child)}function ap(t,i,o,a,c){if(t===null){var h=o.type;return typeof h=="function"&&!Gu(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,up(t,i,h,a,c)):(t=qo(o.type,null,a,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,!(t.lanes&c)){var m=h.memoizedProps;if(o=o.compare,o=o!==null?o:qi,o(m,a)&&t.ref===i.ref)return mn(t,i,c)}return i.flags|=1,t=Hn(h,a),t.ref=i.ref,t.return=i,i.child=t}function up(t,i,o,a,c){if(t!==null){var h=t.memoizedProps;if(qi(h,a)&&t.ref===i.ref)if(ht=!1,i.pendingProps=a=h,(t.lanes&c)!==0)t.flags&131072&&(ht=!0);else return i.lanes=t.lanes,mn(t,i,c)}return Tu(t,i,o,a,c)}function cp(t,i,o){var a=i.pendingProps,c=a.children,h=t!==null?t.memoizedState:null;if(a.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(ri,Ct),Ct|=o;else{if(!(o&1073741824))return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Se(ri,Ct),Ct|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=h!==null?h.baseLanes:o,Se(ri,Ct),Ct|=a}else h!==null?(a=h.baseLanes|o,i.memoizedState=null):a=o,Se(ri,Ct),Ct|=a;return st(t,i,c,o),i.child}function dp(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Tu(t,i,o,a,c){var h=dt(o)?ar:et.current;return h=qr(i,h),Zr(i,c),o=mu(t,i,o,a,h,c),a=gu(),t!==null&&!ht?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,mn(t,i,c)):(Ne&&a&&Ja(i),i.flags|=1,st(t,i,o,c),i.child)}function hp(t,i,o,a,c){if(dt(o)){var h=!0;yo(i)}else h=!1;if(Zr(i,c),i.stateNode===null)bo(t,i),ep(i,o,a),Su(i,o,a,c),a=!0;else if(t===null){var m=i.stateNode,_=i.memoizedProps;m.props=_;var w=m.context,k=o.contextType;typeof k=="object"&&k!==null?k=Ot(k):(k=dt(o)?ar:et.current,k=qr(i,k));var A=o.getDerivedStateFromProps,O=typeof A=="function"||typeof m.getSnapshotBeforeUpdate=="function";O||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(_!==a||w!==k)&&tp(i,m,a,k),Fn=!1;var N=i.memoizedState;m.state=N,Ro(i,a,m,c),w=i.memoizedState,_!==a||N!==w||ct.current||Fn?(typeof A=="function"&&(Eu(i,o,A,a),w=i.memoizedState),(_=Fn||Zf(i,o,_,a,N,w,k))?(O||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=a,i.memoizedState=w),m.props=a,m.state=w,m.context=k,a=_):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),a=!1)}else{m=i.stateNode,Nf(t,i),_=i.memoizedProps,k=i.type===i.elementType?_:Wt(i.type,_),m.props=k,O=i.pendingProps,N=m.context,w=o.contextType,typeof w=="object"&&w!==null?w=Ot(w):(w=dt(o)?ar:et.current,w=qr(i,w));var F=o.getDerivedStateFromProps;(A=typeof F=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(_!==O||N!==w)&&tp(i,m,a,w),Fn=!1,N=i.memoizedState,m.state=N,Ro(i,a,m,c);var z=i.memoizedState;_!==O||N!==z||ct.current||Fn?(typeof F=="function"&&(Eu(i,o,F,a),z=i.memoizedState),(k=Fn||Zf(i,o,k,a,N,z,w)||!1)?(A||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(a,z,w),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(a,z,w)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||_===t.memoizedProps&&N===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&N===t.memoizedState||(i.flags|=1024),i.memoizedProps=a,i.memoizedState=z),m.props=a,m.state=z,m.context=w,a=k):(typeof m.componentDidUpdate!="function"||_===t.memoizedProps&&N===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&N===t.memoizedState||(i.flags|=1024),a=!1)}return ku(t,i,o,a,h,c)}function ku(t,i,o,a,c,h){dp(t,i);var m=(i.flags&128)!==0;if(!a&&!m)return c&&_f(i,o,!1),mn(t,i,h);a=i.stateNode,bw.current=i;var _=m&&typeof o.getDerivedStateFromError!="function"?null:a.render();return i.flags|=1,t!==null&&m?(i.child=Xr(i,t.child,null,h),i.child=Xr(i,null,_,h)):st(t,i,_,h),i.memoizedState=a.state,c&&_f(i,o,!0),i.child}function fp(t){var i=t.stateNode;i.pendingContext?mf(t,i.pendingContext,i.pendingContext!==i.context):i.context&&mf(t,i.context,!1),uu(t,i.containerInfo)}function pp(t,i,o,a,c){return Qr(),nu(c),i.flags|=256,st(t,i,o,a),i.child}var Ru={dehydrated:null,treeContext:null,retryLane:0};function Nu(t){return{baseLanes:t,cachePool:null,transitions:null}}function mp(t,i,o){var a=i.pendingProps,c=Pe.current,h=!1,m=(i.flags&128)!==0,_;if((_=m)||(_=t!==null&&t.memoizedState===null?!1:(c&2)!==0),_?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),Se(Pe,c&1),t===null)return tu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(i.mode&1?t.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(m=a.children,t=a.fallback,h?(a=i.mode,h=i.child,m={mode:"hidden",children:m},!(a&1)&&h!==null?(h.childLanes=0,h.pendingProps=m):h=Ko(m,a,0,null),t=yr(t,a,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Nu(o),i.memoizedState=Ru,t):Pu(i,m));if(c=t.memoizedState,c!==null&&(_=c.dehydrated,_!==null))return Fw(t,i,m,a,_,c,o);if(h){h=a.fallback,m=i.mode,c=t.child,_=c.sibling;var w={mode:"hidden",children:a.children};return!(m&1)&&i.child!==c?(a=i.child,a.childLanes=0,a.pendingProps=w,i.deletions=null):(a=Hn(c,w),a.subtreeFlags=c.subtreeFlags&14680064),_!==null?h=Hn(_,h):(h=yr(h,m,o,null),h.flags|=2),h.return=i,a.return=i,a.sibling=h,i.child=a,a=h,h=i.child,m=t.child.memoizedState,m=m===null?Nu(o):{baseLanes:m.baseLanes|o,cachePool:null,transitions:m.transitions},h.memoizedState=m,h.childLanes=t.childLanes&~o,i.memoizedState=Ru,a}return h=t.child,t=h.sibling,a=Hn(h,{mode:"visible",children:a.children}),!(i.mode&1)&&(a.lanes=o),a.return=i,a.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=a,i.memoizedState=null,a}function Pu(t,i){return i=Ko({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Mo(t,i,o,a){return a!==null&&nu(a),Xr(i,t.child,null,o),t=Pu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Fw(t,i,o,a,c,h,m){if(o)return i.flags&256?(i.flags&=-257,a=Iu(Error(n(422))),Mo(t,i,m,a)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=a.fallback,c=i.mode,a=Ko({mode:"visible",children:a.children},c,0,null),h=yr(h,c,m,null),h.flags|=2,a.return=i,h.return=i,a.sibling=h,i.child=a,i.mode&1&&Xr(i,t.child,null,m),i.child.memoizedState=Nu(m),i.memoizedState=Ru,h);if(!(i.mode&1))return Mo(t,i,m,null);if(c.data==="$!"){if(a=c.nextSibling&&c.nextSibling.dataset,a)var _=a.dgst;return a=_,h=Error(n(419)),a=Iu(h,a,void 0),Mo(t,i,m,a)}if(_=(m&t.childLanes)!==0,ht||_){if(a=Ve,a!==null){switch(m&-m){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=c&(a.suspendedLanes|m)?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,fn(t,c),Ht(a,t,c,-1))}return $u(),a=Iu(Error(n(421))),Mo(t,i,m,a)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=Qw.bind(null,t),c._reactRetry=i,null):(t=h.treeContext,It=Dn(c.nextSibling),St=i,Ne=!0,zt=null,t!==null&&(Pt[At++]=dn,Pt[At++]=hn,Pt[At++]=ur,dn=t.id,hn=t.overflow,ur=i),i=Pu(i,a.children),i.flags|=4096,i)}function gp(t,i,o){t.lanes|=i;var a=t.alternate;a!==null&&(a.lanes|=i),ou(t.return,i,o)}function Au(t,i,o,a,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:a,tail:o,tailMode:c}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=a,h.tail=o,h.tailMode=c)}function _p(t,i,o){var a=i.pendingProps,c=a.revealOrder,h=a.tail;if(st(t,i,a.children,o),a=Pe.current,a&2)a=a&1|2,i.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&gp(t,o,i);else if(t.tag===19)gp(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}if(Se(Pe,a),!(i.mode&1))i.memoizedState=null;else switch(c){case"forwards":for(o=i.child,c=null;o!==null;)t=o.alternate,t!==null&&No(t)===null&&(c=o),o=o.sibling;o=c,o===null?(c=i.child,i.child=null):(c=o.sibling,o.sibling=null),Au(i,!1,c,o,h);break;case"backwards":for(o=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&No(t)===null){i.child=c;break}t=c.sibling,c.sibling=o,o=c,c=t}Au(i,!0,o,null,h);break;case"together":Au(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function bo(t,i){!(i.mode&1)&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function mn(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),pr|=i.lanes,!(o&i.childLanes))return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=Hn(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=Hn(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function Uw(t,i,o){switch(i.tag){case 3:fp(i),Qr();break;case 5:Of(i);break;case 1:dt(i.type)&&yo(i);break;case 4:uu(i,i.stateNode.containerInfo);break;case 10:var a=i.type._context,c=i.memoizedProps.value;Se(Co,a._currentValue),a._currentValue=c;break;case 13:if(a=i.memoizedState,a!==null)return a.dehydrated!==null?(Se(Pe,Pe.current&1),i.flags|=128,null):o&i.child.childLanes?mp(t,i,o):(Se(Pe,Pe.current&1),t=mn(t,i,o),t!==null?t.sibling:null);Se(Pe,Pe.current&1);break;case 19:if(a=(o&i.childLanes)!==0,t.flags&128){if(a)return _p(t,i,o);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Se(Pe,Pe.current),a)break;return null;case 22:case 23:return i.lanes=0,cp(t,i,o)}return mn(t,i,o)}var yp,Ou,vp,wp;yp=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Ou=function(){},vp=function(t,i,o,a){var c=t.memoizedProps;if(c!==a){t=i.stateNode,hr(en.current);var h=null;switch(o){case"input":c=oa(t,c),a=oa(t,a),h=[];break;case"select":c=j({},c,{value:void 0}),a=j({},a,{value:void 0}),h=[];break;case"textarea":c=ua(t,c),a=ua(t,a),h=[];break;default:typeof c.onClick!="function"&&typeof a.onClick=="function"&&(t.onclick=mo)}da(o,a);var m;o=null;for(k in c)if(!a.hasOwnProperty(k)&&c.hasOwnProperty(k)&&c[k]!=null)if(k==="style"){var _=c[k];for(m in _)_.hasOwnProperty(m)&&(o||(o={}),o[m]="")}else k!=="dangerouslySetInnerHTML"&&k!=="children"&&k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&k!=="autoFocus"&&(l.hasOwnProperty(k)?h||(h=[]):(h=h||[]).push(k,null));for(k in a){var w=a[k];if(_=c!=null?c[k]:void 0,a.hasOwnProperty(k)&&w!==_&&(w!=null||_!=null))if(k==="style")if(_){for(m in _)!_.hasOwnProperty(m)||w&&w.hasOwnProperty(m)||(o||(o={}),o[m]="");for(m in w)w.hasOwnProperty(m)&&_[m]!==w[m]&&(o||(o={}),o[m]=w[m])}else o||(h||(h=[]),h.push(k,o)),o=w;else k==="dangerouslySetInnerHTML"?(w=w?w.__html:void 0,_=_?_.__html:void 0,w!=null&&_!==w&&(h=h||[]).push(k,w)):k==="children"?typeof w!="string"&&typeof w!="number"||(h=h||[]).push(k,""+w):k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&(l.hasOwnProperty(k)?(w!=null&&k==="onScroll"&&Te("scroll",t),h||_===w||(h=[])):(h=h||[]).push(k,w))}o&&(h=h||[]).push("style",o);var k=h;(i.updateQueue=k)&&(i.flags|=4)}},wp=function(t,i,o,a){o!==a&&(i.flags|=4)};function as(t,i){if(!Ne)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function nt(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,a=0;if(i)for(var c=t.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags&14680064,a|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags,a|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=a,t.childLanes=o,i}function jw(t,i,o){var a=i.pendingProps;switch(Za(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(i),null;case 1:return dt(i.type)&&_o(),nt(i),null;case 3:return a=i.stateNode,ei(),ke(ct),ke(et),hu(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(So(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,zt!==null&&(Bu(zt),zt=null))),Ou(t,i),nt(i),null;case 5:cu(i);var c=hr(rs.current);if(o=i.type,t!==null&&i.stateNode!=null)vp(t,i,o,a,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!a){if(i.stateNode===null)throw Error(n(166));return nt(i),null}if(t=hr(en.current),So(i)){a=i.stateNode,o=i.type;var h=i.memoizedProps;switch(a[Zt]=i,a[Ji]=h,t=(i.mode&1)!==0,o){case"dialog":Te("cancel",a),Te("close",a);break;case"iframe":case"object":case"embed":Te("load",a);break;case"video":case"audio":for(c=0;c<Yi.length;c++)Te(Yi[c],a);break;case"source":Te("error",a);break;case"img":case"image":case"link":Te("error",a),Te("load",a);break;case"details":Te("toggle",a);break;case"input":Zd(a,h),Te("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!h.multiple},Te("invalid",a);break;case"textarea":nh(a,h),Te("invalid",a)}da(o,h),c=null;for(var m in h)if(h.hasOwnProperty(m)){var _=h[m];m==="children"?typeof _=="string"?a.textContent!==_&&(h.suppressHydrationWarning!==!0&&po(a.textContent,_,t),c=["children",_]):typeof _=="number"&&a.textContent!==""+_&&(h.suppressHydrationWarning!==!0&&po(a.textContent,_,t),c=["children",""+_]):l.hasOwnProperty(m)&&_!=null&&m==="onScroll"&&Te("scroll",a)}switch(o){case"input":Hs(a),th(a,h,!0);break;case"textarea":Hs(a),ih(a);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(a.onclick=mo)}a=c,i.updateQueue=a,a!==null&&(i.flags|=4)}else{m=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=sh(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=m.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof a.is=="string"?t=m.createElement(o,{is:a.is}):(t=m.createElement(o),o==="select"&&(m=t,a.multiple?m.multiple=!0:a.size&&(m.size=a.size))):t=m.createElementNS(t,o),t[Zt]=i,t[Ji]=a,yp(t,i,!1,!1),i.stateNode=t;e:{switch(m=ha(o,a),o){case"dialog":Te("cancel",t),Te("close",t),c=a;break;case"iframe":case"object":case"embed":Te("load",t),c=a;break;case"video":case"audio":for(c=0;c<Yi.length;c++)Te(Yi[c],t);c=a;break;case"source":Te("error",t),c=a;break;case"img":case"image":case"link":Te("error",t),Te("load",t),c=a;break;case"details":Te("toggle",t),c=a;break;case"input":Zd(t,a),c=oa(t,a),Te("invalid",t);break;case"option":c=a;break;case"select":t._wrapperState={wasMultiple:!!a.multiple},c=j({},a,{value:void 0}),Te("invalid",t);break;case"textarea":nh(t,a),c=ua(t,a),Te("invalid",t);break;default:c=a}da(o,c),_=c;for(h in _)if(_.hasOwnProperty(h)){var w=_[h];h==="style"?ah(t,w):h==="dangerouslySetInnerHTML"?(w=w?w.__html:void 0,w!=null&&oh(t,w)):h==="children"?typeof w=="string"?(o!=="textarea"||w!=="")&&Ai(t,w):typeof w=="number"&&Ai(t,""+w):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(l.hasOwnProperty(h)?w!=null&&h==="onScroll"&&Te("scroll",t):w!=null&&ge(t,h,w,m))}switch(o){case"input":Hs(t),th(t,a,!1);break;case"textarea":Hs(t),ih(t);break;case"option":a.value!=null&&t.setAttribute("value",""+he(a.value));break;case"select":t.multiple=!!a.multiple,h=a.value,h!=null?Mr(t,!!a.multiple,h,!1):a.defaultValue!=null&&Mr(t,!!a.multiple,a.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=mo)}switch(o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return nt(i),null;case 6:if(t&&i.stateNode!=null)wp(t,i,t.memoizedProps,a);else{if(typeof a!="string"&&i.stateNode===null)throw Error(n(166));if(o=hr(rs.current),hr(en.current),So(i)){if(a=i.stateNode,o=i.memoizedProps,a[Zt]=i,(h=a.nodeValue!==o)&&(t=St,t!==null))switch(t.tag){case 3:po(a.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&po(a.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else a=(o.nodeType===9?o:o.ownerDocument).createTextNode(a),a[Zt]=i,i.stateNode=a}return nt(i),null;case 13:if(ke(Pe),a=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ne&&It!==null&&i.mode&1&&!(i.flags&128))If(),Qr(),i.flags|=98560,h=!1;else if(h=So(i),a!==null&&a.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[Zt]=i}else Qr(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;nt(i),h=!1}else zt!==null&&(Bu(zt),zt=null),h=!0;if(!h)return i.flags&65536?i:null}return i.flags&128?(i.lanes=o,i):(a=a!==null,a!==(t!==null&&t.memoizedState!==null)&&a&&(i.child.flags|=8192,i.mode&1&&(t===null||Pe.current&1?ze===0&&(ze=3):$u())),i.updateQueue!==null&&(i.flags|=4),nt(i),null);case 4:return ei(),Ou(t,i),t===null&&Qi(i.stateNode.containerInfo),nt(i),null;case 10:return su(i.type._context),nt(i),null;case 17:return dt(i.type)&&_o(),nt(i),null;case 19:if(ke(Pe),h=i.memoizedState,h===null)return nt(i),null;if(a=(i.flags&128)!==0,m=h.rendering,m===null)if(a)as(h,!1);else{if(ze!==0||t!==null&&t.flags&128)for(t=i.child;t!==null;){if(m=No(t),m!==null){for(i.flags|=128,as(h,!1),a=m.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),i.subtreeFlags=0,a=o,o=i.child;o!==null;)h=o,t=a,h.flags&=14680066,m=h.alternate,m===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=m.childLanes,h.lanes=m.lanes,h.child=m.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=m.memoizedProps,h.memoizedState=m.memoizedState,h.updateQueue=m.updateQueue,h.type=m.type,t=m.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Se(Pe,Pe.current&1|2),i.child}t=t.sibling}h.tail!==null&&Me()>ii&&(i.flags|=128,a=!0,as(h,!1),i.lanes=4194304)}else{if(!a)if(t=No(m),t!==null){if(i.flags|=128,a=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),as(h,!0),h.tail===null&&h.tailMode==="hidden"&&!m.alternate&&!Ne)return nt(i),null}else 2*Me()-h.renderingStartTime>ii&&o!==1073741824&&(i.flags|=128,a=!0,as(h,!1),i.lanes=4194304);h.isBackwards?(m.sibling=i.child,i.child=m):(o=h.last,o!==null?o.sibling=m:i.child=m,h.last=m)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Me(),i.sibling=null,o=Pe.current,Se(Pe,a?o&1|2:o&1),i):(nt(i),null);case 22:case 23:return Hu(),a=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==a&&(i.flags|=8192),a&&i.mode&1?Ct&1073741824&&(nt(i),i.subtreeFlags&6&&(i.flags|=8192)):nt(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function zw(t,i){switch(Za(i),i.tag){case 1:return dt(i.type)&&_o(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ei(),ke(ct),ke(et),hu(),t=i.flags,t&65536&&!(t&128)?(i.flags=t&-65537|128,i):null;case 5:return cu(i),null;case 13:if(ke(Pe),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Qr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return ke(Pe),null;case 4:return ei(),null;case 10:return su(i.type._context),null;case 22:case 23:return Hu(),null;case 24:return null;default:return null}}var Fo=!1,rt=!1,Ww=typeof WeakSet=="function"?WeakSet:Set,U=null;function ni(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(a){xe(t,i,a)}else o.current=null}function xu(t,i,o){try{o()}catch(a){xe(t,i,a)}}var Ep=!1;function Bw(t,i){if(Ha=no,t=Jh(),ba(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var a=o.getSelection&&o.getSelection();if(a&&a.rangeCount!==0){o=a.anchorNode;var c=a.anchorOffset,h=a.focusNode;a=a.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var m=0,_=-1,w=-1,k=0,A=0,O=t,N=null;t:for(;;){for(var F;O!==o||c!==0&&O.nodeType!==3||(_=m+c),O!==h||a!==0&&O.nodeType!==3||(w=m+a),O.nodeType===3&&(m+=O.nodeValue.length),(F=O.firstChild)!==null;)N=O,O=F;for(;;){if(O===t)break t;if(N===o&&++k===c&&(_=m),N===h&&++A===a&&(w=m),(F=O.nextSibling)!==null)break;O=N,N=O.parentNode}O=F}o=_===-1||w===-1?null:{start:_,end:w}}else o=null}o=o||{start:0,end:0}}else o=null;for($a={focusedElem:t,selectionRange:o},no=!1,U=i;U!==null;)if(i=U,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,U=t;else for(;U!==null;){i=U;try{var z=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(z!==null){var W=z.memoizedProps,be=z.memoizedState,C=i.stateNode,S=C.getSnapshotBeforeUpdate(i.elementType===i.type?W:Wt(i.type,W),be);C.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var T=i.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(x){xe(i,i.return,x)}if(t=i.sibling,t!==null){t.return=i.return,U=t;break}U=i.return}return z=Ep,Ep=!1,z}function us(t,i,o){var a=i.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var c=a=a.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&xu(i,o,h)}c=c.next}while(c!==a)}}function Uo(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var a=o.create;o.destroy=a()}o=o.next}while(o!==i)}}function Du(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function Sp(t){var i=t.alternate;i!==null&&(t.alternate=null,Sp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Zt],delete i[Ji],delete i[Ya],delete i[Cw],delete i[Tw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ip(t){return t.tag===5||t.tag===3||t.tag===4}function Cp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ip(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Lu(t,i,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=mo));else if(a!==4&&(t=t.child,t!==null))for(Lu(t,i,o),t=t.sibling;t!==null;)Lu(t,i,o),t=t.sibling}function Mu(t,i,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(a!==4&&(t=t.child,t!==null))for(Mu(t,i,o),t=t.sibling;t!==null;)Mu(t,i,o),t=t.sibling}var Ye=null,Bt=!1;function jn(t,i,o){for(o=o.child;o!==null;)Tp(t,i,o),o=o.sibling}function Tp(t,i,o){if(Jt&&typeof Jt.onCommitFiberUnmount=="function")try{Jt.onCommitFiberUnmount(Qs,o)}catch{}switch(o.tag){case 5:rt||ni(o,i);case 6:var a=Ye,c=Bt;Ye=null,jn(t,i,o),Ye=a,Bt=c,Ye!==null&&(Bt?(t=Ye,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):Ye.removeChild(o.stateNode));break;case 18:Ye!==null&&(Bt?(t=Ye,o=o.stateNode,t.nodeType===8?Ka(t.parentNode,o):t.nodeType===1&&Ka(t,o),Wi(t)):Ka(Ye,o.stateNode));break;case 4:a=Ye,c=Bt,Ye=o.stateNode.containerInfo,Bt=!0,jn(t,i,o),Ye=a,Bt=c;break;case 0:case 11:case 14:case 15:if(!rt&&(a=o.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){c=a=a.next;do{var h=c,m=h.destroy;h=h.tag,m!==void 0&&(h&2||h&4)&&xu(o,i,m),c=c.next}while(c!==a)}jn(t,i,o);break;case 1:if(!rt&&(ni(o,i),a=o.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=o.memoizedProps,a.state=o.memoizedState,a.componentWillUnmount()}catch(_){xe(o,i,_)}jn(t,i,o);break;case 21:jn(t,i,o);break;case 22:o.mode&1?(rt=(a=rt)||o.memoizedState!==null,jn(t,i,o),rt=a):jn(t,i,o);break;default:jn(t,i,o)}}function kp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new Ww),i.forEach(function(a){var c=Xw.bind(null,t,a);o.has(a)||(o.add(a),a.then(c,c))})}}function Vt(t,i){var o=i.deletions;if(o!==null)for(var a=0;a<o.length;a++){var c=o[a];try{var h=t,m=i,_=m;e:for(;_!==null;){switch(_.tag){case 5:Ye=_.stateNode,Bt=!1;break e;case 3:Ye=_.stateNode.containerInfo,Bt=!0;break e;case 4:Ye=_.stateNode.containerInfo,Bt=!0;break e}_=_.return}if(Ye===null)throw Error(n(160));Tp(h,m,c),Ye=null,Bt=!1;var w=c.alternate;w!==null&&(w.return=null),c.return=null}catch(k){xe(c,i,k)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Rp(i,t),i=i.sibling}function Rp(t,i){var o=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vt(i,t),nn(t),a&4){try{us(3,t,t.return),Uo(3,t)}catch(W){xe(t,t.return,W)}try{us(5,t,t.return)}catch(W){xe(t,t.return,W)}}break;case 1:Vt(i,t),nn(t),a&512&&o!==null&&ni(o,o.return);break;case 5:if(Vt(i,t),nn(t),a&512&&o!==null&&ni(o,o.return),t.flags&32){var c=t.stateNode;try{Ai(c,"")}catch(W){xe(t,t.return,W)}}if(a&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,m=o!==null?o.memoizedProps:h,_=t.type,w=t.updateQueue;if(t.updateQueue=null,w!==null)try{_==="input"&&h.type==="radio"&&h.name!=null&&eh(c,h),ha(_,m);var k=ha(_,h);for(m=0;m<w.length;m+=2){var A=w[m],O=w[m+1];A==="style"?ah(c,O):A==="dangerouslySetInnerHTML"?oh(c,O):A==="children"?Ai(c,O):ge(c,A,O,k)}switch(_){case"input":la(c,h);break;case"textarea":rh(c,h);break;case"select":var N=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var F=h.value;F!=null?Mr(c,!!h.multiple,F,!1):N!==!!h.multiple&&(h.defaultValue!=null?Mr(c,!!h.multiple,h.defaultValue,!0):Mr(c,!!h.multiple,h.multiple?[]:"",!1))}c[Ji]=h}catch(W){xe(t,t.return,W)}}break;case 6:if(Vt(i,t),nn(t),a&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(W){xe(t,t.return,W)}}break;case 3:if(Vt(i,t),nn(t),a&4&&o!==null&&o.memoizedState.isDehydrated)try{Wi(i.containerInfo)}catch(W){xe(t,t.return,W)}break;case 4:Vt(i,t),nn(t);break;case 13:Vt(i,t),nn(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(Uu=Me())),a&4&&kp(t);break;case 22:if(A=o!==null&&o.memoizedState!==null,t.mode&1?(rt=(k=rt)||A,Vt(i,t),rt=k):Vt(i,t),nn(t),a&8192){if(k=t.memoizedState!==null,(t.stateNode.isHidden=k)&&!A&&t.mode&1)for(U=t,A=t.child;A!==null;){for(O=U=A;U!==null;){switch(N=U,F=N.child,N.tag){case 0:case 11:case 14:case 15:us(4,N,N.return);break;case 1:ni(N,N.return);var z=N.stateNode;if(typeof z.componentWillUnmount=="function"){a=N,o=N.return;try{i=a,z.props=i.memoizedProps,z.state=i.memoizedState,z.componentWillUnmount()}catch(W){xe(a,o,W)}}break;case 5:ni(N,N.return);break;case 22:if(N.memoizedState!==null){Ap(O);continue}}F!==null?(F.return=N,U=F):Ap(O)}A=A.sibling}e:for(A=null,O=t;;){if(O.tag===5){if(A===null){A=O;try{c=O.stateNode,k?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(_=O.stateNode,w=O.memoizedProps.style,m=w!=null&&w.hasOwnProperty("display")?w.display:null,_.style.display=lh("display",m))}catch(W){xe(t,t.return,W)}}}else if(O.tag===6){if(A===null)try{O.stateNode.nodeValue=k?"":O.memoizedProps}catch(W){xe(t,t.return,W)}}else if((O.tag!==22&&O.tag!==23||O.memoizedState===null||O===t)&&O.child!==null){O.child.return=O,O=O.child;continue}if(O===t)break e;for(;O.sibling===null;){if(O.return===null||O.return===t)break e;A===O&&(A=null),O=O.return}A===O&&(A=null),O.sibling.return=O.return,O=O.sibling}}break;case 19:Vt(i,t),nn(t),a&4&&kp(t);break;case 21:break;default:Vt(i,t),nn(t)}}function nn(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(Ip(o)){var a=o;break e}o=o.return}throw Error(n(160))}switch(a.tag){case 5:var c=a.stateNode;a.flags&32&&(Ai(c,""),a.flags&=-33);var h=Cp(t);Mu(t,h,c);break;case 3:case 4:var m=a.stateNode.containerInfo,_=Cp(t);Lu(t,_,m);break;default:throw Error(n(161))}}catch(w){xe(t,t.return,w)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Vw(t,i,o){U=t,Np(t)}function Np(t,i,o){for(var a=(t.mode&1)!==0;U!==null;){var c=U,h=c.child;if(c.tag===22&&a){var m=c.memoizedState!==null||Fo;if(!m){var _=c.alternate,w=_!==null&&_.memoizedState!==null||rt;_=Fo;var k=rt;if(Fo=m,(rt=w)&&!k)for(U=c;U!==null;)m=U,w=m.child,m.tag===22&&m.memoizedState!==null?Op(c):w!==null?(w.return=m,U=w):Op(c);for(;h!==null;)U=h,Np(h),h=h.sibling;U=c,Fo=_,rt=k}Pp(t)}else c.subtreeFlags&8772&&h!==null?(h.return=c,U=h):Pp(t)}}function Pp(t){for(;U!==null;){var i=U;if(i.flags&8772){var o=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:rt||Uo(5,i);break;case 1:var a=i.stateNode;if(i.flags&4&&!rt)if(o===null)a.componentDidMount();else{var c=i.elementType===i.type?o.memoizedProps:Wt(i.type,o.memoizedProps);a.componentDidUpdate(c,o.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&Af(i,h,a);break;case 3:var m=i.updateQueue;if(m!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Af(i,m,o)}break;case 5:var _=i.stateNode;if(o===null&&i.flags&4){o=_;var w=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":w.autoFocus&&o.focus();break;case"img":w.src&&(o.src=w.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var k=i.alternate;if(k!==null){var A=k.memoizedState;if(A!==null){var O=A.dehydrated;O!==null&&Wi(O)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}rt||i.flags&512&&Du(i)}catch(N){xe(i,i.return,N)}}if(i===t){U=null;break}if(o=i.sibling,o!==null){o.return=i.return,U=o;break}U=i.return}}function Ap(t){for(;U!==null;){var i=U;if(i===t){U=null;break}var o=i.sibling;if(o!==null){o.return=i.return,U=o;break}U=i.return}}function Op(t){for(;U!==null;){var i=U;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Uo(4,i)}catch(w){xe(i,o,w)}break;case 1:var a=i.stateNode;if(typeof a.componentDidMount=="function"){var c=i.return;try{a.componentDidMount()}catch(w){xe(i,c,w)}}var h=i.return;try{Du(i)}catch(w){xe(i,h,w)}break;case 5:var m=i.return;try{Du(i)}catch(w){xe(i,m,w)}}}catch(w){xe(i,i.return,w)}if(i===t){U=null;break}var _=i.sibling;if(_!==null){_.return=i.return,U=_;break}U=i.return}}var Hw=Math.ceil,jo=le.ReactCurrentDispatcher,bu=le.ReactCurrentOwner,Dt=le.ReactCurrentBatchConfig,oe=0,Ve=null,Fe=null,Qe=0,Ct=0,ri=Ln(0),ze=0,cs=null,pr=0,zo=0,Fu=0,ds=null,ft=null,Uu=0,ii=1/0,gn=null,Wo=!1,ju=null,zn=null,Bo=!1,Wn=null,Vo=0,hs=0,zu=null,Ho=-1,$o=0;function ot(){return oe&6?Me():Ho!==-1?Ho:Ho=Me()}function Bn(t){return t.mode&1?oe&2&&Qe!==0?Qe&-Qe:Rw.transition!==null?($o===0&&($o=Ih()),$o):(t=fe,t!==0||(t=window.event,t=t===void 0?16:xh(t.type)),t):1}function Ht(t,i,o,a){if(50<hs)throw hs=0,zu=null,Error(n(185));bi(t,o,a),(!(oe&2)||t!==Ve)&&(t===Ve&&(!(oe&2)&&(zo|=o),ze===4&&Vn(t,Qe)),pt(t,a),o===1&&oe===0&&!(i.mode&1)&&(ii=Me()+500,vo&&bn()))}function pt(t,i){var o=t.callbackNode;Rv(t,i);var a=Zs(t,t===Ve?Qe:0);if(a===0)o!==null&&wh(o),t.callbackNode=null,t.callbackPriority=0;else if(i=a&-a,t.callbackPriority!==i){if(o!=null&&wh(o),i===1)t.tag===0?kw(Dp.bind(null,t)):yf(Dp.bind(null,t)),Sw(function(){!(oe&6)&&bn()}),o=null;else{switch(Ch(a)){case 1:o=va;break;case 4:o=Eh;break;case 16:o=Ys;break;case 536870912:o=Sh;break;default:o=Ys}o=Wp(o,xp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function xp(t,i){if(Ho=-1,$o=0,oe&6)throw Error(n(327));var o=t.callbackNode;if(si()&&t.callbackNode!==o)return null;var a=Zs(t,t===Ve?Qe:0);if(a===0)return null;if(a&30||a&t.expiredLanes||i)i=Go(t,a);else{i=a;var c=oe;oe|=2;var h=Mp();(Ve!==t||Qe!==i)&&(gn=null,ii=Me()+500,gr(t,i));do try{qw();break}catch(_){Lp(t,_)}while(!0);iu(),jo.current=h,oe=c,Fe!==null?i=0:(Ve=null,Qe=0,i=ze)}if(i!==0){if(i===2&&(c=wa(t),c!==0&&(a=c,i=Wu(t,c))),i===1)throw o=cs,gr(t,0),Vn(t,a),pt(t,Me()),o;if(i===6)Vn(t,a);else{if(c=t.current.alternate,!(a&30)&&!$w(c)&&(i=Go(t,a),i===2&&(h=wa(t),h!==0&&(a=h,i=Wu(t,h))),i===1))throw o=cs,gr(t,0),Vn(t,a),pt(t,Me()),o;switch(t.finishedWork=c,t.finishedLanes=a,i){case 0:case 1:throw Error(n(345));case 2:_r(t,ft,gn);break;case 3:if(Vn(t,a),(a&130023424)===a&&(i=Uu+500-Me(),10<i)){if(Zs(t,0)!==0)break;if(c=t.suspendedLanes,(c&a)!==a){ot(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=qa(_r.bind(null,t,ft,gn),i);break}_r(t,ft,gn);break;case 4:if(Vn(t,a),(a&4194240)===a)break;for(i=t.eventTimes,c=-1;0<a;){var m=31-Ut(a);h=1<<m,m=i[m],m>c&&(c=m),a&=~h}if(a=c,a=Me()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Hw(a/1960))-a,10<a){t.timeoutHandle=qa(_r.bind(null,t,ft,gn),a);break}_r(t,ft,gn);break;case 5:_r(t,ft,gn);break;default:throw Error(n(329))}}}return pt(t,Me()),t.callbackNode===o?xp.bind(null,t):null}function Wu(t,i){var o=ds;return t.current.memoizedState.isDehydrated&&(gr(t,i).flags|=256),t=Go(t,i),t!==2&&(i=ft,ft=o,i!==null&&Bu(i)),t}function Bu(t){ft===null?ft=t:ft.push.apply(ft,t)}function $w(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var a=0;a<o.length;a++){var c=o[a],h=c.getSnapshot;c=c.value;try{if(!jt(h(),c))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Vn(t,i){for(i&=~Fu,i&=~zo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-Ut(i),a=1<<o;t[o]=-1,i&=~a}}function Dp(t){if(oe&6)throw Error(n(327));si();var i=Zs(t,0);if(!(i&1))return pt(t,Me()),null;var o=Go(t,i);if(t.tag!==0&&o===2){var a=wa(t);a!==0&&(i=a,o=Wu(t,a))}if(o===1)throw o=cs,gr(t,0),Vn(t,i),pt(t,Me()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,_r(t,ft,gn),pt(t,Me()),null}function Vu(t,i){var o=oe;oe|=1;try{return t(i)}finally{oe=o,oe===0&&(ii=Me()+500,vo&&bn())}}function mr(t){Wn!==null&&Wn.tag===0&&!(oe&6)&&si();var i=oe;oe|=1;var o=Dt.transition,a=fe;try{if(Dt.transition=null,fe=1,t)return t()}finally{fe=a,Dt.transition=o,oe=i,!(oe&6)&&bn()}}function Hu(){Ct=ri.current,ke(ri)}function gr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,Ew(o)),Fe!==null)for(o=Fe.return;o!==null;){var a=o;switch(Za(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&_o();break;case 3:ei(),ke(ct),ke(et),hu();break;case 5:cu(a);break;case 4:ei();break;case 13:ke(Pe);break;case 19:ke(Pe);break;case 10:su(a.type._context);break;case 22:case 23:Hu()}o=o.return}if(Ve=t,Fe=t=Hn(t.current,null),Qe=Ct=i,ze=0,cs=null,Fu=zo=pr=0,ft=ds=null,dr!==null){for(i=0;i<dr.length;i++)if(o=dr[i],a=o.interleaved,a!==null){o.interleaved=null;var c=a.next,h=o.pending;if(h!==null){var m=h.next;h.next=c,a.next=m}o.pending=a}dr=null}return t}function Lp(t,i){do{var o=Fe;try{if(iu(),Po.current=Do,Ao){for(var a=Ae.memoizedState;a!==null;){var c=a.queue;c!==null&&(c.pending=null),a=a.next}Ao=!1}if(fr=0,Be=je=Ae=null,is=!1,ss=0,bu.current=null,o===null||o.return===null){ze=1,cs=i,Fe=null;break}e:{var h=t,m=o.return,_=o,w=i;if(i=Qe,_.flags|=32768,w!==null&&typeof w=="object"&&typeof w.then=="function"){var k=w,A=_,O=A.tag;if(!(A.mode&1)&&(O===0||O===11||O===15)){var N=A.alternate;N?(A.updateQueue=N.updateQueue,A.memoizedState=N.memoizedState,A.lanes=N.lanes):(A.updateQueue=null,A.memoizedState=null)}var F=sp(m);if(F!==null){F.flags&=-257,op(F,m,_,h,i),F.mode&1&&ip(h,k,i),i=F,w=k;var z=i.updateQueue;if(z===null){var W=new Set;W.add(w),i.updateQueue=W}else z.add(w);break e}else{if(!(i&1)){ip(h,k,i),$u();break e}w=Error(n(426))}}else if(Ne&&_.mode&1){var be=sp(m);if(be!==null){!(be.flags&65536)&&(be.flags|=256),op(be,m,_,h,i),nu(ti(w,_));break e}}h=w=ti(w,_),ze!==4&&(ze=2),ds===null?ds=[h]:ds.push(h),h=m;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var C=np(h,w,i);Pf(h,C);break e;case 1:_=w;var S=h.type,T=h.stateNode;if(!(h.flags&128)&&(typeof S.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(zn===null||!zn.has(T)))){h.flags|=65536,i&=-i,h.lanes|=i;var x=rp(h,_,i);Pf(h,x);break e}}h=h.return}while(h!==null)}Fp(o)}catch(B){i=B,Fe===o&&o!==null&&(Fe=o=o.return);continue}break}while(!0)}function Mp(){var t=jo.current;return jo.current=Do,t===null?Do:t}function $u(){(ze===0||ze===3||ze===2)&&(ze=4),Ve===null||!(pr&268435455)&&!(zo&268435455)||Vn(Ve,Qe)}function Go(t,i){var o=oe;oe|=2;var a=Mp();(Ve!==t||Qe!==i)&&(gn=null,gr(t,i));do try{Gw();break}catch(c){Lp(t,c)}while(!0);if(iu(),oe=o,jo.current=a,Fe!==null)throw Error(n(261));return Ve=null,Qe=0,ze}function Gw(){for(;Fe!==null;)bp(Fe)}function qw(){for(;Fe!==null&&!yv();)bp(Fe)}function bp(t){var i=zp(t.alternate,t,Ct);t.memoizedProps=t.pendingProps,i===null?Fp(t):Fe=i,bu.current=null}function Fp(t){var i=t;do{var o=i.alternate;if(t=i.return,i.flags&32768){if(o=zw(o,i),o!==null){o.flags&=32767,Fe=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ze=6,Fe=null;return}}else if(o=jw(o,i,Ct),o!==null){Fe=o;return}if(i=i.sibling,i!==null){Fe=i;return}Fe=i=t}while(i!==null);ze===0&&(ze=5)}function _r(t,i,o){var a=fe,c=Dt.transition;try{Dt.transition=null,fe=1,Kw(t,i,o,a)}finally{Dt.transition=c,fe=a}return null}function Kw(t,i,o,a){do si();while(Wn!==null);if(oe&6)throw Error(n(327));o=t.finishedWork;var c=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(Nv(t,h),t===Ve&&(Fe=Ve=null,Qe=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||Bo||(Bo=!0,Wp(Ys,function(){return si(),null})),h=(o.flags&15990)!==0,o.subtreeFlags&15990||h){h=Dt.transition,Dt.transition=null;var m=fe;fe=1;var _=oe;oe|=4,bu.current=null,Bw(t,o),Rp(o,t),pw($a),no=!!Ha,$a=Ha=null,t.current=o,Vw(o),vv(),oe=_,fe=m,Dt.transition=h}else t.current=o;if(Bo&&(Bo=!1,Wn=t,Vo=c),h=t.pendingLanes,h===0&&(zn=null),Sv(o.stateNode),pt(t,Me()),i!==null)for(a=t.onRecoverableError,o=0;o<i.length;o++)c=i[o],a(c.value,{componentStack:c.stack,digest:c.digest});if(Wo)throw Wo=!1,t=ju,ju=null,t;return Vo&1&&t.tag!==0&&si(),h=t.pendingLanes,h&1?t===zu?hs++:(hs=0,zu=t):hs=0,bn(),null}function si(){if(Wn!==null){var t=Ch(Vo),i=Dt.transition,o=fe;try{if(Dt.transition=null,fe=16>t?16:t,Wn===null)var a=!1;else{if(t=Wn,Wn=null,Vo=0,oe&6)throw Error(n(331));var c=oe;for(oe|=4,U=t.current;U!==null;){var h=U,m=h.child;if(U.flags&16){var _=h.deletions;if(_!==null){for(var w=0;w<_.length;w++){var k=_[w];for(U=k;U!==null;){var A=U;switch(A.tag){case 0:case 11:case 15:us(8,A,h)}var O=A.child;if(O!==null)O.return=A,U=O;else for(;U!==null;){A=U;var N=A.sibling,F=A.return;if(Sp(A),A===k){U=null;break}if(N!==null){N.return=F,U=N;break}U=F}}}var z=h.alternate;if(z!==null){var W=z.child;if(W!==null){z.child=null;do{var be=W.sibling;W.sibling=null,W=be}while(W!==null)}}U=h}}if(h.subtreeFlags&2064&&m!==null)m.return=h,U=m;else e:for(;U!==null;){if(h=U,h.flags&2048)switch(h.tag){case 0:case 11:case 15:us(9,h,h.return)}var C=h.sibling;if(C!==null){C.return=h.return,U=C;break e}U=h.return}}var S=t.current;for(U=S;U!==null;){m=U;var T=m.child;if(m.subtreeFlags&2064&&T!==null)T.return=m,U=T;else e:for(m=S;U!==null;){if(_=U,_.flags&2048)try{switch(_.tag){case 0:case 11:case 15:Uo(9,_)}}catch(B){xe(_,_.return,B)}if(_===m){U=null;break e}var x=_.sibling;if(x!==null){x.return=_.return,U=x;break e}U=_.return}}if(oe=c,bn(),Jt&&typeof Jt.onPostCommitFiberRoot=="function")try{Jt.onPostCommitFiberRoot(Qs,t)}catch{}a=!0}return a}finally{fe=o,Dt.transition=i}}return!1}function Up(t,i,o){i=ti(o,i),i=np(t,i,1),t=Un(t,i,1),i=ot(),t!==null&&(bi(t,1,i),pt(t,i))}function xe(t,i,o){if(t.tag===3)Up(t,t,o);else for(;i!==null;){if(i.tag===3){Up(i,t,o);break}else if(i.tag===1){var a=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(zn===null||!zn.has(a))){t=ti(o,t),t=rp(i,t,1),i=Un(i,t,1),t=ot(),i!==null&&(bi(i,1,t),pt(i,t));break}}i=i.return}}function Yw(t,i,o){var a=t.pingCache;a!==null&&a.delete(i),i=ot(),t.pingedLanes|=t.suspendedLanes&o,Ve===t&&(Qe&o)===o&&(ze===4||ze===3&&(Qe&130023424)===Qe&&500>Me()-Uu?gr(t,0):Fu|=o),pt(t,i)}function jp(t,i){i===0&&(t.mode&1?(i=Js,Js<<=1,!(Js&130023424)&&(Js=4194304)):i=1);var o=ot();t=fn(t,i),t!==null&&(bi(t,i,o),pt(t,o))}function Qw(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),jp(t,o)}function Xw(t,i){var o=0;switch(t.tag){case 13:var a=t.stateNode,c=t.memoizedState;c!==null&&(o=c.retryLane);break;case 19:a=t.stateNode;break;default:throw Error(n(314))}a!==null&&a.delete(i),jp(t,o)}var zp;zp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||ct.current)ht=!0;else{if(!(t.lanes&o)&&!(i.flags&128))return ht=!1,Uw(t,i,o);ht=!!(t.flags&131072)}else ht=!1,Ne&&i.flags&1048576&&vf(i,Eo,i.index);switch(i.lanes=0,i.tag){case 2:var a=i.type;bo(t,i),t=i.pendingProps;var c=qr(i,et.current);Zr(i,o),c=mu(null,i,a,t,c,o);var h=gu();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,dt(a)?(h=!0,yo(i)):h=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,au(i),c.updater=Lo,i.stateNode=c,c._reactInternals=i,Su(i,a,t,o),i=ku(null,i,a,!0,h,o)):(i.tag=0,Ne&&h&&Ja(i),st(null,i,c,o),i=i.child),i;case 16:a=i.elementType;e:{switch(bo(t,i),t=i.pendingProps,c=a._init,a=c(a._payload),i.type=a,c=i.tag=Zw(a),t=Wt(a,t),c){case 0:i=Tu(null,i,a,t,o);break e;case 1:i=hp(null,i,a,t,o);break e;case 11:i=lp(null,i,a,t,o);break e;case 14:i=ap(null,i,a,Wt(a.type,t),o);break e}throw Error(n(306,a,""))}return i;case 0:return a=i.type,c=i.pendingProps,c=i.elementType===a?c:Wt(a,c),Tu(t,i,a,c,o);case 1:return a=i.type,c=i.pendingProps,c=i.elementType===a?c:Wt(a,c),hp(t,i,a,c,o);case 3:e:{if(fp(i),t===null)throw Error(n(387));a=i.pendingProps,h=i.memoizedState,c=h.element,Nf(t,i),Ro(i,a,null,o);var m=i.memoizedState;if(a=m.element,h.isDehydrated)if(h={element:a,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){c=ti(Error(n(423)),i),i=pp(t,i,a,o,c);break e}else if(a!==c){c=ti(Error(n(424)),i),i=pp(t,i,a,o,c);break e}else for(It=Dn(i.stateNode.containerInfo.firstChild),St=i,Ne=!0,zt=null,o=kf(i,null,a,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Qr(),a===c){i=mn(t,i,o);break e}st(t,i,a,o)}i=i.child}return i;case 5:return Of(i),t===null&&tu(i),a=i.type,c=i.pendingProps,h=t!==null?t.memoizedProps:null,m=c.children,Ga(a,c)?m=null:h!==null&&Ga(a,h)&&(i.flags|=32),dp(t,i),st(t,i,m,o),i.child;case 6:return t===null&&tu(i),null;case 13:return mp(t,i,o);case 4:return uu(i,i.stateNode.containerInfo),a=i.pendingProps,t===null?i.child=Xr(i,null,a,o):st(t,i,a,o),i.child;case 11:return a=i.type,c=i.pendingProps,c=i.elementType===a?c:Wt(a,c),lp(t,i,a,c,o);case 7:return st(t,i,i.pendingProps,o),i.child;case 8:return st(t,i,i.pendingProps.children,o),i.child;case 12:return st(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(a=i.type._context,c=i.pendingProps,h=i.memoizedProps,m=c.value,Se(Co,a._currentValue),a._currentValue=m,h!==null)if(jt(h.value,m)){if(h.children===c.children&&!ct.current){i=mn(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var _=h.dependencies;if(_!==null){m=h.child;for(var w=_.firstContext;w!==null;){if(w.context===a){if(h.tag===1){w=pn(-1,o&-o),w.tag=2;var k=h.updateQueue;if(k!==null){k=k.shared;var A=k.pending;A===null?w.next=w:(w.next=A.next,A.next=w),k.pending=w}}h.lanes|=o,w=h.alternate,w!==null&&(w.lanes|=o),ou(h.return,o,i),_.lanes|=o;break}w=w.next}}else if(h.tag===10)m=h.type===i.type?null:h.child;else if(h.tag===18){if(m=h.return,m===null)throw Error(n(341));m.lanes|=o,_=m.alternate,_!==null&&(_.lanes|=o),ou(m,o,i),m=h.sibling}else m=h.child;if(m!==null)m.return=h;else for(m=h;m!==null;){if(m===i){m=null;break}if(h=m.sibling,h!==null){h.return=m.return,m=h;break}m=m.return}h=m}st(t,i,c.children,o),i=i.child}return i;case 9:return c=i.type,a=i.pendingProps.children,Zr(i,o),c=Ot(c),a=a(c),i.flags|=1,st(t,i,a,o),i.child;case 14:return a=i.type,c=Wt(a,i.pendingProps),c=Wt(a.type,c),ap(t,i,a,c,o);case 15:return up(t,i,i.type,i.pendingProps,o);case 17:return a=i.type,c=i.pendingProps,c=i.elementType===a?c:Wt(a,c),bo(t,i),i.tag=1,dt(a)?(t=!0,yo(i)):t=!1,Zr(i,o),ep(i,a,c),Su(i,a,c,o),ku(null,i,a,!0,t,o);case 19:return _p(t,i,o);case 22:return cp(t,i,o)}throw Error(n(156,i.tag))};function Wp(t,i){return vh(t,i)}function Jw(t,i,o,a){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lt(t,i,o,a){return new Jw(t,i,o,a)}function Gu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Zw(t){if(typeof t=="function")return Gu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Nt)return 11;if(t===Xt)return 14}return 2}function Hn(t,i){var o=t.alternate;return o===null?(o=Lt(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function qo(t,i,o,a,c,h){var m=2;if(a=t,typeof t=="function")Gu(t)&&(m=1);else if(typeof t=="string")m=5;else e:switch(t){case Q:return yr(o.children,c,h,i);case se:m=8,c|=8;break;case We:return t=Lt(12,o,i,c|2),t.elementType=We,t.lanes=h,t;case vt:return t=Lt(13,o,i,c),t.elementType=vt,t.lanes=h,t;case Ft:return t=Lt(19,o,i,c),t.elementType=Ft,t.lanes=h,t;case Oe:return Ko(o,c,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case it:m=10;break e;case Qt:m=9;break e;case Nt:m=11;break e;case Xt:m=14;break e;case ut:m=16,a=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Lt(m,o,i,c),i.elementType=t,i.type=a,i.lanes=h,i}function yr(t,i,o,a){return t=Lt(7,t,a,i),t.lanes=o,t}function Ko(t,i,o,a){return t=Lt(22,t,a,i),t.elementType=Oe,t.lanes=o,t.stateNode={isHidden:!1},t}function qu(t,i,o){return t=Lt(6,t,null,i),t.lanes=o,t}function Ku(t,i,o){return i=Lt(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function e0(t,i,o,a,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ea(0),this.expirationTimes=Ea(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ea(0),this.identifierPrefix=a,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function Yu(t,i,o,a,c,h,m,_,w){return t=new e0(t,i,o,_,w),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Lt(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:a,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},au(h),t}function t0(t,i,o){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Z,key:a==null?null:""+a,children:t,containerInfo:i,implementation:o}}function Bp(t){if(!t)return Mn;t=t._reactInternals;e:{if(or(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(dt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(dt(o))return gf(t,o,i)}return i}function Vp(t,i,o,a,c,h,m,_,w){return t=Yu(o,a,!0,t,c,h,m,_,w),t.context=Bp(null),o=t.current,a=ot(),c=Bn(o),h=pn(a,c),h.callback=i??null,Un(o,h,c),t.current.lanes=c,bi(t,c,a),pt(t,a),t}function Yo(t,i,o,a){var c=i.current,h=ot(),m=Bn(c);return o=Bp(o),i.context===null?i.context=o:i.pendingContext=o,i=pn(h,m),i.payload={element:t},a=a===void 0?null:a,a!==null&&(i.callback=a),t=Un(c,i,m),t!==null&&(Ht(t,c,m,h),ko(t,c,m)),m}function Qo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Hp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function Qu(t,i){Hp(t,i),(t=t.alternate)&&Hp(t,i)}function n0(){return null}var $p=typeof reportError=="function"?reportError:function(t){console.error(t)};function Xu(t){this._internalRoot=t}Xo.prototype.render=Xu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Yo(t,i,null,null)},Xo.prototype.unmount=Xu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;mr(function(){Yo(null,t,null,null)}),i[un]=null}};function Xo(t){this._internalRoot=t}Xo.prototype.unstable_scheduleHydration=function(t){if(t){var i=Rh();t={blockedOn:null,target:t,priority:i};for(var o=0;o<An.length&&i!==0&&i<An[o].priority;o++);An.splice(o,0,t),o===0&&Ah(t)}};function Ju(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Jo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Gp(){}function r0(t,i,o,a,c){if(c){if(typeof a=="function"){var h=a;a=function(){var k=Qo(m);h.call(k)}}var m=Vp(i,a,t,0,null,!1,!1,"",Gp);return t._reactRootContainer=m,t[un]=m.current,Qi(t.nodeType===8?t.parentNode:t),mr(),m}for(;c=t.lastChild;)t.removeChild(c);if(typeof a=="function"){var _=a;a=function(){var k=Qo(w);_.call(k)}}var w=Yu(t,0,!1,null,null,!1,!1,"",Gp);return t._reactRootContainer=w,t[un]=w.current,Qi(t.nodeType===8?t.parentNode:t),mr(function(){Yo(i,w,o,a)}),w}function Zo(t,i,o,a,c){var h=o._reactRootContainer;if(h){var m=h;if(typeof c=="function"){var _=c;c=function(){var w=Qo(m);_.call(w)}}Yo(i,m,t,c)}else m=r0(o,i,t,c,a);return Qo(m)}Th=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Mi(i.pendingLanes);o!==0&&(Sa(i,o|1),pt(i,Me()),!(oe&6)&&(ii=Me()+500,bn()))}break;case 13:mr(function(){var a=fn(t,1);if(a!==null){var c=ot();Ht(a,t,1,c)}}),Qu(t,1)}},Ia=function(t){if(t.tag===13){var i=fn(t,134217728);if(i!==null){var o=ot();Ht(i,t,134217728,o)}Qu(t,134217728)}},kh=function(t){if(t.tag===13){var i=Bn(t),o=fn(t,i);if(o!==null){var a=ot();Ht(o,t,i,a)}Qu(t,i)}},Rh=function(){return fe},Nh=function(t,i){var o=fe;try{return fe=t,i()}finally{fe=o}},ma=function(t,i,o){switch(i){case"input":if(la(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var a=o[i];if(a!==t&&a.form===t.form){var c=go(a);if(!c)throw Error(n(90));Jd(a),la(a,c)}}}break;case"textarea":rh(t,o);break;case"select":i=o.value,i!=null&&Mr(t,!!o.multiple,i,!1)}},hh=Vu,fh=mr;var i0={usingClientEntryPoint:!1,Events:[Zi,$r,go,ch,dh,Vu]},fs={findFiberByHostInstance:lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},s0={bundleType:fs.bundleType,version:fs.version,rendererPackageName:fs.rendererPackageName,rendererConfig:fs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:le.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=_h(t),t===null?null:t.stateNode},findFiberByHostInstance:fs.findFiberByHostInstance||n0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var el=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!el.isDisabled&&el.supportsFiber)try{Qs=el.inject(s0),Jt=el}catch{}}return mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=i0,mt.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ju(i))throw Error(n(200));return t0(t,i,null,o)},mt.createRoot=function(t,i){if(!Ju(t))throw Error(n(299));var o=!1,a="",c=$p;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(a=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=Yu(t,1,!1,null,null,o,!1,a,c),t[un]=i.current,Qi(t.nodeType===8?t.parentNode:t),new Xu(i)},mt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=_h(i),t=t===null?null:t.stateNode,t},mt.flushSync=function(t){return mr(t)},mt.hydrate=function(t,i,o){if(!Jo(i))throw Error(n(200));return Zo(null,t,i,!0,o)},mt.hydrateRoot=function(t,i,o){if(!Ju(t))throw Error(n(405));var a=o!=null&&o.hydratedSources||null,c=!1,h="",m=$p;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(m=o.onRecoverableError)),i=Vp(i,null,t,1,o??null,c,!1,h,m),t[un]=i.current,Qi(t),a)for(t=0;t<a.length;t++)o=a[t],c=o._getVersion,c=c(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,c]:i.mutableSourceEagerHydrationData.push(o,c);return new Xo(i)},mt.render=function(t,i,o){if(!Jo(i))throw Error(n(200));return Zo(null,t,i,!1,o)},mt.unmountComponentAtNode=function(t){if(!Jo(t))throw Error(n(40));return t._reactRootContainer?(mr(function(){Zo(null,null,t,!1,function(){t._reactRootContainer=null,t[un]=null})}),!0):!1},mt.unstable_batchedUpdates=Vu,mt.unstable_renderSubtreeIntoContainer=function(t,i,o,a){if(!Jo(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Zo(t,i,o,!1,a)},mt.version="18.3.1-next-f1338f8080-20240426",mt}var tm;function f0(){if(tm)return tc.exports;tm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),tc.exports=h0(),tc.exports}var nm;function p0(){if(nm)return tl;nm=1;var r=f0();return tl.createRoot=r.createRoot,tl.hydrateRoot=r.hydrateRoot,tl}var m0=p0();const ye={GRASS:"grass",WATER:"water",ROCK:"rock",EMPTY:"empty",FOOD:"food",NULL:"null",GAME:"game",WOOD:"wood",SELL_APPLE:"sellApple",FREE_WAY:"freeway",HOME:"home"},g0={[ye.GRASS]:.4,[ye.WATER]:.2,[ye.EMPTY]:.1,[ye.ROCK]:.14,[ye.FOOD]:.15,[ye.HOME]:.01},_0=["moveU","moveR","moveD","moveL","dragon"],y0="_tile_1en58_1",v0="_grass_1en58_14",w0="_water_1en58_22",E0="_rock_1en58_29",S0="_empty_1en58_36",I0="_food_1en58_43",C0="_game_1en58_50",T0="_home_1en58_51",k0="_wood_1en58_58",R0="_sellApple_1en58_65",N0="_freeway_1en58_72",rm={tile:y0,grass:v0,water:w0,rock:E0,empty:S0,food:I0,game:C0,home:T0,wood:k0,sellApple:R0,freeway:N0};var ic={exports:{}},sc,im;function P0(){if(im)return sc;im=1;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return sc=r,sc}var oc,sm;function A0(){if(sm)return oc;sm=1;var r=P0();function e(){}function n(){}return n.resetWarningCache=e,oc=function(){function s(d,f,p,g,v,y){if(y!==r){var E=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw E.name="Invariant Violation",E}}s.isRequired=s;function l(){return s}var u={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:l,element:s,elementType:s,instanceOf:l,node:s,objectOf:l,oneOf:l,oneOfType:l,shape:l,exact:l,checkPropTypes:n,resetWarningCache:e};return u.PropTypes=u,u},oc}var om;function O0(){return om||(om=1,ic.exports=A0()()),ic.exports}var x0=O0();const Xe=Pg(x0);function Ll(r){const{isActive:e=!1,type:n="empty",site:s="home"}=r,l={[ye.GRASS]:s==="home"?"":"☘️",[ye.WATER]:"",[ye.ROCK]:"⛰️",[ye.EMPTY]:"",[ye.FOOD]:"🍎",[ye.GAME]:"🌳",[ye.SELL_APPLE]:"💰",[ye.FREE_WAY]:"🚦",[ye.HOME]:"🏠"};return G.jsx("div",{className:`${rm.tile} ${rm[n]}`,children:l[n]})}Ll.propTypes={isActive:Xe.bool,type:Xe.string,site:Xe.string};const D0="_board_16uod_1",L0="_row_16uod_8",M0="_boardContainer_16uod_13",ui={board:D0,row:L0,boardContainer:M0};var lm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D=function(r,e){if(!r)throw Si(e)},Si=function(r){return new Error("Firebase Database ("+Ag.SDK_VERSION+") INTERNAL ASSERT FAILED: "+r)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):(l&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},b0=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const l=r[n++];if(l<128)e[s++]=String.fromCharCode(l);else if(l>191&&l<224){const u=r[n++];e[s++]=String.fromCharCode((l&31)<<6|u&63)}else if(l>239&&l<365){const u=r[n++],d=r[n++],f=r[n++],p=((l&7)<<18|(u&63)<<12|(d&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const u=r[n++],d=r[n++];e[s++]=String.fromCharCode((l&15)<<12|(u&63)<<6|d&63)}}return e.join("")},Jc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<r.length;l+=3){const u=r[l],d=l+1<r.length,f=d?r[l+1]:0,p=l+2<r.length,g=p?r[l+2]:0,v=u>>2,y=(u&3)<<4|f>>4;let E=(f&15)<<2|g>>6,R=g&63;p||(R=64,d||(E=64)),s.push(n[v],n[y],n[E],n[R])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Og(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):b0(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<r.length;){const u=n[r.charAt(l++)],f=l<r.length?n[r.charAt(l)]:0;++l;const g=l<r.length?n[r.charAt(l)]:64;++l;const y=l<r.length?n[r.charAt(l)]:64;if(++l,u==null||f==null||g==null||y==null)throw new F0;const E=u<<2|f>>4;if(s.push(E),g!==64){const R=f<<4&240|g>>2;if(s.push(R),y!==64){const L=g<<6&192|y;s.push(L)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class F0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xg=function(r){const e=Og(r);return Jc.encodeByteArray(e,!0)},cl=function(r){return xg(r).replace(/\./g,"")},dl=function(r){try{return Jc.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U0(r){return Dg(void 0,r)}function Dg(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!j0(n)||(r[n]=Dg(r[n],e[n]));return r}function j0(r){return r!=="__proto__"}/**
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
 */function z0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const W0=()=>z0().__FIREBASE_DEFAULTS__,B0=()=>{if(typeof process>"u"||typeof lm>"u")return;const r=lm.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},V0=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&dl(r[1]);return e&&JSON.parse(e)},Zc=()=>{try{return W0()||B0()||V0()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Lg=r=>{var e,n;return(n=(e=Zc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[r]},H0=r=>{const e=Lg(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Mg=()=>{var r;return(r=Zc())===null||r===void 0?void 0:r.config},bg=r=>{var e;return(e=Zc())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function $0(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",l=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},r);return[cl(JSON.stringify(n)),cl(JSON.stringify(d)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ed(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(at())}function G0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Fg(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Ug(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function q0(){const r=at();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function jg(){return Ag.NODE_ADMIN===!0}function zg(){try{return typeof indexedDB=="object"}catch{return!1}}function Wg(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},l.onupgradeneeded=()=>{n=!1},l.onerror=()=>{var u;e(((u=l.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){e(n)}})}function K0(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y0="FirebaseError";class ln extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Y0,Object.setPrototypeOf(this,ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Or.prototype.create)}}class Or{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},l=`${this.service}/${e}`,u=this.errors[e],d=u?Q0(u,s):"Error",f=`${this.serviceName}: ${d} (${l}).`;return new ln(l,f,s)}}function Q0(r,e){return r.replace(X0,(n,s)=>{const l=e[s];return l!=null?String(l):`<${s}?>`})}const X0=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(r){return JSON.parse(r)}function Ke(r){return JSON.stringify(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg=function(r){let e={},n={},s={},l="";try{const u=r.split(".");e=ks(dl(u[0])||""),n=ks(dl(u[1])||""),l=u[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:l}},J0=function(r){const e=Bg(r),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Z0=function(r){const e=Bg(r).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function gi(r,e){if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}function Cc(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function hl(r,e,n){const s={};for(const l in r)Object.prototype.hasOwnProperty.call(r,l)&&(s[l]=e.call(n,r[l],l,r));return s}function Rs(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const l of n){if(!s.includes(l))return!1;const u=r[l],d=e[l];if(am(u)&&am(d)){if(!Rs(u,d))return!1}else if(u!==d)return!1}for(const l of s)if(!n.includes(l))return!1;return!0}function am(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class eE{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let y=0;y<16;y++)s[y]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let y=0;y<16;y++)s[y]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let y=16;y<80;y++){const E=s[y-3]^s[y-8]^s[y-14]^s[y-16];s[y]=(E<<1|E>>>31)&4294967295}let l=this.chain_[0],u=this.chain_[1],d=this.chain_[2],f=this.chain_[3],p=this.chain_[4],g,v;for(let y=0;y<80;y++){y<40?y<20?(g=f^u&(d^f),v=1518500249):(g=u^d^f,v=1859775393):y<60?(g=u&d|f&(u|d),v=2400959708):(g=u^d^f,v=3395469782);const E=(l<<5|l>>>27)+g+p+v+s[y]&4294967295;p=f,f=d,d=(u<<30|u>>>2)&4294967295,u=l,l=E}this.chain_[0]=this.chain_[0]+l&4294967295,this.chain_[1]=this.chain_[1]+u&4294967295,this.chain_[2]=this.chain_[2]+d&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let l=0;const u=this.buf_;let d=this.inbuf_;for(;l<n;){if(d===0)for(;l<=s;)this.compress_(e,l),l+=this.blockSize;if(typeof e=="string"){for(;l<n;)if(u[d]=e.charCodeAt(l),++d,++l,d===this.blockSize){this.compress_(u),d=0;break}}else for(;l<n;)if(u[d]=e[l],++d,++l,d===this.blockSize){this.compress_(u),d=0;break}}this.inbuf_=d,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let l=this.blockSize-1;l>=56;l--)this.buf_[l]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let l=0;l<5;l++)for(let u=24;u>=0;u-=8)e[s]=this.chain_[l]>>u&255,++s;return e}}function tE(r,e){const n=new nE(r,e);return n.subscribe.bind(n)}class nE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let l;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");rE(e,["next","error","complete"])?l=e:l={next:e,error:n,complete:s},l.next===void 0&&(l.next=lc),l.error===void 0&&(l.error=lc),l.complete===void 0&&(l.complete=lc);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rE(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function lc(){}function Ml(r,e){return`${r} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);if(l>=55296&&l<=56319){const u=l-55296;s++,D(s<r.length,"Surrogate pair missing trail surrogate.");const d=r.charCodeAt(s)-56320;l=65536+(u<<10)+d}l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):l<65536?(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},bl=function(r){let e=0;for(let n=0;n<r.length;n++){const s=r.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE=1e3,oE=2,lE=4*60*60*1e3,aE=.5;function um(r,e=sE,n=oE){const s=e*Math.pow(n,r),l=Math.round(aE*s*(Math.random()-.5)*2);return Math.min(lE,s+l)}/**
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
 */class uE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new bs;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:n});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),l=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(l)return null;throw u}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(dE(e))try{this.getOrInitializeService({instanceIdentifier:wr})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:l});s.resolve(u)}catch{}}}}clearInstance(e=wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wr){return this.instances.has(e)}getOptions(e=wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,d]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(u);s===f&&d.resolve(l)}return l}onInit(e,n){var s;const l=this.normalizeInstanceIdentifier(n),u=(s=this.onInitCallbacks.get(l))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(l,u);const d=this.instances.get(l);return d&&e(d,l),()=>{u.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const l of s)try{l(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:cE(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=wr){return this.component?this.component.multipleInstances?e:wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cE(r){return r===wr?void 0:r}function dE(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new uE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(_e||(_e={}));const fE={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},pE=_e.INFO,mE={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},gE=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),l=mE[e];if(l)console[l](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fl{constructor(e){this.name=e,this._logLevel=pE,this._logHandler=gE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const _E=(r,e)=>e.some(n=>r instanceof n);let cm,dm;function yE(){return cm||(cm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vE(){return dm||(dm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vg=new WeakMap,Tc=new WeakMap,Hg=new WeakMap,ac=new WeakMap,td=new WeakMap;function wE(r){const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("success",u),r.removeEventListener("error",d)},u=()=>{n(Jn(r.result)),l()},d=()=>{s(r.error),l()};r.addEventListener("success",u),r.addEventListener("error",d)});return e.then(n=>{n instanceof IDBCursor&&Vg.set(n,r)}).catch(()=>{}),td.set(e,r),e}function EE(r){if(Tc.has(r))return;const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",d),r.removeEventListener("abort",d)},u=()=>{n(),l()},d=()=>{s(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",u),r.addEventListener("error",d),r.addEventListener("abort",d)});Tc.set(r,e)}let kc={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return Tc.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Hg.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Jn(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function SE(r){kc=r(kc)}function IE(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(uc(this),e,...n);return Hg.set(s,e.sort?e.sort():[e]),Jn(s)}:vE().includes(r)?function(...e){return r.apply(uc(this),e),Jn(Vg.get(this))}:function(...e){return Jn(r.apply(uc(this),e))}}function CE(r){return typeof r=="function"?IE(r):(r instanceof IDBTransaction&&EE(r),_E(r,yE())?new Proxy(r,kc):r)}function Jn(r){if(r instanceof IDBRequest)return wE(r);if(ac.has(r))return ac.get(r);const e=CE(r);return e!==r&&(ac.set(r,e),td.set(e,r)),e}const uc=r=>td.get(r);function $g(r,e,{blocked:n,upgrade:s,blocking:l,terminated:u}={}){const d=indexedDB.open(r,e),f=Jn(d);return s&&d.addEventListener("upgradeneeded",p=>{s(Jn(d.result),p.oldVersion,p.newVersion,Jn(d.transaction),p)}),n&&d.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),f.then(p=>{u&&p.addEventListener("close",()=>u()),l&&p.addEventListener("versionchange",g=>l(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const TE=["get","getKey","getAll","getAllKeys","count"],kE=["put","add","delete","clear"],cc=new Map;function hm(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(cc.get(e))return cc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,l=kE.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(l||TE.includes(n)))return;const u=async function(d,...f){const p=this.transaction(d,l?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(f.shift())),(await Promise.all([g[n](...f),l&&p.done]))[0]};return cc.set(e,u),u}SE(r=>({...r,get:(e,n,s)=>hm(e,n)||r.get(e,n,s),has:(e,n)=>!!hm(e,n)||r.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(NE(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function NE(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Rc="@firebase/app",fm="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=new Fl("@firebase/app"),PE="@firebase/app-compat",AE="@firebase/analytics-compat",OE="@firebase/analytics",xE="@firebase/app-check-compat",DE="@firebase/app-check",LE="@firebase/auth",ME="@firebase/auth-compat",bE="@firebase/database",FE="@firebase/data-connect",UE="@firebase/database-compat",jE="@firebase/functions",zE="@firebase/functions-compat",WE="@firebase/installations",BE="@firebase/installations-compat",VE="@firebase/messaging",HE="@firebase/messaging-compat",$E="@firebase/performance",GE="@firebase/performance-compat",qE="@firebase/remote-config",KE="@firebase/remote-config-compat",YE="@firebase/storage",QE="@firebase/storage-compat",XE="@firebase/firestore",JE="@firebase/vertexai",ZE="@firebase/firestore-compat",eS="firebase",tS="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc="[DEFAULT]",nS={[Rc]:"fire-core",[PE]:"fire-core-compat",[OE]:"fire-analytics",[AE]:"fire-analytics-compat",[DE]:"fire-app-check",[xE]:"fire-app-check-compat",[LE]:"fire-auth",[ME]:"fire-auth-compat",[bE]:"fire-rtdb",[FE]:"fire-data-connect",[UE]:"fire-rtdb-compat",[jE]:"fire-fn",[zE]:"fire-fn-compat",[WE]:"fire-iid",[BE]:"fire-iid-compat",[VE]:"fire-fcm",[HE]:"fire-fcm-compat",[$E]:"fire-perf",[GE]:"fire-perf-compat",[qE]:"fire-rc",[KE]:"fire-rc-compat",[YE]:"fire-gcs",[QE]:"fire-gcs-compat",[XE]:"fire-fst",[ZE]:"fire-fst-compat",[JE]:"fire-vertex","fire-js":"fire-js",[eS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl=new Map,rS=new Map,Pc=new Map;function pm(r,e){try{r.container.addComponent(e)}catch(n){In.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function on(r){const e=r.name;if(Pc.has(e))return In.debug(`There were multiple attempts to register component ${e}.`),!1;Pc.set(e,r);for(const n of fl.values())pm(n,r);for(const n of rS.values())pm(n,r);return!0}function xr(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function _n(r){return r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zn=new Or("app","Firebase",iS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Kt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci=tS;function Gg(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Nc,automaticDataCollectionEnabled:!1},e),l=s.name;if(typeof l!="string"||!l)throw Zn.create("bad-app-name",{appName:String(l)});if(n||(n=Mg()),!n)throw Zn.create("no-options");const u=fl.get(l);if(u){if(Rs(n,u.options)&&Rs(s,u.config))return u;throw Zn.create("duplicate-app",{appName:l})}const d=new hE(l);for(const p of Pc.values())d.addComponent(p);const f=new sS(n,s,d);return fl.set(l,f),f}function nd(r=Nc){const e=fl.get(r);if(!e&&r===Nc&&Mg())return Gg();if(!e)throw Zn.create("no-app",{appName:r});return e}function bt(r,e,n){var s;let l=(s=nS[r])!==null&&s!==void 0?s:r;n&&(l+=`-${n}`);const u=l.match(/\s|\//),d=e.match(/\s|\//);if(u||d){const f=[`Unable to register library "${l}" with version "${e}":`];u&&f.push(`library name "${l}" contains illegal characters (whitespace or "/")`),u&&d&&f.push("and"),d&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),In.warn(f.join(" "));return}on(new Kt(`${l}-version`,()=>({library:l,version:e}),"VERSION"))}/**
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
 */const oS="firebase-heartbeat-database",lS=1,Ns="firebase-heartbeat-store";let dc=null;function qg(){return dc||(dc=$g(oS,lS,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Ns)}catch(n){console.warn(n)}}}}).catch(r=>{throw Zn.create("idb-open",{originalErrorMessage:r.message})})),dc}async function aS(r){try{const n=(await qg()).transaction(Ns),s=await n.objectStore(Ns).get(Kg(r));return await n.done,s}catch(e){if(e instanceof ln)In.warn(e.message);else{const n=Zn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});In.warn(n.message)}}}async function mm(r,e){try{const s=(await qg()).transaction(Ns,"readwrite");await s.objectStore(Ns).put(e,Kg(r)),await s.done}catch(n){if(n instanceof ln)In.warn(n.message);else{const s=Zn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});In.warn(s.message)}}}function Kg(r){return`${r.name}!${r.options.appId}`}/**
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
 */const uS=1024,cS=30*24*60*60*1e3;class dS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fS(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=gm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(d=>d.date===u)?void 0:(this._heartbeatsCache.heartbeats.push({date:u,agent:l}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(d=>{const f=new Date(d.date).valueOf();return Date.now()-f<=cS}),this._storage.overwrite(this._heartbeatsCache))}catch(s){In.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=gm(),{heartbeatsToSend:s,unsentEntries:l}=hS(this._heartbeatsCache.heartbeats),u=cl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return In.warn(n),""}}}function gm(){return new Date().toISOString().substring(0,10)}function hS(r,e=uS){const n=[];let s=r.slice();for(const l of r){const u=n.find(d=>d.agent===l.agent);if(u){if(u.dates.push(l.date),_m(n)>e){u.dates.pop();break}}else if(n.push({agent:l.agent,dates:[l.date]}),_m(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class fS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zg()?Wg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await aS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return mm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return mm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...e.heartbeats]})}else return}}function _m(r){return cl(JSON.stringify({version:2,heartbeats:r})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pS(r){on(new Kt("platform-logger",e=>new RE(e),"PRIVATE")),on(new Kt("heartbeat",e=>new dS(e),"PRIVATE")),bt(Rc,fm,r),bt(Rc,fm,"esm2017"),bt("fire-js","")}pS("");var ym={};const vm="@firebase/database",wm="1.0.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yg="";function mS(r){Yg=r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ke(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ks(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return an(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg=function(r){try{if(typeof window<"u"&&typeof window[r]<"u"){const e=window[r];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new gS(e)}}catch{}return new _S},Sr=Qg("localStorage"),yS=Qg("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=new Fl("@firebase/database"),vS=function(){let r=1;return function(){return r++}}(),Xg=function(r){const e=iE(r),n=new eE;n.update(e);const s=n.digest();return Jc.encodeByteArray(s)},Fs=function(...r){let e="";for(let n=0;n<r.length;n++){const s=r[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Fs.apply(null,s):typeof s=="object"?e+=Ke(s):e+=s,e+=" "}return e};let vs=null,Em=!0;const wS=function(r,e){D(!e,"Can't turn on custom loggers persistently."),ci.logLevel=_e.VERBOSE,vs=ci.log.bind(ci)},Je=function(...r){if(Em===!0&&(Em=!1,vs===null&&yS.get("logging_enabled")===!0&&wS()),vs){const e=Fs.apply(null,r);vs(e)}},Us=function(r){return function(...e){Je(r,...e)}},Ac=function(...r){const e="FIREBASE INTERNAL ERROR: "+Fs(...r);ci.error(e)},Cn=function(...r){const e=`FIREBASE FATAL ERROR: ${Fs(...r)}`;throw ci.error(e),new Error(e)},lt=function(...r){const e="FIREBASE WARNING: "+Fs(...r);ci.warn(e)},ES=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&lt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},rd=function(r){return typeof r=="number"&&(r!==r||r===Number.POSITIVE_INFINITY||r===Number.NEGATIVE_INFINITY)},SS=function(r){if(document.readyState==="complete")r();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,r())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},_i="[MIN_NAME]",Cr="[MAX_NAME]",Dr=function(r,e){if(r===e)return 0;if(r===_i||e===Cr)return-1;if(e===_i||r===Cr)return 1;{const n=Sm(r),s=Sm(e);return n!==null?s!==null?n-s===0?r.length-e.length:n-s:-1:s!==null?1:r<e?-1:1}},IS=function(r,e){return r===e?0:r<e?-1:1},ms=function(r,e){if(e&&r in e)return e[r];throw new Error("Missing required key ("+r+") in object: "+Ke(e))},id=function(r){if(typeof r!="object"||r===null)return Ke(r);const e=[];for(const s in r)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ke(e[s]),n+=":",n+=id(r[e[s]]);return n+="}",n},Jg=function(r,e){const n=r.length;if(n<=e)return[r];const s=[];for(let l=0;l<n;l+=e)l+e>n?s.push(r.substring(l,n)):s.push(r.substring(l,l+e));return s};function Ze(r,e){for(const n in r)r.hasOwnProperty(n)&&e(n,r[n])}const Zg=function(r){D(!rd(r),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let l,u,d,f,p;r===0?(u=0,d=0,l=1/r===-1/0?1:0):(l=r<0,r=Math.abs(r),r>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(r)/Math.LN2),s),u=f+s,d=Math.round(r*Math.pow(2,n-f)-Math.pow(2,n))):(u=0,d=Math.round(r/Math.pow(2,1-s-n))));const g=[];for(p=n;p;p-=1)g.push(d%2?1:0),d=Math.floor(d/2);for(p=e;p;p-=1)g.push(u%2?1:0),u=Math.floor(u/2);g.push(l?1:0),g.reverse();const v=g.join("");let y="";for(p=0;p<64;p+=8){let E=parseInt(v.substr(p,8),2).toString(16);E.length===1&&(E="0"+E),y=y+E}return y.toLowerCase()},CS=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},TS=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function kS(r,e){let n="Unknown Error";r==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":r==="permission_denied"?n="Client doesn't have permission to access the desired data.":r==="unavailable"&&(n="The service is unavailable");const s=new Error(r+" at "+e._path.toString()+": "+n);return s.code=r.toUpperCase(),s}const RS=new RegExp("^-?(0*)\\d{1,10}$"),NS=-2147483648,PS=2147483647,Sm=function(r){if(RS.test(r)){const e=Number(r);if(e>=NS&&e<=PS)return e}return null},Ti=function(r){try{r()}catch(e){setTimeout(()=>{const n=e.stack||"";throw lt("Exception was thrown by user callback.",n),e},Math.floor(0))}},AS=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ws=function(r,e){const n=setTimeout(r,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class OS{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){lt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(l=>this.auth_=l)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Je("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',lt(e)}}class sl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}sl.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd="5",e_="v",t_="s",n_="r",r_="f",i_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,s_="ls",o_="p",Oc="ac",l_="websocket",a_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e,n,s,l,u=!1,d="",f=!1,p=!1){this.secure=n,this.namespace=s,this.webSocketOnly=l,this.nodeAdmin=u,this.persistenceKey=d,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=p,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Sr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Sr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function DS(r){return r.host!==r.internalHost||r.isCustomHost()||r.includeNamespaceInQueryParams}function c_(r,e,n){D(typeof e=="string","typeof type must == string"),D(typeof n=="object","typeof params must == object");let s;if(e===l_)s=(r.secure?"wss://":"ws://")+r.internalHost+"/.ws?";else if(e===a_)s=(r.secure?"https://":"http://")+r.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);DS(r)&&(n.ns=r.namespace);const l=[];return Ze(n,(u,d)=>{l.push(u+"="+d)}),s+l.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(){this.counters_={}}incrementCounter(e,n=1){an(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return U0(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc={},fc={};function od(r){const e=r.toString();return hc[e]||(hc[e]=new LS),hc[e]}function MS(r,e){const n=r.toString();return fc[n]||(fc[n]=e()),fc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let l=0;l<s.length;++l)s[l]&&Ti(()=>{this.onMessage_(s[l])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im="start",FS="close",US="pLPCommand",jS="pRTLPCB",d_="id",h_="pw",f_="ser",zS="cb",WS="seg",BS="ts",VS="d",HS="dframe",p_=1870,m_=30,$S=p_-m_,GS=25e3,qS=3e4;class li{constructor(e,n,s,l,u,d,f){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.transportSessionId=d,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Us(e),this.stats_=od(n),this.urlFn=p=>(this.appCheckToken&&(p[Oc]=this.appCheckToken),c_(n,a_,p))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new bS(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(qS)),SS(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ld((...u)=>{const[d,f,p,g,v]=u;if(this.incrementIncomingBytes_(u),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,d===Im)this.id=f,this.password=p;else if(d===FS)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+d)},(...u)=>{const[d,f]=u;this.incrementIncomingBytes_(u),this.myPacketOrderer.handleResponse(d,f)},()=>{this.onClosed_()},this.urlFn);const s={};s[Im]="t",s[f_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[zS]=this.scriptTagHolder.uniqueCallbackIdentifier),s[e_]=sd,this.transportSessionId&&(s[t_]=this.transportSessionId),this.lastSessionId&&(s[s_]=this.lastSessionId),this.applicationId&&(s[o_]=this.applicationId),this.appCheckToken&&(s[Oc]=this.appCheckToken),typeof location<"u"&&location.hostname&&i_.test(location.hostname)&&(s[n_]=r_);const l=this.urlFn(s);this.log_("Connecting via long-poll to "+l),this.scriptTagHolder.addTag(l,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){li.forceAllow_=!0}static forceDisallow(){li.forceDisallow_=!0}static isAvailable(){return li.forceAllow_?!0:!li.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!CS()&&!TS()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=xg(n),l=Jg(s,$S);for(let u=0;u<l.length;u++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,l.length,l[u]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[HS]="t",s[d_]=e,s[h_]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ke(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ld{constructor(e,n,s,l){this.onDisconnect=s,this.urlFn=l,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=vS(),window[US+this.uniqueCallbackIdentifier]=e,window[jS+this.uniqueCallbackIdentifier]=n,this.myIFrame=ld.createIFrame_();let u="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(u='<script>document.domain="'+document.domain+'";<\/script>');const d="<html><body>"+u+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(d),this.myIFrame.doc.close()}catch(f){Je("frame writing exception"),f.stack&&Je(f.stack),Je(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Je("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[d_]=this.myID,e[h_]=this.myPW,e[f_]=this.currentSerial;let n=this.urlFn(e),s="",l=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+m_+s.length<=p_;){const d=this.pendingSegs.shift();s=s+"&"+WS+l+"="+d.seg+"&"+BS+l+"="+d.ts+"&"+VS+l+"="+d.d,l++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},l=setTimeout(s,Math.floor(GS)),u=()=>{clearTimeout(l),s()};this.addTag(e,u)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const l=s.readyState;(!l||l==="loaded"||l==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Je("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KS=16384,YS=45e3;let pl=null;typeof MozWebSocket<"u"?pl=MozWebSocket:typeof WebSocket<"u"&&(pl=WebSocket);class $t{constructor(e,n,s,l,u,d,f){this.connId=e,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Us(this.connId),this.stats_=od(n),this.connURL=$t.connectionURL_(n,d,f,l,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,l,u){const d={};return d[e_]=sd,typeof location<"u"&&location.hostname&&i_.test(location.hostname)&&(d[n_]=r_),n&&(d[t_]=n),s&&(d[s_]=s),l&&(d[Oc]=l),u&&(d[o_]=u),c_(e,l_,d)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Sr.set("previous_websocket_failure",!0);try{let s;jg(),this.mySock=new pl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_()}}start(){}static forceDisallow(){$t.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&pl!==null&&!$t.forceDisallow_}static previouslyFailed(){return Sr.isInMemoryStorage||Sr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Sr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ks(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(D(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Jg(n,KS);s.length>1&&this.sendString_(String(s.length));for(let l=0;l<s.length;l++)this.sendString_(s[l])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(YS))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}$t.responsesRequiredToBeHealthy=2;$t.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{static get ALL_TRANSPORTS(){return[li,$t]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=$t&&$t.isAvailable();let s=n&&!$t.previouslyFailed();if(e.webSocketOnly&&(n||lt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[$t];else{const l=this.transports_=[];for(const u of Ps.ALL_TRANSPORTS)u&&u.isAvailable()&&l.push(u);Ps.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ps.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS=6e4,XS=5e3,JS=10*1024,ZS=100*1024,pc="t",Cm="d",eI="s",Tm="r",tI="e",km="o",Rm="a",Nm="n",Pm="p",nI="h";class rI{constructor(e,n,s,l,u,d,f,p,g,v){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=l,this.authToken_=u,this.onMessage_=d,this.onReady_=f,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=v,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Us("c:"+this.id+":"),this.transportManager_=new Ps(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const l=e.healthyTimeout||0;l>0&&(this.healthyTimeout_=ws(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ZS?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>JS?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(l)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(pc in e){const n=e[pc];n===Rm?this.upgradeIfSecondaryHealthy_():n===Tm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===km&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ms("t",e),s=ms("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Pm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Rm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Nm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ms("t",e),s=ms("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ms(pc,e);if(Cm in e){const s=e[Cm];if(n===nI){const l=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(l.h=this.repoInfo_.host),this.onHandshake_(l)}else if(n===Nm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let l=0;l<this.pendingDataMessages.length;++l)this.onDataMessage_(this.pendingDataMessages[l]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===eI?this.onConnectionShutdown_(s):n===Tm?this.onReset_(s):n===tI?Ac("Server Error: "+s):n===km?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ac("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,l=e.h;this.sessionId=e.s,this.repoInfo_.host=l,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),sd!==s&&lt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),ws(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(QS))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ws(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(XS))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Pm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Sr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{put(e,n,s,l){}merge(e,n,s,l){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(e){this.allowedEvents_=e,this.listeners_={},D(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let l=0;l<s.length;l++)s[l].callback.apply(s[l].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const l=this.getInitialEvent(e);l&&n.apply(s,l)}off(e,n,s){this.validateEventType_(e);const l=this.listeners_[e]||[];for(let u=0;u<l.length;u++)if(l[u].callback===n&&(!s||s===l[u].context)){l.splice(u,1);return}}validateEventType_(e){D(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml extends __{static getInstance(){return new ml}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ed()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return D(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am=32,Om=768;class ve{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let l=0;l<this.pieces_.length;l++)this.pieces_[l].length>0&&(this.pieces_[s]=this.pieces_[l],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function de(){return new ve("")}function te(r){return r.pieceNum_>=r.pieces_.length?null:r.pieces_[r.pieceNum_]}function nr(r){return r.pieces_.length-r.pieceNum_}function Ce(r){let e=r.pieceNum_;return e<r.pieces_.length&&e++,new ve(r.pieces_,e)}function ad(r){return r.pieceNum_<r.pieces_.length?r.pieces_[r.pieces_.length-1]:null}function iI(r){let e="";for(let n=r.pieceNum_;n<r.pieces_.length;n++)r.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(r.pieces_[n])));return e||"/"}function As(r,e=0){return r.pieces_.slice(r.pieceNum_+e)}function y_(r){if(r.pieceNum_>=r.pieces_.length)return null;const e=[];for(let n=r.pieceNum_;n<r.pieces_.length-1;n++)e.push(r.pieces_[n]);return new ve(e,0)}function De(r,e){const n=[];for(let s=r.pieceNum_;s<r.pieces_.length;s++)n.push(r.pieces_[s]);if(e instanceof ve)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let l=0;l<s.length;l++)s[l].length>0&&n.push(s[l])}return new ve(n,0)}function ie(r){return r.pieceNum_>=r.pieces_.length}function gt(r,e){const n=te(r),s=te(e);if(n===null)return e;if(n===s)return gt(Ce(r),Ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+r+")")}function sI(r,e){const n=As(r,0),s=As(e,0);for(let l=0;l<n.length&&l<s.length;l++){const u=Dr(n[l],s[l]);if(u!==0)return u}return n.length===s.length?0:n.length<s.length?-1:1}function ud(r,e){if(nr(r)!==nr(e))return!1;for(let n=r.pieceNum_,s=e.pieceNum_;n<=r.pieces_.length;n++,s++)if(r.pieces_[n]!==e.pieces_[s])return!1;return!0}function Mt(r,e){let n=r.pieceNum_,s=e.pieceNum_;if(nr(r)>nr(e))return!1;for(;n<r.pieces_.length;){if(r.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class oI{constructor(e,n){this.errorPrefix_=n,this.parts_=As(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=bl(this.parts_[s]);v_(this)}}function lI(r,e){r.parts_.length>0&&(r.byteLength_+=1),r.parts_.push(e),r.byteLength_+=bl(e),v_(r)}function aI(r){const e=r.parts_.pop();r.byteLength_-=bl(e),r.parts_.length>0&&(r.byteLength_-=1)}function v_(r){if(r.byteLength_>Om)throw new Error(r.errorPrefix_+"has a key path longer than "+Om+" bytes ("+r.byteLength_+").");if(r.parts_.length>Am)throw new Error(r.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Am+") or object contains a cycle "+Er(r))}function Er(r){return r.parts_.length===0?"":"in property '"+r.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd extends __{static getInstance(){return new cd}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return D(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs=1e3,uI=60*5*1e3,xm=30*1e3,cI=1.3,dI=3e4,hI="server_kill",Dm=3;class Sn extends g_{constructor(e,n,s,l,u,d,f,p){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=l,this.onServerInfoUpdate_=u,this.authTokenProvider_=d,this.appCheckTokenProvider_=f,this.authOverride_=p,this.id=Sn.nextPersistentConnectionId_++,this.log_=Us("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=gs,this.maxReconnectDelay_=uI,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p&&!jg())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");cd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ml.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const l=++this.requestNumber_,u={r:l,a:e,b:n};this.log_(Ke(u)),D(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(u),s&&(this.requestCBHash_[l]=s)}get(e){this.initConnection_();const n=new bs,l={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:d=>{const f=d.d;d.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(l),this.outstandingGetCount_++;const u=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(u),n.promise}listen(e,n,s,l){this.initConnection_();const u=e._queryIdentifier,d=e._path.toString();this.log_("Listen called for "+d+" "+u),this.listens.has(d)||this.listens.set(d,new Map),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),D(!this.listens.get(d).has(u),"listen() called twice for same path/queryId.");const f={onComplete:l,hashFn:n,query:e,tag:s};this.listens.get(d).set(u,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),l=n._queryIdentifier;this.log_("Listen on "+s+" for "+l);const u={p:s},d="q";e.tag&&(u.q=n._queryObject,u.t=e.tag),u.h=e.hashFn(),this.sendRequest(d,u,f=>{const p=f.d,g=f.s;Sn.warnOnListenWarnings_(p,n),(this.listens.get(s)&&this.listens.get(s).get(l))===e&&(this.log_("listen response",f),g!=="ok"&&this.removeListen_(s,l),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&an(e,"w")){const s=gi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const l='".indexOn": "'+n._queryParams.getIndex().toString()+'"',u=n._path.toString();lt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${l} at ${u} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Z0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=xm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=J0(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,l=>{const u=l.s,d=l.d||"error";this.authToken_===e&&(u==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(u,d))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),l=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+l),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,l)&&this.connected_&&this.sendUnlisten_(s,l,e._queryObject,n)}sendUnlisten_(e,n,s,l){this.log_("Unlisten on "+e+" for "+n);const u={p:e},d="n";l&&(u.q=s,u.t=l),this.sendRequest(d,u)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,l){const u={p:n,d:s};this.log_("onDisconnect "+e,u),this.sendRequest(e,u,d=>{l&&setTimeout(()=>{l(d.s,d.d)},Math.floor(0))})}put(e,n,s,l){this.putInternal("p",e,n,s,l)}merge(e,n,s,l){this.putInternal("m",e,n,s,l)}putInternal(e,n,s,l,u){this.initConnection_();const d={p:n,d:s};u!==void 0&&(d.h=u),this.outstandingPuts_.push({action:e,request:d,onComplete:l}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,l=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,u=>{this.log_(n+" response",u),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),l&&l(u.s,u.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const u=s.d;this.log_("reportStats","Error sending stats: "+u)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ke(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ac("Unrecognized action received from server: "+Ke(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){D(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=gs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=gs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>dI&&(this.reconnectDelay_=gs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*cI)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),l=this.id+":"+Sn.nextConnectionId_++,u=this.lastSessionId;let d=!1,f=null;const p=function(){f?f.close():(d=!0,s())},g=function(y){D(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(y)};this.realtime_={close:p,sendRequest:g};const v=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[y,E]=await Promise.all([this.authTokenProvider_.getToken(v),this.appCheckTokenProvider_.getToken(v)]);d?Je("getToken() completed but was canceled"):(Je("getToken() completed. Creating connection."),this.authToken_=y&&y.accessToken,this.appCheckToken_=E&&E.token,f=new rI(l,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,R=>{lt(R+" ("+this.repoInfo_.toString()+")"),this.interrupt(hI)},u))}catch(y){this.log_("Failed to get token: "+y),d||(this.repoInfo_.nodeAdmin&&lt(y),p())}}}interrupt(e){Je("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Je("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Cc(this.interruptReasons_)&&(this.reconnectDelay_=gs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(u=>id(u)).join("$"):s="default";const l=this.removeListen_(e,s);l&&l.onComplete&&l.onComplete("permission_denied")}removeListen_(e,n){const s=new ve(e).toString();let l;if(this.listens.has(s)){const u=this.listens.get(s);l=u.get(n),u.delete(n),u.size===0&&this.listens.delete(s)}else l=void 0;return l}onAuthRevoked_(e,n){Je("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Dm&&(this.reconnectDelay_=xm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Je("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Dm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Yg.replace(/\./g,"-")]=1,ed()?e["framework.cordova"]=1:Ug()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ml.getInstance().currentlyOnline();return Cc(this.interruptReasons_)&&e}}Sn.nextPersistentConnectionId_=0;Sn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ul{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ne(_i,e),l=new ne(_i,n);return this.compare(s,l)!==0}minPost(){return ne.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nl;class w_ extends Ul{static get __EMPTY_NODE(){return nl}static set __EMPTY_NODE(e){nl=e}compare(e,n){return Dr(e.name,n.name)}isDefinedOn(e){throw Si("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ne.MIN}maxPost(){return new ne(Cr,nl)}makePost(e,n){return D(typeof e=="string","KeyIndex indexValue must always be a string."),new ne(e,nl)}toString(){return".key"}}const di=new w_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,n,s,l,u=null){this.isReverse_=l,this.resultGenerator_=u,this.nodeStack_=[];let d=1;for(;!e.isEmpty();)if(e=e,d=n?s(e.key,n):1,l&&(d*=-1),d<0)this.isReverse_?e=e.left:e=e.right;else if(d===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ge{constructor(e,n,s,l,u){this.key=e,this.value=n,this.color=s??Ge.RED,this.left=l??_t.EMPTY_NODE,this.right=u??_t.EMPTY_NODE}copy(e,n,s,l,u){return new Ge(e??this.key,n??this.value,s??this.color,l??this.left,u??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let l=this;const u=s(e,l.key);return u<0?l=l.copy(null,null,null,l.left.insert(e,n,s),null):u===0?l=l.copy(null,n,null,null,null):l=l.copy(null,null,null,null,l.right.insert(e,n,s)),l.fixUp_()}removeMin_(){if(this.left.isEmpty())return _t.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,l;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return _t.EMPTY_NODE;l=s.right.min_(),s=s.copy(l.key,l.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ge.RED=!0;Ge.BLACK=!1;class fI{copy(e,n,s,l,u){return this}insert(e,n,s){return new Ge(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class _t{constructor(e,n=_t.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new _t(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ge.BLACK,null,null))}remove(e){return new _t(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ge.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,l=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return l?l.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(l=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new rl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new rl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new rl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new rl(this.root_,null,this.comparator_,!0,e)}}_t.EMPTY_NODE=new fI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pI(r,e){return Dr(r.name,e.name)}function dd(r,e){return Dr(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xc;function mI(r){xc=r}const E_=function(r){return typeof r=="number"?"number:"+Zg(r):"string:"+r},S_=function(r){if(r.isLeafNode()){const e=r.val();D(typeof e=="string"||typeof e=="number"||typeof e=="object"&&an(e,".sv"),"Priority must be a string or number.")}else D(r===xc||r.isEmpty(),"priority of unexpected type.");D(r===xc||r.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lm;class $e{static set __childrenNodeConstructor(e){Lm=e}static get __childrenNodeConstructor(){return Lm}constructor(e,n=$e.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,D(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),S_(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new $e(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:$e.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ie(e)?this:te(e)===".priority"?this.priorityNode_:$e.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:$e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=te(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(D(s!==".priority"||nr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,$e.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ce(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+E_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Zg(this.value_):e+=this.value_,this.lazyHash_=Xg(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===$e.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof $e.__childrenNodeConstructor?-1:(D(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,l=$e.VALUE_TYPE_ORDER.indexOf(n),u=$e.VALUE_TYPE_ORDER.indexOf(s);return D(l>=0,"Unknown leaf type: "+n),D(u>=0,"Unknown leaf type: "+s),l===u?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:u-l}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}$e.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let I_,C_;function gI(r){I_=r}function _I(r){C_=r}class yI extends Ul{compare(e,n){const s=e.node.getPriority(),l=n.node.getPriority(),u=s.compareTo(l);return u===0?Dr(e.name,n.name):u}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ne.MIN}maxPost(){return new ne(Cr,new $e("[PRIORITY-POST]",C_))}makePost(e,n){const s=I_(e);return new ne(n,new $e("[PRIORITY-POST]",s))}toString(){return".priority"}}const Le=new yI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI=Math.log(2);class wI{constructor(e){const n=u=>parseInt(Math.log(u)/vI,10),s=u=>parseInt(Array(u+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const l=s(this.count);this.bits_=e+1&l}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const gl=function(r,e,n,s){r.sort(e);const l=function(p,g){const v=g-p;let y,E;if(v===0)return null;if(v===1)return y=r[p],E=n?n(y):y,new Ge(E,y.node,Ge.BLACK,null,null);{const R=parseInt(v/2,10)+p,L=l(p,R),M=l(R+1,g);return y=r[R],E=n?n(y):y,new Ge(E,y.node,Ge.BLACK,L,M)}},u=function(p){let g=null,v=null,y=r.length;const E=function(L,M){const V=y-L,pe=y;y-=L;const me=l(V+1,pe),ge=r[V],le=n?n(ge):ge;R(new Ge(le,ge.node,M,null,me))},R=function(L){g?(g.left=L,g=L):(v=L,g=L)};for(let L=0;L<p.count;++L){const M=p.nextBitIsOne(),V=Math.pow(2,p.count-(L+1));M?E(V,Ge.BLACK):(E(V,Ge.BLACK),E(V,Ge.RED))}return v},d=new wI(r.length),f=u(d);return new _t(s||e,f)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mc;const oi={};class yn{static get Default(){return D(oi&&Le,"ChildrenNode.ts has not been loaded"),mc=mc||new yn({".priority":oi},{".priority":Le}),mc}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=gi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof _t?n:null}hasIndex(e){return an(this.indexSet_,e.toString())}addIndex(e,n){D(e!==di,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let l=!1;const u=n.getIterator(ne.Wrap);let d=u.getNext();for(;d;)l=l||e.isDefinedOn(d.node),s.push(d),d=u.getNext();let f;l?f=gl(s,e.getCompare()):f=oi;const p=e.toString(),g=Object.assign({},this.indexSet_);g[p]=e;const v=Object.assign({},this.indexes_);return v[p]=f,new yn(v,g)}addToIndexes(e,n){const s=hl(this.indexes_,(l,u)=>{const d=gi(this.indexSet_,u);if(D(d,"Missing index implementation for "+u),l===oi)if(d.isDefinedOn(e.node)){const f=[],p=n.getIterator(ne.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&f.push(g),g=p.getNext();return f.push(e),gl(f,d.getCompare())}else return oi;else{const f=n.get(e.name);let p=l;return f&&(p=p.remove(new ne(e.name,f))),p.insert(e,e.node)}});return new yn(s,this.indexSet_)}removeFromIndexes(e,n){const s=hl(this.indexes_,l=>{if(l===oi)return l;{const u=n.get(e.name);return u?l.remove(new ne(e.name,u)):l}});return new yn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _s;class K{static get EMPTY_NODE(){return _s||(_s=new K(new _t(dd),null,yn.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&S_(this.priorityNode_),this.children_.isEmpty()&&D(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||_s}updatePriority(e){return this.children_.isEmpty()?this:new K(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?_s:n}}getChild(e){const n=te(e);return n===null?this:this.getImmediateChild(n).getChild(Ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(D(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ne(e,n);let l,u;n.isEmpty()?(l=this.children_.remove(e),u=this.indexMap_.removeFromIndexes(s,this.children_)):(l=this.children_.insert(e,n),u=this.indexMap_.addToIndexes(s,this.children_));const d=l.isEmpty()?_s:this.priorityNode_;return new K(l,d,u)}}updateChild(e,n){const s=te(e);if(s===null)return n;{D(te(e)!==".priority"||nr(e)===1,".priority must be the last token in a path");const l=this.getImmediateChild(s).updateChild(Ce(e),n);return this.updateImmediateChild(s,l)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,l=0,u=!0;if(this.forEachChild(Le,(d,f)=>{n[d]=f.val(e),s++,u&&K.INTEGER_REGEXP_.test(d)?l=Math.max(l,Number(d)):u=!1}),!e&&u&&l<2*s){const d=[];for(const f in n)d[f]=n[f];return d}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+E_(this.getPriority().val())+":"),this.forEachChild(Le,(n,s)=>{const l=s.hash();l!==""&&(e+=":"+n+":"+l)}),this.lazyHash_=e===""?"":Xg(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const l=this.resolveIndex_(s);if(l){const u=l.getPredecessorKey(new ne(e,n));return u?u.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ne(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ne(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(l=>n(l.name,l.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,l=>l);{const l=this.children_.getIteratorFrom(e.name,ne.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)<0;)l.getNext(),u=l.peek();return l}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,l=>l);{const l=this.children_.getReverseIteratorFrom(e.name,ne.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)>0;)l.getNext(),u=l.peek();return l}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===js?-1:0}withIndex(e){if(e===di||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new K(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===di||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Le),l=n.getIterator(Le);let u=s.getNext(),d=l.getNext();for(;u&&d;){if(u.name!==d.name||!u.node.equals(d.node))return!1;u=s.getNext(),d=l.getNext()}return u===null&&d===null}else return!1;else return!1}}resolveIndex_(e){return e===di?null:this.indexMap_.get(e.toString())}}K.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class EI extends K{constructor(){super(new _t(dd),K.EMPTY_NODE,yn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return K.EMPTY_NODE}isEmpty(){return!1}}const js=new EI;Object.defineProperties(ne,{MIN:{value:new ne(_i,K.EMPTY_NODE)},MAX:{value:new ne(Cr,js)}});w_.__EMPTY_NODE=K.EMPTY_NODE;$e.__childrenNodeConstructor=K;mI(js);_I(js);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI=!0;function qe(r,e=null){if(r===null)return K.EMPTY_NODE;if(typeof r=="object"&&".priority"in r&&(e=r[".priority"]),D(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof r=="object"&&".value"in r&&r[".value"]!==null&&(r=r[".value"]),typeof r!="object"||".sv"in r){const n=r;return new $e(n,qe(e))}if(!(r instanceof Array)&&SI){const n=[];let s=!1;if(Ze(r,(d,f)=>{if(d.substring(0,1)!=="."){const p=qe(f);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),n.push(new ne(d,p)))}}),n.length===0)return K.EMPTY_NODE;const u=gl(n,pI,d=>d.name,dd);if(s){const d=gl(n,Le.getCompare());return new K(u,qe(e),new yn({".priority":d},{".priority":Le}))}else return new K(u,qe(e),yn.Default)}else{let n=K.EMPTY_NODE;return Ze(r,(s,l)=>{if(an(r,s)&&s.substring(0,1)!=="."){const u=qe(l);(u.isLeafNode()||!u.isEmpty())&&(n=n.updateImmediateChild(s,u))}}),n.updatePriority(qe(e))}}gI(qe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II extends Ul{constructor(e){super(),this.indexPath_=e,D(!ie(e)&&te(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),l=this.extractChild(n.node),u=s.compareTo(l);return u===0?Dr(e.name,n.name):u}makePost(e,n){const s=qe(e),l=K.EMPTY_NODE.updateChild(this.indexPath_,s);return new ne(n,l)}maxPost(){const e=K.EMPTY_NODE.updateChild(this.indexPath_,js);return new ne(Cr,e)}toString(){return As(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI extends Ul{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Dr(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ne.MIN}maxPost(){return ne.MAX}makePost(e,n){const s=qe(e);return new ne(n,s)}toString(){return".value"}}const TI=new CI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T_(r){return{type:"value",snapshotNode:r}}function yi(r,e){return{type:"child_added",snapshotNode:e,childName:r}}function Os(r,e){return{type:"child_removed",snapshotNode:e,childName:r}}function xs(r,e,n){return{type:"child_changed",snapshotNode:e,childName:r,oldSnap:n}}function kI(r,e){return{type:"child_moved",snapshotNode:e,childName:r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e){this.index_=e}updateChild(e,n,s,l,u,d){D(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(n);return f.getChild(l).equals(s.getChild(l))&&f.isEmpty()===s.isEmpty()||(d!=null&&(s.isEmpty()?e.hasChild(n)?d.trackChildChange(Os(n,f)):D(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?d.trackChildChange(yi(n,s)):d.trackChildChange(xs(n,s,f))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Le,(l,u)=>{n.hasChild(l)||s.trackChildChange(Os(l,u))}),n.isLeafNode()||n.forEachChild(Le,(l,u)=>{if(e.hasChild(l)){const d=e.getImmediateChild(l);d.equals(u)||s.trackChildChange(xs(l,u,d))}else s.trackChildChange(yi(l,u))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?K.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e){this.indexedFilter_=new hd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ds.getStartPost_(e),this.endPost_=Ds.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,l,u,d){return this.matches(new ne(n,s))||(s=K.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,l,u,d)}updateFullNode(e,n,s){n.isLeafNode()&&(n=K.EMPTY_NODE);let l=n.withIndex(this.index_);l=l.updatePriority(K.EMPTY_NODE);const u=this;return n.forEachChild(Le,(d,f)=>{u.matches(new ne(d,f))||(l=l.updateImmediateChild(d,K.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Ds(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,l,u,d){return this.rangedFilter_.matches(new ne(n,s))||(s=K.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,l,u,d):this.fullLimitUpdateChild_(e,n,s,u,d)}updateFullNode(e,n,s){let l;if(n.isLeafNode()||n.isEmpty())l=K.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){l=K.EMPTY_NODE.withIndex(this.index_);let u;this.reverse_?u=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):u=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let d=0;for(;u.hasNext()&&d<this.limit_;){const f=u.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))l=l.updateImmediateChild(f.name,f.node),d++;else break;else continue}}else{l=n.withIndex(this.index_),l=l.updatePriority(K.EMPTY_NODE);let u;this.reverse_?u=l.getReverseIterator(this.index_):u=l.getIterator(this.index_);let d=0;for(;u.hasNext();){const f=u.getNext();d<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?d++:l=l.updateImmediateChild(f.name,K.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,l,u){let d;if(this.reverse_){const y=this.index_.getCompare();d=(E,R)=>y(R,E)}else d=this.index_.getCompare();const f=e;D(f.numChildren()===this.limit_,"");const p=new ne(n,s),g=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),v=this.rangedFilter_.matches(p);if(f.hasChild(n)){const y=f.getImmediateChild(n);let E=l.getChildAfterChild(this.index_,g,this.reverse_);for(;E!=null&&(E.name===n||f.hasChild(E.name));)E=l.getChildAfterChild(this.index_,E,this.reverse_);const R=E==null?1:d(E,p);if(v&&!s.isEmpty()&&R>=0)return u!=null&&u.trackChildChange(xs(n,s,y)),f.updateImmediateChild(n,s);{u!=null&&u.trackChildChange(Os(n,y));const M=f.updateImmediateChild(n,K.EMPTY_NODE);return E!=null&&this.rangedFilter_.matches(E)?(u!=null&&u.trackChildChange(yi(E.name,E.node)),M.updateImmediateChild(E.name,E.node)):M}}else return s.isEmpty()?e:v&&d(g,p)>=0?(u!=null&&(u.trackChildChange(Os(g.name,g.node)),u.trackChildChange(yi(n,s))),f.updateImmediateChild(n,s).updateImmediateChild(g.name,K.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Le}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return D(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return D(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:_i}hasEnd(){return this.endSet_}getIndexEndValue(){return D(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return D(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Cr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return D(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Le}copy(){const e=new fd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function NI(r){return r.loadsAllData()?new hd(r.getIndex()):r.hasLimit()?new RI(r):new Ds(r)}function Mm(r){const e={};if(r.isDefault())return e;let n;if(r.index_===Le?n="$priority":r.index_===TI?n="$value":r.index_===di?n="$key":(D(r.index_ instanceof II,"Unrecognized index type!"),n=r.index_.toString()),e.orderBy=Ke(n),r.startSet_){const s=r.startAfterSet_?"startAfter":"startAt";e[s]=Ke(r.indexStartValue_),r.startNameSet_&&(e[s]+=","+Ke(r.indexStartName_))}if(r.endSet_){const s=r.endBeforeSet_?"endBefore":"endAt";e[s]=Ke(r.indexEndValue_),r.endNameSet_&&(e[s]+=","+Ke(r.indexEndName_))}return r.limitSet_&&(r.isViewFromLeft()?e.limitToFirst=r.limit_:e.limitToLast=r.limit_),e}function bm(r){const e={};if(r.startSet_&&(e.sp=r.indexStartValue_,r.startNameSet_&&(e.sn=r.indexStartName_),e.sin=!r.startAfterSet_),r.endSet_&&(e.ep=r.indexEndValue_,r.endNameSet_&&(e.en=r.indexEndName_),e.ein=!r.endBeforeSet_),r.limitSet_){e.l=r.limit_;let n=r.viewFrom_;n===""&&(r.isViewFromLeft()?n="l":n="r"),e.vf=n}return r.index_!==Le&&(e.i=r.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l extends g_{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(D(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,l){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=l,this.log_=Us("p:rest:"),this.listens_={}}listen(e,n,s,l){const u=e._path.toString();this.log_("Listen called for "+u+" "+e._queryIdentifier);const d=_l.getListenId_(e,s),f={};this.listens_[d]=f;const p=Mm(e._queryParams);this.restRequest_(u+".json",p,(g,v)=>{let y=v;if(g===404&&(y=null,g=null),g===null&&this.onDataUpdate_(u,y,!1,s),gi(this.listens_,d)===f){let E;g?g===401?E="permission_denied":E="rest_error:"+g:E="ok",l(E,null)}})}unlisten(e,n){const s=_l.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Mm(e._queryParams),s=e._path.toString(),l=new bs;return this.restRequest_(s+".json",n,(u,d)=>{let f=d;u===404&&(f=null,u=null),u===null?(this.onDataUpdate_(s,f,!1,null),l.resolve(f)):l.reject(new Error(f))}),l.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([l,u])=>{l&&l.accessToken&&(n.auth=l.accessToken),u&&u.token&&(n.ac=u.token);const d=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ii(n);this.log_("Sending REST request for "+d);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(s&&f.readyState===4){this.log_("REST Response for "+d+" received. status:",f.status,"response:",f.responseText);let p=null;if(f.status>=200&&f.status<300){try{p=ks(f.responseText)}catch{lt("Failed to parse JSON response for "+d+": "+f.responseText)}s(null,p)}else f.status!==401&&f.status!==404&&lt("Got unsuccessful REST response for "+d+" Status: "+f.status),s(f.status);s=null}},f.open("GET",d,!0),f.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(){this.rootNode_=K.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(){return{value:null,children:new Map}}function k_(r,e,n){if(ie(e))r.value=n,r.children.clear();else if(r.value!==null)r.value=r.value.updateChild(e,n);else{const s=te(e);r.children.has(s)||r.children.set(s,yl());const l=r.children.get(s);e=Ce(e),k_(l,e,n)}}function Dc(r,e,n){r.value!==null?n(e,r.value):AI(r,(s,l)=>{const u=new ve(e.toString()+"/"+s);Dc(l,u,n)})}function AI(r,e){r.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ze(this.last_,(s,l)=>{n[s]=n[s]-l}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm=10*1e3,xI=30*1e3,DI=5*60*1e3;class LI{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new OI(e);const s=Fm+(xI-Fm)*Math.random();ws(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ze(e,(l,u)=>{u>0&&an(this.statsToReport_,l)&&(n[l]=u,s=!0)}),s&&this.server_.reportStats(n),ws(this.reportStats_.bind(this),Math.floor(Math.random()*2*DI))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gt;(function(r){r[r.OVERWRITE=0]="OVERWRITE",r[r.MERGE=1]="MERGE",r[r.ACK_USER_WRITE=2]="ACK_USER_WRITE",r[r.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Gt||(Gt={}));function pd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function md(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function gd(r){return{fromUser:!1,fromServer:!0,queryId:r,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Gt.ACK_USER_WRITE,this.source=pd()}operationForChild(e){if(ie(this.path)){if(this.affectedTree.value!=null)return D(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ve(e));return new vl(de(),n,this.revert)}}else return D(te(this.path)===e,"operationForChild called for unrelated child."),new vl(Ce(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,n){this.source=e,this.path=n,this.type=Gt.LISTEN_COMPLETE}operationForChild(e){return ie(this.path)?new Ls(this.source,de()):new Ls(this.source,Ce(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Gt.OVERWRITE}operationForChild(e){return ie(this.path)?new Tr(this.source,de(),this.snap.getImmediateChild(e)):new Tr(this.source,Ce(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Gt.MERGE}operationForChild(e){if(ie(this.path)){const n=this.children.subtree(new ve(e));return n.isEmpty()?null:n.value?new Tr(this.source,de(),n.value):new vi(this.source,de(),n)}else return D(te(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new vi(this.source,Ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ie(e))return this.isFullyInitialized()&&!this.filtered_;const n=te(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function bI(r,e,n,s){const l=[],u=[];return e.forEach(d=>{d.type==="child_changed"&&r.index_.indexedValueChanged(d.oldSnap,d.snapshotNode)&&u.push(kI(d.childName,d.snapshotNode))}),ys(r,l,"child_removed",e,s,n),ys(r,l,"child_added",e,s,n),ys(r,l,"child_moved",u,s,n),ys(r,l,"child_changed",e,s,n),ys(r,l,"value",e,s,n),l}function ys(r,e,n,s,l,u){const d=s.filter(f=>f.type===n);d.sort((f,p)=>UI(r,f,p)),d.forEach(f=>{const p=FI(r,f,u);l.forEach(g=>{g.respondsTo(f.type)&&e.push(g.createEvent(p,r.query_))})})}function FI(r,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,r.index_)),e}function UI(r,e,n){if(e.childName==null||n.childName==null)throw Si("Should only compare child_ events.");const s=new ne(e.childName,e.snapshotNode),l=new ne(n.childName,n.snapshotNode);return r.index_.compare(s,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(r,e){return{eventCache:r,serverCache:e}}function Es(r,e,n,s){return jl(new kr(e,n,s),r.serverCache)}function R_(r,e,n,s){return jl(r.eventCache,new kr(e,n,s))}function Lc(r){return r.eventCache.isFullyInitialized()?r.eventCache.getNode():null}function Rr(r){return r.serverCache.isFullyInitialized()?r.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gc;const jI=()=>(gc||(gc=new _t(IS)),gc);class Ie{static fromObject(e){let n=new Ie(null);return Ze(e,(s,l)=>{n=n.set(new ve(s),l)}),n}constructor(e,n=jI()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:de(),value:this.value};if(ie(e))return null;{const s=te(e),l=this.children.get(s);if(l!==null){const u=l.findRootMostMatchingPathAndValue(Ce(e),n);return u!=null?{path:De(new ve(s),u.path),value:u.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ie(e))return this;{const n=te(e),s=this.children.get(n);return s!==null?s.subtree(Ce(e)):new Ie(null)}}set(e,n){if(ie(e))return new Ie(n,this.children);{const s=te(e),u=(this.children.get(s)||new Ie(null)).set(Ce(e),n),d=this.children.insert(s,u);return new Ie(this.value,d)}}remove(e){if(ie(e))return this.children.isEmpty()?new Ie(null):new Ie(null,this.children);{const n=te(e),s=this.children.get(n);if(s){const l=s.remove(Ce(e));let u;return l.isEmpty()?u=this.children.remove(n):u=this.children.insert(n,l),this.value===null&&u.isEmpty()?new Ie(null):new Ie(this.value,u)}else return this}}get(e){if(ie(e))return this.value;{const n=te(e),s=this.children.get(n);return s?s.get(Ce(e)):null}}setTree(e,n){if(ie(e))return n;{const s=te(e),u=(this.children.get(s)||new Ie(null)).setTree(Ce(e),n);let d;return u.isEmpty()?d=this.children.remove(s):d=this.children.insert(s,u),new Ie(this.value,d)}}fold(e){return this.fold_(de(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((l,u)=>{s[l]=u.fold_(De(e,l),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,de(),n)}findOnPath_(e,n,s){const l=this.value?s(n,this.value):!1;if(l)return l;if(ie(e))return null;{const u=te(e),d=this.children.get(u);return d?d.findOnPath_(Ce(e),De(n,u),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,de(),n)}foreachOnPath_(e,n,s){if(ie(e))return this;{this.value&&s(n,this.value);const l=te(e),u=this.children.get(l);return u?u.foreachOnPath_(Ce(e),De(n,l),s):new Ie(null)}}foreach(e){this.foreach_(de(),e)}foreach_(e,n){this.children.inorderTraversal((s,l)=>{l.foreach_(De(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.writeTree_=e}static empty(){return new qt(new Ie(null))}}function Ss(r,e,n){if(ie(e))return new qt(new Ie(n));{const s=r.writeTree_.findRootMostValueAndPath(e);if(s!=null){const l=s.path;let u=s.value;const d=gt(l,e);return u=u.updateChild(d,n),new qt(r.writeTree_.set(l,u))}else{const l=new Ie(n),u=r.writeTree_.setTree(e,l);return new qt(u)}}}function Mc(r,e,n){let s=r;return Ze(n,(l,u)=>{s=Ss(s,De(e,l),u)}),s}function Um(r,e){if(ie(e))return qt.empty();{const n=r.writeTree_.setTree(e,new Ie(null));return new qt(n)}}function bc(r,e){return Lr(r,e)!=null}function Lr(r,e){const n=r.writeTree_.findRootMostValueAndPath(e);return n!=null?r.writeTree_.get(n.path).getChild(gt(n.path,e)):null}function jm(r){const e=[],n=r.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Le,(s,l)=>{e.push(new ne(s,l))}):r.writeTree_.children.inorderTraversal((s,l)=>{l.value!=null&&e.push(new ne(s,l.value))}),e}function er(r,e){if(ie(e))return r;{const n=Lr(r,e);return n!=null?new qt(new Ie(n)):new qt(r.writeTree_.subtree(e))}}function Fc(r){return r.writeTree_.isEmpty()}function wi(r,e){return N_(de(),r.writeTree_,e)}function N_(r,e,n){if(e.value!=null)return n.updateChild(r,e.value);{let s=null;return e.children.inorderTraversal((l,u)=>{l===".priority"?(D(u.value!==null,"Priority writes must always be leaf nodes"),s=u.value):n=N_(De(r,l),u,n)}),!n.getChild(r).isEmpty()&&s!==null&&(n=n.updateChild(De(r,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _d(r,e){return x_(e,r)}function zI(r,e,n,s,l){D(s>r.lastWriteId,"Stacking an older write on top of newer ones"),l===void 0&&(l=!0),r.allWrites.push({path:e,snap:n,writeId:s,visible:l}),l&&(r.visibleWrites=Ss(r.visibleWrites,e,n)),r.lastWriteId=s}function WI(r,e,n,s){D(s>r.lastWriteId,"Stacking an older merge on top of newer ones"),r.allWrites.push({path:e,children:n,writeId:s,visible:!0}),r.visibleWrites=Mc(r.visibleWrites,e,n),r.lastWriteId=s}function BI(r,e){for(let n=0;n<r.allWrites.length;n++){const s=r.allWrites[n];if(s.writeId===e)return s}return null}function VI(r,e){const n=r.allWrites.findIndex(f=>f.writeId===e);D(n>=0,"removeWrite called with nonexistent writeId.");const s=r.allWrites[n];r.allWrites.splice(n,1);let l=s.visible,u=!1,d=r.allWrites.length-1;for(;l&&d>=0;){const f=r.allWrites[d];f.visible&&(d>=n&&HI(f,s.path)?l=!1:Mt(s.path,f.path)&&(u=!0)),d--}if(l){if(u)return $I(r),!0;if(s.snap)r.visibleWrites=Um(r.visibleWrites,s.path);else{const f=s.children;Ze(f,p=>{r.visibleWrites=Um(r.visibleWrites,De(s.path,p))})}return!0}else return!1}function HI(r,e){if(r.snap)return Mt(r.path,e);for(const n in r.children)if(r.children.hasOwnProperty(n)&&Mt(De(r.path,n),e))return!0;return!1}function $I(r){r.visibleWrites=P_(r.allWrites,GI,de()),r.allWrites.length>0?r.lastWriteId=r.allWrites[r.allWrites.length-1].writeId:r.lastWriteId=-1}function GI(r){return r.visible}function P_(r,e,n){let s=qt.empty();for(let l=0;l<r.length;++l){const u=r[l];if(e(u)){const d=u.path;let f;if(u.snap)Mt(n,d)?(f=gt(n,d),s=Ss(s,f,u.snap)):Mt(d,n)&&(f=gt(d,n),s=Ss(s,de(),u.snap.getChild(f)));else if(u.children){if(Mt(n,d))f=gt(n,d),s=Mc(s,f,u.children);else if(Mt(d,n))if(f=gt(d,n),ie(f))s=Mc(s,de(),u.children);else{const p=gi(u.children,te(f));if(p){const g=p.getChild(Ce(f));s=Ss(s,de(),g)}}}else throw Si("WriteRecord should have .snap or .children")}}return s}function A_(r,e,n,s,l){if(!s&&!l){const u=Lr(r.visibleWrites,e);if(u!=null)return u;{const d=er(r.visibleWrites,e);if(Fc(d))return n;if(n==null&&!bc(d,de()))return null;{const f=n||K.EMPTY_NODE;return wi(d,f)}}}else{const u=er(r.visibleWrites,e);if(!l&&Fc(u))return n;if(!l&&n==null&&!bc(u,de()))return null;{const d=function(g){return(g.visible||l)&&(!s||!~s.indexOf(g.writeId))&&(Mt(g.path,e)||Mt(e,g.path))},f=P_(r.allWrites,d,e),p=n||K.EMPTY_NODE;return wi(f,p)}}}function qI(r,e,n){let s=K.EMPTY_NODE;const l=Lr(r.visibleWrites,e);if(l)return l.isLeafNode()||l.forEachChild(Le,(u,d)=>{s=s.updateImmediateChild(u,d)}),s;if(n){const u=er(r.visibleWrites,e);return n.forEachChild(Le,(d,f)=>{const p=wi(er(u,new ve(d)),f);s=s.updateImmediateChild(d,p)}),jm(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}else{const u=er(r.visibleWrites,e);return jm(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}}function KI(r,e,n,s,l){D(s||l,"Either existingEventSnap or existingServerSnap must exist");const u=De(e,n);if(bc(r.visibleWrites,u))return null;{const d=er(r.visibleWrites,u);return Fc(d)?l.getChild(n):wi(d,l.getChild(n))}}function YI(r,e,n,s){const l=De(e,n),u=Lr(r.visibleWrites,l);if(u!=null)return u;if(s.isCompleteForChild(n)){const d=er(r.visibleWrites,l);return wi(d,s.getNode().getImmediateChild(n))}else return null}function QI(r,e){return Lr(r.visibleWrites,e)}function XI(r,e,n,s,l,u,d){let f;const p=er(r.visibleWrites,e),g=Lr(p,de());if(g!=null)f=g;else if(n!=null)f=wi(p,n);else return[];if(f=f.withIndex(d),!f.isEmpty()&&!f.isLeafNode()){const v=[],y=d.getCompare(),E=u?f.getReverseIteratorFrom(s,d):f.getIteratorFrom(s,d);let R=E.getNext();for(;R&&v.length<l;)y(R,s)!==0&&v.push(R),R=E.getNext();return v}else return[]}function JI(){return{visibleWrites:qt.empty(),allWrites:[],lastWriteId:-1}}function wl(r,e,n,s){return A_(r.writeTree,r.treePath,e,n,s)}function yd(r,e){return qI(r.writeTree,r.treePath,e)}function zm(r,e,n,s){return KI(r.writeTree,r.treePath,e,n,s)}function El(r,e){return QI(r.writeTree,De(r.treePath,e))}function ZI(r,e,n,s,l,u){return XI(r.writeTree,r.treePath,e,n,s,l,u)}function vd(r,e,n){return YI(r.writeTree,r.treePath,e,n)}function O_(r,e){return x_(De(r.treePath,e),r.writeTree)}function x_(r,e){return{treePath:r,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;D(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),D(s!==".priority","Only non-priority child changes can be tracked.");const l=this.changeMap.get(s);if(l){const u=l.type;if(n==="child_added"&&u==="child_removed")this.changeMap.set(s,xs(s,e.snapshotNode,l.snapshotNode));else if(n==="child_removed"&&u==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&u==="child_changed")this.changeMap.set(s,Os(s,l.oldSnap));else if(n==="child_changed"&&u==="child_added")this.changeMap.set(s,yi(s,e.snapshotNode));else if(n==="child_changed"&&u==="child_changed")this.changeMap.set(s,xs(s,e.snapshotNode,l.oldSnap));else throw Si("Illegal combination of changes: "+e+" occurred after "+l)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const D_=new tC;class wd{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new kr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return vd(this.writes_,e,s)}}getChildAfterChild(e,n,s){const l=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Rr(this.viewCache_),u=ZI(this.writes_,l,n,1,s,e);return u.length===0?null:u[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nC(r){return{filter:r}}function rC(r,e){D(e.eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),D(e.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed")}function iC(r,e,n,s,l){const u=new eC;let d,f;if(n.type===Gt.OVERWRITE){const g=n;g.source.fromUser?d=Uc(r,e,g.path,g.snap,s,l,u):(D(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered()&&!ie(g.path),d=Sl(r,e,g.path,g.snap,s,l,f,u))}else if(n.type===Gt.MERGE){const g=n;g.source.fromUser?d=oC(r,e,g.path,g.children,s,l,u):(D(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered(),d=jc(r,e,g.path,g.children,s,l,f,u))}else if(n.type===Gt.ACK_USER_WRITE){const g=n;g.revert?d=uC(r,e,g.path,s,l,u):d=lC(r,e,g.path,g.affectedTree,s,l,u)}else if(n.type===Gt.LISTEN_COMPLETE)d=aC(r,e,n.path,s,u);else throw Si("Unknown operation type: "+n.type);const p=u.getChanges();return sC(e,d,p),{viewCache:d,changes:p}}function sC(r,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const l=s.getNode().isLeafNode()||s.getNode().isEmpty(),u=Lc(r);(n.length>0||!r.eventCache.isFullyInitialized()||l&&!s.getNode().equals(u)||!s.getNode().getPriority().equals(u.getPriority()))&&n.push(T_(Lc(e)))}}function L_(r,e,n,s,l,u){const d=e.eventCache;if(El(s,n)!=null)return e;{let f,p;if(ie(n))if(D(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=Rr(e),v=g instanceof K?g:K.EMPTY_NODE,y=yd(s,v);f=r.filter.updateFullNode(e.eventCache.getNode(),y,u)}else{const g=wl(s,Rr(e));f=r.filter.updateFullNode(e.eventCache.getNode(),g,u)}else{const g=te(n);if(g===".priority"){D(nr(n)===1,"Can't have a priority with additional path components");const v=d.getNode();p=e.serverCache.getNode();const y=zm(s,n,v,p);y!=null?f=r.filter.updatePriority(v,y):f=d.getNode()}else{const v=Ce(n);let y;if(d.isCompleteForChild(g)){p=e.serverCache.getNode();const E=zm(s,n,d.getNode(),p);E!=null?y=d.getNode().getImmediateChild(g).updateChild(v,E):y=d.getNode().getImmediateChild(g)}else y=vd(s,g,e.serverCache);y!=null?f=r.filter.updateChild(d.getNode(),g,y,v,l,u):f=d.getNode()}}return Es(e,f,d.isFullyInitialized()||ie(n),r.filter.filtersNodes())}}function Sl(r,e,n,s,l,u,d,f){const p=e.serverCache;let g;const v=d?r.filter:r.filter.getIndexedFilter();if(ie(n))g=v.updateFullNode(p.getNode(),s,null);else if(v.filtersNodes()&&!p.isFiltered()){const R=p.getNode().updateChild(n,s);g=v.updateFullNode(p.getNode(),R,null)}else{const R=te(n);if(!p.isCompleteForPath(n)&&nr(n)>1)return e;const L=Ce(n),V=p.getNode().getImmediateChild(R).updateChild(L,s);R===".priority"?g=v.updatePriority(p.getNode(),V):g=v.updateChild(p.getNode(),R,V,L,D_,null)}const y=R_(e,g,p.isFullyInitialized()||ie(n),v.filtersNodes()),E=new wd(l,y,u);return L_(r,y,n,l,E,f)}function Uc(r,e,n,s,l,u,d){const f=e.eventCache;let p,g;const v=new wd(l,e,u);if(ie(n))g=r.filter.updateFullNode(e.eventCache.getNode(),s,d),p=Es(e,g,!0,r.filter.filtersNodes());else{const y=te(n);if(y===".priority")g=r.filter.updatePriority(e.eventCache.getNode(),s),p=Es(e,g,f.isFullyInitialized(),f.isFiltered());else{const E=Ce(n),R=f.getNode().getImmediateChild(y);let L;if(ie(E))L=s;else{const M=v.getCompleteChild(y);M!=null?ad(E)===".priority"&&M.getChild(y_(E)).isEmpty()?L=M:L=M.updateChild(E,s):L=K.EMPTY_NODE}if(R.equals(L))p=e;else{const M=r.filter.updateChild(f.getNode(),y,L,E,v,d);p=Es(e,M,f.isFullyInitialized(),r.filter.filtersNodes())}}}return p}function Wm(r,e){return r.eventCache.isCompleteForChild(e)}function oC(r,e,n,s,l,u,d){let f=e;return s.foreach((p,g)=>{const v=De(n,p);Wm(e,te(v))&&(f=Uc(r,f,v,g,l,u,d))}),s.foreach((p,g)=>{const v=De(n,p);Wm(e,te(v))||(f=Uc(r,f,v,g,l,u,d))}),f}function Bm(r,e,n){return n.foreach((s,l)=>{e=e.updateChild(s,l)}),e}function jc(r,e,n,s,l,u,d,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;ie(n)?g=s:g=new Ie(null).setTree(n,s);const v=e.serverCache.getNode();return g.children.inorderTraversal((y,E)=>{if(v.hasChild(y)){const R=e.serverCache.getNode().getImmediateChild(y),L=Bm(r,R,E);p=Sl(r,p,new ve(y),L,l,u,d,f)}}),g.children.inorderTraversal((y,E)=>{const R=!e.serverCache.isCompleteForChild(y)&&E.value===null;if(!v.hasChild(y)&&!R){const L=e.serverCache.getNode().getImmediateChild(y),M=Bm(r,L,E);p=Sl(r,p,new ve(y),M,l,u,d,f)}}),p}function lC(r,e,n,s,l,u,d){if(El(l,n)!=null)return e;const f=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(ie(n)&&p.isFullyInitialized()||p.isCompleteForPath(n))return Sl(r,e,n,p.getNode().getChild(n),l,u,f,d);if(ie(n)){let g=new Ie(null);return p.getNode().forEachChild(di,(v,y)=>{g=g.set(new ve(v),y)}),jc(r,e,n,g,l,u,f,d)}else return e}else{let g=new Ie(null);return s.foreach((v,y)=>{const E=De(n,v);p.isCompleteForPath(E)&&(g=g.set(v,p.getNode().getChild(E)))}),jc(r,e,n,g,l,u,f,d)}}function aC(r,e,n,s,l){const u=e.serverCache,d=R_(e,u.getNode(),u.isFullyInitialized()||ie(n),u.isFiltered());return L_(r,d,n,s,D_,l)}function uC(r,e,n,s,l,u){let d;if(El(s,n)!=null)return e;{const f=new wd(s,e,l),p=e.eventCache.getNode();let g;if(ie(n)||te(n)===".priority"){let v;if(e.serverCache.isFullyInitialized())v=wl(s,Rr(e));else{const y=e.serverCache.getNode();D(y instanceof K,"serverChildren would be complete if leaf node"),v=yd(s,y)}v=v,g=r.filter.updateFullNode(p,v,u)}else{const v=te(n);let y=vd(s,v,e.serverCache);y==null&&e.serverCache.isCompleteForChild(v)&&(y=p.getImmediateChild(v)),y!=null?g=r.filter.updateChild(p,v,y,Ce(n),f,u):e.eventCache.getNode().hasChild(v)?g=r.filter.updateChild(p,v,K.EMPTY_NODE,Ce(n),f,u):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(d=wl(s,Rr(e)),d.isLeafNode()&&(g=r.filter.updateFullNode(g,d,u)))}return d=e.serverCache.isFullyInitialized()||El(s,de())!=null,Es(e,g,d,r.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,l=new hd(s.getIndex()),u=NI(s);this.processor_=nC(u);const d=n.serverCache,f=n.eventCache,p=l.updateFullNode(K.EMPTY_NODE,d.getNode(),null),g=u.updateFullNode(K.EMPTY_NODE,f.getNode(),null),v=new kr(p,d.isFullyInitialized(),l.filtersNodes()),y=new kr(g,f.isFullyInitialized(),u.filtersNodes());this.viewCache_=jl(y,v),this.eventGenerator_=new MI(this.query_)}get query(){return this.query_}}function dC(r){return r.viewCache_.serverCache.getNode()}function hC(r,e){const n=Rr(r.viewCache_);return n&&(r.query._queryParams.loadsAllData()||!ie(e)&&!n.getImmediateChild(te(e)).isEmpty())?n.getChild(e):null}function Vm(r){return r.eventRegistrations_.length===0}function fC(r,e){r.eventRegistrations_.push(e)}function Hm(r,e,n){const s=[];if(n){D(e==null,"A cancel should cancel all event registrations.");const l=r.query._path;r.eventRegistrations_.forEach(u=>{const d=u.createCancelEvent(n,l);d&&s.push(d)})}if(e){let l=[];for(let u=0;u<r.eventRegistrations_.length;++u){const d=r.eventRegistrations_[u];if(!d.matches(e))l.push(d);else if(e.hasAnyCallback()){l=l.concat(r.eventRegistrations_.slice(u+1));break}}r.eventRegistrations_=l}else r.eventRegistrations_=[];return s}function $m(r,e,n,s){e.type===Gt.MERGE&&e.source.queryId!==null&&(D(Rr(r.viewCache_),"We should always have a full cache before handling merges"),D(Lc(r.viewCache_),"Missing event cache, even though we have a server cache"));const l=r.viewCache_,u=iC(r.processor_,l,e,n,s);return rC(r.processor_,u.viewCache),D(u.viewCache.serverCache.isFullyInitialized()||!l.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),r.viewCache_=u.viewCache,M_(r,u.changes,u.viewCache.eventCache.getNode(),null)}function pC(r,e){const n=r.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Le,(u,d)=>{s.push(yi(u,d))}),n.isFullyInitialized()&&s.push(T_(n.getNode())),M_(r,s,n.getNode(),e)}function M_(r,e,n,s){const l=s?[s]:r.eventRegistrations_;return bI(r.eventGenerator_,e,n,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Il;class mC{constructor(){this.views=new Map}}function gC(r){D(!Il,"__referenceConstructor has already been defined"),Il=r}function _C(){return D(Il,"Reference.ts has not been loaded"),Il}function yC(r){return r.views.size===0}function Ed(r,e,n,s){const l=e.source.queryId;if(l!==null){const u=r.views.get(l);return D(u!=null,"SyncTree gave us an op for an invalid query."),$m(u,e,n,s)}else{let u=[];for(const d of r.views.values())u=u.concat($m(d,e,n,s));return u}}function vC(r,e,n,s,l){const u=e._queryIdentifier,d=r.views.get(u);if(!d){let f=wl(n,l?s:null),p=!1;f?p=!0:s instanceof K?(f=yd(n,s),p=!1):(f=K.EMPTY_NODE,p=!1);const g=jl(new kr(f,p,!1),new kr(s,l,!1));return new cC(e,g)}return d}function wC(r,e,n,s,l,u){const d=vC(r,e,s,l,u);return r.views.has(e._queryIdentifier)||r.views.set(e._queryIdentifier,d),fC(d,n),pC(d,n)}function EC(r,e,n,s){const l=e._queryIdentifier,u=[];let d=[];const f=rr(r);if(l==="default")for(const[p,g]of r.views.entries())d=d.concat(Hm(g,n,s)),Vm(g)&&(r.views.delete(p),g.query._queryParams.loadsAllData()||u.push(g.query));else{const p=r.views.get(l);p&&(d=d.concat(Hm(p,n,s)),Vm(p)&&(r.views.delete(l),p.query._queryParams.loadsAllData()||u.push(p.query)))}return f&&!rr(r)&&u.push(new(_C())(e._repo,e._path)),{removed:u,events:d}}function b_(r){const e=[];for(const n of r.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function hi(r,e){let n=null;for(const s of r.views.values())n=n||hC(s,e);return n}function F_(r,e){if(e._queryParams.loadsAllData())return zl(r);{const s=e._queryIdentifier;return r.views.get(s)}}function U_(r,e){return F_(r,e)!=null}function rr(r){return zl(r)!=null}function zl(r){for(const e of r.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cl;function SC(r){D(!Cl,"__referenceConstructor has already been defined"),Cl=r}function IC(){return D(Cl,"Reference.ts has not been loaded"),Cl}let CC=1;class Gm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ie(null),this.pendingWriteTree_=JI(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function j_(r,e,n,s,l){return zI(r.pendingWriteTree_,e,n,s,l),l?ki(r,new Tr(pd(),e,n)):[]}function TC(r,e,n,s){WI(r.pendingWriteTree_,e,n,s);const l=Ie.fromObject(n);return ki(r,new vi(pd(),e,l))}function Xn(r,e,n=!1){const s=BI(r.pendingWriteTree_,e);if(VI(r.pendingWriteTree_,e)){let u=new Ie(null);return s.snap!=null?u=u.set(de(),!0):Ze(s.children,d=>{u=u.set(new ve(d),!0)}),ki(r,new vl(s.path,u,n))}else return[]}function Wl(r,e,n){return ki(r,new Tr(md(),e,n))}function kC(r,e,n){const s=Ie.fromObject(n);return ki(r,new vi(md(),e,s))}function RC(r,e){return ki(r,new Ls(md(),e))}function NC(r,e,n){const s=Id(r,n);if(s){const l=Cd(s),u=l.path,d=l.queryId,f=gt(u,e),p=new Ls(gd(d),f);return Td(r,u,p)}else return[]}function zc(r,e,n,s,l=!1){const u=e._path,d=r.syncPointTree_.get(u);let f=[];if(d&&(e._queryIdentifier==="default"||U_(d,e))){const p=EC(d,e,n,s);yC(d)&&(r.syncPointTree_=r.syncPointTree_.remove(u));const g=p.removed;if(f=p.events,!l){const v=g.findIndex(E=>E._queryParams.loadsAllData())!==-1,y=r.syncPointTree_.findOnPath(u,(E,R)=>rr(R));if(v&&!y){const E=r.syncPointTree_.subtree(u);if(!E.isEmpty()){const R=OC(E);for(let L=0;L<R.length;++L){const M=R[L],V=M.query,pe=B_(r,M);r.listenProvider_.startListening(Is(V),Tl(r,V),pe.hashFn,pe.onComplete)}}}!y&&g.length>0&&!s&&(v?r.listenProvider_.stopListening(Is(e),null):g.forEach(E=>{const R=r.queryToTagMap.get(Bl(E));r.listenProvider_.stopListening(Is(E),R)}))}xC(r,g)}return f}function PC(r,e,n,s){const l=Id(r,s);if(l!=null){const u=Cd(l),d=u.path,f=u.queryId,p=gt(d,e),g=new Tr(gd(f),p,n);return Td(r,d,g)}else return[]}function AC(r,e,n,s){const l=Id(r,s);if(l){const u=Cd(l),d=u.path,f=u.queryId,p=gt(d,e),g=Ie.fromObject(n),v=new vi(gd(f),p,g);return Td(r,d,v)}else return[]}function qm(r,e,n,s=!1){const l=e._path;let u=null,d=!1;r.syncPointTree_.foreachOnPath(l,(E,R)=>{const L=gt(E,l);u=u||hi(R,L),d=d||rr(R)});let f=r.syncPointTree_.get(l);f?(d=d||rr(f),u=u||hi(f,de())):(f=new mC,r.syncPointTree_=r.syncPointTree_.set(l,f));let p;u!=null?p=!0:(p=!1,u=K.EMPTY_NODE,r.syncPointTree_.subtree(l).foreachChild((R,L)=>{const M=hi(L,de());M&&(u=u.updateImmediateChild(R,M))}));const g=U_(f,e);if(!g&&!e._queryParams.loadsAllData()){const E=Bl(e);D(!r.queryToTagMap.has(E),"View does not exist, but we have a tag");const R=DC();r.queryToTagMap.set(E,R),r.tagToQueryMap.set(R,E)}const v=_d(r.pendingWriteTree_,l);let y=wC(f,e,n,v,u,p);if(!g&&!d&&!s){const E=F_(f,e);y=y.concat(LC(r,e,E))}return y}function Sd(r,e,n){const l=r.pendingWriteTree_,u=r.syncPointTree_.findOnPath(e,(d,f)=>{const p=gt(d,e),g=hi(f,p);if(g)return g});return A_(l,e,u,n,!0)}function ki(r,e){return z_(e,r.syncPointTree_,null,_d(r.pendingWriteTree_,de()))}function z_(r,e,n,s){if(ie(r.path))return W_(r,e,n,s);{const l=e.get(de());n==null&&l!=null&&(n=hi(l,de()));let u=[];const d=te(r.path),f=r.operationForChild(d),p=e.children.get(d);if(p&&f){const g=n?n.getImmediateChild(d):null,v=O_(s,d);u=u.concat(z_(f,p,g,v))}return l&&(u=u.concat(Ed(l,r,s,n))),u}}function W_(r,e,n,s){const l=e.get(de());n==null&&l!=null&&(n=hi(l,de()));let u=[];return e.children.inorderTraversal((d,f)=>{const p=n?n.getImmediateChild(d):null,g=O_(s,d),v=r.operationForChild(d);v&&(u=u.concat(W_(v,f,p,g)))}),l&&(u=u.concat(Ed(l,r,s,n))),u}function B_(r,e){const n=e.query,s=Tl(r,n);return{hashFn:()=>(dC(e)||K.EMPTY_NODE).hash(),onComplete:l=>{if(l==="ok")return s?NC(r,n._path,s):RC(r,n._path);{const u=kS(l,n);return zc(r,n,null,u)}}}}function Tl(r,e){const n=Bl(e);return r.queryToTagMap.get(n)}function Bl(r){return r._path.toString()+"$"+r._queryIdentifier}function Id(r,e){return r.tagToQueryMap.get(e)}function Cd(r){const e=r.indexOf("$");return D(e!==-1&&e<r.length-1,"Bad queryKey."),{queryId:r.substr(e+1),path:new ve(r.substr(0,e))}}function Td(r,e,n){const s=r.syncPointTree_.get(e);D(s,"Missing sync point for query tag that we're tracking");const l=_d(r.pendingWriteTree_,e);return Ed(s,n,l,null)}function OC(r){return r.fold((e,n,s)=>{if(n&&rr(n))return[zl(n)];{let l=[];return n&&(l=b_(n)),Ze(s,(u,d)=>{l=l.concat(d)}),l}})}function Is(r){return r._queryParams.loadsAllData()&&!r._queryParams.isDefault()?new(IC())(r._repo,r._path):r}function xC(r,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const l=Bl(s),u=r.queryToTagMap.get(l);r.queryToTagMap.delete(l),r.tagToQueryMap.delete(u)}}}function DC(){return CC++}function LC(r,e,n){const s=e._path,l=Tl(r,e),u=B_(r,n),d=r.listenProvider_.startListening(Is(e),l,u.hashFn,u.onComplete),f=r.syncPointTree_.subtree(s);if(l)D(!rr(f.value),"If we're adding a query, it shouldn't be shadowed");else{const p=f.fold((g,v,y)=>{if(!ie(g)&&v&&rr(v))return[zl(v).query];{let E=[];return v&&(E=E.concat(b_(v).map(R=>R.query))),Ze(y,(R,L)=>{E=E.concat(L)}),E}});for(let g=0;g<p.length;++g){const v=p[g];r.listenProvider_.stopListening(Is(v),Tl(r,v))}}return d}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new kd(n)}node(){return this.node_}}class Rd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=De(this.path_,e);return new Rd(this.syncTree_,n)}node(){return Sd(this.syncTree_,this.path_)}}const MC=function(r){return r=r||{},r.timestamp=r.timestamp||new Date().getTime(),r},Km=function(r,e,n){if(!r||typeof r!="object")return r;if(D(".sv"in r,"Unexpected leaf node or priority contents"),typeof r[".sv"]=="string")return bC(r[".sv"],e,n);if(typeof r[".sv"]=="object")return FC(r[".sv"],e);D(!1,"Unexpected server value: "+JSON.stringify(r,null,2))},bC=function(r,e,n){switch(r){case"timestamp":return n.timestamp;default:D(!1,"Unexpected server value: "+r)}},FC=function(r,e,n){r.hasOwnProperty("increment")||D(!1,"Unexpected server value: "+JSON.stringify(r,null,2));const s=r.increment;typeof s!="number"&&D(!1,"Unexpected increment value: "+s);const l=e.node();if(D(l!==null&&typeof l<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!l.isLeafNode())return s;const d=l.getValue();return typeof d!="number"?s:d+s},V_=function(r,e,n,s){return Nd(e,new Rd(n,r),s)},H_=function(r,e,n){return Nd(r,new kd(e),n)};function Nd(r,e,n){const s=r.getPriority().val(),l=Km(s,e.getImmediateChild(".priority"),n);let u;if(r.isLeafNode()){const d=r,f=Km(d.getValue(),e,n);return f!==d.getValue()||l!==d.getPriority().val()?new $e(f,qe(l)):r}else{const d=r;return u=d,l!==d.getPriority().val()&&(u=u.updatePriority(new $e(l))),d.forEachChild(Le,(f,p)=>{const g=Nd(p,e.getImmediateChild(f),n);g!==p&&(u=u.updateImmediateChild(f,g))}),u}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Ad(r,e){let n=e instanceof ve?e:new ve(e),s=r,l=te(n);for(;l!==null;){const u=gi(s.node.children,l)||{children:{},childCount:0};s=new Pd(l,s,u),n=Ce(n),l=te(n)}return s}function Ri(r){return r.node.value}function $_(r,e){r.node.value=e,Wc(r)}function G_(r){return r.node.childCount>0}function UC(r){return Ri(r)===void 0&&!G_(r)}function Vl(r,e){Ze(r.node.children,(n,s)=>{e(new Pd(n,r,s))})}function q_(r,e,n,s){n&&!s&&e(r),Vl(r,l=>{q_(l,e,!0,s)}),n&&s&&e(r)}function jC(r,e,n){let s=r.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function zs(r){return new ve(r.parent===null?r.name:zs(r.parent)+"/"+r.name)}function Wc(r){r.parent!==null&&zC(r.parent,r.name,r)}function zC(r,e,n){const s=UC(n),l=an(r.node.children,e);s&&l?(delete r.node.children[e],r.node.childCount--,Wc(r)):!s&&!l&&(r.node.children[e]=n.node,r.node.childCount++,Wc(r))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC=/[\[\].#$\/\u0000-\u001F\u007F]/,BC=/[\[\].#$\u0000-\u001F\u007F]/,_c=10*1024*1024,Od=function(r){return typeof r=="string"&&r.length!==0&&!WC.test(r)},K_=function(r){return typeof r=="string"&&r.length!==0&&!BC.test(r)},VC=function(r){return r&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),K_(r)},HC=function(r){return r===null||typeof r=="string"||typeof r=="number"&&!rd(r)||r&&typeof r=="object"&&an(r,".sv")},$C=function(r,e,n,s){Hl(Ml(r,"value"),e,n)},Hl=function(r,e,n){const s=n instanceof ve?new oI(n,r):n;if(e===void 0)throw new Error(r+"contains undefined "+Er(s));if(typeof e=="function")throw new Error(r+"contains a function "+Er(s)+" with contents = "+e.toString());if(rd(e))throw new Error(r+"contains "+e.toString()+" "+Er(s));if(typeof e=="string"&&e.length>_c/3&&bl(e)>_c)throw new Error(r+"contains a string greater than "+_c+" utf8 bytes "+Er(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let l=!1,u=!1;if(Ze(e,(d,f)=>{if(d===".value")l=!0;else if(d!==".priority"&&d!==".sv"&&(u=!0,!Od(d)))throw new Error(r+" contains an invalid key ("+d+") "+Er(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);lI(s,d),Hl(r,f,s),aI(s)}),l&&u)throw new Error(r+' contains ".value" child '+Er(s)+" in addition to actual children.")}},GC=function(r,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const u=As(s);for(let d=0;d<u.length;d++)if(!(u[d]===".priority"&&d===u.length-1)){if(!Od(u[d]))throw new Error(r+"contains an invalid key ("+u[d]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(sI);let l=null;for(n=0;n<e.length;n++){if(s=e[n],l!==null&&Mt(l,s))throw new Error(r+"contains a path "+l.toString()+" that is ancestor of another path "+s.toString());l=s}},qC=function(r,e,n,s){const l=Ml(r,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(l+" must be an object containing the children to replace.");const u=[];Ze(e,(d,f)=>{const p=new ve(d);if(Hl(l,f,De(n,p)),ad(p)===".priority"&&!HC(f))throw new Error(l+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");u.push(p)}),GC(l,u)},Y_=function(r,e,n,s){if(!K_(n))throw new Error(Ml(r,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},KC=function(r,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Y_(r,e,n)},Q_=function(r,e){if(te(e)===".info")throw new Error(r+" failed = Can't modify data under /.info/")},YC=function(r,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Od(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!VC(n))throw new Error(Ml(r,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function $l(r,e){let n=null;for(let s=0;s<e.length;s++){const l=e[s],u=l.getPath();n!==null&&!ud(u,n.path)&&(r.eventLists_.push(n),n=null),n===null&&(n={events:[],path:u}),n.events.push(l)}n&&r.eventLists_.push(n)}function X_(r,e,n){$l(r,n),J_(r,s=>ud(s,e))}function Yt(r,e,n){$l(r,n),J_(r,s=>Mt(s,e)||Mt(e,s))}function J_(r,e){r.recursionDepth_++;let n=!0;for(let s=0;s<r.eventLists_.length;s++){const l=r.eventLists_[s];if(l){const u=l.path;e(u)?(XC(r.eventLists_[s]),r.eventLists_[s]=null):n=!1}}n&&(r.eventLists_=[]),r.recursionDepth_--}function XC(r){for(let e=0;e<r.events.length;e++){const n=r.events[e];if(n!==null){r.events[e]=null;const s=n.getEventRunner();vs&&Je("event: "+n.toString()),Ti(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC="repo_interrupt",ZC=25;class eT{constructor(e,n,s,l){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=l,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new QC,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=yl(),this.transactionQueueTree_=new Pd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function tT(r,e,n){if(r.stats_=od(r.repoInfo_),r.forceRestClient_||AS())r.server_=new _l(r.repoInfo_,(s,l,u,d)=>{Ym(r,s,l,u,d)},r.authTokenProvider_,r.appCheckProvider_),setTimeout(()=>Qm(r,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ke(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}r.persistentConnection_=new Sn(r.repoInfo_,e,(s,l,u,d)=>{Ym(r,s,l,u,d)},s=>{Qm(r,s)},s=>{rT(r,s)},r.authTokenProvider_,r.appCheckProvider_,n),r.server_=r.persistentConnection_}r.authTokenProvider_.addTokenChangeListener(s=>{r.server_.refreshAuthToken(s)}),r.appCheckProvider_.addTokenChangeListener(s=>{r.server_.refreshAppCheckToken(s.token)}),r.statsReporter_=MS(r.repoInfo_,()=>new LI(r.stats_,r.server_)),r.infoData_=new PI,r.infoSyncTree_=new Gm({startListening:(s,l,u,d)=>{let f=[];const p=r.infoData_.getNode(s._path);return p.isEmpty()||(f=Wl(r.infoSyncTree_,s._path,p),setTimeout(()=>{d("ok")},0)),f},stopListening:()=>{}}),xd(r,"connected",!1),r.serverSyncTree_=new Gm({startListening:(s,l,u,d)=>(r.server_.listen(s,u,l,(f,p)=>{const g=d(f,p);Yt(r.eventQueue_,s._path,g)}),[]),stopListening:(s,l)=>{r.server_.unlisten(s,l)}})}function nT(r){const n=r.infoData_.getNode(new ve(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Gl(r){return MC({timestamp:nT(r)})}function Ym(r,e,n,s,l){r.dataUpdateCount++;const u=new ve(e);n=r.interceptServerDataCallback_?r.interceptServerDataCallback_(e,n):n;let d=[];if(l)if(s){const p=hl(n,g=>qe(g));d=AC(r.serverSyncTree_,u,p,l)}else{const p=qe(n);d=PC(r.serverSyncTree_,u,p,l)}else if(s){const p=hl(n,g=>qe(g));d=kC(r.serverSyncTree_,u,p)}else{const p=qe(n);d=Wl(r.serverSyncTree_,u,p)}let f=u;d.length>0&&(f=Ei(r,u)),Yt(r.eventQueue_,f,d)}function Qm(r,e){xd(r,"connected",e),e===!1&&oT(r)}function rT(r,e){Ze(e,(n,s)=>{xd(r,n,s)})}function xd(r,e,n){const s=new ve("/.info/"+e),l=qe(n);r.infoData_.updateSnapshot(s,l);const u=Wl(r.infoSyncTree_,s,l);Yt(r.eventQueue_,s,u)}function Dd(r){return r.nextWriteId_++}function iT(r,e,n,s,l){ql(r,"set",{path:e.toString(),value:n,priority:s});const u=Gl(r),d=qe(n,s),f=Sd(r.serverSyncTree_,e),p=H_(d,f,u),g=Dd(r),v=j_(r.serverSyncTree_,e,p,g,!0);$l(r.eventQueue_,v),r.server_.put(e.toString(),d.val(!0),(E,R)=>{const L=E==="ok";L||lt("set at "+e+" failed: "+E);const M=Xn(r.serverSyncTree_,g,!L);Yt(r.eventQueue_,e,M),Bc(r,l,E,R)});const y=Md(r,e);Ei(r,y),Yt(r.eventQueue_,y,[])}function sT(r,e,n,s){ql(r,"update",{path:e.toString(),value:n});let l=!0;const u=Gl(r),d={};if(Ze(n,(f,p)=>{l=!1,d[f]=V_(De(e,f),qe(p),r.serverSyncTree_,u)}),l)Je("update() called with empty data.  Don't do anything."),Bc(r,s,"ok",void 0);else{const f=Dd(r),p=TC(r.serverSyncTree_,e,d,f);$l(r.eventQueue_,p),r.server_.merge(e.toString(),n,(g,v)=>{const y=g==="ok";y||lt("update at "+e+" failed: "+g);const E=Xn(r.serverSyncTree_,f,!y),R=E.length>0?Ei(r,e):e;Yt(r.eventQueue_,R,E),Bc(r,s,g,v)}),Ze(n,g=>{const v=Md(r,De(e,g));Ei(r,v)}),Yt(r.eventQueue_,e,[])}}function oT(r){ql(r,"onDisconnectEvents");const e=Gl(r),n=yl();Dc(r.onDisconnect_,de(),(l,u)=>{const d=V_(l,u,r.serverSyncTree_,e);k_(n,l,d)});let s=[];Dc(n,de(),(l,u)=>{s=s.concat(Wl(r.serverSyncTree_,l,u));const d=Md(r,l);Ei(r,d)}),r.onDisconnect_=yl(),Yt(r.eventQueue_,de(),s)}function lT(r,e,n){let s;te(e._path)===".info"?s=qm(r.infoSyncTree_,e,n):s=qm(r.serverSyncTree_,e,n),X_(r.eventQueue_,e._path,s)}function aT(r,e,n){let s;te(e._path)===".info"?s=zc(r.infoSyncTree_,e,n):s=zc(r.serverSyncTree_,e,n),X_(r.eventQueue_,e._path,s)}function uT(r){r.persistentConnection_&&r.persistentConnection_.interrupt(JC)}function ql(r,...e){let n="";r.persistentConnection_&&(n=r.persistentConnection_.id+":"),Je(n,...e)}function Bc(r,e,n,s){e&&Ti(()=>{if(n==="ok")e(null);else{const l=(n||"error").toUpperCase();let u=l;s&&(u+=": "+s);const d=new Error(u);d.code=l,e(d)}})}function Z_(r,e,n){return Sd(r.serverSyncTree_,e,n)||K.EMPTY_NODE}function Ld(r,e=r.transactionQueueTree_){if(e||Kl(r,e),Ri(e)){const n=ty(r,e);D(n.length>0,"Sending zero length transaction queue"),n.every(l=>l.status===0)&&cT(r,zs(e),n)}else G_(e)&&Vl(e,n=>{Ld(r,n)})}function cT(r,e,n){const s=n.map(g=>g.currentWriteId),l=Z_(r,e,s);let u=l;const d=l.hash();for(let g=0;g<n.length;g++){const v=n[g];D(v.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),v.status=1,v.retryCount++;const y=gt(e,v.path);u=u.updateChild(y,v.currentOutputSnapshotRaw)}const f=u.val(!0),p=e;r.server_.put(p.toString(),f,g=>{ql(r,"transaction put response",{path:p.toString(),status:g});let v=[];if(g==="ok"){const y=[];for(let E=0;E<n.length;E++)n[E].status=2,v=v.concat(Xn(r.serverSyncTree_,n[E].currentWriteId)),n[E].onComplete&&y.push(()=>n[E].onComplete(null,!0,n[E].currentOutputSnapshotResolved)),n[E].unwatcher();Kl(r,Ad(r.transactionQueueTree_,e)),Ld(r,r.transactionQueueTree_),Yt(r.eventQueue_,e,v);for(let E=0;E<y.length;E++)Ti(y[E])}else{if(g==="datastale")for(let y=0;y<n.length;y++)n[y].status===3?n[y].status=4:n[y].status=0;else{lt("transaction at "+p.toString()+" failed: "+g);for(let y=0;y<n.length;y++)n[y].status=4,n[y].abortReason=g}Ei(r,e)}},d)}function Ei(r,e){const n=ey(r,e),s=zs(n),l=ty(r,n);return dT(r,l,s),s}function dT(r,e,n){if(e.length===0)return;const s=[];let l=[];const d=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const p=e[f],g=gt(n,p.path);let v=!1,y;if(D(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)v=!0,y=p.abortReason,l=l.concat(Xn(r.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=ZC)v=!0,y="maxretry",l=l.concat(Xn(r.serverSyncTree_,p.currentWriteId,!0));else{const E=Z_(r,p.path,d);p.currentInputSnapshot=E;const R=e[f].update(E.val());if(R!==void 0){Hl("transaction failed: Data returned ",R,p.path);let L=qe(R);typeof R=="object"&&R!=null&&an(R,".priority")||(L=L.updatePriority(E.getPriority()));const V=p.currentWriteId,pe=Gl(r),me=H_(L,E,pe);p.currentOutputSnapshotRaw=L,p.currentOutputSnapshotResolved=me,p.currentWriteId=Dd(r),d.splice(d.indexOf(V),1),l=l.concat(j_(r.serverSyncTree_,p.path,me,p.currentWriteId,p.applyLocally)),l=l.concat(Xn(r.serverSyncTree_,V,!0))}else v=!0,y="nodata",l=l.concat(Xn(r.serverSyncTree_,p.currentWriteId,!0))}Yt(r.eventQueue_,n,l),l=[],v&&(e[f].status=2,function(E){setTimeout(E,Math.floor(0))}(e[f].unwatcher),e[f].onComplete&&(y==="nodata"?s.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):s.push(()=>e[f].onComplete(new Error(y),!1,null))))}Kl(r,r.transactionQueueTree_);for(let f=0;f<s.length;f++)Ti(s[f]);Ld(r,r.transactionQueueTree_)}function ey(r,e){let n,s=r.transactionQueueTree_;for(n=te(e);n!==null&&Ri(s)===void 0;)s=Ad(s,n),e=Ce(e),n=te(e);return s}function ty(r,e){const n=[];return ny(r,e,n),n.sort((s,l)=>s.order-l.order),n}function ny(r,e,n){const s=Ri(e);if(s)for(let l=0;l<s.length;l++)n.push(s[l]);Vl(e,l=>{ny(r,l,n)})}function Kl(r,e){const n=Ri(e);if(n){let s=0;for(let l=0;l<n.length;l++)n[l].status!==2&&(n[s]=n[l],s++);n.length=s,$_(e,n.length>0?n:void 0)}Vl(e,s=>{Kl(r,s)})}function Md(r,e){const n=zs(ey(r,e)),s=Ad(r.transactionQueueTree_,e);return jC(s,l=>{yc(r,l)}),yc(r,s),q_(s,l=>{yc(r,l)}),n}function yc(r,e){const n=Ri(e);if(n){const s=[];let l=[],u=-1;for(let d=0;d<n.length;d++)n[d].status===3||(n[d].status===1?(D(u===d-1,"All SENT items should be at beginning of queue."),u=d,n[d].status=3,n[d].abortReason="set"):(D(n[d].status===0,"Unexpected transaction status in abort"),n[d].unwatcher(),l=l.concat(Xn(r.serverSyncTree_,n[d].currentWriteId,!0)),n[d].onComplete&&s.push(n[d].onComplete.bind(null,new Error("set"),!1,null))));u===-1?$_(e,void 0):n.length=u+1,Yt(r.eventQueue_,zs(e),l);for(let d=0;d<s.length;d++)Ti(s[d])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hT(r){let e="";const n=r.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let l=n[s];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch{}e+="/"+l}return e}function fT(r){const e={};r.charAt(0)==="?"&&(r=r.substring(1));for(const n of r.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):lt(`Invalid query segment '${n}' in query '${r}'`)}return e}const Xm=function(r,e){const n=pT(r),s=n.namespace;n.domain==="firebase.com"&&Cn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Cn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||ES();const l=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new u_(n.host,n.secure,s,l,e,"",s!==n.subdomain),path:new ve(n.pathString)}},pT=function(r){let e="",n="",s="",l="",u="",d=!0,f="https",p=443;if(typeof r=="string"){let g=r.indexOf("//");g>=0&&(f=r.substring(0,g-1),r=r.substring(g+2));let v=r.indexOf("/");v===-1&&(v=r.length);let y=r.indexOf("?");y===-1&&(y=r.length),e=r.substring(0,Math.min(v,y)),v<y&&(l=hT(r.substring(v,y)));const E=fT(r.substring(Math.min(r.length,y)));g=e.indexOf(":"),g>=0?(d=f==="https"||f==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const R=e.slice(0,g);if(R.toLowerCase()==="localhost")n="localhost";else if(R.split(".").length<=2)n=R;else{const L=e.indexOf(".");s=e.substring(0,L).toLowerCase(),n=e.substring(L+1),u=s}"ns"in E&&(u=E.ns)}return{host:e,port:p,domain:n,subdomain:s,secure:d,scheme:f,pathString:l,namespace:u}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(e,n,s,l){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=l}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ke(this.snapshot.exportVal())}}class gT{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return D(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e,n,s,l){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=l}get key(){return ie(this._path)?null:ad(this._path)}get ref(){return new sr(this._repo,this._path)}get _queryIdentifier(){const e=bm(this._queryParams),n=id(e);return n==="{}"?"default":n}get _queryObject(){return bm(this._queryParams)}isEqual(e){if(e=Rt(e),!(e instanceof bd))return!1;const n=this._repo===e._repo,s=ud(this._path,e._path),l=this._queryIdentifier===e._queryIdentifier;return n&&s&&l}toJSON(){return this.toString()}toString(){return this._repo.toString()+iI(this._path)}}class sr extends bd{constructor(e,n){super(e,n,new fd,!1)}get parent(){const e=y_(this._path);return e===null?null:new sr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class kl{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ve(e),s=Vc(this.ref,e);return new kl(this._node.getChild(n),s,Le)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,l)=>e(new kl(l,Vc(this.ref,s),Le)))}hasChild(e){const n=new ve(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Yl(r,e){return r=Rt(r),r._checkNotDeleted("ref"),e!==void 0?Vc(r._root,e):r._root}function Vc(r,e){return r=Rt(r),te(r._path)===null?KC("child","path",e):Y_("child","path",e),new sr(r._repo,De(r._path,e))}function yT(r){return Q_("remove",r._path),ry(r,null)}function ry(r,e){r=Rt(r),Q_("set",r._path),$C("set",e,r._path);const n=new bs;return iT(r._repo,r._path,e,null,n.wrapCallback(()=>{})),n.promise}function vT(r,e){qC("update",e,r._path);const n=new bs;return sT(r._repo,r._path,e,n.wrapCallback(()=>{})),n.promise}class Fd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new mT("value",this,new kl(e.snapshotNode,new sr(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new gT(this,e,n):null}matches(e){return e instanceof Fd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function wT(r,e,n,s,l){const u=new _T(n,void 0),d=new Fd(u);return lT(r._repo,r,d),()=>aT(r._repo,r,d)}function ET(r,e,n,s){return wT(r,"value",e)}gC(sr);SC(sr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ST="FIREBASE_DATABASE_EMULATOR_HOST",Hc={};let IT=!1;function CT(r,e,n,s){r.repoInfo_=new u_(`${e}:${n}`,!1,r.repoInfo_.namespace,r.repoInfo_.webSocketOnly,r.repoInfo_.nodeAdmin,r.repoInfo_.persistenceKey,r.repoInfo_.includeNamespaceInQueryParams,!0),s&&(r.authTokenProvider_=s)}function TT(r,e,n,s,l){let u=s||r.options.databaseURL;u===void 0&&(r.options.projectId||Cn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Je("Using default host for project ",r.options.projectId),u=`${r.options.projectId}-default-rtdb.firebaseio.com`);let d=Xm(u,l),f=d.repoInfo,p;typeof process<"u"&&ym&&(p=ym[ST]),p?(u=`http://${p}?ns=${f.namespace}`,d=Xm(u,l),f=d.repoInfo):d.repoInfo.secure;const g=new xS(r.name,r.options,e);YC("Invalid Firebase Database URL",d),ie(d.path)||Cn("Database URL must point to the root of a Firebase Database (not including a child path).");const v=RT(f,r,g,new OS(r.name,n));return new NT(v,r)}function kT(r,e){const n=Hc[e];(!n||n[r.key]!==r)&&Cn(`Database ${e}(${r.repoInfo_}) has already been deleted.`),uT(r),delete n[r.key]}function RT(r,e,n,s){let l=Hc[e.name];l||(l={},Hc[e.name]=l);let u=l[r.toURLString()];return u&&Cn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),u=new eT(r,IT,n,s),l[r.toURLString()]=u,u}class NT{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(tT(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new sr(this._repo,de())),this._rootInternal}_delete(){return this._rootInternal!==null&&(kT(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Cn("Cannot call "+e+" on a deleted database.")}}function PT(r=nd(),e){const n=xr(r,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=H0("database");s&&AT(n,...s)}return n}function AT(r,e,n,s={}){r=Rt(r),r._checkNotDeleted("useEmulator"),r._instanceStarted&&Cn("Cannot call useEmulator() after instance has already been initialized.");const l=r._repoInternal;let u;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&Cn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new sl(sl.OWNER);else if(s.mockUserToken){const d=typeof s.mockUserToken=="string"?s.mockUserToken:$0(s.mockUserToken,r.app.options.projectId);u=new sl(d)}CT(l,e,n,u)}/**
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
 */function OT(r){mS(Ci),on(new Kt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("auth-internal"),u=e.getProvider("app-check-internal");return TT(s,l,u,n)},"PUBLIC").setMultipleInstances(!0)),bt(vm,wm,r),bt(vm,wm,"esm2017")}Sn.prototype.simpleListen=function(r,e){this.sendRequest("q",{p:r},e)};Sn.prototype.echo=function(r,e){this.sendRequest("echo",{d:r},e)};OT();var xT="firebase",DT="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bt(xT,DT,"app");const iy="@firebase/installations",Ud="0.6.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy=1e4,oy=`w:${Ud}`,ly="FIS_v2",LT="https://firebaseinstallations.googleapis.com/v1",MT=60*60*1e3,bT="installations",FT="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Nr=new Or(bT,FT,UT);function ay(r){return r instanceof ln&&r.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uy({projectId:r}){return`${LT}/projects/${r}/installations`}function cy(r){return{token:r.token,requestStatus:2,expiresIn:zT(r.expiresIn),creationTime:Date.now()}}async function dy(r,e){const s=(await e.json()).error;return Nr.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function hy({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function jT(r,{refreshToken:e}){const n=hy(r);return n.append("Authorization",WT(e)),n}async function fy(r){const e=await r();return e.status>=500&&e.status<600?r():e}function zT(r){return Number(r.replace("s","000"))}function WT(r){return`${ly} ${r}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BT({appConfig:r,heartbeatServiceProvider:e},{fid:n}){const s=uy(r),l=hy(r),u=e.getImmediate({optional:!0});if(u){const g=await u.getHeartbeatsHeader();g&&l.append("x-firebase-client",g)}const d={fid:n,authVersion:ly,appId:r.appId,sdkVersion:oy},f={method:"POST",headers:l,body:JSON.stringify(d)},p=await fy(()=>fetch(s,f));if(p.ok){const g=await p.json();return{fid:g.fid||n,registrationStatus:2,refreshToken:g.refreshToken,authToken:cy(g.authToken)}}else throw await dy("Create Installation",p)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function py(r){return new Promise(e=>{setTimeout(e,r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VT(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT=/^[cdef][\w-]{21}$/,$c="";function $T(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=GT(r);return HT.test(n)?n:$c}catch{return $c}}function GT(r){return VT(r).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const my=new Map;function gy(r,e){const n=Ql(r);_y(n,e),qT(n,e)}function _y(r,e){const n=my.get(r);if(n)for(const s of n)s(e)}function qT(r,e){const n=KT();n&&n.postMessage({key:r,fid:e}),YT()}let Ir=null;function KT(){return!Ir&&"BroadcastChannel"in self&&(Ir=new BroadcastChannel("[Firebase] FID Change"),Ir.onmessage=r=>{_y(r.data.key,r.data.fid)}),Ir}function YT(){my.size===0&&Ir&&(Ir.close(),Ir=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT="firebase-installations-database",XT=1,Pr="firebase-installations-store";let vc=null;function jd(){return vc||(vc=$g(QT,XT,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(Pr)}}})),vc}async function Rl(r,e){const n=Ql(r),l=(await jd()).transaction(Pr,"readwrite"),u=l.objectStore(Pr),d=await u.get(n);return await u.put(e,n),await l.done,(!d||d.fid!==e.fid)&&gy(r,e.fid),e}async function yy(r){const e=Ql(r),s=(await jd()).transaction(Pr,"readwrite");await s.objectStore(Pr).delete(e),await s.done}async function Xl(r,e){const n=Ql(r),l=(await jd()).transaction(Pr,"readwrite"),u=l.objectStore(Pr),d=await u.get(n),f=e(d);return f===void 0?await u.delete(n):await u.put(f,n),await l.done,f&&(!d||d.fid!==f.fid)&&gy(r,f.fid),f}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zd(r){let e;const n=await Xl(r.appConfig,s=>{const l=JT(s),u=ZT(r,l);return e=u.registrationPromise,u.installationEntry});return n.fid===$c?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function JT(r){const e=r||{fid:$T(),registrationStatus:0};return vy(e)}function ZT(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const l=Promise.reject(Nr.create("app-offline"));return{installationEntry:e,registrationPromise:l}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=ek(r,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:tk(r)}:{installationEntry:e}}async function ek(r,e){try{const n=await BT(r,e);return Rl(r.appConfig,n)}catch(n){throw ay(n)&&n.customData.serverCode===409?await yy(r.appConfig):await Rl(r.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function tk(r){let e=await Jm(r.appConfig);for(;e.registrationStatus===1;)await py(100),e=await Jm(r.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await zd(r);return s||n}return e}function Jm(r){return Xl(r,e=>{if(!e)throw Nr.create("installation-not-found");return vy(e)})}function vy(r){return nk(r)?{fid:r.fid,registrationStatus:0}:r}function nk(r){return r.registrationStatus===1&&r.registrationTime+sy<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rk({appConfig:r,heartbeatServiceProvider:e},n){const s=ik(r,n),l=jT(r,n),u=e.getImmediate({optional:!0});if(u){const g=await u.getHeartbeatsHeader();g&&l.append("x-firebase-client",g)}const d={installation:{sdkVersion:oy,appId:r.appId}},f={method:"POST",headers:l,body:JSON.stringify(d)},p=await fy(()=>fetch(s,f));if(p.ok){const g=await p.json();return cy(g)}else throw await dy("Generate Auth Token",p)}function ik(r,{fid:e}){return`${uy(r)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wd(r,e=!1){let n;const s=await Xl(r.appConfig,u=>{if(!wy(u))throw Nr.create("not-registered");const d=u.authToken;if(!e&&lk(d))return u;if(d.requestStatus===1)return n=sk(r,e),u;{if(!navigator.onLine)throw Nr.create("app-offline");const f=uk(u);return n=ok(r,f),f}});return n?await n:s.authToken}async function sk(r,e){let n=await Zm(r.appConfig);for(;n.authToken.requestStatus===1;)await py(100),n=await Zm(r.appConfig);const s=n.authToken;return s.requestStatus===0?Wd(r,e):s}function Zm(r){return Xl(r,e=>{if(!wy(e))throw Nr.create("not-registered");const n=e.authToken;return ck(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function ok(r,e){try{const n=await rk(r,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Rl(r.appConfig,s),n}catch(n){if(ay(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await yy(r.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Rl(r.appConfig,s)}throw n}}function wy(r){return r!==void 0&&r.registrationStatus===2}function lk(r){return r.requestStatus===2&&!ak(r)}function ak(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+MT}function uk(r){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:e})}function ck(r){return r.requestStatus===1&&r.requestTime+sy<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dk(r){const e=r,{installationEntry:n,registrationPromise:s}=await zd(e);return s?s.catch(console.error):Wd(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hk(r,e=!1){const n=r;return await fk(n),(await Wd(n,e)).token}async function fk(r){const{registrationPromise:e}=await zd(r);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pk(r){if(!r||!r.options)throw wc("App Configuration");if(!r.name)throw wc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!r.options[n])throw wc(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function wc(r){return Nr.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey="installations",mk="installations-internal",gk=r=>{const e=r.getProvider("app").getImmediate(),n=pk(e),s=xr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},_k=r=>{const e=r.getProvider("app").getImmediate(),n=xr(e,Ey).getImmediate();return{getId:()=>dk(n),getToken:l=>hk(n,l)}};function yk(){on(new Kt(Ey,gk,"PUBLIC")),on(new Kt(mk,_k,"PRIVATE"))}yk();bt(iy,Ud);bt(iy,Ud,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl="analytics",vk="firebase_id",wk="origin",Ek=60*1e3,Sk="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Bd="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt=new Fl("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ik={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},kt=new Or("analytics","Analytics",Ik);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ck(r){if(!r.startsWith(Bd)){const e=kt.create("invalid-gtag-resource",{gtagURL:r});return yt.warn(e.message),""}return r}function Sy(r){return Promise.all(r.map(e=>e.catch(n=>n)))}function Tk(r,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,e)),n}function kk(r,e){const n=Tk("firebase-js-sdk-policy",{createScriptURL:Ck}),s=document.createElement("script"),l=`${Bd}?l=${r}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(l):l,s.async=!0,document.head.appendChild(s)}function Rk(r){let e=[];return Array.isArray(window[r])?e=window[r]:window[r]=e,e}async function Nk(r,e,n,s,l,u){const d=s[l];try{if(d)await e[d];else{const p=(await Sy(n)).find(g=>g.measurementId===l);p&&await e[p.appId]}}catch(f){yt.error(f)}r("config",l,u)}async function Pk(r,e,n,s,l){try{let u=[];if(l&&l.send_to){let d=l.send_to;Array.isArray(d)||(d=[d]);const f=await Sy(n);for(const p of d){const g=f.find(y=>y.measurementId===p),v=g&&e[g.appId];if(v)u.push(v);else{u=[];break}}}u.length===0&&(u=Object.values(e)),await Promise.all(u),r("event",s,l||{})}catch(u){yt.error(u)}}function Ak(r,e,n,s){async function l(u,...d){try{if(u==="event"){const[f,p]=d;await Pk(r,e,n,f,p)}else if(u==="config"){const[f,p]=d;await Nk(r,e,n,s,f,p)}else if(u==="consent"){const[f,p]=d;r("consent",f,p)}else if(u==="get"){const[f,p,g]=d;r("get",f,p,g)}else if(u==="set"){const[f]=d;r("set",f)}else r(u,...d)}catch(f){yt.error(f)}}return l}function Ok(r,e,n,s,l){let u=function(...d){window[s].push(arguments)};return window[l]&&typeof window[l]=="function"&&(u=window[l]),window[l]=Ak(u,r,e,n),{gtagCore:u,wrappedGtag:window[l]}}function xk(r){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Bd)&&n.src.includes(r))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dk=30,Lk=1e3;class Mk{constructor(e={},n=Lk){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Iy=new Mk;function bk(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function Fk(r){var e;const{appId:n,apiKey:s}=r,l={method:"GET",headers:bk(s)},u=Sk.replace("{app-id}",n),d=await fetch(u,l);if(d.status!==200&&d.status!==304){let f="";try{const p=await d.json();!((e=p.error)===null||e===void 0)&&e.message&&(f=p.error.message)}catch{}throw kt.create("config-fetch-failed",{httpStatus:d.status,responseMessage:f})}return d.json()}async function Uk(r,e=Iy,n){const{appId:s,apiKey:l,measurementId:u}=r.options;if(!s)throw kt.create("no-app-id");if(!l){if(u)return{measurementId:u,appId:s};throw kt.create("no-api-key")}const d=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},f=new Wk;return setTimeout(async()=>{f.abort()},Ek),Cy({appId:s,apiKey:l,measurementId:u},d,f,e)}async function Cy(r,{throttleEndTimeMillis:e,backoffCount:n},s,l=Iy){var u;const{appId:d,measurementId:f}=r;try{await jk(s,e)}catch(p){if(f)return yt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:d,measurementId:f};throw p}try{const p=await Fk(r);return l.deleteThrottleMetadata(d),p}catch(p){const g=p;if(!zk(g)){if(l.deleteThrottleMetadata(d),f)return yt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:d,measurementId:f};throw p}const v=Number((u=g==null?void 0:g.customData)===null||u===void 0?void 0:u.httpStatus)===503?um(n,l.intervalMillis,Dk):um(n,l.intervalMillis),y={throttleEndTimeMillis:Date.now()+v,backoffCount:n+1};return l.setThrottleMetadata(d,y),yt.debug(`Calling attemptFetch again in ${v} millis`),Cy(r,y,s,l)}}function jk(r,e){return new Promise((n,s)=>{const l=Math.max(e-Date.now(),0),u=setTimeout(n,l);r.addEventListener(()=>{clearTimeout(u),s(kt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function zk(r){if(!(r instanceof ln)||!r.customData)return!1;const e=Number(r.customData.httpStatus);return e===429||e===500||e===503||e===504}class Wk{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Bk(r,e,n,s,l){if(l&&l.global){r("event",n,s);return}else{const u=await e,d=Object.assign(Object.assign({},s),{send_to:u});r("event",n,d)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vk(){if(zg())try{await Wg()}catch(r){return yt.warn(kt.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return yt.warn(kt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Hk(r,e,n,s,l,u,d){var f;const p=Uk(r);p.then(R=>{n[R.measurementId]=R.appId,r.options.measurementId&&R.measurementId!==r.options.measurementId&&yt.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${R.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(R=>yt.error(R)),e.push(p);const g=Vk().then(R=>{if(R)return s.getId()}),[v,y]=await Promise.all([p,g]);xk(u)||kk(u,v.measurementId),l("js",new Date);const E=(f=d==null?void 0:d.config)!==null&&f!==void 0?f:{};return E[wk]="firebase",E.update=!0,y!=null&&(E[vk]=y),l("config",v.measurementId,E),v.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(e){this.app=e}_delete(){return delete Cs[this.app.options.appId],Promise.resolve()}}let Cs={},eg=[];const tg={};let Ec="dataLayer",Gk="gtag",ng,Ty,rg=!1;function qk(){const r=[];if(Fg()&&r.push("This is a browser extension environment."),K0()||r.push("Cookies are not available."),r.length>0){const e=r.map((s,l)=>`(${l+1}) ${s}`).join(" "),n=kt.create("invalid-analytics-context",{errorInfo:e});yt.warn(n.message)}}function Kk(r,e,n){qk();const s=r.options.appId;if(!s)throw kt.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)yt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw kt.create("no-api-key");if(Cs[s]!=null)throw kt.create("already-exists",{id:s});if(!rg){Rk(Ec);const{wrappedGtag:u,gtagCore:d}=Ok(Cs,eg,tg,Ec,Gk);Ty=u,ng=d,rg=!0}return Cs[s]=Hk(r,eg,tg,e,ng,Ec,n),new $k(r)}function Yk(r=nd()){r=Rt(r);const e=xr(r,Nl);return e.isInitialized()?e.getImmediate():Qk(r)}function Qk(r,e={}){const n=xr(r,Nl);if(n.isInitialized()){const l=n.getImmediate();if(Rs(e,n.getOptions()))return l;throw kt.create("already-initialized")}return n.initialize({options:e})}function Xk(r,e,n,s){r=Rt(r),Bk(Ty,Cs[r.app.options.appId],e,n,s).catch(l=>yt.error(l))}const ig="@firebase/analytics",sg="0.10.10";function Jk(){on(new Kt(Nl,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("installations-internal").getImmediate();return Kk(s,l,n)},"PUBLIC")),on(new Kt("analytics-internal",r,"PRIVATE")),bt(ig,sg),bt(ig,sg,"esm2017");function r(e){try{const n=e.getProvider(Nl).getImmediate();return{logEvent:(s,l,u)=>Xk(n,s,l,u)}}catch(n){throw kt.create("interop-component-reg-failed",{reason:n})}}}Jk();function Vd(r,e){var n={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(n[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(r);l<s.length;l++)e.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(r,s[l])&&(n[s[l]]=r[s[l]]);return n}function ky(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Zk=ky,Ry=new Or("auth","Firebase",ky());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl=new Fl("@firebase/auth");function e1(r,...e){Pl.logLevel<=_e.WARN&&Pl.warn(`Auth (${Ci}): ${r}`,...e)}function ol(r,...e){Pl.logLevel<=_e.ERROR&&Pl.error(`Auth (${Ci}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(r,...e){throw Hd(r,...e)}function rn(r,...e){return Hd(r,...e)}function Ny(r,e,n){const s=Object.assign(Object.assign({},Zk()),{[e]:n});return new Or("auth","Firebase",s).create(e,{appName:r.name})}function tr(r){return Ny(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Hd(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return Ry.create(r,...e)}function X(r,e,...n){if(!r)throw Hd(e,...n)}function vn(r){const e="INTERNAL ASSERTION FAILED: "+r;throw ol(e),new Error(e)}function kn(r,e){r||vn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function t1(){return og()==="http:"||og()==="https:"}function og(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(t1()||Fg()||"connection"in navigator)?navigator.onLine:!0}function r1(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e,n){this.shortDelay=e,this.longDelay=n,kn(n>e,"Short delay should be less than long delay!"),this.isMobile=ed()||Ug()}get(){return n1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Py{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s1=new Ws(3e4,6e4);function Jl(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Ni(r,e,n,s,l={}){return Ay(r,l,async()=>{let u={},d={};s&&(e==="GET"?d=s:u={body:JSON.stringify(s)});const f=Ii(Object.assign({key:r.config.apiKey},d)).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const g=Object.assign({method:e,headers:p},u);return G0()||(g.referrerPolicy="no-referrer"),Py.fetch()(xy(r,r.config.apiHost,n,f),g)})}async function Ay(r,e,n){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},i1),e);try{const l=new o1(r),u=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const d=await u.json();if("needConfirmation"in d)throw il(r,"account-exists-with-different-credential",d);if(u.ok&&!("errorMessage"in d))return d;{const f=u.ok?d.errorMessage:d.error.message,[p,g]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw il(r,"credential-already-in-use",d);if(p==="EMAIL_EXISTS")throw il(r,"email-already-in-use",d);if(p==="USER_DISABLED")throw il(r,"user-disabled",d);const v=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw Ny(r,v,g);Tn(r,v)}}catch(l){if(l instanceof ln)throw l;Tn(r,"network-request-failed",{message:String(l)})}}async function Oy(r,e,n,s,l={}){const u=await Ni(r,e,n,s,l);return"mfaPendingCredential"in u&&Tn(r,"multi-factor-auth-required",{_serverResponse:u}),u}function xy(r,e,n,s){const l=`${e}${n}?${s}`;return r.config.emulator?$d(r.config,l):`${r.config.apiScheme}://${l}`}class o1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(rn(this.auth,"network-request-failed")),s1.get())})}}function il(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const l=rn(r,e,s);return l.customData._tokenResponse=n,l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l1(r,e){return Ni(r,"POST","/v1/accounts:delete",e)}async function Dy(r,e){return Ni(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function a1(r,e=!1){const n=Rt(r),s=await n.getIdToken(e),l=Gd(s);X(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const u=typeof l.firebase=="object"?l.firebase:void 0,d=u==null?void 0:u.sign_in_provider;return{claims:l,token:s,authTime:Ts(Sc(l.auth_time)),issuedAtTime:Ts(Sc(l.iat)),expirationTime:Ts(Sc(l.exp)),signInProvider:d||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Sc(r){return Number(r)*1e3}function Gd(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return ol("JWT malformed, contained fewer than 3 sections"),null;try{const l=dl(n);return l?JSON.parse(l):(ol("Failed to decode base64 JWT payload"),null)}catch(l){return ol("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function lg(r){const e=Gd(r);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ms(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof ln&&u1(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function u1({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const l=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,l)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function Al(r){var e;const n=r.auth,s=await r.getIdToken(),l=await Ms(r,Dy(n,{idToken:s}));X(l==null?void 0:l.users.length,n,"internal-error");const u=l.users[0];r._notifyReloadListener(u);const d=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?Ly(u.providerUserInfo):[],f=h1(r.providerData,d),p=r.isAnonymous,g=!(r.email&&u.passwordHash)&&!(f!=null&&f.length),v=p?g:!1,y={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:f,metadata:new qc(u.createdAt,u.lastLoginAt),isAnonymous:v};Object.assign(r,y)}async function d1(r){const e=Rt(r);await Al(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function h1(r,e){return[...r.filter(s=>!e.some(l=>l.providerId===s.providerId)),...e]}function Ly(r){return r.map(e=>{var{providerId:n}=e,s=Vd(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f1(r,e){const n=await Ay(r,{},async()=>{const s=Ii({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:u}=r.config,d=xy(r,l,"/v1/token",`key=${u}`),f=await r._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",Py.fetch()(d,{method:"POST",headers:f,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function p1(r,e){return Ni(r,"POST","/v2/accounts:revokeToken",Jl(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):lg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=lg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:l,expiresIn:u}=await f1(e,n);this.updateTokensAndExpiration(s,l,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:l,expirationTime:u}=n,d=new fi;return s&&(X(typeof s=="string","internal-error",{appName:e}),d.refreshToken=s),l&&(X(typeof l=="string","internal-error",{appName:e}),d.accessToken=l),u&&(X(typeof u=="number","internal-error",{appName:e}),d.expirationTime=u),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fi,this.toJSON())}_performRefresh(){return vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(r,e){X(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class wn{constructor(e){var{uid:n,auth:s,stsTokenManager:l}=e,u=Vd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new c1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=l,this.accessToken=l.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new qc(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const n=await Ms(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return a1(this,e)}reload(){return d1(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new wn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Al(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_n(this.auth.app))return Promise.reject(tr(this.auth));const e=await this.getIdToken();return await Ms(this,l1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,l,u,d,f,p,g,v;const y=(s=n.displayName)!==null&&s!==void 0?s:void 0,E=(l=n.email)!==null&&l!==void 0?l:void 0,R=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,L=(d=n.photoURL)!==null&&d!==void 0?d:void 0,M=(f=n.tenantId)!==null&&f!==void 0?f:void 0,V=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,pe=(g=n.createdAt)!==null&&g!==void 0?g:void 0,me=(v=n.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:ge,emailVerified:le,isAnonymous:Ue,providerData:Z,stsTokenManager:Q}=n;X(ge&&Q,e,"internal-error");const se=fi.fromJSON(this.name,Q);X(typeof ge=="string",e,"internal-error"),Gn(y,e.name),Gn(E,e.name),X(typeof le=="boolean",e,"internal-error"),X(typeof Ue=="boolean",e,"internal-error"),Gn(R,e.name),Gn(L,e.name),Gn(M,e.name),Gn(V,e.name),Gn(pe,e.name),Gn(me,e.name);const We=new wn({uid:ge,auth:e,email:E,emailVerified:le,displayName:y,isAnonymous:Ue,photoURL:L,phoneNumber:R,tenantId:M,stsTokenManager:se,createdAt:pe,lastLoginAt:me});return Z&&Array.isArray(Z)&&(We.providerData=Z.map(it=>Object.assign({},it))),V&&(We._redirectEventId=V),We}static async _fromIdTokenResponse(e,n,s=!1){const l=new fi;l.updateFromServerResponse(n);const u=new wn({uid:n.localId,auth:e,stsTokenManager:l,isAnonymous:s});return await Al(u),u}static async _fromGetAccountInfoResponse(e,n,s){const l=n.users[0];X(l.localId!==void 0,"internal-error");const u=l.providerUserInfo!==void 0?Ly(l.providerUserInfo):[],d=!(l.email&&l.passwordHash)&&!(u!=null&&u.length),f=new fi;f.updateFromIdToken(s);const p=new wn({uid:l.localId,auth:e,stsTokenManager:f,isAnonymous:d}),g={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:u,metadata:new qc(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(u!=null&&u.length)};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class My{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}My.type="NONE";const ug=My;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(r,e,n){return`firebase:${r}:${e}:${n}`}class pi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:l,name:u}=this.auth;this.fullUserKey=ll(this.userKey,l.apiKey,u),this.fullPersistenceKey=ll("persistence",l.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?wn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new pi(En(ug),e,s);const l=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=l[0]||En(ug);const d=ll(s,e.config.apiKey,e.name);let f=null;for(const g of n)try{const v=await g._get(d);if(v){const y=wn._fromJSON(e,v);g!==u&&(f=y),u=g;break}}catch{}const p=l.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new pi(u,e,s):(u=p[0],f&&await u._set(d,f.toJSON()),await Promise.all(n.map(async g=>{if(g!==u)try{await g._remove(d)}catch{}})),new pi(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(jy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(by(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Wy(e))return"Blackberry";if(By(e))return"Webos";if(Fy(e))return"Safari";if((e.includes("chrome/")||Uy(e))&&!e.includes("edge/"))return"Chrome";if(zy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function by(r=at()){return/firefox\//i.test(r)}function Fy(r=at()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Uy(r=at()){return/crios\//i.test(r)}function jy(r=at()){return/iemobile/i.test(r)}function zy(r=at()){return/android/i.test(r)}function Wy(r=at()){return/blackberry/i.test(r)}function By(r=at()){return/webos/i.test(r)}function qd(r=at()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function m1(r=at()){var e;return qd(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function g1(){return q0()&&document.documentMode===10}function Vy(r=at()){return qd(r)||zy(r)||By(r)||Wy(r)||/windows phone/i.test(r)||jy(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hy(r,e=[]){let n;switch(r){case"Browser":n=cg(at());break;case"Worker":n=`${cg(at())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ci}/${s}`}/**
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
 */class _1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=u=>new Promise((d,f)=>{try{const p=e(u);d(p)}catch(p){f(p)}});s.onAbort=n,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const l of n)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function y1(r,e={}){return Ni(r,"GET","/v2/passwordPolicy",Jl(r,e))}/**
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
 */const v1=6;class w1{constructor(e){var n,s,l,u;const d=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=d.minPasswordLength)!==null&&n!==void 0?n:v1,d.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=d.maxPasswordLength),d.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=d.containsLowercaseCharacter),d.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=d.containsUppercaseCharacter),d.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=d.containsNumericCharacter),d.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=d.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(l=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&l!==void 0?l:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,l,u,d,f;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(n=p.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(l=p.containsLowercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(u=p.containsUppercaseLetter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(d=p.containsNumericCharacter)!==null&&d!==void 0?d:!0),p.isValid&&(p.isValid=(f=p.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),p}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),l&&(n.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let l=0;l<e.length;l++)s=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,l,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(e,n,s,l){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dg(this),this.idTokenSubscription=new dg(this),this.beforeStateQueue=new _1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ry,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=En(n)),this._initializationPromise=this.queue(async()=>{var s,l;if(!this._deleted&&(this.persistenceManager=await pi.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Dy(this,{idToken:e}),s=await wn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(_n(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let l=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,f=l==null?void 0:l._redirectEventId,p=await this.tryRedirectSignIn(e);(!d||d===f)&&(p!=null&&p.user)&&(l=p.user,u=!0)}if(!l)return this.directlySetCurrentUser(null);if(!l._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(l)}catch(d){l=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return l?this.reloadAndSetCurrentUserOrClear(l):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===l._redirectEventId?this.directlySetCurrentUser(l):this.reloadAndSetCurrentUserOrClear(l)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Al(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=r1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(_n(this.app))return Promise.reject(tr(this));const n=e?Rt(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return _n(this.app)?Promise.reject(tr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return _n(this.app)?Promise.reject(tr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(En(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await y1(this),n=new w1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Or("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await p1(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&En(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await pi.create(this,[En(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,l){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let d=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(f,this,"internal-error"),f.then(()=>{d||u(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,s,l);return()=>{d=!0,p()}}else{const p=e.addObserver(n);return()=>{d=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Hy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const l=await this._getAppCheckToken();return l&&(n["X-Firebase-AppCheck"]=l),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&e1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Zl(r){return Rt(r)}class dg{constructor(e){this.auth=e,this.observer=null,this.addObserver=tE(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function S1(r){Kd=r}function I1(r){return Kd.loadJS(r)}function C1(){return Kd.gapiScript}function T1(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k1(r,e){const n=xr(r,"auth");if(n.isInitialized()){const l=n.getImmediate(),u=n.getOptions();if(Rs(u,e??{}))return l;Tn(l,"already-initialized")}return n.initialize({options:e})}function R1(r,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(En);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function N1(r,e,n){const s=Zl(r);X(s._canInitEmulator,s,"emulator-config-failed"),X(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const l=!1,u=$y(e),{host:d,port:f}=P1(e),p=f===null?"":`:${f}`;s.config.emulator={url:`${u}//${d}${p}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:d,port:f,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:l})}),A1()}function $y(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function P1(r){const e=$y(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const u=l[1];return{host:u,port:hg(s.substr(u.length+1))}}else{const[u,d]=s.split(":");return{host:u,port:hg(d)}}}function hg(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function A1(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return vn("not implemented")}_getIdTokenResponse(e){return vn("not implemented")}_linkToIdToken(e,n){return vn("not implemented")}_getReauthenticationResolver(e){return vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mi(r,e){return Oy(r,"POST","/v1/accounts:signInWithIdp",Jl(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O1="http://localhost";class Ar extends Gy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ar(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:l}=n,u=Vd(n,["providerId","signInMethod"]);if(!s||!l)return null;const d=new Ar(s,l);return d.idToken=u.idToken||void 0,d.accessToken=u.accessToken||void 0,d.secret=u.secret,d.nonce=u.nonce,d.pendingToken=u.pendingToken||null,d}_getIdTokenResponse(e){const n=this.buildRequest();return mi(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,mi(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,mi(e,n)}buildRequest(){const e={requestUri:O1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ii(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs extends qy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends Bs{constructor(){super("facebook.com")}static credential(e){return Ar._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch{return null}}}qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";qn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends Bs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ar._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Kn.credential(n,s)}catch{return null}}}Kn.GOOGLE_SIGN_IN_METHOD="google.com";Kn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends Bs{constructor(){super("github.com")}static credential(e){return Ar._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.GITHUB_SIGN_IN_METHOD="github.com";Yn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends Bs{constructor(){super("twitter.com")}static credential(e,n){return Ar._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Qn.credential(n,s)}catch{return null}}}Qn.TWITTER_SIGN_IN_METHOD="twitter.com";Qn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x1(r,e){return Oy(r,"POST","/v1/accounts:signUp",Jl(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function D1(r){var e;if(_n(r.app))return Promise.reject(tr(r));const n=Zl(r);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new ir({user:n.currentUser,providerId:null,operationType:"signIn"});const s=await x1(n,{returnSecureToken:!0}),l=await ir._fromIdTokenResponse(n,"signIn",s,!0);return await n._updateCurrentUser(l.user),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol extends ln{constructor(e,n,s,l){var u;super(n.code,n.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,Ol.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,l){return new Ol(e,n,s,l)}}function Ky(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Ol._fromErrorAndOperation(r,u,e,s):u})}async function L1(r,e,n=!1){const s=await Ms(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return ir._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M1(r,e,n=!1){const{auth:s}=r;if(_n(s.app))return Promise.reject(tr(s));const l="reauthenticate";try{const u=await Ms(r,Ky(s,l,e,r),n);X(u.idToken,s,"internal-error");const d=Gd(u.idToken);X(d,s,"internal-error");const{sub:f}=d;return X(r.uid===f,s,"user-mismatch"),ir._forOperation(r,l,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Tn(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b1(r,e,n=!1){if(_n(r.app))return Promise.reject(tr(r));const s="signIn",l=await Ky(r,s,e),u=await ir._fromIdTokenResponse(r,s,l);return n||await r._updateCurrentUser(u.user),u}function F1(r,e,n,s){return Rt(r).onIdTokenChanged(e,n,s)}function U1(r,e,n){return Rt(r).beforeAuthStateChanged(e,n)}const xl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(xl,"1"),this.storage.removeItem(xl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1=1e3,z1=10;class Qy extends Yy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Vy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),l=this.localCache[n];s!==l&&e(n,l,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((d,f,p)=>{this.notifyListeners(d,p)});return}const s=e.key;n?this.detachListener():this.stopPolling();const l=()=>{const d=this.storage.getItem(s);!n&&this.localCache[s]===d||this.notifyListeners(s,d)},u=this.storage.getItem(s);g1()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,z1):l()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},j1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qy.type="LOCAL";const W1=Qy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy extends Yy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Xy.type="SESSION";const Jy=Xy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B1(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(l=>l.isListeningto(e));if(n)return n;const s=new ea(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:l,data:u}=n.data,d=this.handlersMap[l];if(!(d!=null&&d.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const f=Array.from(d).map(async g=>g(n.origin,u)),p=await B1(f);n.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ea.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(r="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return r+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let u,d;return new Promise((f,p)=>{const g=Yd("",20);l.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},s);d={messageChannel:l,onMessage(y){const E=y;if(E.data.eventId===g)switch(E.data.status){case"ack":clearTimeout(v),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),f(E.data.response);break;default:clearTimeout(v),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(d),l.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[l.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(){return window}function H1(r){sn().location.href=r}/**
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
 */function Zy(){return typeof sn().WorkerGlobalScope<"u"&&typeof sn().importScripts=="function"}async function $1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function G1(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function q1(){return Zy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev="firebaseLocalStorageDb",K1=1,Dl="firebaseLocalStorage",tv="fbase_key";class Vs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ta(r,e){return r.transaction([Dl],e?"readwrite":"readonly").objectStore(Dl)}function Y1(){const r=indexedDB.deleteDatabase(ev);return new Vs(r).toPromise()}function Kc(){const r=indexedDB.open(ev,K1);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Dl,{keyPath:tv})}catch(l){n(l)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Dl)?e(s):(s.close(),await Y1(),e(await Kc()))})})}async function pg(r,e,n){const s=ta(r,!0).put({[tv]:e,value:n});return new Vs(s).toPromise()}async function Q1(r,e){const n=ta(r,!1).get(e),s=await new Vs(n).toPromise();return s===void 0?null:s.value}function mg(r,e){const n=ta(r,!0).delete(e);return new Vs(n).toPromise()}const X1=800,J1=3;class nv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Kc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>J1)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ea._getInstance(q1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await $1(),!this.activeServiceWorker)return;this.sender=new V1(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||G1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Kc();return await pg(e,xl,"1"),await mg(e,xl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>pg(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Q1(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>mg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const u=ta(l,!1).getAll();return new Vs(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:l,value:u}of e)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(u)&&(this.notifyListeners(l,u),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),X1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}nv.type="LOCAL";const Z1=nv;new Ws(3e4,6e4);/**
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
 */function eR(r,e){return e?En(e):(X(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd extends Gy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return mi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return mi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return mi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function tR(r){return b1(r.auth,new Qd(r),r.bypassAuthState)}function nR(r){const{auth:e,user:n}=r;return X(n,e,"internal-error"),M1(n,new Qd(r),r.bypassAuthState)}async function rR(r){const{auth:e,user:n}=r;return X(n,e,"internal-error"),L1(n,new Qd(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e,n,s,l,u=!1){this.auth=e,this.resolver=s,this.user=l,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:l,tenantId:u,error:d,type:f}=e;if(d){this.reject(d);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tR;case"linkViaPopup":case"linkViaRedirect":return rR;case"reauthViaPopup":case"reauthViaRedirect":return nR;default:Tn(this.auth,"internal-error")}}resolve(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iR=new Ws(2e3,1e4);class ai extends rv{constructor(e,n,s,l,u){super(e,n,l,u),this.provider=s,this.authWindow=null,this.pollId=null,ai.currentPopupAction&&ai.currentPopupAction.cancel(),ai.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){kn(this.filter.length===1,"Popup operations only handle one event");const e=Yd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ai.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,iR.get())};e()}}ai.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR="pendingRedirect",al=new Map;class oR extends rv{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=al.get(this.auth._key());if(!e){try{const s=await lR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}al.set(this.auth._key(),e)}return this.bypassAuthState||al.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lR(r,e){const n=cR(e),s=uR(r);if(!await s._isAvailable())return!1;const l=await s._get(n)==="true";return await s._remove(n),l}function aR(r,e){al.set(r._key(),e)}function uR(r){return En(r._redirectPersistence)}function cR(r){return ll(sR,r.config.apiKey,r.name)}async function dR(r,e,n=!1){if(_n(r.app))return Promise.reject(tr(r));const s=Zl(r),l=eR(s,e),d=await new oR(s,l,n).execute();return d&&!n&&(delete d.user._redirectEventId,await s._persistUserIfCurrent(d.user),await s._setRedirectUser(null,e)),d}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hR=10*60*1e3;class fR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!iv(e)){const l=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(rn(this.auth,l))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hR&&this.cachedEventUids.clear(),this.cachedEventUids.has(gg(e))}saveEventToCache(e){this.cachedEventUids.add(gg(e)),this.lastProcessedEventTime=Date.now()}}function gg(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function iv({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function pR(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return iv(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mR(r,e={}){return Ni(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_R=/^https?/;async function yR(r){if(r.config.emulator)return;const{authorizedDomains:e}=await mR(r);for(const n of e)try{if(vR(n))return}catch{}Tn(r,"unauthorized-domain")}function vR(r){const e=Gc(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const d=new URL(r);return d.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&d.hostname===s}if(!_R.test(n))return!1;if(gR.test(r))return s===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
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
 */const wR=new Ws(3e4,6e4);function _g(){const r=sn().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function ER(r){return new Promise((e,n)=>{var s,l,u;function d(){_g(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_g(),n(rn(r,"network-request-failed"))},timeout:wR.get()})}if(!((l=(s=sn().gapi)===null||s===void 0?void 0:s.iframes)===null||l===void 0)&&l.Iframe)e(gapi.iframes.getContext());else if(!((u=sn().gapi)===null||u===void 0)&&u.load)d();else{const f=T1("iframefcb");return sn()[f]=()=>{gapi.load?d():n(rn(r,"network-request-failed"))},I1(`${C1()}?onload=${f}`).catch(p=>n(p))}}).catch(e=>{throw ul=null,e})}let ul=null;function SR(r){return ul=ul||ER(r),ul}/**
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
 */const IR=new Ws(5e3,15e3),CR="__/auth/iframe",TR="emulator/auth/iframe",kR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},RR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function NR(r){const e=r.config;X(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?$d(e,TR):`https://${r.config.authDomain}/${CR}`,s={apiKey:e.apiKey,appName:r.name,v:Ci},l=RR.get(r.config.apiHost);l&&(s.eid=l);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${Ii(s).slice(1)}`}async function PR(r){const e=await SR(r),n=sn().gapi;return X(n,r,"internal-error"),e.open({where:document.body,url:NR(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kR,dontclear:!0},s=>new Promise(async(l,u)=>{await s.restyle({setHideOnLeave:!1});const d=rn(r,"network-request-failed"),f=sn().setTimeout(()=>{u(d)},IR.get());function p(){sn().clearTimeout(f),l(s)}s.ping(p).then(p,()=>{u(d)})}))}/**
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
 */const AR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},OR=500,xR=600,DR="_blank",LR="http://localhost";class yg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function MR(r,e,n,s=OR,l=xR){const u=Math.max((window.screen.availHeight-l)/2,0).toString(),d=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const p=Object.assign(Object.assign({},AR),{width:s.toString(),height:l.toString(),top:u,left:d}),g=at().toLowerCase();n&&(f=Uy(g)?DR:n),by(g)&&(e=e||LR,p.scrollbars="yes");const v=Object.entries(p).reduce((E,[R,L])=>`${E}${R}=${L},`,"");if(m1(g)&&f!=="_self")return bR(e||"",f),new yg(null);const y=window.open(e||"",f,v);X(y,r,"popup-blocked");try{y.focus()}catch{}return new yg(y)}function bR(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const FR="__/auth/handler",UR="emulator/auth/handler",jR=encodeURIComponent("fac");async function vg(r,e,n,s,l,u){X(r.config.authDomain,r,"auth-domain-config-required"),X(r.config.apiKey,r,"invalid-api-key");const d={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:Ci,eventId:l};if(e instanceof qy){e.setDefaultLanguage(r.languageCode),d.providerId=e.providerId||"",Cc(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,y]of Object.entries({}))d[v]=y}if(e instanceof Bs){const v=e.getScopes().filter(y=>y!=="");v.length>0&&(d.scopes=v.join(","))}r.tenantId&&(d.tid=r.tenantId);const f=d;for(const v of Object.keys(f))f[v]===void 0&&delete f[v];const p=await r._getAppCheckToken(),g=p?`#${jR}=${encodeURIComponent(p)}`:"";return`${zR(r)}?${Ii(f).slice(1)}${g}`}function zR({config:r}){return r.emulator?$d(r,UR):`https://${r.authDomain}/${FR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic="webStorageSupport";class WR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jy,this._completeRedirectFn=dR,this._overrideRedirectResult=aR}async _openPopup(e,n,s,l){var u;kn((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const d=await vg(e,n,s,Gc(),l);return MR(e,d,Yd())}async _openRedirect(e,n,s,l){await this._originValidation(e);const u=await vg(e,n,s,Gc(),l);return H1(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:l,promise:u}=this.eventManagers[n];return l?Promise.resolve(l):(kn(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await PR(e),s=new fR(e);return n.register("authEvent",l=>(X(l==null?void 0:l.authEvent,e,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ic,{type:Ic},l=>{var u;const d=(u=l==null?void 0:l[0])===null||u===void 0?void 0:u[Ic];d!==void 0&&n(!!d),Tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=yR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Vy()||Fy()||qd()}}const BR=WR;var wg="@firebase/auth",Eg="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HR(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $R(r){on(new Kt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:d,authDomain:f}=s.options;X(d&&!d.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:d,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Hy(r)},g=new E1(s,l,u,p);return R1(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),on(new Kt("auth-internal",e=>{const n=Zl(e.getProvider("auth").getImmediate());return(s=>new VR(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),bt(wg,Eg,HR(r)),bt(wg,Eg,"esm2017")}/**
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
 */const GR=5*60,qR=bg("authIdTokenMaxAge")||GR;let Sg=null;const KR=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>qR)return;const l=n==null?void 0:n.token;Sg!==l&&(Sg=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function YR(r=nd()){const e=xr(r,"auth");if(e.isInitialized())return e.getImmediate();const n=k1(r,{popupRedirectResolver:BR,persistence:[Z1,W1,Jy]}),s=bg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const d=KR(u.toString());U1(n,d,()=>d(n.currentUser)),F1(n,f=>d(f))}}const l=Lg("auth");return l&&N1(n,`http://${l}`),n}function QR(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}S1({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=l=>{const u=rn("internal-error");u.customData=l,n(u)},s.type="text/javascript",s.charset="UTF-8",QR().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$R("Browser");const XR={apiKey:"AIzaSyB2SlnQ03tQfpjLMcleDimnz-wI6_BSXYE",authDomain:"my-multiplayer-dbf6b.firebaseapp.com",databaseURL:"https://my-multiplayer-dbf6b-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"my-multiplayer-dbf6b",storageBucket:"my-multiplayer-dbf6b.firebasestorage.app",messagingSenderId:"3902656578",appId:"1:3902656578:web:ea447bf59037a7d25b5ddb",measurementId:"G-3DVR8Y6VSM"},Xd=Gg(XR);Yk(Xd);const na=PT(Xd),Yc=YR(Xd);D1(Yc).then(()=>{console.log("Signed in anonymously")}).catch(r=>{console.error("Error signing in anonymously:",r)});const JR=(r,e)=>{const n=Yl(na,`players/${r}`);ry(n,e).then(()=>{console.log("Data written successfully!")}).catch(s=>{console.error("Error writing data:",s)})},Tt=(r,e)=>{const n=Yl(na,`players/${r}`);vT(n,e).then(()=>{console.log("Data updated successfully!")}).catch(s=>{console.error("Error updating data:",s)})},ZR=r=>{const e=Yl(na,`players/${r}`);yT(e).then(()=>{console.log("Data removed successfully!")}).catch(n=>{console.error("Error deleting data:",n)})},eN=(r,e)=>{const n=r*e,s={};for(const[f,p]of Object.entries(g0))s[f]=Math.floor(p*n);let l=[];for(const[f,p]of Object.entries(s))l=l.concat(Array(p).fill(f));for(;l.length<n;)l.push(ye.EMPTY);for(let f=l.length-1;f>0;f--){const p=Math.floor(Math.random()*(f+1));[l[f],l[p]]=[l[p],l[f]]}const u=[];let d=0;for(let f=0;f<r;f++){const p=[];for(let g=0;g<e;g++)p.push({isActive:!1,type:l[d++]});u.push(p)}return u},tN=(r,e,n,s,l)=>n==null?void 0:n.find(u=>u.x===r&&u.y===e&&u.page===s&&u.id!==l),Qc=(r,e,n,s,l,u="")=>{const d=tN(r,e,n,l,u);return d!==void 0?d:r<0||r>=s[0].length||e<0||e>=s.length?2:s[e][r]===ye.WATER?0:1},nN=(r,e,n,s,l)=>{const{x:u,y:d,id:f,page:p}=r,g=Qc(u,d,n,l,p,f);if(g!==2)switch(l[d][u]){case ye.HOME:Tt(f,{page:"home"}),e("home");break;case ye.GAME:Tt(f,{page:"forest"}),e("forest");break;case ye.FREE_WAY:Tt(f,{page:"freeway"}),e("freeway");break;case ye.SELL_APPLE:Tt(f,{score:0});break;default:(g===1||g===0)&&(s(),Tt(f,{isTyping:!0}));break}},sv=(r,e,n,s,l,u,d)=>{const{x:f,y:p,id:g,vector:v,page:y}=r,E={ArrowUp:{dir:0,dx:0,dy:-1},ArrowRight:{dir:1,dx:1,dy:0},ArrowDown:{dir:2,dx:0,dy:1},ArrowLeft:{dir:3,dx:-1,dy:0}};if(e in E){const{dir:R,dx:L,dy:M}=E[e],V=f+L,pe=p+M,me={dir:R,vector:(v+1)%4},ge={dir:R},le=Qc(V,pe,u,d,y);if(le!=null&&le.id&&n){const Ue=V+L,Z=pe+M;L!==0&&(ge.x=Ue),M!==0&&(ge.y=Z),Qc(Ue,Z,u,d,y)===1&&(Tt(le==null?void 0:le.id,ge),me.x=V,me.y=pe)}else(le===1||le===2)&&(L!==0&&(me.x=V),M!==0&&(me.y=pe));Tt(g,me)}else e==="Enter"?nN(r,s,u,l,d):e==="Escape"&&Tt(g,{isTyping:!1,msg:""})},rN="_mycharacter_1j082_1",iN="_moveD_1j082_10",sN="_moveU_1j082_13",oN="_moveR_1j082_16",lN="_moveL_1j082_19",aN="_dragon_1j082_22",uN="_walkLeft_1j082_25",cN="_walkRight_1j082_28",dN="_name_1j082_31",hN="_msgContainer_1j082_38",fN="_msg_1j082_38",pN="_msgArrow_1j082_61",mN="_typing_1j082_72",gN="_blink_1j082_1",vr={mycharacter:rN,moveD:iN,moveU:sN,moveR:oN,moveL:lN,dragon:aN,walkLeft:uN,walkRight:cN,name:dN,msgContainer:hN,msg:fN,msgArrow:pN,"typing-container":"_typing-container_1j082_72",typing:mN,blink:gN};function ra(r){var s,l;const{p:e,site:n=""}=r;return(e==null?void 0:e.page)!==n?null:G.jsxs("div",{style:{position:"relative"},children:[G.jsx("div",{className:`${vr.mycharacter} ${vr[_0[e==null?void 0:e.dir]]}`,style:{transform:`translate(${(e==null?void 0:e.x)*4}rem, ${(e==null?void 0:e.y)*4}rem)`,backgroundPosition:`${(e==null?void 0:e.vector)*-24}px 0`}}),G.jsxs("div",{className:vr.name,style:{transform:`translate(${(e==null?void 0:e.x)*4}rem, ${(e==null?void 0:e.y)*4}rem)`},children:[e.name," ",n==="forest"&&e.score]}),(((l=(s=e==null?void 0:e.msg)==null?void 0:s.trim())==null?void 0:l.length)!==0||(e==null?void 0:e.isTyping)==!0)&&G.jsx(G.Fragment,{children:G.jsxs("div",{style:{transform:`translate(${(e==null?void 0:e.x)*4}rem, ${(e==null?void 0:e.y)*4}rem)`},className:vr.msgContainer,children:[e.isTyping&&G.jsx("span",{className:vr.typing,children:"....."}),G.jsx("div",{className:vr.msg,children:e.msg}),G.jsx("div",{className:vr.msgArrow})]})})]})}ra.propTypes={p:Xe.object,site:Xe.string};const Ig=r=>{let e;const n=new Set,s=(g,v)=>{const y=typeof g=="function"?g(e):g;if(!Object.is(y,e)){const E=e;e=v??(typeof y!="object"||y===null)?y:Object.assign({},e,y),n.forEach(R=>R(e,E))}},l=()=>e,f={setState:s,getState:l,getInitialState:()=>p,subscribe:g=>(n.add(g),()=>n.delete(g))},p=e=r(s,l,f);return f},_N=r=>r?Ig(r):Ig,yN=r=>r;function vN(r,e=yN){const n=Xp.useSyncExternalStore(r.subscribe,()=>e(r.getState()),()=>e(r.getInitialState()));return Xp.useDebugValue(n),n}const Cg=r=>{const e=_N(r),n=s=>vN(e,s);return Object.assign(n,e),n},ov=r=>r?Cg(r):Cg,ia=ov(r=>({players:[],setPlayers:e=>r({players:e})})),sa=ov(r=>({myPlayer:{},setMyPlayer:e=>r({myPlayer:e}),page:"home",setPage:e=>r({page:e})}));function lv(r){const{rows:e,cols:n}=r,{myPlayer:s,setPage:l}=sa(),{players:u}=ia(),d=we.useRef(null),[f,p]=we.useState(0),[g,v]=we.useState(()=>eN(e,n)),[y,E]=we.useState(()=>0),[R,L]=we.useState(()=>0),[M,V]=we.useState(()=>2),[pe,me]=we.useState(()=>0),ge=(Z,Q,se)=>{const We=se===0||se===2,it=We?e:n;if(Q<0||Q>=it)return Z;const Qt=We?g[Q][R].type:g[y][Q].type;return Qt===ye.ROCK?Z:(Qt===ye.WATER?V(4):V(se),me(Nt=>(Nt+1)%4),Q)},le=()=>{g[y][R].type===ye.HOME&&(Tt(s==null?void 0:s.id,{page:"home"}),l("home"))},Ue=Z=>{switch(console.log("##keydown",Z.key),Z.key){case"ArrowUp":E(Q=>{let se=Q-1;return console.log("##up",Q,se),ge(Q,se,0)});break;case"ArrowRight":L(Q=>{let se=Q+1;return console.log("##right",Q,se),ge(Q,se,1)});break;case"ArrowDown":E(Q=>{let se=Q+1;return console.log("##down",Q,se),ge(Q,se,2)});break;case"ArrowLeft":L(Q=>{let se=Q-1;return console.log("##left",Q,se),ge(Q,se,3)});break;case" ":break;case"Enter":le();break}};return we.useEffect(()=>{g[y][R].type===ye.FOOD&&setTimeout(()=>{let Q=g;Q[y][R].type=ye.EMPTY,v(Q),p(se=>se+1)},400);let Z={x:R,y,dir:M,vector:pe,score:f};Tt(s==null?void 0:s.id,Z)},[y,R]),we.useEffect(()=>{var Z;d&&((Z=d==null?void 0:d.current)==null||Z.focus(),E((s==null?void 0:s.y)||0),L((s==null?void 0:s.x)||0),p((s==null?void 0:s.score)||0))},[]),G.jsxs("div",{tabIndex:"0",onKeyDown:Ue,ref:d,className:ui.boardContainer,children:[G.jsxs("div",{children:[" Score: ",f]}),G.jsxs("div",{className:ui.board,children:[u==null?void 0:u.map(Z=>G.jsx(ra,{p:Z,site:"forest"},Z.id)),g.map((Z,Q)=>G.jsx("div",{className:ui.row,children:Z.map((se,We)=>{const it=y===Q&&R===We;return G.jsx(Ll,{isActive:it,type:se==null?void 0:se.type,site:"forest"},We)})},Q))]})]})}lv.propTypes={rows:Xe.number.isRequired,cols:Xe.number.isRequired};const wN="_newPlayer_1dkh4_1",EN="_btnSubmit_1dkh4_10",Tg={newPlayer:wN,btnSubmit:EN};function av(r){const{user:e,setNewPlayer:n}=r,[s,l]=we.useState(""),[u,d]=we.useState("male"),f=()=>{if(s.trim().length===0)return;n(!1);const g={name:s,score:0,x:0,y:0,character:"",dir:2,vector:0,page:"home",msg:""};JR(e==null?void 0:e.id,g)},p=g=>{d(g.target.value)};return G.jsxs("div",{className:Tg.newPlayer,children:[G.jsx("div",{children:"New player"}),G.jsx("input",{type:"text",placeholder:"Enter your name",value:s,onChange:g=>l(g.target.value)}),G.jsx("br",{}),G.jsxs("select",{value:u,onChange:p,children:[G.jsx("option",{value:"male",children:"Man"}),G.jsx("option",{value:"female",children:"Women"}),G.jsx("option",{value:"snake",children:"Snake"})]}),G.jsx("button",{className:Tg.btnSubmit,onClick:f,children:"Submit"})]})}av.propTypes={user:Xe.object.isRequired,setNewPlayer:Xe.func.isRequired};const kg=[["null","wood","wood","null","null","null","null","null","null","wood","wood","null"],["null","wood","wood","empty","null","null","null","null","sellApple","wood","wood","null"],["empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty"],["empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty"],["game","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty"],["empty","empty","empty","empty","water","water","water","water","empty","empty","empty","empty"],["freeway","empty","empty","empty","water","water","water","water","empty","empty","empty","empty"],["empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty"],["grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass"]],SN="_home_b7lxk_1",IN="_hint_b7lxk_10",Rg={home:SN,hint:IN},CN="_editor_ge73_1",TN="_input_ge73_9",Ng={editor:CN,input:TN};function uv(r){const{id:e,boardRef:n,isTyping:s,msg:l,setIsTyping:u,setMsg:d}=r,f=we.useRef(null),[p,g]=we.useState(2),v=y=>{var E,R;console.log("##handleKeyPress",y.key),y.key==="Enter"&&!y.shiftKey&&(l==null?void 0:l.trim().length)>0?(y.preventDefault(),Tt(e,{isTyping:!1,msg:l}),u(!1),d(""),g(2),(E=n==null?void 0:n.current)==null||E.focus()):y.key==="Enter"&&y.shiftKey&&p<16?g(L=>L+1):y.key==="Backspace"&&p>2?g(L=>L-1):y.key==="Escape"&&(u(!1),d(""),Tt(e,{isTyping:!1}),(R=n==null?void 0:n.current)==null||R.focus())};if(s)return G.jsx("div",{className:Ng.editor,children:G.jsx("textarea",{ref:f,value:l,autoFocus:!0,className:Ng.input,placeholder:"Type your message...",onChange:y=>{d(y.target.value)},onKeyUp:v,rows:p.toString()})})}uv.propTypes={id:Xe.string,boardRef:Xe.object,isTyping:Xe.bool,setIsTyping:Xe.func,setMsg:Xe.func,msg:Xe.string};function kN(){const{myPlayer:r,setPage:e}=sa(),{players:n}=ia(),{x:s,y:l,id:u}=r,d=we.useRef(null),[f,p]=we.useState("Press Enter to type message, and again Enter to send it. Esc to cancel or delete. Hold shift to move other players."),[g,v]=we.useState(!1),[y,E]=we.useState(""),R=()=>{var M;(M=d==null?void 0:d.current)==null||M.blur(),v(!0)},L=M=>{M.preventDefault(),sv(r,M.key,M.shiftKey,e,R,n,kg)};return we.useEffect(()=>{p(s===0&&l===4?"Press enter":"Press Enter to type message, and again Enter to send it. Esc to cancel or delete. Hold shift to move other players.")},[s,l]),we.useEffect(()=>{var M;d&&((M=d==null?void 0:d.current)==null||M.focus())},[]),G.jsxs(G.Fragment,{children:[G.jsxs("div",{className:Rg.home,tabIndex:"0",onKeyDown:L,ref:d,children:["Living area",G.jsxs("div",{className:Rg.hint,children:["Hint: ",f]}),G.jsxs("div",{children:[n==null?void 0:n.map(M=>G.jsx(ra,{p:M,site:"home"},M.id)),kg.map((M,V)=>G.jsx("div",{className:ui.row,children:M.map((pe,me)=>G.jsx(Ll,{type:pe,site:"home"},me))},V))]})]}),G.jsx(uv,{id:u,isTyping:g,msg:y,boardRef:d,setIsTyping:v,setMsg:E})]})}function cv(r){const{rows:e,cols:n}=r,s=we.useRef(null),{myPlayer:l,setPage:u}=sa(),{players:d}=ia(),[f]=we.useState(()=>{let v=[];for(let y=0;y<e;y++){let E=[];for(let R=0;R<n;R++)E.push(ye.NULL);v.push(E)}return v[0][0]=ye.HOME,v}),p=()=>{var v;(v=s==null?void 0:s.current)==null||v.blur()},g=v=>{v.preventDefault(),sv(l,v.key,v.shiftKey,u,p,d,f)};return we.useEffect(()=>{var v;s&&((v=s==null?void 0:s.current)==null||v.focus())},[]),G.jsxs("div",{tabIndex:"0",onKeyDown:g,ref:s,className:ui.board,children:[d==null?void 0:d.map(v=>G.jsx(ra,{p:v,site:"freeway"},v.id)),f.map((v,y)=>G.jsx("div",{className:ui.row,children:v.map((E,R)=>G.jsx(Ll,{type:E,site:"freeway"},R))},y))]})}cv.propTypes={rows:Xe.number.isRequired,cols:Xe.number.isRequired};function RN(){const[r,e]=we.useState(!0),{myPlayer:n,setMyPlayer:s,page:l,setPage:u}=sa(),{setPlayers:d}=ia(),f=v=>{if(!v)return;let y=[];for(const E in v)E===n.id&&(s({id:E,...v[E]}),u(v[E].page),e(!1)),y.push({id:E,...v[E]});d(y)},p=()=>{ZR(n==null?void 0:n.id),e(!0),s({}),window.location.reload()},g=()=>{l!=="home"&&(u("home"),Tt(n==null?void 0:n.id,{page:"home"}))};return we.useEffect(()=>Yc.onAuthStateChanged(y=>{if(y){let E=n;E.id=y.uid,s(E)}else console.log("User signed out")}),[Yc]),we.useEffect(()=>{const v=Yl(na,"players"),y=ET(v,E=>{f(E.val())});return()=>y()},[]),r?G.jsx(av,{user:n,setNewPlayer:e}):G.jsxs(G.Fragment,{children:[G.jsxs("div",{style:{padding:"1rem",fontWeight:"bolder",display:"flex",justifyContent:"space-between"},children:[G.jsx("button",{onClick:g,children:"Home"}),G.jsx("button",{onClick:p,children:"Reset"})]}),l==="home"&&G.jsx(kN,{}),l==="forest"&&G.jsx(lv,{rows:9,cols:12}),l==="freeway"&&G.jsx(cv,{rows:10,cols:10})]})}m0.createRoot(document.getElementById("root")).render(G.jsx(we.StrictMode,{children:G.jsx(RN,{})}));
