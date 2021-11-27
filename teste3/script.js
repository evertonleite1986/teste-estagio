
let numeros = [1,3,35,40,85,123,121,209,200,305,350];
var pares = [];
var impares = [];
    
    numeros.map((num) => {
        if(num % 2 == 0) {
            pares.push(num)
        }else if(num % 2 != 0) {
            impares.push(num)}
    })
        
console.log(pares)
console.log(impares)
console.log(numeros) 
