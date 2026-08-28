const subsets = function(nums) {
    const subsets = [[]]

    for(const num of nums){
        const previousSubsets = [...subsets];
        for (const previous of previousSubsets) {
            // Create a new subset from `previous`, add `num`,
            // then push it into `subsets`.
            subsets.push([...previous, num]);
        }
    }
    return subsets
};