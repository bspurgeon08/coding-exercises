const pivot = (aiArr, iStart = 0, iEnd = aiArr.length - 1) => {
  const swap = (aiArr, iIdx1, iIdx2) => {
    [aiArr[iIdx1], aiArr[iIdx2]] = [aiArr[iIdx2], aiArr[iIdx1]];
  };
  let iPivot = aiArr[iStart];
  let iSwapIdx = iStart;

  for (let iI = iStart + 1; iI <= iEnd; iI++) {
    if (iPivot > aiArr[iI]) {
      iSwapIdx++;
      swap(aiArr, iSwapIdx, iI);
      console.log(aiArr[iSwapIdx]);
    }
  }
  swap(aiArr, iStart, iSwapIdx);
  return iSwapIdx;
};

const quickSort = (aiArr, iLeft = 0, iRight = aiArr.length - 1) => {
  if (iLeft < iRight) {
    let iPivotIdx = pivot(aiArr, iLeft, iRight);
    quickSort(aiArr, iLeft, iPivotIdx - 1);
    quickSort(aiArr, iPivotIdx + 1, iRight);
  }
  return aiArr;
};
console.log(quickSort([4, 9, 10, 3]));
           
console.log(quickSort([true, -3, "meow", 0, false, 9, 1, 2, 5, 3, 23]));
