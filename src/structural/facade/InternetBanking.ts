import Bank from "./Bank"

export enum CheckoutStatus {
    Failure = 0,
    Success = 1
}

interface IInternetBanking {
    bank: Bank
    balance: number
    addMoney(amount: number): void
    checkout(amount: number, token: string): CheckoutStatus
}

class InternetBanking implements IInternetBanking {
    bank: Bank
    balance: number

    constructor(bank: Bank, balance: number) {
        this.bank = bank
        this.balance = balance
    }

    addMoney(amount: number): void {
        this.balance += amount
    }

    checkout(amount: number, token: string): CheckoutStatus {
        if (this.bank.verifyToken(token) && this.balance >= amount) {
            this.balance -= amount
            return CheckoutStatus.Success
        }

        return CheckoutStatus.Failure
    }
}

export default InternetBanking