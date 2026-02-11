import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuth } from './AuthContext';

const RegisterScreen = () => {
  const { register } = useAuth();

  return (
    <View>
      <Text>Register Screen</Text>
      <Button
        title="Register (Demo)"
        onPress={() => register('new@example.com', 'password')}
      />
    </View>
  );
};

export default RegisterScreen;
