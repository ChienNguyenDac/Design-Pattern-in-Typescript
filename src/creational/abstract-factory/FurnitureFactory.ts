import { IChair } from "./Chair"
import ChairFactory from "./ChairFactory"
import { ITable } from "./Table"
import TableFactory from "./TableFactory"

interface IFurniture extends IChair, ITable {}

class FurnitureFactory {
    static createFurniture(furniture: string): IFurniture | undefined {
        try {
            if (['SmallChair', 'MediumChair', 'BigChair'].indexOf(furniture) > -1) {
                return ChairFactory.createChair(furniture)
            }
            if (['SmallTable', 'BigTable'].indexOf(furniture) > -1) {
                return TableFactory.createTable(furniture)
            }
            throw new Error('No factory found.')
        } catch (error) {
            console.log(error)
        }
    } 
}

export default FurnitureFactory