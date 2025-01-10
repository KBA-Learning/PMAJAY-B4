
const lodash=require('lodash')
const sum=require('./addition.js')

console.log("Hello World");
let a='Node Js'
console.log("Hello",`${a}`);
if(a==='Node Js')
{
    console.log("JS running on Node Js Environment");
}
for(i=0; i<5;i++)
{
    b=i+1;
    console.log(b);
    
}
let array=[1,2,3,4,5]
console.log(lodash.reverse(array));
console.log(lodash.capitalize('hello world'));
console.log(sum.add(3,5));



