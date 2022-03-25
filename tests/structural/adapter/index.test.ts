import { expect } from "chai"
import User from "../../../src/structural/adapter/User"
import UserToCustomerAdapter from "../../../src/structural/adapter/UserToCustomerAdapter"

describe('Adapter Pattern', () => {
    it('Test adapter', () => {
        const user = new User()
        user.setName('Nguyen Dac Chien')

        const userToCustomerAdapter = new UserToCustomerAdapter(user)
        expect(userToCustomerAdapter.getFirstName()).to.equal("Nguyen Dac")
        expect(userToCustomerAdapter.getLastName()).to.equal("Chien") 
    })
})