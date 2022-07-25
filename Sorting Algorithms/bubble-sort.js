const aiBadNumbers = [8, 1, false, 6, -10];
const aiGoodNumbers = [0, -4, 3, 10, 7]; 

const bubbleSort = (iaArr) => {
  let bIsValid = true;
  iaArr.forEach((iElement) => {
    if(typeof iElement !== "number") {
        bIsValid = false;
    }
  });
  for (let iI = iaArr.length; iI > 0; iI--) {
    for (let iJ = 0; iJ < iI; iJ++) {
      //if the iJ index (one less) is greater than the iI index, perform a swap
      if (iaArr[iJ] > iaArr[iJ + 1]) {
        let iTemp = iaArr[iJ];
        iaArr[iJ] = iaArr[iJ + 1];
        iaArr[iJ + 1] = iTemp;
      }
    }
  }
  if (bIsValid) {
    return iaArr;
  } else {
    return "All elements must be a number";
  }
};
console.log(bubbleSort(aiBadNumbers));
console.log(bubbleSort(aiGoodNumbers));
