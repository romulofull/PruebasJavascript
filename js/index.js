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

