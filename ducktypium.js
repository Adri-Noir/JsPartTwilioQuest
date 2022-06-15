class Ducktypium {
    constructor(color) {
        if (color !== "red" && color !== "blue" && color !== "yellow") {
            alert("error")
            return
        }
        this.color = color
        this.calibrationSequence = []
    }

    refract(color) {
        if (color !== "red" && color !== "blue" && color !== "yellow") {
            alert("error")
            return
        }

        if (color === this.color) {
            return color
        }

        if (this.color === "red") {
            if (color === "blue") {
                return "purple"
            }

            if (color === "yellow") {
                return "orange"
            }
        }

        if (this.color === "yellow") {
            if (color === "blue") return "green"

            if (color === "red") return "orange"
        }

        if (this.color === "blue") {
            if (color === "red") return "purple"

            if (color === "yellow") return "green"
        }
    }

    calibrate(array) {
        array.sort()
        array = array.map(ele => ele*3)
        this.calibrationSequence = array
    }
}
