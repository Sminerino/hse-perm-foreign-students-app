import React from 'react';
import { AppLoaderContainer } from "./src/redux/Containers/AppLoader/AppLoaderContainer";
import { store } from "./src/redux/Store/store";
import { Provider } from 'react-redux';

const App = () => (
    <Provider store={store}>
        <AppLoaderContainer />
    </Provider>
);

export default App;