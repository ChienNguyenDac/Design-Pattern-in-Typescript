export interface ICustomer {
    setFirstName(firstName: string): void
    setLastName(lastName: string): void
    getFirstName(): string
    getLastName(): string
}

class Customer implements ICustomer {
    private firstName = ''
    private lastName = ''

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

export default Customer