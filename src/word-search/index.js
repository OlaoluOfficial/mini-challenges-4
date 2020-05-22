<<<<<<< HEAD
/*Steps to word search

1. get index positions of each letter of word from words
2. while visited not empty
a. for each of the row,col pair, compute the adjacents left, adjacent bottom from the pair,
b. updated visited with adjacent positon pair if is same as index position pair of word
c. get alphabet representations of visited pairs from words
d. if all word is in alpha reprensation- then the word was found
*/

// const words = [
//   ["D", "S", "A", "N", "C"],
//   ["I", "N", "O", "I", "T"],
//   ["T", "A", "T", "R", "O"],
//   ["M", "F", "O", "U", "T"],
// ];

// const word="SANCTIONS"

function wordSearch(words, word) {
  let wordIndex = [];
  for (let p = 0; p < words.length; p++) {
    for (m = 0; m < words[p].length; m++) {
      if (word.includes(words[p][m])) {
        wordIndex.push([p, m]);
=======
function wordSearch(words, word) {
  let m = words.length;
  let n = words[0].length;

  let result = false;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (check(words, word, i, j, 0)) {
        result = true;
>>>>>>> 00ac488c8e250b380ba2a01d652a4faa0db2f2f9
      }
    }
  }

<<<<<<< HEAD
  
  if (word[0] === word[word.length - 1]) {
      //check if the word appears only once
      let count = words.reduce(function (acc, curr) {
        if (curr.includes(word[0])) {
          acc += 1;
        }
        return acc;
      }, 0);
      if(count<2){
        return false;
      }
  }

  let i = 0;
  let visited = [];
  visited.push(wordIndex[0]); //initialize visited with first index array

  while (i < visited.length) {
    let rowIndex = visited[i][0];
    let colIndex = visited[i][1];

    let rightAdjacentIndex = [rowIndex, colIndex + 1];
    let bottomAdjacentIndex = [rowIndex + 1, colIndex];
    let leftAdjacentIndex = [rowIndex, colIndex - 1];
    let topAdjacentIndex = [rowIndex - 1, colIndex];

    for (let x = 0; x < wordIndex.length; x++) {
      if (
        JSON.stringify(wordIndex[x]) === JSON.stringify(rightAdjacentIndex) &&
        visited.every(
          (e) => JSON.stringify(e) !== JSON.stringify(rightAdjacentIndex)
        )
      ) {
        visited.push(rightAdjacentIndex);
      }
      if (
        JSON.stringify(wordIndex[x]) === JSON.stringify(bottomAdjacentIndex) &&
        visited.every(
          (e) => JSON.stringify(e) !== JSON.stringify(bottomAdjacentIndex)
        )
      ) {
        visited.push(bottomAdjacentIndex);
      }
      if (
        JSON.stringify(wordIndex[x]) == JSON.stringify(leftAdjacentIndex) &&
        visited.every(
          (e) => JSON.stringify(e) !== JSON.stringify(leftAdjacentIndex)
        )
      ) {
        visited.push(leftAdjacentIndex);
      }
      if (
        JSON.stringify(wordIndex[x]) === JSON.stringify(topAdjacentIndex) &&
        visited.every(
          (e) => JSON.stringify(e) !== JSON.stringify(topAdjacentIndex)
        )
      ) {
        visited.push(topAdjacentIndex);
      }
    }

    i += 1;
  }

  let alphabetPosVisited = [];

  for (let j = 0; j < visited.length; j++) {
    alphabetPosVisited.push(words[visited[j][0]][visited[j][1]]);
  }

  let count = 0;
  for (let w = 0; w < word.length; w++) {
    if (alphabetPosVisited.includes(word[w])) {
      count += 1;
    }
  }

  if (count === word.length) {
    return true;
  } else {
    return false;
  }
}
=======
  return result;
}

function check(words, word, i, j, k) {
  let m = words.length;
  let n = words[0].length;

  if (i < 0 || j < 0 || i >= m || j >= n) {
    return false;
  }

  if (words[i][j] == word.charAt(k)) {
    let temp = words[i][j];
    words[i][j] = '#';
    if (k == word.length - 1) {
      return true;
    } else if (check(words, word, i - 1, j, k + 1) ||
      check(words, word, i + 1, j, k + 1) ||
      check(words, word, i, j - 1, k + 1) ||
      check(words, word, i, j + 1, k + 1)) {
      return true;
    }
    words[i][j]=temp;
  }

  return false;
}

>>>>>>> 00ac488c8e250b380ba2a01d652a4faa0db2f2f9

module.exports = wordSearch;
