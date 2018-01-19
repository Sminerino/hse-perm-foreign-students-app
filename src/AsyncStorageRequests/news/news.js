import { AsyncStorage } from 'react-native';

export const newsAsyncStorageRequests = {

    async getAllNews() {
        let response = await AsyncStorage.getItem('news');
        if(response) return JSON.parse(response);
        else return [];
    },

    async getNewsPiece(id) {
        let response = await AsyncStorage.getItem(`news[${id}]`)
        if(response) return JSON.parse(response);
        else return null;
    }
};