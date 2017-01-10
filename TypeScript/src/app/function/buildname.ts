// function buildName(firstName:string,lastName?:string) {
//     if(lastName){
//         return firstName+" "+lastName;
//     }
//     else{
//         return firstName;
//     }    
// }

// let result1=buildName("Bob");
// let result2=buildName("Bob","Adams");
// let result3=buildName("Bob","Adams","aaaa");
// console.log(result3);

// function buildName1(firstName:string,...restofName:string[]){
//     console.log(restofName);
//     return firstName+" "+restofName.join(" ");
// }

// let employeeName=buildName1("Joseph", "Samuel", "Lucas", "MacKinzie");
// console.log(employeeName);

//顶级的非方法式调用会将 this视为window。 （注意：在严格模式下， this为undefined而不是window）。
// let deck={
//     suits:["hearts", "spades", "clubs", "diamonds"],
//     cards:Array(52),
//     createCardPicker:function(){
//         return function(){
//             let pickedCard=Math.floor(Math.random()*52);
//             let pickedSuit=Math.floor(pickedCard/13);
//             return {suit:this.suits[pickedSuit],card:pickedCard%13};
//         }
//     }
// }

// let cardPicker=deck.createCardPicker();
// let pickedCard=cardPicker();

// alert("Card:"+pickedCard.card+" of "+pickedCard.suit);

//箭头函数能保存函数创建时的 this值，而不是调用时的值：
// let deck={
//     suits:["hearts", "spades", "clubs", "diamonds"],
//     cards:Array(52),
//     createCardPicker:function(){
//         return ()=>{
//             let pickedCard=Math.floor(Math.random()*52);
//             let pickedSuit=Math.floor(pickedCard/13);
//             return {suit:this.suits[pickedSuit],card:pickedCard%13};
//         }
//     }
// }

// let cardPicker=deck.createCardPicker();
// let pickedCard=cardPicker();

// alert("Card:"+pickedCard.card+" of "+pickedCard.suit);

//this参数
// interface Card{
//     suit:string;
//     card:string;
// }

// interface Deck{
//     suits:string[];
//     cards:number[];
//     createCardPicker(this:Deck):()=>Card;
// }
// let deck:Deck={
//     suits:["hearts", "spades", "clubs", "diamonds"],
//     cards:Array(52),
//     createCardPicker:function(this:Deck){
//         return ()=>{
//             let pickedCard=Math.floor(Math.random()*52);
//             let pickedSuit=Math.floor(pickedCard/13);
//             return {suit:this.suits[pickedSuit],card:pickedCard%13};
//         }
//     }
// }

// let cardPicker=deck.createCardPicker();
// let pickedCard=cardPicker();
// alert("card: " + pickedCard.card + " of " + pickedCard.suit);

//重载
let suits=["hearts", "spades", "clubs", "diamonds"];

function pickedCard(x:{suit:string;card:number;}[]):number;
function pickedCard(x:number):{suit:string;card:number;};
function pickedCard(x):any{
    if(typeof x=="object"){
        let pickedCard=Math.floor(Math.random()*x.length);
        return pickedCard;
    }
    else if(typeof x=="number"){
        let pickedSuit=Math.floor(x/13);
        return {suit:suits[pickedSuit],card:x%13};
    }
}

let myDeck=[{suit:"diamonds",card:2},{suit:"spades",card:10},{suit:"hearts",card:4}];
let pickedCard1=myDeck[pickedCard(myDeck)];
//alert("card:"+pickedCard1.card+" of "+pickedCard1.suit);

let pickedCard2=pickedCard(15);
console.log(pickedCard2);
alert("card:"+pickedCard2.card+" of "+pickedCard2.suit);
