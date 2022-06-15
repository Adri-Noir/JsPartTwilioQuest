class TargetingSolution {
    constructor(dict) {
        this.x = dict.x
        this.y = dict.y
        this.z = dict.z
    }

    target() {
        return "("+String(this.x)+", "+String(this.y)+", "+String(this.z)+")"
    }
}