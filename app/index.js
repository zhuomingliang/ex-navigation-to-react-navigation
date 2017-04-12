import React, { Component } from 'react';
import { StatusBar, View, Platform } from 'react-native';
import { NavigationProvider, createRouter } from '@expo/ex-navigation';

import { Tabs } from './config/routes';
import Drawer from './layouts/Drawer';
import { AlertProvider } from './components/Alert';

const Router = createRouter(() => ({}));

const App = () => (
  <AlertProvider>
    <NavigationProvider router={Router}>
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor="#fff"
          barStyle="dark-content"
        />
         {Platform.OS === 'ios' ? <Tabs /> : <Drawer />}
      </View>
    </NavigationProvider>
  </AlertProvider>
);


export default App;
