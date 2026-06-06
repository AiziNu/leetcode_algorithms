/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    const n = nums.length
    let left = 0
    let right = n -1
    let leftSum = new Array(n).fill(0);
    let rightSum = new Array(n).fill(0);

    const result = []
    for(let i=1; i<n; i++){
        leftSum[i]= leftSum[i-1]+nums[i-1]
    }
    for(let i= n-2; i>=0;i--){
        rightSum[i]= rightSum[i+1]+nums[i+1]
    }
    for(let i =0; i< n; i++){
        let diff = Math.abs(leftSum[i]-rightSum[i])
        result.push(diff)
    }
    return result
};