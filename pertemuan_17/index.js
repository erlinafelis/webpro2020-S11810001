// const second = () => {
//     const num = 10;
//     setTimeout (() => {
//         console.log('Async 1');
//         console.log(num);
//         setTimeout(()=> {
//             console.log('Async 2');
//             setTimeout(()=> {
//                 console.log('Async 3');
//             }, 2000)
//         }, 2000)
//     }, 2000, num)
// }

// const first = () => {
//     console.log('First');
//     second();
//     console.log('The End');
// }

// first ();

const second = () =>{
    setTimeout (() => {
        console.log('second async')
    },4000)
}