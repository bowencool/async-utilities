<template>
  <input @input="onInput" type="text" placeholder="type something quickly" list="suggestions" style="width: 300px" />

  <datalist id="suggestions">
    <option v-for="s in suggestions" :key="s" :value="s"></option>
  </datalist>
</template>

<script lang="tsx">
  import { defineComponent, ref } from 'vue';
  import { debounceAsync } from '..';

  export type HTMLElementEvent<T extends HTMLElement> = Event & {
    target: T;
    // currentTarget: T;
  };

  function searchApi(keywords: string) {
    console.log('fetching', keywords);
    const delay = (0.4 + Math.random() * 2).toFixed(3);
    return fetch(`https://httpbin.org/delay/${delay}?keywords=${keywords}`, {
      method: 'GET',
      mode: 'cors',
    }).then(() => [`suggestions1 for ${keywords}`, `suggestions2 for ${keywords}`, `suggestions3 for ${keywords}`]);
  }
  const debouncedSearchApi = debounceAsync(searchApi);

  export default defineComponent({
    setup() {
      const suggestions = ref<string[]>([]);
      return {
        suggestions,
        async onInput(e: HTMLElementEvent<HTMLInputElement>) {
          // 注意在 `await debouncedSearchApi` 之前的代码仍会执行
          // Note that the code before `await debouncedSearchApi` will still execute
          const keywords = e.target.value;

          // 会在适当的时机在此处卡住
          // will get stuck here at the right time
          const rez = await debouncedSearchApi(keywords);
          suggestions.value = rez;
        },
      };
    },
  });
</script>
