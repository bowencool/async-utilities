<template>
  <fieldset>
    <legend>debounceAsync</legend>
    <ul>
      <li>
        背景：网络不稳，响应时间严重不均匀，无法保证响应顺序和请求顺序一致
      </li>
      <li>
        需求：无论网络请求的返回顺序如何，我们只想要最后一次发起的请求结果
      </li>
      <li>
        注释：如果说debounce是发送前取最后一次输入，那么debounceAsync就是发送后取最后一次请求对应的输出
      </li>
      <li>原文：https://github.com/bowencool/blog/issues/3</li>
    </ul>
    <input @input="onInput" type="text" placeholder="type something quickly" />
  </fieldset>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { debounceAsync } from '../../src';
import { HTMLElementEvent } from '../utils';

function searchApi(keywords: string) {
  console.log('fetching', keywords);
  const delay = (1 + Math.random() * 2).toFixed(3);
  return fetch(`https://httpbin.org/delay/${delay}?keywords=${keywords}`, {
    method: 'GET',
    mode: 'cors',
  });
}
const debouncedSearchApi = debounceAsync(searchApi);

export default defineComponent({
  setup() {
    return {
      async onInput(e: HTMLElementEvent<HTMLInputElement>) {
        // 这里应该用一次普通的debounce，但是与本主题无关，所以省略
        const keywords = e.target.value;
        const rez = await debouncedSearchApi(keywords);
        console.log(rez);
      },
    };
  },
});
</script>
