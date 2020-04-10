/* ==========================================================================
   Polyfills for Internet Explorer 8 and below
   ========================================================================== */

/*
 * HTML5 Shiv v3.7.0 | https://github.com/aFarkas/html5shiv
 */

(function(e,t){function n(){var e=v.elements;return"string"==typeof e?e.split(" "):e}function r(e){var t=p[e[c]];t||(t={},h++,e[c]=h,p[h]=t);return t}function i(e,n,i){n||(n=t);if(d)return n.createElement(e);i||(i=r(n));n=i.cache[e]?i.cache[e].cloneNode():f.test(e)?(i.cache[e]=i.createElem(e)).cloneNode():i.createElem(e);return n.canHaveChildren&&!a.test(e)?i.frag.appendChild(n):n}function s(e,t){if(!t.cache)t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag();e.createElement=function(n){return!v.shivMethods?t.createElem(n):i(n,e,t)};e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+n().join().replace(/[\w\-]+/g,function(e){t.createElem(e);t.frag.createElement(e);return'c("'+e+'")'})+");return n}")(v,t.frag)}function o(e){e||(e=t);var n=r(e);if(v.shivCSS&&!l&&!n.hasCSS){var i,o=e;i=o.createElement("p");o=o.getElementsByTagName("head")[0]||o.documentElement;i.innerHTML="x<style>article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}</style>";i=o.insertBefore(i.lastChild,o.firstChild);n.hasCSS=!!i}d||s(e,n);return e}var u=e.html5||{},a=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,l,c="_html5shiv",h=0,p={},d;(function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>";l="hidden"in e;var n;if(!(n=1==e.childNodes.length)){t.createElement("a");var r=t.createDocumentFragment();n="undefined"==typeof r.cloneNode||"undefined"==typeof r.createDocumentFragment||"undefined"==typeof r.createElement}d=n}catch(i){d=l=!0}})();var v={elements:u.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:"3.7.0",shivCSS:!1!==u.shivCSS,supportsUnknownElements:d,shivMethods:!1!==u.shivMethods,type:"default",shivDocument:o,createElement:i,createDocumentFragment:function(e,i){e||(e=t);if(d)return e.createDocumentFragment();for(var i=i||r(e),s=i.frag.cloneNode(),o=0,u=n(),a=u.length;o<a;o++)s.createElement(u[o]);return s}};e.html5=v;o(t)})(this,document);

/*
 * selectivizr v1.0.3b | https://github.com/keithclark/selectivizr
 */

(function(e){function _(e){return e.replace(g,M).replace(y,function(e,t,n){var r=n.split(",");for(var i=0,s=r.length;i<s;i++){var o=R(r[i])+O;var u=[];r[i]=o.replace(b,function(e,t,n,r,i){if(t){if(u.length>0){f.push({selector:o.substring(0,i),patches:u});u=[]}return t}else{var s=n?P(n):D(r);if(s){u.push(s);return"."+s.className}return e}})}return t+r.join(",")})}function D(e){return!T||T.test(e)?{className:j(e),applyClass:true}:null}function P(t){var n=true;var i=j(t.slice(1));var o=t.substring(0,5)==":not(";var u;var f;if(o){t=t.slice(5,-1)}var l=t.indexOf("(");if(l>-1){t=t.substring(0,l)}if(t.charAt(0)==":"){switch(t.slice(1)){case"root":n=function(e){return o?e!=r:e==r};break;case"target":if(s==8){n=function(t){var n=function(){var e=location.hash;var n=e.slice(1);return o?e==A||t.id!=n:e!=A&&t.id==n};W(e,"hashchange",function(){U(t,i,n())});return n()};break}return false;case"checked":n=function(e){if(x.test(e.type)){W(e,"propertychange",function(){if(event.propertyName=="checked"){U(e,i,e.checked!==o)}})}return e.checked!==o};break;case"disabled":o=!o;case"enabled":n=function(e){if(S.test(e.tagName)){W(e,"propertychange",function(){if(event.propertyName=="$disabled"){U(e,i,e.$disabled===o)}});a.push(e);e.$disabled=e.disabled;return e.disabled===o}return t==":enabled"?o:!o};break;case"focus":u="focus";f="blur";case"hover":if(!u){u="mouseenter";f="mouseleave"}n=function(e){W(e,o?f:u,function(){U(e,i,true)});W(e,o?u:f,function(){U(e,i,false)});return o};break;default:if(!m.test(t)){return false}break}}return{className:i,applyClass:n}}function H(){var e,t,n,r;for(var i=0;i<f.length;i++){t=f[i].selector;n=f[i].patches;r=t.replace(w,A);if(r==A||r.charAt(r.length-1)==O){r+="*"}try{e=u(r)}catch(s){F("Selector '"+t+"' threw exception '"+s+"'")}if(e){for(var o=0,a=e.length;o<a;o++){var l=e[o];var c=l.className;for(var h=0,p=n.length;h<p;h++){var d=n[h];if(!B(l,d)){if(d.applyClass&&(d.applyClass===true||d.applyClass(l)===true)){c=z(c,d.className,true)}}}l.className=c}}}}function B(e,t){return(new RegExp("(^|\\s)"+t.className+"(\\s|$)")).test(e.className)}function j(e){return h+"-"+(s==6&&c?l++:e.replace(E,function(e){return e.charCodeAt(0)}))}function F(t){if(e.console){e.console.log(t)}}function I(e){return e.replace(L,M)}function q(e){return I(e).replace(k,O)}function R(e){return q(e.replace(N,M).replace(C,M))}function U(e,t,n){var r=e.className;var i=z(r,t,n);if(i!=r){e.className=i;e.parentNode.className+=A}}function z(e,t,n){var r=RegExp("(^|\\s)"+t+"(\\s|$)");var i=r.test(e);if(n){return i?e:e+O+t}else{return i?I(e.replace(r,M)):e}}function W(e,t,n){e.attachEvent("on"+t,n)}function X(){if(e.XMLHttpRequest){return new XMLHttpRequest}try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(t){return null}}function V(e){i.open("GET",e,false);i.send();return i.status==200?i.responseText:A}function $(e,t,n){function r(e){return e.substring(0,e.indexOf("//"))}function i(e){return e.substring(0,e.indexOf("/",8))}if(!t){t=Y}if(e.substring(0,2)=="//"){e=r(t)+e}if(/^https?:\/\//i.test(e)){return!n&&i(t)!=i(e)?null:e}if(e.charAt(0)=="/"){return i(t)+e}var s=t.split(/[?#]/)[0];if(e.charAt(0)!="?"&&s.charAt(s.length-1)!="/"){s=s.substring(0,s.lastIndexOf("/")+1)}return s+e}function J(e){if(e){return V(e).replace(p,A).replace(d,function(t,n,r,i,s,o){var u=J($(r||s,e));return o?"@media "+o+" {"+u+"}":u}).replace(v,function(t,n,r,i){r=r||A;return n?t:" url("+r+$(i,e,true)+r+") "})}return A}function K(){var e,t;for(var r=0;r<n.styleSheets.length;r++){t=n.styleSheets[r];if(t.href!=A){e=$(t.href);if(e){t.cssText=t["rawCssText"]=_(J(e))}}}}function Q(){H();if(a.length>0){setInterval(function(){for(var e=0,t=a.length;e<t;e++){var n=a[e];if(n.disabled!==n.$disabled){if(n.disabled){n.disabled=false;n.$disabled=true;n.disabled=true}else{n.$disabled=n.disabled}}}},250)}}function Z(e,t){var i=false,s=true,o=function(r){if(r.type=="readystatechange"&&n.readyState!="complete")return;(r.type=="load"?e:n).detachEvent("on"+r.type,o,false);if(!i&&(i=true))t.call(e,r.type||r)},u=function(){try{r.doScroll("left")}catch(e){setTimeout(u,50);return}o("poll")};if(n.readyState=="complete")t.call(e,A);else{if(n.createEventObject&&r.doScroll){try{s=!e.frameElement}catch(a){}if(s)u()}W(n,"readystatechange",o);W(e,"load",o)}}var t=navigator.userAgent.match(/MSIE (\d+)/);if(!t){return false}var n=document;var r=n.documentElement;var i=X();var s=t[1];if(n.compatMode!="CSS1Compat"||s<6||s>8||!i){return}var o={NW:"*.Dom.select",MooTools:"$$",DOMAssistant:"*.$",Prototype:"$$",YAHOO:"*.util.Selector.query",Sizzle:"*",jQuery:"*",dojo:"*.query"};var u;var a=[];var f=[];var l=0;var c=true;var h="slvzr";var p=/(\/\*[^*]*\*+([^\/][^*]*\*+)*\/)\s*?/g;var d=/@import\s*(?:(?:(?:url\(\s*(['"]?)(.*)\1)\s*\))|(?:(['"])(.*)\3))\s*([^;]*);/g;var v=/(behavior\s*?:\s*)?\burl\(\s*(["']?)(?!data:)([^"')]+)\2\s*\)/g;var m=/^:(empty|(first|last|only|nth(-last)?)-(child|of-type))$/;var g=/:(:first-(?:line|letter))/g;var y=/((?:^|(?:\s*})+)(?:\s*@media[^{]+{)?)\s*([^\{]*?[\[:][^{]+)/g;var b=/([ +~>])|(:[a-z-]+(?:\(.*?\)+)?)|(\[.*?\])/g;var w=/(:not\()?:(hover|enabled|disabled|focus|checked|target|active|visited|first-line|first-letter)\)?/g;var E=/[^\w-]/g;var S=/^(INPUT|SELECT|TEXTAREA|BUTTON)$/;var x=/^(checkbox|radio)$/;var T=s>6?/[\$\^*]=(['"])\1/:null;var N=/([(\[+~])\s+/g;var C=/\s+([)\]+~])/g;var k=/\s+/g;var L=/^\s*((?:[\S\s]*\S)?)\s*$/;var A="";var O=" ";var M="$1";var G=n.getElementsByTagName("BASE");var Y=G.length>0?G[0].href:n.location.href;K();Z(e,function(){for(var t in o){var n,r,i=e;if(e[t]){n=o[t].replace("*",t).split(".");while((r=n.shift())&&(i=i[r])){}if(typeof i=="function"){u=i;Q();return}}}});})(this);

/*
 * matchMedia() | https://github.com/scottjehl/Respond
 */

(function(e){"use strict";e.matchMedia=e.matchMedia||function(e,t){var n,r=e.documentElement,i=r.firstElementChild||r.firstChild,s=e.createElement("body"),o=e.createElement("div");o.id="mq-test-1";o.style.cssText="position:absolute;top:-100em";s.style.background="none";s.appendChild(o);return function(e){o.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>';r.insertBefore(s,i);n=o.offsetWidth===42;r.removeChild(s);return{matches:n,media:e}}}(e.document)})(this);

/*
 * Respond.js v1.4.2 | https://github.com/scottjehl/Respond
 */

(function(e){"use strict";function T(){w(true)}var t={};e.respond=t;t.update=function(){};var n=[],r=function(){var t=false;try{t=new e.XMLHttpRequest}catch(n){t=new e.ActiveXObject("Microsoft.XMLHTTP")}return function(){return t}}(),i=function(e,t){var n=r();if(!n){return}n.open("GET",e,true);n.onreadystatechange=function(){if(n.readyState!==4||n.status!==200&&n.status!==304){return}t(n.responseText)};if(n.readyState===4){return}n.send(null)},s=function(e){return e.replace(t.regex.minmaxwh,"").match(t.regex.other)};t.ajax=i;t.queue=n;t.unsupportedmq=s;t.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,comments:/\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,maxw:/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,minmaxwh:/\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,other:/\([^\)]*\)/g};t.mediaQueriesSupported=e.matchMedia&&e.matchMedia("only all")!==null&&e.matchMedia("only all").matches;if(t.mediaQueriesSupported){return}var o=e.document,u=o.documentElement,a=[],f=[],l=[],c={},h=30,p=o.getElementsByTagName("head")[0]||u,d=o.getElementsByTagName("base")[0],v=p.getElementsByTagName("link"),m,g,y,b=function(){var e,t=o.createElement("div"),n=o.body,r=u.style.fontSize,i=n&&n.style.fontSize,s=false;t.style.cssText="position:absolute;font-size:1em;width:1em";if(!n){n=s=o.createElement("body");n.style.background="none"}u.style.fontSize="100%";n.style.fontSize="100%";n.appendChild(t);if(s){u.insertBefore(n,u.firstChild)}e=t.offsetWidth;if(s){u.removeChild(n)}else{n.removeChild(t)}u.style.fontSize=r;if(i){n.style.fontSize=i}e=y=parseFloat(e);return e},w=function(t){var n="clientWidth",r=u[n],i=o.compatMode==="CSS1Compat"&&r||o.body[n]||r,s={},c=v[v.length-1],d=(new Date).getTime();if(t&&m&&d-m<h){e.clearTimeout(g);g=e.setTimeout(w,h);return}else{m=d}for(var E in a){if(a.hasOwnProperty(E)){var S=a[E],x=S.minw,T=S.maxw,N=x===null,C=T===null,k="em";if(!!x){x=parseFloat(x)*(x.indexOf(k)>-1?y||b():1)}if(!!T){T=parseFloat(T)*(T.indexOf(k)>-1?y||b():1)}if(!S.hasquery||(!N||!C)&&(N||i>=x)&&(C||i<=T)){if(!s[S.media]){s[S.media]=[]}s[S.media].push(f[S.rules])}}}for(var L in l){if(l.hasOwnProperty(L)){if(l[L]&&l[L].parentNode===p){p.removeChild(l[L])}}}l.length=0;for(var A in s){if(s.hasOwnProperty(A)){var O=o.createElement("style"),M=s[A].join("\n");O.type="text/css";O.media=A;p.insertBefore(O,c.nextSibling);if(O.styleSheet){O.styleSheet.cssText=M}else{O.appendChild(o.createTextNode(M))}l.push(O)}}},E=function(e,n,r){var i=e.replace(t.regex.comments,"").replace(t.regex.keyframes,"").match(t.regex.media),o=i&&i.length||0;n=n.substring(0,n.lastIndexOf("/"));var u=function(e){return e.replace(t.regex.urls,"$1"+n+"$2$3")},l=!o&&r;if(n.length){n+="/"}if(l){o=1}for(var c=0;c<o;c++){var h,p,d,v;if(l){h=r;f.push(u(e))}else{h=i[c].match(t.regex.findStyles)&&RegExp.$1;f.push(RegExp.$2&&u(RegExp.$2))}d=h.split(",");v=d.length;for(var m=0;m<v;m++){p=d[m];if(s(p)){continue}a.push({media:p.split("(")[0].match(t.regex.only)&&RegExp.$2||"all",rules:f.length-1,hasquery:p.indexOf("(")>-1,minw:p.match(t.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:p.match(t.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}}w()},S=function(){if(n.length){var t=n.shift();i(t.href,function(n){E(n,t.href,t.media);c[t.href]=true;e.setTimeout(function(){S()},0)})}},x=function(){for(var t=0;t<v.length;t++){var r=v[t],i=r.href,s=r.media,o=r.rel&&r.rel.toLowerCase()==="stylesheet";if(!!i&&o&&!c[i]){if(r.styleSheet&&r.styleSheet.rawCssText){E(r.styleSheet.rawCssText,i,s);c[i]=true}else{if(!/^([a-zA-Z:]*\/\/)/.test(i)&&!d||i.replace(RegExp.$1,"").split("/")[0]===e.location.host){if(i.substring(0,2)==="//"){i=e.location.protocol+i}n.push({href:i,media:s})}}}}S()};x();t.update=x;t.getEmValue=b;if(e.addEventListener){e.addEventListener("resize",T,false)}else if(e.attachEvent){e.attachEvent("onresize",T)}})(this);