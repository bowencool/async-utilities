<script lang="tsx">
import { defineComponent } from 'vue';
import { withRetryAsync } from '..';

function getUnstableApi(keywords: string) {
  console.log('fetching', keywords);
  return fetch(`https://httpbin.org/status/200,500,400?keywords=${keywords}`, {
    method: 'GET',
    mode: 'cors',
  }).then((res) => {
    if (res.status >= 200 && res.status < 300) {
      return {
        data: `result for ${keywords}`,
      };
    } else {
      throw new Error(res.statusText);
    }
  });
}

const autoRetryUnstableApi = withRetryAsync(getUnstableApi, {
  maxCount: 3,
  retryInterval: 1000,
  onRetry(i) {
    console.log('第%d次尝试', i + 1);
  },
});

export default defineComponent({
  setup() {
    return () => (
      <button
        onClick={async () => {
          const rez = await autoRetryUnstableApi('abc');
          console.log('fetched', rez);
        }}
      >
        Get something unstable
      </button>
    );
  },
});
</script>
