!function(){Function&&Function.prototype&&Function.prototype.bind&&(/MSIE [678]/.test(navigator.userAgent)||!function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="https://platform.twitter.com/",e(0)}([function(t,e,n){!function(){var t=n(1),e=n(2),r=n(3),i=n(31),o=n(33);o(),r.exposeApiAndBind(i.init("impressions",{}),e,t,i.base)}()},function(t,e){t.exports=document},function(t,e){t.exports=window},function(t,e,n){function r(t){return t=t||{},_.isType("string",t)?{context:t}:{context:t.context,partner:t.partner}}function i(t,e,n){var i;n=r(n),e=e||t.body,_.isType("array",e)||(e=[e]),0!==e.length&&(_.isType("string",e[0])&&(i=a(e,n)),e[0].nodeType==Node.ELEMENT_NODE&&(i=o(e)),i&&(h.scribePartnerTweetAudienceImpression(),m.flushClientEvents()))}function o(t){var e,n=[];return _.toRealArray(t).forEach(function(t){t.nodeType===Node.ELEMENT_NODE&&(d.present(t,T)?n.push(t):n=n.concat(_.toRealArray(t.getElementsByClassName(T))))}),_.toRealArray(n).forEach(function(t){var n=s(t);t.setAttribute(x,""),n&&(a([n.tweetId],r(n),t),e=!0)}),e}function s(t){var e={};if(null===t.getAttribute(x))return e.tweetId=t.getAttribute("data-twitter-tweet-id"),e.context=t.getAttribute("data-twitter-tweet-context"),e.partner=t.getAttribute("data-partner"),e.tweetId&&e.tweetId.length>0?e:void 0}function a(t,e,n){var r,i,o;return e=e||{},r={widget_origin:w.rootDocumentLocation()},i=e.context,o=e.partner||v.val("partner"),_.isType("array",t)||(t=[t]),t=t.filter(function(t){return _.isType("string",t)}),_.isType("string",i)&&(r.description=i),r.item_ids=t,r.item_details={},o&&(r.message=o),t.forEach(function(t){r.item_details[t]=N}),f(t,i,o,n),m.enqueueClientEvent(A,r)}function c(t){_.isType("function",t)&&b.push(t)}function u(t){var e=b.indexOf(t);e>-1&&b.splice(e,1)}function f(t,e,n,r){b.forEach(function(i){i.call(null,{tweetIds:t,context:e,partner:n,srcElement:r})})}function l(t,e,n,r){var o=new y;g.exposeReadyPromise(o.promise,t,"_e"),_.aug(t,{logTweets:E(i,e,n),attachDebugger:c,detachDebugger:u}),o.promise.then(function(){t.logTweets()}),p(function(){o.resolve(r||t)})}var p=n(4),d=n(5),v=n(7),m=n(8),h=n(21),g=n(22),y=n(24),w=n(12),_=n(6),E=n(23),b=[],T="twitter-custom-tweet",x="data-twitter-logged",N={item_type:0},A={page:"partnertweet",action:"results"};t.exports={exposeApiAndBind:l,logTweets:i,enqueueTweetsByIds:a,enqueueTweetsFromNodes:o,attachDebugger:c,detachDebugger:u}},function(t,e,n){function r(){u=1;for(var t=0,e=f.length;e>t;t++)f[t]()}var i,o,s,a=n(1),c=n(2),u=0,f=[],l=!1,p=a.createElement("a");/^loade|c/.test(a.readyState)&&(u=1),a.addEventListener&&a.addEventListener("DOMContentLoaded",o=function(){a.removeEventListener("DOMContentLoaded",o,l),r()},l),p.doScroll&&a.attachEvent("onreadystatechange",i=function(){/^c/.test(a.readyState)&&(a.detachEvent("onreadystatechange",i),r())}),s=p.doScroll?function(t){c.self!=c.top?u?t():f.push(t):!function(){try{p.doScroll("left")}catch(e){return setTimeout(function(){s(t)},50)}t()}()}:function(t){u?t():f.push(t)},t.exports=s},function(t,e,n){function r(t){return new RegExp("\\b"+t+"\\b","g")}function i(t,e){return t.classList?void t.classList.add(e):void(r(e).test(t.className)||(t.className+=" "+e))}function o(t,e){return t.classList?void t.classList.remove(e):void(t.className=t.className.replace(r(e)," "))}function s(t,e,n){return void 0===n&&t.classList&&t.classList.toggle?t.classList.toggle(e,n):(n?i(t,e):o(t,e),n)}function a(t,e,n){return t.classList&&c(t,e)?(o(t,e),void i(t,n)):void(t.className=t.className.replace(r(e),n))}function c(t,e){return t.classList?t.classList.contains(e):f.contains(u(t),e)}function u(t){return f.toRealArray(t.classList?t.classList:t.className.match(l))}var f=n(6),l=/\b([\w-_]+)\b/g;t.exports={add:i,remove:o,replace:a,toggle:s,present:c,list:u}},function(t,e,n){function r(t){return l(arguments).slice(1).forEach(function(e){o(e,function(e,n){t[e]=n})}),t}function i(t){return o(t,function(e,n){c(n)&&(i(n),u(n)&&delete t[e]),void 0!==n&&null!==n&&""!==n||delete t[e]}),t}function o(t,e){for(var n in t)t.hasOwnProperty&&!t.hasOwnProperty(n)||e(n,t[n]);return t}function s(t){return{}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function a(t,e){return t==s(e)}function c(t){return t===Object(t)}function u(t){if(!c(t))return!1;if(Object.keys)return!Object.keys(t).length;for(var e in t)if(t.hasOwnProperty(e))return!1;return!0}function f(t,e){d.setTimeout(function(){t.call(e||null)},0)}function l(t){return t?Array.prototype.slice.call(t):[]}function p(t,e){return t&&t.indexOf?t.indexOf(e)>-1:!1}var d=n(2);t.exports={aug:r,async:f,compact:i,contains:p,forIn:o,isObject:c,isEmptyObject:u,toType:s,isType:a,toRealArray:l}},function(t,e,n){function r(t){var e,n,r,i=0;for(o={},t=t||s,e=t.getElementsByTagName("meta");n=e[i];i++)/^twitter:/.test(n.name)&&(r=n.name.replace(/^twitter:/,""),o[r]=n.content)}function i(t){return o[t]}var o,s=n(1);r(),t.exports={init:r,val:i}},function(t,e,n){function r(t,e,n){return i(t,e,n,2)}function i(t,e,n,r){var i=!h.isObject(t),o=e?!h.isObject(e):!1;i||o||s(m.formatClientEventNamespace(t),m.formatClientEventData(e,n,r),m.CLIENT_EVENT_ENDPOINT)}function o(t,e,n,r){var o=m.extractTermsFromDOM(t.target||t.srcElement);o.action=r||"click",i(o,e,n)}function s(t,e,n){var r,i;n&&h.isObject(t)&&h.isObject(e)&&(r=m.flattenClientEventPayload(t,e),i={l:m.stringify(r)},r.dnt&&(i.dnt=1),p(v.url(n,i)))}function a(t,e,n,r){var i,o=!h.isObject(t),s=e?!h.isObject(e):!1;if(!o&&!s)return i=m.flattenClientEventPayload(m.formatClientEventNamespace(t),m.formatClientEventData(e,n,r)),c(i)}function c(t){return y.push(t),y}function u(){var t,e;return y.length>1&&a({page:"widgets_js",component:"scribe_pixel",action:"batch_log"},{}),t=y,y=[],e=t.reduce(function(e,n,r){var i=e.length,o=i&&e[i-1],s=r+1==t.length;return s&&n.event_namespace&&"batch_log"==n.event_namespace.action&&(n.message=["entries:"+r,"requests:"+i].join("/")),f(n).forEach(function(t){var n=l(t);(!o||o.urlLength+n>g)&&(o={urlLength:_,items:[]},e.push(o)),o.urlLength+=n,o.items.push(t)}),e},[]),e.map(function(t){var e={l:t.items};return d.enabled()&&(e.dnt=1),p(v.url(m.CLIENT_EVENT_ENDPOINT,e))})}function f(t){return Array.isArray(t)||(t=[t]),t.reduce(function(t,e){var n,r=m.stringify(e),i=l(r);return g>_+i?t=t.concat(r):(n=m.splitLogEntry(e),n.length>1&&(t=t.concat(f(n)))),t},[])}function l(t){return encodeURIComponent(t).length+3}function p(t){var e=new Image;return e.src=t}var d=n(9),v=n(15),m=n(18),h=n(6),g=2083,y=[],w=v.url(m.CLIENT_EVENT_ENDPOINT,{dnt:0,l:""}),_=encodeURIComponent(w).length;t.exports={_enqueueRawObject:c,scribe:s,clientEvent:i,clientEvent2:r,enqueueClientEvent:a,flushClientEvents:u,interaction:o}},function(t,e,n){function r(){p=!0}function i(t,e){return p?!0:f.asBoolean(l.val("dnt"))?!0:!a||1!=a.doNotTrack&&1!=a.msDoNotTrack?u.isUrlSensitive(e||s.host)?!0:c.isFramed()&&u.isUrlSensitive(c.rootDocumentLocation())?!0:(t=d.test(t||o.referrer)&&RegExp.$1,!(!t||!u.isUrlSensitive(t))):!0}var o=n(1),s=n(10),a=n(11),c=n(12),u=n(17),f=n(16),l=n(7),p=!1,d=/https?:\/\/([^\/]+).*/i;t.exports={setOn:r,enabled:i}},function(t,e){t.exports=location},function(t,e){t.exports=navigator},function(t,e,n){function r(t){return t&&c.isType("string",t)&&(u=t),u}function i(){return f}function o(){return u!==f}var s=n(10),a=n(13),c=n(6),u=a.getCanonicalURL()||s.href,f=u;t.exports={isFramed:o,rootDocumentLocation:r,currentDocumentLocation:i}},function(t,e,n){function r(t,e){var n,r;return e=e||a,/^https?:\/\//.test(t)?t:/^\/\//.test(t)?e.protocol+t:(n=e.host+(e.port.length?":"+e.port:""),0!==t.indexOf("/")&&(r=e.pathname.split("/"),r.pop(),r.push(t),t="/"+r.join("/")),[e.protocol,"//",n,t].join(""))}function i(){for(var t,e=s.getElementsByTagName("link"),n=0;t=e[n];n++)if("canonical"==t.rel)return r(t.href)}function o(){for(var t,e,n,r=s.getElementsByTagName("a"),i=s.getElementsByTagName("link"),o=[r,i],a=0,u=0,f=/\bme\b/;t=o[a];a++)for(u=0;e=t[u];u++)if(f.test(e.rel)&&(n=c.screenName(e.href)))return n}var s=n(1),a=n(10),c=n(14);t.exports={absolutize:r,getCanonicalURL:i,getScreenNameFromPage:o}},function(t,e,n){function r(t){return"string"==typeof t&&_.test(t)&&RegExp.$1.length<=20}function i(t){return r(t)?RegExp.$1:void 0}function o(t,e){var n=w.decodeURL(t);return e=e||!1,n.screen_name=i(t),n.screen_name?w.url("https://twitter.com/intent/"+(e?"follow":"user"),n):void 0}function s(t){return o(t,!0)}function a(t){return"string"==typeof t&&x.test(t)}function c(t,e){return e=void 0===e?!0:e,a(t)?(e?"#":"")+RegExp.$1:void 0}function u(t){return"string"==typeof t&&E.test(t)}function f(t){return u(t)&&RegExp.$1}function l(t){return b.test(t)}function p(t){return T.test(t)}function d(t){return N.test(t)}function v(t){return O.test(t)&&RegExp.$1}function m(t){return A.test(t)&&RegExp.$1}function h(t){return N.test(t)&&RegExp.$1}function g(t){return P.test(t)&&RegExp.$1}function y(t){return L.test(t)?{ownerScreenName:RegExp.$1,slug:RegExp.$2}:!1}var w=n(15),_=/(?:^|(?:https?\:)?\/\/(?:www\.)?twitter\.com(?:\:\d+)?(?:\/intent\/(?:follow|user)\/?\?screen_name=|(?:\/#!)?\/))@?([\w]+)(?:\?|&|$)/i,E=/(?:^|(?:https?\:)?\/\/(?:www\.)?twitter\.com(?:\:\d+)?\/(?:#!\/)?[\w_]+\/status(?:es)?\/)(\d+)/i,b=/^http(s?):\/\/(\w+\.)*twitter\.com([\:\/]|$)/i,T=/^http(s?):\/\/pbs\.twimg\.com\//,x=/^#?([^.,<>!\s\/#\-\(\)\'\"]+)$/,N=/twitter\.com(?:\:\d{2,4})?\/intent\/(\w+)/,A=/^https?:\/\/(?:www\.)?twitter\.com\/\w+\/timelines\/(\d+)/i,O=/^https?:\/\/(?:www\.)?twitter\.com\/i\/moments\/(\d+)/i,P=/^https?:\/\/(?:www\.)?twitter\.com\/(\w+)\/(?:likes|favorites)/i,L=/^https?:\/\/(?:www\.)?twitter\.com\/(\w+)\/lists\/([\w-]+)/i;t.exports={isHashTag:a,hashTag:c,isScreenName:r,screenName:i,isStatus:u,status:f,intentForProfileURL:o,intentForFollowURL:s,isTwitterURL:l,isTwimgURL:p,isIntentURL:d,regexen:{profile:_},momentId:v,collectionId:m,intentType:h,likesScreenName:g,listScreenNameAndSlug:y}},function(t,e,n){function r(t){return encodeURIComponent(t).replace(/\+/g,"%2B").replace(/'/g,"%27")}function i(t){return decodeURIComponent(t)}function o(t){var e=[];return f.forIn(t,function(t,n){var i=r(t);f.isType("array",n)||(n=[n]),n.forEach(function(t){u.hasValue(t)&&e.push(i+"="+r(t))})}),e.sort().join("&")}function s(t){var e,n={};return t?(e=t.split("&"),e.forEach(function(t){var e=t.split("="),r=i(e[0]),o=i(e[1]);return 2==e.length?f.isType("array",n[r])?void n[r].push(o):r in n?(n[r]=[n[r]],void n[r].push(o)):void(n[r]=o):void 0}),n):{}}function a(t,e){var n=o(e);return n.length>0?f.contains(t,"?")?t+"&"+o(e):t+"?"+o(e):t}function c(t){var e=t&&t.split("?");return 2==e.length?s(e[1]):{}}var u=n(16),f=n(6);t.exports={url:a,decodeURL:c,decode:s,encode:o,encodePart:r,decodePart:i}},function(t,e,n){function r(t){return void 0!==t&&null!==t&&""!==t}function i(t){return a(t)&&t%1===0}function o(t){return"string"===m.toType(t)}function s(t){return a(t)&&!i(t)}function a(t){return r(t)&&!isNaN(t)}function c(t){return r(t)&&"array"==m.toType(t)}function u(t){return m.contains(g,t)}function f(t){return m.contains(h,t)}function l(t){return r(t)?f(t)?!0:u(t)?!1:!!t:!1}function p(t){return a(t)?t:void 0}function d(t){return s(t)?t:void 0}function v(t){return i(t)?parseInt(t,10):void 0}var m=n(6),h=[!0,1,"1","on","ON","true","TRUE","yes","YES"],g=[!1,0,"0","off","OFF","false","FALSE","no","NO"];t.exports={hasValue:r,isInt:i,isFloat:s,isNumber:a,isString:o,isArray:c,isTruthValue:f,isFalseValue:u,asInt:v,asFloat:d,asNumber:p,asBoolean:l}},function(t,e,n){function r(t){return t in a?a[t]:a[t]=s.test(t)}function i(){return r(o.host)}var o=n(10),s=/^[^#?]*\.(gov|mil)(:\d+)?([#?].*)?$/i,a={};t.exports={isUrlSensitive:r,isHostPageSensitive:i}},function(t,e,n){function r(t,e){var n;return e=e||{},t&&t.nodeType===Node.ELEMENT_NODE?((n=t.getAttribute("data-scribe"))&&n.split(" ").forEach(function(t){var n=t.trim().split(":"),r=n[0],i=n[1];r&&i&&!e[r]&&(e[r]=i)}),r(t.parentNode,e)):e}function i(t){return v.aug({client:"tfw"},t||{})}function o(t,e,n){var r=t&&t.widget_origin||l.referrer;return t=s("tfw_client_event",t,r),t.client_version=h,t.format_version=void 0!==n?n:1,e||(t.widget_origin=r),t}function s(t,e,n){return e=e||{},v.aug({},e,{_category_:t,triggered_on:e.triggered_on||+new Date,dnt:d.enabled(n)})}function a(t,e){var n={};return e=e||{},e.association_namespace=i(t),n[_]=e,n}function c(t,e){return v.aug({},e,{event_namespace:t})}function u(t){var e,n=Array.prototype.toJSON;return delete Array.prototype.toJSON,e=p.stringify(t),n&&(Array.prototype.toJSON=n),e}function f(t){if(t.item_ids&&t.item_ids.length>1){var e=Math.floor(t.item_ids.length/2),n=t.item_ids.slice(0,e),r={},i=t.item_ids.slice(e),o={};n.forEach(function(e){r[e]=t.item_details[e]}),i.forEach(function(e){o[e]=t.item_details[e]});var s=[v.aug({},t,{item_ids:n,item_details:r}),v.aug({},t,{item_ids:i,item_details:o})];return s}return[t]}var l=n(1),p=n(19),d=n(9),v=n(6),m=n(20),h=m.version,g="https://syndication.twitter.com/i/jot",y="https://syndication.twitter.com/i/jot/syndication",w="https://platform.twitter.com/jot.html",_=1;t.exports={extractTermsFromDOM:r,flattenClientEventPayload:c,formatGenericEventData:s,formatClientEventData:o,formatClientEventNamespace:i,formatTweetAssociation:a,splitLogEntry:f,stringify:u,AUDIENCE_ENDPOINT:y,CLIENT_EVENT_ENDPOINT:g,RUFOUS_REDIRECT:w}},function(t,e,n){var r=n(2),i=r.JSON;t.exports={stringify:i.stringify||i.encode,parse:i.parse||i.decode}},function(t,e){t.exports={version:"bc39f62:1463095403332"}},function(t,e,n){function r(){return f.formatGenericEventData("syndicated_impression",{})}function i(){c("tweet")}function o(){c("timeline")}function s(){c("video")}function a(){c("partnertweet")}function c(t){l.isHostPageSensitive()||p[t]||(p[t]=!0,u.scribe(f.formatClientEventNamespace({page:t,action:"impression"}),r(),f.AUDIENCE_ENDPOINT))}var u=n(8),f=n(18),l=n(17),p={};t.exports={scribeAudienceImpression:c,scribePartnerTweetAudienceImpression:a,scribeTweetAudienceImpression:i,scribeTimelineAudienceImpression:o,scribeVideoAudienceImpression:s}},function(t,e,n){function r(t,e,n){e.ready=i(t.then,t),n&&Array.isArray(e[n])&&(e[n].forEach(i(t.then,t)),delete e[n])}var i=n(23);t.exports={exposeReadyPromise:r}},function(t,e,n){var r=n(6);t.exports=function(t,e){var n=Array.prototype.slice.call(arguments,2);return function(){var i=r.toRealArray(arguments);return t.apply(e,n.concat(i))}}},function(t,e,n){function r(){var t=this;this.promise=new i(function(e,n){t.resolve=e,t.reject=n})}var i=n(25);t.exports=r},function(t,e,n){var r=n(26).Promise,i=n(2),o=n(30);t.exports=o.hasPromiseSupport()?i.Promise:r},function(t,e,n){var r;(function(t){/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
	 * @version   2.3.0
	 */
(function(){"use strict";function i(t){return"function"==typeof t||"object"==typeof t&&null!==t}function o(t){return"function"==typeof t}function s(t){return"object"==typeof t&&null!==t}function a(t){J=t}function c(t){K=t}function u(){var t=process.nextTick,e=process.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/);return Array.isArray(e)&&"0"===e[1]&&"10"===e[2]&&(t=setImmediate),function(){t(v)}}function f(){return function(){z(v)}}function l(){var t=0,e=new Q(v),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function p(){var t=new MessageChannel;return t.port1.onmessage=v,function(){t.port2.postMessage(0)}}function d(){return function(){setTimeout(v,1)}}function v(){for(var t=0;G>t;t+=2){var e=et[t],n=et[t+1];e(n),et[t]=void 0,et[t+1]=void 0}G=0}function m(){try{var t=n(28);return z=t.runOnLoop||t.runOnContext,f()}catch(e){return d()}}function h(){}function g(){return new TypeError("You cannot resolve a promise with itself")}function y(){return new TypeError("A promises callback cannot return that same promise.")}function w(t){try{return t.then}catch(e){return ot.error=e,ot}}function _(t,e,n,r){try{t.call(e,n,r)}catch(i){return i}}function E(t,e,n){K(function(t){var r=!1,i=_(n,e,function(n){r||(r=!0,e!==n?x(t,n):A(t,n))},function(e){r||(r=!0,O(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&i&&(r=!0,O(t,i))},t)}function b(t,e){e._state===rt?A(t,e._result):e._state===it?O(t,e._result):P(e,void 0,function(e){x(t,e)},function(e){O(t,e)})}function T(t,e){if(e.constructor===t.constructor)b(t,e);else{var n=w(e);n===ot?O(t,ot.error):void 0===n?A(t,e):o(n)?E(t,e,n):A(t,e)}}function x(t,e){t===e?O(t,g()):i(e)?T(t,e):A(t,e)}function N(t){t._onerror&&t._onerror(t._result),L(t)}function A(t,e){t._state===nt&&(t._result=e,t._state=rt,0!==t._subscribers.length&&K(L,t))}function O(t,e){t._state===nt&&(t._state=it,t._result=e,K(N,t))}function P(t,e,n,r){var i=t._subscribers,o=i.length;t._onerror=null,i[o]=e,i[o+rt]=n,i[o+it]=r,0===o&&t._state&&K(L,t)}function L(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r,i,o=t._result,s=0;s<e.length;s+=3)r=e[s],i=e[s+n],r?j(n,r,i,o):i(o);t._subscribers.length=0}}function I(){this.error=null}function R(t,e){try{return t(e)}catch(n){return st.error=n,st}}function j(t,e,n,r){var i,s,a,c,u=o(n);if(u){if(i=R(n,r),i===st?(c=!0,s=i.error,i=null):a=!0,e===i)return void O(e,y())}else i=r,a=!0;e._state!==nt||(u&&a?x(e,i):c?O(e,s):t===rt?A(e,i):t===it&&O(e,i))}function S(t,e){try{e(function(e){x(t,e)},function(e){O(t,e)})}catch(n){O(t,n)}}function C(t,e){var n=this;n._instanceConstructor=t,n.promise=new t(h),n._validateInput(e)?(n._input=e,n.length=e.length,n._remaining=e.length,n._init(),0===n.length?A(n.promise,n._result):(n.length=n.length||0,n._enumerate(),0===n._remaining&&A(n.promise,n._result))):O(n.promise,n._validationError())}function D(t){return new at(this,t).promise}function M(t){function e(t){x(i,t)}function n(t){O(i,t)}var r=this,i=new r(h);if(!H(t))return O(i,new TypeError("You must pass an array to race.")),i;for(var o=t.length,s=0;i._state===nt&&o>s;s++)P(r.resolve(t[s]),void 0,e,n);return i}function U(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(h);return x(n,t),n}function F(t){var e=this,n=new e(h);return O(n,t),n}function $(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function k(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function B(t){this._id=pt++,this._state=void 0,this._result=void 0,this._subscribers=[],h!==t&&(o(t)||$(),this instanceof B||k(),S(this,t))}function V(){var t;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;n&&"[object Promise]"===Object.prototype.toString.call(n.resolve())&&!n.cast||(t.Promise=dt)}var q;q=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var z,J,Y,H=q,G=0,K=({}.toString,function(t,e){et[G]=t,et[G+1]=e,G+=2,2===G&&(J?J(v):Y())}),W="undefined"!=typeof window?window:void 0,Z=W||{},Q=Z.MutationObserver||Z.WebKitMutationObserver,X="undefined"!=typeof process&&"[object process]"==={}.toString.call(process),tt="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,et=new Array(1e3);Y=X?u():Q?l():tt?p():void 0===W?m():d();var nt=void 0,rt=1,it=2,ot=new I,st=new I;C.prototype._validateInput=function(t){return H(t)},C.prototype._validationError=function(){return new Error("Array Methods must be provided an Array")},C.prototype._init=function(){this._result=new Array(this.length)};var at=C;C.prototype._enumerate=function(){for(var t=this,e=t.length,n=t.promise,r=t._input,i=0;n._state===nt&&e>i;i++)t._eachEntry(r[i],i)},C.prototype._eachEntry=function(t,e){var n=this,r=n._instanceConstructor;s(t)?t.constructor===r&&t._state!==nt?(t._onerror=null,n._settledAt(t._state,e,t._result)):n._willSettleAt(r.resolve(t),e):(n._remaining--,n._result[e]=t)},C.prototype._settledAt=function(t,e,n){var r=this,i=r.promise;i._state===nt&&(r._remaining--,t===it?O(i,n):r._result[e]=n),0===r._remaining&&A(i,r._result)},C.prototype._willSettleAt=function(t,e){var n=this;P(t,void 0,function(t){n._settledAt(rt,e,t)},function(t){n._settledAt(it,e,t)})};var ct=D,ut=M,ft=U,lt=F,pt=0,dt=B;B.all=ct,B.race=ut,B.resolve=ft,B.reject=lt,B._setScheduler=a,B._setAsap=c,B._asap=K,B.prototype={constructor:B,then:function(t,e){var n=this,r=n._state;if(r===rt&&!t||r===it&&!e)return this;var i=new this.constructor(h),o=n._result;if(r){var s=arguments[r-1];K(function(){j(r,i,s,o)})}else P(n,i,t,e);return i},"catch":function(t){return this.then(null,t)}};var vt=V,mt={Promise:dt,polyfill:vt};n(29).amd?(r=function(){return mt}.call(e,n,e,t),!(void 0!==r&&(t.exports=r))):"undefined"!=typeof t&&t.exports&&(t.exports=mt)}).call(this)}).call(e,n(27)(t))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t}},function(t,e){},function(t,e){t.exports=function(){throw new Error("define cannot be used indirect")}},function(t,e,n){function r(t){return t=t||v,t.devicePixelRatio?t.devicePixelRatio>=1.5:t.matchMedia?t.matchMedia("only screen and (min-resolution: 144dpi)").matches:!1}function i(t){return t=t||h,/(Trident|MSIE \d)/.test(t)}function o(t){return t=t||h,/MSIE 9/.test(t)}function s(t){return t=t||h,/(iPad|iPhone|iPod)/.test(t)}function a(t){return t=t||h,/^Mozilla\/5\.0 \(Linux; (U; )?Android/.test(t)}function c(t,e){return t=t||v,e=e||h,t.postMessage&&!(i(e)&&t.opener)}function u(t,e,n){return t=t||v,e=e||d,n=n||h,"ontouchstart"in t||/Opera Mini/.test(n)||e.msMaxTouchPoints>0}function f(){var t=p.body.style;return void 0!==t.transition||void 0!==t.webkitTransition||void 0!==t.mozTransition||void 0!==t.oTransition||void 0!==t.msTransition}function l(){return!!(v.Promise&&v.Promise.resolve&&v.Promise.reject&&v.Promise.all&&v.Promise.race&&function(){var t;return new v.Promise(function(e){t=e}),m.isType("function",t)}())}var p=n(1),d=n(11),v=n(2),m=n(6),h=d.userAgent;t.exports={retina:r,anyIE:i,ie9:o,ios:s,android:a,canPostMessage:c,touch:u,cssTransitions:f,hasPromiseSupport:l}},function(t,e,n){var r=n(32);t.exports=new r("twttr")},function(t,e,n){function r(t){return a.isType("string",t)?t.split("."):a.isType("array",t)?t:[]}function i(t,e){var n=r(e),i=n.slice(0,-1);return i.reduce(function(t,e,n){if(t[e]=t[e]||{},!a.isObject(t[e]))throw new Error(i.slice(0,n+1).join(".")+" is already defined with a value.");return t[e]},t)}function o(t,e){e=e||s,e[t]=e[t]||{},Object.defineProperty(this,"base",{value:e[t]}),Object.defineProperty(this,"name",{value:t})}var s=n(2),a=n(6);a.aug(o.prototype,{get:function(t){var e=r(t);return e.reduce(function(t,e){return a.isObject(t)?t[e]:void 0},this.base)},set:function(t,e,n){var o=r(t),s=i(this.base,t),a=o.slice(-1);return n&&a in s?s[a]:s[a]=e},init:function(t,e){return this.set(t,e,!0)},unset:function(t){var e=r(t),n=this.get(e.slice(0,-1));n&&delete n[e.slice(-1)]},aug:function(t){var e=this.get(t),n=a.toRealArray(arguments).slice(1);if(e="undefined"!=typeof e?e:{},n.unshift(e),!n.every(a.isObject))throw new Error("Cannot augment non-object.");return this.set(t,a.aug.apply(null,n))},call:function(t){var e=this.get(t),n=a.toRealArray(arguments).slice(1);if(!a.isType("function",e))throw new Error("Function "+t+"does not exist.");return e.apply(null,n)},fullPath:function(t){var e=r(t);return e.unshift(this.name),e.join(".")}}),t.exports=o},function(t,e,n){var r=n(20),i=n(34);t.exports=function(){i.set("buildVersion",r.version)}},function(t,e,n){var r=n(32);t.exports=new r("__twttr")}]))}();