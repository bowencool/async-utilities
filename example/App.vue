<template>
  <h1>所有 demo 以网络请求为例，请打开 Devtool -> Network 查看效果</h1>
  <DebounceAsync />
  <ThrottleAsync />
  <ConcurrentAsync />
  <CancelizeAsync />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DebounceAsync from './components/debounceAsync.vue';
import ThrottleAsync from './components/throttleAsync.vue';
import ConcurrentAsync from './components/concurrentAsync.vue';
import CancelizeAsync from './components/cancelizeAsync.vue';

export default defineComponent({
  name: 'App',
  components: {
    DebounceAsync,
    ThrottleAsync,
    ConcurrentAsync,
    CancelizeAsync,
  },
});
</script>
