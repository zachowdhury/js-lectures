# js-lectures
### interview question like write a function;
- which populates integer 1 to 100 , you could generate an Array programatically 
- if number divisible by 3 will print "fizz" 
- if number divisible by 5 will print "buzz"
- if number divisible by both 3 and 5 will printout "fizzbuzz"

so how to approach that vision.

´´´sh

const myFiller = Array
  .from(new Array(100).keys(),n=>n+1)
  .map((elem,itm,arr)=>{
    var f = elem % 3 == 0, b = elem % 5 == 0;
    return (f ? b ? "fizzbuzz" : "fizz" : b ? "buzz" : elem);
  }
).map(e=>console.log ( e ))


´´´
