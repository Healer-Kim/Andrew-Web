// Number 1
function checkString(str) {
    if (str === "") {
        return "String is empty"
    } else {
        return "String is not empty"
    }
}

console.log(checkString("this is a string"))
console.log(checkString(""))

// Number 2
function validateInt(n,lower,upper) {
    if (typeof n !== "number") {
        return false
    } else {
        return true
    }

    if (n < upper && n >= lower) {
        return true
    } else {
        return false
    }
}

// Number 3
function swapArray(arr) {
    if (arr.length-1 < arr[0]){
        temp = arr[arr.length-1]
        arr[arr.length-1] = arr[0] 
        arr[0] = temp
        return arr
    } else {
        return "cannot be swapped"
    }
}

console.log(swapArray([6,2,3,4,5]))



