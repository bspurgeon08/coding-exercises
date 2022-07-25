const aiBadNumbers = [8, 1, false, 6, -10];
const aiGoodNumbers = [0, -4, 3, 10, 7];

const insertionSort = (aiArr) => {
  let bIsValid = true;
  aiArr.forEach((iElement) => {
    if (typeof iElement !== "number") {
      bIsValid = false;
    }
  });
  if (bIsValid) {
    let iCurrentValue;
    for (let iI = 1; iI < aiArr.length; iI++) {
      iCurrentValue = aiArr[iI];
      for (var iJ = iI - 1; iJ >= 0 && aiArr[iJ] > iCurrentValue; iJ--) {
        aiArr[iJ + 1] = aiArr[iJ];
      }
      aiArr[iJ + 1] = iCurrentValue;
    }
    return aiArr;
  } else {
    return "Array is invalid";
  }
};

console.log(insertionSort(aiGoodNumbers));
console.log(insertionSort(aiBadNumbers));
console.log(insertionSort([2, 1, 9, 76, 4]));
