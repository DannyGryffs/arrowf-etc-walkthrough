//higher order array methods
//---------------------------------------------------------
// .forEach looping
// let arr = [a, b, c,]


// let forEachCallback = (element, index, array){
//     console.log(`element is ${element}`)
//     console.log(`index is ${index}`)
//     console.log(`array is ${array}`)
//     console.log('----------------------------------')
// //simply .forEach is another way to do a for...loop

// // it optionally can receive a param 
// }

// arr.forEach(forEachCallback)

// //---------------------------------------------------------
// // for-looping
// //let arr = [a, b, c,]

// for (let i = 0; i < arr.length; i++) {
//     console.log(`element is ${arr[i]}`)
//     console.log(`index is ${i}`)
//     console.log(`array is ${arr}`)
//     console.log('----------------------------------')
// }
//both methods return the same result
//---------------------------------------------------------
 //loops can do the same thing at .forEach*****


//**important first index will always be element, second will always be index and third will always be arr**\\

//map() method

// let arr = [4, 5, 6]

// //task multiply by 2!
// //map needs a return
// //map is used to transform/update the array into something else
// let newArr = arr.map((element, index, array) => {
//     return element * 2
// });

// console.log(newArr); //[ 8, 10, 12 ]


// let arr = [4, 5, 6]


// let newArr = arr.map((element, index, array) => {
//     return 
// });

// console.log(newArr); //[ 'fun', 'fun', 'fun' ]


// let arr = [4, 5, 6]


// let newArr = arr.map((element, index, array) => {
    
// });

// console.log(newArr); //[ undefined, undefined, undefined ] ****--why?  bc no returnnnn-****

//---------------------------------------------------------
//.filter
// lets say we only want the -even- elements returned
// let arr = [7, 18, 9, 3, 44]

// let filterCallback = (element, index, array) => {
//     return element % 2 === 1 //if we did 1 instead of 0 the return would be all odd indicies //[ 7, 9, 3 ]
// }

// let filteredArr = arr.filter(filterCallback)

// console.log(filteredArr) // [ 18, 44 ]

//---------------------------------------------------------

//reduce 'the snowball function'

//reduce doesn't return array, -- returns items down to single item

//reduces params arent element index and array- its params are accumulator, currentValue, currentIndex, array

// let arrOriginal = [7, 18, 9, 3, 44]

// let reduceReturn = arrOriginal.reduce((acc, cur, index, array) => {
//     console.log(`accumulator is ${acc}`)
//     console.log(`current value is ${cur}`)
//     console.log(`we are going to return acc + cur`)
//     console.log(`which means the next accumulator will be ${acc + cur}`)
//     console.log('-------------------------------------------------------')
//     return acc + cur
// }) // if we added an additional number to the end here'}, 8)' it would be added in the sum 
// console.log(reduceReturn)
//WEVE GIVEN REDUCE ONLY ONE ARG - A FUNC

//result of this^
// accumulator is 7
// current value is 18
// we are going to return acc + cur
// which means the next accumulator will be 25
// -------------------------------------------------------
// accumulator is 25
// current value is 9
// we are going to return acc + cur
// which means the next accumulator will be 34
// -------------------------------------------------------
// accumulator is 34
// current value is 3
// we are going to return acc + cur
// which means the next accumulator will be 37
// -------------------------------------------------------
// accumulator is 37
// current value is 44
// we are going to return acc + cur
// which means the next accumulator will be 81
// -------------------------------------------------------
// 81
// let reduceReturn = arrOriginal(() => {})


// -------------------------------------------------------
//.sort() method ---

//does modify orig arr

let myArr = ['pikachu', 'pidgeot','abra', 'blastoise', 'exeggutor' ,'charzard']

// myArr.sort((a, b) => {
//     if (a.length < b.length) {
//         return -1
//     } else if (a.length < b.length) {
//         return 1
//     } else if (a.length === b.length) {
//         return 0
//     }
    return b.length - a.length
// })

