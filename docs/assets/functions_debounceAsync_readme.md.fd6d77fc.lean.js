import{d as n,r as s,o as a,c as t,b as p,F as o,g as e,e as c,a as l}from"./app.8b62bbc9.js";const u=function(n){let s=0;return function(...a){const t=++s;return n.call(this,...a).then(((...n)=>t!==s?new Promise((()=>{})):Promise.resolve(...n)))}}((function(n){console.log("fetching",n);const s=(.4+2*Math.random()).toFixed(3);return fetch(`https://httpbin.org/delay/${s}?keywords=${n}`,{method:"GET",mode:"cors"}).then((()=>[`suggestions1 for ${n}`,`suggestions2 for ${n}`,`suggestions3 for ${n}`]))}));var r=n({setup(){const n=s([]);return{suggestions:n,async onInput(s){const a=s.target.value,t=await u(a);n.value=t}}}});const i={id:"suggestions"},k=["value"];r.render=function(n,s,c,l,u,r){return a(),t(o,null,[p("input",{onInput:s[0]||(s[0]=(...s)=>n.onInput&&n.onInput(...s)),type:"text",placeholder:"type something quickly",list:"suggestions",style:{width:"300px"}},null,32),p("datalist",i,[(a(!0),t(o,null,e(n.suggestions,(n=>(a(),t("option",{key:n,value:n},null,8,k)))),128))])],64)};const b=l('',5),g=l('',3),m='{"title":"Intro","description":"","frontmatter":{},"headers":[{"level":2,"title":"Intro","slug":"intro"},{"level":2,"title":"Demo","slug":"demo"},{"level":2,"title":"Types","slug":"types"}],"relativePath":"functions/debounceAsync/readme.md","lastUpdated":1631455393392}',d={};const y=Object.assign(d,{setup:function(n){return(n,s)=>(a(),t("div",null,[b,c(r),g]))}});export{m as __pageData,y as default};
