import '../styles/styles.css'
// import Person from './modules/Person'
import 'lazysizes'
import RevealOnScroll from './modules/RevealOnScroll'
import MobileMenu from './modules/MobileMenu'
import StickyHeader from './modules/StickyHeader';
new StickyHeader();
new RevealOnScroll(document.querySelectorAll(".feature-item"),75);
new RevealOnScroll(document.querySelectorAll(".testimonial"),60);
new MobileMenu();
let modal
document.querySelectorAll(".open-modal").forEach(el=>{
el.addEventListener("click",e=>{
    e.preventDefault()
    if (typeof modal=="undefined"){
        import(/*WebpackChunkName:"modal"*/'./modules/Modal').then(x=>{
            modal=new x.default()
            setTimeout(()=>modal.opeTheModal(),20)
        }).catch(()=>console.log("There was a problem"))
    }else{
        modal.openTheModal()
    }
})
})
if(module.hot){
    module.hot.accept()
}


// Lesson example code below this line
// function person(name,favColor){
//     console.log("Hello my name is"+name+"and my favourite colour is"+favColor);
// }
// let johnName="John Doe";
// let johnFavColor="blue";
// person("Shritik","blue");
// person("Raj","green");
// person(johnName,johnFavColor);
// // object
// var john={
//     name:"John Doe",
//     favouriteColor:"blue",
//     greet:function(){
//         console.log("OH!Hello..."+john.name)
//     }
// }
// john.greet();
// person(john.name,john.favouriteColor);
// Constructor function object oriented
// class Adult extends Person{
//     payTaxes(){
//         console.log(this.name+"now owes zero taxes");
//     }
// }
// let john=new Person("John Doe","red");
// john.greet();
// john.name();

// var jane=new Adult("Jane Smith","green");
// jane.greet();
// jane.payTaxes();