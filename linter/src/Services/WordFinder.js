import vetoedWords from '../Data/vetoedWords';


export function VetoedWords(str) {
    str = str.replace(/[.,\#!$%\^&\*;:{}=\_`~()]/g,"")
    str = str.toLowerCase();
    const stringArray = str.trim().split(" ");
    var highlightCategories = [];

    var stringMap = new Map();
    stringArray.forEach(s => {
        if(!stringMap.has(s)){
            stringMap.set(s, 1);
        } else {
            stringMap.set(s, stringMap.get(s) + 1);
        }
    })

    for(var category in vetoedWords){
        var wordList = [];
        for(var i = 0; i < vetoedWords[category].length; i++){
            var word = vetoedWords[category][i];
            if(stringMap.has(word) && stringMap.get(word) > 0){
                wordList.push(word)
            }
        }
        if(wordList.length > 0) {
            highlightCategories[category] = wordList;
        }
    }

    return highlightCategories;
}
