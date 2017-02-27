function addsUp(int, arr) {

    for (var i = 0; i < arr.length; i++) {
console.log(arr[i])
        for (var j = 0; j < arr.length; j++) {
console.log(arr[j])
            if (j != i && arr[i] + arr[j] == int) {
                return true
            } else {
                for (var k = 0; k < arr.length; k++) {
                    console.log(arr[k])
                    if (k != j && k != i && arr.indexOf((int - (arr[i] + arr[j]))) == 1) {
                        return true
                    }
                }
            }

        }
    }
    return false
}

// console.log(addsUp(10, [5, 1, 5])) // true, because 5 + 5 === 10
// console.log(addsUp(10, [2, 3, 1, 5]))  // true, because 2 + 3 + 5 === 10
console.log(addsUp(10, [4, 2, 5])) // false, no combination could add to 10

// addsUp(10, [5, 1, 5]) // true, because 5 + 5 === 10
// addsUp(10, [2, 3, 1, 5])  // true, because 2 + 3 + 5 === 10
// addsUp(10, [4, 2, 5]) // false, no combination could add to 10