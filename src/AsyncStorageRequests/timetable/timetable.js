import { AsyncStorage } from 'react-native';

export const timetableAsyncStorageRequests = {
    async setClassesForDate(_date, classes) {
        return AsyncStorage.setItem('classes_'+_date, JSON.stringify(classes))
    },

    async getClassesForDate(_date) {
        let response = await AsyncStorage.getItem('classes_'+_date);
        if(response) return JSON.parse(response);
        else throw new Error(`classes for the date ${_date} are not found in AsyncStorage`)
    }
};