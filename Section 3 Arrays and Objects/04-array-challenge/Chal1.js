/* # Array Challenges

### Challenge 1:

**Instructions:**

Use some of the array methods that we looked at to mutate the following array to = the expected result below:

```js
const arr = [1, 2, 3, 4, 5];
```

**Expected Result:**

```js
console.log(arr);
// [6, 5, 4, 3, 2, 1, 0]; */

const arr = [1, 2, 3, 4, 5];
arr.unshift(0);
arr.push(6);
arr.reverse();
console.log(arr);
