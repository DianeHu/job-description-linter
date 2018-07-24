import descriptions from '../Data/descriptions';

export function getCategoryDescription(category) {
    var description = descriptions[category];
    return description;
}