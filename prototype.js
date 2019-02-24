const human = {

    talk: 'hello',
    speak :function(){
        console.log (this.talk)
    }
}
function man(){
    console.log(talk)
    console.log (this.talk)
}
man()