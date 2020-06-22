/*Function Expression*/
var product=function(num1,num2){
    var res=num1*num2;
return res;
}
var multiply=product(7,7);
console.log(multiply);

/*Named function*/

var name= "spoorthi" 
var age=22
function printName(){
console.log("inside the printName()",name,age);
}
console.log(printName());

/*Arrow function*/
var printS=(a,b)=>{
    console.log("inside arrow function",a+b);
    };
printS(10,20)

/*Arrow function*/
var sum=() =>{
    var a=20;
    var b=60;
    return a+b;
}
console.log(sum());


/*IIFE*/
(function(msg)
{
    console.log("message",msg);
})("hello")

/*IIFE*/
var name="spoorthi";
(function display(name)
{
    console.log("spoorthi",name);
})("name")


