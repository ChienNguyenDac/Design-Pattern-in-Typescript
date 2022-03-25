interface IBank {
    name: string
    key: RegExp
    verifyToken(token: string): boolean
}

class Bank implements IBank {
    name: string
    key: RegExp

    constructor(name: string) {
        this.name = name
        this.key = new RegExp('159$')
    }

    verifyToken(token: string): boolean {
        return this.key.test(token)
    }
}

export default Bank