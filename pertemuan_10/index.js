/* 
        var/const/let
                            */



// let nama ="jhon";
// let nama ="blow";

// console.log(nama);


//scope dalam javascript
//1. function scope(var)
//2.block scope //semua yg ada di dalam buka kurung dan dalam kurung cthnya for ,do while


// for(var i=0; i<10; i++){
//     console.log(i);
// }
// console.log(i);
 
// function tes(){
//     for(var i=0; i<10; i++){
//         console.log(i);
//     }
// }
// tes();
// console.log(i);

// {
// let i;
// for (i=0;i >10;i++) {
//     console.log(i);
// }
// }
// console.log(i);

// Template literal

const person = {
    firstName: 'stenly',
    lastName:'adam',
    age:33,

};

console.log("hallo nama saya"+ 
person.firstName +
 ' ' +
person.lastName + 
'umur saya adalah'+
person.age +"tahun");

console.log(`hallo nama saya ${person.firstName} ${person.lastName} umur saya ${person.age}`
);
