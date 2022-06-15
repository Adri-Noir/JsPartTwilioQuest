function getFirstAmountSorted(array, N) {
    let sortedArray = array.sort()
    return array.slice(0, N)
}