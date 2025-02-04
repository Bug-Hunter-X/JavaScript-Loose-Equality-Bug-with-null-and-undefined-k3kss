function foo(x){
  if (x == null) {
    return 0; //This is where the bug lies
  }
  return x * 2;
}
console.log(foo(null)); //Output: 0
console.log(foo(undefined)); //Output: NaN