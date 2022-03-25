import Size from "./Size"

export interface IChair {
    height: number
    width: number
    weight: number
    getSize(): Size
}

class Chair implements IChair {
    height = 0
    width = 0
    weight = 0

    getSize(): Size {
        return {
            height: this.height,
            width: this.width,
            weight: this.weight
        }
    }
}

export default Chair