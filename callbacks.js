// function muliply(a, b) {
//     return a * b //function multiply
// }
// muliply()
// // -----------
// muliply(2, 2) // 4

// --------------------------
// this is a type of method.. that takes in a function as a parameter/input
// setTimeout()
// -------------------------
// function myFunction() {
//     console.log('hey')
// }
// setTimeout(myFunction, 3000) // hey in 3s

// setTimeout(myFunction, 10000) //hey in 10s

// setTimeout is responsible for invoking/activating our function after the time specified

const sayHello = (name) => console.log(`Hello, ${name}!`);

const irishGreeting = (name) => console.log(`Top of the morning to you, ${name}!`);

const greet = (name, callback) => {
    //console.log: callback invoked w the name parameter
    console.log(callback(name));
}

greet('Jared', irishGreeting)

greet('Cody', sayHello)

greet('Jake', (name) => `Howdy, ${name}!`) 
              //////////////////////////// => this is a function //anon funct => which is a func w no name