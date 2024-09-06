function bubble(n) {
  array=[];
  
  for(let j=0; j<=n-1; j++) {
    console.log("hghdwehd")
    for(let i =j; i <= n-j-1; i++) {
      console.log("fffff")
      if(n[i] > n[i+1]){
        
        [n[i], n[i+1]] = [n[i+1], n[i]];
      return  console.log(n[i], n[i+1] = n[i+1], n[i])
      }
      else {
        i++;
        j++;
      }
    }
  }
  return n

}

console.log(bubble([7,2,4,5,6]))