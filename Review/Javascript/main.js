myArr = ['item 0','item 1','item 2'];

function totalCount(arr,str) {
    count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].startsWith(str)) {
            count ++
        }
    }
    console.log(count);
}

totalCount(myArr,'it')
