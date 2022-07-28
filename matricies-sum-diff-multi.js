//Take 2 3 x 3 matrices as input and calculate their sum, difference and multiplication
let aaiA = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let aaiB = [
  [2, 10, 4],
  [5, 6, 7],
  [8, 9, 10],
];
const sumDiffMulti = (aaiArr1, aaiArr2) => {
  let bArr1IsValid = true;
  let bArr2IsValid = true;
  //check that all the elements inside the sub arrays are all numbers
  aaiArr1.forEach((iIndex) => {
    iIndex.forEach((iElement) => {
      if (typeof iElement !== "number") {
        bArr1IsValid = false;
      }
    });
  });
  aaiArr2.forEach((iIndex) => {
    iIndex.forEach((iElement) => {
      if (typeof iElement !== "number" || iElement.length !== 3) {
        bArr2IsValid = false;
      }
    });
  });
  //check that the matricies are actually 3x3 matricies
  if(aaiArr1.length !== 3) {
    bArr1IsValid = false;
  }
  if (aaiArr2.length !== 3) {
    bArr2IsValid = false;
  }
  
    if (bArr1IsValid && bArr2IsValid) {
      //sum of the matricies
      let aaiSum = [[], [], []];
      let aaiDiff = [[], [], []];
      let aaiMulti = [[], [], []];
      for (let iI = 0; iI < aaiArr1.length; iI++) {
        for (let iJ = 0; iJ < aaiArr1[iI].length; iJ++)
          aaiSum[iI][iJ] = aaiArr1[iI][iJ] + aaiArr2[iI][iJ];
      }
      for (let iI = 0; iI < aaiArr1.length; iI++) {
        for (let iJ = 0; iJ < aaiArr1[iI].length; iJ++)
          aaiDiff[iI][iJ] = aaiArr1[iI][iJ] - aaiArr2[iI][iJ];
      }
      for (let iI = 0; iI < aaiArr1.length; iI++) {
        for (let iJ = 0; iJ < aaiArr1[iI].length; iJ++)
          aaiMulti[iI][iJ] = aaiArr1[iI][iJ] * aaiArr2[iI][iJ];
      }
      return [aaiSum, aaiDiff, aaiMulti];
    } else {
      return "either 1 or both matrices is invalid";
    }
};

console.log(sumDiffMulti(aaiA, aaiB));
