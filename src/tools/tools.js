export const tools = {
    getShortGroupString(groupObj, languagePrograms) {
        if(groupObj && groupObj.group && groupObj.program && groupObj.year)
            return languagePrograms[groupObj.program].SHORT +
                '-' + (groupObj.year-2000) + '-' + groupObj.group;
        return '';
    }
};
