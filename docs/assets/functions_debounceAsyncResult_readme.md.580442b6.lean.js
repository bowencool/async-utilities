import{d as n,g as s,o as a,c as t,b as p,F as e,h as o,e as c,a as l}from"./app.d9cbc884.js";const u=function(n){let s=0;return function(...a){const t=++s;return n.call(this,...a).then(((...n)=>t!==s?new Promise((()=>{})):Promise.resolve(...n)))}}((function(n){console.log("fetching",n);const s=(.4+2*Math.random()).toFixed(3);return fetch(`https://httpbin.org/delay/${s}?keywords=${n}`,{method:"GET",mode:"cors"}).then((()=>[`suggestions1 for ${n}`,`suggestions2 for ${n}`,`suggestions3 for ${n}`]))}));var i=n({setup(){const n=s([]);return{suggestions:n,async onInput(s){const a=s.target.value,t=await u(a);n.value=t}}}});const r={id:"suggestions"},k=["value"];i.render=function(n,s,c,l,u,i){return a(),t(e,null,[p("input",{onInput:s[0]||(s[0]=(...s)=>n.onInput&&n.onInput(...s)),type:"text",placeholder:"type something quickly",list:"suggestions",style:{width:"300px"}},null,32),p("datalist",r,[(a(!0),t(e,null,o(n.suggestions,(n=>(a(),t("option",{key:n,value:n},null,8,k)))),128))])],64)};const b=l('',7),d=l('',3),m='{"title":"Intro","description":"","frontmatter":{},"headers":[{"level":2,"title":"Intro","slug":"intro"},{"level":2,"title":"Demo","slug":"demo"},{"level":2,"title":"Types","slug":"types"}],"relativePath":"functions/debounceAsyncResult/readme.md","lastUpdated":1632305059384}',g={};const h=Object.assign(g,{setup:function(n){return(n,s)=>(a(),t("div",null,[b,c(i),d]))}});export{m as __pageData,h as default};