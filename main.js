/* 1 */

/* function* counter() {
  let count = 0;
  while (true) {
    count += 1;
    yield count;
  }
}
const gen = counter();
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value) */

/* function counter() {
  let count = 0;
  return function counter_generator() {
    count += 1;
    return count;
  };
}
const gen = counter();
console.log(gen())
console.log(gen())
console.log(gen()) */


/* 2 */

function* take(n, iter) {
  let index = 0;
  for (const val of iter) {
    if (index >= n) {
      return;
    }
    index = index + 1;
    yield val;
  }
}

for (const element of take(3, ['a', 'b', 'c', 'd', 'e'])) {
  console.log(element)
}
