// A Game Board Singleton Class
class GameBoard {
    static instance: GameBoard
    private winner: string = ''

    public constructor() {
        if (GameBoard.instance) {
            return GameBoard.instance
        }
        GameBoard.instance = this
    }

    public setWinner(user: string): void {
        this.winner = user
    }

    public getWinner(): string {
        return this.winner
    }
}

export default GameBoard