function swapHeadAndTail(arr) {
  return arr.slice((Math.round(arr.length / 2)))
    .concat(arr.slice(Math.floor(arr.length / 2), Math.ceil(arr.length / 2)))
    .concat(arr.slice(0, Math.floor(arr.length / 2)));
}
console.log(swapHeadAndTail([1, 2]));
