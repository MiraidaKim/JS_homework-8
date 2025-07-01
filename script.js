function findMax(array) {
    var max = array[0] 
    for (var item of array) {
        if (item > max) {
            max = item
        }
    }
    return max
}

console.log(findMax([1, 5, 3, 9, 2]))      
console.log(findMax([7, 7, 7, 7, 7]))    
console.log(findMax([-10, -5, -1, -20]))   
