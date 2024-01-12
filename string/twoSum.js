function twoSum(nums, target) {

  // Brute force
  // for(let i=0; i < nums.length; i++) {
  //   for(let j=i+1; j <nums.length; j++){
  //     if(nums[i]+nums[j] === target && i!=j){
  //       return [i,j];
  //     }
  //   }
  // }

  //Two pointers
  const numsWithIndex = nums.map((num, index) => [num, index]);
  console.log(numsWithIndex);
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) {
      return [left, right];
    }
    if (sum > target) {
      right--;
    }
    else {
      left++;
    }
  }
  return []
}
// const numsWithIndex = nums.map((num, index) => [num, index]);
// console.log(numsWithIndex);




// Testing



console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([2, 5, 5, 11], 10))
console.log(twoSum([3, 2, 4], 6))
console.log(twoSum([3, 3], 6))