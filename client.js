//comment
/*
Jargon:
. --> period, dot
() --> parathesis --> parans
[]--> brackets, square brackets, square braces
{} --> curly braces, curly brackets, curlies, braces
< --> less than, bird, angle brackets
> --> greater than, gator, angle brackets
/ --> whack, slash, forward slash
\ --> backslash, backwhack
! --> exclamation, not, popsicle --> not is most widely used
# --> pound, hashtage, octothorpe, number, hash
* --> star, asterisk, multiplication sign, times, splat
|| --> pipes, or
&& --> and, ampersand
$ --> bling, dollar sign, cash
NaN --> not a number, bread
*/

/*
variables

// declare with let or const
// make a name, // x
// assign operator
//value
let x = 1;

camelCase
kebab-case
snake_case
PascalCase
SCREAMING_SNAKE_CASE

let fistName = 'chris';

name variables nouns and funtions verbs

## data types
boolean true false
string '' "" ``
number 12
object {}
array []
undefined --> empty
NaN --> is actually a number
null --> empty on purpose

*/

/*
Expressions:
a valid set of literals, variables,
expressions that evaluate to a single value

let age = 25;
age = age + 1
age += 1;
age++;
all three expressions add 1 to age

age == 26; ==> false --> evaluates an expression

+ --> addition, concat
1 + 1 => 2
'1' + 1 => '11'

'10' - 5 => 5
'10' * 2 => 20
'10' / 3 => 3.333333

'ten' * 3 => NaN

// FALSE AKWARD STUFF
NaN --> not a legal number
undefined --> empty value
null --> empty on purpose
not defined --> ERROR - couldn't find the variable. Usually hapens when you
//                      forget to declare a variable but you try to use it.

*/

/*
Conditionals:

if(Expression is truthy) {
  //run this code
  //perform some logic
} else {
  //do something else
}


Comparison Operators:

 == compares value ex - 9 == '9' => true

 === compare value and datatype ex - 9 === '9' => false vs 9 === 9 => true

!=    9 != '9' => false

!==   9 !== '9' => true

>
<
>=
<=

*/


/*

Loops:
repeat until we determine that we should stop


(init; stop expression; after iteration)
for(let i = 0; i < 3; i++) {
  console.log(i);
}

const hats = ['beanie', 'fedora', 'sombrero', 'cowboy'];
//write a loop to print each hat in the console
for(let i = 0; i < hats.length; i++) {
  console.log(hats[i]);
}

// same loop but as a for of loop

for(let hat of hats){
  console.log(hat);
}

while loops, used less often in javascript
let thing = true
while (expression is true) {
  do things
  if(something) {
  thing = false
}
}
*/

/*
Functions:
pure function - input => process => output **always behaves the same way


x => x*2 => return

function doubleIt(x) {
  let double = x * 2;
  return double;
}

let newNumber = doubleIt(5);

newNumber will become 10

** if you forget to return a function, the result is undefined
** if the function doesn't have an argument, you will get 'not defined' error
** if you forget to pass in a value, NaN

let doubleIt = function(x) {
  let double = x * 2;
  return double;
}// does same thing as funtion above but is also an expression
 ** if you see a function without a name, it is an anonymous function and it cant be called


non-pure functions: ** does not behave the same every time it is called

function removeHat() {
  return hats.pop();
}

this function will not behave the same every time you call it
*/

/*

Methods:
a function that is built into something. ex the pop method --> hats.pop();

string methods - built into every string ex .length property
array methods - built into every array ex
.pop() --> removes last item in array
.push(item) --> ad new item to back of array
.unshift(item) --> add new item in front
.shift() --> remove first item item, return to you













*/
