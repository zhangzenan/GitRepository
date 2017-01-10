var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    };
    return Greeter;
}());
Greeter.standardGreeting = "Hello,there";
var greeter = new Greeter("world");
document.body.innerHTML = greeter.greet();
var greeter1;
greeter1 = new Greeter("aaa");
console.log(greeter1.greet());
var greeterMaker = Greeter;
greeterMaker.standardGreeting = "Hey there!";
//let greeter2:Greeter=new greeterMaker();
//console.log(greeter2.greet());
//# sourceMappingURL=greeter.js.map