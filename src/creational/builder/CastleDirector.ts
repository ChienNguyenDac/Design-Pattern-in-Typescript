import House from "./house/House"
import HouseBuilder from "./house/HouseBuilder"

class CastleDirector {
    static construct(): House {
        return new HouseBuilder()
                .setBuildingType('Castle')
                .setWallMaterial('SandStone')
                .setNumberDoors(100)
                .setNumberWindows(200)
                .getResult()
    }
}

export default CastleDirector