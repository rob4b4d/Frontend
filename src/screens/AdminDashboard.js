// src/screens/AdminDashboard.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AdminDashboard = ({ navigation }) => {
  const handleLogout = async () => {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('role');
    navigation.replace('Login');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Welcome to Admin Dashboard</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};
  
export default AdminDashboard;
