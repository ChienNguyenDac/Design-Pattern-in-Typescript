import { Size, Furniture } from "./config"

export interface IChair {
    type: string
    height: number
    width: number
    weight: number
    getSize(): Size
}

class Chair implements IChair {
    type = Furniture.Chair
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