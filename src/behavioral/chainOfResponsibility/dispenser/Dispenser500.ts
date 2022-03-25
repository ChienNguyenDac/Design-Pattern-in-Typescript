import IDispenser from "../IDispenser"

class Dispenser500 implements IDispenser {
    private successor: IDispenser | undefined
    numberValid: number = 0

    setNextSuccessor(successor: IDispenser): void {
        this.successor = successor    
    }

    handle(amount: number): void {
        if (amount >= 500) {
            this.numberValid = Math.floor(amount / 500)
            const remainder = amount % 500

            if (remainder !== 0)
                this.successor?.handle(remainder)
        } else {
            this.successor?.handle(amount)
        }
    }
}

export default Dispenser500