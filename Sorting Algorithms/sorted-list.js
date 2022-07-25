//built-in array method .sort() will sort in ascending order with some changes to the method:

let numbers = [43, 23, 1, 302, 0];

numbers.sort((a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
});

//expected output: [0, 1, 23, 43, 302]
console.log(numbers);

//not efficient -> time complexity of O(n log(n))
//Could use bubble-sort or quick-sort algorithms? 