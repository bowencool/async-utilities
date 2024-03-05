export function concurrentAsync<T, P extends any[], R>(
  fn: (this: T, ...p: P) => Promise<R>,
  maxCount = 3,
): (this: T, ...p: P) => Promise<R> {
  let that: T;

  type Resolve = (arg: R) => void;
  type Reject = (...ers: unknown[]) => void;
  type Holding = [P, Resolve, Reject];

  const holding: Array<Holding> = [];

  let executing = 0;

  function drain() {
    if (/* holding.length === 0 ||  */ executing >= maxCount) return;
    const nextHolding = holding.shift();
    if (nextHolding) {
      // console.log('\ndrain', executing);
      execTask(nextHolding);
    }
  }

  function execTask([rawParams, resolve, reject]: Holding) {
    executing++;
    // console.log('execTask', executing);
    fn.apply(that, rawParams)
      .then((...args) => {
        resolve(...args);
        executing--;
        drain();
      })
      .catch((...args) => {
        reject(...args);
        executing--;
        drain();
      });
  }

  return function asyncConcurrented(this: T, ...rawParams: P): Promise<R> {
    that = this;
    const defer = new Promise((r: Resolve, j: Reject) => {
      holding.push([rawParams, r, j]);
    });
    drain();
    return defer;
  };
}
