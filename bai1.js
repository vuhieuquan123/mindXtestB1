function getLongestStrings(array) {
  let longestStrings = [];
  for (let string of array) {
    if (string.length > longestStrings[longestStrings.length - 1].length) {
      longestStrings.push(string);
    }
  }
  return longestStrings;
}

const array = ["BINH", "HUNG", "PHUOC", "CAO", "KHANH"];

const longestStrings = getLongestStrings(array);

console.log(longestStrings);
