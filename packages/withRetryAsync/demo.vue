<script lang="tsx">
  import { defineComponent, Ref, ref } from 'vue';
  import { withRetryAsync } from '..';
  import { error2String } from './utils';

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
        throw new Error(res.statusText || `request failed with status ${res.status}`);
      }
    });
  }

  export default defineComponent({
    setup() {
      const logs: Ref<string[]> = ref([]);
      const autoRetryUnstableApi = withRetryAsync(getUnstableApi, {
        maxCount: 3,
        retryInterval: 1000,
        onFailed(i, [err]) {
          logs.value.push(`${Date.now()} 第${i}次失败了：${error2String(err)}`);
        },
        onRetry(i) {
          logs.value.push(`${Date.now()} 正在进行第${i}次尝试...`);
        },
      });

      return () => (
        <>
          <button
            onClick={async () => {
              try {
                logs.value = [];
                const rez = await autoRetryUnstableApi('abc');
                logs.value.push(`${Date.now()} onSuccess: ${JSON.stringify(rez)}`);
              } catch (err) {
                logs.value.push(`${Date.now()} onError: ${error2String(err)}`);
              }
            }}
          >
            Get something unstable
          </button>
          <pre>{logs.value.join('\n')}</pre>
        </>
      );
    },
  });
</script>
