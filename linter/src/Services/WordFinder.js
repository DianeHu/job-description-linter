export function VetoedWords(str) {
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    str = str.toLowerCase();
    const stringArray = str.trim().split(" ");
    var highlightPairs = [];

    var stringMap = new Map();
    stringArray.forEach(s => {
        if(!stringMap.has(s)){
            stringMap.set(s, 1);
        } else {
            stringMap.set(s, stringMap.get(s) + 1);
        }
    })

    var VetoCategories = JSON.parse('{ "Aggressive": ["driven", "outspoken", "aggressive", "tackle"], "Masculine": ["man", "men"], "Hyperbolic": ["rockstar", "rock star", "ninja", "guru"]}');

    for(var category in VetoCategories){
        for(var i = 0; i < VetoCategories[category].length; i++){
            var word = VetoCategories[category][i];
            if(stringMap.has(word) && stringMap.get(word) > 0){
                var resultsPair = { category, word };
                highlightPairs.push(resultsPair);
            }
        }
    }

    return highlightPairs;
}
