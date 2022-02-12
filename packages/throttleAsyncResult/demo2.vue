<script lang="tsx">
  import { defineComponent } from 'vue';
  import { throttleAsyncResult } from '..';

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

  const throttledGetApi = throttleAsyncResult(getApi);
  const throttledGetApi2 = throttleAsyncResult(getApi, { useSamePromise: true });

  export default defineComponent({
    setup() {
      return () => (
        <>
          <button
            onClick={async () => {
              const rez = await throttledGetApi('abc');
              console.log('fetched', rez);
            }}
          >
            Get something same
          </button>
          <button
            onClick={async () => {
              const rez = await throttledGetApi2('abc');
              console.log('fetched', rez);
            }}
          >
            Get something same(useSamePromise)
          </button>
        </>
      );
    },
  });
</script>
