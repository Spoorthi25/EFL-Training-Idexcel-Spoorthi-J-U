/* 1.Create a function that takes an integer and returns the factorial of that integer. That is, the integer multiplied by all positive lower integers.

Examples
factorial(3) ➞ 6

factorial(5) ➞ 120

factorial(13) ➞ 6227020800*/
function factorial(int){
    if(int==1){
        return int;
    }else{
        return int*factorial(int-1);
    }
}


/*2.Absolute Sum
Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.

Examples
getAbsSum([2, -1, 4, 8, 10]) ➞ 25

getAbsSum([-3, -4, -10, -2, -3]) ➞ 22

getAbsSum([2, 4, 6, 8, 10]) ➞ 30

getAbsSum([-1]) ➞ 1*/

function getAbsSum(arr) {
	var sum=0;
	for(var i=0;i<arr.length;i++){
		sum+=Math.abs(arr[i]);
	}
    return sum

/*3 Sort Numbers in Ascending Order
Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest).

Sort numbers array in ascending order.
If the function's argument is null, an empty array, or undefined; return an empty array.
Return a new array of sorted numbers.
Examples
sortNumsAscending([1, 2, 10, 50, 5]) ➞ [1, 2, 5, 10, 50]

sortNumsAscending([80, 29, 4, -95, -24, 85]) ➞ [-95, -24, 4, 29, 80, 85]

sortNumsAscending(null) ➞ []
sortNumsAscending([]) ➞ []  
*/

          function sortNumsAscending(arr) {
	if(arr === null || arr.length == 0)
		return [];
	return arr.sort((a,b)=>a-b);
           }


/*4 Number to Reversed Array
Create a function that takes a number and returns an array with the digits of the number in reverse order.

Examples
reverseArr(1485979) ➞ [9, 7, 9, 5, 8, 4, 1]

reverseArr(623478) ➞ [8, 7, 4, 3, 2, 6]

reverseArr(12345) ➞ [5, 4, 3, 2, 1]*/
function reverseArr(num) {
	return String(num).split("").reverse().map(Number)
}           

/*5 Largest Swap
Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.

To illustrate:

largestSwap(27) ➞ false

largestSwap(43) ➞ true
If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27. On the other hand, swapping 43 gives us 34, and 43 > 34.

Examples
largestSwap(14) ➞ false

largestSwap(53) ➞ true

largestSwap(99) ➞ true*/
         function largestSwap(num) {
	           return num/10>=num%10;
            }

/*6 Is it Time for Milk and Cookies?
Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function
 that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. 
 Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.

Examples
timeForMilkAndCookies(new Date(2013, 11, 24)) ➞ true

timeForMilkAndCookies(new Date(2013, 0, 23)) ➞ false

timeForMilkAndCookies(new Date(3000, 11, 24)) ➞ true*/
function timeForMilkAndCookies(date) {
	var day=date.getDate();
	var month=date.getMonth();
	
	if(day==24&&month==11){
		return true
	}else{
		return false
	}
}            
 
/*7 Filter out Strings from an Array
Create a function that takes an array of non-negative integers and strings and return a new array without the strings.

Examples
filterArray([1, 2, "a", "b"]) ➞ [1, 2]

filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]

filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]*/
function filterArray(arr) {
    var returnArr=[];
for(var i=0;i<arr.length;i++){
    if(typeof arr[i] === "number"){
        returnArr.push(arr[i]);
    }
}
return returnArr;
}

/*8.Is the Number a Prime?
Create a function that returns true if a number is prime and false if it's not. A prime number is any 
positive integer that is evenly divisible by only two divisors: 1 and itself. The first ten prime numbers
 are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.

Examples
isPrime(7) ➞ true

isPrime(9) ➞ false

isPrime(10) ➞ false*/
function isPrime(num) {
	for(var i=2;i<num;i++)
		if(num%i===0)
			return false;
	return true;
}
       
/*9.Recursion: Factorials
Write a function that calculates the factorial of a number recursively.

Examples
factorial(5) ➞ 120

factorial(3) ➞ 6

factorial(1) ➞ 1

factorial(0) ➞ 1*/
function factorial(n) {
	if(n>1){
		return n*factorial(n-1);
	}
	return 1;
}

/*10.Adding Numbers in a String
Given a string of numbers separated by a comma and space, return the total of all the numbers.

Examples
addNums("2, 5, 1, 8, 4") ➞ 20

addNums("1, 2, 3, 4, 5, 6, 7") ➞ 28

addNums("10") ➞ 10*/
function addNums(nums) {
	str=nums.split(',')
	var result=0;
	for(var i=0;i<str.length;i++){
		result=result+Number(str[i]);
	}
	return result;
}
/*Medium*/


/*1.Basic Calculator
Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with
 the given numbers.

Examples
calculator(2, "+", 2) ➞ 4

calculator(2, "*", 2) ➞ 4

calculator(4, "/", 2) ➞ 2*/
function calculator(num1, operator, num2) {
	if(operator == '+')
		return num1+num2;
	if(operator == '-')
		return num1-num2;
	if(operator == '*')
		return num1*num2;
	if(operator == '/' && num2!=0)
		return num1/num2;
	else return "cant divide by 0"
}


/*2.How Much is True?
Create a function which returns the number of true values there are in an array.

Examples
countTrue([true, false, false, true, false]) ➞ 2

countTrue([false, false, false, false]) ➞ 0

countTrue([]) ➞ 0*/
function countTrue(arr) {
    var count=0;
   for(var i=0;i<arr.length;i++){
       if(arr[i] === true){
           count++;
       }
   }
   return count;
}


/*3.Array of Multiples
Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of
 num up to length.

Examples
arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]*/

function arrayOfMultiples(num, length) {
	var result=[]
	for(var i=1;i<=length;i++){
		result.push(num*i)
	}
	return result
}

/*4 Remove Repeated Letters
Try to remove any repeated charcters in a word that will be passed to our function. Any character could be 
used, even special ones and numbers.

Examples
unrepeated("hello") ➞ "helo"

unrepeated("aaaaa") ➞ "a"

unrepeated("WWE!!!") ➞ "WE!"

unrepeated("call 911") ➞ "cal 91"*/
function unrepeated(str) {
	var arr=[];
	for(var i=0;i<str.length;i++){
		if(!arr.includes(str[i])){
			arr.push(str[i]);
		}
	}
	return arr.join("");
}

/*5.Get the Date
Write a function that, given a date (in the format MM/DD/YYYY), returns the day of the week as a string. 
Each day name must be one of the following strings: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", 
"Friday", or "Saturday".

To illustrate, the day of the week for "12/07/2016" is "Wednesday".

Examples
getDay("12/07/2016") ➞ "Wednesday"

getDay("09/04/2016") ➞ "Sunday"

getDay("12/08/2011") ➞ "Thursday" */

function getDay(day) {
	var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
	var date=new Date(day);
	return days[date.getDay()];

}

/*6 Days in a Month
Create a function that takes the month and year (as integers) and returns the number of days in that month.

Examples
days(2, 2018) ➞ 28

days(4, 654) ➞ 30

days(2, 200) ➞ 28

days(2, 1000) ➞ 28*/
         function days(month, year) {
    return
     new Date(year,month,0).getDate()
      }

/*7 ReverseAndNot
Write a function that takes an integer i and returns an integer with the integer backwards followed by 
the original integer.

To illustrate:

123
We reverse 123 to get 321 and then add 123 to the end, resulting in 321123.

Examples
reverseAndNot(123) ➞ 321123

reverseAndNot(152) ➞ 251152

reverseAndNot(123456789) ➞ 987654321123456789*/
function reverseAndNot(i) {
	var reverse=i.toString().split("").reverse().join("");
	return +(reverse + i);
}

/*8 Rock, Paper, Scissors
Create a function which takes two strings (p1 and p2 ⁠— which represent player 1 and 2) as arguments
 and returns a string stating the winner in a game of Rock, Paper, Scissors.

Each argument will contain a single string: "Rock", "Paper", or "Scissors". Return the winner according
 to the following rules:

Rock beats Scissors
Scissors beats Paper
Paper beats Rock
If p1 wins, return the string "The winner is p1". If p2 wins, return the string "The winner is p2"
 and if p1 and p2 are the same, return "It's a draw".

Examples
rps("Rock", "Paper") ➞ "The winner is p2"

rps("Scissors", "Paper") ➞ "The winner is p1"

rps("Paper", "Paper") ➞ "It's a draw"*/
function rps(p1, p2) {
	if(p1 === p2){
		return "its a draw";
	}
	if(p1 === 'Rock'){
		if(p2==='Paper'){
			return 'The winner is p2';
		}
	}
	if(p1 === 'Paper'){
		if(p2==='Scissors'){
			return 'The winner is p2';
}
	}
	if(p1 === 'Scissors'){
		if(p2==='Rock'){
			return 'The winner is p2';
		}
	}
	return 'The winner is p1';
}

/*9 Multiplying Numbers in a String
Given a string of numbers separated by a comma and space, return the product of the numbers.

Examples
multiplyNums("2, 3") ➞ 6

multiplyNums("1, 2, 3, 4") ➞ 24

multiplyNums("54, 75, 453, 0") ➞ 0

multiplyNums("10, -2") ➞ -20*/
function multiplyNums(nums) {
	var arr=nums.split(",");
	var sum=1;
	for(var element of arr){
        sum*=Number(element);
    }
    return sum;
}

/*10. Factor Chain
A factor chain is an array where each previous element is a factor of the next consecutive element.
 The following is a factor chain:

[3, 6, 12, 36]

// 3 is a factor of 6
// 6 is a factor of 12
// 12 is a factor of 36
Create a function that determines whether or not an array is a factor chain.

Examples
factorChain([1, 2, 4, 8, 16, 32]) ➞ true

factorChain([1, 1, 1, 1, 1, 1]) ➞ true

factorChain([2, 4, 6, 7, 12]) ➞ false

factorChain([10, 1]) ➞ false*/
       function factorChain(arr) {
	for(var i=0;i<arr.length-1;i++){
		if((arr[i+1]%arr[i]))
			return false
	}
	return true
}
/*Hard*/
/*1 How Many "Prime Numbers" Are There?
Create a function that finds how many prime numbers there are, up to the given integer.

Examples
primeNumbers(10) ➞ 4
// 2, 3, 5 and 7

primeNumbers(20) ➞ 8
// 2, 3, 5, 7, 11, 13, 17 and 19

primeNumbers(30) ➞ 10
// 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29*/
      function primeNumbers(num){
          primeValue=1
          if(num<1){
              primeValue = 0
          }else if(num ===1){
              primeValue=1
          }else if(num ===2){
              primeValue=2
          }else{
              for(i=3;i<num;i++){
                  for(j=2;j<i;j++){
                      if(i%j===0)
                      break
                      else if(j===i-1){
                          primeValue+=1
                      }
                  }
              }
          }
          return primeValue
      }
 /*2. Seven Boom!
Create a function that takes an array of numbers and return "Boom!" if the number 7 appears in the array.
 Otherwise, return "there is no 7 in the array".

Examples
sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"

sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"

sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"*/
function sevenBoom(arr) {
	var new_arr=arr.join("")
	if(new_arr.includes(7)){
		return "Boom!";
	}else{
		return "there is no 7 in the array";
	}
}     

/*3 Basic Arithmetic Operations on a String Number
Create a function to perform basic arithmetic operations that includes addition, subtraction, multiplication and 
division on a string number (e.g. "12 + 24" or "23 - 21" or "12 / 12" or "12 * 21").

Here, we have 1 followed by a space, operator followed by another space and 2. For the challenge, we are going to
 have only two numbers between 1 valid operator. The return value should be a number.

eval() is not allowed. In case of division, whenever the second number equals "0" return -1.

For example:

"15 / 0"  ➞ -1
Examples
arithmeticOperation("12 + 12") ➞ 24 // 12 + 12 = 24

arithmeticOperation("12 - 12") ➞ 24 // 12 - 12 = 0

arithmeticOperation("12 * 12") ➞ 144 // 12 * 12 = 144

arithmeticOperation("12 / 0") ➞ -1 // 12 / 0 = -1*/
function arithmeticOperation(n) {
    var array=n.split("")
            var a=Number(array[0])
            var c=Number(array[2])
            if(array[1]=='+'){
                return a+c
            }else if(array[1]=='-'){
                return a-c
            }else if(array[1]=='*'){
                return a*c
            }else if(array[1]=='/' &&c!==0){
                return a/c
}else if(array[1]=='/' &&c===0){
                return -1
}
}
/*4 How Many Days Between Two Dates
Create a function that takes two dates and returns the number of days between the first and second date.

Examples
getDays(
  new Date("June 14, 2019"),
  new Date("June 20, 2019")
) ➞ 6

getDays(
  new Date("December 29, 2018"),
  new Date("January 1, 2019")
) ➞ 3

getDays(
  new Date("July 20, 2019"),
  new Date("July 30, 2019")
) ➞ 10*/
  function getDays(date1, date2) {
	return new Date(date2-date1).getDate()-1
   }

 /*5 Combinations
Create a function that takes a variable number of groups of items, and returns the number of ways the items can be a
rranged, with one item from each group. Order does not matter.

Examples
combinations(2, 3) ➞ 6

combinations(3, 7, 4) ➞ 84

combinations(2, 3, 4, 5) ➞ 120*/
function combinations(...items) {
	let result = items[0];
	for (var i = 1; i < items.length; i++) {
		if (items[i] !== 0) {
			result *= items[i];
		}
	}
	return result;
}
}