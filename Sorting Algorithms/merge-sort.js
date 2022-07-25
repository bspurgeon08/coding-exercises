const merge = (aiArr1, aiArr2) => {
  let iI = 0;
  let iJ = 0;
  let aiMerged = [];
  while (iI < aiArr1.length && iJ < aiArr2.length) {
    if (aiArr1[iI] < aiArr2[iJ]) {
      aiMerged.push(aiArr1[iI]);
      iI++;
    } else if (aiArr1[iI] > aiArr2[iJ]) {
      aiMerged.push(aiArr2[iJ]);
      iJ++;
    }
  }
  while (iI < aiArr1.length) {
    aiMerged.push(aiArr1[iI]);
    iI++;
  }
  while (iJ < aiArr2.length) {
    aiMerged.push(aiArr2[iJ]);
    iJ++;
  }
  return aiMerged;
};

const mergeSort = (aiArr) => {
  let bIsValid = true;
  aiArr.forEach((iElement) => {
    if (typeof iElement !== "number") bIsValid = false;
  });
  if (bIsValid) {
    if (aiArr.length <= 1) {
      return aiArr;
    }
    let aiMid = Math.floor(aiArr.length / 2);
    let aiLeft = mergeSort(aiArr.slice(0, aiMid));
    let aiRight = mergeSort(aiArr.slice(aiMid));

    return merge(aiLeft, aiRight);
  } else {
    return "not a valid dataset";
  }
};
console.log(mergeSort([1, 130, 16, 33, 2, 8, 60, 99]));
