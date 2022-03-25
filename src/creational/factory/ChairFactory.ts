import BigChair from "./chair/BigChair"
import { IChair } from "./chair/Chair"
import MediumChair from "./chair/MediumChair"
import SmallChair from "./chair/SmallChair"

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