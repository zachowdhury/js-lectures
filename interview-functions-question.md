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
