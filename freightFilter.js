function scanAndFilter(array, str) {
    return array.filter(ele => {
        if (ele !== str) {
            return true
        }
        return false
    })
}