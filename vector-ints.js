//Write an algorithm that received in input a vector of integers A [1..n] and an integer v, finds an index i such that A [i] = v

//two inputs: an array of integers and an integer to find.
const vectorInt = (aiInts, iInt) => {
  if (typeof iInt !== "number") {
    return "The second input must be a number";
  }
  if (
    aiInts.forEach((iElement) => {
      return typeof iElement;
    }) !== "number"
  ) {
    return "each element of the array must be a number";
  }
  let iReturnInt;
  for (let iElement of aiInts) {
    if (iElement === iInt) {
      iReturnInt = aiInts.indexOf(iElement);
    }
  }
  //return the integer
  return `A[${iReturnInt}] = ${iInt}.`;
};

console.log(vectorInt([4, 2, "meow", 7, 3], 4));
