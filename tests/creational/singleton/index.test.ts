import { expect } from "chai"
import CaroGame from "../../../src/creational/singleton/CaroGame"
import SodokuGame from "../../../src/creational/singleton/SodokuGame"

describe('Single Pattern', () => {
    it('Test same memory object since gameboard is a singleton', () => {
        const user1: string = 'NDC'
        const user2: string = 'Chien'

        const caroGame = new CaroGame()
        caroGame.setWinner(user1)
        expect(caroGame.gameBoard.getWinner()).to.equal(user1)

        const sodokuGame = new SodokuGame()
        sodokuGame.setWinner(user2)
        expect(sodokuGame.gameBoard.getWinner()).to.equal(user2)
        expect(caroGame.gameBoard.getWinner()).to.equal(user2)
    })
})