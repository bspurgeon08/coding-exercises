//Calculation of a factorial (4! = 4x3x2x1 = 24)
const factorial = (iNum) => {
  
  const iNumber = iNum;
  const aiNumbers = []; 
  for (let iIndex = iNumber; iIndex > 0; iIndex--) {
    aiNumbers.push(iIndex);
  }
  console.log(aiNumbers.reduce((iA, iB) => iA * iB)); 
};

factorial(0);
