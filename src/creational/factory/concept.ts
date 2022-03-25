// The Factory Concept

interface IProduct {
    name: string
}

class ConcreteProduct implements IProduct {
    name = ''
}

class ConcreteProduct1 extends ConcreteProduct {
    constructor() {
        super()
        this.name = 'ConcreteProduct1'
    }
}

class ConcreteProduct2 extends ConcreteProduct {
    constructor() {
        super()
        this.name = 'ConcreteProduct2'
    }
}

class ConcreteProduct3 extends ConcreteProduct {
    constructor() {
        super()
        this.name = 'ConcreteProduct3'
    }
}

class ProductCreator {
    static createProduct(property: 1 | 2 | 3 | any) {
        if (property === 1) {
            return new ConcreteProduct1()
        } else if (property === 2) {
            return new ConcreteProduct2()
        } else if (property === 3) {
            return new ConcreteProduct3()
        } else {
            throw new Error('Property not match.')
        }
    }
}

// The client
try {
    const product = ProductCreator.createProduct(1)
    console.log(product.name)

    const productError = ProductCreator.createProduct(45)
} catch (error) {
    console.log(error)    
}
