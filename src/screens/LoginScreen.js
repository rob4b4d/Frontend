// src/screens/LoginScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../api';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await api.post('/login', {
        email,
        password,
      });

      const { token, user } = response.data;

      // Store token and user role
      await AsyncStorage.setItem('token', token);
      await AsyncStorage.setItem('role', user.role);

      // Navigate based on user role
      if (user.role === 'admin') {
        navigation.replace('AdminDashboard');
      } else if (user.role === 'conductor') {
        navigation.replace('ConductorPage');
      }
    } catch (error) {
      Alert.alert('Login Failed', 'Invalid credentials or server error');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ marginBottom: 20, borderWidth: 1, padding: 10 }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ marginBottom: 20, borderWidth: 1, padding: 10 }}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
