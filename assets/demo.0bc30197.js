import"./index.e9091200.js";import{d,b8 as p,ap as r,Z as i,_ as c,F as l,av as g}from"./runtime-core.esm-bundler.6c7eec45.js";import{_ as f}from"./plugin-vue_export-helper.21dcd24c.js";function m(e,t=300){let n;return function(...u){return new Promise((a,o)=>{n!==void 0&&clearTimeout(n),n=setTimeout(()=>{e.call(this,...u).then(a).catch(o)},t)})}}function h(e){console.log("fetching",e);const t=(.4+Math.random()*2).toFixed(3);return fetch(`https://httpbin.org/delay/${t}?keywords=${e}`,{method:"GET",mode:"cors"}).then(()=>[`suggestions1 for ${e}`,`suggestions2 for ${e}`,`suggestions3 for ${e}`])}const _=m(h);var $=d({setup(){const e=p([]);return{suggestions:e,async onInput(t){const n=t.target.value,s=await _(n);e.value=s}}}});const v={id:"suggestions"},y=["value"];function b(e,t,n,s,u,a){return r(),i(l,null,[c("input",{onInput:t[0]||(t[0]=(...o)=>e.onInput&&e.onInput(...o)),type:"text",placeholder:"type something quickly",list:"suggestions",style:{width:"300px"}},null,32),c("datalist",v,[(r(!0),i(l,null,g(e.suggestions,o=>(r(),i("option",{key:o,value:o},null,8,y))),128))])],64)}var A=f($,[["render",b]]);export{A as default};