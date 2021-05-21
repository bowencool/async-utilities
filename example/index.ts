import { debounceAsync, throttleAsync } from '../src';

function searchApi(keywords) {
  console.log('fetching', keywords);
  const delay = (1 + Math.random() * 2).toFixed(3);
  return fetch(`https://httpbin.org/delay/${delay}?keywords=${keywords}`, {
    method: 'GET',
    mode: 'cors',
  });
}
const debouncedSearchApi = debounceAsync(searchApi);

// 模拟业务逻辑
const input = document.getElementById('debounceAsync') as HTMLInputElement;

input.addEventListener('input', async function (e) {
  // 这里应该用一次普通的debounce，但是与本主题无关，所以省略
  const keywords = input.value;
  const rez = await debouncedSearchApi(keywords);
  console.log(rez);
});

/**
 * ========
 */

function submitApi(data) {
  console.log('submiting', data);
  return fetch('https://httpbin.org/delay/1.5', {
    body: JSON.stringify(data),
    method: 'POST',
    mode: 'cors',
  });
}
const throttledApi = throttleAsync(submitApi);

// 模拟业务逻辑
const submitButton = document.getElementById('throttleAsync');

submitButton.addEventListener('click', async function () {
  await throttledApi({
    msg: 'some data to be sent',
  });
  console.log('submit completed');
});
