function canConstruct(nums1) {
  const min = Math.min(...nums1);

  for (const num of nums1) {
    if (min % 2 === 0 && num % 2 !== 0) {
      return false;
    }
  }

  return true;
}

// another way would be with HOF

function canConstruct2(nums){
  const min = Math.min(...nums)

  return min % 2 !== 0 || nums.every(num=> num % 2 === 0)
}