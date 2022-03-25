export default interface IDispenser {
    numberValid: number
    setNextSuccessor(successor: IDispenser): void
    handle(amount: number): void
}