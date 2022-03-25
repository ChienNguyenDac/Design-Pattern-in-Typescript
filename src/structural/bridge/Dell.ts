import ICore from "./ICore"
import IPC from "./IPC"

class Dell implements IPC {
    private core: ICore

    constructor(core: ICore) {
        this.core = core
    }

    getTotalPrice(): number {
        return this.core.getPrice() * 10
    }
}

export default Dell