// src/api.js
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Base URL of your Laravel API
const api = axios.create({
  baseURL: 'http://your-laravel-api-url/api',
});

// Interceptor to add token to every request
api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
