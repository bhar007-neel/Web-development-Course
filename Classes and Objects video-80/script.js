let obj = {
    a: 1,
    b: "Diya",
}

console.log(obj)

let animal = {
    eats: true
};
let rabbit = {
    jumps: true
};

rabbit._proto_ = animal; // sets rabbit as a prototpe= animal



class Animal {
    constructor(name) {
        this.name = name
        console.log("Object is crearted")
    }

    eats() {
        console.log("KAHA RHA HU")
    }
    jumps() {
        console.log("Kood rhA HU")
    }
}

class lion extends Animal {
    constructor(name) {
        super(name)
        console.log("Object is crearted and he is lion")

    }
    eats() {
        super.eats()
        console.log("KAHA RHA HU Roar")
    }
    
}


let a = new Animal("Bunny")
console.log(a)

let l = new lion("Sheera")
console.log(l)