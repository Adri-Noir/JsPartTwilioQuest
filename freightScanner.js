function scan(array) {
    let counter = 0
    array.forEach(ele => {
        if (ele === "contraband") {
            counter += 1
        }
    })
    return counter
}