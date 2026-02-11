import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuth } from './AuthContext';

const RegisterScreen = ({ onSwitch }: { onSwitch: () => void }) => {
  const { register } = useAuth();

  const handleRegister = async () => {
    await register('test@example.com', 'password');
  };

  return (
    <View>
      <Text>Register Screen</Text>
      <Button title="REGISTER" onPress={handleRegister} />
      <Button title="Go to Login" onPress={onSwitch} />
    </View>
  );
};

export default RegisterScreen;
