
function ranks(arr) {
  // Step 1: Make a copy of the original array
  const sorted = arr.slice();

  // Step 2: Sort the copy from largest to smallest
  sorted.sort((a, b)=> b - a);

  // Step 3: Go through each number in the original array
  const result = arr.map((number) => {
    // Step 4: Find the number's index in the sorted array
    const index = sorted.indexOf(number);

    // Step 5: Convert the index into a rank

    return index + 1;
  });

  // Step 6: Return the result
  return result;
}

console.log(ranks([4, 9, 2, 7]))
