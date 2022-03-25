class House {
    buildingType: string = ''
    wallMaterial: string = ''
    windows: number = 0
    doors: number = 0

    construct(): string {
        return `This is a ${this.wallMaterial} ${this.buildingType} with ${this.doors} door(s) and ${this.windows} window(s).`
    }
}

export default House