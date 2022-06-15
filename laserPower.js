function calculatePower(array) {
    array = array.map(ele => ele*2)

    if (array.length === 0) return 0

    return array.reduce((suma, item) => suma + item)
}

