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

export { fibs };