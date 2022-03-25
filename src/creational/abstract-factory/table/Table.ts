import { Size, Furniture }from "./config"

export interface ITable {
    type: string
    height: number
    width: number
    weight: number
    getSize(): Size
}

class Table implements ITable {
    type = Furniture.Table
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

export default Table