//Implement a replace function for a string

//Function should take 3 elements: the string, the part to replace, the replacement
const strReplace = (sStr, sDelete, sReplacement) =>{ 
    if(typeof sStr === "string" && typeof sDelete === "string" && typeof sReplacement === "string") {
         return sStr.split(" ").map(sElement => {
        return sElement === sDelete ? sReplacement  : sElement
    }).join(" ")
    } else {
        return "all inputs must be strings";
    }
   

 
}

console.log(strReplace("I am a dog", "dog", "cat"));