function fibonacci(prev1, prev2) {
  newfib = 0;
  count=0;

  for(let i=0; i<=18; i++ ) {
     newfib = prev1+prev2;
     prev2= prev1;
     prev1=newfib;
     console.log(prev2)
    
  }
  return prev2;
}

console.log(fibonacci(0,1))