import{d as n,g as s,o as a,c as t,b as p,F as e,h as o,e as c,a as l}from"./app.7943d68b.js";const u=function(n,s=300){let a;return function(...t){return new Promise(((p,e)=>{void 0!==a&&clearTimeout(a),a=setTimeout((()=>{n.call(this,...t).then(p).catch(e)}),s)}))}}((function(n){console.log("fetching",n);const s=(.4+2*Math.random()).toFixed(3);return fetch(`https://httpbin.org/delay/${s}?keywords=${n}`,{method:"GET",mode:"cors"}).then((()=>[`suggestions1 for ${n}`,`suggestions2 for ${n}`,`suggestions3 for ${n}`]))}));var i=n({setup(){const n=s([]);return{suggestions:n,async onInput(s){const a=s.target.value,t=await u(a);n.value=t}}}});const r={id:"suggestions"},k=["value"];i.render=function(n,s,c,l,u,i){return a(),t(e,null,[p("input",{onInput:s[0]||(s[0]=(...s)=>n.onInput&&n.onInput(...s)),type:"text",placeholder:"type something quickly",list:"suggestions",style:{width:"300px"}},null,32),p("datalist",r,[(a(!0),t(e,null,o(n.suggestions,(n=>(a(),t("option",{key:n,value:n},null,8,k)))),128))])],64)};const b=l('',9),m=l('',3),d='{"title":"Intro","description":"","frontmatter":{},"headers":[{"level":2,"title":"Intro","slug":"intro"},{"level":2,"title":"Demo","slug":"demo"},{"level":2,"title":"Types","slug":"types"}],"relativePath":"functions/debounceAsync/readme.md","lastUpdated":1632304968575}',g={};const y=Object.assign(g,{setup:function(n){return(n,s)=>(a(),t("div",null,[b,c(i),m]))}});export{d as __pageData,y as default};