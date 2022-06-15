let in1 = process.argv[2].toLowerCase()
let in2 = process.argv[3].toLowerCase()

if (in1 === in2) {
    console.log(0)
} else {
    let array = [in1, in2]
    array = array.sort()

    if (array[0] === in1) {
        console.log(-1)
    } else {
        console.log(1)
    }
}