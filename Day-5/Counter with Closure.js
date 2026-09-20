function makeCounter() {
  let count = 0;

  return {
    increment() {
      count++;
    },

    decrement() {
      count--;
    },

    getCount() {
      return count;
    }
  };
}

const c = makeCounter();

c.increment();
c.increment();

console.log(c.getCount());
// 2

c.decrement();

console.log(c.getCount());
// 1