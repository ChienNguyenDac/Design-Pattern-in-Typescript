import { expect } from "chai"
import Bank from "../../../src/structural/facade/Bank"
import InternetBanking, { CheckoutStatus } from "../../../src/structural/facade/InternetBanking"

describe('Facade Pattern', () => {
    const OCB = new Bank('OCB')
    const myEBanking = new InternetBanking(OCB, 1000)

    it('Test checkout success.', () => {
        const response = myEBanking.checkout(500, 'a159')
        expect(response).to.equal(CheckoutStatus.Success)
        expect(myEBanking.balance).to.equal(500)
    })

    it('Test checkout failure with amount > balance.', () => {
        const response = myEBanking.checkout(1000, 'a159')     
        expect(response).to.equal(CheckoutStatus.Failure)
        expect(myEBanking.balance).to.equal(500)
    })

    it('Test checkout failure with token not valid.', () => {
        const response = myEBanking.checkout(300, 'a159a')
        expect(response).to.equal(CheckoutStatus.Failure)
        expect(myEBanking.balance).to.equal(500)
    })
})