import House from "./House"

interface IHouseBuilder {
    house: House
    setBuildingType(buildingType: string): this
    setWallMaterial(wallMaterial: string): this
    setNumberWindows(windows: number): this
    setNumberDoors(doors: number): this
    getResult(): House
}

class HouseBuilder implements IHouseBuilder{
    house: House

    constructor() {
        this.house = new House()
    }

    setBuildingType(buildingType: string): this {
        this.house.buildingType = buildingType
        return this
    }

    setWallMaterial(wallMaterial: string): this {
        this.house.wallMaterial = wallMaterial
        return this
    }

    setNumberDoors(doors: number): this {
        this.house.doors = doors
        return this
    }

    setNumberWindows(windows: number): this {
        this.house.windows = windows
        return this
    }

    getResult(): House {
        return this.house
    }
}

export default HouseBuilder