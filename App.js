import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import AppThemeColor from './app/assets/colors';
import {persistor, store} from './app/redux/';
import AppRoutes from './app/routes';
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={AppThemeColor.mainColor}
        />
        <AppRoutes></AppRoutes>
      </PersistGate>
    </Provider>
  );
};
export default App;
