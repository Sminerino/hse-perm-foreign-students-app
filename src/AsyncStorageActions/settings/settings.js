import { AsyncStorage } from 'react-native';

const settingsStoreActions = {

    async setSettings(settings) {
        AsyncStorage.multiSet([['group', 'language'],[JSON.stringify(settings.group), settings.language]]);
    },
    async setLanguage(_language) {
        AsyncStorage.setItem('language', _language);
    },
    async setGroup(_group) {
        AsyncStorage.mergeItem('group', JSON.stringify(_group));
    },
    async getGroup() {
        let response = await AsyncStorage.getItem('group');
        if(response) return JSON.parse(response);
        else return null;
    },
    async getLanguage() {
        let response = await AsyncStorage.getItem('language');
        if(response) return response;
        else return null;
    },
    async getAllSettings() {
        let _lang = await AsyncStorage.getItem('language');
        let _group = await AsyncStorage.getItem('group');
        let _initial = await AsyncStorage.getItem('passedInitialSetup');

        if (_lang || _group)
            return {language: _lang, group: JSON.parse(_group), passedInitialSetup: !!_initial};
        return null;
    }

};
export default settingsStoreActions;