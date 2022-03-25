import IDispenser from "../IDispenser"

class Dispenser200 implements IDispenser {
    private successor: IDispenser | undefined
    numberValid: number = 0

    setNextSuccessor(successor: IDispenser): void {
        this.successor = successor    
    }

    handle(amount: number): void {
        if (amount >= 200) {
            this.numberValid = Math.floor(amount / 200)
            const remainder = amount % 200

            if (remainder !== 0)
                this.successor?.handle(remainder)
        } else {
            this.successor?.handle(amount)
        }
    }
}

export default Dispenser200