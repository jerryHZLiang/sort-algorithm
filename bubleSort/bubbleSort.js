function bubbleSort(arr){
    for(let i= 0; i<arr.length;i++){
        for(let j = 0; j< arr.length -i;j++){
            if(arr[j]> arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]] 
            }
        }
    }
}

var arr = [10, 34, 21, 47, 3, 28]
bubbleSort(arr)
console.log(arr)