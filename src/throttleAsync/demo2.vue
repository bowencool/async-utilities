<script lang="tsx">
import { defineComponent } from 'vue';
import { throttleAsync } from '..';

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

const throttledGetApi = throttleAsync(getApi);
const throttledGetApi2 = throttleAsync(getApi, { useSamePromise: true });

export default defineComponent({
  setup() {
    return () => (
      <fieldset>
        <legend>查询场景 Query Case</legend>
        <ul>
          <li>背景：多个地方需要同一份数据，往往调用（请求）多次。</li>
          <li>需求：执行（请求）一次，返回同一个结果给多个调用方。</li>
        </ul>
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
      </fieldset>
    );
  },
});
</script>
