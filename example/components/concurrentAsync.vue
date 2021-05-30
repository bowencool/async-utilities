<script lang="ts">
import { defineComponent } from 'vue';
import { concurrentAsync } from '../../src';

function rawApi<T>(data: T): Promise<T> {
  const delay = (1 + Math.random() * 3).toFixed(3);
  console.log('fetch start:', data);
  return fetch(`https://httpbin.org/delay/${delay}?t=${delay}`, {
    method: 'GET',
    mode: 'cors',
  }).then(() => data);
}

const concurrentedApi = concurrentAsync(rawApi, 3);

export default defineComponent({
  setup() {
    return {
      onRequest() {
        for (let i = 0; i < 7; i++) {
          rawApi(i).then(r => console.log('rez:', i, r));
        }
      },
      onConcurrentRequest() {
        for (let i = 0; i < 7; i++) {
          concurrentedApi(i).then(r => console.log('rez:', i, r));
        }
      },
    };
  },
});
</script>

<template>
  <fieldset>
    <legend>
      concurrentAsync
    </legend>
    <p>一个限制最大并发的高阶函数</p>
    <button @click="onRequest">无限制并发请求</button>
    <button @click="onConcurrentRequest">限制并发请求</button>
  </fieldset>
</template>
