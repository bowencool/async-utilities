<template>
  <DebounceAsync />
  <ThrottleAsync />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DebounceAsync from './components/debounceAsync.vue';
import ThrottleAsync from './components/throttleAsync.vue';

export default defineComponent({
  name: 'App',
  components: {
    DebounceAsync,
    ThrottleAsync
  }
});
</script>
