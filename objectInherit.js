var cat  = {
sound:'meeeeaw',
    talk:function(){
        console.log ('catsasy',this.sound)
    }

}

cat.talk();

//var tap = cat.talk // undefined. should be used bind 
// bind will copy entire object properties to the attached 
// object 
var bindFunction = bindFunction.bind ( cat)

bindFunction.talk()

