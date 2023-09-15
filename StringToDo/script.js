// Remove Blanks

function removeBlank(string){
    let arr = string.split(" ")
    string = arr.join("")
    return string
}

console.log(removeBlank("Pl ayTha tF u nkyM usi c "))
console.log(removeBlank("I can not BELIEVE it's not BUTTER"))

// Get Digits

function getDigit(string){
    let int = ""
    for(var i = 0; i < string.length; i++){
        if(!isNaN(string[i])){
            int += string[i]
        }
    }
    // for(let char in string){
    //     if(!isNaN(string[char])){
    //         int += string[char]
    //     }
    // }
    return int
}

console.log(getDigit("abc8c0d1ngd0j0!8"))
console.log(getDigit("0s1a3y5w7h9a2t4?6!8?0"))

// Acronym

function acronym(string){
    let arr = string.split(" ")
    console.log("arr is:", arr)
    let secondString = ""
    // for(var i = 0; i < arr.length; i++){
    //     if(arr[i][0] || arr[i][0] == "-"){
    //         char = arr[i][0]
    //         secondString += char
    //     }
    // }
    for(let char in arr){
        if(arr[char].length > 0){
            secondString += arr[char][0]
        }
    }
    return secondString.toUpperCase()
}

console.log(acronym(" there's no free lunch - gotta pay yer way. "))
console.log(acronym("Live from New York, it's Saturday Night!"))

// count Non-Spaces

function countNonSpaces(string){
    let nonSpaces = 0
    for(var i = 0; i < string.length; i++){
        if(string[i] != " "){
            nonSpaces += 1
        }
    }
    // for(let char in string){
    //     if(string[char] != " "){
    //         nonSpaces += 1
    //     }
    // }
    return nonSpaces
}

console.log(countNonSpaces("Honey pie, you are driving me crazy"))
console.log(countNonSpaces("Hello world !"))

// Remove Shorter String

function removeShorterString(arr, int){
    let newArr = []
    // for(var i = 0; i < arr.length; i++){
    //     if(arr[i].length >= int){
    //         newArr.push(arr[i])
    //     }
    // }
    let nextIndex = 0
    for(let value in arr){
        if(arr[value].length >= int){
            newArr[nextIndex] = arr[value]
            nextIndex++
        }
    }
    return newArr
}
console.log(removeShorterString(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4))
console.log(removeShorterString(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3))
