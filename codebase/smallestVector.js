/*
create a function(smallVector) which can 


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
