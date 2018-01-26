import { AsyncStorage } from 'react-native';

export const settingsAsyncStorageRequests = {

    async setLanguage(_language) {
        return AsyncStorage.setItem('language', _language);
    },
    async setGroup(_group) {
        return AsyncStorage.setItem('group', JSON.stringify({..._group}));
    },
    async getGroup() {
        let response = await AsyncStorage.getItem('group');
        if(response) return JSON.parse(response);
        else throw new Error('group not found in AsyncStorage');
    },
    async getLanguage() {
        let response = await AsyncStorage.getItem('language');
        if(response) return response;
        else throw new Error('language not found in AsyncStorage');
    },

    async getTranslation(_language) {
        let response = await AsyncStorage.getItem('translation_'+_language);
        if(response) return JSON.parse(response);
        else throw new Error(`translation for the language ${_language} not found in AsyncStorage`)
    },

    async setTranslation(_language, _translation) {
        return AsyncStorage.setItem('translation_'+_language, JSON.stringify(_translation));
    }

};