import {descriptions, pluralDescriptions} from '../Data/descriptions';

export function getCategoryDescription(category, count) {
    if(count > 1) {
        return pluralDescriptions[category];
    } else {
        return descriptions[category];
    }
}