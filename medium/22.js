var generateParenthesis = function(n) {
    if(n < 1 ) return -1

    const res = []

    function backTracks(curr, open, close){
        // base case
        if(curr.length === n*2){
            res.push(curr)
            return
        }

        // can i add
        if(open< n){
            backTracks(curr + "(", open +1, close)
        }

        // can i add closing
        if(close < open){
            backTracks(curr + ")", open, close +1)
        }
    }
    backTracks("", 0, 0,)
    return res

};
