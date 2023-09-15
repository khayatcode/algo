// 1) Push Front
function pushFront(array, num){
    var newArray = [num]
    for(var i=0; i<array.length; i++){
        var arrayNum = array[i]
        newArray.push(arrayNum)
    }
    return newArray
}
console.log(pushFront([9,6,2], 7))

// 2) Pop Front3
function popFront(array){
    newArray = []
    for(var i=1; i<array.length; i++){
        newArray.push(array[i])
    }
    console.log(newArray)
    return array[0]
}

console.log(popFront([6,9, 80,6,2,45]))

// 3) Insert At

function insertAt(arr, index, num){
    for(let i = arr.length; i >= index; i--){
        arr[i] = arr[i-1]
    }
    arr[index] = num
    return arr
}

console.log(insertAt([73,8,291,3], 1, 0))

// Remove At

function removeAt(arr, index){
    const newArray = []
    for(let i = 0; i < arr.length; i ++){
        if(i != index){
            newArray.push(arr[i])
        }
    }
    return newArray
}

console.log(removeAt([1000,3,204,77], 1))

// Swap Pairs

function swapPairs(arr){
    const newArray = [];
    if(arr.length % 2 === 0){
        for(let i = 0; i < arr.length; i += 2){
            newArray.push(arr[i + 1], arr[i]);
        }
    } else {
        for(let i = 0; i < arr.length - 1; i += 2){
            newArray.push(arr[i + 1], arr[i]);
        }
        newArray.push(arr[arr.length - 1]);
    }
    return newArray;
}

const arr = [1, 2, 3, 4, 5, 7];
const swappedArr = swapPairs(arr);
console.log(swappedArr);

// Remove Duplicates

function removeDupes(arr){
    const newArray =[]
    for(i = 0; i < arr.length; i++){
        if(arr[i] != arr[i + 1]){
            newArray.push(arr[i])
        }
    }
    return newArray
}

console.log(removeDupes([-2,-2,3.14,5,5,10]))
console.log(removeDupes([9,19,19,19,19,19,29]))



