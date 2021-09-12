<script lang="tsx">
import { defineComponent } from 'vue';
import { concurrentAsync } from '..';

function rawApi<T>(data: T): Promise<T> {
  const delay = (1 + Math.random() * 3).toFixed(3);
  console.log('fetch start:', data);
  return fetch(`https://httpbin.org/delay/${delay}?i=${data}`, {
    method: 'GET',
    mode: 'cors',
  }).then(() => data);
}

export default defineComponent({
  setup() {
    return () => (
      <>
        <button
          onClick={() => {
            for (let i = 0; i < 7; i++) {
              rawApi(i).then((r) => console.log('rez:', i, r));
            }
          }}
        >
          无限制并发请求
        </button>
        <button
          onClick={() => {
            const concurrentedApi = concurrentAsync(rawApi, 2);
            for (let i = 0; i < 7; i++) {
              concurrentedApi(i).then((r) => console.log('rez:', i, r));
            }
          }}
        >
          限制最大2个并发请求
        </button>
        <button
          onClick={() => {
            const concurrentedApi = concurrentAsync(rawApi, 3);
            for (let i = 0; i < 7; i++) {
              concurrentedApi(i).then((r) => console.log('rez:', i, r));
            }
          }}
        >
          限制最大3个并发请求
        </button>
      </>
    );
  },
});
</script>
