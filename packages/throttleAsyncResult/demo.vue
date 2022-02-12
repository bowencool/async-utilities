<script lang="tsx">
  import { defineComponent } from 'vue';
  import { throttleAsyncResult } from '..';

  function submitApi(data: object) {
    console.log('submiting', data);
    return fetch('https://httpbin.org/delay/1.5', {
      body: JSON.stringify(data),
      method: 'POST',
      mode: 'cors',
    });
  }
  const throttledSubmitApi = throttleAsyncResult(submitApi);

  export default defineComponent({
    setup() {
      return () => (
        <button
          onClick={async () => {
            await throttledSubmitApi({
              msg: 'some data to be sent',
            });
            console.log('submit completed');
          }}
        >
          submit(click me quickly)
        </button>
      );
    },
  });
</script>
