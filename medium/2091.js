const minimumDeletions = function(nums) {
    let maxVal = nums[0]
    let minVal = nums[0]

    let maxIndex = 0
    let minIndex = 0

    for(let i = 0; i< nums.length; i++){
        if(maxVal < nums[i]){
            maxVal = nums[i]
            maxIndex =i
        }


        if(minVal > nums[i]){
            minVal = nums[i]
            minIndex = i
        }
    }

    const left = Math.min(minIndex, maxIndex); /// 1
    const right = Math.max(minIndex, maxIndex);  //5 

    const fromFront = right + 1

    // Hint 2: delete from the back until reaching `left`
    const fromBack = nums.length - left

    // Hint 3: delete `left` from the front and `right` from the back
    const fromBothSides = (left +1) + (nums.length - right)

    return Math.min(fromFront, fromBack, fromBothSides)
};
