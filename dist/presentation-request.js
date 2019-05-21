!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("presentation-request",[],e):"object"==typeof exports?exports["presentation-request"]=e():t["presentation-request"]=e()}(this,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/dist/",r(r.s=39)}([function(t,e,r){"use strict";var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,r){"use strict";var n=r(30)("wks"),o=r(31),i=r(0).Symbol,s="function"==typeof i;(t.exports=function(t){return n[t]||(n[t]=s&&i[t]||(s?i:o)("Symbol."+t))}).store=n},function(t,e,r){"use strict";var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},function(t,e,r){"use strict";var n=r(5);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},function(t,e,r){"use strict";var n=r(11),o=r(28);t.exports=r(6)?function(t,e,r){return n.f(t,e,o(1,r))}:function(t,e,r){return t[e]=r,t}},function(t,e,r){"use strict";t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,r){"use strict";t.exports=!r(27)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,r){"use strict";t.exports={}},function(t,e,r){"use strict";var n=r(0),o=r(2),i=r(9),s=r(4),u=r(12),c=function(t,e,r){var a,f,l,p=t&c.F,h=t&c.G,d=t&c.S,v=t&c.P,y=t&c.B,m=t&c.W,x=h?o:o[e]||(o[e]={}),g=x.prototype,w=h?n:d?n[e]:(n[e]||{}).prototype;for(a in h&&(r=e),r)(f=!p&&w&&void 0!==w[a])&&u(x,a)||(l=f?w[a]:r[a],x[a]=h&&"function"!=typeof w[a]?r[a]:y&&f?i(l,n):m&&w[a]==l?function(t){var e=function(e,r,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,r)}return new t(e,r,n)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):v&&"function"==typeof l?i(Function.call,l):l,v&&((x.virtual||(x.virtual={}))[a]=l,t&c.R&&g&&!g[a]&&s(g,a,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e,r){"use strict";var n=r(10);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,r){"use strict";t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,r){"use strict";var n=r(3),o=r(51),i=r(52),s=Object.defineProperty;e.f=r(6)?Object.defineProperty:function(t,e,r){if(n(t),e=i(e,!0),n(r),o)try{return s(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[e]=r.value),t}},function(t,e,r){"use strict";var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,r){"use strict";var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={TEXT:"text",JSON:"json"}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={TYPE:"Content-Type",TEXT:"text/plain",APPLICATION:"application/json",ACCEPT:"Accept",CACHE:"Cache-Control",NO_CACHE:"no-cache",ALLOW_ORIGINS:"Access-Control-Allow-Origin",ALLOW_METHODS:"Access-Control-Allow-Methods",AUTH:"Authorization"}},function(t,e,r){"use strict";var n=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:n)(t)}},function(t,e,r){"use strict";t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,r){"use strict";t.exports=!0},function(t,e,r){"use strict";var n=r(5),o=r(0).document,i=n(o)&&n(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,r){"use strict";var n=r(59),o=r(17);t.exports=function(t){return n(o(t))}},function(t,e,r){"use strict";var n=r(30)("keys"),o=r(31);t.exports=function(t){return n[t]||(n[t]=o(t))}},function(t,e,r){"use strict";var n=r(11).f,o=r(12),i=r(1)("toStringTag");t.exports=function(t,e,r){t&&!o(t=r?t:t.prototype,i)&&n(t,i,{configurable:!0,value:e})}},function(t,e,r){"use strict";var n=r(10);function o(t){var e,r;this.promise=new t(function(t,n){if(void 0!==e||void 0!==r)throw TypeError("Bad Promise constructor");e=t,r=n}),this.resolve=n(e),this.reject=n(r)}t.exports.f=function(t){return new o(t)}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={create:"POST",update:"PUT",patch:"PATCH",delete:"DELETE",read:"GET",CREATE:"POST",UPDATE:"PUT",PATCH:"PATCH",DELETE:"DELETE",READ:"GET"}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(r(15)),o=i(r(14));function i(t){return t&&t.__esModule?t:{default:t}}function s(){this.responseType=o.default.TEXT,this.responseText="",this.async=!0,this.status=200,this.header={},this.timeout=70,this.open=((t,e,r,n,o)=>{this.uri=e,this.async=r,this.user=n,this.method=t}),this.send=(()=>{this.onload()}),this.setRequestHeader=((t,e)=>{this.header.header=e}),this.done=(()=>{}),this.fail=(()=>{}),this.always=(()=>{}),this.then=(()=>{}),this.options={}}e.default=(t=>{let e=null;if(t&&t.uri){t.type,!t.method&&t.type&&(t.method=t.type);let r=t.method?t.method:"GET",i=!t.cache||t.cache;if(e=t.mock?new s:new XMLHttpRequest,t.timeout&&(e.timeout=t.timeout),t.crossDomain&&t.xhrFields&&t.xhrFields.withCredentials&&(e.withCredentials=t.xhrFields.withCredentials),t.dataType&&(e.responseType=t.dataType?t.dataType:o.default.TEXT),e.open(r,encodeURI(t.uri),!0,void 0!==t.user?t.user:"",void 0!==t.password?t.password:""),e.setRequestHeader(n.default.TYPE,t.contentType?t.contentType:n.default.TEXT),t.dataType===o.default.JSON&&e.setRequestHeader(n.default.ACCEPT,n.default.APPLICATION),i||e.setRequestHeader(n.default.CACHE,n.default.NO_CACHE),e.withCredentials){let r="*",o="GET";t.allowOrigins&&(r=t.allowOrigins),t.allowMethods&&(o=t.allowMethods),e.setRequestHeader(n.default.ALLOW_ORIGINS,r),e.setRequestHeader(n.default.ALLOW_METHODS,o)}if(e.withCredentials&&t.user&&t.password&&e.setRequestHeader(n.default.AUTH,"Basic "+window.btoa(t.user+":"+t.password)),t.headers){let r=0,n=Object.keys(t.headers),o=n.length;for(r=0;r<o;r++)e.setRequestHeader(n[r],t.headers[n[r]])}e.onload=(()=>{try{e.status>199&&e.status<399?t.success&&(""===e.responseType||e.responseType===o.default.TEXT?e.responseText?t.success(e.responseText,e.status,e):(console.warn("AUGMENTED: Ajax ("+e.responseType+" responseType) did not return anything."),t.success("",e.status,e)):e.responseType===o.default.JSON?e.response?t.success(e.response,e.status,e):e.responseText?t.success(JSON.parse(e.responseText),e.status,e):(console.warn("AUGMENTED: Ajax ("+e.responseType+" responseType) did not return anything."),t.success("",e.status,e)):e.responseText?t.success(e.responseText,e.status,e):e.response?t.success(e.response,e.status,e):(console.warn("AUGMENTED: Ajax ("+e.responseType+" responseType) did not return anything."),t.success("",e.status,e))):e.status>399&&e.status<600&&(t.failure?t.failure(e,e.status,e.statusText):t.error&&t.error(e,e.status,e.statusText))}catch(r){return console.error("AUGMENTED: Ajax ("+r+")"),t&&t.error&&t.error(e,e.status,e.statusText),e}return t.complete&&t.complete(e,e.status),e}),t.beforeSend&&t.beforeSend(e),e.send(t.data?t.data:"")}return e})},function(t,e,r){"use strict";var n=r(18),o=r(8),i=r(53),s=r(4),u=r(7),c=r(54),a=r(22),f=r(62),l=r(1)("iterator"),p=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,e,r,d,v,y,m){c(r,e,d);var x,g,w,_=function(t){if(!p&&t in O)return O[t];switch(t){case"keys":case"values":return function(){return new r(this,t)}}return function(){return new r(this,t)}},T=e+" Iterator",E="values"==v,b=!1,O=t.prototype,P=O[l]||O["@@iterator"]||v&&O[v],j=P||_(v),S=v?E?_("entries"):j:void 0,L="Array"==e&&O.entries||P;if(L&&(w=f(L.call(new t)))!==Object.prototype&&w.next&&(a(w,T,!0),n||"function"==typeof w[l]||s(w,l,h)),E&&P&&"values"!==P.name&&(b=!0,j=function(){return P.call(this)}),n&&!m||!p&&!b&&O[l]||s(O,l,j),u[e]=j,u[T]=h,v)if(x={values:E?j:_("values"),keys:y?j:_("keys"),entries:S},m)for(g in x)g in O||i(O,g,x[g]);else o(o.P+o.F*(p||b),e,x);return x}},function(t,e,r){"use strict";t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,r){"use strict";t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,r){"use strict";var n=r(16),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},function(t,e,r){"use strict";var n=r(2),o=r(0),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:n.version,mode:r(18)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,e,r){"use strict";var n=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+o).toString(36))}},function(t,e,r){"use strict";t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,r){"use strict";var n=r(0).document;t.exports=n&&n.documentElement},function(t,e,r){"use strict";var n=r(13),o=r(1)("toStringTag"),i="Arguments"==n(function(){return arguments}());t.exports=function(t){var e,r,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?r:i?n(e):"Object"==(s=n(e))&&"function"==typeof e.callee?"Arguments":s}},function(t,e,r){"use strict";var n=r(3),o=r(10),i=r(1)("species");t.exports=function(t,e){var r,s=n(t).constructor;return void 0===s||null==(r=n(s)[i])?e:o(r)}},function(t,e,r){"use strict";var n,o,i,s=r(9),u=r(74),c=r(33),a=r(19),f=r(0),l=f.process,p=f.setImmediate,h=f.clearImmediate,d=f.MessageChannel,v=f.Dispatch,y=0,m={},x=function(){var t=+this;if(m.hasOwnProperty(t)){var e=m[t];delete m[t],e()}},g=function(t){x.call(t.data)};p&&h||(p=function(t){for(var e=[],r=1;arguments.length>r;)e.push(arguments[r++]);return m[++y]=function(){u("function"==typeof t?t:Function(t),e)},n(y),y},h=function(t){delete m[t]},"process"==r(13)(l)?n=function(t){l.nextTick(s(x,t,1))}:v&&v.now?n=function(t){v.now(s(x,t,1))}:d?(i=(o=new d).port2,o.port1.onmessage=g,n=s(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(n=function(t){f.postMessage(t+"","*")},f.addEventListener("message",g,!1)):n="onreadystatechange"in a("script")?function(t){c.appendChild(a("script")).onreadystatechange=function(){c.removeChild(this),x.call(t)}}:function(t){setTimeout(s(x,t,1),0)}),t.exports={set:p,clear:h}},function(t,e,r){"use strict";t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,e,r){"use strict";var n=r(3),o=r(5),i=r(23);t.exports=function(t,e){if(n(t),o(e)&&e.constructor===t)return e;var r=i.f(t);return(0,r.resolve)(e),r.promise}},function(t,e,r){"use strict";var n=a(r(40)),o=a(r(14)),i=a(r(15)),s=a(r(24)),u=a(r(25)),c=a(r(41));function a(t){return t&&t.__esModule?t:{default:t}}t.exports.Configuration=n.default,t.exports.DATA_TYPE=o.default,t.exports.HEADERS=i.default,t.exports.METHOD_MAP=s.default,t.exports.request=u.default,t.exports.sync=c.default},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={uri:"localhost",url:"localhost",contentType:"text/plain",dataType:"text",method:"GET",cache:!0,timeout:0,crossDomain:!1,xhrFields:{},withCredentials:!1,user:null,password:null,allowOrigins:"",allowMethods:null,headers:{},success:null,error:null,complete:null,beforeSend:null,mock:!1}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=c(r(42)),o=c(r(45)),i=c(r(24)),s=(c(r(25)),c(r(14))),u=c(r(15));function c(t){return t&&t.__esModule?t:{default:t}}const a=t=>"[object Function]"==Object.prototype.toString.call(t),f=(l=(0,o.default)(n.default.mark(function t(e,r,o){var c,f,l,p,h;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r){t.next=3;break}throw console.error("No model to sync!"),new Error("No model to sync!");case 3:if(c=null,o||(o={}),f=e?i.default[e]:i.default.READ,l={type:f,dataType:s.default.JSON,success:o.success,error:o.error},o.uri){t.next=13;break}if(!r||!r.uri){t.next=12;break}a(r.uri)?o.uri=r.uri():o.uri=r.uri,t.next=13;break;case 12:throw new Error('A "uri" property or model with "uri" must be specified in the collection or model class!');case 13:return null!=o.data||!r||e!==i.default.CREATE&&e!==i.default.UPDATE&&e!==i.default.PATCH||(l.contentType=u.default.APPLICATION,l.data=JSON.stringify(o.attrs||r.toJSON(o))),l.type!==i.default.READ&&(l.data=null),p=l.data?JSON.stringify(c):null,t.next=18,fetch(o.uri,{method:l.type,headers:{"Content-Type":l.contentType},credentials:"include",body:p}).then(function(t){if(t.ok)return t.json();throw new Error(`${t.status}: ${l.uri} ${t.statusText} `)}).then(function(t){return r.set(t),c=t,t}).then(function(t){return l.success?l.success(t):t}).then(function(t){return r.trigger("request",r,null,o),t}).catch(function(t){return l.error?l.error(t):(console.error(t),t)});case 18:return h=t.sent,t.abrupt("return",h);case 20:case"end":return t.stop()}},t,void 0)})),function(t,e,r){return l.apply(this,arguments)});var l;e.default=f},function(t,e,r){"use strict";t.exports=r(43)},function(t,e,r){"use strict";var n=function(){return this}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(44),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},function(t,e,r){"use strict";!function(e){var r,n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",a="object"==typeof t,f=e.regeneratorRuntime;if(f)a&&(t.exports=f);else{(f=e.regeneratorRuntime=a?t.exports:{}).wrap=w;var l="suspendedStart",p="suspendedYield",h="executing",d="completed",v={},y={};y[s]=function(){return this};var m=Object.getPrototypeOf,x=m&&m(m(M([])));x&&x!==n&&o.call(x,s)&&(y=x);var g=b.prototype=T.prototype=Object.create(y);E.prototype=g.constructor=b,b.constructor=E,b[c]=E.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===E||"GeneratorFunction"===(e.displayName||e.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(g),t},f.awrap=function(t){return{__await:t}},O(P.prototype),P.prototype[u]=function(){return this},f.AsyncIterator=P,f.async=function(t,e,r,n){var o=new P(w(t,e,r,n));return f.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},O(g),g[c]="Generator",g[s]=function(){return this},g.toString=function(){return"[object Generator]"},f.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},f.values=M,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return u.type="throw",u.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var s=this.tryEntries[i],u=s.completion;if("root"===s.tryLoc)return n("end");if(s.tryLoc<=this.prev){var c=o.call(s,"catchLoc"),a=o.call(s,"finallyLoc");if(c&&a){if(this.prev<s.catchLoc)return n(s.catchLoc,!0);if(this.prev<s.finallyLoc)return n(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return n(s.catchLoc,!0)}else{if(!a)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return n(s.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=t,s.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:M(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}}}function w(t,e,r,n){var o=e&&e.prototype instanceof T?e:T,i=Object.create(o.prototype),s=new A(n||[]);return i._invoke=function(t,e,r){var n=l;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return C()}for(r.method=o,r.arg=i;;){var s=r.delegate;if(s){var u=j(s,r);if(u){if(u===v)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var c=_(t,e,r);if("normal"===c.type){if(n=r.done?d:p,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=d,r.method="throw",r.arg=c.arg)}}}(t,r,s),i}function _(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function T(){}function E(){}function b(){}function O(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function P(t){var e;this._invoke=function(r,n){function i(){return new Promise(function(e,i){!function e(r,n,i,s){var u=_(t[r],t,n);if("throw"!==u.type){var c=u.arg,a=c.value;return a&&"object"==typeof a&&o.call(a,"__await")?Promise.resolve(a.__await).then(function(t){e("next",t,i,s)},function(t){e("throw",t,i,s)}):Promise.resolve(a).then(function(t){c.value=t,i(c)},s)}s(u.arg)}(r,n,e,i)})}return e=e?e.then(i,i):i()}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=_(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function M(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:C}}function C(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},function(t,e,r){"use strict";e.__esModule=!0;var n,o=r(46),i=(n=o)&&n.__esModule?n:{default:n};e.default=function(t){return function(){var e=t.apply(this,arguments);return new i.default(function(t,r){return function n(o,s){try{var u=e[o](s),c=u.value}catch(t){return void r(t)}if(!u.done)return i.default.resolve(c).then(function(t){n("next",t)},function(t){n("throw",t)});t(c)}("next")})}}},function(t,e,r){"use strict";t.exports={default:r(47),__esModule:!0}},function(t,e,r){"use strict";r(48),r(49),r(64),r(68),r(80),r(81),t.exports=r(2).Promise},function(t,e,r){},function(t,e,r){"use strict";var n=r(50)(!0);r(26)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,r=this._i;return r>=e.length?{value:void 0,done:!0}:(t=n(e,r),this._i+=t.length,{value:t,done:!1})})},function(t,e,r){"use strict";var n=r(16),o=r(17);t.exports=function(t){return function(e,r){var i,s,u=String(o(e)),c=n(r),a=u.length;return c<0||c>=a?t?"":void 0:(i=u.charCodeAt(c))<55296||i>56319||c+1===a||(s=u.charCodeAt(c+1))<56320||s>57343?t?u.charAt(c):i:t?u.slice(c,c+2):s-56320+(i-55296<<10)+65536}}},function(t,e,r){"use strict";t.exports=!r(6)&&!r(27)(function(){return 7!=Object.defineProperty(r(19)("div"),"a",{get:function(){return 7}}).a})},function(t,e,r){"use strict";var n=r(5);t.exports=function(t,e){if(!n(t))return t;var r,o;if(e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t)))return o;if(!e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,r){"use strict";t.exports=r(4)},function(t,e,r){"use strict";var n=r(55),o=r(28),i=r(22),s={};r(4)(s,r(1)("iterator"),function(){return this}),t.exports=function(t,e,r){t.prototype=n(s,{next:o(1,r)}),i(t,e+" Iterator")}},function(t,e,r){"use strict";var n=r(3),o=r(56),i=r(32),s=r(21)("IE_PROTO"),u=function(){},c=function(){var t,e=r(19)("iframe"),n=i.length;for(e.style.display="none",r(33).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;n--;)delete c.prototype[i[n]];return c()};t.exports=Object.create||function(t,e){var r;return null!==t?(u.prototype=n(t),r=new u,u.prototype=null,r[s]=t):r=c(),void 0===e?r:o(r,e)}},function(t,e,r){"use strict";var n=r(11),o=r(3),i=r(57);t.exports=r(6)?Object.defineProperties:function(t,e){o(t);for(var r,s=i(e),u=s.length,c=0;u>c;)n.f(t,r=s[c++],e[r]);return t}},function(t,e,r){"use strict";var n=r(58),o=r(32);t.exports=Object.keys||function(t){return n(t,o)}},function(t,e,r){"use strict";var n=r(12),o=r(20),i=r(60)(!1),s=r(21)("IE_PROTO");t.exports=function(t,e){var r,u=o(t),c=0,a=[];for(r in u)r!=s&&n(u,r)&&a.push(r);for(;e.length>c;)n(u,r=e[c++])&&(~i(a,r)||a.push(r));return a}},function(t,e,r){"use strict";var n=r(13);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==n(t)?t.split(""):Object(t)}},function(t,e,r){"use strict";var n=r(20),o=r(29),i=r(61);t.exports=function(t){return function(e,r,s){var u,c=n(e),a=o(c.length),f=i(s,a);if(t&&r!=r){for(;a>f;)if((u=c[f++])!=u)return!0}else for(;a>f;f++)if((t||f in c)&&c[f]===r)return t||f||0;return!t&&-1}}},function(t,e,r){"use strict";var n=r(16),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=n(t))<0?o(t+e,0):i(t,e)}},function(t,e,r){"use strict";var n=r(12),o=r(63),i=r(21)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),n(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},function(t,e,r){"use strict";var n=r(17);t.exports=function(t){return Object(n(t))}},function(t,e,r){"use strict";r(65);for(var n=r(0),o=r(4),i=r(7),s=r(1)("toStringTag"),u="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<u.length;c++){var a=u[c],f=n[a],l=f&&f.prototype;l&&!l[s]&&o(l,s,a),i[a]=i.Array}},function(t,e,r){"use strict";var n=r(66),o=r(67),i=r(7),s=r(20);t.exports=r(26)(Array,"Array",function(t,e){this._t=s(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?r:"values"==e?t[r]:[r,t[r]])},"values"),i.Arguments=i.Array,n("keys"),n("values"),n("entries")},function(t,e,r){"use strict";t.exports=function(){}},function(t,e,r){"use strict";t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,r){"use strict";var n,o,i,s,u=r(18),c=r(0),a=r(9),f=r(34),l=r(8),p=r(5),h=r(10),d=r(69),v=r(70),y=r(35),m=r(36).set,x=r(75)(),g=r(23),w=r(37),_=r(76),T=r(38),E=c.TypeError,b=c.process,O=b&&b.versions,P=O&&O.v8||"",j=c.Promise,S="process"==f(b),L=function(){},A=o=g.f,M=!!function(){try{var t=j.resolve(1),e=(t.constructor={})[r(1)("species")]=function(t){t(L,L)};return(S||"function"==typeof PromiseRejectionEvent)&&t.then(L)instanceof e&&0!==P.indexOf("6.6")&&-1===_.indexOf("Chrome/66")}catch(t){}}(),C=function(t){var e;return!(!p(t)||"function"!=typeof(e=t.then))&&e},R=function(t,e){if(!t._n){t._n=!0;var r=t._c;x(function(){for(var n=t._v,o=1==t._s,i=0,s=function(e){var r,i,s,u=o?e.ok:e.fail,c=e.resolve,a=e.reject,f=e.domain;try{u?(o||(2==t._h&&G(t),t._h=1),!0===u?r=n:(f&&f.enter(),r=u(n),f&&(f.exit(),s=!0)),r===e.promise?a(E("Promise-chain cycle")):(i=C(r))?i.call(r,c,a):c(r)):a(n)}catch(t){f&&!s&&f.exit(),a(t)}};r.length>i;)s(r[i++]);t._c=[],t._n=!1,e&&!t._h&&N(t)})}},N=function(t){m.call(c,function(){var e,r,n,o=t._v,i=k(t);if(i&&(e=w(function(){S?b.emit("unhandledRejection",o,t):(r=c.onunhandledrejection)?r({promise:t,reason:o}):(n=c.console)&&n.error&&n.error("Unhandled promise rejection",o)}),t._h=S||k(t)?2:1),t._a=void 0,i&&e.e)throw e.v})},k=function(t){return 1!==t._h&&0===(t._a||t._c).length},G=function(t){m.call(c,function(){var e;S?b.emit("rejectionHandled",t):(e=c.onrejectionhandled)&&e({promise:t,reason:t._v})})},H=function(t){var e=this;e._d||(e._d=!0,(e=e._w||e)._v=t,e._s=2,e._a||(e._a=e._c.slice()),R(e,!0))},D=function(t){var e,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===t)throw E("Promise can't be resolved itself");(e=C(t))?x(function(){var n={_w:r,_d:!1};try{e.call(t,a(D,n,1),a(H,n,1))}catch(t){H.call(n,t)}}):(r._v=t,r._s=1,R(r,!1))}catch(t){H.call({_w:r,_d:!1},t)}}};M||(j=function(t){d(this,j,"Promise","_h"),h(t),n.call(this);try{t(a(D,this,1),a(H,this,1))}catch(t){H.call(this,t)}},(n=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=r(77)(j.prototype,{then:function(t,e){var r=A(y(this,j));return r.ok="function"!=typeof t||t,r.fail="function"==typeof e&&e,r.domain=S?b.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&R(this,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new n;this.promise=t,this.resolve=a(D,t,1),this.reject=a(H,t,1)},g.f=A=function(t){return t===j||t===s?new i(t):o(t)}),l(l.G+l.W+l.F*!M,{Promise:j}),r(22)(j,"Promise"),r(78)("Promise"),s=r(2).Promise,l(l.S+l.F*!M,"Promise",{reject:function(t){var e=A(this);return(0,e.reject)(t),e.promise}}),l(l.S+l.F*(u||!M),"Promise",{resolve:function(t){return T(u&&this===s?j:this,t)}}),l(l.S+l.F*!(M&&r(79)(function(t){j.all(t).catch(L)})),"Promise",{all:function(t){var e=this,r=A(e),n=r.resolve,o=r.reject,i=w(function(){var r=[],i=0,s=1;v(t,!1,function(t){var u=i++,c=!1;r.push(void 0),s++,e.resolve(t).then(function(t){c||(c=!0,r[u]=t,--s||n(r))},o)}),--s||n(r)});return i.e&&o(i.v),r.promise},race:function(t){var e=this,r=A(e),n=r.reject,o=w(function(){v(t,!1,function(t){e.resolve(t).then(r.resolve,n)})});return o.e&&n(o.v),r.promise}})},function(t,e,r){"use strict";t.exports=function(t,e,r,n){if(!(t instanceof e)||void 0!==n&&n in t)throw TypeError(r+": incorrect invocation!");return t}},function(t,e,r){"use strict";var n=r(9),o=r(71),i=r(72),s=r(3),u=r(29),c=r(73),a={},f={},l=t.exports=function(t,e,r,l,p){var h,d,v,y,m=p?function(){return t}:c(t),x=n(r,l,e?2:1),g=0;if("function"!=typeof m)throw TypeError(t+" is not iterable!");if(i(m)){for(h=u(t.length);h>g;g++)if((y=e?x(s(d=t[g])[0],d[1]):x(t[g]))===a||y===f)return y}else for(v=m.call(t);!(d=v.next()).done;)if((y=o(v,x,d.value,e))===a||y===f)return y};l.BREAK=a,l.RETURN=f},function(t,e,r){"use strict";var n=r(3);t.exports=function(t,e,r,o){try{return o?e(n(r)[0],r[1]):e(r)}catch(e){var i=t.return;throw void 0!==i&&n(i.call(t)),e}}},function(t,e,r){"use strict";var n=r(7),o=r(1)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(n.Array===t||i[o]===t)}},function(t,e,r){"use strict";var n=r(34),o=r(1)("iterator"),i=r(7);t.exports=r(2).getIteratorMethod=function(t){if(null!=t)return t[o]||t["@@iterator"]||i[n(t)]}},function(t,e,r){"use strict";t.exports=function(t,e,r){var n=void 0===r;switch(e.length){case 0:return n?t():t.call(r);case 1:return n?t(e[0]):t.call(r,e[0]);case 2:return n?t(e[0],e[1]):t.call(r,e[0],e[1]);case 3:return n?t(e[0],e[1],e[2]):t.call(r,e[0],e[1],e[2]);case 4:return n?t(e[0],e[1],e[2],e[3]):t.call(r,e[0],e[1],e[2],e[3])}return t.apply(r,e)}},function(t,e,r){"use strict";var n=r(0),o=r(36).set,i=n.MutationObserver||n.WebKitMutationObserver,s=n.process,u=n.Promise,c="process"==r(13)(s);t.exports=function(){var t,e,r,a=function(){var n,o;for(c&&(n=s.domain)&&n.exit();t;){o=t.fn,t=t.next;try{o()}catch(n){throw t?r():e=void 0,n}}e=void 0,n&&n.enter()};if(c)r=function(){s.nextTick(a)};else if(!i||n.navigator&&n.navigator.standalone)if(u&&u.resolve){var f=u.resolve(void 0);r=function(){f.then(a)}}else r=function(){o.call(n,a)};else{var l=!0,p=document.createTextNode("");new i(a).observe(p,{characterData:!0}),r=function(){p.data=l=!l}}return function(n){var o={fn:n,next:void 0};e&&(e.next=o),t||(t=o,r()),e=o}}},function(t,e,r){"use strict";var n=r(0).navigator;t.exports=n&&n.userAgent||""},function(t,e,r){"use strict";var n=r(4);t.exports=function(t,e,r){for(var o in e)r&&t[o]?t[o]=e[o]:n(t,o,e[o]);return t}},function(t,e,r){"use strict";var n=r(0),o=r(2),i=r(11),s=r(6),u=r(1)("species");t.exports=function(t){var e="function"==typeof o[t]?o[t]:n[t];s&&e&&!e[u]&&i.f(e,u,{configurable:!0,get:function(){return this}})}},function(t,e,r){"use strict";var n=r(1)("iterator"),o=!1;try{var i=[7][n]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var r=!1;try{var i=[7],s=i[n]();s.next=function(){return{done:r=!0}},i[n]=function(){return s},t(i)}catch(t){}return r}},function(t,e,r){"use strict";var n=r(8),o=r(2),i=r(0),s=r(35),u=r(38);n(n.P+n.R,"Promise",{finally:function(t){var e=s(this,o.Promise||i.Promise),r="function"==typeof t;return this.then(r?function(r){return u(e,t()).then(function(){return r})}:t,r?function(r){return u(e,t()).then(function(){throw r})}:t)}})},function(t,e,r){"use strict";var n=r(8),o=r(23),i=r(37);n(n.S,"Promise",{try:function(t){var e=o.f(this),r=i(t);return(r.e?e.reject:e.resolve)(r.v),e.promise}})}])});
//# sourceMappingURL=presentation-request.js.map