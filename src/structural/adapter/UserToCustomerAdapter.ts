import { ICustomer } from "./Customer"
import User from "./User"

class UserToCustomerAdapter implements ICustomer {
    private user: User
    private firstName: string
    private lastName: string

    constructor(user: User) {
        this.user = user

        let fullName = this.user.getName()
        let parts = fullName.split(" ")
    
        this.firstName = parts.splice(0, parts.length - 1).join(" ")
        this.lastName = parts[0]
    }

    setFirstName(firstName: string): void {
        this.firstName = firstName
    }

    setLastName(lastName: string): void {
        this.lastName = lastName
    }

    getFirstName(): string {
        return this.firstName
    }

    getLastName(): string {
        return this.lastName
    }
}

export default UserToCustomerAdapter