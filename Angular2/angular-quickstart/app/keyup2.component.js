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
var keyUpComponent_v2 = (function () {
    function keyUpComponent_v2() {
        this.values = '';
        //按键事件过滤（key.enter）
        this.enterValue = '';
    }
    keyUpComponent_v2.prototype.onkey = function (value) {
        this.values += value + '|';
    };
    keyUpComponent_v2.prototype.onEnter = function (value) {
        this.enterValue = value;
    };
    //失去焦点事件
    keyUpComponent_v2.prototype.update = function (value) {
        this.enterValue = value;
    };
    keyUpComponent_v2 = __decorate([
        core_1.Component({
            selector: 'key-up2',
            template: "\n    <input #box (keyup)=\"onkey(box.value)\">    \n    <p>{{values}}</p>\n    <input #boxEnter (keyup.enter)=\"update(boxEnter.value)\" (blur)=\"update(boxEnter.value)\">\n    <p>{{enterValue}}</p>"
        }), 
        __metadata('design:paramtypes', [])
    ], keyUpComponent_v2);
    return keyUpComponent_v2;
}());
exports.keyUpComponent_v2 = keyUpComponent_v2;
//# sourceMappingURL=keyup2.component.js.map