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


//方法二
// function quickSort(arr){
// 	function _quickSort(arr,start,end){
//   	if(start >=end) return;
//     let key = arr[end];
//     let left = start
//     let right = end-1;
//     while(left<right){
//     	if(arr[left]<key && left<right) left++;
//       if(arr[right]>key && right>right) right--;
//       [arr[left],arr[right]]=[arr[right],arr[left]]
//     }
//     if(arr[left]>=rr[end]){
//     	[arr[left],arr[end]]=[arr[end],arr[left]]
//     }else{
//        left++
//     }
//     _quickSort(arr, start, left - 1)
//     _quickSort(arr, left + 1, end)
//   }
//   _quickSort(arr, 0, arr.length - 1)
//   return arr
// }

// var arr = [10, 34, 21, 47, 3, 28]
// var s = quickSort(arr)
// console.log(s)
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
