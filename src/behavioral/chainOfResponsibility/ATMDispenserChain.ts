import Dispenser100 from "./dispenser/Dispenser100"
import Dispenser200 from "./dispenser/Dispenser200"
import Dispenser50 from "./dispenser/Dispenser50"
import Dispenser500 from "./dispenser/Dispenser500"

export type Money = {
    bill50: number,
    bill100: number,
    bill200: number,
    bill500: number
}

interface IATMDispenserChain {
    chain1: Dispenser500
    chain2: Dispenser200
    chain3: Dispenser100
    chain4: Dispenser50
    getResult(): Money
}

class ATMDispenserChain implements IATMDispenserChain{
    chain1: Dispenser500
    chain2: Dispenser200
    chain3: Dispenser100
    chain4: Dispenser50

    constructor() {
        this.chain1 = new Dispenser500()
        this.chain2 = new Dispenser200()
        this.chain3 = new Dispenser100()
        this.chain4 = new Dispenser50()

        this.chain1.setNextSuccessor(this.chain2)
        this.chain2.setNextSuccessor(this.chain3)
        this.chain3.setNextSuccessor(this.chain4)
    }

    getResult(): Money {
        return {
            bill500: this.chain1.numberValid,
            bill200: this.chain2.numberValid,
            bill100: this.chain3.numberValid,
            bill50: this.chain4.numberValid
        }
    }
}

export default ATMDispenserChain