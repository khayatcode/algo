// Shuffle
// Create a function shuffle(array) to shuffle an array. without creating a new arr

function shuffle(arr) {
    for (let i = 0; i < arr.length; i++) {
        let rand = Math.floor(Math.random() * arr.length)
        let temp = arr[i]
        arr[i] = arr[rand]
        arr[rand] = temp
    }
    return arr
}
// let arr=[1,2,3,4,5]
// shuffle(arr)
// console.log(arr)

// Remove Range
// Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array). Given ([20,30,40,50,60,70],2,4), change to [20,30,70] and return it.
function removeRange(arr, start, end) {
    let removed = end - start + 1
    for (let i = start; i < arr.length; i++) {
        arr[i] = arr[i + removed]
    }
    arr.length = arr.length - removed
    return arr
}
// let arr=[20,30,40,50,60,70]
// removeRange(arr,2,4)
// console.log(arr)

// Intermediate Sums
// You will be given an array of numbers. After every tenth element, add an additional element containing the sum of those ten values. If the array does not end aligned evenly with ten elements, add one last sum that includes those last elements not yet been included in one of the earlier sums. Given the array [1,2,1,2,1,2,1,2,1,2,1,2,1,2], change it to [1,2,1,2,1,2,1,2,1,2,15,1,2,1,2,6].
function intermediateSums(arr) {
    if (arr.length < 10) {
        return arr
    }
    let sum = 0
    let lastIndex = arr.length - 1
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
        if ((i + 1) % 10 === 0) {
            for (let j = arr.length; j > i; j--) {
                arr[j] = arr[j - 1];
            }
            arr[i + 1] = sum;
            sum = 0;
            lastIndex++
            console.log(lastIndex)
            i++
        }
        else if (i === lastIndex) {
            arr.push(sum)
            break
        }
    }
    return arr
}
// let arr = [1,2,1,2,1,2,1,2,1,2,1,2,1,2,10,10,10,10,10,10,10,10,10,10,10,10]
// intermediateSums(arr)
// console.log(arr)

// Double Trouble
// Create a function that changes a given array to list each original element twice, retaining original order. Convert [4,"Ulysses",42,false] to [4,4,"Ulysses","Ulysses",42,42,false,false].
function doubleTrouble(arr) {
    for (let i = 0; i < arr.length; i += 2) {
        for (let j = arr.length; j > i; j--) {
            arr[j] = arr[j - 1];
        }
        arr[i + 1] = arr[i];
    }

    return arr;
}

let arr = [4, "Ulysses", 42, false];
doubleTrouble(arr);
console.log(arr);



