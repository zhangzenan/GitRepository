import { sayHello } from "./greet";

function showHello(divName:string,name:string){
    // const elt=document.getElementById(divName);
    // elt.innerTxt=sayHello(name);
    console.log(name);
}

showHello("greeting","TypeScript");
