// Recursive Sigma

function sigma(num){
    var sum = 0

    if(typeof num == "string"){
        return "Error: Input must be a number"
    }
    else if(num >= 1){
        var intNum = Math.trunc(num)
        var prevVal = sigma(intNum - 1)
        sum = intNum + prevVal
    }
    return sum
}

console.log("Test 1")
console.log(sigma(5))
console.log("Test 2")
console.log(sigma(2.5))
console.log("Test 3")
console.log(sigma(-1))
console.log("Test 4")
console.log(sigma("hello"))


// Recursive Factorial

function factorial(num){
    var sum = 1
    if(typeof num == "string"){
        return "Error: Input must be a number"
    }
    else if(num >= 1) {
        var intNum = Math.trunc(num)
        var prevVal = factorial(num-1)
        sum = intNum * prevVal
    }
    return sum
}

console.log("Test 1")
console.log(factorial(3))
console.log("Test 2")
console.log(factorial(6.5))
console.log("Test 3")
console.log(factorial(-1))
console.log("Test 4")
console.log(factorial("hello"))

