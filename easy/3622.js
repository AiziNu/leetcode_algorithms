const checkDivisibility = function(n) {
    let digit = n.toString()

    let sum = 0
    let multiply = 1
    for(let i = 0; i< digit.length; i++){
        sum += Number(digit[i])
        multiply *= digit[i]
    }
    const sumOfTwo = sum + multiply
    if(n % sumOfTwo === 0){
        return true
    }

    return false
    
};
const output = checkDivisibility (24)

console.log(output)