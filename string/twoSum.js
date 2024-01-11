function twoSum(nums, target) {
  // let j = 0;
  // let i= 1;
  // const sortedArr = nums.sort((a,b) => {a - b})

  // while(i !== j) {
  //   const sum = sortedArr[i] + sortedArr[j];
  //   console.log(sum)
  //   if (sum === target) {
  //     return [j,i];
  //   }
  //   else if (sum < target) {
  //     i++;
  //   }
  //   else {
  //     j++;
  //   }
  // }

  for(let i=0; i < nums.length; i++) {
    for(let j=i+1; j <nums.length; j++){
      if(nums[i]+nums[j] === target && i!=j){
        return [i,j];
      }
    }
  }
}

// Testing



console.log(twoSum([2,7,11,15],9))
console.log(twoSum([2,5,5,11],10))
// console.log(twoSum([3,2,4],6))
// console.log(twoSum([3,3],6))