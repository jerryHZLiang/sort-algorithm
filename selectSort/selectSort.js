function selectSort(arr){
    for(let min =i= 0; i<arr.length;i++){
        min = i
        for(let j=i+1; j<arr.length;j++){
            if(arr[min]>arr[j]){
                min=j
            }
        }
        [arr[i], arr[min]] = [arr[min], arr[i]]
    }
}

var arr = [10, 34, 21, 47, 3, 28]
selectSort(arr)
console.log(arr)