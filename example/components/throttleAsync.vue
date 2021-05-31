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
const throttledApi = throttleAsync(submitApi);

export default defineComponent({
  setup() {
    return {
      async onSubmit() {
        await throttledApi({
          msg: 'some data to be sent',
        });
        console.log('submit completed');
      },
    };
  },
});
</script>
