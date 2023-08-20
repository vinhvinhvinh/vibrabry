function getRandomIndices(n, m, count) {
  const indices = new Set();
  while (indices.size < count) {
    const index = Math.floor(Math.random() * (m - n + 1)) + n;
    indices.add(index);
  }
  return Array.from(indices);
}

const indices = getRandomIndices(1, 10, 5);
console.log(indices); // e.g. [2, 5, 3, 10, 8]