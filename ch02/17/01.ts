function arraySum1(arr: number[]) {
  let sum = 0,
    num;
  while ((num = arr.pop()) !== undefined) {
    sum += num;
  }
  return sum;
}
function printTriangles1(n: number) {
  const nums = [];
  for (let i = 0; i < n; i++) {
    nums.push(i);
    console.log(arraySum1(nums));
  }
}
printTriangles1(5);

// export default {}
