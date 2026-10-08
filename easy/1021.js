var removeOuterParentheses = function(s) {
    let result = ""
    let depth = 0

    for(const char of s){
        if(char === "("){
            if(depth === 0){
                depth++
                continue
            }
            depth++
            result += char
        }else{
            depth--

            if(depth === 0){
                continue
            }
            result += char
        }
    }
    return result
    
};