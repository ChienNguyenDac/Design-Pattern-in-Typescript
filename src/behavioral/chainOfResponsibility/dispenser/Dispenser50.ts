import IDispenser from "../IDispenser"

class Dispenser50 implements IDispenser {
    private successor: IDispenser | undefined
    numberValid: number = 0

    setNextSuccessor(successor: IDispenser): void {
        this.successor = successor    
    }

    handle(amount: number): void {
        if (amount >= 50) {
            this.numberValid = Math.floor(amount / 50)
            const remainder = amount % 50

            if (remainder !== 0)
                this.successor?.handle(remainder)
        } else {
            this.successor?.handle(amount)
        }
    }
}

export default Dispenser50