import GameBoard from "./GameBoard"
import IGame from "./IGame"

class SodokuGame implements IGame {
    gameBoard: GameBoard

    constructor() {
        this.gameBoard = new GameBoard()
    }

    setWinner(user: string): void {
        this.gameBoard.setWinner(user)
    }
}

export default SodokuGame