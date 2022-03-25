export interface IUser {
    setName(name: string): void
    getName(): string
}

class User implements IUser {
    private name = ''

    setName(name: string): void {
        this.name = name
    }

    getName(): string {
        return this.name
    }
}

export default User