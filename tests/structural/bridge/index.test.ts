import { expect } from "chai"
import Asus from "../../../src/structural/bridge/Asus"
import Dell from "../../../src/structural/bridge/Dell"
import Core1 from "../../../src/structural/bridge/implementer/Core1"
import Core2 from "../../../src/structural/bridge/implementer/Core2"

describe('Bridge Pattern', () => {
    it('Test implementer for Dell', () => {
        const DellWithCore1 = new Dell(new Core1())
        const DellWithCore2 = new Dell(new Core2())
        expect(DellWithCore1.getTotalPrice()).to.equal(300 * 10)
        expect(DellWithCore2.getTotalPrice()).to.equal(500 * 10)
    })

    it('Test implementer for Asus', () => {
        const AsusWithCore1 = new Asus(new Core1())
        const AsusWithCore2 = new Asus(new Core2())
        expect(AsusWithCore1.getTotalPrice()).to.equal(300 * 20)
        expect(AsusWithCore2.getTotalPrice()).to.equal(500 * 20)
    })
})