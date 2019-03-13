[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)
# js-lectures
> js-lectrues are some key points on javascript
> these keypoints is just for my rememberance.
> I think sharing these might help some one else also. 
> 

When you start to learn javascript for the beginnin, https://stackoverflow.com/ is your best frind.
### Interview question 
When it comes to "interview test" questions, the subject of FizzBuzz often comes up, like write a function;
- which populates integer 1 to 100 , [you could generate an Array programatically]
where condition:
- if number divisible by 3 will print "fizz" 
- if number divisible by 5 will print "buzz"
- if number divisible by both 3 and 5 will printout "fizzbuzz"

so how to approach that vision.

```javascript
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


```javascript
(fuction(){
  console.log ('this is self execution function!');
  alert('hello');
})();

```
- ways of implementing IIFE
```javascript
(function () { /* ... */ })(); 
(function () { /* ... */ }()); // Reccomended by Croockford
(() => { /* ... */ })();       // With ES6 arrow functions (though parentheses only allowed on outside)

```
- selfexecuting function expression does not require the closing parantheses, like :  
```javascript
  var i = function(){ return 10; }();
  true && function(){ /* ... */ }();
  0, function(){ /* ... */ }();

```
- when passing variables 
```javascript
(function(x, y){/* ... */})(3, 5);
```
### What about Short-Circuit operators:
What would be easyway to define as I could explain , Short-circuit evaluation means that when evaluating boolean expressions (logical AND and OR) you can stop as soon as you find the first condition which satisfies or negates the expression.
Suppose, 
```javascript
if (a == b || c == d || e == f) {
    // Do something
}
```
if a==b returns true then, c==d and e==f will never be evaluated, because the evaluation outcome will end as the first condition suffice. when a == b is false, then c == d is evaluated; if it's true, then e == f is never evaluated. This may not seem to make any difference, but consider:
```javascript
if (fizz() || bar() || baz()) {
    // Do something
}
```
now If fizz() returns true, then bar and baz are never called, because the expression's outcome has already been determined. So if bar or baz has some other effect than just returning something (a side effect), those effects never occur.
#### NOTE! 
Note that not all expressions are short-circuited. The || and && operators are short-circuited, but | and & are not, nor are * or /; in fact most operators are not.

#### other example, 

The && and || operators are called short-circuit operators. 
They will return the value of the second operand based on the value of the first operand.

The && operator is useful for checking for null objects before accessing their attributes. For example...
```javascript
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
### How to Chain or cascade ternary expression with nested if condition.
```javascript
//
var state= a>b ? 1 : a<b ? -1 : 0 // this returns a bigger than b then 1 if a small then -1 else 0

```
### How to Chain function, Casceding:

simple approach is this can be a simple object literal, function constructor, etc

The idea is that all of the methods are stored on some object, 
The only way to access those methods is to access them through that object. 
Keeping this in mind, each function must RETURN the object that holds all of these methods.

For exmple :

```javascript
var checkNumbers = {

  one: function() {
    console.log('one');
    // You can return 'this' or reference the object by name
    return this;
    // or 
    // return checkNumbers;
  },

  two: function() {
    console.log('two');
    return this;
  }
};

checkNumbers.one().two().one().two();
// this will console out => 'one', 'two', 'one', 'two'
```
##NOTE:




### What is Currying and partials:
```javascript
//
```
### Recursive 
```javascript

function callMe(val){ //<--------------------this is the recursive function, calls itself
  // Do something with `val`
  val = val + 1;

  console.log(val);

  // And call it again with the value
  if(val < 5){
    callMe(val);
  }
}

callMe(1); // 2, 3, 4, 5
```

### How promises works
```javascript
//
```
### Fetching api data [promises]
```javascript

// example code using fetch in React.
 let results = fetch(this.props.url,{method:'GET'}) // method portion could be in the .env as settings, 
         .then((res) => {
            return res.json();  // this returns response object 
	    			// extracted from the promise to the next then chain.
        })
        .then((data) => {
            return data; // this returns response data as desired 
        })
```
At line 3 we get a response but the response we get is not JSON but an object with a series of methods we can use depending on what we want to do with the information, these methods include:

- clone() - As the method implies this method creates a clone of the response.
- redirect() - This method creates a new response but with a different URL.
- arrayBuffer() - In here we return a promise that resolves with an ArrayBuffer.
- formData() - Also returns a promise but one that resolves with FormData object.
- blob() - This is one resolves with a Blob.
- text() - In this case it resolves with a string.
- json() - Lastly we have the method to that resolves the promise with JSON.

Looking at all these methods the one we want is the JSON one because we want to handle our data as a JSON object so we add: res.json() method on this.

### Passing function as parameter, same time return a function within:

Function could be returned from a function and also fuction could be passed as parameter ( which has a fancy name called 
callback function )  -

```javascript 

// global / window scope
function callFunction() {
alert("Call func called");
}

function fatFunction(arrayParam, callfunc){
  
  this.params = arrayParam;
  params.map((i,e,a)=>{
    console.log("item = "+i);
  });
  
  // check if not null and type is function 
  if (callfunc && (typeof callfunc==="function")){
    callfunc();
  }
  
  return function bark(str){
    console.log (str);
  } 
}

fatFunction([1,2,2,5,4,1,2],callFunction)("hello");

```
Another way of passing function as parameter 

```javascript

function fatFunction( val1, val2){
  
  return (val2)(val1);
}

fatFunction("dog",(input)=>{ console.log (input + " cat"); }); // This prints dog cat

```





