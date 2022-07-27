let aiSorted = (aiArr) => {
  for (let iI = aiArr.length; iI > 0; iI--) {
    for (let iJ = 0; iJ < iI; iJ++) {
      //if the iJ index (one less) is greater than the iI index, perform a swap
      if (aiArr[iJ] > aiArr[iJ + 1]) {
        let iTemp = aiArr[iJ];
        aiArr[iJ] = aiArr[iJ + 1];
        aiArr[iJ + 1] = iTemp;
      }
    }
  }
  return aiArr;
};

const stdDev = (aiArr, iMean) => {
  let aiStdDev = aiArr.map((iNum) => {
    return Math.pow(iNum - iMean, 2);
  });
  return Math.sqrt(aiStdDev.reduce((a, b) => a + b) / (aiArr.length - 1));
};



const minMaxMeanStdDev = (aiArr) => {
  let bIsValid = true;
  aiArr.forEach((iElement) => {
    if (typeof iElement !== "number") {
      bIsValid = false;
    }
  });
  if (bIsValid) {
    //find minimum and maximum
    let aiMinMax = aiSorted(aiArr);
    let iMin = aiMinMax[0];
    let iMax = aiMinMax[aiArr.length - 1];
    //find mean
    let iMean = aiMinMax.reduce((a, b) => a + b) / aiArr.length;
    let iStdDev = stdDev(aiArr, iMean).toFixed(2);
    return `Min: ${iMin}, Max: ${iMax}, Mean: ${iMean}, Standard Deviation (rounded): ${iStdDev}`;
  }
};
console.log(minMaxMeanStdDev([2, 6, 1, 10]));
