// src/screens/ConductorPage.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ConductorPage = ({ navigation }) => {
  const handleLogout = async () => {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('role');
    navigation.replace('Login');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Welcome to Conductor Page</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default ConductorPage;
    