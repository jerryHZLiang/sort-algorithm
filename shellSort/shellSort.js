function shellSort(arr){
    var temp 
    var len = arr.length
    for(var gap = Math.floor(len/2);gap>0;gap= Math.floor(gap/2)){
        for(var i=gap; i<len;i++){
            for(var j = i-gap;j>=0&& arr[j]>arr[j+gap];j-=gap){
                temp = arr[j]
                arr[j] = arr[j+gap]
                arr[j+gap] = temp
            }
        }

    }
}

var arr = [3, 1, 7, 2, 5, 0, 4, 6]
shellSort(arr)
console.log(arr)