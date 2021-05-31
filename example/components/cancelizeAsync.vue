<script lang="ts">
import { computed, defineComponent, reactive } from 'vue';
import { cancelizeAsync } from '../../src';

function someAsyncTask(delay = 1000): Promise<string> {
  return new Promise(resolve => {
    console.log(`The task will be completed in ${delay}ms`);
    setTimeout(() => resolve(`The result in ${delay}ms`), delay);
  });
}

export default defineComponent({
  setup() {
    let controller: AbortController;

    const state = reactive({
      loading: false,
      error: null,
      data: '',
    });
    return {
      state,
      text: computed(() =>
        JSON.stringify(
          state,
          (k, v) => {
            if (v instanceof Error) {
              return v.message;
            }
            return v;
          },
          2,
        ),
      ),
      async onStart() {
        if (state.loading) return;
        // controller.abort() 只能触发一次 abort 事件，所以这里每次都新建的
        controller = new AbortController();
        try {
          state.loading = true;
          state.error = null;
          state.data = await cancelizeAsync(someAsyncTask, {
            timeout: 2000,
            signal: controller.signal,
          })(1900 + Math.floor(Math.random() * 200));
        } catch (error) {
          state.error = error;
          state.data = '';
        } finally {
          state.loading = false;
        }
      },
      onStop() {
        controller.abort();
      },
    };
  },
});
</script>

<template>
  <fieldset>
    <legend>
      cancelizeAsync
    </legend>
    <p>超时取消、手动取消</p>
    <p>fetch、xhr 原生就可以取消，所以这里就不用 HTTP 做示例了</p>
    <button @click="onStart">start</button>
    <button @click="onStop">stop</button>

    <pre>{{ text }}</pre>
    <!--
    <p v-if="state.error">{{ state.error.message }}</p>
    <p v-else-if="state.loading">loading</p>
    <p v-else-if="state.data">{{ state.data }}</p> -->
  </fieldset>
</template>
