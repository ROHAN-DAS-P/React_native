import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuth } from './AuthContext';

const LoginScreen = () => {
  const { login } = useAuth();

  return (
    <View>
      <Text>Login Screen</Text>
      <Button
        title="Login (Demo)"
        onPress={() => login('test@example.com', 'password')}
      />
    </View>
  );
};

export default LoginScreen;
