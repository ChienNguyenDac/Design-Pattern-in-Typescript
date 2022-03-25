import ICore from "./ICore"
import IPC from "./IPC"

class Asus implements IPC {
    private core: ICore

    constructor(core: ICore) {
        this.core = core
    }

    getTotalPrice(): number {
        return this.core.getPrice() * 20
    }
}

export default Asus