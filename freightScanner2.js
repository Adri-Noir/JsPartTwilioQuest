function scan(array) {
    let returnArray = []
    array.forEach((ele, index) => {
        if (ele === "contraband") {
            returnArray.push(index)
        }
    })

    return returnArray
}