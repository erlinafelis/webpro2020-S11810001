/* 
        object pke kurung krawal{}
    */

// const mahasiswa1 = ['jhon','doe',31,true];
// console.log(mahasiswa1);

//mengunakan objek literal
const mhs1 ={
    namaDepan='jhon', //properties key and value
    namaBelakang ='doe',
    umur: 31,
    sudahLulus: true,  
    alamat: {   //di dalam objek ada objek
        jalan:"jln.mawar",
        kecamatan:'bunga',
        kabupaten: "tumbuhan",
    } ,
    IPSemester :[3.05 ,3.25, 3.0, 3,4],
    hitungIPK= function (){
        let total = 0;
        this.IPSemester.forEach(function (el) {
            total=total +el;
            
        });
        return total/4;
    }
};

//kata kunci new
// const  mhs2 = new Object();
// mhs2.namaDepan ='jane';
// mhs2.namaBelakang ='smith';
// titik untuk meng

//mengakses properti objek
//1. dot notation
// console.log(mhs1.umur);
//2.bracket notation
// console.log(mhs1['namaBelakang']);


// console.log(mhs1.alamat.jalan);
// console.log(mhs1.IPSemester[2]);
// mhs1.hitungIPK();  //untuk panggil fungsi
// console.log(mhs1);


const mahasiswa = [
    {
        nim="001",
        namaDepan:'jhon',
        namaBelakang:'doe',
    },
    {
        nim:'002',
        namaDepan:"jane",
        namaBelakang:"smith",
    },
    {
        nim:'003',
        namaDepan:'stenly',
        namaBelakang:"adam",
    },
];
mahasiswa.forEach(function(el){
    console.log(el);
});


