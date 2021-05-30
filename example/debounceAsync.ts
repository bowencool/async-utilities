import { createApp } from 'vue';
import { debounceAsync } from '../src';

function searchApi(keywords) {
  console.log('fetching', keywords);
  const delay = (1 + Math.random() * 2).toFixed(3);
  return fetch(`https://httpbin.org/delay/${delay}?keywords=${keywords}`, {
    method: 'GET',
    mode: 'cors',
  });
}
const debouncedSearchApi = debounceAsync(searchApi);

createApp({
  setup() {
    // return <h1>123</h1>;
    return {
      async onInput(e) {
        // 这里应该用一次普通的debounce，但是与本主题无关，所以省略
        const keywords = e.target.value;
        const rez = await debouncedSearchApi(keywords);
        console.log(rez);
      },
    };
  },
}).mount('#debounceAsync');
