import BigChair from "./BigChair"
import { IChair } from "./Chair"
import MediumChair from "./MediumChair"
import SmallChair from "./SmallChair"

class ChairFactory {
    static createChair(chair: 'bigChair' | 'mediumChair' | 'smallChair'): IChair {
        if (chair === 'bigChair') {
            return new BigChair()
        } else if (chair === 'mediumChair') {
            return new MediumChair()
        } else {
            return new SmallChair()
        }
    }
}

export default ChairFactory