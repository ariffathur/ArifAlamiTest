/* eslint-disable import/first */
if (__DEV__) {
  import('./reactotron.config').then(() => {});
}

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import { store } from './store';
import AppNavigator from './navigation/AppNavigator';

function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <AppNavigator />
        <Toast />
      </SafeAreaView>
    </Provider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
