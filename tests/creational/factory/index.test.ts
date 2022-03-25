import { expect } from "chai"
import Size from "../../../src/creational/factory/Size"
import ChairFactory from "../../../src/creational/factory/ChairFactory"

describe('Test factory pattern', () => {
    it('creat chair test', () => {
        const smallChair = ChairFactory.createChair('smallChair')
        let expectSize: Size = {
            height: 50,
            width: 50,
            weight: 50
        }
        expect(smallChair.getSize()).to.deep.equal(expectSize)

        const mediumChair = ChairFactory.createChair('mediumChair')
        expectSize = {
            height: 100,
            width: 100,
            weight: 100
        }
        expect(mediumChair.getSize()).to.deep.equal(expectSize)
    })
})