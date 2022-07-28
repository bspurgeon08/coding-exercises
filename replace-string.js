//Implement a replace function for a string

//Function should take 3 elements: the string, the part to replace, the replacement
const strReplace = (sStr, sDelete, sReplacement) =>{ 
    return sStr.split(" ").map(sElement => {
        return sElement === sDelete ? sReplacement  : sElement
    }).join(" ")
    //return the string
 
}

console.log(strReplace("I am a dog", "dog", "cat"));