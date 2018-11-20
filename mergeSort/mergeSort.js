var merge = function(left, right) {
    var result = []
    while(left.length && right.length) {
      result.push(left[0] <= right[0] ? left.shift() : right.shift())
    }
    return result.concat(left.concat(right))
  }

function mergeSort(arr) {

    if(arr.length < 2) return arr
    var middle = Math.floor(arr.length / 2);
    var left = arr.slice(0, middle);
    var right = arr.slice(middle);  
    return merge(mergeSort(left), mergeSort(right)); //递归合并与排序 
  }

  var arr=[6,10,1,9,4,8,2,7,3,5]
  var merg = mergeSort(arr)
 console.log(merg)