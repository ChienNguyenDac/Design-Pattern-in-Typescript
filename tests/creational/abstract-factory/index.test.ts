import { expect } from "chai"
import { Furniture, Size } from "../../../src/creational/abstract-factory/config"
import FurnitureFactory from "../../../src/creational/abstract-factory/FurnitureFactory"

describe('Abstract factory pattern', () => {
    it('Test chair factory', () => {
        const furniture = FurnitureFactory.createFurniture('SmallChair')
        expect(furniture?.type).to.equal(Furniture.Chair)
        
        const size: Size = {
            height: 50,
            width: 50,
            weight: 50
        }
        expect(furniture?.getSize()).to.deep.equal(size)
    })
    it('Test table factory', () => {
        const furniture = FurnitureFactory.createFurniture('SmallTable')
        expect(furniture?.type).to.equal(Furniture.Table)

        const size: Size = {
            height: 100,
            width: 100,
            weight: 100
        }
        expect(furniture?.getSize()).to.deep.equal(size)
    })
})