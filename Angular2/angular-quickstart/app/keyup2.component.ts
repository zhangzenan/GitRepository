import{Component} from '@angular/core';

@Component({
selector:'key-up2',
template:`
    <input #box (keyup)="onkey(box.value)">    
    <p>{{values}}</p>
    <input #boxEnter (keyup.enter)="update(boxEnter.value)" (blur)="update(boxEnter.value)">
    <p>{{enterValue}}</p>`
})

export class keyUpComponent_v2{
    values='';
    onkey(value:string){
        this.values+=value+'|';
    }
    //按键事件过滤（key.enter）
    enterValue='';
    onEnter(value:string){
        this.enterValue=value;
    }
    //失去焦点事件
    update(value:string){
        this.enterValue=value;
    }
}