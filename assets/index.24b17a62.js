class s extends Error{}s.prototype.name="AbortError";class u extends Error{}u.prototype.name="TimeoutError";function b(t,e={}){return function(...m){return new Promise((c,r)=>{let o;function i(){r(new s("aborted"))}function f(){r(new u(`timeout of ${e.timeout}ms`))}typeof e.timeout=="number"&&e.timeout>0&&(o=setTimeout(f,e.timeout)),e.signal&&e.signal.addEventListener("abort",i);function a(){o&&clearTimeout(o),e.signal&&e.signal.removeEventListener("abort",i)}t.call(this,...m).then((...n)=>{c(...n),a()}).catch((...n)=>{r(...n),a()})})}}export{s as A,u as T,b as a};