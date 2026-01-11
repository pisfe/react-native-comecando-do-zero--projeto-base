import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import Cesta from './src/telas/Cesta/index.js';
import mock from './src/mock/cesta.js'

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar/>
      <Cesta {...mock}/>
    </SafeAreaView>
  );
}
