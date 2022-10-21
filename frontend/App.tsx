import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Main from './src/navigation/main';

const App = () => {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
};

export default App;
