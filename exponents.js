//Given base and exponent calculate Base ^ (Exponent)
//The built in method Math.pow() calculates expontents when given a base and exponent -> Math.pow(4,3) returns 64.
const calculateExponent = (iBase, iExponent) => {
    //ensure both inputs are numbers and if so execute the calculation
    if(typeof iBase === "number" && typeof iExponent === "number") {
        return iBase ** iExponent; 
    } else {
        return "Both inputs must be a number";
    }
}

console.log(calculateExponent(4,3)); 
console.log(calculateExponent(4, false)); 