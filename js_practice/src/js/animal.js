export class Animal {
    constructor(type,legs){
        this.type = type;
        this.legs = legs;
    }

    get metaData(){
        return `Type: ${this.type} , legs: ${this.legs}`
    }
}