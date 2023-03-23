const words = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

const getTheLongestWord = (wordsArray) =>{
    let lw = ""
    wordsArray.forEach(function(element) {
        if(element.length > lw.length){
            lw=element
        }
    });
    return lw
}

// const longestW = getTheLongestWord(words)
console.log(getTheLongestWord(words))