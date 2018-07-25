export function Acronyms(str) {
    const category = 'Acronym';
    const regex = /[A-Z]{2,}|([A-Z]\.){2,}/g;
    let acronyms = [];
    let highlightWords = [];
    let match = regex.exec(str);

    while (match) {
        var matchText = match[0];
        acronyms.push(matchText);         
        match = regex.exec(str);
    }

    if (acronyms.length > 0)
    {
        highlightWords[category] = acronyms;
    }

    return highlightWords;
}