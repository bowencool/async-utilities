import{d as n,r as s,e as a,F as p,f as t,o,c as e,b as c,a as l}from"./app.291d2ca8.js";class r extends Error{}class u extends Error{}function i(n=1e3){return new Promise((s=>{console.log(`The task will be completed in ${n}ms`),setTimeout((()=>s(`The result in ${n}ms`)),n)}))}var k=n({setup(){let n;const o=s({loading:!1,error:null,data:""});return()=>a(p,null,[a("p",null,[t("fetch、xhr 原生就可以取消，所以这里就不用 HTTP 做示例了")]),a("button",{onClick:async function(){if(!o.loading){n=new AbortController;try{o.loading=!0,o.error=null,o.data=await function(n,s={}){return function(...a){return new Promise(((p,t)=>{let o;function e(){t(new r("aborted"))}function c(){o&&clearTimeout(o),s.signal&&s.signal.removeEventListener("abort",e)}"number"==typeof s.timeout&&s.timeout>0&&(o=setTimeout((function(){t(new u(`timeout of ${s.timeout}ms`))}),s.timeout)),s.signal&&s.signal.addEventListener("abort",e),n.call(this,...a).then(((...n)=>{p(...n),c()})).catch(((...n)=>{t(...n),c()}))}))}}(i,{timeout:2e3,signal:n.signal})(1900+Math.floor(200*Math.random()))}catch(s){o.error=s,o.data=""}finally{o.loading=!1}}},disabled:!!o.loading||void 0},[o.loading?"loading...":"start"]),o.loading&&a("button",{onClick:()=>{n.abort()}},[t("stop")]),a("pre",null,[JSON.stringify(o,((n,s)=>s instanceof Error?s.message:s),2)])])}});const b=c("h2",{id:"intro",tabindex:"-1"},[t("Intro "),c("a",{class:"header-anchor",href:"#intro","aria-hidden":"true"},"#")],-1),m=c("p",null,"超时取消、手动取消.",-1),d=c("h2",{id:"demo",tabindex:"-1"},[t("Demo "),c("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#")],-1),g=l('',3),y='{"title":"Intro","description":"","frontmatter":{},"headers":[{"level":2,"title":"Intro","slug":"intro"},{"level":2,"title":"Demo","slug":"demo"},{"level":2,"title":"Types","slug":"types"}],"relativePath":"functions/abortableAsync/readme.md","lastUpdated":1631717275424}',h={};const f=Object.assign(h,{setup:function(n){return(n,s)=>(o(),e("div",null,[b,m,d,a(k),g]))}});export{y as __pageData,f as default};