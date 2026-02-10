const fibs = (n) => {
  if (typeof n !== "number" || !Number.isInteger(n) || n < 0) {
    throw new TypeError("fibs() requires a non-negative integer");
  }

  const arr = [];

  for (let x = 0; x < n; x++) {
    if (x === 0) arr.push(0);
    else if (x === 1) arr.push(1);
    else arr.push(arr[x-1] + arr[x-2])
  }

  return arr;
};

const fibsRec = (n) => {
  if (typeof n !== "number" || !Number.isInteger(n) || n < 0) {
    throw new TypeError("fibsRec() requires a non-negative integer");
  }

  return fib(n);

  function fib(n) {
    if (n == 0) return [];
    if (n == 1) return [0];
    if (n == 2) return [0, 1];
    
    const arr = fibsRec(n-1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
  }
}

export { fibs, fibsRec };