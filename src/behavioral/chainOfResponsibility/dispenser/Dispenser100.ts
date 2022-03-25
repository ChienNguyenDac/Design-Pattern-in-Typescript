import IDispenser from "../IDispenser"

class Dispenser100 implements IDispenser {
    private successor: IDispenser | undefined
    numberValid: number = 0

    setNextSuccessor(successor: IDispenser): void {
        this.successor = successor    
    }

    handle(amount: number): void {
        if (amount >= 100) {
            this.numberValid = Math.floor(amount / 100)
            const remainder = amount % 100

            if (remainder !== 0)
                this.successor?.handle(remainder)
        } else {
            this.successor?.handle(amount)
        }
    }
}

export default Dispenser100