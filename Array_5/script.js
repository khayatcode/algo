// Average (Warmup)
// (Warm-up) Always run through some quick algorithm problems before any coding interview, to get yourself warmed up. How about this one: return the average value of an array of unsorted numbers.

function average(arr){
    // check if arr contains only numbers
    if(arr.length === 0){
        return "Array is empty"
    } 
    // check if arr contains only numbers and no strings
    else if(arr.every((item) => typeof item === "number")){
        let sum = 0
        for(let i = 0; i < arr.length; i++){
            sum += arr[i]
        }
        return "Average is " + sum/arr.length
    } else {
        return "Array contains strings"
    }
}
// console.log(average([1,2,3,4,5,6,7,8,9,10]))
// console.log(average([1,2,3,4,5,6,7,8,9,10,"a"]))

// Balance Index
// Here, a balance point is on an index, not between indices. Return the balance index where sums are equal on either side (exclude its own value). Return -1 if none exist. Ex.: [-2,5,7,0,3] → 2, but [9,9] → -1.
function balanceIndex(arr){
    if(arr.some((item) => typeof item !== "number")){
        return "Array must be all numbers"
    }
    if(arr.length % 2 !== 0){
        let sumLeft = 0
        let sumRight = 0
        let balancePoint = (arr.length - 1) / 2
        for (var i = 0; i < balancePoint; i++){
            sumLeft += arr[i]
        }
        for (var i = arr.length - 1 ; i > balancePoint; i--){
            sumRight += arr[i]
        }
        console.log("sumLeft: " + sumLeft)
        console.log("sumRight: " + sumRight)
        if(sumLeft == sumRight){
            return "Both sides are equal"
        } else {
            return "Both sides are uneven"
        }
    }else{
        return "There is no middle point in the array"
    }
}
// console.log(balanceIndex([1,2,3,4,10]))
// console.log(balanceIndex([1,2,4,2,1]))
// console.log(balanceIndex([1,2,4,2,1,1,1,"a"]))

// Balance Point
// Write a function that returns whether the given array has a balance point between indices, where one side’s sum is equal to the other’s. Example: [1,2,3,4,10] → true (between indices 3 & 4), but [1,2,4,2,1] → false.

function balancePoint(arr){
    if(arr.some((item) => typeof item !== "number")){
        return "Array must be all numbers"
    }
    if(arr.length % 2 !== 0){
        let sumLeft = 0
        let sumRight = 0
        let middleIndex = (arr.length - 1) / 2
        for (var i = 0; i < middleIndex; i++){
            sumLeft += arr[i]
        }
        for (var i = arr.length - 1 ; i > middleIndex; i--){
            sumRight += arr[i]
        }
        if(sumLeft == arr[middleIndex] || sumRight == arr[middleIndex]){
            return "Atleast one side is equal to the balance point"
        } else {
            return "It is not equal to the balance point"
        }
    }else{
        return "There is no middle point in the array"
    }
}

// console.log(balancePoint([1,2,3,4,10]))
// console.log(balancePoint([1,2,4,2,1]))
// console.log(balancePoint([1,2,4,2,1,1,1,"a"]))