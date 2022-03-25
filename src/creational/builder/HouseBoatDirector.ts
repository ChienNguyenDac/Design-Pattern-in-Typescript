import House from "./house/House"
import HouseBuilder from "./house/HouseBuilder"

class HouseBoatDirector {
    static construct(): House {
        return new HouseBuilder()
                .setBuildingType('House Boat')
                .setWallMaterial('Wood')
                .setNumberDoors(6)
                .setNumberWindows(8)
                .getResult()
    }
}

export default HouseBoatDirector