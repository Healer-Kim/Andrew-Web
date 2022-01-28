myArr = ['corn','burger','we','us'];

function charArr(arr,num) {
    let count = 0
    for(let i=0; i<arr.length; i++) {
        countArr = arr[i].length
        if (countArr > num) {
            count++
        }
    }
    console.log(count)
}

charArr(myArr,2)