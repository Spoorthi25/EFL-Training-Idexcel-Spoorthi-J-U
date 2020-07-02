
/*Function Expression*/
   /*To find area of triangle*/

var triangle=function(side1,side2,side3)
{
    var p=(side1+side2+side3)/2;
var a=Math.sqrt(p*(p-side1)*(p-side2)*(p-side3));
    return a;

}
console.log(triangle(10,9,9));

/*if else if condition*/
var triangle=function(a,b,c)
{
    if(((a+b)>c)&&((b+c)>a)&&((c+a)>b))
    {
        if((a==b) && (b==c))
        console.log("equivaent triangle");
        else{
            if((a==b)||(b==c)||(c==a))
            console.log("isosceles triangle");
            else
            console.log("scalene triangle");
        }
         p=(a+b+c)/2;
         area=Math.sqrt(p*(p-a)*(p-b)*(p-c));
        return area;
        console.log("area of triangle");
    }
    else
    console.log("triangle is not possible");
}
console.log(triangle(10,9,9));

/*Function Expression*/
/*To find area of reactangle*/

var reactArea=function(length,breadth)
{
    var res=length*breadth;
return res;
}

var reactangle=reactArea(3,4)

console.log(reactangle);




/*Named function*/

var days=["mon","tues","wed","thur","fri","sat","sun"] 
function printDays(){
console.log("inside the printDays()",days);
}
console.log(printDays());

/*switch condition*/
var days;
   switch (days) {
     case 0:
           console.log("Sunday");
           break;
     case 1:
           console.log("Monday");
           break;
     case 2:
           console.log("Tuesday");
           break;
     case 3:
           console.log("Wednesday");
           break;
     case 4:
           console.log("Thursday");
           break;
     case 5:
           console.log("Friday");
           break;
     case 6:
           console.log("Saturday");
           break;
   
    default:
            console.log("invalid option");
           break;
   }


/*Arrow Function*/

/*To find absolute value*/
/*if else condition*/
var absValue=(number)=>
{
   if(number<0)
   {
       return -number; 
   }else{
   return number;
   }
}
console.log(absValue(-10));

/*using if condition*/

  var absValue=true;
     if(10<0){
         console.log("condition is true");
     }
  

/*Arrow function*/
/* To find product of two numbers*/
var product=(num1=5,num2=2)=>{
    var result=num1*num2;
    return result;
}
var r=product();
console.log(r);




/*IIFE*/
/*to find greatest number*/
 var first=1;
 var second=2;
 var greatest=(function(a,b){
     var ans;
    a>b ? ans=["a",a]:ans=["b",b];
     return ans;
 })(first,second);
 console.log(greatest);

/* using if else condition*/
 var first=1;
 var second=2;
 var greatest=(function(a,b){
     var ans;
    if( a>b)
    {
        console.log("a",a);
    }else{
        console.log("b",b);
    }
     return ans;
 })(first,second);
 console.log(greatest);


/*to display a number*/
var num=10;
(function display(num)
{
    console.log(10,num);
})("num")

/* if condition*/
var num=10;
(function display(num){
    if(num<=10){
        console.log("display num");
    }
})("num")
