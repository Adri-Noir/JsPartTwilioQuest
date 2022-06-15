function calculateMass(array) {
    return array.reduce((suma, ele) => suma + ele.length, 0)
}