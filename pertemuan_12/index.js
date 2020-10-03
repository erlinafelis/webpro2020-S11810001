// Rest & Spread Operator

// const hitung = (a,b,c,d,e) => {
//     const angka =[a,b,c,d,e];
//     let total=0;
//     for (let i =0; i<5 ;i++){
//         total=total +angka [i];
//     }
//     return total;
// };



//rest bisa di gunakan pada parameter terakhir
//... di ubah menjadi array

// const hitung =(...angka) => {
//     let total =0;
//     angka.forEach((el) =>{
//         total=total+angka[i];
//     });
// return total;

// };
// console.log(hitung(1,2,3,4,5,6,7,8,9,10));


// const hitung =(param1 ,param2, ...params) => {
//     let total =0;
//     angka.forEach((el) =>{
//         total=total+angka[i];
//     });
// return total;

//};

//Spread operator 


//1.Duplikasi Array
// const angka = [1,2,3,4,5];
// const angka2 = [...angka];

// angka[0] = 10;
// console.log(angka);
// console.log(angka2);

// console.log(angka);
// console.log(...angka);

//2.Menggabungkan Array
// const angka1 =[1,2,3,4,5];
// const angka2 =[6,7,8,9,10];
// const angka3 =[12,13];

// const gabung5 =angka1.concat(angka2, angka3);
// console.log(gabung5);

// const gabung6 = [...angka1,...angka2, 11, ...angka3];
// console.log(gabung6);


let orang={
    nama:'jhon',
    umur:33,
};

//orang.pekerjaan='guru'
//orang.pendidikan ="s2"

orang ={...orang, pekerjaan: 'guru',pendidikan:'s2'};
console.log(orang);

const obj1 = {a:1,b:2};
const obj2 = {c:3,d:4};

const objGabung = {...obj1, ...obj2};
console.log(objGabung);