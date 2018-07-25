export function Acronyms(str) {
    const regex = /[A-Z]{2,}|([A-Z]\.){2,}/g;
    let acronyms = [];
    let match = regex.exec(str);

    while (match) {
        var matchText = match[0];
        acronyms.push(matchText);         
        match = regex.exec(str);
    }

    return acronyms;
}