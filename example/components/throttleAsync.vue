<template>
  <fieldset>
    <legend>throttleAsync</legend>
    <ul>
      <li>
        背景：为防止用户重复提交，我们通常需要维护一个loading变量，然而有时候就是懒。
      </li>
      <li>需求：站着把钱挣了</li>
      <li>原文：https://github.com/bowencool/blog/issues/3</li>
    </ul>
    <button @click="onSubmit">submit(click me quickly)</button>
    <p>open the devtool to see network</p>
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
