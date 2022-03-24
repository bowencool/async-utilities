import { concurrentAsync } from './index';
import sinon from 'sinon';

// jest.useFakeTimers();

// afterEach(function () {
//   sinon.restore();
// });

function someAsyncTask<T>(data: T, delay = 100, fail?: boolean): Promise<T> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fail) {
        reject('error');
      } else {
        resolve(data);
      }
    }, delay);
  });
}

describe('concurrentAsync', () => {
  test('keep result correctly', async () => {
    const con3 = concurrentAsync(someAsyncTask);
    const promises = new Array(7).fill(0).map((_, i) => con3(i * 2, i * 10, i % 2 === 0));
    // jest.advanceTimersByTime(500);
    for (let i = 0; i < promises.length; i++) {
      if (i % 2 === 0) {
        await expect(promises[i]).rejects.toBe('error');
      } else {
        await expect(promises[i]).resolves.toBe(i * 2);
      }
    }
  });
});
