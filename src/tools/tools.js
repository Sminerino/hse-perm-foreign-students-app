const tools = {
    getShortGroupString(groupObj, languagePrograms) {
        if(groupObj)
            return languagePrograms[groupObj.program].SHORT +
                '-' + (groupObj.year-2000) + '-' + groupObj.group;
        return '';
    }
};

export default tools;