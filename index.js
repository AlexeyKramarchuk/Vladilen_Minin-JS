/*Урок 1. JavaScript. Что такое prototype.

const person = {
    name: 'Maxim',
    age: 25,
    greet: function() {
        console.log('Greet!')
    }
}

const person = new Object({
    name: 'Maxim',
    age: 25,
    greet: function() {
        console.log('Greet!')
    }
})


Object.prototype.sayHello = function() {
    console.log('Hello!')
}

const lena = Object.create(person)
lena.name = 'Elena'

const str = new String ('I am a string');
------------------------------------------------------------

Урок 2. JavaScript. Что такое контекст this. Как работает call, bind, apply

function hello() {
    console.log('Hello!', this)
}

const person = {
    name: 'Vladilen',
    age: 25,
    sayHello: hello,
    sayHelloWindow: hello.bind(window),
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()

    }
}

const lena = {
    name: 'Elena',
    age: 23
}

// person.logInfo.bind(lena, 'Frontend', '8-999-123-12-23')()
// person.logInfo.call(lena, 'Frontend', '8-999-123-12-23')
person.logInfo.apply(lena, ['Frontend', '8-999-123-12-23'])

const array = [1, 2, 3, 4, 5]

// function multBy(arr, n) {
//     return arr.map(function(i) {
//         return i * n
//     })
// }

Array.prototype.multBy = function(n) {
    return this.map(function(i) {
        return i * n
    })
}


console.log(array.multBy(2))

----------------------------------------------------------------------
Урок 3. JavaScript. Что такое замыкания. Как они работают 

function createCalcFunction(n) {
    return function() {
        console.log(1000 * n)
    }
}

const calc = createCalcFunction(42)
calc()

function createIncrementor(n) {
    return function(num) {
        return n + num
    }
}

const addOne = createIncrementor(1)
const addTen = createIncrementor(10)

console.log(addOne(10))
console.log(addOne(41))

console.log(addTen(10))
console.log(addTen(41))


function urlGeneration(domain) {
    return function(url) {
        return `https://${url}.${domain}`
    }
}
const comUrl = urlGeneration('com')
const ruUrl = urlGeneration('ru')


console.log(comUrl('google'))
console.log(comUrl('netflix'))

console.log(ruUrl('yandex'))
console.log(ruUrl('vk'))*/



/*Написать свою ф-цию bind. Пример работы

function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {name: 'Misha', age: 22, job: 'Frontend'}
const person2 = {name: 'Elena', age: 19, job: 'SMM'}



bind(person1, logPerson)
bind(person2, logPerson)

function bind(context, fn) {
    return function(...args) {
        fn.apply(context, args)
    }
}

function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {name: 'Misha', age: 22, job: 'Frontend'}
const person2 = {name: 'Elena', age: 19, job: 'SMM'}

bind(person1, logPerson)()
bind(person2, logPerson)()
------------------------------------------------------------------------


Урок 4. JavaScript. Асинхронность.Что такое Event Loop.


console.log('Start')
console.log('Start2')

window.setTimeout(function() {
    console.log('Inside timeout, after 2 seconds')
}, 2000)
------------------------------------------------------------------------*/

/*Урок 5. JavaScript. Promise. Что это, как работает

console.log('Request data...')

/*setTimeout(() => {
    console.log('Prepering data...')

    const backendData = {
        server: 'aws',
        port: 2000,
        atatus: 'working'
        }

setTimeout(() => {
        backendData.modified = true
        console.log('Data received', backendData)
    }, 2000)
}, 2000)

const p = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('Prepering data...')
        const backendData = {
                server: 'aws',
                port: 2000,
                status: 'working'
            }
            resolve(backendData)
    }, 2000)
})

p.then(data => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true
            resolve(data)
        }, 2000)
    })
})
.then(clientData => {
    clientData.fromPromise = true
    return clientData
})
.then(data => {
    console.log('Modified', data)
})
.catch(err => console.log('Error: ', err))
.finally(() => console.log('Finally'))


const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
}
// sleep(2000).then(() => console.log('After 2 sec'))
// sleep(3000).then(() => console.log('After 3 sec'))

Promise.all([sleep(2000), sleep(5000)]).then(() => {
    console.log('All promises')
})

Promise.race([sleep(2000), sleep(5000)]).then(() => {
    console.log('Race promises')
})
-----------------------------------------------------------

Урок 6. JavaScript. Объекты с Object.create. Что такое getters, setters

const person = Object.create(
    {
      calculateAge() {
        console.log('Age:', new Date().getFullYear() - this.birthYear)
      }  
    }, 
    {
        name: {
            value: 'Vladilen',
            enumerable: true,
            writable: true,
            configurable: true
        },
        birthYear: {
            value: 1993,
            enumerable: false,
            writable: false,
            configurable: false
        },
        age: {
            get() {
                return new Date().getFullYear() - this.birthYear
            },
            set(value) {
                document.body.style.background = 'red'
                console.log('Set age', value)
            }
        }
    }
)

// person.name = 'Maxim'

// for (let key in person) {
//     console.log('Key', key, person[key])
// }

for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log('Key', key, person[key])
    }
}
------------------------------------------------------------------------

Урок 7. JavaScript. Все о ES6 Классах*/

// const animal = {
//     name: 'Animal',
//     age: 5,
//     hasTail: true
// }

class Animal {
    constructor(options) {
        this.name = options.name
        this.age = options.age
        this.hasTail = options.hasTail
    }
}