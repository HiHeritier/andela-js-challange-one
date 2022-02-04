
function jazzify(array) {
    if (array.length == 0) {
        return [];
    }

    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].includes("7")) {
            // newArr += array[i]
            newArr.push(array[i])
        }
        else {
            // let newElement = array[i] + "7";
            // newArr += newElement;
            newArr.push(array[i] + "7")
        }
        
    }
    return newArr;
}

console.log(jazzify(["Dm", "G7", "E", "A"]))
console.log(jazzify([]))