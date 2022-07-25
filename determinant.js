//not sure about this naming - an array of an arrays containing integers?
const aaiMatrix = [
  [1, 10],
  [2, 9],
];

const determinant = (aaiArr) => {
  //check that input is indeed 2x2 matrix
  if (aaiArr.length !== 2 || aaiArr[0].length !== 2 || aaiArr[1].length !== 2) {
    return "Not a valid 2x2 Matrix";
  }
  //check if all elements inside sub-arrays are numbers
  let bIsValid = true;
  for (const iIndex of aaiArr) {
    for (const iElement of iIndex) {
      if (typeof iElement !== "number") {
        bIsValid = false;
      }
    }
  }
  if (bIsValid) {
    return aaiArr[0][0] * aaiArr[1][1] - aaiArr[0][1] * aaiArr[1][0];
  } else {
    return "not a valid matrix";
  }
};

console.log(determinant(aaiMatrix));
