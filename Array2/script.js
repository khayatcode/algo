// reverse
function reverse(arr){
    for(var i=0; i < arr.length/2; i++){
        firstNum = arr[i]
        lastNum = arr[arr.length - 1 - i]
        arr[i] = lastNum
        arr[arr.length - 1 - i] = firstNum
    }
    return arr
}

console.log(reverse([1,2,3,4,5,6]))

function rotate(arr, shiftBy){
    if(shiftBy > 0){
        for(var i = 0; i < shiftBy; i++){
            const lastNum = arr[arr.length - 1];
            for(var j = arr.length - 1; j > 0; j--){
                arr[j] = arr[j - 1];
            }
            arr[0] = lastNum;
        }
    } else if(shiftBy < 0){
        for(var i = 0; i > shiftBy; i--){
            const firstNum = arr[0];
            for(var j = 0; j < arr.length - 1; j++){
                arr[j] = arr[j + 1];
            }
            arr[arr.length - 1] = firstNum;
        }
    }
    return arr;
}
console.log(rotate([1, 2, 3,4,5], 2)); // [3, 1, 2]
console.log(rotate([1, 2, 3], -1)); // [2, 3, 1]

// filter range

function filter(arr, min, max){
    var nextIndex = 0
    for(var i = 0; i < arr.length; i++){
        if(arr[i] >= min && arr[i] <= max){
            arr[nextIndex] = arr[i]
            nextIndex++
        }
    }
    arr.length = nextIndex
    return arr
}

console.log(filter([1,2,3,4,5,6,7,8,9,10], 3,7))

// Concat

function concat(arr, arr2){
    newArray = []
    for(i = 0; i < arr.length; i++){
        newArray.push(arr[i])
    }
    for(i = 0; i < arr2.length; i++){
        newArray.push(arr2[i])
    }
    return newArray
}

console.log(concat([1,2,3], ["a","b","c"]))

