# js-lectures
> js-lectrues are some key points on javascript
> these keypoints is just for my rememberance.
> I think sharing these might help some one else also. 



### Interview question 
When it comes to "interview test" questions, the subject of FizzBuzz often comes up, like write a function;
- which populates integer 1 to 100 , [you could generate an Array programatically]
where condition:
- if number divisible by 3 will print "fizz" 
- if number divisible by 5 will print "buzz"
- if number divisible by both 3 and 5 will printout "fizzbuzz"

so how to approach that vision.

```sh
const myFiller = Array
  .from(new Array(100).keys(),n => n+1)
  .map((elem, itm, arr)=>{
    var f = elem % 3 == 0, b = elem % 5 == 0;
    return (f ? b ? "fizzbuzz" : "fizz" : b ? "buzz" : elem);
  }
).map(elem => console.log ( elem ))

```
### Function in javascript
- self executing function or IIFE, Immediately-invoked function expression


```sh
(fuction(){
  console.log ('this is self execution function!');
  alert('hello');
})();

```
- ways of implementing IIFE
```sh
(function () { /* ... */ })(); 
(function () { /* ... */ }()); // Reccomended by Croockford
(() => { /* ... */ })();       // With ES6 arrow functions (though parentheses only allowed on outside)

```
- selfexecuting function expression does not require the closing parantheses, like :  
```sh
  var i = function(){ return 10; }();
  true && function(){ /* ... */ }();
  0, function(){ /* ... */ }();

```
- when passing variables 
```sh
(function(x, y){/* ... */})(3, 5);
```
### What about Short-Circuit operators:
What would be easyway to define as I could explain , Short-circuit evaluation means that when evaluating boolean expressions (logical AND and OR) you can stop as soon as you find the first condition which satisfies or negates the expression.
Suppose, 
```sh
if (a == b || c == d || e == f) {
    // Do something
}
```
if a==b returns true then, c==d and e==f will never be evaluated, because the evaluation outcome will end as the first condition suffice. when a == b is false, then c == d is evaluated; if it's true, then e == f is never evaluated. This may not seem to make any difference, but consider:
```sh
if (fizz() || bar() || baz()) {
    // Do something
}
```
now If fizz() returns true, then bar and baz are never called, because the expression's outcome has already been determined. So if bar or baz has some other effect than just returning something (a side effect), those effects never occur.

#### other example, 

The && and || operators are called short-circuit operators. 
They will return the value of the second operand based on the value of the first operand.

The && operator is useful for checking for null objects before accessing their attributes. For example...
```sh
var name = person && person.getName();
// This code is the same as
if(person) {
	var name = person.getName();
}
// The || operator is used for setting default values.
// here we check if person have any name
// if not present then we will assign value "John Doe"

var name = persons_name || "John Doe";
//The other way to writing this code is

if(persons_name) {
	var name = persons_name;
} else {
	var name = "John Doe";
}
```

### What is ternary Expression :
Ternary operation is a very short and elegent way to express logic shortly, 
- ternary expressions are expression, not a statement.
- what is an expression, an expression is a code block that evaluates to a single value.
- what is a statement, a statement is a code block that may not evaluate to a value at all,. 
Ternary stands for three. So when creating a ternary we can block it out in three parts:
```sh
variable = expression part ? true function : false function;

```
### What is Currying and partials:
