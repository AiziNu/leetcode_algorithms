const missingMultiple = function(nums, k) {
    const seen = new Set(nums)

    let multiple = k

    while(seen.has(multiple)){
        multiple += k
    }
    return multiple
    
};

const out = missingMultiple([8,2,3,4,6], 2)
console.log(out)