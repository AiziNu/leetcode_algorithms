var scoreOfParentheses = function(s) {
    let balance = 0
    let stack = []

    for(let i = 0; i <s.length; i++){
        if(s[i] === '('){
            stack.push(balance)
            balance=0

        }else{
            if(s[i-1] == '('){ // here iwe get "()" full parethesis
                balance = stack.pop() + 1

            }else{
                balance = stack.pop() + (2 * balance)
            }
        }
    }
    return balance
};