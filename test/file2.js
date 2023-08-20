
function pickRandomDistinctElements(A, B) {
  // Shuffle the elements of arrays A and B
  const shuffledA = A.sort(() => Math.random() - 0.5);
  const shuffledB = B.sort(() => Math.random() - 0.5);
  console.log('shuffledA', shuffledA);
  console.log('shuffledB', shuffledB);

  // Pick one random element from array A and one random element from array B
  const randomA = shuffledA[Math.floor(Math.random() * shuffledA.length)];
  const randomB = shuffledB[Math.floor(Math.random() * shuffledB.length)];
  console.log('randomA', randomA);
  console.log('randomB', randomB);

  // Remove the two picked elements from their respective arrays
  const remainingA = shuffledA.filter((el) => el !== randomA);
  const remainingB = shuffledB.filter((el) => el !== randomB);
  console.log('remainingA', remainingA);
  console.log('remainingB', remainingB);

  // Concatenate the remaining elements of both arrays and shuffle the result
  const concatenated = remainingA.concat(remainingB).sort(() => Math.random() - 0.5);
  console.log('concatenated', concatenated);

  // Pick one random element from the concatenated and shuffled array as the third element
  const randomC = concatenated[Math.floor(Math.random() * concatenated.length)];
  console.log('randomC', randomC);

  // Return the three picked elements
  return [randomA, randomB, randomC];
}

// Example usage
const arrayA = [1, 2, 3, 4];
const arrayB = ['a', 'b', 'c', 'd'];
const result = pickRandomDistinctElements(arrayA, arrayB);
console.log(result); 