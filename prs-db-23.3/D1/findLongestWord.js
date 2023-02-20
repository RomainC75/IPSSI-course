const words = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
  "disobedienze"
];

const findLongestWordStandard = (wordsArray) => {
  let wordIndex = -1
  let wordLength = 0

  words.forEach((word, index) => {
    if (word.length > wordLength) {
      wordIndex = index;
      wordLength = word.length
    }
  });
  return wordsArray[wordIndex]
};

// console.log(findLongestWord(words))

const findLongestWord = (wordsArray) =>{
    wordsArray.sort((a,b)=>b.length-a.length)
    return wordsArray[0]
}

console.log(findLongestWord(words))