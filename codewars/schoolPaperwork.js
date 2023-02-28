function paperwork(n, m) {
  const result = n * m;
  if (n < 0 || m < 0){
    return 0;
  }
  return result;
}

console.log(paperwork(5, 5))