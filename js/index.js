console.log('Hola Mundo')

function hello() {
console.log('Hola Mundo')
console.log('Trabajando con JS')
};

hello()


function hello2(){
return 'hola Mundo2'
}
const result = hello2()
console.log (result)


function hello3(){
    return [1,2,3]
    }
    const result2 = hello3()
    console.log (result2)


function hello4(){
return function() {
    return 'hola Mundo Bonito'
}}
        

console.log (hello4())
console.log (hello4()())


function hello5(name) {
return 'hola ' + name}
console.log (hello5('Romulo'))
console.log (hello5('Developer'))
console.log (hello5('Full'))
console.log (hello5('Stack'))

function add (x, y) {
    if (y === undefined) { y= 0}

    return x+y
}
console.log (add(4,5))
console.log (add(10,20))
console.log (add(6,8))
console.log (add(2))

const user = {
    name : 'romulo',
    lastname : 'programador',
    age : '30',
    adress : {
country: 'Espana',
city: 'Toledo',
street: 'calle Quijote 123'
    },
    friends: ['elena', 'brandon'],
    active: true,
    sendMail: function() {
        return 'sending email ....'
    }
}
console.log(user)
console.log(user.name)
console.log(user.adress.city)
console.log(user.friends)
console.log(user.active)
console.log(user.sendMail)
console.log(user.sendMail())



const name = 'laptop'
const price = 3000
const newProduct = {
    name: name,
    price: price

}
console.log (newProduct)
const names = 'Pc'
const prices = 4000
const newProducts = {
    names,
    prices

}
console.log (newProducts)

const title = document.createElement('h1')
console.log (title)
document.body.append(title)
title.innerText = 'Hola Mundo desde JS'

const button = document.createElement('button')
button.innerText = 'click'
button.addEventListener('click', function(){
console.log('Hola Mundo')
title.innerText = 'Texto actualizado de PROGRAMADOR'
alert ('Se realizo un click')})



document.body.append(title)
document.body.append(button)



