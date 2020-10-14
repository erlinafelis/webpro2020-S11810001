/* destrukturisasi */

//memecah item atau property pada array ataou object ke dalam variabel yang berbeda


//1.Array

// const colors = ['merah', 'kuning', 'hijau'];

// let satu =colors[0];
// let dua = colors[1];
// let tiga = colors[2];

// let[satu,dua,tiga] = colors;
// console.log(satu,dua,tiga);

// let [satu,dua] =colors;
// console.log(Satu,dua);

// let [satu, ,tiga] = colors;
// console.log(satu,tiga);

// let [satu,dua,tiga,empat = 'biru']=colors;
// console.log(satu,dua,tiga,empat);

//2. Object

// const user ={
//     name :'jhon',
//     gender: 'male',
//     age : 33,
// };

// let name =user.name;
// let gender = user.gender;
// let age =user.age;

// let {name, gender, age } = user;

// console.log(name, gender, age);

// let {name,gender,age ,born='manado'} = user;
// console.log(name, gender, age, born);

// let {name, age}= user;
// console.log(name,age);

// let { name :nama , age: umur} = user;
// console.log(nama,umur);

// const display = (name,age) =>{
//     console.log(`nama saaya adalah ${name}. Umur saya adalah ${age}`);
// };

// display(user);

//3. Array Object

// const users = [
//     {id: 1, name:"jhon"},
//     {id: 2, name:"jane"},
//     {id: 3, name:"bob"},
// ];

// let [user1,user2,user3] = users;
// console.log(user1,user2,user3);

// let [, , {id, name}] = users;
// console.log(id, name);

// let = [
//     {id: idUser1, name:nameUser1},
//     {id: idUser2, name:nameUser2},
//     {id: IdUser3, name:nameUser3},
// ]=users;
// console.log(idUser1, nameUser1);


//4. kombinasi dengan Rest Operator

const colors = ['merah','kuning','hijau','biru'];

let [satu, ...lainnya]=colors;
console.log(satu);
console.log(lainnya);