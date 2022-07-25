const isLeap = (iNum) => {
  return (iNum % 4 === 0 && iNum % 100 !== 0) || iNum % 400 === 0 ? true : false;
};

console.log(isLeap(2017));
console.log(isLeap(2016));
console.log(isLeap(1900));
