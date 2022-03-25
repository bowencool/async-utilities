<script lang="tsx">
  import { computed, defineComponent, reactive } from 'vue';
  import { AbortError, TimeoutError } from '.';
  import { abortableAsync } from '..';

  function someAsyncTask(delay = 1000): Promise<string> {
    return new Promise((resolve) => {
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
      return () => {
        return (
          <>
            <p>fetch、xhr 原生就可以取消，所以这里就不用 HTTP 做示例了</p>

            <button
              onClick={async function () {
                if (state.loading) return;
                // controller.abort() 只能触发一次 abort 事件，所以这里每次都新建的
                controller = new AbortController();
                state.loading = true;
                state.error = null;

                // 会在适当的时机在此处卡住
                // will get stuck here at the right time
                state.data = await abortableAsync(someAsyncTask, {
                  timeout: 1500,
                  signal: controller.signal,
                  alwaysPendingWhenAborted: true,
                })(1400 + Math.floor(Math.random() * 200));
                console.log('Task will never be completed once timeout or aborted');
                state.loading = false;
              }}
              disabled={state.loading ? true : undefined}
            >
              {state.loading ? 'loading...' : 'start'}
            </button>
            {state.loading && (
              <button
                onClick={() => {
                  controller.abort();
                }}
              >
                stop
              </button>
            )}
            <pre>
              {JSON.stringify(
                state,
                (k, v) => {
                  if (v instanceof Error) {
                    return v.message;
                  }
                  return v;
                },
                2,
              )}
            </pre>
          </>
        );
      };
    },
  });
</script>
