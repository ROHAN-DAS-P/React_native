import React, { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { useAuth } from './AuthContext';

const LoginScreen = ({ onSwitch }: { onSwitch: () => void }) => {
  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      await login('test@example.com', 'password');
    } catch {
      Alert.alert('Login failed', 'Invalid credentials');
    }
  };

  return (
    <View>
      <Text>Login Screen</Text>
      <Button title="LOGIN" onPress={handleLogin} />
      <Button title="Go to Register" onPress={onSwitch} />
    </View>
  );
};

export default LoginScreen;
