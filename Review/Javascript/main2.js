myArr = [[65,15],[74,69]];

function question(arr,num) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            if(arr[i][j] === num) {
                console.log('Given number achieved. Breaking out.')
                break
            }
        }
    }
}

question(myArr,15)
