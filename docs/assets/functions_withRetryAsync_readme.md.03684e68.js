import{c as o,b as e,w as s,d as n,e as a,a as c,r as C,o as l}from"./app.a86c4d0c.js";const E=n("h2",{id:"intro",tabindex:"-1"},[a("Intro "),n("a",{class:"header-anchor",href:"#intro","aria-hidden":"true"},"#")],-1),u=n("p",null,"\u4E00\u4E2A\u53EF\u4EE5\u8BA9\u5F02\u6B65\u4EFB\u52A1\u652F\u6301\u91CD\u8BD5\u7684\u9AD8\u9636\u51FD\u6570\u3002",-1),r=n("p",null,"A higher-order function that allows asynchronous tasks to support retries.",-1),i=n("h2",{id:"demo",tabindex:"-1"},[a("Demo "),n("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#")],-1),k=n("iframe",{src:"/async-utilities/-demos/Demo1008.html",height:"100"},null,-1),D=n("p",null,"Demo \u4EE5\u7F51\u7EDC\u8BF7\u6C42\u4E3A\u4F8B\uFF0C\u6253\u5F00 Devtool \u67E5\u770B\u6548\u679C\u3002",-1),F=n("p",null,"This demo takes a network request as an example and opens Devtool to see the effect.",-1),A=c(`<h2 id="types" tabindex="-1">Types <a class="header-anchor" href="#types" aria-hidden="true">#</a></h2><div class="language-ts line-numbers-mode"><pre><code><span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">withRetryAsync</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">P</span> <span class="token keyword">extends</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token constant">R</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token function-variable function">fn</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> <span class="token operator">...</span>p<span class="token operator">:</span> <span class="token constant">P</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">R</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> \r
<span class="token comment">/** \u6700\u591A\u91CD\u8BD5\u6B21\u6570 */</span>\r
maxCount<span class="token punctuation">,</span> \r
<span class="token comment">/**\r
 * @desc \u6BCF\u6B21\u91CD\u8BD5\u4E4B\u95F4\u7684\u7B49\u5F85\u95F4\u9694\u65F6\u95F4\r
 */</span>\r
retryInterval<span class="token punctuation">,</span> \r
<span class="token comment">/** \u6BCF\u6B21\u91CD\u8BD5\u5F00\u59CB\u7684\u56DE\u8C03\uFF0C\u542B\u7B2C\u4E00\u6B21\uFF0C\u7B2C\u4E00\u6B21\u662F1 */</span>\r
onRetry<span class="token punctuation">,</span> \r
<span class="token comment">/**\r
 * @desciption \u6BCF\u6B21\u5931\u8D25\u7684\u56DE\u8C03\r
 */</span>\r
onFailed<span class="token punctuation">,</span> <span class="token punctuation">}</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>\r
    maxCount<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\r
    retryInterval<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\r
    onRetry<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>i<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\r
    onFailed<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>i<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> lastFailedReason<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\r
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token operator">:</span> <span class="token constant">P</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">R</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\r
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,2),b='{"title":"Intro","description":"","frontmatter":{},"headers":[{"level":2,"title":"Intro","slug":"intro"},{"level":2,"title":"Demo","slug":"demo"},{"level":2,"title":"Types","slug":"types"}],"relativePath":"../packages/withRetryAsync/readme.md","lastUpdated":1644660466382}',d={},h=Object.assign(d,{setup(m){const t=[{filePath:"/Users/zhaobowen/Codes/bowencool/async-utilities/packages/withRetryAsync/demo.vue",codeStr:"%3Cscript%20lang%3D%22tsx%22%3E%0A%20%20import%20%7B%20defineComponent%20%7D%20from%20'vue'%3B%0A%20%20import%20%7B%20withRetryAsync%20%7D%20from%20'..'%3B%0A%0A%20%20function%20getUnstableApi(keywords%3A%20string)%20%7B%0A%20%20%20%20console.log('fetching'%2C%20keywords)%3B%0A%20%20%20%20return%20fetch(%60https%3A%2F%2Fhttpbin.org%2Fstatus%2F200%2C500%2C400%3Fkeywords%3D%24%7Bkeywords%7D%60%2C%20%7B%0A%20%20%20%20%20%20method%3A%20'GET'%2C%0A%20%20%20%20%20%20mode%3A%20'cors'%2C%0A%20%20%20%20%7D).then((res)%20%3D%3E%20%7B%0A%20%20%20%20%20%20if%20(res.status%20%3E%3D%20200%20%26%26%20res.status%20%3C%20300)%20%7B%0A%20%20%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20%20%20data%3A%20%60result%20for%20%24%7Bkeywords%7D%60%2C%0A%20%20%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20throw%20new%20Error(res.statusText%20%7C%7C%20%60request%20failed%20with%20status%20%24%7Bres.status%7D%60)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D)%3B%0A%20%20%7D%0A%0A%20%20const%20autoRetryUnstableApi%20%3D%20withRetryAsync(getUnstableApi%2C%20%7B%0A%20%20%20%20maxCount%3A%203%2C%0A%20%20%20%20retryInterval%3A%201000%2C%0A%20%20%20%20onFailed(i%2C%20%5Berr%5D)%20%7B%0A%20%20%20%20%20%20let%20message%20%3D%20err%3B%0A%20%20%20%20%20%20if%20(err%20instanceof%20Error)%20%7B%0A%20%20%20%20%20%20%20%20message%20%3D%20err.message%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20console.log(%60%E7%AC%AC%24%7Bi%7D%E6%AC%A1%E5%A4%B1%E8%B4%A5%E4%BA%86%EF%BC%9A%60%2C%20message)%3B%0A%20%20%20%20%7D%2C%0A%20%20%20%20onRetry(i)%20%7B%0A%20%20%20%20%20%20console.log(%60%E7%AC%AC%24%7Bi%7D%E6%AC%A1%E5%B0%9D%E8%AF%95...%60)%3B%0A%20%20%20%20%7D%2C%0A%20%20%7D)%3B%0A%0A%20%20export%20default%20defineComponent(%7B%0A%20%20%20%20setup()%20%7B%0A%20%20%20%20%20%20return%20()%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3Cbutton%0A%20%20%20%20%20%20%20%20%20%20onClick%3D%7Basync%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20rez%20%3D%20await%20autoRetryUnstableApi('abc')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20console.log('fetched'%2C%20rez)%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20Get%20something%20unstable%0A%20%20%20%20%20%20%20%20%3C%2Fbutton%3E%0A%20%20%20%20%20%20)%3B%0A%20%20%20%20%7D%2C%0A%20%20%7D)%3B%0A%3C%2Fscript%3E%0A",language:"vue",htmlStr:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Etsx%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20defineComponent%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'vue'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20withRetryAsync%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'..'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Efunction%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3EgetUnstableApi%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20parameter%22%3E%3Cspan%20class%3D%22token%20literal-property%20property%22%3Ekeywords%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20string%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20console%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Elog%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E'fetching'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20keywords%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Ereturn%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Efetch%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20template-string%22%3E%3Cspan%20class%3D%22token%20template-punctuation%20string%22%3E%60%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3Ehttps%3A%2F%2Fhttpbin.org%2Fstatus%2F200%2C500%2C400%3Fkeywords%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20interpolation%22%3E%3Cspan%20class%3D%22token%20interpolation-punctuation%20punctuation%22%3E%24%7B%3C%2Fspan%3Ekeywords%3Cspan%20class%3D%22token%20interpolation-punctuation%20punctuation%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20template-punctuation%20string%22%3E%60%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Emethod%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'GET'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Emode%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'cors'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Ethen%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20parameter%22%3Eres%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Eif%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3Eres%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Estatus%20%3Cspan%20class%3D%22token%20operator%22%3E%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E200%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%26amp%3B%26amp%3B%3C%2Fspan%3E%20res%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Estatus%20%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E300%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Ereturn%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Edata%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20template-string%22%3E%3Cspan%20class%3D%22token%20template-punctuation%20string%22%3E%60%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3Eresult%20for%20%3C%2Fspan%3E%3Cspan%20class%3D%22token%20interpolation%22%3E%3Cspan%20class%3D%22token%20interpolation-punctuation%20punctuation%22%3E%24%7B%3C%2Fspan%3Ekeywords%3Cspan%20class%3D%22token%20interpolation-punctuation%20punctuation%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20template-punctuation%20string%22%3E%60%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Eelse%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Ethrow%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Enew%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class-name%22%3EError%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3Eres%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3EstatusText%20%3Cspan%20class%3D%22token%20operator%22%3E%7C%7C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20template-string%22%3E%3Cspan%20class%3D%22token%20template-punctuation%20string%22%3E%60%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3Erequest%20failed%20with%20status%20%3C%2Fspan%3E%3Cspan%20class%3D%22token%20interpolation%22%3E%3Cspan%20class%3D%22token%20interpolation-punctuation%20punctuation%22%3E%24%7B%3C%2Fspan%3Eres%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Estatus%3Cspan%20class%3D%22token%20interpolation-punctuation%20punctuation%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20template-punctuation%20string%22%3E%60%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20autoRetryUnstableApi%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3EwithRetryAsync%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3EgetUnstableApi%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3EmaxCount%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E3%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3EretryInterval%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E1000%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20function%22%3EonFailed%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20parameter%22%3Ei%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3Eerr%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Elet%3C%2Fspan%3E%20message%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20err%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Eif%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3Eerr%20%3Cspan%20class%3D%22token%20keyword%22%3Einstanceof%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class-name%22%3EError%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20message%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20err%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Emessage%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%20%20%20%20%20%20console%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Elog%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20template-string%22%3E%3Cspan%20class%3D%22token%20template-punctuation%20string%22%3E%60%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E%E7%AC%AC%3C%2Fspan%3E%3Cspan%20class%3D%22token%20interpolation%22%3E%3Cspan%20class%3D%22token%20interpolation-punctuation%20punctuation%22%3E%24%7B%3C%2Fspan%3Ei%3Cspan%20class%3D%22token%20interpolation-punctuation%20punctuation%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E%E6%AC%A1%E5%A4%B1%E8%B4%A5%E4%BA%86%EF%BC%9A%3C%2Fspan%3E%3Cspan%20class%3D%22token%20template-punctuation%20string%22%3E%60%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20message%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20function%22%3EonRetry%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20parameter%22%3Ei%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20console%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Elog%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20template-string%22%3E%3Cspan%20class%3D%22token%20template-punctuation%20string%22%3E%60%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E%E7%AC%AC%3C%2Fspan%3E%3Cspan%20class%3D%22token%20interpolation%22%3E%3Cspan%20class%3D%22token%20interpolation-punctuation%20punctuation%22%3E%24%7B%3C%2Fspan%3Ei%3Cspan%20class%3D%22token%20interpolation-punctuation%20punctuation%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E%E6%AC%A1%E5%B0%9D%E8%AF%95...%3C%2Fspan%3E%3Cspan%20class%3D%22token%20template-punctuation%20string%22%3E%60%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Eexport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Edefault%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3EdefineComponent%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20function%22%3Esetup%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Ereturn%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3Ebutton%0A%20%20%20%20%20%20%20%20%20%20onClick%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20keyword%22%3Easync%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20rez%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Eawait%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3EautoRetryUnstableApi%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E'abc'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20console%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Elog%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E'fetched'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20rez%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20Get%20something%20unstable%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%2F%3C%2Fspan%3Ebutton%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",name:"demo.vue"}];return(B,y)=>{const p=C("DemoContainer");return l(),o("div",null,[E,u,r,i,e(p,{files:t,iframe:""},{desc:s(()=>[D,F]),default:s(()=>[k]),_:1}),A])}}});export{b as __pageData,h as default};
