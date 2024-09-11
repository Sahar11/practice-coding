function bubble(array) {
  n=array.length;
  
  for(let j=0; j<=array.length-1; j++) {
    
    for(let i =j; i <= array.length-j-1; i++) {
      
      if(array[i] > array[i+1]){
        
        [array[i], array[i+1]] = [array[i+1], array[i]];
      
      }
      else {
        i++;
        j++;
      }
    }
  }
  return array

}

console.log(bubble([7,2,4,5,6]))