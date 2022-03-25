import { expect } from "chai"
import ATMDispenserChain, { Money } from "../../../src/behavioral/chainOfResponsibility/ATMDispenserChain"

describe('Chain Of Responsibility Pattern', () => {
    it('Test money return correctly.', () => {
        const ATM = new ATMDispenserChain()
        const amount = 1800

        ATM.chain1.handle(amount)
        let expectedMoney: Money = {
            bill500: 3,
            bill200: 1,
            bill100: 1,
            bill50: 0
        }

        expect(ATM.getResult()).to.deep.equal(expectedMoney)
    })
})