const maxDepth = function(s) {
    let maxCount = 0
    let currCount = 0

    for(let char of s){
        if(char === '('){
            currCount++
            maxCount = Math.max(maxCount, currCount)
        }else if(char === ')'){
            currCount--
        }
    }
    return maxCount
};

console.log(maxDepth("(1+(2*3)+((8)/4))+1")) // 3