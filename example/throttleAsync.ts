import { createApp } from 'vue';
import { throttleAsync } from '../src';

function submitApi(data) {
  console.log('submiting', data);
  return fetch('https://httpbin.org/delay/1.5', {
    body: JSON.stringify(data),
    method: 'POST',
    mode: 'cors',
  });
}
const throttledApi = throttleAsync(submitApi);

createApp({
  setup() {
    // return <h1>123</h1>;
    return {
      async onSubmit(e) {
        await throttledApi({
          msg: 'some data to be sent',
        });
        console.log('submit completed');
      },
    };
  },
}).mount('#throttleAsync');
