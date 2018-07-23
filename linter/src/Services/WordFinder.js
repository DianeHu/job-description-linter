export function VetoedWords(str) {
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    str = str.toLowerCase();
    const stringArray = str.trim().split(" ");
    var highlightPairs = [];

    var VetoCategories = JSON.parse('{ "Aggressive": ["driven", "outspoken", "aggressive", "tackle"], "Masculine": ["man", "men"], "Hyperbolic": ["rockstar", "rock star", "ninja", "guru"]}');

    for (var i = 0; i < stringArray.length; i++) {
        for (var j = 0; j < VetoCategories.length; j++) {
            if (VetoCategories[j].includes(stringArray[i]) >= 0) {
                var category = VetoCategories[j];
                var word = stringArray[i];
                var resultsPair = { category, word }
                highlightPairs.push(resultsPair);
            }
        }
    }

    return highlightPairs;
}
