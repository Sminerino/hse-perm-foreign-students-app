import russian from './rus.js';
import english from './eng.js';

export const languageGetter = (language) => {
    switch(language) {
        case 'english':
            return english;
        case 'russian':
            return russian;
        default:
            console.log('err while selecting language');
            return english;
        }
};

export default languageGetter;