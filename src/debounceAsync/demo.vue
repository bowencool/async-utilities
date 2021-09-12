<template>
  <input
    @input="onInput"
    type="text"
    placeholder="type something quickly"
    list="suggestions"
    style="width: 300px"
  />

  <datalist id="suggestions">
    <option v-for="s in suggestions" :key="s" :value="s"></option>
  </datalist>
</template>

<script lang="tsx">
import { defineComponent, ref } from 'vue';
import { debounceAsync } from '..';
import { HTMLElementEvent } from '../../example/utils';

function searchApi(keywords: string) {
  console.log('fetching', keywords);
  const delay = (0.4 + Math.random() * 2).toFixed(3);
  return fetch(`https://httpbin.org/delay/${delay}?keywords=${keywords}`, {
    method: 'GET',
    mode: 'cors',
  }).then(() => [
    `suggestions1 for ${keywords}`,
    `suggestions2 for ${keywords}`,
    `suggestions3 for ${keywords}`,
  ]);
}
const debouncedSearchApi = debounceAsync(searchApi);

export default defineComponent({
  setup() {
    const suggestions = ref<string[]>([]);
    return {
      suggestions,
      async onInput(e: HTMLElementEvent<HTMLInputElement>) {
        // 这里应该用一次普通的debounce，但是与本主题无关，所以省略
        const keywords = e.target.value;
        const rez = await debouncedSearchApi(keywords);
        suggestions.value = rez;
      },
    };
  },
});
</script>
