import{d as n,g as s,o as a,c as t,b as p,F as e,h as o,e as c,a as l}from"./app.d9cbc884.js";const u=function(n,s=300){let a;return function(...t){return new Promise(((p,e)=>{void 0!==a&&clearTimeout(a),a=setTimeout((()=>{n.call(this,...t).then(p).catch(e)}),s)}))}}((function(n){console.log("fetching",n);const s=(.4+2*Math.random()).toFixed(3);return fetch(`https://httpbin.org/delay/${s}?keywords=${n}`,{method:"GET",mode:"cors"}).then((()=>[`suggestions1 for ${n}`,`suggestions2 for ${n}`,`suggestions3 for ${n}`]))}));var i=n({setup(){const n=s([]);return{suggestions:n,async onInput(s){const a=s.target.value,t=await u(a);n.value=t}}}});const r={id:"suggestions"},k=["value"];i.render=function(n,s,c,l,u,i){return a(),t(e,null,[p("input",{onInput:s[0]||(s[0]=(...s)=>n.onInput&&n.onInput(...s)),type:"text",placeholder:"type something quickly",list:"suggestions",style:{width:"300px"}},null,32),p("datalist",r,[(a(!0),t(e,null,o(n.suggestions,(n=>(a(),t("option",{key:n,value:n},null,8,k)))),128))])],64)};const b=l('<h2 id="intro" tabindex="-1">Intro <a class="header-anchor" href="#intro" aria-hidden="true">#</a></h2><p>一个类似 <code>debounce</code> 的高阶函数，但是接收一个异步任务。区别是在<code>debounceAsync</code>里，如果任务没有执行则会返回一个<code>pending promise</code>。</p><p>A higher-order function like <code>debounce</code>, but receiving an asynchronous task. The difference is that in <code>debounceAsync</code>, a <code>pending promise</code> is returned if the task is not executed.</p><p>下面两段代码的运行效果是一样的，只是风格不同：</p><p>The following two pieces of code run the same way, just in different styles:</p><div class="language-ts line-numbers-mode"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> suggestions <span class="token operator">=</span> <span class="token generic-function"><span class="token function">ref</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      suggestions<span class="token punctuation">,</span>\n      <span class="token comment">// 同步风格 Synchronization style</span>\n      onInput<span class="token operator">:</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">onInput</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> keywords <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">;</span>\n        <span class="token function">searchApi</span><span class="token punctuation">(</span>keywords<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>rez<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n          suggestions<span class="token punctuation">.</span>value <span class="token operator">=</span> rez<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><div class="language-ts line-numbers-mode"><pre><code><span class="token keyword">const</span> debouncedSearchApi <span class="token operator">=</span> <span class="token function">debounceAsync</span><span class="token punctuation">(</span>searchApi<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> suggestions <span class="token operator">=</span> <span class="token generic-function"><span class="token function">ref</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      suggestions<span class="token punctuation">,</span>\n      <span class="token comment">// 异步风格 Asynchronous style</span>\n      <span class="token keyword">async</span> <span class="token function">onInput</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 注意在 `await debouncedSearchApi` 之前的代码仍会执行</span>\n        <span class="token comment">// Note that the code before `await debouncedSearchApi` will still execute</span>\n        <span class="token keyword">const</span> keywords <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">;</span>\n\n        <span class="token comment">// 会在适当的时机在此处卡住</span>\n        <span class="token comment">// will get stuck here at the right time</span>\n        <span class="token keyword">const</span> rez <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">debouncedSearchApi</span><span class="token punctuation">(</span>keywords<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        suggestions<span class="token punctuation">.</span>value <span class="token operator">=</span> rez<span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-hidden="true">#</a></h2><blockquote><p>以下 Demo 以网络请求为例，打开 Devtool 查看效果。</p><p>The following demo takes a network request as an example and opens Devtool to see the effect.</p></blockquote>',9),m=l('<details><summary>查看代码</summary><div class="language-vue line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>\n    <span class="token attr-name">@input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onInput<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>type something quickly<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>suggestions<span class="token punctuation">&quot;</span></span>\n    <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 300px</span><span class="token punctuation">&quot;</span></span></span>\n  <span class="token punctuation">/&gt;</span></span>\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>datalist</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>suggestions<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>s in suggestions<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>s<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>s<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>datalist</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tsx<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> debounceAsync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;..&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> type HTMLElementEvent<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">HTMLElement</span><span class="token operator">&gt;</span> <span class="token operator">=</span> Event <span class="token operator">&amp;</span> <span class="token punctuation">{</span>\n  target<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>\n  <span class="token comment">// currentTarget: T;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">searchApi</span><span class="token punctuation">(</span><span class="token parameter">keywords<span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;fetching&#39;</span><span class="token punctuation">,</span> keywords<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> delay <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0.4</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://httpbin.org/delay/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>delay<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">?keywords=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>keywords<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    method<span class="token operator">:</span> <span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span>\n    mode<span class="token operator">:</span> <span class="token string">&#39;cors&#39;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>\n    <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">suggestions1 for </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>keywords<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n    <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">suggestions2 for </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>keywords<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n    <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">suggestions3 for </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>keywords<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">const</span> debouncedSearchApi <span class="token operator">=</span> <span class="token function">debounceAsync</span><span class="token punctuation">(</span>searchApi<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> suggestions <span class="token operator">=</span> ref<span class="token operator">&lt;</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      suggestions<span class="token punctuation">,</span>\n      <span class="token keyword">async</span> <span class="token function">onInput</span><span class="token punctuation">(</span><span class="token parameter">e<span class="token operator">:</span> HTMLElementEvent<span class="token operator">&lt;</span>HTMLInputElement<span class="token operator">&gt;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 注意在 `await debouncedSearchApi` 之前的代码仍会执行</span>\n        <span class="token comment">// Note that the code before `await debouncedSearchApi` will still execute</span>\n        <span class="token keyword">const</span> keywords <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">;</span>\n\n        <span class="token comment">// 会在适当的时机在此处卡住</span>\n        <span class="token comment">// will get stuck here at the right time</span>\n        <span class="token keyword">const</span> rez <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">debouncedSearchApi</span><span class="token punctuation">(</span>keywords<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        suggestions<span class="token punctuation">.</span>value <span class="token operator">=</span> rez<span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br></div></div></details><h2 id="types" tabindex="-1">Types <a class="header-anchor" href="#types" aria-hidden="true">#</a></h2><div class="language-ts line-numbers-mode"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">debounceAsync</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">P</span> <span class="token keyword">extends</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token constant">R</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>\n  <span class="token function-variable function">fn</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> <span class="token operator">...</span>p<span class="token operator">:</span> <span class="token constant">P</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">R</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token operator">:</span> <span class="token constant">P</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">R</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',3),d='{"title":"Intro","description":"","frontmatter":{},"headers":[{"level":2,"title":"Intro","slug":"intro"},{"level":2,"title":"Demo","slug":"demo"},{"level":2,"title":"Types","slug":"types"}],"relativePath":"functions/debounceAsync/readme.md","lastUpdated":1632303711357}',g={};const y=Object.assign(g,{setup:function(n){return(n,s)=>(a(),t("div",null,[b,c(i),m]))}});export{d as __pageData,y as default};
