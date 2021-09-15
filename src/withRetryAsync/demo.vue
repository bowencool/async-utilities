<script lang="tsx">
import { defineComponent } from 'vue';
import { withRetryAsync } from '..';

function getApi(keywords: string) {
  console.log('fetching', keywords);
  return fetch(`https://httpbin.org/status/200,500,400?keywords=${keywords}`, {
    method: 'GET',
    mode: 'cors',
  }).then((res) => {
    if (res.status === 200) {
      return {
        data: `result for ${keywords}`,
      };
    } else {
      throw new Error(res.statusText);
    }
  });
}

const autoRetryGetApi = withRetryAsync(getApi);

export default defineComponent({
  setup() {
    return () => (
      <fieldset>
        <legend>查询场景</legend>
        <button
          onClick={async () => {
            const rez = await autoRetryGetApi('abc');
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
