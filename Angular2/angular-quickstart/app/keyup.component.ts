import{Component} from '@angular/core';

@Component({
selector:'keyUp-input',
template:`
    <input (keyup)="onkey($event)">
    <p>{{values}}</p>`
})

export class keyUpComponent_v1{
    values='';
    // onkey(event:any){
    //     this.values+=event.target.value+'|';
    // }
    //$event的类型
    onkey(event:keyboardEvent){
        this.values+=(<HTMLInputElement>event.target).value+'|';

    }
}