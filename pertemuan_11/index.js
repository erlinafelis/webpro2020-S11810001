/* 
        arrow function
                            */


// function ucapkanSalam() {
// return "Selamat Pagi";
// };

// fungsi dengan parameter
// const operasiPenjumlahan = (bilangan1, bilangan2) => {
//     const hasil =  bilangan1 + bilangan2;
//     return hasil;
//   };
  
//   console.log(operasiPenjumlahan(12, 4)); 
  
  // fungsi yang tidak memiliki parameter
//   const namaJenisBuah = () => {
//     const buah = ["apel", "anggur", "jeruk",'melon'];
//     return buah[Math.floor(Math.random()*(buah.length))];
//   }
  
//   console.log(namaJenisBuah()); 
  
//IMPLICIT RETURN VALUE

// function bunga(nama) {
//    return `Hay ${nama}`;
// }
 
// console.log(bunga('mawar')); 

//  //cara singkat
// //  const bunga = (nama) => `Hay ${nama}`;

// console.log(bunga('melati'));


//Exercise
//convert to ES6 Syntax
const yearUntilRetirement = (year,firstName) => {
  var age=28;
  var retirement=65-age;
  if(retirement > 0){
    console.log(`${firstName} retired in ${retirement} years. `);
  }
  else{
    console.log(`${firstName} has already retired`);
  }
}
yearUntilRetirement(2035,'jhon');

