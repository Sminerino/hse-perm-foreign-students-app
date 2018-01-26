export function getShortGroupString(groupObj, languagePrograms) {
    if(groupObj && groupObj.group && groupObj.program && groupObj.year)
        return languagePrograms[groupObj.program].SHORT +
            '-' + (groupObj.year-2000) + '-' + groupObj.group;
    return '';
}

export function processTitleLength(string, length) {
    if(string.length > length || 50)
        return string.slice(0,length-3 || 47)+'...';
    return string;
}
