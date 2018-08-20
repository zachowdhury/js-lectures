var customer  = {
    cash:'Euro',
    bank:function(){
        console.log ('Customer Currency: ',this.cash)
    }

}

function product( name ){
    // cnstructor function
    console.log('Product name:'+name+' '+'bought with:'+this.cash);
}
customer.bank(); // output> Customer Currency:  Euro
/*
function.prototype.call()
function.prototype.bind()
function.prototype.apply()
*/
// explicit binding 
var newCustomer = customer.bank // undefined. should be used bind 
console.dir ( newCustomer); // output> [function:bank]
// bind will copy entire object properties to the target function / object 
var bindCustomer = product.bind(customer)
bindCustomer ('cocaCola');

