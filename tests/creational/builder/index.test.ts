import { expect } from "chai"
import CastleDirector from "../../../src/creational/builder/CastleDirector"
import HouseBoatDirector from "../../../src/creational/builder/HouseBoatDirector"
import IglooDirector from "../../../src/creational/builder/IglooDirector"

describe('Builder pattern', () => {
    it('Test Igloo Director', () => {
        const iglooHouse = IglooDirector.construct()
        expect(iglooHouse.buildingType).to.equal('Igloo')
        expect(iglooHouse.wallMaterial).to.equal('Ice')
        expect(iglooHouse.doors).to.equal(1)
        expect(iglooHouse.windows).to.equal(0)
    })

    it('Test Castle Director', () => {
        const castleHouse = CastleDirector.construct()
        expect(castleHouse.buildingType).to.equal('Castle')
        expect(castleHouse.wallMaterial).to.equal('SandStone')
        expect(castleHouse.doors).to.equal(100)
        expect(castleHouse.windows).to.equal(200)
    })

    it('Test House Boat Director', () => {
        const houseBoat = HouseBoatDirector.construct()
        expect(houseBoat.buildingType).to.equal('House Boat')
        expect(houseBoat.wallMaterial).to.equal('Wood')
        expect(houseBoat.doors).to.equal(6)
        expect(houseBoat.windows).to.equal(8)
    })
})