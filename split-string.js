//Make a program that does the string split, without using the appropriate library function: example of split:

const sInputString = "Hello; How is it going?; fine thanks;";

const splitString = (sString, sSplit) => {
  if (typeof sString === "string" && typeof sSplit === "string") {
    let asReturnArr = [];
    let sTempStr = "";
    for (const element of sString) {
      if (element !== sSplit) {
        sTempStr += element;
      } else {
        asReturnArr.push(sTempStr);
        sTempStr = "";
      }
    }
    return asReturnArr; 
  } else {
    return "Either the string entered or the split parameter is invalid";
  }
};

console.log(splitString(sInputString, ";")); 