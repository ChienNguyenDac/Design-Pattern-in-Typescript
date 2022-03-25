import GameBoard from "./GameBoard"

export default interface IGame {
    gameBoard: GameBoard
    setWinner(user: string): void
}