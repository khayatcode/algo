// Recursive Binary Search

function rBinarySearch(arr, num){
    if(typeof num == "string"){
        return "Error: Input must be a number";
    } else if(arr.length == 0) {
        return false;
    } else if(arr[arr.length -1] == num){
        return true;
    } else {
        arr.pop();
        var newArr = arr;
        console.log("New array " + newArr);
        return rBinarySearch(newArr, num);
    }
}

console.log("Test 1");
console.log(rBinarySearch([1,3,5,6], 4));
console.log("Test 2");
console.log(rBinarySearch([4,5,6,8,12], 5));
console.log("Test 3");
console.log(rBinarySearch([1,3,5,6], 5));
console.log("Test 4");
console.log(rBinarySearch([4,5,6,8,12], "hello"));

// Greatest Common Factor

function rGCF(param1, param2) {
    if (param1 == param2) {
        return param1;
    }
    if (param1 > param2) {
        return rGCF(param1-param2, param2);
    }
    if (param1 < param2) {
        return rGCF(param1, param2-param1);
    }
}

console.log(rGCF(3, 7));   
console.log(rGCF(18, 27)); 
console.log(rGCF(49, 14)); 