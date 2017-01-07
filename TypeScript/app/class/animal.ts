/**
 * Animal
 */
class Animal {
    name:string;
    constructor(theName:string) {
        this.name=theName;        
    }
    move(distanceInMeters:number=0){
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal{
    constructor(name:string){
        supper(name);
    }
    move(distanceInMeters=5){
        console.log("Slithering...");
        supper.move(distanceInMeters);
    }
}

class Horse extends Animal{
    constructor(name:string){
        supper(name);
    }
    move(distanceInMeters=45){
        console.log("Galloping...");
        supper.move(distanceInMeters);
    }
}

let sam=new Snake("Sammy the Python");
let tom:Animal=new Horse("Tommy the Palomino");

sam.move();
tom.move(34);