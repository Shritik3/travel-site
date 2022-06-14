// function Person(fullname,favcolor){
//     this.name=fullname;
//     this.color=favcolor
//     this.greet=function(){
//         console.log("Hello there!"+this.name+"colour"+this.color);
//     }
// }
class Person{
    constructor(name,favcolor){
        this.name=name;
        this.fav_color=favcolor;
    }
    greet(){
        console.log("Hello there!"+this.name+"colour"+this.color);
    }
}

export default Person