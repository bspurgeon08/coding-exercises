//Given an integer x as input, calculate the smallest integer exponent n for which 2 ^ n >= x

const smallestExp = (iInt) => {
  let iCount = 0;
  while (2 ** iCount < iInt) {
    iCount++;
  }
  if (2 ** iCount === iInt) {
    return iCount;
  } else return iCount;
};

console.log(smallestExp(10));
