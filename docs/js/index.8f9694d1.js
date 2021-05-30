(function(e){function t(t){for(var o,u,l=t[0],s=t[1],i=t[2],d=0,a=[];d<l.length;d++)u=l[d],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&a.push(r[u][0]),r[u]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);b&&b(t);while(a.length)a.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,l=1;l<n.length;l++){var s=n[l];0!==r[s]&&(o=!1)}o&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={index:0},c=[];function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var b=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("aef7")},aef7:function(e,t,n){"use strict";n.r(t);var o=n("7a23");const r=Object(o["d"])("h1",null,"所有 demo 以网络请求为例，请打开 Devtool -> Network 查看效果",-1);function c(e,t,n,c,u,l){const s=Object(o["g"])("DebounceAsync"),i=Object(o["g"])("ThrottleAsync"),b=Object(o["g"])("ConcurrentAsync");return Object(o["f"])(),Object(o["c"])(o["a"],null,[r,Object(o["d"])(s),Object(o["d"])(i),Object(o["d"])(b)],64)}const u=Object(o["d"])("legend",null,"debounceAsync",-1),l=Object(o["d"])("ul",null,[Object(o["d"])("li",null," 背景：网络不稳，响应时间严重不均匀，无法保证响应顺序和请求顺序一致 "),Object(o["d"])("li",null," 需求：无论网络请求的返回顺序如何，我们只想要最后一次发起的请求结果 "),Object(o["d"])("li",null," 注释：如果说debounce是发送前取最后一次输入，那么debounceAsync就是发送后取最后一次请求对应的输出 "),Object(o["d"])("li",null,"原文：https://github.com/bowencool/blog/issues/3")],-1);function s(e,t,n,r,c,s){return Object(o["f"])(),Object(o["c"])("fieldset",null,[u,l,Object(o["d"])("input",{onInput:t[1]||(t[1]=(...t)=>e.onInput&&e.onInput(...t)),type:"text",placeholder:"type something quickly"},null,32)])}function i(e){let t=0;return function(...n){const o=++t;return e.call(this,...n).then((...e)=>o!==t?new Promise(()=>{}):Promise.resolve(...e))}}function b(e){let t=!1;return function(...n){return t?new Promise(()=>{}):(t=!0,e.call(this,...n).then((...e)=>(t=!1,Promise.resolve(...e))).catch((...e)=>(t=!1,Promise.reject(...e))))}}function d(e,t=3){let n;const o=[];let r=0;function c(){if(r>=t)return;const e=o.shift();e&&u(e)}function u([t,o,u]){r++,e.apply(n,t).then((...e)=>{o(...e),r--,c()}).catch((...e)=>{u(...e),r--,c()})}return function(...e){n=this;const t=new Promise((t,n)=>{o.push([e,t,n])});return c(),t}}function a(e){console.log("fetching",e);const t=(1+2*Math.random()).toFixed(3);return fetch(`https://httpbin.org/delay/${t}?keywords=${e}`,{method:"GET",mode:"cors"})}const f=i(a);var p=Object(o["e"])({setup(){return{async onInput(e){const t=e.target.value,n=await f(t);console.log(n)}}}});p.render=s;var h=p;const O=Object(o["d"])("legend",null,"throttleAsync",-1),j=Object(o["d"])("ul",null,[Object(o["d"])("li",null," 背景：为防止用户重复提交，我们通常需要维护一个loading变量，然而有时候就是懒。 "),Object(o["d"])("li",null,"需求：站着把钱挣了"),Object(o["d"])("li",null,"原文：https://github.com/bowencool/blog/issues/3")],-1);function y(e,t,n,r,c,u){return Object(o["f"])(),Object(o["c"])("fieldset",null,[O,j,Object(o["d"])("button",{onClick:t[1]||(t[1]=(...t)=>e.onSubmit&&e.onSubmit(...t))},"submit(click me quickly)")])}function g(e){return console.log("submiting",e),fetch("https://httpbin.org/delay/1.5",{body:JSON.stringify(e),method:"POST",mode:"cors"})}const m=b(g);var v=Object(o["e"])({setup(){return{async onSubmit(){await m({msg:"some data to be sent"}),console.log("submit completed")}}}});v.render=y;var w=v;const P=Object(o["d"])("legend",null," concurrentAsync ",-1),k=Object(o["d"])("p",null,"一个限制最大并发的高阶函数",-1);function A(e,t,n,r,c,u){return Object(o["f"])(),Object(o["c"])("fieldset",null,[P,k,Object(o["d"])("button",{onClick:t[1]||(t[1]=(...t)=>e.onRequest&&e.onRequest(...t))},"无限制并发请求"),Object(o["d"])("button",{onClick:t[2]||(t[2]=(...t)=>e.onConcurrentRequest&&e.onConcurrentRequest(...t))},"限制并发请求")])}function x(e){const t=(1+3*Math.random()).toFixed(3);return console.log("fetch start:",e),fetch(`https://httpbin.org/delay/${t}?t=${t}`,{method:"GET",mode:"cors"}).then(()=>e)}const S=d(x,3);var q=Object(o["e"])({setup(){return{onRequest(){for(let e=0;e<7;e++)x(e).then(t=>console.log("rez:",e,t))},onConcurrentRequest(){for(let e=0;e<7;e++)S(e).then(t=>console.log("rez:",e,t))}}}});q.render=A;var C=q,T=Object(o["e"])({name:"App",components:{DebounceAsync:h,ThrottleAsync:w,ConcurrentAsync:C}});T.render=c;var M=T;Object(o["b"])(M).mount(document.body)}});
//# sourceMappingURL=index.8f9694d1.js.map