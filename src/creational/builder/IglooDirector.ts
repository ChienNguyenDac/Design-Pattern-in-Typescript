import House from "./house/House"
import HouseBuilder from "./house/HouseBuilder"

class IglooDirector {
    static construct(): House {
        return new HouseBuilder()
                .setBuildingType('Igloo')
                .setWallMaterial('Ice')
                .setNumberDoors(1)
                .getResult()
    }
}

export default IglooDirector