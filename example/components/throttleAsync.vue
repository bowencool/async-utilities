<template>
  <fieldset>
    <legend>throttleAsync</legend>
    <ul>
      <li>
        背景：为防止用户重复提交，我们通常需要维护一个 loading 变量，当 loading
        数量多起来就难搞了（我也想偷懒）。
      </li>
      <li>需求：不需要写 loading，也可以去重</li>
      <li>原文：https://github.com/bowencool/blog/issues/3</li>
    </ul>
    <button @click="onSubmit">submit(click me quickly)</button>

    <ul>
      <li>
        背景：多个地方需要同一份数据，往往调用（请求）多次。
      </li>
      <li>需求：执行（请求）一次，返回同一个结果给多个调用方。</li>
    </ul>
    <button @click="onGet">Get something same(useSamePromise)</button>

  </fieldset>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { throttleAsync } from '../../src';

function submitApi(data: object) {
  console.log('submiting', data);
  return fetch('https://httpbin.org/delay/1.5', {
    body: JSON.stringify(data),
    method: 'POST',
    mode: 'cors',
  });
}
const throttledSubmitApi = throttleAsync(submitApi);

function getApi(keywords: string) {
  console.log('fetching', keywords);
  const delay = (0.4 + Math.random() * 2).toFixed(3);
  return fetch(`https://httpbin.org/delay/${delay}?keywords=${keywords}`, {
    method: 'GET',
    mode: 'cors',
  }).then(() => ({
    data: `result for ${keywords}`,
  }));
}

const throttledGetApi = throttleAsync(getApi, { useSamePromise: true });

export default defineComponent({
  setup() {
    return {
      async onSubmit() {
        await throttledSubmitApi({
          msg: 'some data to be sent',
        });
        console.log('submit completed');
      },
      async onGet() {
        const rez = await throttledGetApi('abc');
        console.log('fetched', rez);
      },
    };
  },
});
</script>
