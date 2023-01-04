/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';

import AddRoutine from './src/views/AddRoutine';
import Board from './src/views/Board';
import Home from './src/views/HomePage/Home';
import HomePage from './src/views/HomePage/HomePage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  HomePage: undefined;
  Profile: undefined;
};

const App = () => {
  const [home, setHome] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setHome(false);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home">
        {home ? (
          <Stack.Screen name="Home" component={Home} />
        ) : (
          <Stack.Screen name="HomePage" component={HomePage} />
        )}
        <Stack.Screen name="Board" component={Board} />
        <Stack.Screen name="AddRoutine" component={AddRoutine} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
