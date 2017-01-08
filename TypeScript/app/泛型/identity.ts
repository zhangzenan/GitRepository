// function identity<T>(arg:T):T {
//     return arg;
// }

// let output=identity<string>("myString");
// console.log(output);
// let output1=identity("myString1");
// console.log(output1);

// function loggingIdentity<T>(arg:T[]):T[]{
//     console.log(arg.length);
//     return arg;
// }

// function loggingIdentity<T>(arg:Array<T>):Array<T>{
//     console.log(arg.length);
//     return arg;
// }

// let logging=loggingIdentity(["a","b"]);

//泛型类型
// function identity<T>(arg:T):T{
//     return arg;
// }

// let myIdentity:<T>(arg:T)=>T=identity;
// let output=myIdentity("aaa");
// console.log(output);

//泛型接口
// interface GenericIdentityFn{
//     <T>(arg:T):T;
// }

// function identity<T>(arg:T):T{
//     return arg;
// }

// let myIdentity:GenericIdentityFn=identity;
// console.log(myIdentity(1));

//泛型类
/**
 * GenericNumber<T>
 */
// class GenericNumber<T> {
//     zeroValue:T;
//     add:(x:t,y:T)=>T;
// }

// let myGenericNumber=new GenericNumber<number>();
// myGenericNumber.zeroValue=0;
// myGenericNumber.add=function(x,y){return x+y;};
// console.log(myGenericNumber.add(1,2));

//泛型约束
// interface Lengthwise {
//     length: number;
// }

// function loggingIdentity<T extends Lengthwise>(arg: T): T {
//     console.log(arg.length);  // Now we know it has a .length property, so no more error
//     return arg;
// }
// loggingIdentity({length: 10, value: 3});

//在泛型里使用类类型
// function create<T>(c: {new(): T; }): T {
//     return new c();
// }

// class BeeKeeper {
//     hasMask: boolean;
// }

// class ZooKeeper {
//     nametag: string;
// }

// class Animal {
//     numLegs: number;
// }

// class Bee extends Animal {
//     keeper: BeeKeeper;
// }

// class Lion extends Animal {
//     keeper: ZooKeeper;
// }

// function findKeeper<A extends Animal, K> (a: {new(): A;prototype: {keeper: K}}): K {

//     return a.prototype.keeper;
// }

// findKeeper(Lion).nametag;  // typechecks!
