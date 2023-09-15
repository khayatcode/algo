function minToFront(arr){
    for(i = 1; i < arr.length; i++){
        if(arr[0] > arr[i]){
            lowNum = arr[i]
            highNum = arr[0]
            arr[0] = lowNum
            arr[i] = highNum

        }
    }
    return arr 
}

console.log(minToFront([4,6,13,5,2]))