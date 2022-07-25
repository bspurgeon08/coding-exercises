const aaiMatrix = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];

const aaiBadMatrix = [
  [1, 2, "meow"],
  [1, 2, 3],
  [1, 2, 3],
];

const transpose = (aaiArr) => {
  let bIsValid = true;
  //check that all the elements inside the sub arrays are all numbers
  aaiArr.forEach((iIndex) => {
    iIndex.forEach((iElement) => {
      if (typeof iElement !== "number") {
        bIsValid = false;
      }
    });
  });
  //check edge case that the inputs are a valid matrix - i.e., lengths match up
  for (let iIndex = 1; iIndex < aaiArr.length; iIndex++) {
    if (aaiArr[iIndex].length !== aaiArr[0].length) {
      bIsValid = false;
    }
  }

  if (bIsValid) {
    for (let iI = 0; iI < aaiArr.length; iI++) {
      for (let iJ = 0; iJ < iI; iJ++) {
        const temp = aaiArr[iI][iJ];
        aaiArr[iI][iJ] = aaiArr[iJ][iI];
        aaiArr[iJ][iI] = temp;
      }
    }
    return aaiArr;
  } else {
    return "Matrix was Invalid";
  }
};

console.log(transpose(aaiMatrix));
console.log(transpose(aaiBadMatrix));
