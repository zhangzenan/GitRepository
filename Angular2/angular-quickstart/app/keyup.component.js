"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var keyUpComponent_v1 = (function () {
    function keyUpComponent_v1() {
        this.values = '';
    }
    // onkey(event:any){
    //     this.values+=event.target.value+'|';
    // }
    //$event的类型
    keyUpComponent_v1.prototype.onkey = function (event) {
        this.values += event.target.value + '|';
    };
    keyUpComponent_v1 = __decorate([
        core_1.Component({
            selector: 'keyUp-input',
            template: "\n    <input (keyup)=\"onkey($event)\">\n    <p>{{values}}</p>"
        }), 
        __metadata('design:paramtypes', [])
    ], keyUpComponent_v1);
    return keyUpComponent_v1;
}());
exports.keyUpComponent_v1 = keyUpComponent_v1;
//# sourceMappingURL=keyup.component.js.map