myArr = [2,1,3,4];

function updateNum(arr) {
    for(i=0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            arr[i] = arr[i]+1
        }
    }
    console.log(arr)
    return arr
}

updateNum(myArr)