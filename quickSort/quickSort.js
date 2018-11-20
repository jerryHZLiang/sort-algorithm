function quickSort(arr){
    if(arr.length<=1){
        return arr
    }
    var leftArr = []
    var rightArr = []
    for(let i = 1; i<arr.length;i++){
        if(arr[i]<arr[0]){
            leftArr.push(arr[i])
        }else{
            rightArr.push(arr[i])
        }
    }
    return quickSort(leftArr).concat(arr[0]).concat(quickSort(rightArr))
}

var arr = [10, 34, 21, 47, 3, 28]
var result = quickSort(arr)
console.log(result)

// let arr = randomArr(10000, 100)
// console.time('quickSort')
// quickSort(arr)
// console.timeEnd('quickSort')


// function randomArr( arrLen = 100, maxValue = 1000 ) {
//   let arr = []
//   for(let i = 0; i < arrLen; i++) {
//     arr[i] = Math.floor((maxValue+1)*Math.random())
//   }
//   return arr
// }
