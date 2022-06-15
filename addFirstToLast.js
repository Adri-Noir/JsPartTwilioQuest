function addFirstToLast(array) {
    if (array.length > 0) {
        return array[0]+array.at(-1)
    } else {
        return ''
    }
}