import BigChair from "./chair/BigChair"
import { IChair } from "./Chair"
import MediumChair from "./chair/MediumChair"
import SmallChair from "./SmallChair"

class ChairFactory {
    static createChair(chair: string): IChair {
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