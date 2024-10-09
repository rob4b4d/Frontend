// App.js
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginScreen from './src/screens/LoginScreen';
import AdminDashboard from './src/screens/AdminDashboard';
import ConductorPage from './src/screens/ConductorPage';

const Stack = createStackNavigator();

const App = () => {
  const [initialRoute, setInitialRoute] = useState('Login');

  useEffect(() => {
    const checkUserRole = async () => {
      const token = await AsyncStorage.getItem('token');
      const role = await AsyncStorage.getItem('role');

      if (token && role) {
        if (role === 'admin') {
          setInitialRoute('AdminDashboard');
        } else if (role === 'conductor') {
          setInitialRoute('ConductorPage');
        }
      }
    };

    checkUserRole();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
        <Stack.Screen name="ConductorPage" component={ConductorPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
