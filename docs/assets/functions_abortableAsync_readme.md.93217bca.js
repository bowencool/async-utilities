import{d as g,r as f,c as p,F as h,a as u,b as y,e as i,o as w}from"./app.00a19c4d.js";class k extends Error{constructor(n){super(n);this.name="AbortError"}}class b extends Error{constructor(n){super(n);this.name="TimeoutError"}}function v(s,n={}){return function(...t){return new Promise((m,o)=>{let e;function l(){o(new k("aborted"))}function d(){o(new b(`timeout of ${n.timeout}ms`))}typeof n.timeout=="number"&&n.timeout>0&&(e=setTimeout(d,n.timeout)),n.signal&&n.signal.addEventListener("abort",l);function r(){e&&clearTimeout(e),n.signal&&n.signal.removeEventListener("abort",l)}s.call(this,...t).then((...c)=>{m(...c),r()}).catch((...c)=>{o(...c),r()})})}}function _(s=1e3){return new Promise(n=>{console.log(`The task will be completed in ${s}ms`),setTimeout(()=>n(`The result in ${s}ms`),s)})}var T=g({setup(){let s;const n=f({loading:!1,error:null,data:""});return()=>p(h,null,[p("p",null,[u("fetch\u3001xhr \u539F\u751F\u5C31\u53EF\u4EE5\u53D6\u6D88\uFF0C\u6240\u4EE5\u8FD9\u91CC\u5C31\u4E0D\u7528 HTTP \u505A\u793A\u4F8B\u4E86")]),p("button",{onClick:async function(){if(!n.loading){s=new AbortController;try{n.loading=!0,n.error=null,n.data=await v(_,{timeout:2e3,signal:s.signal})(1900+Math.floor(Math.random()*200))}catch(a){console.log(a.name,a.message,a instanceof b,a instanceof k),n.error=a,n.data=""}finally{n.loading=!1}}},disabled:n.loading?!0:void 0},[n.loading?"loading...":"start"]),n.loading&&p("button",{onClick:()=>{s.abort()}},[u("stop")]),p("pre",null,[JSON.stringify(n,(a,t)=>t instanceof Error?t.message:t,2)])])}});const A=i('<h2 id="intro" tabindex="-1">Intro <a class="header-anchor" href="#intro" aria-hidden="true">#</a></h2><p>\u4E00\u4E2A\u9AD8\u9636\u51FD\u6570\uFF0C\u53EF\u4EE5\u901A\u8FC7<a href="https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal" target="_blank" rel="noopener noreferrer">AbortSignal</a>\u4E2D\u6B62\u5F02\u6B65\u4EFB\u52A1\u6216\u5728\u8D85\u65F6\u65F6\u81EA\u52A8\u4E2D\u6B62\u3002</p><p>A higher-order function that can abort asynchronous tasks by <a href="https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal" target="_blank" rel="noopener noreferrer">AbortSignal</a> or automatically abort on timeout.</p><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-hidden="true">#</a></h2>',4),E=i(`<details><summary>\u67E5\u770B\u4EE3\u7801</summary><div class="language-vue line-numbers-mode"><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlighted">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><br><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tsx<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> computed<span class="token punctuation">,</span> defineComponent<span class="token punctuation">,</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AbortError<span class="token punctuation">,</span> TimeoutError <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;.&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> abortableAsync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;..&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">someAsyncTask</span><span class="token punctuation">(</span><span class="token parameter">delay <span class="token operator">=</span> <span class="token number">1000</span></span><span class="token punctuation">)</span><span class="token operator">:</span> Promise<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">The task will be completed in </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>delay<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">ms</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">The result in </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>delay<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">ms</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> controller<span class="token operator">:</span> AbortController<span class="token punctuation">;</span>

    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      loading<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      error<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      data<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>fetch\u3001xhr \u539F\u751F\u5C31\u53EF\u4EE5\u53D6\u6D88\uFF0C\u6240\u4EE5\u8FD9\u91CC\u5C31\u4E0D\u7528 <span class="token constant">HTTP</span> \u505A\u793A\u4F8B\u4E86<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>

          <span class="token operator">&lt;</span>button
            onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token keyword">if</span> <span class="token punctuation">(</span>state<span class="token punctuation">.</span>loading<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
              <span class="token comment">// controller.abort() \u53EA\u80FD\u89E6\u53D1\u4E00\u6B21 abort \u4E8B\u4EF6\uFF0C\u6240\u4EE5\u8FD9\u91CC\u6BCF\u6B21\u90FD\u65B0\u5EFA\u7684</span>
              controller <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AbortController</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token keyword">try</span> <span class="token punctuation">{</span>
                state<span class="token punctuation">.</span>loading <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
                state<span class="token punctuation">.</span>error <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
                state<span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">abortableAsync</span><span class="token punctuation">(</span>someAsyncTask<span class="token punctuation">,</span> <span class="token punctuation">{</span>
                  timeout<span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>
                  signal<span class="token operator">:</span> controller<span class="token punctuation">.</span>signal<span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">1900</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>
                  error<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
                  error<span class="token punctuation">.</span>message<span class="token punctuation">,</span>
                  error <span class="token keyword">instanceof</span> <span class="token class-name">TimeoutError</span><span class="token punctuation">,</span>
                  error <span class="token keyword">instanceof</span> <span class="token class-name">AbortError</span><span class="token punctuation">,</span>
                <span class="token punctuation">)</span><span class="token punctuation">;</span>
                state<span class="token punctuation">.</span>error <span class="token operator">=</span> error<span class="token punctuation">;</span>
                state<span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
                state<span class="token punctuation">.</span>loading <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">}</span>
            disabled<span class="token operator">=</span><span class="token punctuation">{</span>state<span class="token punctuation">.</span>loading <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">}</span>
          <span class="token operator">&gt;</span>
            <span class="token punctuation">{</span>state<span class="token punctuation">.</span>loading <span class="token operator">?</span> <span class="token string">&#39;loading...&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;start&#39;</span><span class="token punctuation">}</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
          <span class="token punctuation">{</span>state<span class="token punctuation">.</span>loading <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>button
              onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                controller<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span><span class="token punctuation">}</span>
            <span class="token operator">&gt;</span>
              stop
            <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
          <span class="token punctuation">)</span><span class="token punctuation">}</span>
          <span class="token operator">&lt;</span>pre<span class="token operator">&gt;</span>
            <span class="token punctuation">{</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>
              state<span class="token punctuation">,</span>
              <span class="token punctuation">(</span><span class="token parameter">k<span class="token punctuation">,</span> v</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>v <span class="token keyword">instanceof</span> <span class="token class-name">Error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                  <span class="token keyword">return</span> v<span class="token punctuation">.</span>message<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">return</span> v<span class="token punctuation">;</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">}</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>pre<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br></div></div></details><h2 id="types" tabindex="-1">Types <a class="header-anchor" href="#types" aria-hidden="true">#</a></h2><div class="language-ts line-numbers-mode"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">abortableAsync</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">P</span> <span class="token keyword">extends</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token constant">R</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>
  <span class="token function-variable function">fn</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> <span class="token operator">...</span>p<span class="token operator">:</span> <span class="token constant">P</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">R</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
  opt<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    timeout<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    signal<span class="token operator">?</span><span class="token operator">:</span> AbortSignal<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token operator">:</span> <span class="token constant">P</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">R</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,3),S='{"title":"Intro","description":"","frontmatter":{},"headers":[{"level":2,"title":"Intro","slug":"intro"},{"level":2,"title":"Demo","slug":"demo"},{"level":2,"title":"Types","slug":"types"}],"relativePath":"../src/abortableAsync/readme.md","lastUpdated":1632281211378}',C={},x=Object.assign(C,{setup(s){return(n,a)=>(w(),y("div",null,[A,p(T),E]))}});export{S as __pageData,x as default};
