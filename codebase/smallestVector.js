/*
Task :TODO
create a function(smallVector) which can 
calculate n dimensional vector like 
vector = [[1,1,1],[2,2,2],[3,3,3]]
which will callculate each array vector like sqrt(1^2+1^2+1^2)
and then will compare the small verctors each, from array vector,
and return smallest one.

*/


var arry=[[1,1,1],[2,2,2],[3,3,3]]
  
function smallVector(vector){
  const indicator= vector.map((k, i)=>{ 
       return Math.sqrt(k.reduce((a,b)=>{
         return a+Math.pow(b,2);
        }))
    });
  return arry[indicator.indexOf(Math.min(...indicator))];  
}

//console.log(Math.sqrt([1,1,1].reduce((a,b)=>a+Math.pow(b,2))))
//console.log(arry[indicator.indexOf(Math.min(...indicator))])
console.log(smallVector(arry));
